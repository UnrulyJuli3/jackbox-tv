(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/quiplash"], {
        47214: (e, t, s) => {
            "use strict";
            s.d(t, {
                E: () => w
            });
            var n = s(13469),
                i = s.n(n),
                a = s(19755),
                o = s.n(a),
                r = s(72316),
                l = s.n(r),
                p = s(63574),
                c = s.n(p),
                u = s(10972),
                d = s(2720);

            function h(e, t, s, n, i, a, o) {
                try {
                    var r = e[a](o),
                        l = r.value
                } catch (e) {
                    return void s(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(n, i)
            }

            function g(e) {
                return function() {
                    var t = this,
                        s = arguments;
                    return new Promise((function(n, i) {
                        var a = e.apply(t, s);

                        function o(e) {
                            h(a, n, i, o, r, "next", e)
                        }

                        function r(e) {
                            h(a, n, i, o, r, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function m(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            const b = c().View.extend({
                el: "#banner",
                template: i().template('\n        <div class="banner-image"></div>\n        <div class="banner-text"></div>\n        <div class="banner-cta"></div>\n    '),
                events: {
                    click: "onBannerClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: ["visible", "theme"],
                            onGet(e) {
                                let [t, s] = e, n = s || "no-theme";
                                return t && (n += " show"), n
                            }
                        }]
                    },
                    ".banner-text": "copy",
                    ".banner-cta": "cta"
                },
                initialize() {
                    this.render(), this.listenTo(this.model, "change:visible", this.visibleDidChange)
                },
                onBannerClick() {
                    u.app.analytics.trackEvent({
                        category: "SlideBanner",
                        action: "SlideBannerClicked",
                        label: this.getCampaign(),
                        value: 0
                    }), this.model.get("url") && window.open(this.model.get("url"), "_blank")
                },
                onRender() {
                    this.stickit()
                },
                visibleDidChange(e, t) {
                    setTimeout((() => {
                        o()(window).trigger("resize")
                    }), .5), t && u.app.analytics.trackEvent({
                        category: "SlideBanner",
                        action: "SlideBannerOn",
                        label: this.getCampaign(),
                        value: 0
                    })
                },
                getCampaign() {
                    const e = this.model.get("url");
                    if (!e) return "";
                    let t = "";
                    return e.split("?")[1] && (t = new URLSearchParams(window.location.search).get("utm_campaign") || ""), t
                }
            });
            class w {
                static get isVisible() {
                    return !!this.view && "on" === this.view.state
                }
                static update(e, t) {
                    var s = this;
                    return g((function*() {
                        t && "PostGame" === t.lobbyState ? (s.view || (yield s.init(e, t)), s.show()) : s.hide()
                    }))()
                }
                static init(e) {
                    var t = this;
                    return g((function*() {
                        e ? (t.bannerData = yield t.loadBannerData(e), t.bannerData && (t.view = new b({
                            model: new(l().Model)(t.bannerData)
                        }), t.isInitialized = !0)) : t.bannerData = !1
                    }))()
                }
                static show() {
                    this.view && this.view.model.set({
                        visible: !0
                    })
                }
                static hide() {
                    this.view && this.view.model.set({
                        visible: !1
                    })
                }
                static loadBannerData(e) {
                    return g((function*() {
                        try {
                            const t = yield fetch(d.v.banners.url), s = yield t.json();
                            return !(!s || !s.postGameBanners) && s.postGameBanners[e]
                        } catch (e) {
                            return console.error("Unable to load banner data", e), !1
                        }
                    }))()
                }
            }
            m(w, "view", null), m(w, "isInitialized", !1), m(w, "bannerConfig", null)
        },
        62353: (e, t, s) => {
            "use strict";
            s.d(t, {
                I: () => w
            });
            var n = s(13469),
                i = s.n(n),
                a = s(19755),
                o = s.n(a),
                r = s(72316),
                l = s.n(r),
                p = s(63574),
                c = s.n(p),
                u = s(10972),
                d = s(81127),
                h = s(40543),
                g = s(89446),
                m = s(47214);

            function b(e, t, s, n, i, a, o) {
                try {
                    var r = e[a](o),
                        l = r.value
                } catch (e) {
                    return void s(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(n, i)
            }
            const w = c().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(e) {
                    this.mergeOptions(e, ["appId", "appTag"]), u.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), u.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(l().Model)({});
                    const t = u.app.client.parseEntities();
                    this.model.set(t), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), u.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), u.app.client.on("client:connection", this.onConnectionMessageWithContext), u.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), u.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", g.c.safeText(u.app.client.name), {
                        silent: !0
                    }), this.$el.html(this.template(this.model.toJSON())), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
                },
                onEntityDidChange(e, t) {
                    this.model.unset(e, {
                        silent: !0
                    }), this.model.set(e, t)
                },
                controllerUpdate() {
                    const e = this.model.get("room") || {},
                        t = e.state || "";
                    let s = e.lobbyState;
                    s || -1 === t.indexOf("_") || (s = e.state.split("_")[1]), "PostGame" === s || "Credits" === t || "GameOver" === t || "PostGame" === t || "DayEnd" === t || e.gameResults ? m.E.isInitialized ? m.E.show() : m.E.init(this.getOption("appTag")).then((() => {
                        m.E.show()
                    })) : m.E.hide(), u.app.storage && u.app.storage.isSupported && e.platformId && u.app.storage.setTag(`platform-${e.platformId}`)
                },
                update() {
                    return (e = function*() {
                        return null
                    }, function() {
                        var t = this,
                            s = arguments;
                        return new Promise((function(n, i) {
                            var a = e.apply(t, s);

                            function o(e) {
                                b(a, n, i, o, r, "next", e)
                            }

                            function r(e) {
                                b(a, n, i, o, r, "throw", e)
                            }
                            o(void 0)
                        }))
                    })();
                    var e
                },
                caughtError(e) {
                    throw e
                },
                onAttach() {
                    this.update().catch(this.caughtError), o()(".gallery-link").click(this.artifactClicked.bind(this)), u.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(e) {
                    let t = `<div class='icon-${u.app.client.roles.broadcaster.platform}'>${u.app.client.roles.broadcaster.name}</div>`;
                    t += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? t += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : u.app.client.roomInfo.audienceEnabled || (t += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), h.b.show("custom", {
                        html: t,
                        position: "bottom",
                        timer: e,
                        backdrop: "transparent",
                        customClass: {
                            container: "jbgTwitchContainer",
                            popup: "jbgTwitchPopup",
                            htmlContainer: "jbgTwitchContent",
                            closeButton: "jbgCloseButton"
                        },
                        showCloseButton: !0,
                        closeButtonHtml: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.00006L2 20" stroke="#0C0C0C" stroke-width="3"></path><path d="M2 2.00001L20 20" stroke="#0C0C0C" stroke-width="3" /></svg >',
                        showConfirmButton: !1,
                        showClass: {
                            popup: "jbgTwitchShow"
                        },
                        hideClass: {
                            popup: "jbgTwitchHide"
                        }
                    })
                },
                onBeforeDestroy() {
                    this.model.stopListening(), u.app.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), u.app.client.off("client:connection", this.onConnectionMessageWithContext), u.app.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), u.app.client.off("client:disconnected", this.onDisconnectedWithContext)
                },
                artifactClicked() {
                    u.app.analytics.trackEvent({
                        category: "PostGame",
                        action: "galleryClicked",
                        label: this.getOption("appTag")
                    }), d.Q.setAsViewed(0)
                },
                showScreen(e, t) {
                    const s = o()(e);
                    return this.activeScreen && e === this.activeScreen || (this.activeScreen && (o()(this.activeScreen).fadeOut("fast", (() => {})), o()(this.activeScreen).show(), o()(this.activeScreen).addClass("pt-page-off")), s.hide(), s.removeClass("pt-page-off"), s.removeClass("pt-page-moveToLeft"), s.fadeIn("fast", (() => {
                        t && t()
                    })), this.activeScreen = e, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = i().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    h.b.vibrate()
                },
                trackScreenView() {
                    u.app.analytics.trackScreenView(this.getOption("appTag")), u.app.storage && u.app.storage.isSupported && u.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    u.app.storage && u.app.storage.isSupported && (u.app.storage.remove("roomCode"), u.app.storage.remove("reconnect")), h.b.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected() {
                    h.b.show("error", {
                        titleText: "Disconnected",
                        text: "You have been disconnected.",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage(e) {
                    const t = `${e.status} ${e.attempt?`${e.attempt}/5'`:""}`;
                    if (h.b.show("toast", {
                            text: t
                        }), "connected" === e.status) {
                        const e = u.app.client.parseEntities();
                        this.model.set(e)
                    }
                },
                onResize() {
                    const e = o()("#player").outerHeight(!0) || 0,
                        t = m.E.isVisible ? o()("#slide-in-banner").outerHeight(!0) : 0,
                        s = o()(window).width(),
                        n = o()(window).height() - e;
                    o()(`.${this.getOption("appTag")}-page`).css("height", n - t), o()(`.${this.getOption("appTag")}-page`).attr("height", n - t), o()(`.${this.getOption("appTag")}-page`).css("top", e), o()(`.${this.getOption("appTag")}-page`).css("width", s), o()(`.${this.getOption("appTag")}-page`).attr("width", s)
                }
            })
        },
        64304: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                MainView: () => b
            });
            var n = s(19755),
                i = s.n(n),
                a = s(13469),
                o = s.n(a),
                r = s(62353),
                l = s(40543),
                p = s(89446),
                c = s(10972),
                u = s(27091),
                d = s.n(u),
                h = new URL(s(78264), s.b);
            const g = '<div id="page-quiplash" class="page"> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rokkitt:400,700"> <div id="player"> <h1><%=username%></h1> </div> <div id="quiplash-preload" class="quiplash-preload"></div> <div id="game" class="game pt-pageholder"> <div id="state-lobby" class="pt-page-off quiplash-page"> <div class="container"> <br/><span id="quiplash-lobby-text"></span><br/> <form class="pure-form"> <button type="button" id="quiplash-startgame" class="button-quiplash button-xlarge pure-button pure-input-1">EVERYBODY\'S IN</button> <button type="button" id="quiplash-stopcountdown" class="button-quiplash button-xlarge pure-button pure-input-1">CANCEL</button> <button type="button" id="quiplash-sameplayers" class="button-quiplash button-xlarge pure-button pure-input-1 quiplash-endbuttons">SAME PLAYERS</button> <button type="button" id="quiplash-newplayers" class="button-quiplash button-xlarge pure-button pure-input-1 quiplash-endbuttons">NEW PLAYERS</button> </form> </div> </div> <div id="state-logo" class="pt-page-off quiplash-page"> <div class="logo-image" style="width:100%"> <img class="pure-img" style="margin-left:auto;margin-right:auto" src="' + d()(h) + '"> </div> </div> <div id="state-round" class="pt-page-off quiplash-page"> <div class="round-image-container" style="width:100%"> <img id="round-image" class="pure-img" style="margin-left:auto;margin-right:auto"> </div> </div> <div id="state-answer-question-audience" class="pt-page-off quiplash-page"> <br/><div class="state-answer-question-audience-main"><p class="state-answer-question-audience-text"></p></div> </div> <div id="state-answer-question" class="pt-page-off quiplash-page"> <div class="container"> <br/><span id="question-text"></span><br/> <span id="quiplash-submit-alert" class="alert alert-info">Alert message goes here</span> <form class="pure-form" id="quiplash-answer-field"> <div class="pure-u-1"> <input id="quiplash-answer-input" name="quiplash-answer" class="pure-input-1 capitalize jbg-input quiplash-answer-input" type="text" maxlength="45" placeholder="ANSWER HERE" autocapitalize="off" autocorrect="off" autocomplete="off"> </div> <button type="submit" id="quiplash-submit-answer" class="button-quiplash button-large pure-button capitalize right"> <i class="fas fa-paper-plane"></i>&nbsp;&nbsp;Send </button> <div id="quiplash-submit-answer-loading" style="display:none" class="button-quiplash-loading"></div> </form> <div id="quiplash-suggestions" class="pure-g"></div> </div> </div> <div id="state-done-answering" class="pt-page-off quiplash-page"> <br/><span>Thanks for your answers!</span><br/> </div> <div id="state-vote" class="pt-page-off quiplash-page"> <div class="container"> <br/> <span id="question-text" class="question-text"></span> <br/> <br/> <span id="vote-text"></span> <br/> <br/> <form id="quiplash-vote" class="pure-form"></form> </div> </div> </div> </div> ';

            function m(e, t, s, n, i, a, o) {
                try {
                    var r = e[a](o),
                        l = r.value
                } catch (e) {
                    return void s(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(n, i)
            }
            const b = r.I.extend({
                template: o().template(g),
                testBlob: null,
                events: {
                    "click #quiplash-startgame": "startGame",
                    "click #quiplash-stopcountdown": "stopCountdown",
                    "click #quiplash-sameplayers": "newGameSamePlayers",
                    "click #quiplash-newplayers": "newGameNewPlayers",
                    "click #quiplash-submit-answer": "submitAnswer",
                    "click .quiplash-vote-button": "vote"
                },
                update() {
                    var e, t = this;
                    return (e = function*() {
                        if (!t.model.get("room")) return void t.showScreen("#state-logo");
                        const e = t.model.get("room"),
                            n = t.model.get("player") ? t.model.get("player") : {},
                            a = n ? n.state : "",
                            o = e ? e.state : "",
                            r = void 0 !== n && void 0 !== n.playerColor ? n.playerColor : "#CCCCCC";
                        i()("#player").css("background-color", r);
                        const u = p.c.adjustColor(r, .52);
                        if (i()("#state-lobby").css("background-color", u), i()("#state-answer-question-audience").css("background-color", u), i()("#state-answer-question").css("background-color", u), i()("#state-done-answering").css("background-color", u), i()("#state-vote").css("background-color", u), t.currentAnswerQuestionId = -1, "RoomFull" !== a) {
                            if ("GameLocked" === a) l.b.show(Error("Game is in progress. Please wait for a new game to start."), {
                                willClose: () => {
                                    window.location.reload(!0)
                                }
                            });
                            else if (o && "Lobby" === o) {
                                if (!c.app.client.isRole("player")) return void t.showScreen("#state-logo");
                                if (t.hideLobbyButtons(), !n.isAllowedToStartGame) return i()("#quiplash-lobby-text").html("Sit back and relax!"), void t.showScreen("#state-lobby");
                                const s = e.lobbyState;
                                "WaitingForMore" === s ? i()("#quiplash-lobby-text").html("Waiting for all players to join") : "CanStart" === s ? (i()("#quiplash-lobby-text").html("Press this button when everybody has joined"), i()("#quiplash-startgame").show()) : "Countdown" === s ? (i()("#quiplash-lobby-text").html("Press this button to cancel game start"), i()("#quiplash-stopcountdown").show()) : "PostGame" === s && (i()("#quiplash-lobby-text").html("What do you want to do?"), i()(".quiplash-endbuttons").show()), t.showScreen("#state-lobby")
                            } else if ("Gameplay_Logo" === o) t.showScreen("#state-logo");
                            else if ("Gameplay_Round" === o) {
                                const n = yield s(41842)(`./Round${e.round}.png`);
                                i()("#round-image").attr("src", n.default), t.showScreen("#state-round")
                            } else if ("Gameplay_AnswerQuestion" === o)
                                if ("Gameplay_AnswerQuestion" === a) {
                                    if (!n.question) return void t.showScreen("#state-done-answering");
                                    if (t.currentAnswerQuestionId !== n.question.id && (i()("#quiplash-answer-input").val(""), i()("#quiplash-answer-field").show(), i()("#quiplash-submit-alert").hide(), i()("#state-answer-question #question-text").html(n.question.prompt.replace(/<BLANK>/gi, "________"))), n.showError) {
                                        const e = i()("#quiplash-submit-alert");
                                        i()("#quiplash-submit-alert").html("You entered the same thing as someone else! Try again."), e.addClass("alert-info"), e.removeClass("alert-danger"), e.show()
                                    }
                                    t.currentAnswerQuestionId = n.question.id, t.showScreen("#state-answer-question")
                                } else i()(".state-answer-question-audience-text").html("You’re in the audience! Wait for the time to vote."), t.showScreen("#state-answer-question-audience");
                            else if ("Gameplay_Vote" === o) {
                                if (n.doneVoting) return i()("#vote-text").html("Wait for the other players!"), i()("#quiplash-vote").html(""), void t.showScreen("#state-vote");
                                e.question ? i()("#state-vote #question-text").html(e.question.prompt.replace(/<BLANK>/gi, "________")) : i()("#state-vote #question-text").html("");
                                let s = "";
                                n.votesLeft > 1 ? s = " votes left" : 1 === n.votesLeft && (s = " vote left"), i()("#vote-text").html(n.votesLeft ? `You have ${n.votesLeft}${s}` : "Which one do you like more?");
                                let a = "";
                                if (e.choices && e.order)
                                    for (let t = 0; t < e.order.length; t++) {
                                        const s = e.order[t];
                                        if (n.ignore) {
                                            let e = !1;
                                            for (let t = 0; t < n.ignore.length; t++)
                                                if (n.ignore[t].toString() === s.toString()) {
                                                    e = !0;
                                                    break
                                                } if (e) continue
                                        }
                                        let i = p.c.safeText(e.choices[s]);
                                        if (n.votes) {
                                            let e = 0;
                                            for (let t = 0; t < n.votes.length; t++) n.votes[t] === s && (e += 1);
                                            e > 0 && (i += ` (${e})`)
                                        }
                                        a += `<button type='button' data-vote='${s.toString()}' class='pure-input-1 quiplash-vote-button button-large pure-button button-quiplash'>${i}</button>`
                                    }
                                t.notify(), i()("#quiplash-vote").html(a), t.showScreen("#state-vote")
                            }
                        } else l.b.show(Error("The room is full"), {
                            willClose: () => {
                                window.location.reload(!0)
                            }
                        })
                    }, function() {
                        var t = this,
                            s = arguments;
                        return new Promise((function(n, i) {
                            var a = e.apply(t, s);

                            function o(e) {
                                m(a, n, i, o, r, "next", e)
                            }

                            function r(e) {
                                m(a, n, i, o, r, "throw", e)
                            }
                            o(void 0)
                        }))
                    })()
                },
                hideLobbyButtons() {
                    i()("#quiplash-startgame").hide(), i()("#quiplash-stopcountdown").hide(), i()(".quiplash-endbuttons").hide()
                },
                startGame: () => (c.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0
                }), !1),
                stopCountdown: () => (c.app.client.send("SendMessageToRoomOwner", {
                    cancelStartGame: !0
                }), !1),
                chooseCategory(e) {
                    const t = i()(e.target).data("num");
                    return c.app.client.send("SendMessageToRoomOwner", {
                        chosenCategory: t
                    }), !1
                },
                submitAnswer() {
                    const e = this.sanitize(i()("#quiplash-answer-input").val()).toUpperCase();
                    if (0 === e.length) {
                        const e = i()("#quiplash-submit-alert");
                        return i()("#quiplash-submit-alert").html("You can't enter nothing!"), e.removeClass("alert-info"), e.addClass("alert-danger"), e.show(), !1
                    }
                    return c.app.client.send("SendMessageToRoomOwner", {
                        answer: e,
                        questionId: this.currentAnswerQuestionId
                    }), !1
                },
                vote(e) {
                    const t = i()(e.target).data("vote");
                    return c.app.client.isRole("player") ? c.app.client.send("SendMessageToRoomOwner", {
                        vote: t
                    }) : c.app.client.isRole("audience") && (c.app.client.sessionSend("vote", "Quiplash Vote", {
                        type: "vote",
                        vote: t
                    }), i()("#vote-text").html("Thanks, audience member!"), i()("#quiplash-vote").html(""), this.showScreen("#state-vote")), !1
                },
                newGameSamePlayers: () => (c.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_Continue"
                }), !1),
                newGameNewPlayers: () => (c.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_NewGame"
                }), !1),
                sanitize: e => e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,:]/gi, "").replace(/'/g, "’").trim()
            })
        },
        27091: e => {
            "use strict";
            e.exports = function(e, t) {
                return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), t.hash && (e += t.hash), t.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(e) ? '"'.concat(e, '"') : e) : e
            }
        },
        216: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/quiplash/f6f3afef898e8868399e.png"
        },
        70088: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/quiplash/59626ae81407f05cf9dc.png"
        },
        3798: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/quiplash/bc483d03b79b0882103b.png"
        },
        78264: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/quiplash/a8b8676ab939e5aa92d1.png"
        },
        41842: (e, t, s) => {
            var n = {
                "./Round0.png": 216,
                "./Round1.png": 70088,
                "./Round2.png": 3798
            };

            function i(e) {
                return a(e).then((e => s.t(e, 1)))
            }

            function a(e) {
                return Promise.resolve().then((() => {
                    if (!s.o(n, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return n[e]
                }))
            }
            i.keys = () => Object.keys(n), i.resolve = a, i.id = 41842, e.exports = i
        }
    }
]);
//# sourceMappingURL=sourcemaps/6656.47aaa87608e9cbaa5be5.js.map