(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [2601], {
        94166: (t, e) => {
            var n, o = function(t) {
                var e = {
                    addEvent: function(t, e, n, o) {
                        t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && (t["e" + e + n] = n, t[e + n] = function() {
                            t["e" + e + n](window.event, o)
                        }, t.attachEvent("on" + e, t[e + n]))
                    },
                    removeEvent: function(t, e, n) {
                        t.removeEventListener ? t.removeEventListener(e, n) : t.attachEvent && t.detachEvent(e)
                    },
                    input: "",
                    pattern: "38384040373937396665",
                    keydownHandler: function(t, n) {
                        if (n && (e = n), e.input += t ? t.keyCode : event.keyCode, e.input.length > e.pattern.length && (e.input = e.input.substr(e.input.length - e.pattern.length)), e.input === e.pattern) return e.code(e._currentLink), e.input = "", t.preventDefault(), !1
                    },
                    load: function(t) {
                        this._currentLink = t, this.addEvent(document, "keydown", this.keydownHandler, this), this.iphone.load(t)
                    },
                    unload: function() {
                        this.removeEvent(document, "keydown", this.keydownHandler), this.iphone.unload()
                    },
                    code: function(t) {
                        window.location = t
                    },
                    iphone: {
                        start_x: 0,
                        start_y: 0,
                        stop_x: 0,
                        stop_y: 0,
                        tap: !1,
                        capture: !1,
                        orig_keys: "",
                        keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
                        input: [],
                        code: function(t) {
                            e.code(t)
                        },
                        touchmoveHandler: function(t) {
                            if (1 === t.touches.length && !0 === e.iphone.capture) {
                                var n = t.touches[0];
                                e.iphone.stop_x = n.pageX, e.iphone.stop_y = n.pageY, e.iphone.tap = !1, e.iphone.capture = !1, e.iphone.check_direction()
                            }
                        },
                        touchendHandler: function() {
                            if (e.iphone.input.push(e.iphone.check_direction()), e.iphone.input.length > e.iphone.keys.length && e.iphone.input.shift(), e.iphone.input.length === e.iphone.keys.length) {
                                for (var t = !0, n = 0; n < e.iphone.keys.length; n++) e.iphone.input[n] !== e.iphone.keys[n] && (t = !1);
                                t && e.iphone.code(e._currentLink)
                            }
                        },
                        touchstartHandler: function(t) {
                            e.iphone.start_x = t.changedTouches[0].pageX, e.iphone.start_y = t.changedTouches[0].pageY, e.iphone.tap = !0, e.iphone.capture = !0
                        },
                        load: function(t) {
                            this.orig_keys = this.keys, e.addEvent(document, "touchmove", this.touchmoveHandler), e.addEvent(document, "touchend", this.touchendHandler, !1), e.addEvent(document, "touchstart", this.touchstartHandler)
                        },
                        unload: function() {
                            e.removeEvent(document, "touchmove", this.touchmoveHandler), e.removeEvent(document, "touchend", this.touchendHandler), e.removeEvent(document, "touchstart", this.touchstartHandler)
                        },
                        check_direction: function() {
                            return x_magnitude = Math.abs(this.start_x - this.stop_x), y_magnitude = Math.abs(this.start_y - this.stop_y), x = this.start_x - this.stop_x < 0 ? "RIGHT" : "LEFT", y = this.start_y - this.stop_y < 0 ? "DOWN" : "UP", result = x_magnitude > y_magnitude ? x : y, result = !0 === this.tap ? "TAP" : result, result
                        }
                    }
                };
                return "string" == typeof t && e.load(t), "function" == typeof t && (e.code = t, e.load()), e
            };
            void 0 !== t.exports ? t.exports = o : void 0 === (n = function() {
                return o
            }.apply(e, [])) || (t.exports = n)
        },
        96874: t => {
            t.exports = function(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            }
        },
        94311: (t, e, n) => {
            var o = n(69877);
            t.exports = function(t) {
                var e = t.length;
                return e ? t[o(0, e - 1)] : void 0
            }
        },
        86556: (t, e, n) => {
            var o = n(89465),
                i = n(77813);
            t.exports = function(t, e, n) {
                (void 0 !== n && !i(t[e], n) || void 0 === n && !(e in t)) && o(t, e, n)
            }
        },
        28483: (t, e, n) => {
            var o = n(25063)();
            t.exports = o
        },
        42980: (t, e, n) => {
            var o = n(46384),
                i = n(86556),
                s = n(28483),
                r = n(59783),
                a = n(13218),
                c = n(81704),
                l = n(36390);
            t.exports = function t(e, n, u, p, d) {
                e !== n && s(n, (function(s, c) {
                    if (d || (d = new o), a(s)) r(e, n, c, u, t, p, d);
                    else {
                        var h = p ? p(l(e, c), s, c + "", e, n, d) : void 0;
                        void 0 === h && (h = s), i(e, c, h)
                    }
                }), c)
            }
        },
        59783: (t, e, n) => {
            var o = n(86556),
                i = n(64626),
                s = n(77133),
                r = n(278),
                a = n(38517),
                c = n(35694),
                l = n(1469),
                u = n(29246),
                p = n(44144),
                d = n(23560),
                h = n(13218),
                v = n(68630),
                f = n(36719),
                T = n(36390),
                m = n(59881);
            t.exports = function(t, e, n, y, E, g, x) {
                var _ = T(t, n),
                    C = T(e, n),
                    w = x.get(C);
                if (w) o(t, n, w);
                else {
                    var N = g ? g(_, C, n + "", t, e, x) : void 0,
                        k = void 0 === N;
                    if (k) {
                        var b = l(C),
                            O = !b && p(C),
                            $ = !b && !O && f(C);
                        N = C, b || O || $ ? l(_) ? N = _ : u(_) ? N = r(_) : O ? (k = !1, N = i(C, !0)) : $ ? (k = !1, N = s(C, !0)) : N = [] : v(C) || c(C) ? (N = _, c(_) ? N = m(_) : h(_) && !d(_) || (N = a(C))) : k = !1
                    }
                    k && (x.set(C, N), E(N, C, y, g, x), x.delete(C)), o(t, n, N)
                }
            }
        },
        69877: t => {
            var e = Math.floor,
                n = Math.random;
            t.exports = function(t, o) {
                return t + e(n() * (o - t + 1))
            }
        },
        5976: (t, e, n) => {
            var o = n(6557),
                i = n(45357),
                s = n(30061);
            t.exports = function(t, e) {
                return s(i(t, e, o), t + "")
            }
        },
        84992: (t, e, n) => {
            var o = n(94311),
                i = n(52628);
            t.exports = function(t) {
                return o(i(t))
            }
        },
        56560: (t, e, n) => {
            var o = n(75703),
                i = n(38777),
                s = n(6557),
                r = i ? function(t, e) {
                    return i(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: o(e),
                        writable: !0
                    })
                } : s;
            t.exports = r
        },
        47415: (t, e, n) => {
            var o = n(29932);
            t.exports = function(t, e) {
                return o(e, (function(e) {
                    return t[e]
                }))
            }
        },
        21463: (t, e, n) => {
            var o = n(5976),
                i = n(16612);
            t.exports = function(t) {
                return o((function(e, n) {
                    var o = -1,
                        s = n.length,
                        r = s > 1 ? n[s - 1] : void 0,
                        a = s > 2 ? n[2] : void 0;
                    for (r = t.length > 3 && "function" == typeof r ? (s--, r) : void 0, a && i(n[0], n[1], a) && (r = s < 3 ? void 0 : r, s = 1), e = Object(e); ++o < s;) {
                        var c = n[o];
                        c && t(e, c, o, r)
                    }
                    return e
                }))
            }
        },
        25063: t => {
            t.exports = function(t) {
                return function(e, n, o) {
                    for (var i = -1, s = Object(e), r = o(e), a = r.length; a--;) {
                        var c = r[t ? a : ++i];
                        if (!1 === n(s[c], c, s)) break
                    }
                    return e
                }
            }
        },
        16612: (t, e, n) => {
            var o = n(77813),
                i = n(98612),
                s = n(65776),
                r = n(13218);
            t.exports = function(t, e, n) {
                if (!r(n)) return !1;
                var a = typeof e;
                return !!("number" == a ? i(n) && s(e, n.length) : "string" == a && e in n) && o(n[e], t)
            }
        },
        45357: (t, e, n) => {
            var o = n(96874),
                i = Math.max;
            t.exports = function(t, e, n) {
                return e = i(void 0 === e ? t.length - 1 : e, 0),
                    function() {
                        for (var s = arguments, r = -1, a = i(s.length - e, 0), c = Array(a); ++r < a;) c[r] = s[e + r];
                        r = -1;
                        for (var l = Array(e + 1); ++r < e;) l[r] = s[r];
                        return l[e] = n(c), o(t, this, l)
                    }
            }
        },
        36390: t => {
            t.exports = function(t, e) {
                if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
            }
        },
        30061: (t, e, n) => {
            var o = n(56560),
                i = n(21275)(o);
            t.exports = i
        },
        21275: t => {
            var e = Date.now;
            t.exports = function(t) {
                var n = 0,
                    o = 0;
                return function() {
                    var i = e(),
                        s = 16 - (i - o);
                    if (o = i, s > 0) {
                        if (++n >= 800) return arguments[0]
                    } else n = 0;
                    return t.apply(void 0, arguments)
                }
            }
        },
        75703: t => {
            t.exports = function(t) {
                return function() {
                    return t
                }
            }
        },
        6557: t => {
            t.exports = function(t) {
                return t
            }
        },
        29246: (t, e, n) => {
            var o = n(98612),
                i = n(37005);
            t.exports = function(t) {
                return i(t) && o(t)
            }
        },
        68630: (t, e, n) => {
            var o = n(44239),
                i = n(85924),
                s = n(37005),
                r = Function.prototype,
                a = Object.prototype,
                c = r.toString,
                l = a.hasOwnProperty,
                u = c.call(Object);
            t.exports = function(t) {
                if (!s(t) || "[object Object]" != o(t)) return !1;
                var e = i(t);
                if (null === e) return !0;
                var n = l.call(e, "constructor") && e.constructor;
                return "function" == typeof n && n instanceof n && c.call(n) == u
            }
        },
        82492: (t, e, n) => {
            var o = n(42980),
                i = n(21463)((function(t, e, n) {
                    o(t, e, n)
                }));
            t.exports = i
        },
        95534: (t, e, n) => {
            var o = n(94311),
                i = n(84992),
                s = n(1469);
            t.exports = function(t) {
                return (s(t) ? o : i)(t)
            }
        },
        59881: (t, e, n) => {
            var o = n(98363),
                i = n(81704);
            t.exports = function(t) {
                return o(t, i(t))
            }
        },
        52628: (t, e, n) => {
            var o = n(47415),
                i = n(3674);
            t.exports = function(t) {
                return null == t ? [] : o(t, i(t))
            }
        },
        82601: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                load: () => Y
            });
            var o = n(94166),
                i = n.n(o),
                s = n(2934),
                r = n.n(s),
                a = n(37432),
                c = n.n(a),
                l = n(82492),
                u = n.n(l),
                p = n(70236),
                d = n(35029),
                h = n(21944),
                v = n(47865),
                f = n(54905),
                T = n(45222),
                m = n(65835),
                y = n(95534),
                E = n.n(y);

            function g(t, e) {
                const n = t.$t(e);
                return Array.isArray(n) || console.warn(`[i18nPlugin] Translation with key ${e} is not an array`), E()(n)
            }
            const x = {
                install(t) {
                    t.directive("ts", ((t, e, n) => {
                        const o = g(n.context, e.value);
                        t.textContent = o || ""
                    })), t.prototype.$ts = function(t) {
                        return g(this, t) || ""
                    }
                }
            };
            var _ = n(35271),
                C = n(89768),
                w = n(65853),
                N = n(99159),
                k = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "text-descriptions",
                        attrs: {
                            role: "log",
                            "aria-atomic": "false",
                            "aria-relevant": "additions",
                            "aria-live": "polite"
                        }
                    }, t._l(t.lines, (function(e) {
                        return n("p", {
                            key: e.id
                        }, [t._v(t._s(e.text))])
                    })), 0)
                };
            k._withStripped = !0;
            const b = r().extend({
                props: {
                    textDescriptions: Object
                },
                data: () => ({
                    lines: []
                }),
                watch: {
                    "textDescriptions.latestDescriptions": function(t) {
                        t && t.length && t.forEach((t => {
                            void 0 !== t.id && this.lines.find((e => e.id === t.id)) || this.lines.push(t)
                        }))
                    }
                },
                mounted() {
                    this.$registerTextDescriptions(this)
                },
                methods: {
                    append(t) {
                        this.lines.push({
                            id: Math.random(),
                            category: "announce",
                            text: t
                        })
                    }
                }
            });
            var O = n(51900),
                $ = (0, O.Z)(b, k, [], !1, null, null, null);
            $.options.__file = "src/services/vue/text-descriptions/TextDescriptions.vue";
            const R = $.exports,
                S = {
                    instance: void 0,
                    install(t) {
                        t.prototype.$announce || (t.component("TextDescriptions", R), t.prototype.$registerTextDescriptions = t => {
                            this.instance = t
                        }, t.prototype.$announce = t => {
                            if (!this.instance) throw new Error("No TextDescriptions is registered");
                            return this.instance.append(t)
                        })
                    }
                };
            var D = n(90390),
                I = function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("transition", {
                        attrs: {
                            name: "toast-transition"
                        }
                    }, [t.isVisible && t.options ? o("div", {
                        staticClass: "jbg toast",
                        class: t.options.type
                    }, [o("div", {
                        staticClass: "constrain"
                    }, [o("img", {
                        staticClass: "close",
                        attrs: {
                            alt: "close",
                            src: n(11120)
                        },
                        on: {
                            click: t.hide
                        }
                    }), t._v(" "), o("p", {
                        staticClass: "text"
                    }, [t._v(t._s(t.options.text))]), t._v(" "), o("p", {
                        staticClass: "subtext"
                    }, [t._v(t._s(t.options.subtext))]), t._v(" "), t.options.warning ? o("p", {
                        staticClass: "warning"
                    }, [t._v(t._s(t.options.warning))]) : t._e(), t._v(" "), "reconnecting" === t.options.type ? o("div", {
                        staticClass: "spinner"
                    }) : t._e()])]) : t._e()])
                };
            I._withStripped = !0;
            const A = r().extend({
                data: () => ({
                    isVisible: !1,
                    options: null,
                    timeout: null
                }),
                beforeMount() {
                    this.$registerToast(this)
                },
                methods: {
                    show(t) {
                        this.isVisible = !0, this.options = t, this.timeout && (window.clearTimeout(this.timeout), this.timeout = null), t.duration && (this.timeout = window.setTimeout((() => {
                            this.hide()
                        }), t.duration))
                    },
                    hide() {
                        this.isVisible = !1, this.options = null, this.timeout && (window.clearTimeout(this.timeout), this.timeout = null)
                    }
                }
            });
            var M = (0, O.Z)(A, I, [], !1, null, "18efc1be", null);
            M.options.__file = "src/services/vue/toast/Toast.vue";
            const L = M.exports,
                P = {
                    instance: void 0,
                    install(t) {
                        t.prototype.$toast || (t.component("Toast", L), t.prototype.$toast = t => {
                            if (!this.instance) throw new Error("No ToastComponent is registered to show");
                            this.instance.show(t)
                        }, t.prototype.$hideToast = () => {
                            if (!this.instance) throw new Error("No ToastComponent is registered to hide");
                            this.instance.hide()
                        }, t.prototype.$registerToast = t => {
                            this.instance = t
                        })
                    }
                };
            var H = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.replayer ? n("div", {
                    ref: "debugNav",
                    staticClass: "debug-nav",
                    attrs: {
                        tabindex: "0"
                    }
                }, [t.showPowerNav ? n("div", {
                    staticClass: "power-nav"
                }, [n("button", {
                    staticClass: "close",
                    on: {
                        click: t.onClosePowerNavClick
                    }
                }, [t._v("X")]), t._v(" "), n("p", [t._v("MARKERS")]), t._v(" "), n("ul", t._l(t.replayer.markerMap, (function(e, o) {
                    return n("li", {
                        key: o,
                        class: {
                            active: o === t.replayer.currentMarkerItemIndex
                        },
                        on: {
                            click: function(e) {
                                return t.onMarkerClick(o)
                            }
                        }
                    }, [t._v("\n                " + t._s(e[1].marker) + "\n            ")])
                })), 0), t._v(" "), n("button", {
                    staticClass: "option",
                    on: {
                        click: t.onKillClick
                    }
                }, [t._v("KILL"), n("br"), t._v("ROOM")]), t._v(" "), n("button", {
                    staticClass: "option",
                    on: {
                        click: t.onDisconnectClick
                    }
                }, [t._v("DISCONNECT")])]) : t._e(), t._v(" "), n("p", {
                    staticClass: "title blurred"
                }, [t._v("DEBUG")]), t._v(" "), t.replayer.markerMap.length ? n("p", {
                    staticClass: "title focused"
                }, [t._v("\n        " + t._s(t.replayer.currentMarkerItemIndex) + " : " + t._s(t.replayer.currentMarkerItem[1].marker) + "\n        (" + t._s(t.replayer.currentEntityItemIndex) + ")\n    ")]) : n("p", {
                    staticClass: "title focused"
                }, [t._v("Item #" + t._s(t.replayer.currentEntityItemIndex))]), t._v(" "), t.showPowerNav ? t._e() : n("button", {
                    staticClass: "open-power-nav",
                    on: {
                        click: t.onOpenPowerNavClick
                    }
                }, [n("svg", {
                    attrs: {
                        viewBox: "0 0 20 10"
                    }
                }, [n("polygon", {
                    attrs: {
                        points: "0,10 10,0 20,10"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "visually-hidden"
                }, [t._v("Open debug menu")])])]), t._v(" "), n("button", {
                    staticClass: "direction previous",
                    on: {
                        click: t.onPreviousClick
                    }
                }, [n("svg", {
                    attrs: {
                        viewBox: "0 0 60 50"
                    }
                }, [n("polygon", {
                    staticClass: "outline",
                    attrs: {
                        points: "40,35.6 20,25 40,14.4"
                    }
                }), t._v(" "), n("polygon", {
                    attrs: {
                        points: "40,35.6 20,25 40,14.4"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "visually-hidden"
                }, [t._v("Previous")])])]), t._v(" "), n("button", {
                    staticClass: "direction next",
                    on: {
                        click: t.onNextClick
                    }
                }, [n("svg", {
                    attrs: {
                        viewBox: "0 0 60 50"
                    }
                }, [n("polygon", {
                    staticClass: "outline",
                    attrs: {
                        points: "40,35.6 20,25 40,14.4"
                    }
                }), t._v(" "), n("polygon", {
                    attrs: {
                        points: "40,35.6 20,25 40,14.4"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "visually-hidden"
                }, [t._v("Next")])])])]) : t._e()
            };
            H._withStripped = !0;
            const X = r().extend({
                props: {
                    replayer: Object
                },
                data: () => ({
                    showPowerNav: !1
                }),
                computed: {
                    debugNav() {
                        return this.$refs.debugNav
                    }
                },
                mounted() {
                    window.addEventListener("keydown", (t => {
                        var e, n, o, i;
                        return "," === t.key ? null === (e = this.replayer) || void 0 === e ? void 0 : e.toPreviousEntity() : "." === t.key ? null === (n = this.replayer) || void 0 === n ? void 0 : n.toNextEntity() : "q" === t.key ? null === (o = this.replayer) || void 0 === o ? void 0 : o.toPreviousMarker() : "w" === t.key ? null === (i = this.replayer) || void 0 === i ? void 0 : i.toNextMarker() : null
                    }))
                },
                methods: {
                    onPreviousClick() {
                        var t;
                        null === (t = this.replayer) || void 0 === t || t.toPreviousMarker()
                    },
                    onNextClick() {
                        var t;
                        null === (t = this.replayer) || void 0 === t || t.toNextMarker()
                    },
                    onOpenPowerNavClick() {
                        this.showPowerNav = !0, this.debugNav.focus()
                    },
                    onClosePowerNavClick() {
                        this.showPowerNav = !1, this.debugNav.focus()
                    },
                    onMarkerClick(t) {
                        var e;
                        null === (e = this.replayer) || void 0 === e || e.toMarkerIndex(t)
                    },
                    onKillClick() {
                        this.replayer.kill()
                    },
                    onDisconnectClick() {
                        this.replayer.disconnect()
                    }
                }
            });
            var G = (0, O.Z)(X, H, [], !1, null, "61a8aafc", null);
            G.options.__file = "src/apps/vue/components/DebugNav.vue";
            const V = G.exports;
            var B = function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", {
                    staticClass: "jbg debug"
                }, [o("img", {
                    staticClass: "image",
                    attrs: {
                        src: n(53658),
                        alt: "Debug"
                    }
                }), t._v(" "), o("h3", {
                    staticClass: "text"
                }, [t._v("What is Happening?")]), t._v(" "), o("div", {
                    staticClass: "actions"
                }, [o("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.message,
                        expression: "message"
                    }],
                    attrs: {
                        rows: "3",
                        placeholder: "Enter details",
                        "aria-label": "Details"
                    },
                    domProps: {
                        value: t.message
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.message = e.target.value)
                        }
                    }
                }), t._v(" "), o("button", {
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.$emit("resolve", t.message)
                        }
                    }
                }, [t._v(t._s(t.$t("ACTION.OK")))])])])
            };
            B._withStripped = !0;
            const U = r().extend({
                i18n: {
                    messages: w.s
                },
                data: () => ({
                    message: ""
                })
            });
            var j = (0, O.Z)(U, B, [], !1, null, "4579deee", null);
            j.options.__file = "src/apps/vue/components/SendDebugModal.vue";
            const K = j.exports,
                W = {
                    en: {
                        TOAST: {
                            BROADCASTER: {
                                SUBTEXT: "You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.",
                                WARNING: "THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED"
                            },
                            RECONNECTED: {
                                TEXT: "RECONNECTED",
                                SUBTEXT: "Have fun!"
                            },
                            RECONNECTING: {
                                CONTROLLER: {
                                    TEXT: "CONNECTION INTERRUPTED",
                                    SUBTEXT: "Attempting to reconnect ({attempt} of 5)"
                                },
                                GAME: {
                                    TEXT: "GAME CONNECTION INTERRUPTED",
                                    SUBTEXT: "Please wait while we attempt to reconnect"
                                }
                            }
                        }
                    },
                    fr: {},
                    it: {},
                    de: {},
                    es: {},
                    "es-XL": {}
                };
            var F = function(t, e, n, o) {
                return new(n || (n = Promise))((function(i, s) {
                    function r(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(r, a)
                    }
                    c((o = o.apply(t, e || [])).next())
                }))
            };

            function Y(t, e) {
                return F(this, void 0, void 0, (function*() {
                    return (0, C.c)("[Vue] load", t), new Promise((n => {
                        r().prototype.$analytics = p.c.shared, r().prototype.$debug = d.W.shared, r().prototype.$storage = v.K.shared, r().use(c()), r().use(f._), r().use(T.M), r().use(m.S), r().use(x), r().use(_.L), r().use(N.M), r().use(S), r().use(D.p), r().use(P);
                        const o = new(c())({
                            fallbackLocale: "en",
                            messages: u()(w.s, W)
                        });
                        new(r())({
                            i18n: o,
                            el: "#app",
                            components: {
                                Debug: V,
                                Game: e.importFn
                            },
                            ecastKeys: {
                                textDescriptions: "textDescriptions"
                            },
                            mixins: [T.e, m.b],
                            data: () => ({
                                timerId: null,
                                debugReplayer: t.debugReplayer
                            }),
                            computed: {
                                ecastValues() {
                                    return this.$data.$ecastValues ? this.$data.$ecastValues : null
                                },
                                localeClass() {
                                    return `locale-${this.$i18n.locale}`
                                }
                            },
                            watch: {
                                "ecastValues.player": function(t) {
                                    t && t.kind && this.$setSentryTag("kind", t.kind)
                                }
                            },
                            beforeMount() {
                                this.$ecast = t.client, this.$ecast.on("connection", (t => {
                                    this.onConnection(t)
                                })), this.$ecast.on("client/connected", (t => {
                                    this.onClientConnected(t)
                                })), this.$ecast.on("client/disconnected", (t => {
                                    this.onClientDisconnected(t)
                                })), this.$ecast.on("room/exit", (() => {
                                    this.onRoomExit()
                                })), this.$ecast.on("socketClose", (() => {
                                    this.onSocketClose()
                                })), this.setupI18n(), this.setupSentry(), this.sendScreenView(), this.timerId = window.setInterval(this.sendScreenView.bind(this), 48e4), this.$analytics.setApplication({
                                    appTag: t.room.appTag,
                                    appId: t.room.appId,
                                    appVersion: "4.1.28"
                                }), this.$storage.isSupported && this.$storage.setTag(`played-${t.room.appTag}`), n()
                            },
                            mounted() {
                                if (this.debugReplayer || this.initKonami(), t.welcome && t.welcome.profile) {
                                    const e = t.welcome.profile;
                                    if (Object.keys(e.roles).includes("broadcaster")) {
                                        const {
                                            broadcaster: n
                                        } = e.roles;
                                        this.$toast({
                                            type: "broadcaster",
                                            text: `${n.name}`,
                                            subtext: this.$t("TOAST.BROADCASTER.SUBTEXT"),
                                            warning: t.room.audienceEnabled ? "" : this.$t("TOAST.BROADCASTER.WARNING"),
                                            duration: 2e4
                                        })
                                    }
                                }
                            },
                            beforeDestroy() {
                                this.timerId && clearInterval(this.timerId)
                            },
                            methods: {
                                sendScreenView() {
                                    this.$analytics.trackScreenView(t.room.appTag)
                                },
                                setupI18n() {
                                    h.o.setup(t.room.locale), o.locale = h.o.locale
                                },
                                setupSentry() {
                                    this.$setSentryTag("app", "vue"), this.$setSentryTag("appTag", t.room.appTag)
                                },
                                onConnection(e) {
                                    switch (e.status) {
                                        case "waiting":
                                        case "connecting":
                                            this.$toast({
                                                type: "reconnecting",
                                                text: this.$t("TOAST.RECONNECTING.CONTROLLER.TEXT"),
                                                subtext: this.$t("TOAST.RECONNECTING.CONTROLLER.SUBTEXT", {
                                                    attempt: e.attempt
                                                })
                                            });
                                            break;
                                        case "connected":
                                            this.$toast({
                                                type: "generic",
                                                text: this.$t("TOAST.RECONNECTED.CONTROLLER.TEXT"),
                                                subtext: this.$t("TOAST.RECONNECTING.CONTROLLER.SUBTEXT"),
                                                duration: 1500
                                            }), this.$analytics.trackScreenView(t.room.appTag)
                                    }
                                },
                                onClientConnected(t) {
                                    "host" === t.role && t.reconnect && this.$toast({
                                        type: "generic",
                                        text: this.$t("TOAST.RECONNECTED.CONTROLLER.TEXT"),
                                        subtext: this.$t("TOAST.RECONNECTING.CONTROLLER.SUBTEXT"),
                                        duration: 1500
                                    })
                                },
                                onClientDisconnected(t) {
                                    "host" === t.role && this.$toast({
                                        type: "reconnecting",
                                        text: this.$t("TOAST.RECONNECTING.GAME.TEXT"),
                                        subtext: this.$t("TOAST.RECONNECTING.GAME.SUBTEXT")
                                    })
                                },
                                onRoomExit() {
                                    return F(this, void 0, void 0, (function*() {
                                        this.$hideToast(), yield this.$showModal("Error", {
                                            text: this.$t("ERROR.ROOM_DISCONNECTED"),
                                            subtext: this.$t("ERROR.ROOM_DESTROYED"),
                                            dismissText: this.$t("ACTION.OK")
                                        }), window.location.reload()
                                    }))
                                },
                                onSocketClose() {
                                    return F(this, void 0, void 0, (function*() {
                                        this.$hideToast(), yield this.$showModal("Error", {
                                            text: this.$t("ERROR.ROOM_DISCONNECTED"),
                                            dismissText: this.$t("ACTION.OK")
                                        }), window.location.reload()
                                    }))
                                },
                                initKonami() {
                                    new(i())((() => F(this, void 0, void 0, (function*() {
                                        const t = yield this.$showModal(K);
                                        void 0 !== t && this.$debug.send(t)
                                    }))))
                                }
                            },
                            template: '\n                <div id="app" :class="localeClass">\n                    <Fatal v-if="$data.$fatalError.hasCrashed" :error="$data.$fatalError" />\n                    <template v-else-if="ecastValues">\n                        <TextDescriptions :text-descriptions="ecastValues.textDescriptions" />\n                        <game id="game" :name="\'game\'" v-bind="ecastValues" />\n                        <Debug :replayer="debugReplayer" />\n                    </template>\n                    <Toast />\n                    <Modal />\n                </div>\n            '
                        })
                    }))
                }))
            }
        },
        53658: (t, e, n) => {
            "use strict";
            t.exports = n.p + "assets/26bdea6942327b2b5855.png"
        },
        11120: (t, e, n) => {
            "use strict";
            t.exports = n.p + "assets/62f37fe9db1eb750a2bf.svg"
        }
    }
]);
//# sourceMappingURL=sourcemaps/2601.0881cce0b431f4104109.js.map