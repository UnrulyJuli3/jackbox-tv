(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/fibbage"], {
        47214: (e, t, i) => {
            "use strict";
            i.d(t, {
                E: () => m
            });
            var a = i(13469),
                o = i.n(a),
                n = i(19755),
                s = i.n(n),
                r = i(72316),
                l = i.n(r),
                c = i(63574),
                p = i.n(c),
                b = i(10972),
                d = i(2720);

            function g(e, t, i, a, o, n, s) {
                try {
                    var r = e[n](s),
                        l = r.value
                } catch (e) {
                    return void i(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(a, o)
            }

            function h(e) {
                return function() {
                    var t = this,
                        i = arguments;
                    return new Promise((function(a, o) {
                        var n = e.apply(t, i);

                        function s(e) {
                            g(n, a, o, s, r, "next", e)
                        }

                        function r(e) {
                            g(n, a, o, s, r, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function u(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }
            const f = p().View.extend({
                el: "#banner",
                template: o().template('\n        <div class="banner-image"></div>\n        <div class="banner-text"></div>\n        <div class="banner-cta"></div>\n    '),
                events: {
                    click: "onBannerClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: ["visible", "theme"],
                            onGet(e) {
                                let [t, i] = e, a = i || "no-theme";
                                return t && (a += " show"), a
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
                    b.app.analytics.trackEvent({
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
                        s()(window).trigger("resize")
                    }), .5), t && b.app.analytics.trackEvent({
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
            class m {
                static get isVisible() {
                    return !!this.view && "on" === this.view.state
                }
                static update(e, t) {
                    var i = this;
                    return h((function*() {
                        t && "PostGame" === t.lobbyState ? (i.view || (yield i.init(e, t)), i.show()) : i.hide()
                    }))()
                }
                static init(e) {
                    var t = this;
                    return h((function*() {
                        e ? (t.bannerData = yield t.loadBannerData(e), t.bannerData && (t.view = new f({
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
                    return h((function*() {
                        try {
                            const t = yield fetch(d.v.banners.url), i = yield t.json();
                            return !(!i || !i.postGameBanners) && i.postGameBanners[e]
                        } catch (e) {
                            return console.error("Unable to load banner data", e), !1
                        }
                    }))()
                }
            }
            u(m, "view", null), u(m, "isInitialized", !1), u(m, "bannerConfig", null)
        },
        62353: (e, t, i) => {
            "use strict";
            i.d(t, {
                I: () => m
            });
            var a = i(13469),
                o = i.n(a),
                n = i(19755),
                s = i.n(n),
                r = i(72316),
                l = i.n(r),
                c = i(63574),
                p = i.n(c),
                b = i(10972),
                d = i(81127),
                g = i(40543),
                h = i(89446),
                u = i(47214);

            function f(e, t, i, a, o, n, s) {
                try {
                    var r = e[n](s),
                        l = r.value
                } catch (e) {
                    return void i(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(a, o)
            }
            const m = p().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(e) {
                    this.mergeOptions(e, ["appId", "appTag"]), b.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), b.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(l().Model)({});
                    const t = b.app.client.parseEntities();
                    this.model.set(t), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), b.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), b.app.client.on("client:connection", this.onConnectionMessageWithContext), b.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), b.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", h.c.safeText(b.app.client.name), {
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
                    let i = e.lobbyState;
                    i || -1 === t.indexOf("_") || (i = e.state.split("_")[1]), "PostGame" === i || "Credits" === t || "GameOver" === t || "PostGame" === t || "DayEnd" === t || e.gameResults ? u.E.isInitialized ? u.E.show() : u.E.init(this.getOption("appTag")).then((() => {
                        u.E.show()
                    })) : u.E.hide(), b.app.storage && b.app.storage.isSupported && e.platformId && b.app.storage.setTag(`platform-${e.platformId}`)
                },
                update() {
                    return (e = function*() {
                        return null
                    }, function() {
                        var t = this,
                            i = arguments;
                        return new Promise((function(a, o) {
                            var n = e.apply(t, i);

                            function s(e) {
                                f(n, a, o, s, r, "next", e)
                            }

                            function r(e) {
                                f(n, a, o, s, r, "throw", e)
                            }
                            s(void 0)
                        }))
                    })();
                    var e
                },
                caughtError(e) {
                    throw e
                },
                onAttach() {
                    this.update().catch(this.caughtError), s()(".gallery-link").click(this.artifactClicked.bind(this)), b.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(e) {
                    let t = `<div class='icon-${b.app.client.roles.broadcaster.platform}'>${b.app.client.roles.broadcaster.name}</div>`;
                    t += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? t += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : b.app.client.roomInfo.audienceEnabled || (t += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), g.b.show("custom", {
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
                    this.model.stopListening(), b.app.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), b.app.client.off("client:connection", this.onConnectionMessageWithContext), b.app.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), b.app.client.off("client:disconnected", this.onDisconnectedWithContext)
                },
                artifactClicked() {
                    b.app.analytics.trackEvent({
                        category: "PostGame",
                        action: "galleryClicked",
                        label: this.getOption("appTag")
                    }), d.Q.setAsViewed(0)
                },
                showScreen(e, t) {
                    const i = s()(e);
                    return this.activeScreen && e === this.activeScreen || (this.activeScreen && (s()(this.activeScreen).fadeOut("fast", (() => {})), s()(this.activeScreen).show(), s()(this.activeScreen).addClass("pt-page-off")), i.hide(), i.removeClass("pt-page-off"), i.removeClass("pt-page-moveToLeft"), i.fadeIn("fast", (() => {
                        t && t()
                    })), this.activeScreen = e, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = o().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    g.b.vibrate()
                },
                trackScreenView() {
                    b.app.analytics.trackScreenView(this.getOption("appTag")), b.app.storage && b.app.storage.isSupported && b.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    b.app.storage && b.app.storage.isSupported && (b.app.storage.remove("roomCode"), b.app.storage.remove("reconnect")), g.b.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected() {
                    g.b.show("error", {
                        titleText: "Disconnected",
                        text: "You have been disconnected.",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage(e) {
                    const t = `${e.status} ${e.attempt?`${e.attempt}/5'`:""}`;
                    if (g.b.show("toast", {
                            text: t
                        }), "connected" === e.status) {
                        const e = b.app.client.parseEntities();
                        this.model.set(e)
                    }
                },
                onResize() {
                    const e = s()("#player").outerHeight(!0) || 0,
                        t = u.E.isVisible ? s()("#slide-in-banner").outerHeight(!0) : 0,
                        i = s()(window).width(),
                        a = s()(window).height() - e;
                    s()(`.${this.getOption("appTag")}-page`).css("height", a - t), s()(`.${this.getOption("appTag")}-page`).attr("height", a - t), s()(`.${this.getOption("appTag")}-page`).css("top", e), s()(`.${this.getOption("appTag")}-page`).css("width", i), s()(`.${this.getOption("appTag")}-page`).attr("width", i)
                }
            })
        },
        21304: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                MainView: () => f
            });
            var a = i(19755),
                o = i.n(a),
                n = i(13469),
                s = i.n(n),
                r = i(62353),
                l = i(40543),
                c = i(89446),
                p = i(10972),
                b = i(27091),
                d = i.n(b),
                g = new URL(i(66010), i.b);
            const h = '<div id="page-fibbage" class="page green"> <div id="player"> <h1><%=username%></h1> </div> <div id="fibbage-preload" class="fibbage-preload"></div> <div id="game" class="game pt-pageholder"> <div class="pt-page-off state-lobby fibbage-page"> <div class="container"> <br/><span id="fibbage-lobby-text"></span><br/> <form class="pure-form"> <button type="button" id="fibbage-startgame" class="button-fibbage button-xlarge pure-button pure-input-1">EVERYBODY\'S IN</button> <button type="button" id="fibbage-stopcountdown" class="button-fibbage button-xlarge pure-button pure-input-1">CANCEL</button> <button type="button" id="fibbage-sameplayers" class="button-fibbage button-xlarge pure-button pure-input-1 fibbage-endbuttons">SAME PLAYERS</button> <button type="button" id="fibbage-newplayers" class="button-fibbage button-xlarge pure-button pure-input-1 fibbage-endbuttons">NEW PLAYERS</button> </form> </div> </div> <div class="pt-page-off state-nothing fibbage-page"> <div class="logo-image" style="width:100%"> <img class="pure-img" style="margin-left:auto;margin-right:auto" src="' + d()(g) + '"> </div> </div> <div class="pt-page-off state-round fibbage-page"> <div class="round-main"><p class="round-text"></p></div> </div> <div class="pt-page-off state-choosing fibbage-page"> <div class="container"> <br/><span>You\'re choosing the category!</span><br/> <div class="button-container"> <form class="pure-form"> <fieldset class="button-fieldset"> </fieldset> </form> </div> </div> </div> <div class="pt-page-off state-enterlie fibbage-page"> <div class="container"> <br/><div id="question-text"></div><br/> <div id="fibbage-submit-alert" class="alert alert-info">Alert message goes here</div> <form class="pure-form" id="fibbage-enterlie-field"> <div class="pure-u-1"> <input id="fibbage-lie-input" name="fibbage-lie" class="pure-input-1 capitalize jbg-input fibbage-lie-input" type="text" maxlength="45" placeholder="ENTER A LIE" autocapitalize="off" autocorrect="off" autocomplete="off"> </div> <button type="button" id="fibbage-lieforme" class="button-fibbage button-large pure-button capitalize left">Lie for me<br/>(Half Points)</button> <button type="submit" id="fibbage-submitlie" class="button-fibbage button-large pure-button capitalize right"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;SEND</button> <div id="fibbage-submitlie-loading" style="display:none" class="button-fibbage-loading"></div> </form> <div id="fibbage-suggestions" class="pure-g"></div> </div> </div> <div class="pt-page-off state-chooselie fibbage-page"> <div class="container"> <br/><span id="chooselie-text"></span><br/> <form id="fibbage-chooselie" class="pure-form"></form> </div> </div> <div class="pt-page-off state-chooselikes fibbage-page"> <div class="container"> <br/><span id="chooselikes-choice"></span><br/> <span id="chooselikes-text"></span><br/> <form id="fibbage-chooselikes" class="pure-form"></form> </div> </div> <div class="pt-page-off state-liereceived fibbage-page"> <br/><span>LIE ENTERED!<br/>WAITING FOR OTHER PLAYERS.</span><br/> </div> <div class="pt-page-off state-lyingdone fibbage-page"> <br/><span>LYING IS DONE!</span><br/> </div> <div class="pt-page-off state-notchoosing fibbage-page"> <br/><span id="notchoosing"></span><br/> </div> </div> </div> ';

            function u(e, t, i, a, o, n, s) {
                try {
                    var r = e[n](s),
                        l = r.value
                } catch (e) {
                    return void i(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(a, o)
            }
            const f = r.I.extend({
                template: s().template(h),
                lacksAudience: !0,
                previousState: "",
                events: {
                    "click #fibbage-startgame": "startGame",
                    "click #fibbage-stopcountdown": "stopCountdown",
                    "click #fibbage-sameplayers": "newGameSamePlayers",
                    "click #fibbage-newplayers": "newGameNewPlayers",
                    "click .fibbage-category-button": "chooseCategory",
                    "click #fibbage-lieforme": "lieForMe",
                    "click #fibbage-submitlie": "submitLie",
                    "click .fibbage-suggestion-button": "chooseSuggestion",
                    "click .fibbage-lie-button": "chooseLie",
                    "click .fibbage-like-button": "toggleLike"
                },
                update() {
                    var e, t = this;
                    return (e = function*() {
                        const e = t.model.get("player"),
                            i = t.model.get("room"),
                            a = e ? e.state : "",
                            n = i ? i.state : "";
                        let s;
                        if (void 0 !== e && void 0 !== e.playerColor && o()("#player").css("background-color", e.playerColor), "RoomFull" !== a)
                            if ("GameLocked" !== a) {
                                if (n && "Lobby" === n.split("_")[0] && a === n) {
                                    t.hideLobbyButtons(), o()("#player").css("background-color", e.playerColor);
                                    const i = n.split("_")[1];
                                    "WaitingForMore" === i ? o()("#fibbage-lobby-text").html("Waiting for all players to join") : "CanStart" === i ? (o()("#fibbage-lobby-text").html("Press this button when everybody has joined"), o()("#fibbage-startgame").show()) : "Countdown" === i ? (o()("#fibbage-lobby-text").html("Press this button to cancel game start"), o()("#fibbage-stopcountdown").show()) : "PostGame" === i && (o()("#fibbage-lobby-text").html("What do you want to do?"), o()(".fibbage-endbuttons").show()), t.showScreen(".state-lobby")
                                } else if ("Gameplay_Logo" === n) t.showScreen(".state-nothing");
                                else if ("Gameplay_Round" === n) o()(".round-text").html(`ROUND ${i.round}`), t.showScreen(".state-round");
                                else if ("Gameplay_CategorySelection" === n && "Gameplay_CategorySelection" === a)
                                    if (e.isChoosing) {
                                        let e = "";
                                        for (s = 0; s < i.choices.length; s++) e += `<button type="button" data-num="${s}" class="fibbage-category-button button-fibbage button-large pure-button pure-input-1">${i.choices[s]}</button>`;
                                        o()(".button-fieldset").html(e), t.showScreen(".state-choosing")
                                    } else o()("#notchoosing").html(`${c.c.safeText(i.choosingPlayerName)} is picking a category`), t.showScreen(".state-notchoosing");
                                else if ("Gameplay_EnterLie" === n)
                                    if ("Gameplay_EnterLie" === a) {
                                        if (".state-enterlie" !== t.activeScreen) {
                                            o()("#fibbage-lie-input").val(""), o()("#fibbage-enterlie-field").show(), o()("#fibbage-suggestions").hide(), o()("#fibbage-submit-alert").hide(), o()(".state-enterlie #question-text").html(i.question);
                                            let t = "";
                                            for (s = 0; s < e.suggestions.length; s++) t += `<button type="button" data-num="${s}" class="fibbage-suggestion-button gridmargin button-fibbage button-large pure-button pure-u-1">${e.suggestions[s]}</button>`;
                                            o()("#fibbage-suggestions").html(t)
                                        }
                                        if (e.showError) {
                                            const e = o()("#fibbage-submit-alert");
                                            o()("#fibbage-submit-alert").html("You entered the truth! Enter a lie!"), e.addClass("alert-info"), e.removeClass("alert-danger"), e.show()
                                        }
                                        t.showScreen(".state-enterlie")
                                    } else "Gameplay_LieReceived" === a && t.showScreen(".state-liereceived");
                                else if ("Gameplay_LyingDone" === n) t.showScreen(".state-lyingdone");
                                else if ("Gameplay_ChooseLie" === n && "Gameplay_ChooseLie" === a)
                                    if (e.choosingDone || void 0 !== e.chosen) {
                                        o()("#chooselikes-choice").html(e.chosen ? `You chose: ${c.c.safeText(e.chosen)}` : "You didn't make a choice"), o()("#chooselikes-text").html("Award bonus likes");
                                        let i = "";
                                        for (s = 0; s < e.choices.length; s++) {
                                            const t = e.likes.indexOf(e.choices[s]) >= 0,
                                                a = t ? "fa-check-square-o" : "fa-square-o";
                                            i += `<button type="button" data-num="${s}" class="pure-input-1 fibbage-like-button button-large pure-button ${t?"button-fibbage-liked":"button-fibbage-like"}"><div class="like-text">${c.c.safeText(e.choices[s])}</div><div class="like-checkbox"><i class="fa ${a} fa-lg"></i></div></button>`
                                        }
                                        o()("#fibbage-chooselikes").html(i), t.showScreen(".state-chooselikes")
                                    } else {
                                        o()("#chooselie-text").html("find the truth!");
                                        let i = "";
                                        const a = "pure-input-1 fibbage-lie-button button-large pure-button button-fibbage";
                                        for (s = 0; s < e.choices.length; s++) i += `<button type="button" data-num="${s}" class="${a}">`, i += c.c.safeText(e.choices[s]), i += "</button>";
                                        o()("#fibbage-chooselie").html(i), t.showScreen(".state-chooselie")
                                    } t.onResize()
                            } else l.b.show(Error("Game is in progress. Please wait for a new game to start."), {
                                willClose: () => {
                                    window.location.reload(!0)
                                }
                            });
                        else l.b.show(Error("The room is full"), {
                            willClose: () => {
                                window.location.reload(!0)
                            }
                        })
                    }, function() {
                        var t = this,
                            i = arguments;
                        return new Promise((function(a, o) {
                            var n = e.apply(t, i);

                            function s(e) {
                                u(n, a, o, s, r, "next", e)
                            }

                            function r(e) {
                                u(n, a, o, s, r, "throw", e)
                            }
                            s(void 0)
                        }))
                    })()
                },
                hideLobbyButtons() {
                    o()("#fibbage-startgame").hide(), o()("#fibbage-stopcountdown").hide(), o()(".fibbage-endbuttons").hide()
                },
                startGame: () => (p.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0
                }), !1),
                stopCountdown: () => (p.app.client.send("SendMessageToRoomOwner", {
                    cancelStartGame: !0
                }), !1),
                chooseCategory(e) {
                    const t = o()(e.target).data("num");
                    return p.app.client.send("SendMessageToRoomOwner", {
                        chosenCategory: t
                    }), !1
                },
                lieForMe: () => (o()("#fibbage-enterlie-field").hide(), o()("#fibbage-suggestions").show(), !1),
                submitLie() {
                    let e = this.sanitize(o()("#fibbage-lie-input").val()).toUpperCase();
                    if (e = e.replace(/\s\s+/g, " ").trim(), 0 === e.length) {
                        const e = o()("#fibbage-submit-alert");
                        return o()("#fibbage-submit-alert").html("You can't enter nothing! Use a suggestion if you need help!"), e.removeClass("alert-info"), e.addClass("alert-danger"), e.show(), !1
                    }
                    return p.app.client.send("SendMessageToRoomOwner", {
                        lieEntered: e,
                        usedSuggestion: !1
                    }), !1
                },
                chooseSuggestion(e) {
                    const t = o()(e.target).data("num"),
                        i = this.model.get("player").suggestions[t],
                        a = this.sanitize(i).toUpperCase();
                    return p.app.client.send("SendMessageToRoomOwner", {
                        lieEntered: a,
                        usedSuggestion: !0
                    }), !1
                },
                chooseLie(e) {
                    const t = o()(e.target).data("num"),
                        i = this.model.get("player").choices[t];
                    return p.app.client.send("SendMessageToRoomOwner", {
                        choice: i
                    }), !1
                },
                toggleLike(e) {
                    const t = o()(e.currentTarget).data("num"),
                        i = this.model.get("player").likes.indexOf(this.model.get("player").choices[t]) >= 0;
                    if (!i) {
                        o()(e.currentTarget).removeClass(i ? "button-fibbage-liked" : "button-fibbage-like"), o()(e.currentTarget).addClass(i ? "button-fibbage-like" : "button-fibbage-liked"), o()(e.currentTarget).find(".like-checkbox").html(`<i class="fa ${i?"fa-square-o":"fa-check-square-o"} fa-lg"></i>`);
                        const a = this.model.get("player").choices[t];
                        p.app.client.send("SendMessageToRoomOwner", {
                            like: a
                        })
                    }
                    return !1
                },
                newGameSamePlayers: () => (p.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_Continue"
                }), !1),
                newGameNewPlayers: () => (p.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_NewGame"
                }), !1),
                sanitize: e => e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,]/gi, "").replace(/'/g, "’").trim()
            })
        },
        27091: e => {
            "use strict";
            e.exports = function(e, t) {
                return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), t.hash && (e += t.hash), t.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(e) ? '"'.concat(e, '"') : e) : e
            }
        },
        66010: (e, t, i) => {
            "use strict";
            e.exports = i.p + "games/fibbage/77140d3bd3d8a93bcf8f.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/1304.7b0b47ebcbbad646165b.js.map