! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(r, a, function (t) {
                return e[t]
            }.bind(null, a));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 37)
}([function (e, t) {
    e.exports = Object.freeze({
        COMMAND_PREFIX: "/",
        CAMERA_SHAKE_DIST: 1e5,
        MAX_CHAT_MESSAGE_LENGTH: 750,
        SERVER_TPS: 30,
        MAX_PARTICLES: 1e3,
        MAX_LEADERBOARD_ENTRIES: 8,
        CAMERA_SIZE: 2e3,
        CHAT_STAY_TIME: 12,
        NOTIFICATION_STAY_TIME: 6,
        ANNOUNCEMENT_STAY_TIME: 20,
        ANNOUNCEMENT_FADE_IN_TIME: 1,
        ANNOUNCEMENT_FADE_OUT_TIME: 2,
        TIMER_FADE_IN_TIME: 2,
        TIMER_FADE_OUT_TIME: .5,
        MSG_FADE_IN_TIME: .2,
        MSG_FADE_OUT_TIME: .5,
        AUTO_SPIN_SPEED: 1.2,
        GRID_STROKE: 5,
        POLYGON_COLORS: ["#ffe46b", "#fc7676", "#768cfc", "#fca644", "#38b764", "#4a66bd", "#5d275d", "#1a1c2c", "#060011", "#403645", "#ededff", "#000000"],
        NUMBER_ENDINGS: ["k", "m", "b", "t", "qa", "qi", "sx", "sp", "oc", "no", "dc", "ud", "dd", "td", "qad", "qid", "sxd", "spd", "ocd", "nod", "vg", "uvg", "dvg", "tvg", "qavg", "qivg", "sxvg", "spvg", "ocvg", "novg", "tg", "utg", "dtg", "ttg", "qatg", "qitg", "sxtg", "sptg", "octg", "notg", "qd", "uqd", "dqd", "tqd", "qaqd", "qiqd", "sxqd", "spqd", "ocqd", "noqd", "qq", "uqq", "dqq", "tqq", "qaqq", "qiqq", "sxqq", "spqq", "ocqq", "noqq", "sg", "usg", "dsg", "tsg", "qasg", "qisg", "sxsg", "spsg", "ocsg", "nosg", "st", "ust", "dst", "tst", "qast", "qist", "sxst", "spst", "ocst", "nost", "og", "uog", "dog", "tog", "qaog", "qiog", "sxog", "spog", "ocog", "noog", "nm", "unm", "dnm", "tnm", "qanm", "qinm", "sxnm", "spnm", "ocnm", "nonm", "ct", "udct"],
        TEAM_NAMES: {
            "-1": "Fallen",
            0: "Lone",
            1: "Polygon",
            2: "Celestial",
            10: "Blue",
            11: "Red",
            12: "Green",
            13: "Purple"
        },
        GAMEMODE_COLORS: {
            "-2": "#ffffff",
            "-1": "#ffffff",
            0: "#f04f54",
            1: "#00e06c",
            2: "#00b0e1",
            3: "#be7ff5",
            4: "#fca644",
            5: "#768cfc"
        },
        GAMEMODE_NAMES: {
            "-2": "The Crossroads",
            "-1": "The Sanctuary",
            0: "Free For All",
            1: "4 Teams",
            2: "Tank Editor",
            3: "2 Teams",
            4: "Spawn Capture",
            5: "Titans"
        },
        TEAM_COLORS: ["#00b0e1", "#f04f54", "#00e06c", "#be7ff5"],
        FALLEN_COLOR: "#c0c0c0",
        CELESTIAL_COLOR: "#f177dd",
        BARREL_COLOR: "#999999",
        BACKGROUND_UI_COLOR: "#545454",
        SPIKE_COLOR: "#5F676C",
        STROKE_SIZE: 5,
        STROKE_SHADE: -30,
        TEXT_STROKE: 10,
        BARREL_ROT_ROUNDING: 5,
        TANK_EDITOR_VERSION: 6,
        NUMBER_AVERAGE: 0,
        MSG_TYPES: {
            ROTATION_INPUT: 0,
            MOVEMENT_INPUT: 1,
            SHOOTING_INPUT: 2,
            PASSIVE_MODE: 3,
            SEND_CHAT_MESSAGE: 4,
            UPGRADE_STAT: 5,
            UPGRADE_BODY: 6,
            UPGRADE_WEAPON: 7,
            CHANGE_CONTROL_STATE: 8,
            CHANGE_CONTROL_POSITION: 9,
            PING: 10,
            GAME_UPDATE: 100,
            ADD_UPGRADE_POINT: 101,
            SET_STAT_UPGRADES: 102,
            ON_KILL: 103,
            RECEIVE_ANNOUNCEMENT: 104,
            RECEIVE_TIMER: 105,
            RECEIVE_NOTIFICATION: 106,
            RECEIVE_BODY_UPGRADES: 107,
            RECEIVE_WEAPON_UPGRADES: 108,
            RECEIVE_DIMENSION_ATTRIBUTES: 200,
            RECEIEVE_CLASS_TREE: 201,
            RECEIVE_SERVERS: 202,
            COPY_TEXT: 300,
            ON_DEATH: 301,
            RENDER_ENTITY: 302,
            RECEIVE_TANK: 303,
            GATES_UPDATE: 304,
            EDITMODE: 305,
            RESPAWN_IN_SERVER: 306,
            SEND_TO_SERVER: 307,
            POPUP: 308,
            INIT_LEADERBOARD: 309,
            LOAD_WEAPON_UPGRADE: 400,
            LOAD_BODY_UPGRADE: 401,
            CHANGE_WEAPON: 402,
            CHANGE_BODY: 403,
            JOIN_GAME: 404,
            REPORT_BUG: 405,
            SUBMIT_FEEDBACK: 406,
            WORMHOLE_SPAWN: 500,
            PLAYER_COUNT: 501,
            GLOBAL_BROADCAST: 502,
            UNLIST_SERVER: 503
        },
        LEADERBOARD_STRUCTURE: [
            ["id", "type", "name", "nameColor", "team", "radiant", "score", "sides", "outerSides", "outerSize", "isCelestial", "barrels", "gadgets", "layers"],
            ["id", "type", "name", "nameColor", "team", "radiant", "score", "sides", "outerSides", "outerSize", "color"]
        ],
        PACKET_STRUCTURE: [
            ["id", "sType", "x", "y", "d", "size"],
            ["id", "sType", "x", "y", "d", "size", "sides", "outerSides", "outerSize", "layers", "radiant", "team", "name", "showName", "className", "nameColor", "maxHP", "hp", "score", "totalScore", "xpToNextLevel", "level", "isInvulnerable"],
            ["id", "sType", "x", "y", "d", "size", "sides", "outerSides", "outerSize", "layers", "radiant", "team", "name", "showName", "className", "nameColor", "maxHP", "hp", "score", "totalScore", "xpToNextLevel", "level", "isInvulnerable", "barrels", "barrelData", "gadgets", "gadgetData", "isCelestial", "weaponUpgrade", "bodyUpgrade"],
            ["id", "sType", "x", "y", "d", "size", "sides", "outerSides", "outerSize", "layers", "radiant", "team", "name", "showName", "className", "nameColor", "maxHP", "hp", "score", "totalScore", "xpToNextLevel", "level", "isInvulnerable", "color"],
            ["id", "sType", "x", "y", "d", "size", "sides", "parentID", "team", "radiant", "maxHP", "hp", "color"],
            ["id", "sType", "x", "y", "d", "size", "sides", "parentID", "team", "radiant", "maxHP", "hp", "color", "barrels", "barrelData", "gadgets", "gadgetData", "outerSides", "outerSize", "layers"],
            ["id", "sType", "x", "y", "d", "size", "type"],
            ["id", "sType", "x", "y", "d", "size", "type", "sign", "subtype", "gamemode", "lifetime"],
            ["id", "sType", "x", "y", "d", "size", "type", "sign", "lTeam", "lID", "lRadiant"]
        ],
        ANALYTICS_EVENTS: {
            JOIN_GAME: "join_game",
            DEATH: "death",
            SUBMIT_FEEDBACK: "submit_feedback",
            REPORT_BUG: "report_bug",
            SEND_MESSAGE: "send_message",
            AD_BLOCKER: "ad_blocker"
        },
        EVENT_TYPES: {
            LANDING: 0,
            CHAT: 1,
            WORMHOLE_SPAWN: 2,
            WORMHOLE_RUPTURE: 3,
            GATEWAY_ACTIVATE: 4,
            GATE_ACTIVATE: 5
        },
        COOKIES: {
            TUTORIAL: {
                MOVE: "tut_move",
                AUTO_FIRE: "tut_autofire",
                ASCEND: "tut_ascend",
                DRONES: "tut_drones",
                SCREENSHOT_MODE: "tut_screenshot_mode",
                AUTO_CANNONS: "tut_auto_cannons",
                AD_BLOCKER: "ad_blocker",
                MOBILE_UNSUPPORTED: "mobile_unsupported"
            },
            SETTINGS: "settings",
            KEYBINDS: "keybinds",
            GAMEMODE: "gamemode",
            REGION: "region",
            USERNAME: "username"
        },
        UPGRADE_COUNT: 4,
        MAX_UPGRADE_POINTS: 15,
        UPGRADE_COLORS: ["#768cfc", "#fc7676", "#38b764", "#ffe46b"],
        BODY_UPGRADE_NAMES: ["Max Health", "Health Regeneration", "Body Damage", "Movement Speed"],
        WEAPON_UPGRADE_NAMES: ["Reload", "Bullet Damage", "Bullet Speed", "Bullet Penetration"]
    })
}, function (e, t, n) {
    "use strict";
    n.d(t, "G", (function () {
        return h
    })), n.d(t, "w", (function () {
        return p
    })), n.d(t, "e", (function () {
        return _
    })), n.d(t, "J", (function () {
        return g
    })), n.d(t, "I", (function () {
        return v
    })), n.d(t, "K", (function () {
        return b
    })), n.d(t, "H", (function () {
        return E
    })), n.d(t, "F", (function () {
        return O
    })), n.d(t, "k", (function () {
        return w
    })), n.d(t, "d", (function () {
        return T
    })), n.d(t, "n", (function () {
        return S
    })), n.d(t, "m", (function () {
        return A
    })), n.d(t, "o", (function () {
        return M
    })), n.d(t, "i", (function () {
        return x
    })), n.d(t, "l", (function () {
        return R
    })), n.d(t, "u", (function () {
        return I
    })), n.d(t, "c", (function () {
        return L
    })), n.d(t, "r", (function () {
        return D
    })), n.d(t, "x", (function () {
        return j
    })), n.d(t, "v", (function () {
        return U
    })), n.d(t, "g", (function () {
        return z
    })), n.d(t, "s", (function () {
        return W
    })), n.d(t, "E", (function () {
        return K
    })), n.d(t, "D", (function () {
        return G
    })), n.d(t, "b", (function () {
        return Y
    })), n.d(t, "M", (function () {
        return F
    })), n.d(t, "p", (function () {
        return H
    })), n.d(t, "q", (function () {
        return V
    })), n.d(t, "A", (function () {
        return X
    })), n.d(t, "C", (function () {
        return q
    })), n.d(t, "B", (function () {
        return Z
    })), n.d(t, "t", (function () {
        return J
    })), n.d(t, "y", (function () {
        return $
    })), n.d(t, "z", (function () {
        return Q
    })), n.d(t, "f", (function () {
        return ee
    })), n.d(t, "h", (function () {
        return te
    })), n.d(t, "L", (function () {
        return ne
    })), n.d(t, "a", (function () {
        return re
    })), n.d(t, "j", (function () {
        return se
    }));
    var r = n(5),
        a = n(0),
        o = n(7),
        i = n(3),
        s = n(2),
        l = n(8);

    function u(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = d(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    a = function () { };
                return {
                    s: a,
                    n: function () {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, i = !0,
            s = !1;
        return {
            s: function () {
                n = n.call(e)
            },
            n: function () {
                var e = n.next();
                return i = e.done, e
            },
            e: function (e) {
                s = !0, o = e
            },
            f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function c(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, a, o = [],
                i = !0,
                s = !1;
            try {
                for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
            } catch (e) {
                s = !0, a = e
            } finally {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
            return o
        }(e, t) || d(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(e, t) {
        if (e) {
            if ("string" == typeof e) return f(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
        }
    }

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var h = {
        players: 0,
        spectators: 0
    };

    function p(e, t) {
        h.players = e, h.spectators = t
    }
    var _ = {
        normal: {
            weapon: {},
            body: {}
        },
        celestial: {
            weapon: {},
            body: {}
        }
    };

    function g(e) {
        _ = e;
        for (var t = 0; t < 4; t++)
            for (var n = (t % 2 == 0 ? _.celestial : _.normal)[t > 1 ? "weapon" : "body"], r = 0, a = Object.entries(n); r < a.length; r++) {
                var o = c(a[r], 2),
                    i = o[0];
                o[1];
                n.maxTier = +i
            }
    }
    var v = !1,
        y = [],
        m = [];

    function b(e) {
        for (var t = e[0].map((function (e) {
            return function (e) {
                for (var t = {}, n = a.LEADERBOARD_STRUCTURE[e[1]], r = 0; r < e.length; r++) {
                    var o = e[r];
                    null != o && (t[n[r]] = o)
                }
                return t
            }(e)
        })), n = [], o = function (e) {
            var r, a, o, i = t[e],
                s = m.find((function (e) {
                    return e.id == i.id
                }));
            s ? n.push((r = s, a = i, o = {}, Object.keys(r).forEach((function (e) {
                var t = a[e];
                o[e] = null != t ? t : r[e]
            })), o)) : n.push(i)
        }, i = 0; i < t.length; i++) o(i);
        if (e) {
            (y = {
                entries: n,
                playerCount: e[1]
            }).showPlayers = -1 != y.playerCount, y.highestScore = 0;
            for (var s = 0; s < y.entries.length; s++) {
                var l = y.entries[s];
                l.score > y.highestScore && (y.highestScore = l.score)
            }
            for (var u = 0; u < y.entries.length; u++) {
                var c, d = y.entries[u];
                if (d.size = 1 == d.type || d.isCelestial ? 75 : 40, 1 == !d.type && y.showPlayers) {
                    for (var f = 0; f < d.barrels.length; f++) {
                        d.barrels[f].animTime = 0
                    }
                    for (var h = 0; h < d.gadgets.length; h++) {
                        d.gadgets[h].animTime = 0
                    }
                }
                d.nameColor = null !== (c = d.nameColor) && void 0 !== c ? c : 6, d.scoreRatio = d.score / y.highestScore, d.scoreRatio = Number.isNaN(d.scoreRatio) || !Number.isFinite(d.score) ? Number.isFinite(d.score) ? 0 : 1 : d.scoreRatio, d.fadeTime = 0, y.showPlayers || (d.name = (d.name || "???").replace(/\S/g, "?"), d.radiant = 0, d.team = -1, d.nameColor = 6), d.score == y.highestScore && (d.scoreRatio = 1), d.formattedScore = Object(r.roundWithEnding)(d.score)
            }
        } else y = null;
        m = n
    }
    var E = {};

    function O(e) {
        for (var t = [], n = 0, a = function (a) {
            var o = y.entries[a],
                i = E.entries.find((function (e) {
                    return e.id == o.id
                }));
            i ? Object.keys(o).forEach((function (t) {
                switch (t) {
                    case "formattedScore":
                        break;
                    case "scoreRatio":
                        i.scoreRatio = Object(s.damp)(i.scoreRatio, o.scoreRatio, .05, e), isFinite(i.scoreRatio) || (i.scoreRatio = o.scoreRatio);
                        break;
                    case "score":
                        i.score = Object(s.damp)(i.score, o.score, .05, e), isFinite(i.score) || (i.score = o.score), i.formattedScore = Object(r.roundWithEnding)(i.score);
                        break;
                    case "fadeTime":
                        i.fadeTime = Object(s.damp)(i.fadeTime, 1, .001, e);
                        break;
                    default:
                        i[t] = o[t]
                }
            })) : i = Object(l.cloneDeep)(o), null == i.index && (i.index = n), i.index = Object(s.damp)(i.index, n, .01, e), n++, t.push(i)
        }, o = 0; o < y.entries.length; o++) a(o);
        if (null == E.length && (E.length = n), E.length = Object(s.damp)(E.length, n, .01, e), E.entries)
            for (var i = function (n) {
                var r = E.entries[n];
                y.entries.find((function (e) {
                    return e.id == r.id
                })) || (r.fadeTime = Object(s.damp)(r.fadeTime, 0, .001, e), r.fadeTime > .1 && t.push(r))
            }, u = 0; u < E.entries.length; u++) i(u);
        E.highestScore = y.highestScore, E.playerCount = y.playerCount, E.showPlayers = y.showPlayers, E.entries = t
    }

    function w(e, t) {
        return (e * a.NUMBER_AVERAGE + t) / (a.NUMBER_AVERAGE + 1)
    }

    function T(e, t) {
        var n = e.x - t.x,
            r = e.y - t.y;
        return Math.sqrt(n * n + r * r) < e.size + t.size
    }

    function S(e, t) {
        var n = e.x - t.x,
            r = e.y - t.y;
        return n * n + r * r <= t.r * t.r
    }

    function A(e, t) {
        return e.x > t.x && e.x < t.x + t.width && e.y < t.y + t.height && e.y > t.y
    }

    function M(e, t) {
        var n = {
            x: e.x - t.x,
            y: e.y - t.y
        },
            r = {
                width: t.width,
                height: t.height,
                x: 0,
                y: 0
            };
        return function (e, t, n) {
            var r = Math.cos(n),
                a = Math.sin(n),
                o = r * (t.x - e.x) + a * (t.y - e.y) + e.x,
                i = r * (t.y - e.y) - a * (t.x - e.x) + e.y;
            t.x = o, t.y = i
        }(r, n, t.rot),
            function (e, t) {
                return e.x > t.x - t.width / 2 && e.x < t.x + t.width / 2 && e.y < t.y + t.height / 2 && e.y > t.y - t.height / 2
            }(n, r)
    }

    function x(e, t, n) {
        var r = [n[0] - t[0], n[1] - t[1]],
            a = [t[0] - e[0], t[1] - e[1]],
            o = -(r[0] * a[0] + r[1] * a[1]) / (Math.pow(r[0], 2) + Math.pow(r[1], 2));
        return o >= 0 && o <= 1 ? k(o, [0, 0], t, n) : C(k(0, e, t, n)) <= C(k(1, e, t, n)) ? t : n
    }

    function k(e, t, n, r) {
        return [(1 - e) * n[0] + e * r[0] - t[0], (1 - e) * n[1] + e * r[1] - t[1]]
    }

    function C(e) {
        return Math.pow(e[0], 2) + Math.pow(e[1], 2)
    }

    function R(e, t) {
        return Math.random() * (t - e) + e
    }

    function I(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            switch (n.type) {
                case a.EVENT_TYPES.LANDING:
                    Object(o.entityLanding)(n.data);
                    break;
                case a.EVENT_TYPES.WORMHOLE_SPAWN:
                    Object(o.wormholeSpawn)(n.data);
                    break;
                case a.EVENT_TYPES.WORMHOLE_RUPTURE:
                    Object(o.wormholeRupture)(n.data);
                    break;
                case a.EVENT_TYPES.GATEWAY_ACTIVATE:
                    Object(o.gatewayActivate)(n.data);
                    break;
                case a.EVENT_TYPES.GATE_ACTIVATE:
                    Object(o.gateActivate)(n.data);
                    break;
                case a.EVENT_TYPES.CHAT:
                    N(n.data.id, n.data.message);
                    break;
                default:
                    console.error('Received invalid event from server: "'.concat(n.type, '"'))
            }
        }
    }
    var L = {},
        D = [],
        P = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

    function B(e) {
        var t, n = [],
            r = u(e);
        try {
            for (r.s(); !(t = r.n()).done;) {
                var a, o = c(t.value, 2),
                    s = o[0],
                    l = o[1],
                    d = u(s.split(/(\s+)/));
                try {
                    for (d.s(); !(a = d.n()).done;) {
                        var f = a.value;
                        if (i.g.clickableLinks) ! function () {
                            var e, t = Math.round(1e7 * Math.random()).toString(),
                                r = Math.round(1e7 * Math.random()).toString(),
                                a = u(f.replace(P, (function (e) {
                                    return "".concat(t).concat(r).concat(e).concat(t)
                                })).split(t).filter((function (e) {
                                    return "" != e
                                })));
                            try {
                                for (a.s(); !(e = a.n()).done;) {
                                    var o = e.value;
                                    o.startsWith(r) ? n.push({
                                        color: 10,
                                        link: !0,
                                        text: o.substring(r.length)
                                    }) : n.push({
                                        color: l,
                                        link: !1,
                                        text: o
                                    })
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        }();
                        else n.push({
                            text: f,
                            link: !1,
                            color: l
                        })
                    }
                } catch (e) {
                    d.e(e)
                } finally {
                    d.f()
                }
            }
        } catch (e) {
            r.e(e)
        } finally {
            r.f()
        }
        var h = "";
        return n.forEach((function (e) {
            h += e.text
        })), {
            sections: n,
            fullText: h
        }
    }

    function N(e, t) {
        e in L || (L[e] = []), L[e].length > 3 && (L[e][3].time = Math.min(L[e][3].time, a.MSG_FADE_OUT_TIME)), L[e].unshift({
            message: B(t),
            time: a.CHAT_STAY_TIME
        })
    }

    function j(e) {
        U([
            [e, 6]
        ])
    }

    function U(e) {
        e = B(e), console.log("NOTIFICATION: ".concat(e.fullText)), D.unshift({
            message: e,
            time: a.NOTIFICATION_STAY_TIME
        })
    }

    function z() {
        L = {}, D = [], Object(o.clearAnnouncement)(), Object(o.clearTimer)()
    }

    function W(e) {
        var t = Object(s.arrayToSentence)(["You"].concat(e.helpers.map((function (e) {
            return i.g.showNames ? "" != e.name ? e.name : "an unnamed ".concat(e.className) : "a".concat(Object(r.startsWithVowel)(e.className) ? "n" : "", " ").concat(e.className)
        }))));
        t += " killed ", t += i.g.showNames ? "" != e.name ? e.name : "an unnamed ".concat(e.className) : "a".concat(Object(r.startsWithVowel)(e.className) ? "n" : "", " ").concat(e.className), j(t += ".")
    }
    var K = [2 * a.UPGRADE_COUNT],
        G = 0,
        Y = [],
        F = [],
        H = [],
        V = [];

    function X(e) {
        G = e
    }

    function q(e) {
        v = e
    }

    function Z(e) {
        for (var t = 0; t < e.length; t++) K[t] = e[t]
    }

    function J(e) {
        Y = e
    }

    function $(e) {
        F = e
    }

    function Q() {
        for (var e = 0; e < 2 * a.UPGRADE_COUNT; e++) K[e] = 0;
        G = 0, ee(), te()
    }

    function ee() {
        H = Y, Y = []
    }

    function te() {
        V = F, F = []
    }

    function ne(e) {
        K[e - 1]++, G--
    }

    function re(e) {
        G++
    }
    var ae = document.getElementById("message-popup"),
        oe = document.getElementById("message-popup-title"),
        ie = document.getElementById("message-popup-text");

    function se(e, t) {
        var n, a;
        oe.innerHTML = null === (n = Object(r.escapeHTML)(null == e ? void 0 : e.toString())) || void 0 === n ? void 0 : n.replaceAll("\\n", "<br>"), ie.innerHTML = null === (a = Object(r.escapeHTML)(null == t ? void 0 : t.toString())) || void 0 === a ? void 0 : a.replaceAll("\\n", "<br>"), ae.classList.remove("hide")
    }
    document.getElementById("ok-button").onclick = function () {
        ae.classList.add("hide")
    }
}, function (e, t, n) {
    var r = n(55).WALL_BUFFER,
        a = n(13).MAX_SIDES;

    function o(e, t) {
        return Math.log(t) / Math.log(e)
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = Math.pow(10, t);
        return Math.round(e * n) / n
    }

    function s(e, t, n) {
        return t * n + e * (1 - n)
    }
    e.exports = {
        degreesToRadians: function (e) {
            return e * (Math.PI / 180)
        },
        radiansToDegrees: function (e) {
            return e * (180 / Math.PI)
        },
        formatURL: function (e) {
            var t = e.indexOf("://"); - 1 != t && (e = e.substring(t + 3));
            var n = e.indexOf("/");
            return -1 != n && (e = e.substring(0, n)), e
        },
        round: i,
        roundToScope: function (e, t) {
            return i(e, Math.round(-o(10, t)) + 4)
        },
        baseLog: o,
        generateSign: function () {
            return Math.random() < .5 ? -1 : 1
        },
        formatTime: function (e) {
            var t = parseInt(e, 10),
                n = Math.floor(t / 3600),
                r = Math.floor((t - 3600 * n) / 60),
                a = t - 3600 * n - 60 * r;
            return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), a < 10 && (a = "0" + a), n + ":" + r + ":" + a
        },
        arrayToSentence: function (e) {
            if (0 == e.length) return "nothing";
            if (1 == e.length) return e[0];
            var t = e.pop();
            return e.join(", ") + (1 === e.length ? " and " : ", and ") + t
        },
        clampSides: function (e) {
            return Math.max(Math.min(a, e), -a)
        },
        getXPLevel: function (e) {
            for (var t = 1, n = 100; e > n;) e -= n, n *= 1.2, t++;
            return t
        },
        sleep: function (e) {
            for (var t = (new Date).getTime(), n = 0; n < 1e7 && !((new Date).getTime() - t > e); n++);
        },
        lerp: s,
        damp: function (e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 60;
            return s(e, t, 1 - Math.pow(n, r))
        },
        ease: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return n ? 1 - Math.pow(1 - e, t) : Math.pow(e, t)
        },
        isColorCode: function (e) {
            return /^#[0-9A-F]{6}$/i.test(e)
        },
        getRotationDifference: function (e, t) {
            var n = Math.abs(e - t) % (2 * Math.PI);
            return n > Math.PI && (n = 2 * Math.PI - n), n
        },
        reverseString: function (e) {
            return e.split("").reverse().join("")
        },
        getNumbersBetween: function () {
            Array.prototype.sort.call(arguments);
            for (var e = arguments[0], t = arguments[1], n = [], r = e; r <= t; r++) n.push(r);
            return n
        },
        lerpRotation: function (e, t, n) {
            var r = (1 - n) * Math.cos(e) + n * Math.cos(t),
                a = (1 - n) * Math.sin(e) + n * Math.sin(t);
            return Math.atan2(a, r)
        },
        onSameTeam: function (e, t) {
            return e == t && e > 0
        },
        wallColliding: function (e, t) {
            return t.x + r > e.x - e.hWidth && t.x - r < e.x + e.hWidth && t.y - r < e.y + e.hHeight && t.y + r > e.y - e.hHeight
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return d
    })), n.d(t, "g", (function () {
        return h
    })), n.d(t, "h", (function () {
        return _
    })), n.d(t, "f", (function () {
        return g
    })), n.d(t, "e", (function () {
        return v
    })), n.d(t, "a", (function () {
        return b
    })), n.d(t, "c", (function () {
        return T
    })), n.d(t, "d", (function () {
        return A
    }));
    var r = n(5),
        a = n(0),
        o = n(9),
        i = n(7),
        s = n(4);

    function l(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, a, o = [],
                i = !0,
                s = !1;
            try {
                for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
            } catch (e) {
                s = !0, a = e
            } finally {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
            return o
        }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return u(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var c = document.getElementById("settings"),
        d = 1,
        f = {
            sectionTankEditor: {
                section: !0,
                name: "Tank Editor",
                tankEditor: !0
            },
            maxSaveStates: {
                name: "Max Undo/Redo Save States",
                type: 1,
                default: 100,
                min: 10,
                max: 500,
                step: 1,
                ending: "",
                tankEditor: !0
            },
            compressCodes: {
                name: "Compress Codes",
                type: 0,
                default: !0,
                tankEditor: !0
            },
            sectionMobile: {
                section: !0,
                name: "Mobile",
                mobile: !0
            },
            joystickSize: {
                name: "Joystick Size",
                mobile: !0,
                type: 1,
                default: 100,
                min: 0,
                max: 200,
                step: 1,
                ending: ""
            },
            joystickOffset: {
                name: "Joystick Offset",
                mobile: !0,
                type: 1,
                default: 250,
                min: 0,
                max: 400,
                step: 1,
                ending: ""
            },
            invertJoysticks: {
                name: "Invert Joysticks",
                type: 0,
                default: !1,
                mobile: !0,
                onUpdate: function () {
                    d = h.invertJoysticks ? -1 : 1
                }
            },
            showDroneTrajectory: {
                name: "Show Drone Trajectory",
                type: 0,
                default: !1,
                mobile: !0
            },
            sectionMainMenu: {
                section: !0,
                name: "Main Menu"
            },
            showFullServerList: {
                name: "Show Full Server List",
                type: 0,
                default: !1,
                onUpdate: function () {
                    Object(r.updateFullServerList)(h.showFullServerList)
                }
            },
            sectionNamesAndChat: {
                section: !0,
                name: "Names & Chat"
            },
            showChat: {
                name: "Show Chat",
                type: 0,
                default: !0,
                onUpdate: function () {
                    i.renderMainMenu || s.g || (h.showChat ? chat.classList.remove("hidden") : chat.classList.add("hidden"))
                }
            },
            showNames: {
                name: "Show Names",
                type: 0,
                default: !0
            },
            clickableLinks: {
                name: "Clickable Links",
                type: 0,
                default: !0
            },
            showOwnName: {
                name: "Show Own Name",
                type: 0,
                default: !1
            },
            sectionDebugMode: {
                section: !0,
                name: "Debug Mode"
            },
            showClassNames: {
                name: "Show Class Names",
                type: 0,
                default: !1
            },
            showIds: {
                name: "Show IDs",
                type: 0,
                default: !1
            },
            copyIds: {
                name: "Click to Copy IDs",
                type: 0,
                default: !1
            },
            showTickTime: {
                name: "Show Tick Time",
                type: 0,
                default: !0
            },
            showServerName: {
                name: "Show Server Name",
                type: 0,
                default: !0
            },
            showPlayerCount: {
                name: "Show Player Count",
                type: 0,
                default: !0
            },
            showGlobalPlayerCount: {
                name: "Show Global Player Count",
                type: 0,
                default: !0
            },
            showFPS: {
                name: "Show FPS",
                type: 0,
                default: !0
            },
            showPing: {
                name: "Show Ping",
                type: 0,
                default: !0
            },
            showPosition: {
                name: "Show Position",
                type: 0,
                default: !1
            },
            showExtraPerformanceInfo: {
                name: "Show Extra Performance Info",
                type: 0,
                default: !0
            },
            debugModeTextSize: {
                name: "Debug Mode Text Size",
                type: 1,
                default: 100,
                min: 0,
                max: 200,
                step: 1,
                ending: "%",
                onUpdate: function () {
                    for (var e = 0; e < o.k.childElementCount; e++) o.k.children[e].style.fontSize = h.debugModeTextSize / 50 + "vmin"
                }
            },
            sectionGraphics: {
                section: !0,
                name: "Graphics"
            },
            staticCamera: {
                name: "Static Camera",
                type: 0,
                default: !1
            },
            minimap: {
                name: "Show Minimap",
                type: 0,
                default: !0
            },
            showParticles: {
                name: "Show Particles",
                type: 0,
                default: !0
            },
            hudOpacity: {
                name: "Hud Opacity",
                type: 1,
                default: 100,
                min: 0,
                max: 100,
                step: 1,
                ending: "%",
                onUpdate: function () {
                    Array.from(document.getElementsByClassName("hud")).forEach((function (e) {
                        e.style.opacity = h.hudOpacity / 100
                    }))
                }
            },
            renderDelay: {
                name: "Render Delay",
                type: 1,
                default: 100,
                min: 0,
                max: 200,
                step: 1,
                ending: "ms"
            },
            cameraShake: {
                name: "Camera Shake",
                type: 1,
                default: 100,
                min: 0,
                max: 100,
                step: 1,
                ending: "%"
            }
        },
        h = {},
        p = {},
        _ = !1;

    function g() {
        Object.entries(f).forEach((function (e) {
            var t, n = l(e, 2),
                a = n[0],
                o = n[1];
            if (!o.section) {
                var i = p[a];
                if (i) switch (o.type) {
                    case 0:
                        i.checked = y(h[a], o.default);
                        break;
                    case 1:
                        i.value = y(h[a], o.default), i.dispatchEvent(new CustomEvent("input", {
                            detail: "to update settings"
                        }))
                } else console.error("Could not find object for setting " + a);
                o.hasOwnProperty("onUpdate") && o.onUpdate()
            }
            if (o.section) t = p[a];
            else switch (o.type) {
                case 0:
                    t = p[a].parentElement.parentElement;
                    break;
                case 1:
                    t = p[a].parentElement
            }
            t.classList.remove("hidden"), !s.g && o.tankEditor && t.classList.add("hidden"), !r.isMobile && o.mobile && t.classList.add("hidden")
        })), Object.entries(w).forEach((function (e) {
            var t = l(e, 2),
                n = t[0],
                r = t[1];
            if (r.editable) {
                var a = S[n],
                    o = T[n];
                a.textContent = A[o], a.value = o;
                var i = a.parentElement;
                i.classList.remove("hidden"), !s.g && r.tankEditor && i.classList.add("hidden")
            }
        })), c.classList.remove("hide"), _ = !0, Object(r.setPopupOpen)(!0)
    }

    function v(e, t) {
        var n = document.getElementById("settings-scroll");
        Object.entries(f).forEach((function (t) {
            var r = l(t, 2),
                a = r[0],
                o = r[1];
            if (o.section) p[a] = m(n, o.name);
            else {
                switch (o.type) {
                    case 0:
                        h[a] = y(e[a], o.default);
                        var i = Object(s.a)(n, "div");
                        Object(s.a)(i, "label").textContent = o.name;
                        var u = Object(s.a)(i, "label");
                        u.classList.add("switch");
                        var c = Object(s.a)(u, "input");
                        c.type = "checkbox", Object(s.a)(u, "span").classList.add("switch-button"), p[a] = c;
                        break;
                    case 1:
                        h[a] = y(e[a], o.default), (i = Object(s.a)(n, "div")).classList.add("slider"), Object(s.a)(i, "label").textContent = o.name;
                        var d = Object(s.a)(i, "input");
                        d.classList.add("slide"), d.type = "range", d.step = o.step, d.min = o.min, d.max = o.max, d.oninput = function () {
                            d.previousElementSibling.textContent = "".concat(o.name, " - ").concat(d.value).concat(o.ending)
                        }, p[a] = d
                }
                o.hasOwnProperty("onUpdate") && o.onUpdate()
            }
        })), m(n, "Keybinds"), Object.entries(w).forEach((function (e) {
            var r = l(e, 2),
                a = r[0],
                o = r[1];
            if (o.editable) {
                T[a] = y(t[a], o.default);
                var i = Object(s.a)(n, "div");
                i.classList.add("keybind"), Object(s.a)(i, "label").textContent = "".concat(o.tankEditor ? "TANK EDITOR: " : "").concat(o.name).concat(o.control ? " (CTRL +)" : "");
                var u = T[a],
                    c = Object(s.a)(i, "button");
                c.textContent = A[u], c.value = u, c.addEventListener("click", (function () {
                    ! function (e) {
                        E != e ? (O(), E = e, S[e].classList.add("changing")) : O()
                    }(a)
                })), S[a] = c
            }
        })), Object(s.a)(n, "hr")
    }

    function y(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e ? e : t
    }

    function m(e, t) {
        var n = Object(s.a)(e, "div");
        return Object(s.a)(n, "hr"), Object(s.a)(n, "h2").textContent = t, Object(s.a)(n, "hr"), n
    }

    function b() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        e && (Object.entries(f).forEach((function (e) {
            var t = l(e, 2),
                n = t[0],
                r = t[1];
            if (!r.section) {
                var a = p[n];
                if (a) switch (r.type) {
                    case 0:
                        h[n] = a.checked;
                        break;
                    case 1:
                        h[n] = a.value
                } else console.error("Could not find object for setting " + n);
                r.hasOwnProperty("onUpdate") && r.onUpdate()
            }
        })), Object.entries(w).forEach((function (e) {
            var t = l(e, 2),
                n = t[0];
            t[1].editable && (T[n] = S[n].value)
        })), Object(r.setCookie)(a.COOKIES.SETTINGS, JSON.stringify(h)), Object(r.setCookie)(a.COOKIES.KEYBINDS, JSON.stringify(T))), Object(i.updateDebugMode)(), _ = !1, O(), c.classList.add("hide"), Object(r.setPopupOpen)(!1)
    }
    var E = null;

    function O() {
        E && (S[E].classList.remove("changing"), E = null)
    }
    window.addEventListener("keydown", (function (e) {
        if (E) {
            var t = e.keyCode,
                n = S[E];
            n.textContent = A[t], n.value = t, O(), e.preventDefault()
        }
    }));
    var w = {
        undo: {
            name: "Undo",
            default: 90,
            editable: !0,
            tankEditor: !0,
            control: !0
        },
        redo: {
            name: "Redo",
            default: 89,
            editable: !0,
            tankEditor: !0,
            control: !0
        },
        selectAll: {
            name: "Select All",
            default: 65,
            editable: !0,
            tankEditor: !0,
            control: !0
        },
        duplicate: {
            name: "Duplicate",
            default: 68,
            editable: !0,
            tankEditor: !0,
            control: !0
        },
        moveForward: {
            name: "Move Forward",
            default: 38,
            editable: !0,
            tankEditor: !0,
            control: !0
        },
        moveBackward: {
            name: "Move Backward",
            default: 40,
            editable: !0,
            tankEditor: !0,
            control: !0
        },
        delete: {
            name: "Delete",
            default: 8,
            editable: !0,
            tankEditor: !0
        },
        escape: {
            name: "Escape",
            default: 27,
            editable: !1
        },
        enter: {
            name: "Enter",
            default: 13,
            editable: !0
        },
        openCommand: {
            name: "Open Command",
            default: 191,
            editable: !0
        },
        previousChatMessage: {
            name: "Move Up in Chat History",
            default: 38,
            editable: !0
        },
        nextChatMessage: {
            name: "Move Down in Chat History",
            default: 40,
            editable: !0
        },
        fire: {
            name: "Shoot",
            default: 32,
            editable: !0
        },
        repel: {
            name: "Repel Drones",
            default: 16,
            editable: !0
        },
        moveUp: {
            name: "Move Up",
            default: 87,
            editable: !0
        },
        moveDown: {
            name: "Move Down",
            default: 83,
            editable: !0
        },
        moveLeft: {
            name: "Move Left",
            default: 65,
            editable: !0
        },
        moveRight: {
            name: "Move Right",
            default: 68,
            editable: !0
        },
        moveUpAlt: {
            name: "Move Up (Alternate)",
            default: 38,
            editable: !0
        },
        moveDownAlt: {
            name: "Move Down (Alternate)",
            default: 40,
            editable: !0
        },
        moveLeftAlt: {
            name: "Move Left (Alternate)",
            default: 37,
            editable: !0
        },
        moveRightAlt: {
            name: "Move Right (Alternate)",
            default: 39,
            editable: !0
        },
        autoFire: {
            name: "Toggle Auto Fire",
            default: 69,
            editable: !0
        },
        autoSpin: {
            name: "Toggle Auto Spin",
            default: 67,
            editable: !0
        },
        spinLock: {
            name: "Toggle Spin Lock",
            default: 88,
            editable: !0
        },
        passiveMode: {
            name: "Toggle Passive Mode",
            default: 86,
            editable: !0
        },
        debugMode: {
            name: "Toggle Debug Mode",
            default: 77,
            editable: !0
        },
        screenshotMode: {
            name: "Toggle Screenshot Mode",
            default: 80,
            editable: !0
        },
        weaponTree: {
            name: "Open Weapon Upgrade Tree",
            default: 89,
            editable: !0
        },
        bodyTree: {
            name: "Open Body Upgrade Tree",
            default: 85,
            editable: !0
        },
        settings: {
            name: "Open Settings (In-Game)",
            default: 79,
            editable: !0
        }
    },
        T = {},
        S = {},
        A = ["", "", "", "CANCEL", "", "", "HELP", "", "BACKSPACE", "TAB", "", "", "CLEAR", "ENTER", "ENTER_SPECIAL", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT ARROW", "UP ARROW", "RIGHT ARROW", "DOWN ARROW", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "COLON", "SEMICOLON", "LESS_THAN", "EQUALS", "GREATER_THAN", "QUESTION_MARK", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "", "", "", "", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""]
}, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "h", (function () {
        return editmode
    })), __webpack_require__.d(__webpack_exports__, "g", (function () {
        return editing
    })), __webpack_require__.d(__webpack_exports__, "c", (function () {
        return currentWeapon
    })), __webpack_require__.d(__webpack_exports__, "b", (function () {
        return currentBody
    })), __webpack_require__.d(__webpack_exports__, "i", (function () {
        return editorUI
    })), __webpack_require__.d(__webpack_exports__, "p", (function () {
        return setEditmode
    })), __webpack_require__.d(__webpack_exports__, "o", (function () {
        return selectedObjects
    })), __webpack_require__.d(__webpack_exports__, "r", (function () {
        return updateSelectedObject
    })), __webpack_require__.d(__webpack_exports__, "e", (function () {
        return deselectAllObjects
    })), __webpack_require__.d(__webpack_exports__, "k", (function () {
        return moveForwardSelectedObjects
    })), __webpack_require__.d(__webpack_exports__, "j", (function () {
        return moveBackwardSelectedObjects
    })), __webpack_require__.d(__webpack_exports__, "d", (function () {
        return deleteSelectedObjects
    })), __webpack_require__.d(__webpack_exports__, "f", (function () {
        return duplicateSelectedObjects
    })), __webpack_require__.d(__webpack_exports__, "q", (function () {
        return undo
    })), __webpack_require__.d(__webpack_exports__, "m", (function () {
        return redo
    })), __webpack_require__.d(__webpack_exports__, "n", (function () {
        return selectAll
    })), __webpack_require__.d(__webpack_exports__, "l", (function () {
        return receiveTank
    })), __webpack_require__.d(__webpack_exports__, "a", (function () {
        return addChild
    }));
    var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8),
        lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__),
        _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _shared_constants__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_shared_constants__WEBPACK_IMPORTED_MODULE_1__),
        _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13),
        _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__),
        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2),
        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__),
        _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        _input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9),
        _networking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6),
        _render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7),
        _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3),
        base64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17),
        base64_js__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(base64_js__WEBPACK_IMPORTED_MODULE_9__),
        pako__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25);

    function _createForOfIteratorHelper(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    a = function () { };
                return {
                    s: a,
                    n: function () {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, i = !0,
            s = !1;
        return {
            s: function () {
                n = n.call(e)
            },
            n: function () {
                var e = n.next();
                return i = e.done, e
            },
            e: function (e) {
                s = !0, o = e
            },
            f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function _toConsumableArray(e) {
        return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function _unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" == typeof e) return _arrayLikeToArray(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
        }
    }

    function _iterableToArray(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function _arrayWithoutHoles(e) {
        if (Array.isArray(e)) return _arrayLikeToArray(e)
    }

    function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var editmode = !1,
        editing = !1,
        currentWeapon = {},
        currentBody = {},
        editorUI = document.getElementById("tank-editor"),
        editorMenu = document.getElementById("tank-editor-menu"),
        barrelsText = document.getElementById("barrels-text"),
        gadgetsText = document.getElementById("gadgets-text"),
        layersText = document.getElementById("layers-text"),
        barrelsContent = document.getElementById("barrels-content"),
        gadgetsContent = document.getElementById("gadgets-content"),
        layersContent = document.getElementById("layers-content"),
        mainTankEditorMenu = document.getElementById("tank-editor-main"),
        selectionMenu = document.getElementById("tank-editor-selection");

    function setEditmode(e) {
        editmode = e, e ? editorUI.classList.remove("hidden") : (editorUI.classList.add("hidden"), editing && toggleEditing())
    }

    function toggleEditing() {
        (editing = !editing) ? (editorMenu.classList.remove("hide"), Object(_input__WEBPACK_IMPORTED_MODULE_5__.s)(), Object(_render__WEBPACK_IMPORTED_MODULE_7__.setShowChatBox)(!1), Object(_input__WEBPACK_IMPORTED_MODULE_5__.g)(), Object(_input__WEBPACK_IMPORTED_MODULE_5__.f)(!1), document.body.addEventListener("mousemove", mouseMove), Object(_input__WEBPACK_IMPORTED_MODULE_5__.o)()) : (document.body.removeEventListener("mousemove", mouseMove), tooltipElement.classList.add("hide"), editorMenu.classList.add("hide"), Object(_render__WEBPACK_IMPORTED_MODULE_7__.setShowChatBox)(!0))
    }
    selectionMenu.classList.add("hidden"), document.getElementById("button-edit").onclick = function () {
        toggleEditing()
    };
    var tooltipElement = document.getElementById("tank-editor-tooltip");

    function mouseMove(e) {
        var t = e.target.getAttribute("data-tooltip");
        t ? (tooltipElement.innerText = t, tooltipElement.classList.remove("hide")) : tooltipElement.classList.add("hide"), tooltipElement.style.top = e.y + "px", tooltipElement.style.left = e.x + "px"
    }
    document.getElementById("game-canvas").onclick = function (e) {
        editing && Object(_render__WEBPACK_IMPORTED_MODULE_7__.checkForTankEditorClicks)(e.ctrlKey || e.shiftKey || e.metaKey)
    };
    for (var collapsibles = document.getElementsByClassName("tank-editor-collapsible"), i = 0; i < collapsibles.length; i++) collapsibles[i].addEventListener("click", (function () {
        this.classList.toggle("active");
        var e = this.nextElementSibling;
        "flex" === e.style.display ? e.style.display = "none" : e.style.display = "flex"
    }));
    var weaponCameraSizeMultiplierInput = document.getElementById("weapon-camera-size-multiplier"),
        bodyCameraSizeMultiplierInput = document.getElementById("body-camera-size-multiplier"),
        weaponMaxDronesInput = document.getElementById("weapon-max-drones"),
        bodyMaxDronesInput = document.getElementById("body-max-drones"),
        sidesInput = document.getElementById("sides"),
        outerSidesInput = document.getElementById("outersides"),
        outerSizeInput = document.getElementById("outersize"),
        healthInput = document.getElementById("health"),
        bodyDamageInput = document.getElementById("bodydamage"),
        speedInput = document.getElementById("speed"),
        weaponNameInput = document.getElementById("weapon-name"),
        bodyNameInput = document.getElementById("body-name"),
        saveAsPngInput = document.getElementById("save-as-png-area"),
        saveAsPngButton = document.getElementById("save-as-png"),
        tankTypeSelect = document.getElementById("tank-type"),
        levelInput = document.getElementById("tank-level"),
        teamSelect = document.getElementById("tank-team"),
        teamSelectColor = document.getElementById("tank-team-color"),
        visualTeamSelect = document.getElementById("visual-tank-team"),
        visualTeamSelectColor = document.getElementById("visual-tank-team-color"),
        radiantInput = document.getElementById("radiant"),
        tankNameInput = document.getElementById("tank-name"),
        customTeamColor = addChild(teamSelect, "option");
    customTeamColor.value = "custom", customTeamColor.innerText = "Custom...", _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.TEAMS.forEach((function (e) {
        var t = addChild(teamSelect, "option");
        t.value = e.value, t.innerText = e.name
    }));
    var customVisualTeamColor = addChild(visualTeamSelect, "option");

    function updateTeamSelect(e) {
        Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)(e) ? (teamSelectColor.value = e, teamSelect.value = "custom", teamSelectColor.classList.remove("hidden")) : (teamSelect.value = e, teamSelectColor.classList.add("hidden"))
    }

    function updateVisualTeamSelect(e) {
        Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)(e) ? (visualTeamSelectColor.value = e, visualTeamSelect.value = "custom", visualTeamSelectColor.classList.remove("hidden")) : (visualTeamSelect.value = e, visualTeamSelectColor.classList.add("hidden"))
    }

    function tankUpdate() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        weaponUpdate(!1, !1), bodyUpdate(!1, !1), updateSelectedObject(), e && createSaveState()
    }
    customVisualTeamColor.value = "custom", customVisualTeamColor.innerText = "Custom...", _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.VISUAL_TEAMS.forEach((function (e) {
        var t = addChild(visualTeamSelect, "option");
        t.value = e.value, t.innerText = e.name
    })), weaponCameraSizeMultiplierInput.onchange = function () {
        currentWeapon.cameraSizeMultiplier = validateNumberAttribute(simplifyNumberInput(weaponCameraSizeMultiplierInput.value), 1), weaponCameraSizeMultiplierInput.value = Math.max(.1, currentWeapon.cameraSizeMultiplier), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()
    }, bodyCameraSizeMultiplierInput.onchange = function () {
        currentBody.cameraSizeMultiplier = validateNumberAttribute(simplifyNumberInput(bodyCameraSizeMultiplierInput.value), 1), bodyCameraSizeMultiplierInput.value = Math.max(.1, currentBody.cameraSizeMultiplier), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, weaponMaxDronesInput.onchange = function () {
        currentWeapon.maxDrones = validateNumberAttribute(simplifyNumberInput(weaponMaxDronesInput.value), 1), weaponMaxDronesInput.value = Math.max(0, currentWeapon.maxDrones), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()
    }, bodyMaxDronesInput.onchange = function () {
        currentBody.maxDrones = validateNumberAttribute(simplifyNumberInput(bodyMaxDronesInput.value), 1), bodyMaxDronesInput.value = Math.max(0, currentBody.maxDrones), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, sidesInput.onchange = function () {
        currentBody.sides = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(validateNumberAttribute(simplifyNumberInput(sidesInput.value), 0)), sidesInput.value = currentBody.sides, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, outerSidesInput.onchange = function () {
        currentBody.outerSides = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(validateNumberAttribute(simplifyNumberInput(outerSidesInput.value), 0)), outerSidesInput.value = currentBody.outerSides, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, outerSizeInput.onchange = function () {
        currentBody.outerSize = validateNumberAttribute(simplifyNumberInput(outerSizeInput.value), 0), outerSizeInput.value = currentBody.outerSize, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, healthInput.onchange = function () {
        currentBody.healthMultiplier = validateNumberAttribute(simplifyNumberInput(healthInput.value), 1), healthInput.value = currentBody.healthMultiplier, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, bodyDamageInput.onchange = function () {
        currentBody.bodyDamageMultiplier = validateNumberAttribute(simplifyNumberInput(bodyDamageInput.value), 1), bodyDamageInput.value = currentBody.bodyDamageMultiplier, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, speedInput.onchange = function () {
        currentBody.speedMultiplier = validateNumberAttribute(simplifyNumberInput(speedInput.value), 1), speedInput.value = currentBody.speedMultiplier, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, weaponNameInput.onchange = function () {
        currentWeapon.name = validateTextAttribute(weaponNameInput.value.trim(), ""), weaponNameInput.value = currentWeapon.name, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()
    }, bodyNameInput.onchange = function () {
        currentBody.name = validateTextAttribute(bodyNameInput.value.trim(), ""), bodyNameInput.value = currentBody.name, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, saveAsPngButton.onclick = function () {
        Object(_render__WEBPACK_IMPORTED_MODULE_7__.exportRenderedEntity)({
            sides: currentBody.sides,
            outerSides: currentBody.outerSides,
            outerSize: currentBody.outerSize,
            gadgets: Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(currentBody.gadgets),
            layers: Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(currentBody.layers),
            barrels: Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(currentWeapon.barrels),
            d: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(90),
            filename: saveAsPngInput.value.replace(/[\/|\\:*?"<>]/g, " ").trim(),
            size: _render__WEBPACK_IMPORTED_MODULE_7__.lastMe.size,
            team: _render__WEBPACK_IMPORTED_MODULE_7__.lastMe.team
        })
    }, saveAsPngInput.addEventListener("keydown", (function (e) {
        e.keyCode == _settings__WEBPACK_IMPORTED_MODULE_8__.c.enter && (saveAsPngButton.click(), saveAsPngInput.blur())
    })), tankTypeSelect.onchange = function () {
        currentBody.type = validateNumberAttribute(tankTypeSelect.value, 0), tankTypeSelect.value = currentBody.type, levelInput.onchange(), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, levelInput.onchange = function () {
        currentBody.level = Math.ceil(Object(lodash__WEBPACK_IMPORTED_MODULE_0__.clamp)(validateNumberAttribute(simplifyNumberInput(levelInput.value), 1), Math.max(1 == currentBody.type ? 75 : 1), 500)), levelInput.value = currentBody.level, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, teamSelect.onchange = function () {
        "custom" == teamSelect.value ? (Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)(currentBody.team) || (currentBody.team = "#ffffff"), teamSelectColor.value = currentBody.team, teamSelectColor.classList.remove("hidden")) : (currentBody.team = validateNumberAttribute(teamSelect.value, 0), teamSelect.value = currentBody.team, teamSelectColor.classList.add("hidden")), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, teamSelectColor.onchange = function () {
        Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)(teamSelectColor.value) || (Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)("#" + teamSelectColor.value) ? teamSelectColor.value = "#" + teamSelectColor.value : teamSelectColor.value = currentBody.team), currentBody.team = teamSelectColor.value, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, visualTeamSelect.onchange = function () {
        "custom" == visualTeamSelect.value ? (Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)(currentBody.visualTeam) || (currentBody.visualTeam = "#ffffff"), visualTeamSelectColor.value = currentBody.visualTeam, visualTeamSelectColor.classList.remove("hidden")) : (currentBody.visualTeam = validateNumberAttribute(visualTeamSelect.value, void 0), visualTeamSelect.value = currentBody.visualTeam, visualTeamSelectColor.classList.add("hidden")), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, visualTeamSelectColor.onchange = function () {
        Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)(visualTeamSelectColor.value) || (Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)("#" + visualTeamSelectColor.value) ? visualTeamSelectColor.value = "#" + visualTeamSelectColor.value : visualTeamSelectColor.value = currentBody.visualTeam), currentBody.visualTeam = visualTeamSelectColor.value, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, radiantInput.onchange = function () {
        currentBody.radiant = Math.round(Object(lodash__WEBPACK_IMPORTED_MODULE_0__.clamp)(validateNumberAttribute(simplifyNumberInput(radiantInput.value), 0), 0, _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.MAX_RADIANT)), radiantInput.value = currentBody.radiant, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    }, tankNameInput.onchange = function () {
        currentBody.overrideTankName = validateTextAttribute(tankNameInput.value.trim(), ""), tankNameInput.value = currentBody.overrideTankName, Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
    };
    var selectedObjects = [];

    function getSelectedObject(e) {
        return 0 == e.stack.length ? {
            barrel: currentWeapon.barrels,
            gadget: currentBody.gadgets,
            layer: currentBody.layers
        }[e.type][e.index] : function e(t, n, r) {
            if (1 == n.length) {
                var a = t[n[0]];
                return a && 3 == a.type && a.tank ? {
                    barrel: a.tank.barrels,
                    gadget: a.tank.gadgets,
                    layer: a.tank.layers
                }[r.type][r.index] : void 0
            }
            var o = t[n.shift()];
            return o && 3 == o.type && o.tank ? e(o.tank.gadgets, n, r) : void 0
        }(currentBody.gadgets, _toConsumableArray(e.stack), e)
    }

    function updateSelectedObject(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        if (e) {
            var a = -1;
            if (n || 1 == selectedObjects.length)
                for (var o = 0; o < selectedObjects.length; o++) {
                    var i = selectedObjects[o];
                    if (i.type == e && i.index == t && Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(i.stack, r)) {
                        a = o;
                        break
                    }
                } - 1 == a ? (n || (selectedObjects = []), selectedObjects.push({
                    type: e,
                    index: t,
                    stack: r
                })) : selectedObjects.splice(a, 1)
        }
        0 == selectedObjects.length ? (mainTankEditorMenu.classList.remove("hidden"), selectionMenu.classList.add("hidden")) : (mainTankEditorMenu.classList.add("hidden"), selectionMenu.classList.remove("hidden"));
        var s, l = [],
            u = _createForOfIteratorHelper(selectedObjects);
        try {
            for (u.s(); !(s = u.n()).done;) {
                var c = s.value;
                getSelectedObject(c) || l.push(c)
            }
        } catch (e) {
            u.e(e)
        } finally {
            u.f()
        }
        selectedObjects = selectedObjects.filter((function (e) {
            return !l.includes(e)
        }));
        for (var d = [
            [barrelButtons, "barrel", currentWeapon.barrels],
            [gadgetButtons, "gadget", currentBody.gadgets],
            [layerButtons, "layer", currentBody.layers]
        ], f = function e(t) {
            var n, r = _createForOfIteratorHelper(t.barrels);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    delete n.value.selected
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            var a, o = _createForOfIteratorHelper(t.gadgets);
            try {
                for (o.s(); !(a = o.n()).done;) {
                    var i = a.value;
                    delete i.selected, 3 == i.type && i.tank && e(i.tank)
                }
            } catch (e) {
                o.e(e)
            } finally {
                o.f()
            }
            var s, l = _createForOfIteratorHelper(t.layers);
            try {
                for (l.s(); !(s = l.n()).done;) {
                    delete s.value.selected
                }
            } catch (e) {
                l.e(e)
            } finally {
                l.f()
            }
        }, h = function e(t) {
            var n, r = _createForOfIteratorHelper(t);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var a = n.value;
                    a.button.classList.remove("selected"), a.tank && (e(a.tank.barrels), e(a.tank.gadgets), e(a.tank.layers))
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
        }, p = 0, _ = d; p < _.length; p++) {
            var g = _[p],
                v = g[0],
                y = g[2];
            h(v);
            var m, b = _createForOfIteratorHelper(y);
            try {
                for (b.s(); !(m = b.n()).done;) {
                    var E = m.value;
                    delete E.selected, "gadget" == g[1] && 3 == E.type && f(E.tank)
                }
            } catch (e) {
                b.e(e)
            } finally {
                b.f()
            }
        }
        var O, w = function e(t, n, r) {
            if (1 == n.length) {
                var a = t[n[0]];
                return {
                    barrel: a.tank.barrels,
                    gadget: a.tank.gadgets,
                    layer: a.tank.layers
                }[r.type][r.index]
            }
            return e(t[n.shift()].tank.gadgets, n, r)
        },
            T = _createForOfIteratorHelper(selectedObjects);
        try {
            for (T.s(); !(O = T.n()).done;) {
                var S, A = O.value,
                    M = _createForOfIteratorHelper(d);
                try {
                    for (M.s(); !(S = M.n()).done;) {
                        var x = S.value,
                            k = x[0],
                            C = x[1];
                        x[2];
                        if (0 == A.stack.length) {
                            if (A.type == C) {
                                var R = k[A.index].button;
                                R.classList.add("selected")
                            }
                        } else if ("gadget" == C) {
                            var I = w(k, _toConsumableArray(A.stack), A).button;
                            I.classList.add("selected")
                        }
                    }
                } catch (e) {
                    M.e(e)
                } finally {
                    M.f()
                }
            }
        } catch (e) {
            T.e(e)
        } finally {
            T.f()
        }
        updateSelectedObjectMenu()
    }

    function deselectAllObjects() {
        selectedObjects = [], updateSelectedObject()
    }

    function deselectObject(e, t, n) {
        updateSelectedObject(e, t, n)
    }
    var barrelTypes = [{
        value: 0,
        name: "Cannon"
    }, {
        value: 1,
        name: "Drone Spawner"
    }, {
        value: 2,
        name: "Trap Launcher"
    }, {
        value: 7,
        name: "Rocket Launcher"
    }, {
        value: 3,
        name: "Minion Spawner"
    }, {
        value: 8,
        name: "Custom Trap Launcher"
    }, {
        value: 6,
        name: "Nothing Barrel"
    }, {
        value: 4,
        name: "Player Spawner"
    }, {
        value: 5,
        name: "Polyp Spawner"
    }, {
        value: 9,
        name: "Polygon Spawner"
    }],
        gadgetTypes = [{
            value: 0,
            name: "Auto Cannon"
        }, {
            value: 1,
            name: "Mounted Drone Spawner"
        }, {
            value: 2,
            name: "Aura"
        }, {
            value: 3,
            name: "Tank Section"
        }],
        auraTypes = [{
            value: 0,
            name: "Damaging"
        }, {
            value: 1,
            name: "Healing"
        }, {
            value: 3,
            name: "Repulsion"
        }, {
            value: 4,
            name: "Attraction"
        }, {
            value: 2,
            name: "Cosmetic"
        }],
        visualBarrelTypes = [{
            value: void 0,
            name: "Unset"
        }, {
            value: 0,
            name: "Cannon"
        }, {
            value: 1,
            name: "Drone Spawner"
        }, {
            value: 2,
            name: "Trap Launcher"
        }, {
            value: 7,
            name: "Rocket Launcher"
        }, {
            value: 3,
            name: "Minion Spawner"
        }, {
            value: 8,
            name: "Custom Trap Launcher"
        }, {
            value: 6,
            name: "Nothing Barrel"
        }, {
            value: 4,
            name: "Player Spawner"
        }, {
            value: 5,
            name: "Polyp Spawner"
        }, {
            value: 9,
            name: "Polygon Spawner"
        }],
        barrelAttributes = _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.BARREL_ATTIBUTES,
        shootTriggers = [{
            name: "Normal",
            value: 0
        }, {
            name: "Inverse",
            value: 1
        }, {
            name: "Always",
            value: 2
        }, {
            name: "Never",
            value: 3
        }, {
            name: "Under Drone Limit",
            value: 4
        }, {
            name: "Not Under Drone Limit",
            value: 5
        }, {
            name: "Death",
            value: 6
        }],
        idleBehaviors = [{
            name: "Rotate",
            value: 0
        }, {
            name: "Return to Base Rotation",
            value: 1
        }],
        sectionRotationType = [{
            name: "Static",
            value: 0
        }, {
            name: "Auto Cannon",
            value: 1
        }, {
            name: "Constant Rotation",
            value: 2
        }],
        sectionRotationTrigger = [{
            name: "Always",
            value: 0
        }, {
            name: "Never",
            value: 1
        }, {
            name: "Shooting",
            value: 2
        }, {
            name: "Not Shooting",
            value: 3
        }, {
            name: "Under Drone Limit",
            value: 4
        }, {
            name: "Not Under Drone Limit",
            value: 5
        }],
        gadgetAttributes = [{
            name: "Auto Cannon",
            bulletName: "Bullet",
            barrelColor: !0,
            bulletStats: !0,
            defaultLength: .5,
            defaultWidth: .25
        }, {
            name: "Mounted Drone Spawner",
            bulletName: "Drone",
            barrelColor: !0,
            bulletStats: !0,
            droneStats: !0,
            defaultWidth: .5
        }, {
            name: "Aura",
            bulletName: "Aura",
            barrelColor: !0,
            defaultWidth: .6
        }, {
            name: "Tank Section",
            bulletName: "Tank",
            defaultWidth: .5
        }],
        teamColors = [{
            value: void 0,
            name: "Unset"
        }, {
            value: -1,
            name: "Fallen (Light Gray)"
        }, {
            value: 2,
            name: "Celestial (Pink)"
        }, {
            value: 10,
            name: "Blue"
        }, {
            value: 11,
            name: "Red"
        }, {
            value: 12,
            name: "Green"
        }, {
            value: 13,
            name: "Purple"
        }, {
            value: 5,
            name: "Black"
        }, {
            value: 6,
            name: "White"
        }, {
            value: 3,
            name: "Barrel (Gray)"
        }, {
            value: 7,
            name: "Spike (Dark Gray)"
        }, {
            value: 20,
            name: "Triangle Yellow"
        }, {
            value: 21,
            name: "Square Red"
        }, {
            value: 22,
            name: "Pentagon Blue"
        }, {
            value: 23,
            name: "Hexagon Orange"
        }, {
            value: 24,
            name: "Heptagon Green"
        }, {
            value: 25,
            name: "Octagon Blue"
        }, {
            value: 26,
            name: "Nonagon Dark Purple"
        }, {
            value: 27,
            name: "Decagon Dark Blue"
        }, {
            value: 28,
            name: "Hendecagon Black"
        }, {
            value: 29,
            name: "Dodecagon Dark Grey"
        }, {
            value: 30,
            name: "Tridecagon White"
        }],
        barrelColors = [{
            value: void 0,
            name: "Default (Gray)"
        }, {
            value: -1,
            name: "Fallen (Light Gray)"
        }, {
            value: 2,
            name: "Celestial (Pink)"
        }, {
            value: 10,
            name: "Blue"
        }, {
            value: 11,
            name: "Red"
        }, {
            value: 12,
            name: "Green"
        }, {
            value: 13,
            name: "Purple"
        }, {
            value: 5,
            name: "Black"
        }, {
            value: 6,
            name: "White"
        }, {
            value: 7,
            name: "Spike (Dark Gray)"
        }, {
            value: 20,
            name: "Triangle Yellow"
        }, {
            value: 21,
            name: "Square Red"
        }, {
            value: 22,
            name: "Pentagon Blue"
        }, {
            value: 23,
            name: "Hexagon Orange"
        }, {
            value: 24,
            name: "Heptagon Green"
        }, {
            value: 25,
            name: "Octagon Blue"
        }, {
            value: 26,
            name: "Nonagon Dark Purple"
        }, {
            value: 27,
            name: "Decagon Dark Blue"
        }, {
            value: 28,
            name: "Hendecagon Black"
        }, {
            value: 29,
            name: "Dodecagon Dark Grey"
        }, {
            value: 30,
            name: "Tridecagon White"
        }];

    function addDropdownAttribute(e, t, n, r, a) {
        var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : void 0;
        attributes.push({
            type: 0,
            subtype: r,
            id: n,
            name: e,
            description: t,
            options: a,
            deleteIfNaN: o,
            placeholder: i
        })
    }

    function addLargeTextAttribute(e, t, n, r, a) {
        attributes.push({
            type: 1,
            subtype: a,
            id: r,
            name: e,
            description: t,
            placeholder: n
        })
    }

    function addTextAttribute(e, t, n, r, a, o) {
        attributes.push({
            type: 2,
            subtype: o,
            id: n,
            name: e,
            description: t,
            placeholder: r,
            isNumber: a
        })
    }

    function addHeader(e) {
        attributes.push({
            type: -1,
            name: e,
            id: e
        })
    }
    var attributes = [];

    function updateSelectedObjectMenu() {
        var e, t = [],
            n = _createForOfIteratorHelper(selectedObjects);
        try {
            for (n.s(); !(e = n.n()).done;) {
                var r = e.value,
                    a = getSelectedObject(r),
                    o = "Error when loading object: invalid selected object";
                if (a) {
                    switch (r.type) {
                        case "barrel":
                            o = getBarrelName(a);
                            break;
                        case "gadget":
                            o = getGadgetName(a);
                            break;
                        case "layer":
                            o = getLayerName(a)
                    }
                    switch (a.selected = !0, attributes = [], r.type) {
                        case "barrel":
                            var i = barrelAttributes[a.type];
                            addDropdownAttribute("Barrel Type", "The type of the barrel. Each barrel type functions and looks differently.", "type", 1, barrelTypes, !1, 0), addDropdownAttribute("Override Visual Type", "Overrides the look of the barrel, making it look like another barrel type.", "visualType", 0, visualBarrelTypes, !0), i.minionStats && addLargeTextAttribute("".concat(i.bulletName, " Tank Code"), "The tank code of the ".concat(i.bulletName.toLowerCase(), ". It can have barrels, gadgets, and layers, just like any other tank."), 'enter a "full tank" code here', "minion", 0), addHeader("Size and Position"), addTextAttribute("Rotation", "The barrel's rotation, in degrees.", "rot", 0, !0, 1), addTextAttribute("Length", "The length of the barrel. ".concat(i.bulletName, "s are shot from the tip of the barrel."), "length", i.defaultLength, !0, 0), addTextAttribute("Width", "The width of the barrel. Wider barrels shoot larger ".concat(i.bulletName.toLowerCase(), "s, and deal more recoil."), "width", i.defaultWidth, !0, 0), addTextAttribute("Side Offset", "The barrel's offset to the side.", "offset", 0, !0, 0), addTextAttribute("Forward Offset", "The barrel's offset forwards. Use negative numbers to offset it backwards.", "distance", 0, !0, 0), addHeader("Attributes"), addDropdownAttribute("Barrel Color", "The color of the barrel.", "color", 3, barrelColors, !0), i.polygonStats && (addDropdownAttribute("Polygon Color Type", "The color of the polygon. 'Polygon Color' uses the color the polygon would normally be, and 'Team Color' uses the color of the polygon's team.", "colorType", 0, ["Polygon Color", "Team Color"], !1, 0), addDropdownAttribute("Polygon Team", "The team of the polygon. Polygons can't damage entities on their team, unless the team name says (FFA). All naturally spawning polygons are on the 'Polygon' team.", "team", 3, _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.POLYGON_TEAMS, !0, 1), addTextAttribute("Minimum ".concat(i.bulletName, " Size"), "The minimum number of sides the polygon will have.", "minSize", 3, !0, 2), addTextAttribute("Maximum ".concat(i.bulletName, " Size"), "The maximum number of sides the polygon will have. Polygon sizes are still limited by the map size.", "maxSize", 3, !0, 2), addTextAttribute("".concat(i.bulletName, " Radiant Level"), "The radiant level of the polygon. Radiant polygons change colors over time, and drop more XP.", "radiant", 0, !0, 5)), (i.minionStats || i.bulletStats) && addDropdownAttribute("Override ".concat(i.bulletName, " Color"), "Overrides the color of the ".concat(i.bulletName.toLowerCase(), ", no mattter your team."), "team", 3, teamColors, !0), i.noShootTrigger || addDropdownAttribute("Shoot Trigger", "What causes the barrel to shoot. Most barrels use 'Normal' by default, except for Drone Spawners and Minion Spawners.", "shootTrigger", 0, [{
                                value: void 0,
                                name: "Default (".concat(shootTriggers[i.defaultShootTrigger].name, ")")
                            }].concat(shootTriggers), !0), i.droneStats && (addTextAttribute("".concat(i.bulletName, " Minimum Distance"), "".concat(i.bulletName, "s closer than this to their target will move away from it."), "minDist", i.minionStats ? 6 : 0, !0, 0), addTextAttribute("".concat(i.bulletName, " Maximum Distance"), "".concat(i.bulletName, "s farther away than this to their target will move closer to it."), "maxDist", i.minionStats ? 10 : 0, !0, 0)), addTextAttribute("Reload", "How long the barrel waits in between shots. The larger the number, the larger time in between shots.", "reload", 1, !0, 0), addTextAttribute("Recoil", "How much the barrel pushes you back when shooting. Recoil is also influenced by the ".concat(i.bulletName.toLowerCase(), "'s size."), "recoil", 1, !0, 0), i.extraBulletStats && (addTextAttribute("Spread", "How far (in degrees) the direction of shots are randomized.", "spread", 0, !0, 0), addTextAttribute("".concat(i.bulletName, " Size"), "The size multiplier of the ".concat(i.bulletName.toLowerCase(), ". Size is also influenced by the barrel width."), "size", 1, !0, 0)), i.minionStats && (addTextAttribute("".concat(i.bulletName, " Body Damage"), "The body damage multiplier of the ".concat(i.bulletName.toLowerCase(), "."), "damage", 1, !0, 0), addTextAttribute("".concat(i.bulletName, " Speed"), "The movement speed multiplier of the ".concat(i.bulletName.toLowerCase(), "."), "speed", 1, !0, 0), addTextAttribute("".concat(i.bulletName, " Health"), "The health speed multiplier of the ".concat(i.bulletName.toLowerCase(), "."), "penetration", 1, !0, 0)), i.launchSpeed && addTextAttribute("".concat(i.bulletName, " Launch Speed"), "The speed at which the ".concat(i.bulletName.toLowerCase(), " is launched out of the barrel."), "speed", 1, !0, 0), i.bulletStats && (addTextAttribute("".concat(i.bulletName, " Damage"), "The amount of damage dealt by the ".concat(i.bulletName.toLowerCase(), "."), "damage", 1, !0, 0), addTextAttribute("".concat(i.bulletName, " Speed"), "The movement speed of the ".concat(i.bulletName.toLowerCase(), "."), "speed", 1, !0, 0), addTextAttribute("".concat(i.bulletName, " Penetration"), "The penetration the ".concat(i.bulletName.toLowerCase(), ". Higher penetration ").concat(i.bulletName.toLowerCase(), "s last longer before despawning or dying."), "penetration", 1, !0, 0)), addTextAttribute("Barrel Delay", "How long the barrel waits before it starts shooting. Influenced by reload.", "delay", 0, !0, 0);
                            break;
                        case "gadget":
                            var s = gadgetAttributes[a.type];
                            addDropdownAttribute("Gadget Type", "The type of the gadget. Different gadgets function and look differently.", "type", 2, gadgetTypes, !1, 0), 2 == a.type && addDropdownAttribute("Aura Type", "The type of the aura. Each aura functions differently. Cosmetic auras are only for decoration.", "subtype", 0, auraTypes), addHeader("Size and Position"), 2 == a.type && addTextAttribute("Aura Radius", "The size of the aura.", "radius", 4, !0, 0), [0, 3].includes(a.type) ? addTextAttribute("Base Rotation", "The initial rotation of the ".concat(s.name.toLowerCase(), "."), "baseRot", 0, !0, 1) : addTextAttribute("Rotation", "The ".concat(s.name.toLowerCase(), "'s rotation"), "rot", 0, !0, 1), s.defaultLength && addTextAttribute("Length", ["The length of the auto cannon's barrel."][a.type], "length", s.defaultLength, !0, 0), s.defaultWidth && addTextAttribute(["Width", "Size", "Size", "Size"][a.type], ["The width of the auto cannon. The width influences the size of the bullet.", "The size of the mounted drone spawner.", "The size of the aura's base.", "The size of the tank section."][a.type], "width", s.defaultWidth, !0, 0), addTextAttribute("Side Offset", "The ".concat(s.name.toLowerCase(), "'s offset to the side."), "offsetX", 0, !0, 0), addTextAttribute("Forward Offset", "The ".concat(s.name.toLowerCase(), "'s offset forwards."), "offsetY", 0, !0, 0), 3 == a.type && (addHeader("Movement"), addDropdownAttribute("Rotation Type", "How the tank section rotates. When it's locked, it doesn't rotate at all, and when it's unlocked, it rotates with its base.", "rotationType", 0, sectionRotationType), 1 == a.rotationType ? (addHeader("Auto Cannon"), addDropdownAttribute("Idle Behavior", "What the tank section does when it doesn't have any targets. When set to \"Rotate\", the rotation speed is based on the tank section's idle rotation speed.", "idleBehavior", 0, idleBehaviors), 0 == a.idleBehavior && addTextAttribute("Idle Rotation Speed", 'How fast the tank section rotates when it doesn\'t have any targets and its idle behavior is set to "Rotate".', "rotationSpeed", 1, !0, 0), addTextAttribute("Max Rotation Spread", "The maximum the tank section can rotate from its base rotation (in degrees, on both sides). When it's past the maximum, it will rotate until it's back to the maximum. Set to 0 for no maximum.", "maxSpread", 0, !0, 0), addTextAttribute("Target Turn Speed", "How fast the tank section turns whenever it finds a target to shoot at. Between 0 and 1.", "turnSpeed", 1, !0, 3), addTextAttribute("Main Barrel Speed", "Set this to the bullet speed of the tank section's main barrel for optimal movement prediction. This is only used for movement prediction.", "speed", 1, !0, 0), addTextAttribute("Main Barrel Length", "Set this to the length of the tank section's main barrel for optimal movement prediction. This is only used for movement prediction.", "length", 1, !0, 0), addTextAttribute("Target Detect Distance", "How far away something needs to be to be detected by the tank section.", "minDistance", 15, !0, 0), addTextAttribute("Target Forget Distance", "How far away something needs to be to be forgetten by the tank section.", "maxDistance", 25, !0, 0)) : 2 == a.rotationType && (addTextAttribute("Rotation Speed", "How fast the tank section rotates. Set to a negative number to rotate in the opposite direction.", "rotationSpeed", 1, !0, 0), addDropdownAttribute("Is Anchored", "Whether or not the tank section rotates with its base.", "anchored", 0, ["On", "Off"], !1, 0)), addHeader("Visual"), addDropdownAttribute("Override Color", "Overrides the color of the tank section.", "team", 3, teamColors, !0), null != a.team && addDropdownAttribute("Suppress Color Changes", "Whether or not the tank section changes color with the body. When on, the tank section won't change color when damaged or radiant. Does not work when the tank section's override color is set.", "suppressColor", 0, ["On", "Off"], !1, 0), addTextAttribute("Sides", "The amount of sides the tank section has. Zero sides make a circle, negative sides make a star.", "sides", 0, !0, 4), addHeader("Outer Shell"), addTextAttribute("Outer Sides", "The amount of sides the tank section's outer shell has. Zero sides make a circle, negative sides make a star.", "outerSides", 0, !0, 4), addTextAttribute("Outer Size", "The size of the tank section's outer shell.", "outerSize", 0, !0, 0)), addHeader("Attributes"), 3 == a.type && addLargeTextAttribute("Tank Code", "Enter a tank code to import it. It can have barrels, gadgets, and layers, just like any other tank.", 'enter a "full tank" code here', "tank", 1), s.barrelColor && addDropdownAttribute("".concat(2 == a.type ? "Aura Base" : "Barrel", " Color"), "The color of the ".concat(2 == a.type ? "aura's base" : "barrel", "."), "color", 3, barrelColors, !0), s.bulletStats ? (addDropdownAttribute("Override ".concat(s.bulletName, " Color"), "Overrides the color of the ".concat(s.bulletName.toLowerCase(), ", no mattter your team."), "team", 3, teamColors, !0), s.droneStats && (addTextAttribute("".concat(s.bulletName, " Minimum Distance"), "".concat(s.bulletName, "s closer than this to their target will move away from it."), "minDist", s.minionStats ? 6 : 0, !0, 0), addTextAttribute("".concat(s.bulletName, " Maximum Distance"), "".concat(s.bulletName, "s farther away than this from their target will move closer to it."), "maxDist", s.minionStats ? 10 : 0, !0, 0)), 0 == a.type && (addDropdownAttribute("Idle Behavior", "What the Auto Cannon does when it doesn't have any targets. When set to \"Rotate\", the rotation speed is based on the auto cannon's idle rotation speed.", "idleBehavior", 0, idleBehaviors), 0 == a.idleBehavior && addTextAttribute("Idle Rotation Speed", 'How fast the Auto Cannon rotates when it doesn\'t have any targets and its idle behavior is set to "Rotate".', "rotationSpeed", 1, !0, 0)), addTextAttribute("Reload", "How long the barrel waits in between shots. The larger the number, the larger time in between shots.", "reload", 1, !0, 0), 0 == a.type && (addTextAttribute("Recoil", "How much the barrel pushes you back when shooting. Recoil is also influenced by the ".concat(s.bulletName.toLowerCase(), "'s size."), "recoil", 0, !0, 0), addTextAttribute("Spread", "How far (in degrees) the direction of shots are randomized.", "spread", 0, !0, 0), addTextAttribute("Bullet Size", "The size multiplier of the ".concat(s.bulletName.toLowerCase(), ". Size is also influenced by the barrel width."), "size", 1, !0, 0)), addTextAttribute("".concat(s.bulletName, " Damage"), "The amount of damage dealt by the ".concat(s.bulletName.toLowerCase(), "."), "damage", 1, !0, 0), addTextAttribute("".concat(s.bulletName, " Speed"), "The movement speed of the ".concat(s.bulletName.toLowerCase(), "."), "speed", 1, !0, 0), addTextAttribute("".concat(s.bulletName, " Penetration"), "The penetration the ".concat(s.bulletName.toLowerCase(), ". Higher penetration ").concat(s.bulletName.toLowerCase(), "s last longer before despawning or dying."), "penetration", 1, !0, 0), 0 == a.type && (addTextAttribute("Target Detect Distance", "How far away something needs to be to be detected by the auto cannon.", "minDistance", 15, !0, 0), addTextAttribute("Target Forget Distance", "How far away something needs to be to be forgetten by the auto cannon.", "maxDistance", 25, !0, 0))) : 2 == a.type && (addTextAttribute("Aura Base Sides", "The amount of sides the aura's base has. Zero sides make a circle, negative sides make a star.", "backSides", 0, !0, 4), addDropdownAttribute("Override Aura Color", "Overrides the color of the aura.", "auraColor", 3, teamColors, !0), addDropdownAttribute("Particles", "Whether or not the aura emits particles.", "showParticles", 0, ["On", "Off"], !1, 0), addDropdownAttribute("Aura Rotation Type", "How the aura rotates. When it's locked, it doesn't rotate at all, and when it's unlocked, it rotates with its base.", "rotationType", 0, ["Unlocked", "Locked"]), addTextAttribute("Aura Opacity", "The opacity of the aura, 0-1. 0 makes it invisible.", "alpha", .3, !0, 0), 2 != a.subtype && (addTextAttribute("".concat(["Attack", "Heal", "Nothing", "Repel", "Attract"][a.subtype], " Interval"), "How often the aura will ".concat(["attack", "heal", "what are you looking for here in the code?", "repel", "attract"][a.subtype], "."), "reload", .25, !0, 0), addTextAttribute("".concat(["Damage", "Healing", "Nothing", "Repulsion", "Attraction"][a.subtype]), "How much the aura will ".concat(["attack", "heal", "get out", "repel", "attract"][a.subtype], "."), "damage", .125, !0, 0), [3, 4].includes(a.subtype) && addDropdownAttribute("Ignore Mass", "If the aura ignores the size of the objects it's ".concat({
                                3: "repelling",
                                4: "attracting"
                            }[a.subtype], ". When on, it will ").concat({
                                3: "repel",
                                4: "attract"
                            }[a.subtype], " all objects at the same speed, regardless of its size."), "ignoreMass", 0, ["On", "Off"], !1, 1), addDropdownAttribute("Affects Bullets", "If the aura affects bullets. Auras will never affect bullets while in the safe zone, regardless of this setting.", "affectBullets", 0, ["All Bullets", "Enemy Bullets", "Off"], !1, 1)), addTextAttribute("Aura Sides", "The amount of sides the aura has. Zero sides make a circle, negative sides make a star.", "sides", 0, !0, 4));
                            break;
                        case "layer":
                            addHeader("Size and Position"), addTextAttribute("Rotation", "The layer's rotation.", "rot", 0, !0, 1), addTextAttribute("Side Offset", "The layer's offset to the side.", "offsetX", 0, !0, 0), addTextAttribute("Forward Offset", "The layer's offset to the side.", "offsetY", 0, !0, 0), addTextAttribute("Size", "The layer's size.", "size", .5, !0, 0), addHeader("Visual"), addDropdownAttribute("Override Color", "Overrides the color of the layer.", "team", 3, teamColors, !0), addTextAttribute("Sides", "The amount of sides the layer has. Zero sides make a circle, negative sides make a star.", "sides", 0, !0, 4), addHeader("Outer Shell"), addTextAttribute("Outer Sides", "The amount of sides the layer's outer shell has. Zero sides make a circle, negative sides make a star.", "outerSides", 0, !0, 4), addTextAttribute("Outer Size", "The size of the layer's outer shell.", "outerSize", 0, !0, 0)
                    }
                    t.push({
                        object: a,
                        objectInfo: r,
                        name: o,
                        attributes: attributes
                    })
                }
            }
        } catch (e) {
            n.e(e)
        } finally {
            n.f()
        }
        if (0 != t.length) {
            for (var l, u, c = [], d = 0, f = t; d < f.length; d++) {
                var h, p = f[d],
                    _ = _createForOfIteratorHelper(p.attributes);
                try {
                    var g = function () {
                        var e, n = h.value,
                            r = !0,
                            a = p.object[n.id],
                            o = !0,
                            i = _createForOfIteratorHelper(t);
                        try {
                            for (i.s(); !(e = i.n()).done;) {
                                var s = e.value,
                                    l = s.attributes.find((function (e) {
                                        return e.id == n.id
                                    }));
                                if (!l || l.type != n.type || l.subtype != n.subtype || !Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(l.options, n.options) || l.deleteIfNaN != n.deleteIfNaN || l.isNumber != n.isNumber) {
                                    r = !1;
                                    break
                                }
                                o && (Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(s.object[n.id], a) || (o = !1))
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        r && !c.find((function (e) {
                            return e.id == n.id
                        })) && (c.push(n), n.sharedValue = a, n.isValueShared = o)
                    };
                    for (_.s(); !(h = _.n()).done;) g()
                } catch (e) {
                    _.e(e)
                } finally {
                    _.f()
                }
                null == l ? l = p.name : l != p.name && (l = ""), null == u ? u = p.objectInfo.type : u != p.objectInfo.type && (u = "")
            }
            var v = {
                barrel: "Barrel",
                layer: "Layer",
                gadget: "Gadget"
            }[u] || "Object";
            "" == l ? l = "".concat(t.length, " ").concat(v, "s") : t.length > 1 && (l = "".concat(t.length, " ").concat(l, "s")), removeAllChildNodes(selectionMenu);
            var y = addChild(selectionMenu, "div");
            y.id = "tank-editor-title", y.innerHTML = l;
            for (var m = function (e, n) {
                var r, a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = _createForOfIteratorHelper(t);
                try {
                    for (o.s(); !(r = o.n()).done;) {
                        var i = r.value,
                            s = i.object;
                        null != s[e] && a || (s[e] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(n), null == s[e] && delete s[e])
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
            }, b = function () {
                var e = O[E];
                switch (e.type) {
                    case -1:
                        (S = addChild(selectionMenu, "div")).id = "tank-editor-subtitle", S.innerHTML = e.name, w = S;
                        break;
                    case 0:
                        (T = addChild(selectionMenu, "div")).id = "tank-editor-text", T.innerHTML = e.name + "&emsp;", w = T;
                        var t, n = e.isValueShared && Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)(e.sharedValue);
                        switch (n && ((t = addChild(T, "input")).autocomplete = "off", t.classList.add("tank-editor-input"), t.placeholder = "#000000", t.style.marginRight = "1vmin", t.value = e.sharedValue), (S = addChild(T, "select")).classList.add("tank-editor-select"), e.subtype) {
                            case 3:
                                var r = addChild(S, "option");
                                r.value = "custom", r.innerHTML = "Custom..."
                        }
                        for (var o = 0; o < e.options.length; o++) {
                            var i = addChild(S, "option");
                            e.options[o].hasOwnProperty("value") ? (i.value = e.options[o].value, i.innerHTML = e.options[o].name) : (i.value = o, i.innerHTML = e.options[o])
                        }
                        e.isValueShared ? S.value = n ? "custom" : validateTextAttribute(e.sharedValue, e.placeholder) : S.value = -1, t && (t.onchange = function (t) {
                            Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)(t.target.value) || (Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)("#" + t.target.value) ? t.target.value = "#" + t.target.value : t.target.value = e.sharedValue), m(e.id, t.target.value), updateSelectedObjects()
                        }), S.onchange = function (t) {
                            if ("custom" == t.target.value) e.isValueShared && Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)(e.sharedValue) || m(e.id, "#ffffff");
                            else if (e.deleteIfNaN) {
                                var n = +t.target.value;
                                isNaN(n) && (n = void 0), m(e.id, n)
                            } else m(e.id, validateNumberAttribute(t.target.value, 0));
                            switch (e.subtype) {
                                case 1:
                                    switch (9 != +t.target.value && ["colorType", "radiant", "minSize", "maxSize"].forEach((function (e) {
                                        m(e, void 0)
                                    })), +t.target.value) {
                                        case 7:
                                            m("minion", {
                                                gadgets: [],
                                                layers: [],
                                                sides: 0,
                                                outerSides: 0,
                                                outerSize: 0,
                                                maxBodyDrones: 3,
                                                barrels: [{
                                                    type: 0,
                                                    rot: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(-145),
                                                    offset: 0,
                                                    width: .5,
                                                    length: .8,
                                                    damage: .5,
                                                    reload: .5,
                                                    distance: 0,
                                                    penetration: .5,
                                                    delay: 0
                                                }, {
                                                    type: 0,
                                                    rot: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(145),
                                                    offset: 0,
                                                    width: .5,
                                                    length: .8,
                                                    damage: .5,
                                                    reload: .5,
                                                    distance: 0,
                                                    penetration: .5,
                                                    delay: 0
                                                }],
                                                maxWeaponDrones: 3
                                            }, !0), ["minDist", "maxDist"].forEach((function (e) {
                                                m(e, void 0)
                                            }));
                                            break;
                                        case 8:
                                            m("minion", {
                                                gadgets: [],
                                                layers: [],
                                                sides: 4,
                                                outerSides: 0,
                                                outerSize: 0,
                                                maxBodyDrones: 3,
                                                barrels: [{
                                                    type: 0,
                                                    rot: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(-135),
                                                    offset: 0,
                                                    width: .4,
                                                    length: .6,
                                                    damage: .5,
                                                    reload: 1,
                                                    distance: 0,
                                                    penetration: .5,
                                                    delay: 0
                                                }, {
                                                    type: 0,
                                                    rot: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(135),
                                                    offset: 0,
                                                    width: .4,
                                                    length: .6,
                                                    damage: .5,
                                                    reload: 1,
                                                    distance: 0,
                                                    penetration: .5,
                                                    delay: 0
                                                }, {
                                                    type: 0,
                                                    rot: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(-45),
                                                    offset: 0,
                                                    width: .4,
                                                    length: .6,
                                                    damage: .5,
                                                    reload: 1,
                                                    distance: 0,
                                                    penetration: .5,
                                                    delay: 0
                                                }, {
                                                    type: 0,
                                                    rot: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(45),
                                                    offset: 0,
                                                    width: .4,
                                                    length: .6,
                                                    damage: .5,
                                                    reload: 1,
                                                    distance: 0,
                                                    penetration: .5,
                                                    delay: 0
                                                }],
                                                maxWeaponDrones: 3
                                            }, !0), ["minDist", "maxDist"].forEach((function (e) {
                                                m(e, void 0)
                                            }));
                                            break;
                                        case 3:
                                            m("minion", {
                                                sides: 0,
                                                barrels: [{
                                                    type: 0,
                                                    rot: 0,
                                                    offset: 0,
                                                    width: .5,
                                                    length: 1,
                                                    damage: .5,
                                                    reload: 1,
                                                    delay: 0
                                                }],
                                                gadgets: []
                                            }, !0), ["minDist", "maxDist"].forEach((function (e) {
                                                m(e, void 0)
                                            }));
                                            break;
                                        case 1:
                                            ["minion"].forEach((function (e) {
                                                m(e, void 0)
                                            }));
                                            break;
                                        default:
                                            ["minion", "minDist", "maxDist"].forEach((function (e) {
                                                m(e, void 0)
                                            }));
                                            break;
                                        case 9:
                                            m("colorType", 0), m("team", 1), m("minSize", 3), m("maxSize", 15), m("radiant", 0), m("team", void 0)
                                    }
                                    break;
                                case 2:
                                    switch (["alpha", "length", "speed", "penetration", "sides", "backSides", "subtype", "radius", "rotationType", "maxSpread", "suppressColor", "turnSpeed", "showParticles", "ignoreMass", "affectBullets", "baseRot", "idleBehavior", "rotationSpeed", "maxDistance", "minDistance"].forEach((function (e) {
                                        m(e, void 0)
                                    })), a.type) {
                                        case 0:
                                            m("rot", void 0), m("baseRot", 0), m("idleBehavior", 0), m("rotationSpeed", 1), m("length", 1), m("minDistance", 15), m("maxDistance", 25), m("speed", 1), m("penetration", 1);
                                            break;
                                        case 1:
                                            m("rot", 0), m("speed", 1), m("penetration", 1);
                                            break;
                                        case 2:
                                            m("rot", 0), m("sides", 0), m("backSides", 0), m("subtype", 0), m("radius", 4), m("alpha", .3), m("rotationType", 1), m("width", .6), m("damage", .1), m("reload", .25), m("showParticles", 0), m("affectBullets", 2), m("ignoreMass", 1);
                                            break;
                                        case 3:
                                            m("rot", void 0), m("damage", void 0), m("reload", void 0), m("tank", {
                                                barrels: [{
                                                    type: 0,
                                                    rot: 0,
                                                    offset: 0,
                                                    width: .5,
                                                    length: 1,
                                                    damage: 1,
                                                    reload: 1,
                                                    delay: 0,
                                                    speed: 1,
                                                    distance: 0,
                                                    penetration: 1
                                                }],
                                                gadgets: [],
                                                layers: []
                                            }), m("rotationType", 0), m("maxSpread", 0), m("suppressColor", 0), m("turnSpeed", 1), m("baseRot", 0), m("sides", 0), m("outerSides", 0), m("outerSize", 0), m("idleBehavior", 0), m("rotationSpeed", 1), m("anchored", 0), m("speed", 1), m("length", 1), m("minDistance", 15), m("maxDistance", 25)
                                    }
                            }
                            updateSelectedObjects()
                        };
                        break;
                    case 1:
                        (T = addChild(selectionMenu, "div")).id = "tank-editor-text", T.innerHTML = e.name, w = T, (S = addChild(selectionMenu, "textarea")).autocomplete = "off", S.classList.add("tank-editor-input-large");
                        for (var s = 0; s < 15; s++) addChild(selectionMenu, "br");
                        switch (S.placeholder = e.placeholder, S.value = e.isValueShared ? e.sharedValue : "-", e.subtype) {
                            case 0:
                                e.isValueShared && (S.value = objectToCode({
                                    gadgets: clearGadgets(e.sharedValue.gadgets || []),
                                    layers: clearLayers(e.sharedValue.layers || []),
                                    sides: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e.sharedValue.sides || 0),
                                    outerSides: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e.sharedValue.outerSides || 0),
                                    outerSize: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e.sharedValue.outerSize || 0),
                                    maxBodyDrones: e.sharedValue.maxBodyDrones,
                                    barrels: clearBarrels(e.sharedValue.barrels || []),
                                    maxWeaponDrones: e.sharedValue.maxWeaponDrones
                                }));
                                break;
                            case 1:
                                e.isValueShared && (S.value = objectToCode({
                                    gadgets: clearGadgets(e.sharedValue.gadgets || []),
                                    layers: clearLayers(e.sharedValue.layers || []),
                                    barrels: clearBarrels(e.sharedValue.barrels || [])
                                }))
                        }
                        S.lastValue = S.value, S.onchange = function (t) {
                            switch (e.subtype) {
                                case 0:
                                    try {
                                        if ((n = codeToObject(t.target.value)).error) return Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Tank code invalid!", n.error), void (t.target.value = t.target.lastValue)
                                    } catch (e) {
                                        return Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Tank code invalid!", e), void (t.target.value = t.target.lastValue)
                                    }
                                    t.target.lastValue = t.target.value, m(e.id, {
                                        gadgets: readGadgets(n.gadgets || []),
                                        layers: readLayers(n.layers || []),
                                        outerSize: n.outerSize || 0,
                                        sides: n.sides || 0,
                                        outerSides: n.outerSides || 0,
                                        maxBodyDrones: validateNumberAttribute(n.maxBodyDrones, 3),
                                        barrels: readBarrels(n.barrels || []),
                                        maxWeaponDrones: validateNumberAttribute(n.maxWeaponDrones, 3)
                                    }), null != n.healthMultiplier && m("penetration", n.healthMultiplier), null != n.bodyDamageMultiplier && m("damage", n.bodyDamageMultiplier), null != n.speedMultiplier && m("speed", n.speedMultiplier);
                                    break;
                                case 1:
                                    var n;
                                    try {
                                        if ((n = codeToObject(t.target.value)).error) return Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Tank code invalid!", n.error), void (t.target.value = t.target.lastValue)
                                    } catch (e) {
                                        return Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Tank code invalid!", e), void (t.target.value = t.target.lastValue)
                                    }
                                    t.target.lastValue = t.target.value, m(e.id, {
                                        gadgets: readGadgets(n.gadgets || []),
                                        layers: readLayers(n.layers || []),
                                        barrels: readBarrels(n.barrels || [])
                                    }), null != n.sides && m("sides", n.sides), null != n.outerSides && m("outerSides", n.outerSides), null != n.outerSize && m("outerSize", n.outerSize)
                            }
                            updateSelectedObjects()
                        };
                        break;
                    case 2:
                        switch ((T = addChild(selectionMenu, "div")).id = "tank-editor-text", T.innerHTML = e.name + "&emsp;", w = T, (S = addChild(T, "input")).autocomplete = "off", S.classList.add("tank-editor-input"), S.placeholder = e.placeholder, e.subtype) {
                            default:
                                e.isValueShared ? e.isNumber ? S.value = validateNumberAttribute(e.sharedValue, e.placeholder) : S.value = validateTextAttribute(e.sharedValue, e.placeholder) : S.value = "-";
                                break;
                            case 1:
                                e.isValueShared ? S.value = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round)(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(validateNumberAttribute(e.sharedValue, e.placeholder)), _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING) : S.value = "-"
                        }
                        S.onchange = function (t) {
                            if (e.isNumber) {
                                var n = validateNumberAttribute(simplifyNumberInput(t.target.value), e.placeholder);
                                m(e.id, n), e.sharedValue = n, e.isValueShared = !0
                            } else {
                                var r = validateTextAttribute(t.target.value, e.placeholder);
                                m(e.id, r), e.sharedValue = r, e.isValueShared = !0
                            }
                            switch (e.subtype) {
                                case 1:
                                    m(e.id, Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(e.sharedValue));
                                    break;
                                case 2:
                                    m(e.id, Math.min(Math.max(3, e.sharedValue), 1e3));
                                    break;
                                case 3:
                                    m(e.id, Math.max(0, Math.min(1, e.sharedValue)));
                                    break;
                                case 4:
                                    m(e.id, Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e.sharedValue));
                                    break;
                                case 5:
                                    m(e.id, Math.min(Math.max(0, e.sharedValue), _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.MAX_RADIANT))
                            }
                            updateSelectedObjects()
                        }
                } - 1 != e.type && setTooltip(w, e.description)
            }, E = 0, O = c; E < O.length; E++) {
                var w, T, S;
                b()
            }
            var A = addChild(selectionMenu, "div"),
                M = addChild(selectionMenu, "div");
            A.style.textAlign = "right", M.style.textAlign = "right";
            var x = addChild(A, "button");
            x.innerHTML = "Move Forward", x.classList.add("tank-editor-button");
            var k = addChild(A, "button");
            k.innerHTML = "Move Backward", k.classList.add("tank-editor-button");
            var C = addChild(M, "button");
            C.innerHTML = "Delete ".concat(l), C.classList.add("tank-editor-button");
            var R = addChild(M, "button");
            R.innerHTML = "Duplicate ".concat(l), R.classList.add("tank-editor-button"), x.onclick = function () {
                moveForwardSelectedObjects()
            }, k.onclick = function () {
                moveBackwardSelectedObjects()
            }, C.onclick = function () {
                deleteSelectedObjects()
            }, R.onclick = function () {
                duplicateSelectedObjects()
            }
        }
    }

    function getObjectArray(e) {
        return 0 == e.stack.length ? {
            barrel: currentWeapon.barrels,
            gadget: currentBody.gadgets,
            layer: currentBody.layers
        }[e.type] : function e(t, n, r) {
            if (1 == n.length) {
                var a = t[n[0]];
                return a && 3 == a.type && a.tank ? {
                    barrel: a.tank.barrels,
                    gadget: a.tank.gadgets,
                    layer: a.tank.layers
                }[r.type] : void 0
            }
            var o = t[n.shift()];
            return o && 3 == o.type && o.tank ? e(o.tank.gadgets, n, r) : void 0
        }(currentBody.gadgets, _toConsumableArray(e.stack), e)
    }

    function moveForwardSelectedObjects() {
        var e, t = selectedObjects.sort((function (e, t) {
            return t.index - e.index
        })).sort((function (e, t) {
            return t.stack.length - e.stack.length
        })),
            n = _createForOfIteratorHelper(t);
        try {
            for (n.s(); !(e = n.n()).done;) {
                var r = e.value,
                    a = getObjectArray(r);
                if (r.index < a.length - 1) {
                    var o = a[r.index + 1];
                    a[r.index + 1] = a[r.index], a[r.index] = o;
                    var i, s = _createForOfIteratorHelper(t);
                    try {
                        for (s.s(); !(i = s.n()).done;) {
                            var l = i.value;
                            r.type == l.type && l.index == r.index + 1 && Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(l.stack, r.stack) && l.index--
                        }
                    } catch (e) {
                        s.e(e)
                    } finally {
                        s.f()
                    }
                    r.index++
                }
            }
        } catch (e) {
            n.e(e)
        } finally {
            n.f()
        }
        updateSelectedObjects(), updateSelectedObject()
    }

    function moveBackwardSelectedObjects() {
        var e, t = selectedObjects.sort((function (e, t) {
            return e.index - t.index
        })).sort((function (e, t) {
            return t.stack.length - e.stack.length
        })),
            n = _createForOfIteratorHelper(t);
        try {
            for (n.s(); !(e = n.n()).done;) {
                var r = e.value,
                    a = getObjectArray(r);
                if (r.index > 0) {
                    var o = a[r.index - 1];
                    a[r.index - 1] = a[r.index], a[r.index] = o;
                    var i, s = _createForOfIteratorHelper(t);
                    try {
                        for (s.s(); !(i = s.n()).done;) {
                            var l = i.value;
                            r.type == l.type && l.index == r.index - 1 && Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(l.stack, r.stack) && l.index++
                        }
                    } catch (e) {
                        s.e(e)
                    } finally {
                        s.f()
                    }
                    r.index--
                }
            }
        } catch (e) {
            n.e(e)
        } finally {
            n.f()
        }
        updateSelectedObjects(), updateSelectedObject()
    }

    function deleteSelectedObjects() {
        var e, t = _createForOfIteratorHelper(selectedObjects.sort((function (e, t) {
            return t.index - e.index
        })).sort((function (e, t) {
            return t.stack.length - e.stack.length
        })));
        try {
            for (t.s(); !(e = t.n()).done;) {
                var n = e.value;
                getObjectArray(n).splice(n.index, 1)
            }
        } catch (e) {
            t.e(e)
        } finally {
            t.f()
        }
        updateSelectedObjects(!1), deselectAllObjects()
    }

    function duplicateSelectedObjects() {
        for (var e = selectedObjects.sort((function (e, t) {
            return e.index - t.index
        })).sort((function (e, t) {
            return t.stack.length - e.stack.length
        })), t = 0; t < e.length; t++) {
            var n = e[t],
                r = getObjectArray(n);
            r.splice(n.index, 0, Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(r[n.index]));
            for (var a = t + 1; a < e.length; a++) e[a].type == n.type && e[a].index > n.index && Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(e[a].stack, n.stack) && e[a].index++
        }
        updateSelectedObjects(), updateSelectedObject()
    }

    function validateTextAttribute(e, t) {
        return null == e || "" === e ? t : e
    }
    var allowedCommands = ["(", ")", /^[\d\.]+$/, "*", "/", "+", "-", "sin", "cos", "degToRad", "radToDeg"],
        replacements = [
            ["radtodeg", "radToDeg"],
            ["rad2deg", "radToDeg"],
            ["radianstodegrees", "radToDeg"],
            ["degtorad", "degToRad"],
            ["deg2rad", "degToRad"],
            ["degreestoradians", "degToRad"]
        ];

    function checkCommand(e) {
        return allowedCommands.some((function (t) {
            return t instanceof RegExp ? t.test(e) : t == e
        }))
    }

    function checkAllowedCommands(e) {
        try {
            e = e.replace(/([()/*+-])/g, " $1 ").toLowerCase();
            for (var t = 0; t < replacements.length; t++) e = e.replaceAll(replacements[t][0], replacements[t][1]);
            return 0 == e.split(" ").filter((function (e) {
                return e
            })).filter((function (e) {
                return !checkCommand(e)
            })).length
        } catch (e) {
            return !1
        }
    }

    function simplifyNumberInput(input) {
        try {
            input = input.toLowerCase();
            for (var i = 0; i < replacements.length; i++) input = input.replaceAll(replacements[i][0], replacements[i][1]);
            return eval(input)
        } catch (e) {
            return null
        }
    }

    function sin(e) {
        return Math.sin(e)
    }

    function cos(e) {
        return Math.cos(e)
    }

    function radToDeg(e) {
        return Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(e)
    }

    function degToRad(e) {
        return Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(e)
    }

    function validateNumberAttribute(e, t) {
        return Number.isNaN(+e) ? t : +e
    }

    function validateAttribute(e, t) {
        return null == e ? t : e
    }

    function updateSelectedObjects() {
        var e, t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            n = !1,
            r = !1,
            a = _createForOfIteratorHelper(selectedObjects);
        try {
            for (a.s(); !(e = a.n()).done;) {
                var o = e.value;
                if ("barrel" == o.type && 0 == o.stack.length ? n = !0 : r = !0, n && r) break
            }
        } catch (e) {
            a.e(e)
        } finally {
            a.f()
        }
        n && (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate(!1, t)), r && (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate(!1, t)), (n || r) && createSaveState()
    }
    var barrelButtons = [],
        gadgetButtons = [],
        layerButtons = [];

    function getBarrelName(e) {
        var t;
        return (null === (t = barrelTypes.find((function (t) {
            return t.value == e.type
        }))) || void 0 === t ? void 0 : t.name) || "Invalid barrel (wrong type?)"
    }

    function getGadgetName(e) {
        if (2 == e.type) {
            var t = auraTypes.find((function (t) {
                return t.value == e.subtype
            }));
            return ((null == t ? void 0 : t.name) || "Invalid (wrong subtype?)") + " Aura"
        }
        var n;
        return (null === (n = gadgetTypes.find((function (t) {
            return t.value == e.type
        }))) || void 0 === n ? void 0 : n.name) || "Invalid gadget (wrong type?)"
    }

    function getLayerName(e) {
        return "".concat(Math.abs(e.sides), " ").concat(e.sides < 0 ? "point star" : "sided", " layer")
    }
    var defaultBarrel = {
        type: 0,
        rot: 0,
        offset: 0,
        width: .5,
        length: 1,
        damage: 1,
        reload: 1,
        delay: 0,
        speed: 1,
        distance: 0,
        penetration: 1
    },
        defaultGadget = {
            type: 0,
            offsetX: 0,
            offsetY: 0,
            length: .5,
            width: .25,
            reload: 1,
            damage: .5,
            speed: 1,
            baseRot: 0,
            idleBehavior: 0,
            rotationSpeed: 1,
            penetration: 1,
            minDistance: 15,
            maxDistance: 25
        },
        defaultLayer = {
            rot: 0,
            size: .5,
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            offsetX: 0,
            offsetY: 0
        };

    function weaponUpdate() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        e && createSaveState(), barrelsText.innerHTML = "Barrels (".concat(currentWeapon.barrels.length, ")"), removeAllChildNodes(barrelsContent), barrelButtons = [];
        for (var n = function (e) {
            var t = currentWeapon.barrels[e],
                n = addChild(barrelsContent, "button", "tank-editor-collapsible-element");
            n.innerText = getBarrelName(t), n.onclick = function (t) {
                var n = _toConsumableArray(selectedObjects).reverse().find((function (e) {
                    return "barrel" == e.type && 0 == e.stack.length
                }));
                if (n && n.index != e && t.shiftKey) {
                    var r, a = _createForOfIteratorHelper(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.getNumbersBetween)(n.index, e));
                    try {
                        var o = function () {
                            var e = r.value;
                            selectedObjects.some((function (t) {
                                return "barrel" == t.type && t.index == e
                            })) || selectedObjects.push({
                                type: "barrel",
                                index: e,
                                stack: []
                            })
                        };
                        for (a.s(); !(r = a.n()).done;) o()
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                    updateSelectedObject()
                } else updateSelectedObject("barrel", e, t.ctrlKey || t.metaKey || t.shiftKey)
            }, barrelButtons.push({
                button: n
            })
        }, r = 0; r < currentWeapon.barrels.length; r++) n(r);
        var a = addChild(barrelsContent, "button", "tank-editor-collapsible-element");
        a.innerHTML = "+", a.onclick = function () {
            currentWeapon.barrels.push(Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(defaultBarrel)), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()
        }, weaponCameraSizeMultiplierInput.value = currentWeapon.cameraSizeMultiplier, weaponMaxDronesInput.value = currentWeapon.maxDrones, weaponNameInput.value = currentWeapon.name, t && updateSelectedObject()
    }
    var collapsedSections = {};

    function bodyUpdate() {
        var e, t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        t && createSaveState(), gadgetsText.innerHTML = "Gadgets (".concat(currentBody.gadgets.length, ")"), removeAllChildNodes(gadgetsContent), gadgetButtons = [];
        for (var r = function e(t, n, r, a) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
            if (3 == n.type && n.tank) {
                var i, s = {},
                    l = "b" + a.join(""),
                    u = addChild(t, "button", ["small", "tank-editor-collapsible"]);
                u.innerText = "Barrels (".concat(n.tank.barrels.length, ")"), u.style.marginLeft = "".concat(3 * o - 1, "vmin"), collapsedSections[l] || u.classList.add("active");
                var c = addChild(t, "div", "tank-editor-collapsible-content");
                c.style.display = collapsedSections[l] ? "none" : "flex", u.onclick = function () {
                    u.classList.toggle("active"), collapsedSections[l] = !collapsedSections[l], "flex" === c.style.display ? c.style.display = "none" : c.style.display = "flex"
                }, s.barrels = [];
                for (var d = function (e) {
                    var t = n.tank.barrels[e],
                        r = addChild(c, "button", ["small", "tank-editor-collapsible-element"]);
                    r.style.marginLeft = "".concat(3 * o, "vmin"), r.innerText = getBarrelName(t), s.barrels.push({
                        button: r
                    }), r.onclick = function (t) {
                        var n = _toConsumableArray(selectedObjects).reverse().find((function (e) {
                            return "barrel" == e.type && Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(e.stack, a)
                        }));
                        if (n && n.index != e && t.shiftKey) {
                            var r, o = _createForOfIteratorHelper(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.getNumbersBetween)(n.index, e));
                            try {
                                var i = function () {
                                    var e = r.value;
                                    selectedObjects.some((function (t) {
                                        return "barrel" == t.type && t.index == e
                                    })) || selectedObjects.push({
                                        type: "barrel",
                                        index: e,
                                        stack: a
                                    })
                                };
                                for (o.s(); !(r = o.n()).done;) i()
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                            updateSelectedObject()
                        } else updateSelectedObject("barrel", e, t.ctrlKey || t.metaKey || t.shiftKey, a)
                    }
                }, f = 0; f < n.tank.barrels.length; f++) d(f);
                (i = addChild(c, "button", ["small", "tank-editor-collapsible-element"])).innerHTML = "+", i.style.marginLeft = "".concat(3 * o, "vmin"), i.onclick = function () {
                    getSelectedObject(r).tank.barrels.push(Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(defaultBarrel)), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
                };
                var h = "g" + a.join(""),
                    p = addChild(t, "button", ["small", "tank-editor-collapsible"]);
                p.innerText = "Gadgets (".concat(n.tank.gadgets.length, ")"), p.style.marginLeft = "".concat(3 * o - 1, "vmin"), collapsedSections[h] || p.classList.add("active");
                var _ = addChild(t, "div", "tank-editor-collapsible-content");
                _.style.display = collapsedSections[h] ? "none" : "flex", p.onclick = function () {
                    p.classList.toggle("active"), collapsedSections[h] = !collapsedSections[h], "flex" === _.style.display ? _.style.display = "none" : _.style.display = "flex"
                }, s.gadgets = [];
                for (var g = function (t) {
                    var r = n.tank.gadgets[t],
                        i = addChild(_, "button", ["small", "tank-editor-collapsible-element"]);
                    i.style.marginLeft = "".concat(3 * o, "vmin"), i.innerText = getGadgetName(r), s.gadgets.push({
                        button: i,
                        tank: e(_, r, {
                            index: t,
                            type: "gadget",
                            stack: a
                        }, a.concat([t]), o + 1)
                    }), i.onclick = function (e) {
                        var n = _toConsumableArray(selectedObjects).reverse().find((function (e) {
                            return "gadget" == e.type && Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(e.stack, a)
                        }));
                        if (n && n.index != t && e.shiftKey) {
                            var r, o = _createForOfIteratorHelper(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.getNumbersBetween)(n.index, t));
                            try {
                                var i = function () {
                                    var e = r.value;
                                    selectedObjects.some((function (t) {
                                        return "gadget" == t.type && t.index == e
                                    })) || selectedObjects.push({
                                        type: "gadget",
                                        index: e,
                                        stack: a
                                    })
                                };
                                for (o.s(); !(r = o.n()).done;) i()
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                            updateSelectedObject()
                        } else updateSelectedObject("gadget", t, e.ctrlKey || e.metaKey || e.shiftKey, a)
                    }
                }, v = 0; v < n.tank.gadgets.length; v++) g(v);
                (i = addChild(_, "button", ["small", "tank-editor-collapsible-element"])).innerHTML = "+", i.style.marginLeft = "".concat(3 * o, "vmin"), i.onclick = function () {
                    getSelectedObject(r).tank.gadgets.push(Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(defaultGadget)), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
                };
                var y = "l" + a.join(""),
                    m = addChild(t, "button", ["small", "tank-editor-collapsible"]);
                m.innerText = "Layers (".concat(n.tank.layers.length, ")"), m.style.marginLeft = "".concat(3 * o - 1, "vmin"), collapsedSections[y] || m.classList.add("active");
                var b = addChild(t, "div", "tank-editor-collapsible-content");
                b.style.display = collapsedSections[y] ? "none" : "flex", m.onclick = function () {
                    m.classList.toggle("active"), collapsedSections[y] = !collapsedSections[y], "flex" === b.style.display ? b.style.display = "none" : b.style.display = "flex"
                }, s.layers = [];
                for (var E = function (e) {
                    var t = n.tank.layers[e],
                        r = addChild(b, "button", ["small", "tank-editor-collapsible-element"]);
                    r.style.marginLeft = "".concat(3 * o, "vmin"), r.innerText = getLayerName(t), s.layers.push({
                        button: r
                    }), r.onclick = function (t) {
                        var n = _toConsumableArray(selectedObjects).reverse().find((function (e) {
                            return "layer" == e.type && Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(e.stack, a)
                        }));
                        if (n && n.index != e && t.shiftKey) {
                            var r, o = _createForOfIteratorHelper(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.getNumbersBetween)(n.index, e));
                            try {
                                var i = function () {
                                    var e = r.value;
                                    selectedObjects.some((function (t) {
                                        return "layer" == t.type && t.index == e
                                    })) || selectedObjects.push({
                                        type: "layer",
                                        index: e,
                                        stack: a
                                    })
                                };
                                for (o.s(); !(r = o.n()).done;) i()
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                            updateSelectedObject()
                        } else updateSelectedObject("layer", e, t.ctrlKey || t.metaKey || t.shiftKey, a)
                    }
                }, O = 0; O < n.tank.layers.length; O++) E(O);
                return (i = addChild(b, "button", ["small", "tank-editor-collapsible-element"])).innerHTML = "+", i.style.marginLeft = "".concat(3 * o, "vmin"), i.onclick = function () {
                    getSelectedObject(r).tank.layers.push(Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(defaultLayer)), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
                }, s
            }
        }, a = function (e) {
            var t = currentBody.gadgets[e],
                n = addChild(gadgetsContent, "button", "tank-editor-collapsible-element");
            n.innerText = getGadgetName(t), n.onclick = function (t) {
                var n = _toConsumableArray(selectedObjects).reverse().find((function (e) {
                    return "gadget" == e.type && 0 == e.stack.length
                }));
                if (n && n.index != e && t.shiftKey) {
                    var r, a = _createForOfIteratorHelper(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.getNumbersBetween)(n.index, e));
                    try {
                        var o = function () {
                            var e = r.value;
                            selectedObjects.some((function (t) {
                                return "gadget" == t.type && t.index == e
                            })) || selectedObjects.push({
                                type: "gadget",
                                index: e,
                                stack: []
                            })
                        };
                        for (a.s(); !(r = a.n()).done;) o()
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                    updateSelectedObject()
                } else updateSelectedObject("gadget", e, t.ctrlKey || t.metaKey || t.shiftKey)
            }, gadgetButtons.push({
                button: n,
                tank: r(gadgetsContent, t, {
                    index: e,
                    type: "gadget",
                    stack: []
                }, [e])
            })
        }, o = 0; o < currentBody.gadgets.length; o++) a(o);
        (e = addChild(gadgetsContent, "button")).classList.add("tank-editor-collapsible-element"), e.innerHTML = "+", e.onclick = function () {
            currentBody.gadgets.push(Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(defaultGadget)), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
        }, layersText.innerHTML = "Layers (".concat(currentBody.layers.length, ")"), removeAllChildNodes(layersContent), layerButtons = [];
        for (var i = function (e) {
            var t = currentBody.layers[e],
                n = addChild(layersContent, "button", "tank-editor-collapsible-element");
            n.innerText = getLayerName(t), n.onclick = function (t) {
                var n = _toConsumableArray(selectedObjects).reverse().find((function (e) {
                    return "layer" == e.type && 0 == e.stack.length
                }));
                if (n && n.index != e && t.shiftKey) {
                    var r, a = _createForOfIteratorHelper(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.getNumbersBetween)(n.index, e));
                    try {
                        var o = function () {
                            var e = r.value;
                            selectedObjects.some((function (t) {
                                return "layer" == t.type && t.index == e
                            })) || selectedObjects.push({
                                type: "layer",
                                index: e,
                                stack: []
                            })
                        };
                        for (a.s(); !(r = a.n()).done;) o()
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                    updateSelectedObject()
                } else updateSelectedObject("layer", e, t.ctrlKey || t.metaKey || t.shiftKey)
            }, layerButtons.push({
                button: n
            })
        }, s = 0; s < currentBody.layers.length; s++) i(s);
        (e = addChild(layersContent, "button")).classList.add("tank-editor-collapsible-element"), e.innerHTML = "+", e.onclick = function () {
            currentBody.layers.push(Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(defaultLayer)), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
        }, bodyCameraSizeMultiplierInput.value = currentBody.cameraSizeMultiplier, bodyMaxDronesInput.value = currentBody.maxDrones, sidesInput.value = currentBody.sides, outerSidesInput.value = currentBody.outerSides, outerSizeInput.value = currentBody.outerSize, healthInput.value = currentBody.healthMultiplier, bodyDamageInput.value = currentBody.bodyDamageMultiplier, speedInput.value = currentBody.speedMultiplier, bodyNameInput.value = currentBody.name, levelInput.value = currentBody.level, tankTypeSelect.value = currentBody.type, updateTeamSelect(currentBody.team), updateVisualTeamSelect(validateAttribute(currentBody.visualTeam, void 0)), radiantInput.value = currentBody.radiant, tankNameInput.value = currentBody.overrideTankName, n && updateSelectedObject()
    }
    var saveStates = [];

    function createSaveState() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)([currentWeapon, currentBody, selectedObjects]);
        saveStates.push(t), e && (undidSaveStates = []), saveStates.length > _settings__WEBPACK_IMPORTED_MODULE_8__.g.maxSaveStates && saveStates.shift()
    }
    var undidSaveStates = [];

    function undo() {
        if (saveStates.length > 1) {
            undidSaveStates.push(saveStates.pop());
            var e = Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(saveStates[saveStates.length - 1]);
            currentWeapon = e[0], currentBody = e[1], selectedObjects = e[2], tankUpdate(!1), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)()
        } else console.log("Can't undo")
    }

    function redo() {
        if (undidSaveStates.length > 0) {
            var e = Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(undidSaveStates.pop());
            currentWeapon = e[0], currentBody = e[1], selectedObjects = e[2], tankUpdate(!1), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), createSaveState(!1)
        } else console.log("Can't redo")
    }

    function selectAll() {
        deselectAllObjects();
        for (var e = 0; e < currentWeapon.barrels.length; e++) selectedObjects.push({
            type: "barrel",
            index: e,
            stack: []
        });
        for (var t = 0; t < currentBody.gadgets.length; t++) selectedObjects.push({
            type: "gadget",
            index: t,
            stack: []
        });
        for (var n = 0; n < currentBody.layers.length; n++) selectedObjects.push({
            type: "layer",
            index: n,
            stack: []
        });
        updateSelectedObject()
    }
    var importExportButton = document.getElementById("import-export-button"),
        importOrExport = document.getElementById("import-or-export"),
        importExportType = document.getElementById("import-export-type"),
        codeArea = document.getElementById("code-area"),
        loadWeaponUpgradeArea = document.getElementById("load-weapon-upgrade-area"),
        loadBodyUpgradeArea = document.getElementById("load-body-upgrade-area"),
        loadWeaponUpgradeButton = document.getElementById("load-weapon-upgrade"),
        loadBodyUpgradeButton = document.getElementById("load-body-upgrade");

    function importTank(e) {
        var t;
        try {
            if ((t = codeToObject(e)).error) return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Tank code invalid!", t.error)
        } catch (e) {
            return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Tank code invalid!", e)
        }
        if (t.type && "full" != t.type) Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Tank code invalid!", "Code is not a full tank code, it's a \n\t\t".concat({
            weapon: "weapon",
            body: "body",
            full: "full tank"
        }[t.type], ' code. Import as a "').concat({
            weapon: "Weapon Upgrade",
            body: "Body Upgrade",
            full: "Full Tank"
        }[t.type], ' instead of a "Full Tank".'));
        else {
            var n = t.version || 0;
            for (currentBody.gadgets = readGadgets(t.gadgets || []), currentBody.layers = readLayers(t.layers || []), currentBody.outerSize = t.outerSize || 0, currentBody.sides = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(t.sides || 0), currentBody.outerSides = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(t.outerSides || 0), currentBody.healthMultiplier = validateNumberAttribute(t.healthMultiplier, 1), currentBody.bodyDamageMultiplier = validateNumberAttribute(t.bodyDamageMultiplier, 1), currentBody.speedMultiplier = validateNumberAttribute(t.speedMultiplier, 1), currentBody.cameraSizeMultiplier = validateNumberAttribute(t.bodyCameraSizeMultiplier, 1), currentBody.maxDrones = validateNumberAttribute(t.maxBodyDrones, 3), currentBody.name = t.bodyUpgradeName || "", currentWeapon.barrels = readBarrels(t.barrels || []), currentWeapon.cameraSizeMultiplier = validateNumberAttribute(t.weaponCameraSizeMultiplier, 1), currentWeapon.maxDrones = validateNumberAttribute(t.maxWeaponDrones, 3), currentWeapon.name = t.weaponUpgradeName || "", currentBody.level = validateNumberAttribute(t.level, 1), currentBody.type = validateNumberAttribute(t.tankType, 0), currentBody.radiant = validateNumberAttribute(t.radiant, 0), currentBody.team = validateAttribute(t.team, 0), currentBody.visualTeam = validateAttribute(t.visualTeam, void 0), currentBody.overrideTankName = t.overrideTankName || "", i = n; i < _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION; i++) switch (i) {
                case 0:
                    for (var r = 0; r < currentWeapon.barrels.length; r++) {
                        var a = currentWeapon.barrels[r];
                        a.length = a.length * (3 == a.type || 4 == a.type || 5 == a.type ? 1.5 : 1)
                    }
                    break;
                case 1:
                    var o = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.minion && (s(n.minion.gadgets), o(n.minion.barrels))
                        }
                    };
                    (s = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            2 == n.type && (n.alpha = .3, n.rot = 0, n.rotationType = 2 == n.subtype ? 0 : 1, n.backSides = 2 == n.subtype ? n.sides : 0)
                        }
                    })(currentBody.gadgets), o(currentWeapon.barrels);
                    break;
                case 2:
                    o = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.minion && (s(n.minion.gadgets), o(n.minion.barrels))
                        }
                    };
                    (s = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            2 == n.type && (n.showParticles = 0)
                        }
                    })(currentBody.gadgets), o(currentWeapon.barrels);
                    break;
                case 3:
                    var s;
                    o = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.minion && (s(n.minion.gadgets), o(n.minion.barrels))
                        }
                    };
                    (s = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            2 == n.type && (n.affectBullets = 2, [3, 4].includes(n.subtype) && (n.ignoreMass = 0))
                        }
                    })(currentBody.gadgets), o(currentWeapon.barrels);
                    break;
                case 4:
                    o = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.minion && (l(n.minion.gadgets), o(n.minion.barrels))
                        }
                    };
                    (l = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            0 == n.type && (n.baseRot = 0, n.idleBehavior = 0, n.idleRotationSpeed = 1)
                        }
                    })(currentBody.gadgets), o(currentWeapon.barrels);
                    break;
                case 5:
                    var l;
                    o = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.minion && (l(n.minion.gadgets), o(n.minion.barrels))
                        }
                    };
                    (l = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            0 == n.type && (n.rotationSpeed = n.idleRotationSpeed, delete n.idleRotationSpeed)
                        }
                    })(currentBody.gadgets), o(currentWeapon.barrels)
            }
            Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate(), Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()
        }
    }

    function importBody(e) {
        var t;
        try {
            if ((t = codeToObject(e)).error) return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Body code invalid!", t.error)
        } catch (e) {
            return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Body code invalid!", e)
        }
        if (t.type && "body" != t.type) Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Body code invalid!", "Code is not a body code, it's a \n\t\t".concat({
            weapon: "weapon",
            body: "body",
            full: "full tank"
        }[t.type], ' code. Import as a "').concat({
            weapon: "Weapon Upgrade",
            body: "Body Upgrade",
            full: "Full Tank"
        }[t.type], ' instead of a "Body Upgrade".'));
        else {
            var n = t.version || 0;
            for (currentBody.gadgets = readGadgets(t.gadgets || []), currentBody.layers = readLayers(t.layers || []), currentBody.outerSize = t.outerSize || 0, currentBody.sides = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(t.sides || 0), currentBody.outerSides = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(t.outerSides || 0), currentBody.healthMultiplier = validateNumberAttribute(t.healthMultiplier, 1), currentBody.bodyDamageMultiplier = validateNumberAttribute(t.bodyDamageMultiplier, 1), currentBody.speedMultiplier = validateNumberAttribute(t.speedMultiplier, 1), currentBody.cameraSizeMultiplier = validateNumberAttribute(t.cameraSizeMultiplier, 1), currentBody.maxDrones = validateNumberAttribute(t.maxDrones, 3), currentBody.name = t.name || "", i = n; i < _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION; i++) switch (i) {
                case 1:
                    (function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            2 == n.type && (n.alpha = .3, n.rot = 0, n.rotationType = 2 == n.subtype ? 0 : 1, n.backSides = 2 == n.subtype ? n.sides : 0)
                        }
                    })(currentBody.gadgets);
                    break;
                case 2:
                    (function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            2 == n.type && (n.showParticles = 0)
                        }
                    })(currentBody.gadgets);
                    break;
                case 3:
                    (function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            2 == n.type && (n.affectBullets = 2, [3, 4].includes(n.subtype) && (n.ignoreMass = 0))
                        }
                    })(currentBody.gadgets);
                    break;
                case 4:
                    (function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            0 == n.type && (n.baseRot = 0, n.idleBehavior = 0, n.idleRotationSpeed = 1)
                        }
                    })(currentBody.gadgets);
                    break;
                case 5:
                    (function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            0 == n.type && (n.rotationSpeed = n.idleRotationSpeed, delete n.idleRotationSpeed)
                        }
                    })(currentBody.gadgets)
            }
            Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(), bodyUpdate()
        }
    }

    function importWeapon(e) {
        var t;
        try {
            if ((t = codeToObject(e)).error) return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Weapon code invalid!", t.error)
        } catch (e) {
            return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Weapon code invalid!", e)
        }
        if (t.type && "weapon" != t.type) Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)("Weapon code invalid!", "Code is not a weapon code, it's a \n\t\t".concat({
            weapon: "weapon",
            body: "body",
            full: "full tank"
        }[t.type], ' code. Import as a "').concat({
            weapon: "Weapon Upgrade",
            body: "Body Upgrade",
            full: "Full Tank"
        }[t.type], ' instead of a "Weapon Upgrade".'));
        else {
            var n = t.version || 0;
            for (currentWeapon.barrels = readBarrels(t.barrels || []), currentWeapon.cameraSizeMultiplier = validateNumberAttribute(t.cameraSizeMultiplier, 1), currentWeapon.maxDrones = validateNumberAttribute(t.maxDrones, 3), currentWeapon.name = t.name || "", i = n; i < _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION; i++) switch (i) {
                case 0:
                    for (var r = 0; r < currentWeapon.barrels.length; r++) {
                        var a = currentWeapon.barrels[r];
                        a.length = a.length * (3 == a.type || 4 == a.type || 5 == a.type ? 1.5 : 1)
                    }
                    break;
                case 1:
                    var o = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            2 == n.type && (n.alpha = .3, n.rot = 0, n.rotationType = 2 == n.subtype ? 0 : 1, n.backSides = 2 == n.subtype ? n.sides : 0)
                        }
                    };
                    (l = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.minion && (o(n.minion.gadgets), l(n.minion.barrels))
                        }
                    })(currentWeapon.barrels);
                    break;
                case 2:
                    o = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            2 == n.type && (n.showParticles = 0)
                        }
                    };
                    (l = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.minion && (o(n.minion.gadgets), l(n.minion.barrels))
                        }
                    })(currentWeapon.barrels);
                    break;
                case 3:
                    o = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            2 == n.type && (n.affectBullets = 2, [3, 4].includes(n.subtype) && (n.ignoreMass = 0))
                        }
                    };
                    (l = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.minion && (o(n.minion.gadgets), l(n.minion.barrels))
                        }
                    })(currentWeapon.barrels);
                    break;
                case 4:
                    var s = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            0 == n.type && (n.baseRot = 0, n.idleBehavior = 0, n.idleRotationSpeed = 1)
                        }
                    };
                    (l = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.minion && (s(n.minion.gadgets), l(n.minion.barrels))
                        }
                    })(currentWeapon.barrels);
                    break;
                case 5:
                    var l;
                    s = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            0 == n.type && (n.rotationSpeed = n.idleRotationSpeed, delete n.idleRotationSpeed)
                        }
                    };
                    (l = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.minion && (s(n.minion.gadgets), l(n.minion.barrels))
                        }
                    })(currentWeapon.barrels)
            }
            Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(), weaponUpdate()
        }
    }

    function exportTank() {
        codeArea.value = objectToCode({
            type: "full",
            version: _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION,
            gadgets: clearGadgets(currentBody.gadgets || []),
            layers: clearLayers(currentBody.layers || []),
            sides: currentBody.sides || 0,
            outerSides: currentBody.outerSides || 0,
            outerSize: currentBody.outerSize || 0,
            healthMultiplier: currentBody.healthMultiplier,
            bodyDamageMultiplier: currentBody.bodyDamageMultiplier,
            speedMultiplier: currentBody.speedMultiplier,
            bodyCameraSizeMultiplier: currentBody.cameraSizeMultiplier,
            maxBodyDrones: currentBody.maxDrones,
            bodyUpgradeName: currentBody.name,
            barrels: clearBarrels(currentWeapon.barrels || []),
            weaponCameraSizeMultiplier: currentWeapon.cameraSizeMultiplier,
            maxWeaponDrones: currentWeapon.maxDrones,
            weaponUpgradeName: currentWeapon.name,
            level: currentBody.level,
            tankType: currentBody.type,
            radiant: currentBody.radiant,
            team: currentBody.team,
            visualTeam: currentBody.visualTeam,
            overrideTankName: currentBody.overrideTankName || ""
        })
    }

    function exportBody() {
        codeArea.value = objectToCode({
            type: "body",
            version: _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION,
            gadgets: clearGadgets(currentBody.gadgets || []),
            layers: clearLayers(currentBody.layers || []),
            sides: currentBody.sides,
            outerSides: currentBody.outerSides,
            outerSize: currentBody.outerSize,
            healthMultiplier: currentBody.healthMultiplier,
            bodyDamageMultiplier: currentBody.bodyDamageMultiplier,
            speedMultiplier: currentBody.speedMultiplier,
            maxDrones: currentBody.maxDrones,
            cameraSizeMultiplier: currentBody.cameraSizeMultiplier,
            name: currentBody.name
        })
    }

    function exportWeapon() {
        codeArea.value = objectToCode({
            type: "weapon",
            version: _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION,
            barrels: clearBarrels(currentWeapon.barrels || []),
            cameraSizeMultiplier: currentWeapon.cameraSizeMultiplier,
            maxDrones: currentWeapon.maxDrones,
            name: currentWeapon.name
        })
    }

    function compress(e) {
        return Object(base64_js__WEBPACK_IMPORTED_MODULE_9__.fromByteArray)(Object(pako__WEBPACK_IMPORTED_MODULE_10__.a)(e))
    }

    function decompress(e) {
        return Object(pako__WEBPACK_IMPORTED_MODULE_10__.b)(Object(base64_js__WEBPACK_IMPORTED_MODULE_9__.toByteArray)(e), {
            to: "string"
        })
    }

    function codeToObject(e) {
        var t;
        try {
            t = JSON.parse(e)
        } catch (n) {
            try {
                t = JSON.parse(decompress(e.trim()))
            } catch (n) {
                try {
                    t = JSON.parse(decompress(decompress(e.trim())))
                } catch (e) {
                    return {
                        error: "Invalid Code"
                    }
                }
                return t || {
                    error: "Invalid Code"
                }
            }
            return t || {
                error: "Invalid Code"
            }
        }
        return t
    }

    function objectToCode(e) {
        var t = JSON.stringify(e);
        if (_settings__WEBPACK_IMPORTED_MODULE_8__.g.compressCodes) {
            var n = compress(t),
                r = compress(n);
            t = n.length < r.length ? n : r
        }
        return t
    }

    function receiveTank(e) {
        currentWeapon.barrels = readBarrels(clearBarrels(e.weapon.barrels)), currentWeapon.cameraSizeMultiplier = e.weapon.cameraSizeMultiplier, currentWeapon.maxDrones = e.weapon.maxDrones, currentWeapon.name = e.weapon.name, currentBody.gadgets = readGadgets(clearGadgets(e.body.gadgets)), currentBody.layers = readLayers(clearLayers(e.body.layers)), currentBody.sides = e.body.sides, currentBody.outerSides = e.body.outerSides, currentBody.outerSize = e.body.outerSize, currentBody.healthMultiplier = e.body.healthMultiplier, currentBody.bodyDamageMultiplier = e.body.bodyDamageMultiplier, currentBody.speedMultiplier = e.body.speedMultiplier, currentBody.cameraSizeMultiplier = e.body.cameraSizeMultiplier, currentBody.maxDrones = e.body.maxDrones, currentBody.name = e.body.name, currentBody.type = e.body.type, currentBody.level = e.body.level, currentBody.radiant = e.body.radiant, currentBody.team = e.body.team, currentBody.visualTeam = e.body.visualTeam, currentBody.overrideTankName = e.body.overrideTankName, tankUpdate()
    }

    function clearLayers(e) {
        var t = [];
        return e.forEach((function (e) {
            var n = {
                offsetX: 0,
                offsetY: 0,
                rot: 0
            };
            Object.keys(e).forEach((function (t) {
                switch (t) {
                    case "selected":
                        break;
                    case "rot":
                        n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round)(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(e[t]), _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING);
                        break;
                    default:
                        n[t] = e[t]
                }
            })), t.push(n)
        })), t
    }

    function clearBarrels(e) {
        var t = [];
        return e.forEach((function (e) {
            var n = {};
            Object.keys(e).forEach((function (t) {
                switch (t) {
                    case "fireCooldown":
                    case "animTime":
                    case "selected":
                    case "shootingTime":
                        break;
                    case "rot":
                        n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round)(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(e[t]), _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING);
                        break;
                    case "minion":
                        n[t] = {
                            sides: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t].sides || 0),
                            outerSides: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t].outerSides || 0),
                            outerSize: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t].outerSize || 0),
                            maxWeaponDrones: e[t].maxWeaponDrones || 0,
                            maxBodyDrones: e[t].maxBodyDrones || 0,
                            barrels: clearBarrels(e[t].barrels),
                            gadgets: clearGadgets(e[t].gadgets),
                            layers: clearLayers(e[t].layers || [])
                        };
                        break;
                    default:
                        n[t] = e[t]
                }
            })), t.push(n)
        })), t
    }

    function clearGadgets(e) {
        var t = [];
        return e.forEach((function (e) {
            var n = {};
            Object.keys(e).forEach((function (t) {
                switch (t) {
                    case "fireCooldown":
                    case "targetCheckTimer":
                    case "animTime":
                    case "target":
                    case "selected":
                        break;
                    case "sides":
                    case "outerSides":
                    case "backSides":
                        n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t]);
                        break;
                    case "baseRot":
                        n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round)(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(e[t]), _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING);
                        break;
                    case "rot":
                        0 != e.type && 3 != e.type && (n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round)(Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees)(e[t]), _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING));
                        break;
                    default:
                        n[t] = e[t]
                }
            })), t.push(n)
        })), t
    }

    function readLayers(e) {
        var t = [];
        return e.forEach((function (e) {
            var n = {
                offsetX: 0,
                offsetY: 0,
                rot: 0
            };
            Object.keys(e).forEach((function (t) {
                switch (t) {
                    case "rot":
                        n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(e[t]);
                        break;
                    default:
                        n[t] = e[t]
                }
            })), t.push(n)
        })), t
    }

    function readBarrels(e) {
        var t = [];
        return e.forEach((function (e) {
            var n = {};
            Object.keys(e).forEach((function (t) {
                switch (t) {
                    case "rot":
                        n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(e[t]);
                        break;
                    case "minion":
                        n[t] = {
                            sides: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t].sides || 0),
                            outerSides: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t].outerSides || 0),
                            outerSize: Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t].outerSize || 0),
                            maxWeaponDrones: e[t].maxWeaponDrones || 0,
                            maxBodyDrones: e[t].maxBodyDrones || 0,
                            barrels: readBarrels(e[t].barrels),
                            gadgets: readGadgets(e[t].gadgets),
                            layers: readLayers(e[t].layers || [])
                        };
                        break;
                    default:
                        n[t] = e[t]
                }
            })), t.push(n)
        })), t
    }

    function readGadgets(e) {
        var t = [];
        return e.forEach((function (e) {
            var n = {};
            Object.keys(e).forEach((function (t) {
                switch (t) {
                    case "rot":
                    case "baseRot":
                        n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians)(e[t]);
                        break;
                    case "sides":
                    case "outerSides":
                    case "backSides":
                        n[t] = Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides)(e[t]);
                        break;
                    default:
                        n[t] = e[t]
                }
            })), t.push(n)
        })), t
    }

    function removeAllChildNodes(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function addChild(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "div",
            n = arguments.length > 2 ? arguments[2] : void 0;
        "string" == typeof n && (n = [n]);
        var r = document.createElement(t);
        return e.appendChild(r), n && n.forEach((function (e) {
            r.classList.add(e)
        })), r
    }

    function setTooltip(e, t) {
        t ? e.setAttribute("data-tooltip", t) : e.removeAttribute("data-tooltip")
    }
    loadWeaponUpgradeButton.onclick = function () {
        var e = loadWeaponUpgradeArea.value.trim().toLowerCase();
        loadWeaponUpgradeArea.value = "", 0 != e.length && Object(_networking__WEBPACK_IMPORTED_MODULE_6__.loadWeaponUpgrade)(e)
    }, loadBodyUpgradeButton.onclick = function () {
        var e = loadBodyUpgradeArea.value.trim().toLowerCase();
        loadBodyUpgradeArea.value = "", 0 != e.length && Object(_networking__WEBPACK_IMPORTED_MODULE_6__.loadBodyUpgrade)(e)
    }, loadWeaponUpgradeArea.addEventListener("keydown", (function (e) {
        e.keyCode == _settings__WEBPACK_IMPORTED_MODULE_8__.c.enter && (loadWeaponUpgradeButton.click(), loadWeaponUpgradeArea.blur())
    })), loadBodyUpgradeArea.addEventListener("keydown", (function (e) {
        e.keyCode == _settings__WEBPACK_IMPORTED_MODULE_8__.c.enter && (loadBodyUpgradeButton.click(), loadBodyUpgradeArea.blur())
    })), importExportButton.onclick = function () {
        switch (importOrExport.selectedIndex) {
            case 0:
                switch (importExportType.selectedIndex) {
                    case 0:
                        importTank(codeArea.value);
                        break;
                    case 1:
                        importWeapon(codeArea.value);
                        break;
                    case 2:
                        importBody(codeArea.value)
                }
                break;
            case 1:
                switch (importExportType.selectedIndex) {
                    case 0:
                        exportTank();
                        break;
                    case 1:
                        exportWeapon();
                        break;
                    case 2:
                        exportBody()
                }
        }
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "chatInput", (function () {
        return T
    })), n.d(t, "isMobile", (function () {
        return S
    })), n.d(t, "servers", (function () {
        return A
    })), n.d(t, "gamemodes", (function () {
        return M
    })), n.d(t, "gamemodeRegions", (function () {
        return x
    })), n.d(t, "regions", (function () {
        return k
    })), n.d(t, "areMoreGamemodes", (function () {
        return C
    })), n.d(t, "areMoreRegions", (function () {
        return R
    })), n.d(t, "selectedServerIndex", (function () {
        return I
    })), n.d(t, "selectedGamemodeIndex", (function () {
        return L
    })), n.d(t, "selectedRegionIndex", (function () {
        return D
    })), n.d(t, "setSelectedServerIndex", (function () {
        return P
    })), n.d(t, "setPopupOpen", (function () {
        return W
    })), n.d(t, "formLoading", (function () {
        return X
    })), n.d(t, "formError", (function () {
        return q
    })), n.d(t, "mainMenuState", (function () {
        return me
    })), n.d(t, "onConnect", (function () {
        return we
    })), n.d(t, "onHubConnect", (function () {
        return Te
    })), n.d(t, "fullyDisconnected", (function () {
        return Se
    })), n.d(t, "onFullDisconnect", (function () {
        return Ae
    })), n.d(t, "onDisconnect", (function () {
        return Me
    })), n.d(t, "receiveServers", (function () {
        return xe
    })), n.d(t, "moveForwardInGamemodeList", (function () {
        return ke
    })), n.d(t, "moveBackwardInGamemodeList", (function () {
        return Ce
    })), n.d(t, "moveForwardInRegionList", (function () {
        return Re
    })), n.d(t, "moveBackwardInRegionList", (function () {
        return Ie
    })), n.d(t, "findServer", (function () {
        return Le
    })), n.d(t, "setRegion", (function () {
        return Pe
    })), n.d(t, "setGamemode", (function () {
        return Be
    })), n.d(t, "updateSelectedServer", (function () {
        return Ne
    })), n.d(t, "getTrueGamemodeColor", (function () {
        return je
    })), n.d(t, "getGamemodeName", (function () {
        return Ue
    })), n.d(t, "startsWithVowel", (function () {
        return qe
    })), n.d(t, "escapeHTML", (function () {
        return Ze
    })), n.d(t, "onDeath", (function () {
        return Je
    })), n.d(t, "updateFullServerList", (function () {
        return Qe
    })), n.d(t, "setCanvasScale", (function () {
        return et
    })), n.d(t, "setCookie", (function () {
        return tt
    })), n.d(t, "getCookie", (function () {
        return nt
    })), n.d(t, "eraseCookie", (function () {
        return rt
    })), n.d(t, "roundWithEnding", (function () {
        return at
    }));
    var r = n(6),
        a = n(7),
        o = n(9),
        i = (n(36), n(11)),
        s = n(0),
        l = n.n(s),
        u = (n(56), n(57), n(58), n(59), n(60), n(1)),
        c = [];

    function d() {
        return new Promise((function (e) {
            fetch("/changelog.txt").then((function (e) {
                return e.text()
            })).then((function (t) {
                f = t.replace(/\r?\n/g, "\r\n"),
                    function () {
                        for (var e = "", t = ("CHANGELOG - " + (c = f.split("\n\r\n"))[0]).split("\n"), n = 0; n < t.length; n++) t[n].startsWith("    ") || (e += "" == e ? t[n] : "<br />" + t[n]);
                        var r = document.getElementById("changelog");
                        r.childNodes[1].innerHTML = e.replace(/\n/g, "<br />"), r.classList.remove("hide");
                        var a = document.getElementById("subtitle");
                        a.textContent = c[0].split("-", 1)[0].trim(), a.classList.remove("hide"), e = "";
                        for (var o = 0; o < c.length; o++) {
                            "" != e && (e += "<br /><br /><hr />");
                            for (var i = c[o].split("\n"), s = 0; s < i.length; s++) {
                                var l = 0,
                                    u = "";
                                for (l = 0; i[s].startsWith("    ", 4 * l); l++) u += "&emsp;&emsp;";
                                0 == s ? e += "<h3>" : "" != e && 1 != s && (e += "<br />"), e += u + i[s], 0 == s && (e += "</h3>")
                            }
                        }
                        document.getElementById("full-changelog").childNodes[1].childNodes[5].innerHTML = e.replace(/\n/g, "<br />")
                    }(), e()
            }))
        }))
    }
    var f = "",
        h = n(3),
        p = n(12),
        _ = [{
            id: "scenexe-io_970x250",
            minWidth: 1404,
            minHeight: 1040,
            deathScreen: !1
        }, {
            id: "scenexe-io_300x600",
            minWidth: 1877.2,
            minHeight: 910,
            deathScreen: !0
        }];

    function g() {
        window.usingAdBlocker = !1, fetch("https://api.adinplay.com").catch((function (e) {
            window.usingAdBlocker = !0
        })).finally((function () {
            window.usingAdBlocker && (console.log("Ad blocker detected."), nt(s.COOKIES.TUTORIAL.AD_BLOCKER) || u.I || (Object(u.j)("Please disable your ad blocker", "Ads support the game and allow it to keep updating and expanding."), tt(s.COOKIES.TUTORIAL.AD_BLOCKER, !0, 30))), gtag("event", s.ANALYTICS_EVENTS.AD_BLOCKER, {
                adBlocker: window.usingAdBlocker
            })
        }))
    }

    function v() {
        try {
            _.forEach((function (e) {
                aiptag.cmd.display.push((function () {
                    aipDisplayTag.display(e.id)
                }))
            }))
        } catch (e) {
            console.log("Error when refreshing ads:", e)
        }
    }

    function y() {
        try {
            _.forEach((function (e) {
                var t = document.getElementById(e.id);
                t.classList.remove("hide");
                var n = Math.min(window.innerWidth / e.minWidth, 1),
                    r = Math.min(window.innerHeight / e.minHeight, 1),
                    a = Math.min(n, r),
                    o = t.classList.contains("ad-bottom");
                t.classList.contains("ad-right");
                t.style.transform = "translate".concat(o ? "X" : "Y", "(-50%) scale(").concat(a, ")"), e.deathScreen || 1 != me || t.classList.add("hide")
            }))
        } catch (e) {
            console.log("Error when updating ads:", e)
        }
    }
    window.addEventListener("resize", Object(p.debounce)(40, (function () {
        y()
    })));
    var m = n(2),
        b = n(15);

    function E(e, t, n, r, a, o, i) {
        try {
            var s = e[o](i),
                l = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(l) : Promise.resolve(l).then(r, a)
    }

    function O(e) {
        return function () {
            var t = this,
                n = arguments;
            return new Promise((function (r, a) {
                var o = e.apply(t, n);

                function i(e) {
                    E(o, r, a, i, s, "next", e)
                }

                function s(e) {
                    E(o, r, a, i, s, "throw", e)
                }
                i(void 0)
            }))
        }
    }
    var w = document.getElementById("chat"),
        T = document.getElementById("chat-input"),
        S = !1,
        A = [],
        M = [],
        x = {},
        k = [],
        C = !1,
        R = !1,
        I = 0,
        L = 0,
        D = 0;

    function P(e) {
        I = e
    }
    var B = [],
        N = [],
        j = -1,
        U = 0,
        z = !1;

    function W(e) {
        z = e
    }
    var K = document.getElementById("game-over-killer"),
        G = document.getElementById("game-over-stats"),
        Y = document.getElementById("game-over"),
        F = document.getElementById("overlay-canvas"),
        H = (document.getElementById("main-menu-button"), document.getElementById("full-changelog")),
        V = document.getElementById("button-settings"),
        X = document.getElementById("form-loading"),
        q = document.getElementById("form-error"),
        Z = document.getElementById("button-feedback"),
        J = document.getElementById("button-bugs"),
        $ = document.getElementById("submit"),
        Q = document.getElementById("cancel"),
        ee = document.getElementById("popup-input"),
        te = document.getElementById("popup-input-small"),
        ne = document.getElementById("popup"),
        re = document.getElementById("popup-title"),
        ae = document.getElementById("popup-subtitle"),
        oe = document.getElementById("connecting-text"),
        ie = document.getElementById("full-connecting-text"),
        se = document.getElementById("play-menu"),
        le = document.getElementById("respawn-text"),
        ue = document.getElementById("play-menu-wrapper"),
        ce = document.getElementById("main-menu"),
        de = document.getElementById("play-button"),
        fe = document.getElementById("background"),
        he = document.getElementById("ads"),
        pe = document.getElementById("username-input"),
        _e = document.getElementById("server-select-dropdown"),
        ge = document.getElementById("server-select-dropdown-visual"),
        ve = document.getElementById("server-select-dropdown-visual-shadow"),
        ye = document.getElementById("server-select-dropdown-visual-text");
    _e.addEventListener("change", (function () {
        I = _e.selectedIndex, Ne(!0, Object(m.generateSign)(), !1)
    }));
    var me = 2;

    function be() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e) {
            (S = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && (document.documentElement.webkitRequestFullScreen(), nt(s.COOKIES.TUTORIAL.MOBILE_UNSUPPORTED) || u.I || (Object(u.j)("Mobile support is experimental", "Some features may not work properly on this device."), tt(s.COOKIES.TUTORIAL.MOBILE_UNSUPPORTED, !0, 3)));
            var t = nt(s.COOKIES.USERNAME);
            t && (pe.value = t), window.addEventListener("keydown", $e)
        }
        Object(i.d)(), Array.from(document.getElementsByClassName("hud")).forEach((function (e) {
            e.classList.add("hidden")
        })), ce.classList.remove("hidden"), fe.classList.remove("hide"), he.classList.remove("hidden"), oe.classList.remove("hide"), se.classList.add("hide"), de.onclick = function () {
            ze()
        }, V.onclick = function () {
            Object(h.f)()
        }, v(), y(), document.getElementById("full-changelog-link").onclick = function () {
            return We(), !1
        }, document.getElementById("exit-changelog").onclick = function () {
            Ke()
        }, document.getElementById("apply-settings").onclick = function () {
            Object(h.a)(!0)
        }, document.getElementById("cancel-settings").onclick = function () {
            Object(h.a)()
        }, J.onclick = function () {
            Ge(1)
        }, Z.onclick = function () {
            Ge(2)
        }, Q.onclick = function () {
            Ge(0)
        }, $.onclick = function () {
            Ve()
        }, e && (Object(h.e)(JSON.parse(nt(s.COOKIES.SETTINGS)) || {}, JSON.parse(nt(s.COOKIES.KEYBINDS)) || {}), d(), g(), Object(a.render)())
    }
    be(!0);
    var Ee = !1,
        Oe = "";

    function we(e) {
        console.log("Connected to game server: ".concat(e)), Ee = !0, Oe = e, oe.classList.add("hide"), se.classList.remove("hide"), ie.classList.add("hide"), ue.classList.remove("hide"), r.respawningWithKey || (le.textContent = ""), S || pe.focus(), "" == r.key || r.respawningWithKey || (Ge(0), Ke(), Object(h.a)(), ze())
    }

    function Te(e) {
        console.log("Connected to hub server: ".concat(e))
    }
    var Se = !1;

    function Ae() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        Se = !0, Object(r.disconnectFromServer)(!1), document.getElementById("disconnect-text").textContent = e, document.getElementById("disconnect-modal").classList.remove("hide"), document.getElementById("reconnect-button").onclick = function () {
            window.location.reload()
        }
    }

    function Me() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        Ee = !1, Object(o.u)(), Object(a.stopRendering)(), Object(i.a)(), 1 != me && (me = 2), y(), r.key && (ie.textContent = "" == e ? "Connecting..." : e, ie.classList.remove("hide"), ue.classList.add("hide")), oe.textContent = "" == e ? "Connecting..." : e, oe.classList.remove("hide"), se.classList.add("hide"), Y.classList.add("hide"), F.classList.add("hide"), be(), r.respawningWithKey && (Y.classList.remove("hide"), F.classList.remove("hide"), ce.classList.add("hidden"), me = 1)
    }

    function xe(e) {
        if (0 == e[0].length) {
            if (2 != me) return void console.log("No servers found, ignoring because in-game.");
            Ae("No servers found. The game may be updating."), console.log("No servers found.")
        }
        A = e[0], M = [], x = {}, k = [];
        for (var t = "", n = 0; n < A.length; n++) {
            var r = A[n];
            M.includes(r.gamemode) || M.push(r.gamemode), k.includes(r.region) || k.push(r.region), x[r.gamemode] || (x[r.gamemode] = []), x[r.gamemode].includes(r.region) || x[r.gamemode].push(r.region), t += '<option style="background-color:'.concat(je(r.gamemode), '" value="').concat(n, '">').concat(Ue(r.gamemode), " - ").concat(r.region, " - ").concat(r.players, " player").concat(1 == r.players ? "" : "s", "</option>")
        }
        _e.innerHTML = t, C = M.length > 1;
        e[1], e[2];
        var a = e[3],
            o = e[4];
        console.log("Received Servers: ".concat(JSON.stringify(A)));
        for (var i = -1, l = 0; l < A.length; l++) {
            A[l].address == Oe && (i = l)
        }
        if (-1 == i) {
            var c = nt(s.COOKIES.GAMEMODE),
                d = nt(s.COOKIES.REGION),
                f = Le(c, d);
            if (A[f] && null != c && null != d) {
                var h = A[f];
                I = f, L = M.indexOf(h.gamemode), D = x[h.gamemode].indexOf(h.region)
            } else {
                for (var p = 1e200, _ = 0, g = 0; g < A.length; g++) {
                    var v = A[g];
                    v.players < p && (p = v.players, _ = g)
                }
                var y = A[_];
                I = _, y && (L = M.indexOf(y.gamemode), D = x[y.gamemode].indexOf(y.region))
            }
        } else I = i;
        Object(u.w)(a, o), Ne(!Ee)
    }

    function ke() {
        L == M.length - 1 ? L = 0 : L++, Ne(!0, 1)
    }

    function Ce() {
        0 == L ? L = M.length - 1 : L--, Ne(!0, -1)
    }

    function Re() {
        D == x[M[L]].length - 1 ? D = 0 : D++, Ne(!0, 1)
    }

    function Ie() {
        0 == D ? D = x[M[L]].length - 1 : D--, Ne(!0, -1)
    }

    function Le(e, t) {
        for (var n = [], r = [], a = 0; a < A.length; a++) {
            A[a].gamemode == e && r.push(a)
        }
        if (1 == r.length) return r[0];
        if (0 == r.length) return 0;
        n = r, r = [];
        for (var o = 0, i = n; o < i.length; o++) {
            var s = i[o];
            A[s].region == t && r.push(s)
        }
        return 1 == r.length ? r[0] : 0 == r.length ? n.sort((function (e, t) {
            return A[e].players - A[t].players
        }))[0] : r.sort((function (e, t) {
            return A[e].players - A[t].players
        }))[0]
    }
    var De = null;

    function Pe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        e != D && (D = e, Ne(!0, t))
    }

    function Be(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        e != L && (L = e, Ne(!0, t))
    }

    function Ne() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            o = De;
        De || (De = A[I]), n && (I = Le(M[L], (x[M[L]] || {})[D]));
        var i = A[I];
        if (!i) return ye.innerText = "Connecting...", ge.style.backgroundColor = s.FALLEN_COLOR, void (ve.style.backgroundColor = Object(a.stroke)(s.FALLEN_COLOR));
        _e.selectedIndex = I, ye.innerText = _e.options[I].innerText, ge.style.backgroundColor = je(A[I].gamemode), ve.style.backgroundColor = Object(a.stroke)(je(A[I].gamemode));
        var l = De.gamemode != i.gamemode,
            u = De.region != i.region;
        o || (l = !0, u = !0), L = M.indexOf(i.gamemode), D = x[i.gamemode].indexOf(i.region), R = x[i.gamemode].length > 1, tt(s.COOKIES.GAMEMODE, i.gamemode, .5), tt(s.COOKIES.REGION, i.region, .5), i && 2 == me && e && (l && Object(a.setCurrentBackgroundID)(i.gamemode, t), u && Object(a.setRegionText)(De.region, t), Object(r.clearKey)(), Object(r.reconnectToDifferentServer)(i.address, i.hybrid)), De = i
    }

    function je(e) {
        return s.GAMEMODE_COLORS[e] || s.TEAM_COLORS[0]
    }

    function Ue(e) {
        return s.GAMEMODE_NAMES[e] || "???"
    }

    function ze() {
        2 == me ? (0 == U && Ee && !z && (Object(a.updateDebugMode)(), Object(o.h)(), S && document.documentElement.webkitRequestFullScreen(), Object(r.play)(pe.value), Object(a.setCanvasDimensions)(), Object(i.a)(), tt(s.COOKIES.USERNAME, pe.value, 1e5), ce.classList.add("hidden"), fe.classList.add("hide"), he.classList.add("hidden"), Object(i.d)(), Object(o.t)(), Object(a.startRendering)(), Object(a.setCanvasDimensions)(), me = 0, setTimeout((function () {
            nt(s.COOKIES.TUTORIAL.MOVE) || u.I || S || (Object(u.x)("Press the WASD or arrow keys to move."), tt(s.COOKIES.TUTORIAL.MOVE, !0, 300))
        }), 1e3), Object(r.clearKey)()), S && document.documentElement.webkitRequestFullScreen()) : 1 == me ? (Y.classList.add("hide"), F.classList.add("hide"), ce.classList.remove("hidden"), S || pe.focus(), me = 2, y()) : h.g.showChat && a.showingChatBox && (T === document.activeElement ? (T.blur(), "" != T.value.trim() && B.push(T.value), Object(r.sendChatMessage)(T.value), T.value = "", j = -1) : (T.focus(), Object(o.g)(), Object(o.o)(), Object(o.d)(), j = -1))
    }

    function We() {
        H.classList.remove("hide"), z = !0
    }

    function Ke() {
        H.classList.add("hide"), z = !1
    }

    function Ge(e) {
        if (U = e, 0 == e) ne.classList.add("hide");
        else {
            ne.classList.remove("hide"), q.textContent = "", X.classList.add("hide"), ee.value = "", te.value = "";
            var t = 2 == e ? "Submit Feedback" : "Report Bug",
                n = 2 == e ? "Feedback:" : "Explain the bug in detail:";
            re.textContent = t, ae.textContent = n
        }
    }
    var Ye, Fe, He = !1;

    function Ve() {
        return Xe.apply(this, arguments)
    }

    function Xe() {
        return (Xe = O(regeneratorRuntime.mark((function e() {
            var t, n, a, o;
            return regeneratorRuntime.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        if (!He) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return");
                    case 2:
                        if (0 == U) {
                            e.next = 27;
                            break
                        }
                        if (q.textContent = "", "" != ee.value.trim()) {
                            e.next = 7;
                            break
                        }
                        return q.textContent = "Enter a message.", e.abrupt("return");
                    case 7:
                        return t = "Unknown OS", -1 != navigator.userAgent.indexOf("Win") && (t = "Windows"), -1 != navigator.userAgent.indexOf("Mac") && (t = "MacOS"), -1 != navigator.userAgent.indexOf("Linux") && (t = "Linux"), -1 != navigator.userAgent.indexOf("Android") && (t = "Android"), -1 != navigator.userAgent.indexOf("like Mac") && (t = "iOS"), -1 != navigator.userAgent.indexOf("CrOS") && (t = "ChromeOS"), n = "Unknown Browser", -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? n = "Opera" : -1 != navigator.userAgent.indexOf("Edg") ? n = "Edge" : -1 != navigator.userAgent.indexOf("Chrome") ? n = "Chrome" : -1 != navigator.userAgent.indexOf("Safari") ? n = "Safari" : -1 != navigator.userAgent.indexOf("Firefox") ? n = "Firefox" : -1 == navigator.userAgent.indexOf("MSIE") && 1 != !!document.documentMode || (n = "Internet Explorer"), a = {
                            type: U,
                            content: ee.value.trim(),
                            extraInfo: te.value.trim(),
                            username: pe.value.trim(),
                            server: r.hybridConnection ? r.hubURL : r.serverURL,
                            hub: r.hubURL,
                            browser: n,
                            os: t,
                            userAgent: navigator.userAgent
                        }, X.classList.remove("hide"), He = !0, e.next = 21, Object(r.getFromAPI)(document.location.href + "api/feedback", {
                            data: Object(m.reverseString)(Object(b.encode)(a).toString("base64"))
                        });
                    case 21:
                        if (o = e.sent, X.classList.add("hide"), He = !1, !o.error) {
                            e.next = 27;
                            break
                        }
                        return q.textContent = o.error, e.abrupt("return");
                    case 27:
                        Ge(0);
                    case 28:
                    case "end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }

    function qe(e) {
        return -1 !== "aeiouAEIOU".indexOf(e[0])
    }

    function Ze(e) {
        return null == e ? void 0 : e.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Je(e) {
        Object(i.b)(), Object(h.a)(), Object(a.setLastTank)(e.lastTank);
        var t = Object(m.getXPLevel)(e.respawnXP);
        le.textContent = t > 1 ? "You will respawn at level ".concat(t) : "", e.server && Object(r.respawnInServer)(e.server.address, e.server.key), gtag("event", s.ANALYTICS_EVENTS.DEATH, {
            timeAlive: e.timeAlive
        });
        var n = Ze(Object(m.arrayToSentence)(e.killers.map((function (e) {
            return h.g.showNames ? "" != e.name ? e.name : "an unnamed ".concat(e.className) : "a".concat(qe(e.className) ? "n" : "", " ").concat(e.className)
        }))));
        0 == me ? (K.innerHTML = "you were killed by ".concat(n), G.innerHTML = "\n\t\t\t\tLevel ".concat(e.level, " ").concat(a.lastTank.className, "\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\tTime Played: ").concat(e.timeAlive, "\n\t\t\t\t<br />\n\t\t\t\tScore: ").concat(at(e.score), "\n\t\t\t\t<br />\n\t\t\t\tKills: ").concat(e.kills), me = 1, document.getElementById("main-menu-button").onclick = function () {
            ze()
        }, Object(o.u)(), Object(a.stopRendering)(), Y.classList.remove("hide"), F.classList.remove("hide"), fe.classList.remove("hide"), he.classList.remove("hidden")) : me = 2, y(), v()
    }

    function $e(e) {
        e.keyCode == h.c.enter ? ze() : e.keyCode == h.c.openCommand && 0 == me && T !== document.activeElement && h.g.showChat && a.showingChatBox && (T.value = "", T.focus(), Object(o.g)(), Object(o.o)(), Object(o.d)(), j = -1), T == document.activeElement && (e.keyCode == h.c.escape ? (T.blur(), T.value = "", j = -1) : e.keyCode == h.c.previousChatMessage ? (j < 0 ? ((N = [].concat(B)).push(T.value), 0 != (j = N.length - 1) && j--) : 0 == j || j--, j < 0 || (T.value = N[j])) : e.keyCode == h.c.nextChatMessage && -1 != j && j < N.length - 1 && (j++, T.value = N[j]))
    }

    function Qe(e) {
        Ye || (Ye = document.getElementById("server-select")), Fe || (Fe = document.getElementById("server-select-dropdown-wrapper")), e ? (Fe.classList.remove("hidden"), Ye.classList.add("high")) : (Fe.classList.add("hidden"), Ye.classList.remove("high"))
    }

    function et(e) {
        w && T && (w.style.right = 10 / e + "px", w.style.top = 250 / e + "px", T.style.borderRadius = 5 / e + "px", T.style.padding = 3 / e + "px", T.style.fontSize = 18 / e + "px", T.style.marginBottom = 5 / e + "px", T.style.width = 220 / e + "px")
    }

    function tt(e, t, n) {
        var r = "";
        if (n) {
            var a = new Date;
            a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3), r = "; expires=" + a.toUTCString()
        }
        document.cookie = e + "=" + (t || "") + r + "; path=/"
    }

    function nt(e) {
        for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
            for (var a = n[r];
                " " == a.charAt(0);) a = a.substring(1, a.length);
            if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
        }
        return null
    }

    function rt(e) {
        document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    }

    function at(e) {
        var t = Math.sign(e),
            n = Math.abs(e);
        if (!Number.isFinite(n) || Number.isNaN(e) || null == e) return (-1 == t ? "-" : "") + "∞";
        if (n < 1e3) return (-1 == t ? "-" : "") + Math.round(n).toString();
        for (var r = 0; n > 999;) r++, n /= 1e3;
        return (-1 == t ? "-" : "") + (n = n < 10 ? Math.round(100 * n) / 100 : n < 100 ? Math.round(10 * n) / 10 : Math.round(n)).toString() + l.a.NUMBER_ENDINGS[Math.min(r - 1, l.a.NUMBER_ENDINGS.length - 1)]
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "serverURL", (function () {
        return y
    })), n.d(t, "socket", (function () {
        return m
    })), n.d(t, "hubSocket", (function () {
        return b
    })), n.d(t, "hybridConnection", (function () {
        return A
    })), n.d(t, "connectToServer", (function () {
        return M
    })), n.d(t, "disconnectFromServer", (function () {
        return x
    })), n.d(t, "closeSocket", (function () {
        return k
    })), n.d(t, "reconnectToDifferentServer", (function () {
        return C
    })), n.d(t, "key", (function () {
        return R
    })), n.d(t, "respawningWithKey", (function () {
        return I
    })), n.d(t, "clearKey", (function () {
        return L
    })), n.d(t, "respawnInServer", (function () {
        return P
    })), n.d(t, "hubURL", (function () {
        return B
    })), n.d(t, "updateDimensionAttributes", (function () {
        return N
    })), n.d(t, "updateStats", (function () {
        return U
    })), n.d(t, "statUpgrade", (function () {
        return z
    })), n.d(t, "play", (function () {
        return W
    })), n.d(t, "updateDirection", (function () {
        return G
    })), n.d(t, "sendChatMessage", (function () {
        return Y
    })), n.d(t, "updateShooting", (function () {
        return F
    })), n.d(t, "updateBody", (function () {
        return H
    })), n.d(t, "updateWeapon", (function () {
        return V
    })), n.d(t, "loadWeaponUpgrade", (function () {
        return X
    })), n.d(t, "loadBodyUpgrade", (function () {
        return q
    })), n.d(t, "togglePassiveMode", (function () {
        return Z
    })), n.d(t, "updateInput", (function () {
        return J
    })), n.d(t, "updateControlState", (function () {
        return $
    })), n.d(t, "updateControlPosition", (function () {
        return Q
    })), n.d(t, "upgradePlayer", (function () {
        return ee
    })), n.d(t, "getFromAPI", (function () {
        return te
    }));
    var r = n(15),
        a = n(12),
        o = n(11),
        i = n(7),
        s = n(14),
        l = n(0),
        u = n(5),
        c = n(1),
        d = n(4),
        f = n(8),
        h = n(2);

    function p(e, t, n, r, a, o, i) {
        try {
            var s = e[o](i),
                l = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(l) : Promise.resolve(l).then(r, a)
    }

    function _(e) {
        return function () {
            var t = this,
                n = arguments;
            return new Promise((function (r, a) {
                var o = e.apply(t, n);

                function i(e) {
                    p(o, r, a, i, s, "next", e)
                }

                function s(e) {
                    p(o, r, a, i, s, "throw", e)
                }
                i(void 0)
            }))
        }
    }

    function g(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, a, o = [],
                i = !0,
                s = !1;
            try {
                for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
            } catch (e) {
                s = !0, a = e
            } finally {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
            return o
        }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n(0);
    var y = window.location.host;
    y = "localhost";
    var m, b, E, O, w = !1,
        T = "";

    function S() {
        E = setInterval((function () {
            m.sendMessage(l.MSG_TYPES.PING, Date.now())
        }), 1e3)
    }
    k();
    var A = !1;

    function M(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        A = t, y = e, i.serverNameDisplay.textContent = "Server Name: ".concat(Object(h.formatURL)(t ? B : y)), t ? (m = b, S(), Object(u.onConnect)(y)) : (y.startsWith("ws://") || y.startsWith("wss://") || (y = "ws://" + y), (m = new WebSocket(y + (y.endsWith("/") ? "" : "/") + "ws?&key=" + R)).binaryType = "arraybuffer", m.address = y, m.sendMessage = function (e, t) {
            console.warn("WebSocket not yet open. Message not sent.")
        }, m.addEventListener("open", (function () {
            m.sendMessage = function (e, t) {
                m.readyState === WebSocket.OPEN ? m.send(Object(r.encode)([e, t])) : console.warn("WebSocket closing. Message not sent.")
            }, S(), Object(u.onConnect)(y)
        })), m.addEventListener("close", (function (e) {
            e.target.forcedClosed || (console.log("Disconnected from game server ".concat(m.address, ": ") + JSON.stringify({
                reason: e.reason,
                code: e.code,
                wasClean: e.wasClean
            })), k(), Object(u.onDisconnect)(T), clearInterval(E), w || setTimeout((function () {
                console.log("Attempting to connect to ".concat(y)), M(y)
            }), 0), w = !1, T = "")
        })), m.addEventListener("error", (function (e) {
            e.target.forcedClosed || (console.log("Connection to game server failed: ".concat(JSON.stringify(e))), Object(u.onFullDisconnect)("An unexpected error occured while connecting to ".concat(y).concat(e.message ? ": ".concat(e.message) : ".")))
        }))), m.addEventListener("message", (function (e) {
            var t = Object(r.decode)(new Uint8Array(e.data)),
                n = t[0],
                a = t[1];
            switch (n) {
                case l.MSG_TYPES.RECEIVE_BODY_UPGRADES:
                    Object(c.t)(a);
                    break;
                case l.MSG_TYPES.RECEIVE_WEAPON_UPGRADES:
                    Object(c.y)(a);
                    break;
                case l.MSG_TYPES.ADD_UPGRADE_POINT:
                    Object(c.a)(a);
                    break;
                case l.MSG_TYPES.RECEIEVE_CLASS_TREE:
                    Object(c.J)(a);
                    break;
                case l.MSG_TYPES.SET_STAT_UPGRADES:
                    U(a);
                    break;
                case l.MSG_TYPES.EDITMODE:
                    Object(d.p)(a);
                    break;
                case l.MSG_TYPES.RECEIVE_TANK:
                    Object(d.l)(a);
                    break;
                case l.MSG_TYPES.SEND_TO_SERVER:
                    D(a);
                    break;
                case l.MSG_TYPES.GAME_UPDATE:
                    Object(o.e)(a);
                    break;
                case l.MSG_TYPES.RECEIVE_DIMENSION_ATTRIBUTES:
                    N(a);
                    break;
                case l.MSG_TYPES.GATES_UPDATE:
                    Object(s.d)(a[0], a[1]);
                    break;
                case l.MSG_TYPES.PING:
                    Object(i.setPing)(Date.now() - a);
                    break;
                case l.MSG_TYPES.RENDER_ENTITY:
                    Object(i.exportRenderedEntity)(a);
                    break;
                case l.MSG_TYPES.COPY_TEXT:
                    j(a);
                    break;
                case l.MSG_TYPES.RECEIVE_NOTIFICATION:
                    Object(c.v)(a);
                    break;
                case l.MSG_TYPES.RECEIVE_ANNOUNCEMENT:
                    Object(i.receiveAnnouncement)(a[0], a[1]);
                    break;
                case l.MSG_TYPES.RECEIVE_TIMER:
                    Object(i.receiveTimer)(a[0], a[1]);
                    break;
                case l.MSG_TYPES.POPUP:
                    Object(c.j)(a[0], a[1]);
                    break;
                case l.MSG_TYPES.INIT_LEADERBOARD:
                    Object(c.K)(a);
                    break;
                case l.MSG_TYPES.ON_KILL:
                    Object(c.s)(a);
                    break;
                case l.MSG_TYPES.ON_DEATH:
                    Object(u.onDeath)(a)
            }
        }))
    }

    function x() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        m.closed || (w = !e, m.close())
    }

    function k() {
        (m = {
            closed: !0
        }).sendMessage = function (e, t) {
            console.warn("WebSocket closed. Message not sent.")
        }
    }

    function C(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A;
        m.closed || (m.forcedClosed = !0, m.close(), clearInterval(E), Object(u.onDisconnect)(T)), M(e, t)
    }
    var R = "",
        I = !1;

    function L() {
        R = "", I = !1
    }

    function D(e) {
        R = e[0], y = e[1];
        var t = e[2];
        Object(i.setCurrentBackgroundID)(t.loadingBackground), T = t.loadingText, w = !1;
        var n = u.servers.findIndex((function (e) {
            return e.address === y
        })); - 1 != n && (Object(u.setSelectedServerIndex)(n), Object(u.updateSelectedServer)()), console.log("Sending to server: ".concat(y)), C(y)
    }

    function P(e, t) {
        Object(i.setCurrentBackgroundID)(0), y = e;
        var n = u.servers.findIndex((function (e) {
            return e.address === y
        })); - 1 != n && (Object(u.setSelectedServerIndex)(n), Object(u.updateSelectedServer)(!1)), I = !0, R = t, console.log("Respawning in server: ".concat(y)), T = "Connecting...", x()
    }
    var B = window.location.protocol.replace("http", "ws") + "//" + window.location.host;
    ! function e(t) {
        (b = new WebSocket(t + "/ws")).binaryType = "arraybuffer", b.addEventListener("open", (function () {
            b.sendMessage = function (e, t) {
                b.send(Object(r.encode)([e, t]))
            }, O = setInterval((function () {
                b.sendMessage(l.MSG_TYPES.PING, Date.now())
            }), 5e3), Object(u.onHubConnect)(t)
        })), b.onclose = function (t) {
            console.log("Disconnected from hub server ".concat(B, ":") + JSON.stringify({
                reason: t.reason,
                code: t.code,
                wasClean: t.wasClean
            })), A && (A = !1, Object(u.onDisconnect)(T), clearInterval(E)), clearInterval(O), setTimeout((function () {
                console.log("Attempting to reconnect to hub server ".concat(B)), e(B)
            }), 1e3)
        }, b.addEventListener("error", (function (t) {
            console.log("Error when connecting to hub server ".concat(B, ": ").concat(JSON.stringify(t))), clearInterval(O), setTimeout((function () {
                console.log("Attempting to reconnect to hub server ".concat(B)), e(B)
            }), 1e3)
        })), b.addEventListener("message", (function (e) {
            var t = Object(r.decode)(new Uint8Array(e.data)),
                n = t[0],
                a = t[1];
            switch (n) {
                case l.MSG_TYPES.RECEIVE_SERVERS:
                    u.fullyDisconnected || Object(u.receiveServers)(a)
            }
        }))
    }(B);
    var N = function (e) {
        for (var t = 0, n = Object.entries(e); t < n.length; t++) {
            var r = g(n[t], 2),
                a = r[0],
                o = r[1];
            Object(s.c)(a, o)
        }
    };

    function j(e) {
        navigator.clipboard.writeText(e)
    }
    var U = function (e) {
        Object(c.B)(e[0]), Object(c.A)(e[1])
    },
        z = function (e) {
            m.sendMessage(l.MSG_TYPES.UPGRADE_STAT, e)
        },
        W = function (e) {
            gtag("event", l.ANALYTICS_EVENTS.JOIN_GAME, {
                username: e
            }), m.sendMessage(l.MSG_TYPES.JOIN_GAME, e), Object(c.z)()
        },
        K = 0,
        G = Object(a.throttle)(60, (function (e) {
            var t = Math.round(1e3 * e) / 1e3;
            K != t && m.sendMessage(l.MSG_TYPES.ROTATION_INPUT, t), K = t
        })),
        Y = Object(a.throttle)(20, (function (e) {
            gtag("event", l.ANALYTICS_EVENTS.SEND_MESSAGE, {
                message: e
            }), m.sendMessage(l.MSG_TYPES.SEND_CHAT_MESSAGE, e)
        })),
        F = function (e) {
            m.sendMessage(l.MSG_TYPES.SHOOTING_INPUT, e)
        };

    function H() {
        m.sendMessage(l.MSG_TYPES.CHANGE_BODY, d.b)
    }

    function V() {
        m.sendMessage(l.MSG_TYPES.CHANGE_WEAPON, d.c)
    }

    function X(e) {
        m.sendMessage(l.MSG_TYPES.LOAD_WEAPON_UPGRADE, e)
    }

    function q(e) {
        m.sendMessage(l.MSG_TYPES.LOAD_BODY_UPGRADE, e)
    }
    var Z = Object(f.debounce)((function (e) {
        m.sendMessage(l.MSG_TYPES.PASSIVE_MODE, e)
    }), 20),
        J = function (e, t) {
            m.sendMessage(l.MSG_TYPES.MOVEMENT_INPUT, [e, t])
        },
        $ = Object(f.debounce)((function (e) {
            m.sendMessage(l.MSG_TYPES.CHANGE_CONTROL_STATE, e)
        }), 20),
        Q = Object(a.throttle)(60, (function (e, t) {
            m.sendMessage(l.MSG_TYPES.CHANGE_CONTROL_POSITION, [e, t])
        })),
        ee = function (e, t, n) {
            switch (n) {
                case 0:
                    e ? m.sendMessage(l.MSG_TYPES.UPGRADE_WEAPON, t) : m.sendMessage(l.MSG_TYPES.UPGRADE_BODY, t);
                    var r = !1,
                        a = !1;
                    if (e)
                        for (var o = 0; o < c.M.length; o++) {
                            var i = c.M[o];
                            if (i.id == t)
                                for (var s = 0; s < i.barrels.length; s++) 1 == i.barrels[s].type && (r = !0)
                        } else
                        for (var d = 0; d < c.b.length; d++) {
                            var f = c.b[d];
                            if (f.id == t)
                                for (var h = 0; h < f.gadgets.length; h++) 1 == f.gadgets[h].type ? r = !0 : 0 == f.gadgets[h].type && (a = !0)
                        }
                    a && setTimeout((function () {
                        Object(u.getCookie)(l.COOKIES.TUTORIAL.AUTO_CANNONS) || c.I || u.isMobile || (Object(c.C)(!0), Object(u.setCookie)(l.COOKIES.TUTORIAL.AUTO_CANNONS, !0, 15), setTimeout((function () {
                            Object(c.x)("You can disable your auto cannons by pressing V.")
                        }), 1e3), Object(c.C)(!1))
                    }), 1e4), r && (Object(u.getCookie)(l.COOKIES.TUTORIAL.DRONES) || c.I || u.isMobile || (Object(c.C)(!0), Object(u.setCookie)(l.COOKIES.TUTORIAL.DRONES, !0, 15), setTimeout((function () {
                        Object(c.x)("Hold down left click to control your drones.")
                    }), 1e3), setTimeout((function () {
                        Object(c.x)("You can also control them by turning on auto fire. (Press E)")
                    }), 4e3), setTimeout((function () {
                        Object(c.x)("Repel your drones by holding down right click.")
                    }), 9e3), setTimeout((function () {
                        Object(c.x)("Upgrading your bullet penetration stat upgrades your max drone cap.")
                    }), 13e3), Object(c.C)(!1)))
            }
        };

    function te(e, t) {
        return ne.apply(this, arguments)
    }

    function ne() {
        return (ne = _(regeneratorRuntime.mark((function e(t, n) {
            return regeneratorRuntime.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", new Promise((function (e) {
                            n || (n = {}), fetch(t, {
                                method: "POST",
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(n)
                            }).catch((function (t) {
                                console.error(t), e({
                                    error: "Failed to connect to server."
                                })
                            })).then((function (e) {
                                return e.json()
                            })).then((function (t) {
                                t.error, e(t)
                            }))
                        })));
                    case 1:
                    case "end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "serverNameDisplay", (function () {
        return ue
    })), n.d(t, "chat", (function () {
        return ce
    })), n.d(t, "renderingHUD", (function () {
        return fe
    })), n.d(t, "checkingForTankEditorClicks", (function () {
        return he
    })), n.d(t, "multiSelectTankEditorClick", (function () {
        return pe
    })), n.d(t, "checkingForIDClicks", (function () {
        return _e
    })), n.d(t, "clickedObjects", (function () {
        return ge
    })), n.d(t, "oldClickedObjects", (function () {
        return ve
    })), n.d(t, "receiveAnnouncement", (function () {
        return Te
    })), n.d(t, "clearAnnouncement", (function () {
        return Se
    })), n.d(t, "receiveTimer", (function () {
        return ke
    })), n.d(t, "clearTimer", (function () {
        return Ce
    })), n.d(t, "checkForTankEditorClicks", (function () {
        return Re
    })), n.d(t, "setHUDRendering", (function () {
        return Ie
    })), n.d(t, "showingChatBox", (function () {
        return Le
    })), n.d(t, "setShowChatBox", (function () {
        return De
    })), n.d(t, "renderMainMenu", (function () {
        return Ne
    })), n.d(t, "lastTank", (function () {
        return Be
    })), n.d(t, "setCurrentBackgroundID", (function () {
        return et
    })), n.d(t, "setRegionText", (function () {
        return tt
    })), n.d(t, "cdt", (function () {
        return at
    })), n.d(t, "lastMe", (function () {
        return ot
    })), n.d(t, "canvas", (function () {
        return dt
    })), n.d(t, "serverSelectCanvas", (function () {
        return ft
    })), n.d(t, "screenSize", (function () {
        return Tt
    })), n.d(t, "offsetX", (function () {
        return Ct
    })), n.d(t, "offsetY", (function () {
        return Rt
    })), n.d(t, "setLastTank", (function () {
        return It
    })), n.d(t, "setPing", (function () {
        return Lt
    })), n.d(t, "render", (function () {
        return Dt
    })), n.d(t, "updateDebugMode", (function () {
        return jt
    })), n.d(t, "scaleRatio", (function () {
        return zt
    })), n.d(t, "vmin", (function () {
        return Wt
    })), n.d(t, "setCanvasDimensions", (function () {
        return Kt
    })), n.d(t, "gateActivate", (function () {
        return Yt
    })), n.d(t, "gatewayActivate", (function () {
        return Ft
    })), n.d(t, "wormholeRupture", (function () {
        return Ht
    })), n.d(t, "wormholeSpawn", (function () {
        return Vt
    })), n.d(t, "entityLanding", (function () {
        return Xt
    })), n.d(t, "startRendering", (function () {
        return qt
    })), n.d(t, "stopRendering", (function () {
        return Zt
    })), n.d(t, "getTeamColor", (function () {
        return an
    })), n.d(t, "stroke", (function () {
        return sn
    })), n.d(t, "upgradeRotation", (function () {
        return yn
    })), n.d(t, "loadUpgradeTree", (function () {
        return Jn
    })), n.d(t, "exportRenderedEntity", (function () {
        return fr
    })), n.d(t, "clearCameraShakes", (function () {
        return gr
    })), n.d(t, "tickCameraShakes", (function () {
        return vr
    })), n.d(t, "shakeCamera", (function () {
        return yr
    })), n.d(t, "addParticle", (function () {
        return mr
    })), n.d(t, "clearParticles", (function () {
        return br
    })), n.d(t, "clickMouse", (function () {
        return Zr
    }));
    var r, a = n(12),
        o = (n(36), n(8)),
        i = n(11),
        s = n(9),
        l = n(5),
        u = n(14),
        c = n(0),
        d = n(6),
        f = n(1),
        h = n(2);

    function p(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    a = function () { };
                return {
                    s: a,
                    n: function () {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, i = !0,
            s = !1;
        return {
            s: function () {
                n = n.call(e)
            },
            n: function () {
                var e = n.next();
                return i = e.done, e
            },
            e: function (e) {
                s = !0, o = e
            },
            f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    for (var v = (g(r = {
        hexagonboss: {
            barrels: [{
                type: 9,
                rot: 60,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }, {
                type: 9,
                rot: 180,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }, {
                type: 9,
                rot: 300,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }]
        },
        streamliner: {
            barrels: [{
                type: 0,
                rot: 0,
                offset: 0,
                width: .4,
                length: 1.3,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .4,
                length: 1.2,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .4,
                length: 1.1,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .4,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .4,
                length: .9,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .4,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .4,
                length: .7,
                distance: 0
            }]
        },
        mono: {
            barrels: [{
                type: 0,
                rot: 0,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }]
        },
        assassin: {
            barrels: [{
                type: 0,
                rot: 0,
                offset: 0,
                width: .5,
                length: 1.25,
                distance: 0
            }]
        },
        split: {
            barrels: [{
                type: 0,
                rot: 35,
                offset: 0,
                width: .25,
                length: .75,
                distance: 0
            }, {
                type: 0,
                rot: -35,
                offset: 0,
                width: .25,
                length: .75,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }]
        },
        annihilator: {
            barrels: [{
                type: 0,
                rot: 0,
                offset: 0,
                width: 1,
                length: 1.1,
                distance: 0
            }]
        },
        spread: {
            barrels: [{
                type: 0,
                rot: -60,
                offset: 0,
                width: .25,
                length: .7,
                distance: 0
            }, {
                type: 0,
                rot: 60,
                offset: 0,
                width: .25,
                length: .7,
                distance: 0
            }, {
                type: 0,
                rot: -40,
                offset: 0,
                width: .25,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: 40,
                offset: 0,
                width: .25,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: 20,
                offset: 0,
                width: .25,
                length: .9,
                distance: 0
            }, {
                type: 0,
                rot: -20,
                offset: 0,
                width: .25,
                length: .9,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }]
        },
        disperse: {
            barrels: [{
                type: 0,
                rot: -75,
                offset: 0,
                width: .25,
                length: .7,
                distance: 0
            }, {
                type: 0,
                rot: 75,
                offset: 0,
                width: .25,
                length: .7,
                distance: 0
            }, {
                type: 0,
                rot: -60,
                offset: 0,
                width: .25,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: 60,
                offset: 0,
                width: .25,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: -45,
                offset: 0,
                width: .25,
                length: .9,
                distance: 0
            }, {
                type: 0,
                rot: 45,
                offset: 0,
                width: .25,
                length: .9,
                distance: 0
            }, {
                type: 0,
                rot: -30,
                offset: 0,
                width: .25,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: 30,
                offset: 0,
                width: .25,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: 15,
                offset: 0,
                width: .25,
                length: 1.1,
                distance: 0
            }, {
                type: 0,
                rot: -15,
                offset: 0,
                width: .25,
                length: 1.1,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .5,
                length: 1.2,
                distance: 0
            }]
        },
        octo: {
            barrels: [{
                type: 0,
                rot: 0,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: 180,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: 90,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: -90,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: 45,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: -45,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: 135,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: -135,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }]
        },
        quadro: {
            barrels: [{
                type: 0,
                rot: 0,
                offset: .65,
                width: .3,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: -.65,
                width: .3,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: -.3,
                width: .3,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: .3,
                width: .3,
                length: .8,
                distance: 0
            }]
        },
        marksman: {
            barrels: [{
                type: 0,
                rot: 0,
                offset: 0,
                width: .5,
                length: 1.4,
                distance: 0
            }]
        },
        debris: {
            barrels: [{
                type: 2,
                rot: 180,
                offset: 0,
                width: .2,
                length: .45,
                distance: 0
            }, {
                type: 2,
                rot: 180,
                offset: .5,
                width: .1,
                length: .35,
                distance: 0
            }, {
                type: 2,
                rot: 180,
                offset: -.5,
                width: .1,
                length: .35,
                distance: 0
            }, {
                type: 2,
                rot: 60,
                offset: 0,
                width: .2,
                length: .45,
                distance: 0
            }, {
                type: 2,
                rot: 60,
                offset: .5,
                width: .1,
                length: .35,
                distance: 0
            }, {
                type: 2,
                rot: 60,
                offset: -.5,
                width: .1,
                length: .35,
                distance: 0
            }, {
                type: 2,
                rot: -60,
                offset: 0,
                width: .2,
                length: .45,
                distance: 0
            }, {
                type: 2,
                rot: -60,
                offset: .5,
                width: .1,
                length: .35,
                distance: 0
            }, {
                type: 2,
                rot: -60,
                offset: -.5,
                width: .1,
                length: .35,
                distance: 0
            }]
        },
        satellite: {
            barrels: [{
                type: 1,
                rot: 180,
                offset: 0,
                width: .2,
                length: .45,
                distance: 0
            }, {
                type: 1,
                rot: 180,
                offset: .5,
                width: .1,
                length: .35,
                distance: 0
            }, {
                type: 1,
                rot: 180,
                offset: -.5,
                width: .1,
                length: .35,
                distance: 0
            }, {
                type: 1,
                rot: 60,
                offset: 0,
                width: .2,
                length: .45,
                distance: 0
            }, {
                type: 1,
                rot: 60,
                offset: .5,
                width: .1,
                length: .35,
                distance: 0
            }, {
                type: 1,
                rot: 60,
                offset: -.5,
                width: .1,
                length: .35,
                distance: 0
            }, {
                type: 1,
                rot: -60,
                offset: 0,
                width: .2,
                length: .45,
                distance: 0
            }, {
                type: 1,
                rot: -60,
                offset: .5,
                width: .1,
                length: .35,
                distance: 0
            }, {
                type: 1,
                rot: -60,
                offset: -.5,
                width: .1,
                length: .35,
                distance: 0
            }]
        },
        charon: {
            barrels: [{
                type: 2,
                rot: -60,
                offset: 0,
                width: .55,
                length: .5,
                distance: 0
            }, {
                type: 2,
                rot: 60,
                offset: 0,
                width: .55,
                length: .5,
                distance: 0
            }, {
                type: 2,
                rot: 180,
                offset: 0,
                width: .55,
                length: .5,
                distance: 0
            }]
        },
        ganymede: {
            barrels: [{
                type: 4,
                rot: 180,
                offset: 0,
                distance: .4,
                width: .4,
                length: .225
            }, {
                type: 4,
                rot: 60,
                offset: 0,
                distance: .4,
                width: .4,
                length: .225
            }, {
                type: 4,
                rot: -60,
                offset: 0,
                distance: .4,
                width: .4,
                length: .225
            }, {
                type: 5,
                rot: 180,
                offset: -.6,
                distance: .4,
                width: .1,
                length: .15
            }, {
                type: 5,
                rot: 180,
                offset: .6,
                distance: .4,
                width: .1,
                length: .15
            }, {
                type: 5,
                rot: 60,
                offset: -.6,
                distance: .4,
                width: .1,
                length: .15
            }, {
                type: 5,
                rot: 60,
                offset: .6,
                distance: .4,
                width: .1,
                length: .15
            }, {
                type: 5,
                rot: -60,
                offset: -.6,
                distance: .4,
                width: .1,
                length: .15
            }, {
                type: 5,
                rot: -60,
                offset: .6,
                distance: .4,
                width: .1,
                length: .15
            }]
        },
        synope: {
            barrels: [{
                type: 3,
                rot: 180,
                offset: 0,
                width: .4,
                length: .525,
                distance: 0
            }, {
                type: 3,
                rot: 60,
                offset: 0,
                width: .4,
                length: .525,
                distance: 0
            }, {
                type: 3,
                rot: -60,
                offset: 0,
                width: .4,
                length: .525,
                distance: 0
            }]
        },
        minigun: {
            barrels: [{
                type: 0,
                rot: 0,
                offset: 0,
                width: .2,
                length: 1.2,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: -.5,
                width: .2,
                length: 1.2,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: .5,
                width: .2,
                length: 1.2,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .2,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: -.5,
                width: .2,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: .5,
                width: .2,
                length: .8,
                distance: 0
            }]
        },
        amalgam: {
            barrels: [{
                type: 0,
                rot: 0,
                offset: -.5,
                width: .4,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: .5,
                width: .4,
                length: 1,
                distance: 0
            }, {
                type: 2,
                rot: 15,
                offset: .4,
                width: .65,
                length: .75,
                distance: 0
            }, {
                type: 2,
                rot: -15,
                offset: -.4,
                width: .65,
                length: .75,
                distance: 0
            }, {
                type: 1,
                rot: 140,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }, {
                type: 1,
                rot: -140,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }]
        },
        wave: {
            barrels: [{
                type: 0,
                rot: -150,
                offset: 0,
                width: .5,
                length: .9,
                distance: 0
            }, {
                type: 0,
                rot: 150,
                offset: 0,
                width: .5,
                length: .9,
                distance: 0
            }, {
                type: 2,
                rot: 180,
                offset: 0,
                width: .65,
                length: 1,
                distance: .1
            }, {
                type: 2,
                rot: 180,
                offset: 0,
                width: .65,
                length: 1,
                distance: -.4
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .4,
                length: 1,
                distance: 0
            }]
        },
        wake: {
            barrels: [{
                type: 2,
                rot: 180,
                offset: 0,
                width: .65,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .4,
                length: .9,
                distance: 0
            }, {
                type: 0,
                rot: -140,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: 140,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }]
        },
        alpha: {
            barrels: [{
                type: 2,
                rot: 0,
                offset: 0,
                width: 1.5,
                length: 1,
                distance: 0
            }]
        },
        beta: {
            barrels: [{
                type: 2,
                rot: 0,
                offset: 0,
                width: 1,
                length: 1,
                distance: 0
            }]
        },
        pulsar: {
            barrels: [{
                type: 0,
                rot: 180,
                offset: .3,
                width: .2,
                length: .4,
                distance: 0
            }, {
                type: 0,
                rot: 180,
                offset: -.3,
                width: .2,
                length: .4,
                distance: 0
            }, {
                type: 0,
                rot: 60,
                offset: .3,
                width: .2,
                length: .4,
                distance: 0
            }, {
                type: 0,
                rot: 60,
                offset: -.3,
                width: .2,
                length: .4,
                distance: 0
            }, {
                type: 0,
                rot: -60,
                offset: .3,
                width: .2,
                length: .4,
                distance: 0
            }, {
                type: 0,
                rot: -60,
                offset: -.3,
                width: .2,
                length: .4,
                distance: 0
            }]
        },
        engineer: {
            barrels: [{
                type: 8,
                rot: 0,
                offset: 0,
                width: .75,
                length: .95,
                distance: 0
            }]
        },
        raider: {
            barrels: [{
                type: 8,
                rot: 0,
                offset: 0,
                width: .9,
                length: .85,
                distance: 0
            }]
        },
        mechanic: {
            barrels: [{
                type: 8,
                rot: 120,
                offset: 0,
                width: .55,
                length: .85,
                distance: 0
            }, {
                type: 8,
                rot: -120,
                offset: 0,
                width: .55,
                length: .85,
                distance: 0
            }, {
                type: 8,
                rot: 0,
                offset: 0,
                width: .55,
                length: .85,
                distance: 0
            }]
        },
        arsenal: {
            barrels: [{
                type: 8,
                rot: 0,
                offset: 0,
                width: .6,
                length: .95,
                distance: .3
            }, {
                type: 8,
                rot: 0,
                offset: 0,
                width: .6,
                length: .95,
                distance: -.3
            }]
        },
        shrapnel: {
            barrels: [{
                type: 2,
                rot: 0,
                offset: 0,
                width: .45,
                length: .75,
                distance: 0
            }, {
                type: 2,
                rot: 180,
                offset: 0,
                width: .45,
                length: .75,
                distance: 0
            }, {
                type: 2,
                rot: 90,
                offset: 0,
                width: .45,
                length: .75,
                distance: 0
            }, {
                type: 2,
                rot: -90,
                offset: 0,
                width: .45,
                length: .75,
                distance: 0
            }, {
                type: 2,
                rot: 45,
                offset: 0,
                width: .45,
                length: .75,
                distance: 0
            }, {
                type: 2,
                rot: -45,
                offset: 0,
                width: .45,
                length: .75,
                distance: 0
            }, {
                type: 2,
                rot: 135,
                offset: 0,
                width: .45,
                length: .75,
                distance: 0
            }, {
                type: 2,
                rot: -135,
                offset: 0,
                width: .45,
                length: .75,
                distance: 0
            }]
        },
        emperor: {
            barrels: [{
                type: 1,
                rot: 0,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }, {
                type: 1,
                rot: 90,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }, {
                type: 1,
                rot: -90,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }, {
                type: 1,
                rot: -180,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }]
        },
        overlord: {
            barrels: [{
                type: 1,
                rot: 0,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }, {
                type: 1,
                rot: 120,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }, {
                type: 1,
                rot: -120,
                offset: 0,
                width: .5,
                length: .8,
                distance: 0
            }]
        },
        horizon: {
            barrels: [{
                type: 0,
                rot: 22.5,
                offset: 0,
                width: .2,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: -22.5,
                offset: 0,
                width: .2,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: 45,
                offset: 0,
                width: .2,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: -45,
                offset: 0,
                width: .2,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: 67.5,
                offset: 0,
                width: .2,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: -67.5,
                offset: 0,
                width: .2,
                length: .8,
                distance: 0
            }, {
                type: 0,
                rot: 90,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: -90,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }, {
                type: 0,
                rot: 0,
                offset: 0,
                width: .5,
                length: 1,
                distance: 0
            }]
        }
    }, "disperse", {
        barrels: [{
            type: 0,
            rot: -75,
            offset: 0,
            width: .25,
            length: .7,
            distance: 0
        }, {
            type: 0,
            rot: 75,
            offset: 0,
            width: .25,
            length: .7,
            distance: 0
        }, {
            type: 0,
            rot: -60,
            offset: 0,
            width: .25,
            length: .8,
            distance: 0
        }, {
            type: 0,
            rot: 60,
            offset: 0,
            width: .25,
            length: .8,
            distance: 0
        }, {
            type: 0,
            rot: -45,
            offset: 0,
            width: .25,
            length: .9,
            distance: 0
        }, {
            type: 0,
            rot: 45,
            offset: 0,
            width: .25,
            length: .9,
            distance: 0
        }, {
            type: 0,
            rot: -30,
            offset: 0,
            width: .25,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: 30,
            offset: 0,
            width: .25,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: 15,
            offset: 0,
            width: .25,
            length: 1.1,
            distance: 0
        }, {
            type: 0,
            rot: -15,
            offset: 0,
            width: .25,
            length: 1.1,
            distance: 0
        }, {
            type: 0,
            rot: 0,
            offset: 0,
            width: .5,
            length: 1.2,
            distance: 0
        }]
    }), g(r, "gunner", {
        barrels: [{
            type: 0,
            rot: 0,
            offset: -.3,
            width: .2,
            length: .8,
            distance: 0
        }, {
            type: 0,
            rot: 0,
            offset: .3,
            width: .2,
            length: .8,
            distance: 0
        }, {
            type: 0,
            rot: 0,
            offset: -.8,
            width: .2,
            length: .6,
            distance: 0
        }, {
            type: 0,
            rot: 0,
            offset: .8,
            width: .2,
            length: .6,
            distance: 0
        }]
    }), g(r, "riot", {
        barrels: [{
            type: 2,
            rot: 0,
            offset: 0,
            width: .65,
            length: 1,
            distance: .5
        }, {
            type: 2,
            rot: 0,
            offset: 0,
            width: .65,
            length: 1,
            distance: 0
        }, {
            type: 2,
            rot: 0,
            offset: 0,
            width: .65,
            length: 1,
            distance: -.5
        }]
    }), g(r, "barricade", {
        barrels: [{
            type: 2,
            rot: 0,
            offset: 0,
            width: .65,
            length: 1,
            distance: .1
        }, {
            type: 2,
            rot: 0,
            offset: 0,
            width: .65,
            length: 1,
            distance: -.4
        }]
    }), g(r, "palisade", {
        barrels: [{
            type: 2,
            rot: 0,
            offset: 0,
            width: .65,
            length: 1,
            distance: 0
        }, {
            type: 2,
            rot: 90,
            offset: 0,
            width: .65,
            length: 1,
            distance: 0
        }, {
            type: 2,
            rot: -90,
            offset: 0,
            width: .65,
            length: 1,
            distance: 0
        }, {
            type: 2,
            rot: -180,
            offset: 0,
            width: .65,
            length: 1,
            distance: 0
        }]
    }), g(r, "blazar", {
        barrels: [{
            type: 0,
            rot: 180,
            offset: 0,
            width: .35,
            length: .5,
            distance: 0
        }, {
            type: 0,
            rot: 60,
            offset: 0,
            width: .35,
            length: .5,
            distance: 0
        }, {
            type: 0,
            rot: -60,
            offset: 0,
            width: .35,
            length: .5,
            distance: 0
        }]
    }), g(r, "quasar", {
        barrels: [{
            type: 0,
            rot: 180,
            offset: .4,
            distance: .1,
            width: .2,
            length: .35000000000000003
        }, {
            type: 0,
            rot: 180,
            offset: -.4,
            distance: .1,
            width: .2,
            length: .35000000000000003
        }, {
            type: 0,
            rot: 180,
            offset: 0,
            distance: .1,
            width: .25,
            length: .425
        }, {
            type: 0,
            rot: 60,
            offset: .4,
            distance: .1,
            width: .2,
            length: .35000000000000003
        }, {
            type: 0,
            rot: 60,
            offset: -.4,
            distance: .1,
            width: .2,
            length: .35000000000000003
        }, {
            type: 0,
            rot: 60,
            offset: 0,
            distance: .1,
            width: .25,
            length: .425
        }, {
            type: 0,
            rot: -60,
            offset: .4,
            distance: .1,
            width: .2,
            length: .35000000000000003
        }, {
            type: 0,
            rot: -60,
            offset: -.4,
            distance: .1,
            width: .2,
            length: .35000000000000003
        }, {
            type: 0,
            rot: -60,
            offset: 0,
            distance: .1,
            width: .25,
            length: .425
        }]
    }), g(r, "moon", {
        barrels: [{
            type: 1,
            rot: 180,
            offset: 0,
            width: .3,
            length: .5,
            distance: 0
        }, {
            type: 1,
            rot: 180,
            offset: .3,
            width: .1,
            length: .3,
            distance: 0
        }, {
            type: 1,
            rot: 180,
            offset: -.3,
            width: .1,
            length: .3,
            distance: 0
        }, {
            type: 1,
            rot: 60,
            offset: 0,
            width: .3,
            length: .5,
            distance: 0
        }, {
            type: 1,
            rot: 60,
            offset: .3,
            width: .1,
            length: .3,
            distance: 0
        }, {
            type: 1,
            rot: 60,
            offset: -.3,
            width: .1,
            length: .3,
            distance: 0
        }, {
            type: 1,
            rot: -60,
            offset: 0,
            width: .3,
            length: .5,
            distance: 0
        }, {
            type: 1,
            rot: -60,
            offset: .3,
            width: .1,
            length: .3,
            distance: 0
        }, {
            type: 1,
            rot: -60,
            offset: -.3,
            width: .1,
            length: .3,
            distance: 0
        }]
    }), g(r, "penta", {
        barrels: [{
            type: 0,
            rot: -40,
            offset: 0,
            width: .5,
            length: .8,
            distance: 0
        }, {
            type: 0,
            rot: 40,
            offset: 0,
            width: .5,
            length: .8,
            distance: 0
        }, {
            type: 0,
            rot: 20,
            offset: 0,
            width: .5,
            length: .9,
            distance: 0
        }, {
            type: 0,
            rot: -20,
            offset: 0,
            width: .5,
            length: .9,
            distance: 0
        }, {
            type: 0,
            rot: 0,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }]
    }), g(r, "brokenpenta", {
        barrels: [{
            type: 0,
            rot: 40,
            offset: 0,
            width: .5,
            length: .8,
            distance: 0
        }, {
            type: 0,
            rot: -20,
            offset: 0,
            width: .5,
            length: .9,
            distance: 0
        }, {
            type: 0,
            rot: 0,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: -40,
            offset: 0,
            width: .5,
            length: .8,
            distance: 0
        }, {
            type: 0,
            rot: 20,
            offset: 0,
            width: .5,
            length: .9,
            distance: 0
        }]
    }), g(r, "arc", {
        barrels: [{
            type: 0,
            rot: 45,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: -45,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: 90,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: -90,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: 0,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }]
    }), g(r, "manager", {
        barrels: [{
            type: 1,
            rot: 0,
            offset: 0,
            width: 1,
            length: 1,
            distance: 0
        }]
    }), g(r, "stockade", {
        barrels: [{
            type: 2,
            rot: 0,
            offset: 0,
            width: .65,
            length: 1,
            distance: 0
        }, {
            type: 2,
            rot: 120,
            offset: 0,
            width: .65,
            length: 1,
            distance: 0
        }, {
            type: 2,
            rot: -120,
            offset: 0,
            width: .65,
            length: 1,
            distance: 0
        }]
    }), g(r, "scrap", {
        barrels: [{
            type: 2,
            rot: 0,
            offset: 0,
            width: .45,
            length: .75,
            distance: 0
        }, {
            type: 2,
            rot: 180,
            offset: 0,
            width: .45,
            length: .75,
            distance: 0
        }, {
            type: 2,
            rot: -60,
            offset: 0,
            width: .45,
            length: .75,
            distance: 0
        }, {
            type: 2,
            rot: 60,
            offset: 0,
            width: .45,
            length: .75,
            distance: 0
        }, {
            type: 2,
            rot: -120,
            offset: 0,
            width: .45,
            length: .75,
            distance: 0
        }, {
            type: 2,
            rot: 120,
            offset: 0,
            width: .45,
            length: .75,
            distance: 0
        }]
    }), g(r, "trio", {
        barrels: [{
            type: 0,
            rot: 0,
            offset: -.5,
            width: .4,
            length: .8,
            distance: 0
        }, {
            type: 0,
            rot: 0,
            offset: .5,
            width: .4,
            length: .8,
            distance: 0
        }, {
            type: 0,
            rot: 0,
            offset: 0,
            width: .4,
            length: 1,
            distance: 0
        }]
    }), g(r, "duo", {
        barrels: [{
            type: 0,
            rot: 0,
            offset: -.5,
            width: .4,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: 0,
            offset: .5,
            width: .4,
            length: 1,
            distance: 0
        }]
    }), g(r, "executive", {
        barrels: [{
            type: 1,
            rot: 0,
            offset: 0,
            width: 1.5,
            length: 1,
            distance: 0
        }]
    }), g(r, "manufacturer", {
        barrels: [{
            type: 3,
            rot: 0,
            offset: 0,
            width: .8,
            length: 1.1,
            distance: 0
        }]
    }), g(r, "factory", {
        barrels: [{
            type: 3,
            rot: 0,
            offset: 0,
            width: .5,
            length: 1.1,
            distance: 0
        }]
    }), g(r, "hatcher", {
        barrels: [{
            type: 3,
            rot: 0,
            offset: 0,
            width: .35,
            length: .9,
            distance: 0
        }, {
            type: 3,
            rot: 120,
            offset: 0,
            width: .35,
            length: .9,
            distance: 0
        }, {
            type: 3,
            rot: -120,
            offset: 0,
            width: .35,
            length: .9,
            distance: 0
        }]
    }), g(r, "industry", {
        barrels: [{
            type: 3,
            rot: 0,
            offset: 0,
            width: .35,
            length: .9,
            distance: 0
        }, {
            type: 3,
            rot: 120,
            offset: 0,
            width: .35,
            length: .9,
            distance: 0
        }, {
            type: 3,
            rot: -120,
            offset: 0,
            width: .35,
            length: .9,
            distance: 0
        }]
    }), g(r, "alloy", {
        barrels: [{
            type: 0,
            rot: 0,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }, {
            type: 1,
            rot: 180,
            offset: 0,
            width: .5,
            length: .8,
            distance: 0
        }]
    }), g(r, "trapper", {
        barrels: [{
            type: 2,
            rot: 0,
            offset: 0,
            width: .65,
            length: 1,
            distance: 0
        }]
    }), g(r, "hex", {
        barrels: [{
            type: 0,
            rot: 0,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: 180,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: 60,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: -60,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: 120,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }, {
            type: 0,
            rot: -120,
            offset: 0,
            width: .5,
            length: 1,
            distance: 0
        }]
    }), g(r, "machine", {
        barrels: [{
            type: 0,
            rot: 0,
            offset: 0,
            width: .8,
            length: 1,
            distance: 0,
            visualType: 1
        }]
    }), g(r, "sprayer", {
        barrels: [{
            type: 0,
            rot: 0,
            offset: 0,
            width: .5,
            length: 1.2,
            distance: 0
        }, {
            type: 0,
            rot: 0,
            offset: 0,
            width: .8,
            length: 1,
            distance: 0,
            visualType: 1
        }]
    }), r), y = {
        riotautocannon: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 3,
                offsetX: 0,
                offsetY: 0,
                width: .65,
                tank: {
                    gadgets: [],
                    layers: [],
                    barrels: [{
                        type: 2,
                        rot: 0,
                        offset: 0,
                        width: .65,
                        length: 1,
                        distance: .5
                    }, {
                        type: 2,
                        rot: 0,
                        offset: 0,
                        width: .65,
                        length: 1,
                        distance: 0
                    }, {
                        type: 2,
                        rot: 0,
                        offset: 0,
                        width: .65,
                        length: 1,
                        distance: -.5
                    }]
                },
                rotationType: 1,
                baseRot: 0,
                sides: 0,
                outerSides: 0,
                outerSize: 0,
                idleBehavior: 0,
                anchored: 0,
                team: 3
            }]
        },
        octoautocannon: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .5,
                width: .25,
                baseRot: 0
            }, {
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .5,
                width: .25,
                baseRot: 0
            }, {
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .5,
                width: .25,
                baseRot: 0
            }, {
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .5,
                width: .25,
                baseRot: 0
            }, {
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .5,
                width: .25,
                baseRot: 0
            }, {
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .5,
                width: .25,
                baseRot: 0
            }, {
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .5,
                width: .25,
                baseRot: 0
            }, {
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .5,
                width: .25,
                baseRot: 0
            }]
        },
        hexagonboss: {
            sides: 6,
            outerSides: 6,
            outerSize: .1,
            layers: [{
                size: .5,
                sides: 6,
                outerSides: 6,
                outerSize: .1,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }],
            gadgets: []
        },
        base: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: []
        },
        wall: {
            sides: 6,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: []
        },
        thorn: {
            sides: 0,
            outerSides: 5,
            outerSize: .65,
            layers: [],
            gadgets: []
        },
        spike: {
            sides: 0,
            outerSides: 4,
            outerSize: .6,
            layers: [],
            gadgets: []
        },
        smasher: {
            sides: 0,
            outerSides: 6,
            outerSize: .3,
            layers: [],
            gadgets: []
        },
        bastion: {
            sides: 8,
            outerSides: 5,
            outerSize: .55,
            layers: [{
                size: .8,
                sides: 6,
                outerSides: 0,
                outerSize: 0,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }],
            gadgets: [{
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .7,
                width: .4,
                speed: 1.3,
                baseRot: 0,
                size: 1
            }]
        },
        saw: {
            sides: 0,
            outerSides: 4,
            outerSize: .85,
            layers: [],
            gadgets: []
        },
        battleship: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 1,
                rot: 180,
                offsetX: 9797174393178826e-32,
                offsetY: .8,
                width: .5,
                size: 1
            }, {
                type: 1,
                rot: 60,
                offsetX: .6928203230275509,
                offsetY: -.40000000000000013,
                width: .5,
                size: 1
            }, {
                type: 1,
                rot: -60,
                offsetX: -.6928203230275509,
                offsetY: -.40000000000000013,
                width: .5,
                size: 1
            }]
        },
        artillery: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .75,
                width: .4,
                speed: 1.3,
                baseRot: 0,
                size: 1
            }]
        },
        heliosphere: {
            sides: 3,
            outerSides: 0,
            outerSize: 0,
            layers: [{
                size: .6,
                sides: 3,
                outerSides: 0,
                outerSize: 0,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }],
            gadgets: [{
                type: 2,
                sides: 0,
                subtype: 0,
                offsetX: 0,
                offsetY: -.7,
                radius: 1.75,
                width: .15,
                alpha: .2,
                rotationType: 1,
                backSides: 0,
                rot: 0
            }, {
                type: 2,
                sides: 0,
                subtype: 0,
                offsetX: .6062177826491071,
                offsetY: .3499999999999998,
                radius: 1.75,
                width: .15,
                alpha: .2,
                rotationType: 1,
                backSides: 0,
                rot: 0
            }, {
                type: 2,
                sides: 0,
                subtype: 0,
                offsetX: -.6062177826491071,
                offsetY: .3499999999999998,
                radius: 1.75,
                width: .15,
                alpha: .2,
                rotationType: 1,
                backSides: 0,
                rot: 0
            }, {
                type: 2,
                sides: 0,
                subtype: 0,
                offsetX: 0,
                offsetY: 0,
                radius: 2,
                width: .1,
                alpha: .2,
                rotationType: 1,
                backSides: 0,
                rot: 0
            }, {
                type: 2,
                sides: 0,
                subtype: 0,
                offsetX: 0,
                offsetY: 0,
                radius: 4,
                width: .3,
                rotationType: 1,
                alpha: .3,
                backSides: 0,
                rot: 0
            }]
        },
        galaxy: {
            sides: 3,
            outerSides: 0,
            outerSize: 0,
            layers: [{
                size: .6,
                sides: 3,
                outerSides: 0,
                outerSize: 0,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }],
            gadgets: [{
                type: 0,
                offsetX: 0,
                offsetY: -.7,
                length: .15,
                width: .075,
                baseRot: 0,
                idleBehavior: 1,
                speed: 1,
                size: 1
            }, {
                type: 0,
                offsetX: .6062177826491071,
                offsetY: .3499999999999998,
                length: .15,
                width: .075,
                baseRot: 120,
                idleBehavior: 1,
                speed: 1,
                size: 1
            }, {
                type: 0,
                offsetX: -.6062177826491071,
                offsetY: .3499999999999998,
                length: .15,
                width: .075,
                baseRot: -120,
                idleBehavior: 1,
                speed: 1,
                size: 1
            }, {
                type: 0,
                offsetX: .3031088913245535,
                offsetY: -.17500000000000002,
                length: .15,
                width: .075,
                baseRot: 60,
                idleBehavior: 1,
                speed: 1,
                size: 1
            }, {
                type: 0,
                offsetX: -.3031088913245535,
                offsetY: -.17500000000000002,
                length: .15,
                width: .075,
                baseRot: -60,
                idleBehavior: 1,
                speed: 1,
                size: 1
            }, {
                type: 0,
                offsetX: 4286263797015736e-32,
                offsetY: .35,
                length: .15,
                width: .075,
                baseRot: 180,
                idleBehavior: 1,
                speed: 1,
                size: 1
            }, {
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .35,
                width: .2,
                speed: 1.25,
                baseRot: 0,
                size: 1
            }]
        },
        cygnus: {
            sides: 3,
            outerSides: 0,
            outerSize: 0,
            layers: [{
                size: .6,
                sides: 3,
                outerSides: 0,
                outerSize: 0,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }],
            gadgets: [{
                type: 2,
                sides: 8,
                subtype: 1,
                offsetX: 0,
                offsetY: 0,
                radius: 6.5,
                width: .5,
                rotationType: 1,
                alpha: .3,
                backSides: 0,
                rot: 0
            }]
        },
        comet: {
            sides: 3,
            outerSides: 3,
            outerSize: .2,
            layers: [{
                size: .35,
                sides: 3,
                outerSides: -3,
                outerSize: .5,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }],
            gadgets: []
        },
        ziggurat: {
            sides: 8,
            outerSides: 0,
            outerSize: 0,
            layers: [{
                size: .7,
                sides: 6,
                outerSides: 0,
                outerSize: 0,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }, {
                size: .4,
                sides: 4,
                outerSides: 0,
                outerSize: 0,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }],
            gadgets: []
        },
        chasm: {
            sides: 3,
            outerSides: 3,
            outerSize: .3,
            layers: [{
                size: .8,
                sides: 3,
                outerSides: 0,
                outerSize: 0,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }, {
                size: .4,
                sides: 3,
                outerSides: 0,
                outerSize: 0,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }],
            gadgets: []
        },
        andromeda: {
            sides: 3,
            outerSides: 3,
            outerSize: .15,
            layers: [{
                size: .7,
                sides: 3,
                outerSides: 3,
                outerSize: .15,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }, {
                size: .3,
                sides: 3,
                outerSides: 3,
                outerSize: .15,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }],
            gadgets: [{
                type: 2,
                sides: 3,
                backSides: 3,
                subtype: 2,
                offsetX: 0,
                offsetY: 0,
                radius: 3,
                width: .3,
                rotationType: 0,
                alpha: .3,
                rot: 0
            }]
        },
        void: {
            sides: 3,
            outerSides: 3,
            outerSize: .5,
            layers: [{
                size: .8,
                sides: 3,
                outerSides: 0,
                outerSize: 0,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }, {
                size: .4,
                sides: 3,
                outerSides: 0,
                outerSize: 0,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }],
            gadgets: []
        },
        mothership: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 1,
                rot: 45,
                offsetX: .565685424949238,
                offsetY: -.5656854249492381,
                width: .5,
                speed: 1,
                size: 1
            }, {
                type: 1,
                rot: -45,
                offsetX: -.565685424949238,
                offsetY: -.5656854249492381,
                width: .5,
                speed: 1,
                size: 1
            }, {
                type: 1,
                rot: 135,
                offsetX: .5656854249492381,
                offsetY: .565685424949238,
                width: .5,
                speed: 1,
                size: 1
            }, {
                type: 1,
                rot: -135,
                offsetX: -.5656854249492381,
                offsetY: .565685424949238,
                width: .5,
                speed: 1,
                size: 1
            }]
        },
        flare: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 2,
                sides: 0,
                subtype: 0,
                offsetX: 0,
                offsetY: 0,
                radius: 7,
                width: .85,
                rotationType: 1,
                alpha: .3,
                backSides: 0,
                rot: 0,
                showParticles: 0
            }]
        },
        bombard: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: 1,
                width: .5,
                speed: 1.3,
                baseRot: 0,
                size: 1
            }]
        },
        fabricator: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 2,
                sides: 8,
                subtype: 1,
                offsetX: 0,
                offsetY: 0,
                radius: 8,
                width: .9,
                rotationType: 1,
                alpha: .3,
                backSides: 0,
                rot: 0,
                showParticles: 0
            }]
        },
        pollux: {
            sides: 3,
            outerSides: 0,
            outerSize: 0,
            layers: [{
                offsetX: 0,
                offsetY: 0,
                rot: 0,
                size: .75,
                sides: 3,
                outerSides: 0,
                outerSize: 0
            }],
            gadgets: [{
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .4,
                width: .25,
                speed: 1.3,
                size: 1,
                baseRot: 0
            }]
        },
        castle: {
            sides: 8,
            outerSides: 8,
            outerSize: .3,
            layers: [{
                size: .7,
                sides: 8,
                outerSides: 0,
                outerSize: 0,
                rot: 0,
                offsetX: 0,
                offsetY: 0
            }],
            gadgets: [{
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .6,
                width: .35,
                speed: 1,
                baseRot: 0,
                size: 1
            }]
        },
        inferno: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 2,
                sides: 0,
                subtype: 0,
                offsetX: 0,
                offsetY: 0,
                radius: 8,
                width: .9,
                rotationType: 1,
                alpha: .3,
                backSides: 0,
                rot: 0,
                showParticles: 0
            }]
        },
        quadruplet: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 3,
                offsetX: 0,
                offsetY: 0,
                width: .65,
                tank: {
                    gadgets: [],
                    layers: [],
                    barrels: [{
                        type: 0,
                        rot: 0,
                        offset: .65,
                        width: .3,
                        length: 1,
                        distance: 0
                    }, {
                        type: 0,
                        rot: 0,
                        offset: -.65,
                        width: .3,
                        length: 1,
                        distance: 0
                    }, {
                        type: 0,
                        rot: 0,
                        offset: -.3,
                        width: .3,
                        length: .8,
                        distance: 0
                    }, {
                        type: 0,
                        rot: 0,
                        offset: .3,
                        width: .3,
                        length: .8,
                        distance: 0
                    }]
                },
                rotationType: 1,
                baseRot: 0,
                sides: 0,
                outerSides: 0,
                outerSize: 0,
                idleBehavior: 0,
                anchored: 0,
                team: 3
            }]
        },
        triplet: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 3,
                offsetX: 0,
                offsetY: 0,
                width: .6,
                tank: {
                    gadgets: [],
                    layers: [],
                    barrels: [{
                        type: 0,
                        rot: 0,
                        offset: -.5,
                        width: .4,
                        length: .8,
                        distance: 0
                    }, {
                        type: 0,
                        rot: 0,
                        offset: .5,
                        width: .4,
                        length: .8,
                        distance: 0
                    }, {
                        type: 0,
                        rot: 0,
                        offset: 0,
                        width: .4,
                        length: 1,
                        distance: 0
                    }]
                },
                rotationType: 1,
                baseRot: 0,
                sides: 0,
                outerSides: 0,
                outerSize: 0,
                idleBehavior: 0,
                anchored: 0,
                team: 3
            }]
        },
        turret: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 3,
                offsetX: 0,
                offsetY: 0,
                width: .5,
                tank: {
                    gadgets: [],
                    layers: [],
                    barrels: [{
                        type: 0,
                        rot: 0,
                        offset: -.5,
                        width: .4,
                        length: 1,
                        distance: 0
                    }, {
                        type: 0,
                        rot: 0,
                        offset: .5,
                        width: .4,
                        length: 1,
                        distance: 0
                    }]
                },
                rotationType: 1,
                baseRot: 0,
                sides: 0,
                outerSides: 0,
                outerSize: 0,
                idleBehavior: 0,
                anchored: 0,
                team: 3
            }]
        },
        sentry: {
            sides: 0,
            outerSides: 0,
            outerSize: 0,
            layers: [],
            gadgets: [{
                type: 0,
                offsetX: 0,
                offsetY: 0,
                length: .5,
                width: .25,
                baseRot: 0
            }]
        },
        fortress: {
            sides: 6,
            outerSides: 6,
            outerSize: .3,
            layers: [],
            gadgets: []
        }
    }, m = 360 * Math.random(), b = {
        default: {
            tanks: [{
                x: 0,
                y: 0,
                size: 40,
                d: 135,
                color: c.TEAM_COLORS[0],
                weapon: "split",
                body: "wall"
            }, {
                x: 400,
                y: 100,
                size: 30,
                d: -68,
                color: c.TEAM_COLORS[1],
                weapon: "mono",
                body: "base"
            }, {
                x: -700,
                y: -100,
                size: 60,
                d: 74,
                color: c.TEAM_COLORS[2],
                weapon: "annihilator",
                body: "ziggurat"
            }, {
                x: 400,
                y: -500,
                size: 60,
                d: 28,
                color: c.TEAM_COLORS[3],
                weapon: "octo",
                body: "bastion",
                autoCannonRot: [-45]
            }, {
                x: -200,
                y: 600,
                size: 50,
                d: 10,
                color: c.FALLEN_COLOR,
                weapon: "spread",
                body: "artillery",
                autoCannonRot: [170]
            }, {
                x: -900,
                y: -800,
                size: 60,
                d: 69,
                color: c.TEAM_COLORS[1],
                weapon: "marksman",
                body: "saw"
            }, {
                x: 900,
                y: 200,
                size: 100,
                d: 69,
                color: c.CELESTIAL_COLOR,
                weapon: "debris",
                body: "chasm"
            }, {
                x: -1100,
                y: 1e3,
                size: 120,
                d: 69,
                color: c.CELESTIAL_COLOR,
                weapon: "satellite",
                body: "heliosphere"
            }],
            polygons: [{
                x: 200,
                y: -300,
                level: 4,
                d: 32
            }, {
                x: 500,
                y: 750,
                level: 4,
                d: 89
            }, {
                x: -150,
                y: -250,
                level: 3,
                d: 57
            }, {
                x: -170,
                y: 800,
                level: 3,
                d: -57
            }, {
                x: -750,
                y: -600,
                level: 3,
                d: -98
            }, {
                x: -690,
                y: 100,
                level: 2,
                d: -23
            }, {
                x: -600,
                y: 180,
                level: 2,
                d: 85
            }, {
                x: 420,
                y: 520,
                level: 2,
                d: 85
            }, {
                x: 700,
                y: 700,
                level: 2,
                d: -74
            }, {
                x: 650,
                y: -700,
                level: 2,
                d: 40
            }, {
                x: 770,
                y: -90,
                level: 2,
                d: 40
            }, {
                x: -630,
                y: 670,
                level: 1,
                d: 40
            }, {
                x: -680,
                y: 600,
                level: 1,
                d: 74
            }, {
                x: -250,
                y: 1580,
                level: 1,
                d: -6
            }, {
                x: -200,
                y: 1500,
                level: 1,
                d: -49
            }, {
                x: 910,
                y: 40,
                level: 1,
                d: -49
            }, {
                x: -910,
                y: 310,
                level: 1,
                d: 32
            }, {
                x: -160,
                y: 400,
                level: 1,
                d: 74
            }, {
                x: -100,
                y: 50,
                level: 0,
                d: 32
            }, {
                x: 500,
                y: -870,
                level: 0,
                d: 79
            }, {
                x: -300,
                y: -800,
                level: 0,
                d: -82
            }, {
                x: -500,
                y: 800,
                level: 0,
                d: 4
            }, {
                x: 800,
                y: 850,
                level: 0,
                d: 2
            }, {
                x: -200,
                y: 200,
                level: 0,
                d: -32
            }, {
                x: -500,
                y: 300,
                level: 0,
                d: -32
            }, {
                x: 500,
                y: 280,
                level: 0,
                d: -84
            }, {
                x: -650,
                y: -280,
                level: 0,
                d: -84
            }, {
                x: -600,
                y: -270,
                level: 0,
                d: -24
            }, {
                x: 580,
                y: -320,
                level: 0,
                d: -24
            }],
            dimension: {
                visual: {
                    gridSize: 30,
                    backgroundColor: "#CDCDCD",
                    gridColor: "#C8C8C8",
                    particles: {
                        spawnrate: 0 / (c.CAMERA_SIZE * c.CAMERA_SIZE),
                        speed: {
                            min: 0,
                            max: 0
                        },
                        d: {
                            min: 0,
                            max: 360
                        },
                        size: {
                            min: 6,
                            max: 6
                        },
                        lifetime: {
                            min: 30,
                            max: 60
                        },
                        sides: {
                            min: 0,
                            max: 0
                        },
                        transparency: {
                            min: 1,
                            max: 1
                        },
                        color: {
                            min: "#CDCDCD",
                            max: "#C8C8C8"
                        }
                    }
                },
                bases: [],
                walls: [],
                gates: [],
                mapSize: 1500,
                trueMapSize: 1
            }
        },
        3: {
            tanks: [{
                x: -800,
                y: -300,
                size: 36,
                d: 59,
                color: c.TEAM_COLORS[0],
                weapon: "split",
                body: "wall"
            }, {
                x: -350,
                y: 20,
                size: 34,
                d: 97,
                color: c.TEAM_COLORS[0],
                weapon: "duo",
                body: "turret",
                autoCannonRot: [95]
            }, {
                x: -630,
                y: -450,
                size: 46,
                d: 52,
                color: c.TEAM_COLORS[0],
                weapon: "horizon",
                body: "fabricator"
            }, {
                x: -1030,
                y: 1050,
                size: 45,
                d: 128,
                color: c.TEAM_COLORS[0],
                weapon: "engineer",
                body: "castle",
                autoCannonRot: [-153]
            }, {
                x: -150,
                y: -20,
                size: 53,
                d: 84,
                color: c.TEAM_COLORS[0],
                weapon: "streamliner",
                body: "saw"
            }, {
                x: -200,
                y: 180,
                size: 48,
                d: 96,
                color: c.TEAM_COLORS[0],
                weapon: "quadro",
                body: "ziggurat"
            }, {
                x: -190,
                y: -200,
                size: 51,
                d: 79,
                color: c.TEAM_COLORS[0],
                weapon: "annihilator",
                body: "bastion",
                autoCannonRot: [86]
            }, {
                x: -400,
                y: -500,
                size: 45,
                d: 79,
                color: c.TEAM_COLORS[0],
                weapon: "emperor",
                body: "mothership"
            }, {
                x: -300,
                y: 260,
                size: 45,
                d: 67,
                color: c.TEAM_COLORS[0],
                weapon: "manager",
                body: "castle",
                autoCannonRot: [108]
            }, {
                x: -300,
                y: 400,
                size: 42,
                d: 114,
                color: c.TEAM_COLORS[0],
                weapon: "wake",
                body: "thorn"
            }, {
                x: -600,
                y: 500,
                size: 53,
                d: 114,
                color: c.TEAM_COLORS[0],
                weapon: "executive",
                body: "ziggurat"
            }, {
                x: -1e3,
                y: 400,
                size: 48,
                d: 112,
                color: c.TEAM_COLORS[0],
                weapon: "marksman",
                body: "saw"
            }, {
                x: -1100,
                y: -200,
                size: 48,
                d: 85,
                color: c.TEAM_COLORS[0],
                weapon: "assassin",
                body: "thorn"
            }, {
                x: -300,
                y: -400,
                size: 42,
                d: 114,
                color: c.TEAM_COLORS[0],
                weapon: "gunner",
                body: "artillery",
                autoCannonRot: [68]
            }, {
                x: -390,
                y: -150,
                size: 42,
                d: 78,
                color: c.TEAM_COLORS[0],
                weapon: "beta",
                body: "thorn"
            }, {
                x: -590,
                y: 20,
                size: 46,
                d: 99,
                color: c.TEAM_COLORS[0],
                weapon: "octo",
                body: "quadruplet",
                autoCannonRot: [-153, -77, -9, -2]
            }, {
                x: 1200,
                y: -50,
                size: 60,
                d: -96,
                color: c.TEAM_COLORS[1],
                weapon: "riot",
                body: "inferno"
            }, {
                x: 150,
                y: 20,
                size: 53,
                d: -96,
                color: c.TEAM_COLORS[1],
                weapon: "alpha",
                body: "saw"
            }, {
                x: 150,
                y: -180,
                size: 53,
                d: -79,
                color: c.TEAM_COLORS[1],
                weapon: "minigun",
                body: "ziggurat"
            }, {
                x: 190,
                y: 180,
                size: 53,
                d: -98,
                color: c.TEAM_COLORS[1],
                weapon: "amalgam",
                body: "bastion"
            }, {
                x: 500,
                y: 100,
                size: 49,
                d: -153,
                color: c.TEAM_COLORS[1],
                weapon: "palisade",
                body: "bombard",
                autoCannonRot: [-102]
            }, {
                x: 500,
                y: -200,
                size: 39,
                d: -93,
                color: c.TEAM_COLORS[1],
                weapon: "trio",
                body: "triplet",
                autoCannonRot: [167]
            }, {
                x: 600,
                y: 230,
                size: 42,
                d: -68,
                color: c.TEAM_COLORS[1],
                weapon: "stockade",
                body: "artillery",
                autoCannonRot: [-116]
            }, {
                x: 300,
                y: 400,
                size: 48,
                d: 79,
                color: c.TEAM_COLORS[1],
                weapon: "penta",
                body: "saw"
            }, {
                x: 300,
                y: -400,
                size: 42,
                d: -63,
                color: c.TEAM_COLORS[1],
                weapon: "arc",
                body: "artillery",
                autoCannonRot: [-98]
            }, {
                x: 150,
                y: -600,
                size: 52,
                d: -29,
                color: c.TEAM_COLORS[1],
                weapon: "marksman",
                body: "bombard",
                autoCannonRot: [-73]
            }, {
                x: 1e3,
                y: 600,
                size: 50,
                d: -101,
                color: c.TEAM_COLORS[1],
                weapon: "marksman",
                body: "saw"
            }, {
                x: 150,
                y: 600,
                size: 40,
                d: -136,
                color: c.TEAM_COLORS[1],
                weapon: "assassin",
                body: "artillery",
                autoCannonRot: [-119]
            }],
            polygons: [{
                x: -680,
                y: -220,
                d: 98,
                level: 2
            }, {
                x: -950,
                y: -520,
                d: 98,
                level: 1
            }, {
                x: -1020,
                y: -560,
                d: 42,
                level: 1
            }, {
                x: -1e3,
                y: -460,
                d: 42,
                level: 0
            }, {
                x: -950,
                y: 100,
                d: -101,
                level: 5
            }, {
                x: -600,
                y: 250,
                d: 77,
                level: 4
            }, {
                x: -400,
                y: 1e3,
                d: 77,
                level: 7
            }, {
                x: 1e3,
                y: 2e3,
                d: 77,
                level: 10
            }, {
                x: 650,
                y: -600,
                d: -80,
                level: 6
            }, {
                x: 580,
                y: 650,
                d: -80,
                level: 4
            }, {
                x: -1050,
                y: 720,
                d: 98,
                level: 1
            }, {
                x: -1080,
                y: 820,
                d: 161,
                level: 1
            }, {
                x: -1120,
                y: 760,
                d: 42,
                level: 0
            }, {
                x: -1100,
                y: 660,
                d: 42,
                level: 0
            }, {
                x: -800,
                y: -1500,
                d: 77,
                level: 9
            }, {
                x: 800,
                y: -1500,
                d: 149,
                level: 8
            }],
            dimension: {
                visual: {
                    gridSize: 30,
                    backgroundColor: "#CDCDCD",
                    gridColor: "#C8C8C8",
                    particles: {
                        spawnrate: 0 / (c.CAMERA_SIZE * c.CAMERA_SIZE),
                        speed: {
                            min: 0,
                            max: 0
                        },
                        d: {
                            min: 0,
                            max: 360
                        },
                        size: {
                            min: 6,
                            max: 6
                        },
                        lifetime: {
                            min: 30,
                            max: 60
                        },
                        sides: {
                            min: 0,
                            max: 0
                        },
                        transparency: {
                            min: 1,
                            max: 1
                        },
                        color: {
                            min: "#CDCDCD",
                            max: "#C8C8C8"
                        }
                    }
                },
                bases: [],
                walls: [],
                gates: [],
                mapSize: 1500,
                trueMapSize: 1
            }
        },
        2: {
            polygons: [{
                x: -680,
                y: -220,
                d: 23,
                level: 2
            }, {
                x: 680,
                y: 520,
                d: 98,
                level: 2
            }, {
                x: -820,
                y: 500,
                d: 5,
                level: 0
            }, {
                x: -880,
                y: -420,
                d: 156,
                level: 0
            }, {
                x: -680,
                y: 1020,
                d: 23,
                level: 0
            }, {
                x: -780,
                y: 1090,
                d: 89,
                level: 0
            }, {
                x: -780,
                y: 890,
                d: 156,
                level: 1
            }, {
                x: 880,
                y: -620,
                d: 98,
                level: 7
            }, {
                x: 180,
                y: -920,
                d: 8,
                level: 6
            }, {
                x: 1280,
                y: -120,
                d: 49,
                level: 5
            }, {
                x: 900,
                y: 230,
                d: 156,
                level: 4
            }, {
                x: -200,
                y: -220,
                d: 8,
                level: 3
            }, {
                x: 200,
                y: -520,
                d: 98,
                level: 3
            }, {
                x: 600,
                y: -1020,
                d: 32,
                level: 3
            }, {
                x: -200,
                y: -720,
                d: 156,
                level: 2
            }],
            tanks: [{
                x: -1100,
                y: -500,
                size: 36,
                d: -76,
                color: c.TEAM_COLORS[0],
                weapon: "split",
                body: "wall"
            }, {
                x: 1e3,
                y: -100,
                size: 45,
                d: 81,
                color: c.FALLEN_COLOR,
                weapon: "hex",
                body: "base"
            }, {
                x: -200,
                y: -1150,
                size: 45,
                d: 52,
                color: c.FALLEN_COLOR,
                weapon: "sprayer",
                body: "base"
            }, {
                x: 900,
                y: 650,
                size: 30,
                d: 95,
                color: c.TEAM_COLORS[0],
                weapon: "factory",
                body: "base"
            }, {
                x: 450,
                y: -400,
                size: 52,
                d: 104,
                color: c.TEAM_COLORS[0],
                weapon: "riot",
                body: "riotautocannon",
                autoCannonRot: [-107]
            }, {
                x: 0,
                y: -0,
                size: 30,
                d: -25,
                color: c.TEAM_COLORS[0],
                weapon: "octo",
                body: "octoautocannon",
                autoCannonRot: [75, 165, 255, 345, 210, 120, 300, 30]
            }, {
                x: -1500,
                y: 1500,
                size: 46,
                d: 129,
                color: c.TEAM_COLORS[0],
                weapon: "brokenpenta",
                body: "base"
            }, {
                x: 1100,
                y: -1150,
                size: 132,
                d: -50,
                color: c.POLYGON_COLORS[3],
                weapon: "hexagonboss",
                body: "hexagonboss"
            }],
            dimension: {
                visual: {
                    gridSize: 30,
                    backgroundColor: "#CDCDCD",
                    gridColor: "#C8C8C8",
                    particles: {
                        spawnrate: 0 / (c.CAMERA_SIZE * c.CAMERA_SIZE),
                        speed: {
                            min: 0,
                            max: 0
                        },
                        d: {
                            min: 0,
                            max: 360
                        },
                        size: {
                            min: 6,
                            max: 6
                        },
                        lifetime: {
                            min: 30,
                            max: 60
                        },
                        sides: {
                            min: 0,
                            max: 0
                        },
                        transparency: {
                            min: 1,
                            max: 1
                        },
                        color: {
                            min: "#CDCDCD",
                            max: "#C8C8C8"
                        }
                    }
                },
                bases: [{
                    width: .5,
                    height: .5,
                    x: .2,
                    y: .2,
                    team: 10
                }],
                walls: [],
                gates: [],
                mapSize: 9e3,
                trueMapSize: 1
            }
        },
        1: {
            tanks: [{
                x: 400,
                y: -300,
                size: 51,
                d: -57,
                color: c.TEAM_COLORS[0],
                weapon: "arsenal",
                body: "ziggurat"
            }, {
                x: 300,
                y: -330,
                size: 42,
                d: -44,
                color: c.TEAM_COLORS[0],
                weapon: "spread",
                body: "triplet",
                autoCannonRot: [-44]
            }, {
                x: 700,
                y: -200,
                size: 51,
                d: -83,
                color: c.TEAM_COLORS[0],
                weapon: "manufacturer",
                body: "saw"
            }, {
                x: 600,
                y: -500,
                size: 36,
                d: -156,
                color: c.TEAM_COLORS[0],
                weapon: "split",
                body: "wall"
            }, {
                x: 600,
                y: -500,
                size: 36,
                d: -156,
                color: c.TEAM_COLORS[0],
                weapon: "split",
                body: "wall"
            }, {
                x: 1200,
                y: -700,
                size: 55,
                d: -69,
                color: c.TEAM_COLORS[0],
                weapon: "marksman",
                body: "saw"
            }, {
                x: -350,
                y: -280,
                size: 51,
                d: 94,
                color: c.TEAM_COLORS[1],
                weapon: "palisade",
                body: "bombard",
                autoCannonRot: [53]
            }, {
                x: -750,
                y: -480,
                size: 54,
                d: -53,
                color: c.TEAM_COLORS[1],
                weapon: "penta",
                body: "saw",
                autoCannonRot: [53]
            }, {
                x: -50,
                y: -580,
                size: 42,
                d: 8,
                color: c.TEAM_COLORS[1],
                weapon: "assassin",
                body: "artillery",
                autoCannonRot: [53]
            }, {
                x: -150,
                y: -400,
                size: 42,
                d: 21,
                color: c.TEAM_COLORS[1],
                weapon: "trio",
                body: "castle",
                autoCannonRot: [53]
            }, {
                x: -1100,
                y: -500,
                size: 56,
                d: -111,
                color: c.TEAM_COLORS[1],
                weapon: "disperse",
                body: "bombard",
                autoCannonRot: [-121]
            }, {
                x: 380,
                y: 370,
                size: 51,
                d: 128,
                color: c.TEAM_COLORS[2],
                weapon: "shrapnel",
                body: "inferno",
                autoCannonRot: [53]
            }, {
                x: 230,
                y: 470,
                size: 42,
                d: 179,
                color: c.TEAM_COLORS[2],
                weapon: "overlord",
                body: "battleship",
                autoCannonRot: [53]
            }, {
                x: 530,
                y: 770,
                size: 53,
                d: -103,
                color: c.TEAM_COLORS[2],
                weapon: "wave",
                body: "saw",
                autoCannonRot: [53]
            }, {
                x: 430,
                y: 220,
                size: 41,
                d: -103,
                color: c.TEAM_COLORS[2],
                weapon: "gunner",
                body: "artillery",
                autoCannonRot: [143]
            }, {
                x: 380,
                y: 120,
                size: 30,
                d: -103,
                color: c.TEAM_COLORS[2],
                weapon: "trapper",
                body: "smasher",
                autoCannonRot: [143]
            }, {
                x: 1100,
                y: 780,
                size: 60,
                d: -23,
                color: c.TEAM_COLORS[2],
                weapon: "annihilator",
                body: "saw"
            }, {
                x: -420,
                y: 340,
                size: 51,
                d: 128,
                color: c.TEAM_COLORS[3],
                weapon: "riot",
                body: "saw",
                autoCannonRot: [53]
            }, {
                x: -470,
                y: 180,
                size: 46,
                d: 100,
                color: c.TEAM_COLORS[3],
                weapon: "annihilator",
                body: "bombard",
                autoCannonRot: [163]
            }, {
                x: -670,
                y: 780,
                size: 56,
                d: 100,
                color: c.TEAM_COLORS[3],
                weapon: "marksman",
                body: "bastion",
                autoCannonRot: [163]
            }, {
                x: -220,
                y: 380,
                size: 36,
                d: 124,
                color: c.TEAM_COLORS[3],
                weapon: "alloy",
                body: "fortress"
            }, {
                x: -820,
                y: 120,
                size: 31,
                d: 168,
                color: c.TEAM_COLORS[3],
                weapon: "mono",
                body: "sentry",
                autoCannonRot: [163]
            }, {
                x: -1080,
                y: 520,
                size: 52,
                d: -73,
                color: c.TEAM_COLORS[3],
                weapon: "horizon",
                body: "ziggurat"
            }, {
                x: 1e3,
                y: 1100,
                size: 122,
                d: -131,
                color: c.CELESTIAL_COLOR,
                weapon: "synope",
                body: "void"
            }],
            polygons: [{
                x: 0,
                y: 0,
                d: 98,
                level: 7
            }, {
                x: -800,
                y: -50,
                d: 98,
                level: 4
            }, {
                x: 480,
                y: -750,
                d: 130,
                level: 5
            }, {
                x: 250,
                y: -810,
                d: 130,
                level: 2
            }, {
                x: 20,
                y: 1050,
                d: 72,
                level: 6
            }, {
                x: -420,
                y: -920,
                d: -111,
                level: 6
            }, {
                x: 920,
                y: 650,
                d: -111,
                level: 3
            }, {
                x: 970,
                y: 520,
                d: 23,
                level: 2
            }, {
                x: -100,
                y: -900,
                d: 86,
                level: 3
            }, {
                x: -300,
                y: 900,
                d: 86,
                level: 2
            }, {
                x: -340,
                y: 1e3,
                d: 98,
                level: 1
            }, {
                x: -440,
                y: 950,
                d: 123,
                level: 0
            }, {
                x: -540,
                y: 1010,
                d: 23,
                level: 0
            }, {
                x: 850,
                y: 20,
                d: 111,
                level: 2
            }],
            dimension: {
                visual: {
                    gridSize: 30,
                    backgroundColor: "#CDCDCD",
                    gridColor: "#C8C8C8",
                    particles: {
                        spawnrate: 0 / (c.CAMERA_SIZE * c.CAMERA_SIZE),
                        speed: {
                            min: 0,
                            max: 0
                        },
                        d: {
                            min: 0,
                            max: 360
                        },
                        size: {
                            min: 6,
                            max: 6
                        },
                        lifetime: {
                            min: 30,
                            max: 60
                        },
                        sides: {
                            min: 0,
                            max: 0
                        },
                        transparency: {
                            min: 1,
                            max: 1
                        },
                        color: {
                            min: "#CDCDCD",
                            max: "#C8C8C8"
                        }
                    }
                },
                bases: [],
                walls: [],
                gates: [],
                mapSize: 1500,
                trueMapSize: 1
            }
        },
        0: {
            tanks: [{
                x: -800,
                y: -500,
                size: 36,
                d: 59,
                color: c.TEAM_COLORS[1],
                weapon: "split",
                body: "wall"
            }, {
                x: -1e3,
                y: -650,
                size: 42,
                d: 59,
                color: c.TEAM_COLORS[1],
                weapon: "beta",
                body: "thorn"
            }, {
                x: -600,
                y: 150,
                size: 50,
                d: 110,
                color: c.TEAM_COLORS[1],
                weapon: "alpha",
                body: "saw"
            }, {
                x: -150,
                y: -600,
                size: 50,
                d: 19,
                color: c.TEAM_COLORS[1],
                weapon: "annihilator",
                body: "ziggurat"
            }, {
                x: 500,
                y: 300,
                size: 45,
                d: 19,
                color: c.TEAM_COLORS[1],
                weapon: "emperor",
                body: "mothership"
            }, {
                x: 850,
                y: 200,
                size: 53,
                d: -70,
                color: c.TEAM_COLORS[1],
                weapon: "wave",
                body: "saw"
            }, {
                x: 50,
                y: 600,
                size: 40,
                d: 171,
                color: c.TEAM_COLORS[1],
                weapon: "barricade",
                body: "flare"
            }, {
                x: 450,
                y: -500,
                size: 53,
                d: -102,
                color: c.TEAM_COLORS[1],
                weapon: "disperse",
                body: "ziggurat"
            }, {
                x: -900,
                y: 600,
                size: 53,
                d: 118,
                color: c.TEAM_COLORS[1],
                weapon: "marksman",
                body: "saw"
            }, {
                x: 1e3,
                y: 500,
                size: 53,
                d: -108,
                color: c.TEAM_COLORS[1],
                weapon: "marksman",
                body: "bastion",
                autoCannonRot: [-153]
            }, {
                x: 1200,
                y: -600,
                size: 53,
                d: -121,
                color: c.TEAM_COLORS[1],
                weapon: "palisade",
                body: "bombard",
                autoCannonRot: [-61]
            }, {
                x: 0,
                y: 0,
                size: 100,
                d: 10,
                color: c.CELESTIAL_COLOR,
                weapon: "pulsar",
                body: "chasm"
            }, {
                x: -700,
                y: -900,
                size: 122,
                d: 10,
                color: c.CELESTIAL_COLOR,
                weapon: "blazar",
                body: "pollux",
                autoCannonRot: [58]
            }, {
                x: -100,
                y: -1100,
                size: 122,
                d: 47,
                color: c.CELESTIAL_COLOR,
                weapon: "synope",
                body: "void"
            }, {
                x: 600,
                y: -950,
                size: 122,
                d: 150,
                color: c.CELESTIAL_COLOR,
                weapon: "charon",
                body: "comet"
            }, {
                x: 700,
                y: 950,
                size: 122,
                d: 150,
                color: c.CELESTIAL_COLOR,
                weapon: "moon",
                body: "void"
            }, {
                x: -300,
                y: 900,
                size: 122,
                d: -35,
                color: c.CELESTIAL_COLOR,
                weapon: "quasar",
                body: "galaxy",
                autoCannonRot: [136, 136, 136, 136, 136, 136, -21]
            }],
            polygons: [{
                x: -1200,
                y: 100,
                level: 7,
                d: 127
            }, {
                x: 700,
                y: -200,
                level: 6,
                d: 32
            }, {
                x: -650,
                y: -150,
                level: 5,
                d: 172
            }, {
                x: -250,
                y: -50,
                level: 1,
                d: 172
            }, {
                x: -300,
                y: 10,
                level: 0,
                d: -120
            }, {
                x: -330,
                y: -70,
                level: 1,
                d: 114
            }, {
                x: 250,
                y: -200,
                level: 3,
                d: 18
            }, {
                x: 150,
                y: 800,
                level: 2,
                d: 114
            }, {
                x: -450,
                y: -550,
                level: 4,
                d: -64
            }, {
                x: -680,
                y: -420,
                level: 2,
                d: -64
            }],
            dimension: {
                visual: {
                    gridSize: 30,
                    backgroundColor: "#CDCDCD",
                    gridColor: "#C8C8C8",
                    particles: {
                        spawnrate: 0 / (c.CAMERA_SIZE * c.CAMERA_SIZE),
                        speed: {
                            min: 0,
                            max: 0
                        },
                        d: {
                            min: 0,
                            max: 360
                        },
                        size: {
                            min: 6,
                            max: 6
                        },
                        lifetime: {
                            min: 30,
                            max: 60
                        },
                        sides: {
                            min: 0,
                            max: 0
                        },
                        transparency: {
                            min: 1,
                            max: 1
                        },
                        color: {
                            min: "#CDCDCD",
                            max: "#C8C8C8"
                        }
                    }
                },
                bases: [],
                walls: [],
                gates: [],
                mapSize: 1500,
                trueMapSize: 1
            }
        },
        "-1": {
            polygons: [],
            tanks: [{
                x: 0,
                y: 0,
                size: 400,
                d: 135,
                color: c.CELESTIAL_COLOR,
                weapon: "ganymede",
                body: "andromeda"
            }, {
                x: 900,
                y: 200,
                size: 100,
                d: 69,
                color: c.CELESTIAL_COLOR,
                weapon: "debris",
                body: "chasm"
            }, {
                x: -700,
                y: -600,
                size: 120,
                d: 35,
                color: c.CELESTIAL_COLOR,
                weapon: "satellite",
                body: "galaxy"
            }, {
                x: -840,
                y: 400,
                size: 120,
                d: -72,
                color: c.CELESTIAL_COLOR,
                weapon: "synope",
                body: "void"
            }],
            dimension: {
                visual: {
                    gridSize: 30,
                    backgroundColor: "#595959",
                    gridColor: "#4E4D4D",
                    particles: {
                        spawnrate: .5 / (c.CAMERA_SIZE * c.CAMERA_SIZE),
                        speed: {
                            min: 2,
                            max: 5
                        },
                        d: {
                            min: 0 + m,
                            max: 90 + m
                        },
                        size: {
                            min: 4,
                            max: 8
                        },
                        lifetime: {
                            min: 30,
                            max: 60
                        },
                        sides: {
                            min: 0,
                            max: 0
                        },
                        transparency: {
                            min: 1,
                            max: 1
                        },
                        color: {
                            min: "#595959",
                            max: "#4E4D4D"
                        }
                    }
                },
                bases: [{
                    width: .5,
                    height: .5,
                    x: 0,
                    y: 0,
                    team: 2
                }],
                walls: [],
                gates: [],
                mapSize: 3e3,
                trueMapSize: 1
            }
        },
        "-2": {
            tanks: [{
                x: 60,
                y: -60,
                size: 54,
                d: 135,
                color: c.TEAM_COLORS[0],
                weapon: "disperse",
                body: "ziggurat"
            }, {
                x: -60,
                y: 60,
                size: 54,
                d: 315,
                color: c.TEAM_COLORS[0],
                weapon: "minigun",
                body: "quadruplet",
                autoCannonRot: [87]
            }, {
                x: 400,
                y: 100,
                size: 40,
                d: -110,
                color: c.TEAM_COLORS[1],
                weapon: "assassin",
                body: "artillery",
                autoCannonRot: [170]
            }, {
                x: -600,
                y: -100,
                size: 62,
                d: 74,
                color: c.TEAM_COLORS[2],
                weapon: "annihilator",
                body: "ziggurat"
            }, {
                x: -100,
                y: -450,
                size: 50,
                d: 10,
                color: c.FALLEN_COLOR,
                weapon: "spread",
                body: "artillery",
                autoCannonRot: [170]
            }, {
                x: 600,
                y: -600,
                size: 62,
                d: 28,
                color: c.TEAM_COLORS[3],
                weapon: "octo",
                body: "bastion",
                autoCannonRot: [-45]
            }, {
                x: 900,
                y: -730,
                size: 60,
                d: -69,
                color: c.TEAM_COLORS[1],
                weapon: "marksman",
                body: "saw"
            }, {
                x: 800,
                y: 400,
                size: 150,
                d: 69,
                color: c.CELESTIAL_COLOR,
                weapon: "charon",
                body: "comet"
            }, {
                x: -700,
                y: -600,
                size: 120,
                d: 35,
                color: c.CELESTIAL_COLOR,
                weapon: "satellite",
                body: "galaxy"
            }, {
                x: -840,
                y: 400,
                size: 120,
                d: -72,
                color: c.CELESTIAL_COLOR,
                weapon: "synope",
                body: "void"
            }],
            polygons: [],
            dimension: {
                visual: {
                    gridSize: 120,
                    showMinimap: !1,
                    backgroundColor: "#303030",
                    gridColor: "#232323",
                    wallColor: "#00000054",
                    particles: {
                        spawnrate: .45 / (c.CAMERA_SIZE * c.CAMERA_SIZE),
                        speed: {
                            min: 8,
                            max: 15
                        },
                        d: {
                            min: 0 + m,
                            max: 90 + m
                        },
                        size: {
                            min: 40,
                            max: 150
                        },
                        lifetime: {
                            min: 30,
                            max: 60
                        },
                        sides: {
                            min: 0,
                            max: 0
                        },
                        transparency: {
                            min: .5,
                            max: .8
                        },
                        color: {
                            min: "#595959",
                            max: "#4E4D4D"
                        }
                    },
                    darkness: {
                        intensity: 1,
                        color: "#000000"
                    },
                    lights: [{
                        x: 0,
                        y: 0,
                        size: 300,
                        d: 0,
                        sides: 0,
                        transparency: 1
                    }, {
                        x: 800,
                        y: -400,
                        size: 180,
                        d: 0,
                        sides: 0,
                        transparency: .5
                    }, {
                        x: -700,
                        y: 600,
                        size: 180,
                        d: 0,
                        sides: 0,
                        transparency: .5
                    }, {
                        x: -840,
                        y: -400,
                        size: 225,
                        d: 0,
                        sides: 0,
                        transparency: .5
                    }, {
                        x: 600,
                        y: 600,
                        size: 180,
                        d: 0,
                        sides: 0,
                        transparency: .5
                    }]
                },
                bases: [],
                walls: [],
                gates: [],
                mapSize: 3e3,
                trueMapSize: 1
            }
        }
    }, E = 0, O = Object.values(v); E < O.length; E++) {
        var w, T = p(O[E].barrels);
        try {
            for (T.s(); !(w = T.n()).done;) {
                var S = w.value;
                S.rot = Object(h.degreesToRadians)(S.rot)
            }
        } catch (e) {
            T.e(e)
        } finally {
            T.f()
        }
    }
    for (var A = 0, M = Object.values(y); A < M.length; A++) {
        var x, k = p(M[A].gadgets);
        try {
            for (k.s(); !(x = k.n()).done;) {
                var C = x.value;
                C.rot && (C.rot = Object(h.degreesToRadians)(C.rot)), C.baseRot && (C.baseRot = Object(h.degreesToRadians)(C.baseRot))
            }
        } catch (e) {
            k.e(e)
        } finally {
            k.f()
        }
    }
    for (var R = 0, I = Object.values(b); R < I.length; R++) {
        var L, D = I[R],
            P = p(D.tanks);
        try {
            for (P.s(); !(L = P.n()).done;) {
                var B = L.value,
                    N = v[B.weapon],
                    j = y[B.body];
                B.barrels = Object(o.cloneDeep)(N.barrels), B.sides = j.sides, B.outerSides = j.outerSides, B.outerSize = j.outerSize, B.layers = Object(o.cloneDeep)(j.layers), B.gadgets = Object(o.cloneDeep)(j.gadgets), B.d = Object(h.degreesToRadians)(B.d), B.autoCannonRot || (B.autoCannonRot = []);
                for (var U = 0; U < B.gadgets.length; U++) {
                    var z = B.gadgets[U];
                    0 != z.type && 3 != z.type || null != B.autoCannonRot[U] && (z.rot = Object(h.degreesToRadians)(B.autoCannonRot[U]))
                }
            }
        } catch (e) {
            P.e(e)
        } finally {
            P.f()
        }
        var W, K = p(D.polygons);
        try {
            for (K.s(); !(W = K.n()).done;) {
                var G = W.value;
                G.d = Object(h.degreesToRadians)(G.d)
            }
        } catch (e) {
            K.e(e)
        } finally {
            K.f()
        }
        D.rifts || (D.rifts = []);
        var Y, F = p(D.rifts);
        try {
            for (F.s(); !(Y = F.n()).done;) {
                var H = Y.value;
                H.d = Object(h.degreesToRadians)(H.d), H.y = -H.y
            }
        } catch (e) {
            F.e(e)
        } finally {
            F.f()
        }
    }
    var V = n(4),
        X = n(3);

    function q(e) {
        return function (e) {
            if (Array.isArray(e)) return Q(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || $(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Z(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, a, o = [],
                i = !0,
                s = !1;
            try {
                for (n = n.call(e); !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); i = !0);
            } catch (e) {
                s = !0, a = e
            } finally {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
            return o
        }(e, t) || $(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function J(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = $(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    a = function () { };
                return {
                    s: a,
                    n: function () {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, i = !0,
            s = !1;
        return {
            s: function () {
                n = n.call(e)
            },
            n: function () {
                var e = n.next();
                return i = e.done, e
            },
            e: function (e) {
                s = !0, o = e
            },
            f: function () {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }

    function $(e, t) {
        if (e) {
            if ("string" == typeof e) return Q(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Q(e, t) : void 0
        }
    }

    function Q(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var ee = n(0),
        te = document.getElementById("ping"),
        ne = document.getElementById("server-tick-time"),
        re = document.getElementById("client-tick-time"),
        ae = document.getElementById("fps"),
        oe = document.getElementById("player-count"),
        ie = document.getElementById("total-players"),
        se = document.getElementById("extra-performance-info"),
        le = document.getElementById("position"),
        ue = document.getElementById("server-name"),
        ce = (document.getElementById("server-speed"), document.getElementById("chat")),
        de = Array.from(document.getElementsByClassName("hud")),
        fe = !0,
        he = !1,
        pe = !1,
        _e = !1,
        ge = [],
        ve = [],
        ye = 0,
        me = "",
        be = "",
        Ee = 0,
        Oe = null,
        we = null;

    function Te(e, t) {
        console.log("RECEIVED ANNOUNCEMENT: ".concat(e, ", ").concat(t)), me = e, be = t, Ee = c.ANNOUNCEMENT_STAY_TIME, Oe = null, we = null
    }

    function Se() {
        Ee = 0
    }
    var Ae = 0,
        Me = 0,
        xe = "";

    function ke(e, t) {
        console.log("RECEIVED TIMER: ".concat(e, " ").concat(t, " seconds")), Ae = t, Me = t, xe = e
    }

    function Ce() {
        Ae = 0, xe = ""
    }

    function Re(e) {
        he = !0, pe = e, ve = ge, ge = [], tr = []
    }

    function Ie(e) {
        (fe = e) ? (clearTimeout(void 0), de.forEach((function (e) {
            e.classList.remove("hidden")
        }))) : (clearTimeout(void 0), de.forEach((function (e) {
            e.classList.add("hidden")
        })))
    }
    var Le = !0;

    function De(e) {
        (Le = e) && X.g.showChat ? ce.classList.remove("hidden") : ce.classList.add("hidden")
    }
    var Pe, Be, Ne = !0,
        je = 0,
        Ue = 0,
        ze = 0,
        We = 0,
        Ke = 0,
        Ge = 0,
        Ye = !1,
        Fe = c.TEAM_COLORS[10],
        He = [],
        Ve = "main",
        Xe = "default",
        qe = 0,
        Ze = 1,
        Je = 1,
        $e = {},
        Qe = -400;

    function et(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        qe = Xe, Ze = 0, Je = t, Xe = e
    }

    function tt(e, t) {
        Nn = e, Un = t, jn = 0
    }
    var nt = Date.now(),
        rt = performance.now(),
        at = 16.6666667,
        ot = null,
        it = document.getElementById("overlay-canvas"),
        st = document.getElementById("darkness-canvas"),
        lt = document.getElementById("render-canvas"),
        ut = document.getElementById("hud-canvas"),
        ct = document.getElementById("ui-canvas"),
        dt = document.getElementById("game-canvas"),
        ft = document.getElementById("server-select-canvas"),
        ht = dt.getContext("2d"),
        pt = it.getContext("2d"),
        _t = st.getContext("2d"),
        gt = lt.getContext("2d"),
        vt = ut.getContext("2d"),
        yt = ct.getContext("2d"),
        mt = ft.getContext("2d"),
        bt = ht,
        Et = 0,
        Ot = 0,
        wt = !1;
    ft.addEventListener("mousemove", (function (e) {
        Et = e.offsetX, Ot = e.offsetY
    })), ft.addEventListener("mousedown", (function (e) {
        Et = e.offsetX, Ot = e.offsetY, wt = !0
    })), window.addEventListener("click", (function (e) {
        e.target != ft && (zn = !1)
    }));
    var Tt = 1,
        St = 1,
        At = 0,
        Mt = 0,
        xt = ee.MAP_SIZE,
        kt = 1,
        Ct = 0,
        Rt = 0;

    function It(e) {
        Be = Object(i.f)(e);
        for (var t = 0; t < Be.gadgets.length; t++) {
            Be.gadgets[t].animTime = 0
        }
        for (var n = 0; n < Be.barrels.length; n++) {
            Be.barrels[n].animTime = 0
        }
    }

    function Lt(e) {
        e = Object(f.k)(Ue, e), Ue = je, je = Math.round(10 * e) / 10
    }

    function Dt() {
        Jt = !1;
        var e = Date.now();
        rt = performance.now(), at = (e - nt) / 1e3, nt = e;
        var t = performance.now();
        try {
            Object(f.F)(at),
                function (e) {
                    He.forEach((function (t) {
                        if (t.lifetime -= e, t.x += 60 * t.xVel * e, t.y += 60 * t.yVel * e, 1 != t.friction) {
                            var n = 1 - 60 * (1 - t.friction) * e;
                            t.xVel *= n, t.yVel *= n
                        }
                        t.lifetime < 0 && He.splice(He.indexOf(t), 1)
                    }))
                }(at), vr(at);
            e: if (Ne) {
                var n = Object(i.c)();
                if (n == {} || null == n) return;
                var r = n.tanks,
                    a = n.polygons,
                    d = n.bullets,
                    p = n.rifts,
                    _ = n.mapSize,
                    g = (n.tickTime, n.x),
                    v = n.y;
                if (null != _) St = Object(h.damp)(St, 2 * ee.CAMERA_SIZE, .05, at), Tt = St / Math.max(dt.height, dt.width), kt = ee.STROKE_SIZE / Tt, null != g && null != v && (At = Object(h.damp)(At, g, .2, at) + pr, Mt = Object(h.damp)(Mt, v, .2, at) + _r), xt = _, Vr(), Ut(a, r, d, p, null), bt = ht;
                else {
                    St = Object(h.damp)(St, (Ze < .5 && Ze > .4 ? .1 : 1) * ee.CAMERA_SIZE, .05, at), Tt = St / Math.max(dt.height, dt.width);
                    var y = e / 7500,
                        m = Ze;
                    Ze = Object(h.damp)(Ze, 1, .1, at), m < .5 && Ze > .5 && br(), At = 200 * Math.cos(y) + -2e3 * (Ze < .5 ? Ze : Ze - 1) * Je, Mt = 200 * Math.sin(y);
                    var E = b[Ze < .5 ? qe : Xe];
                    xt = E.dimension.mapSize, Vr(!0), He.forEach((function (e) {
                        Gt(e) && e.below && sr(e)
                    }));
                    var O, w = J(E.rifts);
                    try {
                        for (w.s(); !(O = w.n()).done;) {
                            ir(null, O.value)
                        }
                    } catch (e) {
                        w.e(e)
                    } finally {
                        w.f()
                    }
                    for (var T = 0; T < E.polygons.length; T++) {
                        Er(E.polygons[T])
                    }
                    for (var S = 0; S < E.tanks.length; S++) {
                        var A = E.tanks[S];
                        Or(A.x, A.y, A.size, A.d, A.sides, A.outerSides, A.outerSize, A.color, A.barrels, A.gadgets, A.layers)
                    }
                    for (var M = 0; M < E.tanks.length; M++) {
                        var x = E.tanks[M];
                        x.y *= -1, x.lastColor = x.color, Tr(x), x.y *= -1
                    }
                    He.forEach((function (e) {
                        Gt(e) && !e.below && sr(e)
                    })), Ut([], [], [], [], null, !1), bt = ht;
                    var k = 3500 * (2 * Ze - 1) * Je;
                    ! function (e, t, n, r) {
                        bt.beginPath(), bt.arc(e, t, n, 0, 2 * Math.PI, !1), bt.fillStyle = r, bt.fill()
                    }(dt.width / 2 + k / Tt, dt.height / 2 + 0 / Tt, 1100 / Tt, "#171717")
                }
                if (1 == l.mainMenuState) {
                    (bt = pt).clearRect(0, 0, it.width, it.height);
                    var C = it.width / 2,
                        R = it.height / 2 - 15 * Wt,
                        I = Be.isCelestial ? 100 : 50,
                        L = yn / 4,
                        D = Qt(an(Be.team, Be.team, Be.id, Be.id), Be.isInvulnerable, Be.radiant);
                    Be.outerSize > 0 && ur(C, R, I + Be.outerSize * I, ee.SPIKE_COLOR, Be.outerSides, L, !1, 1, I), kr(C, R, I, L, Be.barrels, !1, 1), ur(C, R, I, D, Be.sides, L, !1, 1), wr(C, R, L, I, D, Be.layers, 0, Be.radiant, !1, !1, 1), Ar(C, R, I, L, Be.gadgets, D, 0, Be.radiant, !1, !1, !1, 1), bt = ht
                } else 2 == l.mainMenuState && function () {
                    (bt = mt).globalAlpha = 1, bt.clearRect(0, 0, ft.width, ft.height), Kn = Object(h.damp)(Kn, zn ? 1 : 0, .001, at);
                    var e = l.servers[l.selectedServerIndex] || {},
                        t = null != e.gamemode ? Object(l.getTrueGamemodeColor)(e.gamemode) : c.FALLEN_COLOR,
                        n = null != e.gamemode ? Object(l.getGamemodeName)(e.gamemode) : "Connecting...",
                        r = e.region || "???",
                        a = l.gamemodeRegions[e.gamemode] || [];
                    Pn = Object(h.damp)(Pn, 1, .01, at), jn = Object(h.damp)(jn, 1, .001, at);
                    var o = ln(t.substring(1), Ln.substring(1), Object(h.damp)(0, 1, .01, at));
                    Ln = o;
                    var i = ft.width,
                        s = ft.height,
                        u = i / 2,
                        d = s / 2;
                    Ir(u, d, i, s, 2 * Wt, o), Ir(u, d + s / 4, i, s / 2, 2 * Wt, sn(o)), Lr(u, d, i, s, 2 * Wt), bt.lineWidth = .4 * Wt * 2, bt.strokeStyle = "black", bt.clip(), bt.stroke();
                    var p = ft.matches(":hover"),
                        _ = In[0].size;
                    bt.globalAlpha = Math.max(0, Math.min(1, 2 * Pn - 1)), Mn(u + 40 * Wt * (Pn - 1) * Bn, d - 2.5 * Wt, n, 4 * Wt * _, .6 * Wt), bt.globalAlpha = Math.max(0, Math.min(1, 2 * (1 - Pn) - 1)), Mn(u + 40 * Wt * Pn * Bn, d - 2.5 * Wt, Dn, 4 * Wt * _, .6 * Wt), bt.globalAlpha = 1, Mn(u, d + 1.6 * Wt, "Region", 2 * Wt, .6 * Wt), _ = In[1].size, bt.globalAlpha = Math.max(0, Math.min(1, 3 * jn - 1.5)), Mn(u + 10 * Wt * (jn - 1) * Un, d + 4.4 * Wt, r, 2.5 * Wt * _, .6 * Wt), bt.globalAlpha = Math.max(0, Math.min(1, 3 * (1 - jn) - 1.5)), Mn(u + 10 * Wt * jn * Un, d + 4.4 * Wt, Nn, 2.5 * Wt * _, .6 * Wt), bt.globalAlpha = 1;
                    var g = {
                        x: Et,
                        y: Ot
                    };
                    if (ft.style.cursor = "default", !zn) {
                        var v, y = J(In);
                        try {
                            for (y.s(); !(v = y.n()).done;) {
                                var m = v.value,
                                    b = "gamemode" == m.id,
                                    E = xn(b ? n : r, b ? 4 * Wt : 2.5 * Wt, .6 * Wt),
                                    O = E.width,
                                    w = E.actualBoundingBoxAscent + E.actualBoundingBoxDescent + .6 * Wt,
                                    T = {
                                        x: u - O / 2,
                                        y: d + (b ? -2.5 : 4.4) * Wt - w / 2 - .6 * Wt,
                                        width: O,
                                        height: w
                                    },
                                    S = Object(f.m)(g, T) && p && (b ? l.gamemodes.length : a.length) > 1;
                                m.hovered = S, m.size = Object(h.lerp)(m.size, S ? 1.1 : 1, .2), S && (ft.style.cursor = "pointer", wt && (wt = !1, zn = !0, Wn = b))
                            }
                        } catch (e) {
                            y.e(e)
                        } finally {
                            y.f()
                        }
                    }
                    var A, M = J(Cn);
                    try {
                        for (M.s(); !(A = M.n()).done;) {
                            var x = A.value,
                                k = x.sign,
                                C = {
                                    x: u + 17 * Wt * k,
                                    y: d - 2.5 * Wt,
                                    width: 6 * Wt,
                                    height: 8 * Wt
                                };
                            C.x -= C.width / 2, C.y -= C.height / 2;
                            var R = !zn && Object(f.m)(g, C) && p;
                            x.size = Object(h.lerp)(x.size, R && l.areMoreGamemodes ? 1.2 : 1, .2), Mn(u + 17 * Wt * k, d - 2.5 * Wt, 1 == k ? ">" : "<", 6 * x.size * Wt, .6 * Wt, 1, l.areMoreGamemodes ? "#ffffff" : c.FALLEN_COLOR), R && l.areMoreGamemodes && (ft.style.cursor = "pointer", wt && (wt = !1, Bn = -k, Pn = 0, Dn = n, x.size = 1.5, 1 == k ? Object(l.moveBackwardInGamemodeList)() : Object(l.moveForwardInGamemodeList)()))
                        }
                    } catch (e) {
                        M.e(e)
                    } finally {
                        M.f()
                    }
                    var I, L = J(Rn);
                    try {
                        for (L.s(); !(I = L.n()).done;) {
                            var D = I.value,
                                P = D.sign,
                                B = {
                                    x: u + 9 * Wt * P,
                                    y: d + 4.4 * Wt,
                                    width: 4 * Wt,
                                    height: 6 * Wt
                                };
                            B.x -= B.width / 2, B.y -= B.height / 2;
                            var N = !zn && Object(f.m)(g, B) && p;
                            D.size = Object(h.lerp)(D.size, N && l.areMoreRegions ? 1.2 : 1, .2), Mn(u + 9 * Wt * P, d + 4.4 * Wt, 1 == P ? ">" : "<", 4 * D.size * Wt, .6 * Wt, 1, l.areMoreRegions ? "#ffffff" : c.FALLEN_COLOR), N && l.areMoreRegions && (ft.style.cursor = "pointer", wt && (wt = !1, Un = -P, jn = 0, Nn = r, D.size = 1.5, 1 == P ? Object(l.moveBackwardInRegionList)() : Object(l.moveForwardInRegionList)()))
                        }
                    } catch (e) {
                        L.e(e)
                    } finally {
                        L.f()
                    }
                    if (Kn > .05) {
                        Kn < .95 && (bt = function (e, t) {
                            return ea.width = e, ea.height = t, ta
                        }(ft.width, ft.height)), Ir(u, d, i, s, 2 * Wt, "#000000");
                        for (var j = Math.ceil(Math.sqrt(Wn ? l.gamemodes.length : a.length)), U = 0, z = 0, W = 0; W < (Wn ? l.gamemodes.length : a.length); W++) {
                            var K = void 0,
                                G = void 0,
                                Y = void 0;
                            Wn ? (K = l.gamemodes[W], G = Object(l.getTrueGamemodeColor)(K)) : (Y = a[W], G = c.POLYGON_COLORS[W]);
                            var F = i / j,
                                H = s / j,
                                V = u + F * (U + .5) - i / 2,
                                X = d + H * (z + .5) - s / 2,
                                q = {
                                    x: V,
                                    y: X,
                                    width: F,
                                    height: H
                                };
                            q.x -= q.width / 2, q.y -= q.height / 2;
                            var Z = zn && Object(f.m)(g, q) && p;
                            if (Z && (ft.style.cursor = "pointer", wt)) {
                                wt = !1, zn = !1;
                                var $ = Object(h.generateSign)();
                                Wn ? W != l.selectedGamemodeIndex && (Bn = -$, Pn = 0, Dn = K, Object(l.setGamemode)(W, $)) : W != l.selectedRegionIndex && (Un = -$, jn = 0, Nn = Y, Object(l.setRegion)(W, $))
                            }
                            var Q = .5 * Wt;
                            Ir(V, X, F - Q, H - Q, 2 * Wt, G), Ir(V, X + H / 4, F - Q, H / 2 - Q, 2 * Wt, sn(G)), Lr(V, X, F, H, 2 * Wt), bt.lineWidth = .4 * Wt * 2, bt.strokeStyle = Z ? "white" : "black", bt.save(), bt.clip(), bt.stroke(), bt.restore(), Mn(V, X, Wn ? Object(l.getGamemodeName)(K) : Y, 5 * Wt / j, .6 * Wt), ++U == j && (U = 0, z++)
                        }
                        wt && (zn = !1), Kn < .95 && ((bt = mt).globalAlpha = Kn, bt.drawImage(ea, 0, 0))
                    }
                    bt = ht, wt = !1
                }()
            } else {
                var P = Object(i.c)();
                if (Object(o.isEmpty)(P)) {
                    Vr();
                    break e
                }
                var B = P.me,
                    N = P.tanks,
                    j = P.polygons,
                    U = P.bullets,
                    z = P.rifts,
                    W = P.mapSize,
                    K = P.tickTime,
                    G = (P.dt, P.dimension),
                    Y = P.cameraSizeMultiplier;
                if (Ve = G, !B) break e;
                if (K && !Number.isNaN(K)) {
                    var F = Object(f.k)(We, K);
                    We = ze, ze = Math.round(10 * F) / 10
                }
                Fe = Qt(an(B.team, B.team, B.id, B.id), B.isInvulnerable, B.radiant), l.isMobile && Object(s.v)(at), Object(s.e)(), s.a && Object(s.r)(s.q + s.b * ee.AUTO_SPIN_SPEED * at), B.d = s.q, V.h && V.g && (V.c.barrels && (B.barrels = V.c.barrels), B.oldGadgets = B.gadgets, null != V.b.gadgets && (B.gadgets = V.b.gadgets), null != V.b.layers && (B.layers = V.b.layers), null != V.b.outerSides && (B.outerSides = V.b.outerSides), null != V.b.outerSize && (B.outerSize = V.b.outerSize), null != V.b.sides && (B.sides = V.b.sides), null != V.b.radiant && (B.radiant = V.b.radiant), null != V.b.team && (B.team = V.b.team), null != V.b.visualTeam && (B.team = V.b.visualTeam)), xt = W, Object.entries(f.c).forEach((function (e) {
                    var t = Z(e, 2),
                        n = t[0],
                        r = t[1];
                    r.forEach((function (e) {
                        e.time -= at, e.time < 0 && r.splice(r.indexOf(e), 1)
                    })), 0 == r.length && delete f.c[n]
                })), f.r.forEach((function (e) {
                    e.time -= at, e.time < 0 && f.r.splice(f.r.indexOf(e), 1)
                })), X.g.staticCamera ? (At = B.x + pr, Mt = B.y + _r) : (At = Object(h.damp)(At, B.x, 1e-6, at) + pr, Mt = Object(h.damp)(Mt, B.y, 1e-6, at) + _r), Ct = B.x - At, Rt = B.y - Mt, B.size >= .1 && (St = Object(h.damp)(St, (.8 + B.size / 30 * .2) * ee.CAMERA_SIZE * (Y || 1), .05, at), Tt = St / Math.max(dt.height, dt.width)), kt = ee.STROKE_SIZE / Tt, Vr(), Ut(j, N, U, z, B),
                    function (e, t) {
                        X.g.showDroneTrajectory && function () {
                            var e = dt.width / 2 + s.l / Tt,
                                t = dt.height / 2 + s.m / Tt;
                            Pr(e, t, 10 / Tt, "#000000")
                        }();
                        X.g.minimap && !V.g && function (e, t) {
                            var n, r = u.b[Ve];
                            n = r || u.a;
                            var a = xt / n.trueMapSize,
                                o = $e.visual.showMinimap,
                                i = !1;
                            e && ((i = e.x > -a && e.x < a && e.y > -a && e.y < a) || (o = !1));
                            $n = Object(h.damp)($n, o ? .5 : 0, .01, at), bt.globalAlpha = $n, bt.fillStyle = n.visual.backgroundColor, bt.fillRect(10, 10, 150, 150);
                            for (var s = 0; s < n.bases.length; s++) {
                                var l = n.bases[s];
                                bt.fillStyle = an(0, l.team, 0, 0);
                                var c = l.width * n.trueMapSize,
                                    d = l.height * n.trueMapSize;
                                bt.fillRect(85 - 150 * (-l.x / n.trueMapSize + c / 2) / 2, 85 - 150 * (-l.y / n.trueMapSize + d / 2) / 2, 150 * c / 2, 150 * d / 2)
                            }
                            if (e && i) {
                                var f = 85 + e.x / a * 150 / 2,
                                    p = 85 + e.y / a * 150 / 2;
                                ! function (e, t, n) {
                                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 6,
                                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 10;
                                    bt.fillStyle = "black", bt.translate(e, t), bt.rotate(n - Object(h.degreesToRadians)(90)), bt.beginPath(), bt.moveTo(a / 2, 0), bt.lineTo(a / -2, r / 2), bt.lineTo(a / -2, r / -2), bt.fill(), bt.setTransform(1, 0, 0, 1, 0, 0)
                                }(f, p, e.d)
                            }
                            if (t) {
                                bt.globalAlpha = .5 * $n;
                                for (var _ = 0; _ < t.length; _++) {
                                    var g = t[_];
                                    if (g.x > -a && g.x < a && g.y > -a && g.y < a) {
                                        var v = 85 + g.x / a * 150 / 2,
                                            y = 85 + g.y / a * 150 / 2;
                                        Qn(v, y, g)
                                    }
                                }
                                bt.globalAlpha = $n
                            }
                            bt.lineCap = "round", bt.strokeStyle = "black", bt.lineWidth = ee.STROKE_SIZE, bt.strokeRect(10, 10, 150, 150), bt.globalAlpha = 1
                        }(e, t);
                        var n = an(e.nameColor, e.nameColor);
                        Yn = Object(h.damp)(Yn, s.x ? 1 : 0, .05, at), Gn = Object(h.damp)(Gn, s.c ? 1 : 0, .05, at), Yn > .05 && Xn(!0, e.isCelestial);
                        Gn > .05 && Xn(!1, e.isCelestial);
                        var r = dt.width / 2,
                            a = dt.height;
                        bt.lineCap = "round", bt.strokeStyle = "black", bt.lineWidth = 30, bt.beginPath(), bt.moveTo(-180 + r, a - 20), bt.lineTo(180 + r, a - 20), bt.stroke(), bt.strokeStyle = Fe, bt.lineWidth = 30 - 2 * ee.STROKE_SIZE, bt.beginPath(), bt.moveTo(-180 + r, a - 20), bt.lineTo(360 * Math.min(Math.max(e.score / e.xpToNextLevel, 0), 1) - 180 + r, a - 20), bt.stroke();
                        var o = e.totalScore;
                        f.H && f.H.entries[0] && (o = f.H.entries[0].score);
                        var i = Math.min(Math.max(e.totalScore / o, 0), 1) || 0;
                        bt.lineCap = "round", bt.strokeStyle = "black", bt.lineWidth = 25, bt.beginPath(), bt.moveTo(-135 + r, a - 50), bt.lineTo(135 + r, a - 50), bt.stroke(), bt.strokeStyle = Fe, bt.lineWidth -= 2 * ee.STROKE_SIZE, bt.beginPath(), bt.moveTo(-135 + r, a - 50), bt.lineTo(270 * i - 135 + r, a - 50), bt.stroke(), Mn(r, a - 19, Object(l.roundWithEnding)(e.score) + " / " + Object(l.roundWithEnding)(e.xpToNextLevel), 22, ee.TEXT_STROKE / 2), Mn(r, a - 48.5, "Score: ".concat(Object(l.roundWithEnding)(e.totalScore)), 18, ee.TEXT_STROKE / 2), Mn(r, a - 77, "Level ".concat(e.level, " ").concat(e.className), 18, ee.TEXT_STROKE, bt.globalAlpha, n), X.g.showNames && Mn(r, a - 113, e.name, 50, ee.TEXT_STROKE, bt.globalAlpha, n);
                        V.g || (function () {
                            _n = !1;
                            for (var e = 0; e < f.E.length; e++)
                                if (f.E[e] < ee.MAX_UPGRADE_POINTS) {
                                    _n = !0;
                                    break
                                } var t = f.M.length > 0 ? f.M : f.q,
                                    n = f.b.length > 0 ? f.b : f.p,
                                    r = 0 != t.length && vn > -250 || 0 != n.length && gn > -250;
                            Qe = l.isMobile ? Object(h.damp)(Qe, f.D > 0 && _n && !r ? 0 : -400, .05, at) : Object(h.damp)(Qe, f.D > 0 && _n || s.n ? 0 : -400, .05, at);
                            if (l.isMobile) {
                                var a = dt.width / 2,
                                    o = 0,
                                    i = 0;
                                if (Qe > -380) {
                                    for (var u = Math.min(4, mn.length), c = 0; c < mn.length; c++) {
                                        var d = mn[c];
                                        Tn(a + 400 * (1 == u ? 0 : o / (u - 1) - .5), 0 + Qe + 120 * i + 75, d.name, d.color, f.E[c]), 4 == ++o && (o = 0, i++, u = Math.min(4, mn.length - c - 1))
                                    }
                                    i += o > 0 ? 1 : 0, o = 0, f.D > 0 && _n && Mn(a, 0 + Qe - 45 + 120 * i + 75, "x".concat(f.D), 30, ee.TEXT_STROKE, 1, "#ffffff")
                                }
                            } else Qe > -380 && (function (e) {
                                for (var t = 0 + e + (V.h ? 60 : 0), n = dt.height, r = 0; r < ee.UPGRADE_COUNT; r++) On(t + 20, n - 20 - 32 * r, ee.WEAPON_UPGRADE_NAMES[ee.UPGRADE_COUNT - r - 1], ee.UPGRADE_COUNT - r, ee.UPGRADE_COLORS[ee.UPGRADE_COUNT - r - 1], 1);
                                f.D > 0 && _n && Mn(t + 295, n - 20, "x".concat(f.D), 30, ee.TEXT_STROKE, 1, "#ffffff", "left")
                            }(Qe), function (e) {
                                for (var t = dt.width + e, n = dt.height, r = 0; r < ee.UPGRADE_COUNT; r++) On(t - 20, n - 20 - 32 * r, ee.BODY_UPGRADE_NAMES[ee.UPGRADE_COUNT - r - 1], ee.UPGRADE_COUNT - r + 4, ee.UPGRADE_COLORS[ee.UPGRADE_COUNT - r - 1], -1);
                                f.D > 0 && _n && Mn(t - 295, n - 20, "".concat(f.D, "x"), 30, ee.TEXT_STROKE, 1, "#ffffff", "right")
                            }(-Qe))
                        }(), function () {
                            var e = f.M.length > 0 ? f.M : f.q,
                                t = f.b.length > 0 ? f.b : f.p;
                            vn = Object(h.damp)(vn, f.M.length > 0 ? 75 : -400, .05, at);
                            var n = !l.isMobile || !(0 != e.length && vn > -250);
                            if (gn = Object(h.damp)(gn, f.b.length > 0 && n ? 75 : -400, .05, at), l.isMobile) {
                                var r = dt.width / 2,
                                    a = 0,
                                    o = 0,
                                    i = 0;
                                if (0 != e.length && vn > -250) {
                                    for (var s = Math.min(4, e.length), u = 0; u < e.length; u++) {
                                        var d = e[u];
                                        wn(r + 400 * (1 == s ? 0 : o / (s - 1) - .5), a + vn + 120 * i, c.POLYGON_COLORS[u], d, !0), 4 == ++o && (o = 0, i++, s = Math.min(4, e.length - u - 1))
                                    }
                                    i += o > 0 ? 1 : 0, o = 0, Sn(r, a + vn - 60 + 120 * i)
                                } else if (0 != t.length && gn > -380) {
                                    for (var p = Math.min(4, t.length), _ = 0; _ < t.length; _++) {
                                        var g = t[_];
                                        wn(r + 400 * (1 == p ? 0 : o / (p - 1) - .5), a + gn + 120 * i, c.POLYGON_COLORS[_], g, !1), 4 == ++o && (o = 0, i++, p = Math.min(4, t.length - _ - 1))
                                    }
                                    i += o > 0 ? 1 : 0, o = 0, Sn(r, a + gn - 60 + 120 * i)
                                }
                            } else {
                                r = 0, a = dt.height, o = 0, i = 0;
                                if (0 != e.length && vn > -380) {
                                    for (var v = 0; v < e.length; v++) {
                                        var y = e[v];
                                        wn(r + vn + 120 * o, a - 200 - 120 * i, c.POLYGON_COLORS[v], y, !0), 3 == ++o && (o = 0, i++)
                                    }
                                    2 != e[0].upgradeType && (i += o > 0 ? 1 : 0, Sn(r + vn + 120 * (o = 0), a - 200 - 120 * i))
                                }
                                if (o = 0, i = 0, 0 != t.length && gn > -380) {
                                    r = dt.width;
                                    for (var m = 0; m < t.length; m++) {
                                        var b = t[m];
                                        wn(r - gn - 120 * o, a - 200 - 120 * i, c.POLYGON_COLORS[m], b, !1), 3 == ++o && (o = 0, i++)
                                    }
                                    2 != t[0].upgradeType && (i += o > 0 ? 1 : 0, Sn(r - gn - 120 * (o = 0), a - 200 - 120 * i))
                                }
                            }
                        }(), function (e) {
                            var t = dt.width;
                            if (Mn(t - 120, 25, "LEADERBOARD", 30, ee.TEXT_STROKE), f.H)
                                for (var n = Math.max(f.H.length, 5), r = 200 / n, a = t - 120, o = 35 + 150 / n, i = 0; i < f.H.entries.length; i++) {
                                    var s = f.H.entries[i],
                                        l = Qt((1 == s.type ? c.POLYGON_COLORS[s.color] : null) || an(e.team, s.team, e.id, s.id), !1, s.radiant),
                                        u = an(s.nameColor, s.nameColor),
                                        d = o + r * s.index,
                                        h = a + 300 * (1 - s.fadeTime),
                                        p = 150 / n,
                                        _ = 200 * s.scoreRatio;
                                    if (f.H.showPlayers) {
                                        var g = s.size / n,
                                            v = yn / 10,
                                            y = h - 100 - 150 / n;
                                        s.outerSize > 0 && ur(y, d, g + s.outerSize * g, ee.SPIKE_COLOR, s.outerSides, v, !1, .2, g), 1 == !s.type && kr(y, d, g, v, s.barrels, !1, .2), ur(y, d, g, l, s.sides, v, !1, .2), 1 == !s.type && (wr(y, d, v, g, l, s.layers, 0, s.radiant, !1, !1, .2), Ar(y, d, g, v, s.gadgets, l, 0, s.radiant, !1, !1, .2))
                                    }
                                    bt.lineCap = "round", bt.strokeStyle = "black", bt.lineWidth = p, bt.beginPath(), bt.moveTo(h - 100, d), bt.lineTo(h + 100, d), bt.stroke(), bt.lineWidth = p - 10 * ee.STROKE_SIZE / n, bt.strokeStyle = l, bt.beginPath(), bt.moveTo(h - 100, d), bt.lineTo(h - 100 + _, d), bt.stroke(), Mn(h, d + 1, f.H.showPlayers ? X.g.showNames ? "".concat(s.name.slice(0, 3 * n)).concat("" != s.name ? " - " : "").concat(s.formattedScore) : "".concat(s.formattedScore) : s.name.slice(0, 3 * n), Math.min(120 / n, 20), 2.5 * ee.TEXT_STROKE / n, bt.globalAlpha, u)
                                }
                        }(e));
                        ! function () {
                            var e = dt.width / 2,
                                t = 0;
                            f.r.forEach((function (n) {
                                var r = hn(n.time, ee.NOTIFICATION_STAY_TIME);
                                An(e, 20 + t, n.message, -1, 25, 0, !0, r), t += r * (n.message.height + 12.5)
                            })), bt.globalAlpha = 1
                        }();
                        var d = 0;
                        if ((Ee -= at) > 0 && me) {
                            a = 0;
                            var p = Ee > c.ANNOUNCEMENT_FADE_OUT_TIME,
                                _ = function (e) {
                                    var t = c.ANNOUNCEMENT_STAY_TIME,
                                        n = 1,
                                        r = t - e;
                                    r < c.ANNOUNCEMENT_FADE_IN_TIME ? n = r / c.ANNOUNCEMENT_FADE_IN_TIME : r > t - c.ANNOUNCEMENT_FADE_OUT_TIME && (n = 1 - (r - (t - c.ANNOUNCEMENT_FADE_OUT_TIME)) / c.ANNOUNCEMENT_FADE_OUT_TIME);
                                    return Math.max(Math.min(n, 1), 0)
                                }(Ee),
                                g = Object(h.ease)(_, 2, !0),
                                v = p ? g : 2 - g,
                                y = Object(h.ease)(Math.min(1, 1.15 * g), 2, !0);
                            d = y, null == Oe && (Oe = xn(me, 60, c.TEXT_STROKE).width);
                            var m, b = J(kn);
                            try {
                                for (b.s(); !(m = b.n()).done;) {
                                    var E = m.value;
                                    Mn(r + (Oe / 2 - 20 + 70 * v) * E, a - 50 + 130 * y, "-", 60, c.TEXT_STROKE, y)
                                }
                            } catch (e) {
                                b.e(e)
                            } finally {
                                b.f()
                            }
                            if (Mn(r, a - 50 + 130 * y, me, 60, c.TEXT_STROKE, y), be) {
                                null == we && (we = xn(be, 30, c.TEXT_STROKE).width);
                                var O, w = J(kn);
                                try {
                                    for (w.s(); !(O = w.n()).done;) {
                                        var T = O.value;
                                        Mn(r + (we / 2 - 20 + 70 * v) * T, a - 30 + 170 * y, "-", 30, c.TEXT_STROKE, y)
                                    }
                                } catch (e) {
                                    w.e(e)
                                } finally {
                                    w.f()
                                }
                                Mn(r, a - 30 + 170 * y, be, 30, c.TEXT_STROKE, y)
                            }
                        }
                        if ((Ae -= at) > 0) {
                            a = 0;
                            var S = function (e, t) {
                                var n = 1,
                                    r = t - e;
                                r < c.TIMER_FADE_IN_TIME ? n = r / c.TIMER_FADE_IN_TIME : r > t - c.TIMER_FADE_OUT_TIME && (n = 1 - (r - (t - c.TIMER_FADE_OUT_TIME)) / c.TIMER_FADE_OUT_TIME);
                                return Math.max(Math.min(n, 1), 0)
                            }(Ae, Me);
                            Mn(r, a + 100 + (be ? 100 : 40) * d, xe, 35, c.TEXT_STROKE, S);
                            var A = 0,
                                M = 0;
                            if (Ae < 20) {
                                var x = Object(h.ease)((20 - Ae) / 20, 1.3, !0);
                                A = (2 * Math.random() - 1) * x, M = (2 * Math.random() - 1) * x
                            }
                            var k = 1,
                                C = 0;
                            Ae < 15 && (C = (Ae - Math.floor(Ae)) * Object(h.ease)((15 - Ae) / 15, 2, !0), k = 1 + .7 * C);
                            var R = ln("ff0000", "ffffff", C);
                            Mn(r + 6 * A, a + 6 * M + 160 + (be ? 100 : 40) * d, Math.floor(Ae), 60 * k, c.TEXT_STROKE, S, R)
                        }
                        l.isMobile && !V.g && function () {
                            var e, t, n = dt.height,
                                r = J(s.p);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var a = t.value;
                                    e = a.align * X.b == 1 ? 0 : dt.width, Vn(a, e + a.align * X.b * +X.g.joystickOffset, n - +X.g.joystickOffset, X.g.joystickSize)
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                        }()
                    }(B, z), V.h && V.g && B.oldGadgets && (B.gadgets = B.oldGadgets, delete B.oldGadgets), bt = ht;
                var H = Math.round(10 * (performance.now() - t)) / 10;
                Number.isNaN(H) || (H = Object(f.k)(Ge, H), Ge = Ke, Ke = Math.round(10 * H) / 10), Nt(at), te.textContent = "Ping: ".concat(je, "ms"), ne.textContent = "Server Tick Time: ".concat(ze, "ms"), re.textContent = "Client Tick Time: ".concat(Ke, "ms"), ae.textContent = "FPS: ".concat(Bt), oe.textContent = "Player Count: ".concat(f.H ? f.H.showPlayers ? f.H.playerCount : "???" : 0), ie.textContent = "Global Player Count: ".concat(f.H && f.H.showPlayers ? Math.max(f.G.players + 1, f.H.playerCount) : f.G.players + 1), se.textContent = "Extra Performance Info: T:".concat(N.length + 1, " S:").concat(j.length, " B:").concat(U.length, " P:").concat(He.length, "/").concat(c.MAX_PARTICLES), le.textContent = "Position: ".concat(Object(h.round)(B.x, 2), ", ").concat(Object(h.round)(-B.y, 2)), te.style.color = je > 250 ? je > 500 ? "red" : "yellow" : "white", ne.style.color = ze > 8 ? ze > 1e3 / c.SERVER_TPS ? "red" : "yellow" : "white", re.style.color = Ke > 5 ? Ke > 16.66 ? "red" : "yellow" : "white", ae.style.color = Bt < 50 ? Bt < 15 ? "red" : "yellow" : "white", Ye = !1
            }
        } catch (e) {
            console.error(e)
        } finally {
            if (he) {
                if (0 == ge.length) Object(V.e)();
                else {
                    var q = ge[ge.length - 1],
                        $ = V.o.some((function (e) {
                            return e.type == q.type && e.index == q.index
                        }));
                    !Object(o.isEqual)(ge, ve) || 0 == V.o.length || $ && pe ? ye = 0 : ye++;
                    var Q = ge[ge.length - 1 - ye];
                    Q ? Object(V.r)(Q.type, Q.index, pe, Q.stack) : Object(V.e)()
                }
                he = !1
            }
            _e = !1, setTimeout(Pt, 1)
        }
    }

    function Pt() {
        requestAnimationFrame((function () {
            Dt()
        }))
    }
    var Bt = 60,
        Nt = Object(a.throttle)(500, (function (e) {
            Bt = Math.round(1 / e)
        }));

    function jt() {
        te.classList.toggle("hidden", !X.g.showPing), ne.classList.toggle("hidden", !X.g.showTickTime), re.classList.toggle("hidden", !X.g.showTickTime), ae.classList.toggle("hidden", !X.g.showFPS), oe.classList.toggle("hidden", !X.g.showPlayerCount), ie.classList.toggle("hidden", !X.g.showGlobalPlayerCount), se.classList.toggle("hidden", !X.g.showExtraPerformanceInfo), le.classList.toggle("hidden", !X.g.showPosition), ue.classList.toggle("hidden", !X.g.showServerName)
    }

    function Ut(e, t, n, r, a) {
        var o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (ot = a, yn += ee.AUTO_SPIN_SPEED * at, o && (He.forEach((function (e) {
            Gt(e) && e.below && sr(e)
        })), qr(), r.forEach((function (e) {
            Gt(e, 12) && ir(a, e)
        })), t.forEach((function (e) {
            or(a, e)
        })), e.forEach((function (e) {
            or(a, e, ee.POLYGON_COLORS[e.color] || (a ? an(a.team, e.team, a.id, e.id) : an(e.team, e.team, 0, 0)))
        })), n.forEach((function (e) {
            or(a, e)
        })), a && or(a, a), e.forEach((function (e) {
            rr(e, ee.POLYGON_COLORS[e.color] || (a ? an(a.team, e.team, a.id, e.id) : an(e.team, e.team, 0, 0)), e.sides, !1)
        })), a && nr(a, a), t.forEach((function (e) {
            nr(a, e)
        })), n.forEach((function (e) {
            ar(a, e)
        })), n.forEach((function (e) {
            Tr(e)
        })), a && Tr(a), t.forEach((function (e) {
            Tr(e)
        })), He.forEach((function (e) {
            Gt(e) && !e.below && sr(e)
        }))), bt = _t, $e.visual.darkness) {
            var i = dt.width / 2 - At / Tt,
                s = dt.height / 2 - Mt / Tt;
            bt.globalAlpha = 1, bt.fillStyle = $e.visual.darkness.color, bt.fillRect(0, 0, st.width, st.height);
            var l = $e.visual.darkness.intensity * (1 + .1 * Math.sin(performance.now() / 1e3));
            if (a) {
                Fr(i + a.x / Tt, s + a.y / Tt, 4 * a.size / l / Tt, 1), Fr(i + a.x / Tt, s + a.y / Tt, 6 * a.size / l / Tt, .5), zr(i, s, l, a), a.radiant > 0 && Wr(i, s, l, a);
                for (var u = 0; u < a.barrels.length; u++) {
                    var c = a.barrels[u],
                        d = c.distance + 2 * c.length,
                        f = a.d + c.rot,
                        h = a.x + (d * Math.sin(f) + c.offset * Math.sin(f + Cr)) * a.size,
                        p = a.y - (c.offset * Math.cos(f + Cr) + d * Math.cos(f)) * a.size;
                    Fr(i + h / Tt, s + p / Tt, 8 * a.size * c.width / l / Tt, .5), Gr(i + h / Tt, s + p / Tt, f, 8 * a.size * c.length / l / Tt, 8 * a.size * c.width / l / Tt, 2 * a.size * c.width / l / Tt, 1)
                }
            }
            t.forEach((function (e) {
                e.gadgets && zr(i, s, l, e), e.radiant > 0 && Wr(i, s, l, e)
            })), e.forEach((function (e) {
                e.radiant > 0 && Wr(i, s, l, e)
            })), He.forEach((function (e) {
                Gt(e) && e.radiant > 0 && Kr(i, s, l, e)
            })), n.forEach((function (e) {
                e.gadgets && zr(i, s, l, e), e.radiant > 0 && Wr(i, s, l, e)
            })), r.forEach((function (e) {
                if (Gt(e, 12)) switch (e.type) {
                    case 0:
                        var t = (u = performance.now() / 500) + .5,
                            n = 10 - 9 * (a = u - Math.floor(u)),
                            r = 10 - 9 * (o = t - Math.floor(t));
                        Fr(i + e.x / Tt, s + e.y / Tt, e.size * n / Tt, .3 * Math.min(2 * a, 1)), Fr(i + e.x / Tt, s + e.y / Tt, e.size * r / Tt, .3 * Math.min(2 * o, 1));
                        break;
                    case 1:
                        switch (e.subtype) {
                            case 0:
                                t = (u = performance.now() / 2500) + .5, n = 1 + 3 * (a = u - Math.floor(u)), r = 1 + 3 * (o = t - Math.floor(t));
                                Fr(i + e.x / Tt, s + e.y / Tt, e.size * n / Tt, .2 * Math.min(2 * (1 - a), 1)), Fr(i + e.x / Tt, s + e.y / Tt, e.size * r / Tt, .2 * Math.min(2 * (1 - o), 1));
                                break;
                            case 1:
                                var a, o;
                                t = (u = performance.now() / -1250) + .5, n = 1 + 5 * (a = u - Math.floor(u)), r = 1 + 5 * (o = t - Math.floor(t));
                                Fr(i + e.x / Tt, s + e.y / Tt, e.size * n / Tt, .2 * Math.min(2 * (1 - a), 1)), Fr(i + e.x / Tt, s + e.y / Tt, e.size * r / Tt, .2 * Math.min(2 * (1 - o), 1))
                        }
                        break;
                    case 2:
                        var u, c = (u = performance.now()) * e.sign / 1e3;
                        Yr(i + e.x / Tt, s + e.y / Tt, c, 2 * e.size / l / Tt, 4, 1), bt.globalAlpha = .5, Yr(i + e.x / Tt, s + e.y / Tt, c, 3 * e.size / l / Tt, 4, .5)
                }
            })), $e.gates.forEach((function (e) {
                var t = e.x * xt,
                    n = e.y * xt,
                    r = e.size / 2 * xt;
                switch (e.type) {
                    case 1:
                        var a = performance.now() / (e.open ? -2500 : 1e3),
                            o = a + .5,
                            l = a - Math.floor(a),
                            u = o - Math.floor(o),
                            c = e.open ? 9 : 14,
                            d = 1 + u * c;
                        Hr(i + t / Tt, s + n / Tt, 30 * (1 + l * c) / Tt, r / Tt, e.rot, Math.min(2 * (1 - l), 1) * e.open ? .2 : .4), Hr(i + t / Tt, s + n / Tt, 30 * d / Tt, r / Tt, e.rot, Math.min(2 * (1 - u), 1) * e.open ? .2 : .4), bt.globalAlpha = 1, Hr(i + t / Tt, s + n / Tt, 30 / Tt, r / Tt, e.rot, e.open ? .5 : 1)
                }
            })), $e.visual.lights && $e.visual.lights.forEach((function (e) {
                Yr(i + e.x / Tt, s + e.y / Tt, e.d, e.size / l / Tt, e.sides, e.transparency), Yr(i + e.x / Tt, s + e.y / Tt, e.d, 1.5 * e.size / l / Tt, e.sides, .2 * e.transparency)
            }))
        }
        $e.visual.darkness || bt.clearRect(0, 0, st.width, st.height);
        var _ = $e.visual.fog;
        _ && (bt.globalCompositeOperation = "destination-over", bt.globalAlpha = _.intensity + _.amplitude * Math.cos(performance.now() / 100 * _.frequency), bt.fillStyle = _.color, bt.fillRect(0, 0, st.width, st.height), bt.globalCompositeOperation = "source-over"), (bt = vt).clearRect(0, 0, ut.width, ut.height), e.forEach((function (e) {
            dr(e, ee.POLYGON_COLORS[e.color] || (a ? an(a.team, e.team, a.id, e.id) : an(e.team, e.team, 0, 0)), e.showName, !1)
        })), a && cr(a, a), t.forEach((function (e) {
            cr(a, e)
        })), (bt = yt).clearRect(0, 0, ct.width, ct.height)
    }
    var zt = 1,
        Wt = 1;

    function Kt() {
        zt = Math.max(1, 800 / Math.min(window.innerWidth, window.innerHeight)), dt.width = zt * window.innerWidth, dt.height = zt * window.innerHeight, it.width = window.innerWidth, it.height = window.innerHeight, ut.width = dt.width, ut.height = dt.height, ct.width = dt.width, ct.height = dt.height, st.width = dt.width, st.height = dt.height, Wt = Math.min(window.innerHeight, window.innerWidth) / 100, ft.width = 40 * Wt, ft.height = 13 * Wt, Object(l.setCanvasScale)(zt)
    }

    function Gt(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = Math.max(Math.abs(At - e.x), Math.abs(Mt - e.y));
        return St / 2 > n - e.size * t
    }

    function Yt(e) {
        setTimeout((function () {
            if (X.g.showParticles) {
                var t, n = Math.min(.2 * e.size, 100),
                    r = 0;
                switch (e.type) {
                    case 0:
                        switch (e.gateType) {
                            case 1:
                                t = 60, r = 1;
                                break;
                            case 3:
                                t = 60
                        }
                        break;
                    case 1:
                        switch (e.gateType) {
                            case 1:
                                t = 100, r = 10;
                                break;
                            case 3:
                                t = 100
                        }
                        break;
                    case 2:
                        switch (n *= e.power / 1e4, e.gateType) {
                            case 1:
                                t = 100, r = 10, n *= .125;
                                break;
                            case 3:
                                t = 100, n *= .125
                        }
                }
                for (var a = Math.random(); a < n; a += Math.random()) {
                    var o = Object(f.l)(.12, .24) * t * (e.direction || Object(h.generateSign)()),
                        i = Object(f.l)(.3, .6) * (100 / 1.5),
                        s = (2 * Math.random() - 1) * (e.size - i),
                        l = e.x + Math.cos(e.rot + Cr) * s,
                        u = e.y + Math.sin(e.rot + Cr) * s,
                        c = e.rot + .3 * (2 * Math.random() - 1);
                    mr(l, u, o * Math.cos(c), o * Math.sin(c), i, Math.random() * Math.PI * 2, 0, "#000000", 50, 1, r, .95)
                }
            }
        }), X.g.renderDelay)
    }

    function Ft(e) {
        setTimeout((function () {
            var t, n, r = e.size / 4;
            yr(e.x, e.y, .05 * e.size, .1 * Math.sqrt(e.size));
            for (var a = an(null === (t = ot) || void 0 === t ? void 0 : t.team, e.team, null === (n = ot) || void 0 === n ? void 0 : n.id, e.id), o = Math.random(); o < r; o += Math.random()) {
                var i = Math.random() * Math.PI * 2,
                    s = Object(f.l)(.08 * e.size, .15 * e.size),
                    l = Object(f.l)(45, 75);
                mr(e.x, e.y, s * Math.sin(i), s * Math.cos(i), Object(f.l)(.15, .22) * e.size, Math.random() * Math.PI * 2, 4, a, l, 1, e.radiant, .95)
            }
        }), 1.2 * X.g.renderDelay)
    }

    function Ht(e) {
        setTimeout((function () {
            e.size = Math.min(e.size, 1e3);
            var t = e.size / 2;
            yr(e.x, e.y, .1 * e.size, .2 * Math.sqrt(e.size));
            for (var n = Math.random(); n < t; n += Math.random()) {
                var r = Math.random() * Math.PI * 2,
                    a = Object(f.l)(.08 * e.size, .15 * e.size),
                    o = Object(f.l)(45, 75);
                mr(e.x, e.y, a * Math.sin(r), a * Math.cos(r), Object(f.l)(.5, .8) * e.size, Math.random() * Math.PI * 2, 0, "#000000", o, 1, 0, 1)
            }
        }), X.g.renderDelay)
    }

    function Vt(e) {
        setTimeout((function () {
            e.size = Math.min(e.size, 1e3);
            var t = e.size / 2;
            yr(e.x, e.y, .1 * e.size, .1 * Math.sqrt(e.size));
            for (var n = Math.random(); n < t; n += Math.random()) {
                var r = Math.random() * Math.PI * 2,
                    a = Object(f.l)(.1 * e.size, .2 * e.size),
                    o = Object(f.l)(30, 60);
                mr(e.x, e.y, a * Math.sin(r), a * Math.cos(r), Object(f.l)(.5, .8) * e.size, Math.random() * Math.PI * 2, 0, "#ffffff", o, 1, 0, .95)
            }
        }), X.g.renderDelay)
    }

    function Xt(e) {
        setTimeout((function () {
            var t = e.size;
            yr(e.x, e.y, .2 * e.size, .1 * Math.sqrt(e.size));
            for (var n = an(ot ? ot.team : 0, e.team, ot ? ot.id : 0, e.id), r = Math.random(); r < t; r += Math.random()) {
                var a = Math.random() * Math.PI * 2,
                    o = Object(f.l)(.1 * e.size, .2 * e.size),
                    i = Object(f.l)(30, 60);
                mr(e.x, e.y, o * Math.sin(a), o * Math.cos(a), Object(f.l)(3, 12), Math.random() * Math.PI * 2, 0, n, i, 1, e.radiant, .95)
            }
        }), 1.2 * X.g.renderDelay)
    }

    function qt() {
        window.onbeforeunload = function () {
            return "Leaving now may result in lost progress."
        }, Ne = !1, Ie(!0), X.g.showChat && Le && ce.classList.remove("hidden"), V.h && V.i.classList.remove("hidden")
    }

    function Zt() {
        window.onbeforeunload = function () { }, Ne = !0, br(), gr(), Ie(!1), ce.classList.add("hidden"), V.i.classList.add("hidden")
    }
    window.addEventListener("resize", Object(a.debounce)(40, (function () {
        Kt()
    })));
    var Jt = !1,
        $t = "#ff0000";

    function Qt(e, t, n) {
        var r = e;
        return n > 0 && (Jt || en(), r = ln(r.substring(1), dn($t).substring(1), .5 / n)), t && (r = un(r, Math.round(30 * Math.abs(Math.sin(rt / 50))))), r
    }

    function en() {
        $t = [128 * (1 + Math.sin(rt / 500)), 128 * (1 + Math.sin(rt / 500 + Math.PI * (1 / 3))), 128 * (1 + Math.sin(rt / 500 + Math.PI * (2 / 3)))]
    }

    function tn(e, t, n) {
        if (null != t) return an(t, t);
        switch (e) {
            case 0:
                return c.POLYGON_COLORS[1];
            case 1:
                return c.POLYGON_COLORS[4];
            case 3:
                return c.POLYGON_COLORS[0];
            case 4:
                return c.POLYGON_COLORS[5];
            default:
                return n
        }
    }
    var nn = Object(o.cloneDeep)(c.GAMEMODE_COLORS);

    function rn(e) {
        return nn[e] || "#ffffff"
    }

    function an(e, t, n, r) {
        var a;
        switch (t) {
            default:
                if ("string" == typeof t) return t;
                a = t <= 0 && n == r ? c.TEAM_COLORS[0] : c.TEAM_COLORS[1];
                break;
            case -1:
                a = ee.FALLEN_COLOR;
                break;
            case 1:
                a = c.POLYGON_COLORS[1];
                break;
            case 2:
                a = ee.CELESTIAL_COLOR;
                break;
            case 3:
                a = c.BARREL_COLOR;
                break;
            case 4:
                a = ee.POLYGON_COLORS[0];
                break;
            case 5:
                a = "#000000";
                break;
            case 6:
                a = "#ffffff";
                break;
            case 7:
                a = c.SPIKE_COLOR;
                break;
            case 10:
                a = c.TEAM_COLORS[0];
                break;
            case 11:
                a = c.TEAM_COLORS[1];
                break;
            case 12:
                a = c.TEAM_COLORS[2];
                break;
            case 13:
                a = c.TEAM_COLORS[3];
                break;
            case 20:
                a = c.POLYGON_COLORS[0];
                break;
            case 21:
                a = c.POLYGON_COLORS[1];
                break;
            case 22:
                a = c.POLYGON_COLORS[2];
                break;
            case 23:
                a = c.POLYGON_COLORS[3];
                break;
            case 24:
                a = c.POLYGON_COLORS[4];
                break;
            case 25:
                a = c.POLYGON_COLORS[5];
                break;
            case 26:
                a = c.POLYGON_COLORS[6];
                break;
            case 27:
                a = c.POLYGON_COLORS[7];
                break;
            case 28:
                a = c.POLYGON_COLORS[8];
                break;
            case 29:
                a = c.POLYGON_COLORS[9];
                break;
            case 30:
                a = c.POLYGON_COLORS[10]
        }
        return a
    }
    Object.keys(nn).forEach((function (e) {
        nn[e] = ln(nn[e].substring(1), "ffffff", .65)
    }));
    var on = {};

    function sn(e) {
        return on[e] || (on[e] = un(e, c.STROKE_SHADE)), on[e]
    }

    function ln(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .25;

        function r(e) {
            return e.toString(16)
        }

        function a(e) {
            return parseInt(e, 16)
        }
        for (var o = "#", i = 0; i <= 5; i += 2) {
            for (var s = a(e.substring(i, i + 2)), l = a(t.substring(i, i + 2)), u = r(Math.floor(l + (s - l) * n)); u.length < 2;) u = "0" + u;
            o += u
        }
        return o
    }

    function un(e, t) {
        return "#" + e.replace(/^#/, "").replace(/../g, (function (e) {
            return ("0" + Math.min(255, Math.max(0, parseInt(e, 16) + t)).toString(16)).substr(-2)
        }))
    }

    function cn(e) {
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : null
    }

    function dn(e) {
        return "#" + ((1 << 24) + (e[0] << 16) + (e[1] << 8) + e[2]).toString(16).slice(1)
    }

    function fn(e, t, n) {
        arguments.length < 3 && (n = .5);
        for (var r = e.slice(), a = 0; a < 3; a++) r[a] = Math.round(r[a] + n * (t[a] - e[a]));
        return r
    }

    function hn(e, t) {
        var n = 1,
            r = t - e;
        return r < c.MSG_FADE_IN_TIME ? n = r / c.MSG_FADE_IN_TIME : r > t - c.MSG_FADE_OUT_TIME && (n = 1 - (r - (t - c.MSG_FADE_OUT_TIME)) / c.MSG_FADE_OUT_TIME), Math.max(Math.min(n, 1), 0)
    }

    function pn(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            r = 1,
            a = (t /= 60) - e;
        return a < (n /= 60) ? r = a / n : a > t - n && (r = 1 - (a - (t - n)) / n), r
    }
    for (var _n = !1, gn = 0, vn = 0, yn = 0, mn = [], bn = 0; bn < c.WEAPON_UPGRADE_NAMES.length; bn++) mn.push({
        name: c.WEAPON_UPGRADE_NAMES[bn].split(" "),
        color: c.UPGRADE_COLORS[bn]
    });
    for (var En = 0; En < c.BODY_UPGRADE_NAMES.length; En++) mn.push({
        name: c.BODY_UPGRADE_NAMES[En].split(" "),
        color: c.UPGRADE_COLORS[En]
    });

    function On(e, t, n, r, a, o) {
        var i = 250 * o,
            s = f.E[r - 1] / ee.MAX_UPGRADE_POINTS * (i - 25 * o);
        bt.lineCap = "round", bt.strokeStyle = "black", bt.lineWidth = 30, bt.beginPath(), bt.moveTo(e, t), bt.lineTo(e + i, t), bt.stroke(), bt.lineWidth = 30 - 2 * ee.STROKE_SIZE, 0 != f.E[r - 1] && (bt.strokeStyle = a, bt.beginPath(), bt.moveTo(e, t), bt.lineTo(e + s, t), bt.stroke()), bt.strokeStyle = f.D > 0 && f.E[r - 1] < ee.MAX_UPGRADE_POINTS ? "white" : "grey", bt.beginPath(), bt.moveTo(e + i, t), bt.lineTo(e + i, t), bt.stroke(), bt.strokeStyle = "black", bt.lineCap = "butt", bt.lineWidth = 4, bt.beginPath(), bt.moveTo(e + i + 7, t), bt.lineTo(e + i - 7, t), bt.moveTo(e + i, t + 7), bt.lineTo(e + i, t - 7), bt.stroke(), bt.lineCap = "round", Mn(e + i - 32 * o, t + 1.5, "[".concat(r, "]"), 15, ee.TEXT_STROKE / 2, 1), Mn(e + i / 2 - 30 * o, t + 2, n, 20, ee.TEXT_STROKE / 2, 1)
    }

    function wn(e, t, n, r, a) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
            i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        bt.lineCap = "round", bt.strokeStyle = "black", bt.lineWidth = c.STROKE_SIZE * o, i && (n = c.BARREL_COLOR), Ir(e, t, 100 * o, 100 * o, 5, n), Ir(e, t + 25 * o, 100 * o, 50 * o, 5, sn(n)), Lr(e, t, 100 * o, 100 * o, 5), bt.stroke();
        var s = (r.isCelestial ? 40 : 20) * o,
            l = "",
            u = i ? c.FALLEN_COLOR : Fe,
            d = yn / (i ? 10 : 1);
        switch (r.upgradeType) {
            case 0:
                a ? (kr(e, t, s, d, r.barrels, !1, 1 * o), ur(e, t, s, u, r.isCelestial ? 3 : 0, d, !1, 1 * o)) : (r.outerSize > 0 && ur(e, t, s + r.outerSize * s, ee.SPIKE_COLOR, r.outerSides, d, !1, 1 * o, s), ur(e, t, s, u, r.sides, d, !1, 1 * o), wr(e, t, d, s, u, r.layers, 0, ot.radiant, ot.isInvulnerable, !1, 1 * o), Ar(e, t, s, d, r.gadgets, u, 0, ot.radiant, ot.isInvulnerable, !1, 1 * o)), l = r.name;
                break;
            case 1:
                ur(e, t, s, ee.CELESTIAL_COLOR, 3, d, !1, 1 * o), l = "ASCEND";
                break;
            case 2:
                ur(e, t, s, ee.CELESTIAL_COLOR, 3, d, !1, 1 * o), l = "RETURN"
        }
        bt.lineCap = "round", Mn(e, t + 35 * o, l, 15 * o, ee.TEXT_STROKE / 1.5 * o, 1, i ? c.FALLEN_COLOR : "#ffffff")
    }

    function Tn(e, t, n, r, a) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        bt.lineCap = "round", bt.strokeStyle = "black", bt.lineWidth = c.STROKE_SIZE * o, Ir(e, t, 100 * o, 100 * o, 5, r), Ir(e, t + 25 * o, 100 * o, 50 * o, 5, sn(r)), Lr(e, t, 100 * o, 100 * o, 5), bt.stroke(), bt.lineCap = "round";
        for (var i = 0; i < n.length; i++) Mn(e, t - 25 * o + 20 * i, n[i], 15 * o, ee.TEXT_STROKE / 1.5 * o, 1, "#ffffff");
        var s = t + 35 * o,
            l = 3 * c.STROKE_SIZE * o,
            u = 80 * o,
            d = a / ee.MAX_UPGRADE_POINTS * u;
        bt.lineCap = "round", bt.strokeStyle = "black", bt.lineWidth = l, bt.beginPath(), bt.moveTo(e - u / 2, s), bt.lineTo(e + u / 2, s), bt.stroke(), bt.lineWidth = l - 2 * ee.STROKE_SIZE, 0 != a && (bt.strokeStyle = r, bt.beginPath(), bt.moveTo(e - u / 2, s), bt.lineTo(e + d - u / 2, s), bt.stroke())
    }

    function Sn(e, t) {
        bt.lineCap = "round", bt.strokeStyle = "black", bt.lineWidth = ee.STROKE_SIZE, Ir(e, t + 30, 100, 40, 5, "#adadad"), Ir(e, t + 40, 100, 20, 5, sn("#adadad")), Lr(e, t + 30, 100, 40, 5), bt.stroke(), bt.lineCap = "round", Mn(e, t + 30, "IGNORE", 20, ee.TEXT_STROKE, 1)
    }

    function An(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            a = arguments.length > 4 ? arguments[4] : void 0,
            o = arguments.length > 5 ? arguments[5] : void 0,
            i = arguments.length > 6 ? arguments[6] : void 0,
            s = arguments.length > 7 ? arguments[7] : void 0;
        if (bt.font = "bold " + a + "px Roboto", bt.globalAlpha = s, bt.textAlign = "left", bt.textBaseline = "middle", bt.lineJoin = "miter", bt.miterLimit = 2, bt.strokeStyle = "black", !n.width) {
            for (var l = 900, u = [], c = {
                fullText: "",
                sections: []
            }, d = 0; d < n.sections.length; d++) {
                var h = n.sections[d],
                    p = bt.measureText(c.fullText + h.text).width;
                p < l || "" == c.fullText ? (c.fullText += h.text, c.sections.push(h)) : (u.push(c), c = {
                    fullText: h.text,
                    sections: [h]
                })
            }
            u.push(c);
            for (var _ = 0, g = u; _ < g.length; _++) {
                for (var v = g[_], y = [], m = 0; m < v.sections.length; m++) {
                    for (var b = v.sections[m], E = y[y.length - 1], O = void 0, w = void 0, T = m; T < v.sections.length; T++) {
                        var S = v.sections[T];
                        if ("" != S.text.trim()) {
                            O = S, w = T;
                            break
                        }
                    }
                    E && E.color == b.color && E.link == b.link && w && (w == m || w > m && O.color == b.color && O.link == b.link) ? y[y.length - 1].text += b.text : y.push(b)
                }
                v.sections = y
            }
            for (var A = 0, M = u; A < M.length; A++) {
                var x = M[A];
                x.width = bt.measureText(x.fullText).width;
                var k, C = J(x.sections);
                try {
                    for (C.s(); !(k = C.n()).done;) {
                        var R = k.value;
                        R.width = bt.measureText(R.text).width
                    }
                } catch (e) {
                    C.e(e)
                } finally {
                    C.f()
                }
            }
            n.lines = u, n.width = u.slice().sort((function (e, t) {
                return t.width - e.width
            }))[0].width, n.height = n.lines.length * a * 1.2 + .3 * a
        }
        i && Ir(e, t - n.height / 2 * r, n.width + 1 * a, n.height, .4 * a, "#0000008c"), e -= n.width / 2, t = t - n.height / 2 * r - (n.lines.length - 1) * a * 1.2 / 2;
        var I, L = e,
            D = J(n.lines);
        try {
            for (D.s(); !(I = D.n()).done;) {
                var P = I.value;
                e = L;
                var B, N = J(P.sections);
                try {
                    for (N.s(); !(B = N.n()).done;) {
                        var j = B.value;
                        if (Ye && j.link && fe) {
                            var U = {
                                x: e,
                                y: t - 12,
                                width: j.width,
                                height: 25
                            };
                            if (Object(f.m)(Pe, U)) {
                                window.open(j.text, "_blank");
                                break
                            }
                        }
                        bt.fillStyle = an(j.color, j.color), j.link && bt.fillRect(e, t + 11, j.width, 3), 0 != o && bt.strokeText(j.text, e, t), bt.fillText(j.text, e, t), e += j.width
                    }
                } catch (e) {
                    N.e(e)
                } finally {
                    N.f()
                }
                t += 1.2 * a
            }
        } catch (e) {
            D.e(e)
        } finally {
            D.f()
        }
    }

    function Mn(e, t, n, r, a, o) {
        var i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "white",
            s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "center";
        bt.font = "bold " + r + "px Roboto", bt.globalAlpha = o, bt.textAlign = s, bt.textBaseline = "middle", bt.lineJoin = "miter", bt.miterLimit = 2, bt.lineWidth = a, bt.fillStyle = i, bt.strokeStyle = "black", 0 != a && bt.strokeText(n, e, t), bt.fillText(n, e, t), bt.globalAlpha = 1
    }

    function xn(e, t, n) {
        return bt.font = "bold " + t + "px Roboto", bt.textAlign = "center", bt.textBaseline = "middle", bt.lineJoin = "miter", bt.miterLimit = 2, bt.lineWidth = n, bt.measureText(e)
    }
    var kn = [1, -1],
        Cn = [{
            sign: 1,
            size: 1
        }, {
            sign: -1,
            size: 1
        }],
        Rn = [{
            sign: 1,
            size: 1
        }, {
            sign: -1,
            size: 1
        }],
        In = [{
            id: "gamemode",
            hovered: !1,
            size: 1
        }, {
            id: "region",
            hovered: !1,
            size: 1
        }],
        Ln = c.FALLEN_COLOR,
        Dn = "Connecting...",
        Pn = 0,
        Bn = 1,
        Nn = "???",
        jn = 0,
        Un = 1,
        zn = !1,
        Wn = !1,
        Kn = 0;
    var Gn = 0,
        Yn = 0,
        Fn = 0,
        Hn = 0;

    function Vn(e, t, n, r) {
        bt.globalAlpha = .5, Pr(t, n, r, "#000000"), Pr(t + e.x * r, n + e.y * r, .5 * r, "#000000")
    }

    function Xn(e, t) {
        for (var n = e ? Yn : Gn, r = dt.width / 2, a = dt.height / 2 - dt.height * (1 - n), o = e ? qn : Zn, i = (t ? f.e.celestial : f.e.normal)[e ? "weapon" : "body"], s = [], l = 0, u = Object.entries(i); l < u.length; l++) {
            for (var d = Z(u[l], 2), h = d[0], p = d[1], _ = +h, g = 0; g < p.length; g++)
                for (var v = p[g], y = Math.min(dt.width / (200 * p.length), 1), m = r + dt.width * n * ((g + 1) / (p.length + 1) * .6 - .3), b = a + dt.height * n * (_ / i.maxTier * .6 - .3), E = 0; E < v.evolutions.length; E++) {
                    var O, w = i[_ + 1],
                        T = v.evolutions[E],
                        S = 0;
                    for (S = 0; S < w.length; S++)
                        if (w[S].id == T) {
                            O = w[S];
                            break
                        } if (!O) return;
                    var A = Math.min(dt.width / (200 * w.length), 1),
                        M = r + dt.width * n * ((S + 1) / (w.length + 1) * .6 - .3),
                        x = a + dt.height * n * ((_ + 1) / i.maxTier * .6 - .3),
                        k = o.includes(v.id) && o.includes(T);
                    s.push({
                        points: [{
                            x: m,
                            y: b + 50 * y
                        }, {
                            x: m,
                            y: b + 50 * y + 10
                        }, {
                            x: M,
                            y: x - 50 * A - 10
                        }, {
                            x: M,
                            y: x - 50 * A
                        }],
                        width: c.STROKE_SIZE * y,
                        priority: k ? 1 : 0,
                        color: k ? "black" : c.BARREL_COLOR
                    })
                }
            s.sort((function (e, t) {
                return e.priority - t.priority
            }));
            for (var C = 0; C < s.length; C++) {
                var R = s[C];
                bt.strokeStyle = R.color, bt.lineWidth = R.width, bt.beginPath(), bt.moveTo(R.points[0].x, R.points[0].y);
                for (var I = 1; I < R.points.length; I++) {
                    var L = R.points[I];
                    bt.lineTo(L.x, L.y)
                }
                bt.stroke()
            }
        }
        for (var D = 0, P = Object.entries(i); D < P.length; D++)
            for (var B = Z(P[D], 2), N = B[0], j = B[1], U = +N, z = 0; z < j.length; z++) {
                var W = j[z];
                W.upgradeType = 0, W.isCelestial = t, wn(r + dt.width * n * ((z + 1) / (j.length + 1) * .6 - .3), a + dt.height * n * (U / i.maxTier * .6 - .3), c.POLYGON_COLORS[U], W, e, Math.min(dt.width / (200 * j.length), 1), !o.includes(W.id))
            }
    }
    var qn = [],
        Zn = [];

    function Jn(e) {
        for (var t = e ? ot.weaponUpgrade : ot.bodyUpgrade, n = (ot.isCelestial ? f.e.celestial : f.e.normal)[e ? "weapon" : "body"], r = 0, a = Object.entries(n); r < a.length; r++)
            for (var i = Z(a[r], 2), s = i[0], l = i[1], u = +s, c = 0; c < l.length; c++) {
                l[c].id == t && (e ? Fn = u : Hn = u)
            }
        for (var d, h = [t], p = e ? Fn : Hn, _ = 0; _ < n[p].length; _++) {
            var g = n[p][_];
            if (g.id == t) {
                d = g;
                break
            }
        }
        d && (h = h.concat(function e(t, n, r) {
            for (var a = t[n], i = 0; i < a.length; i++) {
                var s = a[i];
                if (s.id == r) {
                    for (var l = [], u = 0; u < s.evolutions.length; u++) {
                        var c = s.evolutions[u];
                        (l = l.concat(e(t, n + 1, c))).push(c)
                    }
                    return Object(o.uniq)(l)
                }
            }
            return 0
        }(n, p, t)), e ? qn = h : Zn = h)
    }
    var $n = .5;

    function Qn(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4;
        switch (n.type) {
            case 0:
                bt.fillStyle = Qt(c.FALLEN_COLOR, !1, 1);
                break;
            case 1:
                bt.fillStyle = "#000000"
        }
        bt.beginPath(), bt.arc(e, t, r, 0, 2 * Math.PI, !1), bt.fill()
    }
    var er = !1,
        tr = [];

    function nr(e, t) {
        var n;
        n = e ? an(e.team, t.team, e.id, t.id) : an(0, t.team, 0, t.parentID), er = e && e.id == t.id && he, rr(t, n, t.sides, !0), er = !1
    }

    function rr(e, t, n, r) {
        var a = Math.round(80 * (1 - e.damageTime || 0)),
            o = un(Qt(t, e.isInvulnerable, e.radiant), a);
        e.lastColor = o;
        var i = e.x,
            l = e.y,
            u = e.d,
            c = e.size * (1 + .5 * (1 - (e.fadeTime || 1)));
        if (bt.globalAlpha = e.fadeTime || 1, e.outerSize > 0 && ur(i, l, c + e.outerSize * c, ee.SPIKE_COLOR, e.outerSides, u, !0, 1, c), e.barrels && e.barrels.length > 0 && kr(i, l, c, u, e.barrels, !0), ur(i, l, c, o, n, u, !0), e.layers && wr(i, l, u, c, o, e.layers, a, e.radiant, e.isInvulnerable), e.gadgets && e.gadgets.length > 0 && Ar(i, l, c, u, e.gadgets, o, a, e.radiant, e.isInvulnerable, !0), bt.globalAlpha = 1, _e) {
            var d = {
                x: dt.width / 2 + (i - At) / Tt,
                y: dt.height / 2 + (l - Mt) / Tt,
                r: e.size / Tt,
                rot: u
            };
            Object(f.n)(Pe, d) && (Object(s.i)(e), _e = !1)
        }
    }

    function ar(e, t) {
        var n, r = t.x,
            a = t.y;
        bt.globalAlpha = t.fadeTime, n = e ? null != t.color ? an(e.team, t.color, e.id, t.parentID) : an(e.team, t.team, e.id, t.parentID) : an(0, t.team, 0, t.parentID);
        var o = Math.round(80 * (1 - t.damageTime || 0)),
            i = un(Qt(n, !1, t.radiant), o);
        t.lastColor = i;
        var s = t.size * (1 + .5 * (1 - (t.fadeTime || 1)));
        t.outerSize > 0 && ur(r, a, s + t.outerSize * s, ee.SPIKE_COLOR, t.outerSides, t.d, !0, 1, s), t.barrels && t.barrels.length > 0 && kr(r, a, s, t.d, t.barrels, !0), ur(r, a, s, i, t.sides, t.d, !0), t.layers && wr(r, a, t.d, s, i, t.layers, o, t.radiant, !1), t.gadgets && t.gadgets.length > 0 && Ar(r, a, s, t.d, t.gadgets, i, o, t.radiant, !1, !0), bt.globalAlpha = 1
    }

    function or(e, t, n) {
        if (t.radiant > 0) {
            var r = performance.now(),
                a = t.size * (1 + .5 * (1 - (t.fadeTime || 1)));
            if (bt.globalAlpha = t.fadeTime || 1, n || (n = e ? an(e.team, t.team, e.id, t.parentID || t.id) : an(0, t.team, 0, t.parentID)), Math.random() < 1 / (600 / t.size)) {
                var o = Math.random() * Math.PI * 2,
                    i = Math.random() * t.size;
                mr(t.x + i * Math.sin(o), t.y + i * Math.cos(o), (1 * Math.random() - .5) * t.radiant, (1 * Math.random() - .5) * t.radiant, Object(f.l)(6, 6 * t.radiant), Math.random(), 0, n, 60, 1, t.radiant)
            }
            var s = ln(dn($t).substring(1), "ffffff", .5);
            if (t.radiant > 2) {
                if (t.radiant > 3) {
                    var l = Math.max(1.5 + t.radiant / 5 + .06 * (1 + Math.sin(r / 800 * ((1 + t.radiant) / 2))) * t.radiant, .1);
                    ur(t.x, t.y, (a + (t.outerSize || 0) * a) * l, s, -3, 20 * Math.cos(r / 25e3) * (1 + t.radiant) / 2, !0, 0, .4 * a)
                }
                var u = 2 / ((t.radiant + 2) / 5);
                ur(t.x, t.y, (a + (t.outerSize || 0) * a) * (Math.cos(r / 500 + Math.PI) / u + 1), s, -6, r / 2e3 * (1 + t.radiant) / 2, !0, 0), ur(t.x, t.y, (a + (t.outerSize || 0) * a) * (Math.cos(r / 500) / u + 1), s, -6, -r / 2e3 * (1 + t.radiant) / 2, !0, 0)
            }
            var c = Math.min(bt.globalAlpha, 1);
            if (bt.globalAlpha = c * (1 - .7 / ((2 + t.radiant) / 3)), t.radiant > 1) {
                var d = Math.max(1.2 + .1 * (1 + Math.sin(r / 800 * ((2 + t.radiant) / 4))) * t.radiant, .1);
                ur(t.x, t.y, (a + (t.outerSize || 0) * a) * d, s, t.outerSize > 0 ? t.outerSides : t.sides, t.d, !0, 0, a * d)
            }
            bt.globalAlpha = c
        }
    }

    function ir(e, t) {
        var n = t.x,
            r = t.y,
            a = t.size;
        switch (bt.globalAlpha = 1, t.type) {
            case 0:
                var o = Qt("#ffffff", !1, 10);
                yr(n, r, .1 * t.size);
                var i = (O = performance.now() / 500) + .5,
                    s = 10 - 9 * (b = O - Math.floor(O)),
                    l = 10 - 9 * (E = i - Math.floor(i));
                if (bt.globalAlpha = .2 * Math.min(2 * b, 1), ur(t.x, t.y, t.size * s, o, 0, 0, !0), bt.globalAlpha = .2 * Math.min(2 * E, 1), ur(t.x, t.y, t.size * l, o, 0, 0, !0), bt.globalAlpha = 1, X.g.showParticles)
                    for (var u = (27 + a / 8) / 30 * 60 * at, c = Math.random(); c < u; c += Math.random()) {
                        var d = Math.random() * Math.PI * 2,
                            h = Object(f.l)(.03 * a, .06 * a),
                            p = Object(f.l)(30, 60);
                        mr(n, r, h * Math.sin(d), h * Math.cos(d), Object(f.l)(.1, .6) * (15 + a / 2), Math.random() * Math.PI * 2, 0, "#ffffff", p, 1, 10)
                    } else ur(t.x, t.y, t.size, o, 0, 0, !0);
                break;
            case 1:
                switch (yr(n, r, 1.3), t.subtype) {
                    case 0:
                        o = rn(t.gamemode), i = (O = performance.now() / 2500) + .5, s = 1 + 3 * (b = O - Math.floor(O)), l = 1 + 3 * (E = i - Math.floor(i));
                        bt.globalAlpha = .2 * Math.min(2 * (1 - b), 1), ur(t.x, t.y, t.size * s, o, 0, 0, !0), bt.globalAlpha = .2 * Math.min(2 * (1 - E), 1), ur(t.x, t.y, t.size * l, o, 0, 0, !0), bt.globalAlpha = 1;
                        var _ = "#000000";
                        if (0 !== (w = 1 - Math.min(t.lifetime / 20, 1)) && (_ = un(_, Math.floor(256 * w))), ur(t.x, t.y, t.size, _, 0, 0, !0), X.g.showParticles)
                            for (var g = 30 * at, v = Math.random(); v < g; v += Math.random()) {
                                var y = Math.random() * Math.PI * 2,
                                    m = .06 * t.size;
                                mr(n, r, m * Math.sin(y), m * Math.cos(y), Object(f.l)(.5, .8) * (t.size / 1.5), Math.random() * Math.PI * 2, 0, "#ffffff", 50, 1, 0, 1, !0)
                            }
                        break;
                    case 1:
                        var b, E, O = performance.now() / 2500,
                            w = (_ = "#000000", o = rn(t.gamemode), 1 - Math.min(t.lifetime / 20, 1)),
                            T = 2 * -O,
                            S = T + .5;
                        s = 1 + 5 * (b = T - Math.floor(T)), l = 1 + 5 * (E = S - Math.floor(S));
                        if (bt.globalAlpha = .2 * Math.min(2 * (1 - b), 1), ur(t.x, t.y, t.size * s, o, 0, 0, !0), bt.globalAlpha = .2 * Math.min(2 * (1 - E), 1), ur(t.x, t.y, t.size * l, o, 0, 0, !0), bt.globalAlpha = 1, ur(t.x, t.y, 4 * t.size, "#ffffff", -3, 20 * Math.cos(O / 10) * t.sign, !0, 1, .4 * t.size), ur(t.x, t.y, .5 * t.size * (Math.sin(10 * O + Math.PI) + 4), "#ffffff", -6, 4 * -O * t.sign, !0), ur(t.x, t.y, .5 * t.size * (Math.sin(10 * O) + 4), "#ffffff", -6, 4 * O * t.sign, !0), bt.globalAlpha = 1, 0 !== w && (_ = un(_, Math.floor(256 * w))), ur(t.x, t.y, 1.3 * t.size, _, -8, -O * t.sign, !0, 1, .4 * t.size), ur(t.x, t.y, 1.6 * t.size, _, -6, O * t.sign, !0, 1, .4 * t.size), ur(t.x, t.y, t.size, _, 0, 0, !0), X.g.showParticles)
                            for (var A = 12 * at, M = .08 * t.size, x = 50 * M, k = Math.random(); k < A; k += Math.random()) {
                                var C = Math.random() * Math.PI * 2,
                                    R = Math.sin(C),
                                    I = Math.cos(C);
                                mr(n - x * R, r - x * I, M * R, M * I, Object(f.l)(.5, .8) * (t.size / 1.5), Math.random() * Math.PI * 2, 0, "#ffffff", 50, 1, 0, 1, !0)
                            }
                }
                break;
            case 2:
                var L = Qt(o = an(e && e.team, t.lTeam, e ? e.id : "", t.lID), !1, t.lRadiant),
                    D = (O = performance.now()) * t.sign / 1e3;
                if (bt.globalAlpha = .5, ur(t.x, t.y, t.size * (2 + Math.cos(O / 1e3) / 2), L, 4, D, !0), bt.globalAlpha = 1, ur(t.x, t.y, t.size, L, 4, D, !0), X.g.showParticles) {
                    if (Math.random() < 1 / (300 / t.size)) {
                        var P = Math.random() * Math.PI * 2,
                            B = Math.random(),
                            N = B * t.size * (2 + Math.cos(O / 1e3) / 2);
                        mr(t.x + N * Math.sin(P), t.y + N * Math.cos(P), 1 * Math.random() - .5, 1 * Math.random() - .5, 18 - 8 * B, Math.random() * Math.PI * 2, 4, o, 30, .5, t.lRadiant)
                    }
                    if (t.lRadiant > 0 && Math.random() < 1 / (600 / t.size)) {
                        var j = Math.random() * Math.PI * 2,
                            U = Math.random() * t.size;
                        mr(t.x + U * Math.sin(j), t.y + U * Math.cos(j), (1 * Math.random() - .5) * t.lRadiant, (1 * Math.random() - .5) * t.lRadiant, Object(f.l)(6, 6 * t.lRadiant), Math.random(), 0, o, 60, 1, t.lRadiant)
                    }
                }
        }
    }

    function sr(e) {
        var t = Qt(e.color, !1, e.radiant),
            n = e.size;
        bt.globalAlpha = e.transparency * pn(e.lifetime, e.maxLifetime), ur(e.x, e.y, n, t, e.sides, e.d, !0), bt.globalAlpha = 1
    }

    function lr(e, t, n, r, a, o, i) {
        var s, l, u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
            c = i ? Tt : 1;
        i ? (s = dt.width / 2 + (e - At) / c, l = dt.height / 2 + (t - Mt) / c) : (s = e, l = t), Br(s, l, 2 * n / c, 2 * r / c, a, o, sn(o), u * ee.STROKE_SIZE / c)
    }

    function ur(e, t, n, r, a, o, i) {
        var s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
            l = arguments.length > 8 ? arguments[8] : void 0;
        null == l && (l = n / 2);
        var u, c, d = i ? Tt : 1;
        i ? (u = dt.width / 2 + (e - At) / d, c = dt.height / 2 + (t - Mt) / d) : (u = e, c = t), 0 == a ? Dr(u, c, n / d, r, sn(r), s * ee.STROKE_SIZE / d) : a > 0 ? Ur(u, c, n / d, a, r, sn(r), s * ee.STROKE_SIZE / d, o) : jr(u, c, n / d, l / d, -a, r, sn(r), s * ee.STROKE_SIZE / d, o), bt.setTransform(1, 0, 0, 1, 0, 0)
    }

    function cr(e, t) {
        var n;
        n = e ? an(e.team, t.team, e.id, t.id) : an(0, t.team, 0, t.parentID);
        var r = t.showName;
        e && X.g.showNames && (e.id != t.id || X.g.showOwnName) || (r = !1), dr(t, n, r, !0)
    }

    function dr(e, t, n, r) {
        var a = Qt(t, e.isInvulnerable, e.radiant),
            o = an(e.nameColor, e.nameColor),
            i = e.x,
            l = e.y,
            u = (e.d, dt.width / 2 + (i - At) / Tt),
            c = dt.height / 2 + (l - Mt) / Tt,
            d = e.size * (1 + .5 * (1 - (e.fadeTime || 1)));
        if (bt.globalAlpha = e.fadeTime, n && (Mn(u, c - d / Tt - 20, "lv. " + Math.round(e.level), 15, ee.TEXT_STROKE, bt.globalAlpha, o), Mn(u, c - d / Tt - 50, e.name, 30, ee.TEXT_STROKE, bt.globalAlpha, o)), s.j) {
            var h = [];
            X.g.showIds && h.push(e.id), X.g.showClassNames && h.push(e.className);
            for (var p = 0; p < h.length; p++) Mn(u, c - d / Tt + 10 + 23 * p, h[p], 15, ee.TEXT_STROKE, bt.globalAlpha, o)
        }
        if (e.hp < .99 * e.maxHP) {
            var _ = function (e) {
                for (var t = cn(e), n = t.reduce((function (e, t) {
                    return e + t
                })) / t.length, r = Math.floor(Math.max(n, 70) - n), a = 0; a < t.length; a++) t[a] = Math.min(t[a] + r, 255);
                return dn(t)
            }(a),
                g = d / Tt * 2,
                v = c + (d + 8) / Tt;
            bt.lineCap = "round", bt.strokeStyle = "black", bt.lineWidth = 2 * kt, bt.beginPath(), bt.moveTo(u - d / Tt, v), bt.lineTo(u - d / Tt + g, v), bt.stroke(), bt.strokeStyle = dn(fn(cn(_), "#000000", .8)), bt.lineWidth = kt, bt.beginPath(), bt.moveTo(u - d / Tt, v), bt.lineTo(u - d / Tt + g * Math.max(1, 0), v), bt.stroke(), bt.strokeStyle = un(_, Math.round(80 * (1 - e.damageTime || 0))), bt.lineWidth = kt, bt.beginPath(), bt.moveTo(u - d / Tt, v), bt.lineTo(u - d / Tt + g * (Math.max(e.hp, 0) / e.maxHP), v), bt.stroke()
        }
        if (e.id in f.c && X.g.showChat) {
            var y = f.c[e.id],
                m = 0,
                b = (n ? "" == e.name ? 55 : 95 : 25) - 20;
            y.forEach((function (e) {
                var t = hn(e.time, ee.CHAT_STAY_TIME);
                An(u, c - d / Tt - b - m, e.message, 1, 25, 0, !0, t), m += t * (e.message.height + 12.5)
            }))
        }
        bt.globalAlpha = 1
    }

    function fr(e) {
        bt = gt, lt.width = 4096, lt.height = 4096;
        var t = lt.width / 2,
            n = lt.height / 2,
            r = 1.5 * e.size,
            a = e.d,
            o = c.POLYGON_COLORS[e.color] || Qt(an(e.team, e.team, 0, 0));
        if (e.gadgets) {
            for (var i = 0; i < e.gadgets.length; i++) {
                var s = e.gadgets[i];
                s.animTime = 0, 0 == s.type && delete s.rot
            }
            for (var l = 0; l < e.barrels.length; l++) {
                e.barrels[l].animTime = 0
            }
        }
        e.outerSize > 0 && ur(t, n, r + e.outerSize * r, ee.SPIKE_COLOR, e.outerSides, a, !1, 1.5, r), e.gadgets && kr(t, n, r, a, e.barrels, !1, 1.5), ur(t, n, r, o, e.sides, a, !1, 1.5), e.gadgets && (wr(t, n, a, r, o, e.layers, 0, 0, !1, !1, 1.5), Ar(t, n, r, a, e.gadgets, o, 0, 0, !1, !1, 1.5)), bt = ht,
            function (e, t) {
                var n = e.toDataURL(),
                    r = document.createElement("a");
                r.href = n, r.download = t, document.body.appendChild(r), r.click()
            }(function (e) {
                var t, n, r, a = e.getContext("2d"),
                    o = document.createElement("canvas").getContext("2d"),
                    i = a.getImageData(0, 0, e.width, e.height),
                    s = i.data.length,
                    l = {
                        top: null,
                        left: null,
                        right: null,
                        bottom: null
                    };
                for (t = 0; t < s; t += 4) 0 !== i.data[t + 3] && (n = t / 4 % e.width, r = ~~(t / 4 / e.width), null === l.top && (l.top = r), (null === l.left || n < l.left) && (l.left = n), (null === l.right || l.right < n) && (l.right = n), (null === l.bottom || l.bottom < r) && (l.bottom = r));
                l.bottom++, l.right++;
                var u = l.bottom - l.top,
                    c = l.right - l.left,
                    d = a.getImageData(l.left, l.top, c, u);
                return o.canvas.width = c, o.canvas.height = u, o.putImageData(d, 0, 0), o.canvas
            }(lt), "".concat(e.filename, ".png")), console.log("Downloading entity: ", e)
    }
    var hr = [],
        pr = 0,
        _r = 0;

    function gr() {
        hr = [], pr = 0, _r = 0
    }

    function vr(e) {
        pr = 0, _r = 0, hr.forEach((function (t) {
            var n = 1 / (Math.pow(function (e) {
                var t = At - e.x,
                    n = Mt - e.y;
                return Math.sqrt(t * t + n * n)
            }(t), 2) / c.CAMERA_SHAKE_DIST);
            n = Math.min(1, n), pr += n * t.power * (t.time / t.maxTime) * (1 - 2 * Math.random()), _r += n * t.power * (t.time / t.maxTime) * (1 - 2 * Math.random()), t.time -= e, t.time < 0 && hr.splice(hr.indexOf(t), 1)
        }))
    }

    function yr(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-4;
        0 != X.g.cameraShake && hr.push({
            x: e,
            y: t,
            power: n * X.g.cameraShake / 100,
            time: r,
            maxTime: r
        })
    }

    function mr(e, t, n, r, a, o, i, s, l) {
        var u = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 1,
            d = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
            f = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 1,
            h = arguments.length > 12 && void 0 !== arguments[12] && arguments[12];
        He.length < c.MAX_PARTICLES && X.g.showParticles && He.push({
            x: e,
            y: t,
            xVel: n,
            yVel: r,
            size: a,
            d: o,
            sides: i,
            color: s,
            lifetime: l / 60,
            maxLifetime: l,
            transparency: u,
            radiant: d,
            friction: f,
            below: h
        })
    }

    function br() {
        He = []
    }

    function Er(e) {
        var t = e.x,
            n = -e.y,
            r = ee.POLYGON_COLORS[e.level],
            a = 20;
        if (e.polyp) a = 45, r = c.CELESTIAL_COLOR;
        else
            for (var o = 0; o < e.level; o++) a *= 1.5;
        ur(t, n, a, r, e.polyp ? 3 : 3 + e.level, e.d, !0)
    }

    function Or(e, t, n, r, a, o, i, s, l) {
        var u = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [],
            c = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : [],
            d = e,
            f = -t;
        i > 0 && ur(d, f, n + i * n, ee.SPIKE_COLOR, o, r, !0, 1, n), kr(d, f, n, r, l, !0), ur(d, f, n, s, a, r, !0), wr(d, f, r, n, s, c, 0, 0, !1, !0), Ar(d, f, n, r, u, s, 0, !1, s, !0)
    }

    function wr(e, t, n, r, a, o, i, s, l) {
        for (var u = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9], c = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 1, d = 0; d < o.length; d++) {
            var h = o[d],
                p = a;
            h.hasOwnProperty("team") && (p = un(Qt(an(h.team, h.team, 0, 0), l, s), i)), h.offsetX || (h.offsetX = 0), h.offsetY || (h.offsetY = 0);
            var _ = n + (h.rot || 0),
                g = e + (h.offsetX * Math.sin(1.57079633 - n) + h.offsetY * Math.cos(n + 1.57079633)) * r,
                v = t + (h.offsetY * Math.cos(n) + h.offsetX * Math.sin(-n + Math.PI)) * r;
            if (h.outerSize > 0 && ur(g, v, (h.size + h.outerSize) * r, h.selected ? ln(ee.SPIKE_COLOR.substring(1), "ffffff", .2 + (1 + Math.sin(performance.now() / 250)) / 2 * .8) : ee.SPIKE_COLOR, h.outerSides, _, u, c, h.size * r), ur(g, v, h.size * r, h.selected ? ln(p.substring(1), "ffffff", .2 + (1 + Math.sin(performance.now() / 250)) / 2 * .8) : p, h.sides, _, u, c), er && fe) {
                var y = e + (-h.offsetY * Math.sin(n) + h.offsetX * Math.sin(n + Cr)) * r,
                    m = t - (h.offsetX * Math.cos(n + Cr) + -h.offsetY * Math.cos(n)) * r,
                    b = {
                        x: dt.width / 2 + (y - At) / Tt,
                        y: dt.height / 2 + (m - Mt) / Tt,
                        r: (h.size + h.outerSize) * r / Tt,
                        rot: n
                    };
                Object(f.n)(Pe, b) && ge.push({
                    type: "layer",
                    index: d,
                    stack: q(tr)
                })
            }
        }
    }

    function Tr(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (e.gadgets) {
            var n, r = e.size * (1 + .5 * (1 - (e.fadeTime || 1))),
                a = null !== (n = e.lastColor) && void 0 !== n ? n : "#ffffff",
                o = Math.min(e.fadeTime || 1, 1),
                i = function e(n, r, i, s, l) {
                    for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        if (2 == c.type && 0 != c.alpha && (bt.globalAlpha = o * (c.alpha || .3), Sr(n, r, c.offsetX, c.offsetY, c.subtype, c.auraColor, c.rotationType, i, c.rot, s, c.sides, c.radius, a, c.alpha, t && 0 == c.showParticles)), 3 == c.type) {
                            var d = void 0;
                            switch (c.rotationType) {
                                case 0:
                                    d = c.baseRot + i;
                                    break;
                                case 1:
                                    d = null == c.rot ? c.baseRot + i : c.rot;
                                    break;
                                case 2:
                                    d = null == c.rot ? c.baseRot + i : 0 == c.anchored ? c.baseRot + i + c.rot : c.rot
                            }
                            e(n + (c.offsetX * Math.sin(1.57079633 - i) + c.offsetY * Math.cos(i + 1.57079633)) * s, r + (c.offsetY * Math.cos(i) + c.offsetX * Math.sin(-i + Math.PI)) * s, d, c.width * s, c.tank.gadgets)
                        }
                    }
                };
            i(e.x, e.y, e.d, r, e.gadgets), bt.globalAlpha = 1
        }
    }

    function Sr(e, t, n, r, a, o, i, s, l, u, c, d, f, h) {
        var p = !(arguments.length > 14 && void 0 !== arguments[14]) || arguments[14],
            _ = tn(a, o, f),
            g = dt.width / 2 + (e - At) / Tt,
            v = dt.height / 2 + (t - Mt) / Tt;
        if (p && Math.random() < 1 / (300 / (u * d))) {
            var y = Math.random() * Math.PI * 2,
                m = Math.random() * (u * d);
            mr(e + m * Math.sin(y) + (n * Math.sin(1.57079633 - s) + r * Math.cos(s + 1.57079633)) * u, t + m * Math.cos(y) + (r * Math.cos(s) + n * Math.sin(-s + Math.PI)) * u, 1 * Math.random() - .5, 1 * Math.random() - .5, 6, Math.random() * Math.PI * 2, c, _, 30, h)
        }
        bt.translate(g, v), bt.rotate(s), bt.translate(-g, -v), ur(e + n * u, t + r * u, u * d, _, c, (0 == i ? 0 : -s) + l, !0)
    }

    function Ar(e, t, n, r, a, o, i, s, l, u) {
        for (var c = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 1, d = 0; d < a.length; d++) {
            var f = a[d];
            3 == f.type ? xr(d, e, t, n, r, f, o, i, s, l, u, c) : Mr(d, e, t, n, r, f, o, u, c)
        }
    }

    function Mr(e, t, n, r, a, o, i, s) {
        var l, u, d, h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1,
            p = s ? Tt : 1,
            _ = o.width * (1.5 - .8 * Math.max(0, o.animTime || 0)) * r,
            g = o.length * (1 - .2 * Math.max(0, o.animTime || 0));
        s ? (u = dt.width / 2 + (t - At) / p, d = dt.height / 2 + (n - Mt) / p) : (u = t, d = n);
        var v = null == o.color ? c.BARREL_COLOR : an(o.color, o.color);
        switch (bt.lineJoin = "round", bt.fillStyle = o.selected ? ln(v.substring(1), "ffffff", .2 + (1 + Math.sin(performance.now() / 250)) / 2 * .8) : v, bt.lineWidth = h * ee.STROKE_SIZE / p, bt.strokeStyle = sn(bt.fillStyle), bt.beginPath(), bt.translate(u, d), bt.rotate(a), bt.translate(o.offsetX * r / p, o.offsetY * r / p), o.type) {
            case 0:
                bt.rotate(-a), bt.rotate(null !== (l = o.rot) && void 0 !== l ? l : a + o.baseRot), bt.rect(-1 * o.width * r / p, -2 * g * r / p, o.width * r * 2 / p, 2 * r * g / p)
        }
        switch (bt.fill(), bt.stroke(), o.type) {
            case 0:
                Dr(0, 0, 1.5 * o.width * r / p, bt.fillStyle, bt.strokeStyle, h * ee.STROKE_SIZE / p);
                break;
            case 1:
                bt.rotate(o.rot), bt.beginPath(), bt.rect(_ / p * -.5, _ / p * -.5, _ / p, _ / p), bt.fill(), bt.stroke();
                break;
            case 2:
                bt.setTransform(1, 0, 0, 1, 0, 0), bt.translate(u, d), bt.rotate(a), bt.translate(-u, -d), ur(t + o.offsetX * r, n + o.offsetY * r, o.width * r, bt.fillStyle, o.backSides, o.rot, s, h), bt.translate(u, d), bt.rotate(a), bt.translate(-u, -d), ur(t + o.offsetX * r, n + o.offsetY * r, o.width * r * .5, tn(o.subtype, o.auraColor, i), o.sides, (0 == o.rotationType ? 0 : -a) + o.rot, s, h)
        }
        if (er && fe) {
            var y = t + (-o.offsetY * Math.sin(a) + o.offsetX * Math.sin(a + Cr)) * r,
                m = n - (o.offsetX * Math.cos(a + Cr) + -o.offsetY * Math.cos(a)) * r,
                b = {
                    x: dt.width / 2 + (y - At) / Tt,
                    y: dt.height / 2 + (m - Mt) / Tt,
                    r: o.width * r * (0 == o.type ? 1.5 : 1) / Tt
                };
            Object(f.n)(Pe, b) && ge.push({
                type: "gadget",
                index: e,
                stack: q(tr)
            })
        }
        bt.setTransform(1, 0, 0, 1, 0, 0)
    }

    function xr(e, t, n, r, a, o, i, s, l, u, c) {
        var d, h = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 1;
        switch (o.rotationType) {
            case 0:
                d = o.baseRot + a;
                break;
            case 1:
                d = null == o.rot ? o.baseRot + a : o.rot;
                break;
            case 2:
                d = null == o.rot ? o.baseRot + a : 0 == o.anchored ? o.baseRot + a + o.rot : o.rot
        }
        var p, _ = t + (o.offsetX * Math.sin(1.57079633 - a) + o.offsetY * Math.cos(a + 1.57079633)) * r,
            g = n + (o.offsetY * Math.cos(a) + o.offsetX * Math.sin(-a + Math.PI)) * r,
            v = i;
        if (null != o.team && (v = 1 == o.suppressColor ? un(Qt(an(o.team, o.team, 0, 0), u, l), s) : an(o.team, o.team, 0, 0)), er && fe && (p = q(tr), tr.push(e)), o.outerSize > 0 && ur(_, g, (o.width + o.outerSize) * r, o.selected ? ln(ee.SPIKE_COLOR.substring(1), "ffffff", .2 + (1 + Math.sin(performance.now() / 250)) / 2 * .8) : ee.SPIKE_COLOR, o.outerSides, d, c, h, o.width * r), kr(_, g, r * o.width, d, o.tank.barrels, c, h), er && fe) {
            var y = t + (-o.offsetY * Math.sin(a) + o.offsetX * Math.sin(a + Cr)) * r,
                m = n - (o.offsetX * Math.cos(a + Cr) + -o.offsetY * Math.cos(a)) * r,
                b = {
                    x: dt.width / 2 + (y - At) / Tt,
                    y: dt.height / 2 + (m - Mt) / Tt,
                    r: o.width * r / Tt
                };
            Object(f.n)(Pe, b) && ge.push({
                type: "gadget",
                index: e,
                stack: q(tr).slice(0, -1)
            })
        }
        ur(_, g, o.width * r, o.selected ? ln(v.substring(1), "ffffff", .2 + (1 + Math.sin(performance.now() / 250)) / 2 * .8) : v, o.sides, d, c, h), wr(_, g, d, r * o.width, v, o.tank.layers, s, l, u, c, h), Ar(_, g, r * o.width, d, o.tank.gadgets, v, s, l, u, c, h), er && fe && (tr = p)
    }

    function kr(e, t, n, r, a, o) {
        for (var i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1, s = 0; s < a.length; s++) {
            var l = a[s];
            Rr(s, e, t, n, r + l.rot, l.offset, l.distance, l.width, l.length, l.animTime, null == l.visualType ? l.type : l.visualType, o, i, l.selected, l.color)
        }
    }
    var Cr = Math.PI / 2;

    function Rr(e, t, n, r, a, o, i, s, l, u, d, h) {
        var p, _, g = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
            v = arguments.length > 13 ? arguments[13] : void 0,
            y = arguments.length > 14 ? arguments[14] : void 0,
            m = h ? Tt : 1,
            b = l * (1 - .2 * Math.max(0, u || 0));
        h ? (p = dt.width / 2 + (t - At) / m, _ = dt.height / 2 + (n - Mt) / m) : (p = t, _ = n);
        var E = null == y ? c.BARREL_COLOR : an(0, y);
        switch (bt.lineJoin = "round", bt.fillStyle = v ? ln(E.substring(1), "ffffff", .2 + (1 + Math.sin(performance.now() / 250)) / 2 * .8) : E, bt.lineWidth = g * ee.STROKE_SIZE / m, bt.strokeStyle = sn(bt.fillStyle), bt.beginPath(), bt.translate(p, _), bt.rotate(a), bt.translate(o * r / m, -i * r / m), d) {
            case 0:
                bt.rect(-1 * s * r / m, -2 * b * r / m, s * r * 2 / m, 2 * r * b / m);
                break;
            case 1:
                Nr(-1 * s * r / m, 0 / m, s * r * 2 / m, -2 * r * b / m, s * r / m);
                break;
            case 2:
                bt.rect(-.5 * s * r / m, -1.5 * b * r / m, s * r / m, 1.5 * r * b / m), bt.fill(), bt.stroke(), Nr(-1 * s * r / m, -1.5 * r * b / m, s * r * 2 / m, -2 * r * b / m, s * r / m);
                break;
            case 3:
                bt.rect(-s * r / m, -1.33333333333 * b * r / m, s * r * 2 / m, 1.33333333333 * r * b / m), bt.fill(), bt.stroke(), bt.rect(-.7 * s * r / m, -1.3333333333 * b * r / m, 1.4 * s * r / m, -.3333333333 * r * b / m), bt.fill(), bt.stroke(), bt.rect(-s * r / m, -1.66666666666666 * b * r / m, s * r * 2 / m, -.3333333333 * r * b / m), bt.fill(), bt.stroke();
                break;
            case 4:
                Nr(-1 * s * r / m, 0 / m, s * r * 2 / m, -1.3333333333 * r * b / m, s * r / m), bt.rect(-.7 * s * r / m, -1.3333333333 * b * r / m, 1.4 * s * r / m, -.3333333333 * r * b / m), bt.fill(), bt.stroke(), Nr(-.5 * s * r / m, -1.66666666666666 * b * r / m, s * r / m, -2 * r * b / m, s * r * 2 / m);
                break;
            case 5:
                Nr(-1 * s * r / m, 0 / m, s * r * 2 / m, -1.3333333333 * r * b / m, s * r / m), bt.rect(-.7 * s * r / m, -1.3333333333 * b * r / m, 1.4 * s * r / m, -.3333333333 * r * b / m), bt.fill(), bt.stroke(), Nr(-1 * s * r / m, -1.66666666666666 * b * r / m, 2 * s * r / m, -2 * r * b / m, s * r / m);
                break;
            case 6:
                Nr(-.5 * s * r / m, 0 / m, s * r * 1 / m, -2 * r * b / m, s * r * 2 / m);
                break;
            case 7:
                bt.rect(-s * r / m, -1.33333333333 * b * r / m, s * r * 2 / m, 1.33333333333 * r * b / m), bt.fill(), bt.stroke(), Nr(-1 * s * r / m, -1.33333333333 * b * r / m, 2 * s * r / m, -1.6666666666666 * r * b / m, s * r / m), bt.rect(-s * r / m, -1.66666666666666 * b * r / m, s * r * 2 / m, -.3333333333 * r * b / m), bt.fill(), bt.stroke();
                break;
            case 8:
                bt.rect(-.5 * s * r / m, -1.33333333333 * b * r / m, s * r / m, 1.33333333333 * r * b / m), bt.fill(), bt.stroke(), Nr(-1 * s * r / m, -1.33333333333 * b * r / m, 2 * s * r / m, -1.6666666666666 * r * b / m, s * r / m), bt.rect(-s * r / m, -1.66666666666666 * b * r / m, s * r * 2 / m, -.3333333333 * r * b / m), bt.fill(), bt.stroke();
                break;
            case 9:
                Nr(-.5 * s * r / m, 0 / m, s * r / m, -1.3333333333 * r * b / m, s * r * 2 / m), bt.fill(), bt.stroke(), bt.rect(-.6666666666666 * s * r / m, -1.3333333333 * b * r / m, 1.3333333333 * s * r / m, -.3333333333 * r * b / m), bt.fill(), bt.stroke(), Nr(-1 * s * r / m, -1.66666666666666 * b * r / m, 2 * s * r / m, -2 * r * b / m, s * r / m)
        }
        if (bt.fill(), bt.stroke(), bt.setTransform(1, 0, 0, 1, 0, 0), er && fe) {
            var O = b,
                w = i + O,
                T = o,
                S = t + (w * Math.sin(a) + T * Math.sin(a + Cr)) * r,
                A = n - (T * Math.cos(a + Cr) + w * Math.cos(a)) * r,
                M = s * r * 2,
                x = O * r * 2,
                k = {
                    x: dt.width / 2 + (S - At) / m,
                    y: dt.height / 2 + (A - Mt) / m,
                    height: x / m,
                    width: M / m,
                    rot: a
                };
            Object(f.o)(Pe, k) && ge.push({
                type: "barrel",
                index: e,
                stack: q(tr)
            })
        }
    }

    function Ir(e, t, n, r, a, o) {
        n < 2 * a && (a = n / 2), r < 2 * a && (a = r / 2), e -= n / 2, t -= r / 2, bt.beginPath(), bt.moveTo(e + a, t), bt.arcTo(e + n, t, e + n, t + r, a), bt.arcTo(e + n, t + r, e, t + r, a), bt.arcTo(e, t + r, e, t, a), bt.arcTo(e, t, e + n, t, a), bt.closePath(), bt.fillStyle = o, bt.fill()
    }

    function Lr(e, t, n, r, a) {
        n < 2 * a && (a = n / 2), r < 2 * a && (a = r / 2), e -= n / 2, t -= r / 2, bt.beginPath(), bt.moveTo(e + a, t), bt.arcTo(e + n, t, e + n, t + r, a), bt.arcTo(e + n, t + r, e, t + r, a), bt.arcTo(e, t + r, e, t, a), bt.arcTo(e, t, e + n, t, a), bt.closePath()
    }

    function Dr(e, t, n, r, a, o) {
        bt.lineJoin = "round", bt.beginPath(), bt.arc(e, t, n, 0, 2 * Math.PI, !1), bt.fillStyle = r, bt.lineWidth = o, bt.strokeStyle = a, bt.fill(), bt.stroke()
    }

    function Pr(e, t, n, r) {
        bt.beginPath(), bt.arc(e, t, n, 0, 2 * Math.PI, !1), bt.fillStyle = r, bt.fill()
    }

    function Br(e, t, n, r, a, o, i, s) {
        bt.lineJoin = "round", bt.beginPath(), bt.translate(e, t), bt.rotate(a), bt.rect(-n / 2, -r / 2, n, r), bt.fillStyle = o, bt.lineWidth = s, bt.strokeStyle = i, bt.fill(), bt.stroke(), bt.setTransform(1, 0, 0, 1, 0, 0)
    }

    function Nr(e, t, n, r, a) {
        bt.lineJoin = "round", bt.beginPath(), bt.moveTo(e + (n - a) / 2, t), bt.lineTo(e + n - (n - a) / 2, t), bt.lineTo(e + n, r), bt.lineTo(e, r), bt.closePath()
    }

    function jr(e, t, n, r, a, o, i, s, l) {
        bt.lineJoin = "round", bt.beginPath(), bt.translate(e, t), bt.rotate(l), a % 2 != 0 && bt.rotate(-90 * Math.PI / 180), bt.moveTo(n * Math.cos(0), n * Math.sin(0)), bt.lineTo(r * Math.cos(1 * Math.PI / a), r * Math.sin(1 * Math.PI / a));
        for (var u = 1; u <= a; u += 1) bt.lineTo(n * Math.cos(2 * u * Math.PI / a), n * Math.sin(2 * u * Math.PI / a)), bt.lineTo(r * Math.cos(2 * (u + .5) * Math.PI / a), r * Math.sin(2 * (u + .5) * Math.PI / a));
        bt.fillStyle = o, bt.lineWidth = s, bt.strokeStyle = i, bt.fill(), bt.stroke()
    }

    function Ur(e, t, n, r, a, o, i, s) {
        bt.lineJoin = "round", bt.beginPath(), bt.translate(e, t), bt.rotate(s), r % 2 != 0 && bt.rotate(-90 * Math.PI / 180), bt.moveTo(n * Math.cos(0), n * Math.sin(0));
        for (var l = 1; l <= r + 1; l += 1) bt.lineTo(n * Math.cos(2 * l * Math.PI / r), n * Math.sin(2 * l * Math.PI / r));
        bt.fillStyle = a, bt.fill(), bt.lineWidth = i, bt.strokeStyle = o, bt.stroke()
    }

    function zr(e, t, n, r) {
        for (var a = r.size * (1 + .5 * (1 - (r.fadeTime || 1))), o = 0; o < r.gadgets.length; o++) {
            var i = r.gadgets[o];
            if (2 == i.type) {
                var s = r.x + (-i.offsetY * Math.sin(r.d) + i.offsetX * Math.sin(r.d + Cr)) * a,
                    l = r.y - (i.offsetX * Math.cos(r.d + Cr) + -i.offsetY * Math.cos(r.d)) * a,
                    u = (0 == i.rotationType ? r.d : 0) + i.rot;
                Yr(e + s / Tt, t + l / Tt, u, 1 * a * i.radius / Tt, i.sides, r.fadeTime), Yr(e + s / Tt, t + l / Tt, u, 1.5 * a * i.radius / n / Tt, i.sides, .2 * r.fadeTime)
            }
        }
    }

    function Wr(e, t, n, r) {
        var a = r.size * (1 + .5 * (1 - (r.fadeTime || 1))),
            o = performance.now(),
            i = 1 - 1 / (r.radiant + .5);
        r.radiant > 2 && (i = 1);
        var s = Math.min(1, r.fadeTime || 1);
        if (Yr(e + r.x / Tt, t + r.y / Tt, r.d, Math.max(a, 1.2 * a / n) / Tt, r.sides, s * i), r.radiant > 2) {
            if (r.radiant > 3) {
                var l = Math.max(1.5 + r.radiant / 5 + .06 * (1 + Math.sin(o / 800 * ((1 + r.radiant) / 2))) * r.radiant, .1);
                Yr(e + r.x / Tt, t + r.y / Tt, 20 * Math.cos(o / 25e3) * (1 + r.radiant) / 2, a * l * (1 + (r.outerSize || 0)) / Tt, -3, s * i, .4 * a / Tt)
            }
            var u = 2 / ((r.radiant + 2) / 5);
            Yr(e + r.x / Tt, t + r.y / Tt, o / 2e3 * (1 + r.radiant) / 2, (a + (r.outerSize || 0) * a) * (Math.cos(o / 500 + Math.PI) / u + 1) / Tt, -6, s * i), Yr(e + r.x / Tt, t + r.y / Tt, -o / 2e3 * (1 + r.radiant) / 2, (a + (r.outerSize || 0) * a) * (Math.cos(o / 500) / u + 1) / Tt, -6, s * i)
        }
        if (i *= 1 - .7 / ((2 + r.radiant) / 3), r.radiant > 1) {
            var c = Math.max(1.2 + .1 * (1 + Math.sin(o / 800 * ((2 + r.radiant) / 4))) * r.radiant, .1);
            Yr(e + r.x / Tt, t + r.y / Tt, r.d, a * c * 2 * (1 + (r.outerSize || 0)) / Tt, r.outerSize > 0 ? r.outerSides : r.sides, s * i)
        }
    }

    function Kr(e, t, n, r) {
        Yr(e + r.x / Tt, t + r.y / Tt, r.d, Math.max(r.size, 1.2 * r.size / n) / Tt, r.sides, r.transparency * pn(r.lifetime, r.maxLifetime) * (1 - 1 / (r.radiant + .5)))
    }

    function Gr(e, t, n, r, a, o, i) {
        var s = bt.globalAlpha;
        bt.globalAlpha = i, bt.globalCompositeOperation = "destination-out", bt.lineJoin = "round", bt.lineWidth = a / 2, bt.translate(e, t), bt.rotate(n - Object(h.degreesToRadians)(90)), bt.beginPath(), bt.moveTo(0, o / 2), bt.lineTo(r, a / 2), bt.lineTo(r, a / -2), bt.lineTo(0, o / -2), bt.fill(), bt.stroke(), bt.setTransform(1, 0, 0, 1, 0, 0), bt.globalCompositeOperation = "source-over", bt.globalAlpha = s
    }

    function Yr(e, t, n, r, a, o, i) {
        null == i && (i = r / 2), 0 == a ? Fr(e, t, r, o) : a > 0 ? function (e, t, n, r, a, o) {
            var i = bt.globalAlpha;
            bt.globalAlpha = o, bt.globalCompositeOperation = "destination-out", bt.beginPath(), bt.translate(e, t), bt.rotate(n), a % 2 != 0 && bt.rotate(-90 * Math.PI / 180);
            bt.moveTo(r * Math.cos(0), r * Math.sin(0));
            for (var s = 1; s <= a + 1; s += 1) bt.lineTo(r * Math.cos(2 * s * Math.PI / a), r * Math.sin(2 * s * Math.PI / a));
            bt.fill(), bt.setTransform(1, 0, 0, 1, 0, 0), bt.globalCompositeOperation = "source-over", bt.globalAlpha = i
        }(e, t, n, r, a, o) : function (e, t, n, r, a, o, i) {
            var s = bt.globalAlpha;
            bt.globalAlpha = i, bt.globalCompositeOperation = "destination-out", bt.beginPath(), bt.translate(e, t), bt.rotate(n), a % 2 != 0 && bt.rotate(-90 * Math.PI / 180);
            bt.moveTo(r * Math.cos(0), r * Math.sin(0)), bt.lineTo(o * Math.cos(1 * Math.PI / a), o * Math.sin(1 * Math.PI / a));
            for (var l = 1; l <= a; l += 1) bt.lineTo(r * Math.cos(2 * l * Math.PI / a), r * Math.sin(2 * l * Math.PI / a)), bt.lineTo(o * Math.cos(2 * (l + .5) * Math.PI / a), o * Math.sin(2 * (l + .5) * Math.PI / a));
            bt.fill(), bt.setTransform(1, 0, 0, 1, 0, 0), bt.globalCompositeOperation = "source-over", bt.globalAlpha = s
        }(e, t, n, r, -a, i, o)
    }

    function Fr(e, t, n, r) {
        var a = bt.globalAlpha;
        bt.globalAlpha = r, bt.globalCompositeOperation = "destination-out", bt.beginPath(), bt.arc(e, t, n, 0, 2 * Math.PI, !0), bt.fill(), bt.globalCompositeOperation = "source-over", bt.globalAlpha = a
    }

    function Hr(e, t, n, r, a, o) {
        var i = bt.globalAlpha;
        bt.globalAlpha = o, bt.globalCompositeOperation = "destination-out", bt.beginPath(), bt.translate(e, t), bt.rotate(a), bt.rect(-n, -r, 2 * n, 2 * r), bt.fill(), bt.setTransform(1, 0, 0, 1, 0, 0), bt.globalCompositeOperation = "source-over", bt.globalAlpha = i
    }

    function Vr() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = dt.width / 2 - At / Tt,
            r = dt.height / 2 - Mt / Tt;
        if (t) e = b[Ze < .5 ? qe : Xe].dimension;
        else {
            var a = u.b[Ve];
            e = a || u.a
        }
        $e = e;
        for (var o = e.visual, i = o.particles, s = 1.2 * St, l = Math.min(c.MAX_PARTICLES, St * St * i.spawnrate), d = Math.random(); d < l; d += Math.random()) {
            var p = Object(h.degreesToRadians)(Object(f.l)(i.d.min, i.d.max)),
                _ = Object(f.l)(i.speed.min, i.speed.max);
            mr(At + Math.random() * s - s / 2, Mt + Math.random() * s - s / 2, _ * Math.sin(p), _ * Math.cos(p), Object(f.l)(i.size.min, i.size.max), Math.random() * Math.PI * 2, Math.round(Object(f.l)(i.sides.min, i.sides.max)), dn(fn(cn(i.color.min), cn(i.color.max), Math.random())), Object(f.l)(i.lifetime.min, i.lifetime.max), Object(f.l)(i.transparency.min, i.transparency.max), i.radiant ? 1 : 0)
        }
        bt.fillStyle = o.backgroundColor, bt.fillRect(0, 0, bt.canvas.width, bt.canvas.height);
        var g = ee.GRID_STROKE / Tt;
        if (g > .3) {
            var v = o.gridSize / Tt,
                y = Math.round(n / v) * v,
                m = Math.round(r / v) * v;
            bt.lineWidth = g, bt.strokeStyle = o.gridColor, bt.beginPath();
            for (var E = n; E < bt.canvas.width + n; E += v) bt.moveTo(E - y, 0), bt.lineTo(E - y, bt.canvas.height);
            for (var O = r; O < bt.canvas.height + r; O += v) bt.moveTo(0, O - m), bt.lineTo(bt.canvas.width, O - m);
            bt.closePath(), bt.stroke()
        }
        Xr(e.visual.wallColor || "#00000029", e.bases, e.walls)
    }

    function Xr(e, t, n) {
        for (var r = 0; r < t.length; r++) {
            var a = t[r];
            bt.fillStyle = an(0, a.team, 0, 0) + "29";
            var o = a.width * xt,
                i = a.height * xt;
            bt.fillRect(dt.width / 2 - (-a.x * xt + At + o / 2) / Tt, dt.height / 2 - (-a.y * xt + Mt + i / 2) / Tt, o / Tt, i / Tt)
        }
        bt.fillStyle = e;
        for (var s = 0; s < n.length; s++) {
            var l = n[s],
                u = l.width * xt,
                c = l.height * xt;
            bt.fillRect(dt.width / 2 - (-l.x * xt + At + u / 2) / Tt, dt.height / 2 - (-l.y * xt + Mt + c / 2) / Tt, u / Tt, c / Tt)
        }
        bt.fillRect(0, dt.height / 2 - (Mt + xt) / Tt, dt.width / 2 - (At + xt) / Tt, 2 * xt / Tt), bt.fillRect(dt.width, dt.height / 2 - (Mt + xt) / Tt, (-At + xt) / Tt - dt.width / 2, 2 * xt / Tt), bt.fillRect(0, 0, dt.width, dt.height / 2 - (Mt + xt) / Tt), bt.fillRect(0, dt.height, dt.width, (-Mt + xt) / Tt - dt.height / 2)
    }

    function qr() {
        for (var e = $e.gates, t = 0; t < e.length; t++) {
            var n = e[t],
                r = {
                    x: n.x * xt,
                    y: n.y * xt,
                    size: n.size / 2 * xt
                };
            if (Gt({
                x: r.x,
                y: r.y,
                size: r.size
            }, 3)) switch (n.type) {
                case 0:
                    var a = (R = performance.now() / 2500) + .5,
                        o = 1 + 9 * (v = R - Math.floor(R)),
                        i = 1 + 9 * (y = a - Math.floor(a));
                    if (bt.globalAlpha = .2 * Math.min(2 * (1 - v), 1), lr(r.x, r.y, 30 * o, r.size, n.rot, "#ffffff", !0), bt.globalAlpha = .2 * Math.min(2 * (1 - y), 1), lr(r.x, r.y, 30 * i, r.size, n.rot, "#ffffff", !0), bt.globalAlpha = 1, lr(r.x, r.y, 30, r.size, n.rot, "#000000", !0), X.g.showParticles)
                        for (var s = Math.min(.0025 * r.size * 60 * at, 100), l = Math.random(); l < s; l += Math.random()) {
                            var u = 6 * Object(h.generateSign)(),
                                c = Object(f.l)(.5, .8) * (100 / 1.5),
                                d = (2 * Math.random() - 1) * (r.size - c);
                            mr(r.x + Math.cos(n.rot + Cr) * d, r.y + Math.sin(n.rot + Cr) * d, u * Math.cos(n.rot), u * Math.sin(n.rot), c, Math.random() * Math.PI * 2, 0, "#ffffff", 50, 1, 0, 1, !0)
                        }
                    var p = [r.x + Math.cos(n.rot + Cr) * r.size, r.y + Math.sin(n.rot + Cr) * r.size],
                        _ = [r.x + Math.cos(n.rot + Cr) * -r.size, r.y + Math.sin(n.rot + Cr) * -r.size];
                    yr((x = Object(f.i)([At, Mt], p, _))[0], x[1], 3);
                    break;
                case 1:
                    Jt || en();
                    var g = ln(dn($t).substring(1), "000000", n.open ? .5 : 1),
                        v = (a = (R = performance.now() / (n.open ? -2500 : 1e3)) + .5, R - Math.floor(R)),
                        y = a - Math.floor(a),
                        m = n.open ? 9 : 14;
                    o = 1 + v * m, i = 1 + y * m;
                    if (bt.globalAlpha = .2 * Math.min(2 * (1 - v), 1), lr(r.x, r.y, 30 * o, r.size, n.rot, g, !0), bt.globalAlpha = .2 * Math.min(2 * (1 - y), 1), lr(r.x, r.y, 30 * i, r.size, n.rot, g, !0), bt.globalAlpha = 1, lr(r.x, r.y, 30, r.size, n.rot, g, !0), X.g.showParticles)
                        for (var b = Math.min(.0035 * r.size * 60 * at, 100), E = Math.random(); E < b; E += Math.random()) {
                            var O = Object(f.l)(.06, .12) * (n.open ? 30 : 100) * Object(h.generateSign)(),
                                w = Object(f.l)(.3, .6) * (100 / 1.5),
                                T = (2 * Math.random() - 1) * (r.size - w),
                                S = r.x + Math.cos(n.rot + Cr) * T,
                                A = r.y + Math.sin(n.rot + Cr) * T,
                                M = n.rot + .3 * (2 * Math.random() - 1);
                            mr(S, A, O * Math.cos(M), O * Math.sin(M), w, Math.random() * Math.PI * 2, 0, "#000000", 50, 1, n.open ? 1 : 10, 1, !0)
                        }
                    p = [r.x + Math.cos(n.rot + Cr) * r.size, r.y + Math.sin(n.rot + Cr) * r.size], _ = [r.x + Math.cos(n.rot + Cr) * -r.size, r.y + Math.sin(n.rot + Cr) * -r.size];
                    var x = Object(f.i)([At, Mt], p, _);
                    n.open || yr(x[0], x[1], 3);
                    break;
                case 3:
                    if (n.open) var k = [
                        [-1, -.3, 2.5, "#000000"],
                        [1, -.3, 2.5, "#000000"]
                    ];
                    else k = [
                        [-1, -.5, 2.5, "#000000"],
                        [1, 1, 4.5, "#ffffff"]
                    ];
                    for (var C = 0; C < k.length; C++) {
                        var R, I = k[C];
                        a = (R = performance.now() / 2500 * I[1]) + .5, v = R - Math.floor(R), y = a - Math.floor(a), o = .5 + v * I[2], i = .5 + y * I[2];
                        bt.globalAlpha = .2 * Math.min(2 * (1 - v), 1);
                        var L = 30 * o;
                        lr(r.x - Math.sin(-n.rot - Cr) * L * I[0], r.y - Math.cos(-n.rot - Cr) * L * I[0], L, r.size, n.rot, I[3], !0), bt.globalAlpha = .2 * Math.min(2 * (1 - y), 1);
                        var D = 30 * i;
                        lr(r.x - Math.sin(-n.rot - Cr) * D * I[0], r.y - Math.cos(-n.rot - Cr) * D * I[0], D, r.size, n.rot, I[3], !0), bt.globalAlpha = 1
                    }
                    for (var P = [
                        [60, -7, .3, "#000000"],
                        [40, -5, .3, "#000000"]
                    ], B = 0; B < P.length; B++)
                        for (var N = P[B], j = N[0], U = 2 * (r.size - j), z = Math.min(Math.floor(Object(h.round)(2 * r.size, 5) / (1.5 * j)), 1e3), W = 0; W < z; W++) {
                            var K = n.rot + R * (W % 2 ? -1 : 1) * (n.open ? -.7 : 1),
                                G = ((z - 1 ? W / (z - 1) : 0) - .5) * U;
                            ur(r.x - Math.sin(n.rot) * G + Math.cos(n.rot) * j / 2, r.y + Math.cos(n.rot) * G + Math.sin(n.rot) * j / 2, j, N[3], N[1], K, !0, 1, N[2] * j)
                        }
                    if (lr(r.x, r.y, 30, r.size, n.rot, "#000000", !0), X.g.showParticles) {
                        if (n.open) var Y = [
                            [-1, 1, .5, .5, "#000000"],
                            [-1, 1, -.5, .5, "#000000"]
                        ];
                        else Y = [
                            [-1, 1, 1, 1, "#ffffff"],
                            [1, 1, .5, .5, "#000000"]
                        ];
                        for (B = 0; B < Y.length; B++)
                            for (var F = Y[B], H = Math.min(.00125 * r.size * 60 * at, 100), V = Math.random(); V < H; V += Math.random()) {
                                var q = 6 * F[2],
                                    Z = Object(f.l)(.5, .8) * (100 / 1.5) * F[3],
                                    J = (2 * Math.random() - 1) * (r.size - Z),
                                    $ = r.x + Math.cos(n.rot + Cr) * J,
                                    Q = r.y + Math.sin(n.rot + Cr) * J;
                                if (1 == F[0]) {
                                    var ee = 50 * q;
                                    $ += Math.sin(-n.rot - Cr) * ee, Q += Math.cos(-n.rot - Cr) * ee
                                }
                                mr($, Q, q * Math.sin(-n.rot + Cr), q * Math.cos(-n.rot + Cr), Z, Math.random() * Math.PI * 2, 0, F[4], 50, 1, 0, 1, !0)
                            }
                    }
                    p = [r.x + Math.cos(n.rot + Cr) * r.size, r.y + Math.sin(n.rot + Cr) * r.size], _ = [r.x + Math.cos(n.rot + Cr) * -r.size, r.y + Math.sin(n.rot + Cr) * -r.size], x = Object(f.i)([At, Mt], p, _);
                    n.open || yr(x[0], x[1], 3)
            }
        }
    }

    function Zr(e) {
        return !!fe && (!V.g && s.j && X.g.copyIds && (_e = !0), !!(Qe > -100 && function (e) {
            if (!V.g)
                if (l.isMobile) {
                    var t = dt.width / 2,
                        n = 0,
                        r = 0,
                        a = 0;
                    if (Qe > -380)
                        for (var o = Math.min(4, mn.length), i = 0; i < mn.length; i++) {
                            mn[i];
                            var s = {
                                x: t + 400 * (1 == o ? 0 : r / (o - 1) - .5) - 50,
                                y: n + Qe + 120 * a + 75 - 50,
                                width: 100,
                                height: 100
                            };
                            if (Object(f.m)(e, s)) return Qr(i + 1), !0;
                            4 == ++r && (r = 0, a++, o = Math.min(4, mn.length - i - 1))
                        }
                } else {
                    t = 0 + (V.h ? 60 : 0), n = dt.height;
                    if (f.D > 0)
                        for (var u = 0; u < ee.UPGRADE_COUNT; u++) {
                            var c = ee.UPGRADE_COUNT - u;
                            if (f.E[c - 1] < ee.MAX_UPGRADE_POINTS) {
                                s = {
                                    x: t + 20 + 250 - 15,
                                    y: n - 20 - 32 * u - 15,
                                    width: 30,
                                    height: 30
                                };
                                if (Object(f.m)(e, s)) return Qr(c), !0
                            }
                        }
                    if (t = dt.width, f.D > 0)
                        for (var d = 0; d < ee.UPGRADE_COUNT; d++) {
                            c = ee.UPGRADE_COUNT - d + 4;
                            if (f.E[c - 1] < ee.MAX_UPGRADE_POINTS) {
                                s = {
                                    x: t - 20 - 250 - 15,
                                    y: n - 20 - 32 * d - 15,
                                    width: 30,
                                    height: 30
                                };
                                if (Object(f.m)(e, s)) return Qr(c), !0
                            }
                        }
                } return !1
        }(e)) || (Pe = e, Ye = !0, function (e) {
            if (!V.g) {
                if (l.isMobile) {
                    var t = dt.width / 2,
                        n = 0,
                        r = 0,
                        a = 0;
                    if (0 != f.M.length && vn > -250) {
                        for (var o = Math.min(4, f.M.length), i = 0; i < f.M.length; i++) {
                            var s = f.M[i],
                                u = {
                                    x: t + 400 * (1 == o ? 0 : r / (o - 1) - .5) - 50,
                                    y: n + vn + 120 * a - 50,
                                    width: 100,
                                    height: 100
                                };
                            if (Object(f.m)(e, u)) return Jr(!0, s.id, s.upgradeType), !0;
                            4 == ++r && (r = 0, a++, o = Math.min(4, f.M.length - i - 1))
                        }
                        a += r > 0 ? 1 : 0, r = 0, Sn(t, n + vn - 60 + 120 * a);
                        u = {
                            x: t,
                            y: n + vn - 60 + 120 * a - -10,
                            width: 100,
                            height: 40
                        };
                        if (Object(f.m)(e, u)) return $r(!0), !0
                    } else if (0 != f.b.length && gn > -380) {
                        for (var c = Math.min(4, f.b.length), d = 0; d < f.b.length; d++) {
                            var h = f.b[d];
                            u = {
                                x: t + 400 * (1 == c ? 0 : r / (c - 1) - .5) - 50,
                                y: n + gn + 120 * a - 50,
                                width: 100,
                                height: 100
                            };
                            if (Object(f.m)(e, u)) return Jr(!1, h.id, h.upgradeType), !0;
                            4 == ++r && (r = 0, a++, c = Math.min(4, f.b.length - d - 1))
                        }
                        a += r > 0 ? 1 : 0, r = 0, Sn(t, n + gn - 60 + 120 * a);
                        u = {
                            x: t,
                            y: n + gn - 60 + 120 * a - -10,
                            width: 100,
                            height: 40
                        };
                        if (Object(f.m)(e, u)) return $r(!1), !0
                    }
                } else {
                    t = 0, n = dt.height;
                    var p = 0,
                        _ = 0;
                    if (0 != f.M.length) {
                        for (var g = 0; g < f.M.length; g++) {
                            var v = f.M[g];
                            u = {
                                x: t + vn + 120 * p - 50,
                                y: n - 200 - 120 * _ - 50,
                                width: 100,
                                height: 100
                            };
                            if (Object(f.m)(e, u)) return Jr(!0, v.id, v.upgradeType), !0;
                            3 == ++p && (p = 0, _++)
                        }
                        if (0 != f.M.length && 2 != f.M[0].upgradeType) {
                            _ += p > 0 ? 1 : 0;
                            u = {
                                x: t + vn + 120 * (p = 0) - 50,
                                y: n - 200 - 120 * _ - -10,
                                width: 100,
                                height: 40
                            };
                            if (Object(f.m)(e, u)) return $r(!0), !0
                        }
                    }
                    if (p = 0, _ = 0, 0 != f.b.length) {
                        t = dt.width;
                        for (var y = 0; y < f.b.length; y++) {
                            var m = f.b[y];
                            u = {
                                x: t - gn - 120 * p - 50,
                                y: n - 200 - 120 * _ - 50,
                                width: 100,
                                height: 100
                            };
                            if (Object(f.m)(e, u)) return Jr(!1, m.id, m.upgradeType), !0;
                            3 == ++p && (p = 0, _++)
                        }
                        if (0 != f.b.length && 2 != f.b[0].upgradeType) {
                            _ += p > 0 ? 1 : 0;
                            u = {
                                x: t - gn - 120 * (p = 0) - 50,
                                y: n - 200 - 120 * _ - -10,
                                width: 100,
                                height: 40
                            };
                            if (Object(f.m)(e, u)) return $r(!1), !0
                        }
                    }
                }
            }
            return !1
        }(e)))
    }

    function Jr(e, t, n) {
        Object(d.upgradePlayer)(e, t, n), 0 != n ? (Object(f.f)(), Object(f.h)()) : e ? Object(f.h)() : Object(f.f)()
    }

    function $r(e, t) {
        e ? Object(f.h)() : Object(f.f)()
    }

    function Qr(e) {
        Object(s.w)(e)
    }
    var ea = document.createElement("canvas"),
        ta = ea.getContext("2d");
    Kt()
}, function (e, t, n) {
    (function (e, r) {
        var a;
    })
}])