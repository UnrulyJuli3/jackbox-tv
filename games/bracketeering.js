(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/bracketeering"], {
        10335: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                MainView: () => p
            });
            var s = o(10972),
                n = o(24340),
                a = o(19755),
                i = o.n(a),
                c = o(13469),
                l = o.n(c),
                r = o(86455),
                h = o.n(r),
                d = o(97079);
            const m = d.E.extend({
                    template: l().template('<div id="controller" class="state-controller controller-content"> <div id="prompt" class="prompt text col-xs-12"></div> <div id="chosen" class="chosen col-xs-12"></div> <div class="error text-danger"></div> <div id="choicesRegion"></div> <div id="instructions" class="text"></div> <div class="makeSingleChoiceDone"> <span class="doneText"></span> </div> </div>'),
                    bindings: l().extend({}, d.E.prototype.bindings, {
                        ".chosen": {},
                        "#instructions": {
                            observe: "text",
                            updateMethod: "html",
                            onGet: e => e ? e.split("<BR>").length > 1 ? e.split("<BR>")[1] : null : ""
                        }
                    }),
                    events: {
                        "click .choices button": "buttonClick"
                    },
                    onChildviewChildviewButtonChoose() {},
                    onChildviewChildviewButtonCensor() {},
                    onChildviewChildviewButtonSubmit() {},
                    update() {
                        const e = `${this.model.get("text")}`.split("<BR>");
                        this.promptComponent.model.set("html", e[0]), this.promptComponent.model.set("className", "");
                        let t = this.choicesList.collection.models.length !== this.model.get("choices").length;
                        t || l().each(this.choicesList.collection.models, ((e, o) => {
                            t = t || e.get("html") !== this.model.get("choices")[o].html
                        })), t && this.choicesList.collection.set(this.model.get("choices"))
                    },
                    buttonClick(e) {
                        const t = this,
                            o = i()(e.currentTarget),
                            s = o.data("index");
                        let n = o.data("action");
                        return i()("button").removeClass("active"), o.addClass("active"), n || (n = "choose"), this.model.get("isPlayer") ? "censor" === n ? (i()("button").removeClass("active"), h().close(), h().fire({
                            title: `Censor ${this.model.get("choices")[s].text}?`,
                            text: "you can't undo it later",
                            background: "#2524c8",
                            showCancelButton: !0,
                            customClass: {
                                popup: "censor-dialog text",
                                confirmButton: "button",
                                cancelButton: "button"
                            },
                            confirmButtonColor: "#000000",
                            cancelButtonColor: "#ff00ff",
                            confirmButtonText: "YES, CENSOR IT!",
                            cancelButtonText: "CANCEL"
                        }).then((e => {
                            e.value && t.triggerMethod("client:message", {
                                action: n,
                                choice: s
                            })
                        }))) : this.triggerMethod("client:message", {
                            action: n,
                            choice: s
                        }) : this.model.get("isAudience") && (this.triggerMethod("client:message", {
                            type: "vote",
                            vote: s
                        }), this.promptComponent.model.set("html", `Thank you. Your choice: <span>${this.model.get("choices")[s].html}</span>`), this.choicesList.collection.reset()), !1
                    }
                }),
                p = n.v.extend({
                    sessionModulePrefix: "Bracketeering",
                    className: "bracketeering",
                    getGameLayout(e) {
                        switch (e) {
                            case "MakeSingleChoice":
                                return this.setLayout(m);
                            default:
                                return -1
                        }
                    },
                    parseBlob: e => (e.playerInfo = e.playerInfo || {}, e.playerInfo.username = e.playerName || "Audience", e.playerInfo.avatar && (e.playerInfo.avatar = e.playerInfo.avatar.frame), "Gameplay" === e.state && (e.state = "Logo"), "Lobby" === e.state && (s.app.client.isRole("player") || (e.state = "Logo"), e.playerIsVIP = e.isAllowedToStartGame, e.playerCanStartGame = e.isAllowedToStartGame, e.playerCanCensor = e.canCensor, e.gameCanStart = -1 !== ["CanStart", "Countdown", "PostGame"].indexOf(e.lobbyState), e.gameIsStarting = "Countdown" === e.lobbyState, e.gameFinished = "PostGame" === e.lobbyState), "EnterSingleText" === e.state && (e.prompt = {
                        html: e.text
                    }, e.doneText = {
                        html: "Thanks"
                    }, e.error = {
                        html: e.error
                    }), "MakeSingleChoice" === e.state && (e.choices = e.choices.map((t => ({
                        html: t.text,
                        censorable: e.canCensor
                    })))), e.censorablePlayers && delete e.censorablePlayers, e),
                    formatSessionMessage: e => ("start" === e.action && (e.start = !0), "cancel" === e.action && (e.cancel = !0), "PostGame_Continue" === e.action && (e.start = !0, e.decision = "PostGame_Continue"), "PostGame_NewGame" === e.action && (e.start = !0, e.decision = "PostGame_NewGame"), e)
                })
        }
    }
]);
//# sourceMappingURL=sourcemaps/2639.65bd8bdebe0eb5e1276e.js.map