!async function () {
	//
	// js & util
	//

	// bit of promotion, aye?
	document.title = "MBOT - By Tikup#8555"

	// vars
	window.exe = new Object()
	exe.pblock = false;
	exe.connection = null;
	exe.debug = false;
	exe.bots = [];
	exe.botself = false;
	const msgtypes = [
		"rotation",
		"movement",
		"passive mode",
		"chat message",
		"stat upgrade",
		"body upgrade",
		"weapon upgrade",
		"control state",
		"control position",
		"ping",
		"update",
		"upgrade point",
		"set stat",
		"killed",
		"announcement",
		"timer",
		"notification",
		"rec body",
		"rec weapon",
		"rec dimension",
		"rec class tree",
		"rec servers",
		"copied",
		"died",
		"entity render",
		"rec tank",
		"gates update",
		"edit mode",
		"server respawn",
		"send to server",
		"popup",
		"init leaderboard",
		"load weapon",
		"load body",
		"change weapon",
		"change body",
		"joined game",
		"reported bug",
		"submitted feedback",
		"wormhole spawn",
		"player count",
		"global broadcast",
		"unlist server"
	];

	// req msgpack
	(0, eval)(await fetch("https://raw.githubusercontent.com/kawanet/msgpack-lite/master/dist/msgpack.min.js").then(res => res.text()));

	// "we do a lil work"
	!function doalilwork() {
		exe.coords = JSON.parse("[" + document.querySelector("#position").innerText.split("Position: ")[1] + "]");

		window.requestAnimationFrame(doalilwork);
	}()

	// math
	const dirdif = function (n1, n2) {
		return (n1 > n2) ? 1 : -1;
	}
	const direction = function (oc, sc) {
		return [dirdif(oc[0], sc[0]), dirdif(oc[1], sc[1])]
	}
	const within = function (oc, sc, dist) {
		return ((Math.abs(oc[0] - sc[0]) <= dist) && (Math.abs(oc[1] - sc[1]) <= dist));
	}
	const relative = function (oc, rc) {
		return [(oc[0] + rc[0]), (oc[1] + rc[1])];
	}

	// bot logic
	const beeline = async function (to, from, dist, pr = [0, 0]) {
		from = exe.coords;

		const dir = direction(to, from),
			wtn = within(to, from, dist);

		console.table({to, dir, wtn, pr});
		console.log(dir, pr, dir != pr)
		
		if(wtn) return exe.inject([1, [0, 0]]);

		// faulty if?
		if (within(dir, pr, 0)) {
			console.log("beeline dir: ", dir)
			exe.inject([1, dir]);
			await new Promise(res => setTimeout(res, 100)) // wait 1/10th of a second
		}
		

		await beeline(to, from, dist, dir); // continue groovin
	}

	//
	// socket overrides
	//

	// storage
	const _send = WebSocket.prototype.send;

	// debug hook & shutoff
	WebSocket.prototype.send = function (...data) {
		const decdata = msgpack.decode(data[0]);
		if (exe.pblock === true && decdata[0] != 10) return;

		exe.connection = this;
		_send.call(this, ...data);

		if (exe.debug === true) {

			// if (decdata[0] != 1) return;
			console.log(msgtypes[decdata[0]] + ": ", decdata[1]);
		}
	}

	// push custom packets 
	exe.inject = function (data) {
		if (!exe.connection) return console.warn("EXE INJECT: Packet dropped because there was no connection!");
		const packet = msgpack.encode(data);
		_send.call(exe.connection, packet);
	};

	// **eat the messages.**
	window.onmessage = function (e) {
		// message = bot. Become controlled.
		exe.pblock = true;

		const pk = e.data;
		switch (pk[0]) {
			case 0: // update master coordinates
				exe.mcoords = pk[1];
				break;
			case 1: // set relatives and range
				break;
			case 2:
				break;
			default:
				console.warn(`EXE BOTMESSAGE: Master packet dropped! (invalid type: ${pk[0]})`);
				break;
		}

	}
}();