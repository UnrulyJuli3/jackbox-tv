(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/prototype"], {
        20854: (t, e, s) => {
            "use strict";
            s.d(e, {
                J: () => o
            });
            var i = s(16479),
                n = s.n(i),
                a = s(89446);
            class o {
                constructor(t, e, s) {
                    var i, n, a, o, l;
                    this.DEFAULT_WIDTH = 400, this.DEFAULT_HEIGHT = 400, this.color = "#000", this.layer = 0, this.layers = 1, this.maxPoints = Number.MAX_SAFE_INTEGER, this.points = [], this.precision = 2, this.scale = {
                        width: 1,
                        height: 1
                    }, this.weight = 4, this.isInteracting = !1, (null == s ? void 0 : s.color) && (this.color = s.color), (null == s ? void 0 : s.layer) && (this.layer = s.layer), (null == s ? void 0 : s.layers) && (this.layers = s.layers), (null == s ? void 0 : s.maxPoints) && (this.maxPoints = s.maxPoints), (null == s ? void 0 : s.precision) && (this.precision = s.precision), (null == s ? void 0 : s.scale) && (this.scale = s.scale), (null == s ? void 0 : s.weight) && (this.weight = s.weight), t.width = (null !== (n = null === (i = e.size) || void 0 === i ? void 0 : i.width) && void 0 !== n ? n : this.DEFAULT_WIDTH) * this.scale.width, t.height = (null !== (o = null === (a = e.size) || void 0 === a ? void 0 : a.height) && void 0 !== o ? o : this.DEFAULT_HEIGHT) * this.scale.height, this.canvas = t, this.ctx = t.getContext("2d"), null === (l = this.ctx) || void 0 === l || l.scale(this.scale.width, this.scale.height), this.doodle = e, this.drawLines()
                }
                addPoint(t) {
                    this.points.push(t)
                }
                normalizePoint(t) {
                    const e = {
                            x: t.x / this.scale.width,
                            y: t.y / this.scale.height
                        },
                        s = {
                            x: Math.min(Math.max(.5 * this.weight, e.x), this.canvas.width / this.scale.width - .5 * this.weight),
                            y: Math.min(Math.max(.5 * this.weight, e.y), this.canvas.height / this.scale.height - .5 * this.weight)
                        };
                    return {
                        x: a.c.toPrecision(s.x, this.precision),
                        y: a.c.toPrecision(s.y, this.precision)
                    }
                }
                drawLines() {
                    if (this.ctx) {
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        for (let t = 0; t < this.layers; t++) Object.values(this.doodle.lines).filter((e => {
                            var s;
                            return (null !== (s = e.layer) && void 0 !== s ? s : 0) === t
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
                    this.ctx && (this.ctx.fillStyle = t.color, this.ctx.strokeStyle = t.color, this.ctx.lineCap = "round", this.ctx.lineJoin = "round", this.ctx.lineWidth = t.weight, this.ctx.beginPath(), t.points.forEach(((e, s) => {
                        1 === t.points.length && 0 === s && (this.ctx.save(), this.ctx.arc(e.x, e.y, t.weight / 2, 0, 2 * Math.PI), this.ctx.fill(), this.ctx.restore(), this.ctx.beginPath()), this.ctx.lineTo(e.x, e.y)
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
                    const s = .5 * this.weight,
                        i = {
                            x: t.x - e.x,
                            y: t.y - e.y
                        },
                        n = Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2));
                    if (n > s) {
                        const t = (n - s) / n,
                            a = {
                                x: i.x * t,
                                y: i.y * t
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
        83933: (t, e, s) => {
            "use strict";
            s.d(e, {
                Z: () => h
            });
            var i = function() {
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
            i._withStripped = !0;
            var n = s(2934),
                a = s.n(n),
                o = s(65853),
                l = function(t, e, s, i) {
                    return new(s || (s = Promise))((function(n, a) {
                        function o(t) {
                            try {
                                r(i.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function l(t) {
                            try {
                                r(i.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function r(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                t(e)
                            }))).then(o, l)
                        }
                        r((i = i.apply(t, e || [])).next())
                    }))
                };
            const r = a().extend({
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
                        var t, e, s, i, n, a;
                        return {
                            message: null !== (e = null === (t = this.classes) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "message",
                            status: null !== (i = null === (s = this.classes) || void 0 === s ? void 0 : s.status) && void 0 !== i ? i : "status",
                            action: null !== (a = null === (n = this.classes) || void 0 === n ? void 0 : n.action) && void 0 !== a ? a : "action"
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
            var c = (0, s(51900).Z)(r, i, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/PostGameActions.vue";
            const h = c.exports
        },
        3317: (t, e, s) => {
            "use strict";
            s.d(e, {
                Z: () => u
            });
            var i = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "doodle"
                }, [s("div", {
                    directives: [{
                        name: "pointerBox",
                        rawName: "v-pointerBox"
                    }],
                    staticClass: "stage",
                    on: {
                        pointerboxstart: t.onPointerBoxStart,
                        pointerboxmove: t.onPointerBoxMove,
                        pointerboxend: t.onPointerBoxEnd
                    }
                }, [s("canvas", {
                    directives: [{
                        name: "pointerboxtranslate",
                        rawName: "v-pointerboxtranslate",
                        value: {
                            id: "doodleCanvas",
                            width: t.pointerBoxWidth,
                            height: t.pointerBoxHeight
                        },
                        expression: "{\n                id: 'doodleCanvas',\n                width: pointerBoxWidth,\n                height: pointerBoxHeight\n            }"
                    }],
                    ref: "canvas"
                })]), t._v(" "), t.hideUndo ? t._e() : s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.UNDO",
                        expression: "'ACTION.UNDO'"
                    }],
                    attrs: {
                        disabled: !t.canSubmit
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onUndo.apply(null, arguments)
                        }
                    }
                }), t._v(" "), t.hideSubmit ? t._e() : s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.SUBMIT",
                        expression: "'ACTION.SUBMIT'"
                    }],
                    attrs: {
                        disabled: !t.canSubmit
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                })])
            };
            i._withStripped = !0;
            var n = s(2934),
                a = s.n(n),
                o = s(20854),
                l = s(19734),
                r = s(65853),
                c = function(t, e, s, i) {
                    return new(s || (s = Promise))((function(n, a) {
                        function o(t) {
                            try {
                                r(i.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function l(t) {
                            try {
                                r(i.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function r(t) {
                            var e;
                            t.done ? n(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                t(e)
                            }))).then(o, l)
                        }
                        r((i = i.apply(t, e || [])).next())
                    }))
                };
            a().use(l.O);
            const h = a().extend({
                props: {
                    canvasOptions: Object,
                    hideSubmit: Boolean,
                    hideUndo: Boolean,
                    player: Object
                },
                i18n: {
                    messages: r.s
                },
                data: () => ({
                    canvas: null,
                    isSubmitting: !1,
                    isUndoing: !1
                }),
                computed: {
                    canSubmit() {
                        return !(this.isSubmitting || this.isUndoing || this.player.doodle.lines.length <= 0)
                    },
                    pointerBoxWidth() {
                        var t, e, s;
                        let i = 320;
                        return (null === (t = this.player.doodle.size) || void 0 === t ? void 0 : t.width) && (i = this.player.doodle.size.width), i * (null !== (s = null === (e = this.canvasOptions.scale) || void 0 === e ? void 0 : e.width) && void 0 !== s ? s : 1)
                    },
                    pointerBoxHeight() {
                        var t, e, s;
                        let i = 320;
                        return (null === (t = this.player.doodle.size) || void 0 === t ? void 0 : t.height) && (i = this.player.doodle.size.height), i * (null !== (s = null === (e = this.canvasOptions.scale) || void 0 === e ? void 0 : e.height) && void 0 !== s ? s : 1)
                    }
                },
                watch: {
                    canvasOptions: function(t) {
                        var e, s, i, n, a, o, l;
                        this.canvas && (this.canvas.color = null !== (e = t.color) && void 0 !== e ? e : "#000000", this.canvas.layer = null !== (s = t.layer) && void 0 !== s ? s : 0, this.canvas.layers = null !== (i = t.layers) && void 0 !== i ? i : 1, this.canvas.maxPoints = null !== (n = t.maxPoints) && void 0 !== n ? n : Number.MAX_SAFE_INTEGER, this.canvas.precision = null !== (a = t.precision) && void 0 !== a ? a : 2, this.canvas.scale = null !== (o = t.scale) && void 0 !== o ? o : {
                            width: 1,
                            height: 1
                        }, this.canvas.weight = null !== (l = t.weight) && void 0 !== l ? l : 4)
                    },
                    "player.doodle": function() {
                        this.canvas && (this.canvas.doodle = this.player.doodle)
                    },
                    "player.doodle.key": function() {
                        this.createCanvas()
                    },
                    "player.doodle.lines": function() {
                        this.canvas && this.canvas.drawLines()
                    }
                },
                mounted() {
                    this.createCanvas()
                },
                methods: {
                    createCanvas() {
                        const t = this.$refs.canvas;
                        this.canvas = new o.J(t, this.player.doodle, this.canvasOptions)
                    },
                    onPointerBoxStart(t) {
                        if (!this.canvas) return;
                        const e = {
                            x: t.detail.translations.doodleCanvas.x,
                            y: t.detail.translations.doodleCanvas.y
                        };
                        this.canvas.onStart(e)
                    },
                    onPointerBoxMove(t) {
                        if (!this.canvas) return;
                        const e = {
                            x: t.detail.translations.doodleCanvas.x,
                            y: t.detail.translations.doodleCanvas.y
                        };
                        this.canvas.onMove(e)
                    },
                    onPointerBoxEnd() {
                        return c(this, void 0, void 0, (function*() {
                            if (!this.canvas) return;
                            const t = this.canvas.onEnd();
                            if (t) try {
                                yield this.$ecast.strokeDoodle(this.player.doodle.key, t)
                            } catch (t) {
                                this.$handleEcastError(t)
                            }
                        }))
                    },
                    onSubmit() {
                        return c(this, void 0, void 0, (function*() {
                            this.isSubmitting = !0;
                            try {
                                yield this.$ecast.lock(this.player.doodle.key)
                            } catch (t) {
                                this.isSubmitting = !1, this.$handleEcastError(t)
                            }
                        }))
                    },
                    onUndo() {
                        return c(this, void 0, void 0, (function*() {
                            if (this.canvas) {
                                this.isUndoing = !0;
                                try {
                                    yield this.$ecast.undoDoodle(this.player.doodle.key)
                                } catch (t) {
                                    this.$handleEcastError(t)
                                } finally {
                                    this.isUndoing = !1
                                }
                            }
                        }))
                    }
                }
            });
            var p = (0, s(51900).Z)(h, i, [], !1, null, null, null);
            p.options.__file = "src/apps/vue/components/base/Doodle.vue";
            const u = p.exports
        },
        17819: (t, e, s) => {
            "use strict";
            s.d(e, {
                Z: () => h
            });
            var i = function() {
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
            i._withStripped = !0;
            var n = s(2934),
                a = s.n(n),
                o = s(32530),
                l = s(96486);
            const r = a().extend({
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
                            i = e.parentElement.getBoundingClientRect(),
                            n = Math.max(.9 * i.width, 240),
                            a = Math.max(this.windowHeight - t.height + s.height, 240),
                            o = this.stage.canvas.width,
                            l = this.stage.canvas.height,
                            r = Math.min(n / o, a / l);
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
            var c = (0, s(51900).Z)(r, i, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/base/Draw.vue";
            const h = c.exports
        },
        74634: (t, e, s) => {
            "use strict";
            s.d(e, {
                Z: () => l
            });
            var i = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "waiting"
                }, [s("div", {
                    staticClass: "constrain"
                }, [t.player.message ? s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.message,
                        expression: "player.message"
                    }]
                }) : t._e()])])
            };
            i._withStripped = !0;
            var n = s(2934);
            const a = s.n(n)().extend({
                props: {
                    player: Object
                }
            });
            var o = (0, s(51900).Z)(a, i, [], !1, null, null, null);
            o.options.__file = "src/apps/vue/components/base/Waiting.vue";
            const l = o.exports
        },
        87986: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                default: () => pt
            });
            var i = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "main",
                    class: t.classes,
                    style: t.themeStyle
                }, [t.player ? s("div", {
                    staticClass: "player",
                    class: t.player.classes
                }, [s("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.player.name))])]) : t._e(), t._v(" "), t.player ? s("Fallbacks", {
                    attrs: {
                        player: t.player
                    }
                }) : t._e(), t._v(" "), t.components ? s("div", {
                    staticClass: "constrain"
                }, t._l(t.components.components, (function(t, e) {
                    return s(t.type + "El", {
                        key: e,
                        tag: "component",
                        staticClass: "component",
                        attrs: {
                            component: t
                        }
                    })
                })), 1) : t._e()], 1)
            };
            i._withStripped = !0;
            var n = s(2934),
                a = s.n(n),
                o = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return t.player ? s(t.player.kind, {
                        tag: "component",
                        class: {
                            fallback: t.applyStyling
                        },
                        attrs: {
                            player: t.player
                        }
                    }) : t._e()
                };
            o._withStripped = !0;
            var l = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "choices"
                }, [s("div", {
                    staticClass: "constrain"
                }, [t.player.prompt ? s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : t._e(), t._v(" "), t._l(t.player.choices, (function(e, i) {
                    return s("button", {
                        key: i,
                        class: {
                            selected: e.isSelected
                        },
                        attrs: {
                            disabled: e.isDisabled
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onChoiceClick(i)
                            }
                        }
                    }, [t._v("\n            " + t._s(e.text) + "\n        ")])
                }))], 2)])
            };
            l._withStripped = !0;
            const r = a().extend({
                props: {
                    player: Object
                },
                methods: {
                    onChoiceClick(t) {
                        var e, s, i;
                        const n = this.player.choices[t];
                        if (n.send) return void this.$ecast.updateObject(this.player.responseKey, n.send).catch(this.$handleEcastError);
                        const a = {
                            action: null !== (e = this.player.action) && void 0 !== e ? e : "choice",
                            [null !== (s = this.player.key) && void 0 !== s ? s : "value"]: null !== (i = n.value) && void 0 !== i ? i : t
                        };
                        this.$ecast.updateObject(this.player.responseKey, a).catch(this.$handleEcastError)
                    }
                }
            });
            var c = s(51900),
                h = (0, c.Z)(r, l, [], !1, null, null, null);
            h.options.__file = "src/apps/vue/components/base/Choices.vue";
            const p = h.exports;
            var u = s(3317),
                d = s(17819),
                v = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "lobby"
                    }, [s("div", {
                        staticClass: "constrain"
                    }, [s("LobbyActions", {
                        attrs: {
                            player: t.player
                        }
                    })], 1)])
                };
            v._withStripped = !0;
            var m = s(13494);
            const y = a().extend({
                components: {
                    LobbyActions: m.Z
                },
                props: {
                    player: Object
                }
            });
            var b = (0, c.Z)(y, v, [], !1, null, null, null);
            b.options.__file = "src/apps/vue/components/base/Lobby.vue";
            const g = b.exports;
            var _ = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "post-game"
                }, [s("div", {
                    staticClass: "constrain"
                }, [s("PostGameActions", {
                    attrs: {
                        player: t.player
                    }
                })], 1)])
            };
            _._withStripped = !0;
            var x = s(83933);
            const f = a().extend({
                components: {
                    PostGameActions: x.Z
                },
                props: {
                    player: Object
                }
            });
            var w = (0, c.Z)(f, _, [], !1, null, null, null);
            w.options.__file = "src/apps/vue/components/base/PostGame.vue";
            const E = w.exports;
            var C = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "single-text-entry"
                }, [s("div", {
                    staticClass: "constrain"
                }, [t.player.prompt ? s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : t._e(), t._v(" "), t.player.label ? s("label", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.label,
                        expression: "player.label"
                    }],
                    attrs: {
                        for: "input"
                    }
                }) : t._e(), t._v(" "), t.player.isMultiline ? s("textarea", {
                    attrs: {
                        id: "input",
                        rows: t.player.lines || 2,
                        placeholder: t.player.placeholder,
                        disabled: t.player.isDisabled
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: t.onValueInput
                    }
                }) : s("input", {
                    attrs: {
                        id: "input",
                        type: "text",
                        placeholder: t.player.placeholder,
                        disabled: t.player.isDisabled
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: t.onValueInput
                    }
                }), t._v(" "), s("button", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.submitText || "SUBMIT",
                        expression: "player.submitText || 'SUBMIT'"
                    }],
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                })])])
            };
            C._withStripped = !0;
            var S = s(44285);
            const O = a().extend({
                props: {
                    player: Object
                },
                data: () => ({
                    value: ""
                }),
                methods: {
                    onValueInput(t) {
                        const e = t.target;
                        this.value = e.value
                    },
                    isObjectResponseKey() {
                        if (!this.player.responseType) {
                            const t = this.$ecast.entities[this.player.responseKey];
                            if (t && t instanceof S.ObjectEntity) return !0
                        }
                        return "object" === this.player.responseType
                    },
                    onSubmitClick() {
                        this.isObjectResponseKey() ? this.sendAsObject() : this.sendAsText()
                    },
                    sendAsObject() {
                        const t = this.player.send || {
                            action: this.player.action || "input"
                        };
                        t[this.player.key || "value"] = this.value, this.$ecast.updateObject(this.player.responseKey, t).catch(this.$handleEcastError)
                    },
                    sendAsText() {
                        this.$ecast.updateText(this.player.responseKey, this.value).catch(this.$handleEcastError)
                    }
                }
            });
            var k = (0, c.Z)(O, C, [], !1, null, null, null);
            k.options.__file = "src/apps/vue/components/base/SingleTextEntry.vue";
            const $ = k.exports;
            var P = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "multi-text-entry"
                }, [s("div", {
                    staticClass: "constrain"
                }, [t.player.prompt ? s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : t._e(), t._v(" "), t._l(t.player.inputs, (function(e, i) {
                    return [e.label ? s("label", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.label,
                            expression: "input.label"
                        }],
                        key: "label-" + e.key,
                        attrs: {
                            for: "input-" + i
                        }
                    }) : t._e(), t._v(" "), e.isMultiline ? s("textarea", {
                        key: "input-" + i,
                        attrs: {
                            id: "input-" + i,
                            rows: e.lines || 2,
                            placeholder: e.placeholder,
                            disabled: e.isDisabled
                        },
                        domProps: {
                            value: t.values[i]
                        },
                        on: {
                            input: function(e) {
                                return t.onValueInput(e, i)
                            }
                        }
                    }) : s("input", {
                        key: "input-" + e.key,
                        attrs: {
                            id: "input-" + i,
                            type: "text",
                            placeholder: e.placeholder,
                            disabled: e.isDisabled
                        },
                        domProps: {
                            value: t.values[i]
                        },
                        on: {
                            input: function(e) {
                                return t.onValueInput(e, i)
                            }
                        }
                    })]
                })), t._v(" "), s("button", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.submitText || "SUBMIT",
                        expression: "player.submitText || 'SUBMIT'"
                    }],
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                })], 2)])
            };
            P._withStripped = !0;
            const T = a().extend({
                props: {
                    player: Object
                },
                data: () => ({
                    values: []
                }),
                beforeMount() {
                    this.values = this.player.inputs.map((t => {
                        var e;
                        return null !== (e = t.value) && void 0 !== e ? e : ""
                    }))
                },
                methods: {
                    onValueInput(t, e) {
                        const s = t.target;
                        this.values[e] = s.value
                    },
                    isObjectResponseKey() {
                        if (!this.player.responseType) {
                            const t = this.$ecast.entities[this.player.responseKey];
                            if (t && t instanceof S.ObjectEntity) return !0
                        }
                        return "object" === this.player.responseType
                    },
                    onSubmitClick() {
                        this.isObjectResponseKey() ? this.sendAsObject() : this.sendAsText()
                    },
                    sendAsObject() {
                        const t = this.player.send || {
                            action: this.player.action || "input"
                        };
                        this.player.inputs.forEach(((e, s) => {
                            var i;
                            const n = null !== (i = e.key) && void 0 !== i ? i : `input${s}`;
                            t[n] = this.values[s]
                        })), this.$ecast.updateObject(this.player.responseKey, t).catch(this.$handleEcastError)
                    },
                    sendAsText() {
                        const t = this.player.separator || "|";
                        this.$ecast.updateText(this.player.responseKey, this.values.join(t)).catch(this.$handleEcastError)
                    }
                }
            });
            var A = (0, c.Z)(T, P, [], !1, null, null, null);
            A.options.__file = "src/apps/vue/components/base/MultiTextEntry.vue";
            const I = A.exports;
            var N = s(74634);
            const D = a().extend({
                components: {
                    Choices: p,
                    Doodle: u.Z,
                    Draw: d.Z,
                    Lobby: g,
                    PostGame: E,
                    SingleTextEntry: $,
                    MultiTextEntry: I,
                    Waiting: N.Z
                },
                props: {
                    applyStyling: {
                        type: Boolean,
                        default: !0
                    },
                    player: Object
                }
            });
            var j = (0, c.Z)(D, o, [], !1, null, null, null);
            j.options.__file = "src/apps/vue/components/Fallbacks.vue";
            const B = j.exports;
            var M = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    class: t.component.classes
                }, t._l(t.component.choices, (function(e, i) {
                    return s("button", {
                        key: i,
                        staticClass: "choice",
                        class: e.classes,
                        attrs: {
                            disabled: e.isDisabled
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onChoiceClick(i)
                            }
                        }
                    }, [t._v("\n        " + t._s(e.text) + "\n    ")])
                })), 0)
            };
            M._withStripped = !0;
            const L = a().extend({
                props: {
                    component: Object
                },
                methods: {
                    classesForChoice(t) {
                        const e = t.classes || [];
                        t.isSelected && e.push("selected")
                    },
                    onChoiceClick(t) {
                        var e, s, i;
                        const n = this.component.choices[t];
                        if (n.send) return void(this.component.responseEntity ? this.$ecast.updateObject(this.component.responseEntity, n.send).catch(this.$handleEcastError) : this.$ecast.mail(1, n.send).catch(this.$handleEcastError));
                        const a = {
                            action: null !== (e = this.component.action) && void 0 !== e ? e : "choice",
                            [null !== (s = this.component.key) && void 0 !== s ? s : "value"]: null !== (i = n.value) && void 0 !== i ? i : t
                        };
                        this.component.responseEntity ? this.$ecast.updateObject(this.component.responseEntity, a).catch(this.$handleEcastError) : this.$ecast.mail(1, a).catch(this.$handleEcastError)
                    }
                }
            });
            var U = (0, c.Z)(L, M, [], !1, null, null, null);
            U.options.__file = "src/games/internal/prototype/views/Choices.vue";
            const Z = U.exports;
            var G = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    class: t.component.classes,
                    attrs: {
                        id: "doodle"
                    }
                }, [t.component.prompt ? s("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.component.prompt,
                        expression: "component.prompt"
                    }]
                }) : t._e(), t._v(" "), s("div", {
                    attrs: {
                        id: "tools"
                    }
                }, [t.component.doodles.length > 1 ? s("div", {
                    attrs: {
                        id: "frames"
                    }
                }, [s("span", [t._v("Frame:")]), t._v(" "), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.frame,
                        expression: "frame"
                    }],
                    attrs: {
                        name: "frame"
                    },
                    on: {
                        change: function(e) {
                            var s = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                return "_value" in t ? t._value : t.value
                            }));
                            t.frame = e.target.multiple ? s : s[0]
                        }
                    }
                }, t._l(t.component.doodles, (function(e, i) {
                    return s("option", {
                        key: "doodle-" + i,
                        domProps: {
                            value: i
                        }
                    }, [t._v("\n                    " + t._s(i) + "\n                ")])
                })), 0)]) : t._e(), t._v(" "), t.component.layers ? s("div", {
                    attrs: {
                        id: "layers"
                    }
                }, [s("span", [t._v("Layer:")]), t._v(" "), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.layer,
                        expression: "layer"
                    }],
                    attrs: {
                        name: "layer"
                    },
                    on: {
                        change: function(e) {
                            var s = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                return "_value" in t ? t._value : t.value
                            }));
                            t.layer = e.target.multiple ? s : s[0]
                        }
                    }
                }, t._l(t.component.layers, (function(e) {
                    return s("option", {
                        key: "layer-" + e,
                        domProps: {
                            value: e - 1
                        }
                    }, [t._v("\n                    " + t._s(e - 1) + "\n                ")])
                })), 0)]) : t._e(), t._v(" "), t.activeDoodle.weights && t.activeDoodle.weights.length ? s("div", {
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
                        click: t.onChangeWeight
                    }
                }, [s("div", {
                    staticClass: "circle",
                    style: {
                        width: t.weight + "px",
                        height: t.weight + "px",
                        backgroundColor: t.color,
                        borderRadius: "50%"
                    }
                })])]) : t._e(), t._v(" "), t.activeDoodle.colors && t.activeDoodle.colors.length ? s("div", {
                    attrs: {
                        id: "colors"
                    }
                }, t._l(t.activeDoodle.colors, (function(e, i) {
                    return s("input", {
                        key: "color-" + i,
                        staticClass: "color",
                        style: {
                            backgroundColor: e
                        },
                        attrs: {
                            "aria-label": "color " + e,
                            "data-color": e,
                            name: "colors",
                            type: "radio"
                        },
                        domProps: {
                            checked: i === t.colorIndex
                        },
                        on: {
                            change: function(e) {
                                return t.onChangeColor(i)
                            }
                        }
                    })
                })), 0) : t._e()]), t._v(" "), s("div", {
                    attrs: {
                        id: "doodles"
                    }
                }, t._l(t.component.doodles, (function(e, i) {
                    return s("BaseDoodle", {
                        key: "doodle-" + i,
                        class: {
                            inactive: i !== t.frame
                        },
                        attrs: {
                            "canvas-options": t.canvasOptions,
                            player: {
                                doodle: e
                            },
                            "hide-submit": ""
                        }
                    })
                })), 1), t._v(" "), s("div", {
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
                        disabled: t.isSubmitting
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                })])])
            };
            G._withStripped = !0;
            var R = s(65853);
            const z = a().extend({
                components: {
                    BaseDoodle: u.Z
                },
                props: {
                    component: Object
                },
                i18n: {
                    messages: R.s
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
                        var t, e;
                        return null !== (e = null === (t = this.activeDoodle.colors) || void 0 === t ? void 0 : t[this.colorIndex]) && void 0 !== e ? e : "#000000"
                    },
                    weight() {
                        var t, e;
                        return null !== (e = null === (t = this.activeDoodle.weights) || void 0 === t ? void 0 : t[this.weightIndex]) && void 0 !== e ? e : 4
                    }
                },
                methods: {
                    onChangeColor(t) {
                        var e;
                        (null === (e = this.activeDoodle.colors) || void 0 === e ? void 0 : e.length) && (this.colorIndex = t)
                    },
                    onChangeWeight() {
                        var t;
                        (null === (t = this.activeDoodle.weights) || void 0 === t ? void 0 : t.length) && (this.weightIndex = (this.weightIndex + 1) % this.activeDoodle.weights.length)
                    },
                    onSubmit() {
                        this.isSubmitting = !0, this.component.doodles.forEach((t => {
                            this.$ecast.lock(t.key).catch((t => {
                                this.isSubmitting = !1, this.$handleEcastError(t)
                            }))
                        }))
                    }
                }
            });
            var K = (0, c.Z)(z, G, [], !1, null, null, null);
            K.options.__file = "src/games/internal/prototype/views/Doodle.vue";
            const W = K.exports;
            var F = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "draw"
                }, [e("div", {
                    ref: "stage",
                    staticClass: "stage"
                })])
            };
            F._withStripped = !0;
            var H = s(32530);
            const Y = a().extend({
                props: {
                    component: Object
                },
                data: () => ({
                    stage: null
                }),
                mounted() {
                    const t = this.$refs.stage,
                        e = {};
                    this.component.size && (e.width = this.component.size.width, e.height = this.component.size.height), this.component.lines && (e.lines = this.component.lines), this.stage = new H.U(t, e)
                }
            });
            var V = (0, c.Z)(Y, F, [], !1, null, null, null);
            V.options.__file = "src/games/internal/prototype/views/Draw.vue";
            const J = V.exports;
            var X = function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("img", {
                    class: t.component.classes,
                    attrs: {
                        src: t.component.url || t.component.image,
                        alt: "Image"
                    }
                })
            };
            X._withStripped = !0;
            const q = a().extend({
                props: {
                    component: Object
                }
            });
            var Q = (0, c.Z)(q, X, [], !1, null, null, null);
            Q.options.__file = "src/games/internal/prototype/views/Image.vue";
            const tt = Q.exports;
            var et = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "inputs",
                    class: t.component.classes
                }, [t._l(t.component.inputs, (function(e, i) {
                    return [e.label ? s("label", {
                        key: i,
                        class: e.classes,
                        attrs: {
                            for: "input-" + i
                        }
                    }, [t._v("\n            " + t._s(e.label) + "\n        ")]) : t._e(), t._v(" "), "textarea" === e.type ? s("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.values[i],
                            expression: "values[index]"
                        }],
                        key: i,
                        class: e.classes,
                        attrs: {
                            id: "input-" + i,
                            placeholder: e.placeholder,
                            rows: e.rows || 2
                        },
                        domProps: {
                            value: t.values[i]
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.values, i, e.target.value)
                            }
                        }
                    }) : s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.values[i],
                            expression: "values[index]"
                        }],
                        key: i,
                        class: e.classes,
                        attrs: {
                            type: "text",
                            placeholder: e.placeholder
                        },
                        domProps: {
                            value: t.values[i]
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.values, i, e.target.value)
                            }
                        }
                    })]
                })), t._v(" "), t.component.submit ? s("button", {
                    class: t.component.submit.classes,
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [t._v("\n        " + t._s(t.component.submit.text || "SUBMIT") + "\n    ")]) : s("button", {
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [t._v("SUBMIT")])], 2)
            };
            et._withStripped = !0;
            const st = a().extend({
                props: {
                    component: Object
                },
                data: () => ({
                    values: []
                }),
                beforeMount() {
                    this.values = this.component.inputs.map((t => {
                        var e;
                        return null !== (e = t.value) && void 0 !== e ? e : ""
                    }))
                },
                methods: {
                    onSubmitClick() {
                        const t = this.component.send || {
                            action: this.component.action || "input"
                        };
                        this.component.inputs.forEach(((e, s) => {
                            var i;
                            const n = null !== (i = e.key) && void 0 !== i ? i : `input${s}`;
                            t[n] = this.values[s]
                        })), this.component.responseEntity ? this.$ecast.updateObject(this.component.responseEntity, t).catch(this.$handleEcastError) : this.$ecast.mail(1, t).catch(this.$handleEcastError)
                    }
                }
            });
            var it = (0, c.Z)(st, et, [], !1, null, null, null);
            it.options.__file = "src/games/internal/prototype/views/Inputs.vue";
            const nt = it.exports;
            var at = function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)(t.component.tag || "p", {
                    tag: "component",
                    class: t.component.classes
                }, [t._v(t._s(t.component.text))])
            };
            at._withStripped = !0;
            const ot = a().extend({
                props: {
                    component: Object
                }
            });
            var lt = (0, c.Z)(ot, at, [], !1, null, null, null);
            lt.options.__file = "src/games/internal/prototype/views/Text.vue";
            const rt = lt.exports,
                ct = a().extend({
                    components: {
                        choicesEl: Z,
                        doodleEl: W,
                        drawEl: J,
                        imageEl: tt,
                        inputsEl: nt,
                        textEl: rt,
                        Fallbacks: B
                    },
                    ecastKeys: {
                        theme: ({
                            id: t
                        }) => `theme:${t}`,
                        player: ({
                            id: t
                        }) => `player:${t}`,
                        components: {
                            hasDeepRefs: !0,
                            fn: ({
                                id: t
                            }) => `components:${t}`
                        }
                    },
                    props: {
                        theme: Object,
                        player: Object,
                        components: Object
                    },
                    computed: {
                        classes() {
                            var t, e;
                            return null !== (e = null === (t = this.components) || void 0 === t ? void 0 : t.classes) && void 0 !== e ? e : []
                        },
                        themeStyle() {
                            if (!this.theme) return "";
                            const t = this.theme.colors;
                            let e = "";
                            return t && (e += `--theme-primary: ${t.primary};`, e += `--theme-secondary: ${t.secondary};`, e += `--theme-highlight: ${t.highlight};`, e += `--theme-background: ${t.background};`), e
                        }
                    }
                });
            var ht = (0, c.Z)(ct, i, [], !1, null, null, null);
            ht.options.__file = "src/games/internal/prototype/views/Main.vue";
            const pt = ht.exports
        }
    }
]);
//# sourceMappingURL=sourcemaps/7986.f50a12d2460868c4d6b5.js.map