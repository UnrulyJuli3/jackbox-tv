(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/quiplash3-tjsp"], {
        48598: (e, t, a) => {
            "use strict";
            a.d(t, {
                I: () => v
            });
            const s = [169, 174, 8252, 8265, 8482, 8505, 8596, 8597, 8598, 8599, 8600, 8601, 8617, 8618, 9e3, 8986, 8987, 9167, 9193, 9194, 9195, 9196, 9197, 9198, 9199, 9200, 9201, 9202, 9203, 9209, 9210, 9410, 9642, 9643, 9654, 9664, 9723, 9724, 9725, 9726, 9728, 9729, 9730, 9731, 9732, 9742, 9745, 9748, 9749, 9752, 9757, 9760, 9762, 9763, 9766, 9770, 9774, 9775, 9784, 9785, 9786, 9792, 9794, 9800, 9801, 9802, 9803, 9804, 9805, 9806, 9807, 9808, 9809, 9810, 9811, 9824, 9827, 9829, 9830, 9832, 9851, 9854, 9855, 9874, 9875, 9876, 9877, 9878, 9879, 9881, 9883, 9884, 9888, 9823, 9889, 9895, 9898, 9899, 9904, 9905, 9917, 9918, 9924, 9925, 9928, 9934, 9935, 9937, 9939, 9940, 9961, 9962, 9968, 9969, 9970, 9971, 9972, 9973, 9974, 9975, 9976, 9977, 9978, 9981, 9986, 9989, 9992, 9993, 9994, 9995, 9996, 9997, 9999, 10002, 10004, 10006, 10013, 10017, 10024, 10035, 10036, 10052, 10055, 10060, 10062, 10067, 10068, 10069, 10071, 10083, 10084, 10085, 10133, 10134, 10135, 10145, 10160, 10175, 10548, 10549, 11013, 11014, 11015, 11035, 11036, 11088, 11093, 12336, 12349, 12951, 12953, 58634],
                r = [128104, 128105, 129489],
                i = [127995, 127996, 127997, 127998, 127999, 129456, 129457, 129458, 129459],
                n = 65039,
                o = 8205,
                l = (e, t) => {
                    const a = parseInt(e.charCodeAt(0).toString(16), 16),
                        s = parseInt(t.charCodeAt(0).toString(16), 16);
                    return parseInt((1024 * (a - 55296) + s - 56320 + 65536).toString(16), 16)
                },
                c = e => {
                    const t = parseInt(e.charCodeAt(0).toString(16), 16);
                    return s.includes(t)
                },
                u = (e, t) => !!e && parseInt(e.charCodeAt(0).toString(16), 16) === t,
                p = e => /[\uD800-\uDB7F]/.test(e),
                d = e => /[\u0023\u002A\u0030-\u0039]/.test(e),
                A = e => {
                    const t = parseInt(e.toString(16), 16);
                    return t >= 127462 && t <= 127487
                },
                h = (e, t) => {
                    let a = "",
                        s = !0;
                    for (; s && t < e.length;) {
                        const r = e[t];
                        if (p(r)) {
                            const n = l(r, e[t + 1]);
                            i.includes(n) ? (a = a + r + e[t + 1], t += 2) : s = !1
                        } else u(r, o) ? (a = a + r + e[t + 1] + e[t + 2], t += 3) : s = !1
                    }
                    return {
                        modifyingChars: a,
                        newPosition: t
                    }
                },
                v = (e, t) => {
                    if (!/[^\u00A1\u0020-\u0022\u0024-\u0029\u002B-\u002F\u003A-\u007E\u00BF-\u00FF’]/gi.test(e)) return t && e && e.length > t && (e = e.substring(0, t)), {
                        result: e,
                        charCount: e.length
                    };
                    const a = e.split("");
                    let s = 0,
                        v = "";
                    for (let e = 0; e < a.length && (!t || s < t); e += 1) {
                        const t = a[e];
                        if (/[\u00A1\u0020-\u0022\u0024-\u0029\u002B-\u002F\u003A-\u007E\u00BF-\u00FF’]/gi.test(t)) v += t, s += 1;
                        else {
                            if (c(t)) {
                                if (v += t, u(t, 9977)) {
                                    e += 1;
                                    const {
                                        modifyingChars: t,
                                        newPosition: s
                                    } = h(a, e);
                                    v += t, e = s - 1
                                }
                                s += 1;
                                continue
                            }
                            if (u(t, 8220) || u(t, 8221)) {
                                e += 1, v = `${v}"`, s += 1;
                                continue
                            }
                            if (p(t)) {
                                const c = a[e + 1];
                                v = v + t + c, e += 1;
                                const p = l(t, c);
                                if (r.includes(p)) {
                                    const {
                                        modifyingChars: t,
                                        newPosition: r
                                    } = h(a, e + 1);
                                    v += t, s += 1, e = r - 1;
                                    continue
                                }
                                if (A(p)) {
                                    const t = l(a[e + 1], a[e + 2]);
                                    A(t) && (v = v + a[e + 1] + a[e + 2], e += 1), s += 1;
                                    continue
                                }
                                if (127988 === p) {
                                    const t = a[e + 1];
                                    u(t, o) && (v = v + t + a[e + 2] + a[e + 3], e += 3), s += 1;
                                    continue
                                }
                                if (127987 === p) {
                                    const t = a[e + 1];
                                    u(t, n) && (e += 1, u(a[e + 1], o) && (v = v + t + a[e + 1] + a[e + 2] + a[e + 3], e += 3)), s += 1;
                                    continue
                                }
                                i.includes(p) || (s += 1);
                                continue
                            }
                            if (d(t)) {
                                const r = a[e + 1];
                                r && u(r, n) ? (v = v + t + a[e + 1] + a[e + 2], e += 2) : v += t, s += 1;
                                continue
                            }(u(t, n) || u(t, o) || u(t, 8419)) && (v += t)
                        }
                    }
                    return {
                        result: v,
                        charCount: s
                    }
                }
        },
        79278: (e, t, a) => {
            "use strict";

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function r(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function i(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function n(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(a), !0).forEach((function(t) {
                        r(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : i(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            a.d(t, {
                ZP: () => G
            });
            var o = "_",
                l = "function",
                c = [];

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
                if (!p(e)) throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
                if (-1 !== e.indexOf(t)) throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n" + "The placeholder character that was received is: ".concat(JSON.stringify(t), "\n\n") + "The mask that was received is: ".concat(JSON.stringify(e)));
                return e.map((function(e) {
                    return e instanceof RegExp ? t : e
                })).join("")
            }

            function p(e) {
                return Array.isArray && Array.isArray(e) || e instanceof Array
            }

            function d(e) {
                for (var t, a = []; - 1 !== (t = e.indexOf("[]"));) a.push(t), e.splice(t, 1);
                return {
                    maskWithoutCaretTraps: e,
                    indexes: a
                }
            }
            var A = [],
                h = "";

            function v() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!p(t)) {
                    if (s(t) !== l) throw new Error("Text-mask:conformToMask; The mask property must be an array.");
                    t = d(t = t(e, a)).maskWithoutCaretTraps
                }
                var r = a.guide,
                    i = void 0 === r || r,
                    n = a.previousConformedValue,
                    c = void 0 === n ? h : n,
                    v = a.placeholderChar,
                    f = void 0 === v ? o : v,
                    T = a.placeholder,
                    m = void 0 === T ? u(t, f) : T,
                    _ = a.currentCaretPosition,
                    y = a.keepCharPositions,
                    E = !1 === i && void 0 !== c,
                    O = e.length,
                    b = c.length,
                    C = m.length,
                    R = t.length,
                    g = O - b,
                    I = g > 0,
                    L = _ + (I ? -g : 0),
                    N = L + Math.abs(g);
                if (!0 === y && !I) {
                    for (var P = h, S = L; S < N; S++) m[S] === f && (P += f);
                    e = e.slice(0, L) + P + e.slice(L, O)
                }
                for (var x = e.split(h).map((function(e, t) {
                        return {
                            char: e,
                            isNew: t >= L && t < N
                        }
                    })), G = O - 1; G >= 0; G--) {
                    var V = x[G].char;
                    if (V !== f) {
                        var U = G >= L && b === R;
                        V === m[U ? G - g : G] && x.splice(G, 1)
                    }
                }
                var w = h,
                    $ = !1;
                e: for (var k = 0; k < C; k++) {
                    var D = m[k];
                    if (D === f) {
                        if (x.length > 0)
                            for (; x.length > 0;) {
                                var j = x.shift(),
                                    F = j.char,
                                    M = j.isNew;
                                if (F === f && !0 !== E) {
                                    w += f;
                                    continue e
                                }
                                if (t[k].test(F)) {
                                    if (!0 === y && !1 !== M && c !== h && !1 !== i && I) {
                                        for (var B = x.length, H = null, K = 0; K < B; K++) {
                                            var W = x[K];
                                            if (W.char !== f && !1 === W.isNew) break;
                                            if (W.char === f) {
                                                H = K;
                                                break
                                            }
                                        }
                                        null !== H ? (w += F, x.splice(H, 1)) : k--
                                    } else w += F;
                                    continue e
                                }
                                $ = !0
                            }!1 === E && (w += m.substr(k, C));
                        break
                    }
                    w += D
                }
                if (E && !1 === I) {
                    for (var q = null, Q = 0; Q < w.length; Q++) m[Q] === f && (q = Q);
                    w = null !== q ? w.substr(0, q + 1) : h
                }
                return {
                    conformedValue: w,
                    meta: {
                        someCharsRejected: $
                    }
                }
            }
            var f = {
                    __nextCharOptional__: !0
                },
                T = {
                    "#": /\d/,
                    A: /[a-z]/i,
                    N: /[a-z0-9]/i,
                    "?": f,
                    X: /./
                },
                m = function(e) {
                    return a = (t = e.toString().replace(/.(\/)[gmiyus]{0,6}$/, (function(e) {
                        return e.replace("/", "?/")
                    }))).lastIndexOf("/"), new RegExp(t.slice(1, a), t.slice(a + 1));
                    var t, a
                },
                _ = function(e) {
                    return e instanceof RegExp ? e : function(e) {
                        return new RegExp("/[".concat(function(e) {
                            return "[\\^$.|?*+()".indexOf(e) > -1 ? "\\".concat(e) : e
                        }(e), "]/"))
                    }(e)
                };

            function y(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T;
                return e.map((function(e, a, s) {
                    var r = t[e] || e,
                        i = s[a - 1],
                        n = t[i] || i;
                    return r === f ? null : n === f ? m(_(r)) : r
                })).filter(Boolean)
            }

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T;
                return y(e.split(""), t)
            }
            var O = function(e) {
                    return e instanceof HTMLInputElement ? e : e.querySelector("input") || e
                },
                b = function(e) {
                    return "function" == typeof e
                },
                C = function(e) {
                    return "string" == typeof e
                },
                R = function() {
                    var e = new Map,
                        t = {
                            previousValue: "",
                            mask: []
                        };

                    function a(a) {
                        return e.get(a) || n({}, t)
                    }
                    return {
                        partiallyUpdate: function(t, s) {
                            e.set(t, n(n({}, a(t)), s))
                        },
                        remove: function(t) {
                            e.delete(t)
                        },
                        get: a
                    }
                }();

            function g(e) {
                ! function(e, t) {
                    var a = document.createEvent("HTMLEvents");
                    a.initEvent("input", !0, !0), e.dispatchEvent(a)
                }(e)
            }

            function I(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = e.value,
                    s = R.get(e),
                    r = s.previousValue,
                    i = s.mask,
                    n = a !== r,
                    o = a.length > r.length,
                    l = a && n && o;
                if ((t || l) && i) {
                    var c = v(a, i, {
                            guide: !1
                        }),
                        u = c.conformedValue;
                    e.value = u, g(e)
                }
                R.partiallyUpdate(e, {
                    previousValue: a
                })
            }

            function L(e, t, a) {
                var s;
                s = Array.isArray(t) ? function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T;
                    return y(e.map((function(e) {
                        return e instanceof RegExp ? e : "string" == typeof e ? e.split("") : null
                    })).filter(Boolean).reduce((function(e, t) {
                        return e.concat(t)
                    }), []), t)
                }(t, a) : b(t) ? t : C(t) && t.length > 0 ? E(t, a) : t, R.partiallyUpdate(e, {
                    mask: s
                })
            }

            function N(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T;
                return null === e || Array.isArray(e) || "object" !== s(e) ? t : Object.keys(e).reduce((function(t, a) {
                    var s = e[a];
                    return null === s || s instanceof RegExp ? n(n({}, t), {}, r({}, a, s)) : t
                }), t)
            }

            function P(e) {
                return (Array.isArray(e) ? e : [e]).filter((function(e) {
                    return C(e) || e instanceof RegExp
                })).toString()
            }

            function S() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = N(e && e.placeholders);
                return {
                    bind: function(e, a) {
                        var s = a.value;
                        L(e = O(e), s, t), I(e)
                    },
                    componentUpdated: function(e, a) {
                        var s = a.value,
                            r = a.oldValue;
                        e = O(e);
                        var i = b(s) || P(r) !== P(s);
                        i && L(e, s, t), I(e, i)
                    },
                    unbind: function(e) {
                        e = O(e), R.remove(e)
                    }
                }
            }
            S();
            var x = function(e, t) {
                var a = E(t);
                return C(e) || Number.isFinite(e) ? v("".concat(e), a, {
                    guide: !1
                }).conformedValue : e
            };
            const G = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.directive("mask", S(t)), e.filter("VMask", x)
            }
        },
        64785: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => se
            });
            var s = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "quiplash3",
                    class: e.theme
                }, [e.info ? a("NameHeader", {
                    staticClass: "name-header",
                    attrs: {
                        avatar: e.info.avatar && e.avatarImages[e.avatarName],
                        name: e.info.name
                    }
                }) : e.audience ? a("NameHeader", {
                    staticClass: "name-header",
                    attrs: {
                        name: e.$t("AUDIENCE.NAME")
                    }
                }) : e._e(), e._v(" "), a("div", {
                    staticClass: "stage",
                    class: e.background
                }, [a("div", {
                    staticClass: "constrain"
                }, [e.player ? ["lobby" === e.player.kind ? a("Lobby", {
                    attrs: {
                        "avatar-images": e.avatarImages,
                        info: e.info,
                        player: e.player
                    }
                }) : "postGame" === e.player.kind ? a("PostGame", {
                    attrs: {
                        artifact: e.artifact,
                        player: e.player
                    }
                }) : "ugc" === e.player.kind ? a("Ugc", {
                    attrs: {
                        player: e.player
                    }
                }) : "voting" === e.player.kind ? a("Voting", {
                    attrs: {
                        player: e.player
                    }
                }) : "waiting" === e.player.kind ? a("Waiting", {
                    attrs: {
                        artifact: e.artifact,
                        player: e.player
                    }
                }) : "writing" === e.player.kind ? a("Writing", {
                    attrs: {
                        player: e.player
                    }
                }) : e._e()] : e.audience ? ["voting" === e.audience.kind ? a("Voting", {
                    attrs: {
                        player: e.audience
                    }
                }) : "waiting" === e.audience.kind ? a("Waiting", {
                    attrs: {
                        artifact: e.artifact,
                        player: e.audience
                    }
                }) : e._e()] : e._e()], 2)])], 1)
            };
            s._withStripped = !0;
            var r = a(2934),
                i = a.n(r),
                n = a(65853),
                o = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "lobby"
                    }, [a("span", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "LOBBY.AVATAR_SELECT",
                            expression: "'LOBBY.AVATAR_SELECT'"
                        }],
                        staticClass: "instructions"
                    }), e._v(" "), a("div", {
                        staticClass: "avatars"
                    }, [e._l(e.player.avatars, (function(t, s) {
                        return [a("button", {
                            key: "av" + s,
                            staticClass: "avatar",
                            class: {
                                selected: t.name === e.selectedAvatar.name
                            },
                            attrs: {
                                disabled: !t.available
                            },
                            on: {
                                click: function(a) {
                                    return e.onSelectAvatar(t)
                                }
                            }
                        }, [e.avatarImages[t.name] ? a("img", {
                            attrs: {
                                src: t.name === e.selectedAvatar.name ? e.avatarImages[t.name].selected : e.avatarImages[t.name].src,
                                alt: e.avatarImages[t.name].alt
                            }
                        }) : e._e()])]
                    }))], 2), e._v(" "), a("LobbyActions", {
                        attrs: {
                            player: e.player
                        }
                    }), e._v(" "), e.player.canDoEpisodes ? a("div", {
                        staticClass: "episodes"
                    }, [e.player.activeContentId ? [a("div", {
                        staticClass: "episode-title",
                        domProps: {
                            textContent: e._s(e.player.episodeTitle)
                        }
                    }), e._v(" "), e.player.activeContentId ? a("button", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "UGC.EPISODE_UNLOAD",
                            expression: "'UGC.EPISODE_UNLOAD'"
                        }],
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onEpisodeUnload.apply(null, arguments)
                            }
                        }
                    }) : e._e(), e._v(" "), e.player.canReport ? a("button", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "UGC.EPISODE_REPORT",
                            expression: "'UGC.EPISODE_REPORT'"
                        }],
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onEpisodeReport.apply(null, arguments)
                            }
                        }
                    }) : e._e(), e._v(" "), e.player.canViewAuthor ? a("button", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "UGC.EPISODE_VIEW_AUTHOR",
                            expression: "'UGC.EPISODE_VIEW_AUTHOR'"
                        }],
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onEpisodeViewAuthor.apply(null, arguments)
                            }
                        }
                    }) : e._e()] : [a("button", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "UGC.EPISODES_MENU",
                            expression: "'UGC.EPISODES_MENU'"
                        }],
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onEpisodeViewMenu.apply(null, arguments)
                            }
                        }
                    })]], 2) : e._e()], 1)
                };
            o._withStripped = !0;
            var l = a(13494),
                c = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "episodes"
                    }, [a("button", {
                        staticClass: "back",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onClose.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n        " + e._s(e.$t("ACTION.BACK")) + "\n    ")]), e._v(" "), a("div", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "UGC.EPISODES_LOAD",
                            expression: "'UGC.EPISODES_LOAD'"
                        }]
                    }), e._v(" "), a("fieldset", {
                        staticClass: "loader"
                    }, [a("button", {
                        staticClass: "submit",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onLoadId.apply(null, arguments)
                            }
                        }
                    }, [e._v("\n            " + e._s(e.$t("ACTION.SUBMIT")) + "\n        ")]), e._v(" "), a("div", {
                        staticClass: "inline-input"
                    }, [a("Input", {
                        directives: [{
                            name: "mask",
                            rawName: "v-mask",
                            value: "AAA-AAAA",
                            expression: "'AAA-AAAA'"
                        }],
                        attrs: {
                            placeholder: "???-????"
                        },
                        model: {
                            value: e.id,
                            callback: function(t) {
                                e.id = t
                            },
                            expression: "id"
                        }
                    })], 1)]), e._v(" "), a("div", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "UGC.EPISODES_WARNING",
                            expression: "'UGC.EPISODES_WARNING'"
                        }],
                        staticClass: "warning"
                    }), e._v(" "), e.episodes.length ? [a("div", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "UGC.EPISODES_SELECT",
                            expression: "'UGC.EPISODES_SELECT'"
                        }]
                    }), e._v(" "), e._l(e.episodes, (function(t, s) {
                        return a("button", {
                            key: t.remoteContentId || t.localContentId,
                            staticClass: "episode",
                            on: {
                                click: function(t) {
                                    return t.preventDefault(), e.onLoadSelection(s)
                                }
                            }
                        }, [e._v("\n            " + e._s(t.metadata.title) + "\n            "), t.remoteContentId ? a("span", {
                            staticClass: "episode-id"
                        }, [e._v(e._s(t.formattedRemoteContentId))]) : e._e()])
                    }))] : e._e()], 2)
                };
            c._withStripped = !0;
            var u = a(79278),
                p = a(6305);
            const d = {
                en: {
                    ALT: {
                        AVATAR_BLUE: "blue quip",
                        AVATAR_CACTUS: "cactus quip",
                        AVATAR_COFFIN: "coffin-shaped quip",
                        AVATAR_GREEN: "green quip",
                        AVATAR_KITTEN: "kitten-shaped quip",
                        AVATAR_MOON: "moon-shaped quip",
                        AVATAR_ORANGE: "orange quip",
                        AVATAR_PINK: "pink quip",
                        AVATAR_POOP: "poop-shaped quip",
                        AVATAR_PURPLE: "purple quip",
                        AVATAR_RED: "red quip",
                        AVATAR_STAR: "star-shaped quip",
                        AVATAR_TEAL: "teal quip",
                        AVATAR_TEAR: "teardrop-shaped quip",
                        AVATAR_TRICLOPS: "three-eyed quip",
                        AVATAR_YELLOW: "yellow quip",
                        LOGO_GAME: "the Quiplash 3 logo",
                        LOGO_1: "a clay number 1",
                        LOGO_2: "a clay number 2",
                        LOGO_3: "a clay number 3",
                        UGC: {
                            TOGGLE_THRIPLASH_OFF: "switch to regular prompt",
                            TOGGLE_THRIPLASH_ON: "switch to Thriplash prompt"
                        }
                    },
                    LOBBY: {
                        AVATAR_SELECT: "Select your character"
                    },
                    VOTING: {
                        INSTRUCTION: "Vote for your favorite",
                        THANKS: "Thank you. Your choice:"
                    },
                    WRITING: {
                        ANSWER_PLACEHOLDER: "ANSWER HERE",
                        PROMPT_COUNTER: "Prompt {current} of {total}",
                        PROMPT_FINAL: "Final prompt",
                        SAFETY_QUIP_LABEL: "Stuck? Try a safety quip",
                        SAFETY_QUIP_SUBMIT: "Submit a Safety Quip"
                    }
                },
                fr: {
                    ALT: {
                        AVATAR_BLUE: "quip bleu",
                        AVATAR_CACTUS: "quip cactus",
                        AVATAR_COFFIN: "quip en forme de cercueil",
                        AVATAR_GREEN: "quip vert",
                        AVATAR_KITTEN: "quip en forme de chaton",
                        AVATAR_MOON: "quip en forme de lune",
                        AVATAR_ORANGE: "quip orange",
                        AVATAR_PINK: "quip rose",
                        AVATAR_POOP: "quip en forme de crotte",
                        AVATAR_PURPLE: "quip violet",
                        AVATAR_RED: "quip rouge",
                        AVATAR_STAR: "quip en forme d'étoile",
                        AVATAR_TEAL: "quip turquoise",
                        AVATAR_TEAR: "quip en forme de goutte d'eau",
                        AVATAR_TRICLOPS: "quip à trois yeux",
                        AVATAR_YELLOW: "quip jaune",
                        LOGO_GAME: "le logo de Quiplash 3",
                        LOGO_1: "un numéro 1 en argile",
                        LOGO_2: "un numéro 2 en argile",
                        LOGO_3: "un numéro 3 en argile",
                        UGC: {
                            TOGGLE_THRIPLASH_OFF: "passer à un sujet normal",
                            TOGGLE_THRIPLASH_ON: "passer à un sujet Thriplash"
                        }
                    },
                    LOBBY: {
                        AVATAR_SELECT: "Choisissez votre personnage"
                    },
                    VOTING: {
                        INSTRUCTION: "Votez pour la réponse préférée",
                        THANKS: "Merci. Votre choix :"
                    },
                    WRITING: {
                        ANSWER_PLACEHOLDER: "RÉPONSE ICI",
                        PROMPT_COUNTER: "Sujet {current} sur {total}",
                        PROMPT_FINAL: "Dernier sujet",
                        SAFETY_QUIP_LABEL: "Bloqué ? Essayez un quip de sauvetage",
                        SAFETY_QUIP_SUBMIT: "Envoyez un quip de sauvetage"
                    }
                },
                it: {
                    ALT: {
                        AVATAR_BLUE: "frase blu",
                        AVATAR_CACTUS: "frase a forma di cactus",
                        AVATAR_COFFIN: "frase a forma di bara",
                        AVATAR_GREEN: "frase verde",
                        AVATAR_KITTEN: "frase a forma di gattino",
                        AVATAR_MOON: "frase a forma di luna",
                        AVATAR_ORANGE: "frase arancione",
                        AVATAR_PINK: "frase rosa",
                        AVATAR_POOP: "frase a forma di cacchina",
                        AVATAR_PURPLE: "frase viola",
                        AVATAR_RED: "frase rossa",
                        AVATAR_STAR: "frase a forma di stella",
                        AVATAR_TEAL: "frase ottanio",
                        AVATAR_TEAR: "frase a forma di lacrima",
                        AVATAR_TRICLOPS: "frase a forma di terzo occhio",
                        AVATAR_YELLOW: "frase gialla",
                        LOGO_GAME: "il logo di Quiplash 3",
                        LOGO_1: "un numero 1 di argilla",
                        LOGO_2: "un numero 2 di argilla",
                        LOGO_3: "un numero 3 di argilla",
                        UGC: {
                            TOGGLE_THRIPLASH_OFF: "passa alla definizione normale",
                            TOGGLE_THRIPLASH_ON: "passa alla definizione Triplash"
                        }
                    },
                    LOBBY: {
                        AVATAR_SELECT: "Scegli il tuo personaggio"
                    },
                    VOTING: {
                        INSTRUCTION: "Vota la tua preferita",
                        THANKS: "Grazie. La tua scelta:"
                    },
                    WRITING: {
                        ANSWER_PLACEHOLDER: "RISPONDI QUI",
                        PROMPT_COUNTER: "Definizione {current} di {total}",
                        PROMPT_FINAL: "Ultima definizione",
                        SAFETY_QUIP_LABEL: "Non sai che scrivere? Prova una frase di sicurezza",
                        SAFETY_QUIP_SUBMIT: "Invia una frase di sicurezza"
                    }
                },
                de: {
                    ALT: {
                        AVATAR_BLUE: "Blauer Quip",
                        AVATAR_CACTUS: "Kaktus-Quip",
                        AVATAR_COFFIN: "Sargförmiger Quip",
                        AVATAR_GREEN: "Grüner Quip",
                        AVATAR_KITTEN: "Katzenartiger Quip",
                        AVATAR_MOON: "Mondförmiger Quip",
                        AVATAR_ORANGE: "Oranger Quip",
                        AVATAR_PINK: "Rosa Quip",
                        AVATAR_POOP: "Häufchenförmiger Quip",
                        AVATAR_PURPLE: "Lila Quip",
                        AVATAR_RED: "Roter Quip",
                        AVATAR_STAR: "Sternförmiger Quip",
                        AVATAR_TEAL: "Türkiser Quip",
                        AVATAR_TEAR: "Tränenförmiger Quip",
                        AVATAR_TRICLOPS: "Dreiaugiger Quip",
                        AVATAR_YELLOW: "Gelber Quip",
                        LOGO_GAME: "das Quiplash 3 Logo",
                        LOGO_1: "eine tönerne 1",
                        LOGO_2: "eine tönerne 2",
                        LOGO_3: "eine tönerne 3",
                        UGC: {
                            TOGGLE_THRIPLASH_OFF: "Zu regulärem Prompt wechseln",
                            TOGGLE_THRIPLASH_ON: "Zu Thriplash-Prompt wechseln"
                        }
                    },
                    LOBBY: {
                        AVATAR_SELECT: "Wähle deinen Charakter aus"
                    },
                    VOTING: {
                        INSTRUCTION: "Stimme für deinen Favoriten ab",
                        THANKS: "Vielen Dank. Deine Wahl:"
                    },
                    WRITING: {
                        ANSWER_PLACEHOLDER: "HIER SCHREIBEN",
                        PROMPT_COUNTER: "Prompt {current} von {total}",
                        PROMPT_FINAL: "Letzter Prompt",
                        SAFETY_QUIP_LABEL: "Keine Idee? Versuch's mit einem Notfall-Quip",
                        SAFETY_QUIP_SUBMIT: "Schicke einen Notfall-Quip ab"
                    }
                },
                es: {
                    ALT: {
                        AVATAR_BLUE: "zasca azul",
                        AVATAR_CACTUS: "zasca cactus",
                        AVATAR_COFFIN: "zasca con forma de ataúd",
                        AVATAR_GREEN: "zasca verde",
                        AVATAR_KITTEN: "zasca con forma de gatito",
                        AVATAR_MOON: "zasca con forma de luna",
                        AVATAR_ORANGE: "zasca naranja",
                        AVATAR_PINK: "zasca rosa",
                        AVATAR_POOP: "zasca con forma de caca",
                        AVATAR_PURPLE: "zasca morado",
                        AVATAR_RED: "zasca rojo",
                        AVATAR_STAR: "zasca con forma de estrella",
                        AVATAR_TEAL: "zasca verde azulado",
                        AVATAR_TEAR: "zasca con forma de lágrima",
                        AVATAR_TRICLOPS: "zasca de tres ojos",
                        AVATAR_YELLOW: "zasca amarillo",
                        LOGO_GAME: "el logotipo de Quiplash 3",
                        LOGO_1: "un número 1 de arcilla",
                        LOGO_2: "un número 2 de arcilla",
                        LOGO_3: "un número 3 de arcilla",
                        UGC: {
                            TOGGLE_THRIPLASH_OFF: "cambiar a un enunciado normal",
                            TOGGLE_THRIPLASH_ON: "cambiar a un enunciado Thriplash"
                        }
                    },
                    LOBBY: {
                        AVATAR_SELECT: "Elige a tu personaje"
                    },
                    VOTING: {
                        INSTRUCTION: "Vota a tu favorito",
                        THANKS: "Gracias. Tu elección:"
                    },
                    WRITING: {
                        ANSWER_PLACEHOLDER: "RESPONDE AQUÍ",
                        PROMPT_COUNTER: "Entrada {current} de {total}",
                        PROMPT_FINAL: "Entrada final",
                        SAFETY_QUIP_LABEL: "¿Te has atascado? Prueba con un zasca de emergencia",
                        SAFETY_QUIP_SUBMIT: "Envía un zasca de emergencia"
                    }
                },
                "es-XL": {
                    ALT: {
                        AVATAR_BLUE: "ocurrencia azul",
                        AVATAR_CACTUS: "ocurrencia cactus",
                        AVATAR_COFFIN: "ocurrencia con forma de ataúd",
                        AVATAR_GREEN: "ocurrencia verde",
                        AVATAR_KITTEN: "ocurrencia con forma de gatito",
                        AVATAR_MOON: "ocurrencia con forma de luna",
                        AVATAR_ORANGE: "ocurrencia naranja",
                        AVATAR_PINK: "ocurrencia rosa",
                        AVATAR_POOP: "ocurrencia con forma de caca",
                        AVATAR_PURPLE: "ocurrencia morada",
                        AVATAR_RED: "ocurrencia roja",
                        AVATAR_STAR: "ocurrencia con forma de estrella",
                        AVATAR_TEAL: "ocurrencia verde azulada",
                        AVATAR_TEAR: "ocurrencia con forma de lágrima",
                        AVATAR_TRICLOPS: "ocurrencia de tres ojos",
                        AVATAR_YELLOW: "ocurrencia amarilla",
                        LOGO_GAME: "el logotipo de Quiplash 3",
                        LOGO_1: "arcilla número 1",
                        LOGO_2: "arcilla número 2",
                        LOGO_3: "arcilla número 3",
                        UGC: {
                            TOGGLE_THRIPLASH_OFF: "cambiar al indicador normal",
                            TOGGLE_THRIPLASH_ON: "cambiar al indicador Thriplash"
                        }
                    },
                    LOBBY: {
                        AVATAR_SELECT: "Elige tu personaje"
                    },
                    VOTING: {
                        INSTRUCTION: "Vota tu favorito",
                        THANKS: "Gracias. Tu elección:"
                    },
                    WRITING: {
                        ANSWER_PLACEHOLDER: "RESPONDE AQUÍ",
                        PROMPT_COUNTER: "Enunciado {current} de {total}",
                        PROMPT_FINAL: "Enunciado final",
                        SAFETY_QUIP_LABEL: "¿Atascado? Prueba una ocurrencia de emergencia",
                        SAFETY_QUIP_SUBMIT: "Envía una ocurrencia de emergencia"
                    }
                }
            };
            i().use(u.ZP);
            const A = i().extend({
                components: {
                    Input: p.Z
                },
                props: {
                    episodes: Array
                },
                i18n: {
                    messages: d
                },
                data: () => ({
                    id: ""
                }),
                methods: {
                    onClose() {
                        this.$emit("resolve", {
                            action: "close"
                        })
                    },
                    onLoadId() {
                        const e = this.id.replace(/[^A-Za-z]/gi, "").toUpperCase();
                        7 === e.length && this.$emit("resolve", {
                            action: "ugc-load",
                            contentId: e
                        })
                    },
                    onLoadSelection(e) {
                        const t = this.episodes[e],
                            a = t.remoteContentId || t.localContentId;
                        this.$emit("resolve", {
                            action: "ugc-load",
                            contentId: a
                        })
                    }
                }
            });
            var h = a(51900),
                v = (0, h.Z)(A, c, [], !1, null, "468e05a0", null);
            v.options.__file = "src/games/tjsp/quiplash3/views/UGC/EpisodesModal.vue";
            const f = v.exports;
            var T = function(e, t, a, s) {
                return new(a || (a = Promise))((function(r, i) {
                    function n(e) {
                        try {
                            l(s.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function o(e) {
                        try {
                            l(s.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                            e(t)
                        }))).then(n, o)
                    }
                    l((s = s.apply(e, t || [])).next())
                }))
            };
            const m = i().extend({
                components: {
                    LobbyActions: l.Z
                },
                props: {
                    avatarImages: Object,
                    info: Object,
                    player: Object
                },
                data: () => ({
                    selectedAvatar: {}
                }),
                watch: {
                    "player.avatars": function() {
                        if (!this.selectedAvatar.name) return;
                        const e = this.player.avatars.find((e => e.name === this.selectedAvatar.name));
                        (null == e ? void 0 : e.available) || (null == e ? void 0 : e.name) === this.info.avatar || (this.selectedAvatar = {})
                    },
                    "player.lastUGCResult": function() {
                        var e;
                        (null === (e = this.player.lastUGCResult) || void 0 === e ? void 0 : e.error) && this.$showModal("Error", {
                            text: this.$t("ERROR.TITLE"),
                            subtext: this.player.lastUGCResult.error,
                            dismissText: this.$t("ACTION.OK")
                        })
                    }
                },
                i18n: {
                    messages: d
                },
                methods: {
                    onEpisodeReport() {
                        window.location.href = `mailto:support@jackboxgames.com?subject=Report episode id ${this.player.formattedActiveContentId}`
                    },
                    onEpisodeUnload() {
                        return T(this, void 0, void 0, (function*() {
                            if (this.player.responseKey) try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "ugc-unload"
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    },
                    onEpisodeViewAuthor() {
                        return T(this, void 0, void 0, (function*() {
                            if (this.player.responseKey) try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "ugc-view-author"
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    },
                    onEpisodeViewMenu() {
                        return T(this, void 0, void 0, (function*() {
                            if (!this.player.responseKey) return;
                            const e = yield this.$showModal(f, {
                                episodes: this.player.history
                            });
                            if (e && "close" !== e.action) try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "ugc-load",
                                    contentId: e.contentId
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    },
                    onSelectAvatar(e) {
                        return T(this, void 0, void 0, (function*() {
                            if (this.player.responseKey) {
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "avatar",
                                        avatar: e.name
                                    })
                                } catch (e) {
                                    this.$handleEcastError(e)
                                }
                                this.selectedAvatar = e
                            }
                        }))
                    }
                }
            });
            var _ = (0, h.Z)(m, o, [], !1, null, "1e91a8ef", null);
            _.options.__file = "src/games/tjsp/quiplash3/views/Lobby.vue";
            const y = _.exports;
            var E = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "header",
                    attrs: {
                        "aria-label": "player name section"
                    }
                }, [e.avatar ? a("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: e.avatar.src,
                        alt: e.avatar.alt
                    }
                }) : e._e(), e._v(" "), a("span", {
                    staticClass: "name",
                    domProps: {
                        textContent: e._s(e.name)
                    }
                })])
            };
            E._withStripped = !0;
            const O = i().extend({
                props: {
                    avatar: Object,
                    name: String
                }
            });
            var b = (0, h.Z)(O, E, [], !1, null, "7c2ebeaf", null);
            b.options.__file = "src/games/tjsp/quiplash3/views/NameHeader.vue";
            const C = b.exports;
            var R = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "post-game"
                }, [a("PostGameActions", {
                    attrs: {
                        player: e.player
                    }
                }), e._v(" "), a("GalleryLink", {
                    attrs: {
                        artifact: e.artifact
                    }
                })], 1)
            };
            R._withStripped = !0;
            var g = a(56623),
                I = a(83933);
            const L = i().extend({
                components: {
                    GalleryLink: g.Z,
                    PostGameActions: I.Z
                },
                props: {
                    artifact: Object,
                    player: Object
                }
            });
            var N = (0, h.Z)(L, R, [], !1, null, "4c9fa129", null);
            N.options.__file = "src/games/tjsp/quiplash3/views/PostGame.vue";
            const P = N.exports;
            var S = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "ugc"
                }, [s("div", {
                    staticClass: "instruction",
                    domProps: {
                        textContent: e._s(e.instruction)
                    }
                }), e._v(" "), e.player.validActions.length > 0 ? [e.player.validActions.includes("toggle-visibility") ? [s("div", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "UGC.INSTRUCTION.TOGGLE_VISIBILITY",
                        expression: "'UGC.INSTRUCTION.TOGGLE_VISIBILITY'"
                    }]
                }), e._v(" "), s("button", {
                    staticClass: "toggle-visibility controller",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onToggleVisibility("controller")
                        }
                    }
                }, [e.player.controllerVisibility ? [s("img", {
                    attrs: {
                        src: a(73816),
                        alt: e.$t("ALT.UGC.VISIBILITY_CONTROLLER_ON")
                    }
                })] : [s("img", {
                    attrs: {
                        src: a(88348),
                        alt: e.$t("ALT.UGC.VISIBILITY_CONTROLLER_OFF")
                    }
                })]], 2), e._v(" "), s("button", {
                    staticClass: "toggle-visibility screen",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onToggleVisibility("screen")
                        }
                    }
                }, [e.player.screenVisibility ? [s("img", {
                    attrs: {
                        src: a(97131),
                        alt: e.$t("ALT.UGC.VISIBILITY_SCREEN_ON")
                    }
                })] : [s("img", {
                    attrs: {
                        src: a(57009),
                        alt: e.$t("ALT.UGC.VISIBILITY_SCREEN_OFF")
                    }
                })]], 2)] : e._e(), e._v(" "), e.player.validActions.includes("new") ? [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "UGC.CREATE_NEW_EPISODE",
                        expression: "'UGC.CREATE_NEW_EPISODE'"
                    }],
                    staticClass: "action-button",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onAction("new")
                        }
                    }
                })] : e._e(), e._v(" "), e.player.validActions.includes("load") && e.player.episodes.length > 0 ? [s("div", {
                    staticClass: "episodes-list"
                }, [s("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "UGC.PREVIOUS_EPISODES",
                        expression: "'UGC.PREVIOUS_EPISODES'"
                    }]
                }), e._v(" "), e._l(e.player.episodes, (function(t, a) {
                    return s("div", {
                        key: t.remoteContentId || t.localContentId
                    }, [s("button", {
                        staticClass: "action-button",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onEpisodeClick(a)
                            }
                        }
                    }, [s("span", {
                        domProps: {
                            textContent: e._s(t.metadata.title)
                        }
                    }), e._v(" "), null != t.remoteContentId ? s("span", {
                        staticClass: "id",
                        domProps: {
                            textContent: e._s(t.formattedRemoteContentId)
                        }
                    }) : e._e()])])
                }))], 2)] : e._e()] : [s("div", {
                    domProps: {
                        textContent: e._s(e.player.noActionsText)
                    }
                })], e._v(" "), e.player.text ? s("div", {
                    staticClass: "prompt ugc-text",
                    attrs: {
                        id: "prompt",
                        "v-text": e.player.text
                    }
                }) : e._e(), e._v(" "), e.player.validActions.length > 0 ? [e.player.validActions.includes("add") ? [s("div", {
                    attrs: {
                        id: "prompt"
                    }
                }, [null != e.promptCharacterCount ? s("div", {
                    domProps: {
                        textContent: e._s(e.promptCharacterCount)
                    }
                }) : e._e(), e._v(" "), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.isThriplash,
                        expression: "isThriplash"
                    }],
                    staticClass: "toggle-thriplash",
                    attrs: {
                        "aria-label": e.isThriplash ? e.$t("ALT.UGC.TOGGLE_THRIPLASH_OFF") : e.$t("ALT.UGC.TOGGLE_THRIPLASH_ON"),
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(e.isThriplash) ? e._i(e.isThriplash, null) > -1 : e.isThriplash
                    },
                    on: {
                        change: function(t) {
                            var a = e.isThriplash,
                                s = t.target,
                                r = !!s.checked;
                            if (Array.isArray(a)) {
                                var i = e._i(a, null);
                                s.checked ? i < 0 && (e.isThriplash = a.concat([null])) : i > -1 && (e.isThriplash = a.slice(0, i).concat(a.slice(i + 1)))
                            } else e.isThriplash = r
                        }
                    }
                }), e._v(" "), s("TextArea", {
                    ref: "prompt",
                    staticClass: "prompt",
                    attrs: {
                        "aria-label": e.$t("UGC.PROMPT_PLACEHOLDER"),
                        autosize: "",
                        maxlength: e.player.maxContentLength,
                        placeholder: e.$t("UGC.PROMPT_PLACEHOLDER"),
                        rows: "1"
                    },
                    on: {
                        input: e.onInputPrompt,
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.createNewPrompt.apply(null, arguments))
                        }
                    },
                    model: {
                        value: e.promptText,
                        callback: function(t) {
                            e.promptText = t
                        },
                        expression: "promptText"
                    }
                }), e._v(" "), s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "UGC.PROMPT_ADD",
                        expression: "'UGC.PROMPT_ADD'"
                    }],
                    staticClass: "create",
                    attrs: {
                        disabled: e.player.count === e.player.maxCount
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.createNewPrompt.apply(null, arguments)
                        }
                    }
                })], 1)] : e._e(), e._v(" "), e.player.validActions.includes("title") ? [s("label", {
                    attrs: {
                        for: "title"
                    }
                }, [s("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "UGC.INSTRUCTION.CREATE_TITLE",
                        expression: "'UGC.INSTRUCTION.CREATE_TITLE'"
                    }]
                })]), e._v(" "), s("div", {
                    attrs: {
                        id: "title"
                    }
                }, [null != e.titleCharacterCount ? s("div", {
                    domProps: {
                        textContent: e._s(e.titleCharacterCount)
                    }
                }) : e._e(), e._v(" "), s("TextArea", {
                    ref: "title",
                    attrs: {
                        rows: "1",
                        maxlength: e.player.maxTitleLength,
                        placeholder: e.$t("UGC.TITLE_PLACEHOLDER")
                    },
                    on: {
                        input: e.onInputTitle,
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.createNewEpisode.apply(null, arguments))
                        }
                    },
                    model: {
                        value: e.titleText,
                        callback: function(t) {
                            e.titleText = t
                        },
                        expression: "titleText"
                    }
                }), e._v(" "), s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.CREATE",
                        expression: "'ACTION.CREATE'"
                    }],
                    staticClass: "create",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.createNewEpisode.apply(null, arguments)
                        }
                    }
                })], 1)] : e._e(), e._v(" "), e.player.validActions.includes("close") ? [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.CLOSE",
                        expression: "'ACTION.CLOSE'"
                    }],
                    staticClass: "action-button close",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onAction("close")
                        }
                    }
                })] : e._e(), e._v(" "), e.player.validActions.includes("unlock") ? [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.EDIT",
                        expression: "'ACTION.EDIT'"
                    }],
                    staticClass: "action-button unlock",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onAction("unlock")
                        }
                    }
                })] : e._e(), e._v(" "), e.player.validActions.includes("done") ? [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.DONE",
                        expression: "'ACTION.DONE'"
                    }],
                    staticClass: "action-button done",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onAction("done")
                        }
                    }
                })] : e._e(), e._v(" "), e.player.validActions.includes("submit") ? [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.PUBLISH",
                        expression: "'ACTION.PUBLISH'"
                    }],
                    staticClass: "action-button submit",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.showTermsOfService.apply(null, arguments)
                        }
                    }
                })] : e._e(), e._v(" "), e.player.validActions.includes("play") ? [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.PLAY",
                        expression: "'ACTION.PLAY'"
                    }],
                    staticClass: "action-button play",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onAction("play")
                        }
                    }
                })] : e._e(), e._v(" "), e.player.validActions.includes("remove-content") ? [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.DELETE",
                        expression: "'ACTION.DELETE'"
                    }],
                    staticClass: "action-button delete",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.confirmDeleteEpisode.apply(null, arguments)
                        }
                    }
                })] : e._e(), e._v(" "), e.player.validActions.includes("exit") ? [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "UGC.BACK_TO_MENU",
                        expression: "'UGC.BACK_TO_MENU'"
                    }],
                    staticClass: "action-button back",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onAction("exit")
                        }
                    }
                })] : e._e(), e._v(" "), e.player.validActions.includes("episodes") ? [s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "UGC.BACK_TO_EPISODES",
                        expression: "'UGC.BACK_TO_EPISODES'"
                    }],
                    staticClass: "action-button back",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onAction("episodes")
                        }
                    }
                })] : e._e(), e._v(" "), e.player.validActions.includes("remove") ? [s("div", {
                    staticClass: "prompts-list"
                }, [s("span", {
                    domProps: {
                        textContent: e._s(e.promptsCount)
                    }
                }), e._v(" "), e._l(e.player.prompts, (function(t, a) {
                    return s("div", {
                        key: a
                    }, [s("button", {
                        staticClass: "player-prompt",
                        class: {
                            other: t.author !== e.userId, thriplash: "thriplash" === t.type
                        },
                        domProps: {
                            textContent: e._s(t.text)
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onPromptClick(a)
                            }
                        }
                    })])
                }))], 2)] : e._e()] : e._e()], 2)
            };
            S._withStripped = !0;
            var x = a(3682),
                G = a(38266),
                V = a(89446),
                U = function(e, t, a, s) {
                    return new(a || (a = Promise))((function(r, i) {
                        function n(e) {
                            try {
                                l(s.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function o(e) {
                            try {
                                l(s.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(n, o)
                        }
                        l((s = s.apply(e, t || [])).next())
                    }))
                };
            const w = i().extend({
                components: {
                    TextArea: G.Z
                },
                props: {
                    player: Object
                },
                i18n: {
                    messages: d
                },
                bb: {
                    tos: (e, t) => `<a class="tosLink" href="https://jackboxgames.com/terms-of-service/" target="_blank">${t}</a>`
                },
                data: () => ({
                    isThriplash: !1,
                    promptText: "",
                    titleText: ""
                }),
                computed: {
                    instruction() {
                        return this.player.validActions.includes("add") ? this.$t("UGC.INSTRUCTION.WRITE") : this.player.validActions.includes("load") ? this.$t("UGC.INSTRUCTION.LOAD") : this.player.validActions.includes("submit") ? this.$t("UGC.INSTRUCTION.PUBLISH") : this.player.validActions.includes("title") ? this.$t("UGC.INSTRUCTION.TITLE") : ""
                    },
                    promptCharacterCount() {
                        return this.player.maxContentLength ? this.player.maxContentLength - this.promptText.length : null
                    },
                    promptsCount() {
                        const {
                            count: e,
                            maxCount: t,
                            prompts: a
                        } = this.player;
                        let s = `${e}/${t}`;
                        return a.length < e && (s += ` ${this.$t("UGC.PROMPTS_COUNT_HIDDEN",{count:e-a.length})}`), s
                    },
                    titleCharacterCount() {
                        return this.player.maxTitleLength ? this.player.maxTitleLength - this.titleText.length : null
                    },
                    userId() {
                        return this.$storage.isSupported ? this.$storage.get("uuid") : null
                    }
                },
                mounted() {
                    (0, x.Z)([this.$refs.prompt, this.$refs.title])
                },
                methods: {
                    confirmDeleteEpisode() {
                        return U(this, void 0, void 0, (function*() {
                            "confirm" === (yield this.$showModal("Options", {
                                text: this.$t("UGC.WARNING.DELETE"),
                                options: [{
                                    text: this.$t("ACTION.YES"),
                                    classes: ["confirm"],
                                    value: "confirm"
                                }, {
                                    text: this.$t("ACTION.NO"),
                                    classes: ["cancel"],
                                    value: "cancel"
                                }]
                            })) && this.$ecast.updateObject(this.player.responseKey, {
                                action: "remove-content"
                            }).catch(this.$handleEcastError)
                        }))
                    },
                    createNewEpisode() {
                        return U(this, void 0, void 0, (function*() {
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "title",
                                    text: this.titleText
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            } finally {
                                this.titleText = ""
                            }
                        }))
                    },
                    createNewPrompt() {
                        return U(this, void 0, void 0, (function*() {
                            if (!this.promptText) return;
                            if (this.player.count === this.player.maxCount) return;
                            const e = {
                                action: "add",
                                text: this.promptText
                            };
                            this.isThriplash && (e.type = "thriplash");
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, e)
                            } catch (e) {
                                this.$handleEcastError(e)
                            } finally {
                                this.promptText = "", this.$nextTick((() => {
                                    const e = this.$refs.prompt,
                                        t = null == e ? void 0 : e.$el;
                                    null == t || t.focus()
                                }))
                            }
                        }))
                    },
                    showTermsOfService() {
                        return U(this, void 0, void 0, (function*() {
                            "confirm" === (yield this.$showModal("Options", {
                                text: this.$t("UGC.WARNING.TOS"),
                                options: [{
                                    text: this.$t("UGC.WARNING.TOS_AGREE"),
                                    classes: ["confirm"],
                                    value: "confirm"
                                }, {
                                    text: this.$t("UGC.BACK_TO_MENU"),
                                    classes: ["cancel"],
                                    value: "cancel"
                                }]
                            })) && this.$ecast.updateObject(this.player.responseKey, {
                                action: "submit"
                            }).catch(this.$handleEcastError)
                        }))
                    },
                    onAction(e) {
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: e
                        }).catch(this.$handleEcastError)
                    },
                    onEpisodeClick(e) {
                        const t = this.player.episodes[e],
                            a = t.remoteContentId || t.localContentId;
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: "load",
                            contentId: a
                        }).catch(this.$handleEcastError)
                    },
                    onInputPrompt() {
                        this.promptText = V.c.sanitizeInput(this.promptText)
                    },
                    onInputTitle() {
                        this.titleText = V.c.sanitizeInput(this.titleText)
                    },
                    onPromptClick(e) {
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: "remove",
                            key: e
                        }).catch(this.$handleEcastError)
                    },
                    onToggleVisibility(e) {
                        this.$ecast.updateObject(this.player.responseKey, {
                            action: "toggle-visibility",
                            target: e
                        }).catch(this.$handleEcastError)
                    }
                }
            });
            var $ = (0, h.Z)(w, S, [], !1, null, null, null);
            $.options.__file = "src/games/tjsp/quiplash3/views/UGC/Ugc.vue";
            const k = $.exports;
            var D = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "voting"
                }, [a("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.prompt,
                        expression: "player.prompt"
                    }],
                    staticClass: "prompt"
                }), e._v(" "), a("div", {
                    staticClass: "instructions"
                }, [e.hasSubmit && e.selected ? [e._v("\n            " + e._s(e.$t("VOTING.THANKS")) + "\n            "), a("br"), e._v(" "), a("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.selected.text,
                        expression: "selected.text"
                    }]
                })] : [e._v("\n            " + e._s(e.$t("VOTING.INSTRUCTION")) + "\n        ")]], 2), e._v(" "), e.hasSubmit ? e._e() : e._l(e.player.choices, (function(t) {
                    return a("button", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: t.text,
                            expression: "choice.text"
                        }],
                        key: "choice-" + t.choiceIndex,
                        staticClass: "choice",
                        class: {
                            selected: e.selected && e.selected.choiceIndex === t.choiceIndex
                        },
                        attrs: {
                            type: "submit",
                            disabled: e.isSubmitting
                        },
                        on: {
                            click: function(a) {
                                return a.preventDefault(), e.onChoose(t)
                            }
                        }
                    })
                }))], 2)
            };
            D._withStripped = !0;
            const j = i().extend({
                props: {
                    player: Object
                },
                i18n: {
                    messages: d
                },
                data: () => ({
                    hasSubmit: !1,
                    isSubmitting: !1,
                    selected: null
                }),
                methods: {
                    onChoose(e) {
                        return t = this, a = void 0, r = function*() {
                            this.isSubmitting = !0, this.selected = e;
                            try {
                                "player" === this.$ecast.role ? yield this.$ecast.updateObject(this.player.responseKey, {
                                    choiceIndex: e.choiceIndex
                                }): "audience" === this.$ecast.role && (yield this.$ecast.incrementCountGroupCounter(this.player.countGroupName, String(e.choiceIndex)))
                            } catch (e) {
                                this.isSubmitting = !1, this.selected = null, this.$handleEcastError(e)
                            }
                            this.hasSubmit = !0
                        }, new((s = void 0) || (s = Promise))((function(e, i) {
                            function n(e) {
                                try {
                                    l(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                try {
                                    l(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function l(t) {
                                var a;
                                t.done ? e(t.value) : (a = t.value, a instanceof s ? a : new s((function(e) {
                                    e(a)
                                }))).then(n, o)
                            }
                            l((r = r.apply(t, a || [])).next())
                        }));
                        var t, a, s, r
                    }
                }
            });
            var F = (0, h.Z)(j, D, [], !1, null, "22404244", null);
            F.options.__file = "src/games/tjsp/quiplash3/views/Voting.vue";
            const M = F.exports;
            var B = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "waiting"
                }, [s("div", {
                    staticClass: "logo"
                }, [1 === e.player.round ? s("img", {
                    staticClass: "round",
                    attrs: {
                        alt: e.$t("ALT.LOGO_1"),
                        src: a(24374)
                    }
                }) : 2 === e.player.round ? s("img", {
                    staticClass: "round",
                    attrs: {
                        alt: e.$t("ALT.LOGO_2"),
                        src: a(59865)
                    }
                }) : 3 === e.player.round ? s("img", {
                    staticClass: "round",
                    attrs: {
                        alt: e.$t("ALT.LOGO_3"),
                        src: a(87692)
                    }
                }) : s("img", {
                    attrs: {
                        alt: e.$t("ALT.LOGO_GAME"),
                        src: a(52237)
                    }
                })]), e._v(" "), e.player.message ? s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.message,
                        expression: "player.message"
                    }],
                    staticClass: "message"
                }) : e._e(), e._v(" "), s("GalleryLink", {
                    attrs: {
                        artifact: e.artifact
                    }
                })], 1)
            };
            B._withStripped = !0;
            const H = i().extend({
                components: {
                    GalleryLink: g.Z
                },
                props: {
                    artifact: Object,
                    player: Object
                },
                i18n: {
                    messages: d
                }
            });
            var K = (0, h.Z)(H, B, [], !1, null, "442df3a6", null);
            K.options.__file = "src/games/tjsp/quiplash3/views/Waiting.vue";
            const W = K.exports;
            var q = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "writing"
                }, [a("div", {
                    staticClass: "prompt-counter"
                }, [e.player.isThriplash ? [e._v("\n            " + e._s(e.$t("WRITING.PROMPT_FINAL")) + "\n        ")] : [e._v("\n            " + e._s(e.$t("WRITING.PROMPT_COUNTER", {
                    current: e.player.promptNumber,
                    total: e.player.promptTotal
                })) + "\n        ")]], 2), e._v(" "), a("form", {
                    on: {
                        submit: function(t) {
                            return t.preventDefault(), e.onSubmit.apply(null, arguments)
                        }
                    }
                }, [a("label", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.prompt,
                        expression: "player.prompt"
                    }],
                    staticClass: "prompt",
                    attrs: {
                        for: "textarea"
                    }
                }), e._v(" "), e._l(e.answers, (function(t, s) {
                    return a("div", {
                        key: "answer" + s,
                        staticClass: "answer"
                    }, [a("div", {
                        staticClass: "character-counter"
                    }, [e._v(e._s(e.answers[s].charCount) + "/" + e._s(e.player.maxLength))]), e._v(" "), a("TextArea", {
                        ref: "answer" + s,
                        refInFor: !0,
                        attrs: {
                            autocomplete: "off",
                            autocorrect: "off",
                            autosize: "",
                            disabled: e.isSubmitting,
                            enterkeyhint: s === e.answers.length - 1 ? "done" : "next",
                            placeholder: e.$t("WRITING.ANSWER_PLACEHOLDER"),
                            rows: "1",
                            spellcheck: "false"
                        },
                        on: {
                            input: function(t) {
                                return e.onInput(t, s)
                            },
                            keydown: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.focusNext(s))
                            }
                        },
                        model: {
                            value: e.answers[s].text,
                            callback: function(t) {
                                e.$set(e.answers[s], "text", t)
                            },
                            expression: "answers[idx].text"
                        }
                    })], 1)
                })), e._v(" "), e.error ? a("span", {
                    staticClass: "error",
                    domProps: {
                        textContent: e._s(e.error)
                    }
                }) : e._e(), e._v(" "), a("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.SUBMIT",
                        expression: "'ACTION.SUBMIT'"
                    }],
                    staticClass: "submit",
                    attrs: {
                        type: "submit",
                        disabled: e.isSubmitting
                    }
                })], 2), e._v(" "), e.player.isThriplash ? e._e() : a("div", {
                    staticClass: "safety-quip"
                }, [a("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "WRITING.SAFETY_QUIP_LABEL",
                        expression: "'WRITING.SAFETY_QUIP_LABEL'"
                    }]
                }), e._v(" "), a("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "WRITING.SAFETY_QUIP_SUBMIT",
                        expression: "'WRITING.SAFETY_QUIP_SUBMIT'"
                    }],
                    attrs: {
                        type: "submit",
                        disabled: e.isSubmitting
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onSafetyQuip.apply(null, arguments)
                        }
                    }
                })])])
            };
            q._withStripped = !0;
            var Q = a(55507),
                z = a(48598),
                Y = function(e, t, a, s) {
                    return new(a || (a = Promise))((function(r, i) {
                        function n(e) {
                            try {
                                l(s.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function o(e) {
                            try {
                                l(s.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value, t instanceof a ? t : new a((function(e) {
                                e(t)
                            }))).then(n, o)
                        }
                        l((s = s.apply(e, t || [])).next())
                    }))
                };
            const Z = i().extend({
                components: {
                    TextArea: G.Z
                },
                props: {
                    player: Object
                },
                i18n: {
                    messages: d
                },
                data() {
                    return {
                        answers: this.player.isThriplash ? Array(3).fill(null).map((() => ({
                            charCount: 0,
                            text: ""
                        }))) : [{
                            charCount: 0,
                            text: ""
                        }],
                        error: "",
                        isSubmitting: !1
                    }
                },
                computed: {
                    answer() {
                        return this.answers.map((e => e.text)).filter((e => "" !== e)).join("\n")
                    }
                },
                watch: {
                    "player.promptNumber": function() {
                        this.answers = this.player.isThriplash ? Array(3).fill(null).map((() => ({
                            charCount: 0,
                            text: ""
                        }))) : [{
                            charCount: 0,
                            text: ""
                        }], this.resetError(), this.isSubmitting = !1
                    }
                },
                methods: {
                    autoSubmit() {
                        return Y(this, void 0, void 0, (function*() {
                            try {
                                yield this.$ecast.updateText(this.player.textKey, this.answer)
                            } catch (e) {
                                e instanceof Q.EcastFilterError || this.$handleEcastError(e)
                            }
                        }))
                    },
                    focusNext(e) {
                        return Y(this, void 0, void 0, (function*() {
                            const t = this.$refs[`answer${e+1}`];
                            t ? this.$nextTick((() => {
                                var e;
                                const a = null === (e = t[0]) || void 0 === e ? void 0 : e.$el;
                                null == a || a.focus()
                            })) : yield this.onSubmit()
                        }))
                    },
                    resetError() {
                        this.error && (this.error = "")
                    },
                    onInput(e, t) {
                        return Y(this, void 0, void 0, (function*() {
                            this.resetError();
                            const {
                                charCount: a,
                                result: s
                            } = (0, z.I)(e, this.player.maxLength);
                            this.answers[t].charCount = a, this.answers[t].text = s, yield this.autoSubmit()
                        }))
                    },
                    onSubmit() {
                        return Y(this, void 0, void 0, (function*() {
                            if (this.answer.length) {
                                this.isSubmitting = !0;
                                try {
                                    yield this.$ecast.updateText(this.player.textKey, this.answer), yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "submit"
                                    })
                                } catch (e) {
                                    if (this.isSubmitting = !1, e instanceof Q.EcastFilterError) return void(this.error = this.$t("ERROR.TEXT_NAUGHTY"));
                                    this.$handleEcastError(e)
                                }
                            } else this.error = this.$t("ERROR.TEXT_NOTHING")
                        }))
                    },
                    onSafetyQuip() {
                        return Y(this, void 0, void 0, (function*() {
                            this.isSubmitting = !0;
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "safetyQuip"
                                })
                            } catch (e) {
                                this.isSubmitting = !1, this.$handleEcastError(e)
                            }
                        }))
                    }
                }
            });
            var X = (0, h.Z)(Z, q, [], !1, null, "7d0e76b5", null);
            X.options.__file = "src/games/tjsp/quiplash3/views/Writing.vue";
            const J = X.exports,
                ee = {
                    isWaiting: e => "waiting" === e.kind
                };
            const te = i().extend({
                components: {
                    NameHeader: C,
                    Lobby: y,
                    PostGame: P,
                    Ugc: k,
                    Voting: M,
                    Waiting: W,
                    Writing: J
                },
                ecastKeys: {
                    audience: "audiencePlayer",
                    info: ({
                        id: e
                    }) => `info:${e}`,
                    player: ({
                        id: e
                    }) => `player:${e}`
                },
                ecastProviders: {
                    artifact: e => {
                        if (e.artifact) return e.artifact;
                        let t, a = 0;
                        for (; e[`artifact:${a}`];) t = e[`artifact:${a}`], a += 1;
                        return t
                    }
                },
                props: {
                    artifact: Object,
                    audience: Object,
                    info: Object,
                    player: Object
                },
                bb: {
                    answer: (e, t) => `<b>${t}</b><br>`,
                    header: (e, t) => `${t}<br>`,
                    line: (e, t) => `${t}<br>`
                },
                i18n: {
                    messages: d,
                    sharedMessages: n.s
                },
                data: () => ({
                    avatarImages: {},
                    themeColors: {
                        audience: "#9d6dd2",
                        blue: "#415591",
                        cactus: "#2b391f",
                        coffin: "#636363",
                        default: "#636363",
                        green: "#35613b",
                        kitten: "#498c7e",
                        moon: "#684c30",
                        orange: "#785730",
                        pink: "#6e426b",
                        poop: "#3b2726",
                        purple: "#4a3396",
                        red: "#8a4545",
                        star: "#63802c",
                        teal: "#2e657a",
                        tear: "#202954",
                        triclops: "#6644a6",
                        ugc: "#6644a6",
                        yellow: "#73703a"
                    }
                }),
                computed: {
                    avatarName() {
                        var e;
                        return (null === (e = this.info) || void 0 === e ? void 0 : e.avatar) ? this.info.avatar : ""
                    },
                    background() {
                        const e = this.player || this.audience;
                        return e ? ee.isWaiting(e) ? null == e.round ? "logo" : "round" : this.theme : ""
                    },
                    guards: () => ee,
                    theme() {
                        var e, t;
                        return "audience" === this.$ecast.role || "ugc" === (null === (e = this.player) || void 0 === e ? void 0 : e.kind) ? "triclops" : (null === (t = this.info) || void 0 === t ? void 0 : t.avatar) ? this.avatarName : "default"
                    }
                },
                watch: {
                    theme() {
                        this.$setThemeColor(this.themeColors[this.theme])
                    }
                },
                created() {
                    this.setAvatarImages()
                },
                mounted() {
                    this.$setThemeColor(this.themeColors.default)
                },
                methods: {
                    setAvatarImages() {
                        return e = this, t = void 0, r = function*() {
                            this.avatarImages = {
                                blue: {
                                    alt: this.$t("ALT.AVATAR_BLUE"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 67294, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 63241, 17))).default
                                },
                                cactus: {
                                    alt: this.$t("ALT.AVATAR_CACTUS"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 44508, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 18385, 17))).default
                                },
                                coffin: {
                                    alt: this.$t("ALT.AVATAR_COFFIN"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 4637, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 1279, 17))).default
                                },
                                green: {
                                    alt: this.$t("ALT.AVATAR_GREEN"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 72993, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 94485, 17))).default
                                },
                                kitten: {
                                    alt: this.$t("ALT.AVATAR_KITTEN"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 26846, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 81394, 17))).default
                                },
                                moon: {
                                    alt: this.$t("ALT.AVATAR_MOON"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 90519, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 67539, 17))).default
                                },
                                orange: {
                                    alt: this.$t("ALT.AVATAR_ORANGE"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 87306, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 36685, 17))).default
                                },
                                pink: {
                                    alt: this.$t("ALT.AVATAR_PINK"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 14692, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 49820, 17))).default
                                },
                                poop: {
                                    alt: this.$t("ALT.AVATAR_POOP"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 30692, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 32770, 17))).default
                                },
                                purple: {
                                    alt: this.$t("ALT.AVATAR_PURPLE"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 24474, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 42264, 17))).default
                                },
                                red: {
                                    alt: this.$t("ALT.AVATAR_RED"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 64384, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 56415, 17))).default
                                },
                                star: {
                                    alt: this.$t("ALT.AVATAR_STAR"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 95509, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 49913, 17))).default
                                },
                                teal: {
                                    alt: this.$t("ALT.AVATAR_TEAL"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 88264, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 13431, 17))).default
                                },
                                tear: {
                                    alt: this.$t("ALT.AVATAR_TEAR"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 19476, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 10824, 17))).default
                                },
                                triclops: {
                                    alt: this.$t("ALT.AVATAR_TRICLOPS"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 34219, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 34499, 17))).default
                                },
                                yellow: {
                                    alt: this.$t("ALT.AVATAR_YELLOW"),
                                    src: (yield Promise.resolve().then(a.t.bind(a, 57956, 17))).default,
                                    selected: (yield Promise.resolve().then(a.t.bind(a, 88247, 17))).default
                                }
                            }
                        }, new((s = void 0) || (s = Promise))((function(a, i) {
                            function n(e) {
                                try {
                                    l(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function o(e) {
                                try {
                                    l(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function l(e) {
                                var t;
                                e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                    e(t)
                                }))).then(n, o)
                            }
                            l((r = r.apply(e, t || [])).next())
                        }));
                        var e, t, s, r
                    }
                }
            });
            var ae = (0, h.Z)(te, s, [], !1, null, null, null);
            ae.options.__file = "src/games/tjsp/quiplash3/views/Main.vue";
            const se = ae.exports
        },
        67294: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/299220a00f407b1e992e.png"
        },
        44508: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/f5fd536915239646e952.png"
        },
        4637: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/baae32972eb69180fd53.png"
        },
        72993: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/f2f9c3979e9ea83a750c.png"
        },
        26846: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/9b75a34bd6e2d1226e13.png"
        },
        90519: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/32377c2bf3cde328b517.png"
        },
        87306: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/b77397f6fd7a0489df0b.png"
        },
        14692: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/33b5ca42af84dfdd5802.png"
        },
        30692: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/91424b880c628ad0887f.png"
        },
        24474: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/7092843f22f3ee8845f5.png"
        },
        64384: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/174667724db22be3b801.png"
        },
        95509: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/e5ec046958bd6ed5828c.png"
        },
        88264: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/7bb2fd928bb37b532a77.png"
        },
        19476: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/7b103b268446767098bc.png"
        },
        34219: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/0deec7e12bbe456abe90.png"
        },
        57956: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/5c80f32811892384af54.png"
        },
        63241: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/a6d62597e97e0c682e8a.png"
        },
        18385: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/ce18e8935d961553d9fd.png"
        },
        1279: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/b23e70a8f8bbab9567c7.png"
        },
        94485: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/d7caa615ec898e236a4d.png"
        },
        81394: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/8ba37e8cac968654aa53.png"
        },
        67539: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/4cbed3625c8ecc5359f2.png"
        },
        36685: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/e56341d4f549ad60622f.png"
        },
        49820: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/9d74ac25ed79f63fd9b9.png"
        },
        32770: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/85291517834009588e6a.png"
        },
        42264: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/e1db63909b857d714ca1.png"
        },
        56415: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/08ea75c468701b53fb69.png"
        },
        49913: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/a6b6c7ede627a84280cb.png"
        },
        13431: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/5ca67449753005f20cf0.png"
        },
        10824: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/34a476cf68dfb9e60849.png"
        },
        34499: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/4aa35a28f698af9ea94e.png"
        },
        88247: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/c6286454653f31c1f2f0.png"
        },
        88348: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/52897b1eea63841f685d.png"
        },
        73816: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/7422bcd843df68458aed.png"
        },
        52237: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/7f573e990899a1a1c002.png"
        },
        24374: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/8d99f414dae386dd40ef.png"
        },
        59865: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/7cb780cf57378dfb23e9.png"
        },
        87692: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/24831b525852ba20c77c.png"
        },
        57009: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/9b27751ffe49c569664e.png"
        },
        97131: (e, t, a) => {
            "use strict";
            e.exports = a.p + "games/quiplash3-tjsp/b3991c32ac46c00b58ef.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/2427.4c85541451745ff0f3a9.js.map