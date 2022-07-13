!function () {
	// bit of promotion, aye?
	document.title = "FOVSM - By Tikup#8555";

	// numbers
	let multiplier = 0.01,
		fov = 1;

	// updating
	document.getElementById("game-canvas").onwheel = function (e) {
		let delta = e.deltaY;
		fov += delta * multiplier;
		if (fov < 0.5) fov = 0.5;
	};

	// fov
	Object.defineProperty(Object.prototype, "cameraSizeMultiplier", { configurable: true, get: () => fov, set: () => { } });
}();