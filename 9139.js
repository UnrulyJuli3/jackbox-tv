(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [9139], {
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
        14636: (t, e, n) => {
            var o = n(22545),
                s = n(35694),
                i = n(1469),
                r = n(44144),
                a = n(65776),
                c = n(36719),
                u = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = i(t),
                    l = !n && s(t),
                    p = !n && !l && r(t),
                    d = !n && !l && !p && c(t),
                    h = n || l || p || d,
                    v = h ? o(t.length, String) : [],
                    y = v.length;
                for (var f in t) !e && !u.call(t, f) || h && ("length" == f || p && ("offset" == f || "parent" == f) || d && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || a(f, y)) || v.push(f);
                return v
            }
        },
        29932: t => {
            t.exports = function(t, e) {
                for (var n = -1, o = null == t ? 0 : t.length, s = Array(o); ++n < o;) s[n] = e(t[n], n, t);
                return s
            }
        },
        94311: (t, e, n) => {
            var o = n(69877);
            t.exports = function(t) {
                var e = t.length;
                return e ? t[o(0, e - 1)] : void 0
            }
        },
        9454: (t, e, n) => {
            var o = n(44239),
                s = n(37005);
            t.exports = function(t) {
                return s(t) && "[object Arguments]" == o(t)
            }
        },
        38749: (t, e, n) => {
            var o = n(44239),
                s = n(41780),
                i = n(37005),
                r = {};
            r["[object Float32Array]"] = r["[object Float64Array]"] = r["[object Int8Array]"] = r["[object Int16Array]"] = r["[object Int32Array]"] = r["[object Uint8Array]"] = r["[object Uint8ClampedArray]"] = r["[object Uint16Array]"] = r["[object Uint32Array]"] = !0, r["[object Arguments]"] = r["[object Array]"] = r["[object ArrayBuffer]"] = r["[object Boolean]"] = r["[object DataView]"] = r["[object Date]"] = r["[object Error]"] = r["[object Function]"] = r["[object Map]"] = r["[object Number]"] = r["[object Object]"] = r["[object RegExp]"] = r["[object Set]"] = r["[object String]"] = r["[object WeakMap]"] = !1, t.exports = function(t) {
                return i(t) && s(t.length) && !!r[o(t)]
            }
        },
        280: (t, e, n) => {
            var o = n(25726),
                s = n(86916),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!o(t)) return s(t);
                var e = [];
                for (var n in Object(t)) i.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        69877: t => {
            var e = Math.floor,
                n = Math.random;
            t.exports = function(t, o) {
                return t + e(n() * (o - t + 1))
            }
        },
        84992: (t, e, n) => {
            var o = n(94311),
                s = n(52628);
            t.exports = function(t) {
                return o(s(t))
            }
        },
        22545: t => {
            t.exports = function(t, e) {
                for (var n = -1, o = Array(t); ++n < t;) o[n] = e(n);
                return o
            }
        },
        7518: t => {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        47415: (t, e, n) => {
            var o = n(29932);
            t.exports = function(t, e) {
                return o(e, (function(e) {
                    return t[e]
                }))
            }
        },
        65776: t => {
            var e = /^(?:0|[1-9]\d*)$/;
            t.exports = function(t, n) {
                var o = typeof t;
                return !!(n = null == n ? 9007199254740991 : n) && ("number" == o || "symbol" != o && e.test(t)) && t > -1 && t % 1 == 0 && t < n
            }
        },
        25726: t => {
            var e = Object.prototype;
            t.exports = function(t) {
                var n = t && t.constructor;
                return t === ("function" == typeof n && n.prototype || e)
            }
        },
        86916: (t, e, n) => {
            var o = n(5569)(Object.keys, Object);
            t.exports = o
        },
        31167: (t, e, n) => {
            t = n.nmd(t);
            var o = n(31957),
                s = e && !e.nodeType && e,
                i = s && t && !t.nodeType && t,
                r = i && i.exports === s && o.process,
                a = function() {
                    try {
                        return i && i.require && i.require("util").types || r && r.binding && r.binding("util")
                    } catch (t) {}
                }();
            t.exports = a
        },
        5569: t => {
            t.exports = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        },
        35694: (t, e, n) => {
            var o = n(9454),
                s = n(37005),
                i = Object.prototype,
                r = i.hasOwnProperty,
                a = i.propertyIsEnumerable,
                c = o(function() {
                    return arguments
                }()) ? o : function(t) {
                    return s(t) && r.call(t, "callee") && !a.call(t, "callee")
                };
            t.exports = c
        },
        1469: t => {
            var e = Array.isArray;
            t.exports = e
        },
        98612: (t, e, n) => {
            var o = n(23560),
                s = n(41780);
            t.exports = function(t) {
                return null != t && s(t.length) && !o(t)
            }
        },
        44144: (t, e, n) => {
            t = n.nmd(t);
            var o = n(55639),
                s = n(95062),
                i = e && !e.nodeType && e,
                r = i && t && !t.nodeType && t,
                a = r && r.exports === i ? o.Buffer : void 0,
                c = (a ? a.isBuffer : void 0) || s;
            t.exports = c
        },
        23560: (t, e, n) => {
            var o = n(44239),
                s = n(13218);
            t.exports = function(t) {
                if (!s(t)) return !1;
                var e = o(t);
                return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
            }
        },
        41780: t => {
            t.exports = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
            }
        },
        36719: (t, e, n) => {
            var o = n(38749),
                s = n(7518),
                i = n(31167),
                r = i && i.isTypedArray,
                a = r ? s(r) : o;
            t.exports = a
        },
        3674: (t, e, n) => {
            var o = n(14636),
                s = n(280),
                i = n(98612);
            t.exports = function(t) {
                return i(t) ? o(t) : s(t)
            }
        },
        95534: (t, e, n) => {
            var o = n(94311),
                s = n(84992),
                i = n(1469);
            t.exports = function(t) {
                return (i(t) ? o : s)(t)
            }
        },
        95062: t => {
            t.exports = function() {
                return !1
            }
        },
        52628: (t, e, n) => {
            var o = n(47415),
                s = n(3674);
            t.exports = function(t) {
                return null == t ? [] : o(t, s(t))
            }
        },
        59139: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                load: () => G
            });
            var o = n(2934),
                s = n.n(o),
                i = n(37432),
                r = n.n(i),
                a = n(94166),
                c = n.n(a),
                u = n(70236),
                l = n(35029),
                p = n(53820),
                d = n(89768),
                h = n(47865),
                v = n(54905),
                y = n(95534),
                f = n.n(y);

            function m(t, e) {
                const n = t.$t(e);
                return Array.isArray(n) || console.warn(`[i18nPlugin] Translation with key ${e} is not an array`), f()(n)
            }
            const g = {
                install(t) {
                    t.directive("ts", ((t, e, n) => {
                        const o = m(n.context, e.value);
                        t.textContent = o || ""
                    })), t.prototype.$ts = function(t) {
                        return m(this, t) || ""
                    }
                }
            };
            var b = n(35271),
                x = n(45222),
                _ = n(65835),
                w = n(99159),
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
            const E = s().extend({
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
            var C = n(51900),
                T = (0, C.Z)(E, k, [], !1, null, null, null);
            T.options.__file = "src/services/vue/text-descriptions/TextDescriptions.vue";
            const $ = T.exports,
                O = {
                    instance: void 0,
                    install(t) {
                        t.prototype.$announce || (t.component("TextDescriptions", $), t.prototype.$registerTextDescriptions = t => {
                            this.instance = t
                        }, t.prototype.$announce = t => {
                            if (!this.instance) throw new Error("No TextDescriptions is registered");
                            return this.instance.append(t)
                        })
                    }
                };
            var N = n(90390),
                j = function() {
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
            j._withStripped = !0;
            const D = s().extend({
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
                        this.isVisible = !0, this.options = t, this.timeout && (window.clearTimeout(this.timeout), this.timeout = null), 0 === t.duration ? this.hide() : t.duration && (this.timeout = window.setTimeout((() => {
                            this.hide()
                        }), t.duration))
                    },
                    hide() {
                        this.isVisible = !1, this.options = null, this.timeout && (window.clearTimeout(this.timeout), this.timeout = null)
                    }
                }
            });
            var I = (0, C.Z)(D, j, [], !1, null, "18efc1be", null);
            I.options.__file = "src/services/vue/toast/Toast.vue";
            const A = I.exports,
                M = {
                    instance: void 0,
                    install(t) {
                        t.prototype.$toast || (t.component("Toast", A), t.prototype.$registerToast = t => {
                            this.instance = t
                        }, t.prototype.$toast = t => {
                            if (!this.instance) throw new Error("No ToastComponent is registered");
                            this.instance.show(t)
                        })
                    }
                };
            var P = n(65853),
                R = function() {
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
            R._withStripped = !0;
            const S = s().extend({
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
                        var e, n, o, s;
                        return "," === t.key ? null === (e = this.replayer) || void 0 === e ? void 0 : e.toPreviousEntity() : "." === t.key ? null === (n = this.replayer) || void 0 === n ? void 0 : n.toNextEntity() : "q" === t.key ? null === (o = this.replayer) || void 0 === o ? void 0 : o.toPreviousMarker() : "w" === t.key ? null === (s = this.replayer) || void 0 === s ? void 0 : s.toNextMarker() : null
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
            var H = (0, C.Z)(S, R, [], !1, null, "61a8aafc", null);
            H.options.__file = "src/apps/vue/components/DebugNav.vue";
            const V = H.exports;
            var L = function() {
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
            L._withStripped = !0;
            const K = s().extend({
                i18n: {
                    messages: P.j
                },
                data: () => ({
                    message: ""
                })
            });
            var F = (0, C.Z)(K, L, [], !1, null, "4579deee", null);
            F.options.__file = "src/apps/vue/components/SendDebugModal.vue";
            const U = F.exports;
            var B = function(t, e, n, o) {
                return new(n || (n = Promise))((function(s, i) {
                    function r(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(r, a)
                    }
                    c((o = o.apply(t, e || [])).next())
                }))
            };

            function G(t, e) {
                return B(this, void 0, void 0, (function*() {
                    return (0, d.c)("[Vue] load", t), new Promise((n => {
                        s().prototype.$analytics = u.c.shared, s().prototype.$debug = l.W.shared, s().prototype.$storage = h.K.shared, s().use(r()), s().use(v._), s().use(x.M), s().use(_.S), s().use(g), s().use(b.L), s().use(w.M), s().use(O), s().use(N.p), s().use(M);
                        const o = new(r())({
                            fallbackLocale: "en",
                            messages: P.j
                        });
                        new(s())({
                            i18n: o,
                            el: "#app",
                            components: {
                                Debug: V,
                                Game: e.importFn
                            },
                            ecastKeys: {
                                textDescriptions: "textDescriptions"
                            },
                            mixins: [x.e, _.b],
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
                                    this.onConnectionEvent(t)
                                })), this.$ecast.on("room/exit", (() => {
                                    this.onRoomExit()
                                })), this.$ecast.on("socketClose", (() => {
                                    this.onSocketCloseEvent()
                                })), this.setupI18n(), this.setupSentry(), this.sendScreenView(), this.timerId = window.setInterval(this.sendScreenView.bind(this), 48e4), this.$analytics.setApplication({
                                    appTag: t.room.appTag,
                                    appId: t.room.appId,
                                    appVersion: "4.1.24"
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
                                            subtext: "You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.",
                                            warning: t.room.audienceEnabled ? "" : "THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED",
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
                                    p.o.setup(), o.locale = p.o.locale
                                },
                                setupSentry() {
                                    this.$setSentryTag("app", "vue"), this.$setSentryTag("appTag", t.room.appTag)
                                },
                                onConnectionEvent(e) {
                                    switch (e.status) {
                                        case "waiting":
                                        case "connecting":
                                            this.$toast({
                                                type: "reconnecting",
                                                text: "CONNECTION INTERRUPTED",
                                                subtext: `Attempting to reconnect (${e.attempt} of 5)`
                                            });
                                            break;
                                        case "connected":
                                            this.$toast({
                                                type: "generic",
                                                text: "RECONNECTED",
                                                subtext: "Have fun!",
                                                duration: 1500
                                            }), this.$analytics.trackScreenView(t.room.appTag)
                                    }
                                },
                                onRoomExit() {
                                    return B(this, void 0, void 0, (function*() {
                                        yield this.$showModal("Error", {
                                            text: this.$t("ERROR.ROOM_DISCONNECTED"),
                                            subtext: this.$t("ERROR.ROOM_DESTROYED"),
                                            dismissText: this.$t("ACTION.OK")
                                        }), window.location.reload()
                                    }))
                                },
                                onSocketCloseEvent() {
                                    return B(this, void 0, void 0, (function*() {
                                        yield this.$showModal("Error", {
                                            text: this.$t("ERROR.ROOM_DISCONNECTED"),
                                            dismissText: this.$t("ACTION.OK")
                                        }), window.location.reload()
                                    }))
                                },
                                initKonami() {
                                    new(c())((() => B(this, void 0, void 0, (function*() {
                                        const t = yield this.$showModal(U);
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
//# sourceMappingURL=9139.3d42f958b3e49c2fed4c.js.map