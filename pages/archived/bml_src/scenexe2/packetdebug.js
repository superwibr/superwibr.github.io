!async function () {
	window.exe || (window.exe = new Object());

	// restore console
	(function () {
		const ifc = document.createElement("iframe");
		ifc.style.display = 'none';
		document.body.append(ifc);

		const console = ifc.contentWindow.console;
		const protected = new Proxy(console, { set: () => true });
		window.console = protected;
	})();


	// getting msgpackr
	const msgpackr = window.msgpack || (0, eval)(await fetch("https://superwibr.github.io/bml_src/msgpackr.js").then(res => res.text()));

	// get connection
	const conn = await new Promise(res => {
		const _send = WebSocket.prototype.send;
		WebSocket.prototype.send = function (...data) {
			window.connection = this;
			_send.call(this, ...data);
			WebSocket.prototype.send = _send;
			res(this);
		};
	})

	// record packets
	const recclient = (time, limit = Infinity) => new Promise(res => {
		const _send = WebSocket.prototype.send;
		const buf = [];
		const timeoutid = setTimeout(() => hitlimit(), time);
		const hitlimit = () => {
			clearTimeout(timeoutid);
			res(buf);
			WebSocket.prototype.send = _send;
		}

		WebSocket.prototype.send = function (...data) {
			let copy = msgpackr.decode(data[0].slice());
			if (typeof exe.pakd.ignores.find(ignoring => ignoring == copy[0]) == 'undefined') {
				const o = { packetType: copy[0], packetContent: copy.slice(1) }
				console.log(o);
				buf.push(o);
			};
			if (buf.length >= limit) hitlimit();

			_send.call(this, ...data);
		};
	});
	const recserver = (time, limit = Infinity) => new Promise(res => {
		const buf = [];
		const timeoutid = setTimeout(() => hitlimit(), time);
		const hitlimit = () => {
			clearTimeout(timeoutid);
			res(buf);
			conn.removeEventListener("message", hook);
		};

		function hook({ data }) {
			data = new Uint8Array(data);
			buf.push(data);
			if (buf.length >= limit) hitlimit();
		};
		conn.addEventListener("message", hook);
	})

	const rawone = () => new Promise(res => {
		const _send = WebSocket.prototype.send;

		const got = packet => {
			WebSocket.prototype.send = _send;
			res(packet);
		};

		WebSocket.prototype.send = function (...data) {
			window.connection = this;

			let copy = data[0].slice();
			got(copy);

			_send.call(this, ...data);
		};
	});

	const decryptxor = () => new Promise(res => {

	});

	exe.pakd = {
		ignores: [],
		ignore(...args) { for (const t of args) this.ignores.push(t) },
		unignore() { this.ignores = [] },

		recclient,
		recserver,

		conn
	}
}();