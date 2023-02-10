!function () {
    // bit of promotion, aye?
    document.title = "NAVLIB - By Tikup#8555";

    const exe = new Object();
    let target = [0, 0],
        mode = 0,
        coords,
        tolerance = 100;

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

    //
    // directional and movement math
    //
    const within = (n1, n2, radius) => (Math.abs(n1[0] - n2[0]) ** 2) + (Math.abs(n1[1] - n2[1]) ** 2) <= radius ** 2,
        direction = (ori, dest) => {
            let theta = Math.atan2(dest[1] - ori[1], dest[0] - ori[0]) * (180 / Math.PI); // direction angle in degrees
            if (theta < 0) theta = 360 + theta;

            switch (true) {
                case theta <= 22.5 && theta > 337.5: return [1, 0];
                case theta <= 67.5 && theta > 22.5: return [1, -1];
                case theta <= 112.5 && theta > 67.5: return [0, -1];
                case theta <= 157.5 && theta > 112.5: return [-1, -1];
                case theta <= 202.5 && theta > 157.5: return [-1, 0];
                case theta <= 247.5 && theta > 202.5: return [-1, 1];
                case theta <= 292.5 && theta > 247.5: return [0, 1];
                case theta <= 337.5 && theta > 292.5: return [1, 1];
                default: return [0, 0];
            }
        }

    const beeline = (ori, dest, dist) => within(ori, dest, dist) ? (kbsim.wasd([0, 0]), false) : (kbsim.wasd(direction(ori, dest)), true);

    // event loop
    let tickTime = 100, loopTimestamp = Date.now(), action = () => 0;
    !function doalilwork() { // "we do a lil work"
        const delta = Date.now() - loopTimestamp;

        // update coords
        coords = JSON.parse(`[${document.querySelector("#position").innerText.split("Position: ")[1]}]`);

        if (delta >= tickTime && mode == 1) {
            // do stuff
            action(coords, target, tolerance);

            // update time
            loopTimestamp = Date.now();
        };
        requestAnimationFrame(doalilwork);
    }();

    // exposed methods
    exe.bot = () => mode = 1;
    exe.unbot = () => mode = 0;
    exe.clearTasks = () => action = () => 0;
    exe.tickTime = (ms) => tickTime = ms;
    exe.setTolerance = (d) => tolerance = d;

    exe.afk = () => (target = coords, action = beeline);

    // exposing
    window.exe = exe;
}();
