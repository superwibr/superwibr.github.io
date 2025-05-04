!function () {
	// numbers
	let multiplier = 0.001,
		fov = 1;

	// updating
	document.getElementById("game-canvas").onwheel = function (e) {
		let delta = e.deltaY;
		fov += delta * multiplier;
		if (fov < 1) fov = 1;
	};

	// fov
	Object.defineProperty(Object.prototype, "cameraSizeMultiplier", { configurable: true, get: () => fov, set: () => { } });
}();