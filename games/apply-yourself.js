(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/apply-yourself"], {
        24872: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => Pe
            });
            var a = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "apply-yourself"
                }, [e.info && e.player ? s("div", ["Logo" == e.player.kind ? s("LogoView", {
                    attrs: {
                        info: e.info,
                        player: e.player
                    }
                }) : e.hideMainTopBar ? e._e() : s("TopBar", {
                    attrs: {
                        username: e.info.name,
                        color: e.info.color
                    }
                }), e._v(" "), "lobby" == e.player.kind ? s("LobbyView", {
                    attrs: {
                        info: e.info,
                        player: e.player
                    }
                }) : "writing" == e.player.kind ? s("WritingView", {
                    attrs: {
                        player: e.player
                    }
                }) : "magnets" == e.player.kind ? s("MagnetsView", {
                    attrs: {
                        info: e.info,
                        player: e.player
                    }
                }) : "voting" == e.player.kind ? s("VotingView", {
                    attrs: {
                        player: e.player
                    }
                }) : "done" == e.player.kind ? s("DoneView", {
                    attrs: {
                        player: e.player
                    }
                }) : "postGame" == e.player.kind ? s("PostGameView", {
                    attrs: {
                        player: e.player,
                        artifact: e.artifact
                    }
                }) : "resumagnets" == e.player.kind ? s("ResuMagnetsView", {
                    attrs: {
                        info: e.info,
                        player: e.player
                    }
                }) : e._e(), e._v(" "), !e.isVoting(e.player) && e.player.timer ? s("div", {
                    staticClass: "timer",
                    class: e.player.timer.timeLeft > 15 && "timer-hidden",
                    style: "--remaining:" + (e.player.timer.timeLeft > 14 ? "0px" : 100 * (1 - e.player.timer.timeLeft / 15) + "vh")
                }) : e._e()], 1) : e._e(), e._v(" "), e.audiencePlayer ? s("div", ["Logo" !== e.audiencePlayer.kind ? s("TopBar", {
                    attrs: {
                        username: "AUDIENCE"
                    }
                }) : e._e(), e._v(" "), "Logo" == e.audiencePlayer.kind ? s("LogoView", {
                    attrs: {
                        player: e.audiencePlayer
                    }
                }) : e._e(), e._v(" "), "postGame" == e.audiencePlayer.kind ? s("PostGameView", {
                    attrs: {
                        player: e.audiencePlayer,
                        artifact: e.artifact
                    }
                }) : "voting" == e.audiencePlayer.kind ? s("AudienceVotingView", {
                    attrs: {
                        audience: e.audiencePlayer
                    }
                }) : "sinkvoting" == e.audiencePlayer.kind ? s("SinkVotingView", {
                    attrs: {
                        audience: e.audiencePlayer
                    }
                }) : e._e()], 1) : e._e()])
            };
            a._withStripped = !0;
            var r = s(2934),
                n = s.n(r),
                o = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "done"
                    }, [s("div", {
                        staticClass: "title"
                    }, [e._v(e._s(e.player.prompt))]), e._v(" "), s("ul", {
                        staticClass: "submissions"
                    }, e._l(e.player.submissions, (function(e, t) {
                        return s("li", {
                            directives: [{
                                name: "bb",
                                rawName: "v-bb",
                                value: e,
                                expression: "submission"
                            }],
                            key: "submission_" + t,
                            staticClass: "submission"
                        })
                    })), 0)])
                };
            o._withStripped = !0;
            const i = n().extend({
                props: {
                    player: Object
                }
            });
            var c = s(51900),
                l = (0, c.Z)(i, o, [], !1, null, null, null);
            l.options.__file = "src/games/pp8/apply-yourself/views/player/Done.vue";
            const d = l.exports;
            var u = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "writing"
                }, [s("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.prompt,
                        expression: "player.prompt"
                    }],
                    ref: "prompt",
                    staticClass: "prompt"
                }), e._v(" "), s("div", {
                    staticClass: "instructions"
                }, [e._v("\n        " + e._s(e.player.instruction) + "\n    ")]), e._v(" "), s("form", {
                    attrs: {
                        role: "form"
                    },
                    on: {
                        submit: function(t) {
                            return t.preventDefault(), e.onSubmit.apply(null, arguments)
                        }
                    }
                }, [s("div", {
                    class: 0 === e.charactersRemaining ? "max-characters character-count" : "character-count",
                    attrs: {
                        "aria-label": "characters remaining",
                        "aria-live": "polite"
                    }
                }, [e._v("\n            " + e._s(e.charactersRemaining) + "\n        ")]), e._v(" "), s("textarea", {
                    ref: "input",
                    attrs: {
                        id: "answer",
                        disabled: e.submitting && !e.player.error,
                        type: "text",
                        placeholder: e.player.placeholder,
                        "aria-invalid": !!e.badAnswer || !!e.player.error,
                        "max-length": e.player.maxLength,
                        "aria-label": "answer",
                        required: ""
                    },
                    domProps: {
                        value: e.answer
                    },
                    on: {
                        input: e.onInput,
                        focus: e.scrollToPrompt,
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.onSubmit.apply(null, arguments))
                        }
                    }
                }), e._v(" "), s("ProgressBar", {
                    attrs: {
                        progress: e.player.progress,
                        submitted: e.submitting && !e.badAnswer && !e.player.error
                    }
                }), e._v(" "), e.badAnswer || e.player.error ? s("div", {
                    staticClass: "errors"
                }, [e.player.error ? s("span", {
                    staticClass: "error"
                }, [e._v(e._s(e.player.error))]) : e._e(), e._v(" "), e.badAnswer ? s("span", {
                    staticClass: "error"
                }, [e._v("That's not allowed! Please enter something else.")]) : e._e()]) : e._e(), e._v(" "), s("button", {
                    staticClass: "submit-button control",
                    attrs: {
                        type: "submit",
                        value: "Submit",
                        disabled: e.submitDisabled
                    }
                }, [e._v("\n            Submit\n        ")])], 1)])
            };
            u._withStripped = !0;
            var p = s(44285),
                h = s(55507),
                f = s(89446),
                v = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "progress"
                    }, [s("div", {
                        staticClass: "flex-container"
                    }, e._l(e.progressEvents, (function(t, a) {
                        return s("div", {
                            key: "step_" + a,
                            class: t.className,
                            style: "{--label: " + (a + 1) + "}"
                        }, [t.complete ? s("Checked") : "connector" !== t.type ? s("Unchecked") : e._e()], 1)
                    })), 0)])
                };
            v._withStripped = !0;
            var b = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 849.5 816.4",
                        fill: "currentColor"
                    }
                }, [s("g", [s("g", [s("path", {
                    attrs: {
                        fill: "currentColor",
                        d: "M746.72,276.4l-60.94,79.82a307.72,307.72,0,0,1,8.4,71.53,\n                305.53,305.53,0,0,1-521.57,216A305.56,305.56,0,0,1,561.94,176.05l50.49-66.13A388.16,388.16,0,1,0,746.74,276.46Z"
                    }
                }), e._v(" "), s("polygon", {
                    attrs: {
                        fill: "currentColor",
                        points: "439.53 619.23 182.76 454.64 255.89 340.57 407.57 437.8 741.8 0 849.5 82.22 439.53 619.23"
                    }
                })])])])
            };
            b._withStripped = !0;
            var g = (0, c.Z)({}, b, [], !1, null, null, null);
            g.options.__file = "src/games/pp8/apply-yourself/assets/progress/checked.vue";
            const m = g.exports;
            var w = function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 777.3 777.3",
                        fill: "currentColor"
                    }
                }, [t("g", [t("g", [t("circle", {
                    attrs: {
                        fill: "currentColor",
                        cx: "388",
                        cy: "388",
                        r: "350"
                    }
                })])])])
            };
            w._withStripped = !0;
            var y = (0, c.Z)({}, w, [], !1, null, null, null);
            y.options.__file = "src/games/pp8/apply-yourself/assets/progress/unchecked.vue";
            const x = y.exports,
                _ = n().extend({
                    components: {
                        Checked: m,
                        Unchecked: x
                    },
                    props: {
                        progress: Object,
                        submitted: Boolean
                    },
                    computed: {
                        progressEvents() {
                            const e = [],
                                t = this.submitted ? 1 : 0;
                            for (let s = 1; s <= this.progress.of; s++) {
                                const a = s < this.progress.at + t;
                                let r = a ? "checked" : "unchecked";
                                s === this.progress.at && (r += " just-checked"), s === this.progress.at + t && (r = "current");
                                const n = {
                                    className: `step step_${s} ${r}`,
                                    complete: a
                                };
                                if (1 !== s) {
                                    let a = "connector " + (s < this.progress.at + t + 1 ? "filled" : "unfilled");
                                    s !== this.progress.at && s !== this.progress.at + t || (a += " just-filled"), e.push({
                                        className: a,
                                        type: "connector"
                                    })
                                }
                                e.push(n)
                            }
                            return e
                        }
                    }
                });
            var k = (0, c.Z)(_, v, [], !1, null, null, null);
            k.options.__file = "src/games/pp8/apply-yourself/views/ProgressBar.vue";
            const C = k.exports;
            var S = function(e, t, s, a) {
                return new(s || (s = Promise))((function(r, n) {
                    function o(e) {
                        try {
                            c(a.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function i(e) {
                        try {
                            c(a.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(o, i)
                    }
                    c((a = a.apply(e, t || [])).next())
                }))
            };
            const I = n().extend({
                components: {
                    ProgressBar: C
                },
                props: {
                    player: Object
                },
                data() {
                    return {
                        badAnswer: !1,
                        submitting: !1,
                        answer: "",
                        currentEntry: this.player.entryId,
                        interval: null
                    }
                },
                computed: {
                    charactersRemaining() {
                        return this.answer ? this.player.maxLength - this.answer.length : this.player.maxLength
                    },
                    submitDisabled() {
                        return !this.answer || this.answer.length > this.player.maxLength || !(!this.submitting || this.player.error)
                    }
                },
                watch: {
                    answer(e, t) {
                        this.badAnswer = !1, e !== t && (this.$refs.input.value = e)
                    }
                },
                mounted() {
                    this.interval = window.setInterval((() => {
                        this.autoSubmit()
                    }), 4e3)
                },
                updated() {
                    this.player && this.currentEntry !== this.player.entryId && (this.answer = "", this.currentEntry = this.player.entryId, this.submitting = !1)
                },
                beforeDestroy() {
                    clearInterval(this.interval)
                },
                methods: {
                    onInput(e) {
                        const t = this.player.maxLength || Number.MAX_SAFE_INTEGER,
                            s = e.target,
                            a = s.value.replace(/[\u201C\u201D]/g, '"'),
                            r = f.c.sanitizeInput(a);
                        s.value = r, s.value.length > t && (s.value = r.substring(0, t)), this.answer = s.value
                    },
                    onSubmit() {
                        return S(this, void 0, void 0, (function*() {
                            if (!this.answer) return;
                            this.submitting = !0;
                            const e = f.c.sanitize(this.answer);
                            try {
                                (yield this.$ecast.updateText(this.player.textKey, e)) instanceof p.OK && (yield this.$ecast.updateObject(this.player.doneKey, {
                                    done: !0
                                }))
                            } catch (e) {
                                e instanceof h.EcastFilterError ? this.badAnswer = !0 : this.$handleEcastError(e, "failed to submit"), this.submitting = !1
                            }
                        }))
                    },
                    scrollToPrompt() {
                        return S(this, void 0, void 0, (function*() {
                            yield new Promise((e => setTimeout(e, 200)));
                            const e = this.$refs.prompt;
                            null == e || e.scrollIntoView({
                                behavior: "smooth"
                            })
                        }))
                    },
                    autoSubmit() {
                        return S(this, void 0, void 0, (function*() {
                            if (this.answer && !this.submitting) try {
                                const e = f.c.sanitize(this.answer);
                                yield this.$ecast.updateText(this.player.textKey, e)
                            } catch (e) {
                                e instanceof h.EcastFilterError && (this.badAnswer = !0, yield this.$ecast.updateText(this.player.textKey, ""))
                            }
                        }))
                    }
                }
            });
            var $ = (0, c.Z)(I, u, [], !1, null, null, null);
            $.options.__file = "src/games/pp8/apply-yourself/views/player/Writing.vue";
            const E = $.exports;
            var P = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "lobby"
                }, [s("div", {
                    staticClass: "visually-hidden",
                    attrs: {
                        role: "region",
                        "aria-label": "instructions"
                    }
                }, [e._v("\n        Build your business card by clicking your name below. Once added, you can select your character.\n    ")]), e._v(" "), s("TopBar", {
                    attrs: {
                        username: e.info.name,
                        "add-word": function() {
                            return e.addUsername(e.info.name)
                        },
                        drag: !0,
                        disabled: !!e.names.length,
                        "set-dragging": e.setNameDrag,
                        pulse: !e.names.length && !e.draggingName
                    }
                }), e._v(" "), e.names.length > 0 ? s("div", {
                    staticClass: "avatar-stash",
                    attrs: {
                        role: "region",
                        "aria-label": "avatar choices"
                    }
                }, [s("draggable", {
                    staticClass: "avatars draggable",
                    attrs: {
                        group: {
                            name: "avatars",
                            pull: "clone",
                            put: !1
                        },
                        move: e.checkMove,
                        sort: !1,
                        options: {
                            fallbackTolerance: 5
                        },
                        filter: ".unavailable"
                    },
                    on: {
                        start: function(t) {
                            e.draggingAvatar = !0
                        },
                        end: e.onDragStop
                    },
                    model: {
                        value: e.avatars,
                        callback: function(t) {
                            e.avatars = t
                        },
                        expression: "avatars"
                    }
                }, e._l(e.avatars, (function(t, a) {
                    return s("button", {
                        key: "avatar_stash_" + t.name,
                        class: t.available ? "avatar" : "avatar unavailable",
                        attrs: {
                            "aria-label": t.name,
                            disabled: !t.available
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.chooseAvatar(a)
                            }
                        }
                    }, [s("img", {
                        attrs: {
                            src: e.avatarImages[t.name],
                            alt: t.alt
                        }
                    }), e._v(" "), s("div", {
                        staticClass: "visually-hidden"
                    }, [e._v(e._s(t.name))])])
                })), 0)], 1) : e._e(), e._v(" "), s("div", {
                    staticClass: "name-container"
                }, [e.names.length ? e._e() : s("div", {
                    staticClass: "name-instructions",
                    style: e.instructionStyles
                }, [e._v("\n            Drag your name to the card below\n        ")])]), e._v(" "), s("div", {
                    class: e.names.length ? "paper-container slide-down" : "paper-container"
                }, [s("div", {
                    staticClass: "paper"
                }, [s("draggable", {
                    class: e.names.length || e.draggingName ? "name-draggable" : "name-draggable name-empty",
                    style: "--content: 'Name here'",
                    attrs: {
                        group: {
                            name: "name",
                            put: ["username"],
                            pull: !1
                        },
                        disabled: !!e.names.length,
                        "v-on:add": function() {
                            return e.addUsername(e.info.name)
                        }
                    },
                    model: {
                        value: e.names,
                        callback: function(t) {
                            e.names = t
                        },
                        expression: "names"
                    }
                }, e._l(e.names, (function(t) {
                    return s("div", {
                        key: t,
                        staticClass: "name"
                    }, [e._v(e._s(t))])
                })), 0), e._v(" "), s("draggable", {
                    class: !e.names.length || e.stamps.length || e.draggingAvatar ? "stamp-draggable" : "stamp-draggable empty",
                    style: "--content: 'Stamp here'",
                    attrs: {
                        group: {
                            name: "stamp",
                            put: ["avatars"],
                            pull: !1
                        },
                        filter: ".stamp",
                        sort: !1
                    },
                    on: {
                        add: e.handleAvatarDrop
                    },
                    model: {
                        value: e.stamps,
                        callback: function(t) {
                            e.stamps = t
                        },
                        expression: "stamps"
                    }
                }, e._l(e.stamps, (function(t, a) {
                    return s("div", {
                        key: t.name + "_" + a,
                        class: "stamp " + t.name + " " + (e.draggingAvatar || a > 0 ? "visually-hidden" : "")
                    }, [s("img", {
                        attrs: {
                            src: e.avatarImages[t.name],
                            alt: t.alt
                        }
                    }), e._v(" "), s("span", {
                        staticClass: "initial"
                    }, [e._v(e._s(e.initial))])])
                })), 0)], 1)]), e._v(" "), s("div", {
                    staticClass: "controls-container",
                    attrs: {
                        role: "region",
                        "aria-label": "controls"
                    }
                }, [s("LobbyActions", {
                    staticClass: "controls",
                    attrs: {
                        player: e.player,
                        classes: {
                            action: "control"
                        }
                    }
                })], 1)], 1)
            };
            P._withStripped = !0;
            var A = s(9980),
                R = s.n(A),
                W = s(13494),
                D = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "header",
                        style: "--border: " + (e.color || "#95907C"),
                        attrs: {
                            role: "region",
                            "aria-label": "player name"
                        }
                    }, [e.drag ? s("draggable", {
                        class: "topbar-draggable " + (e.pulse ? "pulse" : ""),
                        attrs: {
                            group: {
                                name: "username",
                                pull: "clone",
                                put: !1
                            },
                            "fallback-toler{ance": 5,
                            disabled: e.disabled,
                            clone: e.clone,
                            sort: !1
                        },
                        on: {
                            start: function(t) {
                                e.setDragging && e.setDragging(!0)
                            },
                            end: function(t) {
                                e.setDragging && e.setDragging(!1)
                            }
                        },
                        model: {
                            value: e.usernameArray,
                            callback: function(t) {
                                e.usernameArray = t
                            },
                            expression: "usernameArray"
                        }
                    }, [s("button", {
                        staticClass: "draggable-name",
                        attrs: {
                            tabindex: "0"
                        },
                        on: {
                            click: function(t) {
                                !e.disabled && e.addWord(t)
                            }
                        }
                    }, [e._v("\n            " + e._s(e.username) + "\n        ")])]) : s("span", {
                        staticClass: "name"
                    }, [e._v(e._s(e.username))])], 1)
                };
            D._withStripped = !0;
            const M = n().extend({
                components: {
                    draggable: R()
                },
                props: {
                    addWord: Function,
                    clone: Function,
                    disabled: Boolean,
                    drag: Boolean,
                    pulse: Boolean,
                    setDragging: Function,
                    username: String,
                    color: String
                },
                data() {
                    return {
                        usernameArray: [this.username]
                    }
                }
            });
            var O = (0, c.Z)(M, D, [], !1, null, null, null);
            O.options.__file = "src/games/pp8/apply-yourself/views/TopBar.vue";
            const T = O.exports;
            var V = function(e, t, s, a) {
                return new(s || (s = Promise))((function(r, n) {
                    function o(e) {
                        try {
                            c(a.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function i(e) {
                        try {
                            c(a.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(o, i)
                    }
                    c((a = a.apply(e, t || [])).next())
                }))
            };
            const j = ["#9D53BE", "#2A63D9", "#78786A"],
                L = n().extend({
                    components: {
                        draggable: R(),
                        TopBar: T,
                        LobbyActions: W.Z
                    },
                    props: {
                        info: Object,
                        player: Object
                    },
                    data() {
                        let e, t;
                        return this.player && (e = this.info.name[0], t = (e => {
                            switch (this.info.color) {
                                case "#E74255":
                                    return {
                                        heart: s(9521), duck: s(34162), owl: s(17307), shirt: s(45518), dode: s(59920), poop: s(3830), bomb: s(39584), skull: s(7837), faker: s(59314), jack: s(58701), robot: s(46507), wampus: s(67756), screw: s(92861), moon: s(79951)
                                    };
                                case "#EC7839":
                                    return {
                                        heart: s(94524), duck: s(4954), owl: s(10201), shirt: s(87125), dode: s(97456), poop: s(41338), bomb: s(55974), skull: s(40245), faker: s(90238), jack: s(11629), robot: s(67813), wampus: s(17598), screw: s(32565), moon: s(12774)
                                    };
                                case "#D8B230":
                                    return {
                                        heart: s(18458), duck: s(74017), owl: s(5351), shirt: s(90664), dode: s(11128), poop: s(5078), bomb: s(22167), skull: s(93340), faker: s(68679), jack: s(72349), robot: s(57098), wampus: s(73271), screw: s(97783), moon: s(50155)
                                    };
                                case "#5BC47A":
                                    return {
                                        heart: s(71655), duck: s(79615), owl: s(63980), shirt: s(64557), dode: s(36200), poop: s(19388), bomb: s(21496), skull: s(51276), faker: s(81933), jack: s(41136), robot: s(79558), wampus: s(50582), screw: s(57294), moon: s(32541)
                                    };
                                case "#61D3C9":
                                    return {
                                        heart: s(28913), duck: s(48413), owl: s(31117), shirt: s(74480), dode: s(20690), poop: s(49646), bomb: s(91575), skull: s(78818), faker: s(26499), jack: s(71689), robot: s(78396), wampus: s(66682), screw: s(51204), moon: s(91367)
                                    };
                                case "#9D53BE":
                                    return {
                                        heart: s(91440), duck: s(31316), owl: s(6858), shirt: s(25132), dode: s(47056), poop: s(60073), bomb: s(17310), skull: s(98485), faker: s(32131), jack: s(87438), robot: s(61012), wampus: s(33794), screw: s(47855), moon: s(4466)
                                    };
                                case "#2A63D9":
                                    return {
                                        heart: s(46360), duck: s(48003), owl: s(89130), shirt: s(385), dode: s(58299), poop: s(39981), bomb: s(60071), skull: s(79368), faker: s(15929), jack: s(11745), robot: s(12319), wampus: s(75559), screw: s(99893), moon: s(35205)
                                    };
                                case "#9C9D4D":
                                    return {
                                        heart: s(82787), duck: s(70200), owl: s(91801), shirt: s(13301), dode: s(75082), poop: s(16588), bomb: s(96414), skull: s(78894), faker: s(87866), jack: s(43135), robot: s(22786), wampus: s(36817), screw: s(90666), moon: s(83394)
                                    };
                                case "#78786A":
                                    return {
                                        heart: s(25204), duck: s(41910), owl: s(34821), shirt: s(36989), dode: s(58813), poop: s(14142), bomb: s(59369), skull: s(5634), faker: s(46052), jack: s(96846), robot: s(42542), wampus: s(53375), screw: s(35258), moon: s(33663)
                                    };
                                case "#FF9999":
                                    return {
                                        heart: s(57246), duck: s(95627), owl: s(29255), shirt: s(51948), dode: s(31939), poop: s(23552), bomb: s(53937), skull: s(86748), faker: s(6418), jack: s(3196), robot: s(73768), wampus: s(27887), screw: s(35356), moon: s(32416)
                                    };
                                default:
                                    return {
                                        heart: s(25204), duck: s(41910), owl: s(34821), shirt: s(36989), dode: s(58813), poop: s(14142), bomb: s(59369), skull: s(5634), faker: s(46052), jack: s(96846), robot: s(42542), wampus: s(53375), screw: s(35258), moon: s(33663)
                                    }
                            }
                        })()), {
                            avatarImages: t,
                            draggingAvatar: !1,
                            draggingName: !1,
                            initial: e,
                            names: [],
                            previousStamp: null,
                            stamps: []
                        }
                    },
                    computed: {
                        avatars() {
                            return this.player && this.player.avatars ? Object.keys(this.player.avatars).map((e => {
                                const t = this.player.avatars[e];
                                return t.name = e, t
                            })).sort(((e, t) => e.index - t.index)) : []
                        },
                        instructionStyles() {
                            if (!this.player) return;
                            const e = this.info.color;
                            return {
                                backgroundColor: e,
                                color: j.includes(e) ? "var(--highlight)" : "var(--text)",
                                border: `2px solid ${e}`
                            }
                        }
                    },
                    watch: {
                        player(e) {
                            e.invalidChoice && (this.previousStamp ? this.stamps = [this.previousStamp] : this.stamps = [])
                        }
                    },
                    methods: {
                        addUsername(e) {
                            this.names = [e]
                        },
                        checkMove: e => e.draggedContext.element.available,
                        chooseAvatar(e) {
                            return V(this, void 0, void 0, (function*() {
                                const t = this.avatars[e],
                                    s = {
                                        action: "choose-avatar",
                                        choice: t.name
                                    };
                                try {
                                    (yield this.$ecast.updateObject(this.player.responseKey, s)) instanceof p.OK && (this.stamps[0] && (this.previousStamp = this.stamps[0]), this.stamps = [t]), this.draggingAvatar = !1
                                } catch (e) {
                                    this.$handleEcastError(e, "Unable to skip")
                                }
                            }))
                        },
                        handleAvatarDrop(e) {
                            return V(this, void 0, void 0, (function*() {
                                yield this.chooseAvatar(e.oldIndex)
                            }))
                        },
                        onDragStop(e) {
                            "stamp-draggable" !== e.to.className && (this.draggingAvatar = !1)
                        },
                        setNameDrag(e) {
                            this.draggingName = e
                        }
                    }
                });
            var B = (0, c.Z)(L, P, [], !1, null, null, null);
            B.options.__file = "src/games/pp8/apply-yourself/views/player/Lobby.vue";
            const N = B.exports;
            var F = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    ref: "top",
                    staticClass: "magnets"
                }, [e._m(0), e._v(" "), s("TopBar", {
                    attrs: {
                        username: e.info.name,
                        color: e.info.color,
                        "add-word": function(t) {
                            return e.addWord(-1, -1, e.info.name, t)
                        },
                        drag: !0,
                        clone: e.addNonStashWord,
                        disabled: e.maxReached
                    }
                }), e._v(" "), s("div", {
                    staticClass: "prompt",
                    attrs: {
                        role: "region",
                        "aria-label": "prompt"
                    }
                }, [s("div", {
                    staticClass: "visually-hidden"
                }, [e._v(e._s(e.player.prompt))]), e._v(" "), s("draggable", {
                    attrs: {
                        value: e.player.splitPrompt,
                        group: {
                            name: "prompt",
                            pull: "clone",
                            put: !1
                        },
                        "fallback-tolerance": 5,
                        disabled: e.maxReached,
                        clone: e.addNonStashWord,
                        sort: !1
                    }
                }, e._l(e.parsedPrompt, (function(t, a) {
                    return s("button", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: t.content,
                            expression: "word.content"
                        }],
                        key: "prompt" + a,
                        class: t.isPunctuation ? "prompt-word punctuation" : "prompt-word",
                        attrs: {
                            tabindex: "0",
                            sort: !1
                        },
                        on: {
                            click: function(s) {
                                e.maxReached ? e.startMaxFeedback() : e.addWord(-1, -1, t.content, s)
                            }
                        }
                    })
                })), 0)], 1), e._v(" "), s("div", {
                    staticClass: "instructions",
                    attrs: {
                        role: "region",
                        "aria-label": "instructions"
                    }
                }, [s("div", {
                    staticClass: "instructions visually-hidden"
                }, [e._v(e._s(e.player.instructions))]), e._v(" "), s("draggable", {
                    staticClass: "instruction-draggable",
                    attrs: {
                        value: e.player.splitInstructions,
                        group: {
                            name: "prompt",
                            pull: "clone",
                            put: !1
                        },
                        "fallback-tolerance": 5,
                        disabled: e.maxReached,
                        clone: e.addNonStashWord,
                        sort: !1
                    }
                }, e._l(e.player.splitInstructions, (function(t, a) {
                    return s("button", {
                        key: "instruction" + a,
                        staticClass: "instruction-word",
                        attrs: {
                            tabindex: "0"
                        },
                        on: {
                            click: function(s) {
                                e.maxReached ? e.startMaxFeedback() : e.addWord(-1, -1, t, s)
                            }
                        }
                    }, [e._v("\n                " + e._s(t) + "\n            ")])
                })), 0)], 1), e._v(" "), s("div", {
                    class: e.maxReached ? "wordset disabled" : "wordset",
                    style: "--scrollSpace: " + e.scrollSpace,
                    attrs: {
                        role: "region",
                        "aria-label": "word bank"
                    }
                }, [e.showShuffled || e.showSorted ? e.showShuffled ? s("div", [s("draggable", {
                    staticClass: "draggable",
                    attrs: {
                        value: e.shuffledStash,
                        group: {
                            name: "shuffled_stash",
                            pull: "clone",
                            put: !1
                        },
                        "fallback-tolerance": 5,
                        disabled: e.maxReached,
                        sort: !1
                    }
                }, e._l(e.shuffledStash, (function(t, a) {
                    return s("button", {
                        key: "shuffled_" + a,
                        staticClass: "word",
                        attrs: {
                            wordIndex: t.wordIndex,
                            tabindex: "0"
                        },
                        on: {
                            click: function(s) {
                                e.maxReached ? e.startMaxFeedback() : e.addWord(t.sentenceIndex, t.wordIndex, t.word, s)
                            }
                        }
                    }, [e._v("\n                    " + e._s(t.word) + "\n                ")])
                })), 0)], 1) : s("div", [s("draggable", {
                    staticClass: "draggable",
                    attrs: {
                        value: e.sortedStash,
                        group: {
                            name: "sorted_stash",
                            pull: "clone",
                            put: !1
                        },
                        "fallback-tolerance": 5,
                        disabled: e.maxReached,
                        sort: !1
                    }
                }, e._l(e.sortedStash, (function(t, a) {
                    return s("button", {
                        key: "shuffled_" + a,
                        staticClass: "word",
                        attrs: {
                            wordIndex: t.wordIndex,
                            tabindex: "0"
                        },
                        on: {
                            click: function(s) {
                                e.maxReached ? e.startMaxFeedback() : e.addWord(t.sentenceIndex, t.wordIndex, t.word, s)
                            }
                        }
                    }, [e._v("\n                    " + e._s(t.word) + "\n                ")])
                })), 0)], 1) : s("div", [s("draggable", {
                    staticClass: "draggable",
                    attrs: {
                        value: e.stash,
                        group: {
                            name: "stash",
                            pull: "clone",
                            put: !1
                        },
                        "fallback-tolerance": 5,
                        disabled: e.maxReached,
                        sort: !1,
                        filter: ".landmark"
                    }
                }, e._l(e.stash, (function(t, a) {
                    return s("span", {
                        key: t.isLandmark ? "landmark_" + a : t.sentenceIndex + "_" + t.wordIndex,
                        staticClass: "container"
                    }, [t.isLandmark ? s("div", {
                        staticClass: "sentence landmark visually-hidden"
                    }, [e._v(e._s(t.description))]) : s("button", {
                        staticClass: "word",
                        style: "--delay: " + e.getDelay() + "ms",
                        on: {
                            click: function(s) {
                                e.maxReached ? e.startMaxFeedback() : e.addWord(t.sentenceIndex, t.wordIndex, t.word, s)
                            }
                        }
                    }, [e._v("\n                        " + e._s(t.word) + "\n                    ")])])
                })), 0)], 1), e._v(" "), s("div", {
                    staticClass: "controls",
                    attrs: {
                        role: "region",
                        "aria-label": "sorting options"
                    }
                }, [s("button", {
                    staticClass: "shuffle control",
                    on: {
                        click: function(t) {
                            e.showShuffled ? e.showShuffled = !1 : e.shuffleStash()
                        }
                    }
                }, [e._v("\n                " + e._s(e.showShuffled ? "Show Original" : "Shuffle") + "\n            ")]), e._v(" "), s("button", {
                    staticClass: "unshuffle control",
                    on: {
                        click: function(t) {
                            e.showSorted ? e.showSorted = !1 : e.sortStash()
                        }
                    }
                }, [e._v("\n                " + e._s(e.showSorted ? "Show Original" : "Sort") + "\n            ")])])]), e._v(" "), s("transition", {
                    attrs: {
                        name: "clipboard",
                        appear: ""
                    }
                }, [s("div", {
                    class: e.feedbackActive ? "clipboard shake" : "clipboard",
                    attrs: {
                        role: "region",
                        "aria-label": "composition"
                    }
                }, [s("div", {
                    staticClass: "visually-hidden"
                }, [s("button", {
                    on: {
                        click: function(t) {
                            return e.readAnswer()
                        }
                    }
                }, [e._v("Read answer")])]), e._v(" "), s("div", {
                    ref: "magnetAnswer",
                    staticClass: "magnet-answer"
                }, [s("div", {
                    staticClass: "composition"
                }, [e.answer && e.answer.length ? e._e() : s("div", {
                    staticClass: "placeholder"
                }, [e._v("\n                        " + e._s(e.player.placeholder) + "\n                    ")]), e._v(" "), s("span", {
                    staticClass: "composition-text visually-hidden",
                    attrs: {
                        "aria-live": "polite"
                    }
                }, [e._v(e._s(e.answerText))]), e._v(" "), s("draggable", {
                    ref: "composition",
                    staticClass: "composition-draggable",
                    attrs: {
                        role: "region",
                        "aria-label": "answer",
                        group: {
                            name: "composition",
                            put: !0
                        },
                        "fallback-tolerance": 5
                    },
                    on: {
                        end: e.handleAnswerDragEnd,
                        add: function(t) {
                            return e.submitResponse(!1)
                        }
                    },
                    model: {
                        value: e.answer,
                        callback: function(t) {
                            e.answer = t
                        },
                        expression: "answer"
                    }
                }, e._l(e.answer, (function(t, a) {
                    return s("button", {
                        key: t.word + "_" + a + "_composition",
                        staticClass: "composition-word",
                        attrs: {
                            tabindex: "0"
                        },
                        on: {
                            click: function(t) {
                                return e.removeWord(a)
                            },
                            keydown: [function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) ? null : t.altKey ? "button" in t && 0 !== t.button ? null : (t.preventDefault(), e.moveWordLeft(a)) : null
                            }, function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "right", 39, t.key, ["Right", "ArrowRight"]) ? null : t.altKey ? "button" in t && 2 !== t.button ? null : (t.preventDefault(), e.moveWordRight(a)) : null
                            }]
                        }
                    }, [e._v("\n                            " + e._s(t.word) + "\n                        ")])
                })), 0)], 1), e._v(" "), e.player.error ? s("span", {
                    staticClass: "error",
                    attrs: {
                        "aria-live": "assertive"
                    }
                }, [e._v(e._s(e.player.error))]) : e._e(), e._v(" "), s("div", {
                    staticClass: "controls",
                    attrs: {
                        role: "region",
                        "aria-label": "actions"
                    }
                }, [s("button", {
                    staticClass: "submit-button control",
                    class: {
                        full: !e.answer || !!e.answer.length || e.submitting
                    },
                    attrs: {
                        disabled: !!e.answer && e.answer.length < 1 || e.submitting
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onSubmit.apply(null, arguments)
                        }
                    }
                }, [e._v("\n                        Submit\n                    ")]), e._v(" "), e.answer.length || e.submitting ? e._e() : s("button", {
                    staticClass: "start control",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.startForMe.apply(null, arguments)
                        }
                    }
                }, [e._v("\n                        Start for me\n                    ")])])]), e._v(" "), s("ProgressBar", {
                    attrs: {
                        progress: e.player.progress,
                        submitted: e.submitting
                    }
                })], 1)])], 1)
            };
            F._withStripped = !0;
            var K = function(e, t, s, a) {
                return new(s || (s = Promise))((function(r, n) {
                    function o(e) {
                        try {
                            c(a.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function i(e) {
                        try {
                            c(a.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(o, i)
                    }
                    c((a = a.apply(e, t || [])).next())
                }))
            };
            const G = ["magnet-answer", "composition-draggable", "submit-button", "composition-word"],
                Z = n().extend({
                    components: {
                        ProgressBar: C,
                        TopBar: T,
                        draggable: R()
                    },
                    props: {
                        info: Object,
                        player: Object
                    },
                    data() {
                        const e = this.player,
                            t = (e => {
                                const t = [];
                                return e.forEach(((e, s) => {
                                    t.push({
                                        isLandmark: !0,
                                        description: e.join(" ")
                                    }), e.forEach(((e, a) => {
                                        t.push({
                                            word: e,
                                            wordIndex: a,
                                            sentenceIndex: s
                                        })
                                    }))
                                })), t
                            })(e.stash);
                        return {
                            index: 0,
                            submitting: !1,
                            answer: [],
                            stash: t,
                            shuffledStash: [],
                            sortedStash: (e => {
                                const t = e.map((e => e)).filter((e => !e.isLandmark));
                                return t.sort(((e, t) => e.word.length - t.word.length || e.word.localeCompare(t.word))), t
                            })(t),
                            showShuffled: !1,
                            showSorted: !1,
                            scrollSpace: "155px",
                            feedbackActive: !1,
                            currentEntry: e.entryId
                        }
                    },
                    computed: {
                        answerText() {
                            if (!this.answer) return "";
                            let e = "";
                            return this.answer.forEach((t => {
                                e = `${e} ${t.word}`
                            })), e
                        },
                        maxReached() {
                            return !!this.answer && this.answer.length >= this.player.maxWords
                        },
                        parsedPrompt() {
                            return this.player ? this.player.splitPrompt.map((e => ({
                                content: e,
                                isPunctuation: '.,/#!$%^&*;:{}=_~()?"""'.includes(e)
                            }))) : null
                        }
                    },
                    watch: {
                        answer() {
                            const e = this.$refs.magnetAnswer;
                            e && (this.scrollSpace = `${e.offsetHeight+40}px`)
                        }
                    },
                    updated() {
                        this.player && this.currentEntry !== this.player.entryId && (this.answer = [], this.currentEntry = this.player.entryId, this.submitting = !1)
                    },
                    methods: {
                        addWord(e, t, s, a) {
                            this.answer.push({
                                sentenceIndex: e,
                                wordIndex: t,
                                word: s
                            }), this.submitResponse(!1), 0 !== a.clientX && 0 !== a.clientY && a.target.blur()
                        },
                        addNonStashWord: e => ({
                            word: e,
                            wordIndex: -1,
                            sentenceIndex: -1
                        }),
                        formatComposition() {
                            return this.answer.map((e => {
                                const t = e.wordIndex >= 0 ? e.wordIndex : e.word;
                                return {
                                    index: e.sentenceIndex,
                                    word: t
                                }
                            }))
                        },
                        getDelay: () => 300 * Math.random(),
                        moveWordLeft(e) {
                            if (e) {
                                const t = this.answer[e];
                                this.answer.splice(e, 1), this.answer.splice(e - 1, 0, t), this.submitResponse(!1), this.$nextTick((() => {
                                    this.$refs.composition.$el.children[e - 1].focus()
                                }))
                            }
                        },
                        moveWordRight(e) {
                            if (e < this.answer.length - 1) {
                                const t = this.answer[e];
                                this.answer.splice(e, 1), this.answer.splice(e + 1, 0, t), this.submitResponse(!1), this.$nextTick((() => {
                                    this.$refs.composition.$el.children[e + 1].focus()
                                }))
                            }
                        },
                        readAnswer() {
                            this.$announce(this.answerText)
                        },
                        startForMe() {
                            const e = this.sortedStash.length;
                            for (let t = 3; t > 0; t--) {
                                const t = Math.floor(Math.random() * e);
                                this.answer.push(this.sortedStash[t])
                            }
                            this.submitResponse(!1)
                        },
                        handleAnswerDragEnd(e) {
                            const {
                                newIndex: t,
                                originalEvent: s
                            } = e;
                            let a, r;
                            if (window.TouchEvent && s instanceof TouchEvent) {
                                const {
                                    changedTouches: e
                                } = s;
                                if (!e || !e[0]) return;
                                a = e[0].clientX, r = e[0].clientY
                            } else {
                                if (!(s instanceof DragEvent)) return;
                                a = s.x, r = s.y
                            }
                            if (null == a || null == r) return;
                            const n = document.elementFromPoint(a, r);
                            n && (G.indexOf(n.className) < 0 && this.removeWord(t), this.submitResponse(!1))
                        },
                        hideShuffled() {
                            this.showShuffled = !1
                        },
                        removeWord(e) {
                            this.answer.splice(e, 1), this.answer && this.submitResponse(!1)
                        },
                        startMaxFeedback() {
                            this.feedbackActive || (this.feedbackActive = !0, this.$vibrate([50, 100, 50]), setTimeout((() => {
                                this.feedbackActive = !1
                            }), 300))
                        },
                        shuffleStash() {
                            let e = [];
                            this.player.stash.forEach(((t, s) => {
                                const a = t.map(((e, t) => ({
                                    word: e,
                                    sentenceIndex: s,
                                    wordIndex: t
                                })));
                                e = e.concat(a)
                            })), this.shuffledStash = this.shuffle(e), this.showShuffled = !0, this.showSorted = !1
                        },
                        shuffle(e) {
                            for (let t = e.length - 1; t > 0; t--) {
                                const s = Math.floor(Math.random() * (t + 1)),
                                    a = e[t];
                                e[t] = e[s], e[s] = a
                            }
                            return e
                        },
                        sortStash() {
                            this.showShuffled = !1, this.showSorted = !0
                        },
                        submitResponse(e) {
                            return K(this, void 0, void 0, (function*() {
                                try {
                                    const t = this.formatComposition(),
                                        s = yield this.$ecast.updateObject(this.player.answerKey, {
                                            text: t,
                                            final: e
                                        });
                                    return s instanceof p.OK ? {
                                        error: null
                                    } : {
                                        error: s
                                    }
                                } catch (e) {
                                    return this.$handleEcastError(e), {}
                                }
                            }))
                        },
                        onSubmit() {
                            return K(this, void 0, void 0, (function*() {
                                this.submitting = !0;
                                try {
                                    const {
                                        error: e
                                    } = yield this.submitResponse(!0);
                                    if (e) this.submitting = !1, console.error("Failed to submit composition: ", e);
                                    else {
                                        const e = this.$refs.top;
                                        null == e || e.scrollIntoView({
                                            behavior: "smooth"
                                        })
                                    }
                                } catch (e) {
                                    if (!(e instanceof h.EcastEntityNotFound)) throw e;
                                    console.error("Tried to update entity which does not exist")
                                }
                            }))
                        }
                    }
                });
            var U = (0, c.Z)(Z, F, [function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "visually-hidden",
                    attrs: {
                        role: "region",
                        "aria-label": "keyboard instructions"
                    }
                }, [s("span", [e._v("\n            Each sentence will be followed by buttons for each word in the sentence. Once a word has been added to your answer,\n            you can focus that word in the composition and press Alt + Left or Right to change word order\n        ")])])
            }], !1, null, null, null);
            U.options.__file = "src/games/pp8/apply-yourself/views/player/Magnets.vue";
            const H = U.exports;
            var X = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "logo"
                }, [e.isPlayer(e.player) && e.player.round ? a("div", {
                    staticClass: "round"
                }, [a("h1", {
                    staticClass: "visually-hidden"
                }, [e._v("Round " + e._s(e.player.round))]), e._v(" "), a("transition", {
                    attrs: {
                        name: "round",
                        appear: "",
                        "aria-hidden": "true"
                    }
                }, [a("button", {
                    ref: "roundNumber",
                    staticClass: "round-number",
                    class: e.wheeee && "spin",
                    attrs: {
                        "aria-hidden": "true"
                    },
                    on: {
                        click: e.handleRoundClick
                    }
                }, ["one" === e.player.round ? a("img", {
                    attrs: {
                        src: s(64787),
                        alt: "The word 'one' in wavy blue word art style"
                    }
                }) : e._e(), e._v(" "), "two" === e.player.round ? a("img", {
                    attrs: {
                        src: s(60801),
                        alt: "The word 'two' in wavy blue word art style"
                    }
                }) : e._e(), e._v(" "), "three" === e.player.round ? a("img", {
                    staticClass: "three",
                    attrs: {
                        src: s(5580),
                        alt: "The words 'Final Round' in a rainbow word art with a dramatic shadow behind them."
                    }
                }) : e._e()])])], 1) : a("div", {
                    staticClass: "non-round"
                }, [a("TopBar", {
                    attrs: {
                        username: e.info ? e.info.name : "AUDIENCE",
                        color: e.info ? e.info.color : null
                    }
                }), e._v(" "), a("button", {
                    staticClass: "briefcase look",
                    style: {
                        transform: "translate(" + e.briefcasePosition.x + "vw, " + e.briefcasePosition.y + "vh)"
                    },
                    attrs: {
                        "aria-label": "a briefcase with googly eyes",
                        disabled: !e.hasStorage
                    },
                    on: {
                        click: function(t) {
                            e.hasStorage && e.handleBriefcaseClick()
                        }
                    }
                }, [a("img", {
                    staticClass: "body",
                    attrs: {
                        alt: "briefcase's body, whose eyes move when you tap it",
                        src: s(25621)
                    }
                }), e._v(" "), a("img", {
                    staticClass: "eyes",
                    attrs: {
                        alt: "whites of the briefcases's eyes",
                        src: s(74144)
                    }
                }), e._v(" "), a("img", {
                    staticClass: "left-pupil",
                    attrs: {
                        alt: "briefcase's left pupil",
                        src: s(6516)
                    }
                }), e._v(" "), a("img", {
                    staticClass: "right-pupil",
                    attrs: {
                        alt: "briefcase's right pupil",
                        src: s(58922)
                    }
                }), e._v(" "), a("img", {
                    staticClass: "eyelids",
                    attrs: {
                        alt: "briefcase's eyelids",
                        src: s(91022)
                    }
                })])], 1), e._v(" "), e.isPlayer(e.player) && e.player.hasControls ? a("div", {
                    staticClass: "controls"
                }, [a("button", {
                    staticClass: "skip control",
                    on: {
                        click: e.skip
                    }
                }, [e._v("Skip")])]) : e._e()])
            };
            X._withStripped = !0;
            var Y = function(e, t, s, a) {
                return new(s || (s = Promise))((function(r, n) {
                    function o(e) {
                        try {
                            c(a.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function i(e) {
                        try {
                            c(a.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(o, i)
                    }
                    c((a = a.apply(e, t || [])).next())
                }))
            };
            const z = "job-achievement",
                J = n().extend({
                    components: {
                        TopBar: T
                    },
                    props: {
                        info: Object,
                        player: Object
                    },
                    data() {
                        return {
                            hasStorage: this.$storage.isSupported,
                            briefcasePosition: {
                                x: 0,
                                y: 0
                            },
                            wheeee: !1
                        }
                    },
                    methods: {
                        handleBriefcaseClick() {
                            return Y(this, void 0, void 0, (function*() {
                                if (this.isPlayer(this.player)) {
                                    const e = this.$storage.get(z);
                                    if (e) {
                                        if ("39" === e) try {
                                            yield this.$ecast.updateObject(this.player.responseKey, {
                                                action: "achievement"
                                            })
                                        } catch (e) {
                                            this.$handleEcastError(e)
                                        }
                                        const t = parseInt(e, 10) + 1;
                                        this.$storage.set(z, `${t}`)
                                    } else this.$storage.set(z, "1")
                                }
                                this.$announce((() => {
                                    const e = ["Hey!", "Ah!", "Woo!", "I'm going to hide now", "Job Job!", "Working for the weekend!", "Wow!", "Bada bing.", "Booyah", "Why are you poking me?", "Gee whiz", "Hello", "Lena says hi!", "Maybe they'll let me host the game one day.", "Oh!", "Rude", "How do you do?", "Oof", "Sheesh", "No, it's not real leather", "I haven't been fed in 23 years", "I forgot my own lock combination", "If I had hands, I'd poke you back", "Have you heard of Liam? He's great!"];
                                    return e[Math.floor(Math.random() * e.length)]
                                })()), this.briefcasePosition = {
                                    x: Math.floor(45 * Math.random()) - Math.floor(45 * Math.random()),
                                    y: Math.floor(30 * Math.random()) - Math.floor(30 * Math.random())
                                }
                            }))
                        },
                        handleRoundClick() {
                            this.wheeee || (this.wheeee = !0, setTimeout((() => {
                                this.wheeee = !1
                            }), 500))
                        },
                        isPlayer: e => void 0 !== e.responseKey,
                        skip() {
                            return Y(this, void 0, void 0, (function*() {
                                if (this.isPlayer(this.player) && this.player.responseKey) try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "skip"
                                    })
                                } catch (e) {
                                    this.$handleEcastError(e, "Unable to skip")
                                }
                            }))
                        }
                    }
                });
            var q = (0, c.Z)(J, X, [], !1, null, null, null);
            q.options.__file = "src/games/pp8/apply-yourself/views/Logo.vue";
            const Q = q.exports;
            var ee = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    ref: "top",
                    staticClass: "resumagnets"
                }, [e._m(0), e._v(" "), s("TopBar", {
                    attrs: {
                        username: e.info.name,
                        color: e.info.color,
                        "add-word": function(t) {
                            return e.addWord(-1, -1, e.info.name, t)
                        },
                        drag: !0,
                        clone: e.addNonStashWord,
                        disabled: e.maxReached,
                        progress: e.player.progress,
                        "set-dragging": function(t) {
                            return e.dragging = t
                        }
                    }
                }), e._v(" "), s("div", {
                    staticClass: "category",
                    attrs: {
                        role: "region",
                        "aria-label": e.player.category
                    }
                }, [s("draggable", {
                    attrs: {
                        group: {
                            name: "category",
                            pull: "clone",
                            put: !1,
                            dragClass: "word"
                        },
                        "fallback-tolerance": 5,
                        disabled: e.maxReached,
                        clone: e.addNonStashWord,
                        sort: !1
                    },
                    on: {
                        start: function(t) {
                            e.dragging = !0
                        },
                        end: function(t) {
                            e.dragging = !1
                        }
                    },
                    model: {
                        value: e.categoryWords,
                        callback: function(t) {
                            e.categoryWords = t
                        },
                        expression: "categoryWords"
                    }
                }, e._l(e.player.category.split(" "), (function(t, a) {
                    return s("button", {
                        key: "category" + a,
                        staticClass: "category-word",
                        on: {
                            click: function(s) {
                                e.maxReached ? e.startMaxFeedback() : e.addWord(-1, -1, t, s)
                            }
                        }
                    }, [e._v("\n                " + e._s(t) + "\n            ")])
                })), 0)], 1), e._v(" "), s("div", {
                    staticClass: "instructions",
                    attrs: {
                        role: "region",
                        "aria-label": "instructions"
                    }
                }, [s("div", {
                    staticClass: "visually-hidden"
                }, [e._v(e._s(e.player.instructions))]), e._v(" "), s("draggable", {
                    attrs: {
                        value: e.player.splitInstructions,
                        group: {
                            name: "prompt",
                            pull: "clone",
                            put: !1,
                            dragClass: "word"
                        },
                        "fallback-tolerance": 5,
                        disabled: e.maxReached,
                        clone: e.addNonStashWord,
                        sort: !1
                    },
                    on: {
                        start: function(t) {
                            e.dragging = !0
                        },
                        end: function(t) {
                            e.dragging = !1
                        }
                    }
                }, e._l(e.player.splitInstructions, (function(t, a) {
                    return s("button", {
                        key: "instruction" + a,
                        staticClass: "instruction-word",
                        on: {
                            click: function(s) {
                                e.maxReached ? e.startMaxFeedback() : e.addWord(-1, -1, t, s)
                            }
                        }
                    }, [e._v("\n                " + e._s(t) + "\n            ")])
                })), 0)], 1), e._v(" "), s("div", {
                    class: e.maxReached ? "wordset disabled" : "wordset",
                    style: "--scrollSpace: " + e.scrollSpace,
                    attrs: {
                        role: "region",
                        "aria-label": "word bank"
                    }
                }, [e.showShuffled || e.showSorted ? e.showShuffled ? s("div", [s("draggable", {
                    staticClass: "draggable",
                    attrs: {
                        group: {
                            name: "shuffled_stash",
                            pull: "clone",
                            put: !1
                        },
                        "fallback-tolerance": 5,
                        disabled: e.maxReached,
                        sort: !1
                    },
                    on: {
                        start: function(t) {
                            e.dragging = !0
                        },
                        end: function(t) {
                            e.dragging = !1
                        }
                    },
                    model: {
                        value: e.shuffledStash,
                        callback: function(t) {
                            e.shuffledStash = t
                        },
                        expression: "shuffledStash"
                    }
                }, e._l(e.shuffledStash, (function(t, a) {
                    return s("button", {
                        key: "$shuffled_" + a,
                        staticClass: "word",
                        on: {
                            click: function(s) {
                                e.maxReached ? e.startMaxFeedback() : e.addWord(t.sentenceIndex, t.wordIndex, t.word, s)
                            }
                        }
                    }, [e._v("\n                    " + e._s(t.word) + "\n                ")])
                })), 0)], 1) : e.showSorted ? s("div", [s("draggable", {
                    staticClass: "draggable",
                    attrs: {
                        group: {
                            name: "shuffled_stash",
                            pull: "clone",
                            put: !1
                        },
                        "fallback-tolerance": 5,
                        disabled: e.maxReached,
                        sort: !1
                    },
                    on: {
                        start: function(t) {
                            e.dragging = !0
                        },
                        end: function(t) {
                            e.dragging = !1
                        }
                    },
                    model: {
                        value: e.sortedStash,
                        callback: function(t) {
                            e.sortedStash = t
                        },
                        expression: "sortedStash"
                    }
                }, e._l(e.sortedStash, (function(t, a) {
                    return s("button", {
                        key: "$shuffled_" + a,
                        staticClass: "word",
                        on: {
                            click: function(s) {
                                e.maxReached ? e.startMaxFeedback() : e.addWord(t.sentenceIndex, t.wordIndex, t.word, s)
                            }
                        }
                    }, [e._v("\n                    " + e._s(t.word) + "\n                ")])
                })), 0)], 1) : e._e() : s("div", [s("draggable", {
                    staticClass: "draggable",
                    attrs: {
                        group: {
                            name: "stash",
                            pull: "clone",
                            put: !1
                        },
                        "fallback-tolerance": 5,
                        disabled: e.maxReached,
                        sort: !1,
                        filter: ".landmark"
                    },
                    on: {
                        start: function(t) {
                            e.dragging = !0
                        },
                        end: function(t) {
                            e.dragging = !1
                        }
                    },
                    model: {
                        value: e.stash,
                        callback: function(t) {
                            e.stash = t
                        },
                        expression: "stash"
                    }
                }, e._l(e.stash, (function(t, a) {
                    return s("span", {
                        key: t.isLandmark ? "landmark_" + a : t.sentenceIndex + "_" + t.wordIndex,
                        staticClass: "container"
                    }, [t.isLandmark ? s("div", {
                        staticClass: "sentence landmark visually-hidden",
                        attrs: {
                            "aria-label": "sentence"
                        }
                    }, [e._v("\n                        " + e._s(t.description) + "\n                    ")]) : s("button", {
                        staticClass: "word",
                        on: {
                            click: function(s) {
                                e.maxReached ? e.startMaxFeedback() : e.addWord(t.sentenceIndex, t.wordIndex, t.word, s)
                            }
                        }
                    }, [e._v("\n                        " + e._s(t.word) + "\n                    ")])])
                })), 0)], 1), e._v(" "), s("div", {
                    staticClass: "controls",
                    attrs: {
                        role: "region",
                        "aria-label": "sorting options"
                    }
                }, [s("button", {
                    staticClass: "shuffle control",
                    on: {
                        click: function(t) {
                            e.showShuffled ? e.showShuffled = !1 : e.shuffleStash()
                        }
                    }
                }, [e._v("\n                " + e._s(e.showShuffled ? "Show Original" : "Shuffle") + "\n            ")]), e._v(" "), s("button", {
                    staticClass: "unshuffle control",
                    on: {
                        click: function(t) {
                            e.showSorted ? e.showSorted = !1 : e.sortStash()
                        }
                    }
                }, [e._v("\n                " + e._s(e.showSorted ? "Show Original" : "Sort") + "\n            ")])])]), e._v(" "), s("transition", {
                    attrs: {
                        name: "clipboard",
                        appear: ""
                    }
                }, [s("div", {
                    class: e.feedbackActive ? "clipboard shake" : "clipboard",
                    attrs: {
                        role: "region",
                        "aria-label": "composition"
                    }
                }, [s("div", {
                    ref: "magnetAnswer",
                    staticClass: "magnet-answer"
                }, [s("span", {
                    staticClass: "composition-text visually-hidden",
                    attrs: {
                        "aria-live": "polite"
                    }
                }, [e._v(e._s(e.answerText))]), e._v(" "), s("div", {
                    staticClass: "visually-hidden"
                }, [s("button", {
                    on: {
                        click: function(t) {
                            return e.focusIndex(0)
                        }
                    }
                }, [e._v("Fill answer 1")]), e._v(" "), s("button", {
                    on: {
                        click: function(t) {
                            return e.focusIndex(1)
                        }
                    }
                }, [e._v("Fill answer 2")]), e._v(" "), s("button", {
                    on: {
                        click: function(t) {
                            return e.readAnswer()
                        }
                    }
                }, [e._v("Read current answer")])]), e._v(" "), s("div", {
                    staticClass: "prompt",
                    attrs: {
                        "aria-label": "answers"
                    }
                }, e._l(e.mappedPrompt, (function(t, a) {
                    return s("div", {
                        key: "section_" + a,
                        staticClass: "section"
                    }, e._l(t, (function(a, r) {
                        return s("div", {
                            key: "piece_" + t + "_" + r
                        }, [a.isBlank ? s("div", {
                            class: "piece-container-blank",
                            attrs: {
                                "aria-label": "answer " + (a.blankIndex + 1),
                                role: "region"
                            },
                            on: {
                                click: function(t) {
                                    return e.focusIndex(a.blankIndex)
                                }
                            }
                        }, [a.isBlank ? s("draggable", {
                            ref: "blank_" + a.blankIndex,
                            refInFor: !0,
                            class: e.getClassName(a.blankIndex),
                            style: e.answers[a.blankIndex].length || e.dragging ? "" : "--placeholder: '" + e.player.placeholder + "'",
                            attrs: {
                                group: {
                                    name: "composition_" + a.blankIndex,
                                    put: e.answers[a.blankIndex].length < e.player.maxWordsPerAnswer || e.dropDragWord(a.blankIndex)
                                },
                                "fallback-tolerance": 5
                            },
                            on: {
                                add: function(t) {
                                    return e.submitResponse(!1)
                                },
                                start: function(t) {
                                    e.dragging = !0
                                },
                                end: function(t) {
                                    return e.handleAnswerDragEnd(t, a.blankIndex)
                                }
                            },
                            model: {
                                value: e.answers[a.blankIndex],
                                callback: function(t) {
                                    e.$set(e.answers, a.blankIndex, t)
                                },
                                expression: "answers[piece.blankIndex]"
                            }
                        }, e._l(e.answers[a.blankIndex], (function(t, n) {
                            return s("button", {
                                key: "word_" + r + "_" + n,
                                staticClass: "composition-word",
                                on: {
                                    click: function(t) {
                                        e.focusedIndex == a.blankIndex && e.removeWord(a.blankIndex, n)
                                    },
                                    keydown: [function(t) {
                                        return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) ? null : t.altKey ? "button" in t && 0 !== t.button ? null : (t.preventDefault(), e.moveWordLeft(a.blankIndex, n)) : null
                                    }, function(t) {
                                        return !t.type.indexOf("key") && e._k(t.keyCode, "right", 39, t.key, ["Right", "ArrowRight"]) ? null : t.altKey ? "button" in t && 2 !== t.button ? null : (t.preventDefault(), e.moveWordRight(a.blankIndex, n)) : null
                                    }]
                                }
                            }, [e._v("\n                                        " + e._s(t.word) + "\n                                    ")])
                        })), 0) : e._e()], 1) : s("span", {
                            staticClass: "prompt-text"
                        }, [e._v(e._s(a.content))])])
                    })), 0)
                })), 0), e._v(" "), e.player.error ? s("span", {
                    staticClass: "error",
                    attrs: {
                        "aria-live": "assertive"
                    }
                }, [e._v(e._s(e.player.error))]) : e._e(), e._v(" "), s("div", {
                    staticClass: "controls",
                    attrs: {
                        role: "region",
                        "aria-label": "actions"
                    }
                }, [s("button", {
                    staticClass: "submit-button control",
                    class: {
                        full: !e.hasEmptyBlank
                    },
                    attrs: {
                        disabled: e.hasEmptyBlank || e.submitted
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onSubmit.apply(null, arguments)
                        }
                    }
                }, [e._v("\n                        Submit\n                    ")]), e._v(" "), e.hasEmptyBlank ? s("button", {
                    staticClass: "start control",
                    attrs: {
                        disabled: !!e.answers[e.focusedIndex].length
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.startForMe.apply(null, arguments)
                        }
                    }
                }, [e._v("\n                        Start for me\n                    ")]) : e._e()])])])])], 1)
            };
            ee._withStripped = !0;
            var te = function(e, t, s, a) {
                return new(s || (s = Promise))((function(r, n) {
                    function o(e) {
                        try {
                            c(a.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function i(e) {
                        try {
                            c(a.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(o, i)
                    }
                    c((a = a.apply(e, t || [])).next())
                }))
            };
            const se = ["magnet-answer", "section", "prompt", "prompt-text", "composition-draggable", "composition-draggable shake", "composition-draggable selected", "composition-draggable selected shake", "submit-button", "composition-word"],
                ae = n().extend({
                    components: {
                        TopBar: T,
                        draggable: R()
                    },
                    props: {
                        info: Object,
                        player: Object
                    },
                    data() {
                        const e = this.player,
                            t = (e => {
                                const t = [];
                                return e.forEach(((e, s) => {
                                    t.push({
                                        isLandmark: !0,
                                        description: e.join(" ")
                                    }), e.forEach(((e, a) => {
                                        t.push({
                                            word: e,
                                            wordIndex: a,
                                            sentenceIndex: s
                                        })
                                    }))
                                })), t
                            })(e.stash),
                            s = (e => {
                                const t = e.map((e => e)).filter((e => !e.isLandmark));
                                return t.sort(((e, t) => e.word.length - t.word.length || e.word.localeCompare(t.word))), t
                            })(t),
                            a = e.category.split(" "),
                            r = [];
                        for (let t = e.numAnswers; t > 0; t--) r.push([]);
                        return {
                            answers: r,
                            categoryWords: a,
                            dragging: !1,
                            feedbackActive: !1,
                            feedbackIndex: -1,
                            focusedIndex: 0,
                            index: 0,
                            scrollSpace: "233px",
                            showShuffled: !1,
                            showSorted: !1,
                            shuffledStash: [],
                            sortedStash: s,
                            stash: t,
                            submitted: !1
                        }
                    },
                    bb: {
                        section: (e, t) => `${t}[section]`,
                        answer: (e, t, {
                            id: s
                        }) => `‡blank=${s}‡`
                    },
                    computed: {
                        answerText() {
                            const e = this.player.splitPrompt;
                            let t = `${e[0]} ${e[1]}`;
                            return this.answers[0].forEach((e => {
                                t = `${t} ${e.word}`
                            })), t = `${t}. ${e[2]} ${e[3]}`, this.answers[1].forEach((e => {
                                t = `${t} ${e.word}`
                            })), t
                        },
                        hasEmptyBlank() {
                            return this.answers.some((e => e.length < 1))
                        },
                        mappedPrompt() {
                            if (this.player) {
                                const e = this.$bb(this.player.prompt).split("[section]").filter((e => e)),
                                    t = [];
                                return e.forEach((e => {
                                    const s = e.split("‡").filter((e => e)).map((e => ({
                                        content: e,
                                        isBlank: "blank" === e.substring(0, 5),
                                        blankIndex: parseInt(e[6], 10)
                                    })));
                                    t.push(s)
                                })), t
                            }
                            return ""
                        },
                        maxReached() {
                            return !!this.player && this.answers.every((e => e.length >= this.player.maxWordsPerAnswer))
                        }
                    },
                    watch: {
                        answers() {
                            const e = this.$refs.magnetAnswer;
                            e && (this.scrollSpace = `${e.offsetHeight+15}px`)
                        },
                        focusedIndex() {
                            this.$announce(`Now filling answer ${this.focusedIndex+1}`)
                        }
                    },
                    methods: {
                        addWord(e, t, s, a) {
                            this.answers[this.focusedIndex].length >= this.player.maxWordsPerAnswer ? this.startMaxFeedback(this.focusedIndex) : (this.answers[this.focusedIndex].push({
                                sentenceIndex: e,
                                wordIndex: t,
                                word: s
                            }), this.submitResponse(!1), 0 !== a.clientX && 0 !== a.clientY && a.target.blur())
                        },
                        addNonStashWord: e => ({
                            sentenceIndex: -1,
                            wordIndex: -1,
                            word: e
                        }),
                        dropDragWord(e) {
                            return (t, s) => s.options.group.name === t.options.group.name || (this.startMaxFeedback(e), t.el.classList.add("shake"), setTimeout((() => {
                                t && t.el && t.el.classList.remove("shake")
                            }), 300), !1)
                        },
                        focusIndex(e) {
                            this.focusedIndex = e
                        },
                        formatComposition() {
                            return this.answers.map((e => e.map((e => ({
                                index: e.sentenceIndex,
                                word: e.wordIndex >= 0 ? e.wordIndex : e.word
                            })))))
                        },
                        getClassName(e) {
                            let t = "composition-draggable";
                            return e === this.feedbackIndex && (t += " shake"), this.focusedIndex === e && (t += " selected"), t
                        },
                        handleAnswerDragEnd(e, t) {
                            return te(this, void 0, void 0, (function*() {
                                this.dragging = !1;
                                const {
                                    newIndex: s,
                                    originalEvent: a
                                } = e;
                                let r, n;
                                if (window.TouchEvent && a instanceof TouchEvent) {
                                    const {
                                        changedTouches: e
                                    } = a;
                                    if (!e || !e[0]) return;
                                    r = e[0].clientX, n = e[0].clientY
                                } else {
                                    if (!(a instanceof DragEvent)) return;
                                    r = a.x, n = a.y
                                }
                                if (null == r || null == n) return;
                                const o = document.elementFromPoint(r, n);
                                o && (se.includes(o.className) || this.removeWord(t, s), yield this.submitResponse(!1))
                            }))
                        },
                        hideShuffled() {
                            this.showShuffled = !1
                        },
                        moveWordLeft(e, t) {
                            if (t) {
                                const s = this.answers[e][t];
                                this.answers[e].splice(t, 1), this.answers[e].splice(t - 1, 0, s), this.submitResponse(!1), this.$nextTick((() => {
                                    this.$refs[`blank_${e}`][0].$el.children[t - 1].focus()
                                }))
                            }
                        },
                        moveWordRight(e, t) {
                            if (t < this.answers[e].length - 1) {
                                const s = this.answers[e][t];
                                this.answers[e].splice(t, 1), this.answers[e].splice(t + 1, 0, s), this.submitResponse(!1), this.$nextTick((() => {
                                    this.$refs[`blank_${e}`][0].$el.children[t + 1].focus()
                                }))
                            }
                        },
                        readAnswer() {
                            this.$announce(this.answerText)
                        },
                        removeWord(e, t) {
                            this.answers[e].splice(t, 1), this.submitResponse(!1)
                        },
                        shuffleStash() {
                            let e = [];
                            this.player.stash.forEach(((t, s) => {
                                const a = t.map(((e, t) => ({
                                    word: e,
                                    sentenceIndex: s,
                                    wordIndex: t
                                })));
                                e = e.concat(a)
                            })), this.shuffledStash = this.shuffle(e), this.showShuffled = !0, this.showSorted = !1
                        },
                        shuffle(e) {
                            for (let t = e.length - 1; t > 0; t--) {
                                const s = Math.floor(Math.random() * (t + 1)),
                                    a = e[t];
                                e[t] = e[s], e[s] = a
                            }
                            return e
                        },
                        sortStash() {
                            this.showShuffled = !1, this.showSorted = !0
                        },
                        startForMe() {
                            for (let e = 3; e > 0; e--) {
                                const e = Math.floor(Math.random() * this.sortedStash.length);
                                this.answers[this.focusedIndex].push(this.sortedStash[e])
                            }
                            this.submitResponse(!1)
                        },
                        startMaxFeedback(e) {
                            !this.feedbackActive && this.feedbackIndex < 0 && (void 0 !== e ? this.feedbackIndex = e : this.feedbackActive = !0, this.$vibrate([50, 100, 50]), setTimeout((() => {
                                void 0 !== e ? this.feedbackIndex = -1 : this.feedbackActive = !1
                            }), 300))
                        },
                        submitResponse(e) {
                            return te(this, void 0, void 0, (function*() {
                                try {
                                    const t = this.formatComposition(),
                                        s = yield this.$ecast.updateObject(this.player.answerKey, {
                                            text: t,
                                            final: e
                                        });
                                    return s instanceof p.OK ? (e && (this.submitted = !1), {
                                        error: null
                                    }) : {
                                        error: s
                                    }
                                } catch (e) {
                                    return this.$handleEcastError(e), {}
                                }
                            }))
                        },
                        onSubmit() {
                            return te(this, void 0, void 0, (function*() {
                                this.submitted = !0;
                                const {
                                    error: e
                                } = yield this.submitResponse(!0);
                                e ? (this.submitted = !1, console.error("Failed to submit composition: ", e)) : this.$refs.top.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }))
                        }
                    }
                });
            var re = (0, c.Z)(ae, ee, [function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "visually-hidden",
                    attrs: {
                        role: "region",
                        "aria-label": "keyboard instructions"
                    }
                }, [s("span", [e._v("\n            Each sentence will be followed by buttons for each word in the sentence.\n            Once a word has been added to your answer,you can focus that word in the composition and\n            press Alt + Left or Right to change word order\n        ")])])
            }], !1, null, null, null);
            re.options.__file = "src/games/pp8/apply-yourself/views/player/ResuMagnets.vue";
            const ne = re.exports;
            var oe = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "voting"
                }, [s("div", {
                    staticClass: "title",
                    attrs: {
                        role: "region",
                        "aria-label": "prompt"
                    }
                }, [e._v("\n        " + e._s(e.player.prompt) + "\n    ")]), e._v(" "), s("form", [s("div", {
                    staticClass: "choices"
                }, e._l(e.player.choices, (function(t, a) {
                    return s("button", {
                        key: "choice_" + a,
                        staticClass: "choice control",
                        attrs: {
                            disabled: e.votePending
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.submitVote(a)
                            }
                        }
                    }, [s("div", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: t.text,
                            expression: "choice.text"
                        }],
                        class: t.text.includes("\n") && "resume"
                    })])
                })), 0)])])
            };
            oe._withStripped = !0;
            var ie = function(e, t, s, a) {
                return new(s || (s = Promise))((function(r, n) {
                    function o(e) {
                        try {
                            c(a.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function i(e) {
                        try {
                            c(a.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(o, i)
                    }
                    c((a = a.apply(e, t || [])).next())
                }))
            };
            const ce = n().extend({
                props: {
                    player: Object
                },
                data: () => ({
                    votePending: !1,
                    votingPaused: !0
                }),
                mounted() {
                    return ie(this, void 0, void 0, (function*() {
                        yield new Promise((e => setTimeout(e, 400))), this.votingPaused = !1
                    }))
                },
                methods: {
                    submitVote(e) {
                        return ie(this, void 0, void 0, (function*() {
                            if (!this.votingPaused) {
                                this.player.responseKey || console.error("Missing response entity for vote session"), this.votePending = !0;
                                try {
                                    (yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "choose",
                                        choice: e
                                    })) instanceof p.OK || (console.error(`Error sending vote for ${this.player.responseKey}`), this.votePending = !1)
                                } catch (e) {
                                    this.$handleEcastError(e, `Error sending vote for ${this.player.responseKey}`)
                                }
                            }
                        }))
                    }
                }
            });
            var le = (0, c.Z)(ce, oe, [], !1, null, null, null);
            le.options.__file = "src/games/pp8/apply-yourself/views/player/Voting.vue";
            const de = le.exports;
            var ue = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "postgame"
                }, [s("PostGameActions", {
                    staticClass: "controls",
                    attrs: {
                        player: e.player,
                        classes: {
                            action: "control"
                        }
                    }
                }), e._v(" "), s("GalleryLink", {
                    attrs: {
                        artifact: e.artifact
                    }
                })], 1)
            };
            ue._withStripped = !0;
            var pe = s(56623),
                he = s(83933);
            const fe = n().extend({
                components: {
                    GalleryLink: pe.Z,
                    PostGameActions: he.Z
                },
                props: {
                    artifact: Object,
                    player: Object
                }
            });
            var ve = (0, c.Z)(fe, ue, [], !1, null, null, null);
            ve.options.__file = "src/games/pp8/apply-yourself/views/player/PostGame.vue";
            const be = ve.exports;
            var ge = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "voting"
                }, [e.voteIndex ? s("div", {
                    staticClass: "submitted"
                }, [s("div", {
                    staticClass: "success"
                }, [e._v("You picked:")]), e._v(" "), s("div", {
                    staticClass: "choice"
                }, [s("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.audience.choices[e.voteIndex].text,
                        expression: "audience.choices[voteIndex].text"
                    }],
                    class: e.audience.choices[e.voteIndex].text.includes("\n") && "resume"
                })])]) : s("div", [s("div", {
                    staticClass: "title"
                }, [e._v("\n            " + e._s(e.audience.prompt) + "\n        ")]), e._v(" "), s("div", {
                    staticClass: "choices"
                }, e._l(e.audience.choices, (function(t) {
                    return s("button", {
                        key: "choice_" + t.key,
                        staticClass: "choice control",
                        attrs: {
                            disabled: e.votePending
                        },
                        on: {
                            click: function(s) {
                                return s.preventDefault(), e.submitVote(t.key)
                            }
                        }
                    }, [s("div", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: t.text,
                            expression: "choice.text"
                        }],
                        class: t.text.includes("\n") && "resume"
                    })])
                })), 0)])])
            };
            ge._withStripped = !0;
            var me = function(e, t, s, a) {
                return new(s || (s = Promise))((function(r, n) {
                    function o(e) {
                        try {
                            c(a.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function i(e) {
                        try {
                            c(a.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(o, i)
                    }
                    c((a = a.apply(e, t || [])).next())
                }))
            };
            const we = n().extend({
                props: {
                    audience: Object
                },
                data: () => ({
                    votePending: !1,
                    voteIndex: "",
                    votingPaused: !0
                }),
                mounted() {
                    return me(this, void 0, void 0, (function*() {
                        yield new Promise((e => setTimeout(e, 500))), this.votingPaused = !1
                    }))
                },
                methods: {
                    submitVote(e) {
                        return me(this, void 0, void 0, (function*() {
                            if (!this.votingPaused)
                                if (this.audience.countGroupName) {
                                    this.votePending = !0;
                                    try {
                                        (yield this.$ecast.incrementCountGroupCounter(this.audience.countGroupName, e)) instanceof p.OK != 1 ? (console.error("Error sending vote"), this.votePending = !1) : this.voteIndex = e
                                    } catch (e) {
                                        this.$handleEcastError(e)
                                    }
                                } else console.error("Missing response entity for vote session")
                        }))
                    }
                }
            });
            var ye = (0, c.Z)(we, ge, [], !1, null, null, null);
            ye.options.__file = "src/games/pp8/apply-yourself/views/audience/Voting.vue";
            const xe = ye.exports;
            var _e = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "sinkvoting"
                }, [e.showSuccess ? s("div", {
                    staticClass: "done prompt"
                }, [e._v("\n        " + e._s(e.audience.doneMessage) + "\n    ")]) : e.photoVoteIndex ? s("div", {
                    staticClass: "voting"
                }, [s("div", {
                    staticClass: "prompt"
                }, [e._v(e._s(e.audience.wordPrompt))]), e._v(" "), s("draggable", {
                    staticClass: "stash",
                    attrs: {
                        value: e.audience.wordChoices,
                        group: {
                            name: "stash",
                            pull: "clone",
                            put: !1
                        },
                        "fallback-tolerance": 5,
                        disabled: e.votePending,
                        sort: !1
                    },
                    on: {
                        start: function(t) {
                            e.dragging = !0
                        },
                        end: function(t) {
                            e.dragging = !1
                        }
                    }
                }, e._l(e.audience.wordChoices, (function(t) {
                    return s("button", {
                        key: t.key,
                        staticClass: "word",
                        attrs: {
                            value: t.key,
                            disabled: e.votePending || "" !== e.wordVoteIndex
                        },
                        on: {
                            click: function(s) {
                                return e.handleWordClick(t)
                            }
                        }
                    }, [e._v("\n                " + e._s(t.text) + "\n            ")])
                })), 0), e._v(" "), s("transition", {
                    attrs: {
                        name: "clipboard",
                        appear: ""
                    }
                }, [s("div", {
                    staticClass: "clipboard"
                }, [s("div", {
                    staticClass: "fib"
                }, e._l(e.mappedPrompt, (function(t, a) {
                    return s("span", {
                        key: "fib" + a
                    }, [t.isBlank ? t.isActive ? e.answer.length && e.wordVoteIndex ? s("span", {
                        staticClass: "word"
                    }, [e._v(e._s(e.answer[0].text))]) : s("draggable", {
                        staticClass: "answer-draggable",
                        class: !e.answer.length && !e.dragging && "empty",
                        attrs: {
                            group: {
                                name: "answer",
                                put: !0
                            },
                            "fallback-tolerance": 5,
                            disabled: e.votePending
                        },
                        on: {
                            add: e.submitOnDrag
                        },
                        model: {
                            value: e.answer,
                            callback: function(t) {
                                e.answer = t
                            },
                            expression: "answer"
                        }
                    }, e._l(e.answer, (function(t) {
                        return s("span", {
                            key: t.key,
                            staticClass: "word"
                        }, [e._v(e._s(t.text))])
                    })), 0) : s("span", {
                        staticClass: "disabled-blank"
                    }) : s("span", [e._v(e._s(t.content))])], 1)
                })), 0)])])], 1) : s("div", {
                    staticClass: "voting"
                }, [s("div", {
                    staticClass: "prompt"
                }, [e._v(e._s(e.audience.photoPrompt))]), e._v(" "), s("div", {
                    staticClass: "posters"
                }, e._l(e.audience.photoChoices, (function(t) {
                    return s("button", {
                        key: t.key,
                        class: "poster control poster_" + t.photo,
                        attrs: {
                            "aria-label": t.alt
                        },
                        on: {
                            click: function(s) {
                                return s.preventDefault(), e.submitVote(t.key, "photo")
                            }
                        }
                    })
                })), 0)])])
            };
            _e._withStripped = !0;
            var ke = function(e, t, s, a) {
                return new(s || (s = Promise))((function(r, n) {
                    function o(e) {
                        try {
                            c(a.next(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function i(e) {
                        try {
                            c(a.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(o, i)
                    }
                    c((a = a.apply(e, t || [])).next())
                }))
            };
            const Ce = n().extend({
                components: {
                    draggable: R()
                },
                props: {
                    audience: Object
                },
                data: () => ({
                    answer: [],
                    dragging: !1,
                    photoVoteIndex: "",
                    showSuccess: !1,
                    votePending: !1,
                    wordVoteIndex: "",
                    votingPaused: !0
                }),
                bb: {
                    answer: (e, t, {
                        disabled: s
                    }) => s ? "‡blank_disabled‡" : "‡blank‡"
                },
                computed: {
                    mappedPrompt() {
                        return this.audience ? this.$bb(this.audience.fib).split("‡").filter((e => e)).map((e => ({
                            content: e,
                            isBlank: "blank" === e.substring(0, 5),
                            isActive: !e[6]
                        }))) : []
                    }
                },
                mounted() {
                    return ke(this, void 0, void 0, (function*() {
                        yield new Promise((e => setTimeout(e, 500))), this.votingPaused = !1
                    }))
                },
                methods: {
                    submitOnDrag() {
                        return ke(this, void 0, void 0, (function*() {
                            yield this.submitVote(this.answer[0].key, "word")
                        }))
                    },
                    handleWordClick(e) {
                        return ke(this, void 0, void 0, (function*() {
                            this.answer = [e], yield this.submitVote(e.key, "word")
                        }))
                    },
                    submitVote(e, t) {
                        return ke(this, void 0, void 0, (function*() {
                            if (this.votingPaused) return;
                            const s = "photo" === t ? this.audience.photoCountGroup : this.audience.wordCountGroup;
                            if (s) {
                                this.votePending = !0;
                                try {
                                    (yield this.$ecast.incrementCountGroupCounter(s, e)) instanceof p.OK != 1 ? console.error(`Error sending vote for ${t}`) : "photo" === t ? this.photoVoteIndex = e : this.wordVoteIndex = e
                                } catch (t) {
                                    this.$handleEcastError(t, `Error sending vote with key ${e}: ${t}`)
                                }
                                this.votePending = !1, "word" === t && (yield new Promise((e => setTimeout(e, 2e3))), this.showSuccess = !0)
                            } else console.error("No count group provided to vote method!")
                        }))
                    }
                }
            });
            var Se = (0, c.Z)(Ce, _e, [], !1, null, null, null);
            Se.options.__file = "src/games/pp8/apply-yourself/views/audience/SinkVoting.vue";
            const Ie = Se.exports,
                $e = n().extend({
                    components: {
                        AudienceVotingView: xe,
                        DoneView: d,
                        LobbyView: N,
                        LogoView: Q,
                        MagnetsView: H,
                        PostGameView: be,
                        ResuMagnetsView: ne,
                        SinkVotingView: Ie,
                        TopBar: T,
                        VotingView: de,
                        WritingView: E
                    },
                    props: {
                        artifact: Object,
                        player: Object,
                        info: Object,
                        audiencePlayer: Object
                    },
                    themeColor: "#CAC0A7",
                    computed: {
                        hideMainTopBar() {
                            if (!this.player) return !1;
                            switch (this.player.kind) {
                                case "postGame":
                                case "magnets":
                                case "resumagnets":
                                case "lobby":
                                    return !0;
                                default:
                                    return !1
                            }
                        }
                    },
                    mounted() {
                        this.$debug.setAutomarkIgnoredKeys(["timer"])
                    },
                    ecastKeys: {
                        player: ({
                            id: e
                        }) => `player:${e}`,
                        info: ({
                            id: e
                        }) => `info:${e}`,
                        audiencePlayer: "audiencePlayer"
                    },
                    ecastProviders: {
                        artifact: e => {
                            if (e.artifact) return e.artifact;
                            let t, s = 0;
                            for (; e[`artifact:${s}`];) t = e[`artifact:${s}`], s += 1;
                            return t
                        }
                    },
                    methods: {
                        isVoting: e => "voting" === e.kind
                    }
                });
            var Ee = (0, c.Z)($e, a, [], !1, null, null, null);
            Ee.options.__file = "src/games/pp8/apply-yourself/views/Main.vue";
            const Pe = Ee.exports
        },
        60071: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/3b8346361c7762d4b1a3.svg"
        },
        58299: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/b32a7fd5dd65ec15d76d.svg"
        },
        48003: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/9ebf3317bec38aee97cc.svg"
        },
        15929: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/cfc8eaae419e421503c0.svg"
        },
        46360: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/8b9a8ae989d1dcafee00.svg"
        },
        11745: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/590c7e750c4b5c2e6269.svg"
        },
        35205: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/f8492c0b26b388834b38.svg"
        },
        89130: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/809b23d78f0044cd0686.svg"
        },
        39981: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/c48942a65cdebe69c4c0.svg"
        },
        12319: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/38911c59724a0bd535e6.svg"
        },
        99893: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/7063376a67a5b20367e7.svg"
        },
        385: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/c1cbe7ed6488587f0639.svg"
        },
        79368: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/ecdcad1edb12df07517e.svg"
        },
        75559: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/d9093e9321d0629a5fc3.svg"
        },
        21496: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/a6e20182962053b77e68.svg"
        },
        36200: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/f6afc3d95eabdb99f600.svg"
        },
        79615: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/8a4a78e565199130ed53.svg"
        },
        81933: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/b5f0974d968e7923d53a.svg"
        },
        71655: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/bf21480b12c7eacfd79c.svg"
        },
        41136: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/47ab28d39ef1451aab2d.svg"
        },
        32541: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/c2f026341b6a7d0038f5.svg"
        },
        63980: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/d0bf4b07edb8093c96e5.svg"
        },
        19388: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/9c17b0bc14108783f694.svg"
        },
        79558: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/41b8e9c272ce7e5e7ef0.svg"
        },
        57294: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/a386b24ffb353b84c917.svg"
        },
        64557: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/9de1bc67d9bfd5c50f6c.svg"
        },
        51276: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/1b65c1f3a8fa8d76016b.svg"
        },
        50582: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/e3fcd8e1aa9b6eec2314.svg"
        },
        59369: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/d303cabcf1b4c55060c1.svg"
        },
        58813: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/d3cb5c37315b36d6ad8a.svg"
        },
        41910: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/398c25682a1a9cf5b012.svg"
        },
        46052: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/72641f0e168ef31717a1.svg"
        },
        25204: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/b6884311c78f2beb2930.svg"
        },
        96846: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/dcb83ff9c20ef49db8dd.svg"
        },
        33663: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/e1d5fde6249b255880a0.svg"
        },
        34821: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/6b4cb7039bbc0cd11d66.svg"
        },
        14142: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/9f57645170a34a569e41.svg"
        },
        42542: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/7ad7bde960861cb6a3d9.svg"
        },
        35258: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/3856388cab4005decc53.svg"
        },
        36989: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/9d2d1f11382abb34b440.svg"
        },
        5634: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/f34137b36c0280d4c726.svg"
        },
        53375: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/69f381c2907d0c0cc18f.svg"
        },
        96414: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/2b888b2f6fa44bd717dd.svg"
        },
        75082: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/0d757e6fa17f1d9f38fe.svg"
        },
        70200: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/85d9ca63f095da6c98ea.svg"
        },
        87866: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/a977801ae9c9e3f91a40.svg"
        },
        82787: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/bc2f56344c798f05146f.svg"
        },
        43135: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/f1194a000c89f629c23b.svg"
        },
        83394: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/998abc6b3d85e28b30e1.svg"
        },
        91801: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/ea231236cd1b0c4a3159.svg"
        },
        16588: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/c93bf0e4c7bf83b47bc2.svg"
        },
        22786: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/6de0c383779425185779.svg"
        },
        90666: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/a8df6682049f8b5edc38.svg"
        },
        13301: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/d777055c1d4a6f6d5c4c.svg"
        },
        78894: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/0cd397683b329d050d8b.svg"
        },
        36817: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/1445fa105911c68dcc0d.svg"
        },
        55974: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/edf1cc6c607383171442.svg"
        },
        97456: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/6bc7545e3fc526158e6e.svg"
        },
        4954: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/cc26f075164426ed828d.svg"
        },
        90238: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/282b27a81397d4287ee7.svg"
        },
        94524: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/c07bb40ceac13a36a113.svg"
        },
        11629: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/f1247662a2297b5d014d.svg"
        },
        12774: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/85f0b71c7b091b176948.svg"
        },
        10201: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/f2e23d63ba090b529448.svg"
        },
        41338: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/f7806cdc06f452868ee9.svg"
        },
        67813: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/4b1ea573f34260eea5ea.svg"
        },
        32565: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/cacc39862f1721594027.svg"
        },
        87125: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/c3f4ee3ef403ac06c5e5.svg"
        },
        40245: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/693989b6b02526170603.svg"
        },
        17598: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/d3520fccc41f8fa254b9.svg"
        },
        53937: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/7ff231c75b1d135b7b5f.svg"
        },
        31939: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/a2792916f766d5bec22e.svg"
        },
        95627: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/74ba2e0deccdfa067625.svg"
        },
        6418: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/ebe58175d045028ff6f8.svg"
        },
        57246: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/37c0c5d0ddf595ae4182.svg"
        },
        3196: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/9c53b3de67485cab7ca0.svg"
        },
        32416: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/b32f52295074232b47cd.svg"
        },
        29255: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/16b93fa9e83cdd5f74cb.svg"
        },
        23552: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/c54b4e20f36e5988b088.svg"
        },
        73768: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/584196ff60a2c13113e8.svg"
        },
        35356: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/284166766cdac9686673.svg"
        },
        51948: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/914c526be2a5ec85ae1d.svg"
        },
        86748: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/7d548529d13e0eefd2aa.svg"
        },
        27887: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/0d18a5d5d03f8cfdfa64.svg"
        },
        17310: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/67a398e12a5cd081616e.svg"
        },
        47056: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/299ce1f4c5923ab463a8.svg"
        },
        31316: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/747f01db069fc089ed3e.svg"
        },
        32131: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/cde63a9937fb0c0cd992.svg"
        },
        91440: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/ab11e5f9d71dacca46f8.svg"
        },
        87438: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/84d7d0f72a8dc0332870.svg"
        },
        4466: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/f8999aee4ae8d1682325.svg"
        },
        6858: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/3907ea980b0aa6ea0396.svg"
        },
        60073: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/46ab2c322e905b873306.svg"
        },
        61012: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/5c228cf4a04fe49f3410.svg"
        },
        47855: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/8d6b89ba09e69eacd484.svg"
        },
        25132: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/7e3f54a4be701b139464.svg"
        },
        98485: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/dc6f8fd235bcf040acab.svg"
        },
        33794: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/0d872177d226b34495db.svg"
        },
        39584: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/94fa54560be250c4a3e8.svg"
        },
        59920: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/90953f83a971f2dd04ba.svg"
        },
        34162: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/1fe3223fa59bce0c1ac1.svg"
        },
        59314: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/f548c276252544b16d63.svg"
        },
        9521: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/de6e4b4e70086edd34c6.svg"
        },
        58701: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/067aad194306db7852d3.svg"
        },
        79951: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/e5dbcf1068edd7330a4b.svg"
        },
        17307: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/31f6a81896d0a4c94979.svg"
        },
        3830: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/d878ee24f372e9a3fb1c.svg"
        },
        46507: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/0980e909b362688458b1.svg"
        },
        92861: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/9216ffc0ef2737b09737.svg"
        },
        45518: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/986feda2525ee712479b.svg"
        },
        7837: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/cb7e3ca81b191b7a1def.svg"
        },
        67756: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/cc4dd99bde91f80918ab.svg"
        },
        91575: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/854abb0e051071d9da45.svg"
        },
        20690: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/d8247046973ee2715161.svg"
        },
        48413: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/d8988eed6b46a33571cd.svg"
        },
        26499: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/83ff3bd72c147dc1fb18.svg"
        },
        28913: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/5f88e180033b466cfd40.svg"
        },
        71689: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/9d981bf7b588eb60d19a.svg"
        },
        91367: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/a921b4a41c5b4a49a8c6.svg"
        },
        31117: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/113ad096b71bb5c1e133.svg"
        },
        49646: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/3af4c63a1d044a4790be.svg"
        },
        78396: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/e87964597163beeb669e.svg"
        },
        51204: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/2b2440403cd96032fed5.svg"
        },
        74480: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/b10a85de5be511899403.svg"
        },
        78818: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/05413f8394d0df75ec98.svg"
        },
        66682: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/fa115b49340d6f244044.svg"
        },
        22167: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/bd0a6c62a76324eda207.svg"
        },
        11128: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/6458a098dba69775b8ca.svg"
        },
        74017: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/c8df42083bd99ecb9304.svg"
        },
        68679: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/15fa3de50685df526e0c.svg"
        },
        18458: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/d7d65e8638375abbee30.svg"
        },
        72349: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/223c518ef81448504635.svg"
        },
        50155: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/fcef0fe02d018e733b05.svg"
        },
        5351: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/4fcf36aebcc646e4ca39.svg"
        },
        5078: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/a1aba19054e2e280c7a1.svg"
        },
        57098: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/c4ce9a233d7bdd11df17.svg"
        },
        97783: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/8bed84e95a7338ded377.svg"
        },
        90664: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/95607256c81e3ef9f2ab.svg"
        },
        93340: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/f2cb2d9d7fc5149b401a.svg"
        },
        73271: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/438724fc720b00053e14.svg"
        },
        25621: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/cea6cd1843f682001fac.svg"
        },
        74144: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/93fc2ede4a5125dccb09.svg"
        },
        91022: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/b1e6d9ad1f115976a077.svg"
        },
        6516: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/21f15d652e7afbc523c4.svg"
        },
        58922: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/37e177980b2cd6e0dff7.svg"
        },
        64787: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/6fba14a0787009f2614b.svg"
        },
        5580: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/324e04b675966b3b29d4.svg"
        },
        60801: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/apply-yourself/d590e875feba5f5a5160.svg"
        }
    }
]);
//# sourceMappingURL=sourcemaps/2862.3370087ddca248fc7790.js.map