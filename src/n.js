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
        } else {
            iframe.style.display = "block";
            body1.style.display = "none";
            ifdoc.open();
            ifdoc.write(content);
        }
    }
};

(function () {
    const nhashnav = () => n.navigate(location.hash.substring(1, location.hash.length));

    window.addEventListener("hashchange", nhashnav);
    window.addEventListener("load", nhashnav);
})();