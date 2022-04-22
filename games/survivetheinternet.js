(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/survivetheinternet"], {
        73315: (e, a, t) => {
            "use strict";
            t.r(a), t.d(a, {
                MainView: () => f
            });
            var o = t(10972),
                n = t(24340),
                i = t(72316),
                s = t.n(i),
                r = t(37231),
                l = t(13469),
                h = t.n(l),
                d = t(63574);
            const c = t.n(d)().View.extend({
                    template: h().template('<div class="aboveBlackBox"></div> <div class="blackBox triangle-isosceles"></div> <div class="belowBlackBox"></div>'),
                    tagName: "div",
                    className: "promptView",
                    bindings: {
                        ".aboveBlackBox": {
                            observe: "aboveBlackBox",
                            updateMethod: "html"
                        },
                        ".belowBlackBox": {
                            observe: "belowBlackBox",
                            updateMethod: "html"
                        },
                        ".blackBox": {
                            updateMethod: "html",
                            observe: "blackBox",
                            attributes: [{
                                name: "class",
                                observe: "blackBox",
                                onGet: e => e ? "" : "hide"
                            }]
                        }
                    },
                    render() {
                        this.$el.html(this.template()), this.stickit()
                    }
                }),
                g = r.G.extend({
                    initialize(e) {
                        r.G.prototype.initialize.apply(this, [e]), this.promptComponent = new c({
                            model: new(s().Model)
                        })
                    },
                    update() {
                        this.playerInfo = this.model.get("playerInfo") || {}, this.promptComponent.model.set(this.model.get("text")), this.inputComponent.model.set("error", this.model.get("error")), this.inputComponent.model.set("placeholder", this.model.get("placeholder")), this.inputComponent.model.set("maxLength", this.model.get("maxLength")), this.inputComponent.model.set("inlineSubmit", !1), this.buttonsCollection.set([{
                            text: "Submit",
                            action: "submit",
                            block: !1,
                            color: {
                                background: this.playerInfo.buttonColor
                            }
                        }])
                    }
                });
            var p = t(97079);
            const m = p.E.extend({
                initialize() {
                    p.E.prototype.initialize.apply(this), this.promptComponent = new c({
                        model: new(s().Model)
                    })
                },
                update() {
                    this.promptComponent.model.set(this.model.get("text")), this.choicesList.options.className = "choiceButton", this.choices = h().map(this.model.get("choices"), (e => (e.className = "choiceButton", e))), this.choicesList.collection.set(this.choices), this.stickit()
                }
            });
            var b = t(29014);
            const u = t(49273).r.extend({
                    template: h().template(' <button type="button" style="flex-grow:2" class="voteButton button btn btn-lg"> <div class="voteTwistHeader text-left">Twist</div> <div class="voteThumbnail pull-left"></div> <div class="voteIcon pull-left"></div> <div class="votePlayer text-left">Player Name</div> <div class="voteText text-left">Text</div> <div class="voteResponse text-left">Response</div> <div class="voteTwistFooter text-left">Twist</div> </button> <button data-action="censor" data-index class="button censor-button btn btn-lg"></button>'),
                    bindings: {
                        ":el": {
                            observe: "visible",
                            visible: e => !1 !== e,
                            visibleFn(e, a) {
                                e.css("display", a ? "" : "none")
                            }
                        },
                        ".votePlayer": {
                            observe: "player",
                            attributes: [{
                                name: "style",
                                observe: "color",
                                onGet: e => e ? `color: ${e.background}` : ""
                            }]
                        },
                        ".voteThumbnail": {
                            observe: "thumbnail",
                            updateMethod: "html",
                            visible: !0,
                            attributes: [{
                                name: "class",
                                observe: "thumbnail",
                                onGet(e) {
                                    const a = (e || "").match(/images\/survivetheinternet\/photos\/([a-zA-Z]+-thumb)\.jpg/);
                                    return a ? a[1] : ""
                                }
                            }, {
                                name: "aria-label",
                                observe: "altText"
                            }]
                        },
                        ".voteText": {
                            observe: "text",
                            updateMethod: "html"
                        },
                        ".voteTwistHeader": {
                            observe: "header",
                            updateMethod: "html",
                            onGet: e => "<CENSORED>" === e ? "&lt;CENSORED&gt;" : e
                        },
                        ".voteTwistFooter": {
                            observe: "footer",
                            updateMethod: "html",
                            onGet: e => "<CENSORED>" === e ? "&lt;CENSORED&gt;" : e
                        },
                        ".voteResponse": {
                            observe: "body",
                            updateMethod: "html",
                            onGet: e => "<CENSORED>" === e ? "&lt;CENSORED&gt;" : e
                        },
                        ".voteIcon": {
                            attributes: [{
                                name: "class",
                                observe: "icon"
                            }]
                        },
                        ".voteButton": {
                            attributes: [{
                                name: "disabled",
                                observe: "disabled"
                            }, {
                                name: "data-action",
                                observe: "action"
                            }, {
                                name: "data-index",
                                observe: "index"
                            }, {
                                name: "class",
                                observe: ["className", "index"],
                                onGet(e) {
                                    let a = `${e[0]}`;
                                    return a += ` choose-${e[1]}`, a
                                }
                            }, {
                                name: "type",
                                observe: "action",
                                onGet: e => "submit" === e ? "submit" : "button"
                            }]
                        },
                        ".censor-button": {
                            observe: "censorable",
                            visible: !0,
                            attributes: [{
                                name: "data-index",
                                observe: "index"
                            }, {
                                name: "class",
                                observe: "index",
                                onGet: e => `censor-${e}`
                            }]
                        }
                    }
                }),
                w = m.extend({
                    bindings: h().extend(m.prototype.bindings, {
                        ".chosen": {
                            observe: "chosen",
                            onGet(e) {
                                return e ? this.model.get("choices") && this.model.get("choices")[e] ? this.model.get("choices")[e].text : "" : null
                            }
                        }
                    }),
                    initialize(e) {
                        m.prototype.initialize.apply(this, [e]), this.choicesList = new b.C({
                            className: "btn-toolbar choices voting",
                            childView: u,
                            collection: new(s().Collection),
                            block: !0
                        })
                    },
                    update() {
                        this.prompt = this.model.get("text"), this.choices = h().map(this.model.get("choices"), (e => (e.censorable = this.model.get("canCensor"), e.action = e.action || "choose", e))), this.promptComponent.model.set(this.prompt), this.model.get("chosen") && this.model.get("chosen").toString().length > 0 ? this.choicesList.collection.reset() : this.choicesList.collection.set(this.choices)
                    }
                }),
                f = n.v.extend({
                    sessionModulePrefix: "SurviveTheInternet",
                    altTexts: {
                        Airplane: "Mountains and a jet engine from an airplane window",
                        ApplePicking: "A person in a jacket holding a basket filled with apples",
                        ArtMuseum: "An art museum with modern sculptures, a painting, a minimalist bench and a wooden floor",
                        AvocadoToast: "Slices of avocado on toast, peppered, served on a ceramic plate",
                        BabyAnnouncement: "Two people, one in jeans and tennis shoes, one in spandex and cowboy boots, standing next to a small pair of baby shoes",
                        Barn: "Some brown cows grouped, another alone, in front of a large red barn",
                        Baseball: "Two teens in red hats, wearing different colored tee shirts, watching a baseball game",
                        Basketball: "An empty street basketball court and hoop",
                        BathroomStall: "A bathroom stall with tennis shoes visible",
                        Bat: "Two large and two small bats hanging upside down on a branch",
                        BBQ: "A rack of ribs sitting on a firey barbeque",
                        Beach: "A sunset on a beach with waves crashing and scattered clouds",
                        Bear: "A bear lounging on its back, facing the camera with its front paws up",
                        Bicycle: "A person with a satchel on a bicycle in the road near the middle lines",
                        BirthdayParty: "A collection of colorful wrapped gifts, party hats and a cake with candles",
                        Bonfire: " A sitting person strumming a guitar behind a small campfire with a kettle",
                        BookStore: "A pile of old books on a table at a yard sale",
                        Boxing: "A black boxing speed bag hanging",
                        BubbleBath: "Candles, rolled up towels, a flower and a luffa around a tub filled with bubbles",
                        Cabin: "A small, old wooden cabin with a dark window around autumn trees",
                        Camping: "A small bright tent on grass around evergreen trees in a forest",
                        Cat: "A cat poking its head up from inside a cardboard box with big eyes",
                        Chimpanzee: "A chimpanzee sitting with its fingers in its ears",
                        Chinese: "A collection of plates of egg rolls, dumplings, and rice balls",
                        CoffeeShop: "A room full of mismatched furniture, a sitting woman in a beanie talking, and a woman in an apron serving a drink to a man at a table",
                        CompactCar: "A small brightly colored car parked near a stone wall",
                        ConcertStage: "an empty concert stage with guitars, drums, amps and microphones",
                        CondoInterior: "A condo with an orange modern sofa, glass coffee table and a large window with a view of a city",
                        Condo: "a street view of a condominium complex, with a larger building in the background",
                        Convertible: "Two people in an old red convertible parked on dirt overlooking an ocean",
                        Dentist: "A reclined dentist chair with cools and machinery around it",
                        Desert: "A desert with sand dunes during the day",
                        DMV: 'Sidewalk, bushes, and the corner of a drab building that says "Department of Motor Vehicles"',
                        Dog: "A dog with floppy ears and its tongue hanging out running in grass",
                        Dolphin: "A dolphin with its mouth open and head above water facing the camera",
                        Elephant: "An elephant standing in water spraying itself with its trunk",
                        EngagementRing: "Two hands in the process of putting an engagement ring on another hand",
                        FarmHouse: "A large white three story house with a red barn behind it",
                        FeetOnBeach: "two sets of feet on the sand in front of a calm ocean",
                        Ferret: "a white ferret on a leash in the grass",
                        Field: "a field with small blue flowers and a cloudy sky",
                        Fireworks: "Six people holding sparklers and running along a beach at sundown",
                        Football: 'A football goal post, and an arm holding up an oversized "#1" hand',
                        Forest: "A foggy dirt path with tall dead trees on either side",
                        Funeral: "A bunch of people dressed in black standing over a casket with flowers on it",
                        GasStation: "A brightly lit gas station with a truck at a pump",
                        Giraffe: "A giraffe putting its head very close to the camera from behind a fence",
                        Goldfish: "A large goldfish in front of green plants",
                        Gorilla: "A gorilla with its finger on its bottom teeth",
                        Graduation: "five people in graduation caps and gowns facing away from the camera",
                        Guacamole: "a bowl of guacamole on a plate of chips",
                        Gym: "an empty gym with a rack weights",
                        Gyro: "a lamb gyro with peppers and cilantro and a side of fries",
                        Hamburger: "two hamburgers, fries, and colas on a table",
                        Hockey: "six people on a frozen lake playing hockey in front of mountains",
                        HomeRepair: "a gloved hand using a roller to paint a wall white",
                        Horse: "a horse eating straw in front of green trees",
                        HorseRace: "blurry horses at the finish line of a race",
                        HotAirBalloon: "a colorful hot air balloon in the sky",
                        HotDogs: "two hot dogs, side by side, with mustard",
                        HouseParty: "A lady with a tambourine, a guy with a guitar, and others with glasses of wine celebrating",
                        IceCream: "a partially melted neapolitan ice cream cone in front of the ocean",
                        Igloo: "a small igloo in a wintry area",
                        Indian: "various Indian food in metal dishes on a red table",
                        Island: "an empty beach with a calm ocean and palm trees",
                        Jeep: "a red Jeep with no doors on red dirt",
                        Jungle: "a jungle with smooth river and dense foliage",
                        Kite: "a red kite flying in a blue sky",
                        Kittens: "two kittens in a wicker basket holding each other",
                        Laundromat: "an aisle in a laundromat with washers on both sides",
                        Lion: "a standing male lion looking to the side",
                        London: "a British Royal Guard at Buckingham Palace in a large fuzzy hat standing at attention facing to the left",
                        Mansion: "a gate and a road leading to a large, well lit mansion",
                        MeatSkewer: "cubes of meat on skewers on a plate with bread and limes",
                        Meditation: "a woman in meditation in front of a large body of water",
                        Mexican: "a bowl of beans, salsa, cheese, corn and sour cream",
                        Minivan: "an older minivan on the road with luggage strapped to the top",
                        Moose: "a large moose standing in marshy grass in a forest",
                        Motel: 'a building with a red "motel" sign in the darkness',
                        Motorcycle: "two older motorcycles parked side by side, one black, one white",
                        Mountains: "a river valley with snowy mountains in the background",
                        MovieTheater: "an empty movie theater with a white screen",
                        Moving: "a neat pile of packing boxes in a white room",
                        Museum: "a museum entrance with stone columns and colorful banners",
                        Nascar: "a crowd watching a Nascar race",
                        NewYorkCity: "The Statue of Liberty lit up at dusk in front of the New York City skyline",
                        Office: "A cubicle with an old tv/vcr combo and a couple monitors and various office supplies",
                        Orangutan: "An orangutan hanging from a vine with both hands",
                        Parade: "a top down view of a crowd facing an empty road for a parade",
                        Paris: "a grassy field with the Eiffel Tower in the background",
                        ParkingTicket: 'An orange envelope with "Violation" written on it on the windshield of a vehicle',
                        Park: "A park with a bench on the side of a paved path",
                        PickupTruck: "an old blue pickup truck",
                        Pig: "a young pig in front of other piglets facing the camera",
                        Pizza: "a pepperoni pizza with one slice cut",
                        PoolParty: "a bunch of children and one man playing with an inflatable ball in a pool",
                        PostOffice: "a wall of mail boxes, one open with keys hanging",
                        Puppies: "three black and white puppies sitting on a step",
                        Rabbit: "a brown and white bunny with one ear up",
                        Rainstorm: "a cup and saucer sitting next to a window with rain drops on it",
                        Rollerblades: "two rollerblades only touching the ground on one wheel",
                        RollerCoaster: "the view from the front car of a wooden rollercoaster",
                        RomanticGetaway: "a white bed with a rose and petals on it",
                        Russia: "St Basil's Cathedral with colorful onion domes",
                        Sailboat: "on a sailboat with white sails in a blue lake",
                        Salad: "a salad on a white plate with pomegranate seeds and cheese crumbles",
                        Salmon: "a filet of pink salmon with asparagus",
                        SanFrancisco: "the golden gate bridge in san francisco",
                        Segway: "three segways leaning into each other, against a tree",
                        SemiTruck: "a black semi truck on the road with an orange trailer",
                        ShootingStar: "a night sky with a shooting star",
                        Skyscraper: "a view from the bottom of a tall skyscraper",
                        Snake: "a small snake coiled in some leaves",
                        Soccer: "kids in soccer uniforms on a field with a ball above their heads",
                        Spider: "a black widow spider walking upside down on a web",
                        StationWagon: "an old station wagon on a beach",
                        Statue: "a statue of a greek god with a large beard sitting sideways",
                        Steak: "a large t-bone steak on a firey grill with vegetables",
                        SubwayCar: "an empty subway car with orange cloth seats",
                        Suitcase: "a neatly packed suitcase with collared shirts, a camera, and socks",
                        Sunset: "two hands creating a heart shape with the sun in the middle",
                        Tennis: "four people playing tennis on a court",
                        Traffic: "many cars stopped on a highway",
                        Train: "a train with oil cars on a track",
                        Vegas: "a roulette wheel with people standing in the background",
                        Volleyball: "a volleyball in the sand near a net",
                        Voting: "a Vote Here sign with American flags and an open door",
                        VR: "an old man sitting in a floral recliner with his arms out with a Virtual Reality headset on",
                        Wedding: "a wedding scene with a grassy yard, chairs with white decoration and a white archway",
                        Wrestling: "two men in spandex wrestling, one with his eyes closed and his head held by the other",
                        WritingDesk: "a wooden desk with a laptop, mouse, mug, and notepad",
                        Yoga: "a woman doing yoga on a large rock during a sunset"
                    },
                    getGameLayout(e) {
                        switch (e) {
                            case "EnterSingleText":
                                return this.setLayout(g);
                            case "MakeSingleChoice":
                                return this.setLayout(m);
                            case "Voting":
                                return this.setLayout(w);
                            default:
                                return -1
                        }
                    },
                    parseBlob(e) {
                        if (e.playerInfo = e.playerInfo || {}, e.playerInfo.username = e.playerName || "Audience", e.playerInfo.color && (e.playerInfo.avatar = e.playerInfo.color.frame, e.playerInfo.topBarColor = e.playerInfo.color.dark.hexString, e.playerInfo.bgColor = e.playerInfo.color.veryLight.hexString, e.playerInfo.textColor = e.playerInfo.color.veryLight.hexString, e.playerInfo.buttonColor = e.playerInfo.color.dark.hexString), "Gameplay" === e.state && (e.state = "Logo"), "Lobby" === e.state && (o.app.client.isRole("player") || (e.state = "Logo"), e.playerIsVIP = e.isAllowedToStartGame, e.playerCanStartGame = e.isAllowedToStartGame, e.playerCanCensor = e.canCensor, e.gameCanStart = -1 !== ["CanStart", "Countdown", "PostGame"].indexOf(e.lobbyState), e.gameIsStarting = "Countdown" === e.lobbyState, e.gameFinished = "PostGame" === e.lobbyState), e.censorablePlayers && delete e.censorablePlayers, "EnterSingleText" === e.state && e.text && e.text.aboveBlackBox) {
                            const a = e.text.aboveBlackBox.match(/images\/survivetheinternet\/photos\/([a-zA-Z]+)\.jpg/);
                            if (a) {
                                const t = a[1],
                                    o = this.altTexts[t];
                                e.text.aboveBlackBox = `<div class='finalRoundImage ${t}' aria-label='${o}'></div>`
                            }
                        }
                        if ("Voting" === e.state && (e.choices = e.choices.map((e => {
                                if (!e.thumbnail) return e;
                                const a = e.thumbnail.match(/images\/survivetheinternet\/photos\/([a-zA-Z]+)-thumb\.jpg/);
                                if (a) {
                                    const t = a[1].replace("-thumb", ""),
                                        o = this.altTexts[t];
                                    e.altText = o
                                }
                                return e
                            }))), "MakeSingleChoice" === e.state && e.text && e.text.blackBox) {
                            const a = e.text.blackBox.match(/(.*)<img src='images\/survivetheinternet\/photos\/([a-zA-Z]+)\.jpg'\/>(.*)/);
                            if (a) {
                                const t = a[2],
                                    o = this.altTexts[t];
                                e.text.blackBox = `${a[1]}<div class='finalRoundImage ${t}' aria-label='${o}'></div>${a[3]}`
                            }
                        }
                        return e
                    },
                    formatSessionMessage: e => ("start" === e.action && (e.start = !0), "cancel" === e.action && (e.cancel = !0), "PostGame_Continue" === e.action && (e.start = !0, e.decision = "PostGame_Continue"), "PostGame_NewGame" === e.action && (e.start = !0, e.decision = "PostGame_NewGame"), e)
                })
        }
    }
]);
//# sourceMappingURL=sourcemaps/1882.c7e8a8bbe18ce3b7c753.js.map