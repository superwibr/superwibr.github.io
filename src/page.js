// sets up router and handles page changes

import Cicero from "./cicero.js";
import pages from "/pages/0.js";

const loadPage = async function (key, bypassindex = false) {
	const main = document.querySelector(".main");
	const path = `/pages/${key}/index.html`;

	const p = bypassindex
		? {}
		: pages[key];
	if (!p && !bypassindex) {
		main.innerHTML = `Sorry m8, can't find that. <a id="tryhard">Try anyways?</a>`;
		document.querySelector("#tryhard").onclick = () => loadPage(key, true);
		throw "Sorry m8, can't find that";
	}

	if (p.ex === true) return location.replace(path);

	const content = await fetch(path)
		.then(res => res.ok ? res.text() : `Sorry m8, ERROR ${res.status}`)
		.catch(e => new Error("Sorry m8: ", e));

	// display content and load scripts
	main.innerHTML = content;
	document.title = p.title;

	main.querySelectorAll("[src]").forEach(sourced => sourced.src = new URL(
		sourced.getAttribute("src"),
		new URL(path, location)
	));

	main.querySelectorAll("script").forEach(Cicero.replaceAndRunScript);
};

const route = new Cicero();
route
	.redirect("", "/")
	.route("/", () => loadPage("welcome"))

	.redirect("/pages/", "/list")
	.route("/list", () => loadPage("list"))

	.route("/help", () => loadPage("help"))

	.route("/pages/:key/", (params) => loadPage(params.key))
	.route("/pages/:key/*rest", (params, path) => window.open(path), false)

	.start();

window.gspnp = { route };