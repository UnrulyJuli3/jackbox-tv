(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/jokeboat"], {
        50946: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                MainView: () => v
            });
            var n = s(19755),
                o = s.n(n),
                i = s(24340),
                a = s(13469),
                c = s.n(a),
                r = s(97079),
                p = s(29014),
                h = s(49273);
            const l = h.r.extend({
                    template: c().template('\n        <button type="button" class="button choice-button btn btn-lg"></button>\n        <span class="text help"></span>\n        <button data-action="censor" class="button censor-button btn btn-lg"></button>\n    '),
                    bindings: Object.assign(h.r.prototype.bindings, {
                        ".help": {
                            observe: "help",
                            updateMethod: "html",
                            onGet: e => (e && "." === e[e.length - 1] && (e = e.slice(0, -1)), e)
                        }
                    })
                }),
                d = r.E.extend({
                    initialize(e) {
                        this.choicesList = new p.C({
                            childView: l
                        }), r.E.prototype.initialize.apply(this, [e])
                    }
                });
            var u = s(37231);
            const b = u.G.extend({
                onRender() {
                    u.G.prototype.onRender.apply(this), this.$el.hasClass("topics") && this.$(".inputGroup").append('<div class="topics-info"> <div class="arrow"></div> <p>When another comedian uses your topic for a great joke, you get <em>POINTS</em>!</p> </div>'), this.$(".action-jokeForMe").parent().append('<div class="joke-info"> <div class="arrow"></div> <p>For <em>HALF</em> the points</p> </div>')
                },
                onChildviewChildviewButtonJokeForMe() {
                    return this.triggerMethod("client:message", {
                        action: "jokeForMe"
                    }), !1
                }
            });
            var g = s(34813);
            const m = g.s.extend({
                    bindings: Object.assign(g.s.prototype.bindings, {
                        ".logo-image": {
                            observe: "message",
                            visible: e => !e || !e.html || !e.html.includes('class="lookup"')
                        }
                    })
                }),
                v = i.v.extend({
                    sessionModulePrefix: "Jokeboat",
                    isFinalRound: !1,
                    onAttach() {
                        i.v.prototype.onAttach.apply(this);
                        const e = this.model.get("blob");
                        this.detectCatchphrase(e), this.detectFinalRound(e)
                    },
                    getGameLayout(e) {
                        switch (e) {
                            case "MakeSingleChoice":
                                return this.setLayout(d);
                            case "EnterSingleText":
                                return this.setLayout(b);
                            case "Logo":
                                return this.setLayout(m);
                            default:
                                return -1
                        }
                    },
                    parseBlob(e) {
                        return e.playerInfo = e.playerInfo || {}, e.playerInfo.classes = e.playerInfo.classes || [], e.isAudience && (e.playerInfo.username = "AUDIENCE"), this.detectCatchphrase(e), this.detectFinalRound(e), "MakeSingleChoice" === e.state && e.announcePrompt && (e.textDescriptions = e.textDescriptions || [], e.textDescriptions.push({
                            id: e.choiceId,
                            category: "Prompt",
                            text: e.prompt.html
                        })), e
                    },
                    detectCatchphrase(e) {
                        "ChooseCatchphrase" === e.choiceId ? o()(".pt-page").addClass("catchphrase") : o()(".pt-page").removeClass("catchphrase")
                    },
                    detectFinalRound(e) {
                        e.classes && (-1 !== e.classes.indexOf("round-3") && (this.isFinalRound = !0), -1 !== e.classes.indexOf("round-4") && (this.isFinalRound = !0)), "ChooseCatchphrase" === e.choiceId && (this.isFinalRound = !1), "ChoosePunchUpJoke" === e.choiceId && (this.isFinalRound = !0), "PunchedUpLine" === e.entryId && (this.isFinalRound = !0), this.isFinalRound ? o()(".pt-page").addClass("final-round") : o()(".pt-page").removeClass("final-round")
                    }
                })
        }
    }
]);
//# sourceMappingURL=sourcemaps/5988.8bcc28dd94ea011fcf73.js.map