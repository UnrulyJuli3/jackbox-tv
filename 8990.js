/*! For license information please see 8990.2cd7d4e4ed86b51e1ec8.js.LICENSE.txt */
(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [8990], {
        2376: (t, n, r) => {
            r(83112);
            var e = r(2649);
            t.exports = e("String", "padStart")
        },
        65646: (t, n, r) => {
            var e = r(2376);
            t.exports = e
        },
        2649: (t, n, r) => {
            var e = r(17854),
                i = r(49974),
                o = Function.call;
            t.exports = function(t, n, r) {
                return i(o, e[t].prototype[n], r)
            }
        },
        9707: (t, n, r) => {
            "use strict";
            r.d(n, {
                FB: () => B
            });
            var e, i, o, a, s, u, c, f, p, v, l, g, h = r(20909),
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
                F = function(t, n, r) {
                    for (var e in n) e in t || e === r || (t[e] = n[e]);
                    return t
                },
                T = function t(n) {
                    var r, e, i = {};
                    for (r in n) i[r] = x(e = n[r]) ? t(e) : e;
                    return i
                },
                M = function(t, n, r, e, i) {
                    var o, a, s, u, c = n.length,
                        f = 0,
                        p = b;
                    if (x(t)) {
                        for (; c--;) {
                            for (s in o = n[c], a = 0, t) a += (u = o[s] - t[s]) * u;
                            a < p && (f = c, p = a)
                        }
                        if ((i || b) < b && i < Math.sqrt(p)) return t
                    } else
                        for (; c--;)(a = (o = n[c]) - t) < 0 && (a = -a), a < p && o >= e && o <= r && (f = c, p = a);
                    return n[f]
                },
                N = function(t, n, r, e, i, o) {
                    if ("auto" === t.end) return t;
                    var a, s, u = t.end;
                    if (r = isNaN(r) ? b : r, e = isNaN(e) ? -b : e, x(n)) {
                        if (a = n.calculated ? n : (k(u) ? u(n) : M(n, u, r, e, o)) || n, !n.calculated) {
                            for (s in a) n[s] = a[s];
                            n.calculated = !0
                        }
                        a = a[i]
                    } else a = k(u) ? u(n) : _(u) ? M(n, u, r, e, o) : parseFloat(u);
                    return a > r ? a = r : a < e && (a = e), {
                        max: a,
                        min: a,
                        unitFactor: t.unitFactor
                    }
                },
                P = function(t, n, r) {
                    return isNaN(t[n]) ? r : +t[n]
                },
                j = function(t, n) {
                    return .05 * n * t / v
                },
                A = function(t, n, r) {
                    return Math.abs((n - t) * v / r / .05)
                },
                C = {
                    resistance: 1,
                    checkpoint: 1,
                    preventOvershoot: 1,
                    linkedProps: 1,
                    radius: 1,
                    duration: 1
                },
                E = function(t, n, r, e) {
                    if (n.linkedProps) {
                        var i, o, a, s, u, c, f = n.linkedProps.split(","),
                            p = {};
                        for (i = 0; i < f.length; i++)(a = n[o = f[i]]) && (s = y(a.velocity) ? a.velocity : (u = u || d(t)) && u.isTracking(o) ? u.get(o) : 0, c = Math.abs(s / P(a, "resistance", e)), p[o] = parseFloat(r(t, o)) + j(s, c));
                        return p
                    }
                },
                O = function() {
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
                B = {
                    version: "3.7.0",
                    name: "inertia",
                    register: function(t) {
                        e = t, O()
                    },
                    init: function(t, n, r, e, o) {
                        i || O();
                        var s = d(t);
                        if ("auto" === n) {
                            if (!s) return void console.warn("No inertia tracking on " + t + ". InertiaPlugin.track(target) first.");
                            n = s.getAll()
                        }
                        this.target = t, this.tween = r, g = n;
                        var v, h, m, _, M, B, H, I, R, S = t._gsap,
                            U = S.get,
                            V = n.duration,
                            q = x(V),
                            G = n.preventOvershoot || q && 0 === V.overshoot,
                            $ = P(n, "resistance", u.resistance),
                            z = y(V) ? V : function(t, n, r, e, i, o) {
                                if (void 0 === r && (r = 10), void 0 === e && (e = .2), void 0 === i && (i = 1), void 0 === o && (o = 0), "string" == typeof t && (t = a(t)[0]), !t) return 0;
                                var s, c, f, v, h, m, k, _, w, M, O = 0,
                                    B = b,
                                    H = n.inertia || n,
                                    I = p(t).get,
                                    R = P(H, "resistance", u.resistance);
                                for (s in M = E(t, H, I, R), H) C[s] || (c = H[s], x(c) || ((_ = _ || d(t)) && _.isTracking(s) ? c = y(c) ? {
                                    velocity: c
                                } : {
                                    velocity: _.get(s)
                                } : (v = +c || 0, f = Math.abs(v / R))), x(c) && (v = y(c.velocity) ? c.velocity : (_ = _ || d(t)) && _.isTracking(s) ? _.get(s) : 0, f = l(e, r, Math.abs(v / P(c, "resistance", R))), m = (h = parseFloat(I(t, s)) || 0) + j(v, f), "end" in c && (c = N(c, M && s in M ? M : m, c.max, c.min, s, H.radius), o && (g === n && (g = H = T(n)), H[s] = F(c, H[s], "end"))), "max" in c && m > +c.max + 1e-10 ? (w = c.unitFactor || u.unitFactors[s] || 1, (k = h > c.max && c.min !== c.max || v * w > -15 && v * w < 45 ? e + .1 * (r - e) : A(h, c.max, v)) + i < B && (B = k + i)) : "min" in c && m < +c.min - 1e-10 && (w = c.unitFactor || u.unitFactors[s] || 1, (k = h < c.min && c.min !== c.max || v * w > -45 && v * w < 15 ? e + .1 * (r - e) : A(h, c.min, v)) + i < B && (B = k + i)), k > O && (O = k)), f > O && (O = f));
                                return O > B && (O = B), O > r ? r : O < e ? e : O
                            }(t, n, q && V.max || 10, q && V.min || .2, q && "overshoot" in V ? +V.overshoot : G ? 0 : 1, !0);
                        for (v in n = g, g = 0, R = E(t, n, U, $), n) C[v] || (h = n[v], k(h) && (h = h(e, t, o)), y(h) ? M = h : x(h) && !isNaN(h.velocity) ? M = +h.velocity : s && s.isTracking(v) ? M = s.get(v) : console.warn("ERROR: No velocity was defined for " + t + " property: " + v), B = j(M, z), I = 0, m = U(t, v), _ = c(m), m = parseFloat(m), x(h) && (H = m + B, "end" in h && (h = N(h, R && v in R ? R : H, h.max, h.min, v, n.radius)), "max" in h && +h.max < H ? G || h.preventOvershoot ? B = h.max - m : I = h.max - m - B : "min" in h && +h.min > H && (G || h.preventOvershoot ? B = h.min - m : I = h.min - m - B)), this._props.push(v), this._pt = new f(this._pt, t, v, m, 0, w, 0, S.set(t, v, this)), this._pt.u = _ || 0, this._pt.c1 = B, this._pt.c2 = I);
                        return r.duration(z), 1
                    },
                    render: function(t, n) {
                        var r, e = n._pt;
                        for (t = s(n.tween._time / n.tween._dur); e;) e.set(e.t, e.p, (r = e.s + e.c1 * t + e.c2 * t * t, Math.round(1e4 * r) / 1e4 + e.u), e.d, t), e = e._next
                    }
                };
            "track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach((function(t) {
                return B[t] = h.H[t]
            })), m() && e.registerPlugin(B)
        },
        20909: (t, n, r) => {
            "use strict";
            r.d(n, {
                H: () => x
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
                    var n, r = s;
                    if (t - c >= .05)
                        for (c = t; r;)((n = r.g(r.t, r.p)) !== r.v1 || t - r.t1 > .2) && (r.v2 = r.v1, r.v1 = n, r.t2 = r.t1, r.t1 = t), r = r._next
                },
                d = {
                    deg: 360,
                    rad: 2 * Math.PI
                },
                m = function() {
                    (e = p()) && (o = e.utils.toArray, a = e.utils.getUnit, f = e.core.getCache, u = e.ticker, i = 1)
                },
                y = function(t, n, r, e) {
                    this.t = t, this.p = n, this.g = t._gsap.get, this.rCap = d[r || a(this.g(t, n))], this.v1 = this.v2 = 0, this.t1 = this.t2 = u.time, e && (this._next = e, e._prev = this)
                },
                x = function() {
                    function t(t, n) {
                        i || m(), this.target = o(t)[0], v[l(this.target)] = this, this._props = {}, n && this.add(n)
                    }
                    t.register = function(t) {
                        e = t, m()
                    };
                    var n = t.prototype;
                    return n.get = function(t, n) {
                        var r, e, i, o = this._props[t] || console.warn("Not tracking " + t + " velocity.");
                        return r = parseFloat(n ? o.v1 : o.g(o.t, o.p)) - parseFloat(o.v2), (e = o.rCap) && (r %= e) != r % (e / 2) && (r = r < 0 ? r + e : r - e), i = r / ((n ? o.t1 : u.time) - o.t2), Math.round(1e4 * i) / 1e4
                    }, n.getAll = function() {
                        var t, n = {},
                            r = this._props;
                        for (t in r) n[t] = this.get(t);
                        return n
                    }, n.isTracking = function(t) {
                        return t in this._props
                    }, n.add = function(t, n) {
                        t in this._props || (s || (u.add(h), c = u.time), s = this._props[t] = new y(this.target, t, n, s))
                    }, n.remove = function(t) {
                        var n, r, e = this._props[t];
                        e && (n = e._prev, r = e._next, n && (n._next = r), r ? r._prev = n : s === e && (u.remove(h), s = 0), delete this._props[t])
                    }, n.kill = function(t) {
                        for (var n in this._props) this.remove(n);
                        t || delete v[l(this.target)]
                    }, t.track = function(n, r, e) {
                        i || m();
                        for (var a, s, u = [], c = o(n), f = r.split(","), p = (e || "").split(","), v = c.length; v--;) {
                            for (a = g(c[v]) || new t(c[v]), s = f.length; s--;) a.add(f[s], p[s] || p[0]);
                            u.push(a)
                        }
                        return u
                    }, t.untrack = function(t, n) {
                        var r = (n || "").split(",");
                        o(t).forEach((function(t) {
                            var n = g(t);
                            n && (r.length ? r.forEach((function(t) {
                                return n.remove(t)
                            })) : n.kill(1))
                        }))
                    }, t.isTracking = function(t, n) {
                        var r = g(t);
                        return r && r.isTracking(n)
                    }, t.getVelocity = function(t, n) {
                        var r = g(t);
                        return r && r.isTracking(n) ? r.get(n) : console.warn("Not tracking velocity of " + n)
                    }, t
                }();
            x.getByTarget = g, p() && e.registerPlugin(x)
        },
        69877: t => {
            var n = Math.floor,
                r = Math.random;
            t.exports = function(t, e) {
                return t + n(r() * (e - t + 1))
            }
        },
        65776: t => {
            var n = /^(?:0|[1-9]\d*)$/;
            t.exports = function(t, r) {
                var e = typeof t;
                return !!(r = null == r ? 9007199254740991 : r) && ("number" == e || "symbol" != e && n.test(t)) && t > -1 && t % 1 == 0 && t < r
            }
        },
        16612: (t, n, r) => {
            var e = r(77813),
                i = r(98612),
                o = r(65776),
                a = r(13218);
            t.exports = function(t, n, r) {
                if (!a(r)) return !1;
                var s = typeof n;
                return !!("number" == s ? i(r) && o(n, r.length) : "string" == s && n in r) && e(r[n], t)
            }
        },
        77813: t => {
            t.exports = function(t, n) {
                return t === n || t != t && n != n
            }
        },
        98612: (t, n, r) => {
            var e = r(23560),
                i = r(41780);
            t.exports = function(t) {
                return null != t && i(t.length) && !e(t)
            }
        },
        23560: (t, n, r) => {
            var e = r(44239),
                i = r(13218);
            t.exports = function(t) {
                if (!i(t)) return !1;
                var n = e(t);
                return "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n
            }
        },
        41780: t => {
            t.exports = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
            }
        },
        83608: (t, n, r) => {
            var e = r(69877),
                i = r(16612),
                o = r(18601),
                a = parseFloat,
                s = Math.min,
                u = Math.random;
            t.exports = function(t, n, r) {
                if (r && "boolean" != typeof r && i(t, n, r) && (n = r = void 0), void 0 === r && ("boolean" == typeof n ? (r = n, n = void 0) : "boolean" == typeof t && (r = t, t = void 0)), void 0 === t && void 0 === n ? (t = 0, n = 1) : (t = o(t), void 0 === n ? (n = t, t = 0) : n = o(n)), t > n) {
                    var c = t;
                    t = n, n = c
                }
                if (r || t % 1 || n % 1) {
                    var f = u();
                    return s(t + f * (n - t + a("1e-" + ((f + "").length - 1))), n)
                }
                return e(t, n)
            }
        },
        18601: (t, n, r) => {
            var e = r(14841);
            t.exports = function(t) {
                return t ? Infinity === (t = e(t)) || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
            }
        }
    }
]);
//# sourceMappingURL=8990.2cd7d4e4ed86b51e1ec8.js.map