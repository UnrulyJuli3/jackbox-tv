(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [3317], {
        20854: (t, e, i) => {
            "use strict";
            i.d(e, {
                J: () => a
            });
            var n = i(16479),
                s = i.n(n),
                o = i(89446);
            class a {
                constructor(t, e, i) {
                    var n, s, o, a, r;
                    this.DEFAULT_WIDTH = 400, this.DEFAULT_HEIGHT = 400, this.color = "#000", this.layer = 0, this.layers = 1, this.maxPoints = Number.MAX_SAFE_INTEGER, this.points = [], this.precision = 2, this.scale = {
                        width: 1,
                        height: 1
                    }, this.weight = 4, this.isInteracting = !1, (null == i ? void 0 : i.color) && (this.color = i.color), (null == i ? void 0 : i.layer) && (this.layer = i.layer), (null == i ? void 0 : i.layers) && (this.layers = i.layers), (null == i ? void 0 : i.maxPoints) && (this.maxPoints = i.maxPoints), (null == i ? void 0 : i.precision) && (this.precision = i.precision), (null == i ? void 0 : i.scale) && (this.scale = i.scale), (null == i ? void 0 : i.weight) && (this.weight = i.weight), t.width = (null !== (s = null === (n = e.size) || void 0 === n ? void 0 : n.width) && void 0 !== s ? s : this.DEFAULT_WIDTH) * this.scale.width, t.height = (null !== (a = null === (o = e.size) || void 0 === o ? void 0 : o.height) && void 0 !== a ? a : this.DEFAULT_HEIGHT) * this.scale.height, this.canvas = t, this.ctx = t.getContext("2d"), null === (r = this.ctx) || void 0 === r || r.scale(this.scale.width, this.scale.height), this.doodle = e, this.drawLines()
                }
                addPoint(t) {
                    this.points.push(t)
                }
                normalizePoint(t) {
                    const e = {
                            x: t.x / this.scale.width,
                            y: t.y / this.scale.height
                        },
                        i = {
                            x: Math.min(Math.max(.5 * this.weight, e.x), this.canvas.width / this.scale.width - .5 * this.weight),
                            y: Math.min(Math.max(.5 * this.weight, e.y), this.canvas.height / this.scale.height - .5 * this.weight)
                        };
                    return {
                        x: o.c.toPrecision(i.x, this.precision),
                        y: o.c.toPrecision(i.y, this.precision)
                    }
                }
                drawLines() {
                    if (this.ctx) {
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        for (let t = 0; t < this.layers; t++) Object.values(this.doodle.lines).filter((e => {
                            var i;
                            return (null !== (i = e.layer) && void 0 !== i ? i : 0) === t
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
                    this.ctx && (this.ctx.fillStyle = t.color, this.ctx.strokeStyle = t.color, this.ctx.lineCap = "round", this.ctx.lineJoin = "round", this.ctx.lineWidth = t.weight, this.ctx.beginPath(), t.points.forEach(((e, i) => {
                        1 === t.points.length && 0 === i && (this.ctx.save(), this.ctx.arc(e.x, e.y, t.weight / 2, 0, 2 * Math.PI), this.ctx.fill(), this.ctx.restore(), this.ctx.beginPath()), this.ctx.lineTo(e.x, e.y)
                    })), this.ctx.stroke())
                }
                renderImage(t = "image/png") {
                    return this.doodle.lines.length > 0 && this.drawLines(), this.canvas.toDataURL(t)
                }
                onStart(t) {
                    this.isInteracting = !0;
                    const e = this.normalizePoint(t);
                    this.addPoint(e), this.drawLines()
                }
                onMove(t) {
                    if (!this.isInteracting) return;
                    const e = this.points[this.points.length - 1];
                    if (!e) return void this.addPoint(this.normalizePoint(t));
                    const i = .5 * this.weight,
                        n = {
                            x: t.x - e.x,
                            y: t.y - e.y
                        },
                        s = Math.sqrt(Math.pow(n.x, 2) + Math.pow(n.y, 2));
                    if (s > i) {
                        const t = (s - i) / s,
                            o = {
                                x: n.x * t,
                                y: n.y * t
                            },
                            a = {
                                x: e.x + o.x,
                                y: e.y + o.y
                            };
                        this.addPoint(this.normalizePoint(a)), this.drawLines()
                    }
                }
                onEnd() {
                    if (!this.isInteracting) return null;
                    const t = {
                        color: this.color,
                        index: this.doodle.lines.length,
                        layer: this.layer,
                        points: s()(this.points, .5).map((t => ({
                            x: o.c.toPrecision(t.x, this.precision),
                            y: o.c.toPrecision(t.y, this.precision)
                        }))),
                        weight: this.weight
                    };
                    return this.isInteracting = !1, this.points = [], t
                }
            }
        },
        19734: (t, e, i) => {
            "use strict";
            i.d(e, {
                O: () => a
            });
            var n = i(89446);
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
                        i = new CustomEvent("pointerboxclick", {
                            detail: e
                        });
                    this.element.dispatchEvent(i)
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
                    const i = new CustomEvent("pointerboxstart", {
                        detail: e
                    });
                    this.element.dispatchEvent(i);
                    const n = new CustomEvent("pointerboxchilddown", {
                        detail: e
                    });
                    return this.staticEventChildren = document.elementsFromPoint(e.clientX, e.clientY), this.staticEventChildren.forEach((t => t.dispatchEvent(n))), this.bindStartedEvents(), !1
                }
                onMove(t) {
                    var e;
                    if (t.preventDefault(), this.isCanceled) return;
                    if (this.usePointerEvents) {
                        const i = t;
                        if (!i.isPrimary) return;
                        if (i.pointerType !== (null === (e = this.capturedPointer) || void 0 === e ? void 0 : e.type)) return
                    }
                    const i = this.getMoveDetail(t);
                    this.previous = i;
                    const n = new CustomEvent("pointerboxmove", {
                        detail: i
                    });
                    return this.element.dispatchEvent(n), this.previousEventTimestamp = Date.now(), !1
                }
                onEnd(t) {
                    var e;
                    if (t.preventDefault(), this.isCanceled) return;
                    if (this.usePointerEvents) {
                        const i = t;
                        if (!i.isPrimary) return;
                        if (i.pointerType !== (null === (e = this.capturedPointer) || void 0 === e ? void 0 : e.type)) return;
                        this.element.hasPointerCapture(this.capturedPointer.id) && this.element.releasePointerCapture(this.capturedPointer.id), delete this.capturedPointer
                    }
                    const i = this.getMoveDetail(t),
                        n = new CustomEvent("pointerboxend", {
                            detail: i
                        });
                    this.element.dispatchEvent(n), delete this.initial, delete this.previous, delete this.cachedElementRect, delete this.cachedDocumentRect, delete this.cachedTranslations, delete this.previousEventTimestamp, this.unbindStartedEvents();
                    const s = new CustomEvent("pointerboxchildup", {
                        detail: i
                    });
                    return document.elementsFromPoint(i.clientX, i.clientY).forEach((t => {
                        var e;
                        if (t.dispatchEvent(s), !(null === (e = this.staticEventChildren) || void 0 === e ? void 0 : e.includes(t))) return;
                        const n = new CustomEvent("pointerboxchildclick", {
                            detail: i
                        });
                        t.dispatchEvent(n)
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
                    let e, i, n, s;
                    this.cachedElementRect || (this.cachedElementRect = this.element.getBoundingClientRect()), this.cachedDocumentRect || (this.cachedDocumentRect = this.documentElement.getBoundingClientRect());
                    const o = this.cachedDocumentRect.top;
                    if (this.cachedTranslations || (this.cachedTranslations = this.getTranslations()), window.TouchEvent && t instanceof window.TouchEvent) {
                        if (!t.touches.length) return this.previous;
                        e = t.touches[0].pageX, i = t.touches[0].pageY + o, n = t.touches[0].clientX, s = t.touches[0].clientY
                    } else {
                        const a = t;
                        e = a.pageX, i = a.pageY + o, n = a.clientX, s = a.clientY
                    }
                    const a = e - this.cachedElementRect.left,
                        r = i - this.cachedElementRect.top,
                        h = a / this.cachedElementRect.width,
                        l = r / this.cachedElementRect.height,
                        d = h < 0 || h > 1 || l < 0 || l > 1,
                        c = {};
                    return this.cachedTranslations.forEach((t => {
                        c[t.id] && console.warn(`[PointerBox] duplicate translation key ${t.id}`), c[t.id] = {
                            x: a * t.x - t.left,
                            y: r * t.y - t.top
                        }
                    })), {
                        boxX: a,
                        boxY: r,
                        pageX: e,
                        pageY: i,
                        clientX: n,
                        clientY: s,
                        percentX: h,
                        percentY: l,
                        translations: c,
                        isOutsideBox: d,
                        originalEvent: t,
                        cancel: () => this.cancel()
                    }
                }
                getMoveDetail(t) {
                    if (!this.initial) throw new Error("[PointerBox] No initial details stored");
                    if (!this.previous) throw new Error("[PointerBox] No previous details stored");
                    const e = this.getStartDetail(t),
                        i = n.c.getAngleBetweenPoints({
                            x: this.initial.boxX,
                            y: this.initial.boxY
                        }, {
                            x: e.boxX,
                            y: e.boxY
                        }),
                        s = n.c.getDistanceBetweenPoints({
                            x: this.initial.boxX,
                            y: this.initial.boxY
                        }, {
                            x: e.boxX,
                            y: e.boxY
                        }),
                        o = n.c.getAngleBetweenPoints({
                            x: this.previous.boxX,
                            y: this.previous.boxY
                        }, {
                            x: e.boxX,
                            y: e.boxY
                        }),
                        a = n.c.getDistanceBetweenPoints({
                            x: this.previous.boxX,
                            y: this.previous.boxY
                        }, {
                            x: e.boxX,
                            y: e.boxY
                        });
                    this.distanceAccumulator += a;
                    let r = 0;
                    return this.previousEventTimestamp && (r = n.c.getVelocity({
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
                        degreesFromInitial: i,
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
                    for (let i = 0; i < e.length; i++) {
                        const n = e[i].attributes.getNamedItem("data-pointerboxtranslateid");
                        if (!n) continue;
                        const s = n.value;
                        if (!s) continue;
                        const o = e[i].attributes.getNamedItem("data-pointerboxtranslatewidth"),
                            a = e[i].attributes.getNamedItem("data-pointerboxtranslateheight"),
                            r = (null == o ? void 0 : o.value) ? parseInt(o.value, 10) : this.cachedElementRect.width,
                            h = (null == a ? void 0 : a.value) ? parseInt(a.value, 10) : this.cachedElementRect.height,
                            l = e[i].getBoundingClientRect();
                        t.push({
                            id: s,
                            left: l.left - this.cachedElementRect.left,
                            top: l.top - this.cachedElementRect.top,
                            x: r / l.width,
                            y: h / l.height
                        })
                    }
                    return t
                }
                applyPolyfill() {
                    s.isPolyfilled || (s.isPolyfilled = !0, window && window.document && (window.document.elementsFromPoint || (window.document.elementsFromPoint = s.elementsFromPoint)))
                }
                static elementsFromPoint(t, e) {
                    const i = [],
                        n = [];
                    let s = null;
                    do {
                        const o = window.document.elementFromPoint(t, e);
                        s !== o ? (s = o, i.push(s), n.push(s.style.pointerEvents), s.style.pointerEvents = "none") : s = null
                    } while (s);
                    return i.forEach(((t, e) => {
                        t.style.pointerEvents = n[e]
                    })), i
                }
            }
            s.isPolyfilled = !1;
            const o = new Map,
                a = {
                    boxes: new Map,
                    install(t) {
                        t.directive("pointerBox", {
                            inserted(t, e) {
                                const i = new s(t, {
                                    restrictToBox: e.modifiers.restrict
                                });
                                o.set(t, i)
                            },
                            unbind(t) {
                                var e;
                                null === (e = o.get(t)) || void 0 === e || e.destroy(), o.delete(t)
                            }
                        }), t.directive("pointerboxtranslate", {
                            inserted(t, e) {
                                var i, n, s;
                                t.setAttribute("data-pointerboxtranslateid", null !== (i = e.value.id) && void 0 !== i ? i : ""), t.setAttribute("data-pointerboxtranslatewidth", null !== (n = e.value.width) && void 0 !== n ? n : ""), t.setAttribute("data-pointerboxtranslateheight", null !== (s = e.value.height) && void 0 !== s ? s : "")
                            },
                            unbind(t) {
                                t.removeAttribute("data-pointerboxtranslateid"), t.removeAttribute("data-pointerboxtranslatewidth"), t.removeAttribute("data-pointerboxtranslateheight")
                            }
                        })
                    }
                }
        },
        3317: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => u
            });
            var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "doodle"
                }, [i("div", {
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
                }, [i("canvas", {
                    directives: [{
                        name: "pointerboxtranslate",
                        rawName: "v-pointerboxtranslate",
                        value: {
                            id: "doodleCanvas",
                            width: t.pointerBoxWidth,
                            height: t.pointerBoxHeight
                        },
                        expression: "{\n                id: 'doodleCanvas',\n                width: pointerBoxWidth,\n                height: pointerBoxHeight\n            }"
                    }],
                    ref: "canvas"
                })]), t._v(" "), t.hideUndo ? t._e() : i("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.UNDO",
                        expression: "'ACTION.UNDO'"
                    }],
                    attrs: {
                        disabled: !t.canSubmit
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onUndo.apply(null, arguments)
                        }
                    }
                }), t._v(" "), t.hideSubmit ? t._e() : i("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.SUBMIT",
                        expression: "'ACTION.SUBMIT'"
                    }],
                    attrs: {
                        disabled: !t.canSubmit
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                })])
            };
            n._withStripped = !0;
            var s = i(2934),
                o = i.n(s),
                a = i(20854),
                r = i(19734),
                h = i(65853),
                l = function(t, e, i, n) {
                    return new(i || (i = Promise))((function(s, o) {
                        function a(t) {
                            try {
                                h(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function r(t) {
                            try {
                                h(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function h(t) {
                            var e;
                            t.done ? s(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                                t(e)
                            }))).then(a, r)
                        }
                        h((n = n.apply(t, e || [])).next())
                    }))
                };
            o().use(r.O);
            const d = o().extend({
                props: {
                    canvasOptions: Object,
                    hideSubmit: Boolean,
                    hideUndo: Boolean,
                    player: Object
                },
                i18n: {
                    messages: h.s
                },
                data: () => ({
                    canvas: null,
                    isSubmitting: !1,
                    isUndoing: !1
                }),
                computed: {
                    canSubmit() {
                        return !(this.isSubmitting || this.isUndoing || this.player.doodle.lines.length <= 0)
                    },
                    pointerBoxWidth() {
                        var t, e, i;
                        let n = 320;
                        return (null === (t = this.player.doodle.size) || void 0 === t ? void 0 : t.width) && (n = this.player.doodle.size.width), n * (null !== (i = null === (e = this.canvasOptions.scale) || void 0 === e ? void 0 : e.width) && void 0 !== i ? i : 1)
                    },
                    pointerBoxHeight() {
                        var t, e, i;
                        let n = 320;
                        return (null === (t = this.player.doodle.size) || void 0 === t ? void 0 : t.height) && (n = this.player.doodle.size.height), n * (null !== (i = null === (e = this.canvasOptions.scale) || void 0 === e ? void 0 : e.height) && void 0 !== i ? i : 1)
                    }
                },
                watch: {
                    canvasOptions: function(t) {
                        var e, i, n, s, o, a, r;
                        this.canvas && (this.canvas.color = null !== (e = t.color) && void 0 !== e ? e : "#000000", this.canvas.layer = null !== (i = t.layer) && void 0 !== i ? i : 0, this.canvas.layers = null !== (n = t.layers) && void 0 !== n ? n : 1, this.canvas.maxPoints = null !== (s = t.maxPoints) && void 0 !== s ? s : Number.MAX_SAFE_INTEGER, this.canvas.precision = null !== (o = t.precision) && void 0 !== o ? o : 2, this.canvas.scale = null !== (a = t.scale) && void 0 !== a ? a : {
                            width: 1,
                            height: 1
                        }, this.canvas.weight = null !== (r = t.weight) && void 0 !== r ? r : 4)
                    },
                    "player.doodle": function() {
                        this.canvas && (this.canvas.doodle = this.player.doodle)
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
                        this.canvas = new a.J(t, this.player.doodle, this.canvasOptions)
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
                        return l(this, void 0, void 0, (function*() {
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
                        return l(this, void 0, void 0, (function*() {
                            this.isSubmitting = !0;
                            try {
                                yield this.$ecast.lock(this.player.doodle.key)
                            } catch (t) {
                                this.isSubmitting = !1, this.$handleEcastError(t)
                            }
                        }))
                    },
                    onUndo() {
                        return l(this, void 0, void 0, (function*() {
                            if (this.canvas) {
                                this.isUndoing = !0;
                                try {
                                    yield this.$ecast.undoDoodle(this.player.doodle.key)
                                } catch (t) {
                                    this.$handleEcastError(t)
                                } finally {
                                    this.isUndoing = !1
                                }
                            }
                        }))
                    }
                }
            });
            var c = (0, i(51900).Z)(d, n, [], !1, null, null, null);
            c.options.__file = "src/apps/vue/components/base/Doodle.vue";
            const u = c.exports
        }
    }
]);
//# sourceMappingURL=sourcemaps/3317.467a65b41085209a41bb.js.map