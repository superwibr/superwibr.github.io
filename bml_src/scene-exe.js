// nonfunctional. do not use.
!function () {
	const key = type => key => { // curried function to emulate key events
			const map = {
				'd': 'keydown',
				'u': 'keyup'
			}

			if (type == 'p') { // for keypresses since `keypress` is deprecated
				key('d')(key);
				key('u')(key);
				return;
			}

			document.body.dispatchEvent(new KeyboardEvent(map[type], { key }));
		},
		keydown = key('d'),
		keyup = key('u'),
		keypress = key('p'),
		locclick = (x, y) => {

		},
		gamecanvas = document.querySelector('#game-canvas');

	// setup
	document.body.requestFullscreen();

	document.addEventListener('keypress', evt => { // toggle freecam
		if(evt.key !== 'f' ){}
	})
	gamecanvas.style.height = gamecanvas.offsetHeight + px;

}()