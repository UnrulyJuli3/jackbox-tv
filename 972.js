(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [972], {
        16671: (e, t, n) => {
            var i, o, r;
            o = [n(19755)], void 0 === (r = "function" == typeof(i = function(e) {
                var t, n = navigator.userAgent,
                    i = /iphone/i.test(n),
                    o = /chrome/i.test(n),
                    r = /android/i.test(n);
                e.mask = {
                    definitions: {
                        9: "[0-9]",
                        a: "[A-Za-z]",
                        "*": "[A-Za-z0-9]"
                    },
                    autoclear: !0,
                    dataName: "rawMaskFn",
                    placeholder: "_"
                }, e.fn.extend({
                    caret: function(e, t) {
                        var n;
                        if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each((function() {
                            this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((n = this.createTextRange()).collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
                        }))) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
                            begin: e,
                            end: t
                        })
                    },
                    unmask: function() {
                        return this.trigger("unmask")
                    },
                    mask: function(n, a) {
                        var s, c, l, d, u, h, p;
                        if (!n && this.length > 0) {
                            var m = e(this[0]).data(e.mask.dataName);
                            return m ? m() : void 0
                        }
                        return a = e.extend({
                            autoclear: e.mask.autoclear,
                            placeholder: e.mask.placeholder,
                            completed: null
                        }, a), s = e.mask.definitions, c = [], l = h = n.length, d = null, e.each(n.split(""), (function(e, t) {
                            "?" == t ? (h--, l = e) : s[t] ? (c.push(new RegExp(s[t])), null === d && (d = c.length - 1), l > e && (u = c.length - 1)) : c.push(null)
                        })), this.trigger("unmask").each((function() {
                            function m() {
                                if (a.completed) {
                                    for (var e = d; u >= e; e++)
                                        if (c[e] && P[e] === f(e)) return;
                                    a.completed.call(C)
                                }
                            }

                            function f(e) {
                                return a.placeholder.charAt(e < a.placeholder.length ? e : 0)
                            }

                            function y(e) {
                                for (; ++e < h && !c[e];);
                                return e
                            }

                            function v(e, t) {
                                var n, i;
                                if (!(0 > e)) {
                                    for (n = e, i = y(t); h > n; n++)
                                        if (c[n]) {
                                            if (!(h > i && c[n].test(P[i]))) break;
                                            P[n] = P[i], P[i] = f(i), i = y(i)
                                        } w(), C.caret(Math.max(d, e))
                                }
                            }

                            function g() {
                                k(), C.val() != x && C.change()
                            }

                            function b(e, t) {
                                var n;
                                for (n = e; t > n && h > n; n++) c[n] && (P[n] = f(n))
                            }

                            function w() {
                                C.val(P.join(""))
                            }

                            function k(e) {
                                var t, n, i, o = C.val(),
                                    r = -1;
                                for (t = 0, i = 0; h > t; t++)
                                    if (c[t]) {
                                        for (P[t] = f(t); i++ < o.length;)
                                            if (n = o.charAt(i - 1), c[t].test(n)) {
                                                P[t] = n, r = t;
                                                break
                                            } if (i > o.length) {
                                            b(t + 1, h);
                                            break
                                        }
                                    } else P[t] === o.charAt(i) && i++, l > t && (r = t);
                                return e ? w() : l > r + 1 ? a.autoclear || P.join("") === j ? (C.val() && C.val(""), b(0, h)) : w() : (w(), C.val(C.val().substring(0, r + 1))), l ? t : d
                            }
                            var C = e(this),
                                P = e.map(n.split(""), (function(e, t) {
                                    return "?" != e ? s[e] ? f(t) : e : void 0
                                })),
                                j = P.join(""),
                                x = C.val();
                            C.data(e.mask.dataName, (function() {
                                return e.map(P, (function(e, t) {
                                    return c[t] && e != f(t) ? e : null
                                })).join("")
                            })), C.one("unmask", (function() {
                                C.off(".mask").removeData(e.mask.dataName)
                            })).on("focus.mask", (function() {
                                var e;
                                C.prop("readonly") || (clearTimeout(t), x = C.val(), e = k(), t = setTimeout((function() {
                                    C.get(0) === document.activeElement && (w(), e == n.replace("?", "").length ? C.caret(0, e) : C.caret(e))
                                }), 10))
                            })).on("blur.mask", g).on("keydown.mask", (function(e) {
                                if (!C.prop("readonly")) {
                                    var t, n, o, r = e.which || e.keyCode;
                                    p = C.val(), 8 === r || 46 === r || i && 127 === r ? (n = (t = C.caret()).begin, (o = t.end) - n == 0 && (n = 46 !== r ? function(e) {
                                        for (; --e >= 0 && !c[e];);
                                        return e
                                    }(n) : o = y(n - 1), o = 46 === r ? y(o) : o), b(n, o), v(n, o - 1), e.preventDefault()) : 13 === r ? g.call(this, e) : 27 === r && (C.val(x), C.caret(0, k()), e.preventDefault())
                                }
                            })).on("keypress.mask", (function(t) {
                                if (!C.prop("readonly")) {
                                    var n, i, o, a = t.which || t.keyCode,
                                        s = C.caret();
                                    t.ctrlKey || t.altKey || t.metaKey || 32 > a || !a || 13 === a || (s.end - s.begin != 0 && (b(s.begin, s.end), v(s.begin, s.end - 1)), n = y(s.begin - 1), h > n && (i = String.fromCharCode(a), c[n].test(i)) && (function(e) {
                                        var t, n, i, o;
                                        for (t = e, n = f(e); h > t; t++)
                                            if (c[t]) {
                                                if (i = y(t), o = P[t], P[t] = n, !(h > i && c[i].test(o))) break;
                                                n = o
                                            }
                                    }(n), P[n] = i, w(), o = y(n), r ? setTimeout((function() {
                                        e.proxy(e.fn.caret, C, o)()
                                    }), 0) : C.caret(o), s.begin <= u && m()), t.preventDefault())
                                }
                            })).on("input.mask paste.mask", (function() {
                                C.prop("readonly") || setTimeout((function() {
                                    var e = k(!0);
                                    C.caret(e), m()
                                }), 0)
                            })), o && r && C.off("input.mask").on("input.mask", (function() {
                                var e = C.val(),
                                    t = C.caret();
                                if (p && p.length && p.length > e.length) {
                                    for (k(!0); t.begin > 0 && !c[t.begin - 1];) t.begin--;
                                    if (0 === t.begin)
                                        for (; t.begin < d && !c[t.begin];) t.begin++;
                                    C.caret(t.begin, t.begin)
                                } else {
                                    for (k(!0); t.begin < h && !c[t.begin];) t.begin++;
                                    C.caret(t.begin, t.begin)
                                }
                                m()
                            })), k()
                        }))
                    }
                })
            }) ? i.apply(t, o) : i) || (e.exports = r)
        },
        40543: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => d
            });
            var i = n(86455),
                o = n.n(i);

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        s(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function c(e, t, n, i, o, r, a) {
                try {
                    var s = e[r](a),
                        c = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(i, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(i, o) {
                        var r = e.apply(t, n);

                        function a(e) {
                            c(r, i, o, a, s, "next", e)
                        }

                        function s(e) {
                            c(r, i, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            class d {
                static get DismissReason() {
                    return o().DismissReason
                }
                static show(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    switch (o().isVisible() && o().close(), e instanceof Error && (t.text = e.message, e = "error"), e) {
                        case "alert":
                            return this.showAlert(t);
                        case "custom":
                            return this.showCustom(t);
                        case "error":
                            return this.showError(t);
                        case "toast":
                            return this.showToast(t);
                        default:
                            console.warn("Unknown alert type", e)
                    }
                    return !1
                }
                static close() {
                    o().close()
                }
                static vibrate() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [100, 100];
                    window.navigator && window.navigator.vibrate && window.navigator.vibrate(e)
                }
                static showAlert(e) {
                    return l((function*() {
                        const t = e.customClass || {};
                        return e.customClass = a(a({}, t), {}, {
                            popup: "jbgModal"
                        }), e.titleText = e.titleText || "Error", o().fire(e)
                    }))()
                }
                static showError(e) {
                    return l((function*() {
                        let t;
                        try {
                            t = yield Promise.resolve().then(n.t.bind(n, 83910, 17))
                        } catch (e) {
                            console.error("failed to load image")
                        }
                        const i = e.customClass || {};
                        return e.customClass = a(a({}, i), {}, {
                            popup: "jbgModal"
                        }), e.titleText = e.titleText || "Error", t && (e.imageUrl = t.default), o().fire(e)
                    }))()
                }
                static showCustom(e) {
                    return l((function*() {
                        return o().fire(e)
                    }))()
                }
                static showToast(e) {
                    return l((function*() {
                        return e.toast = !0, e.showConfirmButton = !1, e.timer = e.timer || 2500, e.position = e.position || "bottom", o().fire(e)
                    }))()
                }
            }
        },
        10972: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                app: () => I,
                load: () => D
            }), n(28594), n(35666), n(57147);
            var i = n(13469),
                o = n.n(i),
                r = n(72316),
                a = (n(70989), n(19755)),
                s = n.n(a),
                c = n(63574),
                l = n.n(c),
                d = n(70236),
                u = n(35029),
                h = n(89768),
                p = n(47865),
                m = n(2720),
                f = n(44285),
                y = n(55507),
                v = n(94795),
                g = n.n(v);

            function b(e, t, n, i, o, r, a) {
                try {
                    var s = e[r](a),
                        c = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(i, o)
            }

            function w(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(i, o) {
                        var r = e.apply(t, n);

                        function a(e) {
                            b(r, i, o, a, s, "next", e)
                        }

                        function s(e) {
                            b(r, i, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function k(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            class C extends(g()) {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    super(), k(this, "api", void 0), k(this, "id", void 0), k(this, "userId", void 0), k(this, "uuid", void 0), k(this, "server", m.v.EcastHost), k(this, "roomServer", void 0), k(this, "audienceHost", void 0), k(this, "socketServer", void 0), k(this, "appId", void 0), k(this, "appTag", void 0), k(this, "code", null), k(this, "roomInfo", void 0), k(this, "password", void 0), k(this, "secret", void 0), k(this, "twitch", void 0), k(this, "reconnectCount", 0), k(this, "reconnectMax", 6), k(this, "joinAs", "player"), k(this, "roles", {}), k(this, "forceJoinAs", void 0), k(this, "isConnected", !1), k(this, "player", null), k(this, "sequence", 0), k(this, "onPlayerWelcome", (e => {
                        this.id = e.id, this.roles = e.profile ? e.profile.roles : {}, "audience" === this.desiredRole && (this.roles.audience = {}), e.here && (this.host = Object.values(e.here).find((e => {
                            let {
                                roles: t
                            } = e;
                            return t.host
                        }))), this.emit("client:didJoinRoom", {
                            appId: this.appId,
                            appTag: this.appTag,
                            id: e.id,
                            reconnect: `${e.id}:${this.desiredRole}:${e.secret}`
                        })
                    })), k(this, "parseEntities", (() => {
                        if (!this.player) return {};
                        const e = this.player.entities,
                            t = {};
                        return Object.keys(e).forEach((n => {
                            const i = e[n];
                            "room" === n || "bc:room" === n || "roomBlob" === n ? (i instanceof f.TextEntity && (t.room = i.toBlob()), i instanceof f.ObjectEntity && (t.room = i.val)) : "player" === n || n === `player:${this.id}` || n === `bc:customer:${this.userId}` ? (i instanceof f.TextEntity && (t.player = i.toBlob()), i instanceof f.ObjectEntity && (t.player = i.val)) : "audiencePlayer" === n && (i instanceof f.TextEntity && (t.audiencePlayer = i.toBlob()), i instanceof f.ObjectEntity && (t.audiencePlayer = i.val))
                        })), t
                    })), e.gameLoaderOptions ? this.initializeFromGameLoader(e.gameLoaderOptions) : (this.userId = e.userId, this.uuid = e.userId, this.server = e.server || m.v.EcastHost, this.appId = e.appId, this.socketServer = e.socketServer || null, this.forceJoinAs = e.forceJoinAs, this.api = new f.APIClient({
                        host: this.server,
                        scheme: "https"
                    }))
                }
                static get isSupported() {
                    return "WebSocket" in window || "MozWebSocket" in window
                }
                isRole(e) {
                    return Object.keys(this.roles).includes(e)
                }
                get desiredRole() {
                    return void 0 !== this.forceJoinAs ? this.forceJoinAs : this.joinAs
                }
                get entities() {
                    return this.player ? this.player.entities : {
                        none: !0
                    }
                }
                getRoomStatusForCode(e) {
                    var t = this;
                    return w((function*() {
                        return yield t.api.getRoom({
                            code: e
                        })
                    }))()
                }
                connect(e, t) {
                    var n = this;
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return w((function*() {
                        try {
                            const t = yield n.api.getRoom({
                                code: e
                            });
                            n.roomInfo = t, n.appId = t.appId, n.appTag = t.appTag, n.roomServer = t.host, n.audienceHost = t.audienceHost
                        } catch (e) {
                            return m.v.debug && console.error("[Ecast Client] failed to get room status", e.message), void n.emit("client:joinRoomDidFail", e)
                        }
                        if (n.disconnect(), n.code = e, n.name = t, void 0 !== i.password && (n.password = i.password), i.reconnect) {
                            const [e, t, o] = i.reconnect.split(":");
                            "audience" !== t && (n.id = e, n.joinAs = t, n.secret = o)
                        }
                        i.twitch && (n.twitch = i.twitch), i.forceJoinAs && (n.forceJoinAs = i.forceJoinAs), n.forceJoinAs && (n.joinAs = n.forceJoinAs);
                        const o = n.twitch && n.twitch.user ? n.twitch.user.token : void 0,
                            r = "audience" === n.joinAs && n.audienceHost ? n.audienceHost : n.roomServer;
                        try {
                            const e = new f.WSClient({
                                host: r,
                                code: n.code,
                                name: n.name,
                                role: n.joinAs,
                                userId: n.userId,
                                password: n.password,
                                twitchToken: o,
                                secret: n.secret,
                                id: n.id,
                                debug: m.v.debug
                            });
                            e.on("json", n.onPlayerJsonOrObject.bind(n)), e.on("notification", n.onPlayerNotification.bind(n)), e.on("object", n.onPlayerJsonOrObject.bind(n)), e.on("room/exit", n.onPlayerSocketClose.bind(n)), e.on("socketClose", n.onPlayerSocketClose.bind(n)), e.on("connection", n.onPlayerConnection.bind(n)), e.on("text", n.onPlayerText.bind(n)), e.on("error", n.onPlayerError.bind(n)), n.player = e;
                            const t = yield e.connect();
                            n.onPlayerWelcome(t)
                        } catch (r) {
                            void 0 !== n.forceJoinAs || void 0 !== n.password || n.secret && n.id ? n.emit("client:joinRoomDidFail", r) : n.roomInfo.locked || !n.roomInfo.twitchLocked || o ? r instanceof y.EcastFilterError ? n.emit("client:joinRoomDidFail", r) : n.roomInfo.audienceEnabled && "player" === n.joinAs ? (n.joinAs = "audience", yield n.connect(e, t, i)) : (n.joinAs = "player", n.emit("client:joinRoomDidFail", r)) : n.emit("client:joinRoomDidFail", new y.EcastTwitchLoginRequired)
                        }
                    }))()
                }
                disconnect() {
                    this.player && (this.player.disconnect(), this.player = null)
                }
                onPlayerNotification(e) {
                    (0, h.c)("[Ecast Client] onPlayerNotification opcode", e.opcode), (0, h.c)("[Ecast Client] onPlayerNotification result", e.result)
                }
                onPlayerText(e) {
                    const t = e.key,
                        n = e.text;
                    let i = e.text;
                    try {
                        i = JSON.parse(i)
                    } catch (t) {
                        return void(0, h.c)(`[Ecast Client] Unhandled text notification: ${e.key} ${n}`)
                    }
                    const o = i;
                    "room" === t ? this.emit("client:entityDidChange", t, o) : t === `player:${this.id}` ? this.emit("client:entityDidChange", "player", o) : "bc:room" === t ? this.emit("client:entityDidChange", "room", o) : "audiencePlayer" === t ? this.emit("client:entityDidChange", "audiencePlayer", o) : t === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", o) : (0, h.c)(`[Ecast Client] Unhandled json notification: ${t}`)
                }
                onPlayerError(e) {
                    if (m.v.debug && console.warn("Caught an error", e), !(e instanceof y.EcastRateLimitExceeded)) throw e
                }
                onPlayerJsonOrObject(e) {
                    const t = e.key,
                        n = e.val;
                    "room" === t ? this.emit("client:entityDidChange", t, n) : "player" === t || t === `player:${this.id}` ? this.emit("client:entityDidChange", "player", n) : "textDescriptions" === t ? this.emit("client:textDescriptions", t, n) : "bc:room" === t ? this.emit("client:entityDidChange", "room", n) : "audiencePlayer" === t ? this.emit("client:entityDidChange", "audiencePlayer", n) : t === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", n) : console.warn(`[Ecast Client] Unhandled json notification: ${t}`)
                }
                onPlayerSocketClose(e) {
                    e instanceof y.EcastServerError || 1005 === e.code || 1e3 === e.code ? this.emit("client:roomWasDestroyed") : this.emit("client:disconnected"), this.disconnect(), this.code = null
                }
                onPlayerConnection(e) {
                    this.emit("client:connection", e)
                }
                isPlayerConnectionReady() {
                    return this.player && this.player.conn && this.player.conn.readyState === WebSocket.OPEN
                }
                send(e, t) {
                    var n = this;
                    return w((function*() {
                        if (n.isPlayerConnectionReady()) try {
                            "SendMessageToRoomOwner" === e ? yield n.player.mail(n.host.id, t): yield n.player.send(e, t)
                        } catch (e) {
                            console.error(e)
                        }
                    }))()
                }
                sessionSend(e, t, n) {
                    this.isPlayerConnectionReady() && ("vote" === e && this.incrementCountGroupCounter(t, `${n.vote}`), "comment" === e && this.pushTextRing(t, `${n.comment}`))
                }
                updateText(e, t) {
                    var n = this;
                    return w((function*() {
                        if (n.isPlayerConnectionReady()) try {
                            yield n.player.updateText(e, t)
                        } catch (e) {
                            throw console.warn("Text update rejected.", e.message), e
                        }
                    }))()
                }
                updateObject(e, t) {
                    var n = this;
                    return w((function*() {
                        if (n.isPlayerConnectionReady()) try {
                            yield n.player.updateObject(e, t)
                        } catch (e) {
                            throw console.warn("Object update rejected.", e.message), e
                        }
                    }))()
                }
                incrementCountGroupCounter(e, t) {
                    var n = this;
                    return w((function*() {
                        if (n.isPlayerConnectionReady()) try {
                            yield n.player.incrementCountGroupCounter(e, `${t}`)
                        } catch (e) {
                            console.error(e)
                        }
                    }))()
                }
                incrementGCounter(e, t) {
                    var n = this;
                    return w((function*() {
                        if (n.isPlayerConnectionReady()) try {
                            yield n.player.incrementGCounter(e, t)
                        } catch (e) {
                            console.error(e)
                        }
                    }))()
                }
                pushTextRing(e, t) {
                    var n = this;
                    return w((function*() {
                        if (n.isPlayerConnectionReady()) try {
                            yield n.player.pushTextRing(e, `${t}`)
                        } catch (e) {
                            console.error(e)
                        }
                    }))()
                }
                initializeFromGameLoader(e) {
                    this.name = e.client.name, this.player = e.client, this.userId = e.client.userId, this.uuid = e.client.userId, this.joinAs = e.client.role, this.roomInfo = e.room, e.client.on("json", this.onPlayerJsonOrObject.bind(this)), e.client.on("notification", this.onPlayerNotification.bind(this)), e.client.on("object", this.onPlayerJsonOrObject.bind(this)), e.client.on("room/exit", this.onPlayerSocketClose.bind(this)), e.client.on("socketClose", this.onPlayerSocketClose.bind(this)), e.client.on("connection", this.onPlayerConnection.bind(this)), e.client.on("text", this.onPlayerText.bind(this)), e.client.on("error", this.onPlayerError.bind(this)), this.onPlayerWelcome(e.welcome)
                }
            }
            var P = n(39666),
                j = n(13819),
                x = n(94166),
                O = n.n(x),
                T = n(40543);
            const E = l().View.extend({
                template: o().template('\n    <button class="previous"><</button>\n    <button class="next">></button>\n    <span></span>\n'),
                model: new r.Model,
                bindings: {
                    span: "marker"
                },
                events: {
                    "click .previous": "onTestingPreviousClick",
                    "click .next": "onTestingNextClick"
                },
                onAttach() {
                    this.stickit(), this.updateName()
                },
                onTestingPreviousClick() {
                    this.options.replayer.toPreviousMarker(), this.updateName()
                },
                onTestingNextClick() {
                    this.options.replayer.toNextMarker(), this.updateName()
                },
                updateName() {
                    const e = this.options.replayer;
                    this.model.set("marker", e.currentMarkerItem[1].marker)
                }
            });

            function R(e, t, n, i, o, r, a) {
                try {
                    var s = e[r](a),
                        c = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(i, o)
            }
            const A = l().View.extend({
                className: "app-root",
                template: o().template('<div id="content-region" class="content"></div> <div id="debug-region" class="debug"></div> <div id="banner" class="post-banner"></div>'),
                regions: {
                    content: "#content-region",
                    dialog: "#dialog-region",
                    debug: "#debug-region"
                },
                showView(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = new e(t);
                    this.showChildView("content", n), t.replayer ? this.showChildView("debug", new E({
                        replayer: t.replayer
                    })) : (this.konami = new(O())(this.onKonami), P.YA("app", "marionette"), P.YA("appTag", t.appTag))
                },
                onKonami() {
                    return (e = function*() {
                        const e = yield T.b.show("alert", {
                            input: "text",
                            titleText: "What happened?",
                            text: "Send debug data",
                            showCancelButton: !0,
                            allowOutsideClick: !1
                        });
                        e.dismiss || I.debug.send(e.value)
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, o) {
                            var r = e.apply(t, n);

                            function a(e) {
                                R(r, i, o, a, s, "next", e)
                            }

                            function s(e) {
                                R(r, i, o, a, s, "throw", e)
                            }
                            a(void 0)
                        }))
                    })();
                    var e
                }
            });
            n(16671);
            var S = function(e, t, n, i) {
                return new(n || (n = Promise))((function(o, r) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            };
            window.$ = s(), window.jQuery = s();
            const I = {
                application: null,
                client: null,
                debug: u.W.shared,
                analytics: d.c.shared,
                storage: p.K.shared
            };

            function D(e, t) {
                return S(this, void 0, void 0, (function*() {
                    return (0, h.c)("[Marionette] load", e), new Promise(((n, i) => {
                        I.client = new C({
                            gameLoaderOptions: e
                        }), I.application = new(l().Application)({
                            region: "#app",
                            onStart() {
                                return S(this, void 0, void 0, (function*() {
                                    if (!t.importFn) return i(new Error("Missing game import function"));
                                    try {
                                        const i = yield t.importFn();
                                        if (n(), !i.MainView) return;
                                        const o = new A;
                                        this.showView(o), o.showView(i.MainView, {
                                            appId: e.room.appId,
                                            appTag: e.room.appTag,
                                            replayer: e.debugReplayer
                                        }), P.n_({
                                            type: "navigation",
                                            category: "navigation.loaded",
                                            message: `Loaded marionette app ${e.room.appTag}`,
                                            level: j.z.Info,
                                            timestamp: Date.now() / 1e3
                                        })
                                    } catch (e) {
                                        console.error("[Marionette] Unable to import game view", e)
                                    }
                                }))
                            }
                        }), I.application.start()
                    }))
                }))
            }
        },
        83910: (e, t, n) => {
            "use strict";
            e.exports = n.p + "assets/875d11cd496387bfa733.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/972.95dac8993bf14ef71634.js.map