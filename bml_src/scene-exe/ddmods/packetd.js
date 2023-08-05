(async function ({ log }, exe) {
    // requires
    await exe.mods.load("msgpackr");
    await exe.mods.load("hidsim");

    const msgpackr = window.msgpackr;
    const { hidsim } = exe;

    // find key
    const xorkey = await new Promise(res => {
        const teststr = "Doshen Danberg",
            testarr = msgpackr.pack(teststr),
            input = document.querySelector("#chat-input"),
            _send = WebSocket.prototype.send; // save original

        WebSocket.prototype.send = function (data) { // patch send method to intercept outgoing message
            window.connection = this;

            const copy = data.slice(),
                packetContent = copy.slice(0, copy.length - 1),
                buffer = [];

            if (packetContent.length == testarr.length) { // same amount of data as our test message
                for (const [i, raw] of testarr.entries()) buffer.push(raw ^ packetContent[i]); // xor with tester to get key
                if (new Set(buffer).size == 1) { // only return if every byte has the same key
                    WebSocket.prototype.send = _send; // restore original send function
                    res(buffer[0]);
                };
            }

            _send.call(this, data);
        };

        // send message
        input.click();
        input.value = teststr;
        hidsim.kbsim(13, "down");
        hidsim.kbsim(13, "up");
        hidsim.kbsim(13, "down");
        hidsim.kbsim(13, "up");
    });
    log("[PAKD] Found packet XOR key");

    // decoder, encoder
    const
        xd = function (packet) {
            const copy = packet.slice();
            for (const [i] of copy.entries()) copy[i] ^= xorkey;

            const type = copy.at(-1),
                content = msgpackr.unpack(copy.slice(0, copy.length - 1));
            return [type, content];
        },
        xe = function (assembled) {
            let packet = msgpackr.pack(assembled[1]);
            packet = new Uint8Array([...packet, assembled[0]]);

            for (const [i] of packet.entries()) packet[i] ^= xorkey;

            return packet;
        }

    // debugger
    const
        _send = WebSocket.prototype.send,
        packet_ignores = [],
        packet = {
            debug() {
                const _send = this._send = WebSocket.prototype.send;

                WebSocket.prototype.send = function (data) {
                    let packet = xd(data);

                    if (typeof packet_ignores.find(n => n == packet[0]) == 'undefined') console.log(packet);

                    _send.call(this, data);
                };
            },
            undebug() { WebSocket.prototype.send = _send },
            ignore(...args) { for (const t of args) packet_ignores.push(t) },
            xd, xe,
            inject(ap) { window.connection.send(xe(ap)) }
        };

    // bundle up, minor api, return
    return {
        xorkey,
        ...packet
    }
})