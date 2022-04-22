(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/worldchamps"], {
        19140: (e, t, o) => {
            "use strict";
            o.d(t, {
                n: () => c
            });
            var i = o(13469),
                s = o.n(i),
                n = o(72316),
                h = o.n(n),
                l = o(63574),
                a = o.n(l),
                r = (o(70989), o(97718));
            const c = a().View.extend({
                model: new(h().Model)({}),
                myViewOptions: ["width", "height", "sketchOptions"],
                template: s().template("\n        <h1 class='title'>ImageView</h1>\n        <img class='imageData'>\n    "),
                initialize(e) {
                    this.mergeOptions(e, this.myViewOptions), this.model.on({
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
                    const e = this.getOption("width") || 640,
                        t = this.getOption("height") || 640,
                        o = this.getOption("sketchOptions"),
                        i = this.model.get("lines") || [];
                    if (!i.length || !o) return;
                    const s = new r.v(e, t, o);
                    s.setLines(i), this.model.set("src", s.canvas.toDataURL("image/png"))
                },
                onRender() {
                    this.stickit()
                }
            })
        },
        35783: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                MainView: () => P
            });
            var i = o(13469),
                s = o.n(i),
                n = o(24340),
                h = o(72316),
                l = o.n(h),
                a = (o(70989), o(86455)),
                r = o.n(a),
                c = o(40543),
                d = o(74030),
                m = o(41393),
                p = o(9659),
                u = o(97718),
                g = o(19140),
                w = o(89446);
            const C = p.S.extend({
                    defaults: s().extend({}, m.d.prototype.model.defaults, {
                        textKey: void 0,
                        size: {
                            width: 640,
                            height: 640
                        },
                        colors: [{
                            hex: "#8014fe"
                        }, {
                            hex: "#fe34aa"
                        }, {
                            hex: "#ff5114"
                        }, {
                            hex: "#1c54ff"
                        }, {
                            hex: "#000000"
                        }, {
                            hex: "#ffc212"
                        }, {
                            hex: "#13ffdb"
                        }, {
                            hex: "#00ff97"
                        }, {
                            hex: "#d7ff13"
                        }],
                        thicknesses: [2, 4],
                        defaultIndex: 4,
                        forceName: !1,
                        champion: {},
                        showChampion: !1,
                        nameCharacter: !1,
                        nameMaxLength: 45,
                        sketchOptions: {
                            minThickness: 2,
                            thicknessFactor: 0,
                            smoothingFactor: .9,
                            thicknessSmoothingFactor: 0,
                            dotMultiplier: 1,
                            tipTaperFactor: 1
                        },
                        strings: s().extend({}, m.d.prototype.model.defaults.strings, {
                            name_modal_text: "Name your champion:",
                            name_modal_confirm: "OK",
                            name_modal_cancel: "Cancel",
                            name_error_empty: "You need to write something!",
                            ERROR_REJECTED_OBJECT: "That's not allowed, enter something else!",
                            ERROR_REJECTED_TEXT: "That's not allowed, enter something else!"
                        })
                    })
                }),
                b = d.u.extend({
                    template: s().template('\n        <ul class="nav nav-colors">\n            <li class="pull-left button-pad">\n                <button id="undoButton" class="undo button">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAnCAQAAAA4Y6kNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfhCAUULQu6tVG/AAACyElEQVRIx62WO2gVQRSGvzOzsfAVO6NIKlELBUkhCRhsNZ2otYKNFhYS7MRC7AUt1EKwkmATLSx9oIabQnwRfCCCSpQghhDUSF73WOzs7Mze2eRK8g+77Lz+Pf95zK5wVq7rXwyKkEMRmgBs4wC97GYLm+hgjmm+M0aDp4wDYPz6fHf+xHsZxgAZ1l9gOcRdptBkm2KYASxgyHyz7s4oyk0ycBMARxipIQvbCIfB7yuagQaKcstZCpsZaoOuaEN0AdYrDCiVawjIft7+B6GivKMfHJ0T3vCTVznGzH8SKsoMR518G1u5kvZHDjpLLcawGlird9jHIkFmrRwbuME6msjqUcJeLtFEEaFBb1tblHEm+IWwka10+VorsUAfz9sNzyNO0UOnp+mkh9PcZ7Gy7l7uymUo5SUD3g5Tsa2P4Wj1rNkJS1POcoX1lJVssS1yT/Aj2HFxGUp5IEBwILiCq2AHr/yeMTqWtnKOQW+jLaujBd18dDvm2bN8eC5EwrOatNvFhFt/sp2ID1KcNVktJRx3qy+3l0TnKM8aW0NpeIiiDMObtg6G895Om0jyHP00UR5n3GY76uojXyyuXz4J3XTzGQu1hPCMUfrcd6EtlFGvPxfOoDzJECzR9y2wL+4LEo21ogH8zvwHk0B22Y9lamIsxFeafDNuibpLfF+8h4leUFibwjSTfDAtG8p++RRKrbcR5pnghQksxPuUyJPxaJ5UaazhE68L4QIJH1bvS3sSNtFg0lYI4v+b1tAA7n8phU75wk/BYIJwSJIkpm7WCxfVBePrg8h7IUU1PPV5Oa9NjInSOU4gqaQV0etTEAQN85IKdWllrKDOytyFhHlZlUwQKoKCXAqKVI8ASfZj8XWkuWI1QUCqglpnJKGkQFaMm4Qdoez0TIrQKyyEV2u7jG04o6QTPQtfaAunRhlZ9DVR3615aeL1/wCc0hAjJXcubgAAAABJRU5ErkJggg=="/></svg>\n                </button>\n            </li>\n            <li class="pull-right button-pad">\n                <button id="chooseMarkerButton" class="chooseMarker button">\n                </button>\n            </li>\n            <li class="pull-right button-pad">\n                <button id="chooseHighlighterButton" class="chooseHighlighter button">\n                </button>\n            </li>\n            <li class="pull-right button-pad">\n                <button aria-label="choose color" id="currentColorButton" class="button currentColorButton">\n                    <div id="currentColor" class="currentColor"></div>\n                </button>\n            </li>\n            <li class="pull-right button-pad">\n                <button aria-label="show champion" id="showChampionButton" class="showChampion button">\n                </button>\n            </li>\n            <li id="color-palette" class="hide">\n            </li>\n        </ul>\n        <div id="colorPaletteRegion" class="colorPaletteRegion">\n    '),
                    events: {
                        "click #currentColorButton": "onPaletteClick",
                        "click #showPaletteButton": "onPaletteClick"
                    },
                    triggers: s().extend({}, d.u.prototype.triggers, {
                        "click #chooseMarkerButton": "choose:marker",
                        "click #chooseHighlighterButton": "choose:highlighter"
                    }),
                    bindings: s().extend({}, d.u.prototype.bindings, {
                        ".chooseMarker": {
                            attributes: [{
                                name: "style",
                                observe: "currentColor",
                                onGet: e => `background-color: ${e}`
                            }],
                            classes: {
                                selected: {
                                    observe: "highlighter",
                                    onGet: e => !e
                                },
                                white: {
                                    observe: "currentColor",
                                    onGet: e => "#000000" === e
                                }
                            }
                        },
                        ".chooseHighlighter": {
                            attributes: [{
                                name: "style",
                                observe: "currentColor",
                                onGet: e => `background-color: ${e}`
                            }],
                            classes: {
                                selected: "highlighter",
                                white: {
                                    observe: "currentColor",
                                    onGet: e => "#000000" === e
                                }
                            }
                        }
                    })
                }),
                v = m.d.extend({
                    model: new C,
                    events: s().extend({}, m.d.prototype.events, {
                        "click #showChampionButton": "onShowChampion"
                    }),
                    bindings: s().extend({}, m.d.prototype.bindings, {
                        "#showChampionButton": {
                            observe: "champion",
                            visible: !0,
                            onGet: e => e && !s().isEmpty(e)
                        }
                    }),
                    initialize(e) {
                        this.toolbarComponent = this.toolbarComponent || new b({
                            model: new(l().Model)({})
                        }), m.d.prototype.initialize.apply(this, [e])
                    },
                    update() {
                        this.model.get("showChampion") && this.onShowChampion();
                        const e = this.model.get("size").width,
                            t = this.model.get("size").height,
                            o = this.model.get("sketchOptions");
                        if (!s().isEmpty(this.model.get("champion"))) {
                            const i = this.model.get("champion").lines;
                            new u.v(e, t, o).setLines(i);
                            const s = new g.n({
                                model: new(l().Model)({}),
                                el: "#showChampionButton",
                                width: e,
                                height: t,
                                sketchOptions: o
                            });
                            s.render(), s.model.set({
                                title: "",
                                lines: i
                            })
                        }
                        this.model.get("forceName") && this.nameCharacter(), m.d.prototype.update.apply(this)
                    },
                    onRender() {
                        this.showChildView("toolbar", this.toolbarComponent), m.d.prototype.onRender.apply(this)
                    },
                    onChildviewSketchpadReady() {
                        m.d.prototype.onChildviewSketchpadReady.apply(this), this.onChildviewChooseMarker()
                    },
                    onChildviewChooseMarker() {
                        this.sketchpadComponent.setHighlighter(!1), this.toolbarComponent.model.set("highlighter", !1);
                        const e = this.model.get("thicknesses")[0] || 2;
                        this.sketchpadComponent.setThickness(e)
                    },
                    onChildviewChooseHighlighter() {
                        this.sketchpadComponent.setHighlighter(!0), this.toolbarComponent.model.set("highlighter", !0);
                        const e = this.model.get("thicknesses")[1] || 8;
                        this.sketchpadComponent.setThickness(e)
                    },
                    onShowChampion() {
                        this.naming || (r().close(), r().fire({
                            html: "image",
                            customClass: {
                                popup: "worldchamps imageView"
                            },
                            didOpen: () => {
                                const e = this.model.get("size").width,
                                    t = this.model.get("size").height,
                                    o = this.model.get("sketchOptions"),
                                    i = this.model.get("champion").lines,
                                    s = w.c.htmlUnescape(this.model.get("champion").name);
                                new u.v(e, t, o).setLines(i);
                                const n = new g.n({
                                    el: ".worldchamps.imageView .swal2-html-container",
                                    width: e,
                                    height: t,
                                    sketchOptions: o
                                });
                                n.render(), n.model.set({
                                    title: s,
                                    lines: i
                                })
                            }
                        }))
                    },
                    autoSubmit() {
                        let e = "";
                        if (this.model.get("nameCharacter") && r().isVisible()) {
                            const t = r().getInput();
                            if (e = t ? t.value : "", e = w.c.sanitizeInput(e), e && e.length > 0) {
                                r().close();
                                const t = {
                                    name: e,
                                    action: "name"
                                };
                                this.model.get("textKey") && (t.textKey = this.model.get("textKey"), t.val = e), this.triggerMethod("client:message", t)
                            }
                        }
                    },
                    nameCharacter() {
                        if (this.naming) return;
                        this.naming = !0;
                        const e = this.model.get("nameMaxLength");
                        r().close(), r().fire({
                            animation: !1,
                            customClass: {
                                popup: "worldchamps nameView"
                            },
                            text: this.model.get("strings").name_modal_text,
                            cancelButtonText: this.model.get("strings").name_modal_cancel || "Cancel",
                            confirmButtonText: this.model.get("strings").name_modal_confirm || "OK",
                            input: "text",
                            allowOutsideClick: !1,
                            reverseButtons: !0,
                            inputAttributes: {
                                maxlength: e,
                                autocapitalize: "on",
                                autocorrect: "off",
                                autocomplete: "off"
                            },
                            showCancelButton: !0,
                            inputValidator: e => e ? null : this.model.get("strings").name_error_empty
                        }).then((e => {
                            if (this.naming = !1, !e.value) return;
                            const t = w.c.sanitizeInput(e.value);
                            if (!t) return;
                            const o = {
                                name: t,
                                action: "name"
                            };
                            this.model.get("textKey") && (o.textKey = this.model.get("textKey"), o.val = t), this.triggerMethod("client:message", o)
                        }))
                    },
                    chooseColor(e) {
                        this.sketchpadComponent.setColor(e), this.toolbarComponent.model.set("currentColor", e)
                    },
                    onChildviewChildviewButtonName() {
                        this.nameCharacter()
                    },
                    onChildviewButtonSubmit() {
                        const e = this.sketchpadComponent.getLines();
                        if (0 === e.length && !this.model.get("allowEmpty")) return c.b.show(Error(this.model.get("strings").drawing_empty)), !1;
                        const t = {
                            lines: e,
                            action: "submit"
                        };
                        return this.model.get("objectKey") && (t.objectKey = this.model.get("objectKey"), t.val = {
                            lines: e,
                            submit: !0
                        }), this.triggerMethod("client:message", t), !1
                    },
                    onTextFilterError(e) {
                        const t = this.model.get("strings").ERROR_REJECTED_TEXT || e.message;
                        c.b.show("error", {
                            customClass: {
                                popup: "worldchamps"
                            },
                            text: t
                        })
                    }
                });
            var y = o(19755),
                A = o.n(y),
                f = o(63574),
                x = o.n(f),
                k = o(24475),
                I = o(29014);
            const R = p.S.extend({
                    defaults: {
                        choiceId: void 0,
                        prompt: {},
                        questions: [],
                        error: null,
                        classes: [],
                        doneText: {},
                        announcePrompt: !1,
                        strings: {
                            survey_finished: "Thank you for your input. You did your civic duty!"
                        }
                    }
                }),
                E = x().View.extend({
                    className: "Survey scrollable",
                    template: s().template('<div id="controller" class="state-controller controller-content"> <div id="prompt" class="prompt text"></div> <div class="error text-danger"></div> <div id="question" class="question"> <div id="questionPrompt"></div> <div id="choices"></div> </div> <div class="surveyDone"> <span class="doneText"></span> </div> </div>'),
                    model: new R,
                    questionIndex: 0,
                    regions: {
                        prompt: "#prompt",
                        questionPrompt: "#questionPrompt",
                        choices: "#choices"
                    },
                    bindings: {
                        ".error": "error",
                        ".question": {
                            observe: "chosen",
                            visible: e => !e
                        },
                        ".surveyDone": {
                            observe: "chosen",
                            visible: e => null !== e && "" !== e && !1 !== e
                        },
                        ".doneText": {
                            observe: "strings",
                            updateMethod: "html",
                            onGet: e => e ? e.survey_finished : null
                        },
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: e => e && e.bgColor ? `background-color: ${e.bgColor}` : ""
                            }, {
                                name: "class",
                                observe: "classes",
                                onGet: e => e ? e.join(" ") : ""
                            }]
                        },
                        ".choice-button": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: e => e && e.buttonColor ? `background-color:${e.buttonColor}` : null
                            }]
                        }
                    },
                    initialize() {
                        this.promptView = this.promptView || new k.y({
                            model: new(l().Model)
                        }), this.questionPromptView = this.questionPromptView || new k.y({
                            model: new(l().Model)
                        }), this.choicesList = this.choicesList || new I.C({
                            action: "choose",
                            collection: new(l().Collection)
                        }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
                    },
                    onBeforeDestroy() {
                        "multiple" === this.model.get("type") && this.onChildviewChildviewButtonSubmit()
                    },
                    update() {
                        if (void 0 !== this.model.get("choiceId") && this.model.get("choiceId") === this.choiceId || (this.questionIndex = 0, this.model.setUpdate({
                                chosen: !1
                            }), this.choiceId = this.model.get("choiceId")), this.promptView.model.set(this.model.get("prompt")), this.questionIndex >= this.model.get("questions").length) this.model.get("chosen") || this.model.setUpdate({
                            chosen: !0
                        });
                        else {
                            const e = this.model.get("questions")[this.questionIndex];
                            this.questionPromptView.model.set(e.prompt), this.choicesList.collection.set(e.choices)
                        }
                    },
                    onRender() {
                        this.showChildView("prompt", this.promptView), this.showChildView("questionPrompt", this.questionPromptView), this.showChildView("choices", this.choicesList), this.stickit()
                    },
                    onAttach() {
                        this.update(), c.b.vibrate()
                    },
                    onChildviewChildviewButtonChoose(e) {
                        const t = this.choicesList.children.findByModel(e),
                            o = e.get("index"),
                            i = this.model.get("questions")[this.questionIndex].countGroupName;
                        return A()("button").removeClass("active"), t.$el.addClass("active"), "single" === this.model.get("type") && e.set("selected", !0), this.selected = [e.get("index")], this.triggerMethod("client:countGroup", {
                            name: i,
                            vote: o
                        }), this.questionIndex += 1, this.update(), !1
                    }
                });
            var O = o(37231),
                B = o(1169);
            const V = p.S.extend({
                    defaults: s().extend({}, O.G.prototype.model.defaults, {
                        champion: {},
                        sketchOptions: {
                            minThickness: 2,
                            thicknessFactor: 0,
                            smoothingFactor: .9,
                            thicknessSmoothingFactor: 0,
                            dotMultiplier: 1,
                            tipTaperFactor: 1
                        },
                        size: {
                            width: 640,
                            height: 640
                        }
                    })
                }),
                G = O.G.extend({
                    model: new V,
                    template: s().template(`\n        <div id="championRegion"></div>\n        ${B.Z}`),
                    bindings: s().extend({}, O.G.prototype.bindings, {
                        "#championRegion": {
                            observe: "champion",
                            visible: !0
                        }
                    }),
                    regions: s().extend({}, O.G.prototype.regions, {
                        champion: "#championRegion"
                    }),
                    initialize(e) {
                        this.championComponent = this.championComponent || new g.n({
                            model: new(l().Model)({})
                        }), O.G.prototype.initialize.apply(this, [e])
                    },
                    onRender() {
                        this.showChildView("champion", this.championComponent), O.G.prototype.onRender.apply(this)
                    },
                    update() {
                        if (this.model.get("champion")) {
                            const e = this.model.get("champion") || {},
                                t = e.size || {
                                    width: 640,
                                    height: 640
                                },
                                o = e.sketchOptions || this.model.get("sketchOptions");
                            this.championComponent.width = t.width, this.championComponent.height = t.height, this.championComponent.sketchOptions = o, this.championComponent.model.set({
                                title: e.name,
                                lines: e.lines
                            })
                        }
                        O.G.prototype.update.apply(this)
                    }
                });
            var L = o(97079),
                M = o(49273);
            const z = M.r.extend({
                    bindings: s().extend({}, M.r.prototype.bindings, {
                        "button:first": s().extend({}, M.r.prototype.bindings["button:first"], {
                            observe: ["text", "html", "image", "champion"],
                            updateMethod: "html",
                            onGet(e) {
                                let [t, o, i, s] = e, n = "";
                                if (o ? n += o : t && (n += A()("<div />").text(t).html()), i || s) {
                                    const e = new g.n({
                                        el: this.$el.find("button:first"),
                                        model: new(l().Model)({})
                                    });
                                    if (e.render(), i && e.model.set({
                                            src: i,
                                            title: w.c.htmlUnescape(n)
                                        }), s) {
                                        const {
                                            size: t,
                                            lines: o,
                                            sketchOptions: i
                                        } = s;
                                        e.width = t.width, e.height = t.height, e.sketchOptions = i, e.model.set({
                                            title: w.c.htmlUnescape(n),
                                            lines: o
                                        })
                                    }
                                    n = e.$el.html()
                                }
                                return n
                            }
                        })
                    })
                }),
                T = L.E.extend({
                    initialize(e) {
                        this.choicesList = new I.C({
                            childView: z
                        }), L.E.prototype.initialize.apply(this, [e])
                    }
                });
            var S = o(52650),
                K = o(79023);
            const U = S.W.extend({
                    template: s().template(`${K.Z}<div class="mech"></div>`)
                }),
                P = n.v.extend({
                    sessionModulePrefix: "WorldChampions",
                    getGameLayout(e) {
                        switch (e) {
                            case "Draw":
                                return this.setLayout(v);
                            case "Survey":
                                return this.setLayout(E);
                            case "EnterSingleText":
                                return this.setLayout(G);
                            case "MakeSingleChoice":
                                return this.setLayout(T);
                            case "Lobby":
                                return this.setLayout(U);
                            default:
                                return -1
                        }
                    },
                    parseBlob: e => (e.classes = e.classes || [], e.playerInfo = e.playerInfo || {}, e.playerInfo.classes = e.playerInfo.classes || [], e.playerInfo.avatar && (e.classes = s().union(e.classes, [e.playerInfo.avatar]), e.playerInfo.classes = s().union(e.playerInfo.classes, [e.playerInfo.avatar])), e)
                })
        }
    }
]);
//# sourceMappingURL=sourcemaps/7265.73ee6eb8be97c8016ca9.js.map