(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/overdrawn"], {
        4342: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                MainView: () => D
            });
            var i = o(13469),
                s = o.n(i),
                n = o(10972),
                a = o(24340),
                l = o(59965),
                r = o(72316),
                c = o.n(r),
                d = o(63574),
                h = o.n(d),
                p = o(9659),
                m = o(93618);
            const g = p.S.extend({
                    defaults: {
                        live: !0,
                        size: {
                            height: 140,
                            width: 360
                        }
                    }
                }),
                u = h().View.extend({
                    template: s().template('<div class="overdrawnBold title">Draw your name below</div> <div id="nametag" class="nametag"> <div id="header" class="nametagHeader overdrawnBold">Hello, I\'m</div> <div id="sketchpad" class="nametagBody"></div> </div> <button id="submitButton" class="button submitButton">Submit</button> <div id="vipWarning" class="text">You must draw your name and click submit to proceed.</div>'),
                    className: "Name",
                    model: new g,
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: e => e && e.color && e.color.veryLight ? `background-color:${e.color.veryLight.hexString}` : null
                            }]
                        },
                        ".nametag": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: e => e && e.color && e.color.dark ? `background-color:${e.color.dark.hexString}` : null
                            }]
                        },
                        "#vipWarning": {
                            attributes: [{
                                name: "style",
                                observe: "isAllowedToStartGame",
                                onGet: e => "display:" + (e ? "block" : "none")
                            }]
                        }
                    },
                    regions: {
                        sketchpad: "#sketchpad"
                    },
                    events: {
                        "click .submitButton": "submit"
                    },
                    initialize() {
                        this.sketchpadComponent = new m.e({
                            model: new(c().Model)({
                                live: !0,
                                thicknesses: [1],
                                size: {
                                    width: 360,
                                    height: 140
                                }
                            })
                        }), this.listenTo(this.model, "change", this.update, this), this.listenTo(this.sketchpadComponent, "sketchpad:line", this.onLine)
                    },
                    onRender() {
                        this.getRegion("sketchpad").show(this.sketchpadComponent), this.stickit()
                    },
                    update() {
                        this.model.get("size") && this.sketchpadComponent.model.set("size", this.model.get("size"))
                    },
                    onLine(e) {
                        if (this.model.get("live")) {
                            const t = this.sketchpadComponent.getThumbnailImage();
                            this.triggerMethod("client:message", {
                                action: "line2",
                                line: e,
                                thumbnail: t
                            })
                        }
                    },
                    submit() {
                        this.sketchpadComponent.getLines().length > 0 && this.triggerMethod("client:message", {
                            action: "submit",
                            lines: this.sketchpadComponent.getLines()
                        })
                    }
                });
            var b = o(52650),
                v = o(48398);
            const y = p.S.extend({
                    defaults: s().extend({}, b.W.prototype.model.defaults, {
                        resetAll: !1,
                        sketchpad: null
                    })
                }),
                k = b.W.extend({
                    model: new y({}),
                    template: s().template('<div id="controller" class="state-controller controller-content"> <div id="title" class="lobbyTitle">title</div> <div id="vipMenu" class="vipMenu"> <div id="choices" class="choicesContainer col-xs-12">choices</div> </div> <div id="artifactId" class="artifactContainer text"> <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank"> <div class="artifactButton"></div> </a> </div> <div id="characters" class="charactersContainer col-xs-12"></div> </div> '),
                    bindings: s().extend({}, b.W.prototype.bindings, {
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: e => e && e && e.color && e.color.veryLight ? `background-color:${e.color.veryLight.hexString}` : null
                            }]
                        },
                        ".charactersContainer": {
                            observe: "sketchpad",
                            visible: !0
                        }
                    }),
                    events: s().extend({}, b.W.prototype.events, {
                        "click #resetall": "onResetAll"
                    }),
                    initialize(e) {
                        this.sketchpadComponent = new m.e({
                            images: {
                                "images/overdrawn/thankyou.png": v
                            },
                            template: s().template('<div class="text">Free-for-all drawing mode</div> <div id="canvasContainer" class="canvasContainer"> <canvas id="fullLayer" class="sketchpad fullLayer" width="480" height="600" style=""> </canvas> </div> <ul id="pre-sketchpad" class="nav nav-colors pre-sketchpad"> <li class="pull-right button-pad"> <button id="resetall" class="button">Reset All</button> </li> <li id="color-palette" class="hide"> </li> </ul> '),
                            model: new(c().Model)({}),
                            bindings: s().extend(m.e.prototype.bindings, {
                                "#resetall": {
                                    observe: "canCensor",
                                    visible: !0
                                }
                            })
                        }), this.sketchpadComponent.setThickness(1), this.listenTo(this.sketchpadComponent, "sketchpad:line", this.onLine), b.W.prototype.initialize.apply(this, [e])
                    },
                    update() {
                        if (b.W.prototype.update.apply(this), this.sketchpadComponent.model.set("canCensor", this.model.get("canCensor")), this.model.get("resetAll") && this.sketchpadComponent) {
                            const e = this.model.get("sketchpad");
                            this.sketchpadComponent.resetAll(), this.sketchpadComponent.setImage(e.image), this.model.setUpdate({
                                resetAll: !1
                            })
                        }
                    },
                    onChildviewSketchpadReady() {
                        if (this.model.get("isPlayer") && this.model.get("sketchpad")) {
                            const e = this.model.get("sketchpad");
                            this.sketchpadComponent.setImage(e.image), this.sketchpadComponent.setColor(this.model.get("playerInfo").color.dark.hexString), this.sketchpadComponent.model.set("size", this.model.get("sketchpad").size)
                        }
                    },
                    onRender() {
                        b.W.prototype.onRender.apply(this);
                        const e = this.getRegion("characters");
                        this.model.get("isPlayer") && e.show(this.sketchpadComponent)
                    },
                    onLine(e) {
                        this.model.get("sketchpad") && this.model.get("sketchpad").live && this.triggerMethod("client:message", {
                            action: "line",
                            line: e
                        })
                    },
                    onResetAll() {
                        this.triggerMethod("client:message", {
                            action: "resetAll"
                        })
                    }
                });
            var C = o(34813);
            const x = C.s.extend({
                bindings: s().extend({}, C.s.prototype.bindings, {
                    ":el": {
                        attributes: [{
                            name: "style",
                            observe: "playerInfo",
                            onGet: e => e && e.color && e.color.veryLight ? `background-color:${e.color.veryLight.hexString}` : ""
                        }]
                    }
                }),
                update() {
                    this.model.attributes.imageClass = "logo-image"
                }
            });
            var w = o(86455),
                f = o.n(w),
                L = o(41393),
                S = (o(70989), o(29014));
            const G = {
                    2: [6, 6],
                    3: [4, 4, 4],
                    4: [3, 3, 3, 3],
                    5: [6, 6, 4, 4, 4],
                    6: [4, 4, 4, 4, 4, 4],
                    7: [4, 4, 4, 3, 3, 3, 3],
                    8: [3, 3, 3, 3, 3, 3, 3, 3]
                },
                T = {
                    2: "l",
                    3: "m",
                    4: "s",
                    5: "m",
                    6: "m",
                    7: "s",
                    8: "s"
                },
                I = h().View.extend({
                    template: s().template("<button class='button choice-button btn btn-lg'></div>"),
                    tagName: "div",
                    className: "Murals",
                    events: {
                        click: "onClick"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: "class"
                            }]
                        },
                        ".choice-button": {
                            observe: "text",
                            attributes: [{
                                name: "disabled",
                                observe: "disabled",
                                onGet: e => e ? "disabled" : ""
                            }]
                        }
                    },
                    onRender() {
                        this.stickit()
                    },
                    onClick() {
                        this.triggerMethod("drawing:censor", this.model)
                    }
                }),
                M = h().View.extend({
                    bindings: {
                        ".playerTopBar": {
                            visible: !1
                        },
                        "#prompt": "text"
                    },
                    regions: {
                        choices: "#choices"
                    },
                    template: s().template('<div id="prompt" class="prompt">prompt</div> <div id="choices" class="">choices</div> '),
                    initialize() {
                        this.choicesList = new S.C({
                            className: "choices",
                            childView: I,
                            collection: new(c().Collection),
                            block: !1
                        }), this.update(), this.listenTo(this.model, "change", this.update, this), this.render()
                    },
                    onRender() {
                        this.showChildView("choices", this.choicesList), this.stickit()
                    },
                    update() {
                        let e = this.model.get("choices");
                        e && e.length > 0 && (e = s().map(e, ((t, o) => (t.choice = o, t.class = `mural-${G[e.length][o]} mural-${T[e.length]}`, t)))), this.choicesList.collection.set(e)
                    }
                }),
                N = '<div id="nametag" class="nametag" style="background-color:<%=color%>"> <div id="header" class="nametagHeader overdrawnBold">Hello, I\'m</div> <div id="body" class="nametagBody"><%=playerName%></div> </div>',
                O = L.d.extend({
                    events: s().extend({}, L.d.prototype.events, {
                        "click #censorOptions": "showCensorOptions"
                    }),
                    bindings: s().extend({}, L.d.prototype.bindings, {
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: e => e && e.color && e.color.veryLight ? `background-color:${e.color.veryLight.hexString}` : ""
                            }]
                        },
                        ".playerTopBar": {},
                        "#playername": {
                            observe: "playerInfo",
                            updateMethod: "html",
                            onGet(e) {
                                const t = s().template(N);
                                let o = "audience";
                                const i = e && e.color && e.color.dark ? e.color.dark.hexString : "";
                                return e && e.thumbnail ? o = `<img src='${e.thumbnail}' class='playerThumbnail'/>` : e && e.username && (o = e.username.toLowerCase()), t({
                                    playerName: o,
                                    color: i
                                })
                            }
                        },
                        "#censorOptions": {
                            observe: "canCensor",
                            visible: !0
                        }
                    }),
                    showCensorOptions() {
                        const e = this;
                        f().fire({
                            html: "player",
                            padding: 0,
                            background: e.model.get("playerInfo").color.dark.hexString,
                            confirmButtonText: "close",
                            customClass: {
                                popup: "overdrawn censorOptions",
                                confirmButton: "button"
                            },
                            buttonsStyling: !1,
                            didOpen: () => {
                                this.censorView = new M({
                                    el: ".overdrawn.censorOptions",
                                    model: new(c().Model)({
                                        text: "Choose someone to censor",
                                        choices: e.model.get("censorChoices")
                                    }),
                                    onChildviewChildviewDrawingCensor(t) {
                                        e.triggerMethod("client:message", {
                                            action: t.get("action"),
                                            choice: t.get("choice")
                                        }), f().close()
                                    }
                                })
                            }
                        })
                    }
                });
            var R = o(97079);
            const $ = h().View.extend({
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: ["label", "clicked"],
                                onGet: e => e[0] + (e[1] ? " active" : "")
                            }, {
                                name: "aria-label",
                                observe: "label"
                            }]
                        }
                    },
                    events: {
                        click: "onClick"
                    },
                    template: s().template(""),
                    className: "reaction",
                    onRender() {
                        this.stickit()
                    },
                    onClick() {
                        this.trigger("reaction:click", this.model)
                    }
                }),
                B = h().CollectionView.extend({
                    className: "reactionCollection",
                    childView: $
                }),
                z = R.E.extend({
                    template: s().template('<div id="controller" class="state-controller controller-content"> <div id="prompt" class="prompt col-xs-12">prompt</div> <div id="chosen" class="chosen col-xs-12">asdf</div> <div class="error text-danger"></div> <div class="col-xs-6"> <div id="leftChoices" class="choices">choices</div> <span>Left</span> </div> <div class="col-xs-6"> <div id="rightChoices" class="choices">choices</div> <span>Right</span> </div> <button id="censorOptions" class="button">Censor Options</button> <div id="next-up"> <span id="next-up-span">You\'re Up Next!!</span> </div> <div class="audienceInstruction col-xs-12 text">Audience members get one reaction per drawing, so use them wisely!</div> </div>'),
                    events: {
                        "click #censorOptions": "onCensorOptionsClick"
                    },
                    regions: {
                        prompt: "#prompt",
                        leftChoices: "#leftChoices",
                        rightChoices: "#rightChoices"
                    },
                    bindings: s().extend({}, R.E.prototype.bindings, {
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: e => e && e.color && e.color.veryLight ? `background-color:${e.color.veryLight.hexString}` : ""
                            }]
                        },
                        ".playerTopBar": {},
                        "#playername": {
                            observe: "playerInfo",
                            updateMethod: "html",
                            onGet(e) {
                                const t = s().template(N);
                                let o = "audience";
                                const i = e && e.color && e.color.dark ? e.color.dark.hexString : "";
                                return e && e.thumbnail ? o = `<img src='${e.thumbnail}' class='playerThumbnail'/>` : e && e.playerName && (o = e.playerName.toLowerCase()), t({
                                    playerName: o,
                                    color: i
                                })
                            }
                        },
                        "#playericon": {
                            attributes: [{
                                name: "class",
                                observe: "playerAvatar",
                                onGet: e => e ? e.playerAvatar : "none"
                            }]
                        },
                        "#next-up": {
                            observe: "isNext",
                            visible: !0
                        },
                        "#next-up-span": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: e => e && e.color ? `background-color:${e.color.dark.hexString};border:5px solid ${e.color.dark.hexString};` : ""
                            }]
                        },
                        "#censorOptions": {
                            observe: "canCensor",
                            visible: !0
                        },
                        ".audienceInstruction": {
                            observe: "isAudience",
                            visible: !0
                        }
                    }),
                    initialize(e) {
                        this.leftChoices = new B({
                            collection: new(c().Collection)
                        }), this.rightChoices = new B({
                            collection: new(c().Collection)
                        }), R.E.prototype.initialize.apply(this, [e]), this.listenTo(this.leftChoices, "childview:reaction:click", this.sendReaction), this.listenTo(this.rightChoices, "childview:reaction:click", this.sendReaction), this.delayReaction = !1
                    },
                    onRender() {
                        const e = this.getRegion("prompt"),
                            t = this.getRegion("leftChoices"),
                            o = this.getRegion("rightChoices");
                        e.show(this.promptComponent), t.show(this.leftChoices), o.show(this.rightChoices), this.stickit()
                    },
                    update() {
                        if (this.blob = this.model.attributes, !this.blob) return;
                        this.promptComponent.model.set("text", this.blob.text), this.promptComponent.model.set("className", this.blob.className);
                        let e = this.blob.choices;
                        e && e.length > 0 && (e = s().map(e, (e => ("string" == typeof e && (e = {
                            text: e
                        }), e.censorable = this.blob.canCensor, e.action = e.action || "choose", e.mural = e.mural || "0", e.block = !0, e))));
                        const t = s().groupBy(e, "mural");
                        this.leftChoices.collection.set(t[0]), this.rightChoices.collection.set(t[1])
                    },
                    sendReaction(e) {
                        if (this.model.get("isPlayer")) this.delayReaction || (this.triggerMethod("client:message", {
                            action: e.get("action"),
                            choice: e.get("index")
                        }), this.delayReaction = !0, window.setTimeout((() => {
                            this.delayReaction = !1
                        }), 80));
                        else if (this.model.get("isAudience")) {
                            let t = " Vote";
                            if (e.get("mural") > 0) {
                                if (this.rightChoices.$el.hasClass("clicked")) return;
                                t += " Right", this.rightChoices.$el.addClass("clicked"), e.set("clicked", "true")
                            } else {
                                if (this.leftChoices.$el.hasClass("clicked")) return;
                                this.leftChoices.$el.addClass("clicked"), e.set("clicked", "true")
                            }
                            this.sessionName = t, this.triggerMethod("client:countGroup", {
                                name: this.model.get("countGroupName"),
                                vote: e.get("index")
                            })
                        }
                    },
                    onCensorOptionsClick() {
                        const e = this;
                        f().fire({
                            html: "player",
                            customClass: {
                                confirmButton: "button",
                                popup: "overdrawn censorOptions"
                            },
                            padding: 0,
                            background: this.blob.playerInfo.color.dark.hexString,
                            confirmButtonText: "close",
                            buttonsStyling: !1,
                            didOpen: () => {
                                this.censorView = new M({
                                    el: ".overdrawn.censorOptions",
                                    model: new(c().Model)({
                                        text: "Choose someone to censor",
                                        choices: this.model.get("censorChoices")
                                    }),
                                    onChildviewChildviewDrawingCensor(t) {
                                        e.triggerMethod("client:message", {
                                            action: t.get("action"),
                                            choice: t.get("choice")
                                        }), f().close()
                                    }
                                })
                            }
                        })
                    }
                });
            var A = o(19755),
                V = o.n(A);
            const P = {
                    2: [6, 6],
                    3: [4, 4, 4],
                    4: [3, 3, 3, 3],
                    5: [6, 6, 4, 4, 4],
                    6: [4, 4, 4, 4, 4, 4],
                    7: [4, 4, 4, 3, 3, 3, 3],
                    8: [3, 3, 3, 3, 3, 3, 3, 3]
                },
                E = {
                    2: "l",
                    3: "m",
                    4: "s",
                    5: "m",
                    6: "m",
                    7: "s",
                    8: "s"
                },
                W = R.E.extend({
                    template: s().template('<div id="controller" class="state-controller controller-content"> <div id="prompt" class="prompt col-xs-12">prompt</div> <div id="chosen" class="chosen col-xs-12"></div> <div class="error text-danger"></div> <div id="choicesRegion">choices</div> <button id="censorOptions" class="button">Censor Options</button> <div id="next-up"> <span id="next-up-span">You\'re Up Next!!</span> </div> </div> '),
                    events: {
                        "click .choices button": "buttonClick",
                        "click #censorOptions": "showCensorOptions"
                    },
                    bindings: s().extend({}, R.E.prototype.bindings, {
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: e => e && e.color && e.color.veryLight ? `background-color:${e.color.veryLight.hexString}` : ""
                            }]
                        },
                        ".choices": {},
                        "#censorOptions": {
                            observe: "censorChoices",
                            visible: !0
                        },
                        "#next-up": {
                            observe: "isNext",
                            visible: !0
                        },
                        "#next-up-span": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: e => e && e.color ? `background-color:${e.color.dark.hexString};border:5px solid ${e.color.dark.hexString};` : ""
                            }]
                        },
                        "#chosen": {
                            observe: "chosen",
                            onGet: e => e ? "Thanks! Every vote counts!" : null
                        }
                    }),
                    initialize(e) {
                        R.E.prototype.initialize.apply(this, [e]), this.choicesList = new S.C({
                            className: "choices btn-toolbar col-xs-12",
                            block: !1
                        }), this.update()
                    },
                    update() {
                        if (this.blob = this.model.attributes, !this.blob) return;
                        this.promptComponent.model.set("text", this.blob.chosen ? "" : this.blob.text);
                        const e = this.promptComponent.model.get("text") && -1 !== this.promptComponent.model.get("text").indexOf("addition");
                        let t = this.blob.choices;
                        t && t.length > 0 && (t = s().map(t, ((o, i) => ("string" == typeof o && (o = {
                            text: o
                        }), o.censorable = this.blob.canCensor && !e, o.action = o.action || "choose", e && (o.className = `Murals mural-${P[t.length][i]} mural-${E[t.length]}`), o.block = !e, o)))), null !== this.blob.chosen ? this.choicesList.collection.reset() : this.choicesList.collection.set(t)
                    },
                    buttonClick(e) {
                        const t = V()(e.currentTarget),
                            o = t.data("index");
                        let i = t.data("action");
                        return i || (i = "choose"), this.model.get("isPlayer") ? this.triggerMethod("client:message", {
                            action: i,
                            choice: o
                        }) : this.model.get("isAudience") && (this.triggerMethod("client:countGroup", {
                            name: this.model.get("countGroupName"),
                            vote: o
                        }), this.model.setUpdate({
                            prompt: {
                                text: `Thank you. Your choice: ${this.blob.choices[o].text}`
                            },
                            choices: []
                        })), !1
                    },
                    showCensorOptions() {
                        const e = this;
                        f().fire({
                            html: "player",
                            padding: 0,
                            background: this.blob.playerInfo.color.dark.hexString,
                            confirmButtonText: "close",
                            customClass: {
                                popup: "overdrawn censorOptions MakeSingleChoice",
                                confirmButton: "button"
                            },
                            buttonsStyling: !1,
                            didOpen: () => {
                                this.censorView = new M({
                                    el: ".overdrawn.censorOptions",
                                    model: new(c().Model)({
                                        text: "Choose someone to censor",
                                        choices: this.model.get("censorChoices")
                                    }),
                                    onChildviewChildviewDrawingCensor(t) {
                                        e.triggerMethod("client:message", {
                                            action: t.get("action"),
                                            choice: t.get("choice")
                                        }), f().close()
                                    }
                                })
                            }
                        })
                    }
                });
            var _ = o(37231);
            const H = _.G.extend({
                    bindings: s().extend({}, _.G.prototype.bindings, {
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "playerInfo",
                                onGet: e => e && e.color && e.color.veryLight ? `background-color:${e.color.veryLight.hexString}` : null
                            }]
                        },
                        ".playerTopBar": {},
                        "#playername": {
                            observe: "playerInfo",
                            updateMethod: "html",
                            onGet(e) {
                                const t = s().template(N);
                                let o = "audience";
                                const i = e && e.color && e.color.dark ? e.color.dark.hexString : "";
                                return e && e.thumbnail ? o = `<img src='${e.thumbnail}' class='playerThumbnail'/>` : e && e.username && (o = e.username.toLowerCase()), t({
                                    playerName: o,
                                    color: i
                                })
                            }
                        }
                    }),
                    sendInput() {
                        this.inputComponent.model.set("error", null);
                        const e = this.inputComponent.getSanitizedValue();
                        return e && 0 !== e.length ? (this.shouldSubmit = !1, this.model.sendMessage({
                            entry: e
                        }), this.$el.find(".enterSingleTextFieldset").prop("disabled", !0), !1) : (this.inputComponent.model.set("error", "Try typing something before submitting!"), !1)
                    }
                }),
                D = a.v.extend({
                    sessionModulePrefix: "Overdrawn",
                    getGameLayout(e) {
                        switch (e) {
                            case "Name":
                                return this.setLayout(u);
                            case "Lobby":
                                return this.setLayout(k);
                            case "Logo":
                                return this.setLayout(x);
                            case "Draw":
                                return this.setLayout(O);
                            case "Reaction":
                                return this.setLayout(z);
                            case "MakeSingleChoice":
                                return this.setLayout(W);
                            case "EnterSingleText":
                                return this.setLayout(H);
                            default:
                                return -1
                        }
                    },
                    initialize(e) {
                        const t = l.p.extend({
                            template: s().template('<div id="player" class="playerTopBar"> <div id="playericon" class="playerIcon"></div> <div id="playername" class="playerName controller-text"> <div id="nametag" class="nametag"> <div id="header" class="nametagHeader overdrawnBold">Hello, I\'m</div> <div id="body" class="nametagBody"></div> </div> </div> </div> '),
                            bindings: {
                                ":el": {
                                    observe: ["username", "thumbnail"],
                                    visible: e => e[0] || e[1],
                                    attributes: [{
                                        name: "style",
                                        observe: "color",
                                        onGet: e => e && e.veryLight ? `background-color:${e.veryLight.hexString}` : ""
                                    }]
                                },
                                ".nametag": {
                                    attributes: [{
                                        name: "style",
                                        observe: "color",
                                        onGet: e => e && e.dark && e.dark.hexString ? `background-color:${e.dark.hexString}` : ""
                                    }]
                                },
                                ".nametagBody": {
                                    observe: ["username", "thumbnail"],
                                    updateMethod: "html",
                                    onGet: e => e[1] ? `<img src='${e[1]}' class='playerThumbnail'/>` : e[0]
                                }
                            }
                        });
                        this.playerTopBar = new t, a.v.prototype.initialize.apply(this, [e])
                    },
                    parseBlob: e => (e.playerInfo = e.playerInfo || {}, e.playerInfo.username = e.playerName || "Audience", "Gameplay" === e.state && (e.state = "Logo"), "Lobby" === e.state && (n.app.client.isRole("player") || (e.state = "Logo"), e.playerIsVIP = e.isAllowedToStartGame, e.playerCanStartGame = e.isAllowedToStartGame, e.playerCanCensor = e.canCensor, e.gameCanStart = -1 !== ["CanStart", "Countdown", "PostGame"].indexOf(e.lobbyState), e.gameIsStarting = "Countdown" === e.lobbyState, e.gameFinished = "PostGame" === e.lobbyState, e.sketchpad && (e.sketchpad.live = !0)), "EnterSingleText" === e.state && (e.prompt = {
                        html: e.text
                    }, e.doneText = {
                        html: "Thanks"
                    }), "MakeSingleChoice" === e.state && (!1 === e.chosen && (e.chosen = null), e.choices = e.choices.map((e => (e.html = e.html ? e.html : e.text, e.text = void 0, e)))), e.censorablePlayers && delete e.censorablePlayers, e),
                    formatSessionMessage: e => ("start" === e.action && (e.start = !0), "cancel" === e.action && (e.cancel = !0), "PostGame_Continue" === e.action && (e.start = !0, e.decision = "PostGame_Continue"), "PostGame_NewGame" === e.action && (e.start = !0, e.decision = "PostGame_NewGame"), e)
                })
        },
        48398: (e, t, o) => {
            "use strict";
            e.exports = o.p + "games/overdrawn/a283f2557fb100ab69f5.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/6507.0af62b1ee9526df37bf8.js.map