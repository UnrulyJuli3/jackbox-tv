(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/triviadeath"], {
        47214: (t, e, i) => {
            "use strict";
            i.d(e, {
                E: () => w
            });
            var n = i(13469),
                s = i.n(n),
                o = i(19755),
                a = i.n(o),
                c = i(72316),
                r = i.n(c),
                l = i(63574),
                h = i.n(l),
                d = i(10972),
                u = i(2720);

            function g(t, e, i, n, s, o, a) {
                try {
                    var c = t[o](a),
                        r = c.value
                } catch (t) {
                    return void i(t)
                }
                c.done ? e(r) : Promise.resolve(r).then(n, s)
            }

            function p(t) {
                return function() {
                    var e = this,
                        i = arguments;
                    return new Promise((function(n, s) {
                        var o = t.apply(e, i);

                        function a(t) {
                            g(o, n, s, a, c, "next", t)
                        }

                        function c(t) {
                            g(o, n, s, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function m(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const b = h().View.extend({
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
            class w {
                static get isVisible() {
                    return !!this.view && "on" === this.view.state
                }
                static update(t, e) {
                    var i = this;
                    return p((function*() {
                        e && "PostGame" === e.lobbyState ? (i.view || (yield i.init(t, e)), i.show()) : i.hide()
                    }))()
                }
                static init(t) {
                    var e = this;
                    return p((function*() {
                        t ? (e.bannerData = yield e.loadBannerData(t), e.bannerData && (e.view = new b({
                            model: new(r().Model)(e.bannerData)
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
                    return p((function*() {
                        try {
                            const e = yield fetch(u.v.banners.url), i = yield e.json();
                            return !(!i || !i.postGameBanners) && i.postGameBanners[t]
                        } catch (t) {
                            return console.error("Unable to load banner data", t), !1
                        }
                    }))()
                }
            }
            m(w, "view", null), m(w, "isInitialized", !1), m(w, "bannerConfig", null)
        },
        62353: (t, e, i) => {
            "use strict";
            i.d(e, {
                I: () => w
            });
            var n = i(13469),
                s = i.n(n),
                o = i(19755),
                a = i.n(o),
                c = i(72316),
                r = i.n(c),
                l = i(63574),
                h = i.n(l),
                d = i(10972),
                u = i(81127),
                g = i(40543),
                p = i(89446),
                m = i(47214);

            function b(t, e, i, n, s, o, a) {
                try {
                    var c = t[o](a),
                        r = c.value
                } catch (t) {
                    return void i(t)
                }
                c.done ? e(r) : Promise.resolve(r).then(n, s)
            }
            const w = h().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(t) {
                    this.mergeOptions(t, ["appId", "appTag"]), d.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), d.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(r().Model)({});
                    const e = d.app.client.parseEntities();
                    this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), d.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), d.app.client.on("client:connection", this.onConnectionMessageWithContext), d.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), d.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", p.c.safeText(d.app.client.name), {
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
                    i || -1 === e.indexOf("_") || (i = t.state.split("_")[1]), "PostGame" === i || "Credits" === e || "GameOver" === e || "PostGame" === e || "DayEnd" === e || t.gameResults ? m.E.isInitialized ? m.E.show() : m.E.init(this.getOption("appTag")).then((() => {
                        m.E.show()
                    })) : m.E.hide(), d.app.storage && d.app.storage.isSupported && t.platformId && d.app.storage.setTag(`platform-${t.platformId}`)
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
                                b(o, n, s, a, c, "next", t)
                            }

                            function c(t) {
                                b(o, n, s, a, c, "throw", t)
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
                    e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : d.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), g.b.show("custom", {
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
                    }), u.Q.setAsViewed(0)
                },
                showScreen(t, e) {
                    const i = a()(t);
                    return this.activeScreen && t === this.activeScreen || (this.activeScreen && (a()(this.activeScreen).fadeOut("fast", (() => {})), a()(this.activeScreen).show(), a()(this.activeScreen).addClass("pt-page-off")), i.hide(), i.removeClass("pt-page-off"), i.removeClass("pt-page-moveToLeft"), i.fadeIn("fast", (() => {
                        e && e()
                    })), this.activeScreen = t, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = s().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    g.b.vibrate()
                },
                trackScreenView() {
                    d.app.analytics.trackScreenView(this.getOption("appTag")), d.app.storage && d.app.storage.isSupported && d.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    d.app.storage && d.app.storage.isSupported && (d.app.storage.remove("roomCode"), d.app.storage.remove("reconnect")), g.b.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected() {
                    g.b.show("error", {
                        titleText: "Disconnected",
                        text: "You have been disconnected.",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage(t) {
                    const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
                    if (g.b.show("toast", {
                            text: e
                        }), "connected" === t.status) {
                        const t = d.app.client.parseEntities();
                        this.model.set(t)
                    }
                },
                onResize() {
                    const t = a()("#player").outerHeight(!0) || 0,
                        e = m.E.isVisible ? a()("#slide-in-banner").outerHeight(!0) : 0,
                        i = a()(window).width(),
                        n = a()(window).height() - t;
                    a()(`.${this.getOption("appTag")}-page`).css("height", n - e), a()(`.${this.getOption("appTag")}-page`).attr("height", n - e), a()(`.${this.getOption("appTag")}-page`).css("top", t), a()(`.${this.getOption("appTag")}-page`).css("width", i), a()(`.${this.getOption("appTag")}-page`).attr("width", i)
                }
            })
        },
        77342: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                MainView: () => p
            });
            var n = i(19755),
                s = i.n(n),
                o = i(13469),
                a = i.n(o),
                c = i(62353),
                r = i(40543),
                l = i(81127),
                h = i(10972);
            const d = function(t, e, i, n, s) {
                    this.isDrawing = !1, this.isClean = !0, this.isEnabled = !0, this.lines = [], this.canvas = t, this.context = e, this.context.save(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.restore(), this.widthDiff = i, this.heightDiff = Math.max(n, 200), this.strokestyle = s, void 0 !== this.canvas.style.msTouchAction && (this.canvas.style.msTouchAction = "none");
                    const o = this,
                        a = function() {
                            let t = window.innerWidth - o.widthDiff,
                                e = window.innerHeight - o.heightDiff;
                            e < 25 && (e = 25, t = e * (window.innerWidth / window.innerHeight));
                            const i = t / e,
                                n = o.canvas.width / o.canvas.height;
                            n < i ? (o.canvas.style.height = `${e}px`, o.canvas.style.width = e * n + "px") : (o.canvas.style.width = `${t}px`, o.canvas.style.height = t * (1 / n) + "px"), window.scrollTo(0, 1)
                        };
                    window.onresize = a;
                    const c = function(t) {
                            if ("touchmove" === t.type) t.preventDefault();
                            else if ("touchend" === t.type) return o.isDrawing && t.preventDefault(), void o[t.type]();
                            const e = o.canvas.getBoundingClientRect(),
                                i = {
                                    x: t.targetTouches[0].pageX - e.left,
                                    y: t.targetTouches[0].pageY - e.top
                                };
                            i.x *= o.canvas.width / parseInt(o.canvas.style.width, 10), i.y *= o.canvas.height / parseInt(o.canvas.style.height, 10), o[t.type](i)
                        },
                        r = function(t) {
                            if ("mousemove" === t.type) t.preventDefault();
                            else if ("mouseup" === t.type) return void o[t.type]();
                            const e = o.canvas.getBoundingClientRect(),
                                i = {
                                    x: t.clientX - e.left,
                                    y: t.clientY - e.top
                                };
                            i.x *= o.canvas.width / parseInt(o.canvas.style.width, 10), i.y *= o.canvas.height / parseInt(o.canvas.style.height, 10), o[t.type](i)
                        };
                    this.canvas.addEventListener("touchstart", c, !1), this.canvas.addEventListener("touchmove", c, !1), document.addEventListener("touchend", c, !1), this.canvas.addEventListener("mousedown", r, !1), this.canvas.addEventListener("mousemove", r, !1), document.addEventListener("mouseup", r, !1);
                    const l = function(t, e, i) {
                            t.strokeStyle = o.strokestyle, t.lineCap = "round", t.lineWidth = 6, t.beginPath(), t.arc(e, i, .01, 0, 2 * Math.PI, !0), t.stroke(), t.moveTo(e, i)
                        },
                        h = function(t, e, i) {
                            t.lineTo(e, i), t.stroke()
                        };
                    this.getBase64Image = function() {
                        const t = document.createElement("canvas");
                        t.width = o.canvas.width, t.height = o.canvas.height;
                        const e = t.getContext("2d");
                        o.context.strokeStyle = this.strokestyle, o.context.lineCap = "round", o.context.lineWidth = 6;
                        for (let t = 0; t < o.lines.length; t++) {
                            const i = o.lines[t];
                            for (let t = 0; t < i.points.length; t++) {
                                const n = i.points[t];
                                0 === t ? l(e, n.x, n.y) : h(e, n.x, n.y)
                            }
                        }
                        let i = t.toDataURL("image/png");
                        return i = i.replace("data:image/png;base64,", ""), i
                    }, this.start = function(t) {
                        o.isEnabled && (l(o.context, t.x, t.y), o.isDrawing = !0, o.isClean = !1, o.lines.push({
                            points: [t]
                        }))
                    }, this.move = function(t) {
                        o.isDrawing && (h(o.context, t.x, t.y), o.lines[o.lines.length - 1].points.push(t))
                    }, this.end = function() {
                        o.isDrawing && (o.isDrawing = !1)
                    }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, a()
                },
                u = function() {
                    const t = this;
                    this.numRows = 4, this.numCols = 4, this.windowDiffFn = () => ({
                        width: 0,
                        height: 0
                    }), this.parentSelector = "#jbg-grid-main", this.getDataFn = function() {
                        return null
                    }, this.generate = function() {
                        let e = '<table class="jbg-grid">';
                        for (let i = 0; i < t.numRows; i++) {
                            e += '<tr class="jbg-grid-row">';
                            for (let n = 0; n < t.numCols; n++) e += `<td class="jbg-grid-cell coord-${i}-${n}" data-r="${i}" data-c="${n}" >`, e += `<span class="jbg-grid-text coord-${i}-${n}">${t.getDataFn(i,n)}</span>`, e += "</td>";
                            e += "</tr>"
                        }
                        e += "</table>", s()(t.parentSelector).html(e), s()(".jbg-grid-cell").css({
                            width: 100 / t.numCols + "%",
                            height: 100 / t.numRows + "%"
                        }), s()(".jbg-grid-cell").on("click", (function() {
                            const e = s()(this),
                                i = e.data("r"),
                                n = e.data("c");
                            s()(t).trigger("cellTouched", [i, n])
                        })), s()(window).resize(this.onResize), setTimeout((() => {
                            t.onResize()
                        }), 1), t.onResize()
                    }, this.reset = function() {
                        s()(window).off("resize", this.onResize), s()(".jbg-grid-cell").off()
                    }, this.getCell = function(t, e) {
                        let i = null;
                        return i = s()(`.jbg-grid-cell.coord-${t}-${e}`), i
                    }, this.onResize = () => {
                        const e = t.windowDiffFn(),
                            i = window.innerWidth - e.width,
                            n = window.innerHeight - e.height;
                        let o;
                        o = i >= n ? n : i, o = Math.max(215, o), s()(".jbg-grid").css({
                            margin: "0 auto",
                            width: o,
                            height: o
                        });
                        let a = o / t.numCols;
                        a *= .6, s()(".jbg-grid-text").css({
                            "font-size": `${a}px`
                        })
                    }
                };

            function g(t, e, i, n, s, o, a) {
                try {
                    var c = t[o](a),
                        r = c.value
                } catch (t) {
                    return void i(t)
                }
                c.done ? e(r) : Promise.resolve(r).then(n, s)
            }
            const p = c.I.extend({
                template: a().template('<div id="page-triviadeath" class="page"> <div id="player" class="dark-background light-text"> <h1><%=username%></h1> </div> <div id="preload" class="preload"></div> <div id="game" class="game pt-pageholder"> <div id="state-lobby" class="pt-page-off game-page textured-background"> <div class="container"> <br/><span id="lobby-text"></span><br/> <form class="pure-form"> <button type="button" id="button-startgame" class="light-text button-game button-xlarge pure-button pure-input-1">EVERYBODY\'S IN</button> <button type="button" id="button-stopcountdown" class="light-text button-game button-xlarge pure-button pure-input-1">CANCEL</button> <button type="button" id="button-sameplayers" class="light-text button-game button-xlarge pure-button pure-input-1 button-endbuttons">same players</button> <button type="button" id="button-newplayers" class="light-text button-game button-xlarge pure-button pure-input-1 button-endbuttons">new players</button> </form> </div> </div> <div id="state-logo" class="pt-page-off game-page black-background logo-image"> </div> <div id="state-make-single-choice" class="pt-page-off game-page textured-background"> <div id="make-single-choice-text" class="dark-text white-background" style="width:100%;text-align:center"></div> <div id="make-single-choice-choices"></div> </div> <div id="state-make-many-choices" class="pt-page-off game-page textured-background"> <div id="make-many-choices-text" class="dark-text white-background" style="width:100%;text-align:center"></div> <div class="container"> <div id="make-many-choices-sub-text" class="white-text" style="width:100%;text-align:center"></div> <div id="make-many-choices-choices" class="row light-text" style="width:100%"></div> <div id="make-many-choices-submit-button-container" style="width:100%;display:table"> <button type="button" id="make-many-choices-submit-button" class="light-text button-game button-xlarge pure-button pure-input-1">SUBMIT</button> </div> </div> </div> <div id="state-enter-single-text" class="pt-page-off game-page textured-background"> <div> <div id="enter-single-text-text-container" class="white-background"></div> <div id="enter-single-text-error" class="red-background"></div> <div id="enter-single-text-input-container" class="container"> <form class="pure-form" id="enter-single-text-field"> <div class="pure-u-1"> <input id="enter-single-text-input" name="enter-single-text-input-field" class="pure-input-1 capitalize" type="text" maxlength="45" placeholder="ENTER HERE" autocapitalize="off" autocorrect="off" autocomplete="off"> </div> <button type="submit" id="enter-single-text-submit" class="light-text button-game button-large pure-button capitalize right"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;SEND</button> </form> </div> </div> </div> <div id="state-enter-single-drawing" class="pt-page-off pushed-down-page game-page textured-background"> <div id="enter-single-drawing-text-container" class="white-background">Lorem Ipsum</div> <canvas id="sketchpad" class="sketchpad" width="240" height="320" style="background-color:#fff"> Sorry, your browser is not supported. </canvas> <form id="enter-single-drawing-submit-container" class="pure-form container"> <button type="submit" id="enter-single-drawing-submit" class="light-text submit-drawing button-game button-large pure-button pure-input-1" style="margin-top:0"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;send</button> </form> </div> <div id="state-grid" class="pt-page-off game-page textured-background"> <div id="grid-text" class="white-background"></div> <div id="grid-main"></div> <div id="grid-progress"> <button type="submit" id="grid-submit" class="light-text button-game button-large pure-button capitalize"></button> </div> </div> <div id="state-game-results" class="pt-page-off game-page black-background"> <div id="top-text" class="white-background"></div> <div id="bottom-text" class="white-text"></div> </div> </div> </div> '),
                testBlob: null,
                grid: null,
                lastDollInfo: null,
                events: {
                    "click #button-startgame": "startGame",
                    "click #button-stopcountdown": "stopCountdown",
                    "click #button-sameplayers": "newGameSamePlayers",
                    "click #button-newplayers": "newGameNewPlayers",
                    "click .button-choice": "chooseChoice",
                    "click .make-many-choices-button": "chooseManyChoices",
                    "click .make-many-choices-checkbox": "chooseManyChoices",
                    "click #make-many-choices-submit-button": "submitManyChoices",
                    "click #enter-single-text-submit": "submitEnterSingleText",
                    "click #enter-single-drawing-submit": "submitEnterSingleDrawing",
                    "click #grid-submit": "submitGrid",
                    "click .gallery-link": "artifactClicked"
                },
                setupWithDollInfo(t) {
                    t || (t = this.lastDollInfo ? this.lastDollInfo : {
                        name: "None",
                        controllerColors: {
                            dark: "#AAAAAA",
                            light: "#CCCCCC"
                        }
                    }), this.lastDollInfo = t;
                    const e = t.controllerColors;
                    s()(".dark-background").css("background-color", e.dark), s()(".light-background").css("background-color", e.light), s()(".dark-text").css("color", e.dark), s()(".light-text").css("color", e.light), s()(".textured-background").addClass(t.name.toLowerCase())
                },
                update() {
                    var t, e = this;
                    return (t = function*() {
                        if (e.model.get("room") && e.model.get("room").gameResults) {
                            const t = e.model.get("room").gameResults,
                                n = e.model.get("player") || {};
                            let o = "",
                                a = "";
                            if (h.app.client.isRole("player")) {
                                let s;
                                for (let e = 0; e < t.players.length; e++) t.players[e].id === h.app.client.userId && (s = t.players[e]);
                                const c = n ? n.state : "";
                                if (s) {
                                    if (o += `<p>${s.wonGame?"CONGRATULATIONS":"SUCH A TRAGEDY!"}</p>`, "MakeSingleChoice" === c)
                                        for (let t = 0; t < n.choices.length; t++) o += `<button data-choice="${t}" class="light-text button-choice button-game button-large btn btn-block">${n.choices[t].text}</button>`;
                                    a += `<p>${s.wonGame?"You survived the game!":"You did not survive the game"}</p>`, a += "<BR>", a += `<p>Your final score: $${s.score}</p>`
                                }
                                const r = e.model.get("room").artifact;
                                if (r && r.success && r.rootId) {
                                    let t = "games.jackbox.tv"; - 1 !== r.rootId.indexOf("test") && (t = "games-test.jackbox.tv");
                                    try {
                                        a += `<div class="col-xs-12"><a target="_blank" class="gallery-link" href="${`https://${t}/artifact/TriviaDeathResults/${r.artifactId}/`}"><img src="${(yield Promise.resolve().then(i.t.bind(i,14343,17))).default}" /></a></div>`, l.Q.add(r, e.getOption("appTag"))
                                    } catch (t) {
                                        console.error("unable to load gallery image")
                                    }
                                }
                            } else {
                                let n = 0;
                                for (let e = 0; e < t.players.length; e++) t.players[e].wonGame && (n = t.players[e].score);
                                t.audience && (o += `<p>${t.audience.survived?"CONGRATULATIONS":"SUCH A TRAGEDY!"}</p>`, a += `<p>${t.audience.survived?"The audience has SURVIVED!":"The audience has DIED, and so have you!"}</p>`, a += "<BR>", a += `<p>${t.audience.count} audience ${1===t.audience.count?"member":"members"} got : $${t.audience.score}</p>`, a += "<BR>", a += `<p>Score to beat : $${n}</p>`);
                                const s = e.model.get("room").artifact;
                                if (s && s.success && s.rootId) {
                                    let t = "games.jackbox.tv"; - 1 !== s.rootId.indexOf("test") && (t = "games-test.jackbox.tv");
                                    try {
                                        const n = "TriviaDeathResults";
                                        s.categoryId = n;
                                        a += `<div class="col-xs-12"><a target="_blank" class="gallery-link" href="${`https://${t}/artifact/${n}/${s.artifactId}/`}"><img src="${(yield Promise.resolve().then(i.t.bind(i,14343,17))).default}" /></a></div>`, l.Q.add(s, e.getOption("appTag"))
                                    } catch (t) {
                                        console.error("unable to load gallery image")
                                    }
                                }
                            }
                            return s()("#state-game-results #top-text").html(o), s()("#state-game-results #bottom-text").html(a), e.showScreen("#state-game-results"), void e.setupWithDollInfo(h.app.client.isRole("player") ? n.dollInfo : e.model.get("room").audience.dollInfo)
                        }
                        s()("#game-results").hide(), h.app.client.isRole("player") ? e.updatePlayer() : e.updateAudience()
                    }, function() {
                        var e = this,
                            i = arguments;
                        return new Promise((function(n, s) {
                            var o = t.apply(e, i);

                            function a(t) {
                                g(o, n, s, a, c, "next", t)
                            }

                            function c(t) {
                                g(o, n, s, a, c, "throw", t)
                            }
                            a(void 0)
                        }))
                    })()
                },
                updatePlayer() {
                    if (!this.model.get("room")) return this.setupWithDollInfo(null), void this.showScreen("#state-logo");
                    const t = this.model.get("room"),
                        e = this.model.get("player") || {},
                        i = e ? e.state : "",
                        n = t ? t.state : "";
                    if (this.grid && "Gameplay" !== n && "Grid" !== i && (this.grid.reset(), this.grid = null), "RoomFull" !== i)
                        if ("GameLocked" !== i) {
                            if ("Lobby" === n) {
                                if (this.hideLobbyButtons(), !e.isAllowedToStartGame) return s()("#lobby-text").html("Sit back and relax!"), this.showScreen("#state-lobby"), void this.setupWithDollInfo(e.dollInfo);
                                const i = t.lobbyState;
                                "WaitingForMore" === i ? s()("#lobby-text").html("Waiting for all players to join") : "CanStart" === i ? (s()("#lobby-text").html("Press this button when everybody has joined"), s()("#button-startgame").show()) : "Countdown" === i ? (s()("#lobby-text").html("Press this button to cancel game start"), s()("#button-stopcountdown").show()) : "PostGame" === i && (s()("#lobby-text").html("What do you want to do?"), s()(".button-endbuttons").show()), this.showScreen("#state-lobby")
                            } else if ("Gameplay" === n)
                                if ("MakeSingleChoice" === i) {
                                    const t = null === e.chosen || void 0 === e.chosen,
                                        i = e.text,
                                        n = e.choices;
                                    if (t) {
                                        s()("#make-single-choice-text").html(`<p>${i}</p>`);
                                        let t = "";
                                        for (let e = 0; e < n.length; e++) t += `<button data-choice="${e}" class="${n[e].disabled?`background-finger background-finger-${e}`:""} light-text button-choice button-game button-large btn" ${n[e].disabled?"disabled":""}>${n[e].disabled?"&zwnj;":n[e].text}</button>`;
                                        s()("#make-single-choice-choices").html(t)
                                    } else s()("#make-single-choice-text").html("<p>Thanks.</p>"), s()("#make-single-choice-choices").html("");
                                    this.showScreen("#state-make-single-choice")
                                } else if ("MakeManyChoices" === i) {
                                const t = null === e.chosen || void 0 === e.chosen,
                                    i = e.text,
                                    n = e.choices;
                                if (t) {
                                    s()("#make-many-choices-text").html(`<p id='many-text'>${i}</p>`), s()("#make-many-choices-sub-text").html("<p id='many-sub-text'>Tap any items below that fit this category.</p>");
                                    let t = "";
                                    for (let e = 0; e < n.length; e++) t += '<div class="col-xs-10">', t += `<button data-choice="${e}" id="make-many-choices-button-${e}" class="light-text make-many-choices-button button-game button-large pure-button pure-input-1">${n[e].text}</button>`, t += '</div><div class="col-xs-2">', t += `<i data-choice="${e}" id="make-many-choices-checkbox-${e}" class="checkbox box-unchecked make-many-choices-checkbox"></i>`, t += "</div>";
                                    s()("#make-many-choices-choices").html(t), s()("#make-many-choices-submit-button-container").show()
                                } else s()("#make-many-choices-text").html("<p>Thanks.</p>"), s()("#make-many-choices-sub-text").html(""), s()("#make-many-choices-choices").html(""), s()("#make-many-choices-submit-button-container").hide();
                                this.showScreen("#state-make-many-choices")
                            } else if ("EnterSingleText" === i) e.entry ? this.showScreen("#state-logo") : (e.error ? (s()("#enter-single-text-error").html(`<p>${e.error}</p>`), s()("#enter-single-text-error").show()) : s()("#enter-single-text-error").hide(), "#state-enter-single-text" !== this.activeScreen && (s()("#enter-single-text-input").val(""), s()("#enter-single-text-input").prop("type", e.inputType), s()("#enter-single-text-field").show(), s()("#state-enter-single-text #enter-single-text-text-container").html(`<span class="container-text">${e.text}</span>`)), this.showScreen("#state-enter-single-text"));
                            else if ("EnterSingleDrawing" === i)
                                if (e.entry) this.showScreen("#state-logo");
                                else {
                                    s()("#enter-single-drawing-text-container").html(`<p>Please Draw :<br>${e.text}</p>`), this.showScreen("#state-enter-single-drawing");
                                    const t = this.$el.find("#sketchpad")[0],
                                        i = t.getContext("2d"),
                                        n = this.$el.find("#player").outerHeight() + this.$el.find("#enter-single-drawing-text-container").outerHeight() + this.$el.find("#enter-single-drawing-submit-container").outerHeight();
                                    this.currentCanvas = new d(t, i, 30, n, 0)
                                }
                            else if ("Grid" === i) {
                                if (e.entry) return void this.showScreen("#state-logo");
                                if (!e.grid) return void this.showScreen("#state-logo");
                                const t = e.text;
                                s()("#grid-text").html(`<p>${t}</p>`);
                                const i = e.grid.length,
                                    n = e.grid.length > 0 ? e.grid[0].length : 0,
                                    c = e.mode || "rewind",
                                    r = [];
                                this.grid && (this.grid.reset(), this.grid = null);
                                const l = new u;

                                function o(t, e) {
                                    for (let i = 0; i < r.length; i++)
                                        if (r[i].r === t && r[i].c === e) return i;
                                    return -1
                                }

                                function a() {
                                    for (let t = 0; t < i; t++)
                                        for (let i = 0; i < n; i++) {
                                            const n = l.getCell(t, i);
                                            o(t, i) >= 0 ? (n.addClass(`${e.skin}-selected`), n.removeClass(`${e.skin}-unselected`)) : (n.addClass(`${e.skin}-unselected`), n.removeClass(`${e.skin}-selected`))
                                        }
                                    if (e.showProgress) {
                                        let t = "";
                                        for (let i = 0; i < r.length; i++) t += e.grid[r[i].r][r[i].c];
                                        s()("#grid-submit").text("Submit" + (t.length > 0 ? ` "${t}"` : ""))
                                    } else s()("#grid-submit").text("Submit");
                                    s()("#grid-submit").data("entry", r)
                                }
                                l.numRows = i, l.numCols = n, l.windowDiffFn = () => {
                                    let t = 0;
                                    return t += this.$el.find("#player").outerHeight() || 0, t += this.$el.find("#grid-text").outerHeight() || 0, t += this.$el.find("#grid-progress").outerHeight() || 0, {
                                        width: 0,
                                        height: t
                                    }
                                }, l.getDataFn = function(t, i) {
                                    return e.grid[t][i]
                                }, l.parentSelector = "#grid-main", s()(l).on("cellTouched", ((t, e, i) => {
                                    const n = o(e, i);
                                    "normal" === c ? n >= 0 ? r.splice(n, 1) : r.push({
                                        r: e,
                                        c: i
                                    }) : "rewind" === c && (n >= 0 ? r.splice(n + (n === r.length - 1 ? 0 : 1)) : r.push({
                                        r: e,
                                        c: i
                                    })), a()
                                })), l.generate(), this.grid = l, a(), this.showScreen("#state-grid")
                            } else this.showScreen("#state-logo");
                            else this.showScreen("#state-logo");
                            this.setupWithDollInfo(e.dollInfo)
                        } else r.b.show(Error("Game is in progress. Please wait for a new game to start."), {
                            willClose: () => {
                                window.location.reload(!0)
                            }
                        });
                    else r.b.show(Error("The room is full"), {
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                updateAudience() {
                    const t = this.model.get("room") || {
                        audience: {}
                    };
                    if (!t.audience) return this.showScreen("#state-logo"), void this.setupWithDollInfo(null);
                    const e = t.audience;
                    if (!e.text || !e.choices || !e.type) return this.showScreen("#state-logo"), void this.setupWithDollInfo(t.audience.dollInfo);
                    const i = e.text,
                        n = e.choices,
                        o = e.type;
                    if ("single" === o) {
                        s()("#make-single-choice-text").html(`<p>${i}</p>`);
                        let t = "";
                        n.forEach((e => {
                            t += `<button data-choice="${e.key}" class="light-text button-choice button-game button-large pure-button pure-input-1">${e.text}</button>`
                        })), s()("#make-single-choice-choices").html(t), this.showScreen("#state-make-single-choice")
                    } else if ("multiple" === o) {
                        s()("#make-many-choices-text").html(`<p>${i}</p>`), s()("#make-many-choices-sub-text").html("<p>Tap the items below that fit into this category.</p>");
                        let t = "";
                        for (let e = 0; e < n.length; e++) t += '<div class="col-xs-10">', t += `<button data-choice="${e}" id="make-many-choices-button-${e}" class="light-text make-many-choices-button button-game button-large pure-button pure-input-1">${n[e].text}</button>`, t += '</div><div class="col-xs-2">', t += `<i data-choice="${e}" id="make-many-choices-checkbox-${e}" class="checkbox box-unchecked make-many-choices-checkbox"></i>`, t += "</div>";
                        s()("#make-many-choices-choices").html(t), s()("#make-many-choices-submit-button-container").show(), this.showScreen("#state-make-many-choices")
                    }
                    this.setupWithDollInfo(t.audience.dollInfo)
                },
                hideLobbyButtons() {
                    s()("#button-startgame").hide(), s()("#button-stopcountdown").hide(), s()(".button-endbuttons").hide()
                },
                startGame: () => (h.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0
                }), !1),
                stopCountdown: () => (h.app.client.send("SendMessageToRoomOwner", {
                    cancelStartGame: !0
                }), !1),
                newGameSamePlayers: () => (h.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_Continue"
                }), !1),
                newGameNewPlayers: () => (h.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_NewGame"
                }), !1),
                chooseChoice(t) {
                    const e = s()(t.currentTarget).data("choice");
                    return h.app.client.isRole("player") ? h.app.client.send("SendMessageToRoomOwner", {
                        choice: e
                    }) : (h.app.client.sessionSend("vote", "Trivia Death Vote", {
                        type: "vote",
                        vote: e
                    }), s()("#make-single-choice-text").html("<p>Thanks. Now wait quietly.</p>"), s()("#make-single-choice-choices").html("")), s()(".button-choice").removeClass("selected"), s()(t.currentTarget).addClass("selected"), !1
                },
                chooseManyChoices(t) {
                    const e = s()(t.currentTarget).data("choice"),
                        i = s()(`#make-many-choices-checkbox-${e}`),
                        n = s()(`#make-many-choices-button-${e}`);
                    i.hasClass("box-checked") ? (i.removeClass("box-checked"), i.addClass("box-unchecked"), n.removeClass("white-background")) : (i.removeClass("box-unchecked"), i.addClass("box-checked"), n.addClass("white-background")), this.setupWithDollInfo(null)
                },
                submitManyChoices() {
                    if (h.app.client.isRole("player")) {
                        const t = this.model.get("player") || {};
                        if (!t.choices) return;
                        const e = [];
                        for (let i = 0; i < t.choices.length; i++) {
                            const t = `#make-many-choices-checkbox-${i}`;
                            e[i] = s()(t).hasClass("box-checked")
                        }
                        h.app.client.send("SendMessageToRoomOwner", {
                            choices: e
                        })
                    } else {
                        const t = (this.model.get("room") || {
                            audience: {}
                        }).audience;
                        if (!t) return;
                        const e = [];
                        for (let i = 0; i < t.choices.length; i++) {
                            const t = `#make-many-choices-checkbox-${i}`;
                            e[i] = s()(t).hasClass("box-checked")
                        }
                        h.app.client.sessionSend("vote", "Trivia Death Vote", {
                            type: "vote",
                            vote: e.join(",")
                        }), s()("#make-many-choices-text").html("<p>Thanks.</p>"), s()("#make-many-choices-sub-text").html(""), s()("#make-many-choices-choices").html(""), s()("#make-many-choices-submit-button-container").hide()
                    }
                },
                submitEnterSingleText() {
                    const t = this.sanitize(s()("#enter-single-text-input").val()).toUpperCase();
                    return h.app.client.send("SendMessageToRoomOwner", {
                        entry: t
                    }), !1
                },
                submitEnterSingleDrawing() {
                    if (this.currentCanvas.isClean) return alert("You have to draw something!"), !1;
                    const t = {
                        drawing: this.currentCanvas.getBase64Image()
                    };
                    return h.app.client.send("SendMessageToRoomOwner", t), !1
                },
                submitGrid(t) {
                    const e = s()(t.currentTarget).data("entry");
                    return h.app.client.send("SendMessageToRoomOwner", {
                        entry: e
                    }), !1
                },
                sanitize: t => t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,:]/gi, "").replace(/'/g, "’").trim(),
                onResize() {
                    const t = s()(window).width(),
                        e = s()(window).height() - s()("#player").outerHeight(!0);
                    s()(".game-page").css("height", e), s()(".game-page").attr("height", e), s()(".game-page").css("width", t), s()(".game-page").attr("width", t)
                }
            })
        },
        14343: (t, e, i) => {
            "use strict";
            t.exports = i.p + "games/triviadeath/2d9b65ea7fa065863f82.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/7342.5f5829eab50b112a2245.js.map