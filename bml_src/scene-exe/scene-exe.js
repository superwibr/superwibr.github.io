// it might work later.
!async function () {
	"use strict"
	//
	// js overrides
	//
	window.exe = new Object();
	exe.ui = new Object()
	exe.ui.square = false;
	exe.slave = false;

	// message type map
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

	// require msgpack frontend implementation
	eval(await fetch("https://raw.githubusercontent.com/kawanet/msgpack-lite/master/dist/msgpack.min.js").then(res => res.text()));

	// wss hook debug
	const _send = WebSocket.prototype.send;
	WebSocket.prototype.send = function (...data) {
		window.connection = this;
		// wss full override
		if (exe.slave === true) {
			if(data[0].length != 3) return;
			// console.log("received: ", data[0])
			data = [data[0][0], data[0][1]];
			console.log(data)
			const idat = msgpack.encode(data)
			// console.log(idat)
			_send.call(this, idat);
		} else {
			const decdata = msgpack.decode(data[0])
			if (typeof exe.slave == "number") {
				if (!exe.swin) exe.swin = window.open("https://scenexe.io");
				const odat = decdata;
				odat.push(0);
				exe.swin.postMessage(odat, '*');
				console.log("sent: " + odat)
			}
			_send.call(this, ...data);

			console.log(msgtypes[decdata[0]] + ": " + decdata[1]);
		}

	};
	// multibox message handler
	window.onmessage = function (e) {
		console.log("message: ", e.data)
		window?.connection?.send(e.data)
	};


		//
		// ui overrides
		//


		// frame-by-frame correction
		(function frameoverrides() {
			const canvas = document.querySelectorAll("body>canvas:is(#game-canvas, #hud-canvas, #ui-canvas)");

			for (const c of canvas) {
				// 1:1 for equal FOV
				if (exe.ui.square == true && c.style.width != '100vh') {
					c.style.width = '100vh';
				} else if (exe.ui.square == false && c.style.width !== '100vw') {
					c.style.width = '100vw';
				}

				// adjustment (canvas to actual render size)
				const rect = c.getBoundingClientRect();
				if (c.width != rect.width || c.height != rect.height) {
					c.width = rect.width;
					c.height = rect.height;
				}
			}

			window.exe_uio = window.requestAnimationFrame(frameoverrides);
		})()

	// styling
	document.head.insertAdjacentHTML('beforeend', `<style>body{width:100vw;height:100vh;background:darkslategrey;display:flex;justify-content:center;} body>canvas{width:100vh;height:100vh;}`)

	// menu slab

	// 
	// behaviour overrides
	//

	// toggle 1:1
}()