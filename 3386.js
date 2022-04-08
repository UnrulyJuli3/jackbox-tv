(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [3386], {
        65853: (e, s, t) => {
            "use strict";
            t.d(s, {
                j: () => a
            });
            const a = {
                en: {
                    ACTION: {
                        CANCEL: "Cancel",
                        OK: "OK",
                        SUBMIT: "Submit",
                        TRY_AGAIN: "Try Again"
                    },
                    ERROR: {
                        DISCONNECTED: "You have been disconnected.",
                        ROOM_DESTROYED: "Thanks for playing!",
                        ROOM_DISCONNECTED: "Disconnected",
                        ROOM_NOT_FOUND: "Room not found",
                        TITLE: "Error"
                    },
                    LOBBY: {
                        JOINED_COUNT: "{count} of {maxPlayers} players joined",
                        PLAYERS_NEEDED: "x | {count} player needed to start | {count} players needed to start",
                        WAITING_FOR_VIP: "Waiting for {name} to start the game",
                        WAITING_FOR_GAMEPAD: "Waiting for the game to start",
                        GAME_STARTING: "Game is starting",
                        BUTTON_START: "Press to Start",
                        BUTTON_CANCEL: "Press to Cancel"
                    },
                    POST_GAME: {
                        GALLERY_LINK: "Visit the Gallery",
                        PLAY_AGAIN: "Play again?",
                        BUTTON_SAME_PLAYERS: "Same Players",
                        BUTTON_NEW_PLAYERS: "New Players"
                    },
                    TUTORIAL: {
                        BUTTON_SKIP: "Skip",
                        BUTTON_NEXT: "Next",
                        BUTTON_DONE: "Let’s Go!"
                    },
                    PASSWORD_PLACEHOLDER: "ENTER 5-DIGIT PASSWORD",
                    ROOM_CODE: "ROOM CODE",
                    ROOM_CODE_PLACEHOLDER: "ENTER 4-LETTER CODE"
                },
                fr: {
                    ACTION: {
                        CANCEL: "Annuler",
                        OK: "OK",
                        TRY_AGAIN: "Réessayer"
                    },
                    ERROR: {
                        DISCONNECTED: "Vous avez été déconnecté.",
                        ROOM_DESTROYED: "Merci d'avoir joué!",
                        ROOM_DISCONNECTED: "Déconnexion",
                        ROOM_NOT_FOUND: "Salle introuvale",
                        TITLE: "Erreur"
                    },
                    PASSWORD_PLACEHOLDER: "ENTREZ UN MOT DE PASSE À 5 CHIFFRES",
                    ROOM_CODE: "CODE DE SALLE",
                    ROOM_CODE_PLACEHOLDER: "TAPEZ CODE 4 LETTRES"
                },
                it: {
                    ACTION: {
                        CANCEL: "Annulla",
                        OK: "OK",
                        TRY_AGAIN: "Riprova"
                    },
                    ERROR: {
                        DISCONNECTED: "È stata effettuata la disconnessione.",
                        ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
                        ROOM_DISCONNECTED: "Disconnessione effettuata",
                        ROOM_NOT_FOUND: "Sala non trovata",
                        TITLE: "Errore"
                    },
                    PASSWORD_PLACEHOLDER: "IMMETTI PASSWORD A 5 CIFRE",
                    ROOM_CODE: "CODICE STANZA",
                    ROOM_CODE_PLACEHOLDER: "INSERISCI IL CODICE DI 4 LETTERE"
                },
                de: {
                    ACTION: {
                        CANCEL: "Abbrechen",
                        OK: "OK",
                        TRY_AGAIN: "Erneut versuchen"
                    },
                    ERROR: {
                        DISCONNECTED: "Deine Verbindung wurde unterbrochen.",
                        ROOM_DESTROYED: "Danke fürs Spielen!",
                        ROOM_DISCONNECTED: "Verbindung abgebrochen",
                        ROOM_NOT_FOUND: "Raum wurde nicht gefunden.",
                        TITLE: "Fehler"
                    },
                    PASSWORD_PLACEHOLDER: "FÜNFSTELLIGES PASSWORT EINGEBEN",
                    ROOM_CODE: "RAUMCODE",
                    ROOM_CODE_PLACEHOLDER: "GIB DEN 4-STELLIGEN CODE EIN"
                },
                es: {
                    ACTION: {
                        CANCEL: "Cancelar",
                        OK: "Aceptar",
                        TRY_AGAIN: "Volver a intentarlo"
                    },
                    ERROR: {
                        DISCONNECTED: "Te has desconectado.",
                        ROOM_DESTROYED: "¡Gracias por jugar!",
                        ROOM_DISCONNECTED: "Desconectado",
                        ROOM_NOT_FOUND: "No se encuentra la sala",
                        TITLE: "Error"
                    },
                    PASSWORD_PLACEHOLDER: "INTRODUCE CONTRASEÑA DE 5 DÍGITOS",
                    ROOM_CODE: "CÓDIGO DE LA SALA",
                    ROOM_CODE_PLACEHOLDER: "INTRODUCE CÓDIGO DE 4 CARACTERES"
                }
            }
        },
        13494: (e, s, t) => {
            "use strict";
            t.d(s, {
                Z: () => c
            });
            var a = function() {
                var e = this,
                    s = e.$createElement,
                    t = e._self._c || s;
                return t("div", {
                    staticClass: "lobby-actions",
                    class: {
                        vip: e.player.hasControls
                    }
                }, [e.messageLocation && "top" !== e.messageLocation ? e._e() : t("p", {
                    class: e.localClasses.message,
                    domProps: {
                        textContent: e._s(e.joinedCountText)
                    }
                }), e._v(" "), e.player.hasControls ? ["waitingForMore" === e.player.status ? t("p", {
                    class: e.localClasses.status
                }, [e._v(e._s(e.neededText))]) : e._e(), e._v(" "), "canStart" === e.player.status ? t("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.BUTTON_START",
                        expression: "'LOBBY.BUTTON_START'"
                    }],
                    class: e.localClasses.action,
                    on: {
                        click: e.onStartClick
                    }
                }) : e._e(), e._v(" "), "countdown" === e.player.status ? t("button", {
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
                }) : e._e()] : e.player.gamepadStart ? ["waitingForMore" === e.player.status ? t("p", {
                    class: e.localClasses.status
                }, [e._v(e._s(e.neededText))]) : e._e(), e._v(" "), "canStart" === e.player.status ? t("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.WAITING_FOR_GAMEPAD",
                        expression: "'LOBBY.WAITING_FOR_GAMEPAD'"
                    }],
                    class: e.localClasses.status
                }) : e._e(), e._v(" "), "countdown" === e.player.status ? t("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.GAME_STARTING",
                        expression: "'LOBBY.GAME_STARTING'"
                    }],
                    class: e.localClasses.status
                }) : e._e()] : ["waitingForMore" === e.player.status ? t("p", {
                    class: e.localClasses.status
                }, [e._v(e._s(e.neededText))]) : e._e(), e._v(" "), "canStart" === e.player.status ? t("p", {
                    class: e.localClasses.status
                }, [e._v(e._s(e.waitingForVIPText))]) : e._e(), e._v(" "), "countdown" === e.player.status ? t("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.GAME_STARTING",
                        expression: "'LOBBY.GAME_STARTING'"
                    }],
                    class: e.localClasses.status
                }) : e._e()], e._v(" "), "bottom" === e.messageLocation ? t("p", {
                    class: e.localClasses.message,
                    domProps: {
                        textContent: e._s(e.joinedCountText)
                    }
                }) : e._e()], 2)
            };
            a._withStripped = !0;
            var n = t(2934),
                o = t.n(n),
                r = t(65853);
            const l = o().extend({
                props: {
                    shouldStart: Function,
                    messageLocation: String,
                    classes: Object,
                    player: Object
                },
                i18n: {
                    messages: r.j
                },
                computed: {
                    localClasses() {
                        var e, s, t, a, n, o;
                        return {
                            message: null !== (s = null === (e = this.classes) || void 0 === e ? void 0 : e.message) && void 0 !== s ? s : "message",
                            status: null !== (a = null === (t = this.classes) || void 0 === t ? void 0 : t.status) && void 0 !== a ? a : "status",
                            action: null !== (o = null === (n = this.classes) || void 0 === n ? void 0 : n.action) && void 0 !== o ? o : "action"
                        }
                    },
                    joinedCountText() {
                        return this.$t("LOBBY.JOINED_COUNT", {
                            count: this.player.joinedPlayers,
                            maxPlayers: this.player.maxPlayers
                        })
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
                    onStartClick() {
                        return e = this, s = void 0, a = function*() {
                            if (this.player.responseKey) {
                                if (this.shouldStart && !(yield Promise.resolve(this.shouldStart()))) return;
                                this.$ecast.updateObject(this.player.responseKey, {
                                    action: "start"
                                }).catch(this.$handleEcastError)
                            }
                        }, new((t = void 0) || (t = Promise))((function(n, o) {
                            function r(e) {
                                try {
                                    i(a.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function l(e) {
                                try {
                                    i(a.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function i(e) {
                                var s;
                                e.done ? n(e.value) : (s = e.value, s instanceof t ? s : new t((function(e) {
                                    e(s)
                                }))).then(r, l)
                            }
                            i((a = a.apply(e, s || [])).next())
                        }));
                        var e, s, t, a
                    },
                    onCancelClick() {
                        this.player.responseKey && this.$ecast.updateObject(this.player.responseKey, {
                            action: "cancel"
                        }).catch(this.$handleEcastError)
                    }
                }
            });
            var i = (0, t(51900).Z)(l, a, [], !1, null, null, null);
            i.options.__file = "src/apps/vue/components/LobbyActions.vue";
            const c = i.exports
        },
        83933: (e, s, t) => {
            "use strict";
            t.d(s, {
                Z: () => O
            });
            var a = function() {
                var e = this,
                    s = e.$createElement,
                    t = e._self._c || s;
                return e.player && e.player.status ? t("div", {
                    staticClass: "post-game-actions",
                    class: {
                        vip: e.player.hasControls
                    }
                }, [e.messageLocation && "top" !== e.messageLocation ? e._e() : t("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "POST_GAME.PLAY_AGAIN",
                        expression: "'POST_GAME.PLAY_AGAIN'"
                    }],
                    class: e.localClasses.message
                }), e._v(" "), e.player.hasControls ? ["waiting" === e.player.status ? t("button", {
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
                }) : e._e(), e._v(" "), "waiting" === e.player.status ? t("button", {
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
                }) : e._e(), e._v(" "), "countdown" === e.player.status ? t("button", {
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
                }) : e._e()] : e.player.gamepadStart ? [t("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.WAITING_FOR_GAMEPAD",
                        expression: "'LOBBY.WAITING_FOR_GAMEPAD'"
                    }],
                    class: e.localClasses.status
                })] : [t("p", {
                    class: e.localClasses.status
                }, [e._v(e._s(e.waitingForVIPText))])], e._v(" "), "bottom" === e.messageLocation ? t("p", {
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
            var n = t(2934),
                o = t.n(n),
                r = t(65853),
                l = function(e, s, t, a) {
                    return new(t || (t = Promise))((function(n, o) {
                        function r(e) {
                            try {
                                i(a.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            try {
                                i(a.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function i(e) {
                            var s;
                            e.done ? n(e.value) : (s = e.value, s instanceof t ? s : new t((function(e) {
                                e(s)
                            }))).then(r, l)
                        }
                        i((a = a.apply(e, s || [])).next())
                    }))
                };
            const i = o().extend({
                props: {
                    shouldStart: Function,
                    messageLocation: String,
                    classes: Object,
                    player: Object
                },
                i18n: {
                    messages: r.j
                },
                computed: {
                    localClasses() {
                        var e, s, t, a, n, o;
                        return {
                            message: null !== (s = null === (e = this.classes) || void 0 === e ? void 0 : e.message) && void 0 !== s ? s : "message",
                            status: null !== (a = null === (t = this.classes) || void 0 === t ? void 0 : t.status) && void 0 !== a ? a : "status",
                            action: null !== (o = null === (n = this.classes) || void 0 === n ? void 0 : n.action) && void 0 !== o ? o : "action"
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
            var c = (0, t(51900).Z)(i, a, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/PostGameActions.vue";
            const O = c.exports
        }
    }
]);
//# sourceMappingURL=3386.a2ee8e9113d4fc1a8918.js.map