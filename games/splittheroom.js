(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/splittheroom"], {
        14433: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                MainView: () => h
            });
            var i = r(19755),
                c = r.n(i),
                a = r(24340);
            const o = r(97079).E.extend({
                onChildviewChildviewButtonLike(e) {
                    const t = e.get("index");
                    return this.triggerMethod("client:message", {
                        action: "like",
                        choice: t
                    }), !1
                }
            });

            function n(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach((function(t) {
                        l(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            const h = a.v.extend({
                sessionModulePrefix: "SplitTheRoom",
                parseBlob(e) {
                    if ("EnterSingleText" === e.state && (e.placeholder || (e.placeholder = "Fill in the blank here..."), Object.prototype.hasOwnProperty.call(e, "counter") || (e.counter = !0), e.maxLength || (e.maxLength = 45)), "MakeSingleChoice" === e.state) {
                        if (e.scenario) {
                            e.textDescriptions = e.textDescriptions || [];
                            const t = c()("<div />").html(e.scenario.html).text() || "",
                                r = btoa(t.replace(/\W/g, ""));
                            e.textDescriptions.push({
                                id: r,
                                category: "Reveal",
                                text: t
                            })
                        }
                        e.choices && (e.choices = e.choices.map((e => "thumbsUp" === e.className ? s(s({}, e), {}, {
                            label: "thumbs up"
                        }) : "thumbsDown" === e.className ? s(s({}, e), {}, {
                            label: "thumbs down"
                        }) : e)))
                    }
                    return e.artifact && (e.artifact.artifactId !== this.artifactId && (this.shouldHideArtifact = !1, this.artifactId = e.artifact.artifactId), "Lobby" !== e.state && "Logo" !== e.state && (this.shouldHideArtifact = !0), this.shouldHideArtifact && delete e.artifact), e.censorablePlayers && delete e.censorablePlayers, e
                },
                getGameLayout(e) {
                    switch (e) {
                        case "MakeSingleChoice":
                            return this.setLayout(o);
                        default:
                            return -1
                    }
                }
            })
        }
    }
]);
//# sourceMappingURL=sourcemaps/5863.64a8c2bdcbfe25aa47aa.js.map