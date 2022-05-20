(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/quiplash3"], {
        99499: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                MainView: () => $
            });
            var n = i(24340),
                o = i(13469),
                s = i.n(o),
                a = i(10972),
                l = i(72316),
                r = i.n(l),
                c = i(37231),
                u = i(9659),
                d = i(19690),
                p = i(48598);
            const h = '<form> <div class="form-group"> <div class="charCountDisplay"><span class="charCount">0/45</span></div> <div class="inputGroup"> <textarea id="input-text-textarea" rows="1" class="form-control jbg-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea> <span class="inlineSubmit"> <button type="submit" class="btn btn-default inlineSubmitButton" type="button"><span class="inlineSubmitText">Send</span></button> </span> <span id="helpBlock2" class="help-block errorText"></span> </div> </div> </form>',
                g = d.E.extend({
                    template: s().template(h),
                    bindings: s().extend({}, d.E.prototype.bindings, {
                        textarea: {
                            attributes: [{
                                name: "placeholder",
                                observe: "placeholder"
                            }, {
                                name: "autocapitalize",
                                observe: "autocapitalize"
                            }, {
                                name: "class",
                                observe: "className",
                                onGet: t => `form-control ${void 0!==t?t:""}`
                            }]
                        },
                        ".charCount": {
                            observe: "length",
                            onGet(t) {
                                return `${t}/${this.model.get("maxLength")}`
                            }
                        }
                    }),
                    initialize(t) {
                        this.model.set("length", 0), d.E.prototype.initialize.apply(this, t)
                    },
                    onInputChange() {
                        const t = this.$("textarea").first();
                        if (!t.length) return;
                        const e = (0, p.I)(t.val(), this.model.get("maxLength"));
                        this.model.set("length", e.charCount), t.val(e.result)
                    },
                    getSanitizedValue() {
                        return this.sanitize(this.getValue())
                    },
                    sanitize(t) {
                        return this.sanitizeInput(t)
                    },
                    sanitizeInput(t) {
                        return (0, p.I)(t, this.model.get("maxLength")).result
                    }
                }),
                b = u.S.extend({
                    defaults: {
                        state: "EnterSingleText",
                        actions: [{
                            text: "submit",
                            action: "submit"
                        }],
                        allowEmpty: !1,
                        autoSubmit: !1,
                        classes: [],
                        doneText: "",
                        entryId: void 0,
                        entry: null,
                        live: !1,
                        maxLength: 500,
                        placeholder: "",
                        autocapitalize: "characters",
                        className: "",
                        inlineSubmit: !1,
                        inlineSubmitText: "Submit",
                        error: "",
                        strings: {
                            ERROR_NOTHING_ENTERED: "You need to enter something!"
                        }
                    }
                }),
                m = c.G.extend({
                    model: new b,
                    initialize(t) {
                        this.inputComponent = this.inputComponent || new g({
                            model: new(r().Model)({})
                        }), c.G.prototype.initialize.apply(this, [t])
                    },
                    onChildviewInputSubmit() {
                        const t = this.inputComponent.getSanitizedValue();
                        if (this.model.setUpdate({
                                error: null
                            }), !this.model.get("autoSubmit") && 0 === t.length && !this.model.get("allowEmpty")) return this.model.setUpdate({
                            error: this.model.get("strings").ERROR_NOTHING_ENTERED
                        }), !1;
                        const e = {
                                action: "write",
                                entry: t || " "
                            },
                            i = this.model.get("textKey");
                        return i && (e.textKey = i, e.val = t || ""), this.triggerMethod("client:message", e), this.model.setUpdate({
                            autoSubmit: !1
                        }), this.model.get("isAudience") ? this.model.get("repeating") ? this.inputComponent.clearInput() : (this.audienceEntry = t, this.entryId = this.model.get("entryId") || 0, this.model.setUpdate({
                            entry: this.audienceEntry,
                            shotId: this.entryId
                        })) : this.model.get("repeating") || this.$el.find(".enterSingleTextFieldset").prop("disabled", !0), !1
                    },
                    update() {
                        this.$el.ready((() => this.$el.find("textarea").focus())), c.G.prototype.update.apply(this, []);
                        const t = [];
                        this.model.get("entry") || this.model.get("actions").forEach((e => {
                            e.label ? t.push({
                                type: "text",
                                text: e.label,
                                className: "choice-prompt"
                            }, e) : (e.action || (e.action = e.key), t.push(e))
                        })), this.buttonsCollection.set(t), this.model.get("autoSubmit") && this.onChildviewInputSubmit()
                    },
                    onChildviewChildviewButtonChoose(t) {
                        const e = this.model.get("textKey"),
                            i = t.get("key");
                        if ("submit" === i) return this.onChildviewInputSubmit(), !1;
                        const n = void 0 !== e && "safetyQuip" === i ? {
                            action: "write",
                            textKey: e,
                            val: "⁇"
                        } : {
                            action: i
                        };
                        return this.triggerMethod("client:message", n), !1
                    }
                });
            var v = i(19755),
                f = i.n(v),
                y = i(40543),
                x = i(29014),
                C = i(49273),
                w = i(63574),
                I = i.n(w),
                S = i(24475);
            i(70989);
            const _ = g.extend({
                    tagName: "div",
                    className: "input",
                    model: new(r().Model)({}),
                    template: s().template(h),
                    onKeypress(t) {
                        return this.model.set("error", ""), 13 !== t.keyCode || (this.model.get("isLastChild") ? this.triggerMethod("input:submit", this.model) : this.triggerMethod("input:focusNext", this.model), !1)
                    }
                }),
                O = r().Model.extend({
                    idAttribute: "key"
                }),
                E = r().Collection.extend({
                    model: O,
                    childViewOptions: (t, e) => ({
                        childIndex: e
                    })
                }),
                L = I().CollectionView.extend({
                    className: "fields",
                    childView: _,
                    collection: new E,
                    onChildviewInputFocusNext(t) {
                        const e = this.collection.indexOf(t),
                            i = this.children.findByIndex(e + 1);
                        f()(i.el).find("textarea").focus()
                    },
                    onChildviewInputSubmit() {
                        this.triggerMethod("input:submit")
                    },
                    clearInputs() {
                        return this.children.forEach((t => t.clearInput()))
                    },
                    getSanitizedValue(t) {
                        return this.children.findByIndex(t).getSanitizedValue()
                    },
                    getSanitizedValues() {
                        return this.children.map((t => t.getSanitizedValue()))
                    },
                    getValue(t) {
                        this.children.findByIndex(t).getValue()
                    },
                    getValues() {
                        return this.children.map((t => t.getValue()))
                    },
                    setValue(t, e) {
                        this.children.findByIndex(t).setValue(e)
                    }
                });

            function T(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function k(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? T(Object(i), !0).forEach((function(e) {
                        V(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : T(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }

            function V(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const z = u.S.extend({
                    defaults: {
                        error: null,
                        entries: null,
                        classes: [],
                        autoSubmit: !1,
                        maxLength: 500,
                        actions: [{
                            text: "submit",
                            action: "submit"
                        }],
                        strings: {
                            ERROR_NOTHING_ENTERED: "You need to enter something!"
                        },
                        autocapitalize: "characters"
                    }
                }),
                j = I().View.extend({
                    className: "EnterTextList scrollable",
                    model: new z,
                    template: s().template('<div id="controller" class="state-controller controller-content"> <form class="enterTextListForm"> <fieldset class="enterTextListFieldset"> <div id="prompt" class="prompt">prompt</div> <div id="inputs-region"></div> <span id="helpBlock2" class="help-block parentErrorText"></span> <div id="buttons">buttons</div> </fieldset> </form> <div class="enterTextListDone"> <span class="doneText"></span> </div> </div>'),
                    hasOpened: !1,
                    regions: {
                        prompt: "#prompt",
                        inputs: "#inputs-region",
                        buttons: "#buttons"
                    },
                    events: {
                        "submit form": "onChildviewInputSubmit",
                        "input textarea": "onInputChange"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: t => t && t.bgColor ? `background-color: ${t.bgColor}` : ""
                            }, {
                                name: "class",
                                observe: "classes",
                                onGet: t => t ? t.join(" ") : ""
                            }]
                        },
                        ".enterTextListForm": {
                            observe: "entries",
                            visible: t => !t
                        },
                        ".enterTextListDone": {
                            observe: "entries",
                            visible: !0
                        },
                        ".doneText": {
                            observe: "doneText",
                            updateMethod: "html",
                            onGet: t => t ? t.html ? t.html : f()("<div />").text(t.text).html() : ""
                        },
                        ".parentErrorText": {
                            observe: "error",
                            updateMethod: "html",
                            onGet: t => t ? "object" == typeof t ? t.html ? t.html : f()("<div />").text(t.text).html() : t : null
                        }
                    },
                    initialize() {
                        this.shouldSubmit = !1, this.promptComponent = new S.y({
                            model: new(r().Model)({
                                text: "",
                                className: ""
                            })
                        }), this.inputsComponent = new L, this.buttonsCollection = new(r().Collection)([{
                            text: "submit"
                        }]), this.buttonsComponent = new x.C({
                            childView: C.r,
                            block: !0,
                            collection: this.buttonsCollection
                        }), this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.promptComponent.model.set(this.model.get("prompt")), this.buttonsComponent.options.block = this.model.get("block");
                        const t = [];
                        if (this.model.get("actions").forEach((e => {
                                e.action || (e.action = e.key), t.push(e)
                            })), this.buttonsCollection.set(t), this.inputsComponent.collection.length !== this.model.get("fieldCount")) {
                            const t = [];
                            for (let e = this.model.get("fieldCount"); e > 0; e--) t.push(k(k({}, this.model.attributes), {}, {
                                counter: !0,
                                hideError: !0,
                                isLastChild: 1 === e
                            }));
                            this.inputsComponent.collection.set(t)
                        }
                        this.model.get("autoSubmit") && this.onChildviewInputSubmit()
                    },
                    onRender() {
                        this.showChildView("prompt", this.promptComponent), this.showChildView("inputs", this.inputsComponent), this.showChildView("buttons", this.buttonsComponent), this.stickit()
                    },
                    onAttach() {
                        this.update(), y.b.vibrate()
                    },
                    onBeforeDestroy() {
                        this.model.get("autoSubmit") && this.onChildviewInputSubmit()
                    },
                    onInputChange() {
                        this.model.setUpdate({
                            error: null
                        })
                    },
                    onChildviewInputSubmit() {
                        const t = this.inputsComponent.getSanitizedValues();
                        if (!this.model.get("autoSubmit") && t.every((t => "" === t))) return this.model.setUpdate({
                            error: this.model.get("strings").ERROR_NOTHING_ENTERED
                        }), !1;
                        this.model.setUpdate({
                            autoSubmit: !1,
                            error: null
                        }), this.$el.find(".enterTextListFieldset").prop("disabled", !0);
                        const e = {
                                action: "write",
                                entries: t
                            },
                            i = this.model.get("textKey");
                        return i ? (e.textKey = i, e.val = t.join("\n"), this.triggerMethod("client:message", e)) : a.app.client.send("SendMessageToRoomOwner", e), this.$el.find(".enterTextListFieldset").prop("disabled", !1), !1
                    },
                    onChildviewChildviewButtonChoose() {
                        return this.onChildviewInputSubmit(), !1
                    }
                }),
                P = i(52650).W.extend({
                    template: s().template('<div id="controller" class="state-controller controller-content"> <div class="characterSelect"> <div id="charactersPrompt" class="charactersPrompt"> <span id="charactersPromptText" class="charactersPromptText"></span> </div> <div id="characters" class="charactersContainer"></div> </div> <div id="vipMenu" class="vipMenu"> <div id="title" class="lobbyTitle">title</div> <div id="choices" class="choicesContainer">choices</div> </div> <div id="artifactId" class="artifactContainer text"> <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank"> <button id="artifactButton" class="artifactButton"></button> </a> </div> </div>')
                });
            var R = i(17756),
                G = i(89446);
            const N = d.E.extend({
                    template: s().template(h),
                    bindings: s().extend({}, d.E.prototype.bindings, {
                        ".charCount": {
                            observe: "remaining",
                            onGet(t) {
                                const e = this.model.get("maxLength");
                                return `${e-t}/${e}`
                            }
                        }
                    }),
                    initialize(t) {
                        this.model.set("length", 0), d.E.prototype.initialize.apply(this, t)
                    },
                    getSanitizedValue() {
                        return this.sanitize(this.getValue())
                    },
                    sanitize(t) {
                        const e = this.sanitizeInput(t);
                        return G.c.htmlEscape(e).trim()
                    },
                    sanitizeInput: t => t.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF\u2019\u201A\u201C\u201D]/gi, "")
                }),
                D = u.S.extend({
                    defaults: {
                        toggled: !1,
                        leftLabel: "Regular Prompt",
                        rightLabel: "Thriplash Prompt"
                    }
                }),
                M = I().View.extend({
                    tagName: "div",
                    className: "ToggleView",
                    model: new D,
                    template: s().template('<div id="toggleGroup"> <div id="left-label" class="label">Left label</div> <label class="toggle"> <input class="toggleInput" type="checkbox"> <span class="slider"></span> </label> <div id="right-label" class="label">Right label</div> </div>'),
                    events: {
                        "click .toggleInput": "onToggle"
                    },
                    bindings: {
                        "#left-label": {
                            observe: "leftLabel",
                            onGet: t => t
                        },
                        "#right-label": {
                            observe: "rightLabel",
                            onGet: t => t
                        }
                    },
                    onRender() {
                        this.stickit()
                    },
                    onToggle() {
                        const t = this.model.get("toggled");
                        this.model.setUpdate({
                            toggled: !t
                        })
                    },
                    getValue() {
                        return this.model.get("toggled")
                    }
                }),
                A = R.a.extend({
                    template: s().template('<div id="controller" class="state-controller controller-content"> <div class="ugc-action-toggle-visibility"> <span class="text toggle_prompts_prompt">toggle_prompts_prompt</span><br/> <button id="ugc-toggle-visibility-button-controller" class="ugc-toggle-visibility-button ugc-toggle-visibility-button-controller" data-target="controller"></button> <button id="ugc-toggle-visibility-button-screen" class="ugc-toggle-visibility-button ugc-toggle-visibility-button-screen" data-target="screen"></button> </div> <div class="ugc-action-play"> <div class="ugc-episode-name"></div> </div> <div class="ugc-action-new"> <button class="button action-button create_new_episode" type="button" id="ugc-new-button">create_new_episode</button> </div> <div class="ugc-action-load"> <p class="ugc-option text-box ugc-load previous_episodes">previous_episodes</p> <div id="episodesRegion"></div> </div> <div id="prompt" class="prompt ugc-text"></div> <div id="ugc-no-actions"> <div id="ugc-no-actions-text"></div> </div> <div class="ugc-action-add"> <div id="toggleRegion"></div> <div id="inputRegion"></div> </div> <div class="ugc-action-title"> <p class="text-box"> <span class="text create_new_name_prompt">create_new_name_prompt</span> </p> <div id="titleInputRegion"></div> </div> <div class="ugc-action-close"> <button class="button action-button button_close" data-action="close">button_close</button> </div> <div class="ugc-action-unlock"> <button class="button action-button button_edit" data-action="unlock">button_edit</button> </div> <div class="ugc-action-done"> <button class="button action-button button_done" data-action="done">button_done</button> </div> <div class="ugc-action-submit"> <button class="button action-button button_publish" data-action="submit">button_publish</button> </div> <div class="ugc-action-play"> <button class="button action-button button_play" data-action="play">button_play</button> </div> <div class="ugc-action-remove-content"> <button class="button action-button button_delete" data-action="remove-content">button_delete</button> </div> <div class="ugc-action-exit"> <button class="button action-button button_back_to_menu" data-action="exit">button_back_to_menu</button> </div> <div class="ugc-action-episodes"> <button class="button action-button button_back_to_episodes" data-action="episodes">button_back_to_episodes</button> </div> <div class="ugc-action-remove"> <div id="promptsCount" class="promptsCount"></div> <div id="promptsRegion"></div> </div> </div>'),
                    regions: s().extend({}, R.a.prototype.regions, {
                        toggle: "#toggleRegion"
                    }),
                    initialize() {
                        this.inputComponent = this.inputComponent || new N({
                            model: new(r().Model)({
                                inlineSubmit: !0,
                                inlineSubmitText: "",
                                className: "addPrompt",
                                counter: !0
                            })
                        }), this.titleInputComponent = this.titleInputComponent || new N({
                            model: new(r().Model)({
                                inlineSubmit: !0,
                                counter: !0
                            })
                        }), this.toggleComponent = this.toggleComponent || new M, R.a.prototype.initialize.apply(this)
                    },
                    onRender() {
                        R.a.prototype.onRender.apply(this), this.showChildView("toggle", this.toggleComponent)
                    },
                    update() {
                        R.a.prototype.update.apply(this), this.toggleComponent.model.setUpdate(this.model.get("toggle"))
                    },
                    onChildviewInputSubmit() {
                        let t, e;
                        if (-1 !== this.model.get("validActions").indexOf("add") ? (t = "add", e = this.inputComponent.getSanitizedValue(), this.inputComponent.clearInput()) : -1 !== this.model.get("validActions").indexOf("title") && (t = "title", e = this.titleInputComponent.getSanitizedValue(), this.titleInputComponent.clearInput()), !t || !e) return;
                        const i = {
                            action: t,
                            text: e
                        };
                        "add" === t && this.toggleComponent.getValue() && (i.type = "thriplash"), this.triggerMethod("client:message", i)
                    }
                });

            function B(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function F(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? B(Object(i), !0).forEach((function(e) {
                        U(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : B(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }

            function U(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const $ = n.v.extend({
                sessionModulePrefix: "quiplash3",
                getGameLayout(t) {
                    switch (t) {
                        case "EnterSingleText":
                            return this.setLayout(m);
                        case "EnterTextList":
                            return this.setLayout(j);
                        case "Lobby":
                            return this.setLayout(P);
                        case "UGC":
                            return this.setLayout(A);
                        default:
                            return -1
                    }
                },
                bindings: F(F({}, n.v.prototype.bindings), {}, {
                    "#controller-container": {
                        attributes: [{
                            name: "class",
                            observe: "player",
                            onGet: t => t && t.playerInfo && t.playerInfo.avatar ? "Logo" === t.state ? t.classes ? `Logo ${t.classes.join(" ")}` : "Logo" : t.playerInfo.avatar : ""
                        }, {
                            name: "class",
                            observe: ["room", "blob", "audiencePlayer"],
                            onGet(t) {
                                let [e, i, n] = t;
                                if (!e || !i) return "";
                                if (a.app.client.isRole("audience")) {
                                    if (!e.audience || !e.audience.state || !n) return "";
                                    const t = n.audience.classes;
                                    return "Logo" === e.audience.state && "MakeSingleChoice" !== n.audience.state ? `${t} Audience Logo` : `Audience ${t}`
                                }
                                return "UGC" === i.state ? "UGCView" : ""
                            }
                        }]
                    }
                }),
                parseBlob(t) {
                    if (t.classes = t.classes || [], t.playerInfo = t.playerInfo || {}, t.playerInfo.classes = t.playerInfo.classes || [], "Lobby" !== t.state && "Lobby" === this.prevState) {
                        const t = "Lobby",
                            e = "gameStarted",
                            i = this.hasUGC ? "quiplash3-ugc" : "quiplash3";
                        a.app.analytics.trackEvent({
                            category: t,
                            action: e,
                            label: i
                        })
                    }
                    return "MakeSingleChoice" === t.state && t.choices.forEach((t => {
                        t.html && (t.html = t.html.replace(/<div>/gi, '<span class="thriplash-part">'), t.html = t.html.replace(/<\/div>/gi, '</span><span class="visuallyhidden">,</span>'))
                    })), t.playerInfo.avatar && (t.classes = s().union(t.classes, [t.playerInfo.avatar]), t.playerInfo.classes = s().union(t.playerInfo.classes, [t.playerInfo.avatar])), t.isAudience && (t.playerInfo = {
                        username: "AUDIENCE",
                        classes: ["Audience"]
                    }), "UGC" === t.state && (t.playerInfo.classes = s().union(t.playerInfo.classes, ["UGCView"])), t.textDescriptions && t.textDescriptions.length && (t.textDescriptions = t.textDescriptions.map((t => F(F({}, t), {}, {
                        text: t.text ? t.text.replace(/\\n/, ", ") : null
                    })))), "Lobby" === t.state && t.lobbyState && (this.hasUGC = !!t.activeContentId), this.prevState = t.state, t
                }
            })
        },
        48598: (t, e, i) => {
            "use strict";
            i.d(e, {
                I: () => b
            });
            const n = [169, 174, 8252, 8265, 8482, 8505, 8596, 8597, 8598, 8599, 8600, 8601, 8617, 8618, 9e3, 8986, 8987, 9167, 9193, 9194, 9195, 9196, 9197, 9198, 9199, 9200, 9201, 9202, 9203, 9209, 9210, 9410, 9642, 9643, 9654, 9664, 9723, 9724, 9725, 9726, 9728, 9729, 9730, 9731, 9732, 9742, 9745, 9748, 9749, 9752, 9757, 9760, 9762, 9763, 9766, 9770, 9774, 9775, 9784, 9785, 9786, 9792, 9794, 9800, 9801, 9802, 9803, 9804, 9805, 9806, 9807, 9808, 9809, 9810, 9811, 9824, 9827, 9829, 9830, 9832, 9851, 9854, 9855, 9874, 9875, 9876, 9877, 9878, 9879, 9881, 9883, 9884, 9888, 9823, 9889, 9895, 9898, 9899, 9904, 9905, 9917, 9918, 9924, 9925, 9928, 9934, 9935, 9937, 9939, 9940, 9961, 9962, 9968, 9969, 9970, 9971, 9972, 9973, 9974, 9975, 9976, 9977, 9978, 9981, 9986, 9989, 9992, 9993, 9994, 9995, 9996, 9997, 9999, 10002, 10004, 10006, 10013, 10017, 10024, 10035, 10036, 10052, 10055, 10060, 10062, 10067, 10068, 10069, 10071, 10083, 10084, 10085, 10133, 10134, 10135, 10145, 10160, 10175, 10548, 10549, 11013, 11014, 11015, 11035, 11036, 11088, 11093, 12336, 12349, 12951, 12953, 58634],
                o = [128104, 128105, 129489],
                s = [127995, 127996, 127997, 127998, 127999, 129456, 129457, 129458, 129459],
                a = 65039,
                l = 8205,
                r = (t, e) => {
                    const i = parseInt(t.charCodeAt(0).toString(16), 16),
                        n = parseInt(e.charCodeAt(0).toString(16), 16);
                    return parseInt((1024 * (i - 55296) + n - 56320 + 65536).toString(16), 16)
                },
                c = t => {
                    const e = parseInt(t.charCodeAt(0).toString(16), 16);
                    return n.includes(e)
                },
                u = (t, e) => !!t && parseInt(t.charCodeAt(0).toString(16), 16) === e,
                d = t => /[\uD800-\uDB7F]/.test(t),
                p = t => /[\u0023\u002A\u0030-\u0039]/.test(t),
                h = t => {
                    const e = parseInt(t.toString(16), 16);
                    return e >= 127462 && e <= 127487
                },
                g = (t, e) => {
                    let i = "",
                        n = !0;
                    for (; n && e < t.length;) {
                        const o = t[e];
                        if (d(o)) {
                            const a = r(o, t[e + 1]);
                            s.includes(a) ? (i = i + o + t[e + 1], e += 2) : n = !1
                        } else u(o, l) ? (i = i + o + t[e + 1] + t[e + 2], e += 3) : n = !1
                    }
                    return {
                        modifyingChars: i,
                        newPosition: e
                    }
                },
                b = (t, e) => {
                    if (!/[^\u00A1\u0020-\u0022\u0024-\u0029\u002B-\u002F\u003A-\u007E\u00BF-\u00FF’]/gi.test(t)) return e && t && t.length > e && (t = t.substring(0, e)), {
                        result: t,
                        charCount: t.length
                    };
                    const i = t.split("");
                    let n = 0,
                        b = "";
                    for (let t = 0; t < i.length && (!e || n < e); t += 1) {
                        const e = i[t];
                        if (/[\u00A1\u0020-\u0022\u0024-\u0029\u002B-\u002F\u003A-\u007E\u00BF-\u00FF’]/gi.test(e)) b += e, n += 1;
                        else {
                            if (c(e)) {
                                if (b += e, u(e, 9977)) {
                                    t += 1;
                                    const {
                                        modifyingChars: e,
                                        newPosition: n
                                    } = g(i, t);
                                    b += e, t = n - 1
                                }
                                n += 1;
                                continue
                            }
                            if (u(e, 8220) || u(e, 8221)) {
                                t += 1, b = `${b}"`, n += 1;
                                continue
                            }
                            if (d(e)) {
                                const c = i[t + 1];
                                b = b + e + c, t += 1;
                                const d = r(e, c);
                                if (o.includes(d)) {
                                    const {
                                        modifyingChars: e,
                                        newPosition: o
                                    } = g(i, t + 1);
                                    b += e, n += 1, t = o - 1;
                                    continue
                                }
                                if (h(d)) {
                                    const e = r(i[t + 1], i[t + 2]);
                                    h(e) && (b = b + i[t + 1] + i[t + 2], t += 1), n += 1;
                                    continue
                                }
                                if (127988 === d) {
                                    const e = i[t + 1];
                                    u(e, l) && (b = b + e + i[t + 2] + i[t + 3], t += 3), n += 1;
                                    continue
                                }
                                if (127987 === d) {
                                    const e = i[t + 1];
                                    u(e, a) && (t += 1, u(i[t + 1], l) && (b = b + e + i[t + 1] + i[t + 2] + i[t + 3], t += 3)), n += 1;
                                    continue
                                }
                                s.includes(d) || (n += 1);
                                continue
                            }
                            if (p(e)) {
                                const o = i[t + 1];
                                o && u(o, a) ? (b = b + e + i[t + 1] + i[t + 2], t += 2) : b += e, n += 1;
                                continue
                            }(u(e, a) || u(e, l) || u(e, 8419)) && (b += e)
                        }
                    }
                    return {
                        result: b,
                        charCount: n
                    }
                }
        }
    }
]);
//# sourceMappingURL=sourcemaps/6390.ab49db8f7ddfd23779ef.js.map