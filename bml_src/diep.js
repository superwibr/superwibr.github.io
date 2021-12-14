!function () {
	const promptt =
		"Select Snippet\
		\n\
		\n\
		1: Fullscreen\n\
		2: Low graphics",
		response = new Number(prompt(promptt));

	switch (response) {
		case 1:
			document.documentElement.requestFullscreen();
			break;

		case 2: // from https://greasyfork.org/en/scripts/374624-no-lag
			window.setColor = setInterval(() => {
				if (document.getElementById("loading").innerText === "") {
					input.set_convar("ren_stroke_soft_color", false);
					input.execute("ren_fps true");
					input.execute("ren_solid_background true");
					input.execute("ren_health_background_color 0x000000");
					input.execute("ren_health_fill_color 0xFFD500");
					clearInterval(setColor);
				}
			}, 1000);
			break;

		default:
			alert('please provide a valid option');
			break;
	}
}();