/*! For license information please see 7636.b2fe9bb5c1eaf83f6004.js.LICENSE.txt */
(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [7636], {
        79367: function(e, t) {
            var n, o;
            void 0 === (o = "function" == typeof(n = function(e, t) {
                "use strict";
                var n, o, i = "function" == typeof Map ? new Map : (n = [], o = [], {
                        has: function(e) {
                            return n.indexOf(e) > -1
                        },
                        get: function(e) {
                            return o[n.indexOf(e)]
                        },
                        set: function(e, t) {
                            -1 === n.indexOf(e) && (n.push(e), o.push(t))
                        },
                        delete: function(e) {
                            var t = n.indexOf(e);
                            t > -1 && (n.splice(t, 1), o.splice(t, 1))
                        }
                    }),
                    r = function(e) {
                        return new Event(e, {
                            bubbles: !0
                        })
                    };
                try {
                    new Event("test")
                } catch (e) {
                    r = function(e) {
                        var t = document.createEvent("Event");
                        return t.initEvent(e, !0, !1), t
                    }
                }

                function s(e) {
                    if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {
                        var t = null,
                            n = null,
                            o = null,
                            s = function() {
                                e.clientWidth !== n && d()
                            },
                            a = function(t) {
                                window.removeEventListener("resize", s, !1), e.removeEventListener("input", d, !1), e.removeEventListener("keyup", d, !1), e.removeEventListener("autosize:destroy", a, !1), e.removeEventListener("autosize:update", d, !1), Object.keys(t).forEach((function(n) {
                                    e.style[n] = t[n]
                                })), i.delete(e)
                            }.bind(e, {
                                height: e.style.height,
                                resize: e.style.resize,
                                overflowY: e.style.overflowY,
                                overflowX: e.style.overflowX,
                                wordWrap: e.style.wordWrap
                            });
                        e.addEventListener("autosize:destroy", a, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", d, !1), window.addEventListener("resize", s, !1), e.addEventListener("input", d, !1), e.addEventListener("autosize:update", d, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", i.set(e, {
                            destroy: a,
                            update: d
                        }), "vertical" === (c = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === c.resize && (e.style.resize = "horizontal"), t = "content-box" === c.boxSizing ? -(parseFloat(c.paddingTop) + parseFloat(c.paddingBottom)) : parseFloat(c.borderTopWidth) + parseFloat(c.borderBottomWidth), isNaN(t) && (t = 0), d()
                    }
                    var c;

                    function u(t) {
                        var n = e.style.width;
                        e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
                    }

                    function l() {
                        if (0 !== e.scrollHeight) {
                            var o = function(e) {
                                    for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                                        node: e.parentNode,
                                        scrollTop: e.parentNode.scrollTop
                                    }), e = e.parentNode;
                                    return t
                                }(e),
                                i = document.documentElement && document.documentElement.scrollTop;
                            e.style.height = "", e.style.height = e.scrollHeight + t + "px", n = e.clientWidth, o.forEach((function(e) {
                                e.node.scrollTop = e.scrollTop
                            })), i && (document.documentElement.scrollTop = i)
                        }
                    }

                    function d() {
                        l();
                        var t = Math.round(parseFloat(e.style.height)),
                            n = window.getComputedStyle(e, null),
                            i = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
                        if (i < t ? "hidden" === n.overflowY && (u("scroll"), l(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (u("hidden"), l(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), o !== i) {
                            o = i;
                            var s = r("autosize:resized");
                            try {
                                e.dispatchEvent(s)
                            } catch (e) {}
                        }
                    }
                }

                function a(e) {
                    var t = i.get(e);
                    t && t.destroy()
                }

                function c(e) {
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
                        return s(e)
                    })), e
                }).destroy = function(e) {
                    return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
                }, u.update = function(e) {
                    return e && Array.prototype.forEach.call(e.length ? e : [e], c), e
                }), t.default = u, e.exports = t.default
            }) ? n.apply(t, [e, t]) : n) || (e.exports = o)
        },
        78627: e => {
            function t(e) {
                return -1 !== e.type.indexOf("mouse") ? e.clientX : e.touches[0].clientX
            }

            function n(e) {
                return -1 !== e.type.indexOf("mouse") ? e.clientY : e.touches[0].clientY
            }
            var o = function() {
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
                i = 0,
                r = {
                    install: function(e, r) {
                        var s = Object.assign({}, {
                            disableClick: !1,
                            tapTolerance: 10,
                            swipeTolerance: 30,
                            touchHoldTolerance: 400,
                            longTapTimeInterval: 400,
                            touchClass: "",
                            namespace: "touch"
                        }, r);

                        function a(e) {
                            var o = this.$$touchObj,
                                r = e.type.indexOf("touch") >= 0,
                                s = e.type.indexOf("mouse") >= 0,
                                a = this;
                            r && (i = e.timeStamp), s && i && e.timeStamp - i < 350 || o.touchStarted || (v(this), o.touchStarted = !0, o.touchMoved = !1, o.swipeOutBounded = !1, o.startX = t(e), o.startY = n(e), o.currentX = 0, o.currentY = 0, o.touchStartTime = e.timeStamp, o.touchHoldTimer = setTimeout((function() {
                                o.touchHoldTimer = null, p(e, a, "touchhold")
                            }), o.options.touchHoldTolerance), p(e, this, "start"))
                        }

                        function c(e) {
                            var o = this.$$touchObj;
                            if (o.currentX = t(e), o.currentY = n(e), o.touchMoved) {
                                if (!o.swipeOutBounded) {
                                    var i = o.options.swipeTolerance;
                                    o.swipeOutBounded = Math.abs(o.startX - o.currentX) > i && Math.abs(o.startY - o.currentY) > i
                                }
                            } else {
                                var r = o.options.tapTolerance;
                                o.touchMoved = Math.abs(o.startX - o.currentX) > r || Math.abs(o.startY - o.currentY) > r, o.touchMoved && (m(o), p(e, this, "moved"))
                            }
                            o.touchMoved && p(e, this, "moving")
                        }

                        function u() {
                            var e = this.$$touchObj;
                            m(e), f(this), e.touchStarted = e.touchMoved = !1, e.startX = e.startY = 0
                        }

                        function l(e) {
                            var t = this.$$touchObj,
                                n = e.type.indexOf("touch") >= 0,
                                o = e.type.indexOf("mouse") >= 0;
                            n && (i = e.timeStamp);
                            var r = n && !t.touchHoldTimer;
                            if (m(t), t.touchStarted = !1, f(this), !(o && i && e.timeStamp - i < 350))
                                if (p(e, this, "end"), t.touchMoved) {
                                    if (!t.swipeOutBounded) {
                                        var s, a = t.options.swipeTolerance,
                                            c = Math.abs(t.startY - t.currentY),
                                            u = Math.abs(t.startX - t.currentX);
                                        (c > a || u > a) && (s = c > a ? t.startY > t.currentY ? "top" : "bottom" : t.startX > t.currentX ? "left" : "right", t.callbacks["swipe." + s] ? p(e, this, "swipe." + s, s) : p(e, this, "swipe", s))
                                    }
                                } else if (t.callbacks.longtap && e.timeStamp - t.touchStartTime > t.options.longTapTimeInterval) e.cancelable && e.preventDefault(), p(e, this, "longtap");
                            else {
                                if (t.callbacks.touchhold && r) return void(e.cancelable && e.preventDefault());
                                p(e, this, "tap")
                            }
                        }

                        function d() {
                            v(this)
                        }

                        function h() {
                            f(this)
                        }

                        function p(e, t, n, o) {
                            var i = t.$$touchObj,
                                r = i && i.callbacks[n] || [];
                            if (0 === r.length) return null;
                            for (var s = 0; s < r.length; s++) {
                                var a = r[s];
                                a.modifiers.stop && e.stopPropagation(), a.modifiers.prevent && e.cancelable && e.preventDefault(), a.modifiers.self && e.target !== e.currentTarget || "function" == typeof a.value && (o ? a.value(o, e) : a.value(e))
                            }
                        }

                        function v(e) {
                            var t = e.$$touchObj.options.touchClass;
                            t && e.classList.add(t)
                        }

                        function f(e) {
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
                                options: s
                            };
                            return t && (n.options = Object.assign({}, n.options, t)), e.$$touchObj = n, e.$$touchObj
                        }
                        e.directive(s.namespace, {
                            bind: function(e, t) {
                                var n = b(e),
                                    i = !!o && {
                                        passive: !0
                                    },
                                    r = t.arg || "tap";
                                switch (r) {
                                    case "swipe":
                                        var s = t.modifiers;
                                        if (s.left || s.right || s.top || s.bottom) {
                                            for (var p in t.modifiers)
                                                if (["left", "right", "top", "bottom"].indexOf(p) >= 0) {
                                                    var v = "swipe." + p;
                                                    n.callbacks[v] = n.callbacks[v] || [], n.callbacks[v].push(t)
                                                }
                                        } else n.callbacks.swipe = n.callbacks.swipe || [], n.callbacks.swipe.push(t);
                                        break;
                                    case "start":
                                    case "moving":
                                        t.modifiers.disablePassive && (i = !1);
                                    default:
                                        n.callbacks[r] = n.callbacks[r] || [], n.callbacks[r].push(t)
                                }
                                n.hasBindTouchEvents || (e.addEventListener("touchstart", a, i), e.addEventListener("touchmove", c, i), e.addEventListener("touchcancel", u), e.addEventListener("touchend", l), n.options.disableClick || (e.addEventListener("mousedown", a), e.addEventListener("mousemove", c), e.addEventListener("mouseup", l), e.addEventListener("mouseenter", d), e.addEventListener("mouseleave", h)), n.hasBindTouchEvents = !0)
                            },
                            unbind: function(e) {
                                e.removeEventListener("touchstart", a), e.removeEventListener("touchmove", c), e.removeEventListener("touchcancel", u), e.removeEventListener("touchend", l), e.$$touchObj && !e.$$touchObj.options.disableClick && (e.removeEventListener("mousedown", a), e.removeEventListener("mousemove", c), e.removeEventListener("mouseup", l), e.removeEventListener("mouseenter", d), e.removeEventListener("mouseleave", h)), delete e.$$touchObj
                            }
                        }), e.directive(s.namespace + "-class", {
                            bind: function(e, t) {
                                b(e, {
                                    touchClass: t.value
                                })
                            }
                        }), e.directive(s.namespace + "-options", {
                            bind: function(e, t) {
                                b(e, t.value)
                            }
                        })
                    }
                };
            e.exports = r
        }
    }
]);
//# sourceMappingURL=7636.b2fe9bb5c1eaf83f6004.js.map