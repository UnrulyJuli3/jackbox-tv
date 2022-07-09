(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/drawful"], {
        47214: (e, t, a) => {
            "use strict";
            a.d(t, {
                E: () => m
            });
            var i = a(13469),
                n = a.n(i),
                s = a(19755),
                o = a.n(s),
                r = a(72316),
                l = a.n(r),
                d = a(63574),
                c = a.n(d),
                u = a(10972),
                h = a(2720);

            function p(e, t, a, i, n, s, o) {
                try {
                    var r = e[s](o),
                        l = r.value
                } catch (e) {
                    return void a(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(i, n)
            }

            function w(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(i, n) {
                        var s = e.apply(t, a);

                        function o(e) {
                            p(s, i, n, o, r, "next", e)
                        }

                        function r(e) {
                            p(s, i, n, o, r, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function g(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }
            const f = c().View.extend({
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
                            onGet(e) {
                                let [t, a] = e, i = a || "no-theme";
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
                visibleDidChange(e, t) {
                    setTimeout((() => {
                        o()(window).trigger("resize")
                    }), .5), t && u.app.analytics.trackEvent({
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
                    var a = this;
                    return w((function*() {
                        t && "PostGame" === t.lobbyState ? (a.view || (yield a.init(e, t)), a.show()) : a.hide()
                    }))()
                }
                static init(e) {
                    var t = this;
                    return w((function*() {
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
                    return w((function*() {
                        try {
                            const t = yield fetch(h.v.banners.url), a = yield t.json();
                            return !(!a || !a.postGameBanners) && a.postGameBanners[e]
                        } catch (e) {
                            return console.error("Unable to load banner data", e), !1
                        }
                    }))()
                }
            }
            g(m, "view", null), g(m, "isInitialized", !1), g(m, "bannerConfig", null)
        },
        62353: (e, t, a) => {
            "use strict";
            a.d(t, {
                I: () => m
            });
            var i = a(13469),
                n = a.n(i),
                s = a(19755),
                o = a.n(s),
                r = a(72316),
                l = a.n(r),
                d = a(63574),
                c = a.n(d),
                u = a(10972),
                h = a(81127),
                p = a(40543),
                w = a(89446),
                g = a(47214);

            function f(e, t, a, i, n, s, o) {
                try {
                    var r = e[s](o),
                        l = r.value
                } catch (e) {
                    return void a(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(i, n)
            }
            const m = c().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(e) {
                    this.mergeOptions(e, ["appId", "appTag"]), u.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), u.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(l().Model)({});
                    const t = u.app.client.parseEntities();
                    this.model.set(t), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), u.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), u.app.client.on("client:connection", this.onConnectionMessageWithContext), u.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), u.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", w.c.safeText(u.app.client.name), {
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
                    let a = e.lobbyState;
                    a || -1 === t.indexOf("_") || (a = e.state.split("_")[1]), "PostGame" === a || "Credits" === t || "GameOver" === t || "PostGame" === t || "DayEnd" === t || e.gameResults ? g.E.isInitialized ? g.E.show() : g.E.init(this.getOption("appTag")).then((() => {
                        g.E.show()
                    })) : g.E.hide(), u.app.storage && u.app.storage.isSupported && e.platformId && u.app.storage.setTag(`platform-${e.platformId}`)
                },
                update() {
                    return (e = function*() {
                        return null
                    }, function() {
                        var t = this,
                            a = arguments;
                        return new Promise((function(i, n) {
                            var s = e.apply(t, a);

                            function o(e) {
                                f(s, i, n, o, r, "next", e)
                            }

                            function r(e) {
                                f(s, i, n, o, r, "throw", e)
                            }
                            o(void 0)
                        }))
                    })();
                    var e
                },
                caughtError(e) {
                    throw e
                },
                onAttach() {
                    this.update().catch(this.caughtError), o()(".gallery-link").click(this.artifactClicked.bind(this)), u.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(e) {
                    let t = `<div class='icon-${u.app.client.roles.broadcaster.platform}'>${u.app.client.roles.broadcaster.name}</div>`;
                    t += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? t += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : u.app.client.roomInfo.audienceEnabled || (t += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), p.b.show("custom", {
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
                    this.model.stopListening(), u.app.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), u.app.client.off("client:connection", this.onConnectionMessageWithContext), u.app.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), u.app.client.off("client:disconnected", this.onDisconnectedWithContext)
                },
                artifactClicked() {
                    u.app.analytics.trackEvent({
                        category: "PostGame",
                        action: "galleryClicked",
                        label: this.getOption("appTag")
                    }), h.Q.setAsViewed(0)
                },
                showScreen(e, t) {
                    const a = o()(e);
                    return this.activeScreen && e === this.activeScreen || (this.activeScreen && (o()(this.activeScreen).fadeOut("fast", (() => {})), o()(this.activeScreen).show(), o()(this.activeScreen).addClass("pt-page-off")), a.hide(), a.removeClass("pt-page-off"), a.removeClass("pt-page-moveToLeft"), a.fadeIn("fast", (() => {
                        t && t()
                    })), this.activeScreen = e, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = n().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    p.b.vibrate()
                },
                trackScreenView() {
                    u.app.analytics.trackScreenView(this.getOption("appTag")), u.app.storage && u.app.storage.isSupported && u.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    u.app.storage && u.app.storage.isSupported && (u.app.storage.remove("roomCode"), u.app.storage.remove("reconnect")), p.b.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected() {
                    p.b.show("error", {
                        titleText: "Disconnected",
                        text: "You have been disconnected.",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage(e) {
                    const t = `${e.status} ${e.attempt?`${e.attempt}/5'`:""}`;
                    if (p.b.show("toast", {
                            text: t
                        }), "connected" === e.status) {
                        const e = u.app.client.parseEntities();
                        this.model.set(e)
                    }
                },
                onResize() {
                    const e = o()("#player").outerHeight(!0) || 0,
                        t = g.E.isVisible ? o()("#slide-in-banner").outerHeight(!0) : 0,
                        a = o()(window).width(),
                        i = o()(window).height() - e;
                    o()(`.${this.getOption("appTag")}-page`).css("height", i - t), o()(`.${this.getOption("appTag")}-page`).attr("height", i - t), o()(`.${this.getOption("appTag")}-page`).css("top", e), o()(`.${this.getOption("appTag")}-page`).css("width", a), o()(`.${this.getOption("appTag")}-page`).attr("width", a)
                }
            })
        },
        81099: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                MainView: () => m
            });
            var i = a(19755),
                n = a.n(i),
                s = a(13469),
                o = a.n(s),
                r = a(62353),
                l = a(40543),
                d = a(10972),
                c = a(89446);
            const u = function(e, t, a, i, n) {
                this.isDrawing = !1, this.isClean = !0, this.isEnabled = !0, this.canvas = e, this.context = t, this.context.save(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.restore(), this.widthDiff = a, this.heightDiff = i, this.strokestyle = n, void 0 !== this.canvas.style.msTouchAction && (this.canvas.style.msTouchAction = "none");
                const s = this,
                    o = function() {
                        let e = window.innerWidth - s.widthDiff,
                            t = window.innerHeight - s.heightDiff;
                        t < 25 && (t = 25, e = t * (window.innerWidth / window.innerHeight));
                        const a = e / t,
                            i = s.canvas.width / s.canvas.height;
                        i < a ? (s.canvas.style.height = `${t}px`, s.canvas.style.width = t * i + "px") : (s.canvas.style.width = `${e}px`, s.canvas.style.height = e * (1 / i) + "px"), window.scrollTo(0, 1)
                    };
                window.onresize = o;
                const r = function(e) {
                        if ("touchmove" === e.type) e.preventDefault();
                        else if ("touchend" === e.type) return s.isDrawing && e.preventDefault(), void s[e.type]();
                        const t = s.canvas.getBoundingClientRect(),
                            a = {
                                x: e.targetTouches[0].pageX - t.left,
                                y: e.targetTouches[0].pageY - t.top
                            };
                        a.x *= s.canvas.width / parseInt(s.canvas.style.width, 10), a.y *= s.canvas.height / parseInt(s.canvas.style.height, 10), s[e.type](a)
                    },
                    l = function(e) {
                        if ("mousemove" === e.type) e.preventDefault();
                        else if ("mouseup" === e.type) return void s[e.type]();
                        const t = s.canvas.getBoundingClientRect(),
                            a = {
                                x: e.clientX - t.left,
                                y: e.clientY - t.top
                            };
                        a.x *= s.canvas.width / parseInt(s.canvas.style.width, 10), a.y *= s.canvas.height / parseInt(s.canvas.style.height, 10), s[e.type](a)
                    };
                this.canvas.addEventListener("touchstart", r, !1), this.canvas.addEventListener("touchmove", r, !1), document.addEventListener("touchend", r, !1), this.canvas.addEventListener("mousedown", l, !1), this.canvas.addEventListener("mousemove", l, !1), document.addEventListener("mouseup", l, !1), this.getBase64Image = function() {
                    let e = this.canvas.toDataURL("image/png");
                    return e = e.replace("data:image/png;base64,", ""), e
                }, this.start = function(e) {
                    s.isEnabled && (s.context.strokeStyle = this.strokestyle, s.context.lineCap = "round", s.context.lineJoin = "round", s.context.lineWidth = 6, s.context.beginPath(), s.context.arc(e.x, e.y, 1, 0, 2 * Math.PI, !0), s.context.stroke(), s.context.moveTo(e.x, e.y), s.isDrawing = !0, s.isClean = !1)
                }, this.move = function(e) {
                    s.isDrawing && (s.context.lineTo(e.x, e.y), s.context.stroke())
                }, this.end = function() {
                    s.isDrawing && (s.isDrawing = !1)
                }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, o()
            };
            var h = a(27091),
                p = a.n(h),
                w = new URL(a(74707), a.b);
            const g = '<div id="page-drawful" class="page white drawful"> <div id="player"> <span class="drawful-text"><%=username%></span> </div> <div id="drawful-preload" class="drawful-preload"></div> <div id="game" class="game pt-pageholder"> <div class="pt-page-off state-lobby drawful-page"> <div class="container"> <br/><span id="drawful-lobby-text" class="drawful-text"></span><br/> <form class="pure-form"> <button type="button" id="drawful-startgame" class="button-drawful button-xlarge pure-button pure-input-1">everybody\'s in</button> <button type="button" id="drawful-stopcountdown" class="button-drawful button-xlarge pure-button pure-input-1">cancel</button> <button type="button" id="drawful-sameplayers" class="button-drawful button-xlarge pure-button pure-input-1 drawful-endbuttons">same players</button> <button type="button" id="drawful-newplayers" class="button-drawful button-xlarge pure-button pure-input-1 drawful-endbuttons">new players</button> </form> </div> </div> <div class="pt-page-off state-nothing drawful-page"> <div class="logo-image" style="width:100%"> <img class="pure-img" style="margin-left:auto;margin-right:auto" src="' + p()(w) + '"> </div> </div> <div class="pt-page-off state-round drawful-page"> <div class="container"> <div class="round-main"><br/><br/><span class="drawful-text round-text"></span><br/></div> </div> </div> <div class="pt-page-off state-drawing-sent drawful-page"> <div class="container"> <br/><span id="drawful-drawing-received" class="drawful-text"></span><br/> <span class="drawful-text">thanks for your drawing</span><br/> </div> </div> <div class="pt-page-off state-drawing-done drawful-page"> <div class="container"> <br/><span class="drawful-text">drawing time is over!</span><br/> </div> </div> <div class="pt-page-off state-enterlie drawful-page"> <div class="container"> <br/><span class="drawful-text author-text"></span><br/> <div id="drawful-submit-alert" class="alert alert-info">Alert message goes here</div> <form class="pure-form" id="drawful-enterlie-field"> <div class="pure-u-1"> <input id="drawful-lie-input" name="drawful-lie" class="pure-input-1 jbg-input" type="text" maxlength="45" placeholder="enter a title" autocapitalize="off" autocorrect="off" autocomplete="off"> </div> <div class="pure-u-1 right"> <button type="submit" id="drawful-submitlie" class="button-drawful button-xlarge pure-button right"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;send</button> <div id="drawful-submitlie-loading" class="button-drawful-loading right" style="display:none;width:110px;height:48px;margin-top:10px"></div> </div> </form> </div> </div> <div class="pt-page-off state-chooselie drawful-page"> <div class="container"> <br/><span id="chooselie-text" class="drawful-text"></span><br/> <form id="drawful-chooselie" class="pure-form"> </form> </div> </div> <div class="pt-page-off state-chooselikes drawful-page"> <div class="container"> <br/><span id="chooselikes-choice" class="drawful-text"></span><br/> <span id="chooselikes-text" class="drawful-text"></span><br/> <form id="drawful-chooselikes" class="pure-form"> </form> </div> </div> <div class="pt-page-off state-liereceived drawful-page"> <div class="container"> <br/><span class="drawful-text">title entered!<br/>waiting for other players.</span><br/> </div> </div> <div class="pt-page-off state-lyingdone drawful-page"> <div class="container"> <br/><span class="drawful-text">done!</span><br/> </div> </div> <div class="pt-page-off state-notchoosing drawful-page"> <div class="container"> <br/><span class="drawful-text"></span><br/> </div> </div> <div class="pt-page-off state-draw drawful-page"> <span id="drawful-prompt" class="prompt drawful-text">please draw:</span><br/> <span id="drawful-instructions" class="instructions drawful-text">a picture of yourself!</span><br/> <canvas class="sketchpad" width="240" height="300" style="background-color:#fff"> Sorry, your browser is not supported. </canvas> <form class="pure-form container"> <button type="submit" id="drawful-submitdrawing" class="submit-drawing button-drawful button-large pure-button pure-input-1" style="margin-top:0"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;send</button> <div id="drawful-submitdrawing-loading" style="display:none" class="button-drawful-loading"></div> </form> </div> </div> </div> ';

            function f(e, t, a, i, n, s, o) {
                try {
                    var r = e[s](o),
                        l = r.value
                } catch (e) {
                    return void a(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(i, n)
            }
            const m = r.I.extend({
                template: o().template(g),
                lacksAudience: !0,
                authorMessages: ["you drew this. think about what you've done.", "you drew this. relax.", "you drew this. wait for everyone to figure out what you did.", "you drew this. there's no taking that back.", "you drew this. take a breather.", "you drew this. you are all-powerful.", "you drew this. how do you feel about it?", "you drew this. this is your fault.", "you drew this. it's... good?", "you drew this. all hail you!", "you drew this. let's see what happens."],
                events: {
                    "click #drawful-startgame": "startGame",
                    "click #drawful-stopcountdown": "stopCountdown",
                    "click #drawful-sameplayers": "newGameSamePlayers",
                    "click #drawful-newplayers": "newGameNewPlayers",
                    "click #drawful-submitdrawing": "submitDrawing",
                    "click #drawful-submitlie": "submitLie",
                    "click .drawful-suggestion-button": "chooseSuggestion",
                    "click .drawful-lie-button": "chooseLie",
                    "click .drawful-like-button": "toggleLike"
                },
                initialize(e) {
                    r.I.prototype.initialize.apply(this, [e]), this.currentCanvas = void 0
                },
                update() {
                    var e, t = this;
                    return (e = function*() {
                        const e = t.model.get("player"),
                            a = t.model.get("room"),
                            i = e ? e.state : "",
                            s = a ? a.state : "";
                        let o;
                        if (void 0 !== e && void 0 !== e.playerColor && (n()("#player").css("background-color", e.playerColor), n()("#drawful-instructions").css("color", e.playerColor)), "RoomFull" === i) return l.b.show(Error("The room is full"), {
                            willClose: () => {
                                window.location.reload(!0)
                            }
                        }), void t.onResize();
                        if ("GameLocked" === i) return l.b.show(Error("Game is in progress. Please wait for a new game to start."), {
                            willClose: () => {
                                window.location.reload(!0)
                            }
                        }), void t.onResize();
                        if (e && !1 === e.hasPicture) {
                            if (t.joiningInterfaceIsUp) return void t.onResize();
                            t.enableLoadingButton("#drawful-submitdrawing", !0), t.showScreen(".state-draw"), n()(".drawful .state-draw .instructions").html("a picture of yourself!");
                            const a = t.$(".drawful .sketchpad")[0],
                                i = a.getContext("2d"),
                                s = n()("#player").outerHeight(!0) + n()("#drawful-instructions").outerHeight(!0) + n()("#drawful-prompt").outerHeight(!0) + n()("#drawful-submitdrawing").outerHeight(!0) + 10;
                            return t.currentCanvas = new u(a, i, 30, s, e.playerColor), t.joiningInterfaceIsUp = !0, void t.onResize()
                        }
                        if (t.joiningInterfaceIsUp = !1, s && "Lobby" === s && i === s) {
                            t.currentCanvas = void 0, t.hideLobbyButtons();
                            const e = a.lobbyState;
                            "WaitingForMore" === e ? n()("#drawful-lobby-text").html("waiting for all players to join") : "CanStart" === e ? (n()("#drawful-lobby-text").html("press this button when everybody has joined"), n()("#drawful-startgame").show()) : "Countdown" === e ? (n()("#drawful-lobby-text").html("press this button to cancel game start"), n()("#drawful-stopcountdown").show()) : "PostGame" === e && (n()("#drawful-lobby-text").html("what do you want to do?"), n()(".drawful-endbuttons").show()), t.showScreen(".state-lobby")
                        } else if ("Gameplay_Logo" === s) t.showScreen(".state-nothing");
                        else if ("Gameplay_Round" === s) n()(".round-text").html(`ROUND ${a.round}`), t.showScreen(".state-round");
                        else if ("Gameplay_DrawingTime" === s && "Gameplay_DrawingTime" === i)
                            if (e.receivedBitmap) n()("#drawful-drawing-received").html(c.c.safeText(e.prompt)), t.showScreen(".state-drawing-sent");
                            else {
                                t.enableLoadingButton("#drawful-submitdrawing", !0), t.showScreen(".state-draw"), n()(".drawful .state-draw .instructions").html(c.c.safeText(e.prompt));
                                const a = t.$(".drawful .sketchpad")[0],
                                    i = a.getContext("2d"),
                                    s = n()("#player").outerHeight(!0) + n()("#drawful-instructions").outerHeight(!0) + n()("#drawful-prompt").outerHeight(!0) + n()("#drawful-submitdrawing").outerHeight(!0) + 10;
                                t.currentCanvas = new u(a, i, 30, s, e.playerColor)
                            }
                        else if ("Gameplay_DrawingDone" === s && "Gameplay_DrawingDone" === i) t.showScreen(".state-drawing-done"), t.currentCanvas = void 0;
                        else if ("Gameplay_EnterLie" === s && "Gameplay_EnterLie" === i) {
                            if (".state-enterlie" !== t.activeScreen && (e.isAuthor ? (n()("#drawful-lie-input").hide(), n()("#drawful-enterlie-field").hide(), n()("#drawful-submit-alert").hide(), n()("#drawful-submitlie").hide(), n()(".state-enterlie .author-text").html(t.authorMessages[Math.floor(Math.random() * t.authorMessages.length)])) : (n()(".state-enterlie .author-text").html(""), n()("#drawful-lie-input").val(""), n()("#drawful-lie-input").show(), n()("#drawful-enterlie-field").show(), n()("#drawful-submitlie").show(), n()("#drawful-submit-alert").hide())), e.showError) {
                                const e = n()("#drawful-submit-alert");
                                n()("#drawful-submit-alert").html("you entered the correct title! enter a fake one!"), e.addClass("alert-info"), e.removeClass("alert-danger"), e.show()
                            }
                            t.enableLoadingButton("#drawful-submitlie", !0), t.showScreen(".state-enterlie")
                        } else if ("Gameplay_LieReceived" === i) t.showScreen(".state-liereceived");
                        else if ("Gameplay_LyingDone" === s) t.showScreen(".state-lyingdone");
                        else if ("Gameplay_ChooseLie" === s && "Gameplay_ChooseLie" === i)
                            if (e.choosingDone || null != e.chosen || e.isAuthor) {
                                e.isAuthor ? n()("#chooselikes-choice").html("") : n()("#chooselikes-choice").html(e.chosen ? `you chose: ${e.chosen}` : "you didn't make a choice"), n()("#chooselikes-text").html("award bonus likes");
                                const a = "pure-input-1 drawful-like-button button-large pure-button";
                                let i = "";
                                for (o = 0; o < e.choices.length; o++) {
                                    const t = e.likes.indexOf(e.choices[o]) >= 0,
                                        n = t ? "fa-check-square-o" : "fa-square-o";
                                    i += `<button type="button" data-num="${o}" class="${a} ${t?"button-drawful-liked":"button-drawful-like"}">`, i += `<div class="like-text">${c.c.safeText(e.choices[o])}</div>`, i += `<div class="like-checkbox"><i class="fa ${n} fa-lg"></i></div>`, i += "</button>"
                                }
                                n()("#drawful-chooselikes").html(i), t.showScreen(".state-chooselikes")
                            } else {
                                n()("#chooselie-text").html("What's the real title?");
                                const a = "pure-input-1 drawful-lie-button button-large pure-button button-drawful";
                                let i = "";
                                for (o = 0; o < e.choices.length; o++) i += `<button type="button" data-num="${o}" class="${a}">`, i += c.c.safeText(e.choices[o]), i += "</button>";
                                n()("#drawful-chooselie").html(i), t.showScreen(".state-chooselie")
                            } t.onResize()
                    }, function() {
                        var t = this,
                            a = arguments;
                        return new Promise((function(i, n) {
                            var s = e.apply(t, a);

                            function o(e) {
                                f(s, i, n, o, r, "next", e)
                            }

                            function r(e) {
                                f(s, i, n, o, r, "throw", e)
                            }
                            o(void 0)
                        }))
                    })()
                },
                hideLobbyButtons() {
                    n()("#drawful-startgame").hide(), n()("#drawful-stopcountdown").hide(), n()(".drawful-endbuttons").hide()
                },
                startGame: () => (d.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0
                }), !1),
                stopCountdown: () => (d.app.client.send("SendMessageToRoomOwner", {
                    cancelStartGame: !0
                }), !1),
                enableLoadingButton(e, t) {
                    t ? (n()(e).show(), n()(`${e}-loading`).hide()) : (n()(e).hide(), n()(`${e}-loading`).show())
                },
                submitDrawing() {
                    if (this.currentCanvas.isClean) return alert("You have to draw something!"), !1;
                    this.enableLoadingButton("#drawful-submitdrawing", !1);
                    const e = this.joiningInterfaceIsUp ? {
                        setPlayerPicture: !0,
                        picture: this.currentCanvas.getBase64Image()
                    } : {
                        drawing: this.currentCanvas.getBase64Image()
                    };
                    return d.app.client.send("SendMessageToRoomOwner", e), !1
                },
                submitLie() {
                    let e = this.sanitize(n()("#drawful-lie-input").val()).toUpperCase();
                    if (e = e.replace(/\s\s+/g, " ").trim(), 0 === e.length) {
                        const e = n()("#drawful-submit-alert");
                        return n()("#drawful-submit-alert").html("you can't enter nothing!"), e.removeClass("alert-info"), e.addClass("alert-danger"), e.show(), !1
                    }
                    return this.enableLoadingButton("#drawful-submitlie", !1), d.app.client.send("SendMessageToRoomOwner", {
                        lieEntered: e,
                        usedSuggestion: !1
                    }), !1
                },
                chooseLie(e) {
                    const t = n()(e.target).data("num"),
                        a = this.model.get("player").choices[t];
                    return d.app.client.send("SendMessageToRoomOwner", {
                        choice: a
                    }), !1
                },
                toggleLike(e) {
                    const t = n()(e.currentTarget).data("num"),
                        a = this.model.get("player").likes.indexOf(this.model.get("player").choices[t]) >= 0;
                    if (!a) {
                        n()(e.currentTarget).removeClass(a ? "button-drawful-liked" : "button-drawful-like"), n()(e.currentTarget).addClass(a ? "button-drawful-like" : "button-drawful-liked"), n()(e.currentTarget).find(".like-checkbox").html(`<i class="fa ${a?"fa-square-o":"fa-check-square-o"} fa-lg"></i>`);
                        const i = this.model.get("player").choices[t];
                        d.app.client.send("SendMessageToRoomOwner", {
                            like: i
                        })
                    }
                    return !1
                },
                newGameSamePlayers: () => (d.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_Continue"
                }), !1),
                newGameNewPlayers: () => (d.app.client.send("SendMessageToRoomOwner", {
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
        74707: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/drawful/298816f72e1854c8397a.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/1099.2a68354df93110870156.js.map