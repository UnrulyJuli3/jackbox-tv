(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/ecast-test-client"], {
        67363: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                MainView: () => v
            });
            var n = i(24340),
                o = i(13469),
                s = i.n(o),
                a = i(63574),
                l = i.n(a),
                c = i(72316),
                d = i.n(c),
                h = i(10972);
            const r = l().View.extend({
                    className: "log",
                    template: s().template('<span class="time"></span> <span class="message"></span>'),
                    bindings: {
                        ".message": {
                            observe: "result",
                            onGet: e => JSON.stringify(e)
                        },
                        ".time": {
                            observe: "result",
                            onGet: () => (new Date).toUTCString()
                        }
                    },
                    onAttach() {
                        this.stickit()
                    }
                }),
                p = d().Model.extend({
                    idAttribute: "key"
                }),
                g = d().Collection.extend({
                    model: p
                }),
                C = l().CollectionView.extend({
                    className: "logs",
                    childView: r,
                    collection: new g
                }),
                m = l().View.extend({
                    model: new(d().Model)({}),
                    regions: {
                        logContainer: "#logContainer"
                    },
                    template: s().template('<div class="console"> <div class="title">ecast.js Logs</div> <div id="logContainer" class="logContainer"></div> </div>'),
                    initialize() {
                        this.onNotificationWithContext = this.onNotification.bind(this), h.app.client.on("client:notificationReceived", this.onNotificationWithContext), this.logsComponent = new C
                    },
                    onNotification(e) {
                        this.logsComponent.collection.add(e)
                    },
                    onBeforeDestroy() {
                        h.app.client.off("client:notificationReceived", this.onNotificationWithContext)
                    },
                    onRender() {
                        this.showChildView("logContainer", this.logsComponent)
                    }
                }),
                v = n.v.extend({
                    appTag: "ecast-test-client",
                    getGameLayout(e) {
                        return "Console" === e ? this.setLayout(m) : -1
                    }
                })
        }
    }
]);
//# sourceMappingURL=sourcemaps/1024.a169beffac8a59e0659f.js.map