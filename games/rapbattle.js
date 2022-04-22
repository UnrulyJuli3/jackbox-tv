(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/rapbattle"], {
        94059: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                MainView: () => n
            });
            var a = s(24340),
                i = s(10972),
                o = s(13469),
                c = s.n(o),
                l = s(52650),
                r = s(79023);
            const p = l.W.extend({
                    template: c().template(`${r.Z}<div class="mech"></div>`)
                }),
                n = a.v.extend({
                    sessionModulePrefix: "RapBattle",
                    parseBlob(e) {
                        if (e.classes = e.classes || [], "EnterSingleText" === e.state) {
                            let t = (e.prompt.html || "").toUpperCase().split("<BR>");
                            t = t.map((e => -1 === e.indexOf("<DIV>") ? `<DIV>${e}</DIV>` : e)), e.prompt.html = t.join(""), e.actions = [], e.actions.push({
                                text: "Submit",
                                action: "submit"
                            }), e.canRhymeForMe && e.actions.push({
                                text: "Write For Me",
                                key: "help"
                            }), e.suggestions && e.suggestions.length > 0 && e.actions.push({
                                text: "Suggestions",
                                action: "suggestion"
                            })
                        } else "MakeSingleChoice" === e.state && (e.choiceType && "PlayerVote" === e.choiceType && e.classes.push("playerVote"), "repeating" === e.type ? (e.classes.push("actionChoice"), e.maxVotes = i.app.client.isRole("player") ? 200 : 100) : e.classes.includes("actionChoice") && (e.type = "repeating", e.maxVotes = i.app.client.isRole("player") ? 200 : 100), "Tap if you think this rhyme is DOPE" === e.prompt.text && (e.type = "repeating", e.maxVotes = i.app.client.isRole("player") ? 200 : 100));
                        return e.artifact && (e.artifact.artifactId !== this.artifactId && (this.shouldHideArtifact = !1, this.artifactId = e.artifact.artifactId), "Lobby" !== e.state && "Logo" !== e.state && (this.shouldHideArtifact = !0), this.shouldHideArtifact && delete e.artifact), e.censorablePlayers && delete e.censorablePlayers, e
                    },
                    formatSessionMessage: e => e,
                    getGameLayout(e) {
                        switch (e) {
                            case "Lobby":
                                return this.setLayout(p);
                            default:
                                return -1
                        }
                    }
                })
        }
    }
]);
//# sourceMappingURL=sourcemaps/6244.d0d8480c801e1082b7bd.js.map