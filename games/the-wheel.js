(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/the-wheel"], {
        19734: (t, e, s) => {
            "use strict";
            s.d(e, {
                O: () => a
            });
            var n = s(89446);
            class i {
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
                        s = new CustomEvent("pointerboxclick", {
                            detail: e
                        });
                    this.element.dispatchEvent(s)
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
                    const s = new CustomEvent("pointerboxstart", {
                        detail: e
                    });
                    this.element.dispatchEvent(s);
                    const n = new CustomEvent("pointerboxchilddown", {
                        detail: e
                    });
                    return this.staticEventChildren = document.elementsFromPoint(e.clientX, e.clientY), this.staticEventChildren.forEach((t => t.dispatchEvent(n))), this.bindStartedEvents(), !1
                }
                onMove(t) {
                    var e;
                    if (t.preventDefault(), this.isCanceled) return;
                    if (this.usePointerEvents) {
                        const s = t;
                        if (!s.isPrimary) return;
                        if (s.pointerType !== (null === (e = this.capturedPointer) || void 0 === e ? void 0 : e.type)) return
                    }
                    const s = this.getMoveDetail(t);
                    this.previous = s;
                    const n = new CustomEvent("pointerboxmove", {
                        detail: s
                    });
                    return this.element.dispatchEvent(n), this.previousEventTimestamp = Date.now(), !1
                }
                onEnd(t) {
                    var e;
                    if (t.preventDefault(), this.isCanceled) return;
                    if (this.usePointerEvents) {
                        const s = t;
                        if (!s.isPrimary) return;
                        if (s.pointerType !== (null === (e = this.capturedPointer) || void 0 === e ? void 0 : e.type)) return;
                        this.element.hasPointerCapture(this.capturedPointer.id) && this.element.releasePointerCapture(this.capturedPointer.id), delete this.capturedPointer
                    }
                    const s = this.getMoveDetail(t),
                        n = new CustomEvent("pointerboxend", {
                            detail: s
                        });
                    this.element.dispatchEvent(n), delete this.initial, delete this.previous, delete this.cachedElementRect, delete this.cachedDocumentRect, delete this.cachedTranslations, delete this.previousEventTimestamp, this.unbindStartedEvents();
                    const i = new CustomEvent("pointerboxchildup", {
                        detail: s
                    });
                    return document.elementsFromPoint(s.clientX, s.clientY).forEach((t => {
                        var e;
                        if (t.dispatchEvent(i), !(null === (e = this.staticEventChildren) || void 0 === e ? void 0 : e.includes(t))) return;
                        const n = new CustomEvent("pointerboxchildclick", {
                            detail: s
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
                    let e, s, n, i;
                    this.cachedElementRect || (this.cachedElementRect = this.element.getBoundingClientRect()), this.cachedDocumentRect || (this.cachedDocumentRect = this.documentElement.getBoundingClientRect());
                    const l = this.cachedDocumentRect.top;
                    if (this.cachedTranslations || (this.cachedTranslations = this.getTranslations()), window.TouchEvent && t instanceof window.TouchEvent) {
                        if (!t.touches.length) return this.previous;
                        e = t.touches[0].pageX, s = t.touches[0].pageY + l, n = t.touches[0].clientX, i = t.touches[0].clientY
                    } else {
                        const a = t;
                        e = a.pageX, s = a.pageY + l, n = a.clientX, i = a.clientY
                    }
                    const a = e - this.cachedElementRect.left,
                        c = s - this.cachedElementRect.top,
                        o = a / this.cachedElementRect.width,
                        r = c / this.cachedElementRect.height,
                        p = o < 0 || o > 1 || r < 0 || r > 1,
                        h = {};
                    return this.cachedTranslations.forEach((t => {
                        h[t.id] && console.warn(`[PointerBox] duplicate translation key ${t.id}`), h[t.id] = {
                            x: a * t.x - t.left,
                            y: c * t.y - t.top
                        }
                    })), {
                        boxX: a,
                        boxY: c,
                        pageX: e,
                        pageY: s,
                        clientX: n,
                        clientY: i,
                        percentX: o,
                        percentY: r,
                        translations: h,
                        isOutsideBox: p,
                        originalEvent: t,
                        cancel: () => this.cancel()
                    }
                }
                getMoveDetail(t) {
                    if (!this.initial) throw new Error("[PointerBox] No initial details stored");
                    if (!this.previous) throw new Error("[PointerBox] No previous details stored");
                    const e = this.getStartDetail(t),
                        s = n.c.getAngleBetweenPoints({
                            x: this.initial.boxX,
                            y: this.initial.boxY
                        }, {
                            x: e.boxX,
                            y: e.boxY
                        }),
                        i = n.c.getDistanceBetweenPoints({
                            x: this.initial.boxX,
                            y: this.initial.boxY
                        }, {
                            x: e.boxX,
                            y: e.boxY
                        }),
                        l = n.c.getAngleBetweenPoints({
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
                    let c = 0;
                    return this.previousEventTimestamp && (c = n.c.getVelocity({
                        x: this.previous.boxX,
                        y: this.previous.boxY
                    }, this.previousEventTimestamp, {
                        x: e.boxX,
                        y: e.boxY
                    }, Date.now())), c && (this.velocityValues.unshift(c), this.velocityValues.length = Math.min(this.velocityValues.length, 5)), {
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
                        degreesFromInitial: s,
                        distanceFromInitial: i,
                        changeXFromInitial: e.boxX - this.initial.boxX,
                        changeYFromInitial: e.boxY - this.initial.boxY,
                        degreesFromPrevious: l,
                        distancefromPrevious: a,
                        changeXFromPrevious: e.boxX - this.previous.boxX,
                        changeYFromPrevious: e.boxY - this.previous.boxY,
                        totalDistance: this.distanceAccumulator,
                        velocity: c,
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
                    for (let s = 0; s < e.length; s++) {
                        const n = e[s].attributes.getNamedItem("data-pointerboxtranslateid");
                        if (!n) continue;
                        const i = n.value;
                        if (!i) continue;
                        const l = e[s].attributes.getNamedItem("data-pointerboxtranslatewidth"),
                            a = e[s].attributes.getNamedItem("data-pointerboxtranslateheight"),
                            c = (null == l ? void 0 : l.value) ? parseInt(l.value, 10) : this.cachedElementRect.width,
                            o = (null == a ? void 0 : a.value) ? parseInt(a.value, 10) : this.cachedElementRect.height,
                            r = e[s].getBoundingClientRect();
                        t.push({
                            id: i,
                            left: r.left - this.cachedElementRect.left,
                            top: r.top - this.cachedElementRect.top,
                            x: c / r.width,
                            y: o / r.height
                        })
                    }
                    return t
                }
                applyPolyfill() {
                    i.isPolyfilled || (i.isPolyfilled = !0, window && window.document && (window.document.elementsFromPoint || (window.document.elementsFromPoint = i.elementsFromPoint)))
                }
                static elementsFromPoint(t, e) {
                    const s = [],
                        n = [];
                    let i = null;
                    do {
                        const l = window.document.elementFromPoint(t, e);
                        i !== l ? (i = l, s.push(i), n.push(i.style.pointerEvents), i.style.pointerEvents = "none") : i = null
                    } while (i);
                    return s.forEach(((t, e) => {
                        t.style.pointerEvents = n[e]
                    })), s
                }
            }
            i.isPolyfilled = !1;
            const l = new Map,
                a = {
                    boxes: new Map,
                    install(t) {
                        t.directive("pointerBox", {
                            inserted(t, e) {
                                const s = new i(t, {
                                    restrictToBox: e.modifiers.restrict
                                });
                                l.set(t, s)
                            },
                            unbind(t) {
                                var e;
                                null === (e = l.get(t)) || void 0 === e || e.destroy(), l.delete(t)
                            }
                        }), t.directive("pointerboxtranslate", {
                            inserted(t, e) {
                                var s, n, i;
                                t.setAttribute("data-pointerboxtranslateid", null !== (s = e.value.id) && void 0 !== s ? s : ""), t.setAttribute("data-pointerboxtranslatewidth", null !== (n = e.value.width) && void 0 !== n ? n : ""), t.setAttribute("data-pointerboxtranslateheight", null !== (i = e.value.height) && void 0 !== i ? i : "")
                            },
                            unbind(t) {
                                t.removeAttribute("data-pointerboxtranslateid"), t.removeAttribute("data-pointerboxtranslatewidth"), t.removeAttribute("data-pointerboxtranslateheight")
                            }
                        })
                    }
                }
        },
        21057: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                default: () => ks
            });
            var n = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "wheel",
                    class: t.classes
                }, [t.isReady ? s("div", {
                    staticClass: "constrain"
                }, [s("div", {
                    staticClass: "mask"
                }, [t.screen ? s(t.screen[0], t._b({
                    tag: "component",
                    staticClass: "lower",
                    attrs: {
                        role: "main",
                        "aria-label": "game"
                    },
                    on: {
                        statusChange: t.onStatusChange,
                        localSliceCountChange: t.onLocalSliceCountChange
                    }
                }, "component", t.screen[1], !1)) : t._e(), t._v(" "), "frozen" === t.status.type ? [s("div", {
                    staticClass: "frozen-overlay"
                }), t._v(" "), s("FrozenBox", {
                    attrs: {
                        player: t.player
                    }
                })] : t._e(), t._v(" "), s("Playfield", {
                    attrs: {
                        role: "complementary",
                        "aria-label": "frame",
                        info: t.info,
                        status: t.status,
                        "player-state": t.playerState,
                        "slice-count": t.sliceCount
                    },
                    on: {
                        statusChange: t.onStatusChange
                    }
                })], 2)]) : t._e()])
            };
            n._withStripped = !0;
            var i = s(2934),
                l = s.n(i),
                a = s(19734),
                c = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "playfield",
                        class: t.classes
                    }, [s("svg", {
                        staticClass: "edges field freezable",
                        attrs: {
                            viewBox: "0 0 1000 100",
                            preserveAspectRatio: "none"
                        }
                    }, [s("rect", {
                        staticClass: "f d4",
                        attrs: {
                            x: "20",
                            width: "10",
                            height: "100"
                        }
                    }), t._v(" "), s("rect", {
                        staticClass: "f l1",
                        attrs: {
                            x: "970",
                            width: "10",
                            height: "100"
                        }
                    }), t._v(" "), s("rect", {
                        staticClass: "f ns b",
                        attrs: {
                            width: "20",
                            height: "100"
                        }
                    }), t._v(" "), s("rect", {
                        staticClass: "f ns b",
                        attrs: {
                            x: "980",
                            width: "20",
                            height: "100"
                        }
                    })]), t._v(" "), s("svg", {
                        staticClass: "top field freezable",
                        attrs: {
                            viewBox: "0 0 1000 450"
                        }
                    }, [s("polygon", {
                        staticClass: "f d5",
                        attrs: {
                            points: "20,397 30,416 66.7,341.3 56.5,320.3"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d5",
                        attrs: {
                            points: "147,224.6 153.4,244.6 66.7,341.3 56.5,320.3"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d5",
                        attrs: {
                            points: "298.6,154.8 302.8,172.8 153.4,244.6 147,224.6"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d4",
                        attrs: {
                            points: "499.8,125.8 501.8,145.8 302.8,172.8 298.6,154.8"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d3",
                        attrs: {
                            points: "628.4,137.8 625.7,157.8 501.8,145.8 499.8,125.8"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d3",
                        attrs: {
                            points: "803.1,197.6 796.8,218.6 625.7,157.8 628.4,137.8"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d2",
                        attrs: {
                            points: "941.3,310.9 932.1,329.9 796.8,218.6 803.1,197.6"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d1",
                        attrs: {
                            points: "980,404 970,422 932.1,329.9 941.3,310.9"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f l1",
                        attrs: {
                            points: "980,404 970,422 970,450 980,450"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d4",
                        attrs: {
                            points: "20,450 30,450 30,416 20,397"
                        }
                    })]), t._v(" "), t.playerState ? s("SlicesBox", {
                        attrs: {
                            "slice-count": t.sliceCount
                        }
                    }) : t._e(), t._v(" "), s("svg", {
                        staticClass: "top field freezable",
                        attrs: {
                            viewBox: "0 0 1000 450"
                        }
                    }, [s("polygon", {
                        staticClass: "f b ns",
                        attrs: {
                            points: "20,450 20,397 56.5,320.3 147,224.6 298.6,154.8 499.8,125.8 628.4,137.8 803.1,197.6 941.3,310.9 980,404 980,\n                450 1000,450 1000,0 0,0 0,450"
                        }
                    })]), t._v(" "), s("div", {
                        staticClass: "bottom-box"
                    }, [s("svg", {
                        staticClass: "bottom field freezable",
                        attrs: {
                            viewBox: "0 0 1000 100"
                        }
                    }, [s("polygon", {
                        staticClass: "f l2",
                        attrs: {
                            points: "965.5,80 980,60.8 970,45.8 955.8,65"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f l1",
                        attrs: {
                            points: "965.5,80 955.8,65 42.5,65 32.7,80"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d2",
                        attrs: {
                            points: "42.5,65 32.7,80 20,64.2 30,49.2"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d4",
                        attrs: {
                            points: "20,64.2 30,49.2 30,0 20,0"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f l1",
                        attrs: {
                            points: "970,0 970,45.8 980,60.8 980,0"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f ns b",
                        attrs: {
                            points: "0,0 0,100 1000,100 1000,0 980,0 980,60.8 965.5,80 32.7,80 20,64.2 20,0"
                        }
                    })])]), t._v(" "), s("CornerBox", {
                        attrs: {
                            info: t.info,
                            "current-status": t.currentStatus,
                            "player-state": t.playerState
                        }
                    }), t._v(" "), s("svg", {
                        staticClass: "banner player",
                        attrs: {
                            viewBox: "0 0 1000 375"
                        }
                    }, [s("polygon", {
                        staticClass: "f ns b",
                        attrs: {
                            points: "20,344.5 20,265.9 40.5,210.6 99.2,140.6 197,80.9 343.6,34.6 449,21 548.5,20 629.7,29.8 772.7,67.8 891.8,134.1\n                962.5,216.1 980,265.9 980,344.5 963.5,310.1 922.5,249.3 821.1,176.5 689,127.7 554,107.2 495.7,104.1 437.9,109.1\n                301,132.3 158.6,188.5 82.3,244.7 35.8,312"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d3 r",
                        attrs: {
                            points: "20,344.5 23.9,336.6 24.1,274.5 20,265.9"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d4 r",
                        attrs: {
                            points: "40.5,210.6 43.8,216.5 24.1,274.5 20,265.9"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d5 r",
                        attrs: {
                            points: "99.2,140.6 102,147.8 43.8,216.5 40.5,210.6"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d5 r",
                        attrs: {
                            points: "197,80.9 199.2,87.7 102,147.8 99.2,140.6"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d4 r",
                        attrs: {
                            points: "343.6,34.6 344.7,41.6 199.2,87.7 197,80.9"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d3 r",
                        attrs: {
                            points: "449,21 450.5,28 344.7,41.6 343.6,34.6"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d3 r",
                        attrs: {
                            points: "548.5,20 548,26 450.5,28 449,21"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d2 r",
                        attrs: {
                            points: "629.7,29.8 628.2,37.4 548,26 548.5,20"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d1 r",
                        attrs: {
                            points: "772.7,67.8 772.1,75 628.2,37.4 629.7,29.8"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f d1 r",
                        attrs: {
                            points: "891.8,134.1 889.6,140.5 772.1,75 772.7,67.8"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f l1 r",
                        attrs: {
                            points: "962.5,216.1 959.8,221.4 889.6,140.5 891.8,134.1"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f l1 r",
                        attrs: {
                            points: "977,272.8 980,265.9 962.5,216.1 959.8,221.4"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "f l2 r",
                        attrs: {
                            points: "980,344.5 980,265.9 977,272.8 976.1,336.3"
                        }
                    })]), t._v(" "), s("svg", {
                        staticClass: "name player",
                        attrs: {
                            viewBox: "0 0 1000 375"
                        }
                    }, [s("path", {
                        attrs: {
                            id: "playfield-text-path",
                            d: "M23.1,333.3c27.3-135.6,230.4-241,476.9-241s449.5,105.4,476.9,241"
                        }
                    }), t._v(" "), s("text", {
                        attrs: {
                            "text-anchor": "middle"
                        }
                    }, [s("textPath", {
                        staticClass: "banner-text f s-m d3",
                        attrs: {
                            href: "#playfield-text-path",
                            "vector-effect": "non-scaling-stroke",
                            startOffset: "50%"
                        }
                    }, [t._v("\n                " + t._s(t.bannerText || t.name) + "\n            ")])])])], 1)
                };
            c._withStripped = !0;
            var o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "corner-box"
                }, [n("svg", {
                    staticClass: "background player",
                    attrs: {
                        viewBox: "0 0 1000 250",
                        width: "1000",
                        height: "250"
                    }
                }, [n("polygon", {
                    staticClass: "left f ns b",
                    attrs: {
                        points: "21.5,217.3 20,208.4 20,27.3 27.5,20 312.4,20 326.2,21 313.8,23.1 284.9,31.7 242.2,43.5 183.6,67 113.3,104.6\n                69.4,141.7 35.3,186.9 26.7,201.7"
                    }
                }), t._v(" "), n("polygon", {
                    staticClass: "right f ns b",
                    attrs: {
                        points: "978.5,217.3 980,208.4 980,27.3 972.5,20 687.6,20 673.8,21 686.2,23.1 715.1,31.7 757.8,43.5 816.4,67 886.7,\n                104.6 930.6,141.7 964.7,186.9 973.3,201.7"
                    }
                })]), t._v(" "), t.playerState && t.playerState.isInWinnerMode ? n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(32334),
                        expression: "require(`../../images/playfield/win.inline.svg`)"
                    }],
                    staticClass: "graphic"
                }) : "Audience" === t.info.avatarId ? n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(94929),
                        expression: "require(`../../images/playfield/audience.inline.svg`)"
                    }],
                    staticClass: "graphic"
                }) : t._l(8, (function(e) {
                    return [t.info.avatarId === "Player" + e ? n("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg",
                            value: s(17995)("./player" + e + ".inline.svg"),
                            expression: "require(`../../images/playfield/player${n}.inline.svg`)"
                        }],
                        key: e,
                        staticClass: "graphic"
                    }) : t._e()]
                })), t._v(" "), n("svg", {
                    staticClass: "player",
                    attrs: {
                        viewBox: "0 0 1000 250",
                        width: "1000",
                        height: "250"
                    }
                }, [n("polygon", {
                    staticClass: "f d3 r",
                    attrs: {
                        points: "304.6,25.8 313.8,23.1 326.2,21 312.4,20 27.5,20 32.3,26"
                    }
                }), t._v(" "), n("polygon", {
                    staticClass: "f d4 r",
                    attrs: {
                        points: "32.3,26 24.9,34.3 20,27.3 27.5,20"
                    }
                }), t._v(" "), n("polygon", {
                    staticClass: "f d3 r",
                    attrs: {
                        points: "20,27.3 24.9,34.3 24.1,209.4 21.5,217.3 20,208.4"
                    }
                }), t._v(" "), n("polygon", {
                    staticClass: "f d3 r",
                    attrs: {
                        points: "705.5,28.8 686.2,23.1 673.8,21 687.6,20 972.5,20 967.7,29"
                    }
                }), t._v(" "), n("polygon", {
                    staticClass: "f d1 r",
                    attrs: {
                        points: "967.7,29 974.1,37.3 980,27.3 972.5,20"
                    }
                }), t._v(" "), n("polygon", {
                    staticClass: "f l1 r",
                    attrs: {
                        points: "980,27.3 974.1,37.3 975.1,207.2 978.5,217.3 980,208.4"
                    }
                })])], 2)
            };
            o._withStripped = !0;
            const r = l().extend({
                props: {
                    info: Object,
                    currentStatus: Object,
                    playerState: Object
                }
            });
            var p = s(51900),
                h = (0, p.Z)(r, o, [], !1, null, "ea891ba4", null);
            h.options.__file = "src/games/pp8/the-wheel/views/playfield/CornerBox.vue";
            const d = h.exports;
            var v = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "slices-box"
                }, [s("svg", {
                    staticClass: "gate ui brown",
                    attrs: {
                        viewBox: "0 0 1000 450",
                        "aria-hidden": "true"
                    }
                }, [s("polygon", {
                    ref: "leftGate",
                    staticClass: "f d1",
                    attrs: {
                        points: "422.6,136.9 499.8,125.8 501.8,145.8 422.1,156.6"
                    }
                }), t._v(" "), s("polygon", {
                    ref: "rightGate",
                    staticClass: "f d1",
                    attrs: {
                        points: "501.8,145.8 576.3,152.7 576.5,133 499.8,125.8"
                    }
                })]), t._v(" "), s("svg", {
                    ref: "arch",
                    staticClass: "arch field",
                    attrs: {
                        viewBox: "0 0 1000 450",
                        "aria-hidden": "true"
                    }
                }, [s("polygon", {
                    staticClass: "f b",
                    attrs: {
                        points: "501.7,215.1 474.2,209.5 448.2,194.5 429.4,171.8 422.6,136.9 499.8,125.8 576.5,133 576.1,141.9 569,174.2 548.2,\n                196.4 527.5,208.3"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d2",
                    attrs: {
                        points: "501.7,215.1 501.7,227.6 475.2,221.9 474.2,209.5"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d2",
                    attrs: {
                        points: "475.2,221.9 449.2,208.9 448.2,194.5 474.2,209.5"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d1",
                    attrs: {
                        points: "449.2,208.9 448.2,194.5 429.4,171.8 430.4,185.2"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f l1",
                    attrs: {
                        points: "430.4,185.2 429.4,171.8 422.6,136.9 422.1,156.6"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d3",
                    attrs: {
                        points: "501.7,215.1 527.5,208.3 526.5,220.7 501.7,227.6"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d4",
                    attrs: {
                        points: "526.5,220.7 547.2,209.8 548.2,196.4 527.5,208.3"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d4",
                    attrs: {
                        points: "547.2,209.8 568,187.6 569,174.2 548.2,196.4"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d5",
                    attrs: {
                        points: "568,187.6 576.3,152.7 592,154.6 576.5,133 576.1,141.9 569,174.2"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d3",
                    attrs: {
                        points: "474.9,202.2 449.6,187.6 434.4,165.8 428,139.8 437.3,134.8 486.9,127.7 490.5,131.6 492.1,136.9 496.1,140 503.4,\n                139.9 506.5,137.8 508.9,131.6 513.1,127 562,131.6 572,138.9 564,168.2 546.1,189.5 526,201.1 501.2,207.6"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d1",
                    attrs: {
                        points: "572,138.9 570.7,143.6 558.7,135.5 562,131.6"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d5",
                    attrs: {
                        points: "439.8,138.6 429.1,144.3 428,139.8 437.3,134.8"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d4",
                    attrs: {
                        points: "439.8,138.6 437.3,134.8 486.9,127.7 486.9,131.7"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d1",
                    attrs: {
                        points: "486.9,127.7 490.5,131.6 490.5,135.6 486.9,131.7"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d2",
                    attrs: {
                        points: "492.1,140.9 492.1,136.9 490.5,131.6 490.5,135.6"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d3",
                    attrs: {
                        points: "496.1,140 492.1,136.9 492.1,140.9 496.1,144"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d4",
                    attrs: {
                        points: "503.4,139.9 496.1,140 496.1,144 503.4,143.9"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d4",
                    attrs: {
                        points: "506.5,137.8 506.5,141.8 503.4,143.9 503.4,139.9"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d5",
                    attrs: {
                        points: "508.9,135.6 508.9,131.6 506.5,137.8 506.5,141.8"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d5",
                    attrs: {
                        points: "513.1,127 508.9,131.6 508.9,135.6 513.1,131"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d4",
                    attrs: {
                        points: "558.7,135.5 562,131.6 513.1,127 513.1,131"
                    }
                }), t._v(" "), t.sliceCount ? s("g", {
                    staticClass: "player",
                    attrs: {
                        transform: "rotate(" + t.rotation + " 500 136)"
                    }
                }, [t.sliceCount >= 1 ? s("polygon", {
                    staticClass: "f b s-xs p",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "500,152 503,153.4 510.9,196.9 500,202.2 489.1,196.9 497,153.4"
                    }
                }) : t._e(), t._v(" "), t.sliceCount >= 2 ? s("polygon", {
                    staticClass: "f b s-xs p",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "494.7,151 497,153.4 489.1,196.9 477,198 468.7,189.2 491.4,151.3"
                    }
                }) : t._e(), t._v(" "), t.sliceCount >= 3 ? s("polygon", {
                    staticClass: "f b s-xs p",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "505.3,151 508.6,151.3 531.3,189.2 523,198 510.9,196.9 503,153.4"
                    }
                }) : t._e(), t._v(" "), t.sliceCount >= 4 ? s("polygon", {
                    staticClass: "f b s-xs p",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "490.1,148.3 491.4,151.3 468.7,189.2 457,186 452.3,174.9 486.9,147.4"
                    }
                }) : t._e(), t._v(" "), t.sliceCount >= 5 ? s("polygon", {
                    staticClass: "f b s-xs p",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "509.9,148.3 513.1,147.4 547.7,174.9 543,186 531.3,189.2 508.6,151.3"
                    }
                }) : t._e(), t._v(" "), t.sliceCount >= 6 ? s("polygon", {
                    staticClass: "f b s-xs p",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "486.8,144.1 486.9,147.4 452.3,174.9 442.5,167.8 442,155.7 484.1,142.1"
                    }
                }) : t._e(), t._v(" "), t.sliceCount >= 7 ? s("polygon", {
                    staticClass: "f b s-xs p",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "513.2,144.1 515.9,142.1 558,155.7 557.5,167.8 547.7,174.9 513.1,147.4"
                    }
                }) : t._e(), t._v(" "), t.sliceCount >= 8 ? s("polygon", {
                    staticClass: "f b s-xs p",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "485.1,138.9 484.1,142.1 442,155.7 435.3,145.6 439.2,134.1 483.3,136.2"
                    }
                }) : t._e()]) : t._e()])])
            };
            v._withStripped = !0;
            var u = s(95716),
                C = s(7310),
                g = s(85608);
            const m = {
                    ASK: "ASK",
                    FILTER_ERROR: "You have used a word The Wheel does not approve of. Please try again.",
                    NO: "NO",
                    OR: "OR",
                    SEND: "SEND",
                    SUBMIT: "SUBMIT",
                    TRY_AGAIN: "WAIT TO TRY AGAIN",
                    UNDO: "UNDO",
                    YES: "YES",
                    AUDIENCE: {
                        NAME: "THE AUDIENCE",
                        VOTE_NOW: "VOTE NOW",
                        THANKS: ["Thank you, dear audience.", "Every vote counts. Even yours!", "I thank you with all my enormity.", "I bestow upon you my deepest gratitude.", "Many thanks. I won't forget this."]
                    },
                    GUESSING: {
                        BANNER: "WHAT AM I THINKING?",
                        INCORRECT: "TRY AGAIN",
                        CORRECT: "GOT IT",
                        PLACEHOLDER: "Enter A Guess"
                    },
                    MATCHING: {
                        BANNER: "COUNTERPARTS",
                        CORRECT: "MATCH",
                        FROZEN: "INCORRECT"
                    },
                    NUMERIC: {
                        BANNER: "ENUMERATE"
                    },
                    PLACE_SLICES: {
                        PLACE: "PLACE YOUR SLICES",
                        SUBMIT: "DONE! PRESS SUBMIT",
                        THANKS: "NICE JOB"
                    },
                    QUESTION: {
                        BANNER: "WELCOME",
                        PLACEHOLDER: "Enter A Question"
                    },
                    RAPID: {
                        BANNER: "THAT [small]OR[/small] THIS",
                        CORRECT: "CORRECT",
                        FROZEN: "INCORRECT"
                    },
                    SPIN: {
                        ANSWER_BANNER: "YOU WIN!",
                        MAIN_BANNER: "SPIN [small]THE[/small] WHEEL",
                        RAINBOW_BANNER: "RAINBOW WHEEL",
                        WIN_BANNER: "FOR [small]THE[/small] WIN"
                    },
                    TYPING: {
                        OBJECTIVE_BANNER: "DON'T FORGET TO WRITE",
                        SUBJECTIVE_BANNER: "SUBJECTIVELY YOURS",
                        CORRECT: "GOOD",
                        TAKEN: "ANSWERED",
                        OBJECTIVE_INCORRECT: "WRONG",
                        SUBJECTIVE_INCORRECT: "NOPE",
                        PLACEHOLDER: "Enter A Guess"
                    },
                    WAITING: {
                        SPIN: '[player avatar="{avatar}"]{name}[/player] is the spinner',
                        MESSAGES: ["Remember... patience is a virtue.", "This is a blank screen. Or is it?", "Action awaits!", "Oh, the waiting. The waiting!", "Just wait till the next part!", "Hey, nice controller! Sorry, just making conversation.", "(Insert on-hold music here)", "Sit tight, little meeple.", "I believe in you. Shhh... don't tell anyone.", "It's about to get exciting in here.", "Nothing to see here.", "Behold... a screen with only these words on it.", "Property of the Wheel of Enormous Proportions", "The Wheel Was Here"]
                    },
                    ARIA: {
                        ANSWER: "answer slice.",
                        AUDIENCE: "audience slice.",
                        BAD: "skull slice.",
                        BONUS: "power slice for {for}.",
                        EMPTY: "empty.",
                        MULTIPLIER: "empty {multiplier}x multiplier.",
                        NEIGHBOR: "neighbor slice.",
                        PLAYER: "player slice for {for}.",
                        POINTS: "{slice.data.points} point slice.",
                        POINTS_FOR: "points slice for {for}.",
                        RESERVED: "reserved for {for}.",
                        WINNER: "winner slice for {for}.",
                        KEEP_GOING: "keep going.",
                        SPIN_POWER: "{power} percent power spin.",
                        SPIN: "swipe down or tap quickly to spin",
                        SLICE_COUNT: "you have 0 slices. | you have 1 slice. | you have {count} slices.",
                        YOU_CAN_WIN: "You now have enough points to win.",
                        YOUR_AVATAR: "Your avatar is",
                        PLAYER1: "the royal",
                        PLAYER2: "the knight",
                        PLAYER3: "the mummy",
                        PLAYER4: "the robot",
                        PLAYER5: "the witch",
                        PLAYER6: "the clown",
                        PLAYER7: "the mermaid",
                        PLAYER8: "the astroman"
                    }
                },
                y = {
                    en: m,
                    fr: m,
                    it: m,
                    de: m,
                    es: m,
                    "es-XL": m
                };
            u.p8.registerPlugin(g.W), u.p8.registerPlugin(C.t);
            const f = l().extend({
                props: {
                    sliceCount: Number
                },
                i18n: {
                    messages: y
                },
                data: () => ({
                    timeline: null
                }),
                computed: {
                    rotation() {
                        return this.sliceCount >= 8 || this.sliceCount % 2 == 0 ? -10 : 0
                    }
                },
                watch: {
                    sliceCount: function(t) {
                        this.$announce(this.$tc("ARIA.SLICE_COUNT", this.sliceCount)), t ? this.toOpen() : this.toClosed()
                    }
                },
                mounted() {
                    this.generateTimeline(), C.t.create("custom", "M0,0 C0.42,0.05 0.65,0.82 0.72,0.99 0.78,0.91 0.84,0.93 0.85,0.95 0.87,0.96 0.89,0.98 0.91,0.99 0.92,0.99 0.93,0.98 0.95,0.98 0.96,0.98 1,1 1,1")
                },
                methods: {
                    generateTimeline() {
                        const t = this.$refs.arch,
                            e = this.$refs.leftGate,
                            s = this.$refs.rightGate;
                        this.timeline = u.p8.timeline().to(t, {
                            translateY: "-25%",
                            duration: .3
                        }).to(e, {
                            duration: .15,
                            morphSVG: "497.3,126.1 499.8,125.8 501.8,145.8 498.8,146.2"
                        }, .2).set(e, {
                            opacity: 0
                        }, .35).to(s, {
                            duration: .15,
                            morphSVG: "501.8,145.8 503.9,145.9 501.8,125.9 499.8,125.8"
                        }, .2).set(s, {
                            opacity: 0
                        }, .35), this.sliceCount ? this.timeline.pause(0) : this.timeline.pause(.35)
                    },
                    toOpen() {
                        this.timeline.tweenTo(0, {
                            duration: .75,
                            ease: "custom"
                        })
                    },
                    toClosed() {
                        this.timeline.tweenTo(.35)
                    }
                }
            });
            var x = (0, p.Z)(f, v, [], !1, null, "0885f1e2", null);
            x.options.__file = "src/games/pp8/the-wheel/views/playfield/SlicesBox.vue";
            const _ = x.exports;
            const M = l().extend({
                components: {
                    CornerBox: d,
                    SlicesBox: _
                },
                props: {
                    info: Object,
                    status: Object,
                    playerState: Object,
                    sliceCount: Number
                },
                i18n: {
                    messages: y
                },
                data: () => ({
                    currentStatus: {
                        type: "none"
                    },
                    statusTimeout: null
                }),
                computed: {
                    classes: () => [],
                    name() {
                        return this.info && "audience" === this.info.name ? this.$t("AUDIENCE.NAME") : this.info.name
                    },
                    bannerText() {
                        return this.status.bannerText ? this.status.bannerText : this.status.bannerKey ? this.$t(this.status.bannerKey) : void 0
                    }
                },
                watch: {
                    "playerState.isWinner": function(t) {
                        t ? this.$emit("statusChange", {
                            type: "winner",
                            bannerText: this.$t("SPIN.ANSWER_BANNER")
                        }) : this.$emit("statusChange", {
                            type: "none"
                        })
                    },
                    "playerState.isInWinnerMode": function(t) {
                        t && this.$announce(this.$t("ARIA.YOU_CAN_WIN"))
                    },
                    status: function(t) {
                        return e = this, s = void 0, i = function*() {
                            this.statusTimeout && (window.clearTimeout(this.statusTimeout), this.statusTimeout = null), this.currentStatus = {
                                type: "none"
                            }, yield this.$nextTick(), this.currentStatus = t, (t.bannerText || t.bannerKey) && this.$announce(this.bannerText || ""), t.timeout && (this.statusTimeout = window.setTimeout((() => {
                                this.$emit("statusChange", {
                                    type: "none"
                                })
                            }), t.timeout))
                        }, new((n = void 0) || (n = Promise))((function(t, l) {
                            function a(t) {
                                try {
                                    o(i.next(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function c(t) {
                                try {
                                    o(i.throw(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function o(e) {
                                var s;
                                e.done ? t(e.value) : (s = e.value, s instanceof n ? s : new n((function(t) {
                                    t(s)
                                }))).then(a, c)
                            }
                            o((i = i.apply(e, s || [])).next())
                        }));
                        var e, s, n, i
                    }
                }
            });
            var b = (0, p.Z)(M, c, [], !1, null, "4ee1693e", null);
            b.options.__file = "src/games/pp8/the-wheel/views/playfield/Playfield.vue";
            const w = b.exports;
            var z = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "frozen-box"
                }, [n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(9076),
                        expression: "require(`../../images/wheel/face.inline.svg`)"
                    }],
                    staticClass: "face"
                }), t._v(" "), n("svg", {
                    staticClass: "text-box",
                    attrs: {
                        viewBox: "0 0 1000 1000"
                    }
                }, [n("path", {
                    staticClass: "text-path",
                    attrs: {
                        id: "wait-text-path",
                        d: "M301.78,500c0-109.47,88.75-198.22,198.22-198.22S698.22,390.53,698.22,500"
                    }
                }), t._v(" "), n("text", {
                    staticClass: "wait-text",
                    attrs: {
                        "text-anchor": "middle"
                    }
                }, [n("textPath", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "TRY_AGAIN",
                        expression: "'TRY_AGAIN'"
                    }],
                    attrs: {
                        href: "#wait-text-path",
                        startOffset: "50%"
                    }
                })])])])
            };
            z._withStripped = !0;
            const L = l().extend({
                props: {
                    player: Object
                },
                i18n: {
                    messages: y
                }
            });
            var S = (0, p.Z)(L, z, [], !1, null, "5bd3a8f0", null);
            S.options.__file = "src/games/pp8/the-wheel/views/shared/FrozenBox.vue";
            const E = S.exports;
            var A = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "choices scrollable trivia"
                }, [n("PromptBox", t._b({}, "PromptBox", t.promptProps, !1)), t._v(" "), t.hasSubmitted ? t._e() : [t._l(t.choiceMap, (function(e, s) {
                    return n("GemButton", {
                        key: s,
                        class: e.classes,
                        attrs: {
                            text: e.text,
                            disabled: e.isDisabled,
                            theme: "choice"
                        },
                        on: {
                            click: function(e) {
                                return t.onChoiceClick(s)
                            }
                        }
                    })
                })), t._v(" "), t.isSubmittable ? [n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(66261),
                        expression: "require('../images/divider-long.inline.svg')"
                    }],
                    staticClass: "divider"
                }), t._v(" "), n("GemButton", {
                    staticClass: "submit-button",
                    attrs: {
                        "text-key": "SUBMIT",
                        disabled: !t.canSubmit,
                        theme: "submit"
                    },
                    on: {
                        click: t.onSubmitClick
                    }
                })] : t._e()]], 2)
            };
            A._withStripped = !0;
            var B = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "gem-button",
                    class: [t.theme, {
                        disabled: t.disabled,
                        selected: t.selected
                    }]
                }, [s("svg", {
                    staticClass: "ui brown background",
                    attrs: {
                        viewBox: "0 0 1000 180",
                        preserveAspectRatio: "none"
                    }
                }, [s("path", {
                    staticClass: "field f d2",
                    attrs: {
                        d: "M970,0H30L0,30v120l30,30h940l30-30V30L970,0z"
                    }
                })]), t._v(" "), s("svg", {
                    staticClass: "inside",
                    attrs: {
                        viewBox: "0 0 1000 180",
                        preserveAspectRatio: "none"
                    }
                }, [s("radialGradient", {
                    staticClass: "gem-gradient",
                    attrs: {
                        id: "gem-gradient-" + t.uid,
                        cx: "600",
                        cy: "100",
                        r: "600",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [s("stop", {
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.25"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.66"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "1"
                    }
                })], 1), t._v(" "), s("polygon", {
                    staticClass: "base",
                    style: {
                        fill: "url(#gem-gradient-" + t.uid + ")"
                    },
                    attrs: {
                        points: "33,172 8,146 8,33.3 33,8 967,8 992,33 992,147 967,172"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "crystal",
                    attrs: {
                        d: "M475.7,31.4L467.5,8h-7.4L473,32C473.7,33,476,32.5,475.7,31.4z M447,40.3L415.2,8h-11.8C416.3,18.7,448.3,46.7,447,40.3z\n                M82.7,8H33L14.5,26.7L410.6,76C418.7,72.9,154.5,22.7,82.7,8z M408.7,95L8,108.4v31.4C50.3,134.3,415.7,99.4,408.7,95z\n                M582.4,64L783.1,8h-54.4C693.2,21.1,573.8,62.2,582.4,64z M417,115.2L212.7,172H268C300.2,159.9,425.7,117,417,115.2z\n                M564.1,46.8L627.4,8h-16.1C596.6,19.1,554,49.3,564.1,46.8z M538,34.9L558.8,8h-8.5l-14.9,26.1C535,35.2,537.1,35.8,538,\n                34.9z M507.4,29.5l4-21.5h-6.5l-0.4,21.4C504.6,30.5,507,30.6,507.4,29.5z M424.7,55.2L329.9,8h-30.4C332.4,21,426.2,60.9,\n                424.7,55.2z M978.9,19.9L967,8H844.6L503.8,88.3L695,8h-46.7L502.9,87.5L595.5,8h-23.7l-70.1,79l37.8-79H522l-21.8,78.8\n                L495.1,8h-16.6l20.4,78.9L449.3,8H429l68.5,79.3L387.3,8h-33.7l142.9,80l-233-80h-98.6l331,80.9L8,46.5V88l487.7,1.9l-475,\n                69.4L33,172h118.6l344.5-81.2L302.8,172H350l147-80.4L403.4,172h23.9l70.9-79.9L460,172h17.6l22-79.6l5.3,79.6h16.8\n                l-20.6-79.7l50.1,79.7h20.5l-69.2-80.2L613.9,172h34.1L503.5,91.1L739,172h99.6L504.1,90.2L992,132.6V91.1l-487.8-1.9\n                L978.9,19.9z M588,105c26.5,0.6,281,68.9,379,67l18.8-18.8C938.9,148.2,583.4,99.2,588,105z M435.3,132.3L370.3,172h16.4\n                C400.2,161.7,445.7,129.9,435.3,132.3z M574.7,124l96,48h30.7C670.9,160.1,573.1,118.2,574.7,124z M590.7,84.2L992,70.8\n                V39.2C958.5,44,583.5,79.7,590.7,84.2z M461.3,144.3L439.7,172h8.7l15.5-26.9C464.4,144,462.2,143.4,461.3,144.3z M492,\n                149.6l-4.3,22.4h6.7l0.5-22.2C494.7,148.7,492.4,148.6,492,149.6z M523.6,147.7l8.3,24.3h7.5l-13.1-24.8C525.7,146.2,523.4,\n                146.7,523.6,147.7z M552.3,138.8l32.4,33.2h11.9C584.6,162.1,551,132.3,552.3,138.8z"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o5",
                    attrs: {
                        points: "41,28 33,8 8,33.3 28,42"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o1",
                    attrs: {
                        points: "28,42 8,33.3 8,146 28,138"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o2",
                    attrs: {
                        points: "28,138 42,152 33,172 8,146"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o2",
                    attrs: {
                        points: "41,28 33,8 967,8 959,28"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o6",
                    attrs: {
                        points: "42,152 33,172 967,172 959,152"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o2",
                    attrs: {
                        points: "967,8 959,28 972,41 992,33"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o7",
                    attrs: {
                        points: "972,139 992,147 967,172 959,152"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o5",
                    attrs: {
                        points: "972,41 992,33 992,147 972,139"
                    }
                })], 1), t._v(" "), s("svg", {
                    staticClass: "ui brown foreground",
                    attrs: {
                        viewBox: "0 0 1000 180",
                        preserveAspectRatio: "none"
                    }
                }, [s("path", {
                    staticClass: "f nf s-m d1",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        d: "M970,0H30L0,30v120l30,30h940l30-30V30L970,0z"
                    }
                })]), t._v(" "), s("button", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.buttonText,
                        expression: "buttonText"
                    }],
                    attrs: {
                        disabled: t.disabled
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.$emit("click", e)
                        }
                    }
                })])
            };
            B._withStripped = !0;
            const N = l().extend({
                props: {
                    theme: String,
                    disabled: Boolean,
                    selected: Boolean,
                    textKey: String,
                    text: String
                },
                i18n: {
                    messages: y
                },
                data: () => ({
                    uid: `${Math.random()}`.slice(-6)
                }),
                computed: {
                    buttonText() {
                        return this.text ? this.text : this.textKey ? this.$t(this.textKey) : void 0
                    }
                }
            });
            var k = (0, p.Z)(N, B, [], !1, null, "546fca46", null);
            k.options.__file = "src/games/pp8/the-wheel/views/shared/GemButton.vue";
            const P = k.exports;
            var Z = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "prompt-box",
                    class: t.classes
                }, [t.titleText ? s("div", {
                    staticClass: "title"
                }, [s("svg", {
                    staticClass: "top",
                    attrs: {
                        viewBox: "0 0 1000 200",
                        width: "1000",
                        height: "200"
                    }
                }, [s("path", {
                    staticClass: "text-path",
                    attrs: {
                        id: "text-path",
                        d: "M45.1,261.7c81.8-51.4,256.2-87,458-87c196.8,0,367.5,33.8,451.7,83.1"
                    }
                }), t._v(" "), s("text", {
                    staticClass: "text f d1 ns shadow",
                    attrs: {
                        "text-anchor": "middle",
                        dy: "-4",
                        "aria-hidden": "true"
                    }
                }, [s("textPath", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.titleText,
                        expression: "titleText"
                    }],
                    attrs: {
                        href: "#text-path",
                        startOffset: "50%"
                    }
                })]), t._v(" "), s("text", {
                    staticClass: "text f ui brown d1 ns",
                    attrs: {
                        "text-anchor": "middle",
                        dy: "-4"
                    }
                }, [s("textPath", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.titleText,
                        expression: "titleText"
                    }],
                    attrs: {
                        href: "#text-path",
                        startOffset: "50%"
                    }
                })])])]) : t._e(), t._v(" "), t.prompt ? s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.prompt,
                        expression: "prompt"
                    }],
                    staticClass: "prompt"
                }) : t._e()])
            };
            Z._withStripped = !0;
            const T = l().extend({
                props: {
                    titleKey: String,
                    title: String,
                    prompt: String
                },
                i18n: {
                    messages: y
                },
                bb: {
                    small: (t, e) => `<tspan style="font-size: 40px;" dy="-5">${e}</tspan><tspan dy="5"> </tspan>`
                },
                computed: {
                    titleText() {
                        return this.title ? this.title : this.titleKey ? this.$t(this.titleKey) : void 0
                    },
                    classes() {
                        const t = [];
                        return this.titleText || t.push("no-title"), this.titleText && this.titleText.length >= 15 && t.push("long-title"), t
                    }
                }
            });
            var O = (0, p.Z)(T, Z, [], !1, null, "136efdac", null);
            O.options.__file = "src/games/pp8/the-wheel/views/shared/PromptBox.vue";
            const R = O.exports;
            var I = function(t, e, s, n) {
                return new(s || (s = Promise))((function(i, l) {
                    function a(t) {
                        try {
                            o(n.next(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function c(t) {
                        try {
                            o(n.throw(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function o(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(a, c)
                    }
                    o((n = n.apply(t, e || [])).next())
                }))
            };
            const $ = l().extend({
                components: {
                    GemButton: P,
                    PromptBox: R
                },
                i18n: {
                    messages: y
                },
                props: {
                    info: Object,
                    players: Object,
                    player: Object
                },
                data: () => ({
                    isSending: !1,
                    hasSubmitted: !1
                }),
                computed: {
                    promptProps() {
                        if (this.hasSubmitted) return {
                            prompt: this.$ts("AUDIENCE.THANKS")
                        };
                        if (this.isChoices(this.player) && "ChooseTriviaWinner" === this.player.category) return {
                            titleKey: "AUDIENCE.VOTE_NOW",
                            prompt: this.player.prompt
                        };
                        const t = this.player.prompt.replace("[name]", "").replace("\n", " ").split("[/name]");
                        return {
                            title: t[0],
                            prompt: t[1]
                        }
                    },
                    isSubmittable() {
                        return this.isChoosePlayers(this.player)
                    },
                    canSubmit() {
                        if (!this.isChoosePlayers(this.player)) return !this.isSending;
                        if (void 0 === this.player.numChoicesToMake) return !this.isSending;
                        const t = this.player.players.filter((({
                            isSelected: t
                        }) => t)).length;
                        return !this.isSending && t === this.player.numChoicesToMake
                    },
                    choiceMap() {
                        if (this.isChoosePlayers(this.player)) return this.player.players.map((t => {
                            const e = ["avatar", this.players[t.id].avatarId];
                            return t.isSelected && e.push("selected"), {
                                text: this.players[t.id].name,
                                classes: e,
                                isDisabled: !1
                            }
                        }));
                        const t = "ChooseTriviaWinner" === this.player.category;
                        return this.player.choices.map((e => {
                            var s;
                            const n = [];
                            if (e.isSelected && n.push("selected"), t) {
                                const t = this.players[`${e.id}`];
                                n.push(t.avatarId, "avatar")
                            }
                            return {
                                text: e.text,
                                classes: n,
                                isDisabled: null !== (s = e.isDisabled) && void 0 !== s && s
                            }
                        }))
                    }
                },
                methods: {
                    isChoosePlayers: t => "choosePlayers" === t.kind,
                    isChoices: t => "choices" === t.kind,
                    onChoiceClick(t) {
                        return I(this, void 0, void 0, (function*() {
                            if (!this.isSending) {
                                this.isSending = !0;
                                try {
                                    if ("player" === this.$ecast.role) {
                                        const [e, s] = this.isChoosePlayers(this.player) ? ["choose", "index"] : ["choice", "value"];
                                        try {
                                            yield this.$ecast.updateObject(this.player.responseKey, {
                                                action: e,
                                                [s]: t
                                            })
                                        } catch (t) {
                                            this.$handleEcastError(t)
                                        }
                                    } else if ("audience" === this.$ecast.role) {
                                        try {
                                            yield this.$ecast.incrementCountGroupCounter(this.player.responseKey, `${t}`)
                                        } catch (t) {
                                            this.$handleEcastError(t)
                                        }
                                        this.hasSubmitted = !0
                                    }
                                } catch (t) {
                                    console.error(t)
                                }
                                this.isSending = !1
                            }
                        }))
                    },
                    onSubmitClick() {
                        return I(this, void 0, void 0, (function*() {
                            if (!this.isSending) {
                                this.isSending = !0;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "submit"
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.isSending = !1
                            }
                        }))
                    }
                }
            });
            var D = (0, p.Z)($, A, [], !1, null, "48b5c973", null);
            D.options.__file = "src/games/pp8/the-wheel/views/Choices.vue";
            const G = D.exports;
            var U = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "choose-slices trivia"
                }, [s("PromptBox", {
                    attrs: {
                        title: t.text.title,
                        prompt: t.text.prompt
                    }
                }), t._v(" "), s("div", {
                    staticClass: "ui-container"
                }, [s("WheelBox", {
                    attrs: {
                        category: "choose",
                        "is-active": !0,
                        definitions: t.manager.definitions,
                        rotation: t.initialRotation
                    },
                    on: {
                        sliceClicked: t.onSliceClick
                    }
                }), t._v(" "), s("SubmitButton", {
                    attrs: {
                        disabled: !t.canSubmit
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.onSubmitClick.apply(null, arguments)
                        }
                    }
                })], 1)], 1)
            };
            U._withStripped = !0;
            var Y = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("button", {
                    staticClass: "submit-button"
                }, [s("svg", {
                    staticClass: "ui brown",
                    attrs: {
                        viewBox: "0 0 200 200"
                    }
                }, [s("radialGradient", {
                    staticClass: "submit-gradient",
                    attrs: {
                        id: "submit-gradient",
                        cx: "600",
                        cy: "100",
                        r: "600",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [s("stop", {
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.25"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.66"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "1"
                    }
                })], 1), t._v(" "), s("polygon", {
                    staticClass: "shadow",
                    attrs: {
                        points: "130.46 193.84 69.54 196 18.82 158.13 0 100.36 20.27 41.15 68.82 4 131.18 5.44 181.18 42.59 200 100.36 181.18 158.13\n                130.46 193.84"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d2 ns",
                    attrs: {
                        points: "130.46 193.84 69.54 196 18.82 158.13 0 100.36 20.27 41.15 68.82 4 131.18 5.44 181.18 42.59 200 100.36 181.18 158.13\n                130.46 193.84"
                    }
                }), t._v(" "), s("g", {
                    staticClass: "press ui yellow"
                }, [s("polygon", {
                    staticClass: "base",
                    attrs: {
                        points: "128.92 15.19 73.43 15.19 28.53 47.72 11.38 100.36 28.53 153 73.43 185.53 128.92 185.53 173.82 153 190.97 100.36\n                    173.82 47.72 128.92 15.19"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "crystal",
                    attrs: {
                        d: "M67.86,52.84,54.18,29.14,48,33.65,66.39,53.91A.92.92,0,0,0,67.86,52.84ZM45.4,85,19.45,75.59,17,83,45,86.8A.92.92,0,\n                    0,0,45.4,85ZM53.78,67l-24-20.15-1.24.9L26.3,54.57l26.47,13.9A.91.91,0,0,0,53.78,67Zm32.15-22.6L80.81,15.19H73.43\n                    L72.35,16l11.84,28.9A.92.92,0,0,0,85.93,44.37ZM141.52,59l22.27-18.59-6.47-4.68-17.11,22A.92.92,0,0,0,141.52,\n                    59ZM153,75.32l26.64-9.64L177.17,58,152.23,73.69A.92.92,0,0,0,153,75.32Zm5.22,19.22,30.84,0-2.6-8-28.43,6.14A.91.91,\n                    0,0,0,158.25,94.54Zm-52.43-52,4.88-27.38H103L104,42.45A.92.92,0,0,0,105.82,42.57Zm19.31,5.1,14.39-24.8L132.77,\n                    18l-9.3,29A.92.92,0,0,0,125.13,47.67ZM43.72,104.89l-30.88,0,2.61,8,28.46-6.15A.91.91,0,0,0,43.72,104.89Zm90.39,\n                    41.7,14.32,24.8,6.45-4.67-19.3-21.2A.92.92,0,0,0,134.11,146.59ZM49,124.11l-26.69,9.65,2.51,7.68,25-15.7A.92.92,0,0,\n                    0,49,124.11Zm107.62-9.72,26.67,9.71,2.46-7.57L157,112.63A.92.92,0,0,0,156.57,114.39Zm34.33-14.26-81.55-1.3,\n                    75.43-17.48L181.39,71,108.56,96.09l66.87-43.44-1.61-4.93-5.31-3.85L106.88,93.79,153,32.61l-8.83-6.4-39.63,66,\n                    23.49-77H116.5L101.74,91.51,97.62,15.19h-11L98.9,91.82l-31-72.61-9.07,6.57L96.33,93.07,43.58,36.81l-9.07,6.58\n                    L94.35,95.12,24.6,59.8,21.18,70.27l72,27.45L15.31,88.3l-3.57,11L93,100.56,17.17,118.14l3.4,10.42L93.79,103.3,26.57,\n                    147,28,151.25,30,154.09,33,156.22,95.47,105.6l-46.73,62,8.92,6.46,40.18-66.91L74.09,185.08l1.83.45h9.67l15-77.65,\n                    4.19,77.65H116l-12.5-78,31.46,73.62,9.16-6.64-38-68.23,53.49,57.05,9.17-6.65L108,104.27l70.13,35.51,\n                    3.42-10.52-72.39-27.59,78.3,9.47L191,100.42v-.1Zm-42.71,32.33L172.63,153,175,149.5l1.4-4.28L149.2,131A.91.91,0,0,0,\n                    148.19,132.46Zm-87.74,7.93L37.54,159.52l6.61,4.79,17.61-22.66A.92.92,0,0,0,60.45,140.39Zm16.4,11.37L62,177.28l6.9,\n                    5,9.57-29.78A.92.92,0,0,0,76.85,151.76Zm19.3,5.1-5.1,28.67h8L98,157A.92.92,0,0,0,96.15,156.86Zm19.89-1.8,5.35,\n                    30.47h3.29l5.19-1.49-12.08-29.48A.92.92,0,0,0,116,155.06Z"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o7",
                    attrs: {
                        points: "28.53 47.72 57.59 40.54 73.43 15.19 28.53 47.72"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o7",
                    attrs: {
                        points: "173.82 153 144.76 160.18 128.92 185.53 173.82 153"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o4",
                    attrs: {
                        points: "11.38 100.36 30.66 77.51 28.53 47.72 11.38 100.36"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o6",
                    attrs: {
                        points: "190.97 100.36 171.69 123.21 173.82 153 190.97 100.36"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o1",
                    attrs: {
                        points: "28.53 153 30.66 123.21 11.38 100.36 28.53 153"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o4",
                    attrs: {
                        points: "173.82 47.72 171.69 77.51 190.97 100.36 173.82 47.72"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o4",
                    attrs: {
                        points: "73.43 185.53 57.59 160.18 28.53 153 73.43 185.53"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o1",
                    attrs: {
                        points: "128.92 15.19 144.76 40.54 173.82 47.72 128.92 15.19"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o1",
                    attrs: {
                        points: "30.66 77.51 30.66 123.21 11.38 100.36 30.66 77.51"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o5",
                    attrs: {
                        points: "171.69 123.21 171.69 77.51 190.97 100.36 171.69 123.21"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o2",
                    attrs: {
                        points: "30.66 123.21 57.59 160.18 28.53 153 30.66 123.21"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o2",
                    attrs: {
                        points: "171.69 77.51 144.76 40.54 173.82 47.72 171.69 77.51"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o5",
                    attrs: {
                        points: "57.59 160.18 101.18 174.31 73.43 185.53 57.59 160.18"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o1",
                    attrs: {
                        points: "144.76 40.54 101.18 26.41 128.92 15.19 144.76 40.54"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o7",
                    attrs: {
                        points: "101.18 174.31 144.76 160.18 128.92 185.53 101.18 174.31"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o5",
                    attrs: {
                        points: "101.18 26.41 57.59 40.54 73.43 15.19 101.18 26.41"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o7",
                    attrs: {
                        points: "144.76 160.18 171.69 123.21 173.82 153 144.76 160.18"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o5",
                    attrs: {
                        points: "57.59 40.54 30.66 77.51 28.53 47.72 57.59 40.54"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o5",
                    attrs: {
                        points: "101.18 174.31 128.92 185.53 73.43 185.53 101.18 174.31"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o3",
                    attrs: {
                        points: "73.43 15.19 128.92 15.19 101.18 26.41 73.43 15.19"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "f text ui ns brown d1",
                    attrs: {
                        d: "M95.07,99.13l-2.29-.59L95,97.06,97,91.17c-1.19-2.17-1.79-3.26-3-5.41-5.91-2.29-10.84-.87-16.8.35l.1-.28\n                    c-3.08.15-4.62.24-7.7.46,4.54,7.19,3.08,16.27.86,24.13-1.31.75-2,1.11-3.28,\n                    1.81-1.07-.61-1.61-.91-2.68-1.5-1.44-8.09-2.36-16,1.27-23.62-4.23.51-6.35.8-10.57,1.42,1.09,2,1.64,3,2.73,5.08\n                    v11.74c1,3,1.44,4.47,2.41,7.56,2.51,1.09,3.77,1.66,6.29,2.79,2.18-.38,3.27-.6,5.45-1.07,1.43-4.43,2.14-6.69,\n                    3.57-11.31-.07-6.18-1.36-11.41,1.51-17.12,4.88,8.26,3.32,20.61.74,29.62,6.88-.49,12,1.4,18.68-1.72.59-3.55.88-5.33,\n                    1.47-8.88ZM87.2,88.23C88.71,89.73,89.47,90.5,91,92c-.55,1.23-.82,1.85-1.36,3.08L86.1,96.83\n                    c-.29-3.18-.43-4.76-.72-7.92Zm4.57,21c-1.31,1.19-2,1.79-3.27,3L86,110.82c.09-3.78.13-5.68.21-9.47l3.55-.45c1,2.15,\n                    1.46,3.22,2.43,5.39ZM44.28,96.12c-.62-.58-.93-.87-1.54-1.42.52-.86.78-1.3,1.31-2.2,1-.56,1.5-.85,2.51-1.44a65.38,\n                    65.38,0,0,1,6.14,3c0-2.51,0-3.77,0-6.28-6.41-.69-11.27,2.94-14.57,8.08.83,1.85,1.25,2.82,2.08,4.83,3.11.69,4.67,\n                    1.09,7.81,2,1,1.71,1.52,2.59,2.54,4.41l-.92,1.46c-1.29.52-1.93.77-3.22,1.22a86.15,86.15,0,0,0-7.12-6.45c0,2.48,0,\n                    3.72,0,6.2,2.51,1.36,4.46,2.87,7.3,3.6a64.86,64.86,0,0,0,6.94-2.91c.81-2.13,1.21-3.22,\n                    2-5.45-1.27-2.85-1.91-4.23-3.18-6.89C49.12,97,47.5,96.7,44.28,96.12Zm109.05-3.78,2-.06c2.72,2,4.07,2.85,6.78,\n                    4.48-.47-2.5-.7-3.78-1.17-6.38-7.79-1.28-11.74-1.77-19.56-2.47l0,0c-5.43-1-8.15-1.42-13.61-2.23l.16.33\n                    c-3.63-.32-5.47-.46-9.13-.68-2.12,7.26-3.17,11-5.29,\n                    18.51-1.81-7.42-2.72-11.19-4.54-18.75-3.48-.4-5.22-.57-8.71-.88,3.92,9.17.68,16.89.64,26.54-1.26,2.09-1.89,\n                    3.13-3.15,5.2,3.56.42,5.34.6,8.91.92-4.12-7.49-1.55-14.18-.9-22.23,2.15,9.12,3.23,13.66,5.38,22.61l2.37-2\n                    c2.28-8.89,3.42-13.29,5.69-21.88,1.06,8.17,3.59,14.57-.66,22.15,4-.3,5.94-.47,9.87-.87l-.38.81c5-.31,7.47-.52,\n                    12.43-1-4.74-6.35-3.23-13-3.68-20.51,1.79-2.41,2.71-3.61,4.44-5.75-.18,2.57-.28,3.93-.47,6.58,2.58-1.35,3.87-2,\n                    6.45-3.11l1,.27c-.08,7.79.92,14.06-3.06,21.15,4.59-.7,6.89-1.08,11.46-1.9C152.06,105.41,154.17,99.23,153.33,92.34Z\n                    m-24.91,22.17c-4.38-7.41-2.7-14.42-3.84-22.76,1.35-2.33,2-3.49,3.37-5.7A27.22,27.22,0,0,1,128.42,114.51Z"
                    }
                })]), t._v(" "), s("path", {
                    staticClass: "edge",
                    attrs: {
                        d: "M130.46,193.84,69.54,196,18.82,158.13,0,100.36,20.27,41.15,68.82,4l62.36,1.44,50,37.15L200,100.36l-18.82,57.77Z\n                m-59.81-3.39h58.7L176.85,156,195,100.36,176.85,44.68l-47.5-34.41H70.65L23.15,44.68,5,100.36,23.15,156Z"
                    }
                })], 1), t._v(" "), s("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "SUBMIT",
                        expression: "'SUBMIT'"
                    }],
                    staticClass: "sr"
                })])
            };
            Y._withStripped = !0;
            const W = l().extend({
                i18n: {
                    messages: y
                }
            });
            var K = (0, p.Z)(W, Y, [], !1, null, "3ad8c1d9", null);
            K.options.__file = "src/games/pp8/the-wheel/views/slices/SubmitButton.vue";
            const j = K.exports;
            var V = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", t._g({
                    directives: [{
                        name: "pointerBox",
                        rawName: "v-pointerBox"
                    }],
                    staticClass: "wheel-box"
                }, t.eventHandlers), [n("div", {
                    staticClass: "shadow-box",
                    style: t.shadowTiltStyles
                }, [n("div", {
                    style: t.rotateStyles
                }, [n("svg", {
                    staticClass: "graphics",
                    attrs: {
                        viewBox: "0 0 1000 1000"
                    }
                }, [n("polygon", {
                    staticClass: "shadow",
                    attrs: {
                        points: "804.9,931.7 990,721.6 1025.2,472.9 964.8,241.9 807.2,70.6 592.5,-19.8 352.7,-7.1 149.4,109.4 9.6,294.5\n                        -26.3,548.2 42,758.1 173.5,908.3 350.8,1010.1 595,1015.5"
                    }
                })])])]), t._v(" "), n("div", {
                    style: t.tiltStyles
                }, [n("div", {
                    style: t.rotateStyles
                }, [n("svg", {
                    staticClass: "graphics",
                    attrs: {
                        viewBox: "0 0 1000 1000",
                        role: "group"
                    }
                }, [n(t.backgroundComponent, {
                    tag: "component",
                    attrs: {
                        definitions: t.definitions,
                        "is-active": t.isActive,
                        "aria-hidden": "true"
                    }
                }), t._v(" "), n("transition-group", {
                    attrs: {
                        css: !1,
                        tag: "g"
                    },
                    on: {
                        enter: t.onEnter,
                        leave: t.onLeave
                    }
                }, [t._l(t.definitions, (function(e, s) {
                    return [t.sliceComponents[s] ? n(t.sliceComponents[s], {
                        key: "slice-" + s,
                        tag: "component",
                        class: [e.type].concat(e.classes || []),
                        attrs: {
                            transform: "rotate(" + e.rotation + " 500 500)",
                            definition: e,
                            "is-active": t.isActive && e.isActive,
                            "aria-hidden": "true"
                        }
                    }) : t._e()]
                }))], 2), t._v(" "), t._l(t.definitions, (function(e, s) {
                    return n("polygon", {
                        key: "active-" + s,
                        staticClass: "action",
                        class: {
                            selected: e.isSelected
                        },
                        attrs: {
                            transform: "rotate(" + e.rotation + " 500 500)",
                            tabindex: "0",
                            role: "button",
                            "aria-label": t.$t(e.labelKey, e.labelData),
                            "aria-pressed": e.isSelected,
                            points: "500,355.9 479.2,346.9 421.2,37.7 500,0 578.8,37.7 520.8,346.9"
                        },
                        on: {
                            pointerboxchildup: function(e) {
                                return t.onSliceClick(s)
                            },
                            keyup: [function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onSliceClick(s)
                            }, function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"]) ? null : t.onSliceClick(s)
                            }, function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "delete", [8, 46], e.key, ["Backspace", "Delete", "Del"]) ? null : t.onDeletePressed.apply(null, arguments)
                            }]
                        }
                    })
                }))], 2)])]), t._v(" "), t.egg ? n("div", {
                    staticClass: "egg",
                    class: t.egg,
                    style: t.rotateStyles
                }) : t._e(), t._v(" "), t.shouldShowFace && !t.egg ? n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(9076),
                        expression: "require(`../../images/wheel/face.inline.svg`)"
                    }],
                    staticClass: "face"
                }) : t._e()])
            };
            V._withStripped = !0;
            var H = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("g", [s("polygon", {
                    staticClass: "panel s-s",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "804.9,931.7 990,721.6 1025.2,472.9 964.8,241.9 807.2,70.6 592.5,-19.8 352.7,-7.1 149.4,109.4 9.6,294.5 -26.3,548.2\n            42,758.1 173.5,908.3 350.8,1010.1 595,1015.5"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "stars s-xs",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        d: "M255.7,63.5l-4.2,5.9l-7.2,0.7l4.3,5.8l-1.5,7l6.8-2.3l6.2,3.6l0-7.2l5.4-4.8l-6.9-2.2L255.7,63.5z\n            M132.5,808.2l-7.1,1.3l-5.6-4.5l-1,7.1l-6,4l6.5,3.1l1.9,6.9l5-5.2l7.2,0.3l-3.4-6.3L132.5,808.2z\n            M133.4,178.3l-7.2,0.3l-5-5.2l-1.9,6.9l-6.5,3.1l6,4l1,7.1l5.6-4.5l7.1,1.3l-2.5-6.8L133.4,178.3z\n            M260.1,915.3l-6.2,3.6l-6.8-2.3l1.5,7l-4.3,5.8l7.2,0.7l4.2,5.9l2.9-6.6l6.9-2.2l-5.4-4.8L260.1,915.3z\n            M987.5,510.4l5.3-4.9l7.2,0.8l-3-6.6l3-6.6l-7.2,0.8l-5.3-4.9l-1.5,7.1l-6.3,3.6l6.3,3.6L987.5,510.4z\n            M12.5,489.2L7.2,494L0,493.2l3,6.6l-3,6.6l7.2-0.8l5.3,4.9l1.5-7.1l6.3-3.6l-6.3-3.6L12.5,489.2z\n            M419.7,6.2l-5.9,4.1l-7-1.8l2,6.9l-3.9,6.1l7.2,0.2l4.6,5.5l2.4-6.8l6.7-2.7l-5.7-4.4L419.7,6.2z\n            M42.1,662.7l-3.8-6.1l-3.3,6.4l-7,1.7l5,5.1l-0.6,7.2l6.5-3.2l6.7,2.7l-1.1-7.1l4.7-5.5L42.1,662.7z\n            M45.5,323.1l-6.7,2.7l-6.5-3.2l0.6,7.2l-5,5.1l7,1.7l3.3,6.4l3.8-6.1l7.1-1.2l-4.7-5.5L45.5,323.1z\n            M880.3,805l-5.6,4.5l-7.1-1.3l2.5,6.8l-3.4,6.3l7.2-0.3l5,5.2l1.9-6.9l6.5-3.1l-6-4L880.3,805z\n            M753,916.7l-6.8,2.3l-6.2-3.6l0,7.2l-5.4,4.8l6.9,2.2l2.9,6.6l4.2-5.9l7.2-0.7l-4.3-5.8L753,916.7z\n            M965.1,662.9l-3.3-6.4l-3.8,6.1l-7.1,1.2l4.7,5.5l-1.1,7.1l6.7-2.7l6.5,3.2l-0.6-7.2l5-5.1L965.1,662.9z\n            M878.8,173.4l-5,5.2l-7.2-0.3l3.4,6.3l-2.5,6.8l7.1-1.3l5.6,4.5l1-7.1l6-4l-6.5-3.1L878.8,173.4z\n            M967.6,322.6l-6.5,3.2l-6.7-2.7l1.1,7.1l-4.7,5.5l7.1,1.2l3.8,6.1l3.3-6.4l7-1.7l-5-5.1L967.6,322.6z\n            M595.1,978l-7.2-0.2l-4.6-5.5l-2.4,6.8l-6.7,2.7l5.7,4.4l0.5,7.2l5.9-4.1l7,1.8l-2-6.9L595.1,978z\n            M593.3,8.5l-7,1.8l-5.9-4.1l-0.5,7.2l-5.7,4.4l6.7,2.7l2.4,6.8l4.6-5.5l7.2-0.2l-3.9-6.1L593.3,8.5z\n            M419.1,979.1l-2.4-6.8l-4.6,5.5l-7.2,0.2l3.9,6.1l-2,6.9l7-1.8l5.9,4.1l0.5-7.2l5.7-4.4L419.1,979.1z\n            M744.3,63.5l-2.9,6.6l-6.9,2.2L740,77l0,7.2l6.2-3.6l6.8,2.3l-1.5-7l4.3-5.8l-7.2-0.7L744.3,63.5z"
                    }
                })])
            };
            H._withStripped = !0;
            const F = l().extend({
                props: {
                    isActive: Boolean,
                    definitions: Array
                }
            });
            var q = (0, p.Z)(F, H, [], !1, null, "33715074", null);
            q.options.__file = "src/games/pp8/the-wheel/views/wheel/backgrounds/Main.vue";
            const X = q.exports;
            var Q = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("g", [s("polygon", {
                    staticClass: "panel s-s",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "804.9,931.7 990,721.6 1025.2,472.9 964.8,241.9 807.2,70.6 592.5,-19.8 352.7,-7.1 149.4,109.4 9.6,294.5 -26.3,548.2\n            42,758.1 173.5,908.3 350.8,1010.1 595,1015.5"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "stars s-xs",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        d: "M255.7,63.5l-4.2,5.9l-7.2,0.7l4.3,5.8l-1.5,7l6.8-2.3l6.2,3.6l0-7.2l5.4-4.8l-6.9-2.2L255.7,63.5z\n            M132.5,808.2l-7.1,1.3l-5.6-4.5l-1,7.1l-6,4l6.5,3.1l1.9,6.9l5-5.2l7.2,0.3l-3.4-6.3L132.5,808.2z\n            M133.4,178.3l-7.2,0.3l-5-5.2l-1.9,6.9l-6.5,3.1l6,4l1,7.1l5.6-4.5l7.1,1.3l-2.5-6.8L133.4,178.3z\n            M260.1,915.3l-6.2,3.6l-6.8-2.3l1.5,7l-4.3,5.8l7.2,0.7l4.2,5.9l2.9-6.6l6.9-2.2l-5.4-4.8L260.1,915.3z\n            M987.5,510.4l5.3-4.9l7.2,0.8l-3-6.6l3-6.6l-7.2,0.8l-5.3-4.9l-1.5,7.1l-6.3,3.6l6.3,3.6L987.5,510.4z\n            M12.5,489.2L7.2,494L0,493.2l3,6.6l-3,6.6l7.2-0.8l5.3,4.9l1.5-7.1l6.3-3.6l-6.3-3.6L12.5,489.2z\n            M419.7,6.2l-5.9,4.1l-7-1.8l2,6.9l-3.9,6.1l7.2,0.2l4.6,5.5l2.4-6.8l6.7-2.7l-5.7-4.4L419.7,6.2z\n            M42.1,662.7l-3.8-6.1l-3.3,6.4l-7,1.7l5,5.1l-0.6,7.2l6.5-3.2l6.7,2.7l-1.1-7.1l4.7-5.5L42.1,662.7z\n            M45.5,323.1l-6.7,2.7l-6.5-3.2l0.6,7.2l-5,5.1l7,1.7l3.3,6.4l3.8-6.1l7.1-1.2l-4.7-5.5L45.5,323.1z\n            M880.3,805l-5.6,4.5l-7.1-1.3l2.5,6.8l-3.4,6.3l7.2-0.3l5,5.2l1.9-6.9l6.5-3.1l-6-4L880.3,805z\n            M753,916.7l-6.8,2.3l-6.2-3.6l0,7.2l-5.4,4.8l6.9,2.2l2.9,6.6l4.2-5.9l7.2-0.7l-4.3-5.8L753,916.7z\n            M965.1,662.9l-3.3-6.4l-3.8,6.1l-7.1,1.2l4.7,5.5l-1.1,7.1l6.7-2.7l6.5,3.2l-0.6-7.2l5-5.1L965.1,662.9z\n            M878.8,173.4l-5,5.2l-7.2-0.3l3.4,6.3l-2.5,6.8l7.1-1.3l5.6,4.5l1-7.1l6-4l-6.5-3.1L878.8,173.4z\n            M967.6,322.6l-6.5,3.2l-6.7-2.7l1.1,7.1l-4.7,5.5l7.1,1.2l3.8,6.1l3.3-6.4l7-1.7l-5-5.1L967.6,322.6z\n            M595.1,978l-7.2-0.2l-4.6-5.5l-2.4,6.8l-6.7,2.7l5.7,4.4l0.5,7.2l5.9-4.1l7,1.8l-2-6.9L595.1,978z\n            M593.3,8.5l-7,1.8l-5.9-4.1l-0.5,7.2l-5.7,4.4l6.7,2.7l2.4,6.8l4.6-5.5l7.2-0.2l-3.9-6.1L593.3,8.5z\n            M419.1,979.1l-2.4-6.8l-4.6,5.5l-7.2,0.2l3.9,6.1l-2,6.9l7-1.8l5.9,4.1l0.5-7.2l5.7-4.4L419.1,979.1z\n            M744.3,63.5l-2.9,6.6l-6.9,2.2L740,77l0,7.2l6.2-3.6l6.8,2.3l-1.5-7l4.3-5.8l-7.2-0.7L744.3,63.5z"
                    }
                }), t._v(" "), t._l(t.definitions, (function(e, n) {
                    return s("g", {
                        key: "empty-" + n,
                        staticClass: "empty",
                        attrs: {
                            transform: "rotate(" + e.rotation + " 500 500)"
                        }
                    }, [s("polygon", {
                        staticClass: "slot",
                        attrs: {
                            points: "500,355.9 479.2,346.9 421.2,37.7 500,0 578.8,37.7 520.8,346.9"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "inner",
                        attrs: {
                            points: "488.01 339.81 432.41 43.43 500 11.09 567.59 43.43 511.99 339.81 500 345 488.01 339.81"
                        }
                    }), t._v(" "), t.isEmpty(e) ? s("g", {
                        staticClass: "graphic"
                    }, ["audience" === e.icon ? s("path", {
                        attrs: {
                            d: "M496.76,64.28l6.75-1.69,12.39,2.53,3.1,4.51L522.38,73l.84-4.23L517,58.93l-17.46-1.41-7,4.51-3.09,7.6,2.25,1.13Z\n                    m5.91,154.58h-4.79L492,216.32l-2.82-6.19-2.25,2.25,4.51,9.29,10.7,3.1,12.38-7.6L512,213.51ZM528,99.19l-6.48-2.81,\n                    1.13-11.26-4.22-7.33-7-5.34L500.13,73l-3.94,2-3.66,11.54-9-3.09-4.5,1.4-7.6,9L473.67,106l2.53-.56,1.13-10.14,\n                    7.6-5.63,8.17,3.66,3.37-1.13,2.54-7.6,6.19-3.38L510,79.48l5.35,8.45-1.13,7.6L517,99.76l12.1,3.38,6.2-2.54Zm-11.83,\n                    31.26,5.63-13-4.22-12.1-10.7-2.54-11,5.07-2.25,2,.84,7.32-3.38,1.13-2.81-4.51-4.79,1.41-2,5.35.85,8.17-10.14,\n                    4.5v4.23l-1.69,4.22,4.22,10.13,3.38-.28,5.35,1.69.57,2.54L480.14,162,488,172.4l7.88-3.94,5.35,11.26,7.32,1.41,\n                    9-5.35.56-7.6-1.4-5.92,7.88-3.38,4.22-13.79-7-14.64Zm-6.19,56,.28,9.29-6.48,3.38-6.19-2-5.35-8.45-6.19,\n                    1.41-5.63-.85-2.82-4.22.56-7.6-4.78,4.78-.85,5.92,5.91,6.75,3.66,2.82,8.45-3.66,3.94,10.7L505.2,207l9.86-6.48,\n                    1.12-5.91-.56-6.76,2.53-6.19Z"
                        }
                    }) : "bonus" === e.icon ? s("path", {
                        attrs: {
                            d: "M499.29,83.71l4.22-27.6-9.29-9.29.56,34.92Zm33.79-7.32-.57-11.27L513.09,91.87l5.63.28Zm-56.32-.28-6.75-9-5.63,2.81,\n                    12.95,21.68Zm25.91,123L510,220l2-10.13L503.51,191ZM498.73,94.41,476.48,147.9l18.87,8.73-.85,25.62,\n                    25.34-52.09-20.55-4.78ZM482.11,217.17l3.95-6.76.56-24.5-4.51,18Zm10.7-12.39-.56,31.53,5.07,2.26L497,195.21Z"
                        }
                    }) : "neighbor" === e.icon ? s("path", {
                        attrs: {
                            d: "M515.84,81l-1.5,7.88,7.13-2.62,10.14,6-.38-10.88,7.13-7.51-9.76-1.13-4.5-9-4.39,7.88-9.88,2.26ZM495.57,51l5.25-1.13\n                    L506.08,54V47.23l6.75-4.13-5.63-2.25-1.12-6.38L501.2,39h-6.76l2.63,5.26Zm-3.76,56.31-9.76-38.67-6.38,1.5Zm28.91,\n                    6.76-3,13.51-11.63-4.13-1.88,14.27,10.89,1.5v15L540.62,140Zm-8.64-21.78h-5.63l-4.88,12,4.51-.76Zm-7.5,57.82,9.76,\n                    52.55,5.63-1.5L508.33,151.6Zm-7.51,84.09-4.63-9.76-4,9.38-9,.63,6.26,9.13-1.25,9.14,8.88-3.51,9,4.13-.75-10.51,\n                    6.38-7.88Zm22.9-24.4-4.88,3-5.26-1.5,1.5,4.5-2.5,6.26,5.88-1,3,4.88,1.51-5.63,4.88-1.13L520,215.42Zm-40.55-23.65,\n                    4.88,7.13,3.38-8.64,8.26-.75-6.38-5.25.37-9.76-6.75,5L475.29,171l2.13,7.89-4.75,6.5Zm8.26-47.31\n                    h10.51l-1.87-16.51-11.64,5.25-2.63-16.14-20.27,25.9,26.28,15.77ZM495.94,161l3-10.51-10.51,13.89ZM467.41,59.25l2.25,\n                    4.5,1.88-5.25,5.25-.76-4.5-3.37.38-5.26-3.76,2.63-6-1.88,2.26,4.88-2.88,3.63Z"
                        }
                    }) : t._e()]) : t._e(), t._v(" "), e.multiplier ? s("text", {
                        staticClass: "multiplier-text",
                        attrs: {
                            x: "500",
                            y: "150",
                            "text-anchor": "middle"
                        }
                    }, [t._v("\n            " + t._s(e.multiplier)), s("tspan", [t._v("x")])]) : t._e(), t._v(" "), t.isActive && e.isActive ? s("polygon", {
                        staticClass: "ants s-xs",
                        attrs: {
                            "vector-effect": "non-scaling-stroke",
                            points: "481.2 309.8 440.2 47.4 500 18.8 559.7 47.4 518.7 309.8 500 304.3 481.2 309.8"
                        }
                    }) : t._e()])
                }))], 2)
            };
            Q._withStripped = !0;
            const J = l().extend({
                props: {
                    isActive: Boolean,
                    definitions: Array
                },
                methods: {
                    isEmpty: t => "empty" === t.type
                }
            });
            var tt = (0, p.Z)(J, Q, [], !1, null, "5f0d0aca", null);
            tt.options.__file = "src/games/pp8/the-wheel/views/wheel/backgrounds/Place.vue";
            const et = tt.exports;
            var st = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("g", [s("polygon", {
                    staticClass: "panel s-s",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "804.9,931.7 990,721.6 1025.2,472.9 964.8,241.9 807.2,70.6 592.5,-19.8 352.7,-7.1 149.4,109.4 9.6,294.5 -26.3,548.2\n            42,758.1 173.5,908.3 350.8,1010.1 595,1015.5"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "burst-0",
                    attrs: {
                        points: "137.46 137.46 270.16 101.9 367.3 4.76 500 40.32 632.7 4.76 729.84 101.9 862.54 137.46 898.1 270.16 995.24 367.3 959.68\n            500 995.24 632.7 898.1 729.84 862.54 862.54 729.84 898.1 632.7 995.24 500 959.68 367.3 995.24 270.16 898.1 137.46 862.54\n            101.9 729.84 4.76 632.7 40.32 500 4.76 367.3 101.9 270.16 137.46 137.46"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "burst-1",
                    attrs: {
                        points: "499.46 590.56 390.72 905.61 454.09 578.43 202.59 796.75 420.87 545.21 93.75 608.63 408.72 499.85 93.75 391.29 420.89\n            454.49 202.26 202.64 454.09 421.33 390.77 94.44 499.46 409.13 608.16 94.44 544.84 421.33 796.67 202.64 578.04 454.49 905.18\n            391.29 590.21 499.85 905.18 608.63 578.06 545.21 796.33 796.75 544.84 578.43 608.21 905.61 499.46 590.56"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "burst-2",
                    attrs: {
                        points: "417.2 191.2 499.4 446.2 581.6 191.2 525.2 453.2 723.9 273.3 544.1 472 806.1 415.7 551 497.8 806.1 580 544.1 523.6 723.9\n            722.3 525.2 542.5 581.6 804.5 499.4 549.4 417.2 804.5 473.6 542.5 274.9 722.3 454.7 523.6 192.7 580 447.8 497.8 192.7 415.7\n            454.7 472 274.9 273.3 473.6 453.2 417.2 191.2"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "burst-3",
                    attrs: {
                        points: "499.43 516.25 466.25 621.7 490.24 513.78 408.79 588.52 483.52 507.06 375.61 531.05 481.06 497.88 375.61 464.7 483.52\n            488.69 408.79 407.23 490.25 481.96 466.25 374.06 499.43 479.5 532.61 374.05 508.62 481.96 590.08 407.23 515.34 488.69\n            623.25 464.7 517.8 497.88 623.25 531.05 515.34 507.06 590.07 588.52 508.62 513.78 532.61 621.69 499.43 516.25"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "stars s-xs",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        d: "M373.45,27.72a8.94,8.94,0,1,0,11,6.32A8.93,8.93,0,0,0,373.45,27.72ZM621.92,955a8.94,8.94,0,1,0,11,6.33A9,9,0,0,0,621.92,\n            955ZM154.26,154.26a8.94,8.94,0,1,0,12.65,0A9,9,0,0,0,154.26,154.26ZM833.09,833.09a8.94,8.94,0,1,0,12.65,0A8.93,8.93,0,0,0,\n            833.09,833.09Zm-794.42-466A8.94,8.94,0,1,0,45,378.08,8.93,8.93,0,0,0,38.67,367.13ZM966,615.59a8.94,8.94,0,1,0,6.32,11A9,9,\n            0,0,0,966,615.59ZM34,615.59a8.94,8.94,0,1,0,11,6.33A8.95,8.95,0,0,0,34,615.59ZM966,384.41a8.94,8.94,0,1,0-11-6.33A8.95,\n            8.95,0,0,0,966,384.41ZM154.26,833.09a8.94,8.94,0,1,0,12.65,0A9,9,0,0,0,154.26,833.09ZM833.09,154.26a8.94,8.94,0,1,0,12.65,\n            0A8.93,8.93,0,0,0,833.09,154.26ZM378.08,955a8.94,8.94,0,1,0,6.33,11A9,9,0,0,0,378.08,955ZM626.55,27.72a8.94,8.94,0,1,0,\n            6.32,11A8.95,8.95,0,0,0,626.55,27.72Z"
                    }
                })])
            };
            st._withStripped = !0;
            const nt = l().extend({
                props: {
                    isActive: Boolean,
                    definitions: Array
                }
            });
            var it = (0, p.Z)(nt, st, [], !1, null, "638ddd39", null);
            it.options.__file = "src/games/pp8/the-wheel/views/wheel/backgrounds/Rainbow.vue";
            const lt = it.exports;
            var at = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("g", [s("polygon", {
                    staticClass: "panel s-s",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "804.9,931.7 990,721.6 1025.2,472.9 964.8,241.9 807.2,70.6 592.5,-19.8 352.7,-7.1 149.4,109.4 9.6,294.5 -26.3,548.2\n            42,758.1 173.5,908.3 350.8,1010.1 595,1015.5"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "burst-0",
                    attrs: {
                        points: "417.2 191.2 499.4 446.2 581.6 191.2 525.2 453.2 723.9 273.3 544.1 472 806.1 415.7 551 497.8 806.1 580 544.1 523.6 723.9\n            722.3 525.2 542.5 581.6 804.5 499.4 549.4 417.2 804.5 473.6 542.5 274.9 722.3 454.7 523.6 192.7 580 447.8 497.8 192.7 415.7\n            454.7 472 274.9 273.3 473.6 453.2 417.2 191.2"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "burst-1",
                    attrs: {
                        points: "499.43 516.25 466.25 621.7 490.24 513.78 408.79 588.52 483.52 507.06 375.61 531.05 481.06 497.88 375.61 464.7 483.52\n            488.69 408.79 407.23 490.25 481.96 466.25 374.06 499.43 479.5 532.61 374.05 508.62 481.96 590.08 407.23 515.34 488.69\n            623.25 464.7 517.8 497.88 623.25 531.05 515.34 507.06 590.07 588.52 508.62 513.78 532.61 621.69 499.43 516.25"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "stars s-xs",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        d: "M373.45,27.72a8.94,8.94,0,1,0,11,6.32A8.93,8.93,0,0,0,373.45,27.72ZM621.92,955a8.94,8.94,0,1,0,11,6.33A9,9,0,0,0,621.92,\n            955ZM154.26,154.26a8.94,8.94,0,1,0,12.65,0A9,9,0,0,0,154.26,154.26ZM833.09,833.09a8.94,8.94,0,1,0,12.65,0A8.93,8.93,0,0,0,\n            833.09,833.09Zm-794.42-466A8.94,8.94,0,1,0,45,378.08,8.93,8.93,0,0,0,38.67,367.13ZM966,615.59a8.94,8.94,0,1,0,6.32,11A9,9,\n            0,0,0,966,615.59ZM34,615.59a8.94,8.94,0,1,0,11,6.33A8.95,8.95,0,0,0,34,615.59ZM966,384.41a8.94,8.94,0,1,0-11-6.33A8.95,\n            8.95,0,0,0,966,384.41ZM154.26,833.09a8.94,8.94,0,1,0,12.65,0A9,9,0,0,0,154.26,833.09ZM833.09,154.26a8.94,8.94,0,1,0,12.65,\n            0A8.93,8.93,0,0,0,833.09,154.26ZM378.08,955a8.94,8.94,0,1,0,6.33,11A9,9,0,0,0,378.08,955ZM626.55,27.72a8.94,8.94,0,1,0,\n            6.32,11A8.95,8.95,0,0,0,626.55,27.72Z"
                    }
                })])
            };
            at._withStripped = !0;
            const ct = l().extend({
                props: {
                    isActive: Boolean,
                    definitions: Array
                }
            });
            var ot = (0, p.Z)(ct, at, [], !1, null, "2e7f39df", null);
            ot.options.__file = "src/games/pp8/the-wheel/views/wheel/backgrounds/Win.vue";
            const rt = ot.exports;
            var pt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("g", {
                    staticClass: "slice"
                }, [s("polygon", {
                    staticClass: "base",
                    attrs: {
                        points: "500,355.9 479.2,346.9 421.2,37.7 500,0 578.8,37.7 520.8,346.9"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "panel s-xs",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "475.2,270.9 440.3,47.4 500,18.8 559.7,47.4 524.8,270.9 500,283.4"
                    }
                }), t._v(" "), "answer" === t.definition.type ? s("g", {
                    staticClass: "graphic"
                }, [s("path", {
                    attrs: {
                        d: "M495.8,175.4l-1.1,11.7l6.9,7.5l11.8,0.4l5.1-12.2l-9.5-13L495.8,175.4z\n                M523.5,85.1l-24.7,0.5l-22.6,5.6l-9.5,14.2l15.6,16.1l4.4-11.8l14-4l7.1,2.7l0.9,5.9l-14.7,\n                12l-4.3,19.4l2.7,10.4l14.3,8.2l11.3-15.3l-11-2.8l5.6-7.9l18.6-15.9l2.3-19.5L523.5,85.1z"
                    }
                })]) : t._e(), t._v(" "), "audience" === t.definition.type ? s("g", {
                    staticClass: "graphic"
                }, [s("path", {
                    attrs: {
                        d: "M496.76,64.28l6.75-1.69,12.39,2.53,3.1,4.51L522.38,73l.84-4.23L517,58.93l-17.46-1.41-7,4.51-3.09,7.6,2.25,1.13Z\n                m5.91,154.58h-4.79L492,216.32l-2.82-6.19-2.25,2.25,4.51,9.29,10.7,3.1,12.38-7.6L512,213.51ZM528,99.19l-6.48-2.81,\n                1.13-11.26-4.22-7.33-7-5.34L500.13,73l-3.94,2-3.66,11.54-9-3.09-4.5,1.4-7.6,9L473.67,106l2.53-.56,1.13-10.14,\n                7.6-5.63,8.17,3.66,3.37-1.13,2.54-7.6,6.19-3.38L510,79.48l5.35,8.45-1.13,7.6L517,99.76l12.1,3.38,6.2-2.54Zm-11.83,\n                31.26,5.63-13-4.22-12.1-10.7-2.54-11,5.07-2.25,2,.84,7.32-3.38,1.13-2.81-4.51-4.79,1.41-2,5.35.85,8.17-10.14,\n                4.5v4.23l-1.69,4.22,4.22,10.13,3.38-.28,5.35,1.69.57,2.54L480.14,162,488,172.4l7.88-3.94,5.35,11.26,7.32,1.41,\n                9-5.35.56-7.6-1.4-5.92,7.88-3.38,4.22-13.79-7-14.64Zm-6.19,56,.28,9.29-6.48,3.38-6.19-2-5.35-8.45-6.19,\n                1.41-5.63-.85-2.82-4.22.56-7.6-4.78,4.78-.85,5.92,5.91,6.75,3.66,2.82,8.45-3.66,3.94,10.7L505.2,207l9.86-6.48,\n                1.12-5.91-.56-6.76,2.53-6.19Z"
                    }
                })]) : t._e(), t._v(" "), "bad" === t.definition.type ? s("g", {
                    staticClass: "graphic"
                }, [s("path", {
                    attrs: {
                        d: "M517.6,52.2l-5.1-2.5l-9,54.1L522.7,51L517.6,52.2z M488.3,106.2l1.4-3.9l-10.4-56.6l-3.7,6.5l-4.8,\n                1.1l14.6,52.4L488.3,106.2z M478.5,231.8l3.9,2.8l4.8,11l4.5-73.5l-3.9,0.8L478.5,231.8z M519,\n                145.1l11.3-7l-0.3-9l-5.3-2.3l4.8-5.6l-0.8-3.1l-13.2,6.5l-3.4-11.3l-12.7-5.3l-25.6,5.9l-6.5,24.5\n                l12.1,23.7l28.2,6.5l6.5-16.6l16,7l-0.6-9L519,145.1z M504.6,117.8l3.9,14.1l-11-0.6l-0.6-5.1\n                L504.6,117.8z M500.4,159.4l-5.6-11.3v-7l10.7,3.7L500.4,159.4z M513.9,142.8l-11.5-4.8l12.7-4.2\n                L513.9,142.8z M507.5,176.9l4.2,67.6l5.1-5.1l5.6,0.6L512,172.1L507.5,176.9z"
                    }
                })]) : t._e(), t._v(" "), "neighbor" === t.definition.type ? s("g", {
                    staticClass: "graphic"
                }, [s("path", {
                    attrs: {
                        d: "M515.84,81l-1.5,7.88,7.13-2.62,10.14,6-.38-10.88,7.13-7.51-9.76-1.13-4.5-9-4.39,7.88-9.88,2.26ZM495.57,51l5.25-1.13\n                L506.08,54V47.23l6.75-4.13-5.63-2.25-1.12-6.38L501.2,39h-6.76l2.63,5.26Zm-3.76,56.31-9.76-38.67-6.38,1.5Zm28.91,\n                6.76-3,13.51-11.63-4.13-1.88,14.27,10.89,1.5v15L540.62,140Zm-8.64-21.78h-5.63l-4.88,12,4.51-.76Zm-7.5,57.82,9.76,\n                52.55,5.63-1.5L508.33,151.6Zm-7.51,84.09-4.63-9.76-4,9.38-9,.63,6.26,9.13-1.25,9.14,8.88-3.51,9,4.13-.75-10.51,\n                6.38-7.88Zm22.9-24.4-4.88,3-5.26-1.5,1.5,4.5-2.5,6.26,5.88-1,3,4.88,1.51-5.63,4.88-1.13L520,215.42Zm-40.55-23.65,\n                4.88,7.13,3.38-8.64,8.26-.75-6.38-5.25.37-9.76-6.75,5L475.29,171l2.13,7.89-4.75,6.5Zm8.26-47.31\n                h10.51l-1.87-16.51-11.64,5.25-2.63-16.14-20.27,25.9,26.28,15.77ZM495.94,161l3-10.51-10.51,13.89ZM467.41,59.25l2.25,\n                4.5,1.88-5.25,5.25-.76-4.5-3.37.38-5.26-3.76,2.63-6-1.88,2.26,4.88-2.88,3.63Z"
                    }
                })]) : t._e(), t._v(" "), t.isPoints(t.definition) ? s("g", {
                    staticClass: "graphic"
                }, [s("path", {
                    attrs: {
                        d: "M475.92,84.83,488,89.9l-1.69-13.79,7-9.3-11.27-2-6.19-9.29-6.76,11L457.9,69.91l7.6,9L464.66,91Zm25.62-20.27,\n                8.73-5.35,7.88.28-3.94-9.29L517,41.47h-9.58l-6.75-4.78-2,8.44-7.61,4.79,7.61,5.63ZM498.16,209l.85-9.85-9.29,3.94\n                L479,200.27l1.12,11.55-6.47,7.32,10.42,3.38,5.63,9.57,5.06-11,11.55-2.82ZM539,64.28l1.13-6.48-6.76,\n                2.82-6.76-2.25.56,6.47L521.81,71l6.76,1.41,3.94,5.63,4.51-6.2,5.63-.84ZM514.78,241.1l-4.23-5.91L508,240.25l-6.48,\n                2.54,4.23,6.19-1.13,7,6.19-3.66,8.73,1.69L517,246.73l5.91-5.63Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text-path",
                    attrs: {
                        id: "points-text-path",
                        d: "M518.5,185.2L514.5,97.8"
                    }
                }), t._v(" "), s("text", {
                    attrs: {
                        "text-anchor": "middle"
                    }
                }, [s("textPath", {
                    staticClass: "points-text",
                    attrs: {
                        href: "#points-text-path",
                        startOffset: "50%"
                    }
                }, [t._v("\n                " + t._s(t.definition.points) + "\n            ")])])]) : t._e(), t._v(" "), t.isBonus(t.definition) ? s("g", {
                    staticClass: "graphic"
                }, [s("path", {
                    attrs: {
                        d: "M464.94,97.22,463,100l-7-4.79,11.26,15.21,1.41-3.38,7,3.38Zm3.66-22.8L490,106.51l-9-22,7-1.41L465.22,46.2,474,73.57Z\n                m7.6,100.23-7,19.43,6.07-8.17,2.94,2.82,6.48-18-5.91,7.6ZM522.1,43.16l-7,18.59-5.07-4-3.38,32.66,7.32-17.17,5.63,\n                1.13Zm11.26,44.21-3.94-3.1-5.07,25.34,6.19-10.42,3.1,3.1,6.19-25.9Zm-39.14,119.1-9,.84,3.94,35.76,4.79-24.5,7.6,\n                3.38-.28-39.7Zm25.62-25.91-4.78-12.38,2.25,24.21,3.66-5.07,5.91,18-2.25-29.28Z"
                    }
                }), t._v(" "), s("Avatar", {
                    attrs: {
                        avatar: t.definition.avatar
                    }
                })], 1) : t._e(), t._v(" "), t.isActive ? s("polygon", {
                    staticClass: "ants s-xs",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "475.2,270.9 440.3,47.4 500,18.8 559.7,47.4 524.8,270.9 500,283.4"
                    }
                }) : t._e()])
            };
            pt._withStripped = !0;
            var ht = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("g", {
                    staticClass: "avatar"
                }, ["Player1" === t.avatar ? [s("path", {
                    staticClass: "body",
                    attrs: {
                        d: "M506.08,118.38c1.64,1.5.81,4.49-.2,6.71A27.13,27.13,0,0,1,515,120.9c1.83-.44,2.87-.4,3.51.44a11.07,11.07,0,0,1,2.74,5.58\n                c3.72-1.36,9.19-1.6,10.51-1.75a1.71,1.71,0,0,1,2,1.48h.09v29.56a1.77,1.77,0,0,1-2.08,2c-1.31-.15-6.79-.39-10.51-1.75\n                a11.07,11.07,0,0,1-2.74,5.59c-.63.83-1.67.87-3.5.43a27.68,27.68,0,0,1-8.68-3.76c.49,1.51,1.66,4.39-.57,6.23-4.25,\n                3.49-12.1,3.76-15.55.76a19.69,19.69,0,0,1-4.35-5.34,14,14,0,0,1-5.85-1.87c-.63,1.14-1.7,3.21-3.49,3.93\n                s-3.16-.82-5.37-.66-4,.64-4.71-.22.05-2.21.33-4.38c.21-1.63-.71-3.49,0-5a6.56,6.56,0,0,1,4.93-3.51,20.28,20.28,0,0,\n                1-1.2-6.57c0-11,7.34-18.16,15.17-19.06.76-1.44,4.12-6,6.18-6.78A14.31,14.31,0,0,1,506.08,118.38Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "black",
                    attrs: {
                        d: "M475.42,161c2.44-.29,2.61-3,4.06-4.6-1.12-1.3-5-6-5.59-6.9-1.31.74-4.09.48-5.69,2.63-1.42,1.89.28,2.36.22,4.6\n                s-1.21,3.42-.88,3.83c.45.57,1.93-.53,3.83-.55S473.35,161.22,475.42,161ZM494,159.11a25.64,25.64,0,0,1-6.24,1\n                c.39,1.62,3,5.42,5.36,5.37C492.77,163.75,492.36,160.82,494,159.11Zm-.93-41.55c-2.37-.06-5,3.74-5.35,5.36a28.29,\n                28.29,0,0,1,6.22,1C492.31,122.2,492.72,119.28,493.11,117.56ZM497.32,158c-2,1.43-3.06,5.18-2,8.21a8.33,8.33,0,0,\n                0,3.29.11C497.13,164.08,496.88,160.45,497.32,158Zm2.35-31.93c.47-1.65,3-5.19,5.13-7a7.1,7.1,0,0,0-4.15-2.3\n                A11.42,11.42,0,0,0,499.67,126.09Zm1.05,40.14a7.08,7.08,0,0,0,4.16-2.3c-2.15-1.81-4.68-5.35-5.15-7A11.44,11.44,\n                0,0,0,500.72,166.23Zm-5.42-49.44c-1.09,3-.07,6.78,2,8.21-.44-2.42-.19-6.06,1.31-8.32A8.42,8.42,0,0,0,495.3,\n                116.79Zm9.8,24.58a14.78,14.78,0,0,0-4.93,11c0,4.72,3.94,9.32,5.59,10.51a20.25,20.25,0,0,1-3-10.51c0-4.37,\n                2.78-9.32,7.12-9.53,1.92-.1,20.67-.38,21.57-.55,1.06-.2.87-1,.22-.88s-19.25-.7-21.68-1.09-7.34-2.46-7.34-9.09\n                c0-4.44.94-7,3-11.17-1,1-5.31,6-5.48,9.31C500,132.92,501.5,138.55,505.1,141.37Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "white",
                    attrs: {
                        d: "M488.11,148.57a2.73,2.73,0,1,0,2.73-2.73A2.74,2.74,0,0,0,488.11,148.57Zm0-15a2.73,2.73,0,1,0,2.73-2.73A2.73,2.73,0,0,0,\n                488.11,133.57Z"
                    }
                })] : "Player2" === t.avatar ? [s("path", {
                    staticClass: "body",
                    attrs: {
                        d: "M499.54,126.81a27.87,27.87,0,0,1,14-8.65c1.82-.43,2.86-.4,3.5.44a11,11,0,0,1,2.74,5.58c3.72-1.36,9.2-1.6,\n                10.51-1.75a1.71,1.71,0,0,1,2,1.48h.1v29.57a1.78,1.78,0,0,1-2.08,2c-.66-.08-2.33-.17-4.31-.42-5.26,3.43-14.85,\n                6-25.2,5.07-1.49-.13-1.82-.7-2-2s-.4-4.67-.43-5.8a13.85,13.85,0,0,1-6.25,5.13c.53,3.09-.61,7.91-4.7,\n                7.68-2.55-.15-.18-3.47-1.65-3.62-3.06-.3-4.88,2.45-11.6,1.43-3.87-.59-6.2-3.49-6.35-7.45-.08-1.95.94-5.58,\n                3-6.57a20.19,20.19,0,0,1-2.52-9.63,22.87,22.87,0,0,1,1.15-7.26c-.46-.79-2.06-3.54-1.91-3.91A22.12,22.12,0,0,1,\n                479,117.83a13.78,13.78,0,0,1,1.27,2.33A15.47,15.47,0,0,1,486,119C494.87,119,496.16,121.75,499.54,126.81Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "black",
                    attrs: {
                        d: "M479.72,157.14a21.3,21.3,0,0,1-8.32-7.44s-2.38,1.57-2.3,5.8a6.49,6.49,0,0,0,5.91,6.57c6.19.64,7.95-2.1,11.06-2,\n                2.39.1,1.55,2.72,1.32,3.18-.59,1.13.47,1.44,1.42.87.51-.3,3.5-3,2.19-6.35C491,157.8,484.72,159.41,479.72,\n                157.14Zm1-35.8c1.5,5.89,7.81,22.36,8.83,25L473,133.6l-2.52-1.09,19.6,15.33.3-.68,0,0s5.41-15.19,7-21.24a12.5,\n                12.5,0,0,0-6.79-5.37C488.14,119.73,482.65,120.22,480.71,121.34Zm37.89,19.27c-2-1-5.74-1.67-9.25-2.09\n                l3.44-4.37-9.31-6.57-1.64-.33,9.31,7.34-3.54,3.74c-3.4-.34-6.22-.46-6.43-.46-.43,0-1,.35-1,.77V158c0,.82.17.92,\n                1,1s12.14-.33,15.12-1.1c5.59-1.44,12.21-6.22,13.57-7.55a1.57,1.57,0,0,0,.11-2.19c-.19-.2-2.12-1.69-4.6-3.4\n                V125.39l-1-.88.11,19.66A61.37,61.37,0,0,0,518.6,140.61Zm-2,6.61H527c.71.53,1.17.91,1.26,1,1,.73.85,1.07-.1,1.92\n                l-.08.08H516.57v6.45l-.4.11a19.75,19.75,0,0,1-2.56.38V150.2H501.38v-3h12.23v-6.95a29.1,29.1,0,0,1,3,.68Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "white",
                    attrs: {
                        d: "M486.73,135.06c0,1,1.23,1.83,2.74,1.83s2.74-.82,2.74-1.83-1.23-1.83-2.74-1.83S486.73,134.05,486.73,135.06Zm0-10\n                c0,1,1.23,1.82,2.74,1.82s2.74-.82,2.74-1.82-1.23-1.83-2.74-1.83S486.73,124,486.73,125Z"
                    }
                })] : "Player3" === t.avatar ? [s("path", {
                    staticClass: "body",
                    attrs: {
                        d: "M499.15,129.63a24.18,24.18,0,0,1,1.78-1.88c.3-.28-.05-1.54.26-1.81a32,32,0,0,1,10.05-5.76c.34-.11.78,1.1,1.12,\n                1s.54-.15.81-.21c1.83-.44,2.87-.4,3.5.44a11,11,0,0,1,2.74,5.58c3.72-1.36,9.2-1.6,10.51-1.75a1.7,1.7,0,0,1,2,\n                1.48h.1v29.56a1.77,1.77,0,0,1-2.08,2c-1.32-.15-6.79-.39-10.51-1.75a11.15,11.15,0,0,1-2.74,5.59\n                c-.64.83-1.68.87-3.5.43-5.06-1.19-10.88-4.33-14.08-8.81-2.3,3.28-4.37,6-8.95,7-.29.06-.6,1-.91,1.05a22.1,22.1,\n                0,0,1-3.66.3,15.15,15.15,0,0,1-4.84-.79c-.28-.09-.56-1.07-.84-1.18a17.79,17.79,0,0,1-5.84-3.82\n                c-.35-.33-.68.52-1,.17-3.17-3.55-5.16-9.5-5.16-14.37a21.56,21.56,0,0,1,4.87-14c.21-.24.19-.91.4-1.14a18.07,\n                18.07,0,0,1,4.15-3.35c.23-.14.69.16.93,0a15.67,15.67,0,0,1,7.28-1.84C494.48,121.85,495.77,124.57,499.15,\n                129.63Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "black",
                    attrs: {
                        d: "M474.19,127l-.66.88.22,3.39.71,3-1.59,20.14.55,1.09.55-1.31,1.08-17.48,1.33,5.54,4.49,18,1,.11-5.14-21Zm19.49,\n                31.1a13.62,13.62,0,0,0,3.39-3.5l-2.52-29a15.45,15.45,0,0,0-9.19-2.41,16.5,16.5,0,0,0-6.9,1.75l10.73,35.15A20.9,\n                20.9,0,0,0,493.68,158.1Zm16.53-36.68-2.3,11.38L504.21,147l-1.44-15.43.54-6.46-1.64,1.64.44,11.17,2.41,19.27,\n                1.31,1.1-1.2-6.79-.17-1.85,6.61-24.4,3.09,20.45L516,161.6l.65-.43-2.4-22.45-2.38-16.49L512,122l-.77-1.09Z\n                m14.13,35.37.88-.11.32-7.67-.11-22.45h-.65v12.38Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "white",
                    attrs: {
                        d: "M486.82,147.73l1.11,3.23a2.68,2.68,0,0,0,1.45.43,2.74,2.74,0,1,0-2.56-3.66Zm-.17-14.08a2.74,2.74,0,1,0,2.73-2.73\n                A2.73,2.73,0,0,0,486.65,133.65Z"
                    }
                })] : "Player4" === t.avatar ? [s("path", {
                    staticClass: "body",
                    attrs: {
                        d: "M511.5,120.81c1.63-2,6.59-2.51,9,.21.41.4.33.7-.16,1.12-.22.2-1.76,1.67-2.58,\n                2.39-.18.16-.41.17-.87-.11-.77-.47-2.07.35-2.08,1.42a1.59,1.59,0,0,0,1.53,1.21,2.81,2.81,0,0,0,2.19-1.1,1.12,\n                1.12,0,0,1,.87-.33c2.91,0,9.36.11,10.9.11s1.81.69,1.81,1.87v27.79c0,1.23-.14,1.87-2,1.87s-8,.1-10.69.1a1.13,\n                1.13,0,0,1-.87-.32,2.81,2.81,0,0,0-2.19-1.1,1.58,1.58,0,0,0-1.53,1.21c0,1.07,1.31,1.88,2.08,\n                1.42.46-.28.69-.27.87-.11.82.72,2.36,2.18,2.58,2.38.49.42.57.72.16,1.12-2.39,2.72-7.35,2.19-9,.22a27.57,27.57,\n                0,0,1-12.37-9.31c-.46.65-.9,1.28-1.36,1.88,0,2.3.48,3.38-1.16,3.38-2.34,0-7,.05-8.21,0,.55.7,1.31,1.85,1.75,\n                2.3a1,1,0,0,1-.88,1.64c-.93,0-6.66.11-8.21.11-.68,0-1.23-.59-.44-1.31s1.34-1.66,2.08-2.52c-2.68,\n                0-8.53-.08-10.84-.11-1.25,0-1.91-.41-2-1.42-.14-2.29-.09-4.44-.09-6.35a25.38,25.38,0,0,1-1.88-9.53\n                c0-2.94.66-6.41,1.88-8.41,0-1.91-.05-4.07.09-6.36.06-1,.72-1.41,2-1.42,2.31,0,8.16-.11,\n                10.84-.11-.74-.86-1.43-1.93-2.08-2.53s-.24-1.31.44-1.31c1.55,0,7.28.11,8.21.11a1,1,0,0,1,.88,1.64c-.44.45-1.2,\n                1.61-1.75,2.31,1.18-.06,5.87,0,8.21,0,1.64,0,1.16,1.08,1.16,3.39.46.59.9,1.22,1.36,1.87A27.49,27.49,0,0,1,\n                511.5,120.81Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "black",
                    attrs: {
                        d: "M486.64,158a3,3,0,0,0-2.41.11,15.76,15.76,0,0,0-1.75,2c-.36.55-.77,1.1.22,1.1h5.48c.71,0,.91-.27.32-1.1A19.59,\n                19.59,0,0,0,486.64,158Zm4.16-29.14H487a1.87,1.87,0,0,0-1.86,1.87v5.88a4.92,4.92,0,0,0,0,9.28V152a1.86,1.86,0,0,\n                0,1.86,1.86h3.83a1.87,1.87,0,0,0,1.87-1.86V130.75A1.87,1.87,0,0,0,490.8,128.88Zm-6.57-4.14a3,3,0,0,0,2.41.11,\n                19.59,19.59,0,0,0,1.86-2.08c.59-.83.39-1.09-.32-1.09H482.7c-1,0-.58.55-.22,1.09A15.08,15.08,0,0,0,484.23,\n                124.74Zm23,7.46c1.61-.41,4-.83,4.26-.86a6.21,6.21,0,0,1-2.63-3.52,8.7,8.7,0,0,1,.11-4.95,30,30,0,0,0-4.31,2.51,\n                6.13,6.13,0,0,0-.18,3.43A5.63,5.63,0,0,0,507.24,132.2Zm2.29,4.91a21.33,21.33,0,0,0-.33,3.83,41.65,41.65,0,0,0,\n                .33,4.6c.08.65.42.78,1.09.76h2.74a.86.86,0,0,0,.88-.54,25.3,25.3,0,0,0,.55-4.6,24.74,24.74,0,0,\n                0-.44-4.16.85.85,0,0,0-.88-.66h-2.74C510.24,136.34,509.6,136.69,509.53,137.11Zm7-9.18A2.39,2.39,0,0,1,514,\n                126.5a2.51,2.51,0,0,1,.76-2.86,2,2,0,0,1,2.52.22l2.41-2.52s-3.64-2.91-6.46-1-3.17,4.24-2.41,7.47a5.43,5.43,0,0,\n                0,5.7,3.85c3.52-.27,4.47-1.57,5.58-3.52-.64-.36-3.17-1.87-3.17-1.87A4.19,4.19,0,0,1,516.54,127.93Zm7.12-.24\n                v27.37c0,.88,1,.83,1,0V127.69C524.64,126.87,523.66,126.93,523.66,127.69ZM516.54,155A4.11,4.11,0,0,1,519,156.6\n                s2.53-1.51,3.17-1.86c-1.11-2-2.06-3.24-5.58-3.51a5.42,5.42,0,0,0-5.7,3.83c-.76,3.22-.55,5.45,2.41,7.45s6.46-1,\n                6.46-1L517.3,159a2,2,0,0,1-2.51.22,2.48,2.48,0,0,1-.77-2.85A2.37,2.37,0,0,1,516.54,155Zm-5-3.4c-.24,\n                0-2.65-.45-4.26-.86a5.64,5.64,0,0,0-2.75,3.38,6,6,0,0,0,.19,3.42A30.1,30.1,0,0,0,509,160a8.71,8.71,0,0,\n                1-.11-4.93A6.18,6.18,0,0,1,511.5,151.56Zm-8.32-3.17c-.26-.27-2.42.28-3.07,1.64A3,3,0,0,0,500,153a22.22,22.22,0,\n                0,0,1.95,2.31,6.84,6.84,0,0,1,.79-3.4,6.72,6.72,0,0,1,2.29-2.12A14.36,14.36,0,0,1,503.18,148.39Zm0-13.87a12.94,\n                12.94,0,0,1,1.86-1.38,7,7,0,0,1-2.3-2.13,6.89,6.89,0,0,1-.79-3.42,24,24,0,0,0-1.94,2.32,3,3,0,0,0,.11,3C500.75,\n                134.23,502.92,134.79,503.17,134.52Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "white",
                    attrs: {
                        d: "M486.29,148.8a2.74,2.74,0,1,0,2.74-2.74A2.74,2.74,0,0,0,486.29,148.8Zm0-15a2.74,2.74,0,1,0,2.74-2.73A2.74,2.74,\n                0,0,0,486.29,133.79Z"
                    }
                })] : "Player5" === t.avatar ? [s("path", {
                    staticClass: "body",
                    attrs: {
                        d: "M501.59,129.05a26.93,26.93,0,0,1,5.53-4.85c-.12-3-.29-8.56-.27-10.26a2.52,2.52,0,0,1,3.5-2.08,25.55,25.55,0,0,1,\n                4.27,2.19c1-1.42,4.14-2.51,8.65-2.3,6,.28,11.23,5.9,11.28,7.34s0,36.63,0,36.63c0,1.27-.27,1.88-1.59,1.8-.34,\n                0-1.13,0-2,0a26.63,26.63,0,0,1-.44,7.23,2,2,0,0,1-2.26,1.05c-4.08-.92-23.47-8.49-28.07-10.8a12.55,12.55,0,0,\n                1-2.68,2.87,4,4,0,0,1,.71.75c.33.36,0,.85-.22,1.09s-2.51,2.86-2.85,3.29\n                c-.18.24-.71.25-1.09.11-.85-.32-4.56-1.69-5.37-2.08a2.72,2.72,0,0,0-1.64.22c-2.68,1.12-8.38,\n                3.42-11.61,5-.54.28-.8.46-1,.88-.39.88-.84,3-1.21,3.5a3.92,3.92,0,0,1-2.63.55,33.61,33.61,0,0,1-4.81-5.8,3.55,\n                3.55,0,0,1-.22-2.63c.84-4.45,3.13-14.1,4.16-18.18a2.49,2.49,0,0,0-.33-2.19,21.48,21.48,0,0,1-1.86-3.94,14.28,\n                14.28,0,0,1,2.63-4.6c.46-.4,1.19-.09,1.49,0,2.71-7.66,9.36-12.62,16.35-12.62C496.92,121.28,498.21,124,501.59,\n                129.05Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "black",
                    attrs: {
                        d: "M500.61,154.13c2.36,1.46,23.77,9.82,27.15,10.4,1,.17,2-.16,2.08-1.2s0-4.74,0-5.81c-2.94-.1-24.76-3.82-28.25-4.81\n                A2.66,2.66,0,0,1,500.61,154.13Zm-14.68,5.47c-.94-.62-5.41-3.06-8.43-6a54.11,54.11,0,0,1-5.59-6.69\n                c-.26-.41-.86-.49-1.09.34-.72,2.67-3.57,15.23-3.72,16.1a2.09,2.09,0,0,0,.44,1.75c.26.38,3.09,4,3.39,4.38\n                s1.17.18,1.21-.33c.05-.69.46-2.76.54-3.17s.28-.67.77-.88,10.62-4.14,11.5-4.38S486.34,159.87,485.93,159.6Z\n                m-15-23.65c-.35.1-.76,1.56-.66,2.74s3.71,8.1,9,12.7c7,6.12,13.11,8.86,14,9.09a4.41,4.41,0,0,0,3-.77\n                c.58-.44-.4-1.19-1-1.53s-10.32-8.52-12.15-10.07-10.75-11.26-10.95-11.61A1.35,1.35,0,0,0,470.93,136Zm43.26-20.48\n                c-1-.57-3.38-1.94-4.06-2.3a1.18,1.18,0,0,0-1.86.88v17.52s-5.93,4.61-6.24,4.93a1.73,1.73,0,0,0-.11,2.19,1.49,\n                1.49,0,0,0,2,.44c.44-.24,4.49-3.07,4.49-3.07s.1,5.85.11,6.46c0,1,.74,1,1.43.77s4.16-2.3,4.16-2.3a11,11,0,0,0,\n                6.79,2.63c5,0,9.9-.78,12.81-6.9,0-1.47-.11-16.4-.11-17.63a14.7,14.7,0,0,0-12.38-6.57A9.6,9.6,0,0,0,514.19,\n                115.47Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "white",
                    attrs: {
                        d: "M488.76,148.08a2.74,2.74,0,1,0,2.73-2.73A2.73,2.73,0,0,0,488.76,148.08Zm0-15a2.74,2.74,0,1,0,2.73-2.73A2.74,\n            2.74,0,0,0,488.76,133.07Z"
                    }
                })] : "Player6" === t.avatar ? [s("path", {
                    staticClass: "body",
                    attrs: {
                        d: "M499,121.63a.94.94,0,0,1,.88-.88h6.57c.59,0,.87.27.87.88,0,1.26,0,3.17,0,3.48a26.84,26.84,0,0,1,8.83-4c1.83-.43,\n                2.87-.4,3.51.44a11.07,11.07,0,0,1,2.73,5.58c3.72-1.36,9.2-1.6,10.52-1.75a1.71,1.71,0,0,1,2,1.48h.1v29.56a1.78,\n                1.78,0,0,1-2.08,2c-1.32-.16-6.79-.4-10.51-1.76a11.07,11.07,0,0,1-2.74,5.59c-.64.83-1.68.87-3.5.44a28.87,28.87,\n                0,0,1-9-4c-.06.84,0,1.54,0,2.76,0,.55-.17.87-.87.87h-6.14a1.14,1.14,0,0,1-1.2-1.09c0-.58,0-2,0-3.35a11.69,\n                11.69,0,0,1-4.18,2.59,2.71,2.71,0,0,1-3.11,4.15c-1,2.86-2.93,3.39-4.05,3.4a4.46,4.46,0,0,1-4.27-4.16,2.76,2.76,\n                0,0,1-2.52-4.6,19.4,19.4,0,0,1-6.14-5.63c-1.74-.11-6.31-.86-8.09-1.16s-2.26-1.28-1.08-2.93a60.51,60.51,0,0,1,\n                5.47-6.65c0-.21,0-.41,0-.61,0-8.42,4.31-15.12,10.09-18.28-.94-.92-1.26-1.47-.9-2.74a2.63,2.63,0,0,1,3.18-2\n                c-.31-1.08.71-3.75,4.16-4.16,2.47-.3,4,2.28,4.05,3.28a3.28,3.28,0,0,1,3.51,1.1,2.4,2.4,0,0,1-.39,3.19A8.93,\n                8.93,0,0,1,499,125.3C499,123.2,499,122.54,499,121.63Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "black",
                    attrs: {
                        d: "M487.53,149a2.07,2.07,0,1,0,2.07-2A2.06,2.06,0,0,0,487.53,149Zm0-15.59a2.07,2.07,0,1,0,2.07-2A2.06,2.06,0,0,0,\n                487.53,133.43Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "white",
                    attrs: {
                        d: "M471.21,144.84s-4.11,4.18-4.71,4.93c-.88,1.08-.68,1.42.76,1.75s7,.72,7,.72a13.11,13.11,0,0,1-1.84-3.24A27.49,\n                27.49,0,0,1,471.21,144.84Zm20.58,14a10.92,10.92,0,0,0-8.1-.88c-2.62.93-3.32,5.17.66,4.49a3.07,3.07,0,0,0,2.73,\n                3.62c2.74.16,3.13-1.43,3.18-3.29a1.93,1.93,0,0,0,3,.22C494.36,162,493.85,160.07,491.79,158.86ZM497,141.5\n                c0-2.43-1.07-3.82-2.68-3.82s-3.13,1.91-3.13,3.82c0,1.76,1.53,3.82,3.13,3.82S497,143.84,497,141.5Zm-9.67-24.85\n                a3.09,3.09,0,0,0-2.74,3.62c-4-.68-3.78,3.57-.66,4.49a11.65,11.65,0,0,0,8.11-.87c2.05-1.21,2.56-3.11,1.42-4.17\n                a2.06,2.06,0,0,0-3.06.44C490.33,118.3,490,116.49,487.31,116.65ZM517,141.56a3,3,0,0,0,2.95,3.28c1.82,0,3.38-.64,\n                3.4-3.28a3,3,0,0,0-3.29-3.18A3,3,0,0,0,517,141.56Zm-14.33-16.12c1,.62,1.61,1.06,1.61,1.88s-.52,1.28-1.44,\n                1.83a3.34,3.34,0,0,0-2.07,3,3,3,0,0,0,1.95,2.71c.87.5,1.56.9,1.56,2.11s-.7,1.66-1.58,2.22a3.25,3.25,0,0,0-1.93,\n                2.81c0,1.35,1.06,2.1,2,2.77s1.52,1.12,1.52,1.83-.54,1.07-1.42,1.63-2.09,1.35-2.09,2.86c0,1.19,1,1.81,1.85,2.36,\n                1,.66,1.66,1.12,1.66,2s-.7,1.45-1.75,2.12c-.86.55-1.76,1.11-1.76,2.15v.57h4.07a.57.57,0,1,0,0-1.13h-2.6a7,7,0,\n                0,1,.9-.63c1-.65,2.27-1.44,2.27-3.08s-1.21-2.36-2.18-3c-.82-.53-1.32-.87-1.32-1.41,0-.83.59-1.28,1.56-1.9\n                s1.94-1.25,1.94-2.59-1.06-2.09-2-2.75-1.51-1.13-1.51-1.85c0-.91.5-1.28,1.4-1.85a3.54,3.54,0,0,0,2.1-3.18,3.34,\n                3.34,0,0,0-2.12-3.09c-.89-.51-1.38-.85-1.38-1.73,0-1,.57-1.45,1.52-2a3.17,3.17,0,0,0,2-2.8\n                c0-1.51-1.19-2.25-2.14-2.84a4.6,4.6,0,0,1-1.15-.86h2.72a.57.57,0,0,0,0-1.14h-4.07v.57C500.75,124.27,501.76,\n                124.89,502.65,125.44ZM514,141.56a2.73,2.73,0,0,0-2.74-2.74,2.55,2.55,0,0,0-2.51,2.74,2.63,2.63,0,1,0,5.25,0Z"
                    }
                })] : "Player7" === t.avatar ? [s("path", {
                    staticClass: "body",
                    attrs: {
                        d: "M499.13,123.85a27.82,27.82,0,0,1,14-8.65c1.83-.43,2.87-.4,3.51.44a11,11,0,0,1,2.73,5.58,9.42,9.42,0,0,1,8.11.33\n                c1.43.68,4.23,3.77,4.38,6.57s.22,21.24.22,21.24c0,1.28-1.72,4.77-2.74,6.25-1.27,1.84-2.8,2.48-3.4,\n                3.5-.21.38-.14,3.28-1,5.58-1,2.75-3.17,4.89-4.71,\n                4.49-1.21-.3-1-2.77-2.3-3.94-.7-.6-4.71-.79-5.36-1.86-.75-1.23,2.12-3.79,2.51-4.16,\n                1.52-1.43.09-2-1.91-2.46-5-1.27-10.88-4.34-14-8.79.44,1.82-.39,8.54-.65,9.61a.68.68,0,0,1-1.21.22\n                c-2.28-3.3-7.23-2.38-11.77-2.36a14.39,14.39,0,0,1-3.15-.32,4.21,4.21,0,0,1-5.22,1.69,3.21,3.21,0,0,1-4.38.55,\n                4.18,4.18,0,0,1-1.54-4.93,3.45,3.45,0,0,1-.36-5.78,19.67,19.67,0,0,1-3-10.32c0-11.83,8.51-20.26,17.63-20.26,\n                4.42,0,8.25,1.49,11.82-2.19.36-.36,1,.07,1.1.55A42.65,42.65,0,0,1,499.13,123.85Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "black",
                    attrs: {
                        d: "M509.31,135.79c0-2.15-1.91-3.9-2.3-4.28a1.32,1.32,0,0,0-1.75-.1,21.47,21.47,0,0,1-2.19,1.64\n                c-.42.13-.87-.77-1.53-.22-.4.33.15,1.71,0,2s-.77.6-.77,1.2.77.78.77,1.1-.45,1.62.11,2,.93-.22,1.2-.22c.48,0,2,\n                1.4,2.52,1.64a1.56,1.56,0,0,0,1.75-.21A6.54,6.54,0,0,0,509.31,135.79Zm-5.91-6.14a1.28,1.28,0,0,0-1.21-1.2c-.48,\n                0-1.64.35-1.64,1.31a1.6,1.6,0,0,0,1.42,1.32A1.3,1.3,0,0,0,503.4,129.65Zm-1-4.16a1.28,1.28,0,0,0-1.2-1.2c-.49,\n                0-1.65.35-1.65,1.31a1.61,1.61,0,0,0,1.43,1.32A1.3,1.3,0,0,0,502.41,125.49Zm-1.53,22.23a1.32,1.32,0,0,0,.22-2.63\n                c-.49,0-1.65.36-1.65,1.32A1.61,1.61,0,0,0,500.88,147.72Zm20.8-26.17-.11,30.22s1.29.3,1.21,1.1a22,22,0,0,1-1.64,\n                4.16,20.85,20.85,0,0,0-4.27,2c-1.58,1.08-3.24,3.14-3.18,3.61s2.17,1,3.5.88a11.55,11.55,0,0,0,2.85-.77,16.62,\n                16.62,0,0,0-.33,2.85c0,1.14.39,2.71.88,2.85.75.21,3.19-1.46,3.83-4a42,42,0,0,0,.77-5.37,33,33,0,0,0,3.94-4.71,\n                20.2,20.2,0,0,0,2.19-8.21c0-2.92.21-15.63.11-17a12.58,12.58,0,0,0-2.74-5.7C526.58,121.32,521.68,121.55,521.68,\n                121.55ZM476.9,154.84a2.35,2.35,0,0,0,3.61.22c1.58-1.79-.34-3.57-1.09-4.05.36-.76,\n                1.48-2.53-.22-3.84-2-1.54-3.22,0-4.16.88a2.37,2.37,0,0,0-3.62.44c-.71,1,.24,3.24,1.86,3.83-.93,1.1-.9,3.45,1,\n                3.83A2.5,2.5,0,0,0,476.9,154.84Zm26.5-12.7a1.29,1.29,0,0,0-1.21-1.21c-.48,0-1.64.35-1.64,1.32a1.6,1.6,0,0,0,\n                1.42,1.31A1.3,1.3,0,0,0,503.4,142.14Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "white",
                    attrs: {
                        d: "M486.29,127.87a2.74,2.74,0,1,0,2.74-2.73A2.74,2.74,0,0,0,486.29,127.87Zm0,15a2.74,2.74,0,1,0,2.74-2.74A2.74,\n                2.74,0,0,0,486.29,142.88Z"
                    }
                })] : "Player8" === t.avatar ? [s("path", {
                    staticClass: "body",
                    attrs: {
                        d: "M503.31,129.36A26.59,26.59,0,0,1,517,120.93c1.83-.44,2.87-.4,3.51.43a11.07,11.07,0,0,1,2.73,5.59c3.73-1.36,\n                9.2-1.6,10.52-1.75a1.69,1.69,0,0,1,2,1.48h.1v29.56a1.77,1.77,0,0,1-2.08,2c-1.32-.15-6.79-.39-10.51-1.75a11.07,\n                11.07,0,0,1-2.74,5.59c-.64.83-1.68.87-3.5.43-5.06-1.2-10.55-4.22-13.75-8.7-3.65,4.15-7.19,10-18.23,\n                10.35s-21-10.11-21-22.07c0-14,11.8-23.21,20.92-23.21C493.93,118.85,499.93,124.3,503.31,129.36Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "black",
                    attrs: {
                        d: "M502.71,141.35c0-8.6-5.57-15.58-13.34-15.58s-14.79,4.94-14.79,15.58c0,10.45,7,15.57,14.79,15.57S502.71,150,\n                502.71,141.35Zm5.77,10.14a15.77,15.77,0,0,1-1.05,2.11,12.48,12.48,0,0,1-1.36,1.88.57.57,0,0,0,.84.76,13.5,13.5,\n                0,0,0,1.49-2.06,18.35,18.35,0,0,0,1.14-2.28.65.65,0,0,0,0-.2.57.57,0,0,0-1.1-.21Zm4.92,3a13.51,13.51,0,0,1-1,\n                2.2,8.59,8.59,0,0,1-1.63,1.93.57.57,0,0,0-.06.8.56.56,0,0,0,.8.06,10.09,10.09,0,0,0,1.87-2.22,14.72,14.72,0,0,\n                0,1.14-2.4.58.58,0,0,0,0-.19.55.55,0,0,0-.38-.53A.57.57,0,0,0,513.4,154.47Zm-.36-21a6.19,6.19,0,0,0-4-1.2,6.67,\n                6.67,0,0,0-3.67,1.15,31.89,31.89,0,0,0-1.16-3,.57.57,0,0,0-1,.47c0,.06,2.57,5.67,2.57,10.49A26.58,26.58,0,0,1,\n                503,151.88a.57.57,0,0,0,.24.76.58.58,0,0,0,.77-.24,30.47,30.47,0,0,0,1.4-3.39,6.62,6.62,0,0,0,3.55,1.06,6.16,\n                6.16,0,0,0,4-1.2c.77.69,1.48,1.36,1.49,1.37l.16.16,5.51.13-.12-18.66-5.68-.13-.17.27A12.88,12.88,0,0,1,513,\n                133.5Zm-4,15.44a5.37,5.37,0,0,1-3.22-1.06,23.08,23.08,0,0,0,1-6.48,24.63,24.63,0,0,0-1.15-6.81,5.78,5.78,0,0,\n                1,6.53-.29l-.37.3a23.93,23.93,0,0,1-3.17,1.57l-.34.15-.12,9.38.32.15a24,24,0,0,1,3.3,2l.31.24A5.26,5.26,0,0,1,\n                509,148.94ZM519,133l.1,16.39-3.91-.1c-.44-.42-1.72-1.61-2.62-2.3a25.49,25.49,0,0,0-3.17-2l.1-7.93a20.5,20.5,0,\n                0,0,3.06-1.56,12.48,12.48,0,0,0,2.48-2.62Zm-3.71,8.59v5.8a.6.6,0,0,0,.6.6H517a.6.6,0,0,0,.6-.6v-5.8a.6.6,0,0,\n                0-.6-.6h-1.1A.6.6,0,0,0,515.25,141.57Zm-8.58-14.94a.56.56,0,0,0-.06.8,12,12,0,0,1,1,1.56,6.65,6.65,0,0,1,.81,\n                1.9.56.56,0,0,0,1.12-.11.34.34,0,0,0,0-.1,7.3,7.3,0,0,0-.94-2.27,12.79,12.79,0,0,0-1.15-1.72A.57.57,0,0,0,\n                506.67,126.63Zm4.66-3a.57.57,0,0,0,0,.8,7.56,7.56,0,0,1,1.21,1.62,7,7,0,0,1,.81,1.9.56.56,0,0,0,.66.45.57.57,0,\n                0,0,.46-.55.41.41,0,0,0,0-.11,7.51,7.51,0,0,0-.94-2.26,8.4,8.4,0,0,0-1.42-1.88A.57.57,0,0,0,511.33,123.61Z\n                m2.94,13a1.75,1.75,0,1,0,1.75-1.76A1.75,1.75,0,0,0,514.27,136.59Z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "white",
                    attrs: {
                        d: "M490.08,148.25a2.6,2.6,0,1,0,2.6-2.6A2.59,2.59,0,0,0,490.08,148.25Zm0-14.28a2.6,2.6,0,1,0,2.6-2.6A2.59,2.59,0,0,\n                0,490.08,134Z"
                    }
                })] : t._e()], 2)
            };
            ht._withStripped = !0;
            const dt = l().extend({
                props: {
                    avatar: String
                }
            });
            var vt = (0, p.Z)(dt, ht, [], !1, null, "0ddf39d8", null);
            vt.options.__file = "src/games/pp8/the-wheel/views/wheel/slices/Avatar.vue";
            const ut = vt.exports,
                Ct = l().extend({
                    components: {
                        Avatar: ut
                    },
                    props: {
                        definition: Object,
                        isActive: Boolean
                    },
                    methods: {
                        isBonus: t => "bonus" === t.type,
                        isPoints: t => "points" === t.type
                    }
                });
            var gt = (0, p.Z)(Ct, pt, [], !1, null, "c9303b86", null);
            gt.options.__file = "src/games/pp8/the-wheel/views/wheel/slices/Graphic.vue";
            const mt = gt.exports;
            var yt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("g", {
                    staticClass: "slice"
                }, [s("g", {
                    staticClass: "transformer"
                }, [s("polygon", {
                    staticClass: "base",
                    attrs: {
                        points: "500,355.9 479.2,346.9 421.2,37.7 500,0 578.8,37.7 520.8,346.9"
                    }
                }), t._v(" "), t._l(t.definition.slots, (function(e, n) {
                    return s("polygon", {
                        key: "player_" + n,
                        staticClass: "slot f s-xs",
                        class: e ? "b Player" + (n + 1) : "empty",
                        attrs: {
                            "vector-effect": "non-scaling-stroke",
                            points: t.slotPoints[n]
                        }
                    })
                })), t._v(" "), s("polygon", {
                    staticClass: "edge s-m",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "500,14.4 564.2,45.1 519.5,283.7 500,274.4 480.5,283.7 435.8,45.1"
                    }
                }), t._v(" "), t.definition.multiplier ? [s("path", {
                    staticClass: "text-path",
                    attrs: {
                        id: "player-multiplier-text-path",
                        d: "M512,355.9L512,274.4"
                    }
                }), t._v(" "), s("text", {
                    attrs: {
                        "text-anchor": "middle"
                    }
                }, [s("textPath", {
                    staticClass: "multiplier-text",
                    attrs: {
                        href: "#player-multiplier-text-path",
                        startOffset: "50%"
                    }
                }, [t._v("\n                    " + t._s(t.definition.multiplier) + "x\n                ")])])] : t._e(), t._v(" "), t.isActive ? s("polygon", {
                    staticClass: "ants s-xs",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "500,14.4 564.2,45.1 519.5,283.7 500,274.4 480.5,283.7 435.8,45.1"
                    }
                }) : t._e(), t._v(" "), t.definition.playerStake && t.definition.playerStake > 1 ? s("g", {
                    style: t.stakeStyle
                }, [s("path", {
                    staticClass: "stake s-xs",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        d: "M526.7,222.6h-7.6c-4,0-7.7,2-9.9,5.3l-9.1,13.5l-9.1-13.5c-2.2-3.3-6-5.3-9.9-5.3h-7.6c-8.3,0-15-6.7-15-15 V179c0-8.3,\n                    6.7-15,15-15h53.4c8.3,0,15,6.7,15,15v28.6C541.7,215.8,535,222.6,526.7,222.6z"
                    }
                }), t._v(" "), s("text", {
                    staticClass: "stake-text",
                    attrs: {
                        x: "500",
                        y: "210"
                    }
                }, [t._v(t._s(t.definition.playerStake))])]) : t._e()], 2)])
            };
            yt._withStripped = !0;
            const ft = l().extend({
                props: {
                    definition: Object,
                    isActive: Boolean
                },
                computed: {
                    stakeStyle() {
                        return {
                            transform: `translateY(-${32.1*this.definition.playerIndex}px)`
                        }
                    },
                    slotPoints: () => ["474.9,253.9 480.5,283.7 500,274.4 519.5,283.7 525.1,253.9 500,241.9", "469.4,224.1 474.9,253.9 500,241.9 525.1,253.9 530.6,224.1 500,209.4", "463.8,194.3 469.4,224.1 500,209.4 530.6,224.1 536.2,194.3 500,176.9", "458.2,164.4 463.8,194.3 500,176.9 536.2,194.3 541.8,164.4 500,144.4", "452.6,134.6 458.2,164.4 500,144.4 541.8,164.4 547.4,134.6 500,111.9", "447,104.8 452.6,134.6 500,111.9 547.4,134.6 553,104.8 500,79.4", "500,46.9 441.4,75 447,104.8 500,79.4 553,104.8 558.6,75", "558.6,75 564.2,45.1 500,14.4 435.8,45.1 441.4,75 500,46.9"]
                }
            });
            var xt = (0, p.Z)(ft, yt, [], !1, null, "e3f78ec8", null);
            xt.options.__file = "src/games/pp8/the-wheel/views/wheel/slices/Player.vue";
            const _t = xt.exports;
            var Mt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("g", {
                    staticClass: "slice"
                }, [s("polygon", {
                    staticClass: "base",
                    attrs: {
                        points: "388.2,65.7 500,0 611.8,65.7 500,450"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "panel s-s",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "402.2,70.7 500,15 597.8,70.7 500,397"
                    }
                }), t._v(" "), "bad" === t.definition.type ? s("g", {
                    staticClass: "graphic"
                }, [s("path", {
                    attrs: {
                        d: "M529.1,171.2l14.9-9.3l-0.4-11.9l-7.1-3l6.3-7.4l-1.1-4.1l-17.5,8.6l-4.5-14.9l-16.7-7.1l-33.8,7.8l-8.6,32.4l16,31.2l37.2,\n                8.6l8.6-21.9l21.2,9.3l-0.7-11.9L529.1,171.2z\n                M510.2,135.1l5.2,18.6l-14.5-0.7l-0.7-6.7L510.2,135.1z\n                M504.6,190.1l-7.4-14.9V166l14.1,4.8L504.6,190.1z\n                M522.5,168.2l-15.3-6.3l16.7-5.6L522.5,168.2z\n                M546.2,52.7l-5.9-6.8L518.2,112l4.1,0.8l31.6-60.5L546.2,52.7z\n                M510.3,219l2.6,63.8l8.3-6l7.5-1.9l-13.5-58.2L510.3,219z\n                M472,270.8l6.8,4.5l4.1,11.6l15.4-75.5l-5.3,0.8L472,270.8z\n                M486.6,119.8l1.9-5.2l-20.6-66.5l-2.6,7.9l-6,3l23.7,60.1L486.6,119.8z"
                    }
                })]) : t._e(), t._v(" "), t.isWinner(t.definition) ? s("g", {
                    staticClass: "graphic"
                }, [s("path", {
                    attrs: {
                        d: "M479.6,202.5l-5.9-32.1l5.9-26.5l-22.5-11.5l5.3,21.1l-18.9,1.1l14.9,16l-11.5,14.4l16.9,5.9\n                l-5.3,20.6L479.6,202.5z\n                M549,95.8l2.5,5l-2.7,6.7l6.2-1.1l5.1,3.3l2-6.5l4.6-2.5l-5.2-4.3l-1-5.6l-4.9,4.5L549,95.8z\n                M475.9,233.4l-5.7,2.2l-6.5-1.6l0.7,6.4l-3.9,4.1l6.3,1.9l3.4,5.3l3.1-6.1l7-1.6l-5-5.2\n                L475.9,233.4z\n                M453.2,88.3L463,82l-9.9-5.7l-2.6-10.8l-10.1,8l-11.7-0.7l4.1,11.1l-4.9,11.1l12.7-2l9.6,8.9\n                L453.2,88.3z\n                M500.1,336.5l-2.8,4.2l-6.5-0.6l3.4,4.8l-1.7,5.9l5.3-0.8l4.5,3.7v-7.6l5.6-2.8l-6.2-2.3\n                L500.1,336.5z\n                M541.5,212.8l-3.4-4.4l-2,3.8l-5.1,1.9l3.4,4.7l-0.9,5.3l4.9-2.8l6.9,1.3l-2-5.5l4.7-4.2H541.5z\n                M556.7,128.5l-10.3,3l-8.9-3.4l0.7,10.3l-6.6,7.9l10.1,4.1l6,9.4l7.6-8.9l8.6-2.2l-7.3-9.4\n                L556.7,128.5z\n                M539.7,79.1l8.2-5.3l7.2,1.5l-1.5-9.6l4.2-7.2l-9.5,0.3l-7.3-5.7l-2.1,7.9l-9.2,4.9l7.6,4.7\n                L539.7,79.1z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text-path",
                    attrs: {
                        id: "winner-text-path",
                        d: "M514.8,294L514.5,55.3"
                    }
                }), t._v(" "), s("text", {
                    attrs: {
                        "text-anchor": "middle"
                    }
                }, [s("textPath", {
                    staticClass: "winner-text",
                    attrs: {
                        href: "#winner-text-path",
                        startOffset: "50%"
                    }
                }, [t._v("\n                " + t._s(t.definition.name) + "\n            ")])])]) : t._e(), t._v(" "), t.isPointsForPlayer(t.definition) ? s("g", {
                    staticClass: "graphic"
                }, [s("path", {
                    staticClass: "stars",
                    attrs: {
                        d: "M539.55,90.18l-31.91,10.51L474.52,88.62l.84,35.35-21,27,33.42,9.39,18.39,32.28,19.52-31.53L559.45,151l-19.9-26.65ZM457,\n                106.7l13.14-8.63-11.64-9.39L454,72.91l-12.77,8.64L425.8,80.42l4.51,14.64-7.89,15,16.52.38,13.52,10.88ZM580.85,74h-9.76\n                l-9.39-9-4.13,10.14L546.69,80.8l8.63,6.76,3,12.38,8.26-5.25L579,95.81l-2.25-12.38ZM527.16,197.93l-15.39,\n                9.76-19.14-3.38,6,19.9L490,239.6h18.39l15,13.51L530.17,237l15.76-9.39L531.67,215.2ZM508.39,279l-12,5.25L485.12,\n                279l2.63,13.63-7.51,10.77,10.88,1.5,7.89,9.76L504.26,303l11.27-2.63-8.26-9.76ZM478,200.93\n                l3.76-11.26-11.64-.38-9.38-7.51-3.38,10.89L448,199.05l9,7.14,3,12,9.38-7.13h11.26Z"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "stripe",
                    attrs: {
                        points: "500 15 500 397 491.48 368.6 474.06 29.77 500 15"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "stripe",
                    attrs: {
                        points: "451.79 42.46 481.74 336.1 459.04 260.41 428.48 55.74 451.79 42.46"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "stripe",
                    attrs: {
                        points: "525.94 29.77 548.21 42.46 518.26 336.1 508.52 368.6 525.94 29.77"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "stripe",
                    attrs: {
                        points: "571.52 55.74 597.84 70.73 540.96 260.41 571.52 55.74"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text-path",
                    attrs: {
                        id: "rainbow-text-path",
                        d: "M514,324L514,25"
                    }
                }), t._v(" "), s("text", {
                    attrs: {
                        "text-anchor": "middle"
                    }
                }, [s("textPath", {
                    staticClass: "rainbow-text",
                    attrs: {
                        href: "#rainbow-text-path",
                        startOffset: "50%"
                    }
                }, [t._v("\n                " + t._s(t.definition.name) + "\n            ")])])]) : t._e()])
            };
            Mt._withStripped = !0;
            const bt = l().extend({
                props: {
                    definition: Object,
                    isActive: Boolean
                },
                methods: {
                    isPointsForPlayer: t => "pointsForPlayer" === t.type,
                    isWinner: t => "winner" === t.type
                }
            });
            var wt = (0, p.Z)(bt, Mt, [], !1, null, "7fc3befa", null);
            wt.options.__file = "src/games/pp8/the-wheel/views/wheel/slices/Winner.vue";
            const zt = wt.exports,
                Lt = l().extend({
                    components: {
                        BackgroundMain: X,
                        BackgroundPlace: et,
                        BackgroundRainbow: lt,
                        BackgroundWin: rt,
                        SliceGraphic: mt,
                        SlicePlayer: _t,
                        SliceWinner: zt
                    },
                    props: {
                        category: String,
                        definitions: Array,
                        rotation: Number,
                        isActive: Boolean,
                        shouldShowFace: Boolean,
                        shouldHideWheel: Boolean,
                        egg: String
                    },
                    i18n: {
                        messages: y
                    },
                    data: () => ({
                        tilt: [0, 0]
                    }),
                    computed: {
                        eventHandlers() {
                            return "choose" !== this.category && "place" !== this.category ? {} : {
                                pointerboxstart: this.onPointerBoxStart,
                                pointerboxmove: this.onPointerBoxMove,
                                pointerboxend: this.onPointerBoxEnd
                            }
                        },
                        rotateStyles() {
                            return {
                                transform: `rotate(${this.rotation}deg)`
                            }
                        },
                        tiltStyles() {
                            return "choose" !== this.category && "place" !== this.category ? {} : {
                                transform: `perspective(800px) rotateX(${this.tilt[0]}deg) rotateY(${this.tilt[1]}deg)`
                            }
                        },
                        shadowTiltStyles() {
                            return "choose" !== this.category && "place" !== this.category ? {} : {
                                transform: `translate(${2*-this.tilt[1]}px, ${2*this.tilt[0]}px)`
                            }
                        },
                        backgroundComponent() {
                            switch (this.category) {
                                case "answer":
                                case "choose":
                                case "main":
                                    return "BackgroundMain";
                                case "place":
                                    return "BackgroundPlace";
                                case "rainbow":
                                    return "BackgroundRainbow";
                                case "winner":
                                    return "BackgroundWin"
                            }
                        },
                        sliceComponents() {
                            return this.definitions.map((t => {
                                switch (t.layout) {
                                    case "graphic":
                                        return "SliceGraphic";
                                    case "player":
                                        return "SlicePlayer";
                                    case "winner":
                                        return "SliceWinner";
                                    default:
                                        return !1
                                }
                            }))
                        }
                    },
                    methods: {
                        onPointerBoxStart(t) {
                            this.updateTilt(t.detail.percentX, t.detail.percentY)
                        },
                        onPointerBoxMove(t) {
                            this.updateTilt(t.detail.percentX, t.detail.percentY)
                        },
                        onPointerBoxEnd() {
                            this.resetTilt()
                        },
                        onSliceClick(t) {
                            this.isActive && this.definitions[t].isActive && this.$emit("sliceClicked", t)
                        },
                        onDeletePressed() {
                            this.$emit("deletePressed")
                        },
                        updateTilt(t, e) {
                            t < 0 && (t = 0), t > 1 && (t = 1), e < 0 && (e = 0), e > 1 && (e = 1);
                            const s = 10 * t - 5,
                                n = 10 * e - 5;
                            this.tilt = [-n, s]
                        },
                        resetTilt() {
                            this.tilt = [0, 0]
                        },
                        onEnter(t, e) {
                            const s = t.getElementsByClassName("transformer")[0];
                            s && (u.p8.fromTo(s, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: .1
                            }), u.p8.fromTo(s, {
                                translateY: -100
                            }, {
                                translateY: 0,
                                duration: .25,
                                ease: "back.out(2)",
                                onComplete: e
                            }))
                        },
                        onLeave(t, e) {
                            const s = t.getElementsByClassName("transformer")[0];
                            s && (u.p8.to(s, {
                                opacity: 0
                            }), u.p8.to(s, {
                                translateY: -100,
                                duration: .35,
                                onComplete: e
                            }))
                        }
                    }
                });
            var St = (0, p.Z)(Lt, V, [], !1, null, "34dca79a", null);
            St.options.__file = "src/games/pp8/the-wheel/views/wheel/WheelBox.vue";
            const Et = St.exports;
            class At {
                constructor(t, e, s, n) {
                    this.observable = l().observable({
                        definitions: []
                    }), this.category = e, this.info = s, this.players = n;
                    const i = this.parse(t);
                    l().set(this.observable, "definitions", i)
                }
                get definitions() {
                    return this.observable.definitions
                }
                sync(t) {
                    const e = this.parse(t);
                    l().set(this.observable, "definitions", e)
                }
                parse(t) {
                    return t.map(((t, e) => {
                        switch (t.type) {
                            case "answer":
                                return this.parseAnswer(t, e);
                            case "audience":
                                return this.parseAudience(t);
                            case "bad":
                                return this.parseBad(t);
                            case "bonus":
                                return this.parseBonus(t);
                            case "empty":
                                return this.parseEmpty(t);
                            case "multiplier":
                                return this.parseMultiplier(t);
                            case "neighbor":
                                return this.parseNeighbor(t);
                            case "player":
                                return this.parsePlayer(t);
                            case "points":
                                return this.parsePoints(t);
                            case "pointsForPlayer":
                                return this.parsePointsForPlayer(t);
                            case "reserved":
                                return this.parseReserved(t);
                            case "winner":
                                return this.parseWinner(t);
                            default:
                                return this.parseBad(t)
                        }
                    }))
                }
                parseAnswer(t, e) {
                    return {
                        type: "answer",
                        layout: "graphic",
                        labelKey: "ARIA.ANSWER",
                        rotation: t.position,
                        isActive: !1,
                        isSelected: !1,
                        classes: ["Player" + (e % 6 + 1)]
                    }
                }
                parseAudience(t) {
                    return {
                        type: "audience",
                        layout: "graphic",
                        labelKey: "ARIA.AUDIENCE",
                        rotation: t.position,
                        isActive: t.isSelectable,
                        isSelected: t.isSelected
                    }
                }
                parseBad(t) {
                    return {
                        type: "bad",
                        layout: "winner" === this.category ? "winner" : "graphic",
                        labelKey: "ARIA.BAD",
                        rotation: t.position,
                        isActive: t.isSelectable,
                        isSelected: t.isSelected
                    }
                }
                parseBonus(t) {
                    const e = this.players[t.data.owner];
                    return {
                        type: "bonus",
                        layout: "graphic",
                        labelKey: "ARIA.BONUS",
                        labelData: {
                            for: e.name
                        },
                        rotation: t.position,
                        isActive: t.isSelectable,
                        isSelected: t.isSelected,
                        classes: [e.avatarId],
                        avatar: e.avatarId
                    }
                }
                parseEmpty(t) {
                    return {
                        type: "empty",
                        layout: "empty",
                        labelKey: "ARIA.EMPTY",
                        rotation: t.position,
                        isActive: t.isSelectable,
                        isSelected: t.isSelected
                    }
                }
                parseMultiplier(t) {
                    return {
                        type: "empty",
                        layout: "empty",
                        labelKey: "ARIA.MULTIPLIER",
                        labelData: {
                            multiplier: t.data.multiplier
                        },
                        rotation: t.position,
                        isActive: t.isSelectable,
                        isSelected: t.isSelected,
                        multiplier: t.data.multiplier
                    }
                }
                parseNeighbor(t) {
                    return {
                        type: "neighbor",
                        layout: "graphic",
                        labelKey: "ARIA.NEIGHBOR",
                        rotation: t.position,
                        isActive: t.isSelectable,
                        isSelected: t.isSelected
                    }
                }
                parsePlayer(t) {
                    const e = new Array(8).fill(!1);
                    let s, n;
                    const i = [];
                    return Object.keys(this.players).forEach((l => {
                        const a = t.data.playersWithStake.find((t => t.id === parseInt(l, 10)));
                        if (!a) return;
                        const c = this.players[l];
                        i.push(c.name);
                        const o = parseInt(c.avatarId.slice(-1), 10) - 1;
                        e[o] = !0, "place" === this.category && c.id === this.info.id && (n = o, s = a.stake)
                    })), {
                        type: "player",
                        layout: "player",
                        labelKey: "ARIA.PLAYER",
                        labelData: {
                            for: i.join(", ")
                        },
                        rotation: t.position,
                        isActive: t.isSelectable,
                        isSelected: t.isSelected,
                        multiplier: t.data.multiplier && 1 !== t.data.multiplier ? t.data.multiplier : void 0,
                        playerIndex: n,
                        playerStake: s,
                        slots: e
                    }
                }
                parsePoints(t) {
                    return {
                        type: "points",
                        layout: "graphic",
                        labelKey: "ARIA.POINTS",
                        labelData: {
                            points: t.data.points
                        },
                        rotation: t.position,
                        isActive: t.isSelectable,
                        isSelected: t.isSelected,
                        points: t.data.points
                    }
                }
                parsePointsForPlayer(t) {
                    const e = this.players[t.data.player];
                    return {
                        type: "pointsForPlayer",
                        layout: "winner",
                        labelKey: "ARIA.POINTS_FOR",
                        labelData: {
                            for: e.name
                        },
                        rotation: t.position,
                        isActive: !1,
                        isSelected: !1,
                        classes: [e.avatarId],
                        name: e.name
                    }
                }
                parseReserved(t) {
                    return {
                        type: "empty",
                        layout: "empty",
                        labelKey: "ARIA.RESERVED",
                        labelData: {
                            for: t.data.reservedFor
                        },
                        rotation: t.position,
                        isActive: t.isSelectable,
                        isSelected: t.isSelected,
                        icon: t.data.reservedFor
                    }
                }
                parseWinner(t) {
                    const e = this.players[t.data.player];
                    return {
                        type: "winner",
                        layout: "winner",
                        labelKey: "ARIA.WINNER",
                        labelData: {
                            for: e.name
                        },
                        rotation: t.position,
                        isActive: t.isSelectable,
                        isSelected: t.isSelected,
                        classes: [e.avatarId],
                        name: e.name
                    }
                }
                isPlayerDefinition(t) {
                    return "player" === t.type
                }
                placeSlice(t) {
                    const e = this.definitions[t];
                    if ("empty" !== e.type && "multiplier" !== e.type) this.isPlayerDefinition(e) && (1 === e.playerStake ? e.playerStake = 2 : 2 === e.playerStake ? e.playerStake = 2.5 : e.playerStake += .25);
                    else {
                        const s = new Array(8).fill(!1),
                            n = parseInt(this.info.avatarId.slice(-1), 10) - 1;
                        s[n] = !0;
                        const i = {
                            type: "player",
                            layout: "player",
                            labelKey: "ARIA.PLAYER",
                            labelData: {
                                for: this.info.name
                            },
                            rotation: e.rotation,
                            isActive: e.isActive,
                            isSelected: e.isSelected,
                            multiplier: e.multiplier,
                            playerIndex: n,
                            playerStake: 1,
                            slots: s
                        };
                        l().set(this.observable.definitions, t, i)
                    }
                }
                unplaceSlice(t) {
                    const e = this.definitions[t];
                    if (this.isPlayerDefinition(e)) {
                        if (1 === e.playerStake) {
                            const s = {
                                type: "empty",
                                layout: "empty",
                                labelKey: "ARIA.EMPTY",
                                rotation: e.rotation,
                                isActive: e.isActive,
                                isSelected: e.isSelected
                            };
                            return e.multiplier && (s.multiplier = e.multiplier, s.labelData = {
                                multiplier: e.multiplier
                            }), void l().set(this.observable.definitions, t, s)
                        }
                        2 === e.playerStake ? e.playerStake = 1 : 2.5 === e.playerStake ? e.playerStake = 2 : e.playerStake -= .25
                    }
                }
                toggleSlice(t) {
                    const e = this.definitions[t];
                    void 0 !== e.isSelected && (e.isSelected = !e.isSelected)
                }
            }
            var Bt = function(t, e, s, n) {
                return new(s || (s = Promise))((function(i, l) {
                    function a(t) {
                        try {
                            o(n.next(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function c(t) {
                        try {
                            o(n.throw(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function o(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(a, c)
                    }
                    o((n = n.apply(t, e || [])).next())
                }))
            };
            const Nt = l().extend({
                components: {
                    SubmitButton: j,
                    PromptBox: R,
                    WheelBox: Et
                },
                props: {
                    info: Object,
                    players: Object,
                    player: Object
                },
                data() {
                    return {
                        isSending: !1,
                        manager: new At(this.player.slices, "choose", this.info, this.players)
                    }
                },
                computed: {
                    canSubmit() {
                        if (void 0 === this.player.numChoicesToMake) return !this.isSending;
                        const t = this.player.slices.filter((({
                            isSelected: t
                        }) => t)).length;
                        return !this.isSending && t === this.player.numChoicesToMake
                    },
                    text() {
                        const t = this.player.prompt.replace("[name]", "").replace("\n", " ").split("[/name]");
                        return {
                            title: t[0],
                            prompt: t[1]
                        }
                    },
                    initialRotation() {
                        var t;
                        return null !== (t = this.player.initialDegrees + 10) && void 0 !== t ? t : 10
                    }
                },
                watch: {
                    "player.slices": function(t) {
                        this.manager.sync(t)
                    }
                },
                methods: {
                    onSliceClick(t) {
                        return Bt(this, void 0, void 0, (function*() {
                            if (!this.isSending) {
                                this.isSending = !0, this.manager.toggleSlice(t);
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "choose",
                                        index: t
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.isSending = !1
                            }
                        }))
                    },
                    onSubmitClick() {
                        return Bt(this, void 0, void 0, (function*() {
                            if (!this.isSending) {
                                this.isSending = !0;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "submit"
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.isSending = !1
                            }
                        }))
                    }
                }
            });
            var kt = (0, p.Z)(Nt, U, [], !1, null, "72218387", null);
            kt.options.__file = "src/games/pp8/the-wheel/views/slices/ChooseSlices.vue";
            const Pt = kt.exports;
            var Zt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "guessing trivia scrollable"
                }, [n("PromptBox", {
                    attrs: {
                        "title-key": "GUESSING.BANNER"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "clue-box"
                }, [n("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.displayClue,
                        expression: "displayClue"
                    }],
                    ref: "clue"
                })]), t._v(" "), n("div", {
                    staticClass: "form-box"
                }, [n("form", {
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                }, [n("Input", {
                    attrs: {
                        "placeholder-key": "GUESSING.PLACEHOLDER"
                    },
                    model: {
                        value: t.value,
                        callback: function(e) {
                            t.value = e
                        },
                        expression: "value"
                    }
                }), t._v(" "), n("GemButton", {
                    staticClass: "submit-button",
                    attrs: {
                        "text-key": "SEND",
                        disabled: !t.canSubmit,
                        theme: "submit"
                    },
                    on: {
                        click: t.onSubmit
                    }
                })], 1)]), t._v(" "), n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(66261),
                        expression: "require('../../images/divider-long.inline.svg')"
                    }],
                    staticClass: "divider",
                    class: {
                        hidden: t.cluesList.length
                    }
                }), t._v(" "), n("transition-group", {
                    attrs: {
                        name: "clue-list",
                        tag: "ul"
                    }
                }, t._l(t.cluesList, (function(t) {
                    return n("li", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: t,
                            expression: "clue"
                        }],
                        key: t
                    })
                })), 0)], 1)
            };
            Zt._withStripped = !0;
            var Tt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "input-box",
                    class: {
                        disabled: t.disabled
                    }
                }, [t.isMultiline ? [s("svg", {
                    staticClass: "ui brown background",
                    attrs: {
                        viewBox: "0 0 1000 300",
                        preserveAspectRatio: "none"
                    }
                }, [s("polygon", {
                    staticClass: "ui white f l2",
                    attrs: {
                        points: "915 300 85 300 65 150 85 0 915 0 935 150 915 300"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f b",
                    attrs: {
                        points: "933.1 157 943.9 151.5 956.8 165 955.4 152.6 982.2 163.5 1000 150.4 982.2 135 956.1 146 957.4 135 942.6 146 933\n                    143.1 935 150 933.1 157"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f b",
                    attrs: {
                        points: "66.9 157 56.1 151.5 43.2 165 44.6 152.6 17.8 163.5 0 150.4 17.8 135 43.9 146 42.6 135 57.4 146 67 143.1 65 150\n                    66.9 157"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o6",
                    attrs: {
                        points: "85 0 95.6 14 904.4 14 915 0 85 0"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o7",
                    attrs: {
                        points: "95.6 14 79.6 150 65 150 85 0 95.6 14"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o2",
                    attrs: {
                        points: "79.6 150 65 150 85 300 95.6 286 79.6 150"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o2",
                    attrs: {
                        points: "95.6 286 85 300 915 300 904.4 286 95.6 286"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o5",
                    attrs: {
                        points: "920.4 150 935 150 915 300 904.4 286 920.4 150"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o2",
                    attrs: {
                        points: "904.4 14 915 0 935 150 920.4 150 904.4 14"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f nf s-m b",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "915 300 85 300 65 150 85 0 915 0 935 150 915 300"
                    }
                })]), t._v(" "), s("textarea", {
                    ref: "input",
                    attrs: {
                        "aria-label": t.label,
                        placeholder: t.placeholderText,
                        maxlength: t.maxLength,
                        autocapitalize: "sentences",
                        rows: "3"
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: t.onInput,
                        keydown: function(e) {
                            if (!e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter")) return null;
                            e.preventDefault()
                        }
                    }
                }), t._v(" "), s("p", {
                    staticClass: "length"
                }, [t._v(t._s(t.remainingCharacters))])] : [s("svg", {
                    staticClass: "ui brown background",
                    attrs: {
                        viewBox: "0 0 1000 140",
                        preserveAspectRatio: "none"
                    }
                }, [s("polygon", {
                    staticClass: "ui white f l2",
                    attrs: {
                        points: "915,140 85,140 65,70 85,0 915,0 935,70"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f b",
                    attrs: {
                        points: "933.1,77 943.9,71.5 956.8,85 955.4,72.6 982.2,83.5 1000,70.4 982.2,55 956.1,66 957.4,55 942.6,66 933,63.1\n                    935,70"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f b",
                    attrs: {
                        points: "66.9,77 56.1,71.5 43.2,85 44.6,72.6 17.8,83.5 0,70.4 17.8,55 43.9,66 42.6,55 57.4,66 67,63.1 65,70"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o6",
                    attrs: {
                        points: "85,0 95.6,14 904.4,14 915,0"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o7",
                    attrs: {
                        points: "95.6,14 79.6,70 65,70 85,0"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o2",
                    attrs: {
                        points: "79.6,70 65,70 85,140 95.6,126"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o2",
                    attrs: {
                        points: "95.6,126 85,140 915,140 904.4,126"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o5",
                    attrs: {
                        points: "920.4,70 935,70 915,140 904.4,126"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o2",
                    attrs: {
                        points: "904.4,14 915,0 935,70 920.4,70"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f nf s-m b",
                    attrs: {
                        "vector-effect": "non-scaling-stroke",
                        points: "915,140 85,140 65,70 85,0 915,0 935,70"
                    }
                })]), t._v(" "), s("input", {
                    ref: "input",
                    attrs: {
                        "aria-label": t.label,
                        placeholder: t.placeholderText
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: t.onInput
                    }
                })]], 2)
            };
            Tt._withStripped = !0;
            const Ot = l().extend({
                props: {
                    value: String,
                    disabled: Boolean,
                    placeholderKey: String,
                    placeholder: String,
                    label: String,
                    maxLength: Number,
                    isMultiline: Boolean
                },
                i18n: {
                    messages: y
                },
                computed: {
                    placeholderText() {
                        return this.placeholder ? this.placeholder : this.placeholderKey ? this.$t(this.placeholderKey) : ""
                    },
                    remainingCharacters() {
                        if (this.maxLength) return this.maxLength - this.value.length
                    }
                },
                watch: {
                    value(t, e) {
                        t !== e && (this.$refs.input.value = t)
                    }
                },
                methods: {
                    onInput(t) {
                        return e = this, s = void 0, i = function*() {
                            const e = t.target,
                                s = -1 === e.maxLength ? Number.MAX_SAFE_INTEGER : e.maxLength;
                            e.value.length > s ? e.value = e.value.substring(0, s) : (this.$emit("input", e.value), yield l().nextTick(), e.value !== this.value && (e.value = this.value))
                        }, new((n = void 0) || (n = Promise))((function(t, l) {
                            function a(t) {
                                try {
                                    o(i.next(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function c(t) {
                                try {
                                    o(i.throw(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function o(e) {
                                var s;
                                e.done ? t(e.value) : (s = e.value, s instanceof n ? s : new n((function(t) {
                                    t(s)
                                }))).then(a, c)
                            }
                            o((i = i.apply(e, s || [])).next())
                        }));
                        var e, s, n, i
                    }
                }
            });
            var Rt = (0, p.Z)(Ot, Tt, [], !1, null, "0b0388af", null);
            Rt.options.__file = "src/games/pp8/the-wheel/views/shared/Input.vue";
            const It = Rt.exports;
            const $t = l().extend({
                components: {
                    GemButton: P,
                    Input: It,
                    PromptBox: R
                },
                props: {
                    player: Object
                },
                data: () => ({
                    value: "",
                    displayClue: "",
                    isSending: !1
                }),
                computed: {
                    currentClue() {
                        return this.clues.length ? this.clues[0] : this.player.prompt
                    },
                    clues() {
                        return this.player.clues.slice().reverse()
                    },
                    cluesList() {
                        return this.player.clues.slice(0, -1).reverse()
                    },
                    canSubmit() {
                        return this.value.length > 0
                    }
                },
                watch: {
                    player(t, e) {
                        t.clues.length === e.clues.length && this.$emit("statusChange", {
                            type: "incorrect",
                            bannerKey: "GUESSING.INCORRECT",
                            timeout: 1500
                        })
                    },
                    currentClue(t) {
                        const e = this.$refs.clue;
                        u.p8.timeline().to(e, {
                            scale: 1.2,
                            opacity: 0,
                            duration: .15
                        }).set(e, {
                            scale: .8
                        }).call((() => {
                            this.displayClue = t
                        })).to(e, {
                            scale: 1,
                            opacity: 1,
                            duration: .2,
                            ease: "back.out(2)"
                        })
                    }
                },
                mounted() {
                    this.$vibrate(), this.displayClue = this.currentClue
                },
                methods: {
                    onSubmit() {
                        return t = this, e = void 0, n = function*() {
                            if (!this.isSending) {
                                this.isSending = !0;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "answer",
                                        answer: this.value
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.value = "", this.isSending = !1
                            }
                        }, new((s = void 0) || (s = Promise))((function(i, l) {
                            function a(t) {
                                try {
                                    o(n.next(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function c(t) {
                                try {
                                    o(n.throw(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function o(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                    t(e)
                                }))).then(a, c)
                            }
                            o((n = n.apply(t, e || [])).next())
                        }));
                        var t, e, s, n
                    }
                }
            });
            var Dt = (0, p.Z)($t, Zt, [], !1, null, "451b4290", null);
            Dt.options.__file = "src/games/pp8/the-wheel/views/guessing/Guessing.vue";
            const Gt = Dt.exports;
            var Ut = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "lobby scrollable trivia"
                }, [s("LobbyActions", {
                    attrs: {
                        player: t.player
                    }
                })], 1)
            };
            Ut._withStripped = !0;
            var Yt = s(13494);
            const Wt = l().extend({
                components: {
                    LobbyActions: Yt.Z
                },
                i18n: {
                    messages: y
                },
                props: {
                    info: Object,
                    players: Object,
                    player: Object
                },
                mounted() {
                    if (this.info.avatarId) {
                        const t = this.$t("ARIA.YOUR_AVATAR"),
                            e = this.$t(`ARIA.${this.info.avatarId.toUpperCase()}`);
                        this.$announce(`${t} ${e}`)
                    }
                }
            });
            var Kt = (0, p.Z)(Wt, Ut, [], !1, null, "0ea76297", null);
            Kt.options.__file = "src/games/pp8/the-wheel/views/Lobby.vue";
            const jt = Kt.exports;
            var Vt = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "matching trivia"
                }, [s("PromptBox", {
                    attrs: {
                        "title-key": "MATCHING.BANNER",
                        prompt: t.player.prompt
                    }
                }), t._v(" "), s("div", {
                    staticClass: "sliders-box"
                }, [s("transition-group", {
                    staticClass: "slider left",
                    attrs: {
                        name: "item-group",
                        tag: "ul",
                        "aria-label": t.player.headers[0]
                    }
                }, t._l(t.items[0], (function(e, n) {
                    return s("li", {
                        key: e.text,
                        staticClass: "item",
                        class: {
                            selected: t.selected[0] === n
                        }
                    }, [s("button", {
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onItemClick(0, n)
                            }
                        }
                    }, [s("span", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.text,
                            expression: "item.text"
                        }]
                    })])])
                })), 0), t._v(" "), s("transition-group", {
                    staticClass: "slider right",
                    attrs: {
                        name: "item-group",
                        tag: "ul",
                        "aria-label": t.player.headers[1]
                    }
                }, t._l(t.items[1], (function(e, n) {
                    return s("li", {
                        key: e.text,
                        staticClass: "item",
                        class: {
                            selected: t.selected[1] === n
                        }
                    }, [s("button", {
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.onItemClick(1, n)
                            }
                        }
                    }, [s("span", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.text,
                            expression: "item.text"
                        }]
                    })])])
                })), 0), t._v(" "), s("ArchesBox", {
                    attrs: {
                        headers: t.player.headers
                    }
                })], 1), t._v(" "), s("div", {
                    staticClass: "selections-box"
                }, [s("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.selectedItems[0],
                        expression: "selectedItems[0]"
                    }],
                    staticClass: "selection left"
                }), t._v(" "), s("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.selectedItems[1],
                        expression: "selectedItems[1]"
                    }],
                    staticClass: "selection right"
                }), t._v(" "), s("svg", {
                    staticClass: "arrows",
                    attrs: {
                        viewBox: "0 0 160 120",
                        width: "160",
                        height: "120"
                    }
                }, [s("polygon", {
                    staticClass: "field f b",
                    attrs: {
                        points: "160,60 80,120 0,60 80,0"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "ui brown f d2",
                    attrs: {
                        points: "142.8,60 80,102.8 17.2,60 80,17.2 90.8,24.5"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "ampersand f ns b",
                    attrs: {
                        d: "M85.6,74l-12.4,4.9l-9.6-4.2l-3.8-7.1l3.6-8.1l4.2-2.9l-3.7-6.1l1.6-9.2l7.9-3.9l7.5,0.6l5.5,6.1 C81.1,57.1,\n                    81.9,55,81.5,56l-3.4,1.6l8.2,7.8l1.2-5.4l-3.3-6.7l16.8,0.8l-7.7,5.6l-2.3,9.1l3.7,2.3l3.2-6.6l5.2,8.7l-8.9,\n                    6.1 L85.6,74z M69.6,62.4l-1.1,3.8l2.9,4.7l4.7,1.8l4.8-2.3l-9.6-8.8L69.6,62.4z M71.5,48.7l2.6,\n                    4.2l1.4-0.6l3.8-6.1l-4.3-2.9L71.5,48.7z"
                    }
                })])])], 1)
            };
            Vt._withStripped = !0;
            var Ht = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "arches-box"
                }, [s("svg", {
                    staticClass: "f-f",
                    attrs: {
                        viewBox: "0 0 1000 100",
                        preserveAspectRatio: "none"
                    }
                }, [s("rect", {
                    staticClass: "field f ns b",
                    attrs: {
                        x: "482",
                        width: "36",
                        height: "100"
                    }
                }), t._v(" "), s("rect", {
                    staticClass: "field f ns l1",
                    attrs: {
                        x: "482",
                        width: "12",
                        height: "100"
                    }
                }), t._v(" "), s("rect", {
                    staticClass: "field f ns d4",
                    attrs: {
                        x: "509",
                        width: "13",
                        height: "100"
                    }
                })]), t._v(" "), s("svg", {
                    staticClass: "f-a arch arch-left game",
                    attrs: {
                        viewBox: "0 0 500 220",
                        width: "500",
                        height: "220"
                    }
                }, [s("polygon", {
                    staticClass: "f b ns",
                    attrs: {
                        points: "0,0 0,197.6 5.8,169.2 41.7,119.1 109.3,74.8 182.4,53.4 241.9,47.8 328.5,56.2 408.4,85.5 463.3,126.6\n                493.6,179 500,212 500,0"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d4",
                    attrs: {
                        points: "9.6,175.2 5.8,169.2 0,197.6 0,220"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d5",
                    attrs: {
                        points: "41.7,119.1 46.3,126.1 9.6,175.2 5.8,169.2"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d5",
                    attrs: {
                        points: "109.3,74.8 112.6,83.8 46.3,126.1 41.7,119.1"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d4",
                    attrs: {
                        points: "185.2,60.4 182.4,53.4 109.3,74.8 112.6,83.8"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d3",
                    attrs: {
                        points: "243.4,55.8 241.9,47.8 182.4,53.4 185.2,60.4"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d2",
                    attrs: {
                        points: "328.5,56.2 330.5,65.2 243.4,55.8 241.9,47.8"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d2",
                    attrs: {
                        points: "408.4,85.5 407.9,92.5 330.5,65.2 328.5,56.2"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d1",
                    attrs: {
                        points: "463.3,126.6 462.5,131.6 407.9,92.5 408.4,85.5"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f l1",
                    attrs: {
                        points: "493.6,179 492.6,183 462.5,131.6 463.3,126.6"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f l1",
                    attrs: {
                        points: "500,212 500,220 492.6,183 493.6,179"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text-path",
                    attrs: {
                        id: "left-text-path",
                        d: "M1.3,183C14.1,100.5,120.5,36.3,250,36.3 c129.9,0,236.7,64.7,248.8,147.6"
                    }
                }), t._v(" "), s("text", {
                    staticClass: "slider-text",
                    attrs: {
                        "text-anchor": "middle",
                        dx: "-9",
                        dy: "4"
                    }
                }, [s("textPath", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.headers[0],
                        expression: "headers[0]"
                    }],
                    attrs: {
                        href: "#left-text-path",
                        startOffset: "50%"
                    }
                })])]), t._v(" "), s("svg", {
                    staticClass: "f-a arch arch-right game",
                    attrs: {
                        viewBox: "0 0 500 220",
                        width: "500",
                        height: "220"
                    }
                }, [s("polygon", {
                    staticClass: "f b",
                    attrs: {
                        points: "500,0 500,197.6 494.2,169.2 458.3,119.1 390.7,74.8 317.6,53.4 258.1,47.8 171.5,56.2 91.6,85.5 36.7,\n                126.6 6.4,179 0,212 0,0"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f l2",
                    attrs: {
                        points: "490.4,175.2 494.2,169.2 500,197.6 500,220"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f l1",
                    attrs: {
                        points: "458.3,119.1 453.7,126.1 490.4,175.2 494.2,169.2"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d1",
                    attrs: {
                        points: "390.7,74.8 387.4,83.8 453.7,126.1 458.3,119.1"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d1",
                    attrs: {
                        points: "314.8,60.4 317.6,53.4 390.7,74.8 387.4,83.8"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d2",
                    attrs: {
                        points: "256.6,55.8 258.1,47.8 317.6,53.4 314.8,60.4"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d3",
                    attrs: {
                        points: "171.5,56.2 169.5,65.2 256.6,55.8 258.1,47.8"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d4",
                    attrs: {
                        points: "91.6,85.5 92.1,92.5 169.5,65.2 171.5,56.2"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d4",
                    attrs: {
                        points: "36.7,126.6 37.5,131.6 92.1,92.5 91.6,85.5"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d5",
                    attrs: {
                        points: "6.4,179 7.4,183 37.5,131.6 36.7,126.6"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f d4",
                    attrs: {
                        points: "0,212 0,220 7.4,183 6.4,179"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text-path",
                    attrs: {
                        id: "right-text-path",
                        d: "M1.2,183.8C13.3,101,120.1,36.3,250,36.3 c129.5,0,235.9,64.2,248.7,146.7"
                    }
                }), t._v(" "), s("text", {
                    staticClass: "slider-text",
                    attrs: {
                        "text-anchor": "middle",
                        dx: "-9",
                        dy: "4"
                    }
                }, [s("textPath", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.headers[1],
                        expression: "headers[1]"
                    }],
                    attrs: {
                        href: "#right-text-path",
                        startOffset: "50%"
                    }
                })])]), t._v(" "), s("div", [s("svg", {
                    staticClass: "f-a",
                    attrs: {
                        viewBox: "0 0 1000 240",
                        width: "1000",
                        height: "240"
                    }
                }, [s("rect", {
                    staticClass: "f b",
                    attrs: {
                        x: "482",
                        width: "36",
                        height: "235"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "flame",
                    attrs: {
                        points: "497.7,140.2 517.7,162.5 523.4,208.6 520.2,225.4 478.9,225.4 499.1,153.9"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "flame",
                    attrs: {
                        points: "516.3,208.4 516.3,171 505.5,192 468.5,156 476.9,196.8 460.3,203.3 474,225.4 511,225.4"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "flame",
                    attrs: {
                        points: "495.7,225.4 488,216.7 492,193.6 504,203.6 520,199.5 525.3,177.9 534.7,201.5 523,225.4"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "field f d5",
                    attrs: {
                        points: "520.4,247.3 479.6,243.3 479.6,240 520.4,240"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "field f b",
                    attrs: {
                        points: "466.1,225.4 471.7,240 526.6,240 533.9,224.8"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "field f l1",
                    attrs: {
                        points: "487.3,225.3 491.3,240 471.7,240 466.1,225.4"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "field f d4",
                    attrs: {
                        points: "533.9,224.8 526.6,240 509.8,240 512.1,225"
                    }
                })]), t._v(" "), s("svg", {
                    staticClass: "f-a cap-bottom",
                    attrs: {
                        viewBox: "0 0 1000 25",
                        width: "1000",
                        height: "25"
                    }
                }, [s("polygon", {
                    staticClass: "field f b",
                    attrs: {
                        points: "533.9,25 528.3,6.9 473.4,6.9 466.1,25"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "field f l1",
                    attrs: {
                        points: "466.1,25 473.4,6.9 490.2,6.9 487.7,25"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "field f d4",
                    attrs: {
                        points: "512.7,25 508.7,6.9 528.3,6.9 533.9,25"
                    }
                })])])])
            };
            Ht._withStripped = !0;
            const Ft = l().extend({
                props: {
                    headers: Array
                }
            });
            var qt = (0, p.Z)(Ft, Ht, [], !1, null, "6508ff64", null);
            qt.options.__file = "src/games/pp8/the-wheel/views/matching/ArchesBox.vue";
            const Xt = qt.exports;
            const Qt = l().extend({
                components: {
                    ArchesBox: Xt,
                    PromptBox: R
                },
                props: {
                    player: Object
                },
                data: () => ({
                    isSending: !1,
                    selected: [-1, -1]
                }),
                computed: {
                    canSend() {
                        return -1 !== this.selected[0] && -1 !== this.selected[1] && !this.isSending
                    },
                    selectedItems() {
                        var t, e, s, n;
                        const i = ["", ""];
                        return this.selected[0] >= 0 && (i[0] = null !== (e = null === (t = this.items[0][this.selected[0]]) || void 0 === t ? void 0 : t.text) && void 0 !== e ? e : ""), this.selected[1] >= 0 && (i[1] = null !== (n = null === (s = this.items[1][this.selected[1]]) || void 0 === s ? void 0 : s.text) && void 0 !== n ? n : ""), i
                    },
                    items() {
                        return [this.player.items[0].map(((t, e) => ({
                            text: t.text,
                            isAccepted: t.isAccepted,
                            index: e
                        }))).filter((t => !t.isAccepted)), this.player.items[1].map(((t, e) => ({
                            text: t.text,
                            isAccepted: t.isAccepted,
                            index: e
                        }))).filter((t => !t.isAccepted))]
                    }
                },
                watch: {
                    "player.freezeMs": function(t) {
                        t ? this.$emit("statusChange", {
                            type: "frozen",
                            bannerKey: "MATCHING.FROZEN"
                        }) : this.$emit("statusChange", {
                            type: "none"
                        })
                    },
                    "player.items": function([t], [e]) {
                        for (let s = 0; s < t.length; s++)
                            if (t[s].isAccepted && !e[s].isAccepted) {
                                this.$emit("statusChange", {
                                    type: "correct",
                                    bannerKey: "MATCHING.CORRECT",
                                    timeout: 2e3
                                });
                                break
                            }
                    }
                },
                beforeDestroy() {
                    this.$emit("statusChange", {
                        type: "none"
                    })
                },
                methods: {
                    onItemClick(t, e) {
                        this.isSending || (this.selected[t] !== e ? (this.$set(this.selected, t, e), this.selected[0] >= 0 && this.selected[1] >= 0 && this.submit()) : this.$set(this.selected, t, -1))
                    },
                    submit() {
                        var t, e, s, n, i, l;
                        return s = this, n = void 0, l = function*() {
                            if (!this.canSend) return;
                            const s = null === (t = this.items[0][this.selected[0]]) || void 0 === t ? void 0 : t.index,
                                n = null === (e = this.items[1][this.selected[1]]) || void 0 === e ? void 0 : e.index;
                            if (void 0 !== s && void 0 !== n) {
                                this.isSending = !0;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "answer",
                                        answer: [s, n]
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.$set(this.selected, 0, -1), this.$set(this.selected, 1, -1), this.isSending = !1
                            }
                        }, new((i = void 0) || (i = Promise))((function(t, e) {
                            function a(t) {
                                try {
                                    o(l.next(t))
                                } catch (t) {
                                    e(t)
                                }
                            }

                            function c(t) {
                                try {
                                    o(l.throw(t))
                                } catch (t) {
                                    e(t)
                                }
                            }

                            function o(e) {
                                var s;
                                e.done ? t(e.value) : (s = e.value, s instanceof i ? s : new i((function(t) {
                                    t(s)
                                }))).then(a, c)
                            }
                            o((l = l.apply(s, n || [])).next())
                        }))
                    }
                }
            });
            var Jt = (0, p.Z)(Qt, Vt, [], !1, null, "337a0260", null);
            Jt.options.__file = "src/games/pp8/the-wheel/views/matching/Matching.vue";
            const te = Jt.exports;
            var ee = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "numeric trivia scrollable"
                }, [n("PromptBox", {
                    attrs: {
                        "title-key": "NUMERIC.BANNER",
                        prompt: t.player.prompt
                    }
                }), t._v(" "), n("DigitsBox", {
                    attrs: {
                        unit: t.player.unit,
                        value: t.value
                    }
                }), t._v(" "), n("HandsetBox", {
                    on: {
                        numberClicked: t.onNumberClicked,
                        backspaceClicked: t.onBackspaceClicked
                    }
                }), t._v(" "), n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(66261),
                        expression: "require('../../images/divider-long.inline.svg')"
                    }],
                    staticClass: "divider"
                }), t._v(" "), n("GemButton", {
                    staticClass: "submit-button",
                    attrs: {
                        "text-key": "SUBMIT",
                        disabled: !t.hasChanged,
                        theme: "submit"
                    },
                    on: {
                        click: t.onSubmitClick
                    }
                })], 1)
            };
            ee._withStripped = !0;
            var se = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "digits-box"
                }, [t.unit ? s("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.unit,
                        expression: "unit"
                    }],
                    staticClass: "unit"
                }) : t._e(), t._v(" "), s("div", {
                    staticClass: "panel"
                }, [s("svg", {
                    attrs: {
                        viewBox: "0 0 0 0",
                        width: "0",
                        height: "0"
                    }
                }, [s("defs", [s("linearGradient", {
                    attrs: {
                        id: "shader-gradient",
                        gradientUnits: "userSpaceOnUse",
                        x1: "501.2239",
                        y1: "166.1697",
                        x2: "501.2239",
                        y2: "23.5091"
                    }
                }, [s("stop", {
                    staticStyle: {
                        "stop-color": "#000",
                        "stop-opacity": "0.5"
                    },
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), s("stop", {
                    staticStyle: {
                        "stop-color": "#000",
                        "stop-opacity": "0"
                    },
                    attrs: {
                        offset: "0.33"
                    }
                }), t._v(" "), s("stop", {
                    staticStyle: {
                        "stop-color": "#000",
                        "stop-opacity": "0"
                    },
                    attrs: {
                        offset: "0.66"
                    }
                }), t._v(" "), s("stop", {
                    staticStyle: {
                        "stop-color": "#000",
                        "stop-opacity": "0.5"
                    },
                    attrs: {
                        offset: "1"
                    }
                })], 1)], 1)]), t._v(" "), s("svg", {
                    staticClass: "background ui brown",
                    attrs: {
                        viewBox: "0 0 1000 190"
                    }
                }, [s("polygon", {
                    staticClass: "f d1",
                    attrs: {
                        points: "885.9,90 876.9,80.2 870.1,90 867.2,90 835.5,0 166.9,0 135.2,90 129.9,90 123.1,80.2 114.1,90 0,90 0,100 114.2,\n                    100 120.3,111.2 130.9,101.1 135.6,101.1 166.9,190 835.5,190 866.8,101.1 869.1,101.1 879.7,111.2 885.8,100 1000,\n                    100 1000,90"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o6",
                    attrs: {
                        points: "177.8,12.4 186.4,22.2 186.4,167.8 177.8,177.6"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "d o4",
                    attrs: {
                        points: "186.4,22.2 177.8,12.4 824.7,12.4 816,22.2"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o1",
                    attrs: {
                        points: "186.4,167.8 177.8,177.6 824.7,177.6 816,167.8"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "l o3",
                    attrs: {
                        points: "824.7,12.4 816,22.2 816,167.8 824.7,177.6"
                    }
                }), t._v(" "), s("rect", {
                    staticClass: "d o4",
                    attrs: {
                        x: "310.6",
                        y: "22.2",
                        width: "1.8",
                        height: "145.5"
                    }
                }), t._v(" "), s("rect", {
                    staticClass: "l o1",
                    attrs: {
                        x: "312.4",
                        y: "22.2",
                        width: "1.8",
                        height: "145.5"
                    }
                }), t._v(" "), s("rect", {
                    staticClass: "d o4",
                    attrs: {
                        x: "436.5",
                        y: "22.2",
                        width: "1.8",
                        height: "145.5"
                    }
                }), t._v(" "), s("rect", {
                    staticClass: "l o1",
                    attrs: {
                        x: "438.3",
                        y: "22.2",
                        width: "1.8",
                        height: "145.5"
                    }
                }), t._v(" "), s("rect", {
                    staticClass: "d o4",
                    attrs: {
                        x: "562.4",
                        y: "22.2",
                        width: "1.8",
                        height: "145.5"
                    }
                }), t._v(" "), s("rect", {
                    staticClass: "l o1",
                    attrs: {
                        x: "564.2",
                        y: "22.2",
                        width: "1.8",
                        height: "145.5"
                    }
                }), t._v(" "), s("rect", {
                    staticClass: "d o4",
                    attrs: {
                        x: "688.3",
                        y: "22.2",
                        width: "1.8",
                        height: "145.5"
                    }
                }), t._v(" "), s("rect", {
                    staticClass: "l o1",
                    attrs: {
                        x: "690.1",
                        y: "22.2",
                        width: "1.8",
                        height: "145.5"
                    }
                })]), t._v(" "), s("div", {
                    staticClass: "digits"
                }, t._l(t.digitCount, (function(e) {
                    return s("div", {
                        key: e,
                        staticClass: "numbers-container",
                        class: {
                            significant: t.significant[e - 1]
                        }
                    }, [s("div", {
                        staticClass: "numbers",
                        style: "margin-top: " + t.margins[e - 1] + "%;"
                    }, [s("p", [t._v("9")]), t._v(" "), s("p", [t._v("0")]), t._v(" "), s("p", [t._v("1")]), t._v(" "), s("p", [t._v("2")]), t._v(" "), s("p", [t._v("3")]), t._v(" "), s("p", [t._v("4")]), t._v(" "), s("p", [t._v("5")]), t._v(" "), s("p", [t._v("6")]), t._v(" "), s("p", [t._v("7")]), t._v(" "), s("p", [t._v("8")]), t._v(" "), s("p", [t._v("9")]), t._v(" "), s("p", [t._v("0")])])])
                })), 0), t._v(" "), s("svg", {
                    staticClass: "foreground",
                    attrs: {
                        viewBox: "0 0 1000 190"
                    }
                }, [s("rect", {
                    staticClass: "shader",
                    attrs: {
                        x: "186.4",
                        y: "22.2",
                        width: "629.5",
                        height: "145.5"
                    }
                })])])])
            };
            se._withStripped = !0, s(65646);
            const ne = l().extend({
                props: {
                    unit: String,
                    value: Number
                },
                data: () => ({
                    digitCount: 5
                }),
                computed: {
                    roundedValue() {
                        return Math.round(this.value)
                    },
                    margins() {
                        return this.roundedValue.toString().padStart(this.digitCount, "0").split("").map((t => -(58 + 76 * parseInt(t, 10))))
                    },
                    significant() {
                        return [this.roundedValue >= 1e4, this.roundedValue >= 1e3, this.roundedValue >= 100, this.roundedValue >= 10, !0]
                    }
                }
            });
            var ie = (0, p.Z)(ne, se, [], !1, null, "7fd86d44", null);
            ie.options.__file = "src/games/pp8/the-wheel/views/numeric/DigitsBox.vue";
            const le = ie.exports;
            var ae = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "handset-box"
                }, [s("svg", {
                    staticClass: "drawer",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [s("radialGradient", {
                    attrs: {
                        id: "number-gradient",
                        cx: "125.3406",
                        cy: "134.0432",
                        r: "146.1032",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [s("stop", {
                    staticStyle: {
                        "stop-color": "#FFFFFF"
                    },
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), s("stop", {
                    staticStyle: {
                        "stop-color": "#FDFDFA"
                    },
                    attrs: {
                        offset: "0.25"
                    }
                }), t._v(" "), s("stop", {
                    staticStyle: {
                        "stop-color": "#DDDFBC"
                    },
                    attrs: {
                        offset: "1"
                    }
                })], 1)], 1), t._v(" "), t._l(t.buttons, (function(e) {
                    return s("button", {
                        key: e,
                        attrs: {
                            "aria-label": e
                        },
                        on: {
                            click: function(s) {
                                return t.onButtonClick(e)
                            }
                        }
                    }, ["Backspace" === e ? [s("svg", {
                        staticClass: "ui brown background",
                        attrs: {
                            viewBox: "0 0 218 220"
                        }
                    }, [s("polygon", {
                        staticClass: "f d2",
                        attrs: {
                            points: "171.4,4.7 74.8,4.7 3.8,66.4 3.8,153.6 74.8,215.3 171.4,215.3 214.2,181.9 214.2,38.1"
                        }
                    })]), t._v(" "), s("svg", {
                        staticClass: "ui brown inside",
                        attrs: {
                            viewBox: "0 0 218 220"
                        }
                    }, [s("polygon", {
                        staticClass: "f d1",
                        attrs: {
                            points: "171.4,4.7 74.8,4.7 3.8,66.4 3.8,153.6 74.8,215.3 171.4,215.3 214.2,181.9 214.2,38.1"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "l o7",
                        attrs: {
                            points: "74.8,4.7 93.7,28.9 41.8,71.3 3.8,66.4"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "d o1",
                        attrs: {
                            points: "171.4,4.7 157.3,33.6 176.2,52.5 214.2,38.1"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "d o7",
                        attrs: {
                            points: "214.2,181.9 176.2,167.8 157.3,186.6 171.4,215.3"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "d o4",
                        attrs: {
                            points: "3.8,153.6 41.8,139.5 89,186.6 74.8,215.3"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "l o1",
                        attrs: {
                            points: "41.8,71.3 41.8,139.5 3.8,153.6 3.8,66.4"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "l o1",
                        attrs: {
                            points: "157.3,33.6 171.4,4.7 74.8,4.7 93.7,28.9"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "d o5",
                        attrs: {
                            points: "176.2,52.5 214.2,38.1 214.2,181.9 176.2,167.8"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "d o5",
                        attrs: {
                            points: "89,186.6 157.3,186.6 171.4,215.3 74.8,215.3"
                        }
                    }), t._v(" "), s("path", {
                        staticClass: "ui white f b",
                        attrs: {
                            d: "M159.7,77.4l-73.9-1.7l-39.4,34l41.9,34.8l69.4-0.8l7.8-7.4V88.3L159.7,77.4z\n                        M141.3,128.9l-20.6,1.8l3.1-6.5l-4.7-7.9l-6.3,8.9l3.3,4.9L96,129.7l18.9-19.7l-8.6-10.8l-7.6-6.6l23.9-0.6l-4.7,\n                        6.6l3.4,6.3l8.5-6.7l-3.5-5.6l18.4-1.3l-19.3,19.1L141.3,128.9z"
                        }
                    })]), t._v(" "), s("svg", {
                        staticClass: "ui brown foreground",
                        attrs: {
                            viewBox: "0 0 218 220"
                        }
                    }, [s("path", {
                        staticClass: "f d1",
                        attrs: {
                            d: "M172.4,220L72,218.1L0,154V65L72.9,0l100.4,2.8l43.7,33.9l0.9,145.6L172.4,220z\n                        M76.8,211.5h93.7l40.9-30l-1.9-142l-39-31.9L75.8,8.5L7.5,68.7v82.6L76.8,211.5z"
                        }
                    })])] : null !== e ? [s("svg", {
                        staticClass: "ui brown background",
                        attrs: {
                            viewBox: "0 0 218 220"
                        }
                    }, [s("polygon", {
                        staticClass: "f d2",
                        attrs: {
                            points: "171.4,4.7 46.6,4.7 3.8,38.1 3.8,181.9 46.6,215.3 171.4,215.3 214.2,181.9 214.2,38.1"
                        }
                    })]), t._v(" "), s("svg", {
                        staticClass: "ui white inside",
                        attrs: {
                            "aria-hidden": "true",
                            viewBox: "0 0 218 220"
                        }
                    }, [s("polygon", {
                        staticClass: "base",
                        attrs: {
                            points: "171.4,4.7 46.6,4.7 3.8,38.1 3.8,181.9 46.6,215.3 171.4,215.3 214.2,181.9 214.2,38.1"
                        }
                    }), t._v(" "), s("path", {
                        staticClass: "f b",
                        attrs: {
                            d: "M204,30.1l-86.8,70.6l65.5-87.2l-11.2-8.7h-1.6l-56.1,93.7l28.5-93.7h-14.6l-17.9,92.7l-5-92.7H90.9l14.9,\n                        93.1L66.1,4.7H49.3l52.8,94.9L27.4,19.7l-12.5,9.7l84.4,73.2L3.8,54.1v16.4l93.8,35.9L3.8,94.9v14l93.6,1.5L3.8,\n                        132.1v14.9l94.7-32.8L3.8,176v5.9l9.2,7.1l87.9-71.5l-66.3,88.3l12,9.4h0.6l57.1-95.4l-29,95.4H90l18.2-94.4l5.1,\n                        94.4h14.1l-15.2-94.9l40.4,94.9h17l-53.7-96.7l75.7,81l12.6-9.8l-85.4-74.1l95.5,48.5v-16.4L120.4,112l93.8,\n                        11.4v-14l-93.6-1.5l93.6-21.8V71.2L119.5,104l94.7-61.7v-4.2L204,30.1z\n                        M61.4,42L42,8.3L33.4,15l25.9,28.6C60.4,44.6,62.1,43.4,61.4,42z\n                        M41.3,62.3l-33-27.7l-4.6,3.6v7.3l36.1,19C41.3,65.1,42.5,63.3,41.3,62.3z\n                        M34.4,144.1L3.8,155.2v11.3l31.8-20.1C36.8,145.6,35.9,143.6,34.4,144.1z\n                        M27,116.6l-23.2,0v7.7l23.5-5.1C28.7,118.8,28.5,116.6,27,116.6z\n                        M29.4,88.1L3.8,78.8v8.5l25,3.4C30.2,90.8,30.8,88.7,29.4,88.1z\n                        M166.6,50.9L197.5,25l-8.8-6.9l-24,30.9C163.9,50.3,165.4,51.8,166.6,50.9z\n                        M143.2,34.6l17.3-29.9h-10.4l-9.2,28.8C140.4,35,142.4,35.9,143.2,34.6z\n                        M115.6,27.3l4-22.6h-7.5l0.9,22.4C113.2,28.6,115.3,28.8,115.6,27.3z\n                        M87.2,29.9L82.8,4.7h-8.7l10.6,25.9C85.4,32,87.4,31.4,87.2,29.9z\n                        M74.3,183.7L56,215.3h10.9l9.8-30.5C77,183.3,75.1,182.4,74.3,183.7z\n                        M50.9,167.4l-31.7,26.5l9,7l24.6-31.7C53.6,168,52.1,166.5,50.9,167.4z\n                        M188.1,130.2l26.1,9.6v-8.6l-25.5-3.5C187.2,127.5,186.7,129.6,188.1,130.2z\n                        M183,74.2l31.2-11.3V51.5l-32.4,20.4C180.6,72.7,181.6,74.7,183,74.2z\n                        M190.5,101.7l23.7,0V94l-24,5.2C188.8,99.5,189,101.7,190.5,101.7z\n                        M130.2,188.4l4.7,26.9h9.1l-11.3-27.6C132.1,186.3,130,186.9,130.2,188.4z\n                        M101.8,191l-4.3,24.3h7.8l-0.9-24.1C104.3,189.7,102.2,189.5,101.8,191z\n                        M176.1,156.1l34.3,28.8l2-1.6l1.8-2.7v-7.4l-36.7-19.3C176.2,153.3,175,155,176.1,156.1z\n                        M156,176.3l20.3,35.2l8.9-6.9l-27-29.8C157.1,173.7,155.3,175,156,176.3z"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "l o7",
                        attrs: {
                            points: "46.6,4.7 65.4,28.9 41.8,43 3.8,38.1"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "d o1",
                        attrs: {
                            points: "171.4,4.7 157.3,33.6 176.2,52.5 214.2,38.1"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "d o7",
                        attrs: {
                            points: "214.2,181.9 176.2,167.8 157.3,186.6 171.4,215.3"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "d o4",
                        attrs: {
                            points: "3.8,181.9 41.8,167.8 60.7,186.6 46.6,215.3"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "l o1",
                        attrs: {
                            points: "41.8,43 41.8,167.8 3.8,181.9 3.8,38.1"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "l o1",
                        attrs: {
                            points: "157.3,33.6 171.4,4.7 46.6,4.7 65.4,28.9"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "d o5",
                        attrs: {
                            points: "176.2,52.5 214.2,38.1 214.2,181.9 176.2,167.8"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "d o5",
                        attrs: {
                            points: "60.7,186.6 157.3,186.6 171.4,215.3 46.6,215.3"
                        }
                    }), t._v(" "), s("text", {
                        staticClass: "f ui brown d1 number-text shadowed",
                        attrs: {
                            "text-anchor": "middle",
                            x: "110",
                            y: "155"
                        }
                    }, [t._v(t._s(e))])]), t._v(" "), s("svg", {
                        staticClass: "ui brown foreground",
                        attrs: {
                            viewBox: "0 0 218 220"
                        }
                    }, [s("path", {
                        staticClass: "f d1",
                        attrs: {
                            d: "M172.4,220l-128.7-1.9L0,182.3V36.7L44.6,0l128.7,2.8l43.7,33.9l0.9,145.6L172.4,220z M48.5,211.5h122l40.9-30\n                        l-1.9-142l-39-31.9L47.5,8.5l-40,31.9v139.2L48.5,211.5z"
                        }
                    })])] : t._e()], 2)
                }))], 2)
            };
            ae._withStripped = !0;
            const ce = l().extend({
                computed: {
                    buttons: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, "Backspace"]
                },
                methods: {
                    onButtonClick(t) {
                        null !== t && ("Backspace" !== t ? this.$emit("numberClicked", t) : this.$emit("backspaceClicked"))
                    }
                }
            });
            var oe = (0, p.Z)(ce, ae, [], !1, null, "83ecf6ee", null);
            oe.options.__file = "src/games/pp8/the-wheel/views/numeric/HandsetBox.vue";
            const re = oe.exports;
            var pe = function(t, e, s, n) {
                return new(s || (s = Promise))((function(i, l) {
                    function a(t) {
                        try {
                            o(n.next(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function c(t) {
                        try {
                            o(n.throw(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function o(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(a, c)
                    }
                    o((n = n.apply(t, e || [])).next())
                }))
            };
            const he = l().extend({
                components: {
                    DigitsBox: le,
                    GemButton: P,
                    HandsetBox: re,
                    PromptBox: R
                },
                props: {
                    player: Object
                },
                data: () => ({
                    hasChanged: !1,
                    hasSent: !1,
                    isSending: !1,
                    digits: "0"
                }),
                computed: {
                    value() {
                        return parseInt(this.digits, 10)
                    }
                },
                mounted() {
                    this.$vibrate(), window.addEventListener("keyup", this.onKeyUp)
                },
                beforeDestroy() {
                    window.removeEventListener("keyup", this.onKeyUp)
                },
                methods: {
                    onKeyUp(t) {
                        "Backspace" !== t.key ? /[^0-9]/.test(t.key) || this.onNumberClicked(parseInt(t.key, 10)) : this.onBackspaceClicked()
                    },
                    onNumberClicked(t) {
                        this.hasChanged = !0, this.digits.length >= 5 || ("0" === this.digits ? this.digits = `${t}` : this.digits = `${this.digits}${t}`, this.onChange())
                    },
                    onBackspaceClicked() {
                        "0" !== this.digits && (1 === this.digits.length ? this.digits = "0" : this.digits = this.digits.slice(0, -1), this.onChange())
                    },
                    onChange() {
                        return pe(this, void 0, void 0, (function*() {
                            if (!this.isSending) {
                                this.hasChanged = !0, this.isSending = !0, this.hasSent = !0, this.$announce(`${this.value}`);
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "answer",
                                        answer: this.value
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.isSending = !1
                            }
                        }))
                    },
                    onSubmitClick() {
                        return pe(this, void 0, void 0, (function*() {
                            if (!this.isSending) {
                                this.isSending = !0, this.hasSent = !0;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "submit"
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.isSending = !1
                            }
                        }))
                    }
                }
            });
            var de = (0, p.Z)(he, ee, [], !1, null, "05553b0c", null);
            de.options.__file = "src/games/pp8/the-wheel/views/numeric/Numeric.vue";
            const ve = de.exports;
            var ue = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "place-slices trivia",
                    class: {
                        submitted: t.isSubmitted
                    }
                }, [s("PromptBox", {
                    attrs: {
                        "title-key": t.titleKey
                    }
                }), t._v(" "), s("div", {
                    staticClass: "ui-container"
                }, [s("WheelBox", {
                    attrs: {
                        category: "place",
                        definitions: t.manager.definitions,
                        rotation: t.initialRotation,
                        "is-active": 0 !== t.unplacedSlices,
                        "should-show-face": !t.isPatched
                    },
                    on: {
                        sliceClicked: t.onSliceClick,
                        deletePressed: t.onUndoClick
                    }
                }), t._v(" "), t.isPatched ? s("UndoButton", {
                    attrs: {
                        disabled: !t.history.length
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.onUndoClick.apply(null, arguments)
                        }
                    }
                }) : t._e(), t._v(" "), t.isPatched ? s("SubmitButton", {
                    attrs: {
                        disabled: 0 !== t.unplacedSlices
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.onSubmitClick.apply(null, arguments)
                        }
                    }
                }) : t._e()], 1)], 1)
            };
            ue._withStripped = !0;
            var Ce = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("button", {
                    staticClass: "undo-button"
                }, [s("svg", {
                    attrs: {
                        viewBox: "0 0 200 140",
                        "aria-hidden": "true"
                    }
                }, [s("polygon", {
                    staticClass: "f ui brown d1",
                    attrs: {
                        points: "105.95 53.38 116.5 59.65 122.21 48.56 122.5 25.52 108.29 7.15 86.32 0 65.08 6.85 51.61 25.96 49.41 42.44\n                51.61 50.17 41.5 55.71 68.01 70 71.53 38.5 62.45 44.19 61.57 32.81 68.16 20.13 81.78 12.54 96.43 14.15 109.02\n                25.38 111.51 42.88 105.95 53.38"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text-path",
                    attrs: {
                        id: "undo-text-path",
                        d: "M0,140a592,592,0,0,1,200-35"
                    }
                }), t._v(" "), s("text", {
                    attrs: {
                        "text-anchor": "middle"
                    }
                }, [s("textPath", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "UNDO",
                        expression: "'UNDO'"
                    }],
                    staticClass: "undo-text f ui brown d1",
                    attrs: {
                        href: "#undo-text-path",
                        startOffset: "50%"
                    }
                })])]), t._v(" "), s("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "UNDO",
                        expression: "'UNDO'"
                    }],
                    staticClass: "sr"
                })])
            };
            Ce._withStripped = !0;
            const ge = l().extend({
                i18n: {
                    messages: y
                }
            });
            var me = (0, p.Z)(ge, Ce, [], !1, null, "d95ed536", null);
            me.options.__file = "src/games/pp8/the-wheel/views/slices/UndoButton.vue";
            const ye = me.exports;
            var fe = function(t, e, s, n) {
                return new(s || (s = Promise))((function(i, l) {
                    function a(t) {
                        try {
                            o(n.next(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function c(t) {
                        try {
                            o(n.throw(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function o(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(a, c)
                    }
                    o((n = n.apply(t, e || [])).next())
                }))
            };
            const xe = l().extend({
                components: {
                    PromptBox: R,
                    WheelBox: Et,
                    UndoButton: ye,
                    SubmitButton: j
                },
                props: {
                    info: Object,
                    players: Object,
                    player: Object
                },
                data() {
                    return {
                        isSending: !1,
                        isSubmitted: !1,
                        unplacedSlices: this.player.unplacedSlices,
                        history: [],
                        manager: new At(this.player.slices, "place", this.info, this.players)
                    }
                },
                computed: {
                    isPatched() {
                        return void 0 !== this.player.history
                    },
                    initialRotation() {
                        var t;
                        return null !== (t = this.player.initialDegrees + 10) && void 0 !== t ? t : 10
                    },
                    titleKey() {
                        return this.isSubmitted ? "PLACE_SLICES.THANKS" : this.unplacedSlices ? "PLACE_SLICES.PLACE" : "PLACE_SLICES.SUBMIT"
                    }
                },
                mounted() {
                    this.player.history && (this.history = this.player.history), this.$vibrate()
                },
                beforeDestroy() {
                    this.$emit("localSliceCountChange", null)
                },
                methods: {
                    onSliceClick(t) {
                        return fe(this, void 0, void 0, (function*() {
                            if (this.unplacedSlices) {
                                this.unplacedSlices -= 1, this.history.push(t), this.manager.placeSlice(t), this.$emit("localSliceCountChange", this.unplacedSlices), this.isPatched || this.unplacedSlices || (this.isSubmitted = !0, this.$pauseEcastUpdates(), setTimeout((() => this.$resumeEcastUpdates()), 2e3));
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "place",
                                        index: t
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                            }
                        }))
                    },
                    onUndoClick() {
                        return fe(this, void 0, void 0, (function*() {
                            if (!this.history || !this.history.length) return;
                            this.unplacedSlices += 1;
                            const t = this.history.pop();
                            this.manager.unplaceSlice(t), this.$emit("localSliceCountChange", this.unplacedSlices);
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "undo"
                                })
                            } catch (t) {
                                this.$handleEcastError(t)
                            }
                        }))
                    },
                    onSubmitClick() {
                        return fe(this, void 0, void 0, (function*() {
                            if (0 === this.unplacedSlices) {
                                this.isSubmitted = !0, this.$pauseEcastUpdates(), setTimeout((() => this.$resumeEcastUpdates()), 2e3);
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "submit"
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                            }
                        }))
                    }
                }
            });
            var _e = (0, p.Z)(xe, ue, [], !1, null, "7418dde9", null);
            _e.options.__file = "src/games/pp8/the-wheel/views/slices/PlaceSlices.vue";
            const Me = _e.exports;
            var be = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "post-game scrollable trivia",
                    class: {
                        "is-audience": t.isAudience
                    }
                }, [t.isAudience ? t._e() : [n("PostGameActions", {
                    attrs: {
                        player: t.player
                    }
                }), t._v(" "), n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(66261),
                        expression: "require('../images/divider-long.inline.svg')"
                    }],
                    staticClass: "divider"
                })], t._v(" "), n("GalleryLink", {
                    attrs: {
                        artifact: t.artifact
                    }
                })], 2)
            };
            be._withStripped = !0;
            var we = s(56623),
                ze = s(83933);
            const Le = l().extend({
                components: {
                    GalleryLink: we.Z,
                    PostGameActions: ze.Z
                },
                props: {
                    artifact: Object,
                    player: Object
                },
                computed: {
                    isAudience() {
                        return void 0 === this.player.status
                    }
                }
            });
            var Se = (0, p.Z)(Le, be, [], !1, null, "3ccfa681", null);
            Se.options.__file = "src/games/pp8/the-wheel/views/PostGame.vue";
            const Ee = Se.exports;
            var Ae = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "single-text trivia scrollable"
                }, [s("PromptBox", {
                    attrs: {
                        "title-key": "QUESTION.BANNER",
                        prompt: t.player.prompt
                    }
                }), t._v(" "), s("div", {
                    staticClass: "form-box"
                }, [s("form", {
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                }, [s("Input", {
                    attrs: {
                        "is-multiline": !0,
                        "max-length": t.player.maxLength,
                        "placeholder-key": "QUESTION.PLACEHOLDER"
                    },
                    model: {
                        value: t.value,
                        callback: function(e) {
                            t.value = e
                        },
                        expression: "value"
                    }
                }), t._v(" "), s("GemButton", {
                    staticClass: "submit-button",
                    attrs: {
                        "text-key": "ASK",
                        disabled: !t.canSubmit,
                        theme: "submit"
                    },
                    on: {
                        click: t.onSubmit
                    }
                })], 1)]), t._v(" "), t.filterError ? s("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "FILTER_ERROR",
                        expression: "'FILTER_ERROR'"
                    }],
                    staticClass: "error"
                }) : t._e()], 1)
            };
            Ae._withStripped = !0;
            var Be = s(55507);
            const Ne = l().extend({
                components: {
                    GemButton: P,
                    Input: It,
                    PromptBox: R
                },
                i18n: {
                    messages: y
                },
                props: {
                    player: Object
                },
                data: () => ({
                    value: "",
                    filterError: !1
                }),
                computed: {
                    canSubmit() {
                        return this.value.length > 0
                    }
                },
                mounted() {
                    this.$vibrate()
                },
                methods: {
                    onSubmit() {
                        return t = this, e = void 0, n = function*() {
                            try {
                                yield this.$ecast.updateText(this.player.responseKey, this.value)
                            } catch (t) {
                                if (t instanceof Be.EcastFilterError) return void(this.filterError = !0);
                                this.$handleEcastError(t)
                            }
                        }, new((s = void 0) || (s = Promise))((function(i, l) {
                            function a(t) {
                                try {
                                    o(n.next(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function c(t) {
                                try {
                                    o(n.throw(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function o(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                    t(e)
                                }))).then(a, c)
                            }
                            o((n = n.apply(t, e || [])).next())
                        }));
                        var t, e, s, n
                    }
                }
            });
            var ke = (0, p.Z)(Ne, Ae, [], !1, null, "b7520044", null);
            ke.options.__file = "src/games/pp8/the-wheel/views/SingleTextEntry.vue";
            const Pe = ke.exports;
            var Ze = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    directives: [{
                        name: "pointerBox",
                        rawName: "v-pointerBox"
                    }],
                    staticClass: "spin",
                    attrs: {
                        role: "button",
                        tabindex: "0",
                        "aria-label": t.$t("ARIA.SPIN")
                    },
                    on: {
                        pointerboxstart: t.onPointerBoxStart,
                        pointerboxmove: t.onPointerBoxMove,
                        pointerboxend: t.onPointerBoxEnd,
                        keyup: [function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onTap.apply(null, arguments)
                        }, function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"]) ? null : t.onTap.apply(null, arguments)
                        }]
                    }
                }, ["answer" === t.category ? s("SpinAnswer", {
                    staticClass: "decor",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }) : "main" === t.category ? s("SpinMain", {
                    staticClass: "decor",
                    attrs: {
                        "aria-hidden": "true",
                        "is-down": t.isDown,
                        power: t.power,
                        "tap-count": t.tapCount
                    }
                }) : "rainbow" === t.category ? s("SpinRainbow", {
                    staticClass: "decor",
                    attrs: {
                        "aria-hidden": "true",
                        "is-rainbow-active": t.isRainbowActive,
                        "is-spinning": t.isSpinning
                    }
                }) : "winner" === t.category ? s("SpinWin", {
                    staticClass: "decor",
                    attrs: {
                        "aria-hidden": "true",
                        "is-down": t.isDown,
                        power: t.power,
                        "tap-count": t.tapCount
                    }
                }) : t._e(), t._v(" "), s("div", {
                    staticClass: "spin-box",
                    style: t.spinBoxStyles
                }, [s("WheelBox", {
                    class: {
                        hidden: t.isRainbowActive, down: t.isDown
                    },
                    attrs: {
                        category: t.category,
                        "is-active": !1,
                        "should-show-face": t.shouldShowFace,
                        definitions: t.sliceManager.definitions,
                        rotation: t.velocityTracked.rotation,
                        egg: t.egg
                    }
                })], 1)], 1)
            };
            Ze._withStripped = !0;
            var Te = s(83608),
                Oe = s.n(Te),
                Re = s(9707),
                Ie = s(20909),
                $e = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "decor answer-wheel"
                    }, [s("div", {
                        staticClass: "shapes-box"
                    }, [s("svg", {
                        attrs: {
                            viewBox: "0 0 1000 1000"
                        }
                    }, [s("polygon", {
                        staticClass: "shape-back",
                        attrs: {
                            points: "32.5,-190 342.8,-169.2 700.4,131 795,564.9 697.5,915.6 310.3,1181.1 0,1190 0,-139.5"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "shape-front",
                        attrs: {
                            points: "0,-55 280.7,1 558.4,231.1 585,629.2 410.7,978.2 0,1055"
                        }
                    })])]), t._v(" "), s("div", {
                        staticClass: "avatar-box"
                    }, [s("div", {
                        staticClass: "avatar"
                    }), t._v(" "), s("svg", {
                        attrs: {
                            viewBox: "0 0 1000 400"
                        }
                    }, [s("polygon", {
                        staticClass: "cloud-background",
                        attrs: {
                            points: "33.41 91.11 238.31 42.22 318.49 42.22 423.16 20 458.8 28.89 487.75 0 672.61 8.89 750.56 95.56 817.37 93.33\n                    908.69 128.89 1000 200 951 320 775.06 371.11 694.88 351.11 590.2 400 474.39 384.44 443.21 400 273.94 388.89 209.35\n                    337.78 46.77 271.11 0 197.78 33.41 91.11"
                        }
                    }), t._v(" "), s("path", {
                        staticClass: "cloud-inset",
                        attrs: {
                            d: "M420,381,272.93,362.57,232.45,308.5,68.71,263.56,33,182.47l35.75-78.79,160.4-43.62L309.3,77.91,411.9,42.16l59,11\n                    L506.38,22l168,16.13,60.34,71.66,142.23,17.8L978,207.68l-47.94,96.05L771.92,354.25l-86.72-24.5L580.36,376.68\n                    l-98.19-24.6ZM279.41,351.38,418.1,368.75,481,339.5l98.28,24.62,94-37.17,11.48-18.32,12.71,16.88,74.22,16.3,\n                    144.46-47.9L957.55,211l-85.42-77.51L746.27,119.89l-13.16,19.43L730.05,118,668.37,49.53l-158-15.18-36,31.52L412.83,\n                    54.45,325.91,84.74l-25.52,20.88L292.3,85.73,229.43,69.58,80,113.71,43.29,182.54l31.27,73.78,190.25,43-16.12,8.88Z"
                        }
                    })])]), t._v(" "), s("svg", {
                        staticClass: "clouds",
                        attrs: {
                            viewBox: "0 0 1000 475"
                        }
                    }, [s("path", {
                        staticClass: "top left",
                        attrs: {
                            d: "M132.31,46.85,214.5,26.08c76,20.26,61.21,6,120.23,61.09L351.9,75c80.38-.65,71.7-4.35,147.22,25.65L533.47,147l66,328H0\n                V66.1l84.94,12Z"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "top right",
                        attrs: {
                            points: "1000 51.11 970.34 38.35 942.6 3.35 883.75 0 865.26 21.77 845.08 20.09 796.33 33.48 757.66 70.32 732.44 58.6 700.5\n                71.99 697.13 93.76 670.23 92.08 639.97 107.15 613.07 135.61 562.63 123.89 520.6 152.35 456.26 475 1000 475 1000 51.11"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "bottom left",
                        attrs: {
                            points: "0 254.52 98.19 198.68 249.92 223.86 308.93 292.69 362.88 277.58 448.86 270.87 487.63 304.45 528.09 285.98 582.04\n                287.66 615.96 332.99 627.04 475 0 475 0 254.52"
                        }
                    }), t._v(" "), s("polygon", {
                        staticClass: "bottom right",
                        attrs: {
                            points: "474.53 475 492.98 345.27 541.87 292.91 598.8 304.72 622.31 262.44 693.88 228.16 722.41 235.14 738.5 251.45 767.48\n                191.62 827.11 175.26 933.26 177.78 1000 225.08 1000 475 474.53 475"
                        }
                    })]), t._v(" "), s("svg", {
                        staticClass: "winner-text",
                        attrs: {
                            viewBox: "0 0 1000 195"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M455.12,2.35c8.26,13.61,12.39,20.43,20.65,34.09l-.84,49.49Q435.41,43.38,395.49,1.22q-26.65,1.16-53.28,2.61c9.6,11.32,\n                14.4,17,24,28.38L364.11,134c-8.51,12.49-12.77,18.75-21.27,31.3q31.14-3.65,62.34-6.68\n                c-8.42-12.13-12.64-18.18-21.06-30.25q1.58-38.7,3.16-77.39,53.37,59.42,106,119.5l7.17-139c9.78-10.78,14.67-16.15,\n                24.44-26.86Q490,3.23,455.12,2.35ZM311.9,47Q328.68,27.58,345.58,8.3,297,8.52,248.39,10l.83-1q-37.12,3.25-74.16,7.14c9.4,\n                11.08,14.1,16.64,23.51,27.79q-11,36.87-22,73.76Q161.32,68.53,146.1,19.41c-11.75,2.16-17.62,3.26-29.36,5.52Q99,76,81.34,\n                127.12L62.29,54.53c7.37-10.12,11.05-15.16,18.42-25.24Q40.28,34,0,39.79C9.69,52.23,14.53,58.47,24.23,71q14.43,62,28.85,\n                124c12.64-4.32,19-6.44,31.61-10.63q18.19-50.62,36.45-101.22,16.38,47.92,32.72,95.85c13.93-4.72,20.9-7,34.84-11.61\n                q18.15-64.12,36.35-128.22C234,28,238.81,21.93,247.15,11.54q14.52,19.8,29,39.63l.63,72.38q-14.43,23-28.81,46,45.44-2.72,\n                90.89-4.42c-9.68-14.51-14.52-21.74-24.21-36.17ZM635.05,4.89C643.31,19,647.44,26,655.69,40.15l-.84,49.44Q615.36,44.8,\n                575.44.39,548.77.06,522.12,0c9.61,11.86,14.42,17.81,24,29.74q-1,50.84-2.11,101.67c-8.51,12-12.77,18-21.28,30.09\n                q31.17-1.87,62.37-3.15c-8.43-12.61-12.64-18.9-21.07-31.45l3.16-77.21q53.37,62.41,105.94,125.49,3.58-69.28,7.16-138.57\n                c9.77-10.23,14.65-15.32,24.41-25.48Q669.92,7.74,635.05,4.89ZM771,151.48l-6.1-22.41c.59-13.85.89-20.78,1.47-34.62,\n                9.93-.52,14.88-.76,24.8-1.2,11.76,9.93,17.65,14.91,29.4,25l-3.78-57c-10.33,5.11-15.49,\n                7.69-25.83,12.89-9.66-.88-14.5-1.31-24.17-2.12C767.6,55.18,768,46.79,768.87,30c12.44,1.22,18.66,1.86,31.09,3.2,14.2,\n                10.36,21.3,15.57,35.49,26.09-3.61-16.39-5.42-24.58-9-40.95-16.62-1.37-24.94-2-41.58-3.16q-37-5.52-74-10.41l18.3,45.07\n                q-2.64,39.81-5.26,79.63c-8.25,13.32-12.37,20-20.62,33.36q65.63,6.71,130.94,15.71,3-22.83,6.08-45.68-21.48,12.06-42.83,\n                24.34C786.86,154.88,781.56,153.73,771,151.48ZM937.5,193.26q31.26.12,62.5.87c-10.77-10.89-16.16-16.32-27-27.11\n                q-11.28-25.87-22.58-51.74c9.12-2.49,13.68-3.71,22.79-6.14L990.6,76c-5.26-10.51-7.89-15.75-13.16-26.24\n                q-21-12.23-42.24-24.21-48.57-4-97.24-6.4c8.39,12.6,12.59,18.91,21,31.57v89.7c-6.55,15.26-9.82,22.9-16.37,38.19q36.73,\n                5.14,73.37,10.9-9.41-24.16-18.85-48.33L897.93,47c5.78-1,8.67-1.56,14.45-2.57,10,6.43,15,9.67,24.91,16.19,2.35,8.16,\n                3.52,12.24,5.86,20.4q-16.89,15-33.7,30.19Q923.49,152.21,937.5,193.26Z"
                        }
                    })])])
                };
            $e._withStripped = !0;
            const De = l().extend({});
            var Ge = (0, p.Z)(De, $e, [], !1, null, "106f6fec", null);
            Ge.options.__file = "src/games/pp8/the-wheel/views/spin/Answer.vue";
            const Ue = Ge.exports;
            var Ye = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "decor main-wheel"
                }, [s("svg", {
                    staticClass: "texture-box",
                    attrs: {
                        viewBox: "0 0 1000 1000"
                    }
                }, [s("polygon", {
                    staticClass: "texture-0",
                    attrs: {
                        points: "0,-211.3 346.3,-189.8 717,119.6 815,566.9 713.9,928.4 312.6,1202.1 0,1211.3"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "texture-1",
                    attrs: {
                        points: "0,-76 281.9,-17.8 569.9,221.2 597.5,634.8 416.7,997.3 0,1076"
                    }
                })]), t._v(" "), s("svg", {
                    staticClass: "spin-text-box",
                    attrs: {
                        viewBox: "0 0 1000 330"
                    }
                }, [s("path", {
                    staticClass: "text-path",
                    attrs: {
                        id: "spin-text-path",
                        d: "M0,60C88.89,24.52,279.37,0,500,0s411.11,24.52,500,60"
                    }
                }), t._v(" "), s("text", {
                    staticClass: "shadow",
                    attrs: {
                        "text-anchor": "middle"
                    }
                }, [s("textPath", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.$t("SPIN.MAIN_BANNER"),
                        expression: "$t('SPIN.MAIN_BANNER')"
                    }],
                    staticClass: "spin-text",
                    attrs: {
                        href: "#spin-text-path",
                        startOffset: "50%"
                    }
                })]), t._v(" "), s("text", {
                    attrs: {
                        "text-anchor": "middle"
                    }
                }, [s("textPath", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.$t("SPIN.MAIN_BANNER"),
                        expression: "$t('SPIN.MAIN_BANNER')"
                    }],
                    staticClass: "spin-text",
                    attrs: {
                        href: "#spin-text-path",
                        startOffset: "50%"
                    }
                })])]), t._v(" "), s("ArrowBox", {
                    attrs: {
                        "is-down": t.isDown,
                        power: t.power,
                        "tap-count": t.tapCount
                    }
                })], 1)
            };
            Ye._withStripped = !0;
            var We = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "arrow-box"
                }, [s("svg", {
                    staticClass: "arrow",
                    class: {
                        reset: t.reset, power: t.power, tapping: t.tapCount > 2
                    },
                    attrs: {
                        viewBox: "0 0 1000 1000"
                    }
                }, [s("g", {
                    staticClass: "light light-0 red",
                    class: {
                        on: t.lights[0]
                    }
                }, [s("radialGradient", {
                    staticClass: "light-gradient",
                    attrs: {
                        id: "light-0-gradient",
                        cx: "728",
                        cy: "186",
                        r: "164",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [s("stop", {
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.25"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.66"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "1"
                    }
                })], 1), t._v(" "), s("path", {
                    staticClass: "base",
                    attrs: {
                        d: "M687.2,257.6c-12-54.8,86.3-76.1,102.5-22.7c14.8-3.3,29.6-6.6,44.4-9.9c-18-58.9-40.6-115.9-67.9-171.5\n                    c-6.7-14.9-25.4-25.7-42.1-20.2c-42.2,17-84.4,34.1-126.6,51.1c-15,6.4-19.3,23.3-12.5,36.8c23.2,47.5,42.4,96,\n                    57.9,146.3C657.6,264.2,672.4,260.9,687.2,257.6C687.2,257.6,687.2,257.6,687.2,257.6z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "crystal",
                    attrs: {
                        d: "M711.3,63l5-26.5c-2.9,1.2-5.7,2.3-8.6,3.5l0.9,22.9C708.8,64.3,711,64.4,711.3,63z M739.9,70.2l17.5-28.6\n                    c-2.6-2.3-5.5-4.3-8.6-5.9l-11.3,33.4C737,70.6,739.1,71.4,739.9,70.2z M681.9,65.5l-2.6-14.1c-1.8,0.7-3.6,\n                    1.5-5.4,2.2l5.5,12.6C680,67.6,682.1,67,681.9,65.5z M764.2,86.1L777,76c-0.9-2-1.9-4.1-2.9-6.1l-11.9,14.5C761.3,\n                    85.6,762.9,87,764.2,86.1z M786.5,163.9l31,10.7c-1.2-3.2-2.3-6.5-3.5-9.7l-26.8-3.5C785.6,161.3,785,163.4,786.5,\n                    163.9z M788.9,136l13.9,0c-0.7-1.7-1.3-3.4-2-5l-12.2,2.5C787.2,133.9,787.4,136,788.9,136z M655.1,77.4l-8-13.1\n                    c-2,0.8-3.9,1.6-5.9,2.4L653,78.9C654.1,80,655.9,78.7,655.1,77.4z M781.2,109l9.2-3.1c-0.6-1.4-1.2-2.8-1.8-4.2\n                    l-8.5,5.1C778.7,107.6,779.7,109.5,781.2,109z M634.3,97.3l-23.1-18.4c-3.6,1.5-7.2,2.9-10.8,4.4l32.4,16.2C634.2,\n                    100,635.5,98.3,634.3,97.3z M827.4,203.7c-2.2-6.6-4.4-13.2-6.7-19.8l-112.5-39.7l102.6,12.6\n                    c-1.6-4.4-3.3-8.7-5-13.1l-97.5-0.8l89.6-19c-1.5-3.6-3-7.3-4.6-10.9L708,141.7l77.5-47c-1.7-3.8-3.4-7.5-5.1-11.3\n                    l-73.2,57.2l63.3-78.5c-1.4-2.9-2.8-5.8-4.2-8.6c-0.9-1.9-1.9-3.7-3.1-5.5L706,139.9l35.3-107\n                    c-5.1-1.3-10.6-1.4-15.8,0l-20.8,106.7L700,43c-4.3,1.7-8.6,3.5-12.9,5.2l16.2,91.5l-36.7-83.2c-3.9,1.6-7.9,\n                    3.2-11.8,4.8l47.3,79l-68.5-70.5c-4.6,1.9-9.2,3.7-13.9,5.6l81.5,65.8L591.9,87.6c-4.5,3.4-7.5,8-9,13.1l117.8,41.6\n                    l-112.1-13.7c2.3,4.7,4.5,9.4,6.7,14.2l105.4,0.8L604.7,164c1.7,3.8,3.3,7.7,4.9,11.6l91.4-30.7l-83.3,50.5c1.6,\n                    4.1,3.2,8.3,4.8,12.5l79.3-62l-70.2,87c2.1,6.1,4.2,12.3,6.2,18.5l65.1-104.8l-38.3,116c5.9-1.3,11.9-2.6,17.8-4\n                    L704.2,147l3.3,66.9c2.9-1.8,5.9-3.3,9.2-4.6l-11.1-62.4l25.7,58.2c3.4-0.6,6.8-0.9,10.2-1l-34.6-57.8l61.7,63.4\n                    c8.3,4.1,15.1,10.6,19.3,19.8l4.7,4.8c6.5-1.5,13.1-2.9,19.6-4.4l-104.4-84.6L827.4,203.7z M668.4,216.4l-27.4,45.3\n                    c0.6,1.9,1.2,3.8,1.8,5.7c3.9-0.9,7.8-1.7,11.7-2.6l16.4-47.4C671.3,216,669.3,215.2,668.4,216.4z M621.9,\n                    122.7l-40-13.8c0.1,3.9,1,7.9,2.7,11.6l36.6,4.7C622.8,125.3,623.3,123.3,621.9,122.7z M831.3,215.9l-55.7-28.7\n                    c-1.4-0.6-2.6,1.1-1.5,2.1l48.3,38.3c3.9-0.9,7.9-1.7,11.8-2.6C833.2,222,832.3,218.9,831.3,215.9z M619.4,150.6\n                    l-20.7,0c0.9,2.1,1.9,4.2,2.8,6.3l18.2-3.7C621.2,152.7,621,150.6,619.4,150.6z M644.2,200.5l-18.9,15c1,2.8,2.1,\n                    5.6,3.1,8.5l17.8-21.7C647,201,645.4,199.6,644.2,200.5z M627.2,177.6l-14.6,5c0.7,1.8,1.5,3.6,2.2,5.4l13.6-8.1\n                    C629.6,179,628.6,177.1,627.2,177.6z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text",
                    attrs: {
                        d: "M690.4,118c-0.2-0.3-0.3-0.5-0.4-0.8c-4.3,1.6-6.4,2.5-10.7,4.1c0.9,1,1.9,1.3,3.1,2.1c1.5,6,2.6,11,4,17.1\n                    c-4.1-5.5-7.6-10.3-11.6-15.8c0.2-0.8,0.3-1.1,0.5-1.9c-0.1-0.2-0.1-0.3-0.2-0.4c-4.9,1.8-7.4,2.7-12.3,4.5c-0.4,\n                    0.6-0.6,0.9-0.9,1.4c6.1,4.3,9.9,10.6,10.7,17.8c-3.9-5.6-7.3-10.3-11.4-15.7c-0.1-1.4,0.3-2.3,0-3.6c-5.2,2-7.8,\n                    3.1-13,5.1c-0.1,0.7-0.2,1.3-0.3,2.1c0.6,0,0.9,0.1,1.4,0.1c12,12.6,18.8,28.7,31.1,40.3c1.9-1.6,2.9-2.4,4.8-3.9\n                    c-1.5-7-2.3-10.6-4-17.8c5,5.8,6,11.8,12.5,15.8c2-1.2,3-1.7,5-2.9c-3.5-15.9-5.2-29.4-10.5-45.1C689.2,119.5,\n                    689.6,119,690.4,118z M634.1,140.9c0.7-0.4,1-0.5,1.6-0.9c3,1.9,4.1,4.4,6.1,7c1.8-0.9,2.7-1.3,4.5-2.2c-0.7-5.7,\n                    1.1-10.1-1.6-15.1c-2.1,2.1-3.5,4.2-6.6,5c-4.9,1.8-7.4,2.6-12.3,4.4c-9.9,26.4,28.3,19.6,28.5,40.2c-0.6,0.9-0.8,\n                    1.6-1.6,2.3c-1.2-0.3-1.8-0.5-2.9-0.9c-1.3-2.8-2-4.2-3.3-7c-2.3,0.2-3.5,0.3-5.8,0.5c2.1,7-1.7,13.8,2.7,20.2\n                    c2.7-6.4,9.2-7.9,15.2-11C678.1,154.5,634,158.8,634.1,140.9z M777.3,135.1c-1.8,0.4-2.7,0.6-4.4,1c-0.1,3.6-0.2,\n                    5.4-0.4,8.9c-0.9,0.9-1.4,1.4-2.3,2.3c-1.2,0-1.9,0.1-3.1,0.1c-4.7-8.2-5.5-14-9.7-22.9c1.6-0.2,2.4-0.3,4-0.6c1.4,\n                    1.8,2.7,2.7,4.3,4.4c1.4-1.4,2.1-2,3.5-3.4c-1.6-3.7-2.4-5.6-4-9.3c-2.1-0.9-3.2-1.3-5.3-2.1c-0.3,2.2-0.4,3.3-0.7,\n                    5.5c-1.7,0.5-2.5,0.7-4.2,1.1c-3-7.3-4.6-10.9-7.6-18c1.4-1,2.8-0.5,4.5-0.8c3.6,1.4,5.5,3.8,8,6.5c2-0.6,2.9-1,\n                    4.9-1.6c-3.4-5-5.2-7.5-8.5-12.2c-8.6,3.1-13,4.7-21.6,7.8c-0.1,0.5-0.2,0.8-0.3,1.3c10.1,13.4,14.1,31.2,21.6,46.4\n                    c-0.4,1.2-0.6,1.7-1.1,2.9c0.4,0.4,0.6,0.6,1,0.9c10.3-1.1,15.6-1.4,26-2C780.7,145.6,779.9,140.5,777.3,135.1z\n                    M737.6,152.8c-2.9-6.9-4.4-10.5-7.5-17.6c2.8-1.1,4.2-1.7,7-2.8c1.6-2.8,2.4-4.2,3.9-7c-1.2-4.8-1.8-7.3-3-12.1\n                    c-2.5-2.4-3.7-3.6-6.2-5.9c-4.4-0.9-6.7-1.3-11.1-2.1c-5,2.6-7.5,4-12.6,6.6c-0.7,1.4-1,2.1-1.7,3.5c0.8,0.8,1.1,\n                    1.2,1.9,2c0.5-0.5,0.8-0.7,1.3-1.1c5.8,12.6,11.3,25.4,16.5,38.3c-0.7,1.2-1,1.8-1.7,3c0.4,0.5,0.7,0.8,1.1,1.3\n                    c6.8-1.5,10.3-2.2,17.3-3.2c-0.3-0.8-0.4-1.2-0.7-2C740.3,153.3,739.4,153.1,737.6,152.8z M728.2,130.7\n                    c-0.9-1.2-1.4-1.8-2.3-2.9c-2.5-6.7-3.7-10.1-6.3-16.6c1.8-0.2,2.6-0.3,4.4-0.6c2.9,6.2,4.3,9.4,7.1,15.8c-0.5,\n                    1.5-0.8,2.3-1.3,3.8C729.2,130.4,728.9,130.5,728.2,130.7z M704.3,117c0.3-1.3,0.5-2,0.8-3.3\n                    c-0.1-0.2-0.1-0.3-0.2-0.5c-5.4-0.2-9.2,2.1-14.2,3.7c0.1,0.7,0.1,1.3,0.2,2c1,0.3,1.5,0.5,2.5,0.8c5.7,12.7,11.2,\n                    25.6,16.3,38.6c-0.3,1.6-0.5,2.5-0.8,4.1c0.5,0.6,0.8,0.9,1.3,1.5c5.5-1.8,8.3-2.6,13.8-4.2c0.2-0.4,0.3-0.6,\n                    0.5-1.1c-1.2-0.7-1.8-1.1-3-1.8C716,143.1,710.6,130.6,704.3,117z"
                    }
                })], 1), t._v(" "), s("g", {
                    staticClass: "light light-1 white",
                    class: {
                        on: t.lights[1]
                    }
                }, [s("radialGradient", {
                    staticClass: "light-gradient",
                    attrs: {
                        id: "light-1-gradient",
                        cx: "747",
                        cy: "249",
                        r: "63",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [s("stop", {
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.25"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.66"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "1"
                    }
                })], 1), t._v(" "), s("path", {
                    staticClass: "base",
                    attrs: {
                        d: "M789.7,234.9c13.7,56.1-84.5,73.3-102.5,22.7C675.3,202.8,773.5,181.5,789.7,234.9z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "crystal",
                    attrs: {
                        d: "M742.8,207.6l0.7-3.6c-0.7,0-1.4,0-2.1,0l0.1,3.5C741.6,208.2,742.6,208.3,742.8,207.6z M729.2,208.8l-0.6-3.2c-0.7,\n                    0.1-1.3,0.3-1.9,0.4l1.3,3.1C728.3,209.7,729.3,209.5,729.2,208.8z M716.8,214.3l-2.5-4.1c-0.7,0.3-1.4,0.7-2.1,\n                    1l3.6,3.8C716.3,215.5,717.1,214.9,716.8,214.3z M707.2,223.5l-6.2-4.9c-0.8,0.7-1.5,1.3-2.3,2l7.8,3.9C707.1,\n                    224.7,707.7,223.9,707.2,223.5z M701.4,235.2l-11-3.8c-0.6,1.1-1.1,2.2-1.6,3.4l12.2,1.6C701.8,236.4,702.1,235.5,\n                    701.4,235.2z M778.7,241.4l12.2,0c-0.1-1.2-0.3-2.4-0.5-3.6l-11.8,2.4C777.8,240.4,777.9,241.4,778.7,241.4z M756,\n                    210.9l3-4.8c-0.8-0.2-1.6-0.4-2.4-0.6l-1.7,5C754.7,211.1,755.6,211.5,756,210.9z M775.1,228.9l10.4-3.6\n                    c-0.6-1-1.2-2-1.9-2.9l-9.1,5.4C773.9,228.2,774.4,229.1,775.1,228.9z M767.2,218.3l6.8-5.4\n                    c-0.8-0.6-1.7-1.1-2.6-1.7l-5.1,6.2C765.9,218.1,766.6,218.7,767.2,218.3z M762.1,275.2l3.7,6c0.9-0.4,1.7-0.8,\n                    2.5-1.3l-5.2-5.4C762.6,274,761.8,274.6,762.1,275.2z M771.8,266l7.5,6c0.8-0.8,1.6-1.6,2.3-2.4l-9.2-4.6C771.8,\n                    264.8,771.2,265.6,771.8,266z M749.8,280.7l1,5.5c0.8-0.2,1.6-0.4,2.4-0.5l-2.3-5.2C750.7,279.8,749.7,280,749.8,\n                    280.7z M777.5,254.3l11.2,3.9c0.4-1.1,0.8-2.3,1.1-3.5l-12-1.6C777.1,253.1,776.8,254,777.5,254.3z M741.4,244.6\n                    l48.2-10.2c-0.6-2-1.4-4-2.3-5.8l-46,15.5l40.2-24.4c-1.4-1.6-2.8-3-4.4-4.3l-36.1,28.2l27.4-33.9\n                    c-1.8-0.9-3.6-1.7-5.6-2.3l-22.3,35.9l12.7-38.3c-1.9-0.3-3.8-0.5-5.7-0.6l-7.6,38.8l-1.9-38.8c-1.8,0.1-3.7,\n                    0.3-5.5,0.6l6.8,38.2l-15.9-36.2c-1.8,0.5-3.6,1.1-5.3,1.8l20.7,34.6L709,212.9c-1.7,1-3.4,2.1-5,3.2l34.2,27.6\n                    l-42-20.6c-1.4,1.6-2.7,3.3-3.8,5l45.5,16.1l-50.1-6.1c-0.6,2-1,4.1-1.2,6.3l51.3,0.4l-50.9,10.8c0.1,0.6,0.2,1.2,\n                    0.4,1.9c0.5,1.5,1.1,2.9,1.8,4.3l48.9-16.4l-42.6,25.8c1.5,1.6,3,3.1,4.7,4.5l38.3-29.9l-28.9,35.8c1.9,0.9,3.8,\n                    1.7,5.9,2.4l23.6-37.9l-13.4,40.5c2,0.3,4,0.6,6,0.7l8-41l2,41c1.9-0.1,3.9-0.4,5.8-0.7l-7.2-40.4l16.8,38.2\n                    c1.9-0.6,3.8-1.2,5.6-2l-21.9-36.5l31,31.9c1.8-1.1,3.4-2.3,5-3.6l-35.5-28.7l42.9,21c1.2-1.7,2.3-3.5,3.3-5.3\n                    l-45.9-16.2l49.2,6c0.3-2,0.5-4.1,0.5-6.2L741.4,244.6z M722.9,278.6l-4.1,6.8c1,0.3,1.9,0.5,2.9,0.7l2.4-7C724.3,\n                    278.4,723.3,278,722.9,278.6z M736.2,281.9l-1.1,5.7c0.8,0,1.7,0,2.6,0l-0.2-5.7C737.3,281.3,736.3,281.2,736.2,\n                    281.9z M711.7,271.2l-8.7,6.9c1,0.7,2,1.3,3,1.9l6.6-8C713,271.4,712.3,270.8,711.7,271.2z M703.9,260.6l-13.1,\n                    4.5c0.7,1.2,1.4,2.3,2.2,3.4l11.4-6.8C705,261.3,704.5,260.4,703.9,260.6z M700.3,248.1l-14,0c0,1.3,0,2.7,0.2,4.1\n                    l14-2.9C701.1,249.1,701,248.1,700.3,248.1z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text",
                    attrs: {
                        d: "M721.1,234.2c-2.8,2.3-4.2,3.5-7,5.7c-1.3,5.2-1.9,7.7-3.3,12.9c5.7,5.4,10.4,9.5,18.7,10.5c3.9-3.6,5.9-5.5,9.7-9.2\n                    c0.3-6.8-0.7-12.1-4.6-17.9C729.2,235.4,726.5,235,721.1,234.2z M728.5,260.2c-4.3-3-7.5-5.6-9.6-10.3c1.3-4.8,\n                    2-7.2,3.3-12.1c3.1,1.2,4.7,1.8,7.8,3c1.5,2.9,2.2,4.4,3.7,7.4C731.7,253.1,730.7,255.5,728.5,260.2z M759.5,256.1\n                    c3.9-1.4,5.9-2.2,9.8-3.6c-5.6-2.3-8.2-6.2-11.7-10.7c1.3-1,1.9-1.5,3.2-2.5c0.4-2.7,0.6-4.1,0.9-6.9\n                    c-6.6-9.3-17.8-2.9-26.8-0.6c2,1.7,3,2.5,5,4.2c2.2,8.1,5.7,14.4,3.9,22.8c4.8-0.9,7.3-1.3,12.1-2.2\n                    c-6.5-7.1-7.3-14.8-10.1-23.6c0.8-0.5,1.3-0.8,2.1-1.3c1.9,0.5,2.8,0.8,4.7,1.3c0.8,1.3,1.2,1.9,2,3.2c-1.5,\n                    2.9-2.2,4.4-3.7,7.2C754.4,248.6,756.2,251.1,759.5,256.1z"
                    }
                })], 1), t._v(" "), s("g", {
                    staticClass: "light light-2 red-orange",
                    class: {
                        on: t.lights[2]
                    }
                }, [s("radialGradient", {
                    staticClass: "light-gradient",
                    attrs: {
                        id: "light-2-gradient",
                        cx: "787",
                        cy: "386",
                        r: "180",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [s("stop", {
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.25"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.66"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "1"
                    }
                })], 1), t._v(" "), s("path", {
                    staticClass: "base base-2",
                    attrs: {
                        d: "M722.8,456.2c0.1-54.4,100.7-60.8,105.6-5.1c15.3-0.7,30.5-1.5,45.8-2.2c-5.6-76.1-18.9-150.3-40.1-223.9c-14.8,\n                    3.3-29.6,6.6-44.4,9.9c13.7,56.1-84.5,73.3-102.5,22.7c-14.8,3.3-29.6,6.6-44.4,9.9c18,62.8,29.4,126.1,34.2,190.9\n                    C692.3,457.7,707.6,456.9,722.8,456.2C722.8,456.2,722.8,456.2,722.8,456.2z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "crystal crystal-2",
                    attrs: {
                        d: "M873.2,435.7l-106.8-86.1l103.2,50.7c-0.6-5.4-1.3-10.9-2-16.3l-100.7-35.4l97.3,12c-0.6-4.2-1.3-8.3-2-12.5\n                    l-95.2-0.6l91.6-19.3c-0.7-4-1.5-8-2.3-12l-89.7,30.2l85.2-51.5c-1-4.7-2.1-9.4-3.2-14.1l-82.7,64.8l75.6-93.5\n                    c-1.9-7.1-3.8-14.2-5.8-21.3L765,344.9L802.4,232c-4.2,0.9-8.5,1.9-12.7,2.8c4,16.5-1.7,29.7-12.1,38.7l-13.8,71.1\n                    l-2.9-61.4c-2.8,1.1-5.8,1.9-8.8,2.6l10.5,58.9l-25.1-57.2c-3.7,0.1-7.4-0.2-11-0.7l35,58.3l-83.2-85.7c-6.5,\n                    1.5-13.1,2.9-19.6,4.4l102,82.2l-111.4-54.8c1.6,6.1,3.1,12.2,4.5,18.3l106.4,37.5l-100.8-12.5c0.9,4.3,1.8,8.6,\n                    2.6,12.9l98.1,0.7l-94.3,19.9c0.7,4.1,1.4,8.2,2.1,12.4l92.6-31.2l-89.3,54c0.7,5.3,1.4,10.5,2,15.8l88-68.9l-84.5,\n                    104.5c0.1,1.2,0.2,2.5,0.3,3.7l19.1-0.9l66.1-106.7l-24.9,74.9c3.8-3.2,8.3-5.9,13.1-7.9l12.9-66.7l2.9,62.2c3-0.5,\n                    6.1-0.8,9.2-0.9l-11-61.4l27.6,62.8c5.2,1.1,10.1,2.8,14.6,5.2l-41.1-68.5l96.1,99l12.6-0.6C873.9,444.5,873.6,\n                    440.1,873.2,435.7z M829.2,318.6l25.6-9.8c-0.4-2-0.9-4.1-1.3-6.1l-25.3,13.9C827.1,317.4,827.9,319,829.2,318.6z\n                    M793.9,285.4l32.9-58.7c-4.7,1.1-9.5,2.1-14.2,3.2l-20.8,54.7C791.4,285.7,793.2,286.4,793.9,285.4z M769.5,279.3\n                    c-0.5,0.3-0.9,0.5-1.4,0.8C768.6,280.2,769.3,280,769.5,279.3z M833.7,365.5l32.7,10.1c-0.3-2.4-0.7-4.7-1-7.1\n                    l-31.1-5.1C832.9,363.3,832.4,365,833.7,365.5z M823.1,387.2l49,36.3c-0.4-4.3-0.9-8.6-1.3-12.9l-46.4-25.2C823.1,\n                    384.9,822.1,386.4,823.1,387.2z M721.4,291.6l-4.5-6.8c-2.4-0.8-4.8-1.7-7-2.7l9.7,10.8C720.5,293.8,722.1,292.7,\n                    721.4,291.6z M835.8,341.7l25.1-0.8c-0.3-1.8-0.6-3.6-1-5.5l-24.4,4.1C834.3,339.8,834.5,341.6,835.8,341.7z\n                    M814.6,299l31.9-27.2c-0.8-3.2-1.6-6.5-2.4-9.7L813,297.5C812.2,298.6,813.6,299.8,814.6,299z M703.6,308.6\n                    l-56.9-42c-1.3,0.3-2.6,0.6-3.9,0.9c1.2,4.2,2.4,8.4,3.5,12.5l56,30.4C703.6,310.9,704.6,309.4,703.6,308.6z\n                    M712.1,396.7l-37.7,32.1c0.4,4.2,0.9,8.4,1.3,12.6l38.1-43.2C714.5,397.2,713.1,396,712.1,396.7z M805.3,404.2\n                    l30.7,46.6c4.4-0.2,8.8-0.4,13.2-0.6l-42-47.2C806.2,402,804.6,403,805.3,404.2z M732.8,410.4L706.6,457c3.7-0.2,\n                    7.4-0.4,11-0.5l17.3-45.2C735.3,410,733.5,409.3,732.8,410.4z M693,330.3l-37-11.4c0.6,2.6,1.2,5.2,1.8,7.8l34.7,\n                    5.7C693.8,332.5,694.3,330.7,693,330.3z M690.9,354.1l-27.4,0.9c0.4,1.9,0.7,3.8,1.1,5.8l26.5-4.5C692.4,355.9,\n                    692.2,354.2,690.9,354.1z M697.5,377.2L669.1,388c0.3,2.2,0.7,4.5,1,6.7l28.4-15.6C699.6,378.4,698.8,376.8,697.5,\n                    377.2z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text text-2",
                    attrs: {
                        d: "M744.5,333.9c1.9-1.7,2.9-2.5,4.8-4.2c-3.2-4.2-4.9-6.2-8.2-10.5c-11.3,0.5-20.1,3.9-31,0c-1.8,0.7-2.7,1.1-4.5,1.9\n                    c-0.8,5.3-1.3,8-2.1,13.5c1.8,1.6,2.7,2.3,4.5,3.8c2.8-4.4,4.2-6.5,7-10.6c1.1,0.1,1.6,0.1,2.7,0.1c3.3,17.4,8,\n                    34.6,8.4,52.3c-1,1-1.5,1.6-2.4,2.6c0.3,0.7,0.5,1,0.8,1.7c8-2.5,12-3.6,20.1-5.5c0.1-0.7,0.2-1,0.4-1.7\n                    c-1.7-0.5-2.6-0.8-4.4-1.3c-1.5-16.9-7.7-33.8-7.6-50.6c0.9-0.1,1.3-0.1,2.1-0.2C739,328.9,740.8,330.6,744.5,\n                    333.9z M803.3,369.3c-1.6-9.2-2.4-13.8-4.1-23c3.7-0.9,5.5-1.4,9.1-2.3c2.7-3.3,4-5,6.5-8.5\n                    c-0.1-6.5-0.2-9.8-0.5-16.5c-2.3-3.4-3.5-5.1-5.8-8.4c-5-1.4-7.5-2.1-12.5-3.4c-6.6,3.3-9.9,4.7-16.7,7.4\n                    c-1.2,1.7-1.8,2.5-3,4.1c0.7,1.1,1,1.6,1.7,2.7c0.8-0.5,1.2-0.7,1.9-1.2c3.2,16.1,6.2,32.2,8.9,48.4\n                    c-1.2,1.3-1.8,1.9-3,3.2c0.1,0.3,0.3,0.5,0.4,0.7c-1.1-0.9-1.9-1.5-3.2-2.5c-6-17.7-12.2-35.1-18.9-52.6c-3.2,\n                    0.1-4.8,0.2-8,0.2c-0.8,19.1-2,38.1-3.6,57.1c-1,0.8-1.4,1.1-2.4,1.9c0.1,0.7,0.2,1.1,0.3,1.8c5.6-1,8.4-1.4,\n                    14-2.1c0.3-0.7,0.4-1.1,0.7-1.8c-1-0.6-1.5-0.9-2.6-1.5c0.2-4.1-0.9-6.9,0.2-10.9c1.1-0.1,1.6-0.1,2.7-0.2c1.3,4.2,\n                    2,6.3,3.2,10.5c-0.9,1-1.4,1.5-2.3,2.4c0.1,0.4,0.1,0.5,0.1,0.9c7.6-0.6,11.5-0.8,19.2-0.8c0.3-0.8,0.5-1.2,0.8-1.9\n                    c0.1,0.1,0.1,0.3,0.2,0.4c8.7-0.2,13.1-0.1,22,0.5c-0.1-1.1-0.1-1.6-0.2-2.7C806.5,370.6,805.4,370.2,803.3,369.3z\n                    M762.9,357.2c-0.9-6.1-1-10.1-1.8-16.2c2.8,5.3,3.6,10.1,4.2,15.9C764.3,357,763.8,357.1,762.9,357.2z M796.4,336.5\n                    c-1.1-8.6-1.7-13-3-21.7c2.1-0.2,3.2-0.2,5.3-0.4c1.8,8.4,2.6,12.6,4.3,21.1c-1,1.9-1.6,2.8-2.6,4.6c-0.8,0.2-1.3,\n                    0.2-2.1,0.4C797.5,338.8,797.1,338.1,796.4,336.5z"
                    }
                })], 1), t._v(" "), s("g", {
                    staticClass: "light light-3 white",
                    class: {
                        on: t.lights[3]
                    }
                }, [s("radialGradient", {
                    staticClass: "light-gradient",
                    attrs: {
                        id: "light-3-gradient",
                        cx: "780",
                        cy: "470",
                        r: "78",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [s("stop", {
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.25"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.66"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "1"
                    }
                })], 1), t._v(" "), s("path", {
                    staticClass: "base",
                    attrs: {
                        d: "M828.5,451.1c1.9,56.4-99,58.5-105.6,5.1C722.9,401.8,823.5,395.4,828.5,451.1z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "crystal",
                    attrs: {
                        d: "M750.3,421.6l-1.8-2.9c-0.6,0.3-1.3,0.6-1.9,0.9l2.6,2.7C749.7,422.8,750.6,422.2,750.3,421.6z M777.4,414.6l0.4-2.3\n                    c-0.6,0-1.2,0-1.8,0l0.1,2.2C776.2,415.2,777.2,415.3,777.4,414.6z M763.2,415.8l-0.4-2c-0.6,0.1-1.1,0.3-1.7,0.4\n                    l0.8,1.9C762.2,416.8,763.3,416.5,763.2,415.8z M740.2,431.1l-4.7-3.8c-0.6,0.6-1.3,1.2-1.9,1.9l5.9,2.9C740.2,\n                    432.5,740.8,431.6,740.2,431.1z M814.9,449.8l13.4,0c-0.2-1.3-0.3-2.6-0.6-3.9l-13,2.7C814,448.8,814.1,449.8,\n                    814.9,449.8z M811.1,436.8l11.3-3.9c-0.7-1-1.4-2-2.2-3l-9.7,5.8C809.9,436.1,810.4,437,811.1,436.8z M734.2,443.4\n                    l-8.2-2.8c-0.4,0.9-0.8,1.9-1.1,2.9l9,1.2C734.7,444.7,734.9,443.7,734.2,443.4z M791.2,418l2.4-4\n                    c-0.8-0.2-1.5-0.3-2.3-0.5l-1.3,4C789.8,418.2,790.8,418.6,791.2,418z M802.9,425.8l6.6-5.2\n                    c-0.9-0.5-1.8-1.1-2.7-1.5l-4.8,5.9C801.5,425.5,802.3,426.2,802.9,425.8z M813.7,463.3l12,4.2c0.5-1.2,0.9-2.4,\n                    1.3-3.7l-13-1.7C813.2,462,813,463,813.7,463.3z M784.7,490.9l0.6,3.4c0.7-0.1,1.4-0.2,2.1-0.3l-1.5-3.4C785.6,\n                    489.9,784.6,490.2,784.7,490.9z M807.7,475.6l7.7,6.2c0.9-0.8,1.7-1.6,2.5-2.4l-9.6-4.8C807.7,474.2,807.1,475.1,\n                    807.7,475.6z M797.6,485.1l3.2,5.2c0.9-0.3,1.7-0.7,2.6-1.1l-4.7-4.9C798.1,483.9,797.3,484.5,797.6,485.1z M775.9,\n                    453.2l50.8-10.8c-0.7-2.2-1.5-4.2-2.5-6.1l-48.5,16.3l42-25.5c-1.5-1.6-3.2-3-4.9-4.3l-37.5,29.3l28-34.7\n                    c-1.9-0.8-3.8-1.6-5.8-2.2l-22.7,36.6l12.8-38.8c-1.9-0.3-3.8-0.5-5.8-0.6l-7.6,39.2l-1.9-39.1c-1.9,0.1-3.7,\n                    0.4-5.6,0.6l6.8,38.5l-16-36.4c-1.8,0.5-3.6,1.2-5.4,1.9l20.8,34.8l-29.6-30.5c-1.7,1-3.4,2.2-4.9,3.4l34.1,27.5\n                    l-41.4-20.3c-1.3,1.6-2.4,3.3-3.4,5.1l44.5,15.7l-48.4-5.9c-0.5,2-0.8,4-0.9,6.2l49.3,0.4l-47.7,10.1c0.6,2,1.4,\n                    3.9,2.4,5.8l45.5-15.3l-39.5,23.9c1.4,1.5,2.9,2.9,4.5,4.2l35.4-27.6L746,487.9c1.7,0.9,3.5,1.7,5.4,2.4l22-35.3\n                    l-12.6,38.2c1.9,0.4,3.7,0.8,5.6,1l7.6-39l1.9,39.7c1.9,0,3.8-0.1,5.7-0.2l-7-39.6l16.8,38.2c2-0.4,3.9-1,5.8-1.6\n                    l-22.1-36.9l31.8,32.7c1.9-1,3.7-2.2,5.4-3.4l-36.8-29.7l44.9,22c1.4-1.7,2.6-3.6,3.6-5.5l-48.2-17l51.9,6.4\n                    c0.4-2.1,0.6-4.3,0.7-6.6L775.9,453.2z M756.7,488.7l-1.8,2.9c0.6,0.2,1.3,0.4,1.9,0.6l1-3C758.1,488.5,757.1,\n                    488.1,756.7,488.7z M745,480.9l-4.6,3.6c0.7,0.5,1.4,0.9,2.1,1.4l3.4-4.1C746.3,481.2,745.6,480.5,745,480.9z\n                    M736.8,469.9l-8,2.8c0.5,0.8,1.1,1.7,1.7,2.5l6.9-4.1C737.9,470.6,737.5,469.7,736.8,469.9z M733,456.9l-10.1,0\n                    c0.2,1.1,0.4,2.2,0.6,3.2l9.7-2C733.9,457.9,733.8,456.9,733,456.9z M770.5,492.1l-0.5,2.5c0.6,0.1,1.2,0.1,1.9,0.1\n                    l-0.1-2.5C771.7,491.5,770.6,491.4,770.5,492.1z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text",
                    attrs: {
                        d: "M773.4,447.8c-0.8-3.4-1.2-5-2.1-8.4c-9.7,0.8-14.5,1.2-24.2,2.1c0,2.8,0,4.1-0.1,6.9c3.1-1.7,4.6-2.5,7.6-4.2c0.5,\n                    0,0.8,0.1,1.3,0.1c0.5,8.4,2.4,15.4-2.3,22.9c5.6-0.3,8.5-0.5,14.1-0.8c-5.7-6.9-3.9-14.3-5.5-22.6c1-0.2,1.4-0.3,\n                    2.4-0.5C768.1,445.1,769.9,446,773.4,447.8z M800.8,441.8c-5.1-1.7-7.7-2.6-12.8-4.2c-3.3,1.8-4.9,2.7-8.2,4.5\n                    c-2.4,4.9-3.6,7.4-6.1,12.2c4.4,6.3,8.1,11.2,16,13.6c4.7-3,7-4.5,11.6-7.5C803.1,453.7,803.4,448.3,800.8,441.8z\n                    M789.4,464.7c-3.5-3.7-6.2-6.9-7.1-11.9c2.4-4.6,3.6-6.8,5.9-11.5c2.8,1.7,4.2,2.6,7,4.3c0.8,3.2,1.2,4.8,2,8\n                    C794.1,458.1,792.6,460.3,789.4,464.7z"
                    }
                })], 1), t._v(" "), s("g", {
                    staticClass: "light light-4 orange",
                    class: {
                        on: t.lights[4]
                    }
                }, [s("radialGradient", {
                    staticClass: "light-gradient",
                    attrs: {
                        id: "light-4-gradient",
                        cx: "785",
                        cy: "593",
                        r: "169",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [s("stop", {
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.25"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.66"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "1"
                    }
                })], 1), t._v(" "), s("path", {
                    staticClass: "base",
                    attrs: {
                        d: "M874.2,448.9c-15.3,0.7-30.5,1.5-45.8,2.2c1.9,56.4-99,58.5-105.6,5.1c-15.3,0.7-30.5,1.5-45.8,2.2c3.5,64.6,0.4,\n                    128.5-9.3,192.6c10.1,1.2,20.2,2.4,30.3,3.7c14.6-52.8,139.3-42.5,134.9,16.3c10.1,1.2,20.2,2.4,30.3,3.7C874.8,\n                    599.5,878.5,524.7,874.2,448.9z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "crystal",
                    attrs: {
                        d: "M702.2,562l-25.2,0.8c-0.1,1.9-0.2,3.8-0.3,5.7l25.8-4.4C703.7,563.8,703.5,562,702.2,562z M708.8,585l-34.5,13.2\n                    c-0.3,2.9-0.6,5.8-0.9,8.8l36.4-20C710.9,586.3,710.1,584.7,708.8,585z M723.3,604.6l-54.6,46.5c5,0.6,10,1.2,14.9,\n                    1.8l41.3-46.8C725.8,605.1,724.4,603.8,723.3,604.6z M825.9,506.9L875,465c-0.2-5.4-0.5-10.7-0.8-16.1c-0.1,0-0.2,\n                    0-0.3,0l-49.7,56.5C823.5,506.4,824.8,507.7,825.9,506.9z M828.8,451.1c-0.1,0-0.2,0-0.3,0c0,0.2,0,0.4,0,0.5\n                    L828.8,451.1z M744.1,618.2l-2.1,3.8c1.1-0.2,2.2-0.4,3.3-0.6l0.9-2.3C746.5,617.9,744.8,617.2,744.1,618.2z\n                    M805.1,493.2l3.8-6.9c-1.5,0.9-3,1.7-4.6,2.5l-1.3,3.5C802.7,493.6,804.4,494.3,805.1,493.2z M732.7,499.5\n                    l-28.1-42.4c-4.1,0.2-8.2,0.4-12.3,0.6l38.5,43.1C731.8,501.6,733.3,500.6,732.7,499.5z M698.1,654.6c1.1-3.9,\n                    2.8-7.5,5-10.7l-8.3,10.3C695.8,654.4,697,654.5,698.1,654.6z M703.7,540.2c1.3,0.1,1.8-1.6,0.6-2.1l-26.1-8c0,\n                    2-0.1,3.9-0.2,5.9L703.7,540.2z M875.8,495.1c-0.1-6.2-0.2-12.4-0.4-18.6l-98.2,76.9l84-103.9c-7.2,0.3-14.4,\n                    0.7-21.6,1l-63.4,102.3l20.2-60.9c-3.2,1-6.6,1.7-10,2.2l-11.3,58.4l-2.7-57.8c-3-0.2-6-0.5-9-1.1l10.5,59\n                    l-28.6-65.1c-11.9-6.3-20.7-16.8-22.5-31.3c-2.6,0.1-5.3,0.3-7.9,0.4l57.9,96.6l-92.1-94.9l-3.7,0.2c0.4,6.6,0.6,\n                    13.1,0.9,19.7l94.2,75.9l-93.6-46c0,4.7,0,9.5-0.1,14.2l93.2,32.8l-93.7-11.6c-0.1,4-0.3,8-0.5,12.1l94.2,0.6\n                    l-95.4,20.1c-0.3,4.5-0.7,9-1.1,13.6l96.8-32.6l-99.6,60.2c-0.8,7.1-1.7,14.2-2.7,21.3l103-80.6l-65.4,80.9\n                    c6.5-6.8,15.5-11.7,25.8-14.7l40.6-65.6l-20.6,62c3.2-0.2,6.5-0.3,9.8-0.3l11.9-61.4l3,62.6c3.3,0.5,6.6,1.1,9.7,\n                    1.9l-11.5-64.6l31.6,72.1c16.1,8.5,26.9,22,25.6,40.1c4.1,0.5,8.2,1,12.3,1.5l-68.5-114.1l89.9,92.6c0.9-6.6,\n                    1.7-13.2,2.4-19.7l-91.5-73.7l94.2,46.3c0.4-4.6,0.8-9.3,1.1-13.9l-94.9-33.4l96.2,11.9c0.2-4.1,0.4-8.2,0.6-12.4\n                    l-96.7-0.6l97.5-20.6c0.1-4.5,0.2-9,0.2-13.5l-98,33L875.8,495.1z M713.6,518.2c1.2,0.5,2.3-1,1.3-1.8l-36.7-27.1\n                    c0.1,3.3,0.1,6.5,0.2,9.8L713.6,518.2z M793.7,622.2l0.7,3.2c1.2,0.4,2.3,0.8,3.4,1.2l-1.9-5C795.3,620.5,793.5,\n                    621,793.7,622.2z M839.4,524.5c-1.1,0.7-0.3,2.3,1,2l35.5-13.6c0-2.8,0-5.6,0-8.5L839.4,524.5z M816.5,612l40.7,\n                    61.9l6.1,0.7c0.6-3.8,1.1-7.6,1.7-11.4l-46.6-52.5C817.4,609.9,815.9,610.9,816.5,612z M834.3,595.1l35.8,26.5\n                    c0.3-3,0.6-6,0.9-9.1l-35.4-19.3C834.4,592.7,833.3,594.2,834.3,595.1z M844.9,573.4l28.6,8.8c0.1-2.1,0.3-4.2,\n                    0.4-6.2l-28.4-4.7C844.2,571.1,843.7,572.9,844.9,573.4z M847.1,549.5l28.2-0.9c0.1-2,0.1-4.1,0.2-6.1l-28.6,4.9\n                    C845.5,547.7,845.7,549.5,847.1,549.5z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text",
                    attrs: {
                        d: "M722.4,534.2c0.8-2.3,1.2-3.4,2-5.7c1,0,1.5,0,2.5,0c2.4,3.2,2.4,6.4,3.3,10.1c2.6,0,4,0,6.6,0c2.8-5.2,4.1-7.7,\n                    6.8-12.8c-0.1-1.2-0.1-1.8-0.2-3.1c-3.7,1.1-6.7,2.5-10.7,1.7c-6.9-0.8-10.3-1.3-17.1-2.3c-18.3,13.3,1.1,30.5,\n                    12.2,41.1c1.4,4.9,1.2,8.7-0.7,13.4c-1.2,0.6-1.9,1.3-3.2,1.7c-1.2-0.9-1.8-1.3-3-2.2c0-3.5,0-5.2-0.1-8.7\n                    c-2.9-0.8-4.3-1.3-7.2-2.1c-1.6,8.5-9.7,13.8-8.1,23.1c12.8-10.6,27.4,1.6,37.4-16.6C747.5,554.3,726.7,549.4,\n                    722.4,534.2z M779.1,532.2c-4.8-2.4-7.2-3.5-12-6c-7.5,0.6-11.3,0.9-18.8,1.2c-1.6,1.1-2.4,1.7-4,2.8c0.5,1.2,0.7,\n                    1.7,1.1,2.9c0.9-0.2,1.3-0.3,2.2-0.6c-0.3,15-0.9,30.1-1.9,45.1c-1.5,1.1-2.3,1.7-3.8,2.8c0.2,0.7,0.4,1,0.6,1.7\n                    c9.1,0,13.6,0.1,22.6,0.6c0.1-0.9,0.2-1.4,0.3-2.3c-2-0.8-3-1.2-5.1-1.9c0.4-8,0.6-11.9,0.8-19.9c4-0.3,6-0.5,\n                    9.9-0.8c3.5-2.3,5.2-3.4,8.6-5.7c1.3-5,2-7.5,3.2-12.5C781.5,536.7,780.7,535.2,779.1,532.2z M767.7,550.4c-1.5,\n                    1.3-2.2,2-3.7,3.3c-0.9,0-1.3,0-2.2,0c-0.4-1.5-0.6-2.2-1-3.6c0.8-7.4,1.2-11.1,1.9-18.5c2.2,0.4,3.3,0.7,5.6,1.1\n                    C768,539.7,767.9,543.3,767.7,550.4z M801.4,532.7c1.1-1.3,1.7-2,2.8-3.4c0-0.2,0-0.3,0-0.6\n                    c-6.7-1.9-12.2-0.6-19-0.7c-0.3,0.8-0.6,1.4-0.8,2.2c1,0.7,1.6,1,2.6,1.7c-0.4,15.4-1.2,30.8-2.4,46.1c-1.3,\n                    1.6-1.9,2.4-3.2,4c0.3,0.8,0.4,1.3,0.6,2.1c7.5,0.4,11.3,0.7,18.8,1.4c0.5-0.4,0.7-0.6,1.2-0.9\n                    c-1-1.3-1.5-1.9-2.6-3.2C800.5,564.5,801.1,549.8,801.4,532.7z M843.7,520.6c-5.1,1.3-7.7,1.9-12.8,3c0,1,0,1.5,0,\n                    2.5c1.6,1.3,2.3,2,3.9,3.4c-0.2,7.9-0.4,11.8-0.7,19.7c-3.6-10.1-5.5-14.9-9.3-24.1c-7,1-10.6,1.4-17.6,2.1c-0.4,\n                    1.2-0.6,1.9-0.9,3.1c1.2,0.6,1.8,1,3.1,1.6c-0.3,16.6-0.8,33.1-1.6,49.7c-1.5,0.8-2.2,1.2-3.7,2.1c0.3,1,0.5,1.5,\n                    0.9,2.5c6.6,0.6,9.8,1,16.4,1.9c0.4-1.1,0.6-1.7,0.9-2.8c-1.9-1.1-2.9-1.6-4.8-2.6c1.1-12,1.5-18.1,2.2-30.2c5.6,\n                    14.3,8.2,21.8,13.1,38.3c3.7,0.6,5.6,0.9,9.2,1.6c1.6-21.6,2.6-43.2,2.9-64.9c0.9-1.5,1.4-2.2,2.4-3.7C845.7,522.5,\n                    845.1,521.8,843.7,520.6z"
                    }
                })], 1), t._v(" "), s("g", {
                    staticClass: "light light-5 white",
                    class: {
                        on: t.lights[5]
                    }
                }, [s("radialGradient", {
                    staticClass: "light-gradient",
                    attrs: {
                        id: "light-5-gradient",
                        cx: "787",
                        cy: "683",
                        r: "102",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [s("stop", {
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.25"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.66"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "1"
                    }
                })], 1), t._v(" "), s("path", {
                    staticClass: "base",
                    attrs: {
                        d: "M833,671c-13.1,56.6-136.6,39.5-134.9-16.3C712.6,601.8,837.4,612.1,833,671z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "crystal",
                    attrs: {
                        d: "M753.4,625.5l-1.1-4.8c-1,0.1-2,0.2-2.9,0.3l2.5,4.9C752.3,626.5,753.6,626.2,753.4,625.5z M770.2,624.3l0.8-3.6\n                    c-0.8-0.1-1.7-0.1-2.5-0.2l0.2,3.7C768.8,624.9,770,625,770.2,624.3z M738.2,631.2l-5.1-7c-1.2,0.4-2.5,0.8-3.7,1.2\n                    l7.6,6.6C737.6,632.4,738.6,631.8,738.2,631.2z M726.3,640.6l-11.9-7.9c-1.3,0.9-2.5,1.8-3.7,2.8l14.7,6.1C726.3,\n                    641.9,727,641,726.3,640.6z M800.3,635.3l6.9-4.5c-1-0.5-1.9-1-2.9-1.4l-5.1,5.1C798.7,635,799.6,635.7,800.3,\n                    635.3z M814.4,658.9l17.6,0c-0.3-1.4-0.8-2.7-1.3-4l-16.5,2.8C813.4,657.9,813.6,658.9,814.4,658.9z M810,646.1\n                    l12.8-3.7c-0.9-0.9-1.8-1.9-2.8-2.8l-10.8,5.3C808.6,645.4,809.2,646.3,810,646.1z M719.3,652.6l-18.3-5.3c-0.7,\n                    1.4-1.4,2.8-1.9,4.3l19.8,2.1C719.8,653.8,720.1,652.9,719.3,652.6z M786.5,627.7l2.8-3.8c-0.9-0.2-1.7-0.4-2.6-0.6\n                    l-1.6,3.9C784.9,627.9,786,628.3,786.5,627.7z M745.8,697l-3.1,4.2c0.9,0.3,1.8,0.5,2.7,0.8l1.8-4.5C747.4,696.8,\n                    746.3,696.4,745.8,697z M806,684.2l13,8.6c1.2-1,2.4-2,3.5-3.1l-15.7-6.5C806,682.9,805.3,683.7,806,684.2z M813,\n                    672.1l17.9,5.2c0.6-1.4,1.1-2.8,1.5-4.3l-19.1-2C812.5,670.9,812.2,671.9,813,672.1z M717.8,665.8l-18.3,0c0.4,1.4,\n                    0.9,2.8,1.5,4.1l17-2.9C718.9,666.8,718.7,665.8,717.8,665.8z M832.7,662.6l-64.2-0.4l60.7-10.7c-1-2-2.3-4-3.7-5.8\n                    l-57.2,16L817,637c-1.8-1.4-3.8-2.8-5.9-4.1l-43.3,28.1l32.5-33.5c-2.1-0.9-4.3-1.7-6.6-2.4l-26.6,35.5l15.3-38.4\n                    c-2.2-0.4-4.5-0.8-6.8-1.1l-9.2,39.3l-2.4-40.2c-2.3-0.1-4.7-0.1-7,0l8.6,40.3L745,621.5c-2.5,0.4-4.9,0.9-7.3,1.4\n                    l27.3,38l-39.8-34c-2.4,1-4.8,2.2-7,3.4l46.2,31l-56.7-23.1c-1.8,1.8-3.3,3.7-4.7,5.7l61.1,18l-66.1-6.7c0,2.4,0.1,\n                    4.7,0.5,6.9l65.5,0.4l-61.4,10.8c1.1,2,2.5,4,4,5.8l57.7-16.1l-48.9,24.6c1.8,1.4,3.8,2.8,5.9,4.1l43.5-28.2L732,\n                    697.4c2.1,0.9,4.3,1.8,6.5,2.5l26.9-36l-15.6,39.2c2.3,0.5,4.5,1,6.8,1.3l9.5-40.3l2.4,41.6c2.4,0.1,4.8,0.2,7.2,\n                    0.1l-8.9-41.8l21.6,40.8c2.6-0.4,5.1-0.9,7.6-1.5l-28.5-39.6l41.2,35.2c2.4-1.1,4.7-2.4,6.8-3.8l-47.5-31.9l57.2,\n                    23.3c1.5-1.8,2.9-3.8,4-6l-60.9-17.9l64.6,6.6C833.2,667,833.1,664.8,832.7,662.6z M794.1,693.6l6.3,8.6c1.4-0.4,\n                    2.7-0.9,4.1-1.4l-9.1-7.9C794.7,692.4,793.7,692.9,794.1,693.6z M722.3,678.6l-12.9,3.7c0.9,0.9,1.8,1.9,2.8,2.7\n                    l10.8-5.3C723.7,679.3,723.1,678.4,722.3,678.6z M778.8,699.2l1.4,6.4c1.1-0.1,2.3-0.2,3.4-0.3l-3.4-6.5C779.9,\n                    698.2,778.7,698.5,778.8,699.2z M732,689.4L725,694c0.9,0.5,1.9,1,2.9,1.5l5.1-5.2C733.6,689.7,732.7,689,732,\n                    689.4z M762.1,700.4l-1,4.6c0.9,0.1,1.9,0.2,2.8,0.3l-0.2-4.9C763.5,699.8,762.3,699.7,762.1,700.4z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text",
                    attrs: {
                        d: "M743.3,651.2c3,2.3,4.5,3.5,7.6,5.8c0-3.4-0.1-5.1-0.2-8.5c-9.7-0.8-14.5-1.2-24.2-2.1c-0.6,2.7-1,4-1.6,6.7\n                    c3.4-1.1,5.1-1.7,8.4-2.8c0.5,0.1,0.7,0.2,1.2,0.3c-1.4,8.2-1.2,15.4-7.4,21.9c5.6,0.7,8.4,1,14,1.6\n                    c-4.1-7.8-0.6-14.6-0.3-22.9C741.8,651.2,742.3,651.2,743.3,651.2z M785.1,651.7c-5.9-0.6-8.9-0.9-14.8-1.5c1,2.4,\n                    1.5,3.7,2.5,6.1c-0.7,2.4-1,3.7-1.7,6.1c-4.1-0.4-6.1-0.6-10.1-0.9c0-2.6,0.1-4,0.1-6.6c1.7-2,2.6-3,4.3-5\n                    c-5.3-0.8-7.9-1.2-13.2-2c4.7,7.3,1.9,14.2,1.5,22.3c-2.2,2.1-3.2,3.1-5.4,5.1c5.3,0.6,7.9,0.9,13.1,1.6\n                    c-1.2-4-1.5-7.4-0.8-11.6c4,0.5,5.9,0.8,9.9,1.3c-0.6,4.6-2.3,8.1-5,11.9c5.3,0.2,8,0.3,13.3,0.5\n                    c-0.9-2.3-1.3-3.4-2.2-5.6c1.1-6.5,1.7-9.7,2.7-16.2C781.6,655,782.7,653.9,785.1,651.7z M792.5,678.2c-0.7-3.7,\n                    0.2-6.6,0.9-10.2c1.7,0,2.5-0.1,4.2-0.1c1.7,1.8,2.5,2.7,4.2,4.6c0.4-4.1,0.6-6.1,1-10.2c-1.9,0.9-2.8,1.3-4.7,2.2\n                    l-4-0.5c0.6-3,0.9-4.5,1.5-7.4c2.1,0.3,3.1,0.4,5.2,0.7c2.1,1.9,3.2,2.8,5.3,4.7c-0.2-2.9-0.2-4.4-0.4-7.3\n                    c-6.9-0.4-12.4-1.6-19.1-2.8c3,9.6,1,20.1-5.8,27.8c8.6,1.5,12.9,2.2,21.6,3.7c1-3.3,1.5-4.9,2.5-8.2c-3.2,1.7-4.8,\n                    2.5-8,4.2C795.1,678.9,794.2,678.7,792.5,678.2z"
                    }
                })], 1), t._v(" "), s("g", {
                    staticClass: "light light-6 yellow",
                    class: {
                        on: t.lights[6]
                    }
                }, [s("radialGradient", {
                    staticClass: "light-gradient",
                    attrs: {
                        id: "light-6-gradient",
                        cx: "780",
                        cy: "775",
                        r: "229",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [s("stop", {
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.25"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.66"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "1"
                    }
                })], 1), t._v(" "), s("path", {
                    staticClass: "base",
                    attrs: {
                        d: "M950.1,685.1c-39-4.7-78.1-9.4-117.1-14.2c0,0,0,0,0,0c-13.1,56.6-136.6,39.5-134.9-16.3c0,0,0,0,0,0\n                    c-39-4.7-78.1-9.4-117.1-14.2c-10.2-1.2-17.8,8.2-13.4,16.4c26.1,50,46.7,101.3,62.7,154.9c60.1,16.3,120.2,32.7,\n                    180.3,49c52.9-46.4,101.3-96.3,145.8-150.1C964,701.2,960.3,686.4,950.1,685.1z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "crystal",
                    attrs: {
                        d: "M672,726.4l-93.6-48.1c3,6.2,6,12.4,8.8,18.7l83.6,31.2C672.2,728.5,673.2,727.1,672,726.4z M663,746.7l-59.5-11.6\n                c1.2,3,2.4,6,3.5,9l55.6,4.6C664.2,748.7,664.4,747.1,663,746.7z M689.5,710l-62.8-64c-9-1.1-18.1-2.2-27.1-3.3l88.1,\n                68.5C688.7,712,690.3,710.9,689.5,710z M673.9,789.1l-45.3,17.3c0.5,1.8,1.1,3.5,1.6,5.3c1.3,0.4,2.7,0.7,4,1.1\n                l41-22.1C676.3,790.1,675.2,788.7,673.9,789.1z M663.7,768.5l-46.2,3.7c0.8,2.3,1.6,4.6,2.4,6.9l44.4-8.7C665.6,770.1,\n                665.1,768.5,663.7,768.5z M811.6,728.4l117.4-45.8c-10.1-1.2-20.2-2.4-30.4-3.7l-88.4,47.7C809.1,727.4,810.2,728.8,\n                811.6,728.4z M833,671L833,671c-0.9,3.8-2.3,7.2-4.1,10.4l11.3-9.5C837.9,671.5,835.4,671.2,833,671z M713.4,699.4\n                L701.5,671c-0.4-0.9-0.8-1.8-1.2-2.8l-5.9-14c-4.4-0.5-8.8-1.1-13.1-1.6l29.7,47.5C711.8,701.1,713.7,700.5,713.4,\n                699.4z M793.1,711.4l13.9-11.7c-3.1,1.3-6.3,2.4-9.7,3.3l-6.3,7.1C790.3,711.1,792,712.2,793.1,711.4z M951.5,685.4\n                l-205.3,71.9l135.9-80.4c-9.5-1.1-19-2.3-28.5-3.4l-108.5,83.1l41.2-51.5c-4.2,0.5-8.4,0.8-12.8,0.7L744.1,756\n                l13.3-51.5c-3.2-0.5-6.4-1.1-9.5-1.9l-5.1,53.2l-11.5-58.8c-4.9-2.2-9.5-4.8-13.6-7.7l23.9,66.6l-72.4-104.9\n                c-8.8-1.1-17.7-2.1-26.5-3.2l97.7,108.5L580,640.4c-6.6-0.4-11.9,3.6-13.4,8.7v5.5c0.2,0.8,0.5,1.5,0.9,2.3c0.6,\n                1.1,1.1,2.2,1.7,3.3l170.6,97.2l-147.7-49.5c2.7,6.1,5.3,12.2,7.9,18.4l139.3,32l-129.2-6.4c1.6,4.4,3.2,8.8,4.8,13.2\n                l124.4-5.8l-117.1,27.1c1.4,4.2,2.8,8.5,4.1,12.8l113.5-38.9l-94.3,55.7c5.8,1.6,11.5,3.1,17.3,4.7l77.9-59.7l-53.2,\n                66.4c4.4,1.2,8.9,2.4,13.3,3.6l41-69.5l-19.5,75.3c4.4,1.2,8.8,2.4,13.2,3.6l7.5-78.8l16.8,85.4c5.6,1.5,11.2,3.1,16.9,\n                4.6l-32.4-90.1l67.6,98c4.1-3.6,8.2-7.3,12.3-11L745.5,761l97.9,69.9c3.6-3.4,7.2-6.8,10.7-10.2l-107.8-60.5l126.4,42.3\n                c3.9-3.9,7.7-7.8,11.6-11.7l-137.6-31.6l160.1,7.9c5.2-5.6,10.4-11.3,15.6-17.1l-175.9,8.1l211.9-50.8C962.9,698.7,\n                959.6,687.5,951.5,685.4z M796,807.5l34.6,35.3c2.2-2,4.4-4.1,6.6-6.1l-39.3-30.5C796.7,805.5,795.2,806.5,796,807.5z\n                M822.4,770.7l68.4,13.3c2.9-3,5.7-6,8.6-9l-76.6-6.3C821.3,768.8,821,770.4,822.4,770.7z M813.5,791.1l46.6,24c2.2-2.1,\n                4.3-4.2,6.5-6.3l-51.8-19.4C813.3,788.9,812.3,790.3,813.5,791.1z M821.8,749l110-9.4c5-5.7,9.9-11.4,14.8-17.2L821.2,\n                747C819.8,747.4,820.3,749,821.8,749z M692.4,806l-20.5,17.1c2.3,0.6,4.6,1.2,6.9,1.9l15.6-17.7C695.1,806.3,693.4,\n                805.3,692.4,806z M772.1,818l15.1,36.4c4.1,1.1,8.3,2.2,12.4,3.4l-25.2-40.4C773.7,816.4,771.7,816.9,772.1,818z\n                M716.9,817.3l-8.3,15.8c1.8,0.5,3.6,1,5.5,1.5l5.3-16.6C719.6,816.8,717.6,816.3,716.9,817.3z M744.6,821.4l-0.9,21.2\n                c2.2,0.6,4.5,1.2,6.7,1.8l-3.2-23C746.9,820.3,744.8,820.3,744.6,821.4z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "text",
                    attrs: {
                        d: "M698.4,723.6c0-0.5,0.1-0.7,0.1-1.2c-6.5-1.5-9.7-2.3-16.2-4c0.4,1.9,1.4,2.9,2.2,4.6c-2.7,7.5-5,13.4-7.9,20.9\n                    c-0.8-8.9-1.5-16.6-2.3-25.5c0.8-0.6,1.2-0.9,2-1.6c0-0.3,0-0.4,0.1-0.6c-7.3-2.1-10.9-3.1-18.2-5.4c-0.9,0.3-1.3,\n                    0.4-2.1,0.7c4.1,9,4.8,18.7,0.4,27.7c-0.8-9.2-1.5-16.8-2.7-26.1c0.9-1.5,2-2.2,2.4-3.8c-7.8-2.3-11.7-3.5-19.4-6\n                    c-0.6,0.7-1.1,1.3-1.7,1.9c0.7,0.6,1,0.8,1.7,1.4c6.1,23.5,3.5,46.7,9.1,69.6c3.2-0.3,4.8-0.4,8-0.7c3.3-9.1,\n                    4.9-13.6,7.9-22.6c1.6,9.9-1.5,17.5,2.9,26.5c3,0.1,4.5,0.2,7.6,0.3c6.8-18.5,16.4-36.4,21.4-55.3C695.7,724.3,\n                    696.6,724.1,698.4,723.6z M723.9,788.4c5.5-17.9,10.5-35.9,15.1-54c0.9-0.4,1.3-0.7,2.2-1.1c-1-1-1.5-1.4-2.4-2.4\n                    c-7.1-1.3-10.7-2-17.8-3.5c0,0,0-0.1,0-0.1c-8.5-1.7-12.7-2.7-21.1-4.6c-0.5,0.7-0.7,1-1.2,1.7c0.8,1.3,1.3,2,2.1,\n                    3.3c-3.2,17.2-6.8,34.2-10.7,51.2c-1.6,1.6-2.4,2.4-4,4.1c0.1,1.4,0.1,2,0.2,3.4c7.7,1.7,11.6,2.6,19.3,4.3\n                    c0.3-0.7,0.5-1,0.8-1.7c6.5,1.8,9.8,2.8,16.3,4.6c1.7-1.8,2.5-2.6,4.2-4.4C725.8,788.9,725.1,788.7,723.9,788.4z\n                    M707.5,785.6c-0.9,0-1.4,0-2.3-0.1c0,0.5-0.1,0.8-0.1,1.3c-0.2-0.1-0.3-0.1-0.4-0.2c3.1-12.7,4.5-19.1,7.1-31.9\n                    c1.7,0.4,2.5,0.6,4.2,1C712.7,767.7,711,773.7,707.5,785.6z M717.3,750.3c-1.8-0.4-2.7-0.6-4.5-1c1.9-7.3,2.9-10.9,\n                    4.6-18.2c1-0.5,1.4-0.8,2.4-1.4c0.5,0.7,0.7,1,1.2,1.7C719.6,739,718.9,742.8,717.3,750.3z M761.8,784c-3.3,\n                    3.4-4.9,5.1-8.1,8.5c-1.9,0.6-2.8,0.9-4.7,1.4c-1.5-0.4-2.2-0.7-3.7-1.1c1.5-10.3,5.4-16.1,8-26.4c2.1,0.5,3.1,0.8,\n                    5.2,1.3c0.2,2.3,0.9,3.8,1.4,6c2.9-0.7,4.3-1,7.2-1.7c1.3-4.1,2-6.2,3.3-10.3c-1.8-1.7-2.8-2.6-4.6-4.4c-2.2,\n                    1.9-3.4,2.9-5.6,4.8c-2.4-0.4-3.6-0.5-6-0.9c2.6-8.3,3.8-12.4,6.3-20.8c2.4-0.2,3.9,1,6.2,1.6c2.9,3,3.4,6.2,4,10.1\n                    c2.9,0.3,4.4,0.5,7.4,0.8c0.3-6.2,0.4-9.3,0.4-15.5c-13.5-1.4-20.2-2.4-33.4-4.6c-0.6,0.4-0.9,0.7-1.5,1.1c0.5,1.3,\n                    0.8,2,1.3,3.3c-4.3,17.9-9.1,35.6-14.4,53.2c-1.4,1-2.2,1.5-3.6,2.5c0.1,0.6,0.2,0.8,0.3,1.4c12.8,3.2,19.2,4.8,\n                    31.9,7.9c3.5-6,6.9-10.7,8.8-17.4C765.4,784.5,764.2,784.3,761.8,784z M798.8,791.1c-5.2,4.6-9.3,13.2-17.5,9.7\n                    c2.3-11,6.7-16.9,10.1-27.8c2.1,0.4,3.1,0.7,5.2,1.1c0,2.4,0.7,3.9,1,6.3c3-0.8,4.5-1.2,7.5-2.1c1.7-4.4,2.5-6.7,\n                    4.1-11.1c-1.7-1.7-2.6-2.6-4.4-4.3c-2.4,2.2-3.6,3.2-6.1,5.3c-2.4-0.2-3.6-0.4-6.1-0.6c3.2-8.8,4.8-13.2,7.8-22\n                    c2.3-0.4,4,0.7,6.2,1.2c2.9,3.1,3,6.3,3.4,10.3c3,0.2,4.5,0.2,7.5,0.4c0.7-6.6,1-9.9,1.5-16.4\n                    c-13.7-0.4-20.5-0.8-34-2.1c-0.7,0.5-1,0.7-1.6,1.2c0.5,1.3,0.7,2,1.1,3.3c-5.5,18.6-11.7,37-18.3,55.2c-1.5,\n                    1.1-2.3,1.6-3.8,2.6c0.1,0.6,0.1,0.9,0.2,1.4c12.8,3.2,19.1,4.7,31.9,7.9c4-6.4,7.8-11.6,10.3-18.8C802.5,791.5,\n                    801.3,791.4,798.8,791.1z M849,744.6c0.4-1,0.6-1.5,0.9-2.5c-9.6,0.1-14.3,0-23.8-0.3c-0.7,0.8-1.1,1.2-1.8,1.9\n                    c3.7,16.3-14.4,45.2-19.7,62.5c-1.8,0.2-2.7,0.3-4.4,0.5c-0.1,1.7-0.2,2.5-0.3,4.2c12.3,2,20.6,7.3,33.1,5.9\n                    c4.4-6.9,6.6-10.4,10.9-17.4c-3.4-0.5-5.1-0.8-8.5-1.3c-3.5,4.7-6,8.9-11.6,11.5c-2-0.4-2.9-0.6-4.9-1c8.7-20,\n                    16.9-40,24.7-60.3C845.7,746.8,846.8,746.1,849,744.6z"
                    }
                })], 1), t._v(" "), s("g", {
                    staticClass: "light light-7 white",
                    class: {
                        on: t.lights[7]
                    }
                }, [s("radialGradient", {
                    staticClass: "light-gradient",
                    attrs: {
                        id: "light-7-gradient",
                        cx: "702",
                        cy: "906",
                        r: "117",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [s("stop", {
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.25"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "0.66"
                    }
                }), t._v(" "), s("stop", {
                    attrs: {
                        offset: "1"
                    }
                })], 1), t._v(" "), s("path", {
                    staticClass: "base",
                    attrs: {
                        d: "M645.4,874.4c4.1,28.1,7,56.1,8.8,84.4c0.5,9.4,10.8,13.7,19.5,7.7c47.3-33.3,92.9-68.6,136.9-105.7\n                    c-60.1-16.3-120.2-32.7-180.3-49C636.1,832.5,641.2,853.3,645.4,874.4z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "crystal crystal-7",
                    attrs: {
                        d: "M653,873.3l-8.4-2.6c0.2,0.9,0.4,1.9,0.6,2.8l7.4,1.2C653.5,874.8,653.8,873.6,653,873.3z M660.2,858.5l-21.9-16.2\n                c0.6,2.3,1.1,4.6,1.6,6.9l19.4,10.5C660.1,860.1,660.9,859.1,660.2,858.5z M672.3,847l-19.2-29l-11.5-3.1l29.5,33\n                C671.7,848.5,672.7,847.8,672.3,847z M651.5,889.5l-4.1,0.1c0.1,0.7,0.2,1.3,0.3,2l4-0.7C652.6,890.7,652.4,889.5,\n                651.5,889.5z M656,905.1l-6.4,2.4c0.1,0.9,0.2,1.7,0.3,2.6l6.8-3.7C657.5,906,656.9,904.9,656,905.1z M721.5,842.8\n                l3-5.4c-0.8-0.2-1.6-0.4-2.4-0.6l-2.1,5.4C719.8,843,721,843.5,721.5,842.8z M735.6,852.1l10.3-8.8\n                c-1.2-0.3-2.5-0.7-3.7-1l-7.7,8.8C733.9,851.7,734.9,852.6,735.6,852.1z M687.8,840.1l-3-13.5c-1.4-0.4-2.9-0.8-4.3-1.2\n                l5.9,15.1C686.7,841.3,687.9,840.9,687.8,840.1z M704.9,838.6l0.9-6.3c-0.8-0.2-1.7-0.5-2.5-0.7l0,6.9C703.4,839.4,\n                704.7,839.5,704.9,838.6z M745.5,865.3l33.9-13c-3-0.8-6-1.6-9-2.4L744.8,864C744,864.5,744.6,865.6,745.5,865.3z\n                M741.3,911.9l3.1,2.3c0.6-0.5,1.2-0.9,1.7-1.4l-4-2.2C741.4,910.4,740.7,911.4,741.3,911.9z M665.9,918.4L652,930.3\n                c0.2,1.9,0.3,3.8,0.5,5.7l14.6-16.5C667.6,918.7,666.6,917.9,665.9,918.4z M748.5,897.2l12.7,3.9c1.1-0.9,2.3-1.8,\n                3.4-2.7l-15.7-2.6C748,895.7,747.7,896.9,748.5,897.2z M789.5,855.1L703,884.3l60.1-36.4c-3.7-1-7.4-2-11.1-3l-49.5,\n                38.8l34.6-42.8c-2.6-0.7-5.1-1.4-7.7-2.1l-27.6,44.5l15.8-47.7c-2.3-0.6-4.7-1.3-7-1.9l-9.6,49.4l-2.5-52.7\n                c-2.7-0.7-5.4-1.5-8.1-2.2l9.8,55l-26.1-59.4c-4.2-1.1-8.3-2.3-12.5-3.4l37.9,63.1l-69.3-71.4c2,7,3.9,14.1,5.7,21.2\n                l63,50.8l-57.6-28.3c0.7,3.2,1.4,6.4,2.1,9.6l55.2,19.4l-52.8-6.5c0.3,2.3,0.7,4.6,1,6.9l51.8,0.3l-50.3,10.6c0.3,2.3,\n                0.6,4.6,0.8,6.9l49.7-16.8l-48.3,29.2c0.3,3,0.6,5.9,0.9,8.9l47.9-37.5l-46.2,57.2c0.4,4.9,0.7,9.9,1,14.8c0,0.7,0.1,\n                1.3,0.3,2l45.6-73.5l-26.3,79.3c4.6-3.2,9.1-6.4,13.6-9.7l13.5-69.4l2.7,57.7c2.5-1.8,4.9-3.6,7.4-5.4l-9.3-52.3l19.6,\n                44.7c1.9-1.4,3.7-2.8,5.6-4.2L702.3,887l33.1,34.2c1.8-1.4,3.6-2.7,5.4-4.1l-38-30.6l47.4,23.3c2.2-1.7,4.4-3.4,6.5-5.1\n                l-53.6-18.9l66.9,8.3c3.5-2.8,7.1-5.7,10.6-8.5l-77.4-0.5L808,862.9c0.8-0.7,1.7-1.4,2.5-2.1C803.5,858.9,796.5,857,\n                789.5,855.1z M750,881l37.7-1.2c3.4-2.8,6.8-5.6,10.1-8.4l-48,8.1C748.9,879.8,749.1,881,750,881z M696.6,931.9l-3.1,\n                20.5c1.6-1.1,3.1-2.3,4.6-3.4l0-17C698.1,931.1,696.8,931,696.6,931.9z M729.2,923.5l1,1.6c0.5-0.4,1-0.7,1.4-1.1\n                l-1.2-1.4C729.9,922,728.8,922.7,729.2,923.5z M680,927.7l-22,39.1c2.1,1.7,4.8,2.6,7.7,2.5l15.7-40.9C681.7,927.5,\n                680.5,927,680,927.7z M713.7,930.4l1.4,6.1c0.7-0.5,1.4-1,2.1-1.5l-1.9-5C714.8,929.2,713.6,929.5,713.7,930.4z"
                    }
                })], 1), t._v(" "), s("path", {
                    staticClass: "outline",
                    attrs: {
                        d: "M950.8,679.9l-82.6-8.5c32.7-210-1-429.2-96.9-621.3c-7.5-16.5-28.9-28.3-49-21.7c-14.2,9.4-140.5,46.4-143.9,68.3c-1.4,\n                8.9-2.7,18.2,1.5,26.6c23.4,47.8,42.2,95.4,57.6,145.4c35.9,122.9,44.7,250.3,25.5,376.3l-81.4-9.8c-7-0.8-13.8,\n                0.6-17.7,5.9c-3.7,5-5.6,12.6-2.7,18c25.8,49.5,49,99.9,65,154c6.2,21.9,9.7,42.2,13.6,62.1c4.1,27.5,7,55.8,8.7,83.8\n                c0.3,8.7,7.7,15.5,16.6,15.5c4,0,9.4-1.3,13-3.8c24.4-17,48.5-37.5,71.7-55.9c79-59.3,151-125.5,213.4-201C972.9,703.3,\n                966.7,682,950.8,679.9z M858.3,670.3l-22-2.8l-6.5-23.3L804.6,625l-32.3-6.8L737,619l-18.3,6.4l-21.9,20.5l-1.3,4.1\n                l-21.8-4.7c9.3-60.5,12.2-121.2,8.7-181.6l37.5-3.9l0.3,5.1l23.1,29.3l47.2,4.5l31.8-18.2l10.8-25.8l35.6-1.5C873.2,\n                525.4,869.7,598.1,858.3,670.3z M830,671.7l-11.6,16l-36,12.8l-37.6-0.9l-31.3-15.8l-11.1-24.1l0.7-10l20.2-17.6\n                l14.1-5.5l34.1-2l29.3,7.4l21.7,16.5L830,671.7z M727.1,462.1l0.6-12.4l10-18.6l26.6-14.7l32.5,2.8l18.5,13.2l8.7,21.6\n                l-8.3,22.7l-27,15.5l-39.6-5.2L727.1,462.1z M589.9,118.9c-4.9-11.2-3.4-23.4,9.7-29.7c0,0,37.9-17.5,72.1-31\n                c28.4-11.2,54.3-18.7,54.3-18.7c11.6-3.7,29.9,1.2,36.5,16.2c27.1,54.3,49.2,110.5,66.2,167.8l-37.7,7.3l-6-13.4\n                l-25.5-14.2l-38.3-0.2l-32.5,22.3l-5.3,29l-36.6,8.3C632.3,213.6,613.2,165.6,589.9,118.9z M788.8,245.6l-14,24.7L739,\n                282.2l-30.3-5.5l-18.4-20.2l6.2-26.6l27.7-17.7l33.2-2.3l21.2,12.9L788.8,245.6z M649.4,270.8l36.1-8.8l17.1,21.6l36.9,\n                6.7l41.1-12.5L798,246l-3.6-7.9l36.3-8.1c20.4,70.8,33.1,143.3,37.8,216.5l-36.7,0.6l-8.1-19.6l-24.2-16l-37.2-1.7\n                L731.5,424l-12.2,24l0.3,4l-37.5,3C677.8,392.8,666.9,331.1,649.4,270.8z M670.4,962.3c-4.6,3.3-10.5,1.8-10.8-3.8\n                c-1.7-47.4-9.6-94.6-22.2-140.7L803.1,860C760.5,895.8,716,930.2,670.4,962.3z M951.9,707.5c-43.4,52.5-91.4,102-142.5,\n                147.1L635,809c-15.3-53.4-36.9-105.3-62.5-154.5c-2.2-5.5,2-10,6.7-10.2c1.5,0,91.7,9.8,93.3,9.9l20.8,3.6l-0.9,3l14.7,\n                27.3l35.3,19.3l41.5,2.4l41.8-15.9l9.9-18.7l22.5,2.9c10.2,2.3,99.1,9.6,95.9,16.1C955.4,697.6,955.4,703.2,951.9,\n                707.5z"
                    }
                })])])
            };
            We._withStripped = !0;
            const Ke = l().extend({
                i18n: {
                    messages: y
                },
                props: {
                    isDown: Boolean,
                    power: Number,
                    tapCount: Number
                },
                data: () => ({
                    reset: !1,
                    idleInterval: null,
                    idleLights: [!0, !1, !1, !1, !1, !1, !1, !1]
                }),
                computed: {
                    lights() {
                        return this.reset ? this.getResetLights() : this.tapCount ? this.getTappingLights() : this.power ? this.getPowerLights() : this.isDown ? this.getDownLights() : this.idleLights
                    }
                },
                watch: {
                    power() {
                        this.reset = !0, window.setTimeout((() => {
                            this.reset = !1
                        }), 50)
                    }
                },
                mounted() {
                    this.idleInterval = window.setInterval(this.onIdleInterval.bind(this), 750)
                },
                beforeDestroy() {
                    window.clearInterval(this.idleInterval), this.idleInterval = null
                },
                methods: {
                    getResetLights: () => [!1, !1, !1, !1, !1, !1, !1, !1],
                    getPowerLights() {
                        return [this.power > .1, this.power > .6, this.power > .75, this.power > .8, this.power > .85, this.power > .9, this.power > .93, this.power > .95]
                    },
                    getTappingLights() {
                        return [this.tapCount > 2, this.tapCount > 5, this.tapCount > 10, this.tapCount > 15, this.tapCount > 20, this.tapCount > 23, this.tapCount > 25, this.tapCount > 28]
                    },
                    getDownLights: () => [!0, !1, !1, !1, !1, !1, !1, !1],
                    onIdleInterval() {
                        const t = this.idleLights.indexOf(!0); - 1 !== t && (this.$set(this.idleLights, t, !1), t === this.idleLights.length - 1 ? this.$set(this.idleLights, 0, !0) : this.$set(this.idleLights, t + 1, !0))
                    }
                }
            });
            var je = (0, p.Z)(Ke, We, [], !1, null, "410a49b0", null);
            je.options.__file = "src/games/pp8/the-wheel/views/spin/ArrowBox.vue";
            const Ve = je.exports,
                He = l().extend({
                    components: {
                        ArrowBox: Ve
                    },
                    i18n: {
                        messages: y
                    },
                    bb: {
                        small: (t, e) => `<tspan style="font-size: 120px;" dy="-15">${e}</tspan><tspan dy="15"> </tspan>`
                    },
                    props: {
                        isDown: Boolean,
                        power: Number,
                        tapCount: Number
                    }
                });
            var Fe = (0, p.Z)(He, Ye, [], !1, null, "0184ede7", null);
            Fe.options.__file = "src/games/pp8/the-wheel/views/spin/Main.vue";
            const qe = Fe.exports;
            var Xe = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "decor rainbow-wheel"
                }, [s("div", {
                    staticClass: "rainbow-box"
                }, [s("svg", {
                    staticClass: "spiral",
                    attrs: {
                        viewBox: "0 0 1000 1000"
                    }
                }, [s("path", {
                    ref: "arm-7",
                    attrs: {
                        d: "M498.9.84V257.25l34.9-80,50.8-80.89L662.18.84Zm22.63,532.89-13.32,5.82,12.2,71-2.82,73.2L498.9,749.07V1000h8.23\n                    l41.42-108.89L572.21,789l4-98.2L558.7,608.25Z"
                    }
                }), t._v(" "), s("path", {
                    ref: "arm-0",
                    attrs: {
                        d: "M507.27,539.93l-8.37.61V711.37l9.12-31,4.7-49.51L512,589.37ZM698.16.84,635.69,68.08,588,126.79,543.62,192.3l-26.31,\n                    52.46L498.9,296.09V459.38l7.43.4,19.14-71.71,19.15-46.74,16.28-29.62,46.51-58.5,59.44-53.31L731,154.66,974.44,0Z"
                    }
                }), t._v(" "), s("polygon", {
                    ref: "arm-1",
                    attrs: {
                        points: "1000 29.94 800.56 138.33 736.64 174.93 657.21 228.18 613.88 265.6 570.99 315.27 546.46 355.9 508.77 460.34\n                    520.78 465.78 567.43 405.53 601.21 372.87 631.19 351.13 703.7 314.22 771 291.22 838.95 276.52 1000 256.78 1000\n                    29.94"
                    }
                }), t._v(" "), s("polygon", {
                    ref: "arm-2",
                    attrs: {
                        points: "1000 286.43 919.74 289.43 803.4 302.21 711.87 326.13 639.03 358.45 603.1 382.18 568.33 413.64 523.22 467.29\n                    532.42 476.3 586.3 445.67 627.73 427.22 681.09 414.34 739.46 408.91 829.56 417.92 912.39 437.04 1000 465.9 1000\n                    286.43"
                    }
                }), t._v(" "), s("polygon", {
                    ref: "arm-3",
                    attrs: {
                        points: "722.57 421.86 650.49 430.31 596.43 446.64 533.36 478.92 538.61 490.94 606.3 480.98 670.76 481.55 731.93 495.46\n                    808.72 526.04 892.63 576.72 1000 662.59 1000 492.9 905.02 453.96 829.39 435.15 722.57 421.86"
                    }
                }), t._v(" "), s("polygon", {
                    ref: "arm-4",
                    attrs: {
                        points: "699.78 497.72 657.1 489.4 602.92 488.03 539.37 493.38 538.8 506.52 623.46 528.29 688.3 560.89 755.23 612.76\n                    811.54 681.46 856.67 747.65 1000 977.76 1000 696.74 864.61 580.83 764.78 521.47 699.78 497.72"
                    }
                }), t._v(" "), s("polygon", {
                    ref: "arm-5",
                    attrs: {
                        points: "702.29 583.48 646.92 547.88 601.45 528.31 538.61 509.52 533.55 521.16 596.58 566.98 636.41 612.2 670.24 669.39\n                    700.04 741.15 719.19 819.99 744.17 1000 973.25 1000 823.66 733.82 762.55 644.29 702.29 583.48"
                    }
                }), t._v(" "), s("polygon", {
                    ref: "arm-6",
                    attrs: {
                        points: "714.78 1000 705.95 860.26 696.1 791.83 672.45 707.36 635.85 629.65 589.67 569.96 531.86 523.78 523.03 532.98\n                    550.25 576.72 575.59 632.47 590.23 718.06 586.29 807.03 563.77 910.09 534.09 1000 714.78 1000"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "f ui d1 brown star",
                    attrs: {
                        points: "498.9 444.38 509.33 455.27 523.22 449.45 525.38 462.59 540.12 461 538.24 475.08 551.94 480.14 545.09 491.69\n                    555.04 500.98 544.62 509.24 549.41 522.1 537.68 525.76 536.46 539.27 525 538.14 518.15 551.1 508.3 544.72 498.9\n                    555.61 498.9 444.38"
                    }
                })])]), t._v(" "), s("svg", {
                    staticClass: "spin-text-box",
                    attrs: {
                        viewBox: "0 0 1000 330"
                    }
                }, [s("path", {
                    staticClass: "text-path",
                    attrs: {
                        id: "spin-text-path",
                        d: "M0,60C88.89,24.52,279.37,0,500,0s411.11,24.52,500,60"
                    }
                }), t._v(" "), s("text", {
                    staticClass: "shadow",
                    attrs: {
                        "text-anchor": "middle"
                    }
                }, [s("textPath", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.$t("SPIN.RAINBOW_BANNER"),
                        expression: "$t('SPIN.RAINBOW_BANNER')"
                    }],
                    staticClass: "spin-text",
                    attrs: {
                        href: "#spin-text-path",
                        startOffset: "50%"
                    }
                })]), t._v(" "), s("text", {
                    attrs: {
                        "text-anchor": "middle"
                    }
                }, [s("textPath", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.$t("SPIN.RAINBOW_BANNER"),
                        expression: "$t('SPIN.RAINBOW_BANNER')"
                    }],
                    staticClass: "spin-text",
                    attrs: {
                        href: "#spin-text-path",
                        startOffset: "50%"
                    }
                })])])])
            };
            Xe._withStripped = !0;
            const Qe = l().extend({
                props: {
                    isSpinning: Boolean,
                    isRainbowActive: Boolean
                },
                i18n: {
                    messages: y
                },
                data: () => ({
                    offTimeline: u.ZP.timeline(),
                    onTimeline: u.ZP.timeline({
                        repeat: -1
                    }),
                    colors: [
                        ["#fabd6e", "#c87407", "#734204", "#0e0800"],
                        ["#9cdc74", "#4e9225", "#2d5415", "#060a03"],
                        ["#50cc5c", "#1d6624", "#113a15", "#020703"],
                        ["#44efed", "#0c8e8d", "#075150", "#010a0a"],
                        ["#4b75f1", "#0c2f97", "#071b56", "#01030b"],
                        ["#b133ff", "#5f0099", "#360058", "#07000b"],
                        ["#e256c6", "#891771", "#4e0d41", "#0a0208"],
                        ["#de6872", "#8e1f29", "#511217", "#0a0203"]
                    ],
                    offSequence: [{
                        pattern: ["ixxxxoooooooo", "iixxxxooooooo", "iiixxxxoooooo", "iiiixxxxooooo", "iiiiixxxxoooo", "iiiiiixxxxooo", "iiiiiiixxxxoo", "iiiiiiiixxxxo"]
                    }],
                    onSequence: [{
                        pattern: ["oxxxxiiiiiiii", "oxxxxiiiiiiii", "ooxxxxiiiiiii", "ooxxxxiiiiiii", "oooxxxxiiiiii", "oooxxxxiiiiii", "ooooxxxxiiiii", "ooooxxxxiiiii"]
                    }, {
                        iterations: 6,
                        wait: 5,
                        pattern: ["xxiiiiiii", "ixxiiiiii", "iixxiiiii", "iiixxiiii", "iiiixxiii", "iiiiixxii", "iiiiiixxi", "iiiiiiixx"]
                    }, {
                        pattern: ["ixxxxxxxxxxxxxxxxiixxiixxiioo", "iiixxxxxxxxxxxxxxiixxiixxiioo", "iiiiixxxxxxxxxxxxiixxiixxiioo", "iiiiiiixxxxxxxxxxiixxiixxiioo", "iiiiiiiiixxxxxxxxiixxiixxiioo", "iiiiiiiiiiixxxxxxiixxiixxiioo", "iiiiiiiiiiiiixxxxiixxiixxiioo", "iiiiiiiiiiiiiiixxiixxiixxiioo"]
                    }, {
                        iterations: 3,
                        wait: 5,
                        pattern: ["ooxxooooooxxoooo", "ooooxxooooooxxoo", "ooooooxxooooooxx", "xxooooooxxoooooo", "ooxxooooooxxoooo", "ooooxxooooooxxoo", "ooooooxxooooooxx", "xxooooooxxoooooo"]
                    }, {
                        pattern: ["ooxxooooooxxiiii", "ooooxxooooooxxii", "ooooooxxooooooxx", "xxooooooxxiiiiii", "ooxxooooooxxiiii", "ooooxxooooooxxii", "ooooooxxooooooxx", "xxooooooxxiiiiii"]
                    }, {
                        pattern: ["oiixxoooooooo", "oiixxxxoooooo", "oxxxxxxxxoooo", "oiixxxxxxxxoo", "oiixxoooooooo", "oiixxxxoooooo", "oxxxxxxxxoooo", "oiixxxxxxxxoo"]
                    }]
                }),
                watch: {
                    isSpinning(t) {
                        t && this.stopLights()
                    },
                    isRainbowActive(t) {
                        t || this.startLights()
                    }
                },
                mounted() {
                    this.initSequence(this.offTimeline, this.offSequence), this.initSequence(this.onTimeline, this.onSequence), this.startLights()
                },
                beforeDestroy() {
                    this.offTimeline.kill(), this.onTimeline.kill()
                },
                methods: {
                    stopLights() {
                        this.onTimeline.pause(), this.offTimeline.timeScale(12).play(0)
                    },
                    startLights() {
                        this.offTimeline.pause(), this.onTimeline.timeScale(12).play(0)
                    },
                    initSequence(t, e) {
                        const s = [
                            ["-", 0],
                            ["-", 0],
                            ["-", 0],
                            ["-", 0],
                            ["-", 0],
                            ["-", 0],
                            ["-", 0],
                            ["-", 0]
                        ];
                        e.forEach((e => {
                            const n = e.iterations || 1;
                            for (let i = 0; i < n; i++)
                                for (let n = 0; n < e.pattern.length; n++) {
                                    const l = this.$refs[`arm-${n}`];
                                    e.wait && 0 === i && (s[n][1] += e.wait);
                                    for (let i = 0; i < e.pattern[n].length; i++) {
                                        if (e.pattern[n][i] !== s[n][0]) {
                                            s[n][0] = e.pattern[n][i];
                                            const a = {
                                                flood: 3,
                                                arm: 2
                                            };
                                            "i" === e.pattern[n][i] && (a.flood = 2, a.arm = 1), "x" === e.pattern[n][i] && (a.flood = 1, a.arm = 0), t.set(l, {
                                                fill: this.colors[n][a.arm]
                                            }, s[n][1])
                                        }
                                        s[n][1] += 1
                                    }
                                }
                        }))
                    }
                }
            });
            var Je = (0, p.Z)(Qe, Xe, [], !1, null, "676f8778", null);
            Je.options.__file = "src/games/pp8/the-wheel/views/spin/Rainbow.vue";
            const ts = Je.exports;
            var es = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "decor win-wheel"
                }, [s("div", {
                    staticClass: "spin-box"
                }, [s("div", {
                    staticClass: "burst"
                }, [s("svg", {
                    attrs: {
                        viewBox: "0 0 1000 1000"
                    }
                }, [s("polygon", {
                    attrs: {
                        points: "937.5,742.2 806.6,795.7 757.8,928.5 617.7,909.4 509.1,1000 397.2,913.3 257.8,937.5 204.3,806.6 71.5,\n                        757.8 90.6,617.7 0,509.1 86.7,397.2 62.5,257.8 193.4,204.3 242.2,71.5 382.3,90.6 490.9,0 602.8,86.7 742.2,\n                        62.5 795.7,193.4 928.5,242.2 909.4,382.3 1000,490.9 913.3,602.8"
                    }
                })])]), t._v(" "), s("div", {
                    staticClass: "burst"
                }, [s("svg", {
                    attrs: {
                        viewBox: "0 0 1000 1000"
                    }
                }, [s("polygon", {
                    attrs: {
                        points: "937.5,742.2 806.6,795.7 757.8,928.5 617.7,909.4 509.1,1000 397.2,913.3 257.8,937.5 204.3,806.6 71.5,\n                        757.8 90.6,617.7 0,509.1 86.7,397.2 62.5,257.8 193.4,204.3 242.2,71.5 382.3,90.6 490.9,0 602.8,86.7 742.2,\n                        62.5 795.7,193.4 928.5,242.2 909.4,382.3 1000,490.9 913.3,602.8"
                    }
                })])])]), t._v(" "), s("svg", {
                    staticClass: "spin-text-box",
                    attrs: {
                        viewBox: "0 0 1000 330"
                    }
                }, [s("path", {
                    staticClass: "text-path",
                    attrs: {
                        id: "spin-text-path",
                        d: "M0,60C88.89,24.52,279.37,0,500,0s411.11,24.52,500,60"
                    }
                }), t._v(" "), s("text", {
                    staticClass: "shadow",
                    attrs: {
                        "text-anchor": "middle"
                    }
                }, [s("textPath", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.$t("SPIN.WIN_BANNER"),
                        expression: "$t('SPIN.WIN_BANNER')"
                    }],
                    staticClass: "spin-text",
                    attrs: {
                        href: "#spin-text-path",
                        startOffset: "50%"
                    }
                })]), t._v(" "), s("text", {
                    attrs: {
                        "text-anchor": "middle"
                    }
                }, [s("textPath", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.$t("SPIN.WIN_BANNER"),
                        expression: "$t('SPIN.WIN_BANNER')"
                    }],
                    staticClass: "spin-text",
                    attrs: {
                        href: "#spin-text-path",
                        startOffset: "50%"
                    }
                })])]), t._v(" "), s("ArrowBox", {
                    attrs: {
                        "is-down": t.isDown,
                        power: t.power,
                        "tap-count": t.tapCount
                    }
                })], 1)
            };
            es._withStripped = !0;
            const ss = l().extend({
                components: {
                    ArrowBox: Ve
                },
                i18n: {
                    messages: y
                },
                bb: {
                    small: (t, e) => `<tspan style="font-size: 130px;" dy="-15">${e}</tspan><tspan dy="15"> </tspan>`
                },
                props: {
                    isDown: Boolean,
                    power: Number,
                    tapCount: Number
                }
            });
            var ns = (0, p.Z)(ss, es, [], !1, null, "0615db9e", null);
            ns.options.__file = "src/games/pp8/the-wheel/views/spin/Win.vue";
            const is = ns.exports;
            u.p8.registerPlugin(Re.FB);
            const ls = l().extend({
                components: {
                    SpinAnswer: Ue,
                    SpinMain: qe,
                    SpinRainbow: ts,
                    SpinWin: is,
                    WheelBox: Et
                },
                props: {
                    info: Object,
                    players: Object,
                    player: Object,
                    isRainbowActive: Boolean
                },
                i18n: {
                    messages: y
                },
                data() {
                    var t;
                    return {
                        isDown: !1,
                        isSpinning: !1,
                        isSending: !1,
                        hasSent: !1,
                        eggNames: {
                            pizza: ["PIZZA", "LEONARDO", "RAPHAEL", "DONATELLO", "MICHELANGELO"],
                            loser: ["REDACTED", "LOSER", "[REDACTED]"],
                            tiny: ["TINY"]
                        },
                        sliceManager: new At(this.player.slices, this.player.category, this.info, this.players),
                        initialY: 0,
                        initialRotation: null !== (t = this.player.initialDegrees + 10) && void 0 !== t ? t : 10,
                        power: 0,
                        velocityTracker: null,
                        velocityTracked: {
                            rotation: 0
                        },
                        tapTimeout: null,
                        tapCount: 0,
                        tapBounds: [2, 30],
                        velocityBounds: [200, 2500],
                        powerBounds: [.5, .95]
                    }
                },
                computed: {
                    category() {
                        return "win" === this.player.category ? "winner" : this.player.category
                    },
                    shouldShowFace() {
                        return "answer" === this.player.category || "main" === this.player.category
                    },
                    egg() {
                        if ("main" === this.player.category) return this.eggNames.pizza.includes(this.info.name) ? "pizza" : this.eggNames.loser.includes(this.info.name) ? "loser" : this.eggNames.tiny.includes(this.info.name) ? "tiny" : void 0
                    },
                    spinBoxStyles() {
                        const t = [];
                        if (this.isDown && t.push("scale(0.98)"), this.tapCount > this.tapBounds[0]) {
                            const e = this.tapCount / this.tapBounds[1] * 2,
                                s = Oe()(-e, e),
                                n = Oe()(-e, e);
                            t.push(`translate(${s}%, ${n}%)`)
                        }
                        return {
                            transform: t.join(" ")
                        }
                    }
                },
                watch: {
                    "player.slices": function(t) {
                        this.sliceManager.parse(t)
                    },
                    isRainbowActive: function(t) {
                        var e;
                        t || (this.hasSent = !1, this.isSpinning = !1, u.p8.killTweensOf(this.velocityTracked), this.velocityTracked.rotation = null !== (e = this.player.initialDegrees + 10) && void 0 !== e ? e : 10)
                    }
                },
                mounted() {
                    this.$vibrate(), this.velocityTracker = Ie.H.track(this.velocityTracked, "rotation")[0]
                },
                beforeDestroy() {
                    this.$emit("statusChange", {
                        type: "none"
                    })
                },
                methods: {
                    onPointerBoxStart(t) {
                        this.hasSent ? t.detail.cancel() : (this.isDown = !0, this.initialRotation = this.velocityTracked.rotation, this.initialY = t.detail.pageY, u.p8.killTweensOf(this.velocityTracked))
                    },
                    onPointerBoxMove(t) {
                        this.velocityTracked.rotation = .5 * -(this.initialY - t.detail.pageY) + this.initialRotation
                    },
                    onPointerBoxEnd(t) {
                        this.isDown = !1;
                        const e = this.velocityTracker.get("rotation"),
                            s = t.detail.totalDistance;
                        if (this.isTap(s)) return void this.onTap(t);
                        if (e < -10) return this.cancelSpin(e, .25), void this.$emit("statusChange", {
                            type: "incorrect",
                            bannerText: "WRONG DIRECTION",
                            timeout: 1e3
                        });
                        if (e < 150) return this.cancelSpin(e, .75), void this.$emit("statusChange", {
                            type: "incorrect",
                            bannerText: "SPIN FASTER",
                            timeout: 1e3
                        });
                        const n = ((t, e) => {
                            const s = [t, e];
                            return s[1] /= document.documentElement.clientHeight, s[0] = (s[0] - 1.5321) / 8331.7168, s[1] = (s[1] - .0255) / 2.2689627383015596, 1 / (1 + 1 / Math.exp(.5167155861854553 - 2.049797296524048 / (1 + 1 / Math.exp(1.5749764442443848 + .4858364462852478 * (s[0] || 0) - 35.69746398925781 * (s[1] || 0))) + 2.2454333305358887 / (1 + 1 / Math.exp(5.62205171585083 * (s[0] || 0) - 8.035783767700195 + 20.694128036499023 * (s[1] || 0))) - 1.5299575328826904 / (1 + 1 / Math.exp(-2.9996628761291504 - 56.206485748291016 * (s[0] || 0) + 22.624845504760742 * (s[1] || 0)))))
                        })(e, s);
                        if (n < .1) return this.cancelSpin(e, .75), void this.$emit("statusChange", {
                            type: "incorrect",
                            bannerText: "SPIN FASTER",
                            timeout: 1e3
                        });
                        this.executeSpin(e, n)
                    },
                    isTap: t => t < 30,
                    onTap(t) {
                        this.hasSent || (this.tapTimeout || (this.tapTimeout = window.setTimeout(this.onTapTimeout.bind(this), 3e3), this.tapCount = 0), this.tapCount += 1, 1 !== this.tapCount && this.tapCount % 5 != 0 || this.$announce(this.$t("ARIA.KEEP_GOING")), this.tapCount > 2 && (this.velocityTracked.rotation -= 2))
                    },
                    onTapTimeout() {
                        if (this.tapTimeout = null, this.tapCount < this.tapBounds[0]) return;
                        const t = this.tapCount / this.tapBounds[1];
                        let e = this.velocityBounds[1] * t,
                            s = this.powerBounds[1] * t;
                        e < this.velocityBounds[0] && (e = this.velocityBounds[0]), e > this.velocityBounds[1] && (e = this.velocityBounds[1]), s < this.powerBounds[0] && (s = this.powerBounds[0]), s > this.powerBounds[1] && (s = this.powerBounds[1]), this.executeSpin(e, s), this.tapCount = 0
                    },
                    cancelSpin(t, e) {
                        u.p8.to(this.velocityTracked, {
                            inertia: {
                                rotation: t * e
                            }
                        })
                    },
                    executeSpin(t, e) {
                        u.p8.to(this.velocityTracked, {
                            inertia: {
                                rotation: t
                            }
                        }), this.$pauseEcastUpdates(), this.isSpinning = !0, this.power = e, this.$announce(this.$t("ARIA.SPIN_POWER", {
                            power: Math.round(100 * e)
                        })), this.send(e), setTimeout((() => this.$resumeEcastUpdates()), 2e3)
                    },
                    send(t) {
                        return e = this, s = void 0, i = function*() {
                            if (!this.isSending) {
                                this.isSending = !0;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "spin",
                                        power: t
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.hasSent = !0, this.isSending = !1
                            }
                        }, new((n = void 0) || (n = Promise))((function(t, l) {
                            function a(t) {
                                try {
                                    o(i.next(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function c(t) {
                                try {
                                    o(i.throw(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function o(e) {
                                var s;
                                e.done ? t(e.value) : (s = e.value, s instanceof n ? s : new n((function(t) {
                                    t(s)
                                }))).then(a, c)
                            }
                            o((i = i.apply(e, s || [])).next())
                        }));
                        var e, s, n, i
                    }
                }
            });
            var as = (0, p.Z)(ls, Ze, [], !1, null, "eb6d1820", null);
            as.options.__file = "src/games/pp8/the-wheel/views/spin/Spin.vue";
            const cs = as.exports;
            var os = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "tapping-list trivia scrollable"
                }, [n("PromptBox", {
                    attrs: {
                        prompt: t.player.prompt
                    }
                }), t._v(" "), n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(66261),
                        expression: "require('../../images/divider-long.inline.svg')"
                    }],
                    staticClass: "divider top"
                }), t._v(" "), t._l(t.choices, (function(e, s) {
                    return n("ToggleButton", {
                        key: e.text,
                        attrs: {
                            choice: e
                        },
                        on: {
                            click: function(e) {
                                return t.onItemClick(s)
                            }
                        }
                    })
                })), t._v(" "), n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(66261),
                        expression: "require('../../images/divider-long.inline.svg')"
                    }],
                    staticClass: "divider bottom"
                }), t._v(" "), n("GemButton", {
                    staticClass: "submit-button",
                    attrs: {
                        "text-key": "SUBMIT",
                        disabled: t.isSending,
                        theme: "submit"
                    },
                    on: {
                        click: t.onSubmitClick
                    }
                })], 2)
            };
            os._withStripped = !0;
            var rs = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "toggle-button",
                    class: {
                        selected: t.choice.isSelected
                    }
                }, [n("svg", {
                    attrs: {
                        viewBox: "0 0 1000 135",
                        preserveAspectRatio: "none",
                        "aria-hidden": "true"
                    }
                }, [n("rect", {
                    staticClass: "field f d4",
                    attrs: {
                        y: "60",
                        width: "1000",
                        height: "15"
                    }
                }), t._v(" "), n("rect", {
                    staticClass: "field f d1",
                    attrs: {
                        y: "60",
                        width: "1000",
                        height: "7"
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "flipper",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [n("div", {
                    staticClass: "face back"
                }, [n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(24626),
                        expression: "require('../../images/toggle.inline.svg')"
                    }]
                }), t._v(" "), n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "YES",
                        expression: "`YES`"
                    }],
                    staticClass: "left"
                }), t._v(" "), n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "YES",
                        expression: "`YES`"
                    }],
                    staticClass: "right"
                }), t._v(" "), n("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.choice.text,
                        expression: "choice.text"
                    }]
                })]), t._v(" "), n("div", {
                    staticClass: "face front"
                }, [n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(24626),
                        expression: "require('../../images/toggle.inline.svg')"
                    }]
                }), t._v(" "), n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "NO",
                        expression: "`NO`"
                    }],
                    staticClass: "left"
                }), t._v(" "), n("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "NO",
                        expression: "`NO`"
                    }],
                    staticClass: "right"
                }), t._v(" "), n("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.choice.text,
                        expression: "choice.text"
                    }]
                })])]), t._v(" "), n("button", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.choice.text,
                        expression: "choice.text"
                    }],
                    attrs: {
                        "aria-label": t.choice.text,
                        "aria-pressed": t.choice.isSelected
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.$emit("click", e)
                        }
                    }
                })])
            };
            rs._withStripped = !0;
            const ps = l().extend({
                props: {
                    choice: Object
                },
                i18n: {
                    messages: y
                }
            });
            var hs = (0, p.Z)(ps, rs, [], !1, null, "3e37dd40", null);
            hs.options.__file = "src/games/pp8/the-wheel/views/tapping-list/ToggleButton.vue";
            const ds = hs.exports;
            var vs = function(t, e, s, n) {
                return new(s || (s = Promise))((function(i, l) {
                    function a(t) {
                        try {
                            o(n.next(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function c(t) {
                        try {
                            o(n.throw(t))
                        } catch (t) {
                            l(t)
                        }
                    }

                    function o(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                            t(e)
                        }))).then(a, c)
                    }
                    o((n = n.apply(t, e || [])).next())
                }))
            };
            const us = l().extend({
                components: {
                    PromptBox: R,
                    GemButton: P,
                    ToggleButton: ds
                },
                props: {
                    player: Object
                },
                data: () => ({
                    choices: [],
                    isSending: !1
                }),
                watch: {
                    "player.choices": function() {
                        this.choices = [...this.player.choices]
                    }
                },
                beforeMount() {
                    this.choices = [...this.player.choices]
                },
                mounted() {
                    this.$vibrate()
                },
                methods: {
                    onItemClick(t) {
                        return vs(this, void 0, void 0, (function*() {
                            if (!this.isSending) {
                                this.isSending = !0, this.choices[t].isSelected = !this.choices[t].isSelected;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "choose",
                                        choice: t,
                                        value: this.choices[t].isSelected
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.isSending = !1
                            }
                        }))
                    },
                    onSubmitClick() {
                        return vs(this, void 0, void 0, (function*() {
                            if (!this.isSending) {
                                this.isSending = !0;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "submit"
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.isSending = !1
                            }
                        }))
                    }
                }
            });
            var Cs = (0, p.Z)(us, os, [], !1, null, "db7f36ae", null);
            Cs.options.__file = "src/games/pp8/the-wheel/views/tapping-list/TappingList.vue";
            const gs = Cs.exports;
            var ms = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "tapping-rapid trivia"
                }, [n("PromptBox", {
                    attrs: {
                        "title-key": "RAPID.BANNER",
                        prompt: t.player.prompt
                    }
                }), t._v(" "), t.player.unit ? n("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.player.unit,
                        expression: "player.unit"
                    }],
                    staticClass: "unit"
                }) : t._e(), t._v(" "), t.player.choices.length ? n("div", {
                    staticClass: "choices"
                }, [n("transition", {
                    attrs: {
                        name: "button",
                        mode: "out-in"
                    }
                }, [n("GemButton", {
                    key: t.player.choices[0].text,
                    attrs: {
                        text: t.player.choices[0].text,
                        disabled: t.isSending,
                        theme: "choice"
                    },
                    on: {
                        click: function(e) {
                            return t.onChoiceClick(0)
                        }
                    }
                })], 1), t._v(" "), n("div", {
                    staticClass: "or"
                }, [n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(66261),
                        expression: "require('../images/divider-long.inline.svg')"
                    }],
                    staticClass: "divider bottom"
                }), t._v(" "), n("p", [n("svg", {
                    staticClass: "ui brown",
                    attrs: {
                        viewBox: "0 0 160 120",
                        preserveAspectRatio: "none"
                    }
                }, [n("polygon", {
                    staticClass: "f d1",
                    attrs: {
                        points: "160,60 80,120 0,60 80,0"
                    }
                })]), t._v("\n                " + t._s(t.$t("OR")) + "\n            ")])]), t._v(" "), n("transition", {
                    attrs: {
                        name: "button",
                        mode: "out-in"
                    }
                }, [n("GemButton", {
                    key: t.player.choices[1].text,
                    attrs: {
                        text: t.player.choices[1].text,
                        disabled: t.isSending,
                        theme: "choice"
                    },
                    on: {
                        click: function(e) {
                            return t.onChoiceClick(1)
                        }
                    }
                })], 1)], 1) : t._e()], 1)
            };
            ms._withStripped = !0;
            const ys = l().extend({
                components: {
                    GemButton: P,
                    PromptBox: R
                },
                props: {
                    player: Object
                },
                i18n: {
                    messages: y
                },
                data: () => ({
                    isSending: !1
                }),
                watch: {
                    player: function(t, e) {
                        const s = e.freezeMs,
                            n = t.freezeMs;
                        n ? this.$emit("statusChange", {
                            type: "frozen",
                            bannerKey: "RAPID.FROZEN"
                        }) : (s && !n && this.$emit("statusChange", {
                            type: "none"
                        }), s || n || this.$emit("statusChange", {
                            type: "correct",
                            bannerKey: "RAPID.CORRECT",
                            timeout: 1e3
                        }))
                    }
                },
                mounted() {
                    this.$vibrate()
                },
                beforeDestroy() {
                    this.$emit("statusChange", {
                        type: "none"
                    })
                },
                methods: {
                    onChoiceClick(t) {
                        return e = this, s = void 0, i = function*() {
                            if (!this.isSending) {
                                this.isSending = !0;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "answer",
                                        answer: t
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.isSending = !1
                            }
                        }, new((n = void 0) || (n = Promise))((function(t, l) {
                            function a(t) {
                                try {
                                    o(i.next(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function c(t) {
                                try {
                                    o(i.throw(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function o(e) {
                                var s;
                                e.done ? t(e.value) : (s = e.value, s instanceof n ? s : new n((function(t) {
                                    t(s)
                                }))).then(a, c)
                            }
                            o((i = i.apply(e, s || [])).next())
                        }));
                        var e, s, n, i
                    }
                }
            });
            var fs = (0, p.Z)(ys, ms, [], !1, null, "42945394", null);
            fs.options.__file = "src/games/pp8/the-wheel/views/TappingRapid.vue";
            const xs = fs.exports;
            var _s = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "typing-list trivia scrollable"
                }, [n("PromptBox", {
                    attrs: {
                        "title-key": t.titleKey,
                        prompt: t.player.prompt
                    }
                }), t._v(" "), n("div", {
                    staticClass: "form-box"
                }, [n("form", {
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                }, [n("Input", {
                    attrs: {
                        "placeholder-key": "TYPING.PLACEHOLDER"
                    },
                    model: {
                        value: t.value,
                        callback: function(e) {
                            t.value = e
                        },
                        expression: "value"
                    }
                }), t._v(" "), n("GemButton", {
                    staticClass: "submit-button",
                    attrs: {
                        "text-key": "SEND",
                        disabled: !t.canSubmit,
                        theme: "submit"
                    },
                    on: {
                        click: t.onSubmit
                    }
                })], 1)]), t._v(" "), n("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(66261),
                        expression: "require('../../images/divider-long.inline.svg')"
                    }],
                    staticClass: "divider"
                }), t._v(" "), n("div", {
                    staticClass: "results-box"
                }, [n("svg", {
                    staticClass: "drawer",
                    attrs: {
                        viewBox: "0 0 200 200"
                    }
                }, [n("radialGradient", {
                    attrs: {
                        id: "internal-gradient",
                        cx: "100",
                        cy: "100",
                        r: "100",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [n("stop", {
                    staticStyle: {
                        "stop-color": "#fffd8d"
                    },
                    attrs: {
                        offset: "0"
                    }
                }), t._v(" "), n("stop", {
                    staticStyle: {
                        "stop-color": "#febb31"
                    },
                    attrs: {
                        offset: "1"
                    }
                })], 1)], 1), t._v(" "), t._l(t.slots, (function(e, s) {
                    return n("div", {
                        key: s
                    }, t._l(e, (function(e, s) {
                        return n("div", {
                            key: s,
                            staticClass: "slot",
                            class: e
                        }, ["empty" === e || "filled" === e ? n("svg", {
                            attrs: {
                                viewBox: "0 0 200 200"
                            }
                        }, [n("polygon", {
                            staticClass: "f edge l1",
                            attrs: {
                                points: "129,148.1 150.1,146 106.4,164 99.7,160.2"
                            }
                        }), t._v(" "), n("polygon", {
                            staticClass: "f edge d1",
                            attrs: {
                                points: "129,148.1 150.1,146 167.6,85.6 146.6,87.7"
                            }
                        }), t._v(" "), n("polygon", {
                            staticClass: "f edge d1",
                            attrs: {
                                points: "144.7,47 167.6,85.6 146.6,87.7 123.6,49.1"
                            }
                        }), t._v(" "), n("polygon", {
                            staticClass: "f edge d2",
                            attrs: {
                                points: "144.7,47 123.6,49.1 86.4,38.8 93.9,33"
                            }
                        }), t._v(" "), n("polygon", {
                            staticClass: "f edge d2",
                            attrs: {
                                points: "26.3,147.1 103.2,197.9 82.1,200 5.3,149.2"
                            }
                        }), t._v(" "), n("polygon", {
                            staticClass: "f edge d1",
                            attrs: {
                                points: "21.1,51.9 26.3,147.1 5.3,149.2 0,54"
                            }
                        }), t._v(" "), n("polygon", {
                            staticClass: "f edge l1",
                            attrs: {
                                points: "66.3,2.1 87.4,0 21.1,51.9 0,54"
                            }
                        }), t._v(" "), n("path", {
                            staticClass: "f edge b",
                            attrs: {
                                d: "M164.2,21.2L87.4,0L21.1,51.9l5.3,95.2l76.8,50.8l71.6-29.6L200,81.5L164.2,21.2z M150.1,146L106.4,164l-51-33.7\n                            l-3.6-64.4L93.9,33l50.8,14l22.9,38.7L150.1,146z"
                            }
                        }), t._v(" "), n("polygon", {
                            staticClass: "internal",
                            attrs: {
                                points: "40.8,138.7 36.4,58.9 90.6,16.5 154.5,34.1 183.8,83.6 162.4,157.1 104.8,181"
                            }
                        })]) : t._e()])
                    })), 0)
                }))], 2)], 1)
            };
            _s._withStripped = !0;
            const Ms = [
                [],
                ["o"],
                ["oo"],
                ["oo", "o"],
                ["oos", "soo"],
                ["ooo", "oo"],
                ["ooos", "sooo"],
                ["oooo", "ooo"],
                ["oooos", "soooo"],
                ["ooooo", "oooo"],
                ["ooooos", "sooooo"],
                ["oooooo", "ooooo"],
                ["oooooos", "soooooo"],
                ["ooooooo", "oooooo"],
                ["ooooooos", "sooooooo"],
                ["oooooooo", "ooooooo"],
                ["ooooooo", "oooooo", "ooo"],
                ["ooooooo", "oooooo", "ooxoo"],
                ["ooooooo", "oooooo", "ooooo"],
                ["ooooooo", "oooooo", "oooooos"],
                ["ooooooo", "oooooo", "ooooooo"]
            ];
            const bs = l().extend({
                components: {
                    GemButton: P,
                    Input: It,
                    PromptBox: R
                },
                props: {
                    player: Object
                },
                data: () => ({
                    value: "",
                    resultTimeout: 2e3,
                    isSending: !1,
                    test: 2
                }),
                computed: {
                    titleKey() {
                        return "subjective" === this.player.subtype ? "TYPING.SUBJECTIVE_BANNER" : "TYPING.OBJECTIVE_BANNER"
                    },
                    canSubmit() {
                        return this.value.length > 0
                    },
                    slots() {
                        const t = Ms[this.player.answers.length];
                        let e = -1;
                        return t.map((t => t.split("").map((t => "s" === t ? "spacer" : "x" === t ? "blank" : (e += 1, this.player.answers[e] ? "filled" : "empty")))))
                    }
                },
                watch: {
                    player: function({
                        lastResult: t
                    }) {
                        if (!t) return;
                        if ("correct-but-guessed-already" === t) return void this.$emit("statusChange", {
                            type: "warning",
                            bannerKey: "TYPING.TAKEN",
                            timeout: this.resultTimeout
                        });
                        if ("correct" === t) return void this.$emit("statusChange", {
                            type: "correct",
                            bannerKey: "TYPING.CORRECT",
                            timeout: this.resultTimeout
                        });
                        const e = "subjective" === this.player.subtype ? "TYPING.SUBJECTIVE_INCORRECT" : "TYPING.OBJECTIVE_INCORRECT";
                        this.$emit("statusChange", {
                            type: "incorrect",
                            bannerKey: e,
                            timeout: this.resultTimeout
                        })
                    }
                },
                mounted() {
                    this.$vibrate()
                },
                methods: {
                    onSubmit() {
                        return t = this, e = void 0, n = function*() {
                            if (!this.isSending) {
                                this.isSending = !0;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "answer",
                                        answer: this.value
                                    })
                                } catch (t) {
                                    this.$handleEcastError(t)
                                }
                                this.value = "", this.isSending = !1
                            }
                        }, new((s = void 0) || (s = Promise))((function(i, l) {
                            function a(t) {
                                try {
                                    o(n.next(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function c(t) {
                                try {
                                    o(n.throw(t))
                                } catch (t) {
                                    l(t)
                                }
                            }

                            function o(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, e instanceof s ? e : new s((function(t) {
                                    t(e)
                                }))).then(a, c)
                            }
                            o((n = n.apply(t, e || [])).next())
                        }));
                        var t, e, s, n
                    },
                    onValueInput(t) {
                        const e = t.target;
                        this.value = e.value
                    }
                }
            });
            var ws = (0, p.Z)(bs, _s, [], !1, null, null, null);
            ws.options.__file = "src/games/pp8/the-wheel/views/typing-list/TypingList.vue";
            const zs = ws.exports;
            var Ls = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return t.spinner ? s("div", {
                    staticClass: "waiting spin trivia"
                }, [s("div", {
                    staticClass: "avatar-box"
                }, [s("div", {
                    staticClass: "avatar-image",
                    class: t.spinner.avatar,
                    attrs: {
                        "aria-label": t.$t("ARIA." + t.spinner.avatar.toUpperCase())
                    }
                }), t._v(" "), s("svg", {
                    staticClass: "state-normal",
                    attrs: {
                        viewBox: "0 0 1000 375"
                    }
                }, [s("ellipse", {
                    staticClass: "f d1",
                    attrs: {
                        cx: "500",
                        cy: "269.7",
                        rx: "500",
                        ry: "105.3"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "field f b",
                    attrs: {
                        points: "143.23 108.81 151.88 52.23 303.24 13.06 510.81 0 679.47 17.41 856.77 56.58 822.17 126.22 627.57 152.34 333.51\n                    156.69 143.23 108.81"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "field f l1",
                    attrs: {
                        points: "143.23 108.81 247.02 295.97 346.48 317.74 333.51 156.69 143.23 108.81"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "field f d3",
                    attrs: {
                        points: "333.51 156.69 627.57 152.34 605.95 326.44 346.48 317.74 333.51 156.69"
                    }
                }), t._v(" "), s("polygon", {
                    staticClass: "field f d5",
                    attrs: {
                        points: "605.95 326.44 757.3 300.32 822.17 126.22 627.57 152.34 605.95 326.44"
                    }
                })]), t._v(" "), s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: t.spinnerMessage,
                        expression: "spinnerMessage"
                    }],
                    staticClass: "spinner-text"
                })])]) : s("div", {
                    staticClass: "waiting standard trivia"
                }, [t.player.category ? t._e() : s("svg", {
                    staticClass: "f-a",
                    attrs: {
                        viewBox: "0 0 1000 1000"
                    }
                }, [s("path", {
                    staticClass: "f d2 wheel",
                    attrs: {
                        d: "M346.3,78.8C434.6-4.9,417.4,9.9,536.1,0c0,0,73.3,29.2,73.3,29.2l52.8,49.6c0,0,24.4,52.8,24.4,52.8s7.9,65.4,7.9,65.4S670,\n                277.4,670,277.4l-48,59.1l-67,24.4l-104.8,1.6c-85.5-51.2-69-40.9-122.9-122.1l-4.7-98.5L346.3,78.8z"
                    }
                }), t._v(" "), s("g", {
                    staticClass: "mountian"
                }, [s("polygon", {
                    staticClass: "f d2",
                    attrs: {
                        points: "422.7,409 436.1,397.2 593.6,400.3 602.3,419.2 627.5,419.2 647.2,472.8 690.5,487 701.5,502.8 708.6,507.5 932.3,\n                    1000 67.7,1000 224.2,655.1 229.4,639.3 243.1,627.8 291.4,614.1 313.5,573.2 329.2,475.4 352.3,457.6 371.2,\n                    457.6 400.6,409.2"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "f d3",
                    attrs: {
                        d: "M556.6,420.8l-17.4,47.3l-23,37.8l-20,58.8l-8.4,56.7l-46.2,14.7l-9.5,45.2l-42,31.5l-79.8,27.3L284,788.5l-33.6,\n                    18.9l-79.8,27.3l-10.5,38.9l-10.5,11.6l-31.6,3.8l-50.4,111h864.6L708.6,507.5l-7.1-4.7l-11-15.8l-43.3-14.2l-19.7-53.6\n                    C607.4,418.5,576.7,421,556.6,420.8z"
                    }
                }), t._v(" "), s("path", {
                    staticClass: "f d1",
                    attrs: {
                        d: "M396.4,505.9l90.3-18.9l28.4-17.9l-7.4-56.7l-21-2.1l-12.6,49.4l-29.4,14.7l-56.7,4.2l-16.8-9.5v-11.6h-18.9l-23.1,17.9\n                    l4.2,14.7L396.4,505.9z M690.5,487l-43.3-14.2l8.7,37.3c-11.9,13.2-44,41.6-57.8,53.6c0,0-130.2,53.6-130.2,53.6l-99.8,\n                    20c-18.6,0.3-61.7,0.2-79.8-3.2l3.2-20l-48.3,13.7l-13.7,11.6l-5.3,15.8c0,0,59.9,14.7,59.9,14.7c21.4,3.1,122.8-11.1,\n                    146-13.7c0,0,176.4-54.6,176.4-54.6s93.5-80.9,93.5-80.9l1.6-17.9L690.5,487z"
                    }
                })])]), t._v(" "), s("PromptBox", {
                    attrs: {
                        prompt: t.player.message || t.message
                    }
                })], 1)
            };
            Ls._withStripped = !0;
            const Ss = l().extend({
                components: {
                    PromptBox: R
                },
                props: {
                    player: Object,
                    players: Object
                },
                i18n: {
                    messages: y
                },
                bb: {
                    player: (t, e, {
                        avatar: s
                    }) => `<span class="${s}">${e}</span>`
                },
                data() {
                    return {
                        message: this.$ts("WAITING.MESSAGES")
                    }
                },
                computed: {
                    spinner() {
                        if ("spin" !== this.player.category) return;
                        if (void 0 === this.player.spinner) return;
                        const t = this.players[this.player.spinner];
                        return {
                            avatar: t.avatarId,
                            name: t.name
                        }
                    },
                    spinnerMessage() {
                        if (this.spinner) return this.$t("WAITING.SPIN", this.spinner)
                    }
                },
                mounted() {
                    "correct" === this.player.category && this.$emit("statusChange", {
                        type: "correct",
                        bannerKey: "GUESSING.CORRECT",
                        timeout: 2e3
                    })
                }
            });
            var Es = (0, p.Z)(Ss, Ls, [], !1, null, "f4883964", null);
            Es.options.__file = "src/games/pp8/the-wheel/views/Waiting.vue";
            const As = Es.exports;
            l().use(a.O);
            const Bs = l().extend({
                components: {
                    Playfield: w,
                    FrozenBox: E,
                    Choices: G,
                    ChooseSlices: Pt,
                    Guessing: Gt,
                    Lobby: jt,
                    Matching: te,
                    Numeric: ve,
                    PlaceSlices: Me,
                    PostGame: Ee,
                    SingleTextEntry: Pe,
                    Spin: cs,
                    TappingList: gs,
                    TappingRapid: xs,
                    TypingList: zs,
                    Waiting: As
                },
                themeColor: "#1c0d03",
                ecastKeys: {
                    playerState: ({
                        id: t
                    }) => `playerstate:${t}`,
                    rainbowActive: "rainbowActive"
                },
                ecastProviders: {
                    artifact: t => {
                        if (t.artifact) return t.artifact;
                        let e, s = 0;
                        for (; t[`artifact:${s}`];) e = t[`artifact:${s}`], s += 1;
                        return e
                    },
                    info: (t, {
                        id: e
                    }) => t[`info:${e}`] ? (t[`info:${e}`].id = e, t[`info:${e}`]) : t.audiencePlayer ? {
                        id: "999999",
                        name: "audience",
                        avatarId: "Audience"
                    } : void 0,
                    player: (t, {
                        id: e
                    }) => t[`player:${e}`] ? t[`player:${e}`] : t.audiencePlayer ? t.audiencePlayer : void 0,
                    players: t => {
                        const e = {};
                        return Object.keys(t).forEach((s => {
                            const n = s.split(":");
                            "info" === n[0] && (t[s].id = parseInt(n[1], 10), e[n[1]] = t[s])
                        })), e
                    }
                },
                props: {
                    artifact: Object,
                    players: Object,
                    info: Object,
                    playerState: Object,
                    player: Object,
                    rainbowActive: Object
                },
                data: () => ({
                    localSliceCount: null,
                    status: {
                        type: "none"
                    },
                    frozenRainbowWheel: null
                }),
                computed: {
                    isReady() {
                        return !!this.player && !!Object.keys(this.player).length && !!this.info
                    },
                    classes() {
                        var t;
                        if (!this.info) return [];
                        const e = [this.info.avatarId];
                        return e.push(`status-${this.status.type}`), e.push((null === (t = this.playerState) || void 0 === t ? void 0 : t.isInWinnerMode) ? "state-win" : "state-normal"), e
                    },
                    screen() {
                        const t = {
                                player: this.player
                            },
                            e = {
                                info: this.info,
                                player: this.player,
                                players: this.players
                            };
                        if (this.rainbowActive && "waiting" === this.player.kind && this.frozenRainbowWheel) return e.isRainbowActive = !0, e.player = this.frozenRainbowWheel, ["Spin", e];
                        switch (this.player.kind) {
                            case "choices":
                            case "choosePlayers":
                                return ["Choices", e];
                            case "chooseSlices":
                                return ["ChooseSlices", e];
                            case "guessing":
                                return ["Guessing", t];
                            case "lobby":
                                return ["Lobby", e];
                            case "matching":
                                return ["Matching", t];
                            case "numeric":
                                return ["Numeric", t];
                            case "placeSlices":
                                return ["PlaceSlices", e];
                            case "postGame":
                                return ["PostGame", {
                                    player: this.player,
                                    artifact: this.artifact
                                }];
                            case "singleTextEntry":
                                return ["SingleTextEntry", t];
                            case "spin":
                                return ["Spin", e];
                            case "tappingList":
                                return ["TappingList", t];
                            case "tappingRapid":
                                return ["TappingRapid", t];
                            case "typingList":
                                return ["TypingList", t];
                            default:
                                return ["Waiting", {
                                    player: this.player,
                                    players: this.players
                                }]
                        }
                    },
                    sliceCount() {
                        return null !== this.localSliceCount ? this.localSliceCount : this.playerState ? this.playerState.sliceCount : 0
                    }
                },
                watch: {
                    player(t) {
                        this.isReady && "spin" === t.kind && "rainbow" === t.category && this.$set(this, "frozenRainbowWheel", t)
                    }
                },
                methods: {
                    onStatusChange(t) {
                        "winner" !== t.type && this.playerState.isWinner || (this.status = t)
                    },
                    onLocalSliceCountChange(t) {
                        this.localSliceCount = t
                    }
                }
            });
            var Ns = (0, p.Z)(Bs, n, [], !1, null, null, null);
            Ns.options.__file = "src/games/pp8/the-wheel/views/Main.vue";
            const ks = Ns.exports
        },
        66261: t => {
            "use strict";
            t.exports = '<svg viewBox="0 0 500 20">\n    <polygon\n        points="487.9,1.1 470.6,7.5 470.7,0 461,8 455.2,9.1 448.3,0.4 438.2,10.2 431.6,6.4 427.2,6.4 424.1,3.2 421.2,6.4 78.8,6.4 75.9,\n            3.2 72.8,6.4 68.4,6.4 61.8,10.2 51.7,0.4 44.8,9.1 39,8 29.3,0 29.4,7.5 12.1,1.1 0,10.2 11.7,17.7 29.4,12.7 29.4,20 38.8,\n            11 40.9,11 47.1,14.3 51.9,7.7 60.8,17.2 68.7,11 72.8,11 75.7,14.4 78.9,11 421.1,11 424.3,14.4 427.2,11 431.3,11 439.2,\n            17.2 448.1,7.7 452.9,14.3 459.1,11 461.2,11 470.6,20 470.6,12.7 488.3,17.7 500,10.2"\n    />\n</svg>\n'
        },
        94929: t => {
            "use strict";
            t.exports = '<svg viewBox="0 0 1000 250">\n    <g class="left">\n        <path\n            class="base"\n            d="M30.7,158.54,30,188.82,45.7,164.36,36.38,163Zm5.5-8.72-3.82-5.18L29.19,149l7.66,8.08,14.53-.28-.33-4.44-10.72-.09Z\n                M168.75,36.06l5.1,8.92,2.2,14.25,18-9.71,52.6-14.06Zm-10.91-2.68-8.21-.22-.26,2.51,7.85,2.45,4,5.73,2,12.49-3.13,\n                4.48-2,4.36,4.25-.7,7-9.28-4.84-16.83ZM111.35,19.89H27.54L20,27.21v94.25c7.28,15.7,19.93,30.1,47.3,23l2.13-2.83,\n                43.92-37.13,25-13.34C161.25,60.55,153,34.5,111.35,19.89ZM69,124.87l-1.71,6.57-3,5.2-11.44,\n                2.85-9.35-5.67-.18-11.4-9.18.65-2.52-3.87-3.34-8.33,2.76-5.3,6.1-2.93-3,7,1.26,4.92,5,2.66,6.31.73,2.25,9.74,5.19,3.91,\n                7.23-1,2.81-8.86,9.29-1.81Zm73-71.77-1.46,8.72L136.08,69l-10.49,4.24.52,7,2.16,7.14-5.12-4.3L120.5,70.8l2.43-4.46,\n                7.25-2.54,5-8.67-3.73-3.45-5.87-3.91-7.91,1.3-2.57-2.47-.56-8.93L106,33.56l-9.5,3.73-1.67-2,9.66-7.63L116,30.21l3.34,\n                3.33L120.81,43l11.92-2.14,3.58,2.57Z"\n        />\n        <polygon\n            class="highlight"\n            points="94.09 79.95 108.13 74.53 114 62.2 107.71 52.11 95.5 47.51 87.44 53.42 84.01 51.68 85.24 46.14 80.52 43.53 74.99\n                46.04 69.5 52.83 58.36 48.45 50.72 53.51 49.13 66.73 51.95 72.1 50.48 74.43 42.81 76.07 41.01 89.93 50.01 93 45.64\n                105.56 50.18 112.22 61.1 115.1 67.24 109.81 70.61 104.29 79.18 107.79 92.78 100.65 98.4 84.26 94.09 79.95"\n        />\n    </g>\n    <g class="right">\n        <path\n            class="base"\n            d="M963.67,163l-9.32,1.41L970,188.89l-.69-30.28Zm-3.95-10.71-10.72.09-.33,4.44,14.53.29,7.66-8.09-3.19-4.33-3.82,5.18Z\n                M753.36,35.53l52.6,14,18,9.72L826.2,45l5.1-8.92Zm82.16,2.91-4.85,16.83,7,9.27,4.25.7-2-4.35-3.12-4.49,2-12.49,4-5.72,\n                7.85-2.46-.26-2.5-8.2.21Zm26.23,52.8,25,13.34,43.92,37.14,2.13,2.82c27.37,7.09,40-7.32,47.3-23V27.27L972.52,20H888.71\n                C847,34.56,838.8,60.61,861.75,91.24Zm64.84,28.69,9.29,1.81,2.81,8.86,7.23,1.05,5.19-3.92,2.25-9.74,6.31-.72,5-2.67,\n                1.25-4.91-3.05-7,6.11,2.93,2.75,5.3-3.34,8.33-2.52,3.87-9.18-.65-.17,11.4-9.35,5.67-11.45-2.84-3-5.21L931,124.94Z\n                M863.74,43.46l3.58-2.57L879.24,43l1.45-9.41L884,30.27l11.51-2.53,9.67,7.63-1.68,2L894,33.63l-8.52,4.11L885,46.67l-2.57,\n                2.46-7.91-1.29-5.87,3.91-3.72,3.45,5,8.66,7.25,2.54,2.43,4.46-2.64,12.29-5.13,4.3,2.16-7.13.52-7L864,69l-4.51-7.14L858,\n                53.16Z"\n        />\n        <polygon\n            class="highlight"\n            points="901.66 84.33 907.27 100.72 920.87 107.85 929.44 104.36 932.81 109.88 938.95 115.16 949.87 112.29 954.41 105.63\n                950.04 93.07 959.04 90 957.24 76.14 949.57 74.5 948.1 72.16 950.92 66.8 949.34 53.57 941.69 48.52 930.55 52.89 925.06\n                46.11 919.53 43.6 914.81 46.2 916.04 51.74 912.61 53.48 904.55 47.58 892.34 52.17 886.06 62.26 891.92 74.59 905.97\n                80.02 901.66 84.33"\n        />\n    </g>\n</svg>'
        },
        71014: t => {
            "use strict";
            t.exports = '<svg viewBox="0 0 1000 250">\n    <g class="left">\n\t    <path\n            class="base"\n            d="M41.3,124.6c1.6,3.1,3.6,4.7,4.7,5.7c1.6-5.9,7.4-11.7,12.1-14.6C52.7,114.4,44.9,118.2,41.3,124.6z\n\t\t        M49.3,133.6c2.6,2.4,7,3.7,10.1,3.6c-0.1-6.3,2.1-15.9,4.2-19.1C57.4,120.4,50.8,127.7,49.3,133.6z\n\t\t        M51.4,111.8c-4.2-3-7.7-5.4-10.9-9.1c-2.2,3.1-4.7,13.1-1.1,17.1C41.7,116.5,46.1,111.5,51.4,111.8z\n\t\t        M103.3,47.3c3.1,3.7,5.1,7.4,7.6,12c0.4-5.4,6-9,9.4-10.9C116.9,44.3,106.7,45.6,103.3,47.3z\n\t\t        M312.5,19.9l-15.8,0c-14.6,2.5-28.7,7-40.9,16.1c-21.1-2.4-38.3,3.2-53.1,18.3C188.1,53,173.6,62,165,\n                73.8c-7.8-1.6-15.4-1.3-21.6,2.3c0.7-13-3.5-25.7-13.4-36.6c-6.6-7.2-16-14.1-26.8-19.6H27.5L20,27.2l0,29.6c0.8-0.7,\n                1.7-1.3,2.8-1.6c5-1.5,10.9,0.7,13.3,3.1c2.4-4.2,5.5-8.5,9.3-11.8C64,30.1,87,32,100.2,43.9c3.6-0.8,16.3-2,20.6,0.4c15,\n                8.3,17.6,22.3,17.4,27.3c0,0.9-0.2,1.7-0.6,2.5c-4.7-1.6-19.3-0.8-25.6,4c-7.6,5.8-14.7,15.7-14.2,\n                26c-4.7-0.2-15.2-1.2-25.9,7.9c-7.6,6.6-10.2,23.5-8.9,27.8c-1.2,0.5-2.6,0.6-4.1,\n                0.4c-12.2-2-24.3-14.9-24.4-25.2c-0.1-8.7,2.2-13.6,2.6-15.3c-2.6-3.7-5-8.6-5.5-12.7c-2.8,0.6-7.8,1.9-11.7,0l0,28.1c3.1,\n                5.6,6.6,10.6,10.3,14.7c8,8.9,17.7,14.1,27.9,16c-7.1,5.7-12,14-13.5,23.3C30,174.5,23.3,186.8,20,200.5l0,7.9l1.5,\n                8.9l5.2-15.6l8.6-14.8l34.1-45.2l43.9-37.1l70.3-37.6l58.7-23.5l42.8-11.8l28.8-8.6l12.5-2.1L312.5,19.9z\n\t\t        M135.2,70.5c0.4-3-0.2-7.6-2.3-10.4c-6.1,0.7-14.2,6.3-17.2,12.2C119.2,70.6,128.9,69.6,135.2,70.5z\n\t\t        M114,66.5c3.4-4.4,10-9.3,16-10.1c-0.9-1.3-2.2-3.4-5.1-5.4C118.2,53.7,113.4,61,114,66.5z"\n        />\n\t    <path\n            class="highlight"\n            d="M204.8,38.4l-3.9,0.2l-2.2-3.3c-0.8-1.1-2.6-0.5-2.5,0.8l0.2,3.9l-3.3,2.2c-1.1,0.8-0.5,2.6,0.8,2.5l3.9-0.2l2.2,3.3c0.8,\n            1.1,2.6,0.5,2.5-0.8l-0.2-3.9l3.3-2.2C206.8,40.1,206.2,38.4,204.8,38.4z\n\t\t        M38.5,155.5l-3.6,2.4l-4-1.9c-1-0.5-2.1,0.7-1.4,1.7l2.4,3.6l-1.9,4c-0.5,1,0.7,2.1,1.7,1.4l3.6-2.4l4,1.9c1,0.5,2.1-0.7,\n                1.4-1.7l-2.4-3.6l1.9-4C40.7,155.9,39.5,154.8,38.5,155.5z\n\t\t        M60.5,86.1c-6,5.4,2,14.5,8.1,9.2C74.6,89.9,66.6,80.8,60.5,86.1z\n\t\t        M24.9,57.6c-3.4,0.3-3.9,1.9-4.9,3.8l0,21c4,4.6,9.4,0.6,14.4,0.6c0.5-3.8,2.8-17.4,3.4-19.7C34.6,62.2,30.9,57.1,24.9,\n                57.6z\n\t\t        M166,53.2l-5.5,1l-3.7-4.2c-0.6-0.7-1.7-0.2-1.6,0.8l1,5.5l-4.2,3.7c-0.7,0.6-0.2,1.7,0.8,1.6l5.5-1l3.7,4.2c0.6,0.7,1.7,\n                0.2,1.6-0.8l-1-5.5l4.2-3.7C167.4,54.2,166.9,53.1,166,53.2z\n\t\t        M43.2,33.1l-4.7,2.3l-4.4-2.9c-0.7-0.4-1.5,0.3-1.1,1l2.3,4.7l-2.9,4.4c-0.4,0.7,0.3,1.5,1,1.1l4.7-2.3l4.4,2.9c0.7,0.4,\n                1.5-0.3,1.1-1l-2.3-4.7l2.9-4.4C44.6,33.5,43.9,32.7,43.2,33.1z\n\t\t        M85.8,63.8c-6,5.4,2,14.5,8.1,9.2C100,67.6,92,58.5,85.8,63.8z"\n        />\n    </g>\n    <g class="right">\n\t    <path\n            class="base"\n            d="M879.3,48.3c3.5,1.9,9.1,5.5,9.4,10.9c2.5-4.6,4.3-8.4,7.6-12C893,45.5,882.7,44.2,879.3,48.3z\n\t\t        M874.7,50.9c-2.9,2-4.2,4.1-5.1,5.4c6.1,0.8,12.6,5.8,16,10.1C886.3,60.9,881.5,53.5,874.7,50.9z\n\t\t        M884,72.1c-3-5.9-11.1-11.5-17.2-12.2c-2.1,2.9-2.7,7.5-2.3,10.5C870.7,69.5,880.5,70.5,884,72.1z\n\t\t        M958.5,124.3c-3.5-6.3-11.4-10.2-16.8-8.9c4.8,2.8,10.5,8.7,12.1,14.6C954.9,128.9,956.9,127.4,958.5,124.3z\n\t\t        M950.5,133.3c-1.4-5.9-8.1-13.2-14.3-15.5c2.1,3.3,4.3,12.8,4.2,19.1C943.5,137,947.9,135.7,950.5,133.3z\n\t\t        M673.6,20.9c23.3,3.7,60.9,17,84.1,22.5c33.4,11,98.3,43.3,129,61.1c0,0,43.9,37.1,43.9,37.1c7.2,9.6,38.5,49.7,42.7,60c0,\n                0,5.2,15.6,5.2,15.6c5-19.1-3.4-40.8-23.2-48.1c-1.5-9.3-6.4-17.6-13.5-23.3c16.2-2.7,30.2-15.4,\n                38.3-30.7V27.2l-7.5-7.3l-34.7,0c6,3.2,4.9,13.7,2,17.2c25.9,9,36.8,44.3,22.6,61.7c1.3,3.4,4.1,15.9,2.3,20.5c-7.5,\n                16.9-19.9,21.3-27.4,20.5c2.6-18.4-14.2-38.6-34.9-35.5c0.3-20.6-18.8-35.3-39.9-29.8c-4.1-12.9,10.2-30.1,\n                20.9-31.5c8.7-1.2,13.8,0.4,15.5,0.6c3.4-3.1,7.9-6.1,11.9-7.1c-2.2-5.7-4.2-13.2,3.8-16.6c0,0-17.7,0-17.7,0c-23,11.2-42,\n                31.1-40.2,56.2c-6.3-3.6-13.9-3.9-21.6-2.3c-8.6-11.8-23-20.8-37.8-19.5c-14.8-15.1-32-20.7-53.1-18.3\n                c-16.3-12-36.8-17.3-56.7-16.1L673.6,20.9z\n\t\t        M960.4,119.4c3.6-3.9,1.1-14-1.1-17c-3.2,3.6-6.7,6-10.9,9.1C953.8,111.2,958.1,116.2,960.4,119.4z"\n        />\n\t    <path\n            class="highlight"\n            d="M959.8,156.9l1.9,4l-2.4,3.6c-0.6,1,0.4,2.2,1.4,1.7l4-1.9l3.6,2.4c1,0.6,2.2-0.4,\n            1.7-1.4l-1.9-4l2.4-3.6c0.6-1-0.4-2.2-1.4-1.7l-4,1.9l-3.6-2.4C960.5,154.8,959.3,155.9,959.8,156.9z\n\t\t        M956,34.7l2.9,4.4l-2.3,4.7c-0.3,0.7,0.5,1.4,1.1,1l4.4-2.9l4.7,2.3c0.7,0.3,1.4-0.5,\n                1-1.1l-2.9-4.4l2.3-4.7c0.3-0.7-0.5-1.4-1.1-1l-4.4,2.9l-4.7-2.3C956.3,33.2,955.6,34,956,34.7z\n\t\t        M932.7,96.4c6.2,5.2,14.1-3.8,8.1-9.2C934.6,81.9,926.7,91,932.7,96.4z\n\t\t        M920.7,19.9c-2.7,2.9-4.8,1.3-7.4,5.1c-3.1,4.5,1.2,8.9,1.8,13.7c3.9,0,17.6,0.5,20,0.8c0.7-3.3,5.3-7.6,\n                4-13.5c-1.1-5-4.1-3.2-7.6-6H920.7z\n\t\t        M907.3,74.1c6.2,5.2,14.1-3.8,8.1-9.2C909.2,59.6,901.3,68.7,907.3,74.1z\n\t\t        M794.4,40.9l3.3,2.2l-0.2,3.9c-0.1,1.4,1.7,2,2.5,0.8l2.2-3.3l3.9,0.2c1.4,0.1,2-1.7,\n                0.8-2.5l-3.3-2.2l0.2-3.9c0.1-1.4-1.7-2-2.5-0.8l-2.2,3.3l-3.9-0.2C793.8,38.4,793.2,40.1,794.4,40.9z\n\t\t        M833.3,54.8l4.2,3.7l-1,5.5c-0.2,0.9,1,1.5,1.6,0.8l3.7-4.2l5.5,1c0.9,0.2,1.5-1,\n                0.8-1.6l-4.2-3.7l1-5.5c0.2-0.9-1-1.5-1.6-0.8l-3.7,4.2l-5.5-1C833.1,53.1,832.6,54.2,833.3,54.8z"\n        />\n    </g>\n</svg>'
        },
        18112: t => {
            "use strict";
            t.exports = '<svg viewBox="0 0 1000 250">\n    <g class="left">\n\t    <path\n            class="base"\n            d="M20.2,144.6c0,0,0.4,18.8,1.2,19.1c12.6,6.1,23.3,3.8,31.4,0.1l9-11.9C43.3,153.3,20.2,143.1,20.2,144.6z\n\t\t        M20,208.4l1.5,8.9c3.4-14.1,13.3-31,22.6-42c-8.5,3-18,3.6-24.1,3.6L20,208.4z\n\t\t        M20,76.8l0,25.4c7.8,8.8,14.6,8.4,18.9,13.8c3.7,4.6-2.5,7.3-3.8,7.6c-7.8,3.7,10.9,8.6,16.1-2.2C34.8,111.2,28.4,89,34.3,\n                71.8C34.3,71.8,27.6,70,20,76.8z\n\t\t        M53.8,123c-4.9,6-15.7,11.8-21.9,3.8c-3.9-5,6.1-6,4-8.9c-3.5-4.9-9.2-5.2-15.9-12l0,16.7c10.6,14.8,27.7,23.5,45.4,\n                24.3l4-5.3l3.7-3.1c-0.3-5.2-0.8-11.1,0.4-12.3C66.9,126.8,60.2,126.6,53.8,123z\n\t\t        M312.5,19.9l-104.5,0c3.5,6.8,5.3,19.6-8.5,40.7c37.1-16.1,87.7-31.5,126.9-39.7L312.5,19.9z\n\t\t        M191.7,19.9l-44.3,0c14.2,31.8,7.4,54.9,2.8,64.9l30.6-16.3C200.6,45.5,195.9,28,191.7,19.9z\n\t\t        M127.9,33.7c-4.6-5.1-10.5-9.8-17.2-13.8l-83.2,0L20,27.2L20,73c4.1-2.8,10.6-5.3,14.8-3.5C39.4,56.1,51.2,44.6,64,\n                39.4c0.7-2.2,3.2-9.6,4.1-9.9c11.6-3.4,27.8-1.1,37.7,4.4c0,1.3-1.8,5-2.3,6.2c20,11.1,26.4,29.7,19.1,46.7c6.1-0.1,12.5,\n                0.8,18.6,2.5C145.9,69.5,141.6,48.8,127.9,33.7z\n                M120.9,81.4c5.7-14.7-5.2-32.8-18.8-38.6c-8.4,12.3-28.6,50.7-32,57.2l-2.5-48.9l-4.1-7.1l4.7,59.5l1.7-0.6l0,0.1C70,103,\n                107.1,88.3,120.9,81.4z"\n        />\n\t    <path\n            class="highlight"\n            d="M28.6,182.5c-1.4,1.2-1.5,3.3-0.3,4.6c1.2,1.4,3.3,1.5,4.6,0.3c1.4-1.2,1.5-3.3,0.3-4.6C32.1,181.4,30,181.3,28.6,182.5z\n\t\t        M49.7,32c-1-1.7-10.3,0.1-10.1,9.1c-8.8-1.4-11.7,7.8-10.1,9c4.3-3.1,10.4-0.4,12.2,1.4c4-3.6,4-3.6,7.9-7.1C48,42.4,46.1,\n                35.9,49.7,32z\n\t\t        M35.5,155.8c-1.8,1.6-1.9,4.3-0.4,6c1.6,1.8,4.3,1.9,6,0.4c1.8-1.6,1.9-4.3,0.4-6C40,154.4,37.3,154.2,35.5,155.8z\n\t\t        M86.5,76.4c-1.9,1.6-1.4,5.3,1.1,8.1c2.5,2.8,6,3.8,7.9,2.1c1.9-1.6,1.4-5.3-1.1-8.1C91.9,75.7,88.3,74.7,86.5,76.4z\n\t\t        M221.9,35.3c-2,1.8-2.2,4.9-0.4,6.9c1.8,2,4.9,2.2,6.9,0.4c2-1.8,2.2-4.9,0.4-6.9C227.1,33.7,224,33.5,221.9,35.3z\n\t\t        M105.1,60c-1.9,1.6-1.4,5.3,1.1,8.1c2.5,2.8,6,3.8,7.9,2.1c1.9-1.6,1.4-5.3-1.1-8.1C110.5,59.3,107,58.4,105.1,60z\n\t\t        M169.2,47.4c-2.3,2.1-2.6,5.6-0.5,8c2.1,2.3,5.6,2.6,8,0.5c2.3-2.1,2.6-5.6,0.5-8C175.2,45.6,171.6,45.4,169.2,47.4z"\n        />\n    </g>\n    <g class="right">\n\t    <path\n            class="base"\n            d="M938.3,151.9l9,11.9c8.1,3.7,18.8,6,31.4-0.1c0.7-0.4,1.2-19.1,1.2-19.1C979.8,143.1,956.7,153.3,938.3,151.9z\n\t\t        M900.1,75.7l0.8,1.6l-0.1,0c0,0,19.4,34.8,28,47.7c15.3,3.8,31.9-9.4,\n                35.9-23.6c-13.3-6.8-53.9-21.8-60.8-24.4l48.1-8.8l6.5-4.9L900.1,75.7z\n\t\t        M980,178.9c-6.1,0-15.6-0.6-24.1-3.6c9.3,11,19.2,27.9,22.6,42C980.6,211.2,979.9,185.6,980,178.9z\n\t\t        M929.5,38.2c13.9,2.8,26.8,13,33.6,25c2.2,0.4,9.9,1.9,10.4,2.8c4.9,11.1,4.7,27.5,0.5,37.9c-1.3,0.1-5.2-1.1-6.4-1.4c-1.6,\n                4.6-4.1,8.8-7.3,12.5c-14.5,16.5-21.7,14.5-36.6,12.5c0.4,2.9,0.6,5.9,0.6,8.9l6.2,5.2l4,5.3c17.8-0.9,34.8-9.5,\n                45.4-24.3V27.2l-7.5-7.3h-53.3C924.6,23,930.9,31.3,929.5,38.2z\n\t\t        M819.2,68.5l30.6,16.3c-4.6-10-11.3-33.1,2.8-64.9l-44.3,0C804.1,28,799.4,45.5,819.2,68.5z\n\t\t        M927.2,37.9c1.5-10.2-16.4-25.6-28.9-13.5c-11.3,10.4-9.1,18.2-14.4,23.7c-4.1,4.3-7.6-1.5-8-2.7c-4.7-7.3-7.1,11.9,4.3,\n                15.6C888.1,43.7,909.2,34.3,927.2,37.9z\n\t\t        M673.6,20.9c39.2,8.1,89.8,23.6,126.9,39.7c-13.8-21.1-12-33.9-8.5-40.7C784.5,20,676.9,19.3,673.6,20.9z\n\t\t        M858,85.6c3.3,1.4,18.1-3.5,20.2-1.7c-1.3-6.5-2-13.1,0.7-20c-6.6-4-13.7-14-6.6-21.2c4.4-4.5,6.7,5.3,9.4,2.8c5.6-5.2,\n                3.4-13,16.3-23.9c0.8-0.6,1.6-1.2,2.4-1.7C870.8,17.1,851.7,60.6,858,85.6z"\n        />\n\t    <path\n            class="highlight"\n            d="M939.1,116.8c4.4,3.9,13.4-6.3,8.9-10.2C943.6,102.7,934.6,112.9,939.1,116.8z\n\t\t        M967,187.4c3.2,2.8,7.5-2.1,4.3-4.9C968.1,179.7,963.8,184.6,967,187.4z\n\t\t        M958.9,162.2c4.3,3.6,9.8-2.6,5.6-6.4C960.2,152.1,954.7,158.4,958.9,162.2z\n\t\t        M920.4,100.4c4.4,3.9,13.4-6.3,8.9-10.2C924.9,86.4,916,96.6,920.4,100.4z\n\t\t        M771.6,42.7c4.9,4.2,11.2-3,6.5-7.3C773.2,31.1,766.9,38.3,771.6,42.7z\n\t\t        M950.4,32.4c3.6,3.8,1.7,10.2,0.2,12.3c4,3.5,4,3.5,8.1,6.9c1.9-1.8,8-4.5,12.4-1.5c1.6-1.3-1.4-10.2-10.4-8.8C960.9,32.4,\n                951.4,30.8,950.4,32.4z\n\t\t        M823.3,55.9c5.7,4.8,13-3.5,7.5-8.5C825.1,42.6,817.8,50.9,823.3,55.9z"\n        />\n    </g>\n</svg>\n'
        },
        7963: t => {
            "use strict";
            t.exports = '<svg viewBox="0 0 1000 250">\n    <g class="left">\n\t    <path\n            class="base"\n            d="M33.6,97.8l1.4,1.9C45.7,84.1,71,47.9,82.6,33.5L80,33.7l-5.7,5.7l-4.2,6L31.4,74.3L30.3,77l3.2-1.1l33.1-25.6C61.3,57.6,\n            39.1,89.7,33.6,97.8z\n\t\t        M131.3,60.3L191,19.9l-5.9,0l-39.2,27.2l8.8-27.2l-1.3,0l-10.8,29.5l-11.9,8.3c-4.5-16.6-16.6-29.2-32.1-37.8c0,0-71.1,\n                0-71.1,0L20,27.2l0,82.5c9.8,15.8,27.1,25.9,44.9,27l0.3,3.1L20,153.3v3.1l17.8-5.7l-9.6,30.8l-8.2,6.7v3.1c4.8-4.3,\n                35.8-28.5,37.7-34.1l-26.7,22l11-29.8l23.3-7.5l0.5,4.4l3.5-4.6l4-3.4c-0.9-6-0.8-12.2,0.5-17.8c-9.5,1-17.6,\n                1.6-26.7-5c-0.6-0.4-2.7,0.5-3.3,0c-2-1.6-4.1-3.7-6.3-6.1c-2.6-3-4.7-6.3-6.2-9.9c-0.3-0.7,1-2.7,\n                0.8-3.4c-1.9-5.2-2.6-10.8-2.3-16.5c0.1-1.1-2-0.4-1.9-1.5c2.8-23.6,27.5-45.6,50.4-45.2c0.7,0,1.9-1.1,2.7-1.1c4.4,0.1,\n                8.6,0.8,12.5,2.2c0.6,0.2,0.8,1.5,1.4,1.7c21.1,8.9,30,29.1,22.2,46.8c2,0,4.1,0,6.2,0.2c1,0.1,2.7-2.5,3.7-2.4c0.2,0,0.3,\n                0,0.5,0.1c-12.7,11.5-38,40.3-49.1,53.7c0,0,7.2-6.1,7.2-6.1c0.6-0.9,3.3-3.6,4-4.4c0,0,2.9-1.4,2.9-1.4l7.2-6.1l-5.7,\n                2.9c8-8.7,29.1-31.6,39.2-37.5c4.8,1.1,9.8,2.8,14.3,4.8l6.8-3.6c-6-3.7-14-7.8-21.4-8.7C132.9,69.3,132.4,64.7,131.3,60.3z\n\t\t        M218.2,23.6l-47.2,50.1l5.3-2.8l47.9-48.8L218.2,23.6z\n\t\t        M265.8,22.1L215.9,54c4.8-0.2,50.3-28.8,55.5-31.7L265.8,22.1z\n\t\t        M69.1,118.1l48.1-50.3c0.2-8.4-12.5-26.7-24.2-29.9l-46.2,74.7C52.3,116.4,62.4,119.6,69.1,118.1z"\n        />\n\t    <path\n            class="highlight"\n            d="M65.3,88.8l-4.1,7.1c0.7,4.9,7.1,7.3,10.8,3.9C77.5,95.1,71.9,86.1,65.3,88.8z\n\t\t        M90.3,66.3c-6.4,5.8,2.1,15.4,8.6,9.8C105.3,70.4,96.8,60.8,90.3,66.3z"\n        />\n    </g>\n    <g class="right">\n\t    <path\n            class="base"\n            d="M899.5,39.3l-1.7,1.6c16.7,8.6,56.2,29.2,71.8,38.7l-0.5-2.6l-6.4-5l-6.5-3.4l-33.6-34.6l-2.8-0.7l1.5,3.1l29.7,\n            29.5l-12-6.3L899.5,39.3z\n\t\t        M966.6,90.6l-80-36.1c-3.1,5.7-5,16.2-2.6,22.8l56.1,41.2c0,0,9.8-2,18.8-12.7C964.8,98.7,966.6,90.6,966.6,90.6z\n\t\t        M728.6,22.3c5.2,2.9,50.7,31.5,55.5,31.7l-49.9-31.9L728.6,22.3z\n\t\t        M867.2,73.9c-7.4,1-15.4,5-21.4,8.7l9.3,5c2.1-1,4.3-1.8,6.6-2.6c0,0,1.9,2.1,1.9,2.1c2.8,1.7,15.5,9.2,17.7,11.1l3.5,\n                5.2l2,1.1c0,0,3.4,2.8,3.4,2.8l-3.7-5.4c9.6,6.7,35.2,24.9,42.2,34.1c-0.1,1.2-0.3,2.4-0.5,3.6l2.4,2.1l3.5,\n                4.6l0.5-4.4l23.3,7.5l11,29.8l-26.7-22c2,5.7,33,29.8,37.7,34.1v-3.1l-8.2-6.7l-9.6-30.8l17.8,\n                5.7v-3.1l-45.3-13.5l0.3-3.1c17.9-1.1,35.1-11.2,44.9-27V27.2l-7.5-7.3c0,0-71.1,0-71.1,0c-15.5,8.5-27.5,21.2-32.1,\n                37.8l-11.9-8.3l-10.8-29.5l-1.3,0l8.8,27.2l-39.2-27.2H809l59.7,40.4C867.6,64.7,867.1,69.3,867.2,73.9z\n\t\t        M883.8,55.2c0.3-0.6-0.9-2.6-0.5-3.3c1.4-2.2,3.1-4.6,5.2-7c2.6-3,5.7-5.5,9-7.5c0.6-0.4,2.8,0.7,3.4,0.4c4.9-2.5,10.4-4,\n                16.1-4.5c1.1-0.1,0.1-2,1.3-2.1c23.8-0.3,48.8,21.4,51.3,44.2c0.1,0.7,1.3,1.8,1.4,2.5c0.4,4.3,0.3,8.6-0.5,12.7c-0.1,\n                0.6-1.4,1-1.5,1.6c-6.1,22.1-25,33.5-43.5,28.1c0.3,2,0.5,4.1,0.6,6.1c0,1,2.9,2.3,2.8,3.3c0,0.2,0,0.3,0,\n                0.5c-13.7-11.9-50-35.8-65.7-45.8c6.3-1.9,12.9-2.8,19-2.2C880,73,878.5,65.1,883.8,55.2z\n\t\t        M775.9,22.2l47.9,48.8l5.3,2.8l-47.2-50.1L775.9,22.2z"\n        />\n\t    <path\n            class="highlight"\n            d="M929.4,101.3c6.5,5.6,15-4,8.6-9.8C931.5,86,923.1,95.6,929.4,101.3z\n\t\t        M902.5,77.7c5.4,4.8,13.5-1.9,10-8l-7.6-3.1C900.1,67.8,898.6,74.5,902.5,77.7z"\n        />\n    </g>\n</svg>'
        },
        5245: t => {
            "use strict";
            t.exports = '<svg viewBox="0 0 1000 250">\n    <g class="left">\n\t\t<path\n            class="base"\n            d="M79.5,121.4c-0.2,0.8-0.8,3.7-1,6.6c2.1-2.3,7.4-4.7,11.2-3.6l2.2-1.8c-0.1-1.3-0.1-2.3-0.1-2.7C89.6,116,81.2,116.2,79.5,\n\t\t\t\t121.4z\n\t\t        M124.7,87.5c-2.9-0.1-5.9,0.1-6.7,0.1c-5.4,1.1-6.7,9.3-3,12c0.6,0,2.8,0.4,5,1.1C118.7,95.9,120.8,90.3,124.7,87.5z\n\t\t        M106.2,70.8l-5.6-6.4c-1.5-1.7-4.1-1.9-5.8-0.4L85,72.7c-8.6-5.2-19.5,4.4-15.5,13.6l-10.1,8.9c-1.7,1.5-1.9,4.1-0.4,\n\t\t\t\t5.8l5.6,6.4c1.5,1.7,4.1,1.9,5.8,0.4l35.4-31.1C107.5,75.2,107.7,72.6,106.2,70.8z\n\t\t        M42,102.6c-1.4,0.2-2.9,0.3-1.5,2l8,9.1c1,1.2,1.8,1.1,2.3-1.1c0.3-1.4,0.7-4.5,0.7-6.1c0-1-2.6-3.8-3.7-3.9C46,102.6,43.6,\n\t\t\t\t102.4,42,102.6z\n\t\t \t\tM124.5,98.6l14.5-7.7c-2-0.7-4.5-1.4-6.7-2C128.6,90.1,124.8,94.4,124.5,98.6z\n\t\t        M113,58.1c2.2-0.2,2.4-1,1.3-2.1l-8-9.1c-2.6-3.1-2.7,5.6-2.9,7c-0.1,1.1,2.3,4.1,3.3,4.2C108.5,58.1,111.6,58.2,113,\n\t\t\t\t58.1z\n\t\t        M237.2,19.9c-0.2,3.4-0.1,6.8,0.4,10.1c-37,11.7-55.5,2.5-94.2,17.4c-0.7-3.3-2.5-6.4-6.4-5.4c0,0-13.6,4.1-13.6,4.1C96,\n\t\t\t\t14.7,73.7,19.9,36.2,19.9c-3.2,1.5-6.2,3.4-8.8,5.8c-3,2.7-5.4,5.9-7.3,9.3v58.8c4.3,11.3,10,21.1,17.6,28.7l-6.1,\n\t\t\t\t13.7c-1.2,2.6,0.3,5.4,2.9,6.3c-5.8,10.1-6,24.3-10.5,33.8c-1.3-0.2-2.6-0.3-3.9-0.3c0.1,6.7-0.7,35.2,1.5,\n\t\t\t\t41.2l5.2-15.6c1.3-2.1,9.1-16.1,10.7-17.5c-0.3-0.3-0.5-0.7-0.8-1c5.5-9.8,5.4-25,11-34.6l-0.9-0.5c3.3,1.6,7.1,3.3,\n\t\t\t\t9.2-0.9c0,0,4.7-10.5,4.7-10.5c3.9,1.2,7.9,2,12,2.4l4.6-3.9c-0.2-5.3,0.2-10.6,1.3-15.3c-1.7,0.2-3.4,0.4-5.1,0.5c-3.8,\n\t\t\t\t3.4-4.9,5.8-7.3,3c-3.4-3.9-10.4-11.6-12-13.7c-0.3,2-1.2,4.9-1.3,6.3c-0.1,1.8-2.5,2.7-4,\n\t\t\t\t0.9c-1.4-1.6-9.9-10.9-12.2-13.5c-1-1.1-0.8-2.9,1.5-2.7c1.9,0.2,4.7-0.2,7.2-0.2C41.3,96,32.9,86.1,29.6,\n\t\t\t\t82.2c-1.8-2.1-2.1-3.8-0.5-5.4c3.6-3.6,7.3-6.6,10.5-9.4c5.2-11.3,17.9-23.8,29.9-26.2c17.5-15.4,10.1-12.8,32,9.9c0.3-2.5,\n\t\t\t\t1.1-5.2,1.2-7.2c0.1-2.4,1.8-2.3,2.8-1.2c2.3,2.6,10.5,12.3,11.8,13.8c1.6,1.8,0.3,4-1.5,3.9c-1.4-0.1-4.4,0.4-6.4,0.4c1.8,\n\t\t\t\t1.9,8.6,9.8,12,13.7c2.4,2.7-0.1,3.5-4,6.9c-0.3,1.6-0.7,3.3-1.1,5c6.7-0.7,14.4,0.1,21.6,2.1c0.8-6.3,\n\t\t\t\t0.2-12.5-1.5-18.6c4.2-1.7,13.7-2,11.2-8.9c37.7-14.5,56.1-5.3,93.6-17.3c0,0,1.2-0.5,1.2-0.5l42.8-11.8c8.2-2.5,32.9-10.2,\n\t\t\t\t41.3-10.7C318.8,19.3,246.8,20,237.2,19.9z\n\t\t        M38.2,174.1c0.2,0.5,0.3,1.2,0,1.9c-0.9,0.9-1.7,2.1-3.1,1.2c-1.3-1-9.7-4-5.5-6.1c1.2-0.6,6.2,1.6,7.4,1.9C37.5,173.1,38,\n\t\t\t\t173.5,38.2,174.1z\n\t\t        M41.9,159.1c-0.5,3-6.7,0.5-8.5,0.5c-1.2-0.2-2.1-1.3-1.9-2.5c0.2-1.2,1.5-1.9,2.7-1.6C35.9,156.2,42.4,156.1,41.9,159.1z\n\t\t        M161.6,46.2l1.5,5.8c0.6,1.9-1.6,3.6-3.3,2.6c-1.4-0.5-2.2-5.9-2.8-7.1C156.1,44.6,160.9,43.3,161.6,46.2z\n\t\t        M180.4,42.8l0.6,5.9c0.3,2.9-4.2,3.5-4.5,0.6c0,0-0.8-5.9-0.8-5.9C175.2,40.4,180.1,39.8,180.4,42.8z\n\t\t        M199.1,41.5l0.4,6c0.2,3-4.6,3.2-4.7,0.3c0,0-0.3-6-0.3-6C194.2,38.8,198.9,38.5,199.1,41.5z\n\t\t        M217.3,39.4l1.1,5.9c0.4,2-2.2,3.5-3.8,2.3c-1.4-0.6-1.4-6.2-1.8-7.4C212.3,37.2,216.8,36.5,217.3,39.4z\n\t\t        M234.9,34.9l1.8,5.7c1,2.8-3.8,4.3-4.5,1.4c0,0-1.7-5.7-1.7-5.7C229.7,33.4,234,32,234.9,34.9z"\n\t\t/>\n\t\t<path\n            class="highlight"\n            d="M91.4,70.5c-5.9,5.4,1.9,14.3,8,9.1C105.3,74.2,97.5,65.3,91.4,70.5z\n\t\t        M66.4,92.5c-5.9,5.4,1.9,14.3,8,9.1C80.3,96.2,72.5,87.3,66.4,92.5z\n\t\t        M41.4,33.4c-3.2-0.2-3.5,4.9-0.2,5c2.2,0.1,3.9,1.9,3.8,4.1c-0.2,5.1-8.1,4.9-7.9-0.3c0.2-3.2-4.9-3.4-5-0.2c-0.3,11.7,\n\t\t\t\t17.3,12.3,18,0.7C50.3,37.7,46.3,33.5,41.4,33.4z\n\t\t        M36.8,147.3c-2.8-1.3-4.4,3.3-1.5,4.1c1.8,0.2,7.3,3.4,8.4,0.8C44.6,149.4,38.3,148.3,36.8,147.3z\n\t\t        M32.8,163.6c-2.9-0.5-3.6,3.3-0.7,3.8c1.9,0,7.9,2.9,8.5-0.5C41.2,163.7,34.6,164.3,32.8,163.6z\n\t\t        M205.7,38.7c-3.5,0.2-1.4,6.4-1.6,8.4c0.1,1.3,1.3,2.2,2.6,2.1c1.3-0.1,2.3-1.3,2.1-2.5C208.3,44.7,209.2,38.2,205.7,38.7z\n\t\t        M187.3,39.9c-1.3,0.1-2.3,1.2-2.2,2.5c0.5,2-0.6,8.4,2.9,8.1c3.6-0.2,1.6-6.3,1.8-8.4C189.7,40.8,188.6,39.8,187.3,39.9z\n\t\t        M223.4,35.7c-3.4,0.7-0.5,6.5-0.4,8.6c0.3,1.2,1.5,2,2.9,1.7c1.3-0.3,2.1-1.6,1.8-2.8l-1.5-5.8C225.8,36.2,224.6,35.5,\n\t\t\t\t223.4,35.7z\n\t\t        M168.1,42.4c-1.3,0.2-2.2,1.5-1.9,2.7c0.8,1.9,0.5,8.4,4,7.6c3.4-0.6,0.8-6.5,0.7-8.5C170.7,42.9,169.4,42.1,168.1,42.4z\n\t\t        M149.5,47.5c-1.3,0.4-1.9,1.8-1.5,3l2,5.6c0.4,1.2,1.7,1.8,2.9,1.4c1.2-0.4,1.8-1.7,1.4-2.9c0,0-1.9-5.7-1.9-5.7C152.1,\n\t\t\t\t47.7,150.7,47.1,149.5,47.5z"\n\t\t/>\n\t</g>\n    <g class="right">\n\t\t<path\n            class="base"\n            d="M908.2,120c0,0.4,0,1.4-0.1,2.7l2.2,1.8c3.9-1.1,9.2,1.2,11.2,3.6c-0.3-2.9-0.8-5.8-1-6.6C918.8,116.2,910.4,116,908.2,120z\n\t\t        M880.1,100.8c2.2-0.7,4.4-1,5-1.1c3.7-2.8,2.4-11-3-12c-0.8-0.1-3.8-0.3-6.7-0.1C879.2,90.3,881.3,95.9,880.1,100.8z\n\t\t        M894.2,76.7l35.4,31.1c1.7,1.5,4.3,1.3,5.8-0.4l5.6-6.4c1.5-1.7,1.3-4.3-0.4-5.8l-10.1-8.9c4-9.2-6.9-18.8-15.5-13.6l-9.8-8.6c-1.7-1.5-4.3-1.3-5.8,0.4l-5.6,6.4C892.3,72.6,892.5,75.2,894.2,76.7z\n\t\t        M952.1,102.7c-1.1,0.1-3.8,2.8-3.7,3.9c0.1,1.7,0.4,4.7,0.7,6.1c0.5,2.2,1.3,2.2,2.3,\n\t\t\t\t1.1l8-9.1c1.4-1.6-0.1-1.8-1.5-2C956.4,102.4,954,102.6,952.1,102.7z\n\t\t        M867.7,88.8c-2.2,0.6-4.6,1.3-6.7,2l14.5,7.7C875.2,94.4,871.4,90.1,867.7,88.8z\n\t\t        M893.2,58c1-0.1,3.4-3,3.3-4.2c-0.2-1.5-0.3-10.2-2.9-7l-8,9.1c-1,1.2-0.9,1.9,1.3,2.1C888.4,58.2,891.5,58.1,893.2,58z\n\t\t        M673.6,20.9c8.4,0.5,33.1,8.2,41.3,10.7l42.8,11.8c0,0,1.2,0.5,1.2,0.5c37.5,12,55.9,2.7,93.6,17.3c-2.6,7,7,7.2,11.2,\n\t\t\t\t8.9c-1.7,6.1-2.3,12.3-1.5,18.6c7.1-2,14.9-2.8,21.6-2.1c-0.4-1.7-0.8-3.4-1.1-5c-3.8-3.4-6.4-4.2-4-6.9c3.4-3.9,10.2-11.8,\n\t\t\t\t12-13.7c-2-0.1-5-0.5-6.4-0.4c-1.8,0.1-3-2.1-1.5-3.9c1.4-1.6,9.6-11.3,11.8-13.8c1-1.1,2.8-1.2,2.8,1.2c0,2,0.8,4.7,1.2,\n\t\t\t\t7.2c21.9-22.8,14.5-25.4,32-9.9c12,2.5,24.7,15,29.9,26.2c3.2,2.8,6.9,5.9,10.5,9.4c1.6,1.6,1.3,3.3-0.5,5.4c-3.3,3.9-11.8,\n\t\t\t\t13.8-15.7,18.2c2.5,0,5.3,0.4,7.2,0.2c2.4-0.3,2.5,1.5,1.5,2.7c-2.3,2.6-10.8,12-12.2,13.5c-1.6,1.8-3.9,\n\t\t\t\t0.8-4-0.9c-0.1-1.4-0.9-4.3-1.3-6.3c-1.7,2.1-8.6,9.8-12,13.7c-2.4,2.7-3.5,0.3-7.3-3c-1.7-0.1-3.4-0.3-5.1-0.5c1.1,4.7,\n\t\t\t\t1.5,10,1.3,15.3l4.6,3.9c4.1-0.4,8.1-1.2,12-2.4c0,0,4.7,10.5,4.7,10.5c2.1,4.2,5.9,2.5,9.2,0.9l-0.9,0.5c5.6,9.6,5.5,24.9,\n\t\t\t\t11,34.6c-0.3,0.3-0.6,0.6-0.8,1c1.5,1.4,9.4,15.4,10.7,17.5l5.2,15.6c2.2-6,1.4-34.5,1.5-41.2c-1.3,0-2.6,\n\t\t\t\t0.1-3.9,0.3c-4.5-9.5-4.7-23.6-10.5-33.8c2.6-0.8,4.1-3.7,2.9-6.3l-6.1-13.7c7.6-7.7,13.3-17.4,\n\t\t\t\t17.6-28.7V35.1c-1.9-3.5-4.4-6.7-7.3-9.3c-2.6-2.4-5.6-4.3-8.8-5.8c-37.5,0-59.8-5.2-87.2,26.2c0,\n\t\t\t\t0-13.6-4.1-13.6-4.1c-3.9-1-5.7,2.1-6.4,5.4c-38.7-14.9-57.2-5.7-94.2-17.4c0.5-3.3,0.6-6.7,0.4-10.1C753.2,20,681.2,19.3,\n\t\t\t\t673.6,20.9z\n\t\t        M963.1,172.9c1.2-0.2,6.2-2.4,7.4-1.9c4.1,2.1-4.3,5.1-5.5,6.1c-1.4,0.8-2.3-0.3-3.1-1.2c-0.3-0.6-0.2-1.3,0-1.9C962,173.5,\n\t\t\t\t962.5,173.1,963.1,172.9z\n\t\t        M965.8,155.5c1.2-0.3,2.4,0.4,2.7,1.6c0.2,1.2-0.6,2.3-1.9,2.5c-1.8,0-7.9,2.5-8.5-0.5C957.6,156.1,964.1,156.2,965.8,\n\t\t\t\t155.5z\n\t\t        M843,47.5c-0.5,1.1-1.4,6.6-2.8,7.1c-1.7,1-3.9-0.7-3.3-2.6l1.5-5.8C839.1,43.3,843.9,44.6,843,47.5z\n\t\t        M824.4,43.4c0,0-0.8,5.9-0.8,5.9c-0.4,2.9-4.9,2.4-4.5-0.6l0.6-5.9C819.9,39.8,824.8,40.4,824.4,43.4z\n\t\t        M805.5,41.8c0,0-0.3,6-0.3,6c-0.1,3-4.9,2.7-4.7-0.3l0.4-6C801.1,38.5,805.8,38.8,805.5,41.8z\n\t\t        M787.2,40.1c-0.4,1.2-0.4,6.8-1.8,7.4c-1.6,1.2-4.2-0.3-3.8-2.3l1.1-5.9C783.2,36.5,787.7,37.2,787.2,40.1z\n\t\t        M769.4,36.2c0,0-1.7,5.7-1.7,5.7c-0.8,2.9-5.5,1.4-4.5-1.4l1.8-5.7C766,32,770.3,33.4,769.4,36.2z"\n\t\t/>\n\t\t<path\n            class="highlight"\n            d="M900.6,79.6c6.1,5.2,13.9-3.7,8-9.1C902.5,65.3,894.7,74.2,900.6,79.6z\n\t\t        M925.6,101.6c6.1,5.2,13.9-3.7,8-9.1C927.5,87.3,919.7,96.2,925.6,101.6z\n\t\t        M950,42.6c0.7,11.6,18.3,11.1,18-0.7c-0.1-3.2-5.2-3.1-5,0.2c0.2,5.1-7.7,5.4-7.9,0.3c-0.1-2.2,1.6-4,3.8-4.1c3.3-0.1,\n\t\t\t\t3-5.1-0.2-5C953.7,33.5,949.7,37.7,950,42.6z\n\t\t        M956.2,152.1c1.1,2.7,6.6-0.6,8.4-0.8c2.9-0.8,1.2-5.4-1.5-4.1C961.7,148.3,955.4,149.4,956.2,152.1z\n\t\t        M959.4,167c0.5,3.4,6.5,0.5,8.5,0.5c2.9-0.5,2.2-4.3-0.7-3.8C965.4,164.3,958.8,163.7,959.4,167z\n\t\t        M791.1,46.6c-0.1,1.3,0.8,2.4,2.1,2.5c1.3,0.1,2.5-0.8,2.6-2.1c-0.2-2,2-8.2-1.6-8.4C790.8,38.2,791.7,44.7,791.1,46.6z\n\t\t        M810.2,42c0.2,2.1-1.8,8.2,1.8,8.4c3.5,0.3,2.4-6,2.9-8.1c0.1-1.3-0.9-2.4-2.2-2.5C811.4,39.8,810.3,40.8,810.2,42z\n\t\t        M773.8,37.4l-1.5,5.8c-0.3,1.2,0.5,2.5,1.8,2.8c1.3,0.3,2.6-0.4,2.9-1.7c0.1-2.1,3-7.8-0.4-8.6C775.4,35.5,774.2,36.2,\n\t\t\t\t773.8,37.4z\n\t\t        M829.1,44.1c0,2-2.7,7.9,0.7,8.5c3.4,0.8,3.2-5.7,4-7.6c0.3-1.3-0.6-2.5-1.9-2.7C830.6,42.1,829.3,42.9,829.1,44.1z\n\t\t        M847.5,48.9c0,0-1.9,5.7-1.9,5.7c-0.4,1.2,0.2,2.5,1.4,2.9c1.2,0.4,2.5-0.2,2.9-1.4l2-5.6c0.4-1.2-0.2-2.5-1.5-3C849.3,\n\t\t\t\t47.1,847.9,47.7,847.5,48.9z"\n\t\t/>\n\t</g>\n</svg>\n'
        },
        60251: t => {
            "use strict";
            t.exports = '<svg viewBox="0 0 1000 250">\n    <g class="left">\n\t    <path\n            class="base"\n            d="M45.5,75.9c1.1,22.3,2.3,36.4,10.3,38c1.5,0.3,1.3-2.3,1-3.6c-0.3-1.5-0.9-27.9-0.9-32.9c-0.1-5,2.8-32.3,\n                3.1-33.1c0.3-0.8-0.2-2.2-0.8-2.6C50.3,42.2,46.5,58.8,45.5,75.9z\n\t\t        M41.9,97.6C32.1,57.3,60.2,46.1,20,67.9l0,19.8C26,90.1,42.3,101,41.9,97.6z\n\t\t        M312.5,19.9h-67.2c-0.5,3.6,0.2,7.3,2.2,10.6c-5.9-0.4-12.4,3.3-15,8.8c-7.1-6.5-19.7-1.4-20.3,8.2c-7.4-3-17,0.7-20.3,\n                8.3c-6.7-5.4-17.9-0.3-18.3,8.4c-3.9,0.2-7.9,2.1-10.7,5.1c-7.6-12-26.5-2.9-22.2,10.3c-2.8-0.4-5.7,0-8.3,\n                1.1c3.4-25-11-48.9-33.9-60.7c0,0-71.1,0-71.1,0L20,27.2l0,36.7c8.3-4.5,17.9-9.6,23.1-12.2c1.9-1,2.5-2.1,3-3.5c0.4-1.5,\n                2.6-7.1,3.6-8.3c0.6-0.7,8.5-2.5,10.8-2.2c1.3,0.2,1.8,1.7,2,2.4c27.6-12.7,61,14.2,48.7,40.2c1.8,0,7.7,2.1,14.9,5.2c-1.1,\n                1.4-2,2.9-2.6,4.6c-6.7-1.6-14.6,3.1-16.2,10c-10.5-2.7-21.5,7.9-19.2,18.5c-3.8,1-7.1,4.6-7.9,8.4c-2.4-0.2-4.8,0.2-7.1,\n                1.1c-2.1-6.1-3.8-11.3-4.5-14.1c-3.9,0.3-5.2,0.3-8.2-0.3c-0.1,1.6,0.1,3.4-2.2,3.3c-0.9,0-7.9,0-9.1,0.1c-0.6,\n                0-1.4-0.8-1.7-1.6c-0.7-1.8-3.6-9.5-4.1-11.3c-0.2-0.6-1.4-1.7-2.6-2.3c-4.7-2.3-13.9-6.9-20.8-9.9l0,18c9.7,15.6,26.6,\n                25.6,44.2,26.9c-0.6,1.6-1,3.2-1.1,4.9c-9.5-3.7-19,7.4-14,16.2c-5.3,1.7-9.8,6.9-10.6,12.3c-8.4-1.4-17.4,5.8-18,\n                14.4c-0.2,0-0.4,0-0.6-0.1c0,6.3-0.5,26.8,1.4,32.7c0,0,0.1,0,0.1,0c0,0,5.1-15.3,5.1-15.3c4.3-10.4,35.5-50.3,42.7-60c0,0,\n                43.9-37.1,43.9-37.1c38.7-21.6,104.1-55.9,147.3-66.2c0,0-0.1-0.1-0.1-0.1c18.8-4,46.2-14.6,65.3-17.2c0,0,0-0.1,\n                0-0.1L312.5,19.9z"\n        />\n        <path\n            class="highlight"\n            d="M87.3,65.6c-5.5,5,1.8,13.4,7.5,8.6C100.3,69.1,93,60.8,87.3,65.6z\n\t\t        M63.8,86.2c-5.5,5,1.8,13.4,7.5,8.6C76.8,89.8,69.5,81.4,63.8,86.2z\n\t\t        M30.5,155.9c-5.8,3.8-0.3,12.5,5.6,8.9C42,160.9,36.4,152.3,30.5,155.9z\n\t\t        M36.1,158.3c2.5,3.9-3.5,7.7-6,3.8C27.6,158.1,33.6,154.4,36.1,158.3z\n\t\t        M32,134.3c-7.1,6.5,2.3,17.2,9.7,11C48.8,138.8,39.4,128.1,32,134.3z\n\t\t        M39.7,143.4c-5,4.2-11.3-3.1-6.5-7.4C38.1,131.8,44.5,139,39.7,143.4z\n\t\t        M184.6,41.4c-6.5,2.3-3.2,12.1,3.4,10C194.5,49.1,191.2,39.3,184.6,41.4z\n\t\t        M189.5,45.5c1.5,4.4-5.2,6.7-6.7,2.3C181.2,43.4,187.9,41.1,189.5,45.5z\n\t\t        M203.7,31.8c-6.5,2.3-3.2,12.1,3.4,10C213.6,39.5,210.3,29.7,203.7,31.8z\n\t\t        M208.6,35.9c1.5,4.4-5.2,6.7-6.7,2.3C200.3,33.8,207,31.5,208.6,35.9z\n\t\t        M157.9,42.6c-7.1,6.5,2.3,17.2,9.7,11C174.7,47.1,165.3,36.4,157.9,42.6z\n\t\t        M165.6,51.7c-5,4.2-11.3-3.1-6.5-7.4C164,40,170.4,47.3,165.6,51.7z\n\t\t        M137.7,54.8c-6.5,2.3-3.2,12.1,3.4,10C147.6,62.5,144.3,52.7,137.7,54.8z\n\t\t        M142.6,58.9c1.5,4.4-5.2,6.7-6.7,2.3C134.4,56.8,141.1,54.5,142.6,58.9z\n\t\t        M137.1,36.6c-6.5,2.3-3.2,12.1,3.4,10C147,44.2,143.7,34.4,137.1,36.6z\n\t\t        M142,40.6c1.5,4.4-5.2,6.7-6.7,2.3C133.8,38.5,140.5,36.2,142,40.6z"\n        />\n    </g>\n    <g class="right">\n\t    <path\n            class="base"\n            d="M943.6,43c-2.3-3.5-11.3-16-16.5-23.1l-15.6,0c0.8,0.9,0.9,1.5,0.5,2.7c-0.3,0.9-8.1,22.3-8.9,24c-0.8,1.7-0.6,3.3,0.4,\n                3c9.2-4,28.9-6.5,39.2-4.5C943.6,45.3,944.6,44.5,943.6,43z\n\t\t        M674.1,20.8c0,0,0,0.1,0,0.1c19.1,2.6,46.5,13.2,65.3,17.2c0,0-0.1,0.1-0.1,0.1c43.2,10.3,108.6,44.6,147.3,66.2c0,0,43.9,\n                37.1,43.9,37.1c7.2,9.7,38.4,49.6,42.7,60l5.1,15.3c0,0,0.1,0,0.1,0c1.9-5.8,1.4-26.3,1.4-32.7c-0.2,0-0.4,0-0.6,\n                0.1c-0.5-8.5-9.6-15.7-18-14.4c-0.9-5.4-5.3-10.6-10.6-12.3c5.1-8.9-4.5-19.9-14-16.2c-0.1-1.7-0.5-3.3-1.1-4.9c17.6-1.3,\n                34.6-11.4,44.2-26.9V27.2l-7.5-7.3l-41.1,0c6.1,8.3,14,19.5,17.8,25c1.2,1.7,2.4,2.3,3.9,2.5c1.5,0.2,7.4,1.7,8.7,2.5c0.8,\n                0.5,3.6,8.1,3.6,10.4c0,1.3-1.5,2-2.1,2.3c16.2,25.7-6.2,62.3-33.5,53.5c0.2,1.5-0.7,6-2.2,\n                11.9c-2.4-1.1-5.1-1.5-7.7-1.3c-0.8-3.8-4.1-7.3-7.9-8.4c2.3-10.6-8.7-21.2-19.2-18.5c-1.6-6.8-9.5-11.6-16.2-10\n                c-0.5-1.3-1.2-2.6-2-3.8c7.2-3.6,\n                13.4-6.6,16.6-7.9c-0.8-3.8-1-5.2-0.8-8.1c-1.6,0.1-3.4,0.5-3.6-1.8c-0.1-0.8-1-7.9-1.2-9c-0.5-2,10.4-6.4,12-7.4c0.6-0.2,\n                1.5-1.6,1.9-2.9c1.9-5.7,6.2-17.8,8.1-25.1c0.6-1.9,0.1-2.6-0.8-4.1c0,0-5.3,0-5.3,0c-22.8,11.7-37.3,35.7-33.9,\n                60.7c-2.7-1.1-5.5-1.4-8.3-1.1c4.3-13.3-14.6-22.3-22.2-10.3c-2.8-3.1-6.8-4.9-10.7-5.1c-0.3-8.7-11.5-13.8-18.3-8.4\n                c-3.3-7.5-12.9-11.3-20.3-8.3c-0.6-9.6-13.2-14.8-20.3-8.2c-2.6-5.5-9.1-9.2-15-8.8c2-3.2,\n                2.7-7,2.2-10.6l-67.2,0L674.1,20.8z\n\t\t        M925.5,50.4c-21.9,3.9-35.9,7.1-36.3,15.1c-0.1,1.5,2.4,1,3.8,0.6c13.1-3.2,52.5-7.4,65.7-6.4c4.3-0.1,\n                2.2-3.4-0.9-5.9C955.7,52.4,939.9,48.5,925.5,50.4z"\n        />\n        <path\n            class="highlight"\n            d="M832.4,53.6c7.3,6.2,16.8-4.5,9.7-11C834.7,36.4,825.3,47.1,832.4,53.6z\n\t\t        M840.9,44.3c4.8,4.4-1.6,11.6-6.5,7.4C829.6,47.3,836,40,840.9,44.3z\n\t\t        M958.3,145.3c7.3,6.2,16.8-4.5,9.7-11C960.6,128.1,951.2,138.8,958.3,145.3z\n\t\t        M966.8,136c4.8,4.4-1.6,11.6-6.5,7.4C955.5,139,961.9,131.8,966.8,136z\n\t\t        M792.9,41.8c6.6,2.1,9.9-7.6,3.4-10C789.7,29.7,786.4,39.5,792.9,41.8z\n\t\t        M798.2,38.2c-1.5,4.4-8.2,2.1-6.7-2.3C793,31.5,799.7,33.8,798.2,38.2z\n\t\t        M963.8,164.8c5.9,3.6,11.4-5.1,5.6-8.9C963.6,152.3,958,160.9,963.8,164.8z\n\t\t        M969.9,162.1c-2.5,3.9-8.5,0.1-6-3.8C966.4,154.4,972.4,158.1,969.9,162.1z\n\t\t        M933.6,99c5.7,4.8,13-3.5,7.5-8.6C935.4,85.6,928,94,933.6,99z\n\t\t        M859.5,46.5c6.6,2.1,9.9-7.6,3.4-10C856.3,34.4,853,44.2,859.5,46.5z\n\t\t        M864.8,42.9c-1.5,4.4-8.2,2.1-6.7-2.3C859.5,36.2,866.2,38.5,864.8,42.9z\n\t\t        M812,51.4c6.6,2.1,9.9-7.6,3.4-10C808.8,39.3,805.5,49.1,812,51.4z\n\t\t        M817.3,47.8c-1.5,4.4-8.2,2.1-6.7-2.3C812.1,41.1,818.8,43.4,817.3,47.8z\n\t\t        M910.1,78.4c5.7,4.8,13-3.5,7.5-8.6C911.9,65,904.5,73.4,910.1,78.4z\n\t\t        M858.9,64.8c6.6,2.1,9.9-7.6,3.4-10C855.7,52.7,852.4,62.5,858.9,64.8z\n\t\t        M864.1,61.2c-1.5,4.4-8.2,2.1-6.7-2.3C858.9,54.5,865.6,56.8,864.1,61.2z"\n        />\n    </g>\n</svg>'
        },
        95695: t => {
            "use strict";
            t.exports = '<svg viewBox="0 0 1000 250">\n    <g class="left">\n        <path\n            class="base"\n            d="M26.3,48.3c-2.9,0.1-3.2,0.9-1.7,3.6c1.5,2.8,8.5,11.9,8.5,11.9c0-3.4,5.9-13.5,7.4-14.9C40.4,48.9,28.3,48.3,26.3,48.3z\n                M110.3,49.2c0.1-2.9-2.6-4.4-4.9-4.2c8.9-6.6-2.5-15.8-8.1-8.9c-4.4-7.2-10.8-1-7.9,5.1C91.6,47.9,107.5,59.7,110.3,49.2z\n                M30.9,93.7c-7.5,4.5,0.1,17.2,7.6,9.7c-0.7,7.5,10.4,6.5,8.3-3C41.2,79.1,21.6,85.1,30.9,93.7z\n\t\t        M73.1,75.6c-6.7,6.5-0.6,16.7,8,9.1C89.9,77.4,80.4,69.6,73.1,75.6z\n\t\t        M312.5,19.9l-59.4,0c-7.7,7.7-12.6,20.8-23.7,24.6c-6.9,2.4-17.4-4.8-24.2-2.2c-7.8,3.1-11.5,16-18.9,19.2c-7.7,\n                3.4-19.7-2.6-27,1C150.2,67.3,149,84,137.6,85c-11.3,1.7,5.1-24.6-18.9-50.5c-5-5.5-11.4-10.5-18.8-14.6c0,0-72.4,0-72.4,\n                0L20,27.2l0,83.8c10.7,16.7,29.7,26.4,48.8,26.2c-1,3.8-2.6,7.5-6.2,10.7c-7.1,6.2-20.1,8-25.3,15.1C28.4,180.1,40,189,20,\n                203.2l0,5.1l1.5,8.9c0,0,5.2-15.6,5.2-15.6c4.2-10.3,35.5-50.4,42.7-60c0,0,43.9-37.1,43.9-37.1c30.7-17.8,95.6-50.1,\n                129-61.1c23.2-5.5,60.8-18.8,84.1-22.5L312.5,19.9z\n                M128.4,83.4c-21.1,1.1-16.6,15.5-27.1,26.8c-7,5.3-20,4.2-26.8,10.8c-2.2,2.1-3.2,4.9-3.9,8c-1.7,2.5-1.9-3.9-2.2-4.8c-1.4,\n                1.1-2.5,2.1-4.4,3.7c-0.9,0.8-1.6,0.9-2.6-0.2l-8.4-9.6c-2.5-3,2.6-5.1,5.2-8.1c-3.3-0.3-6.5-1.1-9.8-3c-0.8,4.8-8.2,\n                6.5-10.8,0.8c-10.1,4.4-17.2-6.3-10.2-14.1c-5.3-5.2-0.1-10.5,3.7-10.3c-1.1-5.6-1-11.6,0.4-17.3C15.8,43.8,17.7,46.2,43.3,\n                45.8c12.9-12.1,30.3-15.1,43.4-10.2c-0.2-6.7,8.4-7.4,10.5-2.9c5.9-6.6,19.6,2.7,12.7,11.6c5.7,3.7,3.1,11.7-2.4,10.8c1.7,\n                3.7,2.1,7,1.8,10.4c9.8-8.7,5.8-6.6,17.4,5.4c0.8,0.9,0.8,1.7-0.2,2.6c-2,1.7-4.9,4.4-5.4,4.8C122.4,78.4,131.4,82.4,128.4,\n                83.4z"\n        />\n        <path\n            class="highlight"\n            d="M22.9,184.7c-3.7,3,0.8,8.5,4.5,5.1C30.8,186.8,26.4,181.4,22.9,184.7z\n\t\t        M62,86.7c4.1-3.8-1.4-10.1-5.7-6.5C52.2,84,57.8,90.3,62,86.7z\n\t\t        M39.6,40.2c4.4-4-1.2-10.9-5.9-6.7C28.9,37.5,34.7,44.6,39.6,40.2z\n\t\t        M52.1,140.5c-4.5,3.7,0.9,10.4,5.5,6.3C61.7,143,56.5,136.5,52.1,140.5z\n\t\t        M86.4,65.3c4.1-3.8-1.4-10.1-5.7-6.5C76.6,62.6,82.2,68.9,86.4,65.3z\n                M224.3,30.1c-5,2.5-1.4,9.8,3.8,7C232.8,34.5,229.3,27.4,224.3,30.1z\n\t\t        M94.7,101.1c-4.8,4,1,11.1,5.9,6.7C105,103.8,99.4,96.9,94.7,101.1z\n\t\t        M180.8,47.9c-5.5,2.9-1.3,11.1,4.4,7.8C190.4,52.6,186.2,44.7,180.8,47.9z\n\t\t        M114.9,65c-3.7,2.9,0.8,8.8-1.9,11.4c-1.3,1.2-2.5,0.9-4.5,0.2c-5.5-2.4-11.4,1.7-9.5,8c0.4,2.2,0.6,3.6-1.1,5c-3.9,\n                3.3-8.2-2.8-12.7,1.4c-4.8,3.6,2.6,15-6.6,11.8c-2.3-0.7-5.1-1.5-7.6,0.7c-3.7,2.9,0.9,8.9-2,11.5c-1.4,1.2-3,0.8-5.4,\n                0.1c-2-0.6-4.3-1.3-6.1,0.3c-0.6,0.5-0.7,1.5-0.1,2.1c0,0,4.8,5.5,4.8,5.5c0.5,0.6,1.5,0.7,2.1,0.1c0.6-0.5,0.7-1.5,\n                0.1-2.1l-3-3.4c7,2.8,13.1,0.2,11.3-8.1c-0.3-1.9-0.4-3.1,0.3-3.7c3.2-2.4,8.2,2.8,11.8-0.7c3.8-2.9,0-9.1,\n                2.4-11.8c3.6-2.7,7.8,3.2,12.7-1.4c3-2.7,2.4-5.7,2-7.8c-1.3-4.2,2-6.2,5.7-4.6c2.1,0.7,4.8,1.5,7.4-0.8c3.2-2.8,1.5-6.6,\n                1.3-9.7l3.3,3.7c1.2,1.5,3.5-0.5,2.2-2c0,0-4.8-5.5-4.8-5.5C116.5,64.5,115.6,64.5,114.9,65z\n\t\t        M138.2,72.4c-4.7,2.4-1.3,9.4,3.6,6.6C146.2,76.6,142.8,69.8,138.2,72.4z"\n        />\n    </g>\n    <g class="right">\n        <path\n            class="base"\n            d="M945.6,25.7c-2.6,1.9-10.7,9.9-10.7,9.9c3.3-0.5,14,4,15.8,5.4c0,0-0.9-12.2-1.2-14.1C948.9,24.1,948.1,23.9,945.6,25.7z\n                M954.8,102.4c-2.2,9.3,9,10.8,8.1,2.5c7.7,7.9,15.4-4.5,7.8-9.2C980.3,86.6,961,80.8,954.8,102.4z\n\t\t        M920.4,86c8.4,7.8,14.9-2.6,8-9.1C921.1,71.1,911.7,78.5,920.4,86z\n\t\t        M912.9,42.6c2.1-5.4-3.5-12.3-7.9-5.1c-5.4-6.9-17.1,2.3-8.6,8.8c-2.3-0.2-4.5,1.5-4.4,4.3C894.6,60.9,910.9,49.3,912.9,\n                42.6z\n\t\t        M673.6,20.9c23.3,3.7,60.9,17,84.1,22.5c33.4,11,98.3,43.3,129,61.1c0,0,43.9,37.1,43.9,37.1c7.2,9.6,38.5,49.7,42.7,60c0,\n                0,5.2,15.6,5.2,\n                15.6l1.5-8.9v-5.1c-20-14.2-8.4-23.1-17.3-40.2c-5.2-7.1-18.2-8.9-25.3-15.1c-3.6-3.1-5.2-6.9-6.2-10.7c19.2,0.3,38.2-9.5,\n                48.8-26.2V27.2l-7.5-7.3c0,0-72.4,0-72.4,0c-22.1,11.6-36,34.7-33,59c0.4,3.3-3.9,6.9-8.5,\n                5c-7.9-3.6-10-17.4-17.9-21.3c-7.3-3.6-19.2,2.4-27-1c-7.5-3.3-11.1-16.2-18.9-19.2c-6.8-2.7-17.3,4.6-24.2,\n                2.2c-11.1-3.8-15.9-16.8-23.7-24.6l-59.4,0L673.6,20.9z\n\t\t        M883.5,62.6c1-1.1,2.5-1.2,3.4-0.4c0.9,0.8,3.1,2.7,5.3,4.5c-0.1-3.3,0.3-6.6,1.7-10.1c-4.9-0.2-7.5-7.2-2.2-10.6c-5.7-9.5,\n                4.1-17.9,12.6-12c4.5-5.9,10.4-1.4,10.7,2.4c5.4-1.9,11.4-2.5,17.2-1.9c20.3-18.5,18.2-16.4,21.9,9c13.7,11.3,18.9,28.1,\n                15.7,41.7c6.7-1,8.4,7.3,4.2,10.1c7.3,4.9-0.1,19.8-9.9,14.1c-2.9,6.1-11.2,4.5-11-1c-3.5,2.2-6.7,3-10.1,3.1c9.9,8.6,7.3,\n                4.9-3.1,17.9c-0.8,0.9-1.6,1-2.6,0.2c-2-1.7-5-4.3-5.5-4.7c-0.3,2.2-1,4.1-2,\n                5.8c-1.5-16.7-21.1-13.5-31.1-20.4c-6.4-4.9-6.9-18.5-14.3-22.9c-3.6-2.2-8-2.8-11.9-3c-1.6-0.1-2.1-2.3-0.7-3c2.5-1.3,\n                5.4-2.5,7.6-2.8c-1.2-1.2-2.4-2.2-4.3-3.9c-0.9-0.8-1.1-1.5-0.2-2.6L883.5,62.6z"\n        />\n        <path\n            class="highlight"\n            d="M942.4,146.7c4.6,4.1,10-2.6,5.5-6.3C943.5,136.5,938.3,143,942.4,146.7z\n\t\t        M972.6,189.8c3.7,3.3,8.2-2.1,4.5-5.1C973.6,181.4,969.2,186.8,972.6,189.8z\n\t\t        M946,82.3c-4.3-3.6-9.8,2.7-5.7,6.5C944.6,92.4,950.2,86.1,946,82.3z\n\t\t        M921.6,60.9c-4.3-3.6-9.8,2.7-5.7,6.5C920.2,71,925.8,64.6,921.6,60.9z\n\t\t        M966.3,33.5c-4.7-4.2-10.3,2.7-5.9,6.7C965.3,44.6,971.1,37.5,966.3,33.5z\n\t\t        M858.2,79c4.9,2.7,8.3-4.3,3.6-6.6C857.2,69.8,853.8,76.6,858.2,79z\n                M900,108.3c4.5,3.9,10.7-2.6,5.9-6.7C901.4,97.4,895,104,900,108.3z\n\t\t        M814.8,55.6c5.7,3.3,9.9-4.9,4.4-7.8C813.8,44.7,809.6,52.6,814.8,55.6z\n\t\t        M771.9,37.1c5.1,2.8,8.7-4.5,3.8-7C770.7,27.4,767.2,34.5,771.9,37.1z\n\t\t        M884.8,66.8c0,0-4.8,5.5-4.8,5.5c-1.3,1.4,1,3.4,2.2,2l3-3.4c-1.9,7.2,1.5,13,9.5,10.2c1.8-0.5,3-0.8,3.7-0.2c2.8,2.8-1.7,\n                8.5,2.2,11.7c3.4,3.4,9-1.2,12,0.8c3.1,3.2-2.1,8.1,3.1,12.4c3,2.7,5.9,1.7,8,1c4-1.9,6.4,1.2,5.3,5c-0.4,2.2-0.9,4.9,1.8,\n                7.2c3.2,2.8,6.7,0.6,9.8,0.1c0,0-3.3,3.7-3.3,3.7c-1.3,1.4,1,3.4,2.2,2l4.8-5.5c0.5-0.6,0.5-1.6-0.1-2.1c-3.3-3.3-8.6,\n                1.9-11.5-0.4c-3.1-3.1,2.2-8-2.7-12.1c-2.6-2.3-5.2-1.4-7.2-0.7c-2.2,0.7-3.5,1.1-5.1-0.4c-3.8-3.4,\n                1.7-8.5-3.1-12.4c-4.2-4.3-14.5,4.6-12.5-5c1.4-5.6-2-10.4-8.2-7.9c-2.3,0.7-3.9,1-5.2-0.1c-2.9-2.4,\n                1.5-8.6-1.9-11.4C886.3,66.1,885.4,66.1,884.8,66.8z"\n        />\n    </g>\n</svg>'
        },
        79787: t => {
            "use strict";
            t.exports = '<svg viewBox="0 0 1000 250">\n    <g class="left">\n\t    <path\n            class="base"\n            d="M34.8,92.4c5,0,5.1-5.4,4.8-7.3c1.7-0.5,6-1.2,5.7-5.6c-0.3-5.3-4.5-5-7.1-5.3c-0.8-8.5-11.7-5.6-9.1,3.1c-7.3,0.5-6.6,10.4,1,9.1C29.8,88.2,30.7,92.4,34.8,92.4z\n\t\t        M74.4,110.1c-2.5,3,1.5,6.9,4.1,4.3C81,111.9,77.2,108.2,74.4,110.1z\n\t\t        M82.4,106.1c-2.5,3,1.5,6.9,4.1,4.3C89,107.9,85.2,104.2,82.4,106.1z\n\t\t        M101.9,89c-2.5,3,1.5,6.9,4.1,4.3C108.5,90.8,104.8,87,101.9,89z\n\t\t        M107.1,81.7c-2.5,3,1.5,6.9,4.1,4.3C113.7,83.5,109.9,79.7,107.1,81.7z\n\t\t        M312.5,19.9h-18.2c-15.1,23-28.9,7-21.5,3.8c1.9-0.6,4.4,0,5,1.6c0.5-2.5,0.1-4.2-0.8-5.4l-11.4,0c-4.4,2.2-7.4,6.1-9.9,10.2c-3.7,7.6-12.9,16.8-20.3,9.4c-4.4-5.8,4.9-7,5.9-4.2c1-9.6-9.4-7.5-15.1-2.3c-4.9,4.3-6.8,11.1-10.4,16.2c-8.3,11.9-21.6,2.6-15.1-1.7c2.4-1,4.3-0.6,5.2,0.7c0.2-11.3-12.9-5.1-16.7,0.5c-3.6,4.5-5,10.4-7.8,15.1c-7.5,12.4-21.4,3.9-15.2-0.8c3.8-1.8,5.2,0.4,5.2,0.4c-0.1-4.7-3.5-8-9.3-4.9c-11.1,5.3-10,16.3-16,24.6c-2.7-1.8-10-7.4-13.4-8.1c1-23.2-13.3-44.1-34.2-55.1c0,0-71.1,0-71.1,0L20,27.2l0,82.5c8.8,14.2,23.8,24,39.7,26.4c-0.2,7.6,0.7,18.9-8.3,21.8c-3.2,1.2-9-1.4-6.4-5c1.7-2,3.5-2.5,4.9-1.8c-4.4-8.8-12-1.1-14,6.2c-1.9,6.3,0.2,13.1,0.2,19.3c0.1,5.7-4.2,13-10.6,11.8c-6.3-1.1-2.1-8.2,1.9-7c-2.4-3.7-5.1-4-7.3-2.6c0.1,6.7-0.6,32.5,1.5,38.5c0,0,5.2-15.6,5.2-15.6s8.6-14.8,8.6-14.8c0.9-1,37.9-51.5,38.4-48.8c-2.9-8.3-4.2-17.9-2.1-26.1c-2.2,3.2-13.9,11.1-15.9,12.2c-1.1,0.6-2.3-0.4-2-1.6c2.6-10.2-11.4-17.8-16.3-27c-2.3,0.8-8.2-0.6-9.8-5.8c-9.2-0.6-9-12.2-1.3-15.3c-1-7.7,6.2-9.3,8.6-8.5c7.3-29.5,51.4-40.5,67.9-19.2c6.1,6.9,9,15,19.7,15.5c4.7,1.6-10.5,14-13.2,16.4c11.6-0.2,24.3,3.9,33.2,10.4c39.1-23,98.4-47.2,142.7-57.4c8.2-2.5,33-10.2,41.3-10.7L312.5,19.9z"\n        />\n\t    <path\n            class="highlight"\n            d="M30.4,138.1c-2.2,2.6-2.6,8.1,0,8.2c0.8,0.1,3.2,0.1,3.8,0.4c0.5,0.3,0.2,1.6,1.4,1.7c0.7,0,1.4-1.9,1.8-2c0.4-0.1,1.3,0.1,1.9-0.5c0.6-0.6-0.1-1.5,0.2-1.8c0.3-0.3,2-1.2,1.7-2.1c-0.2-0.9-1.2-0.7-1.4-0.9c-0.5-0.4-0.8-3.3-1-4C37.7,134.6,33.2,135.5,30.4,138.1z\n\t\t        M61.8,84.7c-5.5,5,1.8,13.4,7.5,8.6C74.9,88.2,67.5,79.8,61.8,84.7z\n\t\t        M37.9,45.9c0.6,0.4,0,1.9,1.4,2.1c0.8,0.1,1.9-2,2.4-2.1c0.5-0.1,1.6,0.3,2.3-0.4c0.7-0.6,0.1-1.8,0.5-2.1c1.6-0.9,3.9-2.4,0.7-3.5c-0.9-1.7,0.3-6.6-2.9-6.8c-6-0.8-10.9,3.2-10.6,9.6C31.4,45.6,36.4,45.1,37.9,45.9z\n\t\t        M99.1,97.5c-0.7-0.4,0-2.1-1.5-2.3c-0.9-0.1-2.1,2.2-2.6,2.3c-0.5,0.1-1.7-0.3-2.5,0.4c-0.8,0.7-0.1,1.9-0.6,2.3c-1.8,1-4.2,2.6-0.8,3.8c1,1.9-0.3,7.2,3.1,7.4c6.5,0.9,11.8-3.5,11.6-10.4C106.2,97.8,100.8,98.3,99.1,97.5z\n\t\t        M184.6,35.6c-0.9-0.5-4.6-2.4-8.5-1.2c-3.9,1.4-7.8,7.3-5,9c0.8,0.6,3.4,2.1,3.9,2.7c0.4,0.6-0.8,1.8,0.5,2.6c0.8,0.5,2.7-1.2,3.2-1c0.5,0.1,1.4,0.9,2.4,0.6c1-0.3,0.9-1.7,1.4-1.8c0.5-0.2,2.9-0.1,3.2-1.2c0.3-1.1-0.9-1.4-1-1.9C184.4,41.3,187.6,37.1,184.6,35.6z\n\t\t        M142.5,45.3c-4.3,2.5-7.6,10.4-4,11.8c1.1,0.5,4.5,1.7,5.2,2.4c0.7,0.6-0.5,2.4,1.1,3c1,0.4,3-2,3.6-2c0.6,0,1.9,0.8,3,0.2c1.1-0.6,0.7-2.2,1.2-2.5c2.3-0.7,5.5-1.9,1.9-4.1c-0.5-0.9,0.5-5.1,0.5-6.2C154.9,43.8,147.8,42.8,142.5,45.3z\n\t\t        M85.3,64.1c-5.5,5,1.8,13.4,7.5,8.6C98.4,67.6,91,59.2,85.3,64.1z"\n        />\n    </g>\n    <g class="right">\n\t    <path\n            class="base"\n            d="M916,108.6c-2.8,3.4,1.9,6.1,3.8,4C922.3,109.8,919.7,105.8,916,108.6z\n\t\t        M923.9,112.8c-2.8,3.4,1.9,6.1,3.8,4C930.1,113.9,927.6,110,923.9,112.8z\n\t\t        M896.5,91.5c-2.8,3.4,1.9,6.1,3.8,4C902.7,92.6,900.2,88.7,896.5,91.5z\n\t\t        M926.4,43.2c8.3-1.9,4.1-12.3-4.3-8.6c-1.4-7.2-11.1-5.2-8.9,2.2c-9.1,0.7-5.6,12,2.5,9.2c0.7,1.6,1.9,5.8,6.3,4.9C927.3,49.9,926.5,45.8,926.4,43.2z\n\t\t        M891.5,84.1c-2.8,3.4,1.9,6.1,3.8,4C897.7,85.2,895.2,81.3,891.5,84.1z\n\t\t        M695.6,25.8C748,39,814.2,62.5,860.8,90.7c8.9-6,21.5-10.8,32.6-9.5c-3.5-1.8-12.8-12.3-14.1-14.2c-0.7-1,0.1-2.3,1.3-2.2c10.4,1.3,16.2-13.6,24.7-19.7c-1-2.2-0.5-8.2,4.5-10.5c-0.6-9.2,10.9-10.5,15-3.2c7.5-2,10.1,4.9,9.6,7.4c30.2,3.5,46.8,45.7,27.8,64.8c-6.1,6.9-13.7,10.9-12.8,21.5c-1,4.8-15.2-8.5-18-11c1.2,8.4,0.3,17.8-2.4,26l1.8,1.5c0,0,34.1,45.2,34.1,45.2c1.2,2.2,9.7,15.9,9.7,18.2l5.6,3.6c0.1-0.3,0-21.8,0-22.1c-6.7-2.4-14.6-2.6-19-8.7c-2.8-3.4-2.8-7.7-1.2-10c3.4-5.6,8.7,1.4,6.1,4.6c11.5-2.5,1.2-14.7-5-17c-7.8-3.8-18.1-1.7-24.2-8.7c-2.7-2.8-3.7-6.8-2-10c1.9-0.1,11.2-1.7,11.2-1.8c13.7-3.5,26.2-12.7,34-25.1V27.2l-7.5-7.3c0,0-71.1,0-71.1,0c-21.1,11-35.4,32.3-34.2,55.7c-9.3,0.8-21.8,7.4-28.4-2.5c-2.1-3-0.9-9.4,3.4-7.5c4,2,3.1,4.5,3.1,4.5c7.1-6-0.7-11.2-7.3-12.4c-4.7-0.9-9.5,0.1-13.9,1.5c-22.1,9.3-27.9-11.7-18.4-10.2c4.1,1.8,3.4,4.3,3.4,4.3c2.9-2.5,4.6-7.7-2.7-10.5c-10.7-4.5-18.1,1.2-27.3,3.3c-2.9,0.6-5.9,0.5-8.9-0.7c-6.5-1.6-8.4-12.5-1.9-11.1c4.2,1.5,3.6,4.2,3.6,4.2c2.8-2.7,4.2-7.9-3.3-10.4c-11-3.8-17.9,2.2-27,5c-5.6,1.8-14.4-0.1-15.4-6.8c-0.9-6.4,7.5-4.6,7.6-0.3c0.3,0,2.8-4.2,1.7-6h-25C705.9,22.7,701.3,26.2,695.6,25.8z"\n        />\n\t    <path\n            class="highlight"\n            d="M935,97.1c5.7,4.8,13-3.5,7.5-8.6C936.9,83.7,929.5,92,935,97.1z\n\t\t        M958.1,139.3c-0.4,0.2-1.4-0.2-1.8,0.8c-0.4,1,1.3,2.4,1.6,2.8c0.3,0.4-0.6,1.4-0.1,2.2c0.5,0.8,1.7,0.7,2.1,1c0.4,0.2,0.9,2.6,1.8,2.7c1.4,0.2,1.2-1.5,1.9-1.7c0.7-0.2,3.5,0.3,4.5,0.3c3,0.4,3.7-6.2,1.6-9.6c-2.1-3.2-6-4.1-7-4.2C959.6,132.9,959.4,137.9,958.1,139.3z\n\t\t        M968.2,42.7c0.2-6.4-4.7-10.4-10.6-9.6c-3.1,0.2-1.9,5.1-2.9,6.8c-3.2,1.1-0.9,2.6,0.7,3.5c0.4,0.3-0.2,1.5,0.5,2.1c0.7,0.6,1.8,0.3,2.3,0.4c0.5,0.1,1.6,2.3,2.4,2.1c1.4-0.2,0.8-1.8,1.4-2.1C963.6,45.1,968.6,45.6,968.2,42.7z\n\t\t        M817.1,43.2c-0.1,0.4-1.3,0.8-1,1.9c0.3,1.1,2.7,1,3.2,1.2c0.5,0.2,0.4,1.5,1.4,1.8c1,0.3,1.9-0.5,2.4-0.6c0.5-0.1,2.5,1.5,3.2,1c1.2-0.8,0-2,0.4-2.6c0.4-0.6,3-2.1,3.8-2.7c2.7-1.7-1.2-7.5-5.1-8.9c-3.9-1.2-7.6,0.7-8.5,1.3C814,36.9,817.3,41.1,817.1,43.2z\n\t\t        M896.8,103.5c0,6.6,5,11.3,11.8,10.1c3.2,0,1.9-5.3,2.6-7.1c0.3-0.7,2.1-0.3,2.1-1.8c0-0.9-2.5-1.8-2.6-2.3c-0.2-0.5,0.1-1.7-0.7-2.4c-0.8-0.7-1.9,0.1-2.4-0.3c-1.2-1.7-3.2-3.8-3.9-0.3C902,100.7,896.6,100.1,896.8,103.5z\n\t\t        M847,44.5c0,1.1,1.2,5.3,0.8,6.2c-3.5,2.5-0.3,3.4,2.1,4.1c0.6,0.3,0.2,1.9,1.4,2.4s2.3-0.3,3-0.3c0.6,0,2.7,2.2,3.7,1.8c1.6-0.7,0.4-2.4,1-3.1c0.6-0.7,4-2,5.1-2.6c3.6-1.6-0.1-9.2-4.5-11.6C854,39.2,846.9,40.5,847,44.5z\n\t\t        M911.6,76.5c5.7,4.8,13-3.5,7.5-8.6C913.4,63.1,906,71.4,911.6,76.5z"\n        />\n    </g>\n</svg>'
        },
        93748: t => {
            "use strict";
            t.exports = '<svg viewBox="0 0 1000 250">\n    <g class="left">\n\t    <path\n            class="base"\n            d="M113.7,87.6c0.6-1.3-1.5-2.3-2.1-0.9c-5.1,13.4-19.2,26-33,28.7c-1.4,0.3-0.9,2.6,0.6,2.2c0.2-0.1,3.3-0.8,7.3-2.5c0,1.8,\n                1.9,6.3,4.5,8.4l1.8-1.5c-2.5-1.9-4.3-6.8-4.1-7.9c8-3.2,16.4-10.9,20.7-18.5c1.6-0.2,7.2,3.1,8.5,\n                6.5l2-1.1c-1.3-3.3-6.9-7.4-9.2-7.5C112.5,90.3,113.6,87.8,113.7,87.6z\n                M120.8,91.1c-1,3.6-3,4-1.7,5.5c1.6,1,2.4-1.2,3.8-4.8c1-3.5,1.9-4.8,0.1-5.5C121.2,86.5,122.2,87.7,120.8,91.1z\n                M145.3,73.4c1.5,1.8,4.2-0.6,2.7-2.4C146.5,69.3,143.8,71.7,145.3,73.4z\n\t\t        M28.1,152.9c-1.8,1.5,0.6,4.2,2.4,2.7C32.2,154,29.8,151.3,28.1,152.9z\n                M54,148.8c1.5,1.8,4.2-0.6,2.7-2.4C55.2,144.7,52.4,147.1,54,148.8z\n                M86.7,123.3c0,0-2,0.7-4.8,1.2c-2.6,0.5-4.8,0.5-4.8,0.5c-1.5-0.1-1.5,2.3,0,2.3c0.1,0,2.4,0,5.3-0.5c2.9-0.6,5-1.3,\n                5.1-1.3C88.9,125,88.1,122.8,86.7,123.3z\n                M210.4,45.5c-1.8,1.5,0.6,4.2,2.4,2.7C214.5,46.7,212.1,43.9,210.4,45.5z\n                M183,50.9c1.5,1.8,4.2-0.6,2.7-2.4C184.2,46.8,181.5,49.2,183,50.9z\n                M233.8,24.5c-1.8,1.5,0.6,4.2,2.4,2.7C237.9,25.6,235.5,22.9,233.8,24.5z\n                M287.7,22.7c-1.8,1.5,0.6,4.2,2.4,2.7C291.9,23.8,289.5,21.1,287.7,22.7z\n                M195.5,30.5c-1.5-1.8-4.2,0.6-2.7,2.4C194.3,34.6,197,32.2,195.5,30.5z\n                M119.4,37.6c-5.8-7.1-13.2-12.8-22.2-17.7c0,0-69.7,0-69.7,0L20,27.2l0,83.7c3.4,5.2,7.4,9.6,12,13.4c-3.9,1.6-8.5,3.2-12,\n                4.3l0,2.9c4.4-1.3,9.9-3.3,14.6-5.2c10.4,7.6,22.9,11.2,35.6,10.9l-0.2,3.9l5.9-5c-1.1-5.9-1.2-12.1,0.2-17.9c-6.2,0-13.1,\n                0.7-20.7-1.2c4.8-2.3,9.8-4.9,14.9-7.6c11.8,0.9,25.9-7.5,32.1-18.5c4.2-2.6,8.3-5.2,12.2-7.8c-0.1,0.5-0.3,1-0.4,\n                1.5c8.6-0.1,17.5,2,25.2,5.8l6-3.2c-4.3-1.7-9.5-3.6-13.7-4.9c0.5-3.8,0.7-7.6,0.5-11.4C183.5,35.3,194.5,3.3,119.4,37.6z\n                M115.4,79.4c-3.5,2.3-7,4.6-10.7,6.9C116.3,58.5,80.9,32.7,56,56.3c-21.1,17.9-12.6,46.6,9.6,52.6c-4.8,2.5-9.5,4.8-14,\n                7c-67.6-34.4,4.5-121.2,54-74.2C116.1,53.7,117.4,67.9,115.4,79.4z\n                M132,67.8c-1-10-4.6-19.7-10.8-28C199.1,5.1,169.3,41.5,132,67.8z\n                M144.6,35.6c-1.8,1.5,0.6,4.2,2.4,2.7C148.7,36.8,146.3,34,144.6,35.6z"\n        />\n\t    <path\n            class="highlight"\n            d="M66.5,90c-5.3,4.8,1.7,12.7,7.1,8.1C78.9,93.4,71.9,85.4,66.5,90z\n                M88.8,70.4c-5.3,4.8,1.7,12.7,7.1,8.1C101.2,73.8,94.3,65.8,88.8,70.4z\n                M211.5,34.5c-3.1,2.8,1.1,7.5,4.2,4.8C218.8,36.5,214.6,31.7,211.5,34.5z\n                M247.2,29.6c-1.8,1.5,0.6,4.2,2.4,2.7C251.3,30.8,248.9,28,247.2,29.6z\n                M133.5,42.6c-1.8,1.5,0.6,4.2,2.4,2.7C137.6,43.8,135.2,41,133.5,42.6z\n\t\t        M276.3,27.1c-1.8,1.5,0.6,4.2,2.4,2.7C280.4,28.3,278,25.6,276.3,27.1z\n                M28.8,179c-1.8,1.5,0.6,4.2,2.4,2.7C32.9,180.2,30.5,177.5,28.8,179z\n                M179.6,57.7c-1.8,1.5,0.6,4.2,2.4,2.7C183.7,58.9,181.3,56.1,179.6,57.7z\n                M125,27.7c-1.8,1.5,0.6,4.2,2.4,2.7C129.1,28.8,126.7,26.1,125,27.7z\n                M37.9,141c-1.8,1.5,0.6,4.2,2.4,2.7C42.1,142.2,39.7,139.5,37.9,141z\n\t\t        M41.3,157.6c-2.5,2.1,0.9,6,3.3,3.8C47.1,159.3,43.7,155.4,41.3,157.6z\n                M166.6,40.6c-6.9-7.9-19.2,1.8-13.4,10.3c2.2-2,4.2-3.9,6.1-5.7c0.5-0.5,1.3-0.5,1.8,0c0.5,0.5,0.5,1.3,0,1.8c-1.9,1.9-3.9,\n                3.8-6.1,5.8C162.8,59.3,173.4,48.3,166.6,40.6z"\n\t\t/>\n    </g>\n    <g class="right">\n\t    <path\n            class="base"\n            d="M889.4,93.6c-2.3,0.1-7.9,4.2-9.2,7.5l2,1.1c1.3-3.4,6.8-6.7,8.5-6.5c4.2,7.6,12.6,15.3,20.7,18.5c0.2,1.1-1.6,6-4.1,7.9\n\t\t        l1.8,1.5c2.5-2.2,4.4-6.6,4.5-8.4c4,1.7,7,2.4,7.3,2.5c1.4,0.4,2-1.9,\n                0.6-2.2c-13.8-2.7-27.9-15.3-33-28.7c-0.6-1.4-2.7-0.4-2.1,0.9C886.4,87.8,887.5,90.3,889.4,93.6z\n                M876.9,86.3c-1.8,0.6-0.8,1.9,0.1,5.5c1.4,3.5,2.2,5.7,3.8,4.8c1.3-1.5-0.7-1.8-1.7-5.5C877.8,87.7,878.8,86.5,876.9,86.3z\n                M852,71c-1.6,1.7,1.2,4.1,2.7,2.4C856.2,71.7,853.5,69.3,852,71z\n\t\t        M969.6,155.5c1.7,1.6,4.1-1.2,2.4-2.7C970.2,151.3,967.8,154,969.6,155.5z\n                M943.3,146.4c-1.6,1.7,1.2,4.1,2.7,2.4C947.6,147.1,944.8,144.7,943.3,146.4z\n                M912.5,125.5c0.1,0,2.2,0.8,5.1,1.3c2.9,0.5,5.2,0.5,5.3,0.5c1.5,0,1.4-2.3,0-2.3c0,0-2.2,\n                0-4.8-0.5c-2.8-0.5-4.7-1.2-4.8-1.2C911.9,122.8,911.1,125,912.5,125.5z\n                M787.3,48.2c1.7,1.6,4.1-1.2,2.4-2.7C787.9,43.9,785.5,46.7,787.3,48.2z\n                M814.3,48.5c-1.6,1.7,1.2,4.1,2.7,2.4C818.5,49.2,815.8,46.8,814.3,48.5z\n                M763.9,27.1c1.7,1.6,4.1-1.2,2.4-2.7C764.5,22.9,762.1,25.6,763.9,27.1z\n                M709.9,25.3c1.7,1.6,4.1-1.2,2.4-2.7C710.5,21.1,708.1,23.8,709.9,25.3z\n                M807.2,32.9c1.6-1.7-1.2-4.1-2.7-2.4C803,32.2,805.7,34.6,807.2,32.9z\n                M867.7,71c-0.2,3.8,0,7.6,0.5,11.4c-4.3,1.3-9.5,3.2-13.7,4.9l6,3.2c7.7-3.8,16.6-5.9,25.2-5.8c-0.1-0.5-0.3-1-0.4-1.5c4,\n                2.6,8.1,5.2,12.2,7.8c6.2,10.9,20.3,19.3,32.1,18.5c5.1,2.7,10.1,5.2,14.9,7.6c-7.5,1.9-14.5,1.2-20.7,1.2c1.4,5.7,1.3,\n                11.9,0.2,17.9l5.9,5l-0.2-3.9c12.7,0.3,25.2-3.4,35.6-10.9c4.7,1.9,10.2,3.9,14.6,\n                5.2v-2.9c-3.5-1.1-8.1-2.7-12-4.3c4.7-3.8,8.6-8.3,12-13.4V27.2l-7.5-7.3c0,0-69.7,0-69.7,0c-8.9,4.9-16.3,\n                10.6-22.2,17.7C805.5,3.3,816.5,35.3,867.7,71z\n\t\t        M894.4,41.7c49.5-47.1,121.6,39.8,54,74.2c-4.6-2.2-9.2-4.5-14-7c22.2-6.1,30.7-34.7,9.6-52.6c-24.9-23.6-60.3,2.2-48.7,\n                30.1c-3.6-2.3-7.2-4.6-10.7-6.9C882.6,67.9,883.9,53.7,894.4,41.7z\n                M878.8,39.8c-6.2,8.4-9.8,18.1-10.8,28C830.7,41.5,800.9,5.1,878.8,39.8z\n                M853.1,38.3c1.7,1.6,4.1-1.2,2.4-2.7C853.7,34,851.3,36.8,853.1,38.3z"\n        />\n\t    <path\n            class="highlight"\n            d="M926.4,98.2c5.4,4.6,12.4-3.3,7.1-8.1C928.1,85.4,921.1,93.4,926.4,98.2z\n                M904,78.6c5.4,4.6,12.4-3.3,7.1-8.1C905.7,65.8,898.8,73.8,904,78.6z\n                M784.3,39.3c3.1,2.7,7.3-2,4.2-4.8C785.4,31.7,781.2,36.5,784.3,39.3z\n                M750.5,32.3c1.7,1.6,4.1-1.2,2.4-2.7C751.1,28,748.7,30.8,750.5,32.3z\n                M864.2,45.3c1.7,1.6,4.1-1.2,2.4-2.7C864.8,41,862.4,43.8,864.2,45.3z\n\t\t        M721.4,29.8c1.7,1.6,4.1-1.2,2.4-2.7C722,25.6,719.6,28.3,721.4,29.8z\n                M968.9,181.7c1.7,1.6,4.1-1.2,2.4-2.7C969.5,177.5,967.1,180.2,968.9,181.7z\n                M818.1,60.4c1.7,1.6,4.1-1.2,2.4-2.7C818.7,56.1,816.3,58.9,818.1,60.4z\n                M872.6,30.3c1.7,1.6,4.1-1.2,2.4-2.7C873.3,26.1,870.9,28.8,872.6,30.3z\n                M959.7,143.7c1.7,1.6,4.1-1.2,2.4-2.7C960.3,139.5,957.9,142.2,959.7,143.7z\n                M955.4,161.4c2.4,2.2,5.8-1.7,3.3-3.8C956.3,155.4,952.9,159.3,955.4,161.4z\n                M845.1,52.8c-2.2-2-4.3-3.9-6.1-5.8c-0.5-0.5-0.5-1.3,0-1.8c0.5-0.5,1.3-0.5,1.8,0c1.8,1.8,3.9,3.7,6.1,\n                5.7c5.8-8.6-6.5-18.2-13.4-10.3C826.6,48.3,837.2,59.3,845.1,52.8z"\n        />\n    </g>\n</svg>'
        },
        32334: t => {
            "use strict";
            t.exports = '<svg viewBox="0 0 1000 250">\n    <g class="left">\n\t    <path\n            class="base"\n            d="M26.8,130.2c-2.4-2.6-4.7-5.6-6.8-8.8v20.2c0.7,0.9,1.5,1.8,2.3,2.6c7.1,7.8,15.6,13.9,25.4,18c1.6,0.7,3.2,1.3,4.9,1.9\n\t            l10.5-14C49,147.6,36.4,140.8,26.8,130.2z\n                M83.2,19.9H43.6c-5.6,1.9-10.7,4.7-15.1,8.7c-3.5,3.1-6.3,6.8-8.5,10.9v63.2c3.7,9.6,8.8,18.3,14.8,24.9c8.7,9.6,19.9,15.5,\n                31.9,17.7l2.8-3.7l43.9-37.1l27.5-14.7c1.8-16.2-2.9-32.7-14.4-45.3C116.4,33.4,100.2,24.3,83.2,19.9z\n                M147.8,86.1l19-10.1c-0.4-6.3-1.5-12.5-3.4-18.5c-3.2-10.1-8.4-19.2-15.5-27c-3.3-3.7-7.2-7.2-11.6-10.5h-23.4c7.3,4.5,\n                13.8,9.6,18.9,15.2c11.8,13,17.6,30.1,16.3,48.1C148,84.2,147.9,85.2,147.8,86.1z"\n        />\n\t    <path\n            class="highlight"\n            d="M31.9,161.8l-0.2,5.1l-3.9,3.2l4.8,1.7l1.9,4.7l3.1-4l5.1-0.3l-2.9-4.2l1.3-4.9l-4.9,1.4L31.9,161.8z\n                M55,47.9l-10.4-4.2l1.7,11.1l-7.3,8.6l11.1,1.8l5.9,9.6l5.2-10L72.2,62l-7.9-8l0.8-11.2L55,47.9z\n                M37.4,79l-1.5,7l-6.3,3.5l6.2,3.6l1.4,7l5.3-4.8l7.1,0.9l-2.9-6.6l3-6.5l-7.1,0.7L37.4,79z\n                M91,35.5l-4.2,5.8l-7.1,0.6l4.2,5.8l-1.6,7l6.8-2.2l6.1,3.7l0-7.2l5.4-4.7L93.8,42L91,35.5z\n                M235.6,34.3l-3,1.5l-3.1-1.3l0.5,3.3l-2.2,2.6l3.3,0.6l1.8,2.9l1.6-3l3.3-0.8l-2.4-2.4L235.6,34.3z\n                M208.5,34l-2.4,4.9l-5.2,1.5l3.9,3.8l-0.2,5.4l4.8-2.6l5.1,1.9l-1-5.4l3.4-4.3l-5.4-0.7L208.5,34z\n                M180.3,38.1l-4.2,5.8l-7.1,0.6l4.2,5.8l-1.6,7l6.8-2.2l6.1,3.7l0-7.2l5.4-4.7l-6.8-2.3L180.3,38.1z"\n        />\n        <path\n            class="gold"\n            d="M95.9,105.4c-11.8,9.6-21.5,19.2-27.1,26.5l-21.4-15.8l21.4-8.3L60,89l23.1,0.6l4.1-22.7l16.5,12.4l11.9-20l11.6,25C119,\n                88.4,107.7,95.9,95.9,105.4z"\n        />\n    </g>\n    <g class="right">\n\t    <path\n            class="base"\n            d="M936.9,150.1l10.5,14c1.6-0.6,3.3-1.2,4.9-1.9c9.8-4.2,18.3-10.2,25.4-18c0.8-0.8,1.5-1.7,2.3-2.6v-20.2c-2.1,3.2-4.4,\n                6.2-6.8,8.8C963.6,140.8,951,147.6,936.9,150.1z\n                M868.2,35.1c5-5.6,11.5-10.7,18.9-15.2h-23.4c-4.4,3.3-8.3,6.8-11.6,10.5c-7.1,7.8-12.3,16.9-15.5,27c-1.9,6-3,12.2-3.4,\n                18.5l19,10.1c-0.1-1-0.2-1.9-0.3-2.9C850.6,65.2,856.4,48.1,868.2,35.1z\n                M971.5,28.5c-4.4-4-9.5-6.8-15.1-8.7h-39.6c-17,4.4-33.2,13.5-43.3,24.6c-11.5,12.7-16.2,29.2-14.4,45.3l27.5,14.7l43.9,\n                37.1l2.8,3.7c12-2.2,23.2-8.2,31.9-17.7c6-6.6,11.1-15.3,14.8-24.9V39.5C977.8,35.4,975,31.7,971.5,28.5z"\n        />\n\t    <path\n            class="highlight"\n            d="M963.8,164.5l-4.9-1.4l1.3,4.9l-2.9,4.2l5.1,0.3l3.1,4l1.9-4.7l4.8-1.7l-3.9-3.2l-0.2-5.1L963.8,164.5z\n\t\t        M934.9,42.8l0.8,11.2l-7.9,8l10.9,2.7l5.2,10l5.9-9.6l11.1-1.8l-7.3-8.6l1.7-11.1L945,47.9L934.9,42.8z\n                M957.4,83.8l-7.1-0.7l3,6.5l-2.9,6.6l7.1-0.9l5.3,4.8l1.4-7l6.2-3.6l-6.3-3.5l-1.5-7L957.4,83.8z\n                M906.2,42l-6.8,2.3l5.4,4.7l0,7.2l6.1-3.7l6.8,2.2l-1.6-7l4.2-5.8l-7.1-0.6l-4.2-5.8L906.2,42z\n                M764.6,37.7l-2.4,2.4l3.3,0.8l1.6,3l1.8-2.9l3.3-0.6l-2.2-2.6l0.5-3.3l-3.1,1.3l-3-1.5L764.6,37.7z\n                M788.5,38.5l-5.4,0.7l3.4,4.3l-1,5.4l5.1-1.9l4.8,2.6l-0.2-5.4l3.9-3.8l-5.2-1.5l-2.4-4.9L788.5,38.5z\n\t\t        M816.9,44.7l-6.8,2.3l5.4,4.7l0,7.2l6.1-3.7l6.8,2.2l-1.6-7l4.2-5.8l-7.1-0.6l-4.2-5.8L816.9,44.7z"\n        />\n        <path\n            class="gold"\n            d="M931.2,131.9c-5.6-7.3-15.3-16.9-27.1-26.5c-11.8-9.5-23.1-17-31.4-21l11.6-25l11.9,20l16.5-12.4l4.1,22.7L940,89l-8.7,\n                18.7l21.4,8.3L931.2,131.9z"\n        />\n    </g>\n</svg>\n'
        },
        17995: (t, e, s) => {
            var n = {
                "./player1.inline.svg": 71014,
                "./player2.inline.svg": 18112,
                "./player3.inline.svg": 7963,
                "./player4.inline.svg": 5245,
                "./player5.inline.svg": 60251,
                "./player6.inline.svg": 95695,
                "./player7.inline.svg": 79787,
                "./player8.inline.svg": 93748
            };

            function i(t) {
                var e = l(t);
                return s(e)
            }

            function l(t) {
                if (!s.o(n, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return n[t]
            }
            i.keys = function() {
                return Object.keys(n)
            }, i.resolve = l, t.exports = i, i.id = 17995
        },
        24626: t => {
            "use strict";
            t.exports = '<svg viewBox="0 0 1000 135" preserveAspectRatio="none">\n    <polygon\n        class="background"\n        points="72.8,0 37.6,33 29.2,60.6 41.9,117.5 68.6,135 500,132 927.2,135 956.7,115.8 970.8,72.7 963.8,31.3 927.2,0 500,3"\n    />\n    <polygon\n        class="inner"\n        points="71.6,125 50.7,111.4 39.5,61 46.4,38.5 76.8,10 500,13 923.5,10 954.5,36.5 960.5,71.9 948.3,109.3 924.2,125 500,122"\n    />\n    <polygon\n        class="edge"\n        points="76.8,10 119.7,10 109.7,67.5 119.7,125 71.6,125 50.7,111.4 39.5,61 46.4,38.5"\n    />\n    <polygon\n        class="edge"\n        points="924.2,125 877.3,125 887.3,67.5 877.3,10 923.5,10 954.5,36.5 960.5,71.9 948.3,109.3"\n    />\n</svg>\n'
        },
        9076: t => {
            "use strict";
            t.exports = '<svg viewBox="20 20 1000 1000" width="1000" height="1000">\n\t<path\n\t\tclass="shadow"\n\t\td="M620.2,404.5l-53.6-29.2l-63.8-7.9L430,396.6L390.6,440l-19,60.4l5.8,71.2l42.7,60.4l68,32.8l89.5-7.9l59-42.6l32.3-73\n\t\t\tl-9.2-80.3L620.2,404.5z"\n\t/>\n\t<path\n\t\tclass="edge"\n\t\td="M625.1,402.6l-56.4-30.7l-67.1-8.3l-76.4,30.7l-41.4,45.6l-20,63.5l6,74.8l44.9,63.5l71.5,34.5l94.1-8.3l62-44.8l33.9-76.8\n\t\t\tl-9.6-84.5L625.1,402.6z"\n\t/>\n\t<path\n\t\tclass="base"\n\t\td="M620.2,404.5l-53.6-29.2l-63.8-7.9L430,396.6L390.6,440l-19,60.4l5.8,71.2l42.7,60.4l68,32.8l89.5-7.9l59-42.6l32.3-73\n\t\t\tl-9.2-80.3L620.2,404.5z"\n\t/>\n\t<path\n\t\tclass="features"\n\t\td="M438.7,551.9l-2.2,2.1l15.3-0.2l20.5-5.2l17.9-7.5l1.1-3.1l-18.5,7l-20.4,5.1L438.7,551.9\n\t\t\tM485.5,475.7l6.4,4.7l7.5,13.1l-1.6-8.2l-5.5-9l-8-4.4l-13-0.3l-9,2.8l-6.8,4.6l-7.5,8.6l7.2-5.7l9.7-6l8.3-2.4L485.5,475.7\n\t \t\tM495.3,489.7l-11.5-9.7l-13.2-1.8l-13,7.2l-8.5,9.7l-3.3,11.3l3.6,3.7l25.9,0.7l7.7,1.7l-9.6-0.3l-13.1,1.1l23.5,1.1l6.2,2.9\n\t\t\tl3.1-1.8l3.6,2l1.9-7.2L495.3,489.7\n\t\t\tM469.9,481.5l10.8,0.3l10.3,8l5.1,17.6l-0.7,6.6l-8.3-3.5l-9.4-2.9l-29.5-2l2-6.8l8.1-11.1L469.9,481.5\n\t\t\tM554.9,590.6l-1.6-0.7L547,597l-44.8,1.1l-6.7-3.1c-2.7-2.8-4.2-4.4-4.6-4.9l2.2,5.9l7.7,4.4l42.9,0.9l5.7-2.9L554.9,590.6\n\t\t\tM594.7,551.1l-24.4-7l-16-5.7l1.3,3.5l16.1,6l23.3,6h14.3l-2.2-1.6L594.7,551.1\n\t\t\tM551.4,578.6l15-4.4l10.3-6.2l2.8-3.4l8.3-3.3l2.4,2.4l2.2-1.9l-3.9-5.1l-3.3-0.3l0.5,3.1l-4.1,2.2l-7,\n\t\t\t0.6l-28.2-0.3l-9.9-0.7h-29.9l-11.1,1.1l-31.7-0.8l-3.9-2c-0.1-0.1,0.2-0.8,0.9-2.1l-3.9-1.2l-2.2,2.5l-2,3.2l3.4,\n\t\t\t1.4l1.3-2.5l3.7,2.6l4.2,0.2l2.2,3.6l9.7,6.4l11.9,3.9l15.4,3.7l19.4,1.8l21.1-1.8L551.4,578.6\n\t\t\tM566.3,571.6l-4.7,0.9l-21.5,6l-37.6-0.3l-23.3-7l-0.3-2.6l-1.3-2.9l47.5-1.1l42.5,1.5c0.2,0.3-0.1,1.1-1.1,2.6L566.3,571.6\n\t\t\tM561.4,478.9l-9,6.6l-6.1,11.6l-1.2,11.6l1.3,9c0.2,0.1,1-0.2,2.4-0.7c0.7-0.2,1.4-0.5,2-0.8l1.6,\n\t\t\t1.8l9-3.3l23.3-0.9l-10.4-1.8l-7.3-0.3l7.1-1.1l22.3-1.1l1-5.7l-2.9-8.5l-10.4-12.3l-11.2-5.3L561.4,478.9\n\t\t\tM556.4,486.4l8.6-4.6l10.9-0.3l9.1,6l7.5,10.1l2.8,7.9l-31.9,2.4l-15,6l-0.3-7.8l2.5-11.3L556.4,486.4\n\t\t\tM550.2,478.3l-5.1,8.3l-0.4,6.2l2.8-5.7l6-7.8l10.1-4.7l12-0.3l10.4,5.7l9.1,7.7l-5.5-7.7l-14.8-8h-15L550.2,478.3\n\t\t\tM617.8,478.4l8.7,16.5l-1.2,7.6l4.6-6.8l-4.6-17.2l-6-11.6l-3.8-10.9l-31.1-11.6l-27-3.8l-9.4,10.5l-10.9,20.3l-6,17.7l-3.4,\n\t\t\t31.5l0.3,21.5l12-4.9l6,6l-25.2,12.3l-22.5-12l6-6l10.9,3.8l0.3-26.3l-5.6-33.8l-9.7-22.1l-13.1-18l-24.1,1.8l-35.6,13.5l-2.7,\n\t\t\t9.4l-5.3,10.1l-6.4,19.9l4.1,6.8l-0.8-7.2l5.7-10.9l9.3-12.1l19.6-6.7l29.7-7.8l15-0.8l10.1,21.4l6.8,32.3l-0.8,\n\t\t\t27.1l-9.4-4.1l-9.7,9.7l28.5,16.1l29.7-15.8l-10.2-10.5l-9.7,4.9l-0.3-10.5l1.8-31.5l5.3-20.4l9.4-17.9l16.6-0.4l24,6.4l22.5,\n\t\t\t7.2L617.8,478.4z"\n\t/>\n\t<path\n\t\tclass="eyes"\n\t\td="M480.6,481.8l-10.8-0.3l-11.6,6.1l-8.1,11.1l-2,6.8l29.5,2l9.4,2.9l8.3,3.5l0.7-6.6l-5.1-17.6L480.6,481.8 M565,481.8l-8.6,\n\t\t\t4.6l-5.9,8.6l-2.5,11.3l0.3,7.8l15-6l31.9-2.4l-2.8-7.9l-7.5-10.1l-9.1-6L565,481.8z"\n\t/>\n</svg>\n'
        }
    }
]);
//# sourceMappingURL=sourcemaps/6559.06c89e01b089c6773c43.js.map