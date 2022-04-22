(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/house-of-jackbox"], {
        79004: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                MainView: () => i
            });
            var a = n(24340),
                s = n(10972);
            const i = a.v.extend({
                formatSessionMessage(e) {
                    if (s.app.client.isRole("audience") && "write" === e.action) {
                        const t = {
                            author: s.app.storage.get("name") || "unknown",
                            text: e.entry
                        };
                        e.entry = JSON.stringify(t)
                    }
                    return e
                }
            })
        }
    }
]);
//# sourceMappingURL=sourcemaps/8081.a65401f58ac05e53ab95.js.map