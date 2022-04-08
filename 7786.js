(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [7786], {
        43141: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                MainView: () => l
            });
            var o = a(24340),
                s = a(89446),
                r = a(10972);
            const l = o.v.extend({
                sessionModulePrefix: "quiplash2-international",
                parseBlob(e) {
                    if ("Lobby" !== e.state && "Lobby" === this.prevState) {
                        const e = "Lobby",
                            t = "gameStarted",
                            a = this.hasUGC ? "quiplash2-international-ugc" : "quiplash2-international";
                        r.app.analytics.trackEvent({
                            category: e,
                            action: t,
                            label: a
                        })
                    }
                    if (e.playerInfo = e.playerInfo || {}, e.playerInfo.username = e.playerName, e.playerColor) e.playerInfo.topBarColor = e.playerColor, e.playerInfo.bgColor = s.c.adjustColor(e.playerColor, .52);
                    else {
                        const t = "#E4BC65",
                            a = s.c.adjustColor("#E4BC65", .52);
                        e.playerInfo.topBarColor = t, e.playerInfo.bgColor = a
                    }
                    return e.isAudience && "EnterSingleText" === e.state && (e.repeating = !0, "fr" === e.locale && (e.strings = {
                        ERROR_NOTHING_ENTERED: "VOUS NE POUVEZ RIEN TAPER"
                    }), "it" === e.locale && (e.strings = {
                        ERROR_NOTHING_ENTERED: "DEVI PER FORZA INSERIRE QUALCOSA"
                    }), "de" === e.locale && (e.strings = {
                        ERROR_NOTHING_ENTERED: "DU KANNST NICHT NICHTS EINGEBEN"
                    }), "es" === e.locale && (e.strings = {
                        ERROR_NOTHING_ENTERED: "NO PUEDES DEJARLO EN BLANCO"
                    })), "Lobby" === e.state && e.lobbyState && (this.hasUGC = !!e.activeContentId), this.prevState = e.state, e
                },
                formatSessionMessage(e) {
                    if ("safetyQuip" === e.action) {
                        e.safetyQuip = !0;
                        const t = this.model.get("question") || {};
                        e.questionId = t.id
                    }
                    return e
                }
            })
        }
    }
]);
//# sourceMappingURL=7786.e4905a9fb46c5e6d5f66.js.map