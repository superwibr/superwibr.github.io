!async function () {
    document.title = "EXE - By Tikup#8555";
    document.querySelector("#play-button")?.click();
    await new Promise(res => setTimeout(res, 2000));

    //
    // Preliminary Routines
    //

    // get msgpackr
    !function (e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).msgpackr = {}) }(this, function (e) { "use strict"; try { $ = new TextDecoder } catch (t) { } var $, r, n, i, s, f, u, l, o, a = 0, c = {}, x = 0, d = 0, h = [], _ = { useRecords: !1, mapsAsObjects: !0 }; class p { } let g = new p; g.name = "MessagePack 0xC1"; var y = !1, w = 2; try { Function("") } catch (b) { w = 1 / 0 } class m { constructor(e) { e && (!1 === e.useRecords && void 0 === e.mapsAsObjects && (e.mapsAsObjects = !0), !e.sequential || !1 === e.trusted || (e.trusted = !0, e.structures || !1 == e.useRecords || (e.structures = [], e.maxSharedStructures || (e.maxSharedStructures = 0))), e.structures ? e.structures.sharedLength = e.structures.length : e.getStructures && ((e.structures = []).uninitialized = !0, e.structures.sharedLength = 0), e.int64AsNumber && (e.int64AsType = "number")), Object.assign(this, e) } unpack(e, t) { if (r) return J(() => (G(), this ? this.unpack(e, t) : m.prototype.unpack.call(_, e, t))); "object" == typeof t ? (n = t.end || e.length, a = t.start || 0) : (a = 0, n = t > -1 ? t : e.length), d = 0, s = null, f = null, r = e; try { l = e.dataView || (e.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)) } catch ($) { if (r = null, e instanceof Uint8Array) throw $; throw Error("Source must be a Uint8Array or Buffer but was a " + (e && "object" == typeof e ? e.constructor.name : typeof e)) } return this instanceof m ? (c = this, this.structures ? i = this.structures : (!i || i.length > 0) && (i = [])) : (c = _, (!i || i.length > 0) && (i = [])), S(t) } unpackMultiple(e, t) { let $, r = 0; try { y = !0; let n = e.length, i = this ? this.unpack(e, n) : Q.unpack(e, n); if (t) { if (!1 === t(i)) return; for (; a < n;)if (r = a, !1 === t(S())) return } else { for ($ = [i]; a < n;)r = a, $.push(S()); return $ } } catch (s) { throw s.lastPosition = r, s.values = $, s } finally { y = !1, G() } } _mergeStructures(e, t) { Object.isFrozen(e = e || []) && (e = e.map(e => e.slice(0))); for (let $ = 0, r = e.length; $ < r; $++) { let n = e[$]; n && (n.isShared = !0, $ >= 32 && (n.highByte = $ - 32 >> 5)) } for (let i in e.sharedLength = e.length, t || []) if (i >= 0) { let s = e[i], f = t[i]; f && (s && ((e.restoreStructures || (e.restoreStructures = []))[i] = s), e[i] = f) } return this.structures = e } decode(e, t) { return this.unpack(e, t) } } function S(e) { try { if (!c.trusted && !y) { let t = i.sharedLength || 0; t < i.length && (i.length = t) } let $; if (c.randomAccessStructure && r[a] < 64 && r[a] >= 32 && o ? ($ = o(r, a, n, c), r = null, !(e && e.lazy) && $ && ($ = $.toJSON()), a = n) : $ = k(), f && (a = f.postBundlePosition, f = null), a == n) i && i.restoreStructures && U(), i = null, r = null, u && (u = null); else if (a > n) throw Error("Unexpected end of MessagePack data"); else if (!y) throw Error("Data read, but end of buffer not reached " + JSON.stringify($).slice(0, 100)); return $ } catch (s) { throw i && i.restoreStructures && U(), G(), (s instanceof RangeError || s.message.startsWith("Unexpected end of buffer") || a > n) && (s.incomplete = !0), s } } function U() { for (let e in i.restoreStructures) i[e] = i.restoreStructures[e]; i.restoreStructures = null } function k() { let e = r[a++]; if (e < 160) { if (e < 128) { if (e < 64) return e; { let t = i[63 & e] || c.getStructures && O()[63 & e]; return t ? (t.read || (t.read = A(t, 63 & e)), t.read()) : e } } if (e < 144) { if (e -= 128, c.mapsAsObjects) { let $ = {}; for (let u = 0; u < e; u++) { let o = W(); "__proto__" === o && (o = "__proto_"), $[o] = k() } return $ } { let _ = new Map; for (let p = 0; p < e; p++)_.set(k(), k()); return _ } } { let y = Array(e -= 144); for (let w = 0; w < e; w++)y[w] = k(); return c.freezeData ? Object.freeze(y) : y } } if (e < 192) { let b = e - 160; if (d >= a) return s.slice(a - x, (a += b) - x); if (0 == d && n < 140) { let m = b < 16 ? R(b) : E(b); if (null != m) return m } return T(b) } { let S; switch (e) { case 192: return null; case 193: if (f) { if ((S = k()) > 0) return f[1].slice(f.position1, f.position1 += S); return f[0].slice(f.position0, f.position0 -= S) } return g; case 194: return !1; case 195: return !0; case 196: if (void 0 === (S = r[a++])) throw Error("Unexpected end of buffer"); return j(S); case 197: return S = l.getUint16(a), a += 2, j(S); case 198: return S = l.getUint32(a), a += 4, j(S); case 199: return N(r[a++]); case 200: return S = l.getUint16(a), a += 2, N(S); case 201: return S = l.getUint32(a), a += 4, N(S); case 202: if (S = l.getFloat32(a), c.useFloat32 > 2) { let U = H[(127 & r[a]) << 1 | r[a + 1] >> 7]; return a += 4, (U * S + (S > 0 ? .5 : -.5) >> 0) / U } return a += 4, S; case 203: return S = l.getFloat64(a), a += 8, S; case 204: return r[a++]; case 205: return S = l.getUint16(a), a += 2, S; case 206: return S = l.getUint32(a), a += 4, S; case 207: return "number" === c.int64AsType ? (S = 4294967296 * l.getUint32(a), S += l.getUint32(a + 4)) : S = "string" === c.int64AsType ? l.getBigUint64(a).toString() : l.getBigUint64(a), a += 8, S; case 208: return l.getInt8(a++); case 209: return S = l.getInt16(a), a += 2, S; case 210: return S = l.getInt32(a), a += 4, S; case 211: return "number" === c.int64AsType ? (S = 4294967296 * l.getInt32(a), S += l.getUint32(a + 4)) : S = "string" === c.int64AsType ? l.getBigInt64(a).toString() : l.getBigInt64(a), a += 8, S; case 212: if (114 == (S = r[a++])) return q(63 & r[a++]); { let I = h[S]; if (I) { if (I.read) return a++, I.read(k()); if (I.noBuffer) return a++, I(); return I(r.subarray(a, ++a)) } throw Error("Unknown extension " + S) } case 213: if (114 == (S = r[a])) return a++, q(63 & r[a++], r[a++]); return N(2); case 214: return N(4); case 215: return N(8); case 216: return N(16); case 217: if (S = r[a++], d >= a) return s.slice(a - x, (a += S) - x); return B(S); case 218: if (S = l.getUint16(a), d >= (a += 2)) return s.slice(a - x, (a += S) - x); return F(S); case 219: if (S = l.getUint32(a), d >= (a += 4)) return s.slice(a - x, (a += S) - x); return L(S); case 220: return S = l.getUint16(a), a += 2, z(S); case 221: return S = l.getUint32(a), a += 4, z(S); case 222: return S = l.getUint16(a), a += 2, M(S); case 223: return S = l.getUint32(a), a += 4, M(S); default: if (e >= 224) return e - 256; if (void 0 === e) { let v = Error("Unexpected end of MessagePack data"); throw v.incomplete = !0, v } throw Error("Unknown MessagePack token " + e) } } } let I = /^[a-zA-Z_$][a-zA-Z\d_$]*$/; function A(e, t) { function $() { if ($.count++ > w) { let r = e.read = Function("r", "return function(){return " + (c.freezeData ? "Object.freeze" : "") + "({" + e.map(e => "__proto__" === e ? "__proto_:r()" : I.test(e) ? e + ":r()" : "[" + JSON.stringify(e) + "]:r()").join(",") + "})}")(k); return 0 === e.highByte && (e.read = v(t, e.read)), r() } let n = {}; for (let i = 0, s = e.length; i < s; i++) { let f = e[i]; "__proto__" === f && (f = "__proto_"), n[f] = k() } return c.freezeData ? Object.freeze(n) : n } return ($.count = 0, 0 === e.highByte) ? v(t, $) : $ } let v = (e, t) => function () { let $ = r[a++]; if (0 === $) return t(); let n = e < 32 ? -(e + ($ << 5)) : e + ($ << 5), s = i[n] || O()[n]; if (!s) throw Error("Record id is not defined for " + n); return s.read || (s.read = A(s, e)), s.read() }; function O() { let e = J(() => (r = null, c.getStructures())); return i = c._mergeStructures(e, i) } var T = P, B = P, F = P, L = P; function P(e) { let t; if (e < 16 && (t = R(e))) return t; if (e > 64 && $) return $.decode(r.subarray(a, a += e)); let n = a + e, i = []; for (t = ""; a < n;) { let s = r[a++]; if ((128 & s) == 0) i.push(s); else if ((224 & s) == 192) { let f = 63 & r[a++]; i.push((31 & s) << 6 | f) } else if ((240 & s) == 224) { let u = 63 & r[a++], l = 63 & r[a++]; i.push((31 & s) << 12 | u << 6 | l) } else if ((248 & s) == 240) { let o = 63 & r[a++], c = 63 & r[a++], x = 63 & r[a++], d = (7 & s) << 18 | o << 12 | c << 6 | x; d > 65535 && (d -= 65536, i.push(d >>> 10 & 1023 | 55296), d = 56320 | 1023 & d), i.push(d) } else i.push(s); i.length >= 4096 && (t += C.apply(String, i), i.length = 0) } return i.length > 0 && (t += C.apply(String, i)), t } function z(e) { let t = Array(e); for (let $ = 0; $ < e; $++)t[$] = k(); return c.freezeData ? Object.freeze(t) : t } function M(e) { if (c.mapsAsObjects) { let t = {}; for (let $ = 0; $ < e; $++) { let r = W(); "__proto__" === r && (r = "__proto_"), t[r] = k() } return t } { let n = new Map; for (let i = 0; i < e; i++)n.set(k(), k()); return n } } var C = String.fromCharCode; function E(e) { let t = a, $ = Array(e); for (let n = 0; n < e; n++) { let i = r[a++]; if ((128 & i) > 0) { a = t; return } $[n] = i } return C.apply(String, $) } function R(e) { if (e < 4) { if (e < 2) { if (0 === e) return ""; { let t = r[a++]; if ((128 & t) > 1) { a -= 1; return } return C(t) } } { let $ = r[a++], n = r[a++]; if ((128 & $) > 0 || (128 & n) > 0) { a -= 2; return } if (e < 3) return C($, n); let i = r[a++]; if ((128 & i) > 0) { a -= 3; return } return C($, n, i) } } { let s = r[a++], f = r[a++], u = r[a++], l = r[a++]; if ((128 & s) > 0 || (128 & f) > 0 || (128 & u) > 0 || (128 & l) > 0) { a -= 4; return } if (e < 6) { if (4 === e) return C(s, f, u, l); { let o = r[a++]; if ((128 & o) > 0) { a -= 5; return } return C(s, f, u, l, o) } } if (e < 8) { let c = r[a++], x = r[a++]; if ((128 & c) > 0 || (128 & x) > 0) { a -= 6; return } if (e < 7) return C(s, f, u, l, c, x); let d = r[a++]; if ((128 & d) > 0) { a -= 7; return } return C(s, f, u, l, c, x, d) } { let h = r[a++], _ = r[a++], p = r[a++], g = r[a++]; if ((128 & h) > 0 || (128 & _) > 0 || (128 & p) > 0 || (128 & g) > 0) { a -= 8; return } if (e < 10) { if (8 === e) return C(s, f, u, l, h, _, p, g); { let y = r[a++]; if ((128 & y) > 0) { a -= 9; return } return C(s, f, u, l, h, _, p, g, y) } } if (e < 12) { let w = r[a++], b = r[a++]; if ((128 & w) > 0 || (128 & b) > 0) { a -= 10; return } if (e < 11) return C(s, f, u, l, h, _, p, g, w, b); let m = r[a++]; if ((128 & m) > 0) { a -= 11; return } return C(s, f, u, l, h, _, p, g, w, b, m) } { let S = r[a++], U = r[a++], k = r[a++], I = r[a++]; if ((128 & S) > 0 || (128 & U) > 0 || (128 & k) > 0 || (128 & I) > 0) { a -= 12; return } if (e < 14) { if (12 === e) return C(s, f, u, l, h, _, p, g, S, U, k, I); { let A = r[a++]; if ((128 & A) > 0) { a -= 13; return } return C(s, f, u, l, h, _, p, g, S, U, k, I, A) } } { let v = r[a++], O = r[a++]; if ((128 & v) > 0 || (128 & O) > 0) { a -= 14; return } if (e < 15) return C(s, f, u, l, h, _, p, g, S, U, k, I, v, O); let T = r[a++]; if ((128 & T) > 0) { a -= 15; return } return C(s, f, u, l, h, _, p, g, S, U, k, I, v, O, T) } } } } } function D() { let e = r[a++], t; if (e < 192) t = e - 160; else switch (e) { case 217: t = r[a++]; break; case 218: t = l.getUint16(a), a += 2; break; case 219: t = l.getUint32(a), a += 4; break; default: throw Error("Expected string") }return P(t) } function j(e) { return c.copyBuffers ? Uint8Array.prototype.slice.call(r, a, a += e) : r.subarray(a, a += e) } function N(e) { let t = r[a++]; if (h[t]) { let $; return h[t](r.subarray(a, $ = a += e), e => { a = e; try { return k() } finally { a = $ } }) } throw Error("Unknown extension type " + t) } var V = Array(4096); function W() { let e = r[a++]; if (!(e >= 160) || !(e < 192)) return a--, k().toString(); if (e -= 160, d >= a) return s.slice(a - x, (a += e) - x); if (!(0 == d && n < 180)) return T(e); let t = (e << 5 ^ (e > 1 ? l.getUint16(a) : e > 0 ? r[a] : 0)) & 4095, $ = V[t], i = a, f = a + e - 3, u, o = 0; if ($ && $.bytes == e) { for (; i < f;) { if ((u = l.getUint32(i)) != $[o++]) { i = 1879048192; break } i += 4 } for (f += 3; i < f;)if ((u = r[i++]) != $[o++]) { i = 1879048192; break } if (i === f) return a = i, $.string; f -= 3, i = a } for ($ = [], V[t] = $, $.bytes = e; i < f;)u = l.getUint32(i), $.push(u), i += 4; for (f += 3; i < f;)u = r[i++], $.push(u); let c = e < 16 ? R(e) : E(e); return null != c ? $.string = c : $.string = T(e) } let q = (e, t) => { let $ = k().map(e => e.toString()), r = e; void 0 !== t && (e = e < 32 ? -((t << 5) + e) : (t << 5) + e, $.highByte = t); let n = i[e]; return n && n.isShared && ((i.restoreStructures || (i.restoreStructures = []))[e] = n), i[e] = $, $.read = A($, r), $.read() }; h[0] = () => { }, h[0].noBuffer = !0, h[101] = () => { let e = k(); return (globalThis[e[0]] || Error)(e[1]) }, h[105] = e => { let t = l.getUint32(a - 4); u || (u = new Map); let $ = r[a], n; n = $ >= 144 && $ < 160 || 220 == $ || 221 == $ ? [] : {}; let i = { target: n }; u.set(t, i); let s = k(); return i.used ? Object.assign(n, s) : (i.target = s, s) }, h[112] = e => { let t = l.getUint32(a - 4), $ = u.get(t); return $.used = !0, $.target }, h[115] = () => new Set(k()); let Y = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map(e => e + "Array"); h[116] = e => { let t = e[0], $ = Y[t]; if (!$) throw Error("Could not find typed array for code " + t); return new globalThis[$](Uint8Array.prototype.slice.call(e, 1).buffer) }, h[120] = () => { let e = k(); return RegExp(e[0], e[1]) }; let Z = []; function J(e) { let t = n, $ = a, o = x, h = d, _ = s, p = u, g = f, w = new Uint8Array(r.slice(0, n)), b = i, m = i.slice(0, i.length), S = c, U = y, k = e(); return n = t, a = $, x = o, d = h, s = _, u = p, f = g, r = w, y = U, (i = b).splice(0, i.length, ...m), c = S, l = new DataView(r.buffer, r.byteOffset, r.byteLength), k } function G() { r = null, u = null, i = null } h[98] = e => { let t = (e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3], $ = a; return a += t - e.length, f = Z, (f = [D(), D()]).position0 = 0, f.position1 = 0, f.postBundlePosition = a, a = $, k() }, h[255] = e => 4 == e.length ? new Date((16777216 * e[0] + (e[1] << 16) + (e[2] << 8) + e[3]) * 1e3) : 8 == e.length ? new Date(((e[0] << 22) + (e[1] << 14) + (e[2] << 6) + (e[3] >> 2)) / 1e6 + ((3 & e[3]) * 4294967296 + 16777216 * e[4] + (e[5] << 16) + (e[6] << 8) + e[7]) * 1e3) : 12 == e.length ? new Date(((e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3]) / 1e6 + ((128 & e[4] ? -281474976710656 : 0) + 1099511627776 * e[6] + 4294967296 * e[7] + 16777216 * e[8] + (e[9] << 16) + (e[10] << 8) + e[11]) * 1e3) : new Date("invalid"); let H = Array(147); for (let K = 0; K < 256; K++)H[K] = +("1e" + Math.floor(45.15 - .30103 * K)); var Q = new m({ useRecords: !1 }); let X = Q.unpack, ee = Q.unpackMultiple, et = Q.unpack, e$ = { NEVER: 0, ALWAYS: 1, DECIMAL_ROUND: 3, DECIMAL_FIT: 4 }, er = new Float32Array(1), en = new Uint8Array(er.buffer, 0, 4), ei; try { ei = new TextEncoder } catch (es) { } let ef, eu, el = "undefined" != typeof Buffer, eo = el ? function (e) { return Buffer.allocUnsafeSlow(e) } : Uint8Array, ea = el ? Buffer : Uint8Array, ec = el ? 4294967296 : 2144337920, ex, ed, eh, e_ = 0, ep, eg = null, ey, e0 = /[\u0080-\uFFFF]/, e1 = Symbol("record-id"); class e2 extends m { constructor(e) { super(e), this.offset = 0; let t, $, r, n, i = ea.prototype.utf8Write ? function (e, t) { return ex.utf8Write(e, t, 4294967295) } : !!ei && !!ei.encodeInto && function (e, t) { return ei.encodeInto(e, ex.subarray(t)).written }, s = this; e || (e = {}); let f = e && e.sequential, u = e.structures || e.saveStructures, l = e.maxSharedStructures; if (null == l && (l = u ? 32 : 0), l > 8160) throw Error("Maximum maxSharedStructure is 8160"); e.structuredClone && void 0 == e.moreTypes && (this.moreTypes = !0); let o = e.maxOwnStructures; null == o && (o = u ? 32 : 64), this.structures || !1 == e.useRecords || (this.structures = []); let a = l > 32 || o + l > 64, c = l + 64, x = l + o + 64; if (x > 8256) throw Error("Maximum maxSharedStructure + maxOwnStructure is 8192"); let d = [], h = 0, _ = 0; this.pack = this.encode = function (e, i) { if (ex || (eh = (ex = new eo(8192)).dataView || (ex.dataView = new DataView(ex.buffer, 0, 8192)), e_ = 0), (ep = ex.length - 10) - e_ < 2048 ? (eh = (ex = new eo(ex.length)).dataView || (ex.dataView = new DataView(ex.buffer, 0, ex.length)), ep = ex.length - 10, e_ = 0) : e_ = e_ + 7 & 2147483640, t = e_, n = s.structuredClone ? new Map : null, s.bundleStrings && "string" != typeof e ? (eg = []).size = 1 / 0 : eg = null, r = s.structures) { r.uninitialized && (r = s._mergeStructures(s.getStructures())); let u = r.sharedLength || 0; if (u > l) throw Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + r.sharedLength); if (!r.transitions) { r.transitions = Object.create(null); for (let o = 0; o < u; o++) { let a = r[o]; if (!a) continue; let c, x = r.transitions; for (let p = 0, y = a.length; p < y; p++) { let b = a[p]; (c = x[b]) || (c = x[b] = Object.create(null)), x = c } x[e1] = o + 64 } this.lastNamedStructuresLength = u } f || (r.nextId = u + 64) } $ && ($ = !1); try { s.randomAccessStructure && e.constructor && e.constructor === Object ? S(e) : g(e); let m = eg; if (eg && eb(t, g, 0), n && n.idsToInsert) { let U = n.idsToInsert.sort((e, t) => e.offset > t.offset ? 1 : -1), k = U.length, I = -1; for (; m && k > 0;) { let A = U[--k].offset + t; A < m.stringsPosition + t && -1 === I && (I = 0), A > m.position + t ? I >= 0 && (I += 6) : (I >= 0 && (eh.setUint32(m.position + t, eh.getUint32(m.position + t) + I), I = -1), m = m.previous, k++) } I >= 0 && m && eh.setUint32(m.position + t, eh.getUint32(m.position + t) + I), (e_ += 6 * U.length) > ep && w(e_), s.offset = e_; let v = function e(t, $) { let r, n = 6 * $.length, i = t.length - n; for (; r = $.pop();) { let s = r.offset, f = r.id; t.copyWithin(s + n, s, i); let u = s + (n -= 6); t[u++] = 214, t[u++] = 105, t[u++] = f >> 24, t[u++] = f >> 16 & 255, t[u++] = f >> 8 & 255, t[u++] = 255 & f, i = s } return t }(ex.subarray(t, e_), U); return n = null, v } if (s.offset = e_, i & eA) return ex.start = t, ex.end = e_, ex; return ex.subarray(t, e_) } finally { if (r) { _ < 10 && _++; let O = r.sharedLength || 0; if (r.length > O && (r.length = O), h > 1e4) r.transitions = null, _ = 0, h = 0, d.length > 0 && (d = []); else if (d.length > 0 && !f) { for (let T = 0, B = d.length; T < B; T++)d[T][e1] = 0; d = [] } if ($ && s.saveStructures) { var F, L; let P = ex.subarray(t, e_), z = (F = r, L = s, F.isCompatible = e => { let t = !e || (L.lastNamedStructuresLength || 0) === e.length; return t || L._mergeStructures(e), t }, F); if (!1 === s.saveStructures(z, z.isCompatible)) return s.pack(e); return s.lastNamedStructuresLength = O, P } } i & ev && (e_ = t) } }; let p = e => { var t = e.length; t < 16 ? ex[e_++] = 144 | t : t < 65536 ? (ex[e_++] = 220, ex[e_++] = t >> 8, ex[e_++] = 255 & t) : (ex[e_++] = 221, eh.setUint32(e_, t), e_ += 4); for (let $ = 0; $ < t; $++)g(e[$]) }, g = e => { e_ > ep && (ex = w(e_)); var $, r = typeof e; if ("string" === r) { let s = e.length; if (eg && s >= 4 && s < 4096) { if ((eg.size += s) > 61440) { let f, u = (eg[0] ? 3 * eg[0].length + eg[1].length : 0) + 10; e_ + u > ep && (ex = w(e_ + u)); let l; eg.position ? (l = eg, ex[e_] = 200, e_ += 3, ex[e_++] = 98, f = e_ - t, e_ += 4, eb(t, g, 0), eh.setUint16(f + t - 3, e_ - t - f)) : (ex[e_++] = 214, ex[e_++] = 98, f = e_ - t, e_ += 4), (eg = ["", ""]).previous = l, eg.size = 0, eg.position = f } let o = e0.test(e); eg[o ? 0 : 1] += e, ex[e_++] = 193, g(o ? -s : s); return } let a; a = s < 32 ? 1 : s < 256 ? 2 : s < 65536 ? 3 : 5; let c = 3 * s; if (e_ + c > ep && (ex = w(e_ + c)), s < 64 || !i) { let x, d, h, _ = e_ + a; for (x = 0; x < s; x++)(d = e.charCodeAt(x)) < 128 ? ex[_++] = d : d < 2048 ? (ex[_++] = d >> 6 | 192, ex[_++] = 63 & d | 128) : (64512 & d) == 55296 && (64512 & (h = e.charCodeAt(x + 1))) == 56320 ? (d = 65536 + ((1023 & d) << 10) + (1023 & h), x++, ex[_++] = d >> 18 | 240, ex[_++] = d >> 12 & 63 | 128, ex[_++] = d >> 6 & 63 | 128, ex[_++] = 63 & d | 128) : (ex[_++] = d >> 12 | 224, ex[_++] = d >> 6 & 63 | 128, ex[_++] = 63 & d | 128); $ = _ - e_ - a } else $ = i(e, e_ + a); $ < 32 ? ex[e_++] = 160 | $ : $ < 256 ? (a < 2 && ex.copyWithin(e_ + 2, e_ + 1, e_ + 1 + $), ex[e_++] = 217, ex[e_++] = $) : $ < 65536 ? (a < 3 && ex.copyWithin(e_ + 3, e_ + 2, e_ + 2 + $), ex[e_++] = 218, ex[e_++] = $ >> 8, ex[e_++] = 255 & $) : (a < 5 && ex.copyWithin(e_ + 5, e_ + 3, e_ + 3 + $), ex[e_++] = 219, eh.setUint32(e_, $), e_ += 4), e_ += $ } else if ("number" === r) { if (e >>> 0 === e) e < 32 || e < 128 && !1 === this.useRecords || e < 64 && !this.randomAccessStructure ? ex[e_++] = e : e < 256 ? (ex[e_++] = 204, ex[e_++] = e) : e < 65536 ? (ex[e_++] = 205, ex[e_++] = e >> 8, ex[e_++] = 255 & e) : (ex[e_++] = 206, eh.setUint32(e_, e), e_ += 4); else if (e >> 0 === e) e >= -32 ? ex[e_++] = 256 + e : e >= -128 ? (ex[e_++] = 208, ex[e_++] = e + 256) : e >= -32768 ? (ex[e_++] = 209, eh.setInt16(e_, e), e_ += 2) : (ex[e_++] = 210, eh.setInt32(e_, e), e_ += 4); else { let b; if ((b = this.useFloat32) > 0 && e < 4294967296 && e >= -2147483648) { ex[e_++] = 202, eh.setFloat32(e_, e); let m; if (b < 4 || (m = e * H[(127 & ex[e_]) << 1 | ex[e_ + 1] >> 7]) >> 0 === m) { e_ += 4; return } e_-- } ex[e_++] = 203, eh.setFloat64(e_, e), e_ += 8 } } else if ("object" === r) { if (e) { if (n) { let S = n.get(e); if (S) { if (!S.id) { let U = n.idsToInsert || (n.idsToInsert = []); S.id = U.push(S) } ex[e_++] = 214, ex[e_++] = 112, eh.setUint32(e_, S.id), e_ += 4; return } n.set(e, { offset: e_ - t }) } let k = e.constructor; if (k === Object) y(e, !0); else if (k === Array) p(e); else if (k === Map) for (let [I, A] of (($ = e.size) < 16 ? ex[e_++] = 128 | $ : $ < 65536 ? (ex[e_++] = 222, ex[e_++] = $ >> 8, ex[e_++] = 255 & $) : (ex[e_++] = 223, eh.setUint32(e_, $), e_ += 4), e)) g(I), g(A); else { for (let v = 0, O = ef.length; v < O; v++)if (e instanceof eu[v]) { let T = ef[v]; if (T.write) { T.type && (ex[e_++] = 212, ex[e_++] = T.type, ex[e_++] = 0); let B = T.write.call(this, e); B === e ? Array.isArray(e) ? p(e) : y(e) : g(B); return } let F = ex, L = eh, P = e_; ex = null; let z; try { z = T.pack.call(this, e, e => (ex = F, F = null, (e_ += e) > ep && w(e_), { target: ex, targetView: eh, position: e_ - e }), g) } finally { F && (ex = F, eh = L, e_ = P, ep = ex.length - 10) } z && (z.length + e_ > ep && w(z.length + e_), e_ = ew(z, ex, e_, T.type)); return } Array.isArray(e) ? p(e) : y(e, !e.hasOwnProperty) } } else ex[e_++] = 192 } else if ("boolean" === r) ex[e_++] = e ? 195 : 194; else if ("bigint" === r) { if (e < BigInt(1) << BigInt(63) && e >= -(BigInt(1) << BigInt(63))) ex[e_++] = 211, eh.setBigInt64(e_, e); else if (e < BigInt(1) << BigInt(64) && e > 0) ex[e_++] = 207, eh.setBigUint64(e_, e); else if (this.largeBigIntToFloat) ex[e_++] = 203, eh.setFloat64(e_, Number(e)); else throw RangeError(e + " was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64"); e_ += 8 } else if ("undefined" === r) this.encodeUndefinedAsNil ? ex[e_++] = 192 : (ex[e_++] = 212, ex[e_++] = 0, ex[e_++] = 0); else if ("function" === r) g(this.writeFunction && this.writeFunction()); else throw Error("Unknown type: " + r) }, y = !1 === this.useRecords ? this.variableMapSize ? e => { let t = Object.keys(e), $ = t.length; $ < 16 ? ex[e_++] = 128 | $ : $ < 65536 ? (ex[e_++] = 222, ex[e_++] = $ >> 8, ex[e_++] = 255 & $) : (ex[e_++] = 223, eh.setUint32(e_, $), e_ += 4); let r; for (let n = 0; n < $; n++)g(r = t[n]), g(e[r]) } : (e, $) => { ex[e_++] = 222; let r = e_ - t; e_ += 2; let n = 0; for (let i in e) ($ || e.hasOwnProperty(i)) && (g(i), g(e[i]), n++); ex[r++ + t] = n >> 8, ex[r + t] = 255 & n } : e.progressiveRecords && !a ? (e, $) => { let n, i = r.transitions || (r.transitions = Object.create(null)), s = e_++ - t, f; for (let u in e) if ($ || e.hasOwnProperty(u)) { if (n = i[u]) i = n; else { let l = Object.keys(e), o = i; i = r.transitions; let a = 0; for (let c = 0, x = l.length; c < x; c++) { let d = l[c]; !(n = i[d]) && (n = i[d] = Object.create(null), a++), i = n } s + t + 1 == e_ ? (e_--, b(i, l, a)) : m(i, l, s, a), f = !0, i = o[u] } g(e[u]) } if (!f) { let h = i[e1]; h ? ex[s + t] = h : m(i, Object.keys(e), s, 0) } } : (e, t) => { let $, n = r.transitions || (r.transitions = Object.create(null)), i = 0; for (let s in e) (t || e.hasOwnProperty(s)) && (!($ = n[s]) && ($ = n[s] = Object.create(null), i++), n = $); let f = n[e1]; for (let u in f ? f >= 96 && a ? (ex[e_++] = (31 & (f -= 96)) + 96, ex[e_++] = f >> 5) : ex[e_++] = f : b(n, n.__keys__ || Object.keys(e), i), e) (t || e.hasOwnProperty(u)) && g(e[u]) }, w = e => { let $; if (e > 16777216) { if (e - t > ec) throw Error("Packed buffer would be larger than maximum buffer size"); $ = Math.min(ec, 4096 * Math.round(Math.max((e - t) * (e > 67108864 ? 1.25 : 2), 4194304) / 4096)) } else $ = (Math.max(e - t << 2, ex.length - 1) >> 12) + 1 << 12; let r = new eo($); return eh = r.dataView || (r.dataView = new DataView(r.buffer, 0, $)), e = Math.min(e, ex.length), ex.copy ? ex.copy(r, 0, t, e) : r.set(ex.slice(t, e)), e_ -= t, t = 0, ep = r.length - 10, ex = r }, b = (e, t, n) => { let i = r.nextId; i || (i = 64), i < c && this.shouldShareStructure && !this.shouldShareStructure(t) ? ((i = r.nextOwnId) < x || (i = c), r.nextOwnId = i + 1) : (i >= x && (i = c), r.nextId = i + 1); let s = t.highByte = i >= 96 && a ? i - 96 >> 5 : -1; e[e1] = i, e.__keys__ = t, r[i - 64] = t, i < c ? (t.isShared = !0, r.sharedLength = i - 63, $ = !0, s >= 0 ? (ex[e_++] = (31 & i) + 96, ex[e_++] = s) : ex[e_++] = i) : (s >= 0 ? (ex[e_++] = 213, ex[e_++] = 114, ex[e_++] = (31 & i) + 96, ex[e_++] = s) : (ex[e_++] = 212, ex[e_++] = 114, ex[e_++] = i), n && (h += _ * n), d.length >= o && (d.shift()[e1] = 0), d.push(e), g(t)) }, m = (e, $, r, n) => { let i = ex, s = e_, f = ep, u = t; ex = ed, e_ = 0, t = 0, ex || (ed = ex = new eo(8192)), ep = ex.length - 10, b(e, $, n), ed = ex; let l = e_; if (ex = i, e_ = s, ep = f, t = u, l > 1) { let o = e_ + l - 1; o > ep && w(o); let a = r + t; ex.copyWithin(a + l, a + 1, e_), ex.set(ed.slice(0, l), a), e_ = o } else ex[r + t] = ed[0] }, S = (e, t) => { let n = ey(e, ex, e_, r, w, (e, t, r) => { if (r) return $ = !0; e_ = t; let n = ex; return (g(e), n !== ex) ? { position: e_, targetView: eh, target: ex } : e_ }, this); if (0 === n) return y(e, !0); e_ = n } } useBuffer(e) { ex = e, eh = new DataView(ex.buffer, ex.byteOffset, ex.byteLength), e_ = 0 } clearSharedData() { this.structures && (this.structures = []), this.typedStructs && (this.typedStructs = []) } } function e6(e, t, $, r) { let n = e.byteLength; if (n + 1 < 256) { var { target: i, position: s } = $(4 + n); i[s++] = 199, i[s++] = n + 1 } else if (n + 1 < 65536) { var { target: i, position: s } = $(5 + n); i[s++] = 200, i[s++] = n + 1 >> 8, i[s++] = n + 1 & 255 } else { var { target: i, position: s, targetView: f } = $(7 + n); i[s++] = 201, f.setUint32(s, n + 1), s += 4 } i[s++] = 116, i[s++] = t, i.set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), s) } function e4(e, t) { let $ = e.byteLength; if ($ < 256) { var r, n, { target: r, position: n } = t($ + 2); r[n++] = 196, r[n++] = $ } else if ($ < 65536) { var { target: r, position: n } = t($ + 3); r[n++] = 197, r[n++] = $ >> 8, r[n++] = 255 & $ } else { var { target: r, position: n, targetView: i } = t($ + 5); r[n++] = 198, i.setUint32(n, $), n += 4 } r.set(e, n) } function ew(e, t, $, r) { let n = e.length; switch (n) { case 1: t[$++] = 212; break; case 2: t[$++] = 213; break; case 4: t[$++] = 214; break; case 8: t[$++] = 215; break; case 16: t[$++] = 216; break; default: n < 256 ? (t[$++] = 199, t[$++] = n) : n < 65536 ? (t[$++] = 200, t[$++] = n >> 8, t[$++] = 255 & n) : (t[$++] = 201, t[$++] = n >> 24, t[$++] = n >> 16 & 255, t[$++] = n >> 8 & 255, t[$++] = 255 & n) }return t[$++] = r, t.set(e, $), $ += n } function eb(e, t, $) { if (eg.length > 0) { eh.setUint32(eg.position + e, e_ + $ - eg.position - e), eg.stringsPosition = e_ - e; let r = eg; eg = null, t(r[0]), t(r[1]) } } eu = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, p], ef = [{ pack(e, t, $) { let r = e.getTime() / 1e3; if ((this.useTimestamp32 || 0 === e.getMilliseconds()) && r >= 0 && r < 4294967296) { let { target: n, targetView: i, position: s } = t(6); n[s++] = 214, n[s++] = 255, i.setUint32(s, r) } else if (r > 0 && r < 4294967296) { let { target: f, targetView: u, position: l } = t(10); f[l++] = 215, f[l++] = 255, u.setUint32(l, 4e6 * e.getMilliseconds() + (r / 1e3 / 4294967296 >> 0)), u.setUint32(l + 4, r) } else if (isNaN(r)) { if (this.onInvalidDate) return t(0), $(this.onInvalidDate()); let { target: o, targetView: a, position: c } = t(3); o[c++] = 212, o[c++] = 255, o[c++] = 255 } else { let { target: x, targetView: d, position: h } = t(15); x[h++] = 199, x[h++] = 12, x[h++] = 255, d.setUint32(h, 1e6 * e.getMilliseconds()), d.setBigInt64(h + 4, BigInt(Math.floor(r))) } } }, { pack(e, t, $) { let r = Array.from(e), { target: n, position: i } = t(this.moreTypes ? 3 : 0); this.moreTypes && (n[i++] = 212, n[i++] = 115, n[i++] = 0), $(r) } }, { pack(e, t, $) { let { target: r, position: n } = t(this.moreTypes ? 3 : 0); this.moreTypes && (r[n++] = 212, r[n++] = 101, r[n++] = 0), $([e.name, e.message]) } }, { pack(e, t, $) { let { target: r, position: n } = t(this.moreTypes ? 3 : 0); this.moreTypes && (r[n++] = 212, r[n++] = 120, r[n++] = 0), $([e.source, e.flags]) } }, { pack(e, t) { this.moreTypes ? e6(e, 16, t) : e4(el ? Buffer.from(e) : new Uint8Array(e), t) } }, { pack(e, t) { let $ = e.constructor; $ !== ea && this.moreTypes ? e6(e, Y.indexOf($.name), t) : e4(e, t) } }, { pack(e, t) { let { target: $, position: r } = t(1); $[r] = 193 } }]; let em = new e2({ useRecords: !1 }), eS = em.pack, eU = em.pack, { NEVER: ek, ALWAYS: eI, DECIMAL_ROUND: e8, DECIMAL_FIT: e5 } = e$, eA = 512, ev = 1024; async function* e3(e, t) { let $ = new e2(t); for await (let r of e) yield $.pack(r) } let eO = function e(t, $ = {}) { if (!t || "object" != typeof t) throw Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise"); let r = new m($), n, i = e => { let t; n && (e = Buffer.concat([n, e]), n = void 0); try { t = r.unpackMultiple(e) } catch ($) { if ($.incomplete) n = e.slice($.lastPosition), t = $.values; else throw $ } return t }; return "function" == typeof t[Symbol.iterator] ? function* e() { for (let $ of t) yield* i($) }() : "function" == typeof t[Symbol.asyncIterator] ? async function* e() { for await (let $ of t) yield* i($) }() : void 0 }, eT = function e(t, $ = {}) { if (t && "object" == typeof t) { if ("function" == typeof t[Symbol.iterator]) return function* e(t, $) { let r = new e2($); for (let n of t) yield r.pack(n) }(t, $); if ("function" == typeof t.then || "function" == typeof t[Symbol.asyncIterator]) return e3(t, $); else throw Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise") } throw Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable") }; e.ALWAYS = eI, e.C1 = g, e.DECIMAL_FIT = e5, e.DECIMAL_ROUND = e8, e.Decoder = m, e.Encoder = e2, e.FLOAT32_OPTIONS = e$, e.NEVER = ek, e.Packr = e2, e.REUSE_BUFFER_MODE = eA, e.Unpackr = m, e.addExtension = function e(t) { var $; if (t.Class) { if (!t.pack && !t.write) throw Error("Extension has no pack or write function"); if (t.pack && !t.type) throw Error("Extension has no type (numeric code to identify the extension)"); eu.unshift(t.Class), ef.unshift(t) } ($ = t).unpack ? h[$.type] = $.unpack : h[$.type] = $ }, e.clearSource = G, e.decode = et, e.decodeIter = eO, e.encode = eU, e.encodeIter = eT, e.isNativeAccelerationEnabled = !1, e.mapsAsObjects = !0, e.pack = eS, e.roundFloat32 = function e(t) { er[0] = t; let $ = H[(127 & en[3]) << 1 | en[2] >> 7]; return ($ * t + (t > 0 ? .5 : -.5) >> 0) / $ }, e.unpack = X, e.unpackMultiple = ee, e.useRecords = !1 });
    const msgpackr = window.msgpackr;

    // hidsim
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

    // get xor key
    const xorkey = await new Promise(res => {
        const teststr = "Doshen Danburg",
            testarr = msgpackr.pack(teststr),
            input = document.querySelector("#chat-input"),
            _send = WebSocket.prototype.send;

        WebSocket.prototype.send = function (data) {
            window.connection = this;

            const copy = data.slice(),
                packetContent = copy.slice(0, copy.length - 1),
                buffer = [];

            if (packetContent.length == testarr.length) {
                for (const [i, raw] of testarr.entries()) buffer.push(raw ^ packetContent[i]);
                if (new Set(buffer).size == 1) {
                    WebSocket.prototype.send = _send;
                    res(buffer[0]);
                };
            }

            _send.call(this, data);
        };

        input.click();
        input.value = teststr;
        hidsim.kbsim(13, "down");
        hidsim.kbsim(13, "up");
    });

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

    // find shooting packets number
    const
        dppk = await new Promise(res => { // drone position packet
            const _send = WebSocket.prototype.send;
            WebSocket.prototype.send = function (data) {
                let packet = xd(data);

                if (typeof packet[1] == 'object' && packet[1].length === 2) {
                    WebSocket.prototype.send = _send;
                    res(packet[0]);
                }

                _send.call(this, data);
            };
            hidsim.msim("click", hidsim.cxyp(40, 40));
        }),
        spk = await new Promise(res => { // shoot status packet
            const _send = WebSocket.prototype.send;
            WebSocket.prototype.send = function (data) {
                let packet = xd(data);

                if (packet[1] === true) {
                    WebSocket.prototype.send = _send;
                    res(packet[0]);
                }

                _send.call(this, data);
            };
            hidsim.msim("down", hidsim.cxyp(40, 40));
            hidsim.msim("up", hidsim.cxyp(40, 40));
        }),
        dpk = await new Promise(res => { // drone status packet
            const _send = WebSocket.prototype.send;
            WebSocket.prototype.send = function (data) {
                let packet = xd(data);

                if (packet[1] === 0) {
                    WebSocket.prototype.send = _send;
                    res(packet[0]);
                }

                _send.call(this, data);
            };
            hidsim.msim("down", hidsim.cxyp(40, 40));
            hidsim.msim("up", hidsim.cxyp(40, 40));
        }),
        rpk = await new Promise(res => { // rotation packet
            const _send = WebSocket.prototype.send;
            WebSocket.prototype.send = function (data) {
                let packet = xd(data);

                if (typeof packet[1] === 'number' && packet[1] < 4 && packet[1] != 0) {
                    WebSocket.prototype.send = _send;
                    res(packet[0]);
                }

                _send.call(this, data);
            };
            hidsim.msim("click", hidsim.cxyp(40, 40));
        });
    console.log("[EXE] Packets decrypted")

    // intercomms channel
    const bc = new BroadcastChannel("doshendanburg");

    //
    // scenenavlib
    //
    const
        navdata = {
            mode: 0,
            target: [0, 0],
            coords: [0, 0],
            tolerance: 200,
            isMaster: 0,
            master: {
                shoot: false,
                rotation: 0,
                drones: 0,
                cursor: [0, 0]
            }
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
                transformRelative = (rel, ori, dest) => [rel[0] + ori[0] - dest[0], rel[1] - ori[1] - dest[1]];

            const navline = (ori, dest, dist) => within(ori, dest, dist) ? (hidsim.kbsim.wasd([0, 0]), false) : (hidsim.kbsim.wasd(direction(ori, dest)), true);

            // event loop
            let tickTime = 0, loopTimestamp = Date.now();
            !function doalilwork() { // "we do a lil work"
                const delta = Date.now() - loopTimestamp;

                if (delta >= tickTime) {
                    // update coords
                    navdata.coords = JSON.parse(`[${document.querySelector("#position").innerText.split("Position: ")[1]}]`);

                    // do stuff
                    if (navdata.mode & 1) navline(navdata.coords, navdata.target, navdata.tolerance);
                    if (navdata.isMaster == 1) {
                        (navdata.coords != navdata._old.coords) &&
                            bc.postMessage([1, navdata.coords]);

                        (navdata.master.rotation != navdata._old.master.rotation || navdata.master.shoot != navdata._old.master.shoot) &&
                            bc.postMessage([2, navdata.master.shoot, navdata.master.rotation]);

                        (navdata.master.cursor != navdata._old.master.cursor || navdata.master.drones != navdata._old.master.drones) &&
                            bc.postMessage([3, navdata.master.drones, navdata.master.cursor]);

                        navdata._old = { coords: navdata.coords, master: { ...navdata.master } };
                    };

                    // update time
                    loopTimestamp = Date.now();
                };
                requestAnimationFrame(doalilwork);
            }();
            navdata._old = { coords: navdata.coords, master: { ...navdata.master } };

            // exposed methods
            const nav = new Object();
            nav.bot = () => navdata.mode |= 1;
            nav.unbot = () => navdata.mode &= ~1;
            nav.clearTasks = () => action = () => 0;
            nav.tickTime = (ms) => tickTime = ms;
            nav.setTolerance = (d) => tolerance = d;
            nav._trc2d = transformRelative;

            nav.afk = () => (navdata.target = navdata.coords);

            return nav;
        })();

    //
    // intercomms
    //
    bc.onmessage = e => {
        const m = e.data;
        switch (m[0]) {
            case 0: // set mode
                navdata.isMaster || (navdata.mode = m[1]);
                break;

            case 1: // set master coords
                navdata.mode & 1 << 1 && (navdata.target = m[1]);
                break;

            case 2: // set shooting
                navdata.mode & 1 << 2 && (
                    packet.inject([spk, m[1]]),
                    packet.inject([rpk, m[2]])
                );
                break;

            case 3: // set drones
                navdata.mode & 1 << 3 && (
                    packet.inject([dpk, m[1]]),
                    packet.inject([dppk, nav._trc2d(m[2], navdata.target, navdata.coords)])
                );
                break;
        };
    };

    //
    // bot
    //
    let botmode;
    const bot = {
        master: () => navdata.isMaster = 1,
        unmaster: () => navdata.isMaster = 0,
        copyMode: () => (botmode = navdata.mode, bc.postMessage([0, botmode])),
        setMode: (mode) => bc.postMessage([0, mode])
    };
    WebSocket.prototype.send = function (data) {
        let packet = xd(data);

        if (navdata.isMaster) {
            switch (packet[0]) {
                case spk:
                    navdata.master.shoot = packet[1];
                    break;

                case rpk:
                    navdata.master.rotation = packet[1];
                    break;

                case dpk:
                    navdata.master.drones = packet[1];
                    break;

                case dppk:
                    navdata.master.cursor = packet[1];
            };
        };

        _send.call(this, data);
    };

    //
    // exposing and locking
    //
    window.exe = { bot, nav, hidsim, packet };

    window.dt = { xorkey, spk, rpk, dpk, dppk, navdata, master: navdata.master };
}();