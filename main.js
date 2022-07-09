(() => {
    var e, t, n, r, i, a, o, s = {
            77823: () => {
                ! function() {
                    var e, t = {
                            resource: {
                                version: "1",
                                macros: [{
                                    function: "__e"
                                }, {
                                    function: "__cid"
                                }],
                                tags: [{
                                    function: "__rep",
                                    once_per_event: !0,
                                    vtp_containerId: ["macro", 1],
                                    tag_id: 1
                                }],
                                predicates: [{
                                    function: "_eq",
                                    arg0: ["macro", 0],
                                    arg1: "gtm.js"
                                }],
                                rules: [
                                    [
                                        ["if", 0],
                                        ["add", 0]
                                    ]
                                ]
                            },
                            runtime: []
                        },
                        n = "function" == typeof Object.create ? Object.create : function(e) {
                            var t = function() {};
                            return t.prototype = e, new t
                        };
                    if ("function" == typeof Object.setPrototypeOf) e = Object.setPrototypeOf;
                    else {
                        var r;
                        e: {
                            var i = {};
                            try {
                                i.__proto__ = {
                                    a: !0
                                }, r = i.a;
                                break e
                            } catch (F) {}
                            r = !1
                        }
                        e = r ? function(e, t) {
                            if (e.__proto__ = t, e.__proto__ !== t) throw new TypeError(e + " is not extensible");
                            return e
                        } : null
                    }
                    var a = e,
                        o = this || self,
                        s = function(e) {
                            return e
                        },
                        c = function(e) {
                            return "function" == typeof e
                        },
                        l = function(e) {
                            return "string" == typeof e
                        },
                        u = function(e) {
                            return "number" == typeof e && !isNaN(e)
                        },
                        d = Array.isArray,
                        f = function(e, t) {
                            return (!u(e) || !u(t) || e > t) && (e = 0, t = 2147483647), Math.floor(Math.random() * (t - e + 1) + e)
                        },
                        p = function(e, t) {
                            for (var n = new w, r = 0; r < e.length; r++) n.set(e[r], !0);
                            for (var i = 0; i < t.length; i++)
                                if (n.get(t[i])) return !0;
                            return !1
                        },
                        v = function(e, t) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
                        },
                        h = function(e) {
                            return !!e && ("[object Arguments]" == Object.prototype.toString.call(e) || Object.prototype.hasOwnProperty.call(e, "callee"))
                        },
                        g = function(e) {
                            return Math.round(Number(e)) || 0
                        },
                        m = function(e) {
                            return "false" != String(e).toLowerCase() && !!e
                        },
                        b = function(e) {
                            var t = [];
                            if (d(e))
                                for (var n = 0; n < e.length; n++) t.push(String(e[n]));
                            return t
                        },
                        y = function() {
                            return new Date(Date.now())
                        },
                        _ = function() {
                            return y().getTime()
                        },
                        w = function() {
                            this.prefix = "gtm.", this.values = {}
                        };
                    w.prototype.set = function(e, t) {
                        this.values[this.prefix + e] = t
                    }, w.prototype.get = function(e) {
                        return this.values[this.prefix + e]
                    };
                    var k, x = function(e) {
                            var t = e;
                            return function() {
                                if (t) {
                                    var e = t;
                                    t = void 0;
                                    try {
                                        e()
                                    } catch (e) {}
                                }
                            }
                        },
                        E = function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        },
                        C = function(e) {
                            for (var t in e)
                                if (e.hasOwnProperty(t)) return !0;
                            return !1
                        },
                        S = function(e, t) {
                            for (var n = [], r = 0; r < e.length; r++) n.push(e[r]), n.push.apply(n, t[e[r]] || []);
                            return n
                        },
                        P = function(e, t) {
                            for (var n = {}, r = n, i = e.split("."), a = 0; a < i.length - 1; a++) r = r[i[a]] = {};
                            return r[i[i.length - 1]] = t, n
                        },
                        O = /^\w{1,9}$/,
                        j = function(e, t) {
                            t = t || ",";
                            var n = [];
                            return v(e = e || {}, (function(e, t) {
                                O.test(e) && t && n.push(e)
                            })), n.join(t)
                        },
                        I = function(e, t) {
                            this.m = t === M ? e : ""
                        };
                    I.prototype.toString = function() {
                        return this.m + ""
                    };
                    var T, M = {},
                        A = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
                    e: {
                        var G = o.navigator;
                        if (G) {
                            var $ = G.userAgent;
                            if ($) {
                                T = $;
                                break e
                            }
                        }
                        T = ""
                    }

                    function N(e) {
                        return -1 != T.indexOf(e)
                    }
                    var L = {},
                        D = function(e, t, n) {
                            this.m = n === L ? e : ""
                        };
                    D.prototype.toString = function() {
                        return this.m.toString()
                    };
                    new D(o.trustedTypes && o.trustedTypes.emptyHTML || "", 0, L);
                    var F, q, V, R = window,
                        U = document,
                        K = navigator,
                        W = U.currentScript && U.currentScript.src,
                        B = function(e, t) {
                            var n = R[e];
                            return R[e] = void 0 === n ? t : n, R[e]
                        },
                        J = {
                            async: 1,
                            nonce: 1,
                            onerror: 1,
                            onload: 1,
                            src: 1,
                            type: 1
                        },
                        H = function(e, t, n, r) {
                            var i = U.createElement("script");
                            return r && v(r, (function(e, t) {
                                    e = e.toLowerCase(), J.hasOwnProperty(e) || i.setAttribute(e, t)
                                })), i.type = "text/javascript", i.async = !0,
                                function(e, t) {
                                    e.src = t instanceof I && t.constructor === I ? t.m : "type_error:TrustedResourceUrl";
                                    var n, r, i = (e.ownerDocument && e.ownerDocument.defaultView || window).document,
                                        a = null === (r = i.querySelector) || void 0 === r ? void 0 : r.call(i, "script[nonce]");
                                    (n = a && (a.nonce || a.getAttribute("nonce")) || "") && e.setAttribute("nonce", n)
                                }(i, function(e) {
                                    var t = function() {
                                            if (void 0 === k) {
                                                var e = null,
                                                    t = o.trustedTypes;
                                                if (t && t.createPolicy) {
                                                    try {
                                                        e = t.createPolicy("goog#html", {
                                                            createHTML: s,
                                                            createScript: s,
                                                            createScriptURL: s
                                                        })
                                                    } catch (e) {
                                                        o.console && o.console.error(e.message)
                                                    }
                                                    k = e
                                                } else k = e
                                            }
                                            return k
                                        }(),
                                        n = t ? t.createScriptURL(e) : e;
                                    return new I(n, M)
                                }(e)),
                                function(e, t) {
                                    t && (e.addEventListener ? e.onload = t : e.onreadystatechange = function() {
                                        e.readyState in {
                                            loaded: 1,
                                            complete: 1
                                        } && (e.onreadystatechange = null, t())
                                    })
                                }(i, t), n && (i.onerror = n),
                                function(e) {
                                    var t = U.getElementsByTagName("script")[0] || U.body || U.head;
                                    t.parentNode.insertBefore(e, t)
                                }(i), i
                        },
                        z = function(e, t, n, r) {
                            e.addEventListener ? e.addEventListener(t, n, !!r) : e.attachEvent && e.attachEvent("on" + t, n)
                        },
                        Z = function(e) {
                            R.setTimeout(e, 0)
                        },
                        Q = function() {
                            return K.userLanguage || K.language
                        },
                        Y = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
                        X = function(e) {
                            if (null == e) return String(e);
                            var t = Y.exec(Object.prototype.toString.call(Object(e)));
                            return t ? t[1].toLowerCase() : "object"
                        },
                        ee = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(Object(e), t)
                        },
                        te = function(e) {
                            if (!e || "object" != X(e) || e.nodeType || e == e.window) return !1;
                            try {
                                if (e.constructor && !ee(e, "constructor") && !ee(e.constructor.prototype, "isPrototypeOf")) return !1
                            } catch (e) {
                                return !1
                            }
                            for (var t in e);
                            return void 0 === t || ee(e, t)
                        },
                        ne = function(e, t) {
                            var n, r = t || ("array" == X(e) ? [] : {});
                            for (n in e)
                                if (ee(e, n)) {
                                    var i = e[n];
                                    "array" == X(i) ? ("array" != X(r[n]) && (r[n] = []), r[n] = ne(i, r[n])) : te(i) ? (te(r[n]) || (r[n] = {}), r[n] = ne(i, r[n])) : r[n] = i
                                } return r
                        },
                        re = function(e) {
                            if (void 0 === e || d(e) || te(e)) return !0;
                            switch (typeof e) {
                                case "boolean":
                                case "number":
                                case "string":
                                case "function":
                                    return !0
                            }
                            return !1
                        },
                        ie = {
                            Wg: (F = function(e) {
                                return {
                                    toString: function() {
                                        return e
                                    }
                                }
                            })("consent"),
                            Xg: F("consent_always_fire"),
                            Ye: F("convert_case_to"),
                            Ze: F("convert_false_to"),
                            $e: F("convert_null_to"),
                            af: F("convert_true_to"),
                            bf: F("convert_undefined_to"),
                            sj: F("debug_mode_metadata"),
                            tj: F("event_data_overrides"),
                            qb: F("function"),
                            Hh: F("instance_name"),
                            Lh: F("live_only"),
                            Mh: F("malware_disabled"),
                            Nh: F("metadata"),
                            uj: F("original_activity_id"),
                            vj: F("original_vendor_template_id"),
                            Rh: F("once_per_event"),
                            Jf: F("once_per_load"),
                            xj: F("priority_override"),
                            yj: F("respected_consent_types"),
                            Nf: F("setup_tags"),
                            Pf: F("tag_id"),
                            Qf: F("teardown_tags")
                        },
                        ae = [],
                        oe = [],
                        se = [],
                        ce = [],
                        le = [],
                        ue = {},
                        de = function(e, t) {
                            var n = e.function;
                            if (!n) throw Error("Error: No function name given for function call.");
                            var r, i = ue[n],
                                a = {};
                            for (r in e) e.hasOwnProperty(r) && (0 === r.indexOf("vtp_") ? (i && t && t.ag && t.ag(e[r]), a[void 0 !== i ? r : r.substr(4)] = e[r]) : r === ie.Xg.toString() && e[r]);
                            return i && t && t.$f && (a.vtp_gtmCachedValues = t.$f), void 0 !== i ? i(a) : (void 0)(n, a, t)
                        },
                        fe = function(e, t, n) {
                            n = n || [];
                            var r, i = {};
                            for (r in e) e.hasOwnProperty(r) && (i[r] = pe(e[r], t, n));
                            return i
                        },
                        pe = function(e, t, n) {
                            var r;
                            if (d(e)) switch (e[0]) {
                                case "function_id":
                                    return e[1];
                                case "list":
                                    r = [];
                                    for (var i = 1; i < e.length; i++) r.push(pe(e[i], t, n));
                                    return r;
                                case "macro":
                                    var a = e[1];
                                    if (n[a]) return;
                                    var o = ae[a];
                                    if (!o || t.Ge(o)) return;
                                    n[a] = !0;
                                    try {
                                        var s = fe(o, t, n);
                                        s.vtp_gtmEventId = t.id, r = de(s, t), V && (r = V.ei(r, s))
                                    } catch (e) {
                                        t.rg && t.rg(e, Number(a)), r = !1
                                    }
                                    return n[a] = !1, r;
                                case "map":
                                    r = {};
                                    for (var c = 1; c < e.length; c += 2) r[pe(e[c], t, n)] = pe(e[c + 1], t, n);
                                    return r;
                                case "template":
                                    r = [];
                                    for (var l = 1; l < e.length; l++) {
                                        var u = pe(e[l], t, n);
                                        r.push(u)
                                    }
                                    return r.join("");
                                case "escape":
                                    r = pe(e[1], t, n), r = String(r);
                                    for (var f = 2; f < e.length; f++) Tb[e[f]] && (r = Tb[e[f]](r));
                                    return r;
                                case "tag":
                                    var p = e[1];
                                    if (!ce[p]) throw Error("Unable to resolve tag reference " + p + ".");
                                    return {
                                        hg: e[2], index: p
                                    };
                                case "zb":
                                    var v = {
                                        arg0: e[2],
                                        arg1: e[3],
                                        ignore_case: e[5]
                                    };
                                    v.function = e[1];
                                    var h = ve(v, t, n),
                                        g = !!e[4];
                                    return g || 2 !== h ? g !== (1 === h) : null;
                                default:
                                    throw Error("Attempting to expand unknown Value type: " + e[0] + ".")
                            }
                            return e
                        },
                        ve = function(e, t, n) {
                            try {
                                return q(fe(e, t, n))
                            } catch (t) {
                                JSON.stringify(e)
                            }
                            return 2
                        },
                        he = function(e, t) {
                            for (var n = e.if || [], r = 0; r < n.length; r++) {
                                var i = t(n[r]);
                                if (0 === i) return !1;
                                if (2 === i) return null
                            }
                            for (var a = e.unless || [], o = 0; o < a.length; o++) {
                                var s = t(a[o]);
                                if (2 === s) return null;
                                if (1 === s) return !1
                            }
                            return !0
                        },
                        ge = {
                            ei: function(e, t) {
                                return t[ie.Ye] && "string" == typeof e && (e = 1 == t[ie.Ye] ? e.toLowerCase() : e.toUpperCase()), t.hasOwnProperty(ie.$e) && null === e && (e = t[ie.$e]), t.hasOwnProperty(ie.bf) && void 0 === e && (e = t[ie.bf]), t.hasOwnProperty(ie.af) && !0 === e && (e = t[ie.af]), t.hasOwnProperty(ie.Ze) && !1 === e && (e = t[ie.Ze]), e
                            }
                        },
                        me = {
                            ic: "_ee",
                            fd: "_syn_or_mod",
                            zj: "_uei",
                            ae: "_eu",
                            wj: "_pci",
                            Hb: "event_callback",
                            Pc: "event_timeout",
                            Aa: "gtag.config",
                            Ia: "gtag.get",
                            va: "purchase",
                            Eb: "refund",
                            ib: "begin_checkout",
                            Cb: "add_to_cart",
                            Db: "remove_from_cart",
                            gh: "view_cart",
                            df: "add_to_wishlist",
                            wa: "view_item",
                            jb: "view_promotion",
                            Lc: "select_promotion",
                            Ed: "select_item",
                            Ua: "view_item_list",
                            cf: "add_payment_info",
                            fh: "add_shipping_info",
                            Ka: "value_key",
                            Wa: "value_callback",
                            Ba: "allow_ad_personalization_signals",
                            bc: "restricted_data_processing",
                            Xb: "allow_google_signals",
                            na: "cookie_expires",
                            Gb: "cookie_update",
                            cc: "session_duration",
                            Vc: "session_engaged_time",
                            Ma: "user_properties",
                            qa: "transport_url",
                            R: "ads_data_redaction",
                            xa: "user_data",
                            $b: "first_party_collection",
                            C: "ad_storage",
                            H: "analytics_storage",
                            We: "region",
                            Xe: "wait_for_update",
                            ma: "conversion_linker",
                            Ca: "conversion_cookie_prefix",
                            ca: "value",
                            aa: "currency",
                            Ff: "trip_type",
                            V: "items",
                            xf: "passengers",
                            Hd: "allow_custom_scripts",
                            fc: "session_id",
                            Cf: "quantity",
                            Ya: "transaction_id",
                            mb: "language",
                            Nc: "country",
                            Mc: "allow_enhanced_conversions",
                            Md: "aw_merchant_id",
                            Kd: "aw_feed_country",
                            Ld: "aw_feed_language",
                            Jd: "discount",
                            ba: "developer_id",
                            Wc: "delivery_postal_code",
                            Sd: "estimated_delivery_date",
                            Qd: "shipping",
                            Xd: "new_customer",
                            Nd: "customer_lifetime_value",
                            Rd: "enhanced_conversions",
                            Wb: "page_view",
                            fa: "linker",
                            N: "domains",
                            Kb: "decorate_forms",
                            tf: "enhanced_conversions_automatic_settings",
                            ph: "auto_detection_enabled",
                            uf: "ga_temp_client_id",
                            Fd: "user_engagement",
                            $g: "app_remove",
                            ah: "app_store_refund",
                            bh: "app_store_subscription_cancel",
                            dh: "app_store_subscription_convert",
                            eh: "app_store_subscription_renew",
                            hh: "first_open",
                            ih: "first_visit",
                            jh: "in_app_purchase",
                            kh: "session_start",
                            lh: "user_data_login",
                            mh: "user_data_logout",
                            nh: "allow_display_features",
                            Yb: "campaign",
                            ff: "campaign_content",
                            hf: "campaign_id",
                            jf: "campaign_medium",
                            kf: "campaign_name",
                            lf: "campaign_source",
                            nf: "campaign_term",
                            kb: "client_id",
                            da: "cookie_domain",
                            Fb: "cookie_name",
                            Va: "cookie_path",
                            Da: "cookie_flags",
                            Zb: "custom_map",
                            Ud: "groups",
                            wf: "non_interaction",
                            nb: "page_location",
                            Yd: "page_path",
                            La: "page_referrer",
                            Tc: "page_title",
                            Lb: "send_page_view",
                            ob: "send_to",
                            Zd: "session_engaged",
                            Sc: "_logged_in_state",
                            $d: "session_number",
                            Dh: "tracking_id",
                            Za: "url_passthrough",
                            Jb: "accept_incoming",
                            ac: "url_position",
                            Af: "phone_conversion_number",
                            yf: "phone_conversion_callback",
                            zf: "phone_conversion_css_class",
                            Bf: "phone_conversion_options",
                            Ah: "phone_conversion_ids",
                            zh: "phone_conversion_country_code",
                            ef: "aw_remarketing",
                            Id: "aw_remarketing_only",
                            Gd: "gclid",
                            oh: "auid",
                            uh: "affiliation",
                            sf: "tax",
                            Pd: "list_name",
                            rf: "checkout_step",
                            qf: "checkout_option",
                            vh: "coupon",
                            wh: "promotions",
                            pb: "user_id",
                            Bh: "retoken",
                            oa: "cookie_prefix",
                            pf: "disable_merchant_reported_purchases",
                            th: "dc_natural_search",
                            sh: "dc_custom_params",
                            vf: "method",
                            Ch: "search_term",
                            rh: "content_type",
                            yh: "optimize_id",
                            xh: "experiments",
                            Xa: "google_signals",
                            Rc: "google_tld",
                            Xc: "update",
                            Td: "firebase_id",
                            Ib: "ga_restrict_domain",
                            Oc: "event_settings",
                            Od: "dynamic_event_settings",
                            hc: "user_data_settings",
                            Df: "screen_name",
                            Ja: "_x_19",
                            lb: "_ecid",
                            Qc: "_x_20",
                            Wd: "internal_traffic_results",
                            Ef: "traffic_type",
                            Uc: "referral_exclusion_definition",
                            Vd: "ignore_referrer",
                            qh: "content_group"
                        },
                        be = {};
                    me.Hf = Object.freeze((be[me.cf] = 1, be[me.fh] = 1, be[me.Cb] = 1, be[me.Db] = 1, be[me.gh] = 1, be[me.ib] = 1, be[me.Ed] = 1, be[me.Ua] = 1, be[me.Lc] = 1, be[me.jb] = 1, be[me.va] = 1, be[me.Eb] = 1, be[me.wa] = 1, be[me.df] = 1, be)), me.ce = Object.freeze([me.Ba, me.Xb, me.Gb]), me.Ph = Object.freeze([].concat(me.ce)), me.de = Object.freeze([me.na, me.Pc, me.cc, me.Vc]), me.Qh = Object.freeze([].concat(me.de));
                    var ye = {},
                        _e = function(e, t) {
                            ye[e] = ye[e] || [], ye[e][t] = !0
                        },
                        we = function(e) {
                            for (var t = [], n = ye[e] || [], r = 0; r < n.length; r++) n[r] && (t[Math.floor(r / 6)] ^= 1 << r % 6);
                            for (var i = 0; i < t.length; i++) t[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[i] || 0);
                            return t.join("")
                        },
                        ke = function(e) {
                            _e("GTM", e)
                        },
                        xe = {},
                        Ee = null;
                    Math.random(), xe.J = "", xe.dd = "ar0", xe.Zg = "ChAI8KD+iwYQtKvDkfrgmtJxEicAe+PCrnBlHEVjBpfSU594OjouW5P8kdWbNboxqG5h6xfDOieOacMaAgzw";
                    var Ce, Se = {
                            __cl: !0,
                            __ecl: !0,
                            __ehl: !0,
                            __evl: !0,
                            __fal: !0,
                            __fil: !0,
                            __fsl: !0,
                            __hl: !0,
                            __jel: !0,
                            __lcl: !0,
                            __sdl: !0,
                            __tl: !0,
                            __ytl: !0
                        },
                        Pe = {
                            __paused: !0,
                            __tg: !0
                        };
                    for (Ce in Se) Se.hasOwnProperty(Ce) && (Pe[Ce] = !0);
                    xe.Cd = "www.googletagmanager.com", xe.Cd;
                    var Oe = xe.Cd + "/gtag/js",
                        je = (m(""), null),
                        Ie = null,
                        Te = "https://www.googletagmanager.com/a?id=" + xe.J + "&cv=1",
                        Me = {},
                        Ae = {},
                        Ge = function() {
                            var e = Ee.sequence || 1;
                            return Ee.sequence = e + 1, e
                        };
                    xe.Yg = "", xe.ed = "";
                    var $e = {},
                        Ne = new w,
                        Le = {},
                        De = {},
                        Fe = {
                            name: "dataLayer",
                            set: function(e, t) {
                                ne(P(e, t), Le), Ue()
                            },
                            get: function(e) {
                                return qe(e, 2)
                            },
                            reset: function() {
                                Ne = new w, Le = {}, Ue()
                            }
                        },
                        qe = function(e, t) {
                            return 2 != t ? Ne.get(e) : Ve(e)
                        },
                        Ve = function(e) {
                            var t, n = e.split(".");
                            t = t || [];
                            for (var r = Le, i = 0; i < n.length; i++) {
                                if (null === r) return !1;
                                if (void 0 === r) break;
                                if (r = r[n[i]], -1 !== t.indexOf(r)) return
                            }
                            return r
                        },
                        Re = function(e, t) {
                            De.hasOwnProperty(e) || (Ne.set(e, t), ne(P(e, t), Le), Ue())
                        },
                        Ue = function(e) {
                            v(De, (function(t, n) {
                                Ne.set(t, n), ne(P(t, void 0), Le), ne(P(t, n), Le), e && delete De[t]
                            }))
                        },
                        Ke = function(e, t, n) {
                            $e[e] = $e[e] || {}, $e[e][t] = We(t, n)
                        },
                        We = function(e, t) {
                            var n = 1 !== (void 0 === t ? 2 : t) ? Ve(e) : Ne.get(e);
                            return "array" === X(n) || "object" === X(n) ? ne(n) : n
                        },
                        Be = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
                        Je = {
                            cl: ["ecl"],
                            customPixels: ["nonGooglePixels"],
                            ecl: ["cl"],
                            ehl: ["hl"],
                            hl: ["ehl"],
                            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
                            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
                            nonGooglePixels: [],
                            nonGoogleScripts: ["nonGooglePixels"],
                            nonGoogleIframes: ["nonGooglePixels"]
                        },
                        He = {
                            cl: ["ecl"],
                            customPixels: ["customScripts", "html"],
                            ecl: ["cl"],
                            ehl: ["hl"],
                            hl: ["ehl"],
                            html: ["customScripts"],
                            customScripts: ["html"],
                            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
                            nonGoogleScripts: ["customScripts", "html"],
                            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
                        },
                        ze = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
                        Ze = function(e) {
                            var t = qe("gtm.allowlist") || qe("gtm.whitelist");
                            t && ke(9);
                            var n = (t = "google gtagfl lcl zone oid op".split(" ")) && S(b(t), Je),
                                r = qe("gtm.blocklist") || qe("gtm.blacklist");
                            r || (r = qe("tagTypeBlacklist")) && ke(3), r ? ke(8) : r = [], Qe() && (r = b(r)).push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"), 0 <= b(r).indexOf("google") && ke(2);
                            var i = r && S(b(r), He),
                                a = {};
                            return function(o) {
                                var s = o && o[ie.qb];
                                if (!s || "string" != typeof s) return !0;
                                if (s = s.replace(/^_*/, ""), void 0 !== a[s]) return a[s];
                                var c = Ae[s] || [],
                                    l = e(s, c);
                                if (t) {
                                    var u;
                                    if (u = l) e: {
                                        if (0 > n.indexOf(s)) {
                                            if (!(c && 0 < c.length)) {
                                                u = !1;
                                                break e
                                            }
                                            for (var d = 0; d < c.length; d++)
                                                if (0 > n.indexOf(c[d])) {
                                                    ke(11), u = !1;
                                                    break e
                                                }
                                        }
                                        u = !0
                                    }
                                    l = u
                                }
                                var f = !1;
                                if (r) {
                                    var v = 0 <= i.indexOf(s);
                                    if (v) f = v;
                                    else {
                                        var h = p(i, c || []);
                                        h && ke(10), f = h
                                    }
                                }
                                var g = !l || f;
                                return g || !(0 <= c.indexOf("sandboxedScripts")) || n && -1 !== n.indexOf("sandboxedScripts") || (g = p(i, ze)), a[s] = g
                            }
                        },
                        Qe = function() {
                            return Be.test(R.location && R.location.hostname)
                        },
                        Ye = {
                            active: !0,
                            isAllowed: function() {
                                return !0
                            }
                        },
                        Xe = function(e) {
                            var t = Ee.zones;
                            return t ? t.checkState(xe.J, e) : Ye
                        },
                        et = function(e) {
                            this.m = e, this.defaultValue = !1
                        },
                        tt = new et(1933),
                        nt = new et(1956),
                        rt = function() {
                            var e = it;
                            if (e.Ee && e.hasOwnProperty("Ee")) return e.Ee;
                            var t = new e;
                            return e.Ee = t, e.hasOwnProperty("Ee"), t
                        },
                        it = function() {
                            var e = {};
                            this.m = function(t, n) {
                                return null != e[t] ? e[t] : n
                            }, this.o = function() {
                                e[tt.m] = !0
                            }
                        },
                        at = function(e) {
                            return rt().m(e.m, e.defaultValue)
                        },
                        ot = [];

                    function st() {
                        var e = B("google_tag_data", {});
                        return e.ics || (e.ics = {
                            entries: {},
                            set: ct,
                            update: lt,
                            addListener: ut,
                            notifyListeners: ft,
                            active: !1,
                            usedDefault: !1
                        }), e.ics
                    }

                    function ct(e, t, n, r, i, a) {
                        var o = st();
                        if (o.active = !0, o.usedDefault = !0, null != t) {
                            var s = o.entries,
                                c = s[e] || {},
                                u = c.region,
                                d = n && l(n) ? n.toUpperCase() : void 0;
                            if (r = r.toUpperCase(), i = i.toUpperCase(), "" === r || d === i || (d === r ? u !== i : !d && !u)) {
                                var f = !!(a && 0 < a && void 0 === c.update),
                                    p = {
                                        region: d,
                                        initial: "granted" === t,
                                        update: c.update,
                                        quiet: f
                                    };
                                "" === r && !1 === c.initial || (s[e] = p), f && R.setTimeout((function() {
                                    s[e] === p && p.quiet && (p.quiet = !1, dt(e), ft(), _e("TAGGING", 2))
                                }), a)
                            }
                        }
                    }

                    function lt(e, t) {
                        var n = st();
                        if (n.active = !0, null != t) {
                            var r = pt(e),
                                i = n.entries,
                                a = i[e] = i[e] || {};
                            a.update = "granted" === t;
                            var o = pt(e);
                            a.quiet ? (a.quiet = !1, dt(e)) : o !== r && dt(e)
                        }
                    }

                    function ut(e, t) {
                        ot.push({
                            ve: e,
                            ui: t
                        })
                    }

                    function dt(e) {
                        for (var t = 0; t < ot.length; ++t) {
                            var n = ot[t];
                            d(n.ve) && -1 !== n.ve.indexOf(e) && (n.xg = !0)
                        }
                    }

                    function ft(e) {
                        for (var t = 0; t < ot.length; ++t) {
                            var n = ot[t];
                            if (n.xg) {
                                n.xg = !1;
                                try {
                                    n.ui({
                                        consentEventId: e
                                    })
                                } catch (e) {}
                            }
                        }
                    }
                    var pt = function(e) {
                            var t = st().entries[e] || {};
                            return void 0 !== t.update ? t.update : t.initial
                        },
                        vt = function(e) {
                            return !(st().entries[e] || {}).quiet
                        },
                        ht = function() {
                            return !!at(tt) && st().active
                        },
                        gt = function(e, t) {
                            st().addListener(e, t)
                        },
                        mt = function(e, t) {
                            function n() {
                                for (var e = [], t = 0; t < r.length; t++) {
                                    var n = r[t];
                                    !1 === pt(n) || i[n] || (e.push(n), i[n] = !0)
                                }
                                return e
                            }
                            var r = l(t) ? [t] : t,
                                i = {};
                            n().length !== r.length && gt(r, (function(t) {
                                var r = n();
                                0 < r.length && (t.ve = r, e(t))
                            }))
                        };
                    var bt = [me.C, me.H],
                        yt = function(e) {
                            var t = e[me.We];
                            t && ke(40);
                            var n = e[me.Xe];
                            n && ke(41);
                            for (var r = d(t) ? t : [t], i = {
                                    Tb: 0
                                }; i.Tb < r.length; ++(i = {
                                    Tb: i.Tb
                                }).Tb) v(e, function(e) {
                                return function(t, i) {
                                    if (t !== me.We && t !== me.Xe) {
                                        var a = r[e.Tb];
                                        st().set(t, i, a, "US", "US-IL", n)
                                    }
                                }
                            }(i))
                        },
                        _t = 0,
                        wt = function(e, t) {
                            v(e, (function(e, t) {
                                    st().update(e, t)
                                })),
                                function(e) {
                                    st().notifyListeners(e)
                                }(t);
                            var n = _(),
                                r = n - _t;
                            _t && 0 <= r && 1e3 > r && ke(66), _t = n
                        },
                        kt = function(e) {
                            var t = pt(e);
                            return null == t || t
                        };
                    if (U.querySelectorAll) try {
                        var xt = U.querySelectorAll(":root");
                        xt && 1 == xt.length && (xt[0], U.documentElement)
                    } catch (F) {}
                    var Et = function() {
                        this.eventModel = {}, this.targetConfig = {}, this.containerConfig = {}, this.globalConfig = {}, this.remoteConfig = {}, this.onSuccess = function() {}, this.onFailure = function() {}, this.setContainerTypeLoaded = function() {}, this.getContainerTypeLoaded = function() {}, this.eventId = void 0, this.isGtmEvent = !1
                    };
                    Et.prototype.getWithConfig = function(e) {
                        return void 0 !== this.eventModel[e] ? this.eventModel[e] : void 0 !== this.targetConfig[e] ? this.targetConfig[e] : void 0 !== this.containerConfig[e] ? this.containerConfig[e] : void 0 !== this.globalConfig[e] ? this.globalConfig[e] : void 0 !== this.remoteConfig[e] ? this.remoteConfig[e] : void 0
                    };
                    var Ct = function(e, t, n) {
                            function r(e) {
                                te(e) && v(e, (function(e, t) {
                                    a = !0, i[e] = t
                                }))
                            }
                            var i = {},
                                a = !1;
                            return n && 1 !== n || (r(e.remoteConfig[t]), r(e.globalConfig[t]), r(e.containerConfig[t]), r(e.targetConfig[t])), n && 2 !== n || r(e.eventModel[t]), a ? i : void 0
                        },
                        St = /:[0-9]+$/,
                        Pt = function(e, t, n) {
                            for (var r = e.split("&"), i = 0; i < r.length; i++) {
                                var a = r[i].split("=");
                                if (decodeURIComponent(a[0]).replace(/\+/g, " ") === t) {
                                    var o = a.slice(1).join("=");
                                    return n ? o : decodeURIComponent(o).replace(/\+/g, " ")
                                }
                            }
                        },
                        Ot = function(e, t, n, r, i) {
                            return t && (t = String(t).toLowerCase()), "protocol" !== t && "port" !== t || (e.protocol = It(e.protocol) || It(R.location.protocol)), "port" === t ? e.port = String(Number(e.hostname ? e.port : R.location.port) || ("http" == e.protocol ? 80 : "https" == e.protocol ? 443 : "")) : "host" === t && (e.hostname = (e.hostname || R.location.hostname).replace(St, "").toLowerCase()), jt(e, t, n, r, i)
                        },
                        jt = function(e, t, n, r, i) {
                            var a, o = It(e.protocol);
                            switch (t && (t = String(t).toLowerCase()), t) {
                                case "url_no_fragment":
                                    a = Tt(e);
                                    break;
                                case "protocol":
                                    a = o;
                                    break;
                                case "host":
                                    if (a = e.hostname.replace(St, "").toLowerCase(), n) {
                                        var s = /^www\d*\./.exec(a);
                                        s && s[0] && (a = a.substr(s[0].length))
                                    }
                                    break;
                                case "port":
                                    a = String(Number(e.port) || ("http" == o ? 80 : "https" == o ? 443 : ""));
                                    break;
                                case "path":
                                    e.pathname || e.hostname || _e("TAGGING", 1);
                                    var c = (a = "/" == e.pathname.substr(0, 1) ? e.pathname : "/" + e.pathname).split("/");
                                    0 <= (r || []).indexOf(c[c.length - 1]) && (c[c.length - 1] = ""), a = c.join("/");
                                    break;
                                case "query":
                                    a = e.search.replace("?", ""), i && (a = Pt(a, i, void 0));
                                    break;
                                case "extension":
                                    var l = e.pathname.split(".");
                                    a = (a = 1 < l.length ? l[l.length - 1] : "").split("/")[0];
                                    break;
                                case "fragment":
                                    a = e.hash.replace("#", "");
                                    break;
                                default:
                                    a = e && e.href
                            }
                            return a
                        },
                        It = function(e) {
                            return e ? e.replace(":", "").toLowerCase() : ""
                        },
                        Tt = function(e) {
                            var t = "";
                            if (e && e.href) {
                                var n = e.href.indexOf("#");
                                t = 0 > n ? e.href : e.href.substr(0, n)
                            }
                            return t
                        },
                        Mt = function(e) {
                            var t = U.createElement("a");
                            e && (t.href = e);
                            var n = t.pathname;
                            "/" !== n[0] && (e || _e("TAGGING", 1), n = "/" + n);
                            var r = t.hostname.replace(St, "");
                            return {
                                href: t.href,
                                protocol: t.protocol,
                                host: t.host,
                                hostname: r,
                                pathname: n,
                                search: t.search,
                                hash: t.hash,
                                port: t.port
                            }
                        };
                    var At, Gt, $t = function(e, t, n, r) {
                            return Lt(r) ? function(e, t, n) {
                                for (var r = [], i = t.split(";"), a = 0; a < i.length; a++) {
                                    var o = i[a].split("="),
                                        s = o[0].replace(/^\s*|\s*$/g, "");
                                    if (s && s == e) {
                                        var c = o.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                                        c && n && (c = decodeURIComponent(c)), r.push(c)
                                    }
                                }
                                return r
                            }(e, String(t || Nt()), n) : []
                        },
                        Nt = function() {
                            return function(e) {
                                return "null" !== e.origin
                            }(window) ? window.document.cookie : ""
                        },
                        Lt = function(e) {
                            if (!at(tt) || !e || !ht()) return !0;
                            if (!vt(e)) return !1;
                            var t = pt(e);
                            return null == t || !!t
                        };

                    function Dt(e) {
                        At = At || function() {
                            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                            return (e += e.toLowerCase() + "0123456789-_") + "."
                        }(), Gt = Gt || function() {
                            for (var e = At, t = {}, n = 0; n < e.length; ++n) t[e[n]] = n;
                            return t
                        }();
                        for (var t = [], n = 0; n < e.length; n += 3) {
                            var r = n + 1 < e.length,
                                i = n + 2 < e.length,
                                a = e.charCodeAt(n),
                                o = r ? e.charCodeAt(n + 1) : 0,
                                s = i ? e.charCodeAt(n + 2) : 0,
                                c = a >> 2,
                                l = (3 & a) << 4 | o >> 4,
                                u = (15 & o) << 2 | s >> 6,
                                d = 63 & s;
                            i || (d = 64, r || (u = 64)), t.push(At[c], At[l], At[u], At[d])
                        }
                        return t.join("")
                    }
                    var Ft, qt = function(e) {
                            var t;
                            if (!(t = Ft)) {
                                for (var n = Array(256), r = 0; 256 > r; r++) {
                                    for (var i = r, a = 0; 8 > a; a++) i = 1 & i ? i >>> 1 ^ 3988292384 : i >>> 1;
                                    n[r] = i
                                }
                                t = n
                            }
                            Ft = t;
                            for (var o = 4294967295, s = 0; s < e.length; s++) o = o >>> 8 ^ Ft[255 & (o ^ e.charCodeAt(s))];
                            return (-1 ^ o) >>> 0
                        },
                        Vt = function(e, t, n) {
                            for (var r = Rt().decorators, i = {}, a = 0; a < r.length; ++a) {
                                var o, s = r[a];
                                if (o = !n || s.forms) e: {
                                    var c = s.domains,
                                        l = e,
                                        u = !!s.sameHost;
                                    if (c && (u || l !== U.location.hostname))
                                        for (var d = 0; d < c.length; d++)
                                            if (c[d] instanceof RegExp) {
                                                if (c[d].test(l)) {
                                                    o = !0;
                                                    break e
                                                }
                                            } else if (0 <= l.indexOf(c[d]) || u && 0 <= c[d].indexOf(l)) {
                                        o = !0;
                                        break e
                                    }
                                    o = !1
                                }
                                if (o) {
                                    var f = s.placement;
                                    null == f && (f = s.fragment ? 2 : 1), f === t && E(i, s.callback())
                                }
                            }
                            return i
                        };

                    function Rt() {
                        var e = B("google_tag_data", {}),
                            t = e.gl;
                        return t && t.decorators || (t = {
                            decorators: []
                        }, e.gl = t), t
                    }
                    var Ut = /([^?#]+)(\?[^#]*)?(#.*)?/;
                    var Kt = function(e, t) {
                        var n, r = [];
                        for (n in e)
                            if (e.hasOwnProperty(n)) {
                                var i = e[n];
                                void 0 !== i && i == i && null !== i && "[object Object]" !== i.toString() && (r.push(n), r.push(Dt(String(i))))
                            } var a = r.join("*");
                        if (void 0 !== t) {
                            var o = "xp_" + t,
                                s = Jt[t](a);
                            a = a + "*" + [o, Dt(String(s))].join("*")
                        }
                        return ["1", Wt(a), a].join("*")
                    };

                    function Wt(e, t) {
                        var n = [R.navigator.userAgent, (new Date).getTimezoneOffset(), Q(), Math.floor(_() / 60 / 1e3) - (void 0 === t ? 0 : t), e].join("*");
                        return qt(n).toString(36)
                    }
                    var Bt = {},
                        Jt = (Bt[1] = function(e, t) {
                            var n = [(new Date).getTimezoneOffset(), Q(), Math.floor(_() / 60 / 1e3) - (void 0 === t ? 0 : t), e].join("*");
                            return qt(n).toString(36)
                        }, Bt[2] = function(e, t) {
                            if (K.userAgentData) {
                                var n = [(new Date).getTimezoneOffset(), Q(), Math.floor(_() / 60 / 1e3) - (void 0 === t ? 0 : t), K.userAgentData.brands, K.userAgentData.mobile, K.userAgentData.platform, e].join("*");
                                return qt(n).toString(36)
                            }
                        }, Bt);

                    function Ht(e, t, n, r) {
                        function i(t) {
                            var n = t,
                                r = function(e) {
                                    return new RegExp("(.*?)(^|&)" + e + "=([^&]*)&?(.*)")
                                }(e).exec(n),
                                i = n;
                            if (r) {
                                var a = r[2],
                                    o = r[4];
                                i = r[1], o && (i = i + a + o)
                            }
                            var s = (t = i).charAt(t.length - 1);
                            return t && "&" !== s && (t += "&"), t + l
                        }
                        r = void 0 !== r && r;
                        var a = Ut.exec(n);
                        if (!a) return "";
                        var o = a[1],
                            s = a[2] || "",
                            c = a[3] || "",
                            l = e + "=" + t;
                        return r ? c = "#" + i(c.substring(1)) : s = "?" + i(s.substring(1)), "" + o + s + c
                    }

                    function zt(e, t) {
                        var n = "FORM" === (e.tagName || "").toUpperCase(),
                            r = Vt(t, 1, n),
                            i = Vt(t, 2, n),
                            a = Vt(t, 3, n);
                        if (C(r)) {
                            var o = Kt(r, void 0);
                            n ? Qt("_gl", o, e) : Zt("_gl", o, e, !1)
                        }
                        for (var s in !n && C(i) && Zt("_gl", Kt(i), e, !0), a)
                            if (a.hasOwnProperty(s)) e: {
                                var c = s,
                                    l = a[s],
                                    u = e;
                                if (u.tagName) {
                                    if ("a" === u.tagName.toLowerCase()) {
                                        Zt(c, l, u, void 0);
                                        break e
                                    }
                                    if ("form" === u.tagName.toLowerCase()) {
                                        Qt(c, l, u);
                                        break e
                                    }
                                }
                                "string" == typeof u && Ht(c, l, u, void 0)
                            }
                    }

                    function Zt(e, t, n, r) {
                        if (n.href) {
                            var i = Ht(e, t, n.href, void 0 !== r && r);
                            A.test(i) && (n.href = i)
                        }
                    }

                    function Qt(e, t, n) {
                        if (n && n.action) {
                            var r = (n.method || "").toLowerCase();
                            if ("get" === r) {
                                for (var i = n.childNodes || [], a = !1, o = 0; o < i.length; o++) {
                                    var s = i[o];
                                    if (s.name === e) {
                                        s.setAttribute("value", t), a = !0;
                                        break
                                    }
                                }
                                if (!a) {
                                    var c = U.createElement("input");
                                    c.setAttribute("type", "hidden"), c.setAttribute("name", e), c.setAttribute("value", t), n.appendChild(c)
                                }
                            } else if ("post" === r) {
                                var l = Ht(e, t, n.action);
                                A.test(l) && (n.action = l)
                            }
                        }
                    }

                    function Yt(e) {
                        try {
                            var t;
                            e: {
                                for (var n = e, r = 100; n && 0 < r;) {
                                    if (n.href && n.nodeName.match(/^a(?:rea)?$/i)) {
                                        t = n;
                                        break e
                                    }
                                    n = n.parentNode, r--
                                }
                                t = null
                            }
                            var i = t;
                            if (i) {
                                var a = i.protocol;
                                "http:" !== a && "https:" !== a || zt(i, i.hostname)
                            }
                        } catch (e) {}
                    }

                    function Xt(e) {
                        try {
                            e.action && zt(e, Ot(Mt(e.action), "host"))
                        } catch (e) {}
                    }
                    var en = function(e, t) {
                            (function() {
                                var e = Yt,
                                    t = Xt,
                                    n = Rt(),
                                    r = function(t) {
                                        e(t.target || t.srcElement || {})
                                    };
                                if (!n.init) {
                                    z(U, "mousedown", r), z(U, "keyup", r), z(U, "submit", (function(e) {
                                        t(e.target || e.srcElement || {})
                                    }));
                                    var i = HTMLFormElement.prototype.submit;
                                    HTMLFormElement.prototype.submit = function() {
                                        t(this), i.call(this)
                                    }, n.init = !0
                                }
                            })(),
                            function(e, t, n, r, i) {
                                var a = {
                                    callback: e,
                                    domains: t,
                                    fragment: 2 === n,
                                    placement: n,
                                    forms: r,
                                    sameHost: i
                                };
                                Rt().decorators.push(a)
                            }(e, [jt(R.location, "host", !0)], t, !0, !0)
                        },
                        tn = {},
                        nn = /^[\w-]+$/,
                        rn = function(e, t, n, r) {
                            var i = {},
                                a = function(e, t) {
                                    i[t] || (i[t] = []), i[t].push(e)
                                };
                            if (i.gclid = e, i.gclsrc = t, i.dclid = n, void 0 !== r && nn.test(r) && (i.gbraid = r, a(r, "gb")), void 0 !== e && e.match(nn)) switch (t) {
                                case void 0:
                                    a(e, "aw");
                                    break;
                                case "aw.ds":
                                    a(e, "aw"), a(e, "dc");
                                    break;
                                case "ds":
                                case "3p.ds":
                                    a(e, "dc");
                                    break;
                                case "gf":
                                    a(e, "gf");
                                    break;
                                case "ha":
                                    a(e, "ha")
                            }
                            return n && a(n, "dc"), i
                        },
                        an = !1,
                        on = 0,
                        sn = [];

                    function cn(e) {
                        if (!an) {
                            var t = U.createEventObject,
                                n = "complete" == U.readyState,
                                r = "interactive" == U.readyState;
                            if (!e || "readystatechange" != e.type || n || !t && r) {
                                an = !0;
                                for (var i = 0; i < sn.length; i++) Z(sn[i])
                            }
                            sn.push = function() {
                                for (var e = 0; e < arguments.length; e++) Z(arguments[e]);
                                return 0
                            }
                        }
                    }

                    function ln() {
                        if (!an && 140 > on) {
                            on++;
                            try {
                                U.documentElement.doScroll("left"), cn()
                            } catch (e) {
                                R.setTimeout(ln, 50)
                            }
                        }
                    }
                    var un, dn = function(e, t) {
                            this.m = !1, this.D = [], this.I = {
                                tags: []
                            }, this.Z = !1, this.o = this.s = 0, vn(this, e, t)
                        },
                        fn = function(e, t, n, r) {
                            var i = e.I.tags[t];
                            i && (i.status = n, i.executionTime = r)
                        },
                        pn = function(e) {
                            if (!e.m) {
                                for (var t = e.D, n = 0; n < t.length; n++) t[n]();
                                e.m = !0, e.D.length = 0
                            }
                        },
                        vn = function(e, t, n) {
                            c(t) && hn(e, t), n && R.setTimeout((function() {
                                return pn(e)
                            }), Number(n))
                        },
                        hn = function(e, t) {
                            var n = x((function() {
                                return Z((function() {
                                    t(xe.J, e.I)
                                }))
                            }));
                            e.m ? n() : e.D.push(n)
                        },
                        gn = function(e) {
                            return e.s++, x((function() {
                                e.o++, e.Z && e.o >= e.s && pn(e)
                            }))
                        },
                        mn = function() {
                            function e(e) {
                                return !u(e) || 0 > e ? 0 : e
                            }
                            if (!Ee._li && R.performance && R.performance.timing) {
                                var t = R.performance.timing.navigationStart,
                                    n = u(Fe.get("gtm.start")) ? Fe.get("gtm.start") : 0;
                                Ee._li = {
                                    cst: e(n - t),
                                    cbt: e(Ie - t)
                                }
                            }
                        },
                        bn = function() {
                            return R.GoogleAnalyticsObject && R[R.GoogleAnalyticsObject]
                        },
                        yn = function(e) {
                            R.GoogleAnalyticsObject || (R.GoogleAnalyticsObject = e || "ga");
                            var t = R.GoogleAnalyticsObject;
                            if (R[t]) R.hasOwnProperty(t) || ke(12);
                            else {
                                var n = function() {
                                    n.q = n.q || [], n.q.push(arguments)
                                };
                                n.l = Number(y()), R[t] = n
                            }
                            return mn(), R[t]
                        },
                        _n = function(e) {
                            if (ht()) {
                                var t = bn();
                                t(e + "require", "linker"), t(e + "linker:passthrough", !0)
                            }
                        },
                        wn = function() {
                            2022 <= En().length && xn()
                        },
                        kn = function() {
                            Fn || (Fn = R.setTimeout(xn, 500))
                        },
                        xn = function() {
                            Fn && (R.clearTimeout(Fn), Fn = void 0), void 0 === Nn || In[Nn] && !Tn && !Mn || (Dn[Nn] || Vn.Ii() || 0 >= Rn-- ? (ke(1), Dn[Nn] = !0) : (Vn.cj(), function(e, t, n) {
                                var r = new Image(1, 1);
                                r.onload = function() {
                                    r.onload = null, t && t()
                                }, r.onerror = function() {
                                    r.onerror = null, n && n()
                                }, r.src = e
                            }(En(!0)), In[Nn] = !0, An = Gn = $n = Mn = Tn = ""))
                        },
                        En = function(e) {
                            var t = Nn;
                            if (void 0 === t) return "";
                            var n = we("GTM"),
                                r = we("TAGGING");
                            return [jn, In[t] ? "" : "&es=1", Ln[t], void 0, n ? "&u=" + n : "", r ? "&ut=" + r : "", "&tc=" + ce.filter((function(e) {
                                return e
                            })).length, Tn, Mn, $n, Gn, void 0, An, "&z=0"].join("")
                        },
                        Cn = function() {
                            jn = Sn()
                        },
                        Sn = function() {
                            return [Te, "&v=3&t=t", "&pid=" + f(), "&rv=" + xe.dd].join("")
                        },
                        Pn = {
                            sampleRate: "0.005000",
                            Rg: "",
                            Qg: Number("5")
                        };
                    (un = 0 <= U.location.search.indexOf("?gtm_latency=") || 0 <= U.location.search.indexOf("&gtm_latency=")) || (un = Math.random() < Pn.sampleRate);
                    var On = un,
                        jn = (xe.J, Sn()),
                        In = {},
                        Tn = "",
                        Mn = "",
                        An = "",
                        Gn = "",
                        $n = "",
                        Nn = void 0,
                        Ln = {},
                        Dn = {},
                        Fn = void 0,
                        qn = 5;
                    0 < Pn.Qg && (qn = Pn.Qg);
                    var Vn = function(e, t) {
                            for (var n = 0, r = [], i = 0; i < e; ++i) r.push(0);
                            return {
                                Ii: function() {
                                    return !(n < e) && _() - r[n % e] < 1e3
                                },
                                cj: function() {
                                    var t = n++ % e;
                                    r[t] = _()
                                }
                            }
                        }(qn),
                        Rn = 1e3,
                        Un = function(e, t, n, r) {
                            if (On && t) {
                                var i, a = String(t[ie.qb] || "").replace(/_/g, "");
                                0 === a.indexOf("cvt") && (a = "cvt");
                                var o = n + (i = a);
                                if (!Dn[e]) {
                                    e !== Nn && (xn(), Nn = e), Tn = Tn ? Tn + "." + o : "&tr=" + o;
                                    var s = t.function;
                                    if (!s) throw Error("Error: No function name given for function call.");
                                    var c = (ue[s] ? "1" : "2") + i;
                                    An = An ? An + "." + c : "&ti=" + c, kn(), wn()
                                }
                            }
                        },
                        Kn = function(e, t, n) {
                            if (On && !Dn[e]) {
                                e !== Nn && (xn(), Nn = e);
                                var r = n + t;
                                Mn = Mn ? Mn + "." + r : "&epr=" + r, kn(), wn()
                            }
                        };

                    function Wn(e, t, n, r) {
                        var i = ce[e],
                            a = function(e, t, n, r) {
                                function i() {
                                    if (a[ie.Mh]) s();
                                    else {
                                        var t = fe(a, n, []),
                                            r = t[ie.Wg];
                                        if (null != r)
                                            for (var i = 0; i < r.length; i++)
                                                if (!kt(r[i])) return void s();
                                        var c = function(e, t, n, r) {
                                                if (Pe.hasOwnProperty(t) || "__zone" === t) return -1;
                                                var i = {};
                                                return te(r) && (i = ne(r, i)), i.id = n, i.status = "timeout", e.I.tags.push(i) - 1
                                            }(n.rb, String(a[ie.qb]), Number(a[ie.Pf]), t[ie.Nh]),
                                            l = !1;
                                        t.vtp_gtmOnSuccess = function() {
                                            if (!l) {
                                                l = !0;
                                                var t = _() - u;
                                                Un(n.id, ce[e], "5"), fn(n.rb, c, "success", t), o()
                                            }
                                        }, t.vtp_gtmOnFailure = function() {
                                            if (!l) {
                                                l = !0;
                                                var t = _() - u;
                                                Un(n.id, ce[e], "6"), fn(n.rb, c, "failure", t), s()
                                            }
                                        }, t.vtp_gtmTagId = a.tag_id, t.vtp_gtmEventId = n.id, Un(n.id, a, "1");
                                        var u = _();
                                        try {
                                            de(t, n)
                                        } catch (e) {
                                            ! function() {
                                                var e = _() - u;
                                                Un(n.id, a, "7"), fn(n.rb, c, "exception", e), l || (l = !0, s())
                                            }()
                                        }
                                    }
                                }
                                var a = ce[e],
                                    o = t.onSuccess,
                                    s = t.onFailure,
                                    c = t.terminate;
                                if (n.Ge(a)) return null;
                                var l = pe(a[ie.Qf], n, []);
                                if (l && l.length) {
                                    var u = l[0],
                                        d = Wn(u.index, {
                                            onSuccess: o,
                                            onFailure: s,
                                            terminate: c
                                        }, n, r);
                                    if (!d) return null;
                                    o = d, s = 2 === u.hg ? c : d
                                }
                                if (a[ie.Jf] || a[ie.Rh]) {
                                    var f = a[ie.Jf] ? le : n.mj,
                                        p = o,
                                        v = s;
                                    if (!f[e]) {
                                        i = x(i);
                                        var h = function(e, t, n) {
                                            var r = [],
                                                i = [];
                                            return t[e] = function(e, t, n) {
                                                return function(r, i) {
                                                    e.push(r), t.push(i), n()
                                                }
                                            }(r, i, n), {
                                                onSuccess: function() {
                                                    t[e] = Bn;
                                                    for (var n = 0; n < r.length; n++) r[n]()
                                                },
                                                onFailure: function() {
                                                    t[e] = Jn;
                                                    for (var n = 0; n < i.length; n++) i[n]()
                                                }
                                            }
                                        }(e, f, i);
                                        o = h.onSuccess, s = h.onFailure
                                    }
                                    return function() {
                                        f[e](p, v)
                                    }
                                }
                                return i
                            }(e, t, n, r);
                        if (!a) return null;
                        var o = pe(i[ie.Nf], n, []);
                        if (o && o.length) {
                            var s = o[0];
                            a = Wn(s.index, {
                                onSuccess: a,
                                onFailure: 1 === s.hg ? t.terminate : a,
                                terminate: t.terminate
                            }, n, r)
                        }
                        return a
                    }

                    function Bn(e) {
                        e()
                    }

                    function Jn(e, t) {
                        t()
                    }

                    function Hn(e, t) {
                        var n, r, i = t.yg,
                            a = e.yg;
                        if (0 != (n = i > a ? 1 : i < a ? -1 : 0)) r = n;
                        else {
                            var o = e.Jg,
                                s = t.Jg;
                            r = o > s ? 1 : o < s ? -1 : 0
                        }
                        return r
                    }

                    function zn(e, t) {
                        if (On) {
                            var n = function(e) {
                                var r = t.Ge(ce[e]) ? "3" : "4",
                                    i = pe(ce[e][ie.Nf], t, []);
                                i && i.length && n(i[0].index), Un(t.id, ce[e], r);
                                var a = pe(ce[e][ie.Qf], t, []);
                                a && a.length && n(a[0].index)
                            };
                            n(e)
                        }
                    }
                    var Zn = !1,
                        Qn = function(e) {
                            _();
                            var t = e["gtm.uniqueEventId"],
                                n = e.event;
                            if ("gtm.js" === n) {
                                if (Zn) return !1;
                                Zn = !0
                            }
                            var r = Xe(t),
                                i = !1;
                            if (!r.active) {
                                if ("gtm.js" !== n) return !1;
                                i = !0, r = Xe(Number.MAX_SAFE_INTEGER)
                            }! function(e, t) {
                                On && !Dn[e] && Nn !== e && (xn(), Nn = e, An = Tn = "", Ln[e] = "&e=" + function(e) {
                                    return 0 === e.indexOf("gtm.") ? encodeURIComponent(e) : "*"
                                }(t) + "&eid=" + e, kn())
                            }(t, n);
                            var a = e.eventCallback,
                                o = e.eventTimeout,
                                s = a,
                                c = {
                                    id: t,
                                    name: n,
                                    Ge: Ze(r.isAllowed),
                                    mj: [],
                                    rg: function() {
                                        ke(6)
                                    },
                                    ag: function(e) {
                                        On && re(e)
                                    },
                                    rb: new dn(s, o)
                                };
                            c.$f = function() {
                                    var e = {};
                                    return e.event = We("event", 1), e.ecommerce = We("ecommerce", 1), e.gtm = We("gtm"), e.eventModel = We("eventModel"), e
                                }(),
                                function(e, t) {
                                    Ke(e, "event", 1), Ke(e, "ecommerce", 1), Ke(e, "gtm"), Ke(e, "eventModel")
                                }(t, c.rb);
                            var l = function(e) {
                                function t(e) {
                                    for (var t = 0; t < e.length; t++) r[e[t]] = !0
                                }
                                for (var n = [], r = [], i = function(e) {
                                        var t = [];
                                        return function(n) {
                                            return void 0 === t[n] && (t[n] = ve(se[n], e)), t[n]
                                        }
                                    }(e), a = 0; a < oe.length; a++) {
                                    var o = oe[a],
                                        s = he(o, i);
                                    if (s) {
                                        for (var c = o.add || [], l = 0; l < c.length; l++) n[c[l]] = !0;
                                        t(o.block || [])
                                    } else null === s && t(o.block || [])
                                }
                                for (var u = [], d = 0; d < ce.length; d++) n[d] && !r[d] && (u[d] = !0);
                                return u
                            }(c);
                            i && (l = function(e) {
                                for (var t = [], n = 0; n < e.length; n++) e[n] && Se[String(ce[n][ie.qb])] && (t[n] = !0);
                                return t
                            }(l));
                            var u = function(e, t) {
                                for (var n = [], r = 0; r < ce.length; r++)
                                    if (e[r]) {
                                        var i = ce[r],
                                            a = gn(t.rb);
                                        try {
                                            var o = Wn(r, {
                                                onSuccess: a,
                                                onFailure: a,
                                                terminate: a
                                            }, t, r);
                                            if (o) {
                                                var s = n,
                                                    c = s.push,
                                                    l = r,
                                                    u = i.function;
                                                if (!u) throw "Error: No function name given for function call.";
                                                var d = ue[u];
                                                c.call(s, {
                                                    Jg: l,
                                                    yg: d && d.priorityOverride || 0,
                                                    execute: o
                                                })
                                            } else zn(r, t), a()
                                        } catch (e) {
                                            a()
                                        }
                                    } var f = t.rb;
                                f.Z = !0, f.o >= f.s && pn(f), n.sort(Hn);
                                for (var p = 0; p < n.length; p++) n[p].execute();
                                return 0 < n.length
                            }(l, c);
                            return "gtm.js" !== n && "gtm.sync" !== n || xe.J,
                                function(e, t) {
                                    if (!t) return t;
                                    for (var n = 0; n < e.length; n++)
                                        if (e[n] && ce[n] && !Pe[String(ce[n][ie.qb])]) return !0;
                                    return !1
                                }(l, u)
                        };

                    function Yn() {
                        return !!xe.ed && "SGTM_TOKEN" !== xe.ed.replaceAll("@@", "")
                    }
                    var Xn = {
                            "": "n",
                            UA: "u",
                            AW: "a",
                            DC: "d",
                            G: "e",
                            GF: "f",
                            HA: "h",
                            GTM: (xe.dd.length, "g"),
                            OPT: "o"
                        },
                        er = function(e) {
                            var t = xe.J.split("-"),
                                n = t[0].toUpperCase(),
                                r = Xn[n] || "i",
                                i = e && "GTM" === n || "OPT" === n ? t[1] : "";
                            return (3 === xe.dd.length ? "2o" : "") + r + xe.dd + i
                        };

                    function tr(e, t) {
                        if ("" === e) return t;
                        var n = Number(e);
                        return isNaN(n) ? t : n
                    }

                    function nr() {
                        return N("iPhone") && !N("iPod") && !N("iPad")
                    }
                    N("Opera"), N("Trident") || N("MSIE"), N("Edge"), !N("Gecko") || -1 != T.toLowerCase().indexOf("webkit") && !N("Edge") || N("Trident") || N("MSIE") || N("Edge"), -1 != T.toLowerCase().indexOf("webkit") && !N("Edge") && N("Mobile"), N("Macintosh"), N("Windows"), N("Linux") || N("CrOS");
                    var rr = o.navigator || null;
                    rr && (rr.appVersion || "").indexOf("X11"), N("Android"), nr(), N("iPad"), N("iPod"), nr() || N("iPad") || N("iPod"), T.toLowerCase().indexOf("kaios");
                    var ir = function(e) {
                            return void 0 !== e.addtlConsent && "string" != typeof e.addtlConsent && (e.addtlConsent = void 0), void 0 !== e.gdprApplies && "boolean" != typeof e.gdprApplies && (e.gdprApplies = void 0), void 0 !== e.tcString && "string" != typeof e.tcString || void 0 !== e.listenerId && "number" != typeof e.listenerId ? 2 : e.cmpStatus && "error" !== e.cmpStatus ? 0 : 3
                        },
                        ar = function(e, t) {
                            this.o = e, this.m = null, this.D = {}, this.Z = 0, this.I = void 0 === t ? 500 : t, this.s = null
                        };
                    ! function(e, t) {
                        if (e.prototype = n(t.prototype), e.prototype.constructor = e, a) a(e, t);
                        else
                            for (var r in t)
                                if ("prototype" != r)
                                    if (Object.defineProperties) {
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && Object.defineProperty(e, r, i)
                                    } else e[r] = t[r];
                        e.Gj = t.prototype
                    }(ar, (function() {})), ar.prototype.addEventListener = function(e) {
                        var t = {},
                            n = function(e) {
                                var t = e;
                                return function() {
                                    if (t) {
                                        var e = t;
                                        t = null, e()
                                    }
                                }
                            }((function() {
                                return e(t)
                            })),
                            r = 0; - 1 !== this.I && (r = setTimeout((function() {
                            t.tcString = "tcunavailable", t.internalErrorState = 1, n()
                        }), this.I));
                        try {
                            cr(this, "addEventListener", (function(n, i) {
                                clearTimeout(r), n ? ((t = n).internalErrorState = ir(t), i && 0 === t.internalErrorState || (t.tcString = "tcunavailable", i || (t.internalErrorState = 3))) : (t.tcString = "tcunavailable", t.internalErrorState = 3), e(t)
                            }))
                        } catch (e) {
                            t.tcString = "tcunavailable", t.internalErrorState = 3, r && (clearTimeout(r), r = 0), n()
                        }
                    }, ar.prototype.removeEventListener = function(e) {
                        e && e.listenerId && cr(this, "removeEventListener", null, e.listenerId)
                    };
                    var or = function(e, t, n) {
                            var r, i;
                            r = void 0 === r ? "755" : r;
                            e: {
                                if (e.publisher && e.publisher.restrictions) {
                                    var a = e.publisher.restrictions[t];
                                    if (void 0 !== a) {
                                        i = a[void 0 === r ? "755" : r];
                                        break e
                                    }
                                }
                                i = void 0
                            }
                            if (0 === i) return !1;
                            var o, s = n;
                            if (2 === n ? (s = 0, 2 === i && (s = 1)) : 3 === n && (s = 1, 1 === i && (s = 0)), 0 === s)
                                if (e.purpose && e.vendor) {
                                    var c = sr(e.vendor.consents, void 0 === r ? "755" : r);
                                    o = !(!c || "1" !== t || !e.purposeOneTreatment || (at(nt) || "DE" !== e.publisherCC) && "CH" !== e.publisherCC) || c && sr(e.purpose.consents, t)
                                } else o = !0;
                            else o = 1 !== s || !e.purpose || !e.vendor || sr(e.purpose.legitimateInterests, t) && sr(e.vendor.legitimateInterests, void 0 === r ? "755" : r);
                            return o
                        },
                        sr = function(e, t) {
                            return !(!e || !e[t])
                        },
                        cr = function(e, t, n, r) {
                            if (n || (n = function() {}), "function" == typeof e.o.__tcfapi)(0, e.o.__tcfapi)(t, 2, n, r);
                            else if (lr(e)) {
                                ur(e);
                                var i = ++e.Z;
                                if (e.D[i] = n, e.m) {
                                    var a = {};
                                    e.m.postMessage((a.__tcfapiCall = {
                                        command: t,
                                        version: 2,
                                        callId: i,
                                        parameter: r
                                    }, a), "*")
                                }
                            } else n({}, !1)
                        },
                        lr = function(e) {
                            return e.m || (e.m = function(e, t) {
                                for (var n = e, r = 0; 50 > r; ++r) {
                                    var i, a;
                                    try {
                                        i = !(!n.frames || !n.frames.__tcfapiLocator)
                                    } catch (e) {
                                        i = !1
                                    }
                                    if (i) return n;
                                    e: {
                                        try {
                                            var o = n.parent;
                                            if (o && o != n) {
                                                a = o;
                                                break e
                                            }
                                        } catch (e) {}
                                        a = null
                                    }
                                    if (!(n = a)) break
                                }
                                return null
                            }(e.o)), e.m
                        },
                        ur = function(e) {
                            e.s || (e.s = function(t) {
                                try {
                                    var n;
                                    n = ("string" == typeof t.data ? JSON.parse(t.data) : t.data).__tcfapiReturn, e.D[n.callId](n.returnValue, n.success)
                                } catch (e) {}
                            }, function(e, t) {
                                e.addEventListener && e.addEventListener.call(e, "message", t, !1)
                            }(e.o, e.s))
                        },
                        dr = {
                            1: 0,
                            3: 0,
                            4: 0,
                            7: 3,
                            9: 3,
                            10: 3
                        },
                        fr = tr("", 550);

                    function pr() {
                        var e = Ee.tcf || {};
                        return Ee.tcf = e
                    }
                    tr("", 500);
                    var vr = function(e, t) {
                            this.s = e, this.m = t, this.o = _()
                        },
                        hr = function() {
                            var e = pr(),
                                t = new ar(R, -1);
                            if (new vr(t, e), (mr() ? !0 === R.gtag_enable_tcf_support : !1 !== R.gtag_enable_tcf_support) && !e.active && ("function" == typeof R.__tcfapi || function(e) {
                                    return "function" == typeof e.o.__tcfapi || null != lr(e)
                                }(t))) {
                                e.active = !0, e.Cc = {},
                                    function() {
                                        var e = {},
                                            t = (e.ad_storage = "denied", e.wait_for_update = fr, e);
                                        yt(t)
                                    }();
                                var n = null;
                                e.tcString = "tcunavailable";
                                try {
                                    t.addEventListener((function(r) {
                                        if (n && (clearTimeout(n), n = null), 0 !== r.internalErrorState) gr(e), br(e);
                                        else {
                                            var i;
                                            if (e.gdprApplies = r.gdprApplies, !1 === r.gdprApplies) i = function() {
                                                var e, t = {};
                                                for (e in dr) dr.hasOwnProperty(e) && (t[e] = !0);
                                                return t
                                            }(), t.removeEventListener(r);
                                            else if ("tcloaded" === r.eventStatus || "useractioncomplete" === r.eventStatus || "cmpuishown" === r.eventStatus) {
                                                var a, o = {};
                                                for (a in dr)
                                                    if (dr.hasOwnProperty(a))
                                                        if ("1" === a) {
                                                            var s, c, l = r,
                                                                u = !0;
                                                            u = void 0 !== u && u;
                                                            var d = l;
                                                            !1 === d.gdprApplies ? c = !0 : (void 0 === d.internalErrorState && (d.internalErrorState = ir(d)), c = "error" === d.cmpStatus || 0 !== d.internalErrorState || "loaded" === d.cmpStatus && ("tcloaded" === d.eventStatus || "useractioncomplete" === d.eventStatus)), s = !!c && (!1 === l.gdprApplies || "tcunavailable" === l.tcString || void 0 === l.gdprApplies && !u || "string" != typeof l.tcString || !l.tcString.length || or(l, "1", 0)), o[1] = s
                                                        } else o[a] = or(r, a, dr[a]);
                                                i = o
                                            }
                                            i && (e.tcString = r.tcString || "tcempty", e.Cc = i, br(e))
                                        }
                                    }))
                                } catch (t) {
                                    n && (clearTimeout(n), n = null), gr(e), br(e)
                                }
                            }
                        };

                    function gr(e) {
                        e.type = "e", e.tcString = "tcunavailable"
                    }
                    var mr = function() {
                        return !0
                    };

                    function br(e) {
                        var t = {},
                            n = (t.ad_storage = e.Cc[1] ? "granted" : "denied", t);
                        wt(n, 0, (e && e.gdprApplies, _r()))
                    }
                    var yr, _r = function() {
                            var e = pr();
                            return e.active && e.tcString || ""
                        },
                        wr = function(e) {
                            if (!dr.hasOwnProperty(String(e))) return !0;
                            var t = pr();
                            return !t.active || !t.Cc || !!t.Cc[String(e)]
                        },
                        kr = /[A-Z]+/,
                        xr = /\s/,
                        Er = function(e) {
                            if (l(e)) {
                                var t = (e = function(e) {
                                    return e ? e.replace(/^\s+|\s+$/g, "") : ""
                                }(e)).indexOf("-");
                                if (!(0 > t)) {
                                    var n = e.substring(0, t);
                                    if (kr.test(n)) {
                                        for (var r = e.substring(t + 1).split("/"), i = 0; i < r.length; i++)
                                            if (!r[i] || xr.test(r[i]) && ("AW" !== n || 1 !== i)) return;
                                        return {
                                            id: e,
                                            prefix: n,
                                            containerId: n + "-" + r[0],
                                            M: r
                                        }
                                    }
                                }
                            }
                        },
                        Cr = function() {
                            var e, t = function() {
                                if (W) {
                                    var e = W.toLowerCase();
                                    if (0 === e.indexOf("https://")) return 2;
                                    if (0 === e.indexOf("http://")) return 3
                                }
                                return 1
                            }();
                            if (1 === t) e: {
                                for (var n = Oe, r = "https://" + (n = n.toLowerCase()), i = "http://" + n, a = 1, o = U.getElementsByTagName("script"), s = 0; s < o.length && 100 > s; s++) {
                                    var c = o[s].src;
                                    if (c) {
                                        if (0 === (c = c.toLowerCase()).indexOf(i)) {
                                            e = 3;
                                            break e
                                        }
                                        1 === a && 0 === c.indexOf(r) && (a = 2)
                                    }
                                }
                                e = a
                            }
                            else e = t;
                            return e
                        },
                        Sr = function(e, t, n) {
                            if (R[e.functionName]) return t.Le && Z(t.Le), R[e.functionName];
                            var r = Pr();
                            if (R[e.functionName] = r, e.hd)
                                for (var i = 0; i < e.hd.length; i++) R[e.hd[i]] = R[e.hd[i]] || Pr();
                            return e.td && void 0 === R[e.td] && (R[e.td] = n), H(function(e, t, n, r) {
                                return (2 === Cr() || r || "http:" != R.location.protocol ? e : t) + n
                            }("https://", "http://", e.Re), t.Le, t.Ti), r
                        },
                        Pr = function() {
                            var e = function() {
                                e.q = e.q || [], e.q.push(arguments)
                            };
                            return e
                        },
                        Or = {
                            functionName: "_googWcmImpl",
                            td: "_googWcmAk",
                            Re: "www.gstatic.com/wcm/loader.js"
                        },
                        jr = {
                            functionName: "_gaPhoneImpl",
                            td: "ga_wpid",
                            Re: "www.gstatic.com/gaphone/loader.js"
                        },
                        Ir = {
                            functionName: "_googCallTrackingImpl",
                            hd: [jr.functionName, Or.functionName],
                            Re: "www.gstatic.com/call-tracking/call-tracking_5.js"
                        },
                        Tr = {},
                        Mr = function(e, t, n, r) {
                            if (ke(22), n) {
                                var i = Sr(Or, r = r || {}, e),
                                    a = {
                                        ak: e,
                                        cl: t
                                    };
                                void 0 === r.Pa && (a.autoreplace = n), i(2, r.Pa, a, n, 0, y(), r.options)
                            }
                        },
                        Ar = function(e, t, n, r) {
                            if (ke(21), t && n) {
                                r = r || {};
                                for (var i = {
                                        countryNameCode: n,
                                        destinationNumber: t,
                                        retrievalTime: y()
                                    }, a = 0; a < e.length; a++) {
                                    var o = e[a];
                                    Tr[o.id] || (o && "AW" === o.prefix && !i.adData && 2 <= o.M.length ? (i.adData = {
                                        ak: o.M[0],
                                        cl: o.M[1]
                                    }, Tr[o.id] = !0) : o && "UA" === o.prefix && !i.gaData && (i.gaData = {
                                        gaWpid: o.containerId
                                    }, Tr[o.id] = !0))
                                }(i.gaData || i.adData) && Sr(Ir, r)(r.Pa, i, r.options)
                            }
                        },
                        Gr = function(e, t, n) {
                            if (ht() && (!n.isGtmEvent || !qr[e])) {
                                var r = !kt(me.H),
                                    i = function() {
                                        var i, a, o, s = bn(),
                                            c = pi(t, "", n),
                                            l = c.ja._useUp;
                                        if (n.isGtmEvent || mi(t, c.ja)) {
                                            var u = !0;
                                            n.isGtmEvent && (i = "gtm" + Ge(), a = c.ja, c.gtmTrackerName && (a.name = i), u = !1, u = !0), u && s((function() {
                                                var e = s.getByName(t);
                                                e && (o = e.get("clientId")), n.isGtmEvent || s.remove(t)
                                            })), s("create", e, n.isGtmEvent ? a : c.ja), r && kt(me.H) && (r = !1, s((function() {
                                                var e = bn().getByName(n.isGtmEvent ? i : t);
                                                !e || e.get("clientId") == o && l || (n.isGtmEvent ? c.qc["&gcu"] = "1" : c.ka["&gcu"] = "1", e.set(c.qc), n.isGtmEvent ? e.send("pageview") : e.send("pageview", c.ka))
                                            }))), n.isGtmEvent && s((function() {
                                                s.remove(i)
                                            }))
                                        }
                                    };
                                mt(i, me.H), mt(i, me.C), n.isGtmEvent && (qr[e] = !0)
                            }
                        },
                        $r = function(e, t, n) {
                            function r() {
                                if (m.displayfeatures) {
                                    var e = "_dc_gtm_" + a.replace(/[^A-Za-z0-9-]/g, "");
                                    p("require", "displayfeatures", void 0, {
                                        cookieName: e
                                    })
                                }
                            }
                            var i, a = e,
                                o = "https://www.google-analytics.com/analytics.js",
                                s = n.isGtmEvent ? yn(n.getWithConfig("gaFunctionName")) : yn();
                            if (c(s)) {
                                var u, f = bn;
                                u = n.isGtmEvent ? n.getWithConfig("name") || n.getWithConfig("gtmTrackerName") : "gtag_" + a.split("-").join("_");
                                var p = function(e) {
                                        var t = [].slice.call(arguments, 0);
                                        t[0] = u ? u + "." + t[0] : "" + t[0], s.apply(window, t)
                                    },
                                    v = function(e) {
                                        var r = function(e, t) {
                                                for (var n = 0; t && n < t.length; n++) p(e, t[n])
                                            },
                                            i = n.isGtmEvent,
                                            a = i ? vi(m) : hi(t, n);
                                        if (a) {
                                            var o = {};
                                            Yn() && e && (o[me.Ja] = e), p("require", "ec", "ec.js", o), i && a.we && p("set", "&cu", a.we);
                                            var s = a.action;
                                            if ((i || "impressions" === s) && (r("ec:addImpression", a.og), !i)) return;
                                            if ("promo_click" === s || "promo_view" === s || i && a.Bc) {
                                                var c = a.Bc;
                                                if (r("ec:addPromo", c), c && 0 < c.length && "promo_click" === s) return void(i ? p("ec:setAction", s, a.$a) : p("ec:setAction", s));
                                                if (!i) return
                                            }
                                            "promo_view" !== s && "impressions" !== s && (r("ec:addProduct", a.wb), p("ec:setAction", s, a.$a))
                                        }
                                    },
                                    h = function() {
                                        var e = n.getWithConfig(me.yh);
                                        e && (p("require", e, {
                                            dataLayer: "dataLayer"
                                        }), p("require", "render"))
                                    },
                                    m = pi(u, t, n),
                                    b = function(e, t, n) {
                                        n && (t = "" + t), m.ka[e] = t
                                    };
                                if (!n.isGtmEvent && mi(u, m.ja) && (s((function() {
                                        f() && f().remove(u)
                                    })), Fr[u] = !1), s("create", a, m.ja), m.ja[me.Ja] && !n.isGtmEvent) {
                                    var _ = void m.ja[me.Ja];
                                    _ && (o = _)
                                }
                                if (n.isGtmEvent ? m.qc[me.Ja] : m.ja[me.Ja]) {
                                    var w = n.isGtmEvent ? m.qc[me.Qc] : m.ja[me.Qc];
                                    w && !Fr[u] && (Fr[u] = !0, s(function(e, t) {
                                        return function() {
                                            var n = bn(),
                                                r = n && n.getByName && n.getByName(e);
                                            if (r) {
                                                var i = r.get("sendHitTask");
                                                r.set("sendHitTask", (function(e) {
                                                    var n = e.get("hitPayload"),
                                                        r = e.get("hitCallback"),
                                                        a = 0 > n.indexOf("&tid=" + t);
                                                    a && (e.set("hitPayload", n.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + t), !0), e.set("hitCallback", void 0, !0)), i(e), a && (e.set("hitPayload", n, !0), e.set("hitCallback", r, !0), e.set("_x_19", void 0, !0), i(e))
                                                }))
                                            }
                                        }
                                    }(u, w)))
                                }
                                n.isGtmEvent ? m.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (i = n.getWithConfig(me.Zb), s((function() {
                                    if (!n.isGtmEvent && te(i)) {
                                        var e, t = m.ka,
                                            r = f().getByName(u);
                                        for (e in i)
                                            if (i.hasOwnProperty(e) && /^(dimension|metric)\d+$/.test(e) && null != i[e]) {
                                                var a = r.get(ri(i[e]));
                                                fi(t, e, a)
                                            }
                                    }
                                })), function(e) {
                                    if (e) {
                                        var t = {};
                                        if (te(e))
                                            for (var n in Xr) Xr.hasOwnProperty(n) && ni(Xr[n], n, e[n], t);
                                        p("require", "linkid", t)
                                    }
                                }(m.linkAttribution));
                                var k = m[me.fa];
                                k && k[me.N] && function(e, t) {
                                    var n = e[me.ac];
                                    ! function(e, t, n, r) {
                                        t = String(t).replace(/\s+/g, "").split(",");
                                        var i = bn();
                                        i(e + "require", "linker"), i(e + "linker:autoLink", t, n, r)
                                    }(t + ".", e[me.N] || "", void 0 === n ? !!e.use_anchor : "fragment" === n, !!e[me.Kb])
                                }(k, u), p("set", m.qc), n.isGtmEvent && m.enableLinkId && p("require", "linkid", "linkid.js"), n.isGtmEvent && ht() && Gr(a, u, n);
                                var x = m.ja[me.Ja] ? m.ja[me.Ja] : void 0;
                                if (t === me.Wb)
                                    if (n.isGtmEvent) {
                                        if (r(), m.remarketingLists) {
                                            var E = "_dc_gtm_" + a.replace(/[^A-Za-z0-9-]/g, "");
                                            p("require", "adfeatures", {
                                                cookieName: E
                                            })
                                        }
                                        v(x), p("send", "pageview"), m.ja._useUp && _n(u + ".")
                                    } else h(), p("send", "pageview", m.ka);
                                else t === me.Aa ? (h(), function(e, t) {
                                    if (e) {
                                        if (l(e)) {
                                            var n = Er(e);
                                            if (!n) return;
                                            e = n
                                        }
                                        var r = void 0,
                                            i = !1,
                                            a = t.getWithConfig(me.Ah);
                                        if (a && d(a)) {
                                            r = [];
                                            for (var o = 0; o < a.length; o++) {
                                                var s = Er(a[o]);
                                                s && (r.push(s), (e.id === s.id || e.id === e.containerId && e.containerId === s.containerId) && (i = !0))
                                            }
                                        }
                                        if (!r || i) {
                                            var c, u = t.getWithConfig(me.Af);
                                            if (u) {
                                                c = d(u) ? u : [u];
                                                var f = t.getWithConfig(me.yf),
                                                    p = t.getWithConfig(me.zf),
                                                    v = t.getWithConfig(me.Bf),
                                                    h = t.getWithConfig(me.zh),
                                                    g = f || p,
                                                    m = 1;
                                                "UA" !== e.prefix || r || (m = 5);
                                                for (var b = 0; b < c.length; b++)
                                                    if (b < m)
                                                        if (r) Ar(r, c[b], h, {
                                                            Pa: g,
                                                            options: v
                                                        });
                                                        else if ("AW" === e.prefix && e.M[1]) Mr(e.M[0], e.M[1], c[b], {
                                                    Pa: g,
                                                    options: v
                                                });
                                                else if ("UA" === e.prefix) {
                                                    var _ = e.containerId,
                                                        w = c[b],
                                                        k = {
                                                            Pa: g
                                                        };
                                                    if (ke(23), w) {
                                                        var x = Sr(jr, k = k || {}, _),
                                                            E = {};
                                                        void 0 !== k.Pa ? E.receiver = k.Pa : E.replace = w, E.ga_wpid = _, E.destination = w, x(2, y(), E)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }(a, n), n.getWithConfig(me.Za) && (function(e) {
                                    function t(e, t, n) {
                                        n && (e[t] = n)
                                    }
                                    if (ht()) {
                                        var n = function() {
                                            var e = Mt(R.location.href),
                                                t = Ot(e, "query", !1, void 0, "gclid"),
                                                n = Ot(e, "query", !1, void 0, "gclsrc"),
                                                r = Ot(e, "query", !1, void 0, "wbraid"),
                                                i = Ot(e, "query", !1, void 0, "dclid");
                                            if (!t || !n || !r) {
                                                var a = e.hash.replace("#", "");
                                                t = t || Pt(a, "gclid", void 0), n = n || Pt(a, "gclsrc", void 0), r = r || Pt(a, "wbraid", void 0)
                                            }
                                            return rn(t, n, i, r)
                                        }();
                                        if (function(e, t) {
                                                for (var n = 0; n < t.length; ++n)
                                                    if (e[t[n]]) return !0;
                                                return !1
                                            }(n, ["aw", "dc"])) {
                                            var r = {};
                                            t(r, "gclid", n.gclid), t(r, "dclid", n.dclid), t(r, "gclsrc", n.gclsrc), t(r, "wbraid", n.gbraid), en((function() {
                                                return r
                                            }), 3), en((function() {
                                                return {
                                                    _up: "1"
                                                }
                                            }), 1)
                                        }
                                    }
                                }(), _n(u + ".")), 0 != m.sendPageView && p("send", "pageview", m.ka), Gr(a, u, n)) : t === me.Ia ? function(e, t) {
                                    var n = t.getWithConfig(me.Ka),
                                        r = t.getWithConfig(me.Wa),
                                        i = t.getWithConfig(n);
                                    if (void 0 === i) {
                                        var a = void 0;
                                        Rr.hasOwnProperty(n) ? a = Rr[n] : Jr.hasOwnProperty(n) && (a = Jr[n]), 1 === a && (a = ri(n)), l(a) ? bn()((function() {
                                            var t = bn().getByName(e).get(a);
                                            r(t)
                                        })) : r(void 0)
                                    } else r(i)
                                }(u, n) : "screen_view" === t ? p("send", "screenview", m.ka) : "timing_complete" === t ? (m.ka.hitType = "timing", b("timingCategory", m.eventCategory, !0), n.isGtmEvent ? b("timingVar", m.timingVar, !0) : b("timingVar", m.name, !0), b("timingValue", g(m.value)), void 0 !== m.eventLabel && b("timingLabel", m.eventLabel, !0), p("send", m.ka)) : "exception" === t ? p("send", "exception", m.ka) : "optimize.callback" === t || "" === t && n.isGtmEvent || ("track_social" === t && n.isGtmEvent ? (m.ka.hitType = "social", b("socialNetwork", m.socialNetwork, !0), b("socialAction", m.socialAction, !0), b("socialTarget", m.socialTarget, !0)) : ((n.isGtmEvent || ai[t]) && v(x), n.isGtmEvent && r(), m.ka.hitType = "event", b("eventCategory", m.eventCategory, !0), b("eventAction", m.eventAction || t, !0), void 0 !== m.eventLabel && b("eventLabel", m.eventLabel, !0), void 0 !== m.value && b("eventValue", g(m.value))), p("send", m.ka));
                                if (!yr && !n.isGtmEvent) {
                                    yr = !0, mn();
                                    var C = function() {
                                        n.onFailure()
                                    };
                                    H(o, (function() {
                                        f().loaded || C()
                                    }), C)
                                }
                            } else Z(n.onFailure)
                        },
                        Nr = function(e, t, n, r) {
                            ! function(e, t) {
                                ! function(e, t) {
                                    function n() {
                                        for (var e = 0; e < t.length; e++)
                                            if (!vt(t[e])) return !0;
                                        return !1
                                    }
                                    if (n()) {
                                        var r = !1;
                                        gt(t, (function(t) {
                                            r || n() || (r = !0, e(t))
                                        }))
                                    } else e({})
                                }(e, t)
                            }((function() {
                                $r(e, t, r)
                            }), [me.H, me.C])
                        },
                        Lr = function(e, t) {
                            function n(e) {
                                function n(t, n) {
                                    for (var i = 0; i < n.length; i++) {
                                        var a = n[i];
                                        if (e[a]) {
                                            r[t] = e[a];
                                            break
                                        }
                                    }
                                }
                                var r = ne(e);
                                return t && (n("id", ["id", "item_id", "promotion_id"]), n("name", ["name", "item_name", "promotion_name"]), n("brand", ["brand", "item_brand"]), n("variant", ["variant", "item_variant"]), n("list", ["list_name", "item_list_name"]), n("position", ["list_position", "creative_slot", "index"]), function() {
                                    if (e.category) r.category = e.category;
                                    else {
                                        for (var t = "", n = 0; n < Qr.length; n++) void 0 !== e[Qr[n]] && (t && (t += "/"), t += e[Qr[n]]);
                                        t && (r.category = t)
                                    }
                                }()), n("listPosition", ["list_position"]), n("creative", ["creative_name"]), n("list", ["list_name"]), n("position", ["list_position", "creative_slot"]), r
                            }
                            t = void 0 !== t && t;
                            for (var r = [], i = 0; e && i < e.length; i++) e[i] && te(e[i]) && r.push(n(e[i]));
                            return r.length ? r : void 0
                        },
                        Dr = function(e) {
                            return kt(e)
                        },
                        Fr = {},
                        qr = {},
                        Vr = {},
                        Rr = Object.freeze((Vr.client_storage = "storage", Vr.sample_rate = 1, Vr.site_speed_sample_rate = 1, Vr.store_gac = 1, Vr.use_amp_client_id = 1, Vr[me.kb] = 1, Vr[me.ma] = "storeGac", Vr[me.da] = 1, Vr[me.na] = 1, Vr[me.Da] = 1, Vr[me.Fb] = 1, Vr[me.Va] = 1, Vr[me.Gb] = 1, Vr)),
                        Ur = {},
                        Kr = Object.freeze((Ur._cs = 1, Ur._useUp = 1, Ur.allowAnchor = 1, Ur.allowLinker = 1, Ur.alwaysSendReferrer = 1, Ur.clientId = 1, Ur.cookieDomain = 1, Ur.cookieExpires = 1, Ur.cookieFlags = 1, Ur.cookieName = 1, Ur.cookiePath = 1, Ur.cookieUpdate = 1, Ur.legacyCookieDomain = 1, Ur.legacyHistoryImport = 1, Ur.name = 1, Ur.sampleRate = 1, Ur.siteSpeedSampleRate = 1, Ur.storage = 1, Ur.storeGac = 1, Ur.useAmpClientId = 1, Ur._cd2l = 1, Ur)),
                        Wr = Object.freeze({
                            anonymize_ip: 1
                        }),
                        Br = {},
                        Jr = Object.freeze((Br.campaign = {
                            content: "campaignContent",
                            id: "campaignId",
                            medium: "campaignMedium",
                            name: "campaignName",
                            source: "campaignSource",
                            term: "campaignKeyword"
                        }, Br.app_id = 1, Br.app_installer_id = 1, Br.app_name = 1, Br.app_version = 1, Br.description = "exDescription", Br.fatal = "exFatal", Br.language = 1, Br.page_hostname = "hostname", Br.transport_type = "transport", Br[me.aa] = "currencyCode", Br[me.wf] = 1, Br[me.nb] = "location", Br[me.Yd] = "page", Br[me.La] = "referrer", Br[me.Tc] = "title", Br[me.Df] = 1, Br[me.pb] = 1, Br)),
                        Hr = {},
                        zr = Object.freeze((Hr.content_id = 1, Hr.event_action = 1, Hr.event_category = 1, Hr.event_label = 1, Hr.link_attribution = 1, Hr.name = 1, Hr[me.fa] = 1, Hr[me.vf] = 1, Hr[me.Lb] = 1, Hr[me.ca] = 1, Hr)),
                        Zr = Object.freeze({
                            displayfeatures: 1,
                            enableLinkId: 1,
                            enableRecaptcha: 1,
                            eventAction: 1,
                            eventCategory: 1,
                            eventLabel: 1,
                            gaFunctionName: 1,
                            gtmEcommerceData: 1,
                            gtmTrackerName: 1,
                            linker: 1,
                            remarketingLists: 1,
                            socialAction: 1,
                            socialNetwork: 1,
                            socialTarget: 1,
                            timingVar: 1,
                            value: 1
                        }),
                        Qr = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
                        Yr = {},
                        Xr = Object.freeze((Yr.levels = 1, Yr[me.na] = "duration", Yr[me.Fb] = 1, Yr)),
                        ei = {},
                        ti = Object.freeze((ei.anonymize_ip = 1, ei.fatal = 1, ei.send_page_view = 1, ei.store_gac = 1, ei.use_amp_client_id = 1, ei[me.ma] = 1, ei[me.wf] = 1, ei)),
                        ni = function(e, t, n, r) {
                            if (void 0 !== n)
                                if (ti[t] && (n = m(n)), "anonymize_ip" !== t || n || (n = void 0), 1 === e) r[ri(t)] = n;
                                else if (l(e)) r[e] = n;
                            else
                                for (var i in e) e.hasOwnProperty(i) && void 0 !== n[i] && (r[e[i]] = n[i])
                        },
                        ri = function(e) {
                            return e && l(e) ? e.replace(/(_[a-z])/g, (function(e) {
                                return e[1].toUpperCase()
                            })) : e
                        },
                        ii = {},
                        ai = Object.freeze((ii.checkout_progress = 1, ii.select_content = 1, ii.set_checkout_option = 1, ii[me.Cb] = 1, ii[me.Db] = 1, ii[me.ib] = 1, ii[me.Ua] = 1, ii[me.jb] = 1, ii[me.va] = 1, ii[me.Eb] = 1, ii[me.wa] = 1, ii)),
                        oi = {},
                        si = Object.freeze((oi.checkout_progress = 1, oi.set_checkout_option = 1, oi[me.cf] = 1, oi[me.Cb] = 1, oi[me.Db] = 1, oi[me.ib] = 1, oi[me.va] = 1, oi[me.Eb] = 1, oi[me.df] = 1, oi)),
                        ci = {},
                        li = Object.freeze((ci.generate_lead = 1, ci.login = 1, ci.search = 1, ci.select_content = 1, ci.share = 1, ci.sign_up = 1, ci.view_search_results = 1, ci[me.Ua] = 1, ci[me.jb] = 1, ci[me.wa] = 1, ci)),
                        ui = {},
                        di = Object.freeze((ui.view_search_results = 1, ui[me.Ua] = 1, ui[me.jb] = 1, ui[me.wa] = 1, ui)),
                        fi = function(e, t, n) {
                            e.hasOwnProperty(t) || (e[t] = n)
                        },
                        pi = function(e, t, n) {
                            var r = function(e) {
                                    return n.getWithConfig(e)
                                },
                                i = {},
                                a = {},
                                o = {},
                                s = {},
                                l = function(e) {
                                    if (d(e)) {
                                        for (var t = [], n = 0; n < e.length; n++) {
                                            var r = e[n];
                                            if (null != r) {
                                                var i = r.id,
                                                    a = r.variant;
                                                null != i && null != a && t.push(String(i) + "." + String(a))
                                            }
                                        }
                                        return 0 < t.length ? t.join("!") : void 0
                                    }
                                }(r(me.xh));
                            !n.isGtmEvent && l && fi(a, "exp", l), o["&gtm"] = er(!0), ht() && (s._cs = Dr);
                            var u = r(me.Zb);
                            if (!n.isGtmEvent && te(u))
                                for (var f in u)
                                    if (u.hasOwnProperty(f) && /^(dimension|metric)\d+$/.test(f) && null != u[f]) {
                                        var p = r(String(u[f]));
                                        void 0 !== p && fi(a, f, p)
                                    } for (var v = function(e) {
                                    function t(e) {
                                        for (var t = Object.keys(e), r = 0; r < t.length; ++r) n[t[r]] = 1
                                    }
                                    var n = {};
                                    return t(e.eventModel), t(e.targetConfig), t(e.containerConfig), t(e.globalConfig), Object.keys(n)
                                }(n), h = 0; h < v.length; ++h) {
                                var g = v[h];
                                if (n.isGtmEvent) {
                                    var m = r(g);
                                    Zr.hasOwnProperty(g) ? i[g] = m : Kr.hasOwnProperty(g) ? s[g] = m : "currencyCode" != g && (o[g] = m)
                                } else {
                                    var b;
                                    if (b = g !== me.ba ? r(g) : Ct(n, g), zr.hasOwnProperty(g)) ni(zr[g], g, b, i);
                                    else if (Wr.hasOwnProperty(g)) ni(Wr[g], g, b, o);
                                    else if (Jr.hasOwnProperty(g)) ni(Jr[g], g, b, a);
                                    else if (Rr.hasOwnProperty(g)) ni(Rr[g], g, b, s);
                                    else if (/^(dimension|metric|content_group)\d+$/.test(g)) ni(1, g, b, a);
                                    else if (g === me.ba) {
                                        var y = j(b);
                                        y && (a["&did"] = y)
                                    } else g === me.oa && 0 > v.indexOf(me.Fb) && (s.cookieName = b + "_ga")
                                }
                            }
                            if (!1 !== r(me.nh) && !1 !== r(me.Xb) && function() {
                                    var e = !0;
                                    return wr(7) && wr(9) && wr(10) || (e = !1), e
                                }() || (o.allowAdFeatures = !1), !1 !== r(me.Ba) && function() {
                                    var e = !0;
                                    return wr(3) && wr(4) || (e = !1), e
                                }() || (n.isGtmEvent, o.allowAdPersonalizationSignals = !1), !n.isGtmEvent && r(me.Za) && (s._useUp = !0), n.isGtmEvent) {
                                s.name = s.name || i.gtmTrackerName;
                                var _ = o.hitCallback;
                                o.hitCallback = function() {
                                    c(_) && _(), n.onSuccess()
                                }
                            } else {
                                fi(s, "cookieDomain", "auto"), fi(o, "forceSSL", !0), fi(i, "eventCategory", function(e) {
                                    var t = "general";
                                    return si[e] ? t = "ecommerce" : li[e] ? t = "engagement" : "exception" === e && (t = "error"), t
                                }(t)), di[t] && fi(a, "nonInteraction", !0), "login" === t || "sign_up" === t || "share" === t ? fi(i, "eventLabel", r(me.vf)) : "search" === t || "view_search_results" === t ? fi(i, "eventLabel", r(me.Ch)) : "select_content" === t && fi(i, "eventLabel", r(me.rh));
                                var w = i[me.fa] || {},
                                    k = w[me.Jb];
                                k || 0 != k && w[me.N] ? s.allowLinker = !0 : !1 === k && fi(s, "useAmpClientId", !1), a.hitCallback = n.onSuccess, s.name = e
                            }
                            ht() && (o["&gcs"] = "G1" + function(e) {
                                for (var t = [], n = 0; n < bt.length; n++) {
                                    var r = e(bt[n]);
                                    t[n] = !0 === r ? "1" : !1 === r ? "0" : "-"
                                }
                                return t.join("")
                            }(pt), kt(me.H) || (s.storage = "none"), kt(me.C) || (o.allowAdFeatures = !1, s.storeGac = !1));
                            var x = r(me.qa) || r(me.Ja),
                                E = r(me.Qc);
                            return x && (n.isGtmEvent || (s[me.Ja] = x), s._cd2l = !0), E && !n.isGtmEvent && (s[me.Qc] = E), i.ka = a, i.qc = o, i.ja = s, i
                        },
                        vi = function(e) {
                            var t = e.gtmEcommerceData;
                            if (!t) return null;
                            var n = {};
                            if (t.currencyCode && (n.we = t.currencyCode), t.impressions) {
                                n.action = "impressions";
                                var r = t.impressions;
                                n.og = "impressions" === t.translateIfKeyEquals ? Lr(r, !0) : r
                            }
                            if (t.promoView) {
                                n.action = "promo_view";
                                var i = t.promoView.promotions;
                                n.Bc = "promoView" === t.translateIfKeyEquals ? Lr(i, !0) : i
                            }
                            if (t.promoClick) {
                                n.action = "promo_click";
                                var a = t.promoClick.promotions;
                                return n.Bc = "promoClick" === t.translateIfKeyEquals ? Lr(a, !0) : a, n.$a = t.promoClick.actionField, n
                            }
                            for (var o in t)
                                if (t.hasOwnProperty(o) && "translateIfKeyEquals" !== o && "impressions" !== o && "promoView" !== o && "promoClick" !== o && "currencyCode" !== o) {
                                    n.action = o;
                                    var s = t[o].products;
                                    n.wb = "products" === t.translateIfKeyEquals ? Lr(s, !0) : s, n.$a = t[o].actionField;
                                    break
                                } return Object.keys(n).length ? n : null
                        },
                        hi = function(e, t) {
                            function n(e) {
                                return {
                                    id: i(me.Ya),
                                    affiliation: i(me.uh),
                                    revenue: i(me.ca),
                                    tax: i(me.sf),
                                    shipping: i(me.Qd),
                                    coupon: i(me.vh),
                                    list: i(me.Pd) || e
                                }
                            }
                            for (var r, i = function(e) {
                                    return t.getWithConfig(e)
                                }, a = i(me.V), o = 0; a && o < a.length && !(r = a[o][me.Pd]); o++);
                            var s = i(me.Zb);
                            if (te(s))
                                for (var c = 0; a && c < a.length; ++c) {
                                    var l, u = a[c];
                                    for (l in s) s.hasOwnProperty(l) && /^(dimension|metric)\d+$/.test(l) && null != s[l] && fi(u, l, u[s[l]])
                                }
                            var d = null,
                                f = i(me.wh);
                            return e === me.va || e === me.Eb ? d = {
                                action: e,
                                $a: n(),
                                wb: Lr(a)
                            } : e === me.Cb ? d = {
                                action: "add",
                                wb: Lr(a)
                            } : e === me.Db ? d = {
                                action: "remove",
                                wb: Lr(a)
                            } : e === me.wa ? d = {
                                action: "detail",
                                $a: n(r),
                                wb: Lr(a)
                            } : e === me.Ua ? d = {
                                action: "impressions",
                                og: Lr(a)
                            } : "view_promotion" === e ? d = {
                                action: "promo_view",
                                Bc: Lr(f)
                            } : "select_content" === e && f && 0 < f.length ? d = {
                                action: "promo_click",
                                Bc: Lr(f)
                            } : "select_content" === e ? d = {
                                action: "click",
                                $a: {
                                    list: i(me.Pd) || r
                                },
                                wb: Lr(a)
                            } : e === me.ib || "checkout_progress" === e ? d = {
                                action: "checkout",
                                wb: Lr(a),
                                $a: {
                                    step: e === me.ib ? 1 : i(me.rf),
                                    option: i(me.qf)
                                }
                            } : "set_checkout_option" === e && (d = {
                                action: "checkout_option",
                                $a: {
                                    step: i(me.rf),
                                    option: i(me.qf)
                                }
                            }), d && (d.we = i(me.aa)), d
                        },
                        gi = {},
                        mi = function(e, t) {
                            var n = gi[e];
                            if (gi[e] = ne(t), !n) return !1;
                            for (var r in t)
                                if (t.hasOwnProperty(r) && t[r] !== n[r]) return !0;
                            for (var i in n)
                                if (n.hasOwnProperty(i) && n[i] !== t[i]) return !0;
                            return !1
                        };

                    function bi() {
                        var e = Ee;
                        return e.gcq = e.gcq || new xi
                    }
                    var yi = function(e, t, n, r) {
                            bi().push("event", [t, e], n, r)
                        },
                        _i = {},
                        wi = function() {
                            this.status = 1, this.containerConfig = {}, this.targetConfig = {}, this.remoteConfig = {}, this.o = {}, this.s = null, this.m = !1
                        },
                        ki = function(e, t, n, r, i) {
                            this.type = e, this.s = t, this.P = n || "", this.m = r, this.o = i
                        },
                        xi = function() {
                            this.o = {}, this.s = {}, this.m = [], this.D = {
                                AW: !1,
                                UA: !1
                            }
                        },
                        Ei = function(e, t) {
                            var n = Er(t);
                            return e.o[n.containerId] = e.o[n.containerId] || new wi
                        },
                        Ci = function(e, t, n, r) {
                            if (r.P) {
                                var i = Ei(e, r.P),
                                    a = i.s;
                                if (a) {
                                    var o = ne(n),
                                        s = ne(i.targetConfig[r.P]),
                                        c = ne(i.containerConfig),
                                        l = ne(i.remoteConfig),
                                        u = ne(e.s),
                                        d = qe("gtm.uniqueEventId"),
                                        f = Er(r.P).prefix,
                                        p = x((function() {
                                            var e = o[me.Hb];
                                            e && Z(e)
                                        })),
                                        v = function(e, t) {
                                            return e.getContainerTypeLoaded = t, e
                                        }(function(e, t) {
                                            return e.setContainerTypeLoaded = t, e
                                        }(function(e, t) {
                                            return e.onFailure = function() {
                                                Kn(d, f, "3"), p()
                                            }, e
                                        }(function(e, t) {
                                            return e.onSuccess = function() {
                                                Kn(d, f, "2"), p()
                                            }, e
                                        }(function(e, t) {
                                            return e.globalConfig = t, e
                                        }(function(e, t) {
                                            return e.remoteConfig = t, e
                                        }(function(e, t) {
                                            return e.containerConfig = t, e
                                        }(function(e, t) {
                                            return e.targetConfig = t, e
                                        }(function(e) {
                                            var t = new Et;
                                            return t.eventModel = e, t
                                        }(o), s), c), l), u))), (function(t, n) {
                                            e.D[t] = n
                                        })), (function(t) {
                                            return e.D[t]
                                        }));
                                    try {
                                        Kn(d, f, "1"), a(r.P, t, r.s, v)
                                    } catch (e) {
                                        Kn(d, f, "4")
                                    }
                                }
                            }
                        };
                    xi.prototype.register = function(e, t, n) {
                        var r = Ei(this, e);
                        if (3 !== r.status) {
                            r.s = t, r.status = 3, n && (ne(r.remoteConfig, n), r.remoteConfig = n);
                            var i = Er(e),
                                a = _i[i.containerId];
                            if (void 0 !== a) {
                                var o = Ee[i.containerId].bootstrap,
                                    s = i.prefix.toUpperCase();
                                Ee[i.containerId]._spx && (s = s.toLowerCase());
                                var c = qe("gtm.uniqueEventId"),
                                    l = s,
                                    u = _() - o;
                                if (On && !Dn[c]) {
                                    c !== Nn && (xn(), Nn = c);
                                    var d = l + "." + Math.floor(o - a) + "." + Math.floor(u);
                                    Gn = Gn ? Gn + "," + d : "&cl=" + d
                                }
                                delete _i[i.containerId]
                            }
                            this.flush()
                        }
                    }, xi.prototype.push = function(e, t, n, r) {
                        var i = Math.floor(_() / 1e3);
                        ! function(e, t, n) {
                            if (t) {
                                var r = Er(t);
                                if (r && 1 === Ei(e, t).status) {
                                    Ei(e, t).status = 2;
                                    var i = {};
                                    On && (i.timeoutId = R.setTimeout((function() {
                                        ke(38), kn()
                                    }), 3e3)), e.push("require", [i], r.containerId), _i[r.containerId] = _();
                                    var a = "/gtag/js?id=" + encodeURIComponent(r.containerId) + "&l=dataLayer&cx=c";
                                    Yn() && (a += "&sign=" + xe.ed);
                                    var o = ("http:" != R.location.protocol ? "https:" : "http:") + "//www.googletagmanager.com" + a;
                                    H(o)
                                }
                            }
                        }(this, n, t[0][me.qa] || this.s[me.qa]), n && Ei(this, n).m && (r = !1), this.m.push(new ki(e, i, n, t, r)), r || this.flush()
                    }, xi.prototype.insert = function(e, t, n) {
                        var r = Math.floor(_() / 1e3);
                        0 < this.m.length ? this.m.splice(1, 0, new ki(e, r, n, t, !1)) : this.m.push(new ki(e, r, n, t, !1))
                    }, xi.prototype.flush = function(e) {
                        for (var t = this, n = [], r = !1, i = {}; this.m.length;) {
                            var a = this.m[0];
                            if (a.o) !a.P || Ei(this, a.P).m ? (a.o = !1, this.m.push(a)) : n.push(a), this.m.shift();
                            else {
                                switch (a.type) {
                                    case "require":
                                        if (3 !== Ei(this, a.P).status && !e) return void this.m.push.apply(this.m, n);
                                        On && R.clearTimeout(a.m[0].timeoutId);
                                        break;
                                    case "set":
                                        v(a.m[0], (function(e, n) {
                                            ne(P(e, n), t.s)
                                        }));
                                        break;
                                    case "config":
                                        i.Ha = {}, v(a.m[0], function(e) {
                                            return function(t, n) {
                                                ne(P(t, n), e.Ha)
                                            }
                                        }(i));
                                        var o = !!i.Ha[me.Xc];
                                        delete i.Ha[me.Xc];
                                        var s = Ei(this, a.P),
                                            c = Er(a.P),
                                            l = c.containerId === c.id;
                                        o || (l ? s.containerConfig = {} : s.targetConfig[a.P] = {}), s.m && o || Ci(this, me.Aa, i.Ha, a), s.m = !0, delete i.Ha[me.ic], ne(i.Ha, l ? s.containerConfig : s.targetConfig[a.P]), r = !0;
                                        break;
                                    case "event":
                                        i.Gc = {}, v(a.m[0], function(e) {
                                            return function(t, n) {
                                                ne(P(t, n), e.Gc)
                                            }
                                        }(i)), Ci(this, a.m[1], i.Gc, a);
                                        break;
                                    case "get":
                                        var u = {},
                                            d = (u[me.Ka] = a.m[0], u[me.Wa] = a.m[1], u);
                                        Ci(this, me.Ia, d, a)
                                }
                                this.m.shift(), Si(this, a)
                            }
                            i = {
                                Ha: i.Ha,
                                Gc: i.Gc
                            }
                        }
                        this.m.push.apply(this.m, n), r && this.flush()
                    };
                    var Si = function(e, t) {
                        if ("require" !== t.type)
                            if (t.P)
                                for (var n = e.getCommandListeners(t.P)[t.type] || [], r = 0; r < n.length; r++) n[r]();
                            else
                                for (var i in e.o)
                                    if (e.o.hasOwnProperty(i)) {
                                        var a = e.o[i];
                                        if (a && a.o)
                                            for (var o = a.o[t.type] || [], s = 0; s < o.length; s++) o[s]()
                                    }
                    };
                    xi.prototype.getRemoteConfig = function(e) {
                        return Ei(this, e).remoteConfig
                    }, xi.prototype.getCommandListeners = function(e) {
                        return Ei(this, e).o
                    };
                    var Pi = !1,
                        Oi = [];

                    function ji() {
                        if (!Pi) {
                            Pi = !0;
                            for (var e = 0; e < Oi.length; e++) Z(Oi[e])
                        }
                    }
                    var Ii = new w;

                    function Ti(e) {
                        return function(e) {
                            var t = e.arg0,
                                n = e.arg1;
                            if (e.any_of && d(n)) {
                                for (var r = 0; r < n.length; r++) {
                                    var i = ne(e, {});
                                    if (ne({
                                            arg1: n[r],
                                            any_of: void 0
                                        }, i), Ti(i)) return !0
                                }
                                return !1
                            }
                            switch (e.function) {
                                case "_cn":
                                    return 0 <= String(t).indexOf(String(n));
                                case "_css":
                                    var a;
                                    e: {
                                        if (t) {
                                            var o = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                                            try {
                                                for (var s = 0; s < o.length; s++)
                                                    if (t[o[s]]) {
                                                        a = t[o[s]](n);
                                                        break e
                                                    }
                                            } catch (e) {}
                                        }
                                        a = !1
                                    }
                                    return a;
                                case "_ew":
                                    return function(e, t) {
                                        e = String(e), t = String(t);
                                        var n = e.length - t.length;
                                        return 0 <= n && e.indexOf(t, n) == n
                                    }(t, n);
                                case "_eq":
                                    return String(t) == String(n);
                                case "_ge":
                                    return Number(t) >= Number(n);
                                case "_gt":
                                    return Number(t) > Number(n);
                                case "_lc":
                                    return 0 <= String(t).split(",").indexOf(String(n));
                                case "_le":
                                    return Number(t) <= Number(n);
                                case "_lt":
                                    return Number(t) < Number(n);
                                case "_re":
                                    return function(e, t, n) {
                                        var r = n ? "i" : void 0;
                                        try {
                                            var i = String(t) + r,
                                                a = Ii.get(i);
                                            return a || (a = new RegExp(t, r), Ii.set(i, a)), a.test(e)
                                        } catch (e) {
                                            return !1
                                        }
                                    }(t, n, e.ignore_case);
                                case "_sw":
                                    return 0 == String(t).indexOf(String(n));
                                case "_um":
                                    return function(e, t) {
                                        function n(e) {
                                            var t = Mt(e),
                                                n = Ot(t, "protocol"),
                                                r = Ot(t, "host", !0),
                                                i = Ot(t, "port");
                                            return (void 0 === n || "http" == n && "80" == i || "https" == n && "443" == i) && (n = "web", i = "default"), [n, r, i, Ot(t, "path").toLowerCase().replace(/\/$/, "")]
                                        }
                                        for (var r = n(String(e)), i = n(String(t)), a = 0; a < r.length; a++)
                                            if (r[a] !== i[a]) return !1;
                                        return !0
                                    }(t, n)
                            }
                            return !1
                        }(e) ? 1 : 0
                    }
                    Object.freeze({
                        dl: 1,
                        id: 1
                    }), Object.freeze(["config", "event", "get", "set"]);
                    var Mi = {},
                        Ai = function(e, t) {
                            t = t.toString().split(",");
                            for (var n = 0; n < t.length; n++) {
                                var r = Mi[t[n]] || [];
                                Mi[t[n]] = r, 0 > r.indexOf(e) && r.push(e)
                            }
                        },
                        Gi = "HA GF G UA AW DC".split(" "),
                        $i = !1,
                        Ni = !1;

                    function Li(e, t) {
                        var n = {
                            event: e
                        };
                        return t && (n.eventModel = ne(t), t[me.Hb] && (n.eventCallback = t[me.Hb]), t[me.Pc] && (n.eventTimeout = t[me.Pc])), n
                    }

                    function Di(e) {
                        return e.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(e, "gtm.uniqueEventId", {
                            value: Ge()
                        }), e["gtm.uniqueEventId"]
                    }

                    function Fi() {
                        return $i || Ee.gtagRegistered || ($i = Ee.gtagRegistered = !0, Ee.addTargetToGroup = function(e) {
                            Ai(e, "default")
                        }), $i
                    }
                    var qi = {
                            config: function(e) {
                                var t, n = Di(e);
                                if (!(2 > e.length) && l(e[1])) {
                                    var r = {};
                                    if (2 < e.length) {
                                        if (null != e[2] && !te(e[2]) || 3 < e.length) return;
                                        r = e[2]
                                    }
                                    var i = Er(e[1]);
                                    if (i) {
                                        if (function(e) {
                                                v(Mi, (function(t, n) {
                                                    var r = n.indexOf(e);
                                                    0 <= r && n.splice(r, 1)
                                                }))
                                            }(i.id), Ai(i.id, r[me.Ud] || "default"), delete r[me.Ud], Ni || ke(43), Fi() && -1 !== Gi.indexOf(i.prefix)) return "G" === i.prefix && (r[me.ic] = !0), delete r[me.Hb], void
                                        function(e, t) {
                                            bi().push("config", [e], t)
                                        }(r, i.id);
                                        Re("gtag.targets." + i.id, void 0), Re("gtag.targets." + i.id, ne(r));
                                        var a = {};
                                        return a[me.ob] = i.id, (t = Li(me.Aa, a))["gtm.uniqueEventId"] = n, t
                                    }
                                }
                            },
                            consent: function(e) {
                                function t() {
                                    Fi() && ne(e[2], {
                                        subcommand: e[1]
                                    })
                                }
                                if (3 === e.length) {
                                    ke(39);
                                    var n = Ge(),
                                        r = e[1];
                                    "default" === r ? (t(), yt(e[2])) : "update" === r && (t(), wt(e[2], n))
                                }
                            },
                            event: function(e) {
                                var t = e[1];
                                if (!(2 > e.length) && l(t)) {
                                    var n;
                                    if (2 < e.length) {
                                        if (!te(e[2]) && null != e[2] || 3 < e.length) return;
                                        n = e[2]
                                    }
                                    var r, i = Li(t, n),
                                        a = Di(e);
                                    i["gtm.uniqueEventId"] = a;
                                    var o = n && n[me.ob];
                                    if (void 0 === o && void 0 === (o = qe(me.ob, 2)) && (o = "default"), l(o) || d(o)) {
                                        for (var s = o.toString().replace(/\s+/g, "").split(","), c = [], u = 0; u < s.length; u++)
                                            if (0 <= s[u].indexOf("-")) c.push(s[u]);
                                            else {
                                                var f = Mi[s[u]];
                                                f && f.length && (c = c.concat(f))
                                            } r = function(e) {
                                            for (var t = {}, n = 0; n < e.length; ++n) {
                                                var r = Er(e[n]);
                                                r && (t[r.id] = r)
                                            }! function(e) {
                                                var t, n = [];
                                                for (t in e)
                                                    if (e.hasOwnProperty(t)) {
                                                        var r = e[t];
                                                        "AW" === r.prefix && r.M[1] && n.push(r.containerId)
                                                    } for (var i = 0; i < n.length; ++i) delete e[n[i]]
                                            }(t);
                                            var i = [];
                                            return v(t, (function(e, t) {
                                                i.push(t)
                                            })), i
                                        }(c)
                                    } else r = void 0;
                                    var p = r;
                                    if (!p) return;
                                    for (var h = Fi(), g = [], m = 0; h && m < p.length; m++) {
                                        var b = p[m];
                                        if (-1 !== Gi.indexOf(b.prefix)) {
                                            var y = ne(n);
                                            "G" === b.prefix && (y[me.ic] = !0), delete y[me.Hb], yi(t, y, b.id)
                                        }
                                        g.push(b.id)
                                    }
                                    return i.eventModel = i.eventModel || {}, 0 < p.length ? i.eventModel[me.ob] = g.join() : delete i.eventModel[me.ob], Ni || ke(43), i
                                }
                            },
                            get: function(e) {
                                if (ke(53), 4 === e.length && l(e[1]) && l(e[2]) && c(e[3])) {
                                    var t = Er(e[1]),
                                        n = String(e[2]),
                                        r = e[3];
                                    if (t && (Ni || ke(43), Fi() && -1 !== Gi.indexOf(t.prefix))) {
                                        Ge();
                                        var i = {};
                                        ne((i[me.Ka] = n, i[me.Wa] = r, i)),
                                            function(e, t, n, r) {
                                                bi().push("get", [e, t], n, void 0)
                                            }(n, (function(e) {
                                                Z((function() {
                                                    return r(e)
                                                }))
                                            }), t.id)
                                    }
                                }
                            },
                            js: function(e) {
                                if (2 == e.length && e[1].getTime) {
                                    Ni = !0, Fi();
                                    var t = {
                                        event: "gtm.js"
                                    };
                                    return t["gtm.start"] = e[1].getTime(), t["gtm.uniqueEventId"] = Di(e), t
                                }
                            },
                            policy: function() {},
                            set: function(e) {
                                var t;
                                if (2 == e.length && te(e[1]) ? t = ne(e[1]) : 3 == e.length && l(e[1]) && (t = {}, te(e[2]) || d(e[2]) ? t[e[1]] = ne(e[2]) : t[e[1]] = e[2]), t) {
                                    if (Ge(), Fi()) {
                                        ne(t);
                                        var n = ne(t);
                                        bi().push("set", [n])
                                    }
                                    return t._clear = !0, t
                                }
                            }
                        },
                        Vi = {
                            policy: !0
                        },
                        Ri = function(e) {
                            if (Ui(e)) return e;
                            this.m = e
                        };
                    Ri.prototype.Ai = function() {
                        return this.m
                    };
                    var Ui = function(e) {
                        return !(!e || "object" !== X(e) || te(e)) && "getUntrustedUpdateValue" in e
                    };
                    Ri.prototype.getUntrustedUpdateValue = Ri.prototype.Ai;
                    var Ki = [],
                        Wi = !1,
                        Bi = !1;

                    function Ji(e) {
                        var t = e._clear;
                        v(e, (function(e, n) {
                            "_clear" !== e && (t && Re(e, void 0), Re(e, n))
                        })), je || (je = e["gtm.start"]);
                        var n = e["gtm.uniqueEventId"];
                        return !!e.event && (n || (n = Ge(), e["gtm.uniqueEventId"] = n, Re("gtm.uniqueEventId", n)), Qn(e))
                    }

                    function Hi() {
                        var e = Ki[0];
                        if (null == e || "object" != typeof e) return !1;
                        if (e.event) return !0;
                        if (h(e)) {
                            var t = e[0];
                            if ("config" === t || "event" === t || "js" === t) return !0
                        }
                        return !1
                    }

                    function zi() {
                        for (var e = !1; !Bi && 0 < Ki.length;) {
                            if (!Wi && Hi()) {
                                var t = {},
                                    n = (t.event = "gtm.init_consent", t),
                                    r = {},
                                    i = (r.event = "gtm.init", r),
                                    a = Ki[0]["gtm.uniqueEventId"];
                                a && (n["gtm.uniqueEventId"] = a - 2, i["gtm.uniqueEventId"] = a - 1), Ki.unshift(n, i), Wi = !0
                            }
                            Bi = !0, delete Le.eventModel, Ue();
                            var o = Ki.shift();
                            if (null != o) {
                                var s = Ui(o);
                                if (s) {
                                    var u = o;
                                    o = Ui(u) ? u.getUntrustedUpdateValue() : void 0;
                                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], p = 0; p < f.length; p++) {
                                        var v = f[p],
                                            g = qe(v, 1);
                                        (d(g) || te(g)) && (g = ne(g)), De[v] = g
                                    }
                                }
                                try {
                                    if (c(o)) try {
                                        o.call(Fe)
                                    } catch (e) {} else if (d(o)) {
                                        var m = o;
                                        if (l(m[0])) {
                                            var b = m[0].split("."),
                                                y = b.pop(),
                                                _ = m.slice(1),
                                                w = qe(b.join("."), 2);
                                            if (null != w) try {
                                                w[y].apply(w, _)
                                            } catch (e) {}
                                        }
                                    } else {
                                        if (h(o)) {
                                            e: {
                                                var k = o;
                                                if (k.length && l(k[0])) {
                                                    var x = qi[k[0]];
                                                    if (x && (!s || !Vi[k[0]])) {
                                                        o = x(k);
                                                        break e
                                                    }
                                                }
                                                o = void 0
                                            }
                                            if (!o) {
                                                Bi = !1;
                                                continue
                                            }
                                        }
                                        e = Ji(o) || e
                                    }
                                } finally {
                                    s && Ue(!0)
                                }
                            }
                            Bi = !1
                        }
                        return !e
                    }

                    function Zi() {
                        var e = zi();
                        try {
                            ! function(e, t) {
                                var n = e.hide;
                                if (n && void 0 !== n[t] && n.end) {
                                    n[t] = !1;
                                    var r, i = !0;
                                    for (r in n)
                                        if (n.hasOwnProperty(r) && !0 === n[r]) {
                                            i = !1;
                                            break
                                        } i && (n.end(), n.end = null)
                                }
                            }(R.dataLayer, xe.J)
                        } catch (e) {}
                        return e
                    }
                    var Qi = function() {
                        return !0
                    };

                    function Yi(e) {
                        if (null == e || 0 === e.length) return !1;
                        var t = Number(e),
                            n = _();
                        return t < n + 3e5 && t > n - 9e5
                    }
                    new String("undefined"), R.clearTimeout, R.setTimeout, encodeURI, encodeURIComponent, window, document;
                    var Xi = function(e, t, n) {
                            yi(t, n, e)
                        },
                        ea = function(e, t, n) {
                            yi(t, n, e, !0)
                        },
                        ta = {
                            g: {}
                        };
                    ta.g.e = ["google"], ta.__e = function(e) {
                        var t = String(function(e, t) {
                            if ($e[e]) return $e[e].event
                        }(e.vtp_gtmEventId));
                        return e.vtp_gtmCachedValues && (t = String(e.vtp_gtmCachedValues.event)), t
                    }, ta.__e.h = "e", ta.__e.isVendorTemplate = !0, ta.__e.priorityOverride = 0, ta.g.v = ["google"], ta.__v = function(e) {
                        var t = e.vtp_name;
                        if (!t || !t.replace) return !1;
                        var n = function(e, t) {
                                return qe(e, t || 2)
                            }(t.replace(/\\\./g, "."), e.vtp_dataLayerVersion || 1),
                            r = void 0 !== n ? n : e.vtp_defaultValue;
                        return function(e, t, n) {
                            On && re(e)
                        }(r, 0, e.vtp_gtmEventId), r
                    }, ta.__v.h = "v", ta.__v.isVendorTemplate = !0, ta.__v.priorityOverride = 0, ta.g.rep = ["google"], ta.__rep = function(e) {
                        var t;
                        switch (Er(e.vtp_containerId).prefix) {
                            case "AW":
                                t = Am;
                                break;
                            case "DC":
                                t = Qm;
                                break;
                            case "GF":
                                t = Vm;
                                break;
                            case "HA":
                                t = $m;
                                break;
                            case "UA":
                                t = Nr;
                                break;
                            default:
                                return void Z(e.vtp_gtmOnFailure)
                        }
                        Z(e.vtp_gtmOnSuccess),
                            function(e, t, n) {
                                bi().register(e, t, n)
                            }(e.vtp_containerId, t, e.vtp_remoteConfig || {})
                    }, ta.__rep.h = "rep", ta.__rep.isVendorTemplate = !0, ta.__rep.priorityOverride = 0, ta.g.cid = ["google"], ta.__cid = function() {
                        return xe.J
                    }, ta.__cid.h = "cid", ta.__cid.isVendorTemplate = !0, ta.__cid.priorityOverride = 0, ta.g.get = ["google"], ta.__get = function(e) {
                        var t = e.vtp_settings;
                        (e.vtp_deferrable ? ea : Xi)(String(t.streamId), String(e.vtp_eventName), t.eventParameters || {}), e.vtp_gtmOnSuccess()
                    }, ta.__get.h = "get", ta.__get.isVendorTemplate = !0, ta.__get.priorityOverride = 0;
                    var na = {};
                    na.dataLayer = Fe, na.callback = function(e) {
                            Me.hasOwnProperty(e) && c(Me[e]) && Me[e](), delete Me[e]
                        }, na.bootstrap = 0, na._spx = !1,
                        function(e) {
                            if (!R.__TAGGY_INSTALLED) {
                                var t = !1;
                                if (U.referrer) {
                                    var n = Mt(U.referrer);
                                    t = "cct.google" === jt(n, "host")
                                }
                                if (!t) {
                                    var r = $t("googTaggyReferrer");
                                    t = r.length && r[0].length
                                }
                                t && (R.__TAGGY_INSTALLED = !0, H("https://cct.google/taggy/agent.js"))
                            }
                            var i = void 0;
                            if (Yi(Ot(R.location, "query", !1, void 0, "gtm_debug")) && (i = 2), !i && U.referrer) {
                                var a = Mt(U.referrer);
                                "tagassistant.google.com" === jt(a, "host") && (i = 3)
                            }
                            if (!i) {
                                var o = $t("__TAG_ASSISTANT");
                                o.length && o[0].length && (i = 4)
                            }
                            i || Yi(U.documentElement.getAttribute("data-tag-assistant-present")) && (i = 5), i && W ? function(t) {
                                var n = R["google.tagmanager.debugui2.queue"];
                                n || (n = [], R["google.tagmanager.debugui2.queue"] = n, H("https://" + xe.Cd + "/debug/bootstrap?id=" + xe.J + "&src=GTAG&cond=" + t + "&gtm=" + er()));
                                var r = {
                                    messageType: "CONTAINER_STARTING",
                                    data: {
                                        scriptSource: W,
                                        containerProduct: "OGT",
                                        debug: !1,
                                        id: xe.J
                                    }
                                };
                                r.data.resume = function() {
                                    e()
                                }, xe.Yg && (r.data.initialPublish = !0), n.push(r)
                            }(i) : e()
                        }((function() {
                            if (rt().o(), Ee = R.google_tag_manager = R.google_tag_manager || {}, hr(), tn.enable_gbraid_cookie_write = !0, Ee[xe.J]) {
                                var e = Ee.zones;
                                e && e.unregisterChild(xe.J)
                            } else {
                                for (var n = t.resource || {}, r = n.macros || [], i = 0; i < r.length; i++) ae.push(r[i]);
                                for (var a = n.tags || [], o = 0; o < a.length; o++) ce.push(a[o]);
                                for (var s = n.predicates || [], c = 0; c < s.length; c++) se.push(s[c]);
                                for (var l = n.rules || [], u = 0; u < l.length; u++) {
                                    for (var d = l[u], f = {}, p = 0; p < d.length; p++) f[d[p][0]] = Array.prototype.slice.call(d[p], 1);
                                    oe.push(f)
                                }
                                if (ue = ta, q = Ti, Ee[xe.J] = na, E(Ae, ta.g), V = ge, function() {
                                        var e = B("dataLayer", []),
                                            t = B("google_tag_manager", {});
                                        t = t.dataLayer = t.dataLayer || {},
                                            function(e) {
                                                an ? e() : sn.push(e)
                                            }((function() {
                                                t.gtmDom || (t.gtmDom = !0, e.push({
                                                    event: "gtm.dom"
                                                }))
                                            })),
                                            function(e) {
                                                Pi ? Z(e) : Oi.push(e)
                                            }((function() {
                                                t.gtmLoad || (t.gtmLoad = !0, e.push({
                                                    event: "gtm.load"
                                                }))
                                            })), t.subscribers = (t.subscribers || 0) + 1;
                                        var n = e.push;
                                        e.push = function() {
                                            var t, r;
                                            if (0 < Ee.SANDBOXED_JS_SEMAPHORE) {
                                                t = [];
                                                for (var i = 0; i < arguments.length; i++) t[i] = new Ri(arguments[i])
                                            } else t = [].slice.call(arguments, 0);
                                            !(r = !0) && Ki.push.apply(Ki, t);
                                            var a = n.apply(e, t);
                                            if (r && Ki.push.apply(Ki, t), 300 < this.length)
                                                for (ke(4); 300 < this.length;) this.shift();
                                            var o = "boolean" != typeof a || a;
                                            return zi() && o
                                        };
                                        var r = e.slice(0);
                                        Ki.push.apply(Ki, r), Qi() && Z(Zi)
                                    }(), an = !1, on = 0, "interactive" == U.readyState && !U.createEventObject || "complete" == U.readyState) cn();
                                else {
                                    if (z(U, "DOMContentLoaded", cn), z(U, "readystatechange", cn), U.createEventObject && U.documentElement.doScroll) {
                                        var v = !0;
                                        try {
                                            v = !R.frameElement
                                        } catch (e) {}
                                        v && ln()
                                    }
                                    z(R, "load", cn)
                                }
                                Pi = !1, "complete" === U.readyState ? ji() : z(R, "load", ji), On && R.setInterval(Cn, 864e5), Ie = (new Date).getTime(), na.bootstrap = Ie
                            }
                        }))
                }()
            },
            61966: (e, t, n) => {
                "use strict";
                var r = n(2934),
                    i = n.n(r),
                    a = n(37432),
                    o = n.n(a),
                    s = n(83690),
                    c = n.n(s),
                    l = n(70236),
                    u = n(35029),
                    d = n(21944),
                    f = n(47865),
                    p = n(54905),
                    v = n(45222),
                    h = n(65835),
                    g = n(35271),
                    m = n(99159),
                    b = n(90390);
                const y = {
                    install(e) {
                        Object.defineProperty(e.prototype, "$vibrate", {
                            value: (e = [100, 100]) => {
                                var t;
                                return !!(null === (t = window.navigator) || void 0 === t ? void 0 : t.vibrate) && window.navigator.vibrate(e)
                            }
                        })
                    }
                };
                var _ = n(81127),
                    w = n(2720);
                class k {
                    constructor() {
                        this.artifacts = new _.Q, window.addEventListener("message", this.messageHandler.bind(this), !1)
                    }
                    messageHandler(e) {
                        w.v.domains.includes(e.origin) && "get" === e.data.action && e.source.postMessage({
                            action: "returnData",
                            galleries: this.artifacts.artifacts
                        }, "*")
                    }
                }
                var x = n(89768),
                    E = function(e, t, n, r) {
                        return new(n || (n = Promise))((function(i, a) {
                            function o(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(o, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    };
                const C = new(c())({
                    routes: [{
                        path: "/",
                        component: () => E(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(2529), n.e(5853), n.e(4948)]).then(n.bind(n, 14948))
                        }))
                    }, {
                        path: "/:roomCode([A-Za-z]{4})",
                        component: () => E(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(2529), n.e(5853), n.e(4948)]).then(n.bind(n, 14948))
                        }))
                    }, {
                        path: "/moderation",
                        component: () => E(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(5853), n.e(2530), n.e(2265)]).then(n.bind(n, 52265))
                        }))
                    }, {
                        path: "/moderator",
                        redirect: "/moderation"
                    }, {
                        path: "/moderate",
                        redirect: "/moderation"
                    }, {
                        path: "/localstorage",
                        beforeEnter() {
                            new k
                        }
                    }, {
                        path: "/konami",
                        redirect: () => (f.K.shared.set("debug-enabled", "true"), (0, x.c)("+30 Lives. Production build debugging enabled for this device/browser."), "/")
                    }, {
                        path: "/*",
                        redirect: "/"
                    }]
                });
                n(77823), i().prototype.$analytics = l.c.shared, i().prototype.$debug = u.W.shared, i().prototype.$storage = f.K.shared, i().use(o()), i().use(c()), i().use(p._), i().use(v.M), i().use(h.S), i().use(g.L), i().use(m.M), i().use(b.p), i().use(y);
                const S = new(o());
                new(i())({
                    router: C,
                    i18n: S,
                    name: "Entry",
                    el: "#app",
                    mixins: [h.b],
                    beforeCreate() {
                        d.o.setup(), S.locale = d.o.locale, this.$setSentryTag("app", "entry"), this.$analytics.setApplication({
                            appTag: "SignIn",
                            appId: "signin",
                            appVersion: "4.2.4"
                        })
                    },
                    computed: {
                        localeClass() {
                            return `locale-${this.$i18n.locale}`
                        }
                    },
                    template: '\n        <div id="app" :class="localeClass">\n            <Fatal v-if="$data.$fatalError.hasCrashed" :error="$data.$fatalError" />\n            <template v-else>\n                <router-view />\n                <Modal />\n            </template>\n        </div>\n    '
                })
            },
            2720: (e, t, n) => {
                "use strict";
                n.d(t, {
                    v: () => r
                });
                const r = Object.assign({
                    ecast: {
                        host: "ecast.jackboxgames.com",
                        scheme: "https"
                    },
                    banners: {
                        url: "banners.json"
                    },
                    gameFeatures: {
                        "fe8be043-af2e-401f-8862-37fb386dfda7": ["camera"],
                        bc18436c1fc7846aa47831d83fd84969: ["camera"]
                    },
                    debug: !1,
                    analytics: {
                        trackingId: "",
                        sampleRate: 0
                    },
                    adRoll: {
                        advertisableId: "",
                        pixelId: ""
                    },
                    domains: [],
                    sentry: {
                        debug: !1,
                        dsn: "",
                        sampleRate: 0,
                        allowedUrls: []
                    },
                    slack: {
                        token: "",
                        channel: "",
                        url: ""
                    },
                    twitch: {
                        clientId: ""
                    }
                }, {
                    debug: !1,
                    analytics: {
                        trackingId: "UA-23005426-52",
                        sampleRate: 10
                    },
                    adRoll: {
                        advertisableId: "WN335VM7RVAMPDZAOWMIHP",
                        pixelId: "WN335VM7RVAMPDZAOWMIHP"
                    },
                    domains: ["https://games.jackbox.tv", "http://games-test.jackbox.tv/", "https://games-test.jackbox.tv/", "https://tinyshirts.jackboxgames.com"],
                    sentry: {
                        dsn: "https://039390b57f754067b21014ec252009fc@o420318.ingest.sentry.io/5338617",
                        sampleRate: .2,
                        allowedUrls: [/(http|https):\/\/(\S*\.)?jackbox\.tv/i],
                        debug: !1
                    },
                    slack: {
                        channel: "#controller-debug",
                        url: "https://hooks.slack.com/services/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"
                    },
                    twitch: {
                        clientId: "yn2iepd23vskpmkzgeg2lkfsct7gsc"
                    }
                })
            },
            12360: (e, t, n) => {
                "use strict";
                n.d(t, {
                    iU: () => o,
                    cF: () => s
                });
                var r = function(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, a) {
                        function o(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(o, s)
                        }
                        c((r = r.apply(e, t || [])).next())
                    }))
                };
                const i = ["70a0ea54-26dd-429d-9f54-a868a63a8ecc", "8a34f379-00dc-495b-90de-b2be4382baea", "d1bfbe04-1a14-4a6a-bc61-52d005bf3ec5", "014d3763-bbad-49a7-8743-a7654571e2f1", "17f236c2-c3b8-40e6-bca6-6268fcdcf2f2"],
                    a = [{
                        name: "Prototype",
                        app: "vue",
                        tag: "prototype",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(9623), n.e(5853), n.e(2530), n.e(3317), n.e("games/prototype")]).then(n.bind(n, 87986))
                        }))
                    }, {
                        name: "EcastTestClient",
                        app: "marionette",
                        tag: "ecast-test-client",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/ecast-test-client")]).then(n.bind(n, 67363))
                        }))
                    }, {
                        name: "House of Jackbox",
                        app: "marionette",
                        tag: "house-of-jackbox",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/house-of-jackbox")]).then(n.bind(n, 79004))
                        }))
                    }, {
                        name: "Quiplash 2 International",
                        app: "marionette",
                        tag: "quiplash2-international",
                        categoryId: "quiplash2-internationalGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/quiplash2-international")]).then(n.bind(n, 43141))
                        }))
                    }, {
                        name: "Guesspionage Crowdplay",
                        app: "marionette",
                        tag: "guesspionage-crowdplay",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/guesspionage-crowdplay")]).then(n.bind(n, 50310))
                        }))
                    }, {
                        name: "Drawful 2",
                        app: "marionette",
                        tag: "drawful2",
                        categoryId: "DrawfulGame",
                        shopItems: ["shirts"],
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/drawful2")]).then(n.bind(n, 17411))
                        }))
                    }, {
                        name: "Drawful 2",
                        app: "marionette",
                        tag: "drawful2international",
                        features: ["moderation"],
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/drawful2international")]).then(n.bind(n, 76490))
                        }))
                    }, {
                        name: "Acquisitions, Inc.",
                        app: "marionette",
                        tag: "acquisitions-inc",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/acquisitions-inc")]).then(n.bind(n, 44489))
                        }))
                    }, {
                        name: "You Don't Know Jack 2015",
                        app: "marionette",
                        tag: "ydkj2015",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/ydkj2015")]).then(n.bind(n, 35519))
                        }))
                    }, {
                        name: "Drawful",
                        app: "marionette",
                        tag: "drawful",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/drawful")]).then(n.bind(n, 81099))
                        }))
                    }, {
                        name: "Word Spud",
                        app: "marionette",
                        tag: "wordspud",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/wordspud")]).then(n.bind(n, 50977))
                        }))
                    }, {
                        name: "Lie Swatter",
                        app: "marionette",
                        tag: "lieswatter",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/lieswatter")]).then(n.bind(n, 93119))
                        }))
                    }, {
                        name: "Fibbage",
                        app: "marionette",
                        tag: "fibbage",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/fibbage")]).then(n.bind(n, 21304))
                        }))
                    }, {
                        name: "Fibbage 2",
                        app: "marionette",
                        tag: "fibbage2",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/fibbage2")]).then(n.bind(n, 91791))
                        }))
                    }, {
                        name: "Earwax",
                        app: "marionette",
                        tag: "earwax",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/earwax")]).then(n.bind(n, 36024))
                        }))
                    }, {
                        name: "Bidiots",
                        app: "marionette",
                        tag: "auction",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/auction")]).then(n.bind(n, 41571))
                        }))
                    }, {
                        name: "Bomb Corp",
                        app: "marionette",
                        tag: "bombintern",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/bombintern")]).then(n.bind(n, 63191))
                        }))
                    }, {
                        name: "Quiplash",
                        app: "marionette",
                        tag: "quiplash",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/quiplash")]).then(n.bind(n, 64304))
                        }))
                    }, {
                        name: "Fakin' It",
                        app: "marionette",
                        tag: "fakinit",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/fakinit")]).then(n.bind(n, 22987))
                        }))
                    }, {
                        name: "Tee K.O.",
                        app: "marionette",
                        tag: "awshirt",
                        categoryId: "TeeKOGame",
                        shopItems: ["shirts"],
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(382), n.e(972), n.e("games/awshirt")]).then(n.bind(n, 79039))
                        }))
                    }, {
                        name: "Quiplash 2",
                        app: "marionette",
                        tag: "quiplash2",
                        categoryId: "Quiplash2Game",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/quiplash2")]).then(n.bind(n, 16190))
                        }))
                    }, {
                        name: "Trivia Murder Party",
                        app: "marionette",
                        tag: "triviadeath",
                        categoryId: "TriviaDeathResults",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/triviadeath")]).then(n.bind(n, 77342))
                        }))
                    }, {
                        name: "Guesspionage",
                        app: "marionette",
                        tag: "pollposition",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(6368), n.e(972), n.e("games/pollposition")]).then(n.bind(n, 57879))
                        }))
                    }, {
                        name: "Fibbage 3",
                        app: "marionette",
                        tag: "fibbage3",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/fibbage3")]).then(n.bind(n, 76516))
                        }))
                    }, {
                        name: "Survive the Internet",
                        app: "marionette",
                        tag: "survivetheinternet",
                        categoryId: "STIGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/survivetheinternet")]).then(n.bind(n, 73315))
                        }))
                    }, {
                        name: "Monster Seeking Monster",
                        app: "marionette",
                        tag: "monstermingle",
                        categoryId: "MonsterMingleGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/monstermingle")]).then(n.bind(n, 54750))
                        }))
                    }, {
                        name: "Bracketeering",
                        app: "marionette",
                        tag: "bracketeering",
                        categoryId: "BRKGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/bracketeering")]).then(n.bind(n, 10335))
                        }))
                    }, {
                        name: "Civic Doodle",
                        app: "marionette",
                        tag: "overdrawn",
                        categoryId: "OverdrawnGame",
                        shopItems: ["shirts"],
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/overdrawn")]).then(n.bind(n, 4342))
                        }))
                    }, {
                        name: "You Don't Know Jack 2018",
                        app: "marionette",
                        tag: "ydkj2018",
                        categoryId: "YDKJ2018Game",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/ydkj2018")]).then(n.bind(n, 94239))
                        }))
                    }, {
                        name: "Split the Room",
                        app: "marionette",
                        tag: "splittheroom",
                        categoryId: "SplitTheRoomGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/splittheroom")]).then(n.bind(n, 14433))
                        }))
                    }, {
                        name: "Mad Verse City",
                        app: "marionette",
                        tag: "rapbattle",
                        categoryId: "RapBattleGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/rapbattle")]).then(n.bind(n, 94059))
                        }))
                    }, {
                        name: "Zeeple Dome",
                        app: "marionette",
                        tag: "slingshoot",
                        categoryId: "SlingShootGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/slingshoot")]).then(n.bind(n, 41919))
                        }))
                    }, {
                        name: "Patently Stupid",
                        app: "marionette",
                        tag: "patentlystupid",
                        categoryId: "PatentlyStupidGame",
                        shopItems: ["mugs"],
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/patentlystupid")]).then(n.bind(n, 41073))
                        }))
                    }, {
                        name: "Trivia Murder Party 2",
                        app: "marionette",
                        tag: "triviadeath2",
                        categoryId: "TriviaDeath2Game",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/triviadeath2")]).then(n.bind(n, 20188))
                        }))
                    }, {
                        name: "Role Models",
                        app: "marionette",
                        tag: "rolemodels",
                        categoryId: "RoleModelsGame",
                        shopItems: ["shirts"],
                        features: ["camera"],
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/rolemodels")]).then(n.bind(n, 24970))
                        }))
                    }, {
                        name: "Joke Boat",
                        app: "marionette",
                        tag: "jokeboat",
                        categoryId: "JokeboatGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/jokeboat")]).then(n.bind(n, 50946))
                        }))
                    }, {
                        name: "Dictionarium",
                        app: "marionette",
                        tag: "ridictionary",
                        categoryId: "RidictionaryGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/ridictionary")]).then(n.bind(n, 85993))
                        }))
                    }, {
                        name: "Push the Button",
                        app: "marionette",
                        tag: "pushthebutton",
                        categoryId: "PushTheButtonGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/pushthebutton")]).then(n.bind(n, 56716))
                        }))
                    }, {
                        name: "Talking Points",
                        app: "marionette",
                        tag: "jackbox-talks",
                        features: ["camera", "moderation"],
                        categoryId: "JackboxTalksGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/jackbox-talks")]).then(n.bind(n, 54677))
                        }))
                    }, {
                        name: "Quiplash 3",
                        app: "marionette",
                        tag: "quiplash3",
                        features: ["moderation"],
                        categoryId: "quiplash3Game",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/quiplash3")]).then(n.bind(n, 99499))
                        }))
                    }, {
                        name: "The Devils and the Details",
                        app: "marionette",
                        tag: "everyday",
                        categoryId: "EverydayGame",
                        shopItems: ["mugs"],
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(1978), n.e(38), n.e(972), n.e(4442), n.e(4340), n.e("games/everyday")]).then(n.bind(n, 7851))
                        }))
                    }, {
                        name: "Champ'd Up",
                        app: "marionette",
                        tag: "worldchamps",
                        features: ["moderation"],
                        categoryId: "WorldChampionsGame",
                        shopItems: ["cards"],
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(972), n.e(4442), n.e(4340), n.e("games/worldchamps")]).then(n.bind(n, 35783))
                        }))
                    }, {
                        name: "Blather 'Round",
                        app: "marionette",
                        tag: "blanky-blank",
                        categoryId: "BlankyBlankGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(524), n.e(990), n.e(1916), n.e(972), n.e(4442), n.e(4340), n.e("games/blanky-blank")]).then(n.bind(n, 47642))
                        }))
                    }, {
                        name: "Job Job",
                        app: "vue",
                        tag: "apply-yourself",
                        features: ["moderation"],
                        categoryId: "JobGameGame",
                        hasPreviews: !0,
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(9980), n.e(5853), n.e(7381), n.e("games/apply-yourself")]).then(n.bind(n, 24872))
                        }))
                    }, {
                        name: "The Wheel of Enormous Proportions",
                        app: "vue",
                        tag: "the-wheel",
                        categoryId: "TheWheelGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(1978), n.e(8990), n.e(5853), n.e(7381), n.e("games/the-wheel")]).then(n.bind(n, 21057))
                        }))
                    }, {
                        name: "The Poll Mine",
                        app: "vue",
                        tag: "survey-bomb",
                        categoryId: "SurveyBombGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(5853), n.e(7381), n.e("games/survey-bomb")]).then(n.bind(n, 81988))
                        }))
                    }, {
                        name: "Weapons Drawn",
                        app: "vue",
                        tag: "murder-detectives",
                        features: ["moderation"],
                        categoryId: "MurderDetectivesGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(9623), n.e(5853), n.e(7381), n.e(2530), n.e("games/murder-detectives")]).then(n.bind(n, 28274))
                        }))
                    }, {
                        name: "Drawful Animate",
                        app: "vue",
                        tag: "drawful-animate",
                        features: ["moderation"],
                        categoryId: "DrawfulAnimateGame",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(9623), n.e(7611), n.e(5853), n.e(7381), n.e(2530), n.e("games/drawful-animate")]).then(n.bind(n, 66333))
                        }))
                    }, {
                        name: "Quiplash 3",
                        app: "vue",
                        tag: "quiplash3-tjsp",
                        features: ["moderation"],
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(5853), n.e(7381), n.e(2828), n.e("games/quiplash3-tjsp")]).then(n.bind(n, 64785))
                        }))
                    }, {
                        name: "Tee K.O.",
                        app: "vue",
                        tag: "awshirt-tjsp",
                        features: ["moderation"],
                        shopItems: ["shirts"],
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(2529), n.e(5853), n.e(7381), n.e(3317), n.e("games/awshirt-tjsp")]).then(n.bind(n, 12659))
                        }))
                    }, {
                        name: "Trivia Murder Party 2",
                        app: "vue",
                        tag: "triviadeath2-tjsp",
                        importFn: () => r(void 0, void 0, void 0, (function*() {
                            return Promise.all([n.e(7416), n.e(4442), n.e(5853), n.e(7381), n.e(3317), n.e(2828), n.e("games/triviadeath2-tjsp")]).then(n.bind(n, 87383))
                        }))
                    }],
                    o = e => i.includes(e),
                    s = e => a.find((t => t.tag === e || t.categoryId === e))
            },
            70236: (e, t, n) => {
                "use strict";
                n.d(t, {
                    c: () => a
                });
                var r = n(2720),
                    i = n(89768);
                class a {
                    constructor() {
                        try {
                            window.dataLayer = window.dataLayer || [], this.gtag = function() {
                                window.dataLayer.push(arguments)
                            }, this.gtag("js", new Date), this.gtag("config", r.v.analytics.trackingId, {
                                sample_rate: r.v.analytics.sampleRate
                            })
                        } catch (e) {
                            console.error("[Analytics] Error connecting to Google Tags", e)
                        }
                    }
                    setApplication(e) {
                        if (!this.gtag) return;
                        const t = {};
                        void 0 !== e.appTag && (t.app_name = e.appTag), void 0 !== e.appId && (t.app_id = e.appId), void 0 !== e.appVersion && (t.app_version = e.appVersion), void 0 !== e.appInstallerId && (t.app_installer_id = e.appInstallerId), this.gtag("set", t), (0, i.c)(`[Analytics] setApplication ${e.appTag} ${e.appId} ${e.appVersion}`)
                    }
                    trackScreenView(e) {
                        this.gtag && (this.gtag("event", "screen_view", {
                            screen_name: e,
                            send_to: r.v.analytics.trackingId
                        }), (0, i.c)(`[Analytics] trackScreenView ${e}`))
                    }
                    trackEvent(e) {
                        var t;
                        this.gtag && (this.gtag("event", e.action, {
                            value: e.value || 0,
                            event_category: e.category,
                            event_label: null !== (t = e.label) && void 0 !== t ? t : "",
                            send_to: r.v.analytics.trackingId
                        }), (0, i.c)(`[Analytics] trackEvent ${e.category} ${e.action} ${e.label}`))
                    }
                    trackEvents(e) {
                        this.gtag && e.forEach((e => {
                            this.trackEvent(e)
                        }))
                    }
                    trackTiming(e) {
                        var t, n, a;
                        this.gtag && (this.gtag("event", "timing_complete", {
                            name: null !== (t = e.name) && void 0 !== t ? t : "",
                            value: e.value || (new Date).getTime() - window.performance.timing.domComplete,
                            event_category: null !== (n = e.category) && void 0 !== n ? n : "",
                            event_label: null !== (a = e.label) && void 0 !== a ? a : "",
                            send_to: r.v.analytics.trackingId
                        }), (0, i.c)(`[Analytics] trackTiming ${e.name} ${e.value}`))
                    }
                    static get shared() {
                        return a.sharedInstance || (a.sharedInstance = new a), a.sharedInstance
                    }
                }
                a.shared
            },
            81127: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Q: () => o
                });
                var r = n(70236),
                    i = n(21944),
                    a = n(47865);
                class o {
                    constructor() {
                        this.artifacts = this.list()
                    }
                    get hasUnviewed() {
                        return this.artifacts.some((e => !e.viewed))
                    }
                    add(e, t) {
                        o.add(e, t), this.artifacts = this.list()
                    }
                    static add(e, t) {
                        if (!a.K.shared.isSupported) return;
                        const n = `${this.isTestArtifact(e)?"http":"https"}://${this.isTestArtifact(e)?"games-test.jackbox.tv":"games.jackbox.tv"}/artifact/${e.categoryId}/${e.artifactId}/`,
                            i = a.K.shared.get("galleries") || "[]";
                        try {
                            const o = JSON.parse(i) || [];
                            if (o.some((e => e.url === n))) return;
                            o.unshift({
                                url: n,
                                time: (new Date).getTime(),
                                categoryId: e.categoryId,
                                viewed: !1
                            }), a.K.shared.set("galleries", JSON.stringify(o.slice(0, 40))), t && r.c.shared.trackEvent({
                                category: "PostGame",
                                action: "galleryShown",
                                label: t
                            })
                        } catch (e) {
                            console.warn("[Artifacts] Unable to add artifact to local storage")
                        }
                    }
                    remove(e) {
                        if (!a.K.shared.isSupported) return;
                        const t = a.K.shared.get("galleries") || "[]";
                        try {
                            const n = JSON.parse(t) || [];
                            n.splice(e, 1), a.K.shared.set("galleries", JSON.stringify(n)), this.artifacts = this.list()
                        } catch (e) {
                            console.warn("[Artifacts] Unable to remove artifact")
                        }
                    }
                    setAsViewed(e) {
                        o.setAsViewed(e), this.artifacts = this.list()
                    }
                    static setAsViewed(e) {
                        if (!a.K.shared.isSupported) return;
                        const t = a.K.shared.get("galleries") || "[]";
                        try {
                            const n = JSON.parse(t) || [];
                            n.length && (n[e].viewed = !0), a.K.shared.set("galleries", JSON.stringify(n))
                        } catch (t) {
                            console.warn(`[Artifacts] Unable to mark artifact ${e} as viewed`)
                        }
                    }
                    static isTestArtifact(e) {
                        var t;
                        return -1 !== (null === (t = null == e ? void 0 : e.rootId) || void 0 === t ? void 0 : t.indexOf("test"))
                    }
                    list() {
                        if (!a.K.shared.isSupported) return [];
                        const e = new Intl.DateTimeFormat(i.o.locale, {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                            }),
                            t = a.K.shared.get("galleries") || "[]",
                            n = Date.now();
                        try {
                            return (JSON.parse(t) || []).filter((e => n - e.time < 31536e6)).map((t => {
                                const n = new Date(t.time),
                                    r = e.format(n),
                                    i = t.url.split("/"),
                                    a = "" === i[i.length - 1] ? i[i.length - 2] : i[i.length - 1];
                                let o = t.categoryId;
                                return o || (-1 !== t.url.indexOf("Quiplash2") ? o = "Quiplash2Game" : -1 !== t.url.indexOf("Drawful") ? o = "DrawfulGame" : -1 !== t.url.indexOf("TeeKO") ? o = "TeeKOGame" : -1 !== t.url.indexOf("TriviaDeath") && (o = "TriviaDeathResults")), Object.assign({
                                    id: a,
                                    gameName: o,
                                    date: r
                                }, t)
                            }))
                        } catch (e) {
                            return console.warn("[Artifacts] Unable to parse artifacts array"), []
                        }
                    }
                }
            },
            35029: (e, t, n) => {
                "use strict";
                n.d(t, {
                    W: () => c
                });
                var r = n(44285),
                    i = n(12360),
                    a = n(89768),
                    o = n(2720),
                    s = function(e, t, n, r) {
                        return new(n || (n = Promise))((function(i, a) {
                            function o(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    a(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(o, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    };
                class c {
                    constructor() {
                        this.items = [], this.autoMarkWindow = 150, this.autoMarkerCount = 0, this.automarkIgnoredKeys = [], o.v.debug && (window.debug = this.expose())
                    }
                    get markerCount() {
                        return this.items.reduce(((e, t) => "marker" in t ? e + 1 : e), 0)
                    }
                    setup(e, t) {
                        this.client = e, this.room = t, Object.keys(this.client.entities).forEach((e => {
                            this.pushEntity(this.client.entities[e])
                        })), this.items.length && this.setMarker("welcome"), e.on("artifact", (e => this.pushEntity(e))), e.on("doodle", (e => this.pushEntity(e))), e.on("drop", (e => this.pushEntity(e))), e.on("number", (e => this.pushEntity(e))), e.on("object", (e => this.pushEntity(e))), e.on("text", (e => this.pushEntity(e))), this.hijackConsole(), this.hijackSend()
                    }
                    reset() {
                        this.items = []
                    }
                    setAutomarkIgnoredKeys(e) {
                        this.automarkIgnoredKeys = e
                    }
                    hijackConsole() {
                        const e = console.error.bind(console);
                        console.error = (...t) => {
                            this.pushError(t), e.apply(console, t)
                        }
                    }
                    hijackSend() {
                        window.Proxy && (this.client.send = new Proxy(this.client.send, {
                            apply: (e, t, n) => (this.pushSend(n), e.apply(t, n))
                        }))
                    }
                    pushEntity(e) {
                        (0, a.c)("[Debug] pushEntity", e), e instanceof r.ArtifactEntity ? this.items.push(Object.assign({
                            type: "artifact"
                        }, e)) : e instanceof r.DoodleEntity ? this.items.push(Object.assign({
                            type: "doodle"
                        }, e)) : e instanceof r.DropEntity ? this.items.push({
                            key: e.key,
                            type: "drop"
                        }) : e instanceof r.NumberEntity ? this.items.push({
                            key: e.key,
                            type: "number",
                            value: e.val,
                            meta: e.meta,
                            restrictions: e.restrictions
                        }) : e instanceof r.ObjectEntity ? (e.val.kind && (this.automarkPendingLabel = e.val.kind), this.items.push({
                            key: e.key,
                            type: "object",
                            value: e.val,
                            meta: e.meta
                        })) : e instanceof r.TextEntity && this.items.push({
                            key: e.key,
                            type: "text",
                            value: e.text,
                            meta: e.meta
                        }), this.automarkIgnoredKeys.includes(e.key) || this.startAutoMarkTimeout()
                    }
                    pushError(...e) {
                        this.items.push({
                            error: e
                        })
                    }
                    pushSend(e) {
                        this.items.push({
                            opcode: e[0],
                            arguments: e[1]
                        })
                    }
                    setMarker(e) {
                        const t = this.items.filter((t => t.marker === e)).length;
                        e = t ? `label-${t}` : e, this.items.push({
                            marker: e
                        }), this.clearAutoMarkTimeout()
                    }
                    setAutoMarker() {
                        var e;
                        const t = null !== (e = this.automarkPendingLabel) && void 0 !== e ? e : "marker";
                        this.items.push({
                            marker: `${this.autoMarkerCount}-${t}`
                        }), this.autoMarkerCount += 1, delete this.automarkPendingLabel, this.clearAutoMarkTimeout()
                    }
                    startAutoMarkTimeout() {
                        this.clearAutoMarkTimeout(), this.autoMarkTimeout = window.setTimeout((() => {
                            this.setAutoMarker()
                        }), this.autoMarkWindow)
                    }
                    clearAutoMarkTimeout() {
                        this.autoMarkTimeout && (window.clearTimeout(this.autoMarkTimeout), delete this.autoMarkTimeout)
                    }
                    send(e) {
                        return s(this, void 0, void 0, (function*() {
                            if (!this.client) return;
                            const t = yield this.sendToEcast();
                            t && o.v.slack.url && (yield this.sendToSlack(t, e))
                        }))
                    }
                    getSendData() {
                        return {
                            appTag: this.room.appTag,
                            state: {
                                version: 3,
                                room: {
                                    code: this.room.code,
                                    appTag: this.room.appTag
                                },
                                client: {
                                    id: this.client.id,
                                    name: this.client.name,
                                    role: this.client.role
                                },
                                items: this.items
                            }
                        }
                    }
                    sendToEcast() {
                        return s(this, void 0, void 0, (function*() {
                            const e = this.getSendData();
                            try {
                                const t = yield fetch("https://ecast.jackboxgames.com/api/v2/controller/state", {
                                    method: "POST",
                                    body: JSON.stringify(e)
                                }), n = yield t.json();
                                if (!n.body || !n.body.url) return console.warn(n), null;
                                const r = n.body.url.split("/"),
                                    i = r[r.length - 1].replace(".json", ""),
                                    a = r[r.length - 2];
                                return {
                                    json: n.body.url,
                                    test: `https://test.jackbox.tv/#debug/cloud/${a}/${i}/`,
                                    local: `http://localhost:9090/#debug/cloud/${a}/${i}/`
                                }
                            } catch (e) {
                                return console.error("[Debug] sendToEcast", e), null
                            }
                        }))
                    }
                    sendToSlack(e, t) {
                        var n;
                        return s(this, void 0, void 0, (function*() {
                            const r = this.items.length - this.markerCount,
                                s = `${this.markerCount} ${1===this.markerCount?"marker":"markers"}`,
                                c = `${r} ${1===r?"entity":"entities"}`,
                                l = [{
                                    type: "mrkdwn",
                                    text: "*Version:* 4.2.4"
                                }, {
                                    type: "mrkdwn",
                                    text: `*Domain:* ${window.location.hostname}`
                                }];
                            this.client && l.unshift({
                                type: "mrkdwn",
                                text: `${this.client.role}:${this.client.id}`
                            });
                            try {
                                const r = o.v.slack.url;
                                if (!r) return;
                                let u = `*<${e.json}|${null===(n=this.client)||void 0===n?void 0:n.name}>* (${s}, ${c})`;
                                t && (u += `\n${t}`);
                                const d = [{
                                        type: "section",
                                        text: {
                                            type: "mrkdwn",
                                            text: u
                                        }
                                    }, {
                                        type: "context",
                                        elements: l
                                    }, {
                                        type: "actions",
                                        elements: [{
                                            type: "button",
                                            action_id: "actionId-0",
                                            url: e.json,
                                            text: {
                                                type: "plain_text",
                                                text: "JSON",
                                                emoji: !0
                                            }
                                        }, {
                                            type: "button",
                                            action_id: "actionId-1",
                                            url: e.test,
                                            text: {
                                                type: "plain_text",
                                                text: "test.jackbox.tv",
                                                emoji: !0
                                            }
                                        }, {
                                            type: "button",
                                            action_id: "actionId-3",
                                            url: e.local,
                                            text: {
                                                type: "plain_text",
                                                text: "localhost:9090",
                                                emoji: !0
                                            }
                                        }]
                                    }],
                                    f = {
                                        channels: o.v.slack.channel,
                                        unfurl_links: !1,
                                        blocks: d
                                    };
                                if (this.room) {
                                    f.icon_emoji = this.room.appTag;
                                    const e = (0, i.cF)(this.room.appTag);
                                    f.username = `DebugRecorder ${e?e.name:this.room.appTag}`
                                }
                                const p = yield fetch(r, {
                                    method: "POST",
                                    body: JSON.stringify(f)
                                }), v = yield p.text();
                                (0, a.c)("[Debug] sendToSlack", v)
                            } catch (e) {
                                console.error("[Debug] sendToSlack", e)
                            }
                        }))
                    }
                    download(e) {
                        var t, n;
                        e = null != e ? e : `${null!==(n=null===(t=this.room)||void 0===t?void 0:t.appTag)&&void 0!==n?n:"unknown"}-debug`;
                        const r = this.getSendData().state,
                            i = JSON.stringify(r, null, 4),
                            a = document.createElement("a");
                        a.setAttribute("href", `data:text/json;charset=utf-8,${encodeURIComponent(i)}`), a.setAttribute("download", `${e}.json`), a.style.display = "none", document.body.appendChild(a), a.click(), document.body.removeChild(a)
                    }
                    open() {
                        var e;
                        const t = this.getSendData().state,
                            n = JSON.stringify(t, null, 4),
                            r = window.open();
                        r.document.write(`\n            <iframe src="data:text/json;charset=utf-8,${encodeURIComponent(n)}" frameborder="0" style="border:0;\n                top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen>\n            </iframe>\n        `), r.document.title = `${null===(e=this.room)||void 0===e?void 0:e.appTag} debug JSON`, r.document.close(), r.focus()
                    }
                    expose() {
                        return {
                            print: () => this.items,
                            reset: () => this.reset(),
                            setMarker: e => this.setMarker(e),
                            download: e => this.download(e),
                            open: () => this.open(),
                            send: e => this.send(e)
                        }
                    }
                    static get shared() {
                        return c.sharedInstance || (c.sharedInstance = new c), c.sharedInstance
                    }
                }
            },
            21944: (e, t, n) => {
                "use strict";
                n.d(t, {
                    o: () => a
                });
                var r = n(89446);
                const i = {
                    English: "en",
                    French: "fr",
                    Italian: "it",
                    German: "de",
                    Spanish: "es",
                    SpanishIntl: "es-XL"
                };
                class a {
                    static setup(e) {
                        const t = r.c.queryParam("locale");
                        t && this.isSupportedLocale(t) ? this.locale = t : e && this.isSupportedLocale(e) ? this.locale = e : this.locale = this.getPreferredDeviceLocale()
                    }
                    static getPreferredDeviceLocale() {
                        const e = navigator.languages;
                        for (let t = 0; t < e.length; t++) {
                            const n = e[t];
                            if (this.isSupportedLocale(n)) return n;
                            const r = n.split("-")[0];
                            if (this.isSupportedLocale(r)) return r
                        }
                        return i.English
                    }
                    static isSupportedLocale(e) {
                        return Object.values(i).includes(e)
                    }
                }
            },
            89768: (e, t, n) => {
                "use strict";
                n.d(t, {
                    c: () => i
                });
                var r = n(2720);
                const i = (...e) => {
                    r.v.debug && console.log(...e)
                }
            },
            47865: (e, t, n) => {
                "use strict";
                n.d(t, {
                    K: () => i
                });
                var r = n(89446);
                class i {
                    constructor() {
                        this.isDisabled = !1, this.namespace = r.c.queryParam("ns") || "blobcast", r.c.queryParam("nc") && (this.isDisabled = !0)
                    }
                    get isSupported() {
                        if (this.isDisabled) return !1;
                        try {
                            return !!window.localStorage && (this.set("test", "1"), this.remove("test"), !0)
                        } catch (e) {
                            return !1
                        }
                    }
                    get(e) {
                        return window.localStorage.getItem(`${this.namespace}-${e}`)
                    }
                    set(e, t) {
                        return window.localStorage.setItem(`${this.namespace}-${e}`, t)
                    }
                    remove(e) {
                        return window.localStorage.removeItem(`${this.namespace}-${e}`)
                    }
                    setTag(e) {
                        var t;
                        const n = e.toLowerCase(),
                            r = null !== (t = window.localStorage.getItem(`${this.namespace}-tags`)) && void 0 !== t ? t : "[]",
                            i = n.split("-")[0];
                        let a = JSON.parse(r);
                        a = a.filter((e => {
                            const t = e.split("-")[0];
                            return i !== t
                        })), a.push(n), window.localStorage.setItem(`${this.namespace}-tags`, JSON.stringify(a))
                    }
                    static get shared() {
                        return i.sharedInstance || (i.sharedInstance = new i), i.sharedInstance
                    }
                }
                i.shared
            },
            89446: (e, t, n) => {
                "use strict";
                n.d(t, {
                    c: () => i
                });
                var r = n(2720);
                class i {
                    static get isCanvasSupported() {
                        const e = document.createElement("canvas");
                        return !(!e.getContext || !e.getContext("2d"))
                    }
                    static get hasHashRoomCode() {
                        return !!window.location.hash && 5 === window.location.hash.length
                    }
                    static get hashRoomCode() {
                        return window.location.hash.substr(1, 4).toUpperCase()
                    }
                    static get serverUrl() {
                        const e = this.queryParam("s");
                        return e ? "live" === e ? r.v.ecast.host : "local" === e ? "https://localhost" : -1 !== e.indexOf("localhost") ? e : `${e}.jackboxgames.com` : r.v.ecast.host
                    }
                    static get clientEnvironment() {
                        switch (window.location.origin) {
                            case "https://jackbox.tv":
                                return "production";
                            case "https://qa.jackbox.tv":
                                return "staging";
                            case "https://test.jackbox.tv":
                                return "development";
                            default:
                                return "catchall"
                        }
                    }
                    static queryParam(e) {
                        var t;
                        return null !== (t = new URLSearchParams(window.location.search).get(e)) && void 0 !== t ? t : ""
                    }
                    static htmlUnescape(e) {
                        return String(e).replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
                    }
                    static htmlEscape(e) {
                        return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    }
                    static htmlTagsToBBCode(e, t) {
                        if (!t.length) throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
                        return t.reduce(((e, t) => (e.replaceAll(`<${t[0]}>`, `[${t[1]}]`), e.replaceAll(`</${t[0]}>`, `</${t[1]}>`), e)), e)
                    }
                    static safeText(e) {
                        const t = document.createElement("div");
                        return t.textContent = e, t.innerHTML
                    }
                    static toPrecision(e, t) {
                        const n = Math.pow(10, t);
                        return Math.round((e + Number.EPSILON) * n) / n
                    }
                    static hexToRgb(e) {
                        const t = new ArrayBuffer(4);
                        new DataView(t).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
                        const n = new Uint8Array(t);
                        return `${n[1]},${n[2]},${n[3]}`
                    }
                    static adjustColor(e, t) {
                        let n = !1;
                        "#" === e[0] && (e = e.slice(1), n = !0);
                        const r = parseInt(e, 16),
                            i = Math.min(Math.max(0, (r >> 16) * t), 255),
                            a = Math.min(Math.max(0, (r >> 8 & 255) * t), 255);
                        let o = (Math.min(Math.max(0, (255 & r) * t), 255) | a << 8 | i << 16).toString(16);
                        for (; o.length < e.length;) o = `0${o}`;
                        return (n ? "#" : "") + o
                    }
                    static sanitize(e) {
                        const t = this.sanitizeInput(e).replace(/'/g, "’");
                        return this.htmlEscape(t).trim()
                    }
                    static sanitizeName(e) {
                        return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "’")
                    }
                    static sanitizeInput(e) {
                        return e.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
                    }
                    static isInTolerance(e, t, n) {
                        return !(Math.abs(e.x - t.x) < n || Math.abs(e.y - t.y) > n)
                    }
                    static getDistanceBetweenPoints(e, t) {
                        const n = [e.x - t.x, e.y - t.y],
                            r = Math.hypot(...n);
                        return Math.round(100 * r) / 100
                    }
                    static getMidpoint(e, t) {
                        return {
                            x: (e.x + t.x) / 2,
                            y: (e.y + t.y) / 2
                        }
                    }
                    static getAngleBetweenPoints(e, t) {
                        let n = Math.atan2(t.y - e.y, t.x - e.x) * (180 / Math.PI);
                        return n < 0 && (n += 360), 360 - n
                    }
                    static getAngularDistance(e, t) {
                        let n = (t - e) % 360;
                        const r = n < 0 ? 1 : -1;
                        return n = Math.abs(n), n > 180 ? r * (360 - n) : r * n
                    }
                    static getVelocity(e, t, n, r) {
                        return this.getDistanceBetweenPoints(e, n) / (r - t)
                    }
                    static isInsideElement(e, t) {
                        const n = t.getBoundingClientRect();
                        return !(e.x < n.left || e.x > n.left + n.width || e.y < n.top || e.y > n.top + n.height)
                    }
                    static sleep(e) {
                        return new Promise((t => setTimeout(t, e)))
                    }
                }
            },
            54905: (e, t, n) => {
                "use strict";
                n.d(t, {
                    _: () => i
                });
                var r = n(70141);
                const i = {
                    install(e) {
                        const t = {
                            section: r.Vp.create("section", ((e, t, {
                                section: n
                            }) => `<div ${n?`class="section ${n}"`:'class="section"'}>${t}</div>`))
                        };
                        ["b", "bold", "B"].forEach((e => {
                            t[e] = r.Vp.create(e, ((e, t) => `<strong>${t}</strong>`))
                        })), ["i", "italic", "I"].forEach((e => {
                            t[e] = r.Vp.create(e, ((e, t) => `<em>${t}</em>`))
                        }));
                        const n = new r.GW(t);
                        e.directive("bb", {
                            inserted(e, t) {
                                const r = document.createElement("div");
                                r.textContent = t.value, e.innerHTML = n.parse(r.innerHTML)
                            },
                            update(e, t) {
                                const r = document.createElement("div");
                                r.textContent = t.value, e.innerHTML = n.parse(r.innerHTML)
                            }
                        }), e.mixin({
                            beforeCreate() {
                                this.$options.bb && Object.keys(this.$options.bb).forEach((e => {
                                    const t = this.$options.bb[e];
                                    t instanceof Function ? n.addTag(e, r.Vp.create(e, t)) : n.addTag(e, r.Vp.create(e, t.generator, t.options))
                                }))
                            }
                        }), e.prototype.$bb = e => ("string" != typeof e && console.warn(`[BBCodePlugin] Received unexpected ${typeof e} with value ${e};converting to string before parsing.`), n.parse(String(e)))
                    }
                }
            },
            45222: (e, t, n) => {
                "use strict";
                n.d(t, {
                    e: () => v,
                    M: () => h
                });
                var r = n(44285),
                    i = n(2934),
                    a = n.n(i),
                    o = n(50361),
                    s = n.n(o),
                    c = n(23279),
                    l = n.n(c),
                    u = n(36968),
                    d = n.n(u),
                    f = n(81127);
                const p = new class {
                        constructor() {
                            this.mappedValues = {}, this.shouldParseBlobcast = !1, this.pausedKeys = null, this.pause = (e = []) => {
                                this.pausedKeys = e
                            }, this.resume = () => {
                                this.pausedKeys = null, this.sync()
                            }, this.sync = l()((() => {
                                this.wsClient && (this.keyMap || this.providerMap) && (this.pausedKeys && !this.pausedKeys.length || (this.hotValues = {}, this.newValues = {}, this.normalize().mapKeysToValues().mapProvidersToValues().deleteDropped().hydrateRefs().syncExisting(), delete this.hotValues, delete this.newValues))
                            }), 50)
                        }
                        valueForEntity(e) {
                            return e instanceof r.ArtifactEntity || e instanceof r.DoodleEntity ? e : e instanceof r.ObjectEntity ? s()(e.val) : e instanceof r.TextEntity ? e.text : e instanceof r.NumberEntity ? e.val : null
                        }
                        normalize() {
                            var e;
                            const t = Object.keys(this.wsClient.entities);
                            for (let n = 0; n < t.length; n++) {
                                let r = t[n];
                                if (null === (e = this.pausedKeys) || void 0 === e ? void 0 : e.includes(r)) continue;
                                const i = this.valueForEntity(this.wsClient.entities[r]);
                                if (null != i) {
                                    if (this.shouldParseBlobcast) {
                                        const e = r.split(":");
                                        if ("bc" === e[0])
                                            if ("customer" === e[1]) {
                                                if (e[2] !== `${this.wsClient.id}`) continue;
                                                r = "player"
                                            } else "room" === e[1] && (r = "room")
                                    }
                                    this.hotValues[r] = i
                                }
                            }
                            return this
                        }
                        hydrateRefs() {
                            const e = (t, n, r = !1) => {
                                if (t.ref) {
                                    const e = this.hotValues[t.ref];
                                    if (void 0 === e) throw new Error(`[ecastPlugin] entity "${n}" referenced entity "${t.ref}" but it does not exist`);
                                    d()(this.newValues, n, e)
                                } else r && Object.entries(t).forEach((([t, i]) => {
                                    null !== i && "object" == typeof i && e(i, `${n}.${t}`, r)
                                }))
                            };
                            return Object.entries(this.newValues).forEach((([t, n]) => {
                                n && Object.entries(n).forEach((([n, r]) => {
                                    null !== r && "object" == typeof r && e(r, `${t}.${n}`, this.keyHasDeepRefs(t))
                                }))
                            })), this
                        }
                        keyHasDeepRefs(e) {
                            var t, n, r, i;
                            return !!(null === (n = null === (t = this.keyMap) || void 0 === t ? void 0 : t[e]) || void 0 === n ? void 0 : n.hasDeepRefs) || !!(null === (i = null === (r = this.providerMap) || void 0 === r ? void 0 : r[e]) || void 0 === i ? void 0 : i.hasDeepRefs)
                        }
                        mapKeysToValues() {
                            if (!this.keyMap) return this;
                            for (let e = 0; e < this.keyMapKeys.length; e++) this.newValues[this.keyMapKeys[e]] = this.hotValues[this.keyMap[this.keyMapKeys[e]].key];
                            return this
                        }
                        mapProvidersToValues() {
                            if (!this.providerMap) return this;
                            for (let e = 0; e < this.providerMapKeys.length; e++) this.newValues[this.providerMapKeys[e]] = this.providerMap[this.providerMapKeys[e]].fn(this.hotValues, this.wsClient);
                            return this
                        }
                        deleteDropped() {
                            const e = Object.keys(this.mappedValues);
                            for (let t = 0; t < e.length; t++) this.newValues[e[t]] || a().delete(this.mappedValues, e[t]);
                            return this
                        }
                        syncExisting() {
                            const e = Object.keys(this.newValues);
                            for (let t = 0; t < e.length; t++) this.mappedValues[e[t]] ? this.mappedValues[e[t]] = this.newValues[e[t]] : a().set(this.mappedValues, e[t], this.newValues[e[t]]);
                            return this.mappedValues
                        }
                        addKeys(e) {
                            this.keyMap || (this.keyMap = {}), Object.keys(e).forEach((t => {
                                var n;
                                if ("function" != typeof e[t])
                                    if ("object" != typeof e[t]) this.keyMap[t] = {
                                        key: e[t]
                                    };
                                    else {
                                        const r = e[t];
                                        this.keyMap[t] = {
                                            key: r.fn ? r.fn(this.wsClient) : r.key,
                                            hasDeepRefs: null !== (n = r.hasDeepRefs) && void 0 !== n && n
                                        }
                                    }
                                else {
                                    const n = e[t];
                                    this.keyMap[t] = {
                                        key: n(this.wsClient),
                                        hasDeepRefs: !1
                                    }
                                }
                            })), this.keyMapKeys = Object.keys(this.keyMap), this.sync()
                        }
                        purgeKeys(e) {
                            this.keyMap && (Object.keys(e).forEach((e => {
                                this.keyMap[e] && delete this.keyMap[e]
                            })), this.keyMapKeys = Object.keys(this.keyMap), this.sync())
                        }
                        addProviders(e) {
                            this.providerMap || (this.providerMap = {}), Object.keys(e).forEach((t => {
                                var n;
                                if ("object" != typeof e[t]) this.providerMap[t] = {
                                    fn: e[t]
                                };
                                else {
                                    const r = e[t];
                                    this.providerMap[t] = {
                                        fn: r.fn,
                                        hasDeepRefs: null !== (n = r.hasDeepRefs) && void 0 !== n && n
                                    }
                                }
                            })), this.providerMapKeys = Object.keys(this.providerMap), this.sync()
                        }
                        purgeProviders(e) {
                            this.providerMap && (Object.keys(e).forEach((e => {
                                this.providerMap[e] && delete this.providerMap[e]
                            })), this.providerMapKeys = Object.keys(this.providerMap), this.sync())
                        }
                    },
                    v = {
                        data: () => ({
                            $ecastValues: p.mappedValues
                        })
                    },
                    h = {
                        install(e) {
                            Object.defineProperty(e.prototype, "$api", {
                                get() {
                                    if (!p.apiClient) throw Error("[ecastPlugin] APIClient does not exist yet.");
                                    return p.apiClient
                                },
                                set(e) {
                                    p.apiClient = e
                                }
                            }), Object.defineProperty(e.prototype, "$ecast", {
                                get() {
                                    if (!p.wsClient) throw Error("[ecastPlugin] WSClient does not exist yet.");
                                    return p.wsClient
                                },
                                set(e) {
                                    p.wsClient || (p.wsClient = e, e.on("notification", p.sync), e.on("connection", p.sync), e.on("artifact", (e => f.Q.add(e))), p.sync())
                                }
                            }), Object.defineProperty(e.prototype, "$clientWelcome", {
                                get() {
                                    if (!p.clientWelcome) throw Error("[ecastPlugin] ClientWelcome does not exist yet");
                                    return p.clientWelcome
                                },
                                set(e) {
                                    p.clientWelcome = e
                                }
                            }), e.prototype.$syncEcast = p.sync, e.prototype.$pauseEcastUpdates = p.pause, e.prototype.$resumeEcastUpdates = p.resume, e.mixin({
                                beforeCreate() {
                                    this.$options.usesBlobcast && (p.shouldParseBlobcast = !0), this.$options.ecastKeys && p.addKeys(this.$options.ecastKeys), this.$options.ecastProviders && p.addProviders(this.$options.ecastProviders)
                                },
                                beforeDestroy() {
                                    this.$options.ecastKeys && p.purgeKeys(this.$options.ecastKeys), this.$options.ecastProviders && p.purgeProviders(this.$options.ecastProviders)
                                }
                            })
                        }
                    }
            },
            65835: (e, t, n) => {
                "use strict";
                n.d(t, {
                    b: () => b,
                    S: () => y
                });
                var r = n(20816),
                    i = n(39666),
                    a = n(55507),
                    o = n(35029),
                    s = n(89446),
                    c = n(2934),
                    l = n.n(c),
                    u = n(2720);
                class d {
                    constructor() {
                        this.fatalError = {
                            hasCrashed: !1
                        }
                    }
                    setupSentry() {
                        r.S({
                            Vue: l(),
                            dsn: u.v.sentry.dsn,
                            debug: u.v.sentry.debug,
                            allowUrls: u.v.sentry.allowedUrls,
                            attachProps: !0,
                            environment: s.c.clientEnvironment,
                            ignoreErrors: ["ceCurrentVideo.currentTime", "chrome-extension", "ResizeObserver", "webkitExitFullScreen", "window.webkit.messageHandlers.selectedTextHandler.postMessage", "promiseResolveThenableJob", "Cannot read property 'then' of undefined", "null is not an object (evaluating 't.scrollHeight')", "Cannot read properties of null (reading 'removeEventListener')"],
                            logErrors: !0,
                            release: "jackbox-tv@4.2.4",
                            beforeSend: (e, t) => {
                                return n = this, r = void 0, c = function*() {
                                    if (t.originalException instanceof a.EcastEntityNotFound) return i.uT("no entity found having key", {
                                        extra: {
                                            exception: t.originalException
                                        }
                                    }), null;
                                    if (t.originalException instanceof a.EcastFilterError) return null;
                                    "error" === e.level && (l().set(this.fatalError, "hasCrashed", !0), l().set(this.fatalError, "event", e), l().set(this.fatalError, "hint", t));
                                    try {
                                        const t = yield o.W.shared.sendToEcast();
                                        t && (e.contexts = e.contexts || {}, e.contexts.debug = t)
                                    } catch (e) {
                                        console.error("failed to send states to ecast", e)
                                    }
                                    return e
                                }, new((s = void 0) || (s = Promise))((function(e, t) {
                                    function i(e) {
                                        try {
                                            o(c.next(e))
                                        } catch (e) {
                                            t(e)
                                        }
                                    }

                                    function a(e) {
                                        try {
                                            o(c.throw(e))
                                        } catch (e) {
                                            t(e)
                                        }
                                    }

                                    function o(t) {
                                        var n;
                                        t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s((function(e) {
                                            e(n)
                                        }))).then(i, a)
                                    }
                                    o((c = c.apply(n, r || [])).next())
                                }));
                                var n, r, s, c
                            }
                        })
                    }
                    handleEcastError(e, t) {
                        var n, r;
                        if (e instanceof a.EcastEntityNotFound) console.warn(e);
                        else if (e instanceof a.EcastFilterError) console.warn(e);
                        else if (e instanceof a.EcastRateLimitExceeded) console.warn(e);
                        else if (e instanceof Error && (null === (n = e.message) || void 0 === n ? void 0 : n.includes("Socket not ready to send"))) console.warn(e);
                        else {
                            if (!(e instanceof Error && (null === (r = e.message) || void 0 === r ? void 0 : r.includes("No connection available")))) throw t ? console.error(t, e) : console.error(e), e;
                            console.warn(e)
                        }
                    }
                    static setTag(e, t) {
                        i.YA(e, t)
                    }
                }
                var f = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "jbg fatal"
                    }, [n("div", {
                        staticClass: "constrain"
                    }, [n("a", {
                        staticClass: "logo",
                        attrs: {
                            href: ".",
                            "aria-label": "Jackbox game logo"
                        }
                    }), e._v(" "), n("div", {
                        staticClass: "content"
                    }, [n("h1", [e._v("You have encountered an error")]), e._v(" "), n("p", [e._v("Something went wrong! But don't worry, you can try a few things to get going.")]), e._v(" "), e._m(0), e._v(" "), n("button", {
                        on: {
                            click: e.onFeedbackClick
                        }
                    }, [e._v("Tell us what happened")]), e._v(" "), n("hr"), e._v(" "), n("pre", {
                        staticClass: "error"
                    }, [e._v(e._s(e.message))])])])])
                };
                f._withStripped = !0;
                var p = n(63430);
                const v = l().extend({
                    props: {
                        error: Object
                    },
                    computed: {
                        message() {
                            var e, t, n;
                            const r = null !== (t = null === (e = this.error.event) || void 0 === e ? void 0 : e.event_id) && void 0 !== t ? t : "Unknown";
                            let i = "";
                            const a = null === (n = this.error.hint) || void 0 === n ? void 0 : n.originalException;
                            return i = a ? "string" == typeof a ? a : a.message : "An unknown error occured", `Version:\n4.2.4\n\nEvent ID:\n${r}\n\n${i}`
                        }
                    },
                    methods: {
                        onFeedbackClick() {
                            var e, t;
                            (0, p.jp)({
                                id: null !== (t = null === (e = this.error.event) || void 0 === e ? void 0 : e.event_id) && void 0 !== t ? t : "Unknown"
                            })
                        }
                    }
                });
                var h = (0, n(51900).Z)(v, f, [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("ul", [n("li", [e._v("Refresh the page")]), e._v(" "), n("li", [e._v("Turn off adblockers or other browser extensions.")]), e._v(" "), n("li", [e._v("Check your connection to the Internet.")]), e._v(" "), n("li", [e._v("Make sure you're using an up-to-date browser.")]), e._v(" "), n("li", [e._v("If that doesn't work, let us know.")])])
                }], !1, null, "5ac518b8", null);
                h.options.__file = "src/services/vue/fatal/Fatal.vue";
                const g = h.exports,
                    m = new d,
                    b = {
                        data: () => ({
                            $fatalError: m.fatalError
                        })
                    },
                    y = {
                        install(e) {
                            m.setupSentry(), e.component("Fatal", g), e.prototype.$setSentryTag = d.setTag, e.prototype.$handleEcastError = m.handleEcastError
                        }
                    }
            },
            99159: (e, t, n) => {
                "use strict";
                n.d(t, {
                    M: () => b
                });
                var r = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("transition", {
                        attrs: {
                            name: "modal-transition"
                        }
                    }, [e.props ? n("div", {
                        staticClass: "modal",
                        class: e.classes,
                        on: {
                            click: function(t) {
                                return t.target !== t.currentTarget ? null : e.onBackgroundClick.apply(null, arguments)
                            }
                        }
                    }, [n("ModalContent", e._b({
                        staticClass: "content",
                        on: {
                            resolve: e.onResolve
                        }
                    }, "ModalContent", e.props, !1))], 1) : e._e()])
                };
                r._withStripped = !0;
                var i = n(2934),
                    a = n.n(i),
                    o = function() {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("div", {
                            staticClass: "error-model",
                            class: e.classes
                        }, [r("img", {
                            staticClass: "image",
                            attrs: {
                                src: n(99849),
                                alt: "Error"
                            }
                        }), e._v(" "), r("h3", {
                            directives: [{
                                name: "bb",
                                rawName: "v-bb",
                                value: e.text,
                                expression: "text"
                            }],
                            staticClass: "text"
                        }), e._v(" "), e.subtext ? r("h3", {
                            directives: [{
                                name: "bb",
                                rawName: "v-bb",
                                value: e.subtext,
                                expression: "subtext"
                            }],
                            staticClass: "subtext"
                        }) : e._e(), e._v(" "), r("div", {
                            staticClass: "actions"
                        }, [r("button", {
                            directives: [{
                                name: "bb",
                                rawName: "v-bb",
                                value: e.dismissText,
                                expression: "dismissText"
                            }],
                            on: {
                                click: function(t) {
                                    return t.preventDefault(), e.$emit("resolve")
                                }
                            }
                        })])])
                    };
                o._withStripped = !0;
                const s = a().extend({
                    props: {
                        text: String,
                        subtext: String,
                        classes: {
                            type: [Array, String],
                            default: () => "jbg"
                        },
                        dismissText: String
                    }
                });
                var c = n(51900),
                    l = (0, c.Z)(s, o, [], !1, null, "14d9c086", null);
                l.options.__file = "src/services/vue/modal/common/ErrorModal.vue";
                const u = l.exports;
                var d = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "options-modal",
                        class: e.classes
                    }, [n("h3", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.text,
                            expression: "text"
                        }],
                        staticClass: "text"
                    }), e._v(" "), e.subtext ? n("h3", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.subtext,
                            expression: "subtext"
                        }],
                        staticClass: "subtext"
                    }) : e._e(), e._v(" "), n("div", {
                        staticClass: "actions"
                    }, e._l(e.options, (function(t, r) {
                        return n("button", {
                            directives: [{
                                name: "bb",
                                rawName: "v-bb",
                                value: t.text,
                                expression: "option.text"
                            }],
                            key: r,
                            class: t.classes,
                            on: {
                                click: function(n) {
                                    return n.preventDefault(), e.$emit("resolve", t.value)
                                }
                            }
                        })
                    })), 0)])
                };
                d._withStripped = !0;
                const f = a().extend({
                    props: {
                        text: String,
                        subtext: String,
                        classes: {
                            type: [Array, String],
                            default: () => "jbg"
                        },
                        options: Array
                    }
                });
                var p = (0, c.Z)(f, d, [], !1, null, "f6208320", null);
                p.options.__file = "src/services/vue/modal/common/OptionsModal.vue";
                const v = p.exports,
                    h = a().extend({
                        data: () => ({
                            classes: "jbg",
                            props: null,
                            resolve: null
                        }),
                        beforeMount() {
                            this.$registerModal(this)
                        },
                        methods: {
                            show(e, t = {}, n = {}) {
                                return this.props = t, this.classes = n.classes || "jbg", this.$options.components.ModalContent = "Error" === e ? u : "Options" === e ? v : e, new Promise((e => {
                                    this.resolve = e
                                }))
                            },
                            onResolve(...e) {
                                this.props = null, this.resolve(...e)
                            },
                            onBackgroundClick() {
                                this.props = null, this.resolve()
                            }
                        }
                    });
                var g = (0, c.Z)(h, r, [], !1, null, "a0fd2f6c", null);
                g.options.__file = "src/services/vue/modal/Modal.vue";
                const m = g.exports,
                    b = {
                        instance: void 0,
                        install(e) {
                            e.prototype.$showModal || (e.component("Modal", m), e.prototype.$registerModal = e => {
                                this.instance = e
                            }, e.prototype.$showModal = (e, t = {}, n) => {
                                if (!this.instance) throw new Error("No ModalComponent is registered");
                                return this.instance.show(e, t, n)
                            })
                        }
                    }
            },
            35271: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    if ("svg" !== t.name) throw new Error("[inlineSVGPlugin] Element is not svg");
                    const n = document.createElement("svg");
                    if (n.innerHTML = t.value, !n.firstElementChild) throw new Error("[inlineSVGPlugin] SVG is empty or does not exist");
                    const r = n.firstElementChild.attributes;
                    for (let t = 0; t < r.length; t++) e.setAttribute(r[t].name, r[t].value);
                    e.innerHTML = n.firstElementChild.innerHTML
                }
                n.d(t, {
                    L: () => i
                });
                const i = {
                    install(e) {
                        e.directive("svg", {
                            inserted: r,
                            update: r
                        })
                    }
                }
            },
            90390: (e, t, n) => {
                "use strict";
                n.d(t, {
                    p: () => r
                });
                const r = {
                    install(e) {
                        let t = "",
                            n = "";
                        const r = e => e instanceof Function ? e() : e,
                            i = e => {
                                const t = document.querySelector('meta[name="theme-color"]');
                                t && (document.body && (document.body.style.background = e), t.setAttribute("content", e), n = e)
                            };
                        e.prototype.$setThemeColor = function(e) {
                            this.$options.themeColor = e, i(e)
                        }, e.mixin({
                            mounted() {
                                if (!this.$options.themeColor) return;
                                const e = r(this.$options.themeColor);
                                i(e), "game" === this.$attrs.name && (t = e)
                            },
                            beforeDestroy() {
                                this.$options.themeColor && r(this.$options.themeColor) === n && i(t)
                            }
                        })
                    }
                }
            },
            99849: (e, t, n) => {
                "use strict";
                e.exports = n.p + "assets/25f44f506ec98accb045.png"
            },
            24654: () => {}
        },
        c = {};

    function l(e) {
        var t = c[e];
        if (void 0 !== t) return t.exports;
        var n = c[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return s[e].call(n.exports, n, n.exports, l), n.loaded = !0, n.exports
    }
    l.m = s, e = [], l.O = (t, n, r, i) => {
        if (!n) {
            var a = 1 / 0;
            for (c = 0; c < e.length; c++) {
                for (var [n, r, i] = e[c], o = !0, s = 0; s < n.length; s++)(!1 & i || a >= i) && Object.keys(l.O).every((e => l.O[e](n[s]))) ? n.splice(s--, 1) : (o = !1, i < a && (a = i));
                o && (e.splice(c--, 1), t = r())
            }
            return t
        }
        i = i || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
        e[c] = [n, r, i]
    }, l.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return l.d(t, {
            a: t
        }), t
    }, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function(e, r) {
        if (1 & r && (e = this(e)), 8 & r) return e;
        if ("object" == typeof e && e) {
            if (4 & r && e.__esModule) return e;
            if (16 & r && "function" == typeof e.then) return e
        }
        var i = Object.create(null);
        l.r(i);
        var a = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var o = 2 & r && e;
            "object" == typeof o && !~t.indexOf(o); o = n(o)) Object.getOwnPropertyNames(o).forEach((t => a[t] = () => e[t]));
        return a.default = () => e, l.d(i, a), i
    }, l.d = (e, t) => {
        for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, n) => (l.f[n](e, t), t)), [])), l.u = e => e + ".js", l.miniCssF = e => e + ".css", l.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), l.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r = {}, i = "jackbox-tv:", l.l = (e, t, n, a) => {
        if (r[e]) r[e].push(t);
        else {
            var o, s;
            if (void 0 !== n)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var d = c[u];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == i + n) {
                        o = d;
                        break
                    }
                }
            o || (s = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, l.nc && o.setAttribute("nonce", l.nc), o.setAttribute("data-webpack", i + n), o.src = e), r[e] = [t];
            var f = (t, n) => {
                    o.onerror = o.onload = null, clearTimeout(p);
                    var i = r[e];
                    if (delete r[e], o.parentNode && o.parentNode.removeChild(o), i && i.forEach((e => e(n))), t) return t(n)
                },
                p = setTimeout(f.bind(null, void 0, {
                    type: "timeout",
                    target: o
                }), 12e4);
            o.onerror = f.bind(null, o.onerror), o.onload = f.bind(null, o.onload), s && document.head.appendChild(o)
        }
    }, l.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e;
        l.g.importScripts && (e = l.g.location + "");
        var t = l.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            n.length && (e = n[n.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
    })(), a = e => new Promise(((t, n) => {
        var r = l.miniCssF(e),
            i = l.p + r;
        if (((e, t) => {
                for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                    var i = (o = n[r]).getAttribute("data-href") || o.getAttribute("href");
                    if ("stylesheet" === o.rel && (i === e || i === t)) return o
                }
                var a = document.getElementsByTagName("style");
                for (r = 0; r < a.length; r++) {
                    var o;
                    if ((i = (o = a[r]).getAttribute("data-href")) === e || i === t) return o
                }
            })(r, i)) return t();
        ((e, t, n, r) => {
            var i = document.createElement("link");
            i.rel = "stylesheet", i.type = "text/css", i.onerror = i.onload = a => {
                if (i.onerror = i.onload = null, "load" === a.type) n();
                else {
                    var o = a && ("load" === a.type ? "missing" : a.type),
                        s = a && a.target && a.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                    c.code = "CSS_CHUNK_LOAD_FAILED", c.type = o, c.request = s, i.parentNode.removeChild(i), r(c)
                }
            }, i.href = t, document.head.appendChild(i)
        })(e, i, t, n)
    })), o = {
        179: 0
    }, l.f.miniCss = (e, t) => {
        o[e] ? t.push(o[e]) : 0 !== o[e] && {
            524: 1,
            972: 1,
            "games/wordspud": 1,
            "games/ecast-test-client": 1,
            "games/drawful": 1,
            "games/fibbage": 1,
            "games/auction": 1,
            "games/fibbage2": 1,
            "games/survivetheinternet": 1,
            2104: 1,
            2265: 1,
            "games/quiplash3-tjsp": 1,
            "games/bracketeering": 1,
            "games/apply-yourself": 1,
            "games/fakinit": 1,
            "games/lieswatter": 1,
            "games/bombintern": 1,
            "games/ridictionary": 1,
            "games/ydkj2018": 1,
            "games/awshirt-tjsp": 1,
            4948: 1,
            "games/guesspionage-crowdplay": 1,
            "games/fibbage3": 1,
            "games/ydkj2015": 1,
            "games/splittheroom": 1,
            "games/jokeboat": 1,
            "games/earwax": 1,
            "games/triviadeath2-tjsp": 1,
            "games/quiplash2": 1,
            "games/rapbattle": 1,
            6368: 1,
            "games/quiplash3": 1,
            "games/overdrawn": 1,
            "games/monstermingle": 1,
            "games/the-wheel": 1,
            "games/quiplash": 1,
            "games/rolemodels": 1,
            "games/patentlystupid": 1,
            "games/worldchamps": 1,
            "games/triviadeath": 1,
            "games/drawful2": 1,
            "games/drawful-animate": 1,
            "games/quiplash2-international": 1,
            "games/pollposition": 1,
            "games/prototype": 1,
            "games/jackbox-talks": 1,
            "games/house-of-jackbox": 1,
            "games/pushthebutton": 1,
            "games/awshirt": 1,
            "games/drawful2international": 1,
            "games/blanky-blank": 1,
            "games/triviadeath2": 1,
            "games/survey-bomb": 1,
            "games/murder-detectives": 1,
            "games/slingshoot": 1,
            "games/everyday": 1,
            "games/acquisitions-inc": 1
        } [e] && t.push(o[e] = a(e).then((() => {
            o[e] = 0
        }), (t => {
            throw delete o[e], t
        })))
    }, (() => {
        l.b = document.baseURI || self.location.href;
        var e = {
            179: 0
        };
        l.f.j = (t, n) => {
            var r = l.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r) n.push(r[2]);
                else if (6368 != t) {
                var i = new Promise(((n, i) => r = e[t] = [n, i]));
                n.push(r[2] = i);
                var a = l.p + l.u(t),
                    o = new Error;
                l.l(a, (n => {
                    if (l.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                        var i = n && ("load" === n.type ? "missing" : n.type),
                            a = n && n.target && n.target.src;
                        o.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")", o.name = "ChunkLoadError", o.type = i, o.request = a, r[1](o)
                    }
                }), "chunk-" + t, t)
            } else e[t] = 0
        }, l.O.j = t => 0 === e[t];
        var t = (t, n) => {
                var r, i, [a, o, s] = n,
                    c = 0;
                for (r in o) l.o(o, r) && (l.m[r] = o[r]);
                if (s) var u = s(l);
                for (t && t(n); c < a.length; c++) i = a[c], l.o(e, i) && e[i] && e[i][0](), e[a[c]] = 0;
                return l.O(u)
            },
            n = self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var u = l.O(void 0, [5221], (() => l(61966)));
    u = l.O(u)
})();
//# sourceMappingURL=sourcemaps/main.c6470b53c02689ac3a08.js.map