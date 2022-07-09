(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/wordspud"], {
        47214: (t, e, n) => {
            "use strict";
            n.d(e, {
                E: () => w
            });
            var i = n(13469),
                o = n.n(i),
                a = n(19755),
                s = n.n(a),
                r = n(72316),
                p = n.n(r),
                d = n(63574),
                c = n.n(d),
                l = n(10972),
                u = n(2720);

            function h(t, e, n, i, o, a, s) {
                try {
                    var r = t[a](s),
                        p = r.value
                } catch (t) {
                    return void n(t)
                }
                r.done ? e(p) : Promise.resolve(p).then(i, o)
            }

            function g(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(i, o) {
                        var a = t.apply(e, n);

                        function s(t) {
                            h(a, i, o, s, r, "next", t)
                        }

                        function r(t) {
                            h(a, i, o, s, r, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }

            function v(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            const m = c().View.extend({
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
                                let [e, n] = t, i = n || "no-theme";
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
                        s()(window).trigger("resize")
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
            class w {
                static get isVisible() {
                    return !!this.view && "on" === this.view.state
                }
                static update(t, e) {
                    var n = this;
                    return g((function*() {
                        e && "PostGame" === e.lobbyState ? (n.view || (yield n.init(t, e)), n.show()) : n.hide()
                    }))()
                }
                static init(t) {
                    var e = this;
                    return g((function*() {
                        t ? (e.bannerData = yield e.loadBannerData(t), e.bannerData && (e.view = new m({
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
                            const e = yield fetch(u.v.banners.url), n = yield e.json();
                            return !(!n || !n.postGameBanners) && n.postGameBanners[t]
                        } catch (t) {
                            return console.error("Unable to load banner data", t), !1
                        }
                    }))()
                }
            }
            v(w, "view", null), v(w, "isInitialized", !1), v(w, "bannerConfig", null)
        },
        62353: (t, e, n) => {
            "use strict";
            n.d(e, {
                I: () => w
            });
            var i = n(13469),
                o = n.n(i),
                a = n(19755),
                s = n.n(a),
                r = n(72316),
                p = n.n(r),
                d = n(63574),
                c = n.n(d),
                l = n(10972),
                u = n(81127),
                h = n(40543),
                g = n(89446),
                v = n(47214);

            function m(t, e, n, i, o, a, s) {
                try {
                    var r = t[a](s),
                        p = r.value
                } catch (t) {
                    return void n(t)
                }
                r.done ? e(p) : Promise.resolve(p).then(i, o)
            }
            const w = c().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(t) {
                    this.mergeOptions(t, ["appId", "appTag"]), l.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), l.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(p().Model)({});
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
                    let n = t.lobbyState;
                    n || -1 === e.indexOf("_") || (n = t.state.split("_")[1]), "PostGame" === n || "Credits" === e || "GameOver" === e || "PostGame" === e || "DayEnd" === e || t.gameResults ? v.E.isInitialized ? v.E.show() : v.E.init(this.getOption("appTag")).then((() => {
                        v.E.show()
                    })) : v.E.hide(), l.app.storage && l.app.storage.isSupported && t.platformId && l.app.storage.setTag(`platform-${t.platformId}`)
                },
                update() {
                    return (t = function*() {
                        return null
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(i, o) {
                            var a = t.apply(e, n);

                            function s(t) {
                                m(a, i, o, s, r, "next", t)
                            }

                            function r(t) {
                                m(a, i, o, s, r, "throw", t)
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
                    this.update().catch(this.caughtError), s()(".gallery-link").click(this.artifactClicked.bind(this)), l.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(t) {
                    let e = `<div class='icon-${l.app.client.roles.broadcaster.platform}'>${l.app.client.roles.broadcaster.name}</div>`;
                    e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : l.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), h.b.show("custom", {
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
                    const n = s()(t);
                    return this.activeScreen && t === this.activeScreen || (this.activeScreen && (s()(this.activeScreen).fadeOut("fast", (() => {})), s()(this.activeScreen).show(), s()(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", (() => {
                        e && e()
                    })), this.activeScreen = t, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = o().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    h.b.vibrate()
                },
                trackScreenView() {
                    l.app.analytics.trackScreenView(this.getOption("appTag")), l.app.storage && l.app.storage.isSupported && l.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    l.app.storage && l.app.storage.isSupported && (l.app.storage.remove("roomCode"), l.app.storage.remove("reconnect")), h.b.show("error", {
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
                        const t = l.app.client.parseEntities();
                        this.model.set(t)
                    }
                },
                onResize() {
                    const t = s()("#player").outerHeight(!0) || 0,
                        e = v.E.isVisible ? s()("#slide-in-banner").outerHeight(!0) : 0,
                        n = s()(window).width(),
                        i = s()(window).height() - t;
                    s()(`.${this.getOption("appTag")}-page`).css("height", i - e), s()(`.${this.getOption("appTag")}-page`).attr("height", i - e), s()(`.${this.getOption("appTag")}-page`).css("top", t), s()(`.${this.getOption("appTag")}-page`).css("width", n), s()(`.${this.getOption("appTag")}-page`).attr("width", n)
                }
            })
        },
        50977: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                MainView: () => l
            });
            var i = n(19755),
                o = n.n(i),
                a = n(13469),
                s = n.n(a),
                r = n(62353),
                p = n(10972),
                d = n(89446);

            function c(t, e, n, i, o, a, s) {
                try {
                    var r = t[a](s),
                        p = r.value
                } catch (t) {
                    return void n(t)
                }
                r.done ? e(p) : Promise.resolve(p).then(i, o)
            }
            const l = r.I.extend({
                template: s().template('<link href="https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap" rel="stylesheet"> <div id="page-wordspud" class="page gray"> <div id="player"> <h1><%=username%></h1> </div> <div id="game" class="game pt-pageholder"> <div class="pt-page-off wordspud-page state-waiting"> <div class="container gameplay"> <h3>Waiting for players</h3> </div> </div> <div class="pt-page-off wordspud-page state-startbutton"> <div class="container gameplay"> <h3>press this button when everybody has joined</h3> <form class="pure-form"> <button type="submit" id="button-start-game" class="button-wordspud button-xlarge pure-button pure-input-1">EVERYBODY\'S IN</button> </form> </div> </div> <div class="pt-page-off wordspud-page state-writing"> <div class="container gameplay"> <h2 id="wordspud-writing-root"></h2> <p>it\'s your turn!</p> <form class="pure-form"> <div class="pure-u-1"> <input id="wordspud-input" name="spud" class="pure-input-1 spud jbg-input" type="text" placeholder="Type Something" autocapitalize="off" autocorrect="off" autocomplete="off" maxlength="32"> </div> <div class="pure-u-1-2 right"> <div class="wordspud-submit"><button type="submit" id="wordspud-submit" class="button-wordspud pure-button button-large pure-input-1"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;Send</button></div> </div> </form> </div> </div> <div class="pt-page-off wordspud-page state-vote"> <h2 id="wordspud-vote-spud"></h2> <div class="container gameplay"> <h3>do you like it?</h3> <form class="pure-form"> <div class="wordspud-vote-yes" data-vote="1"><button id="wordspud-vote-yes" data-vote="1" class="button-wordspud-yes button-xlarge pure-button pure-input-1"><i class="fas fa-check"></i>&nbsp;&nbsp;YES</button></div> <div class="wordspud-vote-no" data-vote="-1"><button id="wordspud-vote-no" class="button-wordspud-no button-xlarge pure-button pure-input-1"><i class="fas fa-times"></i>&nbsp;&nbsp;NO</button></div> </form> </div> </div> <div class="pt-page-off wordspud-page state-vote-wait"> <div class="container gameplay"> <h2 id="wordspud-vote-wait-spud"></h2> <h3>you are being judged.</h3> </div> </div> <div class="pt-page-off wordspud-page state-nothing"> <div class="container gameplay"> <h2 id="wordspud-nothing-root"></h2> <p>add your own commentary</p> <form class="pure-form"> <div class="pure-u-1"> <input id="wordspud-comment" name="comment" class="pure-input-1 comment jbg-input" type="text" placeholder="Type Something" autocapitalize="off" autocorrect="off" autocomplete="off" maxlength="50"> </div> <div class="pure-u-1-2 right"> <div class="wordspud-comment-submit"><button type="submit" id="wordspud-comment-submit" class="button-wordspud pure-button button-large pure-input-1"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;Send</button></div> </div> </form> </div> </div> <div class="pt-page-off wordspud-page state-voted"> <div class="container gameplay"> <h2 id="wordspud-voted-spud"></h2> <p>waiting for players</p> </div> </div> <div class="pt-page-off wordspud-page state-gameover"> <div class="container gameplay"> <form class="pure-form"> <button type="button" id="wordspud-keep-playing" data-vote="1" class="button-wordspud button-xlarge pure-button pure-input-1">Next Round</button> <button type="button" id="wordspud-new-game" data-vote="-1" class="button-wordspud button-xlarge pure-button pure-input-1">New Game</button> </form> </div> </div> </div> </div> '),
                lacksAudience: !0,
                typeInterval: null,
                lastSpud: "",
                currentSpud: "",
                typeDelayTime: 1e3,
                events: {
                    "click #button-start-game": "startGame",
                    "click #wordspud-keep-playing": "keepPlaying",
                    "click #wordspud-new-game": "newGame",
                    "click .wordspud-submit": "submitWord",
                    "click .wordspud-vote-yes": "vote",
                    "click .wordspud-vote-no": "vote",
                    "click .wordspud-comment-submit": "submitComment",
                    "keyup input.spud": "editWord"
                },
                update() {
                    var t, e = this;
                    return (t = function*() {
                        const t = e.model.get("player") || {},
                            n = e.model.get("room") || {};
                        if (e.typeInterval && (clearInterval(e.typeInterval), e.typeInterval = null), t && void 0 !== t.color && null !== t.color && o()("#player").css("background-color", t.color), n) {
                            if ("Lobby_WaitingForMore" === n.state) e.showScreen(".state-waiting");
                            else if ("Lobby_CanStart" === n.state) e.showScreen(".state-startbutton");
                            else if ("Gameplay" === n.state) "Gameplay" === t.state ? (o()("input.comment").val(""), void 0 !== !n.currentWord && o()("#wordspud-nothing-root").html(`${e.getLastWord(n.currentWord)}_`), e.showScreen(".state-nothing")) : "Gameplay_Enter" === t.state && (o()("input.spud").val(""), e.currentSpud = "", e.typeInterval = setInterval((() => {
                                e.lastSpud !== e.currentSpud && e.sendSpud(e.currentSpud)
                            }), e.typeDelayTime), void 0 !== n.currentWord && o()("#wordspud-writing-root").html(`${e.getLastWord(n.currentWord)}_`), window.navigator && window.navigator.vibrate && window.navigator.vibrate(250), e.showScreen(".state-writing"));
                            else if ("Vote" === n.state) {
                                const i = e.getLastWord(n.currentWord);
                                "Gameplay_Enter" === t.state ? (o()("#wordspud-vote-wait-spud").html(`${i} <font color='${n.color}'>${d.c.safeText(n.spud)}</font>`), e.showScreen(".state-vote-wait")) : "Voted" === t.state ? (o()("#wordspud-voted-spud").html(`${i} <font color='${n.color}'>${d.c.safeText(n.spud)}</font>`), e.showScreen(".state-voted")) : (o()("#wordspud-vote-spud").html(`${i} <font color='${n.color}'>${d.c.safeText(n.spud)}</font>`), e.showScreen(".state-vote"))
                            } else "GameOver" === n.state && e.showScreen(".state-gameover");
                            e.onResize()
                        }
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(i, o) {
                            var a = t.apply(e, n);

                            function s(t) {
                                c(a, i, o, s, r, "next", t)
                            }

                            function r(t) {
                                c(a, i, o, s, r, "throw", t)
                            }
                            s(void 0)
                        }))
                    })()
                },
                startGame() {
                    return ".state-startbutton" !== this.activeScreen || p.app.client.send("SendMessageToRoomOwner", {
                        startGame: !0
                    }), !1
                },
                submitWord() {
                    return ".state-writing" !== this.activeScreen || "" === o().trim(o()("input.spud").val()) || (this.typeInterval && (clearTimeout(this.typeInterval), this.typeInterval = null), p.app.client.send("SendMessageToRoomOwner", {
                        spud: o()("input.spud").val().toUpperCase(),
                        submitted: !0
                    })), !1
                },
                submitComment() {
                    return ".state-nothing" !== this.activeScreen || "" === o().trim(o()("input.comment").val()) || (p.app.client.send("SendMessageToRoomOwner", {
                        comment: o()("input.comment").val()
                    }), o()("input.comment").val("")), !1
                },
                editWord(t) {
                    ".state-writing" === this.activeScreen && (this.currentSpud = t.target.value.toUpperCase())
                },
                sendSpud(t) {
                    this.lastSpud = t, p.app.client.send("SendMessageToRoomOwner", {
                        spud: t,
                        submitted: !1
                    })
                },
                vote(t) {
                    const e = o()(t.currentTarget).data("vote");
                    return p.app.client.send("SendMessageToRoomOwner", {
                        vote: e
                    }), !1
                },
                keepPlaying: () => (p.app.client.send("SendMessageToRoomOwner", {
                    action: "next"
                }), !1),
                newGame: () => (p.app.client.send("SendMessageToRoomOwner", {
                    action: "new"
                }), !1),
                getLastWord(t) {
                    if (!t) return "";
                    const e = t.split(" ");
                    let n;
                    return e.length > 0 && (n = e[e.length - 1]), n ? d.c.safeText(n) : ""
                }
            })
        }
    }
]);
//# sourceMappingURL=sourcemaps/977.10c99ef8b4cb859a4e0b.js.map