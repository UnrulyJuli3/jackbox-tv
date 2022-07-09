(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [4948], {
        14948: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => ue
            });
            var i = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "jbg sign-in",
                    class: {
                        "has-recent": e.recentGames.length
                    }
                }, [s("TopBar", {
                    ref: "topBar",
                    attrs: {
                        twitch: e.twitch,
                        artifacts: e.artifacts
                    },
                    on: {
                        twitchLoginClick: e.onTwitchLoginClick,
                        twitchLogoutClick: e.onTwitchLogoutClick,
                        linkClick: e.onLinkClick
                    }
                }), e._v(" "), s("div", {
                    staticClass: "form"
                }, [s("div", {
                    staticClass: "constrain"
                }, [s("form", {
                    attrs: {
                        autocomplete: "off"
                    }
                }, [s("fieldset", [s("label", {
                    attrs: {
                        name: "roomcode",
                        for: "roomcode",
                        type: "text"
                    }
                }, [e._v("\n                        " + e._s(e.$t("ENTRY.ROOM_CODE"))), s("span", {
                    staticClass: "status"
                }, [e._v(e._s(e.$t(e.formState.statusText)))])]), e._v(" "), s("Input", {
                    attrs: {
                        id: "roomcode",
                        type: "text",
                        autocapitalize: "off",
                        autocorrect: "off",
                        autocomplete: "off",
                        placeholder: e.$t("ENTRY.ROOM_CODE_PLACEHOLDER"),
                        maxlength: e.codeLength
                    },
                    on: {
                        input: e.onCodeInput
                    },
                    model: {
                        value: e.code,
                        callback: function(t) {
                            e.code = t
                        },
                        expression: "code"
                    }
                }), e._v(" "), e.room && e.warnings.length ? s("div", {
                    staticClass: "warnings"
                }, [e._l(e.warnings, (function(t) {
                    return ["flexbox" === t ? s("p", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.$t("STRING_STYLE_WARNING"),
                            expression: "$t('STRING_STYLE_WARNING')"
                        }],
                        key: t
                    }) : e._e(), e._v(" "), "canvas" === t ? s("p", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.$t("ERROR_UNSUPPORTED_BROWSER"),
                            expression: "$t('ERROR_UNSUPPORTED_BROWSER')"
                        }],
                        key: t
                    }) : e._e(), e._v(" "), "camera" === t ? s("p", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.$t("STRING_CAMERA_WARNING"),
                            expression: "$t('STRING_CAMERA_WARNING')"
                        }],
                        key: t
                    }) : e._e()]
                }))], 2) : e._e(), e._v(" "), s("label", {
                    attrs: {
                        name: "username",
                        for: "username",
                        type: "text"
                    }
                }, [e._v("\n                        " + e._s(e.$t("STRING_NAME"))), s("span", {
                    staticClass: "remaining"
                }, [e._v(e._s(e.nameLength - e.name.length))])]), e._v(" "), s("Input", {
                    attrs: {
                        id: "username",
                        type: "text",
                        autocapitalize: "off",
                        autocorrect: "off",
                        autocomplete: "off",
                        disabled: void 0 !== e.twitch.user,
                        placeholder: e.$t("STRING_NAME_PLACEHOLDER"),
                        maxlength: e.nameLength
                    },
                    on: {
                        input: e.onNameInput
                    },
                    model: {
                        value: e.name,
                        callback: function(t) {
                            e.name = t
                        },
                        expression: "name"
                    }
                }), e._v(" "), s("button", {
                    class: {
                        connecting: e.isConnecting, audience: "audience" === e.formState.joinAs
                    },
                    attrs: {
                        id: "button-join",
                        type: "submit",
                        disabled: !e.formState.isEnabled
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.connect(e.formState.joinAs)
                        }
                    }
                }, [s("span", [e._v(e._s(e.$t(e.formState.submitText)))]), e._v(" "), s("div", {
                    staticClass: "loading"
                })])], 1)]), e._v(" "), s("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.$t("TOS_WARNING", {
                            submit: e.$t(e.formState.submitText)
                        }),
                        expression: "$t('TOS_WARNING', { submit: $t(formState.submitText) })"
                    }],
                    staticClass: "tos",
                    attrs: {
                        role: "complementary"
                    }
                }), e._v(" "), s("SlideBanner"), e._v(" "), e.recentGames.length ? e._e() : s("a", {
                    staticClass: "bottom-logo",
                    attrs: {
                        target: "_blank",
                        href: "https://www.jackboxgames.com/?utm_source=jackboxtv&utm_medium=logo&utm_campaign=jackboxgames"
                    }
                }, [e._v("\n                Link to Jackbox Games Homepage\n            ")])], 1)]), e._v(" "), e.recentGames.length ? s("div", {
                    staticClass: "recent"
                }, [s("div", {
                    staticClass: "constrain"
                }, [s("div", {
                    staticClass: "top-items"
                }, [s("h3", [e._v("RECENT GAMES")]), e._v(" "), s("button", {
                    staticClass: "view-all",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onPastGamesClick.apply(null, arguments)
                        }
                    }
                }, [e._v("VIEW ALL")])]), e._v(" "), e._l(e.recentGames, (function(e) {
                    return s("PastGame", {
                        key: e.url,
                        staticClass: "home",
                        attrs: {
                            artifact: e
                        }
                    })
                })), e._v(" "), e.recentGames.length >= 3 ? s("a", {
                    staticClass: "more",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onPastGamesClick.apply(null, arguments)
                        }
                    }
                }, [e._v("\n                View All Past Games\n            ")]) : e._e()], 2)]) : e._e()], 1)
            };
            i._withStripped = !0;
            var a, o = s(39666),
                n = s(13819),
                r = s(2934),
                _ = s.n(r),
                E = new Uint8Array(16);

            function u() {
                if (!a && !(a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return a(E)
            }
            const c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
                l = function(e) {
                    return "string" == typeof e && c.test(e)
                };
            for (var R = [], S = 0; S < 256; ++S) R.push((S + 256).toString(16).substr(1));
            const d = function(e, t, s) {
                var i = (e = e || {}).random || (e.rng || u)();
                if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) {
                    s = s || 0;
                    for (var a = 0; a < 16; ++a) t[s + a] = i[a];
                    return t
                }
                return function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        s = (R[e[t + 0]] + R[e[t + 1]] + R[e[t + 2]] + R[e[t + 3]] + "-" + R[e[t + 4]] + R[e[t + 5]] + "-" + R[e[t + 6]] + R[e[t + 7]] + "-" + R[e[t + 8]] + R[e[t + 9]] + "-" + R[e[t + 10]] + R[e[t + 11]] + R[e[t + 12]] + R[e[t + 13]] + R[e[t + 14]] + R[e[t + 15]]).toLowerCase();
                    if (!l(s)) throw TypeError("Stringified UUID is invalid");
                    return s
                }(i)
            };
            var T = s(44285),
                I = s(55507),
                N = s(81127),
                A = s(89768),
                h = s(12360),
                b = function(e, t, s, i) {
                    return new(s || (s = Promise))((function(a, o) {
                        function n(e) {
                            try {
                                _(i.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function r(e) {
                            try {
                                _(i.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function _(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                e(t)
                            }))).then(n, r)
                        }
                        _((i = i.apply(e, t || [])).next())
                    }))
                },
                G = s(21944),
                m = s(47865),
                O = s(2720);
            class p {
                constructor(e) {
                    m.K.shared.isSupported ? "/access_token" === (null == e ? void 0 : e.substr(0, 13)) && this.processRedirect(e) : console.warn("Twitch Login requires local storage")
                }
                prepare() {
                    return m.K.shared.isSupported ? (O.v.debug && (0, A.c)("[Twitch] prepare"), m.K.shared.get("token") ? this.fetchUser() : null) : null
                }
                login() {
                    if (!m.K.shared.isSupported) return;
                    (0, A.c)("[Twitch] login");
                    const e = d();
                    m.K.shared.set("twitchState", e);
                    const t = O.v.twitch.clientId;
                    let s = `https://${window.location.hostname}`;
                    "localhost" === window.location.hostname && (s = "http://localhost:9090/");
                    let i = "https://id.twitch.tv/oauth2/authorize";
                    i += `?client_id=${t}`, i += `&redirect_uri=${s}`, i += "&response_type=token", i += "&scope=user:read:email", i += `&state=${e}`, window.location.href = i
                }
                logout() {
                    m.K.shared.isSupported && ((0, A.c)("[Twitch] logout"), delete this.user, m.K.shared.remove("token"))
                }
                processRedirect(e) {
                    if (!m.K.shared.isSupported) return;
                    (0, A.c)("[Twitch] processRedirect", e);
                    const t = m.K.shared.get("twitchState");
                    if (!t) return void console.error("[Twitch] Could not find the expected state in local storage");
                    const s = e.substr(1).split("&"),
                        i = {};
                    for (let e = 0; e < s.length; e++) {
                        const [t, a] = s[e].split("=");
                        i[t] = a
                    }
                    i.state !== t && console.error("[Twitch] State parameter doesn't match the expected state"), m.K.shared.set("token", i.access_token), m.K.shared.remove("twitchState"), window.history.replaceState({}, document.title, "/")
                }
                fetchUser() {
                    return e = this, t = void 0, i = function*() {
                        if (!m.K.shared.isSupported) return null;
                        const e = m.K.shared.get("token");
                        if (!e) throw new Error("[Twitch] Token not found in local storage");
                        try {
                            const t = yield fetch("https://api.twitch.tv/helix/users", {
                                headers: {
                                    Authorization: `Bearer ${e}`,
                                    "Client-ID": O.v.twitch.clientId
                                }
                            }), s = yield t.json();
                            if (!s || !s.data) return null;
                            const i = s.data[0];
                            return i.token = e, this.user = i, this.user
                        } catch (e) {
                            return console.warn(e), null
                        }
                    }, new((s = void 0) || (s = Promise))((function(a, o) {
                        function n(e) {
                            try {
                                _(i.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function r(e) {
                            try {
                                _(i.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function _(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                e(t)
                            }))).then(n, r)
                        }
                        _((i = i.apply(e, t || [])).next())
                    }));
                    var e, t, s, i
                }
            }
            var v = s(89446),
                C = s(65853),
                g = s(6305);
            const U = {
                en: {
                    STATUS_GAME_FULL: "Game is full",
                    STATUS_GAME_STARTED: "Game has started",
                    STATUS_ROOM_NOT_FOUND: "Room not found",
                    SUBMIT_GAME_FULL: "GAME IS FULL",
                    SUBMIT_GAME_STARTED: "GAME HAS STARTED",
                    SUBMIT_JOIN_AUDIENCE: "JOIN AUDIENCE",
                    SUBMIT_RECONNECT: "RECONNECT",
                    SUBMIT_TWITCH_LOGIN: "LOGIN WITH TWITCH",
                    TOS_WARNING: "By clicking {submit}, you agree to our [tos]Terms of Service[/tos]",
                    LANGUAGE_NAME: "English",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsche", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    STRING_LOBBY_CENSOR_CONFIRM: "This will remove this player's name, avatar, entries and drawings. Are you sure?",
                    STRING_CENSOR_INFO: "hit <span class='censor-button-image censor-button-black'></span> to censor player for rest of the game, removing their answers, name and avatar (it's kind of intense)",
                    STRING_SKIP: "skip!",
                    STRING_THANK_YOU: "thanks for your drawing",
                    STRING_DRAWING_OVER: "drawing time is over!",
                    STRING_CENSOR_LIE_CONFIRM: "this will remove this player's entry and all future entries and future drawings. are you sure?",
                    STRING_YES: "Yes",
                    STRING_NO: "No",
                    STRING_THANK_AUDIENCE: "thank you for your input, audience member!",
                    STRING_AUDIENCE_WELCOME_0: "welcome to the audience<br>it’s fun!",
                    STRING_AUDIENCE_WELCOME_1: "welcome to the audience<br>you’ll get to participate in just a moment",
                    STRING_AUDIENCE_WELCOME_2: "welcome to the audience<br>the fun is coming any second",
                    STRING_AUDIENCE_WELCOME_3: "welcome to the audience<br>we’ve been waiting for you",
                    STRING_AUDIENCE_WELCOME_4: "welcome to the audience<br>not quite as fun as owning the game, but more fun than sitting alone doing nothing",
                    STRING_AUDIENCE_WELCOME_5: "welcome to the audience<br>the more the merrier",
                    STRING_AUDIENCE_WELCOME_6: "welcome to the audience<br>one of us, one of us",
                    STRING_AUDIENCE_WELCOME_7: "welcome to the audience<br>please don’t unwrap any hard candy during the show",
                    STRING_AUDIENCE_WELCOME_8: "welcome to the audience<br>it’s our time down here",
                    STRING_AUDIENCE_WELCOME_9: "welcome to the audience<br>you like to watch, eh?",
                    STRING_AUDIENCE_WELCOME_10: "welcome to the audience<br>this is one of those slow moments for the audience but it’ll pick up",
                    STRING_AUDIENCE_WELCOME_11: "welcome to the audience<br>please don’t organize and form a coup",
                    STRING_AUDIENCE_WELCOME_12: "welcome to the audience<br>make yourself at home",
                    STRING_AUDIENCE_WELCOME_13: "welcome to the audience<br>we hope you like judging people",
                    STRING_AUDIENCE_WELCOME_14: "welcome to the audience<br>take a deep breath, the action will start soon",
                    STRING_AUDIENCE_WELCOME_15: "welcome to the audience<br>enjoy it",
                    STRING_AUDIENCE_WELCOME_16: "welcome to the audience<br>of everyone in the audience, you’re our favorite",
                    STRING_AUDIENCE_WELCOME_17: "welcome to the audience<br>dreams do come true!",
                    STRING_AUDIENCE_WELCOME_18: "welcome to the audience<br>the second most fun way to play this game!",
                    STRING_AUDIENCE_WELCOME_19: "welcome to the audience<br>we wrote this extra sentence here just for you",
                    STRING_AUDIENCE_WELCOME_20: "welcome to the audience<br>please find your seat",
                    STRING_AUDIENCE_WELCOME_21: "welcome to the audience<br>soooooo... what’s new with you?",
                    STRING_AUTHOR_MESSAGE_0: "You drew this.<br>Take a moment to reflect.",
                    STRING_AUTHOR_MESSAGE_1: "You drew this.<br>Maybe consult a doctor?",
                    STRING_AUTHOR_MESSAGE_2: "You drew this.<br>This is what you've become.",
                    STRING_AUTHOR_MESSAGE_3: "You drew this.<br>This is your design.",
                    STRING_AUTHOR_MESSAGE_4: "You drew this.<br>There's nowhere to go but up!",
                    STRING_AUTHOR_MESSAGE_5: "You drew this.<br>Relax.",
                    STRING_AUTHOR_MESSAGE_6: "You drew this.<br>Enjoy this moment.",
                    STRING_AUTHOR_MESSAGE_7: "You drew this.<br>It's too late to change it.",
                    STRING_AUTHOR_MESSAGE_8: "You drew this.<br>There's no way to blame someone else.",
                    STRING_AUTHOR_MESSAGE_9: "You drew this.<br>And your life is forever changed.",
                    STRING_AUTHOR_MESSAGE_10: "You drew this.<br>Yay?",
                    STRING_AUTHOR_MESSAGE_11: "You drew this.<br>No comment.",
                    STRING_AUTHOR_MESSAGE_12: "You drew this.<br>It could be worse.",
                    STRING_AUTHOR_MESSAGE_13: "You drew this.<br>You're to blame.",
                    STRING_AUTHOR_MESSAGE_14: "You drew this.<br>So...yeah...",
                    STRING_AUTHOR_MESSAGE_15: "You drew this.<br>Don't worry, it'll be over soon.",
                    STRING_AUTHOR_MESSAGE_16: "You drew this.<br>Feel as good about that as you can.",
                    STRING_AUTHOR_MESSAGE_17: "You drew this.<br>It is art.",
                    STRING_AUTHOR_MESSAGE_18: "You drew this.<br>Thank you?",
                    STRING_AUTHOR_MESSAGE_19: "You drew this.<br>High five!",
                    STRING_AUTHOR_MESSAGE_20: "You drew this.<br>Maybe take a quick nap.",
                    STRING_AUTHOR_MESSAGE_21: "You drew this.<br>Be cool about it.",
                    STRING_AUTHOR_MESSAGE_22: "You drew this.<br>This too shall pass.",
                    STRING_AUTHOR_MESSAGE_23: "You drew this.<br>Deal with it.",
                    STRING_AUTHOR_MESSAGE_24: "You drew this.<br>Confront the consequences.",
                    STRING_AUTHOR_MESSAGE_25: "You drew this.<br>It is done.",
                    STRING_AUTHOR_MESSAGE_26: "You drew this?<br>It's okay. It's going to be okay.",
                    STRING_AUTHOR_MESSAGE_27: "You drew this.<br>But you still deserve love, probably.",
                    STRING_AUTHOR_MESSAGE_28: "You drew this.<br>Thank you.",
                    STRING_AUTHOR_MESSAGE_29: "You drew this.<br>Creation is its own gift.",
                    STRING_AUTHOR_MESSAGE_30: "You drew this.<br>Ha ha ha ha ha.",
                    STRING_AUTHOR_MESSAGE_31: "You drew this.<br>And I love you for it.",
                    STRING_AUTHOR_MESSAGE_32: "You drew this.<br>Weird.",
                    STRING_AUTHOR_MESSAGE_33: "You drew this.<br>I hope it works out for you.",
                    STRING_AUTHOR_MESSAGE_34: "You drew this.<br>Have you ever considered that you might be the only person in the universe? And everything else...everyone, every thing, is just in your mind? Have you?",
                    STRING_AUTHOR_MESSAGE_35: "You drew this.<br>And fun was had by all.",
                    STRING_AUTHOR_MESSAGE_36: "You drew this.<br>It will not be fully appreciated until after you are dead.",
                    STRING_AUTHOR_MESSAGE_37: "You drew this.<br>But, you probably know that already.",
                    STRING_AUTHOR_MESSAGE_38: "You drew this.<br>You.",
                    STRING_AUTHOR_MESSAGE_39: "You drew this.<br>Only history can judge you.",
                    STRING_AUTHOR_MESSAGE_40: "You drew this.<br>Enjoy it.",
                    STRING_AUTHOR_MESSAGE_41: "You drew this.<br>It is good.",
                    STRING_SUBMIT_ALERT: "you got too close to the real title, or entered something someone else already did!",
                    ERROR_DRAWING_EMPTY: "You have to draw something!",
                    STRING_SKIP_BUTTON: "skip (this is offensive)",
                    STRING_SKIP_BUTTON_CONFIRM: "are you sure?",
                    STRING_TEXT_SUBMIT_ALERT: "you can't enter nothing!",
                    STRING_ERROR_INVALID_ROOM_CODE: "Invalid Room Code",
                    STRING_ERROR_UNABLE_TO_JOIN: "Unable to connect to the Jackbox Games server. This is commonly caused by adblockers or privacy extensions.",
                    STRING_ERROR_WEBSOCKETS_REQUIRED: "WebSockets are not supported on your browser.",
                    STRING_ERROR_INVALID_APP_ID: "Invalid app id for room: ",
                    STRING_SETTINGS: "Settings",
                    STRING_DYSLEXIC_FONT: "Dyslexic Font",
                    STRING_LARGE_FONT: "Large Font",
                    LANGUAGE: "Language",
                    LOGIN: "Login",
                    STRING_CAMERA_WARNING: "[b]HEADS UP:[/b] We’re not detecting a camera, but you can still play the game without a photo. If this seems wrong, try joining with a different browser.",
                    STRING_STYLE_WARNING: "[b]HEADS UP:[/b] Your browser seems a bit outdated, and will have some issues displaying this game.",
                    STRING_NAME: "NAME",
                    STRING_NAME_PLACEHOLDER: "ENTER YOUR NAME",
                    STRING_CANVAS_COMPATIBILITY: "Sorry, your browser is not supported.",
                    STRING_MENU_HELP: "HELP",
                    STRING_MENU_TWITCH: "TWITCH",
                    STRING_MENU_LOGOUT: "LOGOUT",
                    STRING_MENU_MERCH: "MERCH",
                    STRING_MENU_PAST_GAMES: "PAST GAMES",
                    STRING_MENU_MAILING_LIST: "MAILING LIST",
                    ERROR_UNSUPPORTED_BROWSER: "This game is not supported on this browser. View '?' or HELP to see a list of compatible browsers.",
                    ERROR_UNSUPPORTED_WEBSOCKETS: "WebSockets are not supported on your browser.",
                    ERROR_ROOM_FULL: "The game is full",
                    ERROR_AUDIENCE_FULL: "The audience is full",
                    ERROR_INVALID_ROOMCODE: "Invalid Room Code",
                    ERROR_UNABLE_TO_CONNECT: "Unable to connect to the Jackbox Games server. This is commonly caused by adblockers or privacy extensions.",
                    ERROR_GAME_LOCKED: "Game is in progress. Please wait for a new game to start.",
                    AD_AVAILABLE_NOW: "Available Now!",
                    AD_ON_SALE: "On Sale!",
                    STRING_PASSWORD_REQUIRED_TITLE: "Password required",
                    STRING_PASSWORD_REQUIRED_BODY: "Please enter the password or join as an audience member",
                    STRING_PASSWORD_JOIN_AS_PLAYER: "Join as Player",
                    STRING_PASSWORD_JOIN_AS_AUDIENCE: "Join Audience",
                    STRING_ERROR_SERVER_ERROR: "Unable to join a room due to a server error",
                    STRING_ERROR_TWITCH_COOKIES: "Cookies are required to log in with Twitch",
                    STRING_ERROR_GAME_UNSUPPORTED: "This game is not supported on this browser.",
                    STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Game requires Twitch login",
                    STRING_ERROR_ROOM_IS_LOCKED: "Game is locked",
                    STRING_ERROR_INCORRECT_PASSWORD: "Incorrect password",
                    STRING_ERROR_GENERIC: "Error joining this game",
                    STRING_ERROR_CONNECTION: "Connection error",
                    ERROR_FILTER_NAME: "This game has profanity filters enabled. Please pick a different name."
                },
                fr: {
                    STATUS_GAME_FULL: "La salle est pleine",
                    STATUS_GAME_STARTED: "La partie a commencé",
                    STATUS_ROOM_NOT_FOUND: "Salle introuvable",
                    SUBMIT_GAME_FULL: "LA SALLE EST PLEINE",
                    SUBMIT_GAME_STARTED: "LA PARTIE A COMMENCÉ",
                    SUBMIT_JOIN_AUDIENCE: "REJOINDRE EN TANT QUE SPECTATEUR",
                    SUBMIT_RECONNECT: "SE RECONNECTER",
                    SUBMIT_TWITCH_LOGIN: "SE CONNECTER AVEC TWITCH",
                    TOS_WARNING: "En cliquant sur {submit}, vous acceptez nos [tos]Conditions de service[/tos].",
                    LANGUAGE_NAME: "Français",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsche", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    STRING_LOBBY_CENSOR_CONFIRM: "Cela supprime le nom du joueur, son avatar, ses entrées et ses dessins. Vous confirmez ?",
                    STRING_CENSOR_INFO: "touchez <span class='censor-button-image censor-button-black'></span> pour réduire au silence ce joueur jusqu'à la fin de la partie - vous ne verrez plus ses réponses, son nom ou son avatar (c'est violent !)",
                    STRING_SKIP: "passer !",
                    STRING_THANK_YOU: "merci pour votre dessin",
                    STRING_DRAWING_OVER: "c'est fini",
                    STRING_CENSOR_LIE_CONFIRM: "cela supprimera l'entrée de ce joueur, ses futures entrées et dessins également. vous confirmez ?",
                    STRING_YES: "Oui",
                    STRING_NO: "Non",
                    STRING_THANK_AUDIENCE: "merci pour cette participation, spectateur !",
                    STRING_AUDIENCE_WELCOME_0: "bienvenue dans le public<br>c'est cool !",
                    STRING_AUDIENCE_WELCOME_1: "bienvenue dans le public<br>vous pourrez bientôt participer",
                    STRING_AUDIENCE_WELCOME_2: "bienvenue dans le public<br>ça va bientôt commencer",
                    STRING_AUDIENCE_WELCOME_3: "bienvenue dans le public<br>on n'attendait plus que vous",
                    STRING_AUDIENCE_WELCOME_4: "bienvenue dans le public<br>ce n'est pas aussi amusant que d'avoir le jeu, mais c'est mieux que de rester dans son coin à ne rien faire",
                    STRING_AUDIENCE_WELCOME_5: "bienvenue dans le public<br>plus on est de fous, plus on rit",
                    STRING_AUDIENCE_WELCOME_6: "bienvenue dans le public<br>il est des nôtres !",
                    STRING_AUDIENCE_WELCOME_7: "bienvenue dans le public<br>merci de ne pas faire de bruit pendant l'emission",
                    STRING_AUDIENCE_WELCOME_8: "bienvenue dans le public<br>on fait une pause",
                    STRING_AUDIENCE_WELCOME_9: "bienvenue dans le public<br>vous aimez regarder, c'est ça ?",
                    STRING_AUDIENCE_WELCOME_10: "bienvenue dans le public<br>c'est un des moments creux pour le public, mais ça va bientôt chauffer",
                    STRING_AUDIENCE_WELCOME_11: "bienvenue dans le public<br>merci de ne pas en profiter pour organiser un coup d'État",
                    STRING_AUDIENCE_WELCOME_12: "bienvenue dans le public<br>faites comme chez vous",
                    STRING_AUDIENCE_WELCOME_13: "bienvenue dans le public<br>vous aimez juger les gens ?",
                    STRING_AUDIENCE_WELCOME_14: "bienvenue dans le public<br>respirez un bon coup, ça va commencer",
                    STRING_AUDIENCE_WELCOME_15: "bienvenue dans le public<br>profitez bien",
                    STRING_AUDIENCE_WELCOME_16: "bienvenue dans le public<br>de tous les spectateurs, c'est vous qu'on préfère",
                    STRING_AUDIENCE_WELCOME_17: "bienvenue dans le public<br>les rêves deviennent parfois réalité",
                    STRING_AUDIENCE_WELCOME_18: "bienvenue dans le public<br>la deuxième façon la plus amusante de profiter du jeu",
                    STRING_AUDIENCE_WELCOME_19: "bienvenue dans le public<br>on a écrit cette phrase rien que pour vous",
                    STRING_AUDIENCE_WELCOME_20: "bienvenue dans le public<br>trouvez votre siège tout seul",
                    STRING_AUDIENCE_WELCOME_21: "bienvenue dans le public<br>bon… et chez vous, tout va bien ?",
                    STRING_AUTHOR_MESSAGE_0: "Vous avez dessiné ça.<br>Prenez le temps d'y réfléchir.",
                    STRING_AUTHOR_MESSAGE_1: "Vous avez dessiné ça.<br>Vous devriez peut-être consulter.",
                    STRING_AUTHOR_MESSAGE_2: "Vous avez dessiné ça.<br>C'est ça que vous êtes aujourd'hui…",
                    STRING_AUTHOR_MESSAGE_3: "Vous avez dessiné ça.<br>C'est votre œuvre.",
                    STRING_AUTHOR_MESSAGE_4: "Vous avez dessiné ça.<br>Au moins, vous ne pouvez que progresser.",
                    STRING_AUTHOR_MESSAGE_5: "Vous avez dessiné ça.<br>Relax.",
                    STRING_AUTHOR_MESSAGE_6: "Vous avez dessiné ça.<br>Profitez du moment.",
                    STRING_AUTHOR_MESSAGE_7: "Vous avez dessiné ça.<br>Vous ne pouvez plus en changer.",
                    STRING_AUTHOR_MESSAGE_8: "Vous avez dessiné ça.<br>Et vous ne pouvez pas accuser quelqu'un d'autre.",
                    STRING_AUTHOR_MESSAGE_9: "Vous avez dessiné ça.<br>Et votre vie va changer pour toujours.",
                    STRING_AUTHOR_MESSAGE_10: "Vous avez dessiné ça.<br>C'est cool, non ?",
                    STRING_AUTHOR_MESSAGE_11: "Vous avez dessiné ça.<br>Sans commentaire.",
                    STRING_AUTHOR_MESSAGE_12: "Vous avez dessiné ça.<br>On a vu pire.",
                    STRING_AUTHOR_MESSAGE_13: "Vous avez dessiné ça.<br>Oui, on sait que c'est vous.",
                    STRING_AUTHOR_MESSAGE_14: "Vous avez dessiné ça.<br>Et… heu…",
                    STRING_AUTHOR_MESSAGE_15: "Vous avez dessiné ça.<br>Ne vous inquiétez pas, ça va aller vite.",
                    STRING_AUTHOR_MESSAGE_16: "Vous avez dessiné ça.<br>J'espère que vous aimez.",
                    STRING_AUTHOR_MESSAGE_17: "Vous avez dessiné ça.<br>C'est de l'art.",
                    STRING_AUTHOR_MESSAGE_18: "Vous avez dessiné ça.<br>Merci ?",
                    STRING_AUTHOR_MESSAGE_19: "Vous avez dessiné ça.<br>Bravo !",
                    STRING_AUTHOR_MESSAGE_20: "Vous avez dessiné ça.<br>Et maintenant, une petite sieste.",
                    STRING_AUTHOR_MESSAGE_21: "Vous avez dessiné ça.<br>Assumez.",
                    STRING_AUTHOR_MESSAGE_22: "Vous avez dessiné ça.<br>Et on va vite oublier.",
                    STRING_AUTHOR_MESSAGE_23: "Vous avez dessiné ça.<br>Acceptez votre destin.",
                    STRING_AUTHOR_MESSAGE_24: "Vous avez dessiné ça.<br>Faites face aux conséquences.",
                    STRING_AUTHOR_MESSAGE_25: "Vous avez dessiné ça.<br>C'est fini.",
                    STRING_AUTHOR_MESSAGE_26: "Vous avez dessiné ça ?<br>C'est pas grave. Tout va bien se passer.",
                    STRING_AUTHOR_MESSAGE_27: "Vous avez dessiné ça.<br>Mais vous trouverez quand même l'amour. Peut-être.",
                    STRING_AUTHOR_MESSAGE_28: "Vous avez dessiné ça.<br>Merci.",
                    STRING_AUTHOR_MESSAGE_29: "Vous avez dessiné ça.<br>Créer est une récompense en soi.",
                    STRING_AUTHOR_MESSAGE_30: "Vous avez dessiné ça.<br>Ha ha ha ha ha.",
                    STRING_AUTHOR_MESSAGE_31: "Vous avez dessiné ça.<br>Et on vous aime !",
                    STRING_AUTHOR_MESSAGE_32: "Vous avez dessiné ça.<br>Bizarre.",
                    STRING_AUTHOR_MESSAGE_33: "Vous avez dessiné ça.<br>J'espère que ça va aller.",
                    STRING_AUTHOR_MESSAGE_34: "Vous avez dessiné ça.<br>Vous avez déjà réfléchi à l'idée que vous étiez seul dans l'univers ? Et que tout le reste, tout le monde, ce n'est que dans votre esprit ? Hein ?",
                    STRING_AUTHOR_MESSAGE_35: "Vous avez dessiné ça.<br>Et tout le monde a bien rit.",
                    STRING_AUTHOR_MESSAGE_36: "Vous avez dessiné ça.<br>Les grands artistes sont souvent reconnus après leur mort.",
                    STRING_AUTHOR_MESSAGE_37: "Vous avez dessiné ça.<br>Mais vous le saviez déjà, non ?",
                    STRING_AUTHOR_MESSAGE_38: "Vous avez dessiné ça.<br>Oui, vous.",
                    STRING_AUTHOR_MESSAGE_39: "Vous avez dessiné ça.<br>Seule l'histoire pourra vous juger.",
                    STRING_AUTHOR_MESSAGE_40: "Vous avez dessiné ça.<br>Vous aimez ?",
                    STRING_AUTHOR_MESSAGE_41: "Vous avez dessiné ça.<br>C'est pas mal.",
                    STRING_SUBMIT_ALERT: "vous êtes trop proche du vrai titre, ou vous avez proposé la même chose que quelqu'un d'autre",
                    ERROR_DRAWING_EMPTY: "Vous devez dessiner quelque chose !",
                    STRING_SKIP_BUTTON: "passer (c'est offensant)",
                    STRING_SKIP_BUTTON_CONFIRM: "vraiment ?",
                    STRING_TEXT_SUBMIT_ALERT: "vous ne pouvez pas ne rien entrer",
                    STRING_ERROR_INVALID_ROOM_CODE: "Code de salle invalide",
                    STRING_ERROR_UNABLE_TO_JOIN: "Impossible de se connecter au serveur de Jackbox Games. C'est généralement la faute des bloqueurs de pub ou des extensions de protection de la confidentialité.",
                    STRING_ERROR_WEBSOCKETS_REQUIRED: "Votre navigateur n'est pas compatible avec les WebSockets.",
                    STRING_ERROR_INVALID_APP_ID: "ID d'app invalide pour la salle :",
                    STRING_SETTINGS: "Paramètres",
                    STRING_DYSLEXIC_FONT: "Police pour dyslexiques",
                    STRING_LARGE_FONT: "Police grande taille",
                    LANGUAGE: "Langue",
                    LOGIN: "Connexion",
                    STRING_CAMERA_WARNING: "[b]ATTENTION :[/b] Nous ne détectons aucune caméra, mais vous pouvez jouer sans afficher votre photo. Si vous pensez qu'il s'agit d'une erreur, essayez de rejoindre en utilisant un autre navigateur.",
                    STRING_STYLE_WARNING: "[b]ATTENTION :[/b] Votre navigateur semble obsolète. Vous risquez de rencontrer des problèmes d'affichage avec ce jeu.",
                    STRING_NAME: "NOM",
                    STRING_NAME_PLACEHOLDER: "INDIQUEZ VOTRE NOM",
                    STRING_CANVAS_COMPATIBILITY: "Désolé, votre navigateur n'est pas compatible.",
                    STRING_MENU_HELP: "AIDE",
                    STRING_MENU_TWITCH: "TWITCH",
                    STRING_MENU_LOGOUT: "DÉCONNEXION",
                    STRING_MENU_MERCH: "MERCH",
                    STRING_MENU_PAST_GAMES: "ANCIENS JEU",
                    STRING_MENU_MAILING_LIST: "LISTE DE DIFFUSION",
                    ERROR_UNSUPPORTED_BROWSER: "Le jeu n'est pas compatible avec votre navigateur. Allez sur '?' ou sur AIDE pour afficher une liste des navigateurs compatibles.",
                    ERROR_UNSUPPORTED_WEBSOCKETS: "Votre navigateur n'est pas compatible avec les WebSockets.",
                    ERROR_ROOM_FULL: "La salle est pleine",
                    ERROR_AUDIENCE_FULL: "Il n'y a plus de place dans le public",
                    ERROR_INVALID_ROOMCODE: "Code de salle incorrect",
                    ERROR_UNABLE_TO_CONNECT: "Impossible de se connecter au serveur de Jackbox Games. Les bloqueurs de publicité ou les modules de protection de la confidentialité sont généralement à l'origine de ce problème.",
                    ERROR_GAME_LOCKED: "Partie déjà en cours. Attendez qu'une nouvelle partie commence.",
                    AD_AVAILABLE_NOW: "Disponible !",
                    AD_ON_SALE: "En promotion !",
                    STRING_PASSWORD_REQUIRED_TITLE: "Mot de passe requis",
                    STRING_PASSWORD_REQUIRED_BODY: "Indiquez le mot de passe ou rejoignez la salle en tant que spectateur",
                    STRING_PASSWORD_JOIN_AS_PLAYER: "Rejoindre en tant que joueur",
                    STRING_PASSWORD_JOIN_AS_AUDIENCE: "Rejoindre en tant que spectateur",
                    STRING_ERROR_SERVER_ERROR: "Impossible de rejoindre une salle en raison d'une erreur serveur",
                    STRING_ERROR_TWITCH_COOKIES: "Vous devez accepter les cookies pour vous connecter avec Twitch",
                    STRING_ERROR_GAME_UNSUPPORTED: "Le jeu n'est pas compatible avec votre navigateur.",
                    STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Ce jeu nécessite une connexion Twitch",
                    STRING_ERROR_ROOM_IS_LOCKED: "La salle est fermée",
                    STRING_ERROR_INCORRECT_PASSWORD: "Mot de passe incorrect",
                    STRING_ERROR_GENERIC: "Erreur en rejoignant la salle",
                    STRING_ERROR_CONNECTION: "Erreur de connexion",
                    ERROR_FILTER_NAME: "Le filtre anti-grossièreté est activé pour cette partie. Veuillez choisir un autre nom."
                },
                it: {
                    STATUS_GAME_FULL: "La partita è al completo",
                    STATUS_GAME_STARTED: "La partita è già iniziata",
                    STATUS_ROOM_NOT_FOUND: "Impossibile trovare la sala",
                    SUBMIT_GAME_FULL: "LA PARTITA È AL COMPLETO",
                    SUBMIT_GAME_STARTED: "LA PARTITA È GIÀ INIZIATA",
                    SUBMIT_JOIN_AUDIENCE: "PARTECIPA COME PUBBLICO",
                    SUBMIT_RECONNECT: "RICOLLEGATI",
                    SUBMIT_TWITCH_LOGIN: "ACCEDI CON TWITCH",
                    TOS_WARNING: "Selezionando {submit}, accetti le [tos]Condizioni del servizio[/tos]",
                    LANGUAGE_NAME: "Italiano",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsche", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    STRING_LOBBY_CENSOR_CONFIRM: "Così facendo verranno rimossi il nome, l'avatar, le risposte e i disegni di questo giocatore. Confermi?",
                    STRING_CENSOR_INFO: "premi <span class='censor-button-image censor-button-black'></span> per censurare il giocatore per il resto della partita, rimuovendone le risposte, il nome e gli avatar (Wow, pesante...)",
                    STRING_SKIP: "salta!",
                    STRING_THANK_YOU: "grazie per il disegno",
                    STRING_DRAWING_OVER: "tempo per disegnare scaduto!",
                    STRING_CENSOR_LIE_CONFIRM: "così facendo, rimuovi la risposta di questo giocatore, oltre a tutte le sue risposte future e disegni futuri. Confermi?",
                    STRING_YES: "Sì",
                    STRING_NO: "No",
                    STRING_THANK_AUDIENCE: "grazie per la partecipazione, membro del pubblico!",
                    STRING_AUDIENCE_WELCOME_0: "ti diamo il benvenuto nel pubblico<br>è divertente!",
                    STRING_AUDIENCE_WELCOME_1: "ti diamo il benvenuto nel pubblico<br>potrai partecipare fra un attimo",
                    STRING_AUDIENCE_WELCOME_2: "ti diamo il benvenuto nel pubblico<br>il divertimento inizierà da un momento all'altro",
                    STRING_AUDIENCE_WELCOME_3: "ti diamo il benvenuto nel pubblico<br>ti stavamo aspettando",
                    STRING_AUDIENCE_WELCOME_4: "ti diamo il benvenuto nel pubblico<br>non è divertente come giocare, ma lo è sicuramente di più che restare seduti da soli a non far niente",
                    STRING_AUDIENCE_WELCOME_5: "ti diamo il benvenuto nel pubblico<br>più siamo, meglio stiamo",
                    STRING_AUDIENCE_WELCOME_6: "ti diamo il benvenuto nel pubblico<br>uno di noi, una di noi",
                    STRING_AUDIENCE_WELCOME_7: "ti diamo il benvenuto nel pubblico<br>per favore, non mangiare troppi pop-corn durante lo show",
                    STRING_AUDIENCE_WELCOME_8: "ti diamo il benvenuto nel pubblico<br>è il nostro momento",
                    STRING_AUDIENCE_WELCOME_9: "ti diamo il benvenuto nel pubblico<br>ti piace guardare, eh?",
                    STRING_AUDIENCE_WELCOME_10: "ti diamo il benvenuto nel pubblico<br>questo è un momento un po’ noioso, ma migliorerà",
                    STRING_AUDIENCE_WELCOME_11: "ti diamo il benvenuto nel pubblico<br>per favore, non organizzare un colpo di stato",
                    STRING_AUDIENCE_WELCOME_12: "ti diamo il benvenuto nel pubblico<br>fai come se fossi a casa tua",
                    STRING_AUDIENCE_WELCOME_13: "ti diamo il benvenuto nel pubblico<br>speriamo che ti piaccia giudicare le persone",
                    STRING_AUDIENCE_WELCOME_14: "ti diamo il benvenuto nel pubblico<br>fai un bel respiro, presto inizierà il bello",
                    STRING_AUDIENCE_WELCOME_15: "ti diamo il benvenuto nel pubblico<br>buon divertimento",
                    STRING_AUDIENCE_WELCOME_16: "ti diamo il benvenuto nel pubblico<br>di tutto il pubblico, tu sei la nostra persona preferita",
                    STRING_AUDIENCE_WELCOME_17: "ti diamo il benvenuto nel pubblico<br>i sogni si realizzano!",
                    STRING_AUDIENCE_WELCOME_18: "ti diamo il benvenuto nel pubblico<br>il secondo modo più divertente per giocare con noi!",
                    STRING_AUDIENCE_WELCOME_19: "ti diamo il benvenuto nel pubblico<br>abbiamo scritto questa frase in più solo per te",
                    STRING_AUDIENCE_WELCOME_20: "ti diamo il benvenuto nel pubblico<br>trova il tuo posto a sedere",
                    STRING_AUDIENCE_WELCOME_21: "ti diamo il benvenuto nel pubblico<br>allora... che mi dici di nuovo?",
                    STRING_AUTHOR_MESSAGE_0: "Hai disegnato questo.<br>Prenditi un momento per rifletterci su.",
                    STRING_AUTHOR_MESSAGE_1: "Hai disegnato questo.<br>Che ne dici di farti vedere da uno bravo?",
                    STRING_AUTHOR_MESSAGE_2: "Hai disegnato questo.<br>Avresti mai immaginato di ridurti così?",
                    STRING_AUTHOR_MESSAGE_3: "Hai disegnato questo.<br>Sì, l'hai fatto tu.",
                    STRING_AUTHOR_MESSAGE_4: "Hai disegnato questo.<br>Puoi soltanto migliorare!",
                    STRING_AUTHOR_MESSAGE_5: "Hai disegnato questo.<br>Rilassati.",
                    STRING_AUTHOR_MESSAGE_6: "Hai disegnato questo.<br>Goditi questo momento.",
                    STRING_AUTHOR_MESSAGE_7: "Hai disegnato questo.<br>È troppo tardi per cambiarlo.",
                    STRING_AUTHOR_MESSAGE_8: "Hai disegnato questo.<br>Non puoi prendertela con nessun altro.",
                    STRING_AUTHOR_MESSAGE_9: "Hai disegnato questo.<br>E la tua vita non sarà mai più la stessa.",
                    STRING_AUTHOR_MESSAGE_10: 'Hai disegnato questo.<br>"Evviva"?',
                    STRING_AUTHOR_MESSAGE_11: "Hai disegnato questo.<br>No comment.",
                    STRING_AUTHOR_MESSAGE_12: "Hai disegnato questo.<br>Poteva essere peggio.",
                    STRING_AUTHOR_MESSAGE_13: "Hai disegnato questo.<br>È solo colpa tua.",
                    STRING_AUTHOR_MESSAGE_14: "Hai disegnato questo.<br>Sì... Ok...",
                    STRING_AUTHOR_MESSAGE_15: "Hai disegnato questo.<br>Non preoccuparti, presto sarà tutto finito.",
                    STRING_AUTHOR_MESSAGE_16: "Hai disegnato questo.<br>Ti fa stare bene?",
                    STRING_AUTHOR_MESSAGE_17: "Hai disegnato questo.<br>Questa è arte!",
                    STRING_AUTHOR_MESSAGE_18: "Hai disegnato questo.<br>Ehm... Grazie...?",
                    STRING_AUTHOR_MESSAGE_19: "Hai disegnato questo.<br>Batti il cinque!",
                    STRING_AUTHOR_MESSAGE_20: "Hai disegnato questo.<br>Che ne dici di schiacciare un pisolino?",
                    STRING_AUTHOR_MESSAGE_21: "Hai disegnato questo.<br>Non montarti la testa.",
                    STRING_AUTHOR_MESSAGE_22: "Hai disegnato questo.<br>Passerà anche questa.",
                    STRING_AUTHOR_MESSAGE_23: "Hai disegnato questo.<br>Rassegnati.",
                    STRING_AUTHOR_MESSAGE_24: "Hai disegnato questo.<br>Affrontane le conseguenze.",
                    STRING_AUTHOR_MESSAGE_25: "Hai disegnato questo.<br>Ormai...",
                    STRING_AUTHOR_MESSAGE_26: "Hai disegnato questo?<br>Non è male, dai. Andrà tutto bene.",
                    STRING_AUTHOR_MESSAGE_27: "Hai disegnato questo.<br>Ma meriti ancora di ricevere amore. Forse.",
                    STRING_AUTHOR_MESSAGE_28: "Hai disegnato questo.<br>Grazie.",
                    STRING_AUTHOR_MESSAGE_29: "Hai disegnato questo.<br>Creare qualcosa è già di per sé una ricompensa.",
                    STRING_AUTHOR_MESSAGE_30: "Hai disegnato questo.<br>Ah ah ah ah ah.",
                    STRING_AUTHOR_MESSAGE_31: "Hai disegnato questo.<br>E io ti voglio bene.",
                    STRING_AUTHOR_MESSAGE_32: "Hai disegnato questo.<br>Strano.",
                    STRING_AUTHOR_MESSAGE_33: "Hai disegnato questo.<br>Almeno a te piace, spero.",
                    STRING_AUTHOR_MESSAGE_34: "Hai disegnato questo.<br>Hai mai pensato che potresti essere l'unica persona nell'universo? E tutto il resto... tutti gli altri... vivono solo nella tua mente? Eh? Ci hai mai pensato?",
                    STRING_AUTHOR_MESSAGE_35: "Hai disegnato questo.<br>E ci hai fatti divertire tutti.",
                    STRING_AUTHOR_MESSAGE_36: "Hai disegnato questo.<br>Verrà apprezzato come merita solo dopo la tua morte.",
                    STRING_AUTHOR_MESSAGE_37: "Hai disegnato questo.<br>Ma probabilmente lo sai già.",
                    STRING_AUTHOR_MESSAGE_38: "Hai disegnato questo.<br>Sì, tu.",
                    STRING_AUTHOR_MESSAGE_39: "Hai disegnato questo.<br>Soltanto la Storia potrà giudicarti.",
                    STRING_AUTHOR_MESSAGE_40: "Hai disegnato questo.<br>Goditelo.",
                    STRING_AUTHOR_MESSAGE_41: "Hai disegnato questo.<br>Non è male.",
                    STRING_SUBMIT_ALERT: "la tua risposta è troppo simile al titolo vero, oppure è già stata inserita da qualcun altro!",
                    ERROR_DRAWING_EMPTY: "Devi disegnare qualcosa!",
                    STRING_SKIP_BUTTON: "salta (questa cosa è offensiva)",
                    STRING_SKIP_BUTTON_CONFIRM: "confermi?",
                    STRING_TEXT_SUBMIT_ALERT: "devi per forza inserire qualcosa!",
                    STRING_ERROR_INVALID_ROOM_CODE: "Codice stanza non valido",
                    STRING_ERROR_UNABLE_TO_JOIN: "Impossibile collegarsi al server Jackbox Games. Solitamente il problema è causato da adblocker o estensioni per la privacy.",
                    STRING_ERROR_WEBSOCKETS_REQUIRED: "La tecnologia WebSocket non è supportata dal browser attualmente in uso.",
                    STRING_ERROR_INVALID_APP_ID: "App id non valido per la stanza:",
                    STRING_SETTINGS: "Impostazioni",
                    STRING_DYSLEXIC_FONT: "Caratteri per dislessia",
                    STRING_LARGE_FONT: "Caratteri grandi",
                    LANGUAGE: "Lingua",
                    LOGIN: "Accesso",
                    STRING_CAMERA_WARNING: "[b]AVVISO:[/b] Non rileviamo la telecamera, ma puoi giocare anche senza aggiungere una foto. Se la cosa non ti torna, prova ad accedere usando un altro browser.",
                    STRING_STYLE_WARNING: "[b]AVVISO:[/b] Il tuo browser è obsoleto e avrà dei problemi a visualizzare il gioco.",
                    STRING_NAME: "NOME",
                    STRING_NAME_PLACEHOLDER: "INSERISCI IL TUO NOME",
                    STRING_CANVAS_COMPATIBILITY: "Siamo spiacenti, il tuo browser non è supportato.",
                    STRING_MENU_HELP: "AIUTO",
                    STRING_MENU_TWITCH: "TWITCH",
                    STRING_MENU_LOGOUT: "ESCI",
                    STRING_MENU_MERCH: "NEGOZIO",
                    STRING_MENU_PAST_GAMES: "PARTITE PRECEDENTI",
                    STRING_MENU_MAILING_LIST: "NEWSLETTER",
                    ERROR_UNSUPPORTED_BROWSER: "Il gioco non è supportato dal browser attualmente in uso. Clicca su '?' o AIUTO per visualizzare la lista dei browser compatibili.",
                    ERROR_UNSUPPORTED_WEBSOCKETS: "La tecnologia WebSocket non è supportata dal browser attualmente in uso.",
                    ERROR_ROOM_FULL: "La partita è al completo",
                    ERROR_AUDIENCE_FULL: "Il pubblico è al completo",
                    ERROR_INVALID_ROOMCODE: "Codice stanza non valido",
                    ERROR_UNABLE_TO_CONNECT: "Impossibile collegarsi al server Jackbox Games. Solitamente il problema è causato da adblocker o estensioni per la privacy.",
                    ERROR_GAME_LOCKED: "Partita in corso. Attendi che ne inizi una nuova.",
                    AD_AVAILABLE_NOW: "Disponibile ora!",
                    AD_ON_SALE: "In offerta!",
                    STRING_PASSWORD_REQUIRED_TITLE: "Password necessaria",
                    STRING_PASSWORD_REQUIRED_BODY: "Inserisci la password o partecipa come pubblico",
                    STRING_PASSWORD_JOIN_AS_PLAYER: "Partecipa come giocatore",
                    STRING_PASSWORD_JOIN_AS_AUDIENCE: "Partecipa come pubblico",
                    STRING_ERROR_SERVER_ERROR: "Impossibile entrare in una stanza: errore del server",
                    STRING_ERROR_TWITCH_COOKIES: "I cookies sono necessari per effettuare il login a Twitch",
                    STRING_ERROR_GAME_UNSUPPORTED: "Il gioco non è supportato dal browser attualmente in uso.",
                    STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Questo gioco richiede l'accesso a Twitch",
                    STRING_ERROR_ROOM_IS_LOCKED: "La stanza è bloccata",
                    STRING_ERROR_INCORRECT_PASSWORD: "Password errata",
                    STRING_ERROR_GENERIC: "Impossibile entrare in questa stanza",
                    STRING_ERROR_CONNECTION: "Errore di connessione",
                    ERROR_FILTER_NAME: "Questa partita ha i filtri delle volgarità attivi. Scegli un nome diverso."
                },
                de: {
                    STATUS_GAME_FULL: "Spiel ist voll",
                    STATUS_GAME_STARTED: "Spiel hat bereits begonnen",
                    STATUS_ROOM_NOT_FOUND: "Raum nicht gefunden",
                    SUBMIT_GAME_FULL: "SPIEL IST VOLL",
                    SUBMIT_GAME_STARTED: "SPIEL HAT BEREITS BEGONNEN",
                    SUBMIT_JOIN_AUDIENCE: "INS PUBLIKUM SETZEN",
                    SUBMIT_RECONNECT: "NEU VERBINDEN",
                    SUBMIT_TWITCH_LOGIN: "MIT TWITCH ANMELDEN",
                    TOS_WARNING: "Wenn du auf {submit} klickst, erklärst du dich mit unseren [tos]Nutzungsbedingungen[/tos] einverstanden",
                    LANGUAGE_NAME: "Deutsche",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsche", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    STRING_LOBBY_CENSOR_CONFIRM: "Dadurch werden der Name des Spielers, sein Avatar, seine Eingaben und seine Zeichnungen entfernt. Bist du sicher?",
                    STRING_CENSOR_INFO: "Drücke <span class='censor-button-image censor-button-black'></span>, um den Spieler für den Rest des Spiels zu zensieren und seinen Namen, Avatar und seine Antworten zu entfernen. (Ziemlich heftig.)",
                    STRING_SKIP: "Überspringen!",
                    STRING_THANK_YOU: "Danke für die Zeichnung.",
                    STRING_DRAWING_OVER: "Zeichenzeit ist abgelaufen!",
                    STRING_CENSOR_LIE_CONFIRM: "Dadurch werden die Eingabe des Spielers und seine zukünftigen Eingaben und Zeichnungen entfernt. Bist du sicher?",
                    STRING_YES: "Ja",
                    STRING_NO: "Nein",
                    STRING_THANK_AUDIENCE: "Danke für deine Teilnahme, Publikumsmitglied!",
                    STRING_AUDIENCE_WELCOME_0: "Willkommen im Publikum!<br>Das macht Spaß!",
                    STRING_AUDIENCE_WELCOME_1: "Willkommen im Publikum!<br>Du kannst gleich mitmachen.",
                    STRING_AUDIENCE_WELCOME_2: "Willkommen im Publikum!<br>Der Spaß geht sofort los.",
                    STRING_AUDIENCE_WELCOME_3: "Willkommen im Publikum!<br>Wir haben auf dich gewartet.",
                    STRING_AUDIENCE_WELCOME_4: "Willkommen im Publikum!<br>Nicht so toll, wie das Spiel selbst zu besitzen, aber immer noch besser, als gar nichts zu unternehmen.",
                    STRING_AUDIENCE_WELCOME_5: "Willkommen im Publikum!<br>Je mehr, desto besser.",
                    STRING_AUDIENCE_WELCOME_6: "Willkommen im Publikum!<br>Einer von uns. Einer von uns.",
                    STRING_AUDIENCE_WELCOME_7: "Willkommen im Publikum!<br>Bitte rascheln Sie während der Vorstellung nicht mit Ihrer Chipstüte.",
                    STRING_AUDIENCE_WELCOME_8: "Willkommen im Publikum!<br>Hier unten läuft die Zeit nur für uns.",
                    STRING_AUDIENCE_WELCOME_9: "Willkommen im Publikum!<br>Du schaust gerne zu, nicht wahr?",
                    STRING_AUDIENCE_WELCOME_10: "Willkommen im Publikum!<br>Es ist gerade nicht sonderlich spannend fürs Publikum, aber das wird gleich.",
                    STRING_AUDIENCE_WELCOME_11: "Willkommen im Publikum!<br>Bitte tut euch nicht zusammen und zettelt eine Meuterei an.",
                    STRING_AUDIENCE_WELCOME_12: "Willkommen im Publikum!<br>Fühlt euch ganz wie zu Hause.",
                    STRING_AUDIENCE_WELCOME_13: "Willkommen im Publikum!<br>Wir hoffen, ihr urteilt gern über Leute.",
                    STRING_AUDIENCE_WELCOME_14: "Willkommen im Publikum!<br>Tief einatmen, es geht sofort los.",
                    STRING_AUDIENCE_WELCOME_15: "Willkommen im Publikum!<br>Viel Spaß.",
                    STRING_AUDIENCE_WELCOME_16: "Willkommen im Publikum!<br>Du bist definitiv unser Favorit aus dem Publikum.",
                    STRING_AUDIENCE_WELCOME_17: "Willkommen im Publikum!<br>Träume werden also doch wahr!",
                    STRING_AUDIENCE_WELCOME_18: "Willkommen im Publikum!<br>Die zweitspaßigste Methode, dieses Spiel zu spielen!",
                    STRING_AUDIENCE_WELCOME_19: "Willkommen im Publikum!<br>Diesen Satz haben wir extra für dich geschrieben.",
                    STRING_AUDIENCE_WELCOME_20: "Willkommen im Publikum!<br>Bitte nehmen Sie Platz.",
                    STRING_AUDIENCE_WELCOME_21: "Willkommen im Publikum!<br>Aaaaalso, was gibt's bei dir Neues?",
                    STRING_AUTHOR_MESSAGE_0: "Das hast du gezeichnet.<br>Denk noch mal drüber nach.",
                    STRING_AUTHOR_MESSAGE_1: "Das hast du gezeichnet.<br>Mach lieber bald einen Arzttermin.",
                    STRING_AUTHOR_MESSAGE_2: "Das hast du gezeichnet.<br>So weit ist es schon gekommen.",
                    STRING_AUTHOR_MESSAGE_3: "Das hast du gezeichnet.<br>Das ist deine Kreation.",
                    STRING_AUTHOR_MESSAGE_4: "Das hast du gezeichnet.<br>Es kann nur besser werden!",
                    STRING_AUTHOR_MESSAGE_5: "Das hast du gezeichnet.<br>Entspann dich.",
                    STRING_AUTHOR_MESSAGE_6: "Das hast du gezeichnet.<br>Lass es dir auf der Zunge zergehen.",
                    STRING_AUTHOR_MESSAGE_7: "Das hast du gezeichnet.<br>Es gibt kein Zurück mehr.",
                    STRING_AUTHOR_MESSAGE_8: "Das hast du gezeichnet.<br>Da musst du dich schon an die eigene Nase fassen.",
                    STRING_AUTHOR_MESSAGE_9: "Das hast du gezeichnet.<br>Und nichts ist mehr, wie es war.",
                    STRING_AUTHOR_MESSAGE_10: "Das hast du gezeichnet.<br>Yay?",
                    STRING_AUTHOR_MESSAGE_11: "Das hast du gezeichnet.<br>Kein Kommentar.",
                    STRING_AUTHOR_MESSAGE_12: "Das hast du gezeichnet.<br>Könnte schlimmer sein.",
                    STRING_AUTHOR_MESSAGE_13: "Das hast du gezeichnet.<br>Alles deine Schuld.",
                    STRING_AUTHOR_MESSAGE_14: "Das hast du gezeichnet.<br>Also... tja...",
                    STRING_AUTHOR_MESSAGE_15: "Das hast du gezeichnet.<br>Keine Angst. Ist gleich vorbei.",
                    STRING_AUTHOR_MESSAGE_16: "Das hast du gezeichnet.<br>Fühl dich so gut damit, wie du kannst.",
                    STRING_AUTHOR_MESSAGE_17: "Das hast du gezeichnet.<br>Das ist Kunst.",
                    STRING_AUTHOR_MESSAGE_18: "Das hast du gezeichnet.<br>Danke?",
                    STRING_AUTHOR_MESSAGE_19: "Das hast du gezeichnet.<br>High five!",
                    STRING_AUTHOR_MESSAGE_20: "Das hast du gezeichnet.<br>Mach ein kurzes Nickerchen.",
                    STRING_AUTHOR_MESSAGE_21: "Das hast du gezeichnet.<br>Bleib ganz cool.",
                    STRING_AUTHOR_MESSAGE_22: "Das hast du gezeichnet.<br>Es geht alles vorüber.",
                    STRING_AUTHOR_MESSAGE_23: "Das hast du gezeichnet.<br>Damit musst du jetzt leben.",
                    STRING_AUTHOR_MESSAGE_24: "Das hast du gezeichnet.<br>Stelle dich den Konsequenzen.",
                    STRING_AUTHOR_MESSAGE_25: "Das hast du gezeichnet.<br>Jetzt ist es zu spät.",
                    STRING_AUTHOR_MESSAGE_26: "Hast du das gezeichnet?<br>Schon in Ordnung. Alles wird gut.",
                    STRING_AUTHOR_MESSAGE_27: "Das hast du gezeichnet.<br>Aber du verdienst bestimmt trotzdem etwas Liebe.",
                    STRING_AUTHOR_MESSAGE_28: "Das hast du gezeichnet.<br>Danke.",
                    STRING_AUTHOR_MESSAGE_29: "Das hast du gezeichnet.<br>Auf den Versuch kommt es an.",
                    STRING_AUTHOR_MESSAGE_30: "Das hast du gezeichnet.<br>Ha ha ha ha ha.",
                    STRING_AUTHOR_MESSAGE_31: "Das hast du gezeichnet.<br>Und dafür liebe ich dich.",
                    STRING_AUTHOR_MESSAGE_32: "Das hast du gezeichnet.<br>Seltsam.",
                    STRING_AUTHOR_MESSAGE_33: "Das hast du gezeichnet.<br>Hoffentlich kommst du damit durch.",
                    STRING_AUTHOR_MESSAGE_34: "Das hast du gezeichnet.<br>Hast du schon mal drüber nachgedacht, dass du vielleicht das einzige Lebewesen im ganzen Universum bist? Und alles andere, jeder andere, ist nur in deinem Kopf? Hast du?",
                    STRING_AUTHOR_MESSAGE_35: "Das hast du gezeichnet.<br>Und alle hatten Spaß damit.",
                    STRING_AUTHOR_MESSAGE_36: "Das hast du gezeichnet.<br>Aber das wissen die Leute erst nach deinem Tod zu schätzen.",
                    STRING_AUTHOR_MESSAGE_37: "Das hast du gezeichnet.<br>Aber das weißt du vermutlich schon.",
                    STRING_AUTHOR_MESSAGE_38: "Das hast du gezeichnet.<br>Du.",
                    STRING_AUTHOR_MESSAGE_39: "Das hast du gezeichnet.<br>Sollen spätere Generationen darüber entscheiden.",
                    STRING_AUTHOR_MESSAGE_40: "Das hast du gezeichnet.<br>Genieße es.",
                    STRING_AUTHOR_MESSAGE_41: "Das hast du gezeichnet.<br>Gar nicht übel.",
                    STRING_SUBMIT_ALERT: "Das ist zu nah am tatsächlichen Titel oder einem Titel, den schon jemand anders eingegeben hat!",
                    ERROR_DRAWING_EMPTY: "Du musst etwas zeichnen!",
                    STRING_SKIP_BUTTON: "Überspringen (das ist zu anstößig)",
                    STRING_SKIP_BUTTON_CONFIRM: "Bist du sicher?",
                    STRING_TEXT_SUBMIT_ALERT: "Du kannst nicht nichts eingeben!",
                    STRING_ERROR_INVALID_ROOM_CODE: "Ungültiger Raumcode",
                    STRING_ERROR_UNABLE_TO_JOIN: "Es konnte keine Verbindung zum Server von Jackbox Games hergestellt werden. Dies wird häufig durch Adblocker oder Privacy Extensions verursacht.",
                    STRING_ERROR_WEBSOCKETS_REQUIRED: "WebSockets werden auf deinem Browser nicht unterstützt.",
                    STRING_ERROR_INVALID_APP_ID: "Ungültige App-ID für den Raum:",
                    STRING_SETTINGS: "Einstellungen",
                    STRING_DYSLEXIC_FONT: "Font für Dyslexiker",
                    STRING_LARGE_FONT: "Großer Font",
                    LANGUAGE: "Sprache",
                    LOGIN: "Login",
                    STRING_CAMERA_WARNING: "[b]ACHTUNG:[/b] Es wurde keine Kamera erkannt, aber du kannst das Spiel auch ohne Foto spielen. Falls eine Kamera vorhanden ist, probiere es mit einem anderen Browser.",
                    STRING_STYLE_WARNING: "[b]ACHTUNG:[/b] Dein Browser scheint etwas veraltet zu sein. Es könnte Probleme bei der Anzeige dieses Spiels geben.",
                    STRING_NAME: "NAME",
                    STRING_NAME_PLACEHOLDER: "GIB DEINEN NAMEN EIN",
                    STRING_CANVAS_COMPATIBILITY: "Tut uns leid, dein Browser wird nicht unterstützt.",
                    STRING_MENU_HELP: "HILFE",
                    STRING_MENU_TWITCH: "TWITCH",
                    STRING_MENU_LOGOUT: "ABMELDEN",
                    STRING_MENU_MERCH: "MERCH",
                    STRING_MENU_PAST_GAMES: "ANDERE SPIELE",
                    STRING_MENU_MAILING_LIST: "MAILINGLISTE",
                    ERROR_UNSUPPORTED_BROWSER: "Dieses Spiel wird von diesem Browser nicht unterstützt. Unter '?' und HILFE findest du eine vollständige Liste an kompatiblen Browsern.",
                    ERROR_UNSUPPORTED_WEBSOCKETS: "WebSockets werden von deinem Browser nicht unterstützt.",
                    ERROR_ROOM_FULL: "Das Spiel ist voll",
                    ERROR_AUDIENCE_FULL: "Das Publikum ist voll",
                    ERROR_INVALID_ROOMCODE: "Ungültiger Raumcode",
                    ERROR_UNABLE_TO_CONNECT: "Es konnte keine Verbindung zum Server von Jackbox Games hergestellt werden. Dies wird häufig durch Adblocker oder Privacy Extensions verursacht.",
                    ERROR_GAME_LOCKED: "Spiel läuft derzeit. Bitte warte, bis ein neues Spiel beginnt.",
                    AD_AVAILABLE_NOW: "Jetzt verfügbar!",
                    AD_ON_SALE: "Angebot!",
                    STRING_PASSWORD_REQUIRED_TITLE: "Passwort benötigt",
                    STRING_PASSWORD_REQUIRED_BODY: "Bitte gib das Passwort ein oder setze dich ins Publikum",
                    STRING_PASSWORD_JOIN_AS_PLAYER: "Als Spieler beitreten",
                    STRING_PASSWORD_JOIN_AS_AUDIENCE: "Ins Publikum setzen",
                    STRING_ERROR_SERVER_ERROR: "Aufgrund eines Serverfehlers konntest du dem Raum nicht beitreten",
                    STRING_ERROR_TWITCH_COOKIES: "Du musst Cookies akzeptieren, um dich mit Twitch einzuloggen",
                    STRING_ERROR_GAME_UNSUPPORTED: "Dieses Spiel wird von diesem Browser nicht unterstützt.",
                    STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Für diesen Spiel ist Twitch erforderlich",
                    STRING_ERROR_ROOM_IS_LOCKED: "Spiel verschlossen",
                    STRING_ERROR_INCORRECT_PASSWORD: "Falsches Passwort",
                    STRING_ERROR_GENERIC: "Fehler beim Betreten des Spiels",
                    STRING_ERROR_CONNECTION: "Verbindungsfehler",
                    ERROR_FILTER_NAME: "Der Familientauglichkeits-Filter des Spiels ist aktiviert. Wähle einen anderen Namen."
                },
                es: {
                    STATUS_GAME_FULL: "La partida está completa",
                    STATUS_GAME_STARTED: "La partida ha empezado",
                    STATUS_ROOM_NOT_FOUND: "No se encuentra la sala",
                    SUBMIT_GAME_FULL: "LA PARTIDA ESTÁ COMPLETA",
                    SUBMIT_GAME_STARTED: "LA PARTIDA HA EMPEZADO",
                    SUBMIT_JOIN_AUDIENCE: "UNIRSE COMO PÚBLICO",
                    SUBMIT_RECONNECT: "RECONECTAR",
                    SUBMIT_TWITCH_LOGIN: "INICIAR SESIÓN CON TWITCH",
                    TOS_WARNING: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]",
                    LANGUAGE_NAME: "Español",
                    SUPPORTED_LANGUAGES: ["English", "Français", "Italiano", "Deutsche", "Español"],
                    SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
                    STRING_LOBBY_CENSOR_CONFIRM: "Se eliminarán el nombre, el avatar, las entradas y los dibujos de este jugador. ¿Quieres continuar?",
                    STRING_CENSOR_INFO: "pulsa <span class='censor-button-image censor-button-black'></span> para censurar al jugador el resto de la partida y eliminar sus respuestas, nombre y avatar (qué intenso)",
                    STRING_SKIP: "¡paso!",
                    STRING_THANK_YOU: "gracias por el dibujo",
                    STRING_DRAWING_OVER: "¡no se dibuja más!",
                    STRING_CENSOR_LIE_CONFIRM: "se eliminará la entrada de este jugador, así como todas sus entradas y dibujos futuros. ¿quieres continuar?",
                    STRING_YES: "Sí",
                    STRING_NO: "No",
                    STRING_THANK_AUDIENCE: "¡gracias por participar, miembro del público!",
                    STRING_AUDIENCE_WELCOME_0: "bienvenido al público<br>¡es divertido!",
                    STRING_AUDIENCE_WELCOME_1: "bienvenido al público<br>enseguida podrás participar",
                    STRING_AUDIENCE_WELCOME_2: "bienvenido al público<br>enseguida empieza la fiesta",
                    STRING_AUDIENCE_WELCOME_3: "bienvenido al público<br>te estábamos esperando",
                    STRING_AUDIENCE_WELCOME_4: "bienvenido al público<br>no es tan divertido como jugar, pero es mejor que estar solo sin hacer nada",
                    STRING_AUDIENCE_WELCOME_5: "bienvenido al público<br>cuantos más, mejor",
                    STRING_AUDIENCE_WELCOME_6: "bienvenido al público<br>ya eres uno de nosotros",
                    STRING_AUDIENCE_WELCOME_7: "bienvenido al público<br>por favor, no comas nada crujiente durante el programa",
                    STRING_AUDIENCE_WELCOME_8: "bienvenido al público<br>ahora nos toca a nosotros",
                    STRING_AUDIENCE_WELCOME_9: "bienvenido al público<br>te gusta mirar, ¿eh?",
                    STRING_AUDIENCE_WELCOME_10: "bienvenido al público<br>ahora mismo no es que pase mucho, pero enseguida pillamos el ritmo",
                    STRING_AUDIENCE_WELCOME_11: "bienvenido al público<br>por favor, nada de montar motines, ¿eh?",
                    STRING_AUDIENCE_WELCOME_12: "bienvenido al público<br>siéntete como en casa",
                    STRING_AUDIENCE_WELCOME_13: "bienvenido al público<br>esperamos que te guste juzgar a la gente",
                    STRING_AUDIENCE_WELCOME_14: "bienvenido al público<br>respira hondo, en breve empieza lo bueno",
                    STRING_AUDIENCE_WELCOME_15: "bienvenido al público<br>que lo disfrutes",
                    STRING_AUDIENCE_WELCOME_16: "bienvenido al público<br>de todo el público, te preferimos a ti",
                    STRING_AUDIENCE_WELCOME_17: "bienvenido al público<br>¡los sueños se hacen realidad!",
                    STRING_AUDIENCE_WELCOME_18: "bienvenido al público<br>¡es la segunda forma más divertida de jugar a esto!",
                    STRING_AUDIENCE_WELCOME_19: "bienvenido al público<br>esta frase del guion va dedicada a ti",
                    STRING_AUDIENCE_WELCOME_20: "bienvenido al público<br>por favor, busca un asiento",
                    STRING_AUDIENCE_WELCOME_21: "bienvenido al público<br>bueeeeno, ¿qué te cuentas?",
                    STRING_AUTHOR_MESSAGE_0: "Este es tu dibujo.<br>Piensa en lo que has hecho.",
                    STRING_AUTHOR_MESSAGE_1: "Este es tu dibujo.<br>Quizá deberías ir al médico.",
                    STRING_AUTHOR_MESSAGE_2: "Este es tu dibujo.<br>En esto te has convertido.",
                    STRING_AUTHOR_MESSAGE_3: "Este es tu dibujo.<br>Este es tu diseño.",
                    STRING_AUTHOR_MESSAGE_4: "Este es tu dibujo.<br>¡Después de esto, solo cabe mejorar!",
                    STRING_AUTHOR_MESSAGE_5: "Este es tu dibujo.<br>Relájate.",
                    STRING_AUTHOR_MESSAGE_6: "Este es tu dibujo.<br>Disfruta del momento.",
                    STRING_AUTHOR_MESSAGE_7: "Este es tu dibujo.<br>Demasiado tarde para cambiarlo.",
                    STRING_AUTHOR_MESSAGE_8: "Este es tu dibujo.<br>No puedes echarle la culpa a nadie más.",
                    STRING_AUTHOR_MESSAGE_9: "Este es tu dibujo.<br>Y tu vida cambiará para siempre.",
                    STRING_AUTHOR_MESSAGE_10: "Este es tu dibujo.<br>¿Sí, vale?",
                    STRING_AUTHOR_MESSAGE_11: "Este es tu dibujo.<br>Sin comentarios.",
                    STRING_AUTHOR_MESSAGE_12: "Este es tu dibujo.<br>Podría ser peor.",
                    STRING_AUTHOR_MESSAGE_13: "Este es tu dibujo.<br>Esto es culpa tuya.",
                    STRING_AUTHOR_MESSAGE_14: "Este es tu dibujo.<br>Sí… Ajá…",
                    STRING_AUTHOR_MESSAGE_15: "Este es tu dibujo.<br>No pasa nada, pronto acabará todo.",
                    STRING_AUTHOR_MESSAGE_16: "Este es tu dibujo.<br>No te castigues demasiado por esto.",
                    STRING_AUTHOR_MESSAGE_17: "Este es tu dibujo.<br>Esto es arte.",
                    STRING_AUTHOR_MESSAGE_18: "Este es tu dibujo.<br>¿Gracias?",
                    STRING_AUTHOR_MESSAGE_19: "Este es tu dibujo.<br>¡Chócala!",
                    STRING_AUTHOR_MESSAGE_20: "Este es tu dibujo.<br>¿Por qué no duermes un poco?",
                    STRING_AUTHOR_MESSAGE_21: "Este es tu dibujo.<br>Tómatelo con filosofía.",
                    STRING_AUTHOR_MESSAGE_22: "Este es tu dibujo.<br>La vergüenza pasará.",
                    STRING_AUTHOR_MESSAGE_23: "Este es tu dibujo.<br>De psiquiatra.",
                    STRING_AUTHOR_MESSAGE_24: "Este es tu dibujo.<br>Asume las consecuencias.",
                    STRING_AUTHOR_MESSAGE_25: "Este es tu dibujo.<br>Ya está hecho.",
                    STRING_AUTHOR_MESSAGE_26: "¿Has dibujado esto?<br>Calma. Todo pasará.",
                    STRING_AUTHOR_MESSAGE_27: "Este es tu dibujo.<br>Bueno, alguien te querrá. Tal vez.",
                    STRING_AUTHOR_MESSAGE_28: "Este es tu dibujo.<br>Gracias.",
                    STRING_AUTHOR_MESSAGE_29: "Este es tu dibujo.<br>Madre mía.",
                    STRING_AUTHOR_MESSAGE_30: "Este es tu dibujo.<br>Ja. Ja. Ja. Ja.",
                    STRING_AUTHOR_MESSAGE_31: "Este es tu dibujo.<br>Te quiero por ello.",
                    STRING_AUTHOR_MESSAGE_32: "Este es tu dibujo.<br>Qué raro.",
                    STRING_AUTHOR_MESSAGE_33: "Este es tu dibujo.<br>Mientras te guste a ti…",
                    STRING_AUTHOR_MESSAGE_34: "Este es tu dibujo.<br>Oye, ¿alguna vez te has planteado si serás la única persona del universo? ¿Si todo lo demás… todos, todas las cosas, están en tu cabeza? ¿Eh?",
                    STRING_AUTHOR_MESSAGE_35: "Este es tu dibujo.<br>Para echar unas risas vale.",
                    STRING_AUTHOR_MESSAGE_36: "Este es tu dibujo.<br>No se te reconocerá hasta después de tu muerte.",
                    STRING_AUTHOR_MESSAGE_37: "Este es tu dibujo.<br>Aunque eso ya lo sabrás, claro.",
                    STRING_AUTHOR_MESSAGE_38: "Este es tu dibujo.<br>Ver para creer.",
                    STRING_AUTHOR_MESSAGE_39: "Este es tu dibujo.<br>La historia te juzgará.",
                    STRING_AUTHOR_MESSAGE_40: "Este es tu dibujo.<br>Disfrútalo.",
                    STRING_AUTHOR_MESSAGE_41: "Este es tu dibujo.<br>Está bien.",
                    STRING_SUBMIT_ALERT: "¡estuviste muy cerca del título real o respondiste igual que otra persona!",
                    ERROR_DRAWING_EMPTY: "¡Tienes que dibujar algo!",
                    STRING_SKIP_BUTTON: "paso (es ofensivo)",
                    STRING_SKIP_BUTTON_CONFIRM: "¿quieres continuar?",
                    STRING_TEXT_SUBMIT_ALERT: "¡no puedes no poner nada!",
                    STRING_ERROR_INVALID_ROOM_CODE: "El código de la sala no es válido",
                    STRING_ERROR_UNABLE_TO_JOIN: "No podemos conectarte a los servidores de Jackbox Games. Las causas habituales son los bloqueadores de anuncios y las extensiones de privacidad.",
                    STRING_ERROR_WEBSOCKETS_REQUIRED: "Tu navegador no admite WebSockets.",
                    STRING_ERROR_INVALID_APP_ID: "ID de app no válido para la sala:",
                    STRING_SETTINGS: "Ajustes",
                    STRING_DYSLEXIC_FONT: "Fuente para disléxicos",
                    STRING_LARGE_FONT: "Fuente grande",
                    LANGUAGE: "idioma",
                    LOGIN: "Iniciar sesión",
                    STRING_CAMERA_WARNING: "[b]AVISO:[/b] No se detecta ninguna cámara, pero puedes jugar sin foto. Si crees que se trata de un error, cambia de navegador.",
                    STRING_STYLE_WARNING: "[b]AVISO:[/b] Tu navegador está un poco desactualizado, así que es posible que el juego no se vea del todo bien.",
                    STRING_NAME: "NOMBRE",
                    STRING_NAME_PLACEHOLDER: "INDICA TU NOMBRE",
                    STRING_CANVAS_COMPATIBILITY: "Vaya, tu navegador no es compatible.",
                    STRING_MENU_HELP: "AYUDA",
                    STRING_MENU_TWITCH: "TWITCH",
                    STRING_MENU_LOGOUT: "CERRAR SESIÓN",
                    STRING_MENU_MERCH: "MERCHANDISING",
                    STRING_MENU_PAST_GAMES: "PARTIDAS ANTERIORES",
                    STRING_MENU_MAILING_LIST: "LISTA DE CORREO",
                    ERROR_UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
                    ERROR_UNSUPPORTED_WEBSOCKETS: "Tu navegador no soporta WebSockets.",
                    ERROR_ROOM_FULL: "La sala está llena",
                    ERROR_AUDIENCE_FULL: "El público está completo",
                    ERROR_INVALID_ROOMCODE: "El código de la sala no es válido",
                    ERROR_UNABLE_TO_CONNECT: "No ha podido establecerse conexión con el servidor de Jackbox Games. Puede ser debido a los bloqueadores de anuncios o a las extensiones de privacidad.",
                    ERROR_GAME_LOCKED: "La partida está en curso. Espera a que comience otra.",
                    AD_AVAILABLE_NOW: "¡Ya disponible!",
                    AD_ON_SALE: "¡Ya a la venta!",
                    STRING_PASSWORD_REQUIRED_TITLE: "Hace falta una contraseña",
                    STRING_PASSWORD_REQUIRED_BODY: "Introduce la contraseña o únete como público",
                    STRING_PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
                    STRING_PASSWORD_JOIN_AS_AUDIENCE: "Unirse como público",
                    STRING_ERROR_SERVER_ERROR: "Debido a un error en el servidor no puedes unirte a la sala",
                    STRING_ERROR_TWITCH_COOKIES: "Debes aceptar las cookies para iniciar sesión con Twitch",
                    STRING_ERROR_GAME_UNSUPPORTED: "El juego no es compatible con este navegador.",
                    STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Este juego requiere un inicio de sesión de Twitch",
                    STRING_ERROR_ROOM_IS_LOCKED: "El juego está bloqueado",
                    STRING_ERROR_INCORRECT_PASSWORD: "Contraseña incorrecta",
                    STRING_ERROR_GENERIC: "Error al unirte al juego",
                    STRING_ERROR_CONNECTION: "Error de conexión",
                    ERROR_FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje malsonante. Elige un nombre diferente."
                },
                "es-XL": {
                    STATUS_GAME_FULL: "La partida está completa",
                    STATUS_GAME_STARTED: "La partida ha empezado",
                    STATUS_ROOM_NOT_FOUND: "No se encuentra la sala",
                    SUBMIT_GAME_FULL: "LA PARTIDA ESTÁ COMPLETA",
                    SUBMIT_GAME_STARTED: "LA PARTIDA HA EMPEZADO",
                    SUBMIT_JOIN_AUDIENCE: "UNIRSE AL PÚBLICO",
                    SUBMIT_RECONNECT: "RECONECTAR",
                    SUBMIT_TWITCH_LOGIN: "INICIAR SESIÓN CON TWITCH",
                    TOS_WARNING: "Al hacer clic en {submit}, aceptas las [tos]Condiciones del servicio[/tos]",
                    STRING_CAMERA_WARNING: "[b]AVISO:[/b] No se detecta ninguna cámara, pero puedes jugar sin hacerte una foto. Si crees que se trata de un error, cambia de navegador.",
                    STRING_STYLE_WARNING: "[b]AVISO:[/b] Tu navegador está un poco desactualizado, así que es posible que el juego no se vea del todo bien.",
                    STRING_NAME: "NOMBRE",
                    STRING_NAME_PLACEHOLDER: "INDICA TU NOMBRE",
                    STRING_MENU_HELP: "AYUDA",
                    STRING_MENU_TWITCH: "TWITCH",
                    STRING_MENU_LOGOUT: "CERRAR SESIÓN",
                    STRING_MENU_MERCH: "MERCHANDISING",
                    STRING_MENU_PAST_GAMES: "PARTIDAS ANTERIORES",
                    STRING_MENU_MAILING_LIST: "LISTA DE CORREO",
                    ERROR_UNSUPPORTED_BROWSER: "El juego no es compatible con este navegador. En '?' y AYUDA puedes ver la lista de navegadores compatibles.",
                    ERROR_UNSUPPORTED_WEBSOCKETS: "Tu navegador no admite WebSockets.",
                    ERROR_ROOM_FULL: "La sala está llena",
                    ERROR_AUDIENCE_FULL: "El público está completo",
                    ERROR_INVALID_ROOMCODE: "El código de la sala no es válido",
                    ERROR_UNABLE_TO_CONNECT: "No podemos conectarte a los servidores de Jackbox Games. Puede ser debido a los bloqueadores de anuncios y las extensiones de privacidad.",
                    ERROR_GAME_LOCKED: "Esta partida está en curso. Espera a que comience otra.",
                    AD_AVAILABLE_NOW: "¡Ya disponible!",
                    AD_ON_SALE: "¡Ya a la venta!",
                    STRING_PASSWORD_REQUIRED_TITLE: "Requiere contraseña",
                    STRING_PASSWORD_REQUIRED_BODY: "Introduce la contraseña o únete como público",
                    STRING_PASSWORD_JOIN_AS_PLAYER: "Unirse como jugador",
                    STRING_PASSWORD_JOIN_AS_AUDIENCE: "Unirse como público",
                    STRING_ERROR_SERVER_ERROR: "Debido a un error en el servidor no puedes unirte a la sala",
                    STRING_ERROR_TWITCH_COOKIES: "Debes aceptar las cookies para iniciar sesión con Twitch",
                    STRING_ERROR_GAME_UNSUPPORTED: "El juego no es compatible con este navegador.",
                    STRING_ERROR_REQUIRES_TWITCH_LOGIN: "Este juego requiere inicio de sesión de Twitch",
                    STRING_ERROR_ROOM_IS_LOCKED: "La sala está bloqueada",
                    STRING_ERROR_INCORRECT_PASSWORD: "Contraseña incorrecta",
                    STRING_ERROR_GENERIC: "Error al unirte a la sala",
                    STRING_ERROR_CONNECTION: "Error de conexión",
                    ERROR_FILTER_NAME: "Esta partida tiene activados los filtros de lenguaje malsonante. Elige un nombre diferente."
                }
            };
            var M = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "top-bar"
                }, [s("header", {
                    staticClass: "header",
                    on: {
                        click: e.onHamburgerClick
                    }
                }, [s("div", {
                    staticClass: "constrain"
                }, [s("div", {
                    staticClass: "logo"
                }), e._v(" "), s("div", {
                    staticClass: "hamburger",
                    class: {
                        close: null !== e.openedTo
                    }
                }), e._v(" "), !e.openedTo && e.hasUnseenGames ? s("div", {
                    staticClass: "indicator"
                }) : e._e(), e._v(" "), e.twitch.user ? s("div", {
                    staticClass: "avatar",
                    style: "background-image: url(" + e.twitch.user.profile_image_url + ");"
                }) : e._e()])]), e._v(" "), s("transition", {
                    attrs: {
                        name: "open-transition"
                    }
                }, [e.openedTo ? s("transition-group", {
                    staticClass: "screen-container",
                    attrs: {
                        tag: "div",
                        name: "screen-transition"
                    }
                }, ["pastGames" === e.openedTo ? s("PastGames", {
                    key: "pastGames",
                    staticClass: "screen",
                    attrs: {
                        artifacts: e.artifacts
                    }
                }) : e._e(), e._v(" "), "menu" === e.openedTo ? s("Menu", {
                    key: "menu",
                    staticClass: "screen",
                    attrs: {
                        "has-unseen-games": e.hasUnseenGames,
                        twitch: e.twitch
                    },
                    on: {
                        pastGameClick: e.onPastGamesClick,
                        twitchLoginClick: e.onTwitchLoginClick,
                        twitchLogoutClick: e.onTwitchLogoutClick,
                        linkClick: e.onLinkClick
                    }
                }) : e._e()], 1) : e._e()], 1)], 1)
            };
            M._withStripped = !0;
            var L = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("nav", {
                    staticClass: "nav"
                }, [s("ul", [e.isTwitchAuthenticated ? s("li", {
                    staticClass: "twitch",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onTwitchLogoutClick.apply(null, arguments)
                        }
                    }
                }, [s("a", {
                    attrs: {
                        href: "#"
                    }
                }, [e._v(e._s(e.$t("STRING_MENU_LOGOUT")))])]) : s("li", {
                    staticClass: "twitch"
                }, [s("a", {
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onTwitchLoginClick.apply(null, arguments)
                        }
                    }
                }, [e._v(e._s(e.$t("STRING_MENU_TWITCH")))])]), e._v(" "), s("li", {
                    staticClass: "moderator"
                }, [s("router-link", {
                    attrs: {
                        to: "/moderator"
                    }
                }, [e._v("MODERATOR")])], 1), e._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "http://help.jackboxgames.com",
                        target: "_blank"
                    },
                    on: {
                        click: function(t) {
                            return e.onLinkClick("help")
                        }
                    }
                }, [e._v("\n                " + e._s(e.$t("STRING_MENU_HELP")) + "\n            ")])]), e._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "https://shop.jackboxgames.com",
                        target: "_blank"
                    },
                    on: {
                        click: function(t) {
                            return e.onLinkClick("merch")
                        }
                    }
                }, [e._v("\n                " + e._s(e.$t("STRING_MENU_MERCH")) + "\n            ")])]), e._v(" "), s("li", [s("a", {
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.onPastGamesClick.apply(null, arguments)
                        }
                    }
                }, [e._v("\n                " + e._s(e.$t("STRING_MENU_PAST_GAMES")) + "\n                "), e.hasUnseenGames ? s("div", {
                    staticClass: "indicator"
                }) : e._e()])]), e._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "https://jackboxgames.us7.list-manage.com/subscribe?u=a181fa3b606c035e1cee11b76&id=eb7f0081d6",
                        target: "_blank"
                    },
                    on: {
                        click: function(t) {
                            return e.onLinkClick("mailinglist")
                        }
                    }
                }, [e._v("\n                " + e._s(e.$t("STRING_MENU_MAILING_LIST")) + "\n            ")])]), e._v(" "), s("li", {
                    staticClass: "social"
                }, [s("a", {
                    staticClass: "facebook",
                    attrs: {
                        "aria-label": "facebook",
                        target: "_blank",
                        href: "https://www.facebook.com/JackboxGames"
                    },
                    on: {
                        click: function(t) {
                            return e.onLinkClick("facebook")
                        }
                    }
                }), e._v(" "), s("a", {
                    staticClass: "twitter",
                    attrs: {
                        "aria-label": "twitter",
                        target: "_blank",
                        href: "https://twitter.com/jackboxgames"
                    },
                    on: {
                        click: function(t) {
                            return e.onLinkClick("twitter")
                        }
                    }
                }), e._v(" "), s("a", {
                    staticClass: "instagram",
                    attrs: {
                        "aria-label": "instagram",
                        target: "_blank",
                        href: "https://www.instagram.com/playjackboxgames"
                    },
                    on: {
                        click: function(t) {
                            return e.onLinkClick("instagram")
                        }
                    }
                })]), e._v(" "), s("li", {
                    staticClass: "version"
                }, [e._v(e._s(e.version))])])])
            };
            L._withStripped = !0;
            const f = _().extend({
                props: {
                    hasUnseenGames: Boolean,
                    twitch: Object
                },
                i18n: {
                    messages: U
                },
                data: () => ({
                    version: "4.2.4"
                }),
                computed: {
                    isTwitchAuthenticated() {
                        return void 0 !== this.twitch.user
                    }
                },
                methods: {
                    onPastGamesClick() {
                        this.$emit("pastGameClick")
                    },
                    onTwitchLoginClick() {
                        this.$emit("twitchLoginClick")
                    },
                    onTwitchLogoutClick() {
                        this.$emit("twitchLogoutClick")
                    },
                    onLinkClick(e) {
                        this.$emit("linkClick", e)
                    }
                }
            });
            var D = s(51900),
                w = (0, D.Z)(f, L, [], !1, null, "082a7a6a", null);
            w.options.__file = "src/apps/entry/views/signIn/Menu.vue";
            const H = w.exports;
            var k = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "past-games"
                }, [s("div", {
                    staticClass: "constrain"
                }, [e.artifacts.artifacts.length ? s("div", {
                    staticClass: "top-items"
                }, [s("h3", [e._v("YOUR PAST GAMES")]), e._v(" "), s("button", {
                    staticClass: "manage",
                    on: {
                        click: e.onManageClick
                    }
                }, [e._v("\n                " + e._s(e.isManaging ? "DONE" : "MANAGE") + "\n            ")])]) : s("p", {
                    staticClass: "empty"
                }, [e._v("No Past Games Yet")]), e._v(" "), s("transition-group", {
                    attrs: {
                        name: "list-transition"
                    }
                }, e._l(e.artifacts.artifacts, (function(t, i) {
                    return s("PastGame", {
                        key: t.url,
                        attrs: {
                            artifact: t,
                            index: i,
                            "is-managing": e.isManaging
                        },
                        on: {
                            removeClick: e.onRemoveClick
                        }
                    })
                })), 1)], 1)])
            };
            k._withStripped = !0;
            var P = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.config,
                        expression: "config"
                    }],
                    staticClass: "past-game",
                    class: {
                        managing: e.isManaging, confirming: e.showConfirm
                    }
                }, [i("a", {
                    staticClass: "card",
                    attrs: {
                        href: e.artifact.url,
                        target: "_blank"
                    },
                    on: {
                        click: e.onClick
                    }
                }, [i("div", {
                    staticClass: "image",
                    class: e.imageClasses
                }, [e.config && e.config.hasPreviews ? i("img", {
                    ref: "image",
                    attrs: {
                        src: e.imageSrc,
                        alt: e.artifact.gameName
                    },
                    on: {
                        error: e.onImageError,
                        load: e.onImageLoad
                    }
                }) : e._e()]), e._v(" "), i("p", {
                    staticClass: "cta"
                }, [e._v(e._s(e.cta) + "\n            "), i("svg", {
                    directives: [{
                        name: "svg",
                        rawName: "v-svg",
                        value: s(52819),
                        expression: "require('../../images/icon-external_url.inline.svg')"
                    }],
                    staticClass: "external-icon"
                })]), e._v(" "), i("div", {
                    staticClass: "content"
                }, [i("p", {
                    staticClass: "name"
                }, [e._v(e._s(e.name))]), e._v(" "), i("p", {
                    staticClass: "date"
                }, [i("span", [e._v("PLAYED ON")]), e._v(e._s(e.artifact.date))])]), e._v(" "), e.viewed || e.artifact.viewed ? e._e() : i("p", {
                    staticClass: "new"
                }, [e._v("NEW")])]), e._v(" "), e.config && e.config.shopItems && e.config.shopItems.length ? i("div", {
                    staticClass: "items"
                }, e._l(e.config.shopItems, (function(t) {
                    return i("div", {
                        key: t,
                        staticClass: "item"
                    }, ["cards" === t ? i("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg",
                            value: s(98087),
                            expression: "require('../../images/icon-cards.inline.svg')"
                        }]
                    }) : "mugs" === t ? i("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg",
                            value: s(85061),
                            expression: "require('../../images/icon-mug.inline.svg')"
                        }]
                    }) : "shirts" === t ? i("svg", {
                        directives: [{
                            name: "svg",
                            rawName: "v-svg",
                            value: s(94379),
                            expression: "require('../../images/icon-shirt.inline.svg')"
                        }]
                    }) : e._e()])
                })), 0) : e._e(), e._v(" "), i("transition", {
                    attrs: {
                        name: "fade-transition"
                    }
                }, [e.showConfirm ? i("div", {
                    staticClass: "confirm"
                }, [i("div", {
                    staticClass: "contain"
                }, [i("p", [i("span", [e._v("Are you sure?")]), e._v("\n                    This will permanently remove this game"), i("br"), e._v("from your past games list.\n                ")]), e._v(" "), i("button", {
                    staticClass: "confirm-yes",
                    on: {
                        click: function(t) {
                            return e.$emit("removeClick", e.index)
                        }
                    }
                }, [e._v("Remove")]), e._v(" "), i("button", {
                    staticClass: "confirm-no",
                    on: {
                        click: e.onCancelClick
                    }
                }, [e._v("Cancel")])])]) : e._e()])], 1)
            };
            P._withStripped = !0;
            const W = _().extend({
                props: {
                    index: Number,
                    isManaging: Boolean,
                    artifact: Object
                },
                data: () => ({
                    viewed: !1,
                    status: "loading",
                    showConfirm: !1
                }),
                computed: {
                    config() {
                        return (0, h.cF)(this.artifact.gameName)
                    },
                    name() {
                        var e, t;
                        return this.showConfirm ? "Are You Sure?" : this.isManaging ? "Remove Game?" : null !== (t = null === (e = this.config) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
                    },
                    imageClasses() {
                        var e;
                        return "error" !== this.status && (null === (e = this.config) || void 0 === e ? void 0 : e.hasPreviews) ? "success" === this.status ? ["preview"] : [] : ["fallback", this.artifact.gameName]
                    },
                    imageSrc() {
                        return `https://s3.amazonaws.com/jbg-blobcast-artifacts/${this.artifact.gameName}/${this.artifact.id}/preview.png`
                    },
                    cta() {
                        var e, t;
                        return (null === (t = null === (e = this.config) || void 0 === e ? void 0 : e.shopItems) || void 0 === t ? void 0 : t.length) ? "VIEW GAME & SHOP" : "VIEW THIS GAME"
                    }
                },
                watch: {
                    isManaging() {
                        this.showConfirm = !1
                    }
                },
                methods: {
                    onImageLoad() {
                        this.status = "success"
                    },
                    onImageError() {
                        this.status = "error"
                    },
                    onClick(e) {
                        if (this.isManaging) return e.preventDefault(), void(this.showConfirm = !0);
                        N.Q.setAsViewed(this.index), this.viewed = !0, this.$analytics.trackEvent({
                            category: "SignIn",
                            action: "galleryClicked",
                            label: this.artifact.gameName
                        })
                    },
                    onCancelClick() {
                        this.showConfirm = !1
                    }
                }
            });
            var y = (0, D.Z)(W, P, [], !1, null, "556a942f", null);
            y.options.__file = "src/apps/entry/views/signIn/PastGame.vue";
            const z = y.exports,
                x = _().extend({
                    components: {
                        PastGame: z
                    },
                    props: {
                        artifacts: Object
                    },
                    data: () => ({
                        isManaging: !1
                    }),
                    methods: {
                        onManageClick() {
                            this.isManaging = !this.isManaging
                        },
                        onRemoveClick(e) {
                            this.artifacts.remove(e)
                        }
                    }
                });
            var B = (0, D.Z)(x, k, [], !1, null, "5b9392d4", null);
            B.options.__file = "src/apps/entry/views/signIn/PastGames.vue";
            const j = B.exports,
                F = _().extend({
                    components: {
                        Menu: H,
                        PastGames: j
                    },
                    props: {
                        artifacts: Object,
                        twitch: Object
                    },
                    data: () => ({
                        openedTo: null
                    }),
                    computed: {
                        hasUnseenGames() {
                            return !!this.artifacts.artifacts.length && this.artifacts.hasUnviewed
                        }
                    },
                    methods: {
                        onHamburgerClick() {
                            this.openedTo = this.openedTo ? null : "menu"
                        },
                        onPastGamesClick() {
                            this.openedTo = "pastGames"
                        },
                        onTwitchLoginClick() {
                            this.$emit("twitchLoginClick")
                        },
                        onTwitchLogoutClick() {
                            this.$emit("twitchLogoutClick"), this.openedTo = null
                        },
                        onLinkClick(e) {
                            this.$emit("linkClick", e)
                        }
                    }
                });
            var V = (0, D.Z)(F, M, [], !1, null, "8691596e", null);
            V.options.__file = "src/apps/entry/views/signIn/TopBar.vue";
            const q = V.exports;
            var $ = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "jbg password"
                }, [i("img", {
                    staticClass: "image",
                    attrs: {
                        src: s(88005),
                        alt: "Enter Password"
                    }
                }), e._v(" "), i("h3", {
                    staticClass: "text"
                }, [e._v(e._s(e.$t("STRING_PASSWORD_REQUIRED_TITLE")))]), e._v(" "), i("p", {
                    staticClass: "subtext"
                }, [e._v(e._s(e.$t("STRING_PASSWORD_REQUIRED_BODY")))]), e._v(" "), i("div", {
                    staticClass: "actions"
                }, [i("input", {
                    ref: "input",
                    attrs: {
                        type: "text",
                        placeholder: e.$t("ENTRY.PASSWORD_PLACEHOLDER"),
                        maxlength: e.passwordLength,
                        autocapitalize: "off",
                        autocorrect: "off",
                        autocomplete: "off",
                        "aria-label": "password"
                    },
                    domProps: {
                        value: e.password
                    },
                    on: {
                        input: e.onInput
                    }
                }), e._v(" "), i("button", {
                    attrs: {
                        type: "submit",
                        disabled: !e.canSubmit
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.$emit("resolve", e.password)
                        }
                    }
                }, [e._v("\n            " + e._s(e.$t("STRING_PASSWORD_JOIN_AS_PLAYER")) + "\n        ")]), e._v(" "), e.room.audienceEnabled ? [i("hr"), e._v(" "), i("p", {
                    staticClass: "or"
                }, [e._v("OR")]), e._v(" "), i("button", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.$t("STRING_PASSWORD_JOIN_AS_AUDIENCE"),
                        expression: "$t('STRING_PASSWORD_JOIN_AS_AUDIENCE')"
                    }],
                    staticClass: "audience",
                    attrs: {
                        type: "submit"
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.$emit("resolve", !0)
                        }
                    }
                })] : i("button", {
                    staticClass: "cancel",
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.$emit("resolve", !1)
                        }
                    }
                }, [e._v("\n            " + e._s(e.$t("ACTION.CANCEL")) + "\n        ")])], 2)])
            };
            $._withStripped = !0;
            const Y = _().extend({
                props: {
                    room: Object
                },
                i18n: {
                    messages: U,
                    sharedMessages: C.s
                },
                data: () => ({
                    passwordLength: 5,
                    password: ""
                }),
                computed: {
                    canSubmit() {
                        return this.password.length >= this.passwordLength
                    }
                },
                mounted() {
                    this.$refs.input.focus()
                },
                methods: {
                    onInput(e) {
                        const t = e.target;
                        this.password = t.value.toUpperCase()
                    }
                }
            });
            var K = (0, D.Z)(Y, $, [], !1, null, "29eab9d7", null);
            K.options.__file = "src/apps/entry/views/signIn/PasswordModal.vue";
            const J = K.exports;
            var Q = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "jbg error"
                }, [i("img", {
                    staticClass: "bubz image",
                    attrs: {
                        src: s(44603),
                        alt: "M Bubs"
                    }
                }), e._v(" "), i("h3", {
                    staticClass: "text"
                }, [e._v("ERROR!")]), e._v(" "), i("h3", {
                    staticClass: "subtext"
                }, [e._v("\n        This pre-release game can only be joined from the url in your press packet (not jackbox.tv).\n    ")]), e._v(" "), i("div", {
                    staticClass: "actions"
                }, [i("button", {
                    on: {
                        click: function(t) {
                            return t.preventDefault(), e.$emit("resolve")
                        }
                    }
                }, [e._v("Got It")])])])
            };
            Q._withStripped = !0;
            const Z = _().extend({});
            var X = (0, D.Z)(Z, Q, [], !1, null, "e6c8e964", null);
            X.options.__file = "src/apps/entry/views/signIn/PrereleaseModal.vue";
            const ee = X.exports;
            var te = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "slide-banner"
                }, [e.isLoading ? s("div", {
                    staticClass: "loading"
                }, [e._v("LOADING")]) : e._e(), e._v(" "), !e.isLoading && e.banners.length ? s("VueSlickCarousel", e._b({}, "VueSlickCarousel", e.settings, !1), e._l(e.banners, (function(t) {
                    return s("div", {
                        key: t.url,
                        staticClass: "slide"
                    }, [s("a", {
                        attrs: {
                            href: t.url,
                            target: "_blank"
                        },
                        on: {
                            click: function(s) {
                                return e.onClick(t)
                            }
                        }
                    }, [s("img", {
                        attrs: {
                            src: t.image,
                            draggable: "false",
                            alt: "Advert"
                        }
                    }), e._v(" "), s("p", [e._v(e._s(t.text))])])])
                })), 0) : e._e()], 1)
            };
            te._withStripped = !0;
            var se = s(72529),
                ie = s.n(se);
            const ae = _().extend({
                components: {
                    VueSlickCarousel: ie()
                },
                data: () => ({
                    isLoading: !1,
                    banners: [],
                    settings: {
                        arrows: !1,
                        dots: !0,
                        centerMode: !0,
                        centerPadding: "60px",
                        autoplay: !0,
                        autoplaySpeed: 5e3
                    }
                }),
                mounted() {
                    this.load()
                },
                methods: {
                    load() {
                        var e, t, s, i, a;
                        return t = this, s = void 0, a = function*() {
                            try {
                                const t = yield fetch(O.v.banners.url), s = yield t.json(), i = null !== (e = null == s ? void 0 : s.bannerAds) && void 0 !== e ? e : [];
                                this.banners = i.filter(this.isValidBanner.bind(this)).map((e => ({
                                    url: e.href,
                                    image: e.src,
                                    text: e.text
                                }))), this.banners.length || this.showDefault()
                            } catch (e) {
                                this.showDefault(), console.warn("[SlideBanner] Could not load or parse banner data", e)
                            } finally {
                                this.isLoading = !1
                            }
                        }, new((i = void 0) || (i = Promise))((function(e, o) {
                            function n(e) {
                                try {
                                    _(a.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function r(e) {
                                try {
                                    _(a.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function _(t) {
                                var s;
                                t.done ? e(t.value) : (s = t.value, s instanceof i ? s : new i((function(e) {
                                    e(s)
                                }))).then(n, r)
                            }
                            _((a = a.apply(t, s || [])).next())
                        }))
                    },
                    showDefault() {
                        this.banners = [{
                            url: "https://www.jackboxgames.com/party-pack-seven/?utm_source=jbgtv&utm_medium=jbgtvpp7&utm_campaign=jbgtvpp7",
                            image: "https://s3.amazonaws.com/static.jackboxgames.com/banners/PP7.png",
                            text: "AVAILABLE NOW!"
                        }]
                    },
                    isValidBanner(e) {
                        var t, s;
                        const i = new Date;
                        if (m.K.shared.isSupported && e.tags) {
                            const i = null !== (t = e.tags) && void 0 !== t ? t : [],
                                a = JSON.parse(null !== (s = m.K.shared.get("tags")) && void 0 !== s ? s : "[]");
                            if (!i.every((e => a.includes(e)))) return !1
                        }
                        return !(e.start && i < new Date(e.start)) && !(e.end && i > new Date(e.end))
                    },
                    onClick(e) {
                        this.$analytics.trackEvent({
                            category: "SignIn",
                            action: "bannerClicked",
                            label: e.url
                        })
                    }
                }
            });
            var oe = (0, D.Z)(ae, te, [], !1, null, "bd07a9fc", null);
            oe.options.__file = "src/apps/entry/views/signIn/SlideBanner.vue";
            const ne = oe.exports;
            var re = function(e, t, s, i) {
                return new(s || (s = Promise))((function(a, o) {
                    function n(e) {
                        try {
                            _(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function r(e) {
                        try {
                            _(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function _(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(n, r)
                    }
                    _((i = i.apply(e, t || [])).next())
                }))
            };
            const _e = _().extend({
                components: {
                    PastGame: z,
                    TopBar: q,
                    SlideBanner: ne,
                    Input: g.Z
                },
                i18n: {
                    messages: U,
                    sharedMessages: C.s
                },
                bb: {
                    tos: (e, t) => `<a class="tosLink" href="https://jackboxgames.com/terms-of-service/" target="_blank">${t}</a>`
                },
                data() {
                    return {
                        codeLength: 4,
                        nameLength: 12,
                        passwordLength: 5,
                        isConnecting: !1,
                        code: "",
                        name: "",
                        password: "",
                        reconnectData: null,
                        room: null,
                        notFound: !1,
                        artifacts: new N.Q,
                        twitch: new p(this.$route.redirectedFrom),
                        warnings: []
                    }
                },
                computed: {
                    hasFormData() {
                        return this.code.length === this.codeLength && !!this.name
                    },
                    isReconnectable() {
                        return !!this.reconnectData && this.code === this.reconnectData.code
                    },
                    formState() {
                        var e, t;
                        if (!this.room) return {
                            isEnabled: !1,
                            statusText: this.code.length === this.codeLength && this.notFound ? "STATUS_ROOM_NOT_FOUND" : "",
                            submitText: "ACTION.PLAY"
                        };
                        const s = null !== (t = null === (e = (0, h.cF)(this.room.appTag)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : "???";
                        return this.isReconnectable ? {
                            isEnabled: this.hasFormData,
                            statusText: s,
                            submitText: "SUBMIT_RECONNECT",
                            joinAs: this.reconnectData.joinAs
                        } : this.room.locked ? this.room.audienceEnabled ? {
                            isEnabled: this.hasFormData,
                            statusText: "STATUS_GAME_STARTED",
                            submitText: "SUBMIT_JOIN_AUDIENCE",
                            joinAs: "audience"
                        } : {
                            isEnabled: !1,
                            statusText: "STATUS_GAME_STARTED",
                            submitText: "SUBMIT_GAME_STARTED"
                        } : this.room.full ? this.room.audienceEnabled ? {
                            isEnabled: this.hasFormData,
                            statusText: "STATUS_GAME_FULL",
                            submitText: "SUBMIT_JOIN_AUDIENCE",
                            joinAs: "audience"
                        } : {
                            isEnabled: !1,
                            statusText: "STATUS_GAME_FULL",
                            submitText: "SUBMIT_GAME_FULL"
                        } : {
                            isEnabled: this.hasFormData,
                            statusText: s,
                            submitText: "ACTION.PLAY",
                            joinAs: "player"
                        }
                    },
                    recentGames() {
                        var e, t;
                        return null === (t = null === (e = this.artifacts) || void 0 === e ? void 0 : e.artifacts) || void 0 === t ? void 0 : t.slice(0, 3)
                    }
                },
                beforeMount() {
                    this.$api = new T.APIClient({
                        host: v.c.serverUrl,
                        scheme: "https"
                    }), this.populateFromStorage(), this.checkForReconnectRoom(), this.setupTwitch(), this.populateFromURL()
                },
                mounted() {
                    this.sendTiming(), this.$analytics.trackScreenView("signin.login"), this.$storage.isSupported && this.$storage.setTag(`locale-${this.$i18n.locale.substr(0,2)}`)
                },
                methods: {
                    onPastGamesClick() {
                        this.$refs.topBar.$data.openedTo = "pastGames"
                    },
                    populateFromStorage() {
                        var e, t, s;
                        if (!this.$storage.isSupported) return;
                        this.code = (null !== (e = this.$storage.get("roomCode")) && void 0 !== e ? e : "").toUpperCase(), this.name = (null !== (t = this.$storage.get("name")) && void 0 !== t ? t : "").toUpperCase();
                        const i = null !== (s = this.$storage.get("reconnect")) && void 0 !== s ? s : "";
                        if (i) {
                            const [e, t, s] = i.split(":");
                            this.reconnectData = {
                                code: this.code,
                                id: parseInt(e, 10),
                                joinAs: t,
                                secret: s
                            }
                        }
                    },
                    populateFromURL() {
                        !this.code && this.$route.params.roomCode && (this.code = this.$route.params.roomCode.toUpperCase(), this.getRoomInfo())
                    },
                    checkForReconnectRoom() {
                        return re(this, void 0, void 0, (function*() {
                            this.code && (yield this.getRoomInfo(), this.room || (this.code = "", this.$storage.remove("roomCode"), this.$storage.remove("reconnect")))
                        }))
                    },
                    getWarnings() {
                        return re(this, void 0, void 0, (function*() {
                            this.room && (this.warnings = yield class {
                                static warningsForAppTag(e) {
                                    var t, s, i, a, o;
                                    return s = this, i = void 0, o = function*() {
                                        const s = [],
                                            i = (0, h.cF)(e);
                                        return this.isCanvasSupported || s.push("canvas"), this.isFlexboxSupported || s.push("flexbox"), (null === (t = null == i ? void 0 : i.features) || void 0 === t ? void 0 : t.includes("camera")) && !(yield this.isCameraSupported) && s.push("camera"), s
                                    }, new((a = void 0) || (a = Promise))((function(e, t) {
                                        function n(e) {
                                            try {
                                                _(o.next(e))
                                            } catch (e) {
                                                t(e)
                                            }
                                        }

                                        function r(e) {
                                            try {
                                                _(o.throw(e))
                                            } catch (e) {
                                                t(e)
                                            }
                                        }

                                        function _(t) {
                                            var s;
                                            t.done ? e(t.value) : (s = t.value, s instanceof a ? s : new a((function(e) {
                                                e(s)
                                            }))).then(n, r)
                                        }
                                        _((o = o.apply(s, i || [])).next())
                                    }))
                                }
                                static get isCanvasSupported() {
                                    const e = document.createElement("canvas");
                                    return !(!e.getContext || !e.getContext("2d"))
                                }
                                static get isFlexboxSupported() {
                                    try {
                                        return CSS.supports("flex-wrap", "wrap")
                                    } catch (e) {
                                        return !1
                                    }
                                }
                                static get isCameraSupported() {
                                    return new Promise(((e, t) => {
                                        var s;
                                        null === (s = navigator.mediaDevices) || void 0 === s || s.enumerateDevices().then((t => e(t.some((e => "videoinput" === e.kind))))).catch((e => t(e)))
                                    }))
                                }
                            }.warningsForAppTag(this.room.appTag))
                        }))
                    },
                    showPreReleaseModal() {
                        this.$showModal(ee)
                    },
                    sendTiming() {
                        var e;
                        if (!(null === (e = window.performance) || void 0 === e ? void 0 : e.timing)) return;
                        const t = Math.round((new Date).getTime() - window.performance.timing.navigationStart);
                        this.$analytics.trackTiming({
                            category: "Send",
                            name: "timing",
                            label: "Signin Page",
                            value: t
                        })
                    },
                    trackConnectEvent() {
                        this.room && (this.$analytics.trackEvent({
                            category: "SignIn",
                            action: "roomJoined",
                            label: this.room.appTag
                        }), this.twitch.user && this.$analytics.trackEvent({
                            category: "SignIn",
                            action: "twitchUserRoomJoined",
                            label: this.room.appTag
                        }))
                    },
                    onCodeInput() {
                        this.code = this.code.replace(/\s/g, ""), this.code = this.code.trim().toUpperCase(), this.code.length < this.codeLength ? this.room = null : this.getRoomInfo()
                    },
                    onNameInput() {
                        this.name = this.name.replace(/^\s+/, "");
                        const e = v.c.sanitizeName(this.name);
                        this.name = e.toUpperCase()
                    },
                    shouldPromptForPassword(e) {
                        return "player" === e && !this.isReconnectable && !!this.room.passwordRequired && !this.password
                    },
                    promptForPassword() {
                        return re(this, void 0, void 0, (function*() {
                            const e = yield this.$showModal(J, {
                                room: this.room
                            });
                            e && (!0 !== e ? (this.password = e, this.connect("player")) : this.connect("audience"))
                        }))
                    },
                    setupTwitch() {
                        return re(this, void 0, void 0, (function*() {
                            if (!this.twitch) return;
                            if (yield this.twitch.prepare(), !this.twitch.user) return;
                            const e = this.$refs.topBar;
                            null == e || e.$forceUpdate();
                            let t = this.twitch.user.display_name;
                            t.length > this.nameLength && (t = `${t.substr(0,this.nameLength-1)}…`), this.name = t
                        }))
                    },
                    onTwitchLoginClick() {
                        this.twitch.login()
                    },
                    onTwitchLogoutClick() {
                        this.twitch.logout(), this.name = ""
                    },
                    onLinkClick(e) {
                        this.$analytics.trackEvent({
                            category: "SignIn",
                            action: "linkClicked",
                            label: e
                        })
                    },
                    shouldPromptForTwitch(e) {
                        return "player" === e && !!this.room.twitchLocked && !this.twitch.user
                    },
                    promptForTwitch() {
                        var e;
                        return re(this, void 0, void 0, (function*() {
                            const t = [{
                                text: this.$t("SUBMIT_TWITCH_LOGIN"),
                                classes: ["twitch"],
                                value: "twitch"
                            }];
                            switch ((null === (e = this.room) || void 0 === e ? void 0 : e.audienceEnabled) ? t.push({
                                    text: this.$t("SUBMIT_JOIN_AUDIENCE"),
                                    classes: ["audience"],
                                    value: "audience"
                                }) : t.push({
                                    text: this.$t("ACTION.CANCEL"),
                                    classes: ["cancel"],
                                    value: "cancel"
                                }), yield this.$showModal("Options", {
                                    text: this.$t("STRING_ERROR_REQUIRES_TWITCH_LOGIN"),
                                    options: t
                                })) {
                                case "twitch":
                                    return void this.onTwitchLoginClick();
                                case "audience":
                                    this.connect("audience")
                            }
                        }))
                    },
                    getRoomInfo() {
                        return re(this, void 0, void 0, (function*() {
                            this.notFound = !1;
                            try {
                                const e = yield this.$api.getRoom({
                                    code: this.code
                                });
                                this.room = e, this.getWarnings(), G.o.setup(this.room.locale), this.$root.$i18n.locale = G.o.locale
                            } catch (e) {
                                console.warn(e), this.room = null, this.notFound = !0
                            }
                        }))
                    },
                    getConnectOptions(e) {
                        var t;
                        const s = "audience" === e ? this.room.audienceHost : this.room.host;
                        let i = v.c.sanitizeName(this.name).trim();
                        i.length > this.nameLength && (i = `${i.substr(0,this.nameLength-1)}…`);
                        let a = d();
                        this.$storage.isSupported && (a = null !== (t = this.$storage.get("uuid")) && void 0 !== t ? t : a, this.$storage.set("uuid", a));
                        const o = {
                            host: s,
                            code: this.code.toUpperCase(),
                            name: i,
                            password: this.password,
                            role: e,
                            userId: a,
                            debug: O.v.debug
                        };
                        return this.twitch.user && (o.twitchToken = this.twitch.user.token), this.isReconnectable && (o.id = this.reconnectData.id, o.secret = this.reconnectData.secret), o
                    },
                    connect(e) {
                        return re(this, void 0, void 0, (function*() {
                            if (!e) return;
                            if (this.isConnecting) return;
                            if (yield this.getRoomInfo(), !this.room) return this.showError("ERROR.ROOM_NOT_FOUND");
                            if ((0, h.iU)(this.room.appId)) return this.showPreReleaseModal();
                            if (this.shouldPromptForPassword(e)) return this.promptForPassword();
                            if (this.shouldPromptForTwitch(e)) return this.promptForTwitch();
                            const t = this.getConnectOptions(e);
                            if (!t.host) return;
                            if (!t.code) return;
                            if (!t.name) return;
                            if (this.isConnecting) return;
                            this.isConnecting = !0;
                            const i = new T.WSClient(t);
                            try {
                                const a = yield i.connect();
                                this.$ecast = i, this.$syncEcast(), this.$setSentryTag("role", this.$ecast.role), this.$debug.setup(this.$ecast, this.room), this.trackConnectEvent(), this.$storage.isSupported && (this.$storage.set("name", t.name), this.$storage.set("roomCode", this.code), this.$storage.set("reconnect", `${a.id}:${e}:${a.secret}`)), yield class {
                                    static load(e) {
                                        return b(this, void 0, void 0, (function*() {
                                            (0, A.c)("[GameLoader] load", e);
                                            const t = (0, h.cF)(e.room.appTag);
                                            if (!t) throw Error(`[GameLoader] no games exist with tag (${e.room.appTag})`);
                                            const i = "vue" === t.app ? () => b(this, void 0, void 0, (function*() {
                                                return s.e(2104).then(s.bind(s, 52104))
                                            })) : () => b(this, void 0, void 0, (function*() {
                                                return Promise.all([s.e(7416), s.e(524), s.e(972)]).then(s.bind(s, 10972))
                                            }));
                                            try {
                                                const s = yield i();
                                                yield s.load(e, t)
                                            } catch (e) {
                                                console.error("Unable to load app", e)
                                            }
                                        }))
                                    }
                                }.load({
                                    client: this.$ecast,
                                    room: this.room,
                                    welcome: a
                                }), this.$root.$destroy(), o.n_({
                                    type: "navigation",
                                    category: "navigation.unload",
                                    message: "Entry app is destroyed",
                                    level: n.z.Info,
                                    timestamp: Date.now() / 1e3
                                })
                            } catch (t) {
                                console.error("[SignIn]", t), this.isConnecting = !1, this.onConnectionError(t, e)
                            }
                        }))
                    },
                    onConnectionError(e, t) {
                        var s;
                        return re(this, void 0, void 0, (function*() {
                            return e instanceof I.EcastRoomIsFull ? "audience" === t ? this.promptForRetry("ERROR_AUDIENCE_FULL") : this.promptForRetry("ERROR_ROOM_FULL") : e instanceof I.EcastRoomIsLocked ? this.promptForRetry("STRING_ERROR_ROOM_IS_LOCKED") : e instanceof I.EcastInvalidPassword ? (yield this.$showModal("Error", {
                                text: this.$t("ERROR.TITLE"),
                                subtext: this.$t("STRING_ERROR_INCORRECT_PASSWORD"),
                                dismissText: this.$t("ACTION.TRY_AGAIN")
                            }), this.password = "", this.connect("player")) : e instanceof I.EcastRoomNotFound ? this.showError("ERROR.ROOM_NOT_FOUND") : e instanceof I.EcastTwitchLoginRequired ? this.showError("STRING_ERROR_REQUIRES_TWITCH_LOGIN") : e instanceof I.EcastPasswordRequired ? this.showError("STRING_PASSWORD_REQUIRED_TITLE") : e instanceof I.EcastFilterError ? this.showError("ERROR_FILTER_NAME") : (null === (s = e.message) || void 0 === s ? void 0 : s.includes("Network request failed")) ? this.showError("ERROR_UNABLE_TO_CONNECT") : void this.showError("STRING_ERROR_GENERIC")
                        }))
                    },
                    promptForRetry(e) {
                        var t;
                        return re(this, void 0, void 0, (function*() {
                            let s = [{
                                text: this.$t("ACTION.OK"),
                                classes: ["cancel"],
                                value: "close"
                            }];
                            if ((null === (t = this.room) || void 0 === t ? void 0 : t.audienceEnabled) && (s = [{
                                    text: this.$t("STRING_PASSWORD_JOIN_AS_AUDIENCE"),
                                    classes: ["audience"],
                                    value: "audience"
                                }, {
                                    text: this.$t("ACTION.CANCEL"),
                                    classes: ["cancel"],
                                    value: "close"
                                }]), "ERROR_AUDIENCE_FULL" === e && (s = [{
                                    text: this.$t("ACTION.OK"),
                                    classes: ["ok"],
                                    value: "ok"
                                }]), "audience" === (yield this.$showModal("Options", {
                                    text: this.$t(e),
                                    options: s
                                }))) return this.connect("audience")
                        }))
                    },
                    showError(e) {
                        this.$showModal("Error", {
                            text: this.$t("ERROR.TITLE"),
                            subtext: this.$t(e),
                            dismissText: this.$t("ACTION.OK")
                        })
                    }
                }
            });
            var Ee = (0, D.Z)(_e, i, [], !1, null, "2ba6adc4", null);
            Ee.options.__file = "src/apps/entry/views/signIn/Main.vue";
            const ue = Ee.exports
        },
        6305: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => _
            });
            var i = function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("input", {
                    ref: "input",
                    attrs: {
                        enterkeyhint: "done"
                    },
                    domProps: {
                        value: e.value
                    },
                    on: {
                        input: e.onInput
                    }
                })
            };
            i._withStripped = !0;
            var a = s(2934),
                o = s.n(a);
            const n = o().extend({
                props: {
                    value: String
                },
                watch: {
                    value(e, t) {
                        e !== t && (this.$refs.input.value = e)
                    }
                },
                methods: {
                    onInput(e) {
                        return t = this, s = void 0, a = function*() {
                            const t = e.target;
                            if (!(null == t ? void 0 : t.value)) return;
                            const s = -1 === t.maxLength ? Number.MAX_SAFE_INTEGER : t.maxLength;
                            t.value.length > s ? t.value = t.value.substring(0, s) : (this.$emit("input", t.value), yield o().nextTick(), t.value !== this.value && (t.value = this.value))
                        }, new((i = void 0) || (i = Promise))((function(e, o) {
                            function n(e) {
                                try {
                                    _(a.next(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function r(e) {
                                try {
                                    _(a.throw(e))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function _(t) {
                                var s;
                                t.done ? e(t.value) : (s = t.value, s instanceof i ? s : new i((function(e) {
                                    e(s)
                                }))).then(n, r)
                            }
                            _((a = a.apply(t, s || [])).next())
                        }));
                        var t, s, i, a
                    }
                }
            });
            var r = (0, s(51900).Z)(n, i, [], !1, null, null, null);
            r.options.__file = "src/apps/vue/components/Input.vue";
            const _ = r.exports
        },
        98087: e => {
            "use strict";
            e.exports = '<svg viewBox="0 0 200 200">\n    <path d="M187.4,47.8l-34.1-15.9V29c0-8.8-7.2-16-16-16H57.8c-8.8,0-16,7.2-16,16v18.9L13.6,61.1c-3.9,1.8-6.8,5-8.3,9\n\tc-1.5,4-1.3,8.4,0.5,12.2l45,96.4c1.8,3.9,5,6.8,9,8.3c1.8,0.6,3.6,1,5.5,1c2.3,0,4.6-0.5,6.8-1.5l42.7-19.9l14.2,6.6\n\tc2.2,1,4.5,1.5,6.7,1.5c6,0,11.8-3.4,14.5-9.2l45-96.4C198.9,61,195.4,51.5,187.4,47.8z M133.4,91.7L107,35.2\n\tc-0.4-0.8-0.8-1.5-1.2-2.1h27.6V91.7z M61.8,33h12l-12,5.6V33z M67.2,166.7L25.7,77.5l64.9-30.3l41.6,89.2l-21.7,10.1c0,0,0,0,0,0\n\tL67.2,166.7z M153.4,111.4V54l22,10.3L153.4,111.4z"/>\n</svg>'
        },
        52819: e => {
            "use strict";
            e.exports = '<svg viewBox="0 0 200 200">\n\t<path d="M185,106c-8.3,0-15,6.7-15,15v44c0,2.8-2.2,5-5,5H35c-2.8,0-5-2.2-5-5V35c0-2.8,2.2-5,5-5h44c8.3,0,15-6.7,15-15\n\t\tS87.3,0,79,0H35C15.7,0,0,15.7,0,35v130c0,19.3,15.7,35,35,35h130c19.3,0,35-15.7,35-35v-44C200,112.7,193.3,106,185,106z"/>\n\t<path d="M184,0h-54c-8.3,0-15,6.7-15,15s6.7,15,15,15h18.8L90.4,88.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4\n\t\ts7.7-1.5,10.6-4.4L170,51.2V70c0,8.3,6.7,15,15,15s15-6.7,15-15V16C200,7.2,192.8,0,184,0z"/>\n</svg>\n'
        },
        85061: e => {
            "use strict";
            e.exports = '<svg viewBox="0 0 200 200">\n    <path d="M164.7,52.2h-20.7V35.5c0-6.2-5-11.2-11.2-11.2H47.6c-6.2,0-11.2,5-11.2,11.2v118c0,12.8,10.4,23.2,23.2,23.2h61.3\n\tc12.8,0,23.2-10.4,23.2-23.2v-16.2h20.7c14.3,0,25.9-11.6,25.9-25.9V78.1C190.7,63.8,179,52.2,164.7,52.2z M174.2,111.4\n\tc0,5.2-4.3,9.5-9.5,9.5h-20.7V68.6h20.7c5.2,0,9.5,4.3,9.5,9.5V111.4z"/>\n</svg>\n'
        },
        94379: e => {
            "use strict";
            e.exports = '<svg viewBox="0 0 200 200">\n    <path d="M145.5,184.5H55.5c-4.1,0-7.5-3.4-7.5-7.5V95.2H29.6c-3.3,0-6.2-2.1-7.2-5.2L10,50.5c-1.2-3.7,0.7-7.7,4.3-9.2L72.5,17\n\tc1.8-0.7,3.8-0.8,5.6-0.1c0.1,0,6.3,15.1,22.4,15.1S122.7,17,122.9,17c1.8-0.7,3.8-0.7,5.6,0.1l58.2,24.2c3.6,1.5,5.4,5.5,4.3,9.2\n\tL178.5,90c-1,3.1-3.9,5.2-7.2,5.2H153V177C153,181.2,149.7,184.5,145.5,184.5z"/>\n</svg>\n\n\n'
        },
        88005: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/290cf1d25c6c6b09a8b5.png"
        },
        44603: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/43f061006b1916fa3b09.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/4948.d72f51e3423d0453f994.js.map