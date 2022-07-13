document.head.insertAdjacentHTML('beforeend', `\
	* {
		opacity: 0.0;
		transition: opacity 1s;
	}

	* .inview {
		opacity: 1;
	}
`)

function inView(el) {
	var sb = document.body.getBoundingClientRect();
	var eb = el.getBoundingClientRect();
	return !((eb.top + eb.height < 0) || (eb.top > sb.height));
}

function updateInView() {
	for (x of document.querySelectorAll('*')) {
		if (inView(x)) x.classList.add('inview')
		else x.classList.remove('inview');
	}
}

document.body.onscroll = updateInView;

updateInView();