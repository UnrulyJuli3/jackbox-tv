(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/lieswatter"], {
        47214: (t, e, i) => {
            "use strict";
            i.d(e, {
                E: () => m
            });
            var a = i(13469),
                s = i.n(a),
                n = i(19755),
                o = i.n(n),
                r = i(72316),
                l = i.n(r),
                c = i(63574),
                d = i.n(c),
                p = i(10972),
                h = i(2720);

            function w(t, e, i, a, s, n, o) {
                try {
                    var r = t[n](o),
                        l = r.value
                } catch (t) {
                    return void i(t)
                }
                r.done ? e(l) : Promise.resolve(l).then(a, s)
            }

            function u(t) {
                return function() {
                    var e = this,
                        i = arguments;
                    return new Promise((function(a, s) {
                        var n = t.apply(e, i);

                        function o(t) {
                            w(n, a, s, o, r, "next", t)
                        }

                        function r(t) {
                            w(n, a, s, o, r, "throw", t)
                        }
                        o(void 0)
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
            const b = d().View.extend({
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
                        o()(window).trigger("resize")
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
                    return u((function*() {
                        e && "PostGame" === e.lobbyState ? (i.view || (yield i.init(t, e)), i.show()) : i.hide()
                    }))()
                }
                static init(t) {
                    var e = this;
                    return u((function*() {
                        t ? (e.bannerData = yield e.loadBannerData(t), e.bannerData && (e.view = new b({
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
                    return u((function*() {
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
                s = i.n(a),
                n = i(19755),
                o = i.n(n),
                r = i(72316),
                l = i.n(r),
                c = i(63574),
                d = i.n(c),
                p = i(10972),
                h = i(81127),
                w = i(40543),
                u = i(89446),
                g = i(47214);

            function b(t, e, i, a, s, n, o) {
                try {
                    var r = t[n](o),
                        l = r.value
                } catch (t) {
                    return void i(t)
                }
                r.done ? e(l) : Promise.resolve(l).then(a, s)
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
                    }), p.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(l().Model)({});
                    const e = p.app.client.parseEntities();
                    this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), p.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), p.app.client.on("client:connection", this.onConnectionMessageWithContext), p.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), p.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", u.c.safeText(p.app.client.name), {
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
                        return new Promise((function(a, s) {
                            var n = t.apply(e, i);

                            function o(t) {
                                b(n, a, s, o, r, "next", t)
                            }

                            function r(t) {
                                b(n, a, s, o, r, "throw", t)
                            }
                            o(void 0)
                        }))
                    })();
                    var t
                },
                caughtError(t) {
                    throw t
                },
                onAttach() {
                    this.update().catch(this.caughtError), o()(".gallery-link").click(this.artifactClicked.bind(this)), p.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(t) {
                    let e = `<div class='icon-${p.app.client.roles.broadcaster.platform}'>${p.app.client.roles.broadcaster.name}</div>`;
                    e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : p.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), w.b.show("custom", {
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
                    const i = o()(t);
                    return this.activeScreen && t === this.activeScreen || (this.activeScreen && (o()(this.activeScreen).fadeOut("fast", (() => {})), o()(this.activeScreen).show(), o()(this.activeScreen).addClass("pt-page-off")), i.hide(), i.removeClass("pt-page-off"), i.removeClass("pt-page-moveToLeft"), i.fadeIn("fast", (() => {
                        e && e()
                    })), this.activeScreen = t, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = s().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    w.b.vibrate()
                },
                trackScreenView() {
                    p.app.analytics.trackScreenView(this.getOption("appTag")), p.app.storage && p.app.storage.isSupported && p.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    p.app.storage && p.app.storage.isSupported && (p.app.storage.remove("roomCode"), p.app.storage.remove("reconnect")), w.b.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected() {
                    w.b.show("error", {
                        titleText: "Disconnected",
                        text: "You have been disconnected.",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage(t) {
                    const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
                    if (w.b.show("toast", {
                            text: e
                        }), "connected" === t.status) {
                        const t = p.app.client.parseEntities();
                        this.model.set(t)
                    }
                },
                onResize() {
                    const t = o()("#player").outerHeight(!0) || 0,
                        e = g.E.isVisible ? o()("#slide-in-banner").outerHeight(!0) : 0,
                        i = o()(window).width(),
                        a = o()(window).height() - t;
                    o()(`.${this.getOption("appTag")}-page`).css("height", a - e), o()(`.${this.getOption("appTag")}-page`).attr("height", a - e), o()(`.${this.getOption("appTag")}-page`).css("top", t), o()(`.${this.getOption("appTag")}-page`).css("width", i), o()(`.${this.getOption("appTag")}-page`).attr("width", i)
                }
            })
        },
        93119: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                MainView: () => p
            });
            var a = i(19755),
                s = i.n(a),
                n = i(13469),
                o = i.n(n),
                r = i(62353),
                l = i(40543),
                c = i(10972);

            function d(t, e, i, a, s, n, o) {
                try {
                    var r = t[n](o),
                        l = r.value
                } catch (t) {
                    return void i(t)
                }
                r.done ? e(l) : Promise.resolve(l).then(a, s)
            }
            const p = r.I.extend({
                template: o().template('<div id="page-lieswatter" class="page gray"> <div id="player" class="player-lieswatter"> <h1><%=username%></h1> </div> <div id="ls-preload-1" class="ls-preload-1"></div> <div id="ls-preload-2" class="ls-preload-2"></div> <div id="ls-preload-3" class="ls-preload-3"></div> <div id="ls-preload-4" class="ls-preload-4"></div> <div id="game" class="game pt-pageholder"> <div class="pt-page-off state-lobby lieswatter-page" style="background-color:#2d93f6"> <div class="container gameplay centered"> <h3 id="lieswatter-lobby-text" class="lobby-text"></h3> <form class="pure-form"> <button type="submit" id="lieswatter-startgame" class="button-lieswatter button-xlarge pure-button pure-input-1" data-ans="1">EVERYBODY\'S IN</button> <button type="button" id="lieswatter-sameplayers" class="button-lieswatter button-xlarge pure-button pure-input-1 lieswatter-endbuttons" data-ans="1">SAME PLAYERS</button> <button type="button" id="lieswatter-newplayers" class="button-lieswatter button-xlarge pure-button pure-input-1 lieswatter-endbuttons" data-ans="0">NEW PLAYERS</button> </form> </div> </div> <div class="pt-page-off state-answer lieswatter-page"> <div style="padding:0;margin:0;width:100%"> <div id="lieswatter-stats" style="background:#515151;padding-bottom:5px"> <table style="margin-left:auto;margin-right:auto"> <tr> <td style="padding:10px"> <div style="text-align:center;font-family:Ubuntu,sans-serif;color:#fff"><span>RANK</span><br/></div> <div style="text-align:center"><span id="lieswatter-rank" class="ls-rank-button">0</span></div> </td> <td style="padding:10px"> <div style="text-align:center;font-family:Ubuntu,sans-serif;color:#fff"><span>SCORE</span><br/></div> <div style="text-align:center"><span id="lieswatter-score" class="ls-score-button">0</span></div> </td> <td style="padding:10px"> <div style="text-align:center;font-family:Ubuntu,sans-serif;color:#fff"><span>STREAK</span><br/></div> <div style="text-align:center" ;><span id="lieswatter-combo" class="ls-rank-button">0</span></div> </td> </tr> </table> </div> <div id="lieswatter-statement-container" class="centered"> <br/><span id="lieswatter-category" class="ls-category"></span><br/><span id="lieswatter-statement">WAITING FOR GAME TO START</span><br/><br/> </div> <div id="lieswatter-true-container" class="centered"> <button aria-label="truth" type="button" id="lieswatter-true" data-ans="1" class="ls-truth-button"></button> </div> <div id="lieswatter-false-container" class="centered"> <button aria-label="lie" type="button" id="lieswatter-false" data-ans="0" class="ls-lie-button"></button> </div> </div> </div> <div class="pt-page-off state-nothing lieswatter-page" style="background:#515151"> <br/><span>ANSWER ENTERED!<br/><br/>WAITING FOR OTHER PLAYERS.</span><br/> </div> </div> </div> '),
                lacksAudience: !0,
                events: {
                    "click #lieswatter-startgame": "sendAnswer",
                    "click #lieswatter-sameplayers": "sendAnswer",
                    "click #lieswatter-newplayers": "sendAnswer",
                    "click #lieswatter-true": "sendAnswer",
                    "click #lieswatter-false": "sendAnswer"
                },
                update() {
                    var t, e = this;
                    return (t = function*() {
                        const t = e.model.get("player"),
                            i = e.model.get("room"),
                            a = t ? t.state : "",
                            n = i ? i.state : "";
                        if ("RoomFull" === a) l.b.show(Error("The room is full"), {
                            willClose: () => {
                                window.location.reload(!0)
                            }
                        });
                        else if (n && "Lobby" === n.split("_")[0]) {
                            e.allowSendAnswer = !0, e.hideLobbyButtons();
                            const t = n.split("_")[1];
                            "CanStart" === t ? (s()("#lieswatter-lobby-text").html("Press this button when everybody has joined"), s()("#lieswatter-startgame").show()) : "PostGame" === t && (s()("#lieswatter-lobby-text").html("What do you want to do?"), s()(".lieswatter-endbuttons").show()), e.showScreen(".state-lobby")
                        } else if ("Gameplay_Round" === n && a === n) {
                            if (void 0 === t.score) return;
                            s()("#lieswatter-score").html(t.score.score), s()("#lieswatter-combo").html(t.score.combo), Number(t.score.place) >= 0 ? s()("#lieswatter-rank").html(t.score.place + 1) : s()("#lieswatter-rank").html("-"), void 0 !== t.statement && void 0 !== t.statement.text && (s()("#lieswatter-category").html(t.statement.category), s()("#lieswatter-statement").html(t.statement.text)), void 0 !== t.answer && t.answer >= 0 || t.statement && t.statement.text === e.lastQuestion ? (e.showScreen(".state-nothing"), e.lastQuestion = t.statement.text) : (e.allowSendAnswer = !0, e.showScreen(".state-answer"))
                        }
                        e.onResize()
                    }, function() {
                        var e = this,
                            i = arguments;
                        return new Promise((function(a, s) {
                            var n = t.apply(e, i);

                            function o(t) {
                                d(n, a, s, o, r, "next", t)
                            }

                            function r(t) {
                                d(n, a, s, o, r, "throw", t)
                            }
                            o(void 0)
                        }))
                    })()
                },
                hideLobbyButtons() {
                    s()("#lieswatter-startgame").hide(), s()(".lieswatter-endbuttons").hide()
                },
                sendAnswer(t) {
                    if (!this.allowSendAnswer) return !1;
                    const e = s()(t.target).data("ans");
                    return c.app.client.send("SendMessageToRoomOwner", {
                        MessageType: "Answer",
                        Answer: e
                    }), s()("#lieswatter-statement").html(""), this.allowSendAnswer = !1, !1
                },
                onResize() {
                    const t = s()(window).width() - 20,
                        e = s()(window).height() - s()("#lieswatter-stats").outerHeight(!0) - s()("#player").outerHeight(!0) - s()("#lieswatter-statement-container").outerHeight(!0) - 15;
                    let i = 0,
                        a = 0;
                    s()(window).width() > s()(window).height() ? (s()("#lieswatter-true-container").css("float", "left"), s()("#lieswatter-false-container").css("float", "right"), Math.floor(Math.floor(t / 2) / 2.16) > e ? (a = e, i = Math.floor(2.16 * a)) : (i = Math.floor(t / 2), a = Math.floor(i / 2.16))) : (s()("#lieswatter-true-container").css("float", ""), s()("#lieswatter-false-container").css("float", ""), Math.floor(2.16 * Math.floor(e / 2)) > t ? (i = t, a = Math.floor(i / 2.16)) : (a = Math.floor(e / 2), i = Math.floor(2.16 * a))), s()("#lieswatter-true").css("width", i), s()("#lieswatter-true").attr("width", i), s()("#lieswatter-true").css("height", a), s()("#lieswatter-true").attr("height", a), s()("#lieswatter-false").css("width", i), s()("#lieswatter-false").attr("width", i), s()("#lieswatter-false").css("height", a), s()("#lieswatter-false").attr("height", a), s()("#lieswatter-rank").prop("disabled", !0), s()("#lieswatter-score").prop("disabled", !0), s()("#lieswatter-combo").prop("disabled", !0), s()(".lieswatter-page").css("height", s()(window).height() - s()("#player").outerHeight(!0)), s()(".lieswatter-page").attr("height", s()(window).height() - s()("#player").outerHeight(!0)), s()(".lieswatter-page").css("width", s()(window).width()), s()(".lieswatter-page").attr("width", s()(window).width())
                }
            })
        }
    }
]);
//# sourceMappingURL=sourcemaps/3119.51df0575749ccb64f741.js.map