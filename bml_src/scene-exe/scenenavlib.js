!function () {
    // bit of promotion, aye?
    document.title = "nav - By Tikup#8555";

    window.exe || (window.exe = new Object());
    let target = [0, 0],
        mode = 0,
        coords,
        tolerance = 100;

    // hidsim component
    if(!exe.hidsim) throw new TypeError("[Tikup's EXE: SCENEnav] Missing the HIDSIM component.")
    const {kbsim, msim, cxyp} = exe.hidsim

    //
    // directional and movement math
    //
    const within = (n1, n2, radius) => (Math.abs(n1[0] - n2[0]) ** 2) + (Math.abs(n1[1] - n2[1]) ** 2) <= radius ** 2,
        _theta = (ori, dest) => {
            let theta = Math.atan2(dest[1] - ori[1], dest[0] - ori[0]) * (180 / Math.PI); // direction angle in degrees
            if (theta < 0) theta = 360 + theta;
            return theta;
        }
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
        dvdirection = (ori, dest) => {
            const theta = _theta(ori, dest);
            return [Math.cos(theta), Math.sin(theta)];
        }

    const navline = (ori, dest, dist) => within(ori, dest, dist) ? (kbsim.wasd([0, 0]), false) : (kbsim.wasd(direction(ori, dest)), true);

    // event loop
    let tickTime = 100, loopTimestamp = Date.now(), action = () => 0;
    !function doalilwork() { // "we do a lil work"
        const delta = Date.now() - loopTimestamp;

        if (delta >= tickTime) {
            // update coords
            coords = JSON.parse(`[${document.querySelector("#position").innerText.split("Position: ")[1]}]`);

            // do stuff
            if (mode == 1) action(coords, target, tolerance);

            // update time
            loopTimestamp = Date.now();
        };
        requestAnimationFrame(doalilwork);
    }();

    // exposed methods
    const nav = new Object();
    nav.bot = () => mode = 1;
    nav.unbot = () => mode = 0;
    nav.clearTasks = () => action = () => 0;
    nav.tickTime = (ms) => tickTime = ms;
    nav.setTolerance = (d) => tolerance = d;

    nav.afk = () => (target = coords, action = navline);

    exe.nav = nav;
}();
