(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/auction"], {
        47214: (t, e, n) => {
            "use strict";
            n.d(e, {
                E: () => w
            });
            var i = n(13469),
                a = n.n(i),
                o = n(19755),
                s = n.n(o),
                r = n(72316),
                c = n.n(r),
                l = n(63574),
                d = n.n(l),
                u = n(10972),
                p = n(2720);

            function h(t, e, n, i, a, o, s) {
                try {
                    var r = t[o](s),
                        c = r.value
                } catch (t) {
                    return void n(t)
                }
                r.done ? e(c) : Promise.resolve(c).then(i, a)
            }

            function g(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(i, a) {
                        var o = t.apply(e, n);

                        function s(t) {
                            h(o, i, a, s, r, "next", t)
                        }

                        function r(t) {
                            h(o, i, a, s, r, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }

            function b(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            const m = d().View.extend({
                el: "#banner",
                template: a().template('\n        <div class="banner-image"></div>\n        <div class="banner-text"></div>\n        <div class="banner-cta"></div>\n    '),
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
                        s()(window).trigger("resize")
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
                            const e = yield fetch(p.v.banners.url), n = yield e.json();
                            return !(!n || !n.postGameBanners) && n.postGameBanners[t]
                        } catch (t) {
                            return console.error("Unable to load banner data", t), !1
                        }
                    }))()
                }
            }
            b(w, "view", null), b(w, "isInitialized", !1), b(w, "bannerConfig", null)
        },
        62353: (t, e, n) => {
            "use strict";
            n.d(e, {
                I: () => w
            });
            var i = n(13469),
                a = n.n(i),
                o = n(19755),
                s = n.n(o),
                r = n(72316),
                c = n.n(r),
                l = n(63574),
                d = n.n(l),
                u = n(10972),
                p = n(81127),
                h = n(40543),
                g = n(89446),
                b = n(47214);

            function m(t, e, n, i, a, o, s) {
                try {
                    var r = t[o](s),
                        c = r.value
                } catch (t) {
                    return void n(t)
                }
                r.done ? e(c) : Promise.resolve(c).then(i, a)
            }
            const w = d().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(t) {
                    this.mergeOptions(t, ["appId", "appTag"]), u.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), u.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(c().Model)({});
                    const e = u.app.client.parseEntities();
                    this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), u.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), u.app.client.on("client:connection", this.onConnectionMessageWithContext), u.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), u.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", g.c.safeText(u.app.client.name), {
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
                    n || -1 === e.indexOf("_") || (n = t.state.split("_")[1]), "PostGame" === n || "Credits" === e || "GameOver" === e || "PostGame" === e || "DayEnd" === e || t.gameResults ? b.E.isInitialized ? b.E.show() : b.E.init(this.getOption("appTag")).then((() => {
                        b.E.show()
                    })) : b.E.hide(), u.app.storage && u.app.storage.isSupported && t.platformId && u.app.storage.setTag(`platform-${t.platformId}`)
                },
                update() {
                    return (t = function*() {
                        return null
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(i, a) {
                            var o = t.apply(e, n);

                            function s(t) {
                                m(o, i, a, s, r, "next", t)
                            }

                            function r(t) {
                                m(o, i, a, s, r, "throw", t)
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
                    this.update().catch(this.caughtError), s()(".gallery-link").click(this.artifactClicked.bind(this)), u.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(t) {
                    let e = `<div class='icon-${u.app.client.roles.broadcaster.platform}'>${u.app.client.roles.broadcaster.name}</div>`;
                    e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : u.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), h.b.show("custom", {
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
                    const n = s()(t);
                    return this.activeScreen && t === this.activeScreen || (this.activeScreen && (s()(this.activeScreen).fadeOut("fast", (() => {})), s()(this.activeScreen).show(), s()(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", (() => {
                        e && e()
                    })), this.activeScreen = t, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = a().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
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
                onConnectionMessage(t) {
                    const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
                    if (h.b.show("toast", {
                            text: e
                        }), "connected" === t.status) {
                        const t = u.app.client.parseEntities();
                        this.model.set(t)
                    }
                },
                onResize() {
                    const t = s()("#player").outerHeight(!0) || 0,
                        e = b.E.isVisible ? s()("#slide-in-banner").outerHeight(!0) : 0,
                        n = s()(window).width(),
                        i = s()(window).height() - t;
                    s()(`.${this.getOption("appTag")}-page`).css("height", i - e), s()(`.${this.getOption("appTag")}-page`).attr("height", i - e), s()(`.${this.getOption("appTag")}-page`).css("top", t), s()(`.${this.getOption("appTag")}-page`).css("width", n), s()(`.${this.getOption("appTag")}-page`).attr("width", n)
                }
            })
        },
        41571: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                MainView: () => w
            });
            var i = n(19755),
                a = n.n(i),
                o = n(13469),
                s = n.n(o),
                r = n(62353),
                c = n(40543),
                l = n(10972);
            const d = function(t, e, n, i, a) {
                this.isDrawing = !1, this.isClean = !0, this.isEnabled = !0, this.lines = [], this.canvas = t, this.context = e, this.context.save(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.restore(), this.widthDiff = n, this.heightDiff = Math.max(i, 113), this.strokestyle = a, void 0 !== this.canvas.style.msTouchAction && (this.canvas.style.msTouchAction = "none");
                const o = this,
                    s = function() {
                        let t = window.innerWidth - o.widthDiff,
                            e = window.innerHeight - o.heightDiff;
                        e < 25 && (e = 25, t = e * (window.innerWidth / window.innerHeight));
                        const n = t / e,
                            i = o.canvas.width / o.canvas.height;
                        i < n ? (o.canvas.style.height = `${e}px`, o.canvas.style.width = e * i + "px") : (o.canvas.style.width = `${t}px`, o.canvas.style.height = t * (1 / i) + "px"), window.scrollTo(0, 1)
                    };
                window.onresize = s;
                const r = function(t) {
                        if ("touchmove" === t.type) t.preventDefault();
                        else if ("touchend" === t.type) return o.isDrawing && t.preventDefault(), void o[t.type]();
                        const e = o.canvas.getBoundingClientRect(),
                            n = {
                                x: t.targetTouches[0].pageX - e.left,
                                y: t.targetTouches[0].pageY - e.top
                            };
                        n.x *= o.canvas.width / parseInt(o.canvas.style.width, 10), n.y *= o.canvas.height / parseInt(o.canvas.style.height, 10), o[t.type](n)
                    },
                    c = function(t) {
                        if ("mousemove" === t.type) t.preventDefault();
                        else if ("mouseup" === t.type) return void o[t.type]();
                        const e = o.canvas.getBoundingClientRect(),
                            n = {
                                x: t.clientX - e.left,
                                y: t.clientY - e.top
                            };
                        n.x *= o.canvas.width / parseInt(o.canvas.style.width, 10), n.y *= o.canvas.height / parseInt(o.canvas.style.height, 10), o[t.type](n)
                    };
                this.canvas.addEventListener("touchstart", r, !1), this.canvas.addEventListener("touchmove", r, !1), document.addEventListener("touchend", r, !1), this.canvas.addEventListener("mousedown", c, !1), this.canvas.addEventListener("mousemove", c, !1), document.addEventListener("mouseup", c, !1);
                const l = function(t, e, n) {
                        t.strokeStyle = o.strokestyle, t.lineCap = "round", t.lineWidth = 6, t.beginPath(), t.arc(e, n, 1, 0, 2 * Math.PI, !0), t.stroke(), t.moveTo(e, n)
                    },
                    d = function(t, e, n) {
                        t.lineTo(e, n), t.stroke()
                    };
                this.getBase64Image = function() {
                    const t = document.createElement("canvas");
                    t.width = o.canvas.width, t.height = o.canvas.height;
                    const e = t.getContext("2d");
                    o.context.strokeStyle = this.strokestyle, o.context.lineCap = "round", o.context.lineWidth = 6;
                    for (let t = 0; t < o.lines.length; t++) {
                        const n = o.lines[t];
                        for (let t = 0; t < n.points.length; t++) {
                            const i = n.points[t];
                            0 === t ? l(e, i.x, i.y) : d(e, i.x, i.y)
                        }
                    }
                    let n = t.toDataURL("image/png");
                    return n = n.replace("data:image/png;base64,", ""), n
                }, this.start = function(t) {
                    o.isEnabled && (l(o.context, t.x, t.y), o.isDrawing = !0, o.isClean = !1, o.lines.push({
                        points: [t]
                    }))
                }, this.move = function(t) {
                    o.isDrawing && (d(o.context, t.x, t.y), o.lines[o.lines.length - 1].points.push(t))
                }, this.end = function() {
                    o.isDrawing && (o.isDrawing = !1)
                }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, s()
            };
            var u = n(27091),
                p = n.n(u),
                h = new URL(n(39134), n.b);
            const g = '<div id="page-auction" class="page"> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rokkitt"> <div id="auction-preload" class="auction-preload"></div> <div id="game" class="game pt-pageholder"> <div id="state-lobby" class="pt-page-off pushed-down-page auction-page"> <div class="container"> <br/><span id="auction-lobby-text" class="big-text"></span><br/> <form class="pure-form"> <button type="button" id="auction-startgame" class="button-auction button-xlarge pure-button pure-input-1">EVERYBODY\'S IN</button> <button type="button" id="auction-stopcountdown" class="button-auction button-xlarge pure-button pure-input-1">CANCEL</button> </form> </div> </div> <div id="state-logo" class="pt-page-off pushed-down-page auction-page"> <div class="logo-image" style="width:100%"> <img class="pure-img" style="margin-left:auto;margin-right:auto" src="' + p()(h) + '"> </div> </div> <div id="state-draw" class="pt-page-off pushed-down-page auction-page"> <span id="title" class="big-text">please draw:</span><br/> <canvas id="auction-sketchpad" class="sketchpad" width="240" height="300" style="background-color:#fff"> Sorry, your browser is not supported. </canvas> <form class="pure-form container"> <button type="submit" id="auction-submitdrawing" class="submit-drawing button-auction button-large pure-button pure-input-1" style="margin-top:0"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;send</button> <div id="auction-submitdrawing-loading" style="display:none" class="button-auction-loading"></div> </form> </div> <div id="state-done-drawing" class="pt-page-off pushed-down-page auction-page"> <br/><span class="big-text">Thanks for the drawings!</span><br/> </div> <div id="state-auction" class="pt-page-off auction-page"> <div id="available-cash"><h1 id="auction-money">$XXXXX</h1></div> <div id="auction-info"><div class="auction-centered-content" id="auction-centered-info"></div></div> <div id="auction-skip-content"><button type="button" id="auction-skip-button" class="button-auction button-large pure-button pure-input-1">Skip</button></div> <div id="auction-bid-buttons"></div> <div id="auction-screw-content"></div> <div id="auction-cashgrab-content"></div> <div id="auction-bank-content"></div> <div id="auction-message"><div class="auction-centered-content" id="auction-centered-message"></div></div> </div> <div id="state-post-game" class="pt-page-off pushed-down-page auction-page"> <div class="container"> <br/><span id="auction-post-game-text" class="big-text"></span><br/> <form class="pure-form"> <button type="button" id="auction-sameplayers" class="button-auction button-xlarge pure-button pure-input-1 auction-endbuttons">SAME PLAYERS</button> <button type="button" id="auction-newplayers" class="button-auction button-xlarge pure-button pure-input-1 auction-endbuttons">NEW PLAYERS</button> </form> </div> </div> </div> </div> ';

            function b(t, e, n, i, a, o, s) {
                try {
                    var r = t[o](s),
                        c = r.value
                } catch (t) {
                    return void n(t)
                }
                r.done ? e(c) : Promise.resolve(c).then(i, a)
            }

            function m(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(i, a) {
                        var o = t.apply(e, n);

                        function s(t) {
                            b(o, i, a, s, r, "next", t)
                        }

                        function r(t) {
                            b(o, i, a, s, r, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            const w = r.I.extend({
                template: s().template(g),
                lacksAudience: !0,
                test: 0,
                auctionMessageIsOn: !1,
                htmlWhenOff: null,
                lastMessage: null,
                events: {
                    "click #auction-startgame": "startGame",
                    "click #auction-stopcountdown": "stopCountdown",
                    "click #auction-sameplayers": "newGameSamePlayers",
                    "click #auction-newplayers": "newGameNewPlayers",
                    "click #auction-submitdrawing": "submitDrawing",
                    "click #auction-skip-button": "submitSkip",
                    "click .auction-bid-button": "submitBid",
                    "click .auction-screw-button": "submitScrew",
                    "click .auction-screw-player-button": "submitScrewPlayer",
                    "click .auction-open-bank-button": "submitOpenBank",
                    "click .auction-take-loan-button": "submitTakeLoan"
                },
                initialize(t) {
                    r.I.prototype.initialize.apply(this, [t]), this.currentCanvas = null, this.titleThatImDrawing = null
                },
                update() {
                    var t = this;
                    return m((function*() {
                        if (!t.model.get("room")) return void t.showScreen("#state-logo");
                        const e = t.model.get("room"),
                            n = t.model.get("player") ? t.model.get("player") : {},
                            i = n ? n.state : "",
                            o = e ? e.state : "",
                            s = void 0 !== n && void 0 !== n.playerColor ? n.playerColor : "#CCCCCC";
                        let r;
                        if (a()("#available-cash").css("background-color", s), t.currentCanvas = null, t.titleThatImDrawing = null, "RoomFull" !== i) {
                            if ("GameLocked" === i) c.b.show(Error("Game is in progress. Please wait for a new game to start."), {
                                willClose: () => {
                                    window.location.reload(!0)
                                }
                            });
                            else if (o && "Lobby" === o) {
                                if (!l.app.client.isRole("player")) return void t.showScreen("#state-logo");
                                if (t.hideLobbyButtons(), !n.isAllowedToStartGame) return a()("#auction-lobby-text").html("sit back and relax!"), void t.showScreen("#state-lobby");
                                const i = e.lobbyState;
                                "WaitingForMore" === i ? a()("#auction-lobby-text").html("waiting for all players to join") : "CanStart" === i ? (a()("#auction-lobby-text").html("press this button when everybody has joined"), a()("#auction-startgame").show()) : "Countdown" === i && (a()("#auction-lobby-text").html("press this button to cancel game start"), a()("#auction-stopcountdown").show()), t.showScreen("#state-lobby")
                            } else if ("Gameplay_Logo" === o) t.showScreen("#state-logo");
                            else if ("Gameplay_Draw" === o && "Gameplay_Draw" === i) {
                                if (!n.title) return void t.showScreen("#state-done-drawing");
                                t.titleThatImDrawing = n.title, a()("#page-auction #state-draw #title").html(`Please Draw : ${t.titleThatImDrawing.text}`), t.showScreen("#state-draw");
                                const e = t.$("#auction-sketchpad")[0],
                                    i = e.getContext("2d"),
                                    o = a()("#state-draw #title").outerHeight(!0) + a()("#auction-submitdrawing").outerHeight(!0) + 10;
                                t.currentCanvas = new d(e, i, 30, o, 0), t.enableLoadingButton("#auction-submitdrawing", !0)
                            } else if ("Gameplay_Auction" === o && "Gameplay_Auction" === i) {
                                a()("#auction-money").html(t.formatMoney(n.money));
                                let i = "";
                                if (n.info && n.message)
                                    for (r = 0; r < n.info.length; r++) i += '<div class="auction-info-content text-content">', i += `<p>${n.info[r].title} is worth ${t.formatMoney(n.info[r].value)}</p>`, i += "</div>";
                                a()("#auction-info").css("display", i.length > 0 ? "block" : "none"), a()("#auction-centered-info").html(i), a()("#auction-skip-content").css("display", e.skip ? "block" : "none"), t.onAuctionMessage(n.message);
                                const o = e.currentBidderId !== t.model.id;
                                let s = "";
                                if (e.bids)
                                    for (r = 0; r < e.bids.length; r++) e.bids[r].amount > n.money || (s += `<button type="button" data-bid="${e.bids[r].amount}" class="pure-input-1 button-large pure-button button-auction auction-bid-button"${o?"":" disabled"}>${t.formatMoney(e.bids[r].amount)}</button>`);
                                a()("#auction-bid-buttons").html(s);
                                let c = "";
                                if (void 0 !== n.screws) {
                                    const t = n.screws > 0 && null == e.screwedPlayerId;
                                    if (e.screwingPlayerId)
                                        if (e.screwingPlayerId === l.app.client.userId)
                                            for (r = 0; r < e.playersToScrew.length; r++) c += `<button type="button" data-player="${e.playersToScrew[r].id}" class="pure-input-1 button-large pure-button button-auction auction-screw-player-button">${e.playersToScrew[r].name}</button>`;
                                        else c = "<span class='big-text'><p>Another player is screwing, hold your horses</p></span>";
                                    else e.bids && (c = `<button type="button" class="pure-input-1 button-large pure-button button-auction auction-screw-button"${t?"":" disabled"}>SCREW</button>`)
                                } else c = "";
                                a()("#auction-screw-content").html(c);
                                let d = "";
                                if (void 0 !== e.playerSignalledForBank) {
                                    let t, i;
                                    e.playerSignalledForBank ? (t = !0, i = "BANK CALLED") : n.numLoans >= 3 ? (t = !0, i = "BAD CREDIT") : n.timesOpenedBank >= 3 ? (t = !0, i = "STOP CALLING") : (t = !1, i = "CALL THE BANK"), d += `<button type="button" class="pure-input-1 button-large pure-button button-auction auction-open-bank-button"${t?" disabled":""}>${i}</button><br>`
                                } else void 0 !== e.loanAmount && void 0 !== e.debtAmount && void 0 !== n.hasTakenOutLoanInCurrentBank && (n.numLoans >= 3 ? d += '<span class="big-text"><p>You\'ve taken out 3 loans already. No more for you!</p></span>' : (d += `<span class="big-text"><p>You will receive : ${t.formatMoney(e.loanAmount)}, and owe ${t.formatMoney(e.debtAmount)}</p></span>`, d += `<button type="button" class="pure-input-1 button-large pure-button button-auction auction-take-loan-button"${n.hasTakenOutLoanInCurrentBank?" disabled":""}>GET A LOAN</button><br>`));
                                a()("#auction-bank-content").html(d), t.showScreen("#state-auction")
                            } else if (o && "PostGame" === o) {
                                if (!l.app.client.isRole("player")) return void t.showScreen("#state-logo");
                                if (t.hideLobbyButtons(), !n.isAllowedToMakeChoice) return a()("#auction-lobby-text").html("sit back and relax!"), void t.showScreen("#state-post-game");
                                a()("#auction-post-game-text").html("make your choice"), a()(".auction-endbuttons").show(), t.showScreen("#state-post-game")
                            }
                        } else c.b.show(Error("The room is full"), {
                            willClose: () => {
                                window.location.reload(!0)
                            }
                        })
                    }))()
                },
                hideLobbyButtons() {
                    a()("#auction-startgame").hide(), a()("#auction-stopcountdown").hide(), a()(".auction-endbuttons").hide()
                },
                startGame: () => (l.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0
                }), !1),
                stopCountdown: () => (l.app.client.send("SendMessageToRoomOwner", {
                    cancelStartGame: !0
                }), !1),
                enableLoadingButton(t, e) {
                    e ? (a()(t).show(), a()(`${t}-loading`).hide()) : (a()(t).hide(), a()(`${t}-loading`).show())
                },
                submitDrawing() {
                    if (this.currentCanvas.isClean) return alert("You have to draw something!"), !1;
                    this.enableLoadingButton("#drawful-submitdrawing", !1);
                    const t = {
                        id: this.titleThatImDrawing.id,
                        drawing: this.currentCanvas.getBase64Image()
                    };
                    return l.app.client.send("SendMessageToRoomOwner", t), !1
                },
                submitSkip: () => (l.app.client.send("SendMessageToRoomOwner", {
                    skip: !0
                }), !1),
                submitBid(t) {
                    const e = {
                        bid: a()(t.currentTarget).data("bid")
                    };
                    return l.app.client.send("SendMessageToRoomOwner", e), !1
                },
                submitScrew: () => (l.app.client.send("SendMessageToRoomOwner", {
                    screw: !0
                }), !1),
                submitScrewPlayer(t) {
                    const e = {
                        screw: !0,
                        playerIdToScrew: a()(t.currentTarget).data("player")
                    };
                    return l.app.client.send("SendMessageToRoomOwner", e), !1
                },
                submitOpenBank: () => (l.app.client.send("SendMessageToRoomOwner", {
                    "open-bank": !0
                }), !1),
                submitTakeLoan: () => (l.app.client.send("SendMessageToRoomOwner", {
                    "take-loan": !0
                }), !1),
                newGameSamePlayers: () => (l.app.client.send("SendMessageToRoomOwner", {
                    decision: "same-players"
                }), !1),
                newGameNewPlayers: () => (l.app.client.send("SendMessageToRoomOwner", {
                    decision: "new-players"
                }), !1),
                onAuctionMessage(t) {
                    var e = this;
                    return m((function*() {
                        if (!t) return;
                        if (e.lastMessage && e.lastMessage.id === t.id) return;
                        e.lastMessage = t;
                        const i = yield n(60268)(`./${t.sender.id}_arrow.png`);
                        e.htmlWhenOff = "", e.htmlWhenOff += `<div class="auction-messager"><img src="${i.default}"></div>`, e.htmlWhenOff += `<div class="message-content text-content"><p>${t.text}</p></div>`;
                        const o = a()("#auction-message"),
                            s = e;
                        e.auctionMessageIsOn ? (t && (e.notify(), o.unbind(), o.bind("oTransitionEnd transitionend webkitTransitionEnd", (function() {
                            a()("#auction-centered-message").html(s.htmlWhenOff), o.css("bottom", "0px"), this.auctionMessageIsOn = !1
                        }))), o.css("bottom", "-100px")) : t && (e.notify(), e.auctionMessageIsOn = !0, a()("#auction-centered-message").html(e.htmlWhenOff), o.css("bottom", "0"))
                    }))()
                },
                formatMoney: t => `$${t.toString()}`,
                sanitize: t => t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,:]/gi, "").replace(/'/g, "’").trim()
            })
        },
        27091: t => {
            "use strict";
            t.exports = function(t, e) {
                return e || (e = {}), t ? (t = String(t.__esModule ? t.default : t), e.hash && (t += e.hash), e.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(t) ? '"'.concat(t, '"') : t) : t
            }
        },
        50630: (t, e, n) => {
            "use strict";
            t.exports = n.p + "games/auction/58a2386b62d0e882a095.png"
        },
        6596: (t, e, n) => {
            "use strict";
            t.exports = n.p + "games/auction/5ba27f49299c561c6587.png"
        },
        30126: (t, e, n) => {
            "use strict";
            t.exports = n.p + "games/auction/8ceff27c1cd66d07922b.png"
        },
        61589: (t, e, n) => {
            "use strict";
            t.exports = n.p + "games/auction/7108c5417ed8979480ad.png"
        },
        34248: (t, e, n) => {
            "use strict";
            t.exports = n.p + "games/auction/98748fc8643a20cd6d44.png"
        },
        29297: (t, e, n) => {
            "use strict";
            t.exports = n.p + "games/auction/a91bfc81f91b61d7198c.png"
        },
        39134: (t, e, n) => {
            "use strict";
            t.exports = n.p + "games/auction/ab0027d4a9c020b67a79.png"
        },
        67900: (t, e, n) => {
            "use strict";
            t.exports = n.p + "games/auction/a024299c02a444e274f9.png"
        },
        60268: (t, e, n) => {
            var i = {
                "./bank_arrow.png": 50630,
                "./buyer0_arrow.png": 6596,
                "./buyer1_arrow.png": 30126,
                "./buyer2_arrow.png": 61589,
                "./dog_arrow.png": 34248,
                "./greg_arrow.png": 29297,
                "./oldman_arrow.png": 67900
            };

            function a(t) {
                return o(t).then((t => n.t(t, 1)))
            }

            function o(t) {
                return Promise.resolve().then((() => {
                    if (!n.o(i, t)) {
                        var e = new Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return i[t]
                }))
            }
            a.keys = () => Object.keys(i), a.resolve = o, a.id = 60268, t.exports = a
        }
    }
]);
//# sourceMappingURL=sourcemaps/1571.1dace041a8a9421eae6b.js.map