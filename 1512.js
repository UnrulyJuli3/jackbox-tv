(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [1512], {
        3682: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r, o, i = "function" == typeof Map ? new Map : (r = [], o = [], {
                    has: function(t) {
                        return r.indexOf(t) > -1
                    },
                    get: function(t) {
                        return o[r.indexOf(t)]
                    },
                    set: function(t, e) {
                        -1 === r.indexOf(t) && (r.push(t), o.push(e))
                    },
                    delete: function(t) {
                        var e = r.indexOf(t);
                        e > -1 && (r.splice(e, 1), o.splice(e, 1))
                    }
                }),
                a = function(t) {
                    return new Event(t, {
                        bubbles: !0
                    })
                };
            try {
                new Event("test")
            } catch (r) {
                a = function(t) {
                    var e = document.createEvent("Event");
                    return e.initEvent(t, !0, !1), e
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
            var u = null;
            "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((u = function(t) {
                return t
            }).destroy = function(t) {
                return t
            }, u.update = function(t) {
                return t
            }) : ((u = function(t, e) {
                return t && Array.prototype.forEach.call(t.length ? t : [t], (function(t) {
                    return function(t) {
                        if (t && t.nodeName && "TEXTAREA" === t.nodeName && !i.has(t)) {
                            var e, n = null,
                                r = null,
                                o = null,
                                l = function() {
                                    t.clientWidth !== r && d()
                                },
                                s = function(e) {
                                    window.removeEventListener("resize", l, !1), t.removeEventListener("input", d, !1), t.removeEventListener("keyup", d, !1), t.removeEventListener("autosize:destroy", s, !1), t.removeEventListener("autosize:update", d, !1), Object.keys(e).forEach((function(n) {
                                        t.style[n] = e[n]
                                    })), i.delete(t)
                                }.bind(t, {
                                    height: t.style.height,
                                    resize: t.style.resize,
                                    overflowY: t.style.overflowY,
                                    overflowX: t.style.overflowX,
                                    wordWrap: t.style.wordWrap
                                });
                            t.addEventListener("autosize:destroy", s, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", d, !1), window.addEventListener("resize", l, !1), t.addEventListener("input", d, !1), t.addEventListener("autosize:update", d, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", i.set(t, {
                                destroy: s,
                                update: d
                            }), "vertical" === (e = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === e.resize && (t.style.resize = "horizontal"), n = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(n) && (n = 0), d()
                        }

                        function u(e) {
                            var n = t.style.width;
                            t.style.width = "0px", t.style.width = n, t.style.overflowY = e
                        }

                        function c() {
                            if (0 !== t.scrollHeight) {
                                var e = function(t) {
                                        for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
                                            node: t.parentNode,
                                            scrollTop: t.parentNode.scrollTop
                                        }), t = t.parentNode;
                                        return e
                                    }(t),
                                    o = document.documentElement && document.documentElement.scrollTop;
                                t.style.height = "", t.style.height = t.scrollHeight + n + "px", r = t.clientWidth, e.forEach((function(t) {
                                    t.node.scrollTop = t.scrollTop
                                })), o && (document.documentElement.scrollTop = o)
                            }
                        }

                        function d() {
                            c();
                            var e = Math.round(parseFloat(t.style.height)),
                                n = window.getComputedStyle(t, null),
                                r = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : t.offsetHeight;
                            if (r < e ? "hidden" === n.overflowY && (u("scroll"), c(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== n.overflowY && (u("hidden"), c(), r = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), o !== r) {
                                o = r;
                                var i = a("autosize:resized");
                                try {
                                    t.dispatchEvent(i)
                                } catch (t) {}
                            }
                        }
                    }(t)
                })), t
            }).destroy = function(t) {
                return t && Array.prototype.forEach.call(t.length ? t : [t], l), t
            }, u.update = function(t) {
                return t && Array.prototype.forEach.call(t.length ? t : [t], s), t
            });
            const c = u
        },
        96713: (t, e, n) => {
            n(68757);
            var r = n(2649);
            t.exports = r("String", "replaceAll")
        },
        38534: (t, e, n) => {
            n(27207);
            var r = n(96713);
            t.exports = r
        },
        7392: (t, e, n) => {
            var r, o, i = n(17854),
                a = n(88113),
                l = i.process,
                s = l && l.versions,
                u = s && s.v8;
            u ? o = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), t.exports = o && +o
        },
        2649: (t, e, n) => {
            var r = n(17854),
                o = n(49974),
                i = Function.call;
            t.exports = function(t, e, n) {
                return o(i, r[t].prototype[e], n)
            }
        },
        10647: (t, e, n) => {
            var r = n(47908),
                o = Math.floor,
                i = "".replace,
                a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                l = /\$([$&'`]|\d{1,2})/g;
            t.exports = function(t, e, n, s, u, c) {
                var d = n + t.length,
                    p = s.length,
                    v = l;
                return void 0 !== u && (u = r(u), v = a), i.call(c, v, (function(r, i) {
                    var a;
                    switch (i.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return e.slice(0, n);
                        case "'":
                            return e.slice(d);
                        case "<":
                            a = u[i.slice(1, -1)];
                            break;
                        default:
                            var l = +i;
                            if (0 === l) return r;
                            if (l > p) {
                                var c = o(l / 10);
                                return 0 === c ? r : c <= p ? void 0 === s[c - 1] ? i.charAt(1) : s[c - 1] + i.charAt(1) : r
                            }
                            a = s[l - 1]
                    }
                    return void 0 === a ? "" : a
                }))
            }
        },
        47850: (t, e, n) => {
            var r = n(70111),
                o = n(84326),
                i = n(5112)("match");
            t.exports = function(t) {
                var e;
                return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
            }
        },
        30133: (t, e, n) => {
            var r = n(7392),
                o = n(47293);
            t.exports = !!Object.getOwnPropertySymbols && !o((function() {
                var t = Symbol();
                return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41
            }))
        },
        67066: (t, e, n) => {
            "use strict";
            var r = n(19670);
            t.exports = function() {
                var t = r(this),
                    e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
            }
        },
        43307: (t, e, n) => {
            var r = n(30133);
            t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        5112: (t, e, n) => {
            var r = n(17854),
                o = n(72309),
                i = n(86656),
                a = n(69711),
                l = n(30133),
                s = n(43307),
                u = o("wks"),
                c = r.Symbol,
                d = s ? c : c && c.withoutSetter || a;
            t.exports = function(t) {
                return i(u, t) && (l || "string" == typeof u[t]) || (l && i(c, t) ? u[t] = c[t] : u[t] = d("Symbol." + t)), u[t]
            }
        },
        68757: (t, e, n) => {
            "use strict";
            var r = n(82109),
                o = n(84488),
                i = n(47850),
                a = n(67066),
                l = n(10647),
                s = n(5112),
                u = n(31913),
                c = s("replace"),
                d = RegExp.prototype,
                p = Math.max,
                v = function(t, e, n) {
                    return n > t.length ? -1 : "" === e ? n : t.indexOf(e, n)
                };
            r({
                target: "String",
                proto: !0
            }, {
                replaceAll: function(t, e) {
                    var n, r, s, f, h, y, g, m, w = o(this),
                        x = 0,
                        E = 0,
                        b = "";
                    if (null != t) {
                        if ((n = i(t)) && !~String(o("flags" in d ? t.flags : a.call(t))).indexOf("g")) throw TypeError("`.replaceAll` does not allow non-global regexes");
                        if (void 0 !== (r = t[c])) return r.call(t, w, e);
                        if (u && n) return String(w).replace(t, e)
                    }
                    for (s = String(w), f = String(t), (h = "function" == typeof e) || (e = String(e)), y = f.length, g = p(1, y), x = v(s, f, 0); - 1 !== x;) m = h ? String(e(f, x, s)) : l(f, s, x, [], void 0, e), b += s.slice(E, x) + m, E = x + y, x = v(s, f, x + g);
                    return E < s.length && (b += s.slice(E)), b
                }
            })
        },
        27207: (t, e, n) => {
            n(68757)
        },
        56623: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.link ? n("a", {
                    staticClass: "artifact-link",
                    class: {
                        "no-content": !t.hasProvidedContent
                    },
                    attrs: {
                        target: "_blank",
                        href: t.link,
                        "aria-label": t.$t("POST_GAME.GALLERY_LINK")
                    },
                    on: {
                        click: t.onLinkClick
                    }
                }, [t._t("default")], 2) : t._e()
            };
            r._withStripped = !0;
            var o = n(2934),
                i = n.n(o),
                a = n(81127),
                l = n(65853);
            const s = i().extend({
                props: {
                    artifact: Object
                },
                i18n: {
                    messages: l.s
                },
                computed: {
                    link() {
                        if (this.artifact) return `${this.artifact.rootId.includes("test")?"http":"https"}://${this.artifact.rootId.includes("test")?"games-test.jackbox.tv":"games.jackbox.tv"}/artifact/${this.artifact.categoryId}/${this.artifact.artifactId}/`
                    },
                    hasProvidedContent() {
                        return void 0 !== this.$slots.default
                    }
                },
                mounted() {
                    this.$analytics.trackEvent({
                        category: "PostGame",
                        action: "galleryShown"
                    })
                },
                methods: {
                    onLinkClick() {
                        this.$analytics.trackEvent({
                            category: "PostGame",
                            action: "galleryClicked"
                        }), a.Q.setAsViewed(0)
                    }
                }
            });
            var u = (0, n(51900).Z)(s, r, [], !1, null, null, null);
            u.options.__file = "src/apps/vue/components/GalleryLink.vue";
            const c = u.exports
        },
        6305: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => s
            });
            var r = function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("input", {
                    ref: "input",
                    attrs: {
                        enterkeyhint: "done"
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: t.onInput
                    }
                })
            };
            r._withStripped = !0;
            var o = n(2934),
                i = n.n(o);
            const a = i().extend({
                props: {
                    value: String
                },
                watch: {
                    value(t, e) {
                        t !== e && (this.$refs.input.value = t)
                    }
                },
                methods: {
                    onInput(t) {
                        return e = this, n = void 0, o = function*() {
                            const e = t.target;
                            if (!(null == e ? void 0 : e.value)) return;
                            const n = -1 === e.maxLength ? Number.MAX_SAFE_INTEGER : e.maxLength;
                            e.value.length > n ? e.value = e.value.substring(0, n) : (this.$emit("input", e.value), yield i().nextTick(), e.value !== this.value && (e.value = this.value))
                        }, new((r = void 0) || (r = Promise))((function(t, i) {
                            function a(t) {
                                try {
                                    s(o.next(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function l(t) {
                                try {
                                    s(o.throw(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function s(e) {
                                var n;
                                e.done ? t(e.value) : (n = e.value, n instanceof r ? n : new r((function(t) {
                                    t(n)
                                }))).then(a, l)
                            }
                            s((o = o.apply(e, n || [])).next())
                        }));
                        var e, n, r, o
                    }
                }
            });
            var l = (0, n(51900).Z)(a, r, [], !1, null, null, null);
            l.options.__file = "src/apps/vue/components/Input.vue";
            const s = l.exports
        },
        38266: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var r = function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("textarea", {
                    ref: "textarea",
                    attrs: {
                        enterkeyhint: "done"
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: t.onInput,
                        keydown: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onKeydownEnter.apply(null, arguments)
                        }
                    }
                })
            };
            r._withStripped = !0;
            var o = n(2934),
                i = n.n(o),
                a = n(3682),
                l = (n(38534), function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function a(t) {
                            try {
                                s(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function l(t) {
                            try {
                                s(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(a, l)
                        }
                        s((r = r.apply(t, e || [])).next())
                    }))
                });
            const s = i().extend({
                props: {
                    autosize: Boolean,
                    value: String
                },
                watch: {
                    value(t, e) {
                        t !== e && (this.$refs.textarea.value = t)
                    }
                },
                mounted() {
                    this.autosize && (0, a.Z)(this.$refs.textarea)
                },
                methods: {
                    onInput(t) {
                        return l(this, void 0, void 0, (function*() {
                            const e = t.target;
                            if (null == !(null == e ? void 0 : e.value)) return;
                            e.value = e.value.replaceAll("\n", "");
                            const n = -1 === e.maxLength ? Number.MAX_SAFE_INTEGER : e.maxLength;
                            e.value.length > n ? e.value = e.value.substring(0, n) : (this.$emit("input", e.value), yield i().nextTick(), e.value !== this.value && (e.value = this.value))
                        }))
                    },
                    onKeydownEnter(t) {
                        this.$emit("keydown", t)
                    }
                }
            });
            var u = (0, n(51900).Z)(s, r, [], !1, null, null, null);
            u.options.__file = "src/apps/vue/components/TextArea.vue";
            const c = u.exports
        }
    }
]);
//# sourceMappingURL=sourcemaps/1512.15386e81dfd927439e3e.js.map