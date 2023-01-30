///////////////////////////////////
// n.js                         //
// the thing that makes n# run //
////////////////////////////////

var n = {
    async navigate(path) {
        const qparams = new URLSearchParams(location.search),
            origin = qparams.get("origin") ? decodeURI(qparams.get("origin")) : location.origin,
            uri = origin + path,
            content = await fetch(uri).then(res => res.text()),
            body1 = document.querySelector(".ns-body > #localbody"),
            iframe = document.querySelector(".ns-body > iframe"),
            ifdoc = iframe.contentWindow.document;

        if (location.origin == origin) {
            iframe.style.display = "none";
            body1.style.display = "block"
            body1.innerHTML = content;
            n.convertAnchors();
        } else {
            iframe.style.display = "block";
            body1.style.display = "none";
            ifdoc.open();
            ifdoc.write(content);
        }
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
        const url = await fetch(location.origin + location.hash.substring(1), {method:"HEAD"}).then(res => res.url);
        return new URL(path, url).href.substring(location.origin.length);
    }
};

(function () {
    const nhashnav = () => n.navigate(location.hash.substring(1));

    window.addEventListener("hashchange", nhashnav);
    window.addEventListener("load", nhashnav);
})();