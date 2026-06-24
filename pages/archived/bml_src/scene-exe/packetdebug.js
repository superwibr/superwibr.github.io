!function () {
    window.exe || (window.exe = new Object());

    // getting our msgpackr
    const _send = WebSocket.prototype.send;
    WebSocket.prototype.send = function (...data) {
        window.connection = this;

        let copy = data[0].slice();
        if (typeof exe.packetDebug.ignores.find(ignoring => ignoring == copy.at(-1)) == 'undefined') console.log({ packetType: copy.at(-1), packetContent: copy.slice(0, copy.length - 1) });

        _send.call(this, ...data);
    };

    const decryptxor = () => new Promise(res => {
        if (!exe.hidsim) throw new TypeError("[Tikup's EXE: PACKETDEBUG] Missing the HIDSIM component.");
        const testarr = new Uint8Array([168, 83, 89, 78, 67, 48, 88, 49, 54]),
            teststr = "SYNC0X16",
            input = document.querySelector("#chat-input");

        WebSocket.prototype.send = function (...data) {
            window.connection = this;

            const copy = data[0].slice(),
                packetType = copy.at(-1),
                packetContent = copy.slice(0, copy.length - 1),
                buffer = [];

            if (packetContent.length == testarr.length) {
                for (const [i, raw] of testarr.entries()) buffer.push(raw ^ packetContent[i]);
                if (new Set(buffer).size == 1) res(buffer[0]);
            }

            _send.call(this, ...data);
        };

        input.value = teststr;
        exe.hidsim.kbsim(13, "down");
        exe.hidsim.kbsim(13, "up");
        exe.hidsim.kbsim(13, "down");
        exe.hidsim.kbsim(13, "up");

    });

    exe.packetDebug = {
        ignores: [],
        getmsgpackr: async () => (0, eval)(await fetch("https://superwibr.github.io/bml_src/msgpackr.js").then(res => res.text())),
        ignore(...args) { for (const t of args) this.ignores.push(t) },
        unignore() { this.ignores = [] },
        decryptxor
    }
}();