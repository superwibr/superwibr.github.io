!async function () {
    // getting our msgpackr
    (0, eval)(await fetch("https://superwibr.github.io/bml_src/msgpackr.js").then(res => res.text()));
    const _send = WebSocket.prototype.send,
        msgpackr = window.msgpackr;
    WebSocket.prototype.send = function (...data) {
        window.connection = this;
        console.log(data[0])
        _send.call(this, ...data);
    };
}();