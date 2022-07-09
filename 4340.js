(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [4340], {
        47214: (t, e, i) => {
            "use strict";
            i.d(e, {
                E: () => b
            });
            var s = i(13469),
                o = i.n(s),
                n = i(19755),
                a = i.n(n),
                l = i(72316),
                r = i.n(l),
                c = i(63574),
                h = i.n(c),
                d = i(10972),
                p = i(2720);

            function m(t, e, i, s, o, n, a) {
                try {
                    var l = t[n](a),
                        r = l.value
                } catch (t) {
                    return void i(t)
                }
                l.done ? e(r) : Promise.resolve(r).then(s, o)
            }

            function u(t) {
                return function() {
                    var e = this,
                        i = arguments;
                    return new Promise((function(s, o) {
                        var n = t.apply(e, i);

                        function a(t) {
                            m(n, s, o, a, l, "next", t)
                        }

                        function l(t) {
                            m(n, s, o, a, l, "throw", t)
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
            const v = h().View.extend({
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
                                let [e, i] = t, s = i || "no-theme";
                                return e && (s += " show"), s
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
            class b {
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
                        t ? (e.bannerData = yield e.loadBannerData(t), e.bannerData && (e.view = new v({
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
                    return u((function*() {
                        try {
                            const e = yield fetch(p.v.banners.url), i = yield e.json();
                            return !(!i || !i.postGameBanners) && i.postGameBanners[t]
                        } catch (t) {
                            return console.error("Unable to load banner data", t), !1
                        }
                    }))()
                }
            }
            g(b, "view", null), g(b, "isInitialized", !1), g(b, "bannerConfig", null)
        },
        29014: (t, e, i) => {
            "use strict";
            i.d(e, {
                C: () => h
            });
            var s = i(72316),
                o = i.n(s),
                n = i(63574),
                a = i.n(n),
                l = i(49273),
                r = i(19690),
                c = i(24475);
            const h = a().CollectionView.extend({
                tagName: "div",
                className: "choices",
                childView: t => "input" === t.get("type") ? r.E : "text" === t.get("type") ? c.y : l.r,
                collection: new(o().Collection)([]),
                initialize(t) {
                    this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block", "action"])
                },
                childViewOptions(t, e) {
                    let i, s = !0;
                    return void 0 !== t.get("block") ? s = t.get("block") : void 0 !== this.getOption("block") && (s = this.getOption("block")), void 0 !== t.get("action") ? i = t.get("action") : void 0 !== this.getOption("action") && (i = this.getOption("action")), {
                        block: s,
                        action: i,
                        index: void 0 !== t.get("key") ? t.get("key") : e
                    }
                }
            })
        },
        49273: (t, e, i) => {
            "use strict";
            i.d(e, {
                r: () => p
            }), i(70989);
            var s = i(19755),
                o = i.n(s),
                n = i(72316),
                a = i.n(n),
                l = i(63574),
                r = i.n(l),
                c = i(13469),
                h = i.n(c),
                d = i(91434);
            const p = r().View.extend({
                template: h().template(d.Z),
                model: new(a().Model)({}),
                className() {
                    let t = "button-group btn-group";
                    return !1 !== this.options.block && (t += " btn-block"), t
                },
                events: {
                    "click .button": "onClick"
                },
                bindings: {
                    ":el": {
                        observe: "visible",
                        visible: t => !1 !== t,
                        visibleFn(t, e) {
                            t.css("display", e ? "" : "none")
                        },
                        attributes: [{
                            name: "class",
                            observe: ["className", "selected", "disabled", "active"],
                            onGet(t) {
                                let [e, i, s, o] = t, n = "";
                                return e && (n += e), i && (n += " selected"), s && (n += " disabled"), o && (n += " active"), n
                            }
                        }]
                    },
                    "button:first": {
                        observe: ["text", "html", "label"],
                        updateMethod: "html",
                        onGet(t) {
                            let [e, i, s] = t;
                            return s ? this.$el.find("button:first").attr("aria-label", s) : this.$el.find("button:first").removeAttr("aria-label"), i || o()("<div />").text(e).html()
                        },
                        attributes: [{
                            name: "disabled",
                            observe: "disabled"
                        }, {
                            name: "data-action",
                            observe: "action",
                            onGet: t => t || "choose"
                        }, {
                            name: "data-index",
                            observe: "index"
                        }, {
                            name: "data-key",
                            observe: "key"
                        }, {
                            name: "style",
                            observe: "color",
                            onGet(t) {
                                if (!t) return "";
                                let e = "";
                                return t.text && (e += `color: ${t.text};`), t.background && (e += `background-color: ${t.background};`), e
                            }
                        }, {
                            name: "type",
                            observe: "action",
                            onGet: t => "submit" === t ? "submit" : "button"
                        }]
                    },
                    ".censor-button": {
                        observe: "censorable",
                        visible: !0,
                        visibleFn(t, e) {
                            e || t.remove()
                        },
                        attributes: [{
                            name: "data-index",
                            observe: "index"
                        }, {
                            name: "class",
                            observe: ["className", "isWarned"],
                            onGet(t) {
                                if (!t) return null;
                                let e = "";
                                return t[0] && (e += t[0]), t[1] && (e += " isWarned"), e
                            }
                        }]
                    }
                },
                onRender() {
                    this.model.set("index", this.getOption("index")), this.getOption("action") && this.model.set("action", this.getOption("action")), this.stickit()
                },
                onClick(t) {
                    const e = o()(t.target).data("action");
                    this.triggerMethod(`button:${e}`, this.model)
                }
            })
        },
        15059: (t, e, i) => {
            "use strict";
            i.d(e, {
                P: () => w
            });
            var s = i(19755),
                o = i.n(s),
                n = i(13469),
                a = i.n(n),
                l = i(72316),
                r = i.n(l),
                c = i(63574),
                h = i.n(c),
                d = i(40543),
                p = i(44442),
                m = i(27091),
                u = i.n(m),
                g = new URL(i(25900), i.b);
            const v = '<div class="canvasContainer"> <video id="cameraVideo" class="cameraVideo" autoplay playsinline class=""></video> <canvas id="cameraCanvas" class="cameraCanvas resizableCanvas" width="300px" height="408px" class=""></canvas> <img id="cameraImage" class="cameraImage visuallyhidden"/> </div> <div class="cameraControls"> <button id="exitButton" class="button exitButton"></button> <div class="buttons pre"> <button id="switchButton" class="button switchButton"></button> <button id="snapshotButton" class="button snapshotButton"></button> </div> <div class="buttons post"> <button id="cancelButton" class="button cancelButton"></button> <button id="confirmButton" class="button confirmButton"></button> </div> </div> <div style="display:none"> <img id="Mask" src="' + u()(g) + '"/> </div>';

            function b(t, e, i, s, o, n, a) {
                try {
                    var l = t[n](a),
                        r = l.value
                } catch (t) {
                    return void i(t)
                }
                l.done ? e(r) : Promise.resolve(r).then(s, o)
            }
            const C = {
                    type: "camera",
                    width: 300,
                    height: 408,
                    offsetX: 0,
                    offsetY: 0,
                    transmitting: !1,
                    previewImage: null,
                    mirror: !0,
                    mask: !0,
                    update(t) {
                        if (this.video || (this.video = document.getElementById("cameraVideo")), this.image || (this.image = document.getElementById("Mask")), !this.video || !this.image) return;
                        const e = this.video.videoWidth,
                            i = this.video.videoHeight,
                            s = (0, p.o_)().width,
                            o = (0, p.o_)().height,
                            n = Math.max(s / e, o / i);
                        this.width = s, this.height = o, this.finalWidth = e * n, this.finalHeight = i * n, this.offsetX = .5 * (s - this.finalWidth), this.offsetY = .5 * (o - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
                    },
                    render() {
                        if (!this.video) return;
                        const t = (0, p.Sy)();
                        t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - (0, p.o_)().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, (0, p.o_)().width, (0, p.o_)().height))
                    }
                },
                w = h().View.extend({
                    template: a().template(v),
                    className: "CameraUser",
                    model: new(r().Model)({
                        image: null,
                        width: 300,
                        height: 408,
                        transmitting: !1,
                        access: !1,
                        showSwitchButton: !1
                    }),
                    sprites: [],
                    bindings: {
                        ".pre": {
                            classes: {
                                visible: {
                                    observe: "image",
                                    onGet: t => !t
                                }
                            }
                        },
                        ".post": {
                            classes: {
                                visible: {
                                    observe: "image",
                                    onGet: t => t
                                }
                            }
                        }
                    },
                    events: {
                        "click #switchButton": "switchClicked",
                        "click #snapshotButton": "snapshotClicked",
                        "click #confirmButton": "confirmClicked",
                        "click #cancelButton": "cancelClicked",
                        "click #exitButton": "exitClicked"
                    },
                    initialize() {
                        this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), this.update()
                    },
                    update() {
                        this.cameraSprite && (this.model.get("image") ? (this.previewImage = this.previewImage || new Image, this.previewImage.onload = () => {
                            this.cameraSprite.preview = this.previewImage
                        }, this.previewImage.src = this.model.get("image")) : this.cameraSprite.preview = null, this.cameraSprite.transmitting = this.model.get("transmitting"), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), this.$("#cameraCanvas").width(`${this.model.get("width")}px`), this.$("#cameraCanvas").height(`${this.model.get("height")}px`), this.onResize())
                    },
                    onRender() {
                        this.stickit()
                    },
                    onAttach() {
                        const t = this;
                        (0, p.S1)("cameraCanvas"), t.sprites = [], t.gameLoop = (0, p.DX)({
                            fps: 60,
                            update(e) {
                                t.sprites.forEach((t => t.update(e))), t.sprites = t.sprites.filter((t => t.isAlive()))
                            },
                            render(e) {
                                t.sprites.forEach((t => t.render(e)))
                            }
                        });
                        for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
                        this.cameraSprite = (0, p.jy)(C), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
                    },
                    startCamera() {
                        var t, e = this;
                        return (t = function*() {
                            e.canvas = document.getElementById("cameraCanvas"), e.image = document.getElementById("cameraImage"), e.video = document.getElementById("cameraVideo");
                            const t = e.altOption || "drawing";
                            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                                const i = {
                                    video: {
                                        facingMode: e.facingMode,
                                        width: 1280
                                    },
                                    audio: !1
                                };
                                try {
                                    const t = yield navigator.mediaDevices.getUserMedia(i), s = yield navigator.mediaDevices.enumerateDevices();
                                    e.currentStream = t, e.video.srcObject = t, yield e.video.play(), e.gotDevices(s)
                                } catch (i) {
                                    console.error(i), d.b.show("alert", {
                                        titleText: "Unable to Access Camera",
                                        text: `Looks like we don't have access to your device's camera. You can refresh and try again, or choose the ${t} option instead.`,
                                        willClose: () => {
                                            e.cameraAccessDenied()
                                        }
                                    })
                                }
                            } else d.b.show("alert", {
                                titleText: "No Camera Access",
                                text: `It looks like camera access isn't available from this browser. Try the ${t} option instead.`,
                                willClose: () => {
                                    e.cameraAccessDenied()
                                }
                            })
                        }, function() {
                            var e = this,
                                i = arguments;
                            return new Promise((function(s, o) {
                                var n = t.apply(e, i);

                                function a(t) {
                                    b(n, s, o, a, l, "next", t)
                                }

                                function l(t) {
                                    b(n, s, o, a, l, "throw", t)
                                }
                                a(void 0)
                            }))
                        })()
                    },
                    gotDevices(t) {
                        let e = 0;
                        t.forEach((t => {
                            "videoinput" === t.kind && (e += 1)
                        })), this.model.set("showSwitchButton", e > 1)
                    },
                    stopMediaTracks() {
                        this.currentStream.getTracks().forEach((t => {
                            t.stop()
                        })), this.video.srcObject = null, this.model.unset("image")
                    },
                    onBeforeDestroy() {
                        window.removeEventListener("resize", this.onResizeWithContext);
                        const t = this;
                        for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
                        t.gameLoop.update(1 / 60), t.gameLoop.stop(), this.currentStream && this.stopMediaTracks();
                        const e = document.getElementsByClassName("pt-page");
                        e.length && (e[0].style.display = "table", e[0].style.display = "block")
                    },
                    switchClicked() {
                        this.currentStream && this.stopMediaTracks(), this.facingMode = "user" === this.facingMode ? "environment" : "user", this.cameraSprite.mirror = "user" === this.facingMode, this.startCamera()
                    },
                    snapshotClicked() {
                        const t = this.canvas.toDataURL();
                        this.model.set("image", t), this.model.set("transmitting", !1)
                    },
                    confirmClicked() {
                        const t = this.model.get("sizesToSend") || [{
                                width: this.model.get("width"),
                                height: this.model.get("height")
                            }],
                            e = [];
                        t.forEach((t => {
                            if (!t.width || !t.height) return;
                            const i = document.createElement("canvas");
                            i.width = t.width, i.height = t.height;
                            const s = i.getContext("2d");
                            this.previewImage && s.drawImage(this.previewImage, 0, 0, i.width, i.height), this.model.set("transmitting", !0);
                            const o = i.toDataURL().split(",")[1];
                            e.push({
                                size: t,
                                picture: o
                            })
                        })), this.triggerMethod("camera:snapshot", e)
                    },
                    cancelClicked() {
                        this.model.unset("image")
                    },
                    exitClicked() {
                        this.triggerMethod("camera:exit")
                    },
                    cameraAccessDenied() {
                        this.model.set("failed", !0), this.triggerMethod("camera:exit")
                    },
                    onResize() {
                        const t = this.model.get("width"),
                            e = this.model.get("height");
                        if (!t || !e) return;
                        const i = document.getElementById("cameraCanvas"),
                            s = o()(".canvasContainer");
                        if (!i || !s) return;
                        const n = s.width(),
                            a = Math.max(o()(window).innerHeight(), 250),
                            l = Math.min(n / t, a / e),
                            r = t * l,
                            c = e * l;
                        i.style.width = `${r}px`, i.style.height = `${c}px`, i.width = r, i.height = c
                    }
                })
        },
        53729: (t, e, i) => {
            "use strict";
            i.d(e, {
                i: () => p
            });
            var s = i(13469),
                o = i.n(s),
                n = i(63574),
                a = i.n(n),
                l = i(9659),
                r = i(15059);

            function c(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function h(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const d = l.S.extend({
                    defaults: {
                        size: {
                            width: 300,
                            height: 408
                        },
                        sizesToSend: null,
                        mask: !0,
                        strings: {
                            exitButton: "X",
                            switchButton: '\n                <svg width="1.5em"\n                    height="1.5em"\n                    viewBox="0 0 16 16"\n                    class="bi bi-switch"\n                    fill="currentColor"\n                    xmlns="http://www.w3.org/2000/svg"\n                >\n                <path\n                    d="M 7.96875 2.578125 C 7.144531 2.578125 6.371094 2.8125 5.652344 3.289062\n                        C 4.933594 3.753906 4.367188 4.394531 3.945312 5.210938\n                        C 3.527344 6.03125 3.316406 6.921875 3.316406 7.878906 L 3.316406 8.058594 L 3.324219 8.242188\n                        L 1.917969 8.347656 L 1.90625 7.878906 C 1.882812 7.273438 1.945312 6.683594 2.085938 6.113281\n                        C 2.226562 5.542969 2.433594 4.992188 2.703125 4.457031\n                        C 3.242188 3.378906 3.972656 2.527344 4.898438 1.898438\n                        C 5.832031 1.273438 6.851562 0.960938 7.957031 0.960938\n                        C 8.984375 0.960938 9.949219 1.242188 10.851562 1.808594 L 12.203125 0.15625 L 12.558594 4.71875\n                        L 8.328125 4.882812 L 9.847656 3.023438 C 9.546875 2.875 9.238281 2.761719 8.925781 2.6875\n                        C 8.617188 2.613281 8.296875 2.578125 7.96875 2.578125 Z M 12.632812 7.558594\n                        L 14.03125 7.453125 L 14.039062 7.6875 L 14.039062 7.921875\n                        C 14.039062 9.160156 13.761719 10.316406 13.210938 11.394531\n                        C 12.664062 12.476562 11.929688 13.320312 11.007812 13.929688\n                        C 10.089844 14.53125 9.082031 14.832031 7.980469 14.832031\n                        C 6.992188 14.832031 6.035156 14.554688 5.105469 13.992188 L 3.746094 15.644531\n                        L 3.394531 11.074219 L 7.621094 10.917969 L 6.101562 12.777344\n                        C 6.402344 12.925781 6.710938 13.039062 7.027344 13.113281\n                        C 7.339844 13.1875 7.65625 13.222656 7.980469 13.222656\n                        C 8.835938 13.222656 9.613281 12.988281 10.316406 12.511719\n                        C 11.039062 12.035156 11.601562 11.378906 12.007812 10.554688\n                        C 12.433594 9.726562 12.644531 8.839844 12.644531 7.898438 L 12.644531 7.738281\n                        Z M 12.632812 7.558594 "\n                />\n            </svg>',
                            snapshotButton: '\n                <svg\n                    width="1.5em"\n                    height="1.5em"\n                    viewBox="0 0 16 16"\n                    class="bi bi-camera"\n                    fill="currentColor"\n                    xmlns="http://www.w3.org/2000/svg"\n                >\n                    <path\n                        fill-rule="evenodd"\n                        d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3\n                            H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12\n                            a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172\n                            a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828\n                            A2 2 0 0 1 3.172 4H2z"\n                    />\n                    <path\n                        fill-rule="evenodd"\n                        d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"\n                    />\n                    <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />\n                </svg>\n            ',
                            cancelButton: "Cancel",
                            confirmButton: "Confirm"
                        }
                    }
                }),
                p = a().View.extend({
                    template: o().template('<div id="cameraRegion" class="cameraRegion"></div>'),
                    className: "Camera",
                    model: new d,
                    regions: {
                        camera: "#cameraRegion"
                    },
                    bindings: {
                        "#exitButton": {
                            observe: "strings",
                            onGet: t => t.exitButton
                        },
                        "#switchButton": {
                            observe: "strings",
                            updateMethod: "html",
                            onGet: t => t.switchButton
                        },
                        "#snapshotButton": {
                            observe: "strings",
                            updateMethod: "html",
                            onGet: t => t.snapshotButton
                        },
                        "#cancelButton": {
                            observe: "strings",
                            onGet: t => t.cancelButton
                        },
                        "#confirmButton": {
                            observe: "strings",
                            onGet: t => t.confirmButton
                        }
                    },
                    initialize(t) {
                        this.cameraView = this.cameraView || new r.P(t), this.listenTo(this.model, "change", this.update, this), this.update()
                    },
                    update() {
                        this.cameraView.model.set("width", this.model.get("size").width), this.cameraView.model.set("height", this.model.get("size").height), this.cameraView.model.set("mask", this.model.get("mask")), this.cameraView.model.set("sizesToSend", this.model.get("sizesToSend"))
                    },
                    onBeforeDestroy() {
                        this.getRegion("camera").empty()
                    },
                    onRender() {
                        this.showChildView("camera", this.cameraView)
                    },
                    onChildviewCameraSnapshot(t) {
                        1 === t.length ? this.triggerMethod("client:message", function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? c(Object(i), !0).forEach((function(e) {
                                    h(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                }))
                            }
                            return t
                        }({
                            action: "camera"
                        }, t[0])) : this.triggerMethod("client:message", {
                            action: "camera",
                            pictures: t
                        })
                    },
                    onAttach() {
                        this.stickit()
                    },
                    onChildviewCameraExit() {
                        this.triggerMethod("client:message", {
                            action: "cancel"
                        })
                    }
                })
        },
        48886: (t, e, i) => {
            "use strict";
            i.d(e, {
                N: () => h
            });
            var s = i(72316),
                o = i.n(s),
                n = i(63574),
                a = i.n(n),
                l = i(13469),
                r = i.n(l);
            i(70989);
            const c = a().View.extend({
                    tagName: "div",
                    className: "colorSwatch",
                    template: r().template('<a class="change-color button-color btn"></a>'),
                    events: {
                        click: "onClick"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                observe: ["className", "selected"],
                                name: "class",
                                onGet(t) {
                                    let e = "";
                                    return t[0] && (e += t[0]), t[1] && (e += " selected"), e
                                }
                            }, {
                                name: "data-thickness",
                                observe: "thickness"
                            }, {
                                name: "data-color",
                                observe: "hex"
                            }]
                        },
                        "a.button-color": {
                            attributes: [{
                                name: "data-color",
                                observe: "hex"
                            }, {
                                name: "style",
                                observe: "hex",
                                onGet(t) {
                                    return this.getOption("transparent") ? "" : `background-color: ${t};`
                                }
                            }]
                        }
                    },
                    onRender() {
                        this.stickit()
                    },
                    onClick() {
                        this.triggerMethod("palette:select", this.model)
                    }
                }),
                h = a().CollectionView.extend({
                    tagName: "div",
                    id: "color-buttons",
                    className: "colorPalette",
                    childView: c,
                    collection: new(o().Collection)([]),
                    initialize() {
                        this.listenTo(this.collection, "sync", this.render)
                    },
                    childViewOptions() {
                        return {
                            transparent: this.getOption("transparent")
                        }
                    }
                })
        },
        74030: (t, e, i) => {
            "use strict";
            i.d(e, {
                u: () => h
            });
            var s = i(13469),
                o = i.n(s),
                n = i(72316),
                a = i.n(n),
                l = i(63574),
                r = i.n(l),
                c = i(48886);
            const h = r().View.extend({
                tagName: "div",
                className: "picker",
                template: o().template('<ul class="nav nav-colors"> <li class="pull-left button-pad"> <button id="undoButton" class="undo button"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAnCAQAAAA4Y6kNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhCAUULQu6tVG/AAACyElEQVRIx62WO2gVQRSGvzOzsfAVO6NIKlELBUkhCRhsNZ2otYKNFhYS7MRC7AUt1EKwkmATLSx9oIabQnwRfCCCSpQghhDUSF73WOzs7Mze2eRK8g+77Lz+Pf95zK5wVq7rXwyKkEMRmgBs4wC97GYLm+hgjmm+M0aDp4wDYPz6fHf+xHsZxgAZ1l9gOcRdptBkm2KYASxgyHyz7s4oyk0ycBMARxipIQvbCIfB7yuagQaKcstZCpsZaoOuaEN0AdYrDCiVawjIft7+B6GivKMfHJ0T3vCTVznGzH8SKsoMR518G1u5kvZHDjpLLcawGlird9jHIkFmrRwbuME6msjqUcJeLtFEEaFBb1tblHEm+IWwka10+VorsUAfz9sNzyNO0UOnp+mkh9PcZ7Gy7l7uymUo5SUD3g5Tsa2P4Wj1rNkJS1POcoX1lJVssS1yT/Aj2HFxGUp5IEBwILiCq2AHr/yeMTqWtnKOQW+jLaujBd18dDvm2bN8eC5EwrOatNvFhFt/sp2ID1KcNVktJRx3qy+3l0TnKM8aW0NpeIiiDMObtg6G895Om0jyHP00UR5n3GY76uojXyyuXz4J3XTzGQu1hPCMUfrcd6EtlFGvPxfOoDzJECzR9y2wL+4LEo21ogH8zvwHk0B22Y9lamIsxFeafDNuibpLfF+8h4leUFibwjSTfDAtG8p++RRKrbcR5pnghQksxPuUyJPxaJ5UaazhE68L4QIJH1bvS3sSNtFg0lYI4v+b1tAA7n8phU75wk/BYIJwSJIkpm7WCxfVBePrg8h7IUU1PPV5Oa9NjInSOU4gqaQV0etTEAQN85IKdWllrKDOytyFhHlZlUwQKoKCXAqKVI8ASfZj8XWkuWI1QUCqglpnJKGkQFaMm4Qdoez0TIrQKyyEV2u7jG04o6QTPQtfaAunRhlZ9DVR3615aeL1/wCc0hAjJXcubgAAAABJRU5ErkJggg=="/></svg> </button> </li> <li class="pull-left button-pad"> <button id="thicknessButton" class="thickness button"> <div class="thickness-circle"></div> </button> </li> <li class="pull-right button-pad"> <button id="showPaletteButton" class="showPalette button"> </button> </li> <li class="pull-right button-pad"> <button aria-label="choose color" id="currentColorButton" class="button currentColorButton"> <div id="currentColor" class="currentColor"></div> </button> </li> <li id="color-palette" class="hide"> </li> </ul> <div id="colorPaletteRegion" class="colorPaletteRegion"> </div>'),
                model: new(a().Model)({}),
                regions: {
                    colorPalette: "#colorPaletteRegion"
                },
                events: {
                    "click #currentColorButton": "onPaletteClick",
                    "click #showPaletteButton": "onPaletteClick"
                },
                triggers: {
                    "click #thicknessButton": "choose:thickness",
                    "click #undoButton": "choose:undo"
                },
                bindings: {
                    "#currentColor": {
                        attributes: [{
                            name: "style",
                            observe: "currentColor",
                            onGet: t => `background-color: ${t}`
                        }]
                    },
                    ".colorPaletteRegion": {
                        classes: {
                            visible: {
                                observe: "visiblePalette"
                            }
                        }
                    },
                    ".thickness-circle": {
                        attributes: [{
                            name: "style",
                            observe: "thickness",
                            onGet: t => `width: ${3*t}px; height: ${3*t}px;`
                        }]
                    }
                },
                initialize() {
                    this.colorPaletteComponent = this.colorPaletteComponent || new c.N({
                        collection: new(a().Collection)
                    }), this.listenTo(this.model, "change", this.update, this)
                },
                onRender() {
                    this.showChildView("colorPalette", this.colorPaletteComponent)
                },
                onAttach() {
                    this.stickit()
                },
                update() {
                    const t = this.model.get("colors").map((t => "object" == typeof t ? t : {
                        hex: t
                    }));
                    this.colorPaletteComponent.collection.set(t)
                },
                onLine() {
                    this.showPalette(!1)
                },
                onPaletteClick() {
                    this.showPalette(!0)
                },
                showPalette() {
                    let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.model.set("visiblePalette", t)
                },
                onChildviewChildviewPaletteSelect(t) {
                    this.triggerMethod("choose:color", t), this.showPalette(!1)
                }
            })
        },
        41393: (t, e, i) => {
            "use strict";
            i.d(e, {
                d: () => C
            });
            var s = i(19755),
                o = i.n(s),
                n = i(13469),
                a = i.n(n),
                l = i(72316),
                r = i.n(l),
                c = i(63574),
                h = i.n(c),
                d = i(9659),
                p = i(40543),
                m = i(93618),
                u = i(24475),
                g = i(29014),
                v = i(74030);
            const b = d.S.extend({
                    defaults: {
                        drawId: 0,
                        objectKey: void 0,
                        size: {
                            width: 240,
                            height: 300
                        },
                        actions: !1,
                        colors: ["#3c6e6f", "#007727", "#b8aa01", "#0350a0", "#000000", "#966401", "#48019d", "#730075", "#9c0e3e"],
                        background: "",
                        thicknesses: [3, 6],
                        defaultIndex: 4,
                        classes: [],
                        prompt: {
                            html: ""
                        },
                        live: !1,
                        image: !1,
                        backgroundImageUrl: !1,
                        lines: !1,
                        hideSubmit: !1,
                        autoSubmit: !1,
                        allowEmpty: !1,
                        disabled: !1,
                        debug: !1,
                        strings: {
                            drawing_empty: "You must draw something!",
                            submit: "submit",
                            ERROR_REJECTED_OBJECT: "That's not allowed, enter something else!"
                        }
                    }
                }),
                C = h().View.extend({
                    className: "Draw",
                    template: a().template('<div class="controller-content"> <div class="canvas-container"> <div id="prompt" class="prompt"></div> <div id="toolbar" class="toolbar"></div> <div id="sketchpad"></div> <div id="buttons" class="buttons"></div> <div id="post-sketchpad" class="post-sketchpad"> <div id="submit"> <button id="submitdrawing" class="button submitDrawing">Submit</button><br/> </div> <button id="censorOptions" class="button">Censor Options</button> <div class="footer"></div> </div> </div> </div> '),
                    model: new b,
                    regions: {
                        prompt: "#prompt",
                        sketchpad: "#sketchpad",
                        toolbar: "#toolbar",
                        buttons: "#buttons"
                    },
                    events: {
                        "click #submitdrawing": "onChildviewButtonSubmit"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: "classes",
                                onGet: t => t ? t.join(" ") : ""
                            }]
                        },
                        "#censorOptions": {
                            visible: !1
                        },
                        ".footer": {
                            observe: "footer",
                            updateMethod: "html",
                            onGet: t => t ? t.html ? t.html : o()("<div />").text(t.text).html() : null
                        },
                        ".submitDrawing": {
                            observe: ["hideSubmit", "actions", "strings"],
                            visible: !0,
                            updateView: !0,
                            onGet: t => !t[0] && !t[1] && (void 0 === t[2] ? "" : t[2].submit || "Submit")
                        }
                    },
                    initialize() {
                        this.promptComponent = this.promptComponent || new u.y({}), this.toolbarComponent = this.toolbarComponent || new v.u({
                            model: new(r().Model)({})
                        }), this.sketchpadComponent = this.sketchpadComponent || new m.e({
                            model: new(r().Model)
                        }), this.buttonsCollection = this.buttonsCollection || new(r().Collection)([]), this.buttonsComponent = this.buttonsComponent || new g.C({
                            block: !1,
                            collection: this.buttonsCollection
                        }), this.options.thicknessIndex = -1, this.options.colorIndex = -1, this.drawId = this.model.get("drawId"), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
                    },
                    update() {
                        this.model.get("drawId") !== this.getOption("drawId") && (this.resetDrawing(), this.drawId = this.model.get("drawId")), this.model.get("prompt") && this.promptComponent.model.set(this.model.get("prompt")), this.model.get("size") ? this.sketchpadComponent.model.set("size", this.model.get("size")) : this.sketchpadComponent.model.set("size", {
                            width: 720,
                            height: 900
                        }), this.model.get("image") && (this.sketchpadComponent.setImage(this.images[this.model.get("image")]), this.onResize()), this.model.get("background") && this.sketchpadComponent.model.set("background", this.model.get("background")), this.model.get("backgroundImageUrl") && this.sketchpadComponent.model.set("backgroundImageUrl", this.model.get("backgroundImageUrl")), this.toolbarComponent && this.toolbarComponent.model.set("colors", this.model.get("colors")), this.model.get("actions") && this.buttonsCollection.set(this.model.get("actions")), this.model.get("autoSubmit") && this.autoSubmit(), this.model.get("sketchOptions") && this.sketchpadComponent && this.sketchpadComponent.setOptions(this.model.get("sketchOptions")), this.onResize()
                    },
                    onRender() {
                        this.showChildView("prompt", this.promptComponent), this.showChildView("toolbar", this.toolbarComponent), this.showChildView("sketchpad", this.sketchpadComponent), this.showChildView("buttons", this.buttonsComponent)
                    },
                    onChildviewAttach() {
                        this.model.get("size") ? this.sketchpadComponent.model.set("size", this.model.get("size")) : this.sketchpadComponent.model.set("size", {
                            width: 720,
                            height: 900
                        })
                    },
                    onAttach() {
                        this.stickit(), this.update(), this.onResize(), p.b.vibrate()
                    },
                    onBeforeDestroy() {
                        window.removeEventListener("resize", this.onResizeWithContext)
                    },
                    resetDrawing() {
                        this.sketchpadComponent.resetAll(), this.onChildviewSketchpadReady()
                    },
                    onChildviewSketchpadReady() {
                        this.model.get("thicknesses") && -1 === this.options.thicknessIndex && this.onChildviewChooseThickness(), this.model.get("colors") && -1 === this.options.colorIndex && this.model.get("colors") && void 0 !== this.model.get("defaultIndex") && this.chooseColorByIndex(this.model.get("defaultIndex")), this.model.get("sketchOptions") && this.sketchpadComponent && this.sketchpadComponent.setOptions(this.model.get("sketchOptions")), this.model.get("lines") && this.sketchpadComponent.setLines(this.model.get("lines"))
                    },
                    chooseColorByIndex(t) {
                        (t < 0 || t > this.model.get("colors").length) && (t = 0);
                        let e = this.model.get("colors")[t];
                        "object" != typeof e && (e = {
                            hex: e
                        }), this.chooseColor(e.hex, e)
                    },
                    onChildviewChooseColor(t) {
                        this.chooseColor(t.get("hex"), t.attributes)
                    },
                    onChildviewChooseThickness() {
                        this.options.thicknessIndex = (this.options.thicknessIndex + 1) % this.model.get("thicknesses").length;
                        const t = this.model.get("thicknesses")[this.options.thicknessIndex];
                        this.sketchpadComponent.setThickness(t), this.toolbarComponent && this.toolbarComponent.model.set("thickness", t)
                    },
                    onChildviewChooseUndo() {
                        this.sketchpadComponent.undoLine()
                    },
                    chooseColor(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.sketchpadComponent.setColor(t), this.sketchpadComponent.setHighlighter(e.highlighter), this.toolbarComponent.model.set("highlighter", e.highlighter), void 0 !== e.thickness && this.sketchpadComponent.setThickness(e.thickness), this.toolbarComponent.model.set("currentColor", t)
                    },
                    onChildviewSketchpadLine(t) {
                        if (this.toolbarComponent && this.toolbarComponent.onLine && this.toolbarComponent.onLine(), this.model.get("live")) {
                            const e = {
                                    line: t,
                                    highlighter: this.sketchpadComponent.getHighlighter(),
                                    action: "line"
                                },
                                i = this.model.get("objectKey");
                            if (void 0 !== i) {
                                const t = this.sketchpadComponent.getLines();
                                e.objectKey = i, e.val = {
                                    lines: t
                                }
                            }
                            this.triggerMethod("client:message", e)
                        }
                    },
                    onChildviewSketchpadUndo(t) {
                        if (this.model.get("live")) {
                            const e = {
                                    action: "undo",
                                    linesLength: t
                                },
                                i = this.model.get("objectKey");
                            void 0 !== i && (e.objectKey = i, e.val = {
                                lines: this.sketchpadComponent.getLines()
                            }), this.triggerMethod("client:message", e)
                        }
                    },
                    autoSubmit() {
                        this.sketchpadComponent.end(), this.sketchpadComponent.getLines().length > 0 && this.onChildviewButtonSubmit()
                    },
                    onChildviewChildviewButtonChoose(t) {
                        this.onChildviewButtonChoose(t)
                    },
                    onChildviewButtonChoose(t) {
                        this.triggerMethod("client:message", {
                            action: "choose",
                            index: t.get("key")
                        })
                    },
                    onChildviewChildviewButtonSubmit() {
                        this.onChildviewButtonSubmit()
                    },
                    onChildviewButtonSubmit() {
                        const t = this.sketchpadComponent.getLines();
                        if (0 === t.length && !this.model.get("allowEmpty")) return p.b.show(Error(this.model.get("strings").drawing_empty)), !1;
                        const e = {
                                lines: t,
                                action: "submit"
                            },
                            i = this.model.get("objectKey");
                        return i && (e.objectKey = i, e.val = {
                            lines: t,
                            submit: !0
                        }), this.triggerMethod("client:message", e), this.model.get("debug") && p.b.show("custom", {
                            html: `<textarea id="lines" style='width:100%; height:400px;'>${JSON.stringify(t)}</textarea><button type="button" onclick="(function(){var copyText = document.querySelector('#lines'); copyText.select(); document.execCommand('copy');})();">Copy to clipboard</button>`
                        }), !1
                    },
                    onObjectFilterError() {
                        p.b.show(Error(this.model.get("strings").ERROR_REJECTED_OBJECT))
                    },
                    onResize() {
                        const t = o()("#sketchpad"),
                            e = o()("#sketchpad canvas")[0];
                        if (!e) return;
                        const i = 2 * parseInt(o()(".controller-content").css("border-top-width"), 10) + o()(".playerTopBar").innerHeight() + o()("#prompt").innerHeight() + o()("#toolbar").innerHeight() + 2 * parseInt(o()(".canvasContainer").css("border-top-width"), 10) + o()("#buttons").innerHeight() + o()("#post-sketchpad").innerHeight() + 10,
                            s = parseInt(2 * parseInt(o()(".canvasContainer").css("border-left-width"), 10) || 0 + 2 * parseInt(o()(".canvasContainer").css("padding-left"), 10) || 0 + 2 * parseInt(o()(".Draw").css("padding-left"), 10) || 0, 10),
                            n = e.width,
                            a = e.height,
                            l = Math.min(t.width() - s, 2 * n),
                            r = Math.max(o()("#controller-container").innerHeight() - i, 250),
                            c = Math.min(l / n, r / a),
                            h = n * c,
                            d = a * c;
                        e.style.width = `${h}px`, e.style.height = `${d}px`, window.scrollTo(0, 0)
                    }
                })
        },
        37231: (t, e, i) => {
            "use strict";
            i.d(e, {
                G: () => C
            });
            var s = i(19755),
                o = i.n(s),
                n = i(13469),
                a = i.n(n),
                l = i(72316),
                r = i.n(l),
                c = i(63574),
                h = i.n(c),
                d = i(9659),
                p = i(40543),
                m = i(24475),
                u = i(19690),
                g = i(29014),
                v = i(1169);
            const b = d.S.extend({
                    defaults: {
                        state: "EnterSingleText",
                        actions: [{
                            text: "submit",
                            action: "submit"
                        }],
                        allowEmpty: !1,
                        autoSubmit: !1,
                        classes: [],
                        doneText: "",
                        entryId: void 0,
                        entry: null,
                        live: !1,
                        maxLength: 500,
                        textKey: void 0,
                        textRingName: null,
                        placeholder: "",
                        autocapitalize: !1,
                        className: "",
                        inlineSubmit: !1,
                        inlineSubmitText: "Submit",
                        error: "",
                        strings: {
                            ERROR_NOTHING_ENTERED: "You need to enter something!",
                            ERROR_REJECTED_TEXT: "That's not allowed, enter something else! (You can change the level of filtering in the game's settings menu)"
                        }
                    }
                }),
                C = h().View.extend({
                    className: "EnterSingleText scrollable",
                    template: a().template(v.Z),
                    model: new b,
                    sessionModule: "comment",
                    sessionName: " Comments",
                    regions: {
                        prompt: "#prompt",
                        input: "#input-region",
                        buttons: "#buttons"
                    },
                    events: {
                        "submit form": "onChildviewInputSubmit"
                    },
                    bindings: {
                        ".enterSingleTextForm": {
                            observe: "entry",
                            visible: t => !t
                        },
                        ".enterSingleTextDone": {
                            observe: "entry",
                            visible: !0
                        },
                        ".doneText": {
                            observe: "doneText",
                            updateMethod: "html",
                            onGet: t => t ? t.html ? t.html : o()("<div />").text(t.text).html() : ""
                        },
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: t => t && t.bgColor ? `background-color: ${t.bgColor}` : ""
                            }, {
                                name: "class",
                                observe: "classes",
                                onGet: t => t ? t.join(" ") : ""
                            }]
                        },
                        ".choice-button": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: t => t && t.buttonColor ? `background-color: ${t.buttonColor}` : null
                            }]
                        }
                    },
                    initialize() {
                        this.currentEntry = null, this.shouldSubmit = !1, this.promptComponent = new m.y({
                            model: new(r().Model)({
                                text: "",
                                className: ""
                            })
                        }), this.inputComponent = this.inputComponent || new u.E({
                            model: new(r().Model)({})
                        }), this.buttonsCollection = this.buttonsCollection || new(r().Collection)([{
                            text: "submit"
                        }]), this.buttonsComponent = this.buttonsComponent || new g.C({
                            block: !0,
                            collection: this.buttonsCollection
                        }), this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.model.get("isAudience") && (void 0 !== this.model.get("entryId") && this.model.get("entryId") === this.entryId || (this.audienceEntry = void 0), this.audienceEntry && this.model.setUpdate({
                            entry: this.audienceEntry,
                            entryId: this.model.get("entryId") || 0
                        })), this.promptComponent.model.clear({
                            silent: !0
                        }).set(this.model.get("prompt")), this.inputComponent.model.set(this.model.attributes), this.buttonsComponent.options.block = this.model.get("block"), this.buttonsCollection.set(this.model.get("actions") || [{
                            text: "submit",
                            action: "submit"
                        }]), this.model.get("entryId") && this.model.get("entryId") !== this.currentEntry && (this.inputComponent.clearInput(), this.currentEntry = this.model.get("entryId")), this.$el.find(".enterSingleTextFieldset").prop("disabled", !1), this.$el.find("textarea").focus(), this.stickit(), this.model.get("autoSubmit") && this.shouldSubmit && this.onChildviewInputSubmit()
                    },
                    onRender() {
                        this.showChildView("prompt", this.promptComponent), this.showChildView("input", this.inputComponent), this.showChildView("buttons", this.buttonsComponent), this.stickit()
                    },
                    onAttach() {
                        this.update(), p.b.vibrate()
                    },
                    onChildviewInputText(t) {
                        let e = t.getValue();
                        e.length > this.model.get("maxLength") && (e = e.substr(0, this.model.get("maxLength")), t.setValue(e)), this.shouldSubmit = e.length > 0, this.model.get("live") && (this.throttledSend || (this.throttledSend = a().throttle((() => {
                            const e = t.getSanitizedValue();
                            if (0 === e.length) return;
                            const i = {
                                    action: "write-live",
                                    entry: e
                                },
                                s = this.model.get("textKey");
                            void 0 !== s && (i.textKey = s, i.val = e), this.triggerMethod("client:message", i)
                        }), 500)), this.throttledSend())
                    },
                    onChildviewInputSubmit() {
                        let t = this.inputComponent.getValue(),
                            e = this.inputComponent.getSanitizedValue();
                        if (this.model.setUpdate({
                                error: null
                            }), 0 === e.length && !this.model.get("allowEmpty")) return this.model.setUpdate({
                            error: this.model.get("strings").ERROR_NOTHING_ENTERED
                        }), !1;
                        t.length > this.model.get("maxLength") && (this.inputComponent.setValue(t.substr(0, this.model.get("maxLength"))), t = this.inputComponent.getValue(), e = this.inputComponent.getSanitizedValue()), this.shouldSubmit = !1;
                        const i = {
                                action: "write",
                                entry: e
                            },
                            s = this.model.get("textKey");
                        return s && (i.textKey = s, i.val = e), this.triggerMethod("client:message", i), this.model.get("isAudience") ? this.model.get("repeating") ? this.inputComponent.clearInput() : (this.audienceEntry = e, this.entryId = this.model.get("entryId") || 0, this.model.setUpdate({
                            entry: this.audienceEntry,
                            shotId: this.entryId
                        })) : this.model.get("repeating") || this.$el.find(".enterSingleTextFieldset").prop("disabled", !0), !1
                    },
                    onTextFilterError() {
                        this.model.setUpdate({
                            error: this.model.get("strings").ERROR_REJECTED_TEXT
                        })
                    },
                    onChildviewChildviewButtonSuggestion() {
                        const t = this.model.get("suggestions"),
                            e = this.inputComponent.getSanitizedValue(),
                            i = a().without(t, e);
                        return this.inputComponent.setValue(a().shuffle(i)[0]), !1
                    },
                    onChildviewChildviewButtonChoose(t) {
                        return this.triggerMethod("client:message", {
                            action: t.get("key")
                        }), !1
                    },
                    onChildviewChildviewButtonHelp() {
                        return this.triggerMethod("client:message", {
                            action: "help"
                        }), !1
                    }
                })
        },
        19690: (t, e, i) => {
            "use strict";
            i.d(e, {
                E: () => m
            });
            var s = i(19755),
                o = i.n(s),
                n = i(13469),
                a = i.n(n),
                l = i(72316),
                r = i.n(l),
                c = i(63574),
                h = i.n(c),
                d = i(3682),
                p = i(89446);
            i(70989);
            const m = h().View.extend({
                tagName: "div",
                className: "input",
                model: new(r().Model)({}),
                template: a().template('<form> <div class="form-group"> <div class="inputGroup"> <textarea id="input-text-textarea" rows="1" class="form-control jbg-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea> <span class="inlineSubmit"> <button type="submit" class="btn btn-default inlineSubmitButton" type="button"><span class="inlineSubmitText">Send</span></button> </span> <span id="helpBlock2" class="help-block errorText"></span> <div class="charCountDisplay"><span class="charRemaining">70</span></div> </div> </div> </form>'),
                events: {
                    "keypress textarea": "onKeypress",
                    "click .inlineSubmitButton": "onSubmitClick",
                    "input textarea": "onInputChange"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "style",
                            observe: "hidden",
                            onGet: t => !0 === t ? "display: none;" : "display: block;"
                        }, {
                            name: "class",
                            observe: "className",
                            onGet: t => `input ${void 0!==t?t:""}`
                        }]
                    },
                    textarea: {
                        attributes: [{
                            name: "maxlength",
                            observe: "maxLength"
                        }, {
                            name: "placeholder",
                            observe: "placeholder"
                        }, {
                            name: "autocapitalize",
                            observe: "autocapitalize"
                        }, {
                            name: "class",
                            observe: "className",
                            onGet: t => `form-control ${void 0!==t?t:""}`
                        }]
                    },
                    ".inputGroup": {
                        attributes: [{
                            name: "class",
                            observe: "inlineSubmit",
                            onGet: t => !0 === t ? "input-group" : ""
                        }]
                    },
                    ".inlineSubmit": {
                        attributes: [{
                            name: "class",
                            observe: "inlineSubmit",
                            onGet: t => !0 === t ? "input-group-btn" : ""
                        }, {
                            name: "style",
                            observe: "inlineSubmit",
                            onGet: t => !0 === t ? "" : "display:none;"
                        }]
                    },
                    ".inlineSubmitText": {
                        observe: "inlineSubmitText",
                        onGet: t => void 0 !== t ? t : "Send"
                    },
                    ".form-group": {
                        attributes: [{
                            name: "class",
                            observe: "error",
                            onGet: t => t ? "has-error" : ""
                        }]
                    },
                    ".errorText": {
                        observe: "error",
                        updateMethod: "html",
                        visible: !0,
                        updateView: !0,
                        onGet: t => t ? "object" == typeof t ? t.html ? t.html : o()("<div />").text(t.text).html() : t : null
                    },
                    ".charRemaining": "remaining",
                    ".maxChars": "maxLength",
                    ".charCountDisplay": {
                        observe: ["maxLength", "counter"],
                        visible: t => t[0] && t[1]
                    }
                },
                render() {
                    this.$el.html(this.template()), this.stickit(), this.model.set("remaining", this.model.get("maxLength"))
                },
                onAttach() {
                    this.getOption("preventAutosize") || (0, d.Z)(o()("textarea"))
                },
                onSubmitClick() {
                    return o()("textarea").blur(), this.triggerMethod("input:submit", this), !1
                },
                onKeypress(t) {
                    return this.model.set("error", ""), 13 !== t.keyCode || (o()("textarea").blur(), this.triggerMethod("input:submit", this), !1)
                },
                onInputChange() {
                    const t = this.$("textarea").first();
                    if (this.triggerMethod("input:text", this), !t) return;
                    const e = t.val() || "";
                    this.model.set("remaining", this.model.get("maxLength") - e.length)
                },
                focus() {
                    o()(this.$el).find("textarea").focus()
                },
                clearInput() {
                    const t = o()(this.$el).find("textarea");
                    o()(t).val(""), this.getOption("preventAutosize") || d.Z.update(t), this.onInputChange()
                },
                setValue(t) {
                    o()(this.$el).find("textarea")[0].value = t, this.onInputChange()
                },
                getValue() {
                    return this.$("textarea").val()
                },
                getSanitizedValue() {
                    return p.c.sanitize(this.getValue())
                },
                sanitize: t => p.c.sanitize(t),
                sanitizeInput: t => p.c.sanitizeInput(t)
            })
        },
        52650: (t, e, i) => {
            "use strict";
            i.d(e, {
                W: () => k
            });
            var s = i(19755),
                o = i.n(s),
                n = i(40543),
                a = i(81127),
                l = i(72316),
                r = i.n(l),
                c = i(63574),
                h = i.n(c),
                d = i(9659),
                p = i(89446),
                m = i(24475),
                u = i(29014),
                g = i(13469),
                v = i.n(g),
                b = i(79023);

            function C(t, e, i, s, o, n, a) {
                try {
                    var l = t[n](a),
                        r = l.value
                } catch (t) {
                    return void i(t)
                }
                l.done ? e(r) : Promise.resolve(r).then(s, o)
            }
            const w = d.S.extend({
                    defaults: {
                        canChangeName: !1,
                        playerIsVIP: !1,
                        playerCanStartGame: !1,
                        playerCanCensor: !1,
                        gameCanStart: !1,
                        gameIsStarting: !1,
                        gameEnded: !1,
                        game: {
                            familyFriendly: !1,
                            extendedTimers: !1,
                            requireTwitch: !1,
                            controllerOnly: !1,
                            skipTutorials: !1
                        },
                        choices: [],
                        artifact: null,
                        characters: null,
                        censorablePlayers: [],
                        playerCanDoEpisodes: !1,
                        playerCanReport: !1,
                        playerCanViewAuthor: !1,
                        lastUGCResult: null,
                        history: [],
                        activeContentId: null,
                        formattedActiveContentId: null,
                        isLocal: !1,
                        strings: {
                            wait: "Sit back and relax!",
                            vip_waiting: "Waiting for all players to join",
                            vip_canStart: "Press this button when everybody has joined",
                            vip_cancel: "Press this button to cancel game start",
                            vip_postgame: "What would you like to do now?",
                            vip_episodes_menu: "Episodes Menu",
                            vip_episodes_unload: "Unload Episode",
                            vip_episodes_report: "Report Episode",
                            vip_episodes_warning: "Warning: user generated content is not rated",
                            vip_episodes_load: "Load an episode by id:",
                            vip_episodes_select: "Or select an episode:",
                            vip_episodes_back: "Back",
                            vip_episodes_submit: "SUBMIT",
                            vip_episodes_view_author: "View Author",
                            button_start: "Everybody's In",
                            button_cancel: "Cancel",
                            button_changename: "Change Name",
                            button_sameplayers: "Same Players",
                            button_newplayers: "New Players",
                            prompt_entername: "Enter your name",
                            prompt_choosecharacter: "Select your character",
                            button_censorOptions: "Censor Options",
                            censor_prompt: ""
                        }
                    }
                }),
                y = h().View.extend({
                    tagName: "button",
                    template: v().template('<span class="flex-item"></span>'),
                    className() {
                        return `characters ${this.model.get("name")}`
                    },
                    events: {
                        click: "onCharacterClick"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "bgcolor",
                                onGet: t => t ? `background-color: ${t};` : ""
                            }, {
                                name: "aria-label",
                                observe: "name"
                            }, {
                                name: "disabled",
                                observe: "available",
                                onGet: t => void 0 !== t ? !t : null
                            }],
                            classes: {
                                active: "active",
                                selected: {
                                    observe: "selected",
                                    onGet: t => t
                                },
                                disabled: {
                                    observe: "available",
                                    onGet: t => !t
                                }
                            }
                        }
                    },
                    onCharacterClick() {
                        this.trigger("character:click", this.model)
                    },
                    onRender() {
                        this.stickit()
                    }
                }),
                k = h().View.extend({
                    className: "Lobby scrollable",
                    template: v().template(b.Z),
                    model: new w,
                    titleComponent: null,
                    choicesListView: null,
                    charactersListView: null,
                    regions: {
                        title: "#title",
                        choices: "#choices",
                        characters: "#characters"
                    },
                    events: {
                        "click .choice-button": "onButtonClick",
                        "click .artifactLink": "onArtifactClick"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: t => t && t.bgColor ? `background-color: ${t.bgColor};` : ""
                            }, {
                                name: "class",
                                observe: "classes",
                                onGet: t => t ? t.join(" ") : ""
                            }]
                        },
                        ".artifactContainer": {
                            observe: "artifact",
                            visible: !0
                        },
                        ".artifactLink": {
                            attributes: [{
                                name: "href",
                                observe: "artifact",
                                onGet(t) {
                                    if (!t) return null;
                                    let e = "games.jackbox.tv";
                                    return -1 !== t.rootId.indexOf("test") && (e = "games-test.jackbox.tv"), `https://${e}/artifact/${t.categoryId}/${t.artifactId}/`
                                }
                            }]
                        },
                        ".choice-button": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: t => t && t.buttonColor ? `background-color: ${t.buttonColor}` : null
                            }]
                        },
                        ".characterSelect": {
                            observe: "characters",
                            visible: !0
                        },
                        ".charactersPrompt": {
                            observe: "characters",
                            visible: !0,
                            onGet: t => t && !v().isEmpty(t)
                        },
                        ".charactersPromptText": {
                            observe: "strings",
                            onGet() {
                                return this.getOption("strings").prompt_choosecharacter
                            }
                        }
                    },
                    strings: {},
                    initialize() {
                        this.titleComponent = new m.y({
                            model: new(r().Model)({})
                        }), this.choicesListView = this.choicesListView || new u.C, this.charactersListView = new(h().CollectionView)({
                            childView: y,
                            className: "charactersList",
                            collection: new(r().Collection)
                        }), this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        if (this.strings = this.model.get("strings"), this.choicesListView.collection.reset(), this.titleComponent.model.set("html", this.getOption("strings").wait), this.model.get("playerIsVIP") && (this.model.get("gameCanStart") ? this.model.get("playerCanStartGame") && (this.model.get("gameIsStarting") ? (this.titleComponent.model.set("html", this.getOption("strings").vip_cancel), this.choicesListView.collection.add({
                                className: "vipCancel",
                                html: this.getOption("strings").button_cancel,
                                action: "cancel"
                            })) : this.model.get("gameFinished") ? (this.titleComponent.model.set("html", this.getOption("strings").vip_postgame), this.choicesListView.collection.add({
                                html: this.getOption("strings").button_sameplayers,
                                action: "PostGame_Continue"
                            }), this.choicesListView.collection.add({
                                html: this.getOption("strings").button_newplayers,
                                action: "PostGame_NewGame"
                            })) : (this.titleComponent.model.set("html", this.getOption("strings").vip_canStart), this.choicesListView.collection.add({
                                className: "vipStart",
                                html: this.getOption("strings").button_start,
                                action: "start"
                            }), this.model.get("playerCanCensor") && this.model.get("censorablePlayers").length > 0 && this.choicesListView.collection.add({
                                className: "vipCensorOptions",
                                html: this.getOption("strings").button_censorOptions,
                                action: "censorOptions"
                            }))) : this.titleComponent.model.set("html", this.getOption("strings").vip_waiting)), this.model.get("playerCanDoEpisodes")) {
                            if (this.model.get("activeContentId")) {
                                const t = this.model.get("activeContentId"),
                                    e = this.model.get("history").find((e => t === (e.remoteContentId || e.localContentId))),
                                    i = e && e.metadata ? p.c.htmlUnescape(e.metadata.title) : null;
                                i && this.choicesListView.collection.add({
                                    type: "text",
                                    text: i
                                }), this.choicesListView.collection.add({
                                    html: this.getOption("strings").vip_episodes_unload,
                                    action: "ugc-unload",
                                    block: !1
                                }), this.model.get("playerCanReport") && this.choicesListView.collection.add({
                                    html: this.getOption("strings").vip_episodes_report,
                                    action: "ugc-report",
                                    block: !1
                                }), this.model.get("playerCanViewAuthor") && this.choicesListView.collection.add({
                                    html: this.getOption("strings").vip_episodes_view_author,
                                    action: "ugc-view-author",
                                    block: !1
                                })
                            } else this.choicesListView.collection.add({
                                className: "vipEpisodesMenu",
                                html: this.getOption("strings").vip_episodes_menu,
                                action: "ugc"
                            });
                            const t = this.model.get("lastUGCResult");
                            t && t.error && this.lastUGCResultId !== t.id && (n.b.show("alert", {
                                text: t.error
                            }), this.lastUGCResultId = t.id)
                        }
                        this.model.get("canChangeName") && this.choicesListView.collection.add({
                            html: this.getOption("strings").button_changename,
                            action: "changeName"
                        }), this.model.get("choices") && this.choicesListView.collection.add(this.model.get("choices"));
                        const t = this.model.get("characters") || [];
                        this.charactersListView.collection.set(v().map(t, (t => {
                            const e = this.model.get("playerInfo") || {},
                                i = t;
                            return i.bgcolor = e.buttonColor, i.selected = e.avatar === i.name, i
                        }))), this.stickit()
                    },
                    onRender() {
                        this.showChildView("title", this.titleComponent), this.showChildView("choices", this.choicesListView), this.showChildView("characters", this.charactersListView), this.update()
                    },
                    onArtifactClick() {
                        this.triggerMethod("track:event", {
                            category: "PostGame",
                            action: "galleryClicked"
                        }), a.Q.setAsViewed(0)
                    },
                    onButtonClick(t) {
                        var e, i = this;
                        return (e = function*() {
                            const e = i;
                            t.preventDefault();
                            const s = o()(t.currentTarget).data("action");
                            if ("back" !== s && "censorConfirm" !== s && "activateContentId" !== s)
                                if ("changeName" === s) try {
                                        const t = yield n.b.show("custom", {
                                            input: "text",
                                            title: i.getOption("strings").prompt_entername,
                                            customClass: {
                                                input: "playerName"
                                            },
                                            inputAttributes: {
                                                maxlength: 12
                                            },
                                            inputValidator: t => t ? t.length > 12 ? "Limit 12 characters" : null : "You need to write something!"
                                        });
                                        if (t.dismiss) return;
                                        i.triggerMethod("client:message", {
                                            name: t.value
                                        })
                                    } catch (t) {} else if ("censorOptions" === s) n.b.show("custom", {
                                        target: i.el,
                                        html: "",
                                        confirmButtonText: i.model.get("strings").button_cancel,
                                        customClass: {
                                            popup: "censorOptionsModal",
                                            confirmButton: "cancelButton"
                                        },
                                        didOpen() {
                                            const t = new u.C({
                                                    el: ".censorOptionsModal",
                                                    action: "censor",
                                                    collection: new(r().Collection)
                                                }),
                                                i = [{
                                                    type: "text",
                                                    className: "prompt",
                                                    html: e.model.get("strings").censor_prompt
                                                }, ...e.model.get("censorablePlayers").map((t => ({
                                                    action: "censorConfirm",
                                                    html: t.name,
                                                    key: t.id
                                                })))];
                                            t.collection.set(i), t.render(), e.listenTo(t, "childview:button:censorConfirm", e.censorPlayer)
                                        }
                                    });
                                    else if ("ugc-unload" === s) i.triggerMethod("client:message", {
                                clearContentId: !0
                            });
                            else if ("ugc-report" === s) {
                                const t = "http://support.jackboxgames.com/",
                                    e = i.model.get("formattedActiveContentId");
                                window.open(`${t}?episodeID=${e}`, "_blank")
                            } else "ugc-view-author" === s ? i.triggerMethod("client:message", {
                                viewAuthor: !0
                            }) : "ugc" === s ? n.b.show("custom", {
                                target: i.el,
                                html: "",
                                showConfirmButton: !1,
                                customClass: {
                                    popup: "episodesModal"
                                },
                                background: e.model.get("playerInfo") && e.model.get("playerInfo").bgColor ? e.model.get("playerInfo").bgColor : null,
                                padding: "10px 5px",
                                didOpen: () => {
                                    const t = new u.C({
                                        el: ".episodesModal",
                                        action: "episode",
                                        collection: new(r().Collection)([])
                                    });
                                    t.collection.add({
                                        html: i.model.get("strings").vip_episodes_back || "Back",
                                        action: "back",
                                        className: "backButton"
                                    }), t.collection.add({
                                        type: "text",
                                        html: i.model.get("strings").vip_episodes_load || "Load an episode by id:",
                                        className: "header"
                                    }), t.collection.add({
                                        type: "input",
                                        preventAutosize: !0,
                                        placeholder: "???-????",
                                        inlineSubmit: !0,
                                        inlineSubmitText: i.model.get("strings").vip_episodes_submit || "SUBMIT",
                                        className: "lobbyUgcInput"
                                    }), t.collection.add({
                                        type: "text",
                                        html: i.model.get("strings").vip_episodes_warning || "Warning: user generated content is not rated",
                                        className: "danger"
                                    }), e.model.get("history").length && (t.collection.add({
                                        type: "text",
                                        html: i.model.get("strings").vip_episodes_select || "Or select an episode:",
                                        className: "episodesListHeader"
                                    }), t.collection.add(e.model.get("history").map((t => ({
                                        action: "activateContentId",
                                        html: t.remoteContentId ? `${t.metadata.title}<br/>${t.formattedRemoteContentId}` : `${t.metadata.title}`,
                                        key: t.remoteContentId || t.localContentId
                                    }))))), t.render(), o()(".lobbyUgcInput").mask("aaa-aaaa", {
                                        placeholder: "???-????"
                                    }), e.listenTo(t, "childview:button:activateContentId", e.activateContentId), e.listenTo(t, "childview:button:back", (() => {
                                        n.b.close()
                                    })), e.listenTo(t, "childview:input:submit", e.activateContentIdFromInput)
                                }
                            }) : i.triggerMethod("client:message", {
                                action: s
                            })
                        }, function() {
                            var t = this,
                                i = arguments;
                            return new Promise((function(s, o) {
                                var n = e.apply(t, i);

                                function a(t) {
                                    C(n, s, o, a, l, "next", t)
                                }

                                function l(t) {
                                    C(n, s, o, a, l, "throw", t)
                                }
                                a(void 0)
                            }))
                        })()
                    },
                    censorPlayer(t) {
                        n.b.close(), this.triggerMethod("client:message", {
                            action: "censor",
                            id: t.get("key")
                        })
                    },
                    activateContentId(t) {
                        n.b.close(), this.triggerMethod("client:message", {
                            activateContentId: !0,
                            contentId: t.get("key")
                        })
                    },
                    activateContentIdFromInput(t) {
                        (t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase() || "").length < 7 || (this.triggerMethod("client:message", {
                            activateContentId: !0,
                            contentId: t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase()
                        }), n.b.close())
                    },
                    onChildviewChildviewCharacterClick(t) {
                        t.get("available") && !t.get("selected") && (this.triggerMethod("client:message", {
                            action: "avatar",
                            name: t.get("name")
                        }), this.charactersListView.collection.forEach((t => {
                            t.unset("active"), t.set("bgcolor", this.model.get("playerInfo").buttonColor)
                        })), t.set("active", !0), t.set("bgcolor", this.model.get("playerInfo").textColor))
                    }
                })
        },
        34813: (t, e, i) => {
            "use strict";
            i.d(e, {
                s: () => p
            }), i(70989);
            var s = i(19755),
                o = i.n(s),
                n = i(63574),
                a = i.n(n),
                l = i(9659),
                r = i(81127),
                c = i(13469),
                h = i.n(c);
            const d = l.S.extend({
                    defaults: {
                        message: {
                            text: null
                        },
                        classes: [],
                        artifact: null
                    }
                }),
                p = a().View.extend({
                    className: "Logo",
                    template: h().template('<div id="image" class="logo logo-image"></div> <div id="message" class="message"><h2 class="messageText"></h2></div> <div id="action" class="action"></div> <div id="artifactId" class="artifactContainer text"> <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank"> <button id="artifactButton" class="artifactButton"></button> </a> </div> '),
                    model: new d,
                    events: {
                        touchstart: "onTouchStart",
                        "click .artifactButton": "onArtifactClick"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: "classes",
                                onGet: t => (t || []).join(" ")
                            }]
                        },
                        ".message": {
                            attributes: [{
                                name: "style",
                                observe: "message",
                                onGet(t) {
                                    let e = "";
                                    return t && (t.html || t.text) || (e += "display: none;"), e
                                }
                            }]
                        },
                        ".messageText": {
                            observe: "message",
                            updateMethod: "html",
                            onGet: t => t && (t.html || t.text) ? t.html ? t.html : o()("<div />").text(t.text).html() : null
                        },
                        "#action": "action",
                        ".artifactContainer": {
                            observe: "artifact",
                            visible: !0
                        },
                        ".artifactLink": {
                            attributes: [{
                                name: "href",
                                observe: "artifact",
                                onGet(t) {
                                    const e = t || {
                                        rootId: "",
                                        categoryId: "",
                                        artifactId: ""
                                    };
                                    let i = "games.jackbox.tv";
                                    return -1 !== e.rootId.indexOf("test") && (i = "games-test.jackbox.tv"), `https://${i}/artifact/${e.categoryId}/${e.artifactId}/`
                                }
                            }]
                        }
                    },
                    onRender() {
                        this.stickit()
                    },
                    onTouchStart(t) {
                        "button" !== t.target.tagName.toLowerCase() && t.preventDefault()
                    },
                    onArtifactClick() {
                        this.triggerMethod("track:event", {
                            category: "PostGame",
                            action: "galleryClicked"
                        }), r.Q.setAsViewed(0)
                    }
                })
        },
        24340: (t, e, i) => {
            "use strict";
            i.d(e, {
                v: () => j
            });
            var s = i(19755),
                o = i.n(s),
                n = i(13469),
                a = i.n(n),
                l = i(72316),
                r = i.n(l),
                c = i(55507),
                h = i(63574),
                d = i.n(h),
                p = i(10972),
                m = i(40543),
                u = i(81127);
            const g = {
                en: {
                    LANGUAGE_NAME: "English",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsch", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    LANGUAGE: "Language",
                    LOGIN: "Login",
                    STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Disconnected",
                    STRING_ERROR_SERVER_ROOM_DESTROYED: "Thanks for playing!"
                },
                fr: {
                    LANGUAGE_NAME: "Français",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsch", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    LANGUAGE: "Langue",
                    LOGIN: "Connexion",
                    STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Déconnecté",
                    STRING_ERROR_SERVER_ROOM_DESTROYED: "Vous avez été déconnecté"
                },
                it: {
                    LANGUAGE_NAME: "Italiano",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsch", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    LANGUAGE: "Lingua",
                    LOGIN: "Accesso",
                    STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Disconnesso",
                    STRING_ERROR_SERVER_ROOM_DESTROYED: "Disconnesso"
                },
                de: {
                    LANGUAGE_NAME: "Deutsche",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsch", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    LANGUAGE: "Sprache",
                    LOGIN: "Login",
                    STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Getrennt",
                    STRING_ERROR_SERVER_ROOM_DESTROYED: "Getrennt"
                },
                es: {
                    LANGUAGE_NAME: "Español",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsch", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    LANGUAGE: "idioma",
                    LOGIN: "Iniciar sesión",
                    STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Desconectado",
                    STRING_ERROR_SERVER_ROOM_DESTROYED: "Desconectado"
                }
            };
            var v = i(59965),
                b = i(41393),
                C = i(37231),
                w = i(52650),
                y = i(34813),
                k = i(97079),
                f = (i(70989), i(9659)),
                x = i(49273),
                T = i(51474),
                S = i(24475);
            const I = f.S.extend({
                    defaults: {
                        choiceId: void 0,
                        type: "single",
                        censorDialog: "none",
                        chosen: null,
                        choices: [],
                        prompt: {},
                        error: null,
                        block: !0,
                        classes: [],
                        maxVotes: 16,
                        doneText: {},
                        announcePrompt: !1,
                        strings: {
                            your_choice: "Thank you. Your choice: ",
                            censor_prompt: "Censor this?",
                            censor_confirm: "Yes, Censor!",
                            censor_cancel: "No!"
                        }
                    }
                }),
                _ = d().View.extend({
                    tagName: "div",
                    className: "sortable-item",
                    template: a().template("<div class='text'></div>"),
                    model: new(r().Model)({}),
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "data-id",
                                observe: "key"
                            }]
                        },
                        ".text": "html"
                    },
                    onAttach() {
                        this.stickit()
                    }
                }),
                R = d().CollectionView.extend({
                    tagName: "div",
                    className: "sortable-collection",
                    childView: _,
                    collection: new(r().Collection)([]),
                    initialize(t) {
                        this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
                    }
                }),
                E = d().View.extend({
                    className: "SorterView",
                    template: a().template('\n        <div id="rankedChoicesRegion"></div>\n        <div class="instructions">Choose where this item ranks:</div>\n        <div id="unrankedChoicesRegion"></div>\n        <div id="lockInRegion"></div>\n    '),
                    model: new(r().Model)({
                        rankedLength: 1,
                        choices: []
                    }),
                    bindings: {
                        ".instructions": {
                            observe: "rankedLength",
                            visible: !0,
                            onGet: t => t < 3
                        },
                        "#unrankedChoicesRegion": {
                            observe: ["rankedLength", "choices"],
                            visible: !0,
                            onGet: t => !(t[0] === t[1].length)
                        },
                        "#lockInRegion": {
                            observe: ["rankedLength", "choices"],
                            visible: !0,
                            onGet: t => t[0] === t[1].length
                        }
                    },
                    regions: {
                        rankedChoices: "#rankedChoicesRegion",
                        unrankedChoices: "#unrankedChoicesRegion",
                        lockInRegion: "#lockInRegion"
                    },
                    initialize() {
                        this.rankedCollectionView = this.rankedCollectionView || new R({
                            collection: new(r().Collection)([])
                        }), this.unrankedCollectionView = this.unrankedCollectionView || new R({
                            className: "sortable-collection unranked",
                            collection: new(r().Collection)([])
                        }), this.lockInView = this.lockInView || new x.r({
                            block: !1,
                            model: new(r().Model)({
                                action: "lock",
                                html: "Lock In"
                            })
                        }), this.listenTo(this.model, "change:choices", this.update, this)
                    },
                    onAttach() {
                        this.showChildView("rankedChoices", this.rankedCollectionView), this.showChildView("unrankedChoices", this.unrankedCollectionView), this.showChildView("lockInRegion", this.lockInView), this.stickit(), this.update()
                    },
                    update() {
                        const t = this.model.get("choices"),
                            e = t.slice(0, 1),
                            i = t.slice(1);
                        this.rankedSortable && this.rankedSortable.destroy(), this.rankedCollectionView.collection.set(e), this.rankedSortable = T.ZP.create(this.rankedCollectionView.el, {
                            group: "shared",
                            onSort: this.handleOnSort.bind(this),
                            animation: 100,
                            delay: 100
                        }), this.unrankedSortable && this.unrankedSortable.destroy(), this.unrankedCollectionView.collection.set(i), this.unrankedSortable = T.ZP.create(this.unrankedCollectionView.el, {
                            className: "unranked",
                            group: {
                                name: "shared",
                                put: !1
                            },
                            sort: !1
                        })
                    },
                    moveItemInArray(t, e, i) {
                        const s = t.slice(0);
                        if (e === i) return s;
                        const o = s[e];
                        return s.splice(e, 1), s.splice(i, 0, o), s
                    },
                    handleOnSort() {
                        const t = this.model.get("choices"),
                            e = this.rankedSortable.toArray();
                        e.length === t.length && this.triggerMethod("sorted", e), this.model.set("rankedLength", e.length)
                    },
                    onChildviewButtonLock() {
                        const t = this.rankedSortable.toArray();
                        this.triggerMethod("lock", t)
                    }
                }),
                L = d().View.extend({
                    className: "Sortable scrollable",
                    template: a().template('<div id="controller" class="state-controller controller-content"> <div id="prompt" class="prompt text"></div> <div class="error text-danger"></div> <div id="choicesRegion"></div> <div id="chosen" class="chosen text"></div> <div class="makeSingleChoiceDone"> <span class="doneText"></span> </div> </div>'),
                    model: new I,
                    regions: {
                        prompt: "#prompt",
                        choices: "#choicesRegion"
                    },
                    initialize() {
                        this.promptComponent = this.promptComponent || new S.y({
                            model: new(r().Model)
                        }), this.sorterView = this.sorterView || new E({}), this.listenTo(this.model, "change", this.update, this)
                    },
                    onAttach() {
                        this.showChildView("prompt", this.promptComponent), this.showChildView("choices", this.sorterView)
                    },
                    update() {
                        this.promptComponent.model.set(this.model.get("prompt")), this.model.get("choices").length !== this.sorterView.model.get("choices").length && this.sorterView.model.set("choices", this.model.get("choices"))
                    },
                    onChildviewSorted(t) {
                        this.triggerMethod("client:message", {
                            action: "sort",
                            order: t
                        })
                    },
                    onChildviewLock(t) {
                        this.triggerMethod("client:message", {
                            action: "sort",
                            lock: !0,
                            order: t
                        })
                    }
                });
            var O = i(53729),
                M = i(17756);
            const A = d().View.extend({
                    className: "RadialView",
                    template: a().template('<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80"> <defs> <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"> <stop offset="0%" style="stop-color:#000;stop-opacity:.5"/> <stop offset="60%" style="stop-color:#000;stop-opacity:.9"/> <stop offset="80%" style="stop-color:#000;stop-opacity:.9"/> <stop offset="100%" style="stop-color:#000;stop-opacity:.7"/> </radialGradient> <svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263.67 271.33"> <title>astroIcon</title> <path class="cls-1" d="M253.83,108.17H210.89A57.83,57.83,0,0,1,160,138.5H140a57.83,57.83,0,0,1-50.89-30.33H46.17a19.5,19.5,0,0,0-19.5,19.5v11a19.5,19.5,0,0,0,19.5,19.5H70.4a19.5,19.5,0,0,1,19.5,19.5V259.8a17.37,17.37,0,0,0,17.36,17.37H115A17.37,17.37,0,0,0,132.4,259.8V236.53a17.37,17.37,0,0,1,17.37-17.36h0a17.36,17.36,0,0,1,17.36,17.36V259.8a17.37,17.37,0,0,0,17.37,17.37h9a17.37,17.37,0,0,0,17.36-17.37V177.67a19.5,19.5,0,0,1,19.5-19.5h23.49a19.5,19.5,0,0,0,19.5-19.5v-11A19.5,19.5,0,0,0,253.83,108.17Z" transform="translate(-18.17 -14.33)"/> <rect class="cls-1" x="64" y="8.5" width="135.67" height="115.67" rx="57.83" ry="57.83"/> </svg> <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" height="55" width="40" xml:space="preserve" viewBox="-20 -27.5 40 55" y="0px" x="0px" id="Layer_1" version="1.1"><metadata id="metadata10"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs8"/> <path style="fill:#fff" d="m -20,27.5 20,-55 20,55 -20,-13 z" class="st0" id="aimArrow"/> </svg> </defs> <circle class="background" r="16" cx="0" cy="0"/> <circle class="background-gradient" r="32" cx="0" cy="0" fill="url(#grad1)"/> <circle class="background-border" r="33" cx="0" cy="0" stroke="black" stroke-width="2" fill="none"/> <circle id="health-display" class="health-display" r="33" cx="0" cy="0"/> <circle class="circle-deadzone" fill="black" fill-opacity="0.8" r="1" cx="0" cy="0" stroke="white" stroke-width="0.3" stroke-dasharray="3.5 1.52"/> <circle class="crosshair-center" r="1" cx="0" cy="0"/> <circle class="circle-border-white" r="32" cx="0" cy="0" stroke="#ffffff" stroke-width="0.3" fill="none"/> <line class="line-helper-left" x1="-32" y1="0" x2="0" y2="0"></line> <line class="line-helper-right" x1="32" y1="0" x2="0" y2="0"></line> <circle class="locked-in-fade" r="17" cx="0" cy="0"/> <line class="locked-in-line" x1="0" y1="0" x2="0" y2="0" display="inline"></line> <use class="aimArrow" xlink:href="#Layer_1" transform="rotate(180)" x="-2" y="-2.5" width="4" height="5"></use> <use class="astro" xlink:href="#Layer_3" transform="translate(-8, -8)" width="16" height="16"></use> <text id="text" class="text" x="0" y="10" text-anchor="middle" font-size="30" stroke="white">H</text> </svg>'),
                    model: new(r().Model)({
                        isTouching: !1,
                        angle: 0,
                        vector: {
                            x: 0,
                            y: 0
                        },
                        touchBuffer: 5
                    }),
                    events: {
                        "mousedown .range-picker": "start",
                        "touchstart .range-picker": "start",
                        "touchmove .range-picker": "start",
                        touchmove: "move",
                        touchend: "end"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: "lockedIn",
                                onGet: t => t ? "lockedIn" : ""
                            }]
                        },
                        ".background": {
                            attributes: [{
                                name: "style",
                                observe: "accentColor",
                                onGet: t => `stroke: ${t}`
                            }]
                        },
                        ".health-display": {
                            attributes: [{
                                name: "style",
                                observe: ["selector", "accentColor"],
                                onGet(t) {
                                    let e = "";
                                    const i = t[0],
                                        s = t[1];
                                    return s && (e += `stroke:${s};`), e += `stroke-dasharray:${207*i} ${207*(1-i)};`, e += `transform:rotate(${-360*i-90}deg);`, e
                                }
                            }]
                        },
                        ".line-helper-left": {
                            attributes: [{
                                name: "display",
                                observe: "lockedIn",
                                onGet: t => t ? "none" : "inline"
                            }, {
                                name: "x2",
                                observe: "vector",
                                onGet: t => t ? t.x : 1
                            }, {
                                name: "y2",
                                observe: "vector",
                                onGet: t => t ? t.y : 1
                            }]
                        },
                        ".line-helper-right": {
                            attributes: [{
                                name: "display",
                                observe: "lockedIn",
                                onGet: t => t ? "none" : "inline"
                            }, {
                                name: "x2",
                                observe: "vector",
                                onGet: t => t ? t.x : 1
                            }, {
                                name: "y2",
                                observe: "vector",
                                onGet: t => t ? t.y : 1
                            }]
                        },
                        ".locked-in-line": {
                            attributes: [{
                                name: "display",
                                observe: "lockedIn",
                                onGet: t => t ? "inline" : "none"
                            }, {
                                name: "x2",
                                observe: "vector",
                                onGet: t => t ? t.x : 1
                            }, {
                                name: "y2",
                                observe: "vector",
                                onGet: t => t ? t.y : 1
                            }]
                        },
                        ".circle-deadzone": {
                            attributes: [{
                                name: "r",
                                observe: "isTouching",
                                onGet: t => "9.6"
                            }]
                        },
                        ".text": "text",
                        ".astro": {
                            attributes: [{
                                name: "style",
                                observe: ["accentColor", "lockedIn"],
                                onGet(t) {
                                    let e = "";
                                    return e += `fill:${t[1]?"black":t[0]};`, e += `stroke:${t[1]?"#cccccc":"#ff00ff"};`, e
                                }
                            }, {
                                name: "x",
                                observe: "vector",
                                onGet: t => t ? t.x : 1
                            }, {
                                name: "y",
                                observe: "vector",
                                onGet: t => t ? t.y : 1
                            }, {
                                name: "width",
                                observe: "lockedIn",
                                onGet: t => t ? 8 : 16
                            }, {
                                name: "height",
                                observe: "lockedIn",
                                onGet: t => t ? 8 : 16
                            }, {
                                name: "transform",
                                observe: "lockedIn",
                                onGet: t => t ? "translate(-4, -4)" : "translate(-8,-8)"
                            }]
                        },
                        ".locked-in-fade": {
                            attributes: [{
                                name: "display",
                                observe: "lockedIn",
                                onGet: t => t ? "inline" : "none"
                            }]
                        },
                        ".aimArrow": {
                            attributes: [{
                                name: "transform",
                                observe: "angle",
                                onGet(t) {
                                    let e = "";
                                    return e += ` rotate(${t+180})`, e
                                }
                            }, {
                                name: "display",
                                observe: ["lockedIn", "vector"],
                                onGet(t) {
                                    return t[0] && this.getDistance(t[1]) > 0 ? "inline" : "none"
                                }
                            }]
                        }
                    },
                    initialize() {
                        this.model.on("change:angle", this.updateAngle, this), this.model.on("change:vector", this.updateVector, this), this.model.on("change:isTouching", this.updateIsTouching, this)
                    },
                    updateAngle() {
                        this.triggerMethod("angle", this.model.get("angle"))
                    },
                    updateVector() {
                        this.triggerMethod("vector", this.getNormalizedVector())
                    },
                    updateIsTouching() {
                        this.triggerMethod("isTouching", this.model.get("isTouching"))
                    },
                    onRender() {
                        this.stickit()
                    },
                    start(t) {
                        const e = this.eventToCoord(t);
                        this.startCoord || (this.startCoord = e)
                    },
                    move(t) {
                        t.preventDefault();
                        const e = this.eventToCoord(t);
                        if (!this.model.get("isTouching") && this.startCoord && this.getDistance(e, this.startCoord) > this.model.get("touchBuffer") && this.model.set("isTouching", !0), !this.model.get("isTouching")) return;
                        if (this.model.get("lockedIn")) return;
                        const i = this.coordToVector(e);
                        this.model.set("vector", i);
                        const s = this.coordToAngle(e);
                        this.model.set("angle", s)
                    },
                    end() {
                        this.startCoord = null, this.model.get("isTouching") && (this.model.set("isTouching", !1), this.triggerMethod("end", this.model))
                    },
                    getDistance(t, e) {
                        e || (e = {
                            x: 0,
                            y: 0
                        });
                        const i = e.x - t.x,
                            s = e.y - t.y;
                        return Math.sqrt(i ** 2 + s ** 2)
                    },
                    getNormalizedVector() {
                        const t = a().extend({}, this.model.get("vector"));
                        return t.x /= 32, t.y /= 32, t
                    },
                    eventToCoord(t) {
                        const e = this.$el[0].getBoundingClientRect();
                        return t.targetTouches && t.targetTouches instanceof TouchList && t.targetTouches.length > 0 ? {
                            x: t.targetTouches[0].pageX - e.left,
                            y: t.targetTouches[0].pageY - e.top
                        } : {
                            x: t.clientX - e.left,
                            y: t.clientY - e.top
                        }
                    },
                    coordToAngle(t) {
                        const e = this.coordToVector(t);
                        let i = Math.atan2(-e.x, e.y);
                        return i += Math.PI, i = parseInt(180 * i / Math.PI, 10), i
                    },
                    coordToVector(t) {
                        const e = this.$el[0].getBoundingClientRect(),
                            i = {
                                x: t.x - parseInt(e.width, 10) / 2,
                                y: t.y - parseInt(e.height, 10) / 2
                            },
                            s = 76 / e.width;
                        i.x *= s, i.y *= s;
                        const o = this.getDistance(i);
                        if (o > 32) {
                            const t = 32 / o;
                            i.x *= t, i.y *= t
                        }
                        return i
                    }
                }),
                V = f.S.extend({
                    defaults: {
                        shotId: void 0,
                        state: "Shoot",
                        throttle: 44,
                        weapon: {},
                        playerCanSwap: !1,
                        characterCurrentHealth: null,
                        characterMaxHealth: null,
                        lockedIn: !1,
                        selectorCircle: !0,
                        classes: [],
                        message: ""
                    }
                }),
                G = d().View.extend({
                    model: new V,
                    template: a().template('<div id="status-bar" class="health text"> <div id="weaponBorder" class="weaponBorder"> <div id="weaponIcon" class="weaponIcon"></div> </div> </div> <div id="radial" class="radial"></div> <div id="control-panel" class="control-panel"> <div class="message text">message</div> <div class="weaponNameContainer text"> <div class="weaponIcon small"></div> <span class="weaponName">weapon name</span> </div> <div class="weaponText text">weapon text</div> </div>'),
                    className: "Shoot",
                    regions: {
                        radial: "#radial"
                    },
                    events: {
                        "click .swap-button": "swapPlayer",
                        touchstart: "eat",
                        "click #reconnect": "reconnect"
                    },
                    eat(t) {
                        t.preventDefault()
                    },
                    move(t) {
                        this.radialComponent.move(t)
                    },
                    end(t) {
                        this.radialComponent.end(t)
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: t => t && t.bgcolor ? `background-color:${t.bgcolor}` : ""
                            }]
                        },
                        ".swap-button": {
                            observe: "playerCanSwap",
                            visible: !0
                        },
                        ".health": {
                            observe: "characterCurrentHealth",
                            visible: t => !(null === t)
                        },
                        ".currentHealth": "characterCurrentHealth",
                        ".maxHealth": "characterMaxHealth",
                        ".weaponText": {
                            observe: "weapon",
                            onGet: t => t.text
                        },
                        ".message": "message",
                        ".weaponBorder": {
                            attributes: [{
                                name: "class",
                                observe: "weapon",
                                onGet: t => t ? t.count ? `count-${t.count}` : "" : null
                            }]
                        },
                        ".weaponIcon": {
                            attributes: [{
                                name: "class",
                                observe: "weapon",
                                onGet: t => t ? t.id : ""
                            }]
                        },
                        ".weaponName": {
                            observe: "weapon",
                            onGet: t => t ? t.name ? t.name : t.id : ""
                        }
                    },
                    onChildviewVector(t) {
                        this.throttledUpdate && this.throttledUpdate(t)
                    },
                    updateVector(t) {
                        this.model.get("isAudience") || 0 === t.x && 0 === t.y || this.radialComponent.model.get("isTouching") && this.triggerMethod("client:message", {
                            action: "move",
                            type: "move",
                            vector: t
                        })
                    },
                    onChildviewEnd() {
                        if (this.model.get("lockedIn")) return;
                        const t = this.radialComponent.getNormalizedVector();
                        if (Math.sqrt(t.x * t.x + t.y * t.y) < .3) return this.radialComponent.model.set("vector", {
                            x: 0,
                            y: 0
                        }), this.radialComponent.model.set("angle", 180), void(this.model.get("isPlayer") && this.triggerMethod("client:message", {
                            action: "cancel",
                            type: "cancel"
                        }));
                        const e = this.model.get("weapon"),
                            i = e.id ? e.id : this.model.get("weapon"),
                            s = this.radialComponent.model.get("angle"),
                            o = Math.floor(s / 10);
                        this.triggerMethod("client:message", {
                            action: "fire",
                            type: "fire",
                            weapon: i,
                            vector: t
                        }), this.model.get("isAudience") && (this.audienceShot = 10 * o, this.shotId = this.model.get("shotId") || 0, this.model.setUpdate({
                            lockedIn: !0,
                            shotId: this.shotId
                        }))
                    },
                    initialize() {
                        this.radialComponent = new A({
                            model: new(r().Model)({
                                isTouching: !1,
                                angle: 0,
                                vector: {
                                    x: 0,
                                    y: 0
                                },
                                touchBuffer: 5
                            })
                        }), this.throttledUpdate = a().throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), o()(window).on("mousemove", this.move.bind(this)), o()(window).on("mouseup", this.end.bind(this))
                    },
                    onBeforeDestroy() {
                        window.removeEventListener("resize", this.onResizeWithContext), o()(window).off("mousemove"), o()(window).off("mouseup")
                    },
                    update() {
                        const t = this.model.get("characterCurrentHealth"),
                            e = this.model.get("characterMaxHealth");
                        if (this.radialComponent.model.set("selector", t / e), this.radialComponent.model.set("accentColor", this.model.get("characterColor")), this.radialComponent.model.set("lockedIn", this.model.get("lockedIn")), this.radialComponent.model.set("text", ""), p.app.client.isRole("audience") && (void 0 !== this.model.get("shotId") && this.model.get("shotId") === this.shotId || (this.audienceShot = void 0), this.audienceShot && (this.model.setUpdate({
                                lockedIn: !0,
                                shotId: this.model.get("shotId") || 0
                            }), this.radialComponent.model.set("text", `${this.audienceShot}°`))), this.model.get("lockedIn") || this.radialComponent.model.get("isTouching") || this.radialComponent.model.set("vector", {
                                x: 0,
                                y: 0
                            }), this.throttledUpdate = a().throttle(this.updateVector, this.model.get("throttle")), 0 != !this.model.get("lockedIn")) {
                            if (!this.notified && "Shoot" === this.model.get("state")) {
                                const t = {
                                    ClusterBombs: [45, 60, 45, 60, 45, 60],
                                    PlayerWeapon: [100, 100],
                                    RainbowCannon: [45, 60, 45, 60, 45, 60],
                                    Repeater: [45, 60, 45, 60, 45, 60],
                                    Seeker: [45, 60, 45, 60, 45, 60],
                                    Shield: [45, 60, 45, 60, 45, 60],
                                    Stun: [45, 60, 45, 60, 45, 60],
                                    SuperBlaster: [45, 60, 45, 60, 45, 60]
                                } [this.model.get("weapon").id];
                                m.b.vibrate(t)
                            }
                            this.notified = !0
                        } else this.notified = !1
                    },
                    onRender() {
                        this.showChildView("radial", this.radialComponent), this.stickit()
                    },
                    onAttach() {
                        this.update(), this.onResize(), m.b.vibrate()
                    },
                    onResize() {
                        const t = o()(".radial"),
                            e = o()("#status-bar").outerHeight() + o()(".playerTopBar").outerHeight() + o()("#control-panel").outerHeight() + 10,
                            i = o()(".controller-page").width(),
                            s = window.innerHeight - e,
                            n = Math.max(150, Math.min(i, s));
                        t.css("width", `${n}px`), t.css("height", `${n}px`), window.scrollTo(0, 0)
                    }
                });
            var B = i(47214),
                D = i(266);

            function N(t, e, i, s, o, n, a) {
                try {
                    var l = t[n](a),
                        r = l.value
                } catch (t) {
                    return void i(t)
                }
                l.done ? e(r) : Promise.resolve(r).then(s, o)
            }

            function P(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function z(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? P(Object(i), !0).forEach((function(e) {
                        U(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : P(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }

            function U(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const j = d().View.extend({
                appId: "main",
                appTag: "main",
                appVersion: "4.2.4",
                currentState: null,
                currentLayout: null,
                template: a().template(D.Z),
                playerTopBar: null,
                className() {
                    return `pt-page ${this.getOption("appTag")}`
                },
                regions: {
                    player: "#playerRegion",
                    controller: {
                        el: "#controller-main",
                        replaceElement: !0
                    }
                },
                events: {
                    "click .twitchBroadcasterIcon": "onTwitchBroadcasterIconClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: "blob",
                            onGet(t) {
                                let e = `pt-page ${this.getOption("appTag")}`;
                                return t && t.locale && (e += ` ${t.locale}`), e
                            }
                        }]
                    },
                    ".twitchBroadcasterIcon": {
                        observe: ["broadcaster", "blob"],
                        visible: !0,
                        onGet(t) {
                            let [e, i] = t;
                            return e && i && !i.artifact && ["Lobby", "Logo"].includes(i.state)
                        }
                    }
                },
                initialize(t) {
                    this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.playerTopBar = this.playerTopBar || new v.p, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), p.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), p.app.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), p.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), p.app.client.on("client:disconnected", this.onDisconnectedWithContext), p.app.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new(r().Model)({});
                    const e = p.app.client.parseEntities();
                    this.model.set(e), this.model.on({
                        "change:player": this.setBlob,
                        "change:room": this.setBlob,
                        "change:audiencePlayer": this.setBlob,
                        "change:blob": this.update
                    }, this), this.render(), this.setBlob(), p.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), window.addEventListener("resize", this.onResize)
                },
                onRender() {
                    this.update(), this.stickit()
                },
                onAttach() {
                    this.showChildView("player", this.playerTopBar), this.onResize(), p.app.client.isRole("broadcaster") && (this.model.set("broadcaster", p.app.client.isRole("broadcaster")), this.showTwitchBroadcasterDialog(2e4))
                },
                onBeforeDestroy() {
                    this.model.stopListening(), p.app.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), p.app.client.off("client:textDescriptions", this.onTextDescriptionsWithContext), p.app.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), p.app.client.off("client:disconnected", this.onDisconnectedWithContext), p.app.client.off("client:connection", this.onConnectionMessageWithContext)
                },
                updateLayout() {
                    const t = this.model.get("blob").state;
                    if (-1 !== this.getGameLayout(t)) return null;
                    switch (t) {
                        case "Draw":
                            return this.setLayout(b.d);
                        case "EnterSingleText":
                            return this.setLayout(C.G);
                        case "Lobby":
                            return this.setLayout(w.W);
                        case "Logo":
                            return this.setLayout(y.s);
                        case "MakeSingleChoice":
                            return this.setLayout(k.E);
                        case "Shoot":
                            return this.setLayout(G);
                        case "Sortable":
                            return this.setLayout(L);
                        case "Camera":
                            return this.setLayout(O.i);
                        case "UGC":
                            return this.setLayout(M.a);
                        default:
                            return new Error("No common layout found")
                    }
                },
                setLayout(t) {
                    const e = new t,
                        i = this.getRegion("controller");
                    i && (i.reset(), e.model.set(this.model.get("blob")), this.showChildView("controller", e), this.currentLayout = e, this.currentState = this.model.get("blob").state)
                },
                onEntityDidChange(t, e) {
                    this.model.unset(t, {
                        silent: !0
                    }), this.model.set(t, e)
                },
                onTextDescriptions(t, e) {
                    this.setTextDescriptions(e.latestDescriptions)
                },
                setBlob() {
                    const t = this.model.get("player"),
                        e = this.model.get("room"),
                        i = this.model.get("audiencePlayer");
                    let s = {};
                    s = t && !a().isEmpty(t) ? z(z({}, a().omit(e, "audience")), t) : p.app.client.isRole("audience") && i ? z(z({}, a().omit(e, "audience")), i.audience) : p.app.client.isRole("audience") && e && e.audience ? z(z({}, a().omit(e, "audience")), e.audience) : e || {}, s.isPlayer = p.app.client.isRole("player"), s.isAudience = p.app.client.isRole("audience"), s = this.parseBlob(s), !s.state && s.isAudience && (s.state = "Logo"), p.app.storage && p.app.storage.isSupported && s.platformId && p.app.storage.setTag(`platform-${s.platformId}`), s.locale && "string" == typeof s.locale && (this.locale = s.locale), this.model.set({
                        blob: s
                    })
                },
                update: a().debounce((function() {
                    const t = this.model.get("blob");
                    t && (this.willUpdate(), t.playerInfo ? this.playerTopBar.model.set(t.playerInfo) : this.playerTopBar.model.clear(), this.currentState && this.currentState === t.state ? this.currentLayout && this.currentLayout.model.set(t) : (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(t), this.throttledTrackScreenView || (this.throttledTrackScreenView = a().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), t.textDescriptions && this.setTextDescriptions(t.textDescriptions), B.E.update(this.getOption("appTag"), t), t.artifact && u.Q.add(t.artifact, p.app.client.appTag), this.didUpdate())
                }), 25),
                willUpdate() {},
                didUpdate() {},
                trackScreenView() {
                    p.app.analytics.trackScreenView(this.getOption("appTag")), p.app.storage && p.app.storage.isSupported && p.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onChildviewTrackEvent(t) {
                    p.app.analytics.trackEvent({
                        category: t.category,
                        action: t.action,
                        label: this.getOption("appTag")
                    })
                },
                setTextDescriptions(t) {
                    t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach((t => {
                        void 0 !== t.id && this.textDescriptions.slice(-10).find((e => e.id === t.id)) || (this.textDescriptions.push(t), o()("#textDescriptions").append(o()("<p />").text(t.text)))
                    })))
                },
                parseBlob: t => t,
                getGameLayout: () => -1,
                formatSessionMessage: t => t,
                onTwitchBroadcasterIconClick() {
                    this.showTwitchBroadcasterDialog()
                },
                showTwitchBroadcasterDialog(t) {
                    let e = `\n            <div class='icon-${p.app.client.roles.broadcaster.platform}'>\n                ${p.app.client.roles.broadcaster.name}\n            </div>`;
                    e += "\n            <div class='success'>\n                You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.\n            </div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : p.app.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), m.b.show("custom", {
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
                        closeButtonHtml: '\n                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M20 2.00006L2 20" stroke="#0C0C0C" stroke-width="3"></path>\n                    <path d="M2 2.00001L20 20" stroke="#0C0C0C" stroke-width="3" />\n                </svg>',
                        showConfirmButton: !1,
                        showClass: {
                            popup: "jbgTwitchShow"
                        },
                        hideClass: {
                            popup: "jbgTwitchHide"
                        }
                    })
                },
                onResize() {
                    const t = o()(window).width(),
                        e = o()(window).height();
                    o()(".content,.controller-page").css({
                        height: e,
                        width: t
                    })
                },
                onRoomWasDestroyed() {
                    p.app.storage && p.app.storage.isSupported && (p.app.storage.remove("roomCode"), p.app.storage.remove("reconnect")), m.b.show("error", {
                        titleText: g[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
                        text: g[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected() {
                    m.b.show("error", {
                        titleText: g[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
                        text: g[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage(t) {
                    const e = `${t.status} ${t.attempt?`${t.attempt}/5`:""}`;
                    if (m.b.show("toast", {
                            text: e
                        }), "connected" === t.status) {
                        const t = p.app.client.parseEntities();
                        this.model.set(t)
                    }
                },
                onChildviewClientMessage(t) {
                    var e, i = this;
                    return (e = function*() {
                        if (p.app.client.isRole("player"))
                            if (t.textKey) try {
                                yield p.app.client.updateText(t.textKey, t.val)
                            } catch (e) {
                                if (e instanceof c.EcastEntityNotFound || e instanceof c.EcastPermissionDenied) console.error(`Couldn't update text entity ${t.textKey}: ${e.message}`);
                                else {
                                    if (!(e instanceof c.EcastFilterError)) throw console.error(`Unhandled error updating text entity ${t.textKey}`), e;
                                    i.currentLayout.onTextFilterError && i.currentLayout.onTextFilterError(e)
                                }
                            } else if (t.objectKey) try {
                                yield p.app.client.updateObject(t.objectKey, t.val)
                            } catch (e) {
                                if (e instanceof c.EcastEntityNotFound || e instanceof c.EcastPermissionDenied) console.error(`Couldn't update object entity ${t.objectKey}: ${e.message}`);
                                else {
                                    if (!(e instanceof c.EcastFilterError)) throw console.error(`Unhandled error updating object entity ${t.objectKey}`), e;
                                    i.currentLayout.onObjectFilterError && i.currentLayout.onObjectFilterError(e)
                                }
                            } else {
                                const e = i.formatSessionMessage(t);
                                p.app.client.send("SendMessageToRoomOwner", e)
                            } else if (p.app.client.isRole("audience")) {
                                const e = i.currentLayout.sessionModule,
                                    s = i.formatSessionMessage(t);
                                if (!e) return;
                                if ("vote" === e) {
                                    const t = i.currentLayout.model.get("countGroupName"),
                                        e = s.vote;
                                    i.onChildviewClientCountGroup({
                                        name: t,
                                        vote: e
                                    })
                                }
                                if ("comment" === e) {
                                    const t = i.currentLayout.model.get("textRingName"),
                                        e = s.entry;
                                    i.onChildviewClientTextRing({
                                        name: t,
                                        text: e
                                    })
                                }
                            }
                    }, function() {
                        var t = this,
                            i = arguments;
                        return new Promise((function(s, o) {
                            var n = e.apply(t, i);

                            function a(t) {
                                N(n, s, o, a, l, "next", t)
                            }

                            function l(t) {
                                N(n, s, o, a, l, "throw", t)
                            }
                            a(void 0)
                        }))
                    })()
                },
                onChildviewClientSessionMessage(t) {
                    p.app.client.sessionSend(t.sessionModule, t.sessionName, t.sessionMessage)
                },
                onChildviewClientCountGroup(t) {
                    let {
                        name: e,
                        vote: i
                    } = t;
                    e || (e = this.sessionModulePrefix + this.currentLayout.sessionName), p.app.client.incrementCountGroupCounter(e, i)
                },
                onChildviewClientGCounter(t) {
                    let {
                        key: e,
                        times: i
                    } = t;
                    p.app.client.incrementGCounter(e, i)
                },
                onChildviewClientTextRing(t) {
                    let {
                        name: e,
                        text: i
                    } = t;
                    e || (e = this.sessionModulePrefix + this.currentLayout.sessionName), p.app.client.pushTextRing(e, i)
                }
            })
        },
        97079: (t, e, i) => {
            "use strict";
            i.d(e, {
                E: () => w
            });
            var s = i(19755),
                o = i.n(s),
                n = i(13469),
                a = i.n(n),
                l = i(72316),
                r = i.n(l),
                c = i(63574),
                h = i.n(c),
                d = i(86455),
                p = i.n(d),
                m = i(40543),
                u = i(9659),
                g = i(24475),
                v = i(29014),
                b = i(66246);
            const C = u.S.extend({
                    defaults: {
                        choiceId: void 0,
                        type: "single",
                        censorDialog: "none",
                        chosen: null,
                        choices: [],
                        prompt: {},
                        error: null,
                        block: !0,
                        classes: [],
                        maxVotes: 16,
                        doneText: {},
                        announcePrompt: !1,
                        countGroupName: null,
                        strings: {
                            your_choice: "Thank you. Your choice: ",
                            censor_prompt: "Censor this?",
                            censor_confirm: "Yes, Censor!",
                            censor_cancel: "No!"
                        }
                    }
                }),
                w = h().View.extend({
                    className: "MakeSingleChoice scrollable",
                    template: a().template(b.Z),
                    model: new C,
                    sessionModule: "vote",
                    sessionName: " Vote",
                    regions: {
                        prompt: "#prompt",
                        choices: "#choicesRegion"
                    },
                    bindings: {
                        ".chosen": {
                            observe: "chosen",
                            updateMethod: "html",
                            onGet: t => t ? t.html ? t.html : o()("<div />").text(t.text).html() : null
                        },
                        ".choices": {
                            observe: "chosen",
                            visible: t => "" === t || null === t
                        },
                        ".error": {
                            observe: "error",
                            visible: !0,
                            updateView: !0
                        },
                        ".makeSingleChoiceDone": {
                            observe: "chosen",
                            visible: t => null !== t && "" !== t
                        },
                        ".doneText": {
                            observe: "doneText",
                            updateMethod: "html",
                            onGet: t => t ? t.html ? t.html : o()("<div />").text(t.text).html() : null
                        },
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: t => t && t.bgColor ? `background-color: ${t.bgColor}` : ""
                            }, {
                                name: "class",
                                observe: "classes",
                                onGet: t => t ? t.join(" ") : ""
                            }]
                        },
                        ".choice-button": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: t => t && t.buttonColor ? `background-color:${t.buttonColor}` : null
                            }]
                        }
                    },
                    initialize() {
                        this.promptComponent = this.promptComponent || new g.y({
                            model: new(r().Model)
                        }), this.choicesList = this.choicesList || new v.C({
                            action: "choose",
                            collection: new(r().Collection)
                        }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
                    },
                    onBeforeDestroy() {
                        "multiple" === this.model.get("type") && this.onChildviewChildviewButtonSubmit()
                    },
                    update() {
                        this.promptComponent.model.clear({
                            silent: !0
                        }).set(this.model.get("prompt")), this.choicesList.options.block = this.model.get("block"), this.choicesList.collection.set(this.model.get("choices")), "multiple" === this.model.get("type") && a().all(this.model.get("choices"), (t => !t.disabled)) && this.choicesList.collection.push({
                            text: "Submit",
                            action: "submit",
                            block: !1
                        }), this.model.get("isAudience") && (void 0 !== this.model.get("choiceId") && this.model.get("choiceId") === this.getOption("choiceId") || (this.selected = [], this.audienceChoice = void 0, this.votesLeft = void 0), this.selected.length > 0 && ("multiple" === this.model.get("type") ? this.choicesList.children.forEach((t => {
                            void 0 !== this.selected.find((e => e === t.getOption("index"))) && t.model.set("selected", !0)
                        })) : this.model.setUpdate({
                            chosen: this.displayAudienceChoice(this.selected),
                            choiceId: this.model.get("choiceId") || 0
                        }))), this.choiceId = this.model.get("choiceId") || 0, this.stickit()
                    },
                    onRender() {
                        this.showChildView("prompt", this.promptComponent), this.showChildView("choices", this.choicesList), this.stickit()
                    },
                    onAttach() {
                        this.update(), m.b.vibrate()
                    },
                    onChildviewChildviewButtonChoose(t) {
                        const e = t.get("action") || "choose",
                            i = t.get("index"),
                            s = this.model.get("type");
                        switch (this.choicesList.children.forEach((t => {
                                t.model.set("disabled", "single" === s), t.model.set("active", !1)
                            })), s) {
                            case "multiple":
                                if (this.model.get("toggle") ? t.set("selected", !t.get("selected")) : t.set("selected", !0), this.model.get("isAudience")) {
                                    const t = [];
                                    this.choicesList.children.forEach((e => {
                                        e.model.get("selected") && t.push(e.getOption("index"))
                                    })), this.selected = t
                                }
                                return !1;
                            case "repeating":
                                if (void 0 === this.votesLeft && (this.votesLeft = this.model.get("maxVotes")), this.delaySubmit) return !1;
                                if (this.votesLeft <= 0 && this.model.get("isAudience")) return !1;
                                this.delaySubmit = !0, window.setTimeout((() => {
                                    this.delaySubmit = !1
                                }), 101), this.votesLeft -= 1;
                                break;
                            case "single":
                                t.set("selected", !0), t.set("active", !0)
                        }
                        return this.model.get("isPlayer") ? this.triggerMethod("client:message", {
                            action: e,
                            choice: i
                        }) : this.model.get("isAudience") && (this.selected = [t.get("index")], this.triggerMethod("client:countGroup", {
                            name: this.model.get("countGroupName"),
                            vote: i
                        }), "repeating" !== s && this.model.setUpdate({
                            chosen: this.displayAudienceChoice(this.selected),
                            choiceId: this.choiceId
                        })), !1
                    },
                    displayAudienceChoice(t) {
                        let e = "Thank you.";
                        const i = t.map((t => {
                            const e = this.choicesList.children.find((e => e.model.get("index") === t));
                            return e ? e.model.get("html") || e.model.get("text") : ""
                        }));
                        return void 0 !== t && this.model.get("strings") && (e = this.model.get("strings").your_choice + i.join(", ")), {
                            html: e
                        }
                    },
                    onChildviewChildviewButtonCensor(t) {
                        const e = t.get("index"),
                            i = t.get("html");
                        if ("confirm" === this.model.get("censorDialog")) t.get("isWarned") ? this.triggerMethod("client:message", {
                            action: "censor",
                            choice: e
                        }) : t.set("isWarned", !0);
                        else {
                            if ("warning" === this.model.get("censorDialog")) return p().close(), p().fire({
                                customClass: {
                                    popup: "Dialog",
                                    container: "container",
                                    content: "content",
                                    title: "title",
                                    closeButton: "button closeButton",
                                    cancelButton: "button cancelButton",
                                    confirmButton: "button confirmButton",
                                    denyButton: "button denyButton"
                                },
                                title: this.model.get("strings").censor_prompt,
                                text: i,
                                showCancelButton: !0,
                                confirmButtonText: this.model.get("strings").censor_confirm,
                                cancelButtonText: this.model.get("strings").censor_cancel,
                                confirmButtonColor: "#900"
                            }).then((t => {
                                t.value && this.triggerMethod("client:message", {
                                    action: "censor",
                                    choice: e
                                })
                            })), !1;
                            this.triggerMethod("client:message", {
                                action: "censor",
                                choice: e
                            })
                        }
                        return !1
                    },
                    onChildviewChildviewButtonSubmit() {
                        let t = [];
                        this.choicesList.children.forEach((e => {
                            e.model.get("selected") && t.push(e.getOption("index"))
                        }));
                        const e = t.join(",");
                        this.model.get("isPlayer") ? this.triggerMethod("client:message", {
                            action: "submit",
                            choice: e
                        }) : this.model.get("isAudience") && (this.triggerMethod("client:countGroup", {
                            name: this.model.get("countGroupName"),
                            vote: e
                        }), "repeating" !== this.model.get("type") && (t = [], this.choicesList.children.forEach((e => {
                            e.model.get("selected") && t.push(e.getOption("index"))
                        })), this.selected = t, this.model.setUpdate({
                            chosen: this.displayAudienceChoice(this.selected),
                            choiceId: this.choiceId
                        })))
                    }
                })
        },
        59965: (t, e, i) => {
            "use strict";
            i.d(e, {
                p: () => c
            });
            var s = i(13469),
                o = i.n(s),
                n = i(72316),
                a = i.n(n),
                l = i(63574),
                r = i.n(l);
            i(70989);
            const c = r().View.extend({
                className: "playerTopBarView",
                template: o().template('<div id="player" class="playerTopBar"> <div id="playericon" class="playerIcon"></div> <div id="playername" class="playerName controller-text"></div> </div>'),
                model: new(a().Model),
                bindings: {
                    ":el": {
                        observe: ["username", "hidden"],
                        visible: t => t[0] && !t[1],
                        attributes: [{
                            name: "class",
                            observe: "classes",
                            onGet: t => (t || []).join(" ")
                        }]
                    },
                    "#playername": {
                        observe: "username",
                        attributes: [{
                            name: "style",
                            observe: "textColor",
                            onGet: t => t ? `color: ${t}` : ""
                        }]
                    },
                    ".playerTopBar": {
                        observe: "username",
                        visible: !0,
                        attributes: [{
                            name: "style",
                            observe: "topBarColor",
                            onGet: t => t ? `background-color: ${t}` : ""
                        }]
                    },
                    "#playericon": {
                        observe: "avatar",
                        visible: !0,
                        attributes: [{
                            name: "class",
                            observe: "avatar"
                        }]
                    }
                },
                onRender() {
                    this.stickit()
                }
            })
        },
        97718: (t, e, i) => {
            "use strict";

            function s(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            i.d(e, {
                v: () => o
            });
            class o {
                constructor(t, e, i) {
                    s(this, "options", void 0), s(this, "canvas", void 0), s(this, "canvasCTX", void 0), s(this, "tipCanvas", void 0), s(this, "tipCanvasCTX", void 0), s(this, "lines", []), s(this, "image", void 0), s(this, "startX", null), s(this, "startY", null), s(this, "smoothedMouseX", null), s(this, "smoothedMouseY", null), s(this, "lastMouse", {}), s(this, "lastMouseChangeVector", {}), s(this, "lastSmoothedMouse", {}), s(this, "lastThickness", void 0), s(this, "lastRotation", void 0), s(this, "colorLevel", void 0), this.options = i, this.canvas = document.createElement("canvas"), this.canvas.width = t, this.canvas.height = e, this.canvasCTX = this.canvas.getContext("2d"), this.tipCanvas = document.createElement("canvas"), this.tipCanvas.width = t, this.tipCanvas.height = e, this.tipCanvasCTX = this.tipCanvas.getContext("2d")
                }
                addLine(t, e, i, s) {
                    this.lines.push({
                        thickness: t,
                        color: e,
                        highlighter: i,
                        points: []
                    }), this.addPoint(s), this.update()
                }
                updateSize(t, e) {
                    this.canvas.width = t, this.canvas.height = e
                }
                addPoint(t) {
                    const e = {
                            x: parseInt(t.x, 10),
                            y: parseInt(t.y, 10)
                        },
                        i = this.lines[this.lines.length - 1];
                    if (i && i.points) {
                        if (0 !== i.points.length) {
                            const t = i.points[i.points.length - 1];
                            if (t.x === e.x && t.y === e.y) return
                        }
                        i.points.push(e), 2 === i.points.length && i.points.unshift(i.points[1]), this.update()
                    }
                }
                setLines(t) {
                    const e = t.map((t => {
                        let e = t.points;
                        return e = "string" == typeof e ? t.points.split("|").map((t => ({
                            x: parseInt(t.split(",")[0], 10),
                            y: parseInt(t.split(",")[1], 10)
                        }))) : e.map((t => ({
                            x: parseInt(t.x, 10),
                            y: parseInt(t.y, 10)
                        }))), {
                            color: t.color,
                            thickness: t.thickness,
                            points: e
                        }
                    }));
                    this.lines = e, this.update()
                }
                setImage(t) {
                    this.image = t, this.update()
                }
                reset() {
                    this.lines = [], this.image = null, this.update()
                }
                getLastLine() {
                    const t = this.lines[this.lines.length - 1];
                    return t ? {
                        thickness: t.thickness,
                        color: t.color,
                        points: t.points.map((t => `${t.x},${t.y}`)).join("|")
                    } : null
                }
                getLines() {
                    return this.lines.map((t => ({
                        thickness: t.thickness,
                        color: t.color,
                        points: t.points.map((t => `${t.x},${t.y}`)).join("|")
                    })))
                }
                update() {
                    this.canvasCTX && this.canvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height), this.tipCanvasCTX && this.tipCanvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height), this.image && this.canvasCTX.drawImage(this.image, 0, 0), this.lines && this.lines.forEach((t => this.drawLine(t)))
                }
                startLineInContext(t, e, i) {
                    const s = t * this.options.minThickness;
                    this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(e, i, s * this.options.dotMultiplier, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.options.cappedEnds && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.lastMouseChangeVector = {
                        x: 0,
                        y: 0
                    }, this.startX = e, this.lastMouse.x = e, this.smoothedMouseX = e, this.lastSmoothedMouse.x = e, this.startY = i, this.lastMouse.y = i, this.smoothedMouseY = i, this.lastSmoothedMouse.y = i, this.lastThickness = s, this.lastRotation = void 0, this.colorLevel = 0
                }
                continueLineInContext(t, e, i) {
                    const s = e - this.lastMouse.x,
                        o = i - this.lastMouse.y;
                    s * this.lastMouseChangeVector.x + o * this.lastMouseChangeVector.y < 0 && (this.tipCanvasCTX && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.smoothedMouseX = this.lastMouse.x, this.lastSmoothedMouse.x = this.lastMouse.x, this.smoothedMouseY = this.lastMouse.y, this.lastSmoothedMouse.y = this.lastMouse.y, this.lastRotation += Math.PI, this.lastThickness *= this.options.tipTaperFactor), this.smoothedMouseX += this.options.smoothingFactor * (e - this.smoothedMouseX), this.smoothedMouseY += this.options.smoothingFactor * (i - this.smoothedMouseY);
                    const n = this.smoothedMouseX - this.lastSmoothedMouse.x,
                        a = this.smoothedMouseY - this.lastSmoothedMouse.y,
                        l = Math.sqrt(n * n + a * a);
                    let r;
                    r = 0 !== l ? Math.PI / 2 + Math.atan2(a, n) : 0;
                    const c = this.options.minThickness * t + this.options.thicknessFactor * l,
                        h = this.lastThickness + this.options.thicknessSmoothingFactor * (c - this.lastThickness);
                    void 0 === this.lastRotation && (this.lastRotation = r);
                    const d = null !== this.lastRotation ? Math.sin(this.lastRotation) : Math.sin(r),
                        p = null !== this.lastRotation ? Math.cos(this.lastRotation) : Math.sin(r),
                        m = Math.sin(r),
                        u = Math.cos(r),
                        g = this.lastThickness * d,
                        v = this.lastThickness * p,
                        b = h * m,
                        C = h * u,
                        w = .33 * l * d,
                        y = -.33 * l * p,
                        k = this.lastSmoothedMouse.x + v + w,
                        f = this.lastSmoothedMouse.y + g + y,
                        x = this.lastSmoothedMouse.x - v + w,
                        T = this.lastSmoothedMouse.y - g + y;
                    this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + v, this.lastSmoothedMouse.y + g), this.canvasCTX.quadraticCurveTo(k, f, this.smoothedMouseX + C, this.smoothedMouseY + b), this.canvasCTX.lineTo(this.smoothedMouseX - C, this.smoothedMouseY - b), this.canvasCTX.quadraticCurveTo(x, T, this.lastSmoothedMouse.x - v, this.lastSmoothedMouse.y - g), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
                    const S = this.options.tipTaperFactor * h;
                    this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(e, i, S, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + C, this.smoothedMouseY + b), this.tipCanvasCTX.lineTo(e + this.options.tipTaperFactor * C, i + this.options.tipTaperFactor * b), this.tipCanvasCTX.lineTo(e - this.options.tipTaperFactor * C, i - this.options.tipTaperFactor * b), this.tipCanvasCTX.lineTo(this.smoothedMouseX - C, this.smoothedMouseY - b), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
                        x: this.smoothedMouseX,
                        y: this.smoothedMouseY
                    }, this.lastRotation = r, this.lastThickness = h, this.lastMouseChangeVector = {
                        x: s,
                        y: o
                    }, this.lastMouse = {
                        x: e,
                        y: i
                    }
                }
                drawLine(t) {
                    if (t && t.color && t.points && t.thickness && this.canvasCTX && this.tipCanvasCTX) {
                        this.canvasCTX.strokeStyle = t.color, this.canvasCTX.lineWidth = this.options.borderWidth, this.canvasCTX.lineCap = "round", this.canvasCTX.lineJoin = "bevel", this.canvasCTX.fillStyle = t.color, this.canvasCTX.strokeStyle = t.color, this.tipCanvasCTX.lineWidth = this.options.borderWidth, this.tipCanvasCTX.fillStyle = t.color, this.tipCanvasCTX.strokeStyle = t.color;
                        for (let e = 0; e < t.points.length; e++) {
                            const i = t.points[e];
                            0 === e && this.startLineInContext(t.thickness, i.x, i.y), this.continueLineInContext(t.thickness, i.x, i.y)
                        }
                        this.canvasCTX.drawImage(this.tipCanvas, 0, 0)
                    }
                }
            }
        },
        93618: (t, e, i) => {
            "use strict";
            i.d(e, {
                e: () => m
            });
            var s = i(19755),
                o = i.n(s),
                n = i(13469),
                a = i.n(n),
                l = i(63574),
                r = i.n(l),
                c = i(97718);

            function h(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const d = {
                color: "#000000",
                thickness: 3,
                highlighter: !1,
                sketchOptions: {
                    minThickness: .5,
                    thicknessFactor: .1,
                    smoothingFactor: .55,
                    thicknessSmoothingFactor: .6,
                    tipTaperFactor: .7,
                    cappedEnds: !1,
                    borderWidth: 2,
                    dotMultiplier: 2
                }
            };
            class p {
                constructor(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    h(this, "canvasSelector", void 0), h(this, "canvas", void 0), h(this, "ctx", void 0), h(this, "options", void 0), h(this, "history", void 0), h(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]), this.canvasSelector = t, this.canvas = o()(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(d, e), this.history = [], this.layerNames.forEach((t => {
                        const e = new c.v(this.canvas.width, this.canvas.height, this.options.sketchOptions);
                        e.name = t, this[t] = e
                    }))
                }
                update() {
                    this.ctx && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.layerNames.forEach((t => {
                        this.ctx.drawImage(this[t].canvas, 0, 0)
                    })))
                }
                updateSize(t) {
                    this.layerNames.forEach((e => {
                        this[e].updateSize(t.width, t.height)
                    }))
                }
                setThickness(t) {
                    this.options.thickness = t
                }
                setColor(t) {
                    this.options.color = t
                }
                getHighlighter() {
                    return !!this.options.highlighter
                }
                setHighlighter(t) {
                    this.options.highlighter = t
                }
                setOptions(t) {
                    const e = Object.assign(d.sketchOptions, t);
                    this.layerNames.forEach((t => {
                        this[t].options = e, this[t].update()
                    })), this.update()
                }
                startLine(t) {
                    (this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch).addLine(this.options.thickness, this.options.color, this.options.highlighter, t)
                }
                moveLine(t) {
                    (this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch).addPoint(t), this.update()
                }
                endLine() {
                    const t = this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch,
                        e = t.lines.pop();
                    e.points && e.points.length > 1 && e.points.push(e.points[e.points.length - 2]), this.options.highlighter ? (this.highlighterSketch.lines.push(e), this.highlighterSketch.update(), this.history.push("highlighterSketch")) : (this.markerSketch.lines.push(e), this.markerSketch.update(), this.history.push("markerSketch")), t.reset(), this.update()
                }
                undoLine() {
                    if (!this.history.length) return;
                    const t = this.history.pop();
                    this[t].lines.pop() && this[t].update()
                }
                isClean() {
                    return !this.history.length
                }
                setLayerLines(t, e) {
                    -1 !== this.layerNames.indexOf(t) ? (this[t].setLines(e), this.update()) : console.error("invalid layer name", t)
                }
                setLayerImage(t, e) {
                    this[t].setImage(e), this.update()
                }
                getLastLine() {
                    return 0 === this.history.length ? null : this[this.history[this.history.length - 1]].getLastLine() || null
                }
                getLines() {
                    return [...this.highlighterSketch.getLines(), ...this.markerSketch.getLines()]
                }
                getDataURL() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    const i = document.createElement("canvas"),
                        s = this.canvas.width * t,
                        o = this.canvas.height * t;
                    i.width = s, i.height = o;
                    const n = i.getContext("2d");
                    return e && (n.fillStyle = e, n.fillRect(0, 0, s, o)), n.drawImage(this.highlighterSketch.canvas, 0, 0, s, o), n.drawImage(this.markerSketch.canvas, 0, 0, s, o), i.toDataURL()
                }
                resetAll() {
                    this.layerNames.forEach((t => {
                        this[t].reset()
                    })), this.update()
                }
            }
            const m = r().View.extend({
                className: "Sketchpad canvasContainer",
                template: a().template('<canvas id="fullLayer" class="sketchpad fullLayer" width="480" height="600" style=""></canvas>'),
                images: {},
                myViewOptions: ["color", "thickness", "background", "image"],
                sketchpad: null,
                bindings: {
                    ".sketchpad": {
                        attributes: [{
                            name: "width",
                            observe: "size",
                            onGet: t => t ? t.width : ""
                        }, {
                            name: "height",
                            observe: "size",
                            onGet: t => t ? t.height : ""
                        }, {
                            name: "style",
                            observe: ["background", "backgroundImageUrl"],
                            onGet(t) {
                                let [e, i] = t, s = "";
                                return i && (s += `background-image:url(${i});`), e && (s += `background-color:${e};`), s
                            }
                        }]
                    }
                },
                events: {
                    "contextmenu canvas": "handleContextMenu",
                    "mousedown canvas": "start",
                    "touchstart canvas": "start",
                    "mousemove canvas": "move",
                    "touchmove canvas": "move"
                },
                initialize(t) {
                    this.color = "black", this.thicknessScale = -1, this.mergeOptions(t, this.myViewOptions), this.model.on("change:size", this.onUpdateSize, this), this.endWithContext = this.end.bind(this)
                },
                onUpdateSize() {
                    this.sketchpad && this.sketchpad.updateSize(this.model.get("size"))
                },
                onRender() {
                    this.stickit(), document.addEventListener("touchend", this.endWithContext), document.addEventListener("mouseup", this.endWithContext)
                },
                onAttach() {
                    const t = `sketchpad-${this.model.cid}`;
                    this.$("#fullLayer").addClass(t), this.sketchpad = new p(`#fullLayer.${t}`), this.model.get("thicknesses") ? 1 === this.model.get("thicknesses").length && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1), this.triggerMethod("sketchpad:ready")
                },
                getCoords(t) {
                    let e = t;
                    e.preventDefault(), -1 !== ["touchstart", "touchmove"].indexOf(e.type) && (e = e.originalEvent.touches[0]);
                    const i = this.sketchpad.canvas,
                        s = o()(i)[0].width / o()(i).width(),
                        n = i.getBoundingClientRect(),
                        a = this.model.get("size"),
                        l = this.sketchpad.options.thickness;
                    let r = (e.clientX - n.left) * s;
                    r = Math.min(a.width - l, Math.max(l, r));
                    let c = (e.clientY - n.top) * s;
                    return c = Math.min(a.height - l, Math.max(l, c)), {
                        x: r,
                        y: c
                    }
                },
                fullImageCoord(t) {
                    return `${parseInt(t.x+this.viewportOffset.x,10)},${parseInt(t.y+this.viewportOffset.y,10)}`
                },
                start(t) {
                    const e = this.getCoords(t);
                    this.sketchpad.startLine(e), this.isDrawing = !0
                },
                move(t) {
                    if (!this.isDrawing) return;
                    const e = this.getCoords(t);
                    this.sketchpad.moveLine(e)
                },
                end(t, e) {
                    this.isDrawing && (this.isDrawing = !1, this.sketchpad.endLine(), e || this.triggerMethod("sketchpad:line", this.sketchpad.getLastLine()))
                },
                onBeforeDestroy() {
                    null !== this.getOption("mode") && this.end(null, !0), document.removeEventListener("touchend", this.endWithContext), document.removeEventListener("mouseup", this.endWithContext)
                },
                leave() {
                    "draw" !== this.getOption("mode") && this.tipShape.graphics.clear()
                },
                undoLine() {
                    this.sketchpad.undoLine(), this.sketchpad.update(), this.triggerMethod("sketchpad:undo", this.sketchpad.history.length)
                },
                resetAll() {
                    this.sketchpad && this.sketchpad.resetAll()
                },
                getColor() {
                    return this.color
                },
                setColor(t) {
                    this.color = t, this.sketchpad && this.sketchpad.setColor(t)
                },
                getThickness() {
                    return this.thicknessScale
                },
                setThickness(t) {
                    this.thicknessScale = t, this.sketchpad && this.sketchpad.setThickness(t)
                },
                getHighlighter() {
                    return !!this.sketchpad && this.sketchpad.getHighlighter()
                },
                setHighlighter(t) {
                    this.sketchpad && this.sketchpad.setHighlighter(t)
                },
                setOptions(t) {
                    this.sketchpad && this.sketchpad.setOptions(t)
                },
                getLines() {
                    return this.sketchpad ? this.sketchpad.getLines() : []
                },
                getImageData() {
                    return this.sketchpad ? this.sketchpad.getDataURL(1, this.model.get("background")) : null
                },
                getThumbnailImage() {
                    return this.sketchpad ? this.sketchpad.getDataURL(.33) : null
                },
                setLines(t) {
                    this.sketchpad && this.sketchpad.setLayerLines("backgroundSketch", t)
                },
                setImage(t) {
                    const e = this.getOption("images")[t];
                    if (!e) return;
                    const i = new Image;
                    i.onload = t => {
                        const e = t.target;
                        this.sketchpad.setLayerImage("backgroundSketch", e)
                    }, i.src = e
                },
                handleContextMenu(t) {
                    t.preventDefault()
                }
            })
        },
        24475: (t, e, i) => {
            "use strict";
            i.d(e, {
                y: () => d
            });
            var s = i(19755),
                o = i.n(s),
                n = i(13469),
                a = i.n(n),
                l = i(72316),
                r = i.n(l),
                c = i(63574),
                h = i.n(c);
            i(70989);
            const d = h().View.extend({
                tagName: "div",
                template: a().template('<div class="text"></div>'),
                model: new(r().Model)({
                    text: "",
                    className: ""
                }),
                bindings: {
                    ".text": {
                        observe: ["text", "html"],
                        updateMethod: "html",
                        onGet(t) {
                            let [e, i] = t;
                            return void 0 !== i ? i : o()("<div />").text(e).html()
                        }
                    },
                    ":el": {
                        attributes: [{
                            name: "style",
                            observe: "background",
                            onGet: t => t ? `background-color: ${t};` : ""
                        }, {
                            name: "class",
                            observe: "className"
                        }]
                    }
                },
                onRender() {
                    this.stickit()
                }
            })
        },
        17756: (t, e, i) => {
            "use strict";
            i.d(e, {
                a: () => T
            });
            var s = i(19755),
                o = i.n(s),
                n = i(40543),
                a = i(72316),
                l = i.n(a),
                r = i(63574),
                c = i.n(r),
                h = i(9659),
                d = i(86455),
                p = i.n(d),
                m = i(89446),
                u = i(13469),
                g = i.n(u),
                v = i(10972),
                b = i(24475),
                C = i(19690),
                w = i(29014);

            function y(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    e && (s = s.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function k(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(i), !0).forEach((function(e) {
                        f(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : y(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }

            function f(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const x = h.S.extend({
                    defaults: {
                        controllerVisibility: !0,
                        episodes: [],
                        episodeTitle: "",
                        index: 0,
                        maxContentLength: 45,
                        maxTitleLength: 20,
                        name: "",
                        noActionsText: "",
                        prompts: [],
                        screenVisibility: !0,
                        state: "UGC",
                        text: "",
                        validActions: [],
                        strings: {
                            tos_warning: "By sharing content, you agree to our Terms of service",
                            tos_warning_agree: "agree and share",
                            tos_warning_back: "back to menu",
                            create_new_episode: "create a new episode",
                            create_new_name_prompt: "first things first, enter a name for the episode that will contain all your prompts and hit create.",
                            create_new_button: "create",
                            button_back_to_episodes: "back to episodes",
                            button_back_to_menu: "back to menu",
                            previous_episodes: "previous episodes:",
                            toggle_prompts_prompt: "tap to show/hide prompts",
                            button_close: "close",
                            button_done: "done",
                            button_add: "add prompt",
                            input_placeholder: "enter a prompt",
                            label_hidden: "hidden",
                            button_edit: "edit",
                            button_save: "save",
                            button_publish: "publish",
                            button_play: "play",
                            button_delete: "delete",
                            delete_warning: "Are you sure you want to delete this episode?",
                            delete_warning_confirm: "Yes",
                            delete_warning_cancel: "No"
                        }
                    }
                }),
                T = c().View.extend({
                    className: "UGC scrollable",
                    template: g().template('<div id="controller" class="state-controller controller-content"> <div class="ugc-action-toggle-visibility"> <span class="text toggle_prompts_prompt">toggle_prompts_prompt</span><br/> <button id="ugc-toggle-visibility-button-controller" class="ugc-toggle-visibility-button ugc-toggle-visibility-button-controller" data-target="controller"></button> <button id="ugc-toggle-visibility-button-screen" class="ugc-toggle-visibility-button ugc-toggle-visibility-button-screen" data-target="screen"></button> </div> <div class="ugc-action-play"> <div class="ugc-episode-name"></div> </div> <div class="ugc-action-new"> <button class="button action-button create_new_episode" type="button" id="ugc-new-button">create_new_episode</button> </div> <div class="ugc-action-load"> <p class="ugc-option text-box ugc-load previous_episodes">previous_episodes</p> <div id="episodesRegion"></div> </div> <div id="prompt" class="prompt ugc-text"></div> <div id="ugc-no-actions"> <div id="ugc-no-actions-text"></div> </div> <div class="ugc-action-add"> <div id="inputRegion"></div> </div> <div class="ugc-action-title"> <p class="text-box"> <span class="text create_new_name_prompt">create_new_name_prompt</span> </p> <div id="titleInputRegion"></div> </div> <div class="ugc-action-close"> <button class="button action-button button_close" data-action="close">button_close</button> </div> <div class="ugc-action-unlock"> <button class="button action-button button_edit" data-action="unlock">button_edit</button> </div> <div class="ugc-action-done"> <button class="button action-button button_done" data-action="done">button_done</button> </div> <div class="ugc-action-submit"> <button class="button action-button button_publish" data-action="submit">button_publish</button> </div> <div class="ugc-action-play"> <button class="button action-button button_play" data-action="play">button_play</button> </div> <div class="ugc-action-remove-content"> <button class="button action-button button_delete" data-action="remove-content">button_delete</button> </div> <div class="ugc-action-exit"> <button class="button action-button button_back_to_menu" data-action="exit">button_back_to_menu</button> </div> <div class="ugc-action-episodes"> <button class="button action-button button_back_to_episodes" data-action="episodes">button_back_to_episodes</button> </div> <div class="ugc-action-remove"> <div id="promptsCount" class="promptsCount"></div> <div id="promptsRegion"></div> </div> </div>'),
                    model: new x,
                    regions: {
                        prompt: "#prompt",
                        episodes: "#episodesRegion",
                        input: "#inputRegion",
                        titleInput: "#titleInputRegion",
                        prompts: "#promptsRegion"
                    },
                    events: {
                        "click #ugc-new-button": "onNewButtonClicked",
                        "click #ugc-toggle-visibility-button-controller": "onToggleVisibilityController",
                        "click #ugc-toggle-visibility-button-screen": "onToggleVisibilityScreen",
                        "click .action-button": "onActionButtonClicked"
                    },
                    bindings: {
                        ".ugc-text": {
                            observe: "text",
                            visible: !0,
                            updateView: !0
                        },
                        ".ugc-action-add": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("add")
                        },
                        ".ugc-action-close": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("close")
                        },
                        ".ugc-action-exit": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("exit")
                        },
                        ".ugc-action-load": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("load")
                        },
                        ".ugc-action-new": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("new")
                        },
                        ".ugc-action-play": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("play")
                        },
                        ".ugc-action-remove": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("remove")
                        },
                        ".ugc-action-remove-content": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("remove-content")
                        },
                        ".ugc-action-done": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("done")
                        },
                        ".ugc-action-submit": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("submit")
                        },
                        ".ugc-action-title": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("title")
                        },
                        ".ugc-action-toggle-visibility": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("toggle-visibility")
                        },
                        ".ugc-action-unlock": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("unlock")
                        },
                        ".ugc-action-episodes": {
                            observe: "validActions",
                            visible: t => t && -1 !== t.indexOf("episodes")
                        },
                        "#ugc-no-actions": {
                            observe: "validActions",
                            visible: t => !t || 0 === t.length
                        },
                        "#ugc-no-actions-text": {
                            observe: "noActionsText",
                            onGet: t => "string" == typeof t ? t : ""
                        },
                        "#ugc-toggle-visibility-button-controller": {
                            classes: {
                                on: "controllerVisibility"
                            }
                        },
                        "#ugc-toggle-visibility-button-screen": {
                            classes: {
                                on: "screenVisibility"
                            }
                        },
                        ".ugc-episode-name": "episodeTitle",
                        ".create_new_episode": {
                            observe: "strings",
                            onGet: t => t.create_new_episode || "create_new_episode"
                        },
                        ".previous_episodes": {
                            observe: "strings",
                            onGet: t => t.previous_episodes || "previous_episodes"
                        },
                        ".toggle_prompts_prompt": {
                            observe: "strings",
                            onGet: t => t.toggle_prompts_prompt || "toggle_prompts_prompt"
                        },
                        ".create_new_name_prompt": {
                            observe: "strings",
                            onGet: t => t.create_new_name_prompt || "create_new_name_prompt"
                        },
                        ".button_close": {
                            observe: "strings",
                            onGet: t => t.button_close || "button_close"
                        },
                        ".button_edit": {
                            observe: "strings",
                            onGet: t => t.button_edit || "button_edit"
                        },
                        ".button_done": {
                            observe: "strings",
                            onGet: t => t.button_done || "button_done"
                        },
                        ".button_publish": {
                            observe: "strings",
                            onGet: t => t.button_publish || "button_publish"
                        },
                        ".button_play": {
                            observe: "strings",
                            onGet: t => t.button_play || "button_play"
                        },
                        ".button_delete": {
                            observe: "strings",
                            onGet: t => t.button_delete || "button_delete"
                        },
                        ".button_back_to_episodes": {
                            observe: "strings",
                            onGet: t => t.button_back_to_episodes || "button_back_to_episodes"
                        },
                        ".button_back_to_menu": {
                            observe: "strings",
                            onGet: t => t.button_back_to_menu || "button_back_to_menu"
                        },
                        "#promptsCount": {
                            observe: ["prompts", "strings", "count", "maxCount"],
                            onGet() {
                                const t = this.model.get("count"),
                                    e = this.model.get("maxCount"),
                                    i = this.model.get("prompts") || [],
                                    s = this.model.get("strings").label_hidden || "hidden",
                                    o = i.length;
                                let n = `${t}/${e}`;
                                return o < t && (n += ` (${t-o} ${s})`), n
                            }
                        }
                    },
                    initialize() {
                        this.promptComponent = this.promptComponent || new b.y({
                            model: new(l().Model)
                        }), this.episodesList = this.episodesList || new w.C({
                            action: "load",
                            collection: new(l().Collection)
                        }), this.inputComponent = this.inputComponent || new C.E({
                            model: new(l().Model)({
                                inlineSubmit: !0,
                                inlineSubmitText: "",
                                className: "addPrompt",
                                counter: !0
                            })
                        }), this.titleInputComponent = this.titleInputComponent || new C.E({
                            model: new(l().Model)({
                                inlineSubmit: !0,
                                counter: !0
                            })
                        }), this.promptsList = this.promptsList || new w.C({
                            action: "remove",
                            collection: new(l().Collection)
                        }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
                    },
                    onRender() {
                        this.showChildView("prompt", this.promptComponent), this.showChildView("episodes", this.episodesList), this.showChildView("input", this.inputComponent), this.showChildView("titleInput", this.titleInputComponent), this.showChildView("prompts", this.promptsList)
                    },
                    onAttach() {
                        this.stickit(), this.update(), n.b.vibrate()
                    },
                    update() {
                        const t = 0 === this.model.get("validActions").length ? this.model.get("noActionsText") : this.model.get("text");
                        this.promptComponent.model.set("text", t);
                        const e = this.model.get("episodes").map((t => {
                            const e = m.c.htmlUnescape(t.metadata.title);
                            let i = m.c.safeText(e);
                            return i += null !== t.remoteContentId ? `<br><div class='episodeId'>${t.formattedRemoteContentId}</div>` : "", {
                                key: t.remoteContentId || t.localContentId,
                                html: i
                            }
                        }));
                        this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map((t => {
                            const e = g().extend({}, t);
                            e.text = m.c.htmlUnescape(t.text);
                            let i = t.author !== v.app.client.userId ? "other" : "self";
                            return t.className && (i += ` ${t.className}`), k(k({}, e), {}, {
                                className: i
                            })
                        })))
                    },
                    onNewButtonClicked() {
                        this.triggerMethod("client:message", {
                            action: "new"
                        })
                    },
                    onChildviewInputSubmit() {
                        let t, e; - 1 !== this.model.get("validActions").indexOf("add") ? (t = "add", e = this.inputComponent.getSanitizedValue(), this.inputComponent.clearInput(), this.inputComponent.focus()) : -1 !== this.model.get("validActions").indexOf("title") && (t = "title", e = this.titleInputComponent.getValue(), this.titleInputComponent.clearInput()), t && e && this.triggerMethod("client:message", {
                            action: t,
                            text: e
                        })
                    },
                    onChildviewChildviewButtonLoad(t) {
                        this.triggerMethod("client:message", {
                            action: "load",
                            contentId: t.get("key")
                        })
                    },
                    onChildviewChildviewButtonRemove(t) {
                        this.triggerMethod("client:message", {
                            action: "remove",
                            key: t.get("key")
                        })
                    },
                    onToggleVisibilityController() {
                        this.triggerMethod("client:message", {
                            action: "toggle-visibility",
                            target: "controller"
                        })
                    },
                    onToggleVisibilityScreen() {
                        this.triggerMethod("client:message", {
                            action: "toggle-visibility",
                            target: "screen"
                        })
                    },
                    onActionButtonClicked(t) {
                        const e = o()(t.currentTarget).data("action");
                        "submit" !== e ? "remove-content" !== e ? this.triggerMethod("client:message", {
                            action: e
                        }) : this.showConfirmDeleteDialog() : this.showTermsOfService()
                    },
                    showTermsOfService() {
                        p().fire({
                            target: this.el,
                            html: `${this.model.get("strings").tos_warning}\n            <a href='https://www.jackboxgames.com/terms-of-service/' target='_blank' >\n                <br>\n                <div class="tosLink">\n                    <svg\n                        class="bi bi-link-45deg"\n                        width="1em"\n                        height="1em"\n                        viewBox="0 0 16 16"\n                        fill="currentColor"\n                        xmlns="http://www.w3.org/2000/svg"\n                    >\n                        <path\n                            d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243\n                                l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337\n                                L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"\n                        />\n                        <path\n                            d="M5.712 6.96l.167-.167a1.99 1.99 0 0 1 .896-.518 1.99 1.99 0 0 1 .518-.896\n                                l.167-.167A3.004 3.004 0 0 0 6 5.499c-.22.46-.316.963-.288 1.46z"\n                        />\n                        <path\n                            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346\n                                L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287\n                                l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"\n                        />\n                        <path\n                            d="M10 9.5a2.99 2.99 0 0 0 .288-1.46\n                                l-.167.167a1.99 1.99 0 0 1-.896.518 1.99 1.99 0 0 1-.518.896\n                                l-.167.167A3.004 3.004 0 0 0 10 9.501z"\n                        />\n                    </svg>\n                </div>\n            </a>\n        `,
                            showCancelButton: !0,
                            confirmButtonText: this.model.get("strings").tos_warning_agree,
                            cancelButtonText: this.model.get("strings").tos_warning_back,
                            customClass: {
                                popup: "ugcModal",
                                confirmButton: "button confirmButton",
                                cancelButton: "button cancelButton"
                            }
                        }).then((t => {
                            t.value && this.triggerMethod("client:message", {
                                action: "submit"
                            })
                        }))
                    },
                    showConfirmDeleteDialog() {
                        p().fire({
                            target: this.el,
                            text: this.model.get("strings").delete_warning,
                            showCancelButton: !0,
                            confirmButtonText: this.model.get("strings").delete_warning_confirm,
                            cancelButtonText: this.model.get("strings").delete_warning_cancel,
                            customClass: {
                                popup: "ugcModal",
                                confirmButton: "button confirmButton",
                                cancelButton: "button cancelButton"
                            }
                        }).then((t => {
                            t.value && this.triggerMethod("client:message", {
                                action: "remove-content"
                            })
                        }))
                    },
                    onChildviewChildviewButtonChoose(t) {
                        const e = t.get("text");
                        this.triggerMethod("client:message", {
                            action: "remove",
                            text: e
                        })
                    }
                })
        },
        9659: (t, e, i) => {
            "use strict";
            i.d(e, {
                S: () => l
            });
            var s = i(13469),
                o = i.n(s),
                n = i(72316),
                a = i.n(n);
            const l = a().Model.extend({
                defaults: {},
                set(t, e) {
                    const i = o().extend({}, this.attributes, this.defaults, t);
                    return a().Model.prototype.set.apply(this, [i, e]), this
                },
                setUpdate(t, e) {
                    const i = o().extend({}, this.defaults, this.attributes, t);
                    return a().Model.prototype.set.apply(this, [i, e]), this
                }
            })
        },
        91434: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            const s = '<button type="button" class="button choice-button btn btn-lg"></button> <button data-action="censor" class="button censor-button btn btn-lg"></button>'
        },
        1169: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            const s = '<div> <div id="controller" class="state-controller controller-content"> <form class="enterSingleTextForm"> <fieldset class="enterSingleTextFieldset"> <div id="prompt" class="prompt">prompt</div> <div id="input-region" class=""></div> <div id="buttons" class="">buttons</div> </fieldset> </form> <div class="enterSingleTextDone"> <span class="doneText"></span> </div> </div> </div> '
        },
        79023: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            const s = '<div id="controller" class="state-controller controller-content"> <div id="title" class="lobbyTitle">title</div> <div id="vipMenu" class="vipMenu"> <div id="choices" class="choicesContainer">choices</div> </div> <div class="characterSelect"> <div id="charactersPrompt" class="charactersPrompt"> <span id="charactersPromptText" class="charactersPromptText"></span> </div> <div id="characters" class="charactersContainer"></div> </div> <div id="artifactId" class="artifactContainer text"> <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank"> <button id="artifactButton" class="artifactButton"></button> </a> </div> </div>'
        },
        266: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            const s = '<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div> <div id="controller-container" class="state-controller controller-page"> <div id="playerRegion">playerTopBar</div> <div id="controller-main"> <div class="loadingSpinner"> <i class="fas fa-spinner fa-spin" style="font-size:48px"></i> </div> </div> </div> <div id="broadcaster" role="button" aria-label="twitch broadcaster information" style="display:none" class="twitchBroadcasterIcon"></div> '
        },
        66246: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => s
            });
            const s = '<div id="controller" class="state-controller controller-content"> <div id="prompt" class="prompt text"></div> <div class="error text-danger"></div> <div id="choicesRegion"></div> <div id="chosen" class="chosen text"></div> <div class="makeSingleChoiceDone"> <span class="doneText"></span> </div> </div>'
        },
        25900: (t, e, i) => {
            "use strict";
            t.exports = i.p + "assets/5f5d5dbea8bdc5d56b8e.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/4340.0f8dcfee16767c1b62c7.js.map