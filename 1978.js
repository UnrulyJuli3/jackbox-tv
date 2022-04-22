/*! For license information please see 1978.eea835c18a16bd2a0798.js.LICENSE.txt */
(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [1978], {
        7310: (t, e, r) => {
            "use strict";
            r.d(e, {
                t: () => c
            });
            var n, i, s = r(61504),
                a = function() {
                    return n || "undefined" != typeof window && (n = window.gsap) && n.registerPlugin && n
                },
                o = function() {
                    (n = a()) ? (n.registerEase("_CE", c.create), i = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
                },
                u = function(t) {
                    return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
                },
                h = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
                l = /[cLlsSaAhHvVtTqQ]/g,
                f = function t(e, r, n, i, s, a, o, u, h, l, f) {
                    var c, p = (e + n) / 2,
                        d = (r + i) / 2,
                        _ = (n + s) / 2,
                        g = (i + a) / 2,
                        m = (s + o) / 2,
                        v = (a + u) / 2,
                        y = (p + _) / 2,
                        x = (d + g) / 2,
                        b = (_ + m) / 2,
                        w = (g + v) / 2,
                        T = (y + b) / 2,
                        M = (x + w) / 2,
                        P = o - e,
                        A = u - r,
                        O = Math.abs((n - o) * A - (i - u) * P),
                        k = Math.abs((s - o) * A - (a - u) * P);
                    return l || (l = [{
                        x: e,
                        y: r
                    }, {
                        x: o,
                        y: u
                    }], f = 1), l.splice(f || l.length - 1, 0, {
                        x: T,
                        y: M
                    }), (O + k) * (O + k) > h * (P * P + A * A) && (c = l.length, t(e, r, p, d, y, x, T, M, h, l, f), t(T, M, b, w, m, v, o, u, h, l, f + 1 + (l.length - c))), l
                },
                c = function() {
                    function t(t, e, r) {
                        i || o(), this.id = t, this.setData(e, r)
                    }
                    var e = t.prototype;
                    return e.setData = function(t, e) {
                        e = e || {};
                        var r, i, a, o, u, c, p, d, _, g = (t = t || "0,0,1,1").match(h),
                            m = 1,
                            v = [],
                            y = [],
                            x = e.precision || 1,
                            b = x <= 1;
                        if (this.data = t, (l.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (g = (0, s.IZ)(t)[0]), 4 === (r = g.length)) g.unshift(0, 0), g.push(1, 1), r = 8;
                        else if ((r - 2) % 6) throw "Invalid CustomEase";
                        for (0 == +g[0] && 1 == +g[r - 2] || function(t, e, r) {
                                r || 0 === r || (r = Math.max(+t[t.length - 1], +t[1]));
                                var n, i = -1 * +t[0],
                                    s = -r,
                                    a = t.length,
                                    o = 1 / (+t[a - 2] + i),
                                    u = -e || (Math.abs(+t[a - 1] - +t[1]) < .01 * (+t[a - 2] - +t[0]) ? function(t) {
                                        var e, r = t.length,
                                            n = 1e20;
                                        for (e = 1; e < r; e += 6) + t[e] < n && (n = +t[e]);
                                        return n
                                    }(t) + s : +t[a - 1] + s);
                                for (u = u ? 1 / u : -o, n = 0; n < a; n += 2) t[n] = (+t[n] + i) * o, t[n + 1] = (+t[n + 1] + s) * u
                            }(g, e.height, e.originY), this.segment = g, o = 2; o < r; o += 6) i = {
                            x: +g[o - 2],
                            y: +g[o - 1]
                        }, a = {
                            x: +g[o + 4],
                            y: +g[o + 5]
                        }, v.push(i, a), f(i.x, i.y, +g[o], +g[o + 1], +g[o + 2], +g[o + 3], a.x, a.y, 1 / (2e5 * x), v, v.length - 1);
                        for (r = v.length, o = 0; o < r; o++) p = v[o], d = v[o - 1] || p, (p.x > d.x || d.y !== p.y && d.x === p.x || p === d) && p.x <= 1 ? (d.cx = p.x - d.x, d.cy = p.y - d.y, d.n = p, d.nx = p.x, b && o > 1 && Math.abs(d.cy / d.cx - v[o - 2].cy / v[o - 2].cx) > 2 && (b = 0), d.cx < m && (d.cx ? m = d.cx : (d.cx = .001, o === r - 1 && (d.x -= .001, m = Math.min(m, .001), b = 0)))) : (v.splice(o--, 1), r--);
                        if (u = 1 / (r = 1 / m + 1 | 0), c = 0, p = v[0], b) {
                            for (o = 0; o < r; o++) _ = o * u, p.nx < _ && (p = v[++c]), i = p.y + (_ - p.x) / p.cx * p.cy, y[o] = {
                                x: _,
                                cx: u,
                                y: i,
                                cy: 0,
                                nx: 9
                            }, o && (y[o - 1].cy = i - y[o - 1].y);
                            y[r - 1].cy = v[v.length - 1].y - i
                        } else {
                            for (o = 0; o < r; o++) p.nx < o * u && (p = v[++c]), y[o] = p;
                            c < v.length - 1 && (y[o - 1] = v[v.length - 2])
                        }
                        return this.ease = function(t) {
                            var e = y[t * r | 0] || y[r - 1];
                            return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
                        }, this.ease.custom = this, this.id && n.registerEase(this.id, this.ease), this
                    }, e.getSVGData = function(e) {
                        return t.getSVGData(this, e)
                    }, t.create = function(e, r, n) {
                        return new t(e, r, n).ease
                    }, t.register = function(t) {
                        n = t, o()
                    }, t.get = function(t) {
                        return n.parseEase(t)
                    }, t.getSVGData = function(e, r) {
                        var i, a, o, h, l, f, c, p, d, _, g = (r = r || {}).width || 100,
                            m = r.height || 100,
                            v = r.x || 0,
                            y = (r.y || 0) + m,
                            x = n.utils.toArray(r.path)[0];
                        if (r.invert && (m = -m, y = 0), "string" == typeof e && (e = n.parseEase(e)), e.custom && (e = e.custom), e instanceof t) i = (0, s.g5)((0, s.$v)([e.segment], g, 0, 0, -m, v, y));
                        else {
                            for (i = [v, y], h = 1 / (c = Math.max(5, 200 * (r.precision || 1))), p = 5 / (c += 2), d = u(v + h * g), a = ((_ = u(y + e(h) * -m)) - y) / (d - v), o = 2; o < c; o++) l = u(v + o * h * g), f = u(y + e(o * h) * -m), (Math.abs((f - _) / (l - d) - a) > p || o === c - 1) && (i.push(d, _), a = (f - _) / (l - d)), d = l, _ = f;
                            i = "M" + i.join(",")
                        }
                        return x && x.setAttribute("d", i), i
                    }, t
                }();
            a() && n.registerPlugin(c), c.version = "3.7.0"
        },
        85608: (t, e, r) => {
            "use strict";
            r.d(e, {
                W: () => q
            });
            var n, i, s, a, o, u = r(61504),
                h = function() {
                    return n || "undefined" != typeof window && (n = window.gsap) && n.registerPlugin && n
                },
                l = function(t) {
                    return "function" == typeof t
                },
                f = Math.atan2,
                c = Math.cos,
                p = Math.sin,
                d = Math.sqrt,
                _ = Math.PI,
                g = 2 * _,
                m = .3 * _,
                v = .7 * _,
                y = 1e20,
                x = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
                b = /(^[#\.][a-z]|[a-y][a-z])/i,
                w = /[achlmqstvz]/i,
                T = function(t) {
                    return console && console.warn(t)
                },
                M = function(t) {
                    var e, r = t.length,
                        n = 0,
                        i = 0;
                    for (e = 0; e < r; e++) n += t[e++], i += t[e];
                    return [n / (r / 2), i / (r / 2)]
                },
                P = function(t) {
                    var e, r, n, i = t.length,
                        s = t[0],
                        a = s,
                        o = t[1],
                        u = o;
                    for (n = 6; n < i; n += 6)(e = t[n]) > s ? s = e : e < a && (a = e), (r = t[n + 1]) > o ? o = r : r < u && (u = r);
                    return t.centerX = (s + a) / 2, t.centerY = (o + u) / 2, t.size = (s - a) * (o - u)
                },
                A = function(t, e) {
                    void 0 === e && (e = 3);
                    for (var r, n, i, s, a, o, u, h, l, f, c, p, d, _, g, m, v = t.length, y = t[0][0], x = y, b = t[0][1], w = b, T = 1 / e; --v > -1;)
                        for (r = (a = t[v]).length, s = 6; s < r; s += 6)
                            for (l = a[s], f = a[s + 1], c = a[s + 2] - l, _ = a[s + 3] - f, p = a[s + 4] - l, g = a[s + 5] - f, d = a[s + 6] - l, m = a[s + 7] - f, o = e; --o > -1;)(n = ((u = T * o) * u * d + 3 * (h = 1 - u) * (u * p + h * c)) * u + l) > y ? y = n : n < x && (x = n), (i = (u * u * m + 3 * h * (u * g + h * _)) * u + f) > b ? b = i : i < w && (w = i);
                    return t.centerX = (y + x) / 2, t.centerY = (b + w) / 2, t.left = x, t.width = y - x, t.top = w, t.height = b - w, t.size = (y - x) * (b - w)
                },
                O = function(t, e) {
                    return e.length - t.length
                },
                k = function(t, e) {
                    var r = t.size || P(t),
                        n = e.size || P(e);
                    return Math.abs(n - r) < (r + n) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : n - r
                },
                S = function(t, e) {
                    var r, n, i = t.slice(0),
                        s = t.length,
                        a = s - 2;
                    for (e |= 0, r = 0; r < s; r++) n = (r + e) % a, t[r++] = i[n], t[r] = i[n + 1]
                },
                C = function(t, e, r, n, i) {
                    var s, a, o, u, h = t.length,
                        l = 0,
                        f = h - 2;
                    for (r *= 6, a = 0; a < h; a += 6) u = t[s = (a + r) % f] - (e[a] - n), o = t[s + 1] - (e[a + 1] - i), l += d(o * o + u * u);
                    return l
                },
                D = function(t, e, r) {
                    var n, i, s, a = t.length,
                        o = M(t),
                        h = M(e),
                        l = h[0] - o[0],
                        f = h[1] - o[1],
                        c = C(t, e, 0, l, f),
                        p = 0;
                    for (s = 6; s < a; s += 6)(i = C(t, e, s / 6, l, f)) < c && (c = i, p = s);
                    if (r)
                        for (n = t.slice(0), (0, u.ll)(n), s = 6; s < a; s += 6)(i = C(n, e, s / 6, l, f)) < c && (c = i, p = -s);
                    return p / 6
                },
                z = function(t, e, r) {
                    for (var n, i, s, a, o, u, h = t.length, l = y, f = 0, c = 0; --h > -1;)
                        for (u = (n = t[h]).length, o = 0; o < u; o += 6) i = n[o] - e, s = n[o + 1] - r, (a = d(i * i + s * s)) < l && (l = a, f = n[o], c = n[o + 1]);
                    return [f, c]
                },
                F = function(t, e, r, n, i, s) {
                    var a, o, u, h, l = e.length,
                        f = 0,
                        c = Math.min(t.size || P(t), e[r].size || P(e[r])) * n,
                        p = y,
                        _ = t.centerX + i,
                        g = t.centerY + s;
                    for (a = r; a < l && !((e[a].size || P(e[a])) < c); a++) o = e[a].centerX - _, u = e[a].centerY - g, (h = d(o * o + u * u)) < p && (f = a, p = h);
                    return h = e[f], e.splice(f, 1), h
                },
                R = function(t, e) {
                    var r, n, i, s, a, o, u, h, l, f, c, p, d, _, g = 0,
                        m = t.length,
                        v = e / ((m - 2) / 6);
                    for (d = 2; d < m; d += 6)
                        for (g += v; g > .999999;) r = t[d - 2], n = t[d - 1], i = t[d], s = t[d + 1], a = t[d + 2], o = t[d + 3], u = t[d + 4], h = t[d + 5], l = r + (i - r) * (_ = 1 / ((Math.floor(g) || 1) + 1)), l += ((c = i + (a - i) * _) - l) * _, c += (a + (u - a) * _ - c) * _, f = n + (s - n) * _, f += ((p = s + (o - s) * _) - f) * _, p += (o + (h - o) * _ - p) * _, t.splice(d, 4, r + (i - r) * _, n + (s - n) * _, l, f, l + (c - l) * _, f + (p - f) * _, c, p, a + (u - a) * _, o + (h - o) * _), d += 6, m += 6, g--;
                    return t
                },
                L = function(t, e, r, n, i) {
                    var s, a, o, h, l, f, c, p = e.length - t.length,
                        d = p > 0 ? e : t,
                        _ = p > 0 ? t : e,
                        g = 0,
                        m = "complexity" === n ? O : k,
                        v = "position" === n ? 0 : "number" == typeof n ? n : .8,
                        y = _.length,
                        x = "object" == typeof r && r.push ? r.slice(0) : [r],
                        b = "reverse" === x[0] || x[0] < 0,
                        w = "log" === r;
                    if (_[0]) {
                        if (d.length > 1 && (t.sort(m), e.sort(m), d.size || A(d), _.size || A(_), f = d.centerX - _.centerX, c = d.centerY - _.centerY, m === k))
                            for (y = 0; y < _.length; y++) d.splice(y, 0, F(_[y], d, y, v, f, c));
                        if (p)
                            for (p < 0 && (p = -p), d[0].length > _[0].length && R(_[0], (d[0].length - _[0].length) / 6 | 0), y = _.length; g < p;) d[y].size || P(d[y]), h = (o = z(_, d[y].centerX, d[y].centerY))[0], l = o[1], _[y++] = [h, l, h, l, h, l, h, l], _.totalPoints += 8, g++;
                        for (y = 0; y < t.length; y++) s = e[y], a = t[y], (p = s.length - a.length) < 0 ? R(s, -p / 6 | 0) : p > 0 && R(a, p / 6 | 0), b && !1 !== i && !a.reversed && (0, u.ll)(a), (r = x[y] || 0 === x[y] ? x[y] : "auto") && (a.closed || Math.abs(a[0] - a[a.length - 2]) < .5 && Math.abs(a[1] - a[a.length - 1]) < .5 ? "auto" === r || "log" === r ? (x[y] = r = D(a, s, !y || !1 === i), r < 0 && (b = !0, (0, u.ll)(a), r = -r), S(a, 6 * r)) : "reverse" !== r && (y && r < 0 && (0, u.ll)(a), S(a, 6 * (r < 0 ? -r : r))) : !b && ("auto" === r && Math.abs(s[0] - a[0]) + Math.abs(s[1] - a[1]) + Math.abs(s[s.length - 2] - a[a.length - 2]) + Math.abs(s[s.length - 1] - a[a.length - 1]) > Math.abs(s[0] - a[a.length - 2]) + Math.abs(s[1] - a[a.length - 1]) + Math.abs(s[s.length - 2] - a[0]) + Math.abs(s[s.length - 1] - a[1]) || r % 2) ? ((0, u.ll)(a), x[y] = -1, b = !0) : "auto" === r ? x[y] = 0 : "reverse" === r && (x[y] = -1), a.closed !== s.closed && (a.closed = s.closed = !1));
                        return w && T("shapeIndex:[" + x.join(",") + "]"), t.shapeIndex = x, x
                    }
                },
                I = function(t, e, r, n, i) {
                    var s = (0, u.IZ)(t[0]),
                        a = (0, u.IZ)(t[1]);
                    L(s, a, e || 0 === e ? e : "auto", r, i) && (t[0] = (0, u.g5)(s), t[1] = (0, u.g5)(a), "log" !== n && !0 !== n || T('precompile:["' + t[0] + '","' + t[1] + '"]'))
                },
                E = function(t, e) {
                    var r, n, i, s, a, o, u, h = 0,
                        l = parseFloat(t[0]),
                        f = parseFloat(t[1]),
                        c = l + "," + f + " ",
                        p = .999999;
                    for (r = .5 * e / (.5 * (i = t.length) - 1), n = 0; n < i - 2; n += 2) {
                        if (h += r, o = parseFloat(t[n + 2]), u = parseFloat(t[n + 3]), h > p)
                            for (a = 1 / (Math.floor(h) + 1), s = 1; h > p;) c += (l + (o - l) * a * s).toFixed(2) + "," + (f + (u - f) * a * s).toFixed(2) + " ", h--, s++;
                        c += o + "," + u + " ", l = o, f = u
                    }
                    return c
                },
                N = function(t) {
                    var e = t[0].match(x) || [],
                        r = t[1].match(x) || [],
                        n = r.length - e.length;
                    n > 0 ? t[0] = E(e, n) : t[1] = E(r, -n)
                },
                B = function(t, e) {
                    for (var r, n, i, s, a, o, u, h, l, c, p, _, g = t.length, m = .2 * (e || 1); --g > -1;) {
                        for (p = (n = t[g]).isSmooth = n.isSmooth || [0, 0, 0, 0], _ = n.smoothData = n.smoothData || [0, 0, 0, 0], p.length = 4, h = n.length - 2, u = 6; u < h; u += 6) i = n[u] - n[u - 2], s = n[u + 1] - n[u - 1], a = n[u + 2] - n[u], o = n[u + 3] - n[u + 1], l = f(s, i), c = f(o, a), (r = Math.abs(l - c) < m) && (_[u - 2] = l, _[u + 2] = c, _[u - 1] = d(i * i + s * s), _[u + 3] = d(a * a + o * o)), p.push(r, r, 0, 0, r, r);
                        n[h] === n[0] && n[h + 1] === n[1] && (i = n[0] - n[h - 2], s = n[1] - n[h - 1], a = n[2] - n[0], o = n[3] - n[1], l = f(s, i), c = f(o, a), Math.abs(l - c) < m && (_[h - 2] = l, _[2] = c, _[h - 1] = d(i * i + s * s), _[3] = d(a * a + o * o), p[h - 2] = p[h - 1] = !0))
                    }
                    return t
                },
                Y = function(t) {
                    var e = t.trim().split(" ");
                    return {
                        x: (~t.indexOf("left") ? 0 : ~t.indexOf("right") ? 100 : isNaN(parseFloat(e[0])) ? 50 : parseFloat(e[0])) / 100,
                        y: (~t.indexOf("top") ? 0 : ~t.indexOf("bottom") ? 100 : isNaN(parseFloat(e[1])) ? 50 : parseFloat(e[1])) / 100
                    }
                },
                V = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
                U = function(t, e, r, n) {
                    var i, a, o, u = this._origin,
                        h = this._eOrigin,
                        l = t[r] - u.x,
                        c = t[r + 1] - u.y,
                        p = d(l * l + c * c),
                        y = f(c, l);
                    return l = e[r] - h.x, c = e[r + 1] - h.y, a = (o = i = f(c, l) - y) !== o % _ ? o + (o < 0 ? g : -g) : o, !n && s && Math.abs(a + s.ca) < m && (n = s), this._anchorPT = s = {
                        _next: this._anchorPT,
                        t,
                        sa: y,
                        ca: n && a * n.ca < 0 && Math.abs(a) > v ? i : a,
                        sl: p,
                        cl: d(l * l + c * c) - p,
                        i: r
                    }
                },
                X = function(t) {
                    n = h(), o = o || n && n.plugins.morphSVG, n && o ? (i = n.utils.toArray, document, o.prototype._tweenRotation = U, a = 1) : t && T("Please gsap.registerPlugin(MorphSVGPlugin)")
                },
                q = {
                    version: "3.7.0",
                    name: "morphSVG",
                    rawVars: 1,
                    register: function(t, e) {
                        n = t, o = e, X()
                    },
                    init: function(t, e, r, n, o) {
                        if (a || X(1), !e) return T("invalid shape"), !1;
                        var h, f, c, p, d, _, g, m, v, y, M, P, O, k, S, C, D, z, F, R, I, E;
                        if (l(e) && (e = e.call(r, n, t, o)), "string" == typeof e || e.getBBox || e[0]) e = {
                            shape: e
                        };
                        else if ("object" == typeof e) {
                            for (f in h = {}, e) h[f] = l(e[f]) && "render" !== f ? e[f].call(r, n, t, o) : e[f];
                            e = h
                        }
                        var U = t.nodeType ? window.getComputedStyle(t) : {},
                            j = U.fill + "",
                            G = !("none" === j || "0" === (j.match(x) || [])[3] || "evenodd" === U.fillRule),
                            W = (e.origin || "50 50").split(",");
                        if (d = "POLYLINE" === (h = (t.nodeName + "").toUpperCase()) || "POLYGON" === h, "PATH" !== h && !d && !e.prop) return T("Cannot morph a <" + h + "> element. " + V), !1;
                        if (f = "PATH" === h ? "d" : "points", !e.prop && !l(t.setAttribute)) return !1;
                        if (p = function(t, e, r) {
                                var n, s;
                                return (!("string" == typeof t) || b.test(t) || (t.match(x) || []).length < 3) && ((n = i(t)[0]) ? (s = (n.nodeName + "").toUpperCase(), e && "PATH" !== s && (n = (0, u.YR)(n, !1), s = "PATH"), t = n.getAttribute("PATH" === s ? "d" : "points") || "", n === r && (t = n.getAttributeNS(null, "data-original") || t)) : (T("WARNING: invalid morph to: " + t), t = !1)), t
                            }(e.shape || e.d || e.points || "", "d" === f, t), d && w.test(p)) return T("A <" + h + "> cannot accept path data. " + V), !1;
                        if (_ = e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto", g = e.map || q.defaultMap, this._prop = e.prop, this._render = e.render || q.defaultRender, this._apply = "updateTarget" in e ? e.updateTarget : q.defaultUpdateTarget, this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision), this._tween = r, p) {
                            if (this._target = t, D = "object" == typeof e.precompile, y = this._prop ? t[this._prop] : t.getAttribute(f), this._prop || t.getAttributeNS(null, "data-original") || t.setAttributeNS(null, "data-original", y), "d" === f || this._prop) {
                                if (y = (0, u.IZ)(D ? e.precompile[0] : y), M = (0, u.IZ)(D ? e.precompile[1] : p), !D && !L(y, M, _, g, G)) return !1;
                                for ("log" !== e.precompile && !0 !== e.precompile || T('precompile:["' + (0, u.g5)(y) + '","' + (0, u.g5)(M) + '"]'), (I = "linear" !== (e.type || q.defaultType)) && (y = B(y, e.smoothTolerance), M = B(M, e.smoothTolerance), y.size || A(y), M.size || A(M), R = Y(W[0]), this._origin = y.origin = {
                                        x: y.left + R.x * y.width,
                                        y: y.top + R.y * y.height
                                    }, W[1] && (R = Y(W[1])), this._eOrigin = {
                                        x: M.left + R.x * M.width,
                                        y: M.top + R.y * M.height
                                    }), this._rawPath = t._gsRawPath = y, O = y.length; --O > -1;)
                                    for (S = y[O], C = M[O], m = S.isSmooth || [], v = C.isSmooth || [], k = S.length, s = 0, P = 0; P < k; P += 2) C[P] === S[P] && C[P + 1] === S[P + 1] || (I ? m[P] && v[P] ? (z = S.smoothData, F = C.smoothData, E = P + (P === k - 4 ? 7 - k : 5), this._controlPT = {
                                        _next: this._controlPT,
                                        i: P,
                                        j: O,
                                        l1s: z[P + 1],
                                        l1c: F[P + 1] - z[P + 1],
                                        l2s: z[E],
                                        l2c: F[E] - z[E]
                                    }, c = this._tweenRotation(S, C, P + 2), this._tweenRotation(S, C, P, c), this._tweenRotation(S, C, E - 1, c), P += 4) : this._tweenRotation(S, C, P) : (c = this.add(S, P, S[P], C[P]), c = this.add(S, P + 1, S[P + 1], C[P + 1]) || c))
                            } else c = this.add(t, "setAttribute", t.getAttribute(f) + "", p + "", n, o, 0, function(t) {
                                return isNaN(t) ? N : function(e) {
                                    N(e), e[1] = function(t, e) {
                                        if (!e) return t;
                                        var r, n, i, s = t.match(x) || [],
                                            a = s.length,
                                            o = "";
                                        for ("reverse" === e ? (n = a - 1, r = -2) : (n = (2 * (parseInt(e, 10) || 0) + 1 + 100 * a) % a, r = 2), i = 0; i < a; i += 2) o += s[n - 1] + "," + s[n] + " ", n = (n + r) % a;
                                        return o
                                    }(e[1], parseInt(t, 10))
                                }
                            }(_), f);
                            I && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x), c = this.add(this._origin, "y", this._origin.y, this._eOrigin.y)), c && (this._props.push("morphSVG"), c.end = p, c.endProp = f)
                        }
                        return 1
                    },
                    render: function(t, e) {
                        for (var r, n, i, s, a, o, u, h, l, d, _, g, m = e._rawPath, v = e._controlPT, y = e._anchorPT, x = e._rnd, b = e._target, w = e._pt; w;) w.r(t, w.d), w = w._next;
                        if (1 === t && e._apply)
                            for (w = e._pt; w;) w.end && (e._prop ? b[e._prop] = w.end : b.setAttribute(w.endProp, w.end)), w = w._next;
                        else if (m) {
                            for (; y;) a = y.sa + t * y.ca, s = y.sl + t * y.cl, y.t[y.i] = e._origin.x + c(a) * s, y.t[y.i + 1] = e._origin.y + p(a) * s, y = y._next;
                            for (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1; v;) g = (o = v.i) + (o === (i = m[v.j]).length - 4 ? 7 - i.length : 5), a = f(i[g] - i[o + 1], i[g - 1] - i[o]), d = p(a), _ = c(a), h = i[o + 2], l = i[o + 3], s = v.l1s + n * v.l1c, i[o] = h - _ * s, i[o + 1] = l - d * s, s = v.l2s + n * v.l2c, i[g - 1] = h + _ * s, i[g] = l + d * s, v = v._next;
                            if (b._gsRawPath = m, e._apply) {
                                for (r = "", u = 0; u < m.length; u++)
                                    for (s = (i = m[u]).length, r += "M" + (i[0] * x | 0) / x + " " + (i[1] * x | 0) / x + " C", o = 2; o < s; o++) r += (i[o] * x | 0) / x + " ";
                                e._prop ? b[e._prop] = r : b.setAttribute("d", r)
                            }
                        }
                        e._render && m && e._render.call(e._tween, m, b)
                    },
                    kill: function(t) {
                        this._pt = this._rawPath = 0
                    },
                    getRawPath: u.T4,
                    stringToRawPath: u.IZ,
                    rawPathToString: u.g5,
                    normalizeStrings: function(t, e, r) {
                        var n = r.shapeIndex,
                            i = r.map,
                            s = [t, e];
                        return I(s, n, i), s
                    },
                    pathFilter: I,
                    pointsFilter: N,
                    getTotalSize: A,
                    equalizeSegmentQuantity: L,
                    convertToPath: function(t, e) {
                        return i(t).map((function(t) {
                            return (0, u.YR)(t, !1 !== e)
                        }))
                    },
                    defaultType: "linear",
                    defaultUpdateTarget: !0,
                    defaultMap: "size"
                };
            h() && n.registerPlugin(q)
        },
        25317: (t, e, r) => {
            "use strict";

            function n(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function i(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
            }
            r.d(e, {
                l1: () => qe,
                Fo: () => _r,
                p8: () => yr,
                Lp: () => xr,
                Yp: () => br,
                bJ: () => wr,
                Wy: () => ae,
                Ok: () => Tt,
                SI: () => tt,
                d4: () => et,
                r9: () => X,
                m2: () => G,
                Ks: () => hr,
                bQ: () => nt,
                fS: () => Mt,
                JV: () => dr,
                kr: () => Ce,
                UI: () => ge,
                if: () => Qe,
                $i: () => gt,
                xr: () => De,
                Fc: () => F,
                Pr: () => Pt,
                lC: () => ht,
                S5: () => ar,
                DY: () => wt,
                GN: () => ke
            });
            var s, a, o, u, h, l, f, c, p, d, _, g, m, v, y, x, b, w, T, M, P, A, O, k, S, C, D, z, F = {
                    autoSleep: 120,
                    force3D: "auto",
                    nullTargetWarn: 1,
                    units: {
                        lineHeight: ""
                    }
                },
                R = {
                    duration: .5,
                    overwrite: !1,
                    delay: 0
                },
                L = 1e8,
                I = 1e-8,
                E = 2 * Math.PI,
                N = E / 4,
                B = 0,
                Y = Math.sqrt,
                V = Math.cos,
                U = Math.sin,
                X = function(t) {
                    return "string" == typeof t
                },
                q = function(t) {
                    return "function" == typeof t
                },
                j = function(t) {
                    return "number" == typeof t
                },
                G = function(t) {
                    return void 0 === t
                },
                W = function(t) {
                    return "object" == typeof t
                },
                Z = function(t) {
                    return !1 !== t
                },
                H = function() {
                    return "undefined" != typeof window
                },
                Q = function(t) {
                    return q(t) || X(t)
                },
                $ = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
                J = Array.isArray,
                K = /(?:-?\.?\d|\.)+/gi,
                tt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
                et = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                rt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
                nt = /[+-]=-?[.\d]+/,
                it = /[^,'"\[\]\s]+/gi,
                st = /[\d.+\-=]+(?:e[-+]\d*)*/i,
                at = {},
                ot = {},
                ut = function(t) {
                    return (ot = Ft(t, at)) && yr
                },
                ht = function(t, e) {
                    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
                },
                lt = function(t, e) {
                    return !e && console.warn(t)
                },
                ft = function(t, e) {
                    return t && (at[t] = e) && ot && (ot[t] = e) || at
                },
                ct = function() {
                    return 0
                },
                pt = {},
                dt = [],
                _t = {},
                gt = {},
                mt = {},
                vt = 30,
                yt = [],
                xt = "",
                bt = function(t) {
                    var e, r, n = t[0];
                    if (W(n) || q(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                        for (r = yt.length; r-- && !yt[r].targetTest(n););
                        e = yt[r]
                    }
                    for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new qe(t[r], e))) || t.splice(r, 1);
                    return t
                },
                wt = function(t) {
                    return t._gsap || bt(he(t))[0]._gsap
                },
                Tt = function(t, e, r) {
                    return (r = t[e]) && q(r) ? t[e]() : G(r) && t.getAttribute && t.getAttribute(e) || r
                },
                Mt = function(t, e) {
                    return (t = t.split(",")).forEach(e) || t
                },
                Pt = function(t) {
                    return Math.round(1e5 * t) / 1e5 || 0
                },
                At = function(t, e) {
                    for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;);
                    return n < r
                },
                Ot = function() {
                    var t, e, r = dt.length,
                        n = dt.slice(0);
                    for (_t = {}, dt.length = 0, t = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
                },
                kt = function(t, e, r, n) {
                    dt.length && Ot(), t.render(e, r, n), dt.length && Ot()
                },
                St = function(t) {
                    var e = parseFloat(t);
                    return (e || 0 === e) && (t + "").match(it).length < 2 ? e : X(t) ? t.trim() : t
                },
                Ct = function(t) {
                    return t
                },
                Dt = function(t, e) {
                    for (var r in e) r in t || (t[r] = e[r]);
                    return t
                },
                zt = function(t, e) {
                    for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r])
                },
                Ft = function(t, e) {
                    for (var r in e) t[r] = e[r];
                    return t
                },
                Rt = function t(e, r) {
                    for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = W(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
                    return e
                },
                Lt = function(t, e) {
                    var r, n = {};
                    for (r in t) r in e || (n[r] = t[r]);
                    return n
                },
                It = function(t) {
                    var e = t.parent || a,
                        r = t.keyframes ? zt : Dt;
                    if (Z(t.inherit))
                        for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
                    return t
                },
                Et = function(t, e, r, n) {
                    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
                    var i = e._prev,
                        s = e._next;
                    i ? i._next = s : t[r] === e && (t[r] = s), s ? s._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
                },
                Nt = function(t, e) {
                    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
                },
                Bt = function(t, e) {
                    if (t && (!e || e._end > t._dur || e._start < 0))
                        for (var r = t; r;) r._dirty = 1, r = r.parent;
                    return t
                },
                Yt = function(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                },
                Vt = function t(e) {
                    return !e || e._ts && t(e.parent)
                },
                Ut = function(t) {
                    return t._repeat ? Xt(t._tTime, t = t.duration() + t._rDelay) * t : 0
                },
                Xt = function(t, e) {
                    var r = Math.floor(t /= e);
                    return t && r === t ? r - 1 : r
                },
                qt = function(t, e) {
                    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
                },
                jt = function(t) {
                    return t._end = Pt(t._start + (t._tDur / Math.abs(t._ts || t._rts || I) || 0))
                },
                Gt = function(t, e) {
                    var r = t._dp;
                    return r && r.smoothChildTiming && t._ts && (t._start = Pt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), jt(t), r._dirty || Bt(r, t)), t
                },
                Wt = function(t, e) {
                    var r;
                    if ((e._time || e._initted && !e._dur) && (r = qt(t.rawTime(), e), (!e._dur || se(0, e.totalDuration(), r) - e._tTime > I) && e.render(r, !0)), Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                        if (t._dur < t.duration())
                            for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                        t._zTime = -1e-8
                    }
                },
                Zt = function(t, e, r, n) {
                    return e.parent && Nt(e), e._start = Pt((j(r) ? r : r || t !== a ? re(t, r, e) : t._time) + e._delay), e._end = Pt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                        function(t, e, r, n, i) {
                            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
                            var s, a = t[n];
                            if (i)
                                for (s = e[i]; a && a[i] > s;) a = a._prev;
                            a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = a, e.parent = e._dp = t
                        }(t, e, "_first", "_last", t._sort ? "_start" : 0), Jt(e) || (t._recent = e), n || Wt(t, e), t
                },
                Ht = function(t, e) {
                    return (at.ScrollTrigger || ht("scrollTrigger", e)) && at.ScrollTrigger.create(e, t)
                },
                Qt = function(t, e, r, n) {
                    return $e(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== De.frame ? (dt.push(t), t._lazy = [e, n], 1) : void 0 : 1
                },
                $t = function t(e) {
                    var r = e.parent;
                    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
                },
                Jt = function(t) {
                    var e = t.data;
                    return "isFromStart" === e || "isStart" === e
                },
                Kt = function(t, e, r, n) {
                    var i = t._repeat,
                        s = Pt(e) || 0,
                        a = t._tTime / t._tDur;
                    return a && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = i ? i < 0 ? 1e10 : Pt(s * (i + 1) + t._rDelay * i) : s, a && !n ? Gt(t, t._tTime = t._tDur * a) : t.parent && jt(t), r || Bt(t.parent, t), t
                },
                te = function(t) {
                    return t instanceof Ge ? Bt(t) : Kt(t, t._dur)
                },
                ee = {
                    _start: 0,
                    endTime: ct,
                    totalDuration: ct
                },
                re = function t(e, r, n) {
                    var i, s, a, o = e.labels,
                        u = e._recent || ee,
                        h = e.duration() >= L ? u.endTime(!1) : e._dur;
                    return X(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), i = r.indexOf("="), "<" === s || ">" === s ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in o || (o[r] = h), o[r]) : (s = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), a && n && (s = s / 100 * (J(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + s : h + s)) : null == r ? h : +r
                },
                ne = function(t, e, r) {
                    var n, i, s = j(e[1]),
                        a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                        o = e[a];
                    if (s && (o.duration = e[1]), o.parent = r, t) {
                        for (n = o, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = Z(i.vars.inherit) && i.parent;
                        o.immediateRender = Z(n.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
                    }
                    return new er(e[0], o, e[a + 1])
                },
                ie = function(t, e) {
                    return t || 0 === t ? e(t) : e
                },
                se = function(t, e, r) {
                    return r < t ? t : r > e ? e : r
                },
                ae = function(t) {
                    if ("string" != typeof t) return "";
                    var e = st.exec(t);
                    return e ? t.substr(e.index + e[0].length) : ""
                },
                oe = [].slice,
                ue = function(t, e) {
                    return t && W(t) && "length" in t && (!e && !t.length || t.length - 1 in t && W(t[0])) && !t.nodeType && t !== o
                },
                he = function(t, e, r) {
                    return !X(t) || r || !u && ze() ? J(t) ? function(t, e, r) {
                        return void 0 === r && (r = []), t.forEach((function(t) {
                            var n;
                            return X(t) && !e || ue(t, 1) ? (n = r).push.apply(n, he(t)) : r.push(t)
                        })) || r
                    }(t, r) : ue(t) ? oe.call(t, 0) : t ? [t] : [] : oe.call((e || h).querySelectorAll(t), 0)
                },
                le = function(t) {
                    return t.sort((function() {
                        return .5 - Math.random()
                    }))
                },
                fe = function(t) {
                    if (q(t)) return t;
                    var e = W(t) ? t : {
                            each: t
                        },
                        r = Be(e.ease),
                        n = e.from || 0,
                        i = parseFloat(e.base) || 0,
                        s = {},
                        a = n > 0 && n < 1,
                        o = isNaN(n) || a,
                        u = e.axis,
                        h = n,
                        l = n;
                    return X(n) ? h = l = {
                            center: .5,
                            edges: .5,
                            end: 1
                        } [n] || 0 : !a && o && (h = n[0], l = n[1]),
                        function(t, a, f) {
                            var c, p, d, _, g, m, v, y, x, b = (f || e).length,
                                w = s[b];
                            if (!w) {
                                if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, L])[1])) {
                                    for (v = -L; v < (v = f[x++].getBoundingClientRect().left) && x < b;);
                                    x--
                                }
                                for (w = s[b] = [], c = o ? Math.min(x, b) * h - .5 : n % x, p = o ? b * l / x - .5 : n / x | 0, v = 0, y = L, m = 0; m < b; m++) d = m % x - c, _ = p - (m / x | 0), w[m] = g = u ? Math.abs("y" === u ? _ : d) : Y(d * d + _ * _), g > v && (v = g), g < y && (y = g);
                                "random" === n && le(w), w.max = v - y, w.min = y, w.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (x > b ? b - 1 : u ? "y" === u ? b / x : x : Math.max(x, b / x)) || 0) * ("edges" === n ? -1 : 1), w.b = b < 0 ? i - b : i, w.u = ae(e.amount || e.each) || 0, r = r && b < 0 ? Ee(r) : r
                            }
                            return b = (w[t] - w.min) / w.max || 0, Pt(w.b + (r ? r(b) : b) * w.v) + w.u
                        }
                },
                ce = function(t) {
                    var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                    return function(r) {
                        var n = Math.round(parseFloat(r) / t) * t * e;
                        return (n - n % 1) / e + (j(r) ? 0 : ae(r))
                    }
                },
                pe = function(t, e) {
                    var r, n, i = J(t);
                    return !i && W(t) && (r = i = t.radius || L, t.values ? (t = he(t.values), (n = !j(t[0])) && (r *= r)) : t = ce(t.increment)), ie(e, i ? q(t) ? function(e) {
                        return n = t(e), Math.abs(n - e) <= r ? n : e
                    } : function(e) {
                        for (var i, s, a = parseFloat(n ? e.x : e), o = parseFloat(n ? e.y : 0), u = L, h = 0, l = t.length; l--;)(i = n ? (i = t[l].x - a) * i + (s = t[l].y - o) * s : Math.abs(t[l] - a)) < u && (u = i, h = l);
                        return h = !r || u <= r ? t[h] : e, n || h === e || j(e) ? h : h + ae(e)
                    } : ce(t))
                },
                de = function(t, e, r, n) {
                    return ie(J(t) ? !e : !0 === r ? !!(r = 0) : !n, (function() {
                        return J(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
                    }))
                },
                _e = function(t, e, r) {
                    return ie(r, (function(r) {
                        return t[~~e(r)]
                    }))
                },
                ge = function(t) {
                    for (var e, r, n, i, s = 0, a = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), i = "[" === t.charAt(e + 7), r = t.substr(e + 7, n - e - 7).match(i ? it : K), a += t.substr(s, e - s) + de(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5), s = n + 1;
                    return a + t.substr(s, t.length - s)
                },
                me = function(t, e, r, n, i) {
                    var s = e - t,
                        a = n - r;
                    return ie(i, (function(e) {
                        return r + ((e - t) / s * a || 0)
                    }))
                },
                ve = function(t, e, r) {
                    var n, i, s, a = t.labels,
                        o = L;
                    for (n in a)(i = a[n] - e) < 0 == !!r && i && o > (i = Math.abs(i)) && (s = n, o = i);
                    return s
                },
                ye = function(t, e, r) {
                    var n, i, s = t.vars,
                        a = s[e];
                    if (a) return n = s[e + "Params"], i = s.callbackScope || t, r && dt.length && Ot(), n ? a.apply(i, n) : a.call(i)
                },
                xe = function(t) {
                    return Nt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && ye(t, "onInterrupt"), t
                },
                be = function(t) {
                    var e = (t = !t.name && t.default || t).name,
                        r = q(t),
                        n = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        i = {
                            init: ct,
                            render: lr,
                            add: He,
                            kill: cr,
                            modifier: fr,
                            rawVars: 0
                        },
                        s = {
                            targetTest: 0,
                            get: 0,
                            getSetter: ar,
                            aliases: {},
                            register: 0
                        };
                    if (ze(), t !== n) {
                        if (gt[e]) return;
                        Dt(n, Dt(Lt(t, i), s)), Ft(n.prototype, Ft(i, Lt(t, s))), gt[n.prop = e] = n, t.targetTest && (yt.push(n), pt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    ft(e, n), t.register && t.register(yr, n, _r)
                },
                we = 255,
                Te = {
                    aqua: [0, we, we],
                    lime: [0, we, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, we],
                    navy: [0, 0, 128],
                    white: [we, we, we],
                    olive: [128, 128, 0],
                    yellow: [we, we, 0],
                    orange: [we, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [we, 0, 0],
                    pink: [we, 192, 203],
                    cyan: [0, we, we],
                    transparent: [we, we, we, 0]
                },
                Me = function(t, e, r) {
                    return (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * we + .5 | 0
                },
                Pe = function(t, e, r) {
                    var n, i, s, a, o, u, h, l, f, c, p = t ? j(t) ? [t >> 16, t >> 8 & we, t & we] : 0 : Te.black;
                    if (!p) {
                        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Te[t]) p = Te[t];
                        else if ("#" === t.charAt(0)) {
                            if (t.length < 6 && (n = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + n + n + i + i + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & we, p & we, parseInt(t.substr(7), 16) / 255];
                            p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & we, t & we]
                        } else if ("hsl" === t.substr(0, 3))
                            if (p = c = t.match(K), e) {
                                if (~t.indexOf("=")) return p = t.match(tt), r && p.length < 4 && (p[3] = 1), p
                            } else a = +p[0] % 360 / 360, o = +p[1] / 100, n = 2 * (u = +p[2] / 100) - (i = u <= .5 ? u * (o + 1) : u + o - u * o), p.length > 3 && (p[3] *= 1), p[0] = Me(a + 1 / 3, n, i), p[1] = Me(a, n, i), p[2] = Me(a - 1 / 3, n, i);
                        else p = t.match(K) || Te.transparent;
                        p = p.map(Number)
                    }
                    return e && !c && (n = p[0] / we, i = p[1] / we, s = p[2] / we, u = ((h = Math.max(n, i, s)) + (l = Math.min(n, i, s))) / 2, h === l ? a = o = 0 : (f = h - l, o = u > .5 ? f / (2 - h - l) : f / (h + l), a = h === n ? (i - s) / f + (i < s ? 6 : 0) : h === i ? (s - n) / f + 2 : (n - i) / f + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
                },
                Ae = function(t) {
                    var e = [],
                        r = [],
                        n = -1;
                    return t.split(ke).forEach((function(t) {
                        var i = t.match(et) || [];
                        e.push.apply(e, i), r.push(n += i.length + 1)
                    })), e.c = r, e
                },
                Oe = function(t, e, r) {
                    var n, i, s, a, o = "",
                        u = (t + o).match(ke),
                        h = e ? "hsla(" : "rgba(",
                        l = 0;
                    if (!u) return t;
                    if (u = u.map((function(t) {
                            return (t = Pe(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                        })), r && (s = Ae(t), (n = r.c).join(o) !== s.c.join(o)))
                        for (a = (i = t.replace(ke, "1").split(et)).length - 1; l < a; l++) o += i[l] + (~n.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
                    if (!i)
                        for (a = (i = t.split(ke)).length - 1; l < a; l++) o += i[l] + u[l];
                    return o + i[a]
                },
                ke = function() {
                    var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                    for (t in Te) e += "|" + t + "\\b";
                    return new RegExp(e + ")", "gi")
                }(),
                Se = /hsl[a]?\(/,
                Ce = function(t) {
                    var e, r = t.join(" ");
                    if (ke.lastIndex = 0, ke.test(r)) return e = Se.test(r), t[1] = Oe(t[1], e), t[0] = Oe(t[0], e, Ae(t[1])), !0
                },
                De = (x = Date.now, b = 500, w = 33, T = x(), M = T, A = P = 1e3 / 240, k = function t(e) {
                    var r, n, i, s, a = x() - M,
                        o = !0 === e;
                    if (a > b && (T += a - w), ((r = (i = (M += a) - T) - A) > 0 || o) && (s = ++m.frame, v = i - 1e3 * m.time, m.time = i /= 1e3, A += r + (r >= P ? 4 : P - r), n = 1), o || (d = _(t)), n)
                        for (y = 0; y < O.length; y++) O[y](i, v, s, e)
                }, m = {
                    time: 0,
                    frame: 0,
                    tick: function() {
                        k(!0)
                    },
                    deltaRatio: function(t) {
                        return v / (1e3 / (t || 60))
                    },
                    wake: function() {
                        l && (!u && H() && (o = u = window, h = o.document || {}, at.gsap = yr, (o.gsapVersions || (o.gsapVersions = [])).push(yr.version), ut(ot || o.GreenSockGlobals || !o.gsap && o || {}), g = o.requestAnimationFrame), d && m.sleep(), _ = g || function(t) {
                            return setTimeout(t, A - 1e3 * m.time + 1 | 0)
                        }, p = 1, k(2))
                    },
                    sleep: function() {
                        (g ? o.cancelAnimationFrame : clearTimeout)(d), p = 0, _ = ct
                    },
                    lagSmoothing: function(t, e) {
                        b = t || 1e8, w = Math.min(e, b, 0)
                    },
                    fps: function(t) {
                        P = 1e3 / (t || 240), A = 1e3 * m.time + P
                    },
                    add: function(t) {
                        O.indexOf(t) < 0 && O.push(t), ze()
                    },
                    remove: function(t) {
                        var e;
                        ~(e = O.indexOf(t)) && O.splice(e, 1) && y >= e && y--
                    },
                    _listeners: O = []
                }),
                ze = function() {
                    return !p && De.wake()
                },
                Fe = {},
                Re = /^[\d.\-M][\d.\-,\s]/,
                Le = /["']/g,
                Ie = function(t) {
                    for (var e, r, n, i = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[a] = isNaN(n) ? n.replace(Le, "").trim() : +n, a = r.substr(e + 1).trim();
                    return i
                },
                Ee = function(t) {
                    return function(e) {
                        return 1 - t(1 - e)
                    }
                },
                Ne = function t(e, r) {
                    for (var n, i = e._first; i;) i instanceof Ge ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
                },
                Be = function(t, e) {
                    return t && (q(t) ? t : Fe[t] || function(t) {
                        var e, r, n, i, s = (t + "").split("("),
                            a = Fe[s[0]];
                        return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Ie(s[1])] : (e = t, r = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", r), e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)).split(",").map(St)) : Fe._CE && Re.test(t) ? Fe._CE("", t) : a
                    }(t)) || e
                },
                Ye = function(t, e, r, n) {
                    void 0 === r && (r = function(t) {
                        return 1 - e(1 - t)
                    }), void 0 === n && (n = function(t) {
                        return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
                    });
                    var i, s = {
                        easeIn: e,
                        easeOut: r,
                        easeInOut: n
                    };
                    return Mt(t, (function(t) {
                        for (var e in Fe[t] = at[t] = s, Fe[i = t.toLowerCase()] = r, s) Fe[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Fe[t + "." + e] = s[e]
                    })), s
                },
                Ve = function(t) {
                    return function(e) {
                        return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
                    }
                },
                Ue = function t(e, r, n) {
                    var i = r >= 1 ? r : 1,
                        s = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
                        a = s / E * (Math.asin(1 / i) || 0),
                        o = function(t) {
                            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * U((t - a) * s) + 1
                        },
                        u = "out" === e ? o : "in" === e ? function(t) {
                            return 1 - o(1 - t)
                        } : Ve(o);
                    return s = E / s, u.config = function(r, n) {
                        return t(e, r, n)
                    }, u
                },
                Xe = function t(e, r) {
                    void 0 === r && (r = 1.70158);
                    var n = function(t) {
                            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
                        },
                        i = "out" === e ? n : "in" === e ? function(t) {
                            return 1 - n(1 - t)
                        } : Ve(n);
                    return i.config = function(r) {
                        return t(e, r)
                    }, i
                };
            Mt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
                var r = e < 5 ? e + 1 : e;
                Ye(t + ",Power" + (r - 1), e ? function(t) {
                    return Math.pow(t, r)
                } : function(t) {
                    return t
                }, (function(t) {
                    return 1 - Math.pow(1 - t, r)
                }), (function(t) {
                    return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
                }))
            })), Fe.Linear.easeNone = Fe.none = Fe.Linear.easeIn, Ye("Elastic", Ue("in"), Ue("out"), Ue()), S = 7.5625, D = 1 / (C = 2.75), Ye("Bounce", (function(t) {
                return 1 - z(1 - t)
            }), z = function(t) {
                return t < D ? S * t * t : t < .7272727272727273 ? S * Math.pow(t - 1.5 / C, 2) + .75 : t < .9090909090909092 ? S * (t -= 2.25 / C) * t + .9375 : S * Math.pow(t - 2.625 / C, 2) + .984375
            }), Ye("Expo", (function(t) {
                return t ? Math.pow(2, 10 * (t - 1)) : 0
            })), Ye("Circ", (function(t) {
                return -(Y(1 - t * t) - 1)
            })), Ye("Sine", (function(t) {
                return 1 === t ? 1 : 1 - V(t * N)
            })), Ye("Back", Xe("in"), Xe("out"), Xe()), Fe.SteppedEase = Fe.steps = at.SteppedEase = {
                config: function(t, e) {
                    void 0 === t && (t = 1);
                    var r = 1 / t,
                        n = t + (e ? 0 : 1),
                        i = e ? 1 : 0;
                    return function(t) {
                        return ((n * se(0, .99999999, t) | 0) + i) * r
                    }
                }
            }, R.ease = Fe["quad.out"], Mt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
                return xt += t + "," + t + "Params,"
            }));
            var qe = function(t, e) {
                    this.id = B++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Tt, this.set = e ? e.getSetter : ar
                },
                je = function() {
                    function t(t) {
                        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Kt(this, +t.duration, 1, 1), this.data = t.data, p || De.wake()
                    }
                    var e = t.prototype;
                    return e.delay = function(t) {
                        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                    }, e.duration = function(t) {
                        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                    }, e.totalDuration = function(t) {
                        return arguments.length ? (this._dirty = 0, Kt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                    }, e.totalTime = function(t, e) {
                        if (ze(), !arguments.length) return this._tTime;
                        var r = this._dp;
                        if (r && r.smoothChildTiming && this._ts) {
                            for (Gt(this, t), !r._dp || r.parent || Wt(r, this); r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Zt(this._dp, this, this._start - this._delay)
                        }
                        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === I || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), kt(this, t, e)), this
                    }, e.time = function(t, e) {
                        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ut(this)) % this._dur || (t ? this._dur : 0), e) : this._time
                    }, e.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                    }, e.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ut(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                    }, e.iteration = function(t, e) {
                        var r = this.duration() + this._rDelay;
                        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Xt(this._tTime, r) + 1 : 1
                    }, e.timeScale = function(t) {
                        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                        if (this._rts === t) return this;
                        var e = this.parent && this._ts ? qt(this.parent._time, this) : this._tTime;
                        return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, Yt(this.totalTime(se(-this._delay, this._tDur, e), !0))
                    }, e.paused = function(t) {
                        return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ze(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= I) && Math.abs(this._zTime) !== I))), this) : this._ps
                    }, e.startTime = function(t) {
                        if (arguments.length) {
                            this._start = t;
                            var e = this.parent || this._dp;
                            return e && (e._sort || !this.parent) && Zt(e, this, t - this._delay), this
                        }
                        return this._start
                    }, e.endTime = function(t) {
                        return this._start + (Z(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
                    }, e.rawTime = function(t) {
                        var e = this.parent || this._dp;
                        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? qt(e.rawTime(t), this) : this._tTime : this._tTime
                    }, e.globalTime = function(t) {
                        for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
                        return r
                    }, e.repeat = function(t) {
                        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, te(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                    }, e.repeatDelay = function(t) {
                        return arguments.length ? (this._rDelay = t, te(this)) : this._rDelay
                    }, e.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, e.seek = function(t, e) {
                        return this.totalTime(re(this, t), Z(e))
                    }, e.restart = function(t, e) {
                        return this.play().totalTime(t ? -this._delay : 0, Z(e))
                    }, e.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, e.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, e.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, e.resume = function() {
                        return this.paused(!1)
                    }, e.reversed = function(t) {
                        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
                    }, e.invalidate = function() {
                        return this._initted = this._act = 0, this._zTime = -1e-8, this
                    }, e.isActive = function() {
                        var t, e = this.parent || this._dp,
                            r = this._start;
                        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - I))
                    }, e.eventCallback = function(t, e, r) {
                        var n = this.vars;
                        return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
                    }, e.then = function(t) {
                        var e = this;
                        return new Promise((function(r) {
                            var n = q(t) ? t : Ct,
                                i = function() {
                                    var t = e.then;
                                    e.then = null, q(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), e.then = t
                                };
                            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
                        }))
                    }, e.kill = function() {
                        xe(this)
                    }, t
                }();
            Dt(je.prototype, {
                _time: 0,
                _start: 0,
                _end: 0,
                _tTime: 0,
                _tDur: 0,
                _dirty: 0,
                _repeat: 0,
                _yoyo: !1,
                parent: null,
                _initted: !1,
                _rDelay: 0,
                _ts: 1,
                _dp: 0,
                ratio: 0,
                _zTime: -1e-8,
                _prom: 0,
                _ps: !1,
                _rts: 1
            });
            var Ge = function(t) {
                function e(e, r) {
                    var i;
                    return void 0 === e && (e = {}), (i = t.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = Z(e.sortChildren), a && Zt(e.parent || a, n(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Ht(n(i), e.scrollTrigger), i
                }
                i(e, t);
                var r = e.prototype;
                return r.to = function(t, e, r) {
                    return ne(0, arguments, this), this
                }, r.from = function(t, e, r) {
                    return ne(1, arguments, this), this
                }, r.fromTo = function(t, e, r, n) {
                    return ne(2, arguments, this), this
                }, r.set = function(t, e, r) {
                    return e.duration = 0, e.parent = this, It(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new er(t, e, re(this, r), 1), this
                }, r.call = function(t, e, r) {
                    return Zt(this, er.delayedCall(0, t, e), r)
                }, r.staggerTo = function(t, e, r, n, i, s, a) {
                    return r.duration = e, r.stagger = r.stagger || n, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new er(t, r, re(this, i)), this
                }, r.staggerFrom = function(t, e, r, n, i, s, a) {
                    return r.runBackwards = 1, It(r).immediateRender = Z(r.immediateRender), this.staggerTo(t, e, r, n, i, s, a)
                }, r.staggerFromTo = function(t, e, r, n, i, s, a, o) {
                    return n.startAt = r, It(n).immediateRender = Z(n.immediateRender), this.staggerTo(t, e, n, i, s, a, o)
                }, r.render = function(t, e, r) {
                    var n, i, s, o, u, h, l, f, c, p, d, _, g = this._time,
                        m = this._dirty ? this.totalDuration() : this._tDur,
                        v = this._dur,
                        y = this !== a && t > m - I && t >= 0 ? m : t < I ? 0 : t,
                        x = this._zTime < 0 != t < 0 && (this._initted || !v);
                    if (y !== this._tTime || r || x) {
                        if (g !== this._time && v && (y += this._time - g, t += this._time - g), n = y, c = this._start, h = !(f = this._ts), x && (v || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                            if (d = this._yoyo, u = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * u + t, e, r);
                            if (n = Pt(y % u), y === m ? (o = this._repeat, n = v) : ((o = ~~(y / u)) && o === y / u && (n = v, o--), n > v && (n = v)), p = Xt(this._tTime, u), !g && this._tTime && p !== o && (p = o), d && 1 & o && (n = v - n, _ = 1), o !== p && !this._lock) {
                                var b = d && 1 & p,
                                    w = b === (d && 1 & o);
                                if (o < p && (b = !b), g = b ? 0 : v, this._lock = 1, this.render(g || (_ ? 0 : Pt(o * u)), e, !v)._lock = 0, this._tTime = y, !e && this.parent && ye(this, "onRepeat"), this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1), g && g !== this._time || h !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                                if (v = this._dur, m = this._tDur, w && (this._lock = 2, g = b ? v : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !_ && this.invalidate()), this._lock = 0, !this._ts && !h) return this;
                                Ne(this, _)
                            }
                        }
                        if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(t, e, r) {
                                var n;
                                if (r > e)
                                    for (n = t._first; n && n._start <= r;) {
                                        if (!n._dur && "isPause" === n.data && n._start > e) return n;
                                        n = n._next
                                    } else
                                        for (n = t._last; n && n._start >= r;) {
                                            if (!n._dur && "isPause" === n.data && n._start < e) return n;
                                            n = n._prev
                                        }
                            }(this, Pt(g), Pt(n))) && (y -= n - (n = l._start)), this._tTime = y, this._time = n, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && n && !e && (ye(this, "onStart"), this._tTime !== y)) return this;
                        if (n >= g && t >= 0)
                            for (i = this._first; i;) {
                                if (s = i._next, (i._act || n >= i._start) && i._ts && l !== i) {
                                    if (i.parent !== this) return this.render(t, e, r);
                                    if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !h) {
                                        l = 0, s && (y += this._zTime = -1e-8);
                                        break
                                    }
                                }
                                i = s
                            } else {
                                i = this._last;
                                for (var T = t < 0 ? t : n; i;) {
                                    if (s = i._prev, (i._act || T <= i._end) && i._ts && l !== i) {
                                        if (i.parent !== this) return this.render(t, e, r);
                                        if (i.render(i._ts > 0 ? (T - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (T - i._start) * i._ts, e, r), n !== this._time || !this._ts && !h) {
                                            l = 0, s && (y += this._zTime = T ? -1e-8 : I);
                                            break
                                        }
                                    }
                                    i = s
                                }
                            }
                        if (l && !e && (this.pause(), l.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = c, jt(this), this.render(t, e, r);
                        this._onUpdate && !e && ye(this, "onUpdate", !0), (y === m && m >= this.totalDuration() || !y && g) && (c !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !v) && (y === m && this._ts > 0 || !y && this._ts < 0) && Nt(this, 1), e || t < 0 && !g || !y && !g && m || (ye(this, y === m && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < m && this.timeScale() > 0) && this._prom())))
                    }
                    return this
                }, r.add = function(t, e) {
                    var r = this;
                    if (j(e) || (e = re(this, e, t)), !(t instanceof je)) {
                        if (J(t)) return t.forEach((function(t) {
                            return r.add(t, e)
                        })), this;
                        if (X(t)) return this.addLabel(t, e);
                        if (!q(t)) return this;
                        t = er.delayedCall(0, t)
                    }
                    return this !== t ? Zt(this, t, e) : this
                }, r.getChildren = function(t, e, r, n) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -L);
                    for (var i = [], s = this._first; s;) s._start >= n && (s instanceof er ? e && i.push(s) : (r && i.push(s), t && i.push.apply(i, s.getChildren(!0, e, r)))), s = s._next;
                    return i
                }, r.getById = function(t) {
                    for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                        if (e[r].vars.id === t) return e[r]
                }, r.remove = function(t) {
                    return X(t) ? this.removeLabel(t) : q(t) ? this.killTweensOf(t) : (Et(this, t), t === this._recent && (this._recent = this._last), Bt(this))
                }, r.totalTime = function(e, r) {
                    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Pt(De.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
                }, r.addLabel = function(t, e) {
                    return this.labels[t] = re(this, e), this
                }, r.removeLabel = function(t) {
                    return delete this.labels[t], this
                }, r.addPause = function(t, e, r) {
                    var n = er.delayedCall(0, e || ct, r);
                    return n.data = "isPause", this._hasPause = 1, Zt(this, n, re(this, t))
                }, r.removePause = function(t) {
                    var e = this._first;
                    for (t = re(this, t); e;) e._start === t && "isPause" === e.data && Nt(e), e = e._next
                }, r.killTweensOf = function(t, e, r) {
                    for (var n = this.getTweensOf(t, r), i = n.length; i--;) We !== n[i] && n[i].kill(t, e);
                    return this
                }, r.getTweensOf = function(t, e) {
                    for (var r, n = [], i = he(t), s = this._first, a = j(e); s;) s instanceof er ? At(s._targets, i) && (a ? (!We || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r), s = s._next;
                    return n
                }, r.tweenTo = function(t, e) {
                    e = e || {};
                    var r, n = this,
                        i = re(n, t),
                        s = e,
                        a = s.startAt,
                        o = s.onStart,
                        u = s.onStartParams,
                        h = s.immediateRender,
                        l = er.to(n, Dt({
                            ease: e.ease || "none",
                            lazy: !1,
                            immediateRender: !1,
                            time: i,
                            overwrite: "auto",
                            duration: e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || I,
                            onStart: function() {
                                if (n.pause(), !r) {
                                    var t = e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale());
                                    l._dur !== t && Kt(l, t, 0, 1).render(l._time, !0, !0), r = 1
                                }
                                o && o.apply(l, u || [])
                            }
                        }, e));
                    return h ? l.render(0) : l
                }, r.tweenFromTo = function(t, e, r) {
                    return this.tweenTo(e, Dt({
                        startAt: {
                            time: re(this, t)
                        }
                    }, r))
                }, r.recent = function() {
                    return this._recent
                }, r.nextLabel = function(t) {
                    return void 0 === t && (t = this._time), ve(this, re(this, t))
                }, r.previousLabel = function(t) {
                    return void 0 === t && (t = this._time), ve(this, re(this, t), 1)
                }, r.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + I)
                }, r.shiftChildren = function(t, e, r) {
                    void 0 === r && (r = 0);
                    for (var n, i = this._first, s = this.labels; i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
                    if (e)
                        for (n in s) s[n] >= r && (s[n] += t);
                    return Bt(this)
                }, r.invalidate = function() {
                    var e = this._first;
                    for (this._lock = 0; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, r.clear = function(t) {
                    void 0 === t && (t = !0);
                    for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
                    return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Bt(this)
                }, r.totalDuration = function(t) {
                    var e, r, n, i = 0,
                        s = this,
                        o = s._last,
                        u = L;
                    if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
                    if (s._dirty) {
                        for (n = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (r = o._start) > u && s._sort && o._ts && !s._lock ? (s._lock = 1, Zt(s, o, r - o._delay, 1)._lock = 0) : u = r, r < 0 && o._ts && (i -= r, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += r / s._ts, s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -Infinity), u = 0), o._end > i && o._ts && (i = o._end), o = e;
                        Kt(s, s === a && s._time > i ? s._time : i, 1, 1), s._dirty = 0
                    }
                    return s._tDur
                }, e.updateRoot = function(t) {
                    if (a._ts && (kt(a, qt(t, a)), f = De.frame), De.frame >= vt) {
                        vt += F.autoSleep || 120;
                        var e = a._first;
                        if ((!e || !e._ts) && F.autoSleep && De._listeners.length < 2) {
                            for (; e && !e._ts;) e = e._next;
                            e || De.sleep()
                        }
                    }
                }, e
            }(je);
            Dt(Ge.prototype, {
                _lock: 0,
                _hasPause: 0,
                _forcing: 0
            });
            var We, Ze = function(t, e, r, n, i, s, a) {
                    var o, u, h, l, f, c, p, d, _ = new _r(this._pt, t, e, 0, 1, hr, null, i),
                        g = 0,
                        m = 0;
                    for (_.b = r, _.e = n, r += "", (p = ~(n += "").indexOf("random(")) && (n = ge(n)), s && (s(d = [r, n], t, e), r = d[0], n = d[1]), u = r.match(rt) || []; o = rt.exec(n);) l = o[0], f = n.substring(g, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[m++] && (c = parseFloat(u[m - 1]) || 0, _._pt = {
                        _next: _._pt,
                        p: f || 1 === m ? f : ",",
                        s: c,
                        c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - c,
                        m: h && h < 4 ? Math.round : 0
                    }, g = rt.lastIndex);
                    return _.c = g < n.length ? n.substring(g, n.length) : "", _.fp = a, (nt.test(n) || p) && (_.e = 0), this._pt = _, _
                },
                He = function(t, e, r, n, i, s, a, o, u) {
                    q(n) && (n = n(i || 0, t, s));
                    var h, l = t[e],
                        f = "get" !== r ? r : q(l) ? u ? t[e.indexOf("set") || !q(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l,
                        c = q(l) ? u ? ir : nr : rr;
                    if (X(n) && (~n.indexOf("random(") && (n = ge(n)), "=" === n.charAt(1) && ((h = parseFloat(f) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (ae(f) || 0)) || 0 === h) && (n = h)), f !== n) return isNaN(f * n) || "" === n ? (!l && !(e in t) && ht(e, n), Ze.call(this, t, e, f, n, c, o || F.stringFilter, u)) : (h = new _r(this._pt, t, e, +f || 0, n - (f || 0), "boolean" == typeof l ? ur : or, 0, c), u && (h.fp = u), a && h.modifier(a, this, t), this._pt = h)
                },
                Qe = function(t, e, r, n, i, s) {
                    var a, o, u, h;
                    if (gt[t] && !1 !== (a = new gt[t]).init(i, a.rawVars ? e[t] : function(t, e, r, n, i) {
                            if (q(t) && (t = Je(t, i, e, r, n)), !W(t) || t.style && t.nodeType || J(t) || $(t)) return X(t) ? Je(t, i, e, r, n) : t;
                            var s, a = {};
                            for (s in t) a[s] = Je(t[s], i, e, r, n);
                            return a
                        }(e[t], n, i, s, r), r, n, s) && (r._pt = o = new _r(r._pt, i, t, 0, 1, a.render, a, 0, a.priority), r !== c))
                        for (u = r._ptLookup[r._targets.indexOf(i)], h = a._props.length; h--;) u[a._props[h]] = o;
                    return a
                },
                $e = function t(e, r) {
                    var n, i, o, u, h, l, f, c, p, d, _, g, m, v = e.vars,
                        y = v.ease,
                        x = v.startAt,
                        b = v.immediateRender,
                        w = v.lazy,
                        T = v.onUpdate,
                        M = v.onUpdateParams,
                        P = v.callbackScope,
                        A = v.runBackwards,
                        O = v.yoyoEase,
                        k = v.keyframes,
                        S = v.autoRevert,
                        C = e._dur,
                        D = e._startAt,
                        z = e._targets,
                        F = e.parent,
                        L = F && "nested" === F.data ? F.parent._targets : z,
                        E = "auto" === e._overwrite && !s,
                        N = e.timeline;
                    if (N && (!k || !y) && (y = "none"), e._ease = Be(y, R.ease), e._yEase = O ? Ee(Be(!0 === O ? y : O, R.ease)) : 0, O && e._yoyo && !e._repeat && (O = e._yEase, e._yEase = e._ease, e._ease = O), e._from = !N && !!v.runBackwards, !N) {
                        if (g = (c = z[0] ? wt(z[0]).harness : 0) && v[c.prop], n = Lt(v, pt), D && D.render(-1, !0).kill(), x)
                            if (Nt(e._startAt = er.set(z, Dt({
                                    data: "isStart",
                                    overwrite: !1,
                                    parent: F,
                                    immediateRender: !0,
                                    lazy: Z(w),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate: T,
                                    onUpdateParams: M,
                                    callbackScope: P,
                                    stagger: 0
                                }, x))), r < 0 && !b && !S && e._startAt.render(-1, !0), b) {
                                if (r > 0 && !S && (e._startAt = 0), C && r <= 0) return void(r && (e._zTime = r))
                            } else !1 === S && (e._startAt = 0);
                        else if (A && C)
                            if (D) !S && (e._startAt = 0);
                            else if (r && (b = !1), o = Dt({
                                overwrite: !1,
                                data: "isFromStart",
                                lazy: b && Z(w),
                                immediateRender: b,
                                stagger: 0,
                                parent: F
                            }, n), g && (o[c.prop] = g), Nt(e._startAt = er.set(z, o)), r < 0 && e._startAt.render(-1, !0), b) {
                            if (!r) return
                        } else t(e._startAt, I);
                        for (e._pt = 0, w = C && Z(w) || w && !C, i = 0; i < z.length; i++) {
                            if (f = (h = z[i])._gsap || bt(z)[i]._gsap, e._ptLookup[i] = d = {}, _t[f.id] && dt.length && Ot(), _ = L === z ? i : L.indexOf(h), c && !1 !== (p = new c).init(h, g || n, e, _, L) && (e._pt = u = new _r(e._pt, h, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach((function(t) {
                                    d[t] = u
                                })), p.priority && (l = 1)), !c || g)
                                for (o in n) gt[o] && (p = Qe(o, n, e, _, h, L)) ? p.priority && (l = 1) : d[o] = u = He.call(e, h, o, "get", n[o], _, L, 0, v.stringFilter);
                            e._op && e._op[i] && e.kill(h, e._op[i]), E && e._pt && (We = e, a.killTweensOf(h, d, e.globalTime(0)), m = !e.parent, We = 0), e._pt && w && (_t[f.id] = 1)
                        }
                        l && dr(e), e._onInit && e._onInit(e)
                    }
                    e._onUpdate = T, e._initted = (!e._op || e._pt) && !m
                },
                Je = function(t, e, r, n, i) {
                    return q(t) ? t.call(e, r, n, i) : X(t) && ~t.indexOf("random(") ? ge(t) : t
                },
                Ke = xt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
                tr = (Ke + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
                er = function(t) {
                    function e(e, r, i, o) {
                        var u;
                        "number" == typeof r && (i.duration = r, r = i, i = null);
                        var h, l, f, c, p, d, _, g, m = (u = t.call(this, o ? r : It(r)) || this).vars,
                            v = m.duration,
                            y = m.delay,
                            x = m.immediateRender,
                            b = m.stagger,
                            w = m.overwrite,
                            T = m.keyframes,
                            M = m.defaults,
                            P = m.scrollTrigger,
                            A = m.yoyoEase,
                            O = r.parent || a,
                            k = (J(e) || $(e) ? j(e[0]) : "length" in r) ? [e] : he(e);
                        if (u._targets = k.length ? bt(k) : lt("GSAP target " + e + " not found. https://greensock.com", !F.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = w, T || b || Q(v) || Q(y)) {
                            if (r = u.vars, (h = u.timeline = new Ge({
                                    data: "nested",
                                    defaults: M || {}
                                })).kill(), h.parent = h._dp = n(u), h._start = 0, T) Dt(h.vars.defaults, {
                                ease: "none"
                            }), b ? k.forEach((function(t, e) {
                                return T.forEach((function(r, n) {
                                    return h.to(t, r, n ? ">" : e * b)
                                }))
                            })) : T.forEach((function(t) {
                                return h.to(k, t, ">")
                            }));
                            else {
                                if (c = k.length, _ = b ? fe(b) : ct, W(b))
                                    for (p in b) ~Ke.indexOf(p) && (g || (g = {}), g[p] = b[p]);
                                for (l = 0; l < c; l++) {
                                    for (p in f = {}, r) tr.indexOf(p) < 0 && (f[p] = r[p]);
                                    f.stagger = 0, A && (f.yoyoEase = A), g && Ft(f, g), d = k[l], f.duration = +Je(v, n(u), l, d, k), f.delay = (+Je(y, n(u), l, d, k) || 0) - u._delay, !b && 1 === c && f.delay && (u._delay = y = f.delay, u._start += y, f.delay = 0), h.to(d, f, _(l, d, k))
                                }
                                h.duration() ? v = y = 0 : u.timeline = 0
                            }
                            v || u.duration(v = h.duration())
                        } else u.timeline = 0;
                        return !0 !== w || s || (We = n(u), a.killTweensOf(k), We = 0), Zt(O, n(u), i), r.reversed && u.reverse(), r.paused && u.paused(!0), (x || !v && !T && u._start === Pt(O._time) && Z(x) && Vt(n(u)) && "nested" !== O.data) && (u._tTime = -1e-8, u.render(Math.max(0, -y))), P && Ht(n(u), P), u
                    }
                    i(e, t);
                    var r = e.prototype;
                    return r.render = function(t, e, r) {
                        var n, i, s, a, o, u, h, l, f, c = this._time,
                            p = this._tDur,
                            d = this._dur,
                            _ = t > p - I && t >= 0 ? p : t < I ? 0 : t;
                        if (d) {
                            if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                                if (n = _, l = this.timeline, this._repeat) {
                                    if (a = d + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, r);
                                    if (n = Pt(_ % a), _ === p ? (s = this._repeat, n = d) : ((s = ~~(_ / a)) && s === _ / a && (n = d, s--), n > d && (n = d)), (u = this._yoyo && 1 & s) && (f = this._yEase, n = d - n), o = Xt(this._tTime, a), n === c && !r && this._initted) return this;
                                    s !== o && (l && this._yEase && Ne(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(Pt(a * s), !0).invalidate()._lock = 0))
                                }
                                if (!this._initted) {
                                    if (Qt(this, t < 0 ? t : n, r, e)) return this._tTime = 0, this;
                                    if (d !== this._dur) return this.render(t, e, r)
                                }
                                if (this._tTime = _, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(n / d), this._from && (this.ratio = h = 1 - h), n && !c && !e && ye(this, "onStart"), n && !c && !e && (ye(this, "onStart"), this._tTime !== _)) return this;
                                for (i = this._pt; i;) i.r(h, i.d), i = i._next;
                                l && l.render(t < 0 ? t : !n && u ? -1e-8 : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), ye(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && ye(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !d) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Nt(this, 1), e || t < 0 && !c || !_ && !c || (ye(this, _ === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < p && this.timeScale() > 0) && this._prom()))
                            }
                        } else ! function(t, e, r, n) {
                            var i, s, a, o = t.ratio,
                                u = e < 0 || !e && (!t._start && $t(t) && (t._initted || !Jt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Jt(t)) ? 0 : 1,
                                h = t._rDelay,
                                l = 0;
                            if (h && t._repeat && (l = se(0, t._tDur, e), s = Xt(l, h), a = Xt(t._tTime, h), t._yoyo && 1 & s && (u = 1 - u), s !== a && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || n || t._zTime === I || !e && t._zTime) {
                                if (!t._initted && Qt(t, e, n, r)) return;
                                for (a = t._zTime, t._zTime = e || (r ? I : 0), r || (r = e && !a), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, i = t._pt; i;) i.r(u, i.d), i = i._next;
                                t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && ye(t, "onUpdate"), l && t._repeat && !r && t.parent && ye(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && Nt(t, 1), r || (ye(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                            } else t._zTime || (t._zTime = e)
                        }(this, t, e, r);
                        return this
                    }, r.targets = function() {
                        return this._targets
                    }, r.invalidate = function() {
                        return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
                    }, r.kill = function(t, e) {
                        if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? xe(this) : this;
                        if (this.timeline) {
                            var r = this.timeline.totalDuration();
                            return this.timeline.killTweensOf(t, e, We && !0 !== We.vars.overwrite)._first || xe(this), this.parent && r !== this.timeline.totalDuration() && Kt(this, this._dur * this.timeline._tDur / r, 0, 1), this
                        }
                        var n, i, s, a, o, u, h, l = this._targets,
                            f = t ? he(t) : l,
                            c = this._ptLookup,
                            p = this._pt;
                        if ((!e || "all" === e) && function(t, e) {
                                for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
                                return r < 0
                            }(l, f)) return "all" === e && (this._pt = 0), xe(this);
                        for (n = this._op = this._op || [], "all" !== e && (X(e) && (o = {}, Mt(e, (function(t) {
                                return o[t] = 1
                            })), e = o), e = function(t, e) {
                                var r, n, i, s, a = t[0] ? wt(t[0]).harness : 0,
                                    o = a && a.aliases;
                                if (!o) return e;
                                for (n in r = Ft({}, e), o)
                                    if (n in r)
                                        for (i = (s = o[n].split(",")).length; i--;) r[s[i]] = r[n];
                                return r
                            }(l, e)), h = l.length; h--;)
                            if (~f.indexOf(l[h]))
                                for (o in i = c[h], "all" === e ? (n[h] = e, a = i, s = {}) : (s = n[h] = n[h] || {}, a = e), a)(u = i && i[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || Et(this, u, "_pt"), delete i[o]), "all" !== s && (s[o] = 1);
                        return this._initted && !this._pt && p && xe(this), this
                    }, e.to = function(t, r) {
                        return new e(t, r, arguments[2])
                    }, e.from = function(t, e) {
                        return ne(1, arguments)
                    }, e.delayedCall = function(t, r, n, i) {
                        return new e(r, 0, {
                            immediateRender: !1,
                            lazy: !1,
                            overwrite: !1,
                            delay: t,
                            onComplete: r,
                            onReverseComplete: r,
                            onCompleteParams: n,
                            onReverseCompleteParams: n,
                            callbackScope: i
                        })
                    }, e.fromTo = function(t, e, r) {
                        return ne(2, arguments)
                    }, e.set = function(t, r) {
                        return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
                    }, e.killTweensOf = function(t, e, r) {
                        return a.killTweensOf(t, e, r)
                    }, e
                }(je);
            Dt(er.prototype, {
                _targets: [],
                _lazy: 0,
                _startAt: 0,
                _op: 0,
                _onInit: 0
            }), Mt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
                er[t] = function() {
                    var e = new Ge,
                        r = oe.call(arguments, 0);
                    return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
                }
            }));
            var rr = function(t, e, r) {
                    return t[e] = r
                },
                nr = function(t, e, r) {
                    return t[e](r)
                },
                ir = function(t, e, r, n) {
                    return t[e](n.fp, r)
                },
                sr = function(t, e, r) {
                    return t.setAttribute(e, r)
                },
                ar = function(t, e) {
                    return q(t[e]) ? nr : G(t[e]) && t.setAttribute ? sr : rr
                },
                or = function(t, e) {
                    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
                },
                ur = function(t, e) {
                    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
                },
                hr = function(t, e) {
                    var r = e._pt,
                        n = "";
                    if (!t && e.b) n = e.b;
                    else if (1 === t && e.e) n = e.e;
                    else {
                        for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n, r = r._next;
                        n += e.c
                    }
                    e.set(e.t, e.p, n, e)
                },
                lr = function(t, e) {
                    for (var r = e._pt; r;) r.r(t, r.d), r = r._next
                },
                fr = function(t, e, r, n) {
                    for (var i, s = this._pt; s;) i = s._next, s.p === n && s.modifier(t, e, r), s = i
                },
                cr = function(t) {
                    for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? Et(this, n, "_pt") : n.dep || (e = 1), n = r;
                    return !e
                },
                pr = function(t, e, r, n) {
                    n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
                },
                dr = function(t) {
                    for (var e, r, n, i, s = t._pt; s;) {
                        for (e = s._next, r = n; r && r.pr > s.pr;) r = r._next;
                        (s._prev = r ? r._prev : i) ? s._prev._next = s: n = s, (s._next = r) ? r._prev = s : i = s, s = e
                    }
                    t._pt = n
                },
                _r = function() {
                    function t(t, e, r, n, i, s, a, o, u) {
                        this.t = e, this.s = n, this.c = i, this.p = r, this.r = s || or, this.d = a || this, this.set = o || rr, this.pr = u || 0, this._next = t, t && (t._prev = this)
                    }
                    return t.prototype.modifier = function(t, e, r) {
                        this.mSet = this.mSet || this.set, this.set = pr, this.m = t, this.mt = r, this.tween = e
                    }, t
                }();
            Mt(xt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
                return pt[t] = 1
            })), at.TweenMax = at.TweenLite = er, at.TimelineLite = at.TimelineMax = Ge, a = new Ge({
                sortChildren: !1,
                defaults: R,
                autoRemoveChildren: !0,
                id: "root",
                smoothChildTiming: !0
            }), F.stringFilter = Ce;
            var gr = {
                registerPlugin: function() {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    e.forEach((function(t) {
                        return be(t)
                    }))
                },
                timeline: function(t) {
                    return new Ge(t)
                },
                getTweensOf: function(t, e) {
                    return a.getTweensOf(t, e)
                },
                getProperty: function(t, e, r, n) {
                    X(t) && (t = he(t)[0]);
                    var i = wt(t || {}).get,
                        s = r ? Ct : St;
                    return "native" === r && (r = ""), t ? e ? s((gt[e] && gt[e].get || i)(t, e, r, n)) : function(e, r, n) {
                        return s((gt[e] && gt[e].get || i)(t, e, r, n))
                    } : t
                },
                quickSetter: function(t, e, r) {
                    if ((t = he(t)).length > 1) {
                        var n = t.map((function(t) {
                                return yr.quickSetter(t, e, r)
                            })),
                            i = n.length;
                        return function(t) {
                            for (var e = i; e--;) n[e](t)
                        }
                    }
                    t = t[0] || {};
                    var s = gt[e],
                        a = wt(t),
                        o = a.harness && (a.harness.aliases || {})[e] || e,
                        u = s ? function(e) {
                            var n = new s;
                            c._pt = 0, n.init(t, r ? e + r : e, c, 0, [t]), n.render(1, n), c._pt && lr(1, c)
                        } : a.set(t, o);
                    return s ? u : function(e) {
                        return u(t, o, r ? e + r : e, a, 1)
                    }
                },
                isTweening: function(t) {
                    return a.getTweensOf(t, !0).length > 0
                },
                defaults: function(t) {
                    return t && t.ease && (t.ease = Be(t.ease, R.ease)), Rt(R, t || {})
                },
                config: function(t) {
                    return Rt(F, t || {})
                },
                registerEffect: function(t) {
                    var e = t.name,
                        r = t.effect,
                        n = t.plugins,
                        i = t.defaults,
                        s = t.extendTimeline;
                    (n || "").split(",").forEach((function(t) {
                        return t && !gt[t] && !at[t] && lt(e + " effect requires " + t + " plugin.")
                    })), mt[e] = function(t, e, n) {
                        return r(he(t), Dt(e || {}, i), n)
                    }, s && (Ge.prototype[e] = function(t, r, n) {
                        return this.add(mt[e](t, W(r) ? r : (n = r) && {}, this), n)
                    })
                },
                registerEase: function(t, e) {
                    Fe[t] = Be(e)
                },
                parseEase: function(t, e) {
                    return arguments.length ? Be(t, e) : Fe
                },
                getById: function(t) {
                    return a.getById(t)
                },
                exportRoot: function(t, e) {
                    void 0 === t && (t = {});
                    var r, n, i = new Ge(t);
                    for (i.smoothChildTiming = Z(t.smoothChildTiming), a.remove(i), i._dp = 0, i._time = i._tTime = a._time, r = a._first; r;) n = r._next, !e && !r._dur && r instanceof er && r.vars.onComplete === r._targets[0] || Zt(i, r, r._start - r._delay), r = n;
                    return Zt(a, i, 0), i
                },
                utils: {
                    wrap: function t(e, r, n) {
                        var i = r - e;
                        return J(e) ? _e(e, t(0, e.length), r) : ie(n, (function(t) {
                            return (i + (t - e) % i) % i + e
                        }))
                    },
                    wrapYoyo: function t(e, r, n) {
                        var i = r - e,
                            s = 2 * i;
                        return J(e) ? _e(e, t(0, e.length - 1), r) : ie(n, (function(t) {
                            return e + ((t = (s + (t - e) % s) % s || 0) > i ? s - t : t)
                        }))
                    },
                    distribute: fe,
                    random: de,
                    snap: pe,
                    normalize: function(t, e, r) {
                        return me(t, e, 0, 1, r)
                    },
                    getUnit: ae,
                    clamp: function(t, e, r) {
                        return ie(r, (function(r) {
                            return se(t, e, r)
                        }))
                    },
                    splitColor: Pe,
                    toArray: he,
                    selector: function(t) {
                        return t = he(t)[0] || lt("Invalid scope") || {},
                            function(e) {
                                var r = t.current || t.nativeElement || t;
                                return he(e, r.querySelectorAll ? r : r === t ? lt("Invalid scope") || h.createElement("div") : t)
                            }
                    },
                    mapRange: me,
                    pipe: function() {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        return function(t) {
                            return e.reduce((function(t, e) {
                                return e(t)
                            }), t)
                        }
                    },
                    unitize: function(t, e) {
                        return function(r) {
                            return t(parseFloat(r)) + (e || ae(r))
                        }
                    },
                    interpolate: function t(e, r, n, i) {
                        var s = isNaN(e + r) ? 0 : function(t) {
                            return (1 - t) * e + t * r
                        };
                        if (!s) {
                            var a, o, u, h, l, f = X(e),
                                c = {};
                            if (!0 === n && (i = 1) && (n = null), f) e = {
                                p: e
                            }, r = {
                                p: r
                            };
                            else if (J(e) && !J(r)) {
                                for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(t(e[o - 1], e[o]));
                                h--, s = function(t) {
                                    t *= h;
                                    var e = Math.min(l, ~~t);
                                    return u[e](t - e)
                                }, n = r
                            } else i || (e = Ft(J(e) ? [] : {}, e));
                            if (!u) {
                                for (a in r) He.call(c, e, a, "get", r[a]);
                                s = function(t) {
                                    return lr(t, c) || (f ? e.p : e)
                                }
                            }
                        }
                        return ie(n, s)
                    },
                    shuffle: le
                },
                install: ut,
                effects: mt,
                ticker: De,
                updateRoot: Ge.updateRoot,
                plugins: gt,
                globalTimeline: a,
                core: {
                    PropTween: _r,
                    globals: ft,
                    Tween: er,
                    Timeline: Ge,
                    Animation: je,
                    getCache: wt,
                    _removeLinkedListItem: Et,
                    suppressOverwrites: function(t) {
                        return s = t
                    }
                }
            };
            Mt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
                return gr[t] = er[t]
            })), De.add(Ge.updateRoot), c = gr.to({}, {
                duration: 0
            });
            var mr = function(t, e) {
                    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
                    return r
                },
                vr = function(t, e) {
                    return {
                        name: t,
                        rawVars: 1,
                        init: function(t, r, n) {
                            n._onInit = function(t) {
                                var n, i;
                                if (X(r) && (n = {}, Mt(r, (function(t) {
                                        return n[t] = 1
                                    })), r = n), e) {
                                    for (i in n = {}, r) n[i] = e(r[i]);
                                    r = n
                                }! function(t, e) {
                                    var r, n, i, s = t._targets;
                                    for (r in e)
                                        for (n = s.length; n--;)(i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = mr(i, r)), i && i.modifier && i.modifier(e[r], t, s[n], r))
                                }(t, r)
                            }
                        }
                    }
                },
                yr = gr.registerPlugin({
                    name: "attr",
                    init: function(t, e, r, n, i) {
                        var s, a;
                        for (s in e)(a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], n, i, 0, 0, s)) && (a.op = s), this._props.push(s)
                    }
                }, {
                    name: "endArray",
                    init: function(t, e) {
                        for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
                    }
                }, vr("roundProps", ce), vr("modifiers"), vr("snap", pe)) || gr;
            er.version = Ge.version = yr.version = "3.7.0", l = 1, H() && ze(), Fe.Power0, Fe.Power1;
            var xr = Fe.Power2,
                br = (Fe.Power3, Fe.Power4),
                wr = Fe.Linear;
            Fe.Quad, Fe.Cubic, Fe.Quart, Fe.Quint, Fe.Strong, Fe.Elastic, Fe.Back, Fe.SteppedEase, Fe.Bounce, Fe.Sine, Fe.Expo, Fe.Circ
        },
        95716: (t, e, r) => {
            "use strict";
            r.d(e, {
                ZP: () => yt,
                p8: () => yt
            });
            var n, i, s, a, o, u, h, l = r(25317),
                f = {},
                c = 180 / Math.PI,
                p = Math.PI / 180,
                d = Math.atan2,
                _ = /([A-Z])/g,
                g = /(?:left|right|width|margin|padding|x)/i,
                m = /[\s,\(]\S/,
                v = {
                    autoAlpha: "opacity,visibility",
                    scale: "scaleX,scaleY",
                    alpha: "opacity"
                },
                y = function(t, e) {
                    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
                },
                x = function(t, e) {
                    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
                },
                b = function(t, e) {
                    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
                },
                w = function(t, e) {
                    var r = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
                },
                T = function(t, e) {
                    return e.set(e.t, e.p, t ? e.e : e.b, e)
                },
                M = function(t, e) {
                    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
                },
                P = function(t, e, r) {
                    return t.style[e] = r
                },
                A = function(t, e, r) {
                    return t.style.setProperty(e, r)
                },
                O = function(t, e, r) {
                    return t._gsap[e] = r
                },
                k = function(t, e, r) {
                    return t._gsap.scaleX = t._gsap.scaleY = r
                },
                S = function(t, e, r, n, i) {
                    var s = t._gsap;
                    s.scaleX = s.scaleY = r, s.renderTransform(i, s)
                },
                C = function(t, e, r, n, i) {
                    var s = t._gsap;
                    s[e] = r, s.renderTransform(i, s)
                },
                D = "transform",
                z = D + "Origin",
                F = function(t, e) {
                    var r = i.createElementNS ? i.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : i.createElement(t);
                    return r.style ? r : i.createElement(t)
                },
                R = function t(e, r, n) {
                    var i = getComputedStyle(e);
                    return i[r] || i.getPropertyValue(r.replace(_, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, I(r) || r, 1) || ""
                },
                L = "O,Moz,ms,Ms,Webkit".split(","),
                I = function(t, e, r) {
                    var n = (e || o).style,
                        i = 5;
                    if (t in n && !r) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(L[i] + t in n););
                    return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? L[i] : "") + t
                },
                E = function() {
                    "undefined" != typeof window && window.document && (n = window, i = n.document, s = i.documentElement, o = F("div") || {
                        style: {}
                    }, F("div"), D = I(D), z = D + "Origin", o.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", h = !!I("perspective"), a = 1)
                },
                N = function t(e) {
                    var r, n = F("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        i = this.parentNode,
                        a = this.nextSibling,
                        o = this.style.cssText;
                    if (s.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
                        r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                    } catch (t) {} else this._gsapBBox && (r = this._gsapBBox());
                    return i && (a ? i.insertBefore(this, a) : i.appendChild(this)), s.removeChild(n), this.style.cssText = o, r
                },
                B = function(t, e) {
                    for (var r = e.length; r--;)
                        if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
                },
                Y = function(t) {
                    var e;
                    try {
                        e = t.getBBox()
                    } catch (r) {
                        e = N.call(t, !0)
                    }
                    return e && (e.width || e.height) || t.getBBox === N || (e = N.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                        x: +B(t, ["x", "cx", "x1"]) || 0,
                        y: +B(t, ["y", "cy", "y1"]) || 0,
                        width: 0,
                        height: 0
                    }
                },
                V = function(t) {
                    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Y(t))
                },
                U = function(t, e) {
                    if (e) {
                        var r = t.style;
                        e in f && e !== z && (e = D), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(_, "-$1").toLowerCase())) : r.removeAttribute(e)
                    }
                },
                X = function(t, e, r, n, i, s) {
                    var a = new l.Fo(t._pt, e, r, 0, 1, s ? M : T);
                    return t._pt = a, a.b = n, a.e = i, t._props.push(r), a
                },
                q = {
                    deg: 1,
                    rad: 1,
                    turn: 1
                },
                j = function t(e, r, n, s) {
                    var a, u, h, c, p = parseFloat(n) || 0,
                        d = (n + "").trim().substr((p + "").length) || "px",
                        _ = o.style,
                        m = g.test(r),
                        v = "svg" === e.tagName.toLowerCase(),
                        y = (v ? "client" : "offset") + (m ? "Width" : "Height"),
                        x = 100,
                        b = "px" === s,
                        w = "%" === s;
                    return s === d || !p || q[s] || q[d] ? p : ("px" !== d && !b && (p = t(e, r, n, "px")), c = e.getCTM && V(e), !w && "%" !== d || !f[r] && !~r.indexOf("adius") ? (_[m ? "width" : "height"] = x + (b ? d : s), u = ~r.indexOf("adius") || "em" === s && e.appendChild && !v ? e : e.parentNode, c && (u = (e.ownerSVGElement || {}).parentNode), u && u !== i && u.appendChild || (u = i.body), (h = u._gsap) && w && h.width && m && h.time === l.xr.time ? (0, l.Pr)(p / h.width * x) : ((w || "%" === d) && (_.position = R(e, "position")), u === e && (_.position = "static"), u.appendChild(o), a = o[y], u.removeChild(o), _.position = "absolute", m && w && ((h = (0, l.DY)(u)).time = l.xr.time, h.width = u[y]), (0, l.Pr)(b ? a * p / x : a && p ? x / a * p : 0))) : (a = c ? e.getBBox()[m ? "width" : "height"] : e[y], (0, l.Pr)(w ? p / a * x : p / 100 * a)))
                },
                G = function(t, e, r, n) {
                    var i;
                    return a || E(), e in v && "transform" !== e && ~(e = v[e]).indexOf(",") && (e = e.split(",")[0]), f[e] && "transform" !== e ? (i = nt(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : it(R(t, z)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = Q[e] && Q[e](t, e, r) || R(t, e) || (0, l.Ok)(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? j(t, e, i, r) + r : i
                },
                W = function(t, e, r, n) {
                    if (!r || "none" === r) {
                        var i = I(e, t, 1),
                            s = i && R(t, i, 1);
                        s && s !== r ? (e = i, r = s) : "borderColor" === e && (r = R(t, "borderTopColor"))
                    }
                    var a, o, u, h, f, c, p, d, _, g, m, v, y = new l.Fo(this._pt, t.style, e, 0, 1, l.Ks),
                        x = 0,
                        b = 0;
                    if (y.b = r, y.e = n, r += "", "auto" == (n += "") && (t.style[e] = n, n = R(t, e) || n, t.style[e] = r), a = [r, n], (0, l.kr)(a), n = a[1], u = (r = a[0]).match(l.d4) || [], (n.match(l.d4) || []).length) {
                        for (; o = l.d4.exec(n);) p = o[0], _ = n.substring(x, o.index), f ? f = (f + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (f = 1), p !== (c = u[b++] || "") && (h = parseFloat(c) || 0, m = c.substr((h + "").length), (v = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), d = parseFloat(p), g = p.substr((d + "").length), x = l.d4.lastIndex - g.length, g || (g = g || l.Fc.units[e] || m, x === n.length && (n += g, y.e += g)), m !== g && (h = j(t, e, c, g) || 0), y._pt = {
                            _next: y._pt,
                            p: _ || 1 === b ? _ : ",",
                            s: h,
                            c: v ? v * d : d - h,
                            m: f && f < 4 || "zIndex" === e ? Math.round : 0
                        });
                        y.c = x < n.length ? n.substring(x, n.length) : ""
                    } else y.r = "display" === e && "none" === n ? M : T;
                    return l.bQ.test(n) && (y.e = 0), this._pt = y, y
                },
                Z = {
                    top: "0%",
                    bottom: "100%",
                    left: "0%",
                    right: "100%",
                    center: "50%"
                },
                H = function(t, e) {
                    if (e.tween && e.tween._time === e.tween._dur) {
                        var r, n, i, s = e.t,
                            a = s.style,
                            o = e.u,
                            u = s._gsap;
                        if ("all" === o || !0 === o) a.cssText = "", n = 1;
                        else
                            for (i = (o = o.split(",")).length; --i > -1;) r = o[i], f[r] && (n = 1, r = "transformOrigin" === r ? z : D), U(s, r);
                        n && (U(s, D), u && (u.svg && s.removeAttribute("transform"), nt(s, 1), u.uncache = 1))
                    }
                },
                Q = {
                    clearProps: function(t, e, r, n, i) {
                        if ("isFromStart" !== i.data) {
                            var s = t._pt = new l.Fo(t._pt, e, r, 0, 0, H);
                            return s.u = n, s.pr = -10, s.tween = i, t._props.push(r), 1
                        }
                    }
                },
                $ = [1, 0, 0, 1, 0, 0],
                J = {},
                K = function(t) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
                },
                tt = function(t) {
                    var e = R(t, D);
                    return K(e) ? $ : e.substr(7).match(l.SI).map(l.Pr)
                },
                et = function(t, e) {
                    var r, n, i, a, o = t._gsap || (0, l.DY)(t),
                        u = t.style,
                        h = tt(t);
                    return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (h = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? $ : h : (h !== $ || t.offsetParent || t === s || o.svg || (i = u.display, u.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, n = t.nextSibling, s.appendChild(t)), h = tt(t), i ? u.display = i : U(t, "display"), a && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : s.removeChild(t))), e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h)
                },
                rt = function(t, e, r, n, i, s) {
                    var a, o, u, h = t._gsap,
                        l = i || et(t, !0),
                        f = h.xOrigin || 0,
                        c = h.yOrigin || 0,
                        p = h.xOffset || 0,
                        d = h.yOffset || 0,
                        _ = l[0],
                        g = l[1],
                        m = l[2],
                        v = l[3],
                        y = l[4],
                        x = l[5],
                        b = e.split(" "),
                        w = parseFloat(b[0]) || 0,
                        T = parseFloat(b[1]) || 0;
                    r ? l !== $ && (o = _ * v - g * m) && (u = w * (-g / o) + T * (_ / o) - (_ * x - g * y) / o, w = w * (v / o) + T * (-m / o) + (m * x - v * y) / o, T = u) : (w = (a = Y(t)).x + (~b[0].indexOf("%") ? w / 100 * a.width : w), T = a.y + (~(b[1] || b[0]).indexOf("%") ? T / 100 * a.height : T)), n || !1 !== n && h.smooth ? (y = w - f, x = T - c, h.xOffset = p + (y * _ + x * m) - y, h.yOffset = d + (y * g + x * v) - x) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = T, h.smooth = !!n, h.origin = e, h.originIsAbsolute = !!r, t.style[z] = "0px 0px", s && (X(s, h, "xOrigin", f, w), X(s, h, "yOrigin", c, T), X(s, h, "xOffset", p, h.xOffset), X(s, h, "yOffset", d, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + T)
                },
                nt = function(t, e) {
                    var r = t._gsap || new l.l1(t);
                    if ("x" in r && !e && !r.uncache) return r;
                    var n, i, s, a, o, u, f, _, g, m, v, y, x, b, w, T, M, P, A, O, k, S, C, F, L, I, E, N, B, Y, U, X, q = t.style,
                        j = r.scaleX < 0,
                        G = "px",
                        W = "deg",
                        Z = R(t, z) || "0";
                    return n = i = s = u = f = _ = g = m = v = 0, a = o = 1, r.svg = !(!t.getCTM || !V(t)), b = et(t, r.svg), r.svg && (F = (!r.uncache || "0px 0px" === Z) && !e && t.getAttribute("data-svg-origin"), rt(t, F || Z, !!F || r.originIsAbsolute, !1 !== r.smooth, b)), y = r.xOrigin || 0, x = r.yOrigin || 0, b !== $ && (P = b[0], A = b[1], O = b[2], k = b[3], n = S = b[4], i = C = b[5], 6 === b.length ? (a = Math.sqrt(P * P + A * A), o = Math.sqrt(k * k + O * O), u = P || A ? d(A, P) * c : 0, (g = O || k ? d(O, k) * c + u : 0) && (o *= Math.abs(Math.cos(g * p))), r.svg && (n -= y - (y * P + x * O), i -= x - (y * A + x * k))) : (X = b[6], Y = b[7], E = b[8], N = b[9], B = b[10], U = b[11], n = b[12], i = b[13], s = b[14], f = (w = d(X, B)) * c, w && (F = S * (T = Math.cos(-w)) + E * (M = Math.sin(-w)), L = C * T + N * M, I = X * T + B * M, E = S * -M + E * T, N = C * -M + N * T, B = X * -M + B * T, U = Y * -M + U * T, S = F, C = L, X = I), _ = (w = d(-O, B)) * c, w && (T = Math.cos(-w), U = k * (M = Math.sin(-w)) + U * T, P = F = P * T - E * M, A = L = A * T - N * M, O = I = O * T - B * M), u = (w = d(A, P)) * c, w && (F = P * (T = Math.cos(w)) + A * (M = Math.sin(w)), L = S * T + C * M, A = A * T - P * M, C = C * T - S * M, P = F, S = L), f && Math.abs(f) + Math.abs(u) > 359.9 && (f = u = 0, _ = 180 - _), a = (0, l.Pr)(Math.sqrt(P * P + A * A + O * O)), o = (0, l.Pr)(Math.sqrt(C * C + X * X)), w = d(S, C), g = Math.abs(w) > 2e-4 ? w * c : 0, v = U ? 1 / (U < 0 ? -U : U) : 0), r.svg && (F = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !K(R(t, D)), F && t.setAttribute("transform", F))), Math.abs(g) > 90 && Math.abs(g) < 270 && (j ? (a *= -1, g += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, g += g <= 0 ? 180 : -180)), r.x = n - ((r.xPercent = n && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + G, r.y = i - ((r.yPercent = i && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + G, r.z = s + G, r.scaleX = (0, l.Pr)(a), r.scaleY = (0, l.Pr)(o), r.rotation = (0, l.Pr)(u) + W, r.rotationX = (0, l.Pr)(f) + W, r.rotationY = (0, l.Pr)(_) + W, r.skewX = g + W, r.skewY = m + W, r.transformPerspective = v + G, (r.zOrigin = parseFloat(Z.split(" ")[2]) || 0) && (q[z] = it(Z)), r.xOffset = r.yOffset = 0, r.force3D = l.Fc.force3D, r.renderTransform = r.svg ? ft : h ? lt : at, r.uncache = 0, r
                },
                it = function(t) {
                    return (t = t.split(" "))[0] + " " + t[1]
                },
                st = function(t, e, r) {
                    var n = (0, l.Wy)(e);
                    return (0, l.Pr)(parseFloat(e) + parseFloat(j(t, "x", r + "px", n))) + n
                },
                at = function(t, e) {
                    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, lt(t, e)
                },
                ot = "0deg",
                ut = "0px",
                ht = ") ",
                lt = function(t, e) {
                    var r = e || this,
                        n = r.xPercent,
                        i = r.yPercent,
                        s = r.x,
                        a = r.y,
                        o = r.z,
                        u = r.rotation,
                        h = r.rotationY,
                        l = r.rotationX,
                        f = r.skewX,
                        c = r.skewY,
                        d = r.scaleX,
                        _ = r.scaleY,
                        g = r.transformPerspective,
                        m = r.force3D,
                        v = r.target,
                        y = r.zOrigin,
                        x = "",
                        b = "auto" === m && t && 1 !== t || !0 === m;
                    if (y && (l !== ot || h !== ot)) {
                        var w, T = parseFloat(h) * p,
                            M = Math.sin(T),
                            P = Math.cos(T);
                        T = parseFloat(l) * p, w = Math.cos(T), s = st(v, s, M * w * -y), a = st(v, a, -Math.sin(T) * -y), o = st(v, o, P * w * -y + y)
                    }
                    g !== ut && (x += "perspective(" + g + ht), (n || i) && (x += "translate(" + n + "%, " + i + "%) "), (b || s !== ut || a !== ut || o !== ut) && (x += o !== ut || b ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ht), u !== ot && (x += "rotate(" + u + ht), h !== ot && (x += "rotateY(" + h + ht), l !== ot && (x += "rotateX(" + l + ht), f === ot && c === ot || (x += "skew(" + f + ", " + c + ht), 1 === d && 1 === _ || (x += "scale(" + d + ", " + _ + ht), v.style[D] = x || "translate(0, 0)"
                },
                ft = function(t, e) {
                    var r, n, i, s, a, o = e || this,
                        u = o.xPercent,
                        h = o.yPercent,
                        f = o.x,
                        c = o.y,
                        d = o.rotation,
                        _ = o.skewX,
                        g = o.skewY,
                        m = o.scaleX,
                        v = o.scaleY,
                        y = o.target,
                        x = o.xOrigin,
                        b = o.yOrigin,
                        w = o.xOffset,
                        T = o.yOffset,
                        M = o.forceCSS,
                        P = parseFloat(f),
                        A = parseFloat(c);
                    d = parseFloat(d), _ = parseFloat(_), (g = parseFloat(g)) && (_ += g = parseFloat(g), d += g), d || _ ? (d *= p, _ *= p, r = Math.cos(d) * m, n = Math.sin(d) * m, i = Math.sin(d - _) * -v, s = Math.cos(d - _) * v, _ && (g *= p, a = Math.tan(_ - g), i *= a = Math.sqrt(1 + a * a), s *= a, g && (a = Math.tan(g), r *= a = Math.sqrt(1 + a * a), n *= a)), r = (0, l.Pr)(r), n = (0, l.Pr)(n), i = (0, l.Pr)(i), s = (0, l.Pr)(s)) : (r = m, s = v, n = i = 0), (P && !~(f + "").indexOf("px") || A && !~(c + "").indexOf("px")) && (P = j(y, "x", f, "px"), A = j(y, "y", c, "px")), (x || b || w || T) && (P = (0, l.Pr)(P + x - (x * r + b * i) + w), A = (0, l.Pr)(A + b - (x * n + b * s) + T)), (u || h) && (a = y.getBBox(), P = (0, l.Pr)(P + u / 100 * a.width), A = (0, l.Pr)(A + h / 100 * a.height)), a = "matrix(" + r + "," + n + "," + i + "," + s + "," + P + "," + A + ")", y.setAttribute("transform", a), M && (y.style[D] = a)
                },
                ct = function(t, e, r, n, i, s) {
                    var a, o, u = 360,
                        h = (0, l.r9)(i),
                        f = parseFloat(i) * (h && ~i.indexOf("rad") ? c : 1),
                        p = s ? f * s : f - n,
                        d = n + p + "deg";
                    return h && ("short" === (a = i.split("_")[1]) && (p %= u) != p % 180 && (p += p < 0 ? u : -360), "cw" === a && p < 0 ? p = (p + 36e9) % u - ~~(p / u) * u : "ccw" === a && p > 0 && (p = (p - 36e9) % u - ~~(p / u) * u)), t._pt = o = new l.Fo(t._pt, e, r, n, p, x), o.e = d, o.u = "deg", t._props.push(r), o
                },
                pt = function(t, e) {
                    for (var r in e) t[r] = e[r];
                    return t
                },
                dt = function(t, e, r) {
                    var n, i, s, a, o, u, h, c = pt({}, r._gsap),
                        p = r.style;
                    for (i in c.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), p[D] = e, n = nt(r, 1), U(r, D), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[D], p[D] = e, n = nt(r, 1), p[D] = s), f)(s = c[i]) !== (a = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (o = (0, l.Wy)(s) !== (h = (0, l.Wy)(a)) ? j(r, i, s, h) : parseFloat(s), u = parseFloat(a), t._pt = new l.Fo(t._pt, n, i, o, u - o, y), t._pt.u = h || 0, t._props.push(i));
                    pt(n, c)
                };
            (0, l.fS)("padding,margin,Width,Radius", (function(t, e) {
                var r = "Top",
                    n = "Right",
                    i = "Bottom",
                    s = "Left",
                    a = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map((function(r) {
                        return e < 2 ? t + r : "border" + r + t
                    }));
                Q[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
                    var s, o;
                    if (arguments.length < 4) return s = a.map((function(e) {
                        return G(t, e, r)
                    })), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
                    s = (n + "").split(" "), o = {}, a.forEach((function(t, e) {
                        return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
                    })), t.init(e, o, i)
                }
            }));
            var _t, gt, mt, vt = {
                name: "css",
                register: E,
                targetTest: function(t) {
                    return t.style && t.nodeType
                },
                init: function(t, e, r, n, i) {
                    var s, o, u, h, c, p, d, _, g, x, T, M, P, A, O, k, S, C, z, F = this._props,
                        R = t.style,
                        L = r.vars.startAt;
                    for (d in a || E(), e)
                        if ("autoRound" !== d && (o = e[d], !l.$i[d] || !(0, l.if)(d, e, r, n, t, i)))
                            if (c = typeof o, p = Q[d], "function" === c && (c = typeof(o = o.call(r, n, t, i))), "string" === c && ~o.indexOf("random(") && (o = (0, l.UI)(o)), p) p(this, t, d, o, r) && (O = 1);
                            else if ("--" === d.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(d) + "").trim(), o += "", l.GN.lastIndex = 0, l.GN.test(s) || (_ = (0, l.Wy)(s), g = (0, l.Wy)(o)), g ? _ !== g && (s = j(t, d, s, g) + g) : _ && (o += _), this.add(R, "setProperty", s, o, n, i, 0, 0, d), F.push(d);
                    else if ("undefined" !== c) {
                        if (L && d in L ? (s = "function" == typeof L[d] ? L[d].call(r, n, t, i) : L[d], d in l.Fc.units && !(0, l.Wy)(s) && (s += l.Fc.units[d]), "=" === (s + "").charAt(1) && (s = G(t, d))) : s = G(t, d), h = parseFloat(s), (x = "string" === c && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)), u = parseFloat(o), d in v && ("autoAlpha" === d && (1 === h && "hidden" === G(t, "visibility") && u && (h = 0), X(this, R, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== d && "transform" !== d && ~(d = v[d]).indexOf(",") && (d = d.split(",")[0])), T = d in f)
                            if (M || ((P = t._gsap).renderTransform && !e.parseTransform || nt(t, e.parseTransform), A = !1 !== e.smoothOrigin && P.smooth, (M = this._pt = new l.Fo(this._pt, R, D, 0, 1, P.renderTransform, P, 0, -1)).dep = 1), "scale" === d) this._pt = new l.Fo(this._pt, P, "scaleY", P.scaleY, (x ? x * u : u - P.scaleY) || 0), F.push("scaleY", d), d += "X";
                            else {
                                if ("transformOrigin" === d) {
                                    S = void 0, C = void 0, z = void 0, C = (S = (k = o).split(" "))[0], z = S[1] || "50%", "top" !== C && "bottom" !== C && "left" !== z && "right" !== z || (k = C, C = z, z = k), S[0] = Z[C] || C, S[1] = Z[z] || z, o = S.join(" "), P.svg ? rt(t, o, 0, A, 0, this) : ((g = parseFloat(o.split(" ")[2]) || 0) !== P.zOrigin && X(this, P, "zOrigin", P.zOrigin, g), X(this, R, d, it(s), it(o)));
                                    continue
                                }
                                if ("svgOrigin" === d) {
                                    rt(t, o, 1, A, 0, this);
                                    continue
                                }
                                if (d in J) {
                                    ct(this, P, d, h, o, x);
                                    continue
                                }
                                if ("smoothOrigin" === d) {
                                    X(this, P, "smooth", P.smooth, o);
                                    continue
                                }
                                if ("force3D" === d) {
                                    P[d] = o;
                                    continue
                                }
                                if ("transform" === d) {
                                    dt(this, o, t);
                                    continue
                                }
                            }
                        else d in R || (d = I(d) || d);
                        if (T || (u || 0 === u) && (h || 0 === h) && !m.test(o) && d in R) u || (u = 0), (_ = (s + "").substr((h + "").length)) !== (g = (0, l.Wy)(o) || (d in l.Fc.units ? l.Fc.units[d] : _)) && (h = j(t, d, s, g)), this._pt = new l.Fo(this._pt, T ? P : R, d, h, x ? x * u : u - h, T || "px" !== g && "zIndex" !== d || !1 === e.autoRound ? y : w), this._pt.u = g || 0, _ !== g && (this._pt.b = s, this._pt.r = b);
                        else if (d in R) W.call(this, t, d, s, o);
                        else {
                            if (!(d in t)) {
                                (0, l.lC)(d, o);
                                continue
                            }
                            this.add(t, d, s || t[d], o, n, i)
                        }
                        F.push(d)
                    }
                    O && (0, l.JV)(this)
                },
                get: G,
                aliases: v,
                getSetter: function(t, e, r) {
                    var n = v[e];
                    return n && n.indexOf(",") < 0 && (e = n), e in f && e !== z && (t._gsap.x || G(t, "x")) ? r && u === r ? "scale" === e ? k : O : (u = r || {}) && ("scale" === e ? S : C) : t.style && !(0, l.m2)(t.style[e]) ? P : ~e.indexOf("-") ? A : (0, l.S5)(t, e)
                },
                core: {
                    _removeProperty: U,
                    _getMatrix: et
                }
            };
            l.p8.utils.checkPrefix = I, _t = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent", gt = "rotation,rotationX,rotationY,skewX,skewY", mt = (0, l.fS)(_t + "," + gt + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
                f[t] = 1
            })), (0, l.fS)(gt, (function(t) {
                l.Fc.units[t] = "deg", J[t] = 1
            })), v[mt[13]] = _t + "," + gt, (0, l.fS)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
                var e = t.split(":");
                v[e[1]] = mt[e[0]]
            })), (0, l.fS)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
                l.Fc.units[t] = "px"
            })), l.p8.registerPlugin(vt);
            var yt = l.p8.registerPlugin(vt) || l.p8;
            yt.core.Tween
        },
        61504: (t, e, r) => {
            "use strict";
            r.d(e, {
                T4: () => A,
                ll: () => O,
                YR: () => S,
                tT: () => D,
                HC: () => F,
                oZ: () => I,
                $v: () => E,
                IZ: () => B,
                Ds: () => Y,
                qY: () => V,
                g5: () => U
            });
            var n = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                i = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                s = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                a = /(^[#\.][a-z]|[a-y][a-z])/i,
                o = Math.PI / 180,
                u = 180 / Math.PI,
                h = Math.sin,
                l = Math.cos,
                f = Math.abs,
                c = Math.sqrt,
                p = Math.atan2,
                d = 1e8,
                _ = function(t) {
                    return "string" == typeof t
                },
                g = function(t) {
                    return "number" == typeof t
                },
                m = {},
                v = {},
                y = 1e5,
                x = function(t) {
                    return Math.round((t + d) % 1 * y) / y || (t < 0 ? 0 : 1)
                },
                b = function(t) {
                    return Math.round(t * y) / y || 0
                },
                w = function(t) {
                    return Math.round(1e10 * t) / 1e10 || 0
                },
                T = function(t, e, r, n) {
                    var i = t[e],
                        s = 1 === n ? 6 : R(i, r, n);
                    if (s && s + r + 2 < i.length) return t.splice(e, 0, i.slice(0, r + s + 2)), i.splice(0, r + s), 1
                },
                M = function(t, e) {
                    return e.totalLength = t.totalLength, t.samples ? (e.samples = t.samples.slice(0), e.lookup = t.lookup.slice(0), e.minLength = t.minLength, e.resolution = t.resolution) : t.totalPoints && (e.totalPoints = t.totalPoints), e
                },
                P = function(t, e) {
                    var r = t.length,
                        n = t[r - 1] || [],
                        i = n.length;
                    r && e[0] === n[i - 2] && e[1] === n[i - 1] && (e = n.concat(e.slice(2)), r--), t[r] = e
                };

            function A(t) {
                var e, r = (t = _(t) && a.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
                return r && (t = t.getAttribute("d")) ? (r._gsPath || (r._gsPath = {}), (e = r._gsPath[t]) && !e._dirty ? e : r._gsPath[t] = B(t)) : t ? _(t) ? B(t) : g(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
            }

            function O(t) {
                var e, r = 0;
                for (t.reverse(); r < t.length; r += 2) e = t[r], t[r] = t[r + 1], t[r + 1] = e;
                t.reversed = !t.reversed
            }
            var k = {
                rect: "rx,ry,x,y,width,height",
                circle: "r,cx,cy",
                ellipse: "rx,ry,cx,cy",
                line: "x1,x2,y1,y2"
            };

            function S(t, e) {
                var r, n, s, a, o, u, h, l, f, c, p, d, _, g, m, v, y, x, b, w, T, M, P = t.tagName.toLowerCase(),
                    A = .552284749831;
                return "path" !== P && t.getBBox ? (u = function(t, e) {
                    var r, n = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                        i = [].slice.call(t.attributes),
                        s = i.length;
                    for (e = "," + e + ","; --s > -1;) r = i[s].nodeName.toLowerCase(), e.indexOf("," + r + ",") < 0 && n.setAttributeNS(null, r, i[s].nodeValue);
                    return n
                }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), M = function(t, e) {
                    for (var r = e ? e.split(",") : [], n = {}, i = r.length; --i > -1;) n[r[i]] = +t.getAttribute(r[i]) || 0;
                    return n
                }(t, k[P]), "rect" === P ? (a = M.rx, o = M.ry || a, n = M.x, s = M.y, c = M.width - 2 * a, p = M.height - 2 * o, r = a || o ? "M" + (v = (g = (_ = n + a) + c) + a) + "," + (x = s + o) + " V" + (b = x + p) + " C" + [v, w = b + o * A, m = g + a * A, T = b + o, g, T, g - (g - _) / 3, T, _ + (g - _) / 3, T, _, T, d = n + a * (1 - A), T, n, w, n, b, n, b - (b - x) / 3, n, x + (b - x) / 3, n, x, n, y = s + o * (1 - A), d, s, _, s, _ + (g - _) / 3, s, g - (g - _) / 3, s, g, s, m, s, v, y, v, x].join(",") + "z" : "M" + (n + c) + "," + s + " v" + p + " h" + -c + " v" + -p + " h" + c + "z") : "circle" === P || "ellipse" === P ? ("circle" === P ? l = (a = o = M.r) * A : (a = M.rx, l = (o = M.ry) * A), r = "M" + ((n = M.cx) + a) + "," + (s = M.cy) + " C" + [n + a, s + l, n + (h = a * A), s + o, n, s + o, n - h, s + o, n - a, s + l, n - a, s, n - a, s - l, n - h, s - o, n, s - o, n + h, s - o, n + a, s - l, n + a, s].join(",") + "z") : "line" === P ? r = "M" + M.x1 + "," + M.y1 + " L" + M.x2 + "," + M.y2 : "polyline" !== P && "polygon" !== P || (r = "M" + (n = (f = (t.getAttribute("points") + "").match(i) || []).shift()) + "," + (s = f.shift()) + " L" + f.join(","), "polygon" === P && (r += "," + n + "," + s + "z")), u.setAttribute("d", U(u._gsRawPath = B(r))), e && t.parentNode && (t.parentNode.insertBefore(u, t), t.parentNode.removeChild(t)), u) : t
            }

            function C(t, e, r) {
                var n, i = t[e],
                    s = t[e + 2],
                    a = t[e + 4];
                return i += (s - i) * r, i += ((s += (a - s) * r) - i) * r, n = s + (a + (t[e + 6] - a) * r - s) * r - i, i = t[e + 1], i += ((s = t[e + 3]) - i) * r, i += ((s += ((a = t[e + 5]) - s) * r) - i) * r, b(p(s + (a + (t[e + 7] - a) * r - s) * r - i, n) * u)
            }

            function D(t, e, r) {
                r = void 0 === r ? 1 : w(r) || 0, e = w(e) || 0;
                var n = Math.max(0, ~~(f(r - e) - 1e-8)),
                    i = function(t) {
                        for (var e = [], r = 0; r < t.length; r++) e[r] = M(t[r], t[r].slice(0));
                        return M(t, e)
                    }(t);
                if (e > r && (e = 1 - e, r = 1 - r, function(t, e) {
                        var r = t.length;
                        for (t.reverse(); r--;) t[r].reversed || O(t[r])
                    }(i), i.totalLength = 0), e < 0 || r < 0) {
                    var s = Math.abs(~~Math.min(e, r)) + 1;
                    e += s, r += s
                }
                i.totalLength || F(i);
                var a, o, u, h, l, c, p, d, _ = r > 1,
                    g = L(i, e, m, !0),
                    y = L(i, r, v),
                    x = y.segment,
                    b = g.segment,
                    A = y.segIndex,
                    k = g.segIndex,
                    S = y.i,
                    D = g.i,
                    z = k === A,
                    I = S === D && z;
                if (_ || n) {
                    for (a = A < k || z && S < D || I && y.t < g.t, T(i, k, D, g.t) && (k++, a || (A++, I ? (y.t = (y.t - g.t) / (1 - g.t), S = 0) : z && (S -= D))), 1 - (r - e) < 1e-5 ? A = k - 1 : !y.t && A ? A-- : T(i, A, S, y.t) && a && k++, 1 === g.t && (k = (k + 1) % i.length), l = [], p = 1 + (c = i.length) * n, d = k, p += (c - k + A) % c, h = 0; h < p; h++) P(l, i[d++ % c]);
                    i = l
                } else if (u = 1 === y.t ? 6 : R(x, S, y.t), e !== r)
                    for (o = R(b, D, I ? g.t / y.t : g.t), z && (u += o), x.splice(S + u + 2), (o || D) && b.splice(0, D + o), h = i.length; h--;)(h < k || h > A) && i.splice(h, 1);
                else x.angle = C(x, S + u, 0), g = x[S += u], y = x[S + 1], x.length = x.totalLength = 0, x.totalPoints = i.totalPoints = 8, x.push(g, y, g, y, g, y, g, y);
                return i.totalLength = 0, i
            }

            function z(t, e, r) {
                e = e || 0, t.samples || (t.samples = [], t.lookup = []);
                var n, i, s, a, o, u, h, l, p, _, g, m, v, y, x, b, w, T = ~~t.resolution || 12,
                    M = 1 / T,
                    P = r ? e + 6 * r + 1 : t.length,
                    A = t[e],
                    O = t[e + 1],
                    k = e ? e / 6 * T : 0,
                    S = t.samples,
                    C = t.lookup,
                    D = (e ? t.minLength : d) || d,
                    z = S[k + r * T - 1],
                    F = e ? S[k - 1] : 0;
                for (S.length = C.length = 0, i = e + 2; i < P; i += 6) {
                    if (s = t[i + 4] - A, a = t[i + 2] - A, o = t[i] - A, l = t[i + 5] - O, p = t[i + 3] - O, _ = t[i + 1] - O, u = h = g = m = 0, f(s) < 1e-5 && f(l) < 1e-5 && f(o) + f(_) < 1e-5) t.length > 8 && (t.splice(i, 6), i -= 6, P -= 6);
                    else
                        for (n = 1; n <= T; n++) u = h - (h = ((y = M * n) * y * s + 3 * (v = 1 - y) * (y * a + v * o)) * y), g = m - (m = (y * y * l + 3 * v * (y * p + v * _)) * y), (b = c(g * g + u * u)) < D && (D = b), F += b, S[k++] = F;
                    A += s, O += l
                }
                if (z)
                    for (z -= F; k < S.length; k++) S[k] += z;
                if (S.length && D)
                    for (t.totalLength = w = S[S.length - 1] || 0, t.minLength = D, b = x = 0, n = 0; n < w; n += D) C[b++] = S[x] < n ? ++x : x;
                else t.totalLength = S[0] = 0;
                return e ? F - S[e / 2 - 1] : F
            }

            function F(t, e) {
                var r, n, i;
                for (i = r = n = 0; i < t.length; i++) t[i].resolution = ~~e || 12, n += t[i].length, r += z(t[i]);
                return t.totalPoints = n, t.totalLength = r, t
            }

            function R(t, e, r) {
                if (r <= 0 || r >= 1) return 0;
                var n = t[e],
                    i = t[e + 1],
                    s = t[e + 2],
                    a = t[e + 3],
                    o = t[e + 4],
                    u = t[e + 5],
                    h = n + (s - n) * r,
                    l = s + (o - s) * r,
                    f = i + (a - i) * r,
                    c = a + (u - a) * r,
                    p = h + (l - h) * r,
                    d = f + (c - f) * r,
                    _ = o + (t[e + 6] - o) * r,
                    g = u + (t[e + 7] - u) * r;
                return l += (_ - l) * r, c += (g - c) * r, t.splice(e + 2, 4, b(h), b(f), b(p), b(d), b(p + (l - p) * r), b(d + (c - d) * r), b(l), b(c), b(_), b(g)), t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6
            }

            function L(t, e, r, n) {
                r = r || {}, t.totalLength || F(t), (e < 0 || e > 1) && (e = x(e));
                var i, s, a, o, u, h, l, f = 0,
                    c = t[0];
                if (e)
                    if (1 === e) l = 1, h = (c = t[f = t.length - 1]).length - 8;
                    else {
                        if (t.length > 1) {
                            for (a = t.totalLength * e, u = h = 0;
                                (u += t[h++].totalLength) < a;) f = h;
                            e = (a - (o = u - (c = t[f]).totalLength)) / (u - o) || 0
                        }
                        i = c.samples, s = c.resolution, a = c.totalLength * e, o = (h = c.lookup[~~(a / c.minLength)] || 0) ? i[h - 1] : 0, (u = i[h]) < a && (o = u, u = i[++h]), l = 1 / s * ((a - o) / (u - o) + h % s), h = 6 * ~~(h / s), n && 1 === l && (h + 6 < c.length ? (h += 6, l = 0) : f + 1 < t.length && (h = l = 0, c = t[++f]))
                    }
                else l = h = f = 0, c = t[0];
                return r.t = l, r.i = h, r.path = t, r.segment = c, r.segIndex = f, r
            }

            function I(t, e, r, n) {
                var i, s, a, o, u, h, l, f, c, p = t[0],
                    d = n || {};
                if ((e < 0 || e > 1) && (e = x(e)), t.length > 1) {
                    for (a = t.totalLength * e, u = h = 0;
                        (u += t[h++].totalLength) < a;) p = t[h];
                    e = (a - (o = u - p.totalLength)) / (u - o) || 0
                }
                return i = p.samples, s = p.resolution, a = p.totalLength * e, o = (h = p.lookup[e < 1 ? ~~(a / p.minLength) : p.lookup.length - 1] || 0) ? i[h - 1] : 0, (u = i[h]) < a && (o = u, u = i[++h]), c = 1 - (l = 1 / s * ((a - o) / (u - o) + h % s) || 0), f = p[h = 6 * ~~(h / s)], d.x = b((l * l * (p[h + 6] - f) + 3 * c * (l * (p[h + 4] - f) + c * (p[h + 2] - f))) * l + f), d.y = b((l * l * (p[h + 7] - (f = p[h + 1])) + 3 * c * (l * (p[h + 5] - f) + c * (p[h + 3] - f))) * l + f), r && (d.angle = p.totalLength ? C(p, h, l >= 1 ? 1 - 1e-9 : l || 1e-9) : p.angle || 0), d
            }

            function E(t, e, r, n, i, s, a) {
                for (var o, u, h, l, f, c = t.length; --c > -1;)
                    for (u = (o = t[c]).length, h = 0; h < u; h += 2) l = o[h], f = o[h + 1], o[h] = l * e + f * n + s, o[h + 1] = l * r + f * i + a;
                return t._dirty = 1, t
            }

            function N(t, e, r, n, i, s, a, u, p) {
                if (t !== u || e !== p) {
                    r = f(r), n = f(n);
                    var d = i % 360 * o,
                        _ = l(d),
                        g = h(d),
                        m = Math.PI,
                        v = 2 * m,
                        y = (t - u) / 2,
                        x = (e - p) / 2,
                        b = _ * y + g * x,
                        w = -g * y + _ * x,
                        T = b * b,
                        M = w * w,
                        P = T / (r * r) + M / (n * n);
                    P > 1 && (r = c(P) * r, n = c(P) * n);
                    var A = r * r,
                        O = n * n,
                        k = (A * O - A * M - O * T) / (A * M + O * T);
                    k < 0 && (k = 0);
                    var S = (s === a ? -1 : 1) * c(k),
                        C = S * (r * w / n),
                        D = S * (-n * b / r),
                        z = (t + u) / 2 + (_ * C - g * D),
                        F = (e + p) / 2 + (g * C + _ * D),
                        R = (b - C) / r,
                        L = (w - D) / n,
                        I = (-b - C) / r,
                        E = (-w - D) / n,
                        N = R * R + L * L,
                        B = (L < 0 ? -1 : 1) * Math.acos(R / c(N)),
                        Y = (R * E - L * I < 0 ? -1 : 1) * Math.acos((R * I + L * E) / c(N * (I * I + E * E)));
                    isNaN(Y) && (Y = m), !a && Y > 0 ? Y -= v : a && Y < 0 && (Y += v), B %= v, Y %= v;
                    var V, U = Math.ceil(f(Y) / (v / 4)),
                        X = [],
                        q = Y / U,
                        j = 4 / 3 * h(q / 2) / (1 + l(q / 2)),
                        G = _ * r,
                        W = g * r,
                        Z = g * -n,
                        H = _ * n;
                    for (V = 0; V < U; V++) b = l(i = B + V * q), w = h(i), R = l(i += q), L = h(i), X.push(b - j * w, w + j * b, R + j * L, L - j * R, R, L);
                    for (V = 0; V < X.length; V += 2) b = X[V], w = X[V + 1], X[V] = b * G + w * Z + z, X[V + 1] = b * W + w * H + F;
                    return X[V - 2] = u, X[V - 1] = p, X
                }
            }

            function B(t) {
                var e, r, i, a, o, u, h, l, c, p, d, _, g, m, v, y = (t + "").replace(s, (function(t) {
                        var e = +t;
                        return e < 1e-4 && e > -1e-4 ? 0 : e
                    })).match(n) || [],
                    x = [],
                    b = 0,
                    w = 0,
                    T = 2 / 3,
                    M = y.length,
                    P = 0,
                    A = "ERROR: malformed path: " + t,
                    O = function(t, e, r, n) {
                        p = (r - t) / 3, d = (n - e) / 3, h.push(t + p, e + d, r - p, n - d, r, n)
                    };
                if (!t || !isNaN(y[0]) || isNaN(y[1])) return console.log(A), x;
                for (e = 0; e < M; e++)
                    if (g = o, isNaN(y[e]) ? u = (o = y[e].toUpperCase()) !== y[e] : e--, i = +y[e + 1], a = +y[e + 2], u && (i += b, a += w), e || (l = i, c = a), "M" === o) h && (h.length < 8 ? x.length -= 1 : P += h.length), b = l = i, w = c = a, h = [i, a], x.push(h), e += 2, o = "L";
                    else if ("C" === o) h || (h = [0, 0]), u || (b = w = 0), h.push(i, a, b + 1 * y[e + 3], w + 1 * y[e + 4], b += 1 * y[e + 5], w += 1 * y[e + 6]), e += 6;
                else if ("S" === o) p = b, d = w, "C" !== g && "S" !== g || (p += b - h[h.length - 4], d += w - h[h.length - 3]), u || (b = w = 0), h.push(p, d, i, a, b += 1 * y[e + 3], w += 1 * y[e + 4]), e += 4;
                else if ("Q" === o) p = b + (i - b) * T, d = w + (a - w) * T, u || (b = w = 0), b += 1 * y[e + 3], w += 1 * y[e + 4], h.push(p, d, b + (i - b) * T, w + (a - w) * T, b, w), e += 4;
                else if ("T" === o) p = b - h[h.length - 4], d = w - h[h.length - 3], h.push(b + p, w + d, i + (b + 1.5 * p - i) * T, a + (w + 1.5 * d - a) * T, b = i, w = a), e += 2;
                else if ("H" === o) O(b, w, b = i, w), e += 1;
                else if ("V" === o) O(b, w, b, w = i + (u ? w - b : 0)), e += 1;
                else if ("L" === o || "Z" === o) "Z" === o && (i = l, a = c, h.closed = !0), ("L" === o || f(b - i) > .5 || f(w - a) > .5) && (O(b, w, i, a), "L" === o && (e += 2)), b = i, w = a;
                else if ("A" === o) {
                    if (m = y[e + 4], v = y[e + 5], p = y[e + 6], d = y[e + 7], r = 7, m.length > 1 && (m.length < 3 ? (d = p, p = v, r--) : (d = v, p = m.substr(2), r -= 2), v = m.charAt(1), m = m.charAt(0)), _ = N(b, w, +y[e + 1], +y[e + 2], +y[e + 3], +m, +v, (u ? b : 0) + 1 * p, (u ? w : 0) + 1 * d), e += r, _)
                        for (r = 0; r < _.length; r++) h.push(_[r]);
                    b = h[h.length - 2], w = h[h.length - 1]
                } else console.log(A);
                return (e = h.length) < 6 ? (x.pop(), e = 0) : h[0] === h[e - 2] && h[1] === h[e - 1] && (h.closed = !0), x.totalPoints = P + e, x
            }

            function Y(t, e) {
                void 0 === e && (e = 1);
                for (var r = t[0], n = 0, i = [r, n], s = 2; s < t.length; s += 2) i.push(r, n, t[s], n = (t[s] - r) * e / 2, r = t[s], -n);
                return i
            }

            function V(t, e, r) {
                f(t[0] - t[2]) < 1e-4 && f(t[1] - t[3]) < 1e-4 && (t = t.slice(2));
                var n, i, s, a, o, u, d, _, g, m, v, y, x, w, T = t.length - 2,
                    M = +t[0],
                    P = +t[1],
                    A = +t[2],
                    O = +t[3],
                    k = [M, P, M, P],
                    S = A - M,
                    C = O - P,
                    D = Math.abs(t[T] - M) < .001 && Math.abs(t[T + 1] - P) < .001;
                for (isNaN(r) && (r = Math.PI / 10), D && (t.push(A, O), A = M, O = P, M = t[T - 2], P = t[T - 1], t.unshift(M, P), T += 4), e = e || 0 === e ? +e : 1, o = 2; o < T; o += 2) n = M, i = P, M = A, P = O, A = +t[o + 2], O = +t[o + 3], M === A && P === O || (y = (u = S) * u + (_ = C) * _, x = (S = A - M) * S + (C = O - P) * C, w = (d = A - n) * d + (g = O - i) * g, v = (s = Math.acos((y + x - w) / c(4 * y * x))) / Math.PI * e, m = c(y) * v, v *= c(x), M === n && P === i || (s > r ? (a = p(g, d), k.push(b(M - l(a) * m), b(P - h(a) * m), b(M), b(P), b(M + l(a) * v), b(P + h(a) * v))) : (a = p(_, u), k.push(b(M - l(a) * m), b(P - h(a) * m)), a = p(C, S), k.push(b(M), b(P), b(M + l(a) * v), b(P + h(a) * v)))));
                return M !== A || P !== O || k.length < 4 ? k.push(b(A), b(O), b(A), b(O)) : k.length -= 2, D && (k.splice(0, 6), k.length = k.length - 6), k
            }

            function U(t) {
                g(t[0]) && (t = [t]);
                var e, r, n, i, s = "",
                    a = t.length;
                for (r = 0; r < a; r++) {
                    for (i = t[r], s += "M" + b(i[0]) + "," + b(i[1]) + " C", e = i.length, n = 2; n < e; n++) s += b(i[n++]) + "," + b(i[n++]) + " " + b(i[n++]) + "," + b(i[n++]) + " " + b(i[n++]) + "," + b(i[n]) + " ";
                    i.closed && (s += "z")
                }
                return s
            }
        }
    }
]);
//# sourceMappingURL=sourcemaps/1978.eea835c18a16bd2a0798.js.map