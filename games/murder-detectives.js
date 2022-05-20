(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/murder-detectives"], {
        3682: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => d
            });
            var s, n, o = "function" == typeof Map ? new Map : (s = [], n = [], {
                    has: function(t) {
                        return s.indexOf(t) > -1
                    },
                    get: function(t) {
                        return n[s.indexOf(t)]
                    },
                    set: function(t, e) {
                        -1 === s.indexOf(t) && (s.push(t), n.push(e))
                    },
                    delete: function(t) {
                        var e = s.indexOf(t);
                        e > -1 && (s.splice(e, 1), n.splice(e, 1))
                    }
                }),
                r = function(t) {
                    return new Event(t, {
                        bubbles: !0
                    })
                };
            try {
                new Event("test")
            } catch (s) {
                r = function(t) {
                    var e = document.createEvent("Event");
                    return e.initEvent(t, !0, !1), e
                }
            }

            function a(t) {
                var e = o.get(t);
                e && e.destroy()
            }

            function l(t) {
                var e = o.get(t);
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
                    return function(t) {
                        if (t && t.nodeName && "TEXTAREA" === t.nodeName && !o.has(t)) {
                            var e, i = null,
                                s = null,
                                n = null,
                                a = function() {
                                    t.clientWidth !== s && h()
                                },
                                l = function(e) {
                                    window.removeEventListener("resize", a, !1), t.removeEventListener("input", h, !1), t.removeEventListener("keyup", h, !1), t.removeEventListener("autosize:destroy", l, !1), t.removeEventListener("autosize:update", h, !1), Object.keys(e).forEach((function(i) {
                                        t.style[i] = e[i]
                                    })), o.delete(t)
                                }.bind(t, {
                                    height: t.style.height,
                                    resize: t.style.resize,
                                    overflowY: t.style.overflowY,
                                    overflowX: t.style.overflowX,
                                    wordWrap: t.style.wordWrap
                                });
                            t.addEventListener("autosize:destroy", l, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", h, !1), window.addEventListener("resize", a, !1), t.addEventListener("input", h, !1), t.addEventListener("autosize:update", h, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", o.set(t, {
                                destroy: l,
                                update: h
                            }), "vertical" === (e = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === e.resize && (t.style.resize = "horizontal"), i = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(i) && (i = 0), h()
                        }

                        function c(e) {
                            var i = t.style.width;
                            t.style.width = "0px", t.style.width = i, t.style.overflowY = e
                        }

                        function d() {
                            if (0 !== t.scrollHeight) {
                                var e = function(t) {
                                        for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
                                            node: t.parentNode,
                                            scrollTop: t.parentNode.scrollTop
                                        }), t = t.parentNode;
                                        return e
                                    }(t),
                                    n = document.documentElement && document.documentElement.scrollTop;
                                t.style.height = "", t.style.height = t.scrollHeight + i + "px", s = t.clientWidth, e.forEach((function(t) {
                                    t.node.scrollTop = t.scrollTop
                                })), n && (document.documentElement.scrollTop = n)
                            }
                        }

                        function h() {
                            d();
                            var e = Math.round(parseFloat(t.style.height)),
                                i = window.getComputedStyle(t, null),
                                s = "content-box" === i.boxSizing ? Math.round(parseFloat(i.height)) : t.offsetHeight;
                            if (s < e ? "hidden" === i.overflowY && (c("scroll"), d(), s = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== i.overflowY && (c("hidden"), d(), s = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), n !== s) {
                                n = s;
                                var o = r("autosize:resized");
                                try {
                                    t.dispatchEvent(o)
                                } catch (t) {}
                            }
                        }
                    }(t)
                })), t
            }).destroy = function(t) {
                return t && Array.prototype.forEach.call(t.length ? t : [t], a), t
            }, c.update = function(t) {
                return t && Array.prototype.forEach.call(t.length ? t : [t], l), t
            });
            const d = c
        },
        70151: (t, e, i) => {
            var s = i(278),
                n = i(73480);
            t.exports = function(t) {
                return n(s(t))
            }
        },
        69877: t => {
            var e = Math.floor,
                i = Math.random;
            t.exports = function(t, s) {
                return t + e(i() * (s - t + 1))
            }
        },
        42012: (t, e, i) => {
            var s = i(73480),
                n = i(52628);
            t.exports = function(t) {
                return s(n(t))
            }
        },
        47415: (t, e, i) => {
            var s = i(29932);
            t.exports = function(t, e) {
                return s(e, (function(e) {
                    return t[e]
                }))
            }
        },
        73480: (t, e, i) => {
            var s = i(69877);
            t.exports = function(t, e) {
                var i = -1,
                    n = t.length,
                    o = n - 1;
                for (e = void 0 === e ? n : e; ++i < e;) {
                    var r = s(i, o),
                        a = t[r];
                    t[r] = t[i], t[i] = a
                }
                return t.length = e, t
            }
        },
        69983: (t, e, i) => {
            var s = i(70151),
                n = i(42012),
                o = i(1469);
            t.exports = function(t) {
                return (o(t) ? s : n)(t)
            }
        },
        23493: (t, e, i) => {
            var s = i(23279),
                n = i(13218);
            t.exports = function(t, e, i) {
                var o = !0,
                    r = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                return n(i) && (o = "leading" in i ? !!i.leading : o, r = "trailing" in i ? !!i.trailing : r), s(t, e, {
                    leading: o,
                    maxWait: e,
                    trailing: r
                })
            }
        },
        52628: (t, e, i) => {
            var s = i(47415),
                n = i(3674);
            t.exports = function(t) {
                return null == t ? [] : s(t, n(t))
            }
        },
        59694: t => {
            window,
            t.exports = function(t) {
                var e = {};

                function i(s) {
                    if (e[s]) return e[s].exports;
                    var n = e[s] = {
                        i: s,
                        l: !1,
                        exports: {}
                    };
                    return t[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports
                }
                return i.m = t, i.c = e, i.d = function(t, e, s) {
                    i.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: s
                    })
                }, i.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, i.t = function(t, e) {
                    if (1 & e && (t = i(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var s = Object.create(null);
                    if (i.r(s), Object.defineProperty(s, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var n in t) i.d(s, n, function(e) {
                            return t[e]
                        }.bind(null, n));
                    return s
                }, i.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return i.d(e, "a", e), e
                }, i.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, i.p = "", i(i.s = 0)
            }([function(t, e, i) {
                "use strict";
                i.r(e);
                var s, n = function(t, e) {
                        var i = e.x - t.x,
                            s = e.y - t.y;
                        return Math.sqrt(i * i + s * s)
                    },
                    o = function(t) {
                        return t * (Math.PI / 180)
                    },
                    r = new Map,
                    a = function(t) {
                        r.has(t) && clearTimeout(r.get(t)), r.set(t, setTimeout(t, 100))
                    },
                    l = function(t, e, i) {
                        for (var s, n = e.split(/[ ,]+/g), o = 0; o < n.length; o += 1) s = n[o], t.addEventListener ? t.addEventListener(s, i, !1) : t.attachEvent && t.attachEvent(s, i)
                    },
                    c = function(t, e, i) {
                        for (var s, n = e.split(/[ ,]+/g), o = 0; o < n.length; o += 1) s = n[o], t.removeEventListener ? t.removeEventListener(s, i) : t.detachEvent && t.detachEvent(s, i)
                    },
                    d = function(t) {
                        return t.preventDefault(), t.type.match(/^touch/) ? t.changedTouches : t
                    },
                    h = function() {
                        return {
                            x: void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
                            y: void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
                        }
                    },
                    u = function(t, e) {
                        e.top || e.right || e.bottom || e.left ? (t.style.top = e.top, t.style.right = e.right, t.style.bottom = e.bottom, t.style.left = e.left) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
                    },
                    p = function(t, e, i) {
                        var s = v(t);
                        for (var n in s)
                            if (s.hasOwnProperty(n))
                                if ("string" == typeof e) s[n] = e + " " + i;
                                else {
                                    for (var o = "", r = 0, a = e.length; r < a; r += 1) o += e[r] + " " + i + ", ";
                                    s[n] = o.slice(0, -2)
                                } return s
                    },
                    v = function(t) {
                        var e = {};
                        return e[t] = "", ["webkit", "Moz", "o"].forEach((function(i) {
                            e[i + t.charAt(0).toUpperCase() + t.slice(1)] = ""
                        })), e
                    },
                    m = function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        return t
                    },
                    f = function(t, e) {
                        if (t.length)
                            for (var i = 0, s = t.length; i < s; i += 1) e(t[i]);
                        else e(t)
                    },
                    y = !!("ontouchstart" in window),
                    g = !!window.PointerEvent,
                    b = !!window.MSPointerEvent,
                    _ = {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    },
                    w = {};

                function E() {}
                g ? s = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup, pointercancel"
                } : b ? s = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                } : y ? (s = {
                    start: "touchstart",
                    move: "touchmove",
                    end: "touchend, touchcancel"
                }, w = _) : s = _, E.prototype.on = function(t, e) {
                    var i, s = t.split(/[ ,]+/g);
                    this._handlers_ = this._handlers_ || {};
                    for (var n = 0; n < s.length; n += 1) i = s[n], this._handlers_[i] = this._handlers_[i] || [], this._handlers_[i].push(e);
                    return this
                }, E.prototype.off = function(t, e) {
                    return this._handlers_ = this._handlers_ || {}, void 0 === t ? this._handlers_ = {} : void 0 === e ? this._handlers_[t] = null : this._handlers_[t] && this._handlers_[t].indexOf(e) >= 0 && this._handlers_[t].splice(this._handlers_[t].indexOf(e), 1), this
                }, E.prototype.trigger = function(t, e) {
                    var i, s = this,
                        n = t.split(/[ ,]+/g);
                    s._handlers_ = s._handlers_ || {};
                    for (var o = 0; o < n.length; o += 1) i = n[o], s._handlers_[i] && s._handlers_[i].length && s._handlers_[i].forEach((function(t) {
                        t.call(s, {
                            type: i,
                            target: s
                        }, e)
                    }))
                }, E.prototype.config = function(t) {
                    this.options = this.defaults || {}, t && (this.options = function(t, e) {
                        var i = {};
                        for (var s in t) t.hasOwnProperty(s) && e.hasOwnProperty(s) ? i[s] = e[s] : t.hasOwnProperty(s) && (i[s] = t[s]);
                        return i
                    }(this.options, t))
                }, E.prototype.bindEvt = function(t, e) {
                    var i = this;
                    return i._domHandlers_ = i._domHandlers_ || {}, i._domHandlers_[e] = function() {
                        "function" == typeof i["on" + e] ? i["on" + e].apply(i, arguments) : console.warn('[WARNING] : Missing "on' + e + '" handler.')
                    }, l(t, s[e], i._domHandlers_[e]), w[e] && l(t, w[e], i._domHandlers_[e]), i
                }, E.prototype.unbindEvt = function(t, e) {
                    return this._domHandlers_ = this._domHandlers_ || {}, c(t, s[e], this._domHandlers_[e]), w[e] && c(t, w[e], this._domHandlers_[e]), delete this._domHandlers_[e], this
                };
                var x = E;

                function T(t, e) {
                    return this.identifier = e.identifier, this.position = e.position, this.frontPosition = e.frontPosition, this.collection = t, this.defaults = {
                        size: 100,
                        threshold: .1,
                        color: "white",
                        fadeTime: 250,
                        dataOnly: !1,
                        restJoystick: !0,
                        restOpacity: .5,
                        mode: "dynamic",
                        zone: document.body,
                        lockX: !1,
                        lockY: !1,
                        shape: "circle"
                    }, this.config(e), "dynamic" === this.options.mode && (this.options.restOpacity = 0), this.id = T.id, T.id += 1, this.buildEl().stylize(), this.instance = {
                        el: this.ui.el,
                        on: this.on.bind(this),
                        off: this.off.bind(this),
                        show: this.show.bind(this),
                        hide: this.hide.bind(this),
                        add: this.addToDom.bind(this),
                        remove: this.removeFromDom.bind(this),
                        destroy: this.destroy.bind(this),
                        setPosition: this.setPosition.bind(this),
                        resetDirection: this.resetDirection.bind(this),
                        computeDirection: this.computeDirection.bind(this),
                        trigger: this.trigger.bind(this),
                        position: this.position,
                        frontPosition: this.frontPosition,
                        ui: this.ui,
                        identifier: this.identifier,
                        id: this.id,
                        options: this.options
                    }, this.instance
                }
                T.prototype = new x, T.constructor = T, T.id = 0, T.prototype.buildEl = function(t) {
                    return this.ui = {}, this.options.dataOnly || (this.ui.el = document.createElement("div"), this.ui.back = document.createElement("div"), this.ui.front = document.createElement("div"), this.ui.el.className = "nipple collection_" + this.collection.id, this.ui.back.className = "back", this.ui.front.className = "front", this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id), this.ui.el.appendChild(this.ui.back), this.ui.el.appendChild(this.ui.front)), this
                }, T.prototype.stylize = function() {
                    if (this.options.dataOnly) return this;
                    var t = this.options.fadeTime + "ms",
                        e = function(t, e) {
                            var i = v("borderRadius");
                            for (var s in i) i.hasOwnProperty(s) && (i[s] = "50%");
                            return i
                        }(),
                        i = p("transition", "opacity", t),
                        s = {};
                    return s.el = {
                        position: "absolute",
                        opacity: this.options.restOpacity,
                        display: "block",
                        zIndex: 999
                    }, s.back = {
                        position: "absolute",
                        display: "block",
                        width: this.options.size + "px",
                        height: this.options.size + "px",
                        marginLeft: -this.options.size / 2 + "px",
                        marginTop: -this.options.size / 2 + "px",
                        background: this.options.color,
                        opacity: ".5"
                    }, s.front = {
                        width: this.options.size / 2 + "px",
                        height: this.options.size / 2 + "px",
                        position: "absolute",
                        display: "block",
                        marginLeft: -this.options.size / 4 + "px",
                        marginTop: -this.options.size / 4 + "px",
                        background: this.options.color,
                        opacity: ".5"
                    }, m(s.el, i), "circle" === this.options.shape && m(s.back, e), m(s.front, e), this.applyStyles(s), this
                }, T.prototype.applyStyles = function(t) {
                    for (var e in this.ui)
                        if (this.ui.hasOwnProperty(e))
                            for (var i in t[e]) this.ui[e].style[i] = t[e][i];
                    return this
                }, T.prototype.addToDom = function() {
                    return this.options.dataOnly || document.body.contains(this.ui.el) || this.options.zone.appendChild(this.ui.el), this
                }, T.prototype.removeFromDom = function() {
                    return this.options.dataOnly || !document.body.contains(this.ui.el) || this.options.zone.removeChild(this.ui.el), this
                }, T.prototype.destroy = function() {
                    clearTimeout(this.removeTimeout), clearTimeout(this.showTimeout), clearTimeout(this.restTimeout), this.trigger("destroyed", this.instance), this.removeFromDom(), this.off()
                }, T.prototype.show = function(t) {
                    var e = this;
                    return e.options.dataOnly || (clearTimeout(e.removeTimeout), clearTimeout(e.showTimeout), clearTimeout(e.restTimeout), e.addToDom(), e.restCallback(), setTimeout((function() {
                        e.ui.el.style.opacity = 1
                    }), 0), e.showTimeout = setTimeout((function() {
                        e.trigger("shown", e.instance), "function" == typeof t && t.call(this)
                    }), e.options.fadeTime)), e
                }, T.prototype.hide = function(t) {
                    var e = this;
                    return e.options.dataOnly || (e.ui.el.style.opacity = e.options.restOpacity, clearTimeout(e.removeTimeout), clearTimeout(e.showTimeout), clearTimeout(e.restTimeout), e.removeTimeout = setTimeout((function() {
                        var i = "dynamic" === e.options.mode ? "none" : "block";
                        e.ui.el.style.display = i, "function" == typeof t && t.call(e), e.trigger("hidden", e.instance)
                    }), e.options.fadeTime), e.options.restJoystick && e.setPosition(t, {
                        x: 0,
                        y: 0
                    })), e
                }, T.prototype.setPosition = function(t, e) {
                    var i = this;
                    i.frontPosition = {
                        x: e.x,
                        y: e.y
                    };
                    var s = i.options.fadeTime + "ms",
                        n = {};
                    n.front = p("transition", ["top", "left"], s);
                    var o = {
                        front: {}
                    };
                    o.front = {
                        left: i.frontPosition.x + "px",
                        top: i.frontPosition.y + "px"
                    }, i.applyStyles(n), i.applyStyles(o), i.restTimeout = setTimeout((function() {
                        "function" == typeof t && t.call(i), i.restCallback()
                    }), i.options.fadeTime)
                }, T.prototype.restCallback = function() {
                    var t = {};
                    t.front = p("transition", "none", ""), this.applyStyles(t), this.trigger("rested", this.instance)
                }, T.prototype.resetDirection = function() {
                    this.direction = {
                        x: !1,
                        y: !1,
                        angle: !1
                    }
                }, T.prototype.computeDirection = function(t) {
                    var e, i, s, n = t.angle.radian,
                        o = Math.PI / 4,
                        r = Math.PI / 2;
                    if (n > o && n < 3 * o && !t.lockX ? e = "up" : n > -o && n <= o && !t.lockY ? e = "left" : n > 3 * -o && n <= -o && !t.lockX ? e = "down" : t.lockY || (e = "right"), t.lockY || (i = n > -r && n < r ? "left" : "right"), t.lockX || (s = n > 0 ? "up" : "down"), t.force > this.options.threshold) {
                        var a, l = {};
                        for (a in this.direction) this.direction.hasOwnProperty(a) && (l[a] = this.direction[a]);
                        var c = {};
                        for (a in this.direction = {
                                x: i,
                                y: s,
                                angle: e
                            }, t.direction = this.direction, l) l[a] === this.direction[a] && (c[a] = !0);
                        if (c.x && c.y && c.angle) return t;
                        c.x && c.y || this.trigger("plain", t), c.x || this.trigger("plain:" + i, t), c.y || this.trigger("plain:" + s, t), c.angle || this.trigger("dir dir:" + e, t)
                    } else this.resetDirection();
                    return t
                };
                var I = T;

                function C(t, e) {
                    return this.nipples = [], this.idles = [], this.actives = [], this.ids = [], this.pressureIntervals = {}, this.manager = t, this.id = C.id, C.id += 1, this.defaults = {
                        zone: document.body,
                        multitouch: !1,
                        maxNumberOfNipples: 10,
                        mode: "dynamic",
                        position: {
                            top: 0,
                            left: 0
                        },
                        catchDistance: 200,
                        size: 100,
                        threshold: .1,
                        color: "white",
                        fadeTime: 250,
                        dataOnly: !1,
                        restJoystick: !0,
                        restOpacity: .5,
                        lockX: !1,
                        lockY: !1,
                        shape: "circle",
                        dynamicPage: !1,
                        follow: !1
                    }, this.config(e), "static" !== this.options.mode && "semi" !== this.options.mode || (this.options.multitouch = !1), this.options.multitouch || (this.options.maxNumberOfNipples = 1), this.updateBox(), this.prepareNipples(), this.bindings(), this.begin(), this.nipples
                }
                C.prototype = new x, C.constructor = C, C.id = 0, C.prototype.prepareNipples = function() {
                    var t = this.nipples;
                    t.on = this.on.bind(this), t.off = this.off.bind(this), t.options = this.options, t.destroy = this.destroy.bind(this), t.ids = this.ids, t.id = this.id, t.processOnMove = this.processOnMove.bind(this), t.processOnEnd = this.processOnEnd.bind(this), t.get = function(e) {
                        if (void 0 === e) return t[0];
                        for (var i = 0, s = t.length; i < s; i += 1)
                            if (t[i].identifier === e) return t[i];
                        return !1
                    }
                }, C.prototype.bindings = function() {
                    this.bindEvt(this.options.zone, "start"), this.options.zone.style.touchAction = "none", this.options.zone.style.msTouchAction = "none"
                }, C.prototype.begin = function() {
                    var t = this.options;
                    if ("static" === t.mode) {
                        var e = this.createNipple(t.position, this.manager.getIdentifier());
                        e.add(), this.idles.push(e)
                    }
                }, C.prototype.createNipple = function(t, e) {
                    var i = this.manager.scroll,
                        s = {},
                        n = this.options;
                    if (t.x && t.y) s = {
                        x: t.x - (i.x + this.box.left),
                        y: t.y - (i.y + this.box.top)
                    };
                    else if (t.top || t.right || t.bottom || t.left) {
                        var o = document.createElement("DIV");
                        o.style.display = "hidden", o.style.top = t.top, o.style.right = t.right, o.style.bottom = t.bottom, o.style.left = t.left, o.style.position = "absolute", n.zone.appendChild(o);
                        var r = o.getBoundingClientRect();
                        n.zone.removeChild(o), s = t, t = {
                            x: r.left + i.x,
                            y: r.top + i.y
                        }
                    }
                    var a = new I(this, {
                        color: n.color,
                        size: n.size,
                        threshold: n.threshold,
                        fadeTime: n.fadeTime,
                        dataOnly: n.dataOnly,
                        restJoystick: n.restJoystick,
                        restOpacity: n.restOpacity,
                        mode: n.mode,
                        identifier: e,
                        position: t,
                        zone: n.zone,
                        frontPosition: {
                            x: 0,
                            y: 0
                        },
                        shape: n.shape
                    });
                    return n.dataOnly || (u(a.ui.el, s), u(a.ui.front, a.frontPosition)), this.nipples.push(a), this.trigger("added " + a.identifier + ":added", a), this.manager.trigger("added " + a.identifier + ":added", a), this.bindNipple(a), a
                }, C.prototype.updateBox = function() {
                    this.box = this.options.zone.getBoundingClientRect()
                }, C.prototype.bindNipple = function(t) {
                    var e, i = this,
                        s = function(t, s) {
                            e = t.type + " " + s.id + ":" + t.type, i.trigger(e, s)
                        };
                    t.on("destroyed", i.onDestroyed.bind(i)), t.on("shown hidden rested dir plain", s), t.on("dir:up dir:right dir:down dir:left", s), t.on("plain:up plain:right plain:down plain:left", s)
                }, C.prototype.pressureFn = function(t, e, i) {
                    var s = this,
                        n = 0;
                    clearInterval(s.pressureIntervals[i]), s.pressureIntervals[i] = setInterval(function() {
                        var i = t.force || t.pressure || t.webkitForce || 0;
                        i !== n && (e.trigger("pressure", i), s.trigger("pressure " + e.identifier + ":pressure", i), n = i)
                    }.bind(s), 100)
                }, C.prototype.onstart = function(t) {
                    var e = this,
                        i = e.options,
                        s = t;
                    return t = d(t), e.updateBox(), f(t, (function(n) {
                        e.actives.length < i.maxNumberOfNipples ? e.processOnStart(n) : s.type.match(/^touch/) && (Object.keys(e.manager.ids).forEach((function(i) {
                            if (Object.values(s.touches).findIndex((function(t) {
                                    return t.identifier === i
                                })) < 0) {
                                var n = [t[0]];
                                n.identifier = i, e.processOnEnd(n)
                            }
                        })), e.actives.length < i.maxNumberOfNipples && e.processOnStart(n))
                    })), e.manager.bindDocument(), !1
                }, C.prototype.processOnStart = function(t) {
                    var e, i = this,
                        s = i.options,
                        o = i.manager.getIdentifier(t),
                        r = t.force || t.pressure || t.webkitForce || 0,
                        a = {
                            x: t.pageX,
                            y: t.pageY
                        },
                        l = i.getOrCreate(o, a);
                    l.identifier !== o && i.manager.removeIdentifier(l.identifier), l.identifier = o;
                    var c = function(e) {
                        e.trigger("start", e), i.trigger("start " + e.id + ":start", e), e.show(), r > 0 && i.pressureFn(t, e, e.identifier), i.processOnMove(t)
                    };
                    if ((e = i.idles.indexOf(l)) >= 0 && i.idles.splice(e, 1), i.actives.push(l), i.ids.push(l.identifier), "semi" !== s.mode) c(l);
                    else {
                        if (!(n(a, l.position) <= s.catchDistance)) return l.destroy(), void i.processOnStart(t);
                        c(l)
                    }
                    return l
                }, C.prototype.getOrCreate = function(t, e) {
                    var i, s = this.options;
                    return /(semi|static)/.test(s.mode) ? (i = this.idles[0]) ? (this.idles.splice(0, 1), i) : "semi" === s.mode ? this.createNipple(e, t) : (console.warn("Coudln't find the needed nipple."), !1) : i = this.createNipple(e, t)
                }, C.prototype.processOnMove = function(t) {
                    var e = this.options,
                        i = this.manager.getIdentifier(t),
                        s = this.nipples.get(i),
                        r = this.manager.scroll;
                    if (function(t) {
                            return isNaN(t.buttons) ? 0 !== t.pressure : 0 !== t.buttons
                        }(t)) {
                        if (!s) return console.error("Found zombie joystick with ID " + i), void this.manager.removeIdentifier(i);
                        if (e.dynamicPage) {
                            var a = s.el.getBoundingClientRect();
                            s.position = {
                                x: r.x + a.left,
                                y: r.y + a.top
                            }
                        }
                        s.identifier = i;
                        var l = s.options.size / 2,
                            c = {
                                x: t.pageX,
                                y: t.pageY
                            };
                        e.lockX && (c.y = s.position.y), e.lockY && (c.x = s.position.x);
                        var d, h, p, v, m, f, y, g, b, _, w = n(c, s.position),
                            E = (d = c, p = (h = s.position).x - d.x, v = h.y - d.y, function(t) {
                                return t * (180 / Math.PI)
                            }(Math.atan2(v, p))),
                            x = o(E),
                            T = w / l,
                            I = {
                                distance: w,
                                position: c
                            };
                        if ("circle" === s.options.shape ? (m = Math.min(w, l), y = s.position, g = m, _ = {
                                x: 0,
                                y: 0
                            }, b = o(b = E), _.x = y.x - g * Math.cos(b), _.y = y.y - g * Math.sin(b), f = _) : (f = function(t, e, i) {
                                return {
                                    x: Math.min(Math.max(t.x, e.x - i), e.x + i),
                                    y: Math.min(Math.max(t.y, e.y - i), e.y + i)
                                }
                            }(c, s.position, l), m = n(f, s.position)), e.follow) {
                            if (w > l) {
                                var C = c.x - f.x,
                                    O = c.y - f.y;
                                s.position.x += C, s.position.y += O, s.el.style.top = s.position.y - (this.box.top + r.y) + "px", s.el.style.left = s.position.x - (this.box.left + r.x) + "px", w = n(c, s.position)
                            }
                        } else c = f, w = m;
                        var S = c.x - s.position.x,
                            M = c.y - s.position.y;
                        s.frontPosition = {
                            x: S,
                            y: M
                        }, e.dataOnly || u(s.ui.front, s.frontPosition);
                        var k = {
                            identifier: s.identifier,
                            position: c,
                            force: T,
                            pressure: t.force || t.pressure || t.webkitForce || 0,
                            distance: w,
                            angle: {
                                radian: x,
                                degree: E
                            },
                            vector: {
                                x: S / l,
                                y: -M / l
                            },
                            raw: I,
                            instance: s,
                            lockX: e.lockX,
                            lockY: e.lockY
                        };
                        (k = s.computeDirection(k)).angle = {
                            radian: o(180 - E),
                            degree: 180 - E
                        }, s.trigger("move", k), this.trigger("move " + s.id + ":move", k)
                    } else this.processOnEnd(t)
                }, C.prototype.processOnEnd = function(t) {
                    var e = this,
                        i = e.options,
                        s = e.manager.getIdentifier(t),
                        n = e.nipples.get(s),
                        o = e.manager.removeIdentifier(n.identifier);
                    n && (i.dataOnly || n.hide((function() {
                        "dynamic" === i.mode && (n.trigger("removed", n), e.trigger("removed " + n.id + ":removed", n), e.manager.trigger("removed " + n.id + ":removed", n), n.destroy())
                    })), clearInterval(e.pressureIntervals[n.identifier]), n.resetDirection(), n.trigger("end", n), e.trigger("end " + n.id + ":end", n), e.ids.indexOf(n.identifier) >= 0 && e.ids.splice(e.ids.indexOf(n.identifier), 1), e.actives.indexOf(n) >= 0 && e.actives.splice(e.actives.indexOf(n), 1), /(semi|static)/.test(i.mode) ? e.idles.push(n) : e.nipples.indexOf(n) >= 0 && e.nipples.splice(e.nipples.indexOf(n), 1), e.manager.unbindDocument(), /(semi|static)/.test(i.mode) && (e.manager.ids[o.id] = o.identifier))
                }, C.prototype.onDestroyed = function(t, e) {
                    this.nipples.indexOf(e) >= 0 && this.nipples.splice(this.nipples.indexOf(e), 1), this.actives.indexOf(e) >= 0 && this.actives.splice(this.actives.indexOf(e), 1), this.idles.indexOf(e) >= 0 && this.idles.splice(this.idles.indexOf(e), 1), this.ids.indexOf(e.identifier) >= 0 && this.ids.splice(this.ids.indexOf(e.identifier), 1), this.manager.removeIdentifier(e.identifier), this.manager.unbindDocument()
                }, C.prototype.destroy = function() {
                    for (var t in this.unbindEvt(this.options.zone, "start"), this.nipples.forEach((function(t) {
                            t.destroy()
                        })), this.pressureIntervals) this.pressureIntervals.hasOwnProperty(t) && clearInterval(this.pressureIntervals[t]);
                    this.trigger("destroyed", this.nipples), this.manager.unbindDocument(), this.off()
                };
                var O = C;

                function S(t) {
                    var e = this;
                    e.ids = {}, e.index = 0, e.collections = [], e.scroll = h(), e.config(t), e.prepareCollections();
                    var i = function() {
                        var t;
                        e.collections.forEach((function(i) {
                            i.forEach((function(i) {
                                t = i.el.getBoundingClientRect(), i.position = {
                                    x: e.scroll.x + t.left,
                                    y: e.scroll.y + t.top
                                }
                            }))
                        }))
                    };
                    l(window, "resize", (function() {
                        a(i)
                    }));
                    var s = function() {
                        e.scroll = h()
                    };
                    return l(window, "scroll", (function() {
                        a(s)
                    })), e.collections
                }
                S.prototype = new x, S.constructor = S, S.prototype.prepareCollections = function() {
                    var t = this;
                    t.collections.create = t.create.bind(t), t.collections.on = t.on.bind(t), t.collections.off = t.off.bind(t), t.collections.destroy = t.destroy.bind(t), t.collections.get = function(e) {
                        var i;
                        return t.collections.every((function(t) {
                            return !(i = t.get(e))
                        })), i
                    }
                }, S.prototype.create = function(t) {
                    return this.createCollection(t)
                }, S.prototype.createCollection = function(t) {
                    var e = new O(this, t);
                    return this.bindCollection(e), this.collections.push(e), e
                }, S.prototype.bindCollection = function(t) {
                    var e, i = this,
                        s = function(t, s) {
                            e = t.type + " " + s.id + ":" + t.type, i.trigger(e, s)
                        };
                    t.on("destroyed", i.onDestroyed.bind(i)), t.on("shown hidden rested dir plain", s), t.on("dir:up dir:right dir:down dir:left", s), t.on("plain:up plain:right plain:down plain:left", s)
                }, S.prototype.bindDocument = function() {
                    this.binded || (this.bindEvt(document, "move").bindEvt(document, "end"), this.binded = !0)
                }, S.prototype.unbindDocument = function(t) {
                    Object.keys(this.ids).length && !0 !== t || (this.unbindEvt(document, "move").unbindEvt(document, "end"), this.binded = !1)
                }, S.prototype.getIdentifier = function(t) {
                    var e;
                    return t ? void 0 === (e = void 0 === t.identifier ? t.pointerId : t.identifier) && (e = this.latest || 0) : e = this.index, void 0 === this.ids[e] && (this.ids[e] = this.index, this.index += 1), this.latest = e, this.ids[e]
                }, S.prototype.removeIdentifier = function(t) {
                    var e = {};
                    for (var i in this.ids)
                        if (this.ids[i] === t) {
                            e.id = i, e.identifier = this.ids[i], delete this.ids[i];
                            break
                        } return e
                }, S.prototype.onmove = function(t) {
                    return this.onAny("move", t), !1
                }, S.prototype.onend = function(t) {
                    return this.onAny("end", t), !1
                }, S.prototype.oncancel = function(t) {
                    return this.onAny("end", t), !1
                }, S.prototype.onAny = function(t, e) {
                    var i, s = this,
                        n = "processOn" + t.charAt(0).toUpperCase() + t.slice(1);
                    return e = d(e), f(e, (function(t) {
                        i = s.getIdentifier(t), f(s.collections, function(t, e, i) {
                            i.ids.indexOf(e) >= 0 && (i[n](t), t._found_ = !0)
                        }.bind(null, t, i)), t._found_ || s.removeIdentifier(i)
                    })), !1
                }, S.prototype.destroy = function() {
                    this.unbindDocument(!0), this.ids = {}, this.index = 0, this.collections.forEach((function(t) {
                        t.destroy()
                    })), this.off()
                }, S.prototype.onDestroyed = function(t, e) {
                    if (this.collections.indexOf(e) < 0) return !1;
                    this.collections.splice(this.collections.indexOf(e), 1)
                };
                var M = new S;
                e.default = {
                    create: function(t) {
                        return M.create(t)
                    },
                    factory: M
                }
            }]).default
        },
        94835: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => h
            });
            var s = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    directives: [{
                        name: "touch",
                        rawName: "v-touch:swipe",
                        value: t.swipeHandler,
                        expression: "swipeHandler",
                        arg: "swipe"
                    }],
                    staticClass: "tutorial"
                }, [i("div", {
                    staticClass: "container"
                }, [i("svg", {
                    staticClass: "ratio-svg",
                    attrs: {
                        width: "2",
                        height: "3"
                    }
                }), t._v(" "), t._l(t.slides, (function(e, s) {
                    return i("div", {
                        key: s,
                        staticClass: "slide",
                        class: t.slideClasses[s]
                    }, [i("div", {
                        staticClass: "text"
                    }, [i("h3", {
                        staticClass: "title"
                    }, [t._v(t._s(e.title))]), t._v(" "), e.listItems ? i("ul", t._l(e.listItems, (function(e, s) {
                        return i("li", {
                            key: s
                        }, [t._v(t._s(e))])
                    })), 0) : t._e()]), t._v(" "), e.imageClass ? i("div", {
                        staticClass: "image",
                        class: e.imageClass
                    }) : t._e(), t._v(" "), e.arrow ? i("div", {
                        staticClass: "arrow",
                        style: e.arrow
                    }, [i("svg", {
                        attrs: {
                            viewBox: "0 0 50 50"
                        }
                    }, [i("path", {
                        attrs: {
                            d: "M -50,0 L 0,0",
                            "vector-effect": "non-scaling-stroke"
                        }
                    }), t._v(" "), i("path", {
                        attrs: {
                            d: "M -25,-20 L 0,0 L -25,20",
                            "vector-effect": "non-scaling-stroke"
                        }
                    })])]) : t._e()])
                })), t._v(" "), i("div", {
                    staticClass: "dots"
                }, t._l(t.slides.length, (function(e) {
                    return i("button", {
                        key: e,
                        staticClass: "dot",
                        class: {
                            current: t.currentIndex === e - 1
                        },
                        on: {
                            click: function(i) {
                                return t.onDotClick(e - 1)
                            }
                        }
                    })
                })), 0), t._v(" "), i("div", {
                    staticClass: "buttons"
                }, [t.isFinalSlide ? t._e() : i("button", {
                    staticClass: "skip",
                    on: {
                        click: t.onDoneClick
                    }
                }, [t._v(t._s(t.$t("TUTORIAL.BUTTON_SKIP")))]), t._v(" "), t.isFinalSlide ? i("button", {
                    staticClass: "done",
                    on: {
                        click: t.onDoneClick
                    }
                }, [t._v(t._s(t.$t("TUTORIAL.BUTTON_DONE")))]) : i("button", {
                    staticClass: "next",
                    on: {
                        click: t.onNextClick
                    }
                }, [t._v(t._s(t.$t("TUTORIAL.BUTTON_NEXT")))])])], 2)])
            };
            s._withStripped = !0;
            var n = i(2934),
                o = i.n(n),
                r = i(78627),
                a = i.n(r),
                l = i(65853);
            o().use(a());
            const c = o().extend({
                props: {
                    slides: Array
                },
                i18n: {
                    messages: l.s
                },
                data: () => ({
                    currentIndex: 0
                }),
                computed: {
                    isFinalSlide() {
                        return this.currentIndex === this.slides.length - 1
                    },
                    slideClasses() {
                        return this.slides.map(((t, e) => e < this.currentIndex ? ["left"] : e > this.currentIndex ? ["right"] : ["current"]))
                    }
                },
                methods: {
                    swipeHandler(t) {
                        if ("right" === t) {
                            if (0 === this.currentIndex) return;
                            this.currentIndex -= 1
                        }
                        if ("left" === t) {
                            if (this.isFinalSlide) return void this.onDoneClick();
                            this.currentIndex += 1
                        }
                    },
                    onPointerMoved() {},
                    onPointerUp() {},
                    onNextClick() {
                        this.isFinalSlide ? this.onDoneClick() : this.currentIndex += 1
                    },
                    onDotClick(t) {
                        this.currentIndex = t
                    },
                    onDoneClick() {
                        this.$emit("tutorialComplete")
                    }
                }
            });
            var d = (0, i(51900).Z)(c, s, [], !1, null, "2df46cec", null);
            d.options.__file = "src/apps/vue/components/Tutorial.vue";
            const h = d.exports
        },
        17819: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => d
            });
            var s = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "draw"
                }, [i("div", {
                    ref: "content",
                    staticClass: "content"
                }, [i("div", {
                    staticClass: "constrain"
                }, [t.player.prompt ? i("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : t._e(), t._v(" "), i("div", {
                    ref: "stage",
                    staticClass: "stage",
                    style: t.stageDimensions
                }), t._v(" "), i("button", {
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [t._v(t._s(t.player.submitText || "SUBMIT"))])])])])
            };
            s._withStripped = !0;
            var n = i(2934),
                o = i.n(n),
                r = i(32530),
                a = i(96486);
            const l = o().extend({
                props: {
                    player: Object
                },
                data: () => ({
                    stage: null,
                    windowHeight: window.innerHeight,
                    isSubmitting: !1
                }),
                computed: {
                    stageDimensions() {
                        if (!this.stage) return {
                            width: "auto",
                            height: "auto"
                        };
                        const t = this.$refs.content.getBoundingClientRect(),
                            e = this.$refs.stage,
                            i = e.getBoundingClientRect(),
                            s = e.parentElement.getBoundingClientRect(),
                            n = Math.max(.9 * s.width, 240),
                            o = Math.max(this.windowHeight - t.height + i.height, 240),
                            r = this.stage.canvas.width,
                            a = this.stage.canvas.height,
                            l = Math.min(n / r, o / a);
                        return {
                            width: r * l + "px",
                            height: a * l + "px"
                        }
                    }
                },
                mounted() {
                    this.onResizeWithContext = (0, a.throttle)(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
                },
                beforeDestroy() {
                    window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
                },
                methods: {
                    setupStage() {
                        const t = this.$refs.stage,
                            e = {};
                        this.player.size && (e.width = this.player.size.width, e.height = this.player.size.height), this.player.thicknesses && (e.thickness = this.player.thicknesses[0]), this.player.colors && (e.color = this.player.colors[0]), this.player.maxPoints && (e.maxPoints = this.player.maxPoints), this.stage = new r.U(t, e), this.stage.on("up", (() => {
                            var t;
                            if (!this.player.live) return;
                            const e = (null === (t = this.stage) || void 0 === t ? void 0 : t.getObject()) || {};
                            e.done = !1, this.$ecast.updateObject(this.player.responseKey, e).catch(this.$handleEcastError)
                        }))
                    },
                    onSubmitClick() {
                        if (!this.stage) return;
                        this.isSubmitting = !0, this.stage.canvas.submitting = !0;
                        const t = this.stage.getObject();
                        t.done = !0, t.action = "submit", this.$ecast.updateObject(this.player.responseKey, t).catch(this.$handleEcastError)
                    },
                    onResize() {
                        this.windowHeight = window.innerHeight
                    }
                }
            });
            var c = (0, i(51900).Z)(l, s, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/base/Draw.vue";
            const d = c.exports
        },
        74634: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => a
            });
            var s = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "waiting"
                }, [i("div", {
                    staticClass: "constrain"
                }, [t.player.message ? i("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.message,
                        expression: "player.message"
                    }]
                }) : t._e()])])
            };
            s._withStripped = !0;
            var n = i(2934);
            const o = i.n(n)().extend({
                props: {
                    player: Object
                }
            });
            var r = (0, i(51900).Z)(o, s, [], !1, null, null, null);
            r.options.__file = "src/apps/vue/components/base/Waiting.vue";
            const a = r.exports
        },
        28274: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => ft
            });
            var s = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.player ? i("div", {
                    staticClass: "detectives"
                }, [i("transition", {
                    on: {
                        leave: t.leave
                    }
                }, ["lobby" === t.player.kind ? i("Lobby", {
                    attrs: {
                        player: t.player,
                        info: t.info
                    }
                }) : "choosing" === t.player.kind ? i("Choosing", {
                    attrs: {
                        player: t.player,
                        info: t.info
                    }
                }) : "drawing" === t.player.kind ? i("Drawing", {
                    attrs: {
                        player: t.player,
                        info: t.info
                    }
                }) : "inspecting" === t.player.kind ? i("Inspecting", {
                    attrs: {
                        player: t.player,
                        info: t.info,
                        timer: t.timer
                    }
                }) : "writing" === t.player.kind ? i("Writing", {
                    attrs: {
                        player: t.player,
                        info: t.info
                    }
                }) : "postGame" === t.player.kind ? i("PostGame", {
                    attrs: {
                        player: t.player,
                        info: t.info,
                        artifact: t.artifact
                    }
                }) : i("Waiting", {
                    key: t.player.icon,
                    attrs: {
                        player: t.player,
                        info: t.info
                    }
                })], 1), t._v(" "), i("transition", {
                    attrs: {
                        name: "toast-transition"
                    }
                }, [t.visibleNotification && t.notification ? i("div", {
                    staticClass: "toast"
                }, [i("div", {
                    staticClass: "constrain"
                }, [i("div", {
                    staticClass: "notification-icon"
                }), t._v(" "), i("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.notification,
                        expression: "notification"
                    }],
                    staticClass: "text"
                })])]) : t._e()]), t._v(" "), t.tutorialShown && !t.tutorialDismissed ? i("Tutorial", {
                    attrs: {
                        slides: t.slides
                    },
                    on: {
                        tutorialComplete: t.onTutorialComplete
                    }
                }) : t._e()], 1) : t.audiencePlayer ? i("div", {
                    staticClass: "detectives"
                }, ["choosing" === t.audiencePlayer.kind ? i("Choosing", {
                    attrs: {
                        player: t.audiencePlayer,
                        audience: ""
                    }
                }) : "voting" === t.audiencePlayer.kind ? i("Choosing", {
                    attrs: {
                        player: t.audiencePlayer,
                        audience: "",
                        repeating: ""
                    }
                }) : "soundboard" === t.audiencePlayer.kind ? i("Soundboard", {
                    attrs: {
                        player: t.audiencePlayer
                    }
                }) : "stabbing" === t.audiencePlayer.kind ? i("Stabbing", {
                    attrs: {
                        player: t.audiencePlayer
                    }
                }) : "postGame" === t.audiencePlayer.kind ? i("PostGame", {
                    attrs: {
                        player: t.audiencePlayer,
                        artifact: t.artifact,
                        audience: ""
                    }
                }) : i("Waiting", {
                    attrs: {
                        player: t.audiencePlayer,
                        artifact: t.artifact,
                        audience: ""
                    }
                })], 1) : t._e()
            };
            s._withStripped = !0;
            var n = i(2934),
                o = i.n(n),
                r = i(94835),
                a = i(89446),
                l = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "choosing scrollable"
                    }, [i("div", {
                        staticClass: "header avatar",
                        class: "" + t.avatar,
                        domProps: {
                            textContent: t._s(t.header)
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "constrain content"
                    }, [i("fieldset", {
                        attrs: {
                            disabled: t.isSubmitting
                        }
                    }, [i("div", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: t.player.prompt,
                            expression: "player.prompt"
                        }],
                        staticClass: "prompt"
                    }), t._v(" "), i("div", {
                        staticClass: "choices"
                    }, t._l(t.player.choices, (function(e, s) {
                        return i("button", {
                            key: "choice_" + t.player.choiceId + "_" + s,
                            staticClass: "choice blackButton",
                            class: {
                                hasMagnifyingGlass: e.hasMagnifyingGlass, hurryUp: e.isHurryUpButton, chosen: t.chosenIndex === s, selected: e.selected, disabled: e.disabled
                            },
                            attrs: {
                                disabled: e.disabled
                            },
                            on: {
                                click: function(e) {
                                    return t.voteClicked(e, s)
                                }
                            }
                        }, [e.lines && e.lines.length > 0 ? i("img", {
                            staticClass: "drawing",
                            attrs: {
                                alt: e.text + " drawing",
                                src: t.getWeaponImage(e)
                            }
                        }) : t._e(), t._v(" "), i("span", {
                            directives: [{
                                name: "bb",
                                rawName: "v-bb",
                                value: e.text,
                                expression: "choice.text"
                            }],
                            staticClass: "text"
                        })])
                    })), 0)])]), t._v(" "), t.player.footer ? i("div", {
                        staticClass: "footer"
                    }, [i("div", {
                        staticClass: "constrain"
                    }, [i("span", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: t.player.footer,
                            expression: "player.footer"
                        }]
                    })])]) : t._e()])
                };
            l._withStripped = !0;
            var c = i(96486),
                d = i(30328),
                h = i(71319),
                u = i(79429),
                p = i(6812);
            class v extends d.f {
                constructor(t, e, i, s) {
                    super(t, e, i, s), this.currentMode = "draw", this.interaction = "translate", this.symbol = [], this.minScale = .1, this.maxScale = 1, s.mode && (this.currentMode = s.mode), s.symbol && (this.symbol = s.symbol, this.getCanvasObject("symbol").dirty = !0), s.minScale && (this.minScale = s.minScale), s.maxScale && (this.maxScale = s.maxScale), this.transform = {
                        translate: {
                            x: Math.floor(this.renderCanvas.width / 2),
                            y: Math.floor(this.renderCanvas.height / 2)
                        },
                        scale: .5 * (this.maxScale + this.minScale),
                        rotate: 0
                    };
                    const n = new window.Image;
                    n.src = h, n.onload = () => {
                        this.moveImage = n, this.draw()
                    };
                    const o = new window.Image;
                    o.src = p, o.onload = () => {
                        this.scaleImage = o, this.draw()
                    };
                    const r = new window.Image;
                    r.src = u, r.onload = () => {
                        this.rotateImage = r, this.draw()
                    }, this.draw()
                }
                setupElements(t) {
                    this.renderCanvas.classList.add("draw-canvas"), this.renderCanvas.width = this.width, this.renderCanvas.height = this.height, this.renderCanvas.style.width = "100%", this.renderCanvas.style.margin = "0px auto", this.renderCanvas.style.height = "100%", this.renderCanvas.style.top = "0", this.renderCanvas.style.left = "0", t.append(this.renderCanvas), this.createCanvasObject("line"), this.createCanvasObject("drawing"), this.createCanvasObject("symbol")
                }
                toObject() {
                    return {
                        lines: this.exportLines(this.lines),
                        transform: this.transform
                    }
                }
                get mode() {
                    return this.currentMode
                }
                set mode(t) {
                    this.isInteracting && this.onUp(), this.currentMode = t, this.getCanvasObject("symbol").dirty = !0, this.draw()
                }
                onDown(t) {
                    if (this.isInteracting = !0, "draw" === this.mode) this.addLine(this.movePointToSymbolPoint(t)), this.getCanvasObject("line").dirty = !0;
                    else if ("move" === this.mode) {
                        this.lastPoint = t;
                        const e = Math.sqrt(Math.pow(t.x - this.transform.translate.x, 2) + Math.pow(t.y - this.transform.translate.y, 2));
                        this.interaction = e < 48 ? "translate" : "rotate", this.getCanvasObject("symbol").dirty = !0
                    }
                    this.draw()
                }
                onMove(t) {
                    if (this.isInteracting) {
                        if ("draw" === this.mode) {
                            const e = this.getLastDrawnPoint();
                            if (!e) return this.addPoint(t), this.getCanvasObject("line").dirty = !0, void this.draw();
                            const i = .5 * this.thickness,
                                s = {
                                    x: t.x - e.x,
                                    y: t.y - e.y
                                },
                                n = Math.sqrt(Math.pow(s.x, 2) + Math.pow(s.y, 2));
                            if (n > i) {
                                const t = (n - i) / n,
                                    o = {
                                        x: s.x * t,
                                        y: s.y * t
                                    },
                                    r = {
                                        x: e.x + o.x,
                                        y: e.y + o.y
                                    };
                                this.addPoint(r), this.getCanvasObject("line").dirty = !0, this.draw()
                            }
                        }
                        if ("move" === this.mode && this.lastPoint) {
                            if ("translate" === this.interaction) this.transform.translate.x += t.x - this.lastPoint.x, this.transform.translate.y += t.y - this.lastPoint.y;
                            else {
                                const e = Math.sqrt(Math.pow(this.lastPoint.x - this.transform.translate.x, 2) + Math.pow(this.lastPoint.y - this.transform.translate.y, 2)),
                                    i = Math.sqrt(Math.pow(t.x - this.transform.translate.x, 2) + Math.pow(t.y - this.transform.translate.y, 2));
                                this.transform.scale = Math.min(this.maxScale, Math.max(this.minScale, this.transform.scale * (i / e)));
                                const s = Math.atan2(this.lastPoint.y - this.transform.translate.y, this.lastPoint.x - this.transform.translate.x) + Math.PI,
                                    n = Math.atan2(t.y - this.transform.translate.y, t.x - this.transform.translate.x) + Math.PI,
                                    o = this.transform.rotate + n - s;
                                this.transform.rotate = (o + 2 * Math.PI) % (2 * Math.PI)
                            }
                            this.getCanvasObject("symbol").dirty = !0, this.lastPoint = t, this.draw()
                        }
                    }
                }
                onUp() {
                    this.isInteracting = !1, "draw" === this.mode && (this.endLine(), this.getCanvasObject("drawing").dirty = !0, this.getCanvasObject("line").dirty = !0, this.draw()), "move" === this.mode && (delete this.lastPoint, this.getCanvasObject("symbol").dirty = !0, this.draw())
                }
                undoLine() {
                    this.isInteracting && this.onUp(), this.lines = this.lines.slice(0, -1), this.getCanvasObject("drawing").dirty = !0, this.draw()
                }
                movePointToSymbolPoint(t) {
                    for (let e = 0; e < this.lines2.length; e++) {
                        const i = this.lines2[e],
                            s = i.points[0],
                            n = i.points[i.points.length - 1];
                        if (a.c.getDistanceBetweenPoints(t, s) < 2 * i.thickness) return s;
                        if (a.c.getDistanceBetweenPoints(t, n) < 2 * i.thickness) return n
                    }
                    return t
                }
                updateSymbolLines() {
                    if (!this.symbol) return;
                    const t = this.parseLines(this.symbol);
                    if (0 === t.length) return;
                    const e = this.renderCanvas.width / 2,
                        i = this.renderCanvas.height / 2,
                        {
                            translate: s,
                            scale: n,
                            rotate: o
                        } = this.transform;
                    let r = Number.MAX_SAFE_INTEGER,
                        a = 0,
                        l = Number.MAX_SAFE_INTEGER,
                        c = 0;
                    const d = t.map((t => Object.assign(Object.assign({}, t), {
                            points: t.points.map((t => {
                                const {
                                    x: d,
                                    y: h
                                } = t;
                                let u, p;
                                return u = Math.cos(o) * (d - e) - Math.sin(o) * (h - i) + e, p = Math.sin(o) * (d - e) + Math.cos(o) * (h - i) + i, u -= e, p -= i, u = (u + e) * n, p = (p + i) * n, u += s.x - e * n, p += s.y - i * n, r = Math.min(r, u), a = Math.max(a, u), l = Math.min(l, p), c = Math.max(c, p), {
                                    x: u,
                                    y: p
                                }
                            }))
                        }))),
                        h = t[0].thickness,
                        u = Math.min((this.renderCanvas.width - h) / (a - r), 1),
                        p = Math.min((this.renderCanvas.height - h) / (c - l), 1),
                        v = Math.min(u, p),
                        m = .5 * h,
                        f = Math.min(0, r - m) + Math.max(0, a - (this.renderCanvas.width - m)),
                        y = Math.min(0, l - m) + Math.max(0, c - (this.renderCanvas.height - m)),
                        g = d.map((t => Object.assign(Object.assign({}, t), {
                            points: t.points.map((t => ({
                                x: v * (t.x - f),
                                y: v * (t.y - y)
                            })))
                        })));
                    this.transform.translate.x -= f, this.transform.translate.y -= y, this.transform.scale *= v, this.lines2 = g
                }
                draw() {
                    const t = this.renderCanvas.getContext("2d");
                    if (!t) return;
                    t.clearRect(0, 0, this.width, this.height);
                    const e = this.getCanvasObject("drawing");
                    if (e.dirty) {
                        const t = e.element.getContext("2d");
                        t.clearRect(0, 0, this.width, this.height), this.lines.forEach((e => this.drawLine(t, e))), e.dirty = !1
                    }
                    t.save(), t.globalAlpha = "move" === this.mode ? .1 : 1, t.drawImage(e.element, 0, 0), t.restore();
                    const i = this.getCanvasObject("line");
                    if (i.dirty) {
                        const t = i.element.getContext("2d");
                        t.clearRect(0, 0, this.width, this.height), this.drawLine(t, this.currentLine), i.dirty = !1
                    }
                    t.drawImage(i.element, 0, 0);
                    const s = this.getCanvasObject("symbol");
                    if (s.dirty) {
                        this.updateSymbolLines();
                        const t = s.element.getContext("2d");
                        t.clearRect(0, 0, this.width, this.height), this.lines2.forEach((e => this.drawLine(t, e))), s.dirty = !1
                    }
                    if (t.drawImage(s.element, 0, 0), "move" !== this.mode || this.isInteracting) return;
                    const {
                        scale: n,
                        rotate: o
                    } = this.transform, {
                        x: r,
                        y: a
                    } = this.transform.translate, {
                        width: l,
                        height: c
                    } = this.renderCanvas;
                    t.save(), t.translate(r, a), t.scale(n, n), t.rotate(o), t.save(), t.strokeStyle = "black", t.lineWidth = 6 / n, t.strokeRect(-.5 * l, -.5 * c, l, c), t.translate(-.5 * l, -.5 * c), t.scale(1 / n, 1 / n), t.rotate(-1 * o), t.restore(), this.moveImage && (t.save(), t.scale(1 / n, 1 / n), t.rotate(-1 * o), t.drawImage(this.moveImage, -32, -32, 64, 64), t.restore()), this.scaleImage && (t.save(), t.translate(.5 * l, -.5 * c), t.scale(1 / n, 1 / n), t.rotate(-1 * o), t.drawImage(this.scaleImage, -32, -32, 64, 64), t.restore()), this.rotateImage && (t.save(), t.translate(.5 * l, .5 * c), t.scale(1 / n, 1 / n), t.rotate(-1 * o), t.drawImage(this.rotateImage, -32, -32, 64, 64), t.restore()), t.restore()
                }
                drawLine(t, e) {
                    t.lineWidth = e.thickness, t.lineCap = "butt", t.lineJoin = "round", t.fillStyle = e.color, t.strokeStyle = e.color, t.save(), t.lineWidth = 1.4 * e.thickness, t.strokeStyle = "#686868", t.beginPath(), e.points.forEach(((e, i) => {
                        0 === i && t.moveTo(e.x, e.y), t.lineTo(e.x, e.y)
                    })), t.stroke(), t.restore(), e.points.forEach(((i, s) => {
                        if (0 === s && (t.save(), t.lineWidth = e.thickness, t.beginPath(), t.arc(i.x, i.y, e.thickness / 2, 0, 2 * Math.PI), t.fill(), t.restore()), 0 !== s) {
                            const n = e.points[s - 1];
                            t.save(), t.lineWidth = e.thickness, t.beginPath(), t.moveTo(n.x, n.y), t.lineTo(i.x, i.y), t.stroke(), t.restore(), t.save(), t.lineWidth = e.thickness, t.beginPath(), t.arc(i.x, i.y, e.thickness / 2, 0, 2 * Math.PI), t.fill(), t.restore()
                        }
                    }))
                }
            }
            const m = {
                    AUDIENCE_NAME: "AUDIENCE",
                    SENT: "sent",
                    STRUCK: "struck",
                    LOBBY: {
                        WAIT: "sit back and relax!",
                        VIP_WAITING: "waiting for all players to join",
                        VIP_PORTRAIT_WARNING: "you sure you want to start before everyone’s avatars are in?",
                        VIP_PORTRAIT_WARNING_CANCEL: "no",
                        VIP_PORTRAIT_WARNING_CONFIRM: "yes",
                        VIP_CANSTART: "press this button when everybody has joined",
                        VIP_CANCEL: "press this button to cancel game start",
                        VIP_POSTGAME: "what would you like to do now?",
                        VIP_EPISODES_MENU: "episodes menu",
                        VIP_EPISODES_UNLOAD: "unload episode",
                        VIP_EPISODES_REPORT: "report episode",
                        VIP_EPISODES_WARNING: "warning: user generated content is not rated",
                        VIP_EPISODES_LOAD: "load an episode by id:",
                        VIP_EPISODES_SELECT: "or select an episode:",
                        VIP_EPISODES_BACK: "back",
                        VIP_EPISODES_SUBMIT: "submit",
                        VIP_EPISODES_VIEW_AUTHOR: "view author",
                        BUTTON_START: "everybody's in",
                        BUTTON_CANCEL: "cancel",
                        BUTTON_CHANGENAME: "change name",
                        BUTTON_SAMEPLAYERS: "same players",
                        BUTTON_NEWPLAYERS: "new players",
                        PROMPT_ENTERNAME: "enter your name",
                        PROMPT_CHOOSECHARACTER: "select your character",
                        BUTTON_CENSOROPTIONS: "censor options",
                        CENSOR_PROMPT: ""
                    },
                    TUTORIAL: {
                        SLIDE_0_TITLE: "In Weapons Drawn, every player is both a detective and a murderer.",
                        SLIDE_0_ITEM_1: "Murder guests brought by other players.",
                        SLIDE_0_ITEM_2: "Solve other murders to distract from your own.",
                        SLIDE_1_TITLE: "Each murder weapon you draw must contain a letter from your name.",
                        SLIDE_1_ITEM_1: 'This is your "calling card."',
                        SLIDE_1_ITEM_2: "Keep it a secret!",
                        SLIDE_2_TITLE: "Hide your letter as part of your drawing.",
                        SLIDE_2_ITEM_1: "Move your letter, then draw the weapon around it.",
                        SLIDE_2_ITEM_2: "Be on the lookout for other players’ letters.",
                        SLIDE_3_TITLE: "Everyone brings two secret guests to the party.",
                        SLIDE_3_ITEM_1: "Give your guest a name that stands out, but won’t lead back to you.",
                        SLIDE_3_ITEM_2: "Murder guests by guessing which player brought them.",
                        SLIDE_3_ITEM_3: "Your weapon is left behind as evidence.",
                        SLIDE_4_TITLE: "Pro Tips:",
                        SLIDE_4_ITEM_1: "Talk to each other and share your theories to get to a majority vote.",
                        SLIDE_4_ITEM_2: "Each player only draws each weapon once. Use this to eliminate suspects."
                    },
                    UGC: {
                        BUTTON_ADD: "add prompt",
                        BUTTON_BACK_TO_EPISODES: "back to episodes",
                        BUTTON_BACK_TO_MENU: "back to menu",
                        BUTTON_CLOSE: "close",
                        BUTTON_DELETE: "delete",
                        BUTTON_DONE: "done",
                        BUTTON_EDIT: "edit",
                        BUTTON_PLAY: "play",
                        BUTTON_PUBLISH: "publish",
                        BUTTON_SAVE: "save",
                        CREATE_NEW_BUTTON: "create",
                        CREATE_NEW_EPISODE: "create a new episode",
                        CREATE_NEW_NAME_PROMPT: "first things first, enter a name for the episode that will contain all your prompts and hit create.",
                        DELETE_WARNING: "are you sure you want to delete this episode?",
                        DELETE_WARNING_CANCEL: "no",
                        DELETE_WARNING_CONFIRM: "yes",
                        INPUT_PLACEHOLDER: "enter a prompt",
                        LABEL_HIDDEN: "hidden",
                        PREVIOUS_EPISODES: "previous episodes",
                        TOGGLE_PROMPTS_PROMPT: "tap to show/hide prompts",
                        TOS_WARNING: "by sharing content, you agree to our Terms of Service",
                        TOS_WARNING_AGREE: "agree and share",
                        TOS_WARNING_BACK: "back to menu"
                    },
                    DRAWING: {
                        TAB_MOVE: "MOVE",
                        TAB_DRAW: "DRAW",
                        BUTTON_UNDO: "UNDO",
                        BUTTON_SUBMIT: "SUBMIT"
                    },
                    WRITING: {
                        BUTTON_SUBMIT: "SUBMIT",
                        WRITE_SOMETHING: "You need to write something!",
                        FILTER_ERROR: "That's not allowed, enter something else! (You can change the level of filtering in the game's settings menu)"
                    }
                },
                f = {
                    en: m,
                    fr: m,
                    it: m,
                    de: m,
                    es: m,
                    "es-XL": m
                };
            var y = function(t, e, i, s) {
                return new(i || (i = Promise))((function(n, o) {
                    function r(t) {
                        try {
                            l(s.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            l(s.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                            t(e)
                        }))).then(r, a)
                    }
                    l((s = s.apply(t, e || [])).next())
                }))
            };
            const g = o().extend({
                i18n: {
                    messages: f
                },
                props: {
                    player: Object,
                    info: Object,
                    audience: Boolean,
                    repeating: Boolean
                },
                data: () => ({
                    isSubmitting: !1,
                    chosenKey: "",
                    lastSubmittedKey: "",
                    chosenIndex: -1,
                    throttledSubmitVote: void 0
                }),
                computed: {
                    header() {
                        return this.audience ? this.$t("AUDIENCE_NAME") : this.info && this.info.name ? this.info.name : ""
                    },
                    avatar() {
                        return this.info && void 0 !== this.info.avatar ? `Avatar${this.info.avatar}` : ""
                    }
                },
                watch: {
                    "player.choiceId": "resetData"
                },
                mounted() {
                    this.audience ? this.throttledSubmitVote = (0, c.throttle)(this.submitAudienceVote.bind(this), 400) : this.throttledSubmitVote = (0, c.throttle)(this.submitVote.bind(this), 400)
                },
                beforeDestroy() {
                    var t;
                    null === (t = this.throttledSubmitVote) || void 0 === t || t.cancel()
                },
                methods: {
                    getWeaponImage(t) {
                        if (!t.lines || !t.size) return "";
                        const e = new v(document.createElement("p"), t.size.width, t.size.height, {
                            thickness: t.thickness
                        });
                        return e.lines = e.parseLines(t.lines), e.getCanvasObject("drawing").dirty = !0, e.draw(), e.canvasElement.toDataURL("image/png")
                    },
                    resetData() {
                        this.isSubmitting = !1, this.chosenKey = "", this.lastSubmittedKey = "", this.chosenIndex = -1
                    },
                    voteClicked(t, e) {
                        return y(this, void 0, void 0, (function*() {
                            t.target instanceof HTMLElement && t.target.blur();
                            let i = e;
                            if (i = this.audience ? void 0 !== this.player.choices[e].countGroupkey ? this.player.choices[e].countGroupkey : `${e}` : void 0 !== this.player.choices[e].key ? this.player.choices[e].key : e, i !== this.chosenKey) return this.chosenKey = i, this.throttledSubmitVote ? this.throttledSubmitVote() : void 0
                        }))
                    },
                    submitAudienceVote() {
                        return y(this, void 0, void 0, (function*() {
                            this.player.countGroupName || console.error("Missing count group name");
                            const {
                                chosenKey: t,
                                lastSubmittedKey: e
                            } = this;
                            if (t !== e) {
                                this.isSubmitting = !0;
                                try {
                                    if (yield this.$ecast.incrementCountGroupCounter(this.player.countGroupName, `${t}`), this.lastSubmittedKey = t, !this.repeating) return;
                                    "" !== e && this.$ecast.incrementCountGroupCounter(this.player.countGroupNegativeName, `${e}`).catch(this.$handleEcastError)
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.isSubmitting = !1
                            }
                        }))
                    },
                    submitVote() {
                        return y(this, void 0, void 0, (function*() {
                            this.player.responseKey || console.error("Missing response entity for vote session"), this.isSubmitting = !0;
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "choose",
                                    choice: this.chosenKey
                                })
                            } catch (t) {
                                this.$handleEcastError(t)
                            }
                        }))
                    }
                }
            });
            var b = i(51900),
                _ = (0, b.Z)(g, l, [], !1, null, null, null);
            _.options.__file = "src/games/pp8/murder-detectives/views/Choosing.vue";
            const w = _.exports;
            var E = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "drawing"
                }, [t.player.header ? i("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.player.header)
                    }
                }) : t._e(), t._v(" "), i("div", {
                    ref: "content",
                    staticClass: "constrain content"
                }, [i("form", [t.player.prompt ? i("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }],
                    staticClass: "prompt"
                }) : t._e(), t._v(" "), i("fieldset", {
                    staticClass: "folder",
                    class: {
                        move: "move" === t.activeMode, draw: "draw" === t.activeMode
                    },
                    attrs: {
                        disabled: t.isSubmitting
                    }
                }, [t.player.symbol ? i("div", {
                    staticClass: "tabs"
                }, [i("button", {
                    staticClass: "mode",
                    class: {
                        active: "move" === t.activeMode
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onModeClick("move")
                        }
                    }
                }, [t._v("\n                        " + t._s(t.$t("DRAWING.TAB_MOVE")) + "\n                    ")]), t._v(" "), i("button", {
                    staticClass: "mode",
                    class: {
                        active: "draw" === t.activeMode
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onModeClick("draw")
                        }
                    }
                }, [t._v("\n                        " + t._s(t.$t("DRAWING.TAB_DRAW")) + "\n                    ")])]) : t._e(), t._v(" "), i("div", {
                    ref: "stage",
                    staticClass: "stage",
                    style: t.stageDimensions
                }), t._v(" "), i("div", {
                    staticClass: "controls"
                }, ["draw" === t.activeMode ? i("button", {
                    staticClass: "undo blackButton",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onUndoClick()
                        }
                    }
                }, [t._v("\n                        " + t._s(t.$t("DRAWING.BUTTON_UNDO")) + "\n                    ")]) : t._e(), t._v(" "), i("button", {
                    staticClass: "submit blackButton",
                    attrs: {
                        type: "submit",
                        disabled: !t.canSubmit
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [t._v("\n                        " + t._s(t.$t("DRAWING.BUTTON_SUBMIT")) + "\n                    ")])])])])])])
            };
            E._withStripped = !0;
            var x = i(17819),
                T = i(32530);
            const I = x.Z.extend({
                props: {
                    player: Object,
                    info: Object
                },
                i18n: {
                    messages: f
                },
                data: () => ({
                    isSubmitting: !1
                }),
                computed: {
                    activeColor() {
                        var t;
                        const e = null === (t = this.stage) || void 0 === t ? void 0 : t.canvas;
                        return (null == e ? void 0 : e.color) ? e.color : ""
                    },
                    activeMode() {
                        var t;
                        const e = null === (t = this.stage) || void 0 === t ? void 0 : t.canvas;
                        return (null == e ? void 0 : e.mode) ? e.mode : ""
                    },
                    activeThickness() {
                        var t;
                        const e = null === (t = this.stage) || void 0 === t ? void 0 : t.canvas;
                        return (null == e ? void 0 : e.thickness) ? e.thickness : 1
                    },
                    canSubmit() {
                        return null !== this.stage && this.stage.canvas.lines.length > 0
                    }
                },
                methods: {
                    clearStage() {
                        this.$refs.stage.innerHTML = "", this.setupStage()
                    },
                    setupStage() {
                        const t = this.$refs.stage,
                            e = {
                                InteractCanvas: v,
                                mode: "move"
                            };
                        this.player.size && (e.width = this.player.size.width, e.height = this.player.size.height), this.player.thicknesses && (e.thickness = this.player.thicknesses[0]), this.player.colors && (e.color = this.player.colors[0]), this.player.symbol && (e.symbol = this.player.symbol), this.player.minScale && (e.minScale = this.player.minScale), this.player.maxScale && (e.maxScale = this.player.maxScale), this.stage = new T.U(t, e), this.stage.on("up", (() => {
                            var t;
                            if (!this.player.live) return;
                            const e = (null === (t = this.stage) || void 0 === t ? void 0 : t.getObject()) || {};
                            e.done = !1, this.$ecast.updateObject(this.player.responseKey, e).catch(this.$handleEcastError)
                        }))
                    },
                    onColorClick(t) {
                        var e;
                        (null === (e = this.stage) || void 0 === e ? void 0 : e.canvas) && (this.stage.canvas.color = t)
                    },
                    onModeClick(t) {
                        var e;
                        const i = null === (e = this.stage) || void 0 === e ? void 0 : e.canvas;
                        (null == i ? void 0 : i.mode) && (i.mode = t)
                    },
                    onUndoClick() {
                        var t, e;
                        if ((null === (t = this.stage) || void 0 === t ? void 0 : t.canvas) && ((null === (e = this.stage) || void 0 === e ? void 0 : e.canvas).undoLine(), this.player.live)) {
                            const t = this.stage.getObject();
                            t.done = !1, this.$ecast.updateObject(this.player.responseKey, t).catch(this.$handleEcastError)
                        }
                    },
                    onSubmitClick() {
                        if (!this.stage) return;
                        const t = this.stage.getObject();
                        t.done = !0, t.action = "submit", this.$ecast.updateObject(this.player.responseKey, t).catch(this.$handleEcastError), this.isSubmitting = !0, this.stage.canvas.submitting = !0
                    }
                },
                watch: {
                    "player.drawingId": function() {
                        this.clearStage(), this.isSubmitting = !1
                    }
                }
            });
            var C = (0, b.Z)(I, E, [], !1, null, null, null);
            C.options.__file = "src/games/pp8/murder-detectives/views/Drawing.vue";
            const O = C.exports;
            var S = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "choosing scrollable"
                }, [t.info ? i("div", {
                    staticClass: "header avatar",
                    class: "Avatar" + t.info.avatar,
                    domProps: {
                        textContent: t._s(t.info.name)
                    }
                }) : t._e(), t._v(" "), i("div", {
                    staticClass: "constrain"
                }, [i("fieldset", {
                    attrs: {
                        disabled: t.isSubmitting
                    }
                }, [i("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }],
                    staticClass: "prompt"
                }), t._v(" "), t.hasWarning ? i("div", {
                    staticClass: "warning prompt"
                }, [t._v("\n                Vote for someone! Quick!\n            ")]) : i("div", {
                    ref: "nipple",
                    class: "nippleContainer numPlayers" + t.player.numPlayers
                }), t._v(" "), i("div", {
                    staticClass: "choices"
                }, t._l(t.player.choices, (function(e, s) {
                    return i("button", {
                        key: "choice_" + t.player.choiceId + "_" + s,
                        staticClass: "choice blackButton",
                        class: {
                            hurryUp: e.isHurryUpButton, chosen: t.chosenIndex === s, selected: e.selected, disabled: e.disabled
                        },
                        attrs: {
                            disabled: e.disabled
                        },
                        on: {
                            click: function(e) {
                                return t.voteClicked(e, s)
                            }
                        }
                    }, [e.lines && e.lines.length > 0 ? i("img", {
                        staticClass: "drawing",
                        attrs: {
                            alt: e.text + " drawing",
                            src: t.getWeaponImage(e)
                        }
                    }) : t._e(), t._v(" "), i("span", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.text,
                            expression: "choice.text"
                        }],
                        staticClass: "text"
                    })])
                })), 0)])])])
            };
            S._withStripped = !0;
            var M = i(59694),
                k = i.n(M);
            const N = w.extend({
                props: {
                    player: Object,
                    timer: Object,
                    info: Object
                },
                data: () => ({
                    isSubmitting: !1,
                    lastUpdate: 0
                }),
                computed: {
                    hasWarning() {
                        var t, e;
                        return (null === (t = this.player.choices) || void 0 === t ? void 0 : t.every((t => !t.selected))) && (null === (e = this.timer) || void 0 === e ? void 0 : e.timeLeft) <= 10
                    }
                },
                methods: {
                    updateInspect(t) {
                        this.$ecast.updateObject(this.player.inspectKey, {
                            position: t.position,
                            vector: t.vector
                        }).catch(this.$handleEcastError)
                    }
                },
                mounted() {
                    const t = this.$refs.nipple,
                        e = {
                            zone: t,
                            color: "blue",
                            dynamicPage: !0,
                            size: 10,
                            follow: !0
                        };
                    k().create(e).on("move", ((e, i) => {
                        if (Date.now() - this.lastUpdate < 100) return;
                        this.lastUpdate = Date.now();
                        const s = t.getBoundingClientRect(),
                            n = {
                                x: Math.floor((i.raw.position.x - s.x) / s.width * 1280),
                                y: Math.floor((i.raw.position.y - s.y) / s.height * 720)
                            };
                        this.updateInspect({
                            position: n,
                            vector: i.vector
                        })
                    }))
                }
            });
            var P = (0, b.Z)(N, S, [], !1, null, null, null);
            P.options.__file = "src/games/pp8/murder-detectives/views/Inspecting.vue";
            const L = P.exports;
            var D = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "lobby scrollable"
                }, [t.info ? i("div", {
                    staticClass: "header avatar",
                    class: "Avatar" + t.info.avatar,
                    domProps: {
                        textContent: t._s(t.info.name)
                    }
                }) : t._e(), t._v(" "), i("div", {
                    staticClass: "constrain content"
                }, [i("LobbyActions", {
                    attrs: {
                        player: t.player,
                        classes: {
                            message: "message",
                            action: "action blackButton",
                            status: "status"
                        }
                    }
                })], 1)])
            };
            D._withStripped = !0;
            var A = i(13494);
            const $ = o().extend({
                components: {
                    LobbyActions: A.Z
                },
                props: {
                    player: Object,
                    info: Object
                }
            });
            var R = (0, b.Z)($, D, [], !1, null, null, null);
            R.options.__file = "src/games/pp8/murder-detectives/views/Lobby.vue";
            const j = R.exports;
            var U = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "post-game scrollable"
                }, [i("div", {
                    staticClass: "header avatar",
                    class: "" + t.avatar,
                    domProps: {
                        textContent: t._s(t.header)
                    }
                }), t._v(" "), i("div", {
                    staticClass: "constrain"
                }, [i("PostGameActions", {
                    attrs: {
                        player: t.player,
                        classes: {
                            message: "message",
                            action: "action blackButton",
                            status: "status"
                        }
                    }
                }), t._v(" "), i("GalleryLink", {
                    attrs: {
                        artifact: t.artifact
                    }
                })], 1)])
            };
            U._withStripped = !0;
            var B = i(56623),
                z = i(83933);
            const W = o().extend({
                components: {
                    GalleryLink: B.Z,
                    PostGameActions: z.Z
                },
                i18n: {
                    messages: f
                },
                props: {
                    artifact: Object,
                    info: Object,
                    player: Object,
                    audience: Boolean
                },
                computed: {
                    header() {
                        return this.audience ? this.$t("AUDIENCE_NAME") : `${this.info.name}`
                    },
                    avatar() {
                        return this.info && void 0 !== this.info.avatar ? `Avatar${this.info.avatar}` : ""
                    }
                }
            });
            var G = (0, b.Z)(W, U, [], !1, null, "57793e1c", null);
            G.options.__file = "src/games/pp8/murder-detectives/views/PostGame.vue";
            const H = G.exports;
            var Y = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "soundboard scrollable"
                }, [i("div", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "AUDIENCE_NAME",
                        expression: "'AUDIENCE_NAME'"
                    }],
                    staticClass: "header avatar"
                }), t._v(" "), i("div", {
                    staticClass: "constrain content"
                }, [i("fieldset", [i("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }],
                    staticClass: "prompt"
                }), t._v(" "), i("div", {
                    staticClass: "choices"
                }, t._l(t.items, (function(e) {
                    return i("button", {
                        key: e.key,
                        staticClass: "choice blackButton",
                        class: {
                            cooling: e.isCooling
                        },
                        style: {
                            "--progress-width": e.progress
                        },
                        attrs: {
                            disabled: e.isTriggered
                        },
                        domProps: {
                            textContent: t._s(e.text)
                        },
                        on: {
                            click: function(i) {
                                return t.onItemClick(e.key)
                            }
                        }
                    })
                })), 0)])])])
            };
            Y._withStripped = !0;
            var K = i(55507);
            const V = o().extend({
                i18n: {
                    messages: f
                },
                props: {
                    player: Object
                },
                data: () => ({
                    coolDownTimeouts: {},
                    throttledSubmit: void 0
                }),
                computed: {
                    items() {
                        return this.player.choices.map((t => {
                            const e = void 0 !== this.coolDownTimeouts[t.countGroupkey];
                            return {
                                text: e ? this.$t("SENT") : t.text,
                                key: t.countGroupkey,
                                isCooling: e,
                                isTriggered: t.disabled,
                                progress: t.progress
                            }
                        }))
                    }
                },
                mounted() {
                    this.throttledSubmit = (0, c.throttle)(this.submit.bind(this), 400)
                },
                beforeDestroy() {
                    var t;
                    null === (t = this.throttledSubmit) || void 0 === t || t.cancel(), Object.keys(this.coolDownTimeouts).forEach((t => {
                        window.clearTimeout(this.coolDownTimeouts[t])
                    }))
                },
                methods: {
                    onItemClick(t) {
                        var e;
                        this.coolDownTimeouts[t] || null === (e = this.throttledSubmit) || void 0 === e || e.call(this, t)
                    },
                    submit(t) {
                        return e = this, i = void 0, n = function*() {
                            try {
                                yield this.$ecast.incrementCountGroupCounter(this.player.countGroupName, t), this.$set(this.coolDownTimeouts, t, window.setTimeout((() => {
                                    this.$delete(this.coolDownTimeouts, t)
                                }), 3e3))
                            } catch (t) {
                                t instanceof K.EcastRateLimitExceeded || this.$handleEcastError(t)
                            }
                        }, new((s = void 0) || (s = Promise))((function(t, o) {
                            function r(t) {
                                try {
                                    l(n.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function a(t) {
                                try {
                                    l(n.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function l(e) {
                                var i;
                                e.done ? t(e.value) : (i = e.value, i instanceof s ? i : new s((function(t) {
                                    t(i)
                                }))).then(r, a)
                            }
                            l((n = n.apply(e, i || [])).next())
                        }));
                        var e, i, s, n
                    }
                }
            });
            var X = (0, b.Z)(V, Y, [], !1, null, null, null);
            X.options.__file = "src/games/pp8/murder-detectives/views/Soundboard.vue";
            const F = X.exports;
            var Z = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "stabbing scrollable"
                }, [i("div", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "AUDIENCE_NAME",
                        expression: "'AUDIENCE_NAME'"
                    }],
                    staticClass: "header avatar"
                }), t._v(" "), i("div", {
                    staticClass: "constrain content"
                }, [i("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }],
                    staticClass: "prompt"
                }), t._v(" "), i("transition", {
                    attrs: {
                        name: "result-transition",
                        mode: "out-in"
                    }
                }, [t.result ? i("div", {
                    staticClass: "result",
                    domProps: {
                        textContent: t._s(t.result)
                    }
                }) : i("button", {
                    staticClass: "stab-button",
                    on: {
                        click: t.onStabClick
                    }
                }, [i("span", {
                    domProps: {
                        textContent: t._s(t.player.buttonText)
                    }
                })])])], 1)])
            };
            Z._withStripped = !0;
            var J = i(69983),
                q = i.n(J);
            const Q = o().extend({
                i18n: {
                    messages: f
                },
                props: {
                    player: Object
                },
                data: () => ({
                    result: void 0,
                    timeout: void 0,
                    shuffledHitMessages: [],
                    shuffledMissMessages: []
                }),
                beforeDestroy() {
                    this.timeout && window.clearTimeout(this.timeout)
                },
                methods: {
                    onStabClick() {
                        Math.random() < .5 ? (this.shuffledHitMessages.length || (this.shuffledHitMessages = q()(this.player.hitMessages)), this.result = this.shuffledHitMessages.pop()) : (this.shuffledMissMessages.length || (this.shuffledMissMessages = q()(this.player.missMessages)), this.result = this.shuffledMissMessages.pop()), this.timeout = window.setTimeout((() => {
                            this.result = void 0
                        }), 7e3)
                    }
                }
            });
            var tt = (0, b.Z)(Q, Z, [], !1, null, null, null);
            tt.options.__file = "src/games/pp8/murder-detectives/views/Stabbing.vue";
            const et = tt.exports;
            var it = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    class: {
                        waiting: !0, hasTransition: t.player.icon
                    }
                }, [s("div", {
                    staticClass: "header avatar",
                    class: "" + t.avatar,
                    domProps: {
                        textContent: t._s(t.header)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain content"
                }, [s("div", [t.player.icon ? s("div", {
                    class: "icon " + t.player.icon
                }) : t._e(), t._v(" "), t.player.message ? s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.message,
                        expression: "player.message"
                    }],
                    class: {
                        prompt: !0, hasIcon: t.player.icon
                    }
                }) : t._e()]), t._v(" "), t.player.icon ? t._e() : s("div", [s("img", {
                    staticClass: "logo",
                    attrs: {
                        alt: "weapons drawn logo",
                        src: i(7304)
                    }
                })])])])
            };
            it._withStripped = !0;
            const st = i(74634).Z.extend({
                i18n: {
                    messages: f
                },
                props: {
                    info: Object,
                    player: Object,
                    artifact: Object,
                    audience: Boolean
                },
                computed: {
                    header() {
                        return this.audience ? this.$t("AUDIENCE_NAME") : this.info && this.info.name ? this.info.name : ""
                    },
                    avatar() {
                        return this.info && void 0 !== this.info.avatar ? `Avatar${this.info.avatar}` : ""
                    }
                }
            });
            var nt = (0, b.Z)(st, it, [], !1, null, null, null);
            nt.options.__file = "src/games/pp8/murder-detectives/views/Waiting.vue";
            const ot = nt.exports;
            var rt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "writing"
                }, [t.info && t.info.name ? i("div", {
                    staticClass: "header avatar",
                    class: "Avatar" + t.info.avatar,
                    domProps: {
                        textContent: t._s(t.info.name)
                    }
                }) : t._e(), t._v(" "), i("div", {
                    staticClass: "constrain content"
                }, [i("form", {
                    attrs: {
                        autocomplete: "off"
                    },
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                }, [i("fieldset", {
                    attrs: {
                        disabled: t.isSubmitting
                    }
                }, [i("label", {
                    attrs: {
                        for: "textinput"
                    }
                }, [t.player.prompt ? i("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }],
                    staticClass: "prompt"
                }) : t._e()]), t._v(" "), i("textarea", {
                    ref: "textarea",
                    attrs: {
                        id: "textinput",
                        rows: "1",
                        maxlength: t.player.maxLength,
                        placeholder: t.player.placeholder
                    },
                    domProps: {
                        value: t.answer
                    },
                    on: {
                        input: t.onInput,
                        keypress: t.onKeypress
                    }
                }), t._v(" "), i("div", {
                    staticClass: "inputLine"
                }, [i("div", {
                    staticClass: "character-count",
                    class: {
                        "too-long": t.player.maxLength - t.sanitizedAnswer.length < 0
                    }
                }, [t._v("\n                        " + t._s(t.remainingCharacters) + "\n                    ")]), t._v(" "), i("button", {
                    staticClass: "submit blackButton",
                    attrs: {
                        type: "submit",
                        value: "Submit",
                        disabled: !t.canSubmit
                    }
                }, [t._v("\n                        " + t._s(t.$t("WRITING.BUTTON_SUBMIT")) + "\n                    ")])]), t._v(" "), t.player.error || t.validationError || t.filterError ? i("div", {
                    staticClass: "errors"
                }, [t.player.error ? i("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.error,
                        expression: "player.error"
                    }],
                    staticClass: "error"
                }) : t._e(), t._v(" "), t.validationError ? i("span", {
                    staticClass: "error"
                }, [t._v(t._s(t.validationError))]) : t._e(), t._v(" "), t.filterError ? i("span", {
                    staticClass: "error"
                }, [t._v(t._s(t.$t("WRITING.FILTER_ERROR")))]) : t._e()]) : t._e()])])])])
            };
            rt._withStripped = !0;
            var at = i(3682),
                lt = i(23493),
                ct = i.n(lt),
                dt = function(t, e, i, s) {
                    return new(i || (i = Promise))((function(n, o) {
                        function r(t) {
                            try {
                                l(s.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                l(s.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function l(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                                t(e)
                            }))).then(r, a)
                        }
                        l((s = s.apply(t, e || [])).next())
                    }))
                };
            const ht = o().extend({
                props: {
                    player: Object,
                    info: Object
                },
                i18n: {
                    messages: f
                },
                data: () => ({
                    answer: "",
                    isSubmitting: !1,
                    validationError: "",
                    filterError: !1
                }),
                computed: {
                    sanitizedAnswer() {
                        return a.c.sanitizeInput(this.answer).trim()
                    },
                    remainingCharacters() {
                        return this.player.maxLength ? "" + (this.player.maxLength - this.answer.length) : ""
                    },
                    canSubmit() {
                        return !(!this.sanitizedAnswer || this.player.maxLength && this.sanitizedAnswer.length > this.player.maxLength)
                    }
                },
                watch: {
                    "player.writingId": function() {
                        this.answer = "", this.isSubmitting = !1
                    }
                },
                mounted() {
                    this.autoSubmitter = ct()(this.autoSubmit.bind(this), 400), (0, at.Z)(this.$refs.textarea), this.player.textKey && this.restoreText()
                },
                beforeDestroy() {
                    this.autoSubmitter.cancel()
                },
                methods: {
                    restoreText() {
                        return dt(this, void 0, void 0, (function*() {
                            const t = yield this.$ecast.getText(this.player.textKey);
                            this.answer = t.text
                        }))
                    },
                    autoSubmit() {
                        return dt(this, void 0, void 0, (function*() {
                            if (!this.isSubmitting) try {
                                yield this.$ecast.updateText(this.player.textKey, this.sanitizedAnswer)
                            } catch (t) {
                                t instanceof K.EcastFilterError || this.$handleEcastError(t), yield this.$ecast.updateText(this.player.textKey, "")
                            }
                        }))
                    },
                    onKeypress(t) {
                        "Enter" === t.key && this.onSubmit()
                    },
                    onInput(t) {
                        const e = t.target;
                        this.answer = a.c.sanitizeInput(e.value), this.filterError = !1, this.autoSubmitter()
                    },
                    onSubmit() {
                        return dt(this, void 0, void 0, (function*() {
                            if (this.autoSubmitter.cancel(), this.answer) {
                                this.isSubmitting = !0;
                                try {
                                    yield this.$ecast.updateText(this.player.textKey, this.sanitizedAnswer), this.filterError = !1, this.player.doneKey && (yield this.$ecast.updateObject(this.player.doneKey, {
                                        done: !0
                                    }))
                                } catch (t) {
                                    this.isSubmitting = !1, this.$handleEcastError(t), this.filterError = !0, setTimeout((() => {
                                        this.$refs.textarea instanceof HTMLElement && this.$refs.textarea.focus()
                                    }), 0)
                                }
                            } else this.validationError = this.$t("WRITING.WRITE_SOMETHING")
                        }))
                    }
                }
            });
            var ut = (0, b.Z)(ht, rt, [], !1, null, null, null);
            ut.options.__file = "src/games/pp8/murder-detectives/views/Writing.vue";
            const pt = ut.exports;
            const vt = o().extend({
                bb: {
                    header: (t, e) => `<h3>${e}</h3>`,
                    rank: (t, e) => `<div>${e}</div>`,
                    line: (t, e, i) => `<div class="${i.line?`${i.line} line`:"line"}">${e}</div>`,
                    guest: {
                        generator: (t, e) => `<span class="guest">${e}</span>`,
                        options: {
                            noNesting: !0
                        }
                    },
                    player: {
                        generator: (t, e) => `<span class="player">${e}</span>`,
                        options: {
                            noNesting: !0
                        }
                    }
                },
                themeColor: "#e69b2c",
                components: {
                    Lobby: j,
                    PostGame: H,
                    Choosing: w,
                    Drawing: O,
                    Inspecting: L,
                    Soundboard: F,
                    Stabbing: et,
                    Tutorial: r.Z,
                    Waiting: ot,
                    Writing: pt
                },
                ecastKeys: {
                    info: ({
                        id: t
                    }) => `info:${t}`,
                    player: ({
                        id: t
                    }) => `player:${t}`,
                    audiencePlayer: "audiencePlayer",
                    timer: "timer",
                    notification: ({
                        id: t
                    }) => `notification:${t}`
                },
                ecastProviders: {
                    artifact: t => {
                        if (t.artifact) return t.artifact;
                        let e, i = 0;
                        for (; t[`artifact:${i}`];) e = t[`artifact:${i}`], i += 1;
                        return e
                    }
                },
                props: {
                    info: Object,
                    player: Object,
                    notification: String,
                    audiencePlayer: Object,
                    artifact: Object,
                    timer: Object
                },
                data() {
                    return {
                        tutorialShown: !1,
                        tutorialDismissed: !1,
                        visibleNotification: !1,
                        timeout: null,
                        slides: [{
                            title: this.$t("TUTORIAL.SLIDE_0_TITLE"),
                            listItems: [this.$t("TUTORIAL.SLIDE_0_ITEM_1"), this.$t("TUTORIAL.SLIDE_0_ITEM_2")],
                            imageClass: "tutorial-0"
                        }, {
                            title: this.$t("TUTORIAL.SLIDE_1_TITLE"),
                            listItems: [this.$t("TUTORIAL.SLIDE_1_ITEM_1"), this.$t("TUTORIAL.SLIDE_1_ITEM_2")],
                            imageClass: "tutorial-1"
                        }, {
                            title: this.$t("TUTORIAL.SLIDE_2_TITLE"),
                            listItems: [this.$t("TUTORIAL.SLIDE_2_ITEM_1"), this.$t("TUTORIAL.SLIDE_2_ITEM_2")],
                            imageClass: "tutorial-2"
                        }, {
                            title: this.$t("TUTORIAL.SLIDE_3_TITLE"),
                            listItems: [this.$t("TUTORIAL.SLIDE_3_ITEM_1"), this.$t("TUTORIAL.SLIDE_3_ITEM_2"), this.$t("TUTORIAL.SLIDE_3_ITEM_3")],
                            imageClass: "tutorial-3"
                        }, {
                            title: this.$t("TUTORIAL.SLIDE_4_TITLE"),
                            listItems: [this.$t("TUTORIAL.SLIDE_4_ITEM_1"), this.$t("TUTORIAL.SLIDE_4_ITEM_2")],
                            imageClass: "tutorial-4"
                        }]
                    }
                },
                watch: {
                    notification: function(t) {
                        t && (this.visibleNotification = !0, this.timeout && (window.clearTimeout(this.timeout), this.timeout = null), this.timeout = window.setTimeout((() => {
                            this.hideNotification()
                        }), 4e3))
                    },
                    player: function(t) {
                        this.tutorialShown = this.tutorialShown || t.showTutorial
                    }
                },
                methods: {
                    onTutorialComplete() {
                        this.tutorialDismissed = !0
                    },
                    hideNotification() {
                        this.visibleNotification = !1, this.timeout && (window.clearTimeout(this.timeout), this.timeout = null)
                    },
                    leave: (t, e) => {
                        return i = void 0, s = void 0, o = function*() {
                            t.classList.contains("hasTransition") && (yield a.c.sleep(600)), e()
                        }, new((n = void 0) || (n = Promise))((function(t, e) {
                            function r(t) {
                                try {
                                    l(o.next(t))
                                } catch (t) {
                                    e(t)
                                }
                            }

                            function a(t) {
                                try {
                                    l(o.throw(t))
                                } catch (t) {
                                    e(t)
                                }
                            }

                            function l(e) {
                                var i;
                                e.done ? t(e.value) : (i = e.value, i instanceof n ? i : new n((function(t) {
                                    t(i)
                                }))).then(r, a)
                            }
                            l((o = o.apply(i, s || [])).next())
                        }));
                        var i, s, n, o
                    }
                },
                i18n: {
                    messages: f
                }
            });
            var mt = (0, b.Z)(vt, s, [], !1, null, null, null);
            mt.options.__file = "src/games/pp8/murder-detectives/views/Main.vue";
            const ft = mt.exports
        },
        78627: t => {
            function e(t) {
                return -1 !== t.type.indexOf("mouse") ? t.clientX : t.touches[0].clientX
            }

            function i(t) {
                return -1 !== t.type.indexOf("mouse") ? t.clientY : t.touches[0].clientY
            }
            var s = function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        window.addEventListener("test", null, e)
                    } catch (t) {}
                    return t
                }(),
                n = 0,
                o = {
                    install: function(t, o) {
                        var r = Object.assign({}, {
                            disableClick: !1,
                            tapTolerance: 10,
                            swipeTolerance: 30,
                            touchHoldTolerance: 400,
                            longTapTimeInterval: 400,
                            touchClass: "",
                            namespace: "touch"
                        }, o);

                        function a(t) {
                            var s = this.$$touchObj,
                                o = t.type.indexOf("touch") >= 0,
                                r = t.type.indexOf("mouse") >= 0,
                                a = this;
                            o && (n = t.timeStamp), r && n && t.timeStamp - n < 350 || s.touchStarted || (v(this), s.touchStarted = !0, s.touchMoved = !1, s.swipeOutBounded = !1, s.startX = e(t), s.startY = i(t), s.currentX = 0, s.currentY = 0, s.touchStartTime = t.timeStamp, s.touchHoldTimer = setTimeout((function() {
                                s.touchHoldTimer = null, p(t, a, "touchhold")
                            }), s.options.touchHoldTolerance), p(t, this, "start"))
                        }

                        function l(t) {
                            var s = this.$$touchObj;
                            if (s.currentX = e(t), s.currentY = i(t), s.touchMoved) {
                                if (!s.swipeOutBounded) {
                                    var n = s.options.swipeTolerance;
                                    s.swipeOutBounded = Math.abs(s.startX - s.currentX) > n && Math.abs(s.startY - s.currentY) > n
                                }
                            } else {
                                var o = s.options.tapTolerance;
                                s.touchMoved = Math.abs(s.startX - s.currentX) > o || Math.abs(s.startY - s.currentY) > o, s.touchMoved && (f(s), p(t, this, "moved"))
                            }
                            s.touchMoved && p(t, this, "moving")
                        }

                        function c() {
                            var t = this.$$touchObj;
                            f(t), m(this), t.touchStarted = t.touchMoved = !1, t.startX = t.startY = 0
                        }

                        function d(t) {
                            var e = this.$$touchObj,
                                i = t.type.indexOf("touch") >= 0,
                                s = t.type.indexOf("mouse") >= 0;
                            i && (n = t.timeStamp);
                            var o = i && !e.touchHoldTimer;
                            if (f(e), e.touchStarted = !1, m(this), !(s && n && t.timeStamp - n < 350))
                                if (p(t, this, "end"), e.touchMoved) {
                                    if (!e.swipeOutBounded) {
                                        var r, a = e.options.swipeTolerance,
                                            l = Math.abs(e.startY - e.currentY),
                                            c = Math.abs(e.startX - e.currentX);
                                        (l > a || c > a) && (r = l > a ? e.startY > e.currentY ? "top" : "bottom" : e.startX > e.currentX ? "left" : "right", e.callbacks["swipe." + r] ? p(t, this, "swipe." + r, r) : p(t, this, "swipe", r))
                                    }
                                } else if (e.callbacks.longtap && t.timeStamp - e.touchStartTime > e.options.longTapTimeInterval) t.cancelable && t.preventDefault(), p(t, this, "longtap");
                            else {
                                if (e.callbacks.touchhold && o) return void(t.cancelable && t.preventDefault());
                                p(t, this, "tap")
                            }
                        }

                        function h() {
                            v(this)
                        }

                        function u() {
                            m(this)
                        }

                        function p(t, e, i, s) {
                            var n = e.$$touchObj,
                                o = n && n.callbacks[i] || [];
                            if (0 === o.length) return null;
                            for (var r = 0; r < o.length; r++) {
                                var a = o[r];
                                a.modifiers.stop && t.stopPropagation(), a.modifiers.prevent && t.cancelable && t.preventDefault(), a.modifiers.self && t.target !== t.currentTarget || "function" == typeof a.value && (s ? a.value(s, t) : a.value(t))
                            }
                        }

                        function v(t) {
                            var e = t.$$touchObj.options.touchClass;
                            e && t.classList.add(e)
                        }

                        function m(t) {
                            var e = t.$$touchObj.options.touchClass;
                            e && t.classList.remove(e)
                        }

                        function f(t) {
                            t.touchHoldTimer && (clearTimeout(t.touchHoldTimer), t.touchHoldTimer = null)
                        }

                        function y(t, e) {
                            var i = t.$$touchObj || {
                                callbacks: {},
                                hasBindTouchEvents: !1,
                                options: r
                            };
                            return e && (i.options = Object.assign({}, i.options, e)), t.$$touchObj = i, t.$$touchObj
                        }
                        t.directive(r.namespace, {
                            bind: function(t, e) {
                                var i = y(t),
                                    n = !!s && {
                                        passive: !0
                                    },
                                    o = e.arg || "tap";
                                switch (o) {
                                    case "swipe":
                                        var r = e.modifiers;
                                        if (r.left || r.right || r.top || r.bottom) {
                                            for (var p in e.modifiers)
                                                if (["left", "right", "top", "bottom"].indexOf(p) >= 0) {
                                                    var v = "swipe." + p;
                                                    i.callbacks[v] = i.callbacks[v] || [], i.callbacks[v].push(e)
                                                }
                                        } else i.callbacks.swipe = i.callbacks.swipe || [], i.callbacks.swipe.push(e);
                                        break;
                                    case "start":
                                    case "moving":
                                        e.modifiers.disablePassive && (n = !1);
                                    default:
                                        i.callbacks[o] = i.callbacks[o] || [], i.callbacks[o].push(e)
                                }
                                i.hasBindTouchEvents || (t.addEventListener("touchstart", a, n), t.addEventListener("touchmove", l, n), t.addEventListener("touchcancel", c), t.addEventListener("touchend", d), i.options.disableClick || (t.addEventListener("mousedown", a), t.addEventListener("mousemove", l), t.addEventListener("mouseup", d), t.addEventListener("mouseenter", h), t.addEventListener("mouseleave", u)), i.hasBindTouchEvents = !0)
                            },
                            unbind: function(t) {
                                t.removeEventListener("touchstart", a), t.removeEventListener("touchmove", l), t.removeEventListener("touchcancel", c), t.removeEventListener("touchend", d), t.$$touchObj && !t.$$touchObj.options.disableClick && (t.removeEventListener("mousedown", a), t.removeEventListener("mousemove", l), t.removeEventListener("mouseup", d), t.removeEventListener("mouseenter", h), t.removeEventListener("mouseleave", u)), delete t.$$touchObj
                            }
                        }), t.directive(r.namespace + "-class", {
                            bind: function(t, e) {
                                y(t, {
                                    touchClass: e.value
                                })
                            }
                        }), t.directive(r.namespace + "-options", {
                            bind: function(t, e) {
                                y(t, e.value)
                            }
                        })
                    }
                };
            t.exports = o
        },
        71319: (t, e, i) => {
            "use strict";
            t.exports = i.p + "games/murder-detectives/670ca04ad8ce5388a215.png"
        },
        79429: (t, e, i) => {
            "use strict";
            t.exports = i.p + "games/murder-detectives/1b4bde6939247314eac7.png"
        },
        6812: (t, e, i) => {
            "use strict";
            t.exports = i.p + "games/murder-detectives/8fa11cb7bdd0cee031d0.png"
        },
        7304: (t, e, i) => {
            "use strict";
            t.exports = i.p + "games/murder-detectives/76a685e9d980852b01ec.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/9457.f3632695e4622d604e1c.js.map