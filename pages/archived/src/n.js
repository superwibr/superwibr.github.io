///////////////////////////////////
// n.js                         //
// the thing that makes n# run //
////////////////////////////////

var n = {
    async navigate(path) {
        document.querySelector(".ns-body").innerHTML =
            await fetch(new URL(path, location.origin).href).then(res => res.text());
        this.convertRefs();
    },
    async convertRefs() {
        for (const ref of document.querySelectorAll(".ns-body :is([href], [src])")) {
            // only applies to relative urls. Basic test if starts with a period or a slash
            if (this.getRef(ref).match(/^[.\/]/)) {
                const path = await this.parsePath(this.getRef(ref));
                ref.setAttribute(this.getRefType(ref), (ref.nodeName == "A" ? "#" : "") + path);
            };
        }
    },
    async parsePath(path) {
        const url = await fetch(location.origin + location.hash.substring(1), { method: "HEAD" }).then(res => res.url);
        return new URL(path, url).href.substring(location.origin.length);
    },
    getRef(refelem){
        return refelem.getAttribute(this.getRefType(refelem))
    },
    getRefType: elem => elem.getAttribute("href") ? "href" : "src"
};

(function () {
    const nhashnav = () => n.navigate(location.hash.substring(1));

    window.addEventListener("hashchange", nhashnav);
    window.addEventListener("load", nhashnav);
})();