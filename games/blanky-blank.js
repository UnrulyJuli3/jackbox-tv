(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/blanky-blank"], {
        47642: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                MainView: () => z
            });
            var s = n(24340),
                o = n(2568),
                i = n.n(o),
                c = n(37231);
            const l = c.G.extend({
                guesses: [],
                initialize() {
                    c.G.prototype.initialize.apply(this), this.guesses = []
                },
                onChildviewInputSubmit() {
                    if (!this.model.get("isAudience")) return c.G.prototype.onChildviewInputSubmit.apply(this), !1;
                    const e = this.model.get("totalCountEntity") || "",
                        t = this.model.get("correctHashes") || [],
                        n = this.model.get("correctCountEntity") || "";
                    this.prompt = this.prompt || this.model.get("prompt") || {
                        html: ""
                    };
                    const s = this.inputComponent.getSanitizedValue(),
                        o = i()(s.replace(/\W/g, "").toLowerCase()).toString();
                    let l = null;
                    return this.model.setUpdate({
                        error: null
                    }), this.guesses.length || this.triggerMethod("client:gCounter", {
                        key: e
                    }), 0 === s.length ? l = this.model.get("strings").ERROR_NOTHING_ENTERED : this.guesses.includes(o) ? l = `You already guessed ${s}, try again!` : t.includes(o) ? (this.model.setUpdate({
                        prompt: {
                            html: `Yay, ${s} is correct!`,
                            entry: ""
                        }
                    }), this.triggerMethod("client:gCounter", {
                        key: n
                    }), this.$el.find("#input-region").prop("hidden", !0), this.$el.find("#buttons").prop("hidden", !0)) : (this.guesses.push(o), this.model.setUpdate({
                        prompt: {
                            html: `${this.prompt.html}<br />\n                        <span class="description">${s} isn't right, keep trying!</span>\n                    `
                        }
                    })), this.model.setUpdate({
                        error: l
                    }), this.inputComponent.clearInput(), !1
                }
            });
            var r = n(13469),
                a = n.n(r),
                h = n(72316),
                d = n.n(h),
                p = n(63574),
                g = n.n(p),
                m = n(24475),
                u = n(9659),
                b = n(40543),
                w = n(29014),
                y = n(89446),
                f = n(56884);
            const k = n(49273).r.extend({
                    template: a().template("\n        <button type=\"button\" role=\"listitem\" class='button choice-button btn btn-lg'></button>\n        <button data-action='censor' class='button censor-button btn btn-lg'></button>\n    "),
                    attributes: {
                        "aria-role": "presentation"
                    }
                }),
                v = w.C.extend({
                    childView: k
                }),
                C = d().Collection.extend({
                    model: d().Model
                }),
                S = g().CollectionView.extend({
                    tagName: "div",
                    className: "sentence-choices",
                    childView: v,
                    collection: new C,
                    childViewTriggers: {
                        "change:word": "change:word",
                        "scroll:choices": "scroll:choices"
                    },
                    childViewOptions: e => ({
                        collection: e.get("collection"),
                        childViewTriggers: {
                            "button:change:word": "change:word"
                        },
                        onAttach() {
                            const e = this.$el.get(0);
                            this.model.get("useLeftScrollbar") && e.setAttribute("data-simplebar-direction", "rtl");
                            const t = new f.Z(e, {
                                    autoHide: !1,
                                    clickOnTrack: !1
                                }),
                                n = t.getScrollElement();
                            n.scrollTop = this.model.get("scrollTop"), this.model.set({
                                scrollElement: n
                            }), t.getContentElement().setAttribute("role", "list");
                            const s = () => {
                                n.scrollTop > 5 ? e.classList.add("scroll-top") : e.classList.remove("scroll-top"), n.scrollTop + n.clientHeight < n.scrollHeight - 5 ? e.classList.add("scroll-bottom") : e.classList.remove("scroll-bottom")
                            };
                            s(), n.addEventListener("scroll", (() => {
                                s(), this.triggerMethod("scroll:choices", this)
                            }))
                        }
                    })
                }),
                O = g().View.extend({
                    className: "sentence-blank",
                    template: a().template('<div class="blank" role="button" tabindex="0"></div> '),
                    model: new(d().Model)({
                        choices: ["a", "b", "c"],
                        chosen: [],
                        first: !1,
                        maxChoices: 2,
                        optional: !1,
                        placeholder: "blanky",
                        second: !1
                    }),
                    triggers: {
                        "click .blank": "change:blank"
                    },
                    bindings: {
                        ":el": {
                            classes: {
                                empty: {
                                    observe: "chosen",
                                    onGet: e => e && !e.length
                                },
                                first: "first",
                                second: "second",
                                only: "only"
                            }
                        },
                        ".blank": {
                            observe: "chosen",
                            onGet: "showChosen"
                        }
                    },
                    showChosen(e) {
                        return e && e.length ? e.map((e => y.c.htmlUnescape(e.length > 36 ? `${e.substring(0,36)}...` : e))).join(" ") : this.model.get("placeholder") || ""
                    },
                    onRender() {
                        this.stickit()
                    }
                }),
                x = g().View.extend({
                    className: "sentence-word",
                    template: a().template('<div class="word"></div> '),
                    model: new(d().Model)({
                        choices: ["word"]
                    }),
                    bindings: {
                        ".word": {
                            observe: "choices",
                            onGet: e => e[0]
                        }
                    },
                    onRender() {
                        this.stickit()
                    }
                }),
                j = d().Collection.extend({
                    model: d().Model
                }),
                P = g().CollectionView.extend({
                    tagName: "div",
                    className: "sentence-words",
                    childView: e => e.get("choices").length > 1 ? O : x,
                    childViewOptions: (e, t) => ({
                        index: t
                    }),
                    collection: new j,
                    childViewTriggers: {
                        "change:blank": "child:change:blank"
                    },
                    onChildChangeBlank(e) {
                        this.triggerMethod("change:blank", e.getOption("index"))
                    }
                });

            function I(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, s)
                }
                return n
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(n), !0).forEach((function(t) {
                        E(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function E(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const T = e => e && !e.optional && e.choices.length > 1,
                V = g().View.extend({
                    className: "Sentence scrollable",
                    template: a().template('<div id="words" class="" aria-atomic="true" aria-live="polite"></div> <div id="choices" class=""></div> <div id="navigation" class=""></div> '),
                    model: new(d().Model)({
                        entryId: "sentence1",
                        prevEntryId: "sentence0",
                        scrollPositions: [0, 0],
                        selectedBlanks: [-1],
                        selectedSentence: [
                            ["It"],
                            ["sentence", "choice"]
                        ],
                        type: "call",
                        prevType: "response",
                        words: [{
                            choices: ["It"]
                        }, {
                            choices: ["choice", "sentence", "word"],
                            maxChoices: 2,
                            placeholder: "blanky"
                        }, {
                            choices: [".", "!", "?"],
                            maxChoices: 1,
                            optional: !0,
                            placeholder: "."
                        }]
                    }),
                    regions: {
                        choices: "#choices",
                        navigation: "#navigation",
                        words: "#words"
                    },
                    events: {
                        'click .choice-button[data-action="nextBlank"]': "nextBlank",
                        'click .choice-button[data-action="skipSentence"]': "skipSentence",
                        'click .choice-button[data-action="submitSentence"]': "submitSentence"
                    },
                    childViewEvents: {
                        "change:word": "changeWord"
                    },
                    childViewTriggers: {
                        "change:blank": "change:blank",
                        "scroll:choices": "scroll:choices"
                    },
                    initialize() {
                        this.wordsComponent = new P, this.choicesCollection = new(d().Collection), this.choicesComponent = new S({
                            collection: this.choicesCollection
                        }), this.navigationCollection = new(d().Collection), this.navigationComponent = new w.C({
                            collection: this.navigationCollection
                        }), this.listenTo(this.model, "change:words", this.updateSentence, this)
                    },
                    onChangeBlank(e) {
                        const t = this.model.get("selectedBlanks"),
                            n = this.getBlanksToSelect(e);
                        t.every((e => n.includes(e))) || this.changeBlanks(this.getBlanksToSelect(e))
                    },
                    onScrollChoices(e) {
                        this.scrollChoices(e, this.model)
                    },
                    changeBlanks(e) {
                        this.model.set({
                            selectedBlanks: e
                        }), this.wordsComponent.collection.forEach(((t, n) => {
                            const s = e[0] === n,
                                o = s && 1 === e.length,
                                i = e[1] === n;
                            t.set({
                                first: s,
                                only: o,
                                second: i
                            })
                        })), this.updateChoices(), this.updateNavigation()
                    },
                    changeWord(e) {
                        const t = this.model.get("selectedSentence"),
                            n = this.model.get("words"),
                            s = e.get("blankIdx"),
                            o = e.get("choice");
                        if (null == s || null == o) return;
                        const i = this.updateSelectedSentence(s, o);
                        this.triggerMethod("change:word", {
                            entry: {
                                changedWord: o,
                                position: {
                                    blank: i,
                                    sentence: s
                                },
                                sentence: this.getSentence()
                            }
                        }), this.updateSentence(), n[s].optional && t[s].length >= n[s].maxChoices ? this.onChangeBlank(s + 1) : this.updateNavigation()
                    },
                    clearOptionalBlank(e) {
                        const t = this.model.get("selectedSentence"),
                            n = t[e] && t[e][0];
                        n && (this.updateSelectedSentence(e, n), this.updateSentence())
                    },
                    getBlanksToSelect(e) {
                        const t = this.getWords(),
                            n = [e];
                        if (t[e])
                            if (t[e].optional) this.clearOptionalBlank(e);
                            else {
                                const s = t.filter((e => T(e))).map((e => t.indexOf(e)));
                                if (2 === s.length) return s;
                                const o = t[e - 1],
                                    i = t[e + 1];
                                T(i) ? n.push(t.indexOf(i)) : T(o) && n.unshift(t.indexOf(o))
                            } return n
                    },
                    getSentence() {
                        const e = this.model.get("selectedSentence"),
                            t = this.getWords();
                        return e.map(((e, n) => e && e.length ? e : t && t[n] ? t[n].placeholder : "")).flat()
                    },
                    getWords() {
                        const e = this.model.get("words");
                        if (!e.length) throw new Error(`No words sent for sentence ${this.model.get("entryId")}.`);
                        return e
                    },
                    nextBlank() {
                        const e = this.model.get("selectedBlanks"),
                            t = this.getWords().findIndex(((t, n) => n > e[e.length - 1] && T(t)));
                        if (-1 !== t) {
                            const e = this.getBlanksToSelect(t);
                            this.changeBlanks(e)
                        }
                    },
                    scrollChoices: a().debounce(((e, t) => {
                        const n = t.get("scrollPositions");
                        n[e.model.get("blankIdx")] = e.model.get("scrollElement").scrollTop, t.set({
                            scrollPositions: n
                        })
                    }), 50),
                    skipSentence() {
                        this.triggerMethod("submit", {
                            entry: {
                                position: {
                                    sentence: -1
                                },
                                sentence: []
                            }
                        })
                    },
                    submitSentence() {
                        const e = this.getSentence();
                        this.triggerMethod("submit", {
                            entry: {
                                position: {
                                    sentence: -1
                                },
                                sentence: e
                            }
                        })
                    },
                    resetSentence() {
                        const e = this.getWords(),
                            t = Array(e.length).fill(0),
                            n = Array(e.length).fill([]);
                        this.model.set({
                            scrollPositions: t,
                            selectedSentence: n
                        }), e.forEach(((e, t) => {
                            1 === e.choices.length ? this.updateSelectedSentence(t, e.choices[0]) : e.optional && this.updateSelectedSentence(t, e.placeholder)
                        }));
                        const s = e.findIndex(T),
                            o = this.getBlanksToSelect(s);
                        this.wordsComponent.collection.set(e.map(((e, t) => {
                            const n = o[0] === t,
                                s = n && 1 === o.length,
                                i = o[1] === t;
                            return B(B({}, e), {}, {
                                chosen: [],
                                first: n,
                                only: s,
                                second: i
                            })
                        }))), this.changeBlanks(o), this.model.set({
                            prevEntryId: this.model.get("entryId"),
                            prevType: this.model.get("type")
                        })
                    },
                    updateChoices() {
                        const e = this.model.get("scrollPositions"),
                            t = this.model.get("selectedBlanks"),
                            n = this.model.get("selectedSentence"),
                            s = this.getWords(),
                            o = t.map((o => {
                                const i = s[o];
                                if (!i || !i.choices) return null;
                                const c = n[o] || [],
                                    l = t.length >= 2 && t[0] === o;
                                return {
                                    blankIdx: o,
                                    collection: new(d().Collection)(i.choices.map((e => ({
                                        action: "change:word",
                                        blankIdx: o,
                                        choice: e,
                                        disabled: !c.includes(e) && c.length >= i.maxChoices,
                                        selected: c.includes(e),
                                        text: y.c.htmlUnescape(e.length > 36 ? `${e.substring(0,36)}...` : e)
                                    })))),
                                    scrollTop: e[o],
                                    useLeftScrollbar: l
                                }
                            })).filter((e => e));
                        this.choicesCollection.reset(), this.choicesCollection.add(o)
                    },
                    updateNavigation() {
                        const e = this.model.get("selectedBlanks"),
                            t = this.model.get("selectedSentence"),
                            n = this.model.get("type"),
                            s = this.getWords(),
                            o = t.reduce(((e, t, n) => T(s[n]) ? B(B({}, e), {}, {
                                [n]: t
                            }) : e), {}),
                            i = Object.keys(o).every((e => o[e].length)),
                            c = e.every((e => t[e] && t[e].length)),
                            l = e.includes(parseInt(Object.keys(o).slice(-1)[0], 10));
                        i ? this.navigationCollection.set([{
                            action: "submitSentence",
                            text: "Submit"
                        }]) : "writing" === n ? this.navigationCollection.set([{
                            disabled: !0,
                            text: "Make a sentence!"
                        }]) : l ? this.navigationCollection.set([{
                            action: "skipSentence",
                            text: "Skip"
                        }]) : this.navigationCollection.set([{
                            action: "nextBlank",
                            disabled: !c,
                            text: "Next"
                        }])
                    },
                    updateSelectedSentence(e, t) {
                        const n = this.model.get("selectedSentence");
                        let s = -1,
                            o = n[e];
                        if (!o) return s;
                        o.includes(t) ? (s = o.findIndex((e => e === t)), o = o.filter((e => e !== t))) : (s = o.length, o = o.concat(t)), n[e] = o, this.model.set({
                            selectedSentence: n
                        });
                        const i = this.getSentence().join(" ").length,
                            c = this.$el.get(0);
                        return c.classList.remove("mini-text", "tiny-text", "small-text", "medium-text", "large-text", "huge-text"), i > 125 ? c.classList.add("mini-text") : i > 100 ? c.classList.add("tiny-text") : i > 75 ? c.classList.add("small-text") : i > 50 ? c.classList.add("medium-text") : i > 25 ? c.classList.add("large-text") : c.classList.add("huge-text"), s
                    },
                    updateSentence() {
                        const e = this.model.get("entryId") !== this.model.get("prevEntryId"),
                            t = this.model.get("type") !== this.model.get("prevType");
                        (e || t) && this.resetSentence();
                        const n = this.model.get("selectedBlanks"),
                            s = this.model.get("selectedSentence"),
                            o = this.getWords();
                        this.wordsComponent.collection.set(o.map(((e, t) => {
                            const o = n[0] === t,
                                i = o && 1 === n.length,
                                c = n[1] === t;
                            return B(B({}, e), {}, {
                                chosen: s[t],
                                first: o,
                                only: i,
                                second: c
                            })
                        }))), this.updateChoices()
                    },
                    onRender() {
                        this.showChildView("words", this.wordsComponent), this.showChildView("choices", this.choicesComponent), this.showChildView("navigation", this.navigationComponent), this.stickit()
                    }
                });

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, s)
                }
                return n
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        $(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function $(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const L = u.S.extend({
                    defaults: {
                        entryId: "sentence0",
                        prompt: {
                            text: "Unknown prompt!"
                        },
                        sentence: {
                            words: [{
                                choices: ["It"]
                            }, {
                                choices: ["choice", "sentence", "word"],
                                maxChoices: 2,
                                placeholder: "blanky"
                            }, {
                                choices: [".", "!", "?"],
                                maxChoices: 1,
                                optional: !0,
                                placeholder: "."
                            }]
                        }
                    }
                }),
                D = g().View.extend({
                    className: "MakeSentence scrollable",
                    template: a().template('<div id="controller" class="state-controller controller-content"> <span id="prompt" class="">Describe prompt</span> <div id="sentence" class="">sentence</div> </div>'),
                    model: new L,
                    childViewEvents: {
                        "change:word": "changeSentence",
                        submit: "changeSentence"
                    },
                    regions: {
                        prompt: "#prompt",
                        sentence: "#sentence"
                    },
                    initialize() {
                        this.promptComponent = new m.y({
                            model: new(d().Model)
                        }), this.sentenceComponent = new V({
                            model: new(d().Model)
                        }), this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.promptComponent.model.set(this.model.get("prompt")), this.sentenceComponent.model.set(N(N({}, this.model.get("sentence")), {}, {
                            entryId: this.model.get("entryId")
                        }))
                    },
                    changeSentence(e) {
                        this.triggerMethod("client:message", e)
                    },
                    onAttach() {
                        this.update(), b.b.vibrate()
                    },
                    onRender() {
                        this.showChildView("prompt", this.promptComponent), this.showChildView("sentence", this.sentenceComponent), this.stickit()
                    }
                });
            var W = n(95946),
                A = n.n(W);

            function G(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, s)
                }
                return n
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(n), !0).forEach((function(t) {
                        U(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function U(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const z = s.v.extend({
                sessionModulePrefix: "blanky-blank",
                getGameLayout(e) {
                    switch (e) {
                        case "EnterSingleText":
                            return this.setLayout(l);
                        case "MakeSentence":
                            return this.setLayout(D);
                        default:
                            return -1
                    }
                },
                parseBlob(e) {
                    switch (e.isAudience && (e.playerInfo = {
                            username: "AUDIENCE"
                        }), e.state) {
                        case "MakeSentence":
                            e.playerInfo && (e.playerInfo.topBarColor = A().playerBarPresenter);
                            break;
                        case "MakeSingleChoice":
                            e.description && (e.prompt = {
                                html: `${e.prompt.html}<br /><span class="description">${e.description.html}</span>`
                            }), Array.isArray(e.choices) && (e.choices = e.choices.map((e => R(R({}, e), {}, {
                                className: `${e.className} ${e.category?e.category:""}`,
                                label: `${e.html}${e.category?` (${e.category})`:""}${e.className&&"easy"===e.className?" - easy":""}`
                            }))));
                            break;
                        default:
                            e.playerInfo && (e.playerInfo.topBarColor = null)
                    }
                    return e
                }
            })
        },
        95946: () => {}
    }
]);
//# sourceMappingURL=sourcemaps/9115.ab69ffb55abe06904abc.js.map