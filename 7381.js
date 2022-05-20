(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [7381], {
        56623: (t, s, e) => {
            "use strict";
            e.d(s, {
                Z: () => u
            });
            var a = function() {
                var t = this,
                    s = t.$createElement,
                    e = t._self._c || s;
                return t.link ? e("a", {
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
            var n = e(2934),
                l = e.n(n),
                o = e(81127),
                i = e(65853);
            const r = l().extend({
                props: {
                    artifact: Object
                },
                i18n: {
                    messages: i.s
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
            var c = (0, e(51900).Z)(r, a, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/GalleryLink.vue";
            const u = c.exports
        },
        13494: (t, s, e) => {
            "use strict";
            e.d(s, {
                Z: () => c
            });
            var a = function() {
                var t = this,
                    s = t.$createElement,
                    e = t._self._c || s;
                return e("div", {
                    staticClass: "lobby-actions",
                    class: {
                        vip: t.player.hasControls
                    }
                }, [t.messageLocation && "top" !== t.messageLocation ? t._e() : e("p", {
                    class: t.localClasses.message,
                    domProps: {
                        textContent: t._s(t.joinedCountText)
                    }
                }), t._v(" "), t.player.hasControls ? ["waitingForMore" === t.player.status ? e("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.neededText))]) : t._e(), t._v(" "), "canStart" === t.player.status ? e("button", {
                    class: t.localClasses.action,
                    domProps: {
                        textContent: t._s(t.startText || t.$t("LOBBY.BUTTON_START"))
                    },
                    on: {
                        click: t.onStartClick
                    }
                }) : t._e(), t._v(" "), "countdown" === t.player.status ? e("button", {
                    class: t.localClasses.action,
                    domProps: {
                        textContent: t._s(t.cancelText || t.$t("LOBBY.BUTTON_CANCEL"))
                    },
                    on: {
                        click: t.onCancelClick
                    }
                }) : t._e()] : t.player.gamepadStart ? ["waitingForMore" === t.player.status ? e("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.neededText))]) : t._e(), t._v(" "), "canStart" === t.player.status ? e("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.WAITING_FOR_GAMEPAD",
                        expression: "'LOBBY.WAITING_FOR_GAMEPAD'"
                    }],
                    class: t.localClasses.status
                }) : t._e(), t._v(" "), "countdown" === t.player.status ? e("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.GAME_STARTING",
                        expression: "'LOBBY.GAME_STARTING'"
                    }],
                    class: t.localClasses.status
                }) : t._e()] : ["waitingForMore" === t.player.status ? e("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.neededText))]) : t._e(), t._v(" "), "canStart" === t.player.status ? e("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.waitingForVIPText))]) : t._e(), t._v(" "), "countdown" === t.player.status ? e("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.GAME_STARTING",
                        expression: "'LOBBY.GAME_STARTING'"
                    }],
                    class: t.localClasses.status
                }) : t._e()], t._v(" "), "bottom" === t.messageLocation ? e("p", {
                    class: t.localClasses.message,
                    domProps: {
                        textContent: t._s(t.joinedCountText)
                    }
                }) : t._e()], 2)
            };
            a._withStripped = !0;
            var n = e(2934),
                l = e.n(n),
                o = e(65853);
            const i = l().extend({
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
                        var t, s, e, a, n, l;
                        return {
                            message: null !== (s = null === (t = this.classes) || void 0 === t ? void 0 : t.message) && void 0 !== s ? s : "message",
                            status: null !== (a = null === (e = this.classes) || void 0 === e ? void 0 : e.status) && void 0 !== a ? a : "status",
                            action: null !== (l = null === (n = this.classes) || void 0 === n ? void 0 : n.action) && void 0 !== l ? l : "action"
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
                        return t = this, s = void 0, a = function*() {
                            if (this.player.responseKey) {
                                if (this.shouldStart && !(yield Promise.resolve(this.shouldStart()))) return;
                                this.$ecast.updateObject(this.player.responseKey, {
                                    action: "start"
                                }).catch(this.$handleEcastError)
                            }
                        }, new((e = void 0) || (e = Promise))((function(n, l) {
                            function o(t) {
                                try {
                                    r(a.next(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function i(t) {
                                try {
                                    r(a.throw(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function r(t) {
                                var s;
                                t.done ? n(t.value) : (s = t.value, s instanceof e ? s : new e((function(t) {
                                    t(s)
                                }))).then(o, i)
                            }
                            r((a = a.apply(t, s || [])).next())
                        }));
                        var t, s, e, a
                    }
                }
            });
            var r = (0, e(51900).Z)(i, a, [], !1, null, null, null);
            r.options.__file = "src/apps/vue/components/LobbyActions.vue";
            const c = r.exports
        },
        83933: (t, s, e) => {
            "use strict";
            e.d(s, {
                Z: () => u
            });
            var a = function() {
                var t = this,
                    s = t.$createElement,
                    e = t._self._c || s;
                return t.player && t.player.status ? e("div", {
                    staticClass: "post-game-actions",
                    class: {
                        vip: t.player.hasControls
                    }
                }, [t.messageLocation && "top" !== t.messageLocation ? t._e() : e("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "POST_GAME.PLAY_AGAIN",
                        expression: "'POST_GAME.PLAY_AGAIN'"
                    }],
                    class: t.localClasses.message
                }), t._v(" "), t.player.hasControls ? ["waiting" === t.player.status ? e("button", {
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
                }) : t._e(), t._v(" "), "waiting" === t.player.status ? e("button", {
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
                }) : t._e(), t._v(" "), "countdown" === t.player.status ? e("button", {
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
                }) : t._e()] : t.player.gamepadStart ? [e("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.WAITING_FOR_GAMEPAD",
                        expression: "'LOBBY.WAITING_FOR_GAMEPAD'"
                    }],
                    class: t.localClasses.status
                })] : [e("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.waitingForVIPText))])], t._v(" "), "bottom" === t.messageLocation ? e("p", {
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
            var n = e(2934),
                l = e.n(n),
                o = e(65853),
                i = function(t, s, e, a) {
                    return new(e || (e = Promise))((function(n, l) {
                        function o(t) {
                            try {
                                r(a.next(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function i(t) {
                            try {
                                r(a.throw(t))
                            } catch (t) {
                                l(t)
                            }
                        }

                        function r(t) {
                            var s;
                            t.done ? n(t.value) : (s = t.value, s instanceof e ? s : new e((function(t) {
                                t(s)
                            }))).then(o, i)
                        }
                        r((a = a.apply(t, s || [])).next())
                    }))
                };
            const r = l().extend({
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
                        var t, s, e, a, n, l;
                        return {
                            message: null !== (s = null === (t = this.classes) || void 0 === t ? void 0 : t.message) && void 0 !== s ? s : "message",
                            status: null !== (a = null === (e = this.classes) || void 0 === e ? void 0 : e.status) && void 0 !== a ? a : "status",
                            action: null !== (l = null === (n = this.classes) || void 0 === n ? void 0 : n.action) && void 0 !== l ? l : "action"
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
                        return i(this, void 0, void 0, (function*() {
                            if (this.player.responseKey) {
                                if (this.shouldStart && !(yield Promise.resolve(this.shouldStart()))) return;
                                this.$ecast.updateObject(this.player.responseKey, {
                                    action: "samePlayers"
                                }).catch(this.$handleEcastError)
                            }
                        }))
                    },
                    onNewPlayersClick() {
                        return i(this, void 0, void 0, (function*() {
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
            var c = (0, e(51900).Z)(r, a, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/PostGameActions.vue";
            const u = c.exports
        }
    }
]);
//# sourceMappingURL=sourcemaps/7381.d295d8f2b966ec2bf47c.js.map