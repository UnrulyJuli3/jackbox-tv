/*! For license information please see 8990.20101bdccf98c280f57c.js.LICENSE.txt */
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
        9707: (t, r, n) => {
            "use strict";
            n.d(r, {
                FB: () => H
            });
            var e, i, o, a, s, u, c, f, p, v, l, g, h = n(20909),
                d = h.H.getByTarget,
                m = function() {
                    return e || "undefined" != typeof window && (e = window.gsap) && e.registerPlugin && e
                },
                y = function(t) {
                    return "number" == typeof t
                },
                k = function(t) {
                    return "object" == typeof t
                },
                _ = function(t) {
                    return "function" == typeof t
                },
                x = Array.isArray,
                w = function(t) {
                    return t
                },
                F = 1e10,
                b = function(t, r, n) {
                    for (var e in r) e in t || e === n || (t[e] = r[e]);
                    return t
                },
                T = function t(r) {
                    var n, e, i = {};
                    for (n in r) i[n] = k(e = r[n]) ? t(e) : e;
                    return i
                },
                M = function(t, r, n, e, i) {
                    var o, a, s, u, c = r.length,
                        f = 0,
                        p = F;
                    if (k(t)) {
                        for (; c--;) {
                            for (s in o = r[c], a = 0, t) a += (u = o[s] - t[s]) * u;
                            a < p && (f = c, p = a)
                        }
                        if ((i || F) < F && i < Math.sqrt(p)) return t
                    } else
                        for (; c--;)(a = (o = r[c]) - t) < 0 && (a = -a), a < p && o >= e && o <= n && (f = c, p = a);
                    return r[f]
                },
                N = function(t, r, n, e, i, o) {
                    if ("auto" === t.end) return t;
                    var a, s, u = t.end;
                    if (n = isNaN(n) ? F : n, e = isNaN(e) ? -F : e, k(r)) {
                        if (a = r.calculated ? r : (_(u) ? u(r) : M(r, u, n, e, o)) || r, !r.calculated) {
                            for (s in a) r[s] = a[s];
                            r.calculated = !0
                        }
                        a = a[i]
                    } else a = _(u) ? u(r) : x(u) ? M(r, u, n, e, o) : parseFloat(u);
                    return a > n ? a = n : a < e && (a = e), {
                        max: a,
                        min: a,
                        unitFactor: t.unitFactor
                    }
                },
                P = function(t, r, n) {
                    return isNaN(t[r]) ? n : +t[r]
                },
                A = function(t, r) {
                    return .05 * r * t / v
                },
                C = function(t, r, n) {
                    return Math.abs((r - t) * v / n / .05)
                },
                E = {
                    resistance: 1,
                    checkpoint: 1,
                    preventOvershoot: 1,
                    linkedProps: 1,
                    radius: 1,
                    duration: 1
                },
                O = function(t, r, n, e) {
                    if (r.linkedProps) {
                        var i, o, a, s, u, c, f = r.linkedProps.split(","),
                            p = {};
                        for (i = 0; i < f.length; i++)(a = r[o = f[i]]) && (s = y(a.velocity) ? a.velocity : (u = u || d(t)) && u.isTracking(o) ? u.get(o) : 0, c = Math.abs(s / P(a, "resistance", e)), p[o] = parseFloat(n(t, o)) + A(s, c));
                        return p
                    }
                },
                B = function() {
                    (e = m()) && (o = e.parseEase, a = e.utils.toArray, c = e.utils.getUnit, p = e.core.getCache, l = e.utils.clamp, s = o("power3"), v = s(.05), f = e.core.PropTween, e.config({
                        resistance: 100,
                        unitFactors: {
                            time: 1e3,
                            totalTime: 1e3,
                            progress: 1e3,
                            totalProgress: 1e3
                        }
                    }), u = e.config(), e.registerPlugin(h.H), i = 1)
                },
                H = {
                    version: "3.7.0",
                    name: "inertia",
                    register: function(t) {
                        e = t, B()
                    },
                    init: function(t, r, n, e, o) {
                        i || B();
                        var s = d(t);
                        if ("auto" === r) {
                            if (!s) return void console.warn("No inertia tracking on " + t + ". InertiaPlugin.track(target) first.");
                            r = s.getAll()
                        }
                        this.target = t, this.tween = n, g = r;
                        var v, h, m, x, M, H, j, I, R, S = t._gsap,
                            U = S.get,
                            V = r.duration,
                            q = k(V),
                            z = r.preventOvershoot || q && 0 === V.overshoot,
                            D = P(r, "resistance", u.resistance),
                            G = y(V) ? V : function(t, r, n, e, i, o) {
                                if (void 0 === n && (n = 10), void 0 === e && (e = .2), void 0 === i && (i = 1), void 0 === o && (o = 0), "string" == typeof t && (t = a(t)[0]), !t) return 0;
                                var s, c, f, v, h, m, _, x, w, M, B = 0,
                                    H = F,
                                    j = r.inertia || r,
                                    I = p(t).get,
                                    R = P(j, "resistance", u.resistance);
                                for (s in M = O(t, j, I, R), j) E[s] || (c = j[s], k(c) || ((x = x || d(t)) && x.isTracking(s) ? c = y(c) ? {
                                    velocity: c
                                } : {
                                    velocity: x.get(s)
                                } : (v = +c || 0, f = Math.abs(v / R))), k(c) && (v = y(c.velocity) ? c.velocity : (x = x || d(t)) && x.isTracking(s) ? x.get(s) : 0, f = l(e, n, Math.abs(v / P(c, "resistance", R))), m = (h = parseFloat(I(t, s)) || 0) + A(v, f), "end" in c && (c = N(c, M && s in M ? M : m, c.max, c.min, s, j.radius), o && (g === r && (g = j = T(r)), j[s] = b(c, j[s], "end"))), "max" in c && m > +c.max + 1e-10 ? (w = c.unitFactor || u.unitFactors[s] || 1, (_ = h > c.max && c.min !== c.max || v * w > -15 && v * w < 45 ? e + .1 * (n - e) : C(h, c.max, v)) + i < H && (H = _ + i)) : "min" in c && m < +c.min - 1e-10 && (w = c.unitFactor || u.unitFactors[s] || 1, (_ = h < c.min && c.min !== c.max || v * w > -45 && v * w < 15 ? e + .1 * (n - e) : C(h, c.min, v)) + i < H && (H = _ + i)), _ > B && (B = _)), f > B && (B = f));
                                return B > H && (B = H), B > n ? n : B < e ? e : B
                            }(t, r, q && V.max || 10, q && V.min || .2, q && "overshoot" in V ? +V.overshoot : z ? 0 : 1, !0);
                        for (v in r = g, g = 0, R = O(t, r, U, D), r) E[v] || (h = r[v], _(h) && (h = h(e, t, o)), y(h) ? M = h : k(h) && !isNaN(h.velocity) ? M = +h.velocity : s && s.isTracking(v) ? M = s.get(v) : console.warn("ERROR: No velocity was defined for " + t + " property: " + v), H = A(M, G), I = 0, m = U(t, v), x = c(m), m = parseFloat(m), k(h) && (j = m + H, "end" in h && (h = N(h, R && v in R ? R : j, h.max, h.min, v, r.radius)), "max" in h && +h.max < j ? z || h.preventOvershoot ? H = h.max - m : I = h.max - m - H : "min" in h && +h.min > j && (z || h.preventOvershoot ? H = h.min - m : I = h.min - m - H)), this._props.push(v), this._pt = new f(this._pt, t, v, m, 0, w, 0, S.set(t, v, this)), this._pt.u = x || 0, this._pt.c1 = H, this._pt.c2 = I);
                        return n.duration(G), 1
                    },
                    render: function(t, r) {
                        var n, e = r._pt;
                        for (t = s(r.tween._time / r.tween._dur); e;) e.set(e.t, e.p, (n = e.s + e.c1 * t + e.c2 * t * t, Math.round(1e4 * n) / 1e4 + e.u), e.d, t), e = e._next
                    }
                };
            "track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach((function(t) {
                return H[t] = h.H[t]
            })), m() && e.registerPlugin(H)
        },
        20909: (t, r, n) => {
            "use strict";
            n.d(r, {
                H: () => k
            });
            var e, i, o, a, s, u, c, f, p = function() {
                    return e || "undefined" != typeof window && (e = window.gsap)
                },
                v = {},
                l = function(t) {
                    return f(t).id
                },
                g = function(t) {
                    return v[l("string" == typeof t ? o(t)[0] : t)]
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
                k = function() {
                    function t(t, r) {
                        i || m(), this.target = o(t)[0], v[l(this.target)] = this, this._props = {}, r && this.add(r)
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
                        t || delete v[l(this.target)]
                    }, t.track = function(r, n, e) {
                        i || m();
                        for (var a, s, u = [], c = o(r), f = n.split(","), p = (e || "").split(","), v = c.length; v--;) {
                            for (a = g(c[v]) || new t(c[v]), s = f.length; s--;) a.add(f[s], p[s] || p[0]);
                            u.push(a)
                        }
                        return u
                    }, t.untrack = function(t, r) {
                        var n = (r || "").split(",");
                        o(t).forEach((function(t) {
                            var r = g(t);
                            r && (n.length ? n.forEach((function(t) {
                                return r.remove(t)
                            })) : r.kill(1))
                        }))
                    }, t.isTracking = function(t, r) {
                        var n = g(t);
                        return n && n.isTracking(r)
                    }, t.getVelocity = function(t, r) {
                        var n = g(t);
                        return n && n.isTracking(r) ? n.get(r) : console.warn("Not tracking velocity of " + r)
                    }, t
                }();
            k.getByTarget = g, p() && e.registerPlugin(k)
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
//# sourceMappingURL=sourcemaps/8990.20101bdccf98c280f57c.js.map