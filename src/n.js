///////////////////////////////////
// n.js                         //
// the thing that makes n# run //
////////////////////////////////

var n = {
    navigate(path){
        const qparams = new URLSearchParams(location.search),
            origin = qparams.get("origin") ? decodeURI(qparams.get("origin")) : location.origin,
            uri = origin + path;
        
        fetch(uri).then(res => res.text()).then(txt => document.querySelector(".ns-body > iframe").contentWindow.document.write(txt));
    }
};

(function(){
    const nhashnav = () => n.navigate(location.hash.substring(1, location.hash.length));

    window.addEventListener("hashchange", nhashnav);
    window.addEventListener("load", nhashnav);
})();