"use strict";
console.log("mod main.10b8719ce51e11182d01.js");

document.getElementById("darkness-canvas").style.display="none";

document.getElementById("debug-mode").insertAdjacentHTML("beforeend",
  '<p style="font-size:2vmin;" id="zoom">zoom: 1</p>'+
  '<p style="font-size:2vmin;">send storage: <input onchange="this.blur();" type="checkbox" id="sendst" style="pointer-events:auto;"/>, stack: <input onchange="this.blur();" type="checkbox" id="stc" style="pointer-events:auto;"/></p>'
);

var zoomt=document.getElementById("zoom").firstChild;

var sendst=document.getElementById("sendst");

var zoom=1;
document.body.addEventListener("wheel",({deltaY})=>{
  zoom=Math.max(1,(zoom+Math.sign(deltaY)*0.1).toFixed(1));
  zoomt.nodeValue="zoom: "+zoom;
});

{
  const g=document.getElementById("game-canvas"),c=g.getContext("2d",{"alpha":false});
  g.getContext=()=>c;
}

{
  const stc=document.getElementById("stc");
  const atable=Float64Array.of(
    3.602879702539365e+16,3.6028797027222344e+16,3.602879702675822e+16,3.6028797026294104e+16,3.602879701916023e+16,3.602879702098893e+16,3.602879702052481e+16,3.602879702006069e+16,3.602879701959657e+16,3.602879701913245e+16,3.6028797020961144e+16,3.602879702508266e+16,3.602879702691135e+16,3.602879702644723e+16,3.602879702598311e+16,3.602879702551899e+16,3.602879702734769e+16,3.602879702688357e+16,3.60287970197497e+16,3.6028797019285576e+16,3.602879702111427e+16,3.602879702065015e+16,3.602879702018603e+16,3.602879702201473e+16,3.602879702613624e+16,3.602879702567212e+16,3.6028797025208e+16,3.6028797027036696e+16,3.602879702657258e+16,3.6028797026108456e+16,3.6028797018974584e+16,3.602879702080328e+16,3.602879702033916e+16,3.602879701987504e+16,3.602879701941092e+16,3.602879702123962e+16,3.602879702306831e+16,3.602879702489701e+16,3.6028797026725704e+16,3.602879702626158e+16,3.6028797025797464e+16,3.602879702533334e+16,3.602879702716204e+16,3.602879702002817e+16,3.602879701956405e+16,3.602879701909993e+16,3.602879702092862e+16,3.6028797020464504e+16,3.602879702000038e+16,3.6028797024121896e+16,3.602879702595059e+16,3.602879702548647e+16,3.602879702731517e+16,3.602879702685105e+16,3.602879702638693e+16,3.602879702592281e+16,3.602879702108175e+16,3.602879702061763e+16,3.602879702015351e+16,3.602879701968939e+16,3.602879701922527e+16,3.602879702105397e+16,3.6028797022882664e+16,3.602879702700418e+16
  );
  const m=64/Math.PI;
  window.angle_from_table=function(a){
    if(!stc.checked)return +a.toFixed(3);
    a=(((a*m)%128)+128)&127;
    return a>64?-atable[128-a]:atable[a];
  };
}

!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: false, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = true), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: true, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: true });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: true, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 37));
})([
  function (e, t, n) {
    var r = n(13).MAX_SIDES;
    function a(e, t) {
      return Math.log(t) / Math.log(e);
    }
    function o(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = Math.pow(10, t);
      return Math.round(e * n) / n;
    }
    function i(e, t, n) {
      return t * n + e * (1 - n);
    }
    e.exports = {
      degreesToRadians: function (e) {
        return e * (Math.PI / 180);
      },
      radiansToDegrees: function (e) {
        return e * (180 / Math.PI);
      },
      formatURL: function (e) {
        var t = e.indexOf("://");
        -1 != t && (e = e.substring(t + 3));
        var n = e.indexOf("/");
        return -1 != n && (e = e.substring(0, n)), e;
      },
      round: o,
      roundToScope: function (e, t) {
        return o(e, Math.round(-a(10, t)) + 4);
      },
      baseLog: a,
      generateSign: function () {
        return Math.random() < 0.5 ? -1 : 1;
      },
      formatTime: function (e) {
        var t = parseInt(e, 10),
          n = Math.floor(t / 3600),
          r = Math.floor((t - 3600 * n) / 60),
          a = t - 3600 * n - 60 * r;
        return (
          n < 10 && (n = "0" + n),
          r < 10 && (r = "0" + r),
          a < 10 && (a = "0" + a),
          n + ":" + r + ":" + a
        );
      },
      arrayToSentence: function (e) {
        if (0 == e.length) return "nothing";
        if (1 == e.length) return e[0];
        var t = e.pop();
        return e.join(", ") + (1 === e.length ? " and " : ", and ") + t;
      },
      clampSides: function (e) {
        return Math.max(Math.min(r, e), -r);
      },
      getXPLevel: function (e) {
        for (var t = 1, n = 100; e > n; ) (e -= n), (n *= 1.2), t++;
        return t;
      },
      sleep: function (e) {
        for (
          var t = new Date().getTime(), n = 0;
          n < 1e7 && !(new Date().getTime() - t > e);
          n++
        );
      },
      lerp: i,
      damp: function (e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : 1 / 60;
        return i(e, t, 1 - Math.pow(n, r));
      },
      ease: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return n ? 1 - Math.pow(1 - e, t) : Math.pow(e, t);
      },
      isColorCode: function (e) {
        return /^#[0-9A-F]{6}$/i.test(e);
      },
      getRotationDifference: function (e, t) {
        var n = Math.abs(e - t) % (2 * Math.PI);
        return n > Math.PI && (n = 2 * Math.PI - n), n;
      },
      reverseString: function (e) {
        return e.split("").reverse().join("");
      },
      getNumbersBetween: function () {
        Array.prototype.sort.call(arguments);
        for (var e = arguments[0], t = arguments[1], n = [], r = e; r <= t; r++)
          n.push(r);
        return n;
      },
      lerpRotation: function (e, t, n) {
        var r = (1 - n) * Math.cos(e) + n * Math.cos(t),
          a = (1 - n) * Math.sin(e) + n * Math.sin(t);
        return Math.atan2(a, r);
      },
      onSameTeam: function (e, t) {
        return e == t && e > 0;
      },
    };
  },
  function (e, t) {
    e.exports = window.constants = Object.freeze({
      COMMAND_PREFIX: "/",
      CAMERA_SHAKE_DIST: 1e5,
      MAX_CHAT_MESSAGE_LENGTH: 750,
      SERVER_TPS: 30,
      MAX_PARTICLES: 1e3,
      MAX_LEADERBOARD_ENTRIES: 8,
      get CAMERA_SIZE(){
        return 2e3*zoom;
      },
      CHAT_STAY_TIME: 12,
      NOTIFICATION_STAY_TIME: 6,
      ANNOUNCEMENT_STAY_TIME: 20,
      ANNOUNCEMENT_FADE_IN_TIME: 1,
      ANNOUNCEMENT_FADE_OUT_TIME: 2,
      TIMER_FADE_IN_TIME: 2,
      TIMER_FADE_OUT_TIME: 0.5,
      MSG_FADE_IN_TIME: 0.2,
      MSG_FADE_OUT_TIME: 0.5,
      AUTO_SPIN_SPEED: 1.2,
      GRID_STROKE: 5,
      POLYGON_COLORS: [
        "#ffe46b",
        "#fc7676",
        "#768cfc",
        "#fca644",
        "#38b764",
        "#4a66bd",
        "#5d275d",
        "#1a1c2c",
        "#060011",
        "#403645",
        "#ededff",
        "#000000",
      ],
      NUMBER_ENDINGS: [
        "k",
        "m",
        "b",
        "t",
        "qa",
        "qi",
        "sx",
        "sp",
        "oc",
        "no",
        "dc",
        "ud",
        "dd",
        "td",
        "qad",
        "qid",
        "sxd",
        "spd",
        "ocd",
        "nod",
        "vg",
        "uvg",
        "dvg",
        "tvg",
        "qavg",
        "qivg",
        "sxvg",
        "spvg",
        "ocvg",
        "novg",
        "tg",
        "utg",
        "dtg",
        "ttg",
        "qatg",
        "qitg",
        "sxtg",
        "sptg",
        "octg",
        "notg",
        "qd",
        "uqd",
        "dqd",
        "tqd",
        "qaqd",
        "qiqd",
        "sxqd",
        "spqd",
        "ocqd",
        "noqd",
        "qq",
        "uqq",
        "dqq",
        "tqq",
        "qaqq",
        "qiqq",
        "sxqq",
        "spqq",
        "ocqq",
        "noqq",
        "sg",
        "usg",
        "dsg",
        "tsg",
        "qasg",
        "qisg",
        "sxsg",
        "spsg",
        "ocsg",
        "nosg",
        "st",
        "ust",
        "dst",
        "tst",
        "qast",
        "qist",
        "sxst",
        "spst",
        "ocst",
        "nost",
        "og",
        "uog",
        "dog",
        "tog",
        "qaog",
        "qiog",
        "sxog",
        "spog",
        "ocog",
        "noog",
        "nm",
        "unm",
        "dnm",
        "tnm",
        "qanm",
        "qinm",
        "sxnm",
        "spnm",
        "ocnm",
        "nonm",
        "ct",
        "udct",
      ],
      TEAM_NAMES: {
        "-1": "Fallen",
        0: "Lone",
        1: "Polygon",
        2: "Celestial",
        10: "Blue",
        11: "Red",
        12: "Green",
        13: "Purple",
      },
      GAMEMODE_COLORS: {
        "-2": "#ffffff",
        "-1": "#ffffff",
        0: "#f04f54",
        1: "#00e06c",
        2: "#00b0e1",
        3: "#be7ff5",
        4: "#fca644",
        5: "#768cfc",
      },
      GAMEMODE_NAMES: {
        "-2": "The Crossroads",
        "-1": "The Sanctuary",
        0: "FFA",
        1: "4 Teams",
        2: "Tank Editor",
        3: "2 Teams",
        4: "Spawn Capture",
        5: "Titans",
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
        UNLIST_SERVER: 503,
      },
      LEADERBOARD_STRUCTURE: [
        [
          "id",
          "type",
          "name",
          "nameColor",
          "team",
          "radiant",
          "score",
          "sides",
          "outerSides",
          "outerSize",
          "isCelestial",
          "barrels",
          "gadgets",
          "layers",
        ],
        [
          "id",
          "type",
          "name",
          "nameColor",
          "team",
          "radiant",
          "score",
          "sides",
          "outerSides",
          "outerSize",
          "color",
        ],
      ],
      PACKET_STRUCTURE: [
        ["id", "sType", "x", "y", "d", "size"],
        [
          "id",
          "sType",
          "x",
          "y",
          "d",
          "size",
          "sides",
          "outerSides",
          "outerSize",
          "layers",
          "radiant",
          "team",
          "name",
          "showName",
          "className",
          "nameColor",
          "maxHP",
          "hp",
          "score",
          "totalScore",
          "xpToNextLevel",
          "level",
          "isInvulnerable",
        ],
        [
          "id",
          "sType",
          "x",
          "y",
          "d",
          "size",
          "sides",
          "outerSides",
          "outerSize",
          "layers",
          "radiant",
          "team",
          "name",
          "showName",
          "className",
          "nameColor",
          "maxHP",
          "hp",
          "score",
          "totalScore",
          "xpToNextLevel",
          "level",
          "isInvulnerable",
          "barrels",
          "barrelData",
          "gadgets",
          "gadgetData",
          "isCelestial",
          "weaponUpgrade",
          "bodyUpgrade",
        ],
        [
          "id",
          "sType",
          "x",
          "y",
          "d",
          "size",
          "sides",
          "outerSides",
          "outerSize",
          "layers",
          "radiant",
          "team",
          "name",
          "showName",
          "className",
          "nameColor",
          "maxHP",
          "hp",
          "score",
          "totalScore",
          "xpToNextLevel",
          "level",
          "isInvulnerable",
          "color",
        ],
        [
          "id",
          "sType",
          "x",
          "y",
          "d",
          "size",
          "sides",
          "parentID",
          "team",
          "radiant",
          "maxHP",
          "hp",
          "color",
        ],
        [
          "id",
          "sType",
          "x",
          "y",
          "d",
          "size",
          "sides",
          "parentID",
          "team",
          "radiant",
          "maxHP",
          "hp",
          "color",
          "barrels",
          "barrelData",
          "gadgets",
          "gadgetData",
          "outerSides",
          "outerSize",
          "layers",
        ],
        ["id", "sType", "x", "y", "d", "size", "type"],
        [
          "id",
          "sType",
          "x",
          "y",
          "d",
          "size",
          "type",
          "sign",
          "subtype",
          "gamemode",
          "lifetime",
        ],
        [
          "id",
          "sType",
          "x",
          "y",
          "d",
          "size",
          "type",
          "sign",
          "lTeam",
          "lID",
          "lRadiant",
        ],
      ],
      ANALYTICS_EVENTS: {
        JOIN_GAME: "join_game",
        DEATH: "death",
        SUBMIT_FEEDBACK: "submit_feedback",
        REPORT_BUG: "report_bug",
        SEND_MESSAGE: "send_message",
        AD_BLOCKER: "ad_blocker",
      },
      EVENT_TYPES: {
        LANDING: 0,
        CHAT: 1,
        WORMHOLE_SPAWN: 2,
        WORMHOLE_RUPTURE: 3,
        GATEWAY_ACTIVATE: 4,
        GATE_ACTIVATE: 5,
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
          MOBILE_UNSUPPORTED: "mobile_unsupported",
        },
        SETTINGS: "settings",
        KEYBINDS: "keybinds",
        GAMEMODE: "gamemode",
        USERNAME: "username",
      },
      UPGRADE_COUNT: 4,
      MAX_UPGRADE_POINTS: 15,
      UPGRADE_COLORS: ["#768cfc", "#fc7676", "#38b764", "#ffe46b"],
      BODY_UPGRADE_NAMES: [
        "Max Health",
        "Health Regeneration",
        "Body Damage",
        "Movement Speed",
      ],
      WEAPON_UPGRADE_NAMES: [
        "Reload",
        "Bullet Damage",
        "Bullet Speed",
        "Bullet Penetration",
      ],
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "G", function () {
      return h;
    }),
      n.d(t, "w", function () {
        return p;
      }),
      n.d(t, "e", function () {
        return _;
      }),
      n.d(t, "J", function () {
        return g;
      }),
      n.d(t, "I", function () {
        return v;
      }),
      n.d(t, "K", function () {
        return y;
      }),
      n.d(t, "H", function () {
        return E;
      }),
      n.d(t, "F", function () {
        return O;
      }),
      n.d(t, "k", function () {
        return w;
      }),
      n.d(t, "d", function () {
        return T;
      }),
      n.d(t, "n", function () {
        return M;
      }),
      n.d(t, "m", function () {
        return S;
      }),
      n.d(t, "o", function () {
        return A;
      }),
      n.d(t, "i", function () {
        return k;
      }),
      n.d(t, "l", function () {
        return I;
      }),
      n.d(t, "u", function () {
        return C;
      }),
      n.d(t, "c", function () {
        return D;
      }),
      n.d(t, "r", function () {
        return P;
      }),
      n.d(t, "x", function () {
        return U;
      }),
      n.d(t, "v", function () {
        return N;
      }),
      n.d(t, "g", function () {
        return z;
      }),
      n.d(t, "s", function () {
        return W;
      }),
      n.d(t, "E", function () {
        return K;
      }),
      n.d(t, "D", function () {
        return G;
      }),
      n.d(t, "b", function () {
        return F;
      }),
      n.d(t, "M", function () {
        return Y;
      }),
      n.d(t, "p", function () {
        return H;
      }),
      n.d(t, "q", function () {
        return V;
      }),
      n.d(t, "A", function () {
        return q;
      }),
      n.d(t, "C", function () {
        return Z;
      }),
      n.d(t, "B", function () {
        return X;
      }),
      n.d(t, "t", function () {
        return J;
      }),
      n.d(t, "y", function () {
        return $;
      }),
      n.d(t, "z", function () {
        return Q;
      }),
      n.d(t, "f", function () {
        return ee;
      }),
      n.d(t, "h", function () {
        return te;
      }),
      n.d(t, "L", function () {
        return ne;
      }),
      n.d(t, "a", function () {
        return re;
      }),
      n.d(t, "j", function () {
        return se;
      });
    var r = n(7),
      a = n(1),
      o = n(6),
      i = n(3),
      s = n(0),
      l = n(8);
    function u(e, t) {
      var n =
        ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = d(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return r >= e.length ? { done: true } : { done: false, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var o,
        i = true,
        s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (i = e.done), e;
        },
        e: function (e) {
          (s = true), (o = e);
        },
        f: function () {
          try {
            i || null == n.return || n.return();
          } finally {
            if (s) throw o;
          }
        },
      };
    }
    function c(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            i = true,
            s = false;
          try {
            for (
              n = n.call(e);
              !(i = (r = n.next()).done) &&
              (o.push(r.value), !t || o.length !== t);
              i = true
            );
          } catch (e) {
            (s = true), (a = e);
          } finally {
            try {
              i || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          }
          return o;
        })(e, t) ||
        d(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function d(e, t) {
      if (e) {
        if ("string" == typeof e) return f(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? f(e, t)
            : void 0
        );
      }
    }
    function f(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var h = { players: 0, spectators: 0 };
    function p(e, t) {
      (h.players = e), (h.spectators = t);
    }
    var _ = {
      normal: { weapon: {}, body: {} },
      celestial: { weapon: {}, body: {} },
    };
    function g(e) {
      _ = e;
      for (var t = 0; t < 4; t++)
        for (
          var n = (t % 2 == 0 ? _.celestial : _.normal)[
              t > 1 ? "weapon" : "body"
            ],
            r = 0,
            a = Object.entries(n);
          r < a.length;
          r++
        ) {
          var o = c(a[r], 2),
            i = o[0];
          o[1];
          n.maxTier = +i;
        }
    }
    var v = false,
      m = [],
      b = [];
    function y(e) {
      for (
        var t = e[0].map(function (e) {
            return (function (e) {
              for (
                var t = {}, n = a.LEADERBOARD_STRUCTURE[e[1]], r = 0;
                r < e.length;
                r++
              ) {
                var o = e[r];
                null != o && (t[n[r]] = o);
              }
              return t;
            })(e);
          }),
          n = [],
          o = function (e) {
            var r,
              a,
              o,
              i = t[e],
              s = b.find(function (e) {
                return e.id == i.id;
              });
            s
              ? n.push(
                  ((r = s),
                  (a = i),
                  (o = {}),
                  Object.keys(r).forEach(function (e) {
                    var t = a[e];
                    o[e] = null != t ? t : r[e];
                  }),
                  o)
                )
              : n.push(i);
          },
          i = 0;
        i < t.length;
        i++
      )
        o(i);
      if (e) {
        ((m = { entries: n, playerCount: e[1] }).showPlayers =
          -1 != m.playerCount),
          (m.highestScore = 0);
        for (var s = 0; s < m.entries.length; s++) {
          var l = m.entries[s];
          l.score > m.highestScore && (m.highestScore = l.score);
        }
        for (var u = 0; u < m.entries.length; u++) {
          var c,
            d = m.entries[u];
          if (
            ((d.size = 1 == d.type || d.isCelestial ? 75 : 40),
            1 == !d.type && m.showPlayers)
          ) {
            for (var f = 0; f < d.barrels.length; f++) {
              d.barrels[f].animTime = 0;
            }
            for (var h = 0; h < d.gadgets.length; h++) {
              d.gadgets[h].animTime = 0;
            }
          }
          (d.nameColor = null !== (c = d.nameColor) && void 0 !== c ? c : 6),
            (d.scoreRatio = d.score / m.highestScore),
            (d.scoreRatio =
              Number.isNaN(d.scoreRatio) || !Number.isFinite(d.score)
                ? Number.isFinite(d.score)
                  ? 0
                  : 1
                : d.scoreRatio),
            (d.fadeTime = 0),
            m.showPlayers ||
              ((d.name = (d.name || "???").replace(/\S/g, "?")),
              (d.radiant = 0),
              (d.team = -1),
              (d.nameColor = 6)),
            d.score == m.highestScore && (d.scoreRatio = 1),
            (d.formattedScore = Object(r.roundWithEnding)(d.score));
        }
      } else m = null;
      b = n;
    }
    var E = {};
    function O(e) {
      for (
        var t = [],
          n = 0,
          a = function (a) {
            var o = m.entries[a],
              i = E.entries.find(function (e) {
                return e.id == o.id;
              });
            i
              ? Object.keys(o).forEach(function (t) {
                  switch (t) {
                    case "formattedScore":
                      break;
                    case "scoreRatio":
                      (i.scoreRatio = Object(s.damp)(
                        i.scoreRatio,
                        o.scoreRatio,
                        0.05,
                        e
                      )),
                        isFinite(i.scoreRatio) || (i.scoreRatio = o.scoreRatio);
                      break;
                    case "score":
                      (i.score = Object(s.damp)(i.score, o.score, 0.05, e)),
                        isFinite(i.score) || (i.score = o.score),
                        (i.formattedScore = Object(r.roundWithEnding)(i.score));
                      break;
                    case "fadeTime":
                      i.fadeTime = Object(s.damp)(i.fadeTime, 1, 0.001, e);
                      break;
                    default:
                      i[t] = o[t];
                  }
                })
              : (i = Object(l.cloneDeep)(o)),
              null == i.index && (i.index = n),
              (i.index = Object(s.damp)(i.index, n, 0.01, e)),
              n++,
              t.push(i);
          },
          o = 0;
        o < m.entries.length;
        o++
      )
        a(o);
      if (
        (null == E.length && (E.length = n),
        (E.length = Object(s.damp)(E.length, n, 0.01, e)),
        E.entries)
      )
        for (
          var i = function (n) {
              var r = E.entries[n];
              m.entries.find(function (e) {
                return e.id == r.id;
              }) ||
                ((r.fadeTime = Object(s.damp)(r.fadeTime, 0, 0.001, e)),
                r.fadeTime > 0.1 && t.push(r));
            },
            u = 0;
          u < E.entries.length;
          u++
        )
          i(u);
      (E.highestScore = m.highestScore),
        (E.playerCount = m.playerCount),
        (E.showPlayers = m.showPlayers),
        (E.entries = t);
    }
    function w(e, t) {
      return (e * a.NUMBER_AVERAGE + t) / (a.NUMBER_AVERAGE + 1);
    }
    function T(e, t) {
      var n = e.x - t.x,
        r = e.y - t.y;
      return Math.sqrt(n * n + r * r) < e.size + t.size;
    }
    function M(e, t) {
      var n = e.x - t.x,
        r = e.y - t.y;
      return n * n + r * r <= t.r * t.r;
    }
    function S(e, t) {
      return (
        e.x > t.x && e.x < t.x + t.width && e.y < t.y + t.height && e.y > t.y
      );
    }
    function A(e, t) {
      var n = { x: e.x - t.x, y: e.y - t.y },
        r = { width: t.width, height: t.height, x: 0, y: 0 };
      return (
        (function (e, t, n) {
          var r = Math.cos(n),
            a = Math.sin(n),
            o = r * (t.x - e.x) + a * (t.y - e.y) + e.x,
            i = r * (t.y - e.y) - a * (t.x - e.x) + e.y;
          (t.x = o), (t.y = i);
        })(r, n, t.rot),
        (function (e, t) {
          return (
            e.x > t.x - t.width / 2 &&
            e.x < t.x + t.width / 2 &&
            e.y < t.y + t.height / 2 &&
            e.y > t.y - t.height / 2
          );
        })(n, r)
      );
    }
    function k(e, t, n) {
      var r = [n[0] - t[0], n[1] - t[1]],
        a = [t[0] - e[0], t[1] - e[1]],
        o =
          -(r[0] * a[0] + r[1] * a[1]) /
          (Math.pow(r[0], 2) + Math.pow(r[1], 2));
      return o >= 0 && o <= 1
        ? x(o, [0, 0], t, n)
        : R(x(0, e, t, n)) <= R(x(1, e, t, n))
        ? t
        : n;
    }
    function x(e, t, n, r) {
      return [
        (1 - e) * n[0] + e * r[0] - t[0],
        (1 - e) * n[1] + e * r[1] - t[1],
      ];
    }
    function R(e) {
      return Math.pow(e[0], 2) + Math.pow(e[1], 2);
    }
    function I(e, t) {
      return Math.random() * (t - e) + e;
    }
    function C(e) {
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
            L(n.data.id, n.data.message);
            break;
          default:
            console.error(
              'Received invalid event from server: "'.concat(n.type, '"')
            );
        }
      }
    }
    var D = {},
      P = [],
      B =
        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    function j(e) {
      var t,
        n = [],
        r = u(e);
      try {
        for (r.s(); !(t = r.n()).done; ) {
          var a,
            o = c(t.value, 2),
            s = o[0],
            l = o[1],
            d = u(s.split(/(\s+)/));
          try {
            for (d.s(); !(a = d.n()).done; ) {
              var f = a.value;
              if (i.g.clickableLinks)
                !(function () {
                  var e,
                    t = Math.round(1e7 * Math.random()).toString(),
                    r = Math.round(1e7 * Math.random()).toString(),
                    a = u(
                      f
                        .replace(B, function (e) {
                          return "".concat(t).concat(r).concat(e).concat(t);
                        })
                        .split(t)
                        .filter(function (e) {
                          return "" != e;
                        })
                    );
                  try {
                    for (a.s(); !(e = a.n()).done; ) {
                      var o = e.value;
                      o.startsWith(r)
                        ? n.push({
                            color: 10,
                            link: true,
                            text: o.substring(r.length),
                          })
                        : n.push({ color: l, link: false, text: o });
                    }
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                })();
              else n.push({ text: f, link: false, color: l });
            }
          } catch (e) {
            d.e(e);
          } finally {
            d.f();
          }
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
      var h = "";
      return (
        n.forEach(function (e) {
          h += e.text;
        }),
        { sections: n, fullText: h }
      );
    }
    function L(e, t) {
      e in D || (D[e] = []),
        D[e].length > 3 &&
          (D[e][3].time = Math.min(D[e][3].time, a.MSG_FADE_OUT_TIME)),
        D[e].unshift({ message: j(t), time: a.CHAT_STAY_TIME });
    }
    function U(e) {
      N([[e, 6]]);
    }
    function N(e) {
      (e = j(e)),
        console.log("NOTIFICATION: ".concat(e.fullText)),
        P.unshift({ message: e, time: a.NOTIFICATION_STAY_TIME });
    }
    function z() {
      (D = {}), (P = []), Object(o.clearAnnouncement)(), Object(o.clearTimer)();
    }
    function W(e) {
      var t = Object(s.arrayToSentence)(
        ["You"].concat(
          e.helpers.map(function (e) {
            return i.g.showNames
              ? "" != e.name
                ? e.name
                : "an unnamed ".concat(e.className)
              : "a"
                  .concat(
                    Object(r.startsWithVowel)(e.className) ? "n" : "",
                    " "
                  )
                  .concat(e.className);
          })
        )
      );
      (t += " killed "),
        (t += i.g.showNames
          ? "" != e.name
            ? e.name
            : "an unnamed ".concat(e.className)
          : "a"
              .concat(Object(r.startsWithVowel)(e.className) ? "n" : "", " ")
              .concat(e.className)),
        U((t += "."));
    }
    var K = [2 * a.UPGRADE_COUNT],
      G = 0,
      F = [],
      Y = [],
      H = [],
      V = [];
    window.reset_stat_upgr=()=>{
      G=Infinity;
      K.fill(-Infinity);
    };
    function q(e) {
      G = e;
    }
    function Z(e) {
      v = e;
    }
    function X(e) {
      for (var t = 0; t < e.length; t++) K[t] = e[t];
    }
    function J(e) {
      F = e;
    }
    function $(e) {
      Y = e;
    }
    function Q() {
      for (var e = 0; e < 2 * a.UPGRADE_COUNT; e++) K[e] = 0;
      (G = 0), ee(), te();
    }
    function ee() {
      (H = F), (F = []);
    }
    function te() {
      (V = Y), (Y = []);
    }
    function ne(e) {
      K[e - 1]++, G--;
    }
    function re(e) {
      G++;
    }
    var ae = document.getElementById("message-popup"),
      oe = document.getElementById("message-popup-title"),
      ie = document.getElementById("message-popup-text");
    function se(e, t) {
      var n, a;
      (oe.innerHTML =
        null ===
          (n = Object(r.escapeHTML)(null == e ? void 0 : e.toString())) ||
        void 0 === n
          ? void 0
          : n.replaceAll("\\n", "<br>")),
        (ie.innerHTML =
          null ===
            (a = Object(r.escapeHTML)(null == t ? void 0 : t.toString())) ||
          void 0 === a
            ? void 0
            : a.replaceAll("\\n", "<br>")),
        ae.classList.remove("hide");
    }
    document.getElementById("ok-button").onclick = function () {
      ae.classList.add("hide");
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return d;
    }),
      n.d(t, "g", function () {
        return h;
      }),
      n.d(t, "h", function () {
        return _;
      }),
      n.d(t, "f", function () {
        return g;
      }),
      n.d(t, "e", function () {
        return v;
      }),
      n.d(t, "a", function () {
        return y;
      }),
      n.d(t, "c", function () {
        return T;
      }),
      n.d(t, "d", function () {
        return S;
      });
    var r = n(7),
      a = n(1),
      o = n(9),
      i = n(6),
      s = n(4);
    function l(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            i = true,
            s = false;
          try {
            for (
              n = n.call(e);
              !(i = (r = n.next()).done) &&
              (o.push(r.value), !t || o.length !== t);
              i = true
            );
          } catch (e) {
            (s = true), (a = e);
          } finally {
            try {
              i || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          }
          return o;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return u(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return u(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function u(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var c = document.getElementById("settings"),
      d = 1,
      f = {
        sectionTankEditor: { section: true, name: "Tank Editor", tankEditor: true },
        maxSaveStates: {
          name: "Max Undo/Redo Save States",
          type: 1,
          default: 100,
          min: 10,
          max: 500,
          step: 1,
          ending: "",
          tankEditor: true,
        },
        compressCodes: {
          name: "Compress Codes",
          type: 0,
          default: true,
          tankEditor: true,
        },
        sectionMobile: { section: true, name: "Mobile", mobile: true },
        joystickSize: {
          name: "Joystick Size",
          mobile: true,
          type: 1,
          default: 100,
          min: 0,
          max: 200,
          step: 1,
          ending: "",
        },
        joystickOffset: {
          name: "Joystick Offset",
          mobile: true,
          type: 1,
          default: 250,
          min: 0,
          max: 400,
          step: 1,
          ending: "",
        },
        invertJoysticks: {
          name: "Invert Joysticks",
          type: 0,
          default: false,
          mobile: true,
          onUpdate: function () {
            d = h.invertJoysticks ? -1 : 1;
          },
        },
        showDroneTrajectory: {
          name: "Show Drone Trajectory",
          type: 0,
          default: false,
          mobile: true,
        },
        sectionNamesAndChat: { section: true, name: "Names & Chat" },
        showChat: {
          name: "Show Chat",
          type: 0,
          default: true,
          onUpdate: function () {
            i.renderMainMenu ||
              s.g ||
              (h.showChat
                ? chat.classList.remove("hidden")
                : chat.classList.add("hidden"));
          },
        },
        showNames: { name: "Show Names", type: 0, default: true },
        clickableLinks: { name: "Clickable Links", type: 0, default: true },
        showOwnName: { name: "Show Own Name", type: 0, default: false },
        sectionDebugMode: { section: true, name: "Debug Mode" },
        showClassNames: { name: "Show Class Names", type: 0, default: false },
        showIds: { name: "Show IDs", type: 0, default: false },
        copyIds: { name: "Click to Copy IDs", type: 0, default: false },
        showTickTime: { name: "Show Tick Time", type: 0, default: true },
        showServerName: { name: "Show Server Name", type: 0, default: true },
        showPlayerCount: { name: "Show Player Count", type: 0, default: true },
        showGlobalPlayerCount: {
          name: "Show Global Player Count",
          type: 0,
          default: true,
        },
        showFPS: { name: "Show FPS", type: 0, default: true },
        showPing: { name: "Show Ping", type: 0, default: true },
        showPosition: { name: "Show Position", type: 0, default: false },
        showExtraPerformanceInfo: {
          name: "Show Extra Performance Info",
          type: 0,
          default: true,
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
            for (var e = 0; e < o.k.childElementCount; e++)
              o.k.children[e].style.fontSize =
                h.debugModeTextSize / 50 + "vmin";
          },
        },
        sectionGraphics: { section: true, name: "Graphics" },
        staticCamera: { name: "Static Camera", type: 0, default: false },
        minimap: { name: "Show Minimap", type: 0, default: true },
        showParticles: { name: "Show Particles", type: 0, default: true },
        hudOpacity: {
          name: "Hud Opacity",
          type: 1,
          default: 100,
          min: 0,
          max: 100,
          step: 1,
          ending: "%",
          onUpdate: function () {
            Array.from(document.getElementsByClassName("hud")).forEach(
              function (e) {
                e.style.opacity = h.hudOpacity / 100;
              }
            );
          },
        },
        renderDelay: {
          name: "Render Delay",
          type: 1,
          default: 100,
          min: 0,
          max: 200,
          step: 1,
          ending: "ms",
        },
        cameraShake: {
          name: "Camera Shake",
          type: 1,
          default: 100,
          min: 0,
          max: 100,
          step: 1,
          ending: "%",
        },
      },
      h = {},
      p = {},
      _ = false;
    function g() {
      Object.entries(f).forEach(function (e) {
        var t,
          n = l(e, 2),
          a = n[0],
          o = n[1];
        if (!o.section) {
          var i = p[a];
          if (i)
            switch (o.type) {
              case 0:
                i.checked = m(h[a], o.default);
                break;
              case 1:
                (i.value = m(h[a], o.default)),
                  i.dispatchEvent(
                    new CustomEvent("input", { detail: "to update settings" })
                  );
            }
          else console.error("Could not find object for setting " + a);
          o.hasOwnProperty("onUpdate") && o.onUpdate();
        }
        if (o.section) t = p[a];
        else
          switch (o.type) {
            case 0:
              t = p[a].parentElement.parentElement;
              break;
            case 1:
              t = p[a].parentElement;
          }
        t.classList.remove("hidden"),
          !s.g && o.tankEditor && t.classList.add("hidden"),
          !r.isMobile && o.mobile && t.classList.add("hidden");
      }),
        Object.entries(w).forEach(function (e) {
          var t = l(e, 2),
            n = t[0],
            r = t[1];
          if (r.editable) {
            var a = M[n],
              o = T[n];
            (a.textContent = S[o]), (a.value = o);
            var i = a.parentElement;
            i.classList.remove("hidden"),
              !s.g && r.tankEditor && i.classList.add("hidden");
          }
        }),
        c.classList.remove("hide"),
        (_ = true),
        Object(r.setPopupOpen)(true);
    }
    function v(e, t) {
      var n = document.getElementById("settings-scroll");
      Object.entries(f).forEach(function (t) {
        var r = l(t, 2),
          a = r[0],
          o = r[1];
        if (o.section) p[a] = b(n, o.name);
        else {
          switch (o.type) {
            case 0:
              h[a] = m(e[a], o.default);
              var i = Object(s.a)(n, "div");
              Object(s.a)(i, "label").textContent = o.name;
              var u = Object(s.a)(i, "label");
              u.classList.add("switch");
              var c = Object(s.a)(u, "input");
              (c.type = "checkbox"),
                Object(s.a)(u, "span").classList.add("switch-button"),
                (p[a] = c);
              break;
            case 1:
              (h[a] = m(e[a], o.default)),
                (i = Object(s.a)(n, "div")).classList.add("slider"),
                (Object(s.a)(i, "label").textContent = o.name);
              var d = Object(s.a)(i, "input");
              d.classList.add("slide"),
                (d.type = "range"),
                (d.step = o.step),
                (d.min = o.min),
                (d.max = o.max),
                (d.oninput = function () {
                  d.previousElementSibling.textContent = ""
                    .concat(o.name, " - ")
                    .concat(d.value)
                    .concat(o.ending);
                }),
                (p[a] = d);
          }
          o.hasOwnProperty("onUpdate") && o.onUpdate();
        }
      }),
        b(n, "Keybinds"),
        Object.entries(w).forEach(function (e) {
          var r = l(e, 2),
            a = r[0],
            o = r[1];
          if (o.editable) {
            T[a] = m(t[a], o.default);
            var i = Object(s.a)(n, "div");
            i.classList.add("keybind"),
              (Object(s.a)(i, "label").textContent = ""
                .concat(o.tankEditor ? "TANK EDITOR: " : "")
                .concat(o.name)
                .concat(o.control ? " (CTRL +)" : ""));
            var u = T[a],
              c = Object(s.a)(i, "button");
            (c.textContent = S[u]),
              (c.value = u),
              c.addEventListener("click", function () {
                !(function (e) {
                  E != e ? (O(), (E = e), M[e].classList.add("changing")) : O();
                })(a);
              }),
              (M[a] = c);
          }
        }),
        Object(s.a)(n, "hr");
    }
    function m(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return null != e ? e : t;
    }
    function b(e, t) {
      var n = Object(s.a)(e, "div");
      return (
        Object(s.a)(n, "hr"),
        (Object(s.a)(n, "h2").textContent = t),
        Object(s.a)(n, "hr"),
        n
      );
    }
    function y() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e &&
        (Object.entries(f).forEach(function (e) {
          var t = l(e, 2),
            n = t[0],
            r = t[1];
          if (!r.section) {
            var a = p[n];
            if (a)
              switch (r.type) {
                case 0:
                  h[n] = a.checked;
                  break;
                case 1:
                  h[n] = a.value;
              }
            else console.error("Could not find object for setting " + n);
            r.hasOwnProperty("onUpdate") && r.onUpdate();
          }
        }),
        Object.entries(w).forEach(function (e) {
          var t = l(e, 2),
            n = t[0];
          t[1].editable && (T[n] = M[n].value);
        }),
        Object(r.setCookie)(a.COOKIES.SETTINGS, JSON.stringify(h)),
        Object(r.setCookie)(a.COOKIES.KEYBINDS, JSON.stringify(T))),
        Object(i.updateDebugMode)(),
        (_ = false),
        O(),
        c.classList.add("hide"),
        Object(r.setPopupOpen)(false);
    }
    var E = null;
    function O() {
      E && (M[E].classList.remove("changing"), (E = null));
    }
    window.addEventListener("keydown", function (e) {
      if (E) {
        var t = e.keyCode,
          n = M[E];
        (n.textContent = S[t]), (n.value = t), O(), e.preventDefault();
      }
    });
    var w = {
        undo: {
          name: "Undo",
          default: 90,
          editable: true,
          tankEditor: true,
          control: true,
        },
        redo: {
          name: "Redo",
          default: 89,
          editable: true,
          tankEditor: true,
          control: true,
        },
        selectAll: {
          name: "Select All",
          default: 65,
          editable: true,
          tankEditor: true,
          control: true,
        },
        duplicate: {
          name: "Duplicate",
          default: 68,
          editable: true,
          tankEditor: true,
          control: true,
        },
        moveForward: {
          name: "Move Forward",
          default: 38,
          editable: true,
          tankEditor: true,
          control: true,
        },
        moveBackward: {
          name: "Move Backward",
          default: 40,
          editable: true,
          tankEditor: true,
          control: true,
        },
        delete: { name: "Delete", default: 8, editable: true, tankEditor: true },
        escape: { name: "Escape", default: 27, editable: false },
        enter: { name: "Enter", default: 13, editable: true },
        openCommand: { name: "Open Command", default: 191, editable: true },
        previousChatMessage: {
          name: "Move Up in Chat History",
          default: 38,
          editable: true,
        },
        nextChatMessage: {
          name: "Move Down in Chat History",
          default: 40,
          editable: true,
        },
        fire: { name: "Shoot", default: 32, editable: true },
        repel: { name: "Repel Drones", default: 16, editable: true },
        moveUp: { name: "Move Up", default: 87, editable: true },
        moveDown: { name: "Move Down", default: 83, editable: true },
        moveLeft: { name: "Move Left", default: 65, editable: true },
        moveRight: { name: "Move Right", default: 68, editable: true },
        moveUpAlt: { name: "Move Up (Alternate)", default: 38, editable: true },
        moveDownAlt: {
          name: "Move Down (Alternate)",
          default: 40,
          editable: true,
        },
        moveLeftAlt: {
          name: "Move Left (Alternate)",
          default: 37,
          editable: true,
        },
        moveRightAlt: {
          name: "Move Right (Alternate)",
          default: 39,
          editable: true,
        },
        autoFire: { name: "Toggle Auto Fire", default: 69, editable: true },
        autoSpin: { name: "Toggle Auto Spin", default: 67, editable: true },
        spinLock: { name: "Toggle Spin Lock", default: 88, editable: true },
        passiveMode: { name: "Toggle Passive Mode", default: 86, editable: true },
        debugMode: { name: "Toggle Debug Mode", default: 77, editable: true },
        screenshotMode: {
          name: "Toggle Screenshot Mode",
          default: 80,
          editable: true,
        },
        weaponTree: {
          name: "Open Weapon Upgrade Tree",
          default: 89,
          editable: true,
        },
        bodyTree: { name: "Open Body Upgrade Tree", default: 85, editable: true },
        settings: {
          name: "Open Settings (In-Game)",
          default: 79,
          editable: true,
        },
      },
      T = {},
      M = {},
      S = [
        "",
        "",
        "",
        "CANCEL",
        "",
        "",
        "HELP",
        "",
        "BACKSPACE",
        "TAB",
        "",
        "",
        "CLEAR",
        "ENTER",
        "ENTER_SPECIAL",
        "",
        "SHIFT",
        "CONTROL",
        "ALT",
        "PAUSE",
        "CAPS_LOCK",
        "KANA",
        "EISU",
        "JUNJA",
        "FINAL",
        "HANJA",
        "",
        "ESCAPE",
        "CONVERT",
        "NONCONVERT",
        "ACCEPT",
        "MODECHANGE",
        "SPACE",
        "PAGE_UP",
        "PAGE_DOWN",
        "END",
        "HOME",
        "LEFT ARROW",
        "UP ARROW",
        "RIGHT ARROW",
        "DOWN ARROW",
        "SELECT",
        "PRINT",
        "EXECUTE",
        "PRINTSCREEN",
        "INSERT",
        "DELETE",
        "",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "COLON",
        "SEMICOLON",
        "LESS_THAN",
        "EQUALS",
        "GREATER_THAN",
        "QUESTION_MARK",
        "AT",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "OS_KEY",
        "",
        "CONTEXT_MENU",
        "",
        "SLEEP",
        "NUMPAD0",
        "NUMPAD1",
        "NUMPAD2",
        "NUMPAD3",
        "NUMPAD4",
        "NUMPAD5",
        "NUMPAD6",
        "NUMPAD7",
        "NUMPAD8",
        "NUMPAD9",
        "MULTIPLY",
        "ADD",
        "SEPARATOR",
        "SUBTRACT",
        "DECIMAL",
        "DIVIDE",
        "F1",
        "F2",
        "F3",
        "F4",
        "F5",
        "F6",
        "F7",
        "F8",
        "F9",
        "F10",
        "F11",
        "F12",
        "F13",
        "F14",
        "F15",
        "F16",
        "F17",
        "F18",
        "F19",
        "F20",
        "F21",
        "F22",
        "F23",
        "F24",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "NUM_LOCK",
        "SCROLL_LOCK",
        "WIN_OEM_FJ_JISHO",
        "WIN_OEM_FJ_MASSHOU",
        "WIN_OEM_FJ_TOUROKU",
        "WIN_OEM_FJ_LOYA",
        "WIN_OEM_FJ_ROYA",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "CIRCUMFLEX",
        "EXCLAMATION",
        "DOUBLE_QUOTE",
        "HASH",
        "DOLLAR",
        "PERCENT",
        "AMPERSAND",
        "UNDERSCORE",
        "OPEN_PAREN",
        "CLOSE_PAREN",
        "ASTERISK",
        "PLUS",
        "PIPE",
        "HYPHEN_MINUS",
        "OPEN_CURLY_BRACKET",
        "CLOSE_CURLY_BRACKET",
        "TILDE",
        "",
        "",
        "",
        "",
        "VOLUME_MUTE",
        "VOLUME_DOWN",
        "VOLUME_UP",
        "",
        "",
        "SEMICOLON",
        "EQUALS",
        "COMMA",
        "MINUS",
        "PERIOD",
        "SLASH",
        "BACK_QUOTE",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "OPEN_BRACKET",
        "BACK_SLASH",
        "CLOSE_BRACKET",
        "QUOTE",
        "",
        "META",
        "ALTGR",
        "",
        "WIN_ICO_HELP",
        "WIN_ICO_00",
        "",
        "WIN_ICO_CLEAR",
        "",
        "",
        "WIN_OEM_RESET",
        "WIN_OEM_JUMP",
        "WIN_OEM_PA1",
        "WIN_OEM_PA2",
        "WIN_OEM_PA3",
        "WIN_OEM_WSCTRL",
        "WIN_OEM_CUSEL",
        "WIN_OEM_ATTN",
        "WIN_OEM_FINISH",
        "WIN_OEM_COPY",
        "WIN_OEM_AUTO",
        "WIN_OEM_ENLW",
        "WIN_OEM_BACKTAB",
        "ATTN",
        "CRSEL",
        "EXSEL",
        "EREOF",
        "PLAY",
        "ZOOM",
        "",
        "PA1",
        "WIN_OEM_CLEAR",
        "",
      ];
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "h", function () {
      return editmode;
    }),
      __webpack_require__.d(__webpack_exports__, "g", function () {
        return editing;
      }),
      __webpack_require__.d(__webpack_exports__, "c", function () {
        return currentWeapon;
      }),
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return currentBody;
      }),
      __webpack_require__.d(__webpack_exports__, "i", function () {
        return editorUI;
      }),
      __webpack_require__.d(__webpack_exports__, "p", function () {
        return setEditmode;
      }),
      __webpack_require__.d(__webpack_exports__, "o", function () {
        return selectedObjects;
      }),
      __webpack_require__.d(__webpack_exports__, "r", function () {
        return updateSelectedObject;
      }),
      __webpack_require__.d(__webpack_exports__, "e", function () {
        return deselectAllObjects;
      }),
      __webpack_require__.d(__webpack_exports__, "k", function () {
        return moveForwardSelectedObjects;
      }),
      __webpack_require__.d(__webpack_exports__, "j", function () {
        return moveBackwardSelectedObjects;
      }),
      __webpack_require__.d(__webpack_exports__, "d", function () {
        return deleteSelectedObjects;
      }),
      __webpack_require__.d(__webpack_exports__, "f", function () {
        return duplicateSelectedObjects;
      }),
      __webpack_require__.d(__webpack_exports__, "q", function () {
        return undo;
      }),
      __webpack_require__.d(__webpack_exports__, "m", function () {
        return redo;
      }),
      __webpack_require__.d(__webpack_exports__, "n", function () {
        return selectAll;
      }),
      __webpack_require__.d(__webpack_exports__, "l", function () {
        return receiveTank;
      }),
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return addChild;
      });
    var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8),
      lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
        lodash__WEBPACK_IMPORTED_MODULE_0__
      ),
      _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
      _shared_constants__WEBPACK_IMPORTED_MODULE_1___default =
        __webpack_require__.n(_shared_constants__WEBPACK_IMPORTED_MODULE_1__),
      _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(13),
      _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2___default =
        __webpack_require__.n(
          _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__
        ),
      _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(0),
      _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3___default =
        __webpack_require__.n(
          _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__
        ),
      _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2),
      _input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9),
      _networking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5),
      _render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6),
      _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3),
      base64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17),
      base64_js__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(
        base64_js__WEBPACK_IMPORTED_MODULE_9__
      ),
      pako__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25);
    function _createForOfIteratorHelper(e, t) {
      var n =
        ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = _unsupportedIterableToArray(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return r >= e.length ? { done: true } : { done: false, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var o,
        i = true,
        s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (i = e.done), e;
        },
        e: function (e) {
          (s = true), (o = e);
        },
        f: function () {
          try {
            i || null == n.return || n.return();
          } finally {
            if (s) throw o;
          }
        },
      };
    }
    function _toConsumableArray(e) {
      return (
        _arrayWithoutHoles(e) ||
        _iterableToArray(e) ||
        _unsupportedIterableToArray(e) ||
        _nonIterableSpread()
      );
    }
    function _nonIterableSpread() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    function _unsupportedIterableToArray(e, t) {
      if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? _arrayLikeToArray(e, t)
            : void 0
        );
      }
    }
    function _iterableToArray(e) {
      if (
        ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e["@@iterator"]
      )
        return Array.from(e);
    }
    function _arrayWithoutHoles(e) {
      if (Array.isArray(e)) return _arrayLikeToArray(e);
    }
    function _arrayLikeToArray(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var editmode = false,
      editing = false,
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
      (editmode = e),
        e
          ? editorUI.classList.remove("hidden")
          : (editorUI.classList.add("hidden"), editing && toggleEditing());
    }
    function toggleEditing() {
      (editing = !editing)
        ? (editorMenu.classList.remove("hide"),
          Object(_input__WEBPACK_IMPORTED_MODULE_5__.s)(),
          Object(_render__WEBPACK_IMPORTED_MODULE_7__.setShowChatBox)(false),
          Object(_input__WEBPACK_IMPORTED_MODULE_5__.g)(),
          Object(_input__WEBPACK_IMPORTED_MODULE_5__.f)(false),
          document.body.addEventListener("mousemove", mouseMove),
          Object(_input__WEBPACK_IMPORTED_MODULE_5__.o)())
        : (document.body.removeEventListener("mousemove", mouseMove),
          tooltipElement.classList.add("hide"),
          editorMenu.classList.add("hide"),
          Object(_render__WEBPACK_IMPORTED_MODULE_7__.setShowChatBox)(true));
    }
    selectionMenu.classList.add("hidden"),
      (document.getElementById("button-edit").onclick = function () {
        toggleEditing();
      });
    var tooltipElement = document.getElementById("tank-editor-tooltip");
    function mouseMove(e) {
      var t = e.target.getAttribute("data-tooltip");
      t
        ? ((tooltipElement.innerText = t),
          tooltipElement.classList.remove("hide"))
        : tooltipElement.classList.add("hide"),
        (tooltipElement.style.top = e.y + "px"),
        (tooltipElement.style.left = e.x + "px");
    }
    document.getElementById("game-canvas").onclick = function (e) {
      editing &&
        Object(_render__WEBPACK_IMPORTED_MODULE_7__.checkForTankEditorClicks)(
          e.ctrlKey || e.shiftKey || e.metaKey
        );
    };
    for (
      var collapsibles = document.getElementsByClassName(
          "tank-editor-collapsible"
        ),
        i = 0;
      i < collapsibles.length;
      i++
    )
      collapsibles[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var e = this.nextElementSibling;
        "flex" === e.style.display
          ? (e.style.display = "none")
          : (e.style.display = "flex");
      });
    var weaponCameraSizeMultiplierInput = document.getElementById(
        "weapon-camera-size-multiplier"
      ),
      bodyCameraSizeMultiplierInput = document.getElementById(
        "body-camera-size-multiplier"
      ),
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
    (customTeamColor.value = "custom"),
      (customTeamColor.innerText = "Custom..."),
      _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.TEAMS.forEach(
        function (e) {
          var t = addChild(teamSelect, "option");
          (t.value = e.value), (t.innerText = e.name);
        }
      );
    var customVisualTeamColor = addChild(visualTeamSelect, "option");
    function updateTeamSelect(e) {
      Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)(
        e
      )
        ? ((teamSelectColor.value = e),
          (teamSelect.value = "custom"),
          teamSelectColor.classList.remove("hidden"))
        : ((teamSelect.value = e), teamSelectColor.classList.add("hidden"));
    }
    function updateVisualTeamSelect(e) {
      Object(_shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode)(
        e
      )
        ? ((visualTeamSelectColor.value = e),
          (visualTeamSelect.value = "custom"),
          visualTeamSelectColor.classList.remove("hidden"))
        : ((visualTeamSelect.value = e),
          visualTeamSelectColor.classList.add("hidden"));
    }
    function tankUpdate() {
      var e =
        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      weaponUpdate(false, false),
        bodyUpdate(false, false),
        updateSelectedObject(),
        e && createSaveState();
    }
    (customVisualTeamColor.value = "custom"),
      (customVisualTeamColor.innerText = "Custom..."),
      _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.VISUAL_TEAMS.forEach(
        function (e) {
          var t = addChild(visualTeamSelect, "option");
          (t.value = e.value), (t.innerText = e.name);
        }
      ),
      (weaponCameraSizeMultiplierInput.onchange = function () {
        (currentWeapon.cameraSizeMultiplier = validateNumberAttribute(
          simplifyNumberInput(weaponCameraSizeMultiplierInput.value),
          1
        )),
          (weaponCameraSizeMultiplierInput.value = Math.max(
            0.1,
            currentWeapon.cameraSizeMultiplier
          )),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(),
          weaponUpdate();
      }),
      (bodyCameraSizeMultiplierInput.onchange = function () {
        (currentBody.cameraSizeMultiplier = validateNumberAttribute(
          simplifyNumberInput(bodyCameraSizeMultiplierInput.value),
          1
        )),
          (bodyCameraSizeMultiplierInput.value = Math.max(
            0.1,
            currentBody.cameraSizeMultiplier
          )),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (weaponMaxDronesInput.onchange = function () {
        (currentWeapon.maxDrones = validateNumberAttribute(
          simplifyNumberInput(weaponMaxDronesInput.value),
          1
        )),
          (weaponMaxDronesInput.value = Math.max(0, currentWeapon.maxDrones)),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(),
          weaponUpdate();
      }),
      (bodyMaxDronesInput.onchange = function () {
        (currentBody.maxDrones = validateNumberAttribute(
          simplifyNumberInput(bodyMaxDronesInput.value),
          1
        )),
          (bodyMaxDronesInput.value = Math.max(0, currentBody.maxDrones)),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (sidesInput.onchange = function () {
        (currentBody.sides = Object(
          _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
        )(validateNumberAttribute(simplifyNumberInput(sidesInput.value), 0))),
          (sidesInput.value = currentBody.sides),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (outerSidesInput.onchange = function () {
        (currentBody.outerSides = Object(
          _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
        )(
          validateNumberAttribute(simplifyNumberInput(outerSidesInput.value), 0)
        )),
          (outerSidesInput.value = currentBody.outerSides),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (outerSizeInput.onchange = function () {
        (currentBody.outerSize = validateNumberAttribute(
          simplifyNumberInput(outerSizeInput.value),
          0
        )),
          (outerSizeInput.value = currentBody.outerSize),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (healthInput.onchange = function () {
        (currentBody.healthMultiplier = validateNumberAttribute(
          simplifyNumberInput(healthInput.value),
          1
        )),
          (healthInput.value = currentBody.healthMultiplier),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (bodyDamageInput.onchange = function () {
        (currentBody.bodyDamageMultiplier = validateNumberAttribute(
          simplifyNumberInput(bodyDamageInput.value),
          1
        )),
          (bodyDamageInput.value = currentBody.bodyDamageMultiplier),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (speedInput.onchange = function () {
        (currentBody.speedMultiplier = validateNumberAttribute(
          simplifyNumberInput(speedInput.value),
          1
        )),
          (speedInput.value = currentBody.speedMultiplier),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (weaponNameInput.onchange = function () {
        (currentWeapon.name = validateTextAttribute(
          weaponNameInput.value.trim(),
          ""
        )),
          (weaponNameInput.value = currentWeapon.name),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(),
          weaponUpdate();
      }),
      (bodyNameInput.onchange = function () {
        (currentBody.name = validateTextAttribute(
          bodyNameInput.value.trim(),
          ""
        )),
          (bodyNameInput.value = currentBody.name),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (saveAsPngButton.onclick = function () {
        Object(_render__WEBPACK_IMPORTED_MODULE_7__.exportRenderedEntity)({
          sides: currentBody.sides,
          outerSides: currentBody.outerSides,
          outerSize: currentBody.outerSize,
          gadgets: Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(
            currentBody.gadgets
          ),
          layers: Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(
            currentBody.layers
          ),
          barrels: Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(
            currentWeapon.barrels
          ),
          d: Object(
            _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians
          )(90),
          filename: saveAsPngInput.value.replace(/[\/|\\:*?"<>]/g, " ").trim(),
          size: _render__WEBPACK_IMPORTED_MODULE_7__.lastMe.size,
          team: _render__WEBPACK_IMPORTED_MODULE_7__.lastMe.team,
        });
      }),
      saveAsPngInput.addEventListener("keydown", function (e) {
        e.keyCode == _settings__WEBPACK_IMPORTED_MODULE_8__.c.enter &&
          (saveAsPngButton.click(), saveAsPngInput.blur());
      }),
      (tankTypeSelect.onchange = function () {
        (currentBody.type = validateNumberAttribute(tankTypeSelect.value, 0)),
          (tankTypeSelect.value = currentBody.type),
          levelInput.onchange(),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (levelInput.onchange = function () {
        (currentBody.level = Math.ceil(
          Object(lodash__WEBPACK_IMPORTED_MODULE_0__.clamp)(
            validateNumberAttribute(simplifyNumberInput(levelInput.value), 1),
            Math.max(1 == currentBody.type ? 75 : 1),
            500
          )
        )),
          (levelInput.value = currentBody.level),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (teamSelect.onchange = function () {
        "custom" == teamSelect.value
          ? (Object(
              _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode
            )(currentBody.team) || (currentBody.team = "#ffffff"),
            (teamSelectColor.value = currentBody.team),
            teamSelectColor.classList.remove("hidden"))
          : ((currentBody.team = validateNumberAttribute(teamSelect.value, 0)),
            (teamSelect.value = currentBody.team),
            teamSelectColor.classList.add("hidden")),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (teamSelectColor.onchange = function () {
        Object(
          _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode
        )(teamSelectColor.value) ||
          (Object(
            _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode
          )("#" + teamSelectColor.value)
            ? (teamSelectColor.value = "#" + teamSelectColor.value)
            : (teamSelectColor.value = currentBody.team)),
          (currentBody.team = teamSelectColor.value),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (visualTeamSelect.onchange = function () {
        "custom" == visualTeamSelect.value
          ? (Object(
              _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode
            )(currentBody.visualTeam) || (currentBody.visualTeam = "#ffffff"),
            (visualTeamSelectColor.value = currentBody.visualTeam),
            visualTeamSelectColor.classList.remove("hidden"))
          : ((currentBody.visualTeam = validateNumberAttribute(
              visualTeamSelect.value,
              void 0
            )),
            (visualTeamSelect.value = currentBody.visualTeam),
            visualTeamSelectColor.classList.add("hidden")),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (visualTeamSelectColor.onchange = function () {
        Object(
          _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode
        )(visualTeamSelectColor.value) ||
          (Object(
            _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode
          )("#" + visualTeamSelectColor.value)
            ? (visualTeamSelectColor.value = "#" + visualTeamSelectColor.value)
            : (visualTeamSelectColor.value = currentBody.visualTeam)),
          (currentBody.visualTeam = visualTeamSelectColor.value),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (radiantInput.onchange = function () {
        (currentBody.radiant = Math.round(
          Object(lodash__WEBPACK_IMPORTED_MODULE_0__.clamp)(
            validateNumberAttribute(simplifyNumberInput(radiantInput.value), 0),
            0,
            _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.MAX_RADIANT
          )
        )),
          (radiantInput.value = currentBody.radiant),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }),
      (tankNameInput.onchange = function () {
        (currentBody.overrideTankName = validateTextAttribute(
          tankNameInput.value.trim(),
          ""
        )),
          (tankNameInput.value = currentBody.overrideTankName),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      });
    var selectedObjects = [];
    function getSelectedObject(e) {
      return 0 == e.stack.length
        ? {
            barrel: currentWeapon.barrels,
            gadget: currentBody.gadgets,
            layer: currentBody.layers,
          }[e.type][e.index]
        : (function e(t, n, r) {
            if (1 == n.length) {
              var a = t[n[0]];
              return a && 3 == a.type && a.tank
                ? {
                    barrel: a.tank.barrels,
                    gadget: a.tank.gadgets,
                    layer: a.tank.layers,
                  }[r.type][r.index]
                : void 0;
            }
            var o = t[n.shift()];
            return o && 3 == o.type && o.tank
              ? e(o.tank.gadgets, n, r)
              : void 0;
          })(currentBody.gadgets, _toConsumableArray(e.stack), e);
    }
    function updateSelectedObject(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
      if (e) {
        var a = -1;
        if (n || 1 == selectedObjects.length)
          for (var o = 0; o < selectedObjects.length; o++) {
            var i = selectedObjects[o];
            if (
              i.type == e &&
              i.index == t &&
              Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(i.stack, r)
            ) {
              a = o;
              break;
            }
          }
        -1 == a
          ? (n || (selectedObjects = []),
            selectedObjects.push({ type: e, index: t, stack: r }))
          : selectedObjects.splice(a, 1);
      }
      0 == selectedObjects.length
        ? (mainTankEditorMenu.classList.remove("hidden"),
          selectionMenu.classList.add("hidden"))
        : (mainTankEditorMenu.classList.add("hidden"),
          selectionMenu.classList.remove("hidden"));
      var s,
        l = [],
        u = _createForOfIteratorHelper(selectedObjects);
      try {
        for (u.s(); !(s = u.n()).done; ) {
          var c = s.value;
          getSelectedObject(c) || l.push(c);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
      selectedObjects = selectedObjects.filter(function (e) {
        return !l.includes(e);
      });
      for (
        var d = [
            [barrelButtons, "barrel", currentWeapon.barrels],
            [gadgetButtons, "gadget", currentBody.gadgets],
            [layerButtons, "layer", currentBody.layers],
          ],
          f = function e(t) {
            var n,
              r = _createForOfIteratorHelper(t.barrels);
            try {
              for (r.s(); !(n = r.n()).done; ) {
                delete n.value.selected;
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
            var a,
              o = _createForOfIteratorHelper(t.gadgets);
            try {
              for (o.s(); !(a = o.n()).done; ) {
                var i = a.value;
                delete i.selected, 3 == i.type && i.tank && e(i.tank);
              }
            } catch (e) {
              o.e(e);
            } finally {
              o.f();
            }
            var s,
              l = _createForOfIteratorHelper(t.layers);
            try {
              for (l.s(); !(s = l.n()).done; ) {
                delete s.value.selected;
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
          },
          h = function e(t) {
            var n,
              r = _createForOfIteratorHelper(t);
            try {
              for (r.s(); !(n = r.n()).done; ) {
                var a = n.value;
                a.button.classList.remove("selected"),
                  a.tank &&
                    (e(a.tank.barrels), e(a.tank.gadgets), e(a.tank.layers));
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
          },
          p = 0,
          _ = d;
        p < _.length;
        p++
      ) {
        var g = _[p],
          v = g[0],
          m = g[2];
        h(v);
        var b,
          y = _createForOfIteratorHelper(m);
        try {
          for (y.s(); !(b = y.n()).done; ) {
            var E = b.value;
            delete E.selected, "gadget" == g[1] && 3 == E.type && f(E.tank);
          }
        } catch (e) {
          y.e(e);
        } finally {
          y.f();
        }
      }
      var O,
        w = function e(t, n, r) {
          if (1 == n.length) {
            var a = t[n[0]];
            return {
              barrel: a.tank.barrels,
              gadget: a.tank.gadgets,
              layer: a.tank.layers,
            }[r.type][r.index];
          }
          return e(t[n.shift()].tank.gadgets, n, r);
        },
        T = _createForOfIteratorHelper(selectedObjects);
      try {
        for (T.s(); !(O = T.n()).done; ) {
          var M,
            S = O.value,
            A = _createForOfIteratorHelper(d);
          try {
            for (A.s(); !(M = A.n()).done; ) {
              var k = M.value,
                x = k[0],
                R = k[1];
              k[2];
              if (0 == S.stack.length) {
                if (S.type == R) {
                  var I = x[S.index].button;
                  I.classList.add("selected");
                }
              } else if ("gadget" == R) {
                var C = w(x, _toConsumableArray(S.stack), S).button;
                C.classList.add("selected");
              }
            }
          } catch (e) {
            A.e(e);
          } finally {
            A.f();
          }
        }
      } catch (e) {
        T.e(e);
      } finally {
        T.f();
      }
      updateSelectedObjectMenu();
    }
    function deselectAllObjects() {
      (selectedObjects = []), updateSelectedObject();
    }
    function deselectObject(e, t, n) {
      updateSelectedObject(e, t, n);
    }
    var barrelTypes = [
        { value: 0, name: "Cannon" },
        { value: 1, name: "Drone Spawner" },
        { value: 2, name: "Trap Launcher" },
        { value: 7, name: "Rocket Launcher" },
        { value: 3, name: "Minion Spawner" },
        { value: 8, name: "Custom Trap Launcher" },
        { value: 6, name: "Nothing Barrel" },
        { value: 4, name: "Player Spawner" },
        { value: 5, name: "Polyp Spawner" },
        { value: 9, name: "Polygon Spawner" },
      ],
      gadgetTypes = [
        { value: 0, name: "Auto Cannon" },
        { value: 1, name: "Mounted Drone Spawner" },
        { value: 2, name: "Aura" },
        { value: 3, name: "Tank Section" },
      ],
      auraTypes = [
        { value: 0, name: "Damaging" },
        { value: 1, name: "Healing" },
        { value: 3, name: "Repulsion" },
        { value: 4, name: "Attraction" },
        { value: 2, name: "Cosmetic" },
      ],
      visualBarrelTypes = [
        { value: void 0, name: "Unset" },
        { value: 0, name: "Cannon" },
        { value: 1, name: "Drone Spawner" },
        { value: 2, name: "Trap Launcher" },
        { value: 7, name: "Rocket Launcher" },
        { value: 3, name: "Minion Spawner" },
        { value: 8, name: "Custom Trap Launcher" },
        { value: 6, name: "Nothing Barrel" },
        { value: 4, name: "Player Spawner" },
        { value: 5, name: "Polyp Spawner" },
        { value: 9, name: "Polygon Spawner" },
      ],
      barrelAttributes =
        _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.BARREL_ATTIBUTES,
      shootTriggers = [
        { name: "Normal", value: 0 },
        { name: "Inverse", value: 1 },
        { name: "Always", value: 2 },
        { name: "Never", value: 3 },
        { name: "Under Drone Limit", value: 4 },
        { name: "Not Under Drone Limit", value: 5 },
        { name: "Death", value: 6 },
      ],
      idleBehaviors = [
        { name: "Rotate", value: 0 },
        { name: "Return to Base Rotation", value: 1 },
      ],
      sectionRotationType = [
        { name: "Static", value: 0 },
        { name: "Auto Cannon", value: 1 },
        { name: "Rotate", value: 2 },
      ],
      gadgetAttributes = [
        {
          name: "Auto Cannon",
          bulletName: "Bullet",
          barrelColor: true,
          bulletStats: true,
          defaultLength: 0.5,
          defaultWidth: 0.25,
        },
        {
          name: "Mounted Drone Spawner",
          bulletName: "Drone",
          barrelColor: true,
          bulletStats: true,
          droneStats: true,
          defaultWidth: 0.5,
        },
        {
          name: "Aura",
          bulletName: "Aura",
          barrelColor: true,
          defaultWidth: 0.6,
        },
        { name: "Tank Section", bulletName: "Tank", defaultWidth: 0.5 },
      ],
      teamColors = [
        { value: void 0, name: "Unset" },
        { value: -1, name: "Fallen (Light Gray)" },
        { value: 2, name: "Celestial (Pink)" },
        { value: 10, name: "Blue" },
        { value: 11, name: "Red" },
        { value: 12, name: "Green" },
        { value: 13, name: "Purple" },
        { value: 5, name: "Black" },
        { value: 6, name: "White" },
        { value: 3, name: "Barrel (Gray)" },
        { value: 7, name: "Spike (Dark Gray)" },
        { value: 20, name: "Triangle Yellow" },
        { value: 21, name: "Square Red" },
        { value: 22, name: "Pentagon Blue" },
        { value: 23, name: "Hexagon Orange" },
        { value: 24, name: "Heptagon Green" },
        { value: 25, name: "Octagon Blue" },
        { value: 26, name: "Nonagon Dark Purple" },
        { value: 27, name: "Decagon Dark Blue" },
        { value: 28, name: "Hendecagon Black" },
        { value: 29, name: "Dodecagon Dark Grey" },
        { value: 30, name: "Tridecagon White" },
      ],
      barrelColors = [
        { value: void 0, name: "Default (Gray)" },
        { value: -1, name: "Fallen (Light Gray)" },
        { value: 2, name: "Celestial (Pink)" },
        { value: 10, name: "Blue" },
        { value: 11, name: "Red" },
        { value: 12, name: "Green" },
        { value: 13, name: "Purple" },
        { value: 5, name: "Black" },
        { value: 6, name: "White" },
        { value: 7, name: "Spike (Dark Gray)" },
        { value: 20, name: "Triangle Yellow" },
        { value: 21, name: "Square Red" },
        { value: 22, name: "Pentagon Blue" },
        { value: 23, name: "Hexagon Orange" },
        { value: 24, name: "Heptagon Green" },
        { value: 25, name: "Octagon Blue" },
        { value: 26, name: "Nonagon Dark Purple" },
        { value: 27, name: "Decagon Dark Blue" },
        { value: 28, name: "Hendecagon Black" },
        { value: 29, name: "Dodecagon Dark Grey" },
        { value: 30, name: "Tridecagon White" },
      ];
    function addDropdownAttribute(e, t, n, r, a) {
      var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        i =
          arguments.length > 6 && void 0 !== arguments[6]
            ? arguments[6]
            : void 0;
      attributes.push({
        type: 0,
        subtype: r,
        id: n,
        name: e,
        description: t,
        options: a,
        deleteIfNaN: o,
        placeholder: i,
      });
    }
    function addLargeTextAttribute(e, t, n, r, a) {
      attributes.push({
        type: 1,
        subtype: a,
        id: r,
        name: e,
        description: t,
        placeholder: n,
      });
    }
    function addTextAttribute(e, t, n, r, a, o) {
      attributes.push({
        type: 2,
        subtype: o,
        id: n,
        name: e,
        description: t,
        placeholder: r,
        isNumber: a,
      });
    }
    function addHeader(e) {
      attributes.push({ type: -1, name: e, id: e });
    }
    var attributes = [];
    function updateSelectedObjectMenu() {
      var e,
        t = [],
        n = _createForOfIteratorHelper(selectedObjects);
      try {
        for (n.s(); !(e = n.n()).done; ) {
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
                o = getLayerName(a);
            }
            switch (((a.selected = true), (attributes = []), r.type)) {
              case "barrel":
                var i = barrelAttributes[a.type];
                addDropdownAttribute(
                  "Barrel Type",
                  "The type of the barrel. Each barrel type functions and looks differently.",
                  "type",
                  1,
                  barrelTypes,
                  false,
                  0
                ),
                  addDropdownAttribute(
                    "Override Visual Type",
                    "Overrides the look of the barrel, making it look like another barrel type.",
                    "visualType",
                    0,
                    visualBarrelTypes,
                    true
                  ),
                  i.minionStats &&
                    addLargeTextAttribute(
                      "".concat(i.bulletName, " Tank Code"),
                      "The tank code of the ".concat(
                        i.bulletName.toLowerCase(),
                        ". It can have barrels, gadgets, and layers, just like any other tank."
                      ),
                      'enter a "full tank" code here',
                      "minion",
                      0
                    ),
                  addHeader("Size and Position"),
                  addTextAttribute(
                    "Rotation",
                    "The barrel's rotation, in degrees.",
                    "rot",
                    0,
                    true,
                    1
                  ),
                  addTextAttribute(
                    "Length",
                    "The length of the barrel. ".concat(
                      i.bulletName,
                      "s are shot from the tip of the barrel."
                    ),
                    "length",
                    i.defaultLength,
                    true,
                    0
                  ),
                  addTextAttribute(
                    "Width",
                    "The width of the barrel. Wider barrels shoot larger ".concat(
                      i.bulletName.toLowerCase(),
                      "s, and deal more recoil."
                    ),
                    "width",
                    i.defaultWidth,
                    true,
                    0
                  ),
                  addTextAttribute(
                    "Side Offset",
                    "The barrel's offset to the side.",
                    "offset",
                    0,
                    true,
                    0
                  ),
                  addTextAttribute(
                    "Forward Offset",
                    "The barrel's offset forwards. Use negative numbers to offset it backwards.",
                    "distance",
                    0,
                    true,
                    0
                  ),
                  addHeader("Attributes"),
                  addDropdownAttribute(
                    "Barrel Color",
                    "The color of the barrel.",
                    "color",
                    3,
                    barrelColors,
                    true
                  ),
                  i.polygonStats &&
                    (addDropdownAttribute(
                      "Polygon Color Type",
                      "The color of the polygon. 'Polygon Color' uses the color the polygon would normally be, and 'Team Color' uses the color of the polygon's team.",
                      "colorType",
                      0,
                      ["Polygon Color", "Team Color"],
                      false,
                      0
                    ),
                    addDropdownAttribute(
                      "Polygon Team",
                      "The team of the polygon. Polygons can't damage entities on their team, unless the team name says (FFA). All naturally spawning polygons are on the 'Polygon' team.",
                      "team",
                      3,
                      _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.POLYGON_TEAMS,
                      true,
                      1
                    ),
                    addTextAttribute(
                      "Minimum ".concat(i.bulletName, " Size"),
                      "The minimum number of sides the polygon will have.",
                      "minSize",
                      3,
                      true,
                      2
                    ),
                    addTextAttribute(
                      "Maximum ".concat(i.bulletName, " Size"),
                      "The maximum number of sides the polygon will have. Polygon sizes are still limited by the map size.",
                      "maxSize",
                      3,
                      true,
                      2
                    ),
                    addTextAttribute(
                      "".concat(i.bulletName, " Radiant Level"),
                      "The radiant level of the polygon. Radiant polygons change colors over time, and drop more XP.",
                      "radiant",
                      0,
                      true,
                      5
                    )),
                  (i.minionStats || i.bulletStats) &&
                    addDropdownAttribute(
                      "Override ".concat(i.bulletName, " Color"),
                      "Overrides the color of the ".concat(
                        i.bulletName.toLowerCase(),
                        ", no mattter your team."
                      ),
                      "team",
                      3,
                      teamColors,
                      true
                    ),
                  i.noShootTrigger ||
                    addDropdownAttribute(
                      "Shoot Trigger",
                      "What causes the barrel to shoot. Most barrels use 'Normal' by default, except for Drone Spawners and Minion Spawners.",
                      "shootTrigger",
                      0,
                      [
                        {
                          value: void 0,
                          name: "Default (".concat(
                            shootTriggers[i.defaultShootTrigger].name,
                            ")"
                          ),
                        },
                      ].concat(shootTriggers),
                      true
                    ),
                  i.droneStats &&
                    (addTextAttribute(
                      "".concat(i.bulletName, " Minimum Distance"),
                      "".concat(
                        i.bulletName,
                        "s closer than this to their target will move away from it."
                      ),
                      "minDist",
                      i.minionStats ? 6 : 0,
                      true,
                      0
                    ),
                    addTextAttribute(
                      "".concat(i.bulletName, " Maximum Distance"),
                      "".concat(
                        i.bulletName,
                        "s farther away than this to their target will move closer to it."
                      ),
                      "maxDist",
                      i.minionStats ? 10 : 0,
                      true,
                      0
                    )),
                  addTextAttribute(
                    "Reload",
                    "How long the barrel waits in between shots. The larger the number, the larger time in between shots.",
                    "reload",
                    1,
                    true,
                    0
                  ),
                  addTextAttribute(
                    "Recoil",
                    "How much the barrel pushes you back when shooting. Recoil is also influenced by the ".concat(
                      i.bulletName.toLowerCase(),
                      "'s size."
                    ),
                    "recoil",
                    1,
                    true,
                    0
                  ),
                  i.extraBulletStats &&
                    (addTextAttribute(
                      "Spread",
                      "How far (in degrees) the direction of shots are randomized.",
                      "spread",
                      0,
                      true,
                      0
                    ),
                    addTextAttribute(
                      "".concat(i.bulletName, " Size"),
                      "The size multiplier of the ".concat(
                        i.bulletName.toLowerCase(),
                        ". Size is also influenced by the barrel width."
                      ),
                      "size",
                      1,
                      true,
                      0
                    )),
                  i.minionStats &&
                    (addTextAttribute(
                      "".concat(i.bulletName, " Body Damage"),
                      "The body damage multiplier of the ".concat(
                        i.bulletName.toLowerCase(),
                        "."
                      ),
                      "damage",
                      1,
                      true,
                      0
                    ),
                    addTextAttribute(
                      "".concat(i.bulletName, " Speed"),
                      "The movement speed multiplier of the ".concat(
                        i.bulletName.toLowerCase(),
                        "."
                      ),
                      "speed",
                      1,
                      true,
                      0
                    ),
                    addTextAttribute(
                      "".concat(i.bulletName, " Health"),
                      "The health speed multiplier of the ".concat(
                        i.bulletName.toLowerCase(),
                        "."
                      ),
                      "penetration",
                      1,
                      true,
                      0
                    )),
                  i.launchSpeed &&
                    addTextAttribute(
                      "".concat(i.bulletName, " Launch Speed"),
                      "The speed at which the ".concat(
                        i.bulletName.toLowerCase(),
                        " is launched out of the barrel."
                      ),
                      "speed",
                      1,
                      true,
                      0
                    ),
                  i.bulletStats &&
                    (addTextAttribute(
                      "".concat(i.bulletName, " Damage"),
                      "The amount of damage dealt by the ".concat(
                        i.bulletName.toLowerCase(),
                        "."
                      ),
                      "damage",
                      1,
                      true,
                      0
                    ),
                    addTextAttribute(
                      "".concat(i.bulletName, " Speed"),
                      "The movement speed of the ".concat(
                        i.bulletName.toLowerCase(),
                        "."
                      ),
                      "speed",
                      1,
                      true,
                      0
                    ),
                    addTextAttribute(
                      "".concat(i.bulletName, " Penetration"),
                      "The penetration the "
                        .concat(
                          i.bulletName.toLowerCase(),
                          ". Higher penetration "
                        )
                        .concat(
                          i.bulletName.toLowerCase(),
                          "s last longer before despawning or dying."
                        ),
                      "penetration",
                      1,
                      true,
                      0
                    )),
                  addTextAttribute(
                    "Barrel Delay",
                    "How long the barrel waits before it starts shooting. Influenced by reload.",
                    "delay",
                    0,
                    true,
                    0
                  );
                break;
              case "gadget":
                var s = gadgetAttributes[a.type];
                addDropdownAttribute(
                  "Gadget Type",
                  "The type of the gadget. Different gadgets function and look differently.",
                  "type",
                  2,
                  gadgetTypes,
                  false,
                  0
                ),
                  2 == a.type &&
                    addDropdownAttribute(
                      "Aura Type",
                      "The type of the aura. Each aura functions differently. Cosmetic auras are only for decoration.",
                      "subtype",
                      0,
                      auraTypes
                    ),
                  addHeader("Size and Position"),
                  2 == a.type &&
                    addTextAttribute(
                      "Aura Radius",
                      "The size of the aura.",
                      "radius",
                      4,
                      true,
                      0
                    ),
                  [0, 3].includes(a.type)
                    ? addTextAttribute(
                        "Base Rotation",
                        "The initial rotation of the ".concat(
                          s.name.toLowerCase(),
                          "."
                        ),
                        "baseRot",
                        0,
                        true,
                        1
                      )
                    : addTextAttribute(
                        "Rotation",
                        "The ".concat(s.name.toLowerCase(), "'s rotation"),
                        "rot",
                        0,
                        true,
                        1
                      ),
                  s.defaultLength &&
                    addTextAttribute(
                      "Length",
                      ["The length of the auto cannon's barrel."][a.type],
                      "length",
                      s.defaultLength,
                      true,
                      0
                    ),
                  s.defaultWidth &&
                    addTextAttribute(
                      ["Width", "Size", "Size", "Size"][a.type],
                      [
                        "The width of the auto cannon. The width influences the size of the bullet.",
                        "The size of the mounted drone spawner.",
                        "The size of the aura's base.",
                        "The size of the tank section.",
                      ][a.type],
                      "width",
                      s.defaultWidth,
                      true,
                      0
                    ),
                  addTextAttribute(
                    "Side Offset",
                    "The ".concat(
                      s.name.toLowerCase(),
                      "'s offset to the side."
                    ),
                    "offsetX",
                    0,
                    true,
                    0
                  ),
                  addTextAttribute(
                    "Forward Offset",
                    "The ".concat(s.name.toLowerCase(), "'s offset forwards."),
                    "offsetY",
                    0,
                    true,
                    0
                  ),
                  3 == a.type &&
                    (addHeader("Movement"),
                    addDropdownAttribute(
                      "Rotation Type",
                      "How the tank section rotates. When it's locked, it doesn't rotate at all, and when it's unlocked, it rotates with its base.",
                      "rotationType",
                      0,
                      sectionRotationType
                    ),
                    1 == a.rotationType
                      ? (addHeader("Auto Cannon"),
                        addDropdownAttribute(
                          "Idle Behavior",
                          "What the tank section does when it doesn't have any targets. When set to \"Rotate\", the rotation speed is based on the tank section's idle rotation speed.",
                          "idleBehavior",
                          0,
                          idleBehaviors
                        ),
                        0 == a.idleBehavior &&
                          addTextAttribute(
                            "Idle Rotation Speed",
                            'How fast the tank section rotates when it doesn\'t have any targets and its idle behavior is set to "Rotate".',
                            "rotationSpeed",
                            1,
                            true,
                            0
                          ),
                        addTextAttribute(
                          "Max Rotation Spread",
                          "The maximum the tank section can rotate from its base rotation (in degrees, on both sides). When it's past the maximum, it will rotate until it's back to the maximum. Set to 0 for no maximum.",
                          "maxSpread",
                          0,
                          true,
                          0
                        ),
                        addTextAttribute(
                          "Target Turn Speed",
                          "How fast the tank section turns whenever it finds a target to shoot at. Between 0 and 1.",
                          "turnSpeed",
                          1,
                          true,
                          3
                        ),
                        addTextAttribute(
                          "Main Barrel Speed",
                          "Set this to the bullet speed of the tank section's main barrel for optimal movement prediction. This is only used for movement prediction.",
                          "speed",
                          1,
                          true,
                          0
                        ),
                        addTextAttribute(
                          "Main Barrel Length",
                          "Set this to the length of the tank section's main barrel for optimal movement prediction. This is only used for movement prediction.",
                          "length",
                          1,
                          true,
                          0
                        ),
                        addTextAttribute(
                          "Target Detect Distance",
                          "How far away something needs to be to be detected by the tank section.",
                          "minDistance",
                          15,
                          true,
                          0
                        ),
                        addTextAttribute(
                          "Target Forget Distance",
                          "How far away something needs to be to be forgetten by the tank section.",
                          "maxDistance",
                          25,
                          true,
                          0
                        ))
                      : 2 == a.rotationType &&
                        (addTextAttribute(
                          "Rotation Speed",
                          "How fast the tank section rotates. Set to a negative number to rotate in the opposite direction.",
                          "rotationSpeed",
                          1,
                          true,
                          0
                        ),
                        addDropdownAttribute(
                          "Is Anchored",
                          "Whether or not the tank section rotates with its base.",
                          "anchored",
                          0,
                          ["On", "Off"],
                          false,
                          0
                        )),
                    addHeader("Visual"),
                    addDropdownAttribute(
                      "Override Color",
                      "Overrides the color of the tank section.",
                      "team",
                      3,
                      teamColors,
                      true
                    ),
                    null != a.team &&
                      addDropdownAttribute(
                        "Suppress Color Changes",
                        "Whether or not the tank section changes color with the body. When on, the tank section won't change color when damaged or radiant. Does not work when the tank section's override color is set.",
                        "suppressColor",
                        0,
                        ["On", "Off"],
                        false,
                        0
                      ),
                    addTextAttribute(
                      "Sides",
                      "The amount of sides the tank section has. Zero sides make a circle, negative sides make a star.",
                      "sides",
                      0,
                      true,
                      4
                    ),
                    addHeader("Outer Shell"),
                    addTextAttribute(
                      "Outer Sides",
                      "The amount of sides the tank section's outer shell has. Zero sides make a circle, negative sides make a star.",
                      "outerSides",
                      0,
                      true,
                      4
                    ),
                    addTextAttribute(
                      "Outer Size",
                      "The size of the tank section's outer shell.",
                      "outerSize",
                      0,
                      true,
                      0
                    )),
                  addHeader("Attributes"),
                  3 == a.type &&
                    addLargeTextAttribute(
                      "Tank Code",
                      "Enter a tank code to import it. It can have barrels, gadgets, and layers, just like any other tank.",
                      'enter a "full tank" code here',
                      "tank",
                      1
                    ),
                  s.barrelColor &&
                    addDropdownAttribute(
                      "".concat(2 == a.type ? "Aura Base" : "Barrel", " Color"),
                      "The color of the ".concat(
                        2 == a.type ? "aura's base" : "barrel",
                        "."
                      ),
                      "color",
                      3,
                      barrelColors,
                      true
                    ),
                  s.bulletStats
                    ? (addDropdownAttribute(
                        "Override ".concat(s.bulletName, " Color"),
                        "Overrides the color of the ".concat(
                          s.bulletName.toLowerCase(),
                          ", no mattter your team."
                        ),
                        "team",
                        3,
                        teamColors,
                        true
                      ),
                      s.droneStats &&
                        (addTextAttribute(
                          "".concat(s.bulletName, " Minimum Distance"),
                          "".concat(
                            s.bulletName,
                            "s closer than this to their target will move away from it."
                          ),
                          "minDist",
                          s.minionStats ? 6 : 0,
                          true,
                          0
                        ),
                        addTextAttribute(
                          "".concat(s.bulletName, " Maximum Distance"),
                          "".concat(
                            s.bulletName,
                            "s farther away than this from their target will move closer to it."
                          ),
                          "maxDist",
                          s.minionStats ? 10 : 0,
                          true,
                          0
                        )),
                      0 == a.type &&
                        (addDropdownAttribute(
                          "Idle Behavior",
                          "What the Auto Cannon does when it doesn't have any targets. When set to \"Rotate\", the rotation speed is based on the auto cannon's idle rotation speed.",
                          "idleBehavior",
                          0,
                          idleBehaviors
                        ),
                        0 == a.idleBehavior &&
                          addTextAttribute(
                            "Idle Rotation Speed",
                            'How fast the Auto Cannon rotates when it doesn\'t have any targets and its idle behavior is set to "Rotate".',
                            "rotationSpeed",
                            1,
                            true,
                            0
                          )),
                      addTextAttribute(
                        "Reload",
                        "How long the barrel waits in between shots. The larger the number, the larger time in between shots.",
                        "reload",
                        1,
                        true,
                        0
                      ),
                      0 == a.type &&
                        (addTextAttribute(
                          "Recoil",
                          "How much the barrel pushes you back when shooting. Recoil is also influenced by the ".concat(
                            s.bulletName.toLowerCase(),
                            "'s size."
                          ),
                          "recoil",
                          0,
                          true,
                          0
                        ),
                        addTextAttribute(
                          "Spread",
                          "How far (in degrees) the direction of shots are randomized.",
                          "spread",
                          0,
                          true,
                          0
                        ),
                        addTextAttribute(
                          "Bullet Size",
                          "The size multiplier of the ".concat(
                            s.bulletName.toLowerCase(),
                            ". Size is also influenced by the barrel width."
                          ),
                          "size",
                          1,
                          true,
                          0
                        )),
                      addTextAttribute(
                        "".concat(s.bulletName, " Damage"),
                        "The amount of damage dealt by the ".concat(
                          s.bulletName.toLowerCase(),
                          "."
                        ),
                        "damage",
                        1,
                        true,
                        0
                      ),
                      addTextAttribute(
                        "".concat(s.bulletName, " Speed"),
                        "The movement speed of the ".concat(
                          s.bulletName.toLowerCase(),
                          "."
                        ),
                        "speed",
                        1,
                        true,
                        0
                      ),
                      addTextAttribute(
                        "".concat(s.bulletName, " Penetration"),
                        "The penetration the "
                          .concat(
                            s.bulletName.toLowerCase(),
                            ". Higher penetration "
                          )
                          .concat(
                            s.bulletName.toLowerCase(),
                            "s last longer before despawning or dying."
                          ),
                        "penetration",
                        1,
                        true,
                        0
                      ),
                      0 == a.type &&
                        (addTextAttribute(
                          "Target Detect Distance",
                          "How far away something needs to be to be detected by the auto cannon.",
                          "minDistance",
                          15,
                          true,
                          0
                        ),
                        addTextAttribute(
                          "Target Forget Distance",
                          "How far away something needs to be to be forgetten by the auto cannon.",
                          "maxDistance",
                          25,
                          true,
                          0
                        )))
                    : 2 == a.type &&
                      (addTextAttribute(
                        "Aura Base Sides",
                        "The amount of sides the aura's base has. Zero sides make a circle, negative sides make a star.",
                        "backSides",
                        0,
                        true,
                        4
                      ),
                      addDropdownAttribute(
                        "Override Aura Color",
                        "Overrides the color of the aura.",
                        "auraColor",
                        3,
                        teamColors,
                        true
                      ),
                      addDropdownAttribute(
                        "Particles",
                        "Whether or not the aura emits particles.",
                        "showParticles",
                        0,
                        ["On", "Off"],
                        false,
                        0
                      ),
                      addDropdownAttribute(
                        "Aura Rotation Type",
                        "How the aura rotates. When it's locked, it doesn't rotate at all, and when it's unlocked, it rotates with its base.",
                        "rotationType",
                        0,
                        ["Unlocked", "Locked"]
                      ),
                      addTextAttribute(
                        "Aura Opacity",
                        "The opacity of the aura, 0-1. 0 makes it invisible.",
                        "alpha",
                        0.3,
                        true,
                        0
                      ),
                      2 != a.subtype &&
                        (addTextAttribute(
                          "".concat(
                            ["Attack", "Heal", "Nothing", "Repel", "Attract"][
                              a.subtype
                            ],
                            " Interval"
                          ),
                          "How often the aura will ".concat(
                            [
                              "attack",
                              "heal",
                              "what are you looking for here in the code?",
                              "repel",
                              "attract",
                            ][a.subtype],
                            "."
                          ),
                          "reload",
                          0.25,
                          true,
                          0
                        ),
                        addTextAttribute(
                          "".concat(
                            [
                              "Damage",
                              "Healing",
                              "Nothing",
                              "Repulsion",
                              "Attraction",
                            ][a.subtype]
                          ),
                          "How much the aura will ".concat(
                            ["attack", "heal", "get out", "repel", "attract"][
                              a.subtype
                            ],
                            "."
                          ),
                          "damage",
                          0.125,
                          true,
                          0
                        ),
                        [3, 4].includes(a.subtype) &&
                          addDropdownAttribute(
                            "Ignore Mass",
                            "If the aura ignores the size of the objects it's "
                              .concat(
                                { 3: "repelling", 4: "attracting" }[a.subtype],
                                ". When on, it will "
                              )
                              .concat(
                                { 3: "repel", 4: "attract" }[a.subtype],
                                " all objects at the same speed, regardless of its size."
                              ),
                            "ignoreMass",
                            0,
                            ["On", "Off"],
                            false,
                            1
                          ),
                        addDropdownAttribute(
                          "Affects Bullets",
                          "If the aura affects bullets. Auras will never affect bullets while in the safe zone, regardless of this setting.",
                          "affectBullets",
                          0,
                          ["All Bullets", "Enemy Bullets", "Off"],
                          false,
                          1
                        )),
                      addTextAttribute(
                        "Aura Sides",
                        "The amount of sides the aura has. Zero sides make a circle, negative sides make a star.",
                        "sides",
                        0,
                        true,
                        4
                      ));
                break;
              case "layer":
                addHeader("Size and Position"),
                  addTextAttribute(
                    "Rotation",
                    "The layer's rotation.",
                    "rot",
                    0,
                    true,
                    1
                  ),
                  addTextAttribute(
                    "Side Offset",
                    "The layer's offset to the side.",
                    "offsetX",
                    0,
                    true,
                    0
                  ),
                  addTextAttribute(
                    "Forward Offset",
                    "The layer's offset to the side.",
                    "offsetY",
                    0,
                    true,
                    0
                  ),
                  addTextAttribute(
                    "Size",
                    "The layer's size.",
                    "size",
                    0.5,
                    true,
                    0
                  ),
                  addHeader("Visual"),
                  addDropdownAttribute(
                    "Override Color",
                    "Overrides the color of the layer.",
                    "team",
                    3,
                    teamColors,
                    true
                  ),
                  addTextAttribute(
                    "Sides",
                    "The amount of sides the layer has. Zero sides make a circle, negative sides make a star.",
                    "sides",
                    0,
                    true,
                    4
                  ),
                  addHeader("Outer Shell"),
                  addTextAttribute(
                    "Outer Sides",
                    "The amount of sides the layer's outer shell has. Zero sides make a circle, negative sides make a star.",
                    "outerSides",
                    0,
                    true,
                    4
                  ),
                  addTextAttribute(
                    "Outer Size",
                    "The size of the layer's outer shell.",
                    "outerSize",
                    0,
                    true,
                    0
                  );
            }
            t.push({
              object: a,
              objectInfo: r,
              name: o,
              attributes: attributes,
            });
          }
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
      if (0 != t.length) {
        for (var l, u, c = [], d = 0, f = t; d < f.length; d++) {
          var h,
            p = f[d],
            _ = _createForOfIteratorHelper(p.attributes);
          try {
            var g = function () {
              var e,
                n = h.value,
                r = true,
                a = p.object[n.id],
                o = true,
                i = _createForOfIteratorHelper(t);
              try {
                for (i.s(); !(e = i.n()).done; ) {
                  var s = e.value,
                    l = s.attributes.find(function (e) {
                      return e.id == n.id;
                    });
                  if (
                    !l ||
                    l.type != n.type ||
                    l.subtype != n.subtype ||
                    !Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(
                      l.options,
                      n.options
                    ) ||
                    l.deleteIfNaN != n.deleteIfNaN ||
                    l.isNumber != n.isNumber
                  ) {
                    r = false;
                    break;
                  }
                  o &&
                    (Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(
                      s.object[n.id],
                      a
                    ) ||
                      (o = false));
                }
              } catch (e) {
                i.e(e);
              } finally {
                i.f();
              }
              r &&
                !c.find(function (e) {
                  return e.id == n.id;
                }) &&
                (c.push(n), (n.sharedValue = a), (n.isValueShared = o));
            };
            for (_.s(); !(h = _.n()).done; ) g();
          } catch (e) {
            _.e(e);
          } finally {
            _.f();
          }
          null == l ? (l = p.name) : l != p.name && (l = ""),
            null == u
              ? (u = p.objectInfo.type)
              : u != p.objectInfo.type && (u = "");
        }
        var v =
          { barrel: "Barrel", layer: "Layer", gadget: "Gadget" }[u] || "Object";
        "" == l
          ? (l = "".concat(t.length, " ").concat(v, "s"))
          : t.length > 1 && (l = "".concat(t.length, " ").concat(l, "s")),
          removeAllChildNodes(selectionMenu);
        var m = addChild(selectionMenu, "div");
        (m.id = "tank-editor-title"), (m.innerHTML = l);
        for (
          var b = function (e, n) {
              var r,
                a =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                o = _createForOfIteratorHelper(t);
              try {
                for (o.s(); !(r = o.n()).done; ) {
                  var i = r.value,
                    s = i.object;
                  (null != s[e] && a) ||
                    ((s[e] = Object(
                      lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep
                    )(n)),
                    null == s[e] && delete s[e]);
                }
              } catch (e) {
                o.e(e);
              } finally {
                o.f();
              }
            },
            y = function () {
              var e = O[E];
              switch (e.type) {
                case -1:
                  ((M = addChild(selectionMenu, "div")).id =
                    "tank-editor-subtitle"),
                    (M.innerHTML = e.name),
                    (w = M);
                  break;
                case 0:
                  ((T = addChild(selectionMenu, "div")).id =
                    "tank-editor-text"),
                    (T.innerHTML = e.name + "&emsp;"),
                    (w = T);
                  var t,
                    n =
                      e.isValueShared &&
                      Object(
                        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode
                      )(e.sharedValue);
                  switch (
                    (n &&
                      (((t = addChild(T, "input")).autocomplete = "off"),
                      t.classList.add("tank-editor-input"),
                      (t.placeholder = "#000000"),
                      (t.style.marginRight = "1vmin"),
                      (t.value = e.sharedValue)),
                    (M = addChild(T, "select")).classList.add(
                      "tank-editor-select"
                    ),
                    e.subtype)
                  ) {
                    case 3:
                      var r = addChild(M, "option");
                      (r.value = "custom"), (r.innerHTML = "Custom...");
                  }
                  for (var o = 0; o < e.options.length; o++) {
                    var i = addChild(M, "option");
                    e.options[o].hasOwnProperty("value")
                      ? ((i.value = e.options[o].value),
                        (i.innerHTML = e.options[o].name))
                      : ((i.value = o), (i.innerHTML = e.options[o]));
                  }
                  e.isValueShared
                    ? (M.value = n
                        ? "custom"
                        : validateTextAttribute(e.sharedValue, e.placeholder))
                    : (M.value = -1),
                    t &&
                      (t.onchange = function (t) {
                        Object(
                          _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode
                        )(t.target.value) ||
                          (Object(
                            _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode
                          )("#" + t.target.value)
                            ? (t.target.value = "#" + t.target.value)
                            : (t.target.value = e.sharedValue)),
                          b(e.id, t.target.value),
                          updateSelectedObjects();
                      }),
                    (M.onchange = function (t) {
                      if ("custom" == t.target.value)
                        (e.isValueShared &&
                          Object(
                            _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.isColorCode
                          )(e.sharedValue)) ||
                          b(e.id, "#ffffff");
                      else if (e.deleteIfNaN) {
                        var n = +t.target.value;
                        isNaN(n) && (n = void 0), b(e.id, n);
                      } else
                        b(e.id, validateNumberAttribute(t.target.value, 0));
                      switch (e.subtype) {
                        case 1:
                          switch (
                            (9 != +t.target.value &&
                              [
                                "colorType",
                                "radiant",
                                "minSize",
                                "maxSize",
                              ].forEach(function (e) {
                                b(e, void 0);
                              }),
                            +t.target.value)
                          ) {
                            case 7:
                              b(
                                "minion",
                                {
                                  gadgets: [],
                                  layers: [],
                                  sides: 0,
                                  outerSides: 0,
                                  outerSize: 0,
                                  maxBodyDrones: 3,
                                  barrels: [
                                    {
                                      type: 0,
                                      rot: Object(
                                        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians
                                      )(-145),
                                      offset: 0,
                                      width: 0.5,
                                      length: 0.8,
                                      damage: 0.5,
                                      reload: 0.5,
                                      distance: 0,
                                      penetration: 0.5,
                                      delay: 0,
                                    },
                                    {
                                      type: 0,
                                      rot: Object(
                                        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians
                                      )(145),
                                      offset: 0,
                                      width: 0.5,
                                      length: 0.8,
                                      damage: 0.5,
                                      reload: 0.5,
                                      distance: 0,
                                      penetration: 0.5,
                                      delay: 0,
                                    },
                                  ],
                                  maxWeaponDrones: 3,
                                },
                                true
                              ),
                                ["minDist", "maxDist"].forEach(function (e) {
                                  b(e, void 0);
                                });
                              break;
                            case 8:
                              b(
                                "minion",
                                {
                                  gadgets: [],
                                  layers: [],
                                  sides: 4,
                                  outerSides: 0,
                                  outerSize: 0,
                                  maxBodyDrones: 3,
                                  barrels: [
                                    {
                                      type: 0,
                                      rot: Object(
                                        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians
                                      )(-135),
                                      offset: 0,
                                      width: 0.4,
                                      length: 0.6,
                                      damage: 0.5,
                                      reload: 1,
                                      distance: 0,
                                      penetration: 0.5,
                                      delay: 0,
                                    },
                                    {
                                      type: 0,
                                      rot: Object(
                                        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians
                                      )(135),
                                      offset: 0,
                                      width: 0.4,
                                      length: 0.6,
                                      damage: 0.5,
                                      reload: 1,
                                      distance: 0,
                                      penetration: 0.5,
                                      delay: 0,
                                    },
                                    {
                                      type: 0,
                                      rot: Object(
                                        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians
                                      )(-45),
                                      offset: 0,
                                      width: 0.4,
                                      length: 0.6,
                                      damage: 0.5,
                                      reload: 1,
                                      distance: 0,
                                      penetration: 0.5,
                                      delay: 0,
                                    },
                                    {
                                      type: 0,
                                      rot: Object(
                                        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians
                                      )(45),
                                      offset: 0,
                                      width: 0.4,
                                      length: 0.6,
                                      damage: 0.5,
                                      reload: 1,
                                      distance: 0,
                                      penetration: 0.5,
                                      delay: 0,
                                    },
                                  ],
                                  maxWeaponDrones: 3,
                                },
                                true
                              ),
                                ["minDist", "maxDist"].forEach(function (e) {
                                  b(e, void 0);
                                });
                              break;
                            case 3:
                              b(
                                "minion",
                                {
                                  sides: 0,
                                  barrels: [
                                    {
                                      type: 0,
                                      rot: 0,
                                      offset: 0,
                                      width: 0.5,
                                      length: 1,
                                      damage: 0.5,
                                      reload: 1,
                                      delay: 0,
                                    },
                                  ],
                                  gadgets: [],
                                },
                                true
                              ),
                                ["minDist", "maxDist"].forEach(function (e) {
                                  b(e, void 0);
                                });
                              break;
                            case 1:
                              ["minion"].forEach(function (e) {
                                b(e, void 0);
                              });
                              break;
                            default:
                              ["minion", "minDist", "maxDist"].forEach(
                                function (e) {
                                  b(e, void 0);
                                }
                              );
                              break;
                            case 9:
                              b("colorType", 0),
                                b("team", 1),
                                b("minSize", 3),
                                b("maxSize", 15),
                                b("radiant", 0),
                                b("team", void 0);
                          }
                          break;
                        case 2:
                          switch (
                            ([
                              "alpha",
                              "length",
                              "speed",
                              "penetration",
                              "sides",
                              "backSides",
                              "subtype",
                              "radius",
                              "rotationType",
                              "maxSpread",
                              "suppressColor",
                              "turnSpeed",
                              "showParticles",
                              "ignoreMass",
                              "affectBullets",
                              "baseRot",
                              "idleBehavior",
                              "rotationSpeed",
                              "maxDistance",
                              "minDistance",
                            ].forEach(function (e) {
                              b(e, void 0);
                            }),
                            a.type)
                          ) {
                            case 0:
                              b("rot", void 0),
                                b("baseRot", 0),
                                b("idleBehavior", 0),
                                b("rotationSpeed", 1),
                                b("length", 1),
                                b("minDistance", 15),
                                b("maxDistance", 25),
                                b("speed", 1),
                                b("penetration", 1);
                              break;
                            case 1:
                              b("rot", 0), b("speed", 1), b("penetration", 1);
                              break;
                            case 2:
                              b("rot", 0),
                                b("sides", 0),
                                b("backSides", 0),
                                b("subtype", 0),
                                b("radius", 4),
                                b("alpha", 0.3),
                                b("rotationType", 1),
                                b("width", 0.6),
                                b("damage", 0.1),
                                b("reload", 0.25),
                                b("showParticles", 0),
                                b("affectBullets", 2),
                                b("ignoreMass", 1);
                              break;
                            case 3:
                              b("rot", void 0),
                                b("damage", void 0),
                                b("reload", void 0),
                                b("tank", {
                                  barrels: [
                                    {
                                      type: 0,
                                      rot: 0,
                                      offset: 0,
                                      width: 0.5,
                                      length: 1,
                                      damage: 1,
                                      reload: 1,
                                      delay: 0,
                                      speed: 1,
                                      distance: 0,
                                      penetration: 1,
                                    },
                                  ],
                                  gadgets: [],
                                  layers: [],
                                }),
                                b("rotationType", 0),
                                b("maxSpread", 0),
                                b("suppressColor", 0),
                                b("turnSpeed", 1),
                                b("baseRot", 0),
                                b("sides", 0),
                                b("outerSides", 0),
                                b("outerSize", 0),
                                b("idleBehavior", 0),
                                b("rotationSpeed", 1),
                                b("anchored", 0),
                                b("speed", 1),
                                b("length", 1),
                                b("minDistance", 15),
                                b("maxDistance", 25);
                          }
                      }
                      updateSelectedObjects();
                    });
                  break;
                case 1:
                  ((T = addChild(selectionMenu, "div")).id =
                    "tank-editor-text"),
                    (T.innerHTML = e.name),
                    (w = T),
                    ((M = addChild(selectionMenu, "textarea")).autocomplete =
                      "off"),
                    M.classList.add("tank-editor-input-large");
                  for (var s = 0; s < 15; s++) addChild(selectionMenu, "br");
                  switch (
                    ((M.placeholder = e.placeholder),
                    (M.value = e.isValueShared ? e.sharedValue : "-"),
                    e.subtype)
                  ) {
                    case 0:
                      e.isValueShared &&
                        (M.value = objectToCode({
                          gadgets: clearGadgets(e.sharedValue.gadgets || []),
                          layers: clearLayers(e.sharedValue.layers || []),
                          sides: Object(
                            _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
                          )(e.sharedValue.sides || 0),
                          outerSides: Object(
                            _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
                          )(e.sharedValue.outerSides || 0),
                          outerSize: Object(
                            _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
                          )(e.sharedValue.outerSize || 0),
                          maxBodyDrones: e.sharedValue.maxBodyDrones,
                          barrels: clearBarrels(e.sharedValue.barrels || []),
                          maxWeaponDrones: e.sharedValue.maxWeaponDrones,
                        }));
                      break;
                    case 1:
                      e.isValueShared &&
                        (M.value = objectToCode({
                          gadgets: clearGadgets(e.sharedValue.gadgets || []),
                          layers: clearLayers(e.sharedValue.layers || []),
                          barrels: clearBarrels(e.sharedValue.barrels || []),
                        }));
                  }
                  (M.lastValue = M.value),
                    (M.onchange = function (t) {
                      switch (e.subtype) {
                        case 0:
                          try {
                            if ((n = codeToObject(t.target.value)).error)
                              return (
                                Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
                                  "Tank code invalid!",
                                  n.error
                                ),
                                void (t.target.value = t.target.lastValue)
                              );
                          } catch (e) {
                            return (
                              Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
                                "Tank code invalid!",
                                e
                              ),
                              void (t.target.value = t.target.lastValue)
                            );
                          }
                          (t.target.lastValue = t.target.value),
                            b(e.id, {
                              gadgets: readGadgets(n.gadgets || []),
                              layers: readLayers(n.layers || []),
                              outerSize: n.outerSize || 0,
                              sides: n.sides || 0,
                              outerSides: n.outerSides || 0,
                              maxBodyDrones: validateNumberAttribute(
                                n.maxBodyDrones,
                                3
                              ),
                              barrels: readBarrels(n.barrels || []),
                              maxWeaponDrones: validateNumberAttribute(
                                n.maxWeaponDrones,
                                3
                              ),
                            }),
                            null != n.healthMultiplier &&
                              b("penetration", n.healthMultiplier),
                            null != n.bodyDamageMultiplier &&
                              b("damage", n.bodyDamageMultiplier),
                            null != n.speedMultiplier &&
                              b("speed", n.speedMultiplier);
                          break;
                        case 1:
                          var n;
                          try {
                            if ((n = codeToObject(t.target.value)).error)
                              return (
                                Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
                                  "Tank code invalid!",
                                  n.error
                                ),
                                void (t.target.value = t.target.lastValue)
                              );
                          } catch (e) {
                            return (
                              Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
                                "Tank code invalid!",
                                e
                              ),
                              void (t.target.value = t.target.lastValue)
                            );
                          }
                          (t.target.lastValue = t.target.value),
                            b(e.id, {
                              gadgets: readGadgets(n.gadgets || []),
                              layers: readLayers(n.layers || []),
                              barrels: readBarrels(n.barrels || []),
                            }),
                            null != n.sides && b("sides", n.sides),
                            null != n.outerSides &&
                              b("outerSides", n.outerSides),
                            null != n.outerSize && b("outerSize", n.outerSize);
                      }
                      updateSelectedObjects();
                    });
                  break;
                case 2:
                  switch (
                    (((T = addChild(selectionMenu, "div")).id =
                      "tank-editor-text"),
                    (T.innerHTML = e.name + "&emsp;"),
                    (w = T),
                    ((M = addChild(T, "input")).autocomplete = "off"),
                    M.classList.add("tank-editor-input"),
                    (M.placeholder = e.placeholder),
                    e.subtype)
                  ) {
                    default:
                      e.isValueShared
                        ? e.isNumber
                          ? (M.value = validateNumberAttribute(
                              e.sharedValue,
                              e.placeholder
                            ))
                          : (M.value = validateTextAttribute(
                              e.sharedValue,
                              e.placeholder
                            ))
                        : (M.value = "-");
                      break;
                    case 1:
                      e.isValueShared
                        ? (M.value = Object(
                            _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round
                          )(
                            Object(
                              _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees
                            )(
                              validateNumberAttribute(
                                e.sharedValue,
                                e.placeholder
                              )
                            ),
                            _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING
                          ))
                        : (M.value = "-");
                  }
                  M.onchange = function (t) {
                    if (e.isNumber) {
                      var n = validateNumberAttribute(
                        simplifyNumberInput(t.target.value),
                        e.placeholder
                      );
                      b(e.id, n), (e.sharedValue = n), (e.isValueShared = true);
                    } else {
                      var r = validateTextAttribute(
                        t.target.value,
                        e.placeholder
                      );
                      b(e.id, r), (e.sharedValue = r), (e.isValueShared = true);
                    }
                    switch (e.subtype) {
                      case 1:
                        b(
                          e.id,
                          Object(
                            _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians
                          )(e.sharedValue)
                        );
                        break;
                      case 2:
                        b(e.id, Math.min(Math.max(3, e.sharedValue), 1e3));
                        break;
                      case 3:
                        b(e.id, Math.max(0, Math.min(1, e.sharedValue)));
                        break;
                      case 4:
                        b(
                          e.id,
                          Object(
                            _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
                          )(e.sharedValue)
                        );
                        break;
                      case 5:
                        b(
                          e.id,
                          Math.min(
                            Math.max(0, e.sharedValue),
                            _shared_editorconstants__WEBPACK_IMPORTED_MODULE_2__.MAX_RADIANT
                          )
                        );
                    }
                    updateSelectedObjects();
                  };
              }
              -1 != e.type && setTooltip(w, e.description);
            },
            E = 0,
            O = c;
          E < O.length;
          E++
        ) {
          var w, T, M;
          y();
        }
        var S = addChild(selectionMenu, "div"),
          A = addChild(selectionMenu, "div");
        (S.style.textAlign = "right"), (A.style.textAlign = "right");
        var k = addChild(S, "button");
        (k.innerHTML = "Move Forward"), k.classList.add("tank-editor-button");
        var x = addChild(S, "button");
        (x.innerHTML = "Move Backward"), x.classList.add("tank-editor-button");
        var R = addChild(A, "button");
        (R.innerHTML = "Delete ".concat(l)),
          R.classList.add("tank-editor-button");
        var I = addChild(A, "button");
        (I.innerHTML = "Duplicate ".concat(l)),
          I.classList.add("tank-editor-button"),
          (k.onclick = function () {
            moveForwardSelectedObjects();
          }),
          (x.onclick = function () {
            moveBackwardSelectedObjects();
          }),
          (R.onclick = function () {
            deleteSelectedObjects();
          }),
          (I.onclick = function () {
            duplicateSelectedObjects();
          });
      }
    }
    function getObjectArray(e) {
      return 0 == e.stack.length
        ? {
            barrel: currentWeapon.barrels,
            gadget: currentBody.gadgets,
            layer: currentBody.layers,
          }[e.type]
        : (function e(t, n, r) {
            if (1 == n.length) {
              var a = t[n[0]];
              return a && 3 == a.type && a.tank
                ? {
                    barrel: a.tank.barrels,
                    gadget: a.tank.gadgets,
                    layer: a.tank.layers,
                  }[r.type]
                : void 0;
            }
            var o = t[n.shift()];
            return o && 3 == o.type && o.tank
              ? e(o.tank.gadgets, n, r)
              : void 0;
          })(currentBody.gadgets, _toConsumableArray(e.stack), e);
    }
    function moveForwardSelectedObjects() {
      var e,
        t = selectedObjects
          .sort(function (e, t) {
            return t.index - e.index;
          })
          .sort(function (e, t) {
            return t.stack.length - e.stack.length;
          }),
        n = _createForOfIteratorHelper(t);
      try {
        for (n.s(); !(e = n.n()).done; ) {
          var r = e.value,
            a = getObjectArray(r);
          if (r.index < a.length - 1) {
            var o = a[r.index + 1];
            (a[r.index + 1] = a[r.index]), (a[r.index] = o);
            var i,
              s = _createForOfIteratorHelper(t);
            try {
              for (s.s(); !(i = s.n()).done; ) {
                var l = i.value;
                r.type == l.type &&
                  l.index == r.index + 1 &&
                  Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(
                    l.stack,
                    r.stack
                  ) &&
                  l.index--;
              }
            } catch (e) {
              s.e(e);
            } finally {
              s.f();
            }
            r.index++;
          }
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
      updateSelectedObjects(), updateSelectedObject();
    }
    function moveBackwardSelectedObjects() {
      var e,
        t = selectedObjects
          .sort(function (e, t) {
            return e.index - t.index;
          })
          .sort(function (e, t) {
            return t.stack.length - e.stack.length;
          }),
        n = _createForOfIteratorHelper(t);
      try {
        for (n.s(); !(e = n.n()).done; ) {
          var r = e.value,
            a = getObjectArray(r);
          if (r.index > 0) {
            var o = a[r.index - 1];
            (a[r.index - 1] = a[r.index]), (a[r.index] = o);
            var i,
              s = _createForOfIteratorHelper(t);
            try {
              for (s.s(); !(i = s.n()).done; ) {
                var l = i.value;
                r.type == l.type &&
                  l.index == r.index - 1 &&
                  Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(
                    l.stack,
                    r.stack
                  ) &&
                  l.index++;
              }
            } catch (e) {
              s.e(e);
            } finally {
              s.f();
            }
            r.index--;
          }
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
      updateSelectedObjects(), updateSelectedObject();
    }
    function deleteSelectedObjects() {
      var e,
        t = _createForOfIteratorHelper(
          selectedObjects
            .sort(function (e, t) {
              return t.index - e.index;
            })
            .sort(function (e, t) {
              return t.stack.length - e.stack.length;
            })
        );
      try {
        for (t.s(); !(e = t.n()).done; ) {
          var n = e.value;
          getObjectArray(n).splice(n.index, 1);
        }
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
      updateSelectedObjects(false), deselectAllObjects();
    }
    function duplicateSelectedObjects() {
      for (
        var e = selectedObjects
            .sort(function (e, t) {
              return e.index - t.index;
            })
            .sort(function (e, t) {
              return t.stack.length - e.stack.length;
            }),
          t = 0;
        t < e.length;
        t++
      ) {
        var n = e[t],
          r = getObjectArray(n);
        r.splice(
          n.index,
          0,
          Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(r[n.index])
        );
        for (var a = t + 1; a < e.length; a++)
          e[a].type == n.type &&
            e[a].index > n.index &&
            Object(lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual)(
              e[a].stack,
              n.stack
            ) &&
            e[a].index++;
      }
      updateSelectedObjects(), updateSelectedObject();
    }
    function validateTextAttribute(e, t) {
      return null == e || "" === e ? t : e;
    }
    var allowedCommands = [
        "(",
        ")",
        /^[\d\.]+$/,
        "*",
        "/",
        "+",
        "-",
        "sin",
        "cos",
        "degToRad",
        "radToDeg",
      ],
      replacements = [
        ["radtodeg", "radToDeg"],
        ["rad2deg", "radToDeg"],
        ["radianstodegrees", "radToDeg"],
        ["degtorad", "degToRad"],
        ["deg2rad", "degToRad"],
        ["degreestoradians", "degToRad"],
      ];
    function checkCommand(e) {
      return allowedCommands.some(function (t) {
        return t instanceof RegExp ? t.test(e) : t == e;
      });
    }
    function checkAllowedCommands(e) {
      try {
        e = e.replace(/([()/*+-])/g, " $1 ").toLowerCase();
        for (var t = 0; t < replacements.length; t++)
          e = e.replaceAll(replacements[t][0], replacements[t][1]);
        return (
          0 ==
          e
            .split(" ")
            .filter(function (e) {
              return e;
            })
            .filter(function (e) {
              return !checkCommand(e);
            }).length
        );
      } catch (e) {
        return false;
      }
    }
    function simplifyNumberInput(input) {
      try {
        input = input.toLowerCase();
        for (var i = 0; i < replacements.length; i++)
          input = input.replaceAll(replacements[i][0], replacements[i][1]);
        return eval(input);
      } catch (e) {
        return null;
      }
    }
    function sin(e) {
      return Math.sin(e);
    }
    function cos(e) {
      return Math.cos(e);
    }
    function radToDeg(e) {
      return Object(
        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees
      )(e);
    }
    function degToRad(e) {
      return Object(
        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians
      )(e);
    }
    function validateNumberAttribute(e, t) {
      return Number.isNaN(+e) ? t : +e;
    }
    function validateAttribute(e, t) {
      return null == e ? t : e;
    }
    function updateSelectedObjects() {
      var e,
        t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        n = false,
        r = false,
        a = _createForOfIteratorHelper(selectedObjects);
      try {
        for (a.s(); !(e = a.n()).done; ) {
          var o = e.value;
          if (
            ("barrel" == o.type && 0 == o.stack.length ? (n = true) : (r = true),
            n && r)
          )
            break;
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
      n &&
        (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(),
        weaponUpdate(false, t)),
        r &&
          (Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate(false, t)),
        (n || r) && createSaveState();
    }
    var barrelButtons = [],
      gadgetButtons = [],
      layerButtons = [];
    function getBarrelName(e) {
      var t;
      return (
        (null ===
          (t = barrelTypes.find(function (t) {
            return t.value == e.type;
          })) || void 0 === t
          ? void 0
          : t.name) || "Invalid barrel (wrong type?)"
      );
    }
    function getGadgetName(e) {
      if (2 == e.type) {
        var t = auraTypes.find(function (t) {
          return t.value == e.subtype;
        });
        return (
          ((null == t ? void 0 : t.name) || "Invalid (wrong subtype?)") +
          " Aura"
        );
      }
      var n;
      return (
        (null ===
          (n = gadgetTypes.find(function (t) {
            return t.value == e.type;
          })) || void 0 === n
          ? void 0
          : n.name) || "Invalid gadget (wrong type?)"
      );
    }
    function getLayerName(e) {
      return ""
        .concat(Math.abs(e.sides), " ")
        .concat(e.sides < 0 ? "point star" : "sided", " layer");
    }
    var defaultBarrel = {
        type: 0,
        rot: 0,
        offset: 0,
        width: 0.5,
        length: 1,
        damage: 1,
        reload: 1,
        delay: 0,
        speed: 1,
        distance: 0,
        penetration: 1,
      },
      defaultGadget = {
        type: 0,
        offsetX: 0,
        offsetY: 0,
        length: 0.5,
        width: 0.25,
        reload: 1,
        damage: 0.5,
        speed: 1,
        baseRot: 0,
        idleBehavior: 0,
        rotationSpeed: 1,
        penetration: 1,
        minDistance: 15,
        maxDistance: 25,
      },
      defaultLayer = {
        rot: 0,
        size: 0.5,
        sides: 0,
        outerSides: 0,
        outerSize: 0,
        offsetX: 0,
        offsetY: 0,
      };
    function weaponUpdate() {
      var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      e && createSaveState(),
        (barrelsText.innerHTML = "Barrels (".concat(
          currentWeapon.barrels.length,
          ")"
        )),
        removeAllChildNodes(barrelsContent),
        (barrelButtons = []);
      for (
        var n = function (e) {
            var t = currentWeapon.barrels[e],
              n = addChild(
                barrelsContent,
                "button",
                "tank-editor-collapsible-element"
              );
            (n.innerText = getBarrelName(t)),
              (n.onclick = function (t) {
                var n = _toConsumableArray(selectedObjects)
                  .reverse()
                  .find(function (e) {
                    return "barrel" == e.type && 0 == e.stack.length;
                  });
                if (n && n.index != e && t.shiftKey) {
                  var r,
                    a = _createForOfIteratorHelper(
                      Object(
                        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.getNumbersBetween
                      )(n.index, e)
                    );
                  try {
                    var o = function () {
                      var e = r.value;
                      selectedObjects.some(function (t) {
                        return "barrel" == t.type && t.index == e;
                      }) ||
                        selectedObjects.push({
                          type: "barrel",
                          index: e,
                          stack: [],
                        });
                    };
                    for (a.s(); !(r = a.n()).done; ) o();
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                  updateSelectedObject();
                } else
                  updateSelectedObject(
                    "barrel",
                    e,
                    t.ctrlKey || t.metaKey || t.shiftKey
                  );
              }),
              barrelButtons.push({ button: n });
          },
          r = 0;
        r < currentWeapon.barrels.length;
        r++
      )
        n(r);
      var a = addChild(
        barrelsContent,
        "button",
        "tank-editor-collapsible-element"
      );
      (a.innerHTML = "+"),
        (a.onclick = function () {
          currentWeapon.barrels.push(
            Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(defaultBarrel)
          ),
            Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(),
            weaponUpdate();
        }),
        (weaponCameraSizeMultiplierInput.value =
          currentWeapon.cameraSizeMultiplier),
        (weaponMaxDronesInput.value = currentWeapon.maxDrones),
        (weaponNameInput.value = currentWeapon.name),
        t && updateSelectedObject();
    }
    var collapsedSections = {};
    function bodyUpdate() {
      var e,
        t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      t && createSaveState(),
        (gadgetsText.innerHTML = "Gadgets (".concat(
          currentBody.gadgets.length,
          ")"
        )),
        removeAllChildNodes(gadgetsContent),
        (gadgetButtons = []);
      for (
        var r = function e(t, n, r, a) {
            var o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 1;
            if (3 == n.type && n.tank) {
              var i,
                s = {},
                l = "b" + a.join(""),
                u = addChild(t, "button", ["small", "tank-editor-collapsible"]);
              (u.innerText = "Barrels (".concat(n.tank.barrels.length, ")")),
                (u.style.marginLeft = "".concat(3 * o - 1, "vmin")),
                collapsedSections[l] || u.classList.add("active");
              var c = addChild(t, "div", "tank-editor-collapsible-content");
              (c.style.display = collapsedSections[l] ? "none" : "flex"),
                (u.onclick = function () {
                  u.classList.toggle("active"),
                    (collapsedSections[l] = !collapsedSections[l]),
                    "flex" === c.style.display
                      ? (c.style.display = "none")
                      : (c.style.display = "flex");
                }),
                (s.barrels = []);
              for (
                var d = function (e) {
                    var t = n.tank.barrels[e],
                      r = addChild(c, "button", [
                        "small",
                        "tank-editor-collapsible-element",
                      ]);
                    (r.style.marginLeft = "".concat(3 * o, "vmin")),
                      (r.innerText = getBarrelName(t)),
                      s.barrels.push({ button: r }),
                      (r.onclick = function (t) {
                        var n = _toConsumableArray(selectedObjects)
                          .reverse()
                          .find(function (e) {
                            return (
                              "barrel" == e.type &&
                              Object(
                                lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual
                              )(e.stack, a)
                            );
                          });
                        if (n && n.index != e && t.shiftKey) {
                          var r,
                            o = _createForOfIteratorHelper(
                              Object(
                                _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.getNumbersBetween
                              )(n.index, e)
                            );
                          try {
                            var i = function () {
                              var e = r.value;
                              selectedObjects.some(function (t) {
                                return "barrel" == t.type && t.index == e;
                              }) ||
                                selectedObjects.push({
                                  type: "barrel",
                                  index: e,
                                  stack: a,
                                });
                            };
                            for (o.s(); !(r = o.n()).done; ) i();
                          } catch (e) {
                            o.e(e);
                          } finally {
                            o.f();
                          }
                          updateSelectedObject();
                        } else
                          updateSelectedObject(
                            "barrel",
                            e,
                            t.ctrlKey || t.metaKey || t.shiftKey,
                            a
                          );
                      });
                  },
                  f = 0;
                f < n.tank.barrels.length;
                f++
              )
                d(f);
              ((i = addChild(c, "button", [
                "small",
                "tank-editor-collapsible-element",
              ])).innerHTML = "+"),
                (i.style.marginLeft = "".concat(3 * o, "vmin")),
                (i.onclick = function () {
                  getSelectedObject(r).tank.barrels.push(
                    Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(
                      defaultBarrel
                    )
                  ),
                    Object(
                      _networking__WEBPACK_IMPORTED_MODULE_6__.updateBody
                    )(),
                    bodyUpdate();
                });
              var h = "g" + a.join(""),
                p = addChild(t, "button", ["small", "tank-editor-collapsible"]);
              (p.innerText = "Gadgets (".concat(n.tank.gadgets.length, ")")),
                (p.style.marginLeft = "".concat(3 * o - 1, "vmin")),
                collapsedSections[h] || p.classList.add("active");
              var _ = addChild(t, "div", "tank-editor-collapsible-content");
              (_.style.display = collapsedSections[h] ? "none" : "flex"),
                (p.onclick = function () {
                  p.classList.toggle("active"),
                    (collapsedSections[h] = !collapsedSections[h]),
                    "flex" === _.style.display
                      ? (_.style.display = "none")
                      : (_.style.display = "flex");
                }),
                (s.gadgets = []);
              for (
                var g = function (t) {
                    var r = n.tank.gadgets[t],
                      i = addChild(_, "button", [
                        "small",
                        "tank-editor-collapsible-element",
                      ]);
                    (i.style.marginLeft = "".concat(3 * o, "vmin")),
                      (i.innerText = getGadgetName(r)),
                      s.gadgets.push({
                        button: i,
                        tank: e(
                          _,
                          r,
                          { index: t, type: "gadget", stack: a },
                          a.concat([t]),
                          o + 1
                        ),
                      }),
                      (i.onclick = function (e) {
                        var n = _toConsumableArray(selectedObjects)
                          .reverse()
                          .find(function (e) {
                            return (
                              "gadget" == e.type &&
                              Object(
                                lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual
                              )(e.stack, a)
                            );
                          });
                        if (n && n.index != t && e.shiftKey) {
                          var r,
                            o = _createForOfIteratorHelper(
                              Object(
                                _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.getNumbersBetween
                              )(n.index, t)
                            );
                          try {
                            var i = function () {
                              var e = r.value;
                              selectedObjects.some(function (t) {
                                return "gadget" == t.type && t.index == e;
                              }) ||
                                selectedObjects.push({
                                  type: "gadget",
                                  index: e,
                                  stack: a,
                                });
                            };
                            for (o.s(); !(r = o.n()).done; ) i();
                          } catch (e) {
                            o.e(e);
                          } finally {
                            o.f();
                          }
                          updateSelectedObject();
                        } else
                          updateSelectedObject(
                            "gadget",
                            t,
                            e.ctrlKey || e.metaKey || e.shiftKey,
                            a
                          );
                      });
                  },
                  v = 0;
                v < n.tank.gadgets.length;
                v++
              )
                g(v);
              ((i = addChild(_, "button", [
                "small",
                "tank-editor-collapsible-element",
              ])).innerHTML = "+"),
                (i.style.marginLeft = "".concat(3 * o, "vmin")),
                (i.onclick = function () {
                  getSelectedObject(r).tank.gadgets.push(
                    Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(
                      defaultGadget
                    )
                  ),
                    Object(
                      _networking__WEBPACK_IMPORTED_MODULE_6__.updateBody
                    )(),
                    bodyUpdate();
                });
              var m = "l" + a.join(""),
                b = addChild(t, "button", ["small", "tank-editor-collapsible"]);
              (b.innerText = "Layers (".concat(n.tank.layers.length, ")")),
                (b.style.marginLeft = "".concat(3 * o - 1, "vmin")),
                collapsedSections[m] || b.classList.add("active");
              var y = addChild(t, "div", "tank-editor-collapsible-content");
              (y.style.display = collapsedSections[m] ? "none" : "flex"),
                (b.onclick = function () {
                  b.classList.toggle("active"),
                    (collapsedSections[m] = !collapsedSections[m]),
                    "flex" === y.style.display
                      ? (y.style.display = "none")
                      : (y.style.display = "flex");
                }),
                (s.layers = []);
              for (
                var E = function (e) {
                    var t = n.tank.layers[e],
                      r = addChild(y, "button", [
                        "small",
                        "tank-editor-collapsible-element",
                      ]);
                    (r.style.marginLeft = "".concat(3 * o, "vmin")),
                      (r.innerText = getLayerName(t)),
                      s.layers.push({ button: r }),
                      (r.onclick = function (t) {
                        var n = _toConsumableArray(selectedObjects)
                          .reverse()
                          .find(function (e) {
                            return (
                              "layer" == e.type &&
                              Object(
                                lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual
                              )(e.stack, a)
                            );
                          });
                        if (n && n.index != e && t.shiftKey) {
                          var r,
                            o = _createForOfIteratorHelper(
                              Object(
                                _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.getNumbersBetween
                              )(n.index, e)
                            );
                          try {
                            var i = function () {
                              var e = r.value;
                              selectedObjects.some(function (t) {
                                return "layer" == t.type && t.index == e;
                              }) ||
                                selectedObjects.push({
                                  type: "layer",
                                  index: e,
                                  stack: a,
                                });
                            };
                            for (o.s(); !(r = o.n()).done; ) i();
                          } catch (e) {
                            o.e(e);
                          } finally {
                            o.f();
                          }
                          updateSelectedObject();
                        } else
                          updateSelectedObject(
                            "layer",
                            e,
                            t.ctrlKey || t.metaKey || t.shiftKey,
                            a
                          );
                      });
                  },
                  O = 0;
                O < n.tank.layers.length;
                O++
              )
                E(O);
              return (
                ((i = addChild(y, "button", [
                  "small",
                  "tank-editor-collapsible-element",
                ])).innerHTML = "+"),
                (i.style.marginLeft = "".concat(3 * o, "vmin")),
                (i.onclick = function () {
                  getSelectedObject(r).tank.layers.push(
                    Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(
                      defaultLayer
                    )
                  ),
                    Object(
                      _networking__WEBPACK_IMPORTED_MODULE_6__.updateBody
                    )(),
                    bodyUpdate();
                }),
                s
              );
            }
          },
          a = function (e) {
            var t = currentBody.gadgets[e],
              n = addChild(
                gadgetsContent,
                "button",
                "tank-editor-collapsible-element"
              );
            (n.innerText = getGadgetName(t)),
              (n.onclick = function (t) {
                var n = _toConsumableArray(selectedObjects)
                  .reverse()
                  .find(function (e) {
                    return "gadget" == e.type && 0 == e.stack.length;
                  });
                if (n && n.index != e && t.shiftKey) {
                  var r,
                    a = _createForOfIteratorHelper(
                      Object(
                        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.getNumbersBetween
                      )(n.index, e)
                    );
                  try {
                    var o = function () {
                      var e = r.value;
                      selectedObjects.some(function (t) {
                        return "gadget" == t.type && t.index == e;
                      }) ||
                        selectedObjects.push({
                          type: "gadget",
                          index: e,
                          stack: [],
                        });
                    };
                    for (a.s(); !(r = a.n()).done; ) o();
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                  updateSelectedObject();
                } else
                  updateSelectedObject(
                    "gadget",
                    e,
                    t.ctrlKey || t.metaKey || t.shiftKey
                  );
              }),
              gadgetButtons.push({
                button: n,
                tank: r(
                  gadgetsContent,
                  t,
                  { index: e, type: "gadget", stack: [] },
                  [e]
                ),
              });
          },
          o = 0;
        o < currentBody.gadgets.length;
        o++
      )
        a(o);
      (e = addChild(gadgetsContent, "button")).classList.add(
        "tank-editor-collapsible-element"
      ),
        (e.innerHTML = "+"),
        (e.onclick = function () {
          currentBody.gadgets.push(
            Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(defaultGadget)
          ),
            Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
            bodyUpdate();
        }),
        (layersText.innerHTML = "Layers (".concat(
          currentBody.layers.length,
          ")"
        )),
        removeAllChildNodes(layersContent),
        (layerButtons = []);
      for (
        var i = function (e) {
            var t = currentBody.layers[e],
              n = addChild(
                layersContent,
                "button",
                "tank-editor-collapsible-element"
              );
            (n.innerText = getLayerName(t)),
              (n.onclick = function (t) {
                var n = _toConsumableArray(selectedObjects)
                  .reverse()
                  .find(function (e) {
                    return "layer" == e.type && 0 == e.stack.length;
                  });
                if (n && n.index != e && t.shiftKey) {
                  var r,
                    a = _createForOfIteratorHelper(
                      Object(
                        _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.getNumbersBetween
                      )(n.index, e)
                    );
                  try {
                    var o = function () {
                      var e = r.value;
                      selectedObjects.some(function (t) {
                        return "layer" == t.type && t.index == e;
                      }) ||
                        selectedObjects.push({
                          type: "layer",
                          index: e,
                          stack: [],
                        });
                    };
                    for (a.s(); !(r = a.n()).done; ) o();
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                  updateSelectedObject();
                } else
                  updateSelectedObject(
                    "layer",
                    e,
                    t.ctrlKey || t.metaKey || t.shiftKey
                  );
              }),
              layerButtons.push({ button: n });
          },
          s = 0;
        s < currentBody.layers.length;
        s++
      )
        i(s);
      (e = addChild(layersContent, "button")).classList.add(
        "tank-editor-collapsible-element"
      ),
        (e.innerHTML = "+"),
        (e.onclick = function () {
          currentBody.layers.push(
            Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(defaultLayer)
          ),
            Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
            bodyUpdate();
        }),
        (bodyCameraSizeMultiplierInput.value =
          currentBody.cameraSizeMultiplier),
        (bodyMaxDronesInput.value = currentBody.maxDrones),
        (sidesInput.value = currentBody.sides),
        (outerSidesInput.value = currentBody.outerSides),
        (outerSizeInput.value = currentBody.outerSize),
        (healthInput.value = currentBody.healthMultiplier),
        (bodyDamageInput.value = currentBody.bodyDamageMultiplier),
        (speedInput.value = currentBody.speedMultiplier),
        (bodyNameInput.value = currentBody.name),
        (levelInput.value = currentBody.level),
        (tankTypeSelect.value = currentBody.type),
        updateTeamSelect(currentBody.team),
        updateVisualTeamSelect(
          validateAttribute(currentBody.visualTeam, void 0)
        ),
        (radiantInput.value = currentBody.radiant),
        (tankNameInput.value = currentBody.overrideTankName),
        n && updateSelectedObject();
    }
    var saveStates = [];
    function createSaveState() {
      var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        t = Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)([
          currentWeapon,
          currentBody,
          selectedObjects,
        ]);
      saveStates.push(t),
        e && (undidSaveStates = []),
        saveStates.length >
          _settings__WEBPACK_IMPORTED_MODULE_8__.g.maxSaveStates &&
          saveStates.shift();
    }
    var undidSaveStates = [];
    function undo() {
      if (saveStates.length > 1) {
        undidSaveStates.push(saveStates.pop());
        var e = Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(
          saveStates[saveStates.length - 1]
        );
        (currentWeapon = e[0]),
          (currentBody = e[1]),
          (selectedObjects = e[2]),
          tankUpdate(false),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)();
      } else console.log("Can't undo");
    }
    function redo() {
      if (undidSaveStates.length > 0) {
        var e = Object(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(
          undidSaveStates.pop()
        );
        (currentWeapon = e[0]),
          (currentBody = e[1]),
          (selectedObjects = e[2]),
          tankUpdate(false),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(),
          createSaveState(false);
      } else console.log("Can't redo");
    }
    function selectAll() {
      deselectAllObjects();
      for (var e = 0; e < currentWeapon.barrels.length; e++)
        selectedObjects.push({ type: "barrel", index: e, stack: [] });
      for (var t = 0; t < currentBody.gadgets.length; t++)
        selectedObjects.push({ type: "gadget", index: t, stack: [] });
      for (var n = 0; n < currentBody.layers.length; n++)
        selectedObjects.push({ type: "layer", index: n, stack: [] });
      updateSelectedObject();
    }
    var importExportButton = document.getElementById("import-export-button"),
      importOrExport = document.getElementById("import-or-export"),
      importExportType = document.getElementById("import-export-type"),
      codeArea = document.getElementById("code-area"),
      loadWeaponUpgradeArea = document.getElementById(
        "load-weapon-upgrade-area"
      ),
      loadBodyUpgradeArea = document.getElementById("load-body-upgrade-area"),
      loadWeaponUpgradeButton = document.getElementById("load-weapon-upgrade"),
      loadBodyUpgradeButton = document.getElementById("load-body-upgrade");
    function importTank(e) {
      var t;
      try {
        if ((t = codeToObject(e)).error)
          return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
            "Tank code invalid!",
            t.error
          );
      } catch (e) {
        return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
          "Tank code invalid!",
          e
        );
      }
      if (t.type && "full" != t.type)
        Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
          "Tank code invalid!",
          "Code is not a full tank code, it's a \n\t\t"
            .concat(
              { weapon: "weapon", body: "body", full: "full tank" }[t.type],
              ' code. Import as a "'
            )
            .concat(
              {
                weapon: "Weapon Upgrade",
                body: "Body Upgrade",
                full: "Full Tank",
              }[t.type],
              ' instead of a "Full Tank".'
            )
        );
      else {
        var n = t.version || 0;
        for (
          currentBody.gadgets = readGadgets(t.gadgets || []),
            currentBody.layers = readLayers(t.layers || []),
            currentBody.outerSize = t.outerSize || 0,
            currentBody.sides = Object(
              _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
            )(t.sides || 0),
            currentBody.outerSides = Object(
              _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
            )(t.outerSides || 0),
            currentBody.healthMultiplier = validateNumberAttribute(
              t.healthMultiplier,
              1
            ),
            currentBody.bodyDamageMultiplier = validateNumberAttribute(
              t.bodyDamageMultiplier,
              1
            ),
            currentBody.speedMultiplier = validateNumberAttribute(
              t.speedMultiplier,
              1
            ),
            currentBody.cameraSizeMultiplier = validateNumberAttribute(
              t.bodyCameraSizeMultiplier,
              1
            ),
            currentBody.maxDrones = validateNumberAttribute(t.maxBodyDrones, 3),
            currentBody.name = t.bodyUpgradeName || "",
            currentWeapon.barrels = readBarrels(t.barrels || []),
            currentWeapon.cameraSizeMultiplier = validateNumberAttribute(
              t.weaponCameraSizeMultiplier,
              1
            ),
            currentWeapon.maxDrones = validateNumberAttribute(
              t.maxWeaponDrones,
              3
            ),
            currentWeapon.name = t.weaponUpgradeName || "",
            currentBody.level = validateNumberAttribute(t.level, 1),
            currentBody.type = validateNumberAttribute(t.tankType, 0),
            currentBody.radiant = validateNumberAttribute(t.radiant, 0),
            currentBody.team = validateAttribute(t.team, 0),
            currentBody.visualTeam = validateAttribute(t.visualTeam, void 0),
            currentBody.overrideTankName = t.overrideTankName || "",
            i = n;
          i <
          _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION;
          i++
        )
          switch (i) {
            case 0:
              for (var r = 0; r < currentWeapon.barrels.length; r++) {
                var a = currentWeapon.barrels[r];
                a.length =
                  a.length *
                  (3 == a.type || 4 == a.type || 5 == a.type ? 1.5 : 1);
              }
              break;
            case 1:
              var o = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  n.minion && (s(n.minion.gadgets), o(n.minion.barrels));
                }
              };
              (s = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  2 == n.type &&
                    ((n.alpha = 0.3),
                    (n.rot = 0),
                    (n.rotationType = 2 == n.subtype ? 0 : 1),
                    (n.backSides = 2 == n.subtype ? n.sides : 0));
                }
              })(currentBody.gadgets),
                o(currentWeapon.barrels);
              break;
            case 2:
              o = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  n.minion && (s(n.minion.gadgets), o(n.minion.barrels));
                }
              };
              (s = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  2 == n.type && (n.showParticles = 0);
                }
              })(currentBody.gadgets),
                o(currentWeapon.barrels);
              break;
            case 3:
              var s;
              o = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  n.minion && (s(n.minion.gadgets), o(n.minion.barrels));
                }
              };
              (s = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  2 == n.type &&
                    ((n.affectBullets = 2),
                    [3, 4].includes(n.subtype) && (n.ignoreMass = 0));
                }
              })(currentBody.gadgets),
                o(currentWeapon.barrels);
              break;
            case 4:
              o = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  n.minion && (l(n.minion.gadgets), o(n.minion.barrels));
                }
              };
              (l = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  0 == n.type &&
                    ((n.baseRot = 0),
                    (n.idleBehavior = 0),
                    (n.idleRotationSpeed = 1));
                }
              })(currentBody.gadgets),
                o(currentWeapon.barrels);
              break;
            case 5:
              var l;
              o = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  n.minion && (l(n.minion.gadgets), o(n.minion.barrels));
                }
              };
              (l = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  0 == n.type &&
                    ((n.rotationSpeed = n.idleRotationSpeed),
                    delete n.idleRotationSpeed);
                }
              })(currentBody.gadgets),
                o(currentWeapon.barrels);
          }
        Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate(),
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(),
          weaponUpdate();
      }
    }
    function importBody(e) {
      var t;
      try {
        if ((t = codeToObject(e)).error)
          return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
            "Body code invalid!",
            t.error
          );
      } catch (e) {
        return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
          "Body code invalid!",
          e
        );
      }
      if (t.type && "body" != t.type)
        Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
          "Body code invalid!",
          "Code is not a body code, it's a \n\t\t"
            .concat(
              { weapon: "weapon", body: "body", full: "full tank" }[t.type],
              ' code. Import as a "'
            )
            .concat(
              {
                weapon: "Weapon Upgrade",
                body: "Body Upgrade",
                full: "Full Tank",
              }[t.type],
              ' instead of a "Body Upgrade".'
            )
        );
      else {
        var n = t.version || 0;
        for (
          currentBody.gadgets = readGadgets(t.gadgets || []),
            currentBody.layers = readLayers(t.layers || []),
            currentBody.outerSize = t.outerSize || 0,
            currentBody.sides = Object(
              _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
            )(t.sides || 0),
            currentBody.outerSides = Object(
              _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
            )(t.outerSides || 0),
            currentBody.healthMultiplier = validateNumberAttribute(
              t.healthMultiplier,
              1
            ),
            currentBody.bodyDamageMultiplier = validateNumberAttribute(
              t.bodyDamageMultiplier,
              1
            ),
            currentBody.speedMultiplier = validateNumberAttribute(
              t.speedMultiplier,
              1
            ),
            currentBody.cameraSizeMultiplier = validateNumberAttribute(
              t.cameraSizeMultiplier,
              1
            ),
            currentBody.maxDrones = validateNumberAttribute(t.maxDrones, 3),
            currentBody.name = t.name || "",
            i = n;
          i <
          _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION;
          i++
        )
          switch (i) {
            case 1:
              (function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  2 == n.type &&
                    ((n.alpha = 0.3),
                    (n.rot = 0),
                    (n.rotationType = 2 == n.subtype ? 0 : 1),
                    (n.backSides = 2 == n.subtype ? n.sides : 0));
                }
              })(currentBody.gadgets);
              break;
            case 2:
              (function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  2 == n.type && (n.showParticles = 0);
                }
              })(currentBody.gadgets);
              break;
            case 3:
              (function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  2 == n.type &&
                    ((n.affectBullets = 2),
                    [3, 4].includes(n.subtype) && (n.ignoreMass = 0));
                }
              })(currentBody.gadgets);
              break;
            case 4:
              (function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  0 == n.type &&
                    ((n.baseRot = 0),
                    (n.idleBehavior = 0),
                    (n.idleRotationSpeed = 1));
                }
              })(currentBody.gadgets);
              break;
            case 5:
              (function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  0 == n.type &&
                    ((n.rotationSpeed = n.idleRotationSpeed),
                    delete n.idleRotationSpeed);
                }
              })(currentBody.gadgets);
          }
        Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateBody)(),
          bodyUpdate();
      }
    }
    function importWeapon(e) {
      var t;
      try {
        if ((t = codeToObject(e)).error)
          return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
            "Weapon code invalid!",
            t.error
          );
      } catch (e) {
        return void Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
          "Weapon code invalid!",
          e
        );
      }
      if (t.type && "weapon" != t.type)
        Object(_client__WEBPACK_IMPORTED_MODULE_4__.j)(
          "Weapon code invalid!",
          "Code is not a weapon code, it's a \n\t\t"
            .concat(
              { weapon: "weapon", body: "body", full: "full tank" }[t.type],
              ' code. Import as a "'
            )
            .concat(
              {
                weapon: "Weapon Upgrade",
                body: "Body Upgrade",
                full: "Full Tank",
              }[t.type],
              ' instead of a "Weapon Upgrade".'
            )
        );
      else {
        var n = t.version || 0;
        for (
          currentWeapon.barrels = readBarrels(t.barrels || []),
            currentWeapon.cameraSizeMultiplier = validateNumberAttribute(
              t.cameraSizeMultiplier,
              1
            ),
            currentWeapon.maxDrones = validateNumberAttribute(t.maxDrones, 3),
            currentWeapon.name = t.name || "",
            i = n;
          i <
          _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION;
          i++
        )
          switch (i) {
            case 0:
              for (var r = 0; r < currentWeapon.barrels.length; r++) {
                var a = currentWeapon.barrels[r];
                a.length =
                  a.length *
                  (3 == a.type || 4 == a.type || 5 == a.type ? 1.5 : 1);
              }
              break;
            case 1:
              var o = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  2 == n.type &&
                    ((n.alpha = 0.3),
                    (n.rot = 0),
                    (n.rotationType = 2 == n.subtype ? 0 : 1),
                    (n.backSides = 2 == n.subtype ? n.sides : 0));
                }
              };
              (l = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  n.minion && (o(n.minion.gadgets), l(n.minion.barrels));
                }
              })(currentWeapon.barrels);
              break;
            case 2:
              o = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  2 == n.type && (n.showParticles = 0);
                }
              };
              (l = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  n.minion && (o(n.minion.gadgets), l(n.minion.barrels));
                }
              })(currentWeapon.barrels);
              break;
            case 3:
              o = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  2 == n.type &&
                    ((n.affectBullets = 2),
                    [3, 4].includes(n.subtype) && (n.ignoreMass = 0));
                }
              };
              (l = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  n.minion && (o(n.minion.gadgets), l(n.minion.barrels));
                }
              })(currentWeapon.barrels);
              break;
            case 4:
              var s = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  0 == n.type &&
                    ((n.baseRot = 0),
                    (n.idleBehavior = 0),
                    (n.idleRotationSpeed = 1));
                }
              };
              (l = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  n.minion && (s(n.minion.gadgets), l(n.minion.barrels));
                }
              })(currentWeapon.barrels);
              break;
            case 5:
              var l;
              s = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  0 == n.type &&
                    ((n.rotationSpeed = n.idleRotationSpeed),
                    delete n.idleRotationSpeed);
                }
              };
              (l = function (e) {
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  n.minion && (s(n.minion.gadgets), l(n.minion.barrels));
                }
              })(currentWeapon.barrels);
          }
        Object(_networking__WEBPACK_IMPORTED_MODULE_6__.updateWeapon)(),
          weaponUpdate();
      }
    }
    function exportTank() {
      codeArea.value = objectToCode({
        type: "full",
        version:
          _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION,
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
        overrideTankName: currentBody.overrideTankName || "",
      });
    }
    function exportBody() {
      codeArea.value = objectToCode({
        type: "body",
        version:
          _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION,
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
        name: currentBody.name,
      });
    }
    function exportWeapon() {
      codeArea.value = objectToCode({
        type: "weapon",
        version:
          _shared_constants__WEBPACK_IMPORTED_MODULE_1__.TANK_EDITOR_VERSION,
        barrels: clearBarrels(currentWeapon.barrels || []),
        cameraSizeMultiplier: currentWeapon.cameraSizeMultiplier,
        maxDrones: currentWeapon.maxDrones,
        name: currentWeapon.name,
      });
    }
    function compress(e) {
      return Object(base64_js__WEBPACK_IMPORTED_MODULE_9__.fromByteArray)(
        Object(pako__WEBPACK_IMPORTED_MODULE_10__.a)(e)
      );
    }
    function decompress(e) {
      return Object(pako__WEBPACK_IMPORTED_MODULE_10__.b)(
        Object(base64_js__WEBPACK_IMPORTED_MODULE_9__.toByteArray)(e),
        { to: "string" }
      );
    }
    function codeToObject(e) {
      var t;
      try {
        t = JSON.parse(e);
      } catch (n) {
        try {
          t = JSON.parse(decompress(e.trim()));
        } catch (n) {
          try {
            t = JSON.parse(decompress(decompress(e.trim())));
          } catch (e) {
            return { error: "Invalid Code" };
          }
          return t || { error: "Invalid Code" };
        }
        return t || { error: "Invalid Code" };
      }
      return t;
    }
    function objectToCode(e) {
      var t = JSON.stringify(e);
      if (_settings__WEBPACK_IMPORTED_MODULE_8__.g.compressCodes) {
        var n = compress(t),
          r = compress(n);
        t = n.length < r.length ? n : r;
      }
      return t;
    }
    function receiveTank(e) {
      (currentWeapon.barrels = readBarrels(clearBarrels(e.weapon.barrels))),
        (currentWeapon.cameraSizeMultiplier = e.weapon.cameraSizeMultiplier),
        (currentWeapon.maxDrones = e.weapon.maxDrones),
        (currentWeapon.name = e.weapon.name),
        (currentBody.gadgets = readGadgets(clearGadgets(e.body.gadgets))),
        (currentBody.layers = readLayers(clearLayers(e.body.layers))),
        (currentBody.sides = e.body.sides),
        (currentBody.outerSides = e.body.outerSides),
        (currentBody.outerSize = e.body.outerSize),
        (currentBody.healthMultiplier = e.body.healthMultiplier),
        (currentBody.bodyDamageMultiplier = e.body.bodyDamageMultiplier),
        (currentBody.speedMultiplier = e.body.speedMultiplier),
        (currentBody.cameraSizeMultiplier = e.body.cameraSizeMultiplier),
        (currentBody.maxDrones = e.body.maxDrones),
        (currentBody.name = e.body.name),
        (currentBody.type = e.body.type),
        (currentBody.level = e.body.level),
        (currentBody.radiant = e.body.radiant),
        (currentBody.team = e.body.team),
        (currentBody.visualTeam = e.body.visualTeam),
        (currentBody.overrideTankName = e.body.overrideTankName),
        tankUpdate();
    }
    function clearLayers(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = { offsetX: 0, offsetY: 0, rot: 0 };
          Object.keys(e).forEach(function (t) {
            switch (t) {
              case "selected":
                break;
              case "rot":
                n[t] = Object(
                  _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round
                )(
                  Object(
                    _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees
                  )(e[t]),
                  _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING
                );
                break;
              default:
                n[t] = e[t];
            }
          }),
            t.push(n);
        }),
        t
      );
    }
    function clearBarrels(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = {};
          Object.keys(e).forEach(function (t) {
            switch (t) {
              case "fireCooldown":
              case "animTime":
              case "selected":
              case "shootingTime":
                break;
              case "rot":
                n[t] = Object(
                  _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round
                )(
                  Object(
                    _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees
                  )(e[t]),
                  _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING
                );
                break;
              case "minion":
                n[t] = {
                  sides: Object(
                    _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
                  )(e[t].sides || 0),
                  outerSides: Object(
                    _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
                  )(e[t].outerSides || 0),
                  outerSize: Object(
                    _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
                  )(e[t].outerSize || 0),
                  maxWeaponDrones: e[t].maxWeaponDrones || 0,
                  maxBodyDrones: e[t].maxBodyDrones || 0,
                  barrels: clearBarrels(e[t].barrels),
                  gadgets: clearGadgets(e[t].gadgets),
                  layers: clearLayers(e[t].layers || []),
                };
                break;
              default:
                n[t] = e[t];
            }
          }),
            t.push(n);
        }),
        t
      );
    }
    function clearGadgets(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = {};
          Object.keys(e).forEach(function (t) {
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
                n[t] = Object(
                  _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
                )(e[t]);
                break;
              case "baseRot":
                n[t] = Object(
                  _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round
                )(
                  Object(
                    _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees
                  )(e[t]),
                  _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING
                );
                break;
              case "rot":
                0 != e.type &&
                  3 != e.type &&
                  (n[t] = Object(
                    _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.round
                  )(
                    Object(
                      _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.radiansToDegrees
                    )(e[t]),
                    _shared_constants__WEBPACK_IMPORTED_MODULE_1__.BARREL_ROT_ROUNDING
                  ));
                break;
              default:
                n[t] = e[t];
            }
          }),
            t.push(n);
        }),
        t
      );
    }
    function readLayers(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = { offsetX: 0, offsetY: 0, rot: 0 };
          Object.keys(e).forEach(function (t) {
            switch (t) {
              case "rot":
                n[t] = Object(
                  _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians
                )(e[t]);
                break;
              default:
                n[t] = e[t];
            }
          }),
            t.push(n);
        }),
        t
      );
    }
    function readBarrels(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = {};
          Object.keys(e).forEach(function (t) {
            switch (t) {
              case "rot":
                n[t] = Object(
                  _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians
                )(e[t]);
                break;
              case "minion":
                n[t] = {
                  sides: Object(
                    _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
                  )(e[t].sides || 0),
                  outerSides: Object(
                    _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
                  )(e[t].outerSides || 0),
                  outerSize: Object(
                    _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
                  )(e[t].outerSize || 0),
                  maxWeaponDrones: e[t].maxWeaponDrones || 0,
                  maxBodyDrones: e[t].maxBodyDrones || 0,
                  barrels: readBarrels(e[t].barrels),
                  gadgets: readGadgets(e[t].gadgets),
                  layers: readLayers(e[t].layers || []),
                };
                break;
              default:
                n[t] = e[t];
            }
          }),
            t.push(n);
        }),
        t
      );
    }
    function readGadgets(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          var n = {};
          Object.keys(e).forEach(function (t) {
            switch (t) {
              case "rot":
              case "baseRot":
                n[t] = Object(
                  _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.degreesToRadians
                )(e[t]);
                break;
              case "sides":
              case "outerSides":
              case "backSides":
                n[t] = Object(
                  _shared_sharedfunctions__WEBPACK_IMPORTED_MODULE_3__.clampSides
                )(e[t]);
                break;
              default:
                n[t] = e[t];
            }
          }),
            t.push(n);
        }),
        t
      );
    }
    function removeAllChildNodes(e) {
      for (; e.firstChild; ) e.removeChild(e.firstChild);
    }
    function addChild(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "div",
        n = arguments.length > 2 ? arguments[2] : void 0;
      "string" == typeof n && (n = [n]);
      var r = document.createElement(t);
      return (
        e.appendChild(r),
        n &&
          n.forEach(function (e) {
            r.classList.add(e);
          }),
        r
      );
    }
    function setTooltip(e, t) {
      t ? e.setAttribute("data-tooltip", t) : e.removeAttribute("data-tooltip");
    }
    (loadWeaponUpgradeButton.onclick = function () {
      var e = loadWeaponUpgradeArea.value.trim().toLowerCase();
      (loadWeaponUpgradeArea.value = ""),
        0 != e.length &&
          Object(_networking__WEBPACK_IMPORTED_MODULE_6__.loadWeaponUpgrade)(e);
    }),
      (loadBodyUpgradeButton.onclick = function () {
        var e = loadBodyUpgradeArea.value.trim().toLowerCase();
        (loadBodyUpgradeArea.value = ""),
          0 != e.length &&
            Object(_networking__WEBPACK_IMPORTED_MODULE_6__.loadBodyUpgrade)(e);
      }),
      loadWeaponUpgradeArea.addEventListener("keydown", function (e) {
        e.keyCode == _settings__WEBPACK_IMPORTED_MODULE_8__.c.enter &&
          (loadWeaponUpgradeButton.click(), loadWeaponUpgradeArea.blur());
      }),
      loadBodyUpgradeArea.addEventListener("keydown", function (e) {
        e.keyCode == _settings__WEBPACK_IMPORTED_MODULE_8__.c.enter &&
          (loadBodyUpgradeButton.click(), loadBodyUpgradeArea.blur());
      }),
      (importExportButton.onclick = function () {
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
                importBody(codeArea.value);
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
                exportBody();
            }
        }
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "serverURL", function () {
        return m;
      }),
      n.d(t, "socket", function () {
        return b;
      }),
      n.d(t, "hubSocket", function () {
        return y;
      }),
      n.d(t, "hybridConnection", function () {
        return S;
      }),
      n.d(t, "connectToServer", function () {
        return A;
      }),
      n.d(t, "disconnectFromServer", function () {
        return k;
      }),
      n.d(t, "closeSocket", function () {
        return x;
      }),
      n.d(t, "key", function () {
        return R;
      }),
      n.d(t, "respawningWithKey", function () {
        return I;
      }),
      n.d(t, "clearKey", function () {
        return C;
      }),
      n.d(t, "respawnInServer", function () {
        return P;
      }),
      n.d(t, "hubURL", function () {
        return B;
      }),
      n.d(t, "updateDimensionAttributes", function () {
        return j;
      }),
      n.d(t, "updateStats", function () {
        return U;
      }),
      n.d(t, "statUpgrade", function () {
        return N;
      }),
      n.d(t, "play", function () {
        return z;
      }),
      n.d(t, "updateDirection", function () {
        return K;
      }),
      n.d(t, "sendChatMessage", function () {
        return G;
      }),
      n.d(t, "updateShooting", function () {
        return F;
      }),
      n.d(t, "updateBody", function () {
        return Y;
      }),
      n.d(t, "updateWeapon", function () {
        return H;
      }),
      n.d(t, "loadWeaponUpgrade", function () {
        return V;
      }),
      n.d(t, "loadBodyUpgrade", function () {
        return q;
      }),
      n.d(t, "togglePassiveMode", function () {
        return Z;
      }),
      n.d(t, "updateInput", function () {
        return X;
      }),
      n.d(t, "updateControlState", function () {
        return J;
      }),
      n.d(t, "updateControlPosition", function () {
        return $;
      }),
      n.d(t, "upgradePlayer", function () {
        return Q;
      }),
      n.d(t, "getFromAPI", function () {
        return ee;
      });
    var r = n(15),
      a = n(12),
      o = n(11),
      i = n(6),
      s = n(14),
      l = n(1),
      u = n(7),
      c = n(2),
      d = n(4),
      f = n(8),
      h = n(0);
    function p(e, t, n, r, a, o, i) {
      try {
        var s = e[o](i),
          l = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(r, a);
    }
    function _(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, a) {
          var o = e.apply(t, n);
          function i(e) {
            p(o, r, a, i, s, "next", e);
          }
          function s(e) {
            p(o, r, a, i, s, "throw", e);
          }
          i(void 0);
        });
      };
    }
    function g(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            i = true,
            s = false;
          try {
            for (
              n = n.call(e);
              !(i = (r = n.next()).done) &&
              (o.push(r.value), !t || o.length !== t);
              i = true
            );
          } catch (e) {
            (s = true), (a = e);
          } finally {
            try {
              i || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          }
          return o;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return v(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return v(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function v(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    n(1);
    var m = window.location.host;
    m = "localhost";
    var b,
      y,
      E,
      O,
      w = false,
      T = "";
    function M() {
      E = setInterval(function () {
        b.sendMessage(l.MSG_TYPES.PING, Date.now());
      }, 1e3);
    }
    x();
    var S = false;
    function A(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      (S = t),
        (m = e),
        (i.serverNameDisplay.textContent = "Server Name: ".concat(
          Object(h.formatURL)(t ? B : m)
        )),
        t
          ? ((b = y), M(), Object(u.onConnect)(m))
          : (m.startsWith("ws://") ||
              m.startsWith("wss://") ||
              (m = "ws://" + m),
            ((b = window.gameserver = new WebSocket(
              m + (m.endsWith("/") ? "" : "/") + "ws?key=" + R
            )).binaryType = "arraybuffer"),
            (b.address = m),
            (b.sendMessage = function (e, t) {
              console.warn("WebSocket not yet open. Message not sent.");
            }),
            b.addEventListener("open", function () {
              (b.sendMessage = function (e, t) {
                b.readyState === WebSocket.OPEN
                  ? b.send(Object(r.encode)([e, t]))
                  : console.warn("WebSocket closing. Message not sent.");
              }),
                M(),
                Object(u.onConnect)(m);
            }),
            b.addEventListener("close", function (e) {
              console.log(
                "Disconnected from game server ".concat(b.address, ": ") +
                  JSON.stringify({
                    reason: e.reason,
                    code: e.code,
                    wasClean: e.wasClean,
                  })
              ),
                x(),
                Object(u.onDisconnect)(T),
                clearInterval(E),
                w ||
                  setTimeout(function () {
                    console.log("Attempting to connect to ".concat(m)), A(m);
                  }, 0),
                (w = false),
                (T = "");
            }),
            b.addEventListener("error", function (e) {
              console.log(
                "Connection to game server failed: ".concat(JSON.stringify(e))
              ),
                Object(u.onFullDisconnect)(
                  "An unexpected error occured while connecting to "
                    .concat(m)
                    .concat(e.message ? ": ".concat(e.message) : ".")
                );
            })),
        b.addEventListener("message", function (e) {
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
            // interesting
            case l.MSG_TYPES.SEND_TO_SERVER:
              if(sendst.checked){
                console.info("send storage: https://scenexe.io/#sv="+encodeURIComponent(a[0])+"@"+encodeURIComponent(a[1]));
                b.sendMessage(l.MSG_TYPES.JOIN_GAME,document.getElementById("username-input").value);
                window.reset_stat_upgr();
              }else fSendToServer(a);
              break;
            case l.MSG_TYPES.GAME_UPDATE:
              Object(o.e)(a);
              break;
            case l.MSG_TYPES.RECEIVE_DIMENSION_ATTRIBUTES:
              console.info('RECEIVE_DIMENSION_ATTRIBUTES:%o',a);
              j(a);
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
              fCopyText(a);
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
              Object(u.onDeath)(a);
          }
        });
    }
    function k() {
      var e =
        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      b.closed || ((w = !e), b.close());
    }
    function x() {
      (b = { closed: true }).sendMessage = function (e, t) {
        console.warn("WebSocket closed. Message not sent.");
      };
    }
    var R = "",
      I = false;
    function C(key="") {
      (R = key), (I = false);
    }
    function fSendToServer(e) {
      (R = e[0]), (m = e[1]);
      var t = e[2];
      Object(i.setCurrentBackgroundID)(t.loadingBackground),
        (T = t.loadingText),
        (w = false);
      var n = u.servers.findIndex(function (e) {
        return e.address === m;
      });
      -1 != n &&
        ((u.serverSelect.selectedIndex = n), Object(u.updateSelectedServer)()),
        console.log("Sending to server: ".concat(m)),
        k();
    }
    function P(e, t) {
      Object(i.setCurrentBackgroundID)(0), (m = e);
      var n = u.servers.findIndex(function (e) {
        return e.address === m;
      });
      -1 != n &&
        ((u.serverSelect.selectedIndex = n),
        Object(u.updateSelectedServer)(false)),
        (I = true),
        (R = t),
        console.log("Respawning in server: ".concat(m)),
        (T = "Connecting..."),
        k();
    }
    var B =
      window.location.protocol.replace("http", "ws") +
      "//" +
      window.location.host;
    !(function e(t) {
      ((y = new WebSocket(t + "/ws")).binaryType = "arraybuffer"),
        y.addEventListener("open", function () {
          (y.sendMessage = function (e, t) {
            y.send(Object(r.encode)([e, t]));
          }),
            (O = setInterval(function () {
              y.sendMessage(l.MSG_TYPES.PING, Date.now());
            }, 5e3)),
            Object(u.onHubConnect)(t);
        }),
        (y.onclose = function (t) {
          console.log(
            "Disconnected from hub server ".concat(B, ":") +
              JSON.stringify({
                reason: t.reason,
                code: t.code,
                wasClean: t.wasClean,
              })
          ),
            S && ((S = false), Object(u.onDisconnect)(T), clearInterval(E)),
            clearInterval(O),
            setTimeout(function () {
              console.log("Attempting to reconnect to hub server ".concat(B)),
                e(B);
            }, 1e3);
        }),
        y.addEventListener("error", function (t) {
          console.log(
            "Error when connecting to hub server "
              .concat(B, ": ")
              .concat(JSON.stringify(t))
          ),
            clearInterval(O),
            setTimeout(function () {
              console.log("Attempting to reconnect to hub server ".concat(B)),
                e(B);
            }, 1e3);
        }),
        y.addEventListener("message", function (e) {
          var t = Object(r.decode)(new Uint8Array(e.data)),
            n = t[0],
            a = t[1];
          switch (n) {
            case l.MSG_TYPES.RECEIVE_SERVERS:
              u.fullyDisconnected || Object(u.receiveServers)(a);
          }
        });
    })(B);
    var j = function (e) {
      for (var t = 0, n = Object.entries(e); t < n.length; t++) {
        var r = g(n[t], 2),
          a = r[0],
          o = r[1];
        Object(s.c)(a, o);
      }
    };
    function fCopyText(e) {
      navigator.clipboard.writeText(e);
    }
    var U = function (e) {
        Object(c.B)(e[0]), Object(c.A)(e[1]);
      },
      N = function (e) {
        b.sendMessage(l.MSG_TYPES.UPGRADE_STAT, e);
      },
      z = function (e) {
        //gtag("event", l.ANALYTICS_EVENTS.JOIN_GAME, { username: e }),
          b.sendMessage(l.MSG_TYPES.JOIN_GAME, e),
          Object(c.z)();
      },
      W = 0,
      K = Object(a.throttle)(60, function (e) {
        var t = angle_from_table(e)//Math.round(1e3 * e) / 1e3;
        W != t && b.sendMessage(l.MSG_TYPES.ROTATION_INPUT, t), (W = t);
      }),
      G = Object(a.throttle)(20, function (e) {
        //gtag("event", l.ANALYTICS_EVENTS.SEND_MESSAGE, { message: e }),
        switch(e.slice(0,4)){
          case '/uw ':
            b.sendMessage(l.MSG_TYPES.UPGRADE_WEAPON, e.slice(4));
            return;
          case '/ub ':
            b.sendMessage(l.MSG_TYPES.UPGRADE_BODY, e.slice(4));
            return;
          default:
            b.sendMessage(l.MSG_TYPES.SEND_CHAT_MESSAGE, e);
        }
      }),
      F = function (e) {
        b.sendMessage(l.MSG_TYPES.SHOOTING_INPUT, e);
      };
    function Y() {
      b.sendMessage(l.MSG_TYPES.CHANGE_BODY, d.b);
    }
    function H() {
      b.sendMessage(l.MSG_TYPES.CHANGE_WEAPON, d.c);
    }
    function V(e) {
      b.sendMessage(l.MSG_TYPES.LOAD_WEAPON_UPGRADE, e);
    }
    function q(e) {
      b.sendMessage(l.MSG_TYPES.LOAD_BODY_UPGRADE, e);
    }
    var Z = Object(f.debounce)(function (e) {
        b.sendMessage(l.MSG_TYPES.PASSIVE_MODE, e);
      }, 20),
      X = function (e, t) {
        b.sendMessage(l.MSG_TYPES.MOVEMENT_INPUT, [e, t]);
      },
      J = Object(f.debounce)(function (e) {
        b.sendMessage(l.MSG_TYPES.CHANGE_CONTROL_STATE, e);
      }, 20),
      $ = Object(a.throttle)(60, function (e, t) {
        b.sendMessage(l.MSG_TYPES.CHANGE_CONTROL_POSITION, [e, t]);
      }),
      Q = function (e, t, n) {
        switch (n) {
          case 0:
            e
              ? b.sendMessage(l.MSG_TYPES.UPGRADE_WEAPON, t)
              : b.sendMessage(l.MSG_TYPES.UPGRADE_BODY, t);
            var r = false,
              a = false;
            if (e)
              for (var o = 0; o < c.M.length; o++) {
                var i = c.M[o];
                if (i.id == t)
                  for (var s = 0; s < i.barrels.length; s++)
                    1 == i.barrels[s].type && (r = true);
              }
            else
              for (var d = 0; d < c.b.length; d++) {
                var f = c.b[d];
                if (f.id == t)
                  for (var h = 0; h < f.gadgets.length; h++)
                    1 == f.gadgets[h].type
                      ? (r = true)
                      : 0 == f.gadgets[h].type && (a = true);
              }
            a &&
              setTimeout(function () {
                Object(u.getCookie)(l.COOKIES.TUTORIAL.AUTO_CANNONS) ||
                  c.I ||
                  u.isMobile ||
                  (Object(c.C)(true),
                  Object(u.setCookie)(l.COOKIES.TUTORIAL.AUTO_CANNONS, true, 15),
                  setTimeout(function () {
                    Object(c.x)(
                      "You can disable your auto cannons by pressing V."
                    );
                  }, 1e3),
                  Object(c.C)(false));
              }, 1e4),
              r &&
                (Object(u.getCookie)(l.COOKIES.TUTORIAL.DRONES) ||
                  c.I ||
                  u.isMobile ||
                  (Object(c.C)(true),
                  Object(u.setCookie)(l.COOKIES.TUTORIAL.DRONES, true, 15),
                  setTimeout(function () {
                    Object(c.x)("Hold down left click to control your drones.");
                  }, 1e3),
                  setTimeout(function () {
                    Object(c.x)(
                      "You can also control them by turning on auto fire. (Press E)"
                    );
                  }, 4e3),
                  setTimeout(function () {
                    Object(c.x)(
                      "Repel your drones by holding down right click."
                    );
                  }, 9e3),
                  setTimeout(function () {
                    Object(c.x)(
                      "Upgrading your bullet penetration stat upgrades your max drone cap."
                    );
                  }, 13e3),
                  Object(c.C)(false)));
        }
      };
    function ee(e, t) {
      return te.apply(this, arguments);
    }
    function te() {
      return (te = _(
        regeneratorRuntime.mark(function e(t, n) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    new Promise(function (e) {
                      n || (n = {}),
                        fetch(t, {
                          method: "POST",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(n),
                        })
                          .catch(function (t) {
                            console.error(t),
                              e({ error: "Failed to connect to server." });
                          })
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (t) {
                            t.error, e(t);
                          });
                    })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "serverNameDisplay", function () {
        return Q;
      }),
      n.d(t, "chat", function () {
        return ee;
      }),
      n.d(t, "renderingHUD", function () {
        return ne;
      }),
      n.d(t, "checkingForTankEditorClicks", function () {
        return re;
      }),
      n.d(t, "multiSelectTankEditorClick", function () {
        return ae;
      }),
      n.d(t, "checkingForIDClicks", function () {
        return oe;
      }),
      n.d(t, "clickedObjects", function () {
        return ie;
      }),
      n.d(t, "oldClickedObjects", function () {
        return se;
      }),
      n.d(t, "receiveAnnouncement", function () {
        return pe;
      }),
      n.d(t, "clearAnnouncement", function () {
        return _e;
      }),
      n.d(t, "receiveTimer", function () {
        return be;
      }),
      n.d(t, "clearTimer", function () {
        return ye;
      }),
      n.d(t, "checkForTankEditorClicks", function () {
        return Ee;
      }),
      n.d(t, "setHUDRendering", function () {
        return Oe;
      }),
      n.d(t, "showingChatBox", function () {
        return we;
      }),
      n.d(t, "setShowChatBox", function () {
        return Te;
      }),
      n.d(t, "renderMainMenu", function () {
        return Ae;
      }),
      n.d(t, "lastTank", function () {
        return Se;
      }),
      n.d(t, "setCurrentBackgroundID", function () {
        return We;
      }),
      n.d(t, "cdt", function () {
        return Fe;
      }),
      n.d(t, "lastMe", function () {
        return Ye;
      }),
      n.d(t, "canvas", function () {
        return Je;
      }),
      n.d(t, "screenSize", function () {
        return Qe;
      }),
      n.d(t, "offsetX", function () {
        return ot;
      }),
      n.d(t, "offsetY", function () {
        return it;
      }),
      n.d(t, "setLastTank", function () {
        return st;
      }),
      n.d(t, "setPing", function () {
        return lt;
      }),
      n.d(t, "render", function () {
        return ut;
      }),
      n.d(t, "updateDebugMode", function () {
        return ht;
      }),
      n.d(t, "scaleRatio", function () {
        return _t;
      }),
      n.d(t, "vmin", function () {
        return gt;
      }),
      n.d(t, "setCanvasDimensions", function () {
        return vt;
      }),
      n.d(t, "gateActivate", function () {
        return bt;
      }),
      n.d(t, "gatewayActivate", function () {
        return yt;
      }),
      n.d(t, "wormholeRupture", function () {
        return Et;
      }),
      n.d(t, "wormholeSpawn", function () {
        return Ot;
      }),
      n.d(t, "entityLanding", function () {
        return wt;
      }),
      n.d(t, "startRendering", function () {
        return Tt;
      }),
      n.d(t, "stopRendering", function () {
        return Mt;
      }),
      n.d(t, "getTeamColor", function () {
        return Dt;
      }),
      n.d(t, "upgradeRotation", function () {
        return Ht;
      }),
      n.d(t, "loadUpgradeTree", function () {
        return hn;
      }),
      n.d(t, "exportRenderedEntity", function () {
        return Sn;
      }),
      n.d(t, "clearCameraShakes", function () {
        return Rn;
      }),
      n.d(t, "tickCameraShakes", function () {
        return In;
      }),
      n.d(t, "shakeCamera", function () {
        return Cn;
      }),
      n.d(t, "addParticle", function () {
        return Dn;
      }),
      n.d(t, "clearParticles", function () {
        return Pn;
      }),
      n.d(t, "clickMouse", function () {
        return lr;
      });
    var r = n(12),
      a = (n(36), n(8)),
      o = n(11),
      i = n(9),
      s = n(7),
      l = n(14),
      u = n(1),
      c = n(5),
      d = n(2),
      f = n(0),
      h = [
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: 0,
          width: 0.5,
          length: 1,
          damage: 1,
          reload: 1,
          delay: 0,
        },
      ],
      p = [
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: 0,
          width: 0.5,
          length: 1.25,
          damage: 3,
          penetration: 2.5,
          reload: 2,
          delay: 0,
          speed: 1.5,
        },
      ],
      _ = [
        {
          type: 0,
          rot: Object(f.degreesToRadians)(35),
          offset: 0,
          distance: 0,
          width: 0.25,
          length: 0.75,
          damage: 0.75,
          reload: 1,
          delay: 0,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(-35),
          offset: 0,
          distance: 0,
          width: 0.25,
          length: 0.75,
          damage: 0.75,
          reload: 1,
          delay: 0,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: 0,
          distance: 0,
          width: 0.5,
          length: 1,
          damage: 1,
          reload: 1,
          delay: 0,
        },
      ],
      g = [
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: 0,
          width: 1,
          length: 1.1,
          damage: 8,
          reload: 4,
          delay: 0,
        },
      ],
      v = [
        {
          type: 0,
          rot: Object(f.degreesToRadians)(-60),
          offset: 0,
          distance: 0,
          width: 0.25,
          length: 0.7,
          damage: 0.5,
          reload: 1,
          delay: 0.75,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(60),
          offset: 0,
          distance: 0,
          width: 0.25,
          length: 0.7,
          damage: 0.5,
          reload: 1,
          delay: 0.75,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(-40),
          offset: 0,
          distance: 0,
          width: 0.25,
          length: 0.8,
          damage: 0.5,
          reload: 1,
          delay: 0.5,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(40),
          offset: 0,
          distance: 0,
          width: 0.25,
          length: 0.8,
          damage: 0.5,
          reload: 1,
          delay: 0.5,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(20),
          offset: 0,
          distance: 0,
          width: 0.25,
          length: 0.9,
          damage: 0.5,
          reload: 1,
          delay: 0.25,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(-20),
          offset: 0,
          distance: 0,
          width: 0.25,
          length: 0.9,
          damage: 0.5,
          reload: 1,
          delay: 0.25,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: 0,
          distance: 0,
          width: 0.5,
          length: 1,
          damage: 1,
          reload: 1,
          delay: 0,
        },
      ],
      m = [
        {
          type: 0,
          rot: Object(f.degreesToRadians)(-75),
          offset: 0,
          width: 0.25,
          length: 0.7,
          damage: 0.5,
          reload: 1.5,
          delay: 0.8333,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(75),
          offset: 0,
          width: 0.25,
          length: 0.7,
          damage: 0.5,
          reload: 1.5,
          delay: 0.8333,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(-60),
          offset: 0,
          width: 0.25,
          length: 0.8,
          damage: 0.5,
          reload: 1.5,
          delay: 0.6666,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(60),
          offset: 0,
          width: 0.25,
          length: 0.8,
          damage: 0.5,
          reload: 1.5,
          delay: 0.6666,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(-45),
          offset: 0,
          width: 0.25,
          length: 0.9,
          damage: 0.5,
          reload: 1.5,
          delay: 0.5,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(45),
          offset: 0,
          width: 0.25,
          length: 0.9,
          damage: 0.5,
          reload: 1.5,
          delay: 0.5,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(-30),
          offset: 0,
          width: 0.25,
          length: 1,
          damage: 0.5,
          reload: 1.5,
          delay: 0.3333,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(30),
          offset: 0,
          width: 0.25,
          length: 1,
          damage: 0.5,
          reload: 1.5,
          delay: 0.3333,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(15),
          offset: 0,
          width: 0.25,
          length: 1.1,
          damage: 0.5,
          reload: 1.5,
          delay: 0.1666,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(-15),
          offset: 0,
          width: 0.25,
          length: 1.1,
          damage: 0.5,
          reload: 1.5,
          delay: 0.1666,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: 0,
          width: 0.5,
          length: 1.2,
          damage: 1.5,
          penetration: 2,
          reload: 1.5,
          delay: 0,
        },
      ],
      b = [
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: 0,
          distance: 0,
          width: 0.5,
          length: 1,
          damage: 1,
          reload: 1,
          delay: 0,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(180),
          offset: 0,
          distance: 0,
          width: 0.5,
          length: 1,
          damage: 1,
          reload: 1,
          delay: 0,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(90),
          offset: 0,
          distance: 0,
          width: 0.5,
          length: 1,
          damage: 1,
          reload: 1,
          delay: 0,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(-90),
          offset: 0,
          distance: 0,
          width: 0.5,
          length: 1,
          damage: 1,
          reload: 1,
          delay: 0,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(45),
          offset: 0,
          distance: 0,
          width: 0.5,
          length: 1,
          damage: 1,
          reload: 1,
          delay: 0,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(-45),
          offset: 0,
          distance: 0,
          width: 0.5,
          length: 1,
          damage: 1,
          reload: 1,
          delay: 0,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(135),
          offset: 0,
          distance: 0,
          width: 0.5,
          length: 1,
          damage: 1,
          reload: 1,
          delay: 0,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(-135),
          offset: 0,
          distance: 0,
          width: 0.5,
          length: 1,
          damage: 1,
          reload: 1,
          delay: 0,
        },
      ],
      y = [
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: 0,
          width: 0.5,
          length: 1.4,
          damage: 4.5,
          reload: 2.3,
          delay: 0,
          speed: 2,
        },
      ],
      E = [
        {
          type: 2,
          rot: Object(f.degreesToRadians)(180),
          offset: 0,
          distance: 0,
          width: 0.2,
          length: 0.45,
          damage: 4,
          reload: 12,
          delay: 0,
        },
        {
          type: 2,
          rot: Object(f.degreesToRadians)(180),
          offset: 0.5,
          distance: 0,
          width: 0.1,
          length: 0.35,
          damage: 2,
          reload: 3,
          delay: 0,
        },
        {
          type: 2,
          rot: Object(f.degreesToRadians)(180),
          offset: -0.5,
          distance: 0,
          width: 0.1,
          length: 0.35,
          damage: 2,
          reload: 3,
          delay: 0,
        },
        {
          type: 2,
          rot: Object(f.degreesToRadians)(60),
          offset: 0,
          distance: 0,
          width: 0.2,
          length: 0.45,
          damage: 4,
          reload: 12,
          delay: 0,
        },
        {
          type: 2,
          rot: Object(f.degreesToRadians)(60),
          offset: 0.5,
          distance: 0,
          width: 0.1,
          length: 0.35,
          damage: 2,
          reload: 3,
          delay: 0,
        },
        {
          type: 2,
          rot: Object(f.degreesToRadians)(60),
          offset: -0.5,
          distance: 0,
          width: 0.1,
          length: 0.35,
          damage: 2,
          reload: 3,
          delay: 0,
        },
        {
          type: 2,
          rot: Object(f.degreesToRadians)(-60),
          offset: 0,
          distance: 0,
          width: 0.2,
          length: 0.45,
          damage: 4,
          reload: 12,
          delay: 0,
        },
        {
          type: 2,
          rot: Object(f.degreesToRadians)(-60),
          offset: 0.5,
          distance: 0,
          width: 0.1,
          length: 0.35,
          damage: 2,
          reload: 3,
          delay: 0,
        },
        {
          type: 2,
          rot: Object(f.degreesToRadians)(-60),
          offset: -0.5,
          distance: 0,
          width: 0.1,
          length: 0.35,
          damage: 2,
          reload: 3,
          delay: 0,
        },
      ],
      O = [
        {
          type: 1,
          rot: Object(f.degreesToRadians)(180),
          offset: 0,
          distance: 0,
          width: 0.2,
          length: 0.45,
          damage: 1.5,
          reload: 4,
          delay: 0,
        },
        {
          type: 1,
          rot: Object(f.degreesToRadians)(180),
          offset: 0.5,
          distance: 0,
          width: 0.1,
          length: 0.35,
          damage: 0.25,
          reload: 1,
          delay: 0,
        },
        {
          type: 1,
          rot: Object(f.degreesToRadians)(180),
          offset: -0.5,
          distance: 0,
          width: 0.1,
          length: 0.35,
          damage: 0.25,
          reload: 1,
          delay: 0,
        },
        {
          type: 1,
          rot: Object(f.degreesToRadians)(60),
          offset: 0,
          distance: 0,
          width: 0.2,
          length: 0.45,
          damage: 1.5,
          reload: 4,
          delay: 0,
        },
        {
          type: 1,
          rot: Object(f.degreesToRadians)(60),
          offset: 0.5,
          distance: 0,
          width: 0.1,
          length: 0.35,
          damage: 0.25,
          reload: 1,
          delay: 0,
        },
        {
          type: 1,
          rot: Object(f.degreesToRadians)(60),
          offset: -0.5,
          distance: 0,
          width: 0.1,
          length: 0.35,
          damage: 0.25,
          reload: 1,
          delay: 0,
        },
        {
          type: 1,
          rot: Object(f.degreesToRadians)(-60),
          offset: 0,
          distance: 0,
          width: 0.2,
          length: 0.45,
          damage: 1.5,
          reload: 4,
          delay: 0,
        },
        {
          type: 1,
          rot: Object(f.degreesToRadians)(-60),
          offset: 0.5,
          distance: 0,
          width: 0.1,
          length: 0.35,
          damage: 0.25,
          reload: 1,
          delay: 0,
        },
        {
          type: 1,
          rot: Object(f.degreesToRadians)(-60),
          offset: -0.5,
          distance: 0,
          width: 0.1,
          length: 0.35,
          damage: 0.25,
          reload: 1,
          delay: 0,
        },
      ],
      w = [
        {
          type: 2,
          rot: Object(f.degreesToRadians)(-60),
          offset: 0,
          width: 0.55,
          length: 0.5,
          damage: 8,
          reload: 12,
          delay: 0,
          speed: 1,
          distance: 0,
          penetration: 3.5,
        },
        {
          type: 2,
          rot: Object(f.degreesToRadians)(60),
          offset: 0,
          width: 0.55,
          length: 0.5,
          damage: 8,
          reload: 12,
          delay: 0,
          speed: 1,
          distance: 0,
          penetration: 3.5,
        },
        {
          type: 2,
          rot: Object(f.degreesToRadians)(180),
          offset: 0,
          width: 0.55,
          length: 0.5,
          damage: 8,
          reload: 12,
          delay: 0,
          speed: 1,
          distance: 0,
          penetration: 3.5,
        },
      ],
      T = [
        {
          type: 4,
          rot: Object(f.degreesToRadians)(180),
          offset: 0,
          distance: 0.4,
          width: 0.4,
          length: 0.225,
          damage: 0.1,
          penetration: 40,
          reload: 6,
          delay: 0,
        },
        {
          type: 4,
          rot: Object(f.degreesToRadians)(60),
          offset: 0,
          distance: 0.4,
          width: 0.4,
          length: 0.225,
          damage: 0.1,
          penetration: 40,
          reload: 6,
          delay: 0,
        },
        {
          type: 4,
          rot: Object(f.degreesToRadians)(-60),
          offset: 0,
          distance: 0.4,
          width: 0.4,
          length: 0.225,
          damage: 0.1,
          penetration: 40,
          reload: 6,
          delay: 0,
        },
        {
          type: 5,
          rot: Object(f.degreesToRadians)(180),
          offset: -0.6,
          distance: 0.4,
          width: 0.1,
          length: 0.15,
          damage: 0.1,
          reload: 12,
          delay: 0,
        },
        {
          type: 5,
          rot: Object(f.degreesToRadians)(180),
          offset: 0.6,
          distance: 0.4,
          width: 0.1,
          length: 0.15,
          damage: 0.1,
          reload: 12,
          delay: 0,
        },
        {
          type: 5,
          rot: Object(f.degreesToRadians)(60),
          offset: -0.6,
          distance: 0.4,
          width: 0.1,
          length: 0.15,
          damage: 0.1,
          reload: 12,
          delay: 0,
        },
        {
          type: 5,
          rot: Object(f.degreesToRadians)(60),
          offset: 0.6,
          distance: 0.4,
          width: 0.1,
          length: 0.15,
          damage: 0.1,
          reload: 12,
          delay: 0,
        },
        {
          type: 5,
          rot: Object(f.degreesToRadians)(-60),
          offset: -0.6,
          distance: 0.4,
          width: 0.1,
          length: 0.15,
          damage: 0.1,
          reload: 12,
          delay: 0,
        },
        {
          type: 5,
          rot: Object(f.degreesToRadians)(-60),
          offset: 0.6,
          distance: 0.4,
          width: 0.1,
          length: 0.15,
          damage: 0.1,
          reload: 12,
          delay: 0,
        },
      ],
      M = [
        {
          type: 3,
          rot: Object(f.degreesToRadians)(180),
          offset: 0,
          width: 0.4,
          length: 0.45,
          penetration: 2,
          speed: 0.75,
          damage: 1,
          reload: 30,
          delay: 0,
        },
        {
          type: 3,
          rot: Object(f.degreesToRadians)(60),
          offset: 0,
          width: 0.4,
          length: 0.45,
          penetration: 2,
          speed: 0.75,
          damage: 1,
          reload: 30,
          delay: 0,
        },
        {
          type: 3,
          rot: Object(f.degreesToRadians)(-60),
          offset: 0,
          width: 0.4,
          length: 0.45,
          penetration: 2,
          speed: 0.75,
          damage: 1,
          reload: 30,
          delay: 0,
        },
      ],
      S = [
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: 0,
          distance: 0,
          width: 0.2,
          length: 1.2,
          damage: 0.6,
          reload: 1,
          delay: 0,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: -0.5,
          distance: 0,
          width: 0.2,
          length: 1.2,
          damage: 0.6,
          reload: 1,
          delay: 0.33,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: 0.5,
          distance: 0,
          width: 0.2,
          length: 1.2,
          damage: 0.6,
          reload: 1,
          delay: 0.66,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: 0,
          distance: 0,
          width: 0.2,
          length: 0.8,
          damage: 0.6,
          reload: 1,
          delay: 0.66,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: -0.5,
          distance: 0,
          width: 0.2,
          length: 0.8,
          damage: 0.6,
          reload: 1,
          delay: 0.33,
        },
        {
          type: 0,
          rot: Object(f.degreesToRadians)(0),
          offset: 0.5,
          distance: 0,
          width: 0.2,
          length: 0.8,
          damage: 0.6,
          reload: 1,
          delay: 0,
        },
      ],
      A = [
        {
          rot: Object(f.degreesToRadians)(-12),
          type: 0,
          offsetX: 0.8 * Math.sin(Object(f.degreesToRadians)(135)),
          offsetY: 0.8 * Math.cos(Object(f.degreesToRadians)(135)),
          length: 0.5,
          width: 0.25,
          reload: 1,
          damage: 0.4,
          minDistance: 15,
          maxDistance: 25,
        },
        {
          rot: Object(f.degreesToRadians)(-16),
          type: 0,
          offsetX: 0.8 * Math.sin(Object(f.degreesToRadians)(45)),
          offsetY: 0.8 * Math.cos(Object(f.degreesToRadians)(45)),
          length: 0.5,
          width: 0.25,
          reload: 1,
          damage: 0.4,
          minDistance: 15,
          maxDistance: 25,
        },
        {
          rot: Object(f.degreesToRadians)(245),
          type: 0,
          offsetX: 0.8 * Math.sin(Object(f.degreesToRadians)(-135)),
          offsetY: 0.8 * Math.cos(Object(f.degreesToRadians)(-135)),
          length: 0.5,
          width: 0.25,
          reload: 1,
          damage: 0.4,
          minDistance: 15,
          maxDistance: 25,
        },
        {
          rot: Object(f.degreesToRadians)(257),
          type: 0,
          offsetX: 0.8 * Math.sin(Object(f.degreesToRadians)(-45)),
          offsetY: 0.8 * Math.cos(Object(f.degreesToRadians)(-45)),
          length: 0.5,
          width: 0.25,
          reload: 1,
          damage: 0.4,
          minDistance: 15,
          maxDistance: 25,
        },
      ],
      k = [
        {
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.7,
          width: 0.4,
          reload: 2.5,
          damage: 2,
          minDistance: 25,
          maxDistance: 45,
          speed: 1.3,
          rot: Object(f.degreesToRadians)(-45),
        },
      ],
      x = [
        {
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.75,
          width: 0.4,
          reload: 2,
          damage: 3.5,
          minDistance: 25,
          maxDistance: 45,
          speed: 1.5,
          rot: Object(f.degreesToRadians)(170),
        },
      ],
      R = [
        {
          type: 2,
          sides: 0,
          subtype: 0,
          offsetX: 0.7 * Math.sin(Object(f.degreesToRadians)(0)),
          offsetY: -0.7 * Math.cos(Object(f.degreesToRadians)(0)),
          radius: 1.75,
          width: 0.15,
          damage: 0.125,
          reload: 0.25,
        },
        {
          type: 2,
          sides: 0,
          subtype: 0,
          offsetX: 0.7 * Math.sin(Object(f.degreesToRadians)(120)),
          offsetY: -0.7 * Math.cos(Object(f.degreesToRadians)(120)),
          radius: 1.75,
          width: 0.15,
          damage: 0.125,
          reload: 0.25,
        },
        {
          type: 2,
          sides: 0,
          subtype: 0,
          offsetX: 0.7 * Math.sin(Object(f.degreesToRadians)(-120)),
          offsetY: -0.7 * Math.cos(Object(f.degreesToRadians)(-120)),
          radius: 1.75,
          width: 0.15,
          damage: 0.125,
          reload: 0.25,
        },
        {
          type: 2,
          sides: 0,
          subtype: 0,
          offsetX: 0,
          offsetY: 0,
          radius: 2,
          width: 0.1,
          damage: 0.15,
          reload: 0.25,
        },
        {
          type: 2,
          sides: 0,
          subtype: 0,
          offsetX: 0,
          offsetY: 0,
          radius: 4,
          width: 0.3,
          damage: 0.15,
          reload: 0.25,
        },
      ],
      I = [
        {
          type: 0,
          offsetX: 0.7 * Math.sin(Object(f.degreesToRadians)(0)),
          offsetY: -0.7 * Math.cos(Object(f.degreesToRadians)(0)),
          length: 0.15,
          width: 0.075,
          reload: 0.75,
          damage: 0.3,
          minDistance: 15,
          maxDistance: 25,
          rot: Object(f.degreesToRadians)(75),
        },
        {
          type: 0,
          offsetX: 0.7 * Math.sin(Object(f.degreesToRadians)(120)),
          offsetY: -0.7 * Math.cos(Object(f.degreesToRadians)(120)),
          length: 0.15,
          width: 0.075,
          reload: 0.75,
          damage: 0.3,
          minDistance: 15,
          maxDistance: 25,
          rot: Object(f.degreesToRadians)(75),
        },
        {
          type: 0,
          offsetX: 0.7 * Math.sin(Object(f.degreesToRadians)(-120)),
          offsetY: -0.7 * Math.cos(Object(f.degreesToRadians)(-120)),
          length: 0.15,
          width: 0.075,
          reload: 0.75,
          damage: 0.3,
          minDistance: 15,
          maxDistance: 25,
          rot: Object(f.degreesToRadians)(75),
        },
        {
          type: 0,
          offsetX: 0.35 * Math.sin(Object(f.degreesToRadians)(60)),
          offsetY: -0.35 * Math.cos(Object(f.degreesToRadians)(60)),
          length: 0.15,
          width: 0.075,
          reload: 0.75,
          damage: 0.3,
          minDistance: 15,
          maxDistance: 25,
          rot: Object(f.degreesToRadians)(75),
        },
        {
          type: 0,
          offsetX: 0.35 * Math.sin(Object(f.degreesToRadians)(-60)),
          offsetY: -0.35 * Math.cos(Object(f.degreesToRadians)(-60)),
          length: 0.15,
          width: 0.075,
          reload: 0.75,
          damage: 0.3,
          minDistance: 15,
          maxDistance: 25,
          rot: Object(f.degreesToRadians)(75),
        },
        {
          type: 0,
          offsetX: 0.35 * Math.sin(Object(f.degreesToRadians)(180)),
          offsetY: -0.35 * Math.cos(Object(f.degreesToRadians)(180)),
          length: 0.15,
          width: 0.075,
          reload: 0.75,
          damage: 0.3,
          minDistance: 15,
          maxDistance: 25,
          rot: Object(f.degreesToRadians)(75),
        },
        {
          type: 0,
          offsetX: 0,
          offsetY: 0,
          length: 0.35,
          width: 0.2,
          reload: 0.75,
          damage: 1.25,
          minDistance: 30,
          maxDistance: 40,
          speed: 1.6,
          rot: Object(f.degreesToRadians)(75),
        },
      ],
      C = [{ size: 0.8, sides: 6, rot: 0, offsetX: 0, offsetY: 0 }],
      D = [
        { size: 0.7, sides: 6, rot: 0, offsetX: 0, offsetY: 0 },
        { size: 0.4, sides: 4, rot: 0, offsetX: 0, offsetY: 0 },
      ],
      P = [
        { size: 0.8, sides: 3, rot: 0, offsetX: 0, offsetY: 0 },
        { size: 0.4, sides: 3, rot: 0, offsetX: 0, offsetY: 0 },
      ],
      B = 360 * Math.random(),
      j = [
        {
          tanks: [
            {
              x: 0,
              y: 0,
              size: 40,
              d: Object(f.degreesToRadians)(135),
              sides: 6,
              outerSides: 0,
              outerSize: 0,
              color: u.TEAM_COLORS[0],
              barrels: _,
              gadgets: [],
              layers: [],
            },
            {
              x: 400,
              y: 100,
              size: 30,
              d: Object(f.degreesToRadians)(-68),
              sides: 0,
              outerSides: 0,
              outerSize: 0,
              color: u.TEAM_COLORS[1],
              barrels: h,
              gadgets: [],
              layers: [],
            },
            {
              x: -700,
              y: -100,
              size: 60,
              d: Object(f.degreesToRadians)(74),
              sides: 8,
              outerSides: 0,
              outerSize: 0,
              color: u.TEAM_COLORS[2],
              barrels: g,
              gadgets: [],
              layers: D,
            },
            {
              x: 400,
              y: -500,
              size: 60,
              d: Object(f.degreesToRadians)(28),
              sides: 8,
              outerSides: 5,
              outerSize: 0.55,
              color: u.TEAM_COLORS[3],
              barrels: b,
              gadgets: k,
              layers: C,
            },
            {
              x: -200,
              y: 600,
              size: 50,
              d: Object(f.degreesToRadians)(10),
              sides: 0,
              outerSides: 0,
              outerSize: 0,
              color: u.FALLEN_COLOR,
              barrels: v,
              gadgets: x,
              layers: [],
            },
            {
              x: -900,
              y: -800,
              size: 60,
              d: Object(f.degreesToRadians)(69),
              sides: 0,
              outerSides: 4,
              outerSize: 0.6,
              color: u.TEAM_COLORS[1],
              barrels: y,
              gadgets: [],
              layers: [],
            },
            {
              x: 900,
              y: 200,
              size: 100,
              d: Object(f.degreesToRadians)(69),
              sides: 3,
              outerSides: 3,
              outerSize: 0.3,
              color: u.CELESTIAL_COLOR,
              barrels: E,
              gadgets: [],
              layers: P,
            },
            {
              x: -1100,
              y: 1e3,
              size: 120,
              d: Object(f.degreesToRadians)(69),
              sides: 3,
              outerSides: 0,
              outerSize: 0,
              color: u.CELESTIAL_COLOR,
              barrels: O,
              gadgets: R,
              layers: [{ size: 0.6, sides: 3, rot: 0, offsetX: 0, offsetY: 0 }],
            },
          ],
          polygons: [
            { x: 200, y: -300, level: 4, d: Object(f.degreesToRadians)(32) },
            { x: 500, y: 750, level: 4, d: Object(f.degreesToRadians)(89) },
            { x: -150, y: -250, level: 3, d: Object(f.degreesToRadians)(57) },
            { x: -170, y: 800, level: 3, d: Object(f.degreesToRadians)(-57) },
            { x: -750, y: -600, level: 3, d: Object(f.degreesToRadians)(-98) },
            { x: -690, y: 100, level: 2, d: Object(f.degreesToRadians)(-23) },
            { x: -600, y: 180, level: 2, d: Object(f.degreesToRadians)(85) },
            { x: 420, y: 520, level: 2, d: Object(f.degreesToRadians)(85) },
            { x: 700, y: 700, level: 2, d: Object(f.degreesToRadians)(-74) },
            { x: 650, y: -700, level: 2, d: Object(f.degreesToRadians)(40) },
            { x: 770, y: -90, level: 2, d: Object(f.degreesToRadians)(40) },
            { x: -630, y: 670, level: 1, d: Object(f.degreesToRadians)(40) },
            { x: -680, y: 600, level: 1, d: Object(f.degreesToRadians)(74) },
            { x: -250, y: 1580, level: 1, d: Object(f.degreesToRadians)(-6) },
            { x: -200, y: 1500, level: 1, d: Object(f.degreesToRadians)(-49) },
            { x: 910, y: 40, level: 1, d: Object(f.degreesToRadians)(-49) },
            { x: -910, y: 310, level: 1, d: Object(f.degreesToRadians)(32) },
            { x: -160, y: 400, level: 1, d: Object(f.degreesToRadians)(74) },
            { x: -100, y: 50, level: 0, d: Object(f.degreesToRadians)(32) },
            { x: 500, y: -870, level: 0, d: Object(f.degreesToRadians)(79) },
            { x: -300, y: -800, level: 0, d: Object(f.degreesToRadians)(-82) },
            { x: -500, y: 800, level: 0, d: Object(f.degreesToRadians)(4) },
            { x: 800, y: 850, level: 0, d: Object(f.degreesToRadians)(2) },
            { x: -200, y: 200, level: 0, d: Object(f.degreesToRadians)(-32) },
            { x: -500, y: 300, level: 0, d: Object(f.degreesToRadians)(-32) },
            { x: 500, y: 280, level: 0, d: Object(f.degreesToRadians)(-84) },
            { x: -650, y: -280, level: 0, d: Object(f.degreesToRadians)(-84) },
            { x: -600, y: -270, level: 0, d: Object(f.degreesToRadians)(-24) },
            { x: 580, y: -320, level: 0, d: Object(f.degreesToRadians)(-24) },
          ],
          dimension: {
            visual: {
              gridSize: 30,
              backgroundColor: "#CDCDCD",
              gridColor: "#C8C8C8",
              particles: {
                spawnrate: 0 / (u.CAMERA_SIZE * u.CAMERA_SIZE),
                speed: { min: 0, max: 0 },
                d: { min: 0, max: 360 },
                size: { min: 6, max: 6 },
                lifetime: { min: 30, max: 60 },
                sides: { min: 0, max: 0 },
                transparency: { min: 1, max: 1 },
                color: { min: "#CDCDCD", max: "#C8C8C8" },
              },
            },
            bases: [],
            walls: [],
            gates: [],
            mapSize: 1500,
            trueMapSize: 1,
          },
        },
        {
          polygons: [],
          tanks: [
            {
              x: 0,
              y: 0,
              size: 400,
              d: Object(f.degreesToRadians)(135),
              sides: 3,
              outerSides: 3,
              outerSize: 0.15,
              color: u.CELESTIAL_COLOR,
              barrels: T,
              gadgets: [
                {
                  showParticles: 0,
                  type: 2,
                  sides: 3,
                  backSides: 3,
                  subtype: 2,
                  offsetX: 0,
                  offsetY: 0,
                  radius: 3,
                  width: 0.3,
                  rotationType: 0,
                },
              ],
              layers: [
                {
                  size: 0.7,
                  sides: 3,
                  outerSides: 3,
                  outerSize: 0.15,
                  rot: 0,
                  offsetX: 0,
                  offsetY: 0,
                },
                {
                  size: 0.3,
                  sides: 3,
                  outerSides: 3,
                  outerSize: 0.15,
                  rot: 0,
                  offsetX: 0,
                  offsetY: 0,
                },
              ],
            },
            {
              x: 900,
              y: 200,
              size: 100,
              d: Object(f.degreesToRadians)(69),
              sides: 3,
              outerSides: 3,
              outerSize: 0.3,
              color: u.CELESTIAL_COLOR,
              barrels: E,
              gadgets: [],
              layers: P,
            },
            {
              x: -700,
              y: -600,
              size: 120,
              d: Object(f.degreesToRadians)(35),
              sides: 3,
              outerSides: 0,
              outerSize: 0,
              color: u.CELESTIAL_COLOR,
              barrels: O,
              gadgets: I,
              layers: [{ size: 0.6, sides: 3 }],
            },
            {
              x: -840,
              y: 400,
              size: 120,
              d: Object(f.degreesToRadians)(-72),
              sides: 3,
              outerSides: 3,
              outerSize: 0.5,
              color: u.CELESTIAL_COLOR,
              barrels: M,
              gadgets: [],
              layers: [
                { size: 0.8, sides: 3 },
                { size: 0.4, sides: 3 },
              ],
            },
          ],
          dimension: {
            visual: {
              gridSize: 30,
              backgroundColor: "#595959",
              gridColor: "#4E4D4D",
              particles: {
                spawnrate: 0.5 / (u.CAMERA_SIZE * u.CAMERA_SIZE),
                speed: { min: 2, max: 5 },
                d: { min: 0 + B, max: 90 + B },
                size: { min: 4, max: 8 },
                lifetime: { min: 30, max: 60 },
                sides: { min: 0, max: 0 },
                transparency: { min: 1, max: 1 },
                color: { min: "#595959", max: "#4E4D4D" },
              },
            },
            bases: [{ width: 0.5, height: 0.5, x: 0, y: 0, team: 2 }],
            walls: [],
            gates: [],
            mapSize: 3e3,
            trueMapSize: 1,
          },
        },
        {
          tanks: [
            {
              x: 60,
              y: -60,
              size: 54,
              d: Object(f.degreesToRadians)(135),
              sides: 8,
              outerSides: 0,
              outerSize: 0,
              color: u.TEAM_COLORS[0],
              barrels: m,
              gadgets: [],
              layers: D,
            },
            {
              x: -60,
              y: 60,
              size: 54,
              d: Object(f.degreesToRadians)(315),
              sides: 0,
              outerSides: 0,
              outerSize: 0,
              color: u.TEAM_COLORS[0],
              barrels: S,
              gadgets: A,
              layers: [],
            },
            {
              x: 400,
              y: 100,
              size: 40,
              d: Object(f.degreesToRadians)(-110),
              sides: 0,
              outerSides: 0,
              outerSize: 0,
              color: u.TEAM_COLORS[1],
              barrels: p,
              gadgets: x,
              layers: [],
            },
            {
              x: -600,
              y: -100,
              size: 62,
              d: Object(f.degreesToRadians)(74),
              sides: 8,
              outerSides: 0,
              outerSize: 0,
              color: u.TEAM_COLORS[2],
              barrels: g,
              gadgets: [],
              layers: D,
            },
            {
              x: -100,
              y: -450,
              size: 50,
              d: Object(f.degreesToRadians)(10),
              sides: 0,
              outerSides: 0,
              outerSize: 0,
              color: u.FALLEN_COLOR,
              barrels: v,
              gadgets: x,
              layers: [],
            },
            {
              x: 600,
              y: -600,
              size: 62,
              d: Object(f.degreesToRadians)(28),
              sides: 8,
              outerSides: 5,
              outerSize: 0.55,
              color: u.TEAM_COLORS[3],
              barrels: b,
              gadgets: k,
              layers: C,
            },
            {
              x: 900,
              y: -730,
              size: 60,
              d: Object(f.degreesToRadians)(-69),
              sides: 0,
              outerSides: 4,
              outerSize: 0.6,
              color: u.TEAM_COLORS[1],
              barrels: y,
              gadgets: [],
              layers: [],
            },
            {
              x: 800,
              y: 400,
              size: 150,
              d: Object(f.degreesToRadians)(69),
              sides: 3,
              outerSides: 3,
              outerSize: 0.3,
              color: u.CELESTIAL_COLOR,
              barrels: w,
              gadgets: [],
              layers: [
                { size: 0.35, sides: 3, outerSides: -3, outerSize: 0.5 },
              ],
            },
            {
              x: -700,
              y: -600,
              size: 120,
              d: Object(f.degreesToRadians)(35),
              sides: 3,
              outerSides: 0,
              outerSize: 0,
              color: u.CELESTIAL_COLOR,
              barrels: O,
              gadgets: I,
              layers: [{ size: 0.6, sides: 3 }],
            },
            {
              x: -840,
              y: 400,
              size: 120,
              d: Object(f.degreesToRadians)(-72),
              sides: 3,
              outerSides: 3,
              outerSize: 0.5,
              color: u.CELESTIAL_COLOR,
              barrels: M,
              gadgets: [],
              layers: [
                { size: 0.8, sides: 3 },
                { size: 0.4, sides: 3 },
              ],
            },
          ],
          polygons: [],
          dimension: {
            visual: {
              gridSize: 120,
              showMinimap: false,
              backgroundColor: "#303030",
              gridColor: "#232323",
              wallColor: "#00000054",
              particles: {
                spawnrate: 0.45 / (u.CAMERA_SIZE * u.CAMERA_SIZE),
                speed: { min: 8, max: 15 },
                d: { min: 0 + B, max: 90 + B },
                size: { min: 40, max: 150 },
                lifetime: { min: 30, max: 60 },
                sides: { min: 0, max: 0 },
                transparency: { min: 0.5, max: 0.8 },
                color: { min: "#595959", max: "#4E4D4D" },
              },
              darkness: { intensity: 1, color: "#000000" },
              lights: [
                { x: 0, y: 0, size: 300, d: 0, sides: 0, transparency: 1 },
                {
                  x: 800,
                  y: -400,
                  size: 180,
                  d: 0,
                  sides: 0,
                  transparency: 0.5,
                },
                {
                  x: -700,
                  y: 600,
                  size: 180,
                  d: 0,
                  sides: 0,
                  transparency: 0.5,
                },
                {
                  x: -840,
                  y: -400,
                  size: 225,
                  d: 0,
                  sides: 0,
                  transparency: 0.5,
                },
                {
                  x: 600,
                  y: 600,
                  size: 180,
                  d: 0,
                  sides: 0,
                  transparency: 0.5,
                },
              ],
            },
            bases: [],
            walls: [],
            gates: [],
            mapSize: 3e3,
            trueMapSize: 1,
          },
        },
      ],
      L = n(4),
      U = n(3);
    function N(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return G(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        K(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function z(e, t) {
      var n =
        ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = K(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return r >= e.length ? { done: true } : { done: false, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var o,
        i = true,
        s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (i = e.done), e;
        },
        e: function (e) {
          (s = true), (o = e);
        },
        f: function () {
          try {
            i || null == n.return || n.return();
          } finally {
            if (s) throw o;
          }
        },
      };
    }
    function W(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            i = true,
            s = false;
          try {
            for (
              n = n.call(e);
              !(i = (r = n.next()).done) &&
              (o.push(r.value), !t || o.length !== t);
              i = true
            );
          } catch (e) {
            (s = true), (a = e);
          } finally {
            try {
              i || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          }
          return o;
        })(e, t) ||
        K(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function K(e, t) {
      if (e) {
        if ("string" == typeof e) return G(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? G(e, t)
            : void 0
        );
      }
    }
    function G(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var F = n(1),
      Y = document.getElementById("ping"),
      H = document.getElementById("server-tick-time"),
      V = document.getElementById("client-tick-time"),
      q = document.getElementById("fps"),
      Z = document.getElementById("player-count"),
      X = document.getElementById("total-players"),
      J = document.getElementById("extra-performance-info"),
      $ = document.getElementById("position"),
      Q = document.getElementById("server-name"),
      ee =
        (document.getElementById("server-speed"),
        document.getElementById("chat")),
      te = Array.from(document.getElementsByClassName("hud")),
      ne = true,
      re = false,
      ae = false,
      oe = false,
      ie = [],
      se = [],
      le = 0,
      ue = "",
      ce = "",
      de = 0,
      fe = null,
      he = null;
    function pe(e, t) {
      console.log("RECEIVED ANNOUNCEMENT: ".concat(e, ", ").concat(t)),
        (ue = e),
        (ce = t),
        (de = u.ANNOUNCEMENT_STAY_TIME),
        (fe = null),
        (he = null);
    }
    function _e() {
      de = 0;
    }
    var ge = 0,
      ve = 0,
      me = "";
    function be(e, t) {
      console.log("RECEIVED TIMER: ".concat(e, " ").concat(t, " seconds")),
        (ge = t),
        (ve = t),
        (me = e);
    }
    function ye() {
      (ge = 0), (me = "");
    }
    function Ee(e) {
      (re = true), (ae = e), (se = ie), (ie = []), (vn = []);
    }
    function Oe(e) {
      (ne = e)
        ? (clearTimeout(void 0),
          te.forEach(function (e) {
            e.classList.remove("hidden");
          }))
        : (clearTimeout(void 0),
          te.forEach(function (e) {
            e.classList.add("hidden");
          }));
    }
    var we = true;
    function Te(e) {
      (we = e) && U.g.showChat
        ? ee.classList.remove("hidden")
        : ee.classList.add("hidden");
    }
    var Me,
      Se,
      Ae = true,
      ke = 0,
      xe = 0,
      Re = 0,
      Ie = 0,
      Ce = 0,
      De = 0,
      Pe = false,
      Be = u.TEAM_COLORS[10],
      je = [],
      Le = "main",
      Ue = 0,
      Ne = {},
      ze = -400;
    function We(e) {
      Ue = e;
    }
    var Ke = Date.now(),
      Ge = performance.now(),
      Fe = 16.6666667,
      Ye = null,
      He = document.getElementById("overlay-canvas"),
      Ve = document.getElementById("darkness-canvas"),
      qe = document.getElementById("render-canvas"),
      Ze = document.getElementById("hud-canvas"),
      Xe = document.getElementById("ui-canvas"),
      Je = document.getElementById("game-canvas"),
      $e = Je.getContext("2d");
    vt();
    var Qe = 1,
      et = 1,
      tt = 0,
      nt = 0,
      rt = F.MAP_SIZE,
      at = 1,
      ot = 0,
      it = 0;
    function st(e) {
      Se = Object(o.f)(e);
      for (var t = 0; t < Se.gadgets.length; t++) {
        Se.gadgets[t].animTime = 0;
      }
      for (var n = 0; n < Se.barrels.length; n++) {
        Se.barrels[n].animTime = 0;
      }
    }
    function lt(e) {
      (e = Object(d.k)(xe, e)), (xe = ke), (ke = Math.round(10 * e) / 10);
    }
    function ut() {
      St = false;
      var e = Date.now();
      (Ge = performance.now()), (Fe = (e - Ke) / 1e3), (Ke = e);
      var t = performance.now();
      try {
        Object(d.F)(Fe),
          (function (e) {
            je.forEach(function (t) {
              if (
                ((t.lifetime -= e),
                (t.x += 60 * t.xVel * e),
                (t.y += 60 * t.yVel * e),
                1 != t.friction)
              ) {
                var n = 1 - 60 * (1 - t.friction) * e;
                (t.xVel *= n), (t.yVel *= n);
              }
              t.lifetime < 0 && je.splice(je.indexOf(t), 1);
            });
          })(Fe),
          In(Fe);
        e: if (Ae) {
          var n = Object(o.c)();
          if (n == {} || null == n) return;
          var r = n.tanks,
            c = n.polygons,
            h = n.bullets,
            p = n.rifts,
            _ = n.mapSize,
            g = (n.tickTime, n.x),
            v = n.y;
          if (null != _)
            (et = Object(f.damp)(et, 2 * F.CAMERA_SIZE, 0.05, Fe)),
              (Qe = et / Math.max(Je.height, Je.width)),
              (at = F.STROKE_SIZE / Qe),
              null != g &&
                null != v &&
                ((tt = Object(f.damp)(tt, g, 0.2, Fe) + kn),
                (nt = Object(f.damp)(nt, v, 0.2, Fe) + xn)),
              (rt = _),
              ir(),
              pt(c, r, h, p, null),
              ($e = Je.getContext("2d"));
          else {
            (et = Object(f.damp)(et, 1 * F.CAMERA_SIZE, 0.05, Fe)),
              (Qe = et / Math.max(Je.height, Je.width));
            var m = e / 7500;
            (tt = 200 * Math.cos(m)), (nt = 200 * Math.sin(m));
            var b = j[Ue];
            (rt = b.dimension.mapSize), ir(true);
            for (var y = 0; y < b.tanks.length; y++) {
              var E = b.tanks[y];
              jn(
                E.x,
                E.y,
                E.size,
                E.d,
                E.sides,
                E.outerSides,
                E.outerSize,
                E.color,
                E.barrels,
                E.gadgets,
                E.layers
              );
            }
            for (var O = 0; O < b.tanks.length; O++) {
              var w = b.tanks[O];
              (w.y *= -1), (w.lastColor = w.color), Un(w), (w.y *= -1);
            }
            for (var T = 0; T < b.polygons.length; T++) {
              var M = b.polygons[T];
              Bn(M.x, M.y, M.level, M.d);
            }
            pt([], [], [], [], null), ($e = Je.getContext("2d"));
          }
          if (1 == s.mainMenuState) {
            ($e = He.getContext("2d")).clearRect(0, 0, He.width, He.height);
            var S = He.width / 2,
              A = He.height / 2 - 15 * gt,
              k = Se.isCelestial ? 100 : 50,
              x = Ht / 4,
              R = kt(
                Dt(Se.team, Se.team, Se.id, Se.id),
                Se.isInvulnerable,
                Se.radiant
              );
            Se.outerSize > 0 &&
              wn(
                S,
                A,
                k + Se.outerSize * k,
                F.SPIKE_COLOR,
                Se.outerSides,
                x,
                false,
                1,
                k
              ),
              Gn(S, A, k, x, Se.barrels, false, 1),
              wn(S, A, k, R, Se.sides, x, false, 1),
              Ln(S, A, x, k, R, Se.layers, 0, Se.radiant, false, false, 1),
              zn(S, A, k, x, Se.gadgets, R, 0, Se.radiant, false, false, false, 1),
              ($e = Je.getContext("2d"));
          }
        } else {
          var I = Object(o.c)();
          if (Object(a.isEmpty)(I)) {
            ir();
            break e;
          }
          var C = I.me,
            D = I.tanks,
            P = I.polygons,
            B = I.bullets,
            N = I.rifts,
            K = I.mapSize,
            G = I.tickTime,
            Q = (I.dt, I.dimension),
            ee = I.cameraSizeMultiplier;
          if (((Le = Q), !C)) break e;
          if (G && !Number.isNaN(G)) {
            var te = Object(d.k)(Ie, G);
            (Ie = Re), (Re = Math.round(10 * te) / 10);
          }
          (Be = kt(
            Dt(C.team, C.team, C.id, C.id),
            C.isInvulnerable,
            C.radiant
          )),
            s.isMobile && Object(i.v)(Fe),
            Object(i.e)(),
            i.a && Object(i.r)(i.q + i.b * F.AUTO_SPIN_SPEED * Fe),
            (C.d = i.q),
            L.h &&
              L.g &&
              (L.c.barrels && (C.barrels = L.c.barrels),
              (C.oldGadgets = C.gadgets),
              null != L.b.gadgets && (C.gadgets = L.b.gadgets),
              null != L.b.layers && (C.layers = L.b.layers),
              null != L.b.outerSides && (C.outerSides = L.b.outerSides),
              null != L.b.outerSize && (C.outerSize = L.b.outerSize),
              null != L.b.sides && (C.sides = L.b.sides),
              null != L.b.radiant && (C.radiant = L.b.radiant),
              null != L.b.team && (C.team = L.b.team),
              null != L.b.visualTeam && (C.team = L.b.visualTeam)),
            (rt = K),
            Object.entries(d.c).forEach(function (e) {
              var t = W(e, 2),
                n = t[0],
                r = t[1];
              r.forEach(function (e) {
                (e.time -= Fe), e.time < 0 && r.splice(r.indexOf(e), 1);
              }),
                0 == r.length && delete d.c[n];
            }),
            d.r.forEach(function (e) {
              (e.time -= Fe), e.time < 0 && d.r.splice(d.r.indexOf(e), 1);
            }),
            U.g.staticCamera
              ? ((tt = C.x + kn), (nt = C.y + xn))
              : ((tt = Object(f.damp)(tt, C.x, 1e-6, Fe) + kn),
                (nt = Object(f.damp)(nt, C.y, 1e-6, Fe) + xn)),
            (ot = C.x - tt),
            (it = C.y - nt),
            C.size >= 0.1 &&
              ((et = Object(f.damp)(
                et,
                (0.8 + (C.size / 30) * 0.2) * F.CAMERA_SIZE * (ee || 1),
                0.05,
                Fe
              )),
              (Qe = et / Math.max(Je.height, Je.width))),
            (at = F.STROKE_SIZE / Qe),
            ir(),
            pt(P, D, B, N, C),
            (function (e, t) {
              U.g.showDroneTrajectory &&
                (function () {
                  var e = Je.width / 2 + i.l / Qe,
                    t = Je.height / 2 + i.m / Qe;
                  Zn(e, t, 10 / Qe, "#000000");
                })();
              U.g.minimap &&
                !L.g &&
                (function (e, t) {
                  var n,
                    r = l.b[Le];
                  n = r || l.a;
                  var a = rt / n.trueMapSize,
                    o = Ne.visual.showMinimap,
                    i = false;
                  e &&
                    ((i = e.x > -a && e.x < a && e.y > -a && e.y < a) ||
                      (o = false));
                  (pn = Object(f.damp)(pn, o ? 0.5 : 0, 0.01, Fe)),
                    ($e.globalAlpha = pn),
                    ($e.fillStyle = n.visual.backgroundColor),
                    $e.fillRect(10, 10, 150, 150);
                  for (var s = 0; s < n.bases.length; s++) {
                    var u = n.bases[s];
                    $e.fillStyle = Dt(0, u.team, 0, 0);
                    var c = u.width * n.trueMapSize,
                      d = u.height * n.trueMapSize;
                    $e.fillRect(
                      85 - (150 * (-u.x / n.trueMapSize + c / 2)) / 2,
                      85 - (150 * (-u.y / n.trueMapSize + d / 2)) / 2,
                      (150 * c) / 2,
                      (150 * d) / 2
                    );
                  }
                  if (e && i) {
                    var h = 85 + ((e.x / a) * 150) / 2,
                      p = 85 + ((e.y / a) * 150) / 2;
                    !(function (e, t, n) {
                      var r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 6,
                        a =
                          arguments.length > 4 && void 0 !== arguments[4]
                            ? arguments[4]
                            : 10;
                      ($e.fillStyle = "black"),
                        $e.translate(e, t),
                        $e.rotate(n - Object(f.degreesToRadians)(90)),
                        $e.beginPath(),
                        $e.moveTo(a / 2, 0),
                        $e.lineTo(a / -2, r / 2),
                        $e.lineTo(a / -2, r / -2),
                        $e.fill(),
                        $e.setTransform(1, 0, 0, 1, 0, 0);
                    })(h, p, e.d);
                  }
                  if (t) {
                    $e.globalAlpha = 0.5 * pn;
                    for (var _ = 0; _ < t.length; _++) {
                      var g = t[_];
                      if (g.x > -a && g.x < a && g.y > -a && g.y < a) {
                        var v = 85 + ((g.x / a) * 150) / 2,
                          m = 85 + ((g.y / a) * 150) / 2;
                        _n(v, m, g);
                      }
                    }
                    $e.globalAlpha = pn;
                  }
                  ($e.lineCap = "round"),
                    ($e.strokeStyle = "black"),
                    ($e.lineWidth = F.STROKE_SIZE),
                    $e.strokeRect(10, 10, 150, 150),
                    ($e.globalAlpha = 1);
                })(e, t);
              var n = Dt(e.nameColor, e.nameColor);
              (on = Object(f.damp)(on, i.x ? 1 : 0, 0.05, Fe)),
                (an = Object(f.damp)(an, i.c ? 1 : 0, 0.05, Fe)),
                on > 0.05 && cn(true, e.isCelestial);
              an > 0.05 && cn(false, e.isCelestial);
              var r = Je.width / 2,
                a = Je.height;
              ($e.lineCap = "round"),
                ($e.strokeStyle = "black"),
                ($e.lineWidth = 30),
                $e.beginPath(),
                $e.moveTo(-180 + r, a - 20),
                $e.lineTo(180 + r, a - 20),
                $e.stroke(),
                ($e.strokeStyle = Be),
                ($e.lineWidth = 30 - 2 * F.STROKE_SIZE),
                $e.beginPath(),
                $e.moveTo(-180 + r, a - 20),
                $e.lineTo(
                  360 * Math.min(Math.max(e.score / e.xpToNextLevel, 0), 1) -
                    180 +
                    r,
                  a - 20
                ),
                $e.stroke();
              var o = e.totalScore;
              d.H && d.H.entries[0] && (o = d.H.entries[0].score);
              var c = Math.min(Math.max(e.totalScore / o, 0), 1) || 0;
              ($e.lineCap = "round"),
                ($e.strokeStyle = "black"),
                ($e.lineWidth = 25),
                $e.beginPath(),
                $e.moveTo(-135 + r, a - 50),
                $e.lineTo(135 + r, a - 50),
                $e.stroke(),
                ($e.strokeStyle = Be),
                ($e.lineWidth -= 2 * F.STROKE_SIZE),
                $e.beginPath(),
                $e.moveTo(-135 + r, a - 50),
                $e.lineTo(270 * c - 135 + r, a - 50),
                $e.stroke(),
                tn(
                  r,
                  a - 19,
                  Object(s.roundWithEnding)(e.score) +
                    " / " +
                    Object(s.roundWithEnding)(e.xpToNextLevel),
                  22,
                  F.TEXT_STROKE / 2
                ),
                tn(
                  r,
                  a - 48.5,
                  "Score: ".concat(Object(s.roundWithEnding)(e.totalScore)),
                  18,
                  F.TEXT_STROKE / 2
                ),
                tn(
                  r,
                  a - 77,
                  "Level ".concat(e.level, " ").concat(e.className),
                  18,
                  F.TEXT_STROKE,
                  $e.globalAlpha,
                  n
                ),
                U.g.showNames &&
                  tn(r, a - 113, e.name, 50, F.TEXT_STROKE, $e.globalAlpha, n);
              L.g ||
                ((function () {
                  Gt = false;
                  for (var e = 0; e < d.E.length; e++)
                    if (d.E[e] < F.MAX_UPGRADE_POINTS) {
                      Gt = true;
                      break;
                    }
                  var t = d.M.length > 0 ? d.M : d.q,
                    n = d.b.length > 0 ? d.b : d.p,
                    r =
                      (0 != t.length && Yt > -250) ||
                      (0 != n.length && Ft > -250);
                  ze = s.isMobile
                    ? Object(f.damp)(
                        ze,
                        d.D > 0 && Gt && !r ? 0 : -400,
                        0.05,
                        Fe
                      )
                    : Object(f.damp)(
                        ze,
                        (d.D > 0 && Gt) || i.n ? 0 : -400,
                        0.05,
                        Fe
                      );
                  if (s.isMobile) {
                    var a = Je.width / 2,
                      o = 0,
                      l = 0;
                    if (ze > -380) {
                      for (
                        var u = Math.min(4, Vt.length), c = 0;
                        c < Vt.length;
                        c++
                      ) {
                        var h = Vt[c];
                        $t(
                          a + 400 * (1 == u ? 0 : o / (u - 1) - 0.5),
                          0 + ze + 120 * l + 75,
                          h.name,
                          h.color,
                          d.E[c]
                        ),
                          4 == ++o &&
                            ((o = 0),
                            l++,
                            (u = Math.min(4, Vt.length - c - 1)));
                      }
                      (l += o > 0 ? 1 : 0),
                        (o = 0),
                        d.D > 0 &&
                          Gt &&
                          tn(
                            a,
                            0 + ze - 45 + 120 * l + 75,
                            "x".concat(d.D),
                            30,
                            F.TEXT_STROKE,
                            1,
                            "#ffffff"
                          );
                    }
                  } else
                    ze > -380 &&
                      ((function (e) {
                        for (
                          var t = 0 + e + (L.h ? 60 : 0), n = Je.height, r = 0;
                          r < F.UPGRADE_COUNT;
                          r++
                        )
                          Xt(
                            t + 20,
                            n - 20 - 32 * r,
                            F.WEAPON_UPGRADE_NAMES[F.UPGRADE_COUNT - r - 1],
                            F.UPGRADE_COUNT - r,
                            F.UPGRADE_COLORS[F.UPGRADE_COUNT - r - 1],
                            1
                          );
                        d.D > 0 &&
                          Gt &&
                          tn(
                            t + 295,
                            n - 20,
                            "x".concat(d.D),
                            30,
                            F.TEXT_STROKE,
                            1,
                            "#ffffff",
                            "left"
                          );
                      })(ze),
                      (function (e) {
                        for (
                          var t = Je.width + e, n = Je.height, r = 0;
                          r < F.UPGRADE_COUNT;
                          r++
                        )
                          Xt(
                            t - 20,
                            n - 20 - 32 * r,
                            F.BODY_UPGRADE_NAMES[F.UPGRADE_COUNT - r - 1],
                            F.UPGRADE_COUNT - r + 4,
                            F.UPGRADE_COLORS[F.UPGRADE_COUNT - r - 1],
                            -1
                          );
                        d.D > 0 &&
                          Gt &&
                          tn(
                            t - 295,
                            n - 20,
                            "".concat(d.D, "x"),
                            30,
                            F.TEXT_STROKE,
                            1,
                            "#ffffff",
                            "right"
                          );
                      })(-ze));
                })(),
                (function () {
                  var e = d.M.length > 0 ? d.M : d.q,
                    t = d.b.length > 0 ? d.b : d.p;
                  Yt = Object(f.damp)(Yt, d.M.length > 0 ? 75 : -400, 0.05, Fe);
                  var n = !s.isMobile || !(0 != e.length && Yt > -250);
                  if (
                    ((Ft = Object(f.damp)(
                      Ft,
                      d.b.length > 0 && n ? 75 : -400,
                      0.05,
                      Fe
                    )),
                    s.isMobile)
                  ) {
                    var r = Je.width / 2,
                      a = 0,
                      o = 0,
                      i = 0;
                    if (0 != e.length && Yt > -250) {
                      for (
                        var l = Math.min(4, e.length), c = 0;
                        c < e.length;
                        c++
                      ) {
                        var h = e[c];
                        Jt(
                          r + 400 * (1 == l ? 0 : o / (l - 1) - 0.5),
                          a + Yt + 120 * i,
                          u.POLYGON_COLORS[c],
                          h,
                          true
                        ),
                          4 == ++o &&
                            ((o = 0), i++, (l = Math.min(4, e.length - c - 1)));
                      }
                      (i += o > 0 ? 1 : 0),
                        (o = 0),
                        Qt(r, a + Yt - 60 + 120 * i);
                    } else if (0 != t.length && Ft > -380) {
                      for (
                        var p = Math.min(4, t.length), _ = 0;
                        _ < t.length;
                        _++
                      ) {
                        var g = t[_];
                        Jt(
                          r + 400 * (1 == p ? 0 : o / (p - 1) - 0.5),
                          a + Ft + 120 * i,
                          u.POLYGON_COLORS[_],
                          g,
                          false
                        ),
                          4 == ++o &&
                            ((o = 0), i++, (p = Math.min(4, t.length - _ - 1)));
                      }
                      (i += o > 0 ? 1 : 0),
                        (o = 0),
                        Qt(r, a + Ft - 60 + 120 * i);
                    }
                  } else {
                    (r = 0), (a = Je.height), (o = 0), (i = 0);
                    if (0 != e.length && Yt > -380) {
                      for (var v = 0; v < e.length; v++) {
                        var m = e[v];
                        Jt(
                          r + Yt + 120 * o,
                          a - 200 - 120 * i,
                          u.POLYGON_COLORS[v],
                          m,
                          true
                        ),
                          3 == ++o && ((o = 0), i++);
                      }
                      2 != e[0].upgradeType &&
                        ((i += o > 0 ? 1 : 0),
                        Qt(r + Yt + 120 * (o = 0), a - 200 - 120 * i));
                    }
                    if (((o = 0), (i = 0), 0 != t.length && Ft > -380)) {
                      r = Je.width;
                      for (var b = 0; b < t.length; b++) {
                        var y = t[b];
                        Jt(
                          r - Ft - 120 * o,
                          a - 200 - 120 * i,
                          u.POLYGON_COLORS[b],
                          y,
                          false
                        ),
                          3 == ++o && ((o = 0), i++);
                      }
                      2 != t[0].upgradeType &&
                        ((i += o > 0 ? 1 : 0),
                        Qt(r - Ft - 120 * (o = 0), a - 200 - 120 * i));
                    }
                  }
                })(),
                (function (e) {
                  var t = Je.width;
                  if ((tn(t - 120, 25, "LEADERBOARD", 30, F.TEXT_STROKE), d.H))
                    for (
                      var n = Math.max(d.H.length, 5),
                        r = 200 / n,
                        a = t - 120,
                        o = 35 + 150 / n,
                        i = 0;
                      i < d.H.entries.length;
                      i++
                    ) {
                      var s = d.H.entries[i],
                        l = kt(
                          (1 == s.type ? u.POLYGON_COLORS[s.color] : null) ||
                            Dt(e.team, s.team, e.id, s.id),
                          false,
                          s.radiant
                        ),
                        c = Dt(s.nameColor, s.nameColor),
                        f = o + r * s.index,
                        h = a + 300 * (1 - s.fadeTime),
                        p = 150 / n,
                        _ = 200 * s.scoreRatio;
                      if (d.H.showPlayers) {
                        var g = s.size / n,
                          v = Ht / 10,
                          m = h - 100 - 150 / n;
                        s.outerSize > 0 &&
                          wn(
                            m,
                            f,
                            g + s.outerSize * g,
                            F.SPIKE_COLOR,
                            s.outerSides,
                            v,
                            false,
                            0.2,
                            g
                          ),
                          1 == !s.type && Gn(m, f, g, v, s.barrels, false, 0.2),
                          wn(m, f, g, l, s.sides, v, false, 0.2),
                          1 == !s.type &&
                            (Ln(
                              m,
                              f,
                              v,
                              g,
                              l,
                              s.layers,
                              0,
                              s.radiant,
                              false,
                              false,
                              0.2
                            ),
                            zn(
                              m,
                              f,
                              g,
                              v,
                              s.gadgets,
                              l,
                              0,
                              s.radiant,
                              false,
                              false,
                              0.2
                            ));
                      }
                      ($e.lineCap = "round"),
                        ($e.strokeStyle = "black"),
                        ($e.lineWidth = p),
                        $e.beginPath(),
                        $e.moveTo(h - 100, f),
                        $e.lineTo(h + 100, f),
                        $e.stroke(),
                        ($e.lineWidth = p - (10 * F.STROKE_SIZE) / n),
                        ($e.strokeStyle = l),
                        $e.beginPath(),
                        $e.moveTo(h - 100, f),
                        $e.lineTo(h - 100 + _, f),
                        $e.stroke(),
                        tn(
                          h,
                          f + 1,
                          d.H.showPlayers
                            ? U.g.showNames
                              ? ""
                                  .concat(s.name.slice(0, 3 * n))
                                  .concat("" != s.name ? " - " : "")
                                  .concat(s.formattedScore)
                              : "".concat(s.formattedScore)
                            : s.name.slice(0, 3 * n),
                          Math.min(120 / n, 20),
                          (2.5 * F.TEXT_STROKE) / n,
                          $e.globalAlpha,
                          c
                        );
                    }
                })(e));
              !(function () {
                var e = Je.width / 2,
                  t = 0;
                d.r.forEach(function (n) {
                  var r = Wt(n.time, F.NOTIFICATION_STAY_TIME);
                  en(e, 20 + t, n.message, -1, 25, 0, true, r),
                    (t += r * (n.message.height + 12.5));
                }),
                  ($e.globalAlpha = 1);
              })();
              var h = 0;
              if ((de -= Fe) > 0 && ue) {
                a = 0;
                var p = de > u.ANNOUNCEMENT_FADE_OUT_TIME,
                  _ = (function (e) {
                    var t = u.ANNOUNCEMENT_STAY_TIME,
                      n = 1,
                      r = t - e;
                    r < u.ANNOUNCEMENT_FADE_IN_TIME
                      ? (n = r / u.ANNOUNCEMENT_FADE_IN_TIME)
                      : r > t - u.ANNOUNCEMENT_FADE_OUT_TIME &&
                        (n =
                          1 -
                          (r - (t - u.ANNOUNCEMENT_FADE_OUT_TIME)) /
                            u.ANNOUNCEMENT_FADE_OUT_TIME);
                    return Math.max(Math.min(n, 1), 0);
                  })(de),
                  g = Object(f.ease)(_, 2, true),
                  v = p ? g : 2 - g,
                  m = Object(f.ease)(Math.min(1, 1.15 * g), 2, true);
                (h = m), null == fe && (fe = nn(ue, 60, u.TEXT_STROKE).width);
                var b,
                  y = z(rn);
                try {
                  for (y.s(); !(b = y.n()).done; ) {
                    var E = b.value;
                    tn(
                      r + (fe / 2 - 20 + 70 * v) * E,
                      a - 50 + 130 * m,
                      "-",
                      60,
                      u.TEXT_STROKE,
                      m
                    );
                  }
                } catch (e) {
                  y.e(e);
                } finally {
                  y.f();
                }
                if ((tn(r, a - 50 + 130 * m, ue, 60, u.TEXT_STROKE, m), ce)) {
                  null == he && (he = nn(ce, 30, u.TEXT_STROKE).width);
                  var O,
                    w = z(rn);
                  try {
                    for (w.s(); !(O = w.n()).done; ) {
                      var T = O.value;
                      tn(
                        r + (he / 2 - 20 + 70 * v) * T,
                        a - 30 + 170 * m,
                        "-",
                        30,
                        u.TEXT_STROKE,
                        m
                      );
                    }
                  } catch (e) {
                    w.e(e);
                  } finally {
                    w.f();
                  }
                  tn(r, a - 30 + 170 * m, ce, 30, u.TEXT_STROKE, m);
                }
              }
              if ((ge -= Fe) > 0) {
                a = 0;
                var M = (function (e, t) {
                  var n = 1,
                    r = t - e;
                  r < u.TIMER_FADE_IN_TIME
                    ? (n = r / u.TIMER_FADE_IN_TIME)
                    : r > t - u.TIMER_FADE_OUT_TIME &&
                      (n =
                        1 -
                        (r - (t - u.TIMER_FADE_OUT_TIME)) /
                          u.TIMER_FADE_OUT_TIME);
                  return Math.max(Math.min(n, 1), 0);
                })(ge, ve);
                tn(r, a + 100 + 120 * h, me, 35, u.TEXT_STROKE, M);
                var S = 0,
                  A = 0;
                if (ge < 20) {
                  var k = Object(f.ease)((20 - ge) / 20, 1.3, true);
                  (S = (2 * Math.random() - 1) * k),
                    (A = (2 * Math.random() - 1) * k);
                }
                var x = 1,
                  R = 0;
                ge < 15 &&
                  ((R =
                    (ge - Math.floor(ge)) *
                    Object(f.ease)((15 - ge) / 15, 2, true)),
                  (x = 1 + 0.7 * R));
                var I = jt("ff0000", "ffffff", R);
                tn(
                  r + 6 * S,
                  a + 6 * A + 160 + 120 * h,
                  Math.floor(ge),
                  60 * x,
                  u.TEXT_STROKE,
                  M,
                  I
                );
              }
              s.isMobile &&
                !L.g &&
                (function () {
                  var e,
                    t,
                    n = Je.height,
                    r = z(i.p);
                  try {
                    for (r.s(); !(t = r.n()).done; ) {
                      var a = t.value;
                      (e = a.align * U.b == 1 ? 0 : Je.width),
                        un(
                          a,
                          e + a.align * U.b * +U.g.joystickOffset,
                          n - +U.g.joystickOffset,
                          U.g.joystickSize
                        );
                    }
                  } catch (e) {
                    r.e(e);
                  } finally {
                    r.f();
                  }
                })();
            })(C, N),
            L.h &&
              L.g &&
              C.oldGadgets &&
              ((C.gadgets = C.oldGadgets), delete C.oldGadgets),
            ($e = Je.getContext("2d"));
          var ne = Math.round(10 * (performance.now() - t)) / 10;
          Number.isNaN(ne) ||
            ((ne = Object(d.k)(De, ne)),
            (De = Ce),
            (Ce = Math.round(10 * ne) / 10)),
            ft(Fe),
            (Y.textContent = "Ping: ".concat(ke, "ms")),
            (H.textContent = "Server Tick Time: ".concat(Re, "ms")),
            (V.textContent = "Client Tick Time: ".concat(Ce, "ms")),
            (q.textContent = "FPS: ".concat(dt)),
            (Z.textContent = "Player Count: ".concat(
              d.H ? (d.H.showPlayers ? d.H.playerCount : "???") : 0
            )),
            (X.textContent = "Global Player Count: ".concat(
              d.H && d.H.showPlayers
                ? Math.max(d.G.players + 1, d.H.playerCount)
                : "???"
            )),
            (J.textContent = "Extra Performance Info: T:"
              .concat(D.length + 1, " S:")
              .concat(P.length, " B:")
              .concat(B.length, " P:")
              .concat(je.length, "/")
              .concat(u.MAX_PARTICLES)),
            ($.textContent = "Position: "
              .concat(Object(f.round)(C.x, 2), ", ")
              .concat(Object(f.round)(-C.y, 2))),
            (Y.style.color =
              ke > 250 ? (ke > 500 ? "red" : "yellow") : "white"),
            (H.style.color =
              Re > 8 ? (Re > 1e3 / u.SERVER_TPS ? "red" : "yellow") : "white"),
            (V.style.color =
              Ce > 5 ? (Ce > 16.66 ? "red" : "yellow") : "white"),
            (q.style.color = dt < 50 ? (dt < 15 ? "red" : "yellow") : "white"),
            (Pe = false);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (re) {
          if (0 == ie.length) Object(L.e)();
          else {
            var pe = ie[ie.length - 1],
              _e = L.o.some(function (e) {
                return e.type == pe.type && e.index == pe.index;
              });
            !Object(a.isEqual)(ie, se) || 0 == L.o.length || (_e && ae)
              ? (le = 0)
              : le++;
            var be = ie[ie.length - 1 - le];
            be ? Object(L.r)(be.type, be.index, ae, be.stack) : Object(L.e)();
          }
          re = false;
        }
        (oe = false), setTimeout(ct, 1);
      }
    }
    function ct() {
      requestAnimationFrame(function () {
        ut();
      });
    }
    var dt = 60,
      ft = Object(r.throttle)(500, function (e) {
        dt = Math.round(1 / e);
      });
    function ht() {
      Y.classList.toggle("hidden", !U.g.showPing),
        H.classList.toggle("hidden", !U.g.showTickTime),
        V.classList.toggle("hidden", !U.g.showTickTime),
        q.classList.toggle("hidden", !U.g.showFPS),
        Z.classList.toggle("hidden", !U.g.showPlayerCount),
        X.classList.toggle("hidden", !U.g.showGlobalPlayerCount),
        J.classList.toggle("hidden", !U.g.showExtraPerformanceInfo),
        $.classList.toggle("hidden", !U.g.showPosition),
        Q.classList.toggle("hidden", !U.g.showServerName);
    }
    function pt(e, t, n, r, a) {
      if (
        ((Ye = a),
        (Ht += F.AUTO_SPIN_SPEED * Fe),
        je.forEach(function (e) {
          mt(e) && e.below && En(e);
        }),
        (function () {
          for (var e = Ne.gates, t = 0; t < e.length; t++) {
            var n = e[t],
              r = { x: n.x * rt, y: n.y * rt, size: (n.size / 2) * rt };
            if (mt({ x: r.x, y: r.y, size: r.size }, 3))
              switch (n.type) {
                case 0:
                  var a = (D = performance.now() / 2500) + 0.5,
                    o = D - Math.floor(D),
                    i = a - Math.floor(a),
                    s = 1 + 9 * o,
                    l = 1 + 9 * i;
                  if (
                    (($e.globalAlpha = 0.2 * Math.min(2 * (1 - o), 1)),
                    On(r.x, r.y, 30 * s, r.size, n.rot, "#ffffff", true),
                    ($e.globalAlpha = 0.2 * Math.min(2 * (1 - i), 1)),
                    On(r.x, r.y, 30 * l, r.size, n.rot, "#ffffff", true),
                    ($e.globalAlpha = 1),
                    On(r.x, r.y, 30, r.size, n.rot, "#000000", true),
                    U.g.showParticles)
                  )
                    for (
                      var u = Math.min(0.0025 * r.size * 60 * Fe, 100),
                        c = Math.random();
                      c < u;
                      c += Math.random()
                    ) {
                      var h = 6 * Object(f.generateSign)(),
                        p = Object(d.l)(0.5, 0.8) * (100 / 1.5),
                        _ = (2 * Math.random() - 1) * (r.size - p),
                        g = r.x + Math.cos(n.rot + Fn) * _,
                        v = r.y + Math.sin(n.rot + Fn) * _;
                      Dn(
                        g,
                        v,
                        h * Math.cos(n.rot),
                        h * Math.sin(n.rot),
                        p,
                        Math.random() * Math.PI * 2,
                        0,
                        "#ffffff",
                        50,
                        1,
                        0,
                        1,
                        true
                      );
                    }
                  var m = [
                      r.x + Math.cos(n.rot + Fn) * r.size,
                      r.y + Math.sin(n.rot + Fn) * r.size,
                    ],
                    b = [
                      r.x + Math.cos(n.rot + Fn) * -r.size,
                      r.y + Math.sin(n.rot + Fn) * -r.size,
                    ];
                  Cn((R = Object(d.i)([tt, nt], m, b))[0], R[1], 3);
                  break;
                case 1:
                  St || xt();
                  var y = jt(Nt(At).substring(1), "000000", n.open ? 0.5 : 1),
                    E =
                      ((a =
                        (D = performance.now() / (n.open ? -2500 : 1e3)) + 0.5),
                      (o = D - Math.floor(D)),
                      (i = a - Math.floor(a)),
                      n.open ? 9 : 14);
                  (s = 1 + o * E), (l = 1 + i * E);
                  if (
                    (($e.globalAlpha = 0.2 * Math.min(2 * (1 - o), 1)),
                    On(r.x, r.y, 30 * s, r.size, n.rot, y, true),
                    ($e.globalAlpha = 0.2 * Math.min(2 * (1 - i), 1)),
                    On(r.x, r.y, 30 * l, r.size, n.rot, y, true),
                    ($e.globalAlpha = 1),
                    On(r.x, r.y, 30, r.size, n.rot, y, true),
                    U.g.showParticles)
                  )
                    for (
                      var O = Math.min(0.0035 * r.size * 60 * Fe, 100),
                        w = Math.random();
                      w < O;
                      w += Math.random()
                    ) {
                      var T =
                          Object(d.l)(0.06, 0.12) *
                          (n.open ? 30 : 100) *
                          Object(f.generateSign)(),
                        M = Object(d.l)(0.3, 0.6) * (100 / 1.5),
                        S = (2 * Math.random() - 1) * (r.size - M),
                        A = r.x + Math.cos(n.rot + Fn) * S,
                        k = r.y + Math.sin(n.rot + Fn) * S,
                        x = n.rot + 0.3 * (2 * Math.random() - 1);
                      Dn(
                        A,
                        k,
                        T * Math.cos(x),
                        T * Math.sin(x),
                        M,
                        Math.random() * Math.PI * 2,
                        0,
                        "#000000",
                        50,
                        1,
                        n.open ? 1 : 10,
                        1,
                        true
                      );
                    }
                  (m = [
                    r.x + Math.cos(n.rot + Fn) * r.size,
                    r.y + Math.sin(n.rot + Fn) * r.size,
                  ]),
                    (b = [
                      r.x + Math.cos(n.rot + Fn) * -r.size,
                      r.y + Math.sin(n.rot + Fn) * -r.size,
                    ]);
                  var R = Object(d.i)([tt, nt], m, b);
                  n.open || Cn(R[0], R[1], 3);
                  break;
                case 3:
                  if (n.open)
                    var I = [
                      [-1, -0.3, 2.5, "#000000"],
                      [1, -0.3, 2.5, "#000000"],
                    ];
                  else
                    I = [
                      [-1, -0.5, 2.5, "#000000"],
                      [1, 1, 4.5, "#ffffff"],
                    ];
                  for (var C = 0; C < I.length; C++) {
                    var D,
                      P = I[C];
                    (a = (D = (performance.now() / 2500) * P[1]) + 0.5),
                      (o = D - Math.floor(D)),
                      (i = a - Math.floor(a)),
                      (s = 0.5 + o * P[2]),
                      (l = 0.5 + i * P[2]);
                    $e.globalAlpha = 0.2 * Math.min(2 * (1 - o), 1);
                    var B = 30 * s;
                    On(
                      r.x - Math.sin(-n.rot - Fn) * B * P[0],
                      r.y - Math.cos(-n.rot - Fn) * B * P[0],
                      B,
                      r.size,
                      n.rot,
                      P[3],
                      true
                    ),
                      ($e.globalAlpha = 0.2 * Math.min(2 * (1 - i), 1));
                    var j = 30 * l;
                    On(
                      r.x - Math.sin(-n.rot - Fn) * j * P[0],
                      r.y - Math.cos(-n.rot - Fn) * j * P[0],
                      j,
                      r.size,
                      n.rot,
                      P[3],
                      true
                    ),
                      ($e.globalAlpha = 1);
                  }
                  for (
                    var L = [
                        [60, -7, 0.3, "#000000"],
                        [40, -5, 0.3, "#000000"],
                      ],
                      N = 0;
                    N < L.length;
                    N++
                  )
                    for (
                      var z = L[N],
                        W = z[0],
                        K = 2 * (r.size - W),
                        G = Math.min(
                          Math.floor(
                            Object(f.round)(2 * r.size, 5) / (1.5 * W)
                          ),
                          1e3
                        ),
                        F = 0;
                      F < G;
                      F++
                    ) {
                      var Y =
                          n.rot + D * (F % 2 ? -1 : 1) * (n.open ? -0.7 : 1),
                        H = ((G - 1 ? F / (G - 1) : 0) - 0.5) * K;
                      wn(
                        r.x - Math.sin(n.rot) * H + (Math.cos(n.rot) * W) / 2,
                        r.y + Math.cos(n.rot) * H + (Math.sin(n.rot) * W) / 2,
                        W,
                        z[3],
                        z[1],
                        Y,
                        true,
                        1,
                        z[2] * W
                      );
                    }
                  if (
                    (On(r.x, r.y, 30, r.size, n.rot, "#000000", true),
                    U.g.showParticles)
                  ) {
                    if (n.open)
                      var V = [
                        [-1, 1, 0.5, 0.5, "#000000"],
                        [-1, 1, -0.5, 0.5, "#000000"],
                      ];
                    else
                      V = [
                        [-1, 1, 1, 1, "#ffffff"],
                        [1, 1, 0.5, 0.5, "#000000"],
                      ];
                    for (N = 0; N < V.length; N++)
                      for (
                        var q = V[N],
                          Z = Math.min(0.00125 * r.size * 60 * Fe, 100),
                          X = Math.random();
                        X < Z;
                        X += Math.random()
                      ) {
                        var J = 6 * q[2],
                          $ = Object(d.l)(0.5, 0.8) * (100 / 1.5) * q[3],
                          Q = (2 * Math.random() - 1) * (r.size - $),
                          ee = r.x + Math.cos(n.rot + Fn) * Q,
                          te = r.y + Math.sin(n.rot + Fn) * Q;
                        if (1 == q[0]) {
                          var ne = 50 * J;
                          (ee += Math.sin(-n.rot - Fn) * ne),
                            (te += Math.cos(-n.rot - Fn) * ne);
                        }
                        Dn(
                          ee,
                          te,
                          J * Math.sin(-n.rot + Fn),
                          J * Math.cos(-n.rot + Fn),
                          $,
                          Math.random() * Math.PI * 2,
                          0,
                          q[4],
                          50,
                          1,
                          0,
                          1,
                          true
                        );
                      }
                  }
                  (m = [
                    r.x + Math.cos(n.rot + Fn) * r.size,
                    r.y + Math.sin(n.rot + Fn) * r.size,
                  ]),
                    (b = [
                      r.x + Math.cos(n.rot + Fn) * -r.size,
                      r.y + Math.sin(n.rot + Fn) * -r.size,
                    ]),
                    (R = Object(d.i)([tt, nt], m, b));
                  n.open || Cn(R[0], R[1], 3);
              }
          }
        })(),
        r.forEach(function (e) {
          mt(e, 12) &&
            (function (e, t) {
              var n = t.x,
                r = t.y,
                a = t.size;
              switch ((($e.globalAlpha = 1), t.type)) {
                case 0:
                  var o = kt("#ffffff", false, 10);
                  Cn(n, r, 0.1 * t.size);
                  var i = (O = performance.now() / 500) + 0.5,
                    s = O - Math.floor(O),
                    l = i - Math.floor(i),
                    u = 10 - 9 * s,
                    c = 10 - 9 * l;
                  if (
                    (($e.globalAlpha = 0.2 * Math.min(2 * s, 1)),
                    wn(t.x, t.y, t.size * u, o, 0, 0, true),
                    ($e.globalAlpha = 0.2 * Math.min(2 * l, 1)),
                    wn(t.x, t.y, t.size * c, o, 0, 0, true),
                    ($e.globalAlpha = 1),
                    U.g.showParticles)
                  )
                    for (
                      var f = ((27 + a / 8) / 30) * 60 * Fe, h = Math.random();
                      h < f;
                      h += Math.random()
                    ) {
                      var p = Math.random() * Math.PI * 2,
                        _ = Object(d.l)(0.03 * a, 0.06 * a),
                        g = Object(d.l)(30, 60);
                      Dn(
                        n,
                        r,
                        _ * Math.sin(p),
                        _ * Math.cos(p),
                        Object(d.l)(0.1, 0.6) * (15 + a / 2),
                        Math.random() * Math.PI * 2,
                        0,
                        "#ffffff",
                        g,
                        1,
                        10
                      );
                    }
                  else wn(t.x, t.y, t.size, o, 0, 0, true);
                  break;
                case 1:
                  switch ((Cn(n, r, 1.3), t.subtype)) {
                    case 0:
                      (o = Ct(t.gamemode)),
                        (i = (O = performance.now() / 2500) + 0.5),
                        (s = O - Math.floor(O)),
                        (l = i - Math.floor(i)),
                        (u = 1 + 3 * s),
                        (c = 1 + 3 * l);
                      ($e.globalAlpha = 0.2 * Math.min(2 * (1 - s), 1)),
                        wn(t.x, t.y, t.size * u, o, 0, 0, true),
                        ($e.globalAlpha = 0.2 * Math.min(2 * (1 - l), 1)),
                        wn(t.x, t.y, t.size * c, o, 0, 0, true),
                        ($e.globalAlpha = 1);
                      var v = "#000000";
                      if (
                        (0 !== (w = 1 - Math.min(t.lifetime / 20, 1)) &&
                          (v = Lt(v, Math.floor(256 * w))),
                        wn(t.x, t.y, t.size, v, 0, 0, true),
                        U.g.showParticles)
                      )
                        for (
                          var m = 30 * Fe, b = Math.random();
                          b < m;
                          b += Math.random()
                        ) {
                          var y = Math.random() * Math.PI * 2,
                            E = 0.06 * t.size;
                          Dn(
                            n,
                            r,
                            E * Math.sin(y),
                            E * Math.cos(y),
                            Object(d.l)(0.5, 0.8) * (t.size / 1.5),
                            Math.random() * Math.PI * 2,
                            0,
                            "#ffffff",
                            50,
                            1,
                            0,
                            1,
                            true
                          );
                        }
                      break;
                    case 1:
                      var O = performance.now() / 2500,
                        w =
                          ((v = "#000000"),
                          (o = Ct(t.gamemode)),
                          1 - Math.min(t.lifetime / 20, 1)),
                        T = 2 * -O,
                        M = T + 0.5;
                      (s = T - Math.floor(T)),
                        (l = M - Math.floor(M)),
                        (u = 1 + 5 * s),
                        (c = 1 + 5 * l);
                      if (
                        (($e.globalAlpha = 0.2 * Math.min(2 * (1 - s), 1)),
                        wn(t.x, t.y, t.size * u, o, 0, 0, true),
                        ($e.globalAlpha = 0.2 * Math.min(2 * (1 - l), 1)),
                        wn(t.x, t.y, t.size * c, o, 0, 0, true),
                        ($e.globalAlpha = 1),
                        wn(
                          t.x,
                          t.y,
                          4 * t.size,
                          "#ffffff",
                          -3,
                          20 * Math.cos(O / 10) * t.sign,
                          true,
                          1,
                          0.4 * t.size
                        ),
                        wn(
                          t.x,
                          t.y,
                          0.5 * t.size * (Math.sin(10 * O + Math.PI) + 4),
                          "#ffffff",
                          -6,
                          4 * -O * t.sign,
                          true
                        ),
                        wn(
                          t.x,
                          t.y,
                          0.5 * t.size * (Math.sin(10 * O) + 4),
                          "#ffffff",
                          -6,
                          4 * O * t.sign,
                          true
                        ),
                        ($e.globalAlpha = 1),
                        0 !== w && (v = Lt(v, Math.floor(256 * w))),
                        wn(
                          t.x,
                          t.y,
                          1.3 * t.size,
                          v,
                          -8,
                          -O * t.sign,
                          true,
                          1,
                          0.4 * t.size
                        ),
                        wn(
                          t.x,
                          t.y,
                          1.6 * t.size,
                          v,
                          -6,
                          O * t.sign,
                          true,
                          1,
                          0.4 * t.size
                        ),
                        wn(t.x, t.y, t.size, v, 0, 0, true),
                        U.g.showParticles)
                      )
                        for (
                          var S = 12 * Fe,
                            A = 0.08 * t.size,
                            k = 50 * A,
                            x = Math.random();
                          x < S;
                          x += Math.random()
                        ) {
                          var R = Math.random() * Math.PI * 2,
                            I = Math.sin(R),
                            C = Math.cos(R);
                          Dn(
                            n - k * I,
                            r - k * C,
                            A * I,
                            A * C,
                            Object(d.l)(0.5, 0.8) * (t.size / 1.5),
                            Math.random() * Math.PI * 2,
                            0,
                            "#ffffff",
                            50,
                            1,
                            0,
                            1,
                            true
                          );
                        }
                  }
                  break;
                case 2:
                  var D = kt(
                      (o = Dt(e ? e.team : 0, t.lTeam, e ? e.id : "", t.lID)),
                      false,
                      t.lRadiant
                    ),
                    P = ((O = performance.now()) * t.sign) / 1e3;
                  if (
                    (($e.globalAlpha = 0.5),
                    wn(
                      t.x,
                      t.y,
                      t.size * (2 + Math.cos(O / 1e3) / 2),
                      D,
                      4,
                      P,
                      true
                    ),
                    ($e.globalAlpha = 1),
                    wn(t.x, t.y, t.size, D, 4, P, true),
                    U.g.showParticles)
                  ) {
                    if (Math.random() < 1 / (300 / t.size)) {
                      var B = Math.random() * Math.PI * 2,
                        j = Math.random(),
                        L = j * t.size * (2 + Math.cos(O / 1e3) / 2);
                      Dn(
                        t.x + L * Math.sin(B),
                        t.y + L * Math.cos(B),
                        1 * Math.random() - 0.5,
                        1 * Math.random() - 0.5,
                        18 - 8 * j,
                        Math.random() * Math.PI * 2,
                        4,
                        o,
                        30,
                        0.5,
                        t.lRadiant
                      );
                    }
                    if (t.lRadiant > 0 && Math.random() < 1 / (600 / t.size)) {
                      var N = Math.random() * Math.PI * 2,
                        z = Math.random() * t.size;
                      Dn(
                        t.x + z * Math.sin(N),
                        t.y + z * Math.cos(N),
                        (1 * Math.random() - 0.5) * t.lRadiant,
                        (1 * Math.random() - 0.5) * t.lRadiant,
                        Object(d.l)(6, 6 * t.lRadiant),
                        Math.random(),
                        0,
                        o,
                        60,
                        1,
                        t.lRadiant
                      );
                    }
                  }
              }
            })(a, e);
        }),
        t.forEach(function (e) {
          yn(a, e);
        }),
        e.forEach(function (e) {
          yn(
            a,
            e,
            F.POLYGON_COLORS[e.color] ||
              (a ? Dt(a.team, e.team, a.id, e.id) : Dt(e.team, e.team, 0, 0))
          );
        }),
        n.forEach(function (e) {
          yn(a, e);
        }),
        a && yn(a, a),
        e.forEach(function (e) {
          bn(
            e,
            F.POLYGON_COLORS[e.color] ||
              (a ? Dt(a.team, e.team, a.id, e.id) : Dt(e.team, e.team, 0, 0)),
            e.sides,
            false
          );
        }),
        a && mn(a, a),
        t.forEach(function (e) {
          mn(a, e);
        }),
        n.forEach(function (e) {
          !(function (e, t) {
            var n,
              r = t.x,
              a = t.y;
            ($e.globalAlpha = t.fadeTime),
              (n = e
                ? null != t.color
                  ? Dt(e.team, t.color, e.id, t.parentID)
                  : Dt(e.team, t.team, e.id, t.parentID)
                : Dt(0, t.team, 0, t.parentID));
            var o = Math.round(80 * (1 - t.damageTime || 0)),
              i = Lt(kt(n, false, t.radiant), o);
            t.lastColor = i;
            var s = t.size * (1 + 0.5 * (1 - (t.fadeTime || 1)));
            t.outerSize > 0 &&
              wn(
                r,
                a,
                s + t.outerSize * s,
                F.SPIKE_COLOR,
                t.outerSides,
                t.d,
                true,
                1,
                s
              );
            t.barrels &&
              t.barrels.length > 0 &&
              Gn(r, a, s, t.d, t.barrels, true);
            wn(r, a, s, i, t.sides, t.d, true),
              t.layers && Ln(r, a, t.d, s, i, t.layers, o, t.radiant, false);
            t.gadgets &&
              t.gadgets.length > 0 &&
              zn(r, a, s, t.d, t.gadgets, i, o, t.radiant, false, true);
            $e.globalAlpha = 1;
          })(a, e);
        }),
        n.forEach(function (e) {
          Un(e);
        }),
        a && Un(a),
        t.forEach(function (e) {
          Un(e);
        }),
        je.forEach(function (e) {
          mt(e) && !e.below && En(e);
        }),
        ($e = Ve.getContext("2d")),
        Ne.visual.darkness)
      ) {
        var o = Je.width / 2 - tt / Qe,
          i = Je.height / 2 - nt / Qe;
        ($e.globalAlpha = 1),
          ($e.fillStyle = Ne.visual.darkness.color),
          $e.fillRect(0, 0, Ve.width, Ve.height);
        var s =
          Ne.visual.darkness.intensity *
          (1 + 0.1 * Math.sin(performance.now() / 1e3));
        if (a) {
          ar(o + a.x / Qe, i + a.y / Qe, (4 * a.size) / s / Qe, 1),
            ar(o + a.x / Qe, i + a.y / Qe, (6 * a.size) / s / Qe, 0.5),
            er(o, i, s, a),
            a.radiant > 0 && tr(o, i, s, a);
          for (var l = 0; l < a.barrels.length; l++) {
            var u = a.barrels[l],
              c = u.distance + 2 * u.length,
              h = a.d + u.rot,
              p =
                a.x + (c * Math.sin(h) + u.offset * Math.sin(h + Fn)) * a.size,
              _ =
                a.y - (u.offset * Math.cos(h + Fn) + c * Math.cos(h)) * a.size;
            ar(o + p / Qe, i + _ / Qe, (8 * a.size * u.width) / s / Qe, 0.5),
              nr(
                o + p / Qe,
                i + _ / Qe,
                h,
                (8 * a.size * u.length) / s / Qe,
                (8 * a.size * u.width) / s / Qe,
                (2 * a.size * u.width) / s / Qe,
                1
              );
          }
        }
        t.forEach(function (e) {
          e.gadgets && er(o, i, s, e), e.radiant > 0 && tr(o, i, s, e);
        }),
          e.forEach(function (e) {
            e.radiant > 0 && tr(o, i, s, e);
          }),
          je.forEach(function (e) {
            mt(e) &&
              e.radiant > 0 &&
              (function (e, t, n, r) {
                rr(
                  e + r.x / Qe,
                  t + r.y / Qe,
                  r.d,
                  Math.max(r.size, (1.2 * r.size) / n) / Qe,
                  r.sides,
                  r.transparency *
                    Kt(r.lifetime, r.maxLifetime) *
                    (1 - 1 / (r.radiant + 0.5))
                );
              })(o, i, s, e);
          }),
          n.forEach(function (e) {
            e.gadgets && er(o, i, s, e), e.radiant > 0 && tr(o, i, s, e);
          }),
          r.forEach(function (e) {
            if (mt(e, 12))
              switch (e.type) {
                case 0:
                  var t = (u = performance.now() / 500) + 0.5,
                    n = 10 - 9 * (a = u - Math.floor(u)),
                    r = 10 - 9 * (l = t - Math.floor(t));
                  ar(
                    o + e.x / Qe,
                    i + e.y / Qe,
                    (e.size * n) / Qe,
                    0.3 * Math.min(2 * a, 1)
                  ),
                    ar(
                      o + e.x / Qe,
                      i + e.y / Qe,
                      (e.size * r) / Qe,
                      0.3 * Math.min(2 * l, 1)
                    );
                  break;
                case 1:
                  switch (e.subtype) {
                    case 0:
                      (t = (u = performance.now() / 2500) + 0.5),
                        (n = 1 + 3 * (a = u - Math.floor(u))),
                        (r = 1 + 3 * (l = t - Math.floor(t)));
                      ar(
                        o + e.x / Qe,
                        i + e.y / Qe,
                        (e.size * n) / Qe,
                        0.2 * Math.min(2 * (1 - a), 1)
                      ),
                        ar(
                          o + e.x / Qe,
                          i + e.y / Qe,
                          (e.size * r) / Qe,
                          0.2 * Math.min(2 * (1 - l), 1)
                        );
                      break;
                    case 1:
                      var a, l;
                      (t = (u = performance.now() / -1250) + 0.5),
                        (n = 1 + 5 * (a = u - Math.floor(u))),
                        (r = 1 + 5 * (l = t - Math.floor(t)));
                      ar(
                        o + e.x / Qe,
                        i + e.y / Qe,
                        (e.size * n) / Qe,
                        0.2 * Math.min(2 * (1 - a), 1)
                      ),
                        ar(
                          o + e.x / Qe,
                          i + e.y / Qe,
                          (e.size * r) / Qe,
                          0.2 * Math.min(2 * (1 - l), 1)
                        );
                  }
                  break;
                case 2:
                  var u,
                    c = ((u = performance.now()) * e.sign) / 1e3;
                  rr(
                    o + e.x / Qe,
                    i + e.y / Qe,
                    c,
                    (2 * e.size) / s / Qe,
                    4,
                    1
                  ),
                    ($e.globalAlpha = 0.5),
                    rr(
                      o + e.x / Qe,
                      i + e.y / Qe,
                      c,
                      (3 * e.size) / s / Qe,
                      4,
                      0.5
                    );
              }
          }),
          Ne.gates.forEach(function (e) {
            var t = e.x * rt,
              n = e.y * rt,
              r = (e.size / 2) * rt;
            switch (e.type) {
              case 1:
                var a = performance.now() / (e.open ? -2500 : 1e3),
                  s = a + 0.5,
                  l = a - Math.floor(a),
                  u = s - Math.floor(s),
                  c = e.open ? 9 : 14,
                  d = 1 + u * c;
                or(
                  o + t / Qe,
                  i + n / Qe,
                  (30 * (1 + l * c)) / Qe,
                  r / Qe,
                  e.rot,
                  Math.min(2 * (1 - l), 1) * e.open ? 0.2 : 0.4
                ),
                  or(
                    o + t / Qe,
                    i + n / Qe,
                    (30 * d) / Qe,
                    r / Qe,
                    e.rot,
                    Math.min(2 * (1 - u), 1) * e.open ? 0.2 : 0.4
                  ),
                  ($e.globalAlpha = 1),
                  or(
                    o + t / Qe,
                    i + n / Qe,
                    30 / Qe,
                    r / Qe,
                    e.rot,
                    e.open ? 0.5 : 1
                  );
            }
          }),
          Ne.visual.lights &&
            Ne.visual.lights.forEach(function (e) {
              rr(
                o + e.x / Qe,
                i + e.y / Qe,
                e.d,
                e.size / s / Qe,
                e.sides,
                e.transparency
              ),
                rr(
                  o + e.x / Qe,
                  i + e.y / Qe,
                  e.d,
                  (1.5 * e.size) / s / Qe,
                  e.sides,
                  0.2 * e.transparency
                );
            });
      }
      Ne.visual.darkness || $e.clearRect(0, 0, Ve.width, Ve.height);
      var g = Ne.visual.fog;
      g &&
        (($e.globalCompositeOperation = "destination-over"),
        ($e.globalAlpha =
          g.intensity +
          g.amplitude * Math.cos((performance.now() / 100) * g.frequency)),
        ($e.fillStyle = g.color),
        $e.fillRect(0, 0, Ve.width, Ve.height),
        ($e.globalCompositeOperation = "source-over")),
        ($e = Ze.getContext("2d")).clearRect(0, 0, Ze.width, Ze.height),
        e.forEach(function (e) {
          Mn(
            e,
            F.POLYGON_COLORS[e.color] ||
              (a ? Dt(a.team, e.team, a.id, e.id) : Dt(e.team, e.team, 0, 0)),
            e.showName,
            false
          );
        }),
        a && Tn(a, a),
        t.forEach(function (e) {
          Tn(a, e);
        }),
        ($e = Xe.getContext("2d")).clearRect(0, 0, Xe.width, Xe.height);
    }
    var _t = 1,
      gt = 1;
    function vt() {
      (_t = Math.max(1, 800 / Math.min(window.innerWidth, window.innerHeight))),
        (Je.width = _t * window.innerWidth),
        (Je.height = _t * window.innerHeight),
        (He.width = Je.width),
        (He.height = Je.height),
        (Ze.width = Je.width),
        (Ze.height = Je.height),
        (Xe.width = Je.width),
        (Xe.height = Je.height),
        (Ve.width = Je.width),
        (Ve.height = Je.height),
        (gt = Math.min(Je.height, Je.width) / 100),
        Object(s.setCanvasScale)(_t);
    }
    function mt(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = Math.max(Math.abs(tt - e.x), Math.abs(nt - e.y));
      return et / 2 > n - e.size * t;
    }
    function bt(e) {
      setTimeout(function () {
        if (U.g.showParticles) {
          var t,
            n = Math.min(0.2 * e.size, 100),
            r = 0;
          switch (e.type) {
            case 0:
              switch (e.gateType) {
                case 1:
                  (t = 60), (r = 1);
                  break;
                case 3:
                  t = 60;
              }
              break;
            case 1:
              switch (e.gateType) {
                case 1:
                  (t = 100), (r = 10);
                  break;
                case 3:
                  t = 100;
              }
              break;
            case 2:
              switch (((n *= e.power / 1e4), e.gateType)) {
                case 1:
                  (t = 100), (r = 10), (n *= 0.125);
                  break;
                case 3:
                  (t = 100), (n *= 0.125);
              }
          }
          for (var a = Math.random(); a < n; a += Math.random()) {
            var o =
                Object(d.l)(0.12, 0.24) *
                t *
                (e.direction || Object(f.generateSign)()),
              i = Object(d.l)(0.3, 0.6) * (100 / 1.5),
              s = (2 * Math.random() - 1) * (e.size - i),
              l = e.x + Math.cos(e.rot + Fn) * s,
              u = e.y + Math.sin(e.rot + Fn) * s,
              c = e.rot + 0.3 * (2 * Math.random() - 1);
            Dn(
              l,
              u,
              o * Math.cos(c),
              o * Math.sin(c),
              i,
              Math.random() * Math.PI * 2,
              0,
              "#000000",
              50,
              1,
              r,
              0.95
            );
          }
        }
      }, U.g.renderDelay);
    }
    function yt(e) {
      setTimeout(function () {
        var t,
          n,
          r = e.size / 4;
        Cn(e.x, e.y, 0.05 * e.size, 0.1 * Math.sqrt(e.size));
        for (
          var a = Dt(
              null === (t = Ye) || void 0 === t ? void 0 : t.team,
              e.team,
              null === (n = Ye) || void 0 === n ? void 0 : n.id,
              e.id
            ),
            o = Math.random();
          o < r;
          o += Math.random()
        ) {
          var i = Math.random() * Math.PI * 2,
            s = Object(d.l)(0.08 * e.size, 0.15 * e.size),
            l = Object(d.l)(45, 75);
          Dn(
            e.x,
            e.y,
            s * Math.sin(i),
            s * Math.cos(i),
            Object(d.l)(0.15, 0.22) * e.size,
            Math.random() * Math.PI * 2,
            4,
            a,
            l,
            1,
            e.radiant,
            0.95
          );
        }
      }, 1.2 * U.g.renderDelay);
    }
    function Et(e) {
      setTimeout(function () {
        e.size = Math.min(e.size, 1e3);
        var t = e.size / 2;
        Cn(e.x, e.y, 0.1 * e.size, 0.2 * Math.sqrt(e.size));
        for (var n = Math.random(); n < t; n += Math.random()) {
          var r = Math.random() * Math.PI * 2,
            a = Object(d.l)(0.08 * e.size, 0.15 * e.size),
            o = Object(d.l)(45, 75);
          Dn(
            e.x,
            e.y,
            a * Math.sin(r),
            a * Math.cos(r),
            Object(d.l)(0.5, 0.8) * e.size,
            Math.random() * Math.PI * 2,
            0,
            "#000000",
            o,
            1,
            0,
            1
          );
        }
      }, U.g.renderDelay);
    }
    function Ot(e) {
      setTimeout(function () {
        e.size = Math.min(e.size, 1e3);
        var t = e.size / 2;
        Cn(e.x, e.y, 0.1 * e.size, 0.1 * Math.sqrt(e.size));
        for (var n = Math.random(); n < t; n += Math.random()) {
          var r = Math.random() * Math.PI * 2,
            a = Object(d.l)(0.1 * e.size, 0.2 * e.size),
            o = Object(d.l)(30, 60);
          Dn(
            e.x,
            e.y,
            a * Math.sin(r),
            a * Math.cos(r),
            Object(d.l)(0.5, 0.8) * e.size,
            Math.random() * Math.PI * 2,
            0,
            "#ffffff",
            o,
            1,
            0,
            0.95
          );
        }
      }, U.g.renderDelay);
    }
    function wt(e) {
      setTimeout(function () {
        var t = e.size;
        Cn(e.x, e.y, 0.2 * e.size, 0.1 * Math.sqrt(e.size));
        for (
          var n = Dt(Ye ? Ye.team : 0, e.team, Ye ? Ye.id : 0, e.id),
            r = Math.random();
          r < t;
          r += Math.random()
        ) {
          var a = Math.random() * Math.PI * 2,
            o = Object(d.l)(0.1 * e.size, 0.2 * e.size),
            i = Object(d.l)(30, 60);
          Dn(
            e.x,
            e.y,
            o * Math.sin(a),
            o * Math.cos(a),
            Object(d.l)(3, 12),
            Math.random() * Math.PI * 2,
            0,
            n,
            i,
            1,
            e.radiant,
            0.95
          );
        }
      }, 1.2 * U.g.renderDelay);
    }
    function Tt() {
      (window.onbeforeunload = function () {
        return "Leaving now may result in lost progress.";
      }),
        (Ae = false),
        Oe(true),
        U.g.showChat && we && ee.classList.remove("hidden"),
        L.h && L.i.classList.remove("hidden");
    }
    function Mt() {
      (window.onbeforeunload = function () {}),
        (Ae = true),
        Pn(),
        Rn(),
        Oe(false),
        ee.classList.add("hidden"),
        L.i.classList.add("hidden");
    }
    window.addEventListener(
      "resize",
      Object(r.debounce)(40, function () {
        vt();
      })
    );
    var St = false,
      At = "#ff0000";
    function kt(e, t, n) {
      var r = e;
      return (
        n > 0 &&
          (St || xt(), (r = jt(r.substring(1), Nt(At).substring(1), 0.5 / n))),
        t && (r = Lt(r, Math.round(30 * Math.abs(Math.sin(Ge / 50))))),
        r
      );
    }
    function xt() {
      At = [
        128 * (1 + Math.sin(Ge / 500)),
        128 * (1 + Math.sin(Ge / 500 + Math.PI * (1 / 3))),
        128 * (1 + Math.sin(Ge / 500 + Math.PI * (2 / 3))),
      ];
    }
    function Rt(e, t, n) {
      if (null != t) return Dt(t, t);
      switch (e) {
        case 0:
          return u.POLYGON_COLORS[1];
        case 1:
          return u.POLYGON_COLORS[4];
        case 3:
          return u.POLYGON_COLORS[0];
        case 4:
          return u.POLYGON_COLORS[5];
        default:
          return n;
      }
    }
    var It = Object(a.cloneDeep)(u.GAMEMODE_COLORS);
    function Ct(e) {
      return It[e] || "#ffffff";
    }
    function Dt(e, t, n, r) {
      var a;
      switch (t) {
        default:
          if ("string" == typeof t) return t;
          a = t <= 0 && n == r ? u.TEAM_COLORS[0] : u.TEAM_COLORS[1];
          break;
        case -1:
          a = F.FALLEN_COLOR;
          break;
        case 1:
          a = u.POLYGON_COLORS[1];
          break;
        case 2:
          a = F.CELESTIAL_COLOR;
          break;
        case 3:
          a = u.BARREL_COLOR;
          break;
        case 4:
          a = F.POLYGON_COLORS[0];
          break;
        case 5:
          a = "#000000";
          break;
        case 6:
          a = "#ffffff";
          break;
        case 7:
          a = u.SPIKE_COLOR;
          break;
        case 10:
          a = u.TEAM_COLORS[0];
          break;
        case 11:
          a = u.TEAM_COLORS[1];
          break;
        case 12:
          a = u.TEAM_COLORS[2];
          break;
        case 13:
          a = u.TEAM_COLORS[3];
          break;
        case 20:
          a = u.POLYGON_COLORS[0];
          break;
        case 21:
          a = u.POLYGON_COLORS[1];
          break;
        case 22:
          a = u.POLYGON_COLORS[2];
          break;
        case 23:
          a = u.POLYGON_COLORS[3];
          break;
        case 24:
          a = u.POLYGON_COLORS[4];
          break;
        case 25:
          a = u.POLYGON_COLORS[5];
          break;
        case 26:
          a = u.POLYGON_COLORS[6];
          break;
        case 27:
          a = u.POLYGON_COLORS[7];
          break;
        case 28:
          a = u.POLYGON_COLORS[8];
          break;
        case 29:
          a = u.POLYGON_COLORS[9];
          break;
        case 30:
          a = u.POLYGON_COLORS[10];
      }
      return a;
    }
    Object.keys(It).forEach(function (e) {
      It[e] = jt(It[e].substring(1), "ffffff", 0.65);
    });
    var Pt = {};
    function Bt(e) {
      return Pt[e] || (Pt[e] = Lt(e, u.STROKE_SHADE)), Pt[e];
    }
    function jt(e, t) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.25;
      function r(e) {
        return e.toString(16);
      }
      function a(e) {
        return parseInt(e, 16);
      }
      for (var o = "#", i = 0; i <= 5; i += 2) {
        for (
          var s = a(e.substring(i, i + 2)),
            l = a(t.substring(i, i + 2)),
            u = r(Math.floor(l + (s - l) * n));
          u.length < 2;

        )
          u = "0" + u;
        o += u;
      }
      return o;
    }
    function Lt(e, t) {
      return (
        "#" +
        e.replace(/^#/, "").replace(/../g, function (e) {
          return (
            "0" + Math.min(255, Math.max(0, parseInt(e, 16) + t)).toString(16)
          ).substr(-2);
        })
      );
    }
    function Ut(e) {
      var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return t
        ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
        : null;
    }
    function Nt(e) {
      return (
        "#" +
        ((1 << 24) + (e[0] << 16) + (e[1] << 8) + e[2]).toString(16).slice(1)
      );
    }
    function zt(e, t, n) {
      arguments.length < 3 && (n = 0.5);
      for (var r = e.slice(), a = 0; a < 3; a++)
        r[a] = Math.round(r[a] + n * (t[a] - e[a]));
      return r;
    }
    function Wt(e, t) {
      var n = 1,
        r = t - e;
      return (
        r < u.MSG_FADE_IN_TIME
          ? (n = r / u.MSG_FADE_IN_TIME)
          : r > t - u.MSG_FADE_OUT_TIME &&
            (n = 1 - (r - (t - u.MSG_FADE_OUT_TIME)) / u.MSG_FADE_OUT_TIME),
        Math.max(Math.min(n, 1), 0)
      );
    }
    function Kt(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
        r = 1,
        a = (t /= 60) - e;
      return (
        a < (n /= 60) ? (r = a / n) : a > t - n && (r = 1 - (a - (t - n)) / n),
        r
      );
    }
    for (
      var Gt = false, Ft = 0, Yt = 0, Ht = 0, Vt = [], qt = 0;
      qt < u.WEAPON_UPGRADE_NAMES.length;
      qt++
    )
      Vt.push({
        name: u.WEAPON_UPGRADE_NAMES[qt].split(" "),
        color: u.UPGRADE_COLORS[qt],
      });
    for (var Zt = 0; Zt < u.BODY_UPGRADE_NAMES.length; Zt++)
      Vt.push({
        name: u.BODY_UPGRADE_NAMES[Zt].split(" "),
        color: u.UPGRADE_COLORS[Zt],
      });
    function Xt(e, t, n, r, a, o) {
      var i = 250 * o,
        s = (d.E[r - 1] / F.MAX_UPGRADE_POINTS) * (i - 25 * o);
      ($e.lineCap = "round"),
        ($e.strokeStyle = "black"),
        ($e.lineWidth = 30),
        $e.beginPath(),
        $e.moveTo(e, t),
        $e.lineTo(e + i, t),
        $e.stroke(),
        ($e.lineWidth = 30 - 2 * F.STROKE_SIZE),
        0 != d.E[r - 1] &&
          (($e.strokeStyle = a),
          $e.beginPath(),
          $e.moveTo(e, t),
          $e.lineTo(e + s, t),
          $e.stroke()),
        ($e.strokeStyle =
          d.D > 0 && d.E[r - 1] < F.MAX_UPGRADE_POINTS ? "white" : "grey"),
        $e.beginPath(),
        $e.moveTo(e + i, t),
        $e.lineTo(e + i, t),
        $e.stroke(),
        ($e.strokeStyle = "black"),
        ($e.lineCap = "butt"),
        ($e.lineWidth = 4),
        $e.beginPath(),
        $e.moveTo(e + i + 7, t),
        $e.lineTo(e + i - 7, t),
        $e.moveTo(e + i, t + 7),
        $e.lineTo(e + i, t - 7),
        $e.stroke(),
        ($e.lineCap = "round"),
        tn(
          e + i - 32 * o,
          t + 1.5,
          "[".concat(r, "]"),
          15,
          F.TEXT_STROKE / 2,
          1
        ),
        tn(e + i / 2 - 30 * o, t + 2, n, 20, F.TEXT_STROKE / 2, 1);
    }
    function Jt(e, t, n, r, a) {
      var o =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      ($e.lineCap = "round"),
        ($e.strokeStyle = "black"),
        ($e.lineWidth = u.STROKE_SIZE * o),
        i && (n = u.BARREL_COLOR),
        Hn(e, t, 100 * o, 100 * o, 5, n),
        Hn(e, t + 25 * o, 100 * o, 50 * o, 5, Bt(n)),
        Vn(e, t, 100 * o, 100 * o, 5),
        $e.stroke();
      var s = (r.isCelestial ? 40 : 20) * o,
        l = "",
        c = i ? u.FALLEN_COLOR : Be,
        d = Ht / (i ? 10 : 1);
      switch (r.upgradeType) {
        case 0:
          a
            ? (Gn(e, t, s, d, r.barrels, false, 1 * o),
              wn(e, t, s, c, r.isCelestial ? 3 : 0, d, false, 1 * o))
            : (r.outerSize > 0 &&
                wn(
                  e,
                  t,
                  s + r.outerSize * s,
                  F.SPIKE_COLOR,
                  r.outerSides,
                  d,
                  false,
                  1 * o,
                  s
                ),
              wn(e, t, s, c, r.sides, d, false, 1 * o),
              Ln(
                e,
                t,
                d,
                s,
                c,
                r.layers,
                0,
                Ye.radiant,
                Ye.isInvulnerable,
                false,
                1 * o
              ),
              zn(
                e,
                t,
                s,
                d,
                r.gadgets,
                c,
                0,
                Ye.radiant,
                Ye.isInvulnerable,
                false,
                1 * o
              )),
            (l = r.name);
          break;
        case 1:
          wn(e, t, s, F.CELESTIAL_COLOR, 3, d, false, 1 * o), (l = "ASCEND");
          break;
        case 2:
          wn(e, t, s, F.CELESTIAL_COLOR, 3, d, false, 1 * o), (l = "RETURN");
      }
      ($e.lineCap = "round"),
        tn(
          e,
          t + 35 * o,
          l,
          15 * o,
          (F.TEXT_STROKE / 1.5) * o,
          1,
          i ? u.FALLEN_COLOR : "#ffffff"
        );
    }
    function $t(e, t, n, r, a) {
      var o =
        arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
      ($e.lineCap = "round"),
        ($e.strokeStyle = "black"),
        ($e.lineWidth = u.STROKE_SIZE * o),
        Hn(e, t, 100 * o, 100 * o, 5, r),
        Hn(e, t + 25 * o, 100 * o, 50 * o, 5, Bt(r)),
        Vn(e, t, 100 * o, 100 * o, 5),
        $e.stroke(),
        ($e.lineCap = "round");
      for (var i = 0; i < n.length; i++)
        tn(
          e,
          t - 25 * o + 20 * i,
          n[i],
          15 * o,
          (F.TEXT_STROKE / 1.5) * o,
          1,
          "#ffffff"
        );
      var s = t + 35 * o,
        l = 3 * u.STROKE_SIZE * o,
        c = 80 * o,
        d = (a / F.MAX_UPGRADE_POINTS) * c;
      ($e.lineCap = "round"),
        ($e.strokeStyle = "black"),
        ($e.lineWidth = l),
        $e.beginPath(),
        $e.moveTo(e - c / 2, s),
        $e.lineTo(e + c / 2, s),
        $e.stroke(),
        ($e.lineWidth = l - 2 * F.STROKE_SIZE),
        0 != a &&
          (($e.strokeStyle = r),
          $e.beginPath(),
          $e.moveTo(e - c / 2, s),
          $e.lineTo(e + d - c / 2, s),
          $e.stroke());
    }
    function Qt(e, t) {
      ($e.lineCap = "round"),
        ($e.strokeStyle = "black"),
        ($e.lineWidth = F.STROKE_SIZE),
        Hn(e, t + 30, 100, 40, 5, "#adadad"),
        Hn(e, t + 40, 100, 20, 5, Bt("#adadad")),
        Vn(e, t + 30, 100, 40, 5),
        $e.stroke(),
        ($e.lineCap = "round"),
        tn(e, t + 30, "IGNORE", 20, F.TEXT_STROKE, 1);
    }
    function en(e, t, n) {
      var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        a = arguments.length > 4 ? arguments[4] : void 0,
        o = arguments.length > 5 ? arguments[5] : void 0,
        i = arguments.length > 6 ? arguments[6] : void 0,
        s = arguments.length > 7 ? arguments[7] : void 0;
      if (
        (($e.font = "bold " + a + "px Roboto"),
        ($e.globalAlpha = s),
        ($e.textAlign = "left"),
        ($e.textBaseline = "middle"),
        ($e.lineJoin = "miter"),
        ($e.miterLimit = 2),
        ($e.strokeStyle = "black"),
        !n.width)
      ) {
        for (
          var l = 900, u = [], c = { fullText: "", sections: [] }, f = 0;
          f < n.sections.length;
          f++
        ) {
          var h = n.sections[f],
            p = $e.measureText(c.fullText + h.text).width;
          p < l || "" == c.fullText
            ? ((c.fullText += h.text), c.sections.push(h))
            : (u.push(c), (c = { fullText: h.text, sections: [h] }));
        }
        u.push(c);
        for (var _ = 0, g = u; _ < g.length; _++) {
          for (var v = g[_], m = [], b = 0; b < v.sections.length; b++) {
            for (
              var y = v.sections[b],
                E = m[m.length - 1],
                O = void 0,
                w = void 0,
                T = b;
              T < v.sections.length;
              T++
            ) {
              var M = v.sections[T];
              if ("" != M.text.trim()) {
                (O = M), (w = T);
                break;
              }
            }
            E &&
            E.color == y.color &&
            E.link == y.link &&
            w &&
            (w == b || (w > b && O.color == y.color && O.link == y.link))
              ? (m[m.length - 1].text += y.text)
              : m.push(y);
          }
          v.sections = m;
        }
        for (var S = 0, A = u; S < A.length; S++) {
          var k = A[S];
          k.width = $e.measureText(k.fullText).width;
          var x,
            R = z(k.sections);
          try {
            for (R.s(); !(x = R.n()).done; ) {
              var I = x.value;
              I.width = $e.measureText(I.text).width;
            }
          } catch (e) {
            R.e(e);
          } finally {
            R.f();
          }
        }
        (n.lines = u),
          (n.width = u.slice().sort(function (e, t) {
            return t.width - e.width;
          })[0].width),
          (n.height = n.lines.length * a * 1.2 + 0.3 * a);
      }
      i &&
        Hn(
          e,
          t - (n.height / 2) * r,
          n.width + 1 * a,
          n.height,
          0.4 * a,
          "#0000008c"
        ),
        (e -= n.width / 2),
        (t = t - (n.height / 2) * r - ((n.lines.length - 1) * a * 1.2) / 2);
      var C,
        D = e,
        P = z(n.lines);
      try {
        for (P.s(); !(C = P.n()).done; ) {
          var B = C.value;
          e = D;
          var j,
            L = z(B.sections);
          try {
            for (L.s(); !(j = L.n()).done; ) {
              var U = j.value;
              if (Pe && U.link && ne) {
                var N = { x: e, y: t - 12, width: U.width, height: 25 };
                if (Object(d.m)(Me, N)) {
                  window.open(U.text, "_blank");
                  break;
                }
              }
              ($e.fillStyle = Dt(U.color, U.color)),
                U.link && $e.fillRect(e, t + 11, U.width, 3),
                0 != o && $e.strokeText(U.text, e, t),
                $e.fillText(U.text, e, t),
                (e += U.width);
            }
          } catch (e) {
            L.e(e);
          } finally {
            L.f();
          }
          t += 1.2 * a;
        }
      } catch (e) {
        P.e(e);
      } finally {
        P.f();
      }
    }
    function tn(e, t, n, r, a, o) {
      var i =
          arguments.length > 6 && void 0 !== arguments[6]
            ? arguments[6]
            : "white",
        s =
          arguments.length > 7 && void 0 !== arguments[7]
            ? arguments[7]
            : "center";
      ($e.font = "bold " + r + "px Roboto"),
        ($e.globalAlpha = o),
        ($e.textAlign = s),
        ($e.textBaseline = "middle"),
        ($e.lineJoin = "miter"),
        ($e.miterLimit = 2),
        ($e.lineWidth = a),
        ($e.fillStyle = i),
        ($e.strokeStyle = "black"),
        0 != a && $e.strokeText(n, e, t),
        $e.fillText(n, e, t),
        ($e.globalAlpha = 1);
    }
    function nn(e, t, n) {
      return (
        ($e.font = "bold " + t + "px Roboto"),
        ($e.textAlign = "center"),
        ($e.textBaseline = "middle"),
        ($e.lineJoin = "miter"),
        ($e.miterLimit = 2),
        ($e.lineWidth = n),
        $e.measureText(e)
      );
    }
    var rn = [1, -1];
    var an = 0,
      on = 0,
      sn = 0,
      ln = 0;
    function un(e, t, n, r) {
      ($e.globalAlpha = 0.5),
        Zn(t, n, r, "#000000"),
        Zn(t + e.x * r, n + e.y * r, 0.5 * r, "#000000");
    }
    function cn(e, t) {
      for (
        var n = e ? on : an,
          r = Je.width / 2,
          a = Je.height / 2 - Je.height * (1 - n),
          o = e ? dn : fn,
          i = (t ? d.e.celestial : d.e.normal)[e ? "weapon" : "body"],
          s = [],
          l = 0,
          c = Object.entries(i);
        l < c.length;
        l++
      ) {
        for (
          var f = W(c[l], 2), h = f[0], p = f[1], _ = +h, g = 0;
          g < p.length;
          g++
        )
          for (
            var v = p[g],
              m = Math.min(Je.width / (200 * p.length), 1),
              b = r + Je.width * n * (((g + 1) / (p.length + 1)) * 0.6 - 0.3),
              y = a + Je.height * n * ((_ / i.maxTier) * 0.6 - 0.3),
              E = 0;
            E < v.evolutions.length;
            E++
          ) {
            var O,
              w = i[_ + 1],
              T = v.evolutions[E],
              M = 0;
            for (M = 0; M < w.length; M++)
              if (w[M].id == T) {
                O = w[M];
                break;
              }
            if (!O) return;
            var S = Math.min(Je.width / (200 * w.length), 1),
              A = r + Je.width * n * (((M + 1) / (w.length + 1)) * 0.6 - 0.3),
              k = a + Je.height * n * (((_ + 1) / i.maxTier) * 0.6 - 0.3),
              x = o.includes(v.id) && o.includes(T);
            s.push({
              points: [
                { x: b, y: y + 50 * m },
                { x: b, y: y + 50 * m + 10 },
                { x: A, y: k - 50 * S - 10 },
                { x: A, y: k - 50 * S },
              ],
              width: u.STROKE_SIZE * m,
              priority: x ? 1 : 0,
              color: x ? "black" : u.BARREL_COLOR,
            });
          }
        s.sort(function (e, t) {
          return e.priority - t.priority;
        });
        for (var R = 0; R < s.length; R++) {
          var I = s[R];
          ($e.strokeStyle = I.color),
            ($e.lineWidth = I.width),
            $e.beginPath(),
            $e.moveTo(I.points[0].x, I.points[0].y);
          for (var C = 1; C < I.points.length; C++) {
            var D = I.points[C];
            $e.lineTo(D.x, D.y);
          }
          $e.stroke();
        }
      }
      for (var P = 0, B = Object.entries(i); P < B.length; P++)
        for (
          var j = W(B[P], 2), L = j[0], U = j[1], N = +L, z = 0;
          z < U.length;
          z++
        ) {
          var K = U[z];
          (K.upgradeType = 0),
            (K.isCelestial = t),
            Jt(
              r + Je.width * n * (((z + 1) / (U.length + 1)) * 0.6 - 0.3),
              a + Je.height * n * ((N / i.maxTier) * 0.6 - 0.3),
              u.POLYGON_COLORS[N],
              K,
              e,
              Math.min(Je.width / (200 * U.length), 1),
              !o.includes(K.id)
            );
        }
    }
    var dn = [],
      fn = [];
    function hn(e) {
      for (
        var t = e ? Ye.weaponUpgrade : Ye.bodyUpgrade,
          n = (Ye.isCelestial ? d.e.celestial : d.e.normal)[
            e ? "weapon" : "body"
          ],
          r = 0,
          o = Object.entries(n);
        r < o.length;
        r++
      )
        for (
          var i = W(o[r], 2), s = i[0], l = i[1], u = +s, c = 0;
          c < l.length;
          c++
        ) {
          l[c].id == t && (e ? (sn = u) : (ln = u));
        }
      for (var f, h = [t], p = e ? sn : ln, _ = 0; _ < n[p].length; _++) {
        var g = n[p][_];
        if (g.id == t) {
          f = g;
          break;
        }
      }
      f &&
        ((h = h.concat(
          (function e(t, n, r) {
            for (var o = t[n], i = 0; i < o.length; i++) {
              var s = o[i];
              if (s.id == r) {
                for (var l = [], u = 0; u < s.evolutions.length; u++) {
                  var c = s.evolutions[u];
                  (l = l.concat(e(t, n + 1, c))).push(c);
                }
                return Object(a.uniq)(l);
              }
            }
            return 0;
          })(n, p, t)
        )),
        e ? (dn = h) : (fn = h));
    }
    var pn = 0.5;
    function _n(e, t, n) {
      var r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4;
      switch (n.type) {
        case 0:
          $e.fillStyle = kt(u.FALLEN_COLOR, false, 1);
          break;
        case 1:
          $e.fillStyle = "#000000";
      }
      $e.beginPath(), $e.arc(e, t, r, 0, 2 * Math.PI, false), $e.fill();
    }
    var gn = false,
      vn = [];
    function mn(e, t) {
      var n;
      (n = e ? Dt(e.team, t.team, e.id, t.id) : Dt(0, t.team, 0, t.parentID)),
        (gn = e && e.id == t.id && re),
        bn(t, n, t.sides, true),
        (gn = false);
    }
    function bn(e, t, n, r) {
      var a = Math.round(80 * (1 - e.damageTime || 0)),
        o = Lt(kt(t, e.isInvulnerable, e.radiant), a);
      e.lastColor = o;
      var s = e.x,
        l = e.y,
        u = e.d,
        c = e.size * (1 + 0.5 * (1 - (e.fadeTime || 1)));
      if (
        (($e.globalAlpha = e.fadeTime || 1),
        e.outerSize > 0 &&
          wn(
            s,
            l,
            c + e.outerSize * c,
            F.SPIKE_COLOR,
            e.outerSides,
            u,
            true,
            1,
            c
          ),
        e.barrels && e.barrels.length > 0 && Gn(s, l, c, u, e.barrels, true),
        wn(s, l, c, o, n, u, true),
        e.layers && Ln(s, l, u, c, o, e.layers, a, e.radiant, e.isInvulnerable),
        e.gadgets &&
          e.gadgets.length > 0 &&
          zn(s, l, c, u, e.gadgets, o, a, e.radiant, e.isInvulnerable, true),
        ($e.globalAlpha = 1),
        oe)
      ) {
        var f = {
          x: Je.width / 2 + (s - tt) / Qe,
          y: Je.height / 2 + (l - nt) / Qe,
          r: e.size / Qe,
          rot: u,
        };
        Object(d.n)(Me, f) && (Object(i.i)(e), (oe = false));
      }
    }
    function yn(e, t, n) {
      if (t.radiant > 0) {
        var r = performance.now(),
          a = t.size * (1 + 0.5 * (1 - (t.fadeTime || 1)));
        if (
          (($e.globalAlpha = t.fadeTime || 1),
          n ||
            (n = e
              ? Dt(e.team, t.team, e.id, t.parentID || t.id)
              : Dt(0, t.team, 0, t.parentID)),
          Math.random() < 1 / (600 / t.size))
        ) {
          var o = Math.random() * Math.PI * 2,
            i = Math.random() * t.size;
          Dn(
            t.x + i * Math.sin(o),
            t.y + i * Math.cos(o),
            (1 * Math.random() - 0.5) * t.radiant,
            (1 * Math.random() - 0.5) * t.radiant,
            Object(d.l)(6, 6 * t.radiant),
            Math.random(),
            0,
            n,
            60,
            1,
            t.radiant
          );
        }
        var s = jt(Nt(At).substring(1), "ffffff", 0.5);
        if (t.radiant > 2) {
          if (t.radiant > 3) {
            var l = Math.max(
              1.5 +
                t.radiant / 5 +
                0.06 *
                  (1 + Math.sin((r / 800) * ((1 + t.radiant) / 2))) *
                  t.radiant,
              0.1
            );
            wn(
              t.x,
              t.y,
              (a + (t.outerSize || 0) * a) * l,
              s,
              -3,
              (20 * Math.cos(r / 25e3) * (1 + t.radiant)) / 2,
              true,
              0,
              0.4 * a
            );
          }
          var u = 2 / ((t.radiant + 2) / 5);
          wn(
            t.x,
            t.y,
            (a + (t.outerSize || 0) * a) *
              (Math.cos(r / 500 + Math.PI) / u + 1),
            s,
            -6,
            ((r / 2e3) * (1 + t.radiant)) / 2,
            true,
            0
          ),
            wn(
              t.x,
              t.y,
              (a + (t.outerSize || 0) * a) * (Math.cos(r / 500) / u + 1),
              s,
              -6,
              ((-r / 2e3) * (1 + t.radiant)) / 2,
              true,
              0
            );
        }
        var c = Math.min($e.globalAlpha, 1);
        if (
          (($e.globalAlpha = c * (1 - 0.7 / ((2 + t.radiant) / 3))),
          t.radiant > 1)
        ) {
          var f = Math.max(
            1.2 +
              0.1 *
                (1 + Math.sin((r / 800) * ((2 + t.radiant) / 4))) *
                t.radiant,
            0.1
          );
          wn(
            t.x,
            t.y,
            (a + (t.outerSize || 0) * a) * f,
            s,
            t.outerSize > 0 ? t.outerSides : t.sides,
            t.d,
            true,
            0,
            a * f
          );
        }
        $e.globalAlpha = c;
      }
    }
    function En(e) {
      var t = kt(e.color, false, e.radiant),
        n = e.size;
      ($e.globalAlpha = e.transparency * Kt(e.lifetime, e.maxLifetime)),
        wn(e.x, e.y, n, t, e.sides, e.d, true),
        ($e.globalAlpha = 1);
    }
    function On(e, t, n, r, a, o, i) {
      var s,
        l,
        u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
        c = i ? Qe : 1;
      i
        ? ((s = Je.width / 2 + (e - tt) / c),
          (l = Je.height / 2 + (t - nt) / c))
        : ((s = e), (l = t)),
        Xn(
          s,
          l,
          (2 * n) / c,
          (2 * r) / c,
          a,
          o,
          Bt(o),
          (u * F.STROKE_SIZE) / c
        );
    }
    function wn(e, t, n, r, a, o, i) {
      var s =
          arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
        l = arguments.length > 8 ? arguments[8] : void 0;
      null == l && (l = n / 2);
      var u,
        c,
        d = i ? Qe : 1;
      i
        ? ((u = Je.width / 2 + (e - tt) / d),
          (c = Je.height / 2 + (t - nt) / d))
        : ((u = e), (c = t)),
        0 == a
          ? qn(u, c, n / d, r, Bt(r), (s * F.STROKE_SIZE) / d)
          : a > 0
          ? Qn(u, c, n / d, a, r, Bt(r), (s * F.STROKE_SIZE) / d, o)
          : $n(u, c, n / d, l / d, -a, r, Bt(r), (s * F.STROKE_SIZE) / d, o),
        $e.setTransform(1, 0, 0, 1, 0, 0);
    }
    function Tn(e, t) {
      var n;
      n = e ? Dt(e.team, t.team, e.id, t.id) : Dt(0, t.team, 0, t.parentID);
      var r = t.showName;
      (e && U.g.showNames && (e.id != t.id || U.g.showOwnName)) || (r = false),
        Mn(t, n, r, true);
    }
    function Mn(e, t, n, r) {
      var a = kt(t, e.isInvulnerable, e.radiant),
        o = Dt(e.nameColor, e.nameColor),
        s = e.x,
        l = e.y,
        u = (e.d, Je.width / 2 + (s - tt) / Qe),
        c = Je.height / 2 + (l - nt) / Qe,
        f = e.size * (1 + 0.5 * (1 - (e.fadeTime || 1)));
      if (
        (($e.globalAlpha = e.fadeTime),
        n &&
          (tn(
            u,
            c - f / Qe - 20,
            "lv. " + Math.round(e.level),
            15,
            F.TEXT_STROKE,
            $e.globalAlpha,
            o
          ),
          tn(u, c - f / Qe - 50, e.name, 30, F.TEXT_STROKE, $e.globalAlpha, o)),
        i.j)
      ) {
        var h = [];
        U.g.showIds && h.push(e.id), U.g.showClassNames && h.push(e.className);
        for (var p = 0; p < h.length; p++)
          tn(
            u,
            c - f / Qe + 10 + 23 * p,
            h[p],
            15,
            F.TEXT_STROKE,
            $e.globalAlpha,
            o
          );
      }
      if (e.hp < 0.99 * e.maxHP) {
        var _ = (function (e) {
            for (
              var t = Ut(e),
                n =
                  t.reduce(function (e, t) {
                    return e + t;
                  }) / t.length,
                r = Math.floor(Math.max(n, 70) - n),
                a = 0;
              a < t.length;
              a++
            )
              t[a] = Math.min(t[a] + r, 255);
            return Nt(t);
          })(a),
          g = (f / Qe) * 2,
          v = c + (f + 8) / Qe;
        ($e.lineCap = "round"),
          ($e.strokeStyle = "black"),
          ($e.lineWidth = 2 * at),
          $e.beginPath(),
          $e.moveTo(u - f / Qe, v),
          $e.lineTo(u - f / Qe + g, v),
          $e.stroke(),
          ($e.strokeStyle = Nt(zt(Ut(_), "#000000", 0.8))),
          ($e.lineWidth = at),
          $e.beginPath(),
          $e.moveTo(u - f / Qe, v),
          $e.lineTo(u - f / Qe + g * Math.max(1, 0), v),
          $e.stroke(),
          ($e.strokeStyle = Lt(_, Math.round(80 * (1 - e.damageTime || 0)))),
          ($e.lineWidth = at),
          $e.beginPath(),
          $e.moveTo(u - f / Qe, v),
          $e.lineTo(u - f / Qe + g * (Math.max(e.hp, 0) / e.maxHP), v),
          $e.stroke();
      }
      if (e.id in d.c && U.g.showChat) {
        var m = d.c[e.id],
          b = 0,
          y = (n ? ("" == e.name ? 55 : 95) : 25) - 20;
        m.forEach(function (e) {
          var t = Wt(e.time, F.CHAT_STAY_TIME);
          en(u, c - f / Qe - y - b, e.message, 1, 25, 0, true, t),
            (b += t * (e.message.height + 12.5));
        });
      }
      $e.globalAlpha = 1;
    }
    function Sn(e) {
      ($e = qe.getContext("2d")), (qe.width = 4096), (qe.height = 4096);
      var t = qe.width / 2,
        n = qe.height / 2,
        r = 1.5 * e.size,
        a = e.d,
        o = u.POLYGON_COLORS[e.color] || kt(Dt(e.team, e.team, 0, 0));
      if (e.gadgets) {
        for (var i = 0; i < e.gadgets.length; i++) {
          var s = e.gadgets[i];
          (s.animTime = 0), 0 == s.type && delete s.rot;
        }
        for (var l = 0; l < e.barrels.length; l++) {
          e.barrels[l].animTime = 0;
        }
      }
      e.outerSize > 0 &&
        wn(
          t,
          n,
          r + e.outerSize * r,
          F.SPIKE_COLOR,
          e.outerSides,
          a,
          false,
          1.5,
          r
        ),
        e.gadgets && Gn(t, n, r, a, e.barrels, false, 1.5),
        wn(t, n, r, o, e.sides, a, false, 1.5),
        e.gadgets &&
          (Ln(t, n, a, r, o, e.layers, 0, 0, false, false, 1.5),
          zn(t, n, r, a, e.gadgets, o, 0, 0, false, false, 1.5)),
        ($e = Je.getContext("2d")),
        (function (e, t) {
          var n = e.toDataURL(),
            r = document.createElement("a");
          (r.href = n),
            (r.download = t),
            document.body.appendChild(r),
            r.click();
        })(
          (function (e) {
            var t,
              n,
              r,
              a = e.getContext("2d"),
              o = document.createElement("canvas").getContext("2d"),
              i = a.getImageData(0, 0, e.width, e.height),
              s = i.data.length,
              l = { top: null, left: null, right: null, bottom: null };
            for (t = 0; t < s; t += 4)
              0 !== i.data[t + 3] &&
                ((n = (t / 4) % e.width),
                (r = ~~(t / 4 / e.width)),
                null === l.top && (l.top = r),
                (null === l.left || n < l.left) && (l.left = n),
                (null === l.right || l.right < n) && (l.right = n),
                (null === l.bottom || l.bottom < r) && (l.bottom = r));
            l.bottom++, l.right++;
            var u = l.bottom - l.top,
              c = l.right - l.left,
              d = a.getImageData(l.left, l.top, c, u);
            return (
              (o.canvas.width = c),
              (o.canvas.height = u),
              o.putImageData(d, 0, 0),
              o.canvas
            );
          })(qe),
          "".concat(e.filename, ".png")
        ),
        console.log("Downloading entity: ", e);
    }
    var An = [],
      kn = 0,
      xn = 0;
    function Rn() {
      (An = []), (kn = 0), (xn = 0);
    }
    function In(e) {
      (kn = 0),
        (xn = 0),
        An.forEach(function (t) {
          var n =
            1 /
            (Math.pow(
              (function (e) {
                var t = tt - e.x,
                  n = nt - e.y;
                return Math.sqrt(t * t + n * n);
              })(t),
              2
            ) /
              u.CAMERA_SHAKE_DIST);
          (n = Math.min(1, n)),
            (kn +=
              n * t.power * (t.time / t.maxTime) * (1 - 2 * Math.random())),
            (xn +=
              n * t.power * (t.time / t.maxTime) * (1 - 2 * Math.random())),
            (t.time -= e),
            t.time < 0 && An.splice(An.indexOf(t), 1);
        });
    }
    function Cn(e, t, n) {
      var r =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-4;
      0 != U.g.cameraShake &&
        An.push({
          x: e,
          y: t,
          power: (n * U.g.cameraShake) / 100,
          time: r,
          maxTime: r,
        });
    }
    function Dn(e, t, n, r, a, o, i, s, l) {
      var c =
          arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 1,
        d =
          arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        f =
          arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 1,
        h = arguments.length > 12 && void 0 !== arguments[12] && arguments[12];
      je.length < u.MAX_PARTICLES &&
        U.g.showParticles &&
        je.push({
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
          transparency: c,
          radiant: d,
          friction: f,
          below: h,
        });
    }
    function Pn() {
      je = [];
    }
    function Bn(e, t, n, r) {
      for (
        var a = e, o = -t, i = F.POLYGON_COLORS[n], s = 20, l = 0;
        l < n;
        l++
      )
        s *= 1.5;
      wn(a, o, s, i, 3 + n, r, true);
    }
    function jn(e, t, n, r, a, o, i, s, l) {
      var u =
          arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [],
        c =
          arguments.length > 10 && void 0 !== arguments[10]
            ? arguments[10]
            : [],
        d = e,
        f = -t;
      i > 0 && wn(d, f, n + i * n, F.SPIKE_COLOR, o, r, true, 1, n),
        Gn(d, f, n, r, l, true),
        wn(d, f, n, s, a, r, true),
        Ln(d, f, r, n, s, c, 0, 0, false, true),
        zn(d, f, n, r, u, s, 0, false, s, true);
    }
    function Ln(e, t, n, r, a, o, i, s, l) {
      for (
        var u =
            !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
          c =
            arguments.length > 10 && void 0 !== arguments[10]
              ? arguments[10]
              : 1,
          f = 0;
        f < o.length;
        f++
      ) {
        var h = o[f],
          p = a;
        h.hasOwnProperty("team") &&
          (p = Lt(kt(Dt(h.team, h.team, 0, 0), l, s), i)),
          h.offsetX || (h.offsetX = 0),
          h.offsetY || (h.offsetY = 0);
        var _ = n + (h.rot || 0),
          g =
            e +
            (h.offsetX * Math.sin(1.57079633 - n) +
              h.offsetY * Math.cos(n + 1.57079633)) *
              r,
          v =
            t +
            (h.offsetY * Math.cos(n) + h.offsetX * Math.sin(-n + Math.PI)) * r;
        if (
          (h.outerSize > 0 &&
            wn(
              g,
              v,
              (h.size + h.outerSize) * r,
              h.selected
                ? jt(
                    F.SPIKE_COLOR.substring(1),
                    "ffffff",
                    0.2 + ((1 + Math.sin(performance.now() / 250)) / 2) * 0.8
                  )
                : F.SPIKE_COLOR,
              h.outerSides,
              _,
              u,
              c,
              h.size * r
            ),
          wn(
            g,
            v,
            h.size * r,
            h.selected
              ? jt(
                  p.substring(1),
                  "ffffff",
                  0.2 + ((1 + Math.sin(performance.now() / 250)) / 2) * 0.8
                )
              : p,
            h.sides,
            _,
            u,
            c
          ),
          gn && ne)
        ) {
          var m =
              e + (-h.offsetY * Math.sin(n) + h.offsetX * Math.sin(n + Fn)) * r,
            b =
              t - (h.offsetX * Math.cos(n + Fn) + -h.offsetY * Math.cos(n)) * r,
            y = {
              x: Je.width / 2 + (m - tt) / Qe,
              y: Je.height / 2 + (b - nt) / Qe,
              r: ((h.size + h.outerSize) * r) / Qe,
              rot: n,
            };
          Object(d.n)(Me, y) &&
            ie.push({ type: "layer", index: f, stack: N(vn) });
        }
      }
    }
    function Un(e) {
      var t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (e.gadgets) {
        var n,
          r = e.size * (1 + 0.5 * (1 - (e.fadeTime || 1))),
          a = null !== (n = e.lastColor) && void 0 !== n ? n : "#ffffff",
          o = Math.min(e.fadeTime || 1, 1),
          i = function e(n, r, i, s, l) {
            for (var u = 0; u < l.length; u++) {
              var c = l[u];
              if (
                (2 == c.type &&
                  0 != c.alpha &&
                  (($e.globalAlpha = o * (c.alpha || 0.3)),
                  Nn(
                    n,
                    r,
                    c.offsetX,
                    c.offsetY,
                    c.subtype,
                    c.auraColor,
                    c.rotationType,
                    i,
                    c.rot,
                    s,
                    c.sides,
                    c.radius,
                    a,
                    c.alpha,
                    t && 0 == c.showParticles
                  )),
                3 == c.type)
              ) {
                var d = void 0;
                switch (c.rotationType) {
                  case 0:
                    d = c.baseRot + i;
                    break;
                  case 1:
                    d = null == c.rot ? c.baseRot + i : c.rot;
                    break;
                  case 2:
                    d =
                      null == c.rot
                        ? c.baseRot + i
                        : 0 == c.anchored
                        ? c.baseRot + i + c.rot
                        : c.rot;
                }
                e(
                  n +
                    (c.offsetX * Math.sin(1.57079633 - i) +
                      c.offsetY * Math.cos(i + 1.57079633)) *
                      s,
                  r +
                    (c.offsetY * Math.cos(i) +
                      c.offsetX * Math.sin(-i + Math.PI)) *
                      s,
                  d,
                  c.width * s,
                  c.tank.gadgets
                );
              }
            }
          };
        i(e.x, e.y, e.d, r, e.gadgets), ($e.globalAlpha = 1);
      }
    }
    function Nn(e, t, n, r, a, o, i, s, l, u, c, d, f, h) {
      var p =
          !(arguments.length > 14 && void 0 !== arguments[14]) || arguments[14],
        _ = Rt(a, o, f),
        g = Je.width / 2 + (e - tt) / Qe,
        v = Je.height / 2 + (t - nt) / Qe;
      if (p && Math.random() < 1 / (300 / (u * d))) {
        var m = Math.random() * Math.PI * 2,
          b = Math.random() * (u * d);
        Dn(
          e +
            b * Math.sin(m) +
            (n * Math.sin(1.57079633 - s) + r * Math.cos(s + 1.57079633)) * u,
          t +
            b * Math.cos(m) +
            (r * Math.cos(s) + n * Math.sin(-s + Math.PI)) * u,
          1 * Math.random() - 0.5,
          1 * Math.random() - 0.5,
          6,
          Math.random() * Math.PI * 2,
          c,
          _,
          30,
          h
        );
      }
      $e.translate(g, v),
        $e.rotate(s),
        $e.translate(-g, -v),
        wn(e + n * u, t + r * u, u * d, _, c, (0 == i ? 0 : -s) + l, true);
    }
    function zn(e, t, n, r, a, o, i, s, l, u) {
      for (
        var c =
            arguments.length > 10 && void 0 !== arguments[10]
              ? arguments[10]
              : 1,
          d = 0;
        d < a.length;
        d++
      ) {
        var f = a[d];
        3 == f.type
          ? Kn(d, e, t, n, r, f, o, i, s, l, u, c)
          : Wn(d, e, t, n, r, f, o, u, c);
      }
    }
    function Wn(e, t, n, r, a, o, i, s) {
      var l,
        c,
        f,
        h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 1,
        p = s ? Qe : 1,
        _ = o.width * (1.5 - 0.8 * Math.max(0, o.animTime || 0)) * r,
        g = o.length * (1 - 0.2 * Math.max(0, o.animTime || 0));
      s
        ? ((c = Je.width / 2 + (t - tt) / p),
          (f = Je.height / 2 + (n - nt) / p))
        : ((c = t), (f = n));
      var v = null == o.color ? u.BARREL_COLOR : Dt(o.color, o.color);
      switch (
        (($e.lineJoin = "round"),
        ($e.fillStyle = o.selected
          ? jt(
              v.substring(1),
              "ffffff",
              0.2 + ((1 + Math.sin(performance.now() / 250)) / 2) * 0.8
            )
          : v),
        ($e.lineWidth = (h * F.STROKE_SIZE) / p),
        ($e.strokeStyle = Bt($e.fillStyle)),
        $e.beginPath(),
        $e.translate(c, f),
        $e.rotate(a),
        $e.translate((o.offsetX * r) / p, (o.offsetY * r) / p),
        o.type)
      ) {
        case 0:
          $e.rotate(-a),
            $e.rotate(null !== (l = o.rot) && void 0 !== l ? l : a + o.baseRot),
            $e.rect(
              (-1 * o.width * r) / p,
              (-2 * g * r) / p,
              (o.width * r * 2) / p,
              (2 * r * g) / p
            );
      }
      switch (($e.fill(), $e.stroke(), o.type)) {
        case 0:
          qn(
            0,
            0,
            (1.5 * o.width * r) / p,
            $e.fillStyle,
            $e.strokeStyle,
            (h * F.STROKE_SIZE) / p
          );
          break;
        case 1:
          $e.rotate(o.rot),
            $e.beginPath(),
            $e.rect((_ / p) * -0.5, (_ / p) * -0.5, _ / p, _ / p),
            $e.fill(),
            $e.stroke();
          break;
        case 2:
          $e.setTransform(1, 0, 0, 1, 0, 0),
            $e.translate(c, f),
            $e.rotate(a),
            $e.translate(-c, -f),
            wn(
              t + o.offsetX * r,
              n + o.offsetY * r,
              o.width * r,
              $e.fillStyle,
              o.backSides,
              o.rot,
              s,
              h
            ),
            $e.translate(c, f),
            $e.rotate(a),
            $e.translate(-c, -f),
            wn(
              t + o.offsetX * r,
              n + o.offsetY * r,
              o.width * r * 0.5,
              Rt(o.subtype, o.auraColor, i),
              o.sides,
              (0 == o.rotationType ? 0 : -a) + o.rot,
              s,
              h
            );
      }
      if (gn && ne) {
        var m =
            t + (-o.offsetY * Math.sin(a) + o.offsetX * Math.sin(a + Fn)) * r,
          b = n - (o.offsetX * Math.cos(a + Fn) + -o.offsetY * Math.cos(a)) * r,
          y = {
            x: Je.width / 2 + (m - tt) / Qe,
            y: Je.height / 2 + (b - nt) / Qe,
            r: (o.width * r * (0 == o.type ? 1.5 : 1)) / Qe,
          };
        Object(d.n)(Me, y) &&
          ie.push({ type: "gadget", index: e, stack: N(vn) });
      }
      $e.setTransform(1, 0, 0, 1, 0, 0);
    }
    function Kn(e, t, n, r, a, o, i, s, l, u, c) {
      var f,
        h =
          arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 1;
      switch (o.rotationType) {
        case 0:
          f = o.baseRot + a;
          break;
        case 1:
          f = null == o.rot ? o.baseRot + a : o.rot;
          break;
        case 2:
          f =
            null == o.rot
              ? o.baseRot + a
              : 0 == o.anchored
              ? o.baseRot + a + o.rot
              : o.rot;
      }
      var p,
        _ =
          t +
          (o.offsetX * Math.sin(1.57079633 - a) +
            o.offsetY * Math.cos(a + 1.57079633)) *
            r,
        g =
          n +
          (o.offsetY * Math.cos(a) + o.offsetX * Math.sin(-a + Math.PI)) * r,
        v = i;
      if (
        (null != o.team &&
          (v =
            1 == o.suppressColor
              ? Lt(kt(Dt(o.team, o.team, 0, 0), u, l), s)
              : Dt(o.team, o.team, 0, 0)),
        gn && ne && ((p = N(vn)), vn.push(e)),
        o.outerSize > 0 &&
          wn(
            _,
            g,
            (o.width + o.outerSize) * r,
            o.selected
              ? jt(
                  F.SPIKE_COLOR.substring(1),
                  "ffffff",
                  0.2 + ((1 + Math.sin(performance.now() / 250)) / 2) * 0.8
                )
              : F.SPIKE_COLOR,
            o.outerSides,
            f,
            c,
            h,
            o.width * r
          ),
        Gn(_, g, r * o.width, f, o.tank.barrels, c, h),
        gn && ne)
      ) {
        var m =
            t + (-o.offsetY * Math.sin(a) + o.offsetX * Math.sin(a + Fn)) * r,
          b = n - (o.offsetX * Math.cos(a + Fn) + -o.offsetY * Math.cos(a)) * r,
          y = {
            x: Je.width / 2 + (m - tt) / Qe,
            y: Je.height / 2 + (b - nt) / Qe,
            r: (o.width * r) / Qe,
          };
        Object(d.n)(Me, y) &&
          ie.push({ type: "gadget", index: e, stack: N(vn).slice(0, -1) });
      }
      wn(
        _,
        g,
        o.width * r,
        o.selected
          ? jt(
              v.substring(1),
              "ffffff",
              0.2 + ((1 + Math.sin(performance.now() / 250)) / 2) * 0.8
            )
          : v,
        o.sides,
        f,
        c,
        h
      ),
        Ln(_, g, f, r * o.width, v, o.tank.layers, s, l, u, c, h),
        zn(_, g, r * o.width, f, o.tank.gadgets, v, s, l, u, c, h),
        gn && ne && (vn = p);
    }
    function Gn(e, t, n, r, a, o) {
      for (
        var i =
            arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
          s = 0;
        s < a.length;
        s++
      ) {
        var l = a[s];
        Yn(
          s,
          e,
          t,
          n,
          r + l.rot,
          l.offset,
          l.distance,
          l.width,
          l.length,
          l.animTime,
          null == l.visualType ? l.type : l.visualType,
          o,
          i,
          l.selected,
          l.color
        );
      }
    }
    var Fn = Math.PI / 2;
    function Yn(e, t, n, r, a, o, i, s, l, c, f, h) {
      var p,
        _,
        g =
          arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
        v = arguments.length > 13 ? arguments[13] : void 0,
        m = arguments.length > 14 ? arguments[14] : void 0,
        b = h ? Qe : 1,
        y = l * (1 - 0.2 * Math.max(0, c || 0));
      h
        ? ((p = Je.width / 2 + (t - tt) / b),
          (_ = Je.height / 2 + (n - nt) / b))
        : ((p = t), (_ = n));
      var E = null == m ? u.BARREL_COLOR : Dt(0, m);
      switch (
        (($e.lineJoin = "round"),
        ($e.fillStyle = v
          ? jt(
              E.substring(1),
              "ffffff",
              0.2 + ((1 + Math.sin(performance.now() / 250)) / 2) * 0.8
            )
          : E),
        ($e.lineWidth = (g * F.STROKE_SIZE) / b),
        ($e.strokeStyle = Bt($e.fillStyle)),
        $e.beginPath(),
        $e.translate(p, _),
        $e.rotate(a),
        $e.translate((o * r) / b, (-i * r) / b),
        f)
      ) {
        case 0:
          $e.rect(
            (-1 * s * r) / b,
            (-2 * y * r) / b,
            (s * r * 2) / b,
            (2 * r * y) / b
          );
          break;
        case 1:
          Jn(
            (-1 * s * r) / b,
            0 / b,
            (s * r * 2) / b,
            (-2 * r * y) / b,
            (s * r) / b
          );
          break;
        case 2:
          $e.rect(
            (-0.5 * s * r) / b,
            (-1.5 * y * r) / b,
            (s * r) / b,
            (1.5 * r * y) / b
          ),
            $e.fill(),
            $e.stroke(),
            Jn(
              (-1 * s * r) / b,
              (-1.5 * r * y) / b,
              (s * r * 2) / b,
              (-2 * r * y) / b,
              (s * r) / b
            );
          break;
        case 3:
          $e.rect(
            (-s * r) / b,
            (-1.33333333333 * y * r) / b,
            (s * r * 2) / b,
            (1.33333333333 * r * y) / b
          ),
            $e.fill(),
            $e.stroke(),
            $e.rect(
              (-0.7 * s * r) / b,
              (-1.3333333333 * y * r) / b,
              (1.4 * s * r) / b,
              (-0.3333333333 * r * y) / b
            ),
            $e.fill(),
            $e.stroke(),
            $e.rect(
              (-s * r) / b,
              (-1.66666666666666 * y * r) / b,
              (s * r * 2) / b,
              (-0.3333333333 * r * y) / b
            ),
            $e.fill(),
            $e.stroke();
          break;
        case 4:
          Jn(
            (-1 * s * r) / b,
            0 / b,
            (s * r * 2) / b,
            (-1.3333333333 * r * y) / b,
            (s * r) / b
          ),
            $e.rect(
              (-0.7 * s * r) / b,
              (-1.3333333333 * y * r) / b,
              (1.4 * s * r) / b,
              (-0.3333333333 * r * y) / b
            ),
            $e.fill(),
            $e.stroke(),
            Jn(
              (-0.5 * s * r) / b,
              (-1.66666666666666 * y * r) / b,
              (s * r) / b,
              (-2 * r * y) / b,
              (s * r * 2) / b
            );
          break;
        case 5:
          Jn(
            (-1 * s * r) / b,
            0 / b,
            (s * r * 2) / b,
            (-1.3333333333 * r * y) / b,
            (s * r) / b
          ),
            $e.rect(
              (-0.7 * s * r) / b,
              (-1.3333333333 * y * r) / b,
              (1.4 * s * r) / b,
              (-0.3333333333 * r * y) / b
            ),
            $e.fill(),
            $e.stroke(),
            Jn(
              (-1 * s * r) / b,
              (-1.66666666666666 * y * r) / b,
              (2 * s * r) / b,
              (-2 * r * y) / b,
              (s * r) / b
            );
          break;
        case 6:
          Jn(
            (-0.5 * s * r) / b,
            0 / b,
            (s * r * 1) / b,
            (-2 * r * y) / b,
            (s * r * 2) / b
          );
          break;
        case 7:
          $e.rect(
            (-s * r) / b,
            (-1.33333333333 * y * r) / b,
            (s * r * 2) / b,
            (1.33333333333 * r * y) / b
          ),
            $e.fill(),
            $e.stroke(),
            Jn(
              (-1 * s * r) / b,
              (-1.33333333333 * y * r) / b,
              (2 * s * r) / b,
              (-1.6666666666666 * r * y) / b,
              (s * r) / b
            ),
            $e.rect(
              (-s * r) / b,
              (-1.66666666666666 * y * r) / b,
              (s * r * 2) / b,
              (-0.3333333333 * r * y) / b
            ),
            $e.fill(),
            $e.stroke();
          break;
        case 8:
          $e.rect(
            (-0.5 * s * r) / b,
            (-1.33333333333 * y * r) / b,
            (s * r) / b,
            (1.33333333333 * r * y) / b
          ),
            $e.fill(),
            $e.stroke(),
            Jn(
              (-1 * s * r) / b,
              (-1.33333333333 * y * r) / b,
              (2 * s * r) / b,
              (-1.6666666666666 * r * y) / b,
              (s * r) / b
            ),
            $e.rect(
              (-s * r) / b,
              (-1.66666666666666 * y * r) / b,
              (s * r * 2) / b,
              (-0.3333333333 * r * y) / b
            ),
            $e.fill(),
            $e.stroke();
          break;
        case 9:
          Jn(
            (-0.5 * s * r) / b,
            0 / b,
            (s * r) / b,
            (-1.3333333333 * r * y) / b,
            (s * r * 2) / b
          ),
            $e.fill(),
            $e.stroke(),
            $e.rect(
              (-0.6666666666666 * s * r) / b,
              (-1.3333333333 * y * r) / b,
              (1.3333333333 * s * r) / b,
              (-0.3333333333 * r * y) / b
            ),
            $e.fill(),
            $e.stroke(),
            Jn(
              (-1 * s * r) / b,
              (-1.66666666666666 * y * r) / b,
              (2 * s * r) / b,
              (-2 * r * y) / b,
              (s * r) / b
            );
      }
      if (
        ($e.fill(), $e.stroke(), $e.setTransform(1, 0, 0, 1, 0, 0), gn && ne)
      ) {
        var O = y,
          w = i + O,
          T = o,
          M = t + (w * Math.sin(a) + T * Math.sin(a + Fn)) * r,
          S = n - (T * Math.cos(a + Fn) + w * Math.cos(a)) * r,
          A = s * r * 2,
          k = O * r * 2,
          x = {
            x: Je.width / 2 + (M - tt) / b,
            y: Je.height / 2 + (S - nt) / b,
            height: k / b,
            width: A / b,
            rot: a,
          };
        Object(d.o)(Me, x) &&
          ie.push({ type: "barrel", index: e, stack: N(vn) });
      }
    }
    function Hn(e, t, n, r, a, o) {
      n < 2 * a && (a = n / 2),
        r < 2 * a && (a = r / 2),
        (e -= n / 2),
        (t -= r / 2),
        $e.beginPath(),
        $e.moveTo(e + a, t),
        $e.arcTo(e + n, t, e + n, t + r, a),
        $e.arcTo(e + n, t + r, e, t + r, a),
        $e.arcTo(e, t + r, e, t, a),
        $e.arcTo(e, t, e + n, t, a),
        $e.closePath(),
        ($e.fillStyle = o),
        $e.fill();
    }
    function Vn(e, t, n, r, a) {
      n < 2 * a && (a = n / 2),
        r < 2 * a && (a = r / 2),
        (e -= n / 2),
        (t -= r / 2),
        $e.beginPath(),
        $e.moveTo(e + a, t),
        $e.arcTo(e + n, t, e + n, t + r, a),
        $e.arcTo(e + n, t + r, e, t + r, a),
        $e.arcTo(e, t + r, e, t, a),
        $e.arcTo(e, t, e + n, t, a),
        $e.closePath();
    }
    function qn(e, t, n, r, a, o) {
      ($e.lineJoin = "round"),
        $e.beginPath(),
        $e.arc(e, t, n, 0, 2 * Math.PI, false),
        ($e.fillStyle = r),
        ($e.lineWidth = o),
        ($e.strokeStyle = a),
        $e.fill(),
        $e.stroke();
    }
    function Zn(e, t, n, r) {
      $e.beginPath(),
        $e.arc(e, t, n, 0, 2 * Math.PI, false),
        ($e.fillStyle = r),
        $e.fill();
    }
    function Xn(e, t, n, r, a, o, i, s) {
      ($e.lineJoin = "round"),
        $e.beginPath(),
        $e.translate(e, t),
        $e.rotate(a),
        $e.rect(-n / 2, -r / 2, n, r),
        ($e.fillStyle = o),
        ($e.lineWidth = s),
        ($e.strokeStyle = i),
        $e.fill(),
        $e.stroke(),
        $e.setTransform(1, 0, 0, 1, 0, 0);
    }
    function Jn(e, t, n, r, a) {
      ($e.lineJoin = "round"),
        $e.beginPath(),
        $e.moveTo(e + (n - a) / 2, t),
        $e.lineTo(e + n - (n - a) / 2, t),
        $e.lineTo(e + n, r),
        $e.lineTo(e, r),
        $e.closePath();
    }
    function $n(e, t, n, r, a, o, i, s, l) {
      ($e.lineJoin = "round"),
        $e.beginPath(),
        $e.translate(e, t),
        $e.rotate(l),
        a % 2 != 0 && $e.rotate((-90 * Math.PI) / 180),
        $e.moveTo(n * Math.cos(0), n * Math.sin(0)),
        $e.lineTo(
          r * Math.cos((1 * Math.PI) / a),
          r * Math.sin((1 * Math.PI) / a)
        );
      for (var u = 1; u <= a; u += 1)
        $e.lineTo(
          n * Math.cos((2 * u * Math.PI) / a),
          n * Math.sin((2 * u * Math.PI) / a)
        ),
          $e.lineTo(
            r * Math.cos((2 * (u + 0.5) * Math.PI) / a),
            r * Math.sin((2 * (u + 0.5) * Math.PI) / a)
          );
      ($e.fillStyle = o),
        ($e.lineWidth = s),
        ($e.strokeStyle = i),
        $e.fill(),
        $e.stroke();
    }
    function Qn(e, t, n, r, a, o, i, s) {
      ($e.lineJoin = "round"),
        $e.beginPath(),
        $e.translate(e, t),
        $e.rotate(s),
        r % 2 != 0 && $e.rotate((-90 * Math.PI) / 180),
        $e.moveTo(n * Math.cos(0), n * Math.sin(0));
      for (var l = 1; l <= r + 1; l += 1)
        $e.lineTo(
          n * Math.cos((2 * l * Math.PI) / r),
          n * Math.sin((2 * l * Math.PI) / r)
        );
      ($e.fillStyle = a),
        $e.fill(),
        ($e.lineWidth = i),
        ($e.strokeStyle = o),
        $e.stroke();
    }
    function er(e, t, n, r) {
      for (
        var a = r.size * (1 + 0.5 * (1 - (r.fadeTime || 1))), o = 0;
        o < r.gadgets.length;
        o++
      ) {
        var i = r.gadgets[o];
        if (2 == i.type) {
          var s =
              r.x +
              (-i.offsetY * Math.sin(r.d) + i.offsetX * Math.sin(r.d + Fn)) * a,
            l =
              r.y -
              (i.offsetX * Math.cos(r.d + Fn) + -i.offsetY * Math.cos(r.d)) * a,
            u = (0 == i.rotationType ? r.d : 0) + i.rot;
          rr(
            e + s / Qe,
            t + l / Qe,
            u,
            (1 * a * i.radius) / Qe,
            i.sides,
            r.fadeTime
          ),
            rr(
              e + s / Qe,
              t + l / Qe,
              u,
              (1.5 * a * i.radius) / n / Qe,
              i.sides,
              0.2 * r.fadeTime
            );
        }
      }
    }
    function tr(e, t, n, r) {
      var a = r.size * (1 + 0.5 * (1 - (r.fadeTime || 1))),
        o = performance.now(),
        i = 1 - 1 / (r.radiant + 0.5);
      r.radiant > 2 && (i = 1);
      var s = Math.min(1, r.fadeTime || 1);
      if (
        (rr(
          e + r.x / Qe,
          t + r.y / Qe,
          r.d,
          Math.max(a, (1.2 * a) / n) / Qe,
          r.sides,
          s * i
        ),
        r.radiant > 2)
      ) {
        if (r.radiant > 3) {
          var l = Math.max(
            1.5 +
              r.radiant / 5 +
              0.06 *
                (1 + Math.sin((o / 800) * ((1 + r.radiant) / 2))) *
                r.radiant,
            0.1
          );
          rr(
            e + r.x / Qe,
            t + r.y / Qe,
            (20 * Math.cos(o / 25e3) * (1 + r.radiant)) / 2,
            (a * l * (1 + (r.outerSize || 0))) / Qe,
            -3,
            s * i,
            (0.4 * a) / Qe
          );
        }
        var u = 2 / ((r.radiant + 2) / 5);
        rr(
          e + r.x / Qe,
          t + r.y / Qe,
          ((o / 2e3) * (1 + r.radiant)) / 2,
          ((a + (r.outerSize || 0) * a) *
            (Math.cos(o / 500 + Math.PI) / u + 1)) /
            Qe,
          -6,
          s * i
        ),
          rr(
            e + r.x / Qe,
            t + r.y / Qe,
            ((-o / 2e3) * (1 + r.radiant)) / 2,
            ((a + (r.outerSize || 0) * a) * (Math.cos(o / 500) / u + 1)) / Qe,
            -6,
            s * i
          );
      }
      if (((i *= 1 - 0.7 / ((2 + r.radiant) / 3)), r.radiant > 1)) {
        var c = Math.max(
          1.2 +
            0.1 * (1 + Math.sin((o / 800) * ((2 + r.radiant) / 4))) * r.radiant,
          0.1
        );
        rr(
          e + r.x / Qe,
          t + r.y / Qe,
          r.d,
          (a * c * 2 * (1 + (r.outerSize || 0))) / Qe,
          r.outerSize > 0 ? r.outerSides : r.sides,
          s * i
        );
      }
    }
    function nr(e, t, n, r, a, o, i) {
      var s = $e.globalAlpha;
      ($e.globalAlpha = i),
        ($e.globalCompositeOperation = "destination-out"),
        ($e.lineJoin = "round"),
        ($e.lineWidth = a / 2),
        $e.translate(e, t),
        $e.rotate(n - Object(f.degreesToRadians)(90)),
        $e.beginPath(),
        $e.moveTo(0, o / 2),
        $e.lineTo(r, a / 2),
        $e.lineTo(r, a / -2),
        $e.lineTo(0, o / -2),
        $e.fill(),
        $e.stroke(),
        $e.setTransform(1, 0, 0, 1, 0, 0),
        ($e.globalCompositeOperation = "source-over"),
        ($e.globalAlpha = s);
    }
    function rr(e, t, n, r, a, o, i) {
      null == i && (i = r / 2),
        0 == a
          ? ar(e, t, r, o)
          : a > 0
          ? (function (e, t, n, r, a, o) {
              var i = $e.globalAlpha;
              ($e.globalAlpha = o),
                ($e.globalCompositeOperation = "destination-out"),
                $e.beginPath(),
                $e.translate(e, t),
                $e.rotate(n),
                a % 2 != 0 && $e.rotate((-90 * Math.PI) / 180);
              $e.moveTo(r * Math.cos(0), r * Math.sin(0));
              for (var s = 1; s <= a + 1; s += 1)
                $e.lineTo(
                  r * Math.cos((2 * s * Math.PI) / a),
                  r * Math.sin((2 * s * Math.PI) / a)
                );
              $e.fill(),
                $e.setTransform(1, 0, 0, 1, 0, 0),
                ($e.globalCompositeOperation = "source-over"),
                ($e.globalAlpha = i);
            })(e, t, n, r, a, o)
          : (function (e, t, n, r, a, o, i) {
              var s = $e.globalAlpha;
              ($e.globalAlpha = i),
                ($e.globalCompositeOperation = "destination-out"),
                $e.beginPath(),
                $e.translate(e, t),
                $e.rotate(n),
                a % 2 != 0 && $e.rotate((-90 * Math.PI) / 180);
              $e.moveTo(r * Math.cos(0), r * Math.sin(0)),
                $e.lineTo(
                  o * Math.cos((1 * Math.PI) / a),
                  o * Math.sin((1 * Math.PI) / a)
                );
              for (var l = 1; l <= a; l += 1)
                $e.lineTo(
                  r * Math.cos((2 * l * Math.PI) / a),
                  r * Math.sin((2 * l * Math.PI) / a)
                ),
                  $e.lineTo(
                    o * Math.cos((2 * (l + 0.5) * Math.PI) / a),
                    o * Math.sin((2 * (l + 0.5) * Math.PI) / a)
                  );
              $e.fill(),
                $e.setTransform(1, 0, 0, 1, 0, 0),
                ($e.globalCompositeOperation = "source-over"),
                ($e.globalAlpha = s);
            })(e, t, n, r, -a, i, o);
    }
    function ar(e, t, n, r) {
      var a = $e.globalAlpha;
      ($e.globalAlpha = r),
        ($e.globalCompositeOperation = "destination-out"),
        $e.beginPath(),
        $e.arc(e, t, n, 0, 2 * Math.PI, true),
        $e.fill(),
        ($e.globalCompositeOperation = "source-over"),
        ($e.globalAlpha = a);
    }
    function or(e, t, n, r, a, o) {
      var i = $e.globalAlpha;
      ($e.globalAlpha = o),
        ($e.globalCompositeOperation = "destination-out"),
        $e.beginPath(),
        $e.translate(e, t),
        $e.rotate(a),
        $e.rect(-n, -r, 2 * n, 2 * r),
        $e.fill(),
        $e.setTransform(1, 0, 0, 1, 0, 0),
        ($e.globalCompositeOperation = "source-over"),
        ($e.globalAlpha = i);
    }
    function ir() {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = Je.width / 2 - tt / Qe,
        r = Je.height / 2 - nt / Qe;
      if (t) e = j[Ue].dimension;
      else {
        var a = l.b[Le];
        e = a || l.a;
      }
      Ne = e;
      for (
        var o = e.visual,
          i = o.particles,
          s = 1.2 * et,
          c = Math.min(u.MAX_PARTICLES, et * et * i.spawnrate),
          h = Math.random();
        h < c;
        h += Math.random()
      ) {
        var p = Object(f.degreesToRadians)(Object(d.l)(i.d.min, i.d.max)),
          _ = Object(d.l)(i.speed.min, i.speed.max);
        Dn(
          tt + Math.random() * s - s / 2,
          nt + Math.random() * s - s / 2,
          _ * Math.sin(p),
          _ * Math.cos(p),
          Object(d.l)(i.size.min, i.size.max),
          Math.random() * Math.PI * 2,
          Math.round(Object(d.l)(i.sides.min, i.sides.max)),
          Nt(zt(Ut(i.color.min), Ut(i.color.max), Math.random())),
          Object(d.l)(i.lifetime.min, i.lifetime.max),
          Object(d.l)(i.transparency.min, i.transparency.max),
          i.radiant ? 1 : 0
        );
      }
      ($e.fillStyle = o.backgroundColor),
        $e.fillRect(0, 0, $e.canvas.width, $e.canvas.height);
      var g = F.GRID_STROKE / Qe;
      if (g > 0.3) {
        var v = o.gridSize / Qe,
          m = Math.round(n / v) * v,
          b = Math.round(r / v) * v;
        ($e.lineWidth = g), ($e.strokeStyle = o.gridColor), $e.beginPath();
        for (var y = n; y < $e.canvas.width + n; y += v)
          $e.moveTo(y - m, 0), $e.lineTo(y - m, $e.canvas.height);
        for (var E = r; E < $e.canvas.height + r; E += v)
          $e.moveTo(0, E - b), $e.lineTo($e.canvas.width, E - b);
        $e.closePath(), $e.stroke();
      }
      sr(e.visual.wallColor || "#00000029", e.bases, e.walls);
    }
    function sr(e, t, n) {
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        $e.fillStyle = Dt(0, a.team, 0, 0) + "29";
        var o = a.width * rt,
          i = a.height * rt;
        $e.fillRect(
          Je.width / 2 - (-a.x * rt + tt + o / 2) / Qe,
          Je.height / 2 - (-a.y * rt + nt + i / 2) / Qe,
          o / Qe,
          i / Qe
        );
      }
      $e.fillStyle = e;
      for (var s = 0; s < n.length; s++) {
        var l = n[s],
          u = l.width * rt,
          c = l.height * rt;
        $e.fillRect(
          Je.width / 2 - (-l.x * rt + tt + u / 2) / Qe,
          Je.height / 2 - (-l.y * rt + nt + c / 2) / Qe,
          u / Qe,
          c / Qe
        );
      }
      $e.fillRect(
        0,
        Je.height / 2 - (nt + rt) / Qe,
        Je.width / 2 - (tt + rt) / Qe,
        (2 * rt) / Qe
      ),
        $e.fillRect(
          Je.width,
          Je.height / 2 - (nt + rt) / Qe,
          (-tt + rt) / Qe - Je.width / 2,
          (2 * rt) / Qe
        ),
        $e.fillRect(0, 0, Je.width, Je.height / 2 - (nt + rt) / Qe),
        $e.fillRect(0, Je.height, Je.width, (-nt + rt) / Qe - Je.height / 2);
    }
    function lr(e) {
      return (
        !!ne &&
        (!L.g && i.j && U.g.copyIds && (oe = true),
        !!(
          ze > -100 &&
          (function (e) {
            if (!L.g)
              if (s.isMobile) {
                var t = Je.width / 2,
                  n = 0,
                  r = 0,
                  a = 0;
                if (ze > -380)
                  for (
                    var o = Math.min(4, Vt.length), i = 0;
                    i < Vt.length;
                    i++
                  ) {
                    Vt[i];
                    var l = {
                      x: t + 400 * (1 == o ? 0 : r / (o - 1) - 0.5) - 50,
                      y: n + ze + 120 * a + 75 - 50,
                      width: 100,
                      height: 100,
                    };
                    if (Object(d.m)(e, l)) return dr(i + 1), true;
                    4 == ++r &&
                      ((r = 0), a++, (o = Math.min(4, Vt.length - i - 1)));
                  }
              } else {
                (t = 0 + (L.h ? 60 : 0)), (n = Je.height);
                if (d.D > 0)
                  for (var u = 0; u < F.UPGRADE_COUNT; u++) {
                    var c = F.UPGRADE_COUNT - u;
                    if (d.E[c - 1] < F.MAX_UPGRADE_POINTS) {
                      l = {
                        x: t + 20 + 250 - 15,
                        y: n - 20 - 32 * u - 15,
                        width: 30,
                        height: 30,
                      };
                      if (Object(d.m)(e, l)) return dr(c), true;
                    }
                  }
                if (((t = Je.width), d.D > 0))
                  for (var f = 0; f < F.UPGRADE_COUNT; f++) {
                    c = F.UPGRADE_COUNT - f + 4;
                    if (d.E[c - 1] < F.MAX_UPGRADE_POINTS) {
                      l = {
                        x: t - 20 - 250 - 15,
                        y: n - 20 - 32 * f - 15,
                        width: 30,
                        height: 30,
                      };
                      if (Object(d.m)(e, l)) return dr(c), true;
                    }
                  }
              }
            return false;
          })(e)
        ) ||
          ((Me = e),
          (Pe = true),
          (function (e) {
            if (!L.g) {
              if (s.isMobile) {
                var t = Je.width / 2,
                  n = 0,
                  r = 0,
                  a = 0;
                if (0 != d.M.length && Yt > -250) {
                  for (
                    var o = Math.min(4, d.M.length), i = 0;
                    i < d.M.length;
                    i++
                  ) {
                    var l = d.M[i],
                      u = {
                        x: t + 400 * (1 == o ? 0 : r / (o - 1) - 0.5) - 50,
                        y: n + Yt + 120 * a - 50,
                        width: 100,
                        height: 100,
                      };
                    if (Object(d.m)(e, u))
                      return ur(true, l.id, l.upgradeType), true;
                    4 == ++r &&
                      ((r = 0), a++, (o = Math.min(4, d.M.length - i - 1)));
                  }
                  (a += r > 0 ? 1 : 0), (r = 0), Qt(t, n + Yt - 60 + 120 * a);
                  u = {
                    x: t,
                    y: n + Yt - 60 + 120 * a - -10,
                    width: 100,
                    height: 40,
                  };
                  if (Object(d.m)(e, u)) return cr(true), true;
                } else if (0 != d.b.length && Ft > -380) {
                  for (
                    var c = Math.min(4, d.b.length), f = 0;
                    f < d.b.length;
                    f++
                  ) {
                    var h = d.b[f];
                    u = {
                      x: t + 400 * (1 == c ? 0 : r / (c - 1) - 0.5) - 50,
                      y: n + Ft + 120 * a - 50,
                      width: 100,
                      height: 100,
                    };
                    if (Object(d.m)(e, u))
                      return ur(false, h.id, h.upgradeType), true;
                    4 == ++r &&
                      ((r = 0), a++, (c = Math.min(4, d.b.length - f - 1)));
                  }
                  (a += r > 0 ? 1 : 0), (r = 0), Qt(t, n + Ft - 60 + 120 * a);
                  u = {
                    x: t,
                    y: n + Ft - 60 + 120 * a - -10,
                    width: 100,
                    height: 40,
                  };
                  if (Object(d.m)(e, u)) return cr(false), true;
                }
              } else {
                (t = 0), (n = Je.height);
                var p = 0,
                  _ = 0;
                if (0 != d.M.length) {
                  for (var g = 0; g < d.M.length; g++) {
                    var v = d.M[g];
                    u = {
                      x: t + Yt + 120 * p - 50,
                      y: n - 200 - 120 * _ - 50,
                      width: 100,
                      height: 100,
                    };
                    if (Object(d.m)(e, u))
                      return ur(true, v.id, v.upgradeType), true;
                    3 == ++p && ((p = 0), _++);
                  }
                  if (0 != d.M.length && 2 != d.M[0].upgradeType) {
                    _ += p > 0 ? 1 : 0;
                    u = {
                      x: t + Yt + 120 * (p = 0) - 50,
                      y: n - 200 - 120 * _ - -10,
                      width: 100,
                      height: 40,
                    };
                    if (Object(d.m)(e, u)) return cr(true), true;
                  }
                }
                if (((p = 0), (_ = 0), 0 != d.b.length)) {
                  t = Je.width;
                  for (var m = 0; m < d.b.length; m++) {
                    var b = d.b[m];
                    u = {
                      x: t - Ft - 120 * p - 50,
                      y: n - 200 - 120 * _ - 50,
                      width: 100,
                      height: 100,
                    };
                    if (Object(d.m)(e, u))
                      return ur(false, b.id, b.upgradeType), true;
                    3 == ++p && ((p = 0), _++);
                  }
                  if (0 != d.b.length && 2 != d.b[0].upgradeType) {
                    _ += p > 0 ? 1 : 0;
                    u = {
                      x: t - Ft - 120 * (p = 0) - 50,
                      y: n - 200 - 120 * _ - -10,
                      width: 100,
                      height: 40,
                    };
                    if (Object(d.m)(e, u)) return cr(false), true;
                  }
                }
              }
            }
            return false;
          })(e)))
      );
    }
    function ur(e, t, n) {
      Object(c.upgradePlayer)(e, t, n),
        0 != n
          ? (Object(d.f)(), Object(d.h)())
          : e
          ? Object(d.h)()
          : Object(d.f)();
    }
    function cr(e, t) {
      e ? Object(d.h)() : Object(d.f)();
    }
    function dr(e) {
      Object(i.w)(e);
    }
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "chatInput", function () {
        return T;
      }),
      n.d(t, "isMobile", function () {
        return M;
      }),
      n.d(t, "servers", function () {
        return S;
      }),
      n.d(t, "setPopupOpen", function () {
        return C;
      }),
      n.d(t, "formLoading", function () {
        return N;
      }),
      n.d(t, "formError", function () {
        return z;
      }),
      n.d(t, "serverSelect", function () {
        return te;
      }),
      n.d(t, "mainMenuState", function () {
        return oe;
      }),
      n.d(t, "onConnect", function () {
        return ue;
      }),
      n.d(t, "onHubConnect", function () {
        return ce;
      }),
      n.d(t, "fullyDisconnected", function () {
        return de;
      }),
      n.d(t, "onFullDisconnect", function () {
        return fe;
      }),
      n.d(t, "onDisconnect", function () {
        return he;
      }),
      n.d(t, "receiveServers", function () {
        return pe;
      }),
      n.d(t, "updateSelectedServer", function () {
        return _e;
      }),
      n.d(t, "startsWithVowel", function () {
        return Te;
      }),
      n.d(t, "escapeHTML", function () {
        return Me;
      }),
      n.d(t, "onDeath", function () {
        return Se;
      }),
      n.d(t, "setCanvasScale", function () {
        return ke;
      }),
      n.d(t, "setCookie", function () {
        return xe;
      }),
      n.d(t, "getCookie", function () {
        return Re;
      }),
      n.d(t, "eraseCookie", function () {
        return Ie;
      }),
      n.d(t, "roundWithEnding", function () {
        return Ce;
      });
    var r = n(5),
      a = n(6),
      o = n(9),
      i = (n(36), n(11)),
      s = n(1),
      l = n.n(s),
      u = (n(55), n(56), n(57), n(58), n(59), n(2)),
      c = [];
    function d() {
      return new Promise(function (e) {
        fetch("/changelog.txt")
          .then(function (e) {
            return e.text();
          })
          .then(function (t) {
            (f = t.replace(/\r?\n/g, "\r\n")),
              (function () {
                for (
                  var e = "",
                    t = ("CHANGELOG - " + (c = f.split("\n\r\n"))[0]).split(
                      "\n"
                    ),
                    n = 0;
                  n < t.length;
                  n++
                )
                  t[n].startsWith("    ") ||
                    (e += "" == e ? t[n] : "<br />" + t[n]);
                var r = document.getElementById("changelog");
                (r.childNodes[1].innerHTML = e.replace(/\n/g, "<br />")),
                  r.classList.remove("hide");
                var a = document.getElementById("subtitle");
                (a.textContent = c[0].split("-", 1)[0].trim()),
                  a.classList.remove("hide"),
                  (e = "");
                for (var o = 0; o < c.length; o++) {
                  "" != e && (e += "<br /><br /><hr />");
                  for (var i = c[o].split("\n"), s = 0; s < i.length; s++) {
                    var l = 0,
                      u = "";
                    for (l = 0; i[s].startsWith("    ", 4 * l); l++)
                      u += "&emsp;&emsp;";
                    0 == s
                      ? (e += "<h3>")
                      : "" != e && 1 != s && (e += "<br />"),
                      (e += u + i[s]),
                      0 == s && (e += "</h3>");
                  }
                }
                document.getElementById(
                  "full-changelog"
                ).childNodes[1].childNodes[5].innerHTML = e.replace(
                  /\n/g,
                  "<br />"
                );
              })(),
              e();
          });
      });
    }
    var f = "",
      h = n(3),
      p = n(12),
      _ = [
        {
          id: "scenexe-io_970x250",
          minWidth: 1404,
          minHeight: 1040,
          deathScreen: false,
        },
        {
          id: "scenexe-io_300x600",
          minWidth: 1877.2,
          minHeight: 910,
          deathScreen: true,
        },
      ];
    function g() {
      /*(window.usingAdBlocker = false),
        fetch("https://api.adinplay.com")
          .catch(function (e) {
            window.usingAdBlocker = true;
          })
          .finally(function () {
            window.usingAdBlocker &&
              (console.log("Ad blocker detected."),
              Re(s.COOKIES.TUTORIAL.AD_BLOCKER) ||
                u.I ||
                (Object(u.j)(
                  "Please disable your ad blocker",
                  "Ads support the game and allow it to keep updating and expanding."
                ),
                xe(s.COOKIES.TUTORIAL.AD_BLOCKER, true, 30))),
              gtag("event", s.ANALYTICS_EVENTS.AD_BLOCKER, {
                adBlocker: window.usingAdBlocker,
              });
          });*/
    }
    function v() {
      try {
        _.forEach(function (e) {
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(e.id);
          });
        });
      } catch (e) {
        console.log("Error when refreshing ads:", e);
      }
    }
    function m() {
      try {
        _.forEach(function (e) {
          var t = document.getElementById(e.id);
          t.classList.remove("hide");
          var n = Math.min(window.innerWidth / e.minWidth, 1),
            r = Math.min(window.innerHeight / e.minHeight, 1),
            a = Math.min(n, r),
            o = t.classList.contains("ad-bottom");
          t.classList.contains("ad-right");
          (t.style.transform = "translate"
            .concat(o ? "X" : "Y", "(-50%) scale(")
            .concat(a, ")")),
            e.deathScreen || 1 != oe || t.classList.add("hide");
        });
      } catch (e) {
        console.log("Error when updating ads:", e);
      }
    }
    window.addEventListener(
      "resize",
      Object(p.debounce)(40, function () {
        m();
      })
    );
    var b = n(0),
      y = n(15);
    function E(e, t, n, r, a, o, i) {
      try {
        var s = e[o](i),
          l = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(r, a);
    }
    function O(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (r, a) {
          var o = e.apply(t, n);
          function i(e) {
            E(o, r, a, i, s, "next", e);
          }
          function s(e) {
            E(o, r, a, i, s, "throw", e);
          }
          i(void 0);
        });
      };
    }
    var w = document.getElementById("chat"),
      T = document.getElementById("chat-input"),
      M = false,
      S = [],
      A = [],
      k = [],
      x = -1,
      R = 0,
      I = false;
    function C(e) {
      I = e;
    }
    var D = document.getElementById("game-over-killer"),
      P = document.getElementById("game-over-stats"),
      B = document.getElementById("game-over"),
      j = document.getElementById("overlay-canvas"),
      L =
        (document.getElementById("main-menu-button"),
        document.getElementById("full-changelog")),
      U = document.getElementById("button-settings"),
      N = document.getElementById("form-loading"),
      z = document.getElementById("form-error"),
      W = document.getElementById("button-feedback"),
      K = document.getElementById("button-bugs"),
      G = document.getElementById("submit"),
      F = document.getElementById("cancel"),
      Y = document.getElementById("popup-input"),
      H = document.getElementById("popup-input-small"),
      V = document.getElementById("popup"),
      q = document.getElementById("popup-title"),
      Z = document.getElementById("popup-subtitle"),
      X = document.getElementById("connecting"),
      J = document.getElementById("respawn-text"),
      $ = document.getElementById("play-menu-wrapper"),
      Q = document.getElementById("main-menu"),
      ee = document.getElementById("play-button"),
      te = document.getElementById("server-select"),
      ne = document.getElementById("background"),
      re = document.getElementById("ads"),
      ae = document.getElementById("username-input");
    te.addEventListener("change", function () {
      _e();
    });
    var oe = 2;
    function ie() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (e) {
        (M =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )) &&
          (document.documentElement.webkitRequestFullScreen(),
          Re(s.COOKIES.TUTORIAL.MOBILE_UNSUPPORTED) ||
            u.I ||
            (Object(u.j)(
              "Mobile support is experimental",
              "Some features may not work properly on this device."
            ),
            xe(s.COOKIES.TUTORIAL.MOBILE_UNSUPPORTED, true, 3)));
        var t = Re(s.COOKIES.USERNAME);
        t && (ae.value = t), window.addEventListener("keydown", Ae);
      }
      Object(i.d)(),
        Array.from(document.getElementsByClassName("hud")).forEach(function (
          e
        ) {
          e.classList.add("hidden");
        }),
        Q.classList.remove("hidden"),
        ne.classList.remove("hide"),
        re.classList.remove("hidden"),
        X.classList.remove("hide"),
        $.classList.add("hide"),
        (ee.onclick = function () {
          fShowMainMenu();
        }),
        (U.onclick = function () {
          Object(h.f)();
        }),
        v(),
        m(),
        (document.getElementById("full-changelog-link").onclick = function () {
          return me(), false;
        }),
        (document.getElementById("exit-changelog").onclick = function () {
          be();
        }),
        (document.getElementById("apply-settings").onclick = function () {
          Object(h.a)(true);
        }),
        (document.getElementById("cancel-settings").onclick = function () {
          Object(h.a)();
        }),
        (K.onclick = function () {
          ye(1);
        }),
        (W.onclick = function () {
          ye(2);
        }),
        (F.onclick = function () {
          ye(0);
        }),
        (G.onclick = function () {
          Oe();
        }),
        e &&
          (Object(h.e)(
            JSON.parse(Re(s.COOKIES.SETTINGS)) || {},
            JSON.parse(Re(s.COOKIES.KEYBINDS)) || {}
          ),
          d(),
          g(),
          Object(a.render)());
    }
    ie(true);
    var se = false,
      le = "";
    function ue(e) {
      console.log("Connected to game server: ".concat(e)),
        (se = true),
        (le = e),
        X.classList.add("hide"),
        $.classList.remove("hide"),
        r.respawningWithKey || (J.textContent = ""),
        M || ae.focus(),
        "" == r.key ||
          r.respawningWithKey ||
          (ye(0), be(), Object(h.a)(), fShowMainMenu());
    }
    function ce(e) {
      console.log("Connected to hub server: ".concat(e));
    }
    var de = false;
    function fe() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      (de = true),
        Object(r.disconnectFromServer)(false),
        (document.getElementById("disconnect-text").textContent = e),
        document.getElementById("disconnect-modal").classList.remove("hide"),
        (document.getElementById("reconnect-button").onclick = function () {
          window.location.reload();
        });
    }
    function he(e) {
      (se = false),
        Object(o.u)(),
        Object(a.stopRendering)(),
        Object(i.a)(),
        1 != oe && (oe = 2),
        m(),
        (X.textContent = "" == e ? "Connecting..." : e),
        X.classList.remove("hide"),
        $.classList.add("hide"),
        B.classList.add("hide"),
        j.classList.add("hide"),
        ie(),
        r.respawningWithKey &&
          (B.classList.remove("hide"),
          j.classList.remove("hide"),
          Q.classList.add("hidden"),
          (oe = 1));
    }
    function pe(e) {
      if (0 == e[0].length) {
        if (2 != oe)
          return void console.log(
            "No servers found, ignoring because in-game."
          );
        fe("No servers found. The game may be updating."),
          console.log("No servers found.");
      }
      S = e[0];
      e[1], e[2];
      var t = e[3],
        n = e[4];
      console.log("Received Servers: ".concat(JSON.stringify(S))),
        (te.innerHTML = "");
      for (var r, a = "", o = -1, i = 0; i < S.length; i++) {
        var l = S[i];
        (a += '<option style="background-color:'
          .concat(
            ((r = l.gamemode), s.GAMEMODE_COLORS[r] || s.TEAM_COLORS[0]),
            '" value="'
          )
          .concat(i, '">')
          .concat(ge(l.gamemode), " - ")
          .concat(l.region, " - ")
          .concat(l.players, " player")
          .concat(1 == l.players ? "" : "s", "</option>")),
          l.address == le && (o = i);
      }
      if (((te.innerHTML = a), -1 == o)) {
        var c = Re(s.COOKIES.GAMEMODE);
        if (te.options[c]) te.selectedIndex = c;
        else {
          for (var d = 1e200, f = 0, h = 0; h < S.length; h++) {
            var p = S[h];
            p.players < d && ((d = p.players), (f = h));
          }
          te.selectedIndex = f;
        }
      } else te.selectedIndex = o;
      Object(u.w)(t, n), _e(!se);
    }
    function _e() {
      var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        t = te.options[te.selectedIndex],
        n = S[te.selectedIndex];
      if (
        (xe(s.COOKIES.GAMEMODE, te.selectedIndex),
        t && (te.style.backgroundColor = t.style.backgroundColor),
        n && 2 == oe && e)
      ) {
        var a = r.socket.closed;
        Object(r.clearKey)(), Object(r.disconnectFromServer)(false);
        //url join
        if(location.hash.slice(0,4)==="#sv="){
          const a=location.hash.slice(4).split("@",2);
          if(a.length===2){
            r.clearKey(decodeURIComponent(a[0]));
            n={
              "hybrid":false,
              "address":decodeURIComponent(a[1])
            };
          }
        }
        var o = setInterval(function () {
          r.socket.closed || a
            ? (console.log(
                "Attempting to connect to game server: ".concat(n.address)
              ),
              Object(r.connectToServer)(n.address, n.hybrid),
              clearInterval(o))
            : console.warn(
                "Socket is still connected, waiting for disconnect."
              );
        }, 10);
      }
    }
    function ge(e) {
      return s.GAMEMODE_NAMES[e] || "???";
    }
    window.show_main_menu=fShowMainMenu;
    function fShowMainMenu() {
      2 == oe
        ? (0 == R &&
            se &&
            !I &&
            (Object(a.updateDebugMode)(),
            Object(o.h)(),
            M && document.documentElement.webkitRequestFullScreen(),
            Object(r.play)(ae.value),
            Object(a.setCanvasDimensions)(),
            Object(i.a)(),
            xe(s.COOKIES.USERNAME, ae.value, 1e5),
            Q.classList.add("hidden"),
            ne.classList.add("hide"),
            re.classList.add("hidden"),
            Object(i.d)(),
            Object(o.t)(),
            Object(a.startRendering)(),
            Object(a.setCanvasDimensions)(),
            (oe = 0),
            setTimeout(function () {
              Re(s.COOKIES.TUTORIAL.MOVE) ||
                u.I ||
                M ||
                (Object(u.x)("Press the WASD or arrow keys to move."),
                xe(s.COOKIES.TUTORIAL.MOVE, true, 300));
            }, 1e3),
            Object(r.clearKey)()),
          M && document.documentElement.webkitRequestFullScreen())
        : 1 == oe
        ? (B.classList.add("hide"),
          j.classList.add("hide"),
          Q.classList.remove("hidden"),
          M || ae.focus(),
          (oe = 2),
          m())
        : h.g.showChat &&
          a.showingChatBox &&
          (T === document.activeElement
            ? (T.blur(),
              "" != T.value.trim() && A.push(T.value),
              Object(r.sendChatMessage)(T.value),
              (T.value = ""),
              (x = -1))
            : (T.focus(),
              Object(o.g)(),
              Object(o.o)(),
              Object(o.d)(),
              (x = -1)));
    }
    function me() {
      L.classList.remove("hide"), (I = true);
    }
    function be() {
      L.classList.add("hide"), (I = false);
    }
    function ye(e) {
      if (((R = e), 0 == e)) V.classList.add("hide");
      else {
        V.classList.remove("hide"),
          (z.textContent = ""),
          N.classList.add("hide"),
          (Y.value = ""),
          (H.value = "");
        var t = 2 == e ? "Submit Feedback" : "Report Bug",
          n = 2 == e ? "Feedback:" : "Explain the bug in detail:";
        (q.textContent = t), (Z.textContent = n);
      }
    }
    var Ee = false;
    function Oe() {
      return we.apply(this, arguments);
    }
    function we() {
      return (we = O(
        regeneratorRuntime.mark(function e() {
          var t, n, a, o;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!Ee) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  if (0 == R) {
                    e.next = 26;
                    break;
                  }
                  if (((z.textContent = ""), "" != Y.value.trim())) {
                    e.next = 7;
                    break;
                  }
                  return (
                    (z.textContent = "Enter a message."), e.abrupt("return")
                  );
                case 7:
                  return (
                    (t = "Unknown OS"),
                    -1 != navigator.userAgent.indexOf("Win") && (t = "Windows"),
                    -1 != navigator.userAgent.indexOf("Mac") && (t = "MacOS"),
                    -1 != navigator.userAgent.indexOf("Linux") && (t = "Linux"),
                    -1 != navigator.userAgent.indexOf("Android") &&
                      (t = "Android"),
                    -1 != navigator.userAgent.indexOf("like Mac") &&
                      (t = "iOS"),
                    (n = "Unknown Browser"),
                    -1 !=
                    (navigator.userAgent.indexOf("Opera") ||
                      navigator.userAgent.indexOf("OPR"))
                      ? (n = "Opera")
                      : -1 != navigator.userAgent.indexOf("Edg")
                      ? (n = "Edge")
                      : -1 != navigator.userAgent.indexOf("Chrome")
                      ? (n = "Chrome")
                      : -1 != navigator.userAgent.indexOf("Safari")
                      ? (n = "Safari")
                      : -1 != navigator.userAgent.indexOf("Firefox")
                      ? (n = "Firefox")
                      : (-1 == navigator.userAgent.indexOf("MSIE") &&
                          1 != !!document.documentMode) ||
                        (n = "Internet Explorer"),
                    (a = {
                      type: R,
                      content: Y.value.trim(),
                      extraInfo: H.value.trim(),
                      username: ae.value.trim(),
                      server: r.hybridConnection ? r.hubURL : r.serverURL,
                      hub: r.hubURL,
                      browser: n,
                      os: t,
                      userAgent: navigator.userAgent,
                    }),
                    N.classList.remove("hide"),
                    (Ee = true),
                    (e.next = 20),
                    Object(r.getFromAPI)(
                      document.location.href + "api/feedback",
                      {
                        data: Object(b.reverseString)(
                          Object(y.encode)(a).toString("base64")
                        ),
                      }
                    )
                  );
                case 20:
                  if (
                    ((o = e.sent), N.classList.add("hide"), (Ee = false), !o.error)
                  ) {
                    e.next = 26;
                    break;
                  }
                  return (z.textContent = o.error), e.abrupt("return");
                case 26:
                  ye(0);
                case 27:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function Te(e) {
      return -1 !== "aeiouAEIOU".indexOf(e[0]);
    }
    function Me(e) {
      return null == e
        ? void 0
        : e
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
    function Se(e) {
      Object(i.b)(), Object(h.a)(), Object(a.setLastTank)(e.lastTank);
      var t = Object(b.getXPLevel)(e.respawnXP);
      (J.textContent = t > 1 ? "You will respawn at level ".concat(t) : ""),
        e.server && Object(r.respawnInServer)(e.server.address, e.server.key)//,
        //gtag("event", s.ANALYTICS_EVENTS.DEATH, { timeAlive: e.timeAlive });
      var n = Me(
        Object(b.arrayToSentence)(
          e.killers.map(function (e) {
            return h.g.showNames
              ? "" != e.name
                ? e.name
                : "an unnamed ".concat(e.className)
              : "a".concat(Te(e.className) ? "n" : "", " ").concat(e.className);
          })
        )
      );
      0 == oe
        ? ((D.innerHTML = "you were killed by ".concat(n)),
          (P.innerHTML = "\n\t\t\t\tLevel "
            .concat(e.level, " ")
            .concat(
              a.lastTank.className,
              "\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\tTime Played: "
            )
            .concat(e.timeAlive, "\n\t\t\t\t<br />\n\t\t\t\tScore: ")
            .concat(Ce(e.score), "\n\t\t\t\t<br />\n\t\t\t\tKills: ")
            .concat(e.kills)),
          (oe = 1),
          (document.getElementById("main-menu-button").onclick = function () {
            fShowMainMenu();
          }),
          Object(o.u)(),
          Object(a.stopRendering)(),
          B.classList.remove("hide"),
          j.classList.remove("hide"),
          ne.classList.remove("hide"),
          re.classList.remove("hidden"))
        : (oe = 2),
        m(),
        v();
    }
    function Ae(e) {
      e.keyCode == h.c.enter
        ? fShowMainMenu()
        : e.keyCode == h.c.openCommand &&
          0 == oe &&
          T !== document.activeElement &&
          h.g.showChat &&
          a.showingChatBox &&
          ((T.value = ""),
          T.focus(),
          Object(o.g)(),
          Object(o.o)(),
          Object(o.d)(),
          (x = -1)),
        T == document.activeElement &&
          (e.keyCode == h.c.escape
            ? (T.blur(), (T.value = ""), (x = -1))
            : e.keyCode == h.c.previousChatMessage
            ? (x < 0
                ? ((k = [].concat(A)).push(T.value),
                  0 != (x = k.length - 1) && x--)
                : 0 == x || x--,
              x < 0 || (T.value = k[x]))
            : e.keyCode == h.c.nextChatMessage &&
              -1 != x &&
              x < k.length - 1 &&
              (x++, (T.value = k[x])));
    }
    function ke(e) {
      w &&
        T &&
        ((w.style.right = 10 / e + "px"),
        (w.style.top = 250 / e + "px"),
        (T.style.borderRadius = 5 / e + "px"),
        (T.style.padding = 3 / e + "px"),
        (T.style.fontSize = 18 / e + "px"),
        (T.style.marginBottom = 5 / e + "px"),
        (T.style.width = 220 / e + "px"));
    }
    function xe(e, t, n) {
      var r = "";
      if (n) {
        var a = new Date();
        a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3),
          (r = "; expires=" + a.toUTCString());
      }
      document.cookie = e + "=" + (t || "") + r + "; path=/";
    }
    function Re(e) {
      for (
        var t = e + "=", n = document.cookie.split(";"), r = 0;
        r < n.length;
        r++
      ) {
        for (var a = n[r]; " " == a.charAt(0); ) a = a.substring(1, a.length);
        if (0 == a.indexOf(t)) return a.substring(t.length, a.length);
      }
      return null;
    }
    function Ie(e) {
      document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
    function Ce(e) {
      var t = Math.sign(e),
        n = Math.abs(e);
      if (!Number.isFinite(n) || Number.isNaN(e) || null == e)
        return (-1 == t ? "-" : "") + "∞";
      if (n < 1e3) return (-1 == t ? "-" : "") + Math.round(n).toString();
      for (var r = 0; n > 999; ) r++, (n /= 1e3);
      return (
        (-1 == t ? "-" : "") +
        (n =
          n < 10
            ? Math.round(100 * n) / 100
            : n < 100
            ? Math.round(10 * n) / 10
            : Math.round(n)).toString() +
        l.a.NUMBER_ENDINGS[Math.min(r - 1, l.a.NUMBER_ENDINGS.length - 1)]
      );
    }
  },
  function (e, t, n) {
    (function (e, r) {
      var a;
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */ (function () {
        var o = "Expected a function",
          i = "__lodash_placeholder__",
          s = [
            ["ary", 128],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", 16],
            ["flip", 512],
            ["partial", 32],
            ["partialRight", 64],
            ["rearg", 256],
          ],
          l = "[object Arguments]",
          u = "[object Array]",
          c = "[object Boolean]",
          d = "[object Date]",
          f = "[object Error]",
          h = "[object Function]",
          p = "[object GeneratorFunction]",
          _ = "[object Map]",
          g = "[object Number]",
          v = "[object Object]",
          m = "[object RegExp]",
          b = "[object Set]",
          y = "[object String]",
          E = "[object Symbol]",
          O = "[object WeakMap]",
          w = "[object ArrayBuffer]",
          T = "[object DataView]",
          M = "[object Float32Array]",
          S = "[object Float64Array]",
          A = "[object Int8Array]",
          k = "[object Int16Array]",
          x = "[object Int32Array]",
          R = "[object Uint8Array]",
          I = "[object Uint16Array]",
          C = "[object Uint32Array]",
          D = /\b__p \+= '';/g,
          P = /\b(__p \+=) '' \+/g,
          B = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
          j = /&(?:amp|lt|gt|quot|#39);/g,
          L = /[&<>"']/g,
          U = RegExp(j.source),
          N = RegExp(L.source),
          z = /<%-([\s\S]+?)%>/g,
          W = /<%([\s\S]+?)%>/g,
          K = /<%=([\s\S]+?)%>/g,
          G = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          F = /^\w*$/,
          Y =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          H = /[\\^$.*+?()[\]{}|]/g,
          V = RegExp(H.source),
          q = /^\s+/,
          Z = /\s/,
          X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          J = /\{\n\/\* \[wrapped with (.+)\] \*/,
          $ = /,? & /,
          Q = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
          ee = /[()=,{}\[\]\/\s]/,
          te = /\\(\\)?/g,
          ne = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
          re = /\w*$/,
          ae = /^[-+]0x[0-9a-f]+$/i,
          oe = /^0b[01]+$/i,
          ie = /^\[object .+?Constructor\]$/,
          se = /^0o[0-7]+$/i,
          le = /^(?:0|[1-9]\d*)$/,
          ue = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
          ce = /($^)/,
          de = /['\n\r\u2028\u2029\\]/g,
          fe = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
          he =
            "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          pe = "[\\ud800-\\udfff]",
          _e = "[" + he + "]",
          ge = "[" + fe + "]",
          ve = "\\d+",
          me = "[\\u2700-\\u27bf]",
          be = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
          ye =
            "[^\\ud800-\\udfff" +
            he +
            ve +
            "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
          Ee = "\\ud83c[\\udffb-\\udfff]",
          Oe = "[^\\ud800-\\udfff]",
          we = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          Te = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          Me = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
          Se = "(?:" + be + "|" + ye + ")",
          Ae = "(?:" + Me + "|" + ye + ")",
          ke = "(?:" + ge + "|" + Ee + ")" + "?",
          xe =
            "[\\ufe0e\\ufe0f]?" +
            ke +
            ("(?:\\u200d(?:" +
              [Oe, we, Te].join("|") +
              ")[\\ufe0e\\ufe0f]?" +
              ke +
              ")*"),
          Re = "(?:" + [me, we, Te].join("|") + ")" + xe,
          Ie = "(?:" + [Oe + ge + "?", ge, we, Te, pe].join("|") + ")",
          Ce = RegExp("['’]", "g"),
          De = RegExp(ge, "g"),
          Pe = RegExp(Ee + "(?=" + Ee + ")|" + Ie + xe, "g"),
          Be = RegExp(
            [
              Me +
                "?" +
                be +
                "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" +
                [_e, Me, "$"].join("|") +
                ")",
              Ae +
                "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" +
                [_e, Me + Se, "$"].join("|") +
                ")",
              Me + "?" + Se + "+(?:['’](?:d|ll|m|re|s|t|ve))?",
              Me + "+(?:['’](?:D|LL|M|RE|S|T|VE))?",
              "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
              "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
              ve,
              Re,
            ].join("|"),
            "g"
          ),
          je = RegExp("[\\u200d\\ud800-\\udfff" + fe + "\\ufe0e\\ufe0f]"),
          Le =
            /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
          Ue = [
            "Array",
            "Buffer",
            "DataView",
            "Date",
            "Error",
            "Float32Array",
            "Float64Array",
            "Function",
            "Int8Array",
            "Int16Array",
            "Int32Array",
            "Map",
            "Math",
            "Object",
            "Promise",
            "RegExp",
            "Set",
            "String",
            "Symbol",
            "TypeError",
            "Uint8Array",
            "Uint8ClampedArray",
            "Uint16Array",
            "Uint32Array",
            "WeakMap",
            "_",
            "clearTimeout",
            "isFinite",
            "parseInt",
            "setTimeout",
          ],
          Ne = -1,
          ze = {};
        (ze[M] =
          ze[S] =
          ze[A] =
          ze[k] =
          ze[x] =
          ze[R] =
          ze["[object Uint8ClampedArray]"] =
          ze[I] =
          ze[C] =
            true),
          (ze[l] =
            ze[u] =
            ze[w] =
            ze[c] =
            ze[T] =
            ze[d] =
            ze[f] =
            ze[h] =
            ze[_] =
            ze[g] =
            ze[v] =
            ze[m] =
            ze[b] =
            ze[y] =
            ze[O] =
              false);
        var We = {};
        (We[l] =
          We[u] =
          We[w] =
          We[T] =
          We[c] =
          We[d] =
          We[M] =
          We[S] =
          We[A] =
          We[k] =
          We[x] =
          We[_] =
          We[g] =
          We[v] =
          We[m] =
          We[b] =
          We[y] =
          We[E] =
          We[R] =
          We["[object Uint8ClampedArray]"] =
          We[I] =
          We[C] =
            true),
          (We[f] = We[h] = We[O] = false);
        var Ke = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029",
          },
          Ge = parseFloat,
          Fe = parseInt,
          Ye = "object" == typeof e && e && e.Object === Object && e,
          He =
            "object" == typeof self && self && self.Object === Object && self,
          Ve = Ye || He || Function("return this")(),
          qe = t && !t.nodeType && t,
          Ze = qe && "object" == typeof r && r && !r.nodeType && r,
          Xe = Ze && Ze.exports === qe,
          Je = Xe && Ye.process,
          $e = (function () {
            try {
              var e = Ze && Ze.require && Ze.require("util").types;
              return e || (Je && Je.binding && Je.binding("util"));
            } catch (e) {}
          })(),
          Qe = $e && $e.isArrayBuffer,
          et = $e && $e.isDate,
          tt = $e && $e.isMap,
          nt = $e && $e.isRegExp,
          rt = $e && $e.isSet,
          at = $e && $e.isTypedArray;
        function ot(e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t);
            case 1:
              return e.call(t, n[0]);
            case 2:
              return e.call(t, n[0], n[1]);
            case 3:
              return e.call(t, n[0], n[1], n[2]);
          }
          return e.apply(t, n);
        }
        function it(e, t, n, r) {
          for (var a = -1, o = null == e ? 0 : e.length; ++a < o; ) {
            var i = e[a];
            t(r, i, n(i), e);
          }
          return r;
        }
        function st(e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length;
            ++n < r && false !== t(e[n], n, e);

          );
          return e;
        }
        function lt(e, t) {
          for (var n = null == e ? 0 : e.length; n-- && false !== t(e[n], n, e); );
          return e;
        }
        function ut(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (!t(e[n], n, e)) return false;
          return true;
        }
        function ct(e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length, a = 0, o = [];
            ++n < r;

          ) {
            var i = e[n];
            t(i, n, e) && (o[a++] = i);
          }
          return o;
        }
        function dt(e, t) {
          return !!(null == e ? 0 : e.length) && Et(e, t, 0) > -1;
        }
        function ft(e, t, n) {
          for (var r = -1, a = null == e ? 0 : e.length; ++r < a; )
            if (n(t, e[r])) return true;
          return false;
        }
        function ht(e, t) {
          for (
            var n = -1, r = null == e ? 0 : e.length, a = Array(r);
            ++n < r;

          )
            a[n] = t(e[n], n, e);
          return a;
        }
        function pt(e, t) {
          for (var n = -1, r = t.length, a = e.length; ++n < r; )
            e[a + n] = t[n];
          return e;
        }
        function _t(e, t, n, r) {
          var a = -1,
            o = null == e ? 0 : e.length;
          for (r && o && (n = e[++a]); ++a < o; ) n = t(n, e[a], a, e);
          return n;
        }
        function gt(e, t, n, r) {
          var a = null == e ? 0 : e.length;
          for (r && a && (n = e[--a]); a--; ) n = t(n, e[a], a, e);
          return n;
        }
        function vt(e, t) {
          for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
            if (t(e[n], n, e)) return true;
          return false;
        }
        var mt = Mt("length");
        function bt(e, t, n) {
          var r;
          return (
            n(e, function (e, n, a) {
              if (t(e, n, a)) return (r = n), false;
            }),
            r
          );
        }
        function yt(e, t, n, r) {
          for (var a = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < a; )
            if (t(e[o], o, e)) return o;
          return -1;
        }
        function Et(e, t, n) {
          return t == t
            ? (function (e, t, n) {
                var r = n - 1,
                  a = e.length;
                for (; ++r < a; ) if (e[r] === t) return r;
                return -1;
              })(e, t, n)
            : yt(e, wt, n);
        }
        function Ot(e, t, n, r) {
          for (var a = n - 1, o = e.length; ++a < o; ) if (r(e[a], t)) return a;
          return -1;
        }
        function wt(e) {
          return e != e;
        }
        function Tt(e, t) {
          var n = null == e ? 0 : e.length;
          return n ? kt(e, t) / n : NaN;
        }
        function Mt(e) {
          return function (t) {
            return null == t ? void 0 : t[e];
          };
        }
        function St(e) {
          return function (t) {
            return null == e ? void 0 : e[t];
          };
        }
        function At(e, t, n, r, a) {
          return (
            a(e, function (e, a, o) {
              n = r ? ((r = false), e) : t(n, e, a, o);
            }),
            n
          );
        }
        function kt(e, t) {
          for (var n, r = -1, a = e.length; ++r < a; ) {
            var o = t(e[r]);
            void 0 !== o && (n = void 0 === n ? o : n + o);
          }
          return n;
        }
        function xt(e, t) {
          for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
          return r;
        }
        function Rt(e) {
          return e ? e.slice(0, qt(e) + 1).replace(q, "") : e;
        }
        function It(e) {
          return function (t) {
            return e(t);
          };
        }
        function Ct(e, t) {
          return ht(t, function (t) {
            return e[t];
          });
        }
        function Dt(e, t) {
          return e.has(t);
        }
        function Pt(e, t) {
          for (var n = -1, r = e.length; ++n < r && Et(t, e[n], 0) > -1; );
          return n;
        }
        function Bt(e, t) {
          for (var n = e.length; n-- && Et(t, e[n], 0) > -1; );
          return n;
        }
        function jt(e, t) {
          for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
          return r;
        }
        var Lt = St({
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s",
          }),
          Ut = St({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          });
        function Nt(e) {
          return "\\" + Ke[e];
        }
        function zt(e) {
          return je.test(e);
        }
        function Wt(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        }
        function Kt(e, t) {
          return function (n) {
            return e(t(n));
          };
        }
        function Gt(e, t) {
          for (var n = -1, r = e.length, a = 0, o = []; ++n < r; ) {
            var s = e[n];
            (s !== t && s !== i) || ((e[n] = i), (o[a++] = n));
          }
          return o;
        }
        function Ft(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        }
        function Yt(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = [e, e];
            }),
            n
          );
        }
        function Ht(e) {
          return zt(e)
            ? (function (e) {
                var t = (Pe.lastIndex = 0);
                for (; Pe.test(e); ) ++t;
                return t;
              })(e)
            : mt(e);
        }
        function Vt(e) {
          return zt(e)
            ? (function (e) {
                return e.match(Pe) || [];
              })(e)
            : (function (e) {
                return e.split("");
              })(e);
        }
        function qt(e) {
          for (var t = e.length; t-- && Z.test(e.charAt(t)); );
          return t;
        }
        var Zt = St({
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'",
        });
        var Xt = (function e(t) {
          var n,
            r = (t =
              null == t ? Ve : Xt.defaults(Ve.Object(), t, Xt.pick(Ve, Ue)))
              .Array,
            a = t.Date,
            Z = t.Error,
            fe = t.Function,
            he = t.Math,
            pe = t.Object,
            _e = t.RegExp,
            ge = t.String,
            ve = t.TypeError,
            me = r.prototype,
            be = fe.prototype,
            ye = pe.prototype,
            Ee = t["__core-js_shared__"],
            Oe = be.toString,
            we = ye.hasOwnProperty,
            Te = 0,
            Me = (n = /[^.]+$/.exec((Ee && Ee.keys && Ee.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + n
              : "",
            Se = ye.toString,
            Ae = Oe.call(pe),
            ke = Ve._,
            xe = _e(
              "^" +
                Oe.call(we)
                  .replace(H, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            Re = Xe ? t.Buffer : void 0,
            Ie = t.Symbol,
            Pe = t.Uint8Array,
            je = Re ? Re.allocUnsafe : void 0,
            Ke = Kt(pe.getPrototypeOf, pe),
            Ye = pe.create,
            He = ye.propertyIsEnumerable,
            qe = me.splice,
            Ze = Ie ? Ie.isConcatSpreadable : void 0,
            Je = Ie ? Ie.iterator : void 0,
            $e = Ie ? Ie.toStringTag : void 0,
            mt = (function () {
              try {
                var e = eo(pe, "defineProperty");
                return e({}, "", {}), e;
              } catch (e) {}
            })(),
            St = t.clearTimeout !== Ve.clearTimeout && t.clearTimeout,
            Jt = a && a.now !== Ve.Date.now && a.now,
            $t = t.setTimeout !== Ve.setTimeout && t.setTimeout,
            Qt = he.ceil,
            en = he.floor,
            tn = pe.getOwnPropertySymbols,
            nn = Re ? Re.isBuffer : void 0,
            rn = t.isFinite,
            an = me.join,
            on = Kt(pe.keys, pe),
            sn = he.max,
            ln = he.min,
            un = a.now,
            cn = t.parseInt,
            dn = he.random,
            fn = me.reverse,
            hn = eo(t, "DataView"),
            pn = eo(t, "Map"),
            _n = eo(t, "Promise"),
            gn = eo(t, "Set"),
            vn = eo(t, "WeakMap"),
            mn = eo(pe, "create"),
            bn = vn && new vn(),
            yn = {},
            En = ko(hn),
            On = ko(pn),
            wn = ko(_n),
            Tn = ko(gn),
            Mn = ko(vn),
            Sn = Ie ? Ie.prototype : void 0,
            An = Sn ? Sn.valueOf : void 0,
            kn = Sn ? Sn.toString : void 0;
          function xn(e) {
            if (Yi(e) && !Pi(e) && !(e instanceof Dn)) {
              if (e instanceof Cn) return e;
              if (we.call(e, "__wrapped__")) return xo(e);
            }
            return new Cn(e);
          }
          var Rn = (function () {
            function e() {}
            return function (t) {
              if (!Fi(t)) return {};
              if (Ye) return Ye(t);
              e.prototype = t;
              var n = new e();
              return (e.prototype = void 0), n;
            };
          })();
          function In() {}
          function Cn(e, t) {
            (this.__wrapped__ = e),
              (this.__actions__ = []),
              (this.__chain__ = !!t),
              (this.__index__ = 0),
              (this.__values__ = void 0);
          }
          function Dn(e) {
            (this.__wrapped__ = e),
              (this.__actions__ = []),
              (this.__dir__ = 1),
              (this.__filtered__ = false),
              (this.__iteratees__ = []),
              (this.__takeCount__ = 4294967295),
              (this.__views__ = []);
          }
          function Pn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function Bn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function jn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function Ln(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.__data__ = new jn(); ++t < n; ) this.add(e[t]);
          }
          function Un(e) {
            var t = (this.__data__ = new Bn(e));
            this.size = t.size;
          }
          function Nn(e, t) {
            var n = Pi(e),
              r = !n && Di(e),
              a = !n && !r && Ui(e),
              o = !n && !r && !a && Qi(e),
              i = n || r || a || o,
              s = i ? xt(e.length, ge) : [],
              l = s.length;
            for (var u in e)
              (!t && !we.call(e, u)) ||
                (i &&
                  ("length" == u ||
                    (a && ("offset" == u || "parent" == u)) ||
                    (o &&
                      ("buffer" == u ||
                        "byteLength" == u ||
                        "byteOffset" == u)) ||
                    so(u, l))) ||
                s.push(u);
            return s;
          }
          function zn(e) {
            var t = e.length;
            return t ? e[Lr(0, t - 1)] : void 0;
          }
          function Wn(e, t) {
            return Mo(ma(e), Xn(t, 0, e.length));
          }
          function Kn(e) {
            return Mo(ma(e));
          }
          function Gn(e, t, n) {
            ((void 0 !== n && !Ri(e[t], n)) || (void 0 === n && !(t in e))) &&
              qn(e, t, n);
          }
          function Fn(e, t, n) {
            var r = e[t];
            (we.call(e, t) && Ri(r, n) && (void 0 !== n || t in e)) ||
              qn(e, t, n);
          }
          function Yn(e, t) {
            for (var n = e.length; n--; ) if (Ri(e[n][0], t)) return n;
            return -1;
          }
          function Hn(e, t, n, r) {
            return (
              tr(e, function (e, a, o) {
                t(r, e, n(e), o);
              }),
              r
            );
          }
          function Vn(e, t) {
            return e && ba(t, Es(t), e);
          }
          function qn(e, t, n) {
            "__proto__" == t && mt
              ? mt(e, t, {
                  configurable: true,
                  enumerable: true,
                  value: n,
                  writable: true,
                })
              : (e[t] = n);
          }
          function Zn(e, t) {
            for (var n = -1, a = t.length, o = r(a), i = null == e; ++n < a; )
              o[n] = i ? void 0 : gs(e, t[n]);
            return o;
          }
          function Xn(e, t, n) {
            return (
              e == e &&
                (void 0 !== n && (e = e <= n ? e : n),
                void 0 !== t && (e = e >= t ? e : t)),
              e
            );
          }
          function Jn(e, t, n, r, a, o) {
            var i,
              s = 1 & t,
              u = 2 & t,
              f = 4 & t;
            if ((n && (i = a ? n(e, r, a, o) : n(e)), void 0 !== i)) return i;
            if (!Fi(e)) return e;
            var O = Pi(e);
            if (O) {
              if (
                ((i = (function (e) {
                  var t = e.length,
                    n = new e.constructor(t);
                  t &&
                    "string" == typeof e[0] &&
                    we.call(e, "index") &&
                    ((n.index = e.index), (n.input = e.input));
                  return n;
                })(e)),
                !s)
              )
                return ma(e, i);
            } else {
              var D = ro(e),
                P = D == h || D == p;
              if (Ui(e)) return fa(e, s);
              if (D == v || D == l || (P && !a)) {
                if (((i = u || P ? {} : oo(e)), !s))
                  return u
                    ? (function (e, t) {
                        return ba(e, no(e), t);
                      })(
                        e,
                        (function (e, t) {
                          return e && ba(t, Os(t), e);
                        })(i, e)
                      )
                    : (function (e, t) {
                        return ba(e, to(e), t);
                      })(e, Vn(i, e));
              } else {
                if (!We[D]) return a ? e : {};
                i = (function (e, t, n) {
                  var r = e.constructor;
                  switch (t) {
                    case w:
                      return ha(e);
                    case c:
                    case d:
                      return new r(+e);
                    case T:
                      return (function (e, t) {
                        var n = t ? ha(e.buffer) : e.buffer;
                        return new e.constructor(n, e.byteOffset, e.byteLength);
                      })(e, n);
                    case M:
                    case S:
                    case A:
                    case k:
                    case x:
                    case R:
                    case "[object Uint8ClampedArray]":
                    case I:
                    case C:
                      return pa(e, n);
                    case _:
                      return new r();
                    case g:
                    case y:
                      return new r(e);
                    case m:
                      return (function (e) {
                        var t = new e.constructor(e.source, re.exec(e));
                        return (t.lastIndex = e.lastIndex), t;
                      })(e);
                    case b:
                      return new r();
                    case E:
                      return (a = e), An ? pe(An.call(a)) : {};
                  }
                  var a;
                })(e, D, s);
              }
            }
            o || (o = new Un());
            var B = o.get(e);
            if (B) return B;
            o.set(e, i),
              Xi(e)
                ? e.forEach(function (r) {
                    i.add(Jn(r, t, n, r, e, o));
                  })
                : Hi(e) &&
                  e.forEach(function (r, a) {
                    i.set(a, Jn(r, t, n, a, e, o));
                  });
            var j = O ? void 0 : (f ? (u ? Va : Ha) : u ? Os : Es)(e);
            return (
              st(j || e, function (r, a) {
                j && (r = e[(a = r)]), Fn(i, a, Jn(r, t, n, a, e, o));
              }),
              i
            );
          }
          function $n(e, t, n) {
            var r = n.length;
            if (null == e) return !r;
            for (e = pe(e); r--; ) {
              var a = n[r],
                o = t[a],
                i = e[a];
              if ((void 0 === i && !(a in e)) || !o(i)) return false;
            }
            return true;
          }
          function Qn(e, t, n) {
            if ("function" != typeof e) throw new ve(o);
            return Eo(function () {
              e.apply(void 0, n);
            }, t);
          }
          function er(e, t, n, r) {
            var a = -1,
              o = dt,
              i = true,
              s = e.length,
              l = [],
              u = t.length;
            if (!s) return l;
            n && (t = ht(t, It(n))),
              r
                ? ((o = ft), (i = false))
                : t.length >= 200 && ((o = Dt), (i = false), (t = new Ln(t)));
            e: for (; ++a < s; ) {
              var c = e[a],
                d = null == n ? c : n(c);
              if (((c = r || 0 !== c ? c : 0), i && d == d)) {
                for (var f = u; f--; ) if (t[f] === d) continue e;
                l.push(c);
              } else o(t, d, r) || l.push(c);
            }
            return l;
          }
          (xn.templateSettings = {
            escape: z,
            evaluate: W,
            interpolate: K,
            variable: "",
            imports: { _: xn },
          }),
            (xn.prototype = In.prototype),
            (xn.prototype.constructor = xn),
            (Cn.prototype = Rn(In.prototype)),
            (Cn.prototype.constructor = Cn),
            (Dn.prototype = Rn(In.prototype)),
            (Dn.prototype.constructor = Dn),
            (Pn.prototype.clear = function () {
              (this.__data__ = mn ? mn(null) : {}), (this.size = 0);
            }),
            (Pn.prototype.delete = function (e) {
              var t = this.has(e) && delete this.__data__[e];
              return (this.size -= t ? 1 : 0), t;
            }),
            (Pn.prototype.get = function (e) {
              var t = this.__data__;
              if (mn) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n;
              }
              return we.call(t, e) ? t[e] : void 0;
            }),
            (Pn.prototype.has = function (e) {
              var t = this.__data__;
              return mn ? void 0 !== t[e] : we.call(t, e);
            }),
            (Pn.prototype.set = function (e, t) {
              var n = this.__data__;
              return (
                (this.size += this.has(e) ? 0 : 1),
                (n[e] = mn && void 0 === t ? "__lodash_hash_undefined__" : t),
                this
              );
            }),
            (Bn.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
            (Bn.prototype.delete = function (e) {
              var t = this.__data__,
                n = Yn(t, e);
              return (
                !(n < 0) &&
                (n == t.length - 1 ? t.pop() : qe.call(t, n, 1),
                --this.size,
                true)
              );
            }),
            (Bn.prototype.get = function (e) {
              var t = this.__data__,
                n = Yn(t, e);
              return n < 0 ? void 0 : t[n][1];
            }),
            (Bn.prototype.has = function (e) {
              return Yn(this.__data__, e) > -1;
            }),
            (Bn.prototype.set = function (e, t) {
              var n = this.__data__,
                r = Yn(n, e);
              return (
                r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
              );
            }),
            (jn.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new Pn(),
                  map: new (pn || Bn)(),
                  string: new Pn(),
                });
            }),
            (jn.prototype.delete = function (e) {
              var t = $a(this, e).delete(e);
              return (this.size -= t ? 1 : 0), t;
            }),
            (jn.prototype.get = function (e) {
              return $a(this, e).get(e);
            }),
            (jn.prototype.has = function (e) {
              return $a(this, e).has(e);
            }),
            (jn.prototype.set = function (e, t) {
              var n = $a(this, e),
                r = n.size;
              return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
            }),
            (Ln.prototype.add = Ln.prototype.push =
              function (e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this;
              }),
            (Ln.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (Un.prototype.clear = function () {
              (this.__data__ = new Bn()), (this.size = 0);
            }),
            (Un.prototype.delete = function (e) {
              var t = this.__data__,
                n = t.delete(e);
              return (this.size = t.size), n;
            }),
            (Un.prototype.get = function (e) {
              return this.__data__.get(e);
            }),
            (Un.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (Un.prototype.set = function (e, t) {
              var n = this.__data__;
              if (n instanceof Bn) {
                var r = n.__data__;
                if (!pn || r.length < 199)
                  return r.push([e, t]), (this.size = ++n.size), this;
                n = this.__data__ = new jn(r);
              }
              return n.set(e, t), (this.size = n.size), this;
            });
          var tr = Oa(ur),
            nr = Oa(cr, true);
          function rr(e, t) {
            var n = true;
            return (
              tr(e, function (e, r, a) {
                return (n = !!t(e, r, a));
              }),
              n
            );
          }
          function ar(e, t, n) {
            for (var r = -1, a = e.length; ++r < a; ) {
              var o = e[r],
                i = t(o);
              if (null != i && (void 0 === s ? i == i && !$i(i) : n(i, s)))
                var s = i,
                  l = o;
            }
            return l;
          }
          function or(e, t) {
            var n = [];
            return (
              tr(e, function (e, r, a) {
                t(e, r, a) && n.push(e);
              }),
              n
            );
          }
          function ir(e, t, n, r, a) {
            var o = -1,
              i = e.length;
            for (n || (n = io), a || (a = []); ++o < i; ) {
              var s = e[o];
              t > 0 && n(s)
                ? t > 1
                  ? ir(s, t - 1, n, r, a)
                  : pt(a, s)
                : r || (a[a.length] = s);
            }
            return a;
          }
          var sr = wa(),
            lr = wa(true);
          function ur(e, t) {
            return e && sr(e, t, Es);
          }
          function cr(e, t) {
            return e && lr(e, t, Es);
          }
          function dr(e, t) {
            return ct(t, function (t) {
              return Wi(e[t]);
            });
          }
          function fr(e, t) {
            for (var n = 0, r = (t = la(t, e)).length; null != e && n < r; )
              e = e[Ao(t[n++])];
            return n && n == r ? e : void 0;
          }
          function hr(e, t, n) {
            var r = t(e);
            return Pi(e) ? r : pt(r, n(e));
          }
          function pr(e) {
            return null == e
              ? void 0 === e
                ? "[object Undefined]"
                : "[object Null]"
              : $e && $e in pe(e)
              ? (function (e) {
                  var t = we.call(e, $e),
                    n = e[$e];
                  try {
                    e[$e] = void 0;
                    var r = true;
                  } catch (e) {}
                  var a = Se.call(e);
                  r && (t ? (e[$e] = n) : delete e[$e]);
                  return a;
                })(e)
              : (function (e) {
                  return Se.call(e);
                })(e);
          }
          function _r(e, t) {
            return e > t;
          }
          function gr(e, t) {
            return null != e && we.call(e, t);
          }
          function vr(e, t) {
            return null != e && t in pe(e);
          }
          function mr(e, t, n) {
            for (
              var a = n ? ft : dt,
                o = e[0].length,
                i = e.length,
                s = i,
                l = r(i),
                u = 1 / 0,
                c = [];
              s--;

            ) {
              var d = e[s];
              s && t && (d = ht(d, It(t))),
                (u = ln(d.length, u)),
                (l[s] =
                  !n && (t || (o >= 120 && d.length >= 120))
                    ? new Ln(s && d)
                    : void 0);
            }
            d = e[0];
            var f = -1,
              h = l[0];
            e: for (; ++f < o && c.length < u; ) {
              var p = d[f],
                _ = t ? t(p) : p;
              if (((p = n || 0 !== p ? p : 0), !(h ? Dt(h, _) : a(c, _, n)))) {
                for (s = i; --s; ) {
                  var g = l[s];
                  if (!(g ? Dt(g, _) : a(e[s], _, n))) continue e;
                }
                h && h.push(_), c.push(p);
              }
            }
            return c;
          }
          function br(e, t, n) {
            var r = null == (e = vo(e, (t = la(t, e)))) ? e : e[Ao(zo(t))];
            return null == r ? void 0 : ot(r, e, n);
          }
          function yr(e) {
            return Yi(e) && pr(e) == l;
          }
          function Er(e, t, n, r, a) {
            return (
              e === t ||
              (null == e || null == t || (!Yi(e) && !Yi(t))
                ? e != e && t != t
                : (function (e, t, n, r, a, o) {
                    var i = Pi(e),
                      s = Pi(t),
                      h = i ? u : ro(e),
                      p = s ? u : ro(t),
                      O = (h = h == l ? v : h) == v,
                      M = (p = p == l ? v : p) == v,
                      S = h == p;
                    if (S && Ui(e)) {
                      if (!Ui(t)) return false;
                      (i = true), (O = false);
                    }
                    if (S && !O)
                      return (
                        o || (o = new Un()),
                        i || Qi(e)
                          ? Fa(e, t, n, r, a, o)
                          : (function (e, t, n, r, a, o, i) {
                              switch (n) {
                                case T:
                                  if (
                                    e.byteLength != t.byteLength ||
                                    e.byteOffset != t.byteOffset
                                  )
                                    return false;
                                  (e = e.buffer), (t = t.buffer);
                                case w:
                                  return !(
                                    e.byteLength != t.byteLength ||
                                    !o(new Pe(e), new Pe(t))
                                  );
                                case c:
                                case d:
                                case g:
                                  return Ri(+e, +t);
                                case f:
                                  return (
                                    e.name == t.name && e.message == t.message
                                  );
                                case m:
                                case y:
                                  return e == t + "";
                                case _:
                                  var s = Wt;
                                case b:
                                  var l = 1 & r;
                                  if ((s || (s = Ft), e.size != t.size && !l))
                                    return false;
                                  var u = i.get(e);
                                  if (u) return u == t;
                                  (r |= 2), i.set(e, t);
                                  var h = Fa(s(e), s(t), r, a, o, i);
                                  return i.delete(e), h;
                                case E:
                                  if (An) return An.call(e) == An.call(t);
                              }
                              return false;
                            })(e, t, h, n, r, a, o)
                      );
                    if (!(1 & n)) {
                      var A = O && we.call(e, "__wrapped__"),
                        k = M && we.call(t, "__wrapped__");
                      if (A || k) {
                        var x = A ? e.value() : e,
                          R = k ? t.value() : t;
                        return o || (o = new Un()), a(x, R, n, r, o);
                      }
                    }
                    if (!S) return false;
                    return (
                      o || (o = new Un()),
                      (function (e, t, n, r, a, o) {
                        var i = 1 & n,
                          s = Ha(e),
                          l = s.length,
                          u = Ha(t).length;
                        if (l != u && !i) return false;
                        var c = l;
                        for (; c--; ) {
                          var d = s[c];
                          if (!(i ? d in t : we.call(t, d))) return false;
                        }
                        var f = o.get(e),
                          h = o.get(t);
                        if (f && h) return f == t && h == e;
                        var p = true;
                        o.set(e, t), o.set(t, e);
                        var _ = i;
                        for (; ++c < l; ) {
                          d = s[c];
                          var g = e[d],
                            v = t[d];
                          if (r)
                            var m = i
                              ? r(v, g, d, t, e, o)
                              : r(g, v, d, e, t, o);
                          if (
                            !(void 0 === m ? g === v || a(g, v, n, r, o) : m)
                          ) {
                            p = false;
                            break;
                          }
                          _ || (_ = "constructor" == d);
                        }
                        if (p && !_) {
                          var b = e.constructor,
                            y = t.constructor;
                          b == y ||
                            !("constructor" in e) ||
                            !("constructor" in t) ||
                            ("function" == typeof b &&
                              b instanceof b &&
                              "function" == typeof y &&
                              y instanceof y) ||
                            (p = false);
                        }
                        return o.delete(e), o.delete(t), p;
                      })(e, t, n, r, a, o)
                    );
                  })(e, t, n, r, Er, a))
            );
          }
          function Or(e, t, n, r) {
            var a = n.length,
              o = a,
              i = !r;
            if (null == e) return !o;
            for (e = pe(e); a--; ) {
              var s = n[a];
              if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return false;
            }
            for (; ++a < o; ) {
              var l = (s = n[a])[0],
                u = e[l],
                c = s[1];
              if (i && s[2]) {
                if (void 0 === u && !(l in e)) return false;
              } else {
                var d = new Un();
                if (r) var f = r(u, c, l, e, t, d);
                if (!(void 0 === f ? Er(c, u, 3, r, d) : f)) return false;
              }
            }
            return true;
          }
          function wr(e) {
            return (
              !(!Fi(e) || ((t = e), Me && Me in t)) &&
              (Wi(e) ? xe : ie).test(ko(e))
            );
            var t;
          }
          function Tr(e) {
            return "function" == typeof e
              ? e
              : null == e
              ? Vs
              : "object" == typeof e
              ? Pi(e)
                ? Rr(e[0], e[1])
                : xr(e)
              : nl(e);
          }
          function Mr(e) {
            if (!ho(e)) return on(e);
            var t = [];
            for (var n in pe(e))
              we.call(e, n) && "constructor" != n && t.push(n);
            return t;
          }
          function Sr(e) {
            if (!Fi(e))
              return (function (e) {
                var t = [];
                if (null != e) for (var n in pe(e)) t.push(n);
                return t;
              })(e);
            var t = ho(e),
              n = [];
            for (var r in e)
              ("constructor" != r || (!t && we.call(e, r))) && n.push(r);
            return n;
          }
          function Ar(e, t) {
            return e < t;
          }
          function kr(e, t) {
            var n = -1,
              a = ji(e) ? r(e.length) : [];
            return (
              tr(e, function (e, r, o) {
                a[++n] = t(e, r, o);
              }),
              a
            );
          }
          function xr(e) {
            var t = Qa(e);
            return 1 == t.length && t[0][2]
              ? _o(t[0][0], t[0][1])
              : function (n) {
                  return n === e || Or(n, e, t);
                };
          }
          function Rr(e, t) {
            return uo(e) && po(t)
              ? _o(Ao(e), t)
              : function (n) {
                  var r = gs(n, e);
                  return void 0 === r && r === t ? vs(n, e) : Er(t, r, 3);
                };
          }
          function Ir(e, t, n, r, a) {
            e !== t &&
              sr(
                t,
                function (o, i) {
                  if ((a || (a = new Un()), Fi(o)))
                    !(function (e, t, n, r, a, o, i) {
                      var s = bo(e, n),
                        l = bo(t, n),
                        u = i.get(l);
                      if (u) return void Gn(e, n, u);
                      var c = o ? o(s, l, n + "", e, t, i) : void 0,
                        d = void 0 === c;
                      if (d) {
                        var f = Pi(l),
                          h = !f && Ui(l),
                          p = !f && !h && Qi(l);
                        (c = l),
                          f || h || p
                            ? Pi(s)
                              ? (c = s)
                              : Li(s)
                              ? (c = ma(s))
                              : h
                              ? ((d = false), (c = fa(l, true)))
                              : p
                              ? ((d = false), (c = pa(l, true)))
                              : (c = [])
                            : qi(l) || Di(l)
                            ? ((c = s),
                              Di(s)
                                ? (c = ss(s))
                                : (Fi(s) && !Wi(s)) || (c = oo(l)))
                            : (d = false);
                      }
                      d && (i.set(l, c), a(c, l, r, o, i), i.delete(l));
                      Gn(e, n, c);
                    })(e, t, i, n, Ir, r, a);
                  else {
                    var s = r ? r(bo(e, i), o, i + "", e, t, a) : void 0;
                    void 0 === s && (s = o), Gn(e, i, s);
                  }
                },
                Os
              );
          }
          function Cr(e, t) {
            var n = e.length;
            if (n) return so((t += t < 0 ? n : 0), n) ? e[t] : void 0;
          }
          function Dr(e, t, n) {
            t = t.length
              ? ht(t, function (e) {
                  return Pi(e)
                    ? function (t) {
                        return fr(t, 1 === e.length ? e[0] : e);
                      }
                    : e;
                })
              : [Vs];
            var r = -1;
            return (
              (t = ht(t, It(Ja()))),
              (function (e, t) {
                var n = e.length;
                for (e.sort(t); n--; ) e[n] = e[n].value;
                return e;
              })(
                kr(e, function (e, n, a) {
                  return {
                    criteria: ht(t, function (t) {
                      return t(e);
                    }),
                    index: ++r,
                    value: e,
                  };
                }),
                function (e, t) {
                  return (function (e, t, n) {
                    var r = -1,
                      a = e.criteria,
                      o = t.criteria,
                      i = a.length,
                      s = n.length;
                    for (; ++r < i; ) {
                      var l = _a(a[r], o[r]);
                      if (l) {
                        if (r >= s) return l;
                        var u = n[r];
                        return l * ("desc" == u ? -1 : 1);
                      }
                    }
                    return e.index - t.index;
                  })(e, t, n);
                }
              )
            );
          }
          function Pr(e, t, n) {
            for (var r = -1, a = t.length, o = {}; ++r < a; ) {
              var i = t[r],
                s = fr(e, i);
              n(s, i) && Kr(o, la(i, e), s);
            }
            return o;
          }
          function Br(e, t, n, r) {
            var a = r ? Ot : Et,
              o = -1,
              i = t.length,
              s = e;
            for (e === t && (t = ma(t)), n && (s = ht(e, It(n))); ++o < i; )
              for (
                var l = 0, u = t[o], c = n ? n(u) : u;
                (l = a(s, c, l, r)) > -1;

              )
                s !== e && qe.call(s, l, 1), qe.call(e, l, 1);
            return e;
          }
          function jr(e, t) {
            for (var n = e ? t.length : 0, r = n - 1; n--; ) {
              var a = t[n];
              if (n == r || a !== o) {
                var o = a;
                so(a) ? qe.call(e, a, 1) : ea(e, a);
              }
            }
            return e;
          }
          function Lr(e, t) {
            return e + en(dn() * (t - e + 1));
          }
          function Ur(e, t) {
            var n = "";
            if (!e || t < 1 || t > 9007199254740991) return n;
            do {
              t % 2 && (n += e), (t = en(t / 2)) && (e += e);
            } while (t);
            return n;
          }
          function Nr(e, t) {
            return Oo(go(e, t, Vs), e + "");
          }
          function zr(e) {
            return zn(Rs(e));
          }
          function Wr(e, t) {
            var n = Rs(e);
            return Mo(n, Xn(t, 0, n.length));
          }
          function Kr(e, t, n, r) {
            if (!Fi(e)) return e;
            for (
              var a = -1, o = (t = la(t, e)).length, i = o - 1, s = e;
              null != s && ++a < o;

            ) {
              var l = Ao(t[a]),
                u = n;
              if ("__proto__" === l || "constructor" === l || "prototype" === l)
                return e;
              if (a != i) {
                var c = s[l];
                void 0 === (u = r ? r(c, l, s) : void 0) &&
                  (u = Fi(c) ? c : so(t[a + 1]) ? [] : {});
              }
              Fn(s, l, u), (s = s[l]);
            }
            return e;
          }
          var Gr = bn
              ? function (e, t) {
                  return bn.set(e, t), e;
                }
              : Vs,
            Fr = mt
              ? function (e, t) {
                  return mt(e, "toString", {
                    configurable: true,
                    enumerable: false,
                    value: Fs(t),
                    writable: true,
                  });
                }
              : Vs;
          function Yr(e) {
            return Mo(Rs(e));
          }
          function Hr(e, t, n) {
            var a = -1,
              o = e.length;
            t < 0 && (t = -t > o ? 0 : o + t),
              (n = n > o ? o : n) < 0 && (n += o),
              (o = t > n ? 0 : (n - t) >>> 0),
              (t >>>= 0);
            for (var i = r(o); ++a < o; ) i[a] = e[a + t];
            return i;
          }
          function Vr(e, t) {
            var n;
            return (
              tr(e, function (e, r, a) {
                return !(n = t(e, r, a));
              }),
              !!n
            );
          }
          function qr(e, t, n) {
            var r = 0,
              a = null == e ? r : e.length;
            if ("number" == typeof t && t == t && a <= 2147483647) {
              for (; r < a; ) {
                var o = (r + a) >>> 1,
                  i = e[o];
                null !== i && !$i(i) && (n ? i <= t : i < t)
                  ? (r = o + 1)
                  : (a = o);
              }
              return a;
            }
            return Zr(e, t, Vs, n);
          }
          function Zr(e, t, n, r) {
            var a = 0,
              o = null == e ? 0 : e.length;
            if (0 === o) return 0;
            for (
              var i = (t = n(t)) != t,
                s = null === t,
                l = $i(t),
                u = void 0 === t;
              a < o;

            ) {
              var c = en((a + o) / 2),
                d = n(e[c]),
                f = void 0 !== d,
                h = null === d,
                p = d == d,
                _ = $i(d);
              if (i) var g = r || p;
              else
                g = u
                  ? p && (r || f)
                  : s
                  ? p && f && (r || !h)
                  : l
                  ? p && f && !h && (r || !_)
                  : !h && !_ && (r ? d <= t : d < t);
              g ? (a = c + 1) : (o = c);
            }
            return ln(o, 4294967294);
          }
          function Xr(e, t) {
            for (var n = -1, r = e.length, a = 0, o = []; ++n < r; ) {
              var i = e[n],
                s = t ? t(i) : i;
              if (!n || !Ri(s, l)) {
                var l = s;
                o[a++] = 0 === i ? 0 : i;
              }
            }
            return o;
          }
          function Jr(e) {
            return "number" == typeof e ? e : $i(e) ? NaN : +e;
          }
          function $r(e) {
            if ("string" == typeof e) return e;
            if (Pi(e)) return ht(e, $r) + "";
            if ($i(e)) return kn ? kn.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
          }
          function Qr(e, t, n) {
            var r = -1,
              a = dt,
              o = e.length,
              i = true,
              s = [],
              l = s;
            if (n) (i = false), (a = ft);
            else if (o >= 200) {
              var u = t ? null : Ua(e);
              if (u) return Ft(u);
              (i = false), (a = Dt), (l = new Ln());
            } else l = t ? [] : s;
            e: for (; ++r < o; ) {
              var c = e[r],
                d = t ? t(c) : c;
              if (((c = n || 0 !== c ? c : 0), i && d == d)) {
                for (var f = l.length; f--; ) if (l[f] === d) continue e;
                t && l.push(d), s.push(c);
              } else a(l, d, n) || (l !== s && l.push(d), s.push(c));
            }
            return s;
          }
          function ea(e, t) {
            return null == (e = vo(e, (t = la(t, e)))) || delete e[Ao(zo(t))];
          }
          function ta(e, t, n, r) {
            return Kr(e, t, n(fr(e, t)), r);
          }
          function na(e, t, n, r) {
            for (
              var a = e.length, o = r ? a : -1;
              (r ? o-- : ++o < a) && t(e[o], o, e);

            );
            return n
              ? Hr(e, r ? 0 : o, r ? o + 1 : a)
              : Hr(e, r ? o + 1 : 0, r ? a : o);
          }
          function ra(e, t) {
            var n = e;
            return (
              n instanceof Dn && (n = n.value()),
              _t(
                t,
                function (e, t) {
                  return t.func.apply(t.thisArg, pt([e], t.args));
                },
                n
              )
            );
          }
          function aa(e, t, n) {
            var a = e.length;
            if (a < 2) return a ? Qr(e[0]) : [];
            for (var o = -1, i = r(a); ++o < a; )
              for (var s = e[o], l = -1; ++l < a; )
                l != o && (i[o] = er(i[o] || s, e[l], t, n));
            return Qr(ir(i, 1), t, n);
          }
          function oa(e, t, n) {
            for (var r = -1, a = e.length, o = t.length, i = {}; ++r < a; ) {
              var s = r < o ? t[r] : void 0;
              n(i, e[r], s);
            }
            return i;
          }
          function ia(e) {
            return Li(e) ? e : [];
          }
          function sa(e) {
            return "function" == typeof e ? e : Vs;
          }
          function la(e, t) {
            return Pi(e) ? e : uo(e, t) ? [e] : So(ls(e));
          }
          var ua = Nr;
          function ca(e, t, n) {
            var r = e.length;
            return (n = void 0 === n ? r : n), !t && n >= r ? e : Hr(e, t, n);
          }
          var da =
            St ||
            function (e) {
              return Ve.clearTimeout(e);
            };
          function fa(e, t) {
            if (t) return e.slice();
            var n = e.length,
              r = je ? je(n) : new e.constructor(n);
            return e.copy(r), r;
          }
          function ha(e) {
            var t = new e.constructor(e.byteLength);
            return new Pe(t).set(new Pe(e)), t;
          }
          function pa(e, t) {
            var n = t ? ha(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length);
          }
          function _a(e, t) {
            if (e !== t) {
              var n = void 0 !== e,
                r = null === e,
                a = e == e,
                o = $i(e),
                i = void 0 !== t,
                s = null === t,
                l = t == t,
                u = $i(t);
              if (
                (!s && !u && !o && e > t) ||
                (o && i && l && !s && !u) ||
                (r && i && l) ||
                (!n && l) ||
                !a
              )
                return 1;
              if (
                (!r && !o && !u && e < t) ||
                (u && n && a && !r && !o) ||
                (s && n && a) ||
                (!i && a) ||
                !l
              )
                return -1;
            }
            return 0;
          }
          function ga(e, t, n, a) {
            for (
              var o = -1,
                i = e.length,
                s = n.length,
                l = -1,
                u = t.length,
                c = sn(i - s, 0),
                d = r(u + c),
                f = !a;
              ++l < u;

            )
              d[l] = t[l];
            for (; ++o < s; ) (f || o < i) && (d[n[o]] = e[o]);
            for (; c--; ) d[l++] = e[o++];
            return d;
          }
          function va(e, t, n, a) {
            for (
              var o = -1,
                i = e.length,
                s = -1,
                l = n.length,
                u = -1,
                c = t.length,
                d = sn(i - l, 0),
                f = r(d + c),
                h = !a;
              ++o < d;

            )
              f[o] = e[o];
            for (var p = o; ++u < c; ) f[p + u] = t[u];
            for (; ++s < l; ) (h || o < i) && (f[p + n[s]] = e[o++]);
            return f;
          }
          function ma(e, t) {
            var n = -1,
              a = e.length;
            for (t || (t = r(a)); ++n < a; ) t[n] = e[n];
            return t;
          }
          function ba(e, t, n, r) {
            var a = !n;
            n || (n = {});
            for (var o = -1, i = t.length; ++o < i; ) {
              var s = t[o],
                l = r ? r(n[s], e[s], s, n, e) : void 0;
              void 0 === l && (l = e[s]), a ? qn(n, s, l) : Fn(n, s, l);
            }
            return n;
          }
          function ya(e, t) {
            return function (n, r) {
              var a = Pi(n) ? it : Hn,
                o = t ? t() : {};
              return a(n, e, Ja(r, 2), o);
            };
          }
          function Ea(e) {
            return Nr(function (t, n) {
              var r = -1,
                a = n.length,
                o = a > 1 ? n[a - 1] : void 0,
                i = a > 2 ? n[2] : void 0;
              for (
                o = e.length > 3 && "function" == typeof o ? (a--, o) : void 0,
                  i && lo(n[0], n[1], i) && ((o = a < 3 ? void 0 : o), (a = 1)),
                  t = pe(t);
                ++r < a;

              ) {
                var s = n[r];
                s && e(t, s, r, o);
              }
              return t;
            });
          }
          function Oa(e, t) {
            return function (n, r) {
              if (null == n) return n;
              if (!ji(n)) return e(n, r);
              for (
                var a = n.length, o = t ? a : -1, i = pe(n);
                (t ? o-- : ++o < a) && false !== r(i[o], o, i);

              );
              return n;
            };
          }
          function wa(e) {
            return function (t, n, r) {
              for (var a = -1, o = pe(t), i = r(t), s = i.length; s--; ) {
                var l = i[e ? s : ++a];
                if (false === n(o[l], l, o)) break;
              }
              return t;
            };
          }
          function Ta(e) {
            return function (t) {
              var n = zt((t = ls(t))) ? Vt(t) : void 0,
                r = n ? n[0] : t.charAt(0),
                a = n ? ca(n, 1).join("") : t.slice(1);
              return r[e]() + a;
            };
          }
          function Ma(e) {
            return function (t) {
              return _t(Ws(Ds(t).replace(Ce, "")), e, "");
            };
          }
          function Sa(e) {
            return function () {
              var t = arguments;
              switch (t.length) {
                case 0:
                  return new e();
                case 1:
                  return new e(t[0]);
                case 2:
                  return new e(t[0], t[1]);
                case 3:
                  return new e(t[0], t[1], t[2]);
                case 4:
                  return new e(t[0], t[1], t[2], t[3]);
                case 5:
                  return new e(t[0], t[1], t[2], t[3], t[4]);
                case 6:
                  return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                case 7:
                  return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
              }
              var n = Rn(e.prototype),
                r = e.apply(n, t);
              return Fi(r) ? r : n;
            };
          }
          function Aa(e) {
            return function (t, n, r) {
              var a = pe(t);
              if (!ji(t)) {
                var o = Ja(n, 3);
                (t = Es(t)),
                  (n = function (e) {
                    return o(a[e], e, a);
                  });
              }
              var i = e(t, n, r);
              return i > -1 ? a[o ? t[i] : i] : void 0;
            };
          }
          function ka(e) {
            return Ya(function (t) {
              var n = t.length,
                r = n,
                a = Cn.prototype.thru;
              for (e && t.reverse(); r--; ) {
                var i = t[r];
                if ("function" != typeof i) throw new ve(o);
                if (a && !s && "wrapper" == Za(i)) var s = new Cn([], true);
              }
              for (r = s ? r : n; ++r < n; ) {
                var l = Za((i = t[r])),
                  u = "wrapper" == l ? qa(i) : void 0;
                s =
                  u && co(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9]
                    ? s[Za(u[0])].apply(s, u[3])
                    : 1 == i.length && co(i)
                    ? s[l]()
                    : s.thru(i);
              }
              return function () {
                var e = arguments,
                  r = e[0];
                if (s && 1 == e.length && Pi(r)) return s.plant(r).value();
                for (var a = 0, o = n ? t[a].apply(this, e) : r; ++a < n; )
                  o = t[a].call(this, o);
                return o;
              };
            });
          }
          function xa(e, t, n, a, o, i, s, l, u, c) {
            var d = 128 & t,
              f = 1 & t,
              h = 2 & t,
              p = 24 & t,
              _ = 512 & t,
              g = h ? void 0 : Sa(e);
            return function v() {
              for (var m = arguments.length, b = r(m), y = m; y--; )
                b[y] = arguments[y];
              if (p)
                var E = Xa(v),
                  O = jt(b, E);
              if (
                (a && (b = ga(b, a, o, p)),
                i && (b = va(b, i, s, p)),
                (m -= O),
                p && m < c)
              ) {
                var w = Gt(b, E);
                return ja(e, t, xa, v.placeholder, n, b, w, l, u, c - m);
              }
              var T = f ? n : this,
                M = h ? T[e] : e;
              return (
                (m = b.length),
                l ? (b = mo(b, l)) : _ && m > 1 && b.reverse(),
                d && u < m && (b.length = u),
                this && this !== Ve && this instanceof v && (M = g || Sa(M)),
                M.apply(T, b)
              );
            };
          }
          function Ra(e, t) {
            return function (n, r) {
              return (function (e, t, n, r) {
                return (
                  ur(e, function (e, a, o) {
                    t(r, n(e), a, o);
                  }),
                  r
                );
              })(n, e, t(r), {});
            };
          }
          function Ia(e, t) {
            return function (n, r) {
              var a;
              if (void 0 === n && void 0 === r) return t;
              if ((void 0 !== n && (a = n), void 0 !== r)) {
                if (void 0 === a) return r;
                "string" == typeof n || "string" == typeof r
                  ? ((n = $r(n)), (r = $r(r)))
                  : ((n = Jr(n)), (r = Jr(r))),
                  (a = e(n, r));
              }
              return a;
            };
          }
          function Ca(e) {
            return Ya(function (t) {
              return (
                (t = ht(t, It(Ja()))),
                Nr(function (n) {
                  var r = this;
                  return e(t, function (e) {
                    return ot(e, r, n);
                  });
                })
              );
            });
          }
          function Da(e, t) {
            var n = (t = void 0 === t ? " " : $r(t)).length;
            if (n < 2) return n ? Ur(t, e) : t;
            var r = Ur(t, Qt(e / Ht(t)));
            return zt(t) ? ca(Vt(r), 0, e).join("") : r.slice(0, e);
          }
          function Pa(e) {
            return function (t, n, a) {
              return (
                a && "number" != typeof a && lo(t, n, a) && (n = a = void 0),
                (t = rs(t)),
                void 0 === n ? ((n = t), (t = 0)) : (n = rs(n)),
                (function (e, t, n, a) {
                  for (
                    var o = -1, i = sn(Qt((t - e) / (n || 1)), 0), s = r(i);
                    i--;

                  )
                    (s[a ? i : ++o] = e), (e += n);
                  return s;
                })(t, n, (a = void 0 === a ? (t < n ? 1 : -1) : rs(a)), e)
              );
            };
          }
          function Ba(e) {
            return function (t, n) {
              return (
                ("string" == typeof t && "string" == typeof n) ||
                  ((t = is(t)), (n = is(n))),
                e(t, n)
              );
            };
          }
          function ja(e, t, n, r, a, o, i, s, l, u) {
            var c = 8 & t;
            (t |= c ? 32 : 64), 4 & (t &= ~(c ? 64 : 32)) || (t &= -4);
            var d = [
                e,
                t,
                a,
                c ? o : void 0,
                c ? i : void 0,
                c ? void 0 : o,
                c ? void 0 : i,
                s,
                l,
                u,
              ],
              f = n.apply(void 0, d);
            return co(e) && yo(f, d), (f.placeholder = r), wo(f, e, t);
          }
          function La(e) {
            var t = he[e];
            return function (e, n) {
              if (
                ((e = is(e)), (n = null == n ? 0 : ln(as(n), 292)) && rn(e))
              ) {
                var r = (ls(e) + "e").split("e");
                return +(
                  (r = (ls(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] +
                  "e" +
                  (+r[1] - n)
                );
              }
              return t(e);
            };
          }
          var Ua =
            gn && 1 / Ft(new gn([, -0]))[1] == 1 / 0
              ? function (e) {
                  return new gn(e);
                }
              : $s;
          function Na(e) {
            return function (t) {
              var n = ro(t);
              return n == _
                ? Wt(t)
                : n == b
                ? Yt(t)
                : (function (e, t) {
                    return ht(t, function (t) {
                      return [t, e[t]];
                    });
                  })(t, e(t));
            };
          }
          function za(e, t, n, a, s, l, u, c) {
            var d = 2 & t;
            if (!d && "function" != typeof e) throw new ve(o);
            var f = a ? a.length : 0;
            if (
              (f || ((t &= -97), (a = s = void 0)),
              (u = void 0 === u ? u : sn(as(u), 0)),
              (c = void 0 === c ? c : as(c)),
              (f -= s ? s.length : 0),
              64 & t)
            ) {
              var h = a,
                p = s;
              a = s = void 0;
            }
            var _ = d ? void 0 : qa(e),
              g = [e, t, n, a, s, h, p, l, u, c];
            if (
              (_ &&
                (function (e, t) {
                  var n = e[1],
                    r = t[1],
                    a = n | r,
                    o = a < 131,
                    s =
                      (128 == r && 8 == n) ||
                      (128 == r && 256 == n && e[7].length <= t[8]) ||
                      (384 == r && t[7].length <= t[8] && 8 == n);
                  if (!o && !s) return e;
                  1 & r && ((e[2] = t[2]), (a |= 1 & n ? 0 : 4));
                  var l = t[3];
                  if (l) {
                    var u = e[3];
                    (e[3] = u ? ga(u, l, t[4]) : l),
                      (e[4] = u ? Gt(e[3], i) : t[4]);
                  }
                  (l = t[5]) &&
                    ((u = e[5]),
                    (e[5] = u ? va(u, l, t[6]) : l),
                    (e[6] = u ? Gt(e[5], i) : t[6]));
                  (l = t[7]) && (e[7] = l);
                  128 & r && (e[8] = null == e[8] ? t[8] : ln(e[8], t[8]));
                  null == e[9] && (e[9] = t[9]);
                  (e[0] = t[0]), (e[1] = a);
                })(g, _),
              (e = g[0]),
              (t = g[1]),
              (n = g[2]),
              (a = g[3]),
              (s = g[4]),
              !(c = g[9] =
                void 0 === g[9] ? (d ? 0 : e.length) : sn(g[9] - f, 0)) &&
                24 & t &&
                (t &= -25),
              t && 1 != t)
            )
              v =
                8 == t || 16 == t
                  ? (function (e, t, n) {
                      var a = Sa(e);
                      return function o() {
                        for (
                          var i = arguments.length, s = r(i), l = i, u = Xa(o);
                          l--;

                        )
                          s[l] = arguments[l];
                        var c =
                          i < 3 && s[0] !== u && s[i - 1] !== u ? [] : Gt(s, u);
                        if ((i -= c.length) < n)
                          return ja(
                            e,
                            t,
                            xa,
                            o.placeholder,
                            void 0,
                            s,
                            c,
                            void 0,
                            void 0,
                            n - i
                          );
                        var d =
                          this && this !== Ve && this instanceof o ? a : e;
                        return ot(d, this, s);
                      };
                    })(e, t, c)
                  : (32 != t && 33 != t) || s.length
                  ? xa.apply(void 0, g)
                  : (function (e, t, n, a) {
                      var o = 1 & t,
                        i = Sa(e);
                      return function t() {
                        for (
                          var s = -1,
                            l = arguments.length,
                            u = -1,
                            c = a.length,
                            d = r(c + l),
                            f =
                              this && this !== Ve && this instanceof t ? i : e;
                          ++u < c;

                        )
                          d[u] = a[u];
                        for (; l--; ) d[u++] = arguments[++s];
                        return ot(f, o ? n : this, d);
                      };
                    })(e, t, n, a);
            else
              var v = (function (e, t, n) {
                var r = 1 & t,
                  a = Sa(e);
                return function t() {
                  var o = this && this !== Ve && this instanceof t ? a : e;
                  return o.apply(r ? n : this, arguments);
                };
              })(e, t, n);
            return wo((_ ? Gr : yo)(v, g), e, t);
          }
          function Wa(e, t, n, r) {
            return void 0 === e || (Ri(e, ye[n]) && !we.call(r, n)) ? t : e;
          }
          function Ka(e, t, n, r, a, o) {
            return (
              Fi(e) &&
                Fi(t) &&
                (o.set(t, e), Ir(e, t, void 0, Ka, o), o.delete(t)),
              e
            );
          }
          function Ga(e) {
            return qi(e) ? void 0 : e;
          }
          function Fa(e, t, n, r, a, o) {
            var i = 1 & n,
              s = e.length,
              l = t.length;
            if (s != l && !(i && l > s)) return false;
            var u = o.get(e),
              c = o.get(t);
            if (u && c) return u == t && c == e;
            var d = -1,
              f = true,
              h = 2 & n ? new Ln() : void 0;
            for (o.set(e, t), o.set(t, e); ++d < s; ) {
              var p = e[d],
                _ = t[d];
              if (r) var g = i ? r(_, p, d, t, e, o) : r(p, _, d, e, t, o);
              if (void 0 !== g) {
                if (g) continue;
                f = false;
                break;
              }
              if (h) {
                if (
                  !vt(t, function (e, t) {
                    if (!Dt(h, t) && (p === e || a(p, e, n, r, o)))
                      return h.push(t);
                  })
                ) {
                  f = false;
                  break;
                }
              } else if (p !== _ && !a(p, _, n, r, o)) {
                f = false;
                break;
              }
            }
            return o.delete(e), o.delete(t), f;
          }
          function Ya(e) {
            return Oo(go(e, void 0, Bo), e + "");
          }
          function Ha(e) {
            return hr(e, Es, to);
          }
          function Va(e) {
            return hr(e, Os, no);
          }
          var qa = bn
            ? function (e) {
                return bn.get(e);
              }
            : $s;
          function Za(e) {
            for (
              var t = e.name + "", n = yn[t], r = we.call(yn, t) ? n.length : 0;
              r--;

            ) {
              var a = n[r],
                o = a.func;
              if (null == o || o == e) return a.name;
            }
            return t;
          }
          function Xa(e) {
            return (we.call(xn, "placeholder") ? xn : e).placeholder;
          }
          function Ja() {
            var e = xn.iteratee || qs;
            return (
              (e = e === qs ? Tr : e),
              arguments.length ? e(arguments[0], arguments[1]) : e
            );
          }
          function $a(e, t) {
            var n,
              r,
              a = e.__data__;
            return (
              "string" == (r = typeof (n = t)) ||
              "number" == r ||
              "symbol" == r ||
              "boolean" == r
                ? "__proto__" !== n
                : null === n
            )
              ? a["string" == typeof t ? "string" : "hash"]
              : a.map;
          }
          function Qa(e) {
            for (var t = Es(e), n = t.length; n--; ) {
              var r = t[n],
                a = e[r];
              t[n] = [r, a, po(a)];
            }
            return t;
          }
          function eo(e, t) {
            var n = (function (e, t) {
              return null == e ? void 0 : e[t];
            })(e, t);
            return wr(n) ? n : void 0;
          }
          var to = tn
              ? function (e) {
                  return null == e
                    ? []
                    : ((e = pe(e)),
                      ct(tn(e), function (t) {
                        return He.call(e, t);
                      }));
                }
              : ol,
            no = tn
              ? function (e) {
                  for (var t = []; e; ) pt(t, to(e)), (e = Ke(e));
                  return t;
                }
              : ol,
            ro = pr;
          function ao(e, t, n) {
            for (var r = -1, a = (t = la(t, e)).length, o = false; ++r < a; ) {
              var i = Ao(t[r]);
              if (!(o = null != e && n(e, i))) break;
              e = e[i];
            }
            return o || ++r != a
              ? o
              : !!(a = null == e ? 0 : e.length) &&
                  Gi(a) &&
                  so(i, a) &&
                  (Pi(e) || Di(e));
          }
          function oo(e) {
            return "function" != typeof e.constructor || ho(e) ? {} : Rn(Ke(e));
          }
          function io(e) {
            return Pi(e) || Di(e) || !!(Ze && e && e[Ze]);
          }
          function so(e, t) {
            var n = typeof e;
            return (
              !!(t = null == t ? 9007199254740991 : t) &&
              ("number" == n || ("symbol" != n && le.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < t
            );
          }
          function lo(e, t, n) {
            if (!Fi(n)) return false;
            var r = typeof t;
            return (
              !!("number" == r
                ? ji(n) && so(t, n.length)
                : "string" == r && t in n) && Ri(n[t], e)
            );
          }
          function uo(e, t) {
            if (Pi(e)) return false;
            var n = typeof e;
            return (
              !(
                "number" != n &&
                "symbol" != n &&
                "boolean" != n &&
                null != e &&
                !$i(e)
              ) ||
              F.test(e) ||
              !G.test(e) ||
              (null != t && e in pe(t))
            );
          }
          function co(e) {
            var t = Za(e),
              n = xn[t];
            if ("function" != typeof n || !(t in Dn.prototype)) return false;
            if (e === n) return true;
            var r = qa(n);
            return !!r && e === r[0];
          }
          ((hn && ro(new hn(new ArrayBuffer(1))) != T) ||
            (pn && ro(new pn()) != _) ||
            (_n && "[object Promise]" != ro(_n.resolve())) ||
            (gn && ro(new gn()) != b) ||
            (vn && ro(new vn()) != O)) &&
            (ro = function (e) {
              var t = pr(e),
                n = t == v ? e.constructor : void 0,
                r = n ? ko(n) : "";
              if (r)
                switch (r) {
                  case En:
                    return T;
                  case On:
                    return _;
                  case wn:
                    return "[object Promise]";
                  case Tn:
                    return b;
                  case Mn:
                    return O;
                }
              return t;
            });
          var fo = Ee ? Wi : il;
          function ho(e) {
            var t = e && e.constructor;
            return e === (("function" == typeof t && t.prototype) || ye);
          }
          function po(e) {
            return e == e && !Fi(e);
          }
          function _o(e, t) {
            return function (n) {
              return null != n && n[e] === t && (void 0 !== t || e in pe(n));
            };
          }
          function go(e, t, n) {
            return (
              (t = sn(void 0 === t ? e.length - 1 : t, 0)),
              function () {
                for (
                  var a = arguments, o = -1, i = sn(a.length - t, 0), s = r(i);
                  ++o < i;

                )
                  s[o] = a[t + o];
                o = -1;
                for (var l = r(t + 1); ++o < t; ) l[o] = a[o];
                return (l[t] = n(s)), ot(e, this, l);
              }
            );
          }
          function vo(e, t) {
            return t.length < 2 ? e : fr(e, Hr(t, 0, -1));
          }
          function mo(e, t) {
            for (var n = e.length, r = ln(t.length, n), a = ma(e); r--; ) {
              var o = t[r];
              e[r] = so(o, n) ? a[o] : void 0;
            }
            return e;
          }
          function bo(e, t) {
            if (
              ("constructor" !== t || "function" != typeof e[t]) &&
              "__proto__" != t
            )
              return e[t];
          }
          var yo = To(Gr),
            Eo =
              $t ||
              function (e, t) {
                return Ve.setTimeout(e, t);
              },
            Oo = To(Fr);
          function wo(e, t, n) {
            var r = t + "";
            return Oo(
              e,
              (function (e, t) {
                var n = t.length;
                if (!n) return e;
                var r = n - 1;
                return (
                  (t[r] = (n > 1 ? "& " : "") + t[r]),
                  (t = t.join(n > 2 ? ", " : " ")),
                  e.replace(X, "{\n/* [wrapped with " + t + "] */\n")
                );
              })(
                r,
                (function (e, t) {
                  return (
                    st(s, function (n) {
                      var r = "_." + n[0];
                      t & n[1] && !dt(e, r) && e.push(r);
                    }),
                    e.sort()
                  );
                })(
                  (function (e) {
                    var t = e.match(J);
                    return t ? t[1].split($) : [];
                  })(r),
                  n
                )
              )
            );
          }
          function To(e) {
            var t = 0,
              n = 0;
            return function () {
              var r = un(),
                a = 16 - (r - n);
              if (((n = r), a > 0)) {
                if (++t >= 800) return arguments[0];
              } else t = 0;
              return e.apply(void 0, arguments);
            };
          }
          function Mo(e, t) {
            var n = -1,
              r = e.length,
              a = r - 1;
            for (t = void 0 === t ? r : t; ++n < t; ) {
              var o = Lr(n, a),
                i = e[o];
              (e[o] = e[n]), (e[n] = i);
            }
            return (e.length = t), e;
          }
          var So = (function (e) {
            var t = Ti(e, function (e) {
                return 500 === n.size && n.clear(), e;
              }),
              n = t.cache;
            return t;
          })(function (e) {
            var t = [];
            return (
              46 === e.charCodeAt(0) && t.push(""),
              e.replace(Y, function (e, n, r, a) {
                t.push(r ? a.replace(te, "$1") : n || e);
              }),
              t
            );
          });
          function Ao(e) {
            if ("string" == typeof e || $i(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
          }
          function ko(e) {
            if (null != e) {
              try {
                return Oe.call(e);
              } catch (e) {}
              try {
                return e + "";
              } catch (e) {}
            }
            return "";
          }
          function xo(e) {
            if (e instanceof Dn) return e.clone();
            var t = new Cn(e.__wrapped__, e.__chain__);
            return (
              (t.__actions__ = ma(e.__actions__)),
              (t.__index__ = e.__index__),
              (t.__values__ = e.__values__),
              t
            );
          }
          var Ro = Nr(function (e, t) {
              return Li(e) ? er(e, ir(t, 1, Li, true)) : [];
            }),
            Io = Nr(function (e, t) {
              var n = zo(t);
              return (
                Li(n) && (n = void 0),
                Li(e) ? er(e, ir(t, 1, Li, true), Ja(n, 2)) : []
              );
            }),
            Co = Nr(function (e, t) {
              var n = zo(t);
              return (
                Li(n) && (n = void 0),
                Li(e) ? er(e, ir(t, 1, Li, true), void 0, n) : []
              );
            });
          function Do(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var a = null == n ? 0 : as(n);
            return a < 0 && (a = sn(r + a, 0)), yt(e, Ja(t, 3), a);
          }
          function Po(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var a = r - 1;
            return (
              void 0 !== n &&
                ((a = as(n)), (a = n < 0 ? sn(r + a, 0) : ln(a, r - 1))),
              yt(e, Ja(t, 3), a, true)
            );
          }
          function Bo(e) {
            return (null == e ? 0 : e.length) ? ir(e, 1) : [];
          }
          function jo(e) {
            return e && e.length ? e[0] : void 0;
          }
          var Lo = Nr(function (e) {
              var t = ht(e, ia);
              return t.length && t[0] === e[0] ? mr(t) : [];
            }),
            Uo = Nr(function (e) {
              var t = zo(e),
                n = ht(e, ia);
              return (
                t === zo(n) ? (t = void 0) : n.pop(),
                n.length && n[0] === e[0] ? mr(n, Ja(t, 2)) : []
              );
            }),
            No = Nr(function (e) {
              var t = zo(e),
                n = ht(e, ia);
              return (
                (t = "function" == typeof t ? t : void 0) && n.pop(),
                n.length && n[0] === e[0] ? mr(n, void 0, t) : []
              );
            });
          function zo(e) {
            var t = null == e ? 0 : e.length;
            return t ? e[t - 1] : void 0;
          }
          var Wo = Nr(Ko);
          function Ko(e, t) {
            return e && e.length && t && t.length ? Br(e, t) : e;
          }
          var Go = Ya(function (e, t) {
            var n = null == e ? 0 : e.length,
              r = Zn(e, t);
            return (
              jr(
                e,
                ht(t, function (e) {
                  return so(e, n) ? +e : e;
                }).sort(_a)
              ),
              r
            );
          });
          function Fo(e) {
            return null == e ? e : fn.call(e);
          }
          var Yo = Nr(function (e) {
              return Qr(ir(e, 1, Li, true));
            }),
            Ho = Nr(function (e) {
              var t = zo(e);
              return Li(t) && (t = void 0), Qr(ir(e, 1, Li, true), Ja(t, 2));
            }),
            Vo = Nr(function (e) {
              var t = zo(e);
              return (
                (t = "function" == typeof t ? t : void 0),
                Qr(ir(e, 1, Li, true), void 0, t)
              );
            });
          function qo(e) {
            if (!e || !e.length) return [];
            var t = 0;
            return (
              (e = ct(e, function (e) {
                if (Li(e)) return (t = sn(e.length, t)), true;
              })),
              xt(t, function (t) {
                return ht(e, Mt(t));
              })
            );
          }
          function Zo(e, t) {
            if (!e || !e.length) return [];
            var n = qo(e);
            return null == t
              ? n
              : ht(n, function (e) {
                  return ot(t, void 0, e);
                });
          }
          var Xo = Nr(function (e, t) {
              return Li(e) ? er(e, t) : [];
            }),
            Jo = Nr(function (e) {
              return aa(ct(e, Li));
            }),
            $o = Nr(function (e) {
              var t = zo(e);
              return Li(t) && (t = void 0), aa(ct(e, Li), Ja(t, 2));
            }),
            Qo = Nr(function (e) {
              var t = zo(e);
              return (
                (t = "function" == typeof t ? t : void 0),
                aa(ct(e, Li), void 0, t)
              );
            }),
            ei = Nr(qo);
          var ti = Nr(function (e) {
            var t = e.length,
              n = t > 1 ? e[t - 1] : void 0;
            return (
              (n = "function" == typeof n ? (e.pop(), n) : void 0), Zo(e, n)
            );
          });
          function ni(e) {
            var t = xn(e);
            return (t.__chain__ = true), t;
          }
          function ri(e, t) {
            return t(e);
          }
          var ai = Ya(function (e) {
            var t = e.length,
              n = t ? e[0] : 0,
              r = this.__wrapped__,
              a = function (t) {
                return Zn(t, e);
              };
            return !(t > 1 || this.__actions__.length) &&
              r instanceof Dn &&
              so(n)
              ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                  func: ri,
                  args: [a],
                  thisArg: void 0,
                }),
                new Cn(r, this.__chain__).thru(function (e) {
                  return t && !e.length && e.push(void 0), e;
                }))
              : this.thru(a);
          });
          var oi = ya(function (e, t, n) {
            we.call(e, n) ? ++e[n] : qn(e, n, 1);
          });
          var ii = Aa(Do),
            si = Aa(Po);
          function li(e, t) {
            return (Pi(e) ? st : tr)(e, Ja(t, 3));
          }
          function ui(e, t) {
            return (Pi(e) ? lt : nr)(e, Ja(t, 3));
          }
          var ci = ya(function (e, t, n) {
            we.call(e, n) ? e[n].push(t) : qn(e, n, [t]);
          });
          var di = Nr(function (e, t, n) {
              var a = -1,
                o = "function" == typeof t,
                i = ji(e) ? r(e.length) : [];
              return (
                tr(e, function (e) {
                  i[++a] = o ? ot(t, e, n) : br(e, t, n);
                }),
                i
              );
            }),
            fi = ya(function (e, t, n) {
              qn(e, n, t);
            });
          function hi(e, t) {
            return (Pi(e) ? ht : kr)(e, Ja(t, 3));
          }
          var pi = ya(
            function (e, t, n) {
              e[n ? 0 : 1].push(t);
            },
            function () {
              return [[], []];
            }
          );
          var _i = Nr(function (e, t) {
              if (null == e) return [];
              var n = t.length;
              return (
                n > 1 && lo(e, t[0], t[1])
                  ? (t = [])
                  : n > 2 && lo(t[0], t[1], t[2]) && (t = [t[0]]),
                Dr(e, ir(t, 1), [])
              );
            }),
            gi =
              Jt ||
              function () {
                return Ve.Date.now();
              };
          function vi(e, t, n) {
            return (
              (t = n ? void 0 : t),
              za(
                e,
                128,
                void 0,
                void 0,
                void 0,
                void 0,
                (t = e && null == t ? e.length : t)
              )
            );
          }
          function mi(e, t) {
            var n;
            if ("function" != typeof t) throw new ve(o);
            return (
              (e = as(e)),
              function () {
                return (
                  --e > 0 && (n = t.apply(this, arguments)),
                  e <= 1 && (t = void 0),
                  n
                );
              }
            );
          }
          var bi = Nr(function (e, t, n) {
              var r = 1;
              if (n.length) {
                var a = Gt(n, Xa(bi));
                r |= 32;
              }
              return za(e, r, t, n, a);
            }),
            yi = Nr(function (e, t, n) {
              var r = 3;
              if (n.length) {
                var a = Gt(n, Xa(yi));
                r |= 32;
              }
              return za(t, r, e, n, a);
            });
          function Ei(e, t, n) {
            var r,
              a,
              i,
              s,
              l,
              u,
              c = 0,
              d = false,
              f = false,
              h = true;
            if ("function" != typeof e) throw new ve(o);
            function p(t) {
              var n = r,
                o = a;
              return (r = a = void 0), (c = t), (s = e.apply(o, n));
            }
            function _(e) {
              return (c = e), (l = Eo(v, t)), d ? p(e) : s;
            }
            function g(e) {
              var n = e - u;
              return void 0 === u || n >= t || n < 0 || (f && e - c >= i);
            }
            function v() {
              var e = gi();
              if (g(e)) return m(e);
              l = Eo(
                v,
                (function (e) {
                  var n = t - (e - u);
                  return f ? ln(n, i - (e - c)) : n;
                })(e)
              );
            }
            function m(e) {
              return (l = void 0), h && r ? p(e) : ((r = a = void 0), s);
            }
            function b() {
              var e = gi(),
                n = g(e);
              if (((r = arguments), (a = this), (u = e), n)) {
                if (void 0 === l) return _(u);
                if (f) return da(l), (l = Eo(v, t)), p(u);
              }
              return void 0 === l && (l = Eo(v, t)), s;
            }
            return (
              (t = is(t) || 0),
              Fi(n) &&
                ((d = !!n.leading),
                (i = (f = "maxWait" in n) ? sn(is(n.maxWait) || 0, t) : i),
                (h = "trailing" in n ? !!n.trailing : h)),
              (b.cancel = function () {
                void 0 !== l && da(l), (c = 0), (r = u = a = l = void 0);
              }),
              (b.flush = function () {
                return void 0 === l ? s : m(gi());
              }),
              b
            );
          }
          var Oi = Nr(function (e, t) {
              return Qn(e, 1, t);
            }),
            wi = Nr(function (e, t, n) {
              return Qn(e, is(t) || 0, n);
            });
          function Ti(e, t) {
            if ("function" != typeof e || (null != t && "function" != typeof t))
              throw new ve(o);
            var n = function () {
              var r = arguments,
                a = t ? t.apply(this, r) : r[0],
                o = n.cache;
              if (o.has(a)) return o.get(a);
              var i = e.apply(this, r);
              return (n.cache = o.set(a, i) || o), i;
            };
            return (n.cache = new (Ti.Cache || jn)()), n;
          }
          function Mi(e) {
            if ("function" != typeof e) throw new ve(o);
            return function () {
              var t = arguments;
              switch (t.length) {
                case 0:
                  return !e.call(this);
                case 1:
                  return !e.call(this, t[0]);
                case 2:
                  return !e.call(this, t[0], t[1]);
                case 3:
                  return !e.call(this, t[0], t[1], t[2]);
              }
              return !e.apply(this, t);
            };
          }
          Ti.Cache = jn;
          var Si = ua(function (e, t) {
              var n = (t =
                1 == t.length && Pi(t[0])
                  ? ht(t[0], It(Ja()))
                  : ht(ir(t, 1), It(Ja()))).length;
              return Nr(function (r) {
                for (var a = -1, o = ln(r.length, n); ++a < o; )
                  r[a] = t[a].call(this, r[a]);
                return ot(e, this, r);
              });
            }),
            Ai = Nr(function (e, t) {
              return za(e, 32, void 0, t, Gt(t, Xa(Ai)));
            }),
            ki = Nr(function (e, t) {
              return za(e, 64, void 0, t, Gt(t, Xa(ki)));
            }),
            xi = Ya(function (e, t) {
              return za(e, 256, void 0, void 0, void 0, t);
            });
          function Ri(e, t) {
            return e === t || (e != e && t != t);
          }
          var Ii = Ba(_r),
            Ci = Ba(function (e, t) {
              return e >= t;
            }),
            Di = yr(
              (function () {
                return arguments;
              })()
            )
              ? yr
              : function (e) {
                  return Yi(e) && we.call(e, "callee") && !He.call(e, "callee");
                },
            Pi = r.isArray,
            Bi = Qe
              ? It(Qe)
              : function (e) {
                  return Yi(e) && pr(e) == w;
                };
          function ji(e) {
            return null != e && Gi(e.length) && !Wi(e);
          }
          function Li(e) {
            return Yi(e) && ji(e);
          }
          var Ui = nn || il,
            Ni = et
              ? It(et)
              : function (e) {
                  return Yi(e) && pr(e) == d;
                };
          function zi(e) {
            if (!Yi(e)) return false;
            var t = pr(e);
            return (
              t == f ||
              "[object DOMException]" == t ||
              ("string" == typeof e.message &&
                "string" == typeof e.name &&
                !qi(e))
            );
          }
          function Wi(e) {
            if (!Fi(e)) return false;
            var t = pr(e);
            return (
              t == h ||
              t == p ||
              "[object AsyncFunction]" == t ||
              "[object Proxy]" == t
            );
          }
          function Ki(e) {
            return "number" == typeof e && e == as(e);
          }
          function Gi(e) {
            return (
              "number" == typeof e &&
              e > -1 &&
              e % 1 == 0 &&
              e <= 9007199254740991
            );
          }
          function Fi(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          }
          function Yi(e) {
            return null != e && "object" == typeof e;
          }
          var Hi = tt
            ? It(tt)
            : function (e) {
                return Yi(e) && ro(e) == _;
              };
          function Vi(e) {
            return "number" == typeof e || (Yi(e) && pr(e) == g);
          }
          function qi(e) {
            if (!Yi(e) || pr(e) != v) return false;
            var t = Ke(e);
            if (null === t) return true;
            var n = we.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && Oe.call(n) == Ae;
          }
          var Zi = nt
            ? It(nt)
            : function (e) {
                return Yi(e) && pr(e) == m;
              };
          var Xi = rt
            ? It(rt)
            : function (e) {
                return Yi(e) && ro(e) == b;
              };
          function Ji(e) {
            return "string" == typeof e || (!Pi(e) && Yi(e) && pr(e) == y);
          }
          function $i(e) {
            return "symbol" == typeof e || (Yi(e) && pr(e) == E);
          }
          var Qi = at
            ? It(at)
            : function (e) {
                return Yi(e) && Gi(e.length) && !!ze[pr(e)];
              };
          var es = Ba(Ar),
            ts = Ba(function (e, t) {
              return e <= t;
            });
          function ns(e) {
            if (!e) return [];
            if (ji(e)) return Ji(e) ? Vt(e) : ma(e);
            if (Je && e[Je])
              return (function (e) {
                for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
                return n;
              })(e[Je]());
            var t = ro(e);
            return (t == _ ? Wt : t == b ? Ft : Rs)(e);
          }
          function rs(e) {
            return e
              ? (e = is(e)) === 1 / 0 || e === -1 / 0
                ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                : e == e
                ? e
                : 0
              : 0 === e
              ? e
              : 0;
          }
          function as(e) {
            var t = rs(e),
              n = t % 1;
            return t == t ? (n ? t - n : t) : 0;
          }
          function os(e) {
            return e ? Xn(as(e), 0, 4294967295) : 0;
          }
          function is(e) {
            if ("number" == typeof e) return e;
            if ($i(e)) return NaN;
            if (Fi(e)) {
              var t = "function" == typeof e.valueOf ? e.valueOf() : e;
              e = Fi(t) ? t + "" : t;
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = Rt(e);
            var n = oe.test(e);
            return n || se.test(e)
              ? Fe(e.slice(2), n ? 2 : 8)
              : ae.test(e)
              ? NaN
              : +e;
          }
          function ss(e) {
            return ba(e, Os(e));
          }
          function ls(e) {
            return null == e ? "" : $r(e);
          }
          var us = Ea(function (e, t) {
              if (ho(t) || ji(t)) ba(t, Es(t), e);
              else for (var n in t) we.call(t, n) && Fn(e, n, t[n]);
            }),
            cs = Ea(function (e, t) {
              ba(t, Os(t), e);
            }),
            ds = Ea(function (e, t, n, r) {
              ba(t, Os(t), e, r);
            }),
            fs = Ea(function (e, t, n, r) {
              ba(t, Es(t), e, r);
            }),
            hs = Ya(Zn);
          var ps = Nr(function (e, t) {
              e = pe(e);
              var n = -1,
                r = t.length,
                a = r > 2 ? t[2] : void 0;
              for (a && lo(t[0], t[1], a) && (r = 1); ++n < r; )
                for (var o = t[n], i = Os(o), s = -1, l = i.length; ++s < l; ) {
                  var u = i[s],
                    c = e[u];
                  (void 0 === c || (Ri(c, ye[u]) && !we.call(e, u))) &&
                    (e[u] = o[u]);
                }
              return e;
            }),
            _s = Nr(function (e) {
              return e.push(void 0, Ka), ot(Ts, void 0, e);
            });
          function gs(e, t, n) {
            var r = null == e ? void 0 : fr(e, t);
            return void 0 === r ? n : r;
          }
          function vs(e, t) {
            return null != e && ao(e, t, vr);
          }
          var ms = Ra(function (e, t, n) {
              null != t && "function" != typeof t.toString && (t = Se.call(t)),
                (e[t] = n);
            }, Fs(Vs)),
            bs = Ra(function (e, t, n) {
              null != t && "function" != typeof t.toString && (t = Se.call(t)),
                we.call(e, t) ? e[t].push(n) : (e[t] = [n]);
            }, Ja),
            ys = Nr(br);
          function Es(e) {
            return ji(e) ? Nn(e) : Mr(e);
          }
          function Os(e) {
            return ji(e) ? Nn(e, true) : Sr(e);
          }
          var ws = Ea(function (e, t, n) {
              Ir(e, t, n);
            }),
            Ts = Ea(function (e, t, n, r) {
              Ir(e, t, n, r);
            }),
            Ms = Ya(function (e, t) {
              var n = {};
              if (null == e) return n;
              var r = false;
              (t = ht(t, function (t) {
                return (t = la(t, e)), r || (r = t.length > 1), t;
              })),
                ba(e, Va(e), n),
                r && (n = Jn(n, 7, Ga));
              for (var a = t.length; a--; ) ea(n, t[a]);
              return n;
            });
          var Ss = Ya(function (e, t) {
            return null == e
              ? {}
              : (function (e, t) {
                  return Pr(e, t, function (t, n) {
                    return vs(e, n);
                  });
                })(e, t);
          });
          function As(e, t) {
            if (null == e) return {};
            var n = ht(Va(e), function (e) {
              return [e];
            });
            return (
              (t = Ja(t)),
              Pr(e, n, function (e, n) {
                return t(e, n[0]);
              })
            );
          }
          var ks = Na(Es),
            xs = Na(Os);
          function Rs(e) {
            return null == e ? [] : Ct(e, Es(e));
          }
          var Is = Ma(function (e, t, n) {
            return (t = t.toLowerCase()), e + (n ? Cs(t) : t);
          });
          function Cs(e) {
            return zs(ls(e).toLowerCase());
          }
          function Ds(e) {
            return (e = ls(e)) && e.replace(ue, Lt).replace(De, "");
          }
          var Ps = Ma(function (e, t, n) {
              return e + (n ? "-" : "") + t.toLowerCase();
            }),
            Bs = Ma(function (e, t, n) {
              return e + (n ? " " : "") + t.toLowerCase();
            }),
            js = Ta("toLowerCase");
          var Ls = Ma(function (e, t, n) {
            return e + (n ? "_" : "") + t.toLowerCase();
          });
          var Us = Ma(function (e, t, n) {
            return e + (n ? " " : "") + zs(t);
          });
          var Ns = Ma(function (e, t, n) {
              return e + (n ? " " : "") + t.toUpperCase();
            }),
            zs = Ta("toUpperCase");
          function Ws(e, t, n) {
            return (
              (e = ls(e)),
              void 0 === (t = n ? void 0 : t)
                ? (function (e) {
                    return Le.test(e);
                  })(e)
                  ? (function (e) {
                      return e.match(Be) || [];
                    })(e)
                  : (function (e) {
                      return e.match(Q) || [];
                    })(e)
                : e.match(t) || []
            );
          }
          var Ks = Nr(function (e, t) {
              try {
                return ot(e, void 0, t);
              } catch (e) {
                return zi(e) ? e : new Z(e);
              }
            }),
            Gs = Ya(function (e, t) {
              return (
                st(t, function (t) {
                  (t = Ao(t)), qn(e, t, bi(e[t], e));
                }),
                e
              );
            });
          function Fs(e) {
            return function () {
              return e;
            };
          }
          var Ys = ka(),
            Hs = ka(true);
          function Vs(e) {
            return e;
          }
          function qs(e) {
            return Tr("function" == typeof e ? e : Jn(e, 1));
          }
          var Zs = Nr(function (e, t) {
              return function (n) {
                return br(n, e, t);
              };
            }),
            Xs = Nr(function (e, t) {
              return function (n) {
                return br(e, n, t);
              };
            });
          function Js(e, t, n) {
            var r = Es(t),
              a = dr(t, r);
            null != n ||
              (Fi(t) && (a.length || !r.length)) ||
              ((n = t), (t = e), (e = this), (a = dr(t, Es(t))));
            var o = !(Fi(n) && "chain" in n && !n.chain),
              i = Wi(e);
            return (
              st(a, function (n) {
                var r = t[n];
                (e[n] = r),
                  i &&
                    (e.prototype[n] = function () {
                      var t = this.__chain__;
                      if (o || t) {
                        var n = e(this.__wrapped__),
                          a = (n.__actions__ = ma(this.__actions__));
                        return (
                          a.push({ func: r, args: arguments, thisArg: e }),
                          (n.__chain__ = t),
                          n
                        );
                      }
                      return r.apply(e, pt([this.value()], arguments));
                    });
              }),
              e
            );
          }
          function $s() {}
          var Qs = Ca(ht),
            el = Ca(ut),
            tl = Ca(vt);
          function nl(e) {
            return uo(e)
              ? Mt(Ao(e))
              : (function (e) {
                  return function (t) {
                    return fr(t, e);
                  };
                })(e);
          }
          var rl = Pa(),
            al = Pa(true);
          function ol() {
            return [];
          }
          function il() {
            return false;
          }
          var sl = Ia(function (e, t) {
              return e + t;
            }, 0),
            ll = La("ceil"),
            ul = Ia(function (e, t) {
              return e / t;
            }, 1),
            cl = La("floor");
          var dl,
            fl = Ia(function (e, t) {
              return e * t;
            }, 1),
            hl = La("round"),
            pl = Ia(function (e, t) {
              return e - t;
            }, 0);
          return (
            (xn.after = function (e, t) {
              if ("function" != typeof t) throw new ve(o);
              return (
                (e = as(e)),
                function () {
                  if (--e < 1) return t.apply(this, arguments);
                }
              );
            }),
            (xn.ary = vi),
            (xn.assign = us),
            (xn.assignIn = cs),
            (xn.assignInWith = ds),
            (xn.assignWith = fs),
            (xn.at = hs),
            (xn.before = mi),
            (xn.bind = bi),
            (xn.bindAll = Gs),
            (xn.bindKey = yi),
            (xn.castArray = function () {
              if (!arguments.length) return [];
              var e = arguments[0];
              return Pi(e) ? e : [e];
            }),
            (xn.chain = ni),
            (xn.chunk = function (e, t, n) {
              t = (n ? lo(e, t, n) : void 0 === t) ? 1 : sn(as(t), 0);
              var a = null == e ? 0 : e.length;
              if (!a || t < 1) return [];
              for (var o = 0, i = 0, s = r(Qt(a / t)); o < a; )
                s[i++] = Hr(e, o, (o += t));
              return s;
            }),
            (xn.compact = function (e) {
              for (
                var t = -1, n = null == e ? 0 : e.length, r = 0, a = [];
                ++t < n;

              ) {
                var o = e[t];
                o && (a[r++] = o);
              }
              return a;
            }),
            (xn.concat = function () {
              var e = arguments.length;
              if (!e) return [];
              for (var t = r(e - 1), n = arguments[0], a = e; a--; )
                t[a - 1] = arguments[a];
              return pt(Pi(n) ? ma(n) : [n], ir(t, 1));
            }),
            (xn.cond = function (e) {
              var t = null == e ? 0 : e.length,
                n = Ja();
              return (
                (e = t
                  ? ht(e, function (e) {
                      if ("function" != typeof e[1]) throw new ve(o);
                      return [n(e[0]), e[1]];
                    })
                  : []),
                Nr(function (n) {
                  for (var r = -1; ++r < t; ) {
                    var a = e[r];
                    if (ot(a[0], this, n)) return ot(a[1], this, n);
                  }
                })
              );
            }),
            (xn.conforms = function (e) {
              return (function (e) {
                var t = Es(e);
                return function (n) {
                  return $n(n, e, t);
                };
              })(Jn(e, 1));
            }),
            (xn.constant = Fs),
            (xn.countBy = oi),
            (xn.create = function (e, t) {
              var n = Rn(e);
              return null == t ? n : Vn(n, t);
            }),
            (xn.curry = function e(t, n, r) {
              var a = za(
                t,
                8,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                (n = r ? void 0 : n)
              );
              return (a.placeholder = e.placeholder), a;
            }),
            (xn.curryRight = function e(t, n, r) {
              var a = za(
                t,
                16,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                (n = r ? void 0 : n)
              );
              return (a.placeholder = e.placeholder), a;
            }),
            (xn.debounce = Ei),
            (xn.defaults = ps),
            (xn.defaultsDeep = _s),
            (xn.defer = Oi),
            (xn.delay = wi),
            (xn.difference = Ro),
            (xn.differenceBy = Io),
            (xn.differenceWith = Co),
            (xn.drop = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              return r
                ? Hr(e, (t = n || void 0 === t ? 1 : as(t)) < 0 ? 0 : t, r)
                : [];
            }),
            (xn.dropRight = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              return r
                ? Hr(
                    e,
                    0,
                    (t = r - (t = n || void 0 === t ? 1 : as(t))) < 0 ? 0 : t
                  )
                : [];
            }),
            (xn.dropRightWhile = function (e, t) {
              return e && e.length ? na(e, Ja(t, 3), true, true) : [];
            }),
            (xn.dropWhile = function (e, t) {
              return e && e.length ? na(e, Ja(t, 3), true) : [];
            }),
            (xn.fill = function (e, t, n, r) {
              var a = null == e ? 0 : e.length;
              return a
                ? (n &&
                    "number" != typeof n &&
                    lo(e, t, n) &&
                    ((n = 0), (r = a)),
                  (function (e, t, n, r) {
                    var a = e.length;
                    for (
                      (n = as(n)) < 0 && (n = -n > a ? 0 : a + n),
                        (r = void 0 === r || r > a ? a : as(r)) < 0 && (r += a),
                        r = n > r ? 0 : os(r);
                      n < r;

                    )
                      e[n++] = t;
                    return e;
                  })(e, t, n, r))
                : [];
            }),
            (xn.filter = function (e, t) {
              return (Pi(e) ? ct : or)(e, Ja(t, 3));
            }),
            (xn.flatMap = function (e, t) {
              return ir(hi(e, t), 1);
            }),
            (xn.flatMapDeep = function (e, t) {
              return ir(hi(e, t), 1 / 0);
            }),
            (xn.flatMapDepth = function (e, t, n) {
              return (n = void 0 === n ? 1 : as(n)), ir(hi(e, t), n);
            }),
            (xn.flatten = Bo),
            (xn.flattenDeep = function (e) {
              return (null == e ? 0 : e.length) ? ir(e, 1 / 0) : [];
            }),
            (xn.flattenDepth = function (e, t) {
              return (null == e ? 0 : e.length)
                ? ir(e, (t = void 0 === t ? 1 : as(t)))
                : [];
            }),
            (xn.flip = function (e) {
              return za(e, 512);
            }),
            (xn.flow = Ys),
            (xn.flowRight = Hs),
            (xn.fromPairs = function (e) {
              for (
                var t = -1, n = null == e ? 0 : e.length, r = {};
                ++t < n;

              ) {
                var a = e[t];
                r[a[0]] = a[1];
              }
              return r;
            }),
            (xn.functions = function (e) {
              return null == e ? [] : dr(e, Es(e));
            }),
            (xn.functionsIn = function (e) {
              return null == e ? [] : dr(e, Os(e));
            }),
            (xn.groupBy = ci),
            (xn.initial = function (e) {
              return (null == e ? 0 : e.length) ? Hr(e, 0, -1) : [];
            }),
            (xn.intersection = Lo),
            (xn.intersectionBy = Uo),
            (xn.intersectionWith = No),
            (xn.invert = ms),
            (xn.invertBy = bs),
            (xn.invokeMap = di),
            (xn.iteratee = qs),
            (xn.keyBy = fi),
            (xn.keys = Es),
            (xn.keysIn = Os),
            (xn.map = hi),
            (xn.mapKeys = function (e, t) {
              var n = {};
              return (
                (t = Ja(t, 3)),
                ur(e, function (e, r, a) {
                  qn(n, t(e, r, a), e);
                }),
                n
              );
            }),
            (xn.mapValues = function (e, t) {
              var n = {};
              return (
                (t = Ja(t, 3)),
                ur(e, function (e, r, a) {
                  qn(n, r, t(e, r, a));
                }),
                n
              );
            }),
            (xn.matches = function (e) {
              return xr(Jn(e, 1));
            }),
            (xn.matchesProperty = function (e, t) {
              return Rr(e, Jn(t, 1));
            }),
            (xn.memoize = Ti),
            (xn.merge = ws),
            (xn.mergeWith = Ts),
            (xn.method = Zs),
            (xn.methodOf = Xs),
            (xn.mixin = Js),
            (xn.negate = Mi),
            (xn.nthArg = function (e) {
              return (
                (e = as(e)),
                Nr(function (t) {
                  return Cr(t, e);
                })
              );
            }),
            (xn.omit = Ms),
            (xn.omitBy = function (e, t) {
              return As(e, Mi(Ja(t)));
            }),
            (xn.once = function (e) {
              return mi(2, e);
            }),
            (xn.orderBy = function (e, t, n, r) {
              return null == e
                ? []
                : (Pi(t) || (t = null == t ? [] : [t]),
                  Pi((n = r ? void 0 : n)) || (n = null == n ? [] : [n]),
                  Dr(e, t, n));
            }),
            (xn.over = Qs),
            (xn.overArgs = Si),
            (xn.overEvery = el),
            (xn.overSome = tl),
            (xn.partial = Ai),
            (xn.partialRight = ki),
            (xn.partition = pi),
            (xn.pick = Ss),
            (xn.pickBy = As),
            (xn.property = nl),
            (xn.propertyOf = function (e) {
              return function (t) {
                return null == e ? void 0 : fr(e, t);
              };
            }),
            (xn.pull = Wo),
            (xn.pullAll = Ko),
            (xn.pullAllBy = function (e, t, n) {
              return e && e.length && t && t.length ? Br(e, t, Ja(n, 2)) : e;
            }),
            (xn.pullAllWith = function (e, t, n) {
              return e && e.length && t && t.length ? Br(e, t, void 0, n) : e;
            }),
            (xn.pullAt = Go),
            (xn.range = rl),
            (xn.rangeRight = al),
            (xn.rearg = xi),
            (xn.reject = function (e, t) {
              return (Pi(e) ? ct : or)(e, Mi(Ja(t, 3)));
            }),
            (xn.remove = function (e, t) {
              var n = [];
              if (!e || !e.length) return n;
              var r = -1,
                a = [],
                o = e.length;
              for (t = Ja(t, 3); ++r < o; ) {
                var i = e[r];
                t(i, r, e) && (n.push(i), a.push(r));
              }
              return jr(e, a), n;
            }),
            (xn.rest = function (e, t) {
              if ("function" != typeof e) throw new ve(o);
              return Nr(e, (t = void 0 === t ? t : as(t)));
            }),
            (xn.reverse = Fo),
            (xn.sampleSize = function (e, t, n) {
              return (
                (t = (n ? lo(e, t, n) : void 0 === t) ? 1 : as(t)),
                (Pi(e) ? Wn : Wr)(e, t)
              );
            }),
            (xn.set = function (e, t, n) {
              return null == e ? e : Kr(e, t, n);
            }),
            (xn.setWith = function (e, t, n, r) {
              return (
                (r = "function" == typeof r ? r : void 0),
                null == e ? e : Kr(e, t, n, r)
              );
            }),
            (xn.shuffle = function (e) {
              return (Pi(e) ? Kn : Yr)(e);
            }),
            (xn.slice = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              return r
                ? (n && "number" != typeof n && lo(e, t, n)
                    ? ((t = 0), (n = r))
                    : ((t = null == t ? 0 : as(t)),
                      (n = void 0 === n ? r : as(n))),
                  Hr(e, t, n))
                : [];
            }),
            (xn.sortBy = _i),
            (xn.sortedUniq = function (e) {
              return e && e.length ? Xr(e) : [];
            }),
            (xn.sortedUniqBy = function (e, t) {
              return e && e.length ? Xr(e, Ja(t, 2)) : [];
            }),
            (xn.split = function (e, t, n) {
              return (
                n && "number" != typeof n && lo(e, t, n) && (t = n = void 0),
                (n = void 0 === n ? 4294967295 : n >>> 0)
                  ? (e = ls(e)) &&
                    ("string" == typeof t || (null != t && !Zi(t))) &&
                    !(t = $r(t)) &&
                    zt(e)
                    ? ca(Vt(e), 0, n)
                    : e.split(t, n)
                  : []
              );
            }),
            (xn.spread = function (e, t) {
              if ("function" != typeof e) throw new ve(o);
              return (
                (t = null == t ? 0 : sn(as(t), 0)),
                Nr(function (n) {
                  var r = n[t],
                    a = ca(n, 0, t);
                  return r && pt(a, r), ot(e, this, a);
                })
              );
            }),
            (xn.tail = function (e) {
              var t = null == e ? 0 : e.length;
              return t ? Hr(e, 1, t) : [];
            }),
            (xn.take = function (e, t, n) {
              return e && e.length
                ? Hr(e, 0, (t = n || void 0 === t ? 1 : as(t)) < 0 ? 0 : t)
                : [];
            }),
            (xn.takeRight = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              return r
                ? Hr(
                    e,
                    (t = r - (t = n || void 0 === t ? 1 : as(t))) < 0 ? 0 : t,
                    r
                  )
                : [];
            }),
            (xn.takeRightWhile = function (e, t) {
              return e && e.length ? na(e, Ja(t, 3), false, true) : [];
            }),
            (xn.takeWhile = function (e, t) {
              return e && e.length ? na(e, Ja(t, 3)) : [];
            }),
            (xn.tap = function (e, t) {
              return t(e), e;
            }),
            (xn.throttle = function (e, t, n) {
              var r = true,
                a = true;
              if ("function" != typeof e) throw new ve(o);
              return (
                Fi(n) &&
                  ((r = "leading" in n ? !!n.leading : r),
                  (a = "trailing" in n ? !!n.trailing : a)),
                Ei(e, t, { leading: r, maxWait: t, trailing: a })
              );
            }),
            (xn.thru = ri),
            (xn.toArray = ns),
            (xn.toPairs = ks),
            (xn.toPairsIn = xs),
            (xn.toPath = function (e) {
              return Pi(e) ? ht(e, Ao) : $i(e) ? [e] : ma(So(ls(e)));
            }),
            (xn.toPlainObject = ss),
            (xn.transform = function (e, t, n) {
              var r = Pi(e),
                a = r || Ui(e) || Qi(e);
              if (((t = Ja(t, 4)), null == n)) {
                var o = e && e.constructor;
                n = a ? (r ? new o() : []) : Fi(e) && Wi(o) ? Rn(Ke(e)) : {};
              }
              return (
                (a ? st : ur)(e, function (e, r, a) {
                  return t(n, e, r, a);
                }),
                n
              );
            }),
            (xn.unary = function (e) {
              return vi(e, 1);
            }),
            (xn.union = Yo),
            (xn.unionBy = Ho),
            (xn.unionWith = Vo),
            (xn.uniq = function (e) {
              return e && e.length ? Qr(e) : [];
            }),
            (xn.uniqBy = function (e, t) {
              return e && e.length ? Qr(e, Ja(t, 2)) : [];
            }),
            (xn.uniqWith = function (e, t) {
              return (
                (t = "function" == typeof t ? t : void 0),
                e && e.length ? Qr(e, void 0, t) : []
              );
            }),
            (xn.unset = function (e, t) {
              return null == e || ea(e, t);
            }),
            (xn.unzip = qo),
            (xn.unzipWith = Zo),
            (xn.update = function (e, t, n) {
              return null == e ? e : ta(e, t, sa(n));
            }),
            (xn.updateWith = function (e, t, n, r) {
              return (
                (r = "function" == typeof r ? r : void 0),
                null == e ? e : ta(e, t, sa(n), r)
              );
            }),
            (xn.values = Rs),
            (xn.valuesIn = function (e) {
              return null == e ? [] : Ct(e, Os(e));
            }),
            (xn.without = Xo),
            (xn.words = Ws),
            (xn.wrap = function (e, t) {
              return Ai(sa(t), e);
            }),
            (xn.xor = Jo),
            (xn.xorBy = $o),
            (xn.xorWith = Qo),
            (xn.zip = ei),
            (xn.zipObject = function (e, t) {
              return oa(e || [], t || [], Fn);
            }),
            (xn.zipObjectDeep = function (e, t) {
              return oa(e || [], t || [], Kr);
            }),
            (xn.zipWith = ti),
            (xn.entries = ks),
            (xn.entriesIn = xs),
            (xn.extend = cs),
            (xn.extendWith = ds),
            Js(xn, xn),
            (xn.add = sl),
            (xn.attempt = Ks),
            (xn.camelCase = Is),
            (xn.capitalize = Cs),
            (xn.ceil = ll),
            (xn.clamp = function (e, t, n) {
              return (
                void 0 === n && ((n = t), (t = void 0)),
                void 0 !== n && (n = (n = is(n)) == n ? n : 0),
                void 0 !== t && (t = (t = is(t)) == t ? t : 0),
                Xn(is(e), t, n)
              );
            }),
            (xn.clone = function (e) {
              return Jn(e, 4);
            }),
            (xn.cloneDeep = function (e) {
              return Jn(e, 5);
            }),
            (xn.cloneDeepWith = function (e, t) {
              return Jn(e, 5, (t = "function" == typeof t ? t : void 0));
            }),
            (xn.cloneWith = function (e, t) {
              return Jn(e, 4, (t = "function" == typeof t ? t : void 0));
            }),
            (xn.conformsTo = function (e, t) {
              return null == t || $n(e, t, Es(t));
            }),
            (xn.deburr = Ds),
            (xn.defaultTo = function (e, t) {
              return null == e || e != e ? t : e;
            }),
            (xn.divide = ul),
            (xn.endsWith = function (e, t, n) {
              (e = ls(e)), (t = $r(t));
              var r = e.length,
                a = (n = void 0 === n ? r : Xn(as(n), 0, r));
              return (n -= t.length) >= 0 && e.slice(n, a) == t;
            }),
            (xn.eq = Ri),
            (xn.escape = function (e) {
              return (e = ls(e)) && N.test(e) ? e.replace(L, Ut) : e;
            }),
            (xn.escapeRegExp = function (e) {
              return (e = ls(e)) && V.test(e) ? e.replace(H, "\\$&") : e;
            }),
            (xn.every = function (e, t, n) {
              var r = Pi(e) ? ut : rr;
              return n && lo(e, t, n) && (t = void 0), r(e, Ja(t, 3));
            }),
            (xn.find = ii),
            (xn.findIndex = Do),
            (xn.findKey = function (e, t) {
              return bt(e, Ja(t, 3), ur);
            }),
            (xn.findLast = si),
            (xn.findLastIndex = Po),
            (xn.findLastKey = function (e, t) {
              return bt(e, Ja(t, 3), cr);
            }),
            (xn.floor = cl),
            (xn.forEach = li),
            (xn.forEachRight = ui),
            (xn.forIn = function (e, t) {
              return null == e ? e : sr(e, Ja(t, 3), Os);
            }),
            (xn.forInRight = function (e, t) {
              return null == e ? e : lr(e, Ja(t, 3), Os);
            }),
            (xn.forOwn = function (e, t) {
              return e && ur(e, Ja(t, 3));
            }),
            (xn.forOwnRight = function (e, t) {
              return e && cr(e, Ja(t, 3));
            }),
            (xn.get = gs),
            (xn.gt = Ii),
            (xn.gte = Ci),
            (xn.has = function (e, t) {
              return null != e && ao(e, t, gr);
            }),
            (xn.hasIn = vs),
            (xn.head = jo),
            (xn.identity = Vs),
            (xn.includes = function (e, t, n, r) {
              (e = ji(e) ? e : Rs(e)), (n = n && !r ? as(n) : 0);
              var a = e.length;
              return (
                n < 0 && (n = sn(a + n, 0)),
                Ji(e) ? n <= a && e.indexOf(t, n) > -1 : !!a && Et(e, t, n) > -1
              );
            }),
            (xn.indexOf = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              if (!r) return -1;
              var a = null == n ? 0 : as(n);
              return a < 0 && (a = sn(r + a, 0)), Et(e, t, a);
            }),
            (xn.inRange = function (e, t, n) {
              return (
                (t = rs(t)),
                void 0 === n ? ((n = t), (t = 0)) : (n = rs(n)),
                (function (e, t, n) {
                  return e >= ln(t, n) && e < sn(t, n);
                })((e = is(e)), t, n)
              );
            }),
            (xn.invoke = ys),
            (xn.isArguments = Di),
            (xn.isArray = Pi),
            (xn.isArrayBuffer = Bi),
            (xn.isArrayLike = ji),
            (xn.isArrayLikeObject = Li),
            (xn.isBoolean = function (e) {
              return true === e || false === e || (Yi(e) && pr(e) == c);
            }),
            (xn.isBuffer = Ui),
            (xn.isDate = Ni),
            (xn.isElement = function (e) {
              return Yi(e) && 1 === e.nodeType && !qi(e);
            }),
            (xn.isEmpty = function (e) {
              if (null == e) return true;
              if (
                ji(e) &&
                (Pi(e) ||
                  "string" == typeof e ||
                  "function" == typeof e.splice ||
                  Ui(e) ||
                  Qi(e) ||
                  Di(e))
              )
                return !e.length;
              var t = ro(e);
              if (t == _ || t == b) return !e.size;
              if (ho(e)) return !Mr(e).length;
              for (var n in e) if (we.call(e, n)) return false;
              return true;
            }),
            (xn.isEqual = function (e, t) {
              return Er(e, t);
            }),
            (xn.isEqualWith = function (e, t, n) {
              var r = (n = "function" == typeof n ? n : void 0)
                ? n(e, t)
                : void 0;
              return void 0 === r ? Er(e, t, void 0, n) : !!r;
            }),
            (xn.isError = zi),
            (xn.isFinite = function (e) {
              return "number" == typeof e && rn(e);
            }),
            (xn.isFunction = Wi),
            (xn.isInteger = Ki),
            (xn.isLength = Gi),
            (xn.isMap = Hi),
            (xn.isMatch = function (e, t) {
              return e === t || Or(e, t, Qa(t));
            }),
            (xn.isMatchWith = function (e, t, n) {
              return (
                (n = "function" == typeof n ? n : void 0), Or(e, t, Qa(t), n)
              );
            }),
            (xn.isNaN = function (e) {
              return Vi(e) && e != +e;
            }),
            (xn.isNative = function (e) {
              if (fo(e))
                throw new Z(
                  "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                );
              return wr(e);
            }),
            (xn.isNil = function (e) {
              return null == e;
            }),
            (xn.isNull = function (e) {
              return null === e;
            }),
            (xn.isNumber = Vi),
            (xn.isObject = Fi),
            (xn.isObjectLike = Yi),
            (xn.isPlainObject = qi),
            (xn.isRegExp = Zi),
            (xn.isSafeInteger = function (e) {
              return Ki(e) && e >= -9007199254740991 && e <= 9007199254740991;
            }),
            (xn.isSet = Xi),
            (xn.isString = Ji),
            (xn.isSymbol = $i),
            (xn.isTypedArray = Qi),
            (xn.isUndefined = function (e) {
              return void 0 === e;
            }),
            (xn.isWeakMap = function (e) {
              return Yi(e) && ro(e) == O;
            }),
            (xn.isWeakSet = function (e) {
              return Yi(e) && "[object WeakSet]" == pr(e);
            }),
            (xn.join = function (e, t) {
              return null == e ? "" : an.call(e, t);
            }),
            (xn.kebabCase = Ps),
            (xn.last = zo),
            (xn.lastIndexOf = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              if (!r) return -1;
              var a = r;
              return (
                void 0 !== n &&
                  (a = (a = as(n)) < 0 ? sn(r + a, 0) : ln(a, r - 1)),
                t == t
                  ? (function (e, t, n) {
                      for (var r = n + 1; r--; ) if (e[r] === t) return r;
                      return r;
                    })(e, t, a)
                  : yt(e, wt, a, true)
              );
            }),
            (xn.lowerCase = Bs),
            (xn.lowerFirst = js),
            (xn.lt = es),
            (xn.lte = ts),
            (xn.max = function (e) {
              return e && e.length ? ar(e, Vs, _r) : void 0;
            }),
            (xn.maxBy = function (e, t) {
              return e && e.length ? ar(e, Ja(t, 2), _r) : void 0;
            }),
            (xn.mean = function (e) {
              return Tt(e, Vs);
            }),
            (xn.meanBy = function (e, t) {
              return Tt(e, Ja(t, 2));
            }),
            (xn.min = function (e) {
              return e && e.length ? ar(e, Vs, Ar) : void 0;
            }),
            (xn.minBy = function (e, t) {
              return e && e.length ? ar(e, Ja(t, 2), Ar) : void 0;
            }),
            (xn.stubArray = ol),
            (xn.stubFalse = il),
            (xn.stubObject = function () {
              return {};
            }),
            (xn.stubString = function () {
              return "";
            }),
            (xn.stubTrue = function () {
              return true;
            }),
            (xn.multiply = fl),
            (xn.nth = function (e, t) {
              return e && e.length ? Cr(e, as(t)) : void 0;
            }),
            (xn.noConflict = function () {
              return Ve._ === this && (Ve._ = ke), this;
            }),
            (xn.noop = $s),
            (xn.now = gi),
            (xn.pad = function (e, t, n) {
              e = ls(e);
              var r = (t = as(t)) ? Ht(e) : 0;
              if (!t || r >= t) return e;
              var a = (t - r) / 2;
              return Da(en(a), n) + e + Da(Qt(a), n);
            }),
            (xn.padEnd = function (e, t, n) {
              e = ls(e);
              var r = (t = as(t)) ? Ht(e) : 0;
              return t && r < t ? e + Da(t - r, n) : e;
            }),
            (xn.padStart = function (e, t, n) {
              e = ls(e);
              var r = (t = as(t)) ? Ht(e) : 0;
              return t && r < t ? Da(t - r, n) + e : e;
            }),
            (xn.parseInt = function (e, t, n) {
              return (
                n || null == t ? (t = 0) : t && (t = +t),
                cn(ls(e).replace(q, ""), t || 0)
              );
            }),
            (xn.random = function (e, t, n) {
              if (
                (n && "boolean" != typeof n && lo(e, t, n) && (t = n = void 0),
                void 0 === n &&
                  ("boolean" == typeof t
                    ? ((n = t), (t = void 0))
                    : "boolean" == typeof e && ((n = e), (e = void 0))),
                void 0 === e && void 0 === t
                  ? ((e = 0), (t = 1))
                  : ((e = rs(e)),
                    void 0 === t ? ((t = e), (e = 0)) : (t = rs(t))),
                e > t)
              ) {
                var r = e;
                (e = t), (t = r);
              }
              if (n || e % 1 || t % 1) {
                var a = dn();
                return ln(
                  e + a * (t - e + Ge("1e-" + ((a + "").length - 1))),
                  t
                );
              }
              return Lr(e, t);
            }),
            (xn.reduce = function (e, t, n) {
              var r = Pi(e) ? _t : At,
                a = arguments.length < 3;
              return r(e, Ja(t, 4), n, a, tr);
            }),
            (xn.reduceRight = function (e, t, n) {
              var r = Pi(e) ? gt : At,
                a = arguments.length < 3;
              return r(e, Ja(t, 4), n, a, nr);
            }),
            (xn.repeat = function (e, t, n) {
              return (
                (t = (n ? lo(e, t, n) : void 0 === t) ? 1 : as(t)), Ur(ls(e), t)
              );
            }),
            (xn.replace = function () {
              var e = arguments,
                t = ls(e[0]);
              return e.length < 3 ? t : t.replace(e[1], e[2]);
            }),
            (xn.result = function (e, t, n) {
              var r = -1,
                a = (t = la(t, e)).length;
              for (a || ((a = 1), (e = void 0)); ++r < a; ) {
                var o = null == e ? void 0 : e[Ao(t[r])];
                void 0 === o && ((r = a), (o = n)), (e = Wi(o) ? o.call(e) : o);
              }
              return e;
            }),
            (xn.round = hl),
            (xn.runInContext = e),
            (xn.sample = function (e) {
              return (Pi(e) ? zn : zr)(e);
            }),
            (xn.size = function (e) {
              if (null == e) return 0;
              if (ji(e)) return Ji(e) ? Ht(e) : e.length;
              var t = ro(e);
              return t == _ || t == b ? e.size : Mr(e).length;
            }),
            (xn.snakeCase = Ls),
            (xn.some = function (e, t, n) {
              var r = Pi(e) ? vt : Vr;
              return n && lo(e, t, n) && (t = void 0), r(e, Ja(t, 3));
            }),
            (xn.sortedIndex = function (e, t) {
              return qr(e, t);
            }),
            (xn.sortedIndexBy = function (e, t, n) {
              return Zr(e, t, Ja(n, 2));
            }),
            (xn.sortedIndexOf = function (e, t) {
              var n = null == e ? 0 : e.length;
              if (n) {
                var r = qr(e, t);
                if (r < n && Ri(e[r], t)) return r;
              }
              return -1;
            }),
            (xn.sortedLastIndex = function (e, t) {
              return qr(e, t, true);
            }),
            (xn.sortedLastIndexBy = function (e, t, n) {
              return Zr(e, t, Ja(n, 2), true);
            }),
            (xn.sortedLastIndexOf = function (e, t) {
              if (null == e ? 0 : e.length) {
                var n = qr(e, t, true) - 1;
                if (Ri(e[n], t)) return n;
              }
              return -1;
            }),
            (xn.startCase = Us),
            (xn.startsWith = function (e, t, n) {
              return (
                (e = ls(e)),
                (n = null == n ? 0 : Xn(as(n), 0, e.length)),
                (t = $r(t)),
                e.slice(n, n + t.length) == t
              );
            }),
            (xn.subtract = pl),
            (xn.sum = function (e) {
              return e && e.length ? kt(e, Vs) : 0;
            }),
            (xn.sumBy = function (e, t) {
              return e && e.length ? kt(e, Ja(t, 2)) : 0;
            }),
            (xn.template = function (e, t, n) {
              var r = xn.templateSettings;
              n && lo(e, t, n) && (t = void 0),
                (e = ls(e)),
                (t = ds({}, t, r, Wa));
              var a,
                o,
                i = ds({}, t.imports, r.imports, Wa),
                s = Es(i),
                l = Ct(i, s),
                u = 0,
                c = t.interpolate || ce,
                d = "__p += '",
                f = _e(
                  (t.escape || ce).source +
                    "|" +
                    c.source +
                    "|" +
                    (c === K ? ne : ce).source +
                    "|" +
                    (t.evaluate || ce).source +
                    "|$",
                  "g"
                ),
                h =
                  "//# sourceURL=" +
                  (we.call(t, "sourceURL")
                    ? (t.sourceURL + "").replace(/\s/g, " ")
                    : "lodash.templateSources[" + ++Ne + "]") +
                  "\n";
              e.replace(f, function (t, n, r, i, s, l) {
                return (
                  r || (r = i),
                  (d += e.slice(u, l).replace(de, Nt)),
                  n && ((a = true), (d += "' +\n__e(" + n + ") +\n'")),
                  s && ((o = true), (d += "';\n" + s + ";\n__p += '")),
                  r &&
                    (d += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                  (u = l + t.length),
                  t
                );
              }),
                (d += "';\n");
              var p = we.call(t, "variable") && t.variable;
              if (p) {
                if (ee.test(p))
                  throw new Z(
                    "Invalid `variable` option passed into `_.template`"
                  );
              } else d = "with (obj) {\n" + d + "\n}\n";
              (d = (o ? d.replace(D, "") : d)
                .replace(P, "$1")
                .replace(B, "$1;")),
                (d =
                  "function(" +
                  (p || "obj") +
                  ") {\n" +
                  (p ? "" : "obj || (obj = {});\n") +
                  "var __t, __p = ''" +
                  (a ? ", __e = _.escape" : "") +
                  (o
                    ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                    : ";\n") +
                  d +
                  "return __p\n}");
              var _ = Ks(function () {
                return fe(s, h + "return " + d).apply(void 0, l);
              });
              if (((_.source = d), zi(_))) throw _;
              return _;
            }),
            (xn.times = function (e, t) {
              if ((e = as(e)) < 1 || e > 9007199254740991) return [];
              var n = 4294967295,
                r = ln(e, 4294967295);
              e -= 4294967295;
              for (var a = xt(r, (t = Ja(t))); ++n < e; ) t(n);
              return a;
            }),
            (xn.toFinite = rs),
            (xn.toInteger = as),
            (xn.toLength = os),
            (xn.toLower = function (e) {
              return ls(e).toLowerCase();
            }),
            (xn.toNumber = is),
            (xn.toSafeInteger = function (e) {
              return e
                ? Xn(as(e), -9007199254740991, 9007199254740991)
                : 0 === e
                ? e
                : 0;
            }),
            (xn.toString = ls),
            (xn.toUpper = function (e) {
              return ls(e).toUpperCase();
            }),
            (xn.trim = function (e, t, n) {
              if ((e = ls(e)) && (n || void 0 === t)) return Rt(e);
              if (!e || !(t = $r(t))) return e;
              var r = Vt(e),
                a = Vt(t);
              return ca(r, Pt(r, a), Bt(r, a) + 1).join("");
            }),
            (xn.trimEnd = function (e, t, n) {
              if ((e = ls(e)) && (n || void 0 === t))
                return e.slice(0, qt(e) + 1);
              if (!e || !(t = $r(t))) return e;
              var r = Vt(e);
              return ca(r, 0, Bt(r, Vt(t)) + 1).join("");
            }),
            (xn.trimStart = function (e, t, n) {
              if ((e = ls(e)) && (n || void 0 === t)) return e.replace(q, "");
              if (!e || !(t = $r(t))) return e;
              var r = Vt(e);
              return ca(r, Pt(r, Vt(t))).join("");
            }),
            (xn.truncate = function (e, t) {
              var n = 30,
                r = "...";
              if (Fi(t)) {
                var a = "separator" in t ? t.separator : a;
                (n = "length" in t ? as(t.length) : n),
                  (r = "omission" in t ? $r(t.omission) : r);
              }
              var o = (e = ls(e)).length;
              if (zt(e)) {
                var i = Vt(e);
                o = i.length;
              }
              if (n >= o) return e;
              var s = n - Ht(r);
              if (s < 1) return r;
              var l = i ? ca(i, 0, s).join("") : e.slice(0, s);
              if (void 0 === a) return l + r;
              if ((i && (s += l.length - s), Zi(a))) {
                if (e.slice(s).search(a)) {
                  var u,
                    c = l;
                  for (
                    a.global || (a = _e(a.source, ls(re.exec(a)) + "g")),
                      a.lastIndex = 0;
                    (u = a.exec(c));

                  )
                    var d = u.index;
                  l = l.slice(0, void 0 === d ? s : d);
                }
              } else if (e.indexOf($r(a), s) != s) {
                var f = l.lastIndexOf(a);
                f > -1 && (l = l.slice(0, f));
              }
              return l + r;
            }),
            (xn.unescape = function (e) {
              return (e = ls(e)) && U.test(e) ? e.replace(j, Zt) : e;
            }),
            (xn.uniqueId = function (e) {
              var t = ++Te;
              return ls(e) + t;
            }),
            (xn.upperCase = Ns),
            (xn.upperFirst = zs),
            (xn.each = li),
            (xn.eachRight = ui),
            (xn.first = jo),
            Js(
              xn,
              ((dl = {}),
              ur(xn, function (e, t) {
                we.call(xn.prototype, t) || (dl[t] = e);
              }),
              dl),
              { chain: false }
            ),
            (xn.VERSION = "4.17.21"),
            st(
              [
                "bind",
                "bindKey",
                "curry",
                "curryRight",
                "partial",
                "partialRight",
              ],
              function (e) {
                xn[e].placeholder = xn;
              }
            ),
            st(["drop", "take"], function (e, t) {
              (Dn.prototype[e] = function (n) {
                n = void 0 === n ? 1 : sn(as(n), 0);
                var r = this.__filtered__ && !t ? new Dn(this) : this.clone();
                return (
                  r.__filtered__
                    ? (r.__takeCount__ = ln(n, r.__takeCount__))
                    : r.__views__.push({
                        size: ln(n, 4294967295),
                        type: e + (r.__dir__ < 0 ? "Right" : ""),
                      }),
                  r
                );
              }),
                (Dn.prototype[e + "Right"] = function (t) {
                  return this.reverse()[e](t).reverse();
                });
            }),
            st(["filter", "map", "takeWhile"], function (e, t) {
              var n = t + 1,
                r = 1 == n || 3 == n;
              Dn.prototype[e] = function (e) {
                var t = this.clone();
                return (
                  t.__iteratees__.push({ iteratee: Ja(e, 3), type: n }),
                  (t.__filtered__ = t.__filtered__ || r),
                  t
                );
              };
            }),
            st(["head", "last"], function (e, t) {
              var n = "take" + (t ? "Right" : "");
              Dn.prototype[e] = function () {
                return this[n](1).value()[0];
              };
            }),
            st(["initial", "tail"], function (e, t) {
              var n = "drop" + (t ? "" : "Right");
              Dn.prototype[e] = function () {
                return this.__filtered__ ? new Dn(this) : this[n](1);
              };
            }),
            (Dn.prototype.compact = function () {
              return this.filter(Vs);
            }),
            (Dn.prototype.find = function (e) {
              return this.filter(e).head();
            }),
            (Dn.prototype.findLast = function (e) {
              return this.reverse().find(e);
            }),
            (Dn.prototype.invokeMap = Nr(function (e, t) {
              return "function" == typeof e
                ? new Dn(this)
                : this.map(function (n) {
                    return br(n, e, t);
                  });
            })),
            (Dn.prototype.reject = function (e) {
              return this.filter(Mi(Ja(e)));
            }),
            (Dn.prototype.slice = function (e, t) {
              e = as(e);
              var n = this;
              return n.__filtered__ && (e > 0 || t < 0)
                ? new Dn(n)
                : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                  void 0 !== t &&
                    (n = (t = as(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                  n);
            }),
            (Dn.prototype.takeRightWhile = function (e) {
              return this.reverse().takeWhile(e).reverse();
            }),
            (Dn.prototype.toArray = function () {
              return this.take(4294967295);
            }),
            ur(Dn.prototype, function (e, t) {
              var n = /^(?:filter|find|map|reject)|While$/.test(t),
                r = /^(?:head|last)$/.test(t),
                a = xn[r ? "take" + ("last" == t ? "Right" : "") : t],
                o = r || /^find/.test(t);
              a &&
                (xn.prototype[t] = function () {
                  var t = this.__wrapped__,
                    i = r ? [1] : arguments,
                    s = t instanceof Dn,
                    l = i[0],
                    u = s || Pi(t),
                    c = function (e) {
                      var t = a.apply(xn, pt([e], i));
                      return r && d ? t[0] : t;
                    };
                  u &&
                    n &&
                    "function" == typeof l &&
                    1 != l.length &&
                    (s = u = false);
                  var d = this.__chain__,
                    f = !!this.__actions__.length,
                    h = o && !d,
                    p = s && !f;
                  if (!o && u) {
                    t = p ? t : new Dn(this);
                    var _ = e.apply(t, i);
                    return (
                      _.__actions__.push({
                        func: ri,
                        args: [c],
                        thisArg: void 0,
                      }),
                      new Cn(_, d)
                    );
                  }
                  return h && p
                    ? e.apply(this, i)
                    : ((_ = this.thru(c)),
                      h ? (r ? _.value()[0] : _.value()) : _);
                });
            }),
            st(
              ["pop", "push", "shift", "sort", "splice", "unshift"],
              function (e) {
                var t = me[e],
                  n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                  r = /^(?:pop|shift)$/.test(e);
                xn.prototype[e] = function () {
                  var e = arguments;
                  if (r && !this.__chain__) {
                    var a = this.value();
                    return t.apply(Pi(a) ? a : [], e);
                  }
                  return this[n](function (n) {
                    return t.apply(Pi(n) ? n : [], e);
                  });
                };
              }
            ),
            ur(Dn.prototype, function (e, t) {
              var n = xn[t];
              if (n) {
                var r = n.name + "";
                we.call(yn, r) || (yn[r] = []),
                  yn[r].push({ name: t, func: n });
              }
            }),
            (yn[xa(void 0, 2).name] = [{ name: "wrapper", func: void 0 }]),
            (Dn.prototype.clone = function () {
              var e = new Dn(this.__wrapped__);
              return (
                (e.__actions__ = ma(this.__actions__)),
                (e.__dir__ = this.__dir__),
                (e.__filtered__ = this.__filtered__),
                (e.__iteratees__ = ma(this.__iteratees__)),
                (e.__takeCount__ = this.__takeCount__),
                (e.__views__ = ma(this.__views__)),
                e
              );
            }),
            (Dn.prototype.reverse = function () {
              if (this.__filtered__) {
                var e = new Dn(this);
                (e.__dir__ = -1), (e.__filtered__ = true);
              } else (e = this.clone()).__dir__ *= -1;
              return e;
            }),
            (Dn.prototype.value = function () {
              var e = this.__wrapped__.value(),
                t = this.__dir__,
                n = Pi(e),
                r = t < 0,
                a = n ? e.length : 0,
                o = (function (e, t, n) {
                  var r = -1,
                    a = n.length;
                  for (; ++r < a; ) {
                    var o = n[r],
                      i = o.size;
                    switch (o.type) {
                      case "drop":
                        e += i;
                        break;
                      case "dropRight":
                        t -= i;
                        break;
                      case "take":
                        t = ln(t, e + i);
                        break;
                      case "takeRight":
                        e = sn(e, t - i);
                    }
                  }
                  return { start: e, end: t };
                })(0, a, this.__views__),
                i = o.start,
                s = o.end,
                l = s - i,
                u = r ? s : i - 1,
                c = this.__iteratees__,
                d = c.length,
                f = 0,
                h = ln(l, this.__takeCount__);
              if (!n || (!r && a == l && h == l))
                return ra(e, this.__actions__);
              var p = [];
              e: for (; l-- && f < h; ) {
                for (var _ = -1, g = e[(u += t)]; ++_ < d; ) {
                  var v = c[_],
                    m = v.iteratee,
                    b = v.type,
                    y = m(g);
                  if (2 == b) g = y;
                  else if (!y) {
                    if (1 == b) continue e;
                    break e;
                  }
                }
                p[f++] = g;
              }
              return p;
            }),
            (xn.prototype.at = ai),
            (xn.prototype.chain = function () {
              return ni(this);
            }),
            (xn.prototype.commit = function () {
              return new Cn(this.value(), this.__chain__);
            }),
            (xn.prototype.next = function () {
              void 0 === this.__values__ &&
                (this.__values__ = ns(this.value()));
              var e = this.__index__ >= this.__values__.length;
              return {
                done: e,
                value: e ? void 0 : this.__values__[this.__index__++],
              };
            }),
            (xn.prototype.plant = function (e) {
              for (var t, n = this; n instanceof In; ) {
                var r = xo(n);
                (r.__index__ = 0),
                  (r.__values__ = void 0),
                  t ? (a.__wrapped__ = r) : (t = r);
                var a = r;
                n = n.__wrapped__;
              }
              return (a.__wrapped__ = e), t;
            }),
            (xn.prototype.reverse = function () {
              var e = this.__wrapped__;
              if (e instanceof Dn) {
                var t = e;
                return (
                  this.__actions__.length && (t = new Dn(this)),
                  (t = t.reverse()).__actions__.push({
                    func: ri,
                    args: [Fo],
                    thisArg: void 0,
                  }),
                  new Cn(t, this.__chain__)
                );
              }
              return this.thru(Fo);
            }),
            (xn.prototype.toJSON =
              xn.prototype.valueOf =
              xn.prototype.value =
                function () {
                  return ra(this.__wrapped__, this.__actions__);
                }),
            (xn.prototype.first = xn.prototype.head),
            Je &&
              (xn.prototype[Je] = function () {
                return this;
              }),
            xn
          );
        })();
        (Ve._ = Xt),
          void 0 ===
            (a = function () {
              return Xt;
            }.call(t, n, t, r)) || (r.exports = a);
      }.call(this));
    }.call(this, n(29), n(54)(e)));
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "q", function () {
      return S;
    }),
      n.d(t, "b", function () {
        return A;
      }),
      n.d(t, "n", function () {
        return v;
      }),
      n.d(t, "x", function () {
        return k;
      }),
      n.d(t, "c", function () {
        return x;
      }),
      n.d(t, "a", function () {
        return I;
      }),
      n.d(t, "j", function () {
        return D;
      }),
      n.d(t, "h", function () {
        return B;
      }),
      n.d(t, "s", function () {
        return j;
      }),
      n.d(t, "k", function () {
        return L;
      }),
      n.d(t, "p", function () {
        return N;
      }),
      n.d(t, "l", function () {
        return z;
      }),
      n.d(t, "m", function () {
        return W;
      }),
      n.d(t, "v", function () {
        return G;
      }),
      n.d(t, "w", function () {
        return q;
      }),
      n.d(t, "i", function () {
        return X;
      }),
      n.d(t, "o", function () {
        return $;
      }),
      n.d(t, "f", function () {
        return Q;
      }),
      n.d(t, "d", function () {
        return ee;
      }),
      n.d(t, "r", function () {
        return ae;
      }),
      n.d(t, "e", function () {
        return se;
      }),
      n.d(t, "t", function () {
        return le;
      }),
      n.d(t, "g", function () {
        return ue;
      }),
      n.d(t, "u", function () {
        return ce;
      });
    var r = n(5),
      a = n(6),
      o = n(1),
      i = n(2),
      s = n(4),
      l = n(3),
      u = n(0),
      c = n(8);
    function d(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            i = true,
            s = false;
          try {
            for (
              n = n.call(e);
              !(i = (r = n.next()).done) &&
              (o.push(r.value), !t || o.length !== t);
              i = true
            );
          } catch (e) {
            (s = true), (a = e);
          } finally {
            try {
              i || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          }
          return o;
        })(e, t) ||
        h(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function f(e, t) {
      var n =
        ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = h(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return r >= e.length ? { done: true } : { done: false, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var o,
        i = true,
        s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (i = e.done), e;
        },
        e: function (e) {
          (s = true), (o = e);
        },
        f: function () {
          try {
            i || null == n.return || n.return();
          } finally {
            if (s) throw o;
          }
        },
      };
    }
    function h(e, t) {
      if (e) {
        if ("string" == typeof e) return p(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? p(e, t)
            : void 0
        );
      }
    }
    function p(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var _,
      g,
      v,
      m = n(5),
      b = n(7),
      y = n(6),
      E = n(1),
      O = {},
      w = {},
      T = 0,
      M = 0,
      S = 0,
      A = 1,
      k = false,
      x = false,
      R = false,
      I = false,
      C = false,
      D = false,
      P = false;
    function B() {
      (R = false), (I = false), (C = false), (P = false);
    }
    function j() {
      (R = false), (I = false), (k = false), (x = false);
    }
    var L = document.getElementById("debug-mode");
    function U(e) {
      !(function (e, t) {
        ie = t;
        var n =
            ((oe = e) - window.innerWidth / 2 + a.offsetX) *
            a.screenSize *
            a.scaleRatio,
          o =
            (ie - window.innerHeight / 2 + a.offsetY) *
            a.screenSize *
            a.scaleRatio;
        Object(r.updateControlPosition)(n, o);
      })(e.clientX, e.clientY),
        (v =
          e.clientY > window.innerHeight - 150 / a.scaleRatio &&
          Math.abs(e.clientX - window.innerWidth / 2) >
            window.innerWidth / 2 - 300 / a.scaleRatio);
    }
    var N = [
        { align: 1, selected: false, x: 0, y: 0 },
        { align: -1, selected: false, x: 0, y: 0 },
      ],
      z = 0,
      W = 0,
      K = 0;
    function G(e) {
      if (!s.g) {
        if (((K -= e), N[1].selected && (K = 0.3), K > 0))
          (z += 6 * N[1].x), (W += 6 * N[1].y);
        else {
          var t = Object(u.damp)(1, 0, 0.001, e);
          (z *= t), (W *= t);
        }
        var n = z / a.screenSize / 2,
          o = W / a.screenSize / 2;
        (n = Object(c.clamp)(n, -window.innerWidth / 2, window.innerWidth / 2)),
          (o = Object(c.clamp)(
            o,
            -window.innerHeight / 2,
            window.innerHeight / 2
          )),
          (z = n * a.screenSize * 2),
          (W = o * a.screenSize * 2),
          Object(r.updateControlPosition)(z, W);
      }
    }
    function F() {
      Q(), ee(), se(), $();
    }
    function Y(e) {
      if (!s.g) {
        var t,
          n = f(e.changedTouches);
        try {
          for (n.s(); !(t = n.n()).done; ) {
            var r,
              o = t.value,
              u = f(N);
            try {
              for (u.s(); !(r = u.n()).done; ) {
                var c = r.value;
                if (!c.selected) {
                  var d = c.align * l.b == 1 ? 0 : y.canvas.width,
                    h = y.canvas.height,
                    p = d + +l.g.joystickOffset * c.align * l.b,
                    _ = h - +l.g.joystickOffset,
                    g = o.clientX * a.scaleRatio,
                    v = o.clientY * a.scaleRatio;
                  if (
                    Object(i.d)(
                      { x: p, y: _, size: +l.g.joystickSize },
                      {
                        x: g,
                        y: v,
                        size: Math.min(o.radiusX, o.radiusY) * a.scaleRatio,
                      }
                    )
                  ) {
                    (c.selected = true),
                      (c.selectedIdentifier = o.identifier),
                      (c.x = -(p - g) / 2),
                      (c.y = -(_ - v) / 2);
                    var m = Math.max(
                      +l.g.joystickSize / 2,
                      Math.sqrt(c.x * c.x + c.y * c.y)
                    );
                    (c.x /= m), (c.y /= m);
                  }
                }
              }
            } catch (e) {
              u.e(e);
            } finally {
              u.f();
            }
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
      }
      ne(
        { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY },
        false
      ),
        F();
    }
    function H(e) {
      var t,
        n = f(e.changedTouches);
      try {
        for (n.s(); !(t = n.n()).done; ) {
          var r,
            o = t.value,
            i = f(N);
          try {
            for (i.s(); !(r = i.n()).done; ) {
              var s = r.value;
              if (s.selected && s.selectedIdentifier == o.identifier) {
                var u = s.align * l.b == 1 ? 0 : y.canvas.width,
                  c = y.canvas.height,
                  d = u + +l.g.joystickOffset * s.align * l.b,
                  h = c - +l.g.joystickOffset,
                  p = o.clientX * a.scaleRatio,
                  _ = o.clientY * a.scaleRatio;
                (s.x = -(d - p) / 2), (s.y = -(h - _) / 2);
                var g = Math.max(
                  +l.g.joystickSize / 2,
                  Math.sqrt(s.x * s.x + s.y * s.y)
                );
                (s.x /= g), (s.y /= g);
              }
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
      e.cancelable && e.preventDefault(), F();
    }
    function V(e) {
      var t,
        n = f(e.changedTouches);
      try {
        for (n.s(); !(t = n.n()).done; ) {
          var r,
            a = t.value,
            o = f(N);
          try {
            for (o.s(); !(r = o.n()).done; ) {
              var i = r.value;
              i.selected &&
                i.selectedIdentifier == a.identifier &&
                ((i.selected = false), (i.x = 0), (i.y = 0));
            }
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
      F();
    }
    function q(e) {
      i.D > 0 &&
        e < 9 &&
        e > 0 &&
        i.E[e - 1] != E.MAX_UPGRADE_POINTS &&
        (Object(i.L)(e), Object(r.statUpgrade)(e));
    }
    function Z(e) {
      var t = e.keyCode,
        n = document.activeElement.tagName.toLowerCase();
      if (!l.h && "input" !== n && "textarea" !== n) {
        var r = e.ctrlKey || e.metaKey;
        if (s.g) {
          if (r) {
            if (t == l.c.undo) return Object(s.q)(), e.preventDefault();
            if (t == l.c.redo) return Object(s.m)(), e.preventDefault();
            if (t == l.c.selectAll) return Object(s.n)(), e.preventDefault();
            if (t == l.c.duplicate) return Object(s.f)(), e.preventDefault();
            if (t == l.c.moveForward) return Object(s.k)(), e.preventDefault();
            if (t == l.c.moveBackward) return Object(s.j)(), e.preventDefault();
          } else if (t == l.c.delete) return Object(s.d)(), e.preventDefault();
        } else O[t] = true;
        t != l.c.autoFire || s.g
          ? t != l.c.autoSpin || s.g
            ? t != l.c.spinLock || s.g
              ? t != l.c.debugMode || s.g
                ? t != l.c.passiveMode || s.g
                  ? t != l.c.screenshotMode || s.g
                    ? t != l.c.fire || s.g
                      ? t != l.c.repel || s.g
                        ? t == l.c.settings
                          ? l.h
                            ? Object(l.a)()
                            : Object(l.f)()
                          : s.g ||
                            Number.isNaN(e.key) ||
                            (e.key > 0 && q(e.key))
                        : ee()
                      : (Q(), ee())
                    : s.g ||
                      (b.getCookie(o.COOKIES.TUTORIAL.SCREENSHOT_MODE) || i.I
                        ? y.setHUDRendering(!y.renderingHUD)
                        : (Object(i.C)(true),
                          b.setCookie(
                            o.COOKIES.TUTORIAL.SCREENSHOT_MODE,
                            true,
                            255
                          ),
                          setTimeout(function () {
                            Object(i.x)(
                              "Pressing ".concat(
                                l.d[t],
                                " again will enable screenshot mode. This will hide all HUD elements."
                              )
                            );
                          }, 0),
                          Object(i.C)(false)))
                  : ((P = !P),
                    m.togglePassiveMode(P),
                    Object(i.x)(
                      "Passive Mode ("
                        .concat(l.d[t], "): ")
                        .concat(P ? "ON" : "OFF")
                    ))
                : ((D = !D)
                    ? L.classList.remove("hide")
                    : L.classList.add("hide"),
                  Object(i.x)(
                    "Debug Mode ("
                      .concat(l.d[t], "): ")
                      .concat(D ? "ON" : "OFF")
                  ))
              : ((C = !C),
                Object(i.x)(
                  "Spin Lock (".concat(l.d[t], "): ").concat(C ? "ON" : "OFF")
                ))
            : ((I = !I) || (A *= -1),
              Object(i.x)(
                "Auto Spin (".concat(l.d[t], "): ").concat(I ? "ON" : "OFF")
              ))
          : ((R = !R),
            (function () {
              for (var e = 0, t = Object.entries(w); e < t.length; e++) {
                var n = d(t[e], 2),
                  r = n[0];
                n[1];
                w[r] = false;
              }
              te(), Q();
            })(),
            Object(i.x)(
              "Auto Fire (".concat(l.d[t], "): ").concat(R ? "ON" : "OFF")
            ),
            Q(),
            (w[1] = false),
            te()),
          $();
      }
    }
    function X(e) {
      Object(i.x)(
        "Copied ".concat(e.name, "'s ID to clipboard. (").concat(e.id, ")")
      ),
        navigator.clipboard.writeText(e.id);
    }
    function J(e) {
      var t = e.keyCode;
      b.chatInput === document.activeElement ||
        s.g ||
        ((O[t] = false), $(), Q(), ee());
    }
    function $() {
      var e = 0,
        t = 0;
      if (
        (O[l.c.weaponTree] ? (k || y.loadUpgradeTree(true), (k = true)) : (k = false),
        O[l.c.bodyTree] ? (x || y.loadUpgradeTree(false), (x = true)) : (x = false),
        N[0].selected)
      ) {
        (e = N[0].x), (t = -N[0].y);
        var n = Math.sqrt(e * e + t * t);
        n > 0.2 ? ((e /= n), (t /= n)) : ((e = 0), (t = 0));
      } else
        (O[l.c.moveUp] || O[l.c.moveUpAlt]) && t++,
          (O[l.c.moveDown] || O[l.c.moveDownAlt]) && t--,
          (O[l.c.moveLeft] || O[l.c.moveLeftAlt]) && e--,
          (O[l.c.moveRight] || O[l.c.moveRightAlt]) && e++;
      (T == e && M == t) || ((T = e), (M = t), Object(r.updateInput)(T, M));
    }
    function Q() {
      s.g
        ? Object(r.updateShooting)(false)
        : R || w[1] || O[l.c.fire] || N[1].selected
        ? Object(r.updateShooting)(true)
        : Object(r.updateShooting)(false);
    }
    function ee() {
      w[3] || O[l.c.repel]
        ? Object(r.updateControlState)(2)
        : w[1] || O[l.c.fire] || R || N[1].selected
        ? Object(r.updateControlState)(1)
        : Object(r.updateControlState)(0);
    }
    function te() {
      ee();
    }
    function ne(e) {
      var t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!t || !b.isMobile) {
        var n = Date.now();
        n - _ < 1e3
          ? ++g > 4 &&
            (b.getCookie(o.COOKIES.TUTORIAL.AUTO_FIRE) ||
              i.I ||
              b.isMobile ||
              (Object(i.C)(true),
              b.setCookie(o.COOKIES.TUTORIAL.AUTO_FIRE, true, 70),
              setTimeout(function () {
                Object(i.x)("Hold down click to shoot automatically.");
              }, 1e3),
              setTimeout(function () {
                Object(i.x)("You can also press E to turn on auto fire.");
              }, 8e3),
              Object(i.C)(false)))
          : (g = 0),
          (_ = n),
          !y.clickMouse({ x: e.x * a.scaleRatio, y: e.y * a.scaleRatio }) &&
            t &&
            ((w[e.which] = true), te(), Q());
      }
    }
    function re(e) {
      (w[e.which] = false), te(), Q();
    }
    function ae(e) {
      (S = e), Object(r.updateDirection)(e);
    }
    var oe = 0,
      ie = 0;
    function se() {
      ((!I && !C) || s.g) &&
        (s.g
          ? (S = 1.5708)
          : N[1].selected
          ? (S = Math.atan2(N[1].x, -N[1].y))
          : b.isMobile ||
            (S = Math.atan2(
              oe - (window.innerWidth / 2 + a.offsetX / a.screenSize),
              window.innerHeight / 2 + a.offsetY / a.screenSize - ie
            )),
        Object(r.updateDirection)(S));
    }
    function le() {
      window.addEventListener("mousedown", ne),
        window.addEventListener("mouseup", re),
        window.addEventListener("keydown", Z),
        window.addEventListener("keyup", J),
        window.addEventListener("mousemove", U),
        window.addEventListener("click", U),
        window.addEventListener("touchstart", Y),
        window.addEventListener("touchmove", H),
        window.addEventListener("touchend", V),
        window.addEventListener("focus", ue),
        window.addEventListener("blur", ue);
    }
    function ue() {
      for (var e = 0, t = Object.entries(O); e < t.length; e++) {
        var n = d(t[e], 2),
          r = n[0];
        n[1];
        O[r] = false;
      }
      Q(), $();
    }
    function ce() {
      ue();
      var e,
        t = f(N);
      try {
        for (t.s(); !(e = t.n()).done; ) {
          var n = e.value;
          (n.selected = false), (n.y = 0), (n.x = 0);
        }
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
      window.removeEventListener("mousedown", ne),
        window.removeEventListener("mouseup", re),
        window.removeEventListener("keydown", Z),
        window.removeEventListener("keyup", J),
        window.removeEventListener("mousemove", U),
        window.removeEventListener("click", U),
        window.removeEventListener("touchstart", Y),
        window.removeEventListener("touchmove", H),
        window.removeEventListener("touchend", V),
        window.removeEventListener("focus", ue),
        window.removeEventListener("blur", ue);
    }
  },
  function (e, t, n) {
    var r = (t.global = n(39)),
      a = (t.hasBuffer = r && !!r.isBuffer),
      o = (t.hasArrayBuffer = "undefined" != typeof ArrayBuffer),
      i = (t.isArray = n(21));
    t.isArrayBuffer = o
      ? function (e) {
          return e instanceof ArrayBuffer || p(e);
        }
      : v;
    var s = (t.isBuffer = a ? r.isBuffer : v),
      l = (t.isView = o ? ArrayBuffer.isView || m("ArrayBuffer", "buffer") : v);
    (t.alloc = h),
      (t.concat = function (e, n) {
        n ||
          ((n = 0),
          Array.prototype.forEach.call(e, function (e) {
            n += e.length;
          }));
        var r = (this !== t && this) || e[0],
          a = h.call(r, n),
          o = 0;
        return (
          Array.prototype.forEach.call(e, function (e) {
            o += f.copy.call(e, a, o);
          }),
          a
        );
      }),
      (t.from = function (e) {
        return "string" == typeof e ? _.call(this, e) : g(this).from(e);
      });
    var u = (t.Array = n(41)),
      c = (t.Buffer = n(42)),
      d = (t.Uint8Array = n(43)),
      f = (t.prototype = n(22));
    function h(e) {
      return g(this).alloc(e);
    }
    var p = m("ArrayBuffer");
    function _(e) {
      var t = 3 * e.length,
        n = h.call(this, t),
        r = f.write.call(n, e);
      return t !== r && (n = f.slice.call(n, 0, r)), n;
    }
    function g(e) {
      return s(e) ? c : l(e) ? d : i(e) ? u : a ? c : o ? d : u;
    }
    function v() {
      return false;
    }
    function m(e, t) {
      return (
        (e = "[object " + e + "]"),
        function (n) {
          return null != n && {}.toString.call(t ? n[t] : n) === e;
        }
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return _;
    }),
      n.d(t, "a", function () {
        return g;
      }),
      n.d(t, "b", function () {
        return v;
      }),
      n.d(t, "e", function () {
        return b;
      }),
      n.d(t, "f", function () {
        return y;
      }),
      n.d(t, "c", function () {
        return S;
      });
    var r = n(8),
      a = n(1),
      o = n(0),
      s = n(2),
      l = n(6),
      u = n(3);
    function c(e, t) {
      var n =
        ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return d(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return d(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return r >= e.length ? { done: true } : { done: false, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var o,
        i = true,
        s = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (i = e.done), e;
        },
        e: function (e) {
          (s = true), (o = e);
        },
        f: function () {
          try {
            i || null == n.return || n.return();
          } finally {
            if (s) throw o;
          }
        },
      };
    }
    function d(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var f = [],
      h = {},
      p = false;
    function _() {
      p = false;
    }
    function g() {
      Object(s.g)(), m();
    }
    function v() {
      Object(s.g)();
    }
    function m() {
      (f = []), (h = {}), (p = false), Object(l.clearCameraShakes)();
    }
    function b(e) {
      !(function (e) {
        var t = {};
        (t.t = Date.now()),
          (t.me = e[0]),
          (t.tanks = e[1]),
          (t.polygons = e[2]),
          (t.bullets = e[3]),
          (t.rifts = e[4]),
          (t.mapSize = e[5]),
          (t.tickTime = e[6]),
          (t.dt = e[7]),
          (t.dimension = e[8]),
          (t.events = e[9]),
          t.me
            ? ((t.cameraSizeMultiplier = e[10]), (t.leaderboard = e[11]))
            : ((t.x = e[10]), (t.y = e[11]), (t.leaderboard = e[12]));
        t.me && (t.me = y(t.me));
        E(t.tanks), E(t.polygons), E(t.bullets), E(t.rifts);
        var n = f[f.length - 1];
        (n && n.dimension == t.dimension && (null == n.me) == (null == t.me)) ||
          (m(), Object(l.clearParticles)(), (h = f[f.length - 1]));
        if (((p = true), 0 != f.length)) {
          var r = f[f.length - 1];
          t.me && (t.me = w(r.me, t.me)),
            (t.tanks = O(r.tanks, t.tanks)),
            (t.bullets = O(r.bullets, t.bullets)),
            (t.rifts = O(r.rifts, t.rifts)),
            (t.polygons = O(r.polygons, t.polygons));
        }
        f.push(t), t.leaderboard && Object(s.K)(t.leaderboard);
        t.events && Object(s.u)(t.events);
      })(e);
    }
    function y(e) {
      for (var t = {}, n = a.PACKET_STRUCTURE[e[1]], r = 0; r < e.length; r++) {
        var o = e[r];
        null != o && (t[n[r]] = o);
      }
      return t;
    }
    function E(e) {
      for (var t = 0; t < e.length; t++) e[t] = y(e[t]);
      return e;
    }
    function O(e, t) {
      var n,
        r = new Array(t.length),
        a = {},
        o = c(e);
      try {
        for (o.s(); !(n = o.n()).done; ) {
          var i = n.value;
          a[i.id] = i;
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
      for (var s = 0; s < t.length; s++) {
        var l = t[s];
        r[s] = w(a[l.id] || l, l);
      }
      return r;
    }
    function w(e, t) {
      var n = {};
      return (
        Object.keys(e).forEach(function (a) {
          var o = t[a];
          if (null != o) n[a] = o;
          else
            switch (a) {
              case "barrels":
              case "gadgets":
              case "barrelData":
              case "gadgetData":
                n[a] = Object(r.cloneDeep)(e[a]);
                break;
              case "fadeTime":
                (n[a] = 1), (e[a] = 1);
                break;
              default:
                n[a] = e[a];
            }
        }),
        Object.keys(n).forEach(function (e) {
          switch (e) {
            case "barrels":
              for (var t = 0; t < n.barrels.length; t++) {
                n.barrels[t].animTime = n.barrelData[t].animTime || 0;
              }
              break;
            case "gadgets":
              for (var r = 0; r < n.gadgets.length; r++) {
                var a = n.gadgets[r],
                  o = n.gadgetData[r];
                (a.animTime = o.animTime),
                  o.rot && (a.rot = o.rot),
                  o.tank && T(a.tank, o.tank);
              }
          }
        }),
        n
      );
    }
    function T(e, t) {
      for (var n = 0; n < e.barrels.length; n++) {
        e.barrels[n].animTime = t.barrels[n].animTime || 0;
      }
      for (var r = 0; r < e.gadgets.length; r++) {
        var a = e.gadgets[r],
          o = t.gadgets[r];
        (a.animTime = o.animTime),
          o.rot && (a.rot = o.rot),
          o.tank && T(a.tank, o.tank);
      }
    }
    function M() {
      return Date.now() - u.g.renderDelay;
    }
    function S() {
      if (!p) return {};
      var e = (function () {
          for (var e = M(), t = f.length - 1; t >= 0; t--)
            if (f[t].t <= e) return t;
          return -1;
        })(),
        t = M(),
        n = f[e];
      if ((f.splice(0, e), e < 0 || !h)) h = f[f.length - 1];
      else {
        var r = f[e + 1] || n,
          a = Math.min((t - n.t) / (r.t - n.t), 1) || 0;
        h = {
          me: A(h.me || r.me, r.me, n.me, a, true, false),
          x: n.x,
          y: n.y,
          tanks: x(h.tanks || r.tanks, r.tanks, n.tanks, a, true),
          polygons: x(h.polygons || r.polygons, r.polygons, n.polygons, a, true),
          bullets: x(h.bullets || r.bullets, r.bullets, n.bullets, a, true),
          rifts: R(h.rifts || r.rifts, r.rifts, n.rifts, a),
          mapSize: Object(o.lerp)(h.mapSize, r.mapSize, a),
          tickTime: n.tickTime,
          dt: n.dt,
          dimension: n.dimension,
          cameraSizeMultiplier: n.cameraSizeMultiplier,
        };
      }
      return h;
    }
    function A(e, t, n, r) {
      var a =
          !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!t) return e;
      if (e) {
        var u = {};
        if (
          (s && t.fadeTime
            ? e.fadeTime
              ? (e.fadeTime = Object(o.lerp)(
                  e.fadeTime,
                  -0.1,
                  0.15 * l.cdt * 60
                ))
              : ((e.fadeTime = 1), a && (e.hp = 0))
            : (e.fadeTime = 1),
          a)
        ) {
          var c = e.hp / e.maxHP,
            d = t.hp / t.maxHP;
          c > d
            ? e.damageTime
              ? (u.damageTime = Object(o.lerp)(
                  e.damageTime,
                  Math.max(-0.2, 1 - 30 * (c - d)),
                  0.3
                ))
              : (u.damageTime = 1)
            : e.damageTime
            ? (u.damageTime = Object(o.lerp)(e.damageTime, 1, 0.3))
            : (u.damageTime = 1);
        }
        return (
          Object.keys(t).forEach(function (a) {
            var s = t[a],
              l = e[a] || s,
              c = (n && n[a]) || s;
            switch (a) {
              case "d":
                u[a] = I(c, s, r);
                break;
              case "x":
              case "y":
              case "hp":
              case "lifetime":
              case "maxHP":
                u[a] = Object(o.lerp)(c, s, r);
                break;
              case "score":
              case "totalScore":
              case "xpToNextLevel":
              case "size":
                u[a] = Object(o.lerp)(l, s, 0.1);
                break;
              case "barrels":
                u[a] = c;
                for (var d = 0; d < c.length; d++)
                  c[d] &&
                    s[d] &&
                    (u[a][d].animTime = Object(o.lerp)(
                      c[d].animTime,
                      s[d].animTime,
                      r
                    ));
                break;
              case "gadgets":
                u[a] = c;
                for (var f = 0; f < c.length; f++)
                  s[f] &&
                    l[f] &&
                    (l[f].animTime &&
                      s[f].animTime &&
                      (u[a][f].animTime = Object(o.lerp)(
                        l[f].animTime,
                        s[f].animTime,
                        r
                      )),
                    l[f].rot &&
                      s[f].rot &&
                      (u[a][f].rot = I(l[f].rot, s[f].rot, r)),
                    l[f].tank &&
                      s[f].tank &&
                      c[f].tank &&
                      (u[a][f].tank = k(l[f].tank, s[f].tank, c[f].tank, r)));
                break;
              case "smoothratio":
                u[a] = Object(o.lerp)(l[i], e.hp / e.maxHP, 0.002);
                break;
              case "damageTime":
                break;
              default:
                u[a] = c;
            }
          }),
          u
        );
      }
    }
    function k(e, t, n, r) {
      var a = {};
      return (
        Object.keys(t).forEach(function (i) {
          var s = t[i],
            l = e[i] || s,
            u = (n && n[i]) || s;
          switch (i) {
            case "barrels":
              a[i] = u;
              for (var c = 0; c < l.length; c++)
                l[c] &&
                  s[c] &&
                  (a[i][c].animTime = Object(o.lerp)(
                    u[c].animTime,
                    s[c].animTime,
                    r
                  ));
              break;
            case "gadgets":
              a[i] = u;
              for (var d = 0; d < u.length; d++)
                s[d] &&
                  l[d] &&
                  (l[d].animTime &&
                    s[d].animTime &&
                    (a[i][d].animTime = Object(o.lerp)(
                      l[d].animTime,
                      s[d].animTime,
                      r
                    )),
                  l[d].rot &&
                    s[d].rot &&
                    (a[i][d].rot = I(l[d].rot, s[d].rot, r)),
                  l[d].tank &&
                    s[d].tank &&
                    u[d].tank &&
                    (a[i][d].tank = k(l[d].tank, s[d].tank, u[d].tank, r)));
              break;
            default:
              a[i] = u;
          }
        }),
        a
      );
    }
    function x(e, t, n, r) {
      var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (e) {
        if (t) {
          var o,
            i = {},
            s = {},
            l = {},
            u = c(e);
          try {
            for (u.s(); !(o = u.n()).done; ) {
              var d = o.value;
              i[d.id] = d;
            }
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }
          var f,
            h = c(t);
          try {
            for (h.s(); !(f = h.n()).done; ) {
              var p = f.value;
              s[p.id] = p;
            }
          } catch (e) {
            h.e(e);
          } finally {
            h.f();
          }
          var _,
            g = c(n);
          try {
            for (g.s(); !(_ = g.n()).done; ) {
              var v = _.value;
              l[v.id] = v;
            }
          } catch (e) {
            g.e(e);
          } finally {
            g.f();
          }
          var m = e.concat(
            t.filter(function (e) {
              return !i[e.id];
            })
          );
          return m
            .map(function (e) {
              return A(e, s[e.id] || e, l[e.id] || e, r, a, true);
            })
            .filter(function (e) {
              return !(e.fadeTime < 0);
            });
        }
        return e;
      }
    }
    function R(e, t, n, r) {
      var a,
        o = {},
        i = {},
        s = c(e);
      try {
        for (s.s(); !(a = s.n()).done; ) {
          var l = a.value;
          o[l.id] = l;
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
      var u,
        d = c(n);
      try {
        for (d.s(); !(u = d.n()).done; ) {
          var f = u.value;
          i[f.id] = f;
        }
      } catch (e) {
        d.e(e);
      } finally {
        d.f();
      }
      if (e) {
        if (t) {
          for (var h = new Array(t.length), p = 0; p < t.length; ++p) {
            var _ = t[p];
            h[p] = A(o[_.id] || _, _, i[_.id] || _, r, false);
          }
          return h;
        }
        return e;
      }
    }
    function I(e, t, n) {
      var r = (1 - n) * Math.cos(e) + n * Math.cos(t),
        a = (1 - n) * Math.sin(e) + n * Math.sin(t);
      return Math.atan2(a, r);
    }
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n, r) {
        var a,
          o = false,
          i = 0;
        function s() {
          a && clearTimeout(a);
        }
        function l() {
          for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
            u[c] = arguments[c];
          var d = this,
            f = Date.now() - i;
          function h() {
            (i = Date.now()), n.apply(d, u);
          }
          function p() {
            a = void 0;
          }
          o ||
            (r && !a && h(),
            s(),
            void 0 === r && f > e
              ? h()
              : true !== t &&
                (a = setTimeout(r ? p : h, void 0 === r ? e - f : e)));
        }
        return (
          "boolean" != typeof t && ((r = n), (n = t), (t = void 0)),
          (l.cancel = function () {
            s(), (o = true);
          }),
          l
        );
      }
      (e.debounce = function (e, n, r) {
        return void 0 === r ? t(e, n, false) : t(e, r, false !== n);
      }),
        (e.throttle = t),
        Object.defineProperty(e, "__esModule", { value: true });
    })(t);
  },
  function (e, t) {
    var n;
    function r(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true,
            })
          : (e[t] = n),
        e
      );
    }
    e.exports = Object.freeze({
      TEAMS: [
        { value: 0, name: "Normal (FFA)" },
        { value: -1, name: "Fallen (FFA)" },
        { value: 2, name: "Celestial" },
        { value: 1, name: "Polygon" },
        { value: 10, name: "Blue" },
        { value: 11, name: "Red" },
        { value: 12, name: "Green" },
        { value: 13, name: "Purple" },
        { value: 4, name: "Yellow" },
        { value: 5, name: "Black" },
        { value: 6, name: "White" },
        { value: 3, name: "Barrel" },
        { value: 7, name: "Spike" },
        { value: 20, name: "Triangle Yellow" },
        { value: 21, name: "Square Red" },
        { value: 22, name: "Pentagon Blue" },
        { value: 23, name: "Hexagon Orange" },
        { value: 24, name: "Heptagon Green" },
        { value: 25, name: "Octagon Blue" },
        { value: 26, name: "Nonagon Dark Purple" },
        { value: 27, name: "Decagon Dark Blue" },
        { value: 28, name: "Hendecagon Black" },
        { value: 29, name: "Dodecagon Dark Grey" },
        { value: 30, name: "Tridecagon White" },
      ],
      POLYGON_TEAMS: [
        { value: 1, name: "Polygon" },
        { value: 0, name: "Normal (FFA)" },
        { value: -1, name: "Fallen (FFA)" },
        { value: 2, name: "Celestial" },
        { value: 10, name: "Blue" },
        { value: 11, name: "Red" },
        { value: 12, name: "Green" },
        { value: 13, name: "Purple" },
        { value: 4, name: "Yellow" },
        { value: 5, name: "Black" },
        { value: 6, name: "White" },
        { value: 3, name: "Barrel" },
        { value: 7, name: "Spike" },
        { value: 20, name: "Triangle Yellow" },
        { value: 21, name: "Square Red" },
        { value: 22, name: "Pentagon Blue" },
        { value: 23, name: "Hexagon Orange" },
        { value: 24, name: "Heptagon Green" },
        { value: 25, name: "Octagon Blue" },
        { value: 26, name: "Nonagon Dark Purple" },
        { value: 27, name: "Decagon Dark Blue" },
        { value: 28, name: "Hendecagon Black" },
        { value: 29, name: "Dodecagon Dark Grey" },
        { value: 30, name: "Tridecagon White" },
      ],
      VISUAL_TEAMS: [
        { value: void 0, name: "Unset" },
        { value: 0, name: "Normal (Blue and Red)" },
        { value: -1, name: "Fallen Light Gray" },
        { value: 2, name: "Celestial Pink" },
        { value: 10, name: "Blue" },
        { value: 11, name: "Red" },
        { value: 12, name: "Green" },
        { value: 13, name: "Purple" },
        { value: 4, name: "Yellow" },
        { value: 5, name: "Black" },
        { value: 6, name: "White" },
        { value: 3, name: "Barrel Gray" },
        { value: 7, name: "Spike Dark Gray" },
        { value: 20, name: "Triangle Yellow" },
        { value: 21, name: "Square Red" },
        { value: 22, name: "Pentagon Blue" },
        { value: 23, name: "Hexagon Orange" },
        { value: 24, name: "Heptagon Green" },
        { value: 25, name: "Octagon Blue" },
        { value: 26, name: "Nonagon Dark Purple" },
        { value: 27, name: "Decagon Dark Blue" },
        { value: 28, name: "Hendecagon Black" },
        { value: 29, name: "Dodecagon Dark Grey" },
        { value: 30, name: "Tridecagon White" },
      ],
      BARREL_ATTIBUTES: [
        {
          bulletName: "Bullet",
          defaultShootTrigger: 0,
          extraBulletStats: true,
          bulletStats: true,
          defaultLength: 1,
          defaultWidth: 0.5,
        },
        {
          bulletName: "Drone",
          defaultShootTrigger: 4,
          extraBulletStats: true,
          bulletStats: true,
          droneStats: true,
          defaultLength: 0.8,
          defaultWidth: 0.5,
        },
        {
          bulletName: "Trap",
          defaultShootTrigger: 0,
          extraBulletStats: true,
          bulletStats: true,
          defaultLength: 1,
          defaultWidth: 0.65,
        },
        {
          bulletName: "Minion",
          defaultShootTrigger: 4,
          extraBulletStats: true,
          minionStats: true,
          droneStats: true,
          defaultLength: 1.1,
          defaultWidth: 0.5,
        },
        {
          bulletName: "Player",
          noShootTrigger: true,
          launchSpeed: true,
          defaultLength: 0.7,
          defaultWidth: 0.5,
        },
        ((n = {
          bulletName: "Polyp",
          defaultShootTrigger: 4,
          extraBulletStats: true,
          defaultLength: 0.7,
        }),
        r(n, "extraBulletStats", true),
        r(n, "launchSpeed", true),
        r(n, "defaultWidth", 0.5),
        n),
        {
          bulletName: "Nothing",
          defaultShootTrigger: 0,
          defaultLength: 0.8,
          defaultWidth: 1,
        },
        {
          bulletName: "Rocket",
          defaultShootTrigger: 0,
          extraBulletStats: true,
          minionStats: true,
          defaultLength: 1,
          defaultWidth: 0.5,
        },
        {
          bulletName: "Custom Trap",
          defaultShootTrigger: 0,
          extraBulletStats: true,
          minionStats: true,
          defaultLength: 1,
          defaultWidth: 0.5,
        },
        {
          bulletName: "Polygon",
          defaultShootTrigger: 0,
          defaultLength: 1,
          defaultWidth: 1,
          polygonStats: true,
          extraBulletStats: true,
          launchSpeed: true,
        },
      ],
      MAX_SIDES: 1e3,
      MAX_RADIANT: 20,
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "d", function () {
        return l;
      });
    var r = n(1),
      a = n(3),
      o = (n(5), n(7), n(6), n(1), {}),
      i = {
        visual: {
          gridSize: 30,
          showMinimap: true,
          backgroundColor: "#CDCDCD",
          gridColor: "#C8C8C8",
          particles: {
            spawnrate: 0,
            speed: { min: 0, max: 0 },
            d: { min: 0, max: 360 },
            size: { min: 6, max: 6 },
            lifetime: { min: 30, max: 60 },
            sides: { min: 0, max: 0 },
            transparency: { min: 1, max: 1 },
            color: { min: "#CDCDCD", max: "#C8C8C8" },
          },
        },
        bases: [],
        walls: [],
        gates: [],
        trueMapSize: 1,
      };
    function s(e, t) {
      (t.visual.particles.spawnrate /= r.CAMERA_SIZE * r.CAMERA_SIZE),
        (o[e] = t);
    }
    function l(e, t) {
      setTimeout(function () {
        o[e].gates = t;
      }, a.g.renderDelay);
    }
  },
  function (e, t, n) {
    (t.encode = n(26).encode),
      (t.decode = n(32).decode),
      (t.Encoder = n(50).Encoder),
      (t.Decoder = n(51).Decoder),
      (t.createCodec = n(52).createCodec),
      (t.codec = n(53).codec);
  },
  function (e, t, n) {
    var r = n(21);
    (t.createCodec = s),
      (t.install = function (e) {
        for (var t in e) o.prototype[t] = i(o.prototype[t], e[t]);
      }),
      (t.filter = function (e) {
        return r(e)
          ? (function (e) {
              return (
                (e = e.slice()),
                function (n) {
                  return e.reduce(t, n);
                }
              );
              function t(e, t) {
                return t(e);
              }
            })(e)
          : e;
      });
    var a = n(10);
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      (this.options = e), this.init();
    }
    function i(e, t) {
      return e && t
        ? function () {
            return e.apply(this, arguments), t.apply(this, arguments);
          }
        : e || t;
    }
    function s(e) {
      return new o(e);
    }
    (o.prototype.init = function () {
      var e = this.options;
      return e && e.uint8array && (this.bufferish = a.Uint8Array), this;
    }),
      (t.preset = s({ preset: true }));
  },
  function (e, t, n) {
    "use strict";
    (t.byteLength = function (e) {
      var t = u(e),
        n = t[0],
        r = t[1];
      return (3 * (n + r)) / 4 - r;
    }),
      (t.toByteArray = function (e) {
        var t,
          n,
          r = u(e),
          i = r[0],
          s = r[1],
          l = new o(
            (function (e, t, n) {
              return (3 * (t + n)) / 4 - n;
            })(0, i, s)
          ),
          c = 0,
          d = s > 0 ? i - 4 : i;
        for (n = 0; n < d; n += 4)
          (t =
            (a[e.charCodeAt(n)] << 18) |
            (a[e.charCodeAt(n + 1)] << 12) |
            (a[e.charCodeAt(n + 2)] << 6) |
            a[e.charCodeAt(n + 3)]),
            (l[c++] = (t >> 16) & 255),
            (l[c++] = (t >> 8) & 255),
            (l[c++] = 255 & t);
        2 === s &&
          ((t = (a[e.charCodeAt(n)] << 2) | (a[e.charCodeAt(n + 1)] >> 4)),
          (l[c++] = 255 & t));
        1 === s &&
          ((t =
            (a[e.charCodeAt(n)] << 10) |
            (a[e.charCodeAt(n + 1)] << 4) |
            (a[e.charCodeAt(n + 2)] >> 2)),
          (l[c++] = (t >> 8) & 255),
          (l[c++] = 255 & t));
        return l;
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, n = e.length, a = n % 3, o = [], i = 0, s = n - a;
          i < s;
          i += 16383
        )
          o.push(c(e, i, i + 16383 > s ? s : i + 16383));
        1 === a
          ? ((t = e[n - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
          : 2 === a &&
            ((t = (e[n - 2] << 8) + e[n - 1]),
            o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="));
        return o.join("");
      });
    for (
      var r = [],
        a = [],
        o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = 0,
        l = i.length;
      s < l;
      ++s
    )
      (r[s] = i[s]), (a[i.charCodeAt(s)] = s);
    function u(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var n = e.indexOf("=");
      return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
    }
    function c(e, t, n) {
      for (var a, o, i = [], s = t; s < n; s += 3)
        (a =
          ((e[s] << 16) & 16711680) +
          ((e[s + 1] << 8) & 65280) +
          (255 & e[s + 2])),
          i.push(
            r[((o = a) >> 18) & 63] +
              r[(o >> 12) & 63] +
              r[(o >> 6) & 63] +
              r[63 & o]
          );
      return i.join("");
    }
    (a["-".charCodeAt(0)] = 62), (a["_".charCodeAt(0)] = 63);
  },
  function (e, t, n) {
    var r = n(19).ExtBuffer,
      a = n(45),
      o = n(46),
      i = n(16);
    function s() {
      var e = this.options;
      return (
        (this.encode = (function (e) {
          var t = o.getWriteType(e);
          return function (e, n) {
            var r = t[typeof n];
            if (!r)
              throw new Error('Unsupported type "' + typeof n + '": ' + n);
            r(e, n);
          };
        })(e)),
        e && e.preset && a.setExtPackers(this),
        this
      );
    }
    i.install({
      addExtPacker: function (e, t, n) {
        n = i.filter(n);
        var a = t.name;
        if (a && "Object" !== a) {
          (this.extPackers || (this.extPackers = {}))[a] = o;
        } else {
          (this.extEncoderList || (this.extEncoderList = [])).unshift([t, o]);
        }
        function o(t) {
          return n && (t = n(t)), new r(t, e);
        }
      },
      getExtPacker: function (e) {
        var t = this.extPackers || (this.extPackers = {}),
          n = e.constructor,
          r = n && n.name && t[n.name];
        if (r) return r;
        for (
          var a = this.extEncoderList || (this.extEncoderList = []),
            o = a.length,
            i = 0;
          i < o;
          i++
        ) {
          var s = a[i];
          if (n === s[0]) return s[1];
        }
      },
      init: s,
    }),
      (t.preset = s.call(i.preset));
  },
  function (e, t, n) {
    t.ExtBuffer = function e(t, n) {
      if (!(this instanceof e)) return new e(t, n);
      (this.buffer = r.from(t)), (this.type = n);
    };
    var r = n(10);
  },
  function (e, t) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    (t.read = function (e, t, n, r, a) {
      var o,
        i,
        s = 8 * a - r - 1,
        l = (1 << s) - 1,
        u = l >> 1,
        c = -7,
        d = n ? a - 1 : 0,
        f = n ? -1 : 1,
        h = e[t + d];
      for (
        d += f, o = h & ((1 << -c) - 1), h >>= -c, c += s;
        c > 0;
        o = 256 * o + e[t + d], d += f, c -= 8
      );
      for (
        i = o & ((1 << -c) - 1), o >>= -c, c += r;
        c > 0;
        i = 256 * i + e[t + d], d += f, c -= 8
      );
      if (0 === o) o = 1 - u;
      else {
        if (o === l) return i ? NaN : (1 / 0) * (h ? -1 : 1);
        (i += Math.pow(2, r)), (o -= u);
      }
      return (h ? -1 : 1) * i * Math.pow(2, o - r);
    }),
      (t.write = function (e, t, n, r, a, o) {
        var i,
          s,
          l,
          u = 8 * o - a - 1,
          c = (1 << u) - 1,
          d = c >> 1,
          f = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          h = r ? 0 : o - 1,
          p = r ? 1 : -1,
          _ = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((s = isNaN(t) ? 1 : 0), (i = c))
              : ((i = Math.floor(Math.log(t) / Math.LN2)),
                t * (l = Math.pow(2, -i)) < 1 && (i--, (l *= 2)),
                (t += i + d >= 1 ? f / l : f * Math.pow(2, 1 - d)) * l >= 2 &&
                  (i++, (l /= 2)),
                i + d >= c
                  ? ((s = 0), (i = c))
                  : i + d >= 1
                  ? ((s = (t * l - 1) * Math.pow(2, a)), (i += d))
                  : ((s = t * Math.pow(2, d - 1) * Math.pow(2, a)), (i = 0)));
          a >= 8;
          e[n + h] = 255 & s, h += p, s /= 256, a -= 8
        );
        for (
          i = (i << a) | s, u += a;
          u > 0;
          e[n + h] = 255 & i, h += p, i /= 256, u -= 8
        );
        e[n + h - p] |= 128 * _;
      });
  },
  function (e, t) {
    var n = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == n.call(e);
      };
  },
  function (e, t, n) {
    var r,
      a = n(44);
    (t.copy = u),
      (t.slice = c),
      (t.toString = function (e, t, n) {
        var r = !s && o.isBuffer(this) ? this.toString : a.toString;
        return r.apply(this, arguments);
      }),
      (t.write =
        ((r = "write"),
        function () {
          var e = this[r] || a[r];
          return e.apply(this, arguments);
        }));
    var o = n(10),
      i = o.global,
      s = o.hasBuffer && "TYPED_ARRAY_SUPPORT" in i,
      l = s && !i.TYPED_ARRAY_SUPPORT;
    function u(e, t, n, r) {
      var i = o.isBuffer(this),
        s = o.isBuffer(e);
      if (i && s) return this.copy(e, t, n, r);
      if (l || i || s || !o.isView(this) || !o.isView(e))
        return a.copy.call(this, e, t, n, r);
      var u = n || null != r ? c.call(this, n, r) : this;
      return e.set(u, t), u.length;
    }
    function c(e, t) {
      var n = this.slice || (!l && this.subarray);
      if (n) return n.call(this, e, t);
      var r = o.alloc.call(this, t - e);
      return u.call(this, r, 0, e, t), r;
    }
  },
  function (e, t, n) {
    (function (e) {
      !(function (t) {
        var n,
          r = void 0 !== e && e,
          a = "undefined" != typeof Uint8Array && Uint8Array,
          o = "undefined" != typeof ArrayBuffer && ArrayBuffer,
          i = [0, 0, 0, 0, 0, 0, 0, 0],
          s =
            Array.isArray ||
            function (e) {
              return (
                !!e && "[object Array]" == Object.prototype.toString.call(e)
              );
            },
          l = 4294967296;
        function u(e, s, u) {
          var y = s ? 0 : 4,
            E = s ? 4 : 0,
            O = s ? 0 : 3,
            w = s ? 1 : 2,
            T = s ? 2 : 1,
            M = s ? 3 : 0,
            S = s ? g : m,
            A = s ? v : b,
            k = I.prototype,
            x = "is" + e,
            R = "_" + x;
          return (
            (k.buffer = void 0),
            (k.offset = 0),
            (k[R] = true),
            (k.toNumber = C),
            (k.toString = function (e) {
              var t = this.buffer,
                n = this.offset,
                r = P(t, n + y),
                a = P(t, n + E),
                o = "",
                i = !u && 2147483648 & r;
              i && ((r = ~r), (a = l - a));
              e = e || 10;
              for (;;) {
                var s = (r % e) * l + a;
                if (
                  ((r = Math.floor(r / e)),
                  (a = Math.floor(s / e)),
                  (o = (s % e).toString(e) + o),
                  !r && !a)
                )
                  break;
              }
              i && (o = "-" + o);
              return o;
            }),
            (k.toJSON = C),
            (k.toArray = c),
            r && (k.toBuffer = d),
            a && (k.toArrayBuffer = f),
            (I[x] = function (e) {
              return !(!e || !e[R]);
            }),
            (t[e] = I),
            I
          );
          function I(e, t, r, s) {
            return this instanceof I
              ? (function (e, t, r, s, u) {
                  a &&
                    o &&
                    (t instanceof o && (t = new a(t)),
                    s instanceof o && (s = new a(s)));
                  if (!(t || r || s || n)) return void (e.buffer = _(i, 0));
                  if (!h(t, r)) {
                    (u = r), (s = t), (r = 0), (t = new (n || Array)(8));
                  }
                  if (((e.buffer = t), (e.offset = r |= 0), void 0 === s))
                    return;
                  "string" == typeof s
                    ? (function (e, t, n, r) {
                        var a = 0,
                          o = n.length,
                          i = 0,
                          s = 0;
                        "-" === n[0] && a++;
                        var u = a;
                        for (; a < o; ) {
                          var c = parseInt(n[a++], r);
                          if (!(c >= 0)) break;
                          (s = s * r + c),
                            (i = i * r + Math.floor(s / l)),
                            (s %= l);
                        }
                        u && ((i = ~i), s ? (s = l - s) : i++);
                        D(e, t + y, i), D(e, t + E, s);
                      })(t, r, s, u || 10)
                    : h(s, u)
                    ? p(t, r, s, u)
                    : "number" == typeof u
                    ? (D(t, r + y, s), D(t, r + E, u))
                    : s > 0
                    ? S(t, r, s)
                    : s < 0
                    ? A(t, r, s)
                    : p(t, r, i, 0);
                })(this, e, t, r, s)
              : new I(e, t, r, s);
          }
          function C() {
            var e = this.buffer,
              t = this.offset,
              n = P(e, t + y),
              r = P(e, t + E);
            return u || (n |= 0), n ? n * l + r : r;
          }
          function D(e, t, n) {
            (e[t + M] = 255 & n),
              (n >>= 8),
              (e[t + T] = 255 & n),
              (n >>= 8),
              (e[t + w] = 255 & n),
              (n >>= 8),
              (e[t + O] = 255 & n);
          }
          function P(e, t) {
            return (
              16777216 * e[t + O] +
              (e[t + w] << 16) +
              (e[t + T] << 8) +
              e[t + M]
            );
          }
        }
        function c(e) {
          var t = this.buffer,
            r = this.offset;
          return (
            (n = null),
            false !== e && 0 === r && 8 === t.length && s(t) ? t : _(t, r)
          );
        }
        function d(t) {
          var a = this.buffer,
            o = this.offset;
          if (((n = r), false !== t && 0 === o && 8 === a.length && e.isBuffer(a)))
            return a;
          var i = new r(8);
          return p(i, 0, a, o), i;
        }
        function f(e) {
          var t = this.buffer,
            r = this.offset,
            i = t.buffer;
          if (
            ((n = a),
            false !== e && 0 === r && i instanceof o && 8 === i.byteLength)
          )
            return i;
          var s = new a(8);
          return p(s, 0, t, r), s.buffer;
        }
        function h(e, t) {
          var n = e && e.length;
          return (t |= 0), n && t + 8 <= n && "string" != typeof e[t];
        }
        function p(e, t, n, r) {
          (t |= 0), (r |= 0);
          for (var a = 0; a < 8; a++) e[t++] = 255 & n[r++];
        }
        function _(e, t) {
          return Array.prototype.slice.call(e, t, t + 8);
        }
        function g(e, t, n) {
          for (var r = t + 8; r > t; ) (e[--r] = 255 & n), (n /= 256);
        }
        function v(e, t, n) {
          var r = t + 8;
          for (n++; r > t; ) (e[--r] = (255 & -n) ^ 255), (n /= 256);
        }
        function m(e, t, n) {
          for (var r = t + 8; t < r; ) (e[t++] = 255 & n), (n /= 256);
        }
        function b(e, t, n) {
          var r = t + 8;
          for (n++; t < r; ) (e[t++] = (255 & -n) ^ 255), (n /= 256);
        }
        u("Uint64BE", true, true),
          u("Int64BE", true, false),
          u("Uint64LE", false, true),
          u("Int64LE", false, false);
      })("string" != typeof t.nodeName ? t : this || {});
    }.call(this, n(28).Buffer));
  },
  function (e, t, n) {
    var r = n(19).ExtBuffer,
      a = n(48),
      o = n(34).readUint8,
      i = n(49),
      s = n(16);
    function l() {
      var e = this.options;
      return (
        (this.decode = (function (e) {
          var t = i.getReadToken(e);
          return function (e) {
            var n = o(e),
              r = t[n];
            if (!r)
              throw new Error(
                "Invalid type: " + (n ? "0x" + n.toString(16) : n)
              );
            return r(e);
          };
        })(e)),
        e && e.preset && a.setExtUnpackers(this),
        this
      );
    }
    s.install({
      addExtUnpacker: function (e, t) {
        (this.extUnpackers || (this.extUnpackers = []))[e] = s.filter(t);
      },
      getExtUnpacker: function (e) {
        return (
          (this.extUnpackers || (this.extUnpackers = []))[e] ||
          function (t) {
            return new r(t, e);
          }
        );
      },
      init: l,
    }),
      (t.preset = l.call(s.preset));
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return qt;
    }),
      n.d(t, "b", function () {
        return Zt;
      });
    function r(e) {
      let t = e.length;
      for (; --t >= 0; ) e[t] = 0;
    }
    const a = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ]),
      o = new Uint8Array([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ]),
      i = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
      ]),
      s = new Uint8Array([
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ]),
      l = new Array(576);
    r(l);
    const u = new Array(60);
    r(u);
    const c = new Array(512);
    r(c);
    const d = new Array(256);
    r(d);
    const f = new Array(29);
    r(f);
    const h = new Array(30);
    function p(e, t, n, r, a) {
      (this.static_tree = e),
        (this.extra_bits = t),
        (this.extra_base = n),
        (this.elems = r),
        (this.max_length = a),
        (this.has_stree = e && e.length);
    }
    let _, g, v;
    function m(e, t) {
      (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
    }
    r(h);
    const b = (e) => (e < 256 ? c[e] : c[256 + (e >>> 7)]),
      y = (e, t) => {
        (e.pending_buf[e.pending++] = 255 & t),
          (e.pending_buf[e.pending++] = (t >>> 8) & 255);
      },
      E = (e, t, n) => {
        e.bi_valid > 16 - n
          ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
            y(e, e.bi_buf),
            (e.bi_buf = t >> (16 - e.bi_valid)),
            (e.bi_valid += n - 16))
          : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
      },
      O = (e, t, n) => {
        E(e, n[2 * t], n[2 * t + 1]);
      },
      w = (e, t) => {
        let n = 0;
        do {
          (n |= 1 & e), (e >>>= 1), (n <<= 1);
        } while (--t > 0);
        return n >>> 1;
      },
      T = (e, t, n) => {
        const r = new Array(16);
        let a,
          o,
          i = 0;
        for (a = 1; a <= 15; a++) r[a] = i = (i + n[a - 1]) << 1;
        for (o = 0; o <= t; o++) {
          let t = e[2 * o + 1];
          0 !== t && (e[2 * o] = w(r[t]++, t));
        }
      },
      M = (e) => {
        let t;
        for (t = 0; t < 286; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
        (e.dyn_ltree[512] = 1),
          (e.opt_len = e.static_len = 0),
          (e.last_lit = e.matches = 0);
      },
      S = (e) => {
        e.bi_valid > 8
          ? y(e, e.bi_buf)
          : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
          (e.bi_buf = 0),
          (e.bi_valid = 0);
      },
      A = (e, t, n, r) => {
        const a = 2 * t,
          o = 2 * n;
        return e[a] < e[o] || (e[a] === e[o] && r[t] <= r[n]);
      },
      k = (e, t, n) => {
        const r = e.heap[n];
        let a = n << 1;
        for (
          ;
          a <= e.heap_len &&
          (a < e.heap_len && A(t, e.heap[a + 1], e.heap[a], e.depth) && a++,
          !A(t, r, e.heap[a], e.depth));

        )
          (e.heap[n] = e.heap[a]), (n = a), (a <<= 1);
        e.heap[n] = r;
      },
      x = (e, t, n) => {
        let r,
          i,
          s,
          l,
          u = 0;
        if (0 !== e.last_lit)
          do {
            (r =
              (e.pending_buf[e.d_buf + 2 * u] << 8) |
              e.pending_buf[e.d_buf + 2 * u + 1]),
              (i = e.pending_buf[e.l_buf + u]),
              u++,
              0 === r
                ? O(e, i, t)
                : ((s = d[i]),
                  O(e, s + 256 + 1, t),
                  (l = a[s]),
                  0 !== l && ((i -= f[s]), E(e, i, l)),
                  r--,
                  (s = b(r)),
                  O(e, s, n),
                  (l = o[s]),
                  0 !== l && ((r -= h[s]), E(e, r, l)));
          } while (u < e.last_lit);
        O(e, 256, t);
      },
      R = (e, t) => {
        const n = t.dyn_tree,
          r = t.stat_desc.static_tree,
          a = t.stat_desc.has_stree,
          o = t.stat_desc.elems;
        let i,
          s,
          l,
          u = -1;
        for (e.heap_len = 0, e.heap_max = 573, i = 0; i < o; i++)
          0 !== n[2 * i]
            ? ((e.heap[++e.heap_len] = u = i), (e.depth[i] = 0))
            : (n[2 * i + 1] = 0);
        for (; e.heap_len < 2; )
          (l = e.heap[++e.heap_len] = u < 2 ? ++u : 0),
            (n[2 * l] = 1),
            (e.depth[l] = 0),
            e.opt_len--,
            a && (e.static_len -= r[2 * l + 1]);
        for (t.max_code = u, i = e.heap_len >> 1; i >= 1; i--) k(e, n, i);
        l = o;
        do {
          (i = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            k(e, n, 1),
            (s = e.heap[1]),
            (e.heap[--e.heap_max] = i),
            (e.heap[--e.heap_max] = s),
            (n[2 * l] = n[2 * i] + n[2 * s]),
            (e.depth[l] =
              (e.depth[i] >= e.depth[s] ? e.depth[i] : e.depth[s]) + 1),
            (n[2 * i + 1] = n[2 * s + 1] = l),
            (e.heap[1] = l++),
            k(e, n, 1);
        } while (e.heap_len >= 2);
        (e.heap[--e.heap_max] = e.heap[1]),
          ((e, t) => {
            const n = t.dyn_tree,
              r = t.max_code,
              a = t.stat_desc.static_tree,
              o = t.stat_desc.has_stree,
              i = t.stat_desc.extra_bits,
              s = t.stat_desc.extra_base,
              l = t.stat_desc.max_length;
            let u,
              c,
              d,
              f,
              h,
              p,
              _ = 0;
            for (f = 0; f <= 15; f++) e.bl_count[f] = 0;
            for (
              n[2 * e.heap[e.heap_max] + 1] = 0, u = e.heap_max + 1;
              u < 573;
              u++
            )
              (c = e.heap[u]),
                (f = n[2 * n[2 * c + 1] + 1] + 1),
                f > l && ((f = l), _++),
                (n[2 * c + 1] = f),
                c > r ||
                  (e.bl_count[f]++,
                  (h = 0),
                  c >= s && (h = i[c - s]),
                  (p = n[2 * c]),
                  (e.opt_len += p * (f + h)),
                  o && (e.static_len += p * (a[2 * c + 1] + h)));
            if (0 !== _) {
              do {
                for (f = l - 1; 0 === e.bl_count[f]; ) f--;
                e.bl_count[f]--,
                  (e.bl_count[f + 1] += 2),
                  e.bl_count[l]--,
                  (_ -= 2);
              } while (_ > 0);
              for (f = l; 0 !== f; f--)
                for (c = e.bl_count[f]; 0 !== c; )
                  (d = e.heap[--u]),
                    d > r ||
                      (n[2 * d + 1] !== f &&
                        ((e.opt_len += (f - n[2 * d + 1]) * n[2 * d]),
                        (n[2 * d + 1] = f)),
                      c--);
            }
          })(e, t),
          T(n, u, e.bl_count);
      },
      I = (e, t, n) => {
        let r,
          a,
          o = -1,
          i = t[1],
          s = 0,
          l = 7,
          u = 4;
        for (
          0 === i && ((l = 138), (u = 3)), t[2 * (n + 1) + 1] = 65535, r = 0;
          r <= n;
          r++
        )
          (a = i),
            (i = t[2 * (r + 1) + 1]),
            (++s < l && a === i) ||
              (s < u
                ? (e.bl_tree[2 * a] += s)
                : 0 !== a
                ? (a !== o && e.bl_tree[2 * a]++, e.bl_tree[32]++)
                : s <= 10
                ? e.bl_tree[34]++
                : e.bl_tree[36]++,
              (s = 0),
              (o = a),
              0 === i
                ? ((l = 138), (u = 3))
                : a === i
                ? ((l = 6), (u = 3))
                : ((l = 7), (u = 4)));
      },
      C = (e, t, n) => {
        let r,
          a,
          o = -1,
          i = t[1],
          s = 0,
          l = 7,
          u = 4;
        for (0 === i && ((l = 138), (u = 3)), r = 0; r <= n; r++)
          if (((a = i), (i = t[2 * (r + 1) + 1]), !(++s < l && a === i))) {
            if (s < u)
              do {
                O(e, a, e.bl_tree);
              } while (0 != --s);
            else
              0 !== a
                ? (a !== o && (O(e, a, e.bl_tree), s--),
                  O(e, 16, e.bl_tree),
                  E(e, s - 3, 2))
                : s <= 10
                ? (O(e, 17, e.bl_tree), E(e, s - 3, 3))
                : (O(e, 18, e.bl_tree), E(e, s - 11, 7));
            (s = 0),
              (o = a),
              0 === i
                ? ((l = 138), (u = 3))
                : a === i
                ? ((l = 6), (u = 3))
                : ((l = 7), (u = 4));
          }
      };
    let D = false;
    const P = (e, t, n, r) => {
      E(e, 0 + (r ? 1 : 0), 3),
        ((e, t, n, r) => {
          S(e),
            r && (y(e, n), y(e, ~n)),
            e.pending_buf.set(e.window.subarray(t, t + n), e.pending),
            (e.pending += n);
        })(e, t, n, true);
    };
    var B = {
      _tr_init: (e) => {
        D ||
          ((() => {
            let e, t, n, r, s;
            const m = new Array(16);
            for (n = 0, r = 0; r < 28; r++)
              for (f[r] = n, e = 0; e < 1 << a[r]; e++) d[n++] = r;
            for (d[n - 1] = r, s = 0, r = 0; r < 16; r++)
              for (h[r] = s, e = 0; e < 1 << o[r]; e++) c[s++] = r;
            for (s >>= 7; r < 30; r++)
              for (h[r] = s << 7, e = 0; e < 1 << (o[r] - 7); e++)
                c[256 + s++] = r;
            for (t = 0; t <= 15; t++) m[t] = 0;
            for (e = 0; e <= 143; ) (l[2 * e + 1] = 8), e++, m[8]++;
            for (; e <= 255; ) (l[2 * e + 1] = 9), e++, m[9]++;
            for (; e <= 279; ) (l[2 * e + 1] = 7), e++, m[7]++;
            for (; e <= 287; ) (l[2 * e + 1] = 8), e++, m[8]++;
            for (T(l, 287, m), e = 0; e < 30; e++)
              (u[2 * e + 1] = 5), (u[2 * e] = w(e, 5));
            (_ = new p(l, a, 257, 286, 15)),
              (g = new p(u, o, 0, 30, 15)),
              (v = new p(new Array(0), i, 0, 19, 7));
          })(),
          (D = true)),
          (e.l_desc = new m(e.dyn_ltree, _)),
          (e.d_desc = new m(e.dyn_dtree, g)),
          (e.bl_desc = new m(e.bl_tree, v)),
          (e.bi_buf = 0),
          (e.bi_valid = 0),
          M(e);
      },
      _tr_stored_block: P,
      _tr_flush_block: (e, t, n, r) => {
        let a,
          o,
          i = 0;
        e.level > 0
          ? (2 === e.strm.data_type &&
              (e.strm.data_type = ((e) => {
                let t,
                  n = 4093624447;
                for (t = 0; t <= 31; t++, n >>>= 1)
                  if (1 & n && 0 !== e.dyn_ltree[2 * t]) return 0;
                if (
                  0 !== e.dyn_ltree[18] ||
                  0 !== e.dyn_ltree[20] ||
                  0 !== e.dyn_ltree[26]
                )
                  return 1;
                for (t = 32; t < 256; t++)
                  if (0 !== e.dyn_ltree[2 * t]) return 1;
                return 0;
              })(e)),
            R(e, e.l_desc),
            R(e, e.d_desc),
            (i = ((e) => {
              let t;
              for (
                I(e, e.dyn_ltree, e.l_desc.max_code),
                  I(e, e.dyn_dtree, e.d_desc.max_code),
                  R(e, e.bl_desc),
                  t = 18;
                t >= 3 && 0 === e.bl_tree[2 * s[t] + 1];
                t--
              );
              return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
            })(e)),
            (a = (e.opt_len + 3 + 7) >>> 3),
            (o = (e.static_len + 3 + 7) >>> 3),
            o <= a && (a = o))
          : (a = o = n + 5),
          n + 4 <= a && -1 !== t
            ? P(e, t, n, r)
            : 4 === e.strategy || o === a
            ? (E(e, 2 + (r ? 1 : 0), 3), x(e, l, u))
            : (E(e, 4 + (r ? 1 : 0), 3),
              ((e, t, n, r) => {
                let a;
                for (
                  E(e, t - 257, 5), E(e, n - 1, 5), E(e, r - 4, 4), a = 0;
                  a < r;
                  a++
                )
                  E(e, e.bl_tree[2 * s[a] + 1], 3);
                C(e, e.dyn_ltree, t - 1), C(e, e.dyn_dtree, n - 1);
              })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, i + 1),
              x(e, e.dyn_ltree, e.dyn_dtree)),
          M(e),
          r && S(e);
      },
      _tr_tally: (e, t, n) => (
        (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
        (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
        (e.pending_buf[e.l_buf + e.last_lit] = 255 & n),
        e.last_lit++,
        0 === t
          ? e.dyn_ltree[2 * n]++
          : (e.matches++,
            t--,
            e.dyn_ltree[2 * (d[n] + 256 + 1)]++,
            e.dyn_dtree[2 * b(t)]++),
        e.last_lit === e.lit_bufsize - 1
      ),
      _tr_align: (e) => {
        E(e, 2, 3),
          O(e, 256, l),
          ((e) => {
            16 === e.bi_valid
              ? (y(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
              : e.bi_valid >= 8 &&
                ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
                (e.bi_buf >>= 8),
                (e.bi_valid -= 8));
          })(e);
      },
    };
    var j = (e, t, n, r) => {
      let a = (65535 & e) | 0,
        o = ((e >>> 16) & 65535) | 0,
        i = 0;
      for (; 0 !== n; ) {
        (i = n > 2e3 ? 2e3 : n), (n -= i);
        do {
          (a = (a + t[r++]) | 0), (o = (o + a) | 0);
        } while (--i);
        (a %= 65521), (o %= 65521);
      }
      return a | (o << 16) | 0;
    };
    const L = new Uint32Array(
      (() => {
        let e,
          t = [];
        for (var n = 0; n < 256; n++) {
          e = n;
          for (var r = 0; r < 8; r++)
            e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
          t[n] = e;
        }
        return t;
      })()
    );
    var U = (e, t, n, r) => {
        const a = L,
          o = r + n;
        e ^= -1;
        for (let n = r; n < o; n++) e = (e >>> 8) ^ a[255 & (e ^ t[n])];
        return -1 ^ e;
      },
      N = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version",
      },
      z = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
      };
    const {
        _tr_init: W,
        _tr_stored_block: K,
        _tr_flush_block: G,
        _tr_tally: F,
        _tr_align: Y,
      } = B,
      {
        Z_NO_FLUSH: H,
        Z_PARTIAL_FLUSH: V,
        Z_FULL_FLUSH: q,
        Z_FINISH: Z,
        Z_BLOCK: X,
        Z_OK: J,
        Z_STREAM_END: $,
        Z_STREAM_ERROR: Q,
        Z_DATA_ERROR: ee,
        Z_BUF_ERROR: te,
        Z_DEFAULT_COMPRESSION: ne,
        Z_FILTERED: re,
        Z_HUFFMAN_ONLY: ae,
        Z_RLE: oe,
        Z_FIXED: ie,
        Z_DEFAULT_STRATEGY: se,
        Z_UNKNOWN: le,
        Z_DEFLATED: ue,
      } = z,
      ce = (e, t) => ((e.msg = N[t]), t),
      de = (e) => (e << 1) - (e > 4 ? 9 : 0),
      fe = (e) => {
        let t = e.length;
        for (; --t >= 0; ) e[t] = 0;
      };
    let he = (e, t, n) => ((t << e.hash_shift) ^ n) & e.hash_mask;
    const pe = (e) => {
        const t = e.state;
        let n = t.pending;
        n > e.avail_out && (n = e.avail_out),
          0 !== n &&
            (e.output.set(
              t.pending_buf.subarray(t.pending_out, t.pending_out + n),
              e.next_out
            ),
            (e.next_out += n),
            (t.pending_out += n),
            (e.total_out += n),
            (e.avail_out -= n),
            (t.pending -= n),
            0 === t.pending && (t.pending_out = 0));
      },
      _e = (e, t) => {
        G(
          e,
          e.block_start >= 0 ? e.block_start : -1,
          e.strstart - e.block_start,
          t
        ),
          (e.block_start = e.strstart),
          pe(e.strm);
      },
      ge = (e, t) => {
        e.pending_buf[e.pending++] = t;
      },
      ve = (e, t) => {
        (e.pending_buf[e.pending++] = (t >>> 8) & 255),
          (e.pending_buf[e.pending++] = 255 & t);
      },
      me = (e, t, n, r) => {
        let a = e.avail_in;
        return (
          a > r && (a = r),
          0 === a
            ? 0
            : ((e.avail_in -= a),
              t.set(e.input.subarray(e.next_in, e.next_in + a), n),
              1 === e.state.wrap
                ? (e.adler = j(e.adler, t, a, n))
                : 2 === e.state.wrap && (e.adler = U(e.adler, t, a, n)),
              (e.next_in += a),
              (e.total_in += a),
              a)
        );
      },
      be = (e, t) => {
        let n,
          r,
          a = e.max_chain_length,
          o = e.strstart,
          i = e.prev_length,
          s = e.nice_match;
        const l =
            e.strstart > e.w_size - 262 ? e.strstart - (e.w_size - 262) : 0,
          u = e.window,
          c = e.w_mask,
          d = e.prev,
          f = e.strstart + 258;
        let h = u[o + i - 1],
          p = u[o + i];
        e.prev_length >= e.good_match && (a >>= 2),
          s > e.lookahead && (s = e.lookahead);
        do {
          if (
            ((n = t),
            u[n + i] === p &&
              u[n + i - 1] === h &&
              u[n] === u[o] &&
              u[++n] === u[o + 1])
          ) {
            (o += 2), n++;
            do {} while (
              u[++o] === u[++n] &&
              u[++o] === u[++n] &&
              u[++o] === u[++n] &&
              u[++o] === u[++n] &&
              u[++o] === u[++n] &&
              u[++o] === u[++n] &&
              u[++o] === u[++n] &&
              u[++o] === u[++n] &&
              o < f
            );
            if (((r = 258 - (f - o)), (o = f - 258), r > i)) {
              if (((e.match_start = t), (i = r), r >= s)) break;
              (h = u[o + i - 1]), (p = u[o + i]);
            }
          }
        } while ((t = d[t & c]) > l && 0 != --a);
        return i <= e.lookahead ? i : e.lookahead;
      },
      ye = (e) => {
        const t = e.w_size;
        let n, r, a, o, i;
        do {
          if (
            ((o = e.window_size - e.lookahead - e.strstart),
            e.strstart >= t + (t - 262))
          ) {
            e.window.set(e.window.subarray(t, t + t), 0),
              (e.match_start -= t),
              (e.strstart -= t),
              (e.block_start -= t),
              (r = e.hash_size),
              (n = r);
            do {
              (a = e.head[--n]), (e.head[n] = a >= t ? a - t : 0);
            } while (--r);
            (r = t), (n = r);
            do {
              (a = e.prev[--n]), (e.prev[n] = a >= t ? a - t : 0);
            } while (--r);
            o += t;
          }
          if (0 === e.strm.avail_in) break;
          if (
            ((r = me(e.strm, e.window, e.strstart + e.lookahead, o)),
            (e.lookahead += r),
            e.lookahead + e.insert >= 3)
          )
            for (
              i = e.strstart - e.insert,
                e.ins_h = e.window[i],
                e.ins_h = he(e, e.ins_h, e.window[i + 1]);
              e.insert &&
              ((e.ins_h = he(e, e.ins_h, e.window[i + 3 - 1])),
              (e.prev[i & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = i),
              i++,
              e.insert--,
              !(e.lookahead + e.insert < 3));

            );
        } while (e.lookahead < 262 && 0 !== e.strm.avail_in);
      },
      Ee = (e, t) => {
        let n, r;
        for (;;) {
          if (e.lookahead < 262) {
            if ((ye(e), e.lookahead < 262 && t === H)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((n = 0),
            e.lookahead >= 3 &&
              ((e.ins_h = he(e, e.ins_h, e.window[e.strstart + 3 - 1])),
              (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            0 !== n &&
              e.strstart - n <= e.w_size - 262 &&
              (e.match_length = be(e, n)),
            e.match_length >= 3)
          )
            if (
              ((r = F(e, e.strstart - e.match_start, e.match_length - 3)),
              (e.lookahead -= e.match_length),
              e.match_length <= e.max_lazy_match && e.lookahead >= 3)
            ) {
              e.match_length--;
              do {
                e.strstart++,
                  (e.ins_h = he(e, e.ins_h, e.window[e.strstart + 3 - 1])),
                  (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                  (e.head[e.ins_h] = e.strstart);
              } while (0 != --e.match_length);
              e.strstart++;
            } else
              (e.strstart += e.match_length),
                (e.match_length = 0),
                (e.ins_h = e.window[e.strstart]),
                (e.ins_h = he(e, e.ins_h, e.window[e.strstart + 1]));
          else (r = F(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++;
          if (r && (_e(e, false), 0 === e.strm.avail_out)) return 1;
        }
        return (
          (e.insert = e.strstart < 2 ? e.strstart : 2),
          t === Z
            ? (_e(e, true), 0 === e.strm.avail_out ? 3 : 4)
            : e.last_lit && (_e(e, false), 0 === e.strm.avail_out)
            ? 1
            : 2
        );
      },
      Oe = (e, t) => {
        let n, r, a;
        for (;;) {
          if (e.lookahead < 262) {
            if ((ye(e), e.lookahead < 262 && t === H)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((n = 0),
            e.lookahead >= 3 &&
              ((e.ins_h = he(e, e.ins_h, e.window[e.strstart + 3 - 1])),
              (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            (e.prev_length = e.match_length),
            (e.prev_match = e.match_start),
            (e.match_length = 2),
            0 !== n &&
              e.prev_length < e.max_lazy_match &&
              e.strstart - n <= e.w_size - 262 &&
              ((e.match_length = be(e, n)),
              e.match_length <= 5 &&
                (e.strategy === re ||
                  (3 === e.match_length &&
                    e.strstart - e.match_start > 4096)) &&
                (e.match_length = 2)),
            e.prev_length >= 3 && e.match_length <= e.prev_length)
          ) {
            (a = e.strstart + e.lookahead - 3),
              (r = F(e, e.strstart - 1 - e.prev_match, e.prev_length - 3)),
              (e.lookahead -= e.prev_length - 1),
              (e.prev_length -= 2);
            do {
              ++e.strstart <= a &&
                ((e.ins_h = he(e, e.ins_h, e.window[e.strstart + 3 - 1])),
                (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = e.strstart));
            } while (0 != --e.prev_length);
            if (
              ((e.match_available = 0),
              (e.match_length = 2),
              e.strstart++,
              r && (_e(e, false), 0 === e.strm.avail_out))
            )
              return 1;
          } else if (e.match_available) {
            if (
              ((r = F(e, 0, e.window[e.strstart - 1])),
              r && _e(e, false),
              e.strstart++,
              e.lookahead--,
              0 === e.strm.avail_out)
            )
              return 1;
          } else (e.match_available = 1), e.strstart++, e.lookahead--;
        }
        return (
          e.match_available &&
            ((r = F(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)),
          (e.insert = e.strstart < 2 ? e.strstart : 2),
          t === Z
            ? (_e(e, true), 0 === e.strm.avail_out ? 3 : 4)
            : e.last_lit && (_e(e, false), 0 === e.strm.avail_out)
            ? 1
            : 2
        );
      };
    function we(e, t, n, r, a) {
      (this.good_length = e),
        (this.max_lazy = t),
        (this.nice_length = n),
        (this.max_chain = r),
        (this.func = a);
    }
    const Te = [
      new we(0, 0, 0, 0, (e, t) => {
        let n = 65535;
        for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
          if (e.lookahead <= 1) {
            if ((ye(e), 0 === e.lookahead && t === H)) return 1;
            if (0 === e.lookahead) break;
          }
          (e.strstart += e.lookahead), (e.lookahead = 0);
          const r = e.block_start + n;
          if (
            (0 === e.strstart || e.strstart >= r) &&
            ((e.lookahead = e.strstart - r),
            (e.strstart = r),
            _e(e, false),
            0 === e.strm.avail_out)
          )
            return 1;
          if (
            e.strstart - e.block_start >= e.w_size - 262 &&
            (_e(e, false), 0 === e.strm.avail_out)
          )
            return 1;
        }
        return (
          (e.insert = 0),
          t === Z
            ? (_e(e, true), 0 === e.strm.avail_out ? 3 : 4)
            : (e.strstart > e.block_start && (_e(e, false), e.strm.avail_out), 1)
        );
      }),
      new we(4, 4, 8, 4, Ee),
      new we(4, 5, 16, 8, Ee),
      new we(4, 6, 32, 32, Ee),
      new we(4, 4, 16, 16, Oe),
      new we(8, 16, 32, 32, Oe),
      new we(8, 16, 128, 128, Oe),
      new we(8, 32, 128, 256, Oe),
      new we(32, 128, 258, 1024, Oe),
      new we(32, 258, 258, 4096, Oe),
    ];
    function Me() {
      (this.strm = null),
        (this.status = 0),
        (this.pending_buf = null),
        (this.pending_buf_size = 0),
        (this.pending_out = 0),
        (this.pending = 0),
        (this.wrap = 0),
        (this.gzhead = null),
        (this.gzindex = 0),
        (this.method = ue),
        (this.last_flush = -1),
        (this.w_size = 0),
        (this.w_bits = 0),
        (this.w_mask = 0),
        (this.window = null),
        (this.window_size = 0),
        (this.prev = null),
        (this.head = null),
        (this.ins_h = 0),
        (this.hash_size = 0),
        (this.hash_bits = 0),
        (this.hash_mask = 0),
        (this.hash_shift = 0),
        (this.block_start = 0),
        (this.match_length = 0),
        (this.prev_match = 0),
        (this.match_available = 0),
        (this.strstart = 0),
        (this.match_start = 0),
        (this.lookahead = 0),
        (this.prev_length = 0),
        (this.max_chain_length = 0),
        (this.max_lazy_match = 0),
        (this.level = 0),
        (this.strategy = 0),
        (this.good_match = 0),
        (this.nice_match = 0),
        (this.dyn_ltree = new Uint16Array(1146)),
        (this.dyn_dtree = new Uint16Array(122)),
        (this.bl_tree = new Uint16Array(78)),
        fe(this.dyn_ltree),
        fe(this.dyn_dtree),
        fe(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new Uint16Array(16)),
        (this.heap = new Uint16Array(573)),
        fe(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new Uint16Array(573)),
        fe(this.depth),
        (this.l_buf = 0),
        (this.lit_bufsize = 0),
        (this.last_lit = 0),
        (this.d_buf = 0),
        (this.opt_len = 0),
        (this.static_len = 0),
        (this.matches = 0),
        (this.insert = 0),
        (this.bi_buf = 0),
        (this.bi_valid = 0);
    }
    const Se = (e) => {
        if (!e || !e.state) return ce(e, Q);
        (e.total_in = e.total_out = 0), (e.data_type = le);
        const t = e.state;
        return (
          (t.pending = 0),
          (t.pending_out = 0),
          t.wrap < 0 && (t.wrap = -t.wrap),
          (t.status = t.wrap ? 42 : 113),
          (e.adler = 2 === t.wrap ? 0 : 1),
          (t.last_flush = H),
          W(t),
          J
        );
      },
      Ae = (e) => {
        const t = Se(e);
        var n;
        return (
          t === J &&
            (((n = e.state).window_size = 2 * n.w_size),
            fe(n.head),
            (n.max_lazy_match = Te[n.level].max_lazy),
            (n.good_match = Te[n.level].good_length),
            (n.nice_match = Te[n.level].nice_length),
            (n.max_chain_length = Te[n.level].max_chain),
            (n.strstart = 0),
            (n.block_start = 0),
            (n.lookahead = 0),
            (n.insert = 0),
            (n.match_length = n.prev_length = 2),
            (n.match_available = 0),
            (n.ins_h = 0)),
          t
        );
      },
      ke = (e, t, n, r, a, o) => {
        if (!e) return Q;
        let i = 1;
        if (
          (t === ne && (t = 6),
          r < 0 ? ((i = 0), (r = -r)) : r > 15 && ((i = 2), (r -= 16)),
          a < 1 ||
            a > 9 ||
            n !== ue ||
            r < 8 ||
            r > 15 ||
            t < 0 ||
            t > 9 ||
            o < 0 ||
            o > ie)
        )
          return ce(e, Q);
        8 === r && (r = 9);
        const s = new Me();
        return (
          (e.state = s),
          (s.strm = e),
          (s.wrap = i),
          (s.gzhead = null),
          (s.w_bits = r),
          (s.w_size = 1 << s.w_bits),
          (s.w_mask = s.w_size - 1),
          (s.hash_bits = a + 7),
          (s.hash_size = 1 << s.hash_bits),
          (s.hash_mask = s.hash_size - 1),
          (s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3)),
          (s.window = new Uint8Array(2 * s.w_size)),
          (s.head = new Uint16Array(s.hash_size)),
          (s.prev = new Uint16Array(s.w_size)),
          (s.lit_bufsize = 1 << (a + 6)),
          (s.pending_buf_size = 4 * s.lit_bufsize),
          (s.pending_buf = new Uint8Array(s.pending_buf_size)),
          (s.d_buf = 1 * s.lit_bufsize),
          (s.l_buf = 3 * s.lit_bufsize),
          (s.level = t),
          (s.strategy = o),
          (s.method = n),
          Ae(e)
        );
      };
    var xe = {
      deflateInit: (e, t) => ke(e, t, ue, 15, 8, se),
      deflateInit2: ke,
      deflateReset: Ae,
      deflateResetKeep: Se,
      deflateSetHeader: (e, t) =>
        e && e.state ? (2 !== e.state.wrap ? Q : ((e.state.gzhead = t), J)) : Q,
      deflate: (e, t) => {
        let n, r;
        if (!e || !e.state || t > X || t < 0) return e ? ce(e, Q) : Q;
        const a = e.state;
        if (
          !e.output ||
          (!e.input && 0 !== e.avail_in) ||
          (666 === a.status && t !== Z)
        )
          return ce(e, 0 === e.avail_out ? te : Q);
        a.strm = e;
        const o = a.last_flush;
        if (((a.last_flush = t), 42 === a.status))
          if (2 === a.wrap)
            (e.adler = 0),
              ge(a, 31),
              ge(a, 139),
              ge(a, 8),
              a.gzhead
                ? (ge(
                    a,
                    (a.gzhead.text ? 1 : 0) +
                      (a.gzhead.hcrc ? 2 : 0) +
                      (a.gzhead.extra ? 4 : 0) +
                      (a.gzhead.name ? 8 : 0) +
                      (a.gzhead.comment ? 16 : 0)
                  ),
                  ge(a, 255 & a.gzhead.time),
                  ge(a, (a.gzhead.time >> 8) & 255),
                  ge(a, (a.gzhead.time >> 16) & 255),
                  ge(a, (a.gzhead.time >> 24) & 255),
                  ge(
                    a,
                    9 === a.level ? 2 : a.strategy >= ae || a.level < 2 ? 4 : 0
                  ),
                  ge(a, 255 & a.gzhead.os),
                  a.gzhead.extra &&
                    a.gzhead.extra.length &&
                    (ge(a, 255 & a.gzhead.extra.length),
                    ge(a, (a.gzhead.extra.length >> 8) & 255)),
                  a.gzhead.hcrc &&
                    (e.adler = U(e.adler, a.pending_buf, a.pending, 0)),
                  (a.gzindex = 0),
                  (a.status = 69))
                : (ge(a, 0),
                  ge(a, 0),
                  ge(a, 0),
                  ge(a, 0),
                  ge(a, 0),
                  ge(
                    a,
                    9 === a.level ? 2 : a.strategy >= ae || a.level < 2 ? 4 : 0
                  ),
                  ge(a, 3),
                  (a.status = 113));
          else {
            let t = (ue + ((a.w_bits - 8) << 4)) << 8,
              n = -1;
            (n =
              a.strategy >= ae || a.level < 2
                ? 0
                : a.level < 6
                ? 1
                : 6 === a.level
                ? 2
                : 3),
              (t |= n << 6),
              0 !== a.strstart && (t |= 32),
              (t += 31 - (t % 31)),
              (a.status = 113),
              ve(a, t),
              0 !== a.strstart &&
                (ve(a, e.adler >>> 16), ve(a, 65535 & e.adler)),
              (e.adler = 1);
          }
        if (69 === a.status)
          if (a.gzhead.extra) {
            for (
              n = a.pending;
              a.gzindex < (65535 & a.gzhead.extra.length) &&
              (a.pending !== a.pending_buf_size ||
                (a.gzhead.hcrc &&
                  a.pending > n &&
                  (e.adler = U(e.adler, a.pending_buf, a.pending - n, n)),
                pe(e),
                (n = a.pending),
                a.pending !== a.pending_buf_size));

            )
              ge(a, 255 & a.gzhead.extra[a.gzindex]), a.gzindex++;
            a.gzhead.hcrc &&
              a.pending > n &&
              (e.adler = U(e.adler, a.pending_buf, a.pending - n, n)),
              a.gzindex === a.gzhead.extra.length &&
                ((a.gzindex = 0), (a.status = 73));
          } else a.status = 73;
        if (73 === a.status)
          if (a.gzhead.name) {
            n = a.pending;
            do {
              if (
                a.pending === a.pending_buf_size &&
                (a.gzhead.hcrc &&
                  a.pending > n &&
                  (e.adler = U(e.adler, a.pending_buf, a.pending - n, n)),
                pe(e),
                (n = a.pending),
                a.pending === a.pending_buf_size)
              ) {
                r = 1;
                break;
              }
              (r =
                a.gzindex < a.gzhead.name.length
                  ? 255 & a.gzhead.name.charCodeAt(a.gzindex++)
                  : 0),
                ge(a, r);
            } while (0 !== r);
            a.gzhead.hcrc &&
              a.pending > n &&
              (e.adler = U(e.adler, a.pending_buf, a.pending - n, n)),
              0 === r && ((a.gzindex = 0), (a.status = 91));
          } else a.status = 91;
        if (91 === a.status)
          if (a.gzhead.comment) {
            n = a.pending;
            do {
              if (
                a.pending === a.pending_buf_size &&
                (a.gzhead.hcrc &&
                  a.pending > n &&
                  (e.adler = U(e.adler, a.pending_buf, a.pending - n, n)),
                pe(e),
                (n = a.pending),
                a.pending === a.pending_buf_size)
              ) {
                r = 1;
                break;
              }
              (r =
                a.gzindex < a.gzhead.comment.length
                  ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++)
                  : 0),
                ge(a, r);
            } while (0 !== r);
            a.gzhead.hcrc &&
              a.pending > n &&
              (e.adler = U(e.adler, a.pending_buf, a.pending - n, n)),
              0 === r && (a.status = 103);
          } else a.status = 103;
        if (
          (103 === a.status &&
            (a.gzhead.hcrc
              ? (a.pending + 2 > a.pending_buf_size && pe(e),
                a.pending + 2 <= a.pending_buf_size &&
                  (ge(a, 255 & e.adler),
                  ge(a, (e.adler >> 8) & 255),
                  (e.adler = 0),
                  (a.status = 113)))
              : (a.status = 113)),
          0 !== a.pending)
        ) {
          if ((pe(e), 0 === e.avail_out)) return (a.last_flush = -1), J;
        } else if (0 === e.avail_in && de(t) <= de(o) && t !== Z)
          return ce(e, te);
        if (666 === a.status && 0 !== e.avail_in) return ce(e, te);
        if (
          0 !== e.avail_in ||
          0 !== a.lookahead ||
          (t !== H && 666 !== a.status)
        ) {
          let n =
            a.strategy === ae
              ? ((e, t) => {
                  let n;
                  for (;;) {
                    if (0 === e.lookahead && (ye(e), 0 === e.lookahead)) {
                      if (t === H) return 1;
                      break;
                    }
                    if (
                      ((e.match_length = 0),
                      (n = F(e, 0, e.window[e.strstart])),
                      e.lookahead--,
                      e.strstart++,
                      n && (_e(e, false), 0 === e.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (e.insert = 0),
                    t === Z
                      ? (_e(e, true), 0 === e.strm.avail_out ? 3 : 4)
                      : e.last_lit && (_e(e, false), 0 === e.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(a, t)
              : a.strategy === oe
              ? ((e, t) => {
                  let n, r, a, o;
                  const i = e.window;
                  for (;;) {
                    if (e.lookahead <= 258) {
                      if ((ye(e), e.lookahead <= 258 && t === H)) return 1;
                      if (0 === e.lookahead) break;
                    }
                    if (
                      ((e.match_length = 0),
                      e.lookahead >= 3 &&
                        e.strstart > 0 &&
                        ((a = e.strstart - 1),
                        (r = i[a]),
                        r === i[++a] && r === i[++a] && r === i[++a]))
                    ) {
                      o = e.strstart + 258;
                      do {} while (
                        r === i[++a] &&
                        r === i[++a] &&
                        r === i[++a] &&
                        r === i[++a] &&
                        r === i[++a] &&
                        r === i[++a] &&
                        r === i[++a] &&
                        r === i[++a] &&
                        a < o
                      );
                      (e.match_length = 258 - (o - a)),
                        e.match_length > e.lookahead &&
                          (e.match_length = e.lookahead);
                    }
                    if (
                      (e.match_length >= 3
                        ? ((n = F(e, 1, e.match_length - 3)),
                          (e.lookahead -= e.match_length),
                          (e.strstart += e.match_length),
                          (e.match_length = 0))
                        : ((n = F(e, 0, e.window[e.strstart])),
                          e.lookahead--,
                          e.strstart++),
                      n && (_e(e, false), 0 === e.strm.avail_out))
                    )
                      return 1;
                  }
                  return (
                    (e.insert = 0),
                    t === Z
                      ? (_e(e, true), 0 === e.strm.avail_out ? 3 : 4)
                      : e.last_lit && (_e(e, false), 0 === e.strm.avail_out)
                      ? 1
                      : 2
                  );
                })(a, t)
              : Te[a.level].func(a, t);
          if (((3 !== n && 4 !== n) || (a.status = 666), 1 === n || 3 === n))
            return 0 === e.avail_out && (a.last_flush = -1), J;
          if (
            2 === n &&
            (t === V
              ? Y(a)
              : t !== X &&
                (K(a, 0, 0, false),
                t === q &&
                  (fe(a.head),
                  0 === a.lookahead &&
                    ((a.strstart = 0), (a.block_start = 0), (a.insert = 0)))),
            pe(e),
            0 === e.avail_out)
          )
            return (a.last_flush = -1), J;
        }
        return t !== Z
          ? J
          : a.wrap <= 0
          ? $
          : (2 === a.wrap
              ? (ge(a, 255 & e.adler),
                ge(a, (e.adler >> 8) & 255),
                ge(a, (e.adler >> 16) & 255),
                ge(a, (e.adler >> 24) & 255),
                ge(a, 255 & e.total_in),
                ge(a, (e.total_in >> 8) & 255),
                ge(a, (e.total_in >> 16) & 255),
                ge(a, (e.total_in >> 24) & 255))
              : (ve(a, e.adler >>> 16), ve(a, 65535 & e.adler)),
            pe(e),
            a.wrap > 0 && (a.wrap = -a.wrap),
            0 !== a.pending ? J : $);
      },
      deflateEnd: (e) => {
        if (!e || !e.state) return Q;
        const t = e.state.status;
        return 42 !== t &&
          69 !== t &&
          73 !== t &&
          91 !== t &&
          103 !== t &&
          113 !== t &&
          666 !== t
          ? ce(e, Q)
          : ((e.state = null), 113 === t ? ce(e, ee) : J);
      },
      deflateSetDictionary: (e, t) => {
        let n = t.length;
        if (!e || !e.state) return Q;
        const r = e.state,
          a = r.wrap;
        if (2 === a || (1 === a && 42 !== r.status) || r.lookahead) return Q;
        if (
          (1 === a && (e.adler = j(e.adler, t, n, 0)),
          (r.wrap = 0),
          n >= r.w_size)
        ) {
          0 === a &&
            (fe(r.head), (r.strstart = 0), (r.block_start = 0), (r.insert = 0));
          let e = new Uint8Array(r.w_size);
          e.set(t.subarray(n - r.w_size, n), 0), (t = e), (n = r.w_size);
        }
        const o = e.avail_in,
          i = e.next_in,
          s = e.input;
        for (
          e.avail_in = n, e.next_in = 0, e.input = t, ye(r);
          r.lookahead >= 3;

        ) {
          let e = r.strstart,
            t = r.lookahead - 2;
          do {
            (r.ins_h = he(r, r.ins_h, r.window[e + 3 - 1])),
              (r.prev[e & r.w_mask] = r.head[r.ins_h]),
              (r.head[r.ins_h] = e),
              e++;
          } while (--t);
          (r.strstart = e), (r.lookahead = 2), ye(r);
        }
        return (
          (r.strstart += r.lookahead),
          (r.block_start = r.strstart),
          (r.insert = r.lookahead),
          (r.lookahead = 0),
          (r.match_length = r.prev_length = 2),
          (r.match_available = 0),
          (e.next_in = i),
          (e.input = s),
          (e.avail_in = o),
          (r.wrap = a),
          J
        );
      },
      deflateInfo: "pako deflate (from Nodeca project)",
    };
    const Re = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var Ie = function (e) {
        const t = Array.prototype.slice.call(arguments, 1);
        for (; t.length; ) {
          const n = t.shift();
          if (n) {
            if ("object" != typeof n)
              throw new TypeError(n + "must be non-object");
            for (const t in n) Re(n, t) && (e[t] = n[t]);
          }
        }
        return e;
      },
      Ce = (e) => {
        let t = 0;
        for (let n = 0, r = e.length; n < r; n++) t += e[n].length;
        const n = new Uint8Array(t);
        for (let t = 0, r = 0, a = e.length; t < a; t++) {
          let a = e[t];
          n.set(a, r), (r += a.length);
        }
        return n;
      };
    let De = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (e) {
      De = false;
    }
    const Pe = new Uint8Array(256);
    for (let e = 0; e < 256; e++)
      Pe[e] =
        e >= 252
          ? 6
          : e >= 248
          ? 5
          : e >= 240
          ? 4
          : e >= 224
          ? 3
          : e >= 192
          ? 2
          : 1;
    Pe[254] = Pe[254] = 1;
    var Be = (e) => {
        if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
          return new TextEncoder().encode(e);
        let t,
          n,
          r,
          a,
          o,
          i = e.length,
          s = 0;
        for (a = 0; a < i; a++)
          (n = e.charCodeAt(a)),
            55296 == (64512 & n) &&
              a + 1 < i &&
              ((r = e.charCodeAt(a + 1)),
              56320 == (64512 & r) &&
                ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), a++)),
            (s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
        for (t = new Uint8Array(s), o = 0, a = 0; o < s; a++)
          (n = e.charCodeAt(a)),
            55296 == (64512 & n) &&
              a + 1 < i &&
              ((r = e.charCodeAt(a + 1)),
              56320 == (64512 & r) &&
                ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), a++)),
            n < 128
              ? (t[o++] = n)
              : n < 2048
              ? ((t[o++] = 192 | (n >>> 6)), (t[o++] = 128 | (63 & n)))
              : n < 65536
              ? ((t[o++] = 224 | (n >>> 12)),
                (t[o++] = 128 | ((n >>> 6) & 63)),
                (t[o++] = 128 | (63 & n)))
              : ((t[o++] = 240 | (n >>> 18)),
                (t[o++] = 128 | ((n >>> 12) & 63)),
                (t[o++] = 128 | ((n >>> 6) & 63)),
                (t[o++] = 128 | (63 & n)));
        return t;
      },
      je = (e, t) => {
        const n = t || e.length;
        if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
          return new TextDecoder().decode(e.subarray(0, t));
        let r, a;
        const o = new Array(2 * n);
        for (a = 0, r = 0; r < n; ) {
          let t = e[r++];
          if (t < 128) {
            o[a++] = t;
            continue;
          }
          let i = Pe[t];
          if (i > 4) (o[a++] = 65533), (r += i - 1);
          else {
            for (t &= 2 === i ? 31 : 3 === i ? 15 : 7; i > 1 && r < n; )
              (t = (t << 6) | (63 & e[r++])), i--;
            i > 1
              ? (o[a++] = 65533)
              : t < 65536
              ? (o[a++] = t)
              : ((t -= 65536),
                (o[a++] = 55296 | ((t >> 10) & 1023)),
                (o[a++] = 56320 | (1023 & t)));
          }
        }
        return ((e, t) => {
          if (t < 65534 && e.subarray && De)
            return String.fromCharCode.apply(
              null,
              e.length === t ? e : e.subarray(0, t)
            );
          let n = "";
          for (let r = 0; r < t; r++) n += String.fromCharCode(e[r]);
          return n;
        })(o, a);
      },
      Le = (e, t) => {
        (t = t || e.length) > e.length && (t = e.length);
        let n = t - 1;
        for (; n >= 0 && 128 == (192 & e[n]); ) n--;
        return n < 0 || 0 === n ? t : n + Pe[e[n]] > t ? n : t;
      };
    var Ue = function () {
      (this.input = null),
        (this.next_in = 0),
        (this.avail_in = 0),
        (this.total_in = 0),
        (this.output = null),
        (this.next_out = 0),
        (this.avail_out = 0),
        (this.total_out = 0),
        (this.msg = ""),
        (this.state = null),
        (this.data_type = 2),
        (this.adler = 0);
    };
    const Ne = Object.prototype.toString,
      {
        Z_NO_FLUSH: ze,
        Z_SYNC_FLUSH: We,
        Z_FULL_FLUSH: Ke,
        Z_FINISH: Ge,
        Z_OK: Fe,
        Z_STREAM_END: Ye,
        Z_DEFAULT_COMPRESSION: He,
        Z_DEFAULT_STRATEGY: Ve,
        Z_DEFLATED: qe,
      } = z;
    function Ze(e) {
      this.options = Ie(
        {
          level: He,
          method: qe,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: Ve,
        },
        e || {}
      );
      let t = this.options;
      t.raw && t.windowBits > 0
        ? (t.windowBits = -t.windowBits)
        : t.gzip &&
          t.windowBits > 0 &&
          t.windowBits < 16 &&
          (t.windowBits += 16),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = false),
        (this.chunks = []),
        (this.strm = new Ue()),
        (this.strm.avail_out = 0);
      let n = xe.deflateInit2(
        this.strm,
        t.level,
        t.method,
        t.windowBits,
        t.memLevel,
        t.strategy
      );
      if (n !== Fe) throw new Error(N[n]);
      if (
        (t.header && xe.deflateSetHeader(this.strm, t.header), t.dictionary)
      ) {
        let e;
        if (
          ((e =
            "string" == typeof t.dictionary
              ? Be(t.dictionary)
              : "[object ArrayBuffer]" === Ne.call(t.dictionary)
              ? new Uint8Array(t.dictionary)
              : t.dictionary),
          (n = xe.deflateSetDictionary(this.strm, e)),
          n !== Fe)
        )
          throw new Error(N[n]);
        this._dict_set = true;
      }
    }
    function Xe(e, t) {
      const n = new Ze(t);
      if ((n.push(e, true), n.err)) throw n.msg || N[n.err];
      return n.result;
    }
    (Ze.prototype.push = function (e, t) {
      const n = this.strm,
        r = this.options.chunkSize;
      let a, o;
      if (this.ended) return false;
      for (
        o = t === ~~t ? t : true === t ? Ge : ze,
          "string" == typeof e
            ? (n.input = Be(e))
            : "[object ArrayBuffer]" === Ne.call(e)
            ? (n.input = new Uint8Array(e))
            : (n.input = e),
          n.next_in = 0,
          n.avail_in = n.input.length;
        ;

      )
        if (
          (0 === n.avail_out &&
            ((n.output = new Uint8Array(r)),
            (n.next_out = 0),
            (n.avail_out = r)),
          (o === We || o === Ke) && n.avail_out <= 6)
        )
          this.onData(n.output.subarray(0, n.next_out)), (n.avail_out = 0);
        else {
          if (((a = xe.deflate(n, o)), a === Ye))
            return (
              n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)),
              (a = xe.deflateEnd(this.strm)),
              this.onEnd(a),
              (this.ended = true),
              a === Fe
            );
          if (0 !== n.avail_out) {
            if (o > 0 && n.next_out > 0)
              this.onData(n.output.subarray(0, n.next_out)), (n.avail_out = 0);
            else if (0 === n.avail_in) break;
          } else this.onData(n.output);
        }
      return true;
    }),
      (Ze.prototype.onData = function (e) {
        this.chunks.push(e);
      }),
      (Ze.prototype.onEnd = function (e) {
        e === Fe && (this.result = Ce(this.chunks)),
          (this.chunks = []),
          (this.err = e),
          (this.msg = this.strm.msg);
      });
    var Je = {
      Deflate: Ze,
      deflate: Xe,
      deflateRaw: function (e, t) {
        return ((t = t || {}).raw = true), Xe(e, t);
      },
      gzip: function (e, t) {
        return ((t = t || {}).gzip = true), Xe(e, t);
      },
      constants: z,
    };
    var $e = function (e, t) {
      let n,
        r,
        a,
        o,
        i,
        s,
        l,
        u,
        c,
        d,
        f,
        h,
        p,
        _,
        g,
        v,
        m,
        b,
        y,
        E,
        O,
        w,
        T,
        M;
      const S = e.state;
      (n = e.next_in),
        (T = e.input),
        (r = n + (e.avail_in - 5)),
        (a = e.next_out),
        (M = e.output),
        (o = a - (t - e.avail_out)),
        (i = a + (e.avail_out - 257)),
        (s = S.dmax),
        (l = S.wsize),
        (u = S.whave),
        (c = S.wnext),
        (d = S.window),
        (f = S.hold),
        (h = S.bits),
        (p = S.lencode),
        (_ = S.distcode),
        (g = (1 << S.lenbits) - 1),
        (v = (1 << S.distbits) - 1);
      e: do {
        h < 15 && ((f += T[n++] << h), (h += 8), (f += T[n++] << h), (h += 8)),
          (m = p[f & g]);
        t: for (;;) {
          if (
            ((b = m >>> 24),
            (f >>>= b),
            (h -= b),
            (b = (m >>> 16) & 255),
            0 === b)
          )
            M[a++] = 65535 & m;
          else {
            if (!(16 & b)) {
              if (0 == (64 & b)) {
                m = p[(65535 & m) + (f & ((1 << b) - 1))];
                continue t;
              }
              if (32 & b) {
                S.mode = 12;
                break e;
              }
              (e.msg = "invalid literal/length code"), (S.mode = 30);
              break e;
            }
            (y = 65535 & m),
              (b &= 15),
              b &&
                (h < b && ((f += T[n++] << h), (h += 8)),
                (y += f & ((1 << b) - 1)),
                (f >>>= b),
                (h -= b)),
              h < 15 &&
                ((f += T[n++] << h), (h += 8), (f += T[n++] << h), (h += 8)),
              (m = _[f & v]);
            n: for (;;) {
              if (
                ((b = m >>> 24),
                (f >>>= b),
                (h -= b),
                (b = (m >>> 16) & 255),
                !(16 & b))
              ) {
                if (0 == (64 & b)) {
                  m = _[(65535 & m) + (f & ((1 << b) - 1))];
                  continue n;
                }
                (e.msg = "invalid distance code"), (S.mode = 30);
                break e;
              }
              if (
                ((E = 65535 & m),
                (b &= 15),
                h < b &&
                  ((f += T[n++] << h),
                  (h += 8),
                  h < b && ((f += T[n++] << h), (h += 8))),
                (E += f & ((1 << b) - 1)),
                E > s)
              ) {
                (e.msg = "invalid distance too far back"), (S.mode = 30);
                break e;
              }
              if (((f >>>= b), (h -= b), (b = a - o), E > b)) {
                if (((b = E - b), b > u && S.sane)) {
                  (e.msg = "invalid distance too far back"), (S.mode = 30);
                  break e;
                }
                if (((O = 0), (w = d), 0 === c)) {
                  if (((O += l - b), b < y)) {
                    y -= b;
                    do {
                      M[a++] = d[O++];
                    } while (--b);
                    (O = a - E), (w = M);
                  }
                } else if (c < b) {
                  if (((O += l + c - b), (b -= c), b < y)) {
                    y -= b;
                    do {
                      M[a++] = d[O++];
                    } while (--b);
                    if (((O = 0), c < y)) {
                      (b = c), (y -= b);
                      do {
                        M[a++] = d[O++];
                      } while (--b);
                      (O = a - E), (w = M);
                    }
                  }
                } else if (((O += c - b), b < y)) {
                  y -= b;
                  do {
                    M[a++] = d[O++];
                  } while (--b);
                  (O = a - E), (w = M);
                }
                for (; y > 2; )
                  (M[a++] = w[O++]),
                    (M[a++] = w[O++]),
                    (M[a++] = w[O++]),
                    (y -= 3);
                y && ((M[a++] = w[O++]), y > 1 && (M[a++] = w[O++]));
              } else {
                O = a - E;
                do {
                  (M[a++] = M[O++]),
                    (M[a++] = M[O++]),
                    (M[a++] = M[O++]),
                    (y -= 3);
                } while (y > 2);
                y && ((M[a++] = M[O++]), y > 1 && (M[a++] = M[O++]));
              }
              break;
            }
          }
          break;
        }
      } while (n < r && a < i);
      (y = h >> 3),
        (n -= y),
        (h -= y << 3),
        (f &= (1 << h) - 1),
        (e.next_in = n),
        (e.next_out = a),
        (e.avail_in = n < r ? r - n + 5 : 5 - (n - r)),
        (e.avail_out = a < i ? i - a + 257 : 257 - (a - i)),
        (S.hold = f),
        (S.bits = h);
    };
    const Qe = new Uint16Array([
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
      ]),
      et = new Uint8Array([
        16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
        19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
      ]),
      tt = new Uint16Array([
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
        0, 0,
      ]),
      nt = new Uint8Array([
        16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
        24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
      ]);
    var rt = (e, t, n, r, a, o, i, s) => {
      const l = s.bits;
      let u,
        c,
        d,
        f,
        h,
        p,
        _ = 0,
        g = 0,
        v = 0,
        m = 0,
        b = 0,
        y = 0,
        E = 0,
        O = 0,
        w = 0,
        T = 0,
        M = null,
        S = 0;
      const A = new Uint16Array(16),
        k = new Uint16Array(16);
      let x,
        R,
        I,
        C = null,
        D = 0;
      for (_ = 0; _ <= 15; _++) A[_] = 0;
      for (g = 0; g < r; g++) A[t[n + g]]++;
      for (b = l, m = 15; m >= 1 && 0 === A[m]; m--);
      if ((b > m && (b = m), 0 === m))
        return (a[o++] = 20971520), (a[o++] = 20971520), (s.bits = 1), 0;
      for (v = 1; v < m && 0 === A[v]; v++);
      for (b < v && (b = v), O = 1, _ = 1; _ <= 15; _++)
        if (((O <<= 1), (O -= A[_]), O < 0)) return -1;
      if (O > 0 && (0 === e || 1 !== m)) return -1;
      for (k[1] = 0, _ = 1; _ < 15; _++) k[_ + 1] = k[_] + A[_];
      for (g = 0; g < r; g++) 0 !== t[n + g] && (i[k[t[n + g]]++] = g);
      if (
        (0 === e
          ? ((M = C = i), (p = 19))
          : 1 === e
          ? ((M = Qe), (S -= 257), (C = et), (D -= 257), (p = 256))
          : ((M = tt), (C = nt), (p = -1)),
        (T = 0),
        (g = 0),
        (_ = v),
        (h = o),
        (y = b),
        (E = 0),
        (d = -1),
        (w = 1 << b),
        (f = w - 1),
        (1 === e && w > 852) || (2 === e && w > 592))
      )
        return 1;
      for (;;) {
        (x = _ - E),
          i[g] < p
            ? ((R = 0), (I = i[g]))
            : i[g] > p
            ? ((R = C[D + i[g]]), (I = M[S + i[g]]))
            : ((R = 96), (I = 0)),
          (u = 1 << (_ - E)),
          (c = 1 << y),
          (v = c);
        do {
          (c -= u), (a[h + (T >> E) + c] = (x << 24) | (R << 16) | I | 0);
        } while (0 !== c);
        for (u = 1 << (_ - 1); T & u; ) u >>= 1;
        if ((0 !== u ? ((T &= u - 1), (T += u)) : (T = 0), g++, 0 == --A[_])) {
          if (_ === m) break;
          _ = t[n + i[g]];
        }
        if (_ > b && (T & f) !== d) {
          for (
            0 === E && (E = b), h += v, y = _ - E, O = 1 << y;
            y + E < m && ((O -= A[y + E]), !(O <= 0));

          )
            y++, (O <<= 1);
          if (((w += 1 << y), (1 === e && w > 852) || (2 === e && w > 592)))
            return 1;
          (d = T & f), (a[d] = (b << 24) | (y << 16) | (h - o) | 0);
        }
      }
      return (
        0 !== T && (a[h + T] = ((_ - E) << 24) | (64 << 16) | 0),
        (s.bits = b),
        0
      );
    };
    const {
        Z_FINISH: at,
        Z_BLOCK: ot,
        Z_TREES: it,
        Z_OK: st,
        Z_STREAM_END: lt,
        Z_NEED_DICT: ut,
        Z_STREAM_ERROR: ct,
        Z_DATA_ERROR: dt,
        Z_MEM_ERROR: ft,
        Z_BUF_ERROR: ht,
        Z_DEFLATED: pt,
      } = z,
      _t = (e) =>
        ((e >>> 24) & 255) +
        ((e >>> 8) & 65280) +
        ((65280 & e) << 8) +
        ((255 & e) << 24);
    function gt() {
      (this.mode = 0),
        (this.last = false),
        (this.wrap = 0),
        (this.havedict = false),
        (this.flags = 0),
        (this.dmax = 0),
        (this.check = 0),
        (this.total = 0),
        (this.head = null),
        (this.wbits = 0),
        (this.wsize = 0),
        (this.whave = 0),
        (this.wnext = 0),
        (this.window = null),
        (this.hold = 0),
        (this.bits = 0),
        (this.length = 0),
        (this.offset = 0),
        (this.extra = 0),
        (this.lencode = null),
        (this.distcode = null),
        (this.lenbits = 0),
        (this.distbits = 0),
        (this.ncode = 0),
        (this.nlen = 0),
        (this.ndist = 0),
        (this.have = 0),
        (this.next = null),
        (this.lens = new Uint16Array(320)),
        (this.work = new Uint16Array(288)),
        (this.lendyn = null),
        (this.distdyn = null),
        (this.sane = 0),
        (this.back = 0),
        (this.was = 0);
    }
    const vt = (e) => {
        if (!e || !e.state) return ct;
        const t = e.state;
        return (
          (e.total_in = e.total_out = t.total = 0),
          (e.msg = ""),
          t.wrap && (e.adler = 1 & t.wrap),
          (t.mode = 1),
          (t.last = 0),
          (t.havedict = 0),
          (t.dmax = 32768),
          (t.head = null),
          (t.hold = 0),
          (t.bits = 0),
          (t.lencode = t.lendyn = new Int32Array(852)),
          (t.distcode = t.distdyn = new Int32Array(592)),
          (t.sane = 1),
          (t.back = -1),
          st
        );
      },
      mt = (e) => {
        if (!e || !e.state) return ct;
        const t = e.state;
        return (t.wsize = 0), (t.whave = 0), (t.wnext = 0), vt(e);
      },
      bt = (e, t) => {
        let n;
        if (!e || !e.state) return ct;
        const r = e.state;
        return (
          t < 0
            ? ((n = 0), (t = -t))
            : ((n = 1 + (t >> 4)), t < 48 && (t &= 15)),
          t && (t < 8 || t > 15)
            ? ct
            : (null !== r.window && r.wbits !== t && (r.window = null),
              (r.wrap = n),
              (r.wbits = t),
              mt(e))
        );
      },
      yt = (e, t) => {
        if (!e) return ct;
        const n = new gt();
        (e.state = n), (n.window = null);
        const r = bt(e, t);
        return r !== st && (e.state = null), r;
      };
    let Et,
      Ot,
      wt = true;
    const Tt = (e) => {
        if (wt) {
          (Et = new Int32Array(512)), (Ot = new Int32Array(32));
          let t = 0;
          for (; t < 144; ) e.lens[t++] = 8;
          for (; t < 256; ) e.lens[t++] = 9;
          for (; t < 280; ) e.lens[t++] = 7;
          for (; t < 288; ) e.lens[t++] = 8;
          for (
            rt(1, e.lens, 0, 288, Et, 0, e.work, { bits: 9 }), t = 0;
            t < 32;

          )
            e.lens[t++] = 5;
          rt(2, e.lens, 0, 32, Ot, 0, e.work, { bits: 5 }), (wt = false);
        }
        (e.lencode = Et), (e.lenbits = 9), (e.distcode = Ot), (e.distbits = 5);
      },
      Mt = (e, t, n, r) => {
        let a;
        const o = e.state;
        return (
          null === o.window &&
            ((o.wsize = 1 << o.wbits),
            (o.wnext = 0),
            (o.whave = 0),
            (o.window = new Uint8Array(o.wsize))),
          r >= o.wsize
            ? (o.window.set(t.subarray(n - o.wsize, n), 0),
              (o.wnext = 0),
              (o.whave = o.wsize))
            : ((a = o.wsize - o.wnext),
              a > r && (a = r),
              o.window.set(t.subarray(n - r, n - r + a), o.wnext),
              (r -= a)
                ? (o.window.set(t.subarray(n - r, n), 0),
                  (o.wnext = r),
                  (o.whave = o.wsize))
                : ((o.wnext += a),
                  o.wnext === o.wsize && (o.wnext = 0),
                  o.whave < o.wsize && (o.whave += a))),
          0
        );
      };
    var St = {
      inflateReset: mt,
      inflateReset2: bt,
      inflateResetKeep: vt,
      inflateInit: (e) => yt(e, 15),
      inflateInit2: yt,
      inflate: (e, t) => {
        let n,
          r,
          a,
          o,
          i,
          s,
          l,
          u,
          c,
          d,
          f,
          h,
          p,
          _,
          g,
          v,
          m,
          b,
          y,
          E,
          O,
          w,
          T = 0;
        const M = new Uint8Array(4);
        let S, A;
        const k = new Uint8Array([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]);
        if (!e || !e.state || !e.output || (!e.input && 0 !== e.avail_in))
          return ct;
        (n = e.state),
          12 === n.mode && (n.mode = 13),
          (i = e.next_out),
          (a = e.output),
          (l = e.avail_out),
          (o = e.next_in),
          (r = e.input),
          (s = e.avail_in),
          (u = n.hold),
          (c = n.bits),
          (d = s),
          (f = l),
          (w = st);
        e: for (;;)
          switch (n.mode) {
            case 1:
              if (0 === n.wrap) {
                n.mode = 13;
                break;
              }
              for (; c < 16; ) {
                if (0 === s) break e;
                s--, (u += r[o++] << c), (c += 8);
              }
              if (2 & n.wrap && 35615 === u) {
                (n.check = 0),
                  (M[0] = 255 & u),
                  (M[1] = (u >>> 8) & 255),
                  (n.check = U(n.check, M, 2, 0)),
                  (u = 0),
                  (c = 0),
                  (n.mode = 2);
                break;
              }
              if (
                ((n.flags = 0),
                n.head && (n.head.done = false),
                !(1 & n.wrap) || (((255 & u) << 8) + (u >> 8)) % 31)
              ) {
                (e.msg = "incorrect header check"), (n.mode = 30);
                break;
              }
              if ((15 & u) !== pt) {
                (e.msg = "unknown compression method"), (n.mode = 30);
                break;
              }
              if (((u >>>= 4), (c -= 4), (O = 8 + (15 & u)), 0 === n.wbits))
                n.wbits = O;
              else if (O > n.wbits) {
                (e.msg = "invalid window size"), (n.mode = 30);
                break;
              }
              (n.dmax = 1 << n.wbits),
                (e.adler = n.check = 1),
                (n.mode = 512 & u ? 10 : 12),
                (u = 0),
                (c = 0);
              break;
            case 2:
              for (; c < 16; ) {
                if (0 === s) break e;
                s--, (u += r[o++] << c), (c += 8);
              }
              if (((n.flags = u), (255 & n.flags) !== pt)) {
                (e.msg = "unknown compression method"), (n.mode = 30);
                break;
              }
              if (57344 & n.flags) {
                (e.msg = "unknown header flags set"), (n.mode = 30);
                break;
              }
              n.head && (n.head.text = (u >> 8) & 1),
                512 & n.flags &&
                  ((M[0] = 255 & u),
                  (M[1] = (u >>> 8) & 255),
                  (n.check = U(n.check, M, 2, 0))),
                (u = 0),
                (c = 0),
                (n.mode = 3);
            case 3:
              for (; c < 32; ) {
                if (0 === s) break e;
                s--, (u += r[o++] << c), (c += 8);
              }
              n.head && (n.head.time = u),
                512 & n.flags &&
                  ((M[0] = 255 & u),
                  (M[1] = (u >>> 8) & 255),
                  (M[2] = (u >>> 16) & 255),
                  (M[3] = (u >>> 24) & 255),
                  (n.check = U(n.check, M, 4, 0))),
                (u = 0),
                (c = 0),
                (n.mode = 4);
            case 4:
              for (; c < 16; ) {
                if (0 === s) break e;
                s--, (u += r[o++] << c), (c += 8);
              }
              n.head && ((n.head.xflags = 255 & u), (n.head.os = u >> 8)),
                512 & n.flags &&
                  ((M[0] = 255 & u),
                  (M[1] = (u >>> 8) & 255),
                  (n.check = U(n.check, M, 2, 0))),
                (u = 0),
                (c = 0),
                (n.mode = 5);
            case 5:
              if (1024 & n.flags) {
                for (; c < 16; ) {
                  if (0 === s) break e;
                  s--, (u += r[o++] << c), (c += 8);
                }
                (n.length = u),
                  n.head && (n.head.extra_len = u),
                  512 & n.flags &&
                    ((M[0] = 255 & u),
                    (M[1] = (u >>> 8) & 255),
                    (n.check = U(n.check, M, 2, 0))),
                  (u = 0),
                  (c = 0);
              } else n.head && (n.head.extra = null);
              n.mode = 6;
            case 6:
              if (
                1024 & n.flags &&
                ((h = n.length),
                h > s && (h = s),
                h &&
                  (n.head &&
                    ((O = n.head.extra_len - n.length),
                    n.head.extra ||
                      (n.head.extra = new Uint8Array(n.head.extra_len)),
                    n.head.extra.set(r.subarray(o, o + h), O)),
                  512 & n.flags && (n.check = U(n.check, r, h, o)),
                  (s -= h),
                  (o += h),
                  (n.length -= h)),
                n.length)
              )
                break e;
              (n.length = 0), (n.mode = 7);
            case 7:
              if (2048 & n.flags) {
                if (0 === s) break e;
                h = 0;
                do {
                  (O = r[o + h++]),
                    n.head &&
                      O &&
                      n.length < 65536 &&
                      (n.head.name += String.fromCharCode(O));
                } while (O && h < s);
                if (
                  (512 & n.flags && (n.check = U(n.check, r, h, o)),
                  (s -= h),
                  (o += h),
                  O)
                )
                  break e;
              } else n.head && (n.head.name = null);
              (n.length = 0), (n.mode = 8);
            case 8:
              if (4096 & n.flags) {
                if (0 === s) break e;
                h = 0;
                do {
                  (O = r[o + h++]),
                    n.head &&
                      O &&
                      n.length < 65536 &&
                      (n.head.comment += String.fromCharCode(O));
                } while (O && h < s);
                if (
                  (512 & n.flags && (n.check = U(n.check, r, h, o)),
                  (s -= h),
                  (o += h),
                  O)
                )
                  break e;
              } else n.head && (n.head.comment = null);
              n.mode = 9;
            case 9:
              if (512 & n.flags) {
                for (; c < 16; ) {
                  if (0 === s) break e;
                  s--, (u += r[o++] << c), (c += 8);
                }
                if (u !== (65535 & n.check)) {
                  (e.msg = "header crc mismatch"), (n.mode = 30);
                  break;
                }
                (u = 0), (c = 0);
              }
              n.head &&
                ((n.head.hcrc = (n.flags >> 9) & 1), (n.head.done = true)),
                (e.adler = n.check = 0),
                (n.mode = 12);
              break;
            case 10:
              for (; c < 32; ) {
                if (0 === s) break e;
                s--, (u += r[o++] << c), (c += 8);
              }
              (e.adler = n.check = _t(u)), (u = 0), (c = 0), (n.mode = 11);
            case 11:
              if (0 === n.havedict)
                return (
                  (e.next_out = i),
                  (e.avail_out = l),
                  (e.next_in = o),
                  (e.avail_in = s),
                  (n.hold = u),
                  (n.bits = c),
                  ut
                );
              (e.adler = n.check = 1), (n.mode = 12);
            case 12:
              if (t === ot || t === it) break e;
            case 13:
              if (n.last) {
                (u >>>= 7 & c), (c -= 7 & c), (n.mode = 27);
                break;
              }
              for (; c < 3; ) {
                if (0 === s) break e;
                s--, (u += r[o++] << c), (c += 8);
              }
              switch (((n.last = 1 & u), (u >>>= 1), (c -= 1), 3 & u)) {
                case 0:
                  n.mode = 14;
                  break;
                case 1:
                  if ((Tt(n), (n.mode = 20), t === it)) {
                    (u >>>= 2), (c -= 2);
                    break e;
                  }
                  break;
                case 2:
                  n.mode = 17;
                  break;
                case 3:
                  (e.msg = "invalid block type"), (n.mode = 30);
              }
              (u >>>= 2), (c -= 2);
              break;
            case 14:
              for (u >>>= 7 & c, c -= 7 & c; c < 32; ) {
                if (0 === s) break e;
                s--, (u += r[o++] << c), (c += 8);
              }
              if ((65535 & u) != ((u >>> 16) ^ 65535)) {
                (e.msg = "invalid stored block lengths"), (n.mode = 30);
                break;
              }
              if (
                ((n.length = 65535 & u),
                (u = 0),
                (c = 0),
                (n.mode = 15),
                t === it)
              )
                break e;
            case 15:
              n.mode = 16;
            case 16:
              if (((h = n.length), h)) {
                if ((h > s && (h = s), h > l && (h = l), 0 === h)) break e;
                a.set(r.subarray(o, o + h), i),
                  (s -= h),
                  (o += h),
                  (l -= h),
                  (i += h),
                  (n.length -= h);
                break;
              }
              n.mode = 12;
              break;
            case 17:
              for (; c < 14; ) {
                if (0 === s) break e;
                s--, (u += r[o++] << c), (c += 8);
              }
              if (
                ((n.nlen = 257 + (31 & u)),
                (u >>>= 5),
                (c -= 5),
                (n.ndist = 1 + (31 & u)),
                (u >>>= 5),
                (c -= 5),
                (n.ncode = 4 + (15 & u)),
                (u >>>= 4),
                (c -= 4),
                n.nlen > 286 || n.ndist > 30)
              ) {
                (e.msg = "too many length or distance symbols"), (n.mode = 30);
                break;
              }
              (n.have = 0), (n.mode = 18);
            case 18:
              for (; n.have < n.ncode; ) {
                for (; c < 3; ) {
                  if (0 === s) break e;
                  s--, (u += r[o++] << c), (c += 8);
                }
                (n.lens[k[n.have++]] = 7 & u), (u >>>= 3), (c -= 3);
              }
              for (; n.have < 19; ) n.lens[k[n.have++]] = 0;
              if (
                ((n.lencode = n.lendyn),
                (n.lenbits = 7),
                (S = { bits: n.lenbits }),
                (w = rt(0, n.lens, 0, 19, n.lencode, 0, n.work, S)),
                (n.lenbits = S.bits),
                w)
              ) {
                (e.msg = "invalid code lengths set"), (n.mode = 30);
                break;
              }
              (n.have = 0), (n.mode = 19);
            case 19:
              for (; n.have < n.nlen + n.ndist; ) {
                for (
                  ;
                  (T = n.lencode[u & ((1 << n.lenbits) - 1)]),
                    (g = T >>> 24),
                    (v = (T >>> 16) & 255),
                    (m = 65535 & T),
                    !(g <= c);

                ) {
                  if (0 === s) break e;
                  s--, (u += r[o++] << c), (c += 8);
                }
                if (m < 16) (u >>>= g), (c -= g), (n.lens[n.have++] = m);
                else {
                  if (16 === m) {
                    for (A = g + 2; c < A; ) {
                      if (0 === s) break e;
                      s--, (u += r[o++] << c), (c += 8);
                    }
                    if (((u >>>= g), (c -= g), 0 === n.have)) {
                      (e.msg = "invalid bit length repeat"), (n.mode = 30);
                      break;
                    }
                    (O = n.lens[n.have - 1]),
                      (h = 3 + (3 & u)),
                      (u >>>= 2),
                      (c -= 2);
                  } else if (17 === m) {
                    for (A = g + 3; c < A; ) {
                      if (0 === s) break e;
                      s--, (u += r[o++] << c), (c += 8);
                    }
                    (u >>>= g),
                      (c -= g),
                      (O = 0),
                      (h = 3 + (7 & u)),
                      (u >>>= 3),
                      (c -= 3);
                  } else {
                    for (A = g + 7; c < A; ) {
                      if (0 === s) break e;
                      s--, (u += r[o++] << c), (c += 8);
                    }
                    (u >>>= g),
                      (c -= g),
                      (O = 0),
                      (h = 11 + (127 & u)),
                      (u >>>= 7),
                      (c -= 7);
                  }
                  if (n.have + h > n.nlen + n.ndist) {
                    (e.msg = "invalid bit length repeat"), (n.mode = 30);
                    break;
                  }
                  for (; h--; ) n.lens[n.have++] = O;
                }
              }
              if (30 === n.mode) break;
              if (0 === n.lens[256]) {
                (e.msg = "invalid code -- missing end-of-block"), (n.mode = 30);
                break;
              }
              if (
                ((n.lenbits = 9),
                (S = { bits: n.lenbits }),
                (w = rt(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, S)),
                (n.lenbits = S.bits),
                w)
              ) {
                (e.msg = "invalid literal/lengths set"), (n.mode = 30);
                break;
              }
              if (
                ((n.distbits = 6),
                (n.distcode = n.distdyn),
                (S = { bits: n.distbits }),
                (w = rt(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, S)),
                (n.distbits = S.bits),
                w)
              ) {
                (e.msg = "invalid distances set"), (n.mode = 30);
                break;
              }
              if (((n.mode = 20), t === it)) break e;
            case 20:
              n.mode = 21;
            case 21:
              if (s >= 6 && l >= 258) {
                (e.next_out = i),
                  (e.avail_out = l),
                  (e.next_in = o),
                  (e.avail_in = s),
                  (n.hold = u),
                  (n.bits = c),
                  $e(e, f),
                  (i = e.next_out),
                  (a = e.output),
                  (l = e.avail_out),
                  (o = e.next_in),
                  (r = e.input),
                  (s = e.avail_in),
                  (u = n.hold),
                  (c = n.bits),
                  12 === n.mode && (n.back = -1);
                break;
              }
              for (
                n.back = 0;
                (T = n.lencode[u & ((1 << n.lenbits) - 1)]),
                  (g = T >>> 24),
                  (v = (T >>> 16) & 255),
                  (m = 65535 & T),
                  !(g <= c);

              ) {
                if (0 === s) break e;
                s--, (u += r[o++] << c), (c += 8);
              }
              if (v && 0 == (240 & v)) {
                for (
                  b = g, y = v, E = m;
                  (T = n.lencode[E + ((u & ((1 << (b + y)) - 1)) >> b)]),
                    (g = T >>> 24),
                    (v = (T >>> 16) & 255),
                    (m = 65535 & T),
                    !(b + g <= c);

                ) {
                  if (0 === s) break e;
                  s--, (u += r[o++] << c), (c += 8);
                }
                (u >>>= b), (c -= b), (n.back += b);
              }
              if (
                ((u >>>= g), (c -= g), (n.back += g), (n.length = m), 0 === v)
              ) {
                n.mode = 26;
                break;
              }
              if (32 & v) {
                (n.back = -1), (n.mode = 12);
                break;
              }
              if (64 & v) {
                (e.msg = "invalid literal/length code"), (n.mode = 30);
                break;
              }
              (n.extra = 15 & v), (n.mode = 22);
            case 22:
              if (n.extra) {
                for (A = n.extra; c < A; ) {
                  if (0 === s) break e;
                  s--, (u += r[o++] << c), (c += 8);
                }
                (n.length += u & ((1 << n.extra) - 1)),
                  (u >>>= n.extra),
                  (c -= n.extra),
                  (n.back += n.extra);
              }
              (n.was = n.length), (n.mode = 23);
            case 23:
              for (
                ;
                (T = n.distcode[u & ((1 << n.distbits) - 1)]),
                  (g = T >>> 24),
                  (v = (T >>> 16) & 255),
                  (m = 65535 & T),
                  !(g <= c);

              ) {
                if (0 === s) break e;
                s--, (u += r[o++] << c), (c += 8);
              }
              if (0 == (240 & v)) {
                for (
                  b = g, y = v, E = m;
                  (T = n.distcode[E + ((u & ((1 << (b + y)) - 1)) >> b)]),
                    (g = T >>> 24),
                    (v = (T >>> 16) & 255),
                    (m = 65535 & T),
                    !(b + g <= c);

                ) {
                  if (0 === s) break e;
                  s--, (u += r[o++] << c), (c += 8);
                }
                (u >>>= b), (c -= b), (n.back += b);
              }
              if (((u >>>= g), (c -= g), (n.back += g), 64 & v)) {
                (e.msg = "invalid distance code"), (n.mode = 30);
                break;
              }
              (n.offset = m), (n.extra = 15 & v), (n.mode = 24);
            case 24:
              if (n.extra) {
                for (A = n.extra; c < A; ) {
                  if (0 === s) break e;
                  s--, (u += r[o++] << c), (c += 8);
                }
                (n.offset += u & ((1 << n.extra) - 1)),
                  (u >>>= n.extra),
                  (c -= n.extra),
                  (n.back += n.extra);
              }
              if (n.offset > n.dmax) {
                (e.msg = "invalid distance too far back"), (n.mode = 30);
                break;
              }
              n.mode = 25;
            case 25:
              if (0 === l) break e;
              if (((h = f - l), n.offset > h)) {
                if (((h = n.offset - h), h > n.whave && n.sane)) {
                  (e.msg = "invalid distance too far back"), (n.mode = 30);
                  break;
                }
                h > n.wnext
                  ? ((h -= n.wnext), (p = n.wsize - h))
                  : (p = n.wnext - h),
                  h > n.length && (h = n.length),
                  (_ = n.window);
              } else (_ = a), (p = i - n.offset), (h = n.length);
              h > l && (h = l), (l -= h), (n.length -= h);
              do {
                a[i++] = _[p++];
              } while (--h);
              0 === n.length && (n.mode = 21);
              break;
            case 26:
              if (0 === l) break e;
              (a[i++] = n.length), l--, (n.mode = 21);
              break;
            case 27:
              if (n.wrap) {
                for (; c < 32; ) {
                  if (0 === s) break e;
                  s--, (u |= r[o++] << c), (c += 8);
                }
                if (
                  ((f -= l),
                  (e.total_out += f),
                  (n.total += f),
                  f &&
                    (e.adler = n.check =
                      n.flags
                        ? U(n.check, a, f, i - f)
                        : j(n.check, a, f, i - f)),
                  (f = l),
                  (n.flags ? u : _t(u)) !== n.check)
                ) {
                  (e.msg = "incorrect data check"), (n.mode = 30);
                  break;
                }
                (u = 0), (c = 0);
              }
              n.mode = 28;
            case 28:
              if (n.wrap && n.flags) {
                for (; c < 32; ) {
                  if (0 === s) break e;
                  s--, (u += r[o++] << c), (c += 8);
                }
                if (u !== (4294967295 & n.total)) {
                  (e.msg = "incorrect length check"), (n.mode = 30);
                  break;
                }
                (u = 0), (c = 0);
              }
              n.mode = 29;
            case 29:
              w = lt;
              break e;
            case 30:
              w = dt;
              break e;
            case 31:
              return ft;
            case 32:
            default:
              return ct;
          }
        return (
          (e.next_out = i),
          (e.avail_out = l),
          (e.next_in = o),
          (e.avail_in = s),
          (n.hold = u),
          (n.bits = c),
          (n.wsize ||
            (f !== e.avail_out && n.mode < 30 && (n.mode < 27 || t !== at))) &&
            Mt(e, e.output, e.next_out, f - e.avail_out),
          (d -= e.avail_in),
          (f -= e.avail_out),
          (e.total_in += d),
          (e.total_out += f),
          (n.total += f),
          n.wrap &&
            f &&
            (e.adler = n.check =
              n.flags
                ? U(n.check, a, f, e.next_out - f)
                : j(n.check, a, f, e.next_out - f)),
          (e.data_type =
            n.bits +
            (n.last ? 64 : 0) +
            (12 === n.mode ? 128 : 0) +
            (20 === n.mode || 15 === n.mode ? 256 : 0)),
          ((0 === d && 0 === f) || t === at) && w === st && (w = ht),
          w
        );
      },
      inflateEnd: (e) => {
        if (!e || !e.state) return ct;
        let t = e.state;
        return t.window && (t.window = null), (e.state = null), st;
      },
      inflateGetHeader: (e, t) => {
        if (!e || !e.state) return ct;
        const n = e.state;
        return 0 == (2 & n.wrap) ? ct : ((n.head = t), (t.done = false), st);
      },
      inflateSetDictionary: (e, t) => {
        const n = t.length;
        let r, a, o;
        return e && e.state
          ? ((r = e.state),
            0 !== r.wrap && 11 !== r.mode
              ? ct
              : 11 === r.mode && ((a = 1), (a = j(a, t, n, 0)), a !== r.check)
              ? dt
              : ((o = Mt(e, t, n, n)),
                o ? ((r.mode = 31), ft) : ((r.havedict = 1), st)))
          : ct;
      },
      inflateInfo: "pako inflate (from Nodeca project)",
    };
    var At = function () {
      (this.text = 0),
        (this.time = 0),
        (this.xflags = 0),
        (this.os = 0),
        (this.extra = null),
        (this.extra_len = 0),
        (this.name = ""),
        (this.comment = ""),
        (this.hcrc = 0),
        (this.done = false);
    };
    const kt = Object.prototype.toString,
      {
        Z_NO_FLUSH: xt,
        Z_FINISH: Rt,
        Z_OK: It,
        Z_STREAM_END: Ct,
        Z_NEED_DICT: Dt,
        Z_STREAM_ERROR: Pt,
        Z_DATA_ERROR: Bt,
        Z_MEM_ERROR: jt,
      } = z;
    function Lt(e) {
      this.options = Ie({ chunkSize: 65536, windowBits: 15, to: "" }, e || {});
      const t = this.options;
      t.raw &&
        t.windowBits >= 0 &&
        t.windowBits < 16 &&
        ((t.windowBits = -t.windowBits),
        0 === t.windowBits && (t.windowBits = -15)),
        !(t.windowBits >= 0 && t.windowBits < 16) ||
          (e && e.windowBits) ||
          (t.windowBits += 32),
        t.windowBits > 15 &&
          t.windowBits < 48 &&
          0 == (15 & t.windowBits) &&
          (t.windowBits |= 15),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = false),
        (this.chunks = []),
        (this.strm = new Ue()),
        (this.strm.avail_out = 0);
      let n = St.inflateInit2(this.strm, t.windowBits);
      if (n !== It) throw new Error(N[n]);
      if (
        ((this.header = new At()),
        St.inflateGetHeader(this.strm, this.header),
        t.dictionary &&
          ("string" == typeof t.dictionary
            ? (t.dictionary = Be(t.dictionary))
            : "[object ArrayBuffer]" === kt.call(t.dictionary) &&
              (t.dictionary = new Uint8Array(t.dictionary)),
          t.raw &&
            ((n = St.inflateSetDictionary(this.strm, t.dictionary)), n !== It)))
      )
        throw new Error(N[n]);
    }
    function Ut(e, t) {
      const n = new Lt(t);
      if ((n.push(e), n.err)) throw n.msg || N[n.err];
      return n.result;
    }
    (Lt.prototype.push = function (e, t) {
      const n = this.strm,
        r = this.options.chunkSize,
        a = this.options.dictionary;
      let o, i, s;
      if (this.ended) return false;
      for (
        i = t === ~~t ? t : true === t ? Rt : xt,
          "[object ArrayBuffer]" === kt.call(e)
            ? (n.input = new Uint8Array(e))
            : (n.input = e),
          n.next_in = 0,
          n.avail_in = n.input.length;
        ;

      ) {
        for (
          0 === n.avail_out &&
            ((n.output = new Uint8Array(r)),
            (n.next_out = 0),
            (n.avail_out = r)),
            o = St.inflate(n, i),
            o === Dt &&
              a &&
              ((o = St.inflateSetDictionary(n, a)),
              o === It ? (o = St.inflate(n, i)) : o === Bt && (o = Dt));
          n.avail_in > 0 && o === Ct && n.state.wrap > 0 && 0 !== e[n.next_in];

        )
          St.inflateReset(n), (o = St.inflate(n, i));
        switch (o) {
          case Pt:
          case Bt:
          case Dt:
          case jt:
            return this.onEnd(o), (this.ended = true), false;
        }
        if (((s = n.avail_out), n.next_out && (0 === n.avail_out || o === Ct)))
          if ("string" === this.options.to) {
            let e = Le(n.output, n.next_out),
              t = n.next_out - e,
              a = je(n.output, e);
            (n.next_out = t),
              (n.avail_out = r - t),
              t && n.output.set(n.output.subarray(e, e + t), 0),
              this.onData(a);
          } else
            this.onData(
              n.output.length === n.next_out
                ? n.output
                : n.output.subarray(0, n.next_out)
            );
        if (o !== It || 0 !== s) {
          if (o === Ct)
            return (
              (o = St.inflateEnd(this.strm)),
              this.onEnd(o),
              (this.ended = true),
              true
            );
          if (0 === n.avail_in) break;
        }
      }
      return true;
    }),
      (Lt.prototype.onData = function (e) {
        this.chunks.push(e);
      }),
      (Lt.prototype.onEnd = function (e) {
        e === It &&
          ("string" === this.options.to
            ? (this.result = this.chunks.join(""))
            : (this.result = Ce(this.chunks))),
          (this.chunks = []),
          (this.err = e),
          (this.msg = this.strm.msg);
      });
    var Nt = {
      Inflate: Lt,
      inflate: Ut,
      inflateRaw: function (e, t) {
        return ((t = t || {}).raw = true), Ut(e, t);
      },
      ungzip: Ut,
      constants: z,
    };
    const { Deflate: zt, deflate: Wt, deflateRaw: Kt, gzip: Gt } = Je,
      { Inflate: Ft, inflate: Yt, inflateRaw: Ht, ungzip: Vt } = Nt;
    var qt = Wt,
      Zt = Yt;
  },
  function (e, t, n) {
    t.encode = function (e, t) {
      var n = new r(t);
      return n.write(e), n.read();
    };
    var r = n(27).EncodeBuffer;
  },
  function (e, t, n) {
    t.EncodeBuffer = a;
    var r = n(18).preset;
    function a(e) {
      if (!(this instanceof a)) return new a(e);
      if (e && ((this.options = e), e.codec)) {
        var t = (this.codec = e.codec);
        t.bufferish && (this.bufferish = t.bufferish);
      }
    }
    n(31).FlexEncoder.mixin(a.prototype),
      (a.prototype.codec = r),
      (a.prototype.write = function (e) {
        this.codec.encode(this, e);
      });
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var r = n(17),
        a = n(20),
        o = n(40);
      function i() {
        return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function s(e, t) {
        if (i() < t) throw new RangeError("Invalid typed array length");
        return (
          l.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = l.prototype)
            : (null === e && (e = new l(t)), (e.length = t)),
          e
        );
      }
      function l(e, t, n) {
        if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
          return new l(e, t, n);
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return d(this, e);
        }
        return u(this, e, t, n);
      }
      function u(e, t, n, r) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, n, r) {
              if ((t.byteLength, n < 0 || t.byteLength < n))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < n + (r || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === n && void 0 === r
                  ? new Uint8Array(t)
                  : void 0 === r
                  ? new Uint8Array(t, n)
                  : new Uint8Array(t, n, r);
              l.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = l.prototype)
                : (e = f(e, t));
              return e;
            })(e, t, n, r)
          : "string" == typeof t
          ? (function (e, t, n) {
              ("string" == typeof n && "" !== n) || (n = "utf8");
              if (!l.isEncoding(n))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var r = 0 | p(t, n),
                a = (e = s(e, r)).write(t, n);
              a !== r && (e = e.slice(0, a));
              return e;
            })(e, t, n)
          : (function (e, t) {
              if (l.isBuffer(t)) {
                var n = 0 | h(t.length);
                return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n), e;
              }
              if (t) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" != typeof t.length || (r = t.length) != r
                    ? s(e, 0)
                    : f(e, t);
                if ("Buffer" === t.type && o(t.data)) return f(e, t.data);
              }
              var r;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function c(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function d(e, t) {
        if ((c(t), (e = s(e, t < 0 ? 0 : 0 | h(t))), !l.TYPED_ARRAY_SUPPORT))
          for (var n = 0; n < t; ++n) e[n] = 0;
        return e;
      }
      function f(e, t) {
        var n = t.length < 0 ? 0 : 0 | h(t.length);
        e = s(e, n);
        for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
        return e;
      }
      function h(e) {
        if (e >= i())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              i().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function p(e, t) {
        if (l.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var n = e.length;
        if (0 === n) return 0;
        for (var r = false; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
            case void 0:
              return z(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return W(e).length;
            default:
              if (r) return z(e).length;
              (t = ("" + t).toLowerCase()), (r = true);
          }
      }
      function _(e, t, n) {
        var r = false;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
          return "";
        if ((n >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return x(this, t, n);
            case "utf8":
            case "utf-8":
              return S(this, t, n);
            case "ascii":
              return A(this, t, n);
            case "latin1":
            case "binary":
              return k(this, t, n);
            case "base64":
              return M(this, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return R(this, t, n);
            default:
              if (r) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (r = true);
          }
      }
      function g(e, t, n) {
        var r = e[t];
        (e[t] = e[n]), (e[n] = r);
      }
      function v(e, t, n, r, a) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof n
            ? ((r = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          (n = +n),
          isNaN(n) && (n = a ? 0 : e.length - 1),
          n < 0 && (n = e.length + n),
          n >= e.length)
        ) {
          if (a) return -1;
          n = e.length - 1;
        } else if (n < 0) {
          if (!a) return -1;
          n = 0;
        }
        if (("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)))
          return 0 === t.length ? -1 : m(e, t, n, r, a);
        if ("number" == typeof t)
          return (
            (t &= 255),
            l.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? a
                ? Uint8Array.prototype.indexOf.call(e, t, n)
                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
              : m(e, [t], n, r, a)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function m(e, t, n, r, a) {
        var o,
          i = 1,
          s = e.length,
          l = t.length;
        if (
          void 0 !== r &&
          ("ucs2" === (r = String(r).toLowerCase()) ||
            "ucs-2" === r ||
            "utf16le" === r ||
            "utf-16le" === r)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (i = 2), (s /= 2), (l /= 2), (n /= 2);
        }
        function u(e, t) {
          return 1 === i ? e[t] : e.readUInt16BE(t * i);
        }
        if (a) {
          var c = -1;
          for (o = n; o < s; o++)
            if (u(e, o) === u(t, -1 === c ? 0 : o - c)) {
              if ((-1 === c && (c = o), o - c + 1 === l)) return c * i;
            } else -1 !== c && (o -= o - c), (c = -1);
        } else
          for (n + l > s && (n = s - l), o = n; o >= 0; o--) {
            for (var d = true, f = 0; f < l; f++)
              if (u(e, o + f) !== u(t, f)) {
                d = false;
                break;
              }
            if (d) return o;
          }
        return -1;
      }
      function b(e, t, n, r) {
        n = Number(n) || 0;
        var a = e.length - n;
        r ? (r = Number(r)) > a && (r = a) : (r = a);
        var o = t.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        r > o / 2 && (r = o / 2);
        for (var i = 0; i < r; ++i) {
          var s = parseInt(t.substr(2 * i, 2), 16);
          if (isNaN(s)) return i;
          e[n + i] = s;
        }
        return i;
      }
      function y(e, t, n, r) {
        return K(z(t, e.length - n), e, n, r);
      }
      function E(e, t, n, r) {
        return K(
          (function (e) {
            for (var t = [], n = 0; n < e.length; ++n)
              t.push(255 & e.charCodeAt(n));
            return t;
          })(t),
          e,
          n,
          r
        );
      }
      function O(e, t, n, r) {
        return E(e, t, n, r);
      }
      function w(e, t, n, r) {
        return K(W(t), e, n, r);
      }
      function T(e, t, n, r) {
        return K(
          (function (e, t) {
            for (
              var n, r, a, o = [], i = 0;
              i < e.length && !((t -= 2) < 0);
              ++i
            )
              (n = e.charCodeAt(i)),
                (r = n >> 8),
                (a = n % 256),
                o.push(a),
                o.push(r);
            return o;
          })(t, e.length - n),
          e,
          n,
          r
        );
      }
      function M(e, t, n) {
        return 0 === t && n === e.length
          ? r.fromByteArray(e)
          : r.fromByteArray(e.slice(t, n));
      }
      function S(e, t, n) {
        n = Math.min(e.length, n);
        for (var r = [], a = t; a < n; ) {
          var o,
            i,
            s,
            l,
            u = e[a],
            c = null,
            d = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
          if (a + d <= n)
            switch (d) {
              case 1:
                u < 128 && (c = u);
                break;
              case 2:
                128 == (192 & (o = e[a + 1])) &&
                  (l = ((31 & u) << 6) | (63 & o)) > 127 &&
                  (c = l);
                break;
              case 3:
                (o = e[a + 1]),
                  (i = e[a + 2]),
                  128 == (192 & o) &&
                    128 == (192 & i) &&
                    (l = ((15 & u) << 12) | ((63 & o) << 6) | (63 & i)) >
                      2047 &&
                    (l < 55296 || l > 57343) &&
                    (c = l);
                break;
              case 4:
                (o = e[a + 1]),
                  (i = e[a + 2]),
                  (s = e[a + 3]),
                  128 == (192 & o) &&
                    128 == (192 & i) &&
                    128 == (192 & s) &&
                    (l =
                      ((15 & u) << 18) |
                      ((63 & o) << 12) |
                      ((63 & i) << 6) |
                      (63 & s)) > 65535 &&
                    l < 1114112 &&
                    (c = l);
            }
          null === c
            ? ((c = 65533), (d = 1))
            : c > 65535 &&
              ((c -= 65536),
              r.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            r.push(c),
            (a += d);
        }
        return (function (e) {
          var t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          var n = "",
            r = 0;
          for (; r < t; )
            n += String.fromCharCode.apply(String, e.slice(r, (r += 4096)));
          return n;
        })(r);
      }
      (t.Buffer = l),
        (t.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return l.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (l.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return false;
                }
              })()),
        (t.kMaxLength = i()),
        (l.poolSize = 8192),
        (l._augment = function (e) {
          return (e.__proto__ = l.prototype), e;
        }),
        (l.from = function (e, t, n) {
          return u(null, e, t, n);
        }),
        l.TYPED_ARRAY_SUPPORT &&
          ((l.prototype.__proto__ = Uint8Array.prototype),
          (l.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            l[Symbol.species] === l &&
            Object.defineProperty(l, Symbol.species, {
              value: null,
              configurable: true,
            })),
        (l.alloc = function (e, t, n) {
          return (function (e, t, n, r) {
            return (
              c(t),
              t <= 0
                ? s(e, t)
                : void 0 !== n
                ? "string" == typeof r
                  ? s(e, t).fill(n, r)
                  : s(e, t).fill(n)
                : s(e, t)
            );
          })(null, e, t, n);
        }),
        (l.allocUnsafe = function (e) {
          return d(null, e);
        }),
        (l.allocUnsafeSlow = function (e) {
          return d(null, e);
        }),
        (l.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (l.compare = function (e, t) {
          if (!l.isBuffer(e) || !l.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var n = e.length, r = t.length, a = 0, o = Math.min(n, r);
            a < o;
            ++a
          )
            if (e[a] !== t[a]) {
              (n = e[a]), (r = t[a]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (l.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        }),
        (l.concat = function (e, t) {
          if (!o(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return l.alloc(0);
          var n;
          if (void 0 === t)
            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
          var r = l.allocUnsafe(t),
            a = 0;
          for (n = 0; n < e.length; ++n) {
            var i = e[n];
            if (!l.isBuffer(i))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            i.copy(r, a), (a += i.length);
          }
          return r;
        }),
        (l.byteLength = p),
        (l.prototype._isBuffer = true),
        (l.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (l.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (l.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? S(this, 0, e)
            : _.apply(this, arguments);
        }),
        (l.prototype.equals = function (e) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === l.compare(this, e);
        }),
        (l.prototype.inspect = function () {
          var e = "",
            n = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
              this.length > n && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (l.prototype.compare = function (e, t, n, r, a) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === a && (a = this.length),
            t < 0 || n > e.length || r < 0 || a > this.length)
          )
            throw new RangeError("out of range index");
          if (r >= a && t >= n) return 0;
          if (r >= a) return -1;
          if (t >= n) return 1;
          if (this === e) return 0;
          for (
            var o = (a >>>= 0) - (r >>>= 0),
              i = (n >>>= 0) - (t >>>= 0),
              s = Math.min(o, i),
              u = this.slice(r, a),
              c = e.slice(t, n),
              d = 0;
            d < s;
            ++d
          )
            if (u[d] !== c[d]) {
              (o = u[d]), (i = c[d]);
              break;
            }
          return o < i ? -1 : i < o ? 1 : 0;
        }),
        (l.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n);
        }),
        (l.prototype.indexOf = function (e, t, n) {
          return v(this, e, t, n, true);
        }),
        (l.prototype.lastIndexOf = function (e, t, n) {
          return v(this, e, t, n, false);
        }),
        (l.prototype.write = function (e, t, n, r) {
          if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
          else if (void 0 === n && "string" == typeof t)
            (r = t), (n = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(n)
                ? ((n |= 0), void 0 === r && (r = "utf8"))
                : ((r = n), (n = void 0));
          }
          var a = this.length - t;
          if (
            ((void 0 === n || n > a) && (n = a),
            (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");
          for (var o = false; ; )
            switch (r) {
              case "hex":
                return b(this, e, t, n);
              case "utf8":
              case "utf-8":
                return y(this, e, t, n);
              case "ascii":
                return E(this, e, t, n);
              case "latin1":
              case "binary":
                return O(this, e, t, n);
              case "base64":
                return w(this, e, t, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return T(this, e, t, n);
              default:
                if (o) throw new TypeError("Unknown encoding: " + r);
                (r = ("" + r).toLowerCase()), (o = true);
            }
        }),
        (l.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function A(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var a = t; a < n; ++a) r += String.fromCharCode(127 & e[a]);
        return r;
      }
      function k(e, t, n) {
        var r = "";
        n = Math.min(e.length, n);
        for (var a = t; a < n; ++a) r += String.fromCharCode(e[a]);
        return r;
      }
      function x(e, t, n) {
        var r = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
        for (var a = "", o = t; o < n; ++o) a += N(e[o]);
        return a;
      }
      function R(e, t, n) {
        for (var r = e.slice(t, n), a = "", o = 0; o < r.length; o += 2)
          a += String.fromCharCode(r[o] + 256 * r[o + 1]);
        return a;
      }
      function I(e, t, n) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > n)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function C(e, t, n, r, a, o) {
        if (!l.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > a || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw new RangeError("Index out of range");
      }
      function D(e, t, n, r) {
        t < 0 && (t = 65535 + t + 1);
        for (var a = 0, o = Math.min(e.length - n, 2); a < o; ++a)
          e[n + a] =
            (t & (255 << (8 * (r ? a : 1 - a)))) >>> (8 * (r ? a : 1 - a));
      }
      function P(e, t, n, r) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var a = 0, o = Math.min(e.length - n, 4); a < o; ++a)
          e[n + a] = (t >>> (8 * (r ? a : 3 - a))) & 255;
      }
      function B(e, t, n, r, a, o) {
        if (n + r > e.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function j(e, t, n, r, o) {
        return o || B(e, 0, n, 4), a.write(e, t, n, r, 23, 4), n + 4;
      }
      function L(e, t, n, r, o) {
        return o || B(e, 0, n, 8), a.write(e, t, n, r, 52, 8), n + 8;
      }
      (l.prototype.slice = function (e, t) {
        var n,
          r = this.length;
        if (
          ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          (t = void 0 === t ? r : ~~t) < 0
            ? (t += r) < 0 && (t = 0)
            : t > r && (t = r),
          t < e && (t = e),
          l.TYPED_ARRAY_SUPPORT)
        )
          (n = this.subarray(e, t)).__proto__ = l.prototype;
        else {
          var a = t - e;
          n = new l(a, void 0);
          for (var o = 0; o < a; ++o) n[o] = this[o + e];
        }
        return n;
      }),
        (l.prototype.readUIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || I(e, t, this.length);
          for (var r = this[e], a = 1, o = 0; ++o < t && (a *= 256); )
            r += this[e + o] * a;
          return r;
        }),
        (l.prototype.readUIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || I(e, t, this.length);
          for (var r = this[e + --t], a = 1; t > 0 && (a *= 256); )
            r += this[e + --t] * a;
          return r;
        }),
        (l.prototype.readUInt8 = function (e, t) {
          return t || I(e, 1, this.length), this[e];
        }),
        (l.prototype.readUInt16LE = function (e, t) {
          return t || I(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (l.prototype.readUInt16BE = function (e, t) {
          return t || I(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (l.prototype.readUInt32LE = function (e, t) {
          return (
            t || I(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (l.prototype.readUInt32BE = function (e, t) {
          return (
            t || I(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (l.prototype.readIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || I(e, t, this.length);
          for (var r = this[e], a = 1, o = 0; ++o < t && (a *= 256); )
            r += this[e + o] * a;
          return r >= (a *= 128) && (r -= Math.pow(2, 8 * t)), r;
        }),
        (l.prototype.readIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || I(e, t, this.length);
          for (var r = t, a = 1, o = this[e + --r]; r > 0 && (a *= 256); )
            o += this[e + --r] * a;
          return o >= (a *= 128) && (o -= Math.pow(2, 8 * t)), o;
        }),
        (l.prototype.readInt8 = function (e, t) {
          return (
            t || I(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (l.prototype.readInt16LE = function (e, t) {
          t || I(e, 2, this.length);
          var n = this[e] | (this[e + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (l.prototype.readInt16BE = function (e, t) {
          t || I(e, 2, this.length);
          var n = this[e + 1] | (this[e] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (l.prototype.readInt32LE = function (e, t) {
          return (
            t || I(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (e, t) {
          return (
            t || I(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (l.prototype.readFloatLE = function (e, t) {
          return t || I(e, 4, this.length), a.read(this, e, true, 23, 4);
        }),
        (l.prototype.readFloatBE = function (e, t) {
          return t || I(e, 4, this.length), a.read(this, e, false, 23, 4);
        }),
        (l.prototype.readDoubleLE = function (e, t) {
          return t || I(e, 8, this.length), a.read(this, e, true, 52, 8);
        }),
        (l.prototype.readDoubleBE = function (e, t) {
          return t || I(e, 8, this.length), a.read(this, e, false, 52, 8);
        }),
        (l.prototype.writeUIntLE = function (e, t, n, r) {
          ((e = +e), (t |= 0), (n |= 0), r) ||
            C(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var a = 1,
            o = 0;
          for (this[t] = 255 & e; ++o < n && (a *= 256); )
            this[t + o] = (e / a) & 255;
          return t + n;
        }),
        (l.prototype.writeUIntBE = function (e, t, n, r) {
          ((e = +e), (t |= 0), (n |= 0), r) ||
            C(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var a = n - 1,
            o = 1;
          for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); )
            this[t + a] = (e / o) & 255;
          return t + n;
        }),
        (l.prototype.writeUInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || C(this, e, t, 1, 255, 0),
            l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeUInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || C(this, e, t, 2, 65535, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : D(this, e, t, true),
            t + 2
          );
        }),
        (l.prototype.writeUInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || C(this, e, t, 2, 65535, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : D(this, e, t, false),
            t + 2
          );
        }),
        (l.prototype.writeUInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || C(this, e, t, 4, 4294967295, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : P(this, e, t, true),
            t + 4
          );
        }),
        (l.prototype.writeUInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || C(this, e, t, 4, 4294967295, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : P(this, e, t, false),
            t + 4
          );
        }),
        (l.prototype.writeIntLE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var a = Math.pow(2, 8 * n - 1);
            C(this, e, t, n, a - 1, -a);
          }
          var o = 0,
            i = 1,
            s = 0;
          for (this[t] = 255 & e; ++o < n && (i *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
              (this[t + o] = (((e / i) >> 0) - s) & 255);
          return t + n;
        }),
        (l.prototype.writeIntBE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var a = Math.pow(2, 8 * n - 1);
            C(this, e, t, n, a - 1, -a);
          }
          var o = n - 1,
            i = 1,
            s = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
            e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
              (this[t + o] = (((e / i) >> 0) - s) & 255);
          return t + n;
        }),
        (l.prototype.writeInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || C(this, e, t, 1, 127, -128),
            l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || C(this, e, t, 2, 32767, -32768),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : D(this, e, t, true),
            t + 2
          );
        }),
        (l.prototype.writeInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || C(this, e, t, 2, 32767, -32768),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : D(this, e, t, false),
            t + 2
          );
        }),
        (l.prototype.writeInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || C(this, e, t, 4, 2147483647, -2147483648),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : P(this, e, t, true),
            t + 4
          );
        }),
        (l.prototype.writeInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || C(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : P(this, e, t, false),
            t + 4
          );
        }),
        (l.prototype.writeFloatLE = function (e, t, n) {
          return j(this, e, t, true, n);
        }),
        (l.prototype.writeFloatBE = function (e, t, n) {
          return j(this, e, t, false, n);
        }),
        (l.prototype.writeDoubleLE = function (e, t, n) {
          return L(this, e, t, true, n);
        }),
        (l.prototype.writeDoubleBE = function (e, t, n) {
          return L(this, e, t, false, n);
        }),
        (l.prototype.copy = function (e, t, n, r) {
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length),
            e.length - t < r - n && (r = e.length - t + n);
          var a,
            o = r - n;
          if (this === e && n < t && t < r)
            for (a = o - 1; a >= 0; --a) e[a + t] = this[a + n];
          else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
            for (a = 0; a < o; ++a) e[a + t] = this[a + n];
          else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
          return o;
        }),
        (l.prototype.fill = function (e, t, n, r) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((r = t), (t = 0), (n = this.length))
                : "string" == typeof n && ((r = n), (n = this.length)),
              1 === e.length)
            ) {
              var a = e.charCodeAt(0);
              a < 256 && (e = a);
            }
            if (void 0 !== r && "string" != typeof r)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof r && !l.isEncoding(r))
              throw new TypeError("Unknown encoding: " + r);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= t) return this;
          var o;
          if (
            ((t >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (o = t; o < n; ++o) this[o] = e;
          else {
            var i = l.isBuffer(e) ? e : z(new l(e, r).toString()),
              s = i.length;
            for (o = 0; o < n - t; ++o) this[o + t] = i[o % s];
          }
          return this;
        });
      var U = /[^+\/0-9A-Za-z-_]/g;
      function N(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }
      function z(e, t) {
        var n;
        t = t || 1 / 0;
        for (var r = e.length, a = null, o = [], i = 0; i < r; ++i) {
          if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
            if (!a) {
              if (n > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (i + 1 === r) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              a = n;
              continue;
            }
            if (n < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (a = n);
              continue;
            }
            n = 65536 + (((a - 55296) << 10) | (n - 56320));
          } else a && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((a = null), n < 128)) {
            if ((t -= 1) < 0) break;
            o.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            o.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          }
        }
        return o;
      }
      function W(e) {
        return r.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              })(e).replace(U, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function K(e, t, n, r) {
        for (var a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a)
          t[a + n] = e[a];
        return a;
      }
    }.call(this, n(29)));
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    for (var n = (t.uint8 = new Array(256)), r = 0; r <= 255; r++) n[r] = a(r);
    function a(e) {
      return function (t) {
        var n = t.reserve(1);
        t.buffer[n] = e;
      };
    }
  },
  function (e, t, n) {
    (t.FlexDecoder = a), (t.FlexEncoder = o);
    var r = n(10);
    function a() {
      if (!(this instanceof a)) return new a();
    }
    function o() {
      if (!(this instanceof o)) return new o();
    }
    function i() {
      throw new Error("method not implemented: write()");
    }
    function s() {
      throw new Error("method not implemented: fetch()");
    }
    function l() {
      return this.buffers && this.buffers.length
        ? (this.flush(), this.pull())
        : this.fetch();
    }
    function u(e) {
      (this.buffers || (this.buffers = [])).push(e);
    }
    function c() {
      return (this.buffers || (this.buffers = [])).shift();
    }
    function d(e) {
      return function (t) {
        for (var n in e) t[n] = e[n];
        return t;
      };
    }
    (a.mixin = d({
      bufferish: r,
      write: function (e) {
        var t = this.offset
          ? r.prototype.slice.call(this.buffer, this.offset)
          : this.buffer;
        (this.buffer = t ? (e ? this.bufferish.concat([t, e]) : t) : e),
          (this.offset = 0);
      },
      fetch: s,
      flush: function () {
        for (; this.offset < this.buffer.length; ) {
          var e,
            t = this.offset;
          try {
            e = this.fetch();
          } catch (e) {
            if (e && "BUFFER_SHORTAGE" != e.message) throw e;
            this.offset = t;
            break;
          }
          this.push(e);
        }
      },
      push: u,
      pull: c,
      read: l,
      reserve: function (e) {
        var t = this.offset,
          n = t + e;
        if (n > this.buffer.length) throw new Error("BUFFER_SHORTAGE");
        return (this.offset = n), t;
      },
      offset: 0,
    })),
      a.mixin(a.prototype),
      (o.mixin = d({
        bufferish: r,
        write: i,
        fetch: function () {
          var e = this.start;
          if (e < this.offset) {
            var t = (this.start = this.offset);
            return r.prototype.slice.call(this.buffer, e, t);
          }
        },
        flush: function () {
          for (; this.start < this.offset; ) {
            var e = this.fetch();
            e && this.push(e);
          }
        },
        push: u,
        pull: function () {
          var e = this.buffers || (this.buffers = []),
            t = e.length > 1 ? this.bufferish.concat(e) : e[0];
          return (e.length = 0), t;
        },
        read: l,
        reserve: function (e) {
          var t = 0 | e;
          if (this.buffer) {
            var n = this.buffer.length,
              r = 0 | this.offset,
              a = r + t;
            if (a < n) return (this.offset = a), r;
            this.flush(),
              (e = Math.max(e, Math.min(2 * n, this.maxBufferSize)));
          }
          return (
            (e = Math.max(e, this.minBufferSize)),
            (this.buffer = this.bufferish.alloc(e)),
            (this.start = 0),
            (this.offset = t),
            0
          );
        },
        send: function (e) {
          var t = e.length;
          if (t > this.minBufferSize) this.flush(), this.push(e);
          else {
            var n = this.reserve(t);
            r.prototype.copy.call(e, this.buffer, n);
          }
        },
        maxBufferSize: 65536,
        minBufferSize: 2048,
        offset: 0,
        start: 0,
      })),
      o.mixin(o.prototype);
  },
  function (e, t, n) {
    t.decode = function (e, t) {
      var n = new r(t);
      return n.write(e), n.read();
    };
    var r = n(33).DecodeBuffer;
  },
  function (e, t, n) {
    t.DecodeBuffer = a;
    var r = n(24).preset;
    function a(e) {
      if (!(this instanceof a)) return new a(e);
      if (e && ((this.options = e), e.codec)) {
        var t = (this.codec = e.codec);
        t.bufferish && (this.bufferish = t.bufferish);
      }
    }
    n(31).FlexDecoder.mixin(a.prototype),
      (a.prototype.codec = r),
      (a.prototype.fetch = function () {
        return this.codec.decode(this);
      });
  },
  function (e, t, n) {
    var r = n(20),
      a = n(23),
      o = a.Uint64BE,
      i = a.Int64BE;
    (t.getReadFormat = function (e) {
      var t = s.hasArrayBuffer && e && e.binarraybuffer,
        n = e && e.int64;
      return {
        map: u && e && e.usemap ? d : c,
        array: f,
        str: h,
        bin: t ? _ : p,
        ext: g,
        uint8: v,
        uint16: b,
        uint32: E,
        uint64: w(8, n ? S : T),
        int8: m,
        int16: y,
        int32: O,
        int64: w(8, n ? A : M),
        float32: w(4, k),
        float64: w(8, x),
      };
    }),
      (t.readUint8 = v);
    var s = n(10),
      l = n(22),
      u = "undefined" != typeof Map;
    function c(e, t) {
      var n,
        r = {},
        a = new Array(t),
        o = new Array(t),
        i = e.codec.decode;
      for (n = 0; n < t; n++) (a[n] = i(e)), (o[n] = i(e));
      for (n = 0; n < t; n++) r[a[n]] = o[n];
      return r;
    }
    function d(e, t) {
      var n,
        r = new Map(),
        a = new Array(t),
        o = new Array(t),
        i = e.codec.decode;
      for (n = 0; n < t; n++) (a[n] = i(e)), (o[n] = i(e));
      for (n = 0; n < t; n++) r.set(a[n], o[n]);
      return r;
    }
    function f(e, t) {
      for (var n = new Array(t), r = e.codec.decode, a = 0; a < t; a++)
        n[a] = r(e);
      return n;
    }
    function h(e, t) {
      var n = e.reserve(t),
        r = n + t;
      return l.toString.call(e.buffer, "utf-8", n, r);
    }
    function p(e, t) {
      var n = e.reserve(t),
        r = n + t,
        a = l.slice.call(e.buffer, n, r);
      return s.from(a);
    }
    function _(e, t) {
      var n = e.reserve(t),
        r = n + t,
        a = l.slice.call(e.buffer, n, r);
      return s.Uint8Array.from(a).buffer;
    }
    function g(e, t) {
      var n = e.reserve(t + 1),
        r = e.buffer[n++],
        a = n + t,
        o = e.codec.getExtUnpacker(r);
      if (!o)
        throw new Error("Invalid ext type: " + (r ? "0x" + r.toString(16) : r));
      return o(l.slice.call(e.buffer, n, a));
    }
    function v(e) {
      var t = e.reserve(1);
      return e.buffer[t];
    }
    function m(e) {
      var t = e.reserve(1),
        n = e.buffer[t];
      return 128 & n ? n - 256 : n;
    }
    function b(e) {
      var t = e.reserve(2),
        n = e.buffer;
      return (n[t++] << 8) | n[t];
    }
    function y(e) {
      var t = e.reserve(2),
        n = e.buffer,
        r = (n[t++] << 8) | n[t];
      return 32768 & r ? r - 65536 : r;
    }
    function E(e) {
      var t = e.reserve(4),
        n = e.buffer;
      return 16777216 * n[t++] + (n[t++] << 16) + (n[t++] << 8) + n[t];
    }
    function O(e) {
      var t = e.reserve(4),
        n = e.buffer;
      return (n[t++] << 24) | (n[t++] << 16) | (n[t++] << 8) | n[t];
    }
    function w(e, t) {
      return function (n) {
        var r = n.reserve(e);
        return t.call(n.buffer, r, true);
      };
    }
    function T(e) {
      return new o(this, e).toNumber();
    }
    function M(e) {
      return new i(this, e).toNumber();
    }
    function S(e) {
      return new o(this, e);
    }
    function A(e) {
      return new i(this, e);
    }
    function k(e) {
      return r.read(this, e, false, 23, 4);
    }
    function x(e) {
      return r.read(this, e, false, 52, 8);
    }
  },
  function (e, t, n) {
    !(function (t) {
      e.exports = t;
      var n = {
        on: function (e, t) {
          return o(this, e).push(t), this;
        },
        once: function (e, t) {
          var n = this;
          return (r.originalListener = t), o(n, e).push(r), n;
          function r() {
            a.call(n, e, r), t.apply(this, arguments);
          }
        },
        off: a,
        emit: function (e, t) {
          var n = this,
            r = o(n, e, true);
          if (!r) return false;
          var a = arguments.length;
          if (1 === a) r.forEach(s);
          else if (2 === a) r.forEach(l);
          else {
            var i = Array.prototype.slice.call(arguments, 1);
            r.forEach(u);
          }
          return !!r.length;
          function s(e) {
            e.call(n);
          }
          function l(e) {
            e.call(n, t);
          }
          function u(e) {
            e.apply(n, i);
          }
        },
      };
      function r(e) {
        for (var t in n) e[t] = n[t];
        return e;
      }
      function a(e, t) {
        var n,
          r = this;
        if (arguments.length) {
          if (t) {
            if ((n = o(r, e, true))) {
              if (!(n = n.filter(i)).length) return a.call(r, e);
              r.listeners[e] = n;
            }
          } else if ((n = r.listeners) && (delete n[e], !Object.keys(n).length))
            return a.call(r);
        } else delete r.listeners;
        return r;
        function i(e) {
          return e !== t && e.originalListener !== t;
        }
      }
      function o(e, t, n) {
        if (!n || e.listeners) {
          var r = e.listeners || (e.listeners = {});
          return r[t] || (r[t] = []);
        }
      }
      r(t.prototype), (t.mixin = r);
    })(
      /**
       * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
       *
       * @copyright Yusuke Kawasaki
       * @license MIT
       * @constructor
       * @see https://github.com/kawanet/event-lite
       * @see http://kawanet.github.io/event-lite/EventLite.html
       * @example
       * var EventLite = require("event-lite");
       *
       * function MyClass() {...}             // your class
       *
       * EventLite.mixin(MyClass.prototype);  // import event methods
       *
       * var obj = new MyClass();
       * obj.on("foo", function() {...});     // add event listener
       * obj.once("bar", function() {...});   // add one-time event listener
       * obj.emit("foo");                     // dispatch event
       * obj.emit("bar");                     // dispatch another event
       * obj.off("foo");                      // remove event listener
       */
      function e() {
        if (!(this instanceof e)) return new e();
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = {};
    Promise.all(
      [].map(function (e) {
        return new Promise(function (t) {
          var n = new Image();
          (n.onload = function () {
            console.log("Downloaded ".concat(e)), (r[e] = n), t();
          }),
            (n.src = "/assets/".concat(e));
        });
      })
    );
  },
  function (e, t, n) {
    n(38), (e.exports = n(7));
  },
  function (e, t, n) {
    var r = (function (e) {
      "use strict";
      var t = Object.prototype,
        n = t.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        a = r.iterator || "@@iterator",
        o = r.asyncIterator || "@@asyncIterator",
        i = r.toStringTag || "@@toStringTag";
      function s(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true,
          }),
          e[t]
        );
      }
      try {
        s({}, "");
      } catch (e) {
        s = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function l(e, t, n, r) {
        var a = t && t.prototype instanceof d ? t : d,
          o = Object.create(a.prototype),
          i = new w(r || []);
        return (
          (o._invoke = (function (e, t, n) {
            var r = "suspendedStart";
            return function (a, o) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === a) throw o;
                return M();
              }
              for (n.method = a, n.arg = o; ; ) {
                var i = n.delegate;
                if (i) {
                  var s = y(i, n);
                  if (s) {
                    if (s === c) continue;
                    return s;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var l = u(e, t, n);
                if ("normal" === l.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), l.arg === c)
                  )
                    continue;
                  return { value: l.arg, done: n.done };
                }
                "throw" === l.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
              }
            };
          })(e, n, i)),
          o
        );
      }
      function u(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = l;
      var c = {};
      function d() {}
      function f() {}
      function h() {}
      var p = {};
      s(p, a, function () {
        return this;
      });
      var _ = Object.getPrototypeOf,
        g = _ && _(_(T([])));
      g && g !== t && n.call(g, a) && (p = g);
      var v = (h.prototype = d.prototype = Object.create(p));
      function m(e) {
        ["next", "throw", "return"].forEach(function (t) {
          s(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function b(e, t) {
        var r;
        this._invoke = function (a, o) {
          function i() {
            return new t(function (r, i) {
              !(function r(a, o, i, s) {
                var l = u(e[a], e, o);
                if ("throw" !== l.type) {
                  var c = l.arg,
                    d = c.value;
                  return d && "object" == typeof d && n.call(d, "__await")
                    ? t.resolve(d.__await).then(
                        function (e) {
                          r("next", e, i, s);
                        },
                        function (e) {
                          r("throw", e, i, s);
                        }
                      )
                    : t.resolve(d).then(
                        function (e) {
                          (c.value = e), i(c);
                        },
                        function (e) {
                          return r("throw", e, i, s);
                        }
                      );
                }
                s(l.arg);
              })(a, o, r, i);
            });
          }
          return (r = r ? r.then(i, i) : i());
        };
      }
      function y(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              y(e, t),
              "throw" === t.method)
            )
              return c;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return c;
        }
        var r = u(n, e.iterator, t.arg);
        if ("throw" === r.type)
          return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), c;
        var a = r.arg;
        return a
          ? a.done
            ? ((t[e.resultName] = a.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              c)
            : a
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            c);
      }
      function E(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function O(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function w(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(E, this),
          this.reset(true);
      }
      function T(e) {
        if (e) {
          var t = e[a];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              o = function t() {
                for (; ++r < e.length; )
                  if (n.call(e, r)) return (t.value = e[r]), (t.done = false), t;
                return (t.value = void 0), (t.done = true), t;
              };
            return (o.next = o);
          }
        }
        return { next: M };
      }
      function M() {
        return { value: void 0, done: true };
      }
      return (
        (f.prototype = h),
        s(v, "constructor", h),
        s(h, "constructor", f),
        (f.displayName = s(h, i, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === f || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, h)
              : ((e.__proto__ = h), s(e, i, "GeneratorFunction")),
            (e.prototype = Object.create(v)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        m(b.prototype),
        s(b.prototype, o, function () {
          return this;
        }),
        (e.AsyncIterator = b),
        (e.async = function (t, n, r, a, o) {
          void 0 === o && (o = Promise);
          var i = new b(l(t, n, r, a), o);
          return e.isGeneratorFunction(n)
            ? i
            : i.next().then(function (e) {
                return e.done ? e.value : i.next();
              });
        }),
        m(v),
        s(v, i, "Generator"),
        s(v, a, function () {
          return this;
        }),
        s(v, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = false), n;
              }
              return (n.done = true), n;
            }
          );
        }),
        (e.values = T),
        (w.prototype = {
          constructor: w,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = false),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(O),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  n.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = true;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(n, r) {
              return (
                (i.type = "throw"),
                (i.arg = e),
                (t.next = n),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var o = this.tryEntries[a],
                i = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var s = n.call(o, "catchLoc"),
                  l = n.call(o, "finallyLoc");
                if (s && l) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, true);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (s) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, true);
                } else {
                  if (!l)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var a = this.tryEntries[r];
              if (
                a.tryLoc <= this.prev &&
                n.call(a, "finallyLoc") &&
                this.prev < a.finallyLoc
              ) {
                var o = a;
                break;
              }
            }
            o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc &&
              (o = null);
            var i = o ? o.completion : {};
            return (
              (i.type = e),
              (i.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), c)
                : this.complete(i)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              c
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), O(n), c;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var a = r.arg;
                  O(n);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: T(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              c
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = r;
    } catch (e) {
      "object" == typeof globalThis
        ? (globalThis.regeneratorRuntime = r)
        : Function("r", "regeneratorRuntime = r")(r);
    }
  },
  function (e, t, n) {
    (function (t) {
      function n(e) {
        return e && e.isBuffer && e;
      }
      e.exports =
        n(void 0 !== t && t) ||
        n(this.Buffer) ||
        n("undefined" != typeof window && window.Buffer) ||
        this.Buffer;
    }.call(this, n(28).Buffer));
  },
  function (e, t) {
    var n = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == n.call(e);
      };
  },
  function (e, t, n) {
    var r = n(10);
    function a(e) {
      return new Array(e);
    }
    ((t = e.exports = a(0)).alloc = a),
      (t.concat = r.concat),
      (t.from = function (e) {
        if (!r.isBuffer(e) && r.isView(e)) e = r.Uint8Array.from(e);
        else if (r.isArrayBuffer(e)) e = new Uint8Array(e);
        else {
          if ("string" == typeof e) return r.from.call(t, e);
          if ("number" == typeof e)
            throw new TypeError('"value" argument must not be a number');
        }
        return Array.prototype.slice.call(e);
      });
  },
  function (e, t, n) {
    var r = n(10),
      a = r.global;
    function o(e) {
      return new a(e);
    }
    ((t = e.exports = r.hasBuffer ? o(0) : []).alloc =
      (r.hasBuffer && a.alloc) || o),
      (t.concat = r.concat),
      (t.from = function (e) {
        if (!r.isBuffer(e) && r.isView(e)) e = r.Uint8Array.from(e);
        else if (r.isArrayBuffer(e)) e = new Uint8Array(e);
        else {
          if ("string" == typeof e) return r.from.call(t, e);
          if ("number" == typeof e)
            throw new TypeError('"value" argument must not be a number');
        }
        return a.from && 1 !== a.from.length ? a.from(e) : new a(e);
      });
  },
  function (e, t, n) {
    var r = n(10);
    function a(e) {
      return new Uint8Array(e);
    }
    ((t = e.exports = r.hasArrayBuffer ? a(0) : []).alloc = a),
      (t.concat = r.concat),
      (t.from = function (e) {
        if (r.isView(e)) {
          var n = e.byteOffset,
            a = e.byteLength;
          (e = e.buffer).byteLength !== a &&
            (e.slice
              ? (e = e.slice(n, n + a))
              : (e = new Uint8Array(e)).byteLength !== a &&
                (e = Array.prototype.slice.call(e, n, n + a)));
        } else {
          if ("string" == typeof e) return r.from.call(t, e);
          if ("number" == typeof e)
            throw new TypeError('"value" argument must not be a number');
        }
        return new Uint8Array(e);
      });
  },
  function (e, t) {
    (t.copy = function (e, t, n, r) {
      var a;
      n || (n = 0);
      r || 0 === r || (r = this.length);
      t || (t = 0);
      var o = r - n;
      if (e === this && n < t && t < r)
        for (a = o - 1; a >= 0; a--) e[a + t] = this[a + n];
      else for (a = 0; a < o; a++) e[a + t] = this[a + n];
      return o;
    }),
      (t.toString = function (e, t, n) {
        var r = 0 | t;
        n || (n = this.length);
        var a = "",
          o = 0;
        for (; r < n; )
          (o = this[r++]) < 128
            ? (a += String.fromCharCode(o))
            : (192 == (224 & o)
                ? (o = ((31 & o) << 6) | (63 & this[r++]))
                : 224 == (240 & o)
                ? (o =
                    ((15 & o) << 12) |
                    ((63 & this[r++]) << 6) |
                    (63 & this[r++]))
                : 240 == (248 & o) &&
                  (o =
                    ((7 & o) << 18) |
                    ((63 & this[r++]) << 12) |
                    ((63 & this[r++]) << 6) |
                    (63 & this[r++])),
              o >= 65536
                ? ((o -= 65536),
                  (a += String.fromCharCode(
                    55296 + (o >>> 10),
                    56320 + (1023 & o)
                  )))
                : (a += String.fromCharCode(o)));
        return a;
      }),
      (t.write = function (e, t) {
        var n = t || (t |= 0),
          r = e.length,
          a = 0,
          o = 0;
        for (; o < r; )
          (a = e.charCodeAt(o++)) < 128
            ? (this[n++] = a)
            : a < 2048
            ? ((this[n++] = 192 | (a >>> 6)), (this[n++] = 128 | (63 & a)))
            : a < 55296 || a > 57343
            ? ((this[n++] = 224 | (a >>> 12)),
              (this[n++] = 128 | ((a >>> 6) & 63)),
              (this[n++] = 128 | (63 & a)))
            : ((a =
                65536 + (((a - 55296) << 10) | (e.charCodeAt(o++) - 56320))),
              (this[n++] = 240 | (a >>> 18)),
              (this[n++] = 128 | ((a >>> 12) & 63)),
              (this[n++] = 128 | ((a >>> 6) & 63)),
              (this[n++] = 128 | (63 & a)));
        return n - t;
      });
  },
  function (e, t, n) {
    t.setExtPackers = function (e) {
      e.addExtPacker(14, Error, [d, l]),
        e.addExtPacker(1, EvalError, [d, l]),
        e.addExtPacker(2, RangeError, [d, l]),
        e.addExtPacker(3, ReferenceError, [d, l]),
        e.addExtPacker(4, SyntaxError, [d, l]),
        e.addExtPacker(5, TypeError, [d, l]),
        e.addExtPacker(6, URIError, [d, l]),
        e.addExtPacker(10, RegExp, [c, l]),
        e.addExtPacker(11, Boolean, [u, l]),
        e.addExtPacker(12, String, [u, l]),
        e.addExtPacker(13, Date, [Number, l]),
        e.addExtPacker(15, Number, [u, l]),
        "undefined" != typeof Uint8Array &&
          (e.addExtPacker(17, Int8Array, i),
          e.addExtPacker(18, Uint8Array, i),
          e.addExtPacker(19, Int16Array, i),
          e.addExtPacker(20, Uint16Array, i),
          e.addExtPacker(21, Int32Array, i),
          e.addExtPacker(22, Uint32Array, i),
          e.addExtPacker(23, Float32Array, i),
          "undefined" != typeof Float64Array &&
            e.addExtPacker(24, Float64Array, i),
          "undefined" != typeof Uint8ClampedArray &&
            e.addExtPacker(25, Uint8ClampedArray, i),
          e.addExtPacker(26, ArrayBuffer, i),
          e.addExtPacker(29, DataView, i));
      a.hasBuffer && e.addExtPacker(27, o, a.from);
    };
    var r,
      a = n(10),
      o = a.global,
      i = a.Uint8Array.from,
      s = {
        name: 1,
        message: 1,
        stack: 1,
        columnNumber: 1,
        fileName: 1,
        lineNumber: 1,
      };
    function l(e) {
      return r || (r = n(26).encode), r(e);
    }
    function u(e) {
      return e.valueOf();
    }
    function c(e) {
      (e = RegExp.prototype.toString.call(e).split("/")).shift();
      var t = [e.pop()];
      return t.unshift(e.join("/")), t;
    }
    function d(e) {
      var t = {};
      for (var n in s) t[n] = e[n];
      return t;
    }
  },
  function (e, t, n) {
    var r = n(21),
      a = n(23),
      o = a.Uint64BE,
      i = a.Int64BE,
      s = n(10),
      l = n(22),
      u = n(47),
      c = n(30).uint8,
      d = n(19).ExtBuffer,
      f = "undefined" != typeof Uint8Array,
      h = "undefined" != typeof Map,
      p = [];
    (p[1] = 212),
      (p[2] = 213),
      (p[4] = 214),
      (p[8] = 215),
      (p[16] = 216),
      (t.getWriteType = function (e) {
        var t = u.getWriteToken(e),
          n = e && e.useraw,
          a = f && e && e.binarraybuffer,
          _ = a ? s.isArrayBuffer : s.isBuffer,
          g = a
            ? function (e, t) {
                E(e, new Uint8Array(t));
              }
            : E,
          v =
            h && e && e.usemap
              ? function (e, n) {
                  if (!(n instanceof Map)) return O(e, n);
                  var r = n.size;
                  t[r < 16 ? 128 + r : r <= 65535 ? 222 : 223](e, r);
                  var a = e.codec.encode;
                  n.forEach(function (t, n, r) {
                    a(e, n), a(e, t);
                  });
                }
              : O;
        return {
          boolean: function (e, n) {
            t[n ? 195 : 194](e, n);
          },
          function: y,
          number: function (e, n) {
            var r,
              a = 0 | n;
            if (n !== a) return void t[(r = 203)](e, n);
            r =
              -32 <= a && a <= 127
                ? 255 & a
                : 0 <= a
                ? a <= 255
                  ? 204
                  : a <= 65535
                  ? 205
                  : 206
                : -128 <= a
                ? 208
                : -32768 <= a
                ? 209
                : 210;
            t[r](e, a);
          },
          object: n
            ? function (e, n) {
                if (_(n))
                  return (function (e, n) {
                    var r = n.length;
                    t[r < 32 ? 160 + r : r <= 65535 ? 218 : 219](e, r),
                      e.send(n);
                  })(e, n);
                b(e, n);
              }
            : b,
          string:
            ((m = n
              ? function (e) {
                  return e < 32 ? 1 : e <= 65535 ? 3 : 5;
                }
              : function (e) {
                  return e < 32 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5;
                }),
            function (e, n) {
              var r = n.length,
                a = 5 + 3 * r;
              e.offset = e.reserve(a);
              var o = e.buffer,
                i = m(r),
                s = e.offset + i;
              r = l.write.call(o, n, s);
              var u = m(r);
              if (i !== u) {
                var c = s + u - i,
                  d = s + r;
                l.copy.call(o, o, c, s, d);
              }
              t[1 === u ? 160 + r : u <= 3 ? 215 + u : 219](e, r),
                (e.offset += r);
            }),
          symbol: y,
          undefined: y,
        };
        var m;
        function b(e, n) {
          if (null === n) return y(e, n);
          if (_(n)) return g(e, n);
          if (r(n))
            return (function (e, n) {
              var r = n.length;
              t[r < 16 ? 144 + r : r <= 65535 ? 220 : 221](e, r);
              for (var a = e.codec.encode, o = 0; o < r; o++) a(e, n[o]);
            })(e, n);
          if (o.isUint64BE(n))
            return (function (e, n) {
              t[207](e, n.toArray());
            })(e, n);
          if (i.isInt64BE(n))
            return (function (e, n) {
              t[211](e, n.toArray());
            })(e, n);
          var a = e.codec.getExtPacker(n);
          if ((a && (n = a(n)), n instanceof d))
            return (function (e, n) {
              var r = n.buffer,
                a = r.length,
                o = p[a] || (a < 255 ? 199 : a <= 65535 ? 200 : 201);
              t[o](e, a), c[n.type](e), e.send(r);
            })(e, n);
          v(e, n);
        }
        function y(e, n) {
          t[192](e, n);
        }
        function E(e, n) {
          var r = n.length;
          t[r < 255 ? 196 : r <= 65535 ? 197 : 198](e, r), e.send(n);
        }
        function O(e, n) {
          var r = Object.keys(n),
            a = r.length;
          t[a < 16 ? 128 + a : a <= 65535 ? 222 : 223](e, a);
          var o = e.codec.encode;
          r.forEach(function (t) {
            o(e, t), o(e, n[t]);
          });
        }
      });
  },
  function (e, t, n) {
    var r = n(20),
      a = n(23),
      o = a.Uint64BE,
      i = a.Int64BE,
      s = n(30).uint8,
      l = n(10),
      u = l.global,
      c = l.hasBuffer && "TYPED_ARRAY_SUPPORT" in u && !u.TYPED_ARRAY_SUPPORT,
      d = (l.hasBuffer && u.prototype) || {};
    function f() {
      var e = s.slice();
      return (
        (e[196] = h(196)),
        (e[197] = p(197)),
        (e[198] = _(198)),
        (e[199] = h(199)),
        (e[200] = p(200)),
        (e[201] = _(201)),
        (e[202] = g(202, 4, d.writeFloatBE || b, true)),
        (e[203] = g(203, 8, d.writeDoubleBE || y, true)),
        (e[204] = h(204)),
        (e[205] = p(205)),
        (e[206] = _(206)),
        (e[207] = g(207, 8, v)),
        (e[208] = h(208)),
        (e[209] = p(209)),
        (e[210] = _(210)),
        (e[211] = g(211, 8, m)),
        (e[217] = h(217)),
        (e[218] = p(218)),
        (e[219] = _(219)),
        (e[220] = p(220)),
        (e[221] = _(221)),
        (e[222] = p(222)),
        (e[223] = _(223)),
        e
      );
    }
    function h(e) {
      return function (t, n) {
        var r = t.reserve(2),
          a = t.buffer;
        (a[r++] = e), (a[r] = n);
      };
    }
    function p(e) {
      return function (t, n) {
        var r = t.reserve(3),
          a = t.buffer;
        (a[r++] = e), (a[r++] = n >>> 8), (a[r] = n);
      };
    }
    function _(e) {
      return function (t, n) {
        var r = t.reserve(5),
          a = t.buffer;
        (a[r++] = e),
          (a[r++] = n >>> 24),
          (a[r++] = n >>> 16),
          (a[r++] = n >>> 8),
          (a[r] = n);
      };
    }
    function g(e, t, n, r) {
      return function (a, o) {
        var i = a.reserve(t + 1);
        (a.buffer[i++] = e), n.call(a.buffer, o, i, r);
      };
    }
    function v(e, t) {
      new o(this, t, e);
    }
    function m(e, t) {
      new i(this, t, e);
    }
    function b(e, t) {
      r.write(this, e, t, false, 23, 4);
    }
    function y(e, t) {
      r.write(this, e, t, false, 52, 8);
    }
    t.getWriteToken = function (e) {
      return e && e.uint8array
        ? (((t = f())[202] = g(202, 4, b)), (t[203] = g(203, 8, y)), t)
        : c || (l.hasBuffer && e && e.safe)
        ? (function () {
            var e = s.slice();
            return (
              (e[196] = g(196, 1, u.prototype.writeUInt8)),
              (e[197] = g(197, 2, u.prototype.writeUInt16BE)),
              (e[198] = g(198, 4, u.prototype.writeUInt32BE)),
              (e[199] = g(199, 1, u.prototype.writeUInt8)),
              (e[200] = g(200, 2, u.prototype.writeUInt16BE)),
              (e[201] = g(201, 4, u.prototype.writeUInt32BE)),
              (e[202] = g(202, 4, u.prototype.writeFloatBE)),
              (e[203] = g(203, 8, u.prototype.writeDoubleBE)),
              (e[204] = g(204, 1, u.prototype.writeUInt8)),
              (e[205] = g(205, 2, u.prototype.writeUInt16BE)),
              (e[206] = g(206, 4, u.prototype.writeUInt32BE)),
              (e[207] = g(207, 8, v)),
              (e[208] = g(208, 1, u.prototype.writeInt8)),
              (e[209] = g(209, 2, u.prototype.writeInt16BE)),
              (e[210] = g(210, 4, u.prototype.writeInt32BE)),
              (e[211] = g(211, 8, m)),
              (e[217] = g(217, 1, u.prototype.writeUInt8)),
              (e[218] = g(218, 2, u.prototype.writeUInt16BE)),
              (e[219] = g(219, 4, u.prototype.writeUInt32BE)),
              (e[220] = g(220, 2, u.prototype.writeUInt16BE)),
              (e[221] = g(221, 4, u.prototype.writeUInt32BE)),
              (e[222] = g(222, 2, u.prototype.writeUInt16BE)),
              (e[223] = g(223, 4, u.prototype.writeUInt32BE)),
              e
            );
          })()
        : f();
      var t;
    };
  },
  function (e, t, n) {
    t.setExtUnpackers = function (e) {
      e.addExtUnpacker(14, [s, u(Error)]),
        e.addExtUnpacker(1, [s, u(EvalError)]),
        e.addExtUnpacker(2, [s, u(RangeError)]),
        e.addExtUnpacker(3, [s, u(ReferenceError)]),
        e.addExtUnpacker(4, [s, u(SyntaxError)]),
        e.addExtUnpacker(5, [s, u(TypeError)]),
        e.addExtUnpacker(6, [s, u(URIError)]),
        e.addExtUnpacker(10, [s, l]),
        e.addExtUnpacker(11, [s, c(Boolean)]),
        e.addExtUnpacker(12, [s, c(String)]),
        e.addExtUnpacker(13, [s, c(Date)]),
        e.addExtUnpacker(15, [s, c(Number)]),
        "undefined" != typeof Uint8Array &&
          (e.addExtUnpacker(17, c(Int8Array)),
          e.addExtUnpacker(18, c(Uint8Array)),
          e.addExtUnpacker(19, [d, c(Int16Array)]),
          e.addExtUnpacker(20, [d, c(Uint16Array)]),
          e.addExtUnpacker(21, [d, c(Int32Array)]),
          e.addExtUnpacker(22, [d, c(Uint32Array)]),
          e.addExtUnpacker(23, [d, c(Float32Array)]),
          "undefined" != typeof Float64Array &&
            e.addExtUnpacker(24, [d, c(Float64Array)]),
          "undefined" != typeof Uint8ClampedArray &&
            e.addExtUnpacker(25, c(Uint8ClampedArray)),
          e.addExtUnpacker(26, d),
          e.addExtUnpacker(29, [d, c(DataView)]));
      a.hasBuffer && e.addExtUnpacker(27, c(o));
    };
    var r,
      a = n(10),
      o = a.global,
      i = {
        name: 1,
        message: 1,
        stack: 1,
        columnNumber: 1,
        fileName: 1,
        lineNumber: 1,
      };
    function s(e) {
      return r || (r = n(32).decode), r(e);
    }
    function l(e) {
      return RegExp.apply(null, e);
    }
    function u(e) {
      return function (t) {
        var n = new e();
        for (var r in i) n[r] = t[r];
        return n;
      };
    }
    function c(e) {
      return function (t) {
        return new e(t);
      };
    }
    function d(e) {
      return new Uint8Array(e).buffer;
    }
  },
  function (e, t, n) {
    var r = n(34);
    function a(e) {
      var t,
        n = new Array(256);
      for (t = 0; t <= 127; t++) n[t] = o(t);
      for (t = 128; t <= 143; t++) n[t] = s(t - 128, e.map);
      for (t = 144; t <= 159; t++) n[t] = s(t - 144, e.array);
      for (t = 160; t <= 191; t++) n[t] = s(t - 160, e.str);
      for (
        n[192] = o(null),
          n[193] = null,
          n[194] = o(false),
          n[195] = o(true),
          n[196] = i(e.uint8, e.bin),
          n[197] = i(e.uint16, e.bin),
          n[198] = i(e.uint32, e.bin),
          n[199] = i(e.uint8, e.ext),
          n[200] = i(e.uint16, e.ext),
          n[201] = i(e.uint32, e.ext),
          n[202] = e.float32,
          n[203] = e.float64,
          n[204] = e.uint8,
          n[205] = e.uint16,
          n[206] = e.uint32,
          n[207] = e.uint64,
          n[208] = e.int8,
          n[209] = e.int16,
          n[210] = e.int32,
          n[211] = e.int64,
          n[212] = s(1, e.ext),
          n[213] = s(2, e.ext),
          n[214] = s(4, e.ext),
          n[215] = s(8, e.ext),
          n[216] = s(16, e.ext),
          n[217] = i(e.uint8, e.str),
          n[218] = i(e.uint16, e.str),
          n[219] = i(e.uint32, e.str),
          n[220] = i(e.uint16, e.array),
          n[221] = i(e.uint32, e.array),
          n[222] = i(e.uint16, e.map),
          n[223] = i(e.uint32, e.map),
          t = 224;
        t <= 255;
        t++
      )
        n[t] = o(t - 256);
      return n;
    }
    function o(e) {
      return function () {
        return e;
      };
    }
    function i(e, t) {
      return function (n) {
        var r = e(n);
        return t(n, r);
      };
    }
    function s(e, t) {
      return function (n) {
        return t(n, e);
      };
    }
    t.getReadToken = function (e) {
      var t = r.getReadFormat(e);
      return e && e.useraw
        ? (function (e) {
            var t,
              n = a(e).slice();
            for (
              n[217] = n[196], n[218] = n[197], n[219] = n[198], t = 160;
              t <= 191;
              t++
            )
              n[t] = s(t - 160, e.bin);
            return n;
          })(t)
        : a(t);
    };
  },
  function (e, t, n) {
    t.Encoder = o;
    var r = n(35),
      a = n(27).EncodeBuffer;
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      a.call(this, e);
    }
    (o.prototype = new a()),
      r.mixin(o.prototype),
      (o.prototype.encode = function (e) {
        this.write(e), this.emit("data", this.read());
      }),
      (o.prototype.end = function (e) {
        arguments.length && this.encode(e), this.flush(), this.emit("end");
      });
  },
  function (e, t, n) {
    t.Decoder = o;
    var r = n(35),
      a = n(33).DecodeBuffer;
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      a.call(this, e);
    }
    (o.prototype = new a()),
      r.mixin(o.prototype),
      (o.prototype.decode = function (e) {
        arguments.length && this.write(e), this.flush();
      }),
      (o.prototype.push = function (e) {
        this.emit("data", e);
      }),
      (o.prototype.end = function (e) {
        this.decode(e), this.emit("end");
      });
  },
  function (e, t, n) {
    n(24), n(18), (t.createCodec = n(16).createCodec);
  },
  function (e, t, n) {
    n(24), n(18), (t.codec = { preset: n(16).preset });
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: true,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: true,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {},
]);