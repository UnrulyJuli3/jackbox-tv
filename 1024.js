(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [1024], {
        67363: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                MainView: () => f
            });
            var n = i(24340),
                o = i(13469),
                s = i.n(o),
                a = i(63574),
                l = i.n(a),
                c = i(72316),
                d = i.n(c),
                r = i(10972);
            const h = l().View.extend({
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
                    childView: h,
                    collection: new g
                }),
                m = l().View.extend({
                    model: new(d().Model)({}),
                    regions: {
                        logContainer: "#logContainer"
                    },
                    template: s().template('<div class="console"> <div class="title">ecast.js Logs</div> <div id="logContainer" class="logContainer"></div> </div>'),
                    initialize() {
                        this.onNotificationWithContext = this.onNotification.bind(this), r.app.client.on("client:notificationReceived", this.onNotificationWithContext), this.logsComponent = new C
                    },
                    onNotification(e) {
                        this.logsComponent.collection.add(e)
                    },
                    onBeforeDestroy() {
                        r.app.client.off("client:notificationReceived", this.onNotificationWithContext)
                    },
                    onRender() {
                        this.showChildView("logContainer", this.logsComponent)
                    }
                }),
                f = n.v.extend({
                    appTag: "ecast-test-client",
                    getGameLayout(e) {
                        switch (e) {
                            case "Console":
                                return this.setLayout(m);
                            default:
                                return -1
                        }
                    }
                })
        }
    }
]);
//# sourceMappingURL=1024.ac79cbb44f7badcb18ce.js.map