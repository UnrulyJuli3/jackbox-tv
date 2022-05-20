(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [4442], {
        44442: (t, e, i) => {
            "use strict";
            i.d(e, {
                S1: () => c,
                o_: () => r,
                Sy: () => a,
                DX: () => m,
                hg: () => k,
                cx: () => w,
                j: () => O,
                Zw: () => D,
                gr: () => R,
                tN: () => Y,
                jy: () => H
            });
            let h, s, n = {};

            function o(t) {
                for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), h = 1; h < e; h++) i[h - 1] = arguments[h];
                n[t] && n[t].map((t => t(...i)))
            }

            function r() {
                return h
            }

            function a() {
                return s
            }

            function c(t) {
                if (h = document.getElementById(t) || t || document.querySelector("canvas"), !h) throw Error("You must provide a canvas element for the game");
                return s = h.getContext("2d"), s.imageSmoothingEnabled = !1, o("init"), {
                    canvas: h,
                    context: s
                }
            }
            class d {
                constructor() {
                    let {
                        spriteSheet: t,
                        frames: e,
                        frameRate: i,
                        loop: h = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.spriteSheet = t, this.frames = e, this.frameRate = i, this.loop = h;
                    let {
                        width: s,
                        height: n,
                        margin: o = 0
                    } = t.frame;
                    this.width = s, this.height = n, this.margin = o, this._f = 0, this._a = 0
                }
                clone() {
                    return l(this)
                }
                reset() {
                    this._f = 0, this._a = 0
                }
                update() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 60;
                    if (this.loop || this._f != this.frames.length - 1)
                        for (this._a += t; this._a * this.frameRate >= 1;) this._f = ++this._f % this.frames.length, this._a -= 1 / this.frameRate
                }
                render() {
                    let {
                        x: t,
                        y: e,
                        width: i = this.width,
                        height: h = this.height,
                        context: s = a()
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.frames[this._f] / this.spriteSheet._f | 0, o = this.frames[this._f] % this.spriteSheet._f | 0;
                    s.drawImage(this.spriteSheet.image, o * this.width + (2 * o + 1) * this.margin, n * this.height + (2 * n + 1) * this.margin, this.width, this.height, t, e, i, h)
                }
            }

            function l(t) {
                return new d(t)
            }
            l.prototype = d.prototype, l.class = d, new WeakMap;
            const u = () => {};

            function f() {
                let t = r();
                a().clearRect(0, 0, t.width, t.height)
            }

            function m() {
                let {
                    fps: t = 60,
                    clearCanvas: e = !0,
                    update: i,
                    render: h
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!i || !h) throw Error("You must provide update() and render() functions");
                let s, n, r, a, c, d = 0,
                    l = 1e3 / t,
                    m = 1 / t,
                    g = e ? f : u;
                const p = window.performance || Date;

                function _() {
                    if (n = requestAnimationFrame(_), r = p.now(), a = r - s, s = r, !(a > 1e3)) {
                        for (o("tick"), d += a; d >= l;) c.update(m), d -= l;
                        g(), c.render()
                    }
                }
                return c = {
                    update: i,
                    render: h,
                    isStopped: !0,
                    start() {
                        s = p.now(), this.isStopped = !1, requestAnimationFrame(_)
                    },
                    stop() {
                        this.isStopped = !0, cancelAnimationFrame(n)
                    },
                    _frame: _,
                    set _last(t) {
                        s = t
                    }
                }, c
            }
            let g = [],
                p = [],
                _ = {},
                x = [],
                y = {},
                v = {
                    0: "left",
                    1: "middle",
                    2: "right"
                },
                w = {
                    x: 0,
                    y: 0,
                    radius: 5
                };

            function b(t, e) {
                const i = e || w;
                let h = t.x,
                    s = t.y;
                t.anchor && (h -= t.width * t.anchor.x, s -= t.height * t.anchor.y);
                let n = i.x - Math.max(h, Math.min(i.x, h + t.width)),
                    o = i.y - Math.max(s, Math.min(i.y, s + t.height));
                return n * n + o * o < i.radius * i.radius
            }

            function A(t) {
                const e = t || w;
                let i, h, s = p.length ? p : g;
                for (let t = s.length - 1; t >= 0; t--)
                    if (i = s[t], h = i.collidesWithPointer ? i.collidesWithPointer(e) : b(i, e), h) return i
            }

            function E(t) {
                let e = void 0 !== t.button ? v[t.button] : "left";
                y[e] = !0, z(t, "onDown")
            }

            function j(t) {
                let e = void 0 !== t.button ? v[t.button] : "left";
                y[e] = !1, z(t, "onUp")
            }

            function S(t) {
                z(t, "onOver")
            }

            function L() {
                y = {}
            }

            function z(t, e) {
                let i, h, s = r();
                if (!s) return;
                let n = s.height / s.offsetHeight,
                    o = s.getBoundingClientRect(),
                    a = -1 !== ["touchstart", "touchmove", "touchend"].indexOf(t.type);
                if (a) {
                    w.touches = {};
                    for (var c = 0; c < t.touches.length; c++) w.touches[t.touches[c].identifier] = {
                        id: t.touches[c].identifier,
                        x: (t.touches[c].clientX - o.left) * n,
                        y: (t.touches[c].clientY - o.top) * n,
                        changed: !1
                    };
                    for (c = t.changedTouches.length; c--;) {
                        const s = t.changedTouches[c].identifier;
                        void 0 !== w.touches[s] && (w.touches[s].changed = !0), i = t.changedTouches[c].clientX, h = t.changedTouches[c].clientY, w.x = (i - o.left) * n, w.y = (h - o.top) * n;
                        let r = A({
                            id: s,
                            x: (i - o.left) * n,
                            y: (h - o.top) * n,
                            radius: w.radius
                        });
                        r && r[e] && r[e](t), _[e] && _[e](t, r)
                    }
                } else i = t.clientX, h = t.clientY, w.x = (i - o.left) * n, w.y = (h - o.top) * n;
                if (t.preventDefault(), !a) {
                    let i = A();
                    i && i[e] && i[e](t), _[e] && _[e](t, i)
                }
            }

            function M() {
                p.length = 0, g.map((t => {
                    p.push(t)
                })), g.length = 0
            }

            function k() {
                let t = r();
                var e, i;
                t.removeEventListener("mousedown", E), t.removeEventListener("touchstart", E), t.removeEventListener("mouseup", j), t.removeEventListener("touchend", j), t.removeEventListener("touchcancel", j), t.removeEventListener("blur", L), t.removeEventListener("mousemove", S), t.removeEventListener("touchmove", S), t.addEventListener("mousedown", E), t.addEventListener("touchstart", E), t.addEventListener("mouseup", j), t.addEventListener("touchend", j), t.addEventListener("touchcancel", j), t.addEventListener("blur", L), t.addEventListener("mousemove", S), t.addEventListener("touchmove", S),
                    function(t, e) {
                        let i;
                        !n[t] || (i = n[t].indexOf(e)) < 0 || n[t].splice(i, 1)
                    }("tick", M), i = M, n[e = "tick"] = n[e] || [], n[e].push(i)
            }

            function O(t) {
                [].concat(t).map((t => {
                    t._r || (t._r = t.render, t.render = function() {
                        g.push(this), this._r()
                    }, x.push(t))
                }))
            }

            function D(t) {
                [].concat(t).map((t => {
                    t.render = t._r, t._r = 0;
                    let e = x.indexOf(t); - 1 !== e && x.splice(e, 1)
                }))
            }

            function R(t) {
                return !!x.includes(t) && A() === t
            }

            function Y(t) {
                return !!y[t]
            }
            class X {
                constructor() {
                    let t, {
                        create: e,
                        maxSize: i = 1024
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!e || !(t = e()) || !(t.update && t.init && t.isAlive)) throw Error("Must provide create() function which returns an object with init(), update(), and isAlive() functions");
                    this._c = e, this.objects = [e()], this.size = 0, this.maxSize = i
                }
                get() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.size === this.objects.length) {
                        if (this.size === this.maxSize) return;
                        for (let t = 0; t < this.size && this.objects.length < this.maxSize; t++) this.objects.push(this._c())
                    }
                    let e = this.objects[this.size];
                    return this.size++, e.init(t), e
                }
                getAliveObjects() {
                    return this.objects.slice(0, this.size)
                }
                clear() {
                    this.size = this.objects.length = 0, this.objects.push(this._c())
                }
                update(t) {
                    let e, i = !1;
                    for (let h = this.size; h--;) e = this.objects[h], e.update(t), e.isAlive() || (i = !0, this.size--);
                    i && this.objects.sort(((t, e) => e.isAlive() - t.isAlive()))
                }
                render() {
                    for (let t = this.size; t--;) this.objects[t].render()
                }
            }

            function C(t) {
                return new X(t)
            }

            function W(t, e) {
                let i = [],
                    h = e.x + e.width / 2,
                    s = e.y + e.height / 2,
                    n = t.y < s && t.y + t.height >= e.y,
                    o = t.y + t.height >= s && t.y < e.y + e.height;
                return t.x < h && t.x + t.width >= e.x && (n && i.push(0), o && i.push(2)), t.x + t.width >= h && t.x < e.x + e.width && (n && i.push(1), o && i.push(3)), i
            }
            C.prototype = X.prototype, C.class = X;
            class I {
                constructor() {
                    let {
                        maxDepth: t = 3,
                        maxObjects: e = 25,
                        bounds: i
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.maxDepth = t, this.maxObjects = e;
                    let h = r();
                    this.bounds = i || {
                        x: 0,
                        y: 0,
                        width: h.width,
                        height: h.height
                    }, this._b = !1, this._d = 0, this._o = [], this._s = [], this._p = null
                }
                clear() {
                    this._s.map((function(t) {
                        t.clear()
                    })), this._b = !1, this._o.length = 0
                }
                get(t) {
                    let e, i, h = new Set;
                    for (; this._s.length && this._b;) {
                        for (e = W(t, this.bounds), i = 0; i < e.length; i++) this._s[e[i]].get(t).forEach((t => h.add(t)));
                        return Array.from(h)
                    }
                    return this._o.filter((e => e !== t))
                }
                add() {
                    let t, e, i, h;
                    for (e = 0; e < arguments.length; e++)
                        if (i = arguments[e], Array.isArray(i)) this.add.apply(this, i);
                        else if (this._b) this._a(i);
                    else if (this._o.push(i), this._o.length > this.maxObjects && this._d < this.maxDepth) {
                        for (this._sp(), t = 0; h = this._o[t]; t++) this._a(h);
                        this._o.length = 0
                    }
                }
                _a(t, e, i) {
                    for (e = W(t, this.bounds), i = 0; i < e.length; i++) this._s[e[i]].add(t)
                }
                _sp(t, e, i) {
                    if (this._b = !0, !this._s.length)
                        for (t = this.bounds.width / 2 | 0, e = this.bounds.height / 2 | 0, i = 0; i < 4; i++) this._s[i] = T({
                            bounds: {
                                x: this.bounds.x + (i % 2 == 1 ? t : 0),
                                y: this.bounds.y + (i >= 2 ? e : 0),
                                width: t,
                                height: e
                            },
                            maxDepth: this.maxDepth,
                            maxObjects: this.maxObjects
                        }), this._s[i]._d = this._d + 1, this._s[i]._p = this
                }
            }

            function T(t) {
                return new I(t)
            }
            T.prototype = I.prototype, T.class = I;
            class q {
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this._x = t, this._y = e
                }
                add(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return F(this.x + (t.x || 0) * e, this.y + (t.y || 0) * e, this)
                }
                clamp(t, e, i, h) {
                    this._c = !0, this._a = t, this._b = e, this._d = i, this._e = h
                }
                get x() {
                    return this._x
                }
                get y() {
                    return this._y
                }
                set x(t) {
                    this._x = this._c ? Math.min(Math.max(this._a, t), this._d) : t
                }
                set y(t) {
                    this._y = this._c ? Math.min(Math.max(this._b, t), this._e) : t
                }
            }

            function F(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    h = new q(t, e);
                return i._c && (h.clamp(i._a, i._b, i._d, i._e), h.x = t, h.y = e), h
            }
            F.prototype = q.prototype, F.class = q;
            class B {
                constructor(t) {
                    this.init(t)
                }
                init() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        {
                            x: e,
                            y: i,
                            dx: h,
                            dy: s,
                            ddx: n,
                            ddy: o,
                            width: r,
                            height: c,
                            image: d
                        } = t;
                    this.position = F(e, i), this.velocity = F(h, s), this.acceleration = F(n, o), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
                        x: 0,
                        y: 0
                    }, this.context = a();
                    for (let e in t) this[e] = t[e];
                    d && (this.width = void 0 !== r ? r : d.width, this.height = void 0 !== c ? c : d.height), this.sx = 0, this.sy = 0
                }
                get x() {
                    return this.position.x
                }
                get y() {
                    return this.position.y
                }
                get dx() {
                    return this.velocity.x
                }
                get dy() {
                    return this.velocity.y
                }
                get ddx() {
                    return this.acceleration.x
                }
                get ddy() {
                    return this.acceleration.y
                }
                get animations() {
                    return this._a
                }
                get viewX() {
                    return this.x - this.sx
                }
                get viewY() {
                    return this.y - this.sy
                }
                get width() {
                    return this._w
                }
                get height() {
                    return this._h
                }
                set x(t) {
                    this.position.x = t
                }
                set y(t) {
                    this.position.y = t
                }
                set dx(t) {
                    this.velocity.x = t
                }
                set dy(t) {
                    this.velocity.y = t
                }
                set ddx(t) {
                    this.acceleration.x = t
                }
                set ddy(t) {
                    this.acceleration.y = t
                }
                set animations(t) {
                    let e, i;
                    for (e in this._a = {}, t) this._a[e] = t[e].clone(), i = i || this._a[e];
                    this.currentAnimation = i, this.width = this.width || i.width, this.height = this.height || i.height
                }
                set viewX(t) {}
                set viewY(t) {}
                set width(t) {
                    let e = t < 0 ? -1 : 1;
                    this._fx = e, this._w = t * e
                }
                set height(t) {
                    let e = t < 0 ? -1 : 1;
                    this._fy = e, this._h = t * e
                }
                isAlive() {
                    return this.ttl > 0
                }
                collidesWith(t) {
                    if (this.rotation || t.rotation) return null;
                    let e = this.x - this.width * this.anchor.x,
                        i = this.y - this.height * this.anchor.y,
                        h = t.x,
                        s = t.y;
                    return t.anchor && (h -= t.width * t.anchor.x, s -= t.height * t.anchor.y), e < h + t.width && e + this.width > h && i < s + t.height && i + this.height > s
                }
                update(t) {
                    this.advance(t)
                }
                render() {
                    this.draw()
                }
                playAnimation(t) {
                    this.currentAnimation = this.animations[t], this.currentAnimation.loop || this.currentAnimation.reset()
                }
                advance(t) {
                    this.velocity = this.velocity.add(this.acceleration, t), this.position = this.position.add(this.velocity, t), this.ttl--, this.currentAnimation && this.currentAnimation.update(t)
                }
                draw() {
                    let t = -this.width * this.anchor.x,
                        e = -this.height * this.anchor.y;
                    if (this.context.save(), this.context.translate(this.viewX, this.viewY), this.rotation && this.context.rotate(this.rotation), -1 == this._fx || -1 == this._fy) {
                        let i = this.width / 2 + t,
                            h = this.height / 2 + e;
                        this.context.translate(i, h), this.context.scale(this._fx, this._fy), this.context.translate(-i, -h)
                    }
                    this.image ? this.context.drawImage(this.image, t, e, this.width, this.height) : this.currentAnimation ? this.currentAnimation.render({
                        x: t,
                        y: e,
                        width: this.width,
                        height: this.height,
                        context: this.context
                    }) : (this.context.fillStyle = this.color, this.context.fillRect(t, e, this.width, this.height)), this.context.restore()
                }
            }

            function H(t) {
                return new B(t)
            }

            function P(t) {
                if (+t === t) return t;
                let e = [],
                    i = t.split(".."),
                    h = +i[0],
                    s = +i[1],
                    n = h;
                if (h < s)
                    for (; n <= s; n++) e.push(n);
                else
                    for (; n >= s; n--) e.push(n);
                return e
            }
            H.prototype = B.prototype, H.class = B;
            class N {
                constructor() {
                    let {
                        image: t,
                        frameWidth: e,
                        frameHeight: i,
                        frameMargin: h,
                        animations: s
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!t) throw Error("You must provide an Image for the SpriteSheet");
                    this.animations = {}, this.image = t, this.frame = {
                        width: e,
                        height: i,
                        margin: h
                    }, this._f = t.width / e | 0, this.createAnimations(s)
                }
                createAnimations(t) {
                    let e, i;
                    for (i in t) {
                        let {
                            frames: h,
                            frameRate: s,
                            loop: n
                        } = t[i];
                        if (e = [], void 0 === h) throw Error("Animation " + i + " must provide a frames property");
                        [].concat(h).map((t => {
                            e = e.concat(P(t))
                        })), this.animations[i] = l({
                            spriteSheet: this,
                            frames: e,
                            frameRate: s,
                            loop: n
                        })
                    }
                }
            }

            function U(t) {
                return new N(t)
            }
            U.prototype = N.prototype, U.class = N
        }
    }
]);
//# sourceMappingURL=sourcemaps/4442.3b27229aa246df0fd7b8.js.map