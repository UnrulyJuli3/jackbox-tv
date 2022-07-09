(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/awshirt"], {
        47214: (t, e, s) => {
            "use strict";
            s.d(e, {
                E: () => m
            });
            var a = s(13469),
                i = s.n(a),
                n = s(19755),
                o = s.n(n),
                r = s(72316),
                l = s.n(r),
                c = s(63574),
                d = s.n(c),
                h = s(10972),
                u = s(2720);

            function p(t, e, s, a, i, n, o) {
                try {
                    var r = t[n](o),
                        l = r.value
                } catch (t) {
                    return void s(t)
                }
                r.done ? e(l) : Promise.resolve(l).then(a, i)
            }

            function g(t) {
                return function() {
                    var e = this,
                        s = arguments;
                    return new Promise((function(a, i) {
                        var n = t.apply(e, s);

                        function o(t) {
                            p(n, a, i, o, r, "next", t)
                        }

                        function r(t) {
                            p(n, a, i, o, r, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }

            function w(t, e, s) {
                return e in t ? Object.defineProperty(t, e, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = s, t
            }
            const b = d().View.extend({
                el: "#banner",
                template: i().template('\n        <div class="banner-image"></div>\n        <div class="banner-text"></div>\n        <div class="banner-cta"></div>\n    '),
                events: {
                    click: "onBannerClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: ["visible", "theme"],
                            onGet(t) {
                                let [e, s] = t, a = s || "no-theme";
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
                    h.app.analytics.trackEvent({
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
                    }), .5), e && h.app.analytics.trackEvent({
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
                    var s = this;
                    return g((function*() {
                        e && "PostGame" === e.lobbyState ? (s.view || (yield s.init(t, e)), s.show()) : s.hide()
                    }))()
                }
                static init(t) {
                    var e = this;
                    return g((function*() {
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
                    return g((function*() {
                        try {
                            const e = yield fetch(u.v.banners.url), s = yield e.json();
                            return !(!s || !s.postGameBanners) && s.postGameBanners[t]
                        } catch (t) {
                            return console.error("Unable to load banner data", t), !1
                        }
                    }))()
                }
            }
            w(m, "view", null), w(m, "isInitialized", !1), w(m, "bannerConfig", null)
        },
        62353: (t, e, s) => {
            "use strict";
            s.d(e, {
                I: () => m
            });
            var a = s(13469),
                i = s.n(a),
                n = s(19755),
                o = s.n(n),
                r = s(72316),
                l = s.n(r),
                c = s(63574),
                d = s.n(c),
                h = s(10972),
                u = s(81127),
                p = s(40543),
                g = s(89446),
                w = s(47214);

            function b(t, e, s, a, i, n, o) {
                try {
                    var r = t[n](o),
                        l = r.value
                } catch (t) {
                    return void s(t)
                }
                r.done ? e(l) : Promise.resolve(l).then(a, i)
            }
            const m = d().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(t) {
                    this.mergeOptions(t, ["appId", "appTag"]), h.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), h.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(l().Model)({});
                    const e = h.app.client.parseEntities();
                    this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), h.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), h.app.client.on("client:connection", this.onConnectionMessageWithContext), h.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), h.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", g.c.safeText(h.app.client.name), {
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
                    let s = t.lobbyState;
                    s || -1 === e.indexOf("_") || (s = t.state.split("_")[1]), "PostGame" === s || "Credits" === e || "GameOver" === e || "PostGame" === e || "DayEnd" === e || t.gameResults ? w.E.isInitialized ? w.E.show() : w.E.init(this.getOption("appTag")).then((() => {
                        w.E.show()
                    })) : w.E.hide(), h.app.storage && h.app.storage.isSupported && t.platformId && h.app.storage.setTag(`platform-${t.platformId}`)
                },
                update() {
                    return (t = function*() {
                        return null
                    }, function() {
                        var e = this,
                            s = arguments;
                        return new Promise((function(a, i) {
                            var n = t.apply(e, s);

                            function o(t) {
                                b(n, a, i, o, r, "next", t)
                            }

                            function r(t) {
                                b(n, a, i, o, r, "throw", t)
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
                    this.update().catch(this.caughtError), o()(".gallery-link").click(this.artifactClicked.bind(this)), h.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(t) {
                    let e = `<div class='icon-${h.app.client.roles.broadcaster.platform}'>${h.app.client.roles.broadcaster.name}</div>`;
                    e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : h.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), p.b.show("custom", {
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
                    this.model.stopListening(), h.app.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), h.app.client.off("client:connection", this.onConnectionMessageWithContext), h.app.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), h.app.client.off("client:disconnected", this.onDisconnectedWithContext)
                },
                artifactClicked() {
                    h.app.analytics.trackEvent({
                        category: "PostGame",
                        action: "galleryClicked",
                        label: this.getOption("appTag")
                    }), u.Q.setAsViewed(0)
                },
                showScreen(t, e) {
                    const s = o()(t);
                    return this.activeScreen && t === this.activeScreen || (this.activeScreen && (o()(this.activeScreen).fadeOut("fast", (() => {})), o()(this.activeScreen).show(), o()(this.activeScreen).addClass("pt-page-off")), s.hide(), s.removeClass("pt-page-off"), s.removeClass("pt-page-moveToLeft"), s.fadeIn("fast", (() => {
                        e && e()
                    })), this.activeScreen = t, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = i().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    p.b.vibrate()
                },
                trackScreenView() {
                    h.app.analytics.trackScreenView(this.getOption("appTag")), h.app.storage && h.app.storage.isSupported && h.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    h.app.storage && h.app.storage.isSupported && (h.app.storage.remove("roomCode"), h.app.storage.remove("reconnect")), p.b.show("error", {
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
                onConnectionMessage(t) {
                    const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
                    if (p.b.show("toast", {
                            text: e
                        }), "connected" === t.status) {
                        const t = h.app.client.parseEntities();
                        this.model.set(t)
                    }
                },
                onResize() {
                    const t = o()("#player").outerHeight(!0) || 0,
                        e = w.E.isVisible ? o()("#slide-in-banner").outerHeight(!0) : 0,
                        s = o()(window).width(),
                        a = o()(window).height() - t;
                    o()(`.${this.getOption("appTag")}-page`).css("height", a - e), o()(`.${this.getOption("appTag")}-page`).attr("height", a - e), o()(`.${this.getOption("appTag")}-page`).css("top", t), o()(`.${this.getOption("appTag")}-page`).css("width", s), o()(`.${this.getOption("appTag")}-page`).attr("width", s)
                }
            })
        },
        38039: (t, e, s) => {
            "use strict";
            s.d(e, {
                U: () => a
            });
            class a {
                constructor(t) {
                    var e, s;
                    s = void 0, (e = "topNode") in this ? Object.defineProperty(this, e, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : this[e] = s, this.topNode = t
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
        79039: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                MainView: () => C
            });
            var a = s(19755),
                i = s.n(a),
                n = s(13469),
                o = s.n(n),
                r = s(20627),
                l = s.n(r),
                c = s(62353),
                d = s(38039),
                h = s(40543),
                u = s(81127),
                p = s(89446),
                g = s(10972),
                w = s(16479),
                b = s.n(w);
            const m = function(t, e, s, a, n, o) {
                    this.isDrawing = !1, this.isClean = !0, this.isEnabled = !0, this.lines = [], this.undoStack = [], this.canvas = t, this.context = e, this.undoStackLimit = 20, this.context.save(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.restore(), this.context.scale(2, 2), this.widthMargin = s, this.heightMargin = a, this.heightDiffArray = n, this.thickness = 6, this.color = "#000000", this.background = o, void 0 !== this.canvas.style.msTouchAction && (this.canvas.style.msTouchAction = "none");
                    const r = this,
                        l = function() {
                            let t = 0;
                            r.heightDiffArray.forEach((e => {
                                i()(e).each((function() {
                                    t += i()(this).outerHeight(!0)
                                }))
                            }));
                            let e = Math.min(600, .9 * (window.innerWidth - r.widthMargin)),
                                s = window.innerHeight - t - r.heightMargin;
                            s < 150 && (s = 150, e = s * (window.innerWidth / window.innerHeight));
                            const a = e / s,
                                n = r.canvas.width / r.canvas.height;
                            n < a ? (r.canvas.style.height = `${s}px`, r.canvas.style.width = s * n + "px") : (r.canvas.style.width = `${e}px`, r.canvas.style.height = e * (1 / n) + "px"), window.scrollTo(0, 0)
                        };
                    window.onresize = l;
                    const c = function(t) {
                            if ("touchmove" === t.type) t.preventDefault();
                            else if ("touchend" === t.type) return r.isDrawing && t.preventDefault(), void r[t.type]();
                            const e = r.canvas.getBoundingClientRect(),
                                s = {
                                    x: t.targetTouches[0].pageX - e.left,
                                    y: t.targetTouches[0].pageY - e.top
                                };
                            s.x *= r.canvas.width / parseInt(r.canvas.style.width, 10), s.y *= r.canvas.height / parseInt(r.canvas.style.height, 10), s.x *= .5, s.y *= .5, r[t.type](s)
                        },
                        d = function(t) {
                            if ("mousemove" === t.type) t.preventDefault();
                            else if ("mouseup" === t.type) return void r[t.type]();
                            const e = r.canvas.getBoundingClientRect(),
                                s = {
                                    x: t.clientX - e.left,
                                    y: t.clientY - e.top
                                };
                            s.x *= r.canvas.width / parseInt(r.canvas.style.width, 10), s.y *= r.canvas.height / parseInt(r.canvas.style.height, 10), s.x *= .5, s.y *= .5, r[t.type](s)
                        };
                    this.canvas.addEventListener("touchstart", c, !1), this.canvas.addEventListener("touchmove", c, !1), document.addEventListener("touchend", c, !1), this.canvas.addEventListener("mousedown", d, !1), this.canvas.addEventListener("mousemove", d, !1), document.addEventListener("mouseup", d, !1);
                    const h = function(t, e, s, a, i) {
                            t.strokeStyle = e, t.lineCap = "round", t.lineJoin = "round", t.lineWidth = s, t.beginPath(), t.arc(a, i, .01, 0, 2 * Math.PI, !0), t.stroke(), t.moveTo(a, i)
                        },
                        u = function(t, e, s) {
                            t.lineTo(e, s), t.stroke()
                        };
                    this.pushUndoSnapshot = function() {
                        for (r.undoStack.push(r.takeSnapshot()); r.undoStack.length > r.undoStackLimit;) r.undoStack.shift()
                    }, this.undoLine = function() {
                        if (r.isDrawing) return;
                        const t = r.undoStack.pop();
                        t && (r.lines.pop(), 0 === r.lines.length && (r.isClean = !0), this.context.clearRect(0, 0, r.canvas.width, r.canvas.height), this.context.putImageData(t, 0, 0))
                    }, this.clearCanvas = function() {
                        r.lines = [], r.undoStack = [], r.context.clearRect(0, 0, r.canvas.width, r.canvas.height), r.isClean = !0
                    }, this.getLines = function() {
                        return this.lines
                    }, this.getWidth = function() {
                        return r.canvas.style.width
                    }, this.makeBase64Image = function(t, e) {
                        t || (t = {
                            lines: r.lines,
                            background: r.background
                        });
                        const s = t.lines,
                            a = e ? "transparent" : t.background,
                            i = r.redrawFromLines(s, a),
                            n = new Image;
                        return n.id = "pic", n.className = "img-responsive center-block", n.src = i.toDataURL(), n
                    }, this.takeSnapshot = function() {
                        return r.context.getImageData(0, 0, r.canvas.width, r.canvas.height)
                    }, this.redrawFromLines = function(t, e) {
                        const s = document.createElement("canvas");
                        s.width = r.canvas.width, s.height = r.canvas.height;
                        const a = s.getContext("2d");
                        a.scale(2, 2), a.strokeStyle = r.color, a.lineCap = "round", a.lineJoin = "round", null !== e && (a.fillStyle = e, a.fillRect(0, 0, r.canvas.width, r.canvas.height), a.fillStyle = r.color);
                        for (let e = 0; e < t.length; e++) {
                            const s = t[e];
                            for (let t = 0; t < s.points.length; t++) {
                                const e = s.points[t];
                                0 === t ? h(a, s.color, s.thickness, e.x, e.y) : u(a, e.x, e.y)
                            }
                        }
                        return s
                    }, this.start = function(t) {
                        r.isEnabled && (r.pushUndoSnapshot(), t.x = Math.min(Math.max(t.x, .5 * r.thickness), 300 - .5 * r.thickness), t.y = Math.min(Math.max(t.y, .5 * r.thickness), 300 - .5 * r.thickness), h(r.context, r.color, r.thickness, t.x, t.y), r.isDrawing = !0, r.isClean = !1, r.lines.push({
                            thickness: r.thickness,
                            color: r.color,
                            points: [t]
                        }))
                    }, this.move = function(t) {
                        if (!r.isDrawing) return;
                        const e = r.lines[r.lines.length - 1].points,
                            s = e[e.length - 1],
                            a = .5 * this.thickness,
                            i = t.x - s.x,
                            n = t.y - s.y,
                            o = Math.sqrt(i ** 2 + n ** 2);
                        if (o > a) {
                            const t = (o - a) / o,
                                l = {
                                    x: i * t,
                                    y: n * t
                                },
                                c = {
                                    x: s.x + l.x,
                                    y: s.y + l.y
                                };
                            c.x = Math.min(Math.max(c.x, .5 * r.thickness), 300 - .5 * r.thickness), c.y = Math.min(Math.max(c.y, .5 * r.thickness), 300 - .5 * r.thickness), e.push(c), u(r.context, c.x, c.y)
                        }
                    }, this.getLastDrawnPoint = function() {
                        return 0 === this.currentLine.points.length ? null : this.currentLine.points[this.currentLine.points.length - 1]
                    }, this.end = function() {
                        if (r.isDrawing) {
                            r.isDrawing = !1;
                            const t = r.lines[r.lines.length - 1],
                                e = t.points;
                            e.length > 0 && (t.points = b()(e, .6))
                        }
                    }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, l(), this.resize = l
                },
                v = function(t, e, s, a, n) {
                    this.element = i()(t), this.widthMargin = e, this.heightMargin = s, this.heightDiffArray = a, this.elementAspectRatio = n;
                    const o = this,
                        r = function() {
                            let t = 0;
                            a.forEach((e => {
                                i()(e).each((function() {
                                    t += i()(this).outerHeight(!0)
                                }))
                            }));
                            const e = 1 * o.elementAspectRatio,
                                s = window.innerWidth - o.widthMargin,
                                n = Math.max(i()(window).innerHeight() - t - o.heightMargin, 250),
                                r = Math.min(s / e, n / 1);
                            o.width = e * r, o.height = 1 * r, o.element.width(`${o.width}px`), o.element.height(`${o.height}px`), window.scrollTo(0, 0), o.onResize()
                        };
                    this.onResize = function() {}, window.onresize = r, r(), this.resize = r
                };
            var f = s(92577);

            function y(t, e, s, a, i, n, o) {
                try {
                    var r = t[n](o),
                        l = r.value
                } catch (t) {
                    return void s(t)
                }
                r.done ? e(l) : Promise.resolve(l).then(a, i)
            }

            function k(t) {
                return function() {
                    var e = this,
                        s = arguments;
                    return new Promise((function(a, i) {
                        var n = t.apply(e, s);

                        function o(t) {
                            y(n, a, i, o, r, "next", t)
                        }

                        function r(t) {
                            y(n, a, i, o, r, "throw", t)
                        }
                        o(void 0)
                    }))
                }
            }
            const C = c.I.extend({
                template: o().template('<div id="page-awshirt" class="page"> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rokkitt:400,700"> <template id="awshirt-vote-button"> <div class="awshirt-button-group"> <button type="button" style="flex-grow:2" data-index="{{ order }}" class="awshirt-vote-button awshirt-button btn btn-lg">{{ slogan }}</button> {{# if (censorable) { }} <button data-censor="{{ order }}" class="awshirt-censor-button awshirt-button btn btn-lg" style="flex-grow:0;flex-basis:35px">X</button> {{# } }} </div> </template> <div id="player" class="pre-sketchpad pre-sketchpad-shirt"> <div class="player-title-bar"> <div class="pull-left" style="display:inline-block"> <div class="awshirt-player-avatar" style="display:none"></div> </div> <h1 id="username"></h1> </div> <div class="awshirt-message-panel"> <div class="awshirt-text"><p id="awshirt-message"></p></div> </div> </div> <div id="awshirt-preload" class="awshirt-preload"></div> <div id="game" class="game pt-pageholder"> <div id="state-lobby" class="pt-page-off awshirt-page"> <div class="container"> <div id="lobby-main-menu"> <span id="awshirt-lobby-text" class="awshirt-lobby-text"></span> <form class="pure-form"> <button type="button" id="awshirt-startgame" class="awshirt-button button-xlarge pure-button pure-input-1">FIGHT</button> <button type="button" id="awshirt-stopcountdown" class="awshirt-button button-xlarge pure-button pure-input-1">CANCEL</button> <button type="button" id="awshirt-sameplayers" class="awshirt-button button-xlarge pure-button pure-input-1 awshirt-endbuttons">SAME PLAYERS</button> <button type="button" id="awshirt-newplayers" class="awshirt-button button-xlarge pure-button pure-input-1 awshirt-endbuttons">NEW PLAYERS</button> </form> <form class="pure-form"> <button type="button" id="awshirt-lobby-menu-censor" class="menu-button lobby-button awshirt-button button-xlarge pure-button pure-input-1">Censor Menu</button> </form> <div class="awshirt-avatars"> <button data-avatar="catfish" class="awshirt-avatar catfish"></button> <button data-avatar="cat" class="awshirt-avatar cat"></button> <button data-avatar="kappa" class="awshirt-avatar kappa"></button> <button data-avatar="redDemon" class="awshirt-avatar redDemon"></button> <button data-avatar="hair" class="awshirt-avatar hair"></button> <button data-avatar="fire" class="awshirt-avatar fire"></button> <button data-avatar="crow" class="awshirt-avatar crow"></button> <button data-avatar="blueDemon" class="awshirt-avatar blueDemon"></button> <button data-avatar="fox" class="awshirt-avatar fox"></button> <button data-avatar="bun" class="awshirt-avatar bun"></button> <button data-avatar="raccoon" class="awshirt-avatar raccoon"></button> <button data-avatar="dog" class="awshirt-avatar dog"></button> <button data-avatar="snake" class="awshirt-avatar snake"></button> <button data-avatar="monkey" class="awshirt-avatar monkey"></button> <button data-avatar="umbrella" class="awshirt-avatar umbrella"></button> <button data-avatar="baku" class="awshirt-avatar baku"></button> </div> <form> <div id="awshirt-taunt-input-group" class="form-group"> <label for="awshirt-taunt-text" class="awshirt-lobby-text">Victory Quote</label> <div class="awshirt-button-group awshirt-taunt-group"> <input id="awshirt-taunt-text" type="text" class="awshirt-input-text" placeholder="VICTORY QUOTE" autocapitalize="off" autocorrect="off" autocomplete="off" maxLength="70"> <button id="awshirt-taunt-submit" class="awshirt-button-submit btn" type="submit" disabled="disabled">SET</button> </div> </div> </form> <form class="pure-form"> <div id="awshirt-lobby-postgame" class=""> <a target="_blank" class="gallery-link" href=""><div class="galleryImage"></div></a> </div> </form> </div> <div id="lobby-censor"> <div class="pure-u-1"></div> <form class="pure-form"> <div class="pure-u-1"> <button type="button" class="awshirt-lobby-menu-back awshirt-button button-xlarge pure-button pure-input-1" style="margin-left:0;margin-right:0">back</button> </div> <div class="pure-u-1"></div> <div id="lobby-censor-players" class="pure-u-1"></div> <div class="awshirt-text awshirt-text-alt">Hit X to CENSOR player for rest of the game, hiding their name.</div> </form> </div> </div> </div> <div id="state-logo" class="pt-page-off awshirt-page awshirt-player-avatar-large"> </div> <div id="state-audience" class="pt-page-off awshirt-page"> <p class="awshirt-text-audience"> <span id="awshirt-audience" class="awshirt-text-audience awshirt-text audience"></span> </p> <div class="logo-image"></div> </div> <div id="state-draw" class="pt-page-off awshirt-page"> <div class="awshirt-solid-bg"> <div class=""> <div class="canvas-container"> <ul class="nav awshirt-nav-colors pre-sketchpad"> <li class="pull-left awshirt-button-pad"> <button class="awshirt-thickness awshirt-button" data-thickness="10"> <div class="thickness-circle"></div> </button> </li> <li class=""> <ul id="awshirt-color-buttons" class="nav pull-right"> </ul> </li> </ul> <canvas class="awshirt-sketchpad" width="600" height="600" style="background-color:#fff"> Sorry, your browser is not supported. </canvas> <ul class="awshirt-drawing-buttons nav nav-tabs awshirt-nav-backgrounds"> <li class="pull-left"> <ul class="nav awshirt-background-picker"></ul> </li> </ul> <ul class="awshirt-drawing-buttons nav nav-tabs awshirt-nav-backgrounds"> <li class="pull-right"> <div class="awshirt-button-pad"> <button type="submit" id="awshirt-submitdrawing" class="submit-drawing awshirt-button awshirt-button-submit"><i class="fas fa-check" aria-hidden="true"></i></button> <div id="awshirt-submitdrawing-loading" style="display:none" class="awshirt-button-loading"> </div> </div></li> <li class="pull-right"> <div class="awshirt-button-pad"> <button class="awshirt-undo awshirt-button"> <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20pt" height="21pt" viewBox="0 0 46.000000 36.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,36.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M60 295 l-65 -65 68 -68 67 -67 0 48 0 47 125 0 125 0 0 -55 0 -55\n                                            -155 0 -155 0 0 -40 0 -40 195 0 195 0 0 140 0 140 -164 0 -165 0 -3 40 -3 41\n                                            -65 -66z"/> </g> </svg> </button> </div> </li> </ul> </div> </div> </div> <div class="col-xs-12 awshirt-button-bar post-sketchpad"> <button type="button" id="awshirt-drawing-audience-censor" class="awshirt-audience-censor awshirt-button capitalize btn btn-block">CENSOR AUDIENCE</button> <button id="awshirt-suggestdraw" class="awshirt-button-suggestion awshirt-suggestion awshirt-button btn btn-block"> <span id="awshirt-instructions" class="awshirt-text-instruction awshirt-text drawing-instructions">SUGGESTION</span> </button> <p class="awshirt-text-instruction"> <span id="awshirt-instructions" class="awshirt-text-instruction awshirt-text instructions">a picture of yourself!</span> </p> </div> </div> <div id="state-drawing-done" class="pt-page-off awshirt-page awshirt-player-avatar-large"> </div> <div id="state-input" class="pt-page-off awshirt-page"> <form> <fieldset> <div class="container"> <div class="row"> <div class="awshirt-task"></div> <p class="awshirt-text-instruction"> <span class="awshirt-text-instruction awshirt-text instructions">a picture of yourself!</span> </p> <label for="awshirt-title-input" id="awshirt-input-task"></label> <input id="awshirt-title-input" value="" type="text" class="form-control input-lg awshirt-input-text" autocapitalize="off" autocorrect="off" autocomplete="off" maxlength="70"/> <div class="col-xs-12"> <ul class="nav nav-tabs"> <li class="pull-right"> <div class="awshirt-button-pad"> <button type="submit" id="awshirt-submittitle" class="awshirt-button awshirt-button-submit" disabled="disabled"><i class="fas fa-check" aria-hidden="true"></i></button> <div id="awshirt-submittitle-loading" style="display:none" class="awshirt-button-loading"> </div> </div></li> <li class="pull-right"> <div class="awshirt-button-pad"> <button id="awshirt-suggesttitle" class="awshirt-suggestion awshirt-button button-input"> SUGGESTION </button> </div> </li> </ul> </div> </div> </div> <div class="col-xs-12"> <button type="button" id="awshirt-input-audience-censor" class="awshirt-audience-censor awshirt-button capitalize btn btn-block">CENSOR AUDIENCE</button> </div> </fieldset> </form> </div> <div id="state-prompts-done" class="pt-page-off awshirt-page awshirt-player-avatar-large"> </div> <div id="state-shirt" class="pt-page-off awshirt-page"> <table style="height:100%;width:100%"> <tr style="height:100%"> <td style="vertical-align:top"> <div class="awshirt-solid-bg"> <div class="canvas-container"> <div class="pre-sketchpad-shirt awshirt-text">CHOOSE A DRAWING</div> <div id="awshirt-shirttime-canvas" class="awshirt-canvas-container-box"> <div class="glideShirts"> <div id="awshirt-image-bullets" class="glide__bullets" data-glide-el="controls[nav]"> <button class="glide__bullet" data-glide-dir="=0"></button> <button class="glide__bullet" data-glide-dir="=1"></button> <button class="glide__bullet" data-glide-dir="=2"></button> </div> <div class="awshirt-track glide__track" data-glide-el="track"> <ul id="awshirt-image-slides" class="glide__slides"> <li class="glide__slide">0</li> <li class="glide__slide">1</li> <li class="glide__slide">2</li> </ul> </div> <div class="awshirt-slider-controls" data-glide-el="controls"> <button class="awshirt-slider-left" data-glide-dir="<"></button> <button class="awshirt-slider-right" data-glide-dir=">"></button> </div> </div> <div class="glideSlogans"> <div class="awshirt-track glide__track" data-glide-el="track"> <ul id="awshirt-slogan-slides" class="glide__slides"> <li class="glide__slide">SLOGAN0</li> <li class="glide__slide">SLOGAN1</li> <li class="glide__slide">SLOGAN2</li> </ul> </div> <div id="awshirt-slogan-bullets" class="glide__bullets" data-glide-el="controls[nav]"> <button class="glide__bullet" data-glide-dir="=0"></button> <button class="glide__bullet" data-glide-dir="=1"></button> <button class="glide__bullet" data-glide-dir="=2"></button> </div> <div class="awshirt-slider-controls" data-glide-el="controls"> <button class="awshirt-slider-left" data-glide-dir="<"></button> <button class="awshirt-slider-right" data-glide-dir=">"></button> </div> </div> </div> <div class="pre-sketchpad-shirt awshirt-text">CHOOSE A SLOGAN</div> <div class="pre-sketchpad-shirt"> <button type="submit-shirt" id="awshirt-submit-shirt" class="submit-drawing awshirt-button awshirt-button-submit"><i class="fas fa-check" aria-hidden="true"></i></button> <div id="awshirt-submitshirt-loading" style="display:none" class="awshirt-button-loading"> </div> </div> </div> </div></td> </tr> <tr> <td> </td> </tr> </table> </div> <div id="state-shirts-done" class="pt-page-off awshirt-page container awshirt-player-avatar-large"> </div> <div id="state-vote" class="pt-page-off awshirt-page container"> <p class="awshirt-text-instruction">Pick your favorite!</p> <div id="vote-buttons" class="pure-form awshirt-vote-buttons awshirt-text"></div> </div> <div id="state-voting-done" class="pt-page-off awshirt-page container awshirt-player-avatar-large"> </div> <div id="state-audience-suggestions" class="pt-page-off awshirt-page"> <form class="pure-form pure-form-stacked"> <fieldset> <label id="awshirt-audience-suggestion-instruction" for="audience-suggestion"></label> <input id="awshirt-audience-suggestion" class="pure-input-1 capitalize awshirt-answer-input" type="text" placeholder="ENTER A SUGGESTION" maxlength="45" autocapitalize="off" autocorrect="off" autocomplete="off"> <button id="awshirt-audience-suggestion-submit" type="submit" class="pure-button pure-button-primary">Send</button> </fieldset> </form> </div> <div id="state-round" class="pt-page-off awshirt-page"> <div class="round-image-container" style="width:100%"> <img id="round-image" class="pure-img" style="margin-left:auto;margin-right:auto"> </div> </div> <div id="state-answer-question-audience" class="pt-page-off awshirt-page"> <br/><div class="state-answer-question-audience-main"><p class="state-answer-question-audience-text"/></div> </div> <div id="state-answer-question" class="pt-page-off awshirt-page"> <div class="container"> <br/><span id="question-text"></span><br/> <span id="awshirt-submit-alert" class="alert alert-info">Alert message goes here</span> <form class="pure-form" id="awshirt-answer-field"> <div class="pure-u-1"> <input id="awshirt-answer-input" name="awshirt-answer" class="pure-input-1 capitalize awshirt-answer-input" type="text" maxlength="45" placeholder="ANSWER HERE" autocapitalize="off" autocorrect="off" autocomplete="off"> </div> <button type="submit" id="awshirt-submit-answer" class="awshirt-button button-large pure-button capitalize right"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;Send</button> <button type="submit" id="awshirt-suggestion" class="awshirt-button button-large pure-button capitalize right">Suggestion</button> <div id="awshirt-submit-answer-loading" style="display:none" class="awshirt-button-loading"></div> </form> <div id="awshirt-suggestions" class="pure-g"></div> </div> </div> <div id="state-done-answering" class="pt-page-off awshirt-page"> <br/><span>Thanks for your answers!</span><br/> </div> </div> </div> '),
                testBlob: null,
                prevRoomState: "",
                prevPlayerState: "",
                doneAnswering: !1,
                lobbyMenu: null,
                colors: ["#ffffff", "#634a2c", "#bc4df8", "#0046ae", "#44d582", "#f8e655", "#ffa500", "#f32938", "#000000"],
                backgroundColors: ["#2f5f9d", "#d02c41", "#2a3a2a", "#0d162d", "#51346c", "#43342e", "#080808", "#505253"],
                stories: {
                    cat: {
                        intro: "My mother is very ill. I must win the tournament to pay for her surgery.",
                        taunt: "I knew I could do it!"
                    },
                    raccoon: {
                        intro: "I must win the tournament or the evil banker will repossess the orphanage!",
                        taunt: "I put all of my heart into winning!"
                    },
                    kappa: {
                        intro: "If I win the tournament, I will get my own reality show!",
                        taunt: "Now I will be famous!"
                    },
                    dog: {
                        intro: "WOOF! WOOF WOOF!",
                        taunt: "BARK! WOOF! BARK BARK!"
                    },
                    umbrella: {
                        intro: "My dream is to open a sandal shop. I would also like to win this tournament!",
                        taunt: "What an unexpected surprise!"
                    },
                    blueDemon: {
                        intro: "My shirt will put my twin’s efforts to shame!",
                        taunt: "Sorry, but my skills are superior!"
                    },
                    redDemon: {
                        intro: "I don’t care about winning, as long as I beat my twin!",
                        taunt: "I was born to be the best!"
                    },
                    catfish: {
                        intro: "I’m competing to raise Fin Rot awareness!",
                        taunt: "I win! Please donate to cure Fin Rot today!"
                    },
                    hair: {
                        intro: "I HUNGER FOR VICTORY!",
                        taunt: "MY HUNGER HAS BEEN SATISFIED…FOR NOW…"
                    },
                    bun: {
                        intro: "I’ve never made t-shirts before, but I’m usually pretty lucky.",
                        taunt: "I never lose!"
                    },
                    fox: {
                        intro: "After I win the tournament, I can take a year off and finish my sitcom pilot!",
                        taunt: "Hollywood, here I come!"
                    },
                    fire: {
                        intro: "I’m just happy to get out of the house!",
                        taunt: "We’re having so much fun, guys!"
                    },
                    crow: {
                        intro: "I did not mean to enter this tournament! It was a clerical error!",
                        taunt: "What is happening? Did I win?"
                    },
                    monkey: {
                        intro: "If I don’t win the tournament, I guess I’ll go paint houses for my uncle.",
                        taunt: "I deserve this!"
                    },
                    baku: {
                        intro: "Winning the tournament is my life-long dream!",
                        taunt: "All my dreams are coming true!"
                    },
                    snake: {
                        intro: "I do not have arms, but my love of t-shirts is strong. I will win the tournament!",
                        taunt: "I am honored to accept this victory."
                    }
                },
                events: {
                    "click #awshirt-startgame": "startGame",
                    "click #awshirt-stopcountdown": "stopCountdown",
                    "click #awshirt-sameplayers": "newGameSamePlayers",
                    "click #awshirt-newplayers": "newGameNewPlayers",
                    "click .awshirt-avatar": "setPlayerAvatar",
                    "click #awshirt-taunt-submit": "setPlayerTaunt",
                    "click .awshirt-change-color": "colorButtonClicked",
                    "click .awshirt-background-color": "backgroundButtonClicked",
                    "click .awshirt-thickness": "thicknessButtonClicked",
                    "click .awshirt-undo": "undoButtonClicked",
                    "click #awshirt-audience-suggestion-submit": "submitSuggestion",
                    "click #awshirt-submitdrawing": "submitDrawing",
                    "click #awshirt-submittitle": "submitTitle",
                    "click .awshirt-suggestion": "getSuggestion",
                    "click #awshirt-submit-shirt": "submitShirt",
                    "click .awshirt-vote-button": "vote",
                    "click .awshirt-lobby-menu-back": "lobbyMenuBack",
                    "click #awshirt-lobby-menu-censor": "lobbyMenuCensor",
                    "click .awshirt-censor-player-button": "censorPlayer",
                    "click .awshirt-censor-button": "censor",
                    "click .awshirt-audience-censor": "censorAudience"
                },
                onAttach() {
                    c.I.prototype.onAttach.apply(this), this.lobbyMenu = new d.U({
                        e: this.$el.find("#lobby-main-menu"),
                        branches: [{
                            input: "censor",
                            node: {
                                e: this.$el.find("#lobby-censor")
                            }
                        }]
                    }), this.lobbyMenu.reset(), i()("input").bind("input propertychange", this.validateInput.bind(this)), this.update().catch(this.caughtError)
                },
                renderTemplate(t, e) {
                    const s = o().templateSettings;
                    o().templateSettings = {
                        evaluate: /\{\{#([\s\S]+?)\}\}/g,
                        interpolate: /\{\{\{(\s*\w+?\s*)\}\}\}/g,
                        escape: /\{\{(\s*\w+?\s*)\}\}(?!\})/g
                    };
                    const a = o().template(t)(e);
                    return o().templateSettings = s, a
                },
                changeColor(t) {
                    this.currentCanvas && (this.currentCanvas.color = t, i()(".button-color").removeClass("active"), i()(`.button-color[data-color="${t}"]`).addClass("active"), this.$el.find("#chooselikes-choice").css("color", this.currentCanvas.color), i()(".thickness-circle").css("background-color", this.currentCanvas.color))
                },
                changeBackground(t) {
                    this.currentCanvas && (this.currentCanvas.background = t, i()(".awshirt-sketchpad").css("background-color", t), i()(".awshirt-thickness").css("background-color", t), i()(".awshirt-background-color").removeClass("active"), i()(`.awshirt-background-color[data-background="${t}"]`).addClass("active"))
                },
                setPlayerAvatar(t) {
                    i()(".awshirt-avatars button").removeClass("selecting");
                    const e = i()(t.currentTarget);
                    if (e.hasClass("selected") || e.hasClass("used")) return !1;
                    e.addClass("selecting");
                    const s = i()(t.currentTarget).data("avatar");
                    return g.app.client.send("SendMessageToRoomOwner", {
                        avatar: s
                    }), !1
                },
                setPlayerTaunt() {
                    const t = this.$el.find("#awshirt-taunt-text"),
                        e = this.$el.find("#awshirt-taunt-submit");
                    if (t.prop("disabled")) t.prop("disabled", !1), e.html("SET"), t.focus(), t.select();
                    else {
                        const s = t.val();
                        if (0 === this.sanitize(s).length) return !1;
                        g.app.client.send("SendMessageToRoomOwner", {
                            taunt: s
                        }), t.prop("disabled", !0), e.blur(), e.html("CHANGE")
                    }
                    return !1
                },
                colorButtonClicked(t) {
                    const e = i()(t.currentTarget).data("color");
                    return this.changeColor(e), !1
                },
                backgroundButtonClicked(t) {
                    const e = i()(t.currentTarget).data("background");
                    return this.changeBackground(e), !1
                },
                setThickness(t) {
                    this.currentCanvas && (this.currentCanvas.thickness = t, i()(".thickness-circle").css("width", 2 * t), i()(".thickness-circle").css("height", 2 * t), i()(".thickness-circle").css("margin", 10 - t), i()(".awshirt-thickness").data("thickness", t))
                },
                thicknessButtonClicked() {
                    const t = i()(".awshirt-thickness").data("thickness"),
                        e = [5, 12, 18],
                        s = (e.indexOf(t) + 1) % e.length;
                    return this.setThickness(e[s]), !1
                },
                undoButtonClicked() {
                    return i()(".awshirt-undo").prop("disabled", !0), this.currentCanvas.undoLine(), i()(".awshirt-undo").prop("disabled", !1), !1
                },
                submitDrawing() {
                    if (this.currentCanvas.isClean) return alert("You have to draw something!"), !1;
                    this.enableLoadingButton("#awshirt-submitdrawing", !1);
                    const t = {
                        pictureLines: this.currentCanvas.getLines(),
                        background: this.currentCanvas.background
                    };
                    return g.app.client.send("SendMessageToRoomOwner", t), this.$el.find("#awshirt-draw-alert").hide(), this.currentCanvas.clearCanvas(), !1
                },
                submitTitle() {
                    const t = this.sanitize(this.$el.find("#awshirt-title-input").val()).toUpperCase(),
                        e = this.$el.find("#awshirt-submit-alert");
                    return 0 === t.length ? (e.html("You can't enter nothing!"), e.removeClass("alert-info"), e.addClass("alert-danger"), e.show(), !1) : (g.app.client.send("SendMessageToRoomOwner", {
                        msg: t,
                        answer: !0
                    }), this.$el.find("#awshirt-title-input").val(""), this.$el.find("#awshirt-title-input").closest("form").find('button[type="submit"]').prop("disabled", !0), this.$el.find("#awshirt-title-input").focus(), e.hide(), !1)
                },
                submitSuggestion() {
                    const t = this.sanitize(this.$el.find("#awshirt-audience-suggestion").val()).toUpperCase(),
                        e = this.$el.find("#awshirt-submit-alert");
                    return 0 === t.length ? (e.html("You can't enter nothing!"), e.removeClass("alert-info"), e.addClass("alert-danger"), e.show(), !1) : (g.app.client.sessionSend("comment", "AwShirt Comments", {
                        type: "comment",
                        comment: t
                    }), this.$el.find("#awshirt-audience-suggestion").val(""), this.$el.find("#awshirt-audience-suggestion").focus(), e.hide(), !1)
                },
                getSuggestion: () => (i()(".awshirt-suggestion").prop("disabled", !0), g.app.client.send("SendMessageToRoomOwner", {
                    suggestion: !0
                }), !1),
                update() {
                    var t = this;
                    return k((function*() {
                        if (!t.model.get("room")) return t.$el.find("#awshirt-audience").html(""), void t.showScreen("#state-audience");
                        const e = t.model.get("player") ? t.model.get("player") : {},
                            a = t.model.get("room") ? t.model.get("room") : {},
                            n = a ? a.state : "";
                        if (e.avatar && (i()(".awshirt-player-avatar").show().attr("class", `awshirt-player-avatar ${e.avatar}`), t.$el.find("#awshirt-message").html(`"${t.stories[e.avatar].intro}"`), t.$el.find("#awshirt-taunt-text").attr("placeholder", t.stories[e.avatar].taunt), "Lobby" !== n)) {
                            const t = yield s(19262)(`./${e.avatar}.png`);
                            i()(".awshirt-player-avatar-large").css("background-image", `url("${t.default}")`)
                        }
                        g.app.client.isRole("audience") ? t.updateAudience() : e && t.updatePlayer(), t.onResize()
                    }))()
                },
                updatePlayer() {
                    var t = this;
                    return k((function*() {
                        i()(".player-title-bar").show(), i()(".awshirt-message-panel").hide();
                        const e = t.model.get("room"),
                            a = t.model.get("player") ? t.model.get("player") : {},
                            n = a ? a.state : "",
                            o = e ? e.state : "";
                        let r = e.lobbyState,
                            c = 0;
                        if (t.currentAnswerQuestionId = -1, "RoomFull" !== n)
                            if ("GameLocked" !== n) {
                                if (o && "Lobby" === o) {
                                    if (!g.app.client.isRole("player")) return void t.showScreen("#state-logo");
                                    if (t.hideLobbyButtons(), i()(".menu-button").hide(), a.avatar ? (i()(".awshirt-avatars button").removeClass("selected").removeClass("used").prop("disabled", !1), void 0 !== e.usedAvatars && e.usedAvatars.forEach((t => {
                                            i()(`.awshirt-avatars button.${t}`).removeClass("selecting").addClass("used")
                                        })), i()(`.awshirt-avatars button.${a.avatar}`).removeClass("used").removeClass("selecting").addClass("selected"), i()(".awshirt-avatars button.used").prop("disabled", !0), "PostGame" !== r && "Countdown" !== r ? (t.$el.find("#awshirt-taunt-input-group").show(), i()(".awshirt-avatars").show()) : (t.$el.find("#awshirt-taunt-input-group").hide(), i()(".awshirt-avatars").hide())) : i()(".awshirt-avatars").hide(), a.canCensor && a.censorablePlayers) {
                                        let e = "";
                                        a.censorablePlayers.forEach((t => {
                                            e += '<div class="pure-u-1">', e += `<div class="awshirt-censorable left"><span>${t.name}</span></div>`, e += `<button type="button" data-censor="${p.c.htmlEscape(t.id)}" class="awshirt-censor-player-button button-large pure-button awshirt-button right">X</button>`, e += "</div>"
                                        })), t.$el.find("#lobby-censor-players").html(e), a.censorablePlayers.length > 0 && t.$el.find("#awshirt-lobby-menu-censor").show()
                                    }
                                    const n = e.artifact;
                                    if (n && n.success && n.rootId) {
                                        let e = "games.jackbox.tv"; - 1 !== n.rootId.indexOf("test") && (e = "games-test.jackbox.tv");
                                        const a = `https://${e}/artifact/TeeKOGame/${n.artifactId}/`,
                                            i = yield Promise.resolve().then(s.t.bind(s, 40750, 17));
                                        t.$el.find(".gallery-link").attr("href", a);
                                        const o = `<img src="${i.default}" />`;
                                        t.$el.find(".gallery-link").html(o), u.Q.add(n, t.getOption("appTag")), t.$el.find("#awshirt-lobby-postgame").show()
                                    } else t.$el.find("#awshirt-lobby-postgame").hide();
                                    if ("PostGame" === r && null === n && !t.reportedMissingArtifact) {
                                        const s = "PostGame",
                                            a = "galleryMissing",
                                            i = e.platformId;
                                        g.app.analytics.trackEvent({
                                            category: s,
                                            action: a,
                                            label: i
                                        }), t.reportedMissingArtifact = !0
                                    }
                                    if (!a.isAllowedToStartGame) return t.$el.find("#awshirt-lobby-text").html("Sit back and relax!"), void t.showScreen("#state-lobby");
                                    e.sendDefaultColor && t.sendDefaultColor(), r || (r = a.state.split("_")[1]), "WaitingForMore" === r ? (t.$el.find("#awshirt-lobby-text").html("Waiting for all players to join"), i()(".awshirt-avatars").show(), t.$el.find("#awshirt-taunt-input-group").show()) : "CanStart" === r ? (t.$el.find("#awshirt-lobby-text").html("Press this button when everybody has joined"), t.$el.find("#awshirt-startgame").show(), i()(".awshirt-avatars").show(), t.$el.find("#awshirt-taunt-input-group").show()) : "Countdown" === r ? (t.$el.find("#awshirt-lobby-text").html("Press this button to cancel game start"), t.$el.find("#awshirt-stopcountdown").show(), i()(".awshirt-avatars").hide(), t.$el.find("#awshirt-taunt-input-group").hide()) : "PostGame" === r && (t.$el.find("#awshirt-lobby-text").html("What do you want to do?"), i()(".awshirt-endbuttons").show(), i()(".awshirt-avatars").hide(), t.$el.find("#awshirt-taunt-input-group").hide()), t.showScreen("#state-lobby")
                                } else if ("Logo" === o) i()(".player-title-bar").hide(), i()(".awshirt-message-panel").show(), t.showScreen("#state-logo");
                                else if (o && "Gameplay" === o.split("_")[0])
                                    if (n && "Gameplay" === n.split("_")[0]) {
                                        let s = n.split("_")[1];
                                        switch ("Gameplay_ShirtTime" === e.event && (s = "ShirtTime"), "ShirtTime" !== s && i()(".awshirt-drawing").remove(), s) {
                                            case "DrawingTime":
                                                i()(".player-title-bar").hide(), i()(".awshirt-audience-censor").hide(), a.suggestion ? (i()(".awshirt-suggestion").show(), i()(".awshirt-suggestion").prop("disabled", !1), i()(".instructions").hide()) : (i()(".instructions").html(a.alert), i()(".instructions").show(), i()(".awshirt-suggestion").hide()), a.canCensor && e.canDoSuggestions && (i()(".awshirt-suggestion").hide(), i()(".awshirt-audience-censor").show()), t.startDrawingInterface(a.playerColors), t.showScreen("#state-draw", (() => {
                                                    t.currentCanvas.resize()
                                                }));
                                                break;
                                            case "DrawingComplete":
                                                i()(".awshirt-audience-censor").hide(), t.$el.find("#awshirt-message").html("Waiting for other players to finish!"), a.canCensor && e.canDoSuggestions && (i()(".awshirt-audience-censor").show(), t.$el.find("#awshirt-message").append('<div class="col-xs-12"><button type="button" id="awshirt-drawing-audience-censor" class="awshirt-audience-censor awshirt-button capitalize btn btn-block">CENSOR AUDIENCE</button></div>')), i()(".awshirt-message-panel").show(), t.showScreen("#state-drawing-done");
                                                break;
                                            case "InputPrompt":
                                                i()(".instructions").html(a.task), a.suggestion ? (i()(".instructions").html(a.task), i()(".awshirt-suggestion").show(), i()(".awshirt-suggestion").prop("disabled", !1), i()(".instructions").show()) : (i()(".instructions").html(a.alert), i()(".awshirt-suggestion").hide(), i()(".instructions").show()), i()(".awshirt-audience-censor").hide(), a.canCensor && e.canDoSuggestions && i()(".awshirt-audience-censor").show(), t.showScreen("#state-input");
                                                break;
                                            case "PromptsDone":
                                                t.$el.find("#awshirt-audience-censor-done").hide(), t.$el.find("#awshirt-message").html("Waiting for other players to finish!"), a.canCensor && e.canDoSuggestions && (t.$el.find("#awshirt-audience-censor-done").show(), t.$el.find("#awshirt-message").append('<div class="col-xs-12"><button type="button" id="awshirt-drawing-audience-censor" class="awshirt-audience-censor awshirt-button capitalize btn btn-block">CENSOR AUDIENCE</button></div>')), i()(".awshirt-message-panel").show(), t.showScreen("#state-prompts-done");
                                                break;
                                            case "ShirtTime": {
                                                if (i()(".player-title-bar").hide(), t.currentCanvas || t.startDrawingInterface(a.playerColors), t.$el.find("#toggle-prompt").data("params", 0), a.drawings && i()(".awshirt-drawing").length !== a.drawings.length) {
                                                    let e = "",
                                                        s = "";
                                                    for (c = 0; c < a.drawings.length; c++) e += `<li class="glide__slide"><img class="awshirt-drawing" data-drawing-index=${c} src="${t.currentCanvas.makeBase64Image(a.drawings[c],!0).src}"></img></li>`, s += `<button class="glide__bullet" data-glide-dir="=${c}"></button>`;
                                                    t.$el.find("#awshirt-image-slides").html(e), t.$el.find("#awshirt-image-bullets").html(s);
                                                    let i = "",
                                                        n = "";
                                                    a.prompts.forEach(((t, e) => {
                                                        i += `<li class="glide__slide">${p.c.safeText(t)}</li>`, n += `<button class="glide__bullet" data-glide-dir="=${e}"></button>`
                                                    })), t.$el.find("#awshirt-slogan-slides").html(i), t.$el.find("#awshirt-slogan-bullets").html(n);
                                                    const o = {
                                                        hoverpause: !0,
                                                        keyboard: !1,
                                                        type: "slider",
                                                        perView: 1.25,
                                                        focusAt: "center",
                                                        gap: 15
                                                    };
                                                    t.glideShirts && t.glideShirts.destroy(), t.glideShirts = new(l())(".glideShirts", o), t.glideShirts.on("run", t.handleShirtUpdate.bind(t)), t.glideSlogans && t.glideSlogans.destroy(), t.glideSlogans = new(l())(".glideSlogans", o), t.handleShirtUpdate()
                                                }
                                                const s = a.drawings && a.drawings.length > 0 ? "#state-shirt" : "#state-logo";
                                                t.showScreen(s, (() => {
                                                    if (!t.imageContainer) {
                                                        const e = [".pre-sketchpad-shirt"];
                                                        t.imageContainer = new v("#awshirt-shirttime-canvas", 16, 80, e, 823 / 589), t.imageContainer.onResize = () => {
                                                            const e = .05 * t.imageContainer.width,
                                                                s = `${Math.floor(15*t.imageContainer.width/288)}px`,
                                                                a = i()(".awshirt-slider-right,.awshirt-slider-left");
                                                            a.width(e), a.height(e), i()(".glideSlogans").css("font-size", s)
                                                        }
                                                    }
                                                    t.onResize(), t.imageContainer.resize(), t.glideShirts && (t.glideShirts.mount(), t.glideSlogans.mount())
                                                })), e.submit ? t.$el.find("#awshirt-submit-shirt").prop("disabled", !1) : t.$el.find("#awshirt-submit-shirt").prop("disabled", !0);
                                                break
                                            }
                                            case "ShirtsDone":
                                                t.$el.find("#awshirt-audience-censor-done").hide(), a.canCensor && e.canDoSuggestions && t.$el.find("#awshirt-audience-censor-done").show(), t.$el.find("#awshirt-message").html("Waiting for other players to finish!"), i()(".awshirt-message-panel").show(), t.showScreen("#state-shirts-done")
                                        }
                                    } else t.showScreen("#state-logo");
                                else if (o && "Vote" === o.split("_")[0] && n && "Vote" === n.split("_")[0]) switch (n.split("_")[1]) {
                                    case "Vote": {
                                        const e = [];
                                        for (c = 0; c < a.order.length; c++) {
                                            const s = {
                                                    order: a.order[c],
                                                    slogan: p.c.htmlUnescape(a.choices[a.order[c]].slogan),
                                                    censorable: !a.isCensored[c] && a.canCensor
                                                },
                                                n = i()(t.renderTemplate(t.$el.find("#awshirt-vote-button").html(), s));
                                            n.find(".awshirt-vote-button").css("background-color", a.choices[a.order[c]].background), e.push(n[0].outerHTML)
                                        }
                                        t.$el.find("#vote-buttons").html(e.join("<span>OR</span>")), a.censorOnly && i()(".awshirt-vote-button").prop("disabled", !0), t.showScreen("#state-vote");
                                        break
                                    }
                                    case "DoneVoting":
                                        t.$el.find("#awshirt-message").html("Waiting for other players to finish!"), i()(".awshirt-message-panel").show(), t.showScreen("#state-voting-done")
                                }
                            } else h.b.show(Error("Game is in progress. Please wait for a new game to start."), {
                                willClose: () => {
                                    window.location.reload(!0)
                                }
                            });
                        else h.b.show(Error("The room is full"), {
                            willClose: () => {
                                window.location.reload(!0)
                            }
                        })
                    }))()
                },
                handleShirtUpdate() {
                    const t = this.model.get("player").drawings[this.glideShirts.index].background.replace("#", "%23");
                    i()(".awshirt-canvas-container-box").css("background-image", f.replace("FILL_COLOR", t))
                },
                updateAudience() {
                    var t = this;
                    return k((function*() {
                        const e = t.model.get("room");
                        let a;
                        switch (e ? e.state : "Logo") {
                            case "Lobby": {
                                const a = e.artifact;
                                if (a && a.success && a.rootId) {
                                    let e = "games.jackbox.tv"; - 1 !== a.rootId.indexOf("test") && (e = "games-test.jackbox.tv");
                                    const i = "TeeKOGame";
                                    a.categoryId = i;
                                    const n = `https://${e}/artifact/${i}/${a.artifactId}/`,
                                        o = yield Promise.resolve().then(s.t.bind(s, 40750, 17));
                                    t.$el.find(".gallery-link").attr("href", n);
                                    const r = `<img src="${o.default}" />`;
                                    t.$el.find(".gallery-link").html(r), u.Q.add(a, t.getOption("appTag"))
                                } else t.$el.find("#awshirt-audience").html("Sit back and relax!");
                                t.showScreen("#state-audience");
                                break
                            }
                            case "Logo":
                                t.$el.find("#awshirt-audience").html(""), t.showScreen("#state-audience");
                                break;
                            case "Gameplay": {
                                const s = e.event,
                                    a = e.instruction;
                                switch (s) {
                                    case "Gameplay_ShirtTime":
                                        t.$el.find("#awshirt-audience").html("Training in progress..."), t.showScreen("#state-audience");
                                        break;
                                    case "Suggestions":
                                        e.canDoSuggestions ? (t.$el.find("#awshirt-audience-suggestion-instruction").html(a), t.showScreen("#state-audience-suggestions")) : (t.$el.find("#awshirt-audience").html("Training in progress..."), t.showScreen("#state-audience"));
                                        break;
                                    default:
                                        t.$el.find("#awshirt-audience").html(""), t.showScreen("#state-audience")
                                }
                                break
                            }
                            case "Vote": {
                                const s = [];
                                for (a = 0; a < e.order.length; a++) {
                                    const n = {
                                            order: e.order[a],
                                            slogan: p.c.htmlUnescape(e.choices[e.order[a]].slogan),
                                            censorable: !1
                                        },
                                        o = i()(t.renderTemplate(t.$el.find("#awshirt-vote-button").html(), n));
                                    o.find(".awshirt-vote-button").css("background-color", e.choices[e.order[a]].background), s.push(o[0].outerHTML)
                                }
                                t.$el.find("#vote-buttons").html(s.join("<span>OR</span>")), t.showScreen("#state-vote");
                                break
                            }
                        }
                    }))()
                },
                hideLobbyButtons() {
                    this.$el.find("#awshirt-startgame").hide(), this.$el.find("#awshirt-stopcountdown").hide(), i()(".awshirt-endbuttons").hide(), i()(".awshirt-avatars").hide(), this.$el.find("#awshirt-taunt-input-group").hide()
                },
                lobbyMenuBack() {
                    this.lobbyMenu.input("back")
                },
                lobbyMenuCensor() {
                    this.lobbyMenu.input("censor")
                },
                startGame: () => (g.app.client.send("SendMessageToRoomOwner", {
                    start: !0
                }), !1),
                stopCountdown: () => (g.app.client.send("SendMessageToRoomOwner", {
                    cancel: !0
                }), !1),
                enableLoadingButton: (t, e) => (e ? (i()(t).show(), i()(`${t}-loading`).hide()) : (i()(t).hide(), i()(`${t}-loading`).show()), !1),
                sendDefaultColor() {
                    g.app.client.send("SendMessageToRoomOwner", {
                        defaultColor: "#626060"
                    })
                },
                startDrawingInterface(t) {
                    if (this.enableLoadingButton("#awshirt-submitdrawing", !0), this.currentCanvas) return;
                    this.enableLoadingButton("#awshirt-submitdrawing", !0);
                    let e = "";
                    t || (t = this.colors);
                    for (let s = 0; s < t.length; s++) e += `<li class="pull-right"><a data-color="${t[s]}" class="awshirt-change-color button-color btn pure-button" style="background-color:${t[s]}"></a></li>`;
                    this.$el.find("#awshirt-color-buttons").html(e);
                    let s = "";
                    const a = this.backgroundColors;
                    for (let t = 0; t < a.length; t++) s += `<li data-background="${a[t]}" style="background-color:${a[t]};" class="awshirt-background-color pull-left"></li>`;
                    i()(".awshirt-background-picker").html(s);
                    const n = this.$el.find(".awshirt-sketchpad")[0],
                        o = n.getContext("2d");
                    this.currentCanvas = new m(n, o, 10, 10, [".pre-sketchpad", ".post-sketchpad", ".awshirt-drawing-buttons"], "#333333"), this.changeColor(t[0]), this.changeBackground(a[0]), this.setThickness(5)
                },
                submitShirt() {
                    const t = {
                        drawing: this.glideShirts.index,
                        prompt: this.glideSlogans.index,
                        shirt: !0
                    };
                    return g.app.client.send("SendMessageToRoomOwner", t), !1
                },
                vote(t) {
                    const e = i()(t.target).data("index");
                    return g.app.client.isRole("player") ? g.app.client.send("SendMessageToRoomOwner", {
                        vote: e
                    }) : g.app.client.isRole("audience") && (this.$el.find("#awshirt-audience").html("Thanks for voting!"), this.showScreen("#state-audience"), g.app.client.sessionSend("vote", "AwShirt Vote", {
                        type: "vote",
                        vote: e
                    })), i()(".awshirt-vote-button").removeClass("selected"), i()(t.target).addClass("selected"), !1
                },
                chooseCategory(t) {
                    const e = i()(t.target).data("num");
                    return g.app.client.send("SendMessageToRoomOwner", {
                        chosenCategory: e
                    }), !1
                },
                newGameSamePlayers: () => (g.app.client.send("SendMessageToRoomOwner", {
                    start: !0,
                    decision: "PostGame_Continue"
                }), !1),
                newGameNewPlayers: () => (g.app.client.send("SendMessageToRoomOwner", {
                    start: !0,
                    decision: "PostGame_NewGame"
                }), !1),
                censorPlayer(t) {
                    if (!g.app.client.isRole("player")) return;
                    const e = i()(t.target);
                    if (e.hasClass("awshirt-button-red")) {
                        const t = p.c.htmlUnescape(e.data("censor"));
                        g.app.client.send("SendMessageToRoomOwner", {
                            censorPlayerId: t
                        })
                    } else i()(".awshirt-button-red").html("X").removeClass("awshirt-button-red"), e.html("?"), e.addClass("awshirt-button-red")
                },
                censor(t) {
                    if (!g.app.client.isRole("player")) return;
                    const e = i()(t.target);
                    if (e.hasClass("awshirt-button-red")) {
                        const t = p.c.htmlUnescape(e.data("censor"));
                        g.app.client.send("SendMessageToRoomOwner", {
                            censor: t
                        })
                    } else i()(".awshirt-button-red").html("X").removeClass("awshirt-button-red"), e.html("?"), e.addClass("awshirt-button-red")
                },
                censorAudience: () => !!g.app.client.isRole("player") && (g.app.client.send("SendMessageToRoomOwner", {
                    censorAudience: !0
                }), !1),
                sanitize(t) {
                    return t = this.sanitizeInput(t).replace(/'/g, "’"), p.c.htmlEscape(t).trim()
                },
                sanitizeInput: t => t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,=<>:;]/gi, ""),
                validateInput(t) {
                    const e = i()(t.target);
                    let s = e.val();
                    const a = s.length,
                        n = e.attr("maxLength");
                    if (s = this.sanitizeInput(s), n)
                        for (; s.length > n;) s = s.slice(0, -1);
                    s.length !== a && e.val(s), s.length > 0 ? i()(t.target).closest("form").find("button[type='submit']").prop("disabled", !1) : i()(t.target).closest("form").find("button[type='submit']").prop("disabled", !0)
                }
            })
        },
        59537: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/9a8c305d69df2fff94e1.png"
        },
        41870: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/51c6c00113db20c5f347.png"
        },
        25314: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/9e5fc24ee1da0d3d8136.png"
        },
        13420: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/69bf18918e825496b492.png"
        },
        36875: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/0b9083807d87e3e17f6a.png"
        },
        55585: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/91f33500c0ef1e45a6cb.png"
        },
        17341: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/44ae08ea7646d0374847.png"
        },
        10413: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/d1e504eb6f2709ea488f.png"
        },
        19214: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/7bda0f5619eb721c3976.png"
        },
        87727: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/86bf8ff6c26c7c5955fe.png"
        },
        13719: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/9d96bbf1abee0622bb05.png"
        },
        18325: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/bd62873b4e6aa774fadd.png"
        },
        56962: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/ac7c60eb2e9254b3bf1a.png"
        },
        94894: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/2b57b293dbf144a79a7d.png"
        },
        22673: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/34e5d8899c6b97bdf0da.png"
        },
        19831: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/26bad293cca88148a095.png"
        },
        19262: (t, e, s) => {
            var a = {
                "./baku.png": 59537,
                "./blueDemon.png": 41870,
                "./bun.png": 25314,
                "./cat.png": 13420,
                "./catfish.png": 36875,
                "./crow.png": 55585,
                "./dog.png": 17341,
                "./fire.png": 10413,
                "./fox.png": 19214,
                "./hair.png": 87727,
                "./kappa.png": 13719,
                "./monkey.png": 18325,
                "./raccoon.png": 56962,
                "./redDemon.png": 94894,
                "./snake.png": 22673,
                "./umbrella.png": 19831
            };

            function i(t) {
                return n(t).then((t => s.t(t, 1)))
            }

            function n(t) {
                return Promise.resolve().then((() => {
                    if (!s.o(a, t)) {
                        var e = new Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return a[t]
                }))
            }
            i.keys = () => Object.keys(a), i.resolve = n, i.id = 19262, t.exports = i
        },
        40750: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/awshirt/fc9deee539acc67b9c3b.png"
        },
        92577: t => {
            "use strict";
            t.exports = "url(\"data:image/svg+xml;utf8,<svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 823.47 588.96'><defs><style>.cls-1{fill:FILL_COLOR;}.cls-1,.cls-2{fill-rule:evenodd;}</style></defs><title>TeeKOControllerRedesign_shirtExport_v2</title><path id='ShirtFill' class='cls-1' d='M769,93c9.1,6.14,28.87,20.89,51,34-16.58,26-29.13,39.48-33.4,44.05s-25.84,71.28-33.16,78.6-14.52,21.26-22.15,21.56S674,247,674,247l5,69.36c3.86,53.57,5.49,91.14,6.91,112.7s.27,50.88.32,87.8c.08,14.94.94,28,.74,40.14.23,13.89-24.72,13.36-42.71,14.27s-90.4-1.21-114.64,0q-118.26,5.88-164.46,9c-30.74,2-143.42-2.19-143.42-2.19L143,573s5.68-213.16-5-313c-4.37,2-15,9.81-26,15-26.61-24.79-59.55-58.15-86.93-100.72A218.18,218.18,0,0,0,6,149l21-18c9.61-7.47,17.21-14,23-18s48-41.43,52-46,29.67-35.78,47-45c7.63-3.94,15.32-7.93,24-10,14.68-3.61,43.81-2.7,40-3h80s59.46,3.84,50,3c18.66-.37,43.18,6.3,74.21,7.48,49,1.87,65.56,1.82,73.79,1.52s76.67-.93,149-3c4.14.77,8.54,1.25,13,3,6.29,2.56,16.2,6.4,25,12,5.23,3.37,20,12,46,29C724,62,739.2,73,769,93Z' transform='translate(-1.3 -1.51)'/><path id='ShirtOutline' class='cls-2' d='M700,41.53q-13.83-8.89-24.6-14.93A98.49,98.49,0,0,0,653.17,17a50.49,50.49,0,0,0-10.35-1.77L642.63,14c-12.75,0-86.64.06-101.66.06q-26.06-.24-42.69-.61c-1.78-.69-2.7-1-2.74-1A36.44,36.44,0,0,0,488,11.08q-9.81-1-17-1-6.33,0-17.05.3-12.74.42-17,.49-1.89.06-3.6.06-17.89-.67-42.81-1.71-71.37-2.79-83.62-5l-2.56-.37a5.37,5.37,0,0,0-3.53-1.46c-12.79-.77-83.43-1-91.91-.73a157.84,157.84,0,0,0-31.61,3.78q-15.65,3.47-26.43,10.78a85.23,85.23,0,0,0-11.09,9.14q-8.34,7.67-10.71,9.74a107.26,107.26,0,0,0-10.78,10q-6.82,7.13-10.3,10.6-9.44,9.62-21.43,20.59-18.09,16.62-48.9,41.11-15.84,12.72-27,21.74a64.79,64.79,0,0,0-5.42,4.2,8.65,8.65,0,0,0-2.38,3.35q-2,1.22-1.4,4.2l.25.85a14.48,14.48,0,0,0,.48,1.83v.37a1.88,1.88,0,0,0,.19.61,6,6,0,0,0,.6,1.7q2.81,16,18,32.28,8.78,9.45,27.71,26,36.36,35,57.49,66.15,1.65,2.49,3.9,1.28a7.7,7.7,0,0,0,4.75-.92q.3-.18,5.73-4.32,2-1.53,6.63-4.63a37.2,37.2,0,0,0,4.88-3.78q1.28,8.89,2.61,19.43,4.94,42.59,6,96.17T140.42,511q-.61,36.78-1.34,62.85l.61-.24a6.48,6.48,0,0,0,3.47,5A31.12,31.12,0,0,0,152.6,582q1.46.3,9.93,1.53,10.77,1.57,20,2.62,20.77,2.25,40,3.29c23.39,1.18,109.7,1.4,138.93.67q21-.67,40.07-2.07,7.19-.56,19.61-2,13.83-1.53,19.49-2,38.07-3.29,79.48-5.06c10-.53,85.11-1.3,105.25-2.31l6.45-.25,8.29.67q36.72,2.75,42.51.43a8.45,8.45,0,0,0,3.9-3.11,3.87,3.87,0,0,0,2.67-1.88,5.25,5.25,0,0,0,.61-3.6,15.77,15.77,0,0,0-.42-1.64q.6-28.32.79-65.48.36-79.73-2.44-130-3.59-66.94-7.37-118.35l2.68.67a149.8,149.8,0,0,1,14.86,7q4.7,2.49,14,7.67l7.74,4.14a39.28,39.28,0,0,0,3.59,1.65,1.09,1.09,0,0,1,.36.06,3.08,3.08,0,0,0,.8.85,9.14,9.14,0,0,0,2,1.22c.89,2.48,2.75,3.61,5.6,3.41a6.46,6.46,0,0,0,4.56-2.07q4.2-.68,8.83-4.87,3-2.62,8-8.1,20.77-18.94,29.36-40.38,4.44-11.22,6.21-27.23c.36-3.61.65-6,.85-7.13a30.47,30.47,0,0,1,1.83-7,75.23,75.23,0,0,1,5.72-11q7.3-12,14-21.44c.89-1.22,2.23-3.08,4-5.6q2.31-3.4,3.78-5.66,2.37-4,2.86-5.06a12,12,0,0,0,.61-1.64,17.14,17.14,0,0,0,1.94-3.6,2.65,2.65,0,0,0-.42-2.8,2.39,2.39,0,0,0-1.1-1,4.91,4.91,0,0,1-.24-.74,13.42,13.42,0,0,0-4.57-5.23q-3.9-2.5-5.85-3.84L799.21,107q-20-13.52-24.36-16.38Q749.7,73.8,724.3,57.18,700.8,42,700,41.53M696,80.2A5,5,0,0,0,691.65,79a5.27,5.27,0,0,0-3.9,2.62,6.72,6.72,0,0,0-.66,4.51,3.28,3.28,0,0,1,.18.61,5.45,5.45,0,0,0-.3,2.5q.12,1.89.24,3.9.3,6.82-.06,15.16-.12,3.24-1.22,19.07-1.15,17-3.71,37.33-2.13,16.81-4.69,33.63-1.47-14-3-42.15-.36-4.64-1.52-22.66-1-13.95-1.28-22.6l-.67-21.38q-.12-7.42-.24-11.27a52.81,52.81,0,0,0-1.16-11.14c-.49-1.91-1.6-2.84-3.35-2.8s-2.78,1.09-3.1,3a54.3,54.3,0,0,0-.61,11q.12,3.84.36,11.2l.55,22.36q.24,8.4.06,22.78-.24,16.56-.18,22.72.18,26,2,44.34.66,6.45,1.58,12.42-.24,9.21-.06,12.67a44.77,44.77,0,0,0,.55,6.22q.12,4.44.79,10a3.53,3.53,0,0,0,.43,1.59l5.11,72.72q5.79,80.34,7.92,112.68T684,517.89q.12,22.41-.18,40.56L634.71,568l-3.83-.12c-14.94-.65-88.34-.81-100.2-.49q-33.61.86-78.5,2.87-13.83.6-39.95.79-27.41.06-40.19.55-44.1,1.64-78.93.73c-16.16-.37-90.76-1.06-103.79-2.07q-11.94-.91-21.8-2.07-7.8-1.05-11.75-1.4c-1.83-.17-3.54-.27-5.12-.3q.61-21.87.79-51.17.44-64.8-2.37-110.85T145.17,253q-.3-29.73-.37-56.53.06-1,.12-2.07,1.35-16.26,1.59-25.15.54-16.45.85-24.61.42-14.73.18-24.91-.42-10.17-1.52-22.78-.61-7.61-.73-11.45a53.1,53.1,0,0,1,1.21-11.52,7.13,7.13,0,0,0-.79-5.54A6.92,6.92,0,0,0,142,65.1a6,6,0,0,0-4.63-.18A5.7,5.7,0,0,0,134.26,69q-2.43,9.38-1.83,22.41.3,7.56,1.65,22.78.48,10.73.67,24.85.12,4.69.18,24.85c0,1.1.08,2.24.12,3.41-1.09-5.48-1.91-9.31-2.43-11.51a197.57,197.57,0,0,0-6.21-21.62,100.36,100.36,0,0,1-4.57-20.4c-.29-2.27-.49-5.89-.61-10.84a74.69,74.69,0,0,0-.49-10.78,1.9,1.9,0,0,0-1.83-1.89,2.37,2.37,0,0,0-2.25,1.34q-3.52,7.13-3,18.76.18,5.55,2.19,19.43.36,2.63,1.22,10.29.6,6.46,1.34,10.24t1.34,7.61a146,146,0,0,0-13.34-20L94.61,122.3a157.15,157.15,0,0,1-10.53-16.57c-.65-1.26-1.48-1.58-2.5-1a1.8,1.8,0,0,0-1.2,2.24,2.54,2.54,0,0,0,.16.38q4.33,11,15.23,32.76,10.71,21.2,15.16,32.83,14.19,36.74,16.08,69.38a5.32,5.32,0,0,0-.79.18c-.43,0-.85,0-1.28-.06a.82.82,0,0,1-.43-.12,106.3,106.3,0,0,0-5.84-10.42q-4.26-7.12-19.19-27.47L78.23,175.22q-3.7-5.17-5.66-7.74-3.28-4.32-6-7.37-1.89-2.19-6.58-6.94-4.2-4.38-6.39-7a1,1,0,0,0-1.38-.29.85.85,0,0,0-.2.17,1.13,1.13,0,0,0-.36,1.56.76.76,0,0,0,.11.14q1.77,2.92,4.69,8.59,3,5.91,4.57,8.59,2.43,4.14,9,13.46,6.95,9.87,21,29.54a327.73,327.73,0,0,1,18,27.65,183.37,183.37,0,0,1,8.83,17.48c.12.81.44,2.23,1,4.27a18.56,18.56,0,0,1,.73,4.62q.12,5.61-5,4.27a22.27,22.27,0,0,1-7.55-4,3.15,3.15,0,0,0-1.4-.73q-7.8-10.84-19.43-24.55-21.5-25.28-28.87-36.18-7.72-12-11.81-17.9a160.84,160.84,0,0,0-13-16.88,92.24,92.24,0,0,0-14.68-13.52,28,28,0,0,0-6.94-3.71,21.75,21.75,0,0,1,2.86-2.38c1.26-1,3.06-2.27,5.42-3.9l11.45-9.13Q45,122.11,52.11,116.37q25.4-20.2,41.77-36.72,4.14-4,9-9.56,2.13-2.49,8.59-9.87,3.41-3.94,9.19-10,7.5-8.1,9.26-9.92a77.56,77.56,0,0,1,20.95-15.78,107.58,107.58,0,0,1,24.48-9q13.89-3.42,32-2.8c1.7,0,3.84.16,6.4.36L300,15.4l.06.06,31.36,2.8,17.3,1.52q2.51.79,6.76,1.83,3.9,1.16,9.2,3.05,3,1,9.14,3.16a167.76,167.76,0,0,0,37.45,8.71,191.37,191.37,0,0,0,39.1.13,146.36,146.36,0,0,0,37.88-8.9,6.54,6.54,0,0,0,4.08-4.26.16.16,0,0,0,.06-.12L508.7,23a50.21,50.21,0,0,1-3,4.51q-7.8,9.93-25.09,17.48T431.3,51.4q-10-.43-20.16-1.58l-8.28-1.1q-1.65,5.66,8.22,8.16,15,4,53.41-1.83,36.9-5.55,51.94-21,5.79-6,7.12-11.39c17.54-.36,97-.85,118.35-1.46A71.8,71.8,0,0,1,654.81,25,148.26,148.26,0,0,1,677.47,37.2q7.85,5.05,46.83,30.58,23.51,15.41,47.26,31.36,20.34,13.71,24.36,16.51l11.14,8q1.83,1.34,5.6,4.26c.69.41,1.32.75,1.89,1-.57.6-1.56,1.64-3,3.1a.76.76,0,0,0-.31.43c-1.34,1.34-3.24,3.35-5.72,6s-6.93,8-13.34,15.84A151.16,151.16,0,0,0,769.73,192q-5.24,13.82-8,20.58a99.52,99.52,0,0,1-10.23,19.56,98.94,98.94,0,0,1-6.7,8q-4.87,4.94-7.31,7.37-6.71,7.06-8.16,9a22.23,22.23,0,0,0-4.75,9.38c-.74-.37-1.2-.61-1.4-.73q-4.14-2.07-7.49-4.08l-6.34-4c-.65-.37-1.24-.71-1.76-1l.18-8.1a66.83,66.83,0,0,1,.73-8.83,68.64,68.64,0,0,0,.85-8.59,17.4,17.4,0,0,0-.06-2.5q3.48-9.56,12.55-33.25,6.88-18,14.92-34.48,2.87-5.53,8.95-16.69a82.79,82.79,0,0,0,7.19-17.48,2.33,2.33,0,0,0-.79-2.74,2.26,2.26,0,0,0-2.8.13,55.06,55.06,0,0,0-12.12,12.54q-2.74,3.72-9.75,14.92-10,16-18.08,31.55a280.31,280.31,0,0,0-14.38,33.32c-.28,1-.57,1.87-.85,2.68,1-5.2,1.79-9.67,2.43-13.4q4.1-24.18,5.6-39.1a297.08,297.08,0,0,0,1.53-38.43q-.18-9-1.53-20.28-.66-4.69-2.92-20.16a6.72,6.72,0,0,0-1-2.75l-.06-.12A6.78,6.78,0,0,0,696,80.2Z' transform='translate(-1.3 -1.51)'/></svg>\")"
        }
    }
]);
//# sourceMappingURL=sourcemaps/9039.e8dbe9b8a1db35e7d2c9.js.map