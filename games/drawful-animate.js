(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/drawful-animate"], {
        94835: (t, e, s) => {
            "use strict";
            s.d(e, {
                Z: () => d
            });
            var i = function() {
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
                }), t._v(" "), t._l(t.slides, (function(e, i) {
                    return s("div", {
                        key: i,
                        staticClass: "slide",
                        class: t.slideClasses[i]
                    }, [s("div", {
                        staticClass: "text"
                    }, [s("h3", {
                        staticClass: "title"
                    }, [t._v(t._s(e.title))]), t._v(" "), e.listItems ? s("ul", t._l(e.listItems, (function(e, i) {
                        return s("li", {
                            key: i
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
            i._withStripped = !0;
            var a = s(2934),
                n = s.n(a),
                o = s(78627),
                r = s.n(o),
                l = s(65853);
            n().use(r());
            const c = n().extend({
                props: {
                    slides: Array
                },
                i18n: {
                    messages: l.s
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
            var u = (0, s(51900).Z)(c, i, [], !1, null, "2df46cec", null);
            u.options.__file = "src/apps/vue/components/Tutorial.vue";
            const d = u.exports
        },
        17819: (t, e, s) => {
            "use strict";
            s.d(e, {
                Z: () => u
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
            var a = s(2934),
                n = s.n(a),
                o = s(32530),
                r = s(96486);
            const l = n().extend({
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
                            a = Math.max(.9 * i.width, 240),
                            n = Math.max(this.windowHeight - t.height + s.height, 240),
                            o = this.stage.canvas.width,
                            r = this.stage.canvas.height,
                            l = Math.min(a / o, n / r);
                        return {
                            width: o * l + "px",
                            height: r * l + "px"
                        }
                    }
                },
                mounted() {
                    this.onResizeWithContext = (0, r.throttle)(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
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
            var c = (0, s(51900).Z)(l, i, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/base/Draw.vue";
            const u = c.exports
        },
        66333: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                default: () => pt
            });
            var i = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "drawful-animate game"
                }, [t.player ? s("div", ["drawing" === t.parsedKind ? s("Drawing", {
                    attrs: {
                        player: t.player
                    }
                }) : "lobby" === t.parsedKind ? s("Lobby", {
                    attrs: {
                        player: t.player,
                        info: t.info
                    }
                }) : "postGame" === t.parsedKind ? s("PostGame", {
                    attrs: {
                        player: t.player,
                        info: t.info,
                        artifact: t.artifact
                    }
                }) : "writing" === t.parsedKind ? s("Writing", {
                    attrs: {
                        player: t.player
                    }
                }) : "choosing" === t.parsedKind ? s("Choosing", {
                    attrs: {
                        player: t.player
                    }
                }) : "liking" === t.parsedKind ? s("Choosing", {
                    attrs: {
                        player: t.player,
                        liking: ""
                    }
                }) : "ugc" === t.parsedKind ? s("Ugc", {
                    attrs: {
                        player: t.player
                    }
                }) : s("Waiting", {
                    attrs: {
                        player: t.player,
                        info: t.info
                    }
                })], 1) : t.audiencePlayer ? s("div", ["postGame" === t.audiencePlayer.kind ? s("PostGame", {
                    attrs: {
                        player: t.audiencePlayer,
                        info: t.audienceInfo,
                        artifact: t.artifact
                    }
                }) : "choosing" === t.audiencePlayer.kind ? s("Choosing", {
                    attrs: {
                        player: t.audiencePlayer,
                        audience: ""
                    }
                }) : "liking" === t.audiencePlayer.kind ? s("Choosing", {
                    attrs: {
                        player: t.audiencePlayer,
                        audience: "",
                        liking: ""
                    }
                }) : "writing" === t.audiencePlayer.kind ? s("Writing", {
                    attrs: {
                        player: t.audiencePlayer,
                        audience: ""
                    }
                }) : "flipping" === t.audiencePlayer.kind ? s("Flipping", {
                    attrs: {
                        player: t.audiencePlayer,
                        timer: t.audienceTimer,
                        audience: ""
                    }
                }) : s("Waiting", {
                    attrs: {
                        player: t.audiencePlayer,
                        info: t.audienceInfo,
                        audience: ""
                    }
                })], 1) : t._e()])
            };
            i._withStripped = !0;
            var a = s(2934),
                n = s.n(a),
                o = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "choosing scrollable",
                        class: {
                            liking: t.liking, "doubling-down": t.player.doubleDown
                        }
                    }, [i("div", {
                        staticClass: "header",
                        domProps: {
                            textContent: t._s(t.header)
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "constrain"
                    }, [t.player.doubleDown ? i("div", {
                        staticClass: "doubleDown"
                    }, [i("div", {
                        staticClass: "doubleDownPrompt",
                        domProps: {
                            textContent: t._s(t.player.doubleDown.prompt)
                        }
                    }), t._v(" "), i("button", {
                        staticClass: "choice",
                        class: t.player.doubleDown.status,
                        attrs: {
                            disabled: "available" !== t.player.doubleDown.status
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onDoubleDownClick.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n                " + t._s(t.$t("CHOOSING.DOUBLEDOWN_TEXT")) + "\n                "), "used" === t.player.doubleDown.status ? i("span", {
                        staticClass: "subheader"
                    }, [t._v(t._s(t.$t("CHOOSING.DOUBLEDOWN_USED")))]) : "round" === t.player.doubleDown.frequency ? i("span", {
                        staticClass: "subheader"
                    }, [t._v(t._s(t.$t("CHOOSING.DOUBLEDOWN_PER_ROUND")))]) : "game" === t.player.doubleDown.frequency ? i("span", {
                        staticClass: "subheader"
                    }, [t._v(t._s(t.$t("CHOOSING.DOUBLEDOWN_PER_GAME")))]) : t._e()])]) : t._e(), t._v(" "), i("div", {
                        staticClass: "prompt",
                        domProps: {
                            textContent: t._s(t.player.prompt)
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "choices"
                    }, t._l(t.player.choices, (function(e, s) {
                        return i("button", {
                            key: "choice_" + t.player.choiceId + "_" + s,
                            staticClass: "choice",
                            class: {
                                buttonBlack: !t.liking, chosen: t.submittedActions.choose === s, selected: e.selected
                            },
                            attrs: {
                                disabled: e.disabled || -1 !== t.submittedActions.choose
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.submitVote(e, s, "choose")
                                }
                            }
                        }, [i("span", {
                            staticClass: "text",
                            domProps: {
                                textContent: t._s(e.text)
                            }
                        })])
                    })), 0), t._v(" "), void 0 !== t.player.speedIndex ? i("div", {
                        staticClass: "track"
                    }, [i("div", {
                        staticClass: "track-image-container",
                        class: "speed-" + t.player.speedIndex
                    }, [i("img", {
                        staticClass: "track-image",
                        attrs: {
                            src: s(57095),
                            alt: "speed " + t.player.speedIndex
                        }
                    })])]) : t._e()])])
                };
            o._withStripped = !0;
            var r = s(55507);
            const l = {
                    LOBBY: {
                        WAIT: "sit back and relax!",
                        VIP_WAITING: "waiting for all players to join",
                        VIP_PORTRAIT_WARNING: "you sure you want to start before everyone’s avatars are in?",
                        VIP_PORTRAIT_WARNING_CANCEL: "no",
                        VIP_PORTRAIT_WARNING_CONFIRM: "yes",
                        VIP_CANSTART: "press this button when everybody has joined",
                        VIP_CANCEL: "press this button to cancel game start",
                        VIP_POSTGAME: "what would you like to do now?",
                        VIP_EPISODES_MENU: "episodes menu",
                        VIP_EPISODES_UNLOAD: "unload episode",
                        VIP_EPISODES_REPORT: "report episode",
                        VIP_EPISODES_WARNING: "warning: user generated content is not rated",
                        VIP_EPISODES_LOAD: "load an episode by ID:",
                        VIP_EPISODES_SELECT: "or select an episode:",
                        VIP_EPISODES_BACK: "back",
                        VIP_EPISODES_SUBMIT: "submit",
                        VIP_EPISODES_VIEW_AUTHOR: "view author",
                        BUTTON_START: "everybody's in",
                        BUTTON_CANCEL: "cancel",
                        BUTTON_CHANGENAME: "change name",
                        BUTTON_SAMEPLAYERS: "same players",
                        BUTTON_NEWPLAYERS: "new players",
                        PROMPT_ENTERNAME: "enter your name",
                        PROMPT_CHOOSECHARACTER: "select your character",
                        BUTTON_CENSOROPTIONS: "censor options",
                        CENSOR_PROMPT: ""
                    },
                    TUTORIAL: {
                        SLIDE_1_TITLE: "You will create a simple animation.",
                        SLIDE_1_ITEM_1: "Draw your first frame.",
                        SLIDE_1_ITEM_2: "Then tap on the frame 2 tab.",
                        SLIDE_2_TITLE: "Draw your second frame.",
                        SLIDE_2_ITEM_1: "You’ll see your first drawing for reference.",
                        SLIDE_2_ITEM_2: "The faded lines will not appear in the animation.",
                        SLIDE_3_TITLE: "You have 3 colors.",
                        SLIDE_3_ITEM_1: "Every player has a different set of colors.",
                        SLIDE_3_ITEM_2: "There is NO eraser.",
                        SLIDE_4_TITLE: "When BOTH frames are done, tap the Submit button.",
                        SLIDE_4_ITEM_1: "You can alternate between tabs before submitting.",
                        SLIDE_5_TITLE: "And presto, it’s your avatar!"
                    },
                    UGC: {
                        BUTTON_ADD: "add prompt",
                        BUTTON_BACK_TO_EPISODES: "back to episodes",
                        BUTTON_BACK_TO_MENU: "back to menu",
                        BUTTON_CLOSE: "close",
                        BUTTON_DELETE: "delete",
                        BUTTON_DONE: "done",
                        BUTTON_EDIT: "edit",
                        BUTTON_PLAY: "play",
                        BUTTON_PUBLISH: "publish",
                        BUTTON_SAVE: "save",
                        CREATE_NEW_BUTTON: "create",
                        CREATE_NEW_EPISODE: "create a new episode",
                        CREATE_NEW_NAME_PROMPT: "first things first, enter a name for the episode that will contain all your prompts and hit create.",
                        DELETE_WARNING: "are you sure you want to delete this episode?",
                        DELETE_WARNING_CANCEL: "no",
                        DELETE_WARNING_CONFIRM: "yes",
                        INPUT_PLACEHOLDER: "enter a prompt",
                        TITLE_INPUT_PLACEHOLDER: "enter a title",
                        LABEL_HIDDEN: "hidden",
                        PREVIOUS_EPISODES: "previous episodes",
                        TOGGLE_PROMPTS_PROMPT: "tap to show/hide prompts",
                        TOS_WARNING: "by sharing content, you agree to our [tos]Terms of Service[/tos]",
                        TOS_WARNING_AGREE: "agree and share",
                        TOS_WARNING_BACK: "back to menu",
                        HEADER_DEFAULT: "create or load?",
                        HEADER_TITLE: "name your episode",
                        HEADER_WRITE: "write your prompts",
                        HEADER_PUBLISH: "publish your episode"
                    },
                    WRITING: {
                        DONE: "thanks for your answer. if the audience nailed it, we’ll let you know.",
                        BUTTON_SUBMIT: "send",
                        FRIEND_HINT: "psst… they/them pronouns are used in titles",
                        PROMPT: "write an answer below that will fool the others",
                        FILTER_ERROR: "that's not allowed, enter something else! (you can change the level of filtering in the game's settings menu)"
                    },
                    DRAWING: {
                        BUTTON_SUBMIT: "submit",
                        FRAME_1: "frame 1",
                        FRAME_2: "frame 2"
                    },
                    FLIPPING: {
                        DONE_TEXT: "thanks! stand by to see results."
                    },
                    CHOOSING: {
                        DOUBLEDOWN_USED: "already used",
                        DOUBLEDOWN_PER_ROUND: "(once per round)",
                        DOUBLEDOWN_PER_GAME: "(once per game)",
                        DOUBLEDOWN_TEXT: "double down?"
                    }
                },
                c = {
                    en: l,
                    fr: l,
                    it: l,
                    de: l,
                    es: l,
                    "es-XL": l
                };
            var u = function(t, e, s, i) {
                return new(s || (s = Promise))((function(a, n) {
                    function o(t) {
                        try {
                            l(i.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(t) {
                        try {
                            l(i.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(o, r)
                    }
                    l((i = i.apply(t, e || [])).next())
                }))
            };
            const d = n().extend({
                props: {
                    player: Object,
                    audience: Boolean,
                    liking: Boolean
                },
                i18n: {
                    messages: c
                },
                data: () => ({
                    chosenIndex: -1,
                    rateLimited: !1,
                    submittedActions: {
                        choose: -1,
                        doubleDown: -1
                    }
                }),
                computed: {
                    header() {
                        return this.player.header ? this.player.header : this.$ecast.name
                    }
                },
                watch: {
                    "player.choiceId": function() {
                        const t = this.$el.querySelector(":hover");
                        t && t instanceof HTMLElement && t.blur(), this.submittedActions.choose = -1, this.chosenIndex = -1
                    }
                },
                methods: {
                    onDoubleDownClick() {
                        this.player.doubleDown && this.player.doubleDown.responseKey || console.error("Missing doubleDown responseKey"), this.$ecast.updateObject(this.player.doubleDown.responseKey, {
                            action: "doubleDown",
                            choice: 0
                        }).catch(this.$handleEcastError)
                    },
                    submitVoteAudience(t, e) {
                        return u(this, void 0, void 0, (function*() {
                            if (this.audience && !this.player.countGroupName && console.error("Missing count group name"), this.submittedActions[e] = t, this.rateLimited) return;
                            const s = void 0 !== this.player.choices[t].countGroupKey ? this.player.choices[t].countGroupKey : `${t}`;
                            try {
                                yield this.$ecast.incrementCountGroupCounter(this.player.countGroupName, s)
                            } catch (t) {
                                t instanceof r.EcastRateLimitExceeded || this.$handleEcastError(t), this.rateLimited = !0, setTimeout((() => {
                                    this.rateLimited = !1
                                }), 1e3)
                            }
                        }))
                    },
                    submitVote(t, e, s) {
                        return u(this, void 0, void 0, (function*() {
                            if (t.target instanceof HTMLElement && t.target.blur(), this.audience) return this.submitVoteAudience(e, s);
                            this.audience || this.player.responseKey || console.error("Missing response entity for vote session"), this.submittedActions[s] = e;
                            const i = void 0 !== this.player.choices[e].key ? this.player.choices[e].key : e;
                            this.$ecast.updateObject(this.player.responseKey, {
                                action: s,
                                choice: i
                            }).catch(this.$handleEcastError)
                        }))
                    }
                }
            });
            var p = s(51900),
                h = (0, p.Z)(d, o, [], !1, null, null, null);
            h.options.__file = "src/games/pp8/drawful-animate/views/Choosing.vue";
            const v = h.exports;
            var _ = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "drawing"
                }, [s("div", {
                    ref: "content",
                    staticClass: "content"
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.player.header)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain"
                }, [s("fieldset", {
                    attrs: {
                        disabled: t.isSubmitting
                    }
                }, [t.player.prompt ? s("div", {
                    staticClass: "prompt",
                    domProps: {
                        textContent: t._s(t.player.prompt)
                    }
                }) : t._e(), t._v(" "), s("div", {
                    staticClass: "controls"
                }, [s("button", {
                    class: {
                        "frame-button": !0, active: 0 === t.activeFrame
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), e.stopPropagation(), t.onFrameClick(0)
                        }
                    }
                }, [t._v("\n                        " + t._s(t.$t("DRAWING.FRAME_1")) + "\n                    ")]), t._v(" "), s("button", {
                    class: {
                        "frame-button": !0, active: 1 === t.activeFrame
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), e.stopPropagation(), t.onFrameClick(1)
                        }
                    }
                }, [t._v("\n                        " + t._s(t.$t("DRAWING.FRAME_2")) + "\n                    ")])]), t._v(" "), s("div", {
                    ref: "stage",
                    staticClass: "stage",
                    style: t.stageDimensions
                }), t._v(" "), t.player.colors ? s("div", {
                    staticClass: "palette"
                }, t._l(t.player.colors, (function(e, i) {
                    return s("ColorButton", {
                        key: i,
                        class: {
                            color: !0, active: t.activeColor === e
                        },
                        attrs: {
                            hex: e,
                            active: t.activeColor === e
                        },
                        on: {
                            clicked: function(s) {
                                return t.onColorClick(e)
                            }
                        }
                    })
                })), 1) : t._e(), t._v(" "), s("button", {
                    staticClass: "submit-button",
                    attrs: {
                        type: "submit",
                        disabled: !t.canSubmit
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), e.stopPropagation(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [t._v("\n                    " + t._s(t.$t("DRAWING.BUTTON_SUBMIT")) + "\n                ")])])])]), t._v(" "), t.player.showTutorial && !t.hasSeenTutorial ? s("Tutorial", {
                    attrs: {
                        slides: t.slides
                    },
                    on: {
                        tutorialComplete: t.onTutorialComplete
                    }
                }) : t._e()], 1)
            };
            _._withStripped = !0;
            var m = s(17819),
                y = s(94835),
                C = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("button", {
                        staticClass: "svg-container",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onColorClick()
                            }
                        }
                    }, [s("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 100 100"
                        }
                    }, [s("defs"), t._v(" "), s("g", {
                        attrs: {
                            id: "ColorSelect",
                            "data-name": "Layer 2"
                        }
                    }, [s("g", {
                        attrs: {
                            id: "UI"
                        }
                    }, [s("path", {
                        style: {
                            fill: t.hex,
                            stroke: "none",
                            strokeWidth: .090248
                        },
                        attrs: {
                            id: "path68",
                            d: "m 24.674841,80.964093 c -2.53527,-0.247984 -3.97558,-0.818724 -5.249833,-2.080311 -1.007461,-0.997446 -1.515304,-1.910747 -2.05347,-3.692941 -0.196892,-0.652029 -0.207986,-0.854054 -0.240015,-4.370557 -0.02481,-2.723643 -0.0054,-3.739661 0.07444,-3.88876 0.156667,-0.292734 0.05196,-9.203441 -0.138585,-11.793791 -0.189412,-2.574944 -0.276386,-8.308298 -0.1763,-11.62169 0.04391,-1.453849 0.09273,-2.44853 0.108481,-2.210399 0.01575,0.238131 0.06268,0.432965 0.104291,0.432965 0.07402,0 0.104402,-1.115922 0.275467,-10.117705 0.08621,-4.536938 0.1601,-5.482612 0.591071,-7.565491 0.411726,-1.989866 1.824998,-3.650128 3.706276,-4.354004 0.472783,-0.176892 1.809902,-0.431448 3.545085,-0.674901 1.032293,-0.144836 47.002008,-0.221915 49.449724,-0.08291 1.933145,0.109779 3.073523,0.358224 4.192344,0.913352 1.65418,0.820759 2.752578,2.159163 3.449644,4.203411 0.406366,1.191729 0.517141,2.109979 0.498421,4.131556 -0.01196,1.291678 -0.03243,1.604794 -0.06925,1.059079 l -0.05227,-0.774779 -0.0808,0.638054 c -0.11303,0.892605 0.0095,5.987031 0.230135,9.570802 0.152344,2.474163 0.183608,3.949842 0.176169,8.315402 -0.0051,2.964305 -0.04577,5.398896 -0.09224,5.514605 -0.07169,0.178495 -0.084,0.157335 -0.08898,-0.152875 -0.0044,-0.276662 -0.03069,-0.335133 -0.113345,-0.252478 -0.08056,0.08056 -0.123572,2.619553 -0.171316,10.113147 -0.06052,9.49925 -0.07353,10.076101 -0.257007,11.399105 -0.432186,3.116322 -0.764055,3.977443 -2.010302,5.21625 -0.872149,0.866944 -1.542264,1.254132 -2.663793,1.53912 -0.826984,0.210143 -2.413758,0.438599 -3.85949,0.55567 -0.998637,0.08087 -48.269538,0.110798 -49.084543,0.03108 z"
                        }
                    }), t._v(" "), s("path", {
                        style: {
                            fill: t.outlineFill
                        },
                        attrs: {
                            id: "path50",
                            d: "m 95.76,18.84 a 37,37 0 0 0 -0.7,-6 C 94.46,9.26 92,6.99 88.14,6.08 A 49.23,49.23 0 0 0 79.3,5.21 h -6.74 -6 C 34.5,4.97 73.89,4.66 41.84,4.5 36.24,4.5 30.65,5.11 25.06,5.14 6.39,5.22 34.46,4.78 15.78,4.83 A 14.73,14.73 0 0 0 11.52,5.58 C 5.39,7.5 4.06,12.02 4,16.99 4,26.05 4,72.57 4.05,81.13 a 37,37 0 0 0 0.71,6 c 0.6,3.57 3.06,5.85 6.92,6.76 a 49.23,49.23 0 0 0 8.84,0.86 c 17.41,0.07 -13.67,0 3.74,0.06 32.06,0.17 -7.33,0.49 24.73,0.65 5.59,0 11.18,-0.61 16.77,-0.64 18.68,-0.09 -0.4,0.36 18.27,0.31 a 14.79,14.79 0 0 0 4.27,-0.75 c 6.12,-1.92 7.46,-6.45 7.49,-11.42 0.06,-9.04 0.02,-55.56 -0.03,-64.12 z M 82.27,61.16 c 0,2.11 0,3.34 0,4 0,0.51 0,1.78 0,4.52 a 31.1,31.1 0 0 1 -0.62,5.94 5.73,5.73 0 0 1 -4.88,4.64 29,29 0 0 1 -4.34,0.48 c -6.18,0 -39.76,0 -46.3,0 -3.58,0 -6.85,-0.91 -8.24,-5 a 9.34,9.34 0 0 1 -0.54,-2.86 c 0,-12.54 0.29,0.27 0.22,-12.27 0,-3.76 -0.47,-7.51 -0.45,-11.27 0.11,-21.52 0.34,4.93 0.46,-16.6 0.07,-11.69 0,9.18 0.05,-2.51 a 31.09,31.09 0 0 1 0.61,-5.94 5.75,5.75 0 0 1 4.89,-4.64 28.83,28.83 0 0 1 4.33,-0.48 c 6.19,0 39.77,0 46.3,0 3.59,0 6.86,0.91 8.24,5 a 9.36,9.36 0 0 1 0.55,2.86 c 0,12.54 -0.29,-6.31 -0.23,6.23 0,3.75 0.48,7.51 0.46,11.26 -0.15,21.57 -0.38,-4.88 -0.51,16.64 z"
                        }
                    })])])])])
                };
            C._withStripped = !0;
            const g = n().extend({
                name: "SvgIcon",
                props: {
                    hex: {
                        type: String,
                        default: "#ffaf23"
                    },
                    active: {
                        type: Boolean,
                        default: !1
                    },
                    icon: {
                        type: String,
                        default: null
                    },
                    hasFill: {
                        type: Boolean,
                        default: !1
                    },
                    growByHeight: {
                        type: Boolean,
                        default: !0
                    }
                },
                computed: {
                    outlineFill() {
                        return this.active ? "#030300" : "transparent"
                    }
                },
                mounted() {},
                methods: {
                    onColorClick() {
                        this.$emit("clicked", this.hex)
                    }
                }
            });
            var f = (0, p.Z)(g, C, [], !1, null, "96847278", null);
            f.options.__file = "src/games/pp8/drawful-animate/views/ColorButton.vue";
            const b = f.exports,
                E = m.Z.extend({
                    props: {
                        player: Object
                    },
                    i18n: {
                        messages: c
                    },
                    components: {
                        Tutorial: y.Z,
                        ColorButton: b
                    },
                    data() {
                        return {
                            hasSeenTutorial: !1,
                            slides: [{
                                title: this.$t("TUTORIAL.SLIDE_1_TITLE"),
                                listItems: [this.$t("TUTORIAL.SLIDE_1_ITEM_1"), this.$t("TUTORIAL.SLIDE_1_ITEM_2")],
                                imageClass: "tutorial-0",
                                arrow: {
                                    top: "33%",
                                    left: "80%",
                                    transform: "rotate(135deg)"
                                }
                            }, {
                                title: this.$t("TUTORIAL.SLIDE_2_TITLE"),
                                listItems: [this.$t("TUTORIAL.SLIDE_2_ITEM_1"), this.$t("TUTORIAL.SLIDE_2_ITEM_2")],
                                imageClass: "tutorial-1"
                            }, {
                                title: this.$t("TUTORIAL.SLIDE_3_TITLE"),
                                listItems: [this.$t("TUTORIAL.SLIDE_3_ITEM_1"), this.$t("TUTORIAL.SLIDE_3_ITEM_2")],
                                imageClass: "tutorial-2",
                                arrow: {
                                    top: "67%",
                                    left: "20%"
                                }
                            }, {
                                title: this.$t("TUTORIAL.SLIDE_4_TITLE"),
                                listItems: [this.$t("TUTORIAL.SLIDE_4_ITEM_1")],
                                imageClass: "tutorial-3",
                                arrow: {
                                    top: "87%",
                                    left: "28%"
                                }
                            }, {
                                title: this.$t("TUTORIAL.SLIDE_5_TITLE"),
                                listItems: [],
                                imageClass: "tutorial-4"
                            }]
                        }
                    },
                    computed: {
                        activeColor() {
                            return this.stage ? this.stage.canvas.color : ""
                        },
                        activeFrame() {
                            return this.stage ? this.stage.canvas.frame : 0
                        },
                        activeThickness() {
                            return this.stage ? this.stage.canvas.thickness : 1
                        },
                        canSubmit() {
                            return null !== this.stage && this.stage.canvas.lines.length > 0 && this.stage.canvas.lines2.length > 0
                        }
                    },
                    methods: {
                        onFrameClick(t) {
                            this.stage && (this.stage.canvas.frame = t)
                        },
                        onColorClick(t) {
                            this.stage && (this.stage.canvas.color = t)
                        },
                        onTutorialComplete() {
                            this.hasSeenTutorial = !0
                        }
                    }
                });
            var I = (0, p.Z)(E, _, [], !1, null, null, null);
            I.options.__file = "src/games/pp8/drawful-animate/views/Drawing.vue";
            const T = I.exports;
            var w = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "flipping scrollable"
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.player.header)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain"
                }, [s("div", {
                    staticClass: "prompt",
                    domProps: {
                        textContent: t._s(t.prompt)
                    }
                }), t._v(" "), t.player.success ? t._e() : s("div", {
                    staticClass: "flipchart"
                }, [s("div", {
                    staticClass: "row"
                }, [s("button", {
                    staticClass: "circle-button right",
                    class: {
                        selected: t.chosenKey === t.player.countGroupChoices[0]
                    },
                    attrs: {
                        disabled: t.isSubmitting,
                        "aria-label": "Slide top row right"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.voteClicked(e, 0)
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "circle-button left",
                    class: {
                        selected: t.chosenKey === t.player.countGroupChoices[1]
                    },
                    attrs: {
                        disabled: t.isSubmitting,
                        "aria-label": "Slide top row left"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.voteClicked(e, 1)
                        }
                    }
                }), t._v(" "), s("div", {
                    staticClass: "carousel top",
                    class: {
                        "slide-left": "topLeft" === t.lastChange, "slide-right": "topRight" === t.lastChange
                    }
                }, [s("div", {
                    staticClass: "owl prev",
                    class: t.topPrevName
                }), t._v(" "), s("div", {
                    staticClass: "owl",
                    class: t.topCurrentName
                }), t._v(" "), s("div", {
                    staticClass: "owl next",
                    class: t.topNextName
                })])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "carousel bottom",
                    class: {
                        "slide-left": "bottomLeft" === t.lastChange, "slide-right": "bottomRight" === t.lastChange
                    }
                }, [s("div", {
                    staticClass: "owl prev",
                    class: t.bottomPrevName
                }), t._v(" "), s("div", {
                    staticClass: "owl",
                    class: t.bottomCurrentName
                }), t._v(" "), s("div", {
                    staticClass: "owl next",
                    class: t.bottomNextName
                })]), t._v(" "), s("button", {
                    staticClass: "circle-button right",
                    class: {
                        selected: t.chosenKey === t.player.countGroupChoices[2]
                    },
                    attrs: {
                        disabled: t.isSubmitting,
                        "aria-label": "Slide bottom row right"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.voteClicked(e, 2)
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "circle-button left",
                    class: {
                        selected: t.chosenKey === t.player.countGroupChoices[3]
                    },
                    attrs: {
                        disabled: t.isSubmitting,
                        "aria-label": "Slide bottom row left"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.voteClicked(e, 3)
                        }
                    }
                })]), t._v(" "), t.timer ? s("div", {
                    staticClass: "timer"
                }, [s("span", {
                    staticClass: "timer-bar",
                    style: "width: " + t.progressPercent + "%"
                })]) : t._e()]), t._v(" "), t.player.success ? s("div", {}, [s("div", {
                    staticClass: "owl-complete",
                    class: t.completeName
                })]) : t._e()])])
            };
            w._withStripped = !0;
            var O = s(96486),
                S = function(t, e, s, i) {
                    return new(s || (s = Promise))((function(a, n) {
                        function o(t) {
                            try {
                                l(i.next(t))
                            } catch (t) {
                                n(t)
                            }
                        }

                        function r(t) {
                            try {
                                l(i.throw(t))
                            } catch (t) {
                                n(t)
                            }
                        }

                        function l(t) {
                            var e;
                            t.done ? a(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                t(e)
                            }))).then(o, r)
                        }
                        l((i = i.apply(t, e || [])).next())
                    }))
                };
            const x = n().extend({
                props: {
                    player: Object,
                    timer: Object
                },
                i18n: {
                    messages: c
                },
                data: () => ({
                    isSubmitting: !1,
                    chosenKey: "",
                    lastSubmittedKey: "",
                    lastChange: "",
                    throttledSubmitVote: void 0
                }),
                computed: {
                    prompt() {
                        return "" !== this.chosenKey ? this.$t("FLIPPING.DONE_TEXT").toString() : this.player.prompt
                    },
                    topPrevName() {
                        const t = (this.player.topOrder.length + this.player.topIndex - 1) % this.player.topOrder.length;
                        return this.player.topOrder[t]
                    },
                    topCurrentName() {
                        return this.player.topOrder[this.player.topIndex]
                    },
                    topNextName() {
                        const t = (this.player.topIndex + 1) % this.player.topOrder.length;
                        return this.player.topOrder[t]
                    },
                    bottomPrevName() {
                        const t = (this.player.bottomOrder.length + this.player.bottomIndex - 1) % this.player.bottomOrder.length;
                        return this.player.bottomOrder[t]
                    },
                    bottomCurrentName() {
                        return this.player.bottomOrder[this.player.bottomIndex]
                    },
                    bottomNextName() {
                        const t = (this.player.bottomIndex + 1) % this.player.bottomOrder.length;
                        return this.player.bottomOrder[t]
                    },
                    completeName() {
                        return this.player.success ? `OwlComplete_${this.player.owlIndex}` : ""
                    },
                    progressPercent() {
                        return this.timer.timeLeft % 10 / 10 * 100
                    }
                },
                watch: {
                    "player.bottomIndex": function(t, e) {
                        var s;
                        this.chosenKey = "", this.isSubmitting = !1, this.lastSubmittedKey = "", t !== (null === (s = this.player.bottomOrder) || void 0 === s ? void 0 : s.length) - 1 ? this.lastChange = t > e || 0 === t ? "bottomLeft" : "bottomRight" : this.lastChange = "bottomRight"
                    },
                    "player.topIndex": function(t, e) {
                        var s;
                        this.chosenKey = "", this.isSubmitting = !1, this.lastSubmittedKey = "", t !== (null === (s = this.player.topOrder) || void 0 === s ? void 0 : s.length) - 1 ? this.lastChange = t > e || 0 === t ? "topLeft" : "topRight" : this.lastChange = "topRight"
                    },
                    "player.interactionId": function() {
                        this.chosenKey = "", this.isSubmitting = !1, this.lastSubmittedKey = ""
                    }
                },
                mounted() {
                    this.throttledSubmitVote = (0, O.throttle)(this.submitVote.bind(this), 400)
                },
                beforeDestroy() {
                    var t;
                    null === (t = this.throttledSubmitVote) || void 0 === t || t.cancel()
                },
                methods: {
                    voteClicked(t, e) {
                        return S(this, void 0, void 0, (function*() {
                            t.target instanceof HTMLElement && t.target.blur();
                            const s = this.player.countGroupChoices ? `${this.player.countGroupChoices[e]}` : `${e}`;
                            if (s !== this.chosenKey) return this.chosenKey = s, this.throttledSubmitVote ? this.throttledSubmitVote() : void 0
                        }))
                    },
                    submitVote() {
                        return S(this, void 0, void 0, (function*() {
                            this.player.countGroupName || console.error("Missing count group key for vote session");
                            const {
                                chosenKey: t,
                                lastSubmittedKey: e
                            } = this;
                            if (t !== this.lastSubmittedKey) {
                                this.isSubmitting = !0;
                                try {
                                    if (yield this.$ecast.incrementCountGroupCounter(this.player.countGroupName, t), this.lastSubmittedKey = t, !this.player.countGroupNegativeName) return;
                                    "" !== e && this.$ecast.incrementCountGroupCounter(this.player.countGroupNegativeName, e).catch(this.$handleEcastError)
                                } catch (t) {
                                    t instanceof r.EcastRateLimitExceeded || this.$handleEcastError(t)
                                }
                                this.isSubmitting = !1
                            }
                        }))
                    }
                }
            });
            var N = (0, p.Z)(x, w, [], !1, null, "c1eff0c0", null);
            N.options.__file = "src/games/pp8/drawful-animate/views/Flipping.vue";
            const D = N.exports;
            var P = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "lobby scrollable",
                    class: {
                        isFriendMode: t.player.isFriendMode
                    }
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.info.name)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain"
                }, [s("LobbyActions", {
                    attrs: {
                        player: t.player,
                        classes: {
                            action: "buttonBlack"
                        },
                        "should-start": t.shouldStart
                    }
                }), t._v(" "), t.player.playerCanDoEpisodes ? s("div", [t.player.activeContentId ? s("div", [s("div", [t._v(t._s(t.player.episodeTitle))]), t._v(" "), t.player.activeContentId ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.VIP_EPISODES_UNLOAD",
                        expression: "'LOBBY.VIP_EPISODES_UNLOAD'"
                    }],
                    staticClass: "buttonBlack",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionEvent("ugc-unload")
                        }
                    }
                }) : t._e(), t._v(" "), t.player.playerCanReport ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.VIP_EPISODES_REPORT",
                        expression: "'LOBBY.VIP_EPISODES_REPORT'"
                    }],
                    staticClass: "buttonBlack",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onReportClick.apply(null, arguments)
                        }
                    }
                }) : t._e(), t._v(" "), t.player.playerCanViewAuthor ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.VIP_EPISODES_VIEW_AUTHOR",
                        expression: "'LOBBY.VIP_EPISODES_VIEW_AUTHOR'"
                    }],
                    staticClass: "buttonBlack",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionEvent("ugc-view-author")
                        }
                    }
                }) : t._e()]) : s("div", [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.VIP_EPISODES_MENU",
                        expression: "'LOBBY.VIP_EPISODES_MENU'"
                    }],
                    staticClass: "buttonBlack",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onEpisodesClick.apply(null, arguments)
                        }
                    }
                })]), t._v(" "), t.player.lastUGCResult && t.player.lastUGCResult.error ? s("div", [t._v("\n                " + t._s(t.player.lastUGCResult.error) + "\n            ")]) : t._e()]) : t._e()], 1)])
            };
            P._withStripped = !0;
            var A = s(13494),
                L = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "drawful-animate episodes"
                    }, [s("button", {
                        staticClass: "backButton buttonBlack",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onBackClick.apply(null, arguments)
                            }
                        }
                    }, [t._v(t._s(t.$t("LOBBY.VIP_EPISODES_BACK")))]), t._v(" "), s("div", [t._v(t._s(t.$t("LOBBY.VIP_EPISODES_LOAD")))]), t._v(" "), s("fieldset", {
                        staticClass: "inputEpisode"
                    }, [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.answer,
                            expression: "answer"
                        }, {
                            name: "mask",
                            rawName: "v-mask",
                            value: "XXX-XXXX",
                            expression: "'XXX-XXXX'"
                        }],
                        attrs: {
                            rows: "1",
                            placeholder: "???-????"
                        },
                        domProps: {
                            value: t.answer
                        },
                        on: {
                            input: [function(e) {
                                e.target.composing || (t.answer = e.target.value)
                            }, t.onAnswerInput]
                        }
                    }), t._v(" "), s("button", {
                        staticClass: "submit buttonBlack",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onSubmitInput.apply(null, arguments)
                            }
                        }
                    }, [t._v(t._s(t.$t("LOBBY.VIP_EPISODES_SUBMIT")))])]), t._v(" "), s("div", {
                        staticClass: "episodes-warning"
                    }, [t._v(t._s(t.$t("LOBBY.VIP_EPISODES_WARNING")))]), t._v(" "), t.episodes.length ? s("div", [s("div", [t._v(t._s(t.$t("LOBBY.VIP_EPISODES_SELECT")))]), t._v(" "), t._l(t.episodes, (function(e, i) {
                        return s("button", {
                            key: e.remoteContentId || e.localContentId,
                            staticClass: "episode buttonBlack",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.onEpisodeClick(i)
                                }
                            }
                        }, [t._v("\n            " + t._s(e.metadata.title) + "\n            "), e.remoteContentId ? s("span", {
                            staticClass: "episodeId"
                        }, [t._v(t._s(e.formattedRemoteContentId))]) : t._e()])
                    }))], 2) : t._e()])
                };
            L._withStripped = !0;
            var k = s(79278);
            n().use(k.ZP);
            const R = n().extend({
                props: {
                    episodes: Array
                },
                i18n: {
                    messages: c
                },
                data: () => ({
                    answer: ""
                }),
                methods: {
                    onEpisodeClick(t) {
                        const e = this.episodes[t],
                            s = e.remoteContentId || e.localContentId;
                        this.$emit("resolve", {
                            action: "load",
                            contentId: s
                        })
                    },
                    onAnswerInput(t) {
                        const e = t.target;
                        this.answer = e.value
                    },
                    onBackClick() {
                        this.$emit("resolve", {})
                    },
                    onSubmitInput() {
                        this.$emit("resolve", {
                            action: "input",
                            answer: this.answer
                        })
                    }
                }
            });
            var $ = (0, p.Z)(R, L, [], !1, null, null, null);
            $.options.__file = "src/games/pp8/drawful-animate/views/EpisodesModal.vue";
            const B = $.exports;
            var U = function(t, e, s, i) {
                return new(s || (s = Promise))((function(a, n) {
                    function o(t) {
                        try {
                            l(i.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(t) {
                        try {
                            l(i.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(o, r)
                    }
                    l((i = i.apply(t, e || [])).next())
                }))
            };
            const G = n().extend({
                components: {
                    LobbyActions: A.Z
                },
                props: {
                    info: Object,
                    player: Object
                },
                i18n: {
                    messages: c
                },
                data: () => ({
                    showEpisodesModal: !1
                }),
                methods: {
                    shouldStart() {
                        return U(this, void 0, void 0, (function*() {
                            return !(!this.player.allPlayersHavePortraits && "confirm" !== (yield this.$showModal("Options", {
                                text: this.$t("LOBBY.VIP_PORTRAIT_WARNING"),
                                options: [{
                                    text: this.$t("LOBBY.VIP_PORTRAIT_WARNING_CONFIRM"),
                                    value: "confirm"
                                }, {
                                    text: this.$t("LOBBY.VIP_PORTRAIT_WARNING_CANCEL"),
                                    value: "cancel"
                                }]
                            })))
                        }))
                    },
                    onActionEvent(t) {
                        this.player.responseKey && this.$ecast.updateObject(this.player.responseKey, {
                            action: t
                        }).catch(this.$handleEcastError)
                    },
                    onReportClick() {
                        window.location.href = `mailto:support@jackboxgames.com?subject=Report episode id ${this.player.formattedActiveContentId}`
                    },
                    onEpisodesClick() {
                        var t;
                        return U(this, void 0, void 0, (function*() {
                            const e = yield this.$showModal(B, {
                                episodes: this.player.history
                            });
                            if (e && this.player.responseKey && ("load" === e.action && this.$ecast.updateObject(this.player.responseKey, {
                                    activateContentId: !0,
                                    contentId: e.contentId
                                }).catch(this.$handleEcastError), "input" === e.action)) {
                                const s = (null === (t = e.answer) || void 0 === t ? void 0 : t.replace(/[^A-Za-z]/gi, "").toUpperCase()) || "";
                                if (s.length < 7) return;
                                this.$ecast.updateObject(this.player.responseKey, {
                                    activateContentId: !0,
                                    contentId: s
                                }).catch(this.$handleEcastError)
                            }
                        }))
                    }
                }
            });
            var M = (0, p.Z)(G, P, [], !1, null, null, null);
            M.options.__file = "src/games/pp8/drawful-animate/views/Lobby.vue";
            const K = M.exports;
            var W = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "post-game scrollable"
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.info.name)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain"
                }, [s("PostGameActions", {
                    attrs: {
                        player: t.player,
                        classes: {
                            action: "buttonBlack"
                        }
                    }
                }), t._v(" "), s("GalleryLink", {
                    attrs: {
                        artifact: t.artifact
                    }
                })], 1)])
            };
            W._withStripped = !0;
            var V = s(56623),
                H = s(83933);
            const j = n().extend({
                components: {
                    GalleryLink: V.Z,
                    PostGameActions: H.Z
                },
                props: {
                    artifact: Object,
                    info: Object,
                    player: Object
                }
            });
            var F = (0, p.Z)(j, W, [], !1, null, null, null);
            F.options.__file = "src/games/pp8/drawful-animate/views/PostGame.vue";
            const Y = F.exports;
            var z = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "ugc scrollable",
                    attrs: {
                        id: "controller"
                    }
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.ugcHeader)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain"
                }, [0 === t.player.validActions.length ? s("div", {
                    domProps: {
                        textContent: t._s(t.player.noActionsText)
                    }
                }) : t._e(), t._v(" "), t.player.validActions.includes("toggle-visibility") ? s("div", {
                    staticClass: "ugc-action ugc-action-toggle-visibility"
                }, [s("span", {
                    staticClass: "text toggle_prompts_prompt"
                }, [t._v(t._s(t.$t("UGC.TOGGLE_PROMPTS_PROMPT")))]), s("br"), t._v(" "), s("button", {
                    staticClass: "ugc-toggle-visibility-button ugc-toggle-visibility-button-controller",
                    class: {
                        on: t.player.controllerVisibility
                    },
                    attrs: {
                        id: "ugc-toggle-visibility-button-controller",
                        "data-target": "controller"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onToggleVisibility("controller")
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "ugc-toggle-visibility-button  ugc-toggle-visibility-button-screen",
                    class: {
                        on: t.player.screenVisibility
                    },
                    attrs: {
                        id: "ugc-toggle-visibility-button-screen",
                        "data-target": "screen"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onToggleVisibility("screen")
                        }
                    }
                })]) : t._e(), t._v(" "), t.player.validActions.includes("play") ? s("div", {
                    staticClass: "ugc-action ugc-action-play"
                }, [s("div", {
                    staticClass: "ugc-episode-name"
                })]) : t._e(), t._v(" "), t.player.validActions.includes("new") ? s("div", {
                    staticClass: "ugc-action ugc-action-new"
                }, [s("button", {
                    staticClass: "button action-button create_new_episode",
                    attrs: {
                        id: "ugc-new-button",
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("new")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.CREATE_NEW_EPISODE")))])]) : t._e(), t._v(" "), t.player.validActions.includes("load") ? s("div", {
                    staticClass: "ugc-action ugc-action-load"
                }, [s("p", {
                    staticClass: "ugc-option text-box ugc-load previous_episodes"
                }, [t._v(t._s(t.$t("UGC.PREVIOUS_EPISODES")))]), t._v(" "), s("div", {
                    attrs: {
                        id: "episodesRegion"
                    }
                }, [s("div", {
                    staticClass: "episodesList"
                }, t._l(t.player.episodes, (function(e, i) {
                    return s("div", {
                        key: e.remoteContentId || e.localContentId
                    }, [s("button", {
                        staticClass: "action-button",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onEpisodeClick(i)
                            }
                        }
                    }, [s("span", {
                        domProps: {
                            textContent: t._s(e.metadata.title)
                        }
                    }), t._v(" "), null !== e.remoteContentId ? s("span", {
                        staticClass: "episodeId",
                        domProps: {
                            textContent: t._s(e.formattedRemoteContentId)
                        }
                    }) : t._e()])])
                })), 0)])]) : t._e(), t._v(" "), t.player.text ? s("div", {
                    staticClass: "prompt ugc-text",
                    attrs: {
                        id: "prompt",
                        "v-text": t.player.text
                    }
                }) : t._e(), t._v(" "), 0 === t.player.validActions.length ? s("div", {
                    attrs: {
                        id: "ugc-no-actions"
                    }
                }, [s("div", {
                    attrs: {
                        id: "ugc-no-actions-text"
                    }
                })]) : t._e(), t._v(" "), t.player.validActions.includes("add") ? s("div", {
                    staticClass: "ugc-action ugc-action-add"
                }, [s("div", {
                    attrs: {
                        id: "toggleRegion"
                    }
                }), t._v(" "), s("div", {
                    attrs: {
                        id: "inputRegion"
                    }
                }, [s("div", {
                    staticClass: "promptInput"
                }, [s("div", [t._v(t._s(t.promptCharacterCount))]), t._v(" "), s("textarea", {
                    ref: "promptTextarea",
                    attrs: {
                        id: "promptTextarea",
                        "aria-label": "add a prompt",
                        rows: "1",
                        maxlength: t.player.maxContentLength,
                        placeholder: t.$t("UGC.INPUT_PLACEHOLDER")
                    },
                    domProps: {
                        value: t.answer
                    },
                    on: {
                        input: t.onInput,
                        keypress: function(e) {
                            return t.onKeypress(e, "prompt")
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "buttonBlack createButton",
                    attrs: {
                        disabled: t.player.count === t.player.maxCount
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.createNewPrompt.apply(null, arguments)
                        }
                    }
                }, [t._v("\n                        " + t._s(t.$t("UGC.BUTTON_ADD")) + "\n                    ")])])])]) : t._e(), t._v(" "), t.player.validActions.includes("title") ? s("div", {
                    staticClass: "ugc-action ugc-action-title"
                }, [s("label", {
                    staticClass: "text-box",
                    attrs: {
                        for: "textinput"
                    }
                }, [s("span", {
                    staticClass: "text create_new_name_prompt"
                }, [t._v(t._s(t.$t("UGC.CREATE_NEW_NAME_PROMPT")))])]), t._v(" "), s("div", {
                    staticClass: "titleInput"
                }, [s("div", [t._v(t._s(t.titleCharacterCount))]), t._v(" "), s("textarea", {
                    ref: "titleTextarea",
                    attrs: {
                        id: "titleTextarea",
                        rows: "1",
                        maxlength: t.player.maxTitleLength,
                        placeholder: t.$t("UGC.TITLE_INPUT_PLACEHOLDER")
                    },
                    domProps: {
                        value: t.answer
                    },
                    on: {
                        input: t.onInput,
                        keypress: function(e) {
                            return t.onKeypress(e, "title")
                        }
                    }
                }), t._v(" "), s("button", {
                    staticClass: "buttonBlack createButton",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.createNewEpisode.apply(null, arguments)
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.CREATE_NEW_BUTTON")))])])]) : t._e(), t._v(" "), t.player.validActions.includes("close") ? s("div", {
                    staticClass: "ugc-action ugc-action-close"
                }, [s("button", {
                    staticClass: "button action-button button_close",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("close")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_CLOSE")))])]) : t._e(), t._v(" "), t.player.validActions.includes("unlock") ? s("div", {
                    staticClass: "ugc-action ugc-action-unlock"
                }, [s("button", {
                    staticClass: "button action-button button_edit",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("unlock")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_EDIT")))])]) : t._e(), t._v(" "), t.player.validActions.includes("done") ? s("div", {
                    staticClass: "ugc-action ugc-action-done"
                }, [s("button", {
                    staticClass: "button action-button button_done",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("done")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_DONE")))])]) : t._e(), t._v(" "), t.player.validActions.includes("submit") ? s("div", {
                    staticClass: "ugc-action ugc-action-submit"
                }, [s("button", {
                    staticClass: "button action-button button_publish",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.showTermsOfService.apply(null, arguments)
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_PUBLISH")))])]) : t._e(), t._v(" "), t.player.validActions.includes("play") ? s("div", {
                    staticClass: "ugc-action ugc-action-play"
                }, [s("button", {
                    staticClass: "button action-button button_play",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("play")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_PLAY")))])]) : t._e(), t._v(" "), t.player.validActions.includes("remove-content") ? s("div", {
                    staticClass: "ugc-action ugc-action-remove-content"
                }, [s("button", {
                    staticClass: "button action-button button_delete",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.showConfirmDeleteDialog.apply(null, arguments)
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_DELETE")))])]) : t._e(), t._v(" "), t.player.validActions.includes("exit") ? s("div", {
                    staticClass: "ugc-action ugc-action-exit"
                }, [s("button", {
                    staticClass: "button action-button button_back_to_menu",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("exit")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_BACK_TO_MENU")))])]) : t._e(), t._v(" "), t.player.validActions.includes("episodes") ? s("div", {
                    staticClass: "ugc-action ugc-action-episodes"
                }, [s("button", {
                    staticClass: "button action-button button_back_to_episodes",
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onActionButtonClicked("episodes")
                        }
                    }
                }, [t._v(t._s(t.$t("UGC.BUTTON_BACK_TO_EPISODES")))])]) : t._e(), t._v(" "), t.player.validActions.includes("remove") ? s("div", {
                    staticClass: "ugc-action ugc-action-remove"
                }, [s("div", {
                    staticClass: "promptsCount",
                    attrs: {
                        id: "promptsCount"
                    },
                    domProps: {
                        textContent: t._s(t.promptsCount)
                    }
                }), t._v(" "), s("div", {
                    attrs: {
                        id: "promptsRegion"
                    }
                }, [s("div", {
                    staticClass: "promptsList"
                }, t._l(t.player.prompts, (function(e, i) {
                    return s("div", {
                        key: i
                    }, [s("button", {
                        staticClass: "player-prompt",
                        class: {
                            other: e.author !== t.userId
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onPromptClick(i)
                            }
                        }
                    }, [s("span", {
                        domProps: {
                            textContent: t._s(e.text)
                        }
                    })])])
                })), 0)])]) : t._e()])])
            };
            z._withStripped = !0;
            var Z = s(3682),
                X = s(89446),
                q = function(t, e, s, i) {
                    return new(s || (s = Promise))((function(a, n) {
                        function o(t) {
                            try {
                                l(i.next(t))
                            } catch (t) {
                                n(t)
                            }
                        }

                        function r(t) {
                            try {
                                l(i.throw(t))
                            } catch (t) {
                                n(t)
                            }
                        }

                        function l(t) {
                            var e;
                            t.done ? a(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                t(e)
                            }))).then(o, r)
                        }
                        l((i = i.apply(t, e || [])).next())
                    }))
                };
            const J = n().extend({
                props: {
                    player: Object
                },
                i18n: {
                    messages: c
                },
                bb: {
                    tos: (t, e) => `<a class="tosLink" href="https://jackboxgames.com/terms-of-service/" target="_blank">${e}</a>`
                },
                data: () => ({
                    answer: ""
                }),
                computed: {
                    ugcHeader() {
                        return this.player.validActions.includes("load") ? this.$t("UGC.HEADER_DEFAULT") : this.player.validActions.includes("title") ? this.$t("UGC.HEADER_TITLE") : this.player.validActions.includes("add") ? this.$t("UGC.HEADER_WRITE") : this.player.validActions.includes("submit") ? this.$t("UGC.HEADER_PUBLISH") : ""
                    },
                    promptsCount() {
                        const {
                            count: t,
                            maxCount: e,
                            prompts: s
                        } = this.player;
                        if (!s) return "no prompts";
                        if (!e) return "no maxcount";
                        if (void 0 === t) return "no count";
                        let i = `${t}/${e}`;
                        return s.length < t && (i += ` (${t-s.length} hidden)`), i
                    },
                    userId() {
                        return this.$storage.isSupported ? this.$storage.get("uuid") : null
                    },
                    titleCharacterCount() {
                        return this.player.maxTitleLength ? this.player.maxTitleLength - this.answer.length : ""
                    },
                    promptCharacterCount() {
                        return this.player.maxContentLength ? this.player.maxContentLength - this.answer.length : ""
                    }
                },
                mounted() {
                    (0, Z.Z)([this.$refs.titleTextarea, this.$refs.promptTextarea])
                },
                methods: {
                    onKeypress(t, e) {
                        "Enter" === t.key && ("prompt" === e && this.createNewPrompt(), "title" === e && this.createNewEpisode())
                    },
                    onInput(t) {
                        const e = t.target;
                        let s = Number.MAX_SAFE_INTEGER;
                        this.player.validActions.includes("title") && (s = this.player.maxTitleLength), this.player.validActions.includes("add") && (s = this.player.maxContentLength), e.value.length > s && (e.value = e.value.substring(0, s)), e.value = X.c.sanitizeInput(e.value), this.answer = e.value
                    },
                    onToggleVisibility(t) {
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: "toggle-visibility",
                            target: t
                        }).catch(this.$handleEcastError)
                    },
                    onActionButtonClicked(t) {
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: t
                        }).catch(this.$handleEcastError)
                    },
                    showTermsOfService() {
                        return q(this, void 0, void 0, (function*() {
                            "confirm" === (yield this.$showModal("Options", {
                                text: this.$t("UGC.TOS_WARNING"),
                                options: [{
                                    text: this.$t("UGC.TOS_WARNING_AGREE"),
                                    classes: ["confirm"],
                                    value: "confirm"
                                }, {
                                    text: this.$t("UGC.TOS_WARNING_BACK"),
                                    classes: ["cancel"],
                                    value: "cancel"
                                }]
                            })) && this.$ecast.updateObject(this.player.responseKey, {
                                action: "submit"
                            }).catch(this.$handleEcastError)
                        }))
                    },
                    showConfirmDeleteDialog() {
                        return q(this, void 0, void 0, (function*() {
                            "confirm" === (yield this.$showModal("Options", {
                                text: this.$t("UGC.DELETE_WARNING"),
                                options: [{
                                    text: this.$t("UGC.DELETE_WARNING_CONFIRM"),
                                    classes: ["confirm"],
                                    value: "confirm"
                                }, {
                                    text: this.$t("UGC.DELETE_WARNING_CANCEL"),
                                    classes: ["cancel"],
                                    value: "cancel"
                                }]
                            })) && this.$ecast.updateObject(this.player.responseKey, {
                                action: "remove-content"
                            }).catch(this.$handleEcastError)
                        }))
                    },
                    createNewEpisode() {
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: "title",
                            text: this.answer
                        }).catch(this.$handleEcastError), this.answer = ""
                    },
                    createNewPrompt() {
                        this.player.count !== this.player.maxCount && (this.$ecast.updateObject(this.player.responseKey, {
                            action: "add",
                            text: this.answer
                        }).catch(this.$handleEcastError), this.answer = "", setTimeout((() => {
                            this.$refs.promptTextarea instanceof HTMLElement && this.$refs.promptTextarea.focus()
                        }), 0))
                    },
                    onEpisodeClick(t) {
                        const e = this.player.episodes[t],
                            s = e.remoteContentId || e.localContentId;
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: "load",
                            contentId: s
                        }).catch(this.$handleEcastError)
                    },
                    onPromptClick(t) {
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: "remove",
                            key: t
                        }).catch(this.$handleEcastError)
                    }
                }
            });
            var Q = (0, p.Z)(J, z, [], !1, null, null, null);
            Q.options.__file = "src/games/pp8/drawful-animate/views/Ugc.vue";
            const tt = Q.exports;
            var et = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "waiting",
                    class: {
                        isFriendMode: t.player.isFriendMode
                    }
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.header)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain stacked"
                }, [t.player.message ? s("div", {
                    staticClass: "message",
                    domProps: {
                        textContent: t._s(t.player.message)
                    }
                }) : t._e(), t._v(" "), s("div", {
                    staticClass: "logo"
                })])])
            };
            et._withStripped = !0;
            const st = n().extend({
                props: {
                    info: Object,
                    player: Object
                },
                computed: {
                    header() {
                        return this.player && this.player.header ? this.player.header : this.info && this.info.name ? this.info.name : this.$ecast.name
                    }
                }
            });
            var it = (0, p.Z)(st, et, [], !1, null, null, null);
            it.options.__file = "src/games/pp8/drawful-animate/views/Waiting.vue";
            const at = it.exports;
            var nt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "writing"
                }, [s("div", {
                    staticClass: "header",
                    domProps: {
                        textContent: t._s(t.player.header)
                    }
                }), t._v(" "), s("div", {
                    staticClass: "constrain"
                }, [t.isSubmitted ? s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "WRITING.DONE",
                        expression: "'WRITING.DONE'"
                    }]
                }) : s("form", {
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                }, [s("fieldset", {
                    attrs: {
                        disabled: t.isSubmitting
                    }
                }, [s("label", {
                    attrs: {
                        for: "text-input"
                    }
                }, [s("p", {
                    staticClass: "prompt",
                    domProps: {
                        textContent: t._s(t.prompt)
                    }
                })]), t._v(" "), s("textarea", {
                    ref: "textarea",
                    attrs: {
                        id: "text-input",
                        rows: "1",
                        maxlength: t.player.maxLength,
                        placeholder: t.player.placeholder
                    },
                    domProps: {
                        value: t.answer
                    },
                    on: {
                        input: t.onInput,
                        keypress: t.onKeypress
                    }
                }), t._v(" "), t.player.isFriendMode ? s("div", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "WRITING.FRIEND_HINT",
                        expression: "'WRITING.FRIEND_HINT'"
                    }],
                    staticClass: "friend-hint"
                }) : t._e(), t._v(" "), t.player.error ? s("div", {
                    staticClass: "error"
                }, [t._v(t._s(t.player.error))]) : t._e(), t._v(" "), t.filterError ? s("div", {
                    staticClass: "error"
                }, [t._v(t._s(t.$t("WRITING.FILTER_ERROR")))]) : t._e(), t._v(" "), s("div", {
                    staticClass: "controls"
                }, [s("div", {
                    staticClass: "remaining",
                    domProps: {
                        textContent: t._s(t.remainingCharacters)
                    }
                }), t._v(" "), s("button", {
                    staticClass: "submit",
                    attrs: {
                        type: "submit",
                        value: "Submit",
                        disabled: !t.hasAnswer
                    }
                }, [t._v("\n                        " + t._s(t.submitText) + "\n                    ")])])])])])])
            };
            nt._withStripped = !0;
            var ot = function(t, e, s, i) {
                return new(s || (s = Promise))((function(a, n) {
                    function o(t) {
                        try {
                            l(i.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(t) {
                        try {
                            l(i.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(o, r)
                    }
                    l((i = i.apply(t, e || [])).next())
                }))
            };
            const rt = n().extend({
                props: {
                    player: Object,
                    audience: Boolean
                },
                i18n: {
                    messages: c
                },
                data: () => ({
                    answer: "",
                    filterError: !1,
                    isSubmitting: !1,
                    isSubmitted: !1,
                    autoSubmitter: void 0
                }),
                computed: {
                    sanitizedAnswer() {
                        return X.c.sanitizeInput(this.answer).trim()
                    },
                    prompt() {
                        return this.player.prompt || this.$t("WRITING.PROMPT")
                    },
                    remainingCharacters() {
                        return this.player.maxLength && this.answer ? "" + (this.player.maxLength - this.answer.length) : ""
                    },
                    canSubmit() {
                        return !(!this.sanitizedAnswer || this.player.maxLength && this.sanitizedAnswer.length > this.player.maxLength)
                    },
                    submitText() {
                        return this.player.submitText || this.$t("WRITING.BUTTON_SUBMIT")
                    },
                    hasAnswer() {
                        var t;
                        return (null === (t = this.answer) || void 0 === t ? void 0 : t.trim().length) > 0
                    }
                },
                watch: {
                    "player.writingId": function() {
                        this.player.error || (this.answer = ""), this.isSubmitting = !1
                    }
                },
                mounted() {
                    this.autoSubmitter = (0, O.throttle)(this.autoSubmit.bind(this), 400), (0, Z.Z)(this.$refs.textarea), this.player.textKey && this.restoreText()
                },
                beforeDestroy() {
                    var t;
                    null === (t = this.autoSubmitter) || void 0 === t || t.cancel()
                },
                methods: {
                    restoreText() {
                        return ot(this, void 0, void 0, (function*() {
                            try {
                                const t = yield this.$ecast.getText(this.player.textKey);
                                this.answer = t.text
                            } catch (t) {
                                this.$handleEcastError(t)
                            }
                        }))
                    },
                    autoSubmit() {
                        return ot(this, void 0, void 0, (function*() {
                            if (!this.isSubmitting) try {
                                yield this.$ecast.updateText(this.player.textKey, this.sanitizedAnswer)
                            } catch (t) {
                                t instanceof r.EcastFilterError || this.$handleEcastError(t), this.$ecast.updateText(this.player.textKey, "").catch(this.$handleEcastError)
                            }
                        }))
                    },
                    onKeypress(t) {
                        "Enter" === t.key && this.onSubmit()
                    },
                    onInput(t) {
                        const e = t.target,
                            s = this.player.maxLength || Number.MAX_SAFE_INTEGER;
                        e.value.length > s && (e.value = e.value.substring(0, s)), e.value = X.c.sanitizeInput(e.value), this.answer = e.value, this.filterError = !1, this.player.responseKey && this.autoSubmitter && this.autoSubmitter()
                    },
                    onSubmit() {
                        return ot(this, void 0, void 0, (function*() {
                            if (this.isSubmitting = !0, this.audience) try {
                                this.player.textRingName && (yield this.$ecast.pushTextRing(this.player.textRingName, this.sanitizedAnswer), this.isSubmitted = !0)
                            } catch (t) {
                                this.$handleEcastError(t)
                            } else try {
                                if (yield this.$ecast.getText(this.player.textKey), yield this.$ecast.updateText(this.player.textKey, this.sanitizedAnswer), this.filterError = !1, this.player.responseKey) try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        answer: this.sanitizedAnswer,
                                        done: !0
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                            } catch (t) {
                                t instanceof r.EcastFilterError || this.$handleEcastError(t), this.filterError = !0, this.isSubmitting = !1, setTimeout((() => {
                                    this.$refs.textarea instanceof HTMLElement && this.$refs.textarea.focus()
                                }), 0)
                            }
                        }))
                    }
                }
            });
            var lt = (0, p.Z)(rt, nt, [], !1, null, null, null);
            lt.options.__file = "src/games/pp8/drawful-animate/views/Writing.vue";
            const ct = lt.exports,
                ut = n().extend({
                    components: {
                        Drawing: T,
                        Waiting: at,
                        Lobby: K,
                        PostGame: Y,
                        Writing: ct,
                        Choosing: v,
                        Flipping: D,
                        Ugc: tt
                    },
                    themeColor: "#611785",
                    props: {
                        info: Object,
                        player: Object,
                        audiencePlayer: Object,
                        artifact: Object,
                        timer: Object,
                        audienceTimer: Object
                    },
                    ecastKeys: {
                        info: ({
                            id: t
                        }) => `info:${t}`,
                        player: ({
                            id: t
                        }) => `player:${t}`,
                        audiencePlayer: "audiencePlayer",
                        timer: "timer",
                        audienceTimer: "audienceTimer"
                    },
                    ecastProviders: {
                        artifact: t => {
                            if (t.artifact) return t.artifact;
                            let e, s = 0;
                            for (; t[`artifact:${s}`];) e = t[`artifact:${s}`], s += 1;
                            return e
                        }
                    },
                    computed: {
                        parsedKind() {
                            return this.player ? this.player.playerCanDoEpisodes ? "lobby" : this.player.kind : ""
                        },
                        audienceInfo: () => ({
                            name: "audience"
                        })
                    },
                    watch: {
                        player: function(t, e) {
                            if (t && e && e.playerCanDoEpisodes && !t.playerCanDoEpisodes) {
                                const t = e.activeContentId ? "drawful-animate-vip-ugc" : "drawful-animate-vip";
                                this.$analytics.trackEvent({
                                    category: "Lobby",
                                    action: "gameStarted",
                                    label: t
                                })
                            }
                        }
                    },
                    mounted() {
                        this.$debug.setAutomarkIgnoredKeys(["timer"])
                    }
                });
            var dt = (0, p.Z)(ut, i, [], !1, null, "31bec97a", null);
            dt.options.__file = "src/games/pp8/drawful-animate/views/Main.vue";
            const pt = dt.exports
        },
        57095: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/drawful-animate/0a6e431a4dfeabcedffc.svg"
        }
    }
]);
//# sourceMappingURL=sourcemaps/7634.6aca5827a5251691761e.js.map