(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [5022], {
        50310: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                MainView: () => $
            });
            var i = s(13469),
                n = s.n(i),
                o = (s(70989), s(24340)),
                r = s(47214),
                a = s(19755),
                l = s.n(a),
                h = s(72316),
                c = s.n(h),
                d = s(63574),
                p = s.n(d),
                u = s(10972),
                g = s(40543),
                m = s(9659),
                v = s(65243),
                b = s(24475);
            const f = m.S.extend({
                    defaults: {
                        question: "",
                        module: "trivia",
                        voteOptions: {
                            type: "voteWithScoring",
                            scoringType: "singlechoice"
                        },
                        survey: ""
                    }
                }),
                w = p().View.extend({
                    template: n().template('<div id="prompt" class="pollposition-range-buffer prompt text col-xs-12"></div> <svg id="pollposition-percentage-picker" role="slider" tabindex="0" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" aria-label="Percent" class="pollposition-percentage-picker" viewBox="-38 -38 76 76"> <circle class="background" r="16" cx="0" cy="0"/> <circle id="percent-display" class="percent-display" r="16" cx="0" cy="0"/> <circle class="helper" r="1.5" cx="-32" cy="0"/> <line class="helper" x1="0" y1="0" x2="-32" y2="0"></line> <circle class="center" r="1" cx="0" cy="0"/> <text id="percent" class="percent" x="-2" y="10" text-anchor="middle" font-size="30"></text> <text id="percent-sign" class="percent-sign" x="14" y="-2" font-size="12">%</text> </svg> <div class="container"> <form class="form" id="pollposition-enterpercentage-field"> <div class="pollposition-submitpercentage-container"> <button type="submit" id="pollposition-submitpercentage" class="pollposition-button"><span>Submit</span></button> <div id="pollposition-submitpercentage-loading" class="button-pollposition-loading gridmargin right" style="display:none;width:110px;height:48px;margin-top:10px"></div> </div> </form> </div> '),
                    model: new f,
                    className: "EnterPercentage noselect",
                    sessionModule: "trivia",
                    sessionName: " Vote",
                    sessionMessage: {
                        type: "voteWithScoring",
                        scoringType: "singlechoice"
                    },
                    regions: {
                        prompt: "#prompt",
                        buttons: "#buttons"
                    },
                    events: {
                        "click #pollposition-submitpercentage": "submitPercentage",
                        "input #pollposition-percentage": "updatePercentage",
                        "change #pollposition-percentage": "updatePercentage"
                    },
                    bindings: {
                        "#playername": {
                            observe: "username",
                            onGet: e => `You are:  ${e}`
                        }
                    },
                    initialize() {
                        this.promptComponent = new b.y({
                            model: new(c().Model)
                        }), this.update(), this.listenTo(this.model, "change", this.update, this), this.triggerMethod("lastGuess", void 0)
                    },
                    update() {
                        this.blob = this.model.attributes, this.promptComponent.model.set("html", this.model.get("question")), this.blob.entryId && this.blob.entryId !== this.currentEntry && (this.currentEntry = this.blob.entryId)
                    },
                    onRender() {
                        this.getRegion("prompt").show(this.promptComponent), this.stickit()
                    },
                    onAttach() {
                        g.b.vibrate(), this.startRangeInterface()
                    },
                    startRangeInterface() {
                        this.currentRange || (this.currentRange = new v.k("pollposition-percentage-picker", 10, ["#playerRegion", ".pollposition-range-buffer", "#pollposition-submitpercentage"]), this.currentRange.setPercentage(50))
                    },
                    submitPercentage(e) {
                        const t = this.currentRange.getPercentage();
                        if (!this.isInt(t)) {
                            const e = l()("#pollposition-submit-alert");
                            return l()("#pollposition-submit-alert").html("you can't enter nothing!"), e.removeClass("alert-info"), e.addClass("alert-danger"), e.show(), !1
                        }
                        return this.currentRange.end(), l()(e.currentTarget).hide(), l()("#pollposition-percentage-picker").hide(), this.sessionMessage.vote = t, u.app.client.sessionSend(this.sessionModule, this.sessionName, this.sessionMessage), this.promptComponent.model.set("html", `${this.model.get("question")}<br>Thank you. Your guess: <span style="color: #00ffff; font-size: 40px;">${t}%</span>`), this.triggerMethod("lastGuess", t), !1
                    },
                    updatePercentage() {
                        this.currentPercentage = this.currentRange.getPercentage()
                    },
                    isInt: e => Number.isInteger(e)
                }),
                x = p().View.extend({
                    tagName: "div",
                    className: "ScoreView",
                    template: n().template('<div class="text" id="answer-text"> <span class="stat" id="answer"></span> is the correct answer </div> <br/> <div class="text" id="guess-text"> <span class="stat" id="guess"></span> was your guess </div> <br/> <div class="text" id="earned-text"> <span class="stat" id="earned"></span> for being <span class="text" id="answerDiff"></span> off. </div> <br/> <div class="text" id="rank-text"> <span id="rank" class="stat"></span> place <span class="text" id="count-text"> out of <span id="count"></span> </span> </div> <br/> <div class="text" id="total-text"> <span id="score" class="stat"></span> total </div>'),
                    bindings: {
                        "#answer": {
                            observe: "answer",
                            onGet(e) {
                                return this.isInt(e) ? `${e}%` : ""
                            }
                        },
                        "#guess": {
                            observe: "lastGuess",
                            onGet(e) {
                                return this.isInt(e) ? `${e}%` : ""
                            }
                        },
                        "#guess-text": {
                            observe: "lastGuess",
                            visible(e) {
                                return this.isInt(e)
                            }
                        },
                        "#earned-text": {
                            observe: "earned",
                            visible(e) {
                                return this.isInt(e)
                            }
                        },
                        "#earned": {
                            observe: "earned",
                            onGet(e) {
                                return `${this.formatScore(e,!0,0,"")}pts`
                            }
                        },
                        "#answerDiff": {
                            observe: "answerDiff",
                            onGet(e) {
                                return this.isInt(e) ? `${e}%` : ""
                            }
                        },
                        "#score": {
                            observe: "score",
                            onGet(e) {
                                return `${this.formatScore(e,!0,0,"")}pts`
                            }
                        },
                        "#rank-text": {
                            observe: "rank",
                            visible(e) {
                                return this.isInt(e)
                            }
                        },
                        "#rank": {
                            observe: "rank",
                            onGet(e) {
                                const t = e + 1;
                                return `${t}${this.formatPlace(t)}`
                            }
                        },
                        "#count-text": {
                            observe: "showCount",
                            visible: e => e
                        },
                        "#count": {
                            observe: "count",
                            onGet(e) {
                                return this.formatScore(e, !0, 0, "")
                            }
                        }
                    },
                    onRender() {
                        this.stickit()
                    },
                    isInt: e => Number.isInteger(e),
                    formatPlace(e) {
                        const t = ["st", "nd", "rd"],
                            s = e % 10,
                            i = Math.floor(e / 10 % 10);
                        let n = "th";
                        return 0 !== s && s <= t.length && 1 !== i && (n = t[s - 1]), n
                    },
                    formatScore(e, t, s, i) {
                        t = void 0 === t || t, s = void 0 === s ? 2 : s, i = void 0 === i ? "$" : i;
                        const n = (e = this.isInt(e) ? e : 0) < 0;
                        let o = (e = Math.abs(e)).toString();
                        const r = o.split(".");
                        2 === r.length && (o = `${r[0]}.${r[1].substr(0,s)}`);
                        const a = o.split(".")[0],
                            l = o.split(".")[1];
                        let h = "";
                        if (t)
                            for (let e = 0; e < a.length; e++) e > 0 && e % 3 == 0 && (h = `,${h}`), h = a.substr(-e - 1, 1) + h;
                        else h = a;
                        let c = "";
                        if (void 0 !== l && (c = l), c.length < s) {
                            const e = s - c.length;
                            for (let t = 0; t < e; t++) c += "0"
                        }
                        let d = "";
                        return n && (d = "-"), d += i + h, s > 0 && (d += `.${c}`), d
                    }
                }),
                y = p().View.extend({
                    model: new m.S({}),
                    template: n().template('<div id="controller" class="state-controller controller-content"> <div class="question"></div> <br/><br/> <div id="scorereview" class="scorereviewContainer"></div> </div> '),
                    className: "AnswerReview scrollable",
                    sessionModule: "trivia",
                    sessionName: " Vote",
                    sessionMessage: {
                        type: "getRank"
                    },
                    showCount: !1,
                    regions: {
                        scorereview: "#scorereview"
                    },
                    bindings: {
                        ".question": {
                            updateMethod: "html",
                            observe: "question"
                        }
                    },
                    initialize() {
                        this.scoreComponent = new x({
                            model: new(c().Model)
                        }), this.listenTo(this.model, "change", this.update, this), this.listenTo(this.model.sessionModel, "change", this.updateFromSession, this), u.app.client.sessionSend(this.sessionModule, this.model.get("sessionModulePrefix") + this.sessionName, this.sessionMessage)
                    },
                    update() {
                        this.blob = this.model.attributes, this.blob.entryId && this.blob.entryId !== this.currentEntry && (this.currentEntry = this.blob.entryId)
                    },
                    updateFromSession() {
                        const e = this.model.sessionModel.attributes[`sessionMessage::${this.sessionModule}::${this.model.get("sessionModulePrefix")+this.sessionName}`];
                        e.showCount = this.model.get("room").audience.showCount, e.answer = this.model.get("room").audience.answer, this.isInt(this.model.get("lastGuess")) && (e.lastGuess = this.model.get("lastGuess"), e.answerDiff = Math.abs(e.lastGuess - e.answer), e.earned = this.scores[e.answerDiff]), this.scoreComponent.model.set(e)
                    },
                    onRender() {
                        this.getRegion("scorereview").show(this.scoreComponent), this.stickit()
                    },
                    isInt: e => Number.isInteger(e),
                    scores: [1e3, 930, 893, 857, 824, 791, 759, 732, 705, 677, 650, 624, 605, 587, 569, 552, 535, 519, 503, 488, 473, 459, 445, 432, 419, 406, 394, 382, 371, 360, 349, 339, 329, 319, 309, 300, 291, 282, 274, 266, 258, 248, 238, 228, 219, 210, 202, 194, 186, 179, 172, 165, 158, 152, 146, 140, 134, 129, 124, 119, 114, 108, 103, 98, 93, 88, 84, 80, 76, 72, 68, 65, 62, 59, 56, 53, 50, 47, 45, 43, 41, 38, 34, 33, 30, 28, 25, 23, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 1, 0]
                }),
                k = p().View.extend({
                    tagName: "div",
                    template: n().template('<div class="text" id="rank-text">You finished in <span id="rank" style="color:#0ff;font-size:40px"></span> place<span class="text" id="count-text"> of <span id="count" style="color:#0ff;font-size:40px"></span></span> with <span id="score" style="color:#0ff;font-size:40px"></span> points!</div> <br/><br/> <div class="text" id="winner-text">Congratulations! You Won!</div> <div class="text" id="loser-text">Better luck next time!</div> <br/><br/> <div class="text" id="thanks-text">Thanks for playing GUESSPIONAGE.</div>'),
                    bindings: {
                        "#winner-text": {
                            observe: "rank",
                            visible: e => 0 === e
                        },
                        "#loser-text": {
                            observe: "rank",
                            visible: e => e > 0
                        },
                        "#score": {
                            observe: "score",
                            onGet(e) {
                                return this.formatScore(e, !0, 0, "")
                            }
                        },
                        "#rank-text": {
                            observe: "rank",
                            visible(e) {
                                return this.isInt(e)
                            }
                        },
                        "#rank": {
                            observe: "rank",
                            onGet(e) {
                                const t = e + 1;
                                return `${t}${this.formatPlace(t)}`
                            }
                        },
                        "#count-text": {
                            observe: "showCount",
                            visible: e => e
                        },
                        "#count": {
                            observe: "count",
                            onGet(e) {
                                return this.formatScore(e, !0, 0, "")
                            }
                        }
                    },
                    onRender() {
                        this.stickit()
                    },
                    isInt(e) {
                        return !Number.isNaN(e) && (0 | (t = parseFloat(e))) === t;
                        var t
                    },
                    formatPlace(e) {
                        const t = ["st", "nd", "rd"],
                            s = e % 10,
                            i = Math.floor(e / 10 % 10);
                        let n = "th";
                        return 0 !== s && s <= t.length && 1 !== i && (n = t[s - 1]), n
                    },
                    formatScore(e, t, s, i) {
                        t = void 0 === t || t, s = void 0 === s ? 2 : s, i = void 0 === i ? "$" : i;
                        const n = (e = this.isInt(e) ? e : 0) < 0;
                        let o = (e = Math.abs(e)).toString();
                        const r = o.split(".");
                        2 === r.length && (o = `${r[0]}.${r[1].substr(0,s)}`);
                        const a = o.split(".")[0],
                            l = o.split(".")[1];
                        let h = "";
                        if (t)
                            for (let e = 0; e < a.length; e++) e > 0 && e % 3 == 0 && (h = `,${h}`), h = a.substr(-e - 1, 1) + h;
                        else h = a;
                        let c = "";
                        if (void 0 !== l && (c = l), c.length < s) {
                            const e = s - c.length;
                            for (let t = 0; t < e; t++) c += "0"
                        }
                        let d = "";
                        return n && (d = "-"), d += i + h, s > 0 && (d += `.${c}`), d
                    }
                }),
                M = p().View.extend({
                    template: n().template('<div id="finalrank"></div>'),
                    className: "EndGame scrollable",
                    sessionModule: "trivia",
                    sessionName: " Vote",
                    sessionMessage: {
                        type: "getRank"
                    },
                    regions: {
                        finalrank: "#finalrank"
                    },
                    bindings: {
                        "#playername": {
                            observe: "username",
                            onGet: e => `You are:  ${e}`
                        },
                        "#endgame-message": {
                            observe: "rank",
                            visible(e) {
                                return this.isInt(e)
                            },
                            onGet: e => 0 === e ? "You're the winner, congratulations!" : "Better luck next time!"
                        }
                    },
                    initialize() {
                        this.rankComponent = new k({
                            model: new(c().Model)
                        }), this.listenTo(this.model, "change", this.update, this), this.listenTo(this.model.sessionModel, "change", this.updateFromSession, this), this.model.sendSessionMessage(this.sessionModule, this.model.get("sessionModulePrefix") + this.sessionName, this.sessionMessage)
                    },
                    update() {
                        this.blob = this.model.get("room").audience, this.blob.entryId && this.blob.entryId !== this.currentEntry && (this.currentEntry = this.blob.entryId)
                    },
                    updateFromSession() {
                        const e = this.model.sessionModel.attributes[`sessionMessage::${this.sessionModule}::${this.model.get("sessionModulePrefix")+this.sessionName}`];
                        e.showCount = this.model.get("room").audience.showCount, this.rankComponent.model.set(e)
                    },
                    onRender() {
                        this.getRegion("finalrank").show(this.rankComponent), this.stickit()
                    },
                    isInt: e => Number.isInteger(e)
                }),
                I = s(97079).E.extend({
                    sessionModule: "trivia"
                });
            var P = s(34813);
            const G = P.s.extend({
                    bindings: n().extend({}, P.s.prototype.bindings, {
                        "#playername": {
                            observe: "username",
                            onGet: e => e ? `You are:  ${e}` : ""
                        },
                        ".messageText": {
                            observe: ["player", "room"],
                            updateMethod: "html",
                            onGet(e) {
                                if (!e[1]) return "Get ready, the next round is about to start!";
                                const t = void 0 !== e[0] ? e[0] : e[1];
                                return t && t.message
                            }
                        }
                    })
                }),
                $ = o.v.extend({
                    sessionModulePrefix: "Guesspionage-Crowdplay",
                    parseBlob(e) {
                        return "EnterPercentage" === e.state ? r.E.hide() : r.E.show(), e.playerInfo = e.playerInfo || {}, e.playerInfo.username = this.model.get("username") ? `You are: ${this.model.get("username")}` : "", "MakeSingleChoice" === e.state && (e.prompt = {
                            html: e.text
                        }, e.choices = n().map(e.choices, (e => ({
                            html: e
                        })))), "AnswerReview" === e.state && (e.lastGuess = this.model.get("lastGuess")), "ScoreView" === e.state && (e.lastGuess = this.model.get("lastGuess")), e
                    },
                    getGameLayout(e) {
                        switch (e) {
                            case "EnterPercentage":
                                return this.setLayout(w);
                            case "AnswerReview":
                                return this.setLayout(y);
                            case "EndGame":
                                return this.setLayout(M);
                            case "MakeSingleChoice":
                                return this.setLayout(I);
                            case "Logo":
                                return this.setLayout(G);
                            default:
                                return -1
                        }
                    },
                    onChildviewLastGuess(e) {
                        this.model.set("lastGuess", e, {
                            silent: !0
                        })
                    }
                })
        },
        65243: (e, t, s) => {
            "use strict";
            s.d(t, {
                k: () => o
            });
            var i = s(19755),
                n = s.n(i);
            const o = function(e, t, s) {
                this.element = e, this.isEnabled = !0, this.percentage = 50, this.widthMargin = t, this.heightDiffArray = s, this.elementAspectRatio = 1;
                const i = () => {
                    let e = 0;
                    s.forEach((t => {
                        n()(t).each((function() {
                            e += n()(this).outerHeight(!0)
                        }))
                    }));
                    let t = window.innerWidth - this.widthMargin,
                        i = window.innerHeight - e;
                    i < 100 && (i = 100, t = i * (window.innerWidth / window.innerHeight));
                    const o = t / i;
                    this.elementAspectRatio < o ? (n()(this.element)[0].style.width = i / this.elementAspectRatio + "px", n()(this.element)[0].style.height = `${i}px`) : (n()(this.element)[0].style.width = `${t}px`, n()(this.element)[0].style.height = t / this.elementAspectRatio + "px"), window.scrollTo(0, 0)
                };
                window.onresize = i;
                const o = e => {
                        if ("touchmove" === e.type) e.preventDefault();
                        else if ("touchend" === e.type) return void this[e.type]();
                        const t = n()(this.element)[0].getBoundingClientRect(),
                            s = {
                                x: e.targetTouches[0].pageX - t.left,
                                y: e.targetTouches[0].pageY - t.top
                            };
                        this[e.type](s)
                    },
                    r = e => {
                        if ("mousemove" === e.type) e.preventDefault();
                        else if ("mouseup" === e.type) return void this[e.type]();
                        const t = n()(this.element)[0].getBoundingClientRect(),
                            s = {
                                x: e.clientX - t.left,
                                y: e.clientY - t.top
                            };
                        this[e.type](s)
                    };
                this.handleKeyDown = function(e) {
                    let t = !1;
                    switch (e.keyCode) {
                        case 37:
                        case 40:
                            this.setPercentage(this.percentage - 1), t = !0;
                            break;
                        case 39:
                        case 38:
                            this.setPercentage(this.percentage + 1), t = !0;
                            break;
                        case 34:
                            this.setPercentage(this.percentage - 10), t = !0;
                            break;
                        case 33:
                            this.setPercentage(this.percentage + 10), t = !0;
                            break;
                        case 36:
                            this.setPercentage(0), t = !0;
                            break;
                        case 35:
                            this.setPercentage(100), t = !0
                    }
                    t && (e.preventDefault(), e.stopPropagation())
                }, document.addEventListener("touchend", o), this.element.on("touchstart", o), this.element.on("touchmove", o), this.element.on("mousedown", r), this.element.on("mousemove", r), document.addEventListener("mouseup", r), this.element.on("keydown", this.handleKeyDown.bind(this)), this.getPercentage = function() {
                    return this.percentage
                }, this.setPercentage = function(e) {
                    e > 100 && (e = 100), e < 0 && (e = 0), this.percentage = e, this.element.attr("aria-valuenow", this.percentage), this.redrawSvg()
                }, this.redrawSvg = function() {
                    this.element.find("circle.percent-display").css("stroke-dasharray", 1.005 * this.percentage + " 100");
                    const e = this.percentage / 100 * (2 * Math.PI) - Math.PI / 2,
                        t = {
                            x: 35 * Math.cos(e),
                            y: 35 * Math.sin(e)
                        },
                        s = this.element.find("circle.helper");
                    s.attr("cx", t.x), s.attr("cy", t.y);
                    const i = this.element.find("line.helper");
                    i.attr("x2", t.x), i.attr("y2", t.y);
                    const o = this.element.find("text.percent")[0];
                    let r;
                    n()(o).html(this.percentage);
                    try {
                        r = this.element.getElementById("percent").getBBox().width
                    } catch (e) {
                        r = 28.6
                    }
                    r || (r = 28.6), this.element.find("text.percent-sign").attr("x", r / 2)
                }, this.start = function(e) {
                    this.isEnabled && (this.isTouching = !0, this.setPoint(e, !1))
                }, this.move = function(e) {
                    this.isTouching && this.setPoint(e, !0)
                }, this.end = function() {
                    this.isTouching && (this.isTouching = !1, this.element.focus())
                }, this.setPoint = function(e, t) {
                    const s = e.x - parseInt(this.element.width(), 10) / 2,
                        i = e.y - parseInt(this.element.height(), 10) / 2;
                    let n = Math.atan(i / s);
                    s < 0 && (n += Math.PI);
                    let o = Math.floor((n + Math.PI / 2) / (2 * Math.PI) * 100);
                    t && (o < 5 && this.percentage > 95 ? o = 100 : this.percentage < 5 && o > 95 && (o = 0)), this.setPercentage(o), this.redrawSvg()
                }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, i(), this.resize = i
            }
        }
    }
]);
//# sourceMappingURL=5022.ca087b0e1a4d4462145c.js.map