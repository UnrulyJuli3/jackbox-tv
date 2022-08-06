(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [572], {
        19734: (t, e, n) => {
            "use strict";
            n.d(e, {
                O: () => a
            });
            var i = n(89446);
            class s {
                constructor(t, e) {
                    this.isCanceled = !1, this.distanceAccumulator = 0, this.velocityValues = [0], this.boundOnClick = this.onClick.bind(this), this.boundOnStart = this.onStart.bind(this), this.boundOnMove = this.onMove.bind(this), this.boundOnEnd = this.onEnd.bind(this), this.applyPolyfill(), this.element = t, this.documentElement = document.documentElement, this.usePointerEvents = void 0 !== window.PointerEvent, this.isRestrictedToBox = e.restrictToBox, this.bindStaticEvents()
                }
                destroy() {
                    this.unbindStaticEvents(), this.unbindStartedEvents()
                }
                cancel() {
                    this.isCanceled = !0, this.unbindStartedEvents()
                }
                bindStaticEvents() {
                    this.element.addEventListener("click", this.boundOnClick), this.usePointerEvents ? this.element.addEventListener("pointerdown", this.boundOnStart) : (this.element.addEventListener("touchstart", this.boundOnStart), this.element.addEventListener("mousedown", this.boundOnStart))
                }
                unbindStaticEvents() {
                    this.element.removeEventListener("click", this.boundOnClick), this.usePointerEvents ? this.element.removeEventListener("pointerdown", this.boundOnStart) : (this.element.removeEventListener("touchstart", this.boundOnStart), this.element.removeEventListener("mousedown", this.boundOnStart))
                }
                bindStartedEvents() {
                    if (this.usePointerEvents) return this.element.addEventListener("pointermove", this.boundOnMove), this.element.addEventListener("pointerup", this.boundOnEnd), this.isRestrictedToBox && this.element.addEventListener("pointerleave", this.boundOnEnd), this.element.addEventListener("lostpointercapture", this.boundOnEnd), void this.disableChildPointerEvents();
                    this.element.addEventListener("touchmove", this.boundOnMove), this.element.addEventListener("mousemove", this.boundOnMove), this.element.addEventListener("touchend", this.boundOnEnd), this.element.addEventListener("mouseleave", this.boundOnEnd), this.element.addEventListener("mouseup", this.boundOnEnd)
                }
                unbindStartedEvents() {
                    if (this.usePointerEvents) return this.element.removeEventListener("pointermove", this.boundOnMove), this.element.removeEventListener("pointerup", this.boundOnEnd), this.isRestrictedToBox && this.element.removeEventListener("pointerleave", this.boundOnEnd), this.element.removeEventListener("lostpointercapture", this.boundOnEnd), void this.enableChildPointerEvents();
                    this.element.removeEventListener("touchmove", this.boundOnMove), this.element.removeEventListener("mousemove", this.boundOnMove), this.element.removeEventListener("touchend", this.boundOnEnd), this.element.removeEventListener("mouseleave", this.boundOnEnd), this.element.removeEventListener("mouseup", this.boundOnEnd)
                }
                onClick(t) {
                    const e = this.getStartDetail(t),
                        n = new CustomEvent("pointerboxclick", {
                            detail: e
                        });
                    this.element.dispatchEvent(n)
                }
                onStart(t) {
                    if (t.preventDefault(), this.isCanceled = !1, this.usePointerEvents) {
                        const e = t;
                        if (!e.isPrimary) return;
                        this.capturedPointer = {
                            id: e.pointerId,
                            type: e.pointerType
                        }, this.isRestrictedToBox || this.element.setPointerCapture(this.capturedPointer.id)
                    }
                    this.distanceAccumulator = 0, this.velocityValues = [0];
                    const e = this.getStartDetail(t);
                    this.initial = e, this.previous = e;
                    const n = new CustomEvent("pointerboxstart", {
                        detail: e
                    });
                    this.element.dispatchEvent(n);
                    const i = new CustomEvent("pointerboxchilddown", {
                        detail: e
                    });
                    return this.staticEventChildren = document.elementsFromPoint(e.clientX, e.clientY), this.staticEventChildren.forEach((t => t.dispatchEvent(i))), this.bindStartedEvents(), !1
                }
                onMove(t) {
                    var e;
                    if (t.preventDefault(), this.isCanceled) return;
                    if (this.usePointerEvents) {
                        const n = t;
                        if (!n.isPrimary) return;
                        if (n.pointerType !== (null === (e = this.capturedPointer) || void 0 === e ? void 0 : e.type)) return
                    }
                    const n = this.getMoveDetail(t);
                    this.previous = n;
                    const i = new CustomEvent("pointerboxmove", {
                        detail: n
                    });
                    return this.element.dispatchEvent(i), this.previousEventTimestamp = Date.now(), !1
                }
                onEnd(t) {
                    var e;
                    if (t.preventDefault(), this.isCanceled) return;
                    if (this.usePointerEvents) {
                        const n = t;
                        if (!n.isPrimary) return;
                        if (n.pointerType !== (null === (e = this.capturedPointer) || void 0 === e ? void 0 : e.type)) return;
                        this.element.hasPointerCapture(this.capturedPointer.id) && this.element.releasePointerCapture(this.capturedPointer.id), delete this.capturedPointer
                    }
                    const n = this.getMoveDetail(t),
                        i = new CustomEvent("pointerboxend", {
                            detail: n
                        });
                    this.element.dispatchEvent(i), delete this.initial, delete this.previous, delete this.cachedElementRect, delete this.cachedDocumentRect, delete this.cachedTranslations, delete this.previousEventTimestamp, this.unbindStartedEvents();
                    const s = new CustomEvent("pointerboxchildup", {
                        detail: n
                    });
                    return document.elementsFromPoint(n.clientX, n.clientY).forEach((t => {
                        var e;
                        if (t.dispatchEvent(s), !(null === (e = this.staticEventChildren) || void 0 === e ? void 0 : e.includes(t))) return;
                        const i = new CustomEvent("pointerboxchildclick", {
                            detail: n
                        });
                        t.dispatchEvent(i)
                    })), delete this.staticEventChildren, !1
                }
                disableChildPointerEvents() {
                    this.element.style.touchAction = "none";
                    for (let t = 0; t < this.element.children.length; t++) {
                        const e = this.element.children[t];
                        e.style.pointerEvents = "none", e.style.touchAction = "none"
                    }
                }
                enableChildPointerEvents() {
                    this.element.style.touchAction = "";
                    for (let t = 0; t < this.element.children.length; t++) {
                        const e = this.element.children[t];
                        e.style.pointerEvents = "", e.style.touchAction = ""
                    }
                }
                getStartDetail(t) {
                    let e, n, i, s;
                    this.cachedElementRect || (this.cachedElementRect = this.element.getBoundingClientRect()), this.cachedDocumentRect || (this.cachedDocumentRect = this.documentElement.getBoundingClientRect());
                    const o = this.cachedDocumentRect.top;
                    if (this.cachedTranslations || (this.cachedTranslations = this.getTranslations()), window.TouchEvent && t instanceof window.TouchEvent) {
                        if (!t.touches.length) return this.previous;
                        e = t.touches[0].pageX, n = t.touches[0].pageY + o, i = t.touches[0].clientX, s = t.touches[0].clientY
                    } else {
                        const a = t;
                        e = a.pageX, n = a.pageY + o, i = a.clientX, s = a.clientY
                    }
                    const a = e - this.cachedElementRect.left,
                        r = n - this.cachedElementRect.top,
                        l = a / this.cachedElementRect.width,
                        c = r / this.cachedElementRect.height,
                        h = l < 0 || l > 1 || c < 0 || c > 1,
                        d = {};
                    return this.cachedTranslations.forEach((t => {
                        d[t.id] && console.warn(`[PointerBox] duplicate translation key ${t.id}`), d[t.id] = {
                            x: a * t.x - t.left,
                            y: r * t.y - t.top
                        }
                    })), {
                        boxX: a,
                        boxY: r,
                        pageX: e,
                        pageY: n,
                        clientX: i,
                        clientY: s,
                        percentX: l,
                        percentY: c,
                        translations: d,
                        isOutsideBox: h,
                        originalEvent: t,
                        cancel: () => this.cancel()
                    }
                }
                getMoveDetail(t) {
                    if (!this.initial) throw new Error("[PointerBox] No initial details stored");
                    if (!this.previous) throw new Error("[PointerBox] No previous details stored");
                    const e = this.getStartDetail(t),
                        n = i.c.getAngleBetweenPoints({
                            x: this.initial.boxX,
                            y: this.initial.boxY
                        }, {
                            x: e.boxX,
                            y: e.boxY
                        }),
                        s = i.c.getDistanceBetweenPoints({
                            x: this.initial.boxX,
                            y: this.initial.boxY
                        }, {
                            x: e.boxX,
                            y: e.boxY
                        }),
                        o = i.c.getAngleBetweenPoints({
                            x: this.previous.boxX,
                            y: this.previous.boxY
                        }, {
                            x: e.boxX,
                            y: e.boxY
                        }),
                        a = i.c.getDistanceBetweenPoints({
                            x: this.previous.boxX,
                            y: this.previous.boxY
                        }, {
                            x: e.boxX,
                            y: e.boxY
                        });
                    this.distanceAccumulator += a;
                    let r = 0;
                    return this.previousEventTimestamp && (r = i.c.getVelocity({
                        x: this.previous.boxX,
                        y: this.previous.boxY
                    }, this.previousEventTimestamp, {
                        x: e.boxX,
                        y: e.boxY
                    }, Date.now())), r && (this.velocityValues.unshift(r), this.velocityValues.length = Math.min(this.velocityValues.length, 5)), {
                        boxX: e.boxX,
                        boxY: e.boxY,
                        pageX: e.pageX,
                        pageY: e.pageY,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        percentX: e.percentX,
                        percentY: e.percentY,
                        translations: e.translations,
                        isOutsideBox: e.isOutsideBox,
                        degreesFromInitial: n,
                        distanceFromInitial: s,
                        changeXFromInitial: e.boxX - this.initial.boxX,
                        changeYFromInitial: e.boxY - this.initial.boxY,
                        degreesFromPrevious: o,
                        distancefromPrevious: a,
                        changeXFromPrevious: e.boxX - this.previous.boxX,
                        changeYFromPrevious: e.boxY - this.previous.boxY,
                        totalDistance: this.distanceAccumulator,
                        velocity: r,
                        normalizedVelocity: this.velocityValues.reduce(((t, e) => t + e)) / this.velocityValues.length,
                        originalEvent: e.originalEvent,
                        initial: this.initial,
                        previous: this.previous,
                        cancel: e.cancel
                    }
                }
                getTranslations() {
                    if (!this.cachedElementRect) throw Error("[PointerBox] Element rect is undefined");
                    const t = [],
                        e = this.element.children;
                    for (let n = 0; n < e.length; n++) {
                        const i = e[n].attributes.getNamedItem("data-pointerboxtranslateid");
                        if (!i) continue;
                        const s = i.value;
                        if (!s) continue;
                        const o = e[n].attributes.getNamedItem("data-pointerboxtranslatewidth"),
                            a = e[n].attributes.getNamedItem("data-pointerboxtranslateheight"),
                            r = (null == o ? void 0 : o.value) ? parseInt(o.value, 10) : this.cachedElementRect.width,
                            l = (null == a ? void 0 : a.value) ? parseInt(a.value, 10) : this.cachedElementRect.height,
                            c = e[n].getBoundingClientRect();
                        t.push({
                            id: s,
                            left: c.left - this.cachedElementRect.left,
                            top: c.top - this.cachedElementRect.top,
                            x: r / c.width,
                            y: l / c.height
                        })
                    }
                    return t
                }
                applyPolyfill() {
                    s.isPolyfilled || (s.isPolyfilled = !0, window && window.document && (window.document.elementsFromPoint || (window.document.elementsFromPoint = s.elementsFromPoint)))
                }
                static elementsFromPoint(t, e) {
                    const n = [],
                        i = [];
                    let s = null;
                    do {
                        const o = window.document.elementFromPoint(t, e);
                        s !== o ? (s = o, n.push(s), i.push(s.style.pointerEvents), s.style.pointerEvents = "none") : s = null
                    } while (s);
                    return n.forEach(((t, e) => {
                        t.style.pointerEvents = i[e]
                    })), n
                }
            }
            s.isPolyfilled = !1;
            const o = new Map,
                a = {
                    boxes: new Map,
                    install(t) {
                        t.directive("pointerBox", {
                            inserted(t, e) {
                                const n = new s(t, {
                                    restrictToBox: e.modifiers.restrict
                                });
                                o.set(t, n)
                            },
                            unbind(t) {
                                var e;
                                null === (e = o.get(t)) || void 0 === e || e.destroy(), o.delete(t)
                            }
                        }), t.directive("pointerboxtranslate", {
                            inserted(t, e) {
                                var n, i, s;
                                t.setAttribute("data-pointerboxtranslateid", null !== (n = e.value.id) && void 0 !== n ? n : ""), t.setAttribute("data-pointerboxtranslatewidth", null !== (i = e.value.width) && void 0 !== i ? i : ""), t.setAttribute("data-pointerboxtranslateheight", null !== (s = e.value.height) && void 0 !== s ? s : "")
                            },
                            unbind(t) {
                                t.removeAttribute("data-pointerboxtranslateid"), t.removeAttribute("data-pointerboxtranslatewidth"), t.removeAttribute("data-pointerboxtranslateheight")
                            }
                        })
                    }
                }
        },
        13494: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => c
            });
            var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "lobby-actions",
                    class: {
                        vip: t.player.hasControls
                    }
                }, [t.messageLocation && "top" !== t.messageLocation ? t._e() : n("p", {
                    class: t.localClasses.message,
                    domProps: {
                        textContent: t._s(t.joinedCountText)
                    }
                }), t._v(" "), t.player.hasControls ? ["waitingForMore" === t.player.status ? n("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.neededText))]) : t._e(), t._v(" "), "canStart" === t.player.status ? n("button", {
                    class: t.localClasses.action,
                    domProps: {
                        textContent: t._s(t.startText || t.$t("LOBBY.BUTTON_START"))
                    },
                    on: {
                        click: t.onStartClick
                    }
                }) : t._e(), t._v(" "), "countdown" === t.player.status ? n("button", {
                    class: t.localClasses.action,
                    domProps: {
                        textContent: t._s(t.cancelText || t.$t("LOBBY.BUTTON_CANCEL"))
                    },
                    on: {
                        click: t.onCancelClick
                    }
                }) : t._e()] : t.player.gamepadStart ? ["waitingForMore" === t.player.status ? n("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.neededText))]) : t._e(), t._v(" "), "canStart" === t.player.status ? n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.WAITING_FOR_GAMEPAD",
                        expression: "'LOBBY.WAITING_FOR_GAMEPAD'"
                    }],
                    class: t.localClasses.status
                }) : t._e(), t._v(" "), "countdown" === t.player.status ? n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.GAME_STARTING",
                        expression: "'LOBBY.GAME_STARTING'"
                    }],
                    class: t.localClasses.status
                }) : t._e()] : ["waitingForMore" === t.player.status ? n("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.neededText))]) : t._e(), t._v(" "), "canStart" === t.player.status ? n("p", {
                    class: t.localClasses.status
                }, [t._v(t._s(t.waitingForVIPText))]) : t._e(), t._v(" "), "countdown" === t.player.status ? n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "LOBBY.GAME_STARTING",
                        expression: "'LOBBY.GAME_STARTING'"
                    }],
                    class: t.localClasses.status
                }) : t._e()], t._v(" "), "bottom" === t.messageLocation ? n("p", {
                    class: t.localClasses.message,
                    domProps: {
                        textContent: t._s(t.joinedCountText)
                    }
                }) : t._e()], 2)
            };
            i._withStripped = !0;
            var s = n(2934),
                o = n.n(s),
                a = n(65853);
            const r = o().extend({
                props: {
                    cancelText: String,
                    classes: Object,
                    messageLocation: String,
                    player: Object,
                    shouldStart: Function,
                    startText: String
                },
                i18n: {
                    messages: a.s
                },
                computed: {
                    joinedCountText() {
                        return this.$tc("LOBBY.JOINED_COUNT", this.player.joinedPlayers, {
                            count: this.player.joinedPlayers,
                            maxPlayers: this.player.maxPlayers
                        })
                    },
                    localClasses() {
                        var t, e, n, i, s, o;
                        return {
                            message: null !== (e = null === (t = this.classes) || void 0 === t ? void 0 : t.message) && void 0 !== e ? e : "message",
                            status: null !== (i = null === (n = this.classes) || void 0 === n ? void 0 : n.status) && void 0 !== i ? i : "status",
                            action: null !== (o = null === (s = this.classes) || void 0 === s ? void 0 : s.action) && void 0 !== o ? o : "action"
                        }
                    },
                    neededText() {
                        return this.$tc("LOBBY.PLAYERS_NEEDED", this.player.minPlayers - this.player.joinedPlayers)
                    },
                    waitingForVIPText() {
                        return this.$t("LOBBY.WAITING_FOR_VIP", {
                            name: this.player.vipName
                        })
                    }
                },
                methods: {
                    onCancelClick() {
                        this.player.responseKey && this.$ecast.updateObject(this.player.responseKey, {
                            action: "cancel"
                        }).catch(this.$handleEcastError)
                    },
                    onStartClick() {
                        return t = this, e = void 0, i = function*() {
                            if (this.player.responseKey) {
                                if (this.shouldStart && !(yield Promise.resolve(this.shouldStart()))) return;
                                this.$ecast.updateObject(this.player.responseKey, {
                                    action: "start"
                                }).catch(this.$handleEcastError)
                            }
                        }, new((n = void 0) || (n = Promise))((function(s, o) {
                            function a(t) {
                                try {
                                    l(i.next(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function r(t) {
                                try {
                                    l(i.throw(t))
                                } catch (t) {
                                    o(t)
                                }
                            }

                            function l(t) {
                                var e;
                                t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                    t(e)
                                }))).then(a, r)
                            }
                            l((i = i.apply(t, e || [])).next())
                        }));
                        var t, e, n, i
                    }
                }
            });
            var l = (0, n(51900).Z)(r, i, [], !1, null, null, null);
            l.options.__file = "src/apps/vue/components/LobbyActions.vue";
            const c = l.exports
        }
    }
]);
//# sourceMappingURL=sourcemaps/572.c3288199baceec202bfe.js.map