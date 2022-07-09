(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/ydkj2015"], {
        47214: (t, e, a) => {
            "use strict";
            a.d(e, {
                E: () => g
            });
            var n = a(13469),
                o = a.n(n),
                i = a(19755),
                d = a.n(i),
                s = a(72316),
                l = a.n(s),
                r = a(63574),
                c = a.n(r),
                u = a(10972),
                p = a(2720);

            function b(t, e, a, n, o, i, d) {
                try {
                    var s = t[i](d),
                        l = s.value
                } catch (t) {
                    return void a(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(n, o)
            }

            function h(t) {
                return function() {
                    var e = this,
                        a = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, a);

                        function d(t) {
                            b(i, n, o, d, s, "next", t)
                        }

                        function s(t) {
                            b(i, n, o, d, s, "throw", t)
                        }
                        d(void 0)
                    }))
                }
            }

            function y(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t
            }
            const k = c().View.extend({
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
                            onGet(t) {
                                let [e, a] = t, n = a || "no-theme";
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
                visibleDidChange(t, e) {
                    setTimeout((() => {
                        d()(window).trigger("resize")
                    }), .5), e && u.app.analytics.trackEvent({
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
            class g {
                static get isVisible() {
                    return !!this.view && "on" === this.view.state
                }
                static update(t, e) {
                    var a = this;
                    return h((function*() {
                        e && "PostGame" === e.lobbyState ? (a.view || (yield a.init(t, e)), a.show()) : a.hide()
                    }))()
                }
                static init(t) {
                    var e = this;
                    return h((function*() {
                        t ? (e.bannerData = yield e.loadBannerData(t), e.bannerData && (e.view = new k({
                            model: new(l().Model)(e.bannerData)
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
                    return h((function*() {
                        try {
                            const e = yield fetch(p.v.banners.url), a = yield e.json();
                            return !(!a || !a.postGameBanners) && a.postGameBanners[t]
                        } catch (t) {
                            return console.error("Unable to load banner data", t), !1
                        }
                    }))()
                }
            }
            y(g, "view", null), y(g, "isInitialized", !1), y(g, "bannerConfig", null)
        },
        62353: (t, e, a) => {
            "use strict";
            a.d(e, {
                I: () => g
            });
            var n = a(13469),
                o = a.n(n),
                i = a(19755),
                d = a.n(i),
                s = a(72316),
                l = a.n(s),
                r = a(63574),
                c = a.n(r),
                u = a(10972),
                p = a(81127),
                b = a(40543),
                h = a(89446),
                y = a(47214);

            function k(t, e, a, n, o, i, d) {
                try {
                    var s = t[i](d),
                        l = s.value
                } catch (t) {
                    return void a(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(n, o)
            }
            const g = c().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(t) {
                    this.mergeOptions(t, ["appId", "appTag"]), u.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), u.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(l().Model)({});
                    const e = u.app.client.parseEntities();
                    this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), u.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), u.app.client.on("client:connection", this.onConnectionMessageWithContext), u.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), u.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", h.c.safeText(u.app.client.name), {
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
                    let a = t.lobbyState;
                    a || -1 === e.indexOf("_") || (a = t.state.split("_")[1]), "PostGame" === a || "Credits" === e || "GameOver" === e || "PostGame" === e || "DayEnd" === e || t.gameResults ? y.E.isInitialized ? y.E.show() : y.E.init(this.getOption("appTag")).then((() => {
                        y.E.show()
                    })) : y.E.hide(), u.app.storage && u.app.storage.isSupported && t.platformId && u.app.storage.setTag(`platform-${t.platformId}`)
                },
                update() {
                    return (t = function*() {
                        return null
                    }, function() {
                        var e = this,
                            a = arguments;
                        return new Promise((function(n, o) {
                            var i = t.apply(e, a);

                            function d(t) {
                                k(i, n, o, d, s, "next", t)
                            }

                            function s(t) {
                                k(i, n, o, d, s, "throw", t)
                            }
                            d(void 0)
                        }))
                    })();
                    var t
                },
                caughtError(t) {
                    throw t
                },
                onAttach() {
                    this.update().catch(this.caughtError), d()(".gallery-link").click(this.artifactClicked.bind(this)), u.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(t) {
                    let e = `<div class='icon-${u.app.client.roles.broadcaster.platform}'>${u.app.client.roles.broadcaster.name}</div>`;
                    e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : u.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), b.b.show("custom", {
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
                    this.model.stopListening(), u.app.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), u.app.client.off("client:connection", this.onConnectionMessageWithContext), u.app.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), u.app.client.off("client:disconnected", this.onDisconnectedWithContext)
                },
                artifactClicked() {
                    u.app.analytics.trackEvent({
                        category: "PostGame",
                        action: "galleryClicked",
                        label: this.getOption("appTag")
                    }), p.Q.setAsViewed(0)
                },
                showScreen(t, e) {
                    const a = d()(t);
                    return this.activeScreen && t === this.activeScreen || (this.activeScreen && (d()(this.activeScreen).fadeOut("fast", (() => {})), d()(this.activeScreen).show(), d()(this.activeScreen).addClass("pt-page-off")), a.hide(), a.removeClass("pt-page-off"), a.removeClass("pt-page-moveToLeft"), a.fadeIn("fast", (() => {
                        e && e()
                    })), this.activeScreen = t, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = o().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    b.b.vibrate()
                },
                trackScreenView() {
                    u.app.analytics.trackScreenView(this.getOption("appTag")), u.app.storage && u.app.storage.isSupported && u.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    u.app.storage && u.app.storage.isSupported && (u.app.storage.remove("roomCode"), u.app.storage.remove("reconnect")), b.b.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected() {
                    b.b.show("error", {
                        titleText: "Disconnected",
                        text: "You have been disconnected.",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage(t) {
                    const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
                    if (b.b.show("toast", {
                            text: e
                        }), "connected" === t.status) {
                        const t = u.app.client.parseEntities();
                        this.model.set(t)
                    }
                },
                onResize() {
                    const t = d()("#player").outerHeight(!0) || 0,
                        e = y.E.isVisible ? d()("#slide-in-banner").outerHeight(!0) : 0,
                        a = d()(window).width(),
                        n = d()(window).height() - t;
                    d()(`.${this.getOption("appTag")}-page`).css("height", n - e), d()(`.${this.getOption("appTag")}-page`).attr("height", n - e), d()(`.${this.getOption("appTag")}-page`).css("top", t), d()(`.${this.getOption("appTag")}-page`).css("width", a), d()(`.${this.getOption("appTag")}-page`).attr("width", a)
                }
            })
        },
        35519: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                MainView: () => c
            });
            var n = a(19755),
                o = a.n(n),
                i = a(13469),
                d = a.n(i),
                s = a(62353),
                l = a(10972);

            function r(t, e, a, n, o, i, d) {
                try {
                    var s = t[i](d),
                        l = s.value
                } catch (t) {
                    return void a(t)
                }
                s.done ? e(l) : Promise.resolve(l).then(n, o)
            }
            const c = s.I.extend({
                template: d().template('<div id="page-ydkj2015" class="page blue"> <div id="player" style="background:#000"> <h1 id="ydkj_playerName" class="ydkj-playerName-text"><%=username%></h1> </div> <div id="ydkj-preload-1" class="ydkj-preload-1"></div> <div id="ydkj-preload-2" class="ydkj-preload-2"></div> <div id="ydkj-preload-3" class="ydkj-preload-3"></div> <div id="ydkj-preload-4" class="ydkj-preload-4"></div> <div id="ydkj-preload-4" class="ydkj-preload-5"></div> <div id="ydkj-button-preload-1" class="ydkj-button-preload-1"></div> <div id="ydkj-button-preload-2" class="ydkj-button-preload-2"></div> <div id="ydkj-button-preload-3" class="ydkj-button-preload-3"></div> <div id="ydkj-button-preload-4" class="ydkj-button-preload-4"></div> <div id="ydkj-button-preload-5" class="ydkj-button-preload-5"></div> <div id="ydkj-button-preload-6" class="ydkj-button-preload-6"></div> <div id="ydkj-button-preload-7" class="ydkj-button-preload-7"></div> <div id="ydkj-button-preload-8" class="ydkj-button-preload-8"></div> <div id="ydkj-button-preload-9" class="ydkj-button-preload-9"></div> <div id="ydkj-button-preload-10" class="ydkj-button-preload-10"></div> <div id="ydkj-button-preload-11" class="ydkj-button-preload-11"></div> <div id="ydkj-button-preload-12" class="ydkj-button-preload-12"></div> <div id="ydkj-button-preload-13" class="ydkj-button-preload-13"></div> <div id="ydkj-button-preload-14" class="ydkj-button-preload-14"></div> <div id="ydkj-button-preload-15" class="ydkj-button-preload-15"></div> <div id="ydkj-button-preload-16" class="ydkj-button-preload-16"></div> <div id="ydkj-game" class="game pt-pageholder"> <div id="ydkj-default" class="pt-page-off state-default ydkj-page"> <div class="ydkj-gameplay gameplay-centered"> <div style="margin:auto"> <button type="button" id="button-ydkj-default-y" data-button="ANS_1" class="button-y" class-base="button-y" class-disable="button-y-disable"></button> </div> <div id="button-ydkj-default-mid" style="margin:auto"> <div style="float:left"> <button type="button" id="button-ydkj-default-x" data-button="ANS_2" class="button-x" class-base="button-x" class-disable="button-x-disable"></button> </div> <div id="button-ydkj-default-spacer" style="float:left;width:15px"></div> <div style="float:right"> <button type="button" id="button-ydkj-default-b" data-button="ANS_3" class="button-b" class-base="button-b" class-disable="button-b-disable"></button> </div> </div> <div style="margin:auto"> <button type="button" id="button-ydkj-default-a" data-button="ANS_4" class="button-a" class-base="button-a" class-disable="button-a-disable"></button> </div> <div class="container pure-g" style="margin-top:10px"> <button type="button" id="button-ydkj-startgame" data-button="SCREW" class="button-ydkj button-xlarge pure-button pure-u-1">EVERYBODY\'S IN</button> <button type="button" id="button-ydkj-default-screw" data-button="SCREW" class="button-screw"></button> </div> </div> </div> <div id="ydkj-jack-attack" class="pt-page-off state-jack-attack ydkj-page"> <div class="ydkj-gameplay gameplay-centered"> <div style="margin:auto"> <button type="button" id="button-ydkj-jack-attack-a" data-button="ANS_4" class="button-a-lg"></button> </div> </div> </div> <div id="ydkj-game-in-progress" class="pt-page-off state-locked ydkj-page"> <div class="ydkj-gameplay gameplay-centered"> <h2 style="text-align:center">Game already in progess, cannot join.</h2> </div> </div> <div id="ydkj-game-full" class="pt-page-off state-full ydkj-page"> <div class="ydkj-gameplay gameplay-centered"> <h2 style="text-align:center">Game already full, cannot join.</h2> </div> </div> </div> </div> '),
                lacksAudience: !0,
                bgClasses: ["ydkj-game-lobby", "ydkj-game-shortie", "ydkj-game-screwed", "ydkj-game-disordat", "ydkj-game-jackattack", "ydkj-game-credits"],
                events: {
                    "click #button-ydkj-default-y": "sendButtonInput",
                    "click #button-ydkj-default-x": "sendButtonInput",
                    "click #button-ydkj-default-b": "sendButtonInput",
                    "click #button-ydkj-default-a": "sendButtonInput",
                    "click #button-ydkj-default-screw": "sendButtonInput",
                    "click #button-ydkj-jack-attack-a": "sendButtonInput",
                    "click #button-ydkj-startgame": "sendButtonInput"
                },
                initialize(t) {
                    s.I.prototype.initialize.apply(this, [t]), window.scrollTo(0, 0), o().fn.nodoubletapzoom = function() {
                        o()(this).bind("touchstart", (function(t) {
                            const e = t.timeStamp,
                                a = e - (o()(this).data("lastTouch") || e),
                                n = t.originalEvent.touches.length;
                            o()(this).data("lastTouch", e), !a || a > 500 || n > 1 || (t.preventDefault(), o()(this).trigger("click"))
                        }))
                    }
                },
                update() {
                    var t, e = this;
                    return (t = function*() {
                        const t = e.model.get("player"),
                            a = e.model.get("room");
                        if (t && a) {
                            if (a && a.platform) {
                                const t = a.platform.toLowerCase();
                                e.$el.attr("class", t), e.platformCssLoaded = !0, o()("#player").css("color", "black"), e.disableDoubleTap()
                            }
                            if (void 0 !== e.platformCssLoaded) {
                                switch (o()("#ydkj_playerName").text(t.playerName), e.removeButton("#button-ydkj-default-screw"), e.removeButton("#button-ydkj-startgame"), e.enableButton("#button-ydkj-default-x"), e.enableButton("#button-ydkj-default-y"), e.enableButton("#button-ydkj-default-a"), e.enableButton("#button-ydkj-default-b"), t.state) {
                                    case "RoomFull":
                                        return e.showScreen(".state-full"), void e.setBackground("ydkj-game-lobby");
                                    case "GameLocked":
                                        return e.showScreen(".state-locked"), void e.setBackground("ydkj-game-lobby")
                                }
                                switch (a.state) {
                                    case "LoggedIn":
                                        e.addButton("#button-ydkj-startgame"), e.showScreen(".state-default"), e.setBackground("ydkj-game-lobby");
                                        break;
                                    case "Skip":
                                        e.disableButton("#button-ydkj-default-x"), e.disableButton("#button-ydkj-default-y"), e.disableButton("#button-ydkj-default-b"), e.showScreen(".state-default"), e.setBackground("ydkj-game-jackattack");
                                        break;
                                    case "WatchBigScreen":
                                        e.disableButton("#button-ydkj-default-x"), e.disableButton("#button-ydkj-default-y"), e.disableButton("#button-ydkj-default-a"), e.disableButton("#button-ydkj-default-b"), e.showScreen(".state-default"), e.setBackground("ydkj-game-shortie");
                                        break;
                                    case "Shortie":
                                        switch (t.state) {
                                            case "WithScrew":
                                                e.addButton("#button-ydkj-default-screw"), e.showScreen(".state-default"), e.setBackground("ydkj-game-shortie");
                                                break;
                                            case "NoScrew":
                                                e.showScreen(".state-default"), e.setBackground("ydkj-game-shortie");
                                                break;
                                            case "Screwed":
                                                e.showScreen(".state-default"), e.setBackground("ydkj-game-screwed");
                                                break;
                                            case "BuzzedIn":
                                                e.disableButton("#button-ydkj-default-x"), e.disableButton("#button-ydkj-default-y"), e.disableButton("#button-ydkj-default-a"), e.disableButton("#button-ydkj-default-b"), e.showScreen(".state-default"), e.setBackground("ydkj-game-shortie")
                                        }
                                        break;
                                    case "DisOrDat":
                                        e.disableButton("#button-ydkj-default-y"), e.disableButton("#button-ydkj-default-a"), e.showScreen(".state-default"), e.setBackground("ydkj-game-disordat");
                                        break;
                                    case "DisDatBoth":
                                        e.disableButton("#button-ydkj-default-y"), e.showScreen(".state-default"), e.setBackground("ydkj-game-disordat");
                                        break;
                                    case "JackAttack":
                                        e.showScreen(".state-jack-attack"), e.setBackground("ydkj-game-jackattack");
                                        break;
                                    case "Credits":
                                        e.disableButton("#button-ydkj-default-x"), e.disableButton("#button-ydkj-default-y"), !0 === a.demo && e.disableButton("#button-ydkj-default-a"), e.showScreen(".state-default"), e.setBackground("ydkj-game-credits")
                                }
                                e.onResize()
                            }
                        }
                    }, function() {
                        var e = this,
                            a = arguments;
                        return new Promise((function(n, o) {
                            var i = t.apply(e, a);

                            function d(t) {
                                r(i, n, o, d, s, "next", t)
                            }

                            function s(t) {
                                r(i, n, o, d, s, "throw", t)
                            }
                            d(void 0)
                        }))
                    })()
                },
                sendButtonInput(t) {
                    const e = o()(t.target).data("button");
                    l.app.client.send("SendMessageToRoomOwner", {
                        button: e
                    }), window.navigator && window.navigator.vibrate && window.navigator.vibrate(50)
                },
                removeButton(t) {
                    o()(t).css("display", "none")
                },
                addButton(t) {
                    o()(t).css("display", "inline")
                },
                enableButton(t) {
                    o()(t).prop("disabled", !1), o()(t).removeClass(o()(t).attr("class-disable")), o()(t).addClass(o()(t).attr("class-base"))
                },
                disableButton(t) {
                    o()(t).prop("disabled", !0), o()(t).removeClass(o()(t).attr("class-base")), o()(t).addClass(o()(t).attr("class-disable"))
                },
                setBackground(t) {
                    o()("#ydkj-game").addClass(t), this.bgClasses.forEach((e => {
                        t !== e && o()("#ydkj-game").removeClass(e)
                    }))
                },
                disableDoubleTap() {
                    o()("#button-ydkj-default-screw").nodoubletapzoom(), o()("#button-ydkj-default-a").nodoubletapzoom(), o()("#button-ydkj-default-b").nodoubletapzoom(), o()("#button-ydkj-default-x").nodoubletapzoom(), o()("#button-ydkj-default-y").nodoubletapzoom(), o()("#button-ydkj-jack-attack-a").nodoubletapzoom()
                },
                onResize() {
                    const t = o()(window).width();
                    let e = o()(window).height() - 125,
                        a = Math.floor(.4 * t),
                        n = Math.floor(.2 * t),
                        i = a / 1.65,
                        d = 3.55 * i;
                    4.24 * a > e && (a = e / 4.24, i = a / 1.65, d = 3.55 * i, n = a / 2), o()("#button-ydkj-default-y").css("width", a), o()("#button-ydkj-default-y").attr("width", a), o()("#button-ydkj-default-y").css("height", a), o()("#button-ydkj-default-y").attr("height", a), o()("#button-ydkj-default-b").css("width", a), o()("#button-ydkj-default-b").attr("width", a), o()("#button-ydkj-default-b").css("height", a), o()("#button-ydkj-default-b").attr("height", a), o()("#button-ydkj-default-x").css("width", a), o()("#button-ydkj-default-x").attr("width", a), o()("#button-ydkj-default-x").css("height", a), o()("#button-ydkj-default-x").attr("height", a), o()("#button-ydkj-default-a").css("width", a), o()("#button-ydkj-default-a").attr("width", a), o()("#button-ydkj-default-a").css("height", a), o()("#button-ydkj-default-a").attr("height", a), o()("#button-ydkj-default-mid").css("width", 2 * a + n), o()("#button-ydkj-default-mid").attr("width", 2 * a + n), o()("#button-ydkj-default-spacer").css("width", n), o()("#button-ydkj-default-spacer").attr("width", n), o()("#button-ydkj-default-screw").css("width", d), o()("#button-ydkj-default-screw").attr("width", d), o()("#button-ydkj-default-screw").css("height", i), o()("#button-ydkj-default-screw").attr("height", i), o()("#button-ydkj-jack-attack-a").css("width", d), o()("#button-ydkj-jack-attack-a").attr("width", d), o()("#button-ydkj-jack-attack-a").css("height", d), o()("#button-ydkj-jack-attack-a").attr("height", d), e = o()(window).height() - o()("#player").outerHeight(!0), o()(".ydkj-page").css("height", e), o()(".ydkj-page").attr("height", e), o()(".ydkj-page").css("width", t), o()(".ydkj-page").attr("width", t)
                }
            })
        }
    }
]);
//# sourceMappingURL=sourcemaps/5519.29edbae980fc1b17ccd4.js.map