(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/pollposition"], {
        47214: (t, e, o) => {
            "use strict";
            o.d(e, {
                E: () => w
            });
            var i = o(13469),
                s = o.n(i),
                n = o(19755),
                a = o.n(n),
                l = o(72316),
                p = o.n(l),
                r = o(63574),
                c = o.n(r),
                h = o(10972),
                d = o(2720);

            function u(t, e, o, i, s, n, a) {
                try {
                    var l = t[n](a),
                        p = l.value
                } catch (t) {
                    return void o(t)
                }
                l.done ? e(p) : Promise.resolve(p).then(i, s)
            }

            function g(t) {
                return function() {
                    var e = this,
                        o = arguments;
                    return new Promise((function(i, s) {
                        var n = t.apply(e, o);

                        function a(t) {
                            u(n, i, s, a, l, "next", t)
                        }

                        function l(t) {
                            u(n, i, s, a, l, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function m(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }
            const b = c().View.extend({
                el: "#banner",
                template: s().template('\n        <div class="banner-image"></div>\n        <div class="banner-text"></div>\n        <div class="banner-cta"></div>\n    '),
                events: {
                    click: "onBannerClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: ["visible", "theme"],
                            onGet(t) {
                                let [e, o] = t, i = o || "no-theme";
                                return e && (i += " show"), i
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
                    h.app.analytics.trackEvent({
                        category: "SlideBanner",
                        action: "SlideBannerClicked",
                        label: this.getCampaign(),
                        value: 0
                    }), this.model.get("url") && window.open(this.model.get("url"), "_blank")
                },
                onRender() {
                    this.stickit()
                },
                visibleDidChange(t, e) {
                    setTimeout((() => {
                        a()(window).trigger("resize")
                    }), .5), e && h.app.analytics.trackEvent({
                        category: "SlideBanner",
                        action: "SlideBannerOn",
                        label: this.getCampaign(),
                        value: 0
                    })
                },
                getCampaign() {
                    const t = this.model.get("url");
                    if (!t) return "";
                    let e = "";
                    return t.split("?")[1] && (e = new URLSearchParams(window.location.search).get("utm_campaign") || ""), e
                }
            });
            class w {
                static get isVisible() {
                    return !!this.view && "on" === this.view.state
                }
                static update(t, e) {
                    var o = this;
                    return g((function*() {
                        e && "PostGame" === e.lobbyState ? (o.view || (yield o.init(t, e)), o.show()) : o.hide()
                    }))()
                }
                static init(t) {
                    var e = this;
                    return g((function*() {
                        t ? (e.bannerData = yield e.loadBannerData(t), e.bannerData && (e.view = new b({
                            model: new(p().Model)(e.bannerData)
                        }), e.isInitialized = !0)) : e.bannerData = !1
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
                static loadBannerData(t) {
                    return g((function*() {
                        try {
                            const e = yield fetch(d.v.banners.url), o = yield e.json();
                            return !(!o || !o.postGameBanners) && o.postGameBanners[t]
                        } catch (t) {
                            return console.error("Unable to load banner data", t), !1
                        }
                    }))()
                }
            }
            m(w, "view", null), m(w, "isInitialized", !1), m(w, "bannerConfig", null)
        },
        62353: (t, e, o) => {
            "use strict";
            o.d(e, {
                I: () => w
            });
            var i = o(13469),
                s = o.n(i),
                n = o(19755),
                a = o.n(n),
                l = o(72316),
                p = o.n(l),
                r = o(63574),
                c = o.n(r),
                h = o(10972),
                d = o(81127),
                u = o(40543),
                g = o(89446),
                m = o(47214);

            function b(t, e, o, i, s, n, a) {
                try {
                    var l = t[n](a),
                        p = l.value
                } catch (t) {
                    return void o(t)
                }
                l.done ? e(p) : Promise.resolve(p).then(i, s)
            }
            const w = c().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(t) {
                    this.mergeOptions(t, ["appId", "appTag"]), h.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), h.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(p().Model)({});
                    const e = h.app.client.parseEntities();
                    this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), h.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), h.app.client.on("client:connection", this.onConnectionMessageWithContext), h.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), h.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", g.c.safeText(h.app.client.name), {
                        silent: !0
                    }), this.$el.html(this.template(this.model.toJSON())), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
                },
                onEntityDidChange(t, e) {
                    this.model.unset(t, {
                        silent: !0
                    }), this.model.set(t, e)
                },
                controllerUpdate() {
                    const t = this.model.get("room") || {},
                        e = t.state || "";
                    let o = t.lobbyState;
                    o || -1 === e.indexOf("_") || (o = t.state.split("_")[1]), "PostGame" === o || "Credits" === e || "GameOver" === e || "PostGame" === e || "DayEnd" === e || t.gameResults ? m.E.isInitialized ? m.E.show() : m.E.init(this.getOption("appTag")).then((() => {
                        m.E.show()
                    })) : m.E.hide(), h.app.storage && h.app.storage.isSupported && t.platformId && h.app.storage.setTag(`platform-${t.platformId}`)
                },
                update() {
                    return (t = function*() {
                        return null
                    }, function() {
                        var e = this,
                            o = arguments;
                        return new Promise((function(i, s) {
                            var n = t.apply(e, o);

                            function a(t) {
                                b(n, i, s, a, l, "next", t)
                            }

                            function l(t) {
                                b(n, i, s, a, l, "throw", t)
                            }
                            a(void 0)
                        }))
                    })();
                    var t
                },
                caughtError(t) {
                    throw t
                },
                onAttach() {
                    this.update().catch(this.caughtError), a()(".gallery-link").click(this.artifactClicked.bind(this)), h.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(t) {
                    let e = `<div class='icon-${h.app.client.roles.broadcaster.platform}'>${h.app.client.roles.broadcaster.name}</div>`;
                    e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : h.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), u.b.show("custom", {
                        html: e,
                        position: "bottom",
                        timer: t,
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
                    this.model.stopListening(), h.app.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), h.app.client.off("client:connection", this.onConnectionMessageWithContext), h.app.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), h.app.client.off("client:disconnected", this.onDisconnectedWithContext)
                },
                artifactClicked() {
                    h.app.analytics.trackEvent({
                        category: "PostGame",
                        action: "galleryClicked",
                        label: this.getOption("appTag")
                    }), d.Q.setAsViewed(0)
                },
                showScreen(t, e) {
                    const o = a()(t);
                    return this.activeScreen && t === this.activeScreen || (this.activeScreen && (a()(this.activeScreen).fadeOut("fast", (() => {})), a()(this.activeScreen).show(), a()(this.activeScreen).addClass("pt-page-off")), o.hide(), o.removeClass("pt-page-off"), o.removeClass("pt-page-moveToLeft"), o.fadeIn("fast", (() => {
                        e && e()
                    })), this.activeScreen = t, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = s().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    u.b.vibrate()
                },
                trackScreenView() {
                    h.app.analytics.trackScreenView(this.getOption("appTag")), h.app.storage && h.app.storage.isSupported && h.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    h.app.storage && h.app.storage.isSupported && (h.app.storage.remove("roomCode"), h.app.storage.remove("reconnect")), u.b.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected() {
                    u.b.show("error", {
                        titleText: "Disconnected",
                        text: "You have been disconnected.",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage(t) {
                    const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
                    if (u.b.show("toast", {
                            text: e
                        }), "connected" === t.status) {
                        const t = h.app.client.parseEntities();
                        this.model.set(t)
                    }
                },
                onResize() {
                    const t = a()("#player").outerHeight(!0) || 0,
                        e = m.E.isVisible ? a()("#slide-in-banner").outerHeight(!0) : 0,
                        o = a()(window).width(),
                        i = a()(window).height() - t;
                    a()(`.${this.getOption("appTag")}-page`).css("height", i - e), a()(`.${this.getOption("appTag")}-page`).attr("height", i - e), a()(`.${this.getOption("appTag")}-page`).css("top", t), a()(`.${this.getOption("appTag")}-page`).css("width", o), a()(`.${this.getOption("appTag")}-page`).attr("width", o)
                }
            })
        },
        57879: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                MainView: () => d
            });
            var i = o(19755),
                s = o.n(i),
                n = o(13469),
                a = o.n(n),
                l = o(62353),
                p = o(10972),
                r = o(65243),
                c = o(40543);

            function h(t, e, o, i, s, n, a) {
                try {
                    var l = t[n](a),
                        p = l.value
                } catch (t) {
                    return void o(t)
                }
                l.done ? e(p) : Promise.resolve(p).then(i, s)
            }
            const d = l.I.extend({
                template: a().template('<div id="page-pollposition" class="page white pollposition"> <div id="player" class="pollposition-player"> <div style="display:inline-block;vertical-align:middle"> <div id="pollposition-character" style="width:40px;height:40px;display:none"></div> </div> <span style="vertical-align:middle" class="pollposition-text-it"><%=username%></span> </div> <div id="pollposition-preload" class="pollposition-preload"></div> <div id="game" class="game pt-pageholder pollposition-background"> <div class="pt-page-off state-lobby pollposition-page"> <div class="container"> <p id="pollposition-lobby-text" class="pollposition-text"></p> <form class="pure-form"> <button type="button" id="pollposition-startgame" class="pollposition-button button-xlarge pure-button pure-input-1"><span>everybody\'s in</span></button> <button type="button" id="pollposition-stopcountdown" class="pollposition-button button-xlarge pure-button pure-input-1"><span>cancel</span></button> </form> </div> </div> <div class="pt-page-off state-post-lobby pollposition-page"> <div class="container"> <p id="pollposition-post-lobby-text" class="pollposition-text"></p> <form class="pure-form"> <button type="button" id="pollposition-sameplayers" class="pollposition-button button-xlarge pure-button pure-input-1 pollposition-endbuttons"><span>same players</span></button> <button type="button" id="pollposition-newplayers" class="pollposition-button button-xlarge pure-button pure-input-1 pollposition-endbuttons"><span>new players</span></button> </form> <div align="center" id="pollposition-game-results" class="pollposition-results-padded"></div> </div> </div> <div class="pt-page-off state-nothing pollposition-page"> </div> <div class="pt-page-off state-round pollposition-page"> <div class="container"> <div class="round-main"><p class="pollposition-text round-text"></p></div> </div> </div> <div class="pt-page-off state-upordown-sent pollposition-page"> <div class="container"> <p id="pollposition-upordown-received" class="pollposition-text"></p> <p class="pollposition-text">thanks for your selection</p> </div> </div> <div class="pt-page-off state-choosecategory pollposition-page"> <div class="container"> <p id="choosecategory-text" class="pollposition-text"></p> <form id="pollposition-choosecategory" style="width:100%"> </form> </div> </div> <div class="pt-page-off state-waitforcategory pollposition-page"> <div class="container"> <p id="waitforcategory-text" class="pollposition-text"></p> </div> </div> <div class="pt-page-off state-showquestion pollposition-page"> <div class="container"> <p class="pollposition-text survey-text"></p> <p class="pollposition-text question-text"></p> </div> </div> <div class="pt-page-off state-waitforallpercentages pollposition-page"> <div class="container"> <p class="pollposition-text">Thanks for your input.<br/>Waiting for other players.</p> </div> </div> <div class="pt-page-off state-waitforaudience pollposition-page"> <div class="container"> <p class="pollposition-text">Thanks for your input.<br/>Waiting for the audience.</p> </div> </div> <div class="pt-page-off state-waitforpercentage pollposition-page"> <div class="container"> <p class="pollposition-text survey-text"></p> <p class="pollposition-text question-text"></p> <p id="waitingforpercentage-text" class="pollposition-text"></p> </div> </div> <div class="pt-page-off state-enterpercentage pollposition-page noselect"> <div class="container"> <div class="pollposition-text question-text pollposition-range-buffer"></div> <div id="pollposition-submit-alert" class="alert alert-info pollposition-range-buffer">Alert message goes here</div> <svg id="pollposition-percentage-picker" role="slider" tabindex="0" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" aria-label="Percent" class="pollposition-percentage-picker" viewBox="-38 -38 76 76"> <circle class="background" r="16" cx="0" cy="0"/> <circle id="percent-display" class="percent-display" r="16" cx="0" cy="0"/> <circle class="helper" r="1.5" cx="-32" cy="0"/> <line class="helper" x1="0" y1="0" x2="-32" y2="0"></line> <circle class="center" r="1" cx="0" cy="0"/> <text id="percent" class="percent" x="-2" y="10" text-anchor="middle" font-size="30"></text> <text id="percent-sign" class="percent-sign" x="14" y="-2" font-size="12">%</text> </svg> <div class="pollposition-range-buffer"> <form class="pure-form" id="pollposition-enterpercentage-field"> <div class=""> <button type="submit" id="pollposition-submitpercentage" class="pollposition-button"><span>Submit</span></button> <div id="pollposition-submitpercentage-loading" class="button-pollposition-loading right" style="display:none;width:110px;height:48px;margin-top:10px"></div> </div> </form> </div> </div> </div> <div class="pt-page-off state-chooseupordown pollposition-page"> <div class="container"> <p class="pollposition-text survey-text"></p> <p class="pollposition-text question-text"></p> <p id="chooseupordown-text" class="pollposition-text pollposition-text-medium"></p> <form id="pollposition-chooseupordown" style="width:100%" class="pollposition-hangingform"> </form> </div> </div> <div class="pt-page-off state-waitforupordown pollposition-page"> <div class="container"> <p class="pollposition-text">Thanks for your input.<br/>Waiting for other players.</p> </div> </div> <div class="pt-page-off state-upordowndone pollposition-page"> <div class="container"> <p class="pollposition-text">done!</p> </div> </div> <div class="pt-page-off state-choosemultiple pollposition-page"> <div class="container"> <p class="pollposition-text question-text"></p> <p class="pollposition-text selection-text"></p> <form id="pollposition-choosemultiple" style="width:100%;display:block" class="pollposition-hangingform"> </form> </div> </div> <div class="pt-page-off state-waitformultiple pollposition-page"> <div class="container"> <p class="pollposition-text">Thanks for your input.<br/>Waiting for other players.</p> </div> </div> <div class="pt-page-off state-audience-wait pollposition-page"> <div class="container"> <p class="pollposition-text audience-wait-text"></p> <p class="pollposition-text-medium audience-usage-text"></p> </div> </div> <div class="pt-page-off state-audience-choice-sent pollposition-page"> <div class="container"> <p id="pollposition-audience-choice-received" class="pollposition-text"></p> <p class="pollposition-text">thanks for your selection</p> </div> </div> <div class="pt-page-off state-audience-chose-option pollposition-page"> <div class="container"> <p class="pollposition-text category-text"></p> <p class="pollposition-text pollquestion-text"></p> <form id="pollposition-audiencechooseoption" style="width:100%;display:block" class="pollposition-hangingform"> </form> </div> </div> <div class="pt-page-off state-choosecharacter pollposition-page"> <div class="container" align="center"> <p id="pollposition-characterlobby-text" class="pollposition-text"></p> <form class="pure-form"> <button type="button" id="pollposition-character-startgame" class="pollposition-button button-xlarge pure-button pure-input-1"><span>everybody\'s in</span></button> <button type="button" id="pollposition-character-stopcountdown" class="pollposition-button button-xlarge pure-button pure-input-1"><span>cancel</span></button> </form> <p id="pollposition-choosecharacter-text" class="pollposition-text"></p> <form id="pollposition-choosecharacter" class="pollposition-character-list" style="max-width:300px" class="pure-form"> </form> </div> </div> </div> </div> '),
                percentageInterval: null,
                lastPercentage: -1,
                currentPercentage: 0,
                percentageDelayTime: 1e3,
                percentageSent: !1,
                events: {
                    "click #pollposition-startgame": "startGame",
                    "click #pollposition-stopcountdown": "stopCountdown",
                    "click #pollposition-character-startgame": "startGame",
                    "click #pollposition-character-stopcountdown": "stopCountdown",
                    "click #pollposition-lockroom": "lockRoom",
                    "click .pollposition-category-button": "submitCategory",
                    "click #pollposition-sameplayers": "newGameSamePlayers",
                    "click #pollposition-newplayers": "newGameNewPlayers",
                    "click .pollposition-character-button": "submitCharacter",
                    "click .pollposition-choice-button": "submitChoice",
                    "click #pollposition-submitpercentage": "submitPercentage",
                    "input #pollposition-percentage": "updatePercentage",
                    "change #pollposition-percentage": "updatePercentage",
                    "click #pollposition-percentage-decrease": "decreasePercentage",
                    "click #pollposition-percentage-increase": "increasePercentage"
                },
                initialize(t) {
                    l.I.prototype.initialize.apply(this, [t]), this.currentRange = void 0
                },
                update() {
                    var t, e = this;
                    return (t = function*() {
                        p.app.client.isRole("audience") ? e.updateAudience() : e.model.get("player") && e.updatePlayer(), e.onResize()
                    }, function() {
                        var e = this,
                            o = arguments;
                        return new Promise((function(i, s) {
                            var n = t.apply(e, o);

                            function a(t) {
                                h(n, i, s, a, l, "next", t)
                            }

                            function l(t) {
                                h(n, i, s, a, l, "throw", t)
                            }
                            a(void 0)
                        }))
                    })()
                },
                updatePlayer() {
                    const t = this.model.get("player") || {},
                        e = this.model.get("room") || {},
                        o = t ? t.state : "",
                        i = e ? e.state : "";
                    let n;
                    if (this.percentageInterval && (clearInterval(this.percentageInterval), this.percentageInterval = null), void 0 !== t && void 0 !== t.character && s()("#pollposition-character").attr("class", `pollposition-character ${t.character.name}`).show(), "RoomFull" === o) return c.b.show(Error("The room is full"), {
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    }), void this.onResize();
                    if ("GameLocked" === o) return c.b.show(Error("Game is in progress. Please wait for a new game to start."), {
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    }), void this.onResize();
                    if (i && "Lobby" === i) {
                        this.hideLobbyButtons();
                        const i = e.lobbyState;
                        if ("Lobby_ChooseCharacter" === o) {
                            this.hideCharacterLobbyButtons(), s()("#pollposition-choosecharacter-text").html("Select your agent");
                            let o = "";
                            for (n = 0; n < e.characters.length; n++) {
                                const i = e.characters[n].name,
                                    s = e.characters[n].id,
                                    a = void 0 !== t.character && e.characters[n].id === t.character.id ? " player " : "",
                                    l = a || null == e.characters[n].isSelected ? "" : " selected ";
                                o += `<button type='button' ${null!=e.characters[n].isSelected?" disabled ":""} data-character='${s}' aria-label='${i}' class='pollposition-character-button pollposition-character ${i} ${a} ${l}' style='width:64px;height:64px;'></button>`
                            }
                            return s()("#pollposition-choosecharacter").html(o), this.showScreen(".state-choosecharacter"), t.isAllowedToStartGame && ("CanStart" === i ? (s()("#pollposition-characterlobby-text").html("press this button when everybody has joined"), s()("#pollposition-character-startgame").show()) : "Countdown" === i && (s()("#pollposition-characterlobby-text").html("press this button to cancel game start"), s()("#pollposition-character-stopcountdown").show())), void this.onResize()
                        }
                        if ("PostGame" === i) {
                            t.isAllowedToStartGame ? (s()("#pollposition-post-lobby-text").html("what do you want to do?"), s()(".pollposition-endbuttons").show()) : s()("#pollposition-post-lobby-text").html("Sit back and relax!");
                            let o = '<table class="table table-striped table-bordered"><thead><tr><th>Rank</th><th>Player</th><th>Score</th></tr></thead><tbody>';
                            for (n = 0; n < e.gameResults.players.length; n++) o += `<tr><td>${e.gameResults.players[n].rank.toString()}</td><td><div style='display:inline-block;vertical-align:middle'><div class='pollposition-character ${e.gameResults.players[n].icon}' style='width:32px; height:32px' /></div><span>${e.gameResults.players[n].name}</span></td><td>${e.gameResults.players[n].score}</td></tr>`;
                            return o += "</tbody></table>", s()("#pollposition-game-results").html(o), void this.showScreen(".state-post-lobby")
                        }
                        if (!t.isAllowedToStartGame) return s()("#pollposition-lobby-text").html("Sit back and relax!"), void this.showScreen(".state-lobby");
                        "WaitingForMore" === i ? s()("#pollposition-lobby-text").html("waiting for all players to join") : "CanStart" === i ? (s()("#pollposition-lobby-text").html("press this button when everybody has joined"), s()("#pollposition-startgame").show()) : "Countdown" === i && (s()("#pollposition-lobby-text").html("press this button to cancel game start"), s()("#pollposition-stopcountdown").show()), this.showScreen(".state-lobby")
                    } else if ("Gameplay_Logo" === i) this.showLogo();
                    else if ("Gameplay_PickCategory" === i) {
                        if ("Gameplay_WaitForCategory" === o) s()("#waitforcategory-text").html(`Waiting for ${e.player} to pick a category.`), this.showScreen(".state-waitforcategory");
                        else if ("Gameplay_PickCategory" === o) {
                            s()("#choosecategory-text").html("Pick a category");
                            let e = "";
                            for (n = 0; n < t.choices.length; n++) e += `<button type='button' data-category='${t.choices[n].id.toString()}' class='pure-input-1 pollposition-category-button pure-button button-large'>${t.choices[n].text}</button>`, e += "<br>";
                            s()("#pollposition-choosecategory").html(e), this.showScreen(".state-choosecategory")
                        }
                    } else if ("Gameplay_ShowQuestion" === i) s()(".state-showquestion .question-text").html(e.question), this.showScreen(".state-showquestion");
                    else if ("Gameplay_EnterPercentage" === i) "Gameplay_EnterPercentage" === o ? (this.currentRange || this.startRangeInterface(), ".state-enterpercentage" !== this.activeScreen && (s()(".state-enterpercentage .question-text").html(e.question), this.setDefaultPercentage(50), s()("#pollposition-enterpercentage-field").show(), s()("#pollposition-submitpercentage").show(), s()("#pollposition-submit-alert").hide(), this.lastPercentage = -1, this.percentageSent = !1), this.enableLoadingButton("#pollposition-submitpercentage", !0), this.percentageInterval = setInterval((() => {
                        this.percentageSent || this.lastPercentage === this.currentRange.getPercentage() || (this.lastPercentage = this.currentRange.getPercentage(), this.sendPercentageUpdate(this.currentRange.getPercentage()))
                    }), this.percentageDelayTime), this.showScreen(".state-enterpercentage"), this.currentRange.resize()) : "Gameplay_WaitForPercentage" === o ? (".state-waitforpercentage" !== this.activeScreen && (s()(".state-waitforpercentage .question-text").html(e.question), s()("#waitingforpercentage-text").html(`Waiting for ${e.player} to enter a percentage.`)), this.showScreen(".state-waitforpercentage")) : "Gameplay_WaitForAllPercentages" === o ? this.showScreen(".state-waitforallpercentages") : "Gameplay_WaitForAudience" === o ? this.showScreen(".state-waitforaudience") : this.showLogo();
                    else if ("Gameplay_UpOrDownDone" === i) this.showScreen(".state-upordowndone");
                    else if ("Gameplay_ChooseUpOrDown" === i)
                        if ("Gameplay_WaitForChooseUpOrDown" === o) this.showScreen(".state-waitforupordown");
                        else {
                            s()(".state-chooseupordown .survey-text").html(e.survey), s()(".question-text").html(e.question), s()("#chooseupordown-text").html("Do you think the correct answer is:");
                            let t = "";
                            for (n = 0; n < e.choices.length; n++) t += `<button type='button' data-choice='${e.choices[n].id.toString()}' class='pollposition-button pollposition-high-low-button pollposition-choice-button'><span>${e.choices[n].id.toString().replace("_"," ")}</span></button>`;
                            s()("#pollposition-chooseupordown").html(t), this.showScreen(".state-chooseupordown")
                        }
                    else if ("Gameplay_ChooseMultiple" === i)
                        if ("Gameplay_WaitForChooseMultiple" === o) this.showScreen(".state-waitformultiple");
                        else {
                            if (s()(".state-choosemultiple .question-text").html(e.question), "Gameplay_ChooseMultiple" === o) {
                                let e = "";
                                for (n = 0; n < t.choices.length; n++) t.choices[n].picked ? e += `<button type='button' data-choice='-1' class='pollposition-button pollposition-choice-button' disabled><span>${t.choices[n].text}</span></button>` : e += `<button type='button' data-choice='${n}' class='pollposition-button pollposition-choice-button'><span>${t.choices[n].text}</span></button>`;
                                s()(".state-choosemultiple .selection-text").html(t.selection), s()("#pollposition-choosemultiple").html(e)
                            } else s()(".state-choosemultiple .selection-text").html(""), s()("#pollposition-choosemultiple").html("");
                            this.showScreen(".state-choosemultiple")
                        } this.onResize()
                },
                updateAudience() {
                    const t = this.model.get("room"),
                        e = t ? t.state : "",
                        o = t && t.lobbyState ? t.lobbyState : "";
                    let i;
                    if ("Gameplay_EnterPercentage" === e) {
                        s()(".state-audience-chose-option .category-text").html(t.survey), s()(".state-audience-chose-option .pollquestion-text").html(t.poll.question);
                        let e = "";
                        for (i = 0; i < t.poll.choices.length; i++) e += `<button type='button' data-choice='${t.poll.choices[i].id}' class='pollposition-button pollposition-choice-button'><span>${t.poll.choices[i].choice}</span></button>`, e += "<br>";
                        e += "<button type='button' data-choice='-1' class='pollposition-button pollposition-choice-button'><span>This doesn't apply to me</span></button>", s()("#pollposition-audiencechooseoption").html(e), this.showScreen(".state-audience-chose-option")
                    } else if ("Gameplay_ChooseUpOrDown" === e || "Gameplay_ShowQuestion" === e);
                    else if ("Gameplay_ChooseMultiple" === e && t.poll) {
                        void 0 !== t.survey ? s()(".state-audience-chose-option .category-text").html(t.survey) : s()(".state-audience-chose-option .category-text").html(""), s()(".state-audience-chose-option .pollquestion-text").html(t.poll.question);
                        let e = "";
                        for (i = 0; i < t.poll.choices.length; i++) e += `<button type='button' data-choice='${t.poll.choices[i].id}' class='pollposition-button pollposition-choice-button '><span>${t.poll.choices[i].choice}</span></button>`, e += "<br>";
                        s()("#pollposition-audiencechooseoption").html(e), this.showScreen(".state-audience-chose-option")
                    } else if ("Gameplay_Logo" === e) this.showLogo();
                    else if ("Lobby" === e && "PostGame" === o) {
                        this.hideLobbyButtons(), s()("#pollposition-post-lobby-text").html("You’re in the audience!");
                        let e = '<table class="table table-striped table-bordered"><thead><tr><th>Rank</th><th>Player</th><th>Score</th></tr></thead><tbody>';
                        for (i = 0; i < t.gameResults.players.length; i++) e += `<tr><td>${t.gameResults.players[i].rank.toString()}</td><td><div style='display:inline-block;vertical-align:middle'><div class='pollposition-character ${t.gameResults.players[i].icon}' style='width:32px; height:32px' /></div><span>${t.gameResults.players[i].name}</span></td><td>${t.gameResults.players[i].score}</td></tr>`;
                        e += "</tbody></table>", s()("#pollposition-game-results").html(e), this.showScreen(".state-post-lobby")
                    } else s()(".state-audience-wait .audience-wait-text").html("You’re in the audience! Wait for your time to answer."), s()(".state-audience-wait .audience-usage-text").html("Audience answers are used when 5 or more audience members answer the question."), this.showScreen(".state-audience-wait")
                },
                hideLobbyButtons() {
                    s()("#pollposition-startgame").hide(), s()("#pollposition-stopcountdown").hide(), s()(".pollposition-endbuttons").hide()
                },
                hideCharacterLobbyButtons() {
                    s()("#pollposition-character-startgame").hide(), s()("#pollposition-character-stopcountdown").hide()
                },
                startGame: () => (p.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0
                }), !1),
                stopCountdown: () => (p.app.client.send("SendMessageToRoomOwner", {
                    cancelStartGame: !0
                }), !1),
                enableLoadingButton(t, e) {
                    e ? (s()(t).show(), s()(`${t}-loading`).hide()) : (s()(t).hide(), s()(`${t}-loading`).show())
                },
                startRangeInterface() {
                    if (this.enableLoadingButton("#pollposition-submitpercentage", !0), this.currentRange) return;
                    const t = this.$("#pollposition-percentage-picker");
                    this.currentRange = new r.k(t, 10, ["#player", ".pollposition-range-buffer"]), this.currentRange.setPercentage(50)
                },
                sendPercentageUpdate(t) {
                    return !!this.isInt(t) && (p.app.client.send("SendMessageToRoomOwner", {
                        percentageUpdate: t
                    }), !1)
                },
                setDefaultPercentage(t) {
                    this.currentRange.setPercentage(t), this.updatePercentage()
                },
                updatePercentage() {
                    this.currentPercentage = this.currentRange.getPercentage()
                },
                decreasePercentage() {
                    return this.setDefaultPercentage(parseInt(this.currentRange.getPercentage(), 10) - 1), !1
                },
                increasePercentage() {
                    return this.setDefaultPercentage(parseInt(this.currentRange.getPercentage(), 10) + 1), !1
                },
                isInt(t) {
                    return !Number.isNaN(t) && (0 | (e = parseFloat(t))) === e;
                    var e
                },
                submitCharacter(t) {
                    const e = s()(t.currentTarget).data("character");
                    return -1 !== e && p.app.client.send("SendMessageToRoomOwner", {
                        character: e
                    }), s()(t.currentTarget).blur(), !1
                },
                submitPercentage() {
                    const t = this.currentRange.getPercentage();
                    if (!this.isInt(t)) {
                        const t = s()("#pollposition-submit-alert");
                        return s()("#pollposition-submit-alert").html("you can't enter nothing!"), t.removeClass("alert-info"), t.addClass("alert-danger"), t.show(), !1
                    }
                    null != this.percentageInterval && (clearInterval(this.percentageInterval), this.percentageInterval = null), this.percentageSent = !0, this.enableLoadingButton("#pollposition-submitpercentage", !1);
                    const e = {
                        percentageEntered: t
                    };
                    return p.app.client.send("SendMessageToRoomOwner", e), !1
                },
                submitChoice(t) {
                    const e = s()(t.currentTarget).data("choice");
                    return s()(".pollposition-choice-button").attr("disabled", !0), p.app.client.isRole("player") ? p.app.client.send("SendMessageToRoomOwner", {
                        choice: e
                    }) : p.app.client.isRole("audience") && (-1 !== e && p.app.client.sessionSend("vote", "Poll Position Vote", {
                        type: "vote",
                        vote: e
                    }), s()("#pollposition-audiencechooseoption").html(""), s()(".state-audience-wait .audience-wait-text").html("Thanks, audience member!"), s()(".state-audience-wait .audience-usage-text").html("Audience answers are used when 5 or more audience members answer the question."), this.showScreen(".state-audience-wait")), !1
                },
                submitCategory(t) {
                    const e = s()(t.currentTarget).data("category");
                    return p.app.client.isRole("player") && p.app.client.send("SendMessageToRoomOwner", {
                        category: e
                    }), !1
                },
                newGameSamePlayers: () => (p.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_Continue"
                }), !1),
                newGameNewPlayers: () => (p.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_NewGame"
                }), !1),
                showLogo() {
                    this.showScreen(".state-nothing")
                },
                sanitize: t => t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,]/gi, "").replace(/'/g, "’").trim()
            })
        },
        65243: (t, e, o) => {
            "use strict";
            o.d(e, {
                k: () => n
            });
            var i = o(19755),
                s = o.n(i);
            const n = function(t, e, o) {
                this.element = t, this.isEnabled = !0, this.percentage = 50, this.widthMargin = e, this.heightDiffArray = o, this.elementAspectRatio = 1;
                const i = () => {
                    let t = 0;
                    o.forEach((e => {
                        s()(e).each((function() {
                            t += s()(this).outerHeight(!0)
                        }))
                    }));
                    let e = window.innerWidth - this.widthMargin,
                        i = window.innerHeight - t;
                    i < 100 && (i = 100, e = i * (window.innerWidth / window.innerHeight));
                    const n = e / i;
                    this.elementAspectRatio < n ? (s()(this.element)[0].style.width = i / this.elementAspectRatio + "px", s()(this.element)[0].style.height = `${i}px`) : (s()(this.element)[0].style.width = `${e}px`, s()(this.element)[0].style.height = e / this.elementAspectRatio + "px"), window.scrollTo(0, 0)
                };
                window.onresize = i;
                const n = t => {
                        if ("touchmove" === t.type) t.preventDefault();
                        else if ("touchend" === t.type) return void this[t.type]();
                        const e = s()(this.element)[0].getBoundingClientRect(),
                            o = {
                                x: t.targetTouches[0].pageX - e.left,
                                y: t.targetTouches[0].pageY - e.top
                            };
                        this[t.type](o)
                    },
                    a = t => {
                        if ("mousemove" === t.type) t.preventDefault();
                        else if ("mouseup" === t.type) return void this[t.type]();
                        const e = s()(this.element)[0].getBoundingClientRect(),
                            o = {
                                x: t.clientX - e.left,
                                y: t.clientY - e.top
                            };
                        this[t.type](o)
                    };
                this.handleKeyDown = function(t) {
                    let e = !1;
                    switch (t.keyCode) {
                        case 37:
                        case 40:
                            this.setPercentage(this.percentage - 1), e = !0;
                            break;
                        case 39:
                        case 38:
                            this.setPercentage(this.percentage + 1), e = !0;
                            break;
                        case 34:
                            this.setPercentage(this.percentage - 10), e = !0;
                            break;
                        case 33:
                            this.setPercentage(this.percentage + 10), e = !0;
                            break;
                        case 36:
                            this.setPercentage(0), e = !0;
                            break;
                        case 35:
                            this.setPercentage(100), e = !0
                    }
                    e && (t.preventDefault(), t.stopPropagation())
                }, document.addEventListener("touchend", n), this.element.on("touchstart", n), this.element.on("touchmove", n), this.element.on("mousedown", a), this.element.on("mousemove", a), document.addEventListener("mouseup", a), this.element.on("keydown", this.handleKeyDown.bind(this)), this.getPercentage = function() {
                    return this.percentage
                }, this.setPercentage = function(t) {
                    t > 100 && (t = 100), t < 0 && (t = 0), this.percentage = t, this.element.attr("aria-valuenow", this.percentage), this.redrawSvg()
                }, this.redrawSvg = function() {
                    this.element.find("circle.percent-display").css("stroke-dasharray", 1.005 * this.percentage + " 100");
                    const t = this.percentage / 100 * (2 * Math.PI) - Math.PI / 2,
                        e = {
                            x: 35 * Math.cos(t),
                            y: 35 * Math.sin(t)
                        },
                        o = this.element.find("circle.helper");
                    o.attr("cx", e.x), o.attr("cy", e.y);
                    const i = this.element.find("line.helper");
                    i.attr("x2", e.x), i.attr("y2", e.y);
                    const n = this.element.find("text.percent")[0];
                    let a;
                    s()(n).html(this.percentage);
                    try {
                        a = this.element.getElementById("percent").getBBox().width
                    } catch (t) {
                        a = 28.6
                    }
                    a || (a = 28.6), this.element.find("text.percent-sign").attr("x", a / 2)
                }, this.start = function(t) {
                    this.isEnabled && (this.isTouching = !0, this.setPoint(t, !1))
                }, this.move = function(t) {
                    this.isTouching && this.setPoint(t, !0)
                }, this.end = function() {
                    this.isTouching && (this.isTouching = !1, this.element.focus())
                }, this.setPoint = function(t, e) {
                    const o = t.x - parseInt(this.element.width(), 10) / 2,
                        i = t.y - parseInt(this.element.height(), 10) / 2;
                    let s = Math.atan(i / o);
                    o < 0 && (s += Math.PI);
                    let n = Math.floor((s + Math.PI / 2) / (2 * Math.PI) * 100);
                    e && (n < 5 && this.percentage > 95 ? n = 100 : this.percentage < 5 && n > 95 && (n = 0)), this.setPercentage(n), this.redrawSvg()
                }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, i(), this.resize = i
            }
        }
    }
]);
//# sourceMappingURL=sourcemaps/7879.919513f3e505736ed80e.js.map