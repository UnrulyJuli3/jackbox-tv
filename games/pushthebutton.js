(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/pushthebutton"], {
        56716: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                MainView: () => ee
            });
            var i = s(19755),
                o = s.n(i),
                n = s(13469),
                l = s.n(n),
                a = s(72316),
                r = s.n(a),
                c = s(24340),
                d = s(266),
                h = s(59965);
            const p = h.p.extend({
                template: l().template('<div id="player" class="playerTopBar"> <div class="trapezoid"> <svg class="root" version="1.1" xmlns="http://www.w3.org/2000/svg"> <defs> <filter id="blur" x="0" y="0"> <feGaussianBlur in="SourceGraphic" stdDeviation="7"/> </filter> </defs> <svg class="fill" viewBox="0 0 47 47" preserveAspectRatio="xMinYMid"> <path d="M -47 0 L 0 47 L 0 0 Z"/> </svg> <svg class="fill" viewBox="0 0 47 47" preserveAspectRatio="xMaxYMid"> <path d="M 94 0 L 47 47 L 47 0 Z"/> </svg> <svg class="fill" viewBox="0 0 1 47" preserveAspectRatio="none"> <path d="M 0 0 L 1 0 L 1 47 L 0 47 Z"/> </svg> <g vector-effect="non-scaling-stroke" filter="url(#blur)"> <svg class="blur stroke angle" viewBox="0 0 47 47" preserveAspectRatio="xMinYMid"> <path d="M -47 0 L 0 47"/> </svg> <svg class="blur stroke angle" viewBox="0 0 47 47" preserveAspectRatio="xMaxYMid"> <path d="M 94 0 L 47 47"/> </svg> <svg class="blur stroke" viewBox="0 0 1 47" preserveAspectRatio="none"> <path d="M 0 47 L 1 47"/> </svg> </g> <g vector-effect="non-scaling-stroke"> <svg class="stroke angle" viewBox="0 0 47 47" preserveAspectRatio="xMinYMid"> <path d="M -47 0 L 0 47 L 2 47"/> </svg> <svg class="stroke angle" viewBox="0 0 47 47" preserveAspectRatio="xMaxYMid"> <path d="M 94 0 L 47 47 L 45 47"/> </svg> <svg class="stroke" viewBox="0 0 1 47" preserveAspectRatio="none"> <path d="M 0 47 L 1 47"/> </svg> </g> <svg class="shape" viewBox="0 0 65 47" preserveAspectRatio="xMinYMin"> <path d="M -65 0 L 0 0 L -40 40 L -65 40 Z"/> </svg> <svg class="shape" viewBox="0 0 65 47" preserveAspectRatio="xMaxYMin"> <path d="M 65 0 L 130 0 L 130 40 L 105 40 Z"/> </svg> </svg> </div> <div id="playericon" class="playerIcon"></div> <div id="playername" class="playerName controller-text glitchable glitch-header"></div> <div class="captain-indicator off glitchable glitch-text">CAPTAIN</div> </div> '),
                bindings: Object.assign(h.p.prototype.bindings, {
                    ".captain-indicator": {
                        classes: {
                            off: {
                                observe: "isCaptain",
                                onGet: e => !e
                            }
                        }
                    }
                })
            });
            var g = s(63574),
                m = s.n(g);
            const v = m().View.extend({
                tagName: "div",
                template: l().template('<div class="pressed-overlay"> <p class="pressed-message"></p> <div class="pressed-meter"> <div class="pressed-meter-background"></div> <div class="pressed-meter-foreground"></div> </div> </div> <div class="the-button"> <button class="the-button-circle circle glitchable glitch-button">THE<br/>BUTTON</button> </div> <div class="hurry-button"> <button class="hurry-button-circle circle glitchable glitch-hurry">HURRY!</button> </div>'),
                interval: null,
                intervalCount: 0,
                bindings: {
                    ":el": {
                        classes: {
                            pressed: "isPressed"
                        }
                    },
                    ".pressed-message": "message",
                    ".pressed-overlay": {
                        observe: "isPressed",
                        visible: !0,
                        classes: {
                            "shake-light": {
                                observe: "shake",
                                onGet: e => "light" === e
                            },
                            "shake-heavy": {
                                observe: "shake",
                                onGet: e => "heavy" === e
                            }
                        }
                    },
                    ".the-button": {
                        classes: {
                            disabled: "isButtonDisabled",
                            hidden: "isButtonHidden",
                            pressed: "isButtonPressed"
                        }
                    },
                    ".hurry-button": {
                        classes: {
                            disabled: "isHurryUpDisabled",
                            hidden: "isHurryUpHidden"
                        }
                    }
                },
                events: {
                    "mousedown .the-button-circle": "onButtonDown",
                    "touchstart .the-button-circle": "onButtonDown",
                    "mouseup .the-button-circle": "onButtonUp",
                    "touchend .the-button-circle": "onButtonUp",
                    "click .hurry-button-circle": "onHurryClick"
                },
                update() {
                    const e = this.model.get("blob"),
                        t = e && e.playerInfo ? e.playerInfo : {};
                    this.model.set({
                        isButtonDisabled: !t.pushTheButtonActive,
                        isButtonHidden: !t.pushTheButtonVisible,
                        isHurryUpDisabled: !t.hurryUpActive,
                        isHurryUpHidden: !t.hurryUpVisible
                    })
                },
                onRender() {
                    this.stickit()
                },
                onButtonDown() {
                    this.model.get("isButtonDisabled") || this.model.get("isButtonHidden") || this.interval || (this.startInterval(), this.model.set("isPressed", !0))
                },
                onButtonUp() {
                    this.interval && (this.killInterval(), this.model.set("isPressed", !1))
                },
                onHurryClick() {
                    this.model.get("isHurryUpDisabled") || this.model.get("isHurryUpHidden") || this.triggerMethod("client:message", {
                        action: "hurryUp"
                    })
                },
                startInterval() {
                    this.intervalCount = 0, this.model.set("message", "HOLD TO ACCUSE"), this.model.set("shake", "none"), this.interval = setInterval(this.onInterval.bind(this), 1e3)
                },
                onInterval() {
                    return this.intervalCount += 1, 1 === this.intervalCount ? (this.model.set("message", "ARE YOU SURE?"), void this.model.set("shake", "light")) : 2 === this.intervalCount ? (this.model.set("message", "THIS IS SERIOUS!"), void this.model.set("shake", "heavy")) : (this.triggerMethod("client:message", {
                        action: "pushthebutton"
                    }), void this.killInterval())
                },
                killInterval() {
                    this.model.set("isPressed", !1), clearInterval(this.interval), this.interval = null
                }
            });
            var u = s(97079),
                b = s(29014),
                w = s(49273);
            const y = w.r.extend({
                    template: l().template('<svg version="1.1" xmlns="http://www.w3.org/2000/svg"> <svg class="fill leaf-lg" viewBox="0 0 196 45" preserveAspectRatio="xMidYMid"> <path d="M 0 0 L 196 0 L 196 45 L 0 45 Z"/> </svg> <svg class="fill leaf-sm" viewBox="0 0 100 45" preserveAspectRatio="xMidYMid"> <path d="M 0 0 L 100 0 L 100 45 L 0 45 Z"/> </svg> <svg class="fill" viewBox="0 0 97.5 45" preserveAspectRatio="xMinYMid"> <path d="M 97.5 0 L 22.5 0 L 0 22.5 L 22.5, 45 L 97.5 45 Z"/> </svg> <svg class="fill" viewBox="0 0 97.5 45" preserveAspectRatio="xMaxYMid"> <path d="M 0 0 L 75 0 L 97.5 22.5 L 75 45 L 0 45 Z"/> </svg> <svg class="stroke leaf-lg" viewBox="0 0 196 45" preserveAspectRatio="xMidYMid"> <path d="M 0 0 L 196 0 M 0 45 L 196 45" vector-effect="non-scaling-stroke"/> </svg> <svg class="stroke leaf-sm" viewBox="0 0 100 45" preserveAspectRatio="xMidYMid"> <path d="M 0 0 L 100 0 M 0 45 L 100 45" vector-effect="non-scaling-stroke"/> </svg> <svg class="stroke" viewBox="-22.5 0 75 45" preserveAspectRatio="xMinYMid"> <path d="M 0 0 L 75 0 M 0 45 L 75 45" vector-effect="non-scaling-stroke"/> </svg> <svg class="stroke" viewBox="22.5 0 75 45" preserveAspectRatio="xMaxYMid"> <path d="M 0 0 L 75 0 M 0 45 L 75 45" vector-effect="non-scaling-stroke"/> </svg> <svg class="stroke angle" viewBox="-1 0 22.5 45" preserveAspectRatio="xMinYMid"> <path d="M 22.5 0 L 0 22.5 L 22.5 45" vector-effect="non-scaling-stroke"/> </svg> <svg class="stroke angle" viewBox="1 0 22.5 45" preserveAspectRatio="xMaxYMid"> <path d="M 0 0 L 22.5 22.5 L 0 45" vector-effect="non-scaling-stroke"/> </svg> </svg> <div class="hack-icon glitchable glitch-element"></div> <div class="count"></div> <button type="button" class="button choice-button btn btn-lg glitchable glitch-text"></button>'),
                    bindings: Object.assign(w.r.prototype.bindings, {
                        ".button": {
                            classes: {
                                "additional-info": {
                                    observe: "numTimesTested",
                                    onGet: e => void 0 !== e
                                }
                            }
                        },
                        ".hack-icon": {
                            observe: "isTrapped",
                            visible: !0
                        },
                        ".count": {
                            observe: "numTimesTested",
                            onGet: e => 1 === e ? "Tested 1 time" : `Tested ${e} times`,
                            classes: {
                                hidden: {
                                    observe: "numTimesTested",
                                    onGet: e => void 0 === e
                                },
                                untested: {
                                    observe: "numTimesTested",
                                    onGet: e => 0 === e
                                }
                            }
                        }
                    }),
                    handleClick: l().throttle(w.r.prototype.handleClick, 500)
                }),
                k = u.E.extend({
                    initialize(e) {
                        this.choicesList = this.choicesList || new b.C({
                            childView: y,
                            action: "choose",
                            collection: new(r().Collection)
                        }), u.E.prototype.initialize.apply(this, [e])
                    },
                    onRender() {
                        u.E.prototype.onRender.apply(this), "ConfirmedIdentity" === this.model.get("choiceId") && null === this.model.get("chosen") && this.createConfirmDelay()
                    },
                    createConfirmDelay() {
                        this.model.get("choices")[0].html = "CONFIRM IN 5", this.model.get("choices")[0].disabled = !0;
                        let e = 4,
                            t = window.setInterval((() => {
                                e ? this.model.get("choices")[0].html = `CONFIRM IN ${e}` : (this.model.get("choices")[0].html = "CONFIRM", this.model.get("choices")[0].disabled = !1, window.clearInterval(t), t = void 0), e -= 1, this.update()
                            }), 1e3)
                    }
                });
            var C = s(52650);
            const x = C.W.extend({
                initialize(e) {
                    this.choicesListView = new b.C({
                        childView: y
                    }), C.W.prototype.initialize.apply(this, [e])
                }
            });
            var f = s(37231);
            const M = f.G.extend({
                initialize(e) {
                    this.buttonsCollection = new(r().Collection)([{
                        text: "submit"
                    }]), this.buttonsComponent = new b.C({
                        childView: y,
                        block: !0,
                        collection: this.buttonsCollection
                    }), f.G.prototype.initialize.apply(this, [e])
                }
            });
            var L = s(24475),
                I = s(9659);
            const R = m().View.extend({
                className: "Captain scrollable",
                template: l().template('<div id="controller" class="state-controller controller-content"> <div id="prompt" class="prompt text col-xs-12 glitchable glitch-text glitch-element"></div> <div class="symbols"></div> <div> <div class="button-group btn-group btn-block"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg"> <svg class="fill leaf-lg" viewBox="0 0 195 45" preserveAspectRatio="xMidYMid"> <path d="M 0 0 L 195 0 L 195 45 L 0 45 Z"/> </svg> <svg class="fill leaf-sm" viewBox="0 0 100 45" preserveAspectRatio="xMidYMid"> <path d="M 0 0 L 100 0 L 100 45 L 0 45 Z"/> </svg> <svg class="fill" viewBox="0 0 97.5 45" preserveAspectRatio="xMinYMid"> <path d="M 97.5 0 L 22.5 0 L 0 22.5 L 22.5, 45 L 97.5 45 Z"/> </svg> <svg class="fill" viewBox="0 0 97.5 45" preserveAspectRatio="xMaxYMid"> <path d="M 0 0 L 75 0 L 97.5 22.5 L 75 45 L 0 45 Z"/> </svg> <svg class="stroke leaf-lg" viewBox="0 0 195 45" preserveAspectRatio="xMidYMid"> <path d="M 0 0 L 195 0 M 0 45 L 195 45" vector-effect="non-scaling-stroke"/> </svg> <svg class="stroke leaf-sm" viewBox="0 0 100 45" preserveAspectRatio="xMidYMid"> <path d="M 0 0 L 100 0 M 0 45 L 100 45" vector-effect="non-scaling-stroke"/> </svg> <svg class="stroke" viewBox="-22.5 0 75 45" preserveAspectRatio="xMinYMid"> <path d="M 0 0 L 75 0 M 0 45 L 75 45" vector-effect="non-scaling-stroke"/> </svg> <svg class="stroke" viewBox="22.5 0 75 45" preserveAspectRatio="xMaxYMid"> <path d="M 0 0 L 75 0 M 0 45 L 75 45" vector-effect="non-scaling-stroke"/> </svg> <svg class="stroke angle" viewBox="-1 0 22.5 45" preserveAspectRatio="xMinYMid"> <path d="M 22.5 0 L 0 22.5 L 22.5 45" vector-effect="non-scaling-stroke"/> </svg> <svg class="stroke angle" viewBox="1 0 22.5 45" preserveAspectRatio="xMaxYMid"> <path d="M 0 0 L 22.5 22.5 L 0 45" vector-effect="non-scaling-stroke"/> </svg> </svg> <button type="button" class="submit button choice-button btn btn-lg glitchable glitch-text">Submit</button> </div> </div> </div>'),
                model: new I.S,
                glyphMap: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "0", "1", "2", "3", "4"],
                events: {
                    "click .submit": "onSubmitClick"
                },
                regions: {
                    prompt: "#prompt"
                },
                bindings: {
                    ".symbols": {
                        observe: "symbols",
                        updateMethod: "html",
                        onGet: "buildSymbols"
                    },
                    ".button-group": {
                        classes: {
                            disabled: {
                                observe: "symbols",
                                onGet: e => e[e.length - 1].disabled
                            }
                        }
                    },
                    ".submit": {
                        observe: "symbols",
                        onGet: e => e[e.length - 1].html,
                        attributes: [{
                            name: "disabled",
                            observe: "symbols",
                            onGet: e => e[e.length - 1].disabled
                        }]
                    }
                },
                initialize() {
                    this.promptComponent = new L.y({
                        model: new(r().Model)
                    }), this.listenTo(this.model, "change", this.update, this)
                },
                update() {
                    this.promptComponent.model.set(this.model.get("prompt")), this.stickit()
                },
                onRender() {
                    this.showChildView("prompt", this.promptComponent), this.stickit()
                },
                onAttach() {
                    this.update()
                },
                buildSymbols(e) {
                    let t = "";
                    for (let s = 0; s < e.length - 1; s++) t += `<p class="symbol">${this.glyphMap[e[s].html]}</p>`;
                    return t
                },
                onSubmitClick() {
                    return this.triggerMethod("client:message", {
                        action: "submit"
                    }), !1
                }
            });
            var T = s(40543);
            const G = m().View.extend({
                    className: "hex-button",
                    tagName: "button",
                    template: l().template('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.5 100"> <path d="M34.8,99h45.8c3.3,0,6.4-1.8,8.1-4.7l22.9-39.7c1.7-2.9,1.7-6.4,0-9.3L88.7,5.7C87,2.8,84,1,80.6,1H34.8c-3.3,0-6.4,1.8-8.1,4.7L3.9,45.3c-1.7,2.9-1.7,6.4,0,9.3l22.9,39.7C28.4,97.2,31.5,99,34.8,99z"/> </svg> <div class="symbol"></div> '),
                    glyphMap: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "0", "1", "2", "3", "4"],
                    bindings: {
                        ":el": {
                            classes: {
                                selected: "selected",
                                disabled: "disabled",
                                down: "down"
                            }
                        },
                        ".symbol": {
                            observe: "html",
                            onGet(e) {
                                return this.glyphMap[e]
                            }
                        }
                    },
                    initialize() {
                        this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.stickit()
                    },
                    onRender() {
                        this.stickit()
                    },
                    onAttach() {
                        this.update(), T.b.vibrate()
                    }
                }),
                B = r().Model.extend({
                    idAttribute: "html"
                }),
                A = r().Collection.extend({
                    model: B
                }),
                V = m().CollectionView.extend({
                    className: "hex-grid",
                    childView: G,
                    collection: new A,
                    events: {
                        mousedown: "onGridDown",
                        touchstart: "onGridDown",
                        mouseup: "onGridUp",
                        touchend: "onGridUp",
                        click: "onGridClick"
                    },
                    layoutHexGrid() {
                        const e = [
                                [0, 0],
                                [1, 0],
                                [2, 0],
                                [0, 1],
                                [1, 1],
                                [2, 1],
                                [0, 2],
                                [1, 2],
                                [2, 2],
                                [1, 3]
                            ],
                            t = this.$(".hex-button"),
                            s = this.$el.outerWidth() / 2.5,
                            i = s / 1.1547;
                        let n = 0;
                        t.css({
                            width: s,
                            height: i
                        }), t.each((function(t) {
                            const l = o()(this),
                                a = e[t],
                                r = a[0],
                                c = a[1],
                                d = .75 * s * r;
                            let h = i * c;
                            r % 2 == 0 && (h += i / 2), n < h + i && (n = h + i);
                            const p = [];
                            p.push([d + .25 * s, h]), p.push([d + .75 * s, h]), p.push([d + s, h + .5 * i]), p.push([d + .75 * s, h + i]), p.push([d + .25 * s, h + i]), p.push([d, h + .5 * i]), l.data("points", p), l.css({
                                left: d,
                                top: h
                            })
                        }))
                    },
                    onGridClick(e) {
                        this.$(".hex-button").each(((t, s) => {
                            const i = o()(s).data("points");
                            if (this.isPointInside([e.offsetX, e.offsetY], i)) {
                                if (this.collection.at(t).get("disabled")) return;
                                this.triggerMethod("button:symbol", t)
                            }
                        }))
                    },
                    onGridDown(e) {
                        const t = e;
                        t.offsetX || (t.offsetX = t.touches[0].pageX - t.touches[0].target.offsetLeft), t.offsetY || (t.offsetY = t.touches[0].pageY - t.touches[0].target.offsetTop), this.$(".hex-button").each(((e, s) => {
                            const i = o()(s).data("points");
                            if (this.isPointInside([t.offsetX, t.offsetY], i)) {
                                const t = this.collection.at(e);
                                if (t.get("disabled")) return;
                                t.set({
                                    down: !0
                                })
                            }
                        }))
                    },
                    onGridUp() {
                        const e = this.collection.findWhere({
                            down: !0
                        });
                        e && e.set({
                            down: !1
                        })
                    },
                    isPointInside: (e, t) => {
                        const s = e[0],
                            i = e[1];
                        let o = !1;
                        for (let e = 0, n = t.length - 1; e < t.length; n = e++) {
                            const l = t[e][0],
                                a = t[e][1],
                                r = t[n][0],
                                c = t[n][1];
                            a > i != c > i && s < (r - l) * (i - a) / (c - a) + l && (o = !o)
                        }
                        return o
                    }
                }),
                S = m().View.extend({
                    className: "Participant scrollable",
                    template: l().template('<div id="controller" class="state-controller controller-content"> <div id="prompt" class="prompt text col-xs-12 glitchable glitch-text glitch-element"></div> <div id="symbolsRegion"></div> </div>'),
                    model: new I.S,
                    regions: {
                        prompt: "#prompt",
                        symbols: "#symbolsRegion"
                    },
                    initialize() {
                        this.promptComponent = new L.y({
                            model: new(r().Model)
                        }), this.symbolsComponent = new V, this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.promptComponent.model.set(this.model.get("prompt")), this.symbolsComponent.collection.set(this.model.get("symbols")), this.symbolsComponent.layoutHexGrid(), this.stickit()
                    },
                    onRender() {
                        this.showChildView("prompt", this.promptComponent), this.showChildView("symbols", this.symbolsComponent), this.stickit()
                    },
                    onAttach() {
                        this.update()
                    },
                    onChildviewButtonSymbol(e) {
                        return this.triggerMethod("client:message", {
                            action: "choose",
                            choice: e
                        }), !1
                    }
                }),
                O = m().View.extend({
                    className: "Report scrollable",
                    template: l().template('<div id="controller" class="state-controller controller-content"> <div class="modal"> <div class="container"> <svg class="in" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 90" preserveAspectRatio="xMaxYMid"> <polygon class="inner-0" points="113.7,56 99.8,56 92.8,68 99.8,80.1 113.7,80.1 120.7,68"/> <polygon class="outer-0" points="118.4,47.8 95.1,47.8 83.4,68 95.1,88.2 118.4,88.2 130.1,68"/> <polygon class="inner-1" points="113.7,8.1 99.8,8.1 92.8,20.2 99.8,32.2 113.7,32.2 120.7,20.2"/> <polygon class="outer-1" points="118.4,0 95.1,0 83.4,20.2 95.1,40.4 118.4,40.4 130.1,20.2"/> <polygon class="inner-2" points="73.1,32.1 59.2,32.1 52.3,44.1 59.2,56.2 73.1,56.2 80.1,44.1"/> <polygon class="outer-2" points="77.8,23.9 54.5,23.9 42.8,44.1 54.5,64.3 77.8,64.3 89.5,44.1"/> <polygon class="inner-3" points="34.4,57.8 20.5,57.8 13.5,69.8 20.5,81.9 34.4,81.9 41.3,69.8"/> <polygon class="outer-3" points="39.1,49.6 15.8,49.6 4.1,69.8 15.8,90 39.1,90 50.7,69.8"/> </svg> <p class="title in">Bioscan Report</p> <p class="prompt in">It is up to you to decide what to do with this information.</p> <p class="result in"> <span class="username"></span> is <span class="role"></span> </p> <p class="help in">NOTICE: Aliens may want to consider lying.</p> </div> </div> </div>'),
                    model: new I.S,
                    bindings: {
                        ".username": {
                            observe: "player",
                            onGet: e => e.name
                        },
                        ".role": {
                            observe: "player",
                            onGet: e => e.role
                        }
                    },
                    initialize() {
                        this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.stickit()
                    },
                    onRender() {
                        this.stickit()
                    },
                    onAttach() {
                        this.update(), T.b.vibrate()
                    }
                });
            var N = s(93618);
            const H = m().View.extend({
                    tagName: "div",
                    className: "response",
                    template: l().template('<button class="suspicion-button glitchable glitch-element"> <p class="name glitchable glitch-text"></p> <p class="text glitchable glitch-text"></p> <div id="sketchpadRegion" class="drawing glitchable glitch-sketch"></div> <div class="suspicious-icon"></div> </button> <button class="censor-button"></button>'),
                    events: {
                        "click .suspicion-button": "onResponseClick",
                        "click .censor-button": "onCensorClick"
                    },
                    regions: {
                        drawing: "#sketchpadRegion"
                    },
                    bindings: {
                        ":el": {
                            classes: {
                                selected: "selected",
                                censored: "censored",
                                disabled: "disabled",
                                censorable: {
                                    observe: ["canCensor", "censorable"],
                                    onGet() {
                                        return this.model.get("canCensor") && this.model.get("censorable")
                                    }
                                }
                            }
                        },
                        ".name": "playerName",
                        ".text": {
                            observe: "response",
                            updateMethod: "html",
                            onGet: e => e,
                            classes: {
                                hidden: {
                                    observe: "type",
                                    onGet: e => "Drawing" === e
                                },
                                code: {
                                    observe: "type",
                                    onGet: e => "CodeWord" === e
                                }
                            }
                        },
                        ".drawing": {
                            classes: {
                                hidden: {
                                    observe: "type",
                                    onGet: e => "Drawing" !== e
                                }
                            }
                        }
                    },
                    initialize() {
                        "string" != typeof this.model.get("response") && (this.sketchpadComponent = new N.e({
                            model: new(r().Model)
                        })), this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.sketchpadComponent && (this.sketchpadComponent.model.set("size", {
                            width: 240,
                            height: 320
                        }), this.model.changed.censored && this.onChildviewSketchpadReady()), this.stickit()
                    },
                    onAttach() {
                        this.update()
                    },
                    onRender() {
                        this.sketchpadComponent && this.showChildView("drawing", this.sketchpadComponent), this.model.set("index", this.getOption("index")), this.stickit()
                    },
                    onChildviewSketchpadReady() {
                        const e = this.model.get("response").map((e => ({
                            thickness: 6,
                            color: e.color,
                            points: e.points
                        })));
                        this.sketchpadComponent.setLines(e)
                    },
                    onResponseClick: l().throttle((function() {
                        this.triggerMethod("button:suspicious", this.model)
                    }), 1e3),
                    onCensorClick() {
                        this.triggerMethod("button:censor", this.model)
                    }
                }),
                Y = r().Model.extend({
                    idAttribute: "playerName"
                }),
                D = r().Collection.extend({
                    model: Y
                }),
                P = m().CollectionView.extend({
                    className: "responses",
                    childView: H,
                    collection: new D,
                    initialize() {
                        this.listenTo(this.collection, "sync", this.render)
                    },
                    childViewOptions: (e, t) => ({
                        index: t
                    })
                }),
                z = m().View.extend({
                    className: "SuspicionVote scrollable",
                    template: l().template('<div id="controller" class="state-controller controller-content"> <div id="prompt" class="prompt text col-xs-12 glitchable glitch-element"></div> <div id="responsesRegion"></div> </div>'),
                    model: new I.S,
                    regions: {
                        prompt: "#prompt",
                        responses: "#responsesRegion"
                    },
                    initialize() {
                        this.promptComponent = new L.y({
                            model: new(r().Model)
                        }), this.responsesComponent = new P, this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.promptComponent.model.set(this.model.get("prompt"));
                        const e = this.model.get("choices"),
                            t = this.model.get("canCensor");
                        e.map((e => {
                            const s = e;
                            return s.canCensor = t, s
                        })), this.responsesComponent.collection.set(e), this.stickit()
                    },
                    onRender() {
                        this.showChildView("prompt", this.promptComponent), this.showChildView("responses", this.responsesComponent), this.stickit()
                    },
                    onAttach() {
                        this.update(), T.b.vibrate()
                    },
                    onDestroy() {
                        this.responsesComponent.collection.reset()
                    },
                    onChildviewChildviewButtonSuspicious(e) {
                        return !0 === e.get("disabled") || (void 0 === e.get("selected") ? e.set({
                            selected: !0
                        }) : e.set({
                            selected: !e.get("selected")
                        }), this.triggerMethod("client:message", {
                            action: "choose",
                            choice: {
                                index: e.get("index"),
                                value: !e.get("selected")
                            }
                        })), !1
                    },
                    onChildviewChildviewButtonCensor(e) {
                        return !0 === e.get("censored") || !0 !== e.get("censorable") || !0 !== e.get("canCensor") || this.triggerMethod("client:message", {
                            action: "censor",
                            choice: {
                                index: e.get("index")
                            }
                        }), !1
                    }
                }),
                U = m().View.extend({
                    className: "probe-player",
                    template: l().template('<button class="detail-button"> <div class="avatar"></div> <p class="name glitchable glitch-text glitch-element"></p> <p class="count glitchable glitch-text glitch-element"></p> </button> <button class="hack-button glitchable glitch-element"></button>'),
                    events: {
                        "click .detail-button": "onDetailClick",
                        "click .hack-button": "onHackClick"
                    },
                    bindings: {
                        ":el": {
                            classes: {
                                hacked: "isTrapped",
                                "animate-on": {
                                    observe: "isTrapped",
                                    onGet: (e, t) => !0 === t.view.model.changed.isTrapped
                                },
                                "animate-off": {
                                    observe: "isTrapped",
                                    onGet: (e, t) => !1 === t.view.model.changed.isTrapped
                                }
                            }
                        },
                        ".avatar": {
                            attributes: [{
                                name: "class",
                                observe: "playerInfo",
                                onGet: e => e.avatar
                            }]
                        },
                        ".name": {
                            observe: "playerInfo",
                            onGet: e => e ? e.username : ""
                        },
                        ".count": {
                            observe: "responses",
                            onGet() {
                                return this.model.responsesText()
                            },
                            classes: {
                                untested: {
                                    observe: "responses",
                                    onGet: e => 0 === e.length
                                }
                            }
                        },
                        ".hack-button": {
                            classes: {
                                active: {
                                    observe: "playerInfo",
                                    onGet(e) {
                                        return !!e && ("hack" === this.model.hackState() || "unhack" === this.model.hackState())
                                    }
                                },
                                disabled: {
                                    observe: "playerInfo",
                                    onGet(e) {
                                        return !!e && "disabled" === this.model.hackState()
                                    }
                                },
                                other: {
                                    observe: "playerInfo",
                                    onGet(e) {
                                        return !!e && "hacked" === this.model.hackState()
                                    }
                                },
                                decoy: {
                                    observe: "playerInfo",
                                    onGet(e) {
                                        return !!e && "decoy" === this.model.hackState()
                                    }
                                }
                            },
                            observe: "playerInfo",
                            onGet(e) {
                                return e ? this.model.hackLabel() : ""
                            }
                        }
                    },
                    initialize() {
                        this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.stickit()
                    },
                    onRender() {
                        this.stickit()
                    },
                    onAttach() {
                        this.update()
                    },
                    onDetailClick() {
                        this.triggerMethod("button:show", this.model)
                    },
                    onHackClick() {
                        this.triggerMethod("button:hack", this.model)
                    }
                }),
                j = r().Model.extend({
                    idAttribute: "username",
                    responsesText() {
                        const e = this.get("responses");
                        return e ? 1 === e.length ? "Tested 1 time" : `Tested ${e.length} times` : ""
                    },
                    captainTimeText() {
                        const e = this.get("durationAsCaptain");
                        if (void 0 === e) return "";
                        let t = Math.floor(e / 60),
                            s = Math.floor(e % 60);
                        return t < 10 && (t = `0${t}`), s < 10 && (s = `0${s}`), `${t}:${s}`
                    },
                    isHacked() {
                        return this.get("isTrapped")
                    },
                    hackedBy() {
                        const e = this.get("trappedBy");
                        return e ? e.username : null
                    },
                    hackMessage() {
                        return this.isHacked() ? this.hackedBy() === this.get("playerName") ? "Hacked By YOU" : `Hacked by ${this.hackedBy()}` : null
                    },
                    hackState() {
                        return void 0 === this.get("canTrap") || null === this.get("canTrap") ? "decoy" : this.isHacked() && this.hackedBy() ? this.hackedBy() === this.get("playerName") ? "unhack" : "hacked" : this.get("canTrap") ? "hack" : "disabled"
                    },
                    hackLabel() {
                        switch (this.hackState()) {
                            case "unhack":
                                return "UNHACK";
                            case "hacked":
                                return "HACKED";
                            case "decoy":
                                return "";
                            default:
                                return "HACK"
                        }
                    }
                }),
                $ = r().Collection.extend({
                    model: j,
                    getWithUsername(e) {
                        return this.find((t => t.get("playerInfo").username === e))
                    }
                }),
                E = m().CollectionView.extend({
                    tagName: "div",
                    className: "probe-players",
                    childView: U,
                    collection: new $,
                    hasRendered: !1,
                    onAttach() {
                        this.hasRendered = !0
                    },
                    childViewOptions(e, t) {
                        return {
                            index: t,
                            hasRendered: this.hasRendered
                        }
                    }
                }),
                Z = m().View.extend({
                    className: "response glitchable glitch-element",
                    template: l().template('<p class="prompt glitchable glitch-text"></p> <p class="text glitchable glitch-text"></p> <div id="sketchpadRegion" class="drawing glitchable glitch-sketch"></div> <div class="suspicion"></div> <button class="censor-button"></button>'),
                    events: {
                        "click .censor-button": "onCensorClick"
                    },
                    regions: {
                        drawing: "#sketchpadRegion"
                    },
                    bindings: {
                        ":el": {
                            classes: {
                                drawing: {
                                    observe: "type",
                                    onGet: e => "Drawing" === e
                                },
                                code: {
                                    observe: "type",
                                    onGet: e => "CodeWord" === e
                                },
                                censored: "censored",
                                censorable: {
                                    observe: ["canCensor", "censorable"],
                                    onGet() {
                                        return this.model.get("canCensor") && this.model.get("censorable")
                                    }
                                }
                            }
                        },
                        ".prompt": "prompt",
                        ".text": {
                            observe: "response",
                            onGet: e => "string" == typeof e ? e : ""
                        },
                        ".suspicion": {
                            attributes: [{
                                name: "style",
                                observe: "suspicion",
                                onGet: e => `width: ${20*e}px;`
                            }]
                        }
                    },
                    initialize() {
                        "string" != typeof this.model.get("response") && (this.sketchpadComponent = new N.e({
                            model: new(r().Model)
                        })), this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.sketchpadComponent && (this.sketchpadComponent.model.set("size", {
                            width: 240,
                            height: 320
                        }), this.model.changed.censored && this.onChildviewSketchpadReady()), this.stickit()
                    },
                    onAttach() {
                        this.update()
                    },
                    onRender() {
                        this.sketchpadComponent && this.showChildView("drawing", this.sketchpadComponent), this.stickit()
                    },
                    onChildviewSketchpadReady() {
                        const e = this.model.get("response").map((e => ({
                            thickness: 6,
                            color: e.color,
                            points: e.points
                        })));
                        this.sketchpadComponent.setLines(e)
                    },
                    onCensorClick() {
                        this.triggerMethod("button:censor", this.model)
                    }
                }),
                W = m().View.extend({
                    className: "response active",
                    template: l().template('<p class="empty glitchable glitch-text glitch-element">NO RESPONSES TO INVESTIGATE</p>')
                }),
                F = m().CollectionView.extend({
                    tagName: "div",
                    className: "responses",
                    collection: new(r().Collection)([]),
                    childView: Z,
                    emptyView: W,
                    initialize() {
                        this.listenTo(this.collection, "sync", this.render)
                    },
                    childViewOptions: (e, t) => ({
                        index: t
                    })
                }),
                X = m().View.extend({
                    className: "probe-detail",
                    template: l().template('<div class="container"> <div class="details-header"> <div class="avatar"></div> <p class="name glitchable glitch-text glitch-element"></p> <p class="count glitchable glitch-text glitch-element"></p> </div> <button class="close-button glitchable glitch-element"></button> <div class="bottom"> <p class="hack-message glitchable glitch-text"></p> <div class="bottom-container"> <button class="hack-button glitchable glitch-element"></button> </div> </div> <div id="responsesRegion"></div> </div>'),
                    hasOpened: !1,
                    events: {
                        click: "onCloseClick",
                        "click .close-button": "onCloseClick",
                        "click .container": "onContainerClick",
                        "click .hack-button": "onHackClick"
                    },
                    regions: {
                        responses: "#responsesRegion"
                    },
                    bindings: {
                        ":el": {
                            classes: {
                                hacked: "isTrapped",
                                "animate-on": {
                                    observe: "isTrapped",
                                    onGet(e, t) {
                                        return !0 === t.view.model.changed.isTrapped && this.hasOpened
                                    }
                                },
                                "animate-off": {
                                    observe: "isTrapped",
                                    onGet(e, t) {
                                        return !1 === t.view.model.changed.isTrapped && this.hasOpened
                                    }
                                }
                            }
                        },
                        ".avatar": {
                            attributes: [{
                                name: "class",
                                observe: "playerInfo",
                                onGet: e => e.avatar
                            }]
                        },
                        ".name": {
                            observe: "playerInfo",
                            onGet: e => e ? e.username : ""
                        },
                        ".count": {
                            observe: "responses",
                            onGet(e) {
                                return e ? `${this.model.responsesText()} | ${this.model.captainTimeText()} Captain Time` : ""
                            }
                        },
                        ".hack-button": {
                            observe: "playerInfo",
                            onGet(e) {
                                return e ? this.model.hackLabel() : ""
                            },
                            classes: {
                                active: {
                                    observe: "playerInfo",
                                    onGet(e) {
                                        return !!e && ("hack" === this.model.hackState() || "unhack" === this.model.hackState())
                                    }
                                },
                                disabled: {
                                    observe: "playerInfo",
                                    onGet(e) {
                                        return !!e && "disabled" === this.model.hackState()
                                    }
                                },
                                other: {
                                    observe: "playerInfo",
                                    onGet(e) {
                                        return !!e && "hacked" === this.model.hackState()
                                    }
                                },
                                decoy: {
                                    observe: "playerInfo",
                                    onGet(e) {
                                        return !!e && "decoy" === this.model.hackState()
                                    }
                                }
                            }
                        },
                        ".hack-message": {
                            observe: "playerInfo",
                            onGet(e) {
                                return e ? this.model.hackMessage() : ""
                            },
                            classes: {
                                hidden: {
                                    observe: "isTrapped",
                                    onGet: e => !e
                                }
                            }
                        }
                    },
                    initialize() {
                        this.responsesComponent = new F, this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        const e = this.model.get("responses"),
                            t = this.model.get("canCensor"),
                            s = this.model.get("playerIndex");
                        e.map(((e, i) => {
                            const o = e;
                            return o.canCensor = t, o.playerIndex = s, o.responseIndex = i, o
                        })), this.responsesComponent.collection.set(e), this.stickit()
                    },
                    onRender() {
                        this.showChildView("responses", this.responsesComponent), this.stickit()
                    },
                    onAttach() {
                        this.update(), this.hasOpened = !0
                    },
                    onCloseClick() {
                        this.$el.addClass("closing"), setTimeout((() => {
                            this.triggerMethod("button:close", this)
                        }), 300)
                    },
                    onContainerClick(e) {
                        e.stopImmediatePropagation()
                    },
                    onHackClick() {
                        this.triggerMethod("button:hack", this.model)
                    }
                }),
                K = m().View.extend({
                    className: "Probe scrollable",
                    template: l().template('<div id="controller" class="state-controller controller-content"> <div id="prompt" class="prompt text col-xs-12 glitchable glitch-text glitch-element"></div> <div id="playersRegion"></div> <div id="detailRegion"></div> </div>'),
                    model: new I.S,
                    regions: {
                        prompt: "#prompt",
                        players: "#playersRegion",
                        detail: "#detailRegion"
                    },
                    initialize() {
                        this.playersComponent = null, this.model.unset("canTrap"), this.promptComponent = new L.y({
                            model: new(r().Model)
                        }), this.playersComponent = new E, this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.promptComponent.model.set(this.model.get("prompt"));
                        const e = this.model.get("players"),
                            t = this.model.get("playerInfo").username,
                            s = this.model.get("canCensor");
                        for (let i = 0; i < e.length; i++) e[i].username = e[i].playerInfo.username, e[i].playerName = t, e[i].canCensor = s, e[i].playerIndex = i;
                        if (this.playersComponent.collection.set(e), this.detailComponent) {
                            const e = this.detailComponent.model.get("playerInfo").username,
                                t = this.playersComponent.collection.getWithUsername(e);
                            this.detailComponent.model = t, this.detailComponent.update()
                        }
                        this.stickit()
                    },
                    onRender() {
                        this.showChildView("prompt", this.promptComponent), this.showChildView("players", this.playersComponent), this.stickit()
                    },
                    onAttach() {
                        this.update(), T.b.vibrate()
                    },
                    onDestroy() {
                        this.playersComponent.collection.reset()
                    },
                    onChildviewChildviewButtonShow(e) {
                        this.detailComponent = new X({
                            model: e
                        }), this.showChildView("detail", this.detailComponent)
                    },
                    onChildviewButtonClose() {
                        this.getChildView && this.getChildView("detail") && this.getChildView("detail").destroy()
                    },
                    onChildviewButtonHack(e) {
                        const t = e.hackState();
                        "hack" !== t && "unhack" !== t || this.triggerMethod("client:message", {
                            action: "hack",
                            choice: e.collection.indexOf(e)
                        })
                    },
                    onChildviewChildviewButtonHack(e) {
                        this.onChildviewButtonHack(e)
                    },
                    onChildviewChildviewChildviewButtonCensor(e) {
                        return !0 === e.get("censored") || !0 !== e.get("canCensor") || this.triggerMethod("client:message", {
                            action: "censor",
                            choice: {
                                playerIndex: e.get("playerIndex"),
                                responseIndex: e.get("responseIndex")
                            }
                        }), !1
                    }
                }),
                q = m().View.extend({
                    className: "GameOver",
                    template: l().template('<div class="image"></div>'),
                    model: new I.S,
                    bindings: {
                        ":el": {
                            classes: {
                                alien: {
                                    observe: "winningRole",
                                    onGet: e => "Alien" === e
                                },
                                human: {
                                    observe: "winningRole",
                                    onGet: e => "Human" === e
                                }
                            }
                        }
                    },
                    initialize() {
                        this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.stickit()
                    },
                    onRender() {
                        this.stickit()
                    },
                    onAttach() {
                        this.update()
                    }
                });

            function J(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? J(Object(s), !0).forEach((function(t) {
                        _(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : J(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function _(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            const ee = c.v.extend({
                sessionModulePrefix: "Push The Button",
                lacksAudience: !0,
                template: l().template(`<div class="warning"></div> <div class="space"> <div class="stars"></div> <div class="stars"></div> <div class="stars"></div> <div class="stars"></div> <div class="stars"></div> </div>${d.Z}<div id="the-button-region" class="TheButton"></div>`),
                glitchTimer: null,
                regions: Object.assign(c.v.prototype.regions, {
                    button: "#the-button-region"
                }),
                bindings: Q(Q({}, c.v.prototype.bindings), {}, {
                    ":el": Object.assign(c.v.prototype.bindings, {
                        classes: {
                            "phase-none": {
                                observe: "visualIntensity",
                                onGet: e => "none" === e
                            },
                            "phase-easy": {
                                observe: "visualIntensity",
                                onGet: e => "easy" === e
                            },
                            "phase-medium": {
                                observe: "visualIntensity",
                                onGet: e => "medium" === e
                            },
                            "phase-hard": {
                                observe: "visualIntensity",
                                onGet: e => "hard" === e
                            }
                        }
                    })
                }),
                initialize(e) {
                    this.playerTopBar = new p, this.buttonView = new v({
                        model: new(r().Model)
                    }), c.v.prototype.initialize.apply(this, [e])
                },
                update(e, t) {
                    c.v.prototype.update.apply(this, [e, t]), this.buttonView.model = this.model, this.buttonView.update(), this.updateVisualIntensity(), this.model.changed.visualIntensity && this.updateGlitches()
                },
                getGameLayout(e) {
                    switch (e) {
                        case "MakeSingleChoice":
                            return this.setLayout(k);
                        case "Lobby":
                            return this.setLayout(x);
                        case "EnterSingleText":
                            return this.setLayout(M);
                        case "AnalyzeCaptain":
                            return this.setLayout(R);
                        case "AnalyzeParticipant":
                            return this.setLayout(S);
                        case "AnalysisReport":
                            return this.setLayout(O);
                        case "SuspicionVote":
                            return this.setLayout(z);
                        case "Probe":
                            return this.setLayout(K);
                        case "GameOver":
                            return this.setLayout(q);
                        default:
                            return -1
                    }
                },
                onAttach() {
                    c.v.prototype.onAttach.apply(this), this.showChildView("button", this.buttonView)
                },
                parseBlob(e) {
                    const t = e;
                    if ("Draw" === t.state && this.setDrawingProperties(t), "GameOver" === t.state && delete t.playerInfo, "AnalyzePlayer" === t.state) {
                        const e = t.playerInfo;
                        e ? e.isCaptain ? t.state = "AnalyzeCaptain" : t.state = "AnalyzeParticipant" : t.state = "Logo"
                    }
                    return t
                },
                setDrawingProperties(e) {
                    const t = e;
                    t.colors = ["#000000"], t.defaultIndex = 0, t.thicknesses = [4], t.sketchOptions = {
                        minThickness: .3,
                        thicknessFactor: 0,
                        smoothingFactor: .55,
                        thicknessSmoothingFactor: .6,
                        dotMultiplier: 2,
                        tipTaperFactor: .7
                    }
                },
                updateVisualIntensity() {
                    const e = this.model.get("blob");
                    e && e.gameInfo && e.gameInfo.visualIntensity && "Lobby" !== e.state ? this.model.set("visualIntensity", e.gameInfo.visualIntensity) : this.model.set("visualIntensity", "none")
                },
                updateGlitches() {
                    this.stopGlitches(), "medium" !== this.model.get("visualIntensity") ? "hard" !== this.model.get("visualIntensity") ? this.glitchTimer = setInterval(this.onGlitchTimer.bind(this), 1e4) : this.glitchTimer = setInterval(this.onGlitchTimer.bind(this), 1500) : this.glitchTimer = setInterval(this.onGlitchTimer.bind(this), 3e3)
                },
                onGlitchTimer() {
                    const e = Math.random(),
                        t = this.model.get("visualIntensity");
                    let s;
                    if (e > .5) return;
                    const i = this.$(".glitchable");
                    switch (t) {
                        case "hard":
                            s = l().random(.2 * i.length, .3 * i.length);
                            break;
                        case "medium":
                            s = l().random(.02 * i.length, .1 * i.length);
                            break;
                        default:
                            s = l().random(.01 * i.length, .02 * i.length)
                    }
                    const n = l().sample(i, s);
                    for (let e = 0; e <= s; e++) {
                        const t = `glitch-${l().random(0,5)}`,
                            s = o()(n[e]);
                        s.attr("data-text", s.text()).addClass("glitched").addClass(t)
                    }
                    setTimeout((() => {
                        i.removeClass("glitched glitch-0 glitch-1 glitch-2 glitch-3 glitch-4 glitch-5").removeAttr("data-text")
                    }), l().random(250, 1500))
                },
                stopGlitches() {
                    this.glitchTimer && clearInterval(this.glitchTimer)
                }
            })
        }
    }
]);
//# sourceMappingURL=sourcemaps/8428.a5e232285575e1ae4588.js.map