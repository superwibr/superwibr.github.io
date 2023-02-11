(function () {
    // keyboard and mouse simulators
    const kbsim = function (keyCode, type) {
        const evtName = (typeof (type) === "string") ? "key" + type : "keydown",
            event = new Event(evtName, { bubbles: true, cancelable: false });
        event.keyCode = keyCode;
        document.dispatchEvent(event);
    };
    kbsim.wasd = function ([dx, dy]) {
        kbsim(87, "up");
        kbsim(65, "up");
        kbsim(83, "up");
        kbsim(68, "up");
        switch (dx) {
            case 1:
                kbsim(68);
                break;
            case -1:
                kbsim(65);
                break;
        };
        switch (dy) {
            case 1:
                kbsim(83);
                break;
            case -1:
                kbsim(87);
                break;
        };
    };
    const msim = function (type, [x, y] = [0, 0]) {
        const event = new MouseEvent((type == "click") ? "click" : "mouse" + type, { bubbles: true, cancelable: false, clientX: x, clientY: y });
        document.dispatchEvent(event);
    };
    msim.clickAndHold = function ([x, y]) {
        ["over", "down", "click"].forEach(function (eventType) {
            msim(eventType, [x, y]);
        });
    };
    const cxyp = (px, py) => [px / 100 * window.innerWidth, py / 100 * window.innerHeight];

    // attaching
    if (location.href.indexOf("scenexe") !== -1) {
        window.exe || (window.exe = new Object());
        exe.hidsim = { kbsim, msim, cxyp }
    }
})();