(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/prototype"], {
        13494: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => c
            });
            var a = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "lobby-actions",
                    class: {
                        vip: e.player.hasControls
                    }
                }, [e.messageLocation && "top" !== e.messageLocation ? e._e() : s("p", {
                    class: e.localClasses.message,
                    domProps: {
                        textContent: e._s(e.joinedCountText)
                    }
                }), e._v(" "), e.player.hasControls ? ["waitingForMore" === e.player.status ? s("p", {
                    class: e.localClasses.status
                }, [e._v(e._s(e.neededText))]) : e._e(), e._v(" "), "canStart" === e.player.status ? s("button", {
                    class: e.localClasses.action,
                    domProps: {
                        textContent: e._s(e.startText || e.$t("LOBBY.BUTTON_START"))
                    },
                    on: {
                        click: e.onStartClick
                    }
                }) : e._e(), e._v(" "), "countdown" === e.player.status ? s("button", {
                    class: e.localClasses.action,
                    domProps: {
                        textContent: e._s(e.cancelText || e.$t("LOBBY.BUTTON_CANCEL"))
                    },
                    on: {
                        click: e.onCancelClick
                    }
                }) : e._e()] : e.player.gamepadStart ? ["waitingForMore" === e.player.status ? s("p", {
                    class: e.localClasses.status
                }, [e._v(e._s(e.neededText))]) : e._e(), e._v(" "), "canStart" === e.player.status ? s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.WAITING_FOR_GAMEPAD",
                        expression: "'LOBBY.WAITING_FOR_GAMEPAD'"
                    }],
                    class: e.localClasses.status
                }) : e._e(), e._v(" "), "countdown" === e.player.status ? s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.GAME_STARTING",
                        expression: "'LOBBY.GAME_STARTING'"
                    }],
                    class: e.localClasses.status
                }) : e._e()] : ["waitingForMore" === e.player.status ? s("p", {
                    class: e.localClasses.status
                }, [e._v(e._s(e.neededText))]) : e._e(), e._v(" "), "canStart" === e.player.status ? s("p", {
                    class: e.localClasses.status
                }, [e._v(e._s(e.waitingForVIPText))]) : e._e(), e._v(" "), "countdown" === e.player.status ? s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.GAME_STARTING",
                        expression: "'LOBBY.GAME_STARTING'"
                    }],
                    class: e.localClasses.status
                }) : e._e()], e._v(" "), "bottom" === e.messageLocation ? s("p", {
                    class: e.localClasses.message,
                    domProps: {
                        textContent: e._s(e.joinedCountText)
                    }
                }) : e._e()], 2)
            };
            a._withStripped = !0;
            var n = s(2934),
                i = s.n(n),
                o = s(65853);
            const l = i().extend({
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
                        var e, t, s, a, n, i;
                        return {
                            message: null !== (t = null === (e = this.classes) || void 0 === e ? void 0 : e.message) && void 0 !== t ? t : "message",
                            status: null !== (a = null === (s = this.classes) || void 0 === s ? void 0 : s.status) && void 0 !== a ? a : "status",
                            action: null !== (i = null === (n = this.classes) || void 0 === n ? void 0 : n.action) && void 0 !== i ? i : "action"
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
                        return e = this, t = void 0, a = function*() {
                            if (this.player.responseKey) {
                                if (this.shouldStart && !(yield Promise.resolve(this.shouldStart()))) return;
                                this.$ecast.updateObject(this.player.responseKey, {
                                    action: "start"
                                }).catch(this.$handleEcastError)
                            }
                        }, new((s = void 0) || (s = Promise))((function(n, i) {
                            function o(e) {
                                try {
                                    r(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function l(e) {
                                try {
                                    r(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function r(e) {
                                var t;
                                e.done ? n(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                    e(t)
                                }))).then(o, l)
                            }
                            r((a = a.apply(e, t || [])).next())
                        }));
                        var e, t, s, a
                    }
                }
            });
            var r = (0, s(51900).Z)(l, a, [], !1, null, null, null);
            r.options.__file = "src/apps/vue/components/LobbyActions.vue";
            const c = r.exports
        },
        83933: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => p
            });
            var a = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return e.player && e.player.status ? s("div", {
                    staticClass: "post-game-actions",
                    class: {
                        vip: e.player.hasControls
                    }
                }, [e.messageLocation && "top" !== e.messageLocation ? e._e() : s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "POST_GAME.PLAY_AGAIN",
                        expression: "'POST_GAME.PLAY_AGAIN'"
                    }],
                    class: e.localClasses.message
                }), e._v(" "), e.player.hasControls ? ["waiting" === e.player.status ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "POST_GAME.BUTTON_SAME_PLAYERS",
                        expression: "'POST_GAME.BUTTON_SAME_PLAYERS'"
                    }],
                    class: e.localClasses.action,
                    on: {
                        click: e.onSamePlayersClick
                    }
                }) : e._e(), e._v(" "), "waiting" === e.player.status ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "POST_GAME.BUTTON_NEW_PLAYERS",
                        expression: "'POST_GAME.BUTTON_NEW_PLAYERS'"
                    }],
                    class: e.localClasses.action,
                    on: {
                        click: e.onNewPlayersClick
                    }
                }) : e._e(), e._v(" "), "countdown" === e.player.status ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.BUTTON_CANCEL",
                        expression: "'LOBBY.BUTTON_CANCEL'"
                    }],
                    class: e.localClasses.action,
                    on: {
                        click: e.onCancelClick
                    }
                }) : e._e()] : e.player.gamepadStart ? [s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.WAITING_FOR_GAMEPAD",
                        expression: "'LOBBY.WAITING_FOR_GAMEPAD'"
                    }],
                    class: e.localClasses.status
                })] : [s("p", {
                    class: e.localClasses.status
                }, [e._v(e._s(e.waitingForVIPText))])], e._v(" "), "bottom" === e.messageLocation ? s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "POST_GAME.PLAY_AGAIN",
                        expression: "'POST_GAME.PLAY_AGAIN'"
                    }],
                    class: e.localClasses.message
                }) : e._e()], 2) : e._e()
            };
            a._withStripped = !0;
            var n = s(2934),
                i = s.n(n),
                o = s(65853),
                l = function(e, t, s, a) {
                    return new(s || (s = Promise))((function(n, i) {
                        function o(e) {
                            try {
                                r(a.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            try {
                                r(a.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function r(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                e(t)
                            }))).then(o, l)
                        }
                        r((a = a.apply(e, t || [])).next())
                    }))
                };
            const r = i().extend({
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
                        var e, t, s, a, n, i;
                        return {
                            message: null !== (t = null === (e = this.classes) || void 0 === e ? void 0 : e.message) && void 0 !== t ? t : "message",
                            status: null !== (a = null === (s = this.classes) || void 0 === s ? void 0 : s.status) && void 0 !== a ? a : "status",
                            action: null !== (i = null === (n = this.classes) || void 0 === n ? void 0 : n.action) && void 0 !== i ? i : "action"
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
            const p = c.exports
        },
        17819: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => p
            });
            var a = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "draw"
                }, [s("div", {
                    ref: "content",
                    staticClass: "content"
                }, [s("div", {
                    staticClass: "constrain"
                }, [e.player.prompt ? s("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : e._e(), e._v(" "), s("div", {
                    ref: "stage",
                    staticClass: "stage",
                    style: e.stageDimensions
                }), e._v(" "), s("button", {
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.player.submitText || "SUBMIT"))])])])])
            };
            a._withStripped = !0;
            var n = s(2934),
                i = s.n(n),
                o = s(32530),
                l = s(96486);
            const r = i().extend({
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
                        const e = this.$refs.content.getBoundingClientRect(),
                            t = this.$refs.stage,
                            s = t.getBoundingClientRect(),
                            a = t.parentElement.getBoundingClientRect(),
                            n = Math.max(.9 * a.width, 240),
                            i = Math.max(this.windowHeight - e.height + s.height, 240),
                            o = this.stage.canvas.width,
                            l = this.stage.canvas.height,
                            r = Math.min(n / o, i / l);
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
                        const e = this.$refs.stage,
                            t = {};
                        this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints), this.stage = new o.U(e, t), this.stage.on("up", (() => {
                            var e;
                            if (!this.player.live) return;
                            const t = (null === (e = this.stage) || void 0 === e ? void 0 : e.getObject()) || {};
                            t.done = !1, this.$ecast.updateObject(this.player.responseKey, t).catch(this.$handleEcastError)
                        }))
                    },
                    onSubmitClick() {
                        if (!this.stage) return;
                        this.isSubmitting = !0, this.stage.canvas.submitting = !0;
                        const e = this.stage.getObject();
                        e.done = !0, e.action = "submit", this.$ecast.updateObject(this.player.responseKey, e).catch(this.$handleEcastError)
                    },
                    onResize() {
                        this.windowHeight = window.innerHeight
                    }
                }
            });
            var c = (0, s(51900).Z)(r, a, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/base/Draw.vue";
            const p = c.exports
        },
        74634: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => l
            });
            var a = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "waiting"
                }, [s("div", {
                    staticClass: "constrain"
                }, [e.player.message ? s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.message,
                        expression: "player.message"
                    }]
                }) : e._e()])])
            };
            a._withStripped = !0;
            var n = s(2934);
            const i = s.n(n)().extend({
                props: {
                    player: Object
                }
            });
            var o = (0, s(51900).Z)(i, a, [], !1, null, null, null);
            o.options.__file = "src/apps/vue/components/base/Waiting.vue";
            const l = o.exports
        },
        87986: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => ue
            });
            var a = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "main",
                    class: e.classes,
                    style: e.themeStyle
                }, [e.player ? s("div", {
                    staticClass: "player",
                    class: e.player.classes
                }, [s("div", {
                    staticClass: "name"
                }, [e._v(e._s(e.player.name))])]) : e._e(), e._v(" "), e.player ? s("Fallbacks", {
                    attrs: {
                        player: e.player
                    }
                }) : e._e(), e._v(" "), e.components ? s("div", {
                    staticClass: "constrain"
                }, e._l(e.components.components, (function(e, t) {
                    return s(e.type + "El", {
                        key: t,
                        tag: "component",
                        staticClass: "component",
                        attrs: {
                            component: e
                        }
                    })
                })), 1) : e._e()], 1)
            };
            a._withStripped = !0;
            var n = s(2934),
                i = s.n(n),
                o = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return e.player ? s(e.player.kind, {
                        tag: "component",
                        class: {
                            fallback: e.applyStyling
                        },
                        attrs: {
                            player: e.player
                        }
                    }) : e._e()
                };
            o._withStripped = !0;
            var l = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "choices"
                }, [s("div", {
                    staticClass: "constrain"
                }, [e.player.prompt ? s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : e._e(), e._v(" "), e._l(e.player.choices, (function(t, a) {
                    return s("button", {
                        key: a,
                        class: {
                            selected: t.isSelected
                        },
                        attrs: {
                            disabled: t.isDisabled
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onChoiceClick(a)
                            }
                        }
                    }, [e._v("\n            " + e._s(t.text) + "\n        ")])
                }))], 2)])
            };
            l._withStripped = !0;
            const r = i().extend({
                props: {
                    player: Object
                },
                methods: {
                    onChoiceClick(e) {
                        var t, s, a;
                        const n = this.player.choices[e];
                        if (n.send) return void this.$ecast.updateObject(this.player.responseKey, n.send).catch(this.$handleEcastError);
                        const i = {
                            action: null !== (t = this.player.action) && void 0 !== t ? t : "choice",
                            [null !== (s = this.player.key) && void 0 !== s ? s : "value"]: null !== (a = n.value) && void 0 !== a ? a : e
                        };
                        this.$ecast.updateObject(this.player.responseKey, i).catch(this.$handleEcastError)
                    }
                }
            });
            var c = s(51900),
                p = (0, c.Z)(r, l, [], !1, null, null, null);
            p.options.__file = "src/apps/vue/components/base/Choices.vue";
            const u = p.exports;
            var h = s(3317),
                d = s(17819),
                v = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "lobby"
                    }, [s("div", {
                        staticClass: "constrain"
                    }, [s("LobbyActions", {
                        attrs: {
                            player: e.player
                        }
                    })], 1)])
                };
            v._withStripped = !0;
            var m = s(13494);
            const y = i().extend({
                components: {
                    LobbyActions: m.Z
                },
                props: {
                    player: Object
                }
            });
            var _ = (0, c.Z)(y, v, [], !1, null, null, null);
            _.options.__file = "src/apps/vue/components/base/Lobby.vue";
            const b = _.exports;
            var g = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "post-game"
                }, [s("div", {
                    staticClass: "constrain"
                }, [s("PostGameActions", {
                    attrs: {
                        player: e.player
                    }
                })], 1)])
            };
            g._withStripped = !0;
            var f = s(83933);
            const x = i().extend({
                components: {
                    PostGameActions: f.Z
                },
                props: {
                    player: Object
                }
            });
            var w = (0, c.Z)(x, g, [], !1, null, null, null);
            w.options.__file = "src/apps/vue/components/base/PostGame.vue";
            const C = w.exports;
            var E = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "single-text-entry"
                }, [s("div", {
                    staticClass: "constrain"
                }, [e.player.prompt ? s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : e._e(), e._v(" "), e.player.label ? s("label", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.label,
                        expression: "player.label"
                    }],
                    attrs: {
                        for: "input"
                    }
                }) : e._e(), e._v(" "), e.player.isMultiline ? s("textarea", {
                    attrs: {
                        id: "input",
                        rows: e.player.lines || 2,
                        placeholder: e.player.placeholder,
                        disabled: e.player.isDisabled
                    },
                    domProps: {
                        value: e.value
                    },
                    on: {
                        input: e.onValueInput
                    }
                }) : s("input", {
                    attrs: {
                        id: "input",
                        type: "text",
                        placeholder: e.player.placeholder,
                        disabled: e.player.isDisabled
                    },
                    domProps: {
                        value: e.value
                    },
                    on: {
                        input: e.onValueInput
                    }
                }), e._v(" "), s("button", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.submitText || "SUBMIT",
                        expression: "player.submitText || 'SUBMIT'"
                    }],
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onSubmitClick.apply(null, arguments)
                        }
                    }
                })])])
            };
            E._withStripped = !0;
            var S = s(44285);
            const O = i().extend({
                props: {
                    player: Object
                },
                data: () => ({
                    value: ""
                }),
                methods: {
                    onValueInput(e) {
                        const t = e.target;
                        this.value = t.value
                    },
                    isObjectResponseKey() {
                        if (!this.player.responseType) {
                            const e = this.$ecast.entities[this.player.responseKey];
                            if (e && e instanceof S.ObjectEntity) return !0
                        }
                        return "object" === this.player.responseType
                    },
                    onSubmitClick() {
                        this.isObjectResponseKey() ? this.sendAsObject() : this.sendAsText()
                    },
                    sendAsObject() {
                        const e = this.player.send || {
                            action: this.player.action || "input"
                        };
                        e[this.player.key || "value"] = this.value, this.$ecast.updateObject(this.player.responseKey, e).catch(this.$handleEcastError)
                    },
                    sendAsText() {
                        this.$ecast.updateText(this.player.responseKey, this.value).catch(this.$handleEcastError)
                    }
                }
            });
            var T = (0, c.Z)(O, E, [], !1, null, null, null);
            T.options.__file = "src/apps/vue/components/base/SingleTextEntry.vue";
            const $ = T.exports;
            var k = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "multi-text-entry"
                }, [s("div", {
                    staticClass: "constrain"
                }, [e.player.prompt ? s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : e._e(), e._v(" "), e._l(e.player.inputs, (function(t, a) {
                    return [t.label ? s("label", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: t.label,
                            expression: "input.label"
                        }],
                        key: "label-" + t.key,
                        attrs: {
                            for: "input-" + a
                        }
                    }) : e._e(), e._v(" "), t.isMultiline ? s("textarea", {
                        key: "input-" + a,
                        attrs: {
                            id: "input-" + a,
                            rows: t.lines || 2,
                            placeholder: t.placeholder,
                            disabled: t.isDisabled
                        },
                        domProps: {
                            value: e.values[a]
                        },
                        on: {
                            input: function(t) {
                                return e.onValueInput(t, a)
                            }
                        }
                    }) : s("input", {
                        key: "input-" + t.key,
                        attrs: {
                            id: "input-" + a,
                            type: "text",
                            placeholder: t.placeholder,
                            disabled: t.isDisabled
                        },
                        domProps: {
                            value: e.values[a]
                        },
                        on: {
                            input: function(t) {
                                return e.onValueInput(t, a)
                            }
                        }
                    })]
                })), e._v(" "), s("button", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.submitText || "SUBMIT",
                        expression: "player.submitText || 'SUBMIT'"
                    }],
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onSubmitClick.apply(null, arguments)
                        }
                    }
                })], 2)])
            };
            k._withStripped = !0;
            const A = i().extend({
                props: {
                    player: Object
                },
                data: () => ({
                    values: []
                }),
                beforeMount() {
                    this.values = this.player.inputs.map((e => {
                        var t;
                        return null !== (t = e.value) && void 0 !== t ? t : ""
                    }))
                },
                methods: {
                    onValueInput(e, t) {
                        const s = e.target;
                        this.values[t] = s.value
                    },
                    isObjectResponseKey() {
                        if (!this.player.responseType) {
                            const e = this.$ecast.entities[this.player.responseKey];
                            if (e && e instanceof S.ObjectEntity) return !0
                        }
                        return "object" === this.player.responseType
                    },
                    onSubmitClick() {
                        this.isObjectResponseKey() ? this.sendAsObject() : this.sendAsText()
                    },
                    sendAsObject() {
                        const e = this.player.send || {
                            action: this.player.action || "input"
                        };
                        this.player.inputs.forEach(((t, s) => {
                            var a;
                            const n = null !== (a = t.key) && void 0 !== a ? a : `input${s}`;
                            e[n] = this.values[s]
                        })), this.$ecast.updateObject(this.player.responseKey, e).catch(this.$handleEcastError)
                    },
                    sendAsText() {
                        const e = this.player.separator || "|";
                        this.$ecast.updateText(this.player.responseKey, this.values.join(e)).catch(this.$handleEcastError)
                    }
                }
            });
            var P = (0, c.Z)(A, k, [], !1, null, null, null);
            P.options.__file = "src/apps/vue/components/base/MultiTextEntry.vue";
            const N = P.exports;
            var j = s(74634);
            const B = i().extend({
                components: {
                    Choices: u,
                    Doodle: h.Z,
                    Draw: d.Z,
                    Lobby: b,
                    PostGame: C,
                    SingleTextEntry: $,
                    MultiTextEntry: N,
                    Waiting: j.Z
                },
                props: {
                    applyStyling: {
                        type: Boolean,
                        default: !0
                    },
                    player: Object
                }
            });
            var I = (0, c.Z)(B, o, [], !1, null, null, null);
            I.options.__file = "src/apps/vue/components/Fallbacks.vue";
            const D = I.exports;
            var L = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    class: e.component.classes
                }, e._l(e.component.choices, (function(t, a) {
                    return s("button", {
                        key: a,
                        staticClass: "choice",
                        class: t.classes,
                        attrs: {
                            disabled: t.isDisabled
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onChoiceClick(a)
                            }
                        }
                    }, [e._v("\n        " + e._s(t.text) + "\n    ")])
                })), 0)
            };
            L._withStripped = !0;
            const M = i().extend({
                props: {
                    component: Object
                },
                methods: {
                    classesForChoice(e) {
                        const t = e.classes || [];
                        e.isSelected && t.push("selected")
                    },
                    onChoiceClick(e) {
                        var t, s, a;
                        const n = this.component.choices[e];
                        if (n.send) return void(this.component.responseEntity ? this.$ecast.updateObject(this.component.responseEntity, n.send).catch(this.$handleEcastError) : this.$ecast.mail(1, n.send).catch(this.$handleEcastError));
                        const i = {
                            action: null !== (t = this.component.action) && void 0 !== t ? t : "choice",
                            [null !== (s = this.component.key) && void 0 !== s ? s : "value"]: null !== (a = n.value) && void 0 !== a ? a : e
                        };
                        this.component.responseEntity ? this.$ecast.updateObject(this.component.responseEntity, i).catch(this.$handleEcastError) : this.$ecast.mail(1, i).catch(this.$handleEcastError)
                    }
                }
            });
            var G = (0, c.Z)(M, L, [], !1, null, null, null);
            G.options.__file = "src/games/internal/prototype/views/Choices.vue";
            const R = G.exports;
            var Z = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    class: e.component.classes,
                    attrs: {
                        id: "doodle"
                    }
                }, [e.component.prompt ? s("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.component.prompt,
                        expression: "component.prompt"
                    }]
                }) : e._e(), e._v(" "), s("div", {
                    attrs: {
                        id: "tools"
                    }
                }, [e.component.doodles.length > 1 ? s("div", {
                    attrs: {
                        id: "frames"
                    }
                }, [s("span", [e._v("Frame:")]), e._v(" "), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.frame,
                        expression: "frame"
                    }],
                    attrs: {
                        name: "frame"
                    },
                    on: {
                        change: function(t) {
                            var s = Array.prototype.filter.call(t.target.options, (function(e) {
                                return e.selected
                            })).map((function(e) {
                                return "_value" in e ? e._value : e.value
                            }));
                            e.frame = t.target.multiple ? s : s[0]
                        }
                    }
                }, e._l(e.component.doodles, (function(t, a) {
                    return s("option", {
                        key: "doodle-" + a,
                        domProps: {
                            value: a
                        }
                    }, [e._v("\n                    " + e._s(a) + "\n                ")])
                })), 0)]) : e._e(), e._v(" "), e.component.layers ? s("div", {
                    attrs: {
                        id: "layers"
                    }
                }, [s("span", [e._v("Layer:")]), e._v(" "), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.layer,
                        expression: "layer"
                    }],
                    attrs: {
                        name: "layer"
                    },
                    on: {
                        change: function(t) {
                            var s = Array.prototype.filter.call(t.target.options, (function(e) {
                                return e.selected
                            })).map((function(e) {
                                return "_value" in e ? e._value : e.value
                            }));
                            e.layer = t.target.multiple ? s : s[0]
                        }
                    }
                }, e._l(e.component.layers, (function(t) {
                    return s("option", {
                        key: "layer-" + t,
                        domProps: {
                            value: t - 1
                        }
                    }, [e._v("\n                    " + e._s(t - 1) + "\n                ")])
                })), 0)]) : e._e(), e._v(" "), e.activeDoodle.weights && e.activeDoodle.weights.length ? s("div", {
                    attrs: {
                        id: "weights"
                    }
                }, [s("button", {
                    staticClass: "weight",
                    attrs: {
                        "aria-label": "weight",
                        name: "weights",
                        type: "radio"
                    },
                    on: {
                        click: e.onChangeWeight
                    }
                }, [s("div", {
                    staticClass: "circle",
                    style: {
                        width: e.weight + "px",
                        height: e.weight + "px",
                        backgroundColor: e.color,
                        borderRadius: "50%"
                    }
                })])]) : e._e(), e._v(" "), e.activeDoodle.colors && e.activeDoodle.colors.length ? s("div", {
                    attrs: {
                        id: "colors"
                    }
                }, e._l(e.activeDoodle.colors, (function(t, a) {
                    return s("input", {
                        key: "color-" + a,
                        staticClass: "color",
                        style: {
                            backgroundColor: t
                        },
                        attrs: {
                            "aria-label": "color " + t,
                            "data-color": t,
                            name: "colors",
                            type: "radio"
                        },
                        domProps: {
                            checked: a === e.colorIndex
                        },
                        on: {
                            change: function(t) {
                                return e.onChangeColor(a)
                            }
                        }
                    })
                })), 0) : e._e()]), e._v(" "), s("div", {
                    attrs: {
                        id: "doodles"
                    }
                }, e._l(e.component.doodles, (function(t, a) {
                    return s("BaseDoodle", {
                        key: "doodle-" + a,
                        class: {
                            inactive: a !== e.frame
                        },
                        attrs: {
                            "canvas-options": e.canvasOptions,
                            player: {
                                doodle: t
                            },
                            "hide-submit": ""
                        }
                    })
                })), 1), e._v(" "), s("div", {
                    attrs: {
                        id: "actions"
                    }
                }, [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.SUBMIT",
                        expression: "'ACTION.SUBMIT'"
                    }],
                    attrs: {
                        disabled: e.isSubmitting
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onSubmit.apply(null, arguments)
                        }
                    }
                })])])
            };
            Z._withStripped = !0;
            var K = s(65853);
            const Y = i().extend({
                components: {
                    BaseDoodle: h.Z
                },
                props: {
                    component: Object
                },
                i18n: {
                    messages: K.s
                },
                data: () => ({
                    colorIndex: 0,
                    frame: 0,
                    isSubmitting: !1,
                    layer: 0,
                    weightIndex: 0
                }),
                computed: {
                    activeDoodle() {
                        return this.component.doodles[this.frame]
                    },
                    canvasOptions() {
                        return {
                            color: this.color,
                            layer: this.layer,
                            layers: this.component.layers,
                            weight: this.weight
                        }
                    },
                    color() {
                        var e, t;
                        return null !== (t = null === (e = this.activeDoodle.colors) || void 0 === e ? void 0 : e[this.colorIndex]) && void 0 !== t ? t : "#000000"
                    },
                    weight() {
                        var e, t;
                        return null !== (t = null === (e = this.activeDoodle.weights) || void 0 === e ? void 0 : e[this.weightIndex]) && void 0 !== t ? t : 4
                    }
                },
                methods: {
                    onChangeColor(e) {
                        var t;
                        (null === (t = this.activeDoodle.colors) || void 0 === t ? void 0 : t.length) && (this.colorIndex = e)
                    },
                    onChangeWeight() {
                        var e;
                        (null === (e = this.activeDoodle.weights) || void 0 === e ? void 0 : e.length) && (this.weightIndex = (this.weightIndex + 1) % this.activeDoodle.weights.length)
                    },
                    onSubmit() {
                        this.isSubmitting = !0, this.component.doodles.forEach((e => {
                            this.$ecast.lock(e.key).catch((e => {
                                this.isSubmitting = !1, this.$handleEcastError(e)
                            }))
                        }))
                    }
                }
            });
            var F = (0, c.Z)(Y, Z, [], !1, null, null, null);
            F.options.__file = "src/games/internal/prototype/views/Doodle.vue";
            const U = F.exports;
            var W = function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "draw"
                }, [t("div", {
                    ref: "stage",
                    staticClass: "stage"
                })])
            };
            W._withStripped = !0;
            var z = s(32530);
            const V = i().extend({
                props: {
                    component: Object
                },
                data: () => ({
                    stage: null
                }),
                mounted() {
                    const e = this.$refs.stage,
                        t = {};
                    this.component.size && (t.width = this.component.size.width, t.height = this.component.size.height), this.component.lines && (t.lines = this.component.lines), this.stage = new z.U(e, t)
                }
            });
            var H = (0, c.Z)(V, W, [], !1, null, null, null);
            H.options.__file = "src/games/internal/prototype/views/Draw.vue";
            const J = H.exports;
            var q = function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("img", {
                    class: e.component.classes,
                    attrs: {
                        src: e.component.url || e.component.image,
                        alt: "Image"
                    }
                })
            };
            q._withStripped = !0;
            const Q = i().extend({
                props: {
                    component: Object
                }
            });
            var X = (0, c.Z)(Q, q, [], !1, null, null, null);
            X.options.__file = "src/games/internal/prototype/views/Image.vue";
            const ee = X.exports;
            var te = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "inputs",
                    class: e.component.classes
                }, [e._l(e.component.inputs, (function(t, a) {
                    return [t.label ? s("label", {
                        key: a,
                        class: t.classes,
                        attrs: {
                            for: "input-" + a
                        }
                    }, [e._v("\n            " + e._s(t.label) + "\n        ")]) : e._e(), e._v(" "), "textarea" === t.type ? s("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.values[a],
                            expression: "values[index]"
                        }],
                        key: a,
                        class: t.classes,
                        attrs: {
                            id: "input-" + a,
                            placeholder: t.placeholder,
                            rows: t.rows || 2
                        },
                        domProps: {
                            value: e.values[a]
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || e.$set(e.values, a, t.target.value)
                            }
                        }
                    }) : s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.values[a],
                            expression: "values[index]"
                        }],
                        key: a,
                        class: t.classes,
                        attrs: {
                            type: "text",
                            placeholder: t.placeholder
                        },
                        domProps: {
                            value: e.values[a]
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || e.$set(e.values, a, t.target.value)
                            }
                        }
                    })]
                })), e._v(" "), e.component.submit ? s("button", {
                    class: e.component.submit.classes,
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [e._v("\n        " + e._s(e.component.submit.text || "SUBMIT") + "\n    ")]) : s("button", {
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [e._v("SUBMIT")])], 2)
            };
            te._withStripped = !0;
            const se = i().extend({
                props: {
                    component: Object
                },
                data: () => ({
                    values: []
                }),
                beforeMount() {
                    this.values = this.component.inputs.map((e => {
                        var t;
                        return null !== (t = e.value) && void 0 !== t ? t : ""
                    }))
                },
                methods: {
                    onSubmitClick() {
                        const e = this.component.send || {
                            action: this.component.action || "input"
                        };
                        this.component.inputs.forEach(((t, s) => {
                            var a;
                            const n = null !== (a = t.key) && void 0 !== a ? a : `input${s}`;
                            e[n] = this.values[s]
                        })), this.component.responseEntity ? this.$ecast.updateObject(this.component.responseEntity, e).catch(this.$handleEcastError) : this.$ecast.mail(1, e).catch(this.$handleEcastError)
                    }
                }
            });
            var ae = (0, c.Z)(se, te, [], !1, null, null, null);
            ae.options.__file = "src/games/internal/prototype/views/Inputs.vue";
            const ne = ae.exports;
            var ie = function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)(e.component.tag || "p", {
                    tag: "component",
                    class: e.component.classes
                }, [e._v(e._s(e.component.text))])
            };
            ie._withStripped = !0;
            const oe = i().extend({
                props: {
                    component: Object
                }
            });
            var le = (0, c.Z)(oe, ie, [], !1, null, null, null);
            le.options.__file = "src/games/internal/prototype/views/Text.vue";
            const re = le.exports,
                ce = i().extend({
                    components: {
                        choicesEl: R,
                        doodleEl: U,
                        drawEl: J,
                        imageEl: ee,
                        inputsEl: ne,
                        textEl: re,
                        Fallbacks: D
                    },
                    ecastKeys: {
                        theme: ({
                            id: e
                        }) => `theme:${e}`,
                        player: ({
                            id: e
                        }) => `player:${e}`,
                        components: {
                            hasDeepRefs: !0,
                            fn: ({
                                id: e
                            }) => `components:${e}`
                        }
                    },
                    props: {
                        theme: Object,
                        player: Object,
                        components: Object
                    },
                    computed: {
                        classes() {
                            var e, t;
                            return null !== (t = null === (e = this.components) || void 0 === e ? void 0 : e.classes) && void 0 !== t ? t : []
                        },
                        themeStyle() {
                            if (!this.theme) return "";
                            const e = this.theme.colors;
                            let t = "";
                            return e && (t += `--theme-primary: ${e.primary};`, t += `--theme-secondary: ${e.secondary};`, t += `--theme-highlight: ${e.highlight};`, t += `--theme-background: ${e.background};`), t
                        }
                    }
                });
            var pe = (0, c.Z)(ce, a, [], !1, null, null, null);
            pe.options.__file = "src/games/internal/prototype/views/Main.vue";
            const ue = pe.exports
        }
    }
]);
//# sourceMappingURL=sourcemaps/7986.18cd0cf878d212903f09.js.map