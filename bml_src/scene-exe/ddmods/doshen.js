!function () {
    // debug
    const log = message => console.log(`%c[DOSHEN] %c${message}`, `color:goldenrod;font-weight:bold`, "")

    // init objects
    if (typeof exe === 'object') log("[WARN] `exe` global already defined, some issues may arise if you didn't stop the previous instance.");
    window.exe = new Object();
    window._exe = new Object();
    _exe.log = log;
    log("Initialized! Module loader accessible from `exe.mods`");


    // loader
    exe.mods = {
        _modules: {
            msgpackr: {
                env: "global",
                uri: "https://superwibr.github.io/bml_src/msgpackr.js"
            },
            fovmod: {
                env: "global",
                uri: "https://superwibr.github.io/bml_src/scene-exe/fovmod.js"
            },
            hidsim: {
                env: "local",
                name: "hidsim",
                uri: "https://superwibr.github.io/bml_src/hidsim.js"
            },
            packetd: {
                env: "module",
                name: "pakd",
                uri: "https://superwibr.github.io/bml_src/scene-exe/ddmods/packetd.js"
            }
        },
        load: async function (modname) {
            const modEntry = this._modules[modname];

            if (!modEntry) return log(`[ERR] module "${modname}" not found`);
            if (modEntry.loaded) return; // stop from loading already loaded modules

            const mod = await fetch(modEntry.uri).then(res => res.text());

            switch (modEntry.env) {
                case "global": // global scope eval for modules which define themselves
                    (0, eval)(mod);
                    break;

                case "local": // local eval and attachment for independant modules
                    exe[modEntry.name] = await eval(mod);
                    break;

                case "module": // same as local but for those who don't self-instantiate and require other modules
                    exe[modEntry.name] = await eval(mod)(_exe, exe);
                    break;

                default:
                    break;
            };

            modEntry.loaded = true; // tag loaded modules so we don't re-load them
            log(`Loaded ${modname} ${(modEntry.env != "global" && modEntry.name) ? `at exe.${modEntry.name}` : ""}`);
        }
    }
}