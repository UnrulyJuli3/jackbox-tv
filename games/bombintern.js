(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/bombintern"], {
        47214: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => f
            });
            var i = n(13469),
                o = n.n(i),
                s = n(19755),
                r = n.n(s),
                a = n(72316),
                b = n.n(a),
                d = n(63574),
                l = n.n(d),
                p = n(10972),
                c = n(2720);

            function m(e, t, n, i, o, s, r) {
                try {
                    var a = e[s](r),
                        b = a.value
                } catch (e) {
                    return void n(e)
                }
                a.done ? t(b) : Promise.resolve(b).then(i, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(i, o) {
                        var s = e.apply(t, n);

                        function r(e) {
                            m(s, i, o, r, a, "next", e)
                        }

                        function a(e) {
                            m(s, i, o, r, a, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const h = l().View.extend({
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
                                let [t, n] = e, i = n || "no-theme";
                                return t && (i += " show"), i
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
                    p.app.analytics.trackEvent({
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
                        r()(window).trigger("resize")
                    }), .5), t && p.app.analytics.trackEvent({
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
            class f {
                static get isVisible() {
                    return !!this.view && "on" === this.view.state
                }
                static update(e, t) {
                    var n = this;
                    return u((function*() {
                        t && "PostGame" === t.lobbyState ? (n.view || (yield n.init(e, t)), n.show()) : n.hide()
                    }))()
                }
                static init(e) {
                    var t = this;
                    return u((function*() {
                        e ? (t.bannerData = yield t.loadBannerData(e), t.bannerData && (t.view = new h({
                            model: new(b().Model)(t.bannerData)
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
                    return u((function*() {
                        try {
                            const t = yield fetch(c.v.banners.url), n = yield t.json();
                            return !(!n || !n.postGameBanners) && n.postGameBanners[e]
                        } catch (e) {
                            return console.error("Unable to load banner data", e), !1
                        }
                    }))()
                }
            }
            g(f, "view", null), g(f, "isInitialized", !1), g(f, "bannerConfig", null)
        },
        62353: (e, t, n) => {
            "use strict";
            n.d(t, {
                I: () => f
            });
            var i = n(13469),
                o = n.n(i),
                s = n(19755),
                r = n.n(s),
                a = n(72316),
                b = n.n(a),
                d = n(63574),
                l = n.n(d),
                p = n(10972),
                c = n(81127),
                m = n(40543),
                u = n(89446),
                g = n(47214);

            function h(e, t, n, i, o, s, r) {
                try {
                    var a = e[s](r),
                        b = a.value
                } catch (e) {
                    return void n(e)
                }
                a.done ? t(b) : Promise.resolve(b).then(i, o)
            }
            const f = l().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(e) {
                    this.mergeOptions(e, ["appId", "appTag"]), p.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), p.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(b().Model)({});
                    const t = p.app.client.parseEntities();
                    this.model.set(t), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), p.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), p.app.client.on("client:connection", this.onConnectionMessageWithContext), p.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), p.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", u.c.safeText(p.app.client.name), {
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
                    let n = e.lobbyState;
                    n || -1 === t.indexOf("_") || (n = e.state.split("_")[1]), "PostGame" === n || "Credits" === t || "GameOver" === t || "PostGame" === t || "DayEnd" === t || e.gameResults ? g.E.isInitialized ? g.E.show() : g.E.init(this.getOption("appTag")).then((() => {
                        g.E.show()
                    })) : g.E.hide(), p.app.storage && p.app.storage.isSupported && e.platformId && p.app.storage.setTag(`platform-${e.platformId}`)
                },
                update() {
                    return (e = function*() {
                        return null
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, o) {
                            var s = e.apply(t, n);

                            function r(e) {
                                h(s, i, o, r, a, "next", e)
                            }

                            function a(e) {
                                h(s, i, o, r, a, "throw", e)
                            }
                            r(void 0)
                        }))
                    })();
                    var e
                },
                caughtError(e) {
                    throw e
                },
                onAttach() {
                    this.update().catch(this.caughtError), r()(".gallery-link").click(this.artifactClicked.bind(this)), p.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(e) {
                    let t = `<div class='icon-${p.app.client.roles.broadcaster.platform}'>${p.app.client.roles.broadcaster.name}</div>`;
                    t += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? t += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : p.app.client.roomInfo.audienceEnabled || (t += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), m.b.show("custom", {
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
                    this.model.stopListening(), p.app.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), p.app.client.off("client:connection", this.onConnectionMessageWithContext), p.app.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), p.app.client.off("client:disconnected", this.onDisconnectedWithContext)
                },
                artifactClicked() {
                    p.app.analytics.trackEvent({
                        category: "PostGame",
                        action: "galleryClicked",
                        label: this.getOption("appTag")
                    }), c.Q.setAsViewed(0)
                },
                showScreen(e, t) {
                    const n = r()(e);
                    return this.activeScreen && e === this.activeScreen || (this.activeScreen && (r()(this.activeScreen).fadeOut("fast", (() => {})), r()(this.activeScreen).show(), r()(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", (() => {
                        t && t()
                    })), this.activeScreen = e, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = o().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    m.b.vibrate()
                },
                trackScreenView() {
                    p.app.analytics.trackScreenView(this.getOption("appTag")), p.app.storage && p.app.storage.isSupported && p.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    p.app.storage && p.app.storage.isSupported && (p.app.storage.remove("roomCode"), p.app.storage.remove("reconnect")), m.b.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected() {
                    m.b.show("error", {
                        titleText: "Disconnected",
                        text: "You have been disconnected.",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage(e) {
                    const t = `${e.status} ${e.attempt?`${e.attempt}/5'`:""}`;
                    if (m.b.show("toast", {
                            text: t
                        }), "connected" === e.status) {
                        const e = p.app.client.parseEntities();
                        this.model.set(e)
                    }
                },
                onResize() {
                    const e = r()("#player").outerHeight(!0) || 0,
                        t = g.E.isVisible ? r()("#slide-in-banner").outerHeight(!0) : 0,
                        n = r()(window).width(),
                        i = r()(window).height() - e;
                    r()(`.${this.getOption("appTag")}-page`).css("height", i - t), r()(`.${this.getOption("appTag")}-page`).attr("height", i - t), r()(`.${this.getOption("appTag")}-page`).css("top", e), r()(`.${this.getOption("appTag")}-page`).css("width", n), r()(`.${this.getOption("appTag")}-page`).attr("width", n)
                }
            })
        },
        63191: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                MainView: () => h
            });
            var i = n(19755),
                o = n.n(i),
                s = n(13469),
                r = n.n(s),
                a = n(62353),
                b = n(10972),
                d = n(89446),
                l = n(27091),
                p = n.n(l),
                c = new URL(n(37580), n.b);
            const m = '<div id="page-bombintern" class="page gray"> <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&subset=latin,greek,latin-ext" rel="stylesheet"> <link href="https://fonts.googleapis.com/css?family=Rokkitt:400,700" rel="stylesheet"> <div id="player"> <h1><%=username%></h1> </div> <div id="game" class="game pt-pageholder"> <div class="pt-page-off state-lobby bombintern-page"> <div class="container"> <div class="bomb-header"><span id="bombintern-lobby-text"></span></div> <form class="pure-form"> <button type="button" id="bombintern-startgame" class="button-bombintern button-xlarge pure-button pure-input-1">START</button> <button type="button" id="bombintern-stopcountdown" class="button-bombintern button-xlarge pure-button pure-input-1">CANCEL</button> </form> </div> </div> <div class="pt-page-off state-dayend bombintern-page"> <div class="container"> <div class="bomb-header"><span id="bombintern-dayend-text"></span></div> <form class="pure-form"> <button type="button" id="bombintern-nextday" class="button-bombintern button-xlarge pure-button pure-input-1">NEXT DAY</button> <button type="button" id="bombintern-retryday" class="button-bombintern button-xlarge pure-button pure-input-1">RETRY DAY</button> <button type="button" id="bombintern-menuday" class="button-bombintern button-xlarge pure-button pure-input-1">MENU</button> </form> </div> </div> <div class="pt-page-off state-gameover bombintern-page"> <div class="container"> <div class="bomb-header"><span id="bombintern-gameover-text"></span></div> <form class="pure-form"> <button type="button" id="bombintern-retry" class="button-bombintern button-xlarge pure-button pure-input-1">RETRY</button> <button type="button" id="bombintern-menu" class="button-bombintern button-xlarge pure-button pure-input-1">MENU</button> </form> <div id="bombintern-container-top"></div> <div id="bombintern-gameover-rules"></div> </div> </div> <div class="pt-page-off state-nothing bombintern-page"> <div class="logo-image" style="width:100%"> <img class="pure-img" style="margin-left:auto;margin-right:auto" src="' + p()(c) + '"> </div> </div> <div class="pt-page-off state-message bombintern-page"> <div class="bomb-header"><span id="bombintern-message-text"></span></div> </div> <div class="pt-page-off state-smashpuzzle bombintern-page"> <div class="container"> <div id="bombintern-smashpuzzle-top"></div> <div id="bombintern-smashpuzzle-rules"></div> <form id="bombintern-smashpuzzle-triggers" class="pure-form"></form> </div> </div> <div class="pt-page-off state-wiredbomb bombintern-page"> <div class="container"> <div id="bombintern-wiredbomb-top"></div> <div id="bombintern-wiredbomb-rules"></div> <form id="bombintern-wiredbomb-triggers" class="pure-form"></form> </div> </div> <div class="pt-page-off state-coffeebomb bombintern-page"> <div class="container"> <div id="bombintern-coffeebomb-top"></div> <div id="bombintern-coffeebomb-rules"></div> <form id="bombintern-coffeebomb-triggers" class="pure-form"></form> </div> </div> <div class="pt-page-off state-filingbomb bombintern-page"> <div class="container"> <div id="bombintern-filingbomb-top"></div> <div id="bombintern-filingbomb-rules"></div> <form id="bombintern-filingbomb-triggers" class="pure-form"></form> </div> </div> <div class="pt-page-off state-keypadbomb bombintern-page"> <div class="container"> <div id="bombintern-keypadbomb-top"></div> <div id="bombintern-keypadbomb-rules"></div> <form id="bombintern-keypadbomb-triggers" class="pure-form"></form> </div> </div> <div class="pt-page-off state-copierbomb bombintern-page"> <div class="container"> <div id="bombintern-copierbomb-top"></div> <div id="bombintern-copierbomb-rules"></div> <form id="bombintern-copierbomb-triggers" class="pure-form"></form> </div> </div> </div> </div> ';

            function u(e, t, n, i, o, s, r) {
                try {
                    var a = e[s](r),
                        b = a.value
                } catch (e) {
                    return void n(e)
                }
                a.done ? t(b) : Promise.resolve(b).then(i, o)
            }

            function g(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(i, o) {
                        var s = e.apply(t, n);

                        function r(e) {
                            u(s, i, o, r, a, "next", e)
                        }

                        function a(e) {
                            u(s, i, o, r, a, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }
            const h = a.I.extend({
                template: r().template(m),
                lacksAudience: !0,
                events: {
                    "click #bombintern-startgame": "startGame",
                    "click #bombintern-stopcountdown": "stopCountdown",
                    "click #bombintern-nextday": "gameoverContinue",
                    "click #bombintern-retryday": "gameoverRetry",
                    "click #bombintern-retry": "gameoverRetry",
                    "click #bombintern-menuday": "gameoverMenu",
                    "click #bombintern-menu": "gameoverMenu",
                    "click .bombintern-smashpuzzle-button": "sendSmashInput",
                    "click .bombintern-wiredbomb-button": "sendWireInput",
                    "click .bombintern-filingbomb-button": "sendFilingInput",
                    "click .bombintern-copierbomb-button": "sendCopierInput",
                    "click .bombintern-keypadbomb-button": "sendKeypadInput",
                    "click .bombintern-coffeebomb-remove-button": "removeIngredient",
                    "click .bombintern-coffeebomb-add-button": "addIngredient",
                    "click .bombintern-coffeebomb-brew-button": "brewCoffee"
                },
                update() {
                    var e = this;
                    return g((function*() {
                        let t = "";
                        const i = e.model.get("room"),
                            s = i ? i.state : "",
                            r = e.model.get("player"),
                            a = r ? r.state : "",
                            b = void 0 !== r && void 0 !== r.playerColor ? r.playerColor : "#CCCCCC";
                        e.$el.find("#player").css("background-color", b);
                        const l = d.c.adjustColor(b, 1.3);
                        switch (o()(".bombintern-page").css("background-color", l), s) {
                            case "Lobby":
                                switch (e.$el.find("#bombintern-startgame").hide(), e.$el.find("#bombintern-stopcountdown").hide(), a) {
                                    case "WaitingForMore":
                                        e.$el.find("#bombintern-lobby-text").html("Waiting for all players to join"), e.showScreen(".state-lobby");
                                        break;
                                    case "CanStart":
                                        e.$el.find("#bombintern-lobby-text").html("Press this button when everybody has joined"), e.$el.find("#bombintern-startgame").show(), e.showScreen(".state-lobby");
                                        break;
                                    case "Countdown":
                                        e.$el.find("#bombintern-lobby-text").html("Press this button to cancel game start"), e.$el.find("#bombintern-stopcountdown").show(), e.showScreen(".state-lobby");
                                        break;
                                    case "WaitingToStart":
                                        e.$el.find("#bombintern-lobby-text").html("Waiting for the game to start"), e.showScreen(".state-lobby")
                                }
                                break;
                            case "Logo":
                                e.showScreen(".state-nothing");
                                break;
                            case "Message":
                                "Message" === a && (e.$el.find("#bombintern-message-text").html(r.message), e.showScreen(".state-message"));
                                break;
                            case "Puzzle":
                                switch (o()(".bombintern-rules").html(""), e.lastPuzzle = a, a) {
                                    case "SmashPuzzle":
                                        if (e.$el.find("#bombintern-smashpuzzle-triggers").html(""), e.buildRuleFolder(a, "bombintern-smashpuzzle-rules"), !0 === r.smasher) {
                                            t = "<div class='bomb-header' id='button-header'><span>PRESS BELOW TO SMASH SOMETHING</span></div>";
                                            for (let e = 0; e < r.triggers.length; ++e) {
                                                const n = r.triggers[e];
                                                t += `<button type='button' data-param='${n.object}' class='pure-input-1 bombintern-smashpuzzle-button button-large pure-button button-bombintern' ${n.hasBeenSmashed?"disabled":""}>${n.object}</button>`
                                            }
                                            e.$el.find("#bombintern-smashpuzzle-triggers").html(t)
                                        }
                                        e.showScreen(".state-smashpuzzle");
                                        break;
                                    case "WiredBomb":
                                        if (e.$el.find("#bombintern-wiredbomb-triggers").html(""), e.buildRuleFolder(a, "bombintern-wiredbomb-rules"), r.triggers && r.triggers.length > 0) {
                                            t = "<div class='bomb-header' id='button-header'><span>TAP BUTTONS TO CUT WIRES</span></div>";
                                            for (let e = 0; e < r.triggers.length; ++e) {
                                                const n = r.triggers[e],
                                                    i = n.name || "Wire";
                                                t += `<button type='button' ${n.hasBeenCut?"disabled":""} data-param='${n.index}' class='pure-input-1 bombintern-wiredbomb-button button-large pure-button button-bombintern'>${i} ${n.index}</button>`
                                            }
                                            e.$el.find("#bombintern-wiredbomb-triggers").html(t)
                                        }
                                        e.showScreen(".state-wiredbomb");
                                        break;
                                    case "CoffeeBomb":
                                        if (e.$el.find("#bombintern-coffeebomb-triggers").html(""), e.buildRuleFolder(a, "bombintern-coffeebomb-rules"), r.triggers && r.triggers.length > 0) {
                                            t = "<div class='bomb-header' id='button-header'><span>PRESS TO ADD OR REMOVE INGREDIENTS</span></div>";
                                            for (let e = 0; e < r.triggers.length; ++e) {
                                                const n = r.triggers[e];
                                                t += `<div class='bombinterns-ingredient-controls'><span class='bombinterns-ingredient-name'>${n.ingredient}</span><br />`, t += `<button type='button' data-param='${n.ingredient}' class='pure-input-2 bombintern-coffeebomb-button bombintern-coffeebomb-remove-button button-large pure-button button-bombintern'>-</button>`, t += `<span class = 'bombinterns-ingredient-count'>${n.count}</span>`, t += `<button type='button' data-param='${n.ingredient}' class='pure-input-2 bombintern-coffeebomb-button bombintern-coffeebomb-add-button button-large pure-button button-bombintern'>+</button></div>`
                                            }
                                            t += "<div class='bomb-header' id='brew-header'><span>PRESS WHEN READY TO BREW</span></div>", t += "<button type='button' class='pure-input-1 bombintern-coffeebomb-brew-button button-large pure-button button-bombintern'>Brew</button>", e.$el.find("#bombintern-coffeebomb-triggers").html(t)
                                        }
                                        e.showScreen(".state-coffeebomb");
                                        break;
                                    case "FilingBomb":
                                        if (e.$el.find("#bombintern-filingbomb-triggers").html(""), e.buildRuleFolder(a, "bombintern-filingbomb-rules"), r.triggers.length > 0) {
                                            t = "<div id='button-header'<br /><span>PRESS BELOW TO FILE</span><br /></div>";
                                            for (let e = 0; e < r.triggers.length; ++e) {
                                                const n = r.triggers[e];
                                                t += `<button type='button' ${n.hasBeenFiled?"disabled":""} data-param='${n.fullName}' class='pure-input-1 bombintern-filingbomb-button button-large pure-button button-bombintern'>${n.fullName}</button>`
                                            }
                                            e.$el.find("#bombintern-filingbomb-triggers").html(t)
                                        }
                                        e.showScreen(".state-filingbomb");
                                        break;
                                    case "CopierBomb":
                                        if (e.$el.find("#bombintern-copierbomb-rules").html(""), e.$el.find("#bombintern-copierbomb-triggers").html(""), e.buildRuleFolder(a, "bombintern-copierbomb-rules"), r.triggers.length > 0) {
                                            for (let e = 0; e < r.triggers.length; ++e) {
                                                t += "<div class='bombintern-copier-control'>";
                                                const i = r.triggers[e],
                                                    o = i.text || i.name;
                                                t += `<button type='button' data-param='${i.index}' class='pure-input-1 bombintern-copierbomb-button button-large pure-button button-bombintern'>`, t += `<span>${o}</span>`, "button" === i.type ? t += `<div class='copier-control-image'><img src='${(yield Promise.resolve().then(n.t.bind(n,25938,17))).default}'/></div>` : "action" === i.type ? t += `<div class='copier-control-image'><img src='${(yield Promise.resolve().then(n.t.bind(n,63450,17))).default}'/></div>` : "load" === i.type ? t += `<div class='copier-control-image'><img src='${(yield Promise.resolve().then(n.t.bind(n,92787,17))).default}'/></div>` : "panel" === i.type ? 0 === i.state ? (t += `<div class='copier-control-image'><img src='${(yield Promise.resolve().then(n.t.bind(n,63986,17))).default}'/></div>`, t += "(closed)") : (t += `<div class='copier-control-image'><img src='${(yield Promise.resolve().then(n.t.bind(n,33307,17))).default}'/></div>`, t += "(open)") : "setting" === i.type && (t += `<div class='copier-control-image'><img src='${(yield n(65926)(`./copier-knob-${i.value+1}.png`)).default}'/></div>`, t += i.options[i.value]), t += "</button>", t += "</div>"
                                            }
                                            e.$el.find("#bombintern-copierbomb-triggers").html(t)
                                        }
                                        e.showScreen(".state-copierbomb");
                                        break;
                                    case "KeypadBomb":
                                        if (e.$el.find("#bombintern-keypadbomb-triggers").html(""), e.buildRuleFolder(a, "bombintern-keypadbomb-rules"), r.triggers && r.triggers.length > 0) {
                                            t = "<div class='bomb-header' id='button-header'><span>Enter a 4-digit keycode:</span></div>";
                                            for (let e = 0; e < r.triggers.length; ++e) {
                                                const n = r.triggers[e];
                                                let i = n.key;
                                                "Pound" === i ? i = "#" : "Star" === i && (i = "*"), t += `<button type='button' data-param='${n.index}' class='pure-input-3 bombintern-keypadbomb-button button-large pure-button button-bombintern'>${i}</button>`, n.index % 3 == 0 && (t += "<br />")
                                            }
                                            e.$el.find("#bombintern-keypadbomb-triggers").html(t)
                                        }
                                        e.showScreen(".state-keypadbomb")
                                }
                                if ((r.rules && r.rules.length > 0 || r.sort && r.sort.length > 0) && (r.triggers && r.triggers.length > 0 || !0 === r.smasher)) {
                                    e.$el.find("#player").html("");
                                    const i = yield Promise.resolve().then(n.t.bind(n, 48785, 17)), o = yield Promise.resolve().then(n.t.bind(n, 48785, 17));
                                    t = `<div id='player-content-bombinterns'><div class='image-button-bombinterns-wrapper' id='leftButton'><input type='image' class='image-button-bombinterns' id='bombinterns-jump-rule-button' src='${i.default}' /></div><div class='player-name-bombintern' ><p>${r.playerName}</p></div><div class='image-button-bombinterns-wrapper' id='rightButton'><input type='image' class='image-button-bombinterns' id='bombinterns-jump-cut-button' src='${o.default}' /></div></div>`, e.$el.find("#player").html(t), e.$el.find("#bombinterns-jump-rule-button").on("click", (() => {
                                        const t = e.$el.find("#instruction-header")[0];
                                        t && (t.parentElement.parentElement.parentElement.scrollTop = e.$el.find("#instruction-header").offset().top)
                                    })), e.$el.find("#bombinterns-jump-cut-button").on("click", (() => {
                                        const t = e.$el.find("#button-header")[0];
                                        t && (t.parentElement.parentElement.parentElement.scrollTop = e.$el.find("#button-header").offset().top)
                                    }))
                                }
                                break;
                            case "DayEnd":
                                switch (a) {
                                    case "DayEndDecision":
                                        e.$el.find("#bombintern-dayend-text").html("Day Complete!"), e.showScreen(".state-dayend");
                                        break;
                                    default:
                                        e.$el.find("#bombintern-message-text").html("Day Complete!"), e.showScreen(".state-message")
                                }
                                break;
                            case "GameOver":
                                switch (a) {
                                    case "GameOver":
                                    case "GameOverDecision":
                                        e.$el.find("#bombintern-gameover-text").html("Game Over!"), e.$el.find("#bombintern-retry").hide(), e.$el.find("#bombintern-menu").hide(), "GameOverDecision" === a && (e.$el.find("#bombintern-retry").show(), e.$el.find("#bombintern-menu").show()), e.$el.find("#bombintern-gameover-rules").html(""), e.buildRuleFolder(e.lastPuzzle, "bombintern-gameover-rules"), e.showScreen(".state-gameover")
                                }
                        }
                        "Puzzle" !== s && r && r.playerName && e.$el.find("#player").html(`<h1>${r.playerName}</h1>`), e.scrollToTopOnPuzzleStart(a), e.onResize()
                    }))()
                },
                startGame: () => (b.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0
                }), !1),
                stopCountdown: () => (b.app.client.send("SendMessageToRoomOwner", {
                    cancel: !0
                }), !1),
                chooseSuggestion(e) {
                    const t = o()(e.target).data("num"),
                        n = this.model.get("player").suggestions[t],
                        i = this.sanitize(n).toUpperCase();
                    return b.app.client.send("SendMessageToRoomOwner", {
                        lieEntered: i,
                        usedSuggestion: !0
                    }), !1
                },
                sendSmashInput(e) {
                    const t = o()(e.target).data("param");
                    return b.app.client.send("SendMessageToRoomOwner", {
                        object: t
                    }), o()(e.target).prop("disabled", !0), !1
                },
                sendWireInput(e) {
                    const t = o()(e.target).data("param");
                    return b.app.client.send("SendMessageToRoomOwner", {
                        index: t
                    }), o()(e.target).prop("disabled", !0), !1
                },
                sendFilingInput(e) {
                    const t = o()(e.target).data("param");
                    return b.app.client.send("SendMessageToRoomOwner", {
                        file: t
                    }), o()(e.target).prop("disabled", !0), !1
                },
                sendCopierInput(e) {
                    const t = o()(e.currentTarget).data("param");
                    return b.app.client.send("SendMessageToRoomOwner", {
                        index: t
                    }), !1
                },
                removeIngredient(e) {
                    const t = o()(e.target).data("param");
                    return b.app.client.send("SendMessageToRoomOwner", {
                        remove: !0,
                        ingredient: t
                    }), !1
                },
                addIngredient(e) {
                    const t = o()(e.target).data("param");
                    return b.app.client.send("SendMessageToRoomOwner", {
                        add: !0,
                        ingredient: t
                    }), !1
                },
                brewCoffee: e => (b.app.client.send("SendMessageToRoomOwner", {
                    brew: !0
                }), o()(e.target).prop("disabled", !0), !1),
                sendKeypadInput(e) {
                    const t = o()(e.target).data("param");
                    return b.app.client.send("SendMessageToRoomOwner", {
                        index: t
                    }), !1
                },
                gameoverContinue: () => (b.app.client.send("SendMessageToRoomOwner", {
                    decision: "Gameover_Continue"
                }), !1),
                gameoverRetry: () => (b.app.client.send("SendMessageToRoomOwner", {
                    decision: "Gameover_Retry"
                }), !1),
                gameoverMenu: () => (b.app.client.send("SendMessageToRoomOwner", {
                    decision: "Gameover_Menu"
                }), !1),
                buildRuleFolder(e, t) {
                    var i = this;
                    return g((function*() {
                        let o, s = "";
                        i.$el.find(`#${t}`).html(s);
                        const r = i.model.get("player");
                        if (r.rules && r.rules.length > 0 || r.sort && r.sort.length > 0) {
                            switch (s += "<div class='bomb-header' id='instruction-header'>", e) {
                                case "SmashPuzzle":
                                    s += "<span>READ INSTRUCTIONS BELOW TO HELP SMASH!</span>";
                                    break;
                                case "WiredBomb":
                                case "CoffeeBomb":
                                    s += "<span>FOLLOW THE INSTRUCTIONS</span>";
                                    break;
                                case "FilingBomb":
                                case "CopierBomb":
                                    break;
                                case "KeypadBomb":
                                    s += "<span>FOLLOW THE INSTRUCTIONS</span>"
                            }
                            if (s += "</div>", s += "<div class='rules-folder-tab'><span>MANUAL</span></div><div class='rules-folder'>", "FilingBomb" === e) s += `<div class='rules-page'><span>${r.sort}</span></div>`;
                            else if ("CopierBomb" === e)
                                for (let e = 0; e < r.rules.length; ++e) s += "<div class='rules-page copier-rule-page'>", o = r.rules[e], "" !== o.header && (s += `<div class='copier-icon'><img src='${(yield n(43305)(`./${o.header}.png`)).default}'/></div>`), s += `<span class='bombintern-rule copier-rule'>${o.body}</span>`, s += "</div>";
                            else
                                for (let e = 0; e < r.rules.length; ++e) s += "<div class='rules-page'>", o = r.rules[e], "" !== o.header && (s += `<span><b>${o.header}.</b></span><br/>`), s += `<span class='bombintern-rule'>${o.body}</span></div>`;
                            s += "</div>"
                        } else switch (e) {
                            case "SmashPuzzle":
                                s += "<div class='bomb-header' id='instruction-header'><span>YOU ARE THE SMASHER!</span></div>";
                                break;
                            case "WiredBomb":
                                s += "<div class='bomb-header' id='instruction-header'><span>YOU ARE THE CUTTER!</span></div>";
                                break;
                            case "CoffeeBomb":
                                s += "<div class='bomb-header' id='instruction-header'><span>YOU ARE THE BREWER!</span></div>";
                                break;
                            case "FilingBomb":
                                s += "<div class='bomb-header' id='instruction-header'><span>YOU ARE THE FILER!</span></div>";
                                break;
                            case "CopierBomb":
                                s += "<div class='bomb-header' id='instruction-header'><span>FIX THE COPIER!</span></div>";
                                break;
                            case "KeypadBomb":
                                s += "<div class='bomb-header' id='instruction-header'><span>CRACK THE CODE!</span></div>"
                        }
                        i.$el.find(`#${t}`).html(s)
                    }))()
                },
                scrollToTopOnPuzzleStart(e) {
                    const t = this.model.get("room");
                    if ("Puzzle" !== (t ? t.state : "")) switch (e) {
                        case "SmashPuzzle":
                            o()(".state-smashpuzzle")[0].scrollTop = 0;
                            break;
                        case "WiredBomb":
                            o()(".state-wiredbomb")[0].scrollTop = 0;
                            break;
                        case "CoffeeBomb":
                            o()(".state-coffeebomb")[0].scrollTop = 0;
                            break;
                        case "FilingBomb":
                            o()(".state-filingbomb")[0].scrollTop = 0;
                            break;
                        case "CopierBomb":
                            o()(".state-copierbomb")[0].scrollTop = 0;
                            break;
                        case "KeypadBomb":
                            o()(".state-keypadbomb")[0].scrollTop = 0
                    }
                }
            })
        },
        27091: e => {
            "use strict";
            e.exports = function(e, t) {
                return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), t.hash && (e += t.hash), t.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(e) ? '"'.concat(e, '"') : e) : e
            }
        },
        7576: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/a8715f1306fa25db6ea2.png"
        },
        94067: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/09122d68e65cff3ab57f.png"
        },
        22605: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/fd4e2e758efe67f21bd3.png"
        },
        21724: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/5ebe885ec5889aeded3c.png"
        },
        12057: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/e9b3f9d62e21b977288c.png"
        },
        44971: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/94e6295e1ff69f74f453.png"
        },
        58634: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/3f19578160d8befa2b36.png"
        },
        86806: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/a3ab7d7f0c41e3efb1df.png"
        },
        65607: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/67dd26a6e8b74802114f.png"
        },
        70899: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/d7188cbbc4becbe2cb5f.png"
        },
        63450: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/9ead49133a8204a7edb5.png"
        },
        83619: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/5b53db5bea52d9a2f73d.png"
        },
        25938: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/750b010d77eb618b55fc.png"
        },
        90809: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/87824ca27c13b4906bc8.png"
        },
        37177: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/2613e75d5cd6bd2cb514.png"
        },
        78084: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/613c15db51171587b51a.png"
        },
        48424: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/1b195607c09495e9d1ce.png"
        },
        92787: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/1e8587ab809f25001756.png"
        },
        63986: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/c8f76c7bb757c073e039.png"
        },
        33307: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/0f894e9185b725bab5bb.png"
        },
        93719: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/3230225d4960fb1aff9f.png"
        },
        48785: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/199c7aee04f636784eb9.png"
        },
        37580: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/1cb92ed4e57bc9abbe1a.png"
        },
        66350: (e, t, n) => {
            "use strict";
            e.exports = n.p + "games/bombintern/35a8ea539e3a51485001.png"
        },
        43305: (e, t, n) => {
            var i = {
                "./AlienBlue.png": 7576,
                "./AlienGreen.png": 94067,
                "./AlienPink.png": 22605,
                "./AlienPurple.png": 21724,
                "./AlienYellow.png": 12057,
                "./GreenDiamond.png": 44971,
                "./OrangeArrow.png": 58634,
                "./RedCircle.png": 86806,
                "./WhiteSquare.png": 65607,
                "./YellowTriangle.png": 70899,
                "./copier-action.png": 63450,
                "./copier-button-down.png": 83619,
                "./copier-button.png": 25938,
                "./copier-knob-1.png": 90809,
                "./copier-knob-2.png": 37177,
                "./copier-knob-3.png": 78084,
                "./copier-knob-4.png": 48424,
                "./copier-load.png": 92787,
                "./copier-panel-closed.png": 63986,
                "./copier-panel-open.png": 33307,
                "./jumpbttncutwires.png": 93719,
                "./jumpbttnrules.png": 48785,
                "./logo.png": 37580,
                "./panel_open_alt.png": 66350
            };

            function o(e) {
                return s(e).then((e => n.t(e, 1)))
            }

            function s(e) {
                return Promise.resolve().then((() => {
                    if (!n.o(i, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return i[e]
                }))
            }
            o.keys = () => Object.keys(i), o.resolve = s, o.id = 43305, e.exports = o
        },
        65926: (e, t, n) => {
            var i = {
                "./copier-knob-1.png": 90809,
                "./copier-knob-2.png": 37177,
                "./copier-knob-3.png": 78084,
                "./copier-knob-4.png": 48424
            };

            function o(e) {
                return s(e).then((e => n.t(e, 1)))
            }

            function s(e) {
                return Promise.resolve().then((() => {
                    if (!n.o(i, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return i[e]
                }))
            }
            o.keys = () => Object.keys(i), o.resolve = s, o.id = 65926, e.exports = o
        }
    }
]);
//# sourceMappingURL=sourcemaps/3191.908863961ae4a91d93c4.js.map