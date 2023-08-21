(async function ({ log }, exe) {
	// requires
	await exe.mods.load("msgpackr");
	await exe.mods.load("hidsim");

	const msgpackr = window.msgpackr;
	const { hidsim } = exe;

	//
	// Key Finding
	//

	// connection saver
	!function () {
		const _send = WebSocket.prototype.send; // save original
		WebSocket.prototype.send = function (data) {
			window.connection = this; // save connection for listening
			_send.call(this, data);
		}
	}();

	const xor = { c: 0, s: 0 };

	// find client key
	xor.c = await new Promise(res => {
		const teststr = "\u200B",
			testarr = msgpackr.pack(teststr),
			input = document.querySelector("#chat-input"),
			_send = WebSocket.prototype.send; // save original

		WebSocket.prototype.send = function (data) { // patch send method to intercept outgoing message
			const copy = data.slice(),
				packetContent = copy.slice(0, copy.length - 1),
				buffer = [];

			if (packetContent.length == testarr.length) { // same amount of data as our test message
				for (const [i, raw] of testarr.entries()) buffer.push(raw ^ packetContent[i]); // xor with tester to get key
				if (new Set(buffer).size == 1) { // only return if every byte has the same key
					WebSocket.prototype.send = _send; // restore original send function
					res(buffer[0]);
				};
			};

			_send.call(this, data);
		};

		// send message
		input.click();
		input.value = teststr;
		hidsim.kbsim(13, "down");
		hidsim.kbsim(13, "up");
		hidsim.kbsim(13, "down");
		hidsim.kbsim(13, "up");
	});
	log("[PAKD] Found client packet XOR key: " + xor.c);

	// find server key
	xor.s = (function () {
		const e = new Event('message'),
			u = Uint8Array.of(0);
		e.data = u.buffer;
		window.connection.dispatchEvent(e);
		return u[0];
	})();
	log("[PAKD] (don't mind the error) Found server packet XOR key: " + xor.s);

	//
	// Packet listings
	//

	// decoder, encoder
	const
		xd = key => function (packet) {
			const copy = [];
			for (const int of new Uint8Array(packet)) copy.push(int ^ key);

			const type = copy.at(-1),
				content = msgpackr.unpack(new Uint8Array(copy).slice(0, copy.length - 1));
			return [type, content];
		},
		xe = key => function (assembled) {
			let packet = msgpackr.pack(assembled[1]);
			packet = new Uint8Array([...packet, assembled[0]]);

			for (const [i] of packet.entries()) packet[i] ^= key;

			return packet;
		},
		cxd = xd(xor.c),
		cxe = xe(xor.c),
		sxd = xd(xor.s),
		sxe = xe(xor.s);

	// Packetfinder
	const typetests = {
		ROTATION_INPUT: {
			from: "client",
			condition: packet => typeof packet[1] === 'number' && packet[1] < 4 && packet[1] != 0,
			test: () => hidsim.msim("click", hidsim.cxyp(40, 40))
		},
		SHOOTING_INPUT: {
			from: "client",
			condition: packet => packet[1] === true,
			test: () => {
				hidsim.msim("down", hidsim.cxyp(40, 40));
				hidsim.msim("up", hidsim.cxyp(40, 40));
			}
		},
		CHANGE_CONTROL_STATE: {
			from: "client",
			condition: packet => packet[1] === 0,
			test: () => {
				hidsim.msim("down", hidsim.cxyp(40, 40));
				hidsim.msim("up", hidsim.cxyp(40, 40));
			}
		},
		CHANGE_CONTROL_POSITION: {
			from: "client",
			condition: packet => typeof packet[1] == 'object' && packet[1].length === 2,
			test: () => hidsim.msim("click", hidsim.cxyp(40, 40))
		},
		MOVEMENT_INPUT: {
			from: "client",
			condition: packet => typeof packet[1] == 'object' && packet[1].length === 2 && Number.isInteger(packet[1][0]),
			test: () => {
				hidsim.kbsim.wasd([-1, -1]);
				hidsim.kbsim.wasd([0, 0]);
			}
		}
	};

	const type = async name => {
		if (!Object.keys(typetests).includes(name)) return -1; // packet type not listed

		const type = typetests[name];

		// cache
		if (type.number) {
			log("[PAKD] Fetched " + name + " from cache: " + type.number);
			return type.number;
		};

		switch (type.from) { // testing
			case "client": {
				const paknum = await new Promise(res => {
					const _send = WebSocket.prototype.send;
					WebSocket.prototype.send = function (data) {
						let packet = cxd(data);

						if (type.condition(packet)) {
							WebSocket.prototype.send = _send;
							res(packet[0]);
						}

						_send.call(this, data);
					};
					type.test();
				});
				type.number = paknum;
				log("[PAKD] Tested " + name + " for ID: " + type.number);
				return paknum;
			};

			case "server":
				return -1; // no need of server decoder yet

			default: return -1;
		};
	}

	//
	// API and utilities
	//

	// debugger
	const
		_send = WebSocket.prototype.send,
		packet_ignores = [],
		packet = {
			debug() {
				const _send = this._send = WebSocket.prototype.send;

				WebSocket.prototype.send = function (data) {
					let packet = cxd(data);

					if (typeof packet_ignores.find(n => n == packet[0]) == 'undefined') console.log(packet);

					_send.call(this, data);
				};
			},
			undebug() { WebSocket.prototype.send = _send },
			ignore(...args) { for (const t of args) packet_ignores.push(t) },
			de: { cxd, cxe, sxd, sxe },
			inject(ap) { window.connection.send(cxe(ap)) },
			type,
			async typeall() { for (const name of Object.keys(typetests)) await type(name) }
		};

	// bundle up, minor api, return
	return {
		xor,
		...packet
	};
});