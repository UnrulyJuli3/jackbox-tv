(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/fakinit"], {
        47214: (t, e, i) => {
            "use strict";
            i.d(e, {
                E: () => m
            });
            var a = i(13469),
                n = i.n(a),
                o = i(19755),
                s = i.n(o),
                r = i(72316),
                c = i.n(r),
                l = i(63574),
                d = i.n(l),
                p = i(10972),
                h = i(2720);

            function u(t, e, i, a, n, o, s) {
                try {
                    var r = t[o](s),
                        c = r.value
                } catch (t) {
                    return void i(t)
                }
                r.done ? e(c) : Promise.resolve(c).then(a, n)
            }

            function f(t) {
                return function() {
                    var e = this,
                        i = arguments;
                    return new Promise((function(a, n) {
                        var o = t.apply(e, i);

                        function s(t) {
                            u(o, a, n, s, r, "next", t)
                        }

                        function r(t) {
                            u(o, a, n, s, r, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }

            function g(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const k = d().View.extend({
                el: "#banner",
                template: n().template('\n        <div class="banner-image"></div>\n        <div class="banner-text"></div>\n        <div class="banner-cta"></div>\n    '),
                events: {
                    click: "onBannerClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: ["visible", "theme"],
                            onGet(t) {
                                let [e, i] = t, a = i || "no-theme";
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
                visibleDidChange(t, e) {
                    setTimeout((() => {
                        s()(window).trigger("resize")
                    }), .5), e && p.app.analytics.trackEvent({
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
                    var i = this;
                    return f((function*() {
                        e && "PostGame" === e.lobbyState ? (i.view || (yield i.init(t, e)), i.show()) : i.hide()
                    }))()
                }
                static init(t) {
                    var e = this;
                    return f((function*() {
                        t ? (e.bannerData = yield e.loadBannerData(t), e.bannerData && (e.view = new k({
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
                    return f((function*() {
                        try {
                            const e = yield fetch(h.v.banners.url), i = yield e.json();
                            return !(!i || !i.postGameBanners) && i.postGameBanners[t]
                        } catch (t) {
                            return console.error("Unable to load banner data", t), !1
                        }
                    }))()
                }
            }
            g(m, "view", null), g(m, "isInitialized", !1), g(m, "bannerConfig", null)
        },
        62353: (t, e, i) => {
            "use strict";
            i.d(e, {
                I: () => m
            });
            var a = i(13469),
                n = i.n(a),
                o = i(19755),
                s = i.n(o),
                r = i(72316),
                c = i.n(r),
                l = i(63574),
                d = i.n(l),
                p = i(10972),
                h = i(81127),
                u = i(40543),
                f = i(89446),
                g = i(47214);

            function k(t, e, i, a, n, o, s) {
                try {
                    var r = t[o](s),
                        c = r.value
                } catch (t) {
                    return void i(t)
                }
                r.done ? e(c) : Promise.resolve(c).then(a, n)
            }
            const m = d().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(t) {
                    this.mergeOptions(t, ["appId", "appTag"]), p.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), p.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(c().Model)({});
                    const e = p.app.client.parseEntities();
                    this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), p.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), p.app.client.on("client:connection", this.onConnectionMessageWithContext), p.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), p.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", f.c.safeText(p.app.client.name), {
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
                    let i = t.lobbyState;
                    i || -1 === e.indexOf("_") || (i = t.state.split("_")[1]), "PostGame" === i || "Credits" === e || "GameOver" === e || "PostGame" === e || "DayEnd" === e || t.gameResults ? g.E.isInitialized ? g.E.show() : g.E.init(this.getOption("appTag")).then((() => {
                        g.E.show()
                    })) : g.E.hide(), p.app.storage && p.app.storage.isSupported && t.platformId && p.app.storage.setTag(`platform-${t.platformId}`)
                },
                update() {
                    return (t = function*() {
                        return null
                    }, function() {
                        var e = this,
                            i = arguments;
                        return new Promise((function(a, n) {
                            var o = t.apply(e, i);

                            function s(t) {
                                k(o, a, n, s, r, "next", t)
                            }

                            function r(t) {
                                k(o, a, n, s, r, "throw", t)
                            }
                            s(void 0)
                        }))
                    })();
                    var t
                },
                caughtError(t) {
                    throw t
                },
                onAttach() {
                    this.update().catch(this.caughtError), s()(".gallery-link").click(this.artifactClicked.bind(this)), p.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(t) {
                    let e = `<div class='icon-${p.app.client.roles.broadcaster.platform}'>${p.app.client.roles.broadcaster.name}</div>`;
                    e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : p.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), u.b.show("custom", {
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
                    this.model.stopListening(), p.app.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), p.app.client.off("client:connection", this.onConnectionMessageWithContext), p.app.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), p.app.client.off("client:disconnected", this.onDisconnectedWithContext)
                },
                artifactClicked() {
                    p.app.analytics.trackEvent({
                        category: "PostGame",
                        action: "galleryClicked",
                        label: this.getOption("appTag")
                    }), h.Q.setAsViewed(0)
                },
                showScreen(t, e) {
                    const i = s()(t);
                    return this.activeScreen && t === this.activeScreen || (this.activeScreen && (s()(this.activeScreen).fadeOut("fast", (() => {})), s()(this.activeScreen).show(), s()(this.activeScreen).addClass("pt-page-off")), i.hide(), i.removeClass("pt-page-off"), i.removeClass("pt-page-moveToLeft"), i.fadeIn("fast", (() => {
                        e && e()
                    })), this.activeScreen = t, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = n().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    u.b.vibrate()
                },
                trackScreenView() {
                    p.app.analytics.trackScreenView(this.getOption("appTag")), p.app.storage && p.app.storage.isSupported && p.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    p.app.storage && p.app.storage.isSupported && (p.app.storage.remove("roomCode"), p.app.storage.remove("reconnect")), u.b.show("error", {
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
                        const t = p.app.client.parseEntities();
                        this.model.set(t)
                    }
                },
                onResize() {
                    const t = s()("#player").outerHeight(!0) || 0,
                        e = g.E.isVisible ? s()("#slide-in-banner").outerHeight(!0) : 0,
                        i = s()(window).width(),
                        a = s()(window).height() - t;
                    s()(`.${this.getOption("appTag")}-page`).css("height", a - e), s()(`.${this.getOption("appTag")}-page`).attr("height", a - e), s()(`.${this.getOption("appTag")}-page`).css("top", t), s()(`.${this.getOption("appTag")}-page`).css("width", i), s()(`.${this.getOption("appTag")}-page`).attr("width", i)
                }
            })
        },
        22987: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                MainView: () => k
            });
            var a = i(19755),
                n = i.n(a),
                o = i(13469),
                s = i.n(o),
                r = i(62353),
                c = i(89446),
                l = i(10972),
                d = i(27091),
                p = i.n(d),
                h = new URL(i(67169), i.b),
                u = new URL(i(53588), i.b);
            const f = '<div id="page-fakinit" class="page"> <link href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet"> <template id="fakinit-vote-button"> <div class="fakinit-button-group"> <button type="button" data-index="{{ index }}" id="vote-button-{{index}}" class="fakinit-vote-button fakinit-censorable fakinit-button btn btn-lg playername button-send {{ selectedClass }} {{ disabledClass }}">{{ name }}</button> {{# if (canCensor) { }} <button type="button" data-censor="{{ index }}" class="fakinit-censor-button fakinit-button btn btn-lg">X</button> {{# } }} </div> </template> <div id="player" class="fakinit-player fakinit-category-background"> <h1 id="player-name"><%=username%></h1> <div class="fakinit-angle"></div> </div> <div id="fakinit-preload" class="fakinit-preload"></div> <div id="game" class="game pt-pageholder"> <div class="state-lobby pt-page-off fakinit-page fakinit-category-background"> <div class="container"> <div class="pure-u-1"></div> <div id="lobby-main-menu"> <div class="fakinit-change-name-dialog"> <form class="fakinit-name-change-form" style="display:none"> <div class="form-group"> <input type="input" class="form-control fakinit-input" id="fakinitNameChange" placeholder="name" maxLength="12"> </div> <div class="row"> <div class="col-xs-12"> <button id="fakinit-name-change-confirm" type="submit" class="fakinit-button fakinit-button-secondary pull-right">Submit</button> <button id="fakinit-name-change-cancel" class="fakinit-button fakinit-button-secondary pull-right">Cancel</button> </div> </div> </form> <p class="fakinit-name-change-button"><button id="fakinit-name-change" class="fakinit-button fakinit-button-secondary">Change name?</button></p> <p><span class="fakinit-text fakinit-text-instruction fakinit-category-color">We recommend using your own name so people can easily identify you</span></p> </div> <form class="pure-form"> <button type="button" id="fakinit-startgame" class="fakinit-button btn btn-lg btn-block">EVERYBODY\'S IN</button> <button type="button" id="fakinit-stopcountdown" class="fakinit-button btn btn-lg btn-block">CANCEL</button> <div style="margin-top:50px"><p><span id="fakinit-lobby-text" class="fakinit-text fakinit-text-instruction fakinit-category-color"></span></p></div> <button type="button" id="fakinit-sameplayers" class="fakinit-button btn btn-lg btn-block fakinit-endbuttons">SAME PLAYERS</button> <button type="button" id="fakinit-newplayers" class="fakinit-button btn btn-lg btn-block fakinit-endbuttons">NEW PLAYERS</button> </form> <div class="pure-u-1"></div> <form class="pure-form"> <button type="button" id="fakinit-lobby-menu-censor" class="menu-button lobby-button fakinit-button button-xlarge pure-button pure-input-1">Censor Menu</button><br> </form> </div> </div> </div> <div class="state-nothing pt-page-off fakinit-page fakinit-logo-image"> </div> <div class="state-gameplay pt-page-off fakinit-page fakinit-category-background"> <div> <div id="fakinit-instruction-box-gameplay" class="fakinit-instruction-box"> <div class="game-state"> <p id="gameplay-category" class="fakinit-title fakinit-category fakinit-category-color">.fakinit-category</p> </div> <p> <span id="gameplay-task" class="fakinit-text fakinit-task fakinit-text-instruction">.fakinit-task</span> </p> </div> <div class="container fakinit-gameplay-sign fakinit-gameplay-ready"> <p class="fakinit-text"><span id="press-instruction" class="fakinit-text-instruction">Press READY below when ready</span></p> <button class="fakinit-ready-button fakinit-button btn btn-lg btn-block button-send">READY</button> </div> <div class="fakinit-gameplay-sign fakinit-gameplay-yield"> </div> <div class="fakinit-gameplay-sign fakinit-gameplay-go"> <img style="margin-left:auto;margin-right:auto" id="go-img" class="pure-img" src="' + p()(h) + '"> </div> <div class="fakinit-gameplay-sign fakinit-gameplay-stop"> <img style="margin-left:auto;margin-right:auto" id="stop-img" class="pure-img" src="' + p()(u) + '"> </div> <div class="fakinit-gameplay-sign fakinit-gameplay-input"> <div class="container"> <form class="form-inline"> <div class="form-group" id="fakinit-input-text"> <input id="enteredText" value="" type="text" class="form-control fakinit-input input-lg" autocapitalize="off" autocorrect="off" autocomplete="off" maxlength="45" placeholder="enter text here"/> <span id="fakinit-submit-alert" class="help-block fakinit-text fakinit-text-instruction" style="color:#fff"></span> </div> <button id="input-send" type="submit" class="fakinit-button btn button-input">SEND</button> </form> </div> </div> </div> </div> <div class="state-skip-instructions pt-page-off fakinit-page"> <p><button class="fakinit-skip-button fakinit-button fakinit-button-secondary button-send">SKIP</button></p> <div class="fakinit-text fakinit-category-color"> <p class="fakinit-text-instruction">Press SKIP if everyone knows how to play</p> </div> <div class="fakinit-logo-image"></div> </div> <div class="state-categories pt-page-off fakinit-page"> <div id="fakinit-instruction-box-categories" class="fakinit-instruction-box"> <p id="category-title" class="fakinit-title fakinit-category-color">PICK A CATEGORY</p> <p><span id="category-text" class="fakinit-text fakinit-text-instruction fakinit-category-flavor">stuff stuff stuff stuff</span></p> </div> <div class="container"> <div class=""> <form id="fakinit-category-form" class="pure-form"></form> </div> <div class="row button-container"> <div class="col-xs-12 button-fieldset"> <div class=""> </div> </div> </div> </div> </div> <div class="state-notchoosing pt-page-off fakinit-page"> <div id="fakinit-instruction-box-not-choosing" class="fakinit-instruction-box"> <p><span id="notchoosing" class="fakinit-text fakinit-text-instruction"></span></p> </div> </div> <div class="pt-page-off state-round fakinit-page fakinit-category-background"> <div class="round-main"><p class="round-text"></p></div> </div> <div class="pt-page-off state-vote fakinit-page fakinit-category-background"> <div id="fakinit-instruction-box-vote" class="fakinit-instruction-box"> <p id="vote-category" class="fakinit-title fakinit-category fakinit-category-color">.fakinit-category</p> <p><span id="vote-text" class="fakinit-text fakinit-task fakinit-text-instruction">.fakinit-task</span></p> </div> <div id="fakinit-bar-vote" class="fakinit-bar fakinit-category-background-dark"> <span id="fakinit-title-vote" class="fakinit-title fakinit-text-instruction">Who\'s the Faker?</span> </div> <div class="container"> <div class=""> <form id="fakinit-vote-form" class="pure-form"></form> <button id="fakinit-vote" class="fakinit-vote-lock fakinit-button fakinit-button-lock button-input"> </button> <p id="fakinit-vote-lock" class="fakinit-vote-lock"><span id="vote-lock-instruction" class="fakinit-text fakinit-text-instruction">LOCK IN VOTE</span></p> </div> </div> </div> <div class="pt-page-off state-vote-locked fakinit-page fakinit-category-background"> <div id="fakinit-instruction-box-vote-locked" class="fakinit-instruction-box"> <p id="vote-locked-category" class="fakinit-title fakinit-category fakinit-category-color">.fakinit-category</p> <span id="vote-locked-text" class="fakinit-text fakinit-task fakinit-text-instruction">.fakinit-task</span> </div> <div id="fakinit-bar-vote-locked" class="fakinit-bar fakinit-category-background-dark"> <span id="fakinit-title-vote-locked" class="fakinit-title fakinit-text-instruction">Who\'s the Faker?</span> </div> <div class="container"> <div> <button id="fakinit-locked-player" disabled="disabled" type="button" class="fakinit-vote-button fakinit-button playername btn btn-block button-send selected">PLAYER</button> <button id="fakinit-vote-locked" disabled="disabled" class="fakinit-button fakinit-button-lock-invert button-input"> </button> <p class="fakinit-text"><span id="vote-locked-instruction" class="fakinit-text fakinit-text-instruction">You\'ve locked in your vote!</span></p> <p class="fakinit-text"><span id="vote-locked-waiting" class="fakinit-text fakinit-text-instruction">Waiting for other players</span></p> </div> </div> </div> </div> </div> ';

            function g(t, e, i, a, n, o, s) {
                try {
                    var r = t[o](s),
                        c = r.value
                } catch (t) {
                    return void i(t)
                }
                r.done ? e(c) : Promise.resolve(c).then(a, n)
            }
            const k = r.I.extend({
                template: s().template(f),
                testBlob: null,
                prevRoomState: "",
                prevPlayerState: "",
                doneAnswering: !1,
                categoryFlavor: ["it's fun", "do it", "we believe in you", "it's easy", "don't make everyone wait", "this is the easy part", "pretty please?", "it's important", "you can do it", "you have the power", "choose wisely", "it's your time to shine", "quickly", "be smart about it", "enjoy it", "it's your turn", "it's your duty"],
                events: {
                    "click #fakinit-startgame": "startGame",
                    "click #fakinit-stopcountdown": "stopCountdown",
                    "click #fakinit-sameplayers": "newGameSamePlayers",
                    "click #fakinit-newplayers": "newGameNewPlayers",
                    "click .fakinit-category-button": "chooseCategory",
                    "click .fakinit-skip-button": "sendSkip",
                    "click .fakinit-ready-button": "sendReady",
                    "click #input-send": "sendInput",
                    "click .fakinit-vote-button": "chooseVote",
                    "click #fakinit-vote": "lockVote",
                    "click #fakinit-vote-lock": "lockVote",
                    "click .fakinit-audience-vote-button": "chooseAudienceVote",
                    "click #fakinit-name-change": "changeName",
                    "click #fakinit-name-change-cancel": "changeNameCancel",
                    "click #fakinit-name-change-confirm": "changeNameConfirm",
                    "click .fakinit-censor-player-button": "censorPlayer",
                    "click .fakinit-censor-button": "censor"
                },
                initialize(t) {
                    r.I.prototype.initialize.apply(this, [t]), n()("input").bind("input propertychange", this.validateInput.bind(this))
                },
                renderTemplate(t, e) {
                    const i = s().templateSettings;
                    s().templateSettings = {
                        evaluate: /\{\{#([\s\S]+?)\}\}/g,
                        interpolate: /\{\{\{(\s*\w+?\s*)\}\}\}/g,
                        escape: /\{\{(\s*\w+?\s*)\}\}(?!\})/g
                    };
                    const a = s().template(t)(e);
                    return s().templateSettings = i, a
                },
                update() {
                    var t, e = this;
                    return (t = function*() {
                        if (!e.model.get("room")) return void e.showScreen(".state-nothing");
                        const t = e.model.get("player");
                        void 0 !== t && void 0 !== t.playerIndex && (n()(".fakinit-player").addClass(t.shape), n()("#player-name").html(t.displayName)), l.app.client.isRole("audience") ? e.updateAudience() : t && e.updatePlayer(), e.onResize()
                    }, function() {
                        var e = this,
                            i = arguments;
                        return new Promise((function(a, n) {
                            var o = t.apply(e, i);

                            function s(t) {
                                g(o, a, n, s, r, "next", t)
                            }

                            function r(t) {
                                g(o, a, n, s, r, "throw", t)
                            }
                            s(void 0)
                        }))
                    })()
                },
                updatePlayer() {
                    const t = this.model.get("player"),
                        e = this.model.get("room"),
                        i = t ? t.state : "",
                        a = e ? e.state : "";
                    let o;
                    if (n()("#player-name").html(t.playerName), n()("#fakinit-submit-alert").hide(), a && "Lobby" === a) {
                        this.hideLobbyButtons(), this.setCategory(null), this.showScreen(".state-lobby");
                        const i = e.lobbyState;
                        if ("PostGame" !== i && "PostGameCountdown" !== i && n()(".fakinit-change-name-dialog").show(), !t.isAllowedToStartGame) return n()("#fakinit-lobby-text").html("Sit back and relax!"), void this.showScreen(".state-lobby");
                        "WaitingForMore" === i ? n()("#fakinit-lobby-text").html("Waiting for all players to join") : "CanStart" === i ? (n()("#fakinit-lobby-text").html("Press this button when everybody has joined"), n()("#fakinit-startgame").show()) : "Countdown" === i || "PostGameCountdown" === i ? (n()("#fakinit-lobby-text").html("Press this button to cancel game start"), n()("#fakinit-stopcountdown").show()) : "PostGame" === i ? (n()("#fakinit-lobby-text").html("What do you want to do?"), n()(".fakinit-endbuttons").show()) : n()("#fakinit-lobby-text").html("<br />Sit tight!<br>Waiting for the VIP to start")
                    } else if ("Gameplay_EndGame" === a) this.showScreen(".state-nothing");
                    else if ("Logo" === a) this.setCategory(e.category), this.showScreen(".state-nothing");
                    else if ("Instructions" === a) i && "Skip" === i.split("_")[1] ? this.showScreen(".state-skip-instructions") : this.showScreen(".state-nothing");
                    else if ("Gameplay_CategorySelection" === a)
                        if ("Gameplay_CategorySelection" === i) {
                            if (t.isChoosing) {
                                let e = "";
                                for (o = 0; o < t.categories.length; o++) e += `<button class='fakinit-category-button fakinit-button btn btn-block button-send cat-${o}' data-params='${t.categories[o].type}'>${t.categories[o].name}</button>`;
                                n()("#fakinit-category-form").html(e), n()(".fakinit-category-flavor").html(this.categoryFlavor[Math.floor(Math.random() * this.categoryFlavor.length)]), this.showScreen(".state-categories")
                            }
                        } else n()("#notchoosing").html(`${e.choosingPlayerName} is picking a category`), this.showScreen(".state-notchoosing");
                    else if (a && "Gameplay" === a.split("_")[0]) {
                        const a = i.split("_")[1];
                        "Input" === a && (e.category = "Text You Up"), this.setCategory(e.category), n()(".fakinit-task").html(t.task), n()(".fakinit-gameplay-sign").hide(), "Ready" === a ? (this.showScreen(".state-gameplay"), n()(".fakinit-gameplay-ready").show()) : "Yield" === a ? this.showScreen(".state-gameplay") : "Go" === a ? (this.showScreen(".state-gameplay"), n()(".fakinit-gameplay-go").show()) : "Stop" === a ? (this.showScreen(".state-gameplay"), n()(".fakinit-gameplay-stop").show()) : "Input" === a ? (this.showScreen(".state-gameplay"), n()(".fakinit-gameplay-input").show(), n()("#enteredText").focus(), n()("#enteredText").val("")) : this.showScreen(".state-nothing")
                    } else if ("Vote" === a)
                        if ("Input" === i.split("_")[1] && (e.category = "Text You Up"), this.setCategory(e.category), n()(".fakinit-task").html(t.task), t.canCensor || "VoteLocked" !== i) {
                            if ("Vote" === i || "VoteLocked" === i) {
                                n()("#vote-text").html(e.task);
                                let i = "";
                                for (o = 0; o < t.players.length; o++) {
                                    const e = t.players[o],
                                        a = {
                                            index: e.index,
                                            selectedClass: void 0 !== t.vote && t.vote === e.index ? " selected " : "",
                                            disabledClass: t.censorOnly ? "fakinit-disabled" : "",
                                            name: e.name,
                                            canCensor: t.canCensor
                                        };
                                    i += this.renderTemplate(this.$("#fakinit-vote-button").html(), a)
                                }
                                n()("#fakinit-vote-form").html(i), t.censorOnly && n()(".fakinit-vote-button").attr("disabled", "disabled"), n()(".fakinit-vote-lock").hide(), t.showLock && n()(".fakinit-vote-lock").show(), this.showScreen(".state-vote")
                            }
                        } else {
                            for (n()("#vote-locked-text").html(e.task), o = 0; o < t.players.length; o++) {
                                const e = t.players[o];
                                void 0 !== t.vote && t.vote === e.index && n()("#fakinit-locked-player").html(e.name)
                            }
                            this.showScreen(".state-vote-locked")
                        }
                },
                updateAudience() {
                    const t = this.model.get("room"),
                        e = t ? t.state : "";
                    switch ("Gameplay_Input" === t.state && (t.category = "Text You Up"), this.setCategory(t.category), e) {
                        case "Lobby":
                            this.hideLobbyButtons(), n()("#fakinit-lobby-text").html("Sit tight!<br>Waiting for the VIP to start"), this.showScreen(".state-lobby");
                            break;
                        case "Gameplay_Logo":
                        case "Ready":
                        case "Instructions":
                            this.showScreen(".state-nothing");
                            break;
                        case "Gameplay_CategorySelection":
                            n()("#notchoosing").html(`${t.choosingPlayerName} is picking a category`), this.showScreen(".state-notchoosing");
                            break;
                        case "Gameplay":
                        case "Gameplay_Go":
                        case "Gameplay_Stop":
                            n()(".fakinit-category").html(t.category), n()(".fakinit-task").html(t.task), n()(".fakinit-gameplay-sign").hide(), this.showScreen(".state-gameplay");
                            break;
                        case "Gameplay_Input":
                            t.category = "Text You Up", n()(".fakinit-category").html(t.category), n()(".fakinit-task").html("Sit Tight!<br>Players are answering"), n()(".fakinit-gameplay-sign").hide(), this.showScreen(".state-gameplay");
                            break;
                        case "Vote": {
                            n()("#vote-text").html(t.task);
                            let e = "";
                            for (let i = 0; i < t.players.length; i++) {
                                const a = t.players[i];
                                e += `<button type='button' data-index='${a.index}' class='fakinit-audience-vote-button fakinit-button playername btn btn-block button-send'>${a.name}</button>`
                            }
                            n()("#fakinit-vote-form").html(e), n()(".fakinit-vote-lock").hide(), this.showScreen(".state-vote");
                            break
                        }
                    }
                },
                hideLobbyButtons() {
                    n()("#fakinit-startgame").hide(), n()("#fakinit-stopcountdown").hide(), n()(".fakinit-endbuttons").hide(), n()(".fakinit-change-name-dialog").hide(), n()("#fakinit-lobby-menu-censor").hide()
                },
                setCategory(t) {
                    if (n()(".fakinit-category-background").removeClass("handsoftruth").removeClass("makingnoises").removeClass("facevalue").removeClass("yougottapoint").removeClass("numberpressure").removeClass("textyouup"), n()(".fakinit-category-background-dark").removeClass("handsoftruth").removeClass("makingnoises").removeClass("facevalue").removeClass("yougottapoint").removeClass("numberpressure").removeClass("textyouup"), n()(".fakinit-category-color").removeClass("handsoftruth").removeClass("makingnoises").removeClass("facevalue").removeClass("yougottapoint").removeClass("numberpressure").removeClass("textyouup"), t) {
                        n()(".fakinit-category").html(t);
                        const e = t.replace(/\s/g, "").toLowerCase();
                        n()(".fakinit-category-background").addClass(e), n()(".fakinit-category-background-dark").addClass(e), n()(".fakinit-category-color").addClass(e)
                    }
                },
                startGame: () => (l.app.client.send("SendMessageToRoomOwner", {
                    start: !0
                }), !1),
                stopCountdown: () => (l.app.client.send("SendMessageToRoomOwner", {
                    cancel: !0
                }), !1),
                chooseCategory(t) {
                    const e = n()(t.target).data("params");
                    return l.app.client.send("SendMessageToRoomOwner", {
                        category: e
                    }), !1
                },
                sendReady: () => (l.app.client.send("SendMessageToRoomOwner", {
                    ready: !0
                }), !1),
                sendSkip: () => (l.app.client.send("SendMessageToRoomOwner", {
                    skip: !0
                }), !1),
                sendInput() {
                    const t = this.sanitize(n()("#enteredText").val()).toUpperCase(),
                        e = n()("#fakinit-submit-alert");
                    return e.hide(), 0 === t.length ? (e.html("You can't enter nothing!"), e.show(), !1) : (l.app.client.send("SendMessageToRoomOwner", {
                        answer: !0,
                        msg: t
                    }), !1)
                },
                chooseVote(t) {
                    const e = n()(t.target).data("index");
                    return l.app.client.send("SendMessageToRoomOwner", {
                        vote: e
                    }), !1
                },
                lockVote: () => (l.app.client.send("SendMessageToRoomOwner", {
                    lock: !0
                }), !1),
                chooseAudienceVote(t) {
                    const e = n()(t.target).data("index");
                    return l.app.client.sessionSend("vote", "FakinIt Vote", {
                        type: "vote",
                        vote: e
                    }), this.showScreen(".state-nothing"), !1
                },
                changeName: () => (n()(".fakinit-name-change-form").show(), n()(".fakinit-name-change-button").hide(), !1),
                changeNameCancel: () => (n()("#fakinitNameChange").val(""), n()(".fakinit-name-change-form").hide(), n()(".fakinit-name-change-button").show(), !1),
                changeNameConfirm() {
                    let t = n()("#fakinitNameChange").val().toUpperCase();
                    return t = t.substring(0, 12), t.length > 0 ? (n()("#player-name").html(t), l.app.client.send("SendMessageToRoomOwner", {
                        name: t
                    }), n()(".fakinit-name-change-form").hide(), n()(".fakinit-name-change-button").show()) : alert("You have to enter something!"), !1
                },
                newGameSamePlayers: () => (l.app.client.send("SendMessageToRoomOwner", {
                    start: !0,
                    decision: "PostGame_Continue"
                }), !1),
                newGameNewPlayers: () => (l.app.client.send("SendMessageToRoomOwner", {
                    start: !0,
                    decision: "PostGame_NewGame"
                }), !1),
                censorPlayer(t) {
                    if (!l.app.client.isRole("player")) return;
                    const e = n()(t.target);
                    if (e.hasClass("fakinit-button-red")) {
                        const t = c.c.htmlUnescape(e.data("censor"));
                        l.app.client.send("SendMessageToRoomOwner", {
                            censorPlayerId: t
                        })
                    } else e.html("?"), e.addClass("fakinit-button-red")
                },
                censor(t) {
                    if (!l.app.client.isRole("player")) return;
                    const e = n()(t.target);
                    if (e.hasClass("fakinit-button-red")) {
                        const t = c.c.htmlUnescape(e.data("censor"));
                        l.app.client.send("SendMessageToRoomOwner", {
                            censor: t
                        })
                    } else e.html("?"), e.addClass("fakinit-button-red")
                },
                sanitize(t) {
                    return t = this.sanitizeInput(t).replace(/'/g, "’"), c.c.htmlEscape(t).trim()
                },
                sanitizeInput: t => t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,=<>:;]/gi, ""),
                validateInput(t) {
                    const e = n()(t.target);
                    let i = e.val();
                    const a = i.length,
                        o = e.attr("maxLength");
                    if (i = this.sanitizeInput(i), o)
                        for (; i.length > o;) i = i.slice(0, -1);
                    i.length !== a && e.val(i)
                }
            })
        },
        27091: t => {
            "use strict";
            t.exports = function(t, e) {
                return e || (e = {}), t ? (t = String(t.__esModule ? t.default : t), e.hash && (t += e.hash), e.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(t) ? '"'.concat(t, '"') : t) : t
            }
        },
        67169: (t, e, i) => {
            "use strict";
            t.exports = i.p + "games/fakinit/817a13dfb1b526a648e9.png"
        },
        53588: (t, e, i) => {
            "use strict";
            t.exports = i.p + "games/fakinit/45264568e8f60963f475.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/2987.a3a88a08c2c7b1aa3e15.js.map