(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/earwax"], {
        47214: (t, e, s) => {
            "use strict";
            s.d(e, {
                E: () => m
            });
            var a = s(13469),
                i = s.n(a),
                o = s(19755),
                n = s.n(o),
                r = s(72316),
                c = s.n(r),
                d = s(63574),
                p = s.n(d),
                l = s(10972),
                u = s(2720);

            function f(t, e, s, a, i, o, n) {
                try {
                    var r = t[o](n),
                        c = r.value
                } catch (t) {
                    return void s(t)
                }
                r.done ? e(c) : Promise.resolve(c).then(a, i)
            }

            function g(t) {
                return function() {
                    var e = this,
                        s = arguments;
                    return new Promise((function(a, i) {
                        var o = t.apply(e, s);

                        function n(t) {
                            f(o, a, i, n, r, "next", t)
                        }

                        function r(t) {
                            f(o, a, i, n, r, "throw", t)
                        }
                        n(void 0)
                    }))
                }
            }

            function h(t, e, s) {
                return e in t ? Object.defineProperty(t, e, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = s, t
            }
            const b = p().View.extend({
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
                            onGet(t) {
                                let [e, s] = t, a = s || "no-theme";
                                return e && (a += " show"), a
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
                    l.app.analytics.trackEvent({
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
                        n()(window).trigger("resize")
                    }), .5), e && l.app.analytics.trackEvent({
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
            class m {
                static get isVisible() {
                    return !!this.view && "on" === this.view.state
                }
                static update(t, e) {
                    var s = this;
                    return g((function*() {
                        e && "PostGame" === e.lobbyState ? (s.view || (yield s.init(t, e)), s.show()) : s.hide()
                    }))()
                }
                static init(t) {
                    var e = this;
                    return g((function*() {
                        t ? (e.bannerData = yield e.loadBannerData(t), e.bannerData && (e.view = new b({
                            model: new(c().Model)(e.bannerData)
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
                            const e = yield fetch(u.v.banners.url), s = yield e.json();
                            return !(!s || !s.postGameBanners) && s.postGameBanners[t]
                        } catch (t) {
                            return console.error("Unable to load banner data", t), !1
                        }
                    }))()
                }
            }
            h(m, "view", null), h(m, "isInitialized", !1), h(m, "bannerConfig", null)
        },
        62353: (t, e, s) => {
            "use strict";
            s.d(e, {
                I: () => m
            });
            var a = s(13469),
                i = s.n(a),
                o = s(19755),
                n = s.n(o),
                r = s(72316),
                c = s.n(r),
                d = s(63574),
                p = s.n(d),
                l = s(10972),
                u = s(81127),
                f = s(40543),
                g = s(89446),
                h = s(47214);

            function b(t, e, s, a, i, o, n) {
                try {
                    var r = t[o](n),
                        c = r.value
                } catch (t) {
                    return void s(t)
                }
                r.done ? e(c) : Promise.resolve(c).then(a, i)
            }
            const m = p().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(t) {
                    this.mergeOptions(t, ["appId", "appTag"]), l.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), l.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(c().Model)({});
                    const e = l.app.client.parseEntities();
                    this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), l.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), l.app.client.on("client:connection", this.onConnectionMessageWithContext), l.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), l.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", g.c.safeText(l.app.client.name), {
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
                    let s = t.lobbyState;
                    s || -1 === e.indexOf("_") || (s = t.state.split("_")[1]), "PostGame" === s || "Credits" === e || "GameOver" === e || "PostGame" === e || "DayEnd" === e || t.gameResults ? h.E.isInitialized ? h.E.show() : h.E.init(this.getOption("appTag")).then((() => {
                        h.E.show()
                    })) : h.E.hide(), l.app.storage && l.app.storage.isSupported && t.platformId && l.app.storage.setTag(`platform-${t.platformId}`)
                },
                update() {
                    return (t = function*() {
                        return null
                    }, function() {
                        var e = this,
                            s = arguments;
                        return new Promise((function(a, i) {
                            var o = t.apply(e, s);

                            function n(t) {
                                b(o, a, i, n, r, "next", t)
                            }

                            function r(t) {
                                b(o, a, i, n, r, "throw", t)
                            }
                            n(void 0)
                        }))
                    })();
                    var t
                },
                caughtError(t) {
                    throw t
                },
                onAttach() {
                    this.update().catch(this.caughtError), n()(".gallery-link").click(this.artifactClicked.bind(this)), l.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(t) {
                    let e = `<div class='icon-${l.app.client.roles.broadcaster.platform}'>${l.app.client.roles.broadcaster.name}</div>`;
                    e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : l.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), f.b.show("custom", {
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
                    this.model.stopListening(), l.app.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), l.app.client.off("client:connection", this.onConnectionMessageWithContext), l.app.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), l.app.client.off("client:disconnected", this.onDisconnectedWithContext)
                },
                artifactClicked() {
                    l.app.analytics.trackEvent({
                        category: "PostGame",
                        action: "galleryClicked",
                        label: this.getOption("appTag")
                    }), u.Q.setAsViewed(0)
                },
                showScreen(t, e) {
                    const s = n()(t);
                    return this.activeScreen && t === this.activeScreen || (this.activeScreen && (n()(this.activeScreen).fadeOut("fast", (() => {})), n()(this.activeScreen).show(), n()(this.activeScreen).addClass("pt-page-off")), s.hide(), s.removeClass("pt-page-off"), s.removeClass("pt-page-moveToLeft"), s.fadeIn("fast", (() => {
                        e && e()
                    })), this.activeScreen = t, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = i().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    f.b.vibrate()
                },
                trackScreenView() {
                    l.app.analytics.trackScreenView(this.getOption("appTag")), l.app.storage && l.app.storage.isSupported && l.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    l.app.storage && l.app.storage.isSupported && (l.app.storage.remove("roomCode"), l.app.storage.remove("reconnect")), f.b.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected() {
                    f.b.show("error", {
                        titleText: "Disconnected",
                        text: "You have been disconnected.",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage(t) {
                    const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
                    if (f.b.show("toast", {
                            text: e
                        }), "connected" === t.status) {
                        const t = l.app.client.parseEntities();
                        this.model.set(t)
                    }
                },
                onResize() {
                    const t = n()("#player").outerHeight(!0) || 0,
                        e = h.E.isVisible ? n()("#slide-in-banner").outerHeight(!0) : 0,
                        s = n()(window).width(),
                        a = n()(window).height() - t;
                    n()(`.${this.getOption("appTag")}-page`).css("height", a - e), n()(`.${this.getOption("appTag")}-page`).attr("height", a - e), n()(`.${this.getOption("appTag")}-page`).css("top", t), n()(`.${this.getOption("appTag")}-page`).css("width", s), n()(`.${this.getOption("appTag")}-page`).attr("width", s)
                }
            })
        },
        36024: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                MainView: () => x
            });
            var a = s(19755),
                i = s.n(a),
                o = s(13469),
                n = s.n(o),
                r = s(62353),
                c = s(40543),
                d = s(10972),
                p = s(27091),
                l = s.n(p),
                u = new URL(s(68937), s.b),
                f = new URL(s(96130), s.b),
                g = l()(u),
                h = l()(f);
            const b = '<div id="page-earwax" class="page"> <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700" rel="stylesheet"> <div id="player"> <img id="player-character" src="' + g + '"/><span>&nbsp;<%=username%></span> </div> <div id="earwax-preload1" class="earwax-preload1"></div> <div id="earwax-preload2" class="earwax-preload2"></div> <div id="earwax-preload3" class="earwax-preload3"></div> <div id="earwax-preload4" class="earwax-preload4"></div> <div id="earwax-preload5" class="earwax-preload5"></div> <div id="earwax-preload6" class="earwax-preload6"></div> <div id="earwax-preload7" class="earwax-preload7"></div> <div id="game" class="game pt-pageholder"> <div id="state-lobby" class="pt-page-off earwax-page"> <div class="container"> <br/><span id="earwax-lobby-text"></span><br/> <form class="pure-form"> <button type="button" id="earwax-startgame" class="button-earwax button-xlarge pure-button pure-input-1">EVERYBODY\'S IN</button> <button type="button" id="earwax-stopcountdown" class="button-earwax button-xlarge pure-button pure-input-1">CANCEL</button> <button type="button" id="earwax-sameplayers" class="button-earwax button-xlarge pure-button pure-input-1 earwax-endbuttons">SAME PLAYERS</button> <button type="button" id="earwax-newplayers" class="button-earwax button-xlarge pure-button pure-input-1 earwax-endbuttons">NEW PLAYERS</button> </form> </div> </div> <div id="state-intro" class="pt-page-off earwax-page"> <div class="container"> <div class="logo-image" style="width:75%;height:75%;margin-left:auto;margin-right:auto"> <img class="pure-img" style="margin-left:auto;margin-right:auto" src="' + h + '"> </div> <form class="pure-form"> <button type="button" id="earwax-skipintro" class="button-earwax button-xlarge pure-button pure-input-1">SKIP INSTRUCTIONS >></button> </form> </div> </div> <div id="state-logo" class="pt-page-off earwax-page"> <div class="logo-image" style="width:75%;height:75%;margin-left:auto;margin-right:auto"> <img class="pure-img" style="margin-left:auto;margin-right:auto" src="' + h + '"> </div> </div> <div class="pt-page-off state-choosing earwax-page"> <div class="container"> <br/><span>PICK A PROMPT</span><br/> <div class="button-container"> <form class="pure-form"> <fieldset class="button-fieldset"> </fieldset> </form> </div> </div> </div> <div class="pt-page-off state-notchoosing earwax-page"> <br/><span id="notchoosing"></span><br/> </div> <div id="state-notselectingsound" class="pt-page-off earwax-page"> <br/><span id="notselectingsound"></span><br/> </div> <div id="state-selectingsound" class="pt-page-off earwax-page"> <div class="container"> <br/><span id="selectingsound"></span><br/> <div class="button-container"> <form class="pure-form"> <fieldset class="button-fieldset"> </fieldset> </form> </div> </div> </div> <div class="pt-page-off state-audience-join earwax-page"> <br/><span>YOU\'VE JOINED THE AUDIENCE!<br/>WAITING FOR NEXT QUESTION TO START.</span><br/> </div> <div id="state-audience-wait" class="pt-page-off earwax-page"> <br/><div class="state-audience-main"><br/><span class="state-audience-wait-text"></span><br/></div> </div> <div id="state-answer-question-audience" class="pt-page-off earwax-page"> <br/><div class="state-answer-question-audience-main"><br/><span class="state-answer-question-audience-text"></span><br/></div> </div> <div id="state-vote" class="pt-page-off earwax-page"> <div class="container"> <br/> <span id="question-text"></span> <br/> <br/> <span id="vote-text"></span> <br/> <br/> <form id="earwax-vote" class="pure-form"></form> </div> </div> </div> </div> ';

            function m(t, e, s, a, i, o, n) {
                try {
                    var r = t[o](n),
                        c = r.value
                } catch (t) {
                    return void s(t)
                }
                r.done ? e(c) : Promise.resolve(c).then(a, i)
            }

            function w(t) {
                return function() {
                    var e = this,
                        s = arguments;
                    return new Promise((function(a, i) {
                        var o = t.apply(e, s);

                        function n(t) {
                            m(o, a, i, n, r, "next", t)
                        }

                        function r(t) {
                            m(o, a, i, n, r, "throw", t)
                        }
                        n(void 0)
                    }))
                }
            }
            const x = r.I.extend({
                template: n().template(b),
                testBlob: null,
                clickEnabled: !1,
                audioContext: void 0,
                soundExtension: void 0,
                soundBaseUrl: "https://s3.amazonaws.com/earwax.jackboxgames.com/sfx/",
                soundsList: [{
                    index: 0,
                    state: "_SoundStateEnum.undefined",
                    request: void 0
                }, {
                    index: 1,
                    state: "_SoundStateEnum.undefined",
                    request: void 0
                }],
                events: {
                    "click #earwax-startgame": "startGame",
                    "click #earwax-stopcountdown": "stopCountdown",
                    "click #earwax-skipintro": "skipIntro",
                    "click #earwax-sameplayers": "newGameSamePlayers",
                    "click #earwax-newplayers": "newGameNewPlayers",
                    "click .earwax-playlocal": "playLocal",
                    "click .earwax-play": "play",
                    "click .earwax-vote": "vote",
                    "click .earwax-like": "like",
                    "click .earwax-category": "chooseCategory",
                    "click .earwax-sound": "chooseSound"
                },
                initialize(t) {
                    r.I.prototype.initialize.apply(this, [t]), this.soundInit(), this.getSoundExtension(), this.soundPlaySingle("00_Hi")
                },
                soundInit() {
                    if (void 0 === this.audioContext && !/iPad|iPhone|iPod/.test(navigator.platform)) try {
                        window.AudioContext = window.AudioContext || window.webkitAudioContext, this.audioContext = new AudioContext, this.soundsList[0].soundsList = this.soundsList, this.soundsList[1].soundsList = this.soundsList
                    } catch (t) {
                        console.error("ERROR: Web Audio API not supported.")
                    }
                },
                getSoundExtension() {
                    return void 0 !== this.soundExtension || (this.soundExtension = "" !== (new Audio).canPlayType("audio/ogg") ? ".ogg" : ".mp3"), this.soundExtension
                },
                soundLoad(t) {
                    "_SoundStateEnum.undefined" === t.state && (t.state = "_SoundStateEnum.loading", t.request = new XMLHttpRequest, t.request.open("GET", this.soundBaseUrl + t.src + this.getSoundExtension(), !0), t.request.responseType = "arraybuffer", t.audioContext = this.audioContext, t.soundPlay = this.soundPlay, t.request.onload = function() {
                        t.audioContext.decodeAudioData(t.request.response, (e => {
                            t.state = "_SoundStateEnum.loaded", t.buffer = e, 0 !== t.index && "_SoundStateEnum.completed" !== t.soundsList[0].state || t.soundPlay(t)
                        }), (e => {
                            throw t.state = "_SoundStateEnum.undefined", new Error(e)
                        }))
                    }, t.request.onerror = function(t) {
                        console.error("There was an error!", t)
                    }, t.request.send())
                },
                soundPlay(t) {
                    "_SoundStateEnum.undefined" !== t.state ? (t.state = "_SoundStateEnum.playing", t.source = t.audioContext.createBufferSource(), t.source.buffer = t.buffer, t.source.connect(t.audioContext.destination), t.source.onended = function() {
                        t.state = "_SoundStateEnum.completed", 0 !== t.index || "_SoundStateEnum.loaded" !== t.soundsList[1].state && "_SoundStateEnum.completed" !== t.soundsList[1].state || t.soundPlay(t.soundsList[1])
                    }, t.source.start(0)) : this.soundLoad(t)
                },
                soundStop(t) {
                    "_SoundStateEnum.playing" === t.state && (t.source.onended = null, t.state = "_SoundStateEnum.loaded", t.source.stop())
                },
                soundsPlay(t, e) {
                    null != this.audioContext && void 0 !== this.audioContext && (this.soundStop(this.soundsList[0]), this.soundStop(this.soundsList[1]), this.soundsList[0].src !== t && (this.soundsList[0].src = t, this.soundsList[0].state = "_SoundStateEnum.undefined"), this.soundsList[1].src !== e && (this.soundsList[1].src = e, this.soundsList[1].state = "_SoundStateEnum.undefined", this.soundLoad(this.soundsList[1])), this.soundPlay(this.soundsList[0]))
                },
                soundPlaySingle(t) {
                    null != this.audioContext && void 0 !== this.audioContext && (this.soundStop(this.soundsList[0]), this.soundStop(this.soundsList[1]), this.soundsList[0].src !== t && (this.soundsList[0].src = t, this.soundsList[0].state = "_SoundStateEnum.undefined"), this.soundPlay(this.soundsList[0]))
                },
                update() {
                    var t = this;
                    return w((function*() {
                        d.app.client.isRole("audience") ? t.updateAudience() : t.model.get("player") && t.updatePlayer(), t.onResize()
                    }))()
                },
                updatePlayer() {
                    var t = this;
                    return w((function*() {
                        if (!t.model.get("room")) return void t.showScreen("#state-logo");
                        const e = t.model.get("room"),
                            a = t.model.get("player") ? t.model.get("player") : {},
                            o = a ? a.state : "",
                            n = e ? e.state : "";
                        if (void 0 !== a && void 0 !== a.character && void 0 !== a.animation) {
                            const e = yield s(710)(`./${a.character}_${a.animation}.gif`);
                            t.$el.find("#player-character").attr("src", e.default)
                        }
                        if (t.currentAnswerQuestionId = -1, "RoomFull" !== o) {
                            if ("GameLocked" === o) c.b.show(Error("Game is in progress. Please wait for a new game to start."), {
                                willClose: () => {
                                    window.location.reload(!0)
                                }
                            });
                            else if (n && "Lobby" === n) {
                                if (t.hideLobbyButtons(), !a.isAllowedToStartGame) return t.$el.find("#earwax-lobby-text").html("Sit back and relax!"), void t.showScreen("#state-lobby");
                                const s = e.lobbyState;
                                "WaitingForMore" === s ? t.$el.find("#earwax-lobby-text").html("Waiting for more players") : "CanStart" === s ? (t.$el.find("#earwax-lobby-text").html("Waiting for more players"), t.$el.find("#earwax-startgame").show()) : "Countdown" === s ? (t.$el.find("#earwax-lobby-text").html("Press to cancel game start"), t.$el.find("#earwax-stopcountdown").show()) : "PostGame" === s && (t.$el.find("#earwax-lobby-text").html("What do you want to do?"), i()(".earwax-endbuttons").show()), t.showScreen("#state-lobby")
                            } else if ("Gameplay_Logo" === n) "GameIntro" === o ? (t.$el.find("#earwax-skipintro").show(), t.showScreen("#state-intro")) : t.showScreen("#state-logo");
                            else if ("Gameplay_CategorySelection" === n && "Gameplay_CategorySelection" === o)
                                if (a.isChoosing) {
                                    let s = "";
                                    const a = e.choices || [];
                                    for (let t = 0; t < a.length; t++) s += `<button type="button" data-num="${t}" class="earwax-category button-earwax button-large pure-button pure-input-1">${a[t]}</button>`;
                                    i()(".button-fieldset").html(s), t.showScreen(".state-choosing")
                                } else t.$el.find("#notchoosing").html(`${e.choosingPlayerName} is picking a prompt`), t.showScreen(".state-notchoosing");
                            else if ("Gameplay_SoundSelection" === n && "Gameplay_SoundSelection" === o)
                                if (a.isSelecting) {
                                    let s = "",
                                        o = !0;
                                    for (let t = 0; t < a.choices.length; t++) a.choices[t].picked ? (s += `<button type="button" data-num="-1" class="button-earwax button-large pure-input-1" disabled>${a.choices[t].name}</button>`, o = !1) : s += `<button type="button" data-num="${a.choices[t].id}" class="earwax-sound button-earwax button-large pure-button pure-input-1">${a.choices[t].name}</button>`;
                                    o ? t.$el.find("#selectingsound").html(`Pick first sound for:<br>${e.prompt}`) : t.$el.find("#selectingsound").html(`Pick second sound for:<br>${e.prompt}`), i()(".button-fieldset").html(s), t.showScreen("#state-selectingsound"), t.clickEnabled = !0
                                } else t.$el.find("#notselectingsound").html("Waiting for other players"), t.showScreen("#state-notselectingsound");
                            else if ("Gameplay_SoundSelection" === n && "Gameplay_SoundSelected" === o) t.$el.find("#notselectingsound").html("Waiting for players to pick sounds"), t.showScreen("#state-notselectingsound");
                            else if ("Gameplay_Vote" === n && "Gameplay_Vote" === o) {
                                e.prompt ? t.$el.find("#state-vote #question-text").html(e.prompt.replace(/<BLANK>/gi, "________")) : t.$el.find("#state-vote #question-text").html("");
                                let s = "";
                                if (a.isChoosing) {
                                    t.$el.find("#vote-text").html("PICK A WINNER");
                                    const a = e.choices || [];
                                    if (e.remote && null != t.audioContext && void 0 !== t.audioContext)
                                        for (let t = 0; t < a.length; t++) s += '<div class="pure-form pure-g">', s += '<div class="pure-u-3-4 pure-u-md-6-8">', s += `<button type="button" data-vote="${t}" class="earwax-vote button-earwax-vote button-earwax button-large pure-button pure-input-1">${a[t].name}</button>`, s += "</div>", s += '<div class="pure-u-1-8 pure-u-md-1-8">', s += `<button type="button" aria-label="play" data-play="${t}" class="earwax-play  button-earwax-play button-earwax button-large pure-button pure-input-1">&nbsp;&nbsp;</button>`, s += "</div>", s += '<div class="pure-u-1-8  pure-u-md-1-8">', s += `<button type="button" aria-label="play locally" data-play="${a[t].id1}_${a[t].id2}" class="earwax-playlocal button-earwax-playLocal button-earwax button-large pure-button pure-input-1">&nbsp;&nbsp;</button>`, s += "</div>", s += "</div>";
                                    else
                                        for (let t = 0; t < a.length; t++) s += '<div class="pure-form pure-g">', s += '<div class="pure-u-3-4 pure-u-md-7-8">', s += `<button type="button" data-vote="${t}" class="earwax-vote button-earwax-vote button-earwax button-large pure-button pure-input-1">${a[t].name}</button>`, s += "</div>", s += '<div class="pure-u-1-6 pure-u-md-1-8">', s += `<button type="button" aria-label="play" data-play="${t}" class="earwax-play button-earwax-play button-earwax button-large pure-button pure-input-1">&nbsp;&nbsp;</button>`, s += "</div>", s += "</div>"
                                } else {
                                    t.$el.find("#vote-text").html("VOTE 4 FAVE");
                                    const i = e.choices || [];
                                    for (let t = 0; t < i.length; t++) a.choices[t].disabled || (s += `<button type="button" data-like="${t}" class="earwax-like button-earwax button-large pure-button pure-input-1">${i[t].name}</button>`)
                                }
                                t.notify(), t.$el.find("#earwax-vote").html(s), t.showScreen("#state-vote")
                            }
                        } else c.b.show(Error("The room is full"), {
                            willClose: () => {
                                window.location.reload(!0)
                            }
                        })
                    }))()
                },
                updateAudience() {
                    const t = this.model.get("room"),
                        e = t ? t.state : "";
                    if ("Gameplay_Vote" === e) {
                        t.prompt ? this.$el.find("#state-vote #question-text").html(t.prompt.replace(/<BLANK>/gi, "________")) : this.$el.find("#state-vote #question-text").html(""), this.$el.find("#vote-text").html("VOTE 4 FAVE");
                        let e = "";
                        const s = t.choices || [];
                        for (let t = 0; t < s.length; t++) e += `<button type="button" data-like="${t}" class="pure-input-1 earwax-like button-large pure-button button-earwax">${s[t].name}</button>`;
                        this.notify(), this.$el.find("#earwax-vote").html(e), this.showScreen("#state-vote")
                    } else "Gameplay_CategorySelection" === e || "Gameplay_SoundSelection" === e ? (i()(".state-audience-wait-text").html("You’re in the audience! Wait for the time to vote."), this.showScreen("#state-audience-wait")) : "Gameplay_Logo" === e ? this.showScreen("#state-logo") : this.showScreen(".state-audience-join")
                },
                hideLobbyButtons() {
                    this.$el.find("#earwax-startgame").hide(), this.$el.find("#earwax-stopcountdown").hide(), i()(".earwax-endbuttons").hide()
                },
                startGame: () => (d.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0
                }), !1),
                stopCountdown: () => (d.app.client.send("SendMessageToRoomOwner", {
                    cancelStartGame: !0
                }), !1),
                skipIntro() {
                    return this.showScreen("#state-logo"), d.app.client.send("SendMessageToRoomOwner", {
                        skipIntro: !0
                    }), !1
                },
                chooseCategory(t) {
                    this.showScreen("#state-logo");
                    const e = i()(t.target).data("num");
                    return d.app.client.send("SendMessageToRoomOwner", {
                        chosenCategory: e
                    }), !1
                },
                chooseSound(t) {
                    if (!this.clickEnabled) return !1;
                    this.clickEnabled = !1;
                    const e = i()(t.target).data("num");
                    return d.app.client.send("SendMessageToRoomOwner", {
                        chosenSound: e
                    }), !1
                },
                playLocal(t) {
                    const e = i()(t.target).data("play").split("_");
                    return d.app.client.isRole("player") && this.soundsPlay(e[0], e[1]), !1
                },
                vote(t) {
                    const e = i()(t.target).data("vote");
                    return d.app.client.isRole("player") && d.app.client.send("SendMessageToRoomOwner", {
                        vote: e
                    }), !1
                },
                play(t) {
                    const e = i()(t.target).data("play");
                    return d.app.client.isRole("player") && d.app.client.send("SendMessageToRoomOwner", {
                        play: e
                    }), i()(t.target).blur(), !1
                },
                like(t) {
                    const e = i()(t.target).data("like");
                    return d.app.client.isRole("player") ? d.app.client.send("SendMessageToRoomOwner", {
                        like: e
                    }) : d.app.client.isRole("audience") && (d.app.client.sessionSend("vote", "Earwax Vote", {
                        type: "vote",
                        vote: e
                    }), this.$el.find("#vote-text").html("Thanks, audience member!"), this.$el.find("#earwax-vote").html(""), this.showScreen("#state-vote")), !1
                },
                newGameSamePlayers: () => (d.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_Continue"
                }), !1),
                newGameNewPlayers: () => (d.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_NewGame"
                }), !1),
                sanitize: t => t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,:]/gi, "").replace(/'/g, "’").trim()
            })
        },
        27091: t => {
            "use strict";
            t.exports = function(t, e) {
                return e || (e = {}), t ? (t = String(t.__esModule ? t.default : t), e.hash && (t += e.hash), e.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(t) ? '"'.concat(t, '"') : t) : t
            }
        },
        8432: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/9e7c2350158263343d99.gif"
        },
        50895: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/bca87a4cd8b221290e11.gif"
        },
        36815: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/b754645c54635736a561.gif"
        },
        74406: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/b5326c6a365ef52d5d85.gif"
        },
        2078: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/c8884bd15801709d72f9.gif"
        },
        29158: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/3e23d265c809c76f302f.gif"
        },
        92476: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/3cdfb0f23d78cac88078.gif"
        },
        93682: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/926a7b32b8cead965356.gif"
        },
        23317: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/e993d0c1b3efafd29e09.gif"
        },
        18082: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/47b5adc75bb98678202f.gif"
        },
        33450: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/ef28f5d1f265fc6ecfbe.gif"
        },
        4249: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/c608c18bc98107d15c6d.gif"
        },
        20749: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/8c03e82ee7b3788764c7.gif"
        },
        39737: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/46fae3d707b6c3cc529b.gif"
        },
        35611: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/124acc3241a1f2b92e81.gif"
        },
        62097: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/794ab1287d53e6f40c49.gif"
        },
        67838: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/3ac166089b2643448b46.gif"
        },
        50395: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/5572c3c75aec35bd4daf.gif"
        },
        46277: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/072c637105c42caa8b47.gif"
        },
        93461: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/de94f3bd9e7eb3803c5e.gif"
        },
        23614: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/a695116ff8f3442f3714.gif"
        },
        63402: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/6345fd5a3ec2addeea68.gif"
        },
        68937: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/b168f17c33d9d3bbd070.gif"
        },
        4783: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/0c92cb9c5036df1f40a9.gif"
        },
        16723: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/9cda844776b90f4070db.gif"
        },
        63802: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/401c33e9f83daca8741f.gif"
        },
        43915: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/96e88db45941c99274cd.gif"
        },
        78727: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/d59c2092c804c7815af9.gif"
        },
        53657: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/5e0f437ac0e72b30d50f.gif"
        },
        22906: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/c70ccd0de44ec38ea091.gif"
        },
        50549: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/382421013f6ab0d97142.gif"
        },
        77642: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/5b1b32d76ef9dd955863.gif"
        },
        2422: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/368e459e58fa0b9bfca7.gif"
        },
        86747: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/c11560b1c1c1e4c1fc95.gif"
        },
        43646: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/f9fd662f4092d6f4b1cb.gif"
        },
        7193: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/e5fcf87105cc77081a4b.gif"
        },
        72843: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/c657a53f94a64fe47abc.gif"
        },
        55947: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/d8a56e908844054c77fc.gif"
        },
        69520: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/c2bad04c929e94e2610a.gif"
        },
        43448: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/4349e827f3d5c70022ce.gif"
        },
        28176: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/d9c3fde97bb46b330d9b.gif"
        },
        15972: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/d505493bd214fa08bae2.gif"
        },
        69258: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/7d9e09be6e25c0182ba8.gif"
        },
        93813: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/e34666a9e989f62a3e74.gif"
        },
        31798: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/c0a5487106a922f2e5ca.gif"
        },
        40300: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/21f84930b9a7e94b801a.gif"
        },
        97242: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/3093cae8c117d7dfd3bd.gif"
        },
        19098: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/8a4a91fcb6311f872d7a.gif"
        },
        55790: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/a06a375b5632b87478af.gif"
        },
        3352: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/6fdd70c32f02b0f3b7b6.gif"
        },
        71387: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/b0f6f2fe0686f7445741.gif"
        },
        62324: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/507e11322ef432ab5f1c.gif"
        },
        29100: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/1e226852879363cba83c.gif"
        },
        99921: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/e8fffd41b849a3a7cd1c.gif"
        },
        35142: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/cf966deb79116bbc2d1f.gif"
        },
        37977: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/c07834b1fdb176c2a4de.gif"
        },
        89146: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/341d81bce40012943b37.gif"
        },
        82353: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/62f6efcd04c0136c15c2.gif"
        },
        46355: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/6da43f8e1a5b520cbcf3.gif"
        },
        8165: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/d99dae46528300edafba.gif"
        },
        58322: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/f2982bb755a291389ca7.gif"
        },
        35579: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/cb45e1d7064cf43f1d73.gif"
        },
        47950: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/94160770fa84c370ac77.gif"
        },
        39368: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/f712a5619cba653e7953.gif"
        },
        24189: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/1e5ff59f1453c4354554.gif"
        },
        96443: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/1d3e024c600130d31aa2.gif"
        },
        65248: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/c00125c4cb1fb592a746.gif"
        },
        8795: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/dfc7ffff0998f3faa515.gif"
        },
        3359: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/28df11dad566dab895eb.gif"
        },
        7073: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/912232d406171c384ce0.gif"
        },
        18473: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/7aae540a986fd63bc30a.gif"
        },
        88767: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/b2c6100bef96030211f6.gif"
        },
        34847: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/502aa2eac67b4b15dd5f.gif"
        },
        12931: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/2246010d912c32dc99eb.gif"
        },
        48535: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/2c940c9ccf71feeab05c.gif"
        },
        66798: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/d6893882cad87edc84d4.gif"
        },
        29761: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/61201b619cc119fdd453.gif"
        },
        15660: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/132882348a1a3b4291a1.gif"
        },
        72578: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/32eec569067c543a1bee.gif"
        },
        70179: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/92466379f2a8c027e05b.gif"
        },
        72745: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/a02261379d631af3ed13.gif"
        },
        86215: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/6efb3a2f69da20d271d5.gif"
        },
        11455: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/aa980c9d976011cd07b9.gif"
        },
        86200: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/57914a584d2a29052558.gif"
        },
        710: (t, e, s) => {
            var a = {
                "./apple_happy.gif": 8432,
                "./apple_lost.gif": 50895,
                "./apple_standard.gif": 36815,
                "./apple_win.gif": 74406,
                "./bat_happy.gif": 2078,
                "./bat_lost.gif": 29158,
                "./bat_standard.gif": 92476,
                "./bat_win.gif": 93682,
                "./bunny_happy.gif": 23317,
                "./bunny_lost.gif": 18082,
                "./bunny_standard.gif": 33450,
                "./bunny_win.gif": 4249,
                "./cathat_happy.gif": 20749,
                "./cathat_lost.gif": 39737,
                "./cathat_standard.gif": 35611,
                "./cathat_win.gif": 62097,
                "./chick_happy.gif": 67838,
                "./chick_lost.gif": 50395,
                "./chick_standard.gif": 46277,
                "./chick_win.gif": 93461,
                "./cookie_happy.gif": 23614,
                "./cookie_lost.gif": 63402,
                "./cookie_standard.gif": 68937,
                "./cookie_win.gif": 4783,
                "./dolphin_happy.gif": 16723,
                "./dolphin_lost.gif": 63802,
                "./dolphin_standard.gif": 43915,
                "./dolphin_win.gif": 78727,
                "./egg_happy.gif": 53657,
                "./egg_lost.gif": 22906,
                "./egg_standard.gif": 50549,
                "./egg_win.gif": 77642,
                "./hat_happy.gif": 2422,
                "./hat_lost.gif": 86747,
                "./hat_standard.gif": 43646,
                "./hat_win.gif": 7193,
                "./icecream_happy.gif": 72843,
                "./icecream_lost.gif": 55947,
                "./icecream_standard.gif": 69520,
                "./icecream_win.gif": 43448,
                "./mime_happy.gif": 28176,
                "./mime_lost.gif": 15972,
                "./mime_standard.gif": 69258,
                "./mime_win.gif": 93813,
                "./monkey_happy.gif": 31798,
                "./monkey_lost.gif": 40300,
                "./monkey_standard.gif": 97242,
                "./monkey_win.gif": 19098,
                "./moon_happy.gif": 55790,
                "./moon_lost.gif": 3352,
                "./moon_standard.gif": 71387,
                "./moon_win.gif": 62324,
                "./octopus_happy.gif": 29100,
                "./octopus_lost.gif": 99921,
                "./octopus_standard.gif": 35142,
                "./octopus_win.gif": 37977,
                "./plate_happy.gif": 89146,
                "./plate_lost.gif": 82353,
                "./plate_standard.gif": 46355,
                "./plate_win.gif": 8165,
                "./poop_happy.gif": 58322,
                "./poop_lost.gif": 35579,
                "./poop_standard.gif": 47950,
                "./poop_win.gif": 39368,
                "./pot_happy.gif": 24189,
                "./pot_lost.gif": 96443,
                "./pot_standard.gif": 65248,
                "./pot_win.gif": 8795,
                "./seal_happy.gif": 3359,
                "./seal_lost.gif": 7073,
                "./seal_standard.gif": 18473,
                "./seal_win.gif": 88767,
                "./toast_happy.gif": 34847,
                "./toast_lost.gif": 12931,
                "./toast_standard.gif": 48535,
                "./toast_win.gif": 66798,
                "./tuxbunny_happy.gif": 29761,
                "./tuxbunny_lost.gif": 15660,
                "./tuxbunny_standard.gif": 72578,
                "./tuxbunny_win.gif": 70179,
                "./tv_happy.gif": 72745,
                "./tv_lost.gif": 86215,
                "./tv_standard.gif": 11455,
                "./tv_win.gif": 86200
            };

            function i(t) {
                return o(t).then((t => s.t(t, 1)))
            }

            function o(t) {
                return Promise.resolve().then((() => {
                    if (!s.o(a, t)) {
                        var e = new Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return a[t]
                }))
            }
            i.keys = () => Object.keys(a), i.resolve = o, i.id = 710, t.exports = i
        },
        96130: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/earwax/c1baf2c1aa37ec46c8e4.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/6024.b327b9502d0265a89e11.js.map