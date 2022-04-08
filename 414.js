/*! For license information please see 414.3519a27552eadc589ca4.js.LICENSE.txt */
(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [414], {
        79367: function(t, e) {
            var n, o;
            void 0 === (o = "function" == typeof(n = function(t, e) {
                "use strict";
                var n, o, i = "function" == typeof Map ? new Map : (n = [], o = [], {
                        has: function(t) {
                            return n.indexOf(t) > -1
                        },
                        get: function(t) {
                            return o[n.indexOf(t)]
                        },
                        set: function(t, e) {
                            -1 === n.indexOf(t) && (n.push(t), o.push(e))
                        },
                        delete: function(t) {
                            var e = n.indexOf(t);
                            e > -1 && (n.splice(e, 1), o.splice(e, 1))
                        }
                    }),
                    r = function(t) {
                        return new Event(t, {
                            bubbles: !0
                        })
                    };
                try {
                    new Event("test")
                } catch (t) {
                    r = function(t) {
                        var e = document.createEvent("Event");
                        return e.initEvent(t, !0, !1), e
                    }
                }

                function a(t) {
                    if (t && t.nodeName && "TEXTAREA" === t.nodeName && !i.has(t)) {
                        var e = null,
                            n = null,
                            o = null,
                            a = function() {
                                t.clientWidth !== n && d()
                            },
                            l = function(e) {
                                window.removeEventListener("resize", a, !1), t.removeEventListener("input", d, !1), t.removeEventListener("keyup", d, !1), t.removeEventListener("autosize:destroy", l, !1), t.removeEventListener("autosize:update", d, !1), Object.keys(e).forEach((function(n) {
                                    t.style[n] = e[n]
                                })), i.delete(t)
                            }.bind(t, {
                                height: t.style.height,
                                resize: t.style.resize,
                                overflowY: t.style.overflowY,
                                overflowX: t.style.overflowX,
                                wordWrap: t.style.wordWrap
                            });
                        t.addEventListener("autosize:destroy", l, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", d, !1), window.addEventListener("resize", a, !1), t.addEventListener("input", d, !1), t.addEventListener("autosize:update", d, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", i.set(t, {
                            destroy: l,
                            update: d
                        }), "vertical" === (s = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === s.resize && (t.style.resize = "horizontal"), e = "content-box" === s.boxSizing ? -(parseFloat(s.paddingTop) + parseFloat(s.paddingBottom)) : parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth), isNaN(e) && (e = 0), d()
                    }
                    var s;

                    function c(e) {
                        var n = t.style.width;
                        t.style.width = "0px", t.offsetWidth, t.style.width = n, t.style.overflowY = e
                    }

                    function u() {
                        if (0 !== t.scrollHeight) {
                            var o = function(t) {
                                    for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
                                        node: t.parentNode,
                                        scrollTop: t.parentNode.scrollTop
                                    }), t = t.parentNode;
                                    return e
                                }(t),
                                i = document.documentElement && document.documentElement.scrollTop;
                            t.style.height = "", t.style.height = t.scrollHeight + e + "px", n = t.clientWidth, o.forEach((function(t) {
                                t.node.scrollTop = t.scrollTop
                            })), i && (document.documentElement.scrollTop = i)
                        }
                    }

                    function d() {
                        u();
                        var e = Math.round(parseFloat(t.style.height)),
                            n = window.getComputedStyle(t, null),
                            i = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : t.offsetHeight;
                        if (i < e ? "hidden" === n.overflowY && (c("scroll"), u(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== n.overflowY && (c("hidden"), u(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), o !== i) {
                            o = i;
                            var a = r("autosize:resized");
                            try {
                                t.dispatchEvent(a)
                            } catch (t) {}
                        }
                    }
                }

                function l(t) {
                    var e = i.get(t);
                    e && e.destroy()
                }

                function s(t) {
                    var e = i.get(t);
                    e && e.update()
                }
                var c = null;
                "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((c = function(t) {
                    return t
                }).destroy = function(t) {
                    return t
                }, c.update = function(t) {
                    return t
                }) : ((c = function(t, e) {
                    return t && Array.prototype.forEach.call(t.length ? t : [t], (function(t) {
                        return a(t)
                    })), t
                }).destroy = function(t) {
                    return t && Array.prototype.forEach.call(t.length ? t : [t], l), t
                }, c.update = function(t) {
                    return t && Array.prototype.forEach.call(t.length ? t : [t], s), t
                }), e.default = c, t.exports = e.default
            }) ? n.apply(e, [t, e]) : n) || (t.exports = o)
        },
        27091: t => {
            "use strict";
            t.exports = function(t, e) {
                return e || (e = {}), t ? (t = String(t.__esModule ? t.default : t), e.hash && (t += e.hash), e.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(t) ? '"'.concat(t, '"') : t) : t
            }
        },
        51474: (t, e, n) => {
            "use strict";

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function r() {
                return (r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
                    }
                    return t
                }).apply(this, arguments)
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        o = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    })))), o.forEach((function(e) {
                        i(t, e, n[e])
                    }))
                }
                return t
            }

            function l(t, e) {
                if (null == t) return {};
                var n, o, i = function(t, e) {
                    if (null == t) return {};
                    var n, o, i = {},
                        r = Object.keys(t);
                    for (o = 0; o < r.length; o++) n = r[o], e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < r.length; o++) n = r[o], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                }
                return i
            }

            function s(t) {
                if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(t)
            }
            n.d(e, {
                ZP: () => ne
            });
            var c = s(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
                u = s(/Edge/i),
                d = s(/firefox/i),
                h = s(/safari/i) && !s(/chrome/i) && !s(/android/i),
                f = s(/iP(ad|od|hone)/i),
                p = s(/chrome/i) && s(/android/i),
                g = {
                    capture: !1,
                    passive: !1
                };

            function v(t, e, n) {
                t.addEventListener(e, n, !c && g)
            }

            function m(t, e, n) {
                t.removeEventListener(e, n, !c && g)
            }

            function b(t, e) {
                if (e) {
                    if (">" === e[0] && (e = e.substring(1)), t) try {
                        if (t.matches) return t.matches(e);
                        if (t.msMatchesSelector) return t.msMatchesSelector(e);
                        if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e)
                    } catch (t) {
                        return !1
                    }
                    return !1
                }
            }

            function y(t) {
                return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
            }

            function w(t, e, n, o) {
                if (t) {
                    n = n || document;
                    do {
                        if (null != e && (">" === e[0] ? t.parentNode === n && b(t, e) : b(t, e)) || o && t === n) return t;
                        if (t === n) break
                    } while (t = y(t))
                }
                return null
            }
            var E, S = /\s+/g;

            function _(t, e, n) {
                if (t && e)
                    if (t.classList) t.classList[n ? "add" : "remove"](e);
                    else {
                        var o = (" " + t.className + " ").replace(S, " ").replace(" " + e + " ", " ");
                        t.className = (o + (n ? " " + e : "")).replace(S, " ")
                    }
            }

            function D(t, e, n) {
                var o = t && t.style;
                if (o) {
                    if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
                    e in o || -1 !== e.indexOf("webkit") || (e = "-webkit-" + e), o[e] = n + ("string" == typeof n ? "" : "px")
                }
            }

            function T(t, e) {
                var n = "";
                if ("string" == typeof t) n = t;
                else
                    do {
                        var o = D(t, "transform");
                        o && "none" !== o && (n = o + " " + n)
                    } while (!e && (t = t.parentNode));
                var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
                return i && new i(n)
            }

            function C(t, e, n) {
                if (t) {
                    var o = t.getElementsByTagName(e),
                        i = 0,
                        r = o.length;
                    if (n)
                        for (; i < r; i++) n(o[i], i);
                    return o
                }
                return []
            }

            function x() {
                return document.scrollingElement || document.documentElement
            }

            function N(t, e, n, o, i) {
                if (t.getBoundingClientRect || t === window) {
                    var r, a, l, s, u, d, h;
                    if (t !== window && t.parentNode && t !== x() ? (a = (r = t.getBoundingClientRect()).top, l = r.left, s = r.bottom, u = r.right, d = r.height, h = r.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, h = window.innerWidth), (e || n) && t !== window && (i = i || t.parentNode, !c))
                        do {
                            if (i && i.getBoundingClientRect && ("none" !== D(i, "transform") || n && "static" !== D(i, "position"))) {
                                var f = i.getBoundingClientRect();
                                a -= f.top + parseInt(D(i, "border-top-width")), l -= f.left + parseInt(D(i, "border-left-width")), s = a + r.height, u = l + r.width;
                                break
                            }
                        } while (i = i.parentNode);
                    if (o && t !== window) {
                        var p = T(i || t),
                            g = p && p.a,
                            v = p && p.d;
                        p && (s = (a /= v) + (d /= v), u = (l /= g) + (h /= g))
                    }
                    return {
                        top: a,
                        left: l,
                        bottom: s,
                        right: u,
                        width: h,
                        height: d
                    }
                }
            }

            function M(t, e, n) {
                for (var o = k(t, !0), i = N(t)[e]; o;) {
                    var r = N(o)[n];
                    if (!("top" === n || "left" === n ? i >= r : i <= r)) return o;
                    if (o === x()) break;
                    o = k(o, !1)
                }
                return !1
            }

            function O(t, e, n) {
                for (var o = 0, i = 0, r = t.children; i < r.length;) {
                    if ("none" !== r[i].style.display && r[i] !== Xt.ghost && r[i] !== Xt.dragged && w(r[i], n.draggable, t, !1)) {
                        if (o === e) return r[i];
                        o++
                    }
                    i++
                }
                return null
            }

            function A(t, e) {
                for (var n = t.lastElementChild; n && (n === Xt.ghost || "none" === D(n, "display") || e && !b(n, e));) n = n.previousElementSibling;
                return n || null
            }

            function I(t, e) {
                var n = 0;
                if (!t || !t.parentNode) return -1;
                for (; t = t.previousElementSibling;) "TEMPLATE" === t.nodeName.toUpperCase() || t === Xt.clone || e && !b(t, e) || n++;
                return n
            }

            function P(t) {
                var e = 0,
                    n = 0,
                    o = x();
                if (t)
                    do {
                        var i = T(t),
                            r = i.a,
                            a = i.d;
                        e += t.scrollLeft * r, n += t.scrollTop * a
                    } while (t !== o && (t = t.parentNode));
                return [e, n]
            }

            function k(t, e) {
                if (!t || !t.getBoundingClientRect) return x();
                var n = t,
                    o = !1;
                do {
                    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                        var i = D(n);
                        if (n.clientWidth < n.scrollWidth && ("auto" == i.overflowX || "scroll" == i.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == i.overflowY || "scroll" == i.overflowY)) {
                            if (!n.getBoundingClientRect || n === document.body) return x();
                            if (o || e) return n;
                            o = !0
                        }
                    }
                } while (n = n.parentNode);
                return x()
            }

            function X(t, e) {
                return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
            }

            function Y(t, e) {
                return function() {
                    if (!E) {
                        var n = arguments,
                            o = this;
                        1 === n.length ? t.call(o, n[0]) : t.apply(o, n), E = setTimeout((function() {
                            E = void 0
                        }), e)
                    }
                }
            }

            function R(t, e, n) {
                t.scrollLeft += e, t.scrollTop += n
            }

            function F(t) {
                var e = window.Polymer,
                    n = window.jQuery || window.Zepto;
                return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
            }
            var z = "Sortable" + (new Date).getTime();
            var L = [],
                B = {
                    initializeByDefault: !0
                },
                H = {
                    mount: function(t) {
                        for (var e in B) B.hasOwnProperty(e) && !(e in t) && (t[e] = B[e]);
                        L.forEach((function(e) {
                            if (e.pluginName === t.pluginName) throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once")
                        })), L.push(t)
                    },
                    pluginEvent: function(t, e, n) {
                        var o = this;
                        this.eventCanceled = !1, n.cancel = function() {
                            o.eventCanceled = !0
                        };
                        var i = t + "Global";
                        L.forEach((function(o) {
                            e[o.pluginName] && (e[o.pluginName][i] && e[o.pluginName][i](a({
                                sortable: e
                            }, n)), e.options[o.pluginName] && e[o.pluginName][t] && e[o.pluginName][t](a({
                                sortable: e
                            }, n)))
                        }))
                    },
                    initializePlugins: function(t, e, n, o) {
                        for (var i in L.forEach((function(o) {
                                var i = o.pluginName;
                                if (t.options[i] || o.initializeByDefault) {
                                    var a = new o(t, e, t.options);
                                    a.sortable = t, a.options = t.options, t[i] = a, r(n, a.defaults)
                                }
                            })), t.options)
                            if (t.options.hasOwnProperty(i)) {
                                var a = this.modifyOption(t, i, t.options[i]);
                                void 0 !== a && (t.options[i] = a)
                            }
                    },
                    getEventProperties: function(t, e) {
                        var n = {};
                        return L.forEach((function(o) {
                            "function" == typeof o.eventProperties && r(n, o.eventProperties.call(e[o.pluginName], t))
                        })), n
                    },
                    modifyOption: function(t, e, n) {
                        var o;
                        return L.forEach((function(i) {
                            t[i.pluginName] && i.optionListeners && "function" == typeof i.optionListeners[e] && (o = i.optionListeners[e].call(t[i.pluginName], n))
                        })), o
                    }
                };
            var W = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    o = n.evt,
                    i = l(n, ["evt"]);
                H.pluginEvent.bind(Xt)(t, e, a({
                    dragEl: G,
                    parentEl: U,
                    ghostEl: V,
                    rootEl: q,
                    nextEl: Z,
                    lastDownEl: Q,
                    cloneEl: K,
                    cloneHidden: $,
                    dragStarted: dt,
                    putSortable: it,
                    activeSortable: Xt.active,
                    originalEvent: o,
                    oldIndex: J,
                    oldDraggableIndex: et,
                    newIndex: tt,
                    newDraggableIndex: nt,
                    hideGhostForTarget: At,
                    unhideGhostForTarget: It,
                    cloneNowHidden: function() {
                        $ = !0
                    },
                    cloneNowShown: function() {
                        $ = !1
                    },
                    dispatchSortableEvent: function(t) {
                        j({
                            sortable: e,
                            name: t,
                            originalEvent: o
                        })
                    }
                }, i))
            };

            function j(t) {
                ! function(t) {
                    var e = t.sortable,
                        n = t.rootEl,
                        o = t.name,
                        i = t.targetEl,
                        r = t.cloneEl,
                        l = t.toEl,
                        s = t.fromEl,
                        d = t.oldIndex,
                        h = t.newIndex,
                        f = t.oldDraggableIndex,
                        p = t.newDraggableIndex,
                        g = t.originalEvent,
                        v = t.putSortable,
                        m = t.extraEventProperties;
                    if (e = e || n && n[z]) {
                        var b, y = e.options,
                            w = "on" + o.charAt(0).toUpperCase() + o.substr(1);
                        !window.CustomEvent || c || u ? (b = document.createEvent("Event")).initEvent(o, !0, !0) : b = new CustomEvent(o, {
                            bubbles: !0,
                            cancelable: !0
                        }), b.to = l || n, b.from = s || n, b.item = i || n, b.clone = r, b.oldIndex = d, b.newIndex = h, b.oldDraggableIndex = f, b.newDraggableIndex = p, b.originalEvent = g, b.pullMode = v ? v.lastPutMode : void 0;
                        var E = a({}, m, H.getEventProperties(o, e));
                        for (var S in E) b[S] = E[S];
                        n && n.dispatchEvent(b), y[w] && y[w].call(e, b)
                    }
                }(a({
                    putSortable: it,
                    cloneEl: K,
                    targetEl: G,
                    rootEl: q,
                    oldIndex: J,
                    oldDraggableIndex: et,
                    newIndex: tt,
                    newDraggableIndex: nt
                }, t))
            }
            var G, U, V, q, Z, Q, K, $, J, tt, et, nt, ot, it, rt, at, lt, st, ct, ut, dt, ht, ft, pt, gt, vt = !1,
                mt = !1,
                bt = [],
                yt = !1,
                wt = !1,
                Et = [],
                St = !1,
                _t = [],
                Dt = "undefined" != typeof document,
                Tt = f,
                Ct = u || c ? "cssFloat" : "float",
                xt = Dt && !p && !f && "draggable" in document.createElement("div"),
                Nt = function() {
                    if (Dt) {
                        if (c) return !1;
                        var t = document.createElement("x");
                        return t.style.cssText = "pointer-events:auto", "auto" === t.style.pointerEvents
                    }
                }(),
                Mt = function(t, e) {
                    var n = D(t),
                        o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
                        i = O(t, 0, e),
                        r = O(t, 1, e),
                        a = i && D(i),
                        l = r && D(r),
                        s = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + N(i).width,
                        c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + N(r).width;
                    if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
                    if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
                    if (i && a.float && "none" !== a.float) {
                        var u = "left" === a.float ? "left" : "right";
                        return !r || "both" !== l.clear && l.clear !== u ? "horizontal" : "vertical"
                    }
                    return i && ("block" === a.display || "flex" === a.display || "table" === a.display || "grid" === a.display || s >= o && "none" === n[Ct] || r && "none" === n[Ct] && s + c > o) ? "vertical" : "horizontal"
                },
                Ot = function(t) {
                    function e(t, n) {
                        return function(o, i, r, a) {
                            var l = o.options.group.name && i.options.group.name && o.options.group.name === i.options.group.name;
                            if (null == t && (n || l)) return !0;
                            if (null == t || !1 === t) return !1;
                            if (n && "clone" === t) return t;
                            if ("function" == typeof t) return e(t(o, i, r, a), n)(o, i, r, a);
                            var s = (n ? o : i).options.group.name;
                            return !0 === t || "string" == typeof t && t === s || t.join && t.indexOf(s) > -1
                        }
                    }
                    var n = {},
                        i = t.group;
                    i && "object" == o(i) || (i = {
                        name: i
                    }), n.name = i.name, n.checkPull = e(i.pull, !0), n.checkPut = e(i.put), n.revertClone = i.revertClone, t.group = n
                },
                At = function() {
                    !Nt && V && D(V, "display", "none")
                },
                It = function() {
                    !Nt && V && D(V, "display", "")
                };
            Dt && document.addEventListener("click", (function(t) {
                if (mt) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), mt = !1, !1
            }), !0);
            var Pt = function(t) {
                    if (G) {
                        t = t.touches ? t.touches[0] : t;
                        var e = (i = t.clientX, r = t.clientY, bt.some((function(t) {
                            if (!A(t)) {
                                var e = N(t),
                                    n = t[z].options.emptyInsertThreshold,
                                    o = i >= e.left - n && i <= e.right + n,
                                    l = r >= e.top - n && r <= e.bottom + n;
                                return n && o && l ? a = t : void 0
                            }
                        })), a);
                        if (e) {
                            var n = {};
                            for (var o in t) t.hasOwnProperty(o) && (n[o] = t[o]);
                            n.target = n.rootEl = e, n.preventDefault = void 0, n.stopPropagation = void 0, e[z]._onDragOver(n)
                        }
                    }
                    var i, r, a
                },
                kt = function(t) {
                    G && G.parentNode[z]._isOutsideThisEl(t.target)
                };

            function Xt(t, e) {
                if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
                this.el = t, this.options = e = r({}, e), t[z] = this;
                var n, o, i = {
                    group: null,
                    sort: !0,
                    disabled: !1,
                    store: null,
                    handle: null,
                    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
                    swapThreshold: 1,
                    invertSwap: !1,
                    invertedSwapThreshold: null,
                    removeCloneOnHide: !0,
                    direction: function() {
                        return Mt(t, this.options)
                    },
                    ghostClass: "sortable-ghost",
                    chosenClass: "sortable-chosen",
                    dragClass: "sortable-drag",
                    ignore: "a, img",
                    filter: null,
                    preventOnFilter: !0,
                    animation: 0,
                    easing: null,
                    setData: function(t, e) {
                        t.setData("Text", e.textContent)
                    },
                    dropBubble: !1,
                    dragoverBubble: !1,
                    dataIdAttr: "data-id",
                    delay: 0,
                    delayOnTouchOnly: !1,
                    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
                    forceFallback: !1,
                    fallbackClass: "sortable-fallback",
                    fallbackOnBody: !1,
                    fallbackTolerance: 0,
                    fallbackOffset: {
                        x: 0,
                        y: 0
                    },
                    supportPointer: !1 !== Xt.supportPointer && "PointerEvent" in window && !h,
                    emptyInsertThreshold: 5
                };
                for (var l in H.initializePlugins(this, t, i), i) !(l in e) && (e[l] = i[l]);
                for (var s in Ot(e), this) "_" === s.charAt(0) && "function" == typeof this[s] && (this[s] = this[s].bind(this));
                this.nativeDraggable = !e.forceFallback && xt, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? v(t, "pointerdown", this._onTapStart) : (v(t, "mousedown", this._onTapStart), v(t, "touchstart", this._onTapStart)), this.nativeDraggable && (v(t, "dragover", this), v(t, "dragenter", this)), bt.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), r(this, (o = [], {
                    captureAnimationState: function() {
                        o = [], this.options.animation && [].slice.call(this.el.children).forEach((function(t) {
                            if ("none" !== D(t, "display") && t !== Xt.ghost) {
                                o.push({
                                    target: t,
                                    rect: N(t)
                                });
                                var e = a({}, o[o.length - 1].rect);
                                if (t.thisAnimationDuration) {
                                    var n = T(t, !0);
                                    n && (e.top -= n.f, e.left -= n.e)
                                }
                                t.fromRect = e
                            }
                        }))
                    },
                    addAnimationState: function(t) {
                        o.push(t)
                    },
                    removeAnimationState: function(t) {
                        o.splice(function(t, e) {
                            for (var n in t)
                                if (t.hasOwnProperty(n))
                                    for (var o in e)
                                        if (e.hasOwnProperty(o) && e[o] === t[n][o]) return Number(n);
                            return -1
                        }(o, {
                            target: t
                        }), 1)
                    },
                    animateAll: function(t) {
                        var e = this;
                        if (!this.options.animation) return clearTimeout(n), void("function" == typeof t && t());
                        var i = !1,
                            r = 0;
                        o.forEach((function(t) {
                            var n = 0,
                                o = t.target,
                                a = o.fromRect,
                                l = N(o),
                                s = o.prevFromRect,
                                c = o.prevToRect,
                                u = t.rect,
                                d = T(o, !0);
                            d && (l.top -= d.f, l.left -= d.e), o.toRect = l, o.thisAnimationDuration && X(s, l) && !X(a, l) && (u.top - l.top) / (u.left - l.left) == (a.top - l.top) / (a.left - l.left) && (n = function(t, e, n, o) {
                                return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * o.animation
                            }(u, s, c, e.options)), X(l, a) || (o.prevFromRect = a, o.prevToRect = l, n || (n = e.options.animation), e.animate(o, u, l, n)), n && (i = !0, r = Math.max(r, n), clearTimeout(o.animationResetTimer), o.animationResetTimer = setTimeout((function() {
                                o.animationTime = 0, o.prevFromRect = null, o.fromRect = null, o.prevToRect = null, o.thisAnimationDuration = null
                            }), n), o.thisAnimationDuration = n)
                        })), clearTimeout(n), i ? n = setTimeout((function() {
                            "function" == typeof t && t()
                        }), r) : "function" == typeof t && t(), o = []
                    },
                    animate: function(t, e, n, o) {
                        if (o) {
                            D(t, "transition", ""), D(t, "transform", "");
                            var i = T(this.el),
                                r = i && i.a,
                                a = i && i.d,
                                l = (e.left - n.left) / (r || 1),
                                s = (e.top - n.top) / (a || 1);
                            t.animatingX = !!l, t.animatingY = !!s, D(t, "transform", "translate3d(" + l + "px," + s + "px,0)"), this.forRepaintDummy = function(t) {
                                return t.offsetWidth
                            }(t), D(t, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), D(t, "transform", "translate3d(0,0,0)"), "number" == typeof t.animated && clearTimeout(t.animated), t.animated = setTimeout((function() {
                                D(t, "transition", ""), D(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1
                            }), o)
                        }
                    }
                }))
            }

            function Yt(t, e, n, o, i, r, a, l) {
                var s, d, h = t[z],
                    f = h.options.onMove;
                return !window.CustomEvent || c || u ? (s = document.createEvent("Event")).initEvent("move", !0, !0) : s = new CustomEvent("move", {
                    bubbles: !0,
                    cancelable: !0
                }), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = i || e, s.relatedRect = r || N(e), s.willInsertAfter = l, s.originalEvent = a, t.dispatchEvent(s), f && (d = f.call(h, s, a)), d
            }

            function Rt(t) {
                t.draggable = !1
            }

            function Ft() {
                St = !1
            }

            function zt(t) {
                for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--;) o += e.charCodeAt(n);
                return o.toString(36)
            }

            function Lt(t) {
                return setTimeout(t, 0)
            }

            function Bt(t) {
                return clearTimeout(t)
            }
            Xt.prototype = {
                constructor: Xt,
                _isOutsideThisEl: function(t) {
                    this.el.contains(t) || t === this.el || (ht = null)
                },
                _getDirection: function(t, e) {
                    return "function" == typeof this.options.direction ? this.options.direction.call(this, t, e, G) : this.options.direction
                },
                _onTapStart: function(t) {
                    if (t.cancelable) {
                        var e = this,
                            n = this.el,
                            o = this.options,
                            i = o.preventOnFilter,
                            r = t.type,
                            a = t.touches && t.touches[0] || t.pointerType && "touch" === t.pointerType && t,
                            l = (a || t).target,
                            s = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l,
                            c = o.filter;
                        if (function(t) {
                                _t.length = 0;
                                for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
                                    var o = e[n];
                                    o.checked && _t.push(o)
                                }
                            }(n), !G && !(/mousedown|pointerdown/.test(r) && 0 !== t.button || o.disabled) && !s.isContentEditable && (this.nativeDraggable || !h || !l || "SELECT" !== l.tagName.toUpperCase()) && !((l = w(l, o.draggable, n, !1)) && l.animated || Q === l)) {
                            if (J = I(l), et = I(l, o.draggable), "function" == typeof c) {
                                if (c.call(this, t, l, this)) return j({
                                    sortable: e,
                                    rootEl: s,
                                    name: "filter",
                                    targetEl: l,
                                    toEl: n,
                                    fromEl: n
                                }), W("filter", e, {
                                    evt: t
                                }), void(i && t.cancelable && t.preventDefault())
                            } else if (c && (c = c.split(",").some((function(o) {
                                    if (o = w(s, o.trim(), n, !1)) return j({
                                        sortable: e,
                                        rootEl: o,
                                        name: "filter",
                                        targetEl: l,
                                        fromEl: n,
                                        toEl: n
                                    }), W("filter", e, {
                                        evt: t
                                    }), !0
                                })))) return void(i && t.cancelable && t.preventDefault());
                            o.handle && !w(s, o.handle, n, !1) || this._prepareDragStart(t, a, l)
                        }
                    }
                },
                _prepareDragStart: function(t, e, n) {
                    var o, i = this,
                        r = i.el,
                        a = i.options,
                        l = r.ownerDocument;
                    if (n && !G && n.parentNode === r) {
                        var s = N(n);
                        if (q = r, U = (G = n).parentNode, Z = G.nextSibling, Q = n, ot = a.group, Xt.dragged = G, rt = {
                                target: G,
                                clientX: (e || t).clientX,
                                clientY: (e || t).clientY
                            }, ct = rt.clientX - s.left, ut = rt.clientY - s.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, G.style["will-change"] = "all", o = function() {
                                W("delayEnded", i, {
                                    evt: t
                                }), Xt.eventCanceled ? i._onDrop() : (i._disableDelayedDragEvents(), !d && i.nativeDraggable && (G.draggable = !0), i._triggerDragStart(t, e), j({
                                    sortable: i,
                                    name: "choose",
                                    originalEvent: t
                                }), _(G, a.chosenClass, !0))
                            }, a.ignore.split(",").forEach((function(t) {
                                C(G, t.trim(), Rt)
                            })), v(l, "dragover", Pt), v(l, "mousemove", Pt), v(l, "touchmove", Pt), v(l, "mouseup", i._onDrop), v(l, "touchend", i._onDrop), v(l, "touchcancel", i._onDrop), d && this.nativeDraggable && (this.options.touchStartThreshold = 4, G.draggable = !0), W("delayStart", this, {
                                evt: t
                            }), !a.delay || a.delayOnTouchOnly && !e || this.nativeDraggable && (u || c)) o();
                        else {
                            if (Xt.eventCanceled) return void this._onDrop();
                            v(l, "mouseup", i._disableDelayedDrag), v(l, "touchend", i._disableDelayedDrag), v(l, "touchcancel", i._disableDelayedDrag), v(l, "mousemove", i._delayedDragTouchMoveHandler), v(l, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && v(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(o, a.delay)
                        }
                    }
                },
                _delayedDragTouchMoveHandler: function(t) {
                    var e = t.touches ? t.touches[0] : t;
                    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
                },
                _disableDelayedDrag: function() {
                    G && Rt(G), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
                },
                _disableDelayedDragEvents: function() {
                    var t = this.el.ownerDocument;
                    m(t, "mouseup", this._disableDelayedDrag), m(t, "touchend", this._disableDelayedDrag), m(t, "touchcancel", this._disableDelayedDrag), m(t, "mousemove", this._delayedDragTouchMoveHandler), m(t, "touchmove", this._delayedDragTouchMoveHandler), m(t, "pointermove", this._delayedDragTouchMoveHandler)
                },
                _triggerDragStart: function(t, e) {
                    e = e || "touch" == t.pointerType && t, !this.nativeDraggable || e ? this.options.supportPointer ? v(document, "pointermove", this._onTouchMove) : v(document, e ? "touchmove" : "mousemove", this._onTouchMove) : (v(G, "dragend", this), v(q, "dragstart", this._onDragStart));
                    try {
                        document.selection ? Lt((function() {
                            document.selection.empty()
                        })) : window.getSelection().removeAllRanges()
                    } catch (t) {}
                },
                _dragStarted: function(t, e) {
                    if (vt = !1, q && G) {
                        W("dragStarted", this, {
                            evt: e
                        }), this.nativeDraggable && v(document, "dragover", kt);
                        var n = this.options;
                        !t && _(G, n.dragClass, !1), _(G, n.ghostClass, !0), Xt.active = this, t && this._appendGhost(), j({
                            sortable: this,
                            name: "start",
                            originalEvent: e
                        })
                    } else this._nulling()
                },
                _emulateDragOver: function() {
                    if (at) {
                        this._lastX = at.clientX, this._lastY = at.clientY, At();
                        for (var t = document.elementFromPoint(at.clientX, at.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(at.clientX, at.clientY)) !== e;) e = t;
                        if (G.parentNode[z]._isOutsideThisEl(t), e)
                            do {
                                if (e[z] && e[z]._onDragOver({
                                        clientX: at.clientX,
                                        clientY: at.clientY,
                                        target: t,
                                        rootEl: e
                                    }) && !this.options.dragoverBubble) break;
                                t = e
                            } while (e = e.parentNode);
                        It()
                    }
                },
                _onTouchMove: function(t) {
                    if (rt) {
                        var e = this.options,
                            n = e.fallbackTolerance,
                            o = e.fallbackOffset,
                            i = t.touches ? t.touches[0] : t,
                            r = V && T(V, !0),
                            a = V && r && r.a,
                            l = V && r && r.d,
                            s = Tt && gt && P(gt),
                            c = (i.clientX - rt.clientX + o.x) / (a || 1) + (s ? s[0] - Et[0] : 0) / (a || 1),
                            u = (i.clientY - rt.clientY + o.y) / (l || 1) + (s ? s[1] - Et[1] : 0) / (l || 1);
                        if (!Xt.active && !vt) {
                            if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n) return;
                            this._onDragStart(t, !0)
                        }
                        if (V) {
                            r ? (r.e += c - (lt || 0), r.f += u - (st || 0)) : r = {
                                a: 1,
                                b: 0,
                                c: 0,
                                d: 1,
                                e: c,
                                f: u
                            };
                            var d = "matrix(".concat(r.a, ",").concat(r.b, ",").concat(r.c, ",").concat(r.d, ",").concat(r.e, ",").concat(r.f, ")");
                            D(V, "webkitTransform", d), D(V, "mozTransform", d), D(V, "msTransform", d), D(V, "transform", d), lt = c, st = u, at = i
                        }
                        t.cancelable && t.preventDefault()
                    }
                },
                _appendGhost: function() {
                    if (!V) {
                        var t = this.options.fallbackOnBody ? document.body : q,
                            e = N(G, !0, Tt, !0, t),
                            n = this.options;
                        if (Tt) {
                            for (gt = t;
                                "static" === D(gt, "position") && "none" === D(gt, "transform") && gt !== document;) gt = gt.parentNode;
                            gt !== document.body && gt !== document.documentElement ? (gt === document && (gt = x()), e.top += gt.scrollTop, e.left += gt.scrollLeft) : gt = x(), Et = P(gt)
                        }
                        _(V = G.cloneNode(!0), n.ghostClass, !1), _(V, n.fallbackClass, !0), _(V, n.dragClass, !0), D(V, "transition", ""), D(V, "transform", ""), D(V, "box-sizing", "border-box"), D(V, "margin", 0), D(V, "top", e.top), D(V, "left", e.left), D(V, "width", e.width), D(V, "height", e.height), D(V, "opacity", "0.8"), D(V, "position", Tt ? "absolute" : "fixed"), D(V, "zIndex", "100000"), D(V, "pointerEvents", "none"), Xt.ghost = V, t.appendChild(V), D(V, "transform-origin", ct / parseInt(V.style.width) * 100 + "% " + ut / parseInt(V.style.height) * 100 + "%")
                    }
                },
                _onDragStart: function(t, e) {
                    var n = this,
                        o = t.dataTransfer,
                        i = n.options;
                    W("dragStart", this, {
                        evt: t
                    }), Xt.eventCanceled ? this._onDrop() : (W("setupClone", this), Xt.eventCanceled || ((K = F(G)).draggable = !1, K.style["will-change"] = "", this._hideClone(), _(K, this.options.chosenClass, !1), Xt.clone = K), n.cloneId = Lt((function() {
                        W("clone", n), Xt.eventCanceled || (n.options.removeCloneOnHide || q.insertBefore(K, G), n._hideClone(), j({
                            sortable: n,
                            name: "clone"
                        }))
                    })), !e && _(G, i.dragClass, !0), e ? (mt = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (m(document, "mouseup", n._onDrop), m(document, "touchend", n._onDrop), m(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", i.setData && i.setData.call(n, o, G)), v(document, "drop", n), D(G, "transform", "translateZ(0)")), vt = !0, n._dragStartId = Lt(n._dragStarted.bind(n, e, t)), v(document, "selectstart", n), dt = !0, h && D(document.body, "user-select", "none"))
                },
                _onDragOver: function(t) {
                    var e, n, o, i, r = this.el,
                        l = t.target,
                        s = this.options,
                        c = s.group,
                        u = Xt.active,
                        d = ot === c,
                        h = s.sort,
                        f = it || u,
                        p = this,
                        g = !1;
                    if (!St) {
                        if (void 0 !== t.preventDefault && t.cancelable && t.preventDefault(), l = w(l, s.draggable, r, !0), Y("dragOver"), Xt.eventCanceled) return g;
                        if (G.contains(t.target) || l.animated && l.animatingX && l.animatingY || p._ignoreWhileAnimating === l) return L(!1);
                        if (mt = !1, u && !s.disabled && (d ? h || (o = !q.contains(G)) : it === this || (this.lastPutMode = ot.checkPull(this, u, G, t)) && c.checkPut(this, u, G, t))) {
                            if (i = "vertical" === this._getDirection(t, l), e = N(G), Y("dragOverValid"), Xt.eventCanceled) return g;
                            if (o) return U = q, F(), this._hideClone(), Y("revert"), Xt.eventCanceled || (Z ? q.insertBefore(G, Z) : q.appendChild(G)), L(!0);
                            var v = A(r, s.draggable);
                            if (!v || function(t, e, n) {
                                    var o = N(A(n.el, n.options.draggable));
                                    return e ? t.clientX > o.right + 10 || t.clientX <= o.right && t.clientY > o.bottom && t.clientX >= o.left : t.clientX > o.right && t.clientY > o.top || t.clientX <= o.right && t.clientY > o.bottom + 10
                                }(t, i, this) && !v.animated) {
                                if (v === G) return L(!1);
                                if (v && r === t.target && (l = v), l && (n = N(l)), !1 !== Yt(q, r, G, e, l, n, t, !!l)) return F(), r.appendChild(G), U = r, B(), L(!0)
                            } else if (l.parentNode === r) {
                                n = N(l);
                                var m, b, y, E = G.parentNode !== r,
                                    S = ! function(t, e, n) {
                                        var o = n ? t.left : t.top,
                                            i = n ? t.right : t.bottom,
                                            r = n ? t.width : t.height,
                                            a = n ? e.left : e.top,
                                            l = n ? e.right : e.bottom,
                                            s = n ? e.width : e.height;
                                        return o === a || i === l || o + r / 2 === a + s / 2
                                    }(G.animated && G.toRect || e, l.animated && l.toRect || n, i),
                                    T = i ? "top" : "left",
                                    C = M(l, "top", "top") || M(G, "top", "top"),
                                    x = C ? C.scrollTop : void 0;
                                if (ht !== l && (b = n[T], yt = !1, wt = !S && s.invertSwap || E), 0 !== (m = function(t, e, n, o, i, r, a, l) {
                                        var s = o ? t.clientY : t.clientX,
                                            c = o ? n.height : n.width,
                                            u = o ? n.top : n.left,
                                            d = o ? n.bottom : n.right,
                                            h = !1;
                                        if (!a)
                                            if (l && pt < c * i) {
                                                if (!yt && (1 === ft ? s > u + c * r / 2 : s < d - c * r / 2) && (yt = !0), yt) h = !0;
                                                else if (1 === ft ? s < u + pt : s > d - pt) return -ft
                                            } else if (s > u + c * (1 - i) / 2 && s < d - c * (1 - i) / 2) return function(t) {
                                            return I(G) < I(t) ? 1 : -1
                                        }(e);
                                        return (h = h || a) && (s < u + c * r / 2 || s > d - c * r / 2) ? s > u + c / 2 ? 1 : -1 : 0
                                    }(t, l, n, i, S ? 1 : s.swapThreshold, null == s.invertedSwapThreshold ? s.swapThreshold : s.invertedSwapThreshold, wt, ht === l))) {
                                    var O = I(G);
                                    do {
                                        O -= m, y = U.children[O]
                                    } while (y && ("none" === D(y, "display") || y === V))
                                }
                                if (0 === m || y === l) return L(!1);
                                ht = l, ft = m;
                                var P = l.nextElementSibling,
                                    k = !1,
                                    X = Yt(q, r, G, e, l, n, t, k = 1 === m);
                                if (!1 !== X) return 1 !== X && -1 !== X || (k = 1 === X), St = !0, setTimeout(Ft, 30), F(), k && !P ? r.appendChild(G) : l.parentNode.insertBefore(G, k ? P : l), C && R(C, 0, x - C.scrollTop), U = G.parentNode, void 0 === b || wt || (pt = Math.abs(b - N(l)[T])), B(), L(!0)
                            }
                            if (r.contains(G)) return L(!1)
                        }
                        return !1
                    }

                    function Y(s, c) {
                        W(s, p, a({
                            evt: t,
                            isOwner: d,
                            axis: i ? "vertical" : "horizontal",
                            revert: o,
                            dragRect: e,
                            targetRect: n,
                            canSort: h,
                            fromSortable: f,
                            target: l,
                            completed: L,
                            onMove: function(n, o) {
                                return Yt(q, r, G, e, n, N(n), t, o)
                            },
                            changed: B
                        }, c))
                    }

                    function F() {
                        Y("dragOverAnimationCapture"), p.captureAnimationState(), p !== f && f.captureAnimationState()
                    }

                    function L(e) {
                        return Y("dragOverCompleted", {
                            insertion: e
                        }), e && (d ? u._hideClone() : u._showClone(p), p !== f && (_(G, it ? it.options.ghostClass : u.options.ghostClass, !1), _(G, s.ghostClass, !0)), it !== p && p !== Xt.active ? it = p : p === Xt.active && it && (it = null), f === p && (p._ignoreWhileAnimating = l), p.animateAll((function() {
                            Y("dragOverAnimationComplete"), p._ignoreWhileAnimating = null
                        })), p !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (l === G && !G.animated || l === r && !l.animated) && (ht = null), s.dragoverBubble || t.rootEl || l === document || (G.parentNode[z]._isOutsideThisEl(t.target), !e && Pt(t)), !s.dragoverBubble && t.stopPropagation && t.stopPropagation(), g = !0
                    }

                    function B() {
                        tt = I(G), nt = I(G, s.draggable), j({
                            sortable: p,
                            name: "change",
                            toEl: r,
                            newIndex: tt,
                            newDraggableIndex: nt,
                            originalEvent: t
                        })
                    }
                },
                _ignoreWhileAnimating: null,
                _offMoveEvents: function() {
                    m(document, "mousemove", this._onTouchMove), m(document, "touchmove", this._onTouchMove), m(document, "pointermove", this._onTouchMove), m(document, "dragover", Pt), m(document, "mousemove", Pt), m(document, "touchmove", Pt)
                },
                _offUpEvents: function() {
                    var t = this.el.ownerDocument;
                    m(t, "mouseup", this._onDrop), m(t, "touchend", this._onDrop), m(t, "pointerup", this._onDrop), m(t, "touchcancel", this._onDrop), m(document, "selectstart", this)
                },
                _onDrop: function(t) {
                    var e = this.el,
                        n = this.options;
                    tt = I(G), nt = I(G, n.draggable), W("drop", this, {
                        evt: t
                    }), U = G && G.parentNode, tt = I(G), nt = I(G, n.draggable), Xt.eventCanceled || (vt = !1, wt = !1, yt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Bt(this.cloneId), Bt(this._dragStartId), this.nativeDraggable && (m(document, "drop", this), m(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), h && D(document.body, "user-select", ""), D(G, "transform", ""), t && (dt && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), V && V.parentNode && V.parentNode.removeChild(V), (q === U || it && "clone" !== it.lastPutMode) && K && K.parentNode && K.parentNode.removeChild(K), G && (this.nativeDraggable && m(G, "dragend", this), Rt(G), G.style["will-change"] = "", dt && !vt && _(G, it ? it.options.ghostClass : this.options.ghostClass, !1), _(G, this.options.chosenClass, !1), j({
                        sortable: this,
                        name: "unchoose",
                        toEl: U,
                        newIndex: null,
                        newDraggableIndex: null,
                        originalEvent: t
                    }), q !== U ? (tt >= 0 && (j({
                        rootEl: U,
                        name: "add",
                        toEl: U,
                        fromEl: q,
                        originalEvent: t
                    }), j({
                        sortable: this,
                        name: "remove",
                        toEl: U,
                        originalEvent: t
                    }), j({
                        rootEl: U,
                        name: "sort",
                        toEl: U,
                        fromEl: q,
                        originalEvent: t
                    }), j({
                        sortable: this,
                        name: "sort",
                        toEl: U,
                        originalEvent: t
                    })), it && it.save()) : tt !== J && tt >= 0 && (j({
                        sortable: this,
                        name: "update",
                        toEl: U,
                        originalEvent: t
                    }), j({
                        sortable: this,
                        name: "sort",
                        toEl: U,
                        originalEvent: t
                    })), Xt.active && (null != tt && -1 !== tt || (tt = J, nt = et), j({
                        sortable: this,
                        name: "end",
                        toEl: U,
                        originalEvent: t
                    }), this.save())))), this._nulling()
                },
                _nulling: function() {
                    W("nulling", this), q = G = U = V = Z = K = Q = $ = rt = at = dt = tt = nt = J = et = ht = ft = it = ot = Xt.dragged = Xt.ghost = Xt.clone = Xt.active = null, _t.forEach((function(t) {
                        t.checked = !0
                    })), _t.length = lt = st = 0
                },
                handleEvent: function(t) {
                    switch (t.type) {
                        case "drop":
                        case "dragend":
                            this._onDrop(t);
                            break;
                        case "dragenter":
                        case "dragover":
                            G && (this._onDragOver(t), function(t) {
                                t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
                            }(t));
                            break;
                        case "selectstart":
                            t.preventDefault()
                    }
                },
                toArray: function() {
                    for (var t, e = [], n = this.el.children, o = 0, i = n.length, r = this.options; o < i; o++) w(t = n[o], r.draggable, this.el, !1) && e.push(t.getAttribute(r.dataIdAttr) || zt(t));
                    return e
                },
                sort: function(t, e) {
                    var n = {},
                        o = this.el;
                    this.toArray().forEach((function(t, e) {
                        var i = o.children[e];
                        w(i, this.options.draggable, o, !1) && (n[t] = i)
                    }), this), e && this.captureAnimationState(), t.forEach((function(t) {
                        n[t] && (o.removeChild(n[t]), o.appendChild(n[t]))
                    })), e && this.animateAll()
                },
                save: function() {
                    var t = this.options.store;
                    t && t.set && t.set(this)
                },
                closest: function(t, e) {
                    return w(t, e || this.options.draggable, this.el, !1)
                },
                option: function(t, e) {
                    var n = this.options;
                    if (void 0 === e) return n[t];
                    var o = H.modifyOption(this, t, e);
                    n[t] = void 0 !== o ? o : e, "group" === t && Ot(n)
                },
                destroy: function() {
                    W("destroy", this);
                    var t = this.el;
                    t[z] = null, m(t, "mousedown", this._onTapStart), m(t, "touchstart", this._onTapStart), m(t, "pointerdown", this._onTapStart), this.nativeDraggable && (m(t, "dragover", this), m(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), (function(t) {
                        t.removeAttribute("draggable")
                    })), this._onDrop(), this._disableDelayedDragEvents(), bt.splice(bt.indexOf(this.el), 1), this.el = t = null
                },
                _hideClone: function() {
                    if (!$) {
                        if (W("hideClone", this), Xt.eventCanceled) return;
                        D(K, "display", "none"), this.options.removeCloneOnHide && K.parentNode && K.parentNode.removeChild(K), $ = !0
                    }
                },
                _showClone: function(t) {
                    if ("clone" === t.lastPutMode) {
                        if ($) {
                            if (W("showClone", this), Xt.eventCanceled) return;
                            G.parentNode != q || this.options.group.revertClone ? Z ? q.insertBefore(K, Z) : q.appendChild(K) : q.insertBefore(K, G), this.options.group.revertClone && this.animate(G, K), D(K, "display", ""), $ = !1
                        }
                    } else this._hideClone()
                }
            }, Dt && v(document, "touchmove", (function(t) {
                (Xt.active || vt) && t.cancelable && t.preventDefault()
            })), Xt.utils = {
                on: v,
                off: m,
                css: D,
                find: C,
                is: function(t, e) {
                    return !!w(t, e, t, !1)
                },
                extend: function(t, e) {
                    if (t && e)
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                },
                throttle: Y,
                closest: w,
                toggleClass: _,
                clone: F,
                index: I,
                nextTick: Lt,
                cancelNextTick: Bt,
                detectDirection: Mt,
                getChild: O
            }, Xt.get = function(t) {
                return t[z]
            }, Xt.mount = function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                e[0].constructor === Array && (e = e[0]), e.forEach((function(t) {
                    if (!t.prototype || !t.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));
                    t.utils && (Xt.utils = a({}, Xt.utils, t.utils)), H.mount(t)
                }))
            }, Xt.create = function(t, e) {
                return new Xt(t, e)
            }, Xt.version = "1.13.0";
            var Ht, Wt, jt, Gt, Ut, Vt, qt = [],
                Zt = !1;

            function Qt() {
                qt.forEach((function(t) {
                    clearInterval(t.pid)
                })), qt = []
            }

            function Kt() {
                clearInterval(Vt)
            }
            var $t = Y((function(t, e, n, o) {
                    if (e.scroll) {
                        var i, r = (t.touches ? t.touches[0] : t).clientX,
                            a = (t.touches ? t.touches[0] : t).clientY,
                            l = e.scrollSensitivity,
                            s = e.scrollSpeed,
                            c = x(),
                            u = !1;
                        Wt !== n && (Wt = n, Qt(), Ht = e.scroll, i = e.scrollFn, !0 === Ht && (Ht = k(n, !0)));
                        var d = 0,
                            h = Ht;
                        do {
                            var f = h,
                                p = N(f),
                                g = p.top,
                                v = p.bottom,
                                m = p.left,
                                b = p.right,
                                y = p.width,
                                w = p.height,
                                E = void 0,
                                S = void 0,
                                _ = f.scrollWidth,
                                T = f.scrollHeight,
                                C = D(f),
                                M = f.scrollLeft,
                                O = f.scrollTop;
                            f === c ? (E = y < _ && ("auto" === C.overflowX || "scroll" === C.overflowX || "visible" === C.overflowX), S = w < T && ("auto" === C.overflowY || "scroll" === C.overflowY || "visible" === C.overflowY)) : (E = y < _ && ("auto" === C.overflowX || "scroll" === C.overflowX), S = w < T && ("auto" === C.overflowY || "scroll" === C.overflowY));
                            var A = E && (Math.abs(b - r) <= l && M + y < _) - (Math.abs(m - r) <= l && !!M),
                                I = S && (Math.abs(v - a) <= l && O + w < T) - (Math.abs(g - a) <= l && !!O);
                            if (!qt[d])
                                for (var P = 0; P <= d; P++) qt[P] || (qt[P] = {});
                            qt[d].vx == A && qt[d].vy == I && qt[d].el === f || (qt[d].el = f, qt[d].vx = A, qt[d].vy = I, clearInterval(qt[d].pid), 0 == A && 0 == I || (u = !0, qt[d].pid = setInterval(function() {
                                o && 0 === this.layer && Xt.active._onTouchMove(Ut);
                                var e = qt[this.layer].vy ? qt[this.layer].vy * s : 0,
                                    n = qt[this.layer].vx ? qt[this.layer].vx * s : 0;
                                "function" == typeof i && "continue" !== i.call(Xt.dragged.parentNode[z], n, e, t, Ut, qt[this.layer].el) || R(qt[this.layer].el, n, e)
                            }.bind({
                                layer: d
                            }), 24))), d++
                        } while (e.bubbleScroll && h !== c && (h = k(h, !1)));
                        Zt = u
                    }
                }), 30),
                Jt = function(t) {
                    var e = t.originalEvent,
                        n = t.putSortable,
                        o = t.dragEl,
                        i = t.activeSortable,
                        r = t.dispatchSortableEvent,
                        a = t.hideGhostForTarget,
                        l = t.unhideGhostForTarget;
                    if (e) {
                        var s = n || i;
                        a();
                        var c = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e,
                            u = document.elementFromPoint(c.clientX, c.clientY);
                        l(), s && !s.el.contains(u) && (r("spill"), this.onSpill({
                            dragEl: o,
                            putSortable: n
                        }))
                    }
                };

            function te() {}

            function ee() {}
            te.prototype = {
                startIndex: null,
                dragStart: function(t) {
                    var e = t.oldDraggableIndex;
                    this.startIndex = e
                },
                onSpill: function(t) {
                    var e = t.dragEl,
                        n = t.putSortable;
                    this.sortable.captureAnimationState(), n && n.captureAnimationState();
                    var o = O(this.sortable.el, this.startIndex, this.options);
                    o ? this.sortable.el.insertBefore(e, o) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll()
                },
                drop: Jt
            }, r(te, {
                pluginName: "revertOnSpill"
            }), ee.prototype = {
                onSpill: function(t) {
                    var e = t.dragEl,
                        n = t.putSortable || this.sortable;
                    n.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), n.animateAll()
                },
                drop: Jt
            }, r(ee, {
                pluginName: "removeOnSpill"
            }), Xt.mount(new function() {
                function t() {
                    for (var t in this.defaults = {
                            scroll: !0,
                            scrollSensitivity: 30,
                            scrollSpeed: 10,
                            bubbleScroll: !0
                        }, this) "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this))
                }
                return t.prototype = {
                    dragStarted: function(t) {
                        var e = t.originalEvent;
                        this.sortable.nativeDraggable ? v(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? v(document, "pointermove", this._handleFallbackAutoScroll) : e.touches ? v(document, "touchmove", this._handleFallbackAutoScroll) : v(document, "mousemove", this._handleFallbackAutoScroll)
                    },
                    dragOverCompleted: function(t) {
                        var e = t.originalEvent;
                        this.options.dragOverBubble || e.rootEl || this._handleAutoScroll(e)
                    },
                    drop: function() {
                        this.sortable.nativeDraggable ? m(document, "dragover", this._handleAutoScroll) : (m(document, "pointermove", this._handleFallbackAutoScroll), m(document, "touchmove", this._handleFallbackAutoScroll), m(document, "mousemove", this._handleFallbackAutoScroll)), Kt(), Qt(), clearTimeout(E), E = void 0
                    },
                    nulling: function() {
                        Ut = Wt = Ht = Zt = Vt = jt = Gt = null, qt.length = 0
                    },
                    _handleFallbackAutoScroll: function(t) {
                        this._handleAutoScroll(t, !0)
                    },
                    _handleAutoScroll: function(t, e) {
                        var n = this,
                            o = (t.touches ? t.touches[0] : t).clientX,
                            i = (t.touches ? t.touches[0] : t).clientY,
                            r = document.elementFromPoint(o, i);
                        if (Ut = t, e || u || c || h) {
                            $t(t, this.options, r, e);
                            var a = k(r, !0);
                            !Zt || Vt && o === jt && i === Gt || (Vt && Kt(), Vt = setInterval((function() {
                                var r = k(document.elementFromPoint(o, i), !0);
                                r !== a && (a = r, Qt()), $t(t, n.options, r, e)
                            }), 10), jt = o, Gt = i)
                        } else {
                            if (!this.options.bubbleScroll || k(r, !0) === x()) return void Qt();
                            $t(t, this.options, k(r, !1), !1)
                        }
                    }
                }, r(t, {
                    pluginName: "scroll",
                    initializeByDefault: !0
                })
            }), Xt.mount(ee, te);
            const ne = Xt
        }
    }
]);
//# sourceMappingURL=414.3519a27552eadc589ca4.js.map