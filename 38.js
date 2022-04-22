/*! For license information please see 38.6ab163f8816a2d0d257d.js.LICENSE.txt */
(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [38], {
        76056: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => p
            });
            var r, i, o, u = function() {
                    return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
                },
                a = {
                    easeOut: "M0,1,C0.7,1,0.6,0,1,0",
                    easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",
                    anticipate: "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",
                    uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0"
                },
                s = function(e) {
                    return e
                },
                c = function(e) {
                    if (!i)
                        if (r = u(), o = r && r.parseEase("_CE")) {
                            for (var t in a) a[t] = o("", a[t]);
                            i = 1, f("wiggle").config = function(e) {
                                return "object" == typeof e ? f("", e) : f("wiggle(" + e + ")", {
                                    wiggles: +e
                                })
                            }
                        } else e && console.warn("Please gsap.registerPlugin(CustomEase, CustomWiggle)")
                },
                l = function(e, t) {
                    return "function" != typeof e && (e = r.parseEase(e) || o("", e)), e.custom || !t ? e : function(t) {
                        return 1 - e(t)
                    }
                },
                f = function(e, t) {
                    i || c(1);
                    var n, r, u, f, p, h, d, v, g, y = 0 | ((t = t || {}).wiggles || 10),
                        m = 1 / y,
                        b = m / 2,
                        w = "anticipate" === t.type,
                        x = a[t.type] || a.easeOut,
                        _ = s;
                    if (w && (_ = x, x = a.easeOut), t.timingEase && (_ = l(t.timingEase)), t.amplitudeEase && (x = l(t.amplitudeEase, !0)), v = [0, 0, (h = _(b)) / 4, 0, h / 2, d = w ? -x(b) : x(b), h, d], "random" === t.type) {
                        for (v.length = 4, n = _(m), r = 2 * Math.random() - 1, g = 2; g < y; g++) b = n, d = r, n = _(m * g), r = 2 * Math.random() - 1, u = Math.atan2(r - v[v.length - 3], n - v[v.length - 4]), f = Math.cos(u) * m, p = Math.sin(u) * m, v.push(b - f, d - p, b, d, b + f, d + p);
                        v.push(n, 0, 1, 0)
                    } else {
                        for (g = 1; g < y; g++) v.push(_(b + m / 2), d), b += m, d = (d > 0 ? -1 : 1) * x(g * m), h = _(b), v.push(_(b - m / 2), d, h, d);
                        v.push(_(b + m / 4), d, _(b + m / 4), 0, 1, 0)
                    }
                    for (g = v.length; --g > -1;) v[g] = ~~(1e3 * v[g]) / 1e3;
                    return v[2] = "C" + v[2], o(e, "M" + v.join(","))
                },
                p = function() {
                    function e(e, t) {
                        this.ease = f(e, t)
                    }
                    return e.create = function(e, t) {
                        return f(e, t)
                    }, e.register = function(e) {
                        r = e, c()
                    }, e
                }();
            u() && r.registerPlugin(p), p.version = "3.7.0"
        },
        76791: (e, t, n) => {
            "use strict";
            n.d(t, {
                X: () => Y
            });
            var r, i, o, u, a, s, c, l, f = n(61504),
                p = "transform",
                h = p + "Origin",
                d = function(e) {
                    var t = e.ownerDocument || e;
                    !(p in e.style) && "msTransform" in e.style && (h = (p = "msTransform") + "Origin");
                    for (; t.parentNode && (t = t.parentNode););
                    if (i = window, c = new x, t) {
                        r = t, o = t.documentElement, u = t.body;
                        var n = t.createElement("div"),
                            a = t.createElement("div");
                        u.appendChild(n), n.appendChild(a), n.style.position = "static", n.style[p] = "translate3d(0,0,1px)", l = a.offsetParent !== n, u.removeChild(n)
                    }
                    return t
                },
                v = [],
                g = [],
                y = function(e) {
                    return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null)
                },
                m = function e(t) {
                    return "fixed" === i.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
                },
                b = function e(t, n) {
                    if (t.parentNode && (r || d(t))) {
                        var i = y(t),
                            o = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                            u = i ? n ? "rect" : "g" : "div",
                            c = 2 !== n ? 0 : 100,
                            l = 3 === n ? 100 : 0,
                            f = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                            p = r.createElementNS ? r.createElementNS(o.replace(/^https/, "http"), u) : r.createElement(u);
                        return n && (i ? (s || (s = e(t)), p.setAttribute("width", .01), p.setAttribute("height", .01), p.setAttribute("transform", "translate(" + c + "," + l + ")"), s.appendChild(p)) : (a || ((a = e(t)).style.cssText = f), p.style.cssText = f + "width:0.1px;height:0.1px;top:" + l + "px;left:" + c + "px", a.appendChild(p))), p
                    }
                    throw "Need document and parent."
                },
                w = function(e, t, n, r, i, o, u) {
                    return e.a = t, e.b = n, e.c = r, e.d = i, e.e = o, e.f = u, e
                },
                x = function() {
                    function e(e, t, n, r, i, o) {
                        void 0 === e && (e = 1), void 0 === t && (t = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === i && (i = 0), void 0 === o && (o = 0), w(this, e, t, n, r, i, o)
                    }
                    var t = e.prototype;
                    return t.inverse = function() {
                        var e = this.a,
                            t = this.b,
                            n = this.c,
                            r = this.d,
                            i = this.e,
                            o = this.f,
                            u = e * r - t * n || 1e-10;
                        return w(this, r / u, -t / u, -n / u, e / u, (n * o - r * i) / u, -(e * o - t * i) / u)
                    }, t.multiply = function(e) {
                        var t = this.a,
                            n = this.b,
                            r = this.c,
                            i = this.d,
                            o = this.e,
                            u = this.f,
                            a = e.a,
                            s = e.c,
                            c = e.b,
                            l = e.d,
                            f = e.e,
                            p = e.f;
                        return w(this, a * t + c * r, a * n + c * i, s * t + l * r, s * n + l * i, o + f * t + p * r, u + f * n + p * i)
                    }, t.clone = function() {
                        return new e(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, t.equals = function(e) {
                        var t = this.a,
                            n = this.b,
                            r = this.c,
                            i = this.d,
                            o = this.e,
                            u = this.f;
                        return t === e.a && n === e.b && r === e.c && i === e.d && o === e.e && u === e.f
                    }, t.apply = function(e, t) {
                        void 0 === t && (t = {});
                        var n = e.x,
                            r = e.y,
                            i = this.a,
                            o = this.b,
                            u = this.c,
                            a = this.d,
                            s = this.e,
                            c = this.f;
                        return t.x = n * i + r * u + s || 0, t.y = n * o + r * a + c || 0, t
                    }, e
                }();

            function _(e, t, n, f) {
                if (!e || !e.parentNode || (r || d(e)).documentElement === e) return new x;
                var w = function(e) {
                        for (var t, n; e && e !== u;)(n = e._gsap) && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
                        return t
                    }(e),
                    _ = y(e) ? v : g,
                    P = function(e, t) {
                        var n, r, o, u, f, d, m = y(e),
                            w = e === m,
                            _ = m ? v : g,
                            P = e.parentNode;
                        if (e === i) return e;
                        if (_.length || _.push(b(e, 1), b(e, 2), b(e, 3)), n = m ? s : a, m) o = w ? {
                            x: 0,
                            y: 0
                        } : e.getBBox(), (r = e.transform ? e.transform.baseVal : {}).numberOfItems ? (u = (r = r.numberOfItems > 1 ? function(e) {
                            for (var t = new x, n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
                            return t
                        }(r) : r.getItem(0).matrix).a * o.x + r.c * o.y, f = r.b * o.x + r.d * o.y) : (r = c, u = o.x, f = o.y), t && "g" === e.tagName.toLowerCase() && (u = f = 0), (w ? m : P).appendChild(n), n.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + u) + "," + (r.f + f) + ")");
                        else {
                            if (u = f = 0, l)
                                for (r = e.offsetParent, o = e; o && (o = o.parentNode) && o !== r && o.parentNode;)(i.getComputedStyle(o)[p] + "").length > 4 && (u = o.offsetLeft, f = o.offsetTop, o = 0);
                            if ("absolute" !== (d = i.getComputedStyle(e)).position)
                                for (r = e.offsetParent; P && P !== r;) u += P.scrollLeft || 0, f += P.scrollTop || 0, P = P.parentNode;
                            (o = n.style).top = e.offsetTop - f + "px", o.left = e.offsetLeft - u + "px", o[p] = d[p], o[h] = d[h], o.position = "fixed" === d.position ? "fixed" : "absolute", e.parentNode.appendChild(n)
                        }
                        return n
                    }(e, n),
                    E = _[0].getBoundingClientRect(),
                    O = _[1].getBoundingClientRect(),
                    T = _[2].getBoundingClientRect(),
                    M = P.parentNode,
                    j = !f && m(e),
                    k = new x((O.left - E.left) / 100, (O.top - E.top) / 100, (T.left - E.left) / 100, (T.top - E.top) / 100, E.left + (j ? 0 : i.pageXOffset || r.scrollLeft || o.scrollLeft || u.scrollLeft || 0), E.top + (j ? 0 : i.pageYOffset || r.scrollTop || o.scrollTop || u.scrollTop || 0));
                if (M.removeChild(P), w)
                    for (E = w.length; E--;)(O = w[E]).scaleX = O.scaleY = 0, O.renderTransform(1, O);
                return t ? k.inverse() : k
            }
            var P, E, O, T, M = "x,translateX,left,marginLeft,xPercent".split(","),
                j = "y,translateY,top,marginTop,yPercent".split(","),
                k = Math.PI / 180,
                I = function(e, t, n, r) {
                    for (var i = t.length, o = 2 === r ? 0 : r, u = 0; u < i; u++) e[o] = parseFloat(t[u][n]), 2 === r && (e[o + 1] = 0), o += 2;
                    return e
                },
                C = function(e, t, n) {
                    return parseFloat(e._gsap.get(e, t, n || "px")) || 0
                },
                G = function(e) {
                    var t, n = e[0],
                        r = e[1];
                    for (t = 2; t < e.length; t += 2) n = e[t] += n, r = e[t + 1] += r
                },
                D = function(e, t, n, r, i, o, u, a, s) {
                    return "cubic" === u.type ? t = [t] : (!1 !== u.fromCurrent && t.unshift(C(n, r, a), i ? C(n, i, s) : 0), u.relative && G(t), t = [(i ? f.qY : f.Ds)(t, u.curviness)]), t = o(N(t, n, u)), L(e, n, r, t, "x", a), i && L(e, n, i, t, "y", s), (0, f.HC)(t, u.resolution || (0 === u.curviness ? 20 : 12))
                },
                S = function(e) {
                    return e
                },
                B = /[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
                A = function(e, t, n) {
                    var r, i, o, u = _(e);
                    return "svg" === (e.tagName + "").toLowerCase() ? (i = (r = e.viewBox.baseVal).x, o = r.y, r.width || (r = {
                        width: +e.getAttribute("width"),
                        height: +e.getAttribute("height")
                    })) : (r = t && e.getBBox && e.getBBox(), i = o = 0), t && "auto" !== t && (i += t.push ? t[0] * (r ? r.width : e.offsetWidth || 0) : t.x, o += t.push ? t[1] * (r ? r.height : e.offsetHeight || 0) : t.y), n.apply(i || o ? u.apply({
                        x: i,
                        y: o
                    }) : {
                        x: u.e,
                        y: u.f
                    })
                },
                R = function(e, t, n, r) {
                    var i, o = _(e.parentNode, !0, !0),
                        u = o.clone().multiply(_(t)),
                        a = A(e, n, o),
                        s = A(t, r, o),
                        c = s.x,
                        l = s.y;
                    return u.e = u.f = 0, "auto" === r && t.getTotalLength && "path" === t.tagName.toLowerCase() && (i = t.getAttribute("d").match(B) || [], c += (i = u.apply({
                        x: +i[0],
                        y: +i[1]
                    })).x, l += i.y), (i || t.getBBox && e.getBBox && t.ownerSVGElement === e.ownerSVGElement) && (c -= (i = u.apply(t.getBBox())).x, l -= i.y), u.e = c - a.x, u.f = l - a.y, u
                },
                N = function(e, t, n) {
                    var r, i, o, u = n.align,
                        a = n.matrix,
                        s = n.offsetX,
                        c = n.offsetY,
                        l = n.alignOrigin,
                        p = e[0][0],
                        h = e[0][1],
                        d = C(t, "x"),
                        v = C(t, "y");
                    return e && e.length ? (u && ("self" === u || (r = T(u)[0] || t) === t ? (0, f.$v)(e, 1, 0, 0, 1, d - p, v - h) : (l && !1 !== l[2] ? P.set(t, {
                        transformOrigin: 100 * l[0] + "% " + 100 * l[1] + "%"
                    }) : l = [C(t, "xPercent") / -100, C(t, "yPercent") / -100], o = (i = R(t, r, l, "auto")).apply({
                        x: p,
                        y: h
                    }), (0, f.$v)(e, i.a, i.b, i.c, i.d, d + i.e - (o.x - i.e), v + i.f - (o.y - i.f)))), a ? (0, f.$v)(e, a.a, a.b, a.c, a.d, a.e, a.f) : (s || c) && (0, f.$v)(e, 1, 0, 0, 1, s || 0, c || 0), e) : (0, f.T4)("M0,0L0,0")
                },
                L = function(e, t, n, r, i, o) {
                    var u = t._gsap,
                        a = u.harness,
                        s = a && a.aliases && a.aliases[n],
                        c = s && s.indexOf(",") < 0 ? s : n,
                        l = e._pt = new E(e._pt, t, c, 0, 0, S, 0, u.set(t, c, e));
                    l.u = O(u.get(t, c, o)) || 0, l.path = r, l.pp = i, e._props.push(c)
                },
                Y = {
                    version: "3.7.0",
                    name: "motionPath",
                    register: function(e, t, n) {
                        O = (P = e).utils.getUnit, T = P.utils.toArray, E = n
                    },
                    init: function(e, t) {
                        if (!P) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
                        "object" == typeof t && !t.style && t.path || (t = {
                            path: t
                        });
                        var n, r, i, o, u = [],
                            a = t,
                            s = a.path,
                            c = a.autoRotate,
                            l = a.unitX,
                            p = a.unitY,
                            h = a.x,
                            d = a.y,
                            v = s[0],
                            g = (i = t.start, o = "end" in t ? t.end : 1, function(e) {
                                return i || 1 !== o ? (0, f.tT)(e, i, o) : e
                            });
                        if (this.rawPaths = u, this.target = e, (this.rotate = c || 0 === c) && (this.rOffset = parseFloat(c) || 0, this.radians = !!t.useRadians, this.rProp = t.rotation || "rotation", this.rSet = e._gsap.set(e, this.rProp, this), this.ru = O(e._gsap.get(e, this.rProp)) || 0), Array.isArray(s) && !("closed" in s) && "number" != typeof v) {
                            for (r in v) !h && ~M.indexOf(r) ? h = r : !d && ~j.indexOf(r) && (d = r);
                            for (r in h && d ? u.push(D(this, I(I([], s, h, 0), s, d, 1), e, h, d, g, t, l || O(s[0][h]), p || O(s[0][d]))) : h = d = 0, v) r !== h && r !== d && u.push(D(this, I([], s, r, 2), e, r, 0, g, t, O(s[0][r])))
                        } else n = g(N((0, f.T4)(t.path), e, t)), (0, f.HC)(n, t.resolution), u.push(n), L(this, e, t.x || "x", n, "x", t.unitX || "px"), L(this, e, t.y || "y", n, "y", t.unitY || "px")
                    },
                    render: function(e, t) {
                        var n = t.rawPaths,
                            r = n.length,
                            i = t._pt;
                        for (e > 1 ? e = 1 : e < 0 && (e = 0); r--;)(0, f.oZ)(n[r], e, !r && t.rotate, n[r]);
                        for (; i;) i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, e), i = i._next;
                        t.rotate && t.rSet(t.target, t.rProp, n[0].angle * (t.radians ? k : 1) + t.rOffset + t.ru, t, e)
                    },
                    getLength: function(e) {
                        return (0, f.HC)((0, f.T4)(e)).totalLength
                    },
                    sliceRawPath: f.tT,
                    getRawPath: f.T4,
                    pointsToSegment: f.qY,
                    stringToRawPath: f.IZ,
                    rawPathToString: f.g5,
                    transformRawPath: f.$v,
                    getGlobalMatrix: _,
                    getPositionOnPath: f.oZ,
                    cacheRawPathMeasurements: f.HC,
                    convertToPath: function(e, t) {
                        return T(e).map((function(e) {
                            return (0, f.YR)(e, !1 !== t)
                        }))
                    },
                    convertCoordinates: function(e, t, n) {
                        var r = _(t, !0, !0).multiply(_(e));
                        return n ? r.apply(n) : r
                    },
                    getAlignMatrix: R,
                    getRelativePosition: function(e, t, n, r) {
                        var i = R(e, t, n, r);
                        return {
                            x: i.e,
                            y: i.f
                        }
                    },
                    arrayToRawPath: function(e, t) {
                        var n = I(I([], e, (t = t || {}).x || "x", 0), e, t.y || "y", 1);
                        return t.relative && G(n), ["cubic" === t.type ? n : (0, f.qY)(n, t.curviness)]
                    }
                };
            (P || "undefined" != typeof window && (P = window.gsap) && P.registerPlugin && P) && P.registerPlugin(Y)
        },
        11930: (e, t, n) => {
            "use strict";
            n.d(t, {
                y: () => f
            });
            var r, i, o, u = Math.PI / 180,
                a = function() {
                    return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
                },
                s = function(e) {
                    return Math.round(1e4 * e) / 1e4
                },
                c = function(e) {
                    r = e || a(), i || (o = r.utils.getUnit, i = 1)
                },
                l = function(e, t, n, r, i) {
                    var u = e._gsap,
                        a = u.get(e, t);
                    this.p = t, this.set = u.set(e, t), this.s = this.val = parseFloat(a), this.u = o(a) || 0, this.vel = n || 0, this.v = this.vel / i, r || 0 === r ? (this.acc = r, this.a = this.acc / (i * i)) : this.acc = this.a = 0
                },
                f = {
                    version: "3.7.0",
                    name: "physics2D",
                    register: c,
                    init: function(e, t, n) {
                        i || c();
                        var r = this,
                            o = +t.angle || 0,
                            a = +t.velocity || 0,
                            s = +t.acceleration || 0,
                            f = t.xProp || "x",
                            p = t.yProp || "y",
                            h = t.accelerationAngle || 0 === t.accelerationAngle ? +t.accelerationAngle : o;
                        r.target = e, r.tween = n, r.step = 0, r.sps = 30, t.gravity && (s = +t.gravity, h = 90), o *= u, h *= u, r.fr = 1 - (+t.friction || 0), r._props.push(f, p), r.xp = new l(e, f, Math.cos(o) * a, Math.cos(h) * s, r.sps), r.yp = new l(e, p, Math.sin(o) * a, Math.sin(h) * s, r.sps), r.skipX = r.skipY = 0
                    },
                    render: function(e, t) {
                        var n, r, i, o, u, a, c = t.xp,
                            l = t.yp,
                            f = t.tween,
                            p = t.target,
                            h = t.step,
                            d = t.sps,
                            v = t.fr,
                            g = t.skipX,
                            y = t.skipY,
                            m = f._from ? f._dur - f._time : f._time;
                        if (1 === v) i = m * m * .5, n = c.s + c.vel * m + c.acc * i, r = l.s + l.vel * m + l.acc * i;
                        else {
                            for (o = a = (0 | (m *= d)) - h, a < 0 && (c.v = c.vel / d, l.v = l.vel / d, c.val = c.s, l.val = l.s, t.step = 0, o = a = 0 | m), u = m % 1 * v; a--;) c.v += c.a, l.v += l.a, c.v *= v, l.v *= v, c.val += c.v, l.val += l.v;
                            n = c.val + c.v * u, r = l.val + l.v * u, t.step += o
                        }
                        g || c.set(p, c.p, s(n) + c.u), y || l.set(p, l.p, s(r) + l.u)
                    },
                    kill: function(e) {
                        this.xp.p === e && (this.skipX = 1), this.yp.p === e && (this.skipY = 1)
                    }
                };
            a() && r.registerPlugin(f)
        },
        5378: () => {
            ! function(e) {
                function t(r) {
                    if (n[r]) return n[r].exports;
                    var i = n[r] = {
                        exports: {},
                        id: r,
                        loaded: !1
                    };
                    return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
                }
                var n = {};
                t.m = e, t.c = n, t.p = "", t(0)
            }([function(e, t, n) {
                "use strict";
                var r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(1));
                window.ZingTouch = r.default
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(2)),
                    o = r(n(4)),
                    u = r(n(10)),
                    a = r(n(12)),
                    s = r(n(13)),
                    c = r(n(14)),
                    l = r(n(15)),
                    f = r(n(16)),
                    p = {
                        _regions: [],
                        Gesture: o.default,
                        Expand: u.default,
                        Pan: a.default,
                        Pinch: s.default,
                        Rotate: c.default,
                        Swipe: l.default,
                        Tap: f.default,
                        Region: function(e, t, n) {
                            var r = p._regions.length,
                                o = new i.default(e, t, n, r);
                            return p._regions.push(o), o
                        }
                    };
                t.default = p
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = r(n(3)),
                    u = r(n(4)),
                    a = r(n(6)),
                    s = r(n(9)),
                    c = function() {
                        function e(t, n, r, i) {
                            var o = this;
                            (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            })(this, e), this.id = i, this.element = t, this.capture = void 0 !== n && n, this.preventDefault = void 0 === r || r, this.state = new s.default(i), (window.PointerEvent && !window.TouchEvent ? ["pointerdown", "pointermove", "pointerup"] : ["mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchend"]).map((function(e) {
                                t.addEventListener(e, (function(e) {
                                    (0, a.default)(e, o)
                                }), o.capture)
                            }))
                        }
                        return i(e, [{
                            key: "bind",
                            value: function(e, t, n, r, i) {
                                if (!e || e && !e.tagName) throw "Bind must contain an element";
                                return i = void 0 !== i && i, t ? void this.state.addBinding(e, t, n, r, i) : new o.default(e, i, this.state)
                            }
                        }, {
                            key: "bindOnce",
                            value: function(e, t, n, r) {
                                this.bind(e, t, n, r, !0)
                            }
                        }, {
                            key: "unbind",
                            value: function(e, t) {
                                var n = this,
                                    r = this.state.retrieveBindingsByElement(e),
                                    i = [];
                                return r.forEach((function(r) {
                                    t ? "string" == typeof t && n.state.registeredGestures[t] && n.state.registeredGestures[t].id === r.gesture.id && (e.removeEventListener(r.gesture.getId(), r.handler, r.capture), i.push(r)) : (e.removeEventListener(r.gesture.getId(), r.handler, r.capture), i.push(r))
                                })), i
                            }
                        }, {
                            key: "register",
                            value: function(e, t) {
                                if ("string" != typeof e) throw new Error("Parameter key is an invalid string");
                                if (!t instanceof u.default) throw new Error("Parameter gesture is an invalid Gesture object");
                                t.setType(e), this.state.registerGesture(t, e)
                            }
                        }, {
                            key: "unregister",
                            value: function(e) {
                                this.state.bindings.forEach((function(t) {
                                    t.gesture.getType() === e && t.element.removeEventListener(t.gesture.getId(), t.handler, t.capture)
                                }));
                                var t = this.state.registeredGestures[e];
                                return delete this.state.registeredGestures[e], t
                            }
                        }]), e
                    }();
                t.default = c
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e(t, n, r) {
                    var i = this;
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.element = t, Object.keys(r.registeredGestures).forEach((function(e) {
                        i[e] = function(t, o) {
                            return r.addBinding(i.element, e, t, o, n), i
                        }
                    }))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    i = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(n(5)),
                    o = function() {
                        function e() {
                            (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            })(this, e), this.type = null, this.id = null
                        }
                        return r(e, [{
                            key: "setType",
                            value: function(e) {
                                this.type = e
                            }
                        }, {
                            key: "getType",
                            value: function() {
                                return this.type
                            }
                        }, {
                            key: "setId",
                            value: function(e) {
                                this.id = e
                            }
                        }, {
                            key: "getId",
                            value: function() {
                                return null !== this.id ? this.id : this.type
                            }
                        }, {
                            key: "update",
                            value: function(e) {
                                for (var t in e) this[t] && (this[t] = e[t])
                            }
                        }, {
                            key: "start",
                            value: function(e, t, n) {
                                return null
                            }
                        }, {
                            key: "move",
                            value: function(e, t, n) {
                                return null
                            }
                        }, {
                            key: "end",
                            value: function(e) {
                                return null
                            }
                        }, {
                            key: "isValid",
                            value: function(e, t, n) {
                                var r = !0;
                                return e.length > 1 && e.forEach((function(e) {
                                    i.default.isInside(e.initial.x, e.initial.y, n) || (r = !1)
                                })), r
                            }
                        }]), e
                    }();
                t.default = o
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = 360,
                    r = {
                        normalizeEvent: function(e) {
                            switch (e) {
                                case "mousedown":
                                case "touchstart":
                                case "pointerdown":
                                    return "start";
                                case "mousemove":
                                case "touchmove":
                                case "pointermove":
                                    return "move";
                                case "mouseup":
                                case "touchend":
                                case "pointerup":
                                    return "end";
                                default:
                                    return null
                            }
                        },
                        isWithin: function(e, t, n, r, i) {
                            return Math.abs(t - r) <= i && Math.abs(e - n) <= i
                        },
                        distanceBetweenTwoPoints: function(e, t, n, r) {
                            var i = Math.sqrt((t - e) * (t - e) + (r - n) * (r - n));
                            return Math.round(100 * i) / 100
                        },
                        getMidpoint: function(e, t, n, r) {
                            return {
                                x: (e + t) / 2,
                                y: (n + r) / 2
                            }
                        },
                        getAngle: function(e, t, r, i) {
                            var o = Math.atan2(i - t, r - e) * (180 / Math.PI);
                            return n - (o < 0 ? n + o : o)
                        },
                        getAngularDistance: function(e, t) {
                            var r = (t - e) % n,
                                i = r < 0 ? 1 : -1;
                            return (r = Math.abs(r)) > 180 ? i * (n - r) : i * r
                        },
                        getVelocity: function(e, t, n, r, i, o) {
                            return this.distanceBetweenTwoPoints(e, r, t, i) / (o - n)
                        },
                        getRightMostInput: function(e) {
                            var t = null,
                                n = Number.MIN_VALUE;
                            return e.forEach((function(e) {
                                e.initial.x > n && (t = e)
                            })), t
                        },
                        isInteger: function(e) {
                            return "number" == typeof e && e % 1 == 0
                        },
                        isInside: function(e, t, n) {
                            var r = n.getBoundingClientRect();
                            return e > r.left && e < r.left + r.width && t > r.top && t < r.top + r.height
                        },
                        getPropagationPath: function(e) {
                            if (e.path) return e.path;
                            for (var t = [], n = e.target; n != document;) t.push(n), n = n.parentNode;
                            return t
                        },
                        getPathIndex: function(e, t) {
                            var n = e.length;
                            return e.forEach((function(e, r) {
                                e === t && (n = r)
                            })), n
                        },
                        setMSPreventDefault: function(e) {
                            e.style["-ms-content-zooming"] = "none", e.style["touch-action"] = "none"
                        },
                        removeMSPreventDefault: function(e) {
                            e.style["-ms-content-zooming"] = "", e.style["touch-action"] = ""
                        }
                    };
                t.default = r
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(7)),
                    o = r(n(8)),
                    u = r(n(5));
                t.default = function(e, t) {
                    var n = t.state;
                    if (0 !== n.inputs.length || "start" === u.default.normalizeEvent(e.type)) {
                        if (void 0 !== e.buttons && "end" !== u.default.normalizeEvent(e.type) && 0 === e.buttons) return void n.resetInputs();
                        if (n.updateInputs(e, t.element)) {
                            var r = n.retrieveBindingsByInitialPos();
                            r.length > 0 && function() {
                                t.preventDefault ? (u.default.setMSPreventDefault(t.element), e.preventDefault ? e.preventDefault() : e.returnValue = !1) : u.default.removeMSPreventDefault(t.element);
                                var a = {};
                                (0, o.default)(r, e, n).forEach((function(t) {
                                    var n = t.binding.gesture.id;
                                    if (a[n]) {
                                        var r = u.default.getPropagationPath(e);
                                        u.default.getPathIndex(r, t.binding.element) < u.default.getPathIndex(r, a[n].binding.element) && (a[n] = t)
                                    } else a[n] = t
                                })), Object.keys(a).forEach((function(e) {
                                    var t = a[e];
                                    (0, i.default)(t.binding, t.data, t.events)
                                }))
                            }();
                            var a = 0;
                            n.inputs.forEach((function(e) {
                                "end" === e.getCurrentEventType() && a++
                            })), a === n.inputs.length && n.resetInputs()
                        }
                    }
                }
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, n) {
                    t.events = n;
                    var r = new CustomEvent(e.gesture.getId(), {
                        detail: t,
                        bubbles: !0,
                        cancelable: !0
                    });
                    ! function(e, t, n) {
                        e.dispatchEvent(t), n.bindOnce && ZingTouch.unbind(n.element, n.gesture.getType())
                    }(e.element, r, e)
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(5));
                t.default = function(e, t, n) {
                    var i = r.default.normalizeEvent(t.type),
                        o = [];
                    return e.forEach((function(e) {
                        var t = e.gesture[i](n.inputs, n, e.element);
                        t && function() {
                            var r = [];
                            n.inputs.forEach((function(e) {
                                r.push(e.current)
                            })), o.push({
                                binding: e,
                                data: t,
                                events: r
                            })
                        }()
                    })), o
                }
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    u = r(n(4)),
                    a = r(n(10)),
                    s = r(n(12)),
                    c = r(n(13)),
                    l = r(n(14)),
                    f = r(n(15)),
                    p = r(n(16)),
                    h = r(n(17)),
                    d = r(n(18)),
                    v = r(n(5)),
                    g = function() {
                        function e(t) {
                            (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            })(this, e), this.regionId = t, this.inputs = [], this.bindings = [], this.numGestures = 0, this.registeredGestures = {}, this.registerGesture(new a.default, "expand"), this.registerGesture(new s.default, "pan"), this.registerGesture(new l.default, "rotate"), this.registerGesture(new c.default, "pinch"), this.registerGesture(new f.default, "swipe"), this.registerGesture(new p.default, "tap")
                        }
                        return o(e, [{
                            key: "addBinding",
                            value: function(e, t, n, r, o) {
                                var a = void 0;
                                if (e && void 0 === e.tagName) throw new Error("Parameter element is an invalid object.");
                                if ("function" != typeof n) throw new Error("Parameter handler is invalid.");
                                if ("string" == typeof t && -1 === Object.keys(this.registeredGestures).indexOf(t)) throw new Error("Parameter " + t + " is not a registered gesture");
                                if ("object" === (void 0 === t ? "undefined" : i(t)) && !(t instanceof u.default)) throw new Error("Parameter for the gesture is not of a Gesture type");
                                "string" == typeof t ? a = this.registeredGestures[t] : "" === (a = t).id && this.assignGestureId(a), this.bindings.push(new h.default(e, a, n, r, o)), e.addEventListener(a.getId(), n, r)
                            }
                        }, {
                            key: "retrieveBindingsByElement",
                            value: function(e) {
                                var t = [];
                                return this.bindings.map((function(n) {
                                    n.element === e && t.push(n)
                                })), t
                            }
                        }, {
                            key: "retrieveBindingsByInitialPos",
                            value: function() {
                                var e = this,
                                    t = [];
                                return this.bindings.forEach((function(n) {
                                    e.inputs.filter((function(e) {
                                        return v.default.isInside(e.initial.x, e.initial.y, n.element)
                                    })).length > 0 && t.push(n)
                                })), t
                            }
                        }, {
                            key: "updateInputs",
                            value: function(e, t) {
                                function n(e, t, n, r) {
                                    var i = v.default.normalizeEvent(e.type),
                                        o = function(e, t) {
                                            for (var n = 0; n < e.length; n++)
                                                if (e[n].identifier === t) return e[n];
                                            return null
                                        }(t.inputs, n);
                                    return "start" === i && o || "start" !== i && o && !v.default.isInside(o.current.x, o.current.y, r) ? void t.resetInputs() : "start" === i || o ? void("start" === i ? t.inputs.push(new d.default(e, n)) : o.update(e, n)) : void t.resetInputs()
                                }
                                switch (e.touches ? "TouchEvent" : e.pointerType ? "PointerEvent" : "MouseEvent") {
                                    case "TouchEvent":
                                        for (var r in e.changedTouches) e.changedTouches.hasOwnProperty(r) && v.default.isInteger(parseInt(r)) && n(e, this, e.changedTouches[r].identifier, t);
                                        break;
                                    case "PointerEvent":
                                        n(e, this, e.pointerId, t);
                                        break;
                                    case "MouseEvent":
                                    default:
                                        n(e, this, 0, t)
                                }
                                return !0
                            }
                        }, {
                            key: "resetInputs",
                            value: function() {
                                this.inputs = []
                            }
                        }, {
                            key: "numActiveInputs",
                            value: function() {
                                return this.inputs.filter((function(e) {
                                    return "end" !== e.current.type
                                })).length
                            }
                        }, {
                            key: "registerGesture",
                            value: function(e, t) {
                                this.assignGestureId(e), this.registeredGestures[t] = e
                            }
                        }, {
                            key: "assignGestureId",
                            value: function(e) {
                                e.setId(this.regionId + "-" + this.numGestures++)
                            }
                        }]), e
                    }();
                t.default = g
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function(e) {
                    function t(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.type = "expand", n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t
                }(function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(11)).default);
                t.default = r
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = r(n(4)),
                    u = r(n(5)),
                    a = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return n.type = "distance", n.threshold = e && e.threshold ? e.threshold : 1, n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), i(t, [{
                            key: "start",
                            value: function(e, t, n) {
                                if (!this.isValid(e, t, n)) return null;
                                2 === e.length && (e[0].getGestureProgress(this.type).lastEmittedDistance = u.default.distanceBetweenTwoPoints(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y))
                            }
                        }, {
                            key: "move",
                            value: function(e, t, n) {
                                if (2 === t.numActiveInputs()) {
                                    var r = u.default.distanceBetweenTwoPoints(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y),
                                        i = u.default.distanceBetweenTwoPoints(e[0].previous.x, e[1].previous.x, e[0].previous.y, e[1].previous.y),
                                        o = u.default.getMidpoint(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y),
                                        a = e[0].getGestureProgress(this.type);
                                    if ("Expand" === this.constructor.name) {
                                        if (r < i) a.lastEmittedDistance = r;
                                        else if (r - a.lastEmittedDistance >= this.threshold) return a.lastEmittedDistance = r, {
                                            distance: r,
                                            center: o
                                        }
                                    } else if (r > i) a.lastEmittedDistance = r;
                                    else if (r < i && a.lastEmittedDistance - r >= this.threshold) return a.lastEmittedDistance = r, {
                                        distance: r,
                                        center: o
                                    };
                                    return null
                                }
                            }
                        }]), t
                    }(o.default);
                t.default = a
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = r(n(4)),
                    u = r(n(5)),
                    a = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return n.type = "pan", n.numInputs = e && e.numInputs ? e.numInputs : 1, n.threshold = e && e.threshold ? e.threshold : 1, n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), i(t, [{
                            key: "start",
                            value: function(e) {
                                var t = this;
                                e.forEach((function(e) {
                                    var n = e.getGestureProgress(t.getId());
                                    n.active = !0, n.lastEmitted = {
                                        x: e.current.x,
                                        y: e.current.y
                                    }
                                }))
                            }
                        }, {
                            key: "move",
                            value: function(e, t, n) {
                                if (this.numInputs === e.length)
                                    for (var r = {
                                            data: []
                                        }, i = 0; i < e.length; i++) {
                                        var o, a = e[i].getGestureProgress(this.getId()),
                                            s = Math.abs(e[i].current.y - a.lastEmitted.y) > this.threshold,
                                            c = Math.abs(e[i].current.x - a.lastEmitted.x) > this.threshold;
                                        if (o = s || c, !a.active || !o) return null;
                                        r.data[i] = {
                                            distanceFromOrigin: u.default.distanceBetweenTwoPoints(e[i].initial.x, e[i].current.x, e[i].initial.y, e[i].current.y),
                                            directionFromOrigin: u.default.getAngle(e[i].initial.x, e[i].initial.y, e[i].current.x, e[i].current.y),
                                            currentDirection: u.default.getAngle(a.lastEmitted.x, a.lastEmitted.y, e[i].current.x, e[i].current.y)
                                        }, a.lastEmitted.x = e[i].current.x, a.lastEmitted.y = e[i].current.y
                                    }
                                return r
                            }
                        }, {
                            key: "end",
                            value: function(e) {
                                var t = this;
                                return e.forEach((function(e) {
                                    e.getGestureProgress(t.getId()).active = !1
                                })), null
                            }
                        }]), t
                    }(o.default);
                t.default = a
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(11)),
                    o = (r(n(5)), function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.type = "pinch", n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), t
                    }(i.default));
                t.default = o
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = r(n(4)),
                    u = r(n(5)),
                    a = function(e) {
                        function t() {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var e = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return e.type = "rotate", e
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), i(t, [{
                            key: "move",
                            value: function(e, t, n) {
                                if (t.numActiveInputs() <= 2) {
                                    var r = void 0,
                                        i = void 0,
                                        o = void 0,
                                        a = void 0;
                                    if (1 === t.numActiveInputs()) {
                                        var s = n.getBoundingClientRect();
                                        r = {
                                            x: s.left + s.width / 2,
                                            y: s.top + s.height / 2
                                        }, a = e[0], i = o = 0
                                    } else {
                                        r = u.default.getMidpoint(e[0].initial.x, e[1].initial.x, e[0].initial.y, e[1].initial.y);
                                        var c = u.default.getMidpoint(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y);
                                        i = r.x - c.x, o = r.y - c.y, a = u.default.getRightMostInput(e)
                                    }
                                    var l = u.default.getAngle(r.x, r.y, a.current.x + i, a.current.y + o),
                                        f = a.getGestureProgress(this.getId());
                                    return f.initialAngle ? (f.change = u.default.getAngularDistance(f.previousAngle, l), f.distance = f.distance + f.change) : (f.initialAngle = f.previousAngle = l, f.distance = f.change = 0), f.previousAngle = l, {
                                        angle: l,
                                        distanceFromOrigin: f.distance,
                                        distanceFromLast: f.change
                                    }
                                }
                                return null
                            }
                        }]), t
                    }(o.default);
                t.default = a
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = r(n(4)),
                    u = r(n(5)),
                    a = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return n.type = "swipe", n.numInputs = e && e.numInputs ? e.numInputs : 1, n.maxRestTime = e && e.maxRestTime ? e.maxRestTime : 100, n.escapeVelocity = e && e.escapeVelocity ? e.escapeVelocity : .2, n.timeDistortion = e && e.timeDistortion ? e.timeDistortion : 100, n.maxProgressStack = e && e.maxProgressStack ? e.maxProgressStack : 10, n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), i(t, [{
                            key: "move",
                            value: function(e, t, n) {
                                if (this.numInputs === e.length)
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r].getGestureProgress(this.getId());
                                        i.moves || (i.moves = []), i.moves.push({
                                            time: (new Date).getTime(),
                                            x: e[r].current.x,
                                            y: e[r].current.y
                                        }), i.length > this.maxProgressStack && i.moves.shift()
                                    }
                                return null
                            }
                        }, {
                            key: "end",
                            value: function(e) {
                                if (this.numInputs === e.length) {
                                    for (var t = {
                                            data: []
                                        }, n = 0; n < e.length; n++) {
                                        if ("end" !== e[n].current.type) return;
                                        var r = e[n].getGestureProgress(this.getId());
                                        if (r.moves && r.moves.length > 2) {
                                            var i = r.moves.pop();
                                            if ((new Date).getTime() - i.time > this.maxRestTime) return null;
                                            for (var o = void 0, a = r.moves.length - 1; - 1 !== a;) {
                                                if (r.moves[a].time !== i.time) {
                                                    o = r.moves[a];
                                                    break
                                                }
                                                a--
                                            }
                                            o || ((o = r.moves.pop()).time += this.timeDistortion);
                                            var s = u.default.getVelocity(o.x, o.y, o.time, i.x, i.y, i.time);
                                            t.data[n] = {
                                                velocity: s,
                                                distance: u.default.distanceBetweenTwoPoints(o.x, i.x, o.y, i.y),
                                                duration: i.time - o.time,
                                                currentDirection: u.default.getAngle(o.x, o.y, i.x, i.y)
                                            }
                                        }
                                    }
                                    for (n = 0; n < t.data.length; n++)
                                        if (s < this.escapeVelocity) return null;
                                    if (t.data.length > 0) return t
                                }
                                return null
                            }
                        }]), t
                    }(o.default);
                t.default = a
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    u = r(n(4)),
                    a = r(n(5)),
                    s = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return n.type = "tap", n.minDelay = e && e.minDelay ? e.minDelay : 0, n.maxDelay = e && e.maxDelay ? e.maxDelay : 300, n.numInputs = e && e.numInputs ? e.numInputs : 1, n.tolerance = e && e.tolerance ? e.tolerance : 10, n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), o(t, [{
                            key: "start",
                            value: function(e) {
                                var t = this;
                                return e.length === this.numInputs && e.forEach((function(e) {
                                    e.getGestureProgress(t.type).start = (new Date).getTime()
                                })), null
                            }
                        }, {
                            key: "move",
                            value: function(e, t, n) {
                                for (var r = this, o = 0; o < e.length; o++)
                                    if ("move" === e[o].getCurrentEventType()) {
                                        var u = e[o].current,
                                            s = e[o].previous;
                                        if (!a.default.isWithin(u.x, u.y, s.x, s.y, this.tolerance)) {
                                            var c = function() {
                                                var t = r.type;
                                                return e.forEach((function(e) {
                                                    e.resetProgress(t)
                                                })), {
                                                    v: null
                                                }
                                            }();
                                            if ("object" === (void 0 === c ? "undefined" : i(c))) return c.v
                                        }
                                    } return null
                            }
                        }, {
                            key: "end",
                            value: function(e) {
                                var t = this;
                                if (e.length !== this.numInputs) return null;
                                for (var n = Number.MAX_VALUE, r = 0; r < e.length; r++) {
                                    if ("end" !== e[r].getCurrentEventType()) return null;
                                    var o = e[r].getGestureProgress(this.type);
                                    if (!o.start) return null;
                                    o.start < n && (n = o.start)
                                }
                                var u = (new Date).getTime() - n;
                                if (this.minDelay <= u && this.maxDelay >= u) return {
                                    interval: u
                                };
                                var a = function() {
                                    var n = t.type;
                                    return e.forEach((function(e) {
                                        e.resetProgress(n)
                                    })), {
                                        v: null
                                    }
                                }();
                                return "object" === (void 0 === a ? "undefined" : i(a)) ? a.v : void 0
                            }
                        }]), t
                    }(u.default);
                t.default = s
            }, function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e(t, n, r, i, o) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.element = t, this.gesture = n, this.handler = r, this.capture = void 0 !== i && i, this.bindOnce = void 0 !== o && o
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    i = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(n(19)),
                    o = function() {
                        function e(t, n) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e);
                            var r = new i.default(t, n);
                            this.initial = r, this.current = r, this.previous = r, this.identifier = void 0 !== n ? n : 0, this.progress = {}
                        }
                        return r(e, [{
                            key: "update",
                            value: function(e, t) {
                                this.previous = this.current, this.current = new i.default(e, t)
                            }
                        }, {
                            key: "getGestureProgress",
                            value: function(e) {
                                return this.progress[e] || (this.progress[e] = {}), this.progress[e]
                            }
                        }, {
                            key: "getCurrentEventType",
                            value: function() {
                                return this.current.type
                            }
                        }, {
                            key: "resetProgress",
                            value: function(e) {
                                this.progress[e] = {}
                            }
                        }]), e
                    }();
                t.default = o
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(5));
                t.default = function e(t, n) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), this.originalEvent = t, this.type = r.default.normalizeEvent(t.type), this.x = 0, this.y = 0;
                    var i = void 0;
                    if (t.touches && t.changedTouches) {
                        for (var o = 0; o < t.changedTouches.length; o++)
                            if (t.changedTouches[o].identifier === n) {
                                i = t.changedTouches[o];
                                break
                            }
                    } else i = t;
                    this.x = this.clientX = i.clientX, this.y = this.clientY = i.clientY, this.pageX = i.pageX, this.pageY = i.pageY, this.screenX = i.screenX, this.screenY = i.screenY
                }
            }])
        },
        1596: (e, t, n) => {
            n(5378), e.exports = ZingTouch
        }
    }
]);
//# sourceMappingURL=sourcemaps/38.6ab163f8816a2d0d257d.js.map