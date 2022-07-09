(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    ["games/triviadeath2-tjsp"], {
        16479: (e, t, s) => {
            var i;
            ! function() {
                "use strict";

                function a(e, t, s) {
                    var i = t.x,
                        a = t.y,
                        r = s.x - i,
                        n = s.y - a;
                    if (0 !== r || 0 !== n) {
                        var o = ((e.x - i) * r + (e.y - a) * n) / (r * r + n * n);
                        o > 1 ? (i = s.x, a = s.y) : o > 0 && (i += r * o, a += n * o)
                    }
                    return (r = e.x - i) * r + (n = e.y - a) * n
                }

                function r(e, t, s, i, n) {
                    for (var o, l = i, c = t + 1; c < s; c++) {
                        var d = a(e[c], e[t], e[s]);
                        d > l && (o = c, l = d)
                    }
                    l > i && (o - t > 1 && r(e, t, o, i, n), n.push(e[o]), s - o > 1 && r(e, o, s, i, n))
                }

                function n(e, t) {
                    var s = e.length - 1,
                        i = [e[0]];
                    return r(e, 0, s, t, i), i.push(e[s]), i
                }

                function o(e, t, s) {
                    if (e.length <= 2) return e;
                    var i = void 0 !== t ? t * t : 1;
                    return n(e = s ? e : function(e, t) {
                        for (var s, i, a, r, n, o = e[0], l = [o], c = 1, d = e.length; c < d; c++) a = o, void 0, void 0, (r = (i = s = e[c]).x - a.x) * r + (n = i.y - a.y) * n > t && (l.push(s), o = s);
                        return o !== s && l.push(s), l
                    }(e, i), i)
                }
                void 0 === (i = function() {
                    return o
                }.call(t, s, t, e)) || (e.exports = i)
            }()
        },
        87383: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => me
            });
            var i = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "tmp2",
                    class: e.classes
                }, [s("div", {
                    staticClass: "play-area"
                }, [s("span", {
                    staticClass: "name-header",
                    domProps: {
                        textContent: e._s(e.name)
                    }
                }), e._v(" "), s("div", {
                    staticClass: "stage"
                }, [s("div", {
                    staticClass: "constrain"
                }, [e.player ? ["lobby" === e.player.kind ? s("Lobby", {
                    attrs: {
                        player: e.player
                    }
                }) : "postGame" === e.player.kind ? s("PostGame", {
                    attrs: {
                        artifact: e.artifact,
                        player: e.player
                    }
                }) : "choices" === e.player.kind ? s("Choices", {
                    attrs: {
                        player: e.player,
                        madness: e.info.madness
                    }
                }) : "dialing" === e.player.kind ? s("Dialing", {
                    attrs: {
                        player: e.player
                    }
                }) : "dropping" === e.player.kind ? s("Dropping", {
                    attrs: {
                        player: e.player,
                        color: e.info.color
                    }
                }) : "drawing" === e.player.kind ? s("Drawing", {
                    attrs: {
                        player: e.player
                    }
                }) : "gridSelecting" === e.player.kind ? s("GridSelecting", {
                    attrs: {
                        player: e.player
                    }
                }) : "scratching" === e.player.kind ? s("Scratching", {
                    attrs: {
                        player: e.player
                    }
                }) : "waiting" === e.player.kind ? s("Waiting", {
                    attrs: {
                        artifact: e.artifact,
                        player: e.player
                    }
                }) : "writing" === e.player.kind ? s("Writing", {
                    attrs: {
                        player: e.player
                    }
                }) : e._e()] : e._e(), e._v(" "), e.audience ? ["choices" === e.audience.kind ? s("Choices", {
                    attrs: {
                        player: e.audience
                    }
                }) : "waiting" === e.audience.kind ? s("Waiting", {
                    attrs: {
                        artifact: e.artifact,
                        player: e.audience
                    }
                }) : e._e()] : e._e()], 2)])])])
            };
            i._withStripped = !0;
            var a = s(2934),
                r = s.n(a),
                n = s(65853);
            const o = {
                en: {
                    ALT: {
                        CHALICE_1: "gold chalice with green liquid",
                        CHALICE_2: "opaque gold chalice",
                        CHALICE_3: "marble chalice",
                        CHALICE_4: "wooden chalice",
                        CHALICE_5: "ornate silver chalice",
                        CHALICE_6: "simple stone chalice",
                        CHALICE_7: "rusted chalice",
                        CHALICE_8: "skull chalice",
                        CHALICE_9: "world's best boss mug",
                        CHALICE_10: "red solo cup",
                        CHALICE_11: "urinalysis cup",
                        CHALICE_12: "tropical tiki cup",
                        GIFT_1: "burlap wrapped gift with black bow",
                        GIFT_2: "green polka dot wrapped gift with green bow",
                        GIFT_3: "blue wrapped gift with red bow",
                        GIFT_4: "purple polka dot wrapped gift with gold bow",
                        GIFT_5: "black stripes wrapped gift with gray bow",
                        GIFT_6: "blue stripes wrapped gift with blue bow",
                        GIFT_7: "gold stripes wrapped gift with gold bow",
                        GIFT_8: "red polka dot wrapped gift with silver bow",
                        CHECKED_BOX: "checked box",
                        UNCHECKED_BOX: "unchecked box",
                        FINGER_1: "index finger",
                        FINGER_2: "middle finger",
                        FINGER_3: "ring finger",
                        FINGER_4: "pinky finger",
                        KEY_1: "gold key with crown",
                        KEY_2: "gold key with wings",
                        KEY_3: "ornate rusted key",
                        KEY_4: "brass key with loop",
                        KEY_5: "iron key with heart",
                        KEY_6: "brass key with clover",
                        KEY_7: "simple silver key",
                        KEY_8: "silver key with 3 rings",
                        KEY_9: "2-sided steel key",
                        KEY_10: "simple iron key",
                        KEY_11: "complex warded steel key",
                        KEY_12: "ornate gold key with crown",
                        KEY_13: "gold key with two hearts",
                        KEY_14: "rounded silver warded key",
                        KEY_15: "gold key with love tines",
                        KEY_16: "brass seahorse key",
                        KEY_17: "simple gold key",
                        KEY_18: "brass key with complex warding",
                        KEY_19: "gold key with crown in heart",
                        KEY_20: "copper key with clover",
                        KEY_21: "brass key with three hearts",
                        KEY_22: "simple brass key with complex warding",
                        KEY_23: "ornate gold key with ornate warding",
                        KEY_24: "silver key with crown and ornate warding",
                        LOGO: "the Trivia Murder Party 2 logo",
                        SWORD_2: "a sword with a length of two grid units",
                        SWORD_3: "a sword with a length of three grid units",
                        SWORD_4: "a sword with a length of four grid units"
                    },
                    CHOICES: {
                        CHOSEN: "You have chosen",
                        MADNESS: "I'm not crazy!",
                        NONE: "none of these"
                    },
                    DIALING: {
                        BUSY: "NUMBER BUSY",
                        CONNECTED: "CONNECTED",
                        WRONG_NUMBER: "WRONG NUMBER"
                    },
                    DROPPING: {
                        PROMPT: "Slide your chip to pick a spot to drop"
                    }
                },
                fr: {
                    ALT: {
                        CHALICE_1: "calice en or rempli d'un liquide vert",
                        CHALICE_2: "calice opaque en or",
                        CHALICE_3: "calice en marbre",
                        CHALICE_4: "calice en bois",
                        CHALICE_5: "calice ornementé en argent",
                        CHALICE_6: "simple calice en pierre",
                        CHALICE_7: "calice rouillé",
                        CHALICE_8: "calice en forme de crâne",
                        CHALICE_9: "mug du meilleur patron du monde",
                        CHALICE_10: "gobelet rouge",
                        CHALICE_11: "gobelet d'analyse d'urine",
                        CHALICE_12: "gobelet tiki des tropiques",
                        GIFT_1: "cadeau emballé dans de la toile de jute avec un nœud noir",
                        GIFT_2: "cadeau à pois verts avec un nœud vert",
                        GIFT_3: "cadeau bleu avec un nœud rouge",
                        GIFT_4: "cadeau à pois violets avec un nœud doré",
                        GIFT_5: "cadeau à rayures noires avec un nœud gris",
                        GIFT_6: "cadeau à rayures bleues avec un nœud bleu",
                        GIFT_7: "cadeau à rayures dorées avec un nœud doré",
                        GIFT_8: "cadeau à pois rouges avec un nœud argenté",
                        CHECKED_BOX: "case cochée",
                        UNCHECKED_BOX: "case non cochée",
                        FINGER_1: "index",
                        FINGER_2: "majeur",
                        FINGER_3: "annulaire",
                        FINGER_4: "petit doigt",
                        KEY_1: "clé en or surmontée d'une couronne",
                        KEY_2: "clé en or surmontée d'ailes",
                        KEY_3: "clé rouillée ornementée",
                        KEY_4: "clé en laiton surmontée d'un anneau",
                        KEY_5: "clé en fer surmontée d'un cœur",
                        KEY_6: "clé en laiton surmontée d'un trèfle",
                        KEY_7: "simple clé en argent",
                        KEY_8: "clé en argent surmontée de trois anneaux",
                        KEY_9: "clé en acier à double panneton",
                        KEY_10: "simple clé en fer",
                        KEY_11: "clé en acier à panneton complexe",
                        KEY_12: "clé ornée en or surmontée d'une couronne",
                        KEY_13: "clé en or surmontée de deux cœurs",
                        KEY_14: "clé ronde en argent pour serrure à garnitures",
                        KEY_15: "clé en or avec le mot LOVE",
                        KEY_16: "clé en laiton en forme d'hippocampe",
                        KEY_17: "simple clé en or",
                        KEY_18: "clé en laiton à panneton complexe",
                        KEY_19: "clé en or surmontée d'une couronne dans un cœur",
                        KEY_20: "clé en cuivre ornée d'un trèfle",
                        KEY_21: "clé en laiton ornée de trois cœurs",
                        KEY_22: "simple clé en laiton à panneton complexe",
                        KEY_23: "clé ornée en or à panneton complexe",
                        KEY_24: "clé en or à panneton complexe surmontée d'une couronne",
                        LOGO: "le logo de Trivia Murder Party 2",
                        SWORD_2: "une épée d'une longueur de deux cases",
                        SWORD_3: "une épée d'une longueur de trois cases",
                        SWORD_4: "une épée d'une longueur de quatre cases"
                    },
                    CHOICES: {
                        CHOSEN: "Vous avez choisi",
                        MADNESS: "Je ne suis pas dingue !",
                        NONE: "rien de tout ça"
                    },
                    DIALING: {
                        BUSY: "CORRESPONDANT OCCUPÉ",
                        CONNECTED: "CONNECTÉ(E)",
                        WRONG_NUMBER: "MAUVAIS NUMÉRO"
                    },
                    DROPPING: {
                        PROMPT: "Faites glisser votre jeton pour le faire tomber à l'endroit choisi."
                    }
                },
                it: {
                    ALT: {
                        CHALICE_1: "calice d'oro con liquido verde",
                        CHALICE_2: "calice d'oro opaco",
                        CHALICE_3: "calice di marmo",
                        CHALICE_4: "calice di legno",
                        CHALICE_5: "calice d'argento decorato",
                        CHALICE_6: "calice di pietra semplice",
                        CHALICE_7: "calice arrugginito",
                        CHALICE_8: "calice con teschio",
                        CHALICE_9: 'tazza "capo migliore del mondo"',
                        CHALICE_10: "bicchiere rosso da festa",
                        CHALICE_11: "provetta analisi delle urine",
                        CHALICE_12: "bicchiere tropicale",
                        GIFT_1: "regalo avvolto in iuta con fiocco nero",
                        GIFT_2: "regalo verde a pois con fiocco verde",
                        GIFT_3: "regalo blu con fiocco rosso",
                        GIFT_4: "regalo viola a pois con fiocco oro",
                        GIFT_5: "regalo a righe nere con fiocco grigio",
                        GIFT_6: "regalo a righe blu con fiocco blu",
                        GIFT_7: "regalo a righe dorate con fiocco oro",
                        GIFT_8: "regalo rosso a pois con fiocco argentato",
                        CHECKED_BOX: "casella selezionata",
                        UNCHECKED_BOX: "casella non selezionata",
                        FINGER_1: "indice",
                        FINGER_2: "medio",
                        FINGER_3: "anulare",
                        FINGER_4: "mignolo",
                        KEY_1: "chiave d'oro con corona",
                        KEY_2: "chiave d'oro con ali",
                        KEY_3: "chiave arrugginita ornata",
                        KEY_4: "chiave in ottone con anello",
                        KEY_5: "chiave di ferro con cuore",
                        KEY_6: "chiave in ottone con trifoglio",
                        KEY_7: "chiave d'argento semplice",
                        KEY_8: "chiave d'argento con 3 anelli",
                        KEY_9: "chiave in acciaio a due facce",
                        KEY_10: "chiave di ferro semplice",
                        KEY_11: "chiave d'acciaio con intagli complessi",
                        KEY_12: "chiave d'oro decorata con corona",
                        KEY_13: "chiave d'oro con due cuori",
                        KEY_14: "chiave arrotondata in argento",
                        KEY_15: 'chiave d\'oro con scritta "love"',
                        KEY_16: "chiave in ottone con cavalluccio marino",
                        KEY_17: "chiave d'oro semplice",
                        KEY_18: "chiave in ottone con intagli complessi",
                        KEY_19: "chiave d'oro con corona nel cuore",
                        KEY_20: "chiave di rame con trifoglio",
                        KEY_21: "chiave in ottone con tre cuori",
                        KEY_22: "chiave in ottone semplice con intagli complessi",
                        KEY_23: "chiave d'oro decorata con intagli ornati",
                        KEY_24: "chiave d'argento con corona e intagli ornati",
                        LOGO: "il logo di Trivia Murder Party 2",
                        SWORD_2: "una spada lunga due unità di griglia",
                        SWORD_3: "una spada lunga tre unità di griglia",
                        SWORD_4: "una spada lunga quattro unità di griglia"
                    },
                    CHOICES: {
                        CHOSEN: "Hai scelto",
                        MADNESS: "Non sono folle!",
                        NONE: "Nessuna di queste opzioni"
                    },
                    DIALING: {
                        BUSY: "OCCUPATO",
                        CONNECTED: "CONNESSO",
                        WRONG_NUMBER: "NUMERO SBAGLIATO"
                    },
                    DROPPING: {
                        PROMPT: "Trascina la tua fiche e scegli un punto da cui farla cadere"
                    }
                },
                de: {
                    ALT: {
                        CHALICE_1: "Goldkelch mit grüner Flüssigkeit",
                        CHALICE_2: "Matter Goldkelch",
                        CHALICE_3: "Marmorkelch",
                        CHALICE_4: "Der Kelch eines Zimmermanns",
                        CHALICE_5: "Verzierter Silberkelch",
                        CHALICE_6: "Einfacher Steinkelch",
                        CHALICE_7: "Rostiger Kelch",
                        CHALICE_8: "Knochenkelch",
                        CHALICE_9: '"Weltbester Boss"-Becher',
                        CHALICE_10: "Roter Partybecher",
                        CHALICE_11: "Urinprobenbecher",
                        CHALICE_12: "Tikibecher",
                        GIFT_1: "In Leinen verpacktes Geschenk mit schwarzer Schleife",
                        GIFT_2: "Grün gepunktetes Geschenk mit grüner Schleife",
                        GIFT_3: "Blaues Geschenk mit roter Schleife",
                        GIFT_4: "Lila gepunktetes Geschenk mit goldener Schleife",
                        GIFT_5: "Schwarz gestreiftes Geschenk mit grauer Schleife",
                        GIFT_6: "Blau gestreiftes Geschenk mit blauer Schleife",
                        GIFT_7: "Golden gestreiftes Geschenk mit goldener Schleife",
                        GIFT_8: "Rot gepunktetes Geschenk mit silberner Schleife",
                        CHECKED_BOX: "abgehaktes Kästchen",
                        UNCHECKED_BOX: "nicht abgehaktes Kästchen",
                        FINGER_1: "Zeigefinger",
                        FINGER_2: "Mittelfinger",
                        FINGER_3: "Ringfinger",
                        FINGER_4: "Kleiner Finger",
                        KEY_1: "Goldschlüssel mit Krone",
                        KEY_2: "Goldschlüssel mit Flügeln",
                        KEY_3: "Verzierter rostiger Schlüssel",
                        KEY_4: "Messingschlüssel mit Schleife",
                        KEY_5: "Eisenschlüssel mit Herz",
                        KEY_6: "Messingschlüssel mit Kleeblatt",
                        KEY_7: "Einfacher Silberschlüssel",
                        KEY_8: "Silberschlüssel mit drei Ringen",
                        KEY_9: "Doppelbärtiger Stahlschlüssel",
                        KEY_10: "Einfacher Eisenschlüssel",
                        KEY_11: "Komplexer Buntbart-Stahlschlüssel",
                        KEY_12: "Verzierter Goldschlüssel mit Krone",
                        KEY_13: "Goldschlüssel mit zwei Herzen",
                        KEY_14: "Runder Buntbart-Silberschlüssel",
                        KEY_15: "Goldschlüssel mit Liebesmotiv",
                        KEY_16: "Seepferdchen-Messingschlüssel",
                        KEY_17: "Einfacher Goldschlüssel",
                        KEY_18: "Komplexer Buntbart-Messingschlüssel",
                        KEY_19: "Goldschlüssel mit Krone im Herz",
                        KEY_20: "Kupferschlüssel mit Kleeblatt",
                        KEY_21: "Messingschlüssel mit drei Herzen",
                        KEY_22: "Einfacher Messingschlüssel mit komplexem Buntbart",
                        KEY_23: "Verzierter Goldschlüssel mit Zierbart",
                        KEY_24: "Silberschlüssel mit Krone und Zierbart",
                        LOGO: "das Trivia Murder Party 2 Logo",
                        SWORD_2: "Ein Schwert von zwei Feldern Länge",
                        SWORD_3: "Ein Schwert von drei Feldern Länge",
                        SWORD_4: "Ein Schwert von vier Feldern Länge"
                    },
                    CHOICES: {
                        CHOSEN: "Du hast gewählt",
                        MADNESS: "Ich bin nicht verrückt!",
                        NONE: "Nichts davon"
                    },
                    DIALING: {
                        BUSY: "BESETZT",
                        CONNECTED: "VERBUNDEN",
                        WRONG_NUMBER: "FALSCH VERBUNDEN"
                    },
                    DROPPING: {
                        PROMPT: "Bewege deinen Chip an eine Stelle, um ihn fallenzulassen"
                    }
                },
                es: {
                    ALT: {
                        CHALICE_1: "cáliz de oro con líquido verde",
                        CHALICE_2: "cáliz de oro opaco",
                        CHALICE_3: "cáliz de mármol",
                        CHALICE_4: "cáliz de madera",
                        CHALICE_5: "cáliz de plata ornamentado",
                        CHALICE_6: "cáliz de piedra sencillo",
                        CHALICE_7: "cáliz oxidado",
                        CHALICE_8: "cáliz de calavera",
                        CHALICE_9: "taza mejor jefe del mundo",
                        CHALICE_10: "vaso rojo de fiesta",
                        CHALICE_11: "vaso de análisis de orina",
                        CHALICE_12: "vaso tiki tropical",
                        GIFT_1: "regalo envuelto en arpillera con lazo negro",
                        GIFT_2: "regalo en papel de lunares verde con lazo verde",
                        GIFT_3: "regalo en papel azul con lazo rojo",
                        GIFT_4: "regalo en papel de lunares morado con lazo dorado",
                        GIFT_5: "regalo en papel a rayas negras con lazo gris",
                        GIFT_6: "regalo en papel a rayas azules con lazo azul",
                        GIFT_7: "regalo en papel a rayas doradas con lazo dorado",
                        GIFT_8: "regalo en papel de lunares rojo con lazo plateado",
                        CHECKED_BOX: "casilla marcada",
                        UNCHECKED_BOX: "casilla sin marcar",
                        FINGER_1: "dedo índice",
                        FINGER_2: "dedo corazón",
                        FINGER_3: "dedo anular",
                        FINGER_4: "dedo meñique",
                        KEY_1: "llave dorada con corona",
                        KEY_2: "llave dorada con alas",
                        KEY_3: "llave ornamentada oxidada",
                        KEY_4: "llave de latón con lazo",
                        KEY_5: "llave de hierro con corazón",
                        KEY_6: "llave de latón con trébol",
                        KEY_7: "llave plateada sencilla",
                        KEY_8: "llave plateada con 3 anillos",
                        KEY_9: "llave de acero de 2 lados",
                        KEY_10: "llave de hierro sencilla",
                        KEY_11: "llave de guardas de acero compleja",
                        KEY_12: "llave dorada ornamentada con corona",
                        KEY_13: "llave dorada con dos corazones",
                        KEY_14: "llave de guardas plateada redondeada",
                        KEY_15: "llave dorada con púas",
                        KEY_16: "llave de caballito de mar de latón",
                        KEY_17: "llave dorada sencilla",
                        KEY_18: "llave de latón con guardas complejas",
                        KEY_19: "llave dorada con corona en un corazón",
                        KEY_20: "llave de cobre con trébol",
                        KEY_21: "llave de latón con tres corazones",
                        KEY_22: "llave de latón sencilla con guardas complejas",
                        KEY_23: "llave dorada ornamentada con guardas ornamentadas",
                        KEY_24: "llave plateada con corona y guardas ornamentadas",
                        LOGO: "el logotipo de Trivia Murder Party 2",
                        SWORD_2: "una espada con una longitud de dos casillas",
                        SWORD_3: "una espada con una longitud de tres casillas",
                        SWORD_4: "una espada con una longitud de cuatro casillas"
                    },
                    CHOICES: {
                        CHOSEN: "Has escogido",
                        MADNESS: "¡No he perdido la cabeza!",
                        NONE: "nada de esto"
                    },
                    DIALING: {
                        BUSY: "NÚMERO OCUPADO",
                        CONNECTED: "CONECTADO",
                        WRONG_NUMBER: "NÚMERO EQUIVOCADO"
                    },
                    DROPPING: {
                        PROMPT: "Desliza tu ficha para elegir un sitio donde dejarla caer"
                    }
                },
                "es-XL": {
                    ALT: {
                        CHALICE_1: "cáliz de oro con líquido verde",
                        CHALICE_2: "cáliz de oro opaco",
                        CHALICE_3: "cáliz de mármol",
                        CHALICE_4: "cáliz de madera",
                        CHALICE_5: "cáliz de plata ornamentado",
                        CHALICE_6: "cáliz de piedra simple",
                        CHALICE_7: "cáliz oxidado",
                        CHALICE_8: "cáliz de calavera",
                        CHALICE_9: "taza del mejor jefe del mundo",
                        CHALICE_10: "vaso individual rojo",
                        CHALICE_11: "taza de análisis de orina",
                        CHALICE_12: "copa Tiki tropical",
                        GIFT_1: "regalo envuelto en arpillera con lazo negro",
                        GIFT_2: "regalo envuelto con lunares y lazo verdes",
                        GIFT_3: "regalo envuelto azul con lazo rojo",
                        GIFT_4: "regalo envuelto con lunares morados y lazo dorado",
                        GIFT_5: "regalo envuelto con rayas negras y lazo gris",
                        GIFT_6: "regalo envuelto con rayas y lazo azules",
                        GIFT_7: "regalo envuelto con rayas y lazo dorados",
                        GIFT_8: "regalo envuelto con lunares rojos y lazo plateado",
                        CHECKED_BOX: "casilla verificada",
                        UNCHECKED_BOX: "casilla no verificada",
                        FINGER_1: "dedo índice",
                        FINGER_2: "dedo medio",
                        FINGER_3: "dedo anular",
                        FINGER_4: "dedo meñique",
                        KEY_1: "llave de oro con corona",
                        KEY_2: "llave de oro con alas",
                        KEY_3: "llave ornamentada y oxidada",
                        KEY_4: "llave de latón con bucle",
                        KEY_5: "llave de hierro con corazón",
                        KEY_6: "llave de latón con trébol",
                        KEY_7: "llave de plata simple",
                        KEY_8: "llave de plata con 3 anillos",
                        KEY_9: "Llave de acero de 2 caras",
                        KEY_10: "llave de hierro simple",
                        KEY_11: "llave compleja de protección de acero",
                        KEY_12: "llave de oro ornamentada con corona",
                        KEY_13: "llave de oro con dos corazones",
                        KEY_14: "llave de protección de plata redonda",
                        KEY_15: "llave de oro con dientes de amor",
                        KEY_16: "llave de caballito de mar de latón",
                        KEY_17: "llave de oro simple",
                        KEY_18: "llave de latón con protección compleja",
                        KEY_19: "llave de oro con corona en forma de corazón",
                        KEY_20: "llave de cobre con trébol",
                        KEY_21: "llave de latón con tres corazones",
                        KEY_22: "llave simple de latón con protección compleja",
                        KEY_23: "llave de oro ornamentada con protección ornamentada",
                        KEY_24: "llave de plata con corona y protección ornamentada",
                        LOGO: "el logotipo de Trivia Murder Party 2",
                        SWORD_2: "una espada con una longitud de dos unidades de cuadrícula",
                        SWORD_3: "una espada con una longitud de tres unidades de cuadrícula",
                        SWORD_4: "una espada con una longitud de cuatro unidades de cuadrícula"
                    },
                    CHOICES: {
                        CHOSEN: "Has elegido",
                        MADNESS: "¡No estoy loco!",
                        NONE: "ninguna de estas"
                    },
                    DIALING: {
                        BUSY: "NÚMERO OCUPADO",
                        CONNECTED: "CONECTADO",
                        WRONG_NUMBER: "NÚMERO EQUIVOCADO"
                    },
                    DROPPING: {
                        PROMPT: "Desliza tu ficha para elegir un punto para soltarla"
                    }
                }
            };
            var l = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "choices"
                }, [s("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.prompt,
                        expression: "prompt"
                    }],
                    staticClass: "message prompt"
                }), e._v(" "), e.hasSubmitted ? s("div", {
                    staticClass: "chosen"
                }, [s("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "CHOICES.CHOSEN",
                        expression: "'CHOICES.CHOSEN'"
                    }]
                }), e._v(" "), s("br"), e._v(" "), e.selections.length ? s("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.selections,
                        expression: "selections"
                    }]
                }) : s("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "CHOICES.NONE",
                        expression: "'CHOICES.NONE'"
                    }]
                })]) : [s("div", {
                    class: e.player.category && -1 === ["fingers", "keys", "wires"].indexOf(e.player.category) ? "object-container" : "choice-container"
                }, ["Choices" === e.madness || "NowThatsWhatICallMadness" === e.madness ? e._l(10, (function(t) {
                    return s("div", {
                        key: "madness-" + t,
                        staticClass: "option-container"
                    }, [s("button", {
                        staticClass: "action choice",
                        attrs: {
                            disabled: !e.canSubmit
                        },
                        on: {
                            click: function(t) {
                                return e.onSelect(-1)
                            }
                        }
                    }, ["Choices" === e.madness ? s("span", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "CHOICES.MADNESS",
                            expression: "'CHOICES.MADNESS'"
                        }]
                    }) : "NowThatsWhatICallMadness" === e.madness ? s("span", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: e.makeLettersDisappear(e.scramble(String(e.$t("CHOICES.MADNESS")))),
                            expression: "makeLettersDisappear(scramble(String($t('CHOICES.MADNESS'))))"
                        }]
                    }) : e._e()]), e._v(" "), e.player.hasSubmit && e.buttonImages.uncheckedBox ? s("img", {
                        staticClass: "checkbox-image",
                        attrs: {
                            src: e.buttonImages.uncheckedBox.src,
                            alt: e.buttonImages.uncheckedBox.alt
                        }
                    }) : e._e()])
                })) : e._e(), e._v(" "), e._l(e.choices, (function(t, i) {
                    return s("div", {
                        key: "choice-" + i,
                        staticClass: "option-container"
                    }, [s("button", {
                        staticClass: "action choice",
                        class: e.generateChoiceClasses(i, t),
                        attrs: {
                            disabled: !e.canSubmit || t.disabled || t.isFingerCutOff
                        },
                        on: {
                            click: function(t) {
                                return e.onSelect(i)
                            }
                        }
                    }, [e.player.category && "wires" !== e.player.category ? e.buttonImages[t.optionType + t.objectIndex] ? s("img", {
                        staticClass: "button-image",
                        class: e.player.category,
                        attrs: {
                            src: e.buttonImages[t.optionType + t.objectIndex].src,
                            alt: e.buttonImages[t.optionType + t.objectIndex].alt
                        }
                    }) : e._e() : s("span", {
                        directives: [{
                            name: "bb",
                            rawName: "v-bb",
                            value: t.text,
                            expression: "choice.text"
                        }]
                    })]), e._v(" "), e.player.hasSubmit && e.buttonImages.checkedBox && e.buttonImages.uncheckedBox ? s("img", {
                        staticClass: "checkbox-image",
                        attrs: {
                            src: e.buttonImages[-1 !== e.selected.indexOf(i) ? "checkedBox" : "uncheckedBox"].src,
                            alt: e.buttonImages[-1 !== e.selected.indexOf(i) ? "checkedBox" : "uncheckedBox"].alt
                        }
                    }) : e._e()])
                }))], 2), e._v(" "), e.player.hasSubmit ? s("button", {
                    staticClass: "submit",
                    domProps: {
                        textContent: e._s(e.$t("ACTION.SUBMIT"))
                    },
                    on: {
                        click: e.onSubmit
                    }
                }) : e._e()]], 2)
            };
            l._withStripped = !0;
            var c = function(e, t, s, i) {
                return new(s || (s = Promise))((function(a, r) {
                    function n(e) {
                        try {
                            l(i.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function o(e) {
                        try {
                            l(i.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(n, o)
                    }
                    l((i = i.apply(e, t || [])).next())
                }))
            };
            const d = r().extend({
                props: {
                    madness: String,
                    player: Object
                },
                i18n: {
                    messages: o,
                    sharedMessages: n.s
                },
                bb: {
                    disappear: (e, t) => `<span class="disappear-${Math.floor(5*Math.random())}">${t}</span>`
                },
                data: () => ({
                    buttonImages: {},
                    hasSubmitted: !1,
                    isSubmitting: !1,
                    selected: []
                }),
                computed: {
                    canSubmit() {
                        return !this.isSubmitting && !this.hasSubmitted
                    },
                    choices() {
                        if (!this.madness) return this.player.choices;
                        switch (this.madness) {
                            case "BTTF":
                                return this.player.choices.map((e => Object.assign(Object.assign({}, e), {
                                    text: this.makeLettersDisappear(this.stripBBCode(e.text))
                                })));
                            case "NowThatsWhatICallMadness":
                                return this.player.choices.map((e => Object.assign(Object.assign({}, e), {
                                    text: this.makeLettersDisappear(this.scramble(this.stripBBCode(e.text)))
                                })));
                            case "Scramble":
                                return this.player.choices.map((e => Object.assign(Object.assign({}, e), {
                                    text: this.scramble(this.stripBBCode(e.text))
                                })));
                            default:
                                return this.player.choices
                        }
                    },
                    prompt() {
                        if (!this.madness) return this.player.prompt;
                        switch (this.madness) {
                            case "BTTF":
                                return this.makeLettersDisappear(this.stripBBCode(this.player.prompt));
                            case "NowThatsWhatICallMadness":
                                return this.makeLettersDisappear(this.scramble(this.stripBBCode(this.player.prompt)));
                            case "Scramble":
                                return this.scramble(this.stripBBCode(this.player.prompt));
                            default:
                                return this.player.prompt
                        }
                    },
                    selections() {
                        return this.player.choices.filter(((e, t) => this.selected.includes(t))).map((e => e.text)).join(", ")
                    }
                },
                watch: {
                    "player.prompt": function() {
                        this.selected = []
                    }
                },
                created() {
                    this.setButtonImages()
                },
                methods: {
                    generateChoiceClasses(e, t) {
                        const s = [];
                        return -1 !== this.selected.indexOf(e) && s.push("selected"), t.isFingerCutOff && s.push(`finger-cut-${e+1}`), t.controllerClass && s.push(t.controllerClass), s
                    },
                    makeLettersDisappear(e) {
                        let t = "";
                        for (let s = 0; s < e.length; s++) t += `[disappear]${e[s]}[/disappear]`;
                        return t
                    },
                    scramble(e) {
                        const t = e.replace(/\s/gi, "").split("");
                        for (let e = t.length; e > 0; e--) {
                            const s = Math.floor(Math.random() * (e + 1)),
                                i = t[e];
                            t[e] = t[s], t[s] = i
                        }
                        for (let s = 0; s < e.length; s++) " " === e.charAt(s) && t.splice(s, 0, " ");
                        return t.join("")
                    },
                    stripBBCode: e => e.replace(/\[\/?(?:b|i|u|url|quote|code|img|color|size)*?.*?\]/gim, ""),
                    onSelect(e) {
                        return c(this, void 0, void 0, (function*() {
                            const t = this.selected.indexOf(e);
                            let s;
                            this.player.hasSubmit ? -1 === t ? (this.selected.push(e), s = "select") : (this.selected.splice(t, 1), s = "unselect") : (this.selected.push(e), s = "submit"), this.isSubmitting = !0;
                            try {
                                "player" === this.$ecast.role ? yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: s,
                                    choice: e
                                }): "audience" === this.$ecast.role && "submit" === s && (yield this.$ecast.incrementCountGroupCounter(this.player.countGroupKey, String(e))), this.player.category && (this.hasSubmitted = !0)
                            } catch (e) {
                                this.$handleEcastError(e)
                            } finally {
                                this.isSubmitting = !1
                            }
                        }))
                    },
                    onSubmit() {
                        return c(this, void 0, void 0, (function*() {
                            this.isSubmitting = !0;
                            try {
                                if ("player" === this.$ecast.role) yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "submit"
                                });
                                else if ("audience" === this.$ecast.role) {
                                    const e = this.selected.sort(((e, t) => e - t)).join();
                                    yield this.$ecast.incrementCountGroupCounter(this.player.countGroupKey, e)
                                }
                                this.hasSubmitted = !0
                            } catch (e) {
                                this.$handleEcastError(e)
                            } finally {
                                this.isSubmitting = !1
                            }
                        }))
                    },
                    setButtonImages() {
                        return c(this, void 0, void 0, (function*() {
                            this.buttonImages = {
                                checkedBox: {
                                    alt: this.$t("ALT.CHECKED_BOX"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 55850, 17))).default
                                },
                                uncheckedBox: {
                                    alt: this.$t("ALT.UNCHECKED_BOX"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 11092, 17))).default
                                },
                                chalice0: {
                                    alt: this.$t("ALT.CHALICE_1"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 43195, 17))).default
                                },
                                chalice1: {
                                    alt: this.$t("ALT.CHALICE_2"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 85567, 17))).default
                                },
                                chalice2: {
                                    alt: this.$t("ALT.CHALICE_3"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 74494, 17))).default
                                },
                                chalice3: {
                                    alt: this.$t("ALT.CHALICE_4"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 85781, 17))).default
                                },
                                chalice4: {
                                    alt: this.$t("ALT.CHALICE_5"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 76140, 17))).default
                                },
                                chalice5: {
                                    alt: this.$t("ALT.CHALICE_6"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 89698, 17))).default
                                },
                                chalice6: {
                                    alt: this.$t("ALT.CHALICE_7"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 13241, 17))).default
                                },
                                chalice7: {
                                    alt: this.$t("ALT.CHALICE_8"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 92491, 17))).default
                                },
                                chalice8: {
                                    alt: this.$t("ALT.CHALICE_9"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 16273, 17))).default
                                },
                                chalice9: {
                                    alt: this.$t("ALT.CHALICE_10"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 40112, 17))).default
                                },
                                chalice10: {
                                    alt: this.$t("ALT.CHALICE_11"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 76986, 17))).default
                                },
                                chalice11: {
                                    alt: this.$t("ALT.CHALICE_12"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 25424, 17))).default
                                },
                                finger0: {
                                    alt: this.$t("ALT.FINGER_1"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 37932, 17))).default
                                },
                                finger1: {
                                    alt: this.$t("ALT.FINGER_2"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 28515, 17))).default
                                },
                                finger2: {
                                    alt: this.$t("ALT.FINGER_3"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 17949, 17))).default
                                },
                                finger3: {
                                    alt: this.$t("ALT.FINGER_4"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 14246, 17))).default
                                },
                                gift0: {
                                    alt: this.$t("ALT.GIFT_1"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 56982, 17))).default
                                },
                                gift1: {
                                    alt: this.$t("ALT.GIFT_2"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 19254, 17))).default
                                },
                                gift2: {
                                    alt: this.$t("ALT.GIFT_3"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 16359, 17))).default
                                },
                                gift3: {
                                    alt: this.$t("ALT.GIFT_4"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 27780, 17))).default
                                },
                                gift4: {
                                    alt: this.$t("ALT.GIFT_5"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 30202, 17))).default
                                },
                                gift5: {
                                    alt: this.$t("ALT.GIFT_6"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 10618, 17))).default
                                },
                                gift6: {
                                    alt: this.$t("ALT.GIFT_7"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 60575, 17))).default
                                },
                                gift7: {
                                    alt: this.$t("ALT.GIFT_8"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 33331, 17))).default
                                },
                                key0: {
                                    alt: this.$t("ALT.KEY_1"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 22650, 17))).default
                                },
                                key1: {
                                    alt: this.$t("ALT.KEY_2"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 60978, 17))).default
                                },
                                key2: {
                                    alt: this.$t("ALT.KEY_3"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 38872, 17))).default
                                },
                                key3: {
                                    alt: this.$t("ALT.KEY_4"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 93435, 17))).default
                                },
                                key4: {
                                    alt: this.$t("ALT.KEY_5"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 55109, 17))).default
                                },
                                key5: {
                                    alt: this.$t("ALT.KEY_6"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 54855, 17))).default
                                },
                                key6: {
                                    alt: this.$t("ALT.KEY_7"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 20863, 17))).default
                                },
                                key7: {
                                    alt: this.$t("ALT.KEY_8"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 59685, 17))).default
                                },
                                key8: {
                                    alt: this.$t("ALT.KEY_9"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 1861, 17))).default
                                },
                                key9: {
                                    alt: this.$t("ALT.KEY_10"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 51930, 17))).default
                                },
                                key10: {
                                    alt: this.$t("ALT.KEY_11"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 70848, 17))).default
                                },
                                key11: {
                                    alt: this.$t("ALT.KEY_12"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 38483, 17))).default
                                },
                                key12: {
                                    alt: this.$t("ALT.KEY_13"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 31298, 17))).default
                                },
                                key13: {
                                    alt: this.$t("ALT.KEY_14"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 21968, 17))).default
                                },
                                key14: {
                                    alt: this.$t("ALT.KEY_15"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 3733, 17))).default
                                },
                                key15: {
                                    alt: this.$t("ALT.KEY_16"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 4513, 17))).default
                                },
                                key16: {
                                    alt: this.$t("ALT.KEY_17"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 69856, 17))).default
                                },
                                key17: {
                                    alt: this.$t("ALT.KEY_18"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 12408, 17))).default
                                },
                                key18: {
                                    alt: this.$t("ALT.KEY_19"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 26852, 17))).default
                                },
                                key19: {
                                    alt: this.$t("ALT.KEY_20"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 62308, 17))).default
                                },
                                key20: {
                                    alt: this.$t("ALT.KEY_21"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 12290, 17))).default
                                },
                                key21: {
                                    alt: this.$t("ALT.KEY_22"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 64600, 17))).default
                                },
                                key22: {
                                    alt: this.$t("ALT.KEY_23"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 45082, 17))).default
                                },
                                key23: {
                                    alt: this.$t("ALT.KEY_24"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 94691, 17))).default
                                }
                            }
                        }))
                    }
                }
            });
            var h = s(51900),
                p = (0, h.Z)(d, l, [], !1, null, "72482f88", null);
            p.options.__file = "src/games/tjsp/triviadeath2/views/Choices.vue";
            const u = p.exports;
            var g = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "dialing"
                }, [s("canvas", {
                    staticClass: "canvas phone",
                    attrs: {
                        id: "phone",
                        width: "825",
                        height: "972"
                    }
                }), e._v(" "), s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.RESET",
                        expression: "'ACTION.RESET'"
                    }],
                    staticClass: "action reset",
                    attrs: {
                        id: "reset"
                    },
                    on: {
                        click: e.onReset
                    }
                })])
            };
            g._withStripped = !0;
            var m = s(44442),
                f = function(e, t, s, i) {
                    return new(s || (s = Promise))((function(a, r) {
                        function n(e) {
                            try {
                                l(i.next(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function o(e) {
                            try {
                                l(i.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                e(t)
                            }))).then(n, o)
                        }
                        l((i = i.apply(e, t || [])).next())
                    }))
                };
            const v = [0, .178, .424, .608, .735, .824, .888, .934, .965, .986, .997, 1, .997, .988, .973, .951, .921, .883, .836, .779, .712, .632, .54, .436, .322, .201, .087, 0, .015, .032, .049, .066, .083, .098, .112, .125, .136, .145, .151, .154, .151, .144, .134, .121, .106, .09, .072, .054, .035, .017, 0],
                _ = function(e) {
                    return e * (Math.PI / 180)
                },
                E = r().extend({
                    props: {
                        player: Object
                    },
                    i18n: {
                        messages: o
                    },
                    data: () => ({
                        status: null,
                        dialedLabel: {
                            id: "dialedLabel",
                            y: 75,
                            dialed: "",
                            status: "",
                            flash: !0,
                            flashFrames: 0,
                            update(e) {
                                this.status ? (this.flashFrames += -1, this.flashFrames < 0 && (this.flash = !this.flash, this.flashFrames = 20)) : this.flash = !1, this.advance(e)
                            },
                            render() {
                                if (this.flash) return;
                                const e = this.status || this.dialed,
                                    t = (0, m.Sy)();
                                t.save(), t.font = "48px nokian11regular", t.fillStyle = "#6b8d45", t.textAlign = "center", t.fillText(e, .5 * (0, m.o_)().width + 1, this.y + 2), t.fillStyle = "#1c3c29", t.textAlign = "center", t.fillText(e, .5 * (0, m.o_)().width, this.y), t.restore()
                            }
                        },
                        fingerStop: {
                            anchor: {
                                x: .5,
                                y: .5
                            },
                            height: 700,
                            width: 700,
                            x: 412,
                            y: 485,
                            color: "gray",
                            image: null,
                            update(e) {
                                return f(this, void 0, void 0, (function*() {
                                    if (!this.image) {
                                        const e = new Image;
                                        e.src = (yield Promise.resolve().then(s.t.bind(s, 37787, 17))).default, this.image = e
                                    }
                                    this.advance(e)
                                }))
                            }
                        },
                        fingerWheel: {
                            id: "fingerWheel",
                            anchor: {
                                x: .5,
                                y: .5
                            },
                            height: 700,
                            width: 700,
                            x: 412,
                            y: 485,
                            color: "red",
                            currentDigit: 0,
                            isSelected: !1,
                            image: null,
                            maxRotation: 0,
                            pointAngle: 0,
                            rotation: 0,
                            rotationSpeed: _(300) / 60,
                            startAngle: 0,
                            bounceFrame: 0,
                            onDown() {
                                if (this.rotation > 0) return;
                                if (this.bounceFrame > 0) return;
                                const e = {
                                    x: m.cx.x - this.x,
                                    y: m.cx.y - this.y
                                };
                                let t = Math.atan2(e.y, e.x);
                                t = t < 0 ? Math.abs(t) : 2 * Math.PI - t;
                                const s = Math.floor(t / _(30));
                                0 !== s && 11 !== s && (this.startAngle = t, this.maxRotation = (s + 1) * _(30), this.currentDigit = s, this.isSelected = !0)
                            },
                            onUp() {
                                if (!this.isSelected) return;
                                this.isSelected = !1;
                                let e = Math.floor(this.rotation / _(30));
                                0 === e && (this.bounceFrame = v.length - 1), 0 !== e && 11 !== e && (10 === e && (e = 0), this.dialNumber(e))
                            },
                            dialNumber(e) {},
                            update(e) {
                                return f(this, void 0, void 0, (function*() {
                                    if (!this.image) {
                                        const e = new Image;
                                        e.src = (yield Promise.resolve().then(s.t.bind(s, 30210, 17))).default, this.image = e
                                    }
                                    if (this.isSelected) {
                                        const e = {
                                            x: m.cx.x - this.x,
                                            y: m.cx.y - this.y
                                        };
                                        let t = Math.atan2(e.y, e.x);
                                        t = t < 0 ? Math.abs(t) : 2 * Math.PI - t, this.pointAngle = t;
                                        let s = this.startAngle - t;
                                        s < 0 && (s += 2 * Math.PI), s > 0 && s < this.maxRotation && (this.rotation = s), (0, m.tN)("left") || this.onUp()
                                    }
                                    if (this.isSelected || (this.rotation -= this.rotationSpeed, this.rotation = Math.max(0, this.rotation)), this.bounceFrame > 0) {
                                        const e = v.length - 1 - this.bounceFrame;
                                        this.rotation = _(13 * v[e]), this.bounceFrame += -1
                                    }
                                    this.advance(e)
                                }))
                            }
                        },
                        numberPlate: {
                            anchor: {
                                x: .5,
                                y: .5
                            },
                            height: 972,
                            width: 825,
                            x: 412,
                            y: 486,
                            color: "#333333",
                            image: null,
                            update(e) {
                                return f(this, void 0, void 0, (function*() {
                                    if (!this.image) {
                                        const e = new Image;
                                        e.src = (yield Promise.resolve().then(s.t.bind(s, 25891, 17))).default, this.image = e
                                    }
                                    this.advance(e)
                                }))
                            }
                        },
                        gameLoop: null,
                        sprites: []
                    }),
                    watch: {
                        "player.dialed": function(e) {
                            this.setDialedLabel(e)
                        }
                    },
                    mounted() {
                        (0, m.S1)("phone"), (0, m.hg)(), this.gameLoop = (0, m.DX)({
                            fps: 60,
                            update: e => {
                                this.sprites.forEach((t => t.update(e))), this.sprites = this.sprites.filter((e => e.isAlive()))
                            },
                            render: () => {
                                this.sprites.forEach((e => e.render()))
                            }
                        });
                        const e = (0, m.jy)(this.numberPlate);
                        this.sprites.push(e);
                        const t = (0, m.jy)(this.fingerWheel);
                        t.dialNumber = e => {
                            const t = [],
                                s = Math.min(e, 10);
                            for (let e = 0; e < s && !(e > 10); e++) t.push(20), t.push(120);
                            this.$vibrate(t), this.onDialed(e), this.sprites.find((e => "dialedLabel" === e.id)).dialed += e
                        }, (0, m.j)(t), this.sprites.push(t);
                        const s = (0, m.jy)(this.fingerStop);
                        this.sprites.push(s);
                        const i = (0, m.jy)(this.dialedLabel);
                        this.sprites.push(i), this.gameLoop.start(), (0, m.o_)().addEventListener("mouseleave", (e => {
                            t.onUp(e)
                        })), this.setDialedLabel(this.player.dialed)
                    },
                    beforeDestroy() {
                        var e, t;
                        const s = this.sprites.findIndex((e => "fingerWheel" === e.id));
                        s >= 0 && (0, m.Zw)(this.sprites[s]);
                        for (let e = 0; e < this.sprites.length; e++) this.sprites[e].ttl = 0;
                        null === (e = this.gameLoop) || void 0 === e || e.update(1 / 60), null === (t = this.gameLoop) || void 0 === t || t.stop()
                    },
                    methods: {
                        setDialedLabel(e) {
                            const t = this.sprites.find((e => "dialedLabel" === e.id));
                            if (t) switch (t.dialed = e, this.player.status) {
                                case "busy":
                                    t.status = this.$t("DIALING.BUSY");
                                    break;
                                case "connected":
                                    t.status = this.$t("DIALING.CONNECTED");
                                    break;
                                case "wrongnumber":
                                    t.status = this.$t("DIALING.WRONG_NUMBER");
                                    break;
                                default:
                                    t.status = this.player.status
                            }
                        },
                        onDialed(e) {
                            return f(this, void 0, void 0, (function*() {
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "dial",
                                        num: e
                                    })
                                } catch (e) {
                                    this.$handleEcastError(e)
                                }
                            }))
                        },
                        onReset() {
                            return f(this, void 0, void 0, (function*() {
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "hangup"
                                    })
                                } catch (e) {
                                    this.$handleEcastError(e)
                                }
                            }))
                        }
                    }
                });
            var y = (0, h.Z)(E, g, [], !1, null, "6373af08", null);
            y.options.__file = "src/games/tjsp/triviadeath2/views/Dialing.vue";
            const b = y.exports;
            var C = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "drawing"
                }, [s("div", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.prompt,
                        expression: "player.prompt"
                    }],
                    staticClass: "message prompt"
                }), e._v(" "), s("div", {
                    attrs: {
                        id: "stage"
                    }
                }, [s("div", {
                    class: e.player.category,
                    attrs: {
                        id: "doodle"
                    }
                }, [s("BaseDoodle", {
                    attrs: {
                        "canvas-options": {
                            color: e.player.doodle.colors && e.player.doodle.colors[0],
                            weight: e.player.doodle.weights && e.player.doodle.weights[0]
                        },
                        player: e.player,
                        "hide-submit": "",
                        "hide-undo": ""
                    }
                })], 1)])])
            };
            C._withStripped = !0;
            var x = s(3317);
            const I = r().extend({
                components: {
                    BaseDoodle: x.Z
                },
                props: {
                    player: Object
                },
                i18n: {
                    messages: o
                },
                data: () => ({
                    isSubmitting: !1
                })
            });
            var w = (0, h.Z)(I, C, [], !1, null, null, null);
            w.options.__file = "src/games/tjsp/triviadeath2/views/Drawing.vue";
            const L = w.exports;
            var K = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "dropping"
                }, [s("span", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "DROPPING.PROMPT",
                        expression: "'DROPPING.PROMPT'"
                    }],
                    staticClass: "message prompt"
                }), e._v(" "), s("canvas", {
                    attrs: {
                        id: "drop",
                        width: "640",
                        height: "640"
                    }
                })])
            };
            K._withStripped = !0;
            var A = function(e, t, s, i) {
                return new(s || (s = Promise))((function(a, r) {
                    function n(e) {
                        try {
                            l(i.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function o(e) {
                        try {
                            l(i.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(n, o)
                    }
                    l((i = i.apply(e, t || [])).next())
                }))
            };
            const S = 128,
                T = r().extend({
                    props: {
                        color: String,
                        player: Object
                    },
                    i18n: {
                        messages: o
                    },
                    data: () => ({
                        chipImages: {},
                        isSubmitting: !1,
                        percent: 0,
                        bar: {
                            anchor: {
                                x: .5,
                                y: .5
                            },
                            width: S,
                            height: 20,
                            color: "black"
                        },
                        puck: {
                            anchor: {
                                x: .5,
                                y: .5
                            },
                            height: S,
                            width: S,
                            x: 320,
                            y: 64,
                            ddy: 0,
                            color: "white",
                            image: new Image,
                            isDropped: !1,
                            isSelected: !1,
                            dropped() {},
                            onUp() {
                                this.isSelected && (this.isSelected = !1, this.ddy = 540, this.isDropped = !0, this.dropped())
                            },
                            render() {
                                if (this.draw(), !this.isDropped) {
                                    const e = (0, m.Sy)();
                                    e.save(), e.translate(this.x, this.y + 64), e.fillStyle = this.color, e.beginPath(), e.moveTo(-1 / 6 * this.width, 0), e.lineTo(1 / 6 * this.width, 0), e.lineTo(0, 1 / 6 * S), e.fill(), e.restore()
                                }
                            },
                            update(e) {
                                this.isSelected && !(0, m.tN)("left") && this.onUp(), !this.isDropped && (0, m.tN)("left") && (this.x = Math.max(64, Math.min((0, m.o_)().width - 64, m.cx.x)), this.isSelected = !0), this.advance(e)
                            }
                        },
                        gameLoop: null,
                        sprites: []
                    }),
                    mounted() {
                        return A(this, void 0, void 0, (function*() {
                            yield this.setChipImages(), (0, m.S1)("drop"), (0, m.hg)(), this.gameLoop = (0, m.DX)({
                                fps: 60,
                                update: e => {
                                    this.sprites.forEach((t => t.update(e))), this.sprites = this.sprites.filter((e => e.isAlive()))
                                },
                                render: () => {
                                    this.sprites.forEach((e => e.render()))
                                }
                            });
                            for (let e = 0; e < this.sprites.length; e++) this.sprites[e].ttl = 0;
                            const e = (0, m.jy)(this.bar);
                            e.x = .5 * (0, m.o_)().width, e.y = 64, e.width = (0, m.o_)().width - S, this.sprites.push(e), this.puck.image.src = this.chipImages[this.color];
                            const t = (0, m.jy)(this.puck);
                            (0, m.o_)().addEventListener("mouseleave", this.puck.onUp), t.dropped = () => {
                                const e = (0, m.o_)().width - 64 - 64;
                                this.percent = Math.max(0, Math.min(100, Math.floor((t.x - 64) / e * 100))), this.onDrop()
                            }, this.sprites.push(t), this.gameLoop.start()
                        }))
                    },
                    beforeDestroy() {
                        var e, t;
                        for (let e = 0; e < this.sprites.length; e++) this.sprites[e].ttl = 0;
                        null === (e = this.gameLoop) || void 0 === e || e.update(1 / 60), null === (t = this.gameLoop) || void 0 === t || t.stop()
                    },
                    methods: {
                        setChipImages() {
                            return A(this, void 0, void 0, (function*() {
                                this.chipImages = {
                                    blue: (yield Promise.resolve().then(s.t.bind(s, 50241, 17))).default,
                                    gray: (yield Promise.resolve().then(s.t.bind(s, 68969, 17))).default,
                                    green: (yield Promise.resolve().then(s.t.bind(s, 51327, 17))).default,
                                    orange: (yield Promise.resolve().then(s.t.bind(s, 82732, 17))).default,
                                    pink: (yield Promise.resolve().then(s.t.bind(s, 83600, 17))).default,
                                    purple: (yield Promise.resolve().then(s.t.bind(s, 30336, 17))).default,
                                    red: (yield Promise.resolve().then(s.t.bind(s, 48507, 17))).default,
                                    yellow: (yield Promise.resolve().then(s.t.bind(s, 70098, 17))).default
                                }
                            }))
                        },
                        onDrop() {
                            return A(this, void 0, void 0, (function*() {
                                this.isSubmitting = !0;
                                try {
                                    yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "drop",
                                        value: this.percent
                                    })
                                } catch (e) {
                                    this.$handleEcastError(e)
                                }
                            }))
                        }
                    }
                });
            var O = (0, h.Z)(T, K, [], !1, null, "5c80288a", null);
            O.options.__file = "src/games/tjsp/triviadeath2/views/Dropping.vue";
            const N = O.exports;
            var Y = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "grid-selecting"
                }, [i("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.prompt,
                        expression: "player.prompt"
                    }],
                    staticClass: "message prompt"
                }), e._v(" "), e._l(e.player.grid, (function(t, a) {
                    return i("div", {
                        key: "row-" + a,
                        staticClass: "x-row"
                    }, e._l(t, (function(t, r) {
                        return i("div", {
                            key: "item-" + r + "-" + a,
                            staticClass: "y-column"
                        }, ["disabled" === t.type ? i("div", {
                            staticClass: "spacer"
                        }) : "hidden" !== t.type ? i("button", {
                            staticClass: "action grid-button",
                            class: e.getButtonClass(r, a, t.type),
                            attrs: {
                                disabled: e.isSubmitting
                            },
                            on: {
                                click: function(t) {
                                    return e.onSubmit(r, a)
                                }
                            }
                        }, ["arrow" === t.type ? i("svg", {
                            directives: [{
                                name: "svg",
                                rawName: "v-svg",
                                value: s(56108),
                                expression: "require('../assets/skewers/arrow.inline.svg')"
                            }],
                            staticClass: "arrow-image"
                        }) : e._e()]) : e._e()])
                    })), 0)
                })), e._v(" "), i("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.error,
                        expression: "player.error"
                    }],
                    staticClass: "message error"
                }), e._v(" "), e.player.swordLength && e.images["swordLength" + e.player.swordLength] ? i("img", {
                    staticClass: "sword-image",
                    attrs: {
                        src: e.images["swordLength" + e.player.swordLength].src,
                        alt: e.images["swordLength" + e.player.swordLength].alt
                    }
                }) : e._e()], 2)
            };
            Y._withStripped = !0;
            var k = function(e, t, s, i) {
                return new(s || (s = Promise))((function(a, r) {
                    function n(e) {
                        try {
                            l(i.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function o(e) {
                        try {
                            l(i.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(n, o)
                    }
                    l((i = i.apply(e, t || [])).next())
                }))
            };
            const G = r().extend({
                props: {
                    player: Object
                },
                data: () => ({
                    images: {},
                    isSubmitting: !1
                }),
                created() {
                    this.setImages()
                },
                methods: {
                    setImages() {
                        return k(this, void 0, void 0, (function*() {
                            this.images = {
                                swordLength2: {
                                    alt: this.$t("ALT.SWORD_2"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 15136, 17))).default
                                },
                                swordLength3: {
                                    alt: this.$t("ALT.SWORD_3"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 22720, 17))).default
                                },
                                swordLength4: {
                                    alt: this.$t("ALT.SWORD_4"),
                                    src: (yield Promise.resolve().then(s.t.bind(s, 10134, 17))).default
                                }
                            }
                        }))
                    },
                    getButtonClass(e, t, s) {
                        if ("arrow" === s) {
                            if (0 !== t && 0 === e) return [s, "right"];
                            if (0 !== t && 0 !== e) return [s, "left"]
                        }
                        return [s]
                    },
                    onSubmit(e, t) {
                        return k(this, void 0, void 0, (function*() {
                            this.isSubmitting = !0;
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "select",
                                    x: e,
                                    y: t
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            } finally {
                                this.isSubmitting = !1
                            }
                        }))
                    }
                }
            });
            var D = (0, h.Z)(G, Y, [], !1, null, "36c9dfd6", null);
            D.options.__file = "src/games/tjsp/triviadeath2/views/GridSelecting.vue";
            const P = D.exports;
            var H = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "lobby"
                }, [s("LobbyActions", {
                    attrs: {
                        player: e.player
                    }
                })], 1)
            };
            H._withStripped = !0;
            var R = s(13494);
            const $ = r().extend({
                components: {
                    LobbyActions: R.Z
                },
                props: {
                    player: Object
                }
            });
            var F = (0, h.Z)($, H, [], !1, null, "2f536c28", null);
            F.options.__file = "src/games/tjsp/triviadeath2/views/Lobby.vue";
            const M = F.exports;
            var B = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "post-game"
                }, [s("PostGameActions", {
                    attrs: {
                        player: e.player
                    }
                }), e._v(" "), s("GalleryLink", {
                    attrs: {
                        artifact: e.artifact
                    }
                })], 1)
            };
            B._withStripped = !0;
            var j = s(56623),
                z = s(83933);
            const U = r().extend({
                components: {
                    GalleryLink: j.Z,
                    PostGameActions: z.Z
                },
                props: {
                    artifact: Object,
                    player: Object
                }
            });
            var W = (0, h.Z)(U, B, [], !1, null, "458a030c", null);
            W.options.__file = "src/games/tjsp/triviadeath2/views/PostGame.vue";
            const Z = W.exports;
            var X = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "scratching"
                }, [s("canvas", {
                    style: {
                        pointerEvents: e.isMarkedForDeath ? "none" : "auto"
                    },
                    attrs: {
                        id: "scratch",
                        width: "640",
                        height: "880"
                    }
                })])
            };
            X._withStripped = !0;
            var q = function(e, t, s, i) {
                return new(s || (s = Promise))((function(a, r) {
                    function n(e) {
                        try {
                            l(i.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function o(e) {
                        try {
                            l(i.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                            e(t)
                        }))).then(n, o)
                    }
                    l((i = i.apply(e, t || [])).next())
                }))
            };
            const V = r().extend({
                props: {
                    player: Object
                },
                i18n: {
                    messages: o
                },
                data: () => ({
                    scratchBox: {
                        height: 126,
                        width: 126,
                        x: 0,
                        y: 0,
                        color: "gray",
                        imageThickness: 0,
                        lines: null,
                        thickness: 10,
                        hiddenCanvas: document.createElement("canvas"),
                        failImage: null,
                        successImage: null,
                        totalDistance: 0,
                        revealDistance: 400,
                        index: 0,
                        isDrawing: !1,
                        isRevealed: !1,
                        onOver() {
                            if (this.isDrawing && (0, m.gr)(this) && this.lines) {
                                const e = this.lines[this.lines.length - 1];
                                if (!e) return;
                                const t = e[e.length - 1],
                                    s = {
                                        x: m.cx.x - this.x,
                                        y: m.cx.y - this.y
                                    };
                                e.push(s);
                                const i = {
                                    x: s.x - t.x,
                                    y: s.y - t.y
                                };
                                this.totalDistance += Math.sqrt(i.x * i.x + i.y * i.y), !this.isRevealed && this.totalDistance > this.revealDistance && (this.onReveal(this.index), this.isRevealed = !0)
                            }
                        },
                        onReveal(e) {},
                        render() {
                            if (!this.hiddenCanvas.width) return;
                            const e = this.hiddenCanvas.getContext("2d");
                            e && (e.clearRect(0, 0, this.hiddenCanvas.width, this.hiddenCanvas.height), e.save(), this.lines && (this.isRevealed && (e.globalCompositeOperation = "source-over", e.strokeStyle = "#bbbbbb", e.lineWidth = this.imageThickness, this.lines.forEach((t => {
                                e.beginPath(), e.moveTo(t[0].x, t[0].y), t.forEach((t => {
                                    e.lineTo(t.x, t.y)
                                })), e.stroke()
                            })), e.globalCompositeOperation = "source-in", "red" === this.color && this.failImage ? e.drawImage(this.failImage, 0, 0, this.width, this.height) : "green" === this.color && this.successImage && e.drawImage(this.successImage, 0, 0, this.width, this.height)), e.globalCompositeOperation = "destination-over", e.strokeStyle = "#bbbbbb", e.lineWidth = this.thickness, this.lines.forEach((t => {
                                e.beginPath(), e.moveTo(t[0].x, t[0].y), t.forEach((t => {
                                    e.lineTo(t.x, t.y)
                                })), e.stroke()
                            }))), e.restore(), (0, m.Sy)().drawImage(this.hiddenCanvas, this.x, this.y))
                        },
                        update() {
                            return q(this, void 0, void 0, (function*() {
                                if (this.lines || (this.lines = []), this.hiddenCanvas.width || (this.hiddenCanvas.width = this.width, this.hiddenCanvas.height = this.height), !this.successImage) {
                                    const e = new Image;
                                    e.src = (yield Promise.resolve().then(s.t.bind(s, 34372, 17))).default, this.successImage = e
                                }
                                if (!this.failImage) {
                                    const e = new Image;
                                    e.src = (yield Promise.resolve().then(s.t.bind(s, 18706, 17))).default, this.failImage = e
                                }
                                this.isRevealed && (this.imageThickness = Math.min(this.imageThickness + 10 / 60, 2 * this.width)), this.isDrawing = (0, m.tN)("left"), this.isDrawing && (0, m.gr)(this) && this.lines.push([{
                                    x: m.cx.x - this.x,
                                    y: m.cx.y - this.y
                                }])
                            }))
                        }
                    },
                    gameLoop: null,
                    sprites: []
                }),
                computed: {
                    isMarkedForDeath() {
                        for (let e = 0; e < this.player.choices.length; e++) {
                            const t = this.sprites.find((t => t.index === e));
                            if ((null == t ? void 0 : t.isRevealed) && "red" === (null == t ? void 0 : t.color)) return !0
                        }
                        return !1
                    }
                },
                watch: {
                    "player.choices": function() {
                        this.setSpriteColors()
                    }
                },
                mounted() {
                    (0, m.S1)("scratch"), (0, m.hg)(), this.gameLoop = (0, m.DX)({
                        fps: 60,
                        update: e => {
                            this.sprites.forEach((t => t.update(e))), this.sprites = this.sprites.filter((e => e.isAlive()))
                        },
                        render: () => {
                            this.sprites.forEach((e => e.render()))
                        }
                    });
                    for (let e = 0; e < 3; e++)
                        for (let t = 0; t < 3; t++) {
                            const s = (0, m.jy)(this.scratchBox);
                            s.x = 117 + t * (s.width + 14), s.y = 372 + e * (s.height + 14), s.index = 3 * e + t, s.onReveal = () => {
                                this.onReveal(s.index)
                            }, (0, m.j)(s), this.sprites.push(s)
                        }
                    this.setSpriteColors(), this.gameLoop.start()
                },
                beforeDestroy() {
                    var e, t;
                    for (let e = 0; e < this.sprites.length; e++)(0, m.Zw)(this.sprites[e]), this.sprites[e].ttl = 0;
                    null === (e = this.gameLoop) || void 0 === e || e.update(1 / 60), null === (t = this.gameLoop) || void 0 === t || t.stop()
                },
                methods: {
                    setSpriteColors() {
                        this.player.choices.forEach(((e, t) => {
                            const s = this.sprites.find((e => e.index === t));
                            s && (s.color = e.color)
                        }))
                    },
                    onReveal(e) {
                        return q(this, void 0, void 0, (function*() {
                            try {
                                yield this.$ecast.updateObject(this.player.responseKey, {
                                    action: "scratch",
                                    index: e
                                })
                            } catch (e) {
                                this.$handleEcastError(e)
                            }
                        }))
                    }
                }
            });
            var Q = (0, h.Z)(V, X, [], !1, null, "80719cfc", null);
            Q.options.__file = "src/games/tjsp/triviadeath2/views/Scratching.vue";
            const J = Q.exports;
            var ee = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("div", {
                        staticClass: "waiting"
                    }, [e._m(0), e._v(" "), s("GalleryLink", {
                        attrs: {
                            artifact: e.artifact
                        }
                    })], 1)
                },
                te = [function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "logo"
                    }, [t("img", {
                        attrs: {
                            src: s(70581),
                            alt: "logo"
                        }
                    })])
                }];
            ee._withStripped = !0;
            const se = r().extend({
                components: {
                    GalleryLink: j.Z
                },
                props: {
                    artifact: Object,
                    player: Object
                },
                i18n: {
                    messages: o
                }
            });
            var ie = (0, h.Z)(se, ee, te, !1, null, "a1636d3a", null);
            ie.options.__file = "src/games/tjsp/triviadeath2/views/Waiting.vue";
            const ae = ie.exports;
            var re = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "writing"
                }, [s("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.player.prompt,
                        expression: "player.prompt"
                    }],
                    staticClass: "message prompt"
                }), e._v(" "), s("form", {
                    on: {
                        submit: function(t) {
                            return t.preventDefault(), e.onSubmit.apply(null, arguments)
                        }
                    }
                }, ["password" === e.player.type ? s("div", {
                    staticClass: "hint-wrapper"
                }, e._l(e.player.hints, (function(t, i) {
                    return s("div", {
                        key: "hintgroup-" + i,
                        staticClass: "password-hint"
                    }, e._l(t, (function(e, t) {
                        return s("span", {
                            directives: [{
                                name: "bb",
                                rawName: "v-bb",
                                value: e,
                                expression: "hintElement"
                            }],
                            key: "hint-" + t,
                            staticClass: "hint-element",
                            class: e && "" !== e ? "active" : "inactive"
                        })
                    })), 0)
                })), 0) : e._e(), e._v(" "), "donation" === e.player.type ? s("Input", {
                    staticClass: "player-input",
                    attrs: {
                        "aria-label": "input amount to donate",
                        min: "0",
                        max: "500",
                        placeholder: e.player.placeholder,
                        type: "number"
                    },
                    on: {
                        input: e.onInput
                    },
                    model: {
                        value: e.currentText,
                        callback: function(t) {
                            e.currentText = t
                        },
                        expression: "currentText"
                    }
                }) : s("TextArea", {
                    ref: "textarea",
                    staticClass: "player-input",
                    attrs: {
                        "aria-label": "text input",
                        maxlength: e.player.maxLength,
                        placeholder: e.player.placeholder,
                        rows: "dictation" === e.player.type ? 3 : 1
                    },
                    on: {
                        input: e.onInput,
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), e.onSubmit.apply(null, arguments))
                        }
                    },
                    model: {
                        value: e.currentText,
                        callback: function(t) {
                            e.currentText = t
                        },
                        expression: "currentText"
                    }
                }), e._v(" "), s("span", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.error,
                        expression: "error"
                    }],
                    staticClass: "message error"
                }), e._v(" "), "dictation" !== e.player.type ? s("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "ACTION.SUBMIT",
                        expression: "'ACTION.SUBMIT'"
                    }],
                    staticClass: "submit"
                }) : e._e()], 1)])
            };
            re._withStripped = !0;
            var ne = s(55507),
                oe = s(6305),
                le = s(38266),
                ce = function(e, t, s, i) {
                    return new(s || (s = Promise))((function(a, r) {
                        function n(e) {
                            try {
                                l(i.next(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function o(e) {
                            try {
                                l(i.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(e) {
                            var t;
                            e.done ? a(e.value) : (t = e.value, t instanceof s ? t : new s((function(e) {
                                e(t)
                            }))).then(n, o)
                        }
                        l((i = i.apply(e, t || [])).next())
                    }))
                };
            const de = r().extend({
                components: {
                    Input: oe.Z,
                    TextArea: le.Z
                },
                props: {
                    player: Object
                },
                i18n: {
                    messages: o,
                    sharedMessages: n.s
                },
                data: () => ({
                    currentText: "",
                    error: "",
                    isSubmitting: !1
                }),
                watch: {
                    "player.error": function(e) {
                        this.error = e
                    }
                },
                methods: {
                    resetError() {
                        this.error && (this.error = "")
                    },
                    onInput(e) {
                        return ce(this, void 0, void 0, (function*() {
                            this.resetError();
                            try {
                                yield this.$ecast.updateText(this.player.textKey, e)
                            } catch (e) {
                                e instanceof ne.EcastFilterError || this.$handleEcastError(e)
                            }
                        }))
                    },
                    onSubmit() {
                        return ce(this, void 0, void 0, (function*() {
                            if ("dictation" !== this.player.type) {
                                this.isSubmitting = !0;
                                try {
                                    yield this.$ecast.updateText(this.player.textKey, this.currentText), yield this.$ecast.updateObject(this.player.responseKey, {
                                        action: "submit"
                                    })
                                } catch (e) {
                                    if (e instanceof ne.EcastFilterError) return void(this.error = this.$t("ERROR.TEXT_NAUGHTY"));
                                    this.$handleEcastError(e)
                                } finally {
                                    this.isSubmitting = !1, "password" === this.player.type && (this.currentText = "", this.$nextTick((() => {
                                        const e = this.$refs.textarea,
                                            t = null == e ? void 0 : e.$el;
                                        null == t || t.focus()
                                    })))
                                }
                            }
                        }))
                    }
                }
            });
            var he = (0, h.Z)(de, re, [], !1, null, "2fa2671c", null);
            he.options.__file = "src/games/tjsp/triviadeath2/views/Writing.vue";
            const pe = he.exports,
                ue = r().extend({
                    components: {
                        Lobby: M,
                        PostGame: Z,
                        Choices: u,
                        Dialing: b,
                        Drawing: L,
                        Dropping: N,
                        GridSelecting: P,
                        Scratching: J,
                        Waiting: ae,
                        Writing: pe
                    },
                    ecastKeys: {
                        audience: "audiencePlayer",
                        info: ({
                            id: e
                        }) => `info:${e}`,
                        player: ({
                            id: e
                        }) => `player:${e}`
                    },
                    ecastProviders: {
                        artifact: e => {
                            if (e.artifact) return e.artifact;
                            let t, s = 0;
                            for (; e[`artifact:${s}`];) t = e[`artifact:${s}`], s += 1;
                            return t
                        }
                    },
                    props: {
                        artifact: Object,
                        audience: Object,
                        info: Object,
                        player: Object
                    },
                    i18n: {
                        messages: o,
                        sharedMessages: n.s
                    },
                    computed: {
                        classes() {
                            var e, t;
                            const s = [];
                            return this.info && s.push(this.info.color, this.info.madness), "audience" === this.$ecast.role && s.push("audience"), "waiting" !== (null === (e = this.player) || void 0 === e ? void 0 : e.kind) && "waiting" !== (null === (t = this.audience) || void 0 === t ? void 0 : t.kind) || s.push("waiting"), s
                        },
                        name() {
                            return this.info ? this.info.name : "audience" === this.$ecast.role ? this.$t("AUDIENCE.NAME") : ""
                        }
                    }
                });
            var ge = (0, h.Z)(ue, i, [], !1, null, null, null);
            ge.options.__file = "src/games/tjsp/triviadeath2/views/Main.vue";
            const me = ge.exports
        },
        43195: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/bea63942c00ef8c4cfda.png"
        },
        40112: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/24e5bcb462f45cfcf3a4.png"
        },
        76986: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/76dfa167611edd5b272d.png"
        },
        25424: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/2d9d3e0c652a799286bd.png"
        },
        85567: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/03c0289ee123d29fb981.png"
        },
        74494: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/aab409d3fa93e5b7043c.png"
        },
        85781: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/042b49a460e77f2c4aec.png"
        },
        76140: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/2afa741ff041a80ea15e.png"
        },
        89698: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/60d911985a82f9c9650d.png"
        },
        13241: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/3bb05505ef6f906f7102.png"
        },
        92491: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/b496cc5acbea3706d052.png"
        },
        16273: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/43fff5fcc973cc465ea2.png"
        },
        55850: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/b2566fae20c58ec8c187.png"
        },
        11092: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/18aa4a9aa6283c947885.png"
        },
        50241: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/dc0c658858496088a37f.png"
        },
        68969: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/6bedd3e66afb0640201c.png"
        },
        51327: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/159dc78bdfd8bb5879f6.png"
        },
        82732: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/85fb47a8ec444ec561e8.png"
        },
        83600: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/f81d1f6727d2d99dd623.png"
        },
        30336: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/bedac390f4ca2fad09b7.png"
        },
        48507: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/dc36f3ad040ca76111a0.png"
        },
        70098: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/8113dfa04b6a91d31510.png"
        },
        37787: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/214ad1a650224a284926.png"
        },
        30210: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/a9e09eecacc0de523656.png"
        },
        25891: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/f3b723a4fd3b736854f3.png"
        },
        37932: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/e9fb390a45b36678ab1e.png"
        },
        28515: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/6badb29186582e71dd1f.png"
        },
        17949: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/33dcc76da4853b186314.png"
        },
        14246: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/5daa4f3163a04b20af25.png"
        },
        56982: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/3327cc593c5ae3e550ce.png"
        },
        19254: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/e3b3458d5a16768e6417.png"
        },
        16359: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/3cdecb9deecf0512ff36.png"
        },
        27780: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/c70cf0edafeb52253018.png"
        },
        30202: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/225e3e043bf29e36eeec.png"
        },
        10618: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/01edfebdc8b380edd731.png"
        },
        60575: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/0f7df851d5b877e7fba0.png"
        },
        33331: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/b7d0fdd38fc810de798e.png"
        },
        22650: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/b3bb57017b939124c067.png"
        },
        51930: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/06f1459c30fa9524ea00.png"
        },
        70848: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/f8fee2ce812139c078a4.png"
        },
        38483: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/d2b22ba70877cdbce513.png"
        },
        31298: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/c8e8f52e77f603a76f20.png"
        },
        21968: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/cd69d4d5f06992ca2e7d.png"
        },
        3733: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/cf1ddeb777cd3de0de6c.png"
        },
        4513: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/980bde5f612fd46d4e6f.png"
        },
        69856: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/8ec274e9a890045a3a60.png"
        },
        12408: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/0f7f66100e9b44dd7ce5.png"
        },
        26852: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/f998fd82f288a27e5410.png"
        },
        60978: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/73aaaf6619f15aa66549.png"
        },
        62308: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/b444d26b19de00c47f65.png"
        },
        12290: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/e20b5e2bfad26790f2ec.png"
        },
        64600: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/0827d418da96f0be32cc.png"
        },
        45082: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/6765fe877b08a87cb29b.png"
        },
        94691: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/341f8bfb787e213b7fa5.png"
        },
        38872: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/475a3a35d121ca73cb4f.png"
        },
        93435: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/4ad0d637652b4ecf816b.png"
        },
        55109: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/6189cafc0c04218d0dfd.png"
        },
        54855: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/3db8496935455c78bde5.png"
        },
        20863: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/74bf5b8915e3a92cc429.png"
        },
        59685: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/7df8d86f79430adc7a98.png"
        },
        1861: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/dd87d4feb59c80471166.png"
        },
        70581: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/ad815e5d114fb7fed18d.png"
        },
        34372: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/efc9a15a0ac353386414.png"
        },
        18706: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/5de0952cbdbef8661bf9.png"
        },
        56108: e => {
            "use strict";
            e.exports = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.78 36.67"><defs><style>.cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:11px;}</style></defs><title>skewer-arrow</title><polyline class="cls-1" points="53.89 3.89 28.89 28.89 3.89 3.89"/></svg>'
        },
        15136: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/3d4a4c8c3c2089875bec.png"
        },
        22720: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/d83b2366f35d1a467a3b.png"
        },
        10134: (e, t, s) => {
            "use strict";
            e.exports = s.p + "games/triviadeath2-tjsp/3cb4ce7061324d746cf6.png"
        }
    }
]);
//# sourceMappingURL=sourcemaps/6068.ec98e7883f8e54df45d3.js.map