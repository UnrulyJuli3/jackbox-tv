(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/ridictionary"], {
        85993: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                MainView: () => w
            });
            var o = n(24340),
                s = n(19755),
                a = n.n(s),
                i = n(13469),
                l = n.n(i),
                r = n(9659),
                c = n(37231);
            const u = r.S.extend({
                    defaults: l().extend({}, c.G.prototype.model.defaults, {
                        text: "",
                        textOutput: "",
                        word: ""
                    })
                }),
                p = c.G.extend({
                    model: new u,
                    onChildviewChildviewButtonPaste() {
                        const t = a()("textarea");
                        let e = this.model.get("word");
                        e = a()("<div />").html(e).text();
                        const n = t.prop("selectionStart"),
                            o = t.val(),
                            s = o.substring(0, n),
                            i = o.substring(n, o.length);
                        s.length > 0 && " " !== s[s.length - 1] && (e = ` ${e}`), i.length > 0 && " " !== i[0] && (e = `${e} `), t.val(s + e + i), t.focus(), t.prop("selectionStart", n + e.length), t.prop("selectionEnd", n + e.length), this.inputComponent.onInputChange()
                    }
                });
            var h = n(72316),
                d = n.n(h),
                b = n(86455),
                f = n.n(b),
                m = n(97079),
                g = n(29014),
                x = n(49273);
            const y = r.S.extend({
                    defaults: l().extend({}, m.E.prototype.model.defaults, {
                        choiceType: ""
                    })
                }),
                C = x.r.extend({
                    template: l().template('\n    <button type="button" class="button choice-button btn btn-lg"></button>\n    <button data-action="censor" aria-label="Censor" class="button censor-button btn btn-lg"></button>\n    <button data-action="choose" aria-label="Like" class="button like-button btn btn-lg"></button>'),
                    bindings: l().extend({}, x.r.prototype.bindings, {
                        ".like-button": {
                            attributes: [{
                                name: "aria-label",
                                observe: "className",
                                onGet: t => t && -1 !== t.indexOf("choice-liked") ? "Unlike" : "Like"
                            }]
                        }
                    })
                }),
                v = g.C.extend({
                    childView: C
                }),
                I = m.E.extend({
                    model: new y,
                    initialize(t) {
                        this.choicesList = this.choicesList || new v({
                            action: "choose",
                            collection: new(d().Collection)
                        }), m.E.prototype.initialize.apply(this, [t])
                    },
                    onChildviewChildviewButtonCensor(t) {
                        const e = t.get("index"),
                            n = t.get("html");
                        return f().close(), f().fire({
                            text: n,
                            customClass: {
                                popup: "ridictionary"
                            },
                            title: "Censor this?",
                            showCancelButton: !0,
                            confirmButtonText: "Yes, Censor!",
                            cancelButtonText: "No!",
                            confirmButtonColor: "#900"
                        }).then((t => {
                            t.value && this.triggerMethod("client:message", {
                                choice: e,
                                action: "censor"
                            })
                        })), !1
                    }
                }),
                w = o.v.extend({
                    sessionModulePrefix: "Ridictionary",
                    getGameLayout(t) {
                        switch (t) {
                            case "EnterSingleText":
                                return this.setLayout(p);
                            case "MakeSingleChoice":
                                return this.setLayout(I);
                            default:
                                return -1
                        }
                    },
                    parseBlob(t) {
                        const e = t;
                        if (e.classes = e.classes || [], e.playerInfo = e.playerInfo || {}, e.playerInfo.classes = e.playerInfo.classes || [], e.playerInfo.avatar = e.playerInfo.avatar || "Avatar_Other", e.playerInfo.classes.push(e.playerInfo.color), e.isAudience && (e.playerInfo.avatar = "Avatar_A", e.playerInfo.username = "AUDIENCE"), e.playerInfo.username) {
                            const t = e.playerInfo.username.length;
                            this.fullNameLength = this.fullNameLength || t, this.fullNameLength === t && (e.playerInfo.username = e.playerInfo.username.slice(1))
                        }
                        return e.choiceId && e.classes.push(e.choiceId), "EnterSingleText" === e.state && e.word && (e.actions = [{
                            text: "paste",
                            action: "paste",
                            block: !1
                        }, {
                            text: "submit",
                            action: "submit",
                            block: !1
                        }]), "MakeSingleChoice" === e.state && e.announcePrompt && (e.textDescriptions = e.textDescriptions || [], e.textDescriptions.push({
                            id: e.choiceId,
                            category: "Prompt",
                            text: e.prompt.html
                        })), e
                    }
                })
        }
    }
]);
//# sourceMappingURL=sourcemaps/3718.675fd0757de156722f62.js.map