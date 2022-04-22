(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [2530], {
        32530: (t, e, i) => {
            "use strict";
            i.d(e, {
                U: () => a
            });
            var n = i(39666),
                s = i(13819),
                r = i(30328);
            class a {
                constructor(t, e) {
                    this.width = 400, this.height = 400, this.isDrawing = !1, this.callbacks = {}, this.onPointerDown = t => {
                        if (t.preventDefault(), !t.isPrimary) return;
                        if (this.capturedPointer) return;
                        const e = this.getEventPoint(t);
                        this.interactCanvas.onDown(e), this.stageElement.setPointerCapture(t.pointerId), this.capturedPointer = {
                            pointerId: t.pointerId,
                            pointerType: t.pointerType
                        }, n.n_({
                            type: "ui",
                            category: "ui.pointerdown",
                            message: `${t.pointerId}`,
                            level: s.z.Info,
                            timestamp: Date.now() / 1e3
                        })
                    }, this.onPointerMove = t => {
                        if (t.preventDefault(), !this.capturedPointer) return;
                        if (!t.isPrimary) return;
                        if (t.pointerType !== this.capturedPointer.pointerType) return;
                        const e = this.getEventPoint(t);
                        this.interactCanvas.onMove(e)
                    }, this.onLostPointerCapture = t => {
                        if (t.preventDefault(), !this.capturedPointer) return;
                        if (!t.isPrimary) return;
                        if (t.pointerType !== this.capturedPointer.pointerType) return;
                        this.interactCanvas.onUp(), this.emit("up"), n.n_({
                            type: "ui",
                            category: "ui.lostpointercapture",
                            message: `${t.pointerId}`,
                            level: s.z.Info,
                            timestamp: Date.now() / 1e3
                        });
                        const e = this.capturedPointer.pointerId;
                        this.stageElement.hasPointerCapture(e) && this.stageElement.releasePointerCapture(e), this.capturedPointer = void 0
                    }, this.onPointerEnd = t => {
                        if (t.preventDefault(), !this.capturedPointer) return;
                        if (!t.isPrimary) return;
                        if (t.pointerType !== this.capturedPointer.pointerType) return;
                        this.interactCanvas.onUp(), this.emit("up");
                        const e = this.capturedPointer.pointerId;
                        n.n_({
                            type: "ui",
                            category: "ui.pointerup",
                            message: `${e}`,
                            level: s.z.Info,
                            timestamp: Date.now() / 1e3
                        }), this.stageElement.hasPointerCapture(e) && this.stageElement.releasePointerCapture(e), this.capturedPointer = void 0
                    }, this.onMouseDown = t => {
                        t.preventDefault();
                        const e = this.getEventPoint(t);
                        this.interactCanvas.onDown(e), this.isDrawing = !0
                    }, this.onMouseMove = t => {
                        if (t.preventDefault(), !this.isDrawing) return;
                        const e = this.getEventPoint(t);
                        this.interactCanvas.onMove(e)
                    }, this.onMouseUp = t => {
                        t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
                    }, this.onTouchStart = t => {
                        t.preventDefault();
                        const e = this.getEventPoint(t.touches[0]);
                        this.interactCanvas.onDown(e), this.isDrawing = !0
                    }, this.onTouchMove = t => {
                        if (t.preventDefault(), !this.isDrawing) return;
                        const e = this.getEventPoint(t.touches[0]);
                        this.interactCanvas.onMove(e)
                    }, this.onTouchCancel = t => {
                        t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
                    }, this.onTouchEnd = t => {
                        t.preventDefault(), this.interactCanvas.onUp(), this.isDrawing = !1, this.emit("up")
                    }, e.width && (this.width = e.width), e.height && (this.height = e.height), this.stageElement = t, this.setupElements(), this.setupEvents(), e.InteractCanvas ? this.interactCanvas = new e.InteractCanvas(t, this.width, this.height, e) : this.interactCanvas = new r.f(t, this.width, this.height, e)
                }
                on(t, e) {
                    this.callbacks[t] = this.callbacks[t] || [], this.callbacks[t].push(e)
                }
                off(t, e) {
                    this.callbacks[t] = (this.callbacks[t] || []).filter((t => t !== e))
                }
                emit(t, ...e) {
                    (this.callbacks[t] || []).map((t => t(...e)))
                }
                beforeDestroy() {
                    this.tearDownEvents()
                }
                get canvas() {
                    return this.interactCanvas
                }
                getObject() {
                    return this.interactCanvas.toObject()
                }
                setupElements() {
                    this.stageElement.style.touchAction = "none"
                }
                setupEvents() {
                    "function" == typeof PointerEvent ? (this.stageElement.addEventListener("pointerdown", this.onPointerDown), this.stageElement.addEventListener("pointermove", this.onPointerMove), this.stageElement.addEventListener("lostpointercapture", this.onLostPointerCapture), this.stageElement.addEventListener("pointerup", this.onPointerEnd)) : (this.stageElement.addEventListener("mousedown", this.onMouseDown), this.stageElement.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUp.bind(this.stageElement)), this.stageElement.addEventListener("touchstart", this.onTouchStart), this.stageElement.addEventListener("touchmove", this.onTouchMove), this.stageElement.addEventListener("touchcancel", this.onTouchCancel), this.stageElement.addEventListener("touchend", this.onTouchEnd))
                }
                tearDownEvents() {
                    "function" == typeof PointerEvent ? (this.stageElement.removeEventListener("pointerdown", this.onPointerDown), this.stageElement.removeEventListener("pointermove", this.onPointerMove), this.stageElement.removeEventListener("lostpointercapture", this.onLostPointerCapture), this.stageElement.removeEventListener("pointerup", this.onPointerEnd)) : (this.stageElement.removeEventListener("mousedown", this.onMouseDown), this.stageElement.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseup", this.onMouseUp), this.stageElement.removeEventListener("touchstart", this.onTouchStart), this.stageElement.removeEventListener("touchmove", this.onTouchMove), this.stageElement.removeEventListener("touchcancel", this.onTouchCancel), this.stageElement.removeEventListener("touchend", this.onTouchEnd))
                }
                getPropValue(t, e) {
                    return parseFloat(t.getPropertyValue(e)) || 0
                }
                getCanvasOffset() {
                    const t = this.interactCanvas.canvasElement,
                        e = window.getComputedStyle(t),
                        i = t.getBoundingClientRect(),
                        n = "none" !== e.transform ? e.transform.replace("matrix(", "").split(",") : ["1", "1", "1", "1"],
                        s = parseFloat(n[0]),
                        r = parseFloat(n[3]),
                        a = (this.getPropValue(e, "border-left-width") + this.getPropValue(e, "border-right-width")) * s,
                        h = (this.getPropValue(e, "border-top-width") + this.getPropValue(e, "border-bottom-width")) * r,
                        o = (this.getPropValue(e, "padding-left") + this.getPropValue(e, "padding-right")) * s,
                        c = (this.getPropValue(e, "padding-top") + this.getPropValue(e, "padding-bottom")) * r;
                    return {
                        scaleX: (i.width - a - o) / t.width,
                        scaleY: (i.height - h - c) / t.height,
                        offsetX: i.left + (this.getPropValue(e, "border-left-width") + this.getPropValue(e, "padding-left")) * s,
                        offsetY: i.top + (this.getPropValue(e, "border-top-width") + this.getPropValue(e, "padding-top")) * r
                    }
                }
                getEventPoint(t) {
                    const {
                        scaleX: e,
                        scaleY: i,
                        offsetX: n,
                        offsetY: s
                    } = this.getCanvasOffset();
                    let r = (t.clientX - n) / e,
                        a = (t.clientY - s) / i;
                    return r = Math.max(0, Math.min(this.width, r)), a = Math.max(0, Math.min(this.height, a)), r = Math.round(r), a = Math.round(a), {
                        x: r,
                        y: a
                    }
                }
            }
        },
        30328: (t, e, i) => {
            "use strict";
            i.d(e, {
                f: () => r
            });
            var n = i(16479),
                s = i.n(n);
            class r {
                constructor(t, e, i, n) {
                    this.canvases = [], this.maxPoints = Number.MAX_SAFE_INTEGER, this.tolerance = 1, this.lines = [], this.lines2 = [], this.currentLine = {
                        color: "#000",
                        thickness: 0,
                        points: []
                    }, this.isSubmitting = !1, this.isInteracting = !1, this.currentColor = "#000", this.currentThickness = 4, this.currentFrame = 0, this.width = 400, this.height = 400, this.width = e, this.height = i, this.renderCanvas = document.createElement("canvas"), n.thickness && (this.currentThickness = n.thickness), n.color && (this.currentColor = n.color), n.maxPoints && (this.maxPoints = n.maxPoints), this.setupElements(t), this.draw()
                }
                createCanvasObject(t) {
                    const e = document.createElement("canvas");
                    e.width = this.width, e.height = this.height, e.style.display = "none", this.canvases.push({
                        name: t,
                        element: e,
                        dirty: !0
                    })
                }
                getCanvasObject(t) {
                    const e = this.canvases.find((e => e.name === t));
                    if (!e) throw new Error(`No canvas found with name ${t}`);
                    return e
                }
                setupElements(t) {
                    this.renderCanvas.classList.add("draw-canvas"), this.renderCanvas.width = this.width, this.renderCanvas.height = this.height, this.renderCanvas.style.width = "100%", this.renderCanvas.style.margin = "0px auto", this.renderCanvas.style.height = "100%", this.renderCanvas.style.top = "0", this.renderCanvas.style.left = "0", t.append(this.renderCanvas), this.createCanvasObject("inactive"), this.createCanvasObject("active"), this.createCanvasObject("line")
                }
                get submitting() {
                    return this.isSubmitting
                }
                set submitting(t) {
                    this.isSubmitting = t
                }
                get color() {
                    return this.currentColor
                }
                set color(t) {
                    this.currentColor = t
                }
                get thickness() {
                    return this.currentThickness
                }
                set thickness(t) {
                    this.currentThickness = t
                }
                get frame() {
                    return this.currentFrame
                }
                set frame(t) {
                    this.currentFrame = t, this.getCanvasObject("active").dirty = !0, this.getCanvasObject("inactive").dirty = !0, this.draw()
                }
                get canvasElement() {
                    return this.renderCanvas
                }
                toObject() {
                    return {
                        frame0: this.exportLines(this.lines),
                        frame1: this.exportLines(this.lines2)
                    }
                }
                onDown(t) {
                    this.isSubmitting || (this.isInteracting = !0, this.addLine(t), this.getCanvasObject("line").dirty = !0, this.draw())
                }
                onMove(t) {
                    if (!this.isInteracting) return;
                    if (this.isSubmitting) return;
                    const e = this.getLastDrawnPoint();
                    if (!e) return this.addPoint(t), void(this.getCanvasObject("line").dirty = !0);
                    const i = .5 * this.thickness,
                        n = {
                            x: t.x - e.x,
                            y: t.y - e.y
                        },
                        s = Math.sqrt(Math.pow(n.x, 2) + Math.pow(n.y, 2));
                    if (s > i) {
                        const t = (s - i) / s,
                            r = {
                                x: n.x * t,
                                y: n.y * t
                            },
                            a = {
                                x: e.x + r.x,
                                y: e.y + r.y
                            };
                        this.addPoint(a), this.getCanvasObject("line").dirty = !0, this.draw()
                    }
                }
                onUp() {
                    this.isSubmitting || this.isInteracting && (this.isInteracting = !1, this.endLine(), this.getCanvasObject("active").dirty = !0, this.getCanvasObject("line").dirty = !0, this.draw())
                }
                addLine(t) {
                    const e = this.currentColor,
                        i = this.currentThickness;
                    this.currentLine = {
                        color: e,
                        thickness: i,
                        points: []
                    }, this.addPoint(t)
                }
                addPoint(t) {
                    const e = this.currentLine;
                    if (!e) return;
                    const i = {
                        x: Math.min(Math.max(.5 * e.thickness, t.x), this.renderCanvas.width - .5 * e.thickness),
                        y: Math.min(Math.max(.5 * e.thickness, t.y), this.renderCanvas.height - .5 * e.thickness)
                    };
                    e.points.push(i)
                }
                getLastDrawnPoint() {
                    return 0 === this.currentLine.points.length ? null : this.currentLine.points[this.currentLine.points.length - 1]
                }
                endLine() {
                    const t = 0 === this.currentFrame ? this.lines : this.lines2,
                        e = s()(this.currentLine.points);
                    t.push(Object.assign(Object.assign({}, this.currentLine), {
                        points: e
                    })), this.currentLine = {
                        color: "#000",
                        thickness: 0,
                        points: []
                    }
                }
                parseLines(t) {
                    let e = "#000",
                        i = 1;
                    return t.map((t => {
                        let n = [];
                        return n = "string" == typeof t.points ? t.points.split("|").map((t => {
                            const [e, i] = t.split(",");
                            return {
                                x: parseInt(e, 10),
                                y: parseInt(i, 10)
                            }
                        })) : t.points, t.color && t.color !== e && (e = t.color), t.thickness && t.thickness !== i && (i = t.thickness), {
                            color: e,
                            thickness: i,
                            points: n
                        }
                    }))
                }
                exportLines(t) {
                    return t.map((t => Object.assign(Object.assign({}, t), {
                        points: t.points.map((t => `${t.x},${t.y}`)).join("|")
                    })))
                }
                draw() {
                    const t = this.renderCanvas.getContext("2d");
                    if (!t) return;
                    t.clearRect(0, 0, this.width, this.height);
                    const e = this.getCanvasObject("inactive");
                    if (e.dirty) {
                        const t = e.element.getContext("2d");
                        t.clearRect(0, 0, this.width, this.height), (0 === this.currentFrame ? this.lines2 : this.lines).forEach((e => this.drawLine(t, e))), e.dirty = !1
                    }
                    t.save(), t.globalAlpha = .1, t.drawImage(e.element, 0, 0), t.restore();
                    const i = this.getCanvasObject("active");
                    if (i.dirty) {
                        const t = i.element.getContext("2d");
                        t.clearRect(0, 0, this.width, this.height), (0 === this.currentFrame ? this.lines : this.lines2).forEach((e => this.drawLine(t, e))), i.dirty = !1
                    }
                    t.drawImage(i.element, 0, 0);
                    const n = this.getCanvasObject("line");
                    if (n.dirty) {
                        const t = n.element.getContext("2d");
                        t.clearRect(0, 0, this.width, this.height), this.drawLine(t, this.currentLine), n.dirty = !1
                    }
                    t.drawImage(n.element, 0, 0)
                }
                drawLine(t, e) {
                    t.strokeStyle = e.color, t.lineWidth = e.thickness, t.lineCap = "round", t.lineJoin = "round", t.fillStyle = e.color, t.strokeStyle = e.color, t.beginPath(), e.points.forEach(((i, n) => {
                        0 === n && (t.save(), t.arc(i.x, i.y, e.thickness / 2, 0, 2 * Math.PI), t.fill(), t.restore(), t.beginPath(), t.moveTo(i.x, i.y)), t.lineTo(i.x, i.y)
                    })), t.stroke()
                }
            }
        }
    }
]);
//# sourceMappingURL=sourcemaps/2530.1081d1b94dc700d4d21b.js.map