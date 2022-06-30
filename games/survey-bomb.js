(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/survey-bomb"], {
        23493: (e, t, s) => {
            var n = s(23279),
                a = s(13218);
            e.exports = function(e, t, s) {
                var i = !0,
                    r = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return a(s) && (i = "leading" in s ? !!s.leading : i, r = "trailing" in s ? !!s.trailing : r), n(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: r
                })
            }
        },
        6305: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => c
            });
            var n = function() {
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
            n._withStripped = !0;
            var a = s(2934),
                i = s.n(a);
            const r = i().extend({
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
                        return t = this, s = void 0, a = function*() {
                            const t = e.target;
                            if (!(null == t ? void 0 : t.value)) return;
                            const s = -1 === t.maxLength ? Number.MAX_SAFE_INTEGER : t.maxLength;
                            t.value.length > s ? t.value = t.value.substring(0, s) : (this.$emit("input", t.value), yield i().nextTick(), t.value !== this.value && (t.value = this.value))
                        }, new((n = void 0) || (n = Promise))((function(e, i) {
                            function r(e) {
                                try {
                                    c(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(t) {
                                var s;
                                t.done ? e(t.value) : (s = t.value, s instanceof n ? s : new n((function(e) {
                                    e(s)
                                }))).then(r, o)
                            }
                            c((a = a.apply(t, s || [])).next())
                        }));
                        var t, s, n, a
                    }
                }
            });
            var o = (0, s(51900).Z)(r, n, [], !1, null, null, null);
            o.options.__file = "src/apps/vue/components/Input.vue";
            const c = o.exports
        },
        81988: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => fe
            });
            var n = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "poll-mine",
                    class: e.background
                }, [s("div", {
                    staticClass: "constrain"
                }, [e.player ? ["choices" === e.player.kind ? s("Choices", {
                    attrs: {
                        player: e.player
                    }
                }) : "lobby" === e.player.kind ? s("Lobby", {
                    attrs: {
                        "avatar-images": e.avatarImages,
                        info: e.info,
                        player: e.player
                    }
                }) : "postGame" === e.player.kind ? s("PostGame", {
                    attrs: {
                        artifact: e.artifact,
                        player: e.player
                    }
                }) : "survey" === e.player.kind ? [s("NameHeader", {
                    attrs: {
                        name: e.info.name,
                        "team-index": e.info.teamIndex,
                        torches: e.teams[e.info.teamIndex] && e.teams[e.info.teamIndex].torches
                    }
                }), e._v(" "), s("Survey", {
                    attrs: {
                        player: e.player
                    }
                })] : "waiting" === e.player.kind ? s("Waiting", {
                    attrs: {
                        avatar: e.avatarImages[e.info.avatarId],
                        info: e.info,
                        player: e.player,
                        teams: e.teams
                    }
                }) : e._e()] : e.audience ? ["choices" === e.audience.kind ? [e.audience.streamerMode ? s("Choices", {
                    attrs: {
                        player: e.audience
                    }
                }) : [s("NameHeader", {
                    attrs: {
                        name: e.audienceInfo.name,
                        "team-index": e.audienceInfo.teamIndex,
                        torches: e.audienceInfo.torches
                    }
                }), e._v(" "), s("Playalong", {
                    attrs: {
                        audience: e.audience
                    },
                    on: {
                        correct: function(t) {
                            "number" == typeof e.audienceInfo.torches && e.setAudienceTorches(e.audienceInfo.torches + 1)
                        },
                        incorrect: function(t) {
                            "number" == typeof e.audienceInfo.torches && e.setAudienceTorches(e.audienceInfo.torches - 1)
                        }
                    }
                })]] : "postGame" === e.audience.kind ? s("PostGame", {
                    attrs: {
                        artifact: e.artifact,
                        player: e.audience
                    }
                }) : "survey" === e.audience.kind ? [s("NameHeader", {
                    attrs: {
                        name: e.audienceInfo.name,
                        "team-index": e.audienceInfo.teamIndex,
                        torches: e.audienceInfo.torches
                    }
                }), e._v(" "), s("Survey", {
                    attrs: {
                        player: e.audience
                    }
                })] : "waiting" === e.audience.kind ? s("Waiting", {
                    attrs: {
                        info: e.audienceInfo,
                        player: e.audience,
                        teams: e.teams
                    },
                    on: {
                        reset: function(t) {
                            return e.setAudienceTorches(1)
                        }
                    }
                }) : e._e()] : e._e()], 2)])
            };
            n._withStripped = !0;
            var a = s(2934),
                i = s.n(a),
                r = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "choices"
                    }, [e.hasSubmit ? [s("div", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.player.question,
                            expression: "player.question"
                        }],
                        staticClass: "question"
                    }), e._v(" "), s("ChoiceButton", {
                        staticClass: "chosen",
                        attrs: {
                            choice: e.player.choices.find((function(t) {
                                return e.chosenIndex === t.index
                            })),
                            disabled: ""
                        }
                    })] : [s("form", {
                        on: {
                            submit: function(t) {
                                return t.preventDefault(), e.onSubmitChoices.apply(null, arguments)
                            }
                        }
                    }, [s("fieldset", [s("legend", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.player.question,
                            expression: "player.question"
                        }],
                        staticClass: "question"
                    }), e._v(" "), e._l(e.choices, (function(t) {
                        return s("ChoiceButton", {
                            key: "choice" + t.index,
                            class: {
                                chosen: e.chosenIndex === t.index
                            },
                            attrs: {
                                choice: t,
                                disabled: e.shouldDisableChoice(t),
                                rank: t.rank
                            },
                            on: {
                                choose: function(s) {
                                    return e.onChoose(t.index)
                                }
                            }
                        })
                    }))], 2), e._v(" "), s("div", {
                        staticClass: "actions"
                    }, [-1 === e.chosenIndex ? [s("button", {
                        attrs: {
                            disabled: "",
                            type: "submit"
                        }
                    }, [e._v("\n                        " + e._s(e.$t("SUBMIT_CHOOSE_ONE")) + "\n                    ")])] : [s("button", {
                        attrs: {
                            disabled: e.isSubmitting,
                            type: "submit"
                        }
                    }, [e._v("\n                        " + e._s(e.$t("SUBMIT_CHOOSE_THIS")) + "\n                    ")])]], 2)])]], 2)
                };
            r._withStripped = !0;
            var o = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "choice",
                    class: {
                        chosen: e.chosen, correct: e.correct, disabled: e.disabled, incorrect: e.incorrect, progress: !!e.choice.percent
                    },
                    style: e.cssProps
                }, [e.rank ? [n("div", {
                    staticClass: "rank"
                }, [e._v(e._s(e.rank)), n("sup", [e._v(e._s(e.getOrdinal(e.rank)))])])] : e._e(), e._v(" "), e.removable ? [n("input", {
                    attrs: {
                        id: e.choice.index,
                        disabled: e.disabled,
                        type: "checkbox"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("choose")
                        }
                    }
                }), e._v(" "), e.disabled ? e._e() : n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(53866),
                        expression: "require('../assets/x.inline.svg')"
                    }],
                    staticClass: "remove"
                }), e._v(" "), e.chosen ? [e.correct ? n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(58780),
                        expression: "require('../assets/thumb.inline.svg')"
                    }],
                    staticClass: "result",
                    attrs: {
                        "aria-label": "correct answer"
                    }
                }) : e._e(), e._v(" "), e.incorrect ? n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(18748),
                        expression: "require('../assets/skull.inline.svg')"
                    }],
                    staticClass: "result",
                    attrs: {
                        "aria-label": "incorrect answer"
                    }
                }) : e._e()] : e._e()] : [n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(75416),
                        expression: "require('../assets/door.inline.svg')"
                    }],
                    staticClass: "door"
                }), e._v(" "), n("input", {
                    attrs: {
                        id: e.choice.index,
                        disabled: e.disabled,
                        name: "choices",
                        type: "radio"
                    },
                    on: {
                        change: function(t) {
                            return e.$emit("choose")
                        }
                    }
                }), e._v(" "), e.choice.percent ? n("div", {
                    staticClass: "percent",
                    domProps: {
                        textContent: e._s(e.choice.percent + "%")
                    }
                }) : e._e()], e._v(" "), n("label", {
                    attrs: {
                        for: e.choice.index
                    }
                }, [n("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.choice.text,
                        expression: "choice.text"
                    }]
                })])], 2)
            };
            o._withStripped = !0;
            const c = e => {
                    const t = ["th", "st", "nd", "rd"],
                        s = e % 100;
                    return `${t[(s-20)%10]||t[s]||t[0]}`
                },
                l = i().extend({
                    props: {
                        choice: Object,
                        chosen: Boolean,
                        correct: Boolean,
                        disabled: Boolean,
                        incorrect: Boolean,
                        rank: Number,
                        removable: Boolean
                    },
                    computed: {
                        cssProps() {
                            return {
                                "--scale-x": this.choice.percent ? (this.choice.percent / 100).toFixed(2) : 0
                            }
                        }
                    },
                    methods: {
                        getOrdinal: e => c(e)
                    }
                });
            var d = s(51900),
                h = (0, d.Z)(l, o, [], !1, null, "09e8698c", null);
            h.options.__file = "src/games/pp8/survey-bomb/views/ChoiceButton.vue";
            const u = h.exports,
                p = {
                    en: {
                        SUBMIT_CHOOSE_ONE: "Choose a door",
                        SUBMIT_CHOOSE_THIS: "Choose this door"
                    },
                    fr: {},
                    it: {},
                    de: {},
                    es: {}
                };
            var m = function(e, t, s, n) {
                return new(s || (s = Promise))((function(a, i) {
                    function r(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(r, o)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            const v = i().extend({
                components: {
                    ChoiceButton: u
                },
                props: {
                    player: Object
                },
                data: () => ({
                    chosenIndex: -1,
                    hasSubmit: !1,
                    isSubmitting: !1,
                    pollAudienceInterval: null
                }),
                computed: {
                    choices() {
                        return this.player.choices.filter((e => null == e.rank))
                    }
                },
                i18n: {
                    messages: p
                },
                created() {
                    this.player.countGroupName && (this.pollAudienceInterval = window.setInterval((() => m(this, void 0, void 0, (function*() {
                        yield this.pollAudience()
                    }))), 1e3))
                },
                mounted() {
                    this.$vibrate()
                },
                beforeDestroy() {
                    window.clearInterval(this.pollAudienceInterval), this.pollAudienceInterval = null
                },
                methods: {
                    pollAudience() {
                        return m(this, void 0, void 0, (function*() {
                            let e;
                            try {
                                if (({
                                        choices: e
                                    } = yield this.$ecast.getCountGroup(this.player.countGroupName)), !e) throw new Error("missing choice data")
                            } catch (e) {
                                return void console.warn(`failed to get countgroup ${this.player.countGroupName} during poll: ${e}`)
                            }
                            const t = Object.values(e).reduce(((e, t) => e + t), 0);
                            Object.values(this.choices).forEach(((s, n) => {
                                const a = Object.keys(e).find((e => e.endsWith(`:${s.index}`))),
                                    r = e[a];
                                i().set(this.choices[n], "percent", Math.round(r / t * 100))
                            }))
                        }))
                    },
                    shouldDisableChoice(e) {
                        return !(!this.isSubmitting && !e.rank)
                    },
                    onChoose(e) {
                        return m(this, void 0, void 0, (function*() {
                            if (this.chosenIndex = e, this.player.responseKey) try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    choiceIndex: this.chosenIndex
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    },
                    onSubmitChoices() {
                        return m(this, void 0, void 0, (function*() {
                            switch (this.$ecast.role) {
                                case "audience":
                                    yield this.onAudienceSubmit();
                                    break;
                                case "player":
                                    yield this.onPlayerSubmit()
                            }
                            this.hasSubmit = !0
                        }))
                    },
                    onAudienceSubmit() {
                        return m(this, void 0, void 0, (function*() {
                            if (this.player.countGroupName) {
                                this.isSubmitting = !0;
                                try {
                                    yield this.$ecast.incrementCountGroupCounter(this.player.countGroupName, `${this.player.questionIndex}:${this.chosenIndex}`)
                                } catch (e) {
                                    this.$handleEcastError(e)
                                }
                            }
                        }))
                    },
                    onPlayerSubmit() {
                        return m(this, void 0, void 0, (function*() {
                            if (this.player.responseKey) {
                                this.isSubmitting = !0;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "submit",
                                        choiceIndex: this.chosenIndex
                                    })
                                } catch (e) {
                                    this.$handleEcastError(e)
                                }
                            }
                        }))
                    }
                }
            });
            var f = (0, d.Z)(v, r, [], !1, null, "74b7c7a9", null);
            f.options.__file = "src/games/pp8/survey-bomb/views/Choices.vue";
            const b = f.exports;
            var y = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "lobby"
                }, [e.player.hasControls || "start" === e.steps[e.player.stepIndex] ? s("LobbyActions", {
                    attrs: {
                        player: e.player,
                        "message-location": "start" === e.steps[e.player.stepIndex] ? "bottom" : "none"
                    }
                }) : e._e(), e._v(" "), s("div", {
                    staticClass: "dots"
                }, e._l(e.steps, (function(t, n) {
                    return s("div", {
                        key: n,
                        staticClass: "dot",
                        class: {
                            active: e.player.stepIndex >= n
                        }
                    })
                })), 0), e._v(" "), "avatar" === e.steps[e.player.stepIndex] ? s("div", {
                    staticClass: "selecting"
                }, [s("span", {
                    staticClass: "instructions"
                }, [e._v(e._s(e.$t("INSTRUCTION_AVATAR")))]), e._v(" "), s("div", {
                    staticClass: "avatars"
                }, [e._l(e.player.avatars, (function(t, n) {
                    return [s("button", {
                        key: "av" + n,
                        staticClass: "avatar",
                        class: {
                            selected: t.name === e.selectedAvatar.name
                        },
                        attrs: {
                            disabled: !t.available
                        },
                        on: {
                            click: function(s) {
                                return e.onSelectAvatar(t)
                            }
                        }
                    }, [s("img", {
                        attrs: {
                            src: t.available ? e.avatarImages[t.name] && e.avatarImages[t.name].on : e.avatarImages[t.name] && e.avatarImages[t.name].off,
                            alt: e.avatarImages[t.name] && e.avatarImages[t.name].alt
                        }
                    })]), e._v(" "), e.shouldEndAvatarRow(n + 1) ? s("div", {
                        key: "break" + n,
                        staticClass: "row-break"
                    }) : e._e()]
                }))], 2), e._v(" "), s("div", {
                    staticClass: "actions"
                }, [s("button", {
                    attrs: {
                        disabled: !e.selectedAvatar.name
                    },
                    on: {
                        click: e.onSubmitAvatar
                    }
                }, [e._v("\n                " + e._s(e.$t("SUBMIT")) + "\n            ")])])]) : "name" === e.steps[e.player.stepIndex] ? s("div", {
                    staticClass: "naming"
                }, [s("span", {
                    staticClass: "instructions"
                }, [e._v(e._s(e.$t("INSTRUCTION_NAME_TEAM")))]), e._v(" "), s("form", {
                    on: {
                        submit: function(t) {
                            return t.preventDefault(), e.onSubmitTeamName.apply(null, arguments)
                        }
                    }
                }, [s("Input", {
                    attrs: {
                        maxlength: "21"
                    },
                    model: {
                        value: e.teamName,
                        callback: function(t) {
                            e.teamName = t
                        },
                        expression: "teamName"
                    }
                }), e._v(" "), e.filterError ? s("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "FILTER_ERROR",
                        expression: "'FILTER_ERROR'"
                    }],
                    staticClass: "error"
                }) : e._e(), e._v(" "), s("button", {
                    staticClass: "submit",
                    attrs: {
                        disabled: !e.teamName,
                        type: "submit"
                    }
                }, [e._v("\n                " + e._s(e.$t("SUBMIT")) + "\n            ")])], 1)]) : "rank" === e.steps[e.player.stepIndex] ? s("div", {
                    staticClass: "ranking"
                }, [s("SurveyForm", {
                    attrs: {
                        choices: e.choices,
                        "on-submit": e.onSubmitNameSurvey,
                        places: Math.min(e.player.names.length, 3),
                        question: e.$t("INSTRUCTION_RANK_TEAM")
                    }
                })], 1) : e._e(), e._v(" "), "audience" !== e.$ecast.role && "avatar" !== e.steps[e.player.stepIndex] ? [s("TeamSwitcher", {
                    attrs: {
                        avatar: e.avatarImages[e.info.avatarId],
                        "can-switch": e.player.canSwitch,
                        "team-index": e.player.teamIndex
                    },
                    on: {
                        "switch-teams": e.onSwitchTeams
                    }
                })] : e._e()], 2)
            };
            y._withStripped = !0;
            var g = s(55507),
                _ = s(6305),
                x = s(13494),
                w = s(65853),
                C = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "survey-form"
                    }, [e.instructions ? s("div", {
                        staticClass: "instructions"
                    }, [s("h1", [e._v(e._s(e.instructions))])]) : e._e(), e._v(" "), s("form", {
                        on: {
                            submit: function(t) {
                                return t.preventDefault(), e.onSubmit(e.selections)
                            }
                        }
                    }, [s("fieldset", [s("legend", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.question,
                            expression: "question"
                        }],
                        staticClass: "question"
                    }), e._v(" "), e._l(e.choices, (function(t) {
                        return s("ChoiceButton", {
                            key: "choice" + t.index,
                            class: {
                                chosen: e.selections.includes(t.index)
                            },
                            attrs: {
                                choice: t,
                                disabled: e.disabled || !e.selections.includes(-1) && !e.selections.includes(t.index),
                                rank: e.getRank(t.index),
                                removable: ""
                            },
                            on: {
                                choose: function(s) {
                                    return e.toggleSelection(t.index)
                                }
                            }
                        })
                    }))], 2), e._v(" "), e.disabled ? e._e() : s("div", {
                        key: "actions" + e.nextRank,
                        staticClass: "actions"
                    }, [e.selections.includes(-1) ? [s("button", {
                        attrs: {
                            disabled: "",
                            type: "submit"
                        }
                    }, [e._v("\n                    " + e._s(e.$t("SUBMIT_PICK_MORE", {
                        amount: e.places - e.selections.filter((function(e) {
                            return -1 !== e
                        })).length
                    })) + "\n                ")])] : [s("button", {
                        attrs: {
                            type: "submit"
                        }
                    }, [e._v("\n                    " + e._s(e.$t("SUBMIT")) + "\n                ")])]], 2)])])
                };
            C._withStripped = !0;
            const E = {
                    en: {
                        INSTRUCTION_REVIEW: "Remember your choices",
                        SUBMIT_PICK_MORE: "Pick {amount} more"
                    },
                    fr: {},
                    it: {},
                    de: {},
                    es: {}
                },
                I = i().extend({
                    components: {
                        ChoiceButton: u
                    },
                    props: {
                        choices: Array,
                        disabled: Boolean,
                        instructions: String,
                        onChoose: Function,
                        onSubmit: Function,
                        places: Number,
                        question: String
                    },
                    i18n: {
                        messages: E,
                        sharedMessages: w.s
                    },
                    data() {
                        return {
                            nextRank: 1,
                            selections: new Array(this.places).fill(-1)
                        }
                    },
                    watch: {
                        places: function(e) {
                            for (let t = this.selections.length; t < e; t++) this.selections.push(-1), this.nextRank = this.getNextRank()
                        }
                    },
                    methods: {
                        getNextRank() {
                            return this.selections.findIndex((e => -1 === e)) + 1
                        },
                        getRank(e) {
                            return this.selections.includes(e) ? this.selections.findIndex((t => t === e)) + 1 : null
                        },
                        toggleSelection(e) {
                            if (this.selections.includes(e)) {
                                i().set(this.selections, this.selections.findIndex((t => t === e)), -1);
                                const t = this.getNextRank();
                                t > 0 && (this.nextRank = t)
                            } else i().set(this.selections, this.nextRank - 1, e), this.nextRank = this.getNextRank();
                            this.onChoose && this.onChoose(this.selections.filter((e => -1 !== e)))
                        }
                    }
                });
            var S = (0, d.Z)(I, C, [], !1, null, "1a51ff57", null);
            S.options.__file = "src/games/pp8/survey-bomb/views/SurveyForm.vue";
            const T = S.exports;
            var N = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "team-switcher",
                    class: {
                        left: 1 === e.teamIndex, right: 0 === e.teamIndex
                    }
                }, [s("button", {
                    attrs: {
                        disabled: !e.canSwitch || e.isSwitching
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("switch-teams")
                        }
                    }
                }, [e.avatar ? s("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: e.avatar.on,
                        alt: e.avatar.alt
                    }
                }) : e._e(), e._v(" "), s("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: e.getArrowSrc(),
                        expression: "getArrowSrc()"
                    }],
                    staticClass: "arrow"
                }), e._v("\n        " + e._s(e.$t("SWITCH_TEAMS")) + "\n    ")])])
            };
            N._withStripped = !0;
            var k = s(15516),
                A = s(66296);
            const $ = i().extend({
                props: {
                    avatar: Object,
                    canSwitch: Boolean,
                    teamIndex: Number
                },
                i18n: {
                    messages: {
                        en: {
                            SWITCH_TEAMS: "Switch Teams"
                        },
                        fr: {},
                        it: {},
                        de: {},
                        es: {}
                    }
                },
                data: () => ({
                    isSwitching: !1
                }),
                methods: {
                    getArrowSrc() {
                        return 0 === this.teamIndex ? A : k
                    }
                }
            });
            var R = (0, d.Z)($, N, [], !1, null, "f57faf92", null);
            R.options.__file = "src/games/pp8/survey-bomb/views/TeamSwitcher.vue";
            const O = R.exports;
            var M = function(e, t, s, n) {
                return new(s || (s = Promise))((function(a, i) {
                    function r(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(r, o)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            const P = i().extend({
                components: {
                    LobbyActions: x.Z,
                    Input: _.Z,
                    SurveyForm: T,
                    TeamSwitcher: O
                },
                props: {
                    avatarImages: Object,
                    info: Object,
                    player: Object
                },
                i18n: {
                    messages: {
                        en: {
                            FILTER_ERROR: "That's not allowed, enter something else!",
                            INSTRUCTION_AVATAR: "Pick your avatar",
                            INSTRUCTION_NAME_TEAM: "Suggest a team name",
                            INSTRUCTION_RANK_TEAM: "Rank your favorite team names",
                            STREAMER_MODAL_CONFIRM: "Yeah, yeah, I got it",
                            STREAMER_MODAL_SUBTEXT_ATTENTION: "[b]YOU MUST HAVE THE AUDIENCE ON TO PLAY![/b]",
                            STREAMER_MODAL_SUBTEXT_BEST: "[b]BEST:[/b] Passwording the game and sharing the password with your desired team",
                            STREAMER_MODAL_SUBTEXT_GOOD: "[b]ALMOST AS GOOD:[/b] Hiding the room code and setting a max player limit",
                            STREAMER_MODAL_SUBTEXT_RECOMMEND: "We recommend the following settings to help create your desired team and audience.",
                            STREAMER_MODAL_SUBTEXT_RESTART: "So, if you haven't done that, maybe restart the game?",
                            STREAMER_MODAL_TEXT: "Welcome to Streamer Mode!"
                        },
                        fr: {},
                        it: {},
                        de: {},
                        es: {}
                    },
                    sharedMessages: w.s
                },
                bb: {
                    section: (e, t) => `<div class="section">${t}</div>`
                },
                data: () => ({
                    filterError: !1,
                    isSubmitting: !1,
                    selectedAvatar: {},
                    steps: ["avatar", "name", "rank", "start"],
                    teamName: ""
                }),
                computed: {
                    choices() {
                        var e;
                        return null === (e = this.player.names) || void 0 === e ? void 0 : e.map(((e, t) => ({
                            index: t,
                            text: e
                        })))
                    }
                },
                watch: {
                    "player.avatars": function() {
                        if (!this.selectedAvatar.name) return;
                        const e = this.player.avatars.find((e => e.name === this.selectedAvatar.name));
                        (null == e ? void 0 : e.available) || (this.selectedAvatar = {})
                    },
                    "player.stepIndex": function() {
                        this.isSubmitting = !1
                    }
                },
                mounted() {
                    return M(this, void 0, void 0, (function*() {
                        this.player.streamerMode && this.player.vipName === this.info.name && (yield this.$showModal("Options", {
                            text: this.$t("STREAMER_MODAL_TEXT"),
                            subtext: `${this.$t("STREAMER_MODAL_SUBTEXT_ATTENTION")}[section]${this.$t("STREAMER_MODAL_SUBTEXT_RECOMMEND")}[/section][section]${this.$t("STREAMER_MODAL_SUBTEXT_BEST")}[/section][section]${this.$t("STREAMER_MODAL_SUBTEXT_GOOD")}[/section][section]${this.$t("STREAMER_MODAL_SUBTEXT_RESTART")}[/section]`,
                            options: [{
                                text: this.$t("STREAMER_MODAL_CONFIRM"),
                                value: "confirm"
                            }]
                        }, {
                            classes: "pm-streamer-mode"
                        }))
                    }))
                },
                methods: {
                    shouldEndAvatarRow: e => (e + 3) % 7 == 0 || e % 7 == 0,
                    onSelectAvatar(e) {
                        this.selectedAvatar = e
                    },
                    onSubmitAvatar() {
                        return M(this, void 0, void 0, (function*() {
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "avatar",
                                    avatar: this.selectedAvatar.name
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    },
                    onSubmitNameSurvey(e) {
                        return M(this, void 0, void 0, (function*() {
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "rankNames",
                                    answers: e
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    },
                    onSubmitTeamName() {
                        return M(this, void 0, void 0, (function*() {
                            if (this.player.textKey) {
                                this.filterError = !1;
                                try {
                                    yield this.$ecast.updateText(this.player.textKey, this.teamName)
                                } catch (e) {
                                    if (e instanceof g.EcastFilterError) return void(this.filterError = !0);
                                    this.$handleEcastError(e)
                                }
                            }
                        }))
                    },
                    onSwitchTeams() {
                        return M(this, void 0, void 0, (function*() {
                            if (this.player.responseKey) try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "switchTeams"
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    }
                }
            });
            var L = (0, d.Z)(P, y, [], !1, null, "6f411366", null);
            L.options.__file = "src/games/pp8/survey-bomb/views/Lobby.vue";
            const D = L.exports;
            var U = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "header",
                    attrs: {
                        "aria-label": "name and torch section"
                    }
                }, [e.name ? [n("div", {
                    staticClass: "banner",
                    class: null != e.teamIndex ? "team-" + e.teamIndex : ""
                }, [n("span", {
                    staticClass: "name"
                }, [e._v(e._s(e.name))])])] : e._e(), e._v(" "), null != e.torches ? n("div", {
                    staticClass: "torches"
                }, [0 === e.torches ? n("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "NO_TORCHES",
                        expression: "'NO_TORCHES'"
                    }],
                    staticClass: "torch-warning"
                }) : e._l(e.torches, (function(e, t) {
                    return n("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg",
                            value: s(44597),
                            expression: "require('../assets/torch.inline.svg')"
                        }],
                        key: "torch" + t,
                        staticClass: "torch"
                    })
                }))], 2) : e._e()], 2)
            };
            U._withStripped = !0;
            const H = i().extend({
                props: {
                    name: String,
                    teamIndex: Number,
                    torches: Number
                },
                i18n: {
                    messages: {
                        en: {
                            NO_TORCHES: "No torches"
                        },
                        fr: {},
                        it: {},
                        de: {},
                        es: {}
                    }
                },
                themeColor: "#000"
            });
            var B = (0, d.Z)(H, U, [], !1, null, "5c609c11", null);
            B.options.__file = "src/games/pp8/survey-bomb/views/NameHeader.vue";
            const F = B.exports;
            var Z = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "post-game"
                }, [s("PostGameActions", {
                    attrs: {
                        player: e.player
                    }
                }), e._v(" "), s("GalleryLink", {
                    attrs: {
                        artifact: e.artifact
                    }
                })], 1)
            };
            Z._withStripped = !0;
            var j = s(56623),
                G = s(83933);
            const q = i().extend({
                components: {
                    GalleryLink: j.Z,
                    PostGameActions: G.Z
                },
                props: {
                    artifact: Object,
                    player: Object
                }
            });
            var K = (0, d.Z)(q, Z, [], !1, null, "dde521ea", null);
            K.options.__file = "src/games/pp8/survey-bomb/views/PostGame.vue";
            const X = K.exports;
            var V = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "survey"
                }, [e.hasSubmit ? [s("SurveyForm", {
                    staticClass: "review",
                    attrs: {
                        choices: e.answers.map((function(t) {
                            return e.player.choices.find((function(e) {
                                return t === e.index
                            }))
                        })),
                        disabled: "",
                        instructions: e.$t("INSTRUCTION_REVIEW"),
                        question: e.player.question
                    }
                })] : [s("SurveyForm", {
                    attrs: {
                        choices: e.player.choices,
                        disabled: e.isSubmitting,
                        "on-choose": e.onChooseAnswer,
                        "on-submit": e.onSubmitSurvey,
                        places: e.player.places,
                        question: e.player.question
                    }
                })]], 2)
            };
            V._withStripped = !0;
            var W = function(e, t, s, n) {
                return new(s || (s = Promise))((function(a, i) {
                    function r(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(r, o)
                    }
                    c((n = n.apply(e, t || [])).next())
                }))
            };
            const Y = i().extend({
                components: {
                    SurveyForm: T
                },
                props: {
                    player: Object
                },
                i18n: {
                    messages: E
                },
                data() {
                    return {
                        answers: new Array(this.player.places).fill(-1),
                        hasSubmit: !1,
                        isSubmitting: !1
                    }
                },
                created() {
                    this.$storage.isSupported && this.$storage.remove("pm-answers")
                },
                mounted() {
                    this.$vibrate()
                },
                methods: {
                    onChooseAnswer(e) {
                        return W(this, void 0, void 0, (function*() {
                            if (this.answers = e, this.player.responseKey) try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    answers: this.answers
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    },
                    onSubmitSurvey() {
                        return W(this, void 0, void 0, (function*() {
                            switch (this.$ecast.role) {
                                case "audience":
                                    this.onAudienceSubmit();
                                    break;
                                case "player":
                                    yield this.onPlayerSubmit()
                            }
                            this.hasSubmit = !0
                        }))
                    },
                    onAudienceSubmit() {
                        this.player.countGroupName && (this.isSubmitting = !0, this.answers.forEach(((e, t) => {
                            const s = t + 1;
                            this.$ecast.incrementCountGroupCounter(this.player.countGroupName, `${e.toString()}:${s}`).catch(this.$handleEcastError)
                        })))
                    },
                    onPlayerSubmit() {
                        return W(this, void 0, void 0, (function*() {
                            if (this.player.responseKey) {
                                this.isSubmitting = !0;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "submit",
                                        answers: this.answers
                                    })
                                } catch (e) {
                                    this.$handleEcastError(e)
                                }
                            }
                        }))
                    }
                }
            });
            var J = (0, d.Z)(Y, V, [], !1, null, "25ca941a", null);
            J.options.__file = "src/games/pp8/survey-bomb/views/Survey.vue";
            const z = J.exports;
            var Q = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "waiting"
                }, [s("div", {
                    staticClass: "logo"
                }), e._v(" "), e.avatar ? s("div", {
                    staticClass: "avatar"
                }, [s("img", {
                    attrs: {
                        src: e.avatar.on,
                        alt: e.avatar.alt
                    }
                }), e._v(" "), s("div", {
                    staticClass: "name"
                }, [e._v(e._s(e.info.name))])]) : e._e(), e._v(" "), e.hasTeamData ? s("div", {
                    staticClass: "teams"
                }, [s("TeamInfo", {
                    attrs: {
                        "team-index": e.teamIndexes.current,
                        teams: e.teams,
                        "team-name": e.teams[e.teamIndexes.current].name,
                        torches: e.teams[e.teamIndexes.current].torches
                    }
                }), e._v(" "), s("div", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "VERSUS",
                        expression: "'VERSUS'"
                    }],
                    staticClass: "versus"
                }), e._v(" "), s("TeamInfo", {
                    attrs: {
                        "team-index": e.teamIndexes.rival,
                        teams: e.teams,
                        "team-name": e.teams[e.teamIndexes.rival].name,
                        torches: e.teams[e.teamIndexes.rival].torches
                    }
                })], 1) : e._e(), e._v(" "), e.message ? s("div", {
                    staticClass: "message",
                    class: e.message.class
                }, [s("p", {
                    staticClass: "header",
                    domProps: {
                        textContent: e._s(e.message.header)
                    }
                }), e._v(" "), s("p", {
                    staticClass: "text",
                    domProps: {
                        textContent: e._s(e.message.text)
                    }
                })]) : s("div", {
                    staticClass: "actions"
                }, [e.player.canSkip ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "SKIP_TUTORIALS",
                        expression: "'SKIP_TUTORIALS'"
                    }],
                    on: {
                        click: e.onSkip
                    }
                }) : e._e()])])
            };
            Q._withStripped = !0;
            var ee = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "info",
                    attrs: {
                        "aria-label": "team section"
                    }
                }, [n("div", {
                    staticClass: "torches"
                }, e._l(e.torches, (function(e, t) {
                    return n("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg",
                            value: s(44597),
                            expression: "require('../assets/torch.inline.svg')"
                        }],
                        key: "torch" + t,
                        staticClass: "torch"
                    })
                })), 0), e._v(" "), n("img", {
                    staticClass: "ribbon",
                    attrs: {
                        src: s(77589)("./ribbon-team-" + e.teamIndex + ".png"),
                        alt: "team ribbon"
                    }
                }), e._v(" "), n("span", {
                    staticClass: "team"
                }, [e._v(e._s(e.teamName))])])
            };
            ee._withStripped = !0;
            const te = i().extend({
                props: {
                    teamIndex: Number,
                    teamName: String,
                    torches: Number
                }
            });
            var se = (0, d.Z)(te, ee, [], !1, null, "17ea6684", null);
            se.options.__file = "src/games/pp8/survey-bomb/views/TeamInfo.vue";
            const ne = se.exports;
            const ae = i().extend({
                components: {
                    TeamInfo: ne
                },
                props: {
                    avatar: Object,
                    info: Object,
                    player: Object,
                    teams: Object
                },
                i18n: {
                    messages: {
                        en: {
                            FINAL_CHANCE_BOTH: "If either team gets the next choice right, the game is over!",
                            FINAL_CHANCE_CURRENT: "If their team gets their next choice right, the game is over!",
                            FINAL_CHANCE_HEADER: "Elimination Moment",
                            FINAL_CHANCE_RIVAL: "If your team gets your next choice right, the game is over!",
                            LOSE_HEADER: "You’re Trapped",
                            LOSE_TEXT: ["Don’t worry, apparently you were tasty.", "At least the other team is happy.", "Learn more about your friends next time.", "Still, you learned a lot about each other.", "It is pitch black. You are likely to be eaten by a grue.", "Even worse, you’re damp.", "Theivery doesn’t pay!", "It’s okay, Laverne will keep you company.", "Enjoy the musty air.", "At least your team name was cool."],
                            SKIP_TUTORIALS: "Skip Tutorials",
                            UP_NEXT_HEADER: "You’re Up Next",
                            UP_NEXT_TEXT: ["Get ready! You’re choosing next.", "Pay attention because you’re picking the next door.", "After this choice, it’s your turn… so hope they fail!"],
                            WIN_HEADER: "You Escaped",
                            WIN_TEXT: ["Congratulations on a job well done!", "Teamwork made this dream work.", "Don’t spend all that gold you stole earlier in one place.", "Enjoy the fresh air.", "Don’t forget to rate your stay!", "I’m sure the other team is just fine.", "You picked your friends’ knows!", "Looking forward to your next visit.", "The real treasure was the friends we lost to the depths of this mine.", "Everyone is proud of you."],
                            VERSUS: "VS"
                        },
                        fr: {},
                        it: {},
                        de: {},
                        es: {}
                    }
                },
                data() {
                    return {
                        loseMsg: this.$ts("LOSE_TEXT"),
                        nextMsg: this.$ts("UP_NEXT_TEXT"),
                        winMsg: this.$ts("WIN_TEXT")
                    }
                },
                computed: {
                    finalChanceMsg() {
                        const e = this.isTeamFinalChance(this.teamIndexes.current),
                            t = this.isTeamFinalChance(this.teamIndexes.rival);
                        return e && t ? this.$t("FINAL_CHANCE_BOTH") : t ? this.$t("FINAL_CHANCE_RIVAL") : e ? this.$t("FINAL_CHANCE_CURRENT") : "An unknown team may be doomed by the next choice!"
                    },
                    hasTeamData() {
                        return !!this.teams && !!this.teams[this.teamIndexes.current] && !!this.teams[this.teamIndexes.rival]
                    },
                    message() {
                        if (this.$vibrate(), this.hasTeamData) {
                            if (this.player.over) return (null == this.info.teamIndex ? this.info.torches > 0 : this.teams[this.teamIndexes.current].torches >= this.teams[this.teamIndexes.rival].torches) ? {
                                class: "win",
                                header: this.$t("WIN_HEADER"),
                                text: this.winMsg
                            } : {
                                class: "lose",
                                header: this.$t("LOSE_HEADER"),
                                text: this.loseMsg
                            };
                            if (this.isTeamFinalChance(this.teamIndexes.current) || this.isTeamFinalChance(this.teamIndexes.rival)) return {
                                class: "finalChance",
                                header: this.$t("FINAL_CHANCE_HEADER"),
                                text: this.finalChanceMsg
                            }
                        }
                        return "player" === this.$ecast.role && this.player.next ? {
                            class: "next",
                            header: this.$t("UP_NEXT_HEADER"),
                            text: this.nextMsg
                        } : null
                    },
                    teamIndexes() {
                        return null == this.info.teamIndex ? {
                            current: 0,
                            rival: 1
                        } : {
                            current: this.info.teamIndex,
                            rival: 0 === this.info.teamIndex ? 1 : 0
                        }
                    }
                },
                watch: {
                    "player.over": function(e) {
                        e && "audience" === this.$ecast.role && (this.$emit("reset"), this.$storage.isSupported && (this.$storage.remove("pm-answers"), this.$storage.remove("pm-torches")))
                    }
                },
                methods: {
                    isTeamFinalChance(e) {
                        return !(!this.hasTeamData || null == this.info.teamIndex) && this.teams[e].finalChance
                    },
                    onSkip() {
                        return e = this, t = void 0, n = function*() {
                            if (this.player.responseKey) try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "skip"
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }, new((s = void 0) || (s = Promise))((function(a, i) {
                            function r(e) {
                                try {
                                    c(n.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(n.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                    e(t)
                                }))).then(r, o)
                            }
                            c((n = n.apply(e, t || [])).next())
                        }));
                        var e, t, s, n
                    }
                }
            });
            var ie = (0, d.Z)(ae, Q, [], !1, null, "9c843cf8", null);
            ie.options.__file = "src/games/pp8/survey-bomb/views/Waiting.vue";
            const re = ie.exports;
            var oe = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "playalong"
                }, [s("h1", {
                    staticClass: "instructions"
                }, [e.audience.ordered ? [e._v("\n            Choose the door you think is " + e._s(e.getNumberWithOrdinal(e.audience.ruleset[e.rankedRules.length] + 1)) + "\n        ")] : [e._v("\n            Choose all " + e._s(e.audience.ruleset.length) + " correct doors\n        ")]], 2), e._v(" "), s("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.audience.question,
                        expression: "audience.question"
                    }],
                    staticClass: "question"
                }), e._v(" "), e._l(e.audience.choices, (function(t) {
                    return s("div", {
                        key: "choice" + t.index
                    }, [s("ChoiceButton", {
                        attrs: {
                            choice: t,
                            chosen: e.isChosen(t) || e.audience.ordered && e.isIncorrect(t),
                            correct: e.isCorrect(t),
                            disabled: e.shouldDisable(t),
                            incorrect: e.isIncorrect(t),
                            rank: t.rank || e.getOrder(t),
                            removable: ""
                        },
                        on: {
                            choose: function(s) {
                                return e.onChoose(t.index)
                            }
                        }
                    })], 1)
                })), e._v(" "), s("div", [e._v("Remaining Choices: " + e._s(e.remainingChoices))])], 2)
            };
            oe._withStripped = !0;
            var ce = s(23493),
                le = s.n(ce),
                de = function(e, t, s, n) {
                    return new(s || (s = Promise))((function(a, i) {
                        function r(e) {
                            try {
                                c(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function o(e) {
                            try {
                                c(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                e(t)
                            }))).then(r, o)
                        }
                        c((n = n.apply(e, t || [])).next())
                    }))
                };
            const he = i().extend({
                components: {
                    ChoiceButton: u
                },
                props: {
                    audience: Object
                },
                data() {
                    return {
                        answers: new Array(this.audience.ruleset.length).fill(-1),
                        nextRule: this.audience.ruleset[0],
                        decrementPNCounter: null,
                        incrementPNCounter: null
                    }
                },
                computed: {
                    correctAnswers() {
                        return this.correctChoices.filter((({
                            index: e
                        }) => this.answers.includes(e)))
                    },
                    correctChoices() {
                        return this.audience.choices.filter((e => this.isCorrect(e)))
                    },
                    pnCounterPrefix() {
                        return `${this.audience.voteID}:${this.audience.questionIndex}`
                    },
                    rankedRules() {
                        return this.audience.choices.filter((e => this.isRanked(e))).map((e => e.rank - 1)).filter((e => this.audience.ruleset.includes(e)))
                    },
                    remainingChoices() {
                        if (this.audience.ordered) return -1 === this.answers[this.rankedRules.length] ? 1 : 0;
                        const e = this.answers.filter((e => -1 !== e && !this.correctAnswers.some((({
                            index: t
                        }) => e === t))));
                        return Math.max(0, this.audience.ruleset.length - this.correctChoices.length - e.length)
                    }
                },
                watch: {
                    "audience.choices": function(e, t) {
                        e.filter((e => !t.some((t => t.rank === e.rank)))).forEach((e => {
                            let t = !1,
                                s = !1;
                            this.audience.ordered ? (s = this.isIncorrect(e), s && i().set(this.answers, this.audience.ruleset[e.rank - 1], -1)) : this.isChosen(e) && (t = this.isCorrect(e), s = this.isIncorrect(e)), t && this.$emit("correct"), s && this.$emit("incorrect")
                        })), this.nextRule = this.getNextRule()
                    },
                    "audience.questionIndex": function() {
                        this.answers = new Array(this.audience.ruleset.length).fill(-1), this.$storage.isSupported && this.$storage.remove("pm-answers")
                    },
                    "audience.voteID": function() {
                        const e = this.answers[this.rankedRules.length]; - 1 !== e && this.incrementPNCounter(`${this.pnCounterPrefix}:${e}`)
                    }
                },
                created() {
                    this.$storage.isSupported && this.$storage.get("pm-answers") && (this.answers = JSON.parse(this.$storage.get("pm-answers"))), this.decrementPNCounter = le()(this._decrementPNCounter.bind(this), 250), this.incrementPNCounter = le()(this._incrementPNCounter.bind(this), 250), this.nextRule = this.getNextRule()
                },
                i18n: {
                    messages: p
                },
                methods: {
                    getNextRule() {
                        let e = this.answers.findIndex((e => -1 === e));
                        return this.audience.ordered && (e = this.rankedRules.length), this.audience.ruleset[e]
                    },
                    getNumberWithOrdinal: e => (e => `${e}${c(e)}`)(e),
                    getOrder(e) {
                        return this.audience.ordered && this.isChosen(e) ? this.audience.ruleset[this.rankedRules.length] + 1 : null
                    },
                    isChosen(e) {
                        return this.answers.includes(e.index)
                    },
                    isCorrect(e) {
                        if (this.audience.ordered) {
                            const t = this.audience.ruleset.findIndex((t => t === e.rank - 1));
                            return -1 !== t && this.answers[t] === e.index
                        }
                        return this.isRanked(e) && this.audience.ruleset.includes(e.rank - 1)
                    },
                    isIncorrect(e) {
                        if (this.audience.ordered) {
                            const t = this.audience.ruleset.findIndex((t => t === e.rank - 1));
                            return -1 !== t && this.answers[t] !== e.index
                        }
                        return this.isRanked(e) && !this.audience.ruleset.includes(e.rank - 1)
                    },
                    isRanked: e => !!e.rank,
                    shouldDisable(e) {
                        return !!this.isRanked(e) || !this.isChosen(e) && 0 === this.remainingChoices
                    },
                    onChoose(e) {
                        const t = `${this.pnCounterPrefix}:${e}`;
                        if (this.answers.includes(e)) {
                            this.decrementPNCounter(t);
                            const s = this.answers.findIndex((t => t === e));
                            this.audience.ordered ? i().set(this.answers, s, -1) : (this.answers.splice(s, 1), this.answers.push(-1))
                        } else this.incrementPNCounter(t), i().set(this.answers, this.audience.ruleset.findIndex((e => e === this.nextRule)), e);
                        this.nextRule = this.getNextRule(), this.$storage.isSupported && this.$storage.set("pm-answers", JSON.stringify(this.answers))
                    },
                    _decrementPNCounter(e) {
                        return de(this, void 0, void 0, (function*() {
                            try {
                                yield this.$ecast.decrementPNCounter(e)
                            } catch (t) {
                                t instanceof g.EcastEntityNotFound ? console.warn(`PNCounter ${e} not found, can't subtract vote`) : this.$handleEcastError(t)
                            }
                        }))
                    },
                    _incrementPNCounter(e) {
                        return de(this, void 0, void 0, (function*() {
                            try {
                                yield this.$ecast.incrementPNCounter(e)
                            } catch (t) {
                                t instanceof g.EcastEntityNotFound ? console.warn(`PNCounter ${e} not found, can't add vote`) : this.$handleEcastError(t)
                            }
                        }))
                    }
                }
            });
            var ue = (0, d.Z)(he, oe, [], !1, null, "22597437", null);
            ue.options.__file = "src/games/pp8/survey-bomb/views/audience/Playalong.vue";
            const pe = ue.exports;
            const me = i().extend({
                components: {
                    NameHeader: F,
                    Choices: b,
                    Lobby: D,
                    PostGame: X,
                    Survey: z,
                    Waiting: re,
                    Playalong: pe
                },
                ecastKeys: {
                    audience: "audiencePlayer",
                    info: ({
                        id: e
                    }) => `info:${e}`,
                    player: ({
                        id: e
                    }) => `player:${e}`,
                    teams: "teams"
                },
                ecastProviders: {
                    artifact: e => {
                        if (e.artifact) return e.artifact;
                        let t, s = 0;
                        for (; e[`artifact:${s}`];) t = e[`artifact:${s}`], s += 1;
                        return t
                    }
                },
                themeColor: "#582664",
                props: {
                    artifact: Object,
                    audience: Object,
                    info: Object,
                    player: Object,
                    teams: Object
                },
                data: () => ({
                    audienceInfo: {
                        name: "AUDIENCE",
                        teamIndex: null,
                        torches: null
                    },
                    avatarImages: {}
                }),
                computed: {
                    background() {
                        var e, t;
                        if (!this.audience && !this.player) return "bg-fallback";
                        switch ((null === (e = this.audience) || void 0 === e ? void 0 : e.kind) || (null === (t = this.player) || void 0 === t ? void 0 : t.kind)) {
                            case "choices":
                                return "bg-choices";
                            case "lobby":
                            case "survey":
                            case "waiting":
                                return "bg-game";
                            case "postGame":
                            default:
                                return "bg-fallback"
                        }
                    }
                },
                watch: {
                    audience: function() {
                        this.audience.streamerMode ? (this.audienceInfo.teamIndex = 1, this.audienceInfo.torches = this.teams && this.teams[1].torches) : this.audienceInfo.torches = this.$storage.isSupported && this.$storage.get("pm-torches") ? JSON.parse(this.$storage.get("pm-torches")) : 1
                    },
                    "player.kind": "setThemeColor",
                    "audience.kind": "setThemeColor"
                },
                created() {
                    this.setAvatarImages(), "audience" === this.$ecast.role && this.$storage.isSupported && this.$storage.get("pm-last-room") !== this.$ecast.code && (this.$storage.remove("pm-answers"), this.$storage.remove("pm-torches"), this.$storage.set("pm-last-room", this.$ecast.code))
                },
                methods: {
                    setAvatarImages() {
                        return e = this, t = void 0, a = function*() {
                            this.avatarImages = {
                                0: {
                                    alt: "armored adventurer with sword",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 14441, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 50996, 17))).default
                                },
                                1: {
                                    alt: "raven with large beak",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 37236, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 92929, 17))).default
                                },
                                2: {
                                    alt: "rogue with dagger and feather cap",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 99748, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 86823, 17))).default
                                },
                                3: {
                                    alt: "hooded thief flipping a coin",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 89480, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 91423, 17))).default
                                },
                                4: {
                                    alt: "snail with pickaxe lashed to its shell",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 18546, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 42214, 17))).default
                                },
                                5: {
                                    alt: "royalty covered by long hair while holding gem",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 69880, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 13872, 17))).default
                                },
                                6: {
                                    alt: "skull-faced miner wielding shovel",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 33808, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 13283, 17))).default
                                },
                                7: {
                                    alt: "cool kid with mace riding a turtle",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 83522, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 43864, 17))).default
                                },
                                8: {
                                    alt: "angry flower in a boot",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 61490, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 14194, 17))).default
                                },
                                9: {
                                    alt: "broad mountaineer gnome with large bedroll",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 92058, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 67016, 17))).default
                                },
                                10: {
                                    alt: "short brooding gnome with very tall hat",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 50936, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 53199, 17))).default
                                },
                                11: {
                                    alt: "capped mushroom with legs",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 21527, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 73, 17))).default
                                },
                                12: {
                                    alt: "determined underling holding a sack",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 82542, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 36186, 17))).default
                                },
                                13: {
                                    alt: "frog knight",
                                    off: (yield Promise.resolve().then(s.t.bind(s, 47265, 17))).default,
                                    on: (yield Promise.resolve().then(s.t.bind(s, 96582, 17))).default
                                }
                            }
                        }, new((n = void 0) || (n = Promise))((function(s, i) {
                            function r(e) {
                                try {
                                    c(a.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                try {
                                    c(a.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(r, o)
                            }
                            c((a = a.apply(e, t || [])).next())
                        }));
                        var e, t, n, a
                    },
                    setAudienceTorches(e) {
                        this.audienceInfo.torches = Math.max(0, e), this.$storage.isSupported && this.$storage.set("pm-torches", JSON.stringify(this.audienceInfo.torches))
                    },
                    setThemeColor(e) {
                        switch (e) {
                            case "choices":
                                break;
                            case "lobby":
                            case "survey":
                            case "waiting":
                                this.$setThemeColor("#5f2d60");
                                break;
                            case "postGame":
                            default:
                                this.$setThemeColor("#0e5767")
                        }
                    }
                }
            });
            var ve = (0, d.Z)(me, n, [], !1, null, null, null);
            ve.options.__file = "src/games/pp8/survey-bomb/views/Main.vue";
            const fe = ve.exports
        },
        15516: e => {
            "use strict";
            e.exports = '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M26 13H6" stroke="black" stroke-width="5"/>\n    <path d="M15 2L4 13L15 24" stroke="black" stroke-width="5"/>\n</svg>\n\n'
        },
        66296: e => {
            "use strict";
            e.exports = '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 13H20" stroke="black" stroke-width="5"/>\n    <path d="M11 2L22 13L11 24" stroke="black" stroke-width="5"/>\n</svg>\n'
        },
        14441: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/a805c5e4526d125f12ef.png"
        },
        37236: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/66d04b1b88684c75ca3e.png"
        },
        50936: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/b6843f774c9e8d86c24c.png"
        },
        21527: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/04a1cf96e065d7fe05ff.png"
        },
        82542: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/29a2b93ff3f63ccbc34a.png"
        },
        47265: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/4dbbdeb499972a7edc08.png"
        },
        99748: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/b56f873c89b5197b1245.png"
        },
        89480: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/7b0671261f6cad8e9333.png"
        },
        18546: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/9eab56ebf177cce14b1a.png"
        },
        69880: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/a142395cb271637625b5.png"
        },
        33808: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/47fb3ae28c1799521cc8.png"
        },
        83522: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/ec4b1d50be425a41cdd9.png"
        },
        61490: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/c03d6ebbf04e64b6e0c0.png"
        },
        92058: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/fdef99d37cdfaa9ae36d.png"
        },
        50996: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/960f3736a7b9dc53b98c.png"
        },
        92929: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/9e5ef7eb00cf8fb305f0.png"
        },
        53199: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/64fc8061fee271ab87cf.png"
        },
        73: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/9df0d94881812ab8e5c5.png"
        },
        36186: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/c3626fff63d35aa20012.png"
        },
        96582: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/97cbf32b148137cece50.png"
        },
        86823: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/eb05367dab491d505dff.png"
        },
        91423: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/2daa65e9a2d130095506.png"
        },
        42214: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/ca68ed86fe8e1642cdc5.png"
        },
        13872: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/74e2b9d5090cf38dab79.png"
        },
        13283: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/54fe1a65bc999597fea9.png"
        },
        43864: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/cccb3d68c6c6655f827d.png"
        },
        14194: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/fa4e54296fcb9924ba3e.png"
        },
        67016: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/5ebd5cd291abc3fdf542.png"
        },
        75416: e => {
            "use strict";
            e.exports = '<svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.587 0L7.514 0.438C10.857 2.016 13 5.455 13 9.241V24H0V9.307C0 5.484 2.185 2.021 5.577 0.464L6.587 0ZM6.581 1.16L5.995 1.429C2.973 2.816 1.026 5.901 1.026 9.307V22.943H11.974V9.241C11.974 5.868 10.064 2.804 7.086 1.398L6.581 1.16Z" fill="#89D510"/>\n  <path d="M6.5 1V23.5" stroke="#89D510"/>\n  <circle cx="9" cy="15" r="1" fill="#89D510"/>\n  <circle cx="4" cy="15" r="1" fill="#89D510"/>\n</svg>\n\n\n'
        },
        46739: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/0beba63799dbcf0d746b.png"
        },
        44846: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/survey-bomb/0e51283d62b80cc42a5b.png"
        },
        18748: e => {
            "use strict";
            e.exports = '<svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="m4.969 3.81.936-.644a8.1 8.1 0 0 1 9.19 0l1.053.725a7.988 7.988 0 0 1 3.09 8.965l-.054.175c-.137.436-.206.89-.206 1.347v.043c0 .289.03.577.09.86l.13.604a2.685 2.685 0 0 1-.43 2.108l-.144.206a2.202 2.202 0 0 1-1.8.934 2.202 2.202 0 0 0-2.202 2.202v.797a.7.7 0 0 1-.474.662l-.099.034a11.037 11.037 0 0 1-7.098 0l-.099-.034a.7.7 0 0 1-.474-.662v-.797a2.202 2.202 0 0 0-2.202-2.202 2.201 2.201 0 0 1-1.8-.934l-.145-.206a2.685 2.685 0 0 1-.43-2.108l.133-.62a3.959 3.959 0 0 0-.085-1.987l-.084-.275A8.237 8.237 0 0 1 4.969 3.81Z" fill="#fff"/>\n  <path d="M9.255 14.778a2.8 2.8 0 0 1-2.8 2.8c-1.546 0-2.489-.943-2.489-2.49 0-1.545.943-2.488 2.49-2.488 1.546 0 2.8.631 2.8 2.178ZM17.033 15.089c0 1.546-.943 2.489-2.489 2.489a2.8 2.8 0 0 1-2.8-2.8c0-1.547 1.254-2.178 2.8-2.178 1.546 0 2.489.943 2.489 2.489ZM8.95 18.748l.835-2.815a.745.745 0 0 1 1.43 0l.834 2.815a.674.674 0 0 1-1.117.675L10.5 19l-.433.422a.674.674 0 0 1-1.117-.675Z" fill="#000"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.089 23.022v-1.555h.622v1.555H8.09Zm4.355 0v-1.555h.623v1.555h-.623Zm-2.177.311v-1.555h.622v1.555h-.622Z" fill="#000"/>\n</svg>\n'
        },
        58780: e => {
            "use strict";
            e.exports = '<svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="m13.004.472.05 5.582 1.2 1.286A12.934 12.934 0 0 0 21 11.162v10.5l-3.122.568a10.36 10.36 0 0 1-6.472 2.27H3l-.23-.192A2.692 2.692 0 0 1 3 20a2.404 2.404 0 0 1 0-4l-.442-.295A2.295 2.295 0 0 1 3.83 11.5h4.134a1.303 1.303 0 0 0 1.13-1.952l-.365-.636a3.766 3.766 0 0 1-.5-1.876V4.394A4.386 4.386 0 0 1 12.528.01a.467.467 0 0 1 .476.463Z" fill="#89D510"/>\n  <path d="M14.012 16.353a1.795 1.795 0 0 1 2.345-2.704l1.368 1.016a3.383 3.383 0 0 0 2.018.668H21v3.506h-1.488c-.688 0-1.358.219-1.914.625l-1.237.904a1.803 1.803 0 0 1-2.344-2.726l.637-.642-.642-.647ZM3.512 14.946l.404.303c.141.105.33.122.487.043a3.52 3.52 0 0 1 1.574-.371h1.169v-2H5.977a3.521 3.521 0 0 1-1.574-.372.464.464 0 0 0-.487.044l-.404.303a1.281 1.281 0 0 0 0 2.05Z" fill="#fff"/>\n  <path d="m9.78 12.896-.405-.303a.464.464 0 0 0-.486-.044 3.521 3.521 0 0 1-1.574.372h-1.17v2h1.17a3.52 3.52 0 0 1 1.574.371.464.464 0 0 0 .486-.043l.404-.303a1.281 1.281 0 0 0 0-2.05ZM10.743 7.909l-.13.44a.35.35 0 0 0 .135.396c.398.276.707.64.904 1.064l.42.906 1.814-.841-.42-.906a2.658 2.658 0 0 1-.23-1.378.35.35 0 0 0-.214-.358l-.42-.186c-.71-.314-1.64.118-1.86.863Z" fill="#fff"/>\n  <path d="m14.856 11.905.13-.44a.35.35 0 0 0-.136-.396 2.657 2.657 0 0 1-.903-1.064l-.42-.907-1.815.842.42.906c.197.424.276.896.23 1.377a.35.35 0 0 0 .214.359l.42.185c.711.315 1.64-.117 1.86-.862ZM11.955 6.044l.27-.366a.41.41 0 0 0 .033-.435 3.114 3.114 0 0 1-.36-1.405V2.385a.909.909 0 1 0-1.817 0v1.48c.007.49-.101.974-.317 1.416a.41.41 0 0 0 .047.434l.28.358c.476.604 1.407.59 1.864-.029ZM3.512 18.946l.404.302c.141.106.33.123.487.044a3.52 3.52 0 0 1 1.574-.371h1.169v-2H5.977a3.521 3.521 0 0 1-1.574-.372.464.464 0 0 0-.487.044l-.404.303a1.281 1.281 0 0 0 0 2.05Z" fill="#fff"/>\n  <path d="m9.78 16.896-.405-.303a.464.464 0 0 0-.486-.044 3.521 3.521 0 0 1-1.574.372h-1.17v2h1.17a3.52 3.52 0 0 1 1.574.371.464.464 0 0 0 .486-.044l.404-.302a1.281 1.281 0 0 0 0-2.05ZM3.512 22.946l.404.302c.141.106.33.123.487.044a3.52 3.52 0 0 1 1.574-.371h1.169v-2H5.977a3.521 3.521 0 0 1-1.574-.372.464.464 0 0 0-.487.044l-.404.303a1.281 1.281 0 0 0 0 2.05Z" fill="#fff"/>\n  <path d="m9.78 20.896-.405-.303a.464.464 0 0 0-.486-.044 3.521 3.521 0 0 1-1.574.372h-1.17v2h1.17a3.52 3.52 0 0 1 1.574.371.464.464 0 0 0 .486-.044l.404-.302a1.281 1.281 0 0 0 0-2.05Z" fill="#fff"/>\n</svg>\n'
        },
        44597: e => {
            "use strict";
            e.exports = '<svg width="12" height="29" viewBox="0 0 12 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M5.4 26.923L5.136 17.558C5.1126 16.717 5.787 16.023 6.628 16.023C7.469 16.023 8.143 16.717 8.120 17.558L7.855 26.923C7.837 27.587 7.293 28.116 6.628 28.116C5.963 28.116 5.419 27.587 5.400 26.923Z" fill="white"/>\n  <path d="M1.86 11.678C0.69 13.893 0.214 16.362 3.42 19.061C4.98 20.169 8.1 20.169 9.66 19.061C11.22 17.954 12 16.597 12 14.262C12 11.678 10.83 10.202 9.66 8.725C8.49 7.249 6.54 5.403 7.71 2.08C5.76 3.188 4.98 4.665 4.98 6.51C4.98 8.161 5.76 11.309 4.2 12.417C5.158 10.202 4.59 8.725 3.42 7.618C3.81 9.094 3.03 9.463 1.86 11.678Z" fill="#FF4444"/>\n  <path d="M12 0.973C11.22 1.342 9.646 2.078 10.036 4.293C10.188 5.155 10.83 5.772 12 6.51C11.22 4.295 11.61 2.819 12 0.973Z" fill="#FF4444"/>\n  <path d="M8.242 9.897C8.671 11.848 6.75 13.71 5.892 14.686C5.057 15.635 4.38 17.109 5.567 18.108C7.067 19.373 9.154 17.456 9.529 15.75C9.958 13.799 9.1 11.848 8.242 9.897Z" fill="url(#paint0_linear)"/>\n  <defs>\n    <linearGradient id="paint0_linear" x1="7.286" y1="9.897" x2="7.286" y2="18.517" gradientUnits="userSpaceOnUse">\n    <stop offset="0.469" stop-color="#FFD43D"/>\n    <stop offset="1" stop-color="#FFD43D" stop-opacity="0"/>\n    </linearGradient>\n  </defs>\n</svg>\n\n'
        },
        53866: e => {
            "use strict";
            e.exports = '<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M13 1.5L1 13.5" stroke="#FF1515" stroke-width="2"/>\n    <path d="M13 13.5L1 1.5" stroke="#FF1515" stroke-width="2"/>\n</svg>\n'
        },
        77589: (e, t, s) => {
            var n = {
                "./ribbon-team-0.png": 46739,
                "./ribbon-team-1.png": 44846
            };

            function a(e) {
                var t = i(e);
                return s(t)
            }

            function i(e) {
                if (!s.o(n, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return n[e]
            }
            a.keys = function() {
                return Object.keys(n)
            }, a.resolve = i, e.exports = a, a.id = 77589
        }
    }
]);
//# sourceMappingURL=sourcemaps/9290.9c6980f3c10657d97cf5.js.map