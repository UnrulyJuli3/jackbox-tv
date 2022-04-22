(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [7611], {
        3682: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r, o, i = "function" == typeof Map ? new Map : (r = [], o = [], {
                    has: function(e) {
                        return r.indexOf(e) > -1
                    },
                    get: function(e) {
                        return o[r.indexOf(e)]
                    },
                    set: function(e, t) {
                        -1 === r.indexOf(e) && (r.push(e), o.push(t))
                    },
                    delete: function(e) {
                        var t = r.indexOf(e);
                        t > -1 && (r.splice(t, 1), o.splice(t, 1))
                    }
                }),
                a = function(e) {
                    return new Event(e, {
                        bubbles: !0
                    })
                };
            try {
                new Event("test")
            } catch (r) {
                a = function(e) {
                    var t = document.createEvent("Event");
                    return t.initEvent(e, !0, !1), t
                }
            }

            function c(e) {
                var t = i.get(e);
                t && t.destroy()
            }

            function s(e) {
                var t = i.get(e);
                t && t.update()
            }
            var u = null;
            "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((u = function(e) {
                return e
            }).destroy = function(e) {
                return e
            }, u.update = function(e) {
                return e
            }) : ((u = function(e, t) {
                return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
                    return function(e) {
                        if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {
                            var t, n = null,
                                r = null,
                                o = null,
                                c = function() {
                                    e.clientWidth !== r && d()
                                },
                                s = function(t) {
                                    window.removeEventListener("resize", c, !1), e.removeEventListener("input", d, !1), e.removeEventListener("keyup", d, !1), e.removeEventListener("autosize:destroy", s, !1), e.removeEventListener("autosize:update", d, !1), Object.keys(t).forEach((function(n) {
                                        e.style[n] = t[n]
                                    })), i.delete(e)
                                }.bind(e, {
                                    height: e.style.height,
                                    resize: e.style.resize,
                                    overflowY: e.style.overflowY,
                                    overflowX: e.style.overflowX,
                                    wordWrap: e.style.wordWrap
                                });
                            e.addEventListener("autosize:destroy", s, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", d, !1), window.addEventListener("resize", c, !1), e.addEventListener("input", d, !1), e.addEventListener("autosize:update", d, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", i.set(e, {
                                destroy: s,
                                update: d
                            }), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), n = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(n) && (n = 0), d()
                        }

                        function u(t) {
                            var n = e.style.width;
                            e.style.width = "0px", e.style.width = n, e.style.overflowY = t
                        }

                        function l() {
                            if (0 !== e.scrollHeight) {
                                var t = function(e) {
                                        for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                                            node: e.parentNode,
                                            scrollTop: e.parentNode.scrollTop
                                        }), e = e.parentNode;
                                        return t
                                    }(e),
                                    o = document.documentElement && document.documentElement.scrollTop;
                                e.style.height = "", e.style.height = e.scrollHeight + n + "px", r = e.clientWidth, t.forEach((function(e) {
                                    e.node.scrollTop = e.scrollTop
                                })), o && (document.documentElement.scrollTop = o)
                            }
                        }

                        function d() {
                            l();
                            var t = Math.round(parseFloat(e.style.height)),
                                n = window.getComputedStyle(e, null),
                                r = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
                            if (r < t ? "hidden" === n.overflowY && (u("scroll"), l(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (u("hidden"), l(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), o !== r) {
                                o = r;
                                var i = a("autosize:resized");
                                try {
                                    e.dispatchEvent(i)
                                } catch (e) {}
                            }
                        }
                    }(e)
                })), e
            }).destroy = function(e) {
                return e && Array.prototype.forEach.call(e.length ? e : [e], c), e
            }, u.update = function(e) {
                return e && Array.prototype.forEach.call(e.length ? e : [e], s), e
            });
            const l = u
        },
        79278: (e, t, n) => {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        o(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            n.d(t, {
                ZP: () => X
            });
            var c = "_",
                s = "function",
                u = [];

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
                if (!d(e)) throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
                if (-1 !== e.indexOf(t)) throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n" + "The placeholder character that was received is: ".concat(JSON.stringify(t), "\n\n") + "The mask that was received is: ".concat(JSON.stringify(e)));
                return e.map((function(e) {
                    return e instanceof RegExp ? t : e
                })).join("")
            }

            function d(e) {
                return Array.isArray && Array.isArray(e) || e instanceof Array
            }

            function f(e) {
                for (var t, n = []; - 1 !== (t = e.indexOf("[]"));) n.push(t), e.splice(t, 1);
                return {
                    maskWithoutCaretTraps: e,
                    indexes: n
                }
            }
            var p = [],
                h = "";

            function v() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!d(t)) {
                    if (r(t) !== s) throw new Error("Text-mask:conformToMask; The mask property must be an array.");
                    t = f(t = t(e, n)).maskWithoutCaretTraps
                }
                var o = n.guide,
                    i = void 0 === o || o,
                    a = n.previousConformedValue,
                    u = void 0 === a ? h : a,
                    v = n.placeholderChar,
                    m = void 0 === v ? c : v,
                    b = n.placeholder,
                    y = void 0 === b ? l(t, m) : b,
                    g = n.currentCaretPosition,
                    w = n.keepCharPositions,
                    E = !1 === i && void 0 !== u,
                    O = e.length,
                    k = u.length,
                    T = y.length,
                    x = t.length,
                    j = O - k,
                    L = j > 0,
                    S = g + (L ? -j : 0),
                    $ = S + Math.abs(j);
                if (!0 === w && !L) {
                    for (var M = h, C = S; C < $; C++) y[C] === m && (M += m);
                    e = e.slice(0, S) + M + e.slice(S, O)
                }
                for (var z = e.split(h).map((function(e, t) {
                        return {
                            char: e,
                            isNew: t >= S && t < $
                        }
                    })), X = O - 1; X >= 0; X--) {
                    var Y = z[X].char;
                    if (Y !== m) {
                        var P = X >= S && k === x;
                        Y === y[P ? X - j : X] && z.splice(X, 1)
                    }
                }
                var A = h,
                    N = !1;
                e: for (var H = 0; H < T; H++) {
                    var B = y[H];
                    if (B === m) {
                        if (z.length > 0)
                            for (; z.length > 0;) {
                                var F = z.shift(),
                                    R = F.char,
                                    V = F.isNew;
                                if (R === m && !0 !== E) {
                                    A += m;
                                    continue e
                                }
                                if (t[H].test(R)) {
                                    if (!0 === w && !1 !== V && u !== h && !1 !== i && L) {
                                        for (var W = z.length, D = null, _ = 0; _ < W; _++) {
                                            var I = z[_];
                                            if (I.char !== m && !1 === I.isNew) break;
                                            if (I.char === m) {
                                                D = _;
                                                break
                                            }
                                        }
                                        null !== D ? (A += R, z.splice(D, 1)) : H--
                                    } else A += R;
                                    continue e
                                }
                                N = !0
                            }!1 === E && (A += y.substr(H, T));
                        break
                    }
                    A += B
                }
                if (E && !1 === L) {
                    for (var U = null, J = 0; J < A.length; J++) y[J] === m && (U = J);
                    A = null !== U ? A.substr(0, U + 1) : h
                }
                return {
                    conformedValue: A,
                    meta: {
                        someCharsRejected: N
                    }
                }
            }
            var m = {
                    __nextCharOptional__: !0
                },
                b = {
                    "#": /\d/,
                    A: /[a-z]/i,
                    N: /[a-z0-9]/i,
                    "?": m,
                    X: /./
                },
                y = function(e) {
                    return n = (t = e.toString().replace(/.(\/)[gmiyus]{0,6}$/, (function(e) {
                        return e.replace("/", "?/")
                    }))).lastIndexOf("/"), new RegExp(t.slice(1, n), t.slice(n + 1));
                    var t, n
                },
                g = function(e) {
                    return e instanceof RegExp ? e : function(e) {
                        return new RegExp("/[".concat(function(e) {
                            return "[\\^$.|?*+()".indexOf(e) > -1 ? "\\".concat(e) : e
                        }(e), "]/"))
                    }(e)
                };

            function w(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
                return e.map((function(e, n, r) {
                    var o = t[e] || e,
                        i = r[n - 1],
                        a = t[i] || i;
                    return o === m ? null : a === m ? y(g(o)) : o
                })).filter(Boolean)
            }

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
                return w(e.split(""), t)
            }
            var O = function(e) {
                    return e instanceof HTMLInputElement ? e : e.querySelector("input") || e
                },
                k = function(e) {
                    return "function" == typeof e
                },
                T = function(e) {
                    return "string" == typeof e
                },
                x = function() {
                    var e = new Map,
                        t = {
                            previousValue: "",
                            mask: []
                        };

                    function n(n) {
                        return e.get(n) || a({}, t)
                    }
                    return {
                        partiallyUpdate: function(t, r) {
                            e.set(t, a(a({}, n(t)), r))
                        },
                        remove: function(t) {
                            e.delete(t)
                        },
                        get: n
                    }
                }();

            function j(e) {
                ! function(e, t) {
                    var n = document.createEvent("HTMLEvents");
                    n.initEvent("input", !0, !0), e.dispatchEvent(n)
                }(e)
            }

            function L(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.value,
                    r = x.get(e),
                    o = r.previousValue,
                    i = r.mask,
                    a = n !== o,
                    c = n.length > o.length,
                    s = n && a && c;
                if ((t || s) && i) {
                    var u = v(n, i, {
                            guide: !1
                        }),
                        l = u.conformedValue;
                    e.value = l, j(e)
                }
                x.partiallyUpdate(e, {
                    previousValue: n
                })
            }

            function S(e, t, n) {
                var r;
                r = Array.isArray(t) ? function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
                    return w(e.map((function(e) {
                        return e instanceof RegExp ? e : "string" == typeof e ? e.split("") : null
                    })).filter(Boolean).reduce((function(e, t) {
                        return e.concat(t)
                    }), []), t)
                }(t, n) : k(t) ? t : T(t) && t.length > 0 ? E(t, n) : t, x.partiallyUpdate(e, {
                    mask: r
                })
            }

            function $(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
                return null === e || Array.isArray(e) || "object" !== r(e) ? t : Object.keys(e).reduce((function(t, n) {
                    var r = e[n];
                    return null === r || r instanceof RegExp ? a(a({}, t), {}, o({}, n, r)) : t
                }), t)
            }

            function M(e) {
                return (Array.isArray(e) ? e : [e]).filter((function(e) {
                    return T(e) || e instanceof RegExp
                })).toString()
            }

            function C() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = $(e && e.placeholders);
                return {
                    bind: function(e, n) {
                        var r = n.value;
                        S(e = O(e), r, t), L(e)
                    },
                    componentUpdated: function(e, n) {
                        var r = n.value,
                            o = n.oldValue;
                        e = O(e);
                        var i = k(r) || M(o) !== M(r);
                        i && S(e, r, t), L(e, i)
                    },
                    unbind: function(e) {
                        e = O(e), x.remove(e)
                    }
                }
            }
            C();
            var z = function(e, t) {
                var n = E(t);
                return T(e) || Number.isFinite(e) ? v("".concat(e), n, {
                    guide: !1
                }).conformedValue : e
            };
            const X = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.directive("mask", C(t)), e.filter("VMask", z)
            }
        },
        78627: e => {
            function t(e) {
                return -1 !== e.type.indexOf("mouse") ? e.clientX : e.touches[0].clientX
            }

            function n(e) {
                return -1 !== e.type.indexOf("mouse") ? e.clientY : e.touches[0].clientY
            }
            var r = function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        window.addEventListener("test", null, t)
                    } catch (e) {}
                    return e
                }(),
                o = 0,
                i = {
                    install: function(e, i) {
                        var a = Object.assign({}, {
                            disableClick: !1,
                            tapTolerance: 10,
                            swipeTolerance: 30,
                            touchHoldTolerance: 400,
                            longTapTimeInterval: 400,
                            touchClass: "",
                            namespace: "touch"
                        }, i);

                        function c(e) {
                            var r = this.$$touchObj,
                                i = e.type.indexOf("touch") >= 0,
                                a = e.type.indexOf("mouse") >= 0,
                                c = this;
                            i && (o = e.timeStamp), a && o && e.timeStamp - o < 350 || r.touchStarted || (h(this), r.touchStarted = !0, r.touchMoved = !1, r.swipeOutBounded = !1, r.startX = t(e), r.startY = n(e), r.currentX = 0, r.currentY = 0, r.touchStartTime = e.timeStamp, r.touchHoldTimer = setTimeout((function() {
                                r.touchHoldTimer = null, p(e, c, "touchhold")
                            }), r.options.touchHoldTolerance), p(e, this, "start"))
                        }

                        function s(e) {
                            var r = this.$$touchObj;
                            if (r.currentX = t(e), r.currentY = n(e), r.touchMoved) {
                                if (!r.swipeOutBounded) {
                                    var o = r.options.swipeTolerance;
                                    r.swipeOutBounded = Math.abs(r.startX - r.currentX) > o && Math.abs(r.startY - r.currentY) > o
                                }
                            } else {
                                var i = r.options.tapTolerance;
                                r.touchMoved = Math.abs(r.startX - r.currentX) > i || Math.abs(r.startY - r.currentY) > i, r.touchMoved && (m(r), p(e, this, "moved"))
                            }
                            r.touchMoved && p(e, this, "moving")
                        }

                        function u() {
                            var e = this.$$touchObj;
                            m(e), v(this), e.touchStarted = e.touchMoved = !1, e.startX = e.startY = 0
                        }

                        function l(e) {
                            var t = this.$$touchObj,
                                n = e.type.indexOf("touch") >= 0,
                                r = e.type.indexOf("mouse") >= 0;
                            n && (o = e.timeStamp);
                            var i = n && !t.touchHoldTimer;
                            if (m(t), t.touchStarted = !1, v(this), !(r && o && e.timeStamp - o < 350))
                                if (p(e, this, "end"), t.touchMoved) {
                                    if (!t.swipeOutBounded) {
                                        var a, c = t.options.swipeTolerance,
                                            s = Math.abs(t.startY - t.currentY),
                                            u = Math.abs(t.startX - t.currentX);
                                        (s > c || u > c) && (a = s > c ? t.startY > t.currentY ? "top" : "bottom" : t.startX > t.currentX ? "left" : "right", t.callbacks["swipe." + a] ? p(e, this, "swipe." + a, a) : p(e, this, "swipe", a))
                                    }
                                } else if (t.callbacks.longtap && e.timeStamp - t.touchStartTime > t.options.longTapTimeInterval) e.cancelable && e.preventDefault(), p(e, this, "longtap");
                            else {
                                if (t.callbacks.touchhold && i) return void(e.cancelable && e.preventDefault());
                                p(e, this, "tap")
                            }
                        }

                        function d() {
                            h(this)
                        }

                        function f() {
                            v(this)
                        }

                        function p(e, t, n, r) {
                            var o = t.$$touchObj,
                                i = o && o.callbacks[n] || [];
                            if (0 === i.length) return null;
                            for (var a = 0; a < i.length; a++) {
                                var c = i[a];
                                c.modifiers.stop && e.stopPropagation(), c.modifiers.prevent && e.cancelable && e.preventDefault(), c.modifiers.self && e.target !== e.currentTarget || "function" == typeof c.value && (r ? c.value(r, e) : c.value(e))
                            }
                        }

                        function h(e) {
                            var t = e.$$touchObj.options.touchClass;
                            t && e.classList.add(t)
                        }

                        function v(e) {
                            var t = e.$$touchObj.options.touchClass;
                            t && e.classList.remove(t)
                        }

                        function m(e) {
                            e.touchHoldTimer && (clearTimeout(e.touchHoldTimer), e.touchHoldTimer = null)
                        }

                        function b(e, t) {
                            var n = e.$$touchObj || {
                                callbacks: {},
                                hasBindTouchEvents: !1,
                                options: a
                            };
                            return t && (n.options = Object.assign({}, n.options, t)), e.$$touchObj = n, e.$$touchObj
                        }
                        e.directive(a.namespace, {
                            bind: function(e, t) {
                                var n = b(e),
                                    o = !!r && {
                                        passive: !0
                                    },
                                    i = t.arg || "tap";
                                switch (i) {
                                    case "swipe":
                                        var a = t.modifiers;
                                        if (a.left || a.right || a.top || a.bottom) {
                                            for (var p in t.modifiers)
                                                if (["left", "right", "top", "bottom"].indexOf(p) >= 0) {
                                                    var h = "swipe." + p;
                                                    n.callbacks[h] = n.callbacks[h] || [], n.callbacks[h].push(t)
                                                }
                                        } else n.callbacks.swipe = n.callbacks.swipe || [], n.callbacks.swipe.push(t);
                                        break;
                                    case "start":
                                    case "moving":
                                        t.modifiers.disablePassive && (o = !1);
                                    default:
                                        n.callbacks[i] = n.callbacks[i] || [], n.callbacks[i].push(t)
                                }
                                n.hasBindTouchEvents || (e.addEventListener("touchstart", c, o), e.addEventListener("touchmove", s, o), e.addEventListener("touchcancel", u), e.addEventListener("touchend", l), n.options.disableClick || (e.addEventListener("mousedown", c), e.addEventListener("mousemove", s), e.addEventListener("mouseup", l), e.addEventListener("mouseenter", d), e.addEventListener("mouseleave", f)), n.hasBindTouchEvents = !0)
                            },
                            unbind: function(e) {
                                e.removeEventListener("touchstart", c), e.removeEventListener("touchmove", s), e.removeEventListener("touchcancel", u), e.removeEventListener("touchend", l), e.$$touchObj && !e.$$touchObj.options.disableClick && (e.removeEventListener("mousedown", c), e.removeEventListener("mousemove", s), e.removeEventListener("mouseup", l), e.removeEventListener("mouseenter", d), e.removeEventListener("mouseleave", f)), delete e.$$touchObj
                            }
                        }), e.directive(a.namespace + "-class", {
                            bind: function(e, t) {
                                b(e, {
                                    touchClass: t.value
                                })
                            }
                        }), e.directive(a.namespace + "-options", {
                            bind: function(e, t) {
                                b(e, t.value)
                            }
                        })
                    }
                };
            e.exports = i
        }
    }
]);
//# sourceMappingURL=sourcemaps/7611.9adaad213db43a3256d2.js.map