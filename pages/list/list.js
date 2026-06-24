import pages from "../0.js";

//
// Show the list
//
const listPages = async function ({ query, showtags, showinvis }) {
	// get element references
	const list = document.querySelector(".arlist");

	// regex
	const result = query?.match(/(\[(?<tags>[\w\s,]+)\])?\s*(?<query>.+)?/);
	const mquery = result?.groups.query?.trim();
	const tags = result?.groups.tags?.replace(/\s/g, "").split(",");

	const lowerQuery = mquery ? mquery.toLowerCase() : null;

	// filtering the entries
	const matches = (function () {
		// invisibles
		let matches = showinvis
			? Object.entries(pages)
			: Object.entries(pages).filter(([key, page]) => !page.tags.includes("invis"))

		// tag matching
		matches = tags
			? matches.filter(([key, page]) => tags.every(tag => page.tags.includes(tag)))
			: matches

		// query matching
		matches = lowerQuery === null
			? matches
			: matches.filter(([key, page]) => {
				const lowerItem = page.name.toLowerCase();

				const words = lowerQuery.split(' ');

				// Check if all words in the query are present in the item (in any order)
				return words.every(word => lowerItem.includes(word));

				//TODO add tag filtering
			});

		return matches;
	})();

	// displaying the list
	list.innerHTML = "";
	for (const [key, entry] of matches) {
		const a = document.createElement("a");
		a.href = `/pages/${key}/`;
		a.innerText = entry.name;

		const li = document.createElement("li");
		li.append(
			showtags ? `[${entry.tags.toString().replace(/,/g, ", ")}] ` : "",
			a
		);
		list.append(li);
	}
};
// initial list
listPages({ query: null, showinvis: false });

// listen
const queryinput = document.querySelector("#queryinput");
const showtagsbox = document.querySelector("#showtags");
const showinvisbox = document.querySelector("#showinvis");
const filterbutton = document.querySelector("#filter");
filterbutton.addEventListener("click", () => listPages({
	query: queryinput.value || null,
	showinvis: showinvisbox.checked,
	showtags: showtagsbox.checked
}));