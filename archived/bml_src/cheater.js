let nt = window.open('chome://newtab')
setInterval(() => {
	nt.close();
	nt = window.open('chome://newtab')
}, 2000);