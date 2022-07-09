(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/fibbage2"], {
        47214: (e, t, o) => {
            "use strict";
            o.d(t, {
                E: () => m
            });
            var i = o(13469),
                a = o.n(i),
                n = o(19755),
                s = o.n(n),
                r = o(72316),
                l = o.n(r),
                c = o(63574),
                u = o.n(c),
                h = o(10972),
                d = o(2720);

            function b(e, t, o, i, a, n, s) {
                try {
                    var r = e[n](s),
                        l = r.value
                } catch (e) {
                    return void o(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(i, a)
            }

            function g(e) {
                return function() {
                    var t = this,
                        o = arguments;
                    return new Promise((function(i, a) {
                        var n = e.apply(t, o);

                        function s(e) {
                            b(n, i, a, s, r, "next", e)
                        }

                        function r(e) {
                            b(n, i, a, s, r, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function p(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            const f = u().View.extend({
                el: "#banner",
                template: a().template('\n        <div class="banner-image"></div>\n        <div class="banner-text"></div>\n        <div class="banner-cta"></div>\n    '),
                events: {
                    click: "onBannerClick"
                },
                bindings: {
                    ":el": {
                        attributes: [{
                            name: "class",
                            observe: ["visible", "theme"],
                            onGet(e) {
                                let [t, o] = e, i = o || "no-theme";
                                return t && (i += " show"), i
                            }
                        }]
                    },
                    ".banner-text": "copy",
                    ".banner-cta": "cta"
                },
                initialize() {
                    this.render(), this.listenTo(this.model, "change:visible", this.visibleDidChange)
                },
                onBannerClick() {
                    h.app.analytics.trackEvent({
                        category: "SlideBanner",
                        action: "SlideBannerClicked",
                        label: this.getCampaign(),
                        value: 0
                    }), this.model.get("url") && window.open(this.model.get("url"), "_blank")
                },
                onRender() {
                    this.stickit()
                },
                visibleDidChange(e, t) {
                    setTimeout((() => {
                        s()(window).trigger("resize")
                    }), .5), t && h.app.analytics.trackEvent({
                        category: "SlideBanner",
                        action: "SlideBannerOn",
                        label: this.getCampaign(),
                        value: 0
                    })
                },
                getCampaign() {
                    const e = this.model.get("url");
                    if (!e) return "";
                    let t = "";
                    return e.split("?")[1] && (t = new URLSearchParams(window.location.search).get("utm_campaign") || ""), t
                }
            });
            class m {
                static get isVisible() {
                    return !!this.view && "on" === this.view.state
                }
                static update(e, t) {
                    var o = this;
                    return g((function*() {
                        t && "PostGame" === t.lobbyState ? (o.view || (yield o.init(e, t)), o.show()) : o.hide()
                    }))()
                }
                static init(e) {
                    var t = this;
                    return g((function*() {
                        e ? (t.bannerData = yield t.loadBannerData(e), t.bannerData && (t.view = new f({
                            model: new(l().Model)(t.bannerData)
                        }), t.isInitialized = !0)) : t.bannerData = !1
                    }))()
                }
                static show() {
                    this.view && this.view.model.set({
                        visible: !0
                    })
                }
                static hide() {
                    this.view && this.view.model.set({
                        visible: !1
                    })
                }
                static loadBannerData(e) {
                    return g((function*() {
                        try {
                            const t = yield fetch(d.v.banners.url), o = yield t.json();
                            return !(!o || !o.postGameBanners) && o.postGameBanners[e]
                        } catch (e) {
                            return console.error("Unable to load banner data", e), !1
                        }
                    }))()
                }
            }
            p(m, "view", null), p(m, "isInitialized", !1), p(m, "bannerConfig", null)
        },
        62353: (e, t, o) => {
            "use strict";
            o.d(t, {
                I: () => m
            });
            var i = o(13469),
                a = o.n(i),
                n = o(19755),
                s = o.n(n),
                r = o(72316),
                l = o.n(r),
                c = o(63574),
                u = o.n(c),
                h = o(10972),
                d = o(81127),
                b = o(40543),
                g = o(89446),
                p = o(47214);

            function f(e, t, o, i, a, n, s) {
                try {
                    var r = e[n](s),
                        l = r.value
                } catch (e) {
                    return void o(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(i, a)
            }
            const m = u().View.extend({
                appId: "legacymain",
                appTag: "legacymain",
                appVersion: "4.2.4",
                template: null,
                initialize(e) {
                    this.mergeOptions(e, ["appId", "appTag"]), h.app.analytics.setApplication({
                        appTag: this.getOption("appTag"),
                        appId: this.getOption("appId"),
                        appVersion: this.appVersion
                    }), h.app.analytics.trackScreenView(this.getOption("appTag")), this.model = new(l().Model)({});
                    const t = h.app.client.parseEntities();
                    this.model.set(t), this.model.on("change", this.controllerUpdate, this), this.model.on("change", (() => {
                        this.update().catch(this.caughtError)
                    })), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), h.app.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), h.app.client.on("client:connection", this.onConnectionMessageWithContext), h.app.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), h.app.client.on("client:disconnected", this.onDisconnectedWithContext)
                },
                render() {
                    this.model.set("username", g.c.safeText(h.app.client.name), {
                        silent: !0
                    }), this.$el.html(this.template(this.model.toJSON())), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
                },
                onEntityDidChange(e, t) {
                    this.model.unset(e, {
                        silent: !0
                    }), this.model.set(e, t)
                },
                controllerUpdate() {
                    const e = this.model.get("room") || {},
                        t = e.state || "";
                    let o = e.lobbyState;
                    o || -1 === t.indexOf("_") || (o = e.state.split("_")[1]), "PostGame" === o || "Credits" === t || "GameOver" === t || "PostGame" === t || "DayEnd" === t || e.gameResults ? p.E.isInitialized ? p.E.show() : p.E.init(this.getOption("appTag")).then((() => {
                        p.E.show()
                    })) : p.E.hide(), h.app.storage && h.app.storage.isSupported && e.platformId && h.app.storage.setTag(`platform-${e.platformId}`)
                },
                update() {
                    return (e = function*() {
                        return null
                    }, function() {
                        var t = this,
                            o = arguments;
                        return new Promise((function(i, a) {
                            var n = e.apply(t, o);

                            function s(e) {
                                f(n, i, a, s, r, "next", e)
                            }

                            function r(e) {
                                f(n, i, a, s, r, "throw", e)
                            }
                            s(void 0)
                        }))
                    })();
                    var e
                },
                caughtError(e) {
                    throw e
                },
                onAttach() {
                    this.update().catch(this.caughtError), s()(".gallery-link").click(this.artifactClicked.bind(this)), h.app.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(2e4)
                },
                showTwitchBroadcasterDialog(e) {
                    let t = `<div class='icon-${h.app.client.roles.broadcaster.platform}'>${h.app.client.roles.broadcaster.name}</div>`;
                    t += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? t += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : h.app.client.roomInfo.audienceEnabled || (t += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), b.b.show("custom", {
                        html: t,
                        position: "bottom",
                        timer: e,
                        backdrop: "transparent",
                        customClass: {
                            container: "jbgTwitchContainer",
                            popup: "jbgTwitchPopup",
                            htmlContainer: "jbgTwitchContent",
                            closeButton: "jbgCloseButton"
                        },
                        showCloseButton: !0,
                        closeButtonHtml: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.00006L2 20" stroke="#0C0C0C" stroke-width="3"></path><path d="M2 2.00001L20 20" stroke="#0C0C0C" stroke-width="3" /></svg >',
                        showConfirmButton: !1,
                        showClass: {
                            popup: "jbgTwitchShow"
                        },
                        hideClass: {
                            popup: "jbgTwitchHide"
                        }
                    })
                },
                onBeforeDestroy() {
                    this.model.stopListening(), h.app.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), h.app.client.off("client:connection", this.onConnectionMessageWithContext), h.app.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), h.app.client.off("client:disconnected", this.onDisconnectedWithContext)
                },
                artifactClicked() {
                    h.app.analytics.trackEvent({
                        category: "PostGame",
                        action: "galleryClicked",
                        label: this.getOption("appTag")
                    }), d.Q.setAsViewed(0)
                },
                showScreen(e, t) {
                    const o = s()(e);
                    return this.activeScreen && e === this.activeScreen || (this.activeScreen && (s()(this.activeScreen).fadeOut("fast", (() => {})), s()(this.activeScreen).show(), s()(this.activeScreen).addClass("pt-page-off")), o.hide(), o.removeClass("pt-page-off"), o.removeClass("pt-page-moveToLeft"), o.fadeIn("fast", (() => {
                        t && t()
                    })), this.activeScreen = e, this.onResize(), this.throttledTrackScreenView || (this.throttledTrackScreenView = a().throttle(this.trackScreenView.bind(this), 48e4)), this.throttledTrackScreenView(this.getOption("appTag"))), !1
                },
                notify() {
                    b.b.vibrate()
                },
                trackScreenView() {
                    h.app.analytics.trackScreenView(this.getOption("appTag")), h.app.storage && h.app.storage.isSupported && h.app.storage.setTag(`played-${this.getOption("appTag")}`)
                },
                onRoomWasDestroyed() {
                    h.app.storage && h.app.storage.isSupported && (h.app.storage.remove("roomCode"), h.app.storage.remove("reconnect")), b.b.show("error", {
                        titleText: "Disconnected",
                        text: "Thanks for playing!",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onDisconnected() {
                    b.b.show("error", {
                        titleText: "Disconnected",
                        text: "You have been disconnected.",
                        willClose: () => {
                            window.location.reload(!0)
                        }
                    })
                },
                onConnectionMessage(e) {
                    const t = `${e.status} ${e.attempt?`${e.attempt}/5'`:""}`;
                    if (b.b.show("toast", {
                            text: t
                        }), "connected" === e.status) {
                        const e = h.app.client.parseEntities();
                        this.model.set(e)
                    }
                },
                onResize() {
                    const e = s()("#player").outerHeight(!0) || 0,
                        t = p.E.isVisible ? s()("#slide-in-banner").outerHeight(!0) : 0,
                        o = s()(window).width(),
                        i = s()(window).height() - e;
                    s()(`.${this.getOption("appTag")}-page`).css("height", i - t), s()(`.${this.getOption("appTag")}-page`).attr("height", i - t), s()(`.${this.getOption("appTag")}-page`).css("top", e), s()(`.${this.getOption("appTag")}-page`).css("width", o), s()(`.${this.getOption("appTag")}-page`).attr("width", o)
                }
            })
        },
        91791: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                MainView: () => m
            });
            var i = o(19755),
                a = o.n(i),
                n = o(13469),
                s = o.n(n),
                r = o(62353),
                l = o(10972),
                c = o(89446),
                u = o(27091),
                h = o.n(u),
                d = new URL(o(8604), o.b),
                b = new URL(o(8268), o.b),
                g = h()(d);
            const p = '<div id="page-fibbage" class="page green"> <link href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet"> <div id="player"> <h1><%=username%></h1> </div> <div id="fibbage-preload" class="fibbage-preload"></div> <div id="game" class="game pt-pageholder"> <div class="pt-page-off state-lobby fibbage-page"> <div class="container"> <br/><span id="fibbage-lobby-text"></span><br/> <form class="pure-form"> <button type="button" id="fibbage-startgame" class="button-fibbage button-xlarge pure-button pure-input-1">EVERYBODY\'S IN</button> <button type="button" id="fibbage-stopcountdown" class="button-fibbage button-xlarge pure-button pure-input-1">CANCEL</button> <button type="button" id="fibbage-sameplayers" class="button-fibbage button-xlarge pure-button pure-input-1 fibbage-endbuttons">SAME PLAYERS</button> <button type="button" id="fibbage-newplayers" class="button-fibbage button-xlarge pure-button pure-input-1 fibbage-endbuttons">NEW PLAYERS</button> </form> </div> </div> <div class="pt-page-off state-nothing fibbage-page"> <div class="logo-image" style="width:100%"> <img class="pure-img" style="margin-left:auto;margin-right:auto" src="' + g + '"> </div> </div> <div class="pt-page-off state-round fibbage-page"> <div class="round-main"><p class="round-text"></p></div> </div> <div class="pt-page-off state-pickbloop fibbage-page"> <div class="container"> <br/><span>SELECT YOUR SOUND FOR THE GAME!</span><br/> <div class="button-container"> <form class="pure-form"> <fieldset class="bloop-fieldset"> </fieldset> </form> </div> </div> </div> <div class="pt-page-off state-choosing fibbage-page"> <div class="container"> <br/><span>You\'re choosing the category!</span><br/> <div class="button-container"> <form class="pure-form"> <fieldset class="button-fieldset"> </fieldset> </form> </div> </div> </div> <div class="pt-page-off state-enterlie fibbage-page"> <div class="container"> <br/><span id="question-text"></span><br/><br/> <div id="fibbage-submit-alert" class="alert alert-info">Alert message goes here</div> <form class="pure-form" id="fibbage-enterlie-field"> <div class="pure-u-1"> <input id="fibbage-lie-input" name="fibbage-lie" class="pure-input-1 capitalize jbg-input fibbage-lie-input" type="text" maxlength="45" placeholder="ENTER A LIE" autocapitalize="off" autocorrect="off" autocomplete="off"> </div> <button type="button" id="fibbage-lieforme" class="button-fibbage button-large pure-button capitalize left">Lie for me<br/>(Half Points)</button> <button type="submit" id="fibbage-submitlie" class="button-fibbage button-large pure-button capitalize right"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;SEND</button> <div id="fibbage-submitlie-loading" style="display:none" class="button-fibbage-loading"></div> </form> <div id="fibbage-suggestions" class="pure-g"></div> </div> </div> <div class="pt-page-off state-chooselie fibbage-page"> <div class="container"> <br/><span id="chooselie-text"></span><br/> <form id="fibbage-chooselie" class="pure-form"></form> <br/> <form id="fibbage-defib" class="pure-form"> <button type="button" data-param="defib" class="pure-input-1 fibbage-defib-button button-large pure-button button-fibbage button-fibbage-defib"><img class="defib-icon" src="' + h()(b) + '"/>&nbsp;&nbsp;&nbsp;&nbsp;DE<font color="red">FIB</font>RILLATOR</button> <br/><span>CUT YOUR CHOICES DOWN TO TWO!</span> </form> </div> </div> <div class="pt-page-off state-chooselikes fibbage-page"> <div class="container"> <br/><span id="chooselikes-choice"></span><br/> <span id="chooselikes-text"></span><br/> <form id="fibbage-chooselikes" class="pure-form"></form> </div> </div> <div class="pt-page-off state-liereceived fibbage-page"> <br/><span>LIE ENTERED!<br/>WAITING FOR OTHER PLAYERS.</span><br/> </div> <div class="pt-page-off state-lyingdone fibbage-page"> <br/><span>LYING IS DONE!</span><br/> </div> <div class="pt-page-off state-notchoosing fibbage-page"> <br/><span id="notchoosing"></span><br/> </div> <div class="pt-page-off state-audience-join fibbage-page"> <br/> <img style="margin-left:auto;margin-right:auto;max-width:75%;max-height:75%" src="' + g + '"> <span> <br/><br/> You can “Like” your favorite lies (one Like per question). <br/><br/> - AND - <br/><br/> You can play along by guessing the Truth on each question! Get a perfect 7/7 score and receive a free, weird bonus fact – great for parties! </span> <br/> </div> <div class="pt-page-off state-audience-postgame fibbage-page"> <div class="container"> <br/><img style="margin-left:auto;margin-right:auto;max-width:75%;max-height:75%" src="' + g + '"> <br/><br/><span>FINAL SCORE</span><br/><br/> <span id="audience-postgame-score" class="audience-score"></span><br/><br/> <span id="audience-postgame-score-quip"></span><br/><br/> <div class="audience-bonus-fact"><span id="audience-bonus-fact" class="audience-bonus-fact"></span></div><br/> <span id="audience-bonus-quip"></span><br/><br/> </div> </div> <div class="pt-page-off state-audience-score fibbage-page"> <div class="container"> <br/><img style="margin-left:auto;margin-right:auto;max-width:75%;max-height:75%" src="' + g + '"> <br/><br/><span>YOUR SCORE SO FAR</span><br/><br/> <span id="audience-score" class="audience-score"></span><br/><br/> <span id="audience-score-quip"></span> </div> </div> <div class="pt-page-off state-audience-chooselie fibbage-page"> <div class="container"> <br/><span id="audience-chooselie-text"></span><br/> <form id="fibbage-audience-chooselie" class="pure-form"></form> </div> </div> <div class="pt-page-off state-audience-chooselikes fibbage-page"> <div class="container"> <br/><span id="audience-chooselikes-choice"></span><br/> <span id="audience-chooselikes-text"></span><br/> <form id="fibbage-audience-chooselikes" class="pure-form"></form> </div> </div> </div> </div> ';

            function f(e, t, o, i, a, n, s) {
                try {
                    var r = e[n](s),
                        l = r.value
                } catch (e) {
                    return void o(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(i, a)
            }
            const m = r.I.extend({
                template: s().template(p),
                lacksAudience: !0,
                numCorrect: 0,
                currentChoice: "",
                currentLike: "",
                currentQuip: "",
                currentFact: "",
                bonusFacts: ["During the 1988 Iditarod dog sled race in Alaska, John Suter competed not with a team of traditional sled dogs, but with a team of poodles! (He lost.)", "The barking sounds of the velociraptors in Jurassic Park were made by recording the sound of turtles mating.", "Seattle’s 2011 census report revealed that citizens had more dogs than children.", "Former U.S. President Warren G. Harding once lost the White House china in a poker match!", "The inventors of bubble wrap were initially trying to make a plastic wallpaper!", "Poodle Clipping was a demonstration sport in the 1900 Olympics!", "Doritos were invented at Disneyland!", "Dr. Seuss proposed to his wife while she was riding on the back of his motorcycle!", "In 2015, the Atlanta Falcons were fined $350,000 and lost a 2016 NFL draft pick after they were caught blasting fake crowd noise out of their stadium speakers.", "One of the first prototypes of the Apple mouse was constructed out of a butter dish and a roll-on deodorant!", "There’s a Baltimore-based metal band whose lead singer is an African Grey parrot. They’re called Hatebeak.", "Andrew Lloyd Weber’s musical score for the sequel to The Phantom of the Opera was, and this is true, deleted by his cat.", "Disney animators were instructed to make Aladdin resemble Tom Cruise and Michael J. Fox.", "The first sports bra was constructed by sewing two jock straps together!", "Before portraying them as owners of a burger restaurant, the creator of Bob’s Burgers intended for the Belchers to be a family of cannibals!", "Fan of Breaking Bad? The real people who live in Walter White’s house probably aren’t, because people keep imitating a famous scene by throwing pizzas on their roof.", "If you travel to the Italian town of Laglio, be warned. There’s a 500 Euro fine for getting too close to George Clooney. (He loves to vacation there.)", "If you’re looking for that perfect place for your next party or wedding, consider the Sixth Floor Museum, which is now available for rental. It’s the building from which Lee Harvey Oswald allegedly shot JFK! Romantic!", "A Los Angeles tree that was planted in 2001 in memory of George Harrison’s life also ceased to be in 2015 after it was killed by… beetles.", "New York City averages about 2,100 exploding manholes per year, many of which seriously injure passersby. That’s only about 6 per day, don’t worry. You’ll probably be fine."],
                reaction01: ["Annnnd you lost. But keep playing! You can’t do any worse!", "Down and out in the first round. But keep playing to partially salvage your reputation!", "Lost on the first question. But keep playing for the second place prize of NOTHING!", "Lost in the first round! But keep playing and we won’t tell people how you utterly, utterly failed.", "Lost in the first round. But hey, defy the odds against you and keep playing for a chance to get a perfect score!", "And just like that you’ve lost. Your parents still think you’re a winner though, so keep playing for them!"],
                reaction11: ["Nailed it! Now just do that six more times. No pressure!", "Boom! You’re flying high!", "Great start! You can do this...unless the mounting pressure makes you crack!", "Perfect so far! These are the things memories are made of!!!", "And the streak begins! You got this!!! (Unless you don’t. We’ll see.)", "One for one! You are invincible and nothing can stop you!"],
                reaction02: ["Okay, you’re still not gonna win, but you’re playing for fun! Right? Right?!", "If the goal was to get them all wrong, then YOU’RE DOING GREAT!!!", "And the streak continues! It’s not a good streak but… IT CONTINUES!!!", "You’re completely out of it, but we salute your never-give-up spirit!!!", "You’re completely out of it, but keep playing! What else you gonna do?", "Ok, new goal: Try to go 0 for 3!", "Alright, 0 for 2. You can only go up (or farther down) from here!"],
                reaction12: ["You’ve answered half of them right...but more importantly, you’ve answered half of them wrong.", "You’ve gotten 50% of them right! But there’s a 100% chance you won’t win!", "On one hand, you got one out of two right! But that hand doesn’t matter. Sorry.", "One out of two ain’t bad. It ain’t good enough to win, but it ain’t bad.", "One out of two. Math is hard but that’s roughly a success rate of 46%.", "You’ve gotten 50% of them right! Be 50% excited!"],
                reaction22: ["Perfect score! Keep it up because it doesn’t get any easier from here.", "Is your brain even breaking a sweat yet? Do brains sweat? Don’t answer that, you might ruin your perfect score.", "Two for two! It’s time to get mildly but not too excited!", "Perfect score so far! Be confident, but don’t be cocky.", "According to our genius math dog who counts with his paws, you’re on your way to a perfect score!", "You’re perfect! Well, your score is."],
                reaction03: ["But keep playing because we want to see how bad this can get.", "You’re not letting your cat play for you, are you?", "So, you haven’t gotten any right. Big deal. Accomplishing things is overrated. You just keep doing what you’re doing, which is nothing!", "Keep going. You can’t get them all wrong. Right? Right?! (We don’t expect you to know the correct answer to that.)", "0 for 3. No need to panic. Stay calm until you’re 0 for 4.", "You get an A for effort. Still a big F for score, though."],
                reaction13: ["You obviously can’t spot a lie and should probably stay off the internet.", "Is it futile to continue? Yes, but do it anyway!", "One for three. You’re dumping a giant third on this game.", "Just one correct, but remember: A score is just a number that dictates whether you win or not.", "One out of three. Prove that you are more than just a fraction!"],
                reaction23: ["Two for three. You’re not gonna win, but at least you’re not embarrassing yourself.", "Two outta three. Dig deep into yourself and find the courage to go on!", "A perfect score is still not out of the question, in an alternate reality.", "Whatever you do, don’t get them all right from here on out or it’ll be excruciating"],
                reaction33: ["Three for three! Nobody’s sneaking any BS past you!", "Three in a row! That’s officially a streak! You’re streaking!", "Three for three! Are you peeking at the back of the game screen where all the answers are printed in tiny upside-down type?", "Three for three! You need a water or anything? No? Ok, keep going!", "Three for three! We don’t want to jinx you but you’re going to get a perfect score!"],
                reaction04: ["Okay, okay. This is bad. You have to keep going. You have to get one right.", "You obviously can’t spot a lie. We can help you if you send us your credit card and social security numbers.", "This is terrible. We can’t stand to look, yet… we can’t look away. Please keep going, it’s entertaining.", "Zero for four. You think Rocky would stop now? No way! He LOVES Fibbage.", "In case it wasn’t clear, pick the ones that AREN’T lies."],
                reaction14: ["One right, three wrong. You’re hopeless, but we admire you coming back for more punishment.", "One for four. A blindfolded mouse could do better. (We’ve done the research.)", "On the plus side, you’re probably a really good child and/or parent.", "One out of four. Let’s see if that can become one out of seven! Yeah!", "You’re just pressing buttons, aren’t you?"],
                reaction24: ["Two for four. Just do twice as good next time and you’ve got this!", "Two for four. At this rate, you’ll get 3.5 right!", "Keep reaching for halfway to the stars! Be the best mediocre you can be!", "If you believe in yourself, anything is possible! Except a perfect score. That’s long gone at this point.", "Two out of four. You’ve seen the face of adversity. Slap it and keep playing!"],
                reaction34: ["Three out of four. That one wrong answer will haunt you forever!", "So close! One day you’ll look back on this failure and laugh.", "Remember that ONE ANSWER you missed? We do.", "Usually, three out of four is good. This is not one of those times."],
                reaction44: ["Perfect so far! Don’t choke!", "Okay, we get it. You’re smart. Don’t blow it, brainiac.", "C’mon! Just admit you’re cheating! You have inside information… a spy in our offices… something.", "Wow, still perfect! You’re starting to make us sweat.", "Four for four. That’s fun to say out loud. Try it!"],
                reaction05: ["Okay, this hurts. But you’ve got to finish. You’ve endured this much.", "A baby could’ve gotten ONE right!", "We want to insult you, but it’s too easy and that makes us feel bad.", "Zero for five. You remind us of a certain Jamaican bobsled team.", "Well, there’s no way to sugarcoat this. You’re doing pretty well. (We tried.)", "Zero for five! Lesser players would quit. Wait, there can’t be lesser players."],
                reaction15: ["Somehow, it would seem better if you had just missed them all, you know?", "You’re great! (We figured you’d probably believe that, too.)", "Don’t quit your day job. Or your night job.", "You’re no longer an underdog. You’re now the dog that’s under the underdog.", "One out of five. But who cares? Your hair looks fantastic!"],
                reaction25: ["Just two more questions and you can be put out of your misery.", "Okay, the strategy next time is to ignore your instincts.", "Even if you had gotten twice as many right, it still wouldn’t be enough!!!", "Not good. But, as Gandhi once said, “Keep playing!”", "Just two correct. If you can find the will to live on, you’re more than welcome to keep playing."],
                reaction35: ["It’s still not gonna happen, but it’s the journey that counts.", "Even though you’re technically a loser, you’re kind of a half-winner in our eyes!", "Two questions left. Do it for pride.", "We had you pegged as a middle-of-the-road player, and look! You are!", "Three out of five. Clutch your amulet and find the strength to go on!"],
                reaction45: ["You’re on pace for the 90% award! Unfortunately, there’s no such thing!", "You had one hiccup. Next time try holding your breath for the whole game.", "Four out of five looks good, but it still gets you squat. Hope you like squat!", "Great effort! You’ll still get nothing… but GREAT EFFORT!!!", "Hey, you’ve only missed one after five questions! Celebrate by whispering “yay!”"],
                reaction55: ["Two questions left to perfection. Relax, and be one with the Fibbage.", "Are you a carpenter or general contractor or manicurist or nailmaker? Because you are nailing this.", "Just two more. We’re so nervous for you!", "Perfect score after five! Now comes the real pressure. Don’t blow it.", "Wow, we can’t trip you up. We blame it on the terrible lies the players are putting in."],
                reaction06: ["This has been nothing short of a trainwreck.", "Again, we’d to insult you, but I’m not sure you would understand it.", "Shhhhh. It’ll all be over soon.", "Look, the past is the past. The future is bright!", "Let’s talk about anything else but your score."],
                reaction16: ["Okay, you just need one more right to go from crappy to stinky.", "Good news: With this score you’ve just won the title of Most Gullible Person in The World!", "One out of six. At least you aren’t one of those losers who has zero!", "Just one out of six. But think about how sweet 2 out of 7 would be! Smell it!", "One out of six. We bet you’ve learned a lot about yourself though!"],
                reaction26: ["You know what? Next time just cheat.", "Okay, not your best showing… at least we hope this isn’t your best.", "Sure, you could’ve stopped several questions ago, but what’s so bad about embarrassment?!", "We’re not sure what makes you tick, except that it’s obviously not the will to reach perfection!", "Average. Vanilla. Ho-hum. Any of those adjectives are too good for your performance."],
                reaction36: ["Most people would’ve looked at this crappy score and quit. Way to gut it out!", "Three out of six. We owe you a half of a congrats!"],
                reaction46: ["4 correct, 2 incorrect. Unfortunately two horrific wrongs don’t make a right.", "It’s hard to criticize this score. Hard, but not impossible. It’s a relatively bad score.", "4 out of 6 correct. You’re two thirds of a winner!!!", "4 out of 6 correct. If Fibbage were a government job, you’d be killing it!", "After six questions, you have four right. Let’s double-check that… yes, that’s right."],
                reaction56: ["Let’s get the next one right, so the one you missed will sting even more!", "5 out of 6 is pretty good. Pointless and without reward, but pretty good!", "Five out of six! We’re not allowed to make trophies for that, so make your own!.", "You’ve only missed one! Too bad we can’t be bribed to change it… or can we? You know our address."],
                reaction66: ["Just one more left! Don’t crack under the pressure like so many before you!", "Don’t screw it up now and ruin the greatest moment of your life!", "You’re a well-oiled Fibbage machine! You look greasy but oil will do that!", "6 for 6! You’re not falling for these weak lies!", "Apparently, you’ve confused Fibbage for old carpet, because you are tearing it up!", "Are you ready for Fibbage fame? If not, quit now or hand the controller to an idiot.", "Perfect after six! Eternal glory is just one question away!", "Perfect after six! What a crazy ride this has been! We’re putting together a touching montage right now!"],
                reaction07: ["Let us never speak of this again.", "A big goose egg. No, you know what? We won’t insult a perfectly good egg like that.", "You did it! You failed in the most complete way possible!!!", "You did it! Zero for seven! Take that, success!", "Slow clap.", "At least you had fun, right? Probably not.", "People said it couldn’t be done, but you proved them wrong!"],
                reaction17: ["How the heck did you get one right?", "This score has set video games back a decade.", "We won’t tell anyone about this score if you won’t.", "Do you just believe everything anyone tells you?", "One for seven. You may be a loser but you’re no quitter!"],
                reaction27: ["We don’t want to discourage you, but that was terrible and this game probably isn’t for you.", "Were you distracted by shiny, jingling keys while you were playing?", "Winning isn’t everything. It’s just 5 better than what you did.", "On the plus side, your haters are happy.", "Hit the showers. Better yet, take a nice, long bath. Better yet, pick up a book and try to learn something."],
                reaction37: ["Well, you stuck it out to the end like a champ. Except for winning. Champs win.", "At least you finished. You can go ahead and call yourself The Finisher – we won’t tell anyone what really happened.", "You’re probably discouraged enough, so here’s a positive image: puppies riding baby pigs. Feel better.", "Don’t worry. You’ll get them next time! (Although we’re not betting on it.)", "Let this inspire you to go on and do something with your life! (Something that doesn’t involve recognizing obvious lies.)"],
                reaction47: ["Well, you got more right than wrong… so that’s already better than most referees, psychics, and teenagers trying to identify Mexico on a map!", "Look, getting four out of seven happens to all of us. It doesn’t make you any less of a Fibbage player.", "Hey, the average player gets 4/7. Nah… just kidding, they do better than that.", "Keep being you. Not great, not bad. Just you."],
                reaction57: ["Sorry you didn’t win, but on the bright side, no one expected you to win anyway!", "You only missed two, but a quick recap: You weren’t supposed to miss any.", "Well, you only missed two. Two huge, irrevocable mistakes.", "Now you have something to strive for in the offseason.", "Don’t look at them as two mistakes. Look at them as two goofs. Goofs is funnier.", "Partially moderately respectable!"],
                reaction67: ["Six out of seven! It’s no different than getting zero out of seven, but still, good job.", "You were so close!!! The important thing is not to dwell on it tonight in your nightmares.", "So close! That’s the type of thing that would drive most people nuts. Oh well. Have a good day!", "You might not realize this, but 6/7 is as close to a perfect score as you be get without actually getting one.", "This will either make you stronger or absolutely destroy you. Send us a post card and let us know.", "There is a lesson in here. Not sure what. But there is, probably."],
                events: {
                    "click #fibbage-startgame": "startGame",
                    "click #fibbage-stopcountdown": "stopCountdown",
                    "click #fibbage-sameplayers": "newGameSamePlayers",
                    "click #fibbage-newplayers": "newGameNewPlayers",
                    "click .fibbage-category-button": "chooseCategory",
                    "click .fibbage-bloop-button": "chooseBloop",
                    "click #fibbage-lieforme": "lieForMe",
                    "click #fibbage-submitlie": "submitLie",
                    "click .fibbage-suggestion-button": "chooseSuggestion",
                    "click .fibbage-lie-button": "chooseLie",
                    "click .fibbage-like-button": "toggleLike",
                    "click .fibbage-defib-button": "chooseDefib",
                    "click .fibbage-audience-lie-button": "chooseLieAudience",
                    "click .fibbage-audience-like-button": "chooseLikeAudience"
                },
                update() {
                    var e, t = this;
                    return (e = function*() {
                        const e = t.model.get("player");
                        void 0 !== e && void 0 !== e.playerColor && (a()("#player").css("background-color", e.playerColor), a()("#game").css("background-color", e.playerColor), a()("#fibbage-lie-input").css("background-color", e.playerColor)), l.app.client.isRole("audience") ? t.updateAudience() : e && t.updatePlayer(), t.onResize()
                    }, function() {
                        var t = this,
                            o = arguments;
                        return new Promise((function(i, a) {
                            var n = e.apply(t, o);

                            function s(e) {
                                f(n, i, a, s, r, "next", e)
                            }

                            function r(e) {
                                f(n, i, a, s, r, "throw", e)
                            }
                            s(void 0)
                        }))
                    })()
                },
                updatePlayer() {
                    const e = this.model.get("player"),
                        t = this.model.get("room"),
                        o = e ? e.state : "",
                        i = t ? t.state : "";
                    if ("Lobby_PickBloop" === o) {
                        let t = "";
                        for (let o = 0; o < e.bloops.length; o++) t += `<button type="button" data-num="${o}" data-id="${e.bloops[o].id}" class="fibbage-bloop-button button-fibbage button-large pure-button pure-input-1">${e.bloops[o].name}</button>`;
                        a()(".bloop-fieldset").html(t), this.showScreen(".state-pickbloop")
                    } else if (i && "Lobby" === i.split("_")[0]) {
                        if (o && "Lobby" === o.split("_")[0]) {
                            this.hideLobbyButtons(), a()("#player").css("background-color", e.playerColor);
                            const t = o.split("_")[1];
                            "WaitingForMore" === t ? a()("#fibbage-lobby-text").html("Waiting for all players to join") : "CanStart" === t ? (a()("#fibbage-lobby-text").html("Press this button when everybody has joined"), a()("#fibbage-startgame").show()) : "Countdown" === t ? (a()("#fibbage-lobby-text").html("Press this button to cancel game start"), a()("#fibbage-stopcountdown").show()) : "PostGameHost" === t ? (a()("#fibbage-lobby-text").html("What do you want to do?"), a()(".fibbage-endbuttons").show()) : "PostGame" === t && a()("#fibbage-lobby-text").html("Waiting for host decision"), this.showScreen(".state-lobby")
                        }
                    } else if ("Gameplay_EndShortie" === i) this.showScreen(".state-nothing");
                    else if ("Gameplay_EndGame" === i) this.showScreen(".state-nothing");
                    else if ("Gameplay_Logo" === i) this.showScreen(".state-nothing");
                    else if ("Gameplay_Round" === i) a()(".round-text").html(`ROUND ${t.round}`), this.showScreen(".state-round");
                    else if ("Gameplay_CategorySelection" === i && "Gameplay_CategorySelection" === o)
                        if (e.isChoosing) {
                            let e = "";
                            for (let o = 0; o < t.choices.length; o++) e += `<button type="button" data-num="${o}" class="fibbage-category-button button-fibbage button-large pure-button pure-input-1">${c.c.safeText(t.choices[o])}</button>`;
                            a()(".button-fieldset").html(e), this.showScreen(".state-choosing")
                        } else a()("#notchoosing").html(`${c.c.safeText(t.choosingPlayerName)} is picking a category`), this.showScreen(".state-notchoosing");
                    else if ("Gameplay_EnterLie" === i)
                        if ("Gameplay_EnterLie" === o) {
                            if (".state-enterlie" !== this.activeScreen) {
                                a()("#fibbage-lie-input").val(""), a()("#fibbage-enterlie-field").show(), a()("#fibbage-suggestions").hide(), a()("#fibbage-submit-alert").hide(), a()(".state-enterlie #question-text").html(t.question);
                                let o = "";
                                for (let t = 0; t < e.suggestions.length; t++) o += `<button type="button" data-num="${t}" class="fibbage-suggestion-button gridmargin button-fibbage button-large pure-button pure-u-1">${e.suggestions[t]}</button>`;
                                a()("#fibbage-suggestions").html(o)
                            }
                            if (e.showError) {
                                const e = a()("#fibbage-submit-alert");
                                a()("#fibbage-submit-alert").html("You entered the truth! Enter a lie!"), e.addClass("alert-info"), e.removeClass("alert-danger"), e.show()
                            }
                            this.showScreen(".state-enterlie")
                        } else "Gameplay_LieReceived" === o && this.showScreen(".state-liereceived");
                    else if ("Gameplay_LyingDone" === i) this.showScreen(".state-lyingdone");
                    else if ("Gameplay_ChooseLie" === i && "Gameplay_ChooseLie" === o)
                        if (e.choosingDone || void 0 !== e.chosen) {
                            a()("#chooselikes-choice").html(e.chosen ? `You chose: ${e.chosen}` : "You didn't make a choice"), a()("#chooselikes-text").html("Award bonus likes");
                            let t = "";
                            for (let o = 0; o < e.choices.length; o++) {
                                const i = e.likes.indexOf(e.choices[o]) >= 0,
                                    a = i ? "fa-check-square" : "fa-square";
                                t += `<button type="button" data-num="${o}" class="pure-input-1 fibbage-like-button button-large pure-button button-fibbage ${i?"button-fibbage-liked":"button-fibbage-like"}"><div class="like-text">${c.c.safeText(e.choices[o])}</div><div class="like-checkbox"><i class="far ${a} fa-lg"></i></div></button>`
                            }
                            a()("#fibbage-chooselikes").html(t), this.showScreen(".state-chooselikes")
                        } else {
                            a()("#chooselie-text").html("find the truth!");
                            let t = "";
                            for (let o = 0; o < e.choices.length; o++) t += `<button type="button" data-num="${o}" class="pure-input-1 fibbage-lie-button button-large pure-button button-fibbage">${c.c.safeText(e.choices[o])}</button>`;
                            e.hasDefib ? a()("#fibbage-defib").show() : a()("#fibbage-defib").hide(), a()("#fibbage-chooselie").html(t), this.showScreen(".state-chooselie")
                        }
                    else if ("Gameplay_ChooseLike" === i && "Gameplay_ChooseLike" === o) {
                        a()("#chooselikes-choice").html(e.chosen ? `You chose: ${e.chosen}` : "You didn't make a choice"), a()("#chooselikes-text").html("Award bonus likes");
                        let t = "";
                        for (let o = 0; o < e.choices.length; o++) {
                            const i = e.likes.indexOf(e.choices[o]) >= 0,
                                a = i ? "fa-check-square-o" : "fa-square-o";
                            t += `<button type="button" data-num="${o}" class="pure-input-1 fibbage-like-button button-large pure-button button-fibbage ${i?"button-fibbage-liked":"button-fibbage-like"}"><div class="like-text">${c.c.safeText(e.choices[o])}</div><div class="like-checkbox"><i class="far ${a} fa-lg"></i></div></button>`
                        }
                        a()("#fibbage-chooselikes").html(t), this.showScreen(".state-chooselikes")
                    }
                },
                updateAudienceLikes() {
                    const e = this.model.get("room");
                    a()("#audience-chooselikes-choice").html(`You chose: ${""===this.currentChoice?"NO ANSWER!":this.currentChoice}`), a()("#audience-chooselikes-text").html("Award a like");
                    const t = "" !== this.currentLike;
                    let o = "";
                    for (let i = 0; i < e.choices.length; i++) {
                        let a = t;
                        a && (a = e.choices[i] !== this.currentLike);
                        const n = e.choices[i] === this.currentLike ? "button-fibbage-liked" : "button-fibbage-like",
                            s = e.choices[i] === this.currentLike ? "fa-check-square" : "fa-square";
                        o += `<button type="button" data-num="${i}" class="pure-input-1 fibbage-audience-like-button button-large pure-button button-fibbage ${n}" ${a?"disabled":""}><div class="like-text">${c.c.safeText(e.choices[i])}</div><div class="like-checkbox"><i class="far ${s} fa-lg"></i></div></button>`
                    }
                    a()("#fibbage-audience-chooselikes").html(o), this.showScreen(".state-audience-chooselikes")
                },
                updateAudience() {
                    const e = this.model.get("room"),
                        t = e ? e.state : "";
                    if ("Gameplay_ChooseLie" === t) {
                        this.currentChoice = "", this.currentLike = "", a()("#audience-chooselie-text").html(e.question);
                        let t = "";
                        for (let o = 0; o < e.choices.length; o++) t += `<button type="button" data-num="${o}" class="pure-input-1 fibbage-audience-lie-button button-large pure-button button-fibbage">${c.c.safeText(e.choices[o])}</button>`;
                        a()("#fibbage-audience-chooselie").html(t), this.showScreen(".state-audience-chooselie")
                    } else if ("Gameplay_ChooseLike" === t) this.updateAudienceLikes();
                    else if ("Lobby_PostGame" === t) this.numCorrect = 0, this.currentFact = "", this.currentQuip = "";
                    else if ("Gameplay_Logo" === t) this.showScreen(".state-audience-join"), this.currentQuip = "";
                    else if ("Gameplay_CategorySelection" === t) a()("#notchoosing").html(`${c.c.safeText(e.choosingPlayerName)} is picking a category`), this.showScreen(".state-notchoosing");
                    else if ("Gameplay_Round" === t) a()(".round-text").html(`ROUND ${e.round}`), this.showScreen(".state-round");
                    else if ("Gameplay_EnterLie" === t) this.showScreen(".state-audience-join");
                    else if ("Gameplay_LyingDone" === t) this.showScreen(".state-audience-join");
                    else if ("Gameplay_EndGame" === t) {
                        if (a()("#audience-postgame-score").html(`<span>${this.numCorrect}/7</span>`), 7 === this.numCorrect) {
                            if (a()("#audience-postgame-score-quip").html("You won a free bonus fact!"), "" === this.currentFact) {
                                const e = this.bonusFacts;
                                this.currentFact = e[Math.floor(Math.random() * e.length)]
                            }
                            a()("#audience-bonus-fact").html(this.currentFact), a()("#audience-bonus-quip").html("Play again to win more"), a()(".audience-bonus-fact").show(), a()(".audience-bonus-quip").show()
                        } else {
                            const e = this[`reaction${this.numCorrect.toString()}7`];
                            this.currentQuip = e[Math.floor(Math.random() * e.length)], a()("#audience-postgame-score-quip").html(this.currentQuip), a()("#audience-bonus-fact").html(""), a()("#audience-bonus-quip").html(""), a()(".audience-bonus-fact").hide(), a()(".audience-bonus-quip").hide()
                        }
                        this.showScreen(".state-audience-postgame")
                    } else if ("Gameplay_EndShortie" === t) {
                        if (a()("#audience-score").html(`${this.numCorrect}/${e.questionNumber}`), "" === this.currentQuip) {
                            const t = this[`reaction${this.numCorrect.toString()}${e.questionNumber.toString()}`];
                            this.currentQuip = t[Math.floor(Math.random() * t.length)]
                        }
                        a()("#audience-score-quip").html(this.currentQuip), this.showScreen(".state-audience-score")
                    } else this.showScreen(".state-audience-join")
                },
                hideLobbyButtons() {
                    a()("#fibbage-startgame").hide(), a()("#fibbage-stopcountdown").hide(), a()(".fibbage-endbuttons").hide()
                },
                startGame: () => (l.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0
                }), !1),
                stopCountdown: () => (l.app.client.send("SendMessageToRoomOwner", {
                    cancelStartGame: !0
                }), !1),
                chooseCategory(e) {
                    const t = a()(e.target).data("num");
                    return l.app.client.send("SendMessageToRoomOwner", {
                        chosenCategory: t
                    }), !1
                },
                chooseBloop(e) {
                    const t = a()(e.target).data("id");
                    return l.app.client.send("SendMessageToRoomOwner", {
                        bloop: t
                    }), !1
                },
                lieForMe: () => (a()("#fibbage-enterlie-field").hide(), a()("#fibbage-suggestions").show(), !1),
                submitLie() {
                    let e = this.sanitize(a()("#fibbage-lie-input").val()).toUpperCase();
                    if (e = e.replace(/\s\s+/g, " ").trim(), 0 === e.length) {
                        const e = a()("#fibbage-submit-alert");
                        return a()("#fibbage-submit-alert").html("You can't enter nothing! Use a suggestion if you need help!"), e.removeClass("alert-info"), e.addClass("alert-danger"), e.show(), !1
                    }
                    return l.app.client.send("SendMessageToRoomOwner", {
                        lieEntered: e,
                        usedSuggestion: !1
                    }), !1
                },
                chooseSuggestion(e) {
                    const t = a()(e.target).data("num"),
                        o = this.model.get("player").suggestions[t],
                        i = this.sanitize(o).toUpperCase();
                    return l.app.client.send("SendMessageToRoomOwner", {
                        lieEntered: i,
                        usedSuggestion: !0
                    }), !1
                },
                chooseLie(e) {
                    const t = a()(e.target).data("num"),
                        o = this.model.get("player").choices[t];
                    return l.app.client.send("SendMessageToRoomOwner", {
                        choice: o
                    }), !1
                },
                chooseDefib(e) {
                    const t = a()(e.target).data("param");
                    return l.app.client.send("SendMessageToRoomOwner", {
                        choice: t
                    }), !1
                },
                toggleLike(e) {
                    const t = a()(e.currentTarget).data("num"),
                        o = this.model.get("player") || {},
                        i = o.likes || [],
                        n = o.choices || [],
                        s = i.indexOf(n[t]) >= 0;
                    if (!s) {
                        a()(e.currentTarget).removeClass(s ? "button-fibbage-liked" : "button-fibbage-like"), a()(e.currentTarget).addClass(s ? "button-fibbage-like" : "button-fibbage-liked"), a()(e.currentTarget).find(".like-checkbox").html(`<i class="far ${s?"fa-square":"fa-check-square"} fa-lg"></i>`);
                        const o = n[t];
                        l.app.client.send("SendMessageToRoomOwner", {
                            like: o
                        })
                    }
                    return !1
                },
                chooseLieAudience(e) {
                    const t = a()(e.target).data("num"),
                        o = this.model.get("room"),
                        i = o.choices[t];
                    return this.currentChoice = o.choices[t], i === o.answer && (this.numCorrect += 1), this.updateAudienceLikes(), !1
                },
                chooseLikeAudience(e) {
                    const t = a()(e.currentTarget).data("num");
                    return this.currentLike = this.model.get("room").choices[t].toUpperCase(), l.app.client.sessionSend("vote", "fibbage2-likes", {
                        type: "vote",
                        vote: this.currentLike
                    }), this.updateAudienceLikes(), !1
                },
                newGameSamePlayers: () => (l.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_Continue"
                }), !1),
                newGameNewPlayers: () => (l.app.client.send("SendMessageToRoomOwner", {
                    startGame: !0,
                    decision: "PostGame_NewGame"
                }), !1),
                sanitize: e => e ? e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,]/gi, "").replace(/'/g, "’").trim() : e,
                onResize() {
                    const e = a()(window).width(),
                        t = a()(window).height() - a()("#player").outerHeight(!0);
                    a()(".fibbage-page").css("height", t), a()(".fibbage-page").attr("height", t), a()(".fibbage-page").css("width", e), a()(".fibbage-page").attr("width", e)
                }
            })
        },
        27091: e => {
            "use strict";
            e.exports = function(e, t) {
                return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), t.hash && (e += t.hash), t.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(e) ? '"'.concat(e, '"') : e) : e
            }
        },
        8268: (e, t, o) => {
            "use strict";
            e.exports = o.p + "games/fibbage2/bf081de482e62aafa72a.png"
        },
        8604: (e, t, o) => {
            "use strict";
            e.exports = o.p + "games/fibbage2/a1683e035efd61cb19ac.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/1791.aa3b544b4bce45c0143c.js.map