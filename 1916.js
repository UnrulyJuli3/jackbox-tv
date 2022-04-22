/*! For license information please see 1916.7355acd5f5cd895479d1.js.LICENSE.txt */
(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [1916], {
        31807: t => {
            var e = !("undefined" == typeof window || !window.document || !window.document.createElement);
            t.exports = e
        },
        40487: t => {
            var e = {
                utf8: {
                    stringToBytes: function(t) {
                        return e.bin.stringToBytes(unescape(encodeURIComponent(t)))
                    },
                    bytesToString: function(t) {
                        return decodeURIComponent(escape(e.bin.bytesToString(t)))
                    }
                },
                bin: {
                    stringToBytes: function(t) {
                        for (var e = [], i = 0; i < t.length; i++) e.push(255 & t.charCodeAt(i));
                        return e
                    },
                    bytesToString: function(t) {
                        for (var e = [], i = 0; i < t.length; i++) e.push(String.fromCharCode(t[i]));
                        return e.join("")
                    }
                }
            };
            t.exports = e
        },
        71012: t => {
            var e, i;
            e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = {
                rotl: function(t, e) {
                    return t << e | t >>> 32 - e
                },
                rotr: function(t, e) {
                    return t << 32 - e | t >>> e
                },
                endian: function(t) {
                    if (t.constructor == Number) return 16711935 & i.rotl(t, 8) | 4278255360 & i.rotl(t, 24);
                    for (var e = 0; e < t.length; e++) t[e] = i.endian(t[e]);
                    return t
                },
                randomBytes: function(t) {
                    for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
                    return e
                },
                bytesToWords: function(t) {
                    for (var e = [], i = 0, s = 0; i < t.length; i++, s += 8) e[s >>> 5] |= t[i] << 24 - s % 32;
                    return e
                },
                wordsToBytes: function(t) {
                    for (var e = [], i = 0; i < 32 * t.length; i += 8) e.push(t[i >>> 5] >>> 24 - i % 32 & 255);
                    return e
                },
                bytesToHex: function(t) {
                    for (var e = [], i = 0; i < t.length; i++) e.push((t[i] >>> 4).toString(16)), e.push((15 & t[i]).toString(16));
                    return e.join("")
                },
                hexToBytes: function(t) {
                    for (var e = [], i = 0; i < t.length; i += 2) e.push(parseInt(t.substr(i, 2), 16));
                    return e
                },
                bytesToBase64: function(t) {
                    for (var i = [], s = 0; s < t.length; s += 3)
                        for (var r = t[s] << 16 | t[s + 1] << 8 | t[s + 2], n = 0; n < 4; n++) 8 * s + 6 * n <= 8 * t.length ? i.push(e.charAt(r >>> 6 * (3 - n) & 63)) : i.push("=");
                    return i.join("")
                },
                base64ToBytes: function(t) {
                    t = t.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var i = [], s = 0, r = 0; s < t.length; r = ++s % 4) 0 != r && i.push((e.indexOf(t.charAt(s - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | e.indexOf(t.charAt(s)) >>> 6 - 2 * r);
                    return i
                }
            }, t.exports = i
        },
        48738: t => {
            function e(t) {
                return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
            }
            t.exports = function(t) {
                return null != t && (e(t) || function(t) {
                    return "function" == typeof t.readFloatLE && "function" == typeof t.slice && e(t.slice(0, 0))
                }(t) || !!t._isBuffer)
            }
        },
        91296: (t, e, i) => {
            var s = /^\s+|\s+$/g,
                r = /^[-+]0x[0-9a-f]+$/i,
                n = /^0b[01]+$/i,
                o = /^0o[0-7]+$/i,
                a = parseInt,
                l = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
                c = "object" == typeof self && self && self.Object === Object && self,
                h = l || c || Function("return this")(),
                u = Object.prototype.toString,
                f = Math.max,
                d = Math.min,
                p = function() {
                    return h.Date.now()
                };

            function v(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function b(t) {
                if ("number" == typeof t) return t;
                if (function(t) {
                        return "symbol" == typeof t || function(t) {
                            return !!t && "object" == typeof t
                        }(t) && "[object Symbol]" == u.call(t)
                    }(t)) return NaN;
                if (v(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = v(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(s, "");
                var i = n.test(t);
                return i || o.test(t) ? a(t.slice(2), i ? 2 : 8) : r.test(t) ? NaN : +t
            }
            t.exports = function(t, e, i) {
                var s, r, n, o, a, l, c = 0,
                    h = !1,
                    u = !1,
                    m = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");

                function g(e) {
                    var i = s,
                        n = r;
                    return s = r = void 0, c = e, o = t.apply(n, i)
                }

                function y(t) {
                    return c = t, a = setTimeout(E, e), h ? g(t) : o
                }

                function x(t) {
                    var i = t - l;
                    return void 0 === l || i >= e || i < 0 || u && t - c >= n
                }

                function E() {
                    var t = p();
                    if (x(t)) return w(t);
                    a = setTimeout(E, function(t) {
                        var i = e - (t - l);
                        return u ? d(i, n - (t - c)) : i
                    }(t))
                }

                function w(t) {
                    return a = void 0, m && s ? g(t) : (s = r = void 0, o)
                }

                function _() {
                    var t = p(),
                        i = x(t);
                    if (s = arguments, r = this, l = t, i) {
                        if (void 0 === a) return y(l);
                        if (u) return a = setTimeout(E, e), g(l)
                    }
                    return void 0 === a && (a = setTimeout(E, e)), o
                }
                return e = b(e) || 0, v(i) && (h = !!i.leading, n = (u = "maxWait" in i) ? f(b(i.maxWait) || 0, e) : n, m = "trailing" in i ? !!i.trailing : m), _.cancel = function() {
                    void 0 !== a && clearTimeout(a), c = 0, s = l = r = a = void 0
                }, _.flush = function() {
                    return void 0 === a ? o : w(p())
                }, _
            }
        },
        20773: (t, e, i) => {
            var s, r = "__lodash_hash_undefined__",
                n = /^\[object .+?Constructor\]$/,
                o = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
                a = "object" == typeof self && self && self.Object === Object && self,
                l = o || a || Function("return this")(),
                c = Array.prototype,
                h = Function.prototype,
                u = Object.prototype,
                f = l["__core-js_shared__"],
                d = (s = /[^.]+$/.exec(f && f.keys && f.keys.IE_PROTO || "")) ? "Symbol(src)_1." + s : "",
                p = h.toString,
                v = u.hasOwnProperty,
                b = u.toString,
                m = RegExp("^" + p.call(v).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                g = c.splice,
                y = k(l, "Map"),
                x = k(Object, "create");

            function E(t) {
                var e = -1,
                    i = t ? t.length : 0;
                for (this.clear(); ++e < i;) {
                    var s = t[e];
                    this.set(s[0], s[1])
                }
            }

            function w(t) {
                var e = -1,
                    i = t ? t.length : 0;
                for (this.clear(); ++e < i;) {
                    var s = t[e];
                    this.set(s[0], s[1])
                }
            }

            function _(t) {
                var e = -1,
                    i = t ? t.length : 0;
                for (this.clear(); ++e < i;) {
                    var s = t[e];
                    this.set(s[0], s[1])
                }
            }

            function O(t, e) {
                for (var i, s, r = t.length; r--;)
                    if ((i = t[r][0]) === (s = e) || i != i && s != s) return r;
                return -1
            }

            function S(t, e) {
                var i, s, r = t.__data__;
                return ("string" == (s = typeof(i = e)) || "number" == s || "symbol" == s || "boolean" == s ? "__proto__" !== i : null === i) ? r["string" == typeof e ? "string" : "hash"] : r.map
            }

            function k(t, e) {
                var i = function(t, e) {
                    return null == t ? void 0 : t[e]
                }(t, e);
                return function(t) {
                    return !(!M(t) || (e = t, d && d in e)) && (function(t) {
                        var e = M(t) ? b.call(t) : "";
                        return "[object Function]" == e || "[object GeneratorFunction]" == e
                    }(t) || function(t) {
                        var e = !1;
                        if (null != t && "function" != typeof t.toString) try {
                            e = !!(t + "")
                        } catch (t) {}
                        return e
                    }(t) ? m : n).test(function(t) {
                        if (null != t) {
                            try {
                                return p.call(t)
                            } catch (t) {}
                            try {
                                return t + ""
                            } catch (t) {}
                        }
                        return ""
                    }(t));
                    var e
                }(i) ? i : void 0
            }

            function A(t, e) {
                if ("function" != typeof t || e && "function" != typeof e) throw new TypeError("Expected a function");
                var i = function() {
                    var s = arguments,
                        r = e ? e.apply(this, s) : s[0],
                        n = i.cache;
                    if (n.has(r)) return n.get(r);
                    var o = t.apply(this, s);
                    return i.cache = n.set(r, o), o
                };
                return i.cache = new(A.Cache || _), i
            }

            function M(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }
            E.prototype.clear = function() {
                this.__data__ = x ? x(null) : {}
            }, E.prototype.delete = function(t) {
                return this.has(t) && delete this.__data__[t]
            }, E.prototype.get = function(t) {
                var e = this.__data__;
                if (x) {
                    var i = e[t];
                    return i === r ? void 0 : i
                }
                return v.call(e, t) ? e[t] : void 0
            }, E.prototype.has = function(t) {
                var e = this.__data__;
                return x ? void 0 !== e[t] : v.call(e, t)
            }, E.prototype.set = function(t, e) {
                return this.__data__[t] = x && void 0 === e ? r : e, this
            }, w.prototype.clear = function() {
                this.__data__ = []
            }, w.prototype.delete = function(t) {
                var e = this.__data__,
                    i = O(e, t);
                return !(i < 0 || (i == e.length - 1 ? e.pop() : g.call(e, i, 1), 0))
            }, w.prototype.get = function(t) {
                var e = this.__data__,
                    i = O(e, t);
                return i < 0 ? void 0 : e[i][1]
            }, w.prototype.has = function(t) {
                return O(this.__data__, t) > -1
            }, w.prototype.set = function(t, e) {
                var i = this.__data__,
                    s = O(i, t);
                return s < 0 ? i.push([t, e]) : i[s][1] = e, this
            }, _.prototype.clear = function() {
                this.__data__ = {
                    hash: new E,
                    map: new(y || w),
                    string: new E
                }
            }, _.prototype.delete = function(t) {
                return S(this, t).delete(t)
            }, _.prototype.get = function(t) {
                return S(this, t).get(t)
            }, _.prototype.has = function(t) {
                return S(this, t).has(t)
            }, _.prototype.set = function(t, e) {
                return S(this, t).set(t, e), this
            }, A.Cache = _, t.exports = A
        },
        93096: (t, e, i) => {
            var s = "Expected a function",
                r = /^\s+|\s+$/g,
                n = /^[-+]0x[0-9a-f]+$/i,
                o = /^0b[01]+$/i,
                a = /^0o[0-7]+$/i,
                l = parseInt,
                c = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
                h = "object" == typeof self && self && self.Object === Object && self,
                u = c || h || Function("return this")(),
                f = Object.prototype.toString,
                d = Math.max,
                p = Math.min,
                v = function() {
                    return u.Date.now()
                };

            function b(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function m(t) {
                if ("number" == typeof t) return t;
                if (function(t) {
                        return "symbol" == typeof t || function(t) {
                            return !!t && "object" == typeof t
                        }(t) && "[object Symbol]" == f.call(t)
                    }(t)) return NaN;
                if (b(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = b(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(r, "");
                var i = o.test(t);
                return i || a.test(t) ? l(t.slice(2), i ? 2 : 8) : n.test(t) ? NaN : +t
            }
            t.exports = function(t, e, i) {
                var r = !0,
                    n = !0;
                if ("function" != typeof t) throw new TypeError(s);
                return b(i) && (r = "leading" in i ? !!i.leading : r, n = "trailing" in i ? !!i.trailing : n),
                    function(t, e, i) {
                        var r, n, o, a, l, c, h = 0,
                            u = !1,
                            f = !1,
                            g = !0;
                        if ("function" != typeof t) throw new TypeError(s);

                        function y(e) {
                            var i = r,
                                s = n;
                            return r = n = void 0, h = e, a = t.apply(s, i)
                        }

                        function x(t) {
                            return h = t, l = setTimeout(w, e), u ? y(t) : a
                        }

                        function E(t) {
                            var i = t - c;
                            return void 0 === c || i >= e || i < 0 || f && t - h >= o
                        }

                        function w() {
                            var t = v();
                            if (E(t)) return _(t);
                            l = setTimeout(w, function(t) {
                                var i = e - (t - c);
                                return f ? p(i, o - (t - h)) : i
                            }(t))
                        }

                        function _(t) {
                            return l = void 0, g && r ? y(t) : (r = n = void 0, a)
                        }

                        function O() {
                            var t = v(),
                                i = E(t);
                            if (r = arguments, n = this, c = t, i) {
                                if (void 0 === l) return x(c);
                                if (f) return l = setTimeout(w, e), y(c)
                            }
                            return void 0 === l && (l = setTimeout(w, e)), a
                        }
                        return e = m(e) || 0, b(i) && (u = !!i.leading, o = (f = "maxWait" in i) ? d(m(i.maxWait) || 0, e) : o, g = "trailing" in i ? !!i.trailing : g), O.cancel = function() {
                            void 0 !== l && clearTimeout(l), h = 0, r = c = n = l = void 0
                        }, O.flush = function() {
                            return void 0 === l ? a : _(v())
                        }, O
                    }(t, e, {
                        leading: r,
                        maxWait: e,
                        trailing: n
                    })
            }
        },
        2568: (t, e, i) => {
            var s, r, n, o, a;
            s = i(71012), r = i(40487).utf8, n = i(48738), o = i(40487).bin, (a = function(t, e) {
                t.constructor == String ? t = e && "binary" === e.encoding ? o.stringToBytes(t) : r.stringToBytes(t) : n(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());
                for (var i = s.bytesToWords(t), l = 8 * t.length, c = 1732584193, h = -271733879, u = -1732584194, f = 271733878, d = 0; d < i.length; d++) i[d] = 16711935 & (i[d] << 8 | i[d] >>> 24) | 4278255360 & (i[d] << 24 | i[d] >>> 8);
                i[l >>> 5] |= 128 << l % 32, i[14 + (l + 64 >>> 9 << 4)] = l;
                var p = a._ff,
                    v = a._gg,
                    b = a._hh,
                    m = a._ii;
                for (d = 0; d < i.length; d += 16) {
                    var g = c,
                        y = h,
                        x = u,
                        E = f;
                    c = p(c, h, u, f, i[d + 0], 7, -680876936), f = p(f, c, h, u, i[d + 1], 12, -389564586), u = p(u, f, c, h, i[d + 2], 17, 606105819), h = p(h, u, f, c, i[d + 3], 22, -1044525330), c = p(c, h, u, f, i[d + 4], 7, -176418897), f = p(f, c, h, u, i[d + 5], 12, 1200080426), u = p(u, f, c, h, i[d + 6], 17, -1473231341), h = p(h, u, f, c, i[d + 7], 22, -45705983), c = p(c, h, u, f, i[d + 8], 7, 1770035416), f = p(f, c, h, u, i[d + 9], 12, -1958414417), u = p(u, f, c, h, i[d + 10], 17, -42063), h = p(h, u, f, c, i[d + 11], 22, -1990404162), c = p(c, h, u, f, i[d + 12], 7, 1804603682), f = p(f, c, h, u, i[d + 13], 12, -40341101), u = p(u, f, c, h, i[d + 14], 17, -1502002290), c = v(c, h = p(h, u, f, c, i[d + 15], 22, 1236535329), u, f, i[d + 1], 5, -165796510), f = v(f, c, h, u, i[d + 6], 9, -1069501632), u = v(u, f, c, h, i[d + 11], 14, 643717713), h = v(h, u, f, c, i[d + 0], 20, -373897302), c = v(c, h, u, f, i[d + 5], 5, -701558691), f = v(f, c, h, u, i[d + 10], 9, 38016083), u = v(u, f, c, h, i[d + 15], 14, -660478335), h = v(h, u, f, c, i[d + 4], 20, -405537848), c = v(c, h, u, f, i[d + 9], 5, 568446438), f = v(f, c, h, u, i[d + 14], 9, -1019803690), u = v(u, f, c, h, i[d + 3], 14, -187363961), h = v(h, u, f, c, i[d + 8], 20, 1163531501), c = v(c, h, u, f, i[d + 13], 5, -1444681467), f = v(f, c, h, u, i[d + 2], 9, -51403784), u = v(u, f, c, h, i[d + 7], 14, 1735328473), c = b(c, h = v(h, u, f, c, i[d + 12], 20, -1926607734), u, f, i[d + 5], 4, -378558), f = b(f, c, h, u, i[d + 8], 11, -2022574463), u = b(u, f, c, h, i[d + 11], 16, 1839030562), h = b(h, u, f, c, i[d + 14], 23, -35309556), c = b(c, h, u, f, i[d + 1], 4, -1530992060), f = b(f, c, h, u, i[d + 4], 11, 1272893353), u = b(u, f, c, h, i[d + 7], 16, -155497632), h = b(h, u, f, c, i[d + 10], 23, -1094730640), c = b(c, h, u, f, i[d + 13], 4, 681279174), f = b(f, c, h, u, i[d + 0], 11, -358537222), u = b(u, f, c, h, i[d + 3], 16, -722521979), h = b(h, u, f, c, i[d + 6], 23, 76029189), c = b(c, h, u, f, i[d + 9], 4, -640364487), f = b(f, c, h, u, i[d + 12], 11, -421815835), u = b(u, f, c, h, i[d + 15], 16, 530742520), c = m(c, h = b(h, u, f, c, i[d + 2], 23, -995338651), u, f, i[d + 0], 6, -198630844), f = m(f, c, h, u, i[d + 7], 10, 1126891415), u = m(u, f, c, h, i[d + 14], 15, -1416354905), h = m(h, u, f, c, i[d + 5], 21, -57434055), c = m(c, h, u, f, i[d + 12], 6, 1700485571), f = m(f, c, h, u, i[d + 3], 10, -1894986606), u = m(u, f, c, h, i[d + 10], 15, -1051523), h = m(h, u, f, c, i[d + 1], 21, -2054922799), c = m(c, h, u, f, i[d + 8], 6, 1873313359), f = m(f, c, h, u, i[d + 15], 10, -30611744), u = m(u, f, c, h, i[d + 6], 15, -1560198380), h = m(h, u, f, c, i[d + 13], 21, 1309151649), c = m(c, h, u, f, i[d + 4], 6, -145523070), f = m(f, c, h, u, i[d + 11], 10, -1120210379), u = m(u, f, c, h, i[d + 2], 15, 718787259), h = m(h, u, f, c, i[d + 9], 21, -343485551), c = c + g >>> 0, h = h + y >>> 0, u = u + x >>> 0, f = f + E >>> 0
                }
                return s.endian([c, h, u, f])
            })._ff = function(t, e, i, s, r, n, o) {
                var a = t + (e & i | ~e & s) + (r >>> 0) + o;
                return (a << n | a >>> 32 - n) + e
            }, a._gg = function(t, e, i, s, r, n, o) {
                var a = t + (e & s | i & ~s) + (r >>> 0) + o;
                return (a << n | a >>> 32 - n) + e
            }, a._hh = function(t, e, i, s, r, n, o) {
                var a = t + (e ^ i ^ s) + (r >>> 0) + o;
                return (a << n | a >>> 32 - n) + e
            }, a._ii = function(t, e, i, s, r, n, o) {
                var a = t + (i ^ (e | ~s)) + (r >>> 0) + o;
                return (a << n | a >>> 32 - n) + e
            }, a._blocksize = 16, a._digestsize = 16, t.exports = function(t, e) {
                if (null == t) throw new Error("Illegal argument " + t);
                var i = s.wordsToBytes(a(t, e));
                return e && e.asBytes ? i : e && e.asString ? o.bytesToString(i) : s.bytesToHex(i)
            }
        },
        56884: (t, e, i) => {
            "use strict";
            i.d(e, {
                Z: () => V
            }), i(89554), i(54747);
            var s = i(31807),
                r = i.n(s),
                n = (i(57327), i(66992), i(19601), i(41539), i(91058), i(78783), i(4129), i(33948), i(93096)),
                o = i.n(n),
                a = i(91296),
                l = i.n(a),
                c = i(20773),
                h = i.n(c),
                u = function() {
                    if ("undefined" != typeof Map) return Map;

                    function t(t, e) {
                        var i = -1;
                        return t.some((function(t, s) {
                            return t[0] === e && (i = s, !0)
                        })), i
                    }
                    return function() {
                        function e() {
                            this.__entries__ = []
                        }
                        return Object.defineProperty(e.prototype, "size", {
                            get: function() {
                                return this.__entries__.length
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.get = function(e) {
                            var i = t(this.__entries__, e),
                                s = this.__entries__[i];
                            return s && s[1]
                        }, e.prototype.set = function(e, i) {
                            var s = t(this.__entries__, e);
                            ~s ? this.__entries__[s][1] = i : this.__entries__.push([e, i])
                        }, e.prototype.delete = function(e) {
                            var i = this.__entries__,
                                s = t(i, e);
                            ~s && i.splice(s, 1)
                        }, e.prototype.has = function(e) {
                            return !!~t(this.__entries__, e)
                        }, e.prototype.clear = function() {
                            this.__entries__.splice(0)
                        }, e.prototype.forEach = function(t, e) {
                            void 0 === e && (e = null);
                            for (var i = 0, s = this.__entries__; i < s.length; i++) {
                                var r = s[i];
                                t.call(e, r[1], r[0])
                            }
                        }, e
                    }()
                }(),
                f = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                d = void 0 !== i.g && i.g.Math === Math ? i.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                p = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(d) : function(t) {
                    return setTimeout((function() {
                        return t(Date.now())
                    }), 1e3 / 60)
                },
                v = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                b = "undefined" != typeof MutationObserver,
                m = function() {
                    function t() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                            var i = !1,
                                s = !1,
                                r = 0;

                            function n() {
                                i && (i = !1, t()), s && a()
                            }

                            function o() {
                                p(n)
                            }

                            function a() {
                                var t = Date.now();
                                if (i) {
                                    if (t - r < 2) return;
                                    s = !0
                                } else i = !0, s = !1, setTimeout(o, 20);
                                r = t
                            }
                            return a
                        }(this.refresh.bind(this))
                    }
                    return t.prototype.addObserver = function(t) {
                        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                    }, t.prototype.removeObserver = function(t) {
                        var e = this.observers_,
                            i = e.indexOf(t);
                        ~i && e.splice(i, 1), !e.length && this.connected_ && this.disconnect_()
                    }, t.prototype.refresh = function() {
                        this.updateObservers_() && this.refresh()
                    }, t.prototype.updateObservers_ = function() {
                        var t = this.observers_.filter((function(t) {
                            return t.gatherActive(), t.hasActive()
                        }));
                        return t.forEach((function(t) {
                            return t.broadcastActive()
                        })), t.length > 0
                    }, t.prototype.connect_ = function() {
                        f && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), b ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, t.prototype.disconnect_ = function() {
                        f && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, t.prototype.onTransitionEnd_ = function(t) {
                        var e = t.propertyName,
                            i = void 0 === e ? "" : e;
                        v.some((function(t) {
                            return !!~i.indexOf(t)
                        })) && this.refresh()
                    }, t.getInstance = function() {
                        return this.instance_ || (this.instance_ = new t), this.instance_
                    }, t.instance_ = null, t
                }(),
                g = function(t, e) {
                    for (var i = 0, s = Object.keys(e); i < s.length; i++) {
                        var r = s[i];
                        Object.defineProperty(t, r, {
                            value: e[r],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return t
                },
                y = function(t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || d
                },
                x = S(0, 0, 0, 0);

            function E(t) {
                return parseFloat(t) || 0
            }

            function w(t) {
                for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                return e.reduce((function(e, i) {
                    return e + E(t["border-" + i + "-width"])
                }), 0)
            }
            var _ = "undefined" != typeof SVGGraphicsElement ? function(t) {
                return t instanceof y(t).SVGGraphicsElement
            } : function(t) {
                return t instanceof y(t).SVGElement && "function" == typeof t.getBBox
            };

            function O(t) {
                return f ? _(t) ? function(t) {
                    var e = t.getBBox();
                    return S(0, 0, e.width, e.height)
                }(t) : function(t) {
                    var e = t.clientWidth,
                        i = t.clientHeight;
                    if (!e && !i) return x;
                    var s = y(t).getComputedStyle(t),
                        r = function(t) {
                            for (var e = {}, i = 0, s = ["top", "right", "bottom", "left"]; i < s.length; i++) {
                                var r = s[i],
                                    n = t["padding-" + r];
                                e[r] = E(n)
                            }
                            return e
                        }(s),
                        n = r.left + r.right,
                        o = r.top + r.bottom,
                        a = E(s.width),
                        l = E(s.height);
                    if ("border-box" === s.boxSizing && (Math.round(a + n) !== e && (a -= w(s, "left", "right") + n), Math.round(l + o) !== i && (l -= w(s, "top", "bottom") + o)), ! function(t) {
                            return t === y(t).document.documentElement
                        }(t)) {
                        var c = Math.round(a + n) - e,
                            h = Math.round(l + o) - i;
                        1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(h) && (l -= h)
                    }
                    return S(r.left, r.top, a, l)
                }(t) : x
            }

            function S(t, e, i, s) {
                return {
                    x: t,
                    y: e,
                    width: i,
                    height: s
                }
            }
            var k = function() {
                    function t(t) {
                        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = S(0, 0, 0, 0), this.target = t
                    }
                    return t.prototype.isActive = function() {
                        var t = O(this.target);
                        return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                    }, t.prototype.broadcastRect = function() {
                        var t = this.contentRect_;
                        return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                    }, t
                }(),
                A = function(t, e) {
                    var i, s, r, n, o, a, l, c = (s = (i = e).x, r = i.y, n = i.width, o = i.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(a.prototype), g(l, {
                        x: s,
                        y: r,
                        width: n,
                        height: o,
                        top: r,
                        right: s + n,
                        bottom: o + r,
                        left: s
                    }), l);
                    g(this, {
                        target: t,
                        contentRect: c
                    })
                },
                M = function() {
                    function t(t, e, i) {
                        if (this.activeObservations_ = [], this.observations_ = new u, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = t, this.controller_ = e, this.callbackCtx_ = i
                    }
                    return t.prototype.observe = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof y(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) || (e.set(t, new k(t)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, t.prototype.unobserve = function(t) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(t instanceof y(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var e = this.observations_;
                            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                        }
                    }, t.prototype.disconnect = function() {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, t.prototype.gatherActive = function() {
                        var t = this;
                        this.clearActive(), this.observations_.forEach((function(e) {
                            e.isActive() && t.activeObservations_.push(e)
                        }))
                    }, t.prototype.broadcastActive = function() {
                        if (this.hasActive()) {
                            var t = this.callbackCtx_,
                                e = this.activeObservations_.map((function(t) {
                                    return new A(t.target, t.broadcastRect())
                                }));
                            this.callback_.call(t, e, t), this.clearActive()
                        }
                    }, t.prototype.clearActive = function() {
                        this.activeObservations_.splice(0)
                    }, t.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0
                    }, t
                }(),
                L = "undefined" != typeof WeakMap ? new WeakMap : new u,
                W = function t(e) {
                    if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var i = m.getInstance(),
                        s = new M(e, i, this);
                    L.set(this, s)
                };
            ["observe", "unobserve", "disconnect"].forEach((function(t) {
                W.prototype[t] = function() {
                    var e;
                    return (e = L.get(this))[t].apply(e, arguments)
                }
            }));
            const T = void 0 !== d.ResizeObserver ? d.ResizeObserver : W;
            i(85827), i(68309), i(74916), i(4723), i(15306);
            var C = function(t) {
                return Array.prototype.reduce.call(t, (function(t, e) {
                    var i = e.name.match(/data-simplebar-(.+)/);
                    if (i) {
                        var s = i[1].replace(/\W+(.)/g, (function(t, e) {
                            return e.toUpperCase()
                        }));
                        switch (e.value) {
                            case "true":
                                t[s] = !0;
                                break;
                            case "false":
                                t[s] = !1;
                                break;
                            case void 0:
                                t[s] = !0;
                                break;
                            default:
                                t[s] = e.value
                        }
                    }
                    return t
                }), {})
            };

            function N(t) {
                return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
            }

            function z(t) {
                return t && t.ownerDocument ? t.ownerDocument : document
            }
            var R = null,
                j = null;

            function B(t) {
                if (null === R) {
                    var e = z(t);
                    if (void 0 === e) return R = 0;
                    var i = e.body,
                        s = e.createElement("div");
                    s.classList.add("simplebar-hide-scrollbar"), i.appendChild(s);
                    var r = s.getBoundingClientRect().right;
                    i.removeChild(s), R = r
                }
                return R
            }
            r() && window.addEventListener("resize", (function() {
                j !== window.devicePixelRatio && (j = window.devicePixelRatio, R = null)
            }));
            var D = function() {
                function t(e, i) {
                    var s = this;
                    this.onScroll = function() {
                        var t = N(s.el);
                        s.scrollXTicking || (t.requestAnimationFrame(s.scrollX), s.scrollXTicking = !0), s.scrollYTicking || (t.requestAnimationFrame(s.scrollY), s.scrollYTicking = !0)
                    }, this.scrollX = function() {
                        s.axis.x.isOverflowing && (s.showScrollbar("x"), s.positionScrollbar("x")), s.scrollXTicking = !1
                    }, this.scrollY = function() {
                        s.axis.y.isOverflowing && (s.showScrollbar("y"), s.positionScrollbar("y")), s.scrollYTicking = !1
                    }, this.onMouseEnter = function() {
                        s.showScrollbar("x"), s.showScrollbar("y")
                    }, this.onMouseMove = function(t) {
                        s.mouseX = t.clientX, s.mouseY = t.clientY, (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseMoveForAxis("x"), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseMoveForAxis("y")
                    }, this.onMouseLeave = function() {
                        s.onMouseMove.cancel(), (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseLeaveForAxis("x"), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseLeaveForAxis("y"), s.mouseX = -1, s.mouseY = -1
                    }, this.onWindowResize = function() {
                        s.scrollbarWidth = s.getScrollbarWidth(), s.hideNativeScrollbar()
                    }, this.hideScrollbars = function() {
                        s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect(), s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect(), s.isWithinBounds(s.axis.y.track.rect) || (s.axis.y.scrollbar.el.classList.remove(s.classNames.visible), s.axis.y.isVisible = !1), s.isWithinBounds(s.axis.x.track.rect) || (s.axis.x.scrollbar.el.classList.remove(s.classNames.visible), s.axis.x.isVisible = !1)
                    }, this.onPointerEvent = function(t) {
                        var e, i;
                        s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect(), s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect(), (s.axis.x.isOverflowing || s.axis.x.forceVisible) && (e = s.isWithinBounds(s.axis.x.track.rect)), (s.axis.y.isOverflowing || s.axis.y.forceVisible) && (i = s.isWithinBounds(s.axis.y.track.rect)), (e || i) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (s.axis.x.scrollbar.rect = s.axis.x.scrollbar.el.getBoundingClientRect(), s.isWithinBounds(s.axis.x.scrollbar.rect) ? s.onDragStart(t, "x") : s.onTrackClick(t, "x")), i && (s.axis.y.scrollbar.rect = s.axis.y.scrollbar.el.getBoundingClientRect(), s.isWithinBounds(s.axis.y.scrollbar.rect) ? s.onDragStart(t, "y") : s.onTrackClick(t, "y"))))
                    }, this.drag = function(e) {
                        var i = s.axis[s.draggedAxis].track,
                            r = i.rect[s.axis[s.draggedAxis].sizeAttr],
                            n = s.axis[s.draggedAxis].scrollbar,
                            o = s.contentWrapperEl[s.axis[s.draggedAxis].scrollSizeAttr],
                            a = parseInt(s.elStyles[s.axis[s.draggedAxis].sizeAttr], 10);
                        e.preventDefault(), e.stopPropagation();
                        var l = (("y" === s.draggedAxis ? e.pageY : e.pageX) - i.rect[s.axis[s.draggedAxis].offsetAttr] - s.axis[s.draggedAxis].dragOffset) / (r - n.size) * (o - a);
                        "x" === s.draggedAxis && (l = s.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? l - (r + n.size) : l, l = s.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -l : l), s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] = l
                    }, this.onEndDrag = function(t) {
                        var e = z(s.el),
                            i = N(s.el);
                        t.preventDefault(), t.stopPropagation(), s.el.classList.remove(s.classNames.dragging), e.removeEventListener("mousemove", s.drag, !0), e.removeEventListener("mouseup", s.onEndDrag, !0), s.removePreventClickId = i.setTimeout((function() {
                            e.removeEventListener("click", s.preventClick, !0), e.removeEventListener("dblclick", s.preventClick, !0), s.removePreventClickId = null
                        }))
                    }, this.preventClick = function(t) {
                        t.preventDefault(), t.stopPropagation()
                    }, this.el = e, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, {}, i), this.classNames = Object.assign({}, t.defaultOptions.classNames, {}, this.options.classNames), this.axis = {
                        x: {
                            scrollOffsetAttr: "scrollLeft",
                            sizeAttr: "width",
                            scrollSizeAttr: "scrollWidth",
                            offsetSizeAttr: "offsetWidth",
                            offsetAttr: "left",
                            overflowAttr: "overflowX",
                            dragOffset: 0,
                            isOverflowing: !0,
                            isVisible: !1,
                            forceVisible: !1,
                            track: {},
                            scrollbar: {}
                        },
                        y: {
                            scrollOffsetAttr: "scrollTop",
                            sizeAttr: "height",
                            scrollSizeAttr: "scrollHeight",
                            offsetSizeAttr: "offsetHeight",
                            offsetAttr: "top",
                            overflowAttr: "overflowY",
                            dragOffset: 0,
                            isOverflowing: !0,
                            isVisible: !1,
                            forceVisible: !1,
                            track: {},
                            scrollbar: {}
                        }
                    }, this.removePreventClickId = null, t.instances.has(this.el) || (this.recalculate = o()(this.recalculate.bind(this), 64), this.onMouseMove = o()(this.onMouseMove.bind(this), 64), this.hideScrollbars = l()(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = l()(this.onWindowResize.bind(this), 64, {
                        leading: !0
                    }), t.getRtlHelpers = h()(t.getRtlHelpers), this.init())
                }
                t.getRtlHelpers = function() {
                    var e = document.createElement("div");
                    e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
                    var i = e.firstElementChild;
                    document.body.appendChild(i);
                    var s = i.firstElementChild;
                    i.scrollLeft = 0;
                    var r = t.getOffset(i),
                        n = t.getOffset(s);
                    i.scrollLeft = 999;
                    var o = t.getOffset(s);
                    return {
                        isRtlScrollingInverted: r.left !== n.left && n.left - o.left != 0,
                        isRtlScrollbarInverted: r.left !== n.left
                    }
                }, t.getOffset = function(t) {
                    var e = t.getBoundingClientRect(),
                        i = z(t),
                        s = N(t);
                    return {
                        top: e.top + (s.pageYOffset || i.documentElement.scrollTop),
                        left: e.left + (s.pageXOffset || i.documentElement.scrollLeft)
                    }
                };
                var e = t.prototype;
                return e.init = function() {
                    t.instances.set(this.el, this), r() && (this.initDOM(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
                }, e.initDOM = function() {
                    var t = this;
                    if (Array.prototype.filter.call(this.el.children, (function(e) {
                            return e.classList.contains(t.classNames.wrapper)
                        })).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
                    else {
                        for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                        this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
                    }
                    if (!this.axis.x.track.el || !this.axis.y.track.el) {
                        var e = document.createElement("div"),
                            i = document.createElement("div");
                        e.classList.add(this.classNames.track), i.classList.add(this.classNames.scrollbar), e.appendChild(i), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
                    }
                    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init")
                }, e.initListeners = function() {
                    var t = this,
                        e = N(this.el);
                    this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e) {
                        t.el.addEventListener(e, t.onPointerEvent, !0)
                    })), ["touchstart", "touchend", "touchmove"].forEach((function(e) {
                        t.el.addEventListener(e, t.onPointerEvent, {
                            capture: !0,
                            passive: !0
                        })
                    })), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e.addEventListener("resize", this.onWindowResize);
                    var i = !1,
                        s = e.ResizeObserver || T;
                    this.resizeObserver = new s((function() {
                        i && t.recalculate()
                    })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e.requestAnimationFrame((function() {
                        i = !0
                    })), this.mutationObserver = new e.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }, e.recalculate = function() {
                    var t = N(this.el);
                    this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
                    var e = this.heightAutoObserverEl.offsetHeight <= 1,
                        i = this.heightAutoObserverEl.offsetWidth <= 1,
                        s = this.contentEl.offsetWidth,
                        r = this.contentWrapperEl.offsetWidth,
                        n = this.elStyles.overflowX,
                        o = this.elStyles.overflowY;
                    this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
                    var a = this.contentEl.scrollHeight,
                        l = this.contentEl.scrollWidth;
                    this.contentWrapperEl.style.height = e ? "auto" : "100%", this.placeholderEl.style.width = i ? s + "px" : "auto", this.placeholderEl.style.height = a + "px";
                    var c = this.contentWrapperEl.offsetHeight;
                    this.axis.x.isOverflowing = l > s, this.axis.y.isOverflowing = a > c, this.axis.x.isOverflowing = "hidden" !== n && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== o && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
                    var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                        u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                    this.axis.x.isOverflowing = this.axis.x.isOverflowing && l > r - u, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > c - h, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
                }, e.getScrollbarSize = function(t) {
                    if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing) return 0;
                    var e, i = this.contentEl[this.axis[t].scrollSizeAttr],
                        s = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                        r = s / i;
                    return e = Math.max(~~(r * s), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e
                }, e.positionScrollbar = function(e) {
                    if (void 0 === e && (e = "y"), this.axis[e].isOverflowing) {
                        var i = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
                            s = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
                            r = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                            n = this.axis[e].scrollbar,
                            o = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                            a = (o = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -o : o) / (i - r),
                            l = ~~((s - n.size) * a);
                        l = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? l + (s - n.size) : l, n.el.style.transform = "x" === e ? "translate3d(" + l + "px, 0, 0)" : "translate3d(0, " + l + "px, 0)"
                    }
                }, e.toggleTrackVisibility = function(t) {
                    void 0 === t && (t = "y");
                    var e = this.axis[t].track.el,
                        i = this.axis[t].scrollbar.el;
                    this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? i.style.display = "block" : i.style.display = "none"
                }, e.hideNativeScrollbar = function() {
                    this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
                }, e.onMouseMoveForAxis = function(t) {
                    void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
                }, e.onMouseLeaveForAxis = function(t) {
                    void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
                }, e.showScrollbar = function(t) {
                    void 0 === t && (t = "y");
                    var e = this.axis[t].scrollbar.el;
                    this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars()
                }, e.onDragStart = function(t, e) {
                    void 0 === e && (e = "y");
                    var i = z(this.el),
                        s = N(this.el),
                        r = this.axis[e].scrollbar,
                        n = "y" === e ? t.pageY : t.pageX;
                    this.axis[e].dragOffset = n - r.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), i.addEventListener("mousemove", this.drag, !0), i.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (i.addEventListener("click", this.preventClick, !0), i.addEventListener("dblclick", this.preventClick, !0)) : (s.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
                }, e.onTrackClick = function(t, e) {
                    var i = this;
                    if (void 0 === e && (e = "y"), this.options.clickOnTrack) {
                        var s = N(this.el);
                        this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect();
                        var r = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
                            n = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                            o = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                            a = ("y" === e ? this.mouseY - r : this.mouseX - r) < 0 ? -1 : 1,
                            l = -1 === a ? o - n : o + n;
                        ! function t() {
                            var r, n; - 1 === a ? o > l && (o -= i.options.clickOnTrackSpeed, i.contentWrapperEl.scrollTo(((r = {})[i.axis[e].offsetAttr] = o, r)), s.requestAnimationFrame(t)) : o < l && (o += i.options.clickOnTrackSpeed, i.contentWrapperEl.scrollTo(((n = {})[i.axis[e].offsetAttr] = o, n)), s.requestAnimationFrame(t))
                        }()
                    }
                }, e.getContentElement = function() {
                    return this.contentEl
                }, e.getScrollElement = function() {
                    return this.contentWrapperEl
                }, e.getScrollbarWidth = function() {
                    try {
                        return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : B(this.el)
                    } catch (t) {
                        return B(this.el)
                    }
                }, e.removeListeners = function() {
                    var t = this,
                        e = N(this.el);
                    this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e) {
                        t.el.removeEventListener(e, t.onPointerEvent, !0)
                    })), ["touchstart", "touchend", "touchmove"].forEach((function(e) {
                        t.el.removeEventListener(e, t.onPointerEvent, {
                            capture: !0,
                            passive: !0
                        })
                    })), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
                }, e.unMount = function() {
                    this.removeListeners(), t.instances.delete(this.el)
                }, e.isWithinBounds = function(t) {
                    return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height
                }, e.findChild = function(t, e) {
                    var i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
                    return Array.prototype.filter.call(t.children, (function(t) {
                        return i.call(t, e)
                    }))[0]
                }, t
            }();
            D.defaultOptions = {
                autoHide: !0,
                forceVisible: !1,
                clickOnTrack: !0,
                clickOnTrackSpeed: 40,
                classNames: {
                    contentEl: "simplebar-content",
                    contentWrapper: "simplebar-content-wrapper",
                    offset: "simplebar-offset",
                    mask: "simplebar-mask",
                    wrapper: "simplebar-wrapper",
                    placeholder: "simplebar-placeholder",
                    scrollbar: "simplebar-scrollbar",
                    track: "simplebar-track",
                    heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                    heightAutoObserverEl: "simplebar-height-auto-observer",
                    visible: "simplebar-visible",
                    horizontal: "simplebar-horizontal",
                    vertical: "simplebar-vertical",
                    hover: "simplebar-hover",
                    dragging: "simplebar-dragging"
                },
                scrollbarMinSize: 25,
                scrollbarMaxSize: 0,
                timeout: 1e3
            }, D.instances = new WeakMap, D.initDOMLoadedElements = function() {
                document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), (function(t) {
                    "init" === t.getAttribute("data-simplebar") || D.instances.has(t) || new D(t, C(t.attributes))
                }))
            }, D.removeObserver = function() {
                this.globalObserver.disconnect()
            }, D.initHtmlApi = function() {
                this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(D.handleMutations), this.globalObserver.observe(document, {
                    childList: !0,
                    subtree: !0
                })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
            }, D.handleMutations = function(t) {
                t.forEach((function(t) {
                    Array.prototype.forEach.call(t.addedNodes, (function(t) {
                        1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !D.instances.has(t) && new D(t, C(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"), (function(t) {
                            "init" === t.getAttribute("data-simplebar") || D.instances.has(t) || new D(t, C(t.attributes))
                        })))
                    })), Array.prototype.forEach.call(t.removedNodes, (function(t) {
                        1 === t.nodeType && (t.hasAttribute('[data-simplebar="init"]') ? D.instances.has(t) && D.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), (function(t) {
                            D.instances.has(t) && D.instances.get(t).unMount()
                        })))
                    }))
                }))
            }, D.getOptions = C, r() && D.initHtmlApi();
            const V = D
        }
    }
]);
//# sourceMappingURL=sourcemaps/1916.7355acd5f5cd895479d1.js.map