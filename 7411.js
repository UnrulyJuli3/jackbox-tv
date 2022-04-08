(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [7411], {
        47214: (t, e, o) => {
            "use strict";
            o.d(e, {
                E: () => f
            });
            var n = o(13469),
                a = o.n(n),
                i = o(19755),
                s = o.n(i),
                r = o(72316),
                l = o.n(r),
                c = o(63574),
                u = o.n(c),
                d = o(10972),
                b = o(2720);

            function h(t, e, o, n, a, i, s) {
                try {
                    var r = t[i](s),
                        l = r.value
                } catch (t) {
                    return void o(t)
                }
                r.done ? e(l) : Promise.resolve(l).then(n, a)
            }

            function p(t) {
                return function() {
                    var e = this,
                        o = arguments;
                    return new Promise((function(n, a) {
                        var i = t.apply(e, o);

                        function s(t) {
                            h(i, n, a, s, r, "next", t)
                        }

                        function r(t) {
                            h(i, n, a, s, r, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }

            function g(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }
            const w = u().View.extend({
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
                                let [e, o] = t, n = o || "no-theme";
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
                        s()(window).trigger("resize")
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
            class f {
                static get isVisible() {
                    return !!this.view && "on" === this.view.state
                }
                static update(t, e) {
                    var o = this;
                    return p((function*() {
                        e && "PostGame" === e.lobbyState ? (o.view || (yield o.init(t, e)), o.show()) : o.hide()
                    }))()
                }
                static init(t) {
                    var e = this;
                    return p((function*() {
                        t ? (e.bannerData = yield e.loadBannerData(t), e.bannerData && (e.view = new w({
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
                    return p((function*() {
                        try {
                            const e = yield fetch(b.v.banners.url), o = yield e.json();
                            return !(!o || !o.postGameBanners) && o.postGameBanners[t]
                        } catch (t) {
                            return console.error("Unable to load banner data", t), !1
                        }
                    }))()
                }
            }
            g(f, "view", null), g(f, "isInitialized", !1), g(f, "bannerConfig", null)
        },
        62353: (t, e, o) => {
            "use strict";
            o.d(e, {
                I: () => f
            });
            var n = o(13469),
                a = o.n(n),
                i = o(19755),
                s = o.n(i),
                r = o(72316),
                l = o.n(r),
                c = o(63574),
                u = o.n(c),
                d = o(10972),
                b = o(81127),
                h = o(40543),
                p = o(89446),
                g = o(47214);

            function w(t, e, o, n, a, i, s) {
                try {
                    var r = t[i](s),
                        l = r.value
                } catch (t) {
                    return void o(t)
                }
                r.done ? e(l) : Promise.resolve(l).then(n, a)
            }
            const f = u().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.1.24",
                template: null,
                initialize(t) {
                    this.mergeOptions(t, ["appId", "appTag"]), d.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), d.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(l().Model)({});
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
                    let o = t.lobbyState;
                    o || -1 === e.indexOf("_") || (o = t.state.split("_")[1]), "PostGame" === o || "Credits" === e || "GameOver" === e || "PostGame" === e || "DayEnd" === e || t.gameResults ? g.E.isInitialized ? g.E.show() : g.E.init(this.getOption("appTag")).then((() => {
                        g.E.show()
                    })) : g.E.hide(), d.app.storage && d.app.storage.isSupported && t.platformId && d.app.storage.setTag(`platform-${t.platformId}`)
                },
                update() {
                    return (t = function*() {
                        return null
                    }, function() {
                        var e = this,
                            o = arguments;
                        return new Promise((function(n, a) {
                            var i = t.apply(e, o);

                            function s(t) {
                                w(i, n, a, s, r, "next", t)
                            }

                            function r(t) {
                                w(i, n, a, s, r, "throw", t)
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
                    this.update().catch(this.caughtError), s()(".gallery-link").click(this.artifactClicked.bind(this)), d.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
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
                    }), b.Q.setAsViewed(0)
                },
                showScreen(t, e) {
                    const o = s()(t);
                    return this.activeScreen && t === this.activeScreen || (this.activeScreen && (s()(this.activeScreen).fadeOut("fast", (() => {})), s()(this.activeScreen).show(), s()(this.activeScreen).addClass("pt-page-off")), o.hide(), o.removeClass("pt-page-off"), o.removeClass("pt-page-moveToLeft"), o.fadeIn("fast", (() => {
                        e && e()
                    })), this.activeScreen = t, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = a().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
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
                    const t = s()("#player").outerHeight(!0) || 0,
                        e = g.E.isVisible ? s()("#slide-in-banner").outerHeight(!0) : 0,
                        o = s()(window).width(),
                        n = s()(window).height() - t;
                    s()(`.${this.getOption("appTag")}-page`).css("height", n - e), s()(`.${this.getOption("appTag")}-page`).attr("height", n - e), s()(`.${this.getOption("appTag")}-page`).css("top", t), s()(`.${this.getOption("appTag")}-page`).css("width", o), s()(`.${this.getOption("appTag")}-page`).attr("width", o)
                }
            })
        },
        38039: (t, e, o) => {
            "use strict";
            o.d(e, {
                U: () => n
            });
            class n {
                constructor(t) {
                    var e, o;
                    o = void 0, (e = "topNode") in this ? Object.defineProperty(this, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : this[e] = o, this.topNode = t
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
        17411: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                MainView: () => w
            });
            var n = o(19755),
                a = o.n(n),
                i = o(13469),
                s = o.n(i),
                r = o(62353),
                l = o(38039),
                c = o(40543),
                u = o(89446),
                d = o(81127),
                b = o(10972);
            const h = function(t, e, o, n) {
                this.isDrawing = !1, this.isClean = !0, this.isEnabled = !0, this.lines = [], this.canvas = t, this.context = e, this.context.save(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.restore(), this.widthDiff = o, this.heightDiff = n, this.thickness = 6, this.color = "#000000", void 0 !== this.canvas.style.msTouchAction && (this.canvas.style.msTouchAction = "none");
                const a = this,
                    i = function() {
                        let t = window.innerWidth - a.widthDiff,
                            e = window.innerHeight - a.heightDiff;
                        e < 25 && (e = 25, t = e * (window.innerWidth / window.innerHeight));
                        const o = t / e,
                            n = a.canvas.width / a.canvas.height;
                        n < o ? (a.canvas.style.height = `${e}px`, a.canvas.style.width = e * n + "px") : (a.canvas.style.width = `${t}px`, a.canvas.style.height = t * (1 / n) + "px"), window.scrollTo(0, 1)
                    };
                window.onresize = i;
                const s = function(t) {
                        if ("touchmove" === t.type) t.preventDefault();
                        else if ("touchend" === t.type) return a.isDrawing && t.preventDefault(), void a[t.type]();
                        const e = a.canvas.getBoundingClientRect(),
                            o = {
                                x: t.targetTouches[0].pageX - e.left,
                                y: t.targetTouches[0].pageY - e.top
                            };
                        o.x *= a.canvas.width / parseInt(a.canvas.style.width, 10), o.y *= a.canvas.height / parseInt(a.canvas.style.height, 10), a[t.type](o)
                    },
                    r = function(t) {
                        if ("mousemove" === t.type) t.preventDefault();
                        else if ("mouseup" === t.type) return void a[t.type]();
                        const e = a.canvas.getBoundingClientRect(),
                            o = {
                                x: t.clientX - e.left,
                                y: t.clientY - e.top
                            };
                        o.x *= a.canvas.width / parseInt(a.canvas.style.width, 10), o.y *= a.canvas.height / parseInt(a.canvas.style.height, 10), a[t.type](o)
                    };
                this.canvas.addEventListener("touchstart", s, !1), this.canvas.addEventListener("touchmove", s, !1), document.addEventListener("touchend", s, !1), this.canvas.addEventListener("mousedown", r, !1), this.canvas.addEventListener("mousemove", r, !1), document.addEventListener("mouseup", r, !1);
                const l = function(t, e, o) {
                        t.strokeStyle = a.color, t.lineCap = "round", t.lineJoin = "round", t.miterLimit = a.thickness, t.lineWidth = a.thickness, t.beginPath(), t.arc(e, o, .01, 0, 2 * Math.PI, !0), t.stroke(), t.moveTo(e, o)
                    },
                    c = function(t, e, o) {
                        t.lineTo(e, o), t.stroke()
                    };
                this.getLines = function() {
                    return this.lines
                }, this.getBase64Image = function() {
                    const t = document.createElement("canvas");
                    t.width = a.canvas.width, t.height = a.canvas.height;
                    const e = t.getContext("2d");
                    a.context.strokeStyle = a.color, a.context.lineCap = "round", a.context.lineJoin = "round", a.context.lineWidth = 6;
                    for (let t = 0; t < a.lines.length; t++) {
                        const o = a.lines[t];
                        for (let t = 0; t < o.points.length; t++) {
                            const n = o.points[t];
                            0 === t ? l(e, n.x, n.y) : c(e, n.x, n.y)
                        }
                    }
                    let o = t.toDataURL("image/png");
                    return o = o.replace("data:image/png;base64,", ""), o
                }, this.start = function(t) {
                    a.isEnabled && (l(a.context, t.x, t.y), a.isDrawing = !0, a.isClean = !1, a.lines.push({
                        thickness: a.thickness,
                        color: a.color,
                        points: [t]
                    }))
                }, this.move = function(t) {
                    if (a.isDrawing) {
                        const e = {
                                x: parseInt(t.x, 10),
                                y: parseInt(t.y, 10)
                            },
                            o = a.lines[a.lines.length - 1].points;
                        if (o.length > 0) {
                            const t = o[o.length - 1];
                            if (t.x === e.x && t.y === e.y) return
                        }
                        o.push(e), c(a.context, t.x, t.y)
                    }
                }, this.end = function() {
                    a.isDrawing && (a.isDrawing = !1)
                }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, i()
            };

            function p(t, e, o, n, a, i, s) {
                try {
                    var r = t[i](s),
                        l = r.value
                } catch (t) {
                    return void o(t)
                }
                r.done ? e(l) : Promise.resolve(l).then(n, a)
            }

            function g(t) {
                return function() {
                    var e = this,
                        o = arguments;
                    return new Promise((function(n, a) {
                        var i = t.apply(e, o);

                        function s(t) {
                            p(i, n, a, s, r, "next", t)
                        }

                        function r(t) {
                            p(i, n, a, s, r, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            const w = r.I.extend({
                template: s().template('<div id="page-drawful" class="page drawful"> <div id="player"> <span class="drawful-text"><%=username%></span> </div> <div id="drawful-preload" class="drawful-preload"></div> <div id="game" class="game pt-pageholder"> <div class="pt-page-off state-lobby drawful2-page"> <div class="container"> <br/> <div id="lobby-main-menu"> <span id="drawful-lobby-text" class="drawful-text drawful-text-box"></span><br/> <form class="pure-form"> <button type="button" id="drawful-startgame" class="lobby-button button-drawful button-xlarge pure-button pure-input-1">everybody\'s in</button> <button type="button" id="drawful-stopcountdown" class="lobby-button button-drawful button-xlarge pure-button pure-input-1">cancel</button> <button type="button" id="drawful-sameplayers" class="lobby-button button-drawful button-xlarge pure-button pure-input-1 drawful-endbuttons">same players</button> <button type="button" id="drawful-newplayers" class="lobby-button button-drawful button-xlarge pure-button pure-input-1 drawful-endbuttons">new players</button> </form> <br> <br> <div class="drawful-start-menu"> <button type="button" id="drawful-lobby-menu-ugc" class="menu-button lobby-button button-drawful button-drawful-black button-xlarge pure-button pure-input-1 drawful-text">custom episodes</button><br> <button type="button" id="drawful-lobby-menu-censor" class="menu-button lobby-button button-drawful button-drawful-black button-xlarge pure-button pure-input-1 drawful-text">censor menu</button><br> </div> <div id="drawful-lobby-postgame" class="drawful-images"> <a target="_blank" class="gallery-link" href=""><div class="galleryImage"></div></a> </div> </div> <div id="lobby-ugc"> <div id="lobby-ugc-error"></div> <button type="button" class="drawful-lobby-menu-back button-drawful button-drawful-black button-xlarge pure-button pure-input-1">back</button><br> <div id="lobby-ugc-enter" class="lobby-ugc-option"> <form class=""> <div class="row"> <div class="col-xs-12"> <p id="lobby-ugc-help">to load a custom episode, go to "make your own" or enter a 7-letter episode id</p> <p class="drawful-text-box">load an episode by id:</p> </div> <div class="col-xs-12"> <div class="input-group input-group-lg drawful-box-border"> <input id="lobby-ugc-input" type="text" class="capitalized jbg-input form-control" placeholder="???-????"> <span class="input-group-btn"> <button type="submit" id="lobby-ugc-submit" class="btn">submit</button> </span> </div> </div> </div> <small class="help text-danger">warning : user generated content is not rated.</small> </form> <div class="drawful-ugc-previous"> <p>or select an episode:</p> <table id="lobby-ugc-history" class="drawful-list"></table> </div> </div> <div id="lobby-ugc-choices" class="lobby-ugc-option"> <div class="drawful-text-box" id="lobby-ugc-choices-content-id"></div> <button type="button" id="lobby-ugc-clear" class="button-drawful button-drawful-black button-xlarge pure-button">unload</button><br> <button type="button" id="lobby-ugc-report" class="button-drawful button-drawful-black button-xlarge pure-button">report</button> <button type="button" id="lobby-ugc-view-author" class="button-drawful button-xlarge pure-button">view author</button> </div> </div> <div id="lobby-censor"> <button type="button" class="drawful-lobby-menu-back button-drawful button-drawful-black button-xlarge pure-button pure-input-1">back</button><br> <p style="display:none" class="drawful-player-censor-dialog drawful-confirm-dialog"> <span class="drawful-text drawful-text-box text-danger">This will remove this player\'s name, avatar, entries and drawings. Are you sure?</span> <button class="drawful-player-censor-confirm button-drawful button-drawful-black">Yes</button> <button class="drawful-player-censor-cancel button-drawful">No</button> </p> <table id="lobby-censor-players" class="drawful-list"> </table> <div class="drawful-text">hit <span class="censor-button-image censor-button-black"></span> to censor player for rest of the game, removing their answers, name and avatar (it\'s kind of intense)</div> </div> </div> </div> <div class="pt-page-off state-nothing drawful2-page"> <div id="drawful-nothing-skip-round-container"> <button type="button" class="drawful-skip-round-button button-drawful button-xlarge pure-button pure-input-1">skip!</button> </div> <div class="logo-image" style=""></div> </div> <div class="pt-page-off state-round drawful2-page"> <div class="container"> <div class="round-main"><br/><br/><span class="drawful-text round-text"></span><br/></div> </div> </div> <div class="pt-page-off state-drawing-sent drawful2-page"> <div class="container"> <br/><span id="drawful-drawing-received" class="drawful-text"></span><br/> <span class="drawful-text">thanks for your drawing</span><br/> </div> </div> <div class="pt-page-off state-drawing-done drawful2-page"> <div class="container"> <br/><span class="drawful-text">drawing time is over!</span><br/> </div> </div> <div class="pt-page-off state-enterlie drawful2-page"> <div class="container"> <br/><span class="drawful-text author-text"></span><br/> <div id="drawful-submit-alert" class="alert alert-info">Alert message goes here</div> <form class="pure-form" id="drawful-enterlie-field"> <div class=""> <input id="drawful-lie-input" name="drawful-lie" class="lowercase pure-input-1 jbg-input" type="text" maxlength="45" placeholder="enter a title" autocapitalize="off" autocorrect="off" autocomplete="off"> </div> <div class="right"> <button type="submit" id="drawful-submitlie" class="button-drawful button-drawful-black button-xlarge pure-button right">send</button> <div id="drawful-submitlie-loading" class="button-drawful-loading right" style="display:none;width:110px;height:48px;margin-top:10px"></div> </div> </form> <div id="drawful-enterlie-skip-round-container"> <button type="button" class="drawful-skip-round-button button-drawful button-xlarge pure-button pure-input-1">skip!</button> </div> </div> </div> <div class="pt-page-off state-chooselie drawful2-page"> <div class="container"> <p style="display:none" class="drawful-chooselie-censor-dialog drawful-confirm-dialog"> <span class="drawful-text drawful-text-box text-danger">this will remove this player\'s entry and all future entries and future drawings. are you sure?</span> <button class="drawful-chooselie-censor-confirm button-drawful button-drawful-black">Yes</button> <button class="drawful-chooselie-censor-cancel button-drawful">No</button> </p> <br/><span id="chooselie-text" class="drawful-text"></span><br/> <table id="drawful-chooselie" class="drawful-list" style="width:100%"> </table> </div> </div> <div class="pt-page-off state-chooselikes drawful2-page"> <div class="container"> <br/><span id="chooselikes-choice" class="drawful-text"></span><br/> <span id="chooselikes-text" class="drawful-text"></span><br/> <p style="display:none" class="drawful-chooselie-censor-dialog drawful-confirm-dialog"> <span class="drawful-text drawful-text-box text-danger">this will remove this player\'s entry and all future entries and future drawings. are you sure?</span> <button class="drawful-chooselie-censor-confirm button-drawful button-drawful-black">Yes</button> <button class="drawful-chooselie-censor-cancel button-drawful">No</button> </p> <table id="drawful-chooselikes" class="drawful-list drawful-list-no-border" style="width:100%;display:inline-block"> </table> </div> </div> <div class="pt-page-off state-liereceived drawful2-page"> <div class="container"> <br/><span class="drawful-text">title entered!<br/>waiting for other players.</span><br/> </div> </div> <div class="pt-page-off state-lyingdone drawful2-page"> <div class="container"> <br/><span class="drawful-text">done!</span><br/> </div> </div> <div class="pt-page-off state-notchoosing drawful2-page"> <div class="container"> <br/><span class="drawful-text"></span><br/> </div> </div> <div class="pt-page-off state-draw drawful2-page"> <span id="drawful-prompt" class="prompt drawful-text">please draw:</span><br/> <span id="drawful-instructions" class="instructions drawful-text">a picture of yourself!</span><br/> <div class="sketchpad-container"> <canvas class="sketchpad" width="240" height="300" style="background-color:#fff"> Sorry, your browser is not supported. </canvas> </div> <div class="row button-bar"> <div id="drawful-color-buttons" class="col-xs-5 col-xs-offset-1"></div> <div class="col-xs-5"> <form class="pure-form"> <button type="submit" id="drawful-submitdrawing" class="submit-drawing button-drawful button-drawful-black button-large col-xs-12" style="margin-top:0">send</button> <div id="drawful-submitdrawing-loading" style="display:none" class="button-drawful-loading"></div> </form> </div> </div> </div> <div class="pt-page-off state-audience-chose drawful2-page"> <div class="container"> <br/><span class="drawful-text">thank you for your input, audience member!</span><br/> </div> </div> <div class="pt-page-off drawful2-page" id="state-ugc"> <div id="ugc-submit-dialog" style="display:none" class="container"> <div class="drawful-text-box">By sharing content, you agree to our <a href="http://www.jackboxgames.com/terms-of-service/" target="_blank">Terms of service</a></div> <button id="ugc-submit-confirm" class="button-drawful">agree and share</button><br/> <button id="ugc-submit-cancel" class="button-drawful">back to menu</button> </div> <div id="ugc-container" class="container"> <div id="ugc-episode-name"></div> <div id="ugc-new" class="ugc-option"> <button type="button" id="ugc-new-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1">create a new episode</button> </div> <p class="ugc-option drawful-text-box ugc-load">previous episodes:</p> <table id="ugc-load" class="ugc-option drawful-list"> </table> <div id="ugc-text"></div> <div id="ugc-no-actions-text"></div> <div id="ugc-title" class="ugc-option"> <p class="drawful-text-box"> <span class="drawful-text">first things first, enter a name for the episode that will contain all your prompts and hit create.</span> </p> <form class="pure-form"> <div class=""> <input id="ugc-title-input" class="lowercase ugc-input pure-input-1 jbg-input" type="text" placeholder="" autocapitalize="off" autocorrect="off" autocomplete="off"/> </div> <div class="right"> <button type="submit" id="ugc-title-button" name="ugc-title-button" class="ugc-form-button button-drawful button-drawful-black button-xlarge pure-button right">create</button> <button type="button" id="ugc-exit-button" class="ugc-form-button button-drawful button-drawful-black button-xlarge pure-button left">back to episodes</button> </div> </form> </div> <div id="ugc-toggle-visibility" class="ugc-option"> <span class="drawful-text">tap to show/hide prompts</span><br/> <div class="drawful-text-box"> <div id="ugc-toggle-visibility-button-controller" class="ugc-toggle-visibility-button drawful-image-controller ugc-toggle-visibility-button pure-u-1-2" data-target="controller"></div> <div id="ugc-toggle-visibility-button-screen" class="ugc-toggle-visibility-button drawful-image-screen ugc-toggle-visibility-button-screen pure-u-1-2" data-target="screen"></div> </div> </div> <form class="pure-form"> <div class=""> <input id="ugc-add-input" class="lowercase ugc-input pure-input-1 jbg-input ugc-option ugc-add" type="text" placeholder="enter a prompt" autocapitalize="off" autocorrect="off" autocomplete="off"/> </div> <div class="ugc-option ugc-add"> <button type="submit" id="ugc-add-button" name="ugc-add-button" class="ugc-form-button button-drawful button-drawful-black button-xlarge pure-button right">add prompt</button> </div> <div id="ugc-close" class="ugc-option"> <button type="button" id="ugc-close-button" class="ugc-form-button button-drawful button-drawful-black button-xlarge pure-button left">close</button> </div> <div id="ugc-save" class="ugc-option"> <button type="save" id="ugc-save-button" class="ugc-form-button button-drawful button-drawful-black button-xlarge pure-button left">done</button> </div> </form> <table id="ugc-remove" class="ugc-option drawful-list"> </table> <div id="ugc-unlock" class="ugc-option"> <button type="button" id="ugc-unlock-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1">edit</button> </div> <div id="ugc-save" class="ugc-option"> <button type="save" id="ugc-save-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1">save</button> </div> <div id="ugc-submit" class="ugc-option"> <button type="button" id="ugc-submit-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1">publish</button> </div> <div id="ugc-play" class="ugc-option"> <button type="button" id="ugc-play-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1">play</button> </div> <div id="ugc-delete" class="ugc-option"> <button type="button" id="ugc-delete-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1 ugc-remove-content-button">delete</button> <div id="ugc-remove-content-dialog" style="display:none" class="drawful-confirm-dialog"> <span class="drawful-text drawful-text-box text-danger">Are you sure you want to delete this episode?</span> <button id="ugc-remove-content-confirm" class="button-drawful button-drawful-black">Yes</button> <button id="ugc-remove-content-cancel" class="button-drawful">No</button> </div> </div> <div id="ugc-exit" class="ugc-option"> <button type="button" id="ugc-exit-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1">back to episodes</button> </div> </div> </div> <div class="pt-page-off state-audience drawful2-page" id="state-wait"> <p id="audience-welcome" class="drawful-text drawful-text-box">welcome to the audience</p> </div> </div> </div> '),
                currentCanvas: void 0,
                prevRoomState: "",
                audienceMessages: ["welcome to the audience<br />it’s fun!", "welcome to the audience<br />you’ll get to participate in just a moment", "welcome to the audience<br />the fun is coming any second", "welcome to the audience<br />we’ve been waiting for you", "welcome to the audience<br />not quite as fun as owning the game, but more fun than sitting alone doing nothing", "welcome to the audience<br />the more the merrier", "welcome to the audience<br />one of us, one of us", "welcome to the audience<br />please don’t unwrap any hard candy during the show", "welcome to the audience<br />it’s our time down here", "welcome to the audience<br />you like to watch, eh?", "welcome to the audience<br />this is one of those slow moments for the audience but it’ll pick up", "welcome to the audience<br />please don’t organize and form a coup", "welcome to the audience<br />make yourself at home", "welcome to the audience<br />we hope you like judging people", "welcome to the audience<br />take a deep breath, the action will start soon", "welcome to the audience<br />enjoy it", "welcome to the audience<br />of everyone in the audience, you’re our favorite", "welcome to the audience<br />dreams do come true!", "welcome to the audience<br />the second most fun way to play this game!", "welcome to the audience<br />we wrote this extra sentence here just for you", "welcome to the audience<br />please find your seat", "welcome to the audience<br />soooooo... what’s new with you?"],
                authorMessages: ["You drew this.<br />Take a moment to reflect.", "You drew this.<br />Maybe consult a doctor?", "You drew this.<br />This is what you've become.", "You drew this.<br />This is your design.", "You drew this.<br />There's nowhere to go but up!", "You drew this.<br />Relax.", "You drew this.<br />Enjoy this moment.", "You drew this.<br />It's too late to change it.", "You drew this.<br />There's no way to blame someone else.", "You drew this.<br />And your life is forever changed.", "You drew this.<br />Yay?", "You drew this.<br />No comment.", "You drew this.<br />It could be worse.", "You drew this.<br />You're to blame.", "You drew this.<br />So...yeah...", "You drew this.<br />Don't worry, it'll be over soon.", "You drew this.<br />Feel as good about that as you can.", "You drew this.<br />It is art.", "You drew this.<br />Thank you?", "You drew this.<br />High five!", "You drew this.<br />Maybe take a quick nap.", "You drew this.<br />Be cool about it.", "You drew this.<br />This too shall pass.", "You drew this.<br />Deal with it.", "You drew this.<br />Confront the consequences.", "You drew this.<br />It is done.", "You drew this?<br />It's okay. It's going to be okay.", "You drew this.<br />But you still deserve love, probably.", "You drew this.<br />Thank you.", "You drew this.<br />Creation is its own gift.", "You drew this.<br />Ha ha ha ha ha.", "You drew this.<br />And I love you for it.", "You drew this.<br />Weird.", "You drew this.<br />I hope it works out for you.", "You drew this.<br />Have you ever considered that you might be the only person in the universe? And everything else...everyone, every thing, is just in your mind? Have you?", "You drew this.<br />And fun was had by all.", "You drew this.<br />It will not be fully appreciated until after you are dead.", "You drew this.<br />But, you probably know that already.", "You drew this.<br />You.", "You drew this.<br />Only history can judge you.", "You drew this.<br />Enjoy it.", "You drew this.<br />It is good."],
                events: {
                    "click .drawful-lobby-menu-back": "lobbyMenuBack",
                    "click #drawful-lobby-menu-ugc": "lobbyMenuUgc",
                    "click #drawful-lobby-menu-censor": "lobbyMenuCensor",
                    "click #drawful-startgame": "startGame",
                    "click #drawful-stopcountdown": "stopCountdown",
                    "click #drawful-sameplayers": "newGameSamePlayers",
                    "click #drawful-newplayers": "newGameNewPlayers",
                    "click .drawful-player-censor-button": "censorPlayer",
                    "click .drawful-player-censor-confirm": "censorPlayerConfirm",
                    "click .drawful-player-censor-cancel": "censorPlayerCancel",
                    "click #lobby-ugc-submit": "lobbyUgcSubmit",
                    "click .drawful-history-button": "lobbyUgcHistory",
                    "click #lobby-ugc-clear": "lobbyUgcClear",
                    "click #lobby-ugc-report": "lobbyUgcReport",
                    "click #lobby-ugc-view-author": "lobbyUgcViewAuthor",
                    "click .drawful-change-color": "changeColor",
                    "click #drawful-submitdrawing": "submitDrawing",
                    "click .drawful-skip-round-button": "submitSkipRound",
                    "click #drawful-submitlie": "submitLie",
                    "click .drawful-suggestion-button": "chooseSuggestion",
                    "click .drawful-lie-button": "chooseLie",
                    "click .drawful-censor-button": "censor",
                    "click .drawful-chooselie-censor-confirm": "censorConfirm",
                    "click .drawful-chooselie-censor-cancel": "censorCancel",
                    "click .drawful-like-button": "toggleLike",
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
                    this.lobbyMenu = new l.U({
                        e: a()("#lobby-main-menu"),
                        branches: [{
                            input: "ugc",
                            node: {
                                e: a()("#lobby-ugc")
                            }
                        }, {
                            input: "censor",
                            node: {
                                e: a()("#lobby-censor")
                            }
                        }]
                    }), this.lobbyMenu.reset(), a()(".quiplash2-button").hover((function() {
                        a()(this).toggleClass("quiplash2-button-hover")
                    })), a()("#lobby-ugc-input").mask("aaa-aaaa", {
                        placeholder: "???-????"
                    }), a()("input").bind("input propertychange", this.validateInput.bind(this)), this.update().catch(this.catchError), a()(".button-drawful").hover((function() {
                        a()(this).toggleClass("button-drawful-hover")
                    })), a()("#lobby-ugc-input").mask("aaa-aaaa", {
                        placeholder: "???-????"
                    });
                    const t = a()("#player span").html();
                    a()("#player span").html(t.replace("…", "...")), a()("input").bind("input propertychange", this.validateInput.bind(this)), this.update().catch(this.catchError)
                },
                update() {
                    var t = this;
                    return g((function*() {
                        const e = t.model.get("player") || {},
                            o = t.model.get("room") || {},
                            n = e ? e.state : "",
                            i = o ? o.state : "";
                        let s;
                        if (void 0 !== e.playerColors && e.playerColors.length > 0 && (a()("#player").css("background-color", e.playerColors[0]), a()("#drawful-instructions").css("color", e.playerColors[0]), a()("#chooselikes-choice").css("color", e.playerColors[0])), "UGC" !== i) {
                            if (a()(".ugc-option").hide(), "RoomFull" === n) return c.b.show(Error("The room is full"), {
                                willClose: () => {
                                    window.location.reload(!0)
                                }
                            }), void t.onResize();
                            if ("GameLocked" === n) return c.b.show(Error("Game is in progress. Please wait for a new game to start."), {
                                willClose: () => {
                                    window.location.reload(!0)
                                }
                            }), void t.onResize();
                            if (!1 === e.hasPicture) return t.joiningInterfaceIsUp ? void t.onResize() : (t.startDrawingInterface(e.playerColors, "a picture of yourself!"), t.onResize(), void(t.joiningInterfaceIsUp = !0));
                            if (t.joiningInterfaceIsUp = !1, "Lobby" === i) {
                                if (t.currentCanvas = void 0, t.formattedActiveContentId = o.formattedActiveContentId, t.hideLobbyButtons(), !e.isAllowedToStartGame) return a()("#drawful-lobby-text").html("Sit back and relax!"), t.showScreen(".state-lobby"), void(o.lobbyState && "PostGame" === o.lobbyState && t.showPostgameDrawings(o.artifact));
                                a()(".menu-button").hide(); {
                                    const e = o.lobbyState;
                                    "WaitingForMore" === e ? a()("#drawful-lobby-text").html("waiting for all players to join") : "CanStart" === e ? (a()("#drawful-startgame").html("everybody's in"), a()("#drawful-lobby-text").html("press this button when everybody has joined"), a()("#drawful-startgame").removeClass("button-drawful-red"), a()("#drawful-startgame").show()) : "Countdown" === e ? (a()("#drawful-lobby-text").html("press this button to cancel game start"), a()("#drawful-stopcountdown").show()) : "PostGame" === e && (a()("#drawful-lobby-text").html("what do you want to do?"), a()(".drawful-endbuttons").show(), t.showPostgameDrawings(o.artifact))
                                }
                                if (e.canDoUGC) {
                                    if (a()(".lobby-ugc-option").hide(), o.formattedActiveContentId ? (o.isLocal ? a()("#lobby-ugc-choices-content-id").html("local content loaded") : a()("#lobby-ugc-choices-content-id").html(`published content loaded<br><span class="lobby-episode-id capitalize">${o.formattedActiveContentId}</span>`), a()("#lobby-ugc-choices").show(), !o.isLocal && e.canReport ? a()("#lobby-ugc-report").show() : a()("#lobby-ugc-report").hide(), !o.isLocal && e.canViewAuthor ? a()("#lobby-ugc-view-author").show() : a()("#lobby-ugc-view-author").hide()) : a()("#lobby-ugc-enter").show(), void 0 !== e.history) {
                                        a()("#lobby-ugc-help").hide();
                                        let t = "";
                                        e.history.forEach((e => {
                                            t += `<tr data-id="${e.remoteContentId?e.remoteContentId:e.localContentId}" class="drawful-history-button">`, t += `<td class="drawful-list-fill">${e.metadata.title}`, e.remoteContentId && (t += `<br><span class="lobby-episode-id capitalize">${e.formattedRemoteContentId}</span>`), t += "</td>", t += "</tr>"
                                        })), a()("#lobby-ugc-history").html(t)
                                    } else a()("#lobby-ugc-help").show();
                                    a()("#drawful-lobby-menu-ugc").show()
                                }
                                if (e.canCensor) {
                                    if (void 0 !== e.censorablePlayers) {
                                        let t = "";
                                        e.censorablePlayers.forEach((e => {
                                            t += "<tr>", t += `<td class="drawful-list-white drawful-list-fill">${e.name}</td>`, t += '<td class="drawful-list-black">', t += `<div data-censor="${u.c.htmlEscape(e.id)}" class="drawful-player-censor-button"></div>`, t += "</td>", t += "</tr>"
                                        })), a()("#lobby-censor-players").html(t)
                                    }
                                    a()("#drawful-lobby-menu-censor").show()
                                }
                                e.lastUGCResult && !e.lastUGCResult.success && e.lastUGCResult.error ? a()("#lobby-ugc-error").html(`<span>${e.lastUGCResult.error}</span>`) : a()("#lobby-ugc-error").html(""), t.showScreen(".state-lobby")
                            } else if ("Gameplay_Logo" === i || "Logo" === i) {
                                if (t.showLogo(e.showSkip), "Lobby" === t.prevRoomState) {
                                    const e = "Lobby",
                                        o = "gameStarted",
                                        n = t.formattedActiveContentId ? "drawful2-ugc" : "drawful2";
                                    b.app.analytics.trackEvent({
                                        category: e,
                                        action: o,
                                        label: n
                                    })
                                }
                            } else if ("Gameplay_Round" === i) a()(".round-text").html(`ROUND ${o.round}`), t.showScreen(".state-round");
                            else if ("Gameplay_DrawingTime" === i) "Gameplay_DrawingTime" === n ? e.receivedDrawing ? (a()("#drawful-drawing-received").html(e.prompt), t.showScreen(".state-drawing-sent")) : t.startDrawingInterface(e.playerColors, e.prompt) : t.showLogo(!1);
                            else if ("Gameplay_DrawingDone" === i) t.showScreen(".state-drawing-done"), t.currentCanvas = void 0;
                            else if ("Gameplay_EnterLie" === i)
                                if ("Gameplay_EnterLie" === n) {
                                    if (".state-enterlie" !== !t.activeScreen && (e.canSkipRound ? (t.setSkipButtonState(!1), a()("#drawful-enterlie-skip-round-container").show()) : a()("#drawful-enterlie-skip-round-container").hide(), e.isAuthor ? (a()("#drawful-lie-input").hide(), a()("#drawful-enterlie-field").hide(), a()("#drawful-submit-alert").hide(), a()("#drawful-submitlie").hide(), a()(".state-enterlie .author-text").html(t.authorMessages[Math.floor(Math.random() * t.authorMessages.length)])) : (a()(".state-enterlie .author-text").html(""), a()("#drawful-lie-input").val(""), a()("#drawful-lie-input").show(), a()("#drawful-enterlie-field").show(), a()("#drawful-submitlie").show(), a()("#drawful-submit-alert").hide())), e.showError) {
                                        const t = a()("#drawful-submit-alert");
                                        a()("#drawful-submit-alert").html("you got too close to the real title, or entered something someone else already did!"), t.addClass("alert-info"), t.removeClass("alert-danger"), t.show()
                                    }
                                    t.enableLoadingButton("#drawful-submitlie", !0), t.showScreen(".state-enterlie")
                                } else "Gameplay_LieReceived" === n ? t.showScreen(".state-liereceived") : t.showLogo(!1);
                            else if ("Gameplay_LyingDone" === i) t.showScreen(".state-lyingdone");
                            else if ("Gameplay_ChooseLie" === i) {
                                const n = !!(o.choosingDone || e.chosen || e.isAuthor);
                                if (void 0 !== t.lastLikesMode && t.lastLikesMode === n && ".state-audience-chose" === t.activeScreen) return;
                                if (n) {
                                    e.isAuthor ? a()("#chooselikes-choice").html("") : b.app.client.isRole("player") ? a()("#chooselikes-choice").html(e.chosen ? `you chose: ${e.chosen.isCensored?"************":e.chosen.text}` : "you didn't make a choice") : a()("#chooselikes-choice").html(""), a()("#chooselikes-text").html(b.app.client.isRole("player") ? "award bonus likes" : "award a bonus like");
                                    let n = "";
                                    for (s = 0; s < o.choices.length; s++) {
                                        if (e.entry && o.choices[s].text === e.entry.text) continue;
                                        const t = !!e.likes && e.likes.indexOf(o.choices[s].text) >= 0,
                                            a = t ? "button-drawful-liked" : "button-drawful-like",
                                            i = t ? "box-checked" : "box-unchecked";
                                        o.choices[s].isCensored || (n += "<tr>", n += `<td data-choice="${u.c.htmlEscape(o.choices[s].text)}" class="drawful-like-button ${a}">`, n += '<div class="like-checkbox">', n += `<i class="checkbox ${i}"></i>`, n += "</div>", n += "</td>", n += `<td data-choice="${u.c.htmlEscape(o.choices[s].text)}" class="drawful-list-fill drawful-like-button ${a} text-left">${u.c.safeText(o.choices[s].text)}</td>`, e.canCensor && (n += `<td class=""><div data-censor="${u.c.htmlEscape(o.choices[s].text)}" class="drawful-censor-button censor-button-black"></div></td>`), n += "</tr>")
                                    }
                                    a()("#drawful-chooselikes").html(n), t.showScreen(".state-chooselikes")
                                } else {
                                    a()("#chooselie-text").html("What's the real title?");
                                    let n = "";
                                    for (s = 0; s < o.choices.length; s++) e.entry && o.choices[s].text === e.entry.text || (o.choices[s].isCensored ? n += '<tr><td class="drawful-list-black">************</td></tr>' : (n += "<tr>", n += `<td data-choice="${u.c.htmlEscape(o.choices[s].text)}" class="drawful-list-fill drawful-lie-button drawful-list-button">${u.c.safeText(o.choices[s].text)}</td>`, e.canCensor && (n += `<td class="drawful-list-black"><div data-censor="${u.c.htmlEscape(o.choices[s].text)}" class="drawful-censor-button"></div></td>`), n += "</tr>"));
                                    a()("#drawful-chooselie").html(n), t.showScreen(".state-chooselie")
                                }
                                t.lastLikesMode = n
                            } else b.app.client.isRole("audience") && (a()("#audience-welcome").html(t.audienceMessages[Math.floor(Math.random() * t.audienceMessages.length)]), t.showScreen(".state-audience"));
                            t.prevRoomState = i, t.onResize()
                        } else t.updateUGC(o, e)
                    }))()
                },
                hideLobbyButtons() {
                    a()(".lobby-button").hide()
                },
                showPostgameDrawings(t) {
                    var e = this;
                    return g((function*() {
                        if (t && t.success && t.rootId) {
                            let n = "games.jackbox.tv"; - 1 !== t.rootId.indexOf("test") && (n = "games-test.jackbox.tv");
                            const a = "DrawfulGame";
                            t.categoryId = a;
                            const i = `https://${n}/artifact/${a}/${t.artifactId}/`,
                                s = yield Promise.resolve().then(o.t.bind(o, 8750, 17));
                            e.$el.find(".gallery-link").attr("href", i);
                            const r = `<img src="${s.default}" />`;
                            e.$el.find(".gallery-link").html(r), d.Q.add(t, e.getOption("appTag"))
                        } else a()("#drawful-lobby-postgame").html("")
                    }))()
                },
                startDrawingInterface(t, e) {
                    this.enableLoadingButton("#drawful-submitdrawing", !0), this.showScreen(".state-draw"), a()(".drawful .state-draw .instructions").html(e);
                    let o = '<div class="row">';
                    for (let e = 0; e < t.length; e++) o += `<button data-color="${t[e]}" class="col-xs-1 drawful-change-color button-color button-large pure-button pure-input-1-8 color-${(e+1).toString()}" style="background-color:${t[e]}"></button>`;
                    o += "</div>", a()("#drawful-color-buttons").html(o), a()(".button-color").first().addClass("selected");
                    const n = this.$(".drawful .sketchpad")[0],
                        i = n.getContext("2d"),
                        s = a()("#player").outerHeight(!0) + a()("#drawful-instructions").outerHeight(!0) + a()("#drawful-prompt").outerHeight(!0) + a()("#drawful-submitdrawing").outerHeight(!0) + a()("#drawful-color-buttons").outerHeight(!0) + 10;
                    this.currentCanvas = new h(n, i, 30, s), this.currentCanvas.color = t[0]
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
                startGame(t) {
                    const e = this.model.get("room") || {},
                        o = a()(t.target);
                    return o.hasClass("button-drawful-red") || e.allPlayersHavePortraits ? (b.app.client.send("SendMessageToRoomOwner", {
                        startGame: !0
                    }), o.removeClass("button-drawful-red")) : (o.html("Are you sure?"), o.addClass("button-drawful-red"), t.stopPropagation()), !1
                },
                stopCountdown: () => (b.app.client.send("SendMessageToRoomOwner", {
                    cancelStartGame: !0
                }), !1),
                enableLoadingButton(t, e) {
                    e ? (a()(t).show(), a()(`${t}-loading`).hide()) : (a()(t).hide(), a()(`${t}-loading`).show())
                },
                activateContentId: t => (0 === t.length || b.app.client.send("SendMessageToRoomOwner", {
                    activateContentId: !0,
                    contentId: t
                }), !1),
                lobbyUgcSubmit() {
                    let t = this.sanitize(a()("#lobby-ugc-input").val());
                    return t = t.replace(/[^A-Za-z]/gi, ""), t = t.toUpperCase(), this.activateContentId(t), !1
                },
                lobbyUgcHistory(t) {
                    const e = a()(t.currentTarget).data("id");
                    this.activateContentId(e)
                },
                lobbyUgcClear: () => (b.app.client.send("SendMessageToRoomOwner", {
                    clearContentId: !0
                }), !1),
                lobbyUgcReport() {
                    const t = this.model.get("room").formattedActiveContentId;
                    return window.open(`http://support.jackboxgames.com/?episodeID=${t}`, "_blank"), !1
                },
                lobbyUgcViewAuthor: () => (b.app.client.send("SendMessageToRoomOwner", {
                    viewAuthor: !0
                }), !1),
                changeColor(t) {
                    this.currentCanvas && (this.currentCanvas.color = a()(t.currentTarget).data("color"), a()(".button-color").removeClass("selected"), a()(t.currentTarget).addClass("selected"), a()("#player").css("background-color", this.currentCanvas.color), a()("#drawful-instructions").css("color", this.currentCanvas.color), a()("#chooselikes-choice").css("color", this.currentCanvas.color))
                },
                submitDrawing() {
                    if (this.currentCanvas.isClean) return alert("You have to draw something!"), !1;
                    this.enableLoadingButton("#drawful-submitdrawing", !1);
                    const t = this.joiningInterfaceIsUp ? {
                        setPlayerPicture: !0,
                        pictureLines: this.currentCanvas.getLines()
                    } : {
                        drawingLines: this.currentCanvas.getLines()
                    };
                    return b.app.client.send("SendMessageToRoomOwner", t), !1
                },
                setSkipButtonState(t) {
                    t ? (a()(".drawful-skip-round-button").addClass("button-drawful-red"), a()(".drawful-skip-round-button").html("are you sure?")) : (a()(".drawful-skip-round-button").removeClass("button-drawful-red"), a()(".drawful-skip-round-button").html("skip (this is offensive)"))
                },
                submitSkipRound(t) {
                    a()(t.target).hasClass("button-drawful-red") ? b.app.client.send("SendMessageToRoomOwner", {
                        skipRound: !0
                    }) : (this.setSkipButtonState(!0), t.stopPropagation())
                },
                submitLie() {
                    let t = this.sanitize(a()("#drawful-lie-input").val()).toLowerCase();
                    if (t = t.replace(/\s\s+/g, " ").trim(), 0 === t.length) {
                        const t = a()("#drawful-submit-alert");
                        return a()("#drawful-submit-alert").html("you can't enter nothing!"), t.removeClass("alert-info"), t.addClass("alert-danger"), t.show(), !1
                    }
                    return this.enableLoadingButton("#drawful-submitlie", !1), b.app.client.send("SendMessageToRoomOwner", {
                        lieEntered: t,
                        usedSuggestion: !1
                    }), !1
                },
                chooseLie(t) {
                    const e = a()(t.target).data("choice");
                    return b.app.client.isRole("player") ? b.app.client.send("SendMessageToRoomOwner", {
                        choice: e
                    }) : b.app.client.isRole("audience") && (b.app.client.sessionSend("vote", "Drawful 2 Vote", {
                        type: "vote",
                        vote: e
                    }), this.showScreen(".state-audience-chose")), !1
                },
                censor(t) {
                    if (!b.app.client.isRole("player")) return !1;
                    const e = a()(t.target),
                        o = e.data("censor");
                    return this.cancelConfirm(), a()(".drawful-chooselie-censor-dialog").show(), a()(".drawful-chooselie-censor-confirm").data("censor", o), a()(e).closest("tr").children().addClass("button-drawful-red"), a()(e).closest("button.drawful-like-button").addClass("button-drawful-red"), !1
                },
                censorConfirm(t) {
                    const e = a()(t.target).data("censor");
                    return b.app.client.send("SendMessageToRoomOwner", {
                        censor: e
                    }), this.cancelConfirm(), !1
                },
                censorCancel() {
                    return a()(".drawful-chooselie-censor-confirm").data("censor", ""), this.cancelConfirm(), !1
                },
                toggleLike(t) {
                    const e = a()(t.currentTarget).data("choice");
                    if (b.app.client.isRole("player")) {
                        const o = ((this.model.get("player") || {}).likes || []).includes(e);
                        o || (a()(t.currentTarget).closest("tr").find(".drawful-like-button").removeClass(o ? "button-drawful-liked" : "button-drawful-like"), a()(t.currentTarget).closest("tr").find(".drawful-like-button").addClass(o ? "button-drawful-like" : "button-drawful-liked"), a()(t.currentTarget).closest("tr").find(".like-checkbox").html(`<i class="checkbox ${o?"box-unchecked":"box-checked"}"></i>`), b.app.client.send("SendMessageToRoomOwner", {
                            like: e
                        }))
                    } else b.app.client.isRole("audience") && (b.app.client.sessionSend("vote", "Drawful 2 Vote", {
                        type: "vote",
                        vote: e
                    }), this.showScreen(".state-audience-chose"));
                    return !1
                },
                newGameSamePlayers: () => (b.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_Continue"
                }), !1),
                newGameNewPlayers: () => (b.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_NewGame"
                }), !1),
                censorPlayer(t) {
                    if (!b.app.client.isRole("player")) return;
                    const e = a()(t.target),
                        o = e.data("censor");
                    a()(".drawful-player-censor-confirm").data("censor", o), a()(".drawful-player-censor-dialog").show(), a()(e).closest("tr").children().addClass("button-drawful-red")
                },
                censorPlayerConfirm(t) {
                    const e = a()(t.target).data("censor");
                    return b.app.client.send("SendMessageToRoomOwner", {
                        censorPlayerId: e
                    }), this.cancelConfirm(), !1
                },
                censorPlayerCancel() {
                    return this.cancelConfirm(), !1
                },
                showLogo(t) {
                    t ? (this.setSkipButtonState(!1), a()("#drawful-nothing-skip-round-container").show()) : a()("#drawful-nothing-skip-round-container").hide(), this.showScreen(".state-nothing")
                },
                updateUGC(t, e) {
                    if (a()(".ugc-screen").hide(), a()(".ugc-option").hide(), a()("#ugc-text").hide(), a()("#ugc-no-actions-text").hide(), void 0 === e.validActions || void 0 === e.prompts) return void this.onResize();
                    for (let t = 0; t < e.validActions.length; t++) {
                        const o = e.validActions[t];
                        a()(`#ugc-${o}`).show()
                    }
                    if (e.validActions.indexOf("add") >= 0 && a()(".ugc-add").show(), e.validActions.indexOf("save") >= 0 && a()("#ugc-close").hide(), e.validActions.indexOf("exit") >= 0 && a()("#ugc-close").hide(), e.validActions.indexOf("title") >= 0 && a()("#ugc-close").hide(), e.validActions.indexOf("exit") >= 0 && null != a()("#ugc-remove-content-confirm").data("id") && a()("#ugc-delete").show(), e.validActions.indexOf("load") >= 0 && a()(".ugc-load").show(), 0 === e.validActions.length && t.noActionsText && (a()("#ugc-no-actions-text").html(`<span>${t.noActionsText}</span>`), a()("#ugc-no-actions-text").show()), e.validActions.indexOf("play") < 0 ? a()("#ugc-episode-name").hide() : a()("#ugc-episode-name").show(), t.text && (a()("#ugc-text").html(`<span>${t.text}</span>`), a()("#ugc-text").show()), void 0 !== e.episodes) {
                        let t = "";
                        e.episodes = s().sortBy(e.episodes, (t => !!t.remoteContentId)), e.episodes.forEach((e => {
                            t += "<tr>", t += `<td class="ugc-load-button drawful-list-fill" data-id="${e.localContentId}" >${e.metadata.title}`, e.remoteContentId && (t += `<br><span class="lobby-episode-id capitalize">${e.formattedRemoteContentId}</span>`), t += "</td>", t += "</tr>"
                        })), a()("#ugc-load").html(t)
                    }
                    a()("#ugc-title-input").prop("maxLength", t.maxTitleLength), a()("#ugc-add-input").prop("maxLength", t.maxContentLength);
                    let o = "";
                    for (let t = e.prompts.length - 1; t >= 0; t--) o += "<tr>", o += `<td class="drawful-list-fill">${e.prompts[t].text}</td>`, o += `<td class="drawful-list-black ugc-remove-button" data-text="${u.c.htmlEscape(e.prompts[t].text)}"><div class="ugc-remove-x"></div></td>`, o += "</tr>";
                    a()("#ugc-remove").html(o), this.showScreen("#state-ugc"), this.onResize()
                },
                ugcNew() {
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "new"
                    }), a()("#ugc-remove-content-confirm").data("id", null)
                },
                ugcLoad(t) {
                    const e = a()(t.currentTarget).data("id");
                    a()("#ugc-remove-content-confirm").data("id", e), this.cancelConfirm(), b.app.client.send("SendMessageToRoomOwner", {
                        action: "load",
                        contentId: e
                    });
                    const o = a()(t.currentTarget).data("name");
                    a()("#ugc-episode-name").html(o)
                },
                ugcRemoveContent(t) {
                    const e = a()(t.currentTarget);
                    a()("#ugc-remove-content-dialog").show(), a()(".button-drawful-red").removeClass("drawful-censor-confirm button-drawful-red"), e.addClass("button-drawful-red"), t.stopPropagation()
                },
                ugcRemoveContentConfirm(t) {
                    const e = a()(t.target),
                        o = u.c.htmlUnescape(e.data("id"));
                    return a()("#ugc-delete-dialog").hide(), b.app.client.send("SendMessageToRoomOwner", {
                        action: "close"
                    }), b.app.client.send("SendMessageToRoomOwner", {
                        action: "remove-content",
                        contentId: o
                    }), this.cancelConfirm(), !1
                },
                ugcRemoveContentCancel() {
                    return this.cancelConfirm(), !1
                },
                ugcClose() {
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "close"
                    })
                },
                ugcTitle() {
                    const t = this.sanitize(a()("#ugc-title-input").val()).toLowerCase();
                    return 0 === t.length || (b.app.client.send("SendMessageToRoomOwner", {
                        action: "title",
                        text: t
                    }), a()("#ugc-title-input").val("")), !1
                },
                ugcAdd() {
                    const t = this.sanitize(a()("#ugc-add-input").val()).toLowerCase();
                    return 0 === t.length || (b.app.client.send("SendMessageToRoomOwner", {
                        action: "add",
                        text: t
                    }), a()("#ugc-add-input").val(""), a()("#ugc-add-input").focus()), !1
                },
                ugcKeyUp(t) {
                    13 === t.which && (t.preventDefault(), this.ugcAdd(t))
                },
                ugcRemove(t) {
                    let e = a()(t.target);
                    e.data("text") || (e = e.parent());
                    const o = e.data("text");
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "remove",
                        text: o
                    })
                },
                ugcClear() {
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "clear"
                    })
                },
                ugcToggleVisibility(t) {
                    const e = a()(t.target);
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "toggle-visibility",
                        target: e.data("target")
                    })
                },
                ugcUnlock() {
                    this.cancelConfirm(), b.app.client.send("SendMessageToRoomOwner", {
                        action: "unlock"
                    })
                },
                ugcSave(t) {
                    t.preventDefault(), b.app.client.send("SendMessageToRoomOwner", {
                        action: "save"
                    })
                },
                ugcSubmit() {
                    this.cancelConfirm(), a()("#ugc-submit-dialog").show(), a()("#ugc-container").hide()
                },
                ugcSubmitConfirm() {
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "submit"
                    }), a()("#ugc-submit-dialog").hide(), a()("#ugc-container").show()
                },
                ugcSubmitCancel() {
                    a()("#ugc-submit-dialog").hide(), a()("#ugc-container").show()
                },
                ugcPlay() {
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "play"
                    })
                },
                ugcExit() {
                    b.app.client.send("SendMessageToRoomOwner", {
                        action: "close"
                    }), a()("#ugc-episode-name").html("")
                },
                cancelConfirm() {
                    a()(".button-drawful-red").removeClass("drawful-censor-confirm button-drawful-red"), a()(".drawful-confirm-dialog").hide()
                },
                sanitize: t => (t = t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,=<>]/gi, "").replace(/'/g, "’").trim(), u.c.htmlEscape(t)),
                validateInput(t) {
                    const e = a()(t.target);
                    let o = e.val();
                    const n = e.attr("maxLength");
                    if (n && !(this.sanitize(o).length <= n)) {
                        for (; this.sanitize(o).length > n;) o = o.slice(0, -1);
                        e.val(o)
                    }
                }
            })
        },
        8750: (t, e, o) => {
            "use strict";
            t.exports = o.p + "assets/2923d4531e47173af0bc.jpg"
        }
    }
]);
//# sourceMappingURL=7411.22808d9a8f0d78dabf53.js.map