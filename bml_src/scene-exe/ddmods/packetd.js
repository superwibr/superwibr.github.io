(async function ({ log }, exe) {
    // requires
    await exe.mods.load("msgpackr");
    await exe.mods.load("hidsim");

    const msgpackr = window.msgpackr;
    const { hidsim } = exe;

    //
    // Key Finding
    //

    // find client key
    const xorkey = await new Promise(res => {
        const teststr = "\u200B",
            testarr = msgpackr.pack(teststr),
            input = document.querySelector("#chat-input"),
            _send = WebSocket.prototype.send; // save original

        WebSocket.prototype.send = function (data) { // patch send method to intercept outgoing message
            window.connection = this; // save connection for listening later

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
    log("[PAKD] Found client packet XOR key: " + xorkey);

    // find server key
    const serverxor = (function () {
        const e = new Event('message'),
            u = Uint8Array.of(0);
        e.data = u.buffer;
        window.connection.dispatchEvent(e);
        return u[0];
    })();
    log("[PAKD] (don't mind the error) Found server packet XOR key: " + serverxor);

    // decoder, encoder
    const
        xd = key => function (packet) {
            const copy = packet.slice();
            for (const [i] of copy.entries()) copy[i] ^= key;

            const type = copy.at(-1),
                content = msgpackr.unpack(copy.slice(0, copy.length - 1));
            return [type, content];
        },
        xe = key => function (assembled) {
            let packet = msgpackr.pack(assembled[1]);
            packet = new Uint8Array([...packet, assembled[0]]);

            for (const [i] of packet.entries()) packet[i] ^= key;

            return packet;
        },
        cxd = xd(xorkey),
        cxe = xe(xorkey),
        sxd = xd(serverxor),
        sxe = xe(serverxor);

    // debugger
    const
        _send = WebSocket.prototype.send,
        packet_ignores = [],
        packet = {
            debug() {
                const _send = this._send = WebSocket.prototype.send;

                WebSocket.prototype.send = function (data) {
                    let packet = cxd(data);

                    if (typeof packet_ignores.find(n => n == packet[0]) == 'undefined') console.log(packet);

                    _send.call(this, data);
                };
            },
            undebug() { WebSocket.prototype.send = _send },
            ignore(...args) { for (const t of args) packet_ignores.push(t) },
            cxd, cxe, sxd, sxe,
            inject(ap) { window.connection.send(cxe(ap)) }
        };

    // bundle up, minor api, return
    return {
        xorkey,
        serverxor,
        ...packet
    }
})