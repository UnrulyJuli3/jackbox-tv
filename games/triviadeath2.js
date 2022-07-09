(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/triviadeath2"], {
        20188: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                MainView: () => et
            });
            var i = s(19755),
                o = s.n(i),
                a = s(13469),
                n = s.n(a),
                h = s(24340),
                r = s(97079),
                d = s(29014),
                l = s(49273);
            const c = l.r.extend({
                    template: n().template('<button type="button" class="button choice-button btn btn-lg"></button><button data-action="choose" class="button check-button btn btn-lg"></button>'),
                    bindings: n().extend(l.r.prototype.bindings, {
                        ".check-button": {
                            attributes: [{
                                name: "class",
                                observe: "className"
                            }]
                        }
                    })
                }),
                p = r.E.extend({
                    initialize(t) {
                        this.choicesList = this.choicesList || new d.C({
                            childView: c
                        }), r.E.prototype.initialize.apply(this, [t])
                    },
                    displayAudienceChoice(t) {
                        let e = "";
                        if ("FinalRound" !== this.model.get("roundType")) {
                            const s = this.model.get("choices");
                            if (!s) return e;
                            e = `<div class="chosenText">You have chosen<br>${s.find((e=>e.key===t[0])).html}</div>`
                        }
                        return {
                            html: e
                        }
                    },
                    onChildviewChildviewButtonArtifact() {
                        const t = this.model.get("artifact");
                        let e = "games.jackbox.tv"; - 1 !== t.rootId.indexOf("test") && (e = "games-test.jackbox.tv");
                        const s = `https://${e}/artifact/${t.categoryId}/${t.artifactId}/`;
                        this.triggerMethod("track:event", {
                            category: "PostGame",
                            action: "galleryClicked"
                        }), window.open(s, "_blank")
                    }
                });
            var m = s(63574),
                g = s.n(m),
                u = s(9659);
            const f = u.S.extend({
                    defaults: {
                        mode: "normal",
                        showProgress: !0,
                        skin: "MemoryGrid",
                        prompt: {
                            text: ""
                        },
                        classes: ["MemoryGrid"],
                        grid: [
                            ["a", "b", "c"],
                            ["1", "2", "3"]
                        ],
                        error: ""
                    }
                }),
                x = g().View.extend({
                    template: n().template('<div id="prompt" class="prompt">prompt</div> <div id="grid" class="grid">grid</div> <div id="error" class="error"></div> <div id="instructions" class="instructions"></div> '),
                    className: "Grid",
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: "classes",
                                onGet: t => t.join(" ")
                            }]
                        },
                        ".prompt": {
                            observe: "prompt",
                            updateMethod: "html",
                            onGet: t => t ? t.html ? t.html : o()("<div />").text(t.text).html() : "b"
                        },
                        ".error": {
                            observe: "error",
                            updateMethod: "html"
                        },
                        ".grid": {
                            observe: "grid",
                            updateMethod: "html",
                            onGet(t) {
                                let e = "";
                                return t.forEach(((t, s) => {
                                    e += '<div class="grid-row">', t.forEach(((i, o) => {
                                        let a = "";
                                        a = "Stab" === i.type || "Hide" === i.type ? `<button class='grid-contents' aria-label='${i.type}' data-y=${s} data-x=${o}>${i.text}</button>` : `<div class='grid-contents' aria-label='${i.type}' data-y=${s} data-x=${o}>${i.text}</div>`, e += `<div class='grid-cell grid-cell-${t.length} ${i.type}'>${a}</div>`
                                    })), e += "</div>"
                                })), e
                            }
                        },
                        ".instructions": {
                            updateMethod: "html",
                            observe: "instructions"
                        }
                    },
                    model: new f,
                    events: {
                        "click button.grid-contents": "cellClicked"
                    },
                    cellClicked(t) {
                        const e = t.target.dataset.x,
                            s = t.target.dataset.y;
                        this.triggerMethod("client:message", {
                            action: "click",
                            position: `${s}-${e}`
                        })
                    },
                    initialize() {},
                    onRender() {
                        this.stickit()
                    }
                });
            var y = s(44442),
                v = s(27091),
                b = s.n(v),
                w = new URL(s(90534), s.b),
                M = new URL(s(72239), s.b);
            const k = '<div> <canvas id="scratch" class="canvas scratch" width="640" height="880"></canvas> <div class="visuallyhidden"> <img id="Skull" src="' + b()(w) + '"/> <img id="Dollar" src="' + b()(M) + '"/> </div> </div>',
                C = u.S.extend({
                    defaults: {
                        choices: [],
                        classes: [],
                        isMarkedForDeath: !1
                    }
                }),
                I = {
                    width: 126,
                    height: 126,
                    color: "gray",
                    thickness: 10,
                    imageThickness: 0,
                    totalDistance: 0,
                    revealDistance: 400,
                    revealed: !1,
                    index: 0,
                    isMarkedForDeath: !1,
                    onDown() {
                        this.focused = !1
                    },
                    onOver() {
                        if (this.isMarkedForDeath) return;
                        if (!this.drawing) return;
                        if (!this.focused) return;
                        const t = this.lines[this.lines.length - 1];
                        if (!t) return;
                        const e = t[t.length - 1],
                            s = {
                                x: y.cx.x - this.x,
                                y: y.cx.y - this.y
                            };
                        t.push(s);
                        const i = s.x - e.x,
                            o = s.y - e.y;
                        this.totalDistance += Math.sqrt(i * i + o * o), !this.revealed && this.totalDistance > this.revealDistance && (this.onRevealed(this.index), this.revealed = !0)
                    },
                    onUp() {
                        this.focused = !1
                    },
                    onRevealed() {},
                    update() {
                        this.lines || (this.lines = []), this.hiddenCanvas || (this.hiddenCanvas = document.createElement("canvas"), this.hiddenCanvas.width = this.width, this.hiddenCanvas.height = this.height), this.skullImage || (this.skullImage = document.getElementById("Skull")), this.dollarImage || (this.dollarImage = document.getElementById("Dollar")), this.revealed && (this.imageThickness = Math.min(this.imageThickness + 10 / 60, 2 * this.width)), this.isMarkedForDeath || (this.drawing = (0, y.tN)("left"), this.drawing && !this.focused && (0, y.gr)(this) && this.lines.push([{
                            x: y.cx.x - this.x,
                            y: y.cx.y - this.y
                        }]), this.focused = (0, y.gr)(this))
                    },
                    render() {
                        if (!this.hiddenCanvas) return;
                        const t = this.hiddenCanvas.getContext("2d");
                        t.clearRect(0, 0, this.hiddenCanvas.width, this.hiddenCanvas.height), t.save(), this.revealed && (t.globalCompositeOperation = "source-over", t.strokeStyle = "#BBBBBB", t.lineWidth = this.imageThickness, this.lines.forEach((e => {
                            t.beginPath(), t.moveTo(e[0].x, e[0].y), e.forEach((e => {
                                t.lineTo(e.x, e.y)
                            })), t.stroke()
                        })), t.globalCompositeOperation = "source-in", "red" === this.color.toLowerCase() && this.skullImage ? t.drawImage(this.skullImage, 0, 0, this.width, this.height) : "green" === this.color.toLowerCase() && this.dollarImage && t.drawImage(this.dollarImage, 0, 0, this.width, this.height)), t.globalCompositeOperation = "destination-over", t.strokeStyle = "#BBBBBB", t.lineWidth = this.thickness, this.lines.forEach((e => {
                            t.beginPath(), t.moveTo(e[0].x, e[0].y), e.forEach((e => {
                                t.lineTo(e.x, e.y)
                            })), t.stroke()
                        })), t.restore(), (0, y.Sy)().drawImage(this.hiddenCanvas, this.x, this.y)
                    }
                },
                L = g().View.extend({
                    template: n().template(k),
                    className: "Scratch",
                    model: new C,
                    events: {
                        "click .grid-cell": "cellClicked"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: "classes",
                                onGet: t => t ? t.join(" ") : ""
                            }]
                        }
                    },
                    initialize() {
                        this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
                    },
                    update() {
                        const t = this.model.get("isMarkedForDeath");
                        this.model.get("choices").forEach(((e, s) => {
                            const i = this.sprites.find((t => t.index === s));
                            i && (i.color = e.color, i.isMarkedForDeath = t)
                        }))
                    },
                    onRender() {
                        this.stickit()
                    },
                    sprites: [],
                    onBeforeDestroy() {
                        window.removeEventListener("resize", this.onResizeWithContext);
                        const t = this;
                        for (let e = 0; e < t.sprites.length; e++)(0, y.Zw)(t.sprites[e]), t.sprites[e].ttl = 0;
                        t.gameLoop.update(1 / 60), t.gameLoop.stop()
                    },
                    onAttach() {
                        const t = this;
                        (0, y.S1)("scratch"), (0, y.hg)(), this.gameLoop = (0, y.DX)({
                            fps: 60,
                            update(e) {
                                t.sprites.forEach((t => t.update(e))), t.sprites = t.sprites.filter((t => t.isAlive()))
                            },
                            render(e) {
                                t.sprites.forEach((t => t.render(e)))
                            }
                        });
                        for (let e = 0; e < 3; e++)
                            for (let s = 0; s < 3; s++) {
                                const i = (0, y.jy)(I);
                                i.x = 117 + s * (i.width + 14), i.y = 372 + e * (i.height + 14), i.index = 3 * e + s, i.onRevealed = e => {
                                    t.triggerMethod("client:message", {
                                        action: "scratch",
                                        index: e
                                    })
                                }, (0, y.j)(i), t.sprites.push(i)
                            }
                        this.gameLoop.start(), this.update(), this.onResize()
                    },
                    onResize() {
                        const t = (0, y.o_)(),
                            e = this.$el,
                            s = parseInt(o()(".playerTopBar").innerHeight(), 10),
                            i = t.width,
                            a = t.height,
                            n = Math.min(e.width(), i),
                            h = Math.max(o()(window).innerHeight() - s, 250),
                            r = Math.min(n / i, h / a),
                            d = i * r,
                            l = a * r;
                        t.style.width = `${d}px`, t.style.height = `${l}px`
                    }
                });
            var R = s(40543),
                D = new URL(s(69089), s.b),
                E = new URL(s(46978), s.b),
                T = new URL(s(82547), s.b);
            const B = '<div> <canvas id="phone" class="canvas phone" width="825" height="972"></canvas> <button id="reset" class="button reset">Reset</button> <div class="visuallyhidden"> <img id="fingerStop" src="' + b()(D) + '"/> <img id="fingerWheel" src="' + b()(E) + '"/> <img id="numberPlate" src="' + b()(T) + '"/> </div> </div>',
                $ = u.S.extend({
                    defaults: {
                        choices: [],
                        classes: [],
                        dialed: "",
                        status: null
                    }
                }),
                z = function(t) {
                    return t * (Math.PI / 180)
                },
                S = [0, .178, .424, .608, .735, .824, .888, .934, .965, .986, .997, 1, .997, .988, .973, .951, .921, .883, .836, .779, .712, .632, .54, .436, .322, .201, .087, 0, .015, .032, .049, .066, .083, .098, .112, .125, .136, .145, .151, .154, .151, .144, .134, .121, .106, .09, .072, .054, .035, .017, 0],
                U = {
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    x: 412,
                    y: 486,
                    width: 825,
                    height: 972,
                    color: "#333333",
                    update(t) {
                        this.image || (this.image = document.getElementById("numberPlate")), this.advance(t)
                    }
                },
                N = {
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    x: 412,
                    y: 485,
                    width: 700,
                    height: 700,
                    color: "red",
                    rotationSpeed: z(300) / 60,
                    bounceFrame: 0,
                    onDown() {
                        if (this.rotation > 0) return;
                        if (this.bounceFrame > 0) return;
                        const t = {
                            x: y.cx.x - this.x,
                            y: y.cx.y - this.y
                        };
                        let e = Math.atan2(t.y, t.x);
                        e = e < 0 ? Math.abs(e) : 2 * Math.PI - e;
                        const s = Math.floor(e / z(30));
                        0 !== s && 11 !== s && (this.startAngle = e, this.maxRotation = (s + 1) * z(30), this.currentDigit = s, this.selected = !0)
                    },
                    onUp() {
                        if (!this.selected) return;
                        this.selected = !1;
                        let t = Math.floor(this.rotation / z(30));
                        0 === t && (this.bounceFrame = S.length - 1), 0 !== t && 11 !== t && (10 === t && (t = 0), this.dialNumber(t))
                    },
                    dialNumber() {},
                    update(t) {
                        if (this.image || (this.image = document.getElementById("fingerWheel")), this.selected) {
                            const t = {
                                x: y.cx.x - this.x,
                                y: y.cx.y - this.y
                            };
                            let e = Math.atan2(t.y, t.x);
                            e = e < 0 ? Math.abs(e) : 2 * Math.PI - e, this.pointAngle = e;
                            let s = this.startAngle - e;
                            s < 0 && (s += 2 * Math.PI), s > 0 && s < this.maxRotation && (this.rotation = s)
                        }
                        if (this.selected && !(0, y.tN)("left") && this.onUp(), this.selected || (this.rotation -= this.rotationSpeed, this.rotation = Math.max(0, this.rotation)), this.bounceFrame > 0) {
                            const t = S.length - 1 - this.bounceFrame;
                            this.rotation = z(13 * S[t]), this.bounceFrame += -1
                        }
                        this.advance(t)
                    }
                },
                G = {
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    x: 412,
                    y: 485,
                    width: 700,
                    height: 700,
                    color: "gray",
                    update(t) {
                        this.image || (this.image = document.getElementById("fingerStop")), this.advance(t)
                    }
                },
                P = {
                    y: 75,
                    type: "dialed",
                    val: "",
                    status: !1,
                    flashFrames: 0,
                    flash: !0,
                    update(t) {
                        this.status ? (this.flashFrames += -1, this.flashFrames < 0 && (this.flash = !this.flash, this.flashFrames = 20)) : this.flash = !1, this.advance(t)
                    },
                    render() {
                        if (this.flash) return;
                        const t = this.status || this.val,
                            e = (0, y.Sy)();
                        e.save(), e.font = "48px nokian11regular", e.fillStyle = "#6b8d45", e.textAlign = "center", e.fillText(t, .5 * (0, y.o_)().width + 1, this.y + 2), e.fillStyle = "#1c3c29", e.textAlign = "center", e.fillText(t, .5 * (0, y.o_)().width, this.y), e.restore()
                    }
                },
                j = g().View.extend({
                    template: n().template(B),
                    className: "Dial",
                    model: new $,
                    events: {
                        "click #reset": "sendHangup"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: "classes",
                                onGet: t => t ? t.join(" ") : ""
                            }]
                        }
                    },
                    initialize() {
                        this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
                    },
                    update() {
                        const t = this.sprites.find((t => "dialed" === t.type)),
                            e = this.model.get("dialed");
                        let s = this.model.get("status") || "";
                        "busy" === s.toLowerCase() && (s = "NUMBER BUSY"), "connected" === s.toLowerCase() && (s = "CONNECTED"), "wrongnumber" === s.toLowerCase() && (s = "WRONG NUMBER"), t && (t.val = e, t.status = s)
                    },
                    onRender() {
                        this.stickit()
                    },
                    sprites: [],
                    onBeforeDestroy() {
                        window.removeEventListener("resize", this.onResizeWithContext);
                        const t = this;
                        for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
                        t.gameLoop.update(1 / 60), t.gameLoop.stop()
                    },
                    sendHangup() {
                        this.triggerMethod("client:message", {
                            action: "hangup"
                        }), this.sprites.find((t => "dialed" === t.type)).val = "", o()(".reset").blur()
                    },
                    onAttach() {
                        const t = this;
                        (0, y.S1)("phone"), (0, y.hg)(), this.gameLoop = (0, y.DX)({
                            fps: 60,
                            update(e) {
                                t.sprites.forEach((t => t.update(e))), t.sprites = t.sprites.filter((t => t.isAlive()))
                            },
                            render(e) {
                                t.sprites.forEach((t => t.render(e)))
                            }
                        });
                        const e = (0, y.jy)(U);
                        t.sprites.push(e);
                        const s = (0, y.jy)(N);
                        s.dialNumber = function(e) {
                            const s = [],
                                i = e || 10;
                            for (let t = 0; t < i && !(t > 10); t++) s.push(20), s.push(120);
                            R.b.vibrate(s), t.triggerMethod("client:message", {
                                action: "dial",
                                num: e
                            }), t.sprites.find((t => "dialed" === t.type)).val += e
                        }, (0, y.j)(s), t.sprites.push(s);
                        const i = (0, y.jy)(G);
                        t.sprites.push(i);
                        const o = (0, y.jy)(P);
                        t.sprites.push(o), this.gameLoop.start(), (0, y.o_)().addEventListener("mouseleave", (t => {
                            s.onUp(t)
                        })), this.update(), this.onResize()
                    },
                    onResize() {
                        const t = (0, y.o_)(),
                            e = this.$el,
                            s = parseInt(o()(".playerTopBar").innerHeight() + o()(".button.reset").innerHeight() + 10, 10),
                            i = t.width,
                            a = t.height,
                            n = Math.min(e.width(), i),
                            h = Math.max(o()(window).innerHeight() - s, 250),
                            r = Math.min(n / i, h / a),
                            d = i * r,
                            l = a * r;
                        t.style.width = `${d}px`, t.style.height = `${l}px`
                    }
                });
            var A = new URL(s(98201), s.b),
                F = new URL(s(52760), s.b),
                W = new URL(s(52197), s.b),
                _ = new URL(s(22445), s.b),
                H = new URL(s(58790), s.b),
                O = new URL(s(12370), s.b),
                V = new URL(s(5345), s.b),
                X = new URL(s(29713), s.b);
            const Y = '<div> <div class="prompt">Slide your chip to pick a spot to drop.</div> <canvas id="drop" class="canvas drop" width="640" height="640"></canvas> <div class="visuallyhidden"> <img id="ChipGreen" src="' + b()(A) + '"/> <img id="ChipPurple" src="' + b()(F) + '"/> <img id="ChipBlue" src="' + b()(W) + '"/> <img id="ChipGray" src="' + b()(_) + '"/> <img id="ChipYellow" src="' + b()(H) + '"/> <img id="ChipOrange" src="' + b()(O) + '"/> <img id="ChipRed" src="' + b()(V) + '"/> <img id="ChipPink" src="' + b()(X) + '"/> </div> </div>',
                q = u.S.extend({
                    defaults: {
                        classes: []
                    }
                }),
                Z = 128,
                J = {
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    width: Z,
                    height: Z,
                    x: 320,
                    y: 64,
                    color: "white",
                    dropped() {},
                    isDropped: !1,
                    update(t) {
                        this.selected && !(0, y.tN)("left") && this.onUp(), !this.isDropped && (0, y.tN)("left") && (this.x = Math.max(64, Math.min((0, y.o_)().width - 64, y.cx.x)), this.selected = !0), this.dollColor && !this.image && (this.image = document.getElementById(`Chip${this.dollColor}`)), this.advance(t)
                    },
                    onUp() {
                        this.selected && (this.selected = !1, this.ddy = 540, this.isDropped = !0, this.dropped())
                    },
                    render() {
                        if (this.draw(), !this.isDropped) {
                            const t = (0, y.Sy)();
                            t.save(), t.translate(this.x, this.y + 64), t.fillStyle = this.color, t.beginPath(), t.moveTo(-1 / 6 * this.width, 0), t.lineTo(1 / 6 * this.width, 0), t.lineTo(0, 1 / 6 * Z), t.fill(), t.restore()
                        }
                    }
                },
                K = {
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    width: Z,
                    height: 20,
                    color: "black"
                },
                Q = g().View.extend({
                    template: n().template(Y),
                    className: "Drop",
                    model: new q,
                    events: {
                        "click .grid-cell": "cellClicked"
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "class",
                                observe: "classes",
                                onGet: t => t ? t.join(" ") : ""
                            }]
                        }
                    },
                    initialize() {
                        this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
                    },
                    update() {},
                    onRender() {
                        this.stickit()
                    },
                    sprites: [],
                    played: [],
                    onBeforeDestroy() {
                        window.removeEventListener("resize", this.onResizeWithContext);
                        const t = this;
                        for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
                        t.gameLoop.update(1 / 60), t.gameLoop.stop()
                    },
                    onAttach() {
                        const t = this;
                        (0, y.S1)("drop"), (0, y.hg)(), t.played = [], this.gameLoop = (0, y.DX)({
                            fps: 60,
                            update(e) {
                                t.sprites.forEach((t => t.update(e))), t.sprites = t.sprites.filter((t => t.isAlive()))
                            },
                            render(e) {
                                t.sprites.forEach((t => t.render(e)))
                            }
                        });
                        for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
                        const e = (0, y.jy)(K);
                        e.x = .5 * (0, y.o_)().width, e.y = 64, e.width = (0, y.o_)().width - Z, t.sprites.push(e);
                        const s = (0, y.jy)(J);
                        this.model.get("dollInfo") && (s.dollColor = this.model.get("dollInfo").id), s.dropped = function() {
                            const e = (0, y.o_)().width - 64 - 64;
                            let i = Math.floor((s.x - 64) / e * 100);
                            i = Math.max(0, Math.min(100, i)), t.triggerMethod("client:message", {
                                action: "drop",
                                value: i
                            })
                        }, t.sprites.push(s), t.gameLoop.start(), (0, y.o_)().addEventListener("mouseleave", (t => {
                            s.onUp(t)
                        })), this.onResize()
                    },
                    onResize() {
                        const t = document.getElementById("drop"),
                            e = this.$el,
                            s = parseInt(o()(".playerTopBar").innerHeight(), 10),
                            i = t.width,
                            a = t.height,
                            n = Math.min(e.width(), i),
                            h = Math.max(o()(window).innerHeight() - s, 250),
                            r = Math.min(n / i, h / a),
                            d = i * r,
                            l = a * r;
                        t.style.width = `${d}px`, t.style.height = `${l}px`
                    }
                }),
                tt = function(t) {
                    const e = t || "",
                        s = e.replace(/\s/gi, "").split("");
                    for (let t = s.length; t > 0; t--) {
                        const e = Math.floor(Math.random() * (t + 1)),
                            i = s[t];
                        s[t] = s[e], s[e] = i
                    }
                    for (let t = 0; t < e.length; t++) " " === e.charAt(t) && s.splice(t, 0, " ");
                    return s.join("")
                },
                et = h.v.extend({
                    sessionModulePrefix: "TriviaDeath2",
                    getGameLayout(t) {
                        switch (t) {
                            case "MakeSingleChoice":
                                return this.setLayout(p);
                            case "Grid":
                                return this.setLayout(x);
                            case "Scratch":
                                return this.setLayout(L);
                            case "Dial":
                                return this.setLayout(j);
                            case "Drop":
                                return this.setLayout(Q);
                            default:
                                return -1
                        }
                    },
                    isPostGameLobby: t => "What do you want to do?" === t.prompt.html,
                    parseBlob(t) {
                        const e = t;
                        if (e.classes = e.classes || [], e.playerInfo = e.playerInfo || {}, e.playerInfo.classes = e.playerInfo.classes || [], e.isAudience && (e.playerInfo.username = "AUDIENCE", e.dollInfo = {
                                id: "Audience"
                            }), e.roundType && e.classes.push(e.roundType), e.dollInfo && e.dollInfo.id && (-1 === e.classes.indexOf(e.dollInfo.id) && e.classes.push(e.dollInfo.id), -1 === e.playerInfo.classes.indexOf(e.dollInfo.id) && e.playerInfo.classes.push(e.dollInfo.id)), "Gameplay" === e.state && (e.state = "Logo"), "MakeSingleChoice" === e.state) {
                            if (e.isAudience && (e.doneText = {
                                    html: null
                                }, e.prompt && "Guess who will die and win money!" === e.prompt.html && (e.choiceId = "whowilldie")), e.isPlayer && void 0 !== e.chosen && null == e.doneText ? e.state = "Logo" : n().isEmpty(e.doneText) || null === e.doneText.html || (e.chosen = {
                                    html: `<div class="chosenText">${e.doneText.html}</div>`
                                }, delete e.doneText), e.madness) {
                                if ("Choices" === e.madness) {
                                    e.choices = e.choices || [], e.choices = e.choices.map(((t, e) => {
                                        const s = t;
                                        return s.key = s.key || e, s
                                    }));
                                    for (let t = 1; t < 11; t++) e.choices.unshift({
                                        text: "I'm not Crazy!",
                                        index: -t,
                                        key: -t,
                                        action: "choose"
                                    })
                                }
                                if ("Scramble" === e.madness || "NowThatsWhatICallMadness" === e.madness) {
                                    let t = e.prompt.text || e.prompt.html;
                                    t = o()("<div />").html(t).text(), e.prompt.html = tt(t), e.choices = e.choices.map((t => {
                                        const e = t;
                                        return e.text = tt(t.text), e
                                    }))
                                }
                                if ("BTTF" === e.madness || "NowThatsWhatICallMadness" === e.madness) {
                                    let t = e.prompt.text || e.prompt.html;
                                    t = o()("<div />").html(t).text();
                                    let s = "";
                                    for (let e = 0; e < t.length; e++) s += `<span class="disappear-${Math.floor(5*Math.random())}">`, s += t[e], s += "</span>";
                                    e.prompt = {
                                        html: s
                                    }, e.choices = e.choices.map((t => {
                                        const e = t;
                                        let s;
                                        if (e.text) {
                                            s = e.text;
                                            let t = "";
                                            for (let e = 0; e < s.length; e++) t += `<span class="disappear-${Math.floor(5*Math.random())}">`, t += s[e], t += "</span>";
                                            e.html = t, e.text = void 0
                                        }
                                        return e
                                    }))
                                }
                                e.classes.push(e.madness)
                            }
                            if (this.isPostGameLobby(e) && e.artifact && e.choices.push({
                                    action: "artifact",
                                    html: "",
                                    className: "artifactButton"
                                }), "Math" === e.choiceType) {
                                const t = e.prompt.html,
                                    s = t.match(/[0-9]+/g);
                                if (s) {
                                    const i = t.match(/[+-/*]/);
                                    if (i) {
                                        const o = i[0];
                                        let a = "";
                                        "+" === o ? a = " plus " : "-" === o ? a = " minus " : "*" === o ? a = " multiplied by " : "/" === o && (a = " divided by ");
                                        const n = s[0] + a + s[1];
                                        let h = "";
                                        h += `<span aria-hidden="true">${t}</span>`, h += `<span class="textDescriptions">${n}</span>`, e.prompt.html = h, e.textDescriptions = e.textDescriptions || [], e.textDescriptions.push({
                                            id: e.choiceId,
                                            category: "Prompt",
                                            text: n
                                        })
                                    }
                                }
                            }
                            "Rules" === e.choiceType && (e.textDescriptions = e.textDescriptions || [], e.textDescriptions.push({
                                id: e.choiceId,
                                category: "Prompt",
                                text: e.prompt.html
                            }))
                        }
                        return e
                    }
                })
        },
        52197: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/dc0c658858496088a37f.png"
        },
        22445: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/6bedd3e66afb0640201c.png"
        },
        98201: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/159dc78bdfd8bb5879f6.png"
        },
        12370: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/85fb47a8ec444ec561e8.png"
        },
        29713: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/f81d1f6727d2d99dd623.png"
        },
        52760: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/bedac390f4ca2fad09b7.png"
        },
        5345: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/dc36f3ad040ca76111a0.png"
        },
        58790: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/8113dfa04b6a91d31510.png"
        },
        72239: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/efc9a15a0ac353386414.png"
        },
        90534: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/5de0952cbdbef8661bf9.png"
        },
        69089: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/214ad1a650224a284926.png"
        },
        46978: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/a9e09eecacc0de523656.png"
        },
        82547: (t, e, s) => {
            "use strict";
            t.exports = s.p + "games/triviadeath2/f3b723a4fd3b736854f3.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/9187.71d60884821ffda50299.js.map