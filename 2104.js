(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [2104], {
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
                a = n(59783),
                r = n(13218),
                c = n(81704),
                l = n(36390);
            t.exports = function t(e, n, u, d, p) {
                e !== n && s(n, (function(s, c) {
                    if (p || (p = new o), r(s)) a(e, n, c, u, t, d, p);
                    else {
                        var v = d ? d(l(e, c), s, c + "", e, n, p) : void 0;
                        void 0 === v && (v = s), i(e, c, v)
                    }
                }), c)
            }
        },
        59783: (t, e, n) => {
            var o = n(86556),
                i = n(64626),
                s = n(77133),
                a = n(278),
                r = n(38517),
                c = n(35694),
                l = n(1469),
                u = n(29246),
                d = n(44144),
                p = n(23560),
                v = n(13218),
                h = n(68630),
                T = n(36719),
                E = n(36390),
                m = n(59881);
            t.exports = function(t, e, n, f, N, C, g) {
                var y = E(t, n),
                    x = E(e, n),
                    b = g.get(x);
                if (b) o(t, n, b);
                else {
                    var O = C ? C(y, x, n + "", t, e, g) : void 0,
                        _ = void 0 === O;
                    if (_) {
                        var k = l(x),
                            R = !k && d(x),
                            S = !k && !R && T(x);
                        O = x, k || R || S ? l(y) ? O = y : u(y) ? O = a(y) : R ? (_ = !1, O = i(x, !0)) : S ? (_ = !1, O = s(x, !0)) : O = [] : h(x) || c(x) ? (O = y, c(y) ? O = m(y) : v(y) && !p(y) || (O = r(x))) : _ = !1
                    }
                    _ && (g.set(x, O), N(O, x, f, C, g), g.delete(x)), o(t, n, O)
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
                a = i ? function(t, e) {
                    return i(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: o(e),
                        writable: !0
                    })
                } : s;
            t.exports = a
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
                        a = s > 1 ? n[s - 1] : void 0,
                        r = s > 2 ? n[2] : void 0;
                    for (a = t.length > 3 && "function" == typeof a ? (s--, a) : void 0, r && i(n[0], n[1], r) && (a = s < 3 ? void 0 : a, s = 1), e = Object(e); ++o < s;) {
                        var c = n[o];
                        c && t(e, c, o, a)
                    }
                    return e
                }))
            }
        },
        25063: t => {
            t.exports = function(t) {
                return function(e, n, o) {
                    for (var i = -1, s = Object(e), a = o(e), r = a.length; r--;) {
                        var c = a[t ? r : ++i];
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
                a = n(13218);
            t.exports = function(t, e, n) {
                if (!a(n)) return !1;
                var r = typeof e;
                return !!("number" == r ? i(n) && s(e, n.length) : "string" == r && e in n) && o(n[e], t)
            }
        },
        45357: (t, e, n) => {
            var o = n(96874),
                i = Math.max;
            t.exports = function(t, e, n) {
                return e = i(void 0 === e ? t.length - 1 : e, 0),
                    function() {
                        for (var s = arguments, a = -1, r = i(s.length - e, 0), c = Array(r); ++a < r;) c[a] = s[e + a];
                        a = -1;
                        for (var l = Array(e + 1); ++a < e;) l[a] = s[a];
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
                a = Function.prototype,
                r = Object.prototype,
                c = a.toString,
                l = r.hasOwnProperty,
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
        52104: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                load: () => ct
            });
            var o = n(94166),
                i = n.n(o),
                s = n(2934),
                a = n.n(s),
                r = n(37432),
                c = n.n(r),
                l = n(82492),
                u = n.n(l),
                d = n(70236),
                p = n(35029),
                v = n(21944),
                h = n(47865),
                T = n(54905),
                E = n(45222),
                m = n(65835),
                f = n(95534),
                N = n.n(f);

            function C(t, e) {
                const n = t.$t(e);
                return Array.isArray(n) || console.warn(`[i18nPlugin] Translation with key ${e} is not an array`), N()(n)
            }
            const g = {
                install(t) {
                    t.directive("ts", ((t, e, n) => {
                        const o = C(n.context, e.value);
                        t.textContent = o || ""
                    })), t.prototype.$ts = function(t) {
                        return C(this, t) || ""
                    }
                }
            };
            var y = n(35271),
                x = n(89768),
                b = n(65853),
                O = n(99159),
                _ = function() {
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
            _._withStripped = !0;
            const k = a().extend({
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
            var R = n(51900),
                S = (0, R.Z)(k, _, [], !1, null, null, null);
            S.options.__file = "src/services/vue/text-descriptions/TextDescriptions.vue";
            const w = S.exports,
                A = {
                    instance: void 0,
                    install(t) {
                        t.prototype.$announce || (t.component("TextDescriptions", w), t.prototype.$registerTextDescriptions = t => {
                            this.instance = t
                        }, t.prototype.$announce = t => {
                            if (!this.instance) throw new Error("No TextDescriptions is registered");
                            return this.instance.append(t)
                        })
                    }
                };
            var I = n(90390),
                $ = function() {
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
            $._withStripped = !0;
            const D = a().extend({
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
            var U = (0, R.Z)(D, $, [], !1, null, "18efc1be", null);
            U.options.__file = "src/services/vue/toast/Toast.vue";
            const X = U.exports,
                B = {
                    instance: void 0,
                    install(t) {
                        t.prototype.$toast || (t.component("Toast", X), t.prototype.$toast = t => {
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
            var L = function() {
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
            L._withStripped = !0;
            const M = a().extend({
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
            var P = (0, R.Z)(M, L, [], !1, null, "61a8aafc", null);
            P.options.__file = "src/apps/vue/components/DebugNav.vue";
            const G = P.exports;
            var V = function() {
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
            V._withStripped = !0;
            const H = a().extend({
                i18n: {
                    messages: b.s
                },
                data: () => ({
                    message: ""
                })
            });
            var K = (0, R.Z)(H, V, [], !1, null, "4579deee", null);
            K.options.__file = "src/apps/vue/components/SendDebugModal.vue";
            const j = K.exports;
            var F = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.shouldShow ? n("div", {
                    staticClass: "feedback-button",
                    on: {
                        click: t.onFeedbackClick
                    }
                }, [t._v("FEEDBACK")]) : t._e()
            };
            F._withStripped = !0;
            var J = n(50361),
                W = n.n(J),
                Z = n(2720),
                Y = n(12360),
                z = function(t, e, n, o) {
                    return new(n || (n = Promise))((function(i, s) {
                        function a(t) {
                            try {
                                c(o.next(t))
                            } catch (t) {
                                s(t)
                            }
                        }

                        function r(t) {
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
                            }))).then(a, r)
                        }
                        c((o = o.apply(t, e || [])).next())
                    }))
                },
                q = n(89446),
                Q = function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "jbg feedback"
                    }, [o("h3", {
                        staticClass: "text"
                    }, [t._v("Send Feedback")]), t._v(" "), o("div", {
                        staticClass: "vibes",
                        class: {
                            "has-selected": t.vibe
                        }
                    }, [o("p", {
                        staticClass: "cta"
                    }, [t._v("CHOOSE A VIBE")]), t._v(" "), o("div", {
                        staticClass: "buttons"
                    }, [o("button", {
                        class: {
                            selected: "good" === t.vibe
                        },
                        on: {
                            click: function(e) {
                                return t.onVibeClick("good")
                            }
                        }
                    }, [o("img", {
                        attrs: {
                            src: n(38276),
                            alt: "good"
                        }
                    })]), t._v(" "), o("button", {
                        class: {
                            selected: "meh" === t.vibe
                        },
                        on: {
                            click: function(e) {
                                return t.onVibeClick("meh")
                            }
                        }
                    }, [o("img", {
                        attrs: {
                            src: n(7818),
                            alt: "meh"
                        }
                    })]), t._v(" "), o("button", {
                        class: {
                            selected: "bad" === t.vibe
                        },
                        on: {
                            click: function(e) {
                                return t.onVibeClick("bad")
                            }
                        }
                    }, [o("img", {
                        attrs: {
                            src: n(30930),
                            alt: "bad"
                        }
                    })])])]), t._v(" "), o("div", {
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
                            placeholder: "(optional) more details",
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
                        attrs: {
                            disabled: !t.canSubmit
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                            }
                        }
                    }, [t._v(t._s(t.$t("ACTION.SUBMIT")))])])])
                };
            Q._withStripped = !0;
            const tt = a().extend({
                i18n: {
                    messages: b.s
                },
                data: () => ({
                    vibe: null,
                    message: ""
                }),
                computed: {
                    canSubmit() {
                        return !!this.vibe
                    }
                },
                methods: {
                    onVibeClick(t) {
                        this.vibe = t
                    },
                    onSubmitClick() {
                        this.$emit("resolve", {
                            vibe: this.vibe,
                            message: this.message
                        })
                    }
                }
            });
            var et = (0, R.Z)(tt, Q, [], !1, null, "091793f8", null);
            et.options.__file = "src/apps/vue/components/SendFeedbackModal.vue";
            const nt = et.exports;
            const ot = a().extend({
                props: {
                    ecastValues: Object
                },
                data: () => ({
                    shouldShow: "production" !== q.c.clientEnvironment
                }),
                methods: {
                    onFeedbackClick() {
                        return t = this, e = void 0, o = function*() {
                            const t = W()(this.ecastValues),
                                e = yield this.$showModal(nt);
                            void 0 !== e && class {
                                static send(t) {
                                    return z(this, void 0, void 0, (function*() {
                                        const e = {
                                            appTag: t.room.appTag,
                                            state: {
                                                appTag: t.room.appTag,
                                                name: t.name,
                                                role: t.role,
                                                code: t.room.code,
                                                message: t.message,
                                                vibe: t.vibe,
                                                state: t.values
                                            }
                                        };
                                        try {
                                            const n = yield this.sendToEcast(e);
                                            yield this.sendToSlack(n, t)
                                        } catch (t) {
                                            console.error(t)
                                        }
                                    }))
                                }
                                static getPromptGuess(t) {
                                    var e, n, o;
                                    return (null === (e = t.player) || void 0 === e ? void 0 : e.prompt) ? t.player.prompt : (null === (n = t.audience) || void 0 === n ? void 0 : n.prompt) ? t.audience.prompt : (null === (o = t.audiencePlayer) || void 0 === o ? void 0 : o.prompt) ? t.audiencePlayer.prompt : t.prompt ? t.prompt : "unknown"
                                }
                                static sendToEcast(t) {
                                    return z(this, void 0, void 0, (function*() {
                                        const e = yield fetch("https://ecast.jackboxgames.com/api/v2/controller/state", {
                                            method: "POST",
                                            body: JSON.stringify(t)
                                        });
                                        return (yield e.json()).body.url
                                    }))
                                }
                                static sendToSlack(t, e) {
                                    var n;
                                    return z(this, void 0, void 0, (function*() {
                                        const o = (0, Y.cF)(e.room.appTag),
                                            i = Z.v.slack.feedbackUrl;
                                        if (!i) return;
                                        const s = {
                                            blocks: [{
                                                type: "section",
                                                text: {
                                                    type: "mrkdwn",
                                                    text: `${null!==(n=null==o?void 0:o.name)&&void 0!==n?n:e.room.appTag} :${e.room.appTag}: \n\n From: ${e.name},\n${e.message}`
                                                }
                                            }, {
                                                type: "context",
                                                elements: [{
                                                    type: "plain_text",
                                                    text: `${{good:":large_green_circle:",meh:":large_yellow_circle:",bad:":red_circle:"}[e.vibe]} ${e.vibe.toUpperCase()} Vibes`,
                                                    emoji: !0
                                                }, {
                                                    type: "plain_text",
                                                    text: `Prompt Guess: ${this.getPromptGuess(e.values)}`,
                                                    emoji: !0
                                                }]
                                            }, {
                                                type: "actions",
                                                elements: [{
                                                    type: "button",
                                                    action_id: "actionId-0",
                                                    url: t,
                                                    text: {
                                                        type: "plain_text",
                                                        text: "View Game State JSON",
                                                        emoji: !0
                                                    }
                                                }]
                                            }]
                                        };
                                        try {
                                            const t = yield fetch(i, {
                                                method: "POST",
                                                body: JSON.stringify(s)
                                            }), e = yield t.text();
                                            (0, x.c)("[Feedback] sendToSlack", e)
                                        } catch (t) {
                                            console.error("[Feedback] sendToSlack", t)
                                        }
                                    }))
                                }
                            }.send({
                                name: this.$ecast.name,
                                role: this.$ecast.role,
                                room: this.$debug.room,
                                message: e.message,
                                vibe: e.vibe,
                                values: t
                            })
                        }, new((n = void 0) || (n = Promise))((function(i, s) {
                            function a(t) {
                                try {
                                    c(o.next(t))
                                } catch (t) {
                                    s(t)
                                }
                            }

                            function r(t) {
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
                                }))).then(a, r)
                            }
                            c((o = o.apply(t, e || [])).next())
                        }));
                        var t, e, n, o
                    }
                }
            });
            var it = (0, R.Z)(ot, F, [], !1, null, "5ddc1e31", null);
            it.options.__file = "src/apps/vue/components/Feedback.vue";
            const st = it.exports,
                at = {
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
                    fr: {
                        TOAST: {
                            BROADCASTER: {
                                SUBTEXT: "La connexion de votre compte à l'extension Twitch Jackbox Audience Kit a réussi.",
                                WARNING: "LE PARAMÈTRE 'PUBLIC' N'EST PAS ACTIVÉ DANS CETTE SALLE."
                            },
                            RECONNECTED: {
                                TEXT: "RECONNECTÉ",
                                SUBTEXT: "Amusez-vous bien !"
                            },
                            RECONNECTING: {
                                CONTROLLER: {
                                    TEXT: "CONNEXION INTERROMPUE",
                                    SUBTEXT: "Tentative de reconnexion ({attempt} sur 5)"
                                },
                                GAME: {
                                    TEXT: "CONNEXION AU JEU INTERROMPUE",
                                    SUBTEXT: "Veuillez patienter pendant que nous tentons de vous reconnecter."
                                }
                            }
                        }
                    },
                    it: {
                        TOAST: {
                            BROADCASTER: {
                                SUBTEXT: "Il collegamento del tuo account con l'estensione per Twitch Jackbox Audience Kit è andato a buon fine.",
                                WARNING: "L'IMPOSTAZIONE DEL PUBBLICO NON È ATTIVA PER QUESTA STANZA"
                            },
                            RECONNECTED: {
                                TEXT: "RICONNESSO",
                                SUBTEXT: "Buon divertimento!"
                            },
                            RECONNECTING: {
                                CONTROLLER: {
                                    TEXT: "CONNESSIONE INTERROTTA",
                                    SUBTEXT: "Tentativo di ricollegamento in corso ({attempt} di 5)"
                                },
                                GAME: {
                                    TEXT: "CONNESSIONE AL GIOCO INTERROTTA",
                                    SUBTEXT: "Resta in attesa mentre proviamo a ricollegarci"
                                }
                            }
                        }
                    },
                    de: {
                        TOAST: {
                            BROADCASTER: {
                                SUBTEXT: "Du hast dein Konto erfolgreich mit der Jackbox Audience Kit Twitch-Erweiterung verknüpft.",
                                WARNING: "FÜR DIESEN RAUM IST DIE PUBLIKUMS-EINSTELLUNG NICHT AKTIV"
                            },
                            RECONNECTED: {
                                TEXT: "NEU VERBUNDEN",
                                SUBTEXT: "Viel Spaß!"
                            },
                            RECONNECTING: {
                                CONTROLLER: {
                                    TEXT: "VERBINDUNG UNTERBROCHEN",
                                    SUBTEXT: "Versuche neu zu verbinden ({attempt} von 5)"
                                },
                                GAME: {
                                    TEXT: "VERBINDUNG ZUM SPIEL UNTERBROCHEN",
                                    SUBTEXT: "Bitte warte während wir versuchen, die Verbindung wiederherzustellen."
                                }
                            }
                        }
                    },
                    es: {
                        TOAST: {
                            BROADCASTER: {
                                SUBTEXT: "Has conectado tu cuenta con éxito a la extensión de Twitch del kit para público de Jackbox.",
                                WARNING: "ESTA SALA NO TIENE LA FUNCIÓN DE PÚBLICO HABILITADA"
                            },
                            RECONNECTED: {
                                TEXT: "CONEXIÓN RESTABLECIDA",
                                SUBTEXT: "¡Diviértete!"
                            },
                            RECONNECTING: {
                                CONTROLLER: {
                                    TEXT: "SE HA INTERRUMPIDO LA CONEXIÓN",
                                    SUBTEXT: "Recuperando conexión (intento {attempt} de 5)"
                                },
                                GAME: {
                                    TEXT: "SE HA INTERRUMPIDO LA CONEXIÓN CON EL JUEGO",
                                    SUBTEXT: "Espera mientras intentamos recuperar la conexión"
                                }
                            }
                        }
                    },
                    "es-XL": {
                        TOAST: {
                            BROADCASTER: {
                                SUBTEXT: "Has conectado correctamente tu cuenta a la extensión para Twitch del kit para público de Jackbox.",
                                WARNING: "ESTA SALA NO TIENE ACTIVADA LA OPCIÓN DE PÚBLICO"
                            },
                            RECONNECTED: {
                                TEXT: "CONEXIÓN RESTABLECIDA",
                                SUBTEXT: "¡Diviértete!"
                            },
                            RECONNECTING: {
                                CONTROLLER: {
                                    TEXT: "CONEXIÓN INTERRUMPIDA",
                                    SUBTEXT: "Intento de reconexión ({attempt} de 5)"
                                },
                                GAME: {
                                    TEXT: "SE INTERRUMPIÓ LA CONEXIÓN AL JUEGO",
                                    SUBTEXT: "Por favor, espera mientras intentamos restablecer la conexión."
                                }
                            }
                        }
                    }
                };
            var rt = function(t, e, n, o) {
                return new(n || (n = Promise))((function(i, s) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function r(t) {
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
                        }))).then(a, r)
                    }
                    c((o = o.apply(t, e || [])).next())
                }))
            };

            function ct(t, e) {
                return rt(this, void 0, void 0, (function*() {
                    return (0, x.c)("[Vue] load", t), new Promise((n => {
                        var o;
                        a().prototype.$analytics = d.c.shared, a().prototype.$debug = p.W.shared, a().prototype.$storage = h.K.shared, a().use(c()), a().use(T._), a().use(E.M), a().use(m.S), a().use(g), a().use(y.L), a().use(O.M), a().use(A), a().use(I.p), a().use(B);
                        const s = new(c())({
                            fallbackLocale: "en",
                            messages: u()(b.s, at)
                        });
                        new(a())({
                            i18n: s,
                            name: null !== (o = e.name) && void 0 !== o ? o : "Game",
                            el: "#app",
                            components: {
                                Debug: G,
                                Feedback: st,
                                Game: e.importFn
                            },
                            ecastKeys: {
                                textDescriptions: "textDescriptions"
                            },
                            mixins: [E.e, m.b],
                            data: () => ({
                                timerId: null,
                                debugReplayer: t.debugReplayer,
                                isKicked: !1
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
                                })), this.$ecast.on("client/kicked", (() => {
                                    this.onClientKicked()
                                })), this.$ecast.on("socketClose", (() => {
                                    this.onSocketClose()
                                })), this.setupI18n(), this.setupSentry(), this.sendScreenView(), this.timerId = window.setInterval(this.sendScreenView.bind(this), 48e4), this.$analytics.setApplication({
                                    appTag: t.room.appTag,
                                    appId: t.room.appId,
                                    appVersion: "4.2.4"
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
                                    v.o.setup(t.room.locale), s.locale = v.o.locale
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
                                                text: this.$t("TOAST.RECONNECTED.TEXT"),
                                                subtext: this.$t("TOAST.RECONNECTED.SUBTEXT"),
                                                duration: 1500
                                            }), this.$analytics.trackScreenView(t.room.appTag)
                                    }
                                },
                                onClientConnected(t) {
                                    "host" === t.role && t.reconnect && this.$toast({
                                        type: "generic",
                                        text: this.$t("TOAST.RECONNECTED.TEXT"),
                                        subtext: this.$t("TOAST.RECONNECTED.SUBTEXT"),
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
                                    return rt(this, void 0, void 0, (function*() {
                                        this.$hideToast(), yield this.$showModal("Error", {
                                            text: this.$t("ERROR.ROOM_DISCONNECTED"),
                                            subtext: this.$t("ERROR.ROOM_DESTROYED"),
                                            dismissText: this.$t("ACTION.OK")
                                        }), window.location.reload()
                                    }))
                                },
                                onClientKicked() {
                                    return rt(this, void 0, void 0, (function*() {
                                        this.isKicked = !0, this.$hideToast(), yield this.$showModal("Error", {
                                            text: this.$t("ERROR.ROOM_DISCONNECTED"),
                                            subtext: this.$t("ERROR.PLAYER_KICKED"),
                                            dismissText: this.$t("ACTION.OK")
                                        }), window.location.reload()
                                    }))
                                },
                                onSocketClose() {
                                    return rt(this, void 0, void 0, (function*() {
                                        this.isKicked || (this.$hideToast(), yield this.$showModal("Error", {
                                            text: this.$t("ERROR.ROOM_DISCONNECTED"),
                                            dismissText: this.$t("ACTION.OK")
                                        }), window.location.reload())
                                    }))
                                },
                                initKonami() {
                                    new(i())((() => rt(this, void 0, void 0, (function*() {
                                        const t = yield this.$showModal(j);
                                        void 0 !== t && this.$debug.send(t)
                                    }))))
                                }
                            },
                            template: '\n                <div id="app" :class="localeClass">\n                    <Fatal v-if="$data.$fatalError.hasCrashed" :error="$data.$fatalError" />\n                    <template v-else-if="ecastValues">\n                        <TextDescriptions :text-descriptions="ecastValues.textDescriptions" />\n                        <game id="game" :name="\'game\'" v-bind="ecastValues" />\n                        <Debug v-if="debugReplayer" :replayer="debugReplayer" />\n                        <Feedback v-else :ecast-values="ecastValues" />\n                    </template>\n                    <Toast />\n                    <Modal />\n                </div>\n            '
                        })
                    }))
                }))
            }
        },
        53658: (t, e, n) => {
            "use strict";
            t.exports = n.p + "assets/26bdea6942327b2b5855.png"
        },
        30930: (t, e, n) => {
            "use strict";
            t.exports = n.p + "assets/a197b1f20a9657ebfaad.png"
        },
        38276: (t, e, n) => {
            "use strict";
            t.exports = n.p + "assets/a534c90e9bba0f770840.png"
        },
        7818: (t, e, n) => {
            "use strict";
            t.exports = n.p + "assets/6438a5c54e700fd95f2d.png"
        },
        11120: (t, e, n) => {
            "use strict";
            t.exports = n.p + "assets/62f37fe9db1eb750a2bf.svg"
        }
    }
]);
//# sourceMappingURL=sourcemaps/2104.079634cac8864c1e7b38.js.map