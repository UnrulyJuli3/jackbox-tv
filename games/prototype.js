(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/prototype"], {
        20854: (t, e, n) => {
            "use strict";
            n.d(e, {
                J: () => o
            });
            var i = n(16479),
                s = n.n(i);
            class o {
                constructor(t, e, n) {
                    var i, s, o, a;
                    this.DEFAULT_WIDTH = 400, this.DEFAULT_HEIGHT = 400, this.color = "#000", this.layer = 0, this.layers = 1, this.maxPoints = Number.MAX_SAFE_INTEGER, this.points = [], this.weight = 4, this.isInteracting = !1, t.width = null !== (s = null === (i = e.size) || void 0 === i ? void 0 : i.width) && void 0 !== s ? s : this.DEFAULT_WIDTH, t.height = null !== (a = null === (o = e.size) || void 0 === o ? void 0 : o.height) && void 0 !== a ? a : this.DEFAULT_HEIGHT, this.canvas = t, this.ctx = t.getContext("2d"), this.doodle = e, (null == n ? void 0 : n.color) && (this.color = n.color), (null == n ? void 0 : n.layer) && (this.layer = n.layer), (null == n ? void 0 : n.layers) && (this.layers = n.layers), (null == n ? void 0 : n.maxPoints) && (this.maxPoints = n.maxPoints), (null == n ? void 0 : n.weight) && (this.weight = n.weight), this.drawLines()
                }
                addPoint(t) {
                    const e = {
                        x: Math.min(Math.max(.5 * this.weight, t.x), this.canvas.width - .5 * this.weight),
                        y: Math.min(Math.max(.5 * this.weight, t.y), this.canvas.height - .5 * this.weight)
                    };
                    this.points.push(e)
                }
                drawLines() {
                    if (this.ctx) {
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        for (let t = 0; t < this.layers; t++) Object.values(this.doodle.lines).filter((e => {
                            var n;
                            return (null !== (n = e.layer) && void 0 !== n ? n : 0) === t
                        })).forEach((t => this.drawLine(t))), t === this.layer && this.drawLine({
                            color: this.color,
                            index: this.doodle.lines.length,
                            layer: this.layer,
                            points: this.points,
                            weight: this.weight
                        })
                    }
                }
                drawLine(t) {
                    this.ctx && (this.ctx.fillStyle = t.color, this.ctx.strokeStyle = t.color, this.ctx.lineCap = "round", this.ctx.lineJoin = "round", this.ctx.lineWidth = t.weight, this.ctx.beginPath(), t.points.forEach(((e, n) => {
                        1 === t.points.length && 0 === n && (this.ctx.save(), this.ctx.arc(e.x, e.y, t.weight / 2, 0, 2 * Math.PI), this.ctx.fill(), this.ctx.restore(), this.ctx.beginPath()), this.ctx.lineTo(e.x, e.y)
                    })), this.ctx.stroke())
                }
                renderImage(t = "image/png") {
                    return this.doodle.lines.length > 0 && this.drawLines(), this.canvas.toDataURL(t)
                }
                onStart(t) {
                    this.isInteracting = !0, this.addPoint(t), this.drawLines()
                }
                onMove(t) {
                    if (!this.isInteracting) return;
                    const e = this.points[this.points.length - 1];
                    if (!e) return void this.addPoint(t);
                    const n = .5 * this.weight,
                        i = {
                            x: t.x - e.x,
                            y: t.y - e.y
                        },
                        s = Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2));
                    if (s > n) {
                        const t = (s - n) / s,
                            o = {
                                x: i.x * t,
                                y: i.y * t
                            },
                            a = {
                                x: e.x + o.x,
                                y: e.y + o.y
                            };
                        this.addPoint(a), this.drawLines()
                    }
                }
                onEnd() {
                    if (!this.isInteracting) return null;
                    const t = {
                        color: this.color,
                        index: this.doodle.lines.length,
                        layer: this.layer,
                        points: s()(this.points),
                        weight: this.weight
                    };
                    return this.isInteracting = !1, this.points = [], t
                }
            }
        },
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
        17819: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => h
            });
            var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "draw"
                }, [n("div", {
                    ref: "content",
                    staticClass: "content"
                }, [n("div", {
                    staticClass: "constrain"
                }, [t.player.prompt ? n("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : t._e(), t._v(" "), n("div", {
                    ref: "stage",
                    staticClass: "stage",
                    style: t.stageDimensions
                }), t._v(" "), n("button", {
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [t._v(t._s(t.player.submitText || "SUBMIT"))])])])])
            };
            i._withStripped = !0;
            var s = n(2934),
                o = n.n(s),
                a = n(32530),
                r = n(96486);
            const l = o().extend({
                props: {
                    player: Object
                },
                data: () => ({
                    stage: null,
                    windowHeight: window.innerHeight,
                    isSubmitting: !1
                }),
                computed: {
                    stageDimensions() {
                        if (!this.stage) return {
                            width: "auto",
                            height: "auto"
                        };
                        const t = this.$refs.content.getBoundingClientRect(),
                            e = this.$refs.stage,
                            n = e.getBoundingClientRect(),
                            i = e.parentElement.getBoundingClientRect(),
                            s = Math.max(.9 * i.width, 240),
                            o = Math.max(this.windowHeight - t.height + n.height, 240),
                            a = this.stage.canvas.width,
                            r = this.stage.canvas.height,
                            l = Math.min(s / a, o / r);
                        return {
                            width: a * l + "px",
                            height: r * l + "px"
                        }
                    }
                },
                mounted() {
                    this.onResizeWithContext = (0, r.throttle)(this.onResize.bind(this), 400), window.addEventListener("resize", this.onResizeWithContext), this.setupStage()
                },
                beforeDestroy() {
                    window.removeEventListener("resize", this.onResizeWithContext), this.stage && this.stage.beforeDestroy()
                },
                methods: {
                    setupStage() {
                        const t = this.$refs.stage,
                            e = {};
                        this.player.size && (e.width = this.player.size.width, e.height = this.player.size.height), this.player.thicknesses && (e.thickness = this.player.thicknesses[0]), this.player.colors && (e.color = this.player.colors[0]), this.player.maxPoints && (e.maxPoints = this.player.maxPoints), this.stage = new a.U(t, e), this.stage.on("up", (() => {
                            var t;
                            if (!this.player.live) return;
                            const e = (null === (t = this.stage) || void 0 === t ? void 0 : t.getObject()) || {};
                            e.done = !1, this.$ecast.updateObject(this.player.responseKey, e).catch(this.$handleEcastError)
                        }))
                    },
                    onSubmitClick() {
                        if (!this.stage) return;
                        this.isSubmitting = !0, this.stage.canvas.submitting = !0;
                        const t = this.stage.getObject();
                        t.done = !0, t.action = "submit", this.$ecast.updateObject(this.player.responseKey, t).catch(this.$handleEcastError)
                    },
                    onResize() {
                        this.windowHeight = window.innerHeight
                    }
                }
            });
            var c = (0, n(51900).Z)(l, i, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/base/Draw.vue";
            const h = c.exports
        },
        74634: (t, e, n) => {
            "use strict";
            n.d(e, {
                Z: () => r
            });
            var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "waiting"
                }, [n("div", {
                    staticClass: "constrain"
                }, [t.player.message ? n("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.message,
                        expression: "player.message"
                    }]
                }) : t._e()])])
            };
            i._withStripped = !0;
            var s = n(2934);
            const o = n.n(s)().extend({
                props: {
                    player: Object
                }
            });
            var a = (0, n(51900).Z)(o, i, [], !1, null, null, null);
            a.options.__file = "src/apps/vue/components/base/Waiting.vue";
            const r = a.exports
        },
        42903: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => bt
            });
            var i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "main",
                    class: t.classes,
                    style: t.themeStyle
                }, [t.player ? n("div", {
                    staticClass: "player",
                    class: t.player.classes
                }, [n("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.player.name))])]) : t._e(), t._v(" "), t.player ? n("Fallbacks", {
                    attrs: {
                        player: t.player
                    }
                }) : t._e(), t._v(" "), t.components ? n("div", {
                    staticClass: "constrain"
                }, t._l(t.components.components, (function(t, e) {
                    return n(t.type + "El", {
                        key: e,
                        tag: "component",
                        staticClass: "component",
                        attrs: {
                            component: t
                        }
                    })
                })), 1) : t._e()], 1)
            };
            i._withStripped = !0;
            var s = n(2934),
                o = n.n(s),
                a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return t.player ? n(t.player.kind, {
                        tag: "component",
                        class: {
                            fallback: t.applyStyling
                        },
                        attrs: {
                            player: t.player
                        }
                    }) : t._e()
                };
            a._withStripped = !0;
            var r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "choices"
                }, [n("div", {
                    staticClass: "constrain"
                }, [t.player.prompt ? n("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : t._e(), t._v(" "), t._l(t.player.choices, (function(e, i) {
                    return n("button", {
                        key: i,
                        class: {
                            selected: e.isSelected
                        },
                        attrs: {
                            disabled: e.isDisabled
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onChoiceClick(i)
                            }
                        }
                    }, [t._v("\n            " + t._s(e.text) + "\n        ")])
                }))], 2)])
            };
            r._withStripped = !0;
            const l = o().extend({
                props: {
                    player: Object
                },
                methods: {
                    onChoiceClick(t) {
                        var e, n, i;
                        const s = this.player.choices[t];
                        if (s.send) return void this.$ecast.updateObject(this.player.responseKey, s.send).catch(this.$handleEcastError);
                        const o = {
                            action: null !== (e = this.player.action) && void 0 !== e ? e : "choice",
                            [null !== (n = this.player.key) && void 0 !== n ? n : "value"]: null !== (i = s.value) && void 0 !== i ? i : t
                        };
                        this.$ecast.updateObject(this.player.responseKey, o).catch(this.$handleEcastError)
                    }
                }
            });
            var c = n(51900),
                h = (0, c.Z)(l, r, [], !1, null, null, null);
            h.options.__file = "src/apps/vue/components/base/Choices.vue";
            const d = h.exports;
            var p = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "doodle"
                }, [n("div", {
                    directives: [{
                        name: "pointerBox",
                        rawName: "v-pointerBox"
                    }],
                    staticClass: "stage",
                    on: {
                        pointerboxstart: t.onPointerBoxStart,
                        pointerboxmove: t.onPointerBoxMove,
                        pointerboxend: t.onPointerBoxEnd
                    }
                }, [n("canvas", {
                    directives: [{
                        name: "pointerboxtranslate",
                        rawName: "v-pointerboxtranslate",
                        value: {
                            id: "doodleCanvas",
                            width: t.player.doodle.size ? t.player.doodle.size.width : 320,
                            height: t.player.doodle.size ? t.player.doodle.size.height : 320
                        },
                        expression: "{\n                id: 'doodleCanvas',\n                width: player.doodle.size ? player.doodle.size.width : 320,\n                height: player.doodle.size ? player.doodle.size.height : 320\n            }"
                    }],
                    ref: "canvas"
                })]), t._v(" "), t.hideUndo ? t._e() : n("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.UNDO",
                        expression: "'ACTION.UNDO'"
                    }],
                    attrs: {
                        disabled: t.isSubmitting
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onUndo.apply(null, arguments)
                        }
                    }
                }), t._v(" "), t.hideSubmit ? t._e() : n("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.SUBMIT",
                        expression: "'ACTION.SUBMIT'"
                    }],
                    attrs: {
                        disabled: t.isSubmitting
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                })])
            };
            p._withStripped = !0;
            var u = n(20854),
                v = n(19734),
                m = n(65853),
                y = function(t, e, n, i) {
                    return new(n || (n = Promise))((function(s, o) {
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
                    }))
                };
            o().use(v.O);
            const b = o().extend({
                props: {
                    canvasOptions: Object,
                    hideSubmit: Boolean,
                    hideUndo: Boolean,
                    player: Object
                },
                i18n: {
                    messages: m.s
                },
                data: () => ({
                    canvas: null,
                    isSubmitting: !1
                }),
                watch: {
                    canvasOptions: function(t) {
                        var e, n, i, s, o;
                        this.canvas && (this.canvas.color = null !== (e = t.color) && void 0 !== e ? e : "#000000", this.canvas.layer = null !== (n = t.layer) && void 0 !== n ? n : 0, this.canvas.layers = null !== (i = t.layers) && void 0 !== i ? i : 1, this.canvas.maxPoints = null !== (s = t.maxPoints) && void 0 !== s ? s : Number.MAX_SAFE_INTEGER, this.canvas.weight = null !== (o = t.weight) && void 0 !== o ? o : 4)
                    },
                    "player.doodle.key": function() {
                        this.createCanvas()
                    },
                    "player.doodle.lines": function() {
                        this.canvas && this.canvas.drawLines()
                    }
                },
                mounted() {
                    this.createCanvas()
                },
                methods: {
                    createCanvas() {
                        const t = this.$refs.canvas;
                        this.canvas = new u.J(t, this.player.doodle, this.canvasOptions)
                    },
                    onPointerBoxStart(t) {
                        if (!this.canvas) return;
                        const e = {
                            x: t.detail.translations.doodleCanvas.x,
                            y: t.detail.translations.doodleCanvas.y
                        };
                        this.canvas.onStart(e)
                    },
                    onPointerBoxMove(t) {
                        if (!this.canvas) return;
                        const e = {
                            x: t.detail.translations.doodleCanvas.x,
                            y: t.detail.translations.doodleCanvas.y
                        };
                        this.canvas.onMove(e)
                    },
                    onPointerBoxEnd() {
                        return y(this, void 0, void 0, (function*() {
                            if (!this.canvas) return;
                            const t = this.canvas.onEnd();
                            if (t) try {
                                yield this.$ecast.strokeDoodle(this.player.doodle.key, t)
                            } catch (t) {
                                this.$handleEcastError(t)
                            }
                        }))
                    },
                    onSubmit() {
                        return y(this, void 0, void 0, (function*() {
                            this.isSubmitting = !0;
                            try {
                                yield this.$ecast.lock(this.player.doodle.key)
                            } catch (t) {
                                this.isSubmitting = !1, this.$handleEcastError(t)
                            }
                        }))
                    },
                    onUndo() {
                        return y(this, void 0, void 0, (function*() {
                            if (this.canvas) try {
                                yield this.$ecast.undoDoodle(this.player.doodle.key)
                            } catch (t) {
                                this.$handleEcastError(t)
                            }
                        }))
                    }
                }
            });
            var g = (0, c.Z)(b, p, [], !1, null, null, null);
            g.options.__file = "src/apps/vue/components/base/Doodle.vue";
            const x = g.exports;
            var E = n(17819),
                f = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "lobby"
                    }, [n("div", {
                        staticClass: "constrain"
                    }, [n("LobbyActions", {
                        attrs: {
                            player: t.player
                        }
                    })], 1)])
                };
            f._withStripped = !0;
            var w = n(13494);
            const _ = o().extend({
                components: {
                    LobbyActions: w.Z
                },
                props: {
                    player: Object
                }
            });
            var C = (0, c.Z)(_, f, [], !1, null, null, null);
            C.options.__file = "src/apps/vue/components/base/Lobby.vue";
            const S = C.exports;
            var O = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "post-game"
                }, [n("div", {
                    staticClass: "constrain"
                }, [n("PostGameActions", {
                    attrs: {
                        player: t.player
                    }
                })], 1)])
            };
            O._withStripped = !0;
            var P = n(83933);
            const k = o().extend({
                components: {
                    PostGameActions: P.Z
                },
                props: {
                    player: Object
                }
            });
            var $ = (0, c.Z)(k, O, [], !1, null, null, null);
            $.options.__file = "src/apps/vue/components/base/PostGame.vue";
            const D = $.exports;
            var T = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "single-text-entry"
                }, [n("div", {
                    staticClass: "constrain"
                }, [t.player.prompt ? n("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : t._e(), t._v(" "), t.player.label ? n("label", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.label,
                        expression: "player.label"
                    }],
                    attrs: {
                        for: "input"
                    }
                }) : t._e(), t._v(" "), t.player.isMultiline ? n("textarea", {
                    attrs: {
                        id: "input",
                        rows: t.player.lines || 2,
                        placeholder: t.player.placeholder,
                        disabled: t.player.isDisabled
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: t.onValueInput
                    }
                }) : n("input", {
                    attrs: {
                        id: "input",
                        type: "text",
                        placeholder: t.player.placeholder,
                        disabled: t.player.isDisabled
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: t.onValueInput
                    }
                }), t._v(" "), n("button", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.submitText || "SUBMIT",
                        expression: "player.submitText || 'SUBMIT'"
                    }],
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                })])])
            };
            T._withStripped = !0;
            var I = n(44285);
            const M = o().extend({
                props: {
                    player: Object
                },
                data: () => ({
                    value: ""
                }),
                methods: {
                    onValueInput(t) {
                        const e = t.target;
                        this.value = e.value
                    },
                    isObjectResponseKey() {
                        if (!this.player.responseType) {
                            const t = this.$ecast.entities[this.player.responseKey];
                            if (t && t instanceof I.ObjectEntity) return !0
                        }
                        return "object" === this.player.responseType
                    },
                    onSubmitClick() {
                        this.isObjectResponseKey() ? this.sendAsObject() : this.sendAsText()
                    },
                    sendAsObject() {
                        const t = this.player.send || {
                            action: this.player.action || "input"
                        };
                        t[this.player.key || "value"] = this.value, this.$ecast.updateObject(this.player.responseKey, t).catch(this.$handleEcastError)
                    },
                    sendAsText() {
                        this.$ecast.updateText(this.player.responseKey, this.value).catch(this.$handleEcastError)
                    }
                }
            });
            var B = (0, c.Z)(M, T, [], !1, null, null, null);
            B.options.__file = "src/apps/vue/components/base/SingleTextEntry.vue";
            const L = B.exports;
            var j = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "multi-text-entry"
                }, [n("div", {
                    staticClass: "constrain"
                }, [t.player.prompt ? n("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.prompt,
                        expression: "player.prompt"
                    }]
                }) : t._e(), t._v(" "), t._l(t.player.inputs, (function(e, i) {
                    return [e.label ? n("label", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.label,
                            expression: "input.label"
                        }],
                        key: "label-" + e.key,
                        attrs: {
                            for: "input-" + i
                        }
                    }) : t._e(), t._v(" "), e.isMultiline ? n("textarea", {
                        key: "input-" + i,
                        attrs: {
                            id: "input-" + i,
                            rows: e.lines || 2,
                            placeholder: e.placeholder,
                            disabled: e.isDisabled
                        },
                        domProps: {
                            value: t.values[i]
                        },
                        on: {
                            input: function(e) {
                                return t.onValueInput(e, i)
                            }
                        }
                    }) : n("input", {
                        key: "input-" + e.key,
                        attrs: {
                            id: "input-" + i,
                            type: "text",
                            placeholder: e.placeholder,
                            disabled: e.isDisabled
                        },
                        domProps: {
                            value: t.values[i]
                        },
                        on: {
                            input: function(e) {
                                return t.onValueInput(e, i)
                            }
                        }
                    })]
                })), t._v(" "), n("button", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.submitText || "SUBMIT",
                        expression: "player.submitText || 'SUBMIT'"
                    }],
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                })], 2)])
            };
            j._withStripped = !0;
            const A = o().extend({
                props: {
                    player: Object
                },
                data: () => ({
                    values: []
                }),
                beforeMount() {
                    this.values = this.player.inputs.map((t => {
                        var e;
                        return null !== (e = t.value) && void 0 !== e ? e : ""
                    }))
                },
                methods: {
                    onValueInput(t, e) {
                        const n = t.target;
                        this.values[e] = n.value
                    },
                    isObjectResponseKey() {
                        if (!this.player.responseType) {
                            const t = this.$ecast.entities[this.player.responseKey];
                            if (t && t instanceof I.ObjectEntity) return !0
                        }
                        return "object" === this.player.responseType
                    },
                    onSubmitClick() {
                        this.isObjectResponseKey() ? this.sendAsObject() : this.sendAsText()
                    },
                    sendAsObject() {
                        const t = this.player.send || {
                            action: this.player.action || "input"
                        };
                        this.player.inputs.forEach(((e, n) => {
                            var i;
                            const s = null !== (i = e.key) && void 0 !== i ? i : `input${n}`;
                            t[s] = this.values[n]
                        })), this.$ecast.updateObject(this.player.responseKey, t).catch(this.$handleEcastError)
                    },
                    sendAsText() {
                        const t = this.player.separator || "|";
                        this.$ecast.updateText(this.player.responseKey, this.values.join(t)).catch(this.$handleEcastError)
                    }
                }
            });
            var R = (0, c.Z)(A, j, [], !1, null, null, null);
            R.options.__file = "src/apps/vue/components/base/MultiTextEntry.vue";
            const N = R.exports;
            var X = n(74634);
            const Y = o().extend({
                components: {
                    Choices: d,
                    Doodle: x,
                    Draw: E.Z,
                    Lobby: S,
                    PostGame: D,
                    SingleTextEntry: L,
                    MultiTextEntry: N,
                    Waiting: X.Z
                },
                props: {
                    applyStyling: {
                        type: Boolean,
                        default: !0
                    },
                    player: Object
                }
            });
            var F = (0, c.Z)(Y, a, [], !1, null, null, null);
            F.options.__file = "src/apps/vue/components/Fallbacks.vue";
            const z = F.exports;
            var U = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    class: t.component.classes
                }, t._l(t.component.choices, (function(e, i) {
                    return n("button", {
                        key: i,
                        staticClass: "choice",
                        class: e.classes,
                        attrs: {
                            disabled: e.isDisabled
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onChoiceClick(i)
                            }
                        }
                    }, [t._v("\n        " + t._s(e.text) + "\n    ")])
                })), 0)
            };
            U._withStripped = !0;
            const Z = o().extend({
                props: {
                    component: Object
                },
                methods: {
                    classesForChoice(t) {
                        const e = t.classes || [];
                        t.isSelected && e.push("selected")
                    },
                    onChoiceClick(t) {
                        var e, n, i;
                        const s = this.component.choices[t];
                        if (s.send) return void(this.component.responseEntity ? this.$ecast.updateObject(this.component.responseEntity, s.send).catch(this.$handleEcastError) : this.$ecast.mail(1, s.send).catch(this.$handleEcastError));
                        const o = {
                            action: null !== (e = this.component.action) && void 0 !== e ? e : "choice",
                            [null !== (n = this.component.key) && void 0 !== n ? n : "value"]: null !== (i = s.value) && void 0 !== i ? i : t
                        };
                        this.component.responseEntity ? this.$ecast.updateObject(this.component.responseEntity, o).catch(this.$handleEcastError) : this.$ecast.mail(1, o).catch(this.$handleEcastError)
                    }
                }
            });
            var K = (0, c.Z)(Z, U, [], !1, null, null, null);
            K.options.__file = "src/games/internal/prototype/views/Choices.vue";
            const V = K.exports;
            var H = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    class: t.component.classes,
                    attrs: {
                        id: "doodle"
                    }
                }, [t.component.prompt ? n("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.component.prompt,
                        expression: "component.prompt"
                    }]
                }) : t._e(), t._v(" "), n("div", {
                    attrs: {
                        id: "tools"
                    }
                }, [t.component.doodles.length > 1 ? n("div", {
                    attrs: {
                        id: "frames"
                    }
                }, [n("span", [t._v("Frame:")]), t._v(" "), n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.frame,
                        expression: "frame"
                    }],
                    attrs: {
                        name: "frame"
                    },
                    on: {
                        change: function(e) {
                            var n = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                return "_value" in t ? t._value : t.value
                            }));
                            t.frame = e.target.multiple ? n : n[0]
                        }
                    }
                }, t._l(t.component.doodles, (function(e, i) {
                    return n("option", {
                        key: "doodle-" + i,
                        domProps: {
                            value: i
                        }
                    }, [t._v("\n                    " + t._s(i) + "\n                ")])
                })), 0)]) : t._e(), t._v(" "), t.component.layers ? n("div", {
                    attrs: {
                        id: "layers"
                    }
                }, [n("span", [t._v("Layer:")]), t._v(" "), n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.layer,
                        expression: "layer"
                    }],
                    attrs: {
                        name: "layer"
                    },
                    on: {
                        change: function(e) {
                            var n = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                return "_value" in t ? t._value : t.value
                            }));
                            t.layer = e.target.multiple ? n : n[0]
                        }
                    }
                }, t._l(t.component.layers, (function(e) {
                    return n("option", {
                        key: "layer-" + e,
                        domProps: {
                            value: e - 1
                        }
                    }, [t._v("\n                    " + t._s(e - 1) + "\n                ")])
                })), 0)]) : t._e(), t._v(" "), t.activeDoodle.weights && t.activeDoodle.weights.length ? n("div", {
                    attrs: {
                        id: "weights"
                    }
                }, [n("button", {
                    staticClass: "weight",
                    attrs: {
                        "aria-label": "weight",
                        name: "weights",
                        type: "radio"
                    },
                    on: {
                        click: t.onChangeWeight
                    }
                }, [n("div", {
                    staticClass: "circle",
                    style: {
                        width: t.weight + "px",
                        height: t.weight + "px",
                        backgroundColor: t.color,
                        borderRadius: "50%"
                    }
                })])]) : t._e(), t._v(" "), t.activeDoodle.colors && t.activeDoodle.colors.length ? n("div", {
                    attrs: {
                        id: "colors"
                    }
                }, t._l(t.activeDoodle.colors, (function(e, i) {
                    return n("input", {
                        key: "color-" + i,
                        staticClass: "color",
                        style: {
                            backgroundColor: e
                        },
                        attrs: {
                            "aria-label": "color " + e,
                            "data-color": e,
                            name: "colors",
                            type: "radio"
                        },
                        domProps: {
                            checked: i === t.colorIndex
                        },
                        on: {
                            change: function(e) {
                                return t.onChangeColor(i)
                            }
                        }
                    })
                })), 0) : t._e()]), t._v(" "), n("div", {
                    attrs: {
                        id: "doodles"
                    }
                }, t._l(t.component.doodles, (function(e, i) {
                    return n("BaseDoodle", {
                        key: "doodle-" + i,
                        class: {
                            inactive: i !== t.frame
                        },
                        attrs: {
                            "canvas-options": t.canvasOptions,
                            player: {
                                doodle: e
                            },
                            "hide-submit": ""
                        }
                    })
                })), 1), t._v(" "), n("div", {
                    attrs: {
                        id: "actions"
                    }
                }, [n("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.SUBMIT",
                        expression: "'ACTION.SUBMIT'"
                    }],
                    attrs: {
                        disabled: t.isSubmitting
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                })])])
            };
            H._withStripped = !0;
            const W = o().extend({
                components: {
                    BaseDoodle: x
                },
                props: {
                    component: Object
                },
                i18n: {
                    messages: m.s
                },
                data: () => ({
                    colorIndex: 0,
                    frame: 0,
                    isSubmitting: !1,
                    layer: 0,
                    weightIndex: 0
                }),
                computed: {
                    activeDoodle() {
                        return this.component.doodles[this.frame]
                    },
                    canvasOptions() {
                        return {
                            color: this.color,
                            layer: this.layer,
                            layers: this.component.layers,
                            weight: this.weight
                        }
                    },
                    color() {
                        var t, e;
                        return null !== (e = null === (t = this.activeDoodle.colors) || void 0 === t ? void 0 : t[this.colorIndex]) && void 0 !== e ? e : "#000000"
                    },
                    weight() {
                        var t, e;
                        return null !== (e = null === (t = this.activeDoodle.weights) || void 0 === t ? void 0 : t[this.weightIndex]) && void 0 !== e ? e : 4
                    }
                },
                methods: {
                    onChangeColor(t) {
                        var e;
                        (null === (e = this.activeDoodle.colors) || void 0 === e ? void 0 : e.length) && (this.colorIndex = t)
                    },
                    onChangeWeight() {
                        var t;
                        (null === (t = this.activeDoodle.weights) || void 0 === t ? void 0 : t.length) && (this.weightIndex = (this.weightIndex + 1) % this.activeDoodle.weights.length)
                    },
                    onSubmit() {
                        this.isSubmitting = !0, this.component.doodles.forEach((t => {
                            this.$ecast.lock(t.key).catch((t => {
                                this.isSubmitting = !1, this.$handleEcastError(t)
                            }))
                        }))
                    }
                }
            });
            var G = (0, c.Z)(W, H, [], !1, null, null, null);
            G.options.__file = "src/games/internal/prototype/views/Doodle.vue";
            const J = G.exports;
            var q = function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "draw"
                }, [e("div", {
                    ref: "stage",
                    staticClass: "stage"
                })])
            };
            q._withStripped = !0;
            var Q = n(32530);
            const tt = o().extend({
                props: {
                    component: Object
                },
                data: () => ({
                    stage: null
                }),
                mounted() {
                    const t = this.$refs.stage,
                        e = {};
                    this.component.size && (e.width = this.component.size.width, e.height = this.component.size.height), this.component.lines && (e.lines = this.component.lines), this.stage = new Q.U(t, e)
                }
            });
            var et = (0, c.Z)(tt, q, [], !1, null, null, null);
            et.options.__file = "src/games/internal/prototype/views/Draw.vue";
            const nt = et.exports;
            var it = function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("img", {
                    class: t.component.classes,
                    attrs: {
                        src: t.component.url || t.component.image,
                        alt: "Image"
                    }
                })
            };
            it._withStripped = !0;
            const st = o().extend({
                props: {
                    component: Object
                }
            });
            var ot = (0, c.Z)(st, it, [], !1, null, null, null);
            ot.options.__file = "src/games/internal/prototype/views/Image.vue";
            const at = ot.exports;
            var rt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "inputs",
                    class: t.component.classes
                }, [t._l(t.component.inputs, (function(e, i) {
                    return [e.label ? n("label", {
                        key: i,
                        class: e.classes,
                        attrs: {
                            for: "input-" + i
                        }
                    }, [t._v("\n            " + t._s(e.label) + "\n        ")]) : t._e(), t._v(" "), "textarea" === e.type ? n("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.values[i],
                            expression: "values[index]"
                        }],
                        key: i,
                        class: e.classes,
                        attrs: {
                            id: "input-" + i,
                            placeholder: e.placeholder,
                            rows: e.rows || 2
                        },
                        domProps: {
                            value: t.values[i]
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.values, i, e.target.value)
                            }
                        }
                    }) : n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.values[i],
                            expression: "values[index]"
                        }],
                        key: i,
                        class: e.classes,
                        attrs: {
                            type: "text",
                            placeholder: e.placeholder
                        },
                        domProps: {
                            value: t.values[i]
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.values, i, e.target.value)
                            }
                        }
                    })]
                })), t._v(" "), t.component.submit ? n("button", {
                    class: t.component.submit.classes,
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [t._v("\n        " + t._s(t.component.submit.text || "SUBMIT") + "\n    ")]) : n("button", {
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmitClick.apply(null, arguments)
                        }
                    }
                }, [t._v("SUBMIT")])], 2)
            };
            rt._withStripped = !0;
            const lt = o().extend({
                props: {
                    component: Object
                },
                data: () => ({
                    values: []
                }),
                beforeMount() {
                    this.values = this.component.inputs.map((t => {
                        var e;
                        return null !== (e = t.value) && void 0 !== e ? e : ""
                    }))
                },
                methods: {
                    onSubmitClick() {
                        const t = this.component.send || {
                            action: this.component.action || "input"
                        };
                        this.component.inputs.forEach(((e, n) => {
                            var i;
                            const s = null !== (i = e.key) && void 0 !== i ? i : `input${n}`;
                            t[s] = this.values[n]
                        })), this.component.responseEntity ? this.$ecast.updateObject(this.component.responseEntity, t).catch(this.$handleEcastError) : this.$ecast.mail(1, t).catch(this.$handleEcastError)
                    }
                }
            });
            var ct = (0, c.Z)(lt, rt, [], !1, null, null, null);
            ct.options.__file = "src/games/internal/prototype/views/Inputs.vue";
            const ht = ct.exports;
            var dt = function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)(t.component.tag || "p", {
                    tag: "component",
                    class: t.component.classes
                }, [t._v(t._s(t.component.text))])
            };
            dt._withStripped = !0;
            const pt = o().extend({
                props: {
                    component: Object
                }
            });
            var ut = (0, c.Z)(pt, dt, [], !1, null, null, null);
            ut.options.__file = "src/games/internal/prototype/views/Text.vue";
            const vt = ut.exports,
                mt = o().extend({
                    components: {
                        choicesEl: V,
                        doodleEl: J,
                        drawEl: nt,
                        imageEl: at,
                        inputsEl: ht,
                        textEl: vt,
                        Fallbacks: z
                    },
                    ecastKeys: {
                        theme: ({
                            id: t
                        }) => `theme:${t}`,
                        player: ({
                            id: t
                        }) => `player:${t}`,
                        components: {
                            hasDeepRefs: !0,
                            fn: ({
                                id: t
                            }) => `components:${t}`
                        }
                    },
                    props: {
                        theme: Object,
                        player: Object,
                        components: Object
                    },
                    computed: {
                        classes() {
                            var t, e;
                            return null !== (e = null === (t = this.components) || void 0 === t ? void 0 : t.classes) && void 0 !== e ? e : []
                        },
                        themeStyle() {
                            if (!this.theme) return "";
                            const t = this.theme.colors;
                            let e = "";
                            return t && (e += `--theme-primary: ${t.primary};`, e += `--theme-secondary: ${t.secondary};`, e += `--theme-highlight: ${t.highlight};`, e += `--theme-background: ${t.background};`), e
                        }
                    }
                });
            var yt = (0, c.Z)(mt, i, [], !1, null, null, null);
            yt.options.__file = "src/games/internal/prototype/views/Main.vue";
            const bt = yt.exports
        }
    }
]);
//# sourceMappingURL=sourcemaps/2903.39c651dd0e9e885970cf.js.map