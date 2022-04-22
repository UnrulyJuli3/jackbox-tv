(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/slingshoot"], {
        41919: (t, e, a) => {
            "use strict";
            a.r(e), a.d(e, {
                MainView: () => y
            });
            var s = a(13469),
                r = a.n(s),
                i = a(10972),
                o = a(24340),
                n = a(59965),
                l = a(9659),
                c = a(52650),
                d = a(79023);
            const p = l.S.extend({
                    defaults: r().extend({}, c.W.prototype.model.defaults, {
                        gameCanContinue: !1
                    })
                }),
                u = c.W.extend({
                    model: new p({}),
                    template: r().template(`${d.Z}<div class="mech"></div>`),
                    update() {
                        this.strings = this.model.get("strings"), this.model.get("gameCanContinue") ? (this.strings.button_sameplayers = "Start Next Gauntlet", this.strings.button_newplayers = "Quit") : (this.strings.button_sameplayers = "Same Players", this.strings.button_newplayers = "New Players"), c.W.prototype.update.apply(this)
                    }
                }),
                h = n.p.extend({
                    bindings: r().extend(n.p.prototype.bindings, {
                        ".playerName": {
                            attributes: [{
                                name: "style",
                                observe: "characterColor",
                                onGet(t) {
                                    let e = "";
                                    return t && (e += `background-color:${t}76`), e
                                }
                            }]
                        }
                    })
                }),
                y = o.v.extend({
                    sessionModulePrefix: "SlingShoot",
                    lacksAudience: !0,
                    initialize(t) {
                        this.playerTopBar = new h({
                            isPlayer: i.app.client.isRole("player")
                        }), o.v.prototype.initialize.apply(this, [t])
                    },
                    getGameLayout(t) {
                        switch (t) {
                            case "Lobby":
                                return this.setLayout(u);
                            default:
                                return -1
                        }
                    },
                    parseBlob(t) {
                        return t.playerInfo && (t.playerInfo.characterColor = t.characterColor ? t.characterColor : "#000000"), t.artifact && (t.artifact.artifactId !== this.artifactId && (this.shouldHideArtifact = !1, this.artifactId = t.artifact.artifactId), "Lobby" !== t.state && "Logo" !== t.state && (this.shouldHideArtifact = !0), this.shouldHideArtifact && delete t.artifact), t.censorablePlayers && delete t.censorablePlayers, t
                    }
                })
        }
    }
]);
//# sourceMappingURL=sourcemaps/9618.6de4a0f25f5cafdb1c87.js.map