(async function ({ log }, exe) {
	// requires
	await exe.mods.load("hidsim");
	await exe.mods.load("packetd");

	const { hidsim, pakd } = exe;

	//
	// Navigation math
	//
	const within = (ori, dest, r) => (Math.abs(ori[0] - dest[0]) ** 2) + (Math.abs(ori[1] - dest[1]) ** 2) <= r ** 2;
	const vdir = ([ox, oy], [dx, dy]) => {
		const
			dir = [dx - ox, dy - oy],
			max = Math.max(Math.abs(dir[0]), Math.abs(dir[1])),
			normal = [dir[0] / max, dir[1] / max];
		if(normal.includes(NaN)) return [0, 0]; // nanproofing
		return normal;
	};

	//
	// Navigation logic
	//
	const 
		kbmove = (dir) => hidsim.kbsim.wasd(dir),
		pakmove = async dir => pakd.inject([await pakd.type("MOVEMENT_INPUT"), dir]);
	const beeline = move => (ori, dest, r) => within(ori, dest, r) ? move([0, 0]) : move(vdir(ori, dest))

	// data and loop
	const navdata = {
		self: [0, 0],
		dest: [NaN, NaN],
		tolerance: 200,
		mode: 0,
		target: "placeanidhere"
	}
	setInterval(() => {
		// update location
		navdata.self = JSON.parse(`[${document.querySelector("#position").innerText.split("Position: ")[1]}]`);

		// alpha movement
		navdata.dest = pakd.state.iddata(navdata.target).dest;
		if(navdata.mode) beeline(pakmove)(navdata.self, navdata.dest, navdata.tolerance);
	}, 200);


	// minor api and return
	return {
		navdata
	};
})