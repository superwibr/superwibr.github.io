// whatever the fuck this is
(0, eval)(await fetch("https://raw.githubusercontent.com/turuslan/HackTimer/master/HackTimer.js").then(res => res.text()));

// hidsim included
const hidsim = (function () {
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

    return { kbsim, msim, cxyp };
})();

//
// scenenavlib
//
const
    navdata = {
        mode: 0,
        target: [0, 0],
        coords: [0, 0],
        master: [0, 0],
        tolerance: 200,
        isMaster: 0,
    },
    nav = (function () {
        const within = (n1, n2, radius) => (Math.abs(n1[0] - n2[0]) ** 2) + (Math.abs(n1[1] - n2[1]) ** 2) <= radius ** 2,
            _theta = (ori, dest) => {
                let theta = Math.atan2(dest[1] - ori[1], dest[0] - ori[0]) * (180 / Math.PI); // direction angle in degrees
                if (theta < 0) theta = 360 + theta;
                return theta;
            },
            direction = (ori, dest) => {
                const theta = _theta(ori, dest);

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
            },
            navline = (ori, dest, dist) => within(ori, dest, dist) ? (hidsim.kbsim.wasd([0, 0]), false) : (hidsim.kbsim.wasd(direction(ori, dest)), true);

        // event loop
        const doalilwork = function () { // "we do a lil work"

            // update coords
            navdata.coords = JSON.parse(`[${document.querySelector("#position").innerText.split("Position: ")[1]}]`);

            // do stuff
            if (navdata.mode & 1 << 0) navline(
                navdata.coords,
                (navdata.mode & 1 << 1) ? navdata.master : navdata.target,
                (navdata.mode & 1 << 2) ? 0 : navdata.tolerance
            );
        };

        // exposed methods
        const nav = new Object();
        nav.mode = (mode) => navdata.mode = mode;
        nav.clearTasks = () => action = () => 0;
        nav.tickTime = (ms) => tickTime = ms;
        nav.setTolerance = (d) => tolerance = d;
        nav.data = () => navdata;

        nav.afk = () => (navdata.target = navdata.coords);

        nav.__doalilwork = doalilwork;

        // start loop
        const loopId = setInterval(() => nav.__doalilwork(), 100);
        nav._break = () => clearInterval(loopId);

        return nav;
    })();

window.nav = nav;