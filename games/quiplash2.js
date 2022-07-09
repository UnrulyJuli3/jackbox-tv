(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/quiplash2"], {
        47214: (t, e, i) => {
            "use strict";
            i.d(e, {
                E: () => v
            });
            var n = i(13469),
                s = i.n(n),
                o = i(19755),
                a = i.n(o),
                l = i(72316),
                u = i.n(l),
                c = i(63574),
                r = i.n(c),
                d = i(10972),
                p = i(2720);

            function h(t, e, i, n, s, o, a) {
                try {
                    var l = t[o](a),
                        u = l.value
                } catch (t) {
                    return void i(t)
                }
                l.done ? e(u) : Promise.resolve(u).then(n, s)
            }

            function b(t) {
                return function() {
                    var e = this,
                        i = arguments;
                    return new Promise((function(n, s) {
                        var o = t.apply(e, i);

                        function a(t) {
                            h(o, n, s, a, l, "next", t)
                        }

                        function l(t) {
                            h(o, n, s, a, l, "throw", t)
                        }
                        a(void 0)
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
            const m = r().View.extend({
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
                                let [e, i] = t, n = i || "no-theme";
                                return e && (n += " show"), n
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
                    d.app.analytics.trackEvent({
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
                    }), .5), e && d.app.analytics.trackEvent({
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
            class v {
                static get isVisible() {
                    return !!this.view && "on" === this.view.state
                }
                static update(t, e) {
                    var i = this;
                    return b((function*() {
                        e && "PostGame" === e.lobbyState ? (i.view || (yield i.init(t, e)), i.show()) : i.hide()
                    }))()
                }
                static init(t) {
                    var e = this;
                    return b((function*() {
                        t ? (e.bannerData = yield e.loadBannerData(t), e.bannerData && (e.view = new m({
                            model: new(u().Model)(e.bannerData)
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
                    return b((function*() {
                        try {
                            const e = yield fetch(p.v.banners.url), i = yield e.json();
                            return !(!i || !i.postGameBanners) && i.postGameBanners[t]
                        } catch (t) {
                            return console.error("Unable to load banner data", t), !1
                        }
                    }))()
                }
            }
            g(v, "view", null), g(v, "isInitialized", !1), g(v, "bannerConfig", null)
        },
        62353: (t, e, i) => {
            "use strict";
            i.d(e, {
                I: () => v
            });
            var n = i(13469),
                s = i.n(n),
                o = i(19755),
                a = i.n(o),
                l = i(72316),
                u = i.n(l),
                c = i(63574),
                r = i.n(c),
                d = i(10972),
                p = i(81127),
                h = i(40543),
                b = i(89446),
                g = i(47214);

            function m(t, e, i, n, s, o, a) {
                try {
                    var l = t[o](a),
                        u = l.value
                } catch (t) {
                    return void i(t)
                }
                l.done ? e(u) : Promise.resolve(u).then(n, s)
            }
            const v = r().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(t) {
                    this.mergeOptions(t, ["appId", "appTag"]), d.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), d.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(u().Model)({});
                    const e = d.app.client.parseEntities();
                    this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), d.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), d.app.client.on("client:connection", this.onConnectionMessageWithContext), d.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), d.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", b.c.safeText(d.app.client.name), {
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
                    })) : g.E.hide(), d.app.storage && d.app.storage.isSupported && t.platformId && d.app.storage.setTag(`platform-${t.platformId}`)
                },
                update() {
                    return (t = function*() {
                        return null
                    }, function() {
                        var e = this,
                            i = arguments;
                        return new Promise((function(n, s) {
                            var o = t.apply(e, i);

                            function a(t) {
                                m(o, n, s, a, l, "next", t)
                            }

                            function l(t) {
                                m(o, n, s, a, l, "throw", t)
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
                    this.update().catch(this.caughtError), a()(".gallery-link").click(this.artifactClicked.bind(this)), d.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(t) {
                    let e = `<div class='icon-${d.app.client.roles.broadcaster.platform}'>${d.app.client.roles.broadcaster.name}</div>`;
                    e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : d.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), h.b.show("custom", {
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
                    this.model.stopListening(), d.app.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), d.app.client.off("client:connection", this.onConnectionMessageWithContext), d.app.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), d.app.client.off("client:disconnected", this.onDisconnectedWithContext)
                },
                artifactClicked() {
                    d.app.analytics.trackEvent({
                        category: "PostGame",
                        action: "galleryClicked",
                        label: this.getOption("appTag")
                    }), p.Q.setAsViewed(0)
                },
                showScreen(t, e) {
                    const i = a()(t);
                    return this.activeScreen && t === this.activeScreen || (this.activeScreen && (a()(this.activeScreen).fadeOut("fast", (() => {})), a()(this.activeScreen).show(), a()(this.activeScreen).addClass("pt-page-off")), i.hide(), i.removeClass("pt-page-off"), i.removeClass("pt-page-moveToLeft"), i.fadeIn("fast", (() => {
                        e && e()
                    })), this.activeScreen = t, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = s().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    h.b.vibrate()
                },
                trackScreenView() {
                    d.app.analytics.trackScreenView(this.getOption("appTag")), d.app.storage && d.app.storage.isSupported && d.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    d.app.storage && d.app.storage.isSupported && (d.app.storage.remove("roomCode"), d.app.storage.remove("reconnect")), h.b.show("error", {
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
                onConnectionMessage(t) {
                    const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
                    if (h.b.show("toast", {
                            text: e
                        }), "connected" === t.status) {
                        const t = d.app.client.parseEntities();
                        this.model.set(t)
                    }
                },
                onResize() {
                    const t = a()("#player").outerHeight(!0) || 0,
                        e = g.E.isVisible ? a()("#slide-in-banner").outerHeight(!0) : 0,
                        i = a()(window).width(),
                        n = a()(window).height() - t;
                    a()(`.${this.getOption("appTag")}-page`).css("height", n - e), a()(`.${this.getOption("appTag")}-page`).attr("height", n - e), a()(`.${this.getOption("appTag")}-page`).css("top", t), a()(`.${this.getOption("appTag")}-page`).css("width", i), a()(`.${this.getOption("appTag")}-page`).attr("width", i)
                }
            })
        },
        38039: (t, e, i) => {
            "use strict";
            i.d(e, {
                U: () => n
            });
            class n {
                constructor(t) {
                    var e, i;
                    i = void 0, (e = "topNode") in this ? Object.defineProperty(this, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : this[e] = i, this.topNode = t
                }
                reset() {
                    this.nodeStack = [this.topNode], this.resetNode(this.topNode), this.topNode.e.show()
                }
                resetNode(t) {
                    t.e.hide(), t.branches && t.branches.forEach((t => this.resetNode(t.node)))
                }
                input(t) {
                    if ("back" === t) {
                        if (this.nodeStack.length <= 1) return;
                        return this.nodeStack.pop().e.hide(), void this.nodeStack[this.nodeStack.length - 1].e.show()
                    }
                    const e = this.nodeStack[this.nodeStack.length - 1];
                    e.branches && e.branches.forEach((e => {
                        if (e.input === t) {
                            this.nodeStack[this.nodeStack.length - 1].e.hide();
                            const t = e.node;
                            t.e.show(), this.nodeStack.push(t)
                        }
                    }))
                }
            }
        },
        16190: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                MainView: () => g
            });
            var n = i(19755),
                s = i.n(n),
                o = i(13469),
                a = i.n(o),
                l = i(39666),
                u = i(62353),
                c = i(38039),
                r = i(40543),
                d = i(81127),
                p = i(89446),
                h = i(10972);

            function b(t, e, i, n, s, o, a) {
                try {
                    var l = t[o](a),
                        u = l.value
                } catch (t) {
                    return void i(t)
                }
                l.done ? e(u) : Promise.resolve(u).then(n, s)
            }
            const g = u.I.extend({
                template: a().template('<div id="page-quiplash" class="page"> <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Rokkitt:400,700"/> <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Rokkitt:400,700"/> <template id="quiplash2-vote-button"> <div class="quiplash2-button-group"> <button type="button" style="flex-grow:2" data-vote="{{ order }}" class="quiplash2-vote-button quiplash2-button {{ quiplash2Disabled }} btn btn-lg">{{ choiceString }}</button> {{# if (censorable) { }} <button data-censor="{{ order }}" class="quiplash2-censor-button quiplash2-button btn btn-lg" style="flex-grow:0;flex-basis:35px">X</button> {{# } }} </div> </template> <div id="player"> <h1><%=username%></h1> </div> <div id="quiplash-preload" class="quiplash-preload"></div> <div id="game" class="game pt-pageholder"> <div id="state-lobby" class="pt-page-off quiplash2-page"> <div class="container"> <div class="pure-u-1"></div> <div id="lobby-main-menu"> <p id="quiplash-lobby-text" class="quiplash-text"></p> <form class="pure-form"> <button type="button" id="quiplash-startgame" class="lobby-button quiplash2-button btn btn-lg btn-block">everybody\'s in</button> <button type="button" id="quiplash-stopcountdown" class="lobby-button quiplash2-button btn btn-lg btn-block">cancel</button> <button type="button" id="quiplash-sameplayers" class="lobby-button quiplash2-button btn btn-lg btn-block quiplash-endbuttons">same players</button> <button type="button" id="quiplash-newplayers" class="lobby-button quiplash2-button btn btn-lg btn-block quiplash-endbuttons">new players</button> </form> <div class="pure-u-1"></div> <form class="pure-form"> <button type="button" id="quiplash-lobby-menu-ugc" class="menu-button lobby-button quiplash2-button btn btn-lg btn-block">EPISODES MENU</button><br> <button type="button" id="quiplash-lobby-menu-censor" class="menu-button lobby-button quiplash2-button btn btn-lg btn-block">Censor Menu</button><br> </form> <div id="quiplash2-lobby-postgame" class="quiplash2-quips"> <a target="_blank" class="gallery-link" href=""></a> </div> </div> <div id="lobby-ugc"> <p id="lobby-ugc-error"></p> <button type="button" class="quiplash-lobby-menu-back quiplash2-button btn btn-lg btn-block">back</button><br> <div id="lobby-ugc-enter" class="lobby-ugc-option"> <form class=""> <div class="row"> <div class="col-xs-12"> <p id="lobby-ugc-help" class="quiplash-text">to load a custom episode, go to "make your own" or enter a 7-letter episode id</p> <p class="quiplash-text-box quiplash-text">Load an episode by id:</p> </div> <div class="col-xs-12"> <div class="quiplash2-button-group"> <input id="lobby-ugc-input" type="text" style="flex-grow:2" class="capitalized jbg-input" placeholder="???-????"/> <button type="submit" id="lobby-ugc-submit" style="flex-grow:0;min-width:120px" class="quiplash2-button btn quiplash-text">submit</button> </div> </div> </div> <small class="help quiplash-text quiplash-text-danger">warning : user generated content is not rated.</small> </form> <div class="quiplash-ugc-previous"> <p class="quiplash-text">Or select an episode:</p> <table id="lobby-ugc-history" class="quiplash-list"></table> </div> </div> <div id="lobby-ugc-choices" class="lobby-ugc-option"> <div class="quiplash-text-box" id="lobby-ugc-choices-content-id quiplash-text"></div> <button type="button" id="lobby-ugc-clear" class="quiplash2-button quiplash2-button-black button-xlarge pure-button">unload</button><br> <button type="button" id="lobby-ugc-report" class="quiplash2-button quiplash2-button-black button-xlarge pure-button">report</button> <button type="button" id="lobby-ugc-view-author" class="quiplash2-button button-xlarge pure-button">view author</button> </div> </div> <div id="lobby-censor"> <div class="pure-u-1"></div> <form class="pure-form"> <div class="pure-u-1"> <button type="button" class="quiplash-lobby-menu-back quiplash2-button btn btn-lg btn-block" style="margin-left:0;margin-right:0">back</button> </div> <div class="pure-u-1"></div> <div id="lobby-censor-players" class="pure-u-1"></div> <div class="quiplash-text quiplash-text-alt">Hit X to CENSOR player for rest of the game, removing their answers and name. (It\'s kind of intense.)</div> </form> </div> </div> </div> <div id="state-logo" class="pt-page-off quiplash2-page quiplash2-logo-image"> </div> <div id="state-round" class="pt-page-off quiplash2-page"> <div class="quiplash2-round-image quiplash2-round-0"></div> <div class="quiplash2-round-image quiplash2-round-1"></div> <div class="quiplash2-round-image quiplash2-round-2"></div> </div> <div id="state-answer-question" class="pt-page-off quiplash2-page"> <div class="container"> <p id="question-text-alt" class="quiplash-text-alt"></p> <p id="question-text" class="quiplash-text"></p> <span id="quiplash-submit-alert" class="alert alert-info">Alert message goes here</span> <form class="pure-form" id="quiplash-answer-field"> <div class="pure-u-1 gridmargin"> <input id="quiplash-answer-input" name="quiplash-answer" class="pure-input-1 capitalize jbg-input quiplash2-answer-input" type="text" maxlength="45" placeholder="ANSWER HERE" autocapitalize="off" autocorrect="off" autocomplete="off"> </div> <div class="pure-u-1 gridmargin"> <button type="submit" id="quiplash-submit-answer" class="quiplash2-button button-large pure-button capitalize" style="width:100%"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;SEND</button> </div> <div class="pure-u-1 gridmargin"></div> <div class="pure-u-1 gridmargin"> <button type="button" id="quiplash-submit-safetyquip" class="quiplash2-button button-large pure-button capitalize" style="width:100%">SAFETY QUIP<br/>(HALF POINTS)</button> </div> <div class="pure-u-1 gridmargin"> <button type="button" id="quiplash-audience-censor" class="quiplash2-button button-large pure-button capitalize" style="width:100%;display:none">CENSOR AUDIENCE</button> </div> <div id="quiplash-submit-answer-loading" style="display:none" class="quiplash2-button-loading"></div> </form> <div id="quiplash-suggestions" class="pure-g"></div> </div> </div> <div id="state-done-answering" class="pt-page-off quiplash2-page"> <div style="padding-top:5px"> <p class="quiplash-text">Thanks for your answers!</p> </div> <div class="pure-u-1 gridmargin"> <button type="button" id="quiplash-audience-censor-done" class="quiplash2-button button-large pure-button capitalize" style="width:100%">CENSOR AUDIENCE</button> </div> </div> <div id="state-vote" class="pt-page-off quiplash2-page"> <div class="container"> <p id="question-text-alt" class="quiplash-text-alt"></p> <p id="question-text" class="quiplash-text"></p> <p id="vote-text"></p> <form id="quiplash-vote" class="pure-form"></form> </div> </div> <div class="pt-page-off quiplash2-page background-yellow" id="state-ugc"> <div id="ugc-submit-dialog" style="display:none" class="container"> <div class="quiplash-text-box">By sharing content, you agree to our <a href="http://www.jackboxgames.com/terms-of-service/" target="_blank">Terms of service</a></div> <button id="ugc-submit-confirm" class="quiplash2-button quiplash2-button-black button-xlarge pure-button">agree and share</button><br/> <button id="ugc-submit-cancel" class="quiplash2-button quiplash2-button-black button-xlarge pure-button">back to menu</button> </div> <div id="ugc-container" class="container"> <div id="ugc-toggle-visibility" class="ugc-option"> <span class="quiplash-text">Tap to show/hide prompts</span><br/> <div class="quiplash-text-box"> <div id="ugc-toggle-visibility-button-controller" class="ugc-toggle-visibility-button quiplash-image-controller ugc-toggle-visibility-button pure-u-1-2" data-target="controller"></div> <div id="ugc-toggle-visibility-button-screen" class="ugc-toggle-visibility-button quiplash-image-screen ugc-toggle-visibility-button-screen pure-u-1-2" data-target="screen"></div> </div> </div> <div id="ugc-episode-name"></div> <div id="ugc-new" class="ugc-option"> <button type="button" id="ugc-new-button" class="quiplash2-button quiplash2-button-black btn btn-lg">create a new episode</button> </div> <h3 class="ugc-option quiplash-text-box quiplash-text ugc-load">Previous episodes:</h3> <table id="ugc-load" class="ugc-option quiplash-list"> </table> <div id="ugc-text"></div> <div id="ugc-no-actions-text"></div> <div id="ugc-title" class="ugc-option"> <p class="quiplash-text-box"> </p> <form class=""> <div class="form-group"> <p class="quiplash-text">First things first, enter a name for the episode that will contain all your prompts and hit create.</p> <input id="ugc-title-input" class="lowercase form-control quiplash2-answer-input input-lg" type="text" placeholder="" autocapitalize="off" autocorrect="off" autocomplete="off"/> </div> <div class="form-group"> <button type="submit" id="ugc-title-button" name="ugc-title-button" class="ugc-form-button quiplash2-button quiplash2-button-black btn btn-lg pull-right">create</button> <button type="button" id="ugc-exit-button" class="ugc-form-button quiplash2-button quiplash2-button-black btn btn-lg pull-left">back to episodes</button> </div> </form> </div> <form class="pure-form"> <div class="pure-u-1"> <input id="ugc-add-input" class="lowercase ugc-input pure-input-1 quiplash2-answer-input ugc-option ugc-add" type="text" placeholder="enter a prompt" autocapitalize="off" autocorrect="off" autocomplete="off"/> </div> <div class="ugc-option ugc-add"> <button type="submit" id="ugc-add-button" name="ugc-add-button" class="ugc-form-button quiplash2-button quiplash2-button-black button-xlarge pure-button gridmargin right">add prompt</button> </div> <div id="ugc-close" class="ugc-option"> <button type="button" id="ugc-close-button" class="ugc-form-button quiplash2-button quiplash2-button-black button-xlarge pure-button gridmargin left">close</button> </div> <div id="ugc-save" class="ugc-option"> <button type="save" id="ugc-save-button" class="ugc-form-button quiplash2-button quiplash2-button-black button-xlarge pure-button gridmargin left">done</button> </div> </form> <table id="ugc-remove" class="ugc-option quiplash-list"> <thead></thead> <tbody></tbody> </table> <div id="ugc-unlock" class="ugc-option"> <button type="button" id="ugc-unlock-button" class="quiplash2-button quiplash2-button-black btn btn-lg btn-block">edit</button> </div> <div id="ugc-save" class="ugc-option"> <button type="save" id="ugc-save-button" class="quiplash2-button quiplash2-button-black btn btn-lg btn-block">save</button> </div> <div id="ugc-submit" class="ugc-option"> <button type="button" id="ugc-submit-button" class="quiplash2-button quiplash2-button-black btn btn-lg btn-block">publish</button> </div> <div id="ugc-play" class="ugc-option"> <button type="button" id="ugc-play-button" class="quiplash2-button quiplash2-button-black btn btn-lg btn-block">play</button> </div> <div id="ugc-remove-content" class="ugc-option"> <button type="button" id="ugc-delete-button" class="quiplash2-button quiplash2-button-black btn btn-lg btn-block ugc-remove-content-button">delete</button> <div id="ugc-remove-content-dialog" style="display:none" class="well well-sm quiplash-confirm-dialog"> <p class="quiplash-text quiplash-text-box quiplash-text-danger">Are you sure you want to delete this episode?</p> <button id="ugc-remove-content-confirm" class="quiplash2-button quiplash2-button-black">Yes</button> <button id="ugc-remove-content-cancel" class="quiplash2-button">No</button> </div> </div> <div id="ugc-exit" class="ugc-option"> <button type="button" id="ugc-exit-button" class="quiplash2-button quiplash2-button-black btn btn-lg btn-block">back to episodes</button> </div> </div> </div> </div> </div> '),
                testBlob: null,
                prevRoomState: "",
                prevPlayerState: "",
                doneAnswering: !1,
                lobbyMenu: null,
                events: {
                    "click #quiplash-startgame": "startGame",
                    "click #quiplash-stopcountdown": "stopCountdown",
                    "click #quiplash-sameplayers": "newGameSamePlayers",
                    "click #quiplash-newplayers": "newGameNewPlayers",
                    "click #quiplash-submit-answer": "submitAnswer",
                    "click #quiplash-submit-safetyquip": "submitSafetyQuip",
                    "click #quiplash-audience-censor": "submitAudienceCensor",
                    "click #quiplash-audience-censor-done": "submitAudienceCensor",
                    "click .quiplash2-vote-button": "vote",
                    "click .quiplash-lobby-menu-back": "lobbyMenuBack",
                    "click #quiplash-lobby-menu-ugc": "lobbyMenuUgc",
                    "click #quiplash-lobby-menu-censor": "lobbyMenuCensor",
                    "click .quiplash-censor-player-button": "censorPlayer",
                    "click .quiplash2-censor-button": "censor",
                    "click #lobby-ugc-submit": "lobbyUgcSubmit",
                    "click .quiplash-history-button": "lobbyUgcHistory",
                    "click #lobby-ugc-clear": "lobbyUgcClear",
                    "click #lobby-ugc-report": "lobbyUgcReport",
                    "click #lobby-ugc-view-author": "lobbyUgcViewAuthor",
                    "click #ugc-new-button": "ugcNew",
                    "click .ugc-load-button": "ugcLoad",
                    "click .ugc-remove-content-button": "ugcRemoveContent",
                    "click #ugc-remove-content-confirm": "ugcRemoveContentConfirm",
                    "click #ugc-remove-content-cancel": "ugcRemoveContentCancel",
                    "click #ugc-close-button": "ugcClose",
                    "click #ugc-title-button": "ugcTitle",
                    "click #ugc-add-button": "ugcAdd",
                    "click .ugc-remove-button": "ugcRemove",
                    "click #ugc-clear-button": "ugcClear",
                    "click .ugc-toggle-visibility-button": "ugcToggleVisibility",
                    "click #ugc-save-button": "ugcSave",
                    "click #ugc-submit-button": "ugcSubmit",
                    "click #ugc-submit-confirm": "ugcSubmitConfirm",
                    "click #ugc-submit-cancel": "ugcSubmitCancel",
                    "click #ugc-unlock-button": "ugcUnlock",
                    "click #ugc-play-button": "ugcPlay",
                    "click #ugc-exit-button": "ugcExit"
                },
                onAttach() {
                    u.I.prototype.onAttach.apply(this), this.lobbyMenu = new c.U({
                        e: this.$el.find("#lobby-main-menu"),
                        branches: [{
                            input: "ugc",
                            node: {
                                e: this.$el.find("#lobby-ugc")
                            }
                        }, {
                            input: "censor",
                            node: {
                                e: this.$el.find("#lobby-censor")
                            }
                        }]
                    }), this.lobbyMenu.reset(), s()(".quiplash2-button").hover((function() {
                        s()(this).toggleClass("quiplash2-button-hover")
                    })), this.$el.find("#lobby-ugc-input").mask("aaa-aaaa", {
                        placeholder: "???-????"
                    }), s()("input").bind("input propertychange", this.validateInput.bind(this)), this.update().catch(this.caughtError)
                },
                renderTemplate(t, e) {
                    const i = a().templateSettings;
                    a().templateSettings = {
                        evaluate: /\{\{#([\s\S]+?)\}\}/g,
                        interpolate: /\{\{\{(\s*\w+?\s*)\}\}\}/g,
                        escape: /\{\{(\s*\w+?\s*)\}\}(?!\})/g
                    };
                    const n = a().template(t)(e);
                    return a().templateSettings = i, n
                },
                update() {
                    var t, e = this;
                    return (t = function*() {
                        if (!e.model.get("room")) return void e.showScreen("#state-logo");
                        const t = e.model.get("room") || {},
                            n = e.model.get("player") || {},
                            o = n ? n.state : "",
                            u = t ? t.state : "",
                            c = n.playerColor ? n.playerColor : "#E4BC65";
                        e.$el.find("#player").css("background-color", c);
                        const b = p.c.adjustColor(c, .52);
                        if (e.$el.find("#state-lobby").css("background-color", b), e.$el.find("#state-answer-question-audience").css("background-color", b), e.$el.find("#state-answer-question").css("background-color", b), e.$el.find("#state-done-answering").css("background-color", b), e.$el.find("#state-vote").css("background-color", b), e.$el.find("#state-ugc").css("background-color", b), e.currentAnswerQuestionId = -1, e.$el.find("#quiplash-submit-alert").hide(), "UGC" !== u)
                            if (s()(".ugc-option").hide(), "RoomFull" !== o)
                                if ("GameLocked" !== o) {
                                    if (u && "Lobby" === u) {
                                        if (!h.app.client.isRole("player") && "PostGame" !== t.lobbyState) return void e.showScreen("#state-logo");
                                        if (e.formattedActiveContentId = t.formattedActiveContentId, e.hideLobbyButtons(), s()(".menu-button").hide(), n.canDoUGC) {
                                            if (s()(".lobby-ugc-option").hide(), t.formattedActiveContentId ? (t.isLocal ? e.$el.find("#lobby-ugc-choices-content-id").html("local content loaded") : e.$el.find("#lobby-ugc-choices-content-id").html(`published content loaded<br><span class="lobby-episode-id quiplash-text capitalize">${t.formattedActiveContentId}</span>`), e.$el.find("#lobby-ugc-choices").show(), !t.isLocal && n.canReport ? e.$el.find("#lobby-ugc-report").show() : e.$el.find("#lobby-ugc-report").hide(), !t.isLocal && n.canViewAuthor ? e.$el.find("#lobby-ugc-view-author").show() : e.$el.find("#lobby-ugc-view-author").hide()) : e.$el.find("#lobby-ugc-enter").show(), n.history) {
                                                e.$el.find("#lobby-ugc-help").hide();
                                                let i = "";
                                                n.history.forEach((e => {
                                                    e.metadata && e.metadata.title ? (i += `<tr data-id="${e.remoteContentId?e.remoteContentId:e.localContentId}" class="quiplash-history-button">`, i += `<td class="quiplash-list-fill quiplash-text">${e.metadata.title}`, e.remoteContentId && (i += `<br><span class="lobby-episode-id quiplash-text capitalize">${e.formattedRemoteContentId}</span>`), i += "</td>", i += "</tr>") : l.uT("Quiplash2 update - invalid metadata detected", {
                                                        extra: {
                                                            episode: e,
                                                            playerBlob: n,
                                                            roomBlob: t
                                                        }
                                                    })
                                                })), e.$el.find("#lobby-ugc-history").html(i), n.history && n.history.length > 0 ? s()(".quiplash-ugc-previous").show() : s()(".quiplash-ugc-previous").hide()
                                            } else e.$el.find("#lobby-ugc-help").show();
                                            e.$el.find("#quiplash-lobby-menu-ugc").show()
                                        }
                                        if (n.canCensor) {
                                            if (n.censorablePlayers) {
                                                let t = "";
                                                n.censorablePlayers.forEach((e => {
                                                    t += '<div class="pure-u-1">', t += `<div class="quiplash-censorable left quiplash-text"><span>${e.name}</span></div>`, t += `<button type="button" data-censor="${p.c.htmlEscape(e.id)}" class="quiplash-censor-player-button button-large pure-button quiplash2-button right">X</button>`, t += "</div>"
                                                })), e.$el.find("#lobby-censor-players").html(t)
                                            }
                                            n.censorablePlayers && n.censorablePlayers.length > 0 && e.$el.find("#quiplash-lobby-menu-censor").show()
                                        }
                                        n.lastUGCResult && !n.lastUGCResult.success && n.lastUGCResult.error ? e.$el.find("#lobby-ugc-error").html(`<span>${n.lastUGCResult.error}</span>`) : e.$el.find("#lobby-ugc-error").html("");
                                        const o = t.artifact;
                                        if (o && o.success && o.rootId) {
                                            let t = "games.jackbox.tv"; - 1 !== o.rootId.indexOf("test") && (t = "games-test.jackbox.tv");
                                            const n = "Quiplash2Game";
                                            o.categoryId = n;
                                            const s = `https://${t}/artifact/${n}/${o.artifactId}/`;
                                            try {
                                                const t = yield Promise.resolve().then(i.t.bind(i, 218, 17));
                                                e.$el.find(".gallery-link").attr("href", s);
                                                const n = `<img src="${t.default}" />`;
                                                e.$el.find(".gallery-link").html(n), d.Q.add(o, e.getOption("appTag"))
                                            } catch (t) {
                                                console.error("failed to load gallery image")
                                            }
                                        } else e.$el.find("#quiplash2-lobby-postgame").html("");
                                        if (!n.isAllowedToStartGame) return e.$el.find("#quiplash-lobby-text").html("Sit back and relax!"), void e.showScreen("#state-lobby");
                                        const a = t.lobbyState;
                                        "WaitingForMore" === a ? e.$el.find("#quiplash-lobby-text").html("Waiting for all players to join") : "CanStart" === a ? (e.$el.find("#quiplash-lobby-text").html("Press this button when everybody has joined"), e.$el.find("#quiplash-startgame").show()) : "Countdown" === a ? (e.$el.find("#quiplash-lobby-text").html("Press this button to cancel game start"), e.$el.find("#quiplash-stopcountdown").show()) : "PostGame" === a && (e.$el.find("#quiplash-lobby-text").html("What do you want to do?"), s()(".quiplash-endbuttons").show()), e.showScreen("#state-lobby")
                                    } else if ("Gameplay_Logo" === u || "Logo" === u) {
                                        if (e.showScreen("#state-logo"), "Lobby" === e.prevRoomState) {
                                            const t = "Lobby",
                                                i = "gameStarted",
                                                n = e.formattedActiveContentId ? "quiplash2-ugc" : "quiplash2";
                                            h.app.analytics.trackEvent({
                                                category: t,
                                                action: i,
                                                label: n
                                            })
                                        }
                                        if ("Gameplay_AnswerQuestion" === e.prevPlayerState && !1 === e.doneAnswering) {
                                            const t = e.$el.find("#quiplash-answer-input").val();
                                            "" !== t && (h.app.client.send("SendMessageToRoomOwner", {
                                                answer: t,
                                                questionId: e.prevAnswerQuestionId
                                            }), e.prevAnswerQuestionId = -1, e.doneAnswering = !0)
                                        }
                                    } else if ("Gameplay_Round" === u) s()(".quiplash2-round-image").hide(), s()(`.quiplash2-round-image.quiplash2-round-${t.round}`).show(), e.showScreen("#state-round");
                                    else if ("Gameplay_AnswerQuestion" === u)
                                        if ("Gameplay_AnswerQuestion" === o) {
                                            if (!n.question) return e.$el.find("#quiplash-audience-censor-done").hide(), n.canCensor && e.$el.find("#quiplash-audience-censor-done").show(), e.showScreen("#state-done-answering"), void(e.doneAnswering = !0);
                                            if (e.doneAnswering = !1, e.$el.find("#quiplash-answer-input").val(""), e.$el.find("#quiplash-submit-answer").removeAttr("disabled"), e.$el.find("#quiplash-answer-field").show(), e.$el.find("#quiplash-submit-alert").hide(), e.$el.find("#quiplash-submit-answer").show(), e.$el.find("#quiplash-audience-censor").hide(), !0 === t.safetyQuip ? e.$el.find("#quiplash-submit-safetyquip").show() : e.$el.find("#quiplash-submit-safetyquip").hide(), n.canCensor && e.$el.find("#quiplash-audience-censor").show(), e.$el.find("#state-answer-question #question-text").html(n.question.prompt.replace(/<BLANK>/gi, "________")), e.$el.find("#state-answer-question #question-text-alt").html(""), void 0 !== n.question.quip ? (e.$el.find("#state-answer-question #question-text-alt").html(n.question.quip.replace(/<BLANK>/gi, "________")), e.$el.find("#state-answer-question #question-text").removeClass("quiplash-text"), e.$el.find("#state-answer-question #question-text").addClass("quiplash-text-big")) : (e.$el.find("#state-answer-question #question-text").addClass("quiplash-text"), e.$el.find("#state-answer-question #question-text").removeClass("quiplash-text-big")), n.showError) {
                                                const t = e.$el.find("#quiplash-submit-alert");
                                                e.$el.find("#quiplash-submit-alert").html("You entered the same thing as someone else! Try again."), t.addClass("alert-info"), t.removeClass("alert-danger"), t.show()
                                            }
                                            e.prevAnswerQuestionId = n.question.id, e.currentAnswerQuestionId = n.question.id, e.showScreen("#state-answer-question")
                                        } else e.$el.find("#quiplash-answer-input").val(""), e.$el.find("#quiplash-submit-answer").removeAttr("disabled"), e.$el.find("#quiplash-answer-field").hide(), e.$el.find("#quiplash-submit-alert").hide(), e.$el.find("#quiplash-submit-safetyquip").hide(), e.$el.find("#quiplash-submit-answer").hide(), e.$el.find("#quiplash-audience-censor").hide(), t.audienceQuip && t.canDoAudiencePlay ? (e.$el.find("#state-answer-question #question-text").html(t.audienceQuip.replace(/<BLANK>/gi, "________")), e.$el.find("#quiplash-answer-field").show(), e.$el.find("#quiplash-submit-answer").show()) : e.$el.find("#state-answer-question #question-text").html("You’re in the audience! Wait for the time to vote."), e.showScreen("#state-answer-question");
                                    else if ("Gameplay_Vote" === u) {
                                        if (e.$el.find("#state-vote #question-text-alt").html(""), !n.canCensor && n.doneVoting) return e.$el.find("#state-vote #vote-text").html("Wait for the other players!"), e.$el.find("#quiplash-vote").html(""), void e.showScreen("#state-vote");
                                        t.question ? e.$el.find("#state-vote #question-text").html(t.question.prompt.replace(/<BLANK>/gi, "________")) : e.$el.find("#state-vote #question-text").html("");
                                        const i = n.censorOnly || n.doneVoting ? "" : "Which one do you like more?";
                                        e.$el.find("#state-vote #vote-text").html(i);
                                        let o = "";
                                        if (t.choices && t.order)
                                            for (let i = 0; i < t.order.length; i++) {
                                                const s = t.order[i];
                                                if (n.ignore) {
                                                    let t = !1;
                                                    for (let e = 0; e < n.ignore.length; e++)
                                                        if (n.ignore[e] === s) {
                                                            t = !0;
                                                            break
                                                        } if (t) continue
                                                }
                                                const a = {
                                                    order: t.order[i].toString(),
                                                    choiceString: p.c.htmlUnescape(t.choices[s].toString()),
                                                    censorable: t.isCensored && !t.isCensored[s] && n.canCensor,
                                                    quiplash2Disabled: n.censorOnly || n.doneVoting ? "quiplash2-disabled" : ""
                                                };
                                                o += e.renderTemplate(e.$el.find("#quiplash2-vote-button").html(), a)
                                            }
                                        e.notify(), e.$el.find("#quiplash-vote").html(o), s()(".quiplash2-disabled").attr("disabled", "disabled"), e.showScreen("#state-vote")
                                    } else if ("Gameplay_R3Vote" === u) {
                                        if (e.$el.find("#state-vote #question-text-alt").html(""), !n.canCensor && n.doneVoting) return e.$el.find("#state-vote #vote-text").html("Wait for the other players!"), e.$el.find("#quiplash-vote").html(""), void e.showScreen("#state-vote");
                                        e.$el.find("#state-vote #question-text").html(t.question.prompt.replace(/<BLANK>/gi, "________")), void 0 !== t.question.quip ? (e.$el.find("#state-vote #question-text-alt").html(t.question.quip.replace(/<BLANK>/gi, "________")), e.$el.find("#state-vote #question-text").removeClass("quiplash-text"), e.$el.find("#state-vote #question-text").addClass("quiplash-text-big")) : (e.$el.find("#state-vote #question-text").addClass("quiplash-text"), e.$el.find("#state-vote #question-text").removeClass("quiplash-text-big"));
                                        let i = "Which one do you like more?";
                                        if (n.currentVote) switch (n.currentVote) {
                                            case 0:
                                                i = "Award your gold medal to your favorite answer!";
                                                break;
                                            case 1:
                                                i = "Now award your silver medal!";
                                                break;
                                            case 2:
                                                i = "And hand out a bronze medal to your third favorite."
                                        }
                                        e.$el.find("#state-vote #vote-text").html(i);
                                        let o = "",
                                            l = [];
                                        h.app.client.isRole("player") ? n.votes ? l = n.votes : n.canCensor && (l = a().filter(t.choices, (t => t.playerIndex !== n.playerIndex))) : t.choices && (l = t.choices);
                                        for (let t = 0; t < l.length; ++t) {
                                            const i = l[t],
                                                s = i.isCensored || i.hasVote || n.doneVoting || n.censorOnly,
                                                a = {
                                                    order: i.playerIndex.toString(),
                                                    choiceString: i.isCensored ? "********" : p.c.htmlUnescape(i.answer),
                                                    censorable: !i.isCensored && n.canCensor,
                                                    quiplash2Disabled: s ? "quiplash2-disabled" : ""
                                                };
                                            o += e.renderTemplate(e.$el.find("#quiplash2-vote-button").html(), a)
                                        }
                                        e.notify(), e.$el.find("#quiplash-vote").html(o), s()(".quiplash2-disabled").attr("disabled", "disabled"), e.showScreen("#state-vote")
                                    }
                                    e.prevPlayerState = o, e.prevRoomState = u
                                } else r.b.show(Error("Game is in progress. Please wait for a new game to start."), {
                                    willClose: () => {
                                        window.location.reload(!0)
                                    }
                                });
                        else r.b.show(Error("The room is full"), {
                            willClose: () => {
                                window.location.reload(!0)
                            }
                        });
                        else e.updateUGC(t, n)
                    }, function() {
                        var e = this,
                            i = arguments;
                        return new Promise((function(n, s) {
                            var o = t.apply(e, i);

                            function a(t) {
                                b(o, n, s, a, l, "next", t)
                            }

                            function l(t) {
                                b(o, n, s, a, l, "throw", t)
                            }
                            a(void 0)
                        }))
                    })()
                },
                cancelConfirm() {
                    s()(".quiplash2-button-red").removeClass("quiplash-censor-confirm quiplash2-button-red"), s()(".quiplash-confirm-dialog").hide()
                },
                hideLobbyButtons() {
                    this.$el.find("#quiplash-startgame").hide(), this.$el.find("#quiplash-stopcountdown").hide(), s()(".quiplash-endbuttons").hide()
                },
                lobbyMenuBack() {
                    this.lobbyMenu.input("back")
                },
                lobbyMenuUgc() {
                    this.lobbyMenu.input("ugc")
                },
                lobbyMenuCensor() {
                    this.lobbyMenu.input("censor")
                },
                lobbyUgcSubmit() {
                    let t = this.sanitize(this.$el.find("#lobby-ugc-input").val());
                    return t = t.replace(/[^A-Za-z]/gi, ""), t = t.toUpperCase(), this.activateContentId(t), !1
                },
                activateContentId: t => !!t.length && (h.app.client.send("SendMessageToRoomOwner", {
                    activateContentId: !0,
                    contentId: t
                }), !1),
                lobbyUgcHistory(t) {
                    const e = s()(t.currentTarget).data("id");
                    this.activateContentId(e)
                },
                lobbyUgcClear: () => (h.app.client.send("SendMessageToRoomOwner", {
                    clearContentId: !0
                }), !1),
                lobbyUgcReport() {
                    const t = this.model.get("room").formattedActiveContentId;
                    return window.open(`http://support.jackboxgames.com/?episodeID=${t}`, "_blank"), !1
                },
                lobbyUgcViewAuthor: () => (h.app.client.send("SendMessageToRoomOwner", {
                    viewAuthor: !0
                }), !1),
                startGame: () => (h.app.client.send("SendMessageToRoomOwner", {
                    start: !0
                }), !1),
                stopCountdown: () => (h.app.client.send("SendMessageToRoomOwner", {
                    cancel: !0
                }), !1),
                chooseCategory(t) {
                    const e = s()(t.target).data("num");
                    return h.app.client.send("SendMessageToRoomOwner", {
                        chosenCategory: e
                    }), !1
                },
                submitAnswer() {
                    const t = this.sanitize(this.$el.find("#quiplash-answer-input").val()).toUpperCase();
                    if (0 === t.length) {
                        const t = this.$el.find("#quiplash-submit-alert");
                        return t.html("You can't enter nothing!"), t.removeClass("alert-info"), t.addClass("alert-danger"), t.show(), this.alertTimeout && clearTimeout(this.alertTimeout), this.alertTimeout = setTimeout((() => {
                            this.$el.find("#quiplash-submit-alert").hide()
                        }), 5e3), !1
                    }
                    return h.app.client.isRole("player") ? (this.$el.find("#quiplash-submit-answer").attr("disabled", "true"), h.app.client.send("SendMessageToRoomOwner", {
                        answer: t,
                        questionId: this.currentAnswerQuestionId
                    }), this.$el.find("#quiplash-answer-input").val("")) : h.app.client.isRole("audience") && (h.app.client.sessionSend("comment", "Quiplash2 Comments", {
                        type: "comment",
                        comment: t
                    }), this.$el.find("#quiplash-answer-input").val("")), !1
                },
                submitSafetyQuip() {
                    return h.app.client.send("SendMessageToRoomOwner", {
                        safetyQuip: !0,
                        questionId: this.currentAnswerQuestionId
                    }), !1
                },
                submitAudienceCensor() {
                    return h.app.client.send("SendMessageToRoomOwner", {
                        censorAudience: !0,
                        questionId: this.currentAnswerQuestionId
                    }), !1
                },
                vote(t) {
                    const e = s()(t.target).data("vote");
                    return h.app.client.isRole("player") ? h.app.client.send("SendMessageToRoomOwner", {
                        vote: e
                    }) : h.app.client.isRole("audience") && (h.app.client.sessionSend("vote", "Quiplash2 Vote", {
                        type: "vote",
                        vote: e
                    }), this.$el.find("#vote-text").html("Thanks, audience member!"), this.$el.find("#quiplash-vote").html(""), this.showScreen("#state-vote")), s()(".quiplash2-button").removeClass("selected"), s()(t.target).addClass("selected"), !1
                },
                newGameSamePlayers: () => (h.app.client.send("SendMessageToRoomOwner", {
                    start: !0,
                    decision: "PostGame_Continue"
                }), !1),
                newGameNewPlayers: () => (h.app.client.send("SendMessageToRoomOwner", {
                    start: !0,
                    decision: "PostGame_NewGame"
                }), !1),
                censorPlayer(t) {
                    if (t.preventDefault(), !h.app.client.isRole("player")) return !1;
                    const e = s()(t.target);
                    if (e.hasClass("quiplash2-button-red")) {
                        const t = p.c.htmlUnescape(e.data("censor"));
                        h.app.client.send("SendMessageToRoomOwner", {
                            censorPlayerId: t
                        })
                    } else e.html("?"), e.addClass("quiplash2-button-red");
                    return !1
                },
                censor(t) {
                    if (t.preventDefault(), !h.app.client.isRole("player")) return;
                    const e = s()(t.target);
                    if (e.hasClass("quiplash2-button-red")) {
                        const t = p.c.htmlUnescape(e.data("censor"));
                        h.app.client.send("SendMessageToRoomOwner", {
                            censor: t
                        })
                    } else e.html("?"), e.addClass("quiplash2-button-red")
                },
                updateUGC(t, e) {
                    if (s()(".ugc-screen").hide(), s()(".ugc-option").hide(), this.$el.find("#ugc-text").hide(), this.$el.find("#ugc-no-actions-text").hide(), t.controllerVisibility ? s()(".quiplash-image-controller").removeClass("off") : s()(".quiplash-image-controller").addClass("off"), t.screenVisibility ? s()(".quiplash-image-screen").removeClass("off") : s()(".quiplash-image-screen").addClass("off"), this.$el.find("#ugc-remove-content-confirm").data("id", t.localContentId), !e.validActions || !e.prompts) return void this.onResize();
                    for (let t = 0; t < e.validActions.length; t++) {
                        const i = e.validActions[t];
                        s()(`#ugc-${i}`).show()
                    }
                    if (e.validActions.indexOf("add") >= 0 ? (s()(".ugc-add").show(), this.$el.find("#ugc-add-input").focus()) : this.$el.find("#ugc-add-input").val(""), e.validActions.indexOf("save") >= 0 && this.$el.find("#ugc-close").hide(), e.validActions.indexOf("exit") >= 0 && this.$el.find("#ugc-close").hide(), e.validActions.indexOf("title") >= 0 && (this.$el.find("#ugc-title-input").val(""), this.$el.find("#ugc-close").hide()), e.validActions.indexOf("remove-content") >= 0 && this.$el.find("#ugc-delete").show(), e.validActions.indexOf("load") >= 0 && s()(".ugc-load").show(), !e.validActions.length && t.noActionsText && (this.$el.find("#ugc-no-actions-text").html(`<span class="quiplash-text">${t.noActionsText}</span>`), this.$el.find("#ugc-no-actions-text").show()), e.validActions.indexOf("play") < 0 ? this.$el.find("#ugc-episode-name").hide() : this.$el.find("#ugc-episode-name").show(), t.text && (this.$el.find("#ugc-text").html(`<div class="pure-u-1"><span>${t.text}</span></div>`), this.$el.find("#ugc-text").show()), e.episodes) {
                        let i = "";
                        e.episodes = a().sortBy(e.episodes, (t => !!t.remoteContentId)), e.episodes.forEach((n => {
                            n.metadata && n.metadata.title ? (i += "<tr>", i += `<td class="ugc-load-button quiplash-list-fill quiplash-text" data-id="${n.localContentId}" >${n.metadata.title}`, n.remoteContentId && (i += `<br><span class="quiplash-text lobby-episode-id capitalize">${n.formattedRemoteContentId}</span>`), i += "</td>", i += "</tr>") : l.uT("Quiplash2 updateUGC - invalid metadata detected", {
                                extra: {
                                    episode: n,
                                    playerBlob: e,
                                    roomBlob: t
                                }
                            })
                        })), this.$el.find("#ugc-load").html(i)
                    }
                    this.$el.find("#ugc-title-input").prop("maxLength", t.maxTitleLength), this.$el.find("#ugc-add-input").prop("maxLength", t.maxContentLength);
                    let i = `${t.count}/${t.maxCount}`;
                    e.prompts.length < t.count && (i += ` (${t.count-e.prompts.length} hidden)`);
                    const n = `<tr><td colspan='2'><h3 style='color:black;'>${i}</h3></td></tr>`;
                    this.$el.find("#ugc-remove thead").html(n);
                    let o = "",
                        u = "";
                    for (let t = e.prompts.length - 1; t >= 0; t--) u = e.prompts[t].author === e.userId ? "" : " quiplash-list-other ", o += "<tr>", o += `<td class="quiplash-list-fill quiplash-text${u}">${e.prompts[t].prompt}</td>`, o += `<td class="quiplash-list-black ugc-remove-button" data-text="${p.c.htmlEscape(e.prompts[t].prompt)}"><div class="ugc-remove-x"></div></td>`, o += "</tr>";
                    this.$el.find("#ugc-remove tbody").html(o), this.showScreen("#state-ugc"), this.onResize()
                },
                ugcNew() {
                    h.app.client.send("SendMessageToRoomOwner", {
                        action: "new"
                    }), this.$el.find("#ugc-remove-content-confirm").data("id", null)
                },
                ugcLoad(t) {
                    const e = s()(t.currentTarget).data("id");
                    this.cancelConfirm(), h.app.client.send("SendMessageToRoomOwner", {
                        action: "load",
                        contentId: e
                    });
                    const i = s()(t.currentTarget).data("name");
                    this.$el.find("#ugc-episode-name").html(i)
                },
                ugcRemoveContent(t) {
                    const e = s()(t.currentTarget);
                    this.$el.find("#ugc-remove-content-dialog").show(), s()(".quiplash2-button-red").removeClass("quiplash-censor-confirm quiplash2-button-red"), e.addClass("quiplash2-button-red"), t.stopPropagation()
                },
                ugcRemoveContentConfirm(t) {
                    const e = s()(t.target),
                        i = p.c.htmlUnescape(e.data("id"));
                    return this.$el.find("#ugc-delete-dialog").hide(), h.app.client.send("SendMessageToRoomOwner", {
                        action: "remove-content",
                        contentId: i
                    }), this.cancelConfirm(), !1
                },
                ugcRemoveContentCancel() {
                    return this.cancelConfirm(), !1
                },
                ugcClose() {
                    h.app.client.send("SendMessageToRoomOwner", {
                        action: "close"
                    })
                },
                ugcTitle() {
                    const t = this.sanitize(this.$el.find("#ugc-title-input").val());
                    return 0 === t.length || (h.app.client.send("SendMessageToRoomOwner", {
                        text: t,
                        action: "title"
                    }), this.$el.find("#ugc-title-input").val("")), !1
                },
                ugcAdd() {
                    const t = this.sanitize(this.$el.find("#ugc-add-input").val());
                    return 0 === t.length || (h.app.client.send("SendMessageToRoomOwner", {
                        text: t,
                        action: "add"
                    }), this.$el.find("#ugc-add-input").val(""), this.$el.find("#ugc-add-input").focus()), !1
                },
                ugcKeyUp(t) {
                    13 === t.which && (t.preventDefault(), this.ugcAdd(t))
                },
                ugcRemove(t) {
                    let e = s()(t.target);
                    e.data("text") || (e = e.parent());
                    const i = e.data("text");
                    h.app.client.send("SendMessageToRoomOwner", {
                        action: "remove",
                        text: i
                    })
                },
                ugcClear() {
                    h.app.client.send("SendMessageToRoomOwner", {
                        action: "clear"
                    })
                },
                ugcToggleVisibility(t) {
                    const e = s()(t.target);
                    h.app.client.send("SendMessageToRoomOwner", {
                        action: "toggle-visibility",
                        target: e.data("target")
                    })
                },
                ugcUnlock() {
                    this.cancelConfirm(), h.app.client.send("SendMessageToRoomOwner", {
                        action: "unlock"
                    })
                },
                ugcSave(t) {
                    t.preventDefault(), h.app.client.send("SendMessageToRoomOwner", {
                        action: "save"
                    })
                },
                ugcSubmit() {
                    this.cancelConfirm(), this.$el.find("#ugc-submit-dialog").show(), this.$el.find("#ugc-container").hide()
                },
                ugcSubmitConfirm() {
                    h.app.client.send("SendMessageToRoomOwner", {
                        action: "submit"
                    }), this.$el.find("#ugc-submit-dialog").hide(), this.$el.find("#ugc-container").show()
                },
                ugcSubmitCancel() {
                    this.$el.find("#ugc-submit-dialog").hide(), this.$el.find("#ugc-container").show()
                },
                ugcPlay() {
                    h.app.client.send("SendMessageToRoomOwner", {
                        action: "play"
                    })
                },
                ugcExit() {
                    h.app.client.send("SendMessageToRoomOwner", {
                        action: "close"
                    }), this.$el.find("#ugc-episode-name").html("")
                },
                sanitize(t) {
                    const e = this.sanitizeInput(t).replace(/'/g, "’");
                    return p.c.htmlEscape(e).trim()
                },
                sanitizeInput: t => t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,=<>:;]/gi, ""),
                validateInput(t) {
                    const e = s()(t.target);
                    let i = e.val();
                    const n = i.length,
                        o = e.attr("maxLength");
                    if (i = this.sanitizeInput(i), o)
                        for (; i.length > o;) i = i.slice(0, -1);
                    i.length !== n && e.val(i)
                }
            })
        },
        218: (t, e, i) => {
            "use strict";
            t.exports = i.p + "games/quiplash2/ce4060d1ab44afdbd8e2.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/6190.542de3241414676ab79a.js.map