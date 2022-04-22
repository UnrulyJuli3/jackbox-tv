(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/jackbox-talks"], {
        19140: (t, e, i) => {
            "use strict";
            i.d(e, {
                n: () => c
            });
            var n = i(13469),
                s = i.n(n),
                o = i(72316),
                a = i.n(o),
                l = i(63574),
                r = i.n(l),
                d = (i(70989), i(97718));
            const c = r().View.extend({
                model: new(a().Model)({}),
                myViewOptions: ["width", "height", "sketchOptions"],
                template: s().template("\n        <h1 class='title'>ImageView</h1>\n        <img class='imageData'>\n    "),
                initialize(t) {
                    this.mergeOptions(t, this.myViewOptions), this.model.on({
                        "change:lines": this.setImageFromLines.bind(this)
                    })
                },
                bindings: {
                    ".title": {
                        observe: "title",
                        visible: !0,
                        updateView: !0
                    },
                    ".imageData": {
                        attributes: [{
                            name: "src",
                            observe: "src"
                        }]
                    }
                },
                setImageFromLines() {
                    const t = this.getOption("width") || 640,
                        e = this.getOption("height") || 640,
                        i = this.getOption("sketchOptions"),
                        n = this.model.get("lines") || [];
                    if (!n.length || !i) return;
                    const s = new d.v(t, e, i);
                    s.setLines(n), this.model.set("src", s.canvas.toDataURL("image/png"))
                },
                onRender() {
                    this.stickit()
                }
            })
        },
        54677: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                MainView: () => nt
            });
            var n = i(24340),
                s = i(13469),
                o = i.n(s),
                a = i(72316),
                l = i.n(a),
                r = i(63574),
                d = i.n(r),
                c = i(9659);
            const h = c.S.extend({
                    defaults: {
                        message: {
                            text: null
                        },
                        classes: [],
                        artifact: null,
                        throttleDuration: 1e3,
                        maxVotes: 100,
                        countGroupName: null
                    }
                }),
                p = d().View.extend({
                    className: "",
                    template: o().template('\n        <svg class="reactBar" viewBox="0 0 32 128" class="defs-only" xmlns="http://www.w3.org/2000/svg">\n            <rect class="reactRect"  x="14" y="8" width="4" height="112" />\n            <circle class="reactCircle" cx="16" cy="64" r="4" />\n        </svg>\n    '),
                    model: new(l().Model)({
                        value: 0
                    }),
                    events: {
                        mousedown: "handleRangeStart",
                        touchstart: "handleRangeStart",
                        mousemove: "handleRangeUpdate",
                        touchmove: "handleRangeUpdate",
                        mouseleave: "handleEnd",
                        mouseup: "handleEnd",
                        touchend: "handleEnd"
                    },
                    bindings: {
                        ".reactCircle": {
                            attributes: [{
                                name: "cy",
                                observe: "value",
                                onGet: t => 120 - 112 * t / 100
                            }]
                        }
                    },
                    onAttach() {
                        this.stickit()
                    },
                    handleRangeStart(t) {
                        this.selected = !0, this.handleRangeUpdate(t)
                    },
                    handleRangeUpdate(t) {
                        if (!this.selected) return;
                        t.preventDefault(), -1 !== ["touchstart", "touchmove"].indexOf(t.type) && (t = t.originalEvent.touches[0]);
                        const e = t.clientY,
                            i = this.$el.find(".reactRect")[0].getBoundingClientRect(),
                            n = Math.floor((i.y + i.height - e) / i.height * 100),
                            s = Math.min(Math.max(n, 0), 100);
                        this.model.set("value", s), this.triggerMethod("range:update", s)
                    },
                    handleEnd() {
                        this.selected = !1
                    }
                }),
                u = d().View.extend({
                    className: "Reaction scrollable",
                    template: o().template('<div> <label class="reactPrompt">React</label> </div> <div class="reactBarContainer"> </div>'),
                    model: new h,
                    sessionModule: "vote",
                    sessionName: " Vote",
                    sessionMessage: {
                        type: "vote"
                    },
                    bindings: {
                        ".reactPrompt": {
                            observe: "prompt",
                            onGet: t => t.html
                        }
                    },
                    regions: {
                        reactBar: ".reactBarContainer"
                    },
                    initialize() {
                        this.listenTo(this.model, "change", this.update, this), this.update(), this.currentVotes = 0, this.reactionBarComponent = new p
                    },
                    update() {
                        this.throttledSend = o().throttle(this.send, this.model.get("throttleDuration") || 1e3)
                    },
                    onRender() {
                        this.showChildView("reactBar", this.reactionBarComponent), this.stickit()
                    },
                    onChildviewRangeUpdate() {
                        this.throttledSend()
                    },
                    send() {
                        this.currentVotes += 1, this.currentVotes >= this.model.get("maxVotes") || (this.sessionMessage.vote = this.value, this.model.get("isAudience") ? this.triggerMethod("client:countGroup", {
                            name: this.model.get("countGroupName"),
                            vote: this.value
                        }) : this.triggerMethod("client:message", {
                            action: "reaction",
                            value: this.reactionBarComponent.model.get("value")
                        }))
                    }
                });
            var m = i(86455),
                b = i.n(m),
                g = i(41393),
                v = i(24475),
                w = i(19690),
                y = i(40543),
                f = i(48886);
            const C = d().View.extend({
                    tagName: "div",
                    className: "list",
                    template: o().template('<ul class="nav nav-colors"> <li class="pull-right button-pad"> <div id="colorPaletteList" class="colorPaletteListRegion pull-right"> </div> </li> </ul> '),
                    model: new(l().Model)({}),
                    regions: {
                        colorPaletteList: "#colorPaletteList"
                    },
                    triggers: {
                        "click #undoButton": "choose:undo"
                    },
                    bindings: {},
                    initialize() {
                        this.ColorPaletteComponent = this.ColorPaletteComponent || new f.N({
                            collection: new(l().Collection),
                            transparent: !0
                        }), this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        if (this.ColorPaletteComponent && this.ColorPaletteComponent.collection.set(this.model.get("colors")), this.model.get("currentColor")) {
                            const t = this.model.get("currentColor");
                            this.ColorPaletteComponent.collection.forEach((e => {
                                e.set("selected", e.get("hex") === t)
                            }))
                        }
                    },
                    onRender() {
                        this.showChildView("colorPaletteList", this.ColorPaletteComponent), this.update()
                    },
                    onChildviewChildviewPaletteSelect(t) {
                        this.triggerMethod("choose:color", t)
                    }
                }),
                x = c.S.extend({
                    defaults: o().extend({}, g.d.prototype.model.defaults, {
                        inputOptions: !1,
                        base64: null
                    })
                }),
                O = g.d.extend({
                    template: o().template('<div class="controller-content"> <div class="canvas-container"> <div id="prompt" class="prompt"></div> <div id="toolbar" class="toolbar"></div> <div id="sketchpad"></div> <div id="input" class="textInput"></div> <div id="buttons" class="buttons"></div> <div id="post-sketchpad" class="post-sketchpad"> <div id="submit"> <button id="submitdrawing" class="button submitDrawing">Submit</button><br/> </div> <button id="censorOptions" class="button">Censor Options</button> <div class="footer"></div> </div> </div> </div> '),
                    model: new x,
                    bindings: o().extend({}, g.d.prototype.bindings, {
                        ".textInput": {
                            visible: !0,
                            observe: "inputOptions"
                        },
                        "canvas.fullLayer": {
                            attributes: [{
                                name: "style",
                                observe: "base64",
                                onGet(t) {
                                    let e = "";
                                    return t && (e = `background:url(data:image/png;base64,${t}) no-repeat 0 0/cover;`), e
                                }
                            }]
                        }
                    }),
                    events: o().extend({}, g.d.prototype.events, {
                        "click .info-button": "infoClick"
                    }),
                    regions: o().extend({}, g.d.prototype.regions, {
                        input: "#input"
                    }),
                    initialize(t) {
                        this.toolbarComponent = this.toolbarComponent || new C, this.inputComponent = this.inputComponent || new w.E, g.d.prototype.initialize.apply(this, [t])
                    },
                    update() {
                        void 0 !== this.model.get("drawId") && this.model.get("drawId") !== this.getOption("drawId") && this.inputComponent.clearInput(), g.d.prototype.update.apply(this), !this.cardShown && this.model.get("popup") && (this.cardShown = !0, this.infoClick());
                        const t = this.model.get("inputOptions") || {};
                        this.inputComponent.model.set(t)
                    },
                    sendInput(t) {
                        0 !== this.sketchpadComponent.getLines().length ? g.d.prototype.sendInput.apply(this, [t]) : y.b.show(Error("You have to draw something!"))
                    },
                    onRender() {
                        g.d.prototype.onRender.apply(this), this.showChildView("input", this.inputComponent)
                    },
                    infoClick() {
                        b().fire({
                            html: "prompt",
                            customClass: {
                                popup: "inventionPrompt"
                            },
                            padding: 0,
                            background: "none",
                            showConfirmButton: !1,
                            showCloseButton: !0,
                            didOpen: () => {
                                this.textView = new v.y({
                                    el: ".inventionPrompt",
                                    model: new(l().Model)({}),
                                    template: o().template('<div class="text"></div>')
                                }), this.textView.model.set("html", this.model.get("popup").html), this.textView.model.set("className", `popupText Card ${this.model.get("popup").className}`), this.textView.render()
                            }
                        })
                    },
                    onChildviewInputText(t) {
                        this.throttledSend || (this.throttledSend = o().throttle((t => {
                            const e = {
                                    action: "write",
                                    entry: t
                                },
                                i = this.model.get("textKey");
                            i && (e.textKey = i, e.val = t), this.triggerMethod("client:message", e)
                        }), 500));
                        const e = t.getSanitizedValue();
                        this.throttledSend(e)
                    },
                    onChildviewButtonSubmit() {
                        (0 !== this.sketchpadComponent.getLines().length || this.model.get("allowEmpty")) && this.buttonsComponent.children.forEach((t => {
                            t.model.set("disabled", !0)
                        })), g.d.prototype.onChildviewButtonSubmit.apply(this)
                    }
                });
            var k = i(53729),
                B = i(15059),
                P = i(27091),
                V = i.n(P),
                S = new URL(i(78394), i.b);
            const j = '<div class="canvasContainer"> <video id="cameraVideo" class="cameraVideo" autoplay playsinline class=""></video> <canvas id="cameraCanvas" class="cameraCanvas resizableCanvas" width="300px" height="408px" class=""></canvas> <img id="cameraImage" class="cameraImage visuallyhidden"/> </div> <div class="cameraControls"> <button id="exitButton" class="button exitButton" aria-label="Exit"></button> <div class="buttons pre"> <button id="switchButton" class="button switchButton" aria-label="Switch Cameras"></button> <button id="snapshotButton" class="button snapshotButton" aria-label="Take a Snapshot"></button> </div> <div class="buttons post"> <button id="cancelButton" class="button cancelButton" aria-label="Cancel"></button> <button id="confirmButton" class="button confirmButton" aria-label="Confirm">KEEP IT</button> </div> </div> <div style="display:none"> <img id="Mask" src="' + V()(S) + '"/> </div>',
                M = c.S.extend({
                    defaults: o().extend({}, k.i.prototype.model.defaults, {
                        strings: {
                            exitButton: "",
                            switchButton: "",
                            snapshotButton: "",
                            cancelButton: "",
                            confirmButton: "KEEP IT"
                        }
                    })
                }),
                I = B.P.extend({
                    template: o().template(j),
                    altOption: "avatar"
                }),
                L = k.i.extend({
                    model: new M,
                    initialize(t) {
                        this.cameraView = new I(t), k.i.prototype.initialize.apply(this, [t])
                    },
                    onChildviewCameraSnapshot(t) {
                        1 === t.length ? this.triggerMethod("client:message", {
                            action: "camera",
                            size: t[0].size,
                            base64: t[0].picture
                        }) : this.triggerMethod("client:message", {
                            action: "camera",
                            pictures: t.map((t => ({
                                size: t.size,
                                base64: t.picture
                            })))
                        })
                    }
                });
            var D = i(97079),
                E = i(29014),
                R = i(49273);

            function z(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function N(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? z(Object(i), !0).forEach((function(e) {
                        T(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : z(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }

            function T(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const G = R.r.extend({
                    template: o().template('\n        <button type="button" class=\'button choice-button btn btn-lg\'>\n            <div class="photo">\n            </div>\n            <div class="textinfo">\n                <div class="name"></div>\n                <div class="title"></div>\n            </div>\n        </button>\n        \n    '),
                    bindings: N(N({}, R.r.prototype.bindings), {}, {
                        "button:first": {
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
                        ".photo": {
                            attributes: [{
                                name: "class",
                                observe: "photo"
                            }]
                        },
                        ".name": {
                            observe: "name",
                            attributes: [{
                                name: "style",
                                observe: "hex",
                                onGet: t => `color: ${t};`
                            }]
                        },
                        ".title": "title"
                    })
                }),
                A = D.E.extend({
                    className: "MakeSingleChoice Awards scrollable",
                    initialize(t) {
                        this.choicesList = new E.C({
                            childView: t => "text" === t.get("type") ? v.y : G
                        }), D.E.prototype.initialize.apply(this, [t])
                    },
                    displayAudienceChoice(t) {
                        let e = "Thank you.";
                        const i = t.map((t => {
                            const e = this.choicesList.children.find((e => e.model.get("index") === t));
                            return e ? e.model.get("name") || e.model.get("title") : ""
                        }));
                        return void 0 !== t && this.model.get("strings") && (e = this.model.get("strings").your_choice + i.join(", ")), {
                            html: e
                        }
                    }
                });
            var _ = i(52650);
            const $ = _.W.extend({
                    update() {
                        _.W.prototype.update.apply(this), this.model.get("playerIsVIP") && this.model.get("gameCanStart") || this.choicesListView.collection.unshift({
                            type: "text",
                            className: "logoImage"
                        })
                    }
                }),
                U = d().View.extend({
                    template: o().template('\n        <div class="signpostView">\n            <div class="header"></div>\n            <div>\n            <button type="button" aria-label="choose previous signpost" class="float-left button leftButton"></button>\n            </div>\n            <div class="signpostText">\n            <span class="text"></span>\n            </div>\n            <div>\n            <button type="button" aria-label="choose next signpost" class="float-right button rightButton"></button>\n            </div>\n        </div>\n        <div class="cameraHeader">\n            <div class="cameraIcon"></div>\n        </div>\n    '),
                    bindings: {
                        ".text": {
                            observe: "html",
                            updateMethod: "html"
                        },
                        ".button": {
                            observe: "disabled",
                            visible: t => !t
                        },
                        ".signpostText": {
                            classes: {
                                disabled: "disabled"
                            }
                        }
                    },
                    events: {
                        "click button.leftButton": "onLeftButtonClick",
                        "click button.rightButton": "onRightButtonClick"
                    },
                    onAttach() {
                        this.stickit()
                    },
                    onLeftButtonClick() {
                        this.trigger("button:signpost", "left")
                    },
                    onRightButtonClick() {
                        this.trigger("button:signpost", "right")
                    }
                }),
                K = D.E.extend({
                    initialize(t) {
                        this.choicesList = new E.C({
                            childView: t => "signpost" === t.get("type") ? U : "text" === t.get("type") ? v.y : R.r
                        }), D.E.prototype.initialize.apply(this, [t])
                    },
                    onChildviewChildviewButtonSignpost(t) {
                        this.triggerMethod("client:message", {
                            action: t
                        })
                    }
                });
            var F = i(19755),
                W = i.n(F),
                Y = i(19140);

            function H(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function J(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? H(Object(i), !0).forEach((function(e) {
                        q(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : H(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }

            function q(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const Q = c.S.extend({
                    defaults: {
                        prompt: {},
                        slides: []
                    }
                }),
                X = d().View.extend({
                    className: "slideView",
                    template: o().template('\n        <div class="moveContainer">\n            <button type="button" class="button upButton" aria-label="move slide up"></button>\n            <span class="index" aria-label=\'slide index\'></span>\n            <button type="button" class="button downButton" aria-label="move slide down"></button>\n        </div>\n        <div class="slideContent">\n            <div class="slideContentDiv"></div>\n        </div>\n        <div>\n            <button type="button" class="button deleteButton" aria-label="delete slide"></button>\n        </div>\n    '),
                    bindings: {
                        ".text": {
                            observe: "html",
                            updateMethod: "html"
                        },
                        ".index": {
                            observe: "index",
                            onGet: t => t + 1
                        },
                        ".upButton": {
                            attributes: [{
                                name: "disabled",
                                observe: "first"
                            }]
                        },
                        ".downButton": {
                            attributes: [{
                                name: "disabled",
                                observe: "last"
                            }]
                        },
                        ".slideContentDiv": {
                            observe: ["image", "text", "drawing"],
                            updateMethod: "html",
                            onGet(t) {
                                let [e, i, n] = t;
                                if (e || n) {
                                    const t = new Y.n({
                                        el: this.$el.find(".slideContentDiv"),
                                        model: new(l().Model)({})
                                    });
                                    if (t.render(), e && t.model.set({
                                            src: e
                                        }), n) {
                                        const {
                                            size: e,
                                            lines: i,
                                            sketchOptions: s
                                        } = n;
                                        t.options.width = e.width, t.height = e.height, t.width = e.width, t.sketchOptions = s, t.model.set({
                                            lines: i
                                        })
                                    }
                                    return t.$el.html()
                                }
                                return i || ""
                            },
                            attributes: [{
                                name: "class",
                                observe: "photo"
                            }, {
                                name: "aria-label",
                                observe: "label"
                            }],
                            classes: {
                                text: "text",
                                image: "image"
                            }
                        }
                    },
                    triggers: {
                        "click button.upButton": "button:up",
                        "click button.downButton": "button:down",
                        "click button.deleteButton": "button:delete"
                    },
                    onAttach() {
                        this.stickit()
                    }
                }),
                Z = d().View.extend({
                    template: o().template('<div id="controller" class="state-controller controller-content"> <div class="prompt">prompt</div> <div id="slides"> <div id="slidesRegion" class="slidesRegion"> </div> <div class="add"> <button>ADD SLIDE</button> </div> </div> </div> <div class="submitRegion footer"> <button class="submit">SUBMIT</button> </div>'),
                    className: "Slideshow scrollable",
                    model: new Q,
                    regions: {
                        slides: "#slidesRegion"
                    },
                    events: {
                        "click .add": "onAddClick",
                        "click .submit": "onSubmitClick"
                    },
                    bindings: {
                        ".add": {
                            classes: {
                                empty: {
                                    observe: "slides",
                                    onGet: t => !(t && t.length > 0)
                                }
                            }
                        },
                        ".footer": {
                            observe: "slides",
                            visible: !0,
                            onGet: t => t && t.length > 0
                        },
                        ".prompt": {
                            observe: "prompt",
                            updateMethod: "html",
                            onGet(t) {
                                const {
                                    text: e,
                                    html: i
                                } = t;
                                return i || W()("<div />").text(e).html()
                            }
                        }
                    },
                    initialize() {
                        this.slideCollectionView = this.slideCollectionView || new(d().CollectionView)({
                            className: "slides",
                            childView: X,
                            collection: new(l().Collection)([]),
                            initialize() {
                                this.listenTo(this.collection, "sync", this.render)
                            }
                        }), this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.slideCollectionView.collection.set(this.model.get("slides").map(((t, e) => J(J({}, t), {}, {
                            index: e,
                            first: 0 === e,
                            last: e === this.model.get("slides").length - 1
                        }))))
                    },
                    onRender() {
                        this.showChildView("slides", this.slideCollectionView)
                    },
                    onAttach() {
                        this.stickit(), this.update()
                    },
                    onAddClick(t) {
                        return t.preventDefault(), this.triggerMethod("client:message", {
                            action: "add"
                        }), !1
                    },
                    onSubmitClick(t) {
                        return t.preventDefault(), this.triggerMethod("client:message", {
                            action: "submit"
                        }), !1
                    },
                    onChildviewChildviewButtonUp(t) {
                        this.triggerMethod("client:message", {
                            index: t.model.get("index"),
                            action: "up"
                        })
                    },
                    onChildviewChildviewButtonDown(t) {
                        this.triggerMethod("client:message", {
                            index: t.model.get("index"),
                            action: "down"
                        })
                    },
                    onChildviewChildviewButtonDelete(t) {
                        this.triggerMethod("client:message", {
                            index: t.model.get("index"),
                            action: "delete"
                        })
                    }
                });

            function tt(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function et(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tt(Object(i), !0).forEach((function(e) {
                        it(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : tt(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }

            function it(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            const nt = n.v.extend({
                sessionModulePrefix: "JackboxTalks",
                parseBlob: t => (t.playerInfo = t.playerInfo || {}, t.classes = t.classes || [], t.playerInfo.classes = t.playerInfo.classes || t.classes, t.playerInfo.username && (t.playerInfo.username = t.playerInfo.username.toLowerCase()), "Lobby" === t.state && (t.playerInfo.classes.push("LobbyTopBar"), t.choices = t.choices || [], t.choices = t.choices.map((t => et(et({}, t), {}, {
                    className: "toCamera" === t.action ? "toCamera" : t.className
                })))), "MakeSingleChoice" === t.state && (-1 !== t.classes.indexOf("ChooseSlideTypeToAdd") && (t.block = !1), t.choices.find((t => "endTalk" === t.className)) && (t.prompt = {
                    text: ""
                })), "EnterSingleText" === t.state && (t.prompt.html && (t.prompt.html = t.prompt.html.replace(/([^_])_([^_])/gi, '$1<span style="letter-spacing: -0.05em;">________</span>$2')), "NameAward" === t.entryId && t.classes.push("NameAward")), "Camera" === t.state && (t.playerInfo.hidden = !0, t.strings && t.strings.confirmButton || (t.strings = {
                    exitButton: "",
                    switchButton: "",
                    snapshotButton: "",
                    cancelButton: "",
                    confirmButton: "KEEP IT"
                })), t),
                getGameLayout(t) {
                    switch (t) {
                        case "Awards":
                            return this.setLayout(A);
                        case "Camera":
                            return this.setLayout(L);
                        case "Draw":
                            return this.setLayout(O);
                        case "Reaction":
                            return this.setLayout(u);
                        case "MakeSingleChoice":
                            return this.setLayout(K);
                        case "Slideshow":
                            return this.setLayout(Z);
                        case "Lobby":
                            return this.setLayout($);
                        default:
                            return -1
                    }
                }
            })
        },
        78394: (t, e, i) => {
            "use strict";
            t.exports = i.p + "games/jackbox-talks/4feb14ddc0ccabd13be7.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/8049.fb6ed963bc18ebc8bce8.js.map