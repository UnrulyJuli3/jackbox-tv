/*! For license information please see 8990.d157e476aaecb25bea97.js.LICENSE.txt */
(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [8990], {
        2376: (t, r, n) => {
            n(83112);
            var e = n(2649);
            t.exports = e("String", "padStart")
        },
        65646: (t, r, n) => {
            var e = n(2376);
            t.exports = e
        },
        2649: (t, r, n) => {
            var e = n(17854),
                i = n(49974),
                o = Function.call;
            t.exports = function(t, r, n) {
                return i(o, e[t].prototype[r], n)
            }
        },
        54986: (t, r, n) => {
            var e = n(88113);
            t.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(e)
        },
        76650: (t, r, n) => {
            var e = n(17466),
                i = n(38415),
                o = n(84488),
                a = Math.ceil,
                s = function(t) {
                    return function(r, n, s) {
                        var u, c, f = String(o(r)),
                            p = f.length,
                            v = void 0 === s ? " " : String(s),
                            g = e(n);
                        return g <= p || "" == v ? f : (u = g - p, (c = i.call(v, a(u / v.length))).length > u && (c = c.slice(0, u)), t ? f + c : c + f)
                    }
                };
            t.exports = {
                start: s(!1),
                end: s(!0)
            }
        },
        38415: (t, r, n) => {
            "use strict";
            var e = n(99958),
                i = n(84488);
            t.exports = function(t) {
                var r = String(i(this)),
                    n = "",
                    o = e(t);
                if (o < 0 || o == 1 / 0) throw RangeError("Wrong number of repetitions");
                for (; o > 0;
                    (o >>>= 1) && (r += r)) 1 & o && (n += r);
                return n
            }
        },
        83112: (t, r, n) => {
            "use strict";
            var e = n(82109),
                i = n(76650).start;
            e({
                target: "String",
                proto: !0,
                forced: n(54986)
            }, {
                padStart: function(t) {
                    return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        9707: (t, r, n) => {
            "use strict";
            n.d(r, {
                FB: () => B
            });
            var e, i, o, a, s, u, c, f, p, v, g, l, h = n(20909),
                d = h.H.getByTarget,
                m = function() {
                    return e || "undefined" != typeof window && (e = window.gsap) && e.registerPlugin && e
                },
                y = function(t) {
                    return "number" == typeof t
                },
                x = function(t) {
                    return "object" == typeof t
                },
                k = function(t) {
                    return "function" == typeof t
                },
                _ = Array.isArray,
                w = function(t) {
                    return t
                },
                b = 1e10,
                F = function(t, r, n) {
                    for (var e in r) e in t || e === n || (t[e] = r[e]);
                    return t
                },
                M = function t(r) {
                    var n, e, i = {};
                    for (n in r) i[n] = x(e = r[n]) ? t(e) : e;
                    return i
                },
                T = function(t, r, n, e, i) {
                    var o, a, s, u, c = r.length,
                        f = 0,
                        p = b;
                    if (x(t)) {
                        for (; c--;) {
                            for (s in o = r[c], a = 0, t) a += (u = o[s] - t[s]) * u;
                            a < p && (f = c, p = a)
                        }
                        if ((i || b) < b && i < Math.sqrt(p)) return t
                    } else
                        for (; c--;)(a = (o = r[c]) - t) < 0 && (a = -a), a < p && o >= e && o <= n && (f = c, p = a);
                    return r[f]
                },
                N = function(t, r, n, e, i, o) {
                    if ("auto" === t.end) return t;
                    var a, s, u = t.end;
                    if (n = isNaN(n) ? b : n, e = isNaN(e) ? -b : e, x(r)) {
                        if (a = r.calculated ? r : (k(u) ? u(r) : T(r, u, n, e, o)) || r, !r.calculated) {
                            for (s in a) r[s] = a[s];
                            r.calculated = !0
                        }
                        a = a[i]
                    } else a = k(u) ? u(r) : _(u) ? T(r, u, n, e, o) : parseFloat(u);
                    return a > n ? a = n : a < e && (a = e), {
                        max: a,
                        min: a,
                        unitFactor: t.unitFactor
                    }
                },
                P = function(t, r, n) {
                    return isNaN(t[r]) ? n : +t[r]
                },
                S = function(t, r) {
                    return .05 * r * t / v
                },
                A = function(t, r, n) {
                    return Math.abs((r - t) * v / n / .05)
                },
                C = {
                    resistance: 1,
                    checkpoint: 1,
                    preventOvershoot: 1,
                    linkedProps: 1,
                    radius: 1,
                    duration: 1
                },
                E = function(t, r, n, e) {
                    if (r.linkedProps) {
                        var i, o, a, s, u, c, f = r.linkedProps.split(","),
                            p = {};
                        for (i = 0; i < f.length; i++)(a = r[o = f[i]]) && (s = y(a.velocity) ? a.velocity : (u = u || d(t)) && u.isTracking(o) ? u.get(o) : 0, c = Math.abs(s / P(a, "resistance", e)), p[o] = parseFloat(n(t, o)) + S(s, c));
                        return p
                    }
                },
                O = function() {
                    (e = m()) && (o = e.parseEase, a = e.utils.toArray, c = e.utils.getUnit, p = e.core.getCache, g = e.utils.clamp, s = o("power3"), v = s(.05), f = e.core.PropTween, e.config({
                        resistance: 100,
                        unitFactors: {
                            time: 1e3,
                            totalTime: 1e3,
                            progress: 1e3,
                            totalProgress: 1e3
                        }
                    }), u = e.config(), e.registerPlugin(h.H), i = 1)
                },
                B = {
                    version: "3.7.0",
                    name: "inertia",
                    register: function(t) {
                        e = t, O()
                    },
                    init: function(t, r, n, e, o) {
                        i || O();
                        var s = d(t);
                        if ("auto" === r) {
                            if (!s) return void console.warn("No inertia tracking on " + t + ". InertiaPlugin.track(target) first.");
                            r = s.getAll()
                        }
                        this.target = t, this.tween = n, l = r;
                        var v, h, m, _, T, B, H, R, j, I = t._gsap,
                            V = I.get,
                            U = r.duration,
                            q = x(U),
                            W = r.preventOvershoot || q && 0 === U.overshoot,
                            z = P(r, "resistance", u.resistance),
                            D = y(U) ? U : function(t, r, n, e, i, o) {
                                if (void 0 === n && (n = 10), void 0 === e && (e = .2), void 0 === i && (i = 1), void 0 === o && (o = 0), "string" == typeof t && (t = a(t)[0]), !t) return 0;
                                var s, c, f, v, h, m, k, _, w, T, O = 0,
                                    B = b,
                                    H = r.inertia || r,
                                    R = p(t).get,
                                    j = P(H, "resistance", u.resistance);
                                for (s in T = E(t, H, R, j), H) C[s] || (c = H[s], x(c) || ((_ = _ || d(t)) && _.isTracking(s) ? c = y(c) ? {
                                    velocity: c
                                } : {
                                    velocity: _.get(s)
                                } : (v = +c || 0, f = Math.abs(v / j))), x(c) && (v = y(c.velocity) ? c.velocity : (_ = _ || d(t)) && _.isTracking(s) ? _.get(s) : 0, f = g(e, n, Math.abs(v / P(c, "resistance", j))), m = (h = parseFloat(R(t, s)) || 0) + S(v, f), "end" in c && (c = N(c, T && s in T ? T : m, c.max, c.min, s, H.radius), o && (l === r && (l = H = M(r)), H[s] = F(c, H[s], "end"))), "max" in c && m > +c.max + 1e-10 ? (w = c.unitFactor || u.unitFactors[s] || 1, (k = h > c.max && c.min !== c.max || v * w > -15 && v * w < 45 ? e + .1 * (n - e) : A(h, c.max, v)) + i < B && (B = k + i)) : "min" in c && m < +c.min - 1e-10 && (w = c.unitFactor || u.unitFactors[s] || 1, (k = h < c.min && c.min !== c.max || v * w > -45 && v * w < 15 ? e + .1 * (n - e) : A(h, c.min, v)) + i < B && (B = k + i)), k > O && (O = k)), f > O && (O = f));
                                return O > B && (O = B), O > n ? n : O < e ? e : O
                            }(t, r, q && U.max || 10, q && U.min || .2, q && "overshoot" in U ? +U.overshoot : W ? 0 : 1, !0);
                        for (v in r = l, l = 0, j = E(t, r, V, z), r) C[v] || (h = r[v], k(h) && (h = h(e, t, o)), y(h) ? T = h : x(h) && !isNaN(h.velocity) ? T = +h.velocity : s && s.isTracking(v) ? T = s.get(v) : console.warn("ERROR: No velocity was defined for " + t + " property: " + v), B = S(T, D), R = 0, m = V(t, v), _ = c(m), m = parseFloat(m), x(h) && (H = m + B, "end" in h && (h = N(h, j && v in j ? j : H, h.max, h.min, v, r.radius)), "max" in h && +h.max < H ? W || h.preventOvershoot ? B = h.max - m : R = h.max - m - B : "min" in h && +h.min > H && (W || h.preventOvershoot ? B = h.min - m : R = h.min - m - B)), this._props.push(v), this._pt = new f(this._pt, t, v, m, 0, w, 0, I.set(t, v, this)), this._pt.u = _ || 0, this._pt.c1 = B, this._pt.c2 = R);
                        return n.duration(D), 1
                    },
                    render: function(t, r) {
                        var n, e = r._pt;
                        for (t = s(r.tween._time / r.tween._dur); e;) e.set(e.t, e.p, (n = e.s + e.c1 * t + e.c2 * t * t, Math.round(1e4 * n) / 1e4 + e.u), e.d, t), e = e._next
                    }
                };
            "track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach((function(t) {
                return B[t] = h.H[t]
            })), m() && e.registerPlugin(B)
        },
        20909: (t, r, n) => {
            "use strict";
            n.d(r, {
                H: () => x
            });
            var e, i, o, a, s, u, c, f, p = function() {
                    return e || "undefined" != typeof window && (e = window.gsap)
                },
                v = {},
                g = function(t) {
                    return f(t).id
                },
                l = function(t) {
                    return v[g("string" == typeof t ? o(t)[0] : t)]
                },
                h = function(t) {
                    var r, n = s;
                    if (t - c >= .05)
                        for (c = t; n;)((r = n.g(n.t, n.p)) !== n.v1 || t - n.t1 > .2) && (n.v2 = n.v1, n.v1 = r, n.t2 = n.t1, n.t1 = t), n = n._next
                },
                d = {
                    deg: 360,
                    rad: 2 * Math.PI
                },
                m = function() {
                    (e = p()) && (o = e.utils.toArray, a = e.utils.getUnit, f = e.core.getCache, u = e.ticker, i = 1)
                },
                y = function(t, r, n, e) {
                    this.t = t, this.p = r, this.g = t._gsap.get, this.rCap = d[n || a(this.g(t, r))], this.v1 = this.v2 = 0, this.t1 = this.t2 = u.time, e && (this._next = e, e._prev = this)
                },
                x = function() {
                    function t(t, r) {
                        i || m(), this.target = o(t)[0], v[g(this.target)] = this, this._props = {}, r && this.add(r)
                    }
                    t.register = function(t) {
                        e = t, m()
                    };
                    var r = t.prototype;
                    return r.get = function(t, r) {
                        var n, e, i, o = this._props[t] || console.warn("Not tracking " + t + " velocity.");
                        return n = parseFloat(r ? o.v1 : o.g(o.t, o.p)) - parseFloat(o.v2), (e = o.rCap) && (n %= e) != n % (e / 2) && (n = n < 0 ? n + e : n - e), i = n / ((r ? o.t1 : u.time) - o.t2), Math.round(1e4 * i) / 1e4
                    }, r.getAll = function() {
                        var t, r = {},
                            n = this._props;
                        for (t in n) r[t] = this.get(t);
                        return r
                    }, r.isTracking = function(t) {
                        return t in this._props
                    }, r.add = function(t, r) {
                        t in this._props || (s || (u.add(h), c = u.time), s = this._props[t] = new y(this.target, t, r, s))
                    }, r.remove = function(t) {
                        var r, n, e = this._props[t];
                        e && (r = e._prev, n = e._next, r && (r._next = n), n ? n._prev = r : s === e && (u.remove(h), s = 0), delete this._props[t])
                    }, r.kill = function(t) {
                        for (var r in this._props) this.remove(r);
                        t || delete v[g(this.target)]
                    }, t.track = function(r, n, e) {
                        i || m();
                        for (var a, s, u = [], c = o(r), f = n.split(","), p = (e || "").split(","), v = c.length; v--;) {
                            for (a = l(c[v]) || new t(c[v]), s = f.length; s--;) a.add(f[s], p[s] || p[0]);
                            u.push(a)
                        }
                        return u
                    }, t.untrack = function(t, r) {
                        var n = (r || "").split(",");
                        o(t).forEach((function(t) {
                            var r = l(t);
                            r && (n.length ? n.forEach((function(t) {
                                return r.remove(t)
                            })) : r.kill(1))
                        }))
                    }, t.isTracking = function(t, r) {
                        var n = l(t);
                        return n && n.isTracking(r)
                    }, t.getVelocity = function(t, r) {
                        var n = l(t);
                        return n && n.isTracking(r) ? n.get(r) : console.warn("Not tracking velocity of " + r)
                    }, t
                }();
            x.getByTarget = l, p() && e.registerPlugin(x)
        },
        69877: t => {
            var r = Math.floor,
                n = Math.random;
            t.exports = function(t, e) {
                return t + r(n() * (e - t + 1))
            }
        },
        16612: (t, r, n) => {
            var e = n(77813),
                i = n(98612),
                o = n(65776),
                a = n(13218);
            t.exports = function(t, r, n) {
                if (!a(n)) return !1;
                var s = typeof r;
                return !!("number" == s ? i(n) && o(r, n.length) : "string" == s && r in n) && e(n[r], t)
            }
        },
        83608: (t, r, n) => {
            var e = n(69877),
                i = n(16612),
                o = n(18601),
                a = parseFloat,
                s = Math.min,
                u = Math.random;
            t.exports = function(t, r, n) {
                if (n && "boolean" != typeof n && i(t, r, n) && (r = n = void 0), void 0 === n && ("boolean" == typeof r ? (n = r, r = void 0) : "boolean" == typeof t && (n = t, t = void 0)), void 0 === t && void 0 === r ? (t = 0, r = 1) : (t = o(t), void 0 === r ? (r = t, t = 0) : r = o(r)), t > r) {
                    var c = t;
                    t = r, r = c
                }
                if (n || t % 1 || r % 1) {
                    var f = u();
                    return s(t + f * (r - t + a("1e-" + ((f + "").length - 1))), r)
                }
                return e(t, r)
            }
        },
        18601: (t, r, n) => {
            var e = n(14841);
            t.exports = function(t) {
                return t ? Infinity === (t = e(t)) || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
            }
        }
    }
]);
//# sourceMappingURL=sourcemaps/8990.d157e476aaecb25bea97.js.map