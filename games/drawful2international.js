(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/drawful2international"], {
        76490: (t, e, o) => {
            "use strict";
            o.r(e), o.d(e, {
                MainView: () => M
            });
            var r = o(24340),
                n = o(89446),
                s = o(10972),
                i = o(13469),
                a = o.n(i),
                l = o(72316),
                c = o.n(l),
                u = o(63574),
                p = o.n(u),
                d = (o(70989), o(9659)),
                b = o(41393);
            const h = p().View.extend({
                    tagName: "div",
                    className: "list",
                    template: a().template('<ul class="nav nav-colors"> <li class="pull-left button-pad"> <button id="primaryColor" class="button block"></button> </li> <li class="pull-left button-pad"> <button id="secondaryColor" class="button block"></button> </li> <li class="pull-right button-pad"> <button aria-label="submit" id="submitdrawing" class="submitdrawing pull-right">submit</button> </li> </ul>'),
                    model: new(c().Model)({}),
                    triggers: {
                        "click #submitdrawing": "button:submit"
                    },
                    events: {
                        "click #primaryColor": "choosePrimaryColor",
                        "click #secondaryColor": "chooseSecondaryColor"
                    },
                    bindings: {
                        "#primaryColor": {
                            classes: {
                                selected: {
                                    observe: "selected",
                                    onGet: t => 0 === t
                                }
                            }
                        },
                        "#secondaryColor": {
                            classes: {
                                selected: {
                                    observe: "selected",
                                    onGet: t => 1 === t
                                }
                            }
                        },
                        "#submitdrawing": "submitText"
                    },
                    onAttach() {
                        this.model.set("selected", 0), this.stickit()
                    },
                    choosePrimaryColor(t) {
                        return t.preventDefault(), this.triggerMethod("choose:color", this.model.get("primary")), this.model.set("selected", 0), !1
                    },
                    chooseSecondaryColor(t) {
                        return t.preventDefault(), this.triggerMethod("choose:color", this.model.get("secondary")), this.model.set("selected", 1), !1
                    }
                }),
                m = d.S.extend({
                    defaults: a().extend({}, b.d.prototype.model.defaults, {
                        colors: ["#000000"],
                        thicknesses: [1],
                        defaultIndex: 0,
                        hideSubmit: !0,
                        sketchOptions: {
                            minThickness: 2,
                            thicknessFactor: 0,
                            smoothingFactor: .9,
                            thicknessSmoothingFactor: 0,
                            dotMultiplier: 1,
                            tipTaperFactor: 1
                        }
                    })
                }),
                y = b.d.extend({
                    model: new m,
                    bindings: a().extend({}, b.d.prototype.bindings, {}),
                    initialize(t) {
                        this.postComponent = this.postComponent || new h({
                            model: new(c().Model)({})
                        }), this.toolbarComponent = this.toolbarComponent || new(p().View)({
                            template: a().template(""),
                            model: new(c().Model)({})
                        }), b.d.prototype.initialize.apply(this, [t])
                    },
                    update() {
                        this.model.get("colors") && this.postComponent.model.set({
                            primary: this.model.get("colors")[0],
                            secondary: this.model.get("colors")[1],
                            submitText: this.model.get("strings").submit
                        }), b.d.prototype.update.apply(this)
                    },
                    onRender() {
                        b.d.prototype.onRender.apply(this), this.showChildView("buttons", this.postComponent)
                    },
                    onChildviewChooseColor(t) {
                        this.chooseColor(t, {})
                    }
                });
            var f = o(19755),
                g = o.n(f),
                v = o(52650),
                w = o(40543);

            function O(t, e, o, r, n, s, i) {
                try {
                    var a = t[s](i),
                        l = a.value
                } catch (t) {
                    return void o(t)
                }
                a.done ? e(l) : Promise.resolve(l).then(r, n)
            }

            function C(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? C(Object(o), !0).forEach((function(e) {
                        j(t, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : C(Object(o)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return t
            }

            function j(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }
            const _ = d.S.extend({
                    defaults: P(P({}, v.W.prototype.model.defaults), {}, {
                        allPlayersHavePortraits: !1,
                        strings: P(P({}, v.W.prototype.model.defaults.strings), {}, {
                            vip_are_you_sure: "are you sure?",
                            vip_are_you_sure_yes: "yes",
                            vip_are_you_sure_no: "no"
                        })
                    })
                }),
                k = v.W.extend({
                    model: new _,
                    onButtonClick(t) {
                        var e, o = this;
                        return (e = function*() {
                            t.preventDefault();
                            const e = g()(t.currentTarget).data("action");
                            return "start" !== e || o.model.get("allPlayersHavePortraits") ? v.W.prototype.onButtonClick.apply(o, [t]) : ((yield w.b.show("custom", {
                                html: o.model.get("strings").vip_are_you_sure,
                                confirmButtonText: o.model.get("strings").vip_are_you_sure_yes,
                                cancelButtonText: o.model.get("strings").vip_are_you_sure_no,
                                customClass: {
                                    popup: "drawful2 Lobby censorMenu",
                                    content: "prompt",
                                    cancelButton: "button",
                                    confirmButton: "button"
                                },
                                showCancelButton: !0
                            })).isConfirmed && o.triggerMethod("client:message", {
                                action: e
                            }), null)
                        }, function() {
                            var t = this,
                                o = arguments;
                            return new Promise((function(r, n) {
                                var s = e.apply(t, o);

                                function i(t) {
                                    O(s, r, n, i, a, "next", t)
                                }

                                function a(t) {
                                    O(s, r, n, i, a, "throw", t)
                                }
                                i(void 0)
                            }))
                        })()
                    }
                });

            function x(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? x(Object(o), !0).forEach((function(e) {
                        D(t, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : x(Object(o)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return t
            }

            function D(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }
            const M = r.v.extend({
                sessionModulePrefix: "drawful2international",
                getGameLayout(t) {
                    switch (t) {
                        case "Draw":
                            return this.setLayout(y);
                        case "Lobby":
                            return this.setLayout(k);
                        default:
                            return -1
                    }
                },
                parseBlob(t) {
                    if ("Lobby" !== t.state && "Lobby" === this.prevState) {
                        const t = "Lobby",
                            e = "gameStarted",
                            o = this.hasUGC ? "drawful2international-ugc" : "drawful2international";
                        s.app.analytics.trackEvent({
                            category: t,
                            action: e,
                            label: o
                        })
                    }
                    const e = S({}, t);
                    return "MakeSingleChoice" === t.state && (e.choices = t.choices.map((t => S(S({}, t), {}, {
                        text: n.c.htmlUnescape(t.text)
                    }))), e.countGroupName = "Drawful2 Vote"), "Lobby" === t.state && t.lobbyState && (this.hasUGC = !!t.activeContentId), this.prevState = t.state, this.prevState = t.state, e
                }
            })
        }
    }
]);
//# sourceMappingURL=sourcemaps/9082.a63a51cc6834ce845ecf.js.map