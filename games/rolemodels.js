(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/rolemodels"], {
        24970: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                MainView: () => D
            });
            var i = o(24340),
                s = o(13469),
                n = o.n(s),
                l = o(72316),
                r = o.n(l),
                c = o(63574),
                a = o.n(c),
                d = o(9659),
                h = o(24475);

            function m(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, i)
                }
                return o
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(o), !0).forEach((function(t) {
                        g(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function g(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            const p = d.S.extend({
                    defaults: {
                        prompt: {
                            html: ""
                        },
                        roles: [],
                        players: [],
                        showDoubleDown: !0,
                        countGroupName: null,
                        confirmed: !1,
                        canConfirm: !1,
                        readyToConfirm: !1
                    }
                }),
                b = a().View.extend({
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: ["selected", "placeholder"],
                                onGet(e) {
                                    let t = "";
                                    return e[0] && (t += " selected"), e[1] && (t += " placeholder"), t
                                }
                            }, {
                                name: "style",
                                observe: ["color", "selected", "used", "placeholder"],
                                onGet(e) {
                                    const t = e[0],
                                        o = e[1],
                                        i = e[2],
                                        s = e[3];
                                    let n = "";
                                    return t && (o ? (n += "border: 4px solid black;", n += `background-color:${t};`) : i ? (n += `border: 4px solid ${t};`, n += "background-color: transparent;") : s ? (n += "border: 2px solid #333;", n += "background-color: #ccc;", n += "color: #333;") : n += `background-color:${t};`), n
                                }
                            }]
                        },
                        ".name": "name"
                    },
                    template: n().template('<div class="name"></div>'),
                    className: "nameView",
                    tagName: "button",
                    events: {
                        click: "handleClick",
                        mousedown: "handleTouchStart",
                        touchstart: "handleTouchStart"
                    },
                    handleClick() {
                        this.triggerMethod("name:click", this)
                    },
                    handleTouchStart() {
                        this.triggerMethod("name:dragStart", this)
                    },
                    onAttach() {
                        this.stickit()
                    }
                }),
                w = a().CollectionView.extend({
                    collection: new(r().Collection)([]),
                    className: "nameListView",
                    childView: b,
                    initialize() {
                        this.listenTo(this.collection, "sync", this.render)
                    }
                }),
                v = a().View.extend({
                    tagName: "button",
                    bindings: {
                        ".name": "name",
                        ".body": {
                            observe: "choice",
                            updateMethod: "html"
                        },
                        ".footer": {
                            visible: !0,
                            observe: "name"
                        },
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: ["hover", "color"],
                                onGet(e) {
                                    let t = "";
                                    return e[0] && (t += " hover"), e[1] && (t += " color"), t
                                }
                            }, {
                                name: "style",
                                observe: "color",
                                onGet(e) {
                                    let t = "";
                                    return e && (t += `background: linear-gradient(180deg, #000000 0%, #000000 49%, ${e} 49%, ${e} 100%);`, t += "background-size: 100% 200%;", t += "background-position:bottom;", t += "color:black;"), t
                                }
                            }]
                        },
                        ".doubleDown": {
                            observe: "showDoubleDown",
                            visible: !0,
                            attributes: [{
                                name: "class",
                                observe: "doubleDown",
                                onGet: e => e ? "selected" : ""
                            }]
                        }
                    },
                    className: "roleView",
                    template: n().template('\n        <div class="body"></div>\n        <div class="footer">\n            <div class="name"></div>\n            <button aria-label="Double Down" class="doubleDown"></button>\n        </div>'),
                    events: {
                        "click .doubleDown": "handleDoubleDown",
                        click: "handleClick"
                    },
                    handleClick() {
                        this.triggerMethod("role:click", this)
                    },
                    handleDoubleDown(e) {
                        e.preventDefault(), this.triggerMethod("doubleDown:click", this)
                    },
                    onAttach() {
                        this.stickit()
                    }
                }),
                f = a().CollectionView.extend({
                    collection: new(r().Collection)([]),
                    childView: v,
                    className: "roleListView",
                    initialize() {
                        this.listenTo(this.collection, "sync", this.render)
                    }
                }),
                y = a().View.extend({
                    model: new p,
                    template: n().template('<div id="controller" class="state-controller controller-content"> <div id="prompt" class="prompt text col-xs-12"></div> <div id="namesRegion" class="names"></div> <div id="instructionsRegion" class="instructions"></div> <div id="rolesRegion" class="roles"></div> <button id="submit" class="button choice-button btn btn-lg submit">SUBMIT</button> <div id="mirror" class="mirror"></div> </div>'),
                    className: "Sortable scrollable",
                    regions: {
                        prompt: "#prompt",
                        names: "#namesRegion",
                        instructions: "#instructionsRegion",
                        roles: "#rolesRegion"
                    },
                    bindings: {
                        ".submit.button": {
                            observe: "canConfirm",
                            visible(e) {
                                if (!this.namesList) return !1;
                                const t = this.namesList.children.every((e => e.model.get("used")));
                                return e && t
                            }
                        }
                    },
                    events: {
                        touchmove: "handleDragMove",
                        mousemove: "handleDragMove",
                        mouseup: "handleDragEnd",
                        touchend: "handleDragEnd",
                        touchcancel: "handleDragEnd",
                        "click #submit": "sendGameUpdate"
                    },
                    initialize() {
                        this.promptComponent = this.promptComponent || new h.y({
                            model: new(r().Model)
                        }), this.namesList = this.namesList || new w({
                            collection: new(r().Collection)([])
                        }), this.rolesList = this.rolesList || new f({
                            collection: new(r().Collection)([])
                        }), this.instructionView = this.instructionView || new h.y, this.listenTo(this.model, "change", this.update, this)
                    },
                    update() {
                        this.promptComponent.model.set(this.model.get("prompt"));
                        const e = this.model.get("players"),
                            t = this.model.get("showDoubleDown"),
                            o = this.model.get("roles").map((e => u(u({}, e), {}, {
                                showDoubleDown: t
                            })));
                        this.namesList.collection.set(e), this.rolesList.collection.set(o);
                        const i = this.model.get("isAudience") ? "Drag one player to the role that fits them best." : "Drag players into their roles";
                        this.instructionView.model.set("html", i), this.chosen = !1, this.stickit()
                    },
                    onRender() {
                        this.showChildView("prompt", this.promptComponent), this.showChildView("names", this.namesList), this.showChildView("instructions", this.instructionView), this.showChildView("roles", this.rolesList), this.stickit()
                    },
                    onAttach() {
                        this.update()
                    },
                    onBeforeDestroy() {
                        this.timedScroll(0)
                    },
                    handleSubmitButton() {
                        this.sendGameUpdate(!0)
                    },
                    assignNameToRole(e, t) {
                        const o = e.model.get("name"),
                            i = e.model.get("color"),
                            s = e.model.get("index");
                        this.removeNameFromRoles(e);
                        const n = t.model.get("nameIndex");
                        void 0 !== n && this.namesList.children.forEach((e => {
                            e.model.get("index") === n && e.model.set("used", !1)
                        })), t.model.set("name", o), t.model.set("color", i), t.model.set("nameIndex", s), t.model.set("doubleDown", !1), e.model.set("selected", !1), e.model.set("used", !0), this.sendGameUpdate(), this.model.get("isAudience") && (this.chosen = !0)
                    },
                    removeNameFromRoles(e) {
                        const t = e.model.get("index");
                        this.rolesList.children.forEach((e => {
                            e.model.get("nameIndex") === t && (e.model.set("name", null), e.model.set("color", null), e.model.set("nameIndex", void 0), e.model.set("doubleDown", !1))
                        })), e.model.set("used", !1)
                    },
                    findHoveredRole(e) {
                        const t = e.changedTouches && e.changedTouches.length ? e.changedTouches[0].clientY : e.clientY,
                            o = e.changedTouches && e.changedTouches.length ? e.changedTouches[0].clientX : e.clientX;
                        return this.rolesList.children.find((e => {
                            const i = e.el.getBoundingClientRect();
                            return o > i.left && o < i.left + i.width && t > i.top && t < i.top + i.height
                        }))
                    },
                    sendGameUpdate(e) {
                        const t = !!e;
                        let o = -1;
                        const i = this.rolesList.children.filter((e => void 0 !== e.model.get("nameIndex"))).map((e => {
                            const t = e.model.get("nameIndex"),
                                i = e.model.get("index");
                            return o = `${i},${t}`, {
                                player: t,
                                role: i,
                                doubleDown: e.model.get("doubleDown")
                            }
                        }));
                        this.model.get("isAudience") ? (this.triggerMethod("client:countGroup", {
                            name: this.model.get("countGroupName"),
                            vote: o
                        }), this.chosen = !0) : this.triggerMethod("client:message", {
                            action: "sort",
                            layout: i,
                            confirm: t
                        })
                    },
                    onChildviewChildviewNameClick(e) {
                        this.chosen || (this.selectedNameView && (this.selectedNameView.model.set("selected", !1), this.selectedNameView.model.set("placeholder", !1)), e.model.set("selected", !0), this.selectedNameView = e)
                    },
                    onChildviewChildviewRoleClick(e) {
                        this.dragging || this.selectedNameView && (this.assignNameToRole(this.selectedNameView, e), this.selectedNameView = null, this.stickit())
                    },
                    onChildviewChildviewDoubleDownClick(e) {
                        this.rolesList.children.forEach((e => e.model.set("doubleDown", !1))), e.model.set("doubleDown", !0), this.sendGameUpdate()
                    },
                    onChildviewChildviewNameDragStart(e) {
                        if (this.chosen) return;
                        this.removeNameFromRoles(e);
                        const t = e.el.cloneNode(!0),
                            o = e.el.getBoundingClientRect(),
                            i = o.width || o.right - o.left,
                            s = o.height || o.bottom - o.top,
                            n = document.getElementById("mirror");
                        n.innerHTML = "", n.appendChild(t), n.style.display = "block", n.style.width = `${i}px`, n.style.height = `${s}px`, n.style.top = "-9999px", this.dragging = !0, this.dragSelectedNameView = e, e.model.set("placeholder", !0)
                    },
                    handleDragMove(e) {
                        if (!this.dragging) return !0;
                        e.preventDefault();
                        const t = document.getElementById("mirror"),
                            o = t.getBoundingClientRect();
                        let i = e.touches && e.touches.length ? e.touches[0].clientY : e.clientY,
                            s = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
                        i -= .5 * o.height, s -= .5 * o.width, t.style.top = `${i}px`, t.style.left = `${s}px`, this.rolesList.children.forEach((e => {
                            e.model.set("hover", !1)
                        }));
                        const n = this.findHoveredRole(e);
                        n && n.model.set("hover", !0);
                        const l = window.innerHeight;
                        return i < .1 * l ? this.timedScroll(-1) : i > .9 * l ? this.timedScroll(1) : this.timedScroll(0), !0
                    },
                    handleDragEnd(e) {
                        if (!this.dragging) return !0;
                        const t = document.getElementById("mirror");
                        t.style.display = "none";
                        const o = this.findHoveredRole(e);
                        return o && this.assignNameToRole(this.dragSelectedNameView, o), this.dragSelectedNameView.model.set("placeholder", !1), this.dragSelectedNameView = null, this.rolesList.children.forEach((e => {
                            e.model.set("hover", !1)
                        })), t.innerHTML = "", this.dragging = !1, this.timedScroll(0), this.stickit(), !0
                    },
                    timedScroll(e) {
                        this.scrollDirection !== e && (clearInterval(this.scrollInterval), 0 !== e && (this.scrollInterval = setInterval(this.scrollUpdate.bind(this), 1e3 / 30)), this.scrollDirection = e)
                    },
                    scrollUpdate() {
                        this.el.scrollTop = parseInt(this.el.scrollTop, 10) + 5 * this.scrollDirection
                    }
                }),
                D = i.v.extend({
                    sessionModulePrefix: "RoleModels",
                    parseBlob(e) {
                        const t = e;
                        return t.playerInfo = t.playerInfo || {}, t.playerInfo.classes = t.playerInfo.classes || [], "Lobby" === t.state && (t.characters = []), "Lobby" !== t.state || t.allowDrawingsIfCameraDisabled || (t.choices = t.choices || [], void 0 !== t.choices.find((e => "toCamera" === e.action)) || (t.choices = t.choices.filter((e => "toDraw" !== e.action)))), "Draw" === t.state && (t.thicknesses = [10], t.sketchOptions = {
                            minThickness: .5,
                            thicknessFactor: 0,
                            smoothingFactor: .55,
                            thicknessSmoothingFactor: .6,
                            dotMultiplier: 1,
                            tipTaperFactor: .7,
                            cappedEnds: !0
                        }, t.prompt = {
                            html: "Draw yourself"
                        }, t.playerInfo.playerColor && (t.background = t.playerInfo.playerColor)), "MakeSingleChoice" === t.state && t.choices && t.choices.length > 0 && "CENSOR ANSWERS" === t.choices[t.choices.length - 1].text && (t.choices[t.choices.length - 1].className = "censorAnswers"), t.isAudience ? t.playerInfo.username = "AUDIENCE" : t.playerInfo.hidden = !0, t
                    },
                    getGameLayout(e) {
                        switch (e) {
                            case "Sortable":
                                return this.setLayout(y);
                            default:
                                return -1
                        }
                    },
                    formatSessionMessage(e) {
                        const t = e;
                        if ("submit" === t.action && Object.prototype.hasOwnProperty.call(t, "lines")) {
                            const e = this.model.get("player");
                            if (e && !1 === e.submitAsBitmap) return t;
                            t.action = "camera", t.lines = void 0, t.picture = this.currentLayout.sketchpadComponent.getImageData().split(",")[1]
                        }
                        return t
                    }
                })
        }
    }
]);
//# sourceMappingURL=sourcemaps/7088.35a708f56c71a06e6619.js.map