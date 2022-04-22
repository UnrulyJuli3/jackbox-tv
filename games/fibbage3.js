(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/fibbage3"], {
        76516: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                MainView: () => N
            });
            var s = o(24340),
                i = o(89446),
                n = o(10972),
                a = o(19755),
                r = o.n(a),
                l = o(72316),
                c = o.n(l),
                u = o(97079),
                d = o(40543),
                h = (o(70989), o(13469)),
                m = o.n(h),
                p = o(63574);
            const b = o.n(p)().View.extend({
                    className: "censorMenu",
                    model: new(c().Model)({}),
                    template: m().template('<div>Are you sure you want to censor the answer <span class="censorMenuTitle">title</span></div> <div class="btn-toolbar choices"> <div class="button-group btn-group btn-block"> <button type="button" style="" class="button btn btn-lg censorRound">CENSOR THIS ENTRY</button> </div> <div class="button-group btn-group btn-block"> <button type="button" style="" class="button btn btn-lg censorGame">CENSOR THIS PLAYER</button> </div> <div class="button-group btn-group btn-block"> <button type="button" style="" class="button btn btn-lg cancel">CANCEL</button> </div> </div>'),
                    bindings: {
                        ".censorMenuTitle": {
                            observe: "title",
                            onGet: e => e ? e.text : null
                        }
                    },
                    events: {
                        "click .censorRound": "censorRound",
                        "click .censorGame": "censorGame",
                        "click .cancel": "cancel"
                    },
                    initialize() {
                        this.render()
                    },
                    onRender() {
                        this.stickit()
                    },
                    censorRound() {
                        this.trigger("censor:round", this.model)
                    },
                    censorGame() {
                        this.trigger("censor:game", this.model)
                    },
                    cancel() {
                        this.trigger("censor:cancel")
                    }
                }),
                g = u.E.extend({
                    className() {
                        const e = ["ChooseLie", "scrollable"];
                        return void 0 !== this.model.get("type") && e.push(this.model.get("type")), void 0 !== this.model.get("round") && e.push(this.model.get("round")), e.join(" ")
                    },
                    events: {
                        "click .choices button": "buttonClick"
                    },
                    onChildviewChildviewButtonChoose() {},
                    onChildviewChildviewButtonCensor() {},
                    onChildviewChildviewButtonSubmit() {},
                    buttonClick(e) {
                        const t = r()(e.currentTarget),
                            o = t.data("index"),
                            s = t.data("action");
                        return this.model.get("isPlayer") ? "censor" === s ? d.b.show("custom", {
                            html: "player",
                            customClass: {
                                popup: "fibbage3 censorMenu"
                            },
                            background: "#fcffd4",
                            showConfirmButton: !1,
                            didOpen: () => {
                                const e = new b({
                                    el: ".fibbage3.censorMenu",
                                    model: new(c().Model)({
                                        title: this.model.get("choices")[o],
                                        choice: o
                                    })
                                });
                                this.listenTo(e, "censor:round", this.censorRound), this.listenTo(e, "censor:game", this.censorGame), this.listenTo(e, "censor:cancel", d.b.close)
                            }
                        }) : this.triggerMethod("client:message", {
                            action: s,
                            choice: this.model.get("choices")[o]
                        }) : this.model.get("isAudience") && (this.triggerMethod("client:countGroup", {
                            name: this.model.get("countGroupName"),
                            vote: this.model.get("choices")[o].text
                        }), this.model.setUpdate({
                            prompt: {
                                text: `Thank you. Your choice: ${this.model.get("choices")[o].text}`,
                                html: null
                            },
                            choices: []
                        })), !1
                    },
                    censorRound(e) {
                        this.triggerMethod("client:message", {
                            action: "censorRound",
                            choice: this.model.get("choices")[e.attributes.choice]
                        }), d.b.close()
                    },
                    censorGame(e) {
                        this.triggerMethod("client:message", {
                            action: "censorGame",
                            choice: this.model.get("choices")[e.attributes.choice]
                        }), d.b.close()
                    },
                    censorCancel() {
                        d.b.close()
                    }
                }),
                y = g.extend({
                    sessionName: "Fibbage3 Like",
                    className: "ChooseLike scrollable"
                });
            var v = o(34813);
            const C = v.s.extend({
                    update() {
                        this.model.attributes.imageClass = "logo-image"
                    }
                }),
                x = v.s.extend({
                    update() {
                        this.model.attributes.imageClass = "logo-image"
                    }
                });
            var f = o(37231),
                k = o(9659),
                w = o(3682);
            const S = o(19690).E.extend({
                    template: m().template('<form> <div class="form-group makeEntry"> <div class="inputGroup"> <div class="error text-danger"></div> <div class="enterText"> <textarea id="enter-text-textarea" rows="1" class="form-control" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea> <div class="doubleInput"> <div class="delimiter"> DELIM </div> <textarea id="enter-text-textarea-2" rows="1" class="form-control" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea> </div> <span class="inlineSubmit"> <div class="col-xs-6"> <button type="button" class="btn btn-block lieForMe" type="button">Lie For Me</button> </div> <div class="col-xs-6"> <button type="submit" class="btn btn-block submitButton" type="button">Send</button> </div> </span> </div> </div> </div> <div class="entryDone"> Thank you! Your entry: <span class="entryText">entryText</span> </div> </form>'),
                    bindings: {
                        ".makeEntry": {
                            observe: "entry",
                            visible: e => !(e && e.length > 0)
                        },
                        ".entryDone": {
                            observe: "entry",
                            visible: !0
                        },
                        ".entryText": "entry",
                        ".prompt": {
                            observe: "question",
                            updateMethod: "html"
                        },
                        ".delimiter": "answerDelim",
                        ".doubleInput": {
                            observe: "doubleInput",
                            visible: !0
                        },
                        ".lieForMe": {
                            observe: "canUseSuggestions",
                            visible: !0
                        },
                        ".pickSuggestion": {
                            observe: "usedSuggestion",
                            visible: !0
                        },
                        ".error": "error",
                        ".enterText": {
                            observe: "usedSuggestion",
                            visible: e => !e,
                            attributes: [{
                                name: "class",
                                observe: "showError",
                                onGet: e => e ? "has-error" : ""
                            }]
                        },
                        textarea: {
                            attributes: [{
                                name: "data-name",
                                observe: "name"
                            }, {
                                name: "maxlength",
                                observe: "maxLength"
                            }, {
                                name: "placeholder",
                                observe: "placeholder"
                            }, {
                                name: "autocapitalize",
                                observe: "autocapitalize"
                            }, {
                                name: "class",
                                observe: "className",
                                onGet: e => `form-control ${void 0!==e?e:""}`
                            }]
                        }
                    },
                    events: {
                        "keypress textarea": "handleKeypress"
                    },
                    render() {
                        this.$el.html(this.template()), this.stickit(), (0, w.Z)(this.el.querySelectorAll("textarea"))
                    },
                    submitForm(e) {
                        return this.trigger("input:submit", e), !1
                    },
                    lieForMe() {
                        return this.trigger("button:lieforme", this.model), !1
                    },
                    handleKeypress(e) {
                        return 13 !== e.keyCode || (this.trigger("input:submit", this), !1)
                    },
                    getValue() {
                        const e = r()(this.$el).find("textarea"),
                            t = this.sanitize(e[0].value),
                            o = this.sanitize(e[1].value);
                        let s = "";
                        return s = this.model.get("doubleInput") ? [t, o] : t, s
                    }
                }),
                L = k.S.extend({
                    defaults: m().extend({}, f.G.prototype.model.defaults, {
                        doubleInput: !1,
                        requireLie: !1,
                        actions: []
                    })
                }),
                G = f.G.extend({
                    className: "EnterText scrollable",
                    model: new L,
                    events: {
                        "submit form": "onChildviewInputSubmit",
                        "input textarea": "validateInput",
                        "click .submitButton": "onChildviewInputSubmit",
                        "click .lieForMe": "lieForMe"
                    },
                    initialize(e) {
                        f.G.prototype.initialize.apply(this, [e]), this.inputComponent = new S({
                            model: new(c().Model)
                        }), this.listenTo(this.inputComponent, "button:lieforme", this.lieForMe), this.listenTo(this.buttonsComponent, "childview:button:choose", this.chooseLie), this.update()
                    },
                    onBeforeDestroy() {
                        this.shouldSubmit && this.onChildviewInputSubmit()
                    },
                    update() {
                        f.G.prototype.update.apply(this), !0 === this.model.get("requireLie") && this.inputComponent.model.set("answerDelim", "Write one LIE about yourself."), this.inputComponent.model.set("doubleInput", this.model.get("requireLie") || this.model.get("doubleInput")), this.inputComponent.model.set("canUseSuggestions", this.model.get("canUseSuggestions")), this.inputComponent.model.set("usedSuggestion", this.model.get("usedSuggestion")), this.inputComponent.model.set("question", this.model.get("question")), this.model.get("entry") && this.model.get("entry").length > 0 ? this.buttonsCollection.reset() : this.model.get("suggestions") && this.buttonsCollection.set(this.model.get("suggestions").map((e => ({
                            block: !0,
                            text: e
                        }))))
                    },
                    lieForMe() {
                        this.triggerMethod("client:message", {
                            lieForMe: !0
                        })
                    },
                    chooseLie(e) {
                        this.triggerMethod("client:message", {
                            entry: e.attributes.text
                        }), this.model.get("isAudience") && (this.inputComponent.model.set("entry", e.attributes.text), this.buttonsCollection.reset())
                    },
                    onChildviewInputSubmit() {
                        let e = this.inputComponent.getValue();
                        const t = {};
                        if (this.inputComponent.model.set("error", ""), "object" == typeof e) {
                            if (e[0] = e[0].replace(/\s\s+/g, " ").trim(), e[1] = e[1].replace(/\s\s+/g, " ").trim(), t.inputs = e, "" === e[0] || "" === e[1]) return this.inputComponent.model.set("error", "You must write two things."), !1
                        } else if (e = e.replace(/\s\s+/g, " ").trim(), t.entry = e, 0 === t.entry.length) return this.inputComponent.model.set("error", "You must write something."), !1;
                        return this.triggerMethod("client:message", t), !1
                    }
                });
            var M = o(52650);
            const T = M.W.extend({
                    bindings: Object.assign(M.W.prototype.bindings, {
                        "#artifactLink": {
                            attributes: [{
                                name: "style",
                                observe: "artifact",
                                onGet: () => "display: none;"
                            }]
                        }
                    }),
                    update() {
                        M.W.prototype.update.apply(this, []), this.model.get("playerCanStartGame") || "TMI" !== this.model.get("type") || this.titleComponent.model.set("text", "TIP: This game is better when you use your real name!")
                    }
                }),
                I = v.s.extend({
                    bindings: Object.assign(v.s.prototype.bindings, {
                        "#playername": {
                            observe: "customerBlob",
                            onGet(e) {
                                let t = "audience";
                                return e ? (e.displayName ? t = e.displayName : e.name && (t = e.name), t.toUpperCase()) : "audience"
                            }
                        },
                        "#playericon": {
                            attributes: [{
                                name: "class",
                                observe: "customerBlob",
                                onGet: e => e && e.playerAvatar ? e.playerAvatar : "none"
                            }]
                        }
                    }),
                    update() {
                        this.model.attributes.imageClass = "logo-image"
                    }
                }),
                N = s.v.extend({
                    sessionModulePrefix: "Fibbage3",
                    getGameLayout(e) {
                        switch (e) {
                            case "ChooseLie":
                                return this.setLayout(g);
                            case "ChooseLike":
                                return this.setLayout(y);
                            case "EndShortie":
                                return this.setLayout(C);
                            case "EndGame":
                                return this.setLayout(x);
                            case "EnterText":
                            case "EnterTruth":
                                return this.setLayout(G);
                            case "Lobby":
                                return this.setLayout(T);
                            case "Logo":
                                return this.setLayout(I);
                            default:
                                return -1
                        }
                    },
                    parseBlob: e => (e.playerInfo = {
                        username: e.displayName || e.playerName,
                        avatar: e.playerAvatar
                    }, "EndShortie" === e.state && (e.state = "Logo"), "Lobby" === e.state && (n.app.client.isRole("player") || (e.state = "Logo"), e.playerInfo = e.playerInfo || {}, e.playerInfo.username = e.displayName || e.playerName || "audience", e.playerInfo.username = e.playerInfo.username.toUpperCase(), e.playerIsVIP = e.isAllowedToStartGame, e.playerCanStartGame = e.isAllowedToStartGame, e.playerCanCensor = e.canCensor, e.gameCanStart = -1 !== ["CanStart", "Countdown", "PostGame"].indexOf(e.lobbyState), e.gameIsStarting = "Countdown" === e.lobbyState, e.gameFinished = "PostGame" === e.lobbyState, "TMI" === e.type && n.app.client.isRole("player") && !e.artifact && (e.canChangeName = !0)), "Logo" === e.state && (e.classes = [e.type], e.actions = []), -1 !== ["EnterText", "EnterTruth"].indexOf(e.state) && (e.prompt = {
                        html: e.question
                    }, n.app.client.isRole("audience") && (e.state = "ChooseLie", e.choices = e.suggestions.map((e => ({
                        key: e,
                        text: e
                    }))), e.canUseSuggestions = !0, e.usedSuggestion = !0)), -1 !== ["ChooseLie", "ChooseLike"].indexOf(e.state) && (e.options = [{
                        className: e.state
                    }], e.prompt = {
                        html: e.question
                    }, "ChooseLike" === e.state && (e.chosen = null), e.choices = e.choices.map(((t, o) => {
                        const s = "string" == typeof t ? t : t.text,
                            n = i.c.htmlUnescape(s),
                            a = "object" == typeof t && t.disabled;
                        let r = "choose",
                            l = "";
                        return "ChooseLike" === e.state && (r = e.likes && -1 !== e.likes.indexOf(s) ? "unlike" : "like", l = e.likes && -1 !== e.likes.indexOf(s) ? "liked" : ""), {
                            text: n,
                            order: o,
                            action: r,
                            censorable: e.canCensor,
                            disabled: a,
                            className: l
                        }
                    }))), "CategorySelection" === e.state && (e.state = "MakeSingleChoice", e.classes = ["CategorySelection"], e.prompt = e.isChoosing ? {
                        text: "Pick a Category"
                    } : {
                        text: `${e.choosingPlayerName} is picking a category`
                    }, e.choices = e.choices && e.isChoosing ? e.choices.map(((e, t) => ({
                        text: e,
                        order: t,
                        action: "choose"
                    }))) : []), e.artifact && delete e.artifact, e.censorablePlayers && delete e.censorablePlayers, e),
                    formatSessionMessage: e => ("start" === e.action && (e.start = !0), "cancel" === e.action && (e.cancel = !0), "PostGame_Continue" === e.action && (e.start = !0, e.decision = "PostGame_Continue"), "PostGame_NewGame" === e.action && (e.start = !0, e.decision = "PostGame_NewGame"), "choose" === e.action && "object" == typeof e.choice && (e.choice.text = i.c.htmlEscape(e.choice.text)), "like" !== e.action && "unlike" !== e.action || (e.choice.text = i.c.htmlEscape(e.choice.text)), e)
                })
        }
    }
]);
//# sourceMappingURL=sourcemaps/5157.ba169dde0364583813f7.js.map