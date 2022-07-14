document.head.insertAdjacentHTML('beforeend', `\
	<style>
	body * {
		transition: opacity 1s;
	}
	</style>
`)

function inView(el) {

	const rect = el.getBoundingClientRect();
	// DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
	const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

	// http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
	const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
	const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

	return (vertInView && horInView);
}

function updateInView() {
	for (x of document.querySelectorAll('body *')) {
		if (inView(x)) x.style.opacity = 1
		else x.style.opacity = 0
	}
}

document.onscroll = updateInView;

updateInView();