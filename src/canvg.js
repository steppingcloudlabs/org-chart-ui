(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : (e = e || self, t(e.canvg = {}))
})(this, function (e) {
    'use strict';
    var ce = Math.tan,
        pe = Math.atan2,
        ye = Math.PI,
        he = Math.round,
        fe = String.prototype,
        me = Math.max,
        xe = Math.min,
        be = Math.ceil,
        ve = Math.sin,
        ke = Math.cos,
        Se = Math.floor,
        Pe = Math.sqrt,
        Ae = Math.pow;

    function t(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports
    }

    function n(e, t) {
        return RegExp(e, t)
    }

    function a(e) {
        return e.replace(/(?!\u3000)\s+/gm, " ")
    }

    function r(e) {
        return e.replace(/^[\n \t]+/, "")
    }

    function l(e) {
        return e.replace(/[\n \t]+$/, "")
    }

    function o(e) {
        var t = (e || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
        return t.map(parseFloat)
    }

    function s(e) {
        return ua.test(e) ? e.toLowerCase() : e
    }

    function d(e) {
        var t = e.match(/url\(('([^']+)'|"([^"]+)"|([^'"\)]+))\)/) || [];
        return t[2] || t[3] || t[4]
    }

    function u(e, t) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
            var n = [],
                a = !0,
                r = !1,
                i = void 0;
            try {
                for (var l = e[Symbol.iterator](), o; !(a = (o = l.next()).done) && (n.push(o.value), !(t && n.length === t)); a = !0);
            } catch (e) {
                r = !0, i = e
            } finally {
                try {
                    a || null == l["return"] || l["return"]()
                } finally {
                    if (r) throw i
                }
            }
            return n
        }
    }

    function g(e, t) {
        return ha(e) || fa(e, t) || ma()
    }

    function p(e, t) {
        var n = e.match(t);
        return n ? [e.replace(t, " "), n.length] : [e, 0]
    }

    function y(e) {
        var t = [0, 0, 0],
            n = e.replace(/:not\(([^\)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "),
            a = 0,
            r = p(n, ba),
            i = xa(r, 2);
        n = i[0], a = i[1], t[1] += a;
        var l = p(n, va),
            o = xa(l, 2);
        n = o[0], a = o[1], t[0] += a;
        var s = p(n, ka),
            d = xa(s, 2);
        n = d[0], a = d[1], t[1] += a;
        var u = p(n, Sa),
            g = xa(u, 2);
        n = g[0], a = g[1], t[2] += a;
        var c = p(n, Pa),
            y = xa(c, 2);
        n = y[0], a = y[1], t[1] += a;
        var h = p(n, Aa),
            f = xa(h, 2);
        n = f[0], a = f[1], t[1] += a, n = n.replace(/[\*\s\+>~]/g, " ").replace(/[#\.]/g, " ");
        var m = p(n, Ea),
            x = xa(m, 2);
        return n = x[0], a = x[1], t[2] += a, t.join("")
    }

    function h(e) {
        return Pe(Ae(e[0], 2) + Ae(e[1], 2))
    }

    function x(e, t) {
        return (e[0] * t[0] + e[1] * t[1]) / (h(e) * h(t))
    }

    function b(e, t) {
        var n = Math.acos;
        return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * n(x(e, t))
    }

    function v(e) {
        return e * e * e
    }

    function k(e) {
        return 3 * e * e * (1 - e)
    }

    function S(e) {
        return 3 * e * (1 - e) * (1 - e)
    }

    function P(e) {
        return (1 - e) * (1 - e) * (1 - e)
    }

    function A(e) {
        return e * e
    }

    function E(e) {
        return 2 * e * (1 - e)
    }

    function T(e) {
        return (1 - e) * (1 - e)
    }

    function C(e, t, n, a, r, i, l) {
        try {
            var o = e[i](l),
                s = o.value
        } catch (e) {
            return void n(e)
        }
        o.done ? t(s) : Promise.resolve(s).then(a, r)
    }

    function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e, t) {
        for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
    }

    function V() {
        throw new Error("setTimeout has not been defined")
    }

    function R() {
        throw new Error("clearTimeout has not been defined")
    }

    function L(t) {
        if (co === setTimeout) return setTimeout(t, 0);
        if ((co === V || !co) && setTimeout) return co = setTimeout, setTimeout(t, 0);
        try {
            return co(t, 0)
        } catch (n) {
            try {
                return co.call(null, t, 0)
            } catch (n) {
                return co.call(this, t, 0)
            }
        }
    }

    function I(t) {
        if (po === clearTimeout) return clearTimeout(t);
        if ((po === R || !po) && clearTimeout) return po = clearTimeout, clearTimeout(t);
        try {
            return po(t)
        } catch (n) {
            try {
                return po.call(null, t)
            } catch (n) {
                return po.call(this, t)
            }
        }
    }

    function D() {
        ho && mo && (ho = !1, mo.length ? yo = mo.concat(yo) : fo = -1, yo.length && N())
    }

    function N() {
        if (!ho) {
            var e = L(D);
            ho = !0;
            for (var t = yo.length; t;) {
                for (mo = yo, yo = []; ++fo < t;) mo && mo[fo].run();
                fo = -1, t = yo.length
            }
            mo = null, ho = !1, I(e)
        }
    }

    function M(e) {
        var t = Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        yo.push(new z(e, t)), 1 !== yo.length || ho || L(N)
    }

    function z(e, t) {
        this.fun = e, this.array = t
    }

    function B() {}

    function _() {
        throw new Error("process.binding is not supported")
    }

    function F() {
        return "/"
    }

    function G() {
        throw new Error("process.chdir is not supported")
    }

    function H() {
        return 0
    }

    function Y(e) {
        var t = 1e-3 * Ao.call(Po),
            n = Se(t),
            a = Se(1e9 * (t % 1));
        return e && (n -= e[0], a -= e[1], 0 > a && (n--, a += 1e9)), [n, a]
    }

    function $() {
        var e = new Date;
        return (e - Eo) / 1e3
    }

    function U(e) {
        var t = e.trim();
        return /^('|")/.test(t) ? t : "\"".concat(t, "\"")
    }

    function W(e) {
        return "undefined" == typeof process ? e : e.trim().split(",").map(U).join(",")
    }

    function q(e) {
        if (!e) return "";
        var t = e.trim().toLowerCase();
        return "normal" === t || "italic" === t || "oblique" === t || "inherit" === t || "initial" === t || "unset" === t ? t : /^oblique\s+(-|)\d+deg$/.test(t) ? t : ""
    }

    function X(e) {
        if (!e) return "";
        var t = e.trim().toLowerCase();
        return "normal" === t || "bold" === t || "lighter" === t || "bolder" === t || "inherit" === t || "initial" === t || "unset" === t ? t : /^[\d.]+$/.test(t) ? t : ""
    }

    function Q(e) {
        return a(e).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/)
    }

    function K(e) {
        var t = e.split("("),
            n = xa(t, 2),
            a = n[0],
            r = n[1];
        return [a.trim(), r.trim().replace(")", "")]
    }

    function Z(e) {
        var t = e.replace(/,/gm, " ").replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2").replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2").replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2").replace(/([0-9])([+\-])/gm, "$1 $2").replace(/(\.[0-9]*)(\.)/gm, "$1 $2").replace(/(\.[0-9]*)(\.)/gm, "$1 $2").replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 ");
        return a(t).trim()
    }

    function J(e, t, n, a, r, i) {
        return e[4 * (n * a) + 4 * t + i]
    }

    function ee(e, t, n, a, r, i, l) {
        e[4 * (n * a) + 4 * t + i] = l
    }

    function te(e, t, n) {
        var a = e[t];
        return a * (0 > a ? n - 255 : n)
    }

    function m(e, t, n, a) {
        return t + ke(e) * n + ve(e) * a
    }

    function c(e) {
        return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, c(e)
    }

    function ne(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function ae(e, t, n, a, r) {
        if ("string" == typeof e && (e = document.getElementById(e)), !e || "object" !== c(e) || !("getContext" in e)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
        var i = e.getContext("2d");
        try {
            return i.getImageData(t, n, a, r)
        } catch (t) {
            throw new Error("unable to access image data: " + t)
        }
    }

    function re(e, t, n, a, r, i) {
        if (!(isNaN(i) || 1 > i)) {
            i |= 0;
            var l = ae(e, t, n, a, r);
            l = ie(l, t, n, a, r, i), e.getContext("2d").putImageData(l, t, n)
        }
    }

    function ie(e, t, n, a, r, l) {
        var o = e.data,
            s = a - 1,
            d = r - 1,
            u = l + 1,
            g = u * (u + 1) / 2,
            c = new og,
            h = c,
            f, m, b, v, k, S, P, A, E, T, C, w, O, V, R, L, I, D, N, M, z, B, _, F, j;
        for (b = 1; b < 2 * l + 1; b++) h = h.next = new og, b === u && (j = h);
        h.next = c;
        var G = null,
            H = null;
        P = S = 0;
        var Y = ig[l],
            $ = lg[l];
        for (m = 0; m < r; m++) {
            for (L = I = D = N = A = E = T = C = 0, w = u * (M = o[S]), O = u * (z = o[S + 1]), V = u * (B = o[S + 2]), R = u * (_ = o[S + 3]), A += g * M, E += g * z, T += g * B, C += g * _, h = c, b = 0; b < u; b++) h.r = M, h.g = z, h.b = B, h.a = _, h = h.next;
            for (b = 1; b < u; b++) v = S + ((s < b ? s : b) << 2), A += (h.r = M = o[v]) * (F = u - b), E += (h.g = z = o[v + 1]) * F, T += (h.b = B = o[v + 2]) * F, C += (h.a = _ = o[v + 3]) * F, L += M, I += z, D += B, N += _, h = h.next;
            for (G = c, H = j, f = 0; f < a; f++) o[S + 3] = _ = C * Y >> $, 0 === _ ? o[S] = o[S + 1] = o[S + 2] = 0 : (_ = 255 / _, o[S] = (A * Y >> $) * _, o[S + 1] = (E * Y >> $) * _, o[S + 2] = (T * Y >> $) * _), A -= w, E -= O, T -= V, C -= R, w -= G.r, O -= G.g, V -= G.b, R -= G.a, v = P + ((v = f + l + 1) < s ? v : s) << 2, L += G.r = o[v], I += G.g = o[v + 1], D += G.b = o[v + 2], N += G.a = o[v + 3], A += L, E += I, T += D, C += N, G = G.next, w += M = H.r, O += z = H.g, V += B = H.b, R += _ = H.a, L -= M, I -= z, D -= B, N -= _, H = H.next, S += 4;
            P += a
        }
        for (f = 0; f < a; f++) {
            for (I = D = N = L = E = T = C = A = 0, S = f << 2, w = u * (M = o[S]), O = u * (z = o[S + 1]), V = u * (B = o[S + 2]), R = u * (_ = o[S + 3]), A += g * M, E += g * z, T += g * B, C += g * _, h = c, b = 0; b < u; b++) h.r = M, h.g = z, h.b = B, h.a = _, h = h.next;
            for (k = a, b = 1; b <= l; b++) S = k + f << 2, A += (h.r = M = o[S]) * (F = u - b), E += (h.g = z = o[S + 1]) * F, T += (h.b = B = o[S + 2]) * F, C += (h.a = _ = o[S + 3]) * F, L += M, I += z, D += B, N += _, h = h.next, b < d && (k += a);
            for (S = f, G = c, H = j, m = 0; m < r; m++) v = S << 2, o[v + 3] = _ = C * Y >> $, 0 < _ ? (_ = 255 / _, o[v] = (A * Y >> $) * _, o[v + 1] = (E * Y >> $) * _, o[v + 2] = (T * Y >> $) * _) : o[v] = o[v + 1] = o[v + 2] = 0, A -= w, E -= O, T -= V, C -= R, w -= G.r, O -= G.g, V -= G.b, R -= G.a, v = f + ((v = m + u) < d ? v : d) * a << 2, A += L += G.r = o[v], E += I += G.g = o[v + 1], T += D += G.b = o[v + 2], C += N += G.a = o[v + 3], G = G.next, w += M = H.r, O += z = H.g, V += B = H.b, R += _ = H.a, L -= M, I -= z, D -= B, N -= _, H = H.next, S += a
        }
        return e
    }

    function le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t && (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, a)
        }
        return n
    }

    function oe(e) {
        for (var t = 1, n; t < arguments.length; t++) n = null == arguments[t] ? {} : arguments[t], t % 2 ? le(Object(n), !0).forEach(function (t) {
            Ur(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        });
        return e
    }

    function se() {
        return de.apply(this, arguments)
    }

    function de() {
        return de = $r(Yr.mark(function e(t) {
            var n = arguments,
                a, r;
            return Yr.wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return a = !!(1 < n.length && void 0 !== n[1]) && n[1], r = document.createElement("img"), a && (r.crossOrigin = "Anonymous"), e.abrupt("return", new Promise(function (e, n) {
                            r.onload = function () {
                                e(r)
                            }, r.onerror = function () {
                                n()
                            }, r.src = t
                        }));
                    case 4:
                    case "end":
                        return e.stop();
                }
            }, e)
        })), de.apply(this, arguments)
    }

    function ue(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t && (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, a)
        }
        return n
    }

    function ge(e) {
        for (var t = 1, n; t < arguments.length; t++) n = null == arguments[t] ? {} : arguments[t], t % 2 ? ue(Object(n), !0).forEach(function (t) {
            Ur(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ue(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        });
        return e
    }
    var Ee = "undefined" == typeof globalThis ? "undefined" == typeof window ? "undefined" == typeof global ? "undefined" == typeof self ? {} : self : global : window : globalThis,
        Te = function (e) {
            return e && e.Math == Math && e
        },
        Ce = Te("object" == typeof globalThis && globalThis) || Te("object" == typeof window && window) || Te("object" == typeof self && self) || Te("object" == typeof Ee && Ee) || Function("return this")(),
        we = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        Oe = !we(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }),
        Ve = {}.propertyIsEnumerable,
        Re = Object.getOwnPropertyDescriptor,
        Le = Re && !Ve.call({
            1: 2
        }, 1),
        Ie = Le ? function (e) {
            var t = Re(this, e);
            return !!t && t.enumerable
        } : Ve,
        f = {
            f: Ie
        },
        De = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        Ne = {}.toString,
        Me = function (e) {
            return Ne.call(e).slice(8, -1)
        },
        ze = "".split,
        Be = we(function () {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function (e) {
            return "String" == Me(e) ? ze.call(e, "") : Object(e)
        } : Object,
        _e = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        Fe = function (e) {
            return Be(_e(e))
        },
        je = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        Ge = function (e, t) {
            if (!je(e)) return e;
            var n, a;
            if (t && "function" == typeof (n = e.toString) && !je(a = n.call(e))) return a;
            if ("function" == typeof (n = e.valueOf) && !je(a = n.call(e))) return a;
            if (!t && "function" == typeof (n = e.toString) && !je(a = n.call(e))) return a;
            throw TypeError("Can't convert object to primitive value")
        },
        He = {}.hasOwnProperty,
        Ye = function (e, t) {
            return He.call(e, t)
        },
        $e = Ce.document,
        Ue = je($e) && je($e.createElement),
        We = function (e) {
            return Ue ? $e.createElement(e) : {}
        },
        qe = !Oe && !we(function () {
            return 7 != Object.defineProperty(We("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }),
        Xe = Object.getOwnPropertyDescriptor,
        Qe = Oe ? Xe : function (e, t) {
            if (e = Fe(e), t = Ge(t, !0), qe) try {
                return Xe(e, t)
            } catch (e) {}
            return Ye(e, t) ? De(!f.f.call(e, t), e[t]) : void 0
        },
        Ke = {
            f: Qe
        },
        Ze = function (e) {
            if (!je(e)) throw TypeError(e + " is not an object");
            return e
        },
        Je = Object.defineProperty,
        et = Oe ? Je : function (e, t, n) {
            if (Ze(e), t = Ge(t, !0), Ze(n), qe) try {
                return Je(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
        },
        tt = {
            f: et
        },
        nt = Oe ? function (e, t, n) {
            return tt.f(e, t, De(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        },
        at = function (e, t) {
            try {
                nt(Ce, e, t)
            } catch (n) {
                Ce[e] = t
            }
            return t
        },
        rt = "__core-js_shared__",
        it = Ce[rt] || at(rt, {}),
        lt = it,
        ot = Function.toString;
    "function" != typeof lt.inspectSource && (lt.inspectSource = function (e) {
        return ot.call(e)
    });
    var st = lt.inspectSource,
        dt = Ce.WeakMap,
        ut = "function" == typeof dt && /native code/.test(st(dt)),
        gt = t(function (e) {
            (e.exports = function (e, t) {
                return lt[e] || (lt[e] = void 0 === t ? {} : t)
            })("versions", []).push({
                version: "3.6.1",
                mode: "global",
                copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)"
            })
        }),
        ct = 0,
        pt = Math.random(),
        yt = function (e) {
            return "Symbol(" + ((void 0 === e ? "" : e) + ")_") + (++ct + pt).toString(36)
        },
        ht = gt("keys"),
        ft = function (e) {
            return ht[e] || (ht[e] = yt(e))
        },
        mt = {},
        xt = Ce.WeakMap,
        bt = function (e) {
            return St(e) ? kt(e) : vt(e, {})
        },
        vt, kt, St;
    if (ut) {
        var Pt = new xt,
            At = Pt.get,
            Et = Pt.has,
            Tt = Pt.set;
        vt = function (e, t) {
            return Tt.call(Pt, e, t), t
        }, kt = function (e) {
            return At.call(Pt, e) || {}
        }, St = function (e) {
            return Et.call(Pt, e)
        }
    } else {
        var Ct = ft("state");
        mt[Ct] = !0, vt = function (e, t) {
            return nt(e, Ct, t), t
        }, kt = function (e) {
            return Ye(e, Ct) ? e[Ct] : {}
        }, St = function (e) {
            return Ye(e, Ct)
        }
    }
    var wt = {
            set: vt,
            get: kt,
            has: St,
            enforce: bt,
            getterFor: function (e) {
                return function (t) {
                    var n;
                    if (!je(t) || (n = kt(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        Ot = t(function (e) {
            var t = wt.get,
                n = wt.enforce,
                a = (String + "").split("String");
            (e.exports = function (e, t, r, i) {
                var l = !!i && !!i.unsafe,
                    o = !!i && !!i.enumerable,
                    s = !!i && !!i.noTargetGet;
                return ("function" == typeof r && ("string" == typeof t && !Ye(r, "name") && nt(r, "name", t), n(r).source = a.join("string" == typeof t ? t : "")), e === Ce) ? void(o ? e[t] = r : at(t, r)) : void(l ? !s && e[t] && (o = !0) : delete e[t], o ? e[t] = r : nt(e, t, r))
            })(Function.prototype, "toString", function () {
                return "function" == typeof this && t(this).source || st(this)
            })
        }),
        Vt = Ce,
        Rt = function (e) {
            return "function" == typeof e ? e : void 0
        },
        Lt = function (e, t) {
            return 2 > arguments.length ? Rt(Vt[e]) || Rt(Ce[e]) : Vt[e] && Vt[e][t] || Ce[e] && Ce[e][t]
        },
        It = function (e) {
            return isNaN(e = +e) ? 0 : (0 < e ? Se : be)(e)
        },
        Dt = function (e) {
            return 0 < e ? xe(It(e), 9007199254740991) : 0
        },
        Nt = function (e, t) {
            var n = It(e);
            return 0 > n ? me(n + t, 0) : xe(n, t)
        },
        Mt = function (e) {
            return function (t, n, a) {
                var r = Fe(t),
                    i = Dt(r.length),
                    l = Nt(a, i),
                    o;
                if (e && n != n) {
                    for (; i > l;)
                        if (o = r[l++], o != o) return !0;
                } else
                    for (; i > l; l++)
                        if ((e || l in r) && r[l] === n) return e || l || 0;
                return !e && -1
            }
        },
        zt = {
            includes: Mt(!0),
            indexOf: Mt(!1)
        },
        Bt = zt.indexOf,
        _t = function (e, t) {
            var n = Fe(e),
                a = 0,
                r = [],
                l;
            for (l in n) !Ye(mt, l) && Ye(n, l) && r.push(l);
            for (; t.length > a;) Ye(n, l = t[a++]) && (~Bt(r, l) || r.push(l));
            return r
        },
        Ft = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        jt = Ft.concat("length", "prototype"),
        Gt = Object.getOwnPropertyNames || function (e) {
            return _t(e, jt)
        },
        Ht = {
            f: Gt
        },
        Yt = Object.getOwnPropertySymbols,
        $t = {
            f: Yt
        },
        Ut = Lt("Reflect", "ownKeys") || function (e) {
            var t = Ht.f(Ze(e)),
                n = $t.f;
            return n ? t.concat(n(e)) : t
        },
        Wt = function (e, t) {
            for (var n = Ut(t), a = tt.f, r = Ke.f, l = 0, o; l < n.length; l++) o = n[l], Ye(e, o) || a(e, o, r(t, o))
        },
        qt = /#|\.prototype\./,
        Xt = function (e, t) {
            var n = Kt[Qt(e)];
            return n == Jt || n != Zt && ("function" == typeof t ? we(t) : !!t)
        },
        Qt = Xt.normalize = function (e) {
            return (e + "").replace(qt, ".").toLowerCase()
        },
        Kt = Xt.data = {},
        Zt = Xt.NATIVE = "N",
        Jt = Xt.POLYFILL = "P",
        en = Xt,
        tn = Ke.f,
        nn = function (e, t) {
            var n = e.target,
                a = e.global,
                r = e.stat,
                i, l, o, s, d, u;
            if (l = a ? Ce : r ? Ce[n] || at(n, {}) : (Ce[n] || {}).prototype, l)
                for (o in t) {
                    if (d = t[o], e.noTargetGet ? (u = tn(l, o), s = u && u.value) : s = l[o], i = en(a ? o : n + (r ? "." : "#") + o, e.forced), !i && void 0 !== s) {
                        if (typeof d == typeof s) continue;
                        Wt(d, s)
                    }(e.sham || s && s.sham) && nt(d, "sham", !0), Ot(l, o, d, e)
                }
        },
        an = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function");
            return e
        },
        rn = function (e, t, n) {
            return (an(e), void 0 === t) ? e : 0 === n ? function () {
                return e.call(t)
            } : 1 === n ? function (n) {
                return e.call(t, n)
            } : 2 === n ? function (n, a) {
                return e.call(t, n, a)
            } : 3 === n ? function (n, a, r) {
                return e.call(t, n, a, r)
            } : function () {
                return e.apply(t, arguments)
            }
        },
        ln = function (e) {
            return Object(_e(e))
        },
        on = Array.isArray || function (e) {
            return "Array" == Me(e)
        },
        sn = !!Object.getOwnPropertySymbols && !we(function () {
            return !(Symbol() + "")
        }),
        dn = sn && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        un = gt("wks"),
        gn = Ce.Symbol,
        cn = dn ? gn : gn && gn.withoutSetter || yt,
        pn = function (e) {
            return Ye(un, e) || (sn && Ye(gn, e) ? un[e] = gn[e] : un[e] = cn("Symbol." + e)), un[e]
        },
        yn = pn("species"),
        hn = function (e, t) {
            var n;
            return on(e) && (n = e.constructor, "function" == typeof n && (n === Array || on(n.prototype)) ? n = void 0 : je(n) && (n = n[yn], null === n && (n = void 0))), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        fn = [].push,
        mn = function (e) {
            var t = 1 == e,
                n = 4 == e,
                a = 6 == e;
            return function (r, i, l, o) {
                for (var s = ln(r), d = Be(s), u = rn(i, l, 3), g = Dt(d.length), c = 0, p = o || hn, y = t ? p(r, g) : 2 == e ? p(r, 0) : void 0, h, f; g > c; c++)
                    if ((5 == e || a || c in d) && (h = d[c], f = u(h, c, s), e))
                        if (t) y[c] = f;
                        else if (f) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return c;
                    case 2:
                        fn.call(y, h);
                } else if (n) return !1;
                return a ? -1 : 3 == e || n ? n : y
            }
        },
        xn = {
            forEach: mn(0),
            map: mn(1),
            filter: mn(2),
            some: mn(3),
            every: mn(4),
            find: mn(5),
            findIndex: mn(6)
        },
        bn = Lt("navigator", "userAgent") || "",
        vn = Ce.process,
        kn = vn && vn.versions,
        Sn = kn && kn.v8,
        Pn, An;
    Sn ? (Pn = Sn.split("."), An = Pn[0] + Pn[1]) : bn && (Pn = bn.match(/Edge\/(\d+)/), (!Pn || 74 <= Pn[1]) && (Pn = bn.match(/Chrome\/(\d+)/), Pn && (An = Pn[1])));
    var En = An && +An,
        Tn = pn("species"),
        Cn = function (e) {
            return 51 <= En || !we(function () {
                var t = [],
                    n = t.constructor = {};
                return n[Tn] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            })
        },
        wn = xn.map,
        On = Cn("map"),
        Vn = On && !we(function () {
            [].map.call({
                length: -1,
                0: 1
            }, function (e) {
                throw e
            })
        });
    nn({
        target: "Array",
        proto: !0,
        forced: !On || !Vn
    }, {
        map: function (e) {
            return wn(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Rn = "[\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]",
        Ln = RegExp("^" + Rn + Rn + "*"),
        In = RegExp(Rn + Rn + "*$"),
        Dn = function (e) {
            return function (t) {
                var n = _e(t) + "";
                return 1 & e && (n = n.replace(Ln, "")), 2 & e && (n = n.replace(In, "")), n
            }
        },
        Nn = {
            start: Dn(1),
            end: Dn(2),
            trim: Dn(3)
        },
        Mn = Nn.trim,
        zn = Ce.parseFloat,
        Bn = 1 / zn("\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF-0") != -Infinity,
        _n = Bn ? function (e) {
            var t = Mn(e + ""),
                n = zn(t);
            return 0 === n && "-" == t.charAt(0) ? -0 : n
        } : zn;
    nn({
        global: !0,
        forced: parseFloat != _n
    }, {
        parseFloat: _n
    });
    var Fn = function () {
            var e = Ze(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        },
        jn = we(function () {
            var e = n("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
        }),
        Gn = we(function () {
            var e = n("^r", "gy");
            return e.lastIndex = 2, null != e.exec("str")
        }),
        Hn = {
            UNSUPPORTED_Y: jn,
            BROKEN_CARET: Gn
        },
        Yn = RegExp.prototype.exec,
        $n = fe.replace,
        Un = Yn,
        Wn = function () {
            var e = /a/,
                t = /b*/g;
            return Yn.call(e, "a"), Yn.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
        }(),
        qn = Hn.UNSUPPORTED_Y || Hn.BROKEN_CARET,
        Xn = void 0 !== /()??/.exec("")[1];
    (Wn || Xn || qn) && (Un = function (e) {
        var t = this,
            n = qn && t.sticky,
            a = Fn.call(t),
            r = t.source,
            l = 0,
            o = e,
            s, d, u, g;
        return n && (a = a.replace("y", ""), -1 === a.indexOf("g") && (a += "g"), o = (e + "").slice(t.lastIndex), 0 < t.lastIndex && (!t.multiline || t.multiline && "\n" !== e[t.lastIndex - 1]) && (r = "(?: " + r + ")", o = " " + o, l++), d = new RegExp("^(?:" + r + ")", a)), Xn && (d = new RegExp("^" + r + "$(?!\\s)", a)), Wn && (s = t.lastIndex), u = Yn.call(n ? d : t, o), n ? u ? (u.input = u.input.slice(l), u[0] = u[0].slice(l), u.index = t.lastIndex, t.lastIndex += u[0].length) : t.lastIndex = 0 : Wn && u && (t.lastIndex = t.global ? u.index + u[0].length : s), Xn && u && 1 < u.length && $n.call(u[0], d, function () {
            for (g = 1; g < arguments.length - 2; g++) void 0 === arguments[g] && (u[g] = void 0)
        }), u
    });
    var Qn = Un;
    nn({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Qn
    }, {
        exec: Qn
    });
    var Kn = pn("species"),
        Zn = !we(function () {
            var e = /./;
            return e.exec = function () {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        }),
        Jn = function () {
            return "$0" === "a".replace(/./, "$0")
        }(),
        ea = !we(function () {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function () {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        }),
        ta = function (e, t, n, a) {
            var r = pn(e),
                i = !we(function () {
                    var t = {};
                    return t[r] = function () {
                        return 7
                    }, 7 != "" [e](t)
                }),
                l = i && !we(function () {
                    var t = !1,
                        n = /a/;
                    return "split" === e && (n = {}, n.constructor = {}, n.constructor[Kn] = function () {
                        return n
                    }, n.flags = "", n[r] = /./ [r]), n.exec = function () {
                        return t = !0, null
                    }, n[r](""), !t
                });
            if (!i || !l || "replace" === e && !(Zn && Jn) || "split" === e && !ea) {
                var o = /./ [r],
                    s = n(r, "" [e], function (e, t, n, a, r) {
                        return t.exec === Qn ? i && !r ? {
                            done: !0,
                            value: o.call(t, n, a)
                        } : {
                            done: !0,
                            value: e.call(n, t, a)
                        } : {
                            done: !1
                        }
                    }, {
                        REPLACE_KEEPS_$0: Jn
                    }),
                    d = s[0],
                    u = s[1];
                Ot(String.prototype, e, d), Ot(RegExp.prototype, r, 2 == t ? function (e, t) {
                    return u.call(e, this, t)
                } : function (e) {
                    return u.call(e, this)
                })
            }
            a && nt(RegExp.prototype[r], "sham", !0)
        },
        na = function (e) {
            return function (t, n) {
                var a = _e(t) + "",
                    r = It(n),
                    i = a.length,
                    l, o;
                return 0 > r || r >= i ? e ? "" : void 0 : (l = a.charCodeAt(r), 55296 > l || 56319 < l || r + 1 === i || 56320 > (o = a.charCodeAt(r + 1)) || 57343 < o ? e ? a.charAt(r) : l : e ? a.slice(r, r + 2) : (l - 55296 << 10) + (o - 56320) + 65536)
            }
        },
        aa = {
            codeAt: na(!1),
            charAt: na(!0)
        },
        ra = aa.charAt,
        ia = function (e, t, n) {
            return t + (n ? ra(e, t).length : 1)
        },
        la = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var a = n.call(e, t);
                if ("object" != typeof a) throw TypeError("RegExp exec method returned something other than an Object or null");
                return a
            }
            if ("RegExp" !== Me(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return Qn.call(e, t)
        };
    ta("match", 1, function (e, t, a) {
        return [function (t) {
            var n = _e(this),
                a = null == t ? void 0 : t[e];
            return void 0 === a ? new RegExp(t)[e](n + "") : a.call(t, n)
        }, function (e) {
            var r = a(t, e, this);
            if (r.done) return r.value;
            var i = Ze(e),
                l = this + "";
            if (!i.global) return la(i, l);
            var o = i.unicode;
            i.lastIndex = 0;
            for (var s = [], d = 0, u, g; null !== (u = la(i, l));) g = u[0] + "", s[d] = g, "" == g && (i.lastIndex = ia(l, Dt(i.lastIndex), o)), d++;
            return 0 === d ? null : s
        }]
    });
    var oa = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        sa = /\$([$&'`]|\d\d?)/g,
        da = function (e) {
            return void 0 === e ? e : e + ""
        };
    ta("replace", 2, function (e, t, n, a) {
        function r(e, a, r, i, l, o) {
            var s = r + e.length,
                d = i.length,
                n = sa;
            return void 0 !== l && (l = ln(l), n = oa), t.call(o, n, function (t, o) {
                var u;
                switch (o.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return a.slice(0, r);
                    case "'":
                        return a.slice(s);
                    case "<":
                        u = l[o.slice(1, -1)];
                        break;
                    default:
                        var g = +o;
                        if (0 == g) return t;
                        if (g > d) {
                            var n = Se(g / 10);
                            return 0 === n ? t : n <= d ? void 0 === i[n - 1] ? o.charAt(1) : i[n - 1] + o.charAt(1) : t
                        }
                        u = i[g - 1];
                }
                return void 0 === u ? "" : u
            })
        }
        return [function (n, a) {
            var r = _e(this),
                i = null == n ? void 0 : n[e];
            return void 0 === i ? t.call(r + "", n, a) : i.call(n, r, a)
        }, function (e, l) {
            if (a.REPLACE_KEEPS_$0 || "string" == typeof l && -1 === l.indexOf("$0")) {
                var o = n(t, e, this, l);
                if (o.done) return o.value
            }
            var s = Ze(e),
                d = this + "",
                u = "function" == typeof l;
            u || (l += "");
            var g = s.global;
            if (g) {
                var c = s.unicode;
                s.lastIndex = 0
            }
            for (var p = [], y, h;
                (y = la(s, d), null !== y) && (p.push(y), !!g);) h = y[0] + "", "" == h && (s.lastIndex = ia(d, Dt(s.lastIndex), c));
            for (var f = "", m = 0, x = 0; x < p.length; x++) {
                y = p[x];
                for (var b = y[0] + "", v = me(xe(It(y.index), d.length), 0), k = [], S = 1; S < y.length; S++) k.push(da(y[S]));
                var P = y.groups;
                if (u) {
                    var A = [b].concat(k, v, d);
                    void 0 !== P && A.push(P);
                    var E = l.apply(void 0, A) + ""
                } else E = r(b, d, v, k, P, l);
                v >= m && (f += d.slice(m, v) + E, m = v + b.length)
            }
            return f + d.slice(m)
        }]
    });
    var ua = /^[A-Z-]+$/,
        ga = function (e, t) {
            var n = [][e];
            return !n || !we(function () {
                n.call(null, t || function () {
                    throw 1
                }, 1)
            })
        },
        ca = [].join,
        pa = Be != Object,
        ya = ga("join", ",");
    nn({
        target: "Array",
        proto: !0,
        forced: pa || ya
    }, {
        join: function (e) {
            return ca.call(Fe(this), void 0 === e ? "," : e)
        }
    });
    var ha = function (e) {
            if (Array.isArray(e)) return e
        },
        fa = u,
        ma = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        xa = g,
        ba = /(\[[^\]]+\])/g,
        va = /(#[^\s\+>~\.\[:]+)/g,
        ka = /(\.[^\s\+>~\.\[:]+)/g,
        Sa = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
        Pa = /(:[\w-]+\([^\)]*\))/gi,
        Aa = /(:[^\s\+>~\.\[:]+)/g,
        Ea = /([^\s\+>~\.\[:]+)/g,
        Ta = 1e-8,
        Ca = Object.keys || function (e) {
            return _t(e, Ft)
        },
        wa = Oe ? Object.defineProperties : function (e, t) {
            Ze(e);
            for (var n = Ca(t), a = n.length, r = 0, i; a > r;) tt.f(e, i = n[r++], t[i]);
            return e
        },
        Oa = Lt("document", "documentElement"),
        Va = ">",
        Ra = "<",
        La = "prototype",
        Ia = "script",
        Da = ft("IE_PROTO"),
        Na = function () {},
        Ma = function (e) {
            return Ra + Ia + Va + e + Ra + "/" + Ia + Va
        },
        za = function (e) {
            e.write(Ma("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        Ba = function () {
            var e = We("iframe"),
                t;
            return e.style.display = "none", Oa.appendChild(e), e.src = "java" + Ia + ":" + "", t = e.contentWindow.document, t.open(), t.write(Ma("document.F=Object")), t.close(), t.F
        },
        _a = function () {
            try {
                Fa = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            _a = Fa ? za(Fa) : Ba();
            for (var e = Ft.length; e--;) delete _a[La][Ft[e]];
            return _a()
        },
        Fa;
    mt[Da] = !0;
    var ja = Object.create || function (e, t) {
            var n;
            return null === e ? n = _a() : (Na[La] = Ze(e), n = new Na, Na[La] = null, n[Da] = e), void 0 === t ? n : wa(n, t)
        },
        Ga = Ht.f,
        Ha = {}.toString,
        Ya = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        $a = function (e) {
            try {
                return Ga(e)
            } catch (e) {
                return Ya.slice()
            }
        },
        Ua = {
            f: function (e) {
                return Ya && "[object Window]" == Ha.call(e) ? $a(e) : Ga(Fe(e))
            }
        },
        Wa = {
            f: pn
        },
        qa = tt.f,
        Xa = function (e) {
            var t = Vt.Symbol || (Vt.Symbol = {});
            Ye(t, e) || qa(t, e, {
                value: Wa.f(e)
            })
        },
        Qa = tt.f,
        Ka = pn("toStringTag"),
        Za = function (e, t, n) {
            e && !Ye(e = n ? e : e.prototype, Ka) && Qa(e, Ka, {
                configurable: !0,
                value: t
            })
        },
        Ja = xn.forEach,
        er = ft("hidden"),
        tr = "Symbol",
        nr = "prototype",
        ar = pn("toPrimitive"),
        rr = wt.set,
        ir = wt.getterFor(tr),
        lr = Object[nr],
        or = Ce.Symbol,
        sr = Lt("JSON", "stringify"),
        dr = Ke.f,
        ur = tt.f,
        gr = Ua.f,
        cr = f.f,
        pr = gt("symbols"),
        yr = gt("op-symbols"),
        hr = gt("string-to-symbol-registry"),
        fr = gt("symbol-to-string-registry"),
        mr = gt("wks"),
        xr = Ce.QObject,
        br = !xr || !xr[nr] || !xr[nr].findChild,
        vr = Oe && we(function () {
            return 7 != ja(ur({}, "a", {
                get: function () {
                    return ur(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function (e, t, n) {
            var a = dr(lr, t);
            a && delete lr[t], ur(e, t, n), a && e !== lr && ur(lr, t, a)
        } : ur,
        kr = function (e, t) {
            var n = pr[e] = ja(or[nr]);
            return rr(n, {
                type: tr,
                tag: e,
                description: t
            }), Oe || (n.description = t), n
        },
        Sr = dn ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return Object(e) instanceof or
        },
        Pr = function (e, t, n) {
            e === lr && Pr(yr, t, n), Ze(e);
            var a = Ge(t, !0);
            return Ze(n), Ye(pr, a) ? (n.enumerable ? (Ye(e, er) && e[er][a] && (e[er][a] = !1), n = ja(n, {
                enumerable: De(0, !1)
            })) : (!Ye(e, er) && ur(e, er, De(1, {})), e[er][a] = !0), vr(e, a, n)) : ur(e, a, n)
        },
        Ar = function (e, t) {
            Ze(e);
            var n = Fe(t),
                a = Ca(n).concat(wr(n));
            return Ja(a, function (t) {
                (!Oe || Er.call(n, t)) && Pr(e, t, n[t])
            }), e
        },
        Er = function (e) {
            var t = Ge(e, !0),
                n = cr.call(this, t);
            return (this !== lr || !Ye(pr, t) || Ye(yr, t)) && (!(n || !Ye(this, t) || !Ye(pr, t) || Ye(this, er) && this[er][t]) || n)
        },
        Tr = function (e, t) {
            var n = Fe(e),
                a = Ge(t, !0);
            if (n !== lr || !Ye(pr, a) || Ye(yr, a)) {
                var r = dr(n, a);
                return r && Ye(pr, a) && !(Ye(n, er) && n[er][a]) && (r.enumerable = !0), r
            }
        },
        Cr = function (e) {
            var t = gr(Fe(e)),
                n = [];
            return Ja(t, function (e) {
                Ye(pr, e) || Ye(mt, e) || n.push(e)
            }), n
        },
        wr = function (e) {
            var t = e === lr,
                n = gr(t ? yr : Fe(e)),
                a = [];
            return Ja(n, function (e) {
                Ye(pr, e) && (!t || Ye(lr, e)) && a.push(pr[e])
            }), a
        };
    if (sn || (or = function () {
            if (this instanceof or) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? arguments[0] + "" : void 0,
                t = yt(e),
                n = function (e) {
                    this === lr && n.call(yr, e), Ye(this, er) && Ye(this[er], t) && (this[er][t] = !1), vr(this, t, De(1, e))
                };
            return Oe && br && vr(lr, t, {
                configurable: !0,
                set: n
            }), kr(t, e)
        }, Ot(or[nr], "toString", function () {
            return ir(this).tag
        }), Ot(or, "withoutSetter", function (e) {
            return kr(yt(e), e)
        }), f.f = Er, tt.f = Pr, Ke.f = Tr, Ht.f = Ua.f = Cr, $t.f = wr, Wa.f = function (e) {
            return kr(pn(e), e)
        }, Oe && (ur(or[nr], "description", {
            configurable: !0,
            get: function () {
                return ir(this).description
            }
        }), Ot(lr, "propertyIsEnumerable", Er, {
            unsafe: !0
        }))), nn({
            global: !0,
            wrap: !0,
            forced: !sn,
            sham: !sn
        }, {
            Symbol: or
        }), Ja(Ca(mr), function (e) {
            Xa(e)
        }), nn({
            target: tr,
            stat: !0,
            forced: !sn
        }, {
            for: function (e) {
                var t = e + "";
                if (Ye(hr, t)) return hr[t];
                var n = or(t);
                return hr[t] = n, fr[n] = t, n
            },
            keyFor: function (e) {
                if (!Sr(e)) throw TypeError(e + " is not a symbol");
                return Ye(fr, e) ? fr[e] : void 0
            },
            useSetter: function () {
                br = !0
            },
            useSimple: function () {
                br = !1
            }
        }), nn({
            target: "Object",
            stat: !0,
            forced: !sn,
            sham: !Oe
        }, {
            create: function (e, t) {
                return void 0 === t ? ja(e) : Ar(ja(e), t)
            },
            defineProperty: Pr,
            defineProperties: Ar,
            getOwnPropertyDescriptor: Tr
        }), nn({
            target: "Object",
            stat: !0,
            forced: !sn
        }, {
            getOwnPropertyNames: Cr,
            getOwnPropertySymbols: wr
        }), nn({
            target: "Object",
            stat: !0,
            forced: we(function () {
                $t.f(1)
            })
        }, {
            getOwnPropertySymbols: function (e) {
                return $t.f(ln(e))
            }
        }), sr) {
        var Or = !sn || we(function () {
            var e = or();
            return "[null]" != sr([e]) || "{}" != sr({
                a: e
            }) || "{}" != sr(Object(e))
        });
        nn({
            target: "JSON",
            stat: !0,
            forced: Or
        }, {
            stringify: function (e, t) {
                for (var n = [e], a = 1, r; arguments.length > a;) n.push(arguments[a++]);
                if (r = t, (je(t) || void 0 !== e) && !Sr(e)) return on(t) || (t = function (e, t) {
                    if ("function" == typeof r && (t = r.call(this, e, t)), !Sr(t)) return t
                }), n[1] = t, sr.apply(null, n)
            }
        })
    }
    or[nr][ar] || nt(or[nr], ar, or[nr].valueOf), Za(or, tr), mt[er] = !0;
    var Vr = xn.filter,
        Rr = Cn("filter"),
        Lr = Rr && !we(function () {
            [].filter.call({
                length: -1,
                0: 1
            }, function (e) {
                throw e
            })
        });
    nn({
        target: "Array",
        proto: !0,
        forced: !Rr || !Lr
    }, {
        filter: function (e) {
            return Vr(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Ir = xn.forEach,
        Dr = ga("forEach") ? function (e) {
            return Ir(this, e, 1 < arguments.length ? arguments[1] : void 0)
        } : [].forEach;
    nn({
        target: "Array",
        proto: !0,
        forced: [].forEach != Dr
    }, {
        forEach: Dr
    }), nn({
        target: "Object",
        stat: !0,
        forced: !Oe,
        sham: !Oe
    }, {
        defineProperties: wa
    }), nn({
        target: "Object",
        stat: !0,
        forced: !Oe,
        sham: !Oe
    }, {
        defineProperty: tt.f
    });
    var Nr = Ke.f,
        Mr = we(function () {
            Nr(1)
        });
    nn({
        target: "Object",
        stat: !0,
        forced: !Oe || Mr,
        sham: !Oe
    }, {
        getOwnPropertyDescriptor: function (e, t) {
            return Nr(Fe(e), t)
        }
    });
    var zr = function (e, t, n) {
        var a = Ge(t);
        a in e ? tt.f(e, a, De(0, n)) : e[a] = n
    };
    nn({
        target: "Object",
        stat: !0,
        sham: !Oe
    }, {
        getOwnPropertyDescriptors: function (e) {
            for (var t = Fe(e), n = Ke.f, a = Ut(t), r = {}, i = 0, l, o; a.length > i;) o = n(t, l = a[i++]), void 0 !== o && zr(r, l, o);
            return r
        }
    });
    var Br = we(function () {
        Ca(1)
    });
    nn({
        target: "Object",
        stat: !0,
        forced: Br
    }, {
        keys: function (e) {
            return Ca(ln(e))
        }
    });
    var _r = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var Fr in _r) {
        var jr = Ce[Fr],
            Gr = jr && jr.prototype;
        if (Gr && Gr.forEach !== Dr) try {
            nt(Gr, "forEach", Dr)
        } catch (e) {
            Gr.forEach = Dr
        }
    }
    var Hr = t(function (e) {
            var t = function (e) {
                function t(e, t, n, r) {
                    var i = t && t.prototype instanceof a ? t : a,
                        l = Object.create(i.prototype),
                        o = new c(r || []);
                    return l._invoke = s(e, n, o), l
                }

                function n(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }

                function a() {}

                function r() {}

                function i() {}

                function l(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                        e[t] = function (e) {
                            return this._invoke(t, e)
                        }
                    })
                }

                function o(e) {
                    function t(a, r, i, l) {
                        var o = n(e[a], e, r);
                        if ("throw" === o.type) l(o.arg);
                        else {
                            var s = o.arg,
                                d = s.value;
                            return d && "object" == typeof d && f.call(d, "__await") ? Promise.resolve(d.__await).then(function (e) {
                                t("next", e, i, l)
                            }, function (e) {
                                t("throw", e, i, l)
                            }) : Promise.resolve(d).then(function (e) {
                                s.value = e, i(s)
                            }, function (e) {
                                return t("throw", e, i, l)
                            })
                        }
                    }

                    function a(e, n) {
                        function a() {
                            return new Promise(function (a, r) {
                                t(e, n, a, r)
                            })
                        }
                        return r = r ? r.then(a, a) : a()
                    }
                    var r;
                    this._invoke = a
                }

                function s(e, t, a) {
                    var r = "suspendedStart";
                    return function (i, l) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === i) throw l;
                            return y()
                        }
                        for (a.method = i, a.arg = l;;) {
                            var o = a.delegate;
                            if (o) {
                                var s = d(o, a);
                                if (s) {
                                    if (s === S) continue;
                                    return s
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === r) throw r = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            r = "executing";
                            var u = n(e, t, a);
                            if ("normal" === u.type) {
                                if (r = a.done ? "completed" : "suspendedYield", u.arg === S) continue;
                                return {
                                    value: u.arg,
                                    done: a.done
                                }
                            }
                            "throw" === u.type && (r = "completed", a.method = "throw", a.arg = u.arg)
                        }
                    }
                }

                function d(e, t) {
                    var a = e.iterator[t.method];
                    if (a === k) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator["return"] && (t.method = "return", t.arg = k, d(e, t), "throw" === t.method)) return S;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return S
                    }
                    var r = n(a, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, S;
                    var i = r.arg;
                    if (!i) return t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, S;
                    if (i.done) t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = k);
                    else return i;
                    return t.delegate = null, S
                }

                function u(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function g(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function c(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(u, this), this.reset(!0)
                }

                function p(e) {
                    if (e) {
                        var t = e[x];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (f.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = k, t.done = !0, t
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: y
                    }
                }

                function y() {
                    return {
                        value: k,
                        done: !0
                    }
                }
                var h = Object.prototype,
                    f = h.hasOwnProperty,
                    m = "function" == typeof Symbol ? Symbol : {},
                    x = m.iterator || "@@iterator",
                    b = m.asyncIterator || "@@asyncIterator",
                    v = m.toStringTag || "@@toStringTag",
                    k;
                e.wrap = t;
                var S = {},
                    P = {};
                P[x] = function () {
                    return this
                };
                var A = Object.getPrototypeOf,
                    E = A && A(A(p([])));
                E && E !== h && f.call(E, x) && (P = E);
                var T = i.prototype = a.prototype = Object.create(P);
                return r.prototype = T.constructor = i, i.constructor = r, i[v] = r.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === r || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, i) : (e.__proto__ = i, !(v in e) && (e[v] = "GeneratorFunction")), e.prototype = Object.create(T), e
                }, e.awrap = function (e) {
                    return {
                        __await: e
                    }
                }, l(o.prototype), o.prototype[b] = function () {
                    return this
                }, e.AsyncIterator = o, e.async = function (n, a, r, i) {
                    var l = new o(t(n, a, r, i));
                    return e.isGeneratorFunction(a) ? l : l.next().then(function (e) {
                        return e.done ? e.value : l.next()
                    })
                }, l(T), T[v] = "Generator", T[x] = function () {
                    return this
                }, T.toString = function () {
                    return "[object Generator]"
                }, e.keys = function (e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var a = t.pop();
                                if (a in e) return n.value = a, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = p, c.prototype = {
                    constructor: c,
                    reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = k, this.done = !1, this.delegate = null, this.method = "next", this.arg = k, this.tryEntries.forEach(g), !e)
                            for (var t in this) "t" === t.charAt(0) && f.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = k)
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0],
                            t = e.completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (e) {
                        function t(t, a) {
                            return l.type = "throw", l.arg = e, n.next = t, a && (n.method = "next", n.arg = k), !!a
                        }
                        if (this.done) throw e;
                        for (var n = this, a = this.tryEntries.length - 1; 0 <= a; --a) {
                            var r = this.tryEntries[a],
                                l = r.completion;
                            if ("root" === r.tryLoc) return t("end");
                            if (r.tryLoc <= this.prev) {
                                var o = f.call(r, "catchLoc"),
                                    s = f.call(r, "finallyLoc");
                                if (o && s) {
                                    if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                                } else if (o) {
                                    if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                                } else if (!s) throw new Error("try statement without catch or finally");
                                else if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1, a; 0 <= n; --n)
                            if (a = this.tryEntries[n], a.tryLoc <= this.prev && f.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var r = a;
                                break
                            } r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var l = r ? r.completion : {};
                        return l.type = e, l.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, S) : this.complete(l)
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), S
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1, n; 0 <= t; --t)
                            if (n = this.tryEntries[t], n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), g(n), S
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1, n; 0 <= t; --t)
                            if (n = this.tryEntries[t], n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var r = a.arg;
                                    g(n)
                                }
                                return r
                            } throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (e, t, n) {
                        return this.delegate = {
                            iterator: p(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = k), S
                    }
                }, e
            }(e.exports);
            try {
                regeneratorRuntime = t
            } catch (e) {
                Function("r", "regeneratorRuntime = r")(t)
            }
        }),
        Yr = Hr,
        $r = function (e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (a, r) {
                    function i(e) {
                        C(o, a, r, i, l, "next", e)
                    }

                    function l(e) {
                        C(o, a, r, i, l, "throw", e)
                    }
                    var o = e.apply(t, n);
                    i(void 0)
                })
            }
        },
        Ur = w,
        Wr = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        qr = function (e, t, n) {
            return t && O(e.prototype, t), n && O(e, n), e
        },
        Xr = pn("isConcatSpreadable"),
        Qr = 9007199254740991,
        Kr = "Maximum allowed index exceeded",
        Zr = 51 <= En || !we(function () {
            var e = [];
            return e[Xr] = !1, e.concat()[0] !== e
        }),
        Jr = Cn("concat"),
        ei = function (e) {
            if (!je(e)) return !1;
            var t = e[Xr];
            return void 0 === t ? on(e) : !!t
        };
    nn({
        target: "Array",
        proto: !0,
        forced: !Zr || !Jr
    }, {
        concat: function () {
            var e = ln(this),
                t = hn(e, 0),
                a = 0,
                r, l, o, s, d;
            for (r = -1, o = arguments.length; r < o; r++)
                if (d = -1 === r ? e : arguments[r], ei(d)) {
                    if (s = Dt(d.length), a + s > Qr) throw TypeError(Kr);
                    for (l = 0; l < s; l++, a++) l in d && zr(t, a, d[l])
                } else {
                    if (a >= Qr) throw TypeError(Kr);
                    zr(t, a++, d)
                } return t.length = a, t
        }
    });
    var ti = xn.every;
    nn({
        target: "Array",
        proto: !0,
        forced: ga("every")
    }, {
        every: function (e) {
            return ti(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var ni = function (e) {
            return function (t, n, a, r) {
                an(n);
                var l = ln(t),
                    o = Be(l),
                    s = Dt(l.length),
                    d = e ? s - 1 : 0,
                    u = e ? -1 : 1;
                if (2 > a)
                    for (;;) {
                        if (d in o) {
                            r = o[d], d += u;
                            break
                        }
                        if (d += u, e ? 0 > d : s <= d) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; e ? 0 <= d : s > d; d += u) d in o && (r = n(r, o[d], d, l));
                return r
            }
        },
        ai = {
            left: ni(!1),
            right: ni(!0)
        },
        ri = ai.left;
    nn({
        target: "Array",
        proto: !0,
        forced: ga("reduce")
    }, {
        reduce: function (e) {
            return ri(this, e, arguments.length, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var ii = Date.prototype,
        li = "Invalid Date",
        oi = "toString",
        si = ii[oi],
        di = ii.getTime;
    new Date(NaN) + "" != li && Ot(ii, oi, function () {
        var e = di.call(this);
        return e === e ? si.call(this) : li
    });
    var ui = pn("toStringTag"),
        gi = {};
    gi[ui] = "z";
    var ci = "[object z]" === gi + "",
        pi = pn("toStringTag"),
        yi = "Arguments" == Me(function () {
            return arguments
        }()),
        hi = function (e, t) {
            try {
                return e[t]
            } catch (e) {}
        },
        fi = function (e) {
            var t, n, a;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = hi(t = Object(e), pi)) ? n : yi ? Me(t) : "Object" == (a = Me(t)) && "function" == typeof t.callee ? "Arguments" : a
        },
        mi = function () {
            return "[object " + fi(this) + "]"
        };
    ci || Ot(Object.prototype, "toString", mi, {
        unsafe: !0
    });
    var xi = Ce.Promise,
        bi = function (e, t, n) {
            for (var a in t) Ot(e, a, t[a], n);
            return e
        },
        vi = pn("species"),
        ki = function (e) {
            var t = Lt(e),
                n = tt.f;
            Oe && t && !t[vi] && n(t, vi, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        },
        Si = function (e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        },
        Pi = {},
        Ai = pn("iterator"),
        Ei = Array.prototype,
        Ti = function (e) {
            return void 0 !== e && (Pi.Array === e || Ei[Ai] === e)
        },
        Ci = pn("iterator"),
        wi = function (e) {
            if (null != e) return e[Ci] || e["@@iterator"] || Pi[fi(e)]
        },
        Oi = function (e, t, n, a) {
            try {
                return a ? t(Ze(n)[0], n[1]) : t(n)
            } catch (t) {
                var r = e["return"];
                throw void 0 !== r && Ze(r.call(e)), t
            }
        },
        Vi = t(function (e) {
            var t = function (e, t) {
                    this.stopped = e, this.result = t
                },
                n = e.exports = function (e, n, a, r, i) {
                    var l = rn(n, a, r ? 2 : 1),
                        o, s, d, u, g, c, p;
                    if (i) o = e;
                    else {
                        if (s = wi(e), "function" != typeof s) throw TypeError("Target is not iterable");
                        if (Ti(s)) {
                            for (d = 0, u = Dt(e.length); u > d; d++)
                                if (g = r ? l(Ze(p = e[d])[0], p[1]) : l(e[d]), g && g instanceof t) return g;
                            return new t(!1)
                        }
                        o = s.call(e)
                    }
                    for (c = o.next; !(p = c.call(o)).done;)
                        if (g = Oi(o, l, p.value, r), "object" == typeof g && g && g instanceof t) return g;
                    return new t(!1)
                };
            n.stop = function (e) {
                return new t(!0, e)
            }
        }),
        Ri = pn("iterator"),
        Li = !1;
    try {
        var Ii = 0,
            Di = {
                next: function () {
                    return {
                        done: !!Ii++
                    }
                },
                return: function () {
                    Li = !0
                }
            };
        Di[Ri] = function () {
            return this
        }, Array.from(Di, function () {
            throw 2
        })
    } catch (e) {}
    var Ni = function (e, t) {
            if (!t && !Li) return !1;
            var n = !1;
            try {
                var a = {};
                a[Ri] = function () {
                    return {
                        next: function () {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(a)
            } catch (e) {}
            return n
        },
        Mi = pn("species"),
        zi = function (e, t) {
            var n = Ze(e).constructor,
                a;
            return void 0 === n || null == (a = Ze(n)[Mi]) ? t : an(a)
        },
        Bi = /(iphone|ipod|ipad).*applewebkit/i.test(bn),
        _i = Ce.location,
        Fi = Ce.setImmediate,
        ji = Ce.clearImmediate,
        Gi = Ce.process,
        Hi = Ce.MessageChannel,
        Yi = Ce.Dispatch,
        $i = 0,
        Ui = {},
        Wi = "onreadystatechange",
        qi = function (e) {
            if (Ui.hasOwnProperty(e)) {
                var t = Ui[e];
                delete Ui[e], t()
            }
        },
        Xi = function (e) {
            return function () {
                qi(e)
            }
        },
        Qi = function (e) {
            qi(e.data)
        },
        Ki = function (e) {
            Ce.postMessage(e + "", _i.protocol + "//" + _i.host)
        },
        Zi, Ji, el;
    Fi && ji || (Fi = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return Ui[++$i] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, Zi($i), $i
    }, ji = function (e) {
        delete Ui[e]
    }, "process" == Me(Gi) ? Zi = function (e) {
        Gi.nextTick(Xi(e))
    } : Yi && Yi.now ? Zi = function (e) {
        Yi.now(Xi(e))
    } : Hi && !Bi ? (Ji = new Hi, el = Ji.port2, Ji.port1.onmessage = Qi, Zi = rn(el.postMessage, el, 1)) : !Ce.addEventListener || "function" != typeof postMessage || Ce.importScripts || we(Ki) ? Wi in We("script") ? Zi = function (e) {
        Oa.appendChild(We("script"))[Wi] = function () {
            Oa.removeChild(this), qi(e)
        }
    } : Zi = function (e) {
        setTimeout(Xi(e), 0)
    } : (Zi = Ki, Ce.addEventListener("message", Qi, !1)));
    var tl = {
            set: Fi,
            clear: ji
        },
        nl = Ke.f,
        al = tl.set,
        rl = Ce.MutationObserver || Ce.WebKitMutationObserver,
        il = Ce.process,
        ll = Ce.Promise,
        ol = "process" == Me(il),
        sl = nl(Ce, "queueMicrotask"),
        dl = sl && sl.value,
        ul, gl, cl, pl, yl, hl, fl, ml;
    dl || (ul = function () {
        var e, t;
        for (ol && (e = il.domain) && e.exit(); gl;) {
            t = gl.fn, gl = gl.next;
            try {
                t()
            } catch (e) {
                throw gl ? pl() : cl = void 0, e
            }
        }
        cl = void 0, e && e.enter()
    }, ol ? pl = function () {
        il.nextTick(ul)
    } : rl && !Bi ? (yl = !0, hl = document.createTextNode(""), new rl(ul).observe(hl, {
        characterData: !0
    }), pl = function () {
        hl.data = yl = !yl
    }) : ll && ll.resolve ? (fl = ll.resolve(void 0), ml = fl.then, pl = function () {
        ml.call(fl, ul)
    }) : pl = function () {
        al.call(Ce, ul)
    });
    var xl = dl || function (e) {
            var t = {
                fn: e,
                next: void 0
            };
            cl && (cl.next = t), gl || (gl = t, pl()), cl = t
        },
        bl = function (e) {
            var t, n;
            this.promise = new e(function (e, a) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = a
            }), this.resolve = an(t), this.reject = an(n)
        },
        vl = {
            f: function (e) {
                return new bl(e)
            }
        },
        kl = function (e, t) {
            if (Ze(e), je(t) && t.constructor === e) return t;
            var n = vl.f(e),
                a = n.resolve;
            return a(t), n.promise
        },
        Sl = function (e, t) {
            var n = Ce.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
        },
        Pl = function (e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (e) {
                return {
                    error: !0,
                    value: e
                }
            }
        },
        Al = tl.set,
        El = pn("species"),
        Tl = "Promise",
        Cl = wt.get,
        wl = wt.set,
        Ol = wt.getterFor(Tl),
        Vl = xi,
        Rl = Ce.TypeError,
        Ll = Ce.document,
        Il = Ce.process,
        Dl = Lt("fetch"),
        Nl = vl.f,
        Ml = Nl,
        zl = "process" == Me(Il),
        Bl = !!(Ll && Ll.createEvent && Ce.dispatchEvent),
        _l = "unhandledrejection",
        Fl = 0,
        jl = 1,
        Gl = 1,
        Hl = 2,
        Yl = en(Tl, function () {
            var e = st(Vl) !== Vl + "";
            if (!e) {
                if (66 === En) return !0;
                if (!zl && "function" != typeof PromiseRejectionEvent) return !0
            }
            if (51 <= En && /native code/.test(Vl)) return !1;
            var t = Vl.resolve(1),
                n = function (e) {
                    e(function () {}, function () {})
                },
                a = t.constructor = {};
            return a[El] = n, !(t.then(function () {}) instanceof n)
        }),
        $l = Yl || !Ni(function (e) {
            Vl.all(e)["catch"](function () {})
        }),
        Ul = function (e) {
            var t;
            return !!(je(e) && "function" == typeof (t = e.then)) && t
        },
        Wl = function (e, t, n) {
            if (!t.notified) {
                t.notified = !0;
                var a = t.reactions;
                xl(function () {
                    for (var r = t.value, i = t.state == jl, l = 0; a.length > l;) {
                        var o = a[l++],
                            s = i ? o.ok : o.fail,
                            d = o.resolve,
                            u = o.reject,
                            g = o.domain,
                            c, p, y;
                        try {
                            s ? (!i && (t.rejection === Hl && Kl(e, t), t.rejection = Gl), !0 === s ? c = r : (g && g.enter(), c = s(r), g && (g.exit(), y = !0)), c === o.promise ? u(Rl("Promise-chain cycle")) : (p = Ul(c)) ? p.call(c, d, u) : d(c)) : u(r)
                        } catch (e) {
                            g && !y && g.exit(), u(e)
                        }
                    }
                    t.reactions = [], t.notified = !1, n && !t.rejection && Xl(e, t)
                })
            }
        },
        ql = function (e, t, n) {
            var a, r;
            Bl ? (a = Ll.createEvent("Event"), a.promise = t, a.reason = n, a.initEvent(e, !1, !0), Ce.dispatchEvent(a)) : a = {
                promise: t,
                reason: n
            }, (r = Ce["on" + e]) ? r(a) : e === _l && Sl("Unhandled promise rejection", n)
        },
        Xl = function (e, t) {
            Al.call(Ce, function () {
                var n = t.value,
                    a = Ql(t),
                    r;
                if (a && (r = Pl(function () {
                        zl ? Il.emit("unhandledRejection", n, e) : ql(_l, e, n)
                    }), t.rejection = zl || Ql(t) ? Hl : Gl, r.error)) throw r.value
            })
        },
        Ql = function (e) {
            return e.rejection !== Gl && !e.parent
        },
        Kl = function (e, t) {
            Al.call(Ce, function () {
                zl ? Il.emit("rejectionHandled", e) : ql("rejectionhandled", e, t.value)
            })
        },
        Zl = function (e, t, n, a) {
            return function (r) {
                e(t, n, r, a)
            }
        },
        Jl = function (e, t, n, a) {
            t.done || (t.done = !0, a && (t = a), t.value = n, t.state = 2, Wl(e, t, !0))
        },
        eo = function (e, t, n, a) {
            if (!t.done) {
                t.done = !0, a && (t = a);
                try {
                    if (e === n) throw Rl("Promise can't be resolved itself");
                    var r = Ul(n);
                    r ? xl(function () {
                        var a = {
                            done: !1
                        };
                        try {
                            r.call(n, Zl(eo, e, a, t), Zl(Jl, e, a, t))
                        } catch (n) {
                            Jl(e, a, n, t)
                        }
                    }) : (t.value = n, t.state = jl, Wl(e, t, !1))
                } catch (n) {
                    Jl(e, {
                        done: !1
                    }, n, t)
                }
            }
        },
        to, no, ao, ro;
    Yl && (Vl = function (e) {
        Si(this, Vl, Tl), an(e), to.call(this);
        var t = Cl(this);
        try {
            e(Zl(eo, this, t), Zl(Jl, this, t))
        } catch (e) {
            Jl(this, t, e)
        }
    }, to = function () {
        wl(this, {
            type: Tl,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: Fl,
            value: void 0
        })
    }, to.prototype = bi(Vl.prototype, {
        then: function (e, t) {
            var n = Ol(this),
                a = Nl(zi(this, Vl));
            return a.ok = "function" != typeof e || e, a.fail = "function" == typeof t && t, a.domain = zl ? Il.domain : void 0, n.parent = !0, n.reactions.push(a), n.state != Fl && Wl(this, n, !1), a.promise
        },
        catch: function (e) {
            return this.then(void 0, e)
        }
    }), no = function () {
        var e = new to,
            t = Cl(e);
        this.promise = e, this.resolve = Zl(eo, e, t), this.reject = Zl(Jl, e, t)
    }, vl.f = Nl = function (e) {
        return e === Vl || e === ao ? new no(e) : Ml(e)
    }, "function" == typeof xi && (ro = xi.prototype.then, Ot(xi.prototype, "then", function (e, t) {
        var n = this;
        return new Vl(function (e, t) {
            ro.call(n, e, t)
        }).then(e, t)
    }, {
        unsafe: !0
    }), "function" == typeof Dl && nn({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function () {
            return kl(Vl, Dl.apply(Ce, arguments))
        }
    }))), nn({
        global: !0,
        wrap: !0,
        forced: Yl
    }, {
        Promise: Vl
    }), Za(Vl, Tl, !1), ki(Tl), ao = Lt(Tl), nn({
        target: Tl,
        stat: !0,
        forced: Yl
    }, {
        reject: function (e) {
            var t = Nl(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), nn({
        target: Tl,
        stat: !0,
        forced: Yl
    }, {
        resolve: function (e) {
            return kl(this, e)
        }
    }), nn({
        target: Tl,
        stat: !0,
        forced: $l
    }, {
        all: function (e) {
            var t = this,
                n = Nl(t),
                a = n.resolve,
                r = n.reject,
                i = Pl(function () {
                    var n = an(t.resolve),
                        i = [],
                        l = 0,
                        o = 1;
                    Vi(e, function (e) {
                        var s = l++,
                            d = !1;
                        i.push(void 0), o++, n.call(t, e).then(function (e) {
                            d || (d = !0, i[s] = e, --o || a(i))
                        }, r)
                    }), --o || a(i)
                });
            return i.error && r(i.value), n.promise
        },
        race: function (e) {
            var t = this,
                n = Nl(t),
                a = n.reject,
                r = Pl(function () {
                    var r = an(t.resolve);
                    Vi(e, function (e) {
                        r.call(t, e).then(n.resolve, a)
                    })
                });
            return r.error && a(r.value), n.promise
        }
    });
    var io = pn("match"),
        lo = function (e) {
            var t;
            return je(e) && (void 0 === (t = e[io]) ? "RegExp" == Me(e) : !!t)
        },
        oo = [].push,
        so = 4294967295,
        uo = !we(function () {
            return !RegExp(so, "y")
        });
    ta("split", 2, function (e, t, n) {
        var a;
        return a = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length ? function (e, n) {
            var a = _e(this) + "",
                r = void 0 === n ? so : n >>> 0;
            if (0 === r) return [];
            if (void 0 === e) return [a];
            if (!lo(e)) return t.call(a, e, r);
            for (var i = [], l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), o = 0, s = new RegExp(e.source, l + "g"), d, u, g;
                (d = Qn.call(s, a)) && (u = s.lastIndex, !(u > o && (i.push(a.slice(o, d.index)), 1 < d.length && d.index < a.length && oo.apply(i, d.slice(1)), g = d[0].length, o = u, i.length >= r)));) s.lastIndex === d.index && s.lastIndex++;
            return o === a.length ? (g || !s.test("")) && i.push("") : i.push(a.slice(o)), i.length > r ? i.slice(0, r) : i
        } : function (e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        }, [function (t, n) {
            var r = _e(this),
                i = null == t ? void 0 : t[e];
            return void 0 === i ? a.call(r + "", t, n) : i.call(t, r, n)
        }, function (r, l) {
            var o = n(a, r, this, l, a !== t);
            if (o.done) return o.value;
            var s = Ze(r),
                d = this + "",
                u = zi(s, RegExp),
                g = s.unicode,
                c = (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.unicode ? "u" : "") + (uo ? "y" : "g"),
                y = new u(uo ? s : "^(?:" + s.source + ")", c),
                h = void 0 === l ? so : l >>> 0;
            if (0 === h) return [];
            if (0 === d.length) return null === la(y, d) ? [d] : [];
            for (var f = 0, m = 0, x = []; m < d.length;) {
                y.lastIndex = uo ? m : 0;
                var b = la(y, uo ? d : d.slice(m)),
                    v;
                if (null === b || (v = xe(Dt(y.lastIndex + (uo ? 0 : m)), d.length)) === f) m = ia(d, m, g);
                else {
                    if (x.push(d.slice(f, m)), x.length === h) return x;
                    for (var k = 1; k <= b.length - 1; k++)
                        if (x.push(b[k]), x.length === h) return x;
                    m = f = v
                }
            }
            return x.push(d.slice(f)), x
        }]
    }, !uo);
    var go = "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global,
        co = V,
        po = R;
    "function" == typeof go.setTimeout && (co = setTimeout), "function" == typeof go.clearTimeout && (po = clearTimeout);
    var yo = [],
        ho = !1,
        fo = -1,
        mo;
    z.prototype.run = function () {
        this.fun.apply(null, this.array)
    };
    for (var xo = {}, bo = [], vo = {}, ko = {}, So = {}, Po = go.performance || {}, Ao = Po.now || Po.mozNow || Po.msNow || Po.oNow || Po.webkitNow || function () {
            return new Date().getTime()
        }, Eo = new Date, To = {
            nextTick: M,
            title: "browser",
            browser: !0,
            env: xo,
            argv: bo,
            version: "",
            versions: vo,
            on: B,
            addListener: B,
            once: B,
            off: B,
            removeListener: B,
            removeAllListeners: B,
            emit: B,
            binding: _,
            cwd: F,
            chdir: G,
            umask: H,
            hrtime: Y,
            platform: "browser",
            release: ko,
            config: So,
            uptime: $
        }, Co = t(function (e) {
            (function () {
                var t, n, a, r, i, l;
                "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
                    return performance.now()
                } : "undefined" != typeof To && null !== To && To.hrtime ? (e.exports = function () {
                    return (t() - i) / 1e6
                }, n = To.hrtime, t = function () {
                    var e;
                    return e = n(), 1e9 * e[0] + e[1]
                }, r = t(), l = 1e9 * To.uptime(), i = r - l) : Date.now ? (e.exports = function () {
                    return Date.now() - a
                }, a = Date.now()) : (e.exports = function () {
                    return new Date().getTime() - a
                }, a = new Date().getTime())
            }).call(Ee)
        }), wo = "undefined" == typeof window ? Ee : window, Oo = ["moz", "webkit"], Vo = "AnimationFrame", Ro = wo["request" + Vo], Lo = wo["cancel" + Vo] || wo["cancelRequest" + Vo], Io = 0; !Ro && Io < Oo.length; Io++) Ro = wo[Oo[Io] + "Request" + Vo], Lo = wo[Oo[Io] + "Cancel" + Vo] || wo[Oo[Io] + "CancelRequest" + Vo];
    if (!Ro || !Lo) {
        var Do = 0,
            No = 0,
            Mo = [];
        Ro = function (e) {
            if (0 === Mo.length) {
                var t = Co(),
                    n = me(0, 1e3 / 60 - (t - Do));
                Do = n + t, setTimeout(function () {
                    var e = Mo.slice(0);
                    Mo.length = 0;
                    for (var t = 0; t < e.length; t++)
                        if (!e[t].cancelled) try {
                            e[t].callback(Do)
                        } catch (t) {
                            setTimeout(function () {
                                throw t
                            }, 0)
                        }
                }, he(n))
            }
            return Mo.push({
                handle: ++No,
                callback: e,
                cancelled: !1
            }), No
        }, Lo = function (e) {
            for (var t = 0; t < Mo.length; t++) Mo[t].handle === e && (Mo[t].cancelled = !0)
        }
    }
    var zo = function (e) {
            return Ro.call(wo, e)
        },
        Bo = function () {
            Lo.apply(wo, arguments)
        },
        _o = function (e) {
            e || (e = wo), e.requestAnimationFrame = Ro, e.cancelAnimationFrame = Lo
        };
    zo.cancel = Bo, zo.polyfill = _o;
    var Fo = tt.f,
        jo = Function.prototype,
        Go = jo.toString,
        Ho = /^\s*function ([^ (]*)/,
        Yo = "name";
    Oe && !(Yo in jo) && Fo(jo, Yo, {
        configurable: !0,
        get: function () {
            try {
                return Go.call(this).match(Ho)[1]
            } catch (e) {
                return ""
            }
        }
    });
    var $o = function (e) {
            this.ok = !1, this.alpha = 1, "#" == e.charAt(0) && (e = e.substr(1, 6)), e = e.replace(/ /g, ""), e = e.toLowerCase();
            var t = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "00ffff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000000",
                blanchedalmond: "ffebcd",
                blue: "0000ff",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "00ffff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dodgerblue: "1e90ff",
                feldspar: "d19275",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "ff00ff",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgrey: "d3d3d3",
                lightgreen: "90ee90",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslateblue: "8470ff",
                lightslategray: "778899",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "00ff00",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "ff00ff",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370d8",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "d87093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "663399",
                red: "ff0000",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                violetred: "d02090",
                wheat: "f5deb3",
                white: "ffffff",
                whitesmoke: "f5f5f5",
                yellow: "ffff00",
                yellowgreen: "9acd32"
            };
            e = t[e] || e;
            for (var n = [{
                    re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
                    example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
                    process: function (e) {
                        return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3]), parseFloat(e[4])]
                    }
                }, {
                    re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                    example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                    process: function (e) {
                        return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])]
                    }
                }, {
                    re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    example: ["#00ff00", "336699"],
                    process: function (e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    example: ["#fb0", "f0f"],
                    process: function (e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }], a = 0; a < n.length; a++) {
                var r = n[a].re,
                    l = n[a].process,
                    o = r.exec(e);
                if (o) {
                    var s = l(o);
                    this.r = s[0], this.g = s[1], this.b = s[2], 3 < s.length && (this.alpha = s[3]), this.ok = !0
                }
            }
            this.r = 0 > this.r || isNaN(this.r) ? 0 : 255 < this.r ? 255 : this.r, this.g = 0 > this.g || isNaN(this.g) ? 0 : 255 < this.g ? 255 : this.g, this.b = 0 > this.b || isNaN(this.b) ? 0 : 255 < this.b ? 255 : this.b, this.alpha = 0 > this.alpha ? 0 : 1 < this.alpha || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function () {
                return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
            }, this.toRGBA = function () {
                return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")"
            }, this.toHex = function () {
                var e = this.r.toString(16),
                    t = this.g.toString(16),
                    n = this.b.toString(16);
                return 1 == e.length && (e = "0" + e), 1 == t.length && (t = "0" + t), 1 == n.length && (n = "0" + n), "#" + e + t + n
            }, this.getHelpXML = function () {
                for (var e = [], a = 0, r; a < n.length; a++) {
                    r = n[a].example;
                    for (var l = 0; l < r.length; l++) e[e.length] = r[l]
                }
                for (var o in t) e[e.length] = o;
                var s = document.createElement("ul");
                s.setAttribute("id", "rgbcolor-examples");
                for (var a = 0; a < e.length; a++) try {
                    var d = document.createElement("li"),
                        u = new RGBColor(e[a]),
                        g = document.createElement("div");
                    g.style.cssText = "margin: 3px; border: 1px solid black; background:" + u.toHex() + "; color:" + u.toHex(), g.appendChild(document.createTextNode("test"));
                    var c = document.createTextNode(" " + e[a] + " -> " + u.toRGB() + " -> " + u.toHex());
                    d.appendChild(g), d.appendChild(c), s.appendChild(d)
                } catch (t) {}
                return s
            }
        },
        Uo = function () {
            function e(t, n, a) {
                Wr(this, e), this.document = t, this.name = n, this.value = a
            }
            return qr(e, [{
                key: "hasValue",
                value: function () {
                    var e = this.value;
                    return null !== e && "" !== e && 0 !== e && "undefined" != typeof e
                }
            }, {
                key: "isString",
                value: function (e) {
                    var t = this.value,
                        n = "string" == typeof t;
                    return n && e ? e.test(t) : n
                }
            }, {
                key: "isUrlDefinition",
                value: function () {
                    return this.isString(/^url\(/)
                }
            }, {
                key: "isPixels",
                value: function () {
                    if (!this.hasValue()) return !1;
                    var e = this.getString();
                    switch (!0) {
                        case /px$/.test(e):
                        case /^[0-9]+$/.test(e):
                            return !0;
                        default:
                            return !1;
                    }
                }
            }, {
                key: "setValue",
                value: function (e) {
                    return this.value = e, this
                }
            }, {
                key: "getValue",
                value: function (e) {
                    return "undefined" == typeof e || this.hasValue() ? this.value : e
                }
            }, {
                key: "getNumber",
                value: function (e) {
                    if (!this.hasValue()) return "undefined" == typeof e ? 0 : parseFloat(e);
                    var t = this.value,
                        a = parseFloat(t);
                    return this.isString(/%$/) && (a /= 100), a
                }
            }, {
                key: "getString",
                value: function (e) {
                    return "undefined" == typeof e || this.hasValue() ? "undefined" == typeof this.value ? "" : this.value + "" : e + ""
                }
            }, {
                key: "getDpi",
                value: function () {
                    return 96
                }
            }, {
                key: "getRem",
                value: function () {
                    return this.document.rootEmSize
                }
            }, {
                key: "getEm",
                value: function () {
                    return this.document.emSize
                }
            }, {
                key: "getUnits",
                value: function () {
                    return this.getString().replace(/[0-9\.\-]/g, "")
                }
            }, {
                key: "getPixels",
                value: function (e) {
                    var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1];
                    if (!this.hasValue()) return 0;
                    var a = "boolean" == typeof e ? [void 0, e] : [e],
                        r = xa(a, 2),
                        i = r[0],
                        l = r[1],
                        o = this.document.screen.viewPort;
                    switch (!0) {
                        case this.isString(/vmin$/):
                            return this.getNumber() / 100 * xe(o.computeSize("x"), o.computeSize("y"));
                        case this.isString(/vmax$/):
                            return this.getNumber() / 100 * me(o.computeSize("x"), o.computeSize("y"));
                        case this.isString(/vw$/):
                            return this.getNumber() / 100 * o.computeSize("x");
                        case this.isString(/vh$/):
                            return this.getNumber() / 100 * o.computeSize("y");
                        case this.isString(/rem$/):
                            return this.getNumber() * this.getRem();
                        case this.isString(/em$/):
                            return this.getNumber() * this.getEm();
                        case this.isString(/ex$/):
                            return this.getNumber() * this.getEm() / 2;
                        case this.isString(/px$/):
                            return this.getNumber();
                        case this.isString(/pt$/):
                            return this.getNumber() * this.getDpi() * (1 / 72);
                        case this.isString(/pc$/):
                            return 15 * this.getNumber();
                        case this.isString(/cm$/):
                            return this.getNumber() * this.getDpi() / 2.54;
                        case this.isString(/mm$/):
                            return this.getNumber() * this.getDpi() / 25.4;
                        case this.isString(/in$/):
                            return this.getNumber() * this.getDpi();
                        case this.isString(/%$/) && l:
                            return this.getNumber() * this.getEm();
                        case this.isString(/%$/):
                            return this.getNumber() * o.computeSize(i);
                        default: {
                            var s = this.getNumber();
                            return t && 1 > s ? s * o.computeSize(i) : s
                        }
                    }
                }
            }, {
                key: "getMilliseconds",
                value: function () {
                    return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : 1e3 * this.getNumber() : 0
                }
            }, {
                key: "getRadians",
                value: function () {
                    if (!this.hasValue()) return 0;
                    switch (!0) {
                        case this.isString(/deg$/):
                            return this.getNumber() * (ye / 180);
                        case this.isString(/grad$/):
                            return this.getNumber() * (ye / 200);
                        case this.isString(/rad$/):
                            return this.getNumber();
                        default:
                            return this.getNumber() * (ye / 180);
                    }
                }
            }, {
                key: "getDefinition",
                value: function () {
                    var e = this.getString(),
                        t = e.match(/#([^\)'"]+)/);
                    return t && (t = t[1]), t || (t = e), this.document.definitions[t]
                }
            }, {
                key: "getFillStyleDefinition",
                value: function (e, t) {
                    var n = this.getDefinition();
                    if (!n) return null;
                    if ("function" == typeof n.createGradient) return n.createGradient(this.document.ctx, e, t);
                    if ("function" == typeof n.createPattern) {
                        if (n.getHrefAttribute().hasValue()) {
                            var a = n.getAttribute("patternTransform");
                            n = n.getHrefAttribute().getDefinition(), a.hasValue() && n.getAttribute("patternTransform", !0).setValue(a.value)
                        }
                        return n.createPattern(this.document.ctx, e, t)
                    }
                    return null
                }
            }, {
                key: "getTextBaseline",
                value: function () {
                    return this.hasValue() ? e.textBaselineMapping[this.getString()] : null
                }
            }, {
                key: "addOpacity",
                value: function (t) {
                    for (var n = this.value, a = n.length, r = 0, l = 0; l < a && ("," === n[l] && r++, 3 !== r); l++);
                    if (t.hasValue() && this.isString() && 3 !== r) {
                        var o = new $o(n);
                        o.ok && (n = "rgba(".concat(o.r, ", ").concat(o.g, ", ").concat(o.b, ", ").concat(t.getNumber(), ")"))
                    }
                    return new e(this.document, this.name, n)
                }
            }], [{
                key: "empty",
                value: function (t) {
                    return new e(t, "EMPTY", "")
                }
            }]), e
        }();
    Uo.textBaselineMapping = {
        baseline: "alphabetic",
        "before-edge": "top",
        "text-before-edge": "top",
        middle: "middle",
        central: "middle",
        "after-edge": "bottom",
        "text-after-edge": "bottom",
        ideographic: "ideographic",
        alphabetic: "alphabetic",
        hanging: "hanging",
        mathematical: "alphabetic"
    };
    var Wo = function () {
            function e() {
                Wr(this, e), this.viewPorts = []
            }
            return qr(e, [{
                key: "clear",
                value: function () {
                    this.viewPorts = []
                }
            }, {
                key: "setCurrent",
                value: function (e, t) {
                    this.viewPorts.push({
                        width: e,
                        height: t
                    })
                }
            }, {
                key: "removeCurrent",
                value: function () {
                    this.viewPorts.pop()
                }
            }, {
                key: "getCurrent",
                value: function () {
                    var e = this.viewPorts;
                    return e[e.length - 1]
                }
            }, {
                key: "computeSize",
                value: function (e) {
                    return "number" == typeof e ? e : "x" === e ? this.width : "y" === e ? this.height : Pe(Ae(this.width, 2) + Ae(this.height, 2)) / Pe(2)
                }
            }, {
                key: "width",
                get: function () {
                    return this.getCurrent().width
                }
            }, {
                key: "height",
                get: function () {
                    return this.getCurrent().height
                }
            }]), e
        }(),
        qo = function () {
            function e(t, n) {
                Wr(this, e), this.x = t, this.y = n
            }
            return qr(e, [{
                key: "angleTo",
                value: function (e) {
                    return pe(e.y - this.y, e.x - this.x)
                }
            }, {
                key: "applyTransform",
                value: function (e) {
                    var t = this.x,
                        n = this.y,
                        a = t * e[0] + n * e[2] + e[4],
                        r = t * e[1] + n * e[3] + e[5];
                    this.x = a, this.y = r
                }
            }], [{
                key: "parse",
                value: function (t) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        a = o(t),
                        r = xa(a, 2),
                        i = r[0],
                        l = void 0 === i ? n : i,
                        s = r[1],
                        d = void 0 === s ? n : s;
                    return new e(l, d)
                }
            }, {
                key: "parseScale",
                value: function (t) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                        a = o(t),
                        r = xa(a, 2),
                        i = r[0],
                        l = void 0 === i ? n : i,
                        s = r[1],
                        d = void 0 === s ? l : s;
                    return new e(l, d)
                }
            }, {
                key: "parsePath",
                value: function (t) {
                    for (var n = o(t), a = n.length, r = [], l = 0; l < a; l += 2) r.push(new e(n[l], n[l + 1]));
                    return r
                }
            }]), e
        }(),
        Xo = function () {
            function e(t) {
                Wr(this, e), this.screen = t, this.working = !1, this.events = [], this.eventElements = [], this.onClick = this.onClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this)
            }
            return qr(e, [{
                key: "isWorking",
                value: function () {
                    return this.working
                }
            }, {
                key: "start",
                value: function () {
                    if (!this.working) {
                        var e = this.screen,
                            t = this.onClick,
                            n = this.onMouseMove,
                            a = e.ctx.canvas;
                        a.onclick = t, a.onmousemove = n, this.working = !0
                    }
                }
            }, {
                key: "stop",
                value: function () {
                    if (this.working) {
                        var e = this.screen.ctx.canvas;
                        this.working = !1, e.onclick = null, e.onmousemove = null
                    }
                }
            }, {
                key: "hasEvents",
                value: function () {
                    return this.working && 0 < this.events.length
                }
            }, {
                key: "runEvents",
                value: function () {
                    if (this.working) {
                        var e = this.screen,
                            t = this.events,
                            n = this.eventElements,
                            a = e.ctx.canvas.style;
                        a && (a.cursor = ""), t.forEach(function (e, t) {
                            for (var a = e.run, r = n[t]; r;) a(r), r = r.parent
                        }), this.events = [], this.eventElements = []
                    }
                }
            }, {
                key: "checkPath",
                value: function (e, t) {
                    if (this.working && t) {
                        var n = this.events,
                            a = this.eventElements;
                        n.forEach(function (n, r) {
                            var i = n.x,
                                l = n.y;
                            !a[r] && t.isPointInPath && t.isPointInPath(i, l) && (a[r] = e)
                        })
                    }
                }
            }, {
                key: "checkBoundingBox",
                value: function (e, t) {
                    if (this.working && t) {
                        var n = this.events,
                            a = this.eventElements;
                        n.forEach(function (n, r) {
                            var i = n.x,
                                l = n.y;
                            !a[r] && t.isPointInBox(i, l) && (a[r] = e)
                        })
                    }
                }
            }, {
                key: "mapXY",
                value: function (e, t) {
                    for (var n = this.screen, a = n.window, r = n.ctx, i = new qo(e, t), l = r.canvas; l;) i.x -= l.offsetLeft, i.y -= l.offsetTop, l = l.offsetParent;
                    return a.scrollX && (i.x += a.scrollX), a.scrollY && (i.y += a.scrollY), i
                }
            }, {
                key: "onClick",
                value: function (e) {
                    var t = this.mapXY((e || event).clientX, (e || event).clientY),
                        n = t.x,
                        a = t.y;
                    this.events.push({
                        type: "onclick",
                        x: n,
                        y: a,
                        run: function (e) {
                            e.onClick && e.onClick()
                        }
                    })
                }
            }, {
                key: "onMouseMove",
                value: function (e) {
                    var t = this.mapXY((e || event).clientX, (e || event).clientY),
                        n = t.x,
                        a = t.y;
                    this.events.push({
                        type: "onmousemove",
                        x: n,
                        y: a,
                        run: function (e) {
                            e.onMouseMove && e.onMouseMove()
                        }
                    })
                }
            }]), e
        }(),
        Qo = "undefined" == typeof window ? null : window,
        Ko = "undefined" == typeof fetch ? null : fetch.bind(window),
        Zo = function () {
            function e(t) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n.fetch,
                    r = void 0 === a ? Ko : a,
                    i = n.window,
                    l = void 0 === i ? Qo : i;
                Wr(this, e), this.ctx = t, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new Wo, this.mouse = new Xo(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = !1, this.isFirstRender = !0, this.intervalId = null, this.window = l, this.fetch = r
            }
            return qr(e, [{
                key: "wait",
                value: function (e) {
                    this.waits.push(e)
                }
            }, {
                key: "ready",
                value: function () {
                    return this.readyPromise ? this.readyPromise : Promise.resolve()
                }
            }, {
                key: "isReady",
                value: function () {
                    if (this.isReadyLock) return !0;
                    var e = this.waits.every(function (e) {
                        return e()
                    });
                    return e && (this.waits = [], this.resolveReady && this.resolveReady()), this.isReadyLock = e, e
                }
            }, {
                key: "setDefaults",
                value: function (e) {
                    e.strokeStyle = "rgba(0,0,0,0)", e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 4
                }
            }, {
                key: "setViewBox",
                value: function (e) {
                    var t = e.document,
                        n = e.ctx,
                        r = e.aspectRatio,
                        i = e.width,
                        l = e.desiredWidth,
                        o = e.height,
                        s = e.desiredHeight,
                        d = e.minX,
                        u = void 0 === d ? 0 : d,
                        g = e.minY,
                        c = void 0 === g ? 0 : g,
                        p = e.refX,
                        y = e.refY,
                        h = e.clip,
                        f = e.clipX,
                        m = void 0 === f ? 0 : f,
                        x = e.clipY,
                        b = void 0 === x ? 0 : x,
                        v = a(r).replace(/^defer\s/, ""),
                        k = v.split(" "),
                        S = xa(k, 2),
                        P = S[0],
                        A = S[1],
                        E = P || "xMidYMid",
                        T = A || "meet",
                        C = i / l,
                        w = o / s,
                        O = xe(C, w),
                        V = me(C, w),
                        R = l,
                        L = s;
                    "meet" === T && (R *= O, L *= O), "slice" === T && (R *= V, L *= V);
                    var I = new Uo(t, "refX", p),
                        D = new Uo(t, "refY", y),
                        N = I.hasValue() && D.hasValue();
                    if (N && n.translate(-O * I.getPixels("x"), -O * D.getPixels("y")), void 0 !== h && h) {
                        var M = O * m,
                            z = O * b;
                        n.beginPath(), n.moveTo(M, z), n.lineTo(i, z), n.lineTo(i, o), n.lineTo(M, o), n.closePath(), n.clip()
                    }
                    if (!N) {
                        var B = "meet" === T && O === w,
                            _ = "slice" === T && V === w,
                            F = "meet" === T && O === C,
                            j = "slice" === T && V === C;
                        /^xMid/.test(E) && (B || _) && n.translate(i / 2 - R / 2, 0), /YMid$/.test(E) && (F || j) && n.translate(0, o / 2 - L / 2), /^xMax/.test(E) && (B || _) && n.translate(i - R, 0), /YMax$/.test(E) && (F || j) && n.translate(0, o - L)
                    }
                    switch (!0) {
                        case "none" === E:
                            n.scale(C, w);
                            break;
                        case "meet" === T:
                            n.scale(O, O);
                            break;
                        case "slice" === T:
                            n.scale(V, V);
                    }
                    n.translate(-u, -c)
                }
            }, {
                key: "start",
                value: function (e) {
                    var t = this,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        a = n.enableRedraw,
                        r = n.ignoreMouse,
                        i = n.ignoreAnimation,
                        l = n.ignoreDimensions,
                        o = void 0 !== l && l,
                        s = n.ignoreClear,
                        d = void 0 !== s && s,
                        u = n.forceRedraw,
                        g = n.scaleWidth,
                        c = n.scaleHeight,
                        p = n.offsetX,
                        y = n.offsetY,
                        h = this.FRAMERATE,
                        f = this.mouse,
                        m = 1e3 / h;
                    if (this.frameDuration = m, this.readyPromise = new Promise(function (e) {
                            t.resolveReady = e
                        }), this.isReady() && this.render(e, o, d, g, c, p, y), !!(void 0 !== a && a)) {
                        var x = Date.now(),
                            b = x,
                            v = 0,
                            k = function n() {
                                x = Date.now(), v = x - b, v >= m && (b = x - v % m, t.shouldUpdate(void 0 !== i && i, u) && (t.render(e, o, d, g, c, p, y), f.runEvents())), t.intervalId = zo(n)
                            };
                        void 0 !== r && r || f.start(), this.intervalId = zo(k)
                    }
                }
            }, {
                key: "stop",
                value: function () {
                    this.intervalId && (zo.cancel(this.intervalId), this.intervalId = null), this.mouse.stop()
                }
            }, {
                key: "shouldUpdate",
                value: function e(t, n) {
                    if (!t) {
                        var a = this.frameDuration,
                            e = this.animations.reduce(function (e, t) {
                                return t.update(a) || e
                            }, !1);
                        if (e) return !0
                    }
                    return !!("function" == typeof n && n()) || !this.isReadyLock && this.isReady() || !!this.mouse.hasEvents()
                }
            }, {
                key: "render",
                value: function (e, t, n, a, r, i, l) {
                    var s = this.CLIENT_WIDTH,
                        d = this.CLIENT_HEIGHT,
                        u = this.viewPort,
                        g = this.ctx,
                        c = this.isFirstRender,
                        p = g.canvas;
                    u.clear(), p.width && p.height ? u.setCurrent(p.width, p.height) : u.setCurrent(s, d);
                    var y = e.getStyle("width"),
                        h = e.getStyle("height");
                    !t && (c || "number" != typeof a && "number" != typeof r) && (y.hasValue() && (p.width = y.getPixels("x"), p.style && (p.style.width = "".concat(p.width, "px"))), h.hasValue() && (p.height = h.getPixels("y"), p.style && (p.style.height = "".concat(p.height, "px"))));
                    var f = p.clientWidth || p.width,
                        m = p.clientHeight || p.height;
                    if (t && y.hasValue() && h.hasValue() && (f = y.getPixels("x"), m = h.getPixels("y")), u.setCurrent(f, m), "number" == typeof i && e.getAttribute("x", !0).setValue(i), "number" == typeof l && e.getAttribute("y", !0).setValue(l), "number" == typeof a || "number" == typeof r) {
                        var x = o(e.getAttribute("viewBox").getString()),
                            b = 0,
                            v = 0;
                        if ("number" == typeof a) {
                            var k = e.getStyle("width");
                            k.hasValue() ? b = k.getPixels("x") / a : !isNaN(x[2]) && (b = x[2] / a)
                        }
                        if ("number" == typeof r) {
                            var S = e.getStyle("height");
                            S.hasValue() ? v = S.getPixels("y") / r : !isNaN(x[3]) && (v = x[3] / r)
                        }
                        b || (b = v), v || (v = b), e.getAttribute("width", !0).setValue(a), e.getAttribute("height", !0).setValue(r);
                        var P = e.getStyle("transform", !0, !0);
                        P.setValue("".concat(P.getString(), " scale(").concat(1 / b, ", ").concat(1 / v, ")"))
                    }
                    n || g.clearRect(0, 0, f, m), e.render(g), c && (this.isFirstRender = !1)
                }
            }]), e
        }();
    Zo.defaultWindow = Qo, Zo.defaultFetch = Ko;
    var Jo = Zo.defaultFetch,
        es = "undefined" == typeof DOMParser ? null : DOMParser,
        ts = function () {
            function e() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.fetch,
                    a = void 0 === n ? Jo : n,
                    r = t.DOMParser,
                    i = void 0 === r ? es : r;
                Wr(this, e), this.fetch = a, this.DOMParser = i
            }
            return qr(e, [{
                key: "parse",
                value: function () {
                    var e = $r(Yr.mark(function e(t) {
                        return Yr.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!/^</.test(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", this.parseFromString(t));
                                case 2:
                                    return e.abrupt("return", this.load(t));
                                case 3:
                                case "end":
                                    return e.stop();
                            }
                        }, e, this)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "parseFromString",
                value: function (e) {
                    try {
                        var t = new this.DOMParser;
                        return t.parseFromString(e, "image/svg+xml")
                    } catch (t) {
                        var n = new this.DOMParser;
                        return n.parseFromString(e, "text/xml")
                    }
                }
            }, {
                key: "load",
                value: function () {
                    var e = $r(Yr.mark(function e(t) {
                        var n, a;
                        return Yr.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.fetch(t);
                                case 2:
                                    return n = e.sent, e.next = 5, n.text();
                                case 5:
                                    return a = e.sent, e.abrupt("return", this.parseFromString(a));
                                case 7:
                                case "end":
                                    return e.stop();
                            }
                        }, e, this)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }]), e
        }(),
        ns = t(function (e) {
            function t(n) {
                return e.exports = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t = function (e) {
                    return typeof e
                } : t = function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, t(n)
            }
            e.exports = t
        }),
        as = function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        },
        rs = function (e, t) {
            return t && ("object" === ns(t) || "function" == typeof t) ? t : as(e)
        },
        is = t(function (e) {
            function t(n) {
                return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, t(n)
            }
            e.exports = t
        }),
        ls = t(function (e) {
            function t(n, a) {
                return e.exports = t = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, t(n, a)
            }
            e.exports = t
        }),
        os = function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ls(e, t)
        },
        ss = !Ni(function (e) {
            Array.from(e)
        });
    nn({
        target: "Array",
        stat: !0,
        forced: ss
    }, {
        from: function (e) {
            var t = ln(e),
                n = "function" == typeof this ? this : Array,
                a = arguments.length,
                r = 1 < a ? arguments[1] : void 0,
                i = void 0 !== r,
                l = 0,
                o = wi(t),
                s, d, u, g, c;
            if (i && (r = rn(r, 2 < a ? arguments[2] : void 0, 2)), null != o && !(n == Array && Ti(o)))
                for (g = o.call(t), c = g.next, d = new n; !(u = c.call(g)).done; l++) zr(d, l, i ? Oi(g, r, [u.value, l], !0) : u.value);
            else
                for (s = Dt(t.length), d = new n(s); s > l; l++) zr(d, l, i ? r(t[l], l) : t[l]);
            return d.length = l, d
        }
    });
    var ds = pn("unscopables"),
        us = Array.prototype;
    null == us[ds] && tt.f(us, ds, {
        configurable: !0,
        value: ja(null)
    });
    var gs = function (e) {
            us[ds][e] = !0
        },
        cs = zt.includes;
    nn({
        target: "Array",
        proto: !0
    }, {
        includes: function (e) {
            return cs(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }), gs("includes");
    var ps = xn.some;
    nn({
        target: "Array",
        proto: !0,
        forced: ga("some")
    }, {
        some: function (e) {
            return ps(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var ys = function (e) {
            if (lo(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        },
        hs = pn("match");
    nn({
        target: "String",
        proto: !0,
        forced: ! function (e) {
            var t = /./;
            try {
                "/./" [e](t)
            } catch (n) {
                try {
                    return t[hs] = !1, "/./" [e](t)
                } catch (e) {}
            }
            return !1
        }("includes")
    }, {
        includes: function (e) {
            return !!~(_e(this) + "").indexOf(ys(e), 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var fs = !we(function () {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        }),
        ms = ft("IE_PROTO"),
        xs = Object.prototype,
        bs = fs ? Object.getPrototypeOf : function (e) {
            return e = ln(e), Ye(e, ms) ? e[ms] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? xs : null
        },
        vs = pn("iterator"),
        ks = !1,
        Ss, Ps, As;
    [].keys && (As = [].keys(), "next" in As ? (Ps = bs(bs(As)), Ps !== Object.prototype && (Ss = Ps)) : ks = !0), null == Ss && (Ss = {}), Ye(Ss, vs) || nt(Ss, vs, function () {
        return this
    });
    var Es = {
            IteratorPrototype: Ss,
            BUGGY_SAFARI_ITERATORS: ks
        },
        Ts = Es.IteratorPrototype,
        Cs = function () {
            return this
        },
        ws = function (e, t, n) {
            var a = t + " Iterator";
            return e.prototype = ja(Ts, {
                next: De(1, n)
            }), Za(e, a, !1), Pi[a] = Cs, e
        },
        Os = function (e) {
            if (!je(e) && null !== e) throw TypeError("Can't set " + (e + " as a prototype"));
            return e
        },
        Vs = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e = !1,
                t = {},
                n;
            try {
                n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, n.call(t, []), e = t instanceof Array
            } catch (e) {}
            return function (t, a) {
                return Ze(t), Os(a), e ? n.call(t, a) : t.__proto__ = a, t
            }
        }() : void 0),
        Rs = Es.IteratorPrototype,
        Ls = Es.BUGGY_SAFARI_ITERATORS,
        Is = pn("iterator"),
        Ds = "keys",
        Ns = "values",
        Ms = "entries",
        zs = function () {
            return this
        },
        Bs = function (e, t, n, a, r, i, l) {
            ws(n, t, a);
            var o = function (e) {
                    return e === r && g ? g : !Ls && e in d ? d[e] : e === Ds ? function () {
                        return new n(this, e)
                    } : e === Ns ? function () {
                        return new n(this, e)
                    } : e === Ms ? function () {
                        return new n(this, e)
                    } : function () {
                        return new n(this)
                    }
                },
                s = !1,
                d = e.prototype,
                u = d[Is] || d["@@iterator"] || r && d[r],
                g = !Ls && u || o(r),
                c = "Array" == t ? d.entries || u : u,
                p, y, h;
            if (c && (p = bs(c.call(new e)), Rs !== Object.prototype && p.next && (bs(p) !== Rs && (Vs ? Vs(p, Rs) : "function" != typeof p[Is] && nt(p, Is, zs)), Za(p, t + " Iterator", !0))), r == Ns && u && u.name !== Ns && (s = !0, g = function () {
                    return u.call(this)
                }), d[Is] !== g && nt(d, Is, g), Pi[t] = g, r)
                if (y = {
                        values: o(Ns),
                        keys: i ? g : o(Ds),
                        entries: o(Ms)
                    }, l)
                    for (h in y)(Ls || s || !(h in d)) && Ot(d, h, y[h]);
                else nn({
                    target: t,
                    proto: !0,
                    forced: Ls || s
                }, y);
            return y
        },
        _s = aa.charAt,
        Fs = "String Iterator",
        js = wt.set,
        Gs = wt.getterFor(Fs);
    Bs(String, "String", function (e) {
        js(this, {
            type: Fs,
            string: e + "",
            index: 0
        })
    }, function () {
        var e = Gs(this),
            t = e.string,
            n = e.index,
            a;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (a = _s(t, n), e.index += a.length, {
            value: a,
            done: !1
        })
    });
    var Hs = Nn.trim;
    nn({
        target: "String",
        proto: !0,
        forced: function (e) {
            return we(function () {
                return !!"\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF" [e]() || "\u200B\x85\u180E" != "\u200B\x85\u180E" [e]() || "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF" [e].name !== e
            })
        }("trim")
    }, {
        trim: function () {
            return Hs(this)
        }
    });
    var Ys = function () {
        function e(t, n) {
            var a = this,
                r = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2];
            if (Wr(this, e), this.document = t, this.node = n, this.captureTextNodes = r, this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.animationFrozen = !1, this.animationFrozenValue = "", this.parent = null, this.children = [], n && 1 === n.nodeType) {
                if (Array.from(n.attributes).forEach(function (e) {
                        var n = s(e.nodeName);
                        a.attributes[n] = new Uo(t, n, e.value)
                    }), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
                    var i = this.getAttribute("style").getString().split(";").map(function (e) {
                        return e.trim()
                    });
                    i.forEach(function (e) {
                        if (e) {
                            var n = e.split(":"),
                                r = xa(n, 2),
                                i = r[0],
                                l = r[1];
                            a.styles[i] = new Uo(t, i.trim(), l.trim())
                        }
                    })
                }
                var l = t.definitions,
                    o = this.getAttribute("id");
                o.hasValue() && !l[o.getValue()] && (l[o.getValue()] = this), Array.from(n.childNodes).forEach(function (e) {
                    if (1 === e.nodeType) a.addChild(e);
                    else if (r && (3 === e.nodeType || 4 === e.nodeType)) {
                        var n = t.createTextNode(e);
                        0 < n.getText().length && a.addChild(n)
                    }
                })
            }
        }
        return qr(e, [{
            key: "getAttribute",
            value: function (e) {
                var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
                    n = this.attributes[e];
                if (!n && t) {
                    var a = new Uo(this.document, e, "");
                    return this.attributes[e] = a, a
                }
                return n || Uo.empty(this.document)
            }
        }, {
            key: "getHrefAttribute",
            value: function () {
                for (var e in this.attributes)
                    if ("href" == e || /:href$/.test(e)) return this.attributes[e];
                return Uo.empty(this.document)
            }
        }, {
            key: "getStyle",
            value: function (e) {
                var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1],
                    n = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
                    a = this.styles[e];
                if (a) return a;
                var r = this.getAttribute(e);
                if (r && r.hasValue()) return this.styles[e] = r, r;
                if (!n) {
                    var i = this.parent;
                    if (i) {
                        var l = i.getStyle(e);
                        if (l && l.hasValue()) return l
                    }
                }
                if (t) {
                    var o = new Uo(this.document, e, "");
                    return this.styles[e] = o, o
                }
                return a || Uo.empty(this.document)
            }
        }, {
            key: "render",
            value: function (e) {
                if ("none" !== this.getStyle("display").getString() && "hidden" !== this.getStyle("visibility").getString()) {
                    if (e.save(), this.getStyle("mask").hasValue()) {
                        var t = this.getStyle("mask").getDefinition();
                        t && t.apply(e, this)
                    } else if ("none" !== this.getStyle("filter").getValue("none")) {
                        var n = this.getStyle("filter").getDefinition();
                        n && n.apply(e, this)
                    } else this.setContext(e), this.renderChildren(e), this.clearContext(e);
                    e.restore()
                }
            }
        }, {
            key: "setContext",
            value: function () {}
        }, {
            key: "clearContext",
            value: function () {}
        }, {
            key: "renderChildren",
            value: function (e) {
                this.children.forEach(function (t) {
                    t.render(e)
                })
            }
        }, {
            key: "addChild",
            value: function (t) {
                var n = t instanceof e ? t : this.document.createElement(t);
                n.parent = this, e.ignoreChildTypes.includes(n.type) || this.children.push(n)
            }
        }, {
            key: "matchesSelector",
            value: function (e) {
                var t = this.node;
                if ("function" == typeof t.matches) return t.matches(e);
                var n = t.getAttribute("class");
                return !!(n && "" !== n) && n.split(" ").some(function (t) {
                    if (".".concat(t) === e) return !0
                })
            }
        }, {
            key: "addStylesFromStyleDefinition",
            value: function () {
                var e = this.document,
                    t = e.styles,
                    n = e.stylesSpecificity;
                for (var a in t)
                    if ("@" !== a[0] && this.matchesSelector(a)) {
                        var r = t[a],
                            i = n[a];
                        if (r)
                            for (var l in r) {
                                var o = this.stylesSpecificity[l];
                                "undefined" == typeof o && (o = "000"), i >= o && (this.styles[l] = r[l], this.stylesSpecificity[l] = i)
                            }
                    }
            }
        }]), e
    }();
    Ys.ignoreChildTypes = ["title"];
    var $s = function (e) {
            function t(e, n, a) {
                var r;
                return Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), console.warn("Element ".concat(n.nodeName, " not yet implemented.")), r
            }
            return os(t, e), t
        }(Ys),
        Us = zt.indexOf,
        Ws = [].indexOf,
        qs = !!Ws && 0 > 1 / [1].indexOf(1, -0),
        Xs = ga("indexOf");
    nn({
        target: "Array",
        proto: !0,
        forced: qs || Xs
    }, {
        indexOf: function (e) {
            return qs ? Ws.apply(this, arguments) || 0 : Us(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Qs = [].reverse,
        Ks = [1, 2];
    nn({
        target: "Array",
        proto: !0,
        forced: Ks + "" === Ks.reverse() + ""
    }, {
        reverse: function () {
            return on(this) && (this.length = this.length), Qs.call(this)
        }
    });
    var Zs = function (e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = is(e), null !== e););
            return e
        },
        Js = t(function (e) {
            function t(n, a, r) {
                return e.exports = "undefined" != typeof Reflect && Reflect.get ? t = Reflect.get : t = function (e, t, n) {
                    var a = Zs(e, t);
                    if (a) {
                        var r = Object.getOwnPropertyDescriptor(a, t);
                        return r.get ? r.get.call(n) : r.value
                    }
                }, t(n, a, r || n)
            }
            e.exports = t
        }),
        ed = function () {
            function e(t, n, a, r, i, l) {
                Wr(this, e);
                var o = l ? "string" == typeof l ? e.parse(l) : l : {};
                this.fontFamily = i || o.fontFamily, this.fontSize = r || o.fontSize, this.fontStyle = t || o.fontStyle, this.fontWeight = a || o.fontWeight, this.fontVariant = n || o.fontVariant
            }
            return qr(e, [{
                key: "toString",
                value: function () {
                    return [q(this.fontStyle), this.fontVariant, X(this.fontWeight), this.fontSize, W(this.fontFamily)].join(" ").trim()
                }
            }], [{
                key: "parse",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        n = 1 < arguments.length ? arguments[1] : void 0,
                        r = "",
                        i = "",
                        l = "",
                        o = "",
                        s = "",
                        d = a(t).trim().split(" "),
                        u = {
                            fontSize: !1,
                            fontStyle: !1,
                            fontWeight: !1,
                            fontVariant: !1
                        };
                    return d.forEach(function (t) {
                        switch (!0) {
                            case !u.fontStyle && e.styles.includes(t):
                                "inherit" !== t && (r = t), u.fontStyle = !0;
                                break;
                            case !u.fontVariant && e.variants.includes(t):
                                "inherit" !== t && (i = t), u.fontStyle = !0, u.fontVariant = !0;
                                break;
                            case !u.fontWeight && e.weights.includes(t):
                                "inherit" !== t && (l = t), u.fontStyle = !0, u.fontVariant = !0, u.fontWeight = !0;
                                break;
                            case !u.fontSize:
                                if ("inherit" !== t) {
                                    var n = t.split("/"),
                                        a = xa(n, 1);
                                    o = a[0]
                                }
                                u.fontStyle = !0, u.fontVariant = !0, u.fontWeight = !0, u.fontSize = !0;
                                break;
                            default:
                                "inherit" !== t && (s += t);
                        }
                    }), new e(r, i, l, o, s, n)
                }
            }]), e
        }();
    ed.styles = "normal|italic|oblique|inherit", ed.variants = "normal|small-caps|inherit", ed.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
    var td = function (e, t, n) {
            var a, r;
            return Vs && "function" == typeof (a = t.constructor) && a !== n && je(r = a.prototype) && r !== n.prototype && Vs(e, r), e
        },
        nd = Ht.f,
        ad = Ke.f,
        rd = tt.f,
        ld = Nn.trim,
        od = "Number",
        sd = Ce[od],
        dd = sd.prototype,
        ud = Me(ja(dd)) == od,
        gd = function (e) {
            var t = Ge(e, !1),
                n, a, r, i, l, o, s, d;
            if ("string" == typeof t && 2 < t.length)
                if (t = ld(t), n = t.charCodeAt(0), 43 === n || 45 === n) {
                    if (a = t.charCodeAt(2), 88 === a || 120 === a) return NaN;
                } else if (48 === n) {
                switch (t.charCodeAt(1)) {
                    case 66:
                    case 98:
                        r = 2, i = 49;
                        break;
                    case 79:
                    case 111:
                        r = 8, i = 55;
                        break;
                    default:
                        return +t;
                }
                for (l = t.slice(2), o = l.length, s = 0; s < o; s++)
                    if (d = l.charCodeAt(s), 48 > d || d > i) return NaN;
                return parseInt(l, r)
            }
            return +t
        };
    if (en(od, !sd(" 0o1") || !sd("0b1") || sd("+0x1"))) {
        for (var cd = function (e) {
                var t = 1 > arguments.length ? 0 : e,
                    n = this;
                return n instanceof cd && (ud ? we(function () {
                    dd.valueOf.call(n)
                }) : Me(n) != od) ? td(new sd(gd(t)), n, cd) : gd(t)
            }, pd = Oe ? nd(sd) : ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY", "EPSILON", "isFinite", "isInteger", "isNaN", "isSafeInteger", "MAX_SAFE_INTEGER", "MIN_SAFE_INTEGER", "parseFloat", "parseInt", "isInteger"], yd = 0, hd; pd.length > yd; yd++) Ye(sd, hd = pd[yd]) && !Ye(cd, hd) && rd(cd, hd, ad(sd, hd));
        cd.prototype = dd, dd.constructor = cd, Ot(Ce, od, cd)
    }
    var fd = function () {
            function e() {
                var t = Number.NaN,
                    n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : t,
                    a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t,
                    i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : t;
                Wr(this, e), this.x1 = n, this.y1 = a, this.x2 = r, this.y2 = i, this.addPoint(n, a), this.addPoint(r, i)
            }
            return qr(e, [{
                key: "addPoint",
                value: function (e, t) {
                    "undefined" != typeof e && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e, this.x2 = e), e < this.x1 && (this.x1 = e), e > this.x2 && (this.x2 = e)), "undefined" != typeof t && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t, this.y2 = t), t < this.y1 && (this.y1 = t), t > this.y2 && (this.y2 = t))
                }
            }, {
                key: "addX",
                value: function (e) {
                    this.addPoint(e, null)
                }
            }, {
                key: "addY",
                value: function (e) {
                    this.addPoint(null, e)
                }
            }, {
                key: "addBoundingBox",
                value: function (e) {
                    if (e) {
                        var t = e.x1,
                            n = e.y1,
                            a = e.x2,
                            r = e.y2;
                        this.addPoint(t, n), this.addPoint(a, r)
                    }
                }
            }, {
                key: "sumCubic",
                value: function (e, t, n, a, r) {
                    return Ae(1 - e, 3) * t + 3 * Ae(1 - e, 2) * e * n + 3 * (1 - e) * Ae(e, 2) * a + Ae(e, 3) * r
                }
            }, {
                key: "bezierCurveAdd",
                value: function (e, n, r, i, l) {
                    var o = 6 * n - 12 * r + 6 * i,
                        s = -3 * n + 9 * r - 9 * i + 3 * l,
                        a = 3 * r - 3 * n;
                    if (0 === s) {
                        if (0 === o) return;
                        var d = -a / o;
                        return void(0 < d && 1 > d && (e ? this.addX(this.sumCubic(d, n, r, i, l)) : this.addY(this.sumCubic(d, n, r, i, l))))
                    }
                    var t = Ae(o, 2) - 4 * a * s;
                    if (!(0 > t)) {
                        var u = (-o + Pe(t)) / (2 * s);
                        0 < u && 1 > u && (e ? this.addX(this.sumCubic(u, n, r, i, l)) : this.addY(this.sumCubic(u, n, r, i, l)));
                        var g = (-o - Pe(t)) / (2 * s);
                        0 < g && 1 > g && (e ? this.addX(this.sumCubic(g, n, r, i, l)) : this.addY(this.sumCubic(g, n, r, i, l)))
                    }
                }
            }, {
                key: "addBezierCurve",
                value: function (e, t, n, a, r, i, l, o) {
                    this.addPoint(e, t), this.addPoint(l, o), this.bezierCurveAdd(!0, e, n, r, l), this.bezierCurveAdd(!1, t, a, i, o)
                }
            }, {
                key: "addQuadraticCurve",
                value: function (e, t, n, a, r, i) {
                    var l = e + 2 / 3 * (n - e),
                        o = t + 2 / 3 * (a - t);
                    this.addBezierCurve(e, t, l, l + 1 / 3 * (r - e), o, o + 1 / 3 * (i - t), r, i)
                }
            }, {
                key: "isPointInBox",
                value: function (e, t) {
                    var n = this.x1,
                        a = this.y1,
                        r = this.x2,
                        i = this.y2;
                    return n <= e && e <= r && a <= t && t <= i
                }
            }, {
                key: "x",
                get: function () {
                    return this.x1
                }
            }, {
                key: "y",
                get: function () {
                    return this.y1
                }
            }, {
                key: "width",
                get: function () {
                    return this.x2 - this.x1
                }
            }, {
                key: "height",
                get: function () {
                    return this.y2 - this.y1
                }
            }]), e
        }(),
        md = "toString",
        xd = RegExp.prototype,
        bd = xd[md],
        vd = we(function () {
            return "/a/b" != bd.call({
                source: "a",
                flags: "b"
            })
        }),
        kd = bd.name != md;
    (vd || kd) && Ot(RegExp.prototype, md, function () {
        var e = Ze(this),
            t = e.source + "",
            n = e.flags,
            a = (void 0 === n && e instanceof RegExp && !("flags" in xd) ? Fn.call(e) : n) + "";
        return "/" + t + "/" + a
    }, {
        unsafe: !0
    });
    var Sd = function () {
            function e(t, n) {
                Wr(this, e), this.type = "translate", this.point = null, this.point = qo.parse(n)
            }
            return qr(e, [{
                key: "apply",
                value: function (e) {
                    var t = this.point,
                        n = t.x,
                        a = t.y;
                    e.translate(n || 0, a || 0)
                }
            }, {
                key: "unapply",
                value: function (e) {
                    var t = this.point,
                        n = t.x,
                        a = t.y;
                    e.translate(-1 * n || 0, -1 * a || 0)
                }
            }, {
                key: "applyToPoint",
                value: function (e) {
                    var t = this.point,
                        n = t.x,
                        a = t.y;
                    e.applyTransform([1, 0, 0, 1, n || 0, a || 0])
                }
            }]), e
        }(),
        Pd = function () {
            function e(t, n) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
                Wr(this, e), this.type = "rotate", this.angle = null, this.cx = 0, this.cy = 0;
                var r = o(n);
                this.angle = new Uo(t, "angle", r[0]), this.cx = (r[1] || 0) + (a[0] || 0), this.cy = (r[2] || 0) + (a[1] || 0)
            }
            return qr(e, [{
                key: "apply",
                value: function (e) {
                    var t = this.cx,
                        n = this.cy,
                        a = this.angle;
                    e.translate(t, n), e.rotate(a.getRadians()), e.translate(-t, -n)
                }
            }, {
                key: "unapply",
                value: function (e) {
                    var t = this.cx,
                        n = this.cy,
                        a = this.angle;
                    e.translate(t, n), e.rotate(-1 * a.getRadians()), e.translate(-t, -n)
                }
            }, {
                key: "applyToPoint",
                value: function (e) {
                    var t = this.cx,
                        n = this.cy,
                        a = this.angle,
                        r = a.getRadians();
                    e.applyTransform([1, 0, 0, 1, t || 0, n || 0]), e.applyTransform([ke(r), ve(r), -ve(r), ke(r), 0, 0]), e.applyTransform([1, 0, 0, 1, -t || 0, -n || 0])
                }
            }]), e
        }(),
        Ad = function () {
            function e(t, n) {
                Wr(this, e), this.type = "scale", this.scale = null;
                var a = qo.parseScale(n);
                (0 === a.x || 0 === a.y) && (a.x = Ta, a.y = Ta), this.scale = a
            }
            return qr(e, [{
                key: "apply",
                value: function (e) {
                    var t = this.scale,
                        n = t.x,
                        a = t.y;
                    e.scale(n, a || n)
                }
            }, {
                key: "unapply",
                value: function (e) {
                    var t = this.scale,
                        n = t.x,
                        a = t.y;
                    e.scale(1 / n, 1 / a || n)
                }
            }, {
                key: "applyToPoint",
                value: function (e) {
                    var t = this.scale,
                        n = t.x,
                        a = t.y;
                    e.applyTransform([n || 0, 0, 0, a || 0, 0, 0])
                }
            }]), e
        }(),
        Ed = function () {
            function e(t, n) {
                Wr(this, e), this.type = "matrix", this.matrix = [], this.matrix = o(n)
            }
            return qr(e, [{
                key: "apply",
                value: function (e) {
                    var t = this.matrix;
                    e.transform(t[0], t[1], t[2], t[3], t[4], t[5])
                }
            }, {
                key: "unapply",
                value: function (t) {
                    var n = this.matrix,
                        r = n[0],
                        a = n[2],
                        l = n[4],
                        o = n[1],
                        s = n[3],
                        e = n[5],
                        d = 0,
                        u = 0,
                        g = 1,
                        i = 1 / (r * (s * g - e * u) - a * (o * g - e * d) + l * (o * u - s * d));
                    t.transform(i * (s * g - e * u), i * (e * d - o * g), i * (l * u - a * g), i * (r * g - l * d), i * (a * e - l * s), i * (l * o - r * e))
                }
            }, {
                key: "applyToPoint",
                value: function (e) {
                    e.applyTransform(this.matrix)
                }
            }]), e
        }(),
        Td = function (e) {
            function t(e, n) {
                var a;
                return Wr(this, t), a = rs(this, is(t).call(this, e, n)), a.type = "skew", a.angle = null, a.angle = new Uo(e, "angle", n), a
            }
            return os(t, e), t
        }(Ed),
        Cd = function (e) {
            function t(e, n) {
                var a;
                return Wr(this, t), a = rs(this, is(t).call(this, e, n)), a.type = "skewX", a.matrix = [1, 0, ce(a.angle.getRadians()), 1, 0, 0], a
            }
            return os(t, e), t
        }(Td),
        wd = function (e) {
            function t(e, n) {
                var a;
                return Wr(this, t), a = rs(this, is(t).call(this, e, n)), a.type = "skewY", a.matrix = [1, ce(a.angle.getRadians()), 0, 1, 0, 0], a
            }
            return os(t, e), t
        }(Td),
        Od = function () {
            function e(t, n, a) {
                var r = this;
                Wr(this, e), this.document = t, this.transforms = [];
                var i = Q(n),
                    l = a ? o(a) : [];
                i.forEach(function (t) {
                    if ("none" !== t) {
                        var n = K(t),
                            a = xa(n, 2),
                            i = a[0],
                            o = a[1],
                            s = e.transformTypes[i];
                        "undefined" != typeof s && r.transforms.push(new s(r.document, o, l))
                    }
                })
            }
            return qr(e, [{
                key: "apply",
                value: function (e) {
                    for (var t = this.transforms, n = t.length, a = 0; a < n; a++) t[a].apply(e)
                }
            }, {
                key: "unapply",
                value: function (e) {
                    for (var t = this.transforms, n = t.length, a = n - 1; 0 <= a; a--) t[a].unapply(e)
                }
            }, {
                key: "applyToPoint",
                value: function (e) {
                    for (var t = this.transforms, n = t.length, a = 0; a < n; a++) t[a].applyToPoint(e)
                }
            }], [{
                key: "fromElement",
                value: function (t, n) {
                    var a = n.getStyle("transform", !1, !0),
                        r = n.getStyle("transform-origin", !1, !0);
                    return a.hasValue() ? new e(t, a.getString(), r.getString()) : null
                }
            }]), e
        }();
    Od.transformTypes = {
        translate: Sd,
        rotate: Pd,
        scale: Ad,
        matrix: Ed,
        skewX: Cd,
        skewY: wd
    };
    var Vd = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.modifiedEmSizeStack = !1, e
            }
            return os(t, e), qr(t, [{
                key: "calculateOpacity",
                value: function () {
                    for (var e = 1, t = this, n; t;) n = t.getStyle("opacity", !1, !0), n.hasValue() && (e *= n.getNumber()), t = t.parent;
                    return e
                }
            }, {
                key: "setContext",
                value: function (e) {
                    var t = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1];
                    if (!t) {
                        var n = this.getStyle("fill"),
                            a = this.getStyle("fill-opacity"),
                            r = this.getStyle("stroke"),
                            i = this.getStyle("stroke-opacity");
                        if (n.isUrlDefinition()) {
                            var l = n.getFillStyleDefinition(this, a);
                            l && (e.fillStyle = l)
                        } else if (n.hasValue()) {
                            "currentColor" === n.getString() && n.setValue(this.getStyle("color").getValue());
                            var s = n.getString();
                            "inherit" !== s && (e.fillStyle = "none" === s ? "rgba(0,0,0,0)" : s)
                        }
                        if (a.hasValue()) {
                            var d = new Uo(this.document, "fill", e.fillStyle).addOpacity(a).getString();
                            e.fillStyle = d
                        }
                        if (r.isUrlDefinition()) {
                            var u = r.getFillStyleDefinition(this, i);
                            u && (e.strokeStyle = u)
                        } else if (r.hasValue()) {
                            "currentColor" === r.getString() && r.setValue(this.getStyle("color").getValue());
                            var g = r.getString();
                            "inherit" !== g && (e.strokeStyle = "none" === g ? "rgba(0,0,0,0)" : g)
                        }
                        if (i.hasValue()) {
                            var c = new Uo(this.document, "stroke", e.strokeStyle).addOpacity(i).getString();
                            e.strokeStyle = c
                        }
                        var p = this.getStyle("stroke-width");
                        if (p.hasValue()) {
                            var y = p.getPixels();
                            e.lineWidth = y ? y : Ta
                        }
                        var h = this.getStyle("stroke-linecap"),
                            f = this.getStyle("stroke-linejoin"),
                            m = this.getStyle("stroke-miterlimit"),
                            x = this.getStyle("paint-order"),
                            b = this.getStyle("stroke-dasharray"),
                            v = this.getStyle("stroke-dashoffset");
                        if (h.hasValue() && (e.lineCap = h.getString()), f.hasValue() && (e.lineJoin = f.getString()), m.hasValue() && (e.miterLimit = m.getNumber()), x.hasValue() && (e.paintOrder = x.getValue()), b.hasValue() && "none" !== b.getString()) {
                            var k = o(b.getString());
                            "undefined" == typeof e.setLineDash ? "undefined" == typeof e.webkitLineDash ? "undefined" != typeof e.mozDash && (1 !== k.length || 0 !== k[0]) && (e.mozDash = k) : e.webkitLineDash = k : e.setLineDash(k);
                            var S = v.getPixels();
                            "undefined" == typeof e.lineDashOffset ? "undefined" == typeof e.webkitLineDashOffset ? "undefined" != typeof e.mozDashOffset && (e.mozDashOffset = S) : e.webkitLineDashOffset = S : e.lineDashOffset = S
                        }
                    }
                    if (this.modifiedEmSizeStack = !1, "undefined" != typeof e.font) {
                        var P = this.getStyle("font"),
                            A = this.getStyle("font-style"),
                            E = this.getStyle("font-variant"),
                            T = this.getStyle("font-weight"),
                            C = this.getStyle("font-size"),
                            w = this.getStyle("font-family"),
                            O = new ed(A.getString(), E.getString(), T.getString(), C.hasValue() ? "".concat(C.getPixels(!0), "px") : "", w.getString(), ed.parse(P.getString(), e.font));
                        A.setValue(O.fontStyle), E.setValue(O.fontVariant), T.setValue(O.fontWeight), C.setValue(O.fontSize), w.setValue(O.fontFamily), e.font = O.toString(), C.isPixels() && (this.document.emSize = C.getPixels(), this.modifiedEmSizeStack = !0)
                    }
                    var V = Od.fromElement(this.document, this);
                    V && V.apply(e);
                    var R = this.getStyle("clip-path", !1, !0);
                    if (R.hasValue()) {
                        var L = R.getDefinition();
                        L && L.apply(e)
                    }
                    e.globalAlpha = this.calculateOpacity()
                }
            }, {
                key: "clearContext",
                value: function (e) {
                    Js(is(t.prototype), "clearContext", this).call(this, e), this.modifiedEmSizeStack && this.document.popEmSize()
                }
            }]), t
        }(Ys),
        Rd = function (e) {
            function t(e, n, a) {
                var r;
                return Wr(this, t), r = rs(this, is(t).call(this, e, n, (this instanceof t ? this.constructor : void 0) === t || a)), r.type = "text", r.x = 0, r.y = 0, r.measureCache = -1, r
            }
            return os(t, e), qr(t, [{
                key: "setContext",
                value: function (e) {
                    var n = !!(1 < arguments.length && void 0 !== arguments[1]) && arguments[1];
                    Js(is(t.prototype), "setContext", this).call(this, e, n);
                    var a = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
                    a && (e.textBaseline = a)
                }
            }, {
                key: "initializeCoordinates",
                value: function (e) {
                    this.x = this.getAttribute("x").getPixels("x"), this.y = this.getAttribute("y").getPixels("y");
                    var t = this.getAttribute("dx"),
                        n = this.getAttribute("dy");
                    t.hasValue() && (this.x += t.getPixels("x")), n.hasValue() && (this.y += n.getPixels("y")), this.x += this.getAnchorDelta(e, this, 0)
                }
            }, {
                key: "getBoundingBox",
                value: function (e) {
                    var t = this;
                    if ("text" !== this.type) return this.getTElementBoundingBox(e);
                    this.initializeCoordinates(e);
                    var n = null;
                    return this.children.forEach(function (a, r) {
                        var i = t.getChildBoundingBox(e, t, t, r);
                        n ? n.addBoundingBox(i) : n = i
                    }), n
                }
            }, {
                key: "getFontSize",
                value: function () {
                    var e = this.document,
                        t = this.parent,
                        n = ed.parse(e.ctx.font).fontSize,
                        a = t.getStyle("font-size").getNumber(n);
                    return a
                }
            }, {
                key: "getTElementBoundingBox",
                value: function (e) {
                    var t = this.getFontSize();
                    return new fd(this.x, this.y - t, this.x + this.measureText(e), this.y)
                }
            }, {
                key: "getGlyph",
                value: function (e, t, n) {
                    var a = t[n],
                        r = null;
                    if (e.isArabic) {
                        var i = t.length,
                            l = t[n - 1],
                            o = t[n + 1],
                            s = "isolated";
                        (0 === n || " " === l) && n < i - 2 && " " !== o && (s = "terminal"), 0 < n && " " !== l && n < i - 2 && " " !== o && (s = "medial"), 0 < n && " " !== l && (n === i - 1 || " " === o) && (s = "initial"), "undefined" != typeof e.glyphs[a] && (r = e.glyphs[a][s], !r && "glyph" === e.glyphs[a].type && (r = e.glyphs[a]))
                    } else r = e.glyphs[a];
                    return r || (r = e.missingGlyph), r
                }
            }, {
                key: "getText",
                value: function () {
                    return ""
                }
            }, {
                key: "getTextFromNode",
                value: function (e) {
                    var t = e || this.node,
                        n = Array.from(t.parentNode.childNodes),
                        i = n.indexOf(t),
                        o = n.length - 1,
                        s = a(t.value || t.text || t.textContent || "");
                    return 0 === i && (s = r(s)), i === o && (s = l(s)), s
                }
            }, {
                key: "renderChildren",
                value: function (e) {
                    var t = this;
                    if ("text" !== this.type) return void this.renderTElementChildren(e);
                    this.initializeCoordinates(e), this.children.forEach(function (n, a) {
                        t.renderChild(e, t, t, a)
                    });
                    var n = this.document.screen.mouse;
                    n.isWorking() && n.checkBoundingBox(this, this.getBoundingBox(e))
                }
            }, {
                key: "renderTElementChildren",
                value: function (e) {
                    var t = this.document,
                        n = this.parent,
                        a = this.getText(),
                        r = n.getStyle("font-family").getDefinition();
                    if (r) {
                        for (var l = r.fontFace.unitsPerEm, s = ed.parse(t.ctx.font), d = n.getStyle("font-size").getNumber(s.fontSize), u = n.getStyle("font-style").getString(s.fontStyle), g = d / l, c = r.isRTL ? a.split("").reverse().join("") : a, p = o(n.getAttribute("dx").getString()), h = c.length, f = 0, m; f < h; f++) {
                            m = this.getGlyph(r, c, f), e.translate(this.x, this.y), e.scale(g, -g);
                            var b = e.lineWidth;
                            e.lineWidth = e.lineWidth * l / d, "italic" === u && e.transform(1, 0, .4, 1, 0, 0), m.render(e), "italic" === u && e.transform(1, 0, -.4, 1, 0, 0), e.lineWidth = b, e.scale(1 / g, -1 / g), e.translate(-this.x, -this.y), this.x += d * (m.horizAdvX || r.horizAdvX) / l, "undefined" == typeof p[f] || isNaN(p[f]) || (this.x += p[f])
                        }
                        return
                    }
                    var v = this.x,
                        x = this.y;
                    "stroke" === e.paintOrder ? (e.strokeStyle && e.strokeText(a, v, x), e.fillStyle && e.fillText(a, v, x)) : (e.fillStyle && e.fillText(a, v, x), e.strokeStyle && e.strokeText(a, v, x))
                }
            }, {
                key: "getAnchorDelta",
                value: function (e, t, n) {
                    var a = this.getStyle("text-anchor").getString("start");
                    if ("start" !== a) {
                        for (var r = t.children, l = r.length, o = null, s = 0, d = n; d < l && (o = r[d], !(d > n && o.getAttribute("x").hasValue() || o.getAttribute("text-anchor").hasValue())); d++) s += o.measureTextRecursive(e);
                        return -1 * ("end" === a ? s : s / 2)
                    }
                    return 0
                }
            }, {
                key: "adjustChildCoordinates",
                value: function (e, t, n, a) {
                    var r = n.children[a];
                    if ("function" != typeof r.measureText) return r;
                    var i = r.getAttribute("x"),
                        l = r.getAttribute("y"),
                        o = r.getAttribute("dx"),
                        s = r.getAttribute("dy"),
                        d = r.getAttribute("text-anchor").getString("start");
                    if (0 === a && "textNode" !== r.type && (!i.hasValue() && i.setValue(t.getAttribute("x").getValue("0")), !l.hasValue() && l.setValue(t.getAttribute("y").getValue("0")), !o.hasValue() && o.setValue(t.getAttribute("dx").getValue("0")), !s.hasValue() && s.setValue(t.getAttribute("dy").getValue("0"))), i.hasValue()) {
                        if (r.x = i.getPixels("x") + t.getAnchorDelta(e, n, a), "start" !== d) {
                            var u = r.measureTextRecursive(e);
                            r.x += -1 * ("end" === d ? u : u / 2)
                        }
                        o.hasValue() && (r.x += o.getPixels("x"))
                    } else {
                        if ("start" !== d) {
                            var g = r.measureTextRecursive(e);
                            t.x += -1 * ("end" === d ? g : g / 2)
                        }
                        o.hasValue() && (t.x += o.getPixels("x")), r.x = t.x
                    }
                    return t.x = r.x + r.measureText(e), l.hasValue() ? (r.y = l.getPixels("y"), s.hasValue() && (r.y += s.getPixels("y"))) : (s.hasValue() && (t.y += s.getPixels("y")), r.y = t.y), t.y = r.y, r
                }
            }, {
                key: "getChildBoundingBox",
                value: function (e, t, n, a) {
                    var r = this.adjustChildCoordinates(e, t, n, a),
                        l = r.getBoundingBox(e);
                    return l ? (r.children.forEach(function (n, a) {
                        var i = t.getChildBoundingBox(e, t, r, a);
                        l.addBoundingBox(i)
                    }), l) : null
                }
            }, {
                key: "renderChild",
                value: function (e, t, n, a) {
                    var r = this.adjustChildCoordinates(e, t, n, a);
                    r.render(e), r.children.forEach(function (n, a) {
                        t.renderChild(e, t, r, a)
                    })
                }
            }, {
                key: "measureTextRecursive",
                value: function (e) {
                    var t = this.children.reduce(function (t, n) {
                        return t + n.measureTextRecursive(e)
                    }, this.measureText(e));
                    return t
                }
            }, {
                key: "measureText",
                value: function (e) {
                    var t = this.measureCache;
                    if (~t) return t;
                    var n = this.getText(),
                        a = this.measureTargetText(e, n);
                    return this.measureCache = a, a
                }
            }, {
                key: "measureTargetText",
                value: function (e, t) {
                    if (!t.length) return 0;
                    var n = this.parent,
                        a = n.getStyle("font-family").getDefinition();
                    if (a) {
                        for (var r = this.getFontSize(), l = a.isRTL ? t.split("").reverse().join("") : t, s = o(n.getAttribute("dx").getString()), d = l.length, u = 0, g = 0, c; g < d; g++) c = this.getGlyph(a, l, g), u += (c.horizAdvX || a.horizAdvX) * r / a.fontFace.unitsPerEm, "undefined" == typeof s[g] || isNaN(s[g]) || (u += s[g]);
                        return u
                    }
                    if (!e.measureText) return 10 * t.length;
                    e.save(), this.setContext(e, !0);
                    var p = e.measureText(t),
                        y = p.width;
                    return e.restore(), y
                }
            }]), t
        }(Vd),
        Ld = function (e) {
            function t(e, n, a) {
                var r;
                return Wr(this, t), r = rs(this, is(t).call(this, e, n, (this instanceof t ? this.constructor : void 0) === t || a)), r.type = "tspan", r.text = 0 < r.children.length ? "" : r.getTextFromNode(), r
            }
            return os(t, e), qr(t, [{
                key: "getText",
                value: function () {
                    return this.text
                }
            }]), t
        }(Rd),
        Id = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "textNode", e
            }
            return os(t, e), t
        }(Ld);
    nn({
        target: "Array",
        proto: !0
    }, {
        fill: function (e) {
            for (var t = ln(this), n = Dt(t.length), a = arguments.length, r = Nt(1 < a ? arguments[1] : void 0, n), i = 2 < a ? arguments[2] : void 0, l = void 0 === i ? n : Nt(i, n); l > r;) t[r++] = e;
            return t
        }
    }), gs("fill");
    var Dd = function () {
            function e(t) {
                Wr(this, e), this.control = null, this.start = null, this.current = null, this.command = "", this.tokens = [], this.i = -1, this.previousCommand = "", this.points = [], this.angles = [], this.tokens = Z(t).split(" ")
            }
            return qr(e, [{
                key: "reset",
                value: function () {
                    this.i = -1, this.command = "", this.previousCommand = "", this.start = new qo(0, 0), this.control = new qo(0, 0), this.current = new qo(0, 0), this.points = [], this.angles = []
                }
            }, {
                key: "isEnd",
                value: function () {
                    var e = this.i,
                        t = this.tokens;
                    return e >= t.length - 1
                }
            }, {
                key: "isCommandOrEnd",
                value: function () {
                    if (this.isEnd()) return !0;
                    var e = this.i,
                        t = this.tokens;
                    return /^[A-Za-z]$/.test(t[e + 1])
                }
            }, {
                key: "isRelativeCommand",
                value: function () {
                    switch (this.command) {
                        case "m":
                        case "l":
                        case "h":
                        case "v":
                        case "c":
                        case "s":
                        case "q":
                        case "t":
                        case "a":
                        case "z":
                            return !0;
                        default:
                            return !1;
                    }
                }
            }, {
                key: "getToken",
                value: function () {
                    return this.i++, this.tokens[this.i]
                }
            }, {
                key: "getScalar",
                value: function () {
                    return parseFloat(this.getToken())
                }
            }, {
                key: "nextCommand",
                value: function () {
                    this.previousCommand = this.command, this.command = this.getToken()
                }
            }, {
                key: "getPoint",
                value: function () {
                    var e = new qo(this.getScalar(), this.getScalar());
                    return this.makeAbsolute(e)
                }
            }, {
                key: "getAsControlPoint",
                value: function () {
                    var e = this.getPoint();
                    return this.control = e, e
                }
            }, {
                key: "getAsCurrentPoint",
                value: function () {
                    var e = this.getPoint();
                    return this.current = e, e
                }
            }, {
                key: "getReflectedControlPoint",
                value: function () {
                    var e = this.previousCommand.toLowerCase();
                    if ("c" !== e && "s" !== e && "q" !== e && "t" !== e) return this.current;
                    var t = this.current,
                        n = t.x,
                        a = t.y,
                        r = this.control,
                        i = r.x,
                        l = r.y,
                        o = new qo(2 * n - i, 2 * a - l);
                    return o
                }
            }, {
                key: "makeAbsolute",
                value: function (e) {
                    if (this.isRelativeCommand()) {
                        var t = this.current,
                            n = t.x,
                            a = t.y;
                        e.x += n, e.y += a
                    }
                    return e
                }
            }, {
                key: "addMarker",
                value: function (e, t, n) {
                    var a = this.points,
                        r = this.angles;
                    n && 0 < r.length && !r[r.length - 1] && (r[r.length - 1] = a[a.length - 1].angleTo(n)), this.addMarkerAngle(e, t ? t.angleTo(e) : null)
                }
            }, {
                key: "addMarkerAngle",
                value: function (e, t) {
                    this.points.push(e), this.angles.push(t)
                }
            }, {
                key: "getMarkerPoints",
                value: function () {
                    return this.points
                }
            }, {
                key: "getMarkerAngles",
                value: function () {
                    for (var e = this.angles, t = e.length, n = 0; n < t; n++)
                        if (!e[n])
                            for (var a = n + 1; a < t; a++)
                                if (e[a]) {
                                    e[n] = e[a];
                                    break
                                } return e
                }
            }]), e
        }(),
        Nd = function (e) {
            function t(e, n, a) {
                var r;
                return Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "path", r.pathParser = null, r.pathParser = new Dd(r.getAttribute("d").getString()), r
            }
            return os(t, e), qr(t, [{
                key: "path",
                value: function (e) {
                    var t = this.pathParser,
                        n = new fd;
                    for (t.reset(), e && e.beginPath(); !t.isEnd();) switch (t.nextCommand(), t.command) {
                        case "M":
                        case "m":
                            this.pathM(e, n);
                            break;
                        case "L":
                        case "l":
                            this.pathL(e, n);
                            break;
                        case "H":
                        case "h":
                            this.pathH(e, n);
                            break;
                        case "V":
                        case "v":
                            this.pathV(e, n);
                            break;
                        case "C":
                        case "c":
                            this.pathC(e, n);
                            break;
                        case "S":
                        case "s":
                            this.pathS(e, n);
                            break;
                        case "Q":
                        case "q":
                            this.pathQ(e, n);
                            break;
                        case "T":
                        case "t":
                            this.pathT(e, n);
                            break;
                        case "A":
                        case "a":
                            this.pathA(e, n);
                            break;
                        case "Z":
                        case "z":
                            this.pathZ(e, n);
                    }
                    return n
                }
            }, {
                key: "getBoundingBox",
                value: function () {
                    return this.path()
                }
            }, {
                key: "getMarkers",
                value: function () {
                    var e = this.pathParser,
                        t = e.getMarkerPoints(),
                        n = e.getMarkerAngles(),
                        a = t.map(function (e, t) {
                            return [e, n[t]]
                        });
                    return a
                }
            }, {
                key: "renderChildren",
                value: function (e) {
                    this.path(e), this.document.screen.mouse.checkPath(this, e);
                    var t = this.getStyle("fill-rule");
                    "" !== e.fillStyle && ("inherit" === t.getString("inherit") ? e.fill() : e.fill(t.getString())), "" !== e.strokeStyle && e.stroke();
                    var n = this.getMarkers();
                    if (n) {
                        var a = n.length - 1,
                            r = this.getStyle("marker-start"),
                            l = this.getStyle("marker-mid"),
                            o = this.getStyle("marker-end");
                        if (r.isUrlDefinition()) {
                            var s = r.getDefinition(),
                                d = xa(n[0], 2),
                                u = d[0],
                                g = d[1];
                            s.render(e, u, g)
                        }
                        if (l.isUrlDefinition())
                            for (var c = l.getDefinition(), p = 1; p < a; p++) {
                                var y = xa(n[p], 2),
                                    h = y[0],
                                    f = y[1];
                                c.render(e, h, f)
                            }
                        if (o.isUrlDefinition()) {
                            var m = o.getDefinition(),
                                x = xa(n[a], 2),
                                b = x[0],
                                v = x[1];
                            m.render(e, b, v)
                        }
                    }
                }
            }, {
                key: "pathM",
                value: function (e, t) {
                    var n = this.pathParser,
                        a = n.getAsCurrentPoint(),
                        r = a.x,
                        i = a.y;
                    for (n.addMarker(a), t.addPoint(r, i), e && e.moveTo(r, i), n.start = n.current; !n.isCommandOrEnd();) {
                        var l = n.getAsCurrentPoint(),
                            o = l.x,
                            s = l.y;
                        n.addMarker(l, n.start), t.addPoint(o, s), e && e.lineTo(o, s)
                    }
                }
            }, {
                key: "pathL",
                value: function (e, t) {
                    for (var n = this.pathParser; !n.isCommandOrEnd();) {
                        var a = n.current,
                            r = n.getAsCurrentPoint(),
                            i = r.x,
                            l = r.y;
                        n.addMarker(r, a), t.addPoint(i, l), e && e.lineTo(i, l)
                    }
                }
            }, {
                key: "pathH",
                value: function (e, t) {
                    for (var n = this.pathParser; !n.isCommandOrEnd();) {
                        var a = n.current,
                            r = new qo((n.isRelativeCommand() ? a.x : 0) + n.getScalar(), a.y);
                        n.addMarker(r, a), n.current = r, t.addPoint(r.x, r.y), e && e.lineTo(r.x, r.y)
                    }
                }
            }, {
                key: "pathV",
                value: function (e, t) {
                    for (var n = this.pathParser; !n.isCommandOrEnd();) {
                        var a = n.current,
                            r = new qo(a.x, (n.isRelativeCommand() ? a.y : 0) + n.getScalar());
                        n.addMarker(r, a), n.current = r, t.addPoint(r.x, r.y), e && e.lineTo(r.x, r.y)
                    }
                }
            }, {
                key: "pathC",
                value: function (e, t) {
                    for (var n = this.pathParser; !n.isCommandOrEnd();) {
                        var a = n.current,
                            r = n.getPoint(),
                            i = n.getAsControlPoint(),
                            l = n.getAsCurrentPoint();
                        n.addMarker(l, i, r), t.addBezierCurve(a.x, a.y, r.x, r.y, i.x, i.y, l.x, l.y), e && e.bezierCurveTo(r.x, r.y, i.x, i.y, l.x, l.y)
                    }
                }
            }, {
                key: "pathS",
                value: function (e, t) {
                    for (var n = this.pathParser; !n.isCommandOrEnd();) {
                        var a = n.current,
                            r = n.getReflectedControlPoint(),
                            i = n.getAsControlPoint(),
                            l = n.getAsCurrentPoint();
                        n.addMarker(l, i, r), t.addBezierCurve(a.x, a.y, r.x, r.y, i.x, i.y, l.x, l.y), e && e.bezierCurveTo(r.x, r.y, i.x, i.y, l.x, l.y)
                    }
                }
            }, {
                key: "pathQ",
                value: function (e, t) {
                    for (var n = this.pathParser; !n.isCommandOrEnd();) {
                        var a = n.current,
                            r = n.getAsControlPoint(),
                            i = n.getAsCurrentPoint();
                        n.addMarker(i, r, r), t.addQuadraticCurve(a.x, a.y, r.x, r.y, i.x, i.y), e && e.quadraticCurveTo(r.x, r.y, i.x, i.y)
                    }
                }
            }, {
                key: "pathT",
                value: function (e, t) {
                    for (var n = this.pathParser; !n.isCommandOrEnd();) {
                        var a = n.current,
                            r = n.getReflectedControlPoint();
                        n.control = r;
                        var i = n.getAsCurrentPoint();
                        n.addMarker(i, r, r), t.addQuadraticCurve(a.x, a.y, r.x, r.y, i.x, i.y), e && e.quadraticCurveTo(r.x, r.y, i.x, i.y)
                    }
                }
            }, {
                key: "pathA",
                value: function (e, t) {
                    for (var n = this.pathParser; !n.isCommandOrEnd();) {
                        var a = n.current,
                            i = n.getScalar(),
                            o = n.getScalar(),
                            d = n.getScalar() * (ye / 180),
                            g = n.getScalar(),
                            c = n.getScalar(),
                            p = n.getAsCurrentPoint(),
                            y = new qo(ke(d) * (a.x - p.x) / 2 + ve(d) * (a.y - p.y) / 2, -ve(d) * (a.x - p.x) / 2 + ke(d) * (a.y - p.y) / 2),
                            h = Ae(y.x, 2) / Ae(i, 2) + Ae(y.y, 2) / Ae(o, 2);
                        1 < h && (i *= Pe(h), o *= Pe(h));
                        var l = (g === c ? -1 : 1) * Pe((Ae(i, 2) * Ae(o, 2) - Ae(i, 2) * Ae(y.y, 2) - Ae(o, 2) * Ae(y.x, 2)) / (Ae(i, 2) * Ae(y.y, 2) + Ae(o, 2) * Ae(y.x, 2)));
                        isNaN(l) && (l = 0);
                        var f = new qo(l * i * y.y / o, l * -o * y.x / i),
                            m = new qo((a.x + p.x) / 2 + ke(d) * f.x - ve(d) * f.y, (a.y + p.y) / 2 + ve(d) * f.x + ke(d) * f.y),
                            k = b([1, 0], [(y.x - f.x) / i, (y.y - f.y) / o]),
                            S = [(y.x - f.x) / i, (y.y - f.y) / o],
                            u = [(-y.x - f.x) / i, (-y.y - f.y) / o],
                            v = b(S, u); - 1 >= x(S, u) && (v = ye), 1 <= x(S, u) && (v = 0);
                        var P = 1 - c ? 1 : -1,
                            A = k + P * (v / 2),
                            E = new qo(m.x + i * ke(A), m.y + o * ve(A));
                        if (n.addMarkerAngle(E, A - P * ye / 2), n.addMarkerAngle(p, A - P * ye), t.addPoint(p.x, p.y), e && !isNaN(k) && !isNaN(v)) {
                            var T = i > o ? i : o,
                                r = i > o ? 1 : i / o,
                                C = i > o ? o / i : 1;
                            e.translate(m.x, m.y), e.rotate(d), e.scale(r, C), e.arc(0, 0, T, k, k + v, !!(1 - c)), e.scale(1 / r, 1 / C), e.rotate(-d), e.translate(-m.x, -m.y)
                        }
                    }
                }
            }, {
                key: "pathZ",
                value: function (e, t) {
                    var n = this.pathParser;
                    e && t.x1 !== t.x2 && t.y1 !== t.y2 && e.closePath(), n.current = n.start
                }
            }]), t
        }(Vd),
        Md = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "svg", e.root = !1, e
            }
            return os(t, e), qr(t, [{
                key: "clearContext",
                value: function (e) {
                    Js(is(t.prototype), "clearContext", this).call(this, e), this.document.screen.viewPort.removeCurrent()
                }
            }, {
                key: "setContext",
                value: function (e) {
                    var n = this.document,
                        a = n.screen,
                        r = n.window,
                        i = e.canvas;
                    if (a.setDefaults(e), i.style && "undefined" != typeof e.font && r && "undefined" != typeof r.getComputedStyle) {
                        e.font = r.getComputedStyle(i).getPropertyValue("font");
                        var l = new Uo(n, "fontSize", ed.parse(e.font).fontSize);
                        l.hasValue() && (n.rootEmSize = l.getPixels("y"), n.emSize = n.rootEmSize)
                    }
                    Js(is(t.prototype), "setContext", this).call(this, e), this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0), e.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y"));
                    var s = a.viewPort,
                        d = s.width,
                        u = s.height;
                    this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%");
                    var g = this.getAttribute("refX"),
                        c = this.getAttribute("refY"),
                        p = this.getAttribute("viewBox"),
                        y = p.hasValue() ? o(p.getString()) : null,
                        h = !this.root && "visible" !== this.getAttribute("overflow").getValue("hidden"),
                        f = 0,
                        m = 0,
                        x = 0,
                        b = 0;
                    y && (f = y[0], m = y[1]), this.root || (d = this.getStyle("width").getPixels("x"), u = this.getStyle("height").getPixels("y"), "marker" === this.type && (x = f, b = m, f = 0, m = 0)), a.viewPort.setCurrent(d, u), y && (d = y[2], u = y[3]), n.setViewBox({
                        ctx: e,
                        aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                        width: a.viewPort.width,
                        desiredWidth: d,
                        height: a.viewPort.height,
                        desiredHeight: u,
                        minX: f,
                        minY: m,
                        refX: g.getValue(),
                        refY: c.getValue(),
                        clip: h,
                        clipX: x,
                        clipY: b
                    }), y && (a.viewPort.removeCurrent(), a.viewPort.setCurrent(d, u))
                }
            }, {
                key: "resize",
                value: function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : e,
                        n = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2],
                        a = this.getAttribute("width", !0),
                        r = this.getAttribute("height", !0),
                        i = this.getAttribute("viewBox"),
                        l = this.getAttribute("style"),
                        o = a.getNumber(0),
                        s = r.getNumber(0);
                    if (n)
                        if ("string" == typeof n) this.getAttribute("preserveAspectRatio", !0).setValue(n);
                        else {
                            var d = this.getAttribute("preserveAspectRatio");
                            d.hasValue() && d.setValue(d.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"))
                        } if (a.setValue(e), r.setValue(t), i.hasValue() || i.setValue("0 0 ".concat(o || e, " ").concat(s || t)), l.hasValue()) {
                        var u = this.getStyle("width"),
                            g = this.getStyle("height");
                        u.hasValue() && u.setValue("".concat(e, "px")), g.hasValue() && g.setValue("".concat(t, "px"))
                    }
                }
            }]), t
        }(Vd),
        zd = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "rect", e
            }
            return os(t, e), qr(t, [{
                key: "path",
                value: function (e) {
                    var t = this.getAttribute("x").getPixels("x"),
                        n = this.getAttribute("y").getPixels("y"),
                        a = this.getStyle("width").getPixels("x"),
                        r = this.getStyle("height").getPixels("y"),
                        i = this.getAttribute("rx"),
                        l = this.getAttribute("ry"),
                        o = i.getPixels("x"),
                        s = l.getPixels("y");
                    if (i.hasValue() && !l.hasValue() && (s = o), l.hasValue() && !i.hasValue() && (o = s), o = xe(o, a / 2), s = xe(s, r / 2), e) {
                        var d = 4 * ((Pe(2) - 1) / 3);
                        e.beginPath(), 0 < r && 0 < a && (e.moveTo(t + o, n), e.lineTo(t + a - o, n), e.bezierCurveTo(t + a - o + d * o, n, t + a, n + s - d * s, t + a, n + s), e.lineTo(t + a, n + r - s), e.bezierCurveTo(t + a, n + r - s + d * s, t + a - o + d * o, n + r, t + a - o, n + r), e.lineTo(t + o, n + r), e.bezierCurveTo(t + o - d * o, n + r, t, n + r - s + d * s, t, n + r - s), e.lineTo(t, n + s), e.bezierCurveTo(t, n + s - d * s, t + o - d * o, n, t + o, n), e.closePath())
                    }
                    return new fd(t, n, t + a, n + r)
                }
            }, {
                key: "getMarkers",
                value: function () {
                    return null
                }
            }]), t
        }(Nd),
        Bd = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "circle", e
            }
            return os(t, e), qr(t, [{
                key: "path",
                value: function (e) {
                    var t = this.getAttribute("cx").getPixels("x"),
                        n = this.getAttribute("cy").getPixels("y"),
                        a = this.getAttribute("r").getPixels();
                    return e && 0 < a && (e.beginPath(), e.arc(t, n, a, 0, 2 * ye, !1), e.closePath()), new fd(t - a, n - a, t + a, n + a)
                }
            }, {
                key: "getMarkers",
                value: function () {
                    return null
                }
            }]), t
        }(Nd),
        _d = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "ellipse", e
            }
            return os(t, e), qr(t, [{
                key: "path",
                value: function (e) {
                    var t = 4 * ((Pe(2) - 1) / 3),
                        n = this.getAttribute("rx").getPixels("x"),
                        a = this.getAttribute("ry").getPixels("y"),
                        r = this.getAttribute("cx").getPixels("x"),
                        i = this.getAttribute("cy").getPixels("y");
                    return e && (e.beginPath(), e.moveTo(r + n, i), e.bezierCurveTo(r + n, i + t * a, r + t * n, i + a, r, i + a), e.bezierCurveTo(r - t * n, i + a, r - n, i + t * a, r - n, i), e.bezierCurveTo(r - n, i - t * a, r - t * n, i - a, r, i - a), e.bezierCurveTo(r + t * n, i - a, r + n, i - t * a, r + n, i), e.closePath()), new fd(r - n, i - a, r + n, i + a)
                }
            }, {
                key: "getMarkers",
                value: function () {
                    return null
                }
            }]), t
        }(Nd),
        Fd = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "line", e
            }
            return os(t, e), qr(t, [{
                key: "getPoints",
                value: function () {
                    return [new qo(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new qo(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))]
                }
            }, {
                key: "path",
                value: function (e) {
                    var t = this.getPoints(),
                        n = xa(t, 2),
                        a = n[0],
                        r = a.x,
                        i = a.y,
                        l = n[1],
                        o = l.x,
                        s = l.y;
                    return e && (e.beginPath(), e.moveTo(r, i), e.lineTo(o, s)), new fd(r, i, o, s)
                }
            }, {
                key: "getMarkers",
                value: function () {
                    var e = this.getPoints(),
                        t = xa(e, 2),
                        n = t[0],
                        r = t[1],
                        i = n.angleTo(r);
                    return [
                        [n, i],
                        [r, i]
                    ]
                }
            }]), t
        }(Nd),
        jd = function (e) {
            function t(e, n, a) {
                var r;
                return Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "polyline", r.points = [], r.points = qo.parsePath(r.getAttribute("points").getString()), r
            }
            return os(t, e), qr(t, [{
                key: "path",
                value: function (e) {
                    var t = this.points,
                        n = xa(t, 1),
                        a = n[0],
                        r = a.x,
                        i = a.y,
                        l = new fd(r, i);
                    return e && (e.beginPath(), e.moveTo(r, i)), t.forEach(function (t) {
                        var n = t.x,
                            a = t.y;
                        l.addPoint(n, a), e && e.lineTo(n, a)
                    }), l
                }
            }, {
                key: "getMarkers",
                value: function () {
                    var e = this.points,
                        t = e.length - 1,
                        n = [];
                    return e.forEach(function (a, r) {
                        r === t || n.push([a, a.angleTo(e[r + 1])])
                    }), 0 < n.length && n.push([e[e.length - 1], n[n.length - 1][1]]), n
                }
            }]), t
        }(Nd),
        Gd = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "polygon", e
            }
            return os(t, e), qr(t, [{
                key: "path",
                value: function (e) {
                    var n = Js(is(t.prototype), "path", this).call(this, e),
                        a = xa(this.points, 1),
                        r = a[0],
                        i = r.x,
                        l = r.y;
                    return e && (e.lineTo(i, l), e.closePath()), n
                }
            }]), t
        }(jd),
        Hd = Ke.f;
    nn({
        target: "Reflect",
        stat: !0
    }, {
        deleteProperty: function (e, t) {
            var n = Hd(Ze(e), t);
            return (!n || n.configurable) && delete e[t]
        }
    });
    var Yd = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "pattern", e
            }
            return os(t, e), qr(t, [{
                key: "createPattern",
                value: function (e, t, n) {
                    var a = this.getStyle("width").getPixels("x", !0),
                        r = this.getStyle("height").getPixels("y", !0),
                        i = new Md(this.document, null);
                    i.attributes.viewBox = new Uo(this.document, "viewBox", this.getAttribute("viewBox").getValue()), i.attributes.width = new Uo(this.document, "width", "".concat(a, "px")), i.attributes.height = new Uo(this.document, "height", "".concat(r, "px")), i.attributes.transform = new Uo(this.document, "transform", this.getAttribute("patternTransform").getValue()), i.children = this.children;
                    var l = this.document.createCanvas(a, r),
                        o = l.getContext("2d"),
                        s = this.getAttribute("x"),
                        d = this.getAttribute("y");
                    s.hasValue() && d.hasValue() && o.translate(s.getPixels("x", !0), d.getPixels("y", !0)), n.hasValue() ? this.styles["fill-opacity"] = n : Reflect.deleteProperty(this.styles, "fill-opacity");
                    for (var u = -1; 1 >= u; u++)
                        for (var g = -1; 1 >= g; g++) o.save(), i.attributes.x = new Uo(this.document, "x", u * l.width), i.attributes.y = new Uo(this.document, "y", g * l.height), i.render(o), o.restore();
                    var c = e.createPattern(l, "repeat");
                    return c
                }
            }]), t
        }(Ys),
        $d = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "marker", e
            }
            return os(t, e), qr(t, [{
                key: "render",
                value: function (e, t, n) {
                    if (t) {
                        var a = t.x,
                            r = t.y,
                            i = this.getAttribute("orient").getValue("auto"),
                            l = this.getAttribute("markerUnits").getValue("strokeWidth");
                        e.translate(a, r), "auto" === i && e.rotate(n), "strokeWidth" === l && e.scale(e.lineWidth, e.lineWidth), e.save();
                        var o = new Md(this.document, null);
                        o.type = this.type, o.attributes.viewBox = new Uo(this.document, "viewBox", this.getAttribute("viewBox").getValue()), o.attributes.refX = new Uo(this.document, "refX", this.getAttribute("refX").getValue()), o.attributes.refY = new Uo(this.document, "refY", this.getAttribute("refY").getValue()), o.attributes.width = new Uo(this.document, "width", this.getAttribute("markerWidth").getValue()), o.attributes.height = new Uo(this.document, "height", this.getAttribute("markerHeight").getValue()), o.attributes.overflow = new Uo(this.document, "overflow", this.getAttribute("overflow").getValue()), o.attributes.fill = new Uo(this.document, "fill", this.getAttribute("fill").getValue("black")), o.attributes.stroke = new Uo(this.document, "stroke", this.getAttribute("stroke").getValue("none")), o.children = this.children, o.render(e), e.restore(), "strokeWidth" === l && e.scale(1 / e.lineWidth, 1 / e.lineWidth), "auto" === i && e.rotate(-n), e.translate(-a, -r)
                    }
                }
            }]), t
        }(Ys),
        Ud = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "defs", e
            }
            return os(t, e), qr(t, [{
                key: "render",
                value: function () {}
            }]), t
        }(Ys),
        Wd = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "g", e
            }
            return os(t, e), qr(t, [{
                key: "getBoundingBox",
                value: function (e) {
                    var t = new fd;
                    return this.children.forEach(function (n) {
                        t.addBoundingBox(n.getBoundingBox(e))
                    }), t
                }
            }]), t
        }(Vd),
        qd = function (e) {
            function t(e, n, a) {
                var r;
                Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.attributesToInherit = ["gradientUnits"], r.stops = [];
                var i = as(r),
                    l = i.stops,
                    o = i.children;
                return o.forEach(function (e) {
                    "stop" === e.type && l.push(e)
                }), r
            }
            return os(t, e), qr(t, [{
                key: "getGradientUnits",
                value: function () {
                    return this.getAttribute("gradientUnits").getString("objectBoundingBox")
                }
            }, {
                key: "createGradient",
                value: function (e, t, n) {
                    var a = this,
                        r = this;
                    this.getHrefAttribute().hasValue() && (r = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(r));
                    var i = r,
                        l = i.stops,
                        o = this.getGradient(e, t);
                    if (!o) return this.addParentOpacity(n, l[l.length - 1].color);
                    if (l.forEach(function (e) {
                            o.addColorStop(e.offset, a.addParentOpacity(n, e.color))
                        }), this.getAttribute("gradientTransform").hasValue()) {
                        var s = this.document,
                            d = s.screen,
                            u = d.MAX_VIRTUAL_PIXELS,
                            g = d.viewPort,
                            c = xa(g.viewPorts, 1),
                            p = c[0],
                            y = new zd(s, null);
                        y.attributes.x = new Uo(s, "x", -u / 3), y.attributes.y = new Uo(s, "y", -u / 3), y.attributes.width = new Uo(s, "width", u), y.attributes.height = new Uo(s, "height", u);
                        var h = new Wd(s, null);
                        h.attributes.transform = new Uo(s, "transform", this.getAttribute("gradientTransform").getValue()), h.children = [y];
                        var f = new Md(s, null);
                        f.attributes.x = new Uo(s, "x", 0), f.attributes.y = new Uo(s, "y", 0), f.attributes.width = new Uo(s, "width", p.width), f.attributes.height = new Uo(s, "height", p.height), f.children = [h];
                        var m = s.createCanvas(p.width, p.height),
                            x = m.getContext("2d");
                        return x.fillStyle = o, f.render(x), x.createPattern(m, "no-repeat")
                    }
                    return o
                }
            }, {
                key: "inheritStopContainer",
                value: function (e) {
                    var t = this;
                    this.attributesToInherit.forEach(function (n) {
                        !t.getAttribute(n).hasValue() && e.getAttribute(n).hasValue() && t.getAttribute(n, !0).setValue(e.getAttribute(n).getValue())
                    })
                }
            }, {
                key: "addParentOpacity",
                value: function (e, t) {
                    if (e.hasValue()) {
                        var n = new Uo(this.document, "color", t);
                        return n.addOpacity(e).getString()
                    }
                    return t
                }
            }]), t
        }(Ys),
        Xd = function (e) {
            function t(e, n, a) {
                var r;
                return Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "linearGradient", r.attributesToInherit.push("x1", "y1", "x2", "y2"), r
            }
            return os(t, e), qr(t, [{
                key: "getGradient",
                value: function (e, t) {
                    var n = "objectBoundingBox" === this.getGradientUnits(),
                        a = n ? t.getBoundingBox(e) : null;
                    if (n && !a) return null;
                    this.getAttribute("x1").hasValue() || this.getAttribute("y1").hasValue() || this.getAttribute("x2").hasValue() || this.getAttribute("y2").hasValue() || (this.getAttribute("x1", !0).setValue(0), this.getAttribute("y1", !0).setValue(0), this.getAttribute("x2", !0).setValue(1), this.getAttribute("y2", !0).setValue(0));
                    var r = n ? a.x + a.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"),
                        i = n ? a.y + a.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"),
                        l = n ? a.x + a.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"),
                        o = n ? a.y + a.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
                    return r === l && i === o ? null : e.createLinearGradient(r, i, l, o)
                }
            }]), t
        }(qd),
        Qd = function (e) {
            function t(e, n, a) {
                var r;
                return Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "radialGradient", r.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr"), r
            }
            return os(t, e), qr(t, [{
                key: "getGradient",
                value: function (e, t) {
                    var n = "objectBoundingBox" === this.getGradientUnits(),
                        a = t.getBoundingBox(e);
                    if (n && !a) return null;
                    this.getAttribute("cx").hasValue() || this.getAttribute("cx", !0).setValue("50%"), this.getAttribute("cy").hasValue() || this.getAttribute("cy", !0).setValue("50%"), this.getAttribute("r").hasValue() || this.getAttribute("r", !0).setValue("50%");
                    var i = n ? a.x + a.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"),
                        l = n ? a.y + a.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"),
                        o = i,
                        s = l;
                    this.getAttribute("fx").hasValue() && (o = n ? a.x + a.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), this.getAttribute("fy").hasValue() && (s = n ? a.y + a.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
                    var d = n ? (a.width + a.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(),
                        r = this.getAttribute("fr").getPixels();
                    return e.createRadialGradient(o, s, r, i, l, d)
                }
            }]), t
        }(qd),
        Kd = function (e) {
            function t(e, n, a) {
                var r;
                Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "stop";
                var i = me(0, xe(1, r.getAttribute("offset").getNumber())),
                    l = r.getStyle("stop-opacity"),
                    o = r.getStyle("stop-color", !0);
                return "" === o.getString() && o.setValue("#000"), l.hasValue() && (o = o.addOpacity(l)), r.offset = i, r.color = o.getString(), r
            }
            return os(t, e), t
        }(Ys),
        Zd = "Array Iterator",
        Jd = wt.set,
        eu = wt.getterFor(Zd),
        tu = Bs(Array, "Array", function (e, t) {
            Jd(this, {
                type: Zd,
                target: Fe(e),
                index: 0,
                kind: t
            })
        }, function () {
            var e = eu(this),
                t = e.target,
                n = e.kind,
                a = e.index++;
            return !t || a >= t.length ? (e.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: a,
                done: !1
            } : "values" == n ? {
                value: t[a],
                done: !1
            } : {
                value: [a, t[a]],
                done: !1
            }
        }, "values");
    Pi.Arguments = Pi.Array, gs("keys"), gs("values"), gs("entries");
    var nu = pn("iterator"),
        au = pn("toStringTag"),
        ru = tu.values;
    for (var iu in _r) {
        var lu = Ce[iu],
            ou = lu && lu.prototype;
        if (ou) {
            if (ou[nu] !== ru) try {
                nt(ou, nu, ru)
            } catch (e) {
                ou[nu] = ru
            }
            if (ou[au] || nt(ou, au, iu), _r[iu])
                for (var su in tu)
                    if (ou[su] !== tu[su]) try {
                        nt(ou, su, tu[su])
                    } catch (e) {
                        ou[su] = tu[su]
                    }
        }
    }
    var du = function (e) {
            function t(e, n, a) {
                var r;
                return Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "animate", r.duration = 0, r.initialValue = null, r.initialUnits = "", r.removed = !1, r.frozen = !1, e.screen.animations.push(as(r)), r.begin = r.getAttribute("begin").getMilliseconds(), r.maxDuration = r.begin + r.getAttribute("dur").getMilliseconds(), r.from = r.getAttribute("from"), r.to = r.getAttribute("to"), r.values = r.getAttribute("values"), r.values.hasValue() && r.values.setValue(r.values.getString().split(";")), r
            }
            return os(t, e), qr(t, [{
                key: "getProperty",
                value: function () {
                    var e = this.getAttribute("attributeType").getString(),
                        t = this.getAttribute("attributeName").getString();
                    return "CSS" === e ? this.parent.getStyle(t, !0) : this.parent.getAttribute(t, !0)
                }
            }, {
                key: "calcValue",
                value: function () {
                    var e = this.initialUnits,
                        t = this.getProgress(),
                        n = t.progress,
                        a = t.from,
                        r = t.to,
                        i = a.getNumber() + (r.getNumber() - a.getNumber()) * n;
                    return "%" === e && (i *= 100), "".concat(i).concat(e)
                }
            }, {
                key: "update",
                value: function (e) {
                    var t = this.parent,
                        n = this.getProperty();
                    if (this.initialValue || (this.initialValue = n.getString(), this.initialUnits = n.getUnits()), this.duration > this.maxDuration) {
                        var a = this.getAttribute("fill").getString("remove");
                        if ("indefinite" === this.getAttribute("repeatCount").getString() || "indefinite" === this.getAttribute("repeatDur").getString()) this.duration = 0;
                        else if ("freeze" === a && !this.frozen) this.frozen = !0, t.animationFrozen = !0, t.animationFrozenValue = n.getString();
                        else if ("remove" === a && !this.removed) return this.removed = !0, n.setValue(t.animationFrozen ? t.animationFrozenValue : this.initialValue), !0;
                        return !1
                    }
                    this.duration += e;
                    var r = !1;
                    if (this.begin < this.duration) {
                        var i = this.calcValue(),
                            l = this.getAttribute("type");
                        if (l.hasValue()) {
                            var o = l.getString();
                            i = "".concat(o, "(").concat(i, ")")
                        }
                        n.setValue(i), r = !0
                    }
                    return r
                }
            }, {
                key: "getProgress",
                value: function () {
                    var e = this.document,
                        t = this.values,
                        n = {
                            progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
                        };
                    if (t.hasValue()) {
                        var a = n.progress * (t.getValue().length - 1),
                            r = Se(a),
                            i = be(a);
                        n.from = new Uo(e, "from", parseFloat(t.getValue()[r])), n.to = new Uo(e, "to", parseFloat(t.getValue()[i])), n.progress = (a - r) / (i - r)
                    } else n.from = this.from, n.to = this.to;
                    return n
                }
            }]), t
        }(Ys),
        uu = Nn.trim,
        gu = Ce.parseInt,
        cu = /^[+-]?0[Xx]/,
        pu = 8 !== gu("\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF08") || 22 !== gu("\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF0x16"),
        yu = pu ? function (e, t) {
            var n = uu(e + "");
            return gu(n, t >>> 0 || (cu.test(n) ? 16 : 10))
        } : gu;
    nn({
        global: !0,
        forced: parseInt != yu
    }, {
        parseInt: yu
    });
    var hu = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "animateColor", e
            }
            return os(t, e), qr(t, [{
                key: "calcValue",
                value: function () {
                    var e = this.getProgress(),
                        t = e.progress,
                        n = e.from,
                        a = e.to,
                        i = new $o(n.getString()),
                        l = new $o(a.getString());
                    if (i.ok && l.ok) {
                        var o = i.r + (l.r - i.r) * t,
                            r = i.g + (l.g - i.g) * t,
                            s = i.b + (l.b - i.b) * t;
                        return "rgb(".concat(parseInt(o, 10), ", ").concat(parseInt(r, 10), ", ").concat(parseInt(s, 10), ")")
                    }
                    return this.getAttribute("from").getString()
                }
            }]), t
        }(du),
        fu = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "animateTransform", e
            }
            return os(t, e), qr(t, [{
                key: "calcValue",
                value: function () {
                    var e = this.getProgress(),
                        t = e.progress,
                        n = e.from,
                        a = e.to,
                        r = o(n.getString()),
                        l = o(a.getString()),
                        s = r.map(function (e, n) {
                            var a = l[n];
                            return e + (a - e) * t
                        }).join(" ");
                    return s
                }
            }]), t
        }(du),
        mu = tt.f,
        xu = Ce.Symbol;
    if (Oe && "function" == typeof xu && (!("description" in xu.prototype) || void 0 !== xu().description)) {
        var bu = {},
            vu = function () {
                var e = 1 > arguments.length || void 0 === arguments[0] ? void 0 : arguments[0] + "",
                    t = this instanceof vu ? new xu(e) : void 0 === e ? xu() : xu(e);
                return "" === e && (bu[t] = !0), t
            };
        Wt(vu, xu);
        var ku = vu.prototype = xu.prototype;
        ku.constructor = vu;
        var Su = ku.toString,
            Pu = "Symbol(test)" == xu("test") + "",
            Au = /^Symbol\((.*)\)[^)]+$/;
        mu(ku, "description", {
            configurable: !0,
            get: function () {
                var e = je(this) ? this.valueOf() : this,
                    t = Su.call(e);
                if (Ye(bu, e)) return "";
                var n = Pu ? t.slice(7, -1) : t.replace(Au, "$1");
                return "" === n ? void 0 : n
            }
        }), nn({
            global: !0,
            forced: !0
        }, {
            Symbol: vu
        })
    }
    Xa("iterator");
    var Eu = function (e) {
            function t(e, n, a) {
                var r;
                Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "font", r.glyphs = {}, r.horizAdvX = r.getAttribute("horiz-adv-x").getNumber();
                var i = e.definitions,
                    l = as(r),
                    o = l.children,
                    s = !0,
                    d = !1,
                    u = void 0;
                try {
                    for (var g = o[Symbol.iterator](), c, p; !(s = (c = g.next()).done); s = !0) switch (p = c.value, p.type) {
                        case "font-face": {
                            r.fontFace = p;
                            var y = p.getStyle("font-family");
                            y.hasValue() && (i[y.getString()] = as(r));
                            break
                        }
                        case "missing-glyph":
                            r.missingGlyph = p;
                            break;
                        case "glyph": {
                            var h = p;
                            h.arabicForm ? (r.isRTL = !0, r.isArabic = !0, "undefined" == typeof r.glyphs[h.unicode] && (r.glyphs[h.unicode] = {}), r.glyphs[h.unicode][h.arabicForm] = h) : r.glyphs[h.unicode] = h;
                            break
                        }
                        default:
                    }
                } catch (e) {
                    d = !0, u = e
                } finally {
                    try {
                        s || null == g.return || g.return()
                    } finally {
                        if (d) throw u
                    }
                }
                return r
            }
            return os(t, e), qr(t, [{
                key: "render",
                value: function () {}
            }]), t
        }(Ys),
        Tu = function (e) {
            function t(e, n, a) {
                var r;
                return Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "font-face", r.ascent = r.getAttribute("ascent").getNumber(), r.descent = r.getAttribute("descent").getNumber(), r.unitsPerEm = r.getAttribute("units-per-em").getNumber(), r
            }
            return os(t, e), t
        }(Ys),
        Cu = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "missing-glyph", e.horizAdvX = 0, e
            }
            return os(t, e), t
        }(Nd),
        wu = function (e) {
            function t(e, n, a) {
                var r;
                return Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "glyph", r.horizAdvX = r.getAttribute("horiz-adv-x").getNumber(), r.unicode = r.getAttribute("unicode").getString(), r.arabicForm = r.getAttribute("arabic-form").getString(), r
            }
            return os(t, e), t
        }(Nd),
        Ou = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "tref", e
            }
            return os(t, e), qr(t, [{
                key: "getText",
                value: function () {
                    var e = this.getHrefAttribute().getDefinition();
                    if (e) {
                        var t = e.children[0];
                        if (t) return t.getText()
                    }
                    return ""
                }
            }]), t
        }(Rd),
        Vu = function (e) {
            function t(e, n, a) {
                var r;
                Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "a";
                var i = n.childNodes,
                    l = i[0],
                    o = 0 < i.length && Array.from(i).every(function (e) {
                        return 3 === e.nodeType
                    });
                return r.hasText = o, r.text = o ? r.getTextFromNode(l) : "", r
            }
            return os(t, e), qr(t, [{
                key: "getText",
                value: function () {
                    return this.text
                }
            }, {
                key: "renderChildren",
                value: function (e) {
                    if (this.hasText) {
                        Js(is(t.prototype), "renderChildren", this).call(this, e);
                        var n = this.document,
                            a = this.x,
                            r = this.y,
                            i = n.screen.mouse,
                            l = new Uo(n, "fontSize", ed.parse(n.ctx.font).fontSize);
                        i.isWorking() && i.checkBoundingBox(this, new fd(a, r - l.getPixels("y"), a + this.measureText(e), r))
                    } else if (0 < this.children.length) {
                        var o = new Wd(this.document, null);
                        o.children = this.children, o.parent = this, o.render(e)
                    }
                }
            }, {
                key: "onClick",
                value: function () {
                    var e = this.document.window;
                    e && e.open(this.getHrefAttribute().getString())
                }
            }, {
                key: "onMouseMove",
                value: function () {
                    var e = this.document.ctx;
                    e.canvas.style.cursor = "pointer"
                }
            }]), t
        }(Rd),
        Ru = !we(function () {
            return Object.isExtensible(Object.preventExtensions({}))
        }),
        Lu = t(function (e) {
            var t = tt.f,
                n = yt("meta"),
                a = 0,
                r = Object.isExtensible || function () {
                    return !0
                },
                i = function (e) {
                    t(e, n, {
                        value: {
                            objectID: "O" + ++a,
                            weakData: {}
                        }
                    })
                },
                l = e.exports = {
                    REQUIRED: !1,
                    fastKey: function (e, t) {
                        if (!je(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!Ye(e, n)) {
                            if (!r(e)) return "F";
                            if (!t) return "E";
                            i(e)
                        }
                        return e[n].objectID
                    },
                    getWeakData: function (e, t) {
                        if (!Ye(e, n)) {
                            if (!r(e)) return !0;
                            if (!t) return !1;
                            i(e)
                        }
                        return e[n].weakData
                    },
                    onFreeze: function (e) {
                        return Ru && l.REQUIRED && r(e) && !Ye(e, n) && i(e), e
                    }
                };
            mt[n] = !0
        }),
        Iu = Lu.REQUIRED,
        Du = Lu.fastKey,
        Nu = Lu.getWeakData,
        Mu = Lu.onFreeze,
        zu = tt.f,
        Bu = Lu.fastKey,
        _u = wt.set,
        Fu = wt.getterFor,
        ju = function (e, t, n) {
            var a = -1 !== e.indexOf("Map"),
                r = -1 !== e.indexOf("Weak"),
                i = a ? "set" : "add",
                l = Ce[e],
                o = l && l.prototype,
                s = l,
                d = {},
                u = function (e) {
                    var t = o[e];
                    Ot(o, e, "add" == e ? function (e) {
                        return t.call(this, 0 === e ? 0 : e), this
                    } : "delete" == e ? function (e) {
                        return (!r || je(e)) && t.call(this, 0 === e ? 0 : e)
                    } : "get" == e ? function (e) {
                        return r && !je(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                    } : "has" == e ? function (e) {
                        return (!r || je(e)) && t.call(this, 0 === e ? 0 : e)
                    } : function (e, n) {
                        return t.call(this, 0 === e ? 0 : e, n), this
                    })
                };
            if (en(e, "function" != typeof l || !(r || o.forEach && !we(function () {
                    new l().entries().next()
                })))) s = n.getConstructor(t, e, a, i), Lu.REQUIRED = !0;
            else if (en(e, !0)) {
                var g = new s,
                    c = g[i](r ? {} : -0, 1) != g,
                    p = we(function () {
                        g.has(1)
                    }),
                    y = Ni(function (e) {
                        new l(e)
                    }),
                    h = !r && we(function () {
                        for (var e = new l, t = 5; t--;) e[i](t, t);
                        return !e.has(-0)
                    });
                y || (s = t(function (t, n) {
                    Si(t, s, e);
                    var r = td(new l, t, s);
                    return null != n && Vi(n, r[i], r, a), r
                }), s.prototype = o, o.constructor = s), (p || h) && (u("delete"), u("has"), a && u("get")), (h || c) && u(i), r && o.clear && delete o.clear
            }
            return d[e] = s, nn({
                global: !0,
                forced: s != l
            }, d), Za(s, e), r || n.setStrong(s, e, a), s
        }("Map", function (e) {
            return function () {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, {
            getConstructor: function (e, t, n, a) {
                var r = e(function (e, i) {
                        Si(e, r, t), _u(e, {
                            type: t,
                            index: ja(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }), Oe || (e.size = 0), null != i && Vi(i, e[a], e, n)
                    }),
                    i = Fu(t),
                    l = function (e, t, n) {
                        var a = i(e),
                            r = o(e, t),
                            l, s;
                        return r ? r.value = n : (a.last = r = {
                            index: s = Bu(t, !0),
                            key: t,
                            value: n,
                            previous: l = a.last,
                            next: void 0,
                            removed: !1
                        }, !a.first && (a.first = r), l && (l.next = r), Oe ? a.size++ : e.size++, "F" !== s && (a.index[s] = r)), e
                    },
                    o = function (e, t) {
                        var n = i(e),
                            a = Bu(t),
                            r;
                        if ("F" !== a) return n.index[a];
                        for (r = n.first; r; r = r.next)
                            if (r.key == t) return r
                    };
                return bi(r.prototype, {
                    clear: function () {
                        for (var e = this, t = i(e), n = t.index, a = t.first; a;) a.removed = !0, a.previous && (a.previous = a.previous.next = void 0), delete n[a.index], a = a.next;
                        t.first = t.last = void 0, Oe ? t.size = 0 : e.size = 0
                    },
                    delete: function (e) {
                        var t = this,
                            n = i(t),
                            a = o(t, e);
                        if (a) {
                            var r = a.next,
                                l = a.previous;
                            delete n.index[a.index], a.removed = !0, l && (l.next = r), r && (r.previous = l), n.first == a && (n.first = r), n.last == a && (n.last = l), Oe ? n.size-- : t.size--
                        }
                        return !!a
                    },
                    forEach: function (e) {
                        for (var t = i(this), n = rn(e, 1 < arguments.length ? arguments[1] : void 0, 3), a; a = a ? a.next : t.first;)
                            for (n(a.value, a.key, this); a && a.removed;) a = a.previous
                    },
                    has: function (e) {
                        return !!o(this, e)
                    }
                }), bi(r.prototype, n ? {
                    get: function (e) {
                        var t = o(this, e);
                        return t && t.value
                    },
                    set: function (e, t) {
                        return l(this, 0 === e ? 0 : e, t)
                    }
                } : {
                    add: function (e) {
                        return l(this, e = 0 === e ? 0 : e, e)
                    }
                }), Oe && zu(r.prototype, "size", {
                    get: function () {
                        return i(this).size
                    }
                }), r
            },
            setStrong: function (e, t, n) {
                var a = t + " Iterator",
                    r = Fu(t),
                    i = Fu(a);
                Bs(e, t, function (e, t) {
                    _u(this, {
                        type: a,
                        target: e,
                        state: r(e),
                        kind: t,
                        last: void 0
                    })
                }, function () {
                    for (var e = i(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                    return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                        value: n.key,
                        done: !1
                    } : "values" == t ? {
                        value: n.value,
                        done: !1
                    } : {
                        value: [n.key, n.value],
                        done: !1
                    } : (e.target = void 0, {
                        value: void 0,
                        done: !0
                    })
                }, n ? "entries" : "values", !n, !0), ki(t)
            }
        }),
        Gu = function (e) {
            function t(e, n, a) {
                var r;
                Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "textPath", r.textWidth = 0, r.textHeight = 0, r.pathLength = -1, r.glyphInfo = null, r.letterSpacingCache = [], r.measuresCache = new Map([
                    ["", 0]
                ]);
                var i = r.getHrefAttribute().getDefinition();
                return r.text = r.getTextFromNode(), r.dataArray = r.parsePathData(i), r
            }
            return os(t, e), qr(t, [{
                key: "getText",
                value: function () {
                    return this.text
                }
            }, {
                key: "path",
                value: function (e) {
                    var t = this.dataArray;
                    e && e.beginPath(), t.forEach(function (t) {
                        var n = t.command,
                            a = t.points;
                        switch (n) {
                            case "L":
                                e && e.lineTo(a[0], a[1]);
                                break;
                            case "M":
                                e && e.moveTo(a[0], a[1]);
                                break;
                            case "C":
                                e && e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                                break;
                            case "Q":
                                e && e.quadraticCurveTo(a[0], a[1], a[2], a[3]);
                                break;
                            case "A": {
                                var i = a[0],
                                    l = a[1],
                                    o = a[2],
                                    s = a[3],
                                    d = a[4],
                                    u = a[5],
                                    g = a[6],
                                    c = a[7],
                                    p = o > s ? o : s,
                                    r = o > s ? 1 : o / s,
                                    y = o > s ? s / o : 1;
                                e && (e.translate(i, l), e.rotate(g), e.scale(r, y), e.arc(0, 0, p, d, d + u, !!(1 - c)), e.scale(1 / r, 1 / y), e.rotate(-g), e.translate(-i, -l));
                                break
                            }
                            case "z":
                                e && e.closePath();
                        }
                    })
                }
            }, {
                key: "renderChildren",
                value: function (e) {
                    this.setTextData(e), e.save();
                    var t = this.parent.getStyle("text-decoration").getString(),
                        n = this.getFontSize(),
                        a = this.glyphInfo,
                        r = e.fillStyle;
                    "underline" === t && e.beginPath(), a.forEach(function (r, l) {
                        var i = r.p0,
                            o = r.p1,
                            s = r.text;
                        e.save(), e.translate(i.x, i.y), e.rotate(a[l].rotation), e.fillStyle && e.fillText(s, 0, 0), e.strokeStyle && e.strokeText(s, 0, 0), e.restore(), "underline" === t && (0 === l && e.moveTo(i.x, i.y + n / 8), e.lineTo(o.x, o.y + n / 5))
                    }), "underline" === t && (e.lineWidth = n / 20, e.strokeStyle = r, e.stroke(), e.closePath()), e.restore()
                }
            }, {
                key: "getLetterSpacingAt",
                value: function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.letterSpacingCache[e] || 0
                }
            }, {
                key: "findSegmentToFitChar",
                value: function (e, t, n, a, r, i, l, o) {
                    var s = i,
                        d = this.measureText(e, l);
                    " " === l && "justify" === t && n < a && (d += (a - n) / r), -1 < o && (s += this.getLetterSpacingAt(o));
                    var u = this.textHeight / 20,
                        g = {
                            p0: this.getEquidistantPointOnPath(s, u),
                            p1: this.getEquidistantPointOnPath(s + d, u)
                        };
                    return s += d, {
                        offset: s,
                        segment: g
                    }
                }
            }, {
                key: "measureText",
                value: function (e, t) {
                    var n = this.measuresCache,
                        a = t || this.getText();
                    if (n.has(a)) return n.get(a);
                    var r = this.measureTargetText(e, a);
                    return n.set(a, r), r
                }
            }, {
                key: "setTextData",
                value: function (e) {
                    var t = this;
                    if (!this.glyphInfo) {
                        var n = this.getText(),
                            a = n.split(""),
                            r = n.split(" ").length - 1,
                            l = o(this.parent.getAttribute("dx").getString("0")),
                            s = this.parent.getStyle("text-anchor").getString("start"),
                            d = this.getStyle("letter-spacing"),
                            u = this.parent.getStyle("letter-spacing"),
                            g = 0;
                        d.hasValue() && "inherit" !== d.getValue() ? d.hasValue() && "initial" !== d.getValue() && "unset" !== d.getValue() && (g = d.getPixels()) : g = u.getPixels();
                        var c = [],
                            p = n.length;
                        this.letterSpacingCache = c;
                        for (var y = 0; y < p; y++) c.push("undefined" == typeof l[y] ? g : l[y]);
                        var h = c.reduce(function (e, t) {
                            return e + t || 0
                        }, 0);
                        this.textWidth = this.measureText(e), this.textHeight = this.getFontSize();
                        var f = me(this.textWidth + h, 0);
                        this.glyphInfo = [];
                        var m = this.getPathLength(),
                            x = this.getStyle("startOffset").getNumber(0) * m,
                            b = 0;
                        ("middle" === s || "center" === s) && (b = -f / 2), ("end" === s || "right" === s) && (b = -f), b += x, a.forEach(function (n, l) {
                            var i = t.findSegmentToFitChar(e, s, f, m, r, b, n, l),
                                o = i.offset,
                                d = i.segment;
                            if (b = o, d.p0 && d.p1) {
                                var u = t.getLineLength(d.p0.x, d.p0.y, d.p1.x, d.p1.y),
                                    g = t.getPointOnLine(0 + u / 2, d.p0.x, d.p0.y, d.p1.x, d.p1.y),
                                    c = pe(d.p1.y - d.p0.y, d.p1.x - d.p0.x);
                                t.glyphInfo.push({
                                    transposeX: g.x,
                                    transposeY: g.y,
                                    text: a[l],
                                    p0: d.p0,
                                    p1: d.p1,
                                    rotation: c
                                })
                            }
                        })
                    }
                }
            }, {
                key: "parsePathData",
                value: function (e) {
                    if (this.pathLength = -1, !e) return [];
                    var t = [],
                        n = e.pathParser;
                    for (n.reset(); !n.isEnd();) {
                        var a = n.current,
                            r = a ? a.x : 0,
                            i = a ? a.y : 0,
                            l = "",
                            o = [];
                        n.nextCommand();
                        var s = n.command.toUpperCase();
                        switch (n.command) {
                            case "M":
                            case "m":
                                l = this.pathM(n, o);
                                break;
                            case "L":
                            case "l":
                                l = this.pathL(n, o);
                                break;
                            case "H":
                            case "h":
                                l = this.pathH(n, o);
                                break;
                            case "V":
                            case "v":
                                l = this.pathV(n, o);
                                break;
                            case "C":
                            case "c":
                                this.pathC(n, o);
                                break;
                            case "S":
                            case "s":
                                l = this.pathS(n, o);
                                break;
                            case "Q":
                            case "q":
                                this.pathQ(n, o);
                                break;
                            case "T":
                            case "t":
                                l = this.pathT(n, o);
                                break;
                            case "A":
                            case "a":
                                o = this.pathA(n);
                                break;
                            case "Z":
                            case "z":
                                n.current = n.start;
                        }
                        "Z" === s ? t.push({
                            command: "z",
                            points: [],
                            pathLength: 0
                        }) : t.push({
                            command: l || s,
                            points: o,
                            start: {
                                x: r,
                                y: i
                            },
                            pathLength: this.calcLength(r, i, l || s, o)
                        })
                    }
                    return t
                }
            }, {
                key: "pathM",
                value: function (e, t) {
                    var n = e.getAsCurrentPoint();
                    for (t.push(n.x, n.y), e.start = e.current; !e.isCommandOrEnd();) {
                        var a = e.getAsCurrentPoint();
                        return t.push(a.x, a.y), "L"
                    }
                }
            }, {
                key: "pathL",
                value: function (e, t) {
                    for (; !e.isCommandOrEnd();) {
                        var n = e.getAsCurrentPoint();
                        t.push(n.x, n.y)
                    }
                    return "L"
                }
            }, {
                key: "pathH",
                value: function (e, t) {
                    for (; !e.isCommandOrEnd();) {
                        var n = e.current,
                            a = new qo((e.isRelativeCommand() ? n.x : 0) + e.getScalar(), n.y);
                        t.push(a.x, a.y), e.current = a
                    }
                    return "L"
                }
            }, {
                key: "pathV",
                value: function (e, t) {
                    for (; !e.isCommandOrEnd();) {
                        var n = e.current,
                            a = new qo(n.x, (e.isRelativeCommand() ? n.y : 0) + e.getScalar());
                        t.push(a.x, a.y), e.current = a
                    }
                    return "L"
                }
            }, {
                key: "pathC",
                value: function (e, t) {
                    for (; !e.isCommandOrEnd();) {
                        var n = e.getPoint(),
                            a = e.getAsControlPoint(),
                            r = e.getAsCurrentPoint();
                        t.push(n.x, n.y, a.x, a.y, r.x, r.y)
                    }
                }
            }, {
                key: "pathS",
                value: function (e, t) {
                    for (; !e.isCommandOrEnd();) {
                        var n = e.getReflectedControlPoint(),
                            a = e.getAsControlPoint(),
                            r = e.getAsCurrentPoint();
                        t.push(n.x, n.y, a.x, a.y, r.x, r.y)
                    }
                    return "C"
                }
            }, {
                key: "pathQ",
                value: function (e, t) {
                    for (; !e.isCommandOrEnd();) {
                        var n = e.getAsControlPoint(),
                            a = e.getAsCurrentPoint();
                        t.push(n.x, n.y, a.x, a.y)
                    }
                }
            }, {
                key: "pathT",
                value: function (e, t) {
                    for (; !e.isCommandOrEnd();) {
                        var n = e.getReflectedControlPoint();
                        e.control = n;
                        var a = e.getAsCurrentPoint();
                        t.push(n.x, n.y, a.x, a.y)
                    }
                    return "Q"
                }
            }, {
                key: "pathA",
                value: function (e) {
                    for (; !e.isCommandOrEnd();) {
                        var t = e.current,
                            n = e.getScalar(),
                            a = e.getScalar(),
                            r = e.getScalar() * (ye / 180),
                            i = e.getScalar(),
                            o = e.getScalar(),
                            d = e.getAsCurrentPoint(),
                            g = new qo(ke(r) * (t.x - d.x) / 2 + ve(r) * (t.y - d.y) / 2, -ve(r) * (t.x - d.x) / 2 + ke(r) * (t.y - d.y) / 2),
                            c = Ae(g.x, 2) / Ae(n, 2) + Ae(g.y, 2) / Ae(a, 2);
                        1 < c && (n *= Pe(c), a *= Pe(c));
                        var l = (i === o ? -1 : 1) * Pe((Ae(n, 2) * Ae(a, 2) - Ae(n, 2) * Ae(g.y, 2) - Ae(a, 2) * Ae(g.x, 2)) / (Ae(n, 2) * Ae(g.y, 2) + Ae(a, 2) * Ae(g.x, 2)));
                        isNaN(l) && (l = 0);
                        var p = new qo(l * n * g.y / a, l * -a * g.x / n),
                            y = new qo((t.x + d.x) / 2 + ke(r) * p.x - ve(r) * p.y, (t.y + d.y) / 2 + ve(r) * p.x + ke(r) * p.y),
                            h = b([1, 0], [(g.x - p.x) / n, (g.y - p.y) / a]),
                            f = [(g.x - p.x) / n, (g.y - p.y) / a],
                            u = [(-g.x - p.x) / n, (-g.y - p.y) / a],
                            m = b(f, u);
                        return -1 >= x(f, u) && (m = ye), 1 <= x(f, u) && (m = 0), 0 === o && 0 < m && (m -= 2 * ye), 1 === o && 0 > m && (m += 2 * ye), [y.x, y.y, n, a, h, m, r, o]
                    }
                }
            }, {
                key: "calcLength",
                value: function (e, n, a, r) {
                    var i = Math.abs,
                        l = 0,
                        o = null,
                        s = null,
                        d = 0;
                    switch (a) {
                        case "L":
                            return this.getLineLength(e, n, r[0], r[1]);
                        case "C":
                            for (l = 0, o = this.getPointOnCubicBezier(0, e, n, r[0], r[1], r[2], r[3], r[4], r[5]), d = .01; 1 >= d; d += .01) s = this.getPointOnCubicBezier(d, e, n, r[0], r[1], r[2], r[3], r[4], r[5]), l += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
                            return l;
                        case "Q":
                            for (l = 0, o = this.getPointOnQuadraticBezier(0, e, n, r[0], r[1], r[2], r[3]), d = .01; 1 >= d; d += .01) s = this.getPointOnQuadraticBezier(d, e, n, r[0], r[1], r[2], r[3]), l += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
                            return l;
                        case "A":
                            l = 0;
                            var u = r[4],
                                g = r[5],
                                c = r[4] + g,
                                p = ye / 180;
                            if (i(u - c) < p && (p = i(u - c)), o = this.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], u, 0), 0 > g)
                                for (d = u - p; d > c; d -= p) s = this.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], d, 0), l += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
                            else
                                for (d = u + p; d < c; d += p) s = this.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], d, 0), l += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
                            return s = this.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], c, 0), l += this.getLineLength(o.x, o.y, s.x, s.y), l;
                    }
                    return 0
                }
            }, {
                key: "getPointOnLine",
                value: function (e, t, n, a, r) {
                    var i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : t,
                        l = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : n,
                        o = (r - n) / (a - t + Ta),
                        s = Pe(e * e / (1 + o * o));
                    a < t && (s *= -1);
                    var d = o * s,
                        g = null;
                    if (a === t) g = {
                        x: i,
                        y: l + d
                    };
                    else if ((l - n) / (i - t + Ta) === o) g = {
                        x: i + s,
                        y: l + d
                    };
                    else {
                        var c = 0,
                            p = 0,
                            y = this.getLineLength(t, n, a, r);
                        if (y < Ta) return null;
                        var h = (i - t) * (a - t) + (l - n) * (r - n);
                        h /= y * y, c = t + h * (a - t), p = n + h * (r - n);
                        var f = this.getLineLength(i, l, c, p),
                            m = Pe(e * e - f * f);
                        s = Pe(m * m / (1 + o * o)), a < t && (s *= -1), d = o * s, g = {
                            x: c + s,
                            y: p + d
                        }
                    }
                    return g
                }
            }, {
                key: "getPointOnPath",
                value: function (e) {
                    var t = this.getPathLength(),
                        n = 0,
                        a = null;
                    if (-5e-5 > e || e - 5e-5 > t) return null;
                    var r = this.dataArray,
                        i = !0,
                        l = !1,
                        o = void 0;
                    try {
                        for (var s = r[Symbol.iterator](), d, u; !(i = (d = s.next()).done); i = !0) {
                            if (u = d.value, u && (5e-5 > u.pathLength || n + u.pathLength + 5e-5 < e)) {
                                n += u.pathLength;
                                continue
                            }
                            var g = e - n,
                                c = 0;
                            switch (u.command) {
                                case "L":
                                    a = this.getPointOnLine(g, u.start.x, u.start.y, u.points[0], u.points[1], u.start.x, u.start.y);
                                    break;
                                case "A":
                                    var y = u.points[4],
                                        h = u.points[5],
                                        f = u.points[4] + h;
                                    if (c = y + g / u.pathLength * h, 0 > h && c < f || 0 <= h && c > f) break;
                                    a = this.getPointOnEllipticalArc(u.points[0], u.points[1], u.points[2], u.points[3], c, u.points[6]);
                                    break;
                                case "C":
                                    c = g / u.pathLength, 1 < c && (c = 1), a = this.getPointOnCubicBezier(c, u.start.x, u.start.y, u.points[0], u.points[1], u.points[2], u.points[3], u.points[4], u.points[5]);
                                    break;
                                case "Q":
                                    c = g / u.pathLength, 1 < c && (c = 1), a = this.getPointOnQuadraticBezier(c, u.start.x, u.start.y, u.points[0], u.points[1], u.points[2], u.points[3]);
                                    break;
                                default:
                            }
                            if (a) return a;
                            break
                        }
                    } catch (e) {
                        l = !0, o = e
                    } finally {
                        try {
                            i || null == s.return || s.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                    return null
                }
            }, {
                key: "getLineLength",
                value: function (e, t, n, a) {
                    return Pe((n - e) * (n - e) + (a - t) * (a - t))
                }
            }, {
                key: "getPathLength",
                value: function () {
                    return -1 === this.pathLength && (this.pathLength = this.dataArray.reduce(function (e, t) {
                        return 0 < t.pathLength ? e + t.pathLength : e
                    }, 0)), this.pathLength
                }
            }, {
                key: "getPointOnCubicBezier",
                value: function (e, t, n, a, r, i, l, o, s) {
                    var d = o * v(e) + i * k(e) + a * S(e) + t * P(e),
                        u = s * v(e) + l * k(e) + r * S(e) + n * P(e);
                    return {
                        x: d,
                        y: u
                    }
                }
            }, {
                key: "getPointOnQuadraticBezier",
                value: function (e, t, n, a, r, i, l) {
                    var o = i * A(e) + a * E(e) + t * T(e),
                        s = l * A(e) + r * E(e) + n * T(e);
                    return {
                        x: o,
                        y: s
                    }
                }
            }, {
                key: "getPointOnEllipticalArc",
                value: function (e, t, n, a, r, i) {
                    var l = ke(i),
                        o = ve(i),
                        s = {
                            x: n * ke(r),
                            y: a * ve(r)
                        };
                    return {
                        x: e + (s.x * l - s.y * o),
                        y: t + (s.x * o + s.y * l)
                    }
                }
            }, {
                key: "buildEquidistantCache",
                value: function (e, t) {
                    var n = this.getPathLength(),
                        a = t || .25,
                        r = e || n / 100;
                    if (!this.equidistantCache || this.equidistantCache.step !== r || this.equidistantCache.precision !== a) {
                        this.equidistantCache = {
                            step: r,
                            precision: a,
                            points: []
                        };
                        for (var i = 0, o = 0; o <= n; o += a) {
                            var d = this.getPointOnPath(o),
                                u = this.getPointOnPath(o + a);
                            d && u && (i += this.getLineLength(d.x, d.y, u.x, u.y), i >= r && (this.equidistantCache.points.push({
                                x: d.x,
                                y: d.y,
                                distance: o
                            }), i -= r))
                        }
                    }
                }
            }, {
                key: "getEquidistantPointOnPath",
                value: function (e, t, n) {
                    if (this.buildEquidistantCache(t, n), 0 > e || 5e-5 < e - this.getPathLength()) return null;
                    var a = he(e / this.getPathLength() * (this.equidistantCache.points.length - 1));
                    return this.equidistantCache.points[a] || null
                }
            }]), t
        }(Rd),
        Hu = function (e) {
            function t(e, n, a) {
                var r;
                Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "image", r.loaded = !1;
                var i = r.getHrefAttribute().getString();
                if (!i) return rs(r);
                var l = /\.svg$/.test(i);
                return e.images.push(as(r)), l ? r.loadSvg(i) : r.loadImage(i), r.isSvg = l, r
            }
            return os(t, e), qr(t, [{
                key: "loadImage",
                value: function () {
                    var e = $r(Yr.mark(function e(t) {
                        var n;
                        return Yr.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, this.document.createImage(t);
                                case 3:
                                    n = e.sent, this.image = n, e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e["catch"](0), console.error("ERROR: image \"".concat(t, "\" not found"), e.t0);
                                case 10:
                                    this.loaded = !0;
                                case 11:
                                case "end":
                                    return e.stop();
                            }
                        }, e, this, [
                            [0, 7]
                        ])
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "loadSvg",
                value: function () {
                    var e = $r(Yr.mark(function e(t) {
                        var n, a;
                        return Yr.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, this.document.fetch(t);
                                case 3:
                                    return n = e.sent, e.next = 6, n.text();
                                case 6:
                                    a = e.sent, this.image = a, e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e["catch"](0), console.error("ERROR: image \"".concat(t, "\" not found"), e.t0);
                                case 13:
                                    this.loaded = !0;
                                case 14:
                                case "end":
                                    return e.stop();
                            }
                        }, e, this, [
                            [0, 10]
                        ])
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "renderChildren",
                value: function (e) {
                    var t = this.document,
                        n = this.image,
                        a = this.loaded,
                        r = this.getAttribute("x").getPixels("x"),
                        i = this.getAttribute("y").getPixels("y"),
                        l = this.getStyle("width").getPixels("x"),
                        o = this.getStyle("height").getPixels("y");
                    if (a && n && l && o) {
                        if (e.save(), this.isSvg) t.canvg.forkString(e, this.image, {
                            ignoreMouse: !0,
                            ignoreAnimation: !0,
                            ignoreDimensions: !0,
                            ignoreClear: !0,
                            offsetX: r,
                            offsetY: i,
                            scaleWidth: l,
                            scaleHeight: o
                        }).render();
                        else {
                            var s = this.image;
                            e.translate(r, i), t.setViewBox({
                                ctx: e,
                                aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                                width: l,
                                desiredWidth: s.width,
                                height: o,
                                desiredHeight: s.height
                            }), this.loaded && ("undefined" == typeof s.complete || s.complete) && e.drawImage(s, 0, 0)
                        }
                        e.restore()
                    }
                }
            }, {
                key: "getBoundingBox",
                value: function () {
                    var e = this.getAttribute("x").getPixels("x"),
                        t = this.getAttribute("y").getPixels("y"),
                        n = this.getStyle("width").getPixels("x"),
                        a = this.getStyle("height").getPixels("y");
                    return new fd(e, t, e + n, t + a)
                }
            }]), t
        }(Vd),
        Yu = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "symbol", e
            }
            return os(t, e), qr(t, [{
                key: "render",
                value: function () {}
            }]), t
        }(Vd),
        $u = function () {
            function e(t) {
                Wr(this, e), this.document = t, this.loaded = !1, t.fonts.push(this)
            }
            return qr(e, [{
                key: "load",
                value: function () {
                    var e = $r(Yr.mark(function e(t, n) {
                        var a, r, i;
                        return Yr.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, a = this.document, e.next = 4, a.canvg.parser.load(n);
                                case 4:
                                    r = e.sent, i = r.getElementsByTagName("font"), Array.from(i).forEach(function (e) {
                                        var n = a.createElement(e);
                                        a.definitions[t] = n
                                    }), e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e["catch"](0), console.error("ERROR: font \"".concat(n, "\" not found"), e.t0);
                                case 12:
                                    this.loaded = !0;
                                case 13:
                                case "end":
                                    return e.stop();
                            }
                        }, e, this, [
                            [0, 9]
                        ])
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }]), e
        }(),
        Uu = function (e) {
            function t(e, n, r) {
                var i;
                Wr(this, t), i = rs(this, is(t).call(this, e, n, r)), i.type = "style";
                var l = a(Array.from(n.childNodes).map(function (e) {
                        return e.data
                    }).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "")),
                    o = l.split("}");
                return o.forEach(function (t) {
                    var n = t.trim();
                    if (n) {
                        var a = n.split("{"),
                            r = a[0].split(","),
                            i = a[1].split(";");
                        r.forEach(function (t) {
                            var n = t.trim();
                            if (n) {
                                var a = e.styles[n] || {};
                                if (i.forEach(function (t) {
                                        var n = t.indexOf(":"),
                                            r = t.substr(0, n).trim(),
                                            i = t.substr(n + 1, t.length - n).trim();
                                        r && i && (a[r] = new Uo(e, r, i))
                                    }), e.styles[n] = a, e.stylesSpecificity[n] = y(n), "@font-face" === n) {
                                    var r = a["font-family"].getString().replace(/"|'/g, ""),
                                        l = a.src.getString().split(",");
                                    l.forEach(function (t) {
                                        if (0 < t.indexOf("format(\"svg\")")) {
                                            var n = d(t);
                                            n && new $u(e).load(r, n)
                                        }
                                    })
                                }
                            }
                        })
                    }
                }), i
            }
            return os(t, e), t
        }(Ys);
    Uu.parseExternalUrl = d;
    var Wu = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "use", e
            }
            return os(t, e), qr(t, [{
                key: "setContext",
                value: function (e) {
                    Js(is(t.prototype), "setContext", this).call(this, e);
                    var n = this.getAttribute("x"),
                        a = this.getAttribute("y");
                    n.hasValue() && e.translate(n.getPixels("x"), 0), a.hasValue() && e.translate(0, a.getPixels("y"))
                }
            }, {
                key: "path",
                value: function (e) {
                    var t = this.element;
                    t && t.path(e)
                }
            }, {
                key: "renderChildren",
                value: function (e) {
                    var t = this.document,
                        n = this.element;
                    if (n) {
                        var a = n;
                        if ("symbol" === n.type && (a = new Md(t, null), a.attributes.viewBox = new Uo(t, "viewBox", n.getAttribute("viewBox").getString()), a.attributes.preserveAspectRatio = new Uo(t, "preserveAspectRatio", n.getAttribute("preserveAspectRatio").getString()), a.attributes.overflow = new Uo(t, "overflow", n.getAttribute("overflow").getString()), a.children = n.children), "svg" === a.type) {
                            var r = this.getStyle("width", !1, !0),
                                i = this.getStyle("height", !1, !0);
                            r.hasValue() && (a.attributes.width = new Uo(t, "width", r.getString())), i.hasValue() && (a.attributes.height = new Uo(t, "height", i.getString()))
                        }
                        var l = a.parent;
                        a.parent = null, a.render(e), a.parent = l
                    }
                }
            }, {
                key: "getBoundingBox",
                value: function (e) {
                    var t = this.element;
                    return t ? t.getBoundingBox(e) : null
                }
            }, {
                key: "elementTransform",
                value: function () {
                    var e = this.document,
                        t = this.element;
                    return Od.fromElement(e, t)
                }
            }, {
                key: "element",
                get: function () {
                    return this._element || (this._element = this.getHrefAttribute().getDefinition()), this._element
                }
            }]), t
        }(Vd),
        qu = function (e) {
            function t(e, n, r) {
                var i;
                Wr(this, t), i = rs(this, is(t).call(this, e, n, r)), i.type = "feColorMatrix";
                var l = o(i.getAttribute("values").getString());
                switch (i.getAttribute("type").getString("matrix")) {
                    case "saturate": {
                        var d = l[0];
                        l = [.213 + .787 * d, .715 - .715 * d, .072 - .072 * d, 0, 0, .213 - .213 * d, .715 + .285 * d, .072 - .072 * d, 0, 0, .213 - .213 * d, .715 - .715 * d, .072 + .928 * d, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                        break
                    }
                    case "hueRotate": {
                        var s = l[0] * ye / 180;
                        l = [m(s, .213, .787, -.213), m(s, .715, -.715, -.715), m(s, .072, -.072, .928), 0, 0, m(s, .213, -.213, .143), m(s, .715, .285, .14), m(s, .072, -.072, -.283), 0, 0, m(s, .213, -.213, -.787), m(s, .715, -.715, .715), m(s, .072, .928, .072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                        break
                    }
                    case "luminanceToAlpha":
                        l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2125, .7154, .0721, 0, 0, 0, 0, 0, 0, 1];
                }
                return i.matrix = l, i.includeOpacity = i.getAttribute("includeOpacity").hasValue(), i
            }
            return os(t, e), qr(t, [{
                key: "apply",
                value: function (e, t, n, i, l) {
                    for (var o = this.includeOpacity, s = this.matrix, d = e.getImageData(0, 0, i, l), u = 0; u < l; u++)
                        for (var c = 0; c < i; c++) {
                            var p = J(d.data, c, u, i, l, 0),
                                r = J(d.data, c, u, i, l, 1),
                                g = J(d.data, c, u, i, l, 2),
                                h = J(d.data, c, u, i, l, 3),
                                a = te(s, 0, p) + te(s, 1, r) + te(s, 2, g) + te(s, 3, h) + te(s, 4, 1),
                                f = te(s, 5, p) + te(s, 6, r) + te(s, 7, g) + te(s, 8, h) + te(s, 9, 1),
                                m = te(s, 10, p) + te(s, 11, r) + te(s, 12, g) + te(s, 13, h) + te(s, 14, 1),
                                b = te(s, 15, p) + te(s, 16, r) + te(s, 17, g) + te(s, 18, h) + te(s, 19, 1);
                            o && (a = f = m = 0, b *= h / 255), ee(d.data, c, u, i, l, 0, a), ee(d.data, c, u, i, l, 1, f), ee(d.data, c, u, i, l, 2, m), ee(d.data, c, u, i, l, 3, b)
                        }
                    e.clearRect(0, 0, i, l), e.putImageData(d, 0, 0)
                }
            }]), t
        }(Ys),
        Xu = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "mask", e
            }
            return os(t, e), qr(t, [{
                key: "apply",
                value: function (e, t) {
                    var n = this.document,
                        a = this.getAttribute("x").getPixels("x"),
                        r = this.getAttribute("y").getPixels("y"),
                        i = this.getStyle("width").getPixels("x"),
                        l = this.getStyle("height").getPixels("y");
                    if (!i && !l) {
                        var o = new fd;
                        this.children.forEach(function (t) {
                            o.addBoundingBox(t.getBoundingBox(e))
                        }), a = Se(o.x1), r = Se(o.y1), i = Se(o.width), l = Se(o.height)
                    }
                    var s = t.getStyle("mask").getString();
                    t.getStyle("mask").setValue("");
                    var d = n.createCanvas(a + i, r + l),
                        u = d.getContext("2d");
                    n.screen.setDefaults(u), this.renderChildren(u);
                    var g = new qu(n, {
                        nodeType: 1,
                        childNodes: [],
                        attributes: [{
                            nodeName: "type",
                            value: "luminanceToAlpha"
                        }, {
                            nodeName: "includeOpacity",
                            value: "true"
                        }]
                    });
                    g.apply(u, 0, 0, a + i, r + l);
                    var p = n.createCanvas(a + i, r + l),
                        c = p.getContext("2d");
                    n.screen.setDefaults(c), t.render(c), c.globalCompositeOperation = "destination-in", c.fillStyle = u.createPattern(d, "no-repeat"), c.fillRect(0, 0, a + i, r + l), e.fillStyle = c.createPattern(p, "no-repeat"), e.fillRect(0, 0, a + i, r + l), t.getStyle("mask").setValue(s)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }(Ys),
        Qu = Lt("Reflect", "apply"),
        Ku = Function.apply,
        Zu = !we(function () {
            Qu(function () {})
        });
    nn({
        target: "Reflect",
        stat: !0,
        forced: Zu
    }, {
        apply: function (e, t, n) {
            return an(e), Ze(n), Qu ? Qu(e, t, n) : Ku.call(e, t, n)
        }
    }), nn({
        target: "Reflect",
        stat: !0,
        sham: !fs
    }, {
        getPrototypeOf: function (e) {
            return bs(Ze(e))
        }
    });
    var Ju = function () {},
        eg = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "clipPath", e
            }
            return os(t, e), qr(t, [{
                key: "apply",
                value: function (e) {
                    var t = this.document,
                        n = Reflect.getPrototypeOf(e),
                        a = e.beginPath,
                        r = e.closePath;
                    n && (n.beginPath = Ju, n.closePath = Ju), Reflect.apply(a, e, []), this.children.forEach(function (a) {
                        if ("undefined" != typeof a.path) {
                            var i = "undefined" == typeof a.elementTransform ? null : a.elementTransform();
                            i || (i = Od.fromElement(t, a)), i && i.apply(e), a.path(e), n && (n.closePath = r), i && i.unapply(e)
                        }
                    }), Reflect.apply(r, e, []), e.clip(), n && (n.beginPath = a, n.closePath = r)
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }(Ys),
        tg = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "filter", e
            }
            return os(t, e), qr(t, [{
                key: "apply",
                value: function (e, t) {
                    var n = this.document,
                        a = t.getBoundingBox(e);
                    if (a) {
                        var r = Se(a.x1),
                            i = Se(a.y1),
                            l = Se(a.width),
                            o = Se(a.height),
                            s = t.getStyle("filter").getString();
                        t.getStyle("filter").setValue("");
                        var d = 0,
                            u = 0;
                        this.children.forEach(function (e) {
                            var t = e.extraFilterDistance || 0;
                            d = me(d, t), u = me(u, t)
                        });
                        var g = n.createCanvas(l + 2 * d, o + 2 * u),
                            c = g.getContext("2d");
                        n.screen.setDefaults(c), c.translate(-r + d, -i + u), t.render(c), this.children.forEach(function (e) {
                            "function" == typeof e.apply && e.apply(c, 0, 0, l + 2 * d, o + 2 * u)
                        }), e.drawImage(g, 0, 0, l + 2 * d, o + 2 * u, r - d, i - u, l + 2 * d, o + 2 * u), t.getStyle("filter", !0).setValue(s)
                    }
                }
            }, {
                key: "render",
                value: function () {}
            }]), t
        }(Ys),
        ng = function (e) {
            function t(e, n, a) {
                var r;
                return Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "feDropShadow", r.addStylesFromStyleDefinition(), r
            }
            return os(t, e), qr(t, [{
                key: "apply",
                value: function () {}
            }]), t
        }(Ys),
        ag = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "feMorphology", e
            }
            return os(t, e), qr(t, [{
                key: "apply",
                value: function () {}
            }]), t
        }(Ys),
        rg = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "feComposite", e
            }
            return os(t, e), qr(t, [{
                key: "apply",
                value: function () {}
            }]), t
        }(Ys),
        ig = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        lg = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
        og = function e() {
            ne(this, e), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
        },
        sg = function (e) {
            function t(e, n, a) {
                var r;
                return Wr(this, t), r = rs(this, is(t).call(this, e, n, a)), r.type = "feGaussianBlur", r.blurRadius = Se(r.getAttribute("stdDeviation").getNumber()), r.extraFilterDistance = r.blurRadius, r
            }
            return os(t, e), qr(t, [{
                key: "apply",
                value: function (e, t, n, a, r) {
                    var i = this.document,
                        l = this.blurRadius,
                        o = i.window ? i.window.document.body : null,
                        s = e.canvas;
                    s.id = i.getUniqueId(), o && (s.style.display = "none", o.appendChild(s)), re(s, t, n, a, r, l), o && o.removeChild(s)
                }
            }]), t
        }(Ys),
        dg = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "title", e
            }
            return os(t, e), t
        }(Ys),
        ug = function (e) {
            function t() {
                var e;
                return Wr(this, t), e = rs(this, is(t).apply(this, arguments)), e.type = "desc", e
            }
            return os(t, e), t
        }(Ys),
        gg = function () {
            function e(t) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n.rootEmSize,
                    r = void 0 === a ? 12 : a,
                    i = n.emSize,
                    l = void 0 === i ? 12 : i,
                    o = n.createCanvas,
                    s = void 0 === o ? e.createCanvas : o,
                    d = n.createImage,
                    u = void 0 === d ? e.createImage : d,
                    g = n.anonymousCrossOrigin;
                Wr(this, e), this.canvg = t, this.definitions = {}, this.styles = {}, this.stylesSpecificity = {}, this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = t.screen, this.rootEmSize = r, this.emSize = l, this.createCanvas = s, this.createImage = this.bindCreateImage(u, g), this.screen.wait(this.isImagesLoaded.bind(this)), this.screen.wait(this.isFontsLoaded.bind(this))
            }
            return qr(e, [{
                key: "bindCreateImage",
                value: function (e, t) {
                    return "boolean" == typeof t ? function (n, a) {
                        return e(n, "boolean" == typeof a ? a : t)
                    } : e
                }
            }, {
                key: "popEmSize",
                value: function () {
                    var e = this.emSizeStack;
                    e.pop()
                }
            }, {
                key: "getUniqueId",
                value: function () {
                    return "canvg".concat(++this.uniqueId)
                }
            }, {
                key: "isImagesLoaded",
                value: function () {
                    return this.images.every(function (e) {
                        return e.loaded
                    })
                }
            }, {
                key: "isFontsLoaded",
                value: function () {
                    return this.fonts.every(function (e) {
                        return e.loaded
                    })
                }
            }, {
                key: "createDocumentElement",
                value: function (e) {
                    var t = this.createElement(e.documentElement);
                    return t.root = !0, t.addStylesFromStyleDefinition(), this.documentElement = t, t
                }
            }, {
                key: "createElement",
                value: function (t) {
                    var n = t.nodeName.replace(/^[^:]+:/, ""),
                        a = e.elementTypes[n];
                    return "undefined" == typeof a ? new $s(this, t) : new a(this, t)
                }
            }, {
                key: "createTextNode",
                value: function (e) {
                    return new Id(this, e)
                }
            }, {
                key: "setViewBox",
                value: function (e) {
                    this.screen.setViewBox(oe({
                        document: this
                    }, e))
                }
            }, {
                key: "window",
                get: function () {
                    return this.screen.window
                }
            }, {
                key: "fetch",
                get: function () {
                    return this.screen.fetch
                }
            }, {
                key: "ctx",
                get: function () {
                    return this.screen.ctx
                }
            }, {
                key: "emSize",
                get: function () {
                    var e = this.emSizeStack;
                    return e[e.length - 1]
                },
                set: function (e) {
                    var t = this.emSizeStack;
                    t.push(e)
                }
            }]), e
        }();
    gg.createCanvas = function (e, t) {
        var n = document.createElement("canvas");
        return n.width = e, n.height = t, n
    }, gg.createImage = se, gg.elementTypes = {
        svg: Md,
        rect: zd,
        circle: Bd,
        ellipse: _d,
        line: Fd,
        polyline: jd,
        polygon: Gd,
        path: Nd,
        pattern: Yd,
        marker: $d,
        defs: Ud,
        linearGradient: Xd,
        radialGradient: Qd,
        stop: Kd,
        animate: du,
        animateColor: hu,
        animateTransform: fu,
        font: Eu,
        "font-face": Tu,
        "missing-glyph": Cu,
        glyph: wu,
        text: Rd,
        tspan: Ld,
        tref: Ou,
        a: Vu,
        textPath: Gu,
        image: Hu,
        g: Wd,
        symbol: Yu,
        style: Uu,
        use: Wu,
        mask: Xu,
        clipPath: eg,
        filter: tg,
        feDropShadow: ng,
        feMorphology: ag,
        feComposite: rg,
        feColorMatrix: qu,
        feGaussianBlur: sg,
        title: dg,
        desc: ug
    };
    var cg = function () {
            function e(t, n) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                Wr(this, e), this.parser = new ts(a), this.screen = new Zo(t, a), this.options = a;
                var r = new gg(this, a),
                    i = r.createDocumentElement(n);
                this.document = r, this.documentElement = i
            }
            return qr(e, [{
                key: "fork",
                value: function (t, n) {
                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    return e.from(t, n, ge({}, this.options, {}, a))
                }
            }, {
                key: "forkString",
                value: function (t, n) {
                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    return e.fromString(t, n, ge({}, this.options, {}, a))
                }
            }, {
                key: "ready",
                value: function () {
                    return this.screen.ready()
                }
            }, {
                key: "isReady",
                value: function () {
                    return this.screen.isReady()
                }
            }, {
                key: "render",
                value: function () {
                    var e = $r(Yr.mark(function e() {
                        var t = arguments,
                            n;
                        return Yr.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = 0 < t.length && void 0 !== t[0] ? t[0] : {}, this.start(ge({
                                        enableRedraw: !0,
                                        ignoreAnimation: !0,
                                        ignoreMouse: !0
                                    }, n)), e.next = 4, this.ready();
                                case 4:
                                    this.stop();
                                case 5:
                                case "end":
                                    return e.stop();
                            }
                        }, e, this)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "start",
                value: function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        t = this.documentElement,
                        n = this.screen,
                        a = this.options;
                    n.start(t, ge({
                        enableRedraw: !0
                    }, a, {}, e))
                }
            }, {
                key: "stop",
                value: function () {
                    this.screen.stop()
                }
            }, {
                key: "resize",
                value: function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : e,
                        n = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2];
                    this.documentElement.resize(e, t, n)
                }
            }], [{
                key: "from",
                value: function () {
                    var t = $r(Yr.mark(function t(n, a) {
                        var r = arguments,
                            i, l, o;
                        return Yr.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return i = 2 < r.length && void 0 !== r[2] ? r[2] : {}, l = new ts(i), t.next = 4, l.parse(a);
                                case 4:
                                    return o = t.sent, t.abrupt("return", new e(n, o, i));
                                case 6:
                                case "end":
                                    return t.stop();
                            }
                        }, t)
                    }));
                    return function () {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "fromString",
                value: function (t, n) {
                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                        r = new ts(a),
                        i = r.parseFromString(n);
                    return new e(t, i, a)
                }
            }]), e
        }(),
        pg = Object.freeze({
            __proto__: null,
            offscreen: function () {
                return {
                    window: null,
                    ignoreAnimation: !0,
                    ignoreMouse: !0,
                    createCanvas: function (e, t) {
                        return new OffscreenCanvas(e, t)
                    },
                    createImage: function () {
                        var e = $r(Yr.mark(function e(t) {
                            var n, a, r;
                            return Yr.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, fetch(t);
                                    case 2:
                                        return n = e.sent, e.next = 5, n.blob();
                                    case 5:
                                        return a = e.sent, e.next = 8, createImageBitmap(a);
                                    case 8:
                                        return r = e.sent, e.abrupt("return", r);
                                    case 10:
                                    case "end":
                                        return e.stop();
                                }
                            }, e)
                        }));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }
            },
            node: function (e) {
                var t = e.DOMParser,
                    n = e.canvas,
                    a = e.fetch;
                return {
                    window: null,
                    ignoreAnimation: !0,
                    ignoreMouse: !0,
                    DOMParser: t,
                    fetch: a,
                    createCanvas: n.createCanvas,
                    createImage: n.loadImage
                }
            }
        });
    e.AElement = Vu, e.AnimateColorElement = hu, e.AnimateElement = du, e.AnimateTransformElement = fu, e.BoundingBox = fd, e.CB1 = v, e.CB2 = k, e.CB3 = S, e.CB4 = P, e.Canvg = cg, e.CircleElement = Bd, e.ClipPathElement = eg, e.DefsElement = Ud, e.DescElement = ug, e.Document = gg, e.Element = Ys, e.EllipseElement = _d, e.FeColorMatrixElement = qu, e.FeCompositeElement = rg, e.FeDropShadowElement = ng, e.FeGaussianBlurElement = sg, e.FeMorphologyElement = ag, e.FilterElement = tg, e.Font = ed, e.FontElement = Eu, e.FontFaceElement = Tu, e.GElement = Wd, e.GlyphElement = wu, e.GradientElement = qd, e.ImageElement = Hu, e.LineElement = Fd, e.LinearGradientElement = Xd, e.MarkerElement = $d, e.MaskElement = Xu, e.Matrix = Ed, e.MissingGlyphElement = Cu, e.Mouse = Xo, e.PSEUDO_ZERO = Ta, e.Parser = ts, e.PathElement = Nd, e.PathParser = Dd, e.PatternElement = Yd, e.Point = qo, e.PolygonElement = Gd, e.PolylineElement = jd, e.Property = Uo, e.QB1 = A, e.QB2 = E, e.QB3 = T, e.RadialGradientElement = Qd, e.RectElement = zd, e.RenderedElement = Vd, e.Rotate = Pd, e.SVGElement = Md, e.SVGFontLoader = $u, e.Scale = Ad, e.Screen = Zo, e.Skew = Td, e.SkewX = Cd, e.SkewY = wd, e.StopElement = Kd, e.StyleElement = Uu, e.SymbolElement = Yu, e.TRefElement = Ou, e.TSpanElement = Ld, e.TextElement = Rd, e.TextPathElement = Gu, e.TitleElement = dg, e.Transform = Od, e.Translate = Sd, e.UnknownElement = $s, e.UseElement = Wu, e.ViewPort = Wo, e.compressSpaces = a, e.default = cg, e.getSelectorSpecificity = y, e.normalizeAttributeName = s, e.parseExternalUrl = d, e.presets = pg, e.toNumbers = o, e.trimLeft = r, e.trimRight = l, e.vectorMagnitude = h, e.vectorsAngle = b, e.vectorsRatio = x, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});