(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/monstermingle"], {
        54750: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                MainView: () => _
            });
            var s = o(19755),
                a = o.n(s),
                i = o(13469),
                l = o.n(i),
                n = o(72316),
                r = o.n(n),
                c = o(24340),
                d = o(10972),
                h = o(63574),
                m = o.n(h),
                u = o(86455),
                p = o.n(u),
                b = o(24475),
                g = o(19690),
                y = o(49273),
                v = o(89446),
                C = o(40543),
                f = o(75717);
            const w = m().View.extend({
                    template: l().template('<div class="playerIcon chatAvatars unread pull-left"><div class="blockedIcon"></div></div> <button class="dateButton btn pull-right playerColor">DATE</button> <div class="pull-right playerColor rightArrow">></div> <div class="playerName playerColor">name</div> <div class="lastMessage">lastMessage</div> '),
                    className: "chatSummaryDetail jbg-multiplier-clickable",
                    events: {
                        "click .dateButton": "clickDate",
                        click: "clickSummary"
                    },
                    attributes: {
                        role: "button",
                        tabindex: 0
                    },
                    bindings: {
                        ":el": {
                            attributes: [{
                                name: "aria-label",
                                observe: ["unread", "contact"],
                                onGet(e) {
                                    const t = e[0],
                                        o = e[1];
                                    let s = "";
                                    return s += `${o.name}`, "Human" !== o.monster.name && (s += ` the ${o.monster.name} `), t && (s += ` has ${t} unread`), s
                                }
                            }]
                        },
                        ".playerName": {
                            observe: "contact",
                            onGet: e => e.name
                        },
                        ".playerColor": {
                            attributes: [{
                                name: "style",
                                observe: "contact",
                                onGet: e => `color: ${e.color.medium};`
                            }]
                        },
                        ".playerIcon": {
                            attributes: [{
                                name: "class",
                                observe: "contact",
                                onGet: e => e.monster.icon
                            }, {
                                name: "class",
                                observe: "unread",
                                onGet: e => (parseInt(e, 10) > 9 && (e = 9), `unread-${e}`)
                            }, {
                                name: "style",
                                observe: "history",
                                onGet(e) {
                                    let t = "";
                                    const o = this.model.attributes.contact.color;
                                    return t += `background-color:${o.dark};`, e.length > 0 ? (t += `-webkit-border-image:${f.replace("FILL_COLOR","%23000000")} 3 3;`, t += `border-image:${f.replace("FILL_COLOR",o.light.replace("#","%23"))} 3 3;`) : (t += `-webkit-border-image:${f.replace("FILL_COLOR","%23000000")} 3 3;`, t += `border-image:${f.replace("FILL_COLOR","%23000000")} 3 3;`), t
                                }
                            }]
                        },
                        ".blockedIcon": {
                            attributes: [{
                                name: "class",
                                observe: "contact",
                                onGet: e => e.blocked ? "blocked" : ""
                            }]
                        },
                        ".lastMessage": {
                            observe: "history",
                            onGet: e => e.length > 0 ? v.c.htmlUnescape(e[e.length - 1].text) : ""
                        },
                        ".dateButton": {
                            attributes: [{
                                name: "class",
                                observe: "mode",
                                onGet: e => "date" !== e ? "hidden" : ""
                            }, {
                                name: "disabled",
                                observe: "disabled"
                            }]
                        }
                    },
                    initialize() {
                        this.listenTo(this.model, "change", this.onChange)
                    },
                    render() {
                        this.model.set("mode", this.getOption("mode"));
                        const e = {
                            contact: this.model.attributes.contact || {},
                            history: this.model.attributes.history || []
                        };
                        this.$el.html(this.template(e)), this.stickit()
                    },
                    clickAvatar() {
                        return this.trigger("chat:avatar", this.model), !1
                    },
                    clickSummary() {
                        return this.trigger("chat:detail", this.model), !1
                    },
                    clickDate() {
                        return this.trigger("chat:date", this.model), !1
                    },
                    onChange() {}
                }),
                k = m().CollectionView.extend({
                    tagName: "div",
                    className: "summaryCollection container",
                    childView: w,
                    initialize() {
                        this.listenTo(this.collection, "sync", this.render)
                    },
                    childViewOptions(e, t) {
                        return {
                            mode: this.getOption("mode"),
                            choice: t
                        }
                    }
                }),
                I = m().View.extend({
                    className: "container chatSummaryTop",
                    template: l().template('<div class="row"> <div class="col-xs-2"> <div class="playerIcon playerColorBackground chatAvatars"></div> </div> <div class="col-xs-8 text-center"> <h4 class="chatMode">chatMode</h4> <h4><small class="chatDescription">chatDescription</small></h4> </div> <div class="col-xs-2"> <button class="playerInfo playerColorBackground btn pull-right">i</button> </div> </div> '),
                    events: {
                        "click .chatBack": "back",
                        "click .playerInfo": "info",
                        "click .playerIcon": "info"
                    },
                    bindings: {
                        ".playerColorBackground": {
                            attributes: [{
                                name: "style",
                                observe: "player",
                                onGet: e => e && e.color ? `background-color: ${e.color.dark};` : ""
                            }]
                        },
                        ".chatMode": "mode",
                        ".chatDescription": "description",
                        ".playerIcon": {
                            attributes: [{
                                name: "class",
                                observe: "player",
                                onGet: e => e ? e.monster.icon : ""
                            }]
                        },
                        ".playerClass": {
                            observe: "player",
                            onGet: e => e.monster.name,
                            attributes: [{
                                name: "style",
                                observe: "player",
                                onGet: e => `color: ${e.color.medium};`
                            }]
                        }
                    },
                    initialize() {
                        this.listenTo(this.model, "change", this.update)
                    },
                    update() {},
                    onRender() {
                        this.$el.html(this.template), this.stickit()
                    },
                    back() {
                        this.trigger("chat:back", this.model)
                    },
                    info() {
                        this.trigger("chat:info", this.model)
                    }
                }),
                P = m().View.extend({
                    template: l().template('<div class="senderIcon chatAvatars"></div> <div class="chatMessageText"> <div class="senderNameSpace"><span class="senderName">name</span></div> <div class="chatBubble"> <span class="text">text</span> </div> <div class="chatMessageDetail"></div> </div>'),
                    className: "chatMessage",
                    events: {
                        "click .senderIcon": "clickAvatar",
                        click: "clickSummary"
                    },
                    bindings: {
                        ":el": {
                            classes: {
                                oddGroup: "oddGroup",
                                chatPlayer: "isPlayer"
                            },
                            attributes: [{
                                name: "style",
                                observe: "backgroundColor",
                                onGet: e => e ? `background-color:${e}` : ""
                            }]
                        },
                        ".text": {
                            observe: "text",
                            onGet: e => v.c.htmlUnescape(e)
                        },
                        ".chatMessageDetail": "detail",
                        ".senderNameSpace": {
                            observe: "showName",
                            visible: e => !0 === e
                        },
                        ".senderName": {
                            observe: "sender",
                            updateView: !0,
                            onGet: e => e ? e.name : null
                        },
                        ".chatBubble": {
                            attributes: [{
                                name: "style",
                                observe: "color",
                                onGet: e => e ? `background-color: ${e};border-right-color:${e};` : null
                            }]
                        },
                        ".playerName": {
                            observe: "sender",
                            onGet: e => e.name
                        },
                        ".senderIcon": {
                            attributes: [{
                                name: "class",
                                observe: "sender",
                                onGet: e => e && e.monster ? e.monster.icon : ""
                            }, {
                                name: "style",
                                observe: "sender",
                                onGet(e) {
                                    if (!e) return null;
                                    let t = "";
                                    return t += `background-color:${e.color.dark};`, t
                                }
                            }]
                        },
                        ".oddGroup": {}
                    },
                    render() {
                        this.$el.html(this.template()), this.stickit()
                    },
                    clickAvatar() {
                        return this.trigger("chat:avatar", this.model), !1
                    },
                    clickSummary() {
                        return this.trigger("chat:detail", this.model), !1
                    }
                }),
                D = m().View.extend({
                    className: "hrMessage",
                    template: l().template("<div class='chatHR'><div class='text'></div></div>"),
                    bindings: {
                        ".text": "text",
                        ":el": {
                            attributes: [{
                                observe: "backgroundColor",
                                name: "style",
                                onGet: e => e ? `background-color:${e}` : ""
                            }]
                        },
                        ".chatHR": {
                            attributes: [{
                                observe: "foregroundColor",
                                name: "style",
                                onGet: e => e ? `color:${e};background-color:black;` : ""
                            }]
                        }
                    },
                    onRender() {
                        this.$el.html(this.template()), this.stickit()
                    }
                }),
                $ = m().CollectionView.extend({
                    tagName: "div",
                    className: "messageCollection",
                    childView: e => e.attributes.type && "hr" === e.attributes.type ? D : P,
                    initialize() {
                        this.listenTo(this.collection, "sync", this.render)
                    },
                    childViewOptions() {
                        return {
                            showPlayerName: this.getOption("showPlayerName"),
                            contacts: this.getOption("contacts"),
                            player: this.getOption("player")
                        }
                    }
                }),
                G = m().View.extend({
                    className: "container chatDetailTop",
                    template: l().template('<div class="row"> <div class="col-xs-2"> <button class="chatBack playerColorBackground btn pull-left unread">Chat</button> </div> <div class="col-xs-8 text-center"> <div class="playerName">name</div> <div><small class="playerClass">class</small></div> </div> <div class="col-xs-2"> <button class="playerInfo playerColorBackground btn pull-right">i</button> </div> </div> '),
                    events: {
                        "click .chatBack": "back",
                        "click .playerInfo": "info"
                    },
                    bindings: {
                        ".playerColorBackground": {
                            attributes: [{
                                name: "style",
                                observe: "contact",
                                onGet: e => e && e.color ? `background-color: ${e.color.medium};` : ""
                            }]
                        },
                        ":el": {
                            attributes: [{
                                name: "style",
                                observe: "contact",
                                onGet: e => `background-color: ${e.color.dark};\n                            border-image: ${f.replace("FILL_COLOR",e.color.dark.replace("#","%23"))} 3 3;`
                            }]
                        },
                        ".playerName": {
                            observe: "contact",
                            onGet: e => e.name,
                            attributes: [{
                                name: "class",
                                observe: "className"
                            }]
                        },
                        ".playerIcon": {
                            attributes: [{
                                name: "class",
                                observe: "contact",
                                onGet: e => e.monster.icon
                            }, {
                                name: "class",
                                observe: "unread",
                                onGet: e => (parseInt(e, 10) > 9 && (e = 9), `unread-${e}`)
                            }, {
                                name: "style",
                                observe: "contact",
                                onGet: e => `background-color:${e.color.dark};`
                            }]
                        },
                        ".playerClass": {
                            observe: "contact",
                            onGet: e => e.monster.name,
                            attributes: [{
                                name: "style",
                                observe: "contact",
                                onGet: e => `color: ${e.color.medium};`
                            }]
                        },
                        ".chatBack": {
                            attributes: [{
                                name: "class",
                                observe: "unread",
                                onGet: e => (parseInt(e, 10) > 9 && (e = 9), `unread-${e}`)
                            }]
                        }
                    },
                    initialize() {
                        this.listenTo(this.model, "change", this.update)
                    },
                    update() {},
                    onRender() {
                        this.$el.html(this.template), this.stickit()
                    },
                    back() {
                        this.trigger("chat:back", this.model)
                    },
                    info() {
                        this.trigger("chat:info", this.model)
                    }
                }),
                L = m().View.extend({
                    className: "monsterProfile",
                    events: {
                        "click .blockButton": "blockPlayer",
                        "click .closeButton": "closeProfile",
                        "click .startChattingButton": "closeProfile"
                    },
                    bindings: {
                        ".titleBar": {
                            attributes: [{
                                name: "style",
                                observe: "color",
                                onGet: e => `background-color: ${e.dark};border-image:${f.replace("FILL_COLOR",e.dark.replace("#","%23"))} 3 3;`
                            }]
                        },
                        ".playerName": "name",
                        ".playerInDisguise": "inDisguise",
                        ".blockedMessage": {
                            observe: "blocked",
                            onGet(e) {
                                return !0 === e ? `You are not receiving messages from ${this.model.attributes.name}` : ""
                            }
                        },
                        ".monsterClassIntro": {
                            observe: ["self", "monster"],
                            onGet(e) {
                                let t = "a";
                                return -1 !== "aeiouAEIOU".indexOf(e[1].name[0]) && (t = "an"), !0 === e[0] ? `You are ${t}` : `This player is ${t}`
                            }
                        },
                        ".monsterClassName": {
                            observe: "monster",
                            onGet: e => e ? e.name : "(????)"
                        },
                        ".monsterPower": {
                            attributes: [{
                                name: "style",
                                observe: "color",
                                onGet: e => `background-color: ${e.dark};border-image:${f.replace("FILL_COLOR",e.dark.replace("#","%23"))} 3 3;`
                            }]
                        },
                        ".monsterPowerIntro": {
                            attributes: [{
                                name: "style",
                                observe: "color",
                                onGet: e => `color: ${e.medium};`
                            }]
                        },
                        ".monsterPowerDescription": {
                            updateMethod: "html",
                            observe: "monster",
                            onGet: e => e.description
                        },
                        ".monsterIcon": {
                            attributes: [{
                                name: "class",
                                observe: "monster",
                                onGet: e => e.icon
                            }, {
                                name: "style",
                                observe: "color",
                                onGet: e => `background-color:${e.dark};`
                            }]
                        },
                        ".blockedIcon": {
                            attributes: [{
                                name: "class",
                                observe: "blocked",
                                onGet: e => !0 === e ? "blocked" : ""
                            }]
                        },
                        ".blockButton": {
                            observe: "blocked",
                            onGet: e => !0 === e ? "Unblock" : "Block",
                            attributes: [{
                                name: "style",
                                observe: "self",
                                onGet: e => !0 === e ? "display:none;" : ""
                            }, {
                                name: "class",
                                observe: "playerName",
                                onGet: e => "AUDIENCE" === e ? "hidden" : ""
                            }]
                        },
                        ".startChattingButton": {
                            attributes: [{
                                name: "class",
                                observe: "startChatting",
                                onGet: e => e ? "visible" : ""
                            }]
                        }
                    },
                    initialize() {
                        this.template = l().template('<div class="titleBar"> <div class="playerName">playername</div> <div class="playerInDisguise">(in disguise)</div> </div> <div class="profileContent"> <div class="closeButton"></div> <div class="blockedMessage">You are not receiving messages from Kimberly</div> <div class="monsterIcon chatAvatars"><div class="blockedIcon"></div></div> <div class="monsterClass"><span class="monsterClassIntro">monsterClassIntro</span><br><span class="monsterClassName">monsterClassName</span></div> <div class="monsterPower"> <span class="monsterPowerIntro">Powers:</span> <p class="monsterPowerDescription">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laureet dolore magna aliquam</p> </div> <button class="startChattingButton btn">Start Chatting!</button> <button class="blockButton btn">Block</button> </div>'), this.render()
                    },
                    render() {
                        return this.$el.html(this.template(this.model.attributes)), this.stickit(), this
                    },
                    closeProfile() {
                        p().close()
                    },
                    blockPlayer() {
                        this.trigger("profile:block", this.model)
                    }
                }),
                T = L.extend({
                    className: "monsterProfile",
                    events: {
                        "click .closeButton": "closeProfile",
                        "click .startChattingButton": "closeProfile"
                    },
                    bindings: {
                        ".titleBar": {
                            attributes: [{
                                name: "style",
                                observe: "player",
                                onGet: e => `background-color: ${(e=e.color).dark};border-image:${f.replace("FILL_COLOR",e.dark.replace("#","%23"))} 3 3;`
                            }]
                        },
                        ".playerName": "title",
                        ".monsterPowerDescription": {
                            observe: "html",
                            updateMethod: "html",
                            attributes: [{
                                name: "style",
                                observe: "player",
                                onGet: () => "font-size:26px"
                            }]
                        },
                        ".monsterPower": {
                            attributes: [{
                                name: "style",
                                observe: "player",
                                onGet: e => e ? `background-color: ${(e=e.color).dark};border-image:${f.replace("FILL_COLOR",e.dark.replace("#","%23"))} 3 3;` : ""
                            }]
                        },
                        ".profileContent": {
                            attributes: [{
                                name: "style",
                                observe: "player",
                                onGet: e => e && e.color ? `background-color:${e.color.medium};` : ""
                            }]
                        },
                        ".startChattingButton": {
                            observe: "title",
                            onGet: () => "OK",
                            attributes: [{
                                name: "style",
                                observe: "title",
                                onGet: () => "visibility:visible;"
                            }]
                        },
                        ".playerInDisguise": {
                            visible: () => !1
                        },
                        ".monsterIcon": {
                            visible: () => !1
                        },
                        ".blockedMessage": {
                            visible: () => !1
                        },
                        ".monsterPowerIntro": {
                            visible: () => !1
                        },
                        ".monsterClassIntro": {
                            visible: () => !1
                        },
                        ".monsterClassName": {
                            visible: () => !1
                        },
                        ".blockButton": {
                            visible: () => !1
                        }
                    },
                    render() {
                        return this.$el.html(this.template(this.model.attributes)), this.stickit(), this
                    }
                });
            var x = o(97079);
            const O = x.E.extend({
                className: "AudienceChoice",
                bindings: l().extend(x.E.prototype.bindings, {
                    ".playerTopBar": {
                        observe: "username",
                        visible: !0
                    },
                    ".chosen": {
                        observe: "chosen",
                        updateMethod: "html",
                        onGet: e => e || null
                    },
                    ".choices": {
                        observe: "chosen",
                        visible: e => !e
                    },
                    ":el": {
                        attributes: [{
                            name: "style",
                            observe: "player",
                            onGet: e => e && e.color ? `background-color:${e.color.dark}` : null
                        }]
                    }
                }),
                initialize(e) {
                    x.E.prototype.initialize.apply(this, [e]), this.stopListening(this.model)
                },
                update() {
                    this.promptComponent.model.set("html", this.model.attributes.prompt), this.promptComponent.model.set("className", ""), this.choices = this.model.attributes.choices, this.choices && this.choices.length > 0 && "string" == typeof this.choices[0] && (this.choices = l().map(this.model.attributes.choices, (function(e) {
                        return "string" == typeof e && (e = {
                            html: e
                        }), e.censorable = this.blob.canCensor, e.action = e.action || "choose", e
                    }))), this.choicesList.collection.set(this.choices)
                },
                events: {
                    "click .choices button": "buttonClick"
                },
                onChildviewChildviewButtonChoose() {},
                onChildviewChildviewButtonCensor() {},
                onChildviewChildviewButtonSubmit() {},
                buttonClick(e) {
                    const t = a()(e.currentTarget),
                        o = t.data("index");
                    let s = t.data("action");
                    s || (s = "choose"), this.trigger("audience:choice", o), this.model.set("chosen", this.model.attributes.choices[o].text)
                }
            });
            var B = o(64087);

            function N(e, t, o, s, a, i, l) {
                try {
                    var n = e[i](l),
                        r = n.value
                } catch (e) {
                    return void o(e)
                }
                n.done ? t(r) : Promise.resolve(r).then(s, a)
            }

            function S(e) {
                return function() {
                    var t = this,
                        o = arguments;
                    return new Promise((function(s, a) {
                        var i = e.apply(t, o);

                        function l(e) {
                            N(i, s, a, l, n, "next", e)
                        }

                        function n(e) {
                            N(i, s, a, l, n, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            const A = m().View.extend({
                model: new(r().Model)({}),
                template: l().template('<div id="top" class="double-nav-top"></div> <div id="middle" class="double-nav-middle"> <div id="summary" class="double-nav-detail summary"></div> <div id="detail" class="double-nav-detail detail"></div> </div> <div id="bottom" class="double-nav-bottom"></div>'),
                sessionModule: "vote",
                sessionName: " Vote",
                sessionMessage: {
                    type: "vote"
                },
                router: new(m().AppRouter),
                className: () => d.app.client.isRole("audience") ? "double-nav monstermingle chat audience" : "double-nav monstermingle chat",
                regions: {
                    top: "#top",
                    detail: "#detail",
                    summary: "#summary",
                    bottom: "#bottom"
                },
                initialize() {
                    this.pingSound = !1;
                    try {
                        this.pingSound = new Audio(B)
                    } catch (e) {
                        console.error("Error loading sound", e)
                    }
                    this.mode = null, this.summaryTopComponent = new I({
                        model: new(r().Model)
                    }), this.summaryCollection = new(r().Collection), this.summaryList = new k({
                        collection: this.summaryCollection,
                        mode: "default"
                    }), this.bottomComponent = new b.y({
                        model: new(r().Model)
                    }), this.detailIndex = null, this.detailContactId = null, this.chatDetailComponent = new G({
                        model: new(r().Model)
                    }), this.chatDetailCollection = new(r().Collection), this.chatDetailList = new $({
                        collection: this.chatDetailCollection,
                        showPlayerName: d.app.client.isRole("audience")
                    }), this.chatDetailInput = new g.E({
                        preventAutosize: !0,
                        model: new(r().Model)({
                            placeholder: "send a message",
                            inlineSubmit: !0,
                            maxLength: 50
                        })
                    }), this.chatDateButton = new y.r({
                        model: new(r().Model)({
                            text: "date",
                            action: "date"
                        })
                    }), this.chatAudienceChoice = new O({
                        model: new(r().Model)
                    }), this.listenTo(this.model, "change", this.update, this), this.listenTo(d.app.router, "gameRoute", this.route)
                },
                route(e) {
                    0 === e.length || "summary" === e[0] ? this.showChatSummary() : this.showChatDetail(e[0])
                },
                update() {
                    var e = this;
                    return S((function*() {
                        const t = e;
                        if (e.player = e.model.get("player"), e.chat = e.model.get("chat") || {}, e.model.get("chosenDateUserId") && (e.chat.mode = "browse"), e.player && (e.summaryTopComponent.model.set("player", e.player), "chat" === e.chat.mode ? (e.summaryTopComponent.model.set("mode", "TIME TO CHAT"), e.summaryTopComponent.model.set("description", "Click on a player to message them")) : "date" === e.chat.mode ? (e.summaryTopComponent.model.set("mode", "TIME TO CHOOSE"), e.summaryTopComponent.model.set("description", "Who do you want to date?")) : "browse" === e.chat.mode && null !== e.model.get("chosenDateUserId") && (e.summaryTopComponent.model.set("mode", "DATE CHOSEN"), e.summaryTopComponent.model.set("description", "Wait for others to choose"))), e.chat) {
                            let o;
                            if (d.app.client.isRole("player")) {
                                if (o = !1, e.model.changed.alerts && (e.showAlerts(e.model.get("alerts")), C.b.vibrate()), e.oldUnread < e.chat.unread && (C.b.vibrate(), e.playSound()), e.chatDetailComponent.model.set("unread", e.chat.unread), e.oldUnread = e.chat.unread, null !== e.detailContactId) {
                                    const s = l().find(e.chat.conversations, (e => e.contact.id === t.detailContactId));
                                    if (o = !1, s && (e.chatDetailComponent.model.set("contact", s.contact), e.chatDetailInput.model.set("hidden", 0 === e.chat.messagesAvailableToSend), e.fullHistory = l().map(s.history, (t => (t.sender = l().findWhere(e.allContacts, {
                                            id: t.senderId
                                        }), t.isPlayer = e.player && e.player.id === t.senderId, t.color = t.isPlayer ? "white" : t.sender.color.light, t))), e.fullHistory.length > e.chatDetailCollection.length && (o = !0), e.chatDetailCollection.set(e.fullHistory)), o) {
                                        const t = e.getRegion("detail");
                                        t && t.$el.scrollTop(t.$el[0].scrollHeight)
                                    }
                                }
                                e.summaryCollection.set(e.chat.conversations), "chat" === e.chat.mode ? (e.bottomComponent.model.set("text", `You have ${e.chat.messagesAvailableToSend}${1===e.chat.messagesAvailableToSend?" message ":" messages "} left to send`), e.bottomComponent.model.set("background", e.player.color.medium)) : "date" === e.chat.mode ? e.bottomComponent.model.set("text", "Click DATE button on this screen, or within a conversation if still reading.") : e.bottomComponent.model.set("text", ""), e.chat.mode && e.mode !== e.chat.mode && (!e.detailContactId && e.getRegion("summary") && e.getRegion("summary").currentView === e.summaryList ? e.showChatSummary() : e.detailContactId && e.showChatDetail(e.detailContactId)), e.mode = e.chat.mode, e.chat.showProfile && e.showPlayerProfile(e.player, !0)
                            } else if (d.app.client.isRole("audience")) {
                                if (e.model.changed.alerts && e.showAlerts(e.model.get("alerts")), e.summaryTopComponent.model.set("player", e.player), e.summaryTopComponent.model.set("mode", "AUDIENCE"), e.summaryTopComponent.model.set("description", "Vote what to say next"), o = e.chat && e.chat.history.length > e.chatDetailCollection.length, e.chat && e.chat.history) {
                                    e.allContacts = l().union([e.player], e.chat.contacts);
                                    let t = 0;
                                    e.fullHistory = l().map(e.chat.history, (o => (o.sender = l().findWhere(e.allContacts, {
                                        id: o.senderId
                                    }), o.isPlayer = e.player && e.player.id === o.senderId, o.showName = !o.isPlayer, o.color = o.isPlayer ? e.player.color.light : "white", t % 2 == 0 && (o.backgroundColor = `rgba(${v.c.hexToRgb(e.player.color.dark)},0.4)`), "hr" === o.type && (o.foregroundColor = e.player.color.light), o.isPlayer && (t += 1), o))), e.chatDetailCollection.set(e.fullHistory)
                                }
                                if (e.chat && e.chat.contacts && (e.chatDetailList.options.contacts = e.chat.contacts), e.chat && e.player && (e.chatDetailList.options.player = e.player), e.chat && e.chat.choice) {
                                    const t = e.getRegion("bottom");
                                    if (t && t.$el.show(), "date" === e.chat.mode) {
                                        const t = a().extend(!0, {}, e.chat.choice.choices);
                                        e.chatAudienceChoice.model.set("choices", l().map(t, (t => {
                                            const o = l().findWhere(e.chat.contacts, {
                                                id: t.id
                                            });
                                            return o && (t.html = `<div class='senderIcon chatAvatars ${o.monster.icon}' style='background-color:${o.color.dark}'></div><span>${t.text}</span>`), t
                                        })))
                                    } else e.chatAudienceChoice.model.set("choices", e.chat.choice.choices);
                                    e.chatAudienceChoice.model.set("prompt", e.chat.choice.prompt), e.chatAudienceChoice.model.set("player", e.player), e.chatAudienceChoice.update()
                                } else {
                                    const t = e.getRegion("bottom");
                                    t && t.$el.hide()
                                }
                                if (e.player && e.$el.find(".detail").css("background", e.player.color.medium), e.chat && e.chat.mode && e.mode !== e.chat.mode && (e.stopListening(e.chatAudienceChoice), e.stopListening(e.chatDetailList), e.stopListening(e.summaryTopComponent), e.listenTo(e.chatAudienceChoice, "audience:choice", e.submitAudienceVote), e.listenTo(e.chatDetailList, "childview:chat:avatar", e.messageSender), e.listenTo(e.summaryTopComponent, "chat:info", e.infoButton), e.mode = e.chat.mode), e.chat && e.chat.choice && e.chat.choice.id && (e.choiceId !== e.chat.choice.id && e.chatAudienceChoice.model.set("chosen", void 0), e.choiceId = e.chat.choice.id), o) {
                                    const t = e.getRegion("detail").$el;
                                    t[0] && t.scrollTop(t[0].scrollHeight)
                                }
                                e.chat.showProfile && e.showPlayerProfile(e.player, !0)
                            }
                        }
                    }))()
                },
                onRender() {
                    d.app.client.isRole("player") ? this.showChatSummary() : (this.showChildView("top", this.summaryTopComponent), this.showChildView("detail", this.chatDetailList), this.showChildView("bottom", this.chatAudienceChoice))
                },
                onAttach() {
                    this.update()
                },
                playSound() {
                    var e = this;
                    return S((function*() {
                        if (e.pingSound) try {
                            e.pingSound.volume = .5, yield e.pingSound.play()
                        } catch (e) {
                            console.warn("Unable to play sound")
                        }
                    }))()
                },
                summaryClicked(e) {
                    this.showChatDetail(e.get("contact").id)
                },
                showChatDetail(e) {
                    const t = this.summaryCollection.find((t => t.attributes.contact.id === e)),
                        o = this.model.get("player");
                    if (!t) return;
                    this.detailContactId !== e && (this.chatDetailList.contacts = [t.get("contact")], this.chatDetailList.player = o), this.detailContactId = e, this.chatDetailComponent.model.set("contact", t.get("contact")), this.allContacts = l().union([o], [t.get("contact")]), this.fullHistory = l().map(t.get("history"), (e => (e.sender = l().findWhere(this.allContacts, {
                        id: e.senderId
                    }), e.isPlayer = o && o.id === e.senderId, e.color = e.isPlayer ? "white" : e.sender.color.light, e))), this.chatDetailCollection.set(this.fullHistory), this.chatDateButton.model.set("text", `DATE ${t.get("contact").name}`), this.chatDateButton.model.set("className", "dateButton"), this.chatDateButton.model.set("disabled", t.get("disabled")), this.getRegion("top").detachView(), this.getRegion("detail").detachView(), this.getRegion("bottom").detachView(), this.showChildView("top", this.chatDetailComponent), this.showChildView("detail", this.chatDetailList), "date" === this.chat.mode ? this.showChildView("bottom", this.chatDateButton) : "chat" === this.chat.mode && this.showChildView("bottom", this.chatDetailInput), this.getRegion("detail").$el.css("background-color", t.get("contact").color.medium), this.getRegion("bottom").$el.css("background-color", t.get("contact").color.dark), this.stopListening(this.chatDetailComponent), this.stopListening(this.chatDetailInput), this.stopListening(this.chatDetailList), this.stopListening(this.chatDateButton), this.listenTo(this.chatDetailComponent, "chat:back", this.showChatSummary), this.listenTo(this.chatDetailComponent, "chat:info", this.infoButton), this.listenTo(this.chatDetailInput, "input:submit", this.sendText), this.listenTo(this.chatDetailInput, "input:enter", this.sendText), this.listenTo(this.chatDetailList, "childview:chat:avatar", this.messageSender), this.listenTo(this.chatDateButton, "button:date", this.chooseDateDetail);
                    const s = this.getRegion("detail").$el;
                    s[0] && s.scrollTop(s[0].scrollHeight), this.getRegion("detail").$el.removeClass("off-right"), this.getRegion("summary").$el.addClass("off-left"), d.app.client.isRole("player") && (this.triggerMethod("client:message", {
                        action: "MarkAsRead",
                        contactUserId: t.get("contact").id
                    }), this.router.navigate(`g/${e}`, {
                        trigger: !1
                    }))
                },
                showChatSummary() {
                    this.detailContactId = null, this.summaryList.options.mode = this.chat ? this.chat.mode : "browse", this.summaryList.render(), this.getRegion("top").detachView(), this.getRegion("bottom").detachView(), this.showChildView("top", this.summaryTopComponent), this.showChildView("summary", this.summaryList), this.showChildView("detail", this.chatDetailList), this.getRegion("detail").$el.addClass("off-right"), this.getRegion("summary").$el.removeClass("off-left"), this.player && this.$el.find(".double-nav-bottom").css("background-color", this.player.color.medium), this.showChildView("bottom", this.bottomComponent), this.stopListening(this.summaryTopComponent), this.stopListening(this.summaryList), this.listenTo(this.summaryTopComponent, "chat:info", this.infoButton), this.listenTo(this.summaryList, "childview:chat:detail", this.summaryClicked), this.listenTo(this.summaryList, "childview:chat:date", this.chooseDate), d.app.client.isRole("player") && (this.triggerMethod("client:message", {
                        action: "LeftChatDetail"
                    }), this.router.navigate("g/summary", {
                        trigger: !1
                    }))
                },
                chooseDateDetail() {
                    const e = this,
                        t = this.summaryCollection.find((t => t.attributes.contact.id === e.detailContactId));
                    this.chooseDate(t)
                },
                chooseDate(e) {
                    this.triggerMethod("client:message", {
                        action: "ChooseDate",
                        contactUserId: e.get("contact").id
                    })
                },
                sendText() {
                    const e = this,
                        t = this.chatDetailInput.getValue().replace(/[\n]/gi, ""),
                        o = this.summaryCollection.find((t => t.attributes.contact.id === e.detailContactId));
                    t.trim().length > 0 && (this.triggerMethod("client:message", {
                        action: "SendMessage",
                        text: t,
                        recipientUserId: o.attributes.contact.id
                    }), this.chatDetailInput.clearInput())
                },
                showAlerts(e) {
                    const t = this.model.get("player");
                    e.map((e => {
                        const o = this;
                        return e.allowOutsideClick = e.customClass && -1 === e.customClass.indexOf("cover"), e.customClass += " monstermingle playerProfile alertDialog", e.showConfirmButton = !1, e.background = t.color.medium, e.padding = 0, e.didOpen = function() {
                            e.player = t, o.profileView = new T({
                                el: ".monstermingle.playerProfile",
                                model: new(r().Model)(e)
                            })
                        }, e
                    })), p().close(), e.forEach(function() {
                        var e = S((function*(e) {
                            yield p().fire(e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }())
                },
                infoButton(e) {
                    const t = e.attributes.player || e.attributes.contact;
                    this.showPlayerProfile(t, t === e.attributes.player)
                },
                showPlayerProfile(e, t) {
                    const o = this;
                    e.self = t, p().close(), p().fire({
                        html: "player",
                        customClass: {
                            popup: "monstermingle playerProfile"
                        },
                        padding: 0,
                        background: e.color.medium,
                        showConfirmButton: !1,
                        didOpen() {
                            o.profileView = new L({
                                el: ".monstermingle.playerProfile .swal2-html-container",
                                model: new(r().Model)(e)
                            }), o.profileView.model.set("startChatting", o.model.get("chat").showProfile), o.profileView.model.set("playerName", o.model.get("player").name), o.listenTo(o.profileView, "profile:block", o.blockPlayer), o.listenTo(o.profileView, "profile:close", o.closeProfile)
                        }
                    })
                },
                blockPlayer(e) {
                    const t = e.get("blocked") ? "Unblock" : "Block";
                    this.triggerMethod("client:message", {
                        action: t,
                        playerId: e.get("id")
                    }), p().close(), this.showChatSummary()
                },
                closeProfile() {
                    p().close()
                },
                messageSender(e) {
                    this.showPlayerProfile(e.get("sender"), e.get("isPlayer"))
                },
                submitAudienceVote(e) {
                    this.sessionMessage.vote = e, this.triggerMethod("client:message", {
                        type: "vote",
                        vote: e
                    }), this.chatAudienceChoice.model.set("chosen", e), p().close()
                }
            });
            var V = o(34813);

            function M(e, t, o, s, a, i, l) {
                try {
                    var n = e[i](l),
                        r = n.value
                } catch (e) {
                    return void o(e)
                }
                n.done ? t(r) : Promise.resolve(r).then(s, a)
            }
            const R = o(9659).S.extend({
                    defaults: l().extend({}, V.s.prototype.model.defaults, {
                        alerts: [],
                        showProfile: null
                    })
                }),
                E = V.s.extend({
                    model: new R,
                    bindings: l().extend({}, V.s.prototype.bindings, {
                        ".playerTopBar": {
                            attributes: [{
                                name: "style",
                                observe: "player",
                                onGet: e => e && e.color ? `background-color:${e.color.dark};` : null
                            }]
                        }
                    }),
                    update() {
                        this.model.get("showProfile") && this.playerProfile(this.model.get("player"), !0), this.model.changed.alerts && (this.showAlerts(this.model.get("alerts")), r().notify())
                    },
                    playerProfile(e, t) {
                        const o = this;
                        e.self = t, p().close(), p().fire({
                            html: "player",
                            customClass: {
                                popup: "monstermingle playerProfile"
                            },
                            padding: 0,
                            background: e.color.medium,
                            showConfirmButton: !1,
                            allowOutsideClick: !1,
                            didOpen: () => {
                                o.profileView = new L({
                                    el: ".monstermingle.playerProfile .swal2-html-container",
                                    model: new(r().Model)(e)
                                }), o.listenTo(o.profileView, "profile:close", o.closeProfile)
                            }
                        })
                    },
                    closeProfile() {
                        p().close()
                    },
                    showAlerts(e) {
                        const t = this,
                            o = this.model.get("player");
                        l().map(e, (e => (e.customClass = "monstermingle playerProfile alertDialog", e.showConfirmButton = !1, e.background = o.color, e.padding = 0, e.didOpen = () => {
                            e.player = o, t.profileView = new T({
                                el: ".monstermingle.playerProfile",
                                model: new(r().Model)(e)
                            })
                        }, e))), p().close(), e.forEach(function() {
                            var e, t = (e = function*(e) {
                                yield p().fire(e)
                            }, function() {
                                var t = this,
                                    o = arguments;
                                return new Promise((function(s, a) {
                                    var i = e.apply(t, o);

                                    function l(e) {
                                        M(i, s, a, l, n, "next", e)
                                    }

                                    function n(e) {
                                        M(i, s, a, l, n, "throw", e)
                                    }
                                    l(void 0)
                                }))
                            });
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }
                });

            function H(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, s)
                }
                return o
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(o), !0).forEach((function(t) {
                        j(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : H(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function j(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e
            }
            const _ = c.v.extend({
                sessionModulePrefix: "MonsterMingle",
                bindings: U(U({}, c.v.prototype.bindings), {}, {
                    ":el": l().extend({}, c.v.prototype.bindings[":el"], {
                        attributes: [{
                            name: "class",
                            observe: "customerBlob",
                            onGet(e) {
                                let t = "";
                                return e && e.player && e.player.color && e.player.color.medium && (t += `color-${e.player.color.medium.replace("#","")}`), e && e.player && e.player.icon && (t += ` ${e.player.icon}`), t += " monstermingle", t
                            }
                        }]
                    })
                }),
                initialize(e) {
                    r().history.start(), c.v.prototype.initialize.apply(this, [e])
                },
                getGameLayout(e) {
                    switch (e) {
                        case "chat":
                            return this.setLayout(A);
                        case "Gameplay":
                        case "Logo":
                            return this.setLayout(E);
                        default:
                            return -1
                    }
                },
                parseBlob: e => (e.playerInfo = e.player || {}, e.playerInfo.username = e.playerName || "Audience", e.player && e.player.color && (e.playerInfo.topBarColor = e.player.color.dark, e.playerInfo.buttonColor = e.player.color.dark, e.playerInfo.avatar = e.player.character ? e.player.character.frame : null), e.color && (e.playerInfo.topBarColor = e.color.dark, e.playerInfo.buttonColor = e.color.dark), "Logo" === e.state && (e.message = {
                    html: e.message
                }), "Lobby" === e.state && (e.isPlayer || (e.state = "Logo"), e.playerIsVIP = e.isAllowedToStartGame, e.playerCanStartGame = e.isAllowedToStartGame, e.playerCanCensor = e.canCensor, e.gameCanStart = -1 !== ["CanStart", "Countdown", "PostGame"].indexOf(e.lobbyState), e.gameIsStarting = "Countdown" === e.lobbyState, e.gameFinished = "PostGame" === e.lobbyState), "chat" === e.state && (e.playerInfo.hidden = !0), e.artifact && (e.characters = void 0), e.censorablePlayers && delete e.censorablePlayers, e),
                doPostUpdate() {
                    const e = this.model.get("player");
                    void 0 !== e && void 0 !== e.playerColor && (a()("#player").css("background-color", e.playerColor), a()("#game").css("background-color", e.playerColor), a()("#fibbage-lie-input").css("background-color", e.playerColor)), -1 === document.querySelector("#container").className.indexOf("monstermingle") && (document.querySelector("#container").className += " monstermingle")
                },
                formatSessionMessage: e => ("start" === e.action && (e.start = !0), "cancel" === e.action && (e.cancel = !0), "PostGame_Continue" === e.action && (e.start = !0, e.decision = "PostGame_Continue"), "PostGame_NewGame" === e.action && (e.start = !0, e.decision = "PostGame_NewGame"), "avatar" === e.action && (e.avatar = e.name), e)
            })
        },
        75717: (e, t, o) => {
            "use strict";
            e.exports = o.p + "games/monstermingle/1f5f2097581a9f06f6a2.svg"
        },
        64087: (e, t, o) => {
            "use strict";
            e.exports = o.p + "games/monstermingle/8d4b83857df4f93a4111.wav"
        }
    }
]);
//# sourceMappingURL=sourcemaps/6533.d9ce436275e92ab0e637.js.map