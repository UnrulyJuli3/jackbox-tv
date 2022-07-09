(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [2265], {
        16479: (t, e, i) => {
            var s;
            ! function() {
                "use strict";

                function n(t, e, i) {
                    var s = e.x,
                        n = e.y,
                        a = i.x - s,
                        o = i.y - n;
                    if (0 !== a || 0 !== o) {
                        var r = ((t.x - s) * a + (t.y - n) * o) / (a * a + o * o);
                        r > 1 ? (s = i.x, n = i.y) : r > 0 && (s += a * r, n += o * r)
                    }
                    return (a = t.x - s) * a + (o = t.y - n) * o
                }

                function a(t, e, i, s, o) {
                    for (var r, c = s, l = e + 1; l < i; l++) {
                        var d = n(t[l], t[e], t[i]);
                        d > c && (r = l, c = d)
                    }
                    c > s && (r - e > 1 && a(t, e, r, s, o), o.push(t[r]), i - r > 1 && a(t, r, i, s, o))
                }

                function o(t, e) {
                    var i = t.length - 1,
                        s = [t[0]];
                    return a(t, 0, i, e, s), s.push(t[i]), s
                }

                function r(t, e, i) {
                    if (t.length <= 2) return t;
                    var s = void 0 !== e ? e * e : 1;
                    return o(t = i ? t : function(t, e) {
                        for (var i, s, n, a, o, r = t[0], c = [r], l = 1, d = t.length; l < d; l++) n = r, void 0, void 0, (a = (s = i = t[l]).x - n.x) * a + (o = s.y - n.y) * o > e && (c.push(i), r = i);
                        return r !== i && c.push(i), c
                    }(t, s), s)
                }
                void 0 === (s = function() {
                    return r
                }.call(e, i, e, t)) || (t.exports = s)
            }()
        },
        20854: (t, e, i) => {
            "use strict";
            i.d(e, {
                J: () => o
            });
            var s = i(16479),
                n = i.n(s),
                a = i(89446);
            class o {
                constructor(t, e, i) {
                    var s, n, a, o, r;
                    this.DEFAULT_WIDTH = 400, this.DEFAULT_HEIGHT = 400, this.color = "#000", this.layer = 0, this.layers = 1, this.maxPoints = Number.MAX_SAFE_INTEGER, this.points = [], this.precision = 2, this.scale = {
                        width: 1,
                        height: 1
                    }, this.weight = 4, this.isInteracting = !1, (null == i ? void 0 : i.color) && (this.color = i.color), (null == i ? void 0 : i.layer) && (this.layer = i.layer), (null == i ? void 0 : i.layers) && (this.layers = i.layers), (null == i ? void 0 : i.maxPoints) && (this.maxPoints = i.maxPoints), (null == i ? void 0 : i.precision) && (this.precision = i.precision), (null == i ? void 0 : i.scale) && (this.scale = i.scale), (null == i ? void 0 : i.weight) && (this.weight = i.weight), t.width = (null !== (n = null === (s = e.size) || void 0 === s ? void 0 : s.width) && void 0 !== n ? n : this.DEFAULT_WIDTH) * this.scale.width, t.height = (null !== (o = null === (a = e.size) || void 0 === a ? void 0 : a.height) && void 0 !== o ? o : this.DEFAULT_HEIGHT) * this.scale.height, this.canvas = t, this.ctx = t.getContext("2d"), null === (r = this.ctx) || void 0 === r || r.scale(this.scale.width, this.scale.height), this.doodle = e, this.drawLines()
                }
                addPoint(t) {
                    this.points.push(t)
                }
                normalizePoint(t) {
                    const e = {
                            x: t.x / this.scale.width,
                            y: t.y / this.scale.height
                        },
                        i = {
                            x: Math.min(Math.max(.5 * this.weight, e.x), this.canvas.width / this.scale.width - .5 * this.weight),
                            y: Math.min(Math.max(.5 * this.weight, e.y), this.canvas.height / this.scale.height - .5 * this.weight)
                        };
                    return {
                        x: a.c.toPrecision(i.x, this.precision),
                        y: a.c.toPrecision(i.y, this.precision)
                    }
                }
                drawLines() {
                    if (this.ctx) {
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        for (let t = 0; t < this.layers; t++) Object.values(this.doodle.lines).filter((e => {
                            var i;
                            return (null !== (i = e.layer) && void 0 !== i ? i : 0) === t
                        })).forEach((t => this.drawLine(t))), t === this.layer && this.drawLine({
                            color: this.color,
                            index: this.doodle.lines.length,
                            layer: this.layer,
                            points: this.points,
                            weight: this.weight
                        })
                    }
                }
                drawLine(t) {
                    this.ctx && (this.ctx.fillStyle = t.color, this.ctx.strokeStyle = t.color, this.ctx.lineCap = "round", this.ctx.lineJoin = "round", this.ctx.lineWidth = t.weight, this.ctx.beginPath(), t.points.forEach(((e, i) => {
                        1 === t.points.length && 0 === i && (this.ctx.save(), this.ctx.arc(e.x, e.y, t.weight / 2, 0, 2 * Math.PI), this.ctx.fill(), this.ctx.restore(), this.ctx.beginPath()), this.ctx.lineTo(e.x, e.y)
                    })), this.ctx.stroke())
                }
                renderImage(t = "image/png") {
                    return this.doodle.lines.length > 0 && this.drawLines(), this.canvas.toDataURL(t)
                }
                onStart(t) {
                    this.isInteracting = !0;
                    const e = this.normalizePoint(t);
                    this.addPoint(e), this.drawLines()
                }
                onMove(t) {
                    if (!this.isInteracting) return;
                    const e = this.points[this.points.length - 1];
                    if (!e) return void this.addPoint(this.normalizePoint(t));
                    const i = .5 * this.weight,
                        s = {
                            x: t.x - e.x,
                            y: t.y - e.y
                        },
                        n = Math.sqrt(Math.pow(s.x, 2) + Math.pow(s.y, 2));
                    if (n > i) {
                        const t = (n - i) / n,
                            a = {
                                x: s.x * t,
                                y: s.y * t
                            },
                            o = {
                                x: e.x + a.x,
                                y: e.y + a.y
                            };
                        this.addPoint(this.normalizePoint(o)), this.drawLines()
                    }
                }
                onEnd() {
                    if (!this.isInteracting) return null;
                    const t = {
                        color: this.color,
                        index: this.doodle.lines.length,
                        layer: this.layer,
                        points: n()(this.points, .5).map((t => ({
                            x: a.c.toPrecision(t.x, this.precision),
                            y: a.c.toPrecision(t.y, this.precision)
                        }))),
                        weight: this.weight
                    };
                    return this.isInteracting = !1, this.points = [], t
                }
            }
        },
        52265: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                default: () => Y
            });
            var s = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "jbg moderation"
                }, [t._m(0), t._v(" "), t.isConnected ? i("Moderate", t._b({
                    attrs: {
                        players: t.players
                    },
                    on: {
                        kick: t.setPlayerKicked
                    }
                }, "Moderate", t.ecastValues, !1)) : i("Authenticate", {
                    on: {
                        connectionChange: t.onConnectionChange
                    }
                })], 1)
            };
            s._withStripped = !0;
            var n = i(2934),
                a = i.n(n),
                o = i(45222),
                r = i(65853),
                c = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "authenticate"
                    }, [i("div", {
                        staticClass: "constrain"
                    }, [i("form", {
                        attrs: {
                            autocomplete: "off"
                        }
                    }, [i("fieldset", [i("label", {
                        attrs: {
                            name: "roomcode",
                            for: "roomcode",
                            type: "text"
                        }
                    }, [t._v(t._s(t.$t("ENTRY.ROOM_CODE")))]), t._v(" "), i("Input", {
                        attrs: {
                            id: "roomcode",
                            type: "text",
                            autocapitalize: "off",
                            autocorrect: "off",
                            autocomplete: "off",
                            placeholder: t.$t("ENTRY.ROOM_CODE_PLACEHOLDER"),
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
                    }), t._v(" "), i("label", {
                        attrs: {
                            name: "password",
                            for: "password",
                            type: "text"
                        }
                    }, [t._v(t._s(t.$t("PASSWORD")))]), t._v(" "), i("Input", {
                        attrs: {
                            id: "password",
                            type: "text",
                            autocapitalize: "off",
                            autocorrect: "off",
                            autocomplete: "off",
                            placeholder: t.$t("ENTRY.PASSWORD_PLACEHOLDER"),
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
                    }), t._v(" "), i("button", {
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
                    }, [i("span", [t._v(t._s(t.$t("MODERATE")))]), t._v(" "), i("div", {
                        staticClass: "loading"
                    })])], 1), t._v(" "), t.room ? [t.hasModeration ? t.room.moderationEnabled ? t._e() : i("p", {
                        staticClass: "warning"
                    }, [t._v("\n                    " + t._s(t.$t("WARNING_MODERATION_DISABLED")) + "\n                ")]) : i("p", {
                        staticClass: "warning"
                    }, [t._v("\n                    " + t._s(t.$t("WARNING_MODERATION_UNSUPPORTED", {
                        gameName: t.game && t.game.name
                    })) + "\n                ")])] : t._e()], 2)])])
                };
            c._withStripped = !0;
            var l = i(44285),
                d = i(21944),
                h = i(6305),
                u = i(89446),
                p = i(2720),
                m = i(12360);
            const v = {
                en: {
                    MODERATE: "Moderate",
                    PASSWORD: "Password",
                    APPROVE_ALL: "Approve All",
                    REJECT_ALL: "Reject All",
                    SUBMITTED_BY: "Submitted by:",
                    WAITING_FOR_SUBMISSIONS: "Waiting for submissions",
                    KICK: "Kick?",
                    KICKED: "Kicked",
                    WARNING_MODERATION_DISABLED: "The moderation setting for this game is turned off. Turn it on and restart the game to moderate content.",
                    WARNING_MODERATION_UNSUPPORTED: "{gameName} doesn't have anything to moderate, but thanks for wanting to help out!"
                },
                fr: {
                    MODERATE: "Modéré",
                    PASSWORD: "Mot de passe",
                    APPROVE_ALL: "Tout accepter",
                    REJECT_ALL: "Tout refuser",
                    SUBMITTED_BY: "Envoyée par :",
                    WAITING_FOR_SUBMISSIONS: "En attente de propositions",
                    WARNING_MODERATION_DISABLED: "Le paramètre de modération est désactivé pour cette partie. Activez-le et relancez le jeu pour modérer le contenu.",
                    WARNING_MODERATION_UNSUPPORTED: "Il n'y a rien à modérer dans {gameName}, mais merci d'avoir voulu aider !"
                },
                it: {
                    MODERATE: "Modera",
                    PASSWORD: "Password",
                    APPROVE_ALL: "Approva tutto",
                    REJECT_ALL: "Rifiuta tutto",
                    SUBMITTED_BY: "Inviato da:",
                    WAITING_FOR_SUBMISSIONS: "In attesa di invii",
                    WARNING_MODERATION_DISABLED: "La moderazione è disattivata per questo gioco. Per moderare i contenuti, attivala e riavvia il gioco.",
                    WARNING_MODERATION_UNSUPPORTED: "{gameName} non ha nulla da moderare, ma grazie per l'aiuto!"
                },
                de: {
                    MODERATE: "Moderieren",
                    PASSWORD: "Passwort",
                    APPROVE_ALL: "Alles erlauben",
                    REJECT_ALL: "Alles zurückweisen",
                    SUBMITTED_BY: "Gesendet von:",
                    WAITING_FOR_SUBMISSIONS: "Warte auf Einreichungen",
                    WARNING_MODERATION_DISABLED: "Moderation für dieses Spiel ist ausgeschaltet Schalte sie ein und starte das Spiel erneut, um Inhalte moderieren zu können.",
                    WARNING_MODERATION_UNSUPPORTED: "{gameName} hat keine zu moderierenden Inhalte, aber danke, dass du helfen wolltest!"
                },
                es: {
                    MODERATE: "Moderar",
                    PASSWORD: "Contraseña",
                    APPROVE_ALL: "Aprobar todo",
                    REJECT_ALL: "Rechazar todo",
                    SUBMITTED_BY: "Enviado por:",
                    WAITING_FOR_SUBMISSIONS: "Esperando aportaciones",
                    WARNING_MODERATION_DISABLED: "La moderación para este juego está desactivada. Actívala y reinicia el juego para moderar el contenido.",
                    WARNING_MODERATION_UNSUPPORTED: "{gameName} no tiene nada que moderar, ¡pero ¡gracias por querer ayudar!"
                },
                "es-XL": {
                    MODERATE: "Moderar",
                    PASSWORD: "Contraseña",
                    APPROVE_ALL: "Aprobar todo",
                    REJECT_ALL: "Rechazar todo",
                    SUBMITTED_BY: "Enviado por:",
                    WAITING_FOR_SUBMISSIONS: "Esperando aportaciones",
                    WARNING_MODERATION_DISABLED: "La moderación para esta partida está desactivada. Actívala y reinicia el juego para moderar el contenido.",
                    WARNING_MODERATION_UNSUPPORTED: "{gameName} no tiene nada que moderar, pero ¡gracias por querer ayudar!"
                }
            };
            var _ = function(t, e, i, s) {
                return new(i || (i = Promise))((function(n, a) {
                    function o(t) {
                        try {
                            c(s.next(t))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function r(t) {
                        try {
                            c(s.throw(t))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                            t(e)
                        }))).then(o, r)
                    }
                    c((s = s.apply(t, e || [])).next())
                }))
            };
            const g = a().extend({
                components: {
                    Input: h.Z
                },
                i18n: {
                    messages: v,
                    sharedMessages: r.s
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
                        return this.code.length === this.codeLength && this.password.length === this.passwordLength && !!this.hasModeration && !!(null === (t = this.room) || void 0 === t ? void 0 : t.moderationEnabled)
                    },
                    game() {
                        if (this.room) return (0, m.cF)(this.room.appTag)
                    },
                    hasModeration() {
                        var t, e, i;
                        return !!this.room && null !== (i = null === (e = null === (t = this.game) || void 0 === t ? void 0 : t.features) || void 0 === e ? void 0 : e.includes("moderation")) && void 0 !== i && i
                    }
                },
                beforeMount() {
                    this.$api = new l.APIClient({
                        host: u.c.serverUrl,
                        scheme: "https"
                    }), this.populateFromStorage()
                },
                methods: {
                    populateFromStorage() {
                        var t;
                        this.$storage.isSupported && (this.code = (null !== (t = this.$storage.get("mod-roomCode")) && void 0 !== t ? t : "").toUpperCase(), this.code.length === this.codeLength && this.getRoomInfo())
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
                        return _(this, void 0, void 0, (function*() {
                            try {
                                const t = yield this.$api.getRoom({
                                    code: this.code
                                });
                                this.room = t, d.o.setup(this.room.locale), this.$root.$i18n.locale = d.o.locale
                            } catch (t) {
                                console.warn(t), this.room = null
                            }
                        }))
                    },
                    connect() {
                        return _(this, void 0, void 0, (function*() {
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
                                },
                                e = new l.WSClient(t);
                            try {
                                this.isConnecting = !0;
                                const t = yield e.connect();
                                this.$clientWelcome = t, this.$ecast = e, this.$syncEcast(), this.$debug.setup(this.$ecast, this.room), this.$storage.isSupported && this.$storage.set("mod-roomCode", this.code), this.$emit("connectionChange", !0)
                            } catch (t) {
                                console.error("[SignIn]", t), this.onConnectionError(t)
                            } finally {
                                this.isConnecting = !1
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
            var f = i(51900),
                x = (0, f.Z)(g, c, [], !1, null, "2ea0b5fc", null);
            x.options.__file = "src/apps/entry/views/moderation/Authenticate.vue";
            const E = x.exports;
            var C = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "moderate"
                }, [i("div", {
                    staticClass: "constrain"
                }, [t.hasKicking ? i("div", {
                    staticClass: "player-container"
                }, t._l(t.players, (function(e) {
                    return i("div", {
                        key: "player-" + e.id,
                        staticClass: "player-item"
                    }, [i("span", {
                        staticClass: "player-name",
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }), t._v(" "), e.isKicked ? i("span", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "KICKED",
                            expression: "'KICKED'"
                        }],
                        staticClass: "kicked-message"
                    }) : i("button", {
                        staticClass: "kick-button",
                        on: {
                            click: function(i) {
                                return t.kick(e)
                            }
                        }
                    }, [i("span", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "KICK",
                            expression: "'KICK'"
                        }],
                        staticClass: "kick-button-text"
                    })])])
                })), 0) : t._e(), t._v(" "), i("div", {
                    staticClass: "top-buttons"
                }, [i("button", {
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
                }), t._v(" "), i("button", {
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
                })]), t._v(" "), t.items.length ? i("transition-group", {
                    staticClass: "items",
                    attrs: {
                        name: "items",
                        tag: "div"
                    }
                }, [t._l(t.items, (function(e) {
                    return ["animation" === e.type ? i("AnimationItem", {
                        key: e.key,
                        attrs: {
                            item: e
                        },
                        on: {
                            acceptClick: t.onAcceptClick,
                            rejectClick: t.onRejectClick
                        }
                    }) : "doodle" === e.type ? i("DoodleItem", {
                        key: e.key,
                        attrs: {
                            item: e
                        },
                        on: {
                            acceptClick: t.onAcceptClick,
                            rejectClick: t.onRejectClick
                        }
                    }) : "drawing" === e.type ? i("DrawingItem", {
                        key: e.key,
                        attrs: {
                            item: e
                        },
                        on: {
                            acceptClick: t.onAcceptClick,
                            rejectClick: t.onRejectClick
                        }
                    }) : "text" === e.type ? i("TextItem", {
                        key: e.key,
                        attrs: {
                            item: e
                        },
                        on: {
                            acceptClick: t.onAcceptClick,
                            rejectClick: t.onRejectClick
                        }
                    }) : t._e()]
                }))], 2) : i("div", {
                    staticClass: "empty"
                }, [i("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "WAITING_FOR_SUBMISSIONS",
                        expression: "'WAITING_FOR_SUBMISSIONS'"
                    }],
                    staticClass: "empty-text"
                }), t._v(" "), i("div", {
                    staticClass: "loading disabled"
                })])], 1)])
            };
            C._withStripped = !0;
            var y = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "item text",
                    class: t.item.status
                }, [i("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.htmlUnescape(t.item.context),
                        expression: "htmlUnescape(item.context)"
                    }],
                    staticClass: "context"
                }), t._v(" "), i("div", {
                    ref: "stage",
                    staticClass: "stage"
                }), t._v(" "), i("p", {
                    staticClass: "name"
                }, [t._v(t._s(t.$t("SUBMITTED_BY")) + " "), i("span", [t._v(t._s(t.item.name))])]), t._v(" "), i("div", {
                    staticClass: "item-buttons"
                }, [i("button", {
                    staticClass: "accept",
                    attrs: {
                        "aria-label": "accept"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("acceptClick", t.item)
                        }
                    }
                }), t._v(" "), i("button", {
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
            y._withStripped = !0;
            var I = i(32530);
            const w = a().extend({
                props: {
                    item: Object
                },
                mounted() {
                    const t = this.$refs.stage,
                        e = this.item.value.size.width,
                        i = this.item.value.frames || [],
                        s = new I.U(t, {
                            width: this.item.value.size.width * i.length,
                            height: this.item.value.size.height
                        }),
                        n = s.canvas.renderCanvas.getContext("2d");
                    n && i.forEach(((t, i) => {
                        n.save(), n.translate(e * i, 0), s.canvas.parseLines(t).forEach((t => s.canvas.drawLine(n, t))), n.restore()
                    }))
                },
                i18n: {
                    messages: v
                },
                methods: {
                    htmlUnescape: t => u.c.htmlUnescape(t)
                }
            });
            var A = (0, f.Z)(w, y, [], !1, null, "748ebaa0", null);
            A.options.__file = "src/apps/entry/views/moderation/AnimationItem.vue";
            const k = A.exports;
            var R = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "item text",
                    class: t.item.status
                }, [i("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.htmlUnescape(t.item.context),
                        expression: "htmlUnescape(item.context)"
                    }],
                    staticClass: "context"
                }), t._v(" "), i("div", {
                    staticClass: "stage",
                    style: {
                        background: t.item.value.background
                    }
                }, [i("img", {
                    attrs: {
                        src: t.itemSrc,
                        alt: ""
                    }
                })]), t._v(" "), i("p", {
                    staticClass: "name"
                }, [t._v(t._s(t.$t("SUBMITTED_BY")) + " "), i("span", [t._v(t._s(t.item.name))])]), t._v(" "), i("div", {
                    staticClass: "item-buttons"
                }, [i("button", {
                    staticClass: "accept",
                    attrs: {
                        "aria-label": "accept"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("acceptClick", t.item)
                        }
                    }
                }), t._v(" "), i("button", {
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
            R._withStripped = !0;
            var O = i(20854);
            const S = a().extend({
                props: {
                    item: Object
                },
                i18n: {
                    messages: v
                },
                data: () => ({
                    canvas: null
                }),
                computed: {
                    itemSrc() {
                        return this.canvas ? this.canvas.renderImage() : ""
                    }
                },
                mounted() {
                    this.canvas = new O.J(document.createElement("canvas"), this.item.value.doodle)
                },
                methods: {
                    htmlUnescape: t => u.c.htmlUnescape(t)
                }
            });
            var b = (0, f.Z)(S, R, [], !1, null, "1b51919a", null);
            b.options.__file = "src/apps/entry/views/moderation/DoodleItem.vue";
            const T = b.exports;
            var N = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "item text",
                    class: t.item.status
                }, [i("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.htmlUnescape(t.item.context),
                        expression: "htmlUnescape(item.context)"
                    }],
                    staticClass: "context"
                }), t._v(" "), i("div", {
                    ref: "stage",
                    staticClass: "stage"
                }), t._v(" "), i("p", {
                    staticClass: "name"
                }, [t._v(t._s(t.$t("SUBMITTED_BY")) + " "), i("span", [t._v(t._s(t.item.name))])]), t._v(" "), i("div", {
                    staticClass: "item-buttons"
                }, [i("button", {
                    staticClass: "accept",
                    attrs: {
                        "aria-label": "accept"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("acceptClick", t.item)
                        }
                    }
                }), t._v(" "), i("button", {
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
            N._withStripped = !0;
            const D = a().extend({
                props: {
                    item: Object
                },
                mounted() {
                    const t = this.$refs.stage,
                        e = new I.U(t, {
                            width: this.item.value.size.width,
                            height: this.item.value.size.height
                        }),
                        i = e.canvas.parseLines(this.item.value.lines),
                        s = e.canvas.renderCanvas.getContext("2d");
                    s && i.forEach((t => e.canvas.drawLine(s, t)))
                },
                i18n: {
                    messages: v
                },
                methods: {
                    htmlUnescape: t => u.c.htmlUnescape(t)
                }
            });
            var M = (0, f.Z)(D, N, [], !1, null, "5975197a", null);
            M.options.__file = "src/apps/entry/views/moderation/DrawingItem.vue";
            const $ = M.exports;
            var P = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "item text",
                    class: t.item.status
                }, [i("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.htmlUnescape(t.item.context),
                        expression: "htmlUnescape(item.context)"
                    }],
                    staticClass: "context"
                }), t._v(" "), i("p", {
                    staticClass: "value"
                }, [t._v(t._s(t.htmlUnescape(t.item.value)))]), t._v(" "), i("p", {
                    staticClass: "name"
                }, [t._v(t._s(t.$t("SUBMITTED_BY")) + " "), i("span", [t._v(t._s(t.item.name))])]), t._v(" "), i("div", {
                    staticClass: "item-buttons"
                }, [i("button", {
                    staticClass: "accept",
                    attrs: {
                        "aria-label": "accept"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("acceptClick", t.item)
                        }
                    }
                }), t._v(" "), i("button", {
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
            P._withStripped = !0;
            const L = a().extend({
                props: {
                    item: Object
                },
                i18n: {
                    messages: v
                },
                methods: {
                    htmlUnescape: t => u.c.htmlUnescape(t)
                }
            });
            var U = (0, f.Z)(L, P, [], !1, null, null, null);
            U.options.__file = "src/apps/entry/views/moderation/TextItem.vue";
            const j = U.exports;
            var W = function(t, e, i, s) {
                return new(i || (i = Promise))((function(n, a) {
                    function o(t) {
                        try {
                            c(s.next(t))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function r(t) {
                        try {
                            c(s.throw(t))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                            t(e)
                        }))).then(o, r)
                    }
                    c((s = s.apply(t, e || [])).next())
                }))
            };
            const B = a().extend({
                components: {
                    AnimationItem: k,
                    DoodleItem: T,
                    DrawingItem: $,
                    TextItem: j
                },
                props: {
                    items: {
                        default: () => [],
                        type: Array
                    },
                    players: Array
                },
                ecastProviders: {
                    items: {
                        hasDeepRefs: !0,
                        fn: t => {
                            const e = [];
                            return Object.keys(t).forEach((i => {
                                const s = i.split(":");
                                if ("moderate" !== s[0]) return;
                                const n = s[1];
                                if (!["animation", "doodle", "drawing", "text"].includes(n)) return;
                                const a = {
                                    key: i,
                                    type: n,
                                    status: t[i].status,
                                    name: t[i].name,
                                    value: t[i].value,
                                    context: ""
                                };
                                t[i].context && (t[i].context.bb ? a.context = t[i].context.bb : t[i].context.html ? a.context = u.c.htmlTagsToBBCode(t[i].context.html, [
                                    ["i", "i"]
                                ]) : t[i].context.text ? a.context = t[i].context.text : "string" == typeof t[i].context && (a.context = t[i].context)), e.push(a)
                            })), e
                        }
                    }
                },
                i18n: {
                    messages: v
                },
                data: () => ({
                    room: null
                }),
                computed: {
                    hasKicking() {
                        var t, e;
                        if (!this.room) return !1;
                        const i = (0, m.cF)(this.room.appTag);
                        return null !== (e = null === (t = null == i ? void 0 : i.features) || void 0 === t ? void 0 : t.includes("kicking")) && void 0 !== e && e
                    },
                    pendingItems() {
                        return this.items.filter((t => "pending" === t.status))
                    }
                },
                beforeMount() {
                    return W(this, void 0, void 0, (function*() {
                        try {
                            const t = yield this.$api.getRoom({
                                code: this.$ecast.code
                            });
                            this.room = t
                        } catch (t) {
                            console.warn(t), this.room = null
                        }
                    }))
                },
                methods: {
                    kick(t) {
                        return W(this, void 0, void 0, (function*() {
                            this.$emit("kick", {
                                id: t.id,
                                kickedValue: !0
                            }), yield this.$ecast.kick(t.id, !0).catch((e => {
                                this.$emit("kick", {
                                    id: t.id,
                                    kickedValue: !1
                                }), this.$handleEcastError(e)
                            }))
                        }))
                    },
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
                        return W(this, void 0, void 0, (function*() {
                            try {
                                const i = t.map((t => {
                                    const i = this.$ecast.entities[t.key].val;
                                    return i.status = e, this.$ecast.updateObject(t.key, i)
                                }));
                                yield Promise.all(i)
                            } catch (t) {
                                console.error("[Moderation] unable to update moderation entities", t)
                            }
                            try {
                                yield this.$ecast.mail(1, {
                                    id: t.map((t => t.key)),
                                    status: e
                                })
                            } catch (t) {
                                console.error("[Moderation] unable to notify host by mail", t)
                            }
                            this.$syncEcast()
                        }))
                    }
                }
            });
            var K = (0, f.Z)(B, C, [], !1, null, "7686b6ac", null);
            K.options.__file = "src/apps/entry/views/moderation/Moderate.vue";
            const G = K.exports;
            var z = function(t, e, i, s) {
                return new(i || (i = Promise))((function(n, a) {
                    function o(t) {
                        try {
                            c(s.next(t))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function r(t) {
                        try {
                            c(s.throw(t))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                            t(e)
                        }))).then(o, r)
                    }
                    c((s = s.apply(t, e || [])).next())
                }))
            };
            const F = a().extend({
                components: {
                    Authenticate: E,
                    Moderate: G
                },
                mixins: [o.e],
                i18n: {
                    messages: v,
                    sharedMessages: r.s
                },
                data: () => ({
                    isConnected: !1,
                    players: []
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
                        })), this.$ecast.on("client/connected", (t => {
                            if ("player" === t.role) {
                                const e = this.players.findIndex((e => e.id === t.id)); - 1 === e ? this.players.push({
                                    name: t.name,
                                    id: t.id,
                                    isKicked: !1
                                }) : this.players[e].isKicked = !1
                            }
                        })), this.$ecast.on("client/kicked", (t => {
                            this.setPlayerKicked({
                                id: t.id,
                                kickedValue: !0
                            })
                        })), this.$ecast.on("client/disconnected", (t => {
                            const e = this.players.findIndex((e => e.id === t.id)); - 1 === e || this.players[e].isKicked || this.players.splice(e, 1)
                        })), Object.values(this.$clientWelcome.here).forEach((t => {
                            t.roles.player && this.players.push({
                                name: t.roles.player.name,
                                id: t.id,
                                isKicked: t.roles.kicked
                            })
                        })))
                    },
                    setPlayerKicked(t) {
                        const e = this.players.findIndex((e => e.id === t.id));
                        this.players[e].isKicked = t.kickedValue
                    },
                    onRoomExit() {
                        return z(this, void 0, void 0, (function*() {
                            yield this.$showModal("Error", {
                                text: this.$t("ERROR.ROOM_DISCONNECTED"),
                                subtext: this.$t("ERROR.ROOM_DESTROYED"),
                                dismissText: this.$t("ACTION.OK")
                            }), window.location.reload()
                        }))
                    },
                    onSocketCloseEvent() {
                        return z(this, void 0, void 0, (function*() {
                            this.$storage.isSupported && this.$storage.remove("mod-roomCode"), yield this.$showModal("Error", {
                                text: this.$t("ERROR.DISCONNECTED"),
                                dismissText: this.$t("ACTION.OK")
                            }), window.location.reload()
                        }))
                    }
                }
            });
            var V = (0, f.Z)(F, s, [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("header", {
                    staticClass: "header"
                }, [e("div", {
                    staticClass: "logo"
                })])
            }], !1, null, "05d701e0", null);
            V.options.__file = "src/apps/entry/views/moderation/Main.vue";
            const Y = V.exports
        },
        6305: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => c
            });
            var s = function() {
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
            s._withStripped = !0;
            var n = i(2934),
                a = i.n(n);
            const o = a().extend({
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
                        return e = this, i = void 0, n = function*() {
                            const e = t.target;
                            if (!(null == e ? void 0 : e.value)) return;
                            const i = -1 === e.maxLength ? Number.MAX_SAFE_INTEGER : e.maxLength;
                            e.value.length > i ? e.value = e.value.substring(0, i) : (this.$emit("input", e.value), yield a().nextTick(), e.value !== this.value && (e.value = this.value))
                        }, new((s = void 0) || (s = Promise))((function(t, a) {
                            function o(t) {
                                try {
                                    c(n.next(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function r(t) {
                                try {
                                    c(n.throw(t))
                                } catch (t) {
                                    a(t)
                                }
                            }

                            function c(e) {
                                var i;
                                e.done ? t(e.value) : (i = e.value, i instanceof s ? i : new s((function(t) {
                                    t(i)
                                }))).then(o, r)
                            }
                            c((n = n.apply(e, i || [])).next())
                        }));
                        var e, i, s, n
                    }
                }
            });
            var r = (0, i(51900).Z)(o, s, [], !1, null, null, null);
            r.options.__file = "src/apps/vue/components/Input.vue";
            const c = r.exports
        }
    }
]);
//# sourceMappingURL=sourcemaps/2265.3c132874f3e7407a1c8f.js.map