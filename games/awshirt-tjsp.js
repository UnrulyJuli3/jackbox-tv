(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/awshirt-tjsp"], {
        16479: (e, t, a) => {
            var s;
            ! function() {
                "use strict";

                function i(e, t, a) {
                    var s = t.x,
                        i = t.y,
                        r = a.x - s,
                        n = a.y - i;
                    if (0 !== r || 0 !== n) {
                        var o = ((e.x - s) * r + (e.y - i) * n) / (r * r + n * n);
                        o > 1 ? (s = a.x, i = a.y) : o > 0 && (s += r * o, i += n * o)
                    }
                    return (r = e.x - s) * r + (n = e.y - i) * n
                }

                function r(e, t, a, s, n) {
                    for (var o, l = s, c = t + 1; c < a; c++) {
                        var u = i(e[c], e[t], e[a]);
                        u > l && (o = c, l = u)
                    }
                    l > s && (o - t > 1 && r(e, t, o, s, n), n.push(e[o]), a - o > 1 && r(e, o, a, s, n))
                }

                function n(e, t) {
                    var a = e.length - 1,
                        s = [e[0]];
                    return r(e, 0, a, t, s), s.push(e[a]), s
                }

                function o(e, t, a) {
                    if (e.length <= 2) return e;
                    var s = void 0 !== t ? t * t : 1;
                    return n(e = a ? e : function(e, t) {
                        for (var a, s, i, r, n, o = e[0], l = [o], c = 1, u = e.length; c < u; c++) i = o, void 0, void 0, (r = (s = a = e[c]).x - i.x) * r + (n = s.y - i.y) * n > t && (l.push(a), o = a);
                        return o !== a && l.push(a), l
                    }(e, s), s)
                }
                void 0 === (s = function() {
                    return o
                }.call(t, a, t, e)) || (e.exports = s)
            }()
        },
        6305: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => l
            });
            var s = function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("input", {
                    ref: "input",
                    attrs: {
                        enterkeyhint: "done"
                    },
                    domProps: {
                        value: e.value
                    },
                    on: {
                        input: e.onInput
                    }
                })
            };
            s._withStripped = !0;
            var i = a(2934),
                r = a.n(i);
            const n = r().extend({
                props: {
                    value: String
                },
                watch: {
                    value(e, t) {
                        e !== t && (this.$refs.input.value = e)
                    }
                },
                methods: {
                    onInput(e) {
                        return t = this, a = void 0, i = function*() {
                            const t = e.target;
                            if (!(null == t ? void 0 : t.value)) return;
                            const a = -1 === t.maxLength ? Number.MAX_SAFE_INTEGER : t.maxLength;
                            t.value.length > a ? t.value = t.value.substring(0, a) : (this.$emit("input", t.value), yield r().nextTick(), t.value !== this.value && (t.value = this.value))
                        }, new((s = void 0) || (s = Promise))((function(e, r) {
                            function n(e) {
                                try {
                                    l(i.next(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function o(e) {
                                try {
                                    l(i.throw(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function l(t) {
                                var a;
                                t.done ? e(t.value) : (a = t.value, a instanceof s ? a : new s((function(e) {
                                    e(a)
                                }))).then(n, o)
                            }
                            l((i = i.apply(t, a || [])).next())
                        }));
                        var t, a, s, i
                    }
                }
            });
            var o = (0, a(51900).Z)(n, s, [], !1, null, null, null);
            o.options.__file = "src/apps/vue/components/Input.vue";
            const l = o.exports
        },
        12659: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => oe
            });
            var s = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "tko"
                }, [a("div", {
                    staticClass: "constrain"
                }, [e.info && e.info.avatar && e.icons[e.info.avatar] && e.shouldShowAvatar ? [a("img", {
                    staticClass: "avatar",
                    attrs: {
                        alt: e.icons[e.info.avatar].alt,
                        src: e.icons[e.info.avatar].src
                    }
                })] : e._e(), e._v(" "), a("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [e.player ? ["assembling" === e.player.kind ? a("Assembling", {
                    attrs: {
                        player: e.player
                    }
                }) : "drawing" === e.player.kind ? a("Drawing", {
                    attrs: {
                        player: e.player
                    }
                }) : "lobby" === e.player.kind ? a("Lobby", {
                    attrs: {
                        info: e.info,
                        player: e.player
                    }
                }) : "postGame" === e.player.kind ? a("PostGame", {
                    attrs: {
                        artifact: e.artifact,
                        player: e.player
                    }
                }) : "voting" === e.player.kind ? a("Voting", {
                    attrs: {
                        player: e.player
                    }
                }) : "waiting" === e.player.kind ? a("Waiting", {
                    attrs: {
                        avatar: e.info && e.info.avatar,
                        player: e.player
                    }
                }) : "writing" === e.player.kind ? a("Writing", {
                    attrs: {
                        player: e.player
                    }
                }) : e._e()] : e.audience ? ["suggesting" === e.audience.kind ? a("Suggesting", {
                    attrs: {
                        audience: e.audience
                    }
                }) : "voting" === e.audience.kind ? a("Voting", {
                    attrs: {
                        player: e.audience
                    }
                }) : "waiting" === e.audience.kind ? a("Waiting", {
                    attrs: {
                        player: e.audience
                    }
                }) : e._e()] : e._e()], 2)], 2)])
            };
            s._withStripped = !0;
            var i = a(2934),
                r = a.n(i),
                n = a(65853),
                o = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "assembling"
                    }, [a("form", {
                        on: {
                            submit: function(t) {
                                return t.preventDefault(), e.onSubmit.apply(null, arguments)
                            }
                        }
                    }, [a("div", {
                        staticClass: "instruction"
                    }, [a("p", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "ASSEMBLING.INSTRUCTION.DRAWING",
                            expression: "'ASSEMBLING.INSTRUCTION.DRAWING'"
                        }]
                    }), e._v(" "), a("div", {
                        staticClass: "dots"
                    }, e._l(e.player.drawings, (function(t, s) {
                        return a("div", {
                            key: s,
                            staticClass: "dot",
                            class: {
                                active: e.drawingIndex === s
                            }
                        })
                    })), 0)]), e._v(" "), a("div", {
                        staticClass: "assembly"
                    }, [a("div", {
                        staticClass: "shirt"
                    }, [a("VueSlickCarousel", e._b({
                        staticClass: "drawings",
                        on: {
                            beforeChange: function(t, a) {
                                return e.onChangeDrawing(a)
                            }
                        }
                    }, "VueSlickCarousel", e.settings, !1), e._l(e.player.drawings, (function(t, s) {
                        return a("img", {
                            key: "drawing-" + s,
                            staticClass: "drawing",
                            attrs: {
                                alt: "drawing",
                                draggable: "false",
                                src: e.getImage(t.doodle)
                            }
                        })
                    })), 0), e._v(" "), a("Shirt", {
                        attrs: {
                            background: e.background
                        }
                    }), e._v(" "), a("VueSlickCarousel", e._b({
                        staticClass: "slogans",
                        on: {
                            beforeChange: function(t, a) {
                                return e.onChangeSlogan(a)
                            }
                        }
                    }, "VueSlickCarousel", e.settings, !1), e._l(e.player.slogans, (function(t, s) {
                        return a("div", {
                            key: "slogan-" + s,
                            staticClass: "slogan",
                            domProps: {
                                textContent: e._s(t)
                            }
                        })
                    })), 0)], 1)]), e._v(" "), a("div", {
                        staticClass: "instruction"
                    }, [a("div", {
                        staticClass: "dots"
                    }, e._l(e.player.slogans, (function(t, s) {
                        return a("div", {
                            key: s,
                            staticClass: "dot",
                            class: {
                                active: e.sloganIndex === s
                            }
                        })
                    })), 0), e._v(" "), a("p", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "ASSEMBLING.INSTRUCTION.SLOGAN",
                            expression: "'ASSEMBLING.INSTRUCTION.SLOGAN'"
                        }]
                    })]), e._v(" "), a("button", {
                        staticClass: "submit",
                        attrs: {
                            type: "submit"
                        }
                    })])])
                };
            o._withStripped = !0;
            var l = a(72529),
                c = a.n(l),
                u = a(20854),
                d = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            reserveAspectRatio: "xMidYMin slice",
                            viewBox: "0 0 823.47 588.96"
                        }
                    }, [a("path", {
                        attrs: {
                            fill: e.background || "#333",
                            "fill-rule": "evenodd",
                            d: "M767.7 91.49c9.1 6.14 28.87 20.89 51 34-16.58 26-29.13 39.48-33.4 44.05s-25.84 71.28-33.16 78.6-14.52 21.26-22.15 21.56-57.29-24.21-57.29-24.21l5 69.36c3.86 53.57 5.49 91.14 6.91 112.7s.27 50.88.32 87.8c.08 14.94.94 28 .74 40.14.23 13.89-24.72 13.36-42.71 14.27s-90.4-1.21-114.64 0q-118.26 5.88-164.46 9c-30.74 2-143.42-2.19-143.42-2.19l-78.74-5.08s5.68-213.16-5-313c-4.37 2-15 9.81-26 15-26.61-24.79-59.55-58.15-86.93-100.72A218.18 218.18 0 0 0 4.7 147.49l21-18c9.61-7.47 17.21-14 23-18s48-41.43 52-46 29.67-35.78 47-45c7.63-3.94 15.32-7.93 24-10 14.68-3.61 43.81-2.7 40-3h80s59.46 3.84 50 3c18.66-.37 43.18 6.3 74.21 7.48 49 1.87 65.56 1.82 73.79 1.52s76.67-.93 149-3c4.14.77 8.54 1.25 13 3 6.29 2.56 16.2 6.4 25 12 5.23 3.37 20 12 46 29 0 0 15.2 11 45 31Z"
                        }
                    }), e._v(" "), a("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            d: "M698.7 40.02q-13.83-8.89-24.6-14.93a98.49 98.49 0 0 0-22.23-9.6 50.49 50.49 0 0 0-10.35-1.77l-.19-1.23-101.66.06q-26.06-.24-42.69-.61c-1.78-.69-2.7-1-2.74-1a36.44 36.44 0 0 0-7.54-1.37q-9.81-1-17-1-6.33 0-17.05.3-12.74.42-17 .49-1.89.06-3.6.06-17.89-.67-42.81-1.71-71.37-2.79-83.62-5l-2.56-.37a5.37 5.37 0 0 0-3.53-1.46c-12.79-.77-83.43-1-91.91-.73a157.84 157.84 0 0 0-31.61 3.78q-15.65 3.47-26.43 10.78a85.23 85.23 0 0 0-11.09 9.14q-8.34 7.67-10.71 9.74a107.26 107.26 0 0 0-10.78 10q-6.82 7.13-10.3 10.6-9.44 9.62-21.43 20.59-18.09 16.62-48.9 41.11-15.84 12.72-27 21.74a64.79 64.79 0 0 0-5.42 4.2 8.65 8.65 0 0 0-2.38 3.35q-2 1.22-1.4 4.2l.25.85a14.48 14.48 0 0 0 .48 1.83v.37a1.88 1.88 0 0 0 .19.61 6 6 0 0 0 .6 1.7q2.81 16 18 32.28 8.78 9.45 27.71 26 36.36 35 57.49 66.15 1.65 2.49 3.9 1.28a7.7 7.7 0 0 0 4.75-.92q.3-.18 5.73-4.32 2-1.53 6.63-4.63a37.2 37.2 0 0 0 4.88-3.78q1.28 8.89 2.61 19.43 4.94 42.59 6 96.17t-.27 127.09q-.61 36.78-1.34 62.85l.61-.24a6.48 6.48 0 0 0 3.47 5 31.12 31.12 0 0 0 9.44 3.39q1.46.3 9.93 1.53 10.77 1.57 20 2.62 20.77 2.25 40 3.29c23.39 1.18 109.7 1.4 138.93.67q21-.67 40.07-2.07 7.19-.56 19.61-2 13.83-1.53 19.49-2 38.07-3.29 79.48-5.06c10-.53 85.11-1.3 105.25-2.31l6.45-.25 8.29.67q36.72 2.75 42.51.43a8.45 8.45 0 0 0 3.9-3.11 3.87 3.87 0 0 0 2.67-1.88 5.25 5.25 0 0 0 .61-3.6 15.77 15.77 0 0 0-.42-1.64q.6-28.32.79-65.48.36-79.73-2.44-130-3.59-66.94-7.37-118.35l2.68.67a149.8 149.8 0 0 1 14.86 7q4.7 2.49 14 7.67l7.74 4.14a39.28 39.28 0 0 0 3.59 1.65 1.09 1.09 0 0 1 .36.06 3.08 3.08 0 0 0 .8.85 9.14 9.14 0 0 0 2 1.22c.89 2.48 2.75 3.61 5.6 3.41a6.46 6.46 0 0 0 4.56-2.07q4.2-.68 8.83-4.87 3-2.62 8-8.1 20.77-18.94 29.36-40.38 4.44-11.22 6.21-27.23c.36-3.61.65-6 .85-7.13a30.47 30.47 0 0 1 1.83-7 75.23 75.23 0 0 1 5.72-11q7.3-12 14-21.44c.89-1.22 2.23-3.08 4-5.6q2.31-3.4 3.78-5.66 2.37-4 2.86-5.06a12 12 0 0 0 .61-1.64 17.14 17.14 0 0 0 1.94-3.6 2.65 2.65 0 0 0-.42-2.8 2.39 2.39 0 0 0-1.1-1 4.91 4.91 0 0 1-.24-.74 13.42 13.42 0 0 0-4.57-5.23q-3.9-2.5-5.85-3.84l-13.14-8.74q-20-13.52-24.36-16.38Q748.4 72.29 723 55.67q-23.5-15.18-24.3-15.65m-4 38.67a5 5 0 0 0-4.35-1.2 5.27 5.27 0 0 0-3.9 2.62 6.72 6.72 0 0 0-.66 4.51 3.28 3.28 0 0 1 .18.61 5.45 5.45 0 0 0-.3 2.5l.24 3.9q.3 6.82-.06 15.16-.12 3.24-1.22 19.07-1.15 17-3.71 37.33-2.13 16.81-4.69 33.63-1.47-14-3-42.15-.36-4.64-1.52-22.66-1-13.95-1.28-22.6l-.67-21.38q-.12-7.42-.24-11.27a52.81 52.81 0 0 0-1.16-11.14c-.49-1.91-1.6-2.84-3.35-2.8s-2.78 1.09-3.1 3a54.3 54.3 0 0 0-.61 11l.36 11.2.55 22.36q.24 8.4.06 22.78-.24 16.56-.18 22.72.18 26 2 44.34.66 6.45 1.58 12.42-.24 9.21-.06 12.67a44.77 44.77 0 0 0 .55 6.22q.12 4.44.79 10a3.53 3.53 0 0 0 .43 1.59l5.11 72.72q5.79 80.34 7.92 112.68t2.29 87.86q.12 22.41-.18 40.56l-49.11 9.55-3.83-.12c-14.94-.65-88.34-.81-100.2-.49q-33.61.86-78.5 2.87-13.83.6-39.95.79-27.41.06-40.19.55-44.1 1.64-78.93.73c-16.16-.37-90.76-1.06-103.79-2.07q-11.94-.91-21.8-2.07-7.8-1.05-11.75-1.4a70 70 0 0 0-5.12-.3q.61-21.87.79-51.17.44-64.8-2.37-110.85t-3.9-151.47q-.3-29.73-.37-56.53l.12-2.07q1.35-16.26 1.59-25.15.54-16.45.85-24.61.42-14.73.18-24.91-.42-10.17-1.52-22.78-.61-7.61-.73-11.45a53.1 53.1 0 0 1 1.21-11.52 7.13 7.13 0 0 0-.79-5.54 6.92 6.92 0 0 0-3.71-3.34 6 6 0 0 0-4.63-.18 5.7 5.7 0 0 0-3.11 4.08q-2.43 9.38-1.83 22.41.3 7.56 1.65 22.78.48 10.73.67 24.85.12 4.69.18 24.85c0 1.1.08 2.24.12 3.41a367.64 367.64 0 0 0-2.43-11.51 197.57 197.57 0 0 0-6.21-21.62 100.36 100.36 0 0 1-4.57-20.4c-.29-2.27-.49-5.89-.61-10.84a74.69 74.69 0 0 0-.49-10.78 1.9 1.9 0 0 0-1.83-1.89 2.37 2.37 0 0 0-2.25 1.34q-3.52 7.13-3 18.76.18 5.55 2.19 19.43.36 2.63 1.22 10.29.6 6.46 1.34 10.24t1.34 7.61a146 146 0 0 0-13.34-20l-11.8-15.63a157.15 157.15 0 0 1-10.53-16.57c-.65-1.26-1.48-1.58-2.5-1a1.8 1.8 0 0 0-1.2 2.24 2.54 2.54 0 0 0 .16.38q4.33 11 15.23 32.76 10.71 21.2 15.16 32.83 14.19 36.74 16.08 69.38a5.32 5.32 0 0 0-.79.18c-.43 0-.85 0-1.28-.06a.82.82 0 0 1-.43-.12 106.3 106.3 0 0 0-5.84-10.42q-4.26-7.12-19.19-27.47l-21.25-29.21q-3.7-5.17-5.66-7.74-3.28-4.32-6-7.37-1.89-2.19-6.58-6.94-4.2-4.38-6.39-7a1 1 0 0 0-1.38-.29.85.85 0 0 0-.2.17 1.13 1.13 0 0 0-.36 1.56.76.76 0 0 0 .11.14q1.77 2.92 4.69 8.59 3 5.91 4.57 8.59 2.43 4.14 9 13.46 6.95 9.87 21 29.54a327.73 327.73 0 0 1 18 27.65 183.37 183.37 0 0 1 8.83 17.48c.12.81.44 2.23 1 4.27a18.56 18.56 0 0 1 .73 4.62q.12 5.61-5 4.27a22.27 22.27 0 0 1-7.55-4 3.15 3.15 0 0 0-1.4-.73q-7.8-10.84-19.43-24.55-21.5-25.28-28.87-36.18-7.72-12-11.81-17.9a160.84 160.84 0 0 0-13-16.88 92.24 92.24 0 0 0-14.68-13.52 28 28 0 0 0-6.94-3.71 21.75 21.75 0 0 1 2.86-2.38c1.26-1 3.06-2.27 5.42-3.9l11.45-9.13q14.36-11.23 21.47-16.97 25.4-20.2 41.77-36.72 4.14-4 9-9.56 2.13-2.49 8.59-9.87 3.41-3.94 9.19-10 7.5-8.1 9.26-9.92a77.56 77.56 0 0 1 20.95-15.78 107.58 107.58 0 0 1 24.48-9q13.89-3.42 32-2.8c1.7 0 3.84.16 6.4.36l86.25 2.32.06.06 31.36 2.8 17.3 1.52q2.51.79 6.76 1.83 3.9 1.16 9.2 3.05 3 1 9.14 3.16a167.76 167.76 0 0 0 37.45 8.71 191.37 191.37 0 0 0 39.1.13 146.36 146.36 0 0 0 37.88-8.9 6.54 6.54 0 0 0 4.08-4.26.16.16 0 0 0 .06-.12l16.31-.38a50.21 50.21 0 0 1-3 4.51q-7.8 9.93-25.09 17.48T430 49.89q-10-.43-20.16-1.58l-8.28-1.1q-1.65 5.66 8.22 8.16 15 4 53.41-1.83 36.9-5.55 51.94-21 5.79-6 7.12-11.39c17.54-.36 97-.85 118.35-1.46a71.8 71.8 0 0 1 12.91 3.8 148.26 148.26 0 0 1 22.66 12.2q7.85 5.05 46.83 30.58 23.51 15.41 47.26 31.36 20.34 13.71 24.36 16.51l11.14 8q1.83 1.34 5.6 4.26c.69.41 1.32.75 1.89 1-.57.6-1.56 1.64-3 3.1a.76.76 0 0 0-.31.43c-1.34 1.34-3.24 3.35-5.72 6s-6.93 8-13.34 15.84a151.16 151.16 0 0 0-22.45 37.72q-5.24 13.82-8 20.58a99.52 99.52 0 0 1-10.23 19.56 98.94 98.94 0 0 1-6.7 8q-4.87 4.94-7.31 7.37-6.71 7.06-8.16 9a22.23 22.23 0 0 0-4.75 9.38c-.74-.37-1.2-.61-1.4-.73q-4.14-2.07-7.49-4.08l-6.34-4-1.76-1 .18-8.1a66.83 66.83 0 0 1 .73-8.83 68.64 68.64 0 0 0 .85-8.59 17.4 17.4 0 0 0-.06-2.5q3.48-9.56 12.55-33.25 6.88-18 14.92-34.48 2.87-5.53 8.95-16.69a82.79 82.79 0 0 0 7.19-17.48 2.33 2.33 0 0 0-.79-2.74 2.26 2.26 0 0 0-2.8.13 55.06 55.06 0 0 0-12.12 12.54q-2.74 3.72-9.75 14.92-10 16-18.08 31.55a280.31 280.31 0 0 0-14.38 33.32c-.28 1-.57 1.87-.85 2.68 1-5.2 1.79-9.67 2.43-13.4q4.1-24.18 5.6-39.1a297.08 297.08 0 0 0 1.53-38.43q-.18-9-1.53-20.28-.66-4.69-2.92-20.16a6.72 6.72 0 0 0-1-2.75l-.06-.12a6.78 6.78 0 0 0-2.18-4.12Z"
                        }
                    })])
                };
            d._withStripped = !0;
            const p = r().extend({
                props: {
                    background: String
                }
            });
            var h = a(51900),
                A = (0, h.Z)(p, d, [], !1, null, null, null);
            A.options.__file = "src/games/tjsp/awshirt/views/Shirt.vue";
            const v = A.exports,
                g = {
                    en: {
                        SUGGESTION: "Suggestion",
                        ALT: {
                            AVATARS: {
                                BAKU: "baku avatar",
                                BUN: "bunny avatar",
                                BLUE_DEMON: "blue demon avatar",
                                CAT: "cat avatar",
                                CATFISH: "catfish avatar",
                                CROW: "crow avatar",
                                DOG: "dog avatar",
                                FIRE: "fire avatar",
                                FOX: "fox avatar",
                                KAPPA: "kappa avatar",
                                HAIR: "hair avatar",
                                MONKEY: "monkey avatar",
                                RACCOON: "raccoon avatar",
                                RED_DEMON: "red demon avatar",
                                SNAKE: "snake avatar",
                                UMBRELLA: "umbrella avatar"
                            },
                            LOGO: "the Tee K.O. logo"
                        },
                        INTROS: {
                            BAKU: "Winning the tournament is my life-long dream!",
                            BUN: "I’ve never made t-shirts before, but I’m usually pretty lucky.",
                            BLUE_DEMON: "My shirt will put my twin’s efforts to shame!",
                            CAT: "My mother is very ill. I must win the tournament to pay for her surgery.",
                            CATFISH: "I’m competing to raise Fin Rot awareness!",
                            CROW: "I did not mean to enter this tournament! It was a clerical error!",
                            DOG: "WOOF! WOOF WOOF!",
                            FIRE: "I’m just happy to get out of the house!",
                            FOX: "After I win the tournament, I can take a year off and finish my sitcom pilot!",
                            KAPPA: "If I win the tournament, I will get my own reality show!",
                            HAIR: "I HUNGER FOR VICTORY!",
                            MONKEY: "If I don’t win the tournament, I guess I’ll go paint houses for my uncle.",
                            RACCOON: "I must win the tournament or the evil banker will repossess the orphanage!",
                            RED_DEMON: "I don’t care about winning, as long as I beat my twin!",
                            SNAKE: "I do not have arms, but my love of t-shirts is strong. I will win the tournament!",
                            UMBRELLA: "My dream is to open a sandal shop. I would also like to win this tournament!"
                        },
                        TAUNTS: {
                            BAKU: "All my dreams are coming true!",
                            BUN: "I never lose!",
                            BLUE_DEMON: "Sorry, but my skills are superior!",
                            CAT: "I knew I could do it!",
                            CATFISH: "I win! Please donate to cure Fin Rot today!",
                            CROW: "What is happening? Did I win?",
                            DOG: "BARK! WOOF! BARK BARK!",
                            FIRE: "We’re having so much fun, guys!",
                            FOX: "Hollywood, here I come!",
                            KAPPA: "Now I will be famous!",
                            HAIR: "MY HUNGER HAS BEEN SATISFIED… FOR NOW…",
                            MONKEY: "I deserve this!",
                            RACCOON: "I put all of my heart into winning!",
                            RED_DEMON: "I was born to be the best!",
                            SNAKE: "I am honored to accept this victory.",
                            UMBRELLA: "What an unexpected surprise!"
                        },
                        LOBBY: {
                            BUTTON_FIGHT: "Fight",
                            QUOTE_CHANGE: "Change",
                            QUOTE_LABEL: "Victory Quote",
                            QUOTE_SET: "Set"
                        },
                        ASSEMBLING: {
                            INSTRUCTION: {
                                DRAWING: "Choose a drawing",
                                SLOGAN: "Choose a slogan"
                            }
                        },
                        SUGGESTING: {
                            INSTRUCTION: {
                                DRAWING: "What would you like to see drawn?",
                                WRITING: "What should the players write?"
                            }
                        },
                        VOTING: {
                            INSTRUCTION: "Pick your favorite!",
                            THANKS: "Thanks for voting! Your choice:"
                        },
                        WAITING: {
                            INSTRUCTION: "Waiting for other players to finish!"
                        },
                        WRITING: {
                            INSTRUCTION: "Write something funny, or clever, or anything at all!"
                        }
                    },
                    fr: {
                        SUGGESTION: "Suggestion",
                        ALT: {
                            AVATARS: {
                                BAKU: "avatar de baku",
                                BUN: "avatar de lapin",
                                BLUE_DEMON: "avatar de démon bleu",
                                CAT: "avatar de chat",
                                CATFISH: "avatar de poisson-chat",
                                CROW: "avatar de corbeau",
                                DOG: "avatar de chien",
                                FIRE: "avatar de feu",
                                FOX: "avatar de renard",
                                KAPPA: "avatar de kappa",
                                HAIR: "avatar de cheveux",
                                MONKEY: "avatar de singe",
                                RACCOON: "avatar de raton laveur",
                                RED_DEMON: "avatar de démon rouge",
                                SNAKE: "avatar de serpent",
                                UMBRELLA: "avatar de parapluie"
                            },
                            LOGO: "le logo Tee K.O."
                        },
                        INTROS: {
                            BAKU: "Remporter le tournoi est le rêve de toute ma vie !",
                            BUN: "Je n'ai jamais fait de T-shirts, mais en général, j'ai de la chance.",
                            BLUE_DEMON: "Mon T-shirt fera la honte de mon jumeau !",
                            CAT: "Ma mère est très malade. Je dois gagner le tournoi pour payer son opération.",
                            CATFISH: "Je participe pour sensibiliser à la cause des ailerons pourris !",
                            CROW: "Je ne voulais pas prendre part au tournoi ! C'est une erreur administrative !",
                            DOG: "OUAH ! OUAH ! OUAH !",
                            FIRE: "C'est un tel plaisir de sortir de la maison !",
                            FOX: "Une fois le tournoi terminé, je prendrai une année de vacances pour terminer mon pilote de sitcom !",
                            KAPPA: "Si je gagne le tournoi, j'aurai ma propre émission de télé-réalité !",
                            HAIR: "J'AI FAIM DE VICTOIRE !",
                            MONKEY: "Si je ne remporte pas le tournoi, je devrai aller peindre des maisons pour mon oncle.",
                            RACCOON: "Je dois gagner ce tournoi ou le méchant banquier mettre la main sur l'orphelinat !",
                            RED_DEMON: "Je me fiche de gagner tant que je bats mon jumeau !",
                            SNAKE: "Je n'ai pas de bras, mais j'adore les T-shirts. Je vais remporter le tournoi !",
                            UMBRELLA: "Mon rêve est d'ouvrir un magasin de sandales. J'aimerais aussi gagner ce tournoi !"
                        },
                        TAUNTS: {
                            BAKU: "Tous mes rêves se réalisent !",
                            BUN: "Je ne perds jamais !",
                            BLUE_DEMON: "Pardon, mais j'ai un énorme talent !",
                            CAT: "Je savais que je pouvais réussir !",
                            CATFISH: "J'ai gagné ! Donnez dès aujourd'hui à la cause des ailerons pourris !",
                            CROW: "Qu'est-ce qui se passe ? J'ai gagné ?",
                            DOG: "OUAF ! WOUF ! OUAH OUAH !",
                            FIRE: "Si vous saviez à quel point on s'amuse !",
                            FOX: "Hollywood, me voilà !",
                            KAPPA: "Maintenant, je vais être célèbre !",
                            HAIR: "MA FAIM EST SATISFAITE... POUR L'INSTANT...",
                            MONKEY: "Je l'ai mérité !",
                            RACCOON: "J'y ai mis tout mon cœur pour gagner !",
                            RED_DEMON: "Dès ma naissance, mon destin était de gagner !",
                            SNAKE: "C'est un honneur pour moi d'accepter cette victoire.",
                            UMBRELLA: "Quelle surprise, je ne m'y attendais pas !"
                        },
                        LOBBY: {
                            BUTTON_FIGHT: "Combattre",
                            QUOTE_CHANGE: "Changer",
                            QUOTE_LABEL: "Citation de victoire",
                            QUOTE_SET: "Définir"
                        },
                        ASSEMBLING: {
                            INSTRUCTION: {
                                DRAWING: "Choix de dessin",
                                SLOGAN: "Chois de slogan"
                            }
                        },
                        SUGGESTING: {
                            INSTRUCTION: {
                                DRAWING: "Qu'aimeriez-vous voir dessiner ?",
                                WRITING: "Que devraient écrire les joueurs ?"
                            }
                        },
                        VOTING: {
                            INSTRUCTION: "Choisissez ce que vous préférez",
                            THANKS: "Merci d'avoir voté ! Votre choix :"
                        },
                        WAITING: {
                            INSTRUCTION: "En attente que les autres joueurs aient terminé !"
                        },
                        WRITING: {
                            INSTRUCTION: "Écrivez quel chose de drôle, d'intelligent, ce que vous voudrez !"
                        }
                    },
                    it: {
                        SUGGESTION: "Suggerimento",
                        ALT: {
                            AVATARS: {
                                BAKU: "avatar baku",
                                BUN: "avatar coniglietto",
                                BLUE_DEMON: "avatar demone blu",
                                CAT: "avatar gatto",
                                CATFISH: "avatar pesce gatto",
                                CROW: "avatar corvo",
                                DOG: "avatar cane",
                                FIRE: "avatar fuoco",
                                FOX: "avatar volpe",
                                KAPPA: "avatar kappa",
                                HAIR: "avatar capelli",
                                MONKEY: "avatar scimmia",
                                RACCOON: "avatar procione",
                                RED_DEMON: "avatar demone rosso",
                                SNAKE: "avatar serpente",
                                UMBRELLA: "avatar ombrello"
                            },
                            LOGO: "Il logo di Tee K.O."
                        },
                        INTROS: {
                            BAKU: "Vincere il torneo è il sogno della mia vita!",
                            BUN: "Non ho mai creato magliette, ma di solito ho fortuna.",
                            BLUE_DEMON: "Il mio gemello andrà a nascondersi per la vergogna!",
                            CAT: "Mia mamma è tanto malata. Devo vincere il torneo per pagarle l'operazione.",
                            CATFISH: "Gareggio per sensibilizzare il pubblico sul problema delle corrosione delle pinne!",
                            CROW: "Non volevo partecipare a questo torneo! È stato un errore burocratico!",
                            DOG: "BAU! BAU! BAU!",
                            FIRE: "A me basta essere fuori casa e sono felice!",
                            FOX: "Dopo aver vinto il torneo, potrò prendermi un anno sabbatico per finire di scrivere la puntata pilota della mia sitcom!",
                            KAPPA: "Se vinco il torneo, avrò un mio reality in TV!",
                            HAIR: "HO FAME DI VITTORIA!",
                            MONKEY: "Se non vinco il torneo, mi toccherà andare a verniciare case con mio zio.",
                            RACCOON: "Devo vincere il torneo o il banchiere cattivo si rimpossesserà dell'orfanotrofio!",
                            RED_DEMON: "Non m'interessa vincere, voglio solo battere il mio gemello!",
                            SNAKE: "Anche se non ho le braccia, amo molto le magliette. Vincerò il torneo!",
                            UMBRELLA: "Il mio sogno è aprire un negozio di sandali. Ah... e poi mi piacerebbe tanto vincere."
                        },
                        TAUNTS: {
                            BAKU: "Tutti i miei sogni si stanno realizzando!",
                            BUN: "Non perdo mai!",
                            BLUE_DEMON: "Spiacente, la mia abilità è superiore!",
                            CAT: "Lo sapevo che ce l'avrei fatta!",
                            CATFISH: "Ho vinto! Per favore, effettuate subito una donazione per combattere la corrosione delle pinne!",
                            CROW: "Che succede? Ho vinto io?",
                            DOG: "ARF! UOFF! BAU BAU!",
                            FIRE: "Ci stiamo proprio divertendo!",
                            FOX: "Hollywood, arrivo!",
                            KAPPA: "Diventerò una star!",
                            HAIR: "LA MIA FAME È STATA PLACATA... PER ORA...",
                            MONKEY: "Me lo merito!",
                            RACCOON: "Ce l'ho messa tutta per vincere!",
                            RED_DEMON: "Campioni si nasce!",
                            SNAKE: "È un onore accettare questa vittoria.",
                            UMBRELLA: "Che sorpresa inaspettata!"
                        },
                        LOBBY: {
                            BUTTON_FIGHT: "Combatti",
                            QUOTE_CHANGE: "Cambia",
                            QUOTE_LABEL: "Frase della vittoria",
                            QUOTE_SET: "Imposta"
                        },
                        ASSEMBLING: {
                            INSTRUCTION: {
                                DRAWING: "Scegli un disegno",
                                SLOGAN: "Scegli uno slogan"
                            }
                        },
                        SUGGESTING: {
                            INSTRUCTION: {
                                DRAWING: "Che cosa vorresti vedere disegnato?",
                                WRITING: "Che cosa vorresti che scrivano i giocatori?"
                            }
                        },
                        VOTING: {
                            INSTRUCTION: "Fai la tua scelta!",
                            THANKS: "Grazie per aver votato! La tua scelta:"
                        },
                        WAITING: {
                            INSTRUCTION: "Attendi che gli altri giocatori finiscano!"
                        },
                        WRITING: {
                            INSTRUCTION: "Scrivi qualcosa di divertente, intelligente o quello che vuoi!"
                        }
                    },
                    de: {
                        SUGGESTION: "Vorschlag",
                        ALT: {
                            AVATARS: {
                                BAKU: "Baku-Avatar",
                                BUN: "Häschen-Avatar",
                                BLUE_DEMON: "Blauer Dämonen-Avatar",
                                CAT: "Katzen-Avatar",
                                CATFISH: "Wels-Avatar",
                                CROW: "Krähen-Avatar",
                                DOG: "Hunde-Avatar",
                                FIRE: "Feuer-Avatar",
                                FOX: "Fuchs-Avatar",
                                KAPPA: "Kappa-Avatar",
                                HAIR: "Haar-Avatar",
                                MONKEY: "Affen-Avatar",
                                RACCOON: "Waschbär-Avatar",
                                RED_DEMON: "Roter Dämonen-Avatar",
                                SNAKE: "Schlangen-Avatar",
                                UMBRELLA: "Schirm-Avatar"
                            },
                            LOGO: "das „Tee K.O.”-Logo"
                        },
                        INTROS: {
                            BAKU: "Das Turnier zu gewinnen, ist mein Lebenstraum!",
                            BUN: "Ich hab noch nie vorher T-Shirts designt. Ich hab einfach Glück.",
                            BLUE_DEMON: "Mein Shirt wird das meines Zwillings übertrumpfen!",
                            CAT: "Meine Mutter ist sehr krank. Ich brauche das Preisgeld für ihre Operation.",
                            CATFISH: "Ich bin hier, um auf Flossenfäule aufmerksam zu machen!",
                            CROW: "Ich wollte gar nicht teilnehmen! Das war ein Fehler im Anmeldesystem!",
                            DOG: "WUFF! WUFF! WUFF!",
                            FIRE: "Ich bin einfach froh, mal vor die Tür zu kommen!",
                            FOX: "Nach dem Turnier kann ich ein Jahr freinehmen, um meinen Sitcom-Piloten zu schreiben!",
                            KAPPA: "Wenn ich das Turnier gewinne, bekomme ich eine Reality Show!",
                            HAIR: "MICH DÜRSTET NACH TRIUMPH!",
                            MONKEY: "Wenn ich nicht gewinne, muss ich in den Malereibetrieb meines Onkels einsteigen.",
                            RACCOON: "Ich muss das Turnier gewinnen, sonst verkauft der böse Bankier das Waisenhaus!",
                            RED_DEMON: "Das Turnier ist mir egal, solang ich meinen Zwilling besiege!",
                            SNAKE: "Ich habe keine Arme, aber eine Leidenschaft für T-Shirts. Ich gewinne dieses Turnier!",
                            UMBRELLA: "Ich möchte einen Sandalenladen eröffnen. Außerdem möchte ich das Turnier gewinnen!"
                        },
                        TAUNTS: {
                            BAKU: "Alle meine Träume werden wahr!",
                            BUN: "Ich verliere nie!",
                            BLUE_DEMON: "Sorry, aber ich bin der Bessere!",
                            CAT: "Ich wusste, ich schaffe es!",
                            CATFISH: "Gewonnen! Spendet für die Opfer von Flossenfäule!",
                            CROW: "Was ist los? Hab ich gewonnen?",
                            DOG: "WAU! WUFF! WAU! WAU!",
                            FIRE: "Das macht so viel Spaß, Leute!",
                            FOX: "Hollywood, ich komme!",
                            KAPPA: "Jetzt werde ich berühmt!",
                            HAIR: "MEIN DURST IST GESTILLT ... FÜRS ERSTE ...",
                            MONKEY: "Das steht mir zu!",
                            RACCOON: "Mein Herzblut steckt in diesem Sieg!",
                            RED_DEMON: "Ich wurde als der Beste geboren!",
                            SNAKE: "Es ehrt mich, diesen Sieg entgegenzunehmen.",
                            UMBRELLA: "Was für eine nette Überraschung!"
                        },
                        LOBBY: {
                            BUTTON_FIGHT: "Kampf",
                            QUOTE_CHANGE: "Ändern",
                            QUOTE_LABEL: "Siegesruf",
                            QUOTE_SET: "Festlegen"
                        },
                        ASSEMBLING: {
                            INSTRUCTION: {
                                DRAWING: "Wähle eine Zeichnung",
                                SLOGAN: "Wähle einen Slogan"
                            }
                        },
                        SUGGESTING: {
                            INSTRUCTION: {
                                DRAWING: "Was für eine Zeichnung willst du sehen?",
                                WRITING: "Was sollen die Spieler schreiben?"
                            }
                        },
                        VOTING: {
                            INSTRUCTION: "Wähle deinen Favoriten!",
                            THANKS: "Danke fürs Abstimmen! Deine Wahl:"
                        },
                        WAITING: {
                            INSTRUCTION: "Warte auf die anderen Spieler!"
                        },
                        WRITING: {
                            INSTRUCTION: "Schreibe etwas Lustiges, Cleveres oder irgendwas!"
                        }
                    },
                    es: {
                        SUGGESTION: "Sugerencia",
                        ALT: {
                            AVATARS: {
                                BAKU: "avatar de baku",
                                BUN: "avatar de conejito",
                                BLUE_DEMON: "avatar de demonio azul",
                                CAT: "avatar de gato",
                                CATFISH: "avatar de bagre",
                                CROW: "avatar de cuervo",
                                DOG: "avatar de perro",
                                FIRE: "avatar de fuego",
                                FOX: "avatar de zorro",
                                KAPPA: "avatar de kappa",
                                HAIR: "avatar de greñudo",
                                MONKEY: "avatar de mono",
                                RACCOON: "avatar de mapache",
                                RED_DEMON: "avatar de demonio rojo",
                                SNAKE: "avatar de serpiente",
                                UMBRELLA: "avatar de paraguas"
                            },
                            LOGO: "logo de Tee K.O"
                        },
                        INTROS: {
                            BAKU: "¡Ganar el torneo es el sueño de mi vida!",
                            BUN: "Nunca había hecho camisetas, pero suelo tener bastante suerte.",
                            BLUE_DEMON: "¡Mi camiseta hará pasar vergüenza a la de mi gemelo!",
                            CAT: "Mi madre está muy enferma Tengo que ganar el torneo para pagar su operación.",
                            CATFISH: "¡Compito para concienciar sobre la podredumbre de las aletas!",
                            CROW: "¡Yo no quería participar en el torneo! ¡Fue un error administrativo!",
                            DOG: "¡GUAU! ¡GUAU, GUAU!",
                            FIRE: "¡Yo, con salir de casa, ya soy feliz!",
                            FOX: "Tras ganar el torneo, ¡me tomaré un año sabático para terminar el episodio piloto de mi comedia!",
                            KAPPA: "Si gano el torneo, ¡crearé mi propio programa de telerrealidad!",
                            HAIR: "¡TENGO HAMBRE DE VICTORIA!",
                            MONKEY: "Si no gano el torneo, supongo que iré a pintar casas con mi tío.",
                            RACCOON: "¡Tengo que ganar el torneo para que el banquero malvado no embargue el orfanato!",
                            RED_DEMON: "Me da igual ganar o perder, ¡yo solo quiero darle una paliza a mi gemelo!",
                            SNAKE: "No tengo brazos, pero me encantan las camisetas. ¡Ganaré el torneo!",
                            UMBRELLA: "Mi sueño es abrir una tienda de sandalias. ¡Y también me gustaría ganar el torneo!"
                        },
                        TAUNTS: {
                            BAKU: "¡Estoy cumpliendo todos mis sueños!",
                            BUN: "¡Yo nunca pierdo!",
                            BLUE_DEMON: "Lo siento, ¡pero mi destreza es superior!",
                            CAT: "¡Sabía que podía hacerlo!",
                            CATFISH: "¡Gané! ¡Donad ya para curar la podredumbre de las aletas!",
                            CROW: "¿Qué pasa? ¿He ganado?",
                            DOG: "¡GRR! ¡GUAU! ¡GRR, GRR!",
                            FIRE: "¡Esto ha sido superdivertido!",
                            FOX: "¡Hollywood, allá voy!",
                            KAPPA: "¡Voy a ser una celebridad!",
                            HAIR: "HE SACIADO MI APETITO... POR AHORA.",
                            MONKEY: "¡Me lo merezco!",
                            RACCOON: "¡Quería ganar con todo mi corazón!",
                            RED_DEMON: "¡Nací para ser el mejor!",
                            SNAKE: "Es todo un honor aceptar esta victoria.",
                            UMBRELLA: "¡Que sorpresa tan inesperada!"
                        },
                        LOBBY: {
                            BUTTON_FIGHT: "A luchar",
                            QUOTE_CHANGE: "Cambiar",
                            QUOTE_LABEL: "Frase de victoria",
                            QUOTE_SET: "Establecer"
                        },
                        ASSEMBLING: {
                            INSTRUCTION: {
                                DRAWING: "Escoge un dibujo",
                                SLOGAN: "Escoge un eslogan"
                            }
                        },
                        SUGGESTING: {
                            INSTRUCTION: {
                                DRAWING: "¿Que dibujo te gustaría ver?",
                                WRITING: "¿Que quieres que escriban los jugadores?"
                            }
                        },
                        VOTING: {
                            INSTRUCTION: "¡Escoge tu favorito!",
                            THANKS: "¡Gracias por votar! Tu elección:"
                        },
                        WAITING: {
                            INSTRUCTION: "¡Esperando a que termine el resto de los jugadores!"
                        },
                        WRITING: {
                            INSTRUCTION: "Escribe algo divertido o ingenioso, ¡o lo que tú quieras!"
                        }
                    },
                    "es-XL": {
                        SUGGESTION: "Sugerencia",
                        ALT: {
                            AVATARS: {
                                BAKU: "avatar baku",
                                BUN: "avatar conejo",
                                BLUE_DEMON: "avatar demonio azul",
                                CAT: "avatar gato",
                                CATFISH: "avatar pez gato",
                                CROW: "avatar cuervo",
                                DOG: "avatar perro",
                                FIRE: "avatar fuego",
                                FOX: "avatar zorro",
                                KAPPA: "avatar kappa",
                                HAIR: "avatar cabello",
                                MONKEY: "avatar mono",
                                RACCOON: "avatar mapache",
                                RED_DEMON: "avatar demonio rojo",
                                SNAKE: "avatar serpiente",
                                UMBRELLA: "avatar paraguas"
                            },
                            LOGO: "el logotipo de Tee K.O."
                        },
                        INTROS: {
                            BAKU: "¡Ganar el torneo es el sueño de toda mi vida!",
                            BUN: "Nunca antes hice camisetas, pero suelo tener bastante suerte.",
                            BLUE_DEMON: "¡Mi camiseta avergonzará los esfuerzos de mi gemelo!",
                            CAT: "Mi madre está muy enferma. Debo ganar el torneo para pagar su cirugía.",
                            CATFISH: "¡Estoy compitiendo para concientizar sobre la putrefacción!",
                            CROW: "¡No quería participar en este torneo! ¡Fue un error administrativo!",
                            DOG: "¡GUAU! ¡GUAU, GUAU!",
                            FIRE: "¡Estoy feliz de salir de casa!",
                            FOX: "Después de ganar el torneo, podré tomarme un año libre y terminar el piloto de mi comedia para televisión.",
                            KAPPA: "¡Si gano el torneo, tendré mi propio reality show!",
                            HAIR: "¡TENGO HAMBRE DE VICTORIA!",
                            MONKEY: "Si no gano el torneo, supongo que iré a pintar casas para mi tío.",
                            RACCOON: "¡Debo ganar el torneo o el malvado banquero se quedará con el orfanato!",
                            RED_DEMON: "¡No me importa ganar, siempre y cuando le gane a mi gemelo!",
                            SNAKE: "No tengo brazos, pero mi amor por las camisetas es fuerte. ¡Ganaré el torneo!",
                            UMBRELLA: "Mi sueño es abrir una tienda de sandalias. ¡A mí también me gustaría ganar este torneo!"
                        },
                        TAUNTS: {
                            BAKU: "¡Todos mis sueños se están haciendo realidad!",
                            BUN: "¡Yo nunca pierdo!",
                            BLUE_DEMON: "¡Lo siento, pero mis habilidades son superiores!",
                            CAT: "¡Sabía que podía hacerlo!",
                            CATFISH: "¡Yo gano! ¡Por favor, done para resolver la putrefacción hoy mismo!",
                            CROW: "¿Qué está pasando? ¿Gané?",
                            DOG: "¡LADRAR! ¡GUAU! ¡LADRAR, LADRAR!",
                            FIRE: "¡Nos estamos divirtiendo mucho, chicos!",
                            FOX: "¡Hollywood, allá voy!",
                            KAPPA: "¡Ahora seré famoso!",
                            HAIR: "LOGRÉ SACIAR MI HAMBRE... POR AHORA...",
                            MONKEY: "¡Me lo merezco!",
                            RACCOON: "¡Puse todo mi corazón en ganar!",
                            RED_DEMON: "¡Nací para ser el mejor!",
                            SNAKE: "Es un honor aceptar esta victoria.",
                            UMBRELLA: "¡Qué sorpresa tan inesperada!"
                        },
                        LOBBY: {
                            BUTTON_FIGHT: "A luchar",
                            QUOTE_CHANGE: "Cambio",
                            QUOTE_LABEL: "Cita de la victoria",
                            QUOTE_SET: "Establecer"
                        },
                        ASSEMBLING: {
                            INSTRUCTION: {
                                DRAWING: "Elija un dibujo",
                                SLOGAN: "Elija un eslogan"
                            }
                        },
                        SUGGESTING: {
                            INSTRUCTION: {
                                DRAWING: "¿Qué te gustaría ver dibujado?",
                                WRITING: "¿Qué deben escribir los jugadores?"
                            }
                        },
                        VOTING: {
                            INSTRUCTION: "¡Elige tu favorito!",
                            THANKS: "¡Gracias por votar! Tu elección:"
                        },
                        WAITING: {
                            INSTRUCTION: "A la espera de que los demás jugadores terminen."
                        },
                        WRITING: {
                            INSTRUCTION: "Escribe algo divertido, o ingenioso, o cualquier cosa."
                        }
                    }
                };
            var m = function(e, t, a, s) {
                return new(a || (a = Promise))((function(i, r) {
                    function n(e) {
                        try {
                            l(s.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function o(e) {
                        try {
                            l(s.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                            e(t)
                        }))).then(n, o)
                    }
                    l((s = s.apply(e, t || [])).next())
                }))
            };
            const f = r().extend({
                components: {
                    Shirt: v,
                    VueSlickCarousel: c()
                },
                props: {
                    player: Object
                },
                i18n: {
                    messages: g
                },
                data: () => ({
                    drawingIndex: 0,
                    isSubmitting: !1,
                    settings: {
                        swipeToSlide: !0
                    },
                    sloganIndex: 0
                }),
                computed: {
                    background() {
                        return this.player.drawings[this.drawingIndex].background
                    }
                },
                methods: {
                    autoSubmit() {
                        return m(this, void 0, void 0, (function*() {
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    drawingIndex: this.drawingIndex,
                                    sloganIndex: this.sloganIndex
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    },
                    getImage: e => new u.J(document.createElement("canvas"), e).renderImage(),
                    onChangeDrawing(e) {
                        this.drawingIndex = e, this.autoSubmit()
                    },
                    onChangeSlogan(e) {
                        this.sloganIndex = e, this.autoSubmit()
                    },
                    onSubmit() {
                        return m(this, void 0, void 0, (function*() {
                            this.isSubmitting = !0;
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "submit",
                                    drawingIndex: this.drawingIndex,
                                    sloganIndex: this.sloganIndex
                                })
                            } catch (e) {
                                this.isSubmitting = !1, this.$handleEcastError(e)
                            }
                        }))
                    }
                }
            });
            var T = (0, h.Z)(f, o, [], !1, null, "0ecb8e78", null);
            T.options.__file = "src/games/tjsp/awshirt/views/Assembling.vue";
            const b = T.exports;
            var S = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "drawing"
                }, [a("div", {
                    attrs: {
                        id: "stage"
                    }
                }, [a("div", {
                    attrs: {
                        id: "tools"
                    }
                }, [a("div", {
                    attrs: {
                        id: "weights"
                    }
                }, [a("button", {
                    staticClass: "weight",
                    style: {
                        backgroundColor: e.backgroundColor
                    },
                    attrs: {
                        "aria-label": "weight",
                        name: "weights",
                        disabled: e.isSubmitting,
                        type: "radio"
                    },
                    on: {
                        click: e.onChangeWeight
                    }
                }, [a("div", {
                    staticClass: "circle",
                    style: {
                        width: e.weight + "px",
                        height: e.weight + "px",
                        backgroundColor: e.color,
                        borderRadius: "50%"
                    }
                })])]), e._v(" "), a("div", {
                    attrs: {
                        id: "colors"
                    }
                }, e._l(e.colors, (function(t, s) {
                    return a("input", {
                        key: "color-" + s,
                        staticClass: "color",
                        style: {
                            backgroundColor: t
                        },
                        attrs: {
                            "aria-label": "color " + t,
                            disabled: e.isSubmitting,
                            "data-color": t,
                            name: "colors",
                            type: "radio"
                        },
                        domProps: {
                            checked: t === e.color
                        },
                        on: {
                            change: function(a) {
                                return e.onChangeColor(t)
                            }
                        }
                    })
                })), 0)]), e._v(" "), a("div", {
                    attrs: {
                        id: "doodle"
                    }
                }, [a("BaseDoodle", {
                    style: {
                        backgroundColor: e.backgroundColor,
                        pointerEvents: e.isSubmitting ? "none" : ""
                    },
                    attrs: {
                        "canvas-options": {
                            color: e.color,
                            scale: e.scale,
                            weight: e.weight
                        },
                        player: e.player,
                        "hide-submit": "",
                        "hide-undo": ""
                    }
                })], 1), e._v(" "), a("div", {
                    attrs: {
                        id: "backgrounds"
                    }
                }, e._l(e.backgroundColors, (function(t, s) {
                    return a("input", {
                        key: "bg-" + s,
                        staticClass: "tab",
                        style: {
                            backgroundColor: t
                        },
                        attrs: {
                            "aria-label": "background color " + t,
                            disabled: e.isSubmitting,
                            name: "backgrounds",
                            type: "radio"
                        },
                        domProps: {
                            checked: t === e.backgroundColor
                        },
                        on: {
                            change: function(a) {
                                return e.onChangeBackgroundColor(t)
                            }
                        }
                    })
                })), 0), e._v(" "), a("div", {
                    attrs: {
                        id: "actions"
                    }
                }, [a("button", {
                    staticClass: "undo",
                    attrs: {
                        disabled: !e.canSubmit
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onUndo.apply(null, arguments)
                        }
                    }
                }, [a("svg", {
                    attrs: {
                        width: "28",
                        height: "28",
                        version: "1.0",
                        viewBox: "0 0 46 36"
                    }
                }, [a("path", {
                    attrs: {
                        d: "m6 7-6 6 6 7 7 7V17h25v11H7v8h39V8H13V4l-1-4-6 7z"
                    }
                })])]), e._v(" "), a("button", {
                    staticClass: "submit",
                    attrs: {
                        disabled: !e.canSubmit
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onSubmit.apply(null, arguments)
                        }
                    }
                })])]), e._v(" "), e.player.suggestion ? a("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.suggestion,
                        expression: "player.suggestion"
                    }]
                }) : a("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "SUGGESTION",
                        expression: "'SUGGESTION'"
                    }],
                    staticClass: "suggestion",
                    attrs: {
                        disabled: e.isSubmitting
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onSuggestion.apply(null, arguments)
                        }
                    }
                })])
            };
            S._withStripped = !0;
            var N = a(3317),
                O = function(e, t, a, s) {
                    return new(a || (a = Promise))((function(i, r) {
                        function n(e) {
                            try {
                                l(s.next(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function o(e) {
                            try {
                                l(s.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(n, o)
                        }
                        l((s = s.apply(e, t || [])).next())
                    }))
                };
            const I = r().extend({
                components: {
                    BaseDoodle: N.Z
                },
                props: {
                    player: Object
                },
                i18n: {
                    messages: g
                },
                data() {
                    const e = ["#2f5f9d", "#d02c41", "#2a3a2a", "#0d162d", "#51346c", "#43342e", "#080808", "#505253"],
                        t = ["#000000", "#f32938", "#ffa500", "#f8e655", "#44d582", "#0046ae", "#bc4df8", "#634a2c", "#ffffff"],
                        a = [5, 12, 18];
                    return {
                        backgroundColors: e,
                        colors: t,
                        weights: a,
                        backgroundColor: e[0],
                        color: t[t.length - 1],
                        isSubmitting: !1,
                        isUndoing: !1,
                        scale: {
                            width: 2,
                            height: 2
                        },
                        weight: a[0]
                    }
                },
                computed: {
                    canSubmit() {
                        return !(this.isSubmitting || this.isUndoing || this.player.doodle.lines.length <= 0)
                    }
                },
                created() {
                    this.onChangeBackgroundColor(this.backgroundColor)
                },
                methods: {
                    onChangeBackgroundColor(e) {
                        return O(this, void 0, void 0, (function*() {
                            this.backgroundColor = e;
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "background",
                                    color: this.backgroundColor
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    },
                    onChangeColor(e) {
                        this.color = e
                    },
                    onChangeWeight() {
                        const e = this.weights.findIndex((e => e === this.weight)); - 1 !== e && (this.weight = this.weights[(e + 1) % this.weights.length])
                    },
                    onSubmit() {
                        return O(this, void 0, void 0, (function*() {
                            this.isSubmitting = !0;
                            try {
                                yield this.$ecast.lock(this.player.doodle.key)
                            } catch (e) {
                                this.isSubmitting = !1, this.$handleEcastError(e)
                            }
                        }))
                    },
                    onSuggestion() {
                        return O(this, void 0, void 0, (function*() {
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "suggestion"
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    },
                    onUndo() {
                        return O(this, void 0, void 0, (function*() {
                            this.isUndoing = !0;
                            try {
                                yield this.$ecast.undoDoodle(this.player.doodle.key)
                            } catch (e) {
                                this.$handleEcastError(e)
                            } finally {
                                this.isUndoing = !1
                            }
                        }))
                    }
                }
            });
            var E = (0, h.Z)(I, S, [], !1, null, null, null);
            E.options.__file = "src/games/tjsp/awshirt/views/Drawing.vue";
            const R = E.exports;
            var y = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "lobby"
                }, [a("LobbyActions", {
                    attrs: {
                        player: e.player,
                        "start-text": e.$t("LOBBY.BUTTON_FIGHT")
                    }
                }), e._v(" "), a("div", {
                    staticClass: "avatars"
                }, [e._l(e.player.avatars, (function(t, s) {
                    return [a("button", {
                        key: "av" + s,
                        staticClass: "avatar",
                        class: {
                            selected: e.selectedAvatar && e.selectedAvatar.name === t.name
                        },
                        attrs: {
                            disabled: !t.available
                        },
                        on: {
                            click: function(a) {
                                return e.onSelectAvatar(t)
                            }
                        }
                    }, [a("img", {
                        attrs: {
                            src: e.iconSrc(t),
                            alt: e.icons[t.name] && e.icons[t.name].alt
                        }
                    })])]
                }))], 2), e._v(" "), a("form", {
                    on: {
                        submit: function(t) {
                            return t.preventDefault(), e.onSubmitQuote.apply(null, arguments)
                        }
                    }
                }, [a("label", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.QUOTE_LABEL",
                        expression: "'LOBBY.QUOTE_LABEL'"
                    }],
                    attrs: {
                        for: "quote"
                    }
                }), e._v(" "), a("div", {
                    staticClass: "inline"
                }, [a("Input", {
                    attrs: {
                        id: "quote",
                        autocomplete: "off",
                        disabled: e.hasSubmit,
                        maxlength: "70",
                        placeholder: e.taunt,
                        value: e.quote
                    },
                    on: {
                        input: e.onInput
                    }
                }), e._v(" "), e.hasSubmit ? a("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.QUOTE_CHANGE",
                        expression: "'LOBBY.QUOTE_CHANGE'"
                    }],
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onChangeQuote.apply(null, arguments)
                        }
                    }
                }) : a("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.QUOTE_SET",
                        expression: "'LOBBY.QUOTE_SET'"
                    }],
                    attrs: {
                        disabled: !e.quote,
                        type: "submit"
                    }
                })], 1)]), e._v(" "), e.error ? a("span", {
                    staticClass: "error",
                    domProps: {
                        textContent: e._s(e.error)
                    }
                }) : e._e()], 1)
            };
            y._withStripped = !0;
            var C = a(55507),
                U = a(6305),
                _ = a(13494);

            function L(e) {
                return e.replace(/[^\p{Letter}\p{Number}\p{Punctuation}\p{Separator}\u0020-\u007E\u00A0-\u00FF\u20AC\u2122\n]/gu, "")
            }
            var w = function(e, t, a, s) {
                return new(a || (a = Promise))((function(i, r) {
                    function n(e) {
                        try {
                            l(s.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function o(e) {
                        try {
                            l(s.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                            e(t)
                        }))).then(n, o)
                    }
                    l((s = s.apply(e, t || [])).next())
                }))
            };
            const G = r().extend({
                components: {
                    Input: U.Z,
                    LobbyActions: _.Z
                },
                props: {
                    info: Object,
                    player: Object
                },
                i18n: {
                    messages: g
                },
                data: () => ({
                    hasSubmit: !1,
                    error: "",
                    icons: {},
                    quote: ""
                }),
                computed: {
                    selectedAvatar() {
                        if (this.info.avatar) return this.player.avatars.find((e => e.name === this.info.avatar))
                    },
                    taunt() {
                        var e;
                        return (null === (e = this.selectedAvatar) || void 0 === e ? void 0 : e.name) && this.icons[this.selectedAvatar.name] ? this.icons[this.selectedAvatar.name].taunt : ""
                    }
                },
                created() {
                    this.setIcons()
                },
                methods: {
                    iconSrc(e) {
                        var t;
                        return this.icons[e.name] ? e.available || (null === (t = this.selectedAvatar) || void 0 === t ? void 0 : t.name) === e.name ? this.icons[e.name].on : this.icons[e.name].off : ""
                    },
                    resetError() {
                        this.error && (this.error = "")
                    },
                    setIcons() {
                        return w(this, void 0, void 0, (function*() {
                            this.icons = {
                                baku: {
                                    alt: this.$t("ALT.AVATARS.BAKU"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 90395, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 69901, 17))).default,
                                    taunt: this.$t("TAUNTS.BAKU")
                                },
                                blueDemon: {
                                    alt: this.$t("ALT.AVATARS.BLUE_DEMON"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 10630, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 32583, 17))).default,
                                    taunt: this.$t("TAUNTS.BLUE_DEMON")
                                },
                                bun: {
                                    alt: this.$t("ALT.AVATARS.BUN"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 31332, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 21718, 17))).default,
                                    taunt: this.$t("TAUNTS.BUN")
                                },
                                cat: {
                                    alt: this.$t("ALT.AVATARS.CAT"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 65401, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 52374, 17))).default,
                                    taunt: this.$t("TAUNTS.CAT")
                                },
                                catfish: {
                                    alt: this.$t("ALT.AVATARS.CATFISH"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 61074, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 37812, 17))).default,
                                    taunt: this.$t("TAUNTS.CATFISH")
                                },
                                crow: {
                                    alt: this.$t("ALT.AVATARS.CROW"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 58870, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 43689, 17))).default,
                                    taunt: this.$t("TAUNTS.CROW")
                                },
                                dog: {
                                    alt: this.$t("ALT.AVATARS.DOG"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 80203, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 54594, 17))).default,
                                    taunt: this.$t("TAUNTS.DOG")
                                },
                                fire: {
                                    alt: this.$t("ALT.AVATARS.FIRE"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 63147, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 82022, 17))).default,
                                    taunt: this.$t("TAUNTS.FIRE")
                                },
                                fox: {
                                    alt: this.$t("ALT.AVATARS.FOX"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 18147, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 86140, 17))).default,
                                    taunt: this.$t("TAUNTS.FOX")
                                },
                                hair: {
                                    alt: this.$t("ALT.AVATARS.HAIR"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 67524, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 88400, 17))).default,
                                    taunt: this.$t("TAUNTS.HAIR")
                                },
                                kappa: {
                                    alt: this.$t("ALT.AVATARS.KAPPA"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 22661, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 9847, 17))).default,
                                    taunt: this.$t("TAUNTS.KAPPA")
                                },
                                monkey: {
                                    alt: this.$t("ALT.AVATARS.MONKEY"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 29653, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 86454, 17))).default,
                                    taunt: this.$t("TAUNTS.MONKEY")
                                },
                                raccoon: {
                                    alt: this.$t("ALT.AVATARS.RACCOON"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 1368, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 4877, 17))).default,
                                    taunt: this.$t("TAUNTS.RACCOON")
                                },
                                redDemon: {
                                    alt: this.$t("ALT.AVATARS.RED_DEMON"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 64725, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 36326, 17))).default,
                                    taunt: this.$t("TAUNTS.RED_DEMON")
                                },
                                snake: {
                                    alt: this.$t("ALT.AVATARS.SNAKE"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 21833, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 30889, 17))).default,
                                    taunt: this.$t("TAUNTS.SNAKE")
                                },
                                umbrella: {
                                    alt: this.$t("ALT.AVATARS.UMBRELLA"),
                                    off: (yield Promise.resolve().then(a.t.bind(a, 48683, 17))).default,
                                    on: (yield Promise.resolve().then(a.t.bind(a, 35786, 17))).default,
                                    taunt: this.$t("TAUNTS.UMBRELLA")
                                }
                            }
                        }))
                    },
                    onChangeQuote() {
                        this.hasSubmit = !1
                    },
                    onInput(e) {
                        this.resetError(), this.quote = L(e)
                    },
                    onSelectAvatar(e) {
                        return w(this, void 0, void 0, (function*() {
                            if (this.player.responseKey) try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "avatar",
                                    avatar: e.name
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    },
                    onSubmitQuote() {
                        return w(this, void 0, void 0, (function*() {
                            if (this.player.textKey) {
                                try {
                                    yield this.$ecast.updateText(this.player.textKey, this.quote)
                                } catch (e) {
                                    if (e instanceof C.EcastFilterError) return void(this.error = this.$t("ERROR.TEXT_NAUGHTY"));
                                    this.$handleEcastError(e)
                                }
                                this.hasSubmit = !0
                            }
                        }))
                    }
                }
            });
            var x = (0, h.Z)(G, y, [], !1, null, "9ce2a49e", null);
            x.options.__file = "src/games/tjsp/awshirt/views/Lobby.vue";
            const B = x.exports;
            var D = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "post-game"
                }, [a("PostGameActions", {
                    attrs: {
                        player: e.player
                    }
                }), e._v(" "), a("GalleryLink", {
                    attrs: {
                        artifact: e.artifact
                    }
                })], 1)
            };
            D._withStripped = !0;
            var P = a(56623),
                M = a(83933);
            const $ = r().extend({
                components: {
                    GalleryLink: P.Z,
                    PostGameActions: M.Z
                },
                props: {
                    artifact: Object,
                    player: Object
                }
            });
            var k = (0, h.Z)($, D, [], !1, null, "7eac4d27", null);
            k.options.__file = "src/games/tjsp/awshirt/views/PostGame.vue";
            const K = k.exports;
            var F = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "suggesting"
                }, [a("form", {
                    on: {
                        submit: function(t) {
                            return t.preventDefault(), e.onSubmit.apply(null, arguments)
                        }
                    }
                }, ["drawing" === e.audience.playerKind ? a("label", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "SUGGESTING.INSTRUCTION.DRAWING",
                        expression: "'SUGGESTING.INSTRUCTION.DRAWING'"
                    }],
                    attrs: {
                        for: "suggestion"
                    }
                }) : "writing" === e.audience.playerKind ? a("label", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "SUGGESTING.INSTRUCTION.WRITING",
                        expression: "'SUGGESTING.INSTRUCTION.WRITING'"
                    }],
                    attrs: {
                        for: "suggestion"
                    }
                }) : e._e(), e._v(" "), a("Input", {
                    ref: "suggestion",
                    attrs: {
                        id: "suggestion",
                        autocomplete: "off",
                        disabled: e.isSubmitting,
                        value: e.suggestion
                    },
                    on: {
                        input: e.onInput
                    }
                }), e._v(" "), e.error ? a("p", {
                    staticClass: "error",
                    domProps: {
                        textContent: e._s(e.error)
                    }
                }) : e._e(), e._v(" "), a("div", {
                    staticClass: "actions"
                }, [a("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.SUBMIT",
                        expression: "'ACTION.SUBMIT'"
                    }],
                    attrs: {
                        type: "submit",
                        disabled: !e.suggestion || e.isSubmitting
                    }
                })])], 1)])
            };
            F._withStripped = !0;
            const H = r().extend({
                components: {
                    Input: U.Z
                },
                props: {
                    audience: Object
                },
                i18n: {
                    messages: g
                },
                data: () => ({
                    error: "",
                    isSubmitting: !1,
                    suggestion: ""
                }),
                methods: {
                    resetError() {
                        this.error && (this.error = "")
                    },
                    onInput(e) {
                        this.resetError(), this.suggestion = L(e)
                    },
                    onSubmit() {
                        return e = this, t = void 0, s = function*() {
                            if (this.suggestion.trim().length) {
                                this.isSubmitting = !0;
                                try {
                                    yield this.$ecast.pushTextRing(this.audience.textRingKey, this.suggestion)
                                } catch (e) {
                                    this.$handleEcastError(e)
                                } finally {
                                    this.isSubmitting = !1, this.suggestion = "", this.$nextTick((() => {
                                        const e = this.$refs.suggestion,
                                            t = null == e ? void 0 : e.$el;
                                        null == t || t.focus()
                                    }))
                                }
                            } else this.error = this.$t("ERROR.TEXT_NOTHING")
                        }, new((a = void 0) || (a = Promise))((function(i, r) {
                            function n(e) {
                                try {
                                    l(s.next(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function o(e) {
                                try {
                                    l(s.throw(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function l(e) {
                                var t;
                                e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                    e(t)
                                }))).then(n, o)
                            }
                            l((s = s.apply(e, t || [])).next())
                        }));
                        var e, t, a, s
                    }
                }
            });
            var W = (0, h.Z)(H, F, [], !1, null, "0c1155da", null);
            W.options.__file = "src/games/tjsp/awshirt/views/Suggesting.vue";
            const q = W.exports;
            var V = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "voting"
                }, [s("div", {
                    staticClass: "instructions"
                }, [e.hasSubmit && e.selected ? [e._v("\n            " + e._s(e.$t("VOTING.THANKS")) + "\n            "), s("br"), e._v(" "), s("div", {
                    staticClass: "choice",
                    style: {
                        backgroundColor: e.selected.background
                    }
                }, ["audience" !== e.$ecast.role ? s("img", {
                    staticClass: "drawing",
                    attrs: {
                        alt: "drawing",
                        draggable: "false",
                        src: e.getImage(e.selected.doodle)
                    }
                }) : e._e(), e._v(" "), s("p", [e._v(e._s(e.$bb(e.selected.text)))])]), e._v(" "), s("img", {
                    staticClass: "logo",
                    attrs: {
                        alt: e.$t("ALT.LOGO"),
                        src: a(44108)
                    }
                })] : [e._v("\n            " + e._s(e.$t("VOTING.INSTRUCTION")) + "\n        ")]], 2), e._v(" "), e.hasSubmit ? e._e() : [e._l(e.player.choices, (function(t, a) {
                    return [s("button", {
                        key: "choice-" + a,
                        staticClass: "choice",
                        style: {
                            backgroundColor: t.background
                        },
                        attrs: {
                            type: "submit",
                            disabled: e.isSubmitting
                        },
                        on: {
                            click: function(a) {
                                return a.preventDefault(), e.onChoose(t)
                            }
                        }
                    }, ["audience" !== e.$ecast.role ? s("img", {
                        key: "drawing-" + a,
                        staticClass: "drawing",
                        attrs: {
                            alt: "drawing",
                            draggable: "false",
                            src: e.getImage(t.doodle)
                        }
                    }) : e._e(), e._v(" "), s("p", [e._v(e._s(e.$bb(t.text)))])]), e._v(" "), a !== e.player.choices.length - 1 ? s("span", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "SEPARATOR.OR",
                            expression: "'SEPARATOR.OR'"
                        }],
                        key: "or-" + a
                    }) : e._e()]
                }))]], 2)
            };
            V._withStripped = !0;
            const j = r().extend({
                props: {
                    player: Object
                },
                i18n: {
                    messages: g
                },
                data: () => ({
                    hasSubmit: !1,
                    isSubmitting: !1,
                    selected: null
                }),
                methods: {
                    getImage: e => new u.J(document.createElement("canvas"), e).renderImage(),
                    onChoose(e) {
                        return t = this, a = void 0, i = function*() {
                            this.isSubmitting = !0, this.selected = e;
                            try {
                                "player" === this.$ecast.role ? yield this.$ecast.updateObject(this.player.responseKey, {
                                    choiceIndex: e.choiceIndex
                                }): "audience" === this.$ecast.role && (yield this.$ecast.incrementCountGroupCounter(this.player.countGroupName, String(e.choiceIndex)))
                            } catch (e) {
                                this.isSubmitting = !1, this.selected = null, this.$handleEcastError(e)
                            }
                            this.hasSubmit = !0
                        }, new((s = void 0) || (s = Promise))((function(e, r) {
                            function n(e) {
                                try {
                                    l(i.next(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function o(e) {
                                try {
                                    l(i.throw(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function l(t) {
                                var a;
                                t.done ? e(t.value) : (a = t.value, a instanceof s ? a : new s((function(e) {
                                    e(a)
                                }))).then(n, o)
                            }
                            l((i = i.apply(t, a || [])).next())
                        }));
                        var t, a, s, i
                    }
                }
            });
            var Y = (0, h.Z)(j, V, [], !1, null, "88f91b48", null);
            Y.options.__file = "src/games/tjsp/awshirt/views/Voting.vue";
            const z = Y.exports;
            var Q = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "waiting"
                }, [e.player.message ? s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.message,
                        expression: "player.message"
                    }],
                    staticClass: "message"
                }) : e.character ? s("p", {
                    domProps: {
                        textContent: e._s(e.character.intro)
                    }
                }) : e._e(), e._v(" "), s("div", {
                    staticClass: "art"
                }, [e.character ? s("img", {
                    attrs: {
                        src: e.character.src,
                        alt: e.character.alt
                    }
                }) : s("img", {
                    attrs: {
                        alt: e.$t("ALT.LOGO"),
                        src: a(44108)
                    }
                })])])
            };
            Q._withStripped = !0;
            const X = r().extend({
                props: {
                    avatar: String,
                    player: Object
                },
                i18n: {
                    messages: g
                },
                data: () => ({
                    characters: {}
                }),
                computed: {
                    character() {
                        return this.avatar && this.characters[this.avatar] ? this.characters[this.avatar] : null
                    }
                },
                created() {
                    this.setCharacters()
                },
                methods: {
                    setCharacters() {
                        return e = this, t = void 0, i = function*() {
                            "audience" !== this.$ecast.role && (this.characters = {
                                baku: {
                                    alt: this.$t("ALT.AVATARS.BAKU"),
                                    intro: this.$t("INTROS.BAKU"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 7593, 17))).default
                                },
                                blueDemon: {
                                    alt: this.$t("ALT.AVATARS.BLUE_DEMON"),
                                    intro: this.$t("INTROS.BLUE_DEMON"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 86478, 17))).default
                                },
                                bun: {
                                    alt: this.$t("ALT.AVATARS.BUN"),
                                    intro: this.$t("INTROS.BUN"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 59781, 17))).default
                                },
                                cat: {
                                    alt: this.$t("ALT.AVATARS.CAT"),
                                    intro: this.$t("INTROS.CAT"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 66750, 17))).default
                                },
                                catfish: {
                                    alt: this.$t("ALT.AVATARS.CATFISH"),
                                    intro: this.$t("INTROS.CATFISH"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 23139, 17))).default
                                },
                                crow: {
                                    alt: this.$t("ALT.AVATARS.CROW"),
                                    intro: this.$t("INTROS.CROW"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 86222, 17))).default
                                },
                                dog: {
                                    alt: this.$t("ALT.AVATARS.DOG"),
                                    intro: this.$t("INTROS.DOG"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 15606, 17))).default
                                },
                                fire: {
                                    alt: this.$t("ALT.AVATARS.FIRE"),
                                    intro: this.$t("INTROS.FIRE"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 69077, 17))).default
                                },
                                fox: {
                                    alt: this.$t("ALT.AVATARS.FOX"),
                                    intro: this.$t("INTROS.FOX"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 44033, 17))).default
                                },
                                hair: {
                                    alt: this.$t("ALT.AVATARS.HAIR"),
                                    intro: this.$t("INTROS.HAIR"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 5184, 17))).default
                                },
                                kappa: {
                                    alt: this.$t("ALT.AVATARS.KAPPA"),
                                    intro: this.$t("INTROS.KAPPA"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 28283, 17))).default
                                },
                                monkey: {
                                    alt: this.$t("ALT.AVATARS.MONKEY"),
                                    intro: this.$t("INTROS.MONKEY"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 79933, 17))).default
                                },
                                raccoon: {
                                    alt: this.$t("ALT.AVATARS.RACCOON"),
                                    intro: this.$t("INTROS.RACCOON"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 33577, 17))).default
                                },
                                redDemon: {
                                    alt: this.$t("ALT.AVATARS.RED_DEMON"),
                                    intro: this.$t("INTROS.RED_DEMON"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 82378, 17))).default
                                },
                                snake: {
                                    alt: this.$t("ALT.AVATARS.SNAKE"),
                                    intro: this.$t("INTROS.SNAKE"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 12291, 17))).default
                                },
                                umbrella: {
                                    alt: this.$t("ALT.AVATARS.UMBRELLA"),
                                    intro: this.$t("INTROS.UMBRELLA"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 35281, 17))).default
                                }
                            })
                        }, new((s = void 0) || (s = Promise))((function(a, r) {
                            function n(e) {
                                try {
                                    l(i.next(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function o(e) {
                                try {
                                    l(i.throw(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function l(e) {
                                var t;
                                e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                    e(t)
                                }))).then(n, o)
                            }
                            l((i = i.apply(e, t || [])).next())
                        }));
                        var e, t, s, i
                    }
                }
            });
            var Z = (0, h.Z)(X, Q, [], !1, null, "0bfccfe8", null);
            Z.options.__file = "src/games/tjsp/awshirt/views/Waiting.vue";
            const J = Z.exports;
            var ee = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "writing"
                }, [a("form", {
                    on: {
                        submit: function(t) {
                            return t.preventDefault(), e.onSubmit.apply(null, arguments)
                        }
                    }
                }, [e.player.suggestion ? a("label", {
                    attrs: {
                        for: "slogan"
                    }
                }, [e._v(e._s(e.$bb(e.player.suggestion)))]) : a("label", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "WRITING.INSTRUCTION",
                        expression: "'WRITING.INSTRUCTION'"
                    }],
                    attrs: {
                        for: "slogan"
                    }
                }), e._v(" "), a("Input", {
                    ref: "slogan",
                    attrs: {
                        id: "slogan",
                        autocomplete: "off",
                        disabled: e.isSubmitting,
                        maxlength: e.player.maxLength,
                        value: e.slogan
                    },
                    on: {
                        input: e.onInput
                    }
                }), e._v(" "), e.error ? a("p", {
                    staticClass: "error",
                    domProps: {
                        textContent: e._s(e.error)
                    }
                }) : e._e(), e._v(" "), a("div", {
                    staticClass: "actions"
                }, [e.player.suggestion ? e._e() : a("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "SUGGESTION",
                        expression: "'SUGGESTION'"
                    }],
                    staticClass: "suggestion",
                    attrs: {
                        type: "button",
                        disabled: e.isSubmitting
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onSuggestion.apply(null, arguments)
                        }
                    }
                }), e._v(" "), a("button", {
                    staticClass: "submit",
                    attrs: {
                        type: "submit",
                        disabled: !e.slogan || e.isSubmitting
                    }
                })])], 1)])
            };
            ee._withStripped = !0;
            var te = function(e, t, a, s) {
                return new(a || (a = Promise))((function(i, r) {
                    function n(e) {
                        try {
                            l(s.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function o(e) {
                        try {
                            l(s.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                            e(t)
                        }))).then(n, o)
                    }
                    l((s = s.apply(e, t || [])).next())
                }))
            };
            const ae = r().extend({
                components: {
                    Input: U.Z
                },
                props: {
                    player: Object
                },
                i18n: {
                    messages: g
                },
                data() {
                    var e;
                    return {
                        error: null !== (e = this.player.error) && void 0 !== e ? e : "",
                        isSubmitting: !1,
                        slogan: ""
                    }
                },
                watch: {
                    "player.error": function(e) {
                        this.error = e, this.isSubmitting = !1
                    },
                    "player.writingId": function() {
                        this.resetError(), this.isSubmitting = !1, this.slogan = ""
                    }
                },
                methods: {
                    autoSubmit() {
                        return te(this, void 0, void 0, (function*() {
                            try {
                                yield this.$ecast.updateText(this.player.textKey, this.slogan)
                            } catch (e) {
                                e instanceof C.EcastFilterError || this.$handleEcastError(e)
                            }
                        }))
                    },
                    resetError() {
                        this.error && (this.error = "")
                    },
                    onInput(e) {
                        return te(this, void 0, void 0, (function*() {
                            this.resetError(), this.slogan = L(e), yield this.autoSubmit()
                        }))
                    },
                    onSubmit() {
                        return te(this, void 0, void 0, (function*() {
                            if (this.slogan.length) {
                                this.isSubmitting = !0;
                                try {
                                    yield this.$ecast.updateText(this.player.textKey, this.slogan), yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "submit"
                                    })
                                } catch (e) {
                                    if (this.isSubmitting = !1, e instanceof C.EcastFilterError) return void(this.error = this.$t("ERROR.TEXT_NAUGHTY"));
                                    this.$handleEcastError(e)
                                } finally {
                                    this.isSubmitting = !1, this.slogan = "", this.$nextTick((() => {
                                        const e = this.$refs.slogan,
                                            t = null == e ? void 0 : e.$el;
                                        null == t || t.focus()
                                    }))
                                }
                            } else this.error = this.$t("ERROR.TEXT_NOTHING")
                        }))
                    },
                    onSuggestion() {
                        return te(this, void 0, void 0, (function*() {
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "suggestion"
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    }
                }
            });
            var se = (0, h.Z)(ae, ee, [], !1, null, "44dd52f7", null);
            se.options.__file = "src/games/tjsp/awshirt/views/Writing.vue";
            const ie = se.exports;
            const re = r().extend({
                components: {
                    Assembling: b,
                    Drawing: R,
                    Lobby: B,
                    PostGame: K,
                    Suggesting: q,
                    Voting: z,
                    Waiting: J,
                    Writing: ie
                },
                ecastKeys: {
                    audience: "audiencePlayer",
                    info: ({
                        id: e
                    }) => `info:${e}`,
                    player: {
                        fn: ({
                            id: e
                        }) => `player:${e}`,
                        hasDeepRefs: !0
                    }
                },
                ecastProviders: {
                    artifact: e => {
                        if (e.artifact) return e.artifact;
                        let t, a = 0;
                        for (; e[`artifact:${a}`];) t = e[`artifact:${a}`], a += 1;
                        return t
                    }
                },
                props: {
                    artifact: Object,
                    audience: Object,
                    info: Object,
                    player: Object
                },
                i18n: {
                    messages: g,
                    sharedMessages: n.s
                },
                themeColor: "#57bddb",
                data: () => ({
                    icons: {}
                }),
                computed: {
                    shouldShowAvatar() {
                        var e;
                        switch (null === (e = this.player) || void 0 === e ? void 0 : e.kind) {
                            case "assembling":
                            case "drawing":
                            case "waiting":
                                return !1
                        }
                        return !0
                    }
                },
                created() {
                    "player" === this.$ecast.role && this.setIcons()
                },
                methods: {
                    setIcons() {
                        return e = this, t = void 0, i = function*() {
                            this.icons = {
                                baku: {
                                    alt: this.$t("ALT.AVATARS.BAKU"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 41024, 17))).default
                                },
                                blueDemon: {
                                    alt: this.$t("ALT.AVATARS.BLUE_DEMON"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 39660, 17))).default
                                },
                                bun: {
                                    alt: this.$t("ALT.AVATARS.BUN"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 34304, 17))).default
                                },
                                cat: {
                                    alt: this.$t("ALT.AVATARS.CAT"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 75460, 17))).default
                                },
                                catfish: {
                                    alt: this.$t("ALT.AVATARS.CATFISH"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 60874, 17))).default
                                },
                                crow: {
                                    alt: this.$t("ALT.AVATARS.CROW"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 24194, 17))).default
                                },
                                dog: {
                                    alt: this.$t("ALT.AVATARS.DOG"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 90481, 17))).default
                                },
                                fire: {
                                    alt: this.$t("ALT.AVATARS.FIRE"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 27772, 17))).default
                                },
                                fox: {
                                    alt: this.$t("ALT.AVATARS.FOX"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 35057, 17))).default
                                },
                                hair: {
                                    alt: this.$t("ALT.AVATARS.HAIR"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 98100, 17))).default
                                },
                                kappa: {
                                    alt: this.$t("ALT.AVATARS.KAPPA"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 50488, 17))).default
                                },
                                monkey: {
                                    alt: this.$t("ALT.AVATARS.MONKEY"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 31377, 17))).default
                                },
                                raccoon: {
                                    alt: this.$t("ALT.AVATARS.RACCOON"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 2590, 17))).default
                                },
                                redDemon: {
                                    alt: this.$t("ALT.AVATARS.RED_DEMON"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 58289, 17))).default
                                },
                                snake: {
                                    alt: this.$t("ALT.AVATARS.SNAKE"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 61751, 17))).default
                                },
                                umbrella: {
                                    alt: this.$t("ALT.AVATARS.UMBRELLA"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 68413, 17))).default
                                }
                            }
                        }, new((s = void 0) || (s = Promise))((function(a, r) {
                            function n(e) {
                                try {
                                    l(i.next(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function o(e) {
                                try {
                                    l(i.throw(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function l(e) {
                                var t;
                                e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                    e(t)
                                }))).then(n, o)
                            }
                            l((i = i.apply(e, t || [])).next())
                        }));
                        var e, t, s, i
                    }
                }
            });
            var ne = (0, h.Z)(re, s, [], !1, null, null, null);
            ne.options.__file = "src/games/tjsp/awshirt/views/Main.vue";
            const oe = ne.exports
        },
        7593: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/9a8c305d69df2fff94e1.png"
        },
        86478: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/51c6c00113db20c5f347.png"
        },
        59781: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/9e5fc24ee1da0d3d8136.png"
        },
        66750: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/69bf18918e825496b492.png"
        },
        23139: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/0b9083807d87e3e17f6a.png"
        },
        86222: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/91f33500c0ef1e45a6cb.png"
        },
        15606: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/44ae08ea7646d0374847.png"
        },
        69077: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/d1e504eb6f2709ea488f.png"
        },
        44033: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/7bda0f5619eb721c3976.png"
        },
        5184: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/86bf8ff6c26c7c5955fe.png"
        },
        28283: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/9d96bbf1abee0622bb05.png"
        },
        79933: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/bd62873b4e6aa774fadd.png"
        },
        33577: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/ac7c60eb2e9254b3bf1a.png"
        },
        82378: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/2b57b293dbf144a79a7d.png"
        },
        12291: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/34e5d8899c6b97bdf0da.png"
        },
        35281: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/26bad293cca88148a095.png"
        },
        41024: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/160526fed67103ec6cdd.png"
        },
        39660: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/841740f5f2cd1dc5109f.png"
        },
        34304: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/42c6ce81073f4198c8b0.png"
        },
        75460: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/3ba48b7bdbf556559d5f.png"
        },
        60874: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/444e422e186f2dcbe9e2.png"
        },
        24194: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/715b33c4ac12dff24762.png"
        },
        90481: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/d45ec9a51617ae159942.png"
        },
        27772: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/137dd1b2ffc1f48fca2c.png"
        },
        35057: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/b4d1928485ae23ddc16d.png"
        },
        98100: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/0245d5e0acc8721b1047.png"
        },
        50488: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/bf13528b38de7ea72c1b.png"
        },
        31377: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/4a0f93ee917b571ef75c.png"
        },
        2590: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/f3214a26f58ef1bd475c.png"
        },
        58289: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/08f7e7e2fe0610dc0e06.png"
        },
        61751: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/517ed25e926036126d17.png"
        },
        68413: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/a98c3809e023aa30ad2e.png"
        },
        90395: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/19ba38b3ffa05a59d7e3.png"
        },
        10630: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/deb1f941699aa0c61c83.png"
        },
        31332: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/9ce74bddbdde366d7e44.png"
        },
        65401: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/ddeb30d9ea30744c9bc3.png"
        },
        61074: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/ecf597e83733f02e891b.png"
        },
        58870: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/85d5a84a5543b66fd847.png"
        },
        80203: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/3c993c945a0403a9ca62.png"
        },
        63147: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/9d2e65a8b4ed9018a884.png"
        },
        18147: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/4c0581dbb83d7e6e693f.png"
        },
        67524: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/6916981976ac0696a65d.png"
        },
        22661: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/98a095acfa55494ed136.png"
        },
        29653: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/e068df0337e025f0478e.png"
        },
        1368: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/804b0326a35ada5ab0db.png"
        },
        64725: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/6240fe0cd2e98a080b7f.png"
        },
        21833: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/619e3995d4bf2953605f.png"
        },
        48683: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/55dbe605d285e5423322.png"
        },
        69901: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/7fdbf936ed9c7afd71f2.png"
        },
        32583: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/29da2e77904d3143b746.png"
        },
        21718: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/85b27d5723ea14cf04ad.png"
        },
        52374: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/d9926ecbcd140a404231.png"
        },
        37812: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/8bf6cf547c1294af3b1b.png"
        },
        43689: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/ac5259ad5161aa876ffd.png"
        },
        54594: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/f5b9d25c65c2eb1f30b6.png"
        },
        82022: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/a5f6d400b28196341b42.png"
        },
        86140: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/092b5bf989ec46b44cae.png"
        },
        88400: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/97c7d5aa87f0bea24812.png"
        },
        9847: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/d679ea858f94c1d042a9.png"
        },
        86454: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/b3e3d8133fd4949f4f4b.png"
        },
        4877: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/4f35fc8c9a78ec19ba07.png"
        },
        36326: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/1da2eaa20bfaa0127d90.png"
        },
        30889: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/45c8a1b8f275d9e8ae29.png"
        },
        35786: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/3a9b49b0549490d83aa2.png"
        },
        44108: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/awshirt-tjsp/9d1a8576fa6edb13fac7.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/4494.64f81b16359212d29841.js.map