(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [8684], {
        16479: (t, e, s) => {
            var n;
            ! function() {
                "use strict";

                function a(t, e, s) {
                    var n = e.x,
                        a = e.y,
                        i = s.x - n,
                        o = s.y - a;
                    if (0 !== i || 0 !== o) {
                        var r = ((t.x - n) * i + (t.y - a) * o) / (i * i + o * o);
                        r > 1 ? (n = s.x, a = s.y) : r > 0 && (n += i * r, a += o * r)
                    }
                    return (i = t.x - n) * i + (o = t.y - a) * o
                }

                function i(t, e, s, n, o) {
                    for (var r, c = n, l = e + 1; l < s; l++) {
                        var u = a(t[l], t[e], t[s]);
                        u > c && (r = l, c = u)
                    }
                    c > n && (r - e > 1 && i(t, e, r, n, o), o.push(t[r]), s - r > 1 && i(t, r, s, n, o))
                }

                function o(t, e) {
                    var s = t.length - 1,
                        n = [t[0]];
                    return i(t, 0, s, e, n), n.push(t[s]), n
                }

                function r(t, e, s) {
                    if (t.length <= 2) return t;
                    var n = void 0 !== e ? e * e : 1;
                    return o(t = s ? t : function(t, e) {
                        for (var s, n, a, i, o, r = t[0], c = [r], l = 1, u = t.length; l < u; l++) a = r, void 0, void 0, (i = (n = s = t[l]).x - a.x) * i + (o = n.y - a.y) * o > e && (c.push(s), r = s);
                        return r !== s && c.push(s), c
                    }(t, n), n)
                }
                void 0 === (n = function() {
                    return r
                }.call(e, s, e, t)) || (t.exports = n)
            }()
        },
        65853: (t, e, s) => {
            "use strict";
            s.d(e, {
                j: () => n
            });
            const n = {
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
        64831: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                default: () => G
            });
            var n = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "jbg moderation"
                }, [t._m(0), t._v(" "), t.isConnected ? s("Moderate", t._b({}, "Moderate", t.ecastValues, !1)) : s("Authenticate", {
                    on: {
                        connectionChange: t.onConnectionChange
                    }
                })], 1)
            };
            n._withStripped = !0;
            var a = s(2934),
                i = s.n(a),
                o = s(45222),
                r = s(65853),
                c = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "authenticate"
                    }, [s("div", {
                        staticClass: "constrain"
                    }, [s("form", {
                        attrs: {
                            autocomplete: "off"
                        }
                    }, [s("fieldset", [s("label", {
                        attrs: {
                            name: "roomcode",
                            for: "roomcode",
                            type: "text"
                        }
                    }, [t._v(t._s(t.$t("ROOM_CODE")))]), t._v(" "), s("Input", {
                        attrs: {
                            id: "roomcode",
                            type: "text",
                            autocapitalize: "off",
                            autocorrect: "off",
                            autocomplete: "off",
                            placeholder: t.$t("ROOM_CODE_PLACEHOLDER"),
                            maxlength: t.codeLength
                        },
                        on: {
                            input: t.onCodeInput
                        },
                        model: {
                            value: t.code,
                            callback: function(e) {
                                t.code = e
                            },
                            expression: "code"
                        }
                    }), t._v(" "), s("label", {
                        attrs: {
                            name: "password",
                            for: "password",
                            type: "text"
                        }
                    }, [t._v(t._s(t.$t("PASSWORD")))]), t._v(" "), s("Input", {
                        attrs: {
                            id: "password",
                            type: "text",
                            autocapitalize: "off",
                            autocorrect: "off",
                            autocomplete: "off",
                            placeholder: t.$t("PASSWORD_PLACEHOLDER"),
                            maxlength: t.passwordLength
                        },
                        on: {
                            input: t.onPasswordInput
                        },
                        model: {
                            value: t.password,
                            callback: function(e) {
                                t.password = e
                            },
                            expression: "password"
                        }
                    }), t._v(" "), s("button", {
                        class: {
                            connecting: t.isConnecting
                        },
                        attrs: {
                            id: "button-join",
                            type: "submit",
                            disabled: !t.canSubmit
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onJoinClick.apply(null, arguments)
                            }
                        }
                    }, [s("span", [t._v(t._s(t.$t("MODERATE")))]), t._v(" "), s("div", {
                        staticClass: "loading"
                    })])], 1), t._v(" "), t.room ? [t.isModerationSupported ? t.room.moderationEnabled ? t._e() : s("p", {
                        staticClass: "warning"
                    }, [t._v("\n                    " + t._s(t.$t("WARNING_MODERATION_DISABLED")) + "\n                ")]) : s("p", {
                        staticClass: "warning"
                    }, [t._v("\n                    " + t._s(t.$t("WARNING_MODERATION_UNSUPPORTED", {
                        gameName: t.game && t.game.name
                    })) + "\n                ")])] : t._e()], 2)])])
                };
            c._withStripped = !0;
            var l = s(23178),
                u = s(6305),
                d = s(89446),
                p = s(2720),
                h = s(12360);
            const m = {
                en: {
                    MODERATE: "Moderate",
                    PASSWORD: "Password",
                    APPROVE_ALL: "Approve All",
                    REJECT_ALL: "Reject All",
                    SUBMITTED_BY: "Submitted by:",
                    WAITING_FOR_SUBMISSIONS: "Waiting for submissions",
                    WARNING_MODERATION_DISABLED: "The moderation setting for this game is turned off. Turn it on and restart the game to moderate content.",
                    WARNING_MODERATION_UNSUPPORTED: "{gameName} doesn't have anything to moderate, but thanks for wanting to help out!"
                },
                fr: {
                    MODERATE: "Modéré",
                    PASSWORD: "Mot de passe",
                    APPROVE_ALL: "Tout accepter",
                    REJECT_ALL: "Tout refuser",
                    SUBMITTED_BY: "Envoyée par:",
                    WAITING_FOR_SUBMISSIONS: "En attente de propositions"
                },
                it: {
                    MODERATE: "Modera",
                    PASSWORD: "Password",
                    APPROVE_ALL: "Approva tutto",
                    REJECT_ALL: "Rifiuta tutto",
                    SUBMITTED_BY: "Inviato da:",
                    WAITING_FOR_SUBMISSIONS: "In attesa di immissioni"
                },
                de: {
                    MODERATE: "Moderieren",
                    PASSWORD: "Passwort",
                    APPROVE_ALL: "Alles erlauben",
                    REJECT_ALL: "Alles zurückweisen",
                    SUBMITTED_BY: "Gesendet von:",
                    WAITING_FOR_SUBMISSIONS: "Warte auf Einreichungen"
                },
                es: {
                    MODERATE: "Moderar",
                    PASSWORD: "Contraseña",
                    APPROVE_ALL: "Aprobar todo",
                    REJECT_ALL: "Rechazar todo",
                    SUBMITTED_BY: "Enviado por:",
                    WAITING_FOR_SUBMISSIONS: "Esperando aportaciones"
                }
            };
            var E = function(t, e, s, n) {
                return new(s || (s = Promise))((function(a, i) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function r(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(o, r)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            };
            const O = i().extend({
                components: {
                    Input: u.Z
                },
                i18n: {
                    messages: m,
                    sharedMessages: r.j
                },
                data: () => ({
                    codeLength: 4,
                    passwordLength: 5,
                    code: "",
                    password: "",
                    room: null,
                    isConnecting: !1
                }),
                computed: {
                    canSubmit() {
                        var t;
                        return this.code.length === this.codeLength && this.password.length === this.passwordLength && !!this.isModerationSupported && !!(null === (t = this.room) || void 0 === t ? void 0 : t.moderationEnabled)
                    },
                    game() {
                        if (this.room) return (0, h.cF)(this.room.appTag)
                    },
                    isModerationSupported() {
                        var t, e;
                        return !!this.room && null !== (e = null === (t = this.game) || void 0 === t ? void 0 : t.hasModeration) && void 0 !== e && e
                    }
                },
                beforeMount() {
                    this.populateFromStorage(), this.$api = new l.APIClient({
                        host: d.c.serverUrl,
                        scheme: "https"
                    })
                },
                methods: {
                    populateFromStorage() {
                        var t;
                        this.$storage.isSupported && (this.code = (null !== (t = this.$storage.get("mod-roomCode")) && void 0 !== t ? t : "").toUpperCase())
                    },
                    onCodeInput() {
                        this.code = this.code.replace(/\s/g, ""), this.code = this.code.trim().toUpperCase(), this.code.length < this.codeLength ? this.room = null : this.getRoomInfo()
                    },
                    onPasswordInput() {
                        this.password = this.password.replace(/\s/g, ""), this.password = this.password.trim()
                    },
                    onJoinClick() {
                        this.connect()
                    },
                    getRoomInfo() {
                        return E(this, void 0, void 0, (function*() {
                            try {
                                const t = yield this.$api.getRoom({
                                    code: this.code
                                });
                                this.room = t
                            } catch (t) {
                                console.warn(t), this.room = null
                            }
                        }))
                    },
                    connect() {
                        return E(this, void 0, void 0, (function*() {
                            if (this.isConnecting) return;
                            if (!this.canSubmit) return;
                            if (yield this.getRoomInfo(), !this.room) return void(yield this.$showModal("Error", {
                                text: this.$t("ERROR.TITLE"),
                                subtext: this.$t("ERROR.ROOM_NOT_FOUND"),
                                dismissText: this.$t("ACTION.OK")
                            }));
                            const t = {
                                host: this.room.host,
                                code: this.code.toUpperCase(),
                                name: "moderator",
                                password: this.password,
                                role: "moderator",
                                debug: p.v.debug
                            };
                            this.$ecast = new l.WSClient(t), this.isConnecting = !0;
                            try {
                                yield this.$ecast.connect(), this.$syncEcast(), this.$debug.setup(this.$ecast, this.room), this.$storage.isSupported && this.$storage.set("mod-roomCode", this.code), this.$emit("connectionChange", !0)
                            } catch (t) {
                                console.error("[SignIn]", t), this.isConnecting = !1, this.onConnectionError(t)
                            }
                        }))
                    },
                    onConnectionError(t) {
                        this.$showModal("Error", {
                            text: "Unable to connect",
                            subtext: t.message,
                            dismissText: this.$t("ACTION.OK")
                        })
                    }
                }
            });
            var v = s(51900),
                _ = (0, v.Z)(O, c, [], !1, null, "2ea0b5fc", null);
            _.options.__file = "src/apps/entry/views/moderation/Authenticate.vue";
            const C = _.exports;
            var R = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "moderate"
                }, [s("div", {
                    staticClass: "constrain"
                }, [s("div", {
                    staticClass: "top-buttons"
                }, [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "APPROVE_ALL",
                        expression: "'APPROVE_ALL'"
                    }],
                    staticClass: "approve",
                    attrs: {
                        disabled: !t.pendingItems.length
                    },
                    on: {
                        click: t.onAcceptAllClick
                    }
                }), t._v(" "), s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "REJECT_ALL",
                        expression: "'REJECT_ALL'"
                    }],
                    staticClass: "reject",
                    attrs: {
                        disabled: !t.pendingItems.length
                    },
                    on: {
                        click: t.onRejectAllClick
                    }
                })]), t._v(" "), t.items.length ? s("transition-group", {
                    staticClass: "items",
                    attrs: {
                        name: "items",
                        tag: "div"
                    }
                }, [t._l(t.items, (function(e) {
                    return ["drawing" === e.type ? s("DrawingItem", {
                        key: e.key,
                        attrs: {
                            item: e
                        },
                        on: {
                            acceptClick: t.onAcceptClick,
                            rejectClick: t.onRejectClick
                        }
                    }) : t._e(), t._v(" "), "animation" === e.type ? s("AnimationItem", {
                        key: e.key,
                        attrs: {
                            item: e
                        },
                        on: {
                            acceptClick: t.onAcceptClick,
                            rejectClick: t.onRejectClick
                        }
                    }) : t._e(), t._v(" "), "text" === e.type ? s("TextItem", {
                        key: e.key,
                        attrs: {
                            item: e
                        },
                        on: {
                            acceptClick: t.onAcceptClick,
                            rejectClick: t.onRejectClick
                        }
                    }) : t._e()]
                }))], 2) : s("div", {
                    staticClass: "empty"
                }, [s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "WAITING_FOR_SUBMISSIONS",
                        expression: "'WAITING_FOR_SUBMISSIONS'"
                    }],
                    staticClass: "empty-text"
                }), t._v(" "), s("div", {
                    staticClass: "loading disabled"
                })])], 1)])
            };
            R._withStripped = !0;
            var T = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "item text",
                    class: t.item.status
                }, [s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.htmlUnescape(t.item.context),
                        expression: "htmlUnescape(item.context)"
                    }],
                    staticClass: "context"
                }), t._v(" "), s("div", {
                    ref: "stage",
                    staticClass: "stage"
                }), t._v(" "), s("p", {
                    staticClass: "name"
                }, [t._v(t._s(t.$t("SUBMITTED_BY")) + " "), s("span", [t._v(t._s(t.item.name))])]), t._v(" "), s("div", {
                    staticClass: "item-buttons"
                }, [s("button", {
                    staticClass: "accept",
                    attrs: {
                        "aria-label": "accept"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("acceptClick", t.item)
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "reject",
                    attrs: {
                        "aria-label": "reject"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("rejectClick", t.item)
                        }
                    }
                })])])
            };
            T._withStripped = !0;
            var A = s(32530);
            const S = i().extend({
                props: {
                    item: Object
                },
                mounted() {
                    const t = this.$refs.stage,
                        e = new A.U(t, {
                            width: this.item.value.size.width,
                            height: this.item.value.size.height
                        }),
                        s = e.canvas.parseLines(this.item.value.lines),
                        n = e.canvas.renderCanvas.getContext("2d");
                    n && s.forEach((t => e.canvas.drawLine(n, t)))
                },
                i18n: {
                    messages: m
                },
                methods: {
                    htmlUnescape: t => d.c.htmlUnescape(t)
                }
            });
            var I = (0, v.Z)(S, T, [], !1, null, "5975197a", null);
            I.options.__file = "src/apps/entry/views/moderation/DrawingItem.vue";
            const f = I.exports;
            var D = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "item text",
                    class: t.item.status
                }, [s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.htmlUnescape(t.item.context),
                        expression: "htmlUnescape(item.context)"
                    }],
                    staticClass: "context"
                }), t._v(" "), s("div", {
                    ref: "stage",
                    staticClass: "stage"
                }), t._v(" "), s("p", {
                    staticClass: "name"
                }, [t._v(t._s(t.$t("SUBMITTED_BY")) + " "), s("span", [t._v(t._s(t.item.name))])]), t._v(" "), s("div", {
                    staticClass: "item-buttons"
                }, [s("button", {
                    staticClass: "accept",
                    attrs: {
                        "aria-label": "accept"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("acceptClick", t.item)
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "reject",
                    attrs: {
                        "aria-label": "reject"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("rejectClick", t.item)
                        }
                    }
                })])])
            };
            D._withStripped = !0;
            const N = i().extend({
                props: {
                    item: Object
                },
                mounted() {
                    const t = this.$refs.stage,
                        e = this.item.value.size.width,
                        s = this.item.value.frames || [],
                        n = new A.U(t, {
                            width: this.item.value.size.width * s.length,
                            height: this.item.value.size.height
                        }),
                        a = n.canvas.renderCanvas.getContext("2d");
                    a && s.forEach(((t, s) => {
                        a.save(), a.translate(e * s, 0), n.canvas.parseLines(t).forEach((t => n.canvas.drawLine(a, t))), a.restore()
                    }))
                },
                i18n: {
                    messages: m
                },
                methods: {
                    htmlUnescape: t => d.c.htmlUnescape(t)
                }
            });
            var g = (0, v.Z)(N, D, [], !1, null, "748ebaa0", null);
            g.options.__file = "src/apps/entry/views/moderation/AnimationItem.vue";
            const x = g.exports;
            var L = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "item text",
                    class: t.item.status
                }, [s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.htmlUnescape(t.item.context),
                        expression: "htmlUnescape(item.context)"
                    }],
                    staticClass: "context"
                }), t._v(" "), s("p", {
                    staticClass: "value"
                }, [t._v(t._s(t.htmlUnescape(t.item.value)))]), t._v(" "), s("p", {
                    staticClass: "name"
                }, [t._v(t._s(t.$t("SUBMITTED_BY")) + " "), s("span", [t._v(t._s(t.item.name))])]), t._v(" "), s("div", {
                    staticClass: "item-buttons"
                }, [s("button", {
                    staticClass: "accept",
                    attrs: {
                        "aria-label": "accept"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("acceptClick", t.item)
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "reject",
                    attrs: {
                        "aria-label": "reject"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("rejectClick", t.item)
                        }
                    }
                })])])
            };
            L._withStripped = !0;
            const b = i().extend({
                props: {
                    item: Object
                },
                i18n: {
                    messages: m
                },
                methods: {
                    htmlUnescape: t => d.c.htmlUnescape(t)
                }
            });
            var M = (0, v.Z)(b, L, [], !1, null, null, null);
            M.options.__file = "src/apps/entry/views/moderation/TextItem.vue";
            const w = M.exports;
            const y = i().extend({
                components: {
                    DrawingItem: f,
                    AnimationItem: x,
                    TextItem: w
                },
                props: {
                    items: {
                        default: () => [],
                        type: Array
                    }
                },
                ecastProviders: {
                    items: t => {
                        const e = [];
                        return Object.keys(t).forEach((s => {
                            const n = s.split(":");
                            if ("moderate" !== n[0]) return;
                            const a = n[1];
                            if (!["text", "drawing", "animation"].includes(a)) return;
                            const i = {
                                key: s,
                                type: a,
                                status: t[s].status,
                                name: t[s].name,
                                value: t[s].value,
                                context: ""
                            };
                            t[s].context && (t[s].context.text && (i.context = t[s].context.text), t[s].context.bb && (i.context = t[s].context.bb), t[s].context.html && (i.context = d.c.htmlTagsToBBCode(t[s].context.html, [
                                ["i", "i"]
                            ]))), e.push(i)
                        })), e
                    }
                },
                i18n: {
                    messages: m
                },
                computed: {
                    pendingItems() {
                        return this.items.filter((t => "pending" === t.status))
                    }
                },
                methods: {
                    onAcceptAllClick() {
                        this.updateStatus(this.pendingItems, "accepted")
                    },
                    onRejectAllClick() {
                        this.updateStatus(this.pendingItems, "rejected")
                    },
                    onAcceptClick(t) {
                        "pending" === t.status && this.updateStatus([t], "accepted")
                    },
                    onRejectClick(t) {
                        "rejected" !== t.status && this.updateStatus([t], "rejected")
                    },
                    updateStatus(t, e) {
                        return s = this, n = void 0, i = function*() {
                            try {
                                const s = t.map((t => {
                                    const s = this.$ecast.entities[t.key].val;
                                    return s.status = e, this.$ecast.updateObject(t.key, s)
                                }));
                                s.unshift(this.$ecast.mail(1, {
                                    id: t.map((t => t.key)),
                                    status: e
                                })), yield Promise.all(s), this.$syncEcast()
                            } catch (t) {
                                console.error("[Moderation] unable to update entities", t)
                            }
                        }, new((a = void 0) || (a = Promise))((function(t, e) {
                            function o(t) {
                                try {
                                    c(i.next(t))
                                } catch (t) {
                                    e(t)
                                }
                            }

                            function r(t) {
                                try {
                                    c(i.throw(t))
                                } catch (t) {
                                    e(t)
                                }
                            }

                            function c(e) {
                                var s;
                                e.done ? t(e.value) : (s = e.value, s instanceof a ? s : new a((function(t) {
                                    t(s)
                                }))).then(o, r)
                            }
                            c((i = i.apply(s, n || [])).next())
                        }));
                        var s, n, a, i
                    }
                }
            });
            var P = (0, v.Z)(y, R, [], !1, null, "7686b6ac", null);
            P.options.__file = "src/apps/entry/views/moderation/Moderate.vue";
            const $ = P.exports;
            var k = function(t, e, s, n) {
                return new(s || (s = Promise))((function(a, i) {
                    function o(t) {
                        try {
                            c(n.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function r(t) {
                        try {
                            c(n.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(o, r)
                    }
                    c((n = n.apply(t, e || [])).next())
                }))
            };
            const U = i().extend({
                components: {
                    Authenticate: C,
                    Moderate: $
                },
                mixins: [o.e],
                i18n: {
                    messages: m,
                    sharedMessages: r.j
                },
                data: () => ({
                    isConnected: !1
                }),
                computed: {
                    ecastValues() {
                        return this.$data.$ecastValues ? this.$data.$ecastValues : null
                    }
                },
                methods: {
                    onConnectionChange(t) {
                        this.isConnected = t, t && (this.$ecast.on("room/exit", (() => {
                            this.onRoomExit()
                        })), this.$ecast.on("socketClose", (() => {
                            this.onSocketCloseEvent()
                        })))
                    },
                    onRoomExit() {
                        return k(this, void 0, void 0, (function*() {
                            yield this.$showModal("Error", {
                                text: this.$t("ERROR.ROOM_DISCONNECTED"),
                                subtext: this.$t("ERROR.ROOM_DESTROYED"),
                                dismissText: this.$t("ACTION.OK")
                            }), window.location.reload()
                        }))
                    },
                    onSocketCloseEvent() {
                        return k(this, void 0, void 0, (function*() {
                            this.$storage.isSupported && this.$storage.remove("mod-roomCode"), yield this.$showModal("Error", {
                                text: this.$t("ERROR.DISCONNECTED"),
                                dismissText: this.$t("ACTION.OK")
                            }), window.location.reload()
                        }))
                    }
                }
            });
            var B = (0, v.Z)(U, n, [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("header", {
                    staticClass: "header"
                }, [e("div", {
                    staticClass: "logo"
                })])
            }], !1, null, "05d701e0", null);
            B.options.__file = "src/apps/entry/views/moderation/Main.vue";
            const G = B.exports
        },
        6305: (t, e, s) => {
            "use strict";
            s.d(e, {
                Z: () => c
            });
            var n = function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("input", {
                    ref: "input",
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: t.onInput
                    }
                })
            };
            n._withStripped = !0;
            var a = s(2934),
                i = s.n(a);
            const o = i().extend({
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
                        return e = this, s = void 0, a = function*() {
                            const e = t.target,
                                s = -1 === e.maxLength ? Number.MAX_SAFE_INTEGER : e.maxLength;
                            e.value.length > s ? e.value = e.value.substring(0, s) : (this.$emit("input", e.value), yield i().nextTick(), e.value !== this.value && (e.value = this.value))
                        }, new((n = void 0) || (n = Promise))((function(t, i) {
                            function o(t) {
                                try {
                                    c(a.next(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function r(t) {
                                try {
                                    c(a.throw(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function c(e) {
                                var s;
                                e.done ? t(e.value) : (s = e.value, s instanceof n ? s : new n((function(t) {
                                    t(s)
                                }))).then(o, r)
                            }
                            c((a = a.apply(e, s || [])).next())
                        }));
                        var e, s, n, a
                    }
                }
            });
            var r = (0, s(51900).Z)(o, n, [], !1, null, null, null);
            r.options.__file = "src/apps/vue/components/Input.vue";
            const c = r.exports
        }
    }
]);
//# sourceMappingURL=8684.d2c8098bfcbe0e0e6d68.js.map