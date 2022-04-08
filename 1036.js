(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [1036], {
        17819: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => p
            });
            var n = function() {
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
            n._withStripped = !0;
            var a = s(2934),
                i = s.n(a),
                l = s(32530),
                o = s(96486);
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
                            n = t.parentElement.getBoundingClientRect(),
                            a = Math.max(.9 * n.width, 240),
                            i = Math.max(this.windowHeight - e.height + s.height, 240),
                            l = this.stage.canvas.width,
                            o = this.stage.canvas.height,
                            r = Math.min(a / l, i / o);
                        return {
                            width: l * r + "px",
                            height: o * r + "px"
                        }
                    }
                },
                mounted() {
                    this.onResizeWithContext = (0, o.throttle)(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
                },
                beforeDestroy() {
                    window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
                },
                methods: {
                    setupStage() {
                        const e = this.$refs.stage,
                            t = {};
                        this.player.size && (t.width = this.player.size.width, t.height = this.player.size.height), this.player.thicknesses && (t.thickness = this.player.thicknesses[0]), this.player.colors && (t.color = this.player.colors[0]), this.player.maxPoints && (t.maxPoints = this.player.maxPoints), this.stage = new l.U(e, t), this.stage.on("up", (() => {
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
            var c = (0, s(51900).Z)(r, n, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/base/Draw.vue";
            const p = c.exports
        },
        74634: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => o
            });
            var n = function() {
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
            n._withStripped = !0;
            var a = s(2934);
            const i = s.n(a)().extend({
                props: {
                    player: Object
                }
            });
            var l = (0, s(51900).Z)(i, n, [], !1, null, null, null);
            l.options.__file = "src/apps/vue/components/base/Waiting.vue";
            const o = l.exports
        },
        11036: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => ie
            });
            var n = function() {
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
            n._withStripped = !0;
            var a = s(2934),
                i = s.n(a),
                l = function() {
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
            l._withStripped = !0;
            var o = function() {
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
                }) : e._e(), e._v(" "), e._l(e.player.choices, (function(t, n) {
                    return s("button", {
                        key: n,
                        class: {
                            selected: t.isSelected
                        },
                        attrs: {
                            disabled: t.isDisabled
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onChoiceClick(n)
                            }
                        }
                    }, [e._v("\n            " + e._s(t.text) + "\n        ")])
                }))], 2)])
            };
            o._withStripped = !0;
            const r = i().extend({
                props: {
                    player: Object
                },
                methods: {
                    onChoiceClick(e) {
                        var t, s, n;
                        const a = this.player.choices[e];
                        if (a.send) return void this.$ecast.updateObject(this.player.responseKey, a.send).catch(this.$handleEcastError);
                        const i = {
                            action: null !== (t = this.player.action) && void 0 !== t ? t : "choice",
                            [null !== (s = this.player.key) && void 0 !== s ? s : "value"]: null !== (n = a.value) && void 0 !== n ? n : e
                        };
                        this.$ecast.updateObject(this.player.responseKey, i).catch(this.$handleEcastError)
                    }
                }
            });
            var c = s(51900),
                p = (0, c.Z)(r, o, [], !1, null, null, null);
            p.options.__file = "src/apps/vue/components/base/Choices.vue";
            const u = p.exports;
            var h = s(17819),
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
            var d = s(13494);
            const m = i().extend({
                components: {
                    LobbyActions: d.Z
                },
                props: {
                    player: Object
                }
            });
            var y = (0, c.Z)(m, v, [], !1, null, null, null);
            y.options.__file = "src/apps/vue/components/base/Lobby.vue";
            const b = y.exports;
            var _ = function() {
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
            _._withStripped = !0;
            var f = s(83933);
            const g = i().extend({
                components: {
                    PostGameActions: f.Z
                },
                props: {
                    player: Object
                }
            });
            var x = (0, c.Z)(g, _, [], !1, null, null, null);
            x.options.__file = "src/apps/vue/components/base/PostGame.vue";
            const w = x.exports;
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
            var $ = s(23178);
            const C = i().extend({
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
                            if (e && e instanceof $.ObjectEntity) return !0
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
            var k = (0, c.Z)(C, E, [], !1, null, null, null);
            k.options.__file = "src/apps/vue/components/base/SingleTextEntry.vue";
            const j = k.exports;
            var S = function() {
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
                }) : e._e(), e._v(" "), e._l(e.player.inputs, (function(t, n) {
                    return [t.label ? s("label", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: t.label,
                            expression: "input.label"
                        }],
                        key: "label-" + t.key,
                        attrs: {
                            for: "input-" + n
                        }
                    }) : e._e(), e._v(" "), t.isMultiline ? s("textarea", {
                        key: "input-" + n,
                        attrs: {
                            id: "input-" + n,
                            rows: t.lines || 2,
                            placeholder: t.placeholder,
                            disabled: t.isDisabled
                        },
                        domProps: {
                            value: e.values[n]
                        },
                        on: {
                            input: function(t) {
                                return e.onValueInput(t, n)
                            }
                        }
                    }) : s("input", {
                        key: "input-" + t.key,
                        attrs: {
                            id: "input-" + n,
                            type: "text",
                            placeholder: t.placeholder,
                            disabled: t.isDisabled
                        },
                        domProps: {
                            value: e.values[n]
                        },
                        on: {
                            input: function(t) {
                                return e.onValueInput(t, n)
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
            S._withStripped = !0;
            const O = i().extend({
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
                            if (e && e instanceof $.ObjectEntity) return !0
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
                            var n;
                            const a = null !== (n = t.key) && void 0 !== n ? n : `input${s}`;
                            e[a] = this.values[s]
                        })), this.$ecast.updateObject(this.player.responseKey, e).catch(this.$handleEcastError)
                    },
                    sendAsText() {
                        const e = this.player.separator || "|";
                        this.$ecast.updateText(this.player.responseKey, this.values.join(e)).catch(this.$handleEcastError)
                    }
                }
            });
            var T = (0, c.Z)(O, S, [], !1, null, null, null);
            T.options.__file = "src/apps/vue/components/base/MultiTextEntry.vue";
            const D = T.exports;
            var Z = s(74634);
            const M = i().extend({
                components: {
                    Choices: u,
                    Draw: h.Z,
                    Lobby: b,
                    PostGame: w,
                    SingleTextEntry: j,
                    MultiTextEntry: D,
                    Waiting: Z.Z
                },
                props: {
                    applyStyling: {
                        type: Boolean,
                        default: !0
                    },
                    player: Object
                }
            });
            var I = (0, c.Z)(M, l, [], !1, null, null, null);
            I.options.__file = "src/apps/vue/components/Fallbacks.vue";
            const K = I.exports;
            var z = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    class: e.component.classes
                }, e._l(e.component.choices, (function(t, n) {
                    return s("button", {
                        key: n,
                        staticClass: "choice",
                        class: t.classes,
                        attrs: {
                            disabled: t.isDisabled
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onChoiceClick(n)
                            }
                        }
                    }, [e._v("\n        " + e._s(t.text) + "\n    ")])
                })), 0)
            };
            z._withStripped = !0;
            const P = i().extend({
                props: {
                    component: Object
                },
                methods: {
                    classesForChoice(e) {
                        const t = e.classes || [];
                        e.isSelected && t.push("selected")
                    },
                    onChoiceClick(e) {
                        var t, s, n;
                        const a = this.component.choices[e];
                        if (a.send) return void(this.component.responseEntity ? this.$ecast.updateObject(this.component.responseEntity, a.send).catch(this.$handleEcastError) : this.$ecast.mail(1, a.send).catch(this.$handleEcastError));
                        const i = {
                            action: null !== (t = this.component.action) && void 0 !== t ? t : "choice",
                            [null !== (s = this.component.key) && void 0 !== s ? s : "value"]: null !== (n = a.value) && void 0 !== n ? n : e
                        };
                        this.component.responseEntity ? this.$ecast.updateObject(this.component.responseEntity, i).catch(this.$handleEcastError) : this.$ecast.mail(1, i).catch(this.$handleEcastError)
                    }
                }
            });
            var A = (0, c.Z)(P, z, [], !1, null, null, null);
            A.options.__file = "src/games/internal/prototype/views/Choices.vue";
            const R = A.exports;
            var B = function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "draw"
                }, [t("div", {
                    ref: "stage",
                    staticClass: "stage"
                })])
            };
            B._withStripped = !0;
            var N = s(32530);
            const U = i().extend({
                props: {
                    component: Object
                },
                data: () => ({
                    stage: null
                }),
                mounted() {
                    const e = this.$refs.stage,
                        t = {};
                    this.component.size && (t.width = this.component.size.width, t.height = this.component.size.height), this.component.lines && (t.lines = this.component.lines), this.stage = new N.U(e, t)
                }
            });
            var L = (0, c.Z)(U, B, [], !1, null, null, null);
            L.options.__file = "src/games/internal/prototype/views/Draw.vue";
            const V = L.exports;
            var H = function() {
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
            H._withStripped = !0;
            const W = i().extend({
                props: {
                    component: Object
                }
            });
            var F = (0, c.Z)(W, H, [], !1, null, null, null);
            F.options.__file = "src/games/internal/prototype/views/Image.vue";
            const G = F.exports;
            var q = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "inputs",
                    class: e.component.classes
                }, [e._l(e.component.inputs, (function(t, n) {
                    return [t.label ? s("label", {
                        key: n,
                        class: t.classes,
                        attrs: {
                            for: "input-" + n
                        }
                    }, [e._v("\n            " + e._s(t.label) + "\n        ")]) : e._e(), e._v(" "), "textarea" === t.type ? s("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.values[n],
                            expression: "values[index]"
                        }],
                        key: n,
                        class: t.classes,
                        attrs: {
                            id: "input-" + n,
                            placeholder: t.placeholder,
                            rows: t.rows || 2
                        },
                        domProps: {
                            value: e.values[n]
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || e.$set(e.values, n, t.target.value)
                            }
                        }
                    }) : s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.values[n],
                            expression: "values[index]"
                        }],
                        key: n,
                        class: t.classes,
                        attrs: {
                            type: "text",
                            placeholder: t.placeholder
                        },
                        domProps: {
                            value: e.values[n]
                        },
                        on: {
                            input: function(t) {
                                t.target.composing || e.$set(e.values, n, t.target.value)
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
            q._withStripped = !0;
            const J = i().extend({
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
                            var n;
                            const a = null !== (n = t.key) && void 0 !== n ? n : `input${s}`;
                            e[a] = this.values[s]
                        })), this.component.responseEntity ? this.$ecast.updateObject(this.component.responseEntity, e).catch(this.$handleEcastError) : this.$ecast.mail(1, e).catch(this.$handleEcastError)
                    }
                }
            });
            var Q = (0, c.Z)(J, q, [], !1, null, null, null);
            Q.options.__file = "src/games/internal/prototype/views/Inputs.vue";
            const X = Q.exports;
            var Y = function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)(e.component.tag || "p", {
                    tag: "component",
                    class: e.component.classes
                }, [e._v(e._s(e.component.text))])
            };
            Y._withStripped = !0;
            const ee = i().extend({
                props: {
                    component: Object
                }
            });
            var te = (0, c.Z)(ee, Y, [], !1, null, null, null);
            te.options.__file = "src/games/internal/prototype/views/Text.vue";
            const se = te.exports,
                ne = i().extend({
                    components: {
                        choicesEl: R,
                        drawEl: V,
                        imageEl: G,
                        inputsEl: X,
                        textEl: se,
                        Fallbacks: K
                    },
                    ecastKeys: {
                        theme: ({
                            id: e
                        }) => `theme:${e}`,
                        player: ({
                            id: e
                        }) => `player:${e}`,
                        components: ({
                            id: e
                        }) => `components:${e}`
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
            var ae = (0, c.Z)(ne, n, [], !1, null, null, null);
            ae.options.__file = "src/games/internal/prototype/views/Main.vue";
            const ie = ae.exports
        }
    }
]);
//# sourceMappingURL=1036.d35591b4f53ccc14e436.js.map