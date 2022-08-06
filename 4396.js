(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [4396], {
        56623: (t, e, s) => {
            "use strict";
            s.d(e, {
                Z: () => u
            });
            var a = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return t.link ? s("a", {
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
            a._withStripped = !0;
            var i = s(2934),
                n = s.n(i),
                o = s(81127),
                l = s(65853);
            const r = n().extend({
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
                        }), o.Q.setAsViewed(0)
                    }
                }
            });
            var c = (0, s(51900).Z)(r, a, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/GalleryLink.vue";
            const u = c.exports
        },
        13494: (t, e, s) => {
            "use strict";
            s.d(e, {
                Z: () => c
            });
            var a = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "lobby-actions",
                    class: {
                        vip: t.player.hasControls
                    }
                }, [t.messageLocation && "top" !== t.messageLocation ? t._e() : s("p", {
                    class: t.localClasses.message,
                    domProps: {
                        textContent: t._s(t.joinedCountText)
                    }
                }), t._v(" "), t.player.hasControls ? ["waitingForMore" === t.player.status ? s("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.neededText))]) : t._e(), t._v(" "), "canStart" === t.player.status ? s("button", {
                    class: t.localClasses.action,
                    domProps: {
                        textContent: t._s(t.startText || t.$t("LOBBY.BUTTON_START"))
                    },
                    on: {
                        click: t.onStartClick
                    }
                }) : t._e(), t._v(" "), "countdown" === t.player.status ? s("button", {
                    class: t.localClasses.action,
                    domProps: {
                        textContent: t._s(t.cancelText || t.$t("LOBBY.BUTTON_CANCEL"))
                    },
                    on: {
                        click: t.onCancelClick
                    }
                }) : t._e()] : t.player.gamepadStart ? ["waitingForMore" === t.player.status ? s("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.neededText))]) : t._e(), t._v(" "), "canStart" === t.player.status ? s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.WAITING_FOR_GAMEPAD",
                        expression: "'LOBBY.WAITING_FOR_GAMEPAD'"
                    }],
                    class: t.localClasses.status
                }) : t._e(), t._v(" "), "countdown" === t.player.status ? s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.GAME_STARTING",
                        expression: "'LOBBY.GAME_STARTING'"
                    }],
                    class: t.localClasses.status
                }) : t._e()] : ["waitingForMore" === t.player.status ? s("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.neededText))]) : t._e(), t._v(" "), "canStart" === t.player.status ? s("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.waitingForVIPText))]) : t._e(), t._v(" "), "countdown" === t.player.status ? s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.GAME_STARTING",
                        expression: "'LOBBY.GAME_STARTING'"
                    }],
                    class: t.localClasses.status
                }) : t._e()], t._v(" "), "bottom" === t.messageLocation ? s("p", {
                    class: t.localClasses.message,
                    domProps: {
                        textContent: t._s(t.joinedCountText)
                    }
                }) : t._e()], 2)
            };
            a._withStripped = !0;
            var i = s(2934),
                n = s.n(i),
                o = s(65853);
            const l = n().extend({
                props: {
                    cancelText: String,
                    classes: Object,
                    messageLocation: String,
                    player: Object,
                    shouldStart: Function,
                    startText: String
                },
                i18n: {
                    messages: o.s
                },
                computed: {
                    joinedCountText() {
                        return this.$tc("LOBBY.JOINED_COUNT", this.player.joinedPlayers, {
                            count: this.player.joinedPlayers,
                            maxPlayers: this.player.maxPlayers
                        })
                    },
                    localClasses() {
                        var t, e, s, a, i, n;
                        return {
                            message: null !== (e = null === (t = this.classes) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "message",
                            status: null !== (a = null === (s = this.classes) || void 0 === s ? void 0 : s.status) && void 0 !== a ? a : "status",
                            action: null !== (n = null === (i = this.classes) || void 0 === i ? void 0 : i.action) && void 0 !== n ? n : "action"
                        }
                    },
                    neededText() {
                        return this.$tc("LOBBY.PLAYERS_NEEDED", this.player.minPlayers - this.player.joinedPlayers)
                    },
                    waitingForVIPText() {
                        return this.$t("LOBBY.WAITING_FOR_VIP", {
                            name: this.player.vipName
                        })
                    }
                },
                methods: {
                    onCancelClick() {
                        this.player.responseKey && this.$ecast.updateObject(this.player.responseKey, {
                            action: "cancel"
                        }).catch(this.$handleEcastError)
                    },
                    onStartClick() {
                        return t = this, e = void 0, a = function*() {
                            if (this.player.responseKey) {
                                if (this.shouldStart && !(yield Promise.resolve(this.shouldStart()))) return;
                                this.$ecast.updateObject(this.player.responseKey, {
                                    action: "start"
                                }).catch(this.$handleEcastError)
                            }
                        }, new((s = void 0) || (s = Promise))((function(i, n) {
                            function o(t) {
                                try {
                                    r(a.next(t))
                                } catch (t) {
                                    n(t)
                                }
                            }

                            function l(t) {
                                try {
                                    r(a.throw(t))
                                } catch (t) {
                                    n(t)
                                }
                            }

                            function r(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                    t(e)
                                }))).then(o, l)
                            }
                            r((a = a.apply(t, e || [])).next())
                        }));
                        var t, e, s, a
                    }
                }
            });
            var r = (0, s(51900).Z)(l, a, [], !1, null, null, null);
            r.options.__file = "src/apps/vue/components/LobbyActions.vue";
            const c = r.exports
        },
        83933: (t, e, s) => {
            "use strict";
            s.d(e, {
                Z: () => u
            });
            var a = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return t.player && t.player.status ? s("div", {
                    staticClass: "post-game-actions",
                    class: {
                        vip: t.player.hasControls
                    }
                }, [t.messageLocation && "top" !== t.messageLocation ? t._e() : s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "POST_GAME.PLAY_AGAIN",
                        expression: "'POST_GAME.PLAY_AGAIN'"
                    }],
                    class: t.localClasses.message
                }), t._v(" "), t.player.hasControls ? ["waiting" === t.player.status ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "POST_GAME.BUTTON_SAME_PLAYERS",
                        expression: "'POST_GAME.BUTTON_SAME_PLAYERS'"
                    }],
                    class: t.localClasses.action,
                    on: {
                        click: t.onSamePlayersClick
                    }
                }) : t._e(), t._v(" "), "waiting" === t.player.status ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "POST_GAME.BUTTON_NEW_PLAYERS",
                        expression: "'POST_GAME.BUTTON_NEW_PLAYERS'"
                    }],
                    class: t.localClasses.action,
                    on: {
                        click: t.onNewPlayersClick
                    }
                }) : t._e(), t._v(" "), "countdown" === t.player.status ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.BUTTON_CANCEL",
                        expression: "'LOBBY.BUTTON_CANCEL'"
                    }],
                    class: t.localClasses.action,
                    on: {
                        click: t.onCancelClick
                    }
                }) : t._e()] : t.player.gamepadStart ? [s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.WAITING_FOR_GAMEPAD",
                        expression: "'LOBBY.WAITING_FOR_GAMEPAD'"
                    }],
                    class: t.localClasses.status
                })] : [s("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.waitingForVIPText))])], t._v(" "), "bottom" === t.messageLocation ? s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "POST_GAME.PLAY_AGAIN",
                        expression: "'POST_GAME.PLAY_AGAIN'"
                    }],
                    class: t.localClasses.message
                }) : t._e()], 2) : t._e()
            };
            a._withStripped = !0;
            var i = s(2934),
                n = s.n(i),
                o = s(65853),
                l = function(t, e, s, a) {
                    return new(s || (s = Promise))((function(i, n) {
                        function o(t) {
                            try {
                                r(a.next(t))
                            } catch (t) {
                                n(t)
                            }
                        }

                        function l(t) {
                            try {
                                r(a.throw(t))
                            } catch (t) {
                                n(t)
                            }
                        }

                        function r(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                t(e)
                            }))).then(o, l)
                        }
                        r((a = a.apply(t, e || [])).next())
                    }))
                };
            const r = n().extend({
                props: {
                    shouldStart: Function,
                    messageLocation: String,
                    classes: Object,
                    player: Object
                },
                i18n: {
                    messages: o.s
                },
                computed: {
                    localClasses() {
                        var t, e, s, a, i, n;
                        return {
                            message: null !== (e = null === (t = this.classes) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "message",
                            status: null !== (a = null === (s = this.classes) || void 0 === s ? void 0 : s.status) && void 0 !== a ? a : "status",
                            action: null !== (n = null === (i = this.classes) || void 0 === i ? void 0 : i.action) && void 0 !== n ? n : "action"
                        }
                    },
                    waitingForVIPText() {
                        return this.$t("LOBBY.WAITING_FOR_VIP", {
                            name: this.player.vipName
                        })
                    }
                },
                methods: {
                    onSamePlayersClick() {
                        return l(this, void 0, void 0, (function*() {
                            if (this.player.responseKey) {
                                if (this.shouldStart && !(yield Promise.resolve(this.shouldStart()))) return;
                                this.$ecast.updateObject(this.player.responseKey, {
                                    action: "samePlayers"
                                }).catch(this.$handleEcastError)
                            }
                        }))
                    },
                    onNewPlayersClick() {
                        return l(this, void 0, void 0, (function*() {
                            if (this.player.responseKey) {
                                if (this.shouldStart && !(yield Promise.resolve(this.shouldStart()))) return;
                                this.$ecast.updateObject(this.player.responseKey, {
                                    action: "newPlayers"
                                }).catch(this.$handleEcastError)
                            }
                        }))
                    },
                    onCancelClick() {
                        this.player.responseKey && this.$ecast.updateObject(this.player.responseKey, {
                            action: "cancel"
                        }).catch(this.$handleEcastError)
                    }
                }
            });
            var c = (0, s(51900).Z)(r, a, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/PostGameActions.vue";
            const u = c.exports
        },
        94835: (t, e, s) => {
            "use strict";
            s.d(e, {
                Z: () => h
            });
            var a = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    directives: [{
                        name: "touch",
                        rawName: "v-touch:swipe",
                        value: t.swipeHandler,
                        expression: "swipeHandler",
                        arg: "swipe"
                    }],
                    staticClass: "tutorial"
                }, [s("div", {
                    staticClass: "container"
                }, [s("svg", {
                    staticClass: "ratio-svg",
                    attrs: {
                        width: "2",
                        height: "3"
                    }
                }), t._v(" "), t._l(t.slides, (function(e, a) {
                    return s("div", {
                        key: a,
                        staticClass: "slide",
                        class: t.slideClasses[a]
                    }, [s("div", {
                        staticClass: "text"
                    }, [s("h3", {
                        staticClass: "title"
                    }, [t._v(t._s(e.title))]), t._v(" "), e.listItems ? s("ul", t._l(e.listItems, (function(e, a) {
                        return s("li", {
                            key: a
                        }, [t._v(t._s(e))])
                    })), 0) : t._e()]), t._v(" "), e.imageClass ? s("div", {
                        staticClass: "image",
                        class: e.imageClass
                    }) : t._e(), t._v(" "), e.arrow ? s("div", {
                        staticClass: "arrow",
                        style: e.arrow
                    }, [s("svg", {
                        attrs: {
                            viewBox: "0 0 50 50"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M -50,0 L 0,0",
                            "vector-effect": "non-scaling-stroke"
                        }
                    }), t._v(" "), s("path", {
                        attrs: {
                            d: "M -25,-20 L 0,0 L -25,20",
                            "vector-effect": "non-scaling-stroke"
                        }
                    })])]) : t._e()])
                })), t._v(" "), s("div", {
                    staticClass: "dots"
                }, t._l(t.slides.length, (function(e) {
                    return s("button", {
                        key: e,
                        staticClass: "dot",
                        class: {
                            current: t.currentIndex === e - 1
                        },
                        on: {
                            click: function(s) {
                                return t.onDotClick(e - 1)
                            }
                        }
                    })
                })), 0), t._v(" "), s("div", {
                    staticClass: "buttons"
                }, [t.isFinalSlide ? t._e() : s("button", {
                    staticClass: "skip",
                    on: {
                        click: t.onDoneClick
                    }
                }, [t._v(t._s(t.$t("TUTORIAL.BUTTON_SKIP")))]), t._v(" "), t.isFinalSlide ? s("button", {
                    staticClass: "done",
                    on: {
                        click: t.onDoneClick
                    }
                }, [t._v(t._s(t.$t("TUTORIAL.BUTTON_DONE")))]) : s("button", {
                    staticClass: "next",
                    on: {
                        click: t.onNextClick
                    }
                }, [t._v(t._s(t.$t("TUTORIAL.BUTTON_NEXT")))])])], 2)])
            };
            a._withStripped = !0;
            var i = s(2934),
                n = s.n(i),
                o = s(78627),
                l = s.n(o),
                r = s(65853);
            n().use(l());
            const c = n().extend({
                props: {
                    slides: Array
                },
                i18n: {
                    messages: r.s
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
            var u = (0, s(51900).Z)(c, a, [], !1, null, "2df46cec", null);
            u.options.__file = "src/apps/vue/components/Tutorial.vue";
            const h = u.exports
        },
        17819: (t, e, s) => {
            "use strict";
            s.d(e, {
                Z: () => u
            });
            var a = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "draw"
                }, [s("div", {
                    ref: "content",
                    staticClass: "content"
                }, [s("div", {
                    staticClass: "constrain"
                }, [t.player.prompt ? s("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : t._e(), t._v(" "), s("div", {
                    ref: "stage",
                    staticClass: "stage",
                    style: t.stageDimensions
                }), t._v(" "), s("button", {
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [t._v(t._s(t.player.submitText || "SUBMIT"))])])])])
            };
            a._withStripped = !0;
            var i = s(2934),
                n = s.n(i),
                o = s(32530),
                l = s(96486);
            const r = n().extend({
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
                            s = e.getBoundingClientRect(),
                            a = e.parentElement.getBoundingClientRect(),
                            i = Math.max(.9 * a.width, 240),
                            n = Math.max(this.windowHeight - t.height + s.height, 240),
                            o = this.stage.canvas.width,
                            l = this.stage.canvas.height,
                            r = Math.min(i / o, n / l);
                        return {
                            width: o * r + "px",
                            height: l * r + "px"
                        }
                    }
                },
                mounted() {
                    this.onResizeWithContext = (0, l.throttle)(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
                },
                beforeDestroy() {
                    window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
                },
                methods: {
                    setupStage() {
                        const t = this.$refs.stage,
                            e = {};
                        this.player.size && (e.width = this.player.size.width, e.height = this.player.size.height), this.player.thicknesses && (e.thickness = this.player.thicknesses[0]), this.player.colors && (e.color = this.player.colors[0]), this.player.maxPoints && (e.maxPoints = this.player.maxPoints), this.stage = new o.U(t, e), this.stage.on("up", (() => {
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
            var c = (0, s(51900).Z)(r, a, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/base/Draw.vue";
            const u = c.exports
        }
    }
]);
//# sourceMappingURL=sourcemaps/4396.e38a38a955c6de95413f.js.map