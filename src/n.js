///////////////////////////////////
// n.js                         //
// the thing that makes n# run //
////////////////////////////////

var n = {
    async navigate(path) {
        document.querySelector(".ns-body").innerHTML =
            await fetch(new URL(path, location.origin).href).then(res => res.text());
        n.convertAnchors();
    },
    async convertAnchors() {
        for (const anchor of document.querySelectorAll("a")) {
            console.log(anchor.getAttribute("href"))
            // only applies to relative urls. Basic test if starts with a period or a slash
            if (anchor.getAttribute("href").match(/^[.\/]/)) {
                const path = await n.parsePath(anchor.getAttribute("href"));
                console.log(path)
                anchor.href = "#" + path;
            };
        }
    },
    async parsePath(path) {
        const url = await fetch(location.origin + location.hash.substring(1), { method: "HEAD" }).then(res => res.url);
        return new URL(path, url).href.substring(location.origin.length);
    }
};

(function () {
    const nhashnav = () => n.navigate(location.hash.substring(1));

    window.addEventListener("hashchange", nhashnav);
    window.addEventListener("load", nhashnav);
})();