!function () {
    // bit of promotion, aye?
    document.title = "NAVLIB - By Tikup#8555";

    const exe = new Object();
    let target = [0, 0],
        mode = 0,
        coords;

    // "we do a lil work"
    !function doalilwork() {
        coords = JSON.parse("[" + document.querySelector("#position").innerText.split("Position: ")[1] + "]");

        requestAnimationFrame(doalilwork);
    }();

    // keyboard and mouse simulators
    const kbsim = function (keyCode, type) {
        const evtName = (typeof (type) === "string") ? "key" + type : "keydown",
            event = new Event(evtName, { bubbles: true, cancelable: false });
        event.keyCode = keyCode;
        document.dispatchEvent(event);
    };
    kbsim.wasd = function([dx, dy]) {
        kbsim(87, "up");
        kbsim(65, "up");
        kbsim(83, "up");
        kbsim(68, "up");
        switch(dx){
            case 1:
                kbsim(68);
                break;
            case -1:
                kbsim(65);
                break;
        };
        switch(dy){
            case 1:
                kbsim(83);
                break;
            case -1:
                kbsim(87);
                break;
        };
    };
    const msim = function (type, [x, y]) {
        const event = new MouseEvent((type == "click") ? "click" : "mouse" + type, { bubbles: true, cancelable: false, clientX: x, clientY: y });
        document.dispatchEvent(event);
    };
    msim.clickAndHold = function ([x, y]) {
        ["over", "down", "click"].forEach(function (eventType) {
            msim(eventType, x, y);
        });
    };
    const cxyp = (x, y) => [x / 100 * window.clientX, y / 100 * window.clientY];

    //
    // directional and movement math
    //
    const dirdif = (n1, n2) => (n1 > n2) ? 1 : -1,
        direction = (origin, dest) => [dirdif(dest[0], origin[0]), dirdif(dest[1], origin[1])],
        within = (dest, origin, radius) => (Math.abs(dest[0] - origin[0]) ** 2) + (Math.abs(dest[1] - origin[1]) ** 2) <= radius ** 2

}();
