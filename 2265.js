(self.webpackChunkjackbox_tv = self.webpackChunkjackbox_tv || []).push([
    [2265], {
        16479: (e, t, i) => {
            var a;
            ! function() {
                "use strict";

                function n(e, t, i) {
                    var a = t.x,
                        n = t.y,
                        s = i.x - a,
                        o = i.y - n;
                    if (0 !== s || 0 !== o) {
                        var r = ((e.x - a) * s + (e.y - n) * o) / (s * s + o * o);
                        r > 1 ? (a = i.x, n = i.y) : r > 0 && (a += s * r, n += o * r)
                    }
                    return (s = e.x - a) * s + (o = e.y - n) * o
                }

                function s(e, t, i, a, o) {
                    for (var r, c = a, E = t + 1; E < i; E++) {
                        var l = n(e[E], e[t], e[i]);
                        l > c && (r = E, c = l)
                    }
                    c > a && (r - t > 1 && s(e, t, r, a, o), o.push(e[r]), i - r > 1 && s(e, r, i, a, o))
                }

                function o(e, t) {
                    var i = e.length - 1,
                        a = [e[0]];
                    return s(e, 0, i, t, a), a.push(e[i]), a
                }

                function r(e, t, i) {
                    if (e.length <= 2) return e;
                    var a = void 0 !== t ? t * t : 1;
                    return o(e = i ? e : function(e, t) {
                        for (var i, a, n, s, o, r = e[0], c = [r], E = 1, l = e.length; E < l; E++) n = r, void 0, void 0, (s = (a = i = e[E]).x - n.x) * s + (o = a.y - n.y) * o > t && (c.push(i), r = i);
                        return r !== i && c.push(i), c
                    }(e, a), a)
                }
                void 0 === (a = function() {
                    return r
                }.call(t, i, t, e)) || (e.exports = a)
            }()
        },
        20854: (e, t, i) => {
            "use strict";
            i.d(t, {
                J: () => s
            });
            var a = i(16479),
                n = i.n(a);
            class s {
                constructor(e, t, i) {
                    var a, n, s, o;
                    this.DEFAULT_WIDTH = 400, this.DEFAULT_HEIGHT = 400, this.color = "#000", this.layer = 0, this.layers = 1, this.maxPoints = Number.MAX_SAFE_INTEGER, this.points = [], this.weight = 4, this.isInteracting = !1, e.width = null !== (n = null === (a = t.size) || void 0 === a ? void 0 : a.width) && void 0 !== n ? n : this.DEFAULT_WIDTH, e.height = null !== (o = null === (s = t.size) || void 0 === s ? void 0 : s.height) && void 0 !== o ? o : this.DEFAULT_HEIGHT, this.canvas = e, this.ctx = e.getContext("2d"), this.doodle = t, (null == i ? void 0 : i.color) && (this.color = i.color), (null == i ? void 0 : i.layer) && (this.layer = i.layer), (null == i ? void 0 : i.layers) && (this.layers = i.layers), (null == i ? void 0 : i.maxPoints) && (this.maxPoints = i.maxPoints), (null == i ? void 0 : i.weight) && (this.weight = i.weight), this.drawLines()
                }
                addPoint(e) {
                    const t = {
                        x: Math.min(Math.max(.5 * this.weight, e.x), this.canvas.width - .5 * this.weight),
                        y: Math.min(Math.max(.5 * this.weight, e.y), this.canvas.height - .5 * this.weight)
                    };
                    this.points.push(t)
                }
                drawLines() {
                    if (this.ctx) {
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        for (let e = 0; e < this.layers; e++) Object.values(this.doodle.lines).filter((t => {
                            var i;
                            return (null !== (i = t.layer) && void 0 !== i ? i : 0) === e
                        })).forEach((e => this.drawLine(e))), e === this.layer && this.drawLine({
                            color: this.color,
                            index: this.doodle.lines.length,
                            layer: this.layer,
                            points: this.points,
                            weight: this.weight
                        })
                    }
                }
                drawLine(e) {
                    this.ctx && (this.ctx.fillStyle = e.color, this.ctx.strokeStyle = e.color, this.ctx.lineCap = "round", this.ctx.lineJoin = "round", this.ctx.lineWidth = e.weight, this.ctx.beginPath(), e.points.forEach(((t, i) => {
                        1 === e.points.length && 0 === i && (this.ctx.save(), this.ctx.arc(t.x, t.y, e.weight / 2, 0, 2 * Math.PI), this.ctx.fill(), this.ctx.restore(), this.ctx.beginPath()), this.ctx.lineTo(t.x, t.y)
                    })), this.ctx.stroke())
                }
                renderImage(e = "image/png") {
                    return this.doodle.lines.length > 0 && this.drawLines(), this.canvas.toDataURL(e)
                }
                onStart(e) {
                    this.isInteracting = !0, this.addPoint(e), this.drawLines()
                }
                onMove(e) {
                    if (!this.isInteracting) return;
                    const t = this.points[this.points.length - 1];
                    if (!t) return void this.addPoint(e);
                    const i = .5 * this.weight,
                        a = {
                            x: e.x - t.x,
                            y: e.y - t.y
                        },
                        n = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2));
                    if (n > i) {
                        const e = (n - i) / n,
                            s = {
                                x: a.x * e,
                                y: a.y * e
                            },
                            o = {
                                x: t.x + s.x,
                                y: t.y + s.y
                            };
                        this.addPoint(o), this.drawLines()
                    }
                }
                onEnd() {
                    if (!this.isInteracting) return null;
                    const e = {
                        color: this.color,
                        index: this.doodle.lines.length,
                        layer: this.layer,
                        points: n()(this.points),
                        weight: this.weight
                    };
                    return this.isInteracting = !1, this.points = [], e
                }
            }
        },
        65853: (e, t, i) => {
            "use strict";
            i.d(t, {
                s: () => a
            });
            const a = {
                en: {
                    ACTION: {
                        BACK: "Back",
                        CANCEL: "Cancel",
                        CLOSE: "Close",
                        CREATE: "Create",
                        DELETE: "Delete",
                        DONE: "Done",
                        EDIT: "Edit",
                        OK: "OK",
                        NO: "No",
                        PLAY: "Play",
                        PUBLISH: "Publish",
                        SUBMIT: "Submit",
                        TRY_AGAIN: "Try Again",
                        UNDO: "Undo",
                        YES: "Yes"
                    },
                    ALT: {
                        UGC: {
                            VISIBILITY_CONTROLLER_OFF: "prompts hidden on players' devices",
                            VISIBILITY_CONTROLLER_ON: "prompts shown on players' devices",
                            VISIBILITY_SCREEN_OFF: "prompts hidden on game screen",
                            VISIBILITY_SCREEN_ON: "prompts shown on game screen"
                        }
                    },
                    ERROR: {
                        DISCONNECTED: "You have been disconnected.",
                        ROOM_DESTROYED: "Thanks for playing!",
                        ROOM_DISCONNECTED: "Disconnected",
                        ROOM_NOT_FOUND: "Room not found",
                        TITLE: "Error"
                    },
                    LOBBY: {
                        JOINED_COUNT: "x | {count} of {maxPlayers} players joined | {count} of {maxPlayers} players joined",
                        PLAYERS_NEEDED: "x | {count} player needed to start | {count} players needed to start",
                        WAITING_FOR_VIP: "Waiting for {name} to start the game",
                        WAITING_FOR_GAMEPAD: "Waiting for the game to start",
                        GAME_STARTING: "Game is starting",
                        BUTTON_START: "Press to Start",
                        BUTTON_CANCEL: "Press to Cancel"
                    },
                    POST_GAME: {
                        GALLERY_LINK: "Visit the Gallery",
                        PLAY_AGAIN: "Play again?",
                        BUTTON_SAME_PLAYERS: "Same Players",
                        BUTTON_NEW_PLAYERS: "New Players"
                    },
                    TUTORIAL: {
                        BUTTON_SKIP: "Skip",
                        BUTTON_NEXT: "Next",
                        BUTTON_DONE: "Let’s Go!"
                    },
                    AUDIENCE: {
                        NAME: "AUDIENCE"
                    },
                    UGC: {
                        EPISODE_REPORT: "Report Episode",
                        EPISODE_UNLOAD: "Unload Episode",
                        EPISODE_VIEW_AUTHOR: "View Author",
                        EPISODES_LOAD: "Load an episode by id:",
                        EPISODES_MENU: "Episodes Menu",
                        EPISODES_SELECT: "Or select an epsiode:",
                        EPISODES_WARNING: "Warning: user generated content is not rated",
                        INSTRUCTION: {
                            CREATE_TITLE: "first things first, enter a name for the episode that will contain all your prompts and hit create.",
                            LOAD: "create or load?",
                            PUBLISH: "publish your episode",
                            TITLE: "name your episode",
                            TOGGLE_VISIBILITY: "tap to show/hide prompts",
                            WRITE: "write your prompts"
                        },
                        WARNING: {
                            DELETE: "Are you sure you want to delete this episode?",
                            TOS: "By sharing content, you agree to our [tos]Terms of Service[/tos]",
                            TOS_AGREE: "agree and share"
                        },
                        BACK_TO_EPISODES: "back to episodes",
                        BACK_TO_MENU: "back to menu",
                        CREATE_NEW_EPISODE: "create a new episode",
                        PREVIOUS_EPISODES: "previous episodes",
                        PROMPT_ADD: "add prompt",
                        PROMPT_PLACEHOLDER: "enter a prompt",
                        PROMPTS_COUNT_HIDDEN: "({count} hidden)",
                        TITLE_PLACEHOLDER: "enter a title"
                    },
                    PASSWORD_PLACEHOLDER: "ENTER 5-DIGIT PASSWORD",
                    ROOM_CODE: "ROOM CODE",
                    ROOM_CODE_PLACEHOLDER: "ENTER 4-LETTER CODE"
                },
                fr: {
                    ACTION: {
                        BACK: "Retour",
                        CANCEL: "Annuler",
                        CLOSE: "Fermer",
                        CREATE: "Créer",
                        DELETE: "Supprimer",
                        DONE: "Terminé",
                        EDIT: "Modifier",
                        OK: "OK",
                        NO: "Non",
                        PLAY: "Jouer",
                        PUBLISH: "Publier",
                        SUBMIT: "Envoyer",
                        TRY_AGAIN: "Réessayer",
                        YES: "Oui"
                    },
                    ERROR: {
                        DISCONNECTED: "Vous avez été déconnecté.",
                        ROOM_DESTROYED: "Merci d'avoir joué !",
                        ROOM_DISCONNECTED: "Déconnexion",
                        ROOM_NOT_FOUND: "Salle introuvable",
                        TITLE: "Erreur"
                    },
                    LOBBY: {
                        JOINED_COUNT: "x | {count} joueur sur {maxPlayers} à rejoint la partie | {count} joueurs sur {maxPlayers} ont rejoint la partie",
                        PLAYERS_NEEDED: "x | {count} joueur nécessaire pour commencer | {count} joueurs nécessaires pour commencer",
                        WAITING_FOR_VIP: "En attente de {name} pour commencer la partie",
                        WAITING_FOR_GAMEPAD: "En attente du début de la partie",
                        GAME_STARTING: "La partie commence",
                        BUTTON_START: "Appuyer pour commencer",
                        BUTTON_CANCEL: "Appuyer pour annuler"
                    },
                    POST_GAME: {
                        GALLERY_LINK: "Visiter la galerie",
                        PLAY_AGAIN: "Rejouer ?",
                        BUTTON_SAME_PLAYERS: "Les mêmes joueurs",
                        BUTTON_NEW_PLAYERS: "De nouveaux joueurs"
                    },
                    TUTORIAL: {
                        BUTTON_SKIP: "Passer",
                        BUTTON_NEXT: "Suivant",
                        BUTTON_DONE: "Allons-y !"
                    },
                    AUDIENCE: {
                        NAME: "SPECTATEURS"
                    },
                    UGC: {
                        EPISODE_REPORT: "Signaler l'épisode",
                        EPISODE_UNLOAD: "Retirer l'épisode",
                        EPISODE_VIEW_AUTHOR: "Voir l'auteur",
                        EPISODES_LOAD: "Charger un épisode par id :",
                        EPISODES_MENU: "Menu des épisodes",
                        EPISODES_SELECT: "Ou sélectionner un épisode :",
                        EPISODES_WARNING: "Attention : le contenu généré par les utilisateurs ne fait pas l'objet d'un classement",
                        INSTRUCTION: {
                            CREATE_TITLE: "commencez par donner un nom à l'épisode qui contiendra vos sujets, puis touchez créer.",
                            TOGGLE_VISIBILITY: "touchez pour afficher/masquer les sujets"
                        },
                        WARNING: {
                            DELETE: "Voulez-vous vraiment supprimer cet épisode ?",
                            TOS: "En partageant votre contenu, vous acceptez nos [tos]Conditions de service[/tos]",
                            TOS_AGREE: "accepter et partager"
                        },
                        BACK_TO_EPISODES: "retour aux épisodes",
                        BACK_TO_MENU: "retour au menu",
                        CREATE_NEW_EPISODE: "créer un nouvel épisode",
                        PREVIOUS_EPISODES: "épisodes précédents",
                        PROMPT_ADD: "ajouter un sujet",
                        PROMPT_PLACEHOLDER: "taper un sujet",
                        TITLE_PLACEHOLDER: "taper un titre"
                    },
                    PASSWORD_PLACEHOLDER: "ENTREZ UN MOT DE PASSE À 5 CHIFFRES",
                    ROOM_CODE: "CODE DE SALLE",
                    ROOM_CODE_PLACEHOLDER: "TAPEZ LE CODE 4 À LETTRES"
                },
                it: {
                    ACTION: {
                        BACK: "Indietro",
                        CANCEL: "Annulla",
                        CLOSE: "Chiuda",
                        CREATE: "Crea",
                        DELETE: "Elimina",
                        DONE: "Fine",
                        EDIT: "Modifica",
                        OK: "OK",
                        NO: "No",
                        PLAY: "Gioca",
                        PUBLISH: "Pubblica",
                        SUBMIT: "Invia",
                        TRY_AGAIN: "Riprova",
                        YES: "Sì"
                    },
                    ERROR: {
                        DISCONNECTED: "È stata effettuata la disconnessione.",
                        ROOM_DESTROYED: "Grazie per aver scelto di giocare con noi!",
                        ROOM_DISCONNECTED: "Disconnessione effettuata",
                        ROOM_NOT_FOUND: "Sala non trovata",
                        TITLE: "Errore"
                    },
                    LOBBY: {
                        JOINED_COUNT: "x | Sta partecipando {count} giocatore su {maxPlayers} | Stanno partecipando {count} giocatori su {maxPlayers}",
                        PLAYERS_NEEDED: "x | Manca {count} giocatore per iniziare | Mancano {count} giocatori per iniziare",
                        WAITING_FOR_VIP: "In attesa di {name} per iniziare la partita",
                        WAITING_FOR_GAMEPAD: "In attesa d'iniziare la partita",
                        GAME_STARTING: "La partita sta per iniziare",
                        BUTTON_START: "Premi per avviare",
                        BUTTON_CANCEL: "Premi per annullare"
                    },
                    POST_GAME: {
                        GALLERY_LINK: "Visita la galleria",
                        PLAY_AGAIN: "Vuoi giocare di nuovo?",
                        BUTTON_SAME_PLAYERS: "Stessi giocatori",
                        BUTTON_NEW_PLAYERS: "Nuovi giocatori"
                    },
                    TUTORIAL: {
                        BUTTON_SKIP: "Salta",
                        BUTTON_NEXT: "Avanti",
                        BUTTON_DONE: "Iniziamo!"
                    },
                    AUDIENCE: {
                        NAME: "PUBBLICO"
                    },
                    UGC: {
                        EPISODE_REPORT: "Segnala episodio",
                        EPISODE_UNLOAD: "Rimuovi episodio",
                        EPISODE_VIEW_AUTHOR: "Mostra autore",
                        EPISODES_LOAD: "Carica un episodio in base al suo id:",
                        EPISODES_MENU: "Menu Episodi",
                        EPISODES_SELECT: "Oppure seleziona un episodio:",
                        EPISODES_WARNING: "Attenzione: il contenuto generato dagli utenti non è classificato",
                        INSTRUCTION: {
                            CREATE_TITLE: "per prima cosa, inserisci un nome per l’episodio che contenga tutti i tuoi suggerimenti e premi crea.",
                            TOGGLE_VISIBILITY: "tocca per mostrare/nascondere suggerimenti"
                        },
                        WARNING: {
                            DELETE: "Vuoi davvero eliminare questo episodio?",
                            TOS: "Condividendo i contenuti, accetti i nostri [tos]Condizioni del servizio[/tos]",
                            TOS_AGREE: "accetta e condividi"
                        },
                        BACK_TO_EPISODES: "torna agli episodi",
                        BACK_TO_MENU: "torna al menu",
                        CREATE_NEW_EPISODE: "crea un nuovo episodio",
                        PREVIOUS_EPISODES: "episodi precedenti",
                        PROMPT_ADD: "aggiungi suggerimento",
                        PROMPT_PLACEHOLDER: "inserisci suggerimento",
                        TITLE_PLACEHOLDER: "inserisci un titolo"
                    },
                    PASSWORD_PLACEHOLDER: "INSERISCI LA PASSWORD DI 5 CARATTERI",
                    ROOM_CODE: "CODICE STANZA",
                    ROOM_CODE_PLACEHOLDER: "INSERISCI IL CODICE DI 4 LETTERE"
                },
                de: {
                    ACTION: {
                        BACK: "Zurück",
                        CANCEL: "Abbrechen",
                        CLOSE: "Schließen",
                        CREATE: "Erstellen",
                        DELETE: "Löschen",
                        DONE: "Fertig",
                        EDIT: "Bearbeiten",
                        OK: "OK",
                        NO: "Nein",
                        PLAY: "Spielen",
                        PUBLISH: "Veröffentlichen",
                        SUBMIT: "Abschicken",
                        TRY_AGAIN: "Erneut versuchen",
                        YES: "Ja"
                    },
                    ERROR: {
                        DISCONNECTED: "Deine Verbindung wurde getrennt.",
                        ROOM_DESTROYED: "Danke fürs Spielen!",
                        ROOM_DISCONNECTED: "Verbindung getrennt",
                        ROOM_NOT_FOUND: "Raum wurde nicht gefunden.",
                        TITLE: "Fehler"
                    },
                    LOBBY: {
                        JOINED_COUNT: "x | {count} von {maxPlayers} Spielern sind beigetreten | {count} von {maxPlayers} Spielern sind beigetreten",
                        PLAYERS_NEEDED: "x | {count} Spieler zum Starten benötigt | {count} Spieler zum Starten benötigt",
                        WAITING_FOR_VIP: "Warten, bis {name} das Spiel startet",
                        WAITING_FOR_GAMEPAD: "Warten, bis das Spiel startet",
                        GAME_STARTING: "Das Spiel beginnt",
                        BUTTON_START: "Zum Starten drücken",
                        BUTTON_CANCEL: "Zum Abbrechen drücken"
                    },
                    POST_GAME: {
                        GALLERY_LINK: "Galerie besuchen",
                        PLAY_AGAIN: "Erneut spielen?",
                        BUTTON_SAME_PLAYERS: "Selbe Spieler",
                        BUTTON_NEW_PLAYERS: "Neue Spieler"
                    },
                    TUTORIAL: {
                        BUTTON_SKIP: "Überspringen",
                        BUTTON_NEXT: "Weiter",
                        BUTTON_DONE: "Los geht's!"
                    },
                    AUDIENCE: {
                        NAME: "PUBLIKUM"
                    },
                    UGC: {
                        EPISODE_REPORT: "Episode melden",
                        EPISODE_UNLOAD: "Episode deaktivieren",
                        EPISODE_VIEW_AUTHOR: "Autor ansehen",
                        EPISODES_LOAD: "Lade eine Episode über dessen ID:",
                        EPISODES_MENU: "Episoden-Menü",
                        EPISODES_SELECT: "Oder wähle eine Episode aus:",
                        EPISODES_WARNING: "Achtung: Von Nutzern erstellte Inhalte werden nicht auf Familientauglichkeit geprüft",
                        INSTRUCTION: {
                            CREATE_TITLE: 'Benenne als allererstes deine Episode, die alle deine Prompts enthalten wird und drücke dann "Erstellen".',
                            TOGGLE_VISIBILITY: "Drücken, um Prompts zu zeigen / zu verstecken"
                        },
                        WARNING: {
                            DELETE: "Bist du sicher, dass du diese Episode löschen möchtest?",
                            TOS: "Durch das Teilen von Inhalten stimmst du unseren [tos]Nutzungsbedingungen[/tos] zu",
                            TOS_AGREE: "Zustimmen und teilen"
                        },
                        BACK_TO_EPISODES: "Zurück zu den Episoden",
                        BACK_TO_MENU: "Zurück zum Menü",
                        CREATE_NEW_EPISODE: "Eigene Episode erstellen",
                        PREVIOUS_EPISODES: "Vorige Episoden",
                        PROMPT_ADD: "Prompt hinzufügen",
                        PROMPT_PLACEHOLDER: "Prompt eingeben",
                        TITLE_PLACEHOLDER: "Titel eingeben"
                    },
                    PASSWORD_PLACEHOLDER: "FÜNFSTELLIGES PASSWORT EINGEBEN",
                    ROOM_CODE: "RAUMCODE",
                    ROOM_CODE_PLACEHOLDER: "GIB DEN 4-STELLIGEN CODE EIN"
                },
                es: {
                    ACTION: {
                        BACK: "Atrás",
                        CANCEL: "Cancelar",
                        CLOSE: "Cerrar",
                        CREATE: "Crear",
                        DELETE: "Borrar",
                        DONE: "Hecho",
                        EDIT: "Editar",
                        OK: "Aceptar",
                        NO: "No",
                        PLAY: "Jugar",
                        PUBLISH: "Publicar",
                        SUBMIT: "Enviar",
                        TRY_AGAIN: "Volver a intentarlo",
                        YES: "Sí"
                    },
                    ERROR: {
                        DISCONNECTED: "Te has desconectado.",
                        ROOM_DESTROYED: "¡Gracias por jugar!",
                        ROOM_DISCONNECTED: "Desconectado",
                        ROOM_NOT_FOUND: "No se encuentra la sala",
                        TITLE: "Error"
                    },
                    LOBBY: {
                        JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
                        PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
                        WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
                        WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
                        GAME_STARTING: "La partida va a empezar",
                        BUTTON_START: "Pulsa para empezar",
                        BUTTON_CANCEL: "Pulsa para cancelar"
                    },
                    POST_GAME: {
                        GALLERY_LINK: "Visita la galería",
                        PLAY_AGAIN: "¿Jugar otra vez?",
                        BUTTON_SAME_PLAYERS: "Los mismos jugadores",
                        BUTTON_NEW_PLAYERS: "Otros jugadores"
                    },
                    TUTORIAL: {
                        BUTTON_SKIP: "Omitir",
                        BUTTON_NEXT: "Siguiente",
                        BUTTON_DONE: "¡Vamos!"
                    },
                    AUDIENCE: {
                        NAME: "PÚBLICO"
                    },
                    UGC: {
                        EPISODE_REPORT: "Denunciar episodio",
                        EPISODE_UNLOAD: "Retirar episodio",
                        EPISODE_VIEW_AUTHOR: "Ver autor",
                        EPISODES_LOAD: "Cargar un episodio por ID:",
                        EPISODES_MENU: "Menú de episodios",
                        EPISODES_SELECT: "O selecciona un episodio:",
                        EPISODES_WARNING: "Aviso: El contenido de los usuarios no tiene clasificación de edad",
                        INSTRUCTION: {
                            CREATE_TITLE: "en primer lugar, ponle un nombre al episodio que contendrá tus enunciados y dale a crear.",
                            TOGGLE_VISIBILITY: "toca para mostrar u ocultar los enunciados"
                        },
                        WARNING: {
                            DELETE: "¿Seguro que quieres borrar este episodio?",
                            TOS: "Al compartir contenidos, aceptas las [tos]Condiciones del servicio[/tos]",
                            TOS_AGREE: "aceptar y compartir"
                        },
                        BACK_TO_EPISODES: "volver a los episodios",
                        BACK_TO_MENU: "volver al menú",
                        CREATE_NEW_EPISODE: "crear nuevo episodio",
                        PREVIOUS_EPISODES: "episodios anteriores",
                        PROMPT_ADD: "añadir enunciado",
                        PROMPT_PLACEHOLDER: "escribe un enunciado",
                        TITLE_PLACEHOLDER: "escribe un título"
                    },
                    PASSWORD_PLACEHOLDER: "INTRODUCIR CONTRASEÑA DE 5 DÍGITOS",
                    ROOM_CODE: "CÓDIGO DE LA SALA",
                    ROOM_CODE_PLACEHOLDER: "INTRODUCIR CÓDIGO DE 4 CARACTERES"
                },
                "es-XL": {
                    ACTION: {
                        BACK: "Volver",
                        CANCEL: "Cancelar",
                        OK: "Aceptar",
                        PLAY: "Jugar",
                        SUBMIT: "Enviar",
                        TRY_AGAIN: "Volver a intentarlo"
                    },
                    ERROR: {
                        DISCONNECTED: "Te has desconectado.",
                        ROOM_DESTROYED: "¡Gracias por jugar!",
                        ROOM_DISCONNECTED: "Desconectado",
                        ROOM_NOT_FOUND: "No se encuentra la sala",
                        TITLE: "Error"
                    },
                    LOBBY: {
                        JOINED_COUNT: "x | Se ha unido {count} de {maxPlayers} jugadores | Se han unido {count} de {maxPlayers} jugadores",
                        PLAYERS_NEEDED: "x | Se necesita {count} jugador para empezar | Se necesitan {count} jugadores para empezar",
                        WAITING_FOR_VIP: "Esperando a que {name} inicie la partida",
                        WAITING_FOR_GAMEPAD: "Esperando a que empiece la partida",
                        GAME_STARTING: "La partida va a empezar",
                        BUTTON_START: "Pulsa para empezar",
                        BUTTON_CANCEL: "Pulsa para cancelar"
                    },
                    POST_GAME: {
                        GALLERY_LINK: "Visita la galería",
                        PLAY_AGAIN: "¿Jugar otra vez?",
                        BUTTON_SAME_PLAYERS: "Los mismos jugadores",
                        BUTTON_NEW_PLAYERS: "Otros jugadores"
                    },
                    TUTORIAL: {
                        BUTTON_SKIP: "Omitir",
                        BUTTON_NEXT: "Siguiente",
                        BUTTON_DONE: "¡Vamos!"
                    },
                    AUDIENCE: {
                        NAME: "PÚBLICO"
                    },
                    UGC: {
                        EPISODE_REPORT: "Denunciar episodio",
                        EPISODE_UNLOAD: "Retirar episodio",
                        EPISODE_VIEW_AUTHOR: "Ver autor",
                        EPISODES_LOAD: "Carga un episodio por ID:",
                        EPISODES_MENU: "Menú de episodios",
                        EPISODES_SELECT: "O selecciona un episodio:",
                        EPISODES_WARNING: "Aviso: El contenido de los usuarios no tiene clasificación de edad"
                    },
                    PASSWORD_PLACEHOLDER: "INTRODUCE CONTRASEÑA DE 5 DÍGITOS",
                    ROOM_CODE: "CÓDIGO DE LA SALA",
                    ROOM_CODE_PLACEHOLDER: "INTRODUCE EL CÓDIGO DE 4 CARACTERES"
                }
            }
        },
        52265: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                default: () => F
            });
            var a = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "jbg moderation"
                }, [e._m(0), e._v(" "), e.isConnected ? i("Moderate", e._b({}, "Moderate", e.ecastValues, !1)) : i("Authenticate", {
                    on: {
                        connectionChange: e.onConnectionChange
                    }
                })], 1)
            };
            a._withStripped = !0;
            var n = i(2934),
                s = i.n(n),
                o = i(45222),
                r = i(65853),
                c = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "authenticate"
                    }, [i("div", {
                        staticClass: "constrain"
                    }, [i("form", {
                        attrs: {
                            autocomplete: "off"
                        }
                    }, [i("fieldset", [i("label", {
                        attrs: {
                            name: "roomcode",
                            for: "roomcode",
                            type: "text"
                        }
                    }, [e._v(e._s(e.$t("ROOM_CODE")))]), e._v(" "), i("Input", {
                        attrs: {
                            id: "roomcode",
                            type: "text",
                            autocapitalize: "off",
                            autocorrect: "off",
                            autocomplete: "off",
                            placeholder: e.$t("ROOM_CODE_PLACEHOLDER"),
                            maxlength: e.codeLength
                        },
                        on: {
                            input: e.onCodeInput
                        },
                        model: {
                            value: e.code,
                            callback: function(t) {
                                e.code = t
                            },
                            expression: "code"
                        }
                    }), e._v(" "), i("label", {
                        attrs: {
                            name: "password",
                            for: "password",
                            type: "text"
                        }
                    }, [e._v(e._s(e.$t("PASSWORD")))]), e._v(" "), i("Input", {
                        attrs: {
                            id: "password",
                            type: "text",
                            autocapitalize: "off",
                            autocorrect: "off",
                            autocomplete: "off",
                            placeholder: e.$t("PASSWORD_PLACEHOLDER"),
                            maxlength: e.passwordLength
                        },
                        on: {
                            input: e.onPasswordInput
                        },
                        model: {
                            value: e.password,
                            callback: function(t) {
                                e.password = t
                            },
                            expression: "password"
                        }
                    }), e._v(" "), i("button", {
                        class: {
                            connecting: e.isConnecting
                        },
                        attrs: {
                            id: "button-join",
                            type: "submit",
                            disabled: !e.canSubmit
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onJoinClick.apply(null, arguments)
                            }
                        }
                    }, [i("span", [e._v(e._s(e.$t("MODERATE")))]), e._v(" "), i("div", {
                        staticClass: "loading"
                    })])], 1), e._v(" "), e.room ? [e.isModerationSupported ? e.room.moderationEnabled ? e._e() : i("p", {
                        staticClass: "warning"
                    }, [e._v("\n                    " + e._s(e.$t("WARNING_MODERATION_DISABLED")) + "\n                ")]) : i("p", {
                        staticClass: "warning"
                    }, [e._v("\n                    " + e._s(e.$t("WARNING_MODERATION_UNSUPPORTED", {
                        gameName: e.game && e.game.name
                    })) + "\n                ")])] : e._e()], 2)])])
                };
            c._withStripped = !0;
            var E = i(44285),
                l = i(21944),
                u = i(6305),
                d = i(89446),
                O = i(2720),
                p = i(12360);
            const _ = {
                en: {
                    MODERATE: "Moderate",
                    PASSWORD: "Password",
                    APPROVE_ALL: "Approve All",
                    REJECT_ALL: "Reject All",
                    SUBMITTED_BY: "Submitted by:",
                    WAITING_FOR_SUBMISSIONS: "Waiting for submissions",
                    WARNING_MODERATION_DISABLED: "The moderation setting for this game is turned off. Turn it on and restart the game to moderate content.",
                    WARNING_MODERATION_UNSUPPORTED: "{gameName} doesn't have anything to moderate, but thanks for wanting to help out!"
                },
                fr: {
                    MODERATE: "Modéré",
                    PASSWORD: "Mot de passe",
                    APPROVE_ALL: "Tout accepter",
                    REJECT_ALL: "Tout refuser",
                    SUBMITTED_BY: "Envoyée par :",
                    WAITING_FOR_SUBMISSIONS: "En attente de propositions",
                    WARNING_MODERATION_DISABLED: "Le paramètre de modération est désactivé pour cette partie. Activez-le et relancez le jeu pour modérer le contenu.",
                    WARNING_MODERATION_UNSUPPORTED: "Il n'y a rien à modérer dans {gameName}, mais merci d'avoir voulu aider !"
                },
                it: {
                    MODERATE: "Modera",
                    PASSWORD: "Password",
                    APPROVE_ALL: "Approva tutto",
                    REJECT_ALL: "Rifiuta tutto",
                    SUBMITTED_BY: "Inviato da:",
                    WAITING_FOR_SUBMISSIONS: "In attesa di invii",
                    WARNING_MODERATION_DISABLED: "La moderazione è disattivata per questo gioco. Per moderare i contenuti, attivala e riavvia il gioco.",
                    WARNING_MODERATION_UNSUPPORTED: "{gameName} non ha nulla da moderare, ma grazie per l'aiuto!"
                },
                de: {
                    MODERATE: "Moderieren",
                    PASSWORD: "Passwort",
                    APPROVE_ALL: "Alles erlauben",
                    REJECT_ALL: "Alles zurückweisen",
                    SUBMITTED_BY: "Gesendet von:",
                    WAITING_FOR_SUBMISSIONS: "Warte auf Einreichungen",
                    WARNING_MODERATION_DISABLED: "Moderation für dieses Spiel ist ausgeschaltet Schalte sie ein und starte das Spiel erneut, um Inhalte moderieren zu können.",
                    WARNING_MODERATION_UNSUPPORTED: "{gameName} hat keine zu moderierenden Inhalte, aber danke, dass du helfen wolltest!"
                },
                es: {
                    MODERATE: "Moderar",
                    PASSWORD: "Contraseña",
                    APPROVE_ALL: "Aprobar todo",
                    REJECT_ALL: "Rechazar todo",
                    SUBMITTED_BY: "Enviado por:",
                    WAITING_FOR_SUBMISSIONS: "Esperando aportaciones",
                    WARNING_MODERATION_DISABLED: "La moderación para este juego está desactivada. Actívala y reinicia el juego para moderar el contenido.",
                    WARNING_MODERATION_UNSUPPORTED: "{gameName} no tiene nada que moderar, ¡pero ¡gracias por querer ayudar!"
                },
                "es-XL": {
                    MODERATE: "Moderar",
                    PASSWORD: "Contraseña",
                    APPROVE_ALL: "Aprobar todo",
                    REJECT_ALL: "Rechazar todo",
                    SUBMITTED_BY: "Enviado por:",
                    WAITING_FOR_SUBMISSIONS: "Esperando aportaciones",
                    WARNING_MODERATION_DISABLED: "La moderación para esta partida está desactivada. Actívala y reinicia el juego para moderar el contenido.",
                    WARNING_MODERATION_UNSUPPORTED: "{gameName} no tiene nada que moderar, pero ¡gracias por querer ayudar!"
                }
            };
            var T = function(e, t, i, a) {
                return new(i || (i = Promise))((function(n, s) {
                    function o(e) {
                        try {
                            c(a.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(e) {
                        try {
                            c(a.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                            e(t)
                        }))).then(o, r)
                    }
                    c((a = a.apply(e, t || [])).next())
                }))
            };
            const h = s().extend({
                components: {
                    Input: u.Z
                },
                i18n: {
                    messages: _,
                    sharedMessages: r.s
                },
                data: () => ({
                    codeLength: 4,
                    passwordLength: 5,
                    code: "",
                    password: "",
                    room: null,
                    isConnecting: !1
                }),
                computed: {
                    canSubmit() {
                        var e;
                        return this.code.length === this.codeLength && this.password.length === this.passwordLength && !!this.isModerationSupported && !!(null === (e = this.room) || void 0 === e ? void 0 : e.moderationEnabled)
                    },
                    game() {
                        if (this.room) return (0, p.cF)(this.room.appTag)
                    },
                    isModerationSupported() {
                        var e, t;
                        return !!this.room && null !== (t = null === (e = this.game) || void 0 === e ? void 0 : e.hasModeration) && void 0 !== t && t
                    }
                },
                beforeMount() {
                    this.populateFromStorage(), this.$api = new E.APIClient({
                        host: d.c.serverUrl,
                        scheme: "https"
                    })
                },
                methods: {
                    populateFromStorage() {
                        var e;
                        this.$storage.isSupported && (this.code = (null !== (e = this.$storage.get("mod-roomCode")) && void 0 !== e ? e : "").toUpperCase())
                    },
                    onCodeInput() {
                        this.code = this.code.replace(/\s/g, ""), this.code = this.code.trim().toUpperCase(), this.code.length < this.codeLength ? this.room = null : this.getRoomInfo()
                    },
                    onPasswordInput() {
                        this.password = this.password.replace(/\s/g, ""), this.password = this.password.trim()
                    },
                    onJoinClick() {
                        this.connect()
                    },
                    getRoomInfo() {
                        return T(this, void 0, void 0, (function*() {
                            try {
                                const e = yield this.$api.getRoom({
                                    code: this.code
                                });
                                this.room = e, l.o.setup(this.room.locale), this.$i18n.locale = l.o.locale
                            } catch (e) {
                                console.warn(e), this.room = null
                            }
                        }))
                    },
                    connect() {
                        return T(this, void 0, void 0, (function*() {
                            if (this.isConnecting) return;
                            if (!this.canSubmit) return;
                            if (yield this.getRoomInfo(), !this.room) return void(yield this.$showModal("Error", {
                                text: this.$t("ERROR.TITLE"),
                                subtext: this.$t("ERROR.ROOM_NOT_FOUND"),
                                dismissText: this.$t("ACTION.OK")
                            }));
                            const e = {
                                host: this.room.host,
                                code: this.code.toUpperCase(),
                                name: "moderator",
                                password: this.password,
                                role: "moderator",
                                debug: O.v.debug
                            };
                            this.$ecast = new E.WSClient(e), this.isConnecting = !0;
                            try {
                                yield this.$ecast.connect(), this.$syncEcast(), this.$debug.setup(this.$ecast, this.room), this.$storage.isSupported && this.$storage.set("mod-roomCode", this.code), this.$emit("connectionChange", !0)
                            } catch (e) {
                                console.error("[SignIn]", e), this.isConnecting = !1, this.onConnectionError(e)
                            }
                        }))
                    },
                    onConnectionError(e) {
                        this.$showModal("Error", {
                            text: "Unable to connect",
                            subtext: e.message,
                            dismissText: this.$t("ACTION.OK")
                        })
                    }
                }
            });
            var m = i(51900),
                I = (0, m.Z)(h, c, [], !1, null, "2ea0b5fc", null);
            I.options.__file = "src/apps/entry/views/moderation/Authenticate.vue";
            const A = I.exports;
            var S = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "moderate"
                }, [i("div", {
                    staticClass: "constrain"
                }, [i("div", {
                    staticClass: "top-buttons"
                }, [i("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "APPROVE_ALL",
                        expression: "'APPROVE_ALL'"
                    }],
                    staticClass: "approve",
                    attrs: {
                        disabled: !e.pendingItems.length
                    },
                    on: {
                        click: e.onAcceptAllClick
                    }
                }), e._v(" "), i("button", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "REJECT_ALL",
                        expression: "'REJECT_ALL'"
                    }],
                    staticClass: "reject",
                    attrs: {
                        disabled: !e.pendingItems.length
                    },
                    on: {
                        click: e.onRejectAllClick
                    }
                })]), e._v(" "), e.items.length ? i("transition-group", {
                    staticClass: "items",
                    attrs: {
                        name: "items",
                        tag: "div"
                    }
                }, [e._l(e.items, (function(t) {
                    return ["animation" === t.type ? i("AnimationItem", {
                        key: t.key,
                        attrs: {
                            item: t
                        },
                        on: {
                            acceptClick: e.onAcceptClick,
                            rejectClick: e.onRejectClick
                        }
                    }) : "doodle" === t.type ? i("DoodleItem", {
                        key: t.key,
                        attrs: {
                            item: t
                        },
                        on: {
                            acceptClick: e.onAcceptClick,
                            rejectClick: e.onRejectClick
                        }
                    }) : "drawing" === t.type ? i("DrawingItem", {
                        key: t.key,
                        attrs: {
                            item: t
                        },
                        on: {
                            acceptClick: e.onAcceptClick,
                            rejectClick: e.onRejectClick
                        }
                    }) : "text" === t.type ? i("TextItem", {
                        key: t.key,
                        attrs: {
                            item: t
                        },
                        on: {
                            acceptClick: e.onAcceptClick,
                            rejectClick: e.onRejectClick
                        }
                    }) : e._e()]
                }))], 2) : i("div", {
                    staticClass: "empty"
                }, [i("p", {
                    directives: [{
                        name: "t",
                        rawName: "v-t",
                        value: "WAITING_FOR_SUBMISSIONS",
                        expression: "'WAITING_FOR_SUBMISSIONS'"
                    }],
                    staticClass: "empty-text"
                }), e._v(" "), i("div", {
                    staticClass: "loading disabled"
                })])], 1)])
            };
            S._withStripped = !0;
            var N = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "item text",
                    class: e.item.status
                }, [i("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.htmlUnescape(e.item.context),
                        expression: "htmlUnescape(item.context)"
                    }],
                    staticClass: "context"
                }), e._v(" "), i("div", {
                    ref: "stage",
                    staticClass: "stage"
                }), e._v(" "), i("p", {
                    staticClass: "name"
                }, [e._v(e._s(e.$t("SUBMITTED_BY")) + " "), i("span", [e._v(e._s(e.item.name))])]), e._v(" "), i("div", {
                    staticClass: "item-buttons"
                }, [i("button", {
                    staticClass: "accept",
                    attrs: {
                        "aria-label": "accept"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("acceptClick", e.item)
                        }
                    }
                }), e._v(" "), i("button", {
                    staticClass: "reject",
                    attrs: {
                        "aria-label": "reject"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("rejectClick", e.item)
                        }
                    }
                })])])
            };
            N._withStripped = !0;
            var R = i(32530);
            const D = s().extend({
                props: {
                    item: Object
                },
                mounted() {
                    const e = this.$refs.stage,
                        t = this.item.value.size.width,
                        i = this.item.value.frames || [],
                        a = new R.U(e, {
                            width: this.item.value.size.width * i.length,
                            height: this.item.value.size.height
                        }),
                        n = a.canvas.renderCanvas.getContext("2d");
                    n && i.forEach(((e, i) => {
                        n.save(), n.translate(t * i, 0), a.canvas.parseLines(e).forEach((e => a.canvas.drawLine(n, e))), n.restore()
                    }))
                },
                i18n: {
                    messages: _
                },
                methods: {
                    htmlUnescape: e => d.c.htmlUnescape(e)
                }
            });
            var C = (0, m.Z)(D, N, [], !1, null, "748ebaa0", null);
            C.options.__file = "src/apps/entry/views/moderation/AnimationItem.vue";
            const v = C.exports;
            var L = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "item text",
                    class: e.item.status
                }, [i("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.htmlUnescape(e.item.context),
                        expression: "htmlUnescape(item.context)"
                    }],
                    staticClass: "context"
                }), e._v(" "), i("div", {
                    staticClass: "stage",
                    style: {
                        background: e.item.value.background
                    }
                }, [i("img", {
                    attrs: {
                        src: e.itemSrc,
                        alt: ""
                    }
                })]), e._v(" "), i("p", {
                    staticClass: "name"
                }, [e._v(e._s(e.$t("SUBMITTED_BY")) + " "), i("span", [e._v(e._s(e.item.name))])]), e._v(" "), i("div", {
                    staticClass: "item-buttons"
                }, [i("button", {
                    staticClass: "accept",
                    attrs: {
                        "aria-label": "accept"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("acceptClick", e.item)
                        }
                    }
                }), e._v(" "), i("button", {
                    staticClass: "reject",
                    attrs: {
                        "aria-label": "reject"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("rejectClick", e.item)
                        }
                    }
                })])])
            };
            L._withStripped = !0;
            var P = i(20854);
            const g = s().extend({
                props: {
                    item: Object
                },
                i18n: {
                    messages: _
                },
                data: () => ({
                    canvas: null
                }),
                computed: {
                    itemSrc() {
                        return this.canvas ? this.canvas.renderImage() : ""
                    }
                },
                mounted() {
                    this.canvas = new P.J(document.createElement("canvas"), this.item.value.doodle)
                },
                methods: {
                    htmlUnescape: e => d.c.htmlUnescape(e)
                }
            });
            var U = (0, m.Z)(g, L, [], !1, null, "1b51919a", null);
            U.options.__file = "src/apps/entry/views/moderation/DoodleItem.vue";
            const M = U.exports;
            var f = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "item text",
                    class: e.item.status
                }, [i("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.htmlUnescape(e.item.context),
                        expression: "htmlUnescape(item.context)"
                    }],
                    staticClass: "context"
                }), e._v(" "), i("div", {
                    ref: "stage",
                    staticClass: "stage"
                }), e._v(" "), i("p", {
                    staticClass: "name"
                }, [e._v(e._s(e.$t("SUBMITTED_BY")) + " "), i("span", [e._v(e._s(e.item.name))])]), e._v(" "), i("div", {
                    staticClass: "item-buttons"
                }, [i("button", {
                    staticClass: "accept",
                    attrs: {
                        "aria-label": "accept"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("acceptClick", e.item)
                        }
                    }
                }), e._v(" "), i("button", {
                    staticClass: "reject",
                    attrs: {
                        "aria-label": "reject"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("rejectClick", e.item)
                        }
                    }
                })])])
            };
            f._withStripped = !0;
            const x = s().extend({
                props: {
                    item: Object
                },
                mounted() {
                    const e = this.$refs.stage,
                        t = new R.U(e, {
                            width: this.item.value.size.width,
                            height: this.item.value.size.height
                        }),
                        i = t.canvas.parseLines(this.item.value.lines),
                        a = t.canvas.renderCanvas.getContext("2d");
                    a && i.forEach((e => t.canvas.drawLine(a, e)))
                },
                i18n: {
                    messages: _
                },
                methods: {
                    htmlUnescape: e => d.c.htmlUnescape(e)
                }
            });
            var y = (0, m.Z)(x, f, [], !1, null, "5975197a", null);
            y.options.__file = "src/apps/entry/views/moderation/DrawingItem.vue";
            const b = y.exports;
            var B = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "item text",
                    class: e.item.status
                }, [i("p", {
                    directives: [{
                        name: "bb",
                        rawName: "v-bb",
                        value: e.htmlUnescape(e.item.context),
                        expression: "htmlUnescape(item.context)"
                    }],
                    staticClass: "context"
                }), e._v(" "), i("p", {
                    staticClass: "value"
                }, [e._v(e._s(e.htmlUnescape(e.item.value)))]), e._v(" "), i("p", {
                    staticClass: "name"
                }, [e._v(e._s(e.$t("SUBMITTED_BY")) + " "), i("span", [e._v(e._s(e.item.name))])]), e._v(" "), i("div", {
                    staticClass: "item-buttons"
                }, [i("button", {
                    staticClass: "accept",
                    attrs: {
                        "aria-label": "accept"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("acceptClick", e.item)
                        }
                    }
                }), e._v(" "), i("button", {
                    staticClass: "reject",
                    attrs: {
                        "aria-label": "reject"
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("rejectClick", e.item)
                        }
                    }
                })])])
            };
            B._withStripped = !0;
            const w = s().extend({
                props: {
                    item: Object
                },
                i18n: {
                    messages: _
                },
                methods: {
                    htmlUnescape: e => d.c.htmlUnescape(e)
                }
            });
            var G = (0, m.Z)(w, B, [], !1, null, null, null);
            G.options.__file = "src/apps/entry/views/moderation/TextItem.vue";
            const k = G.exports;
            const W = s().extend({
                components: {
                    AnimationItem: v,
                    DoodleItem: M,
                    DrawingItem: b,
                    TextItem: k
                },
                props: {
                    items: {
                        default: () => [],
                        type: Array
                    }
                },
                ecastProviders: {
                    items: {
                        hasDeepRefs: !0,
                        fn: e => {
                            const t = [];
                            return Object.keys(e).forEach((i => {
                                const a = i.split(":");
                                if ("moderate" !== a[0]) return;
                                const n = a[1];
                                if (!["animation", "doodle", "drawing", "text"].includes(n)) return;
                                const s = {
                                    key: i,
                                    type: n,
                                    status: e[i].status,
                                    name: e[i].name,
                                    value: e[i].value,
                                    context: ""
                                };
                                e[i].context && (e[i].context.bb ? s.context = e[i].context.bb : e[i].context.html ? s.context = d.c.htmlTagsToBBCode(e[i].context.html, [
                                    ["i", "i"]
                                ]) : e[i].context.text ? s.context = e[i].context.text : "string" == typeof e[i].context && (s.context = e[i].context)), t.push(s)
                            })), t
                        }
                    }
                },
                i18n: {
                    messages: _
                },
                computed: {
                    pendingItems() {
                        return this.items.filter((e => "pending" === e.status))
                    }
                },
                methods: {
                    onAcceptAllClick() {
                        this.updateStatus(this.pendingItems, "accepted")
                    },
                    onRejectAllClick() {
                        this.updateStatus(this.pendingItems, "rejected")
                    },
                    onAcceptClick(e) {
                        "pending" === e.status && this.updateStatus([e], "accepted")
                    },
                    onRejectClick(e) {
                        "rejected" !== e.status && this.updateStatus([e], "rejected")
                    },
                    updateStatus(e, t) {
                        return i = this, a = void 0, s = function*() {
                            try {
                                const i = e.map((e => {
                                    const i = this.$ecast.entities[e.key].val;
                                    return i.status = t, this.$ecast.updateObject(e.key, i)
                                }));
                                yield Promise.all(i)
                            } catch (e) {
                                console.error("[Moderation] unable to update moderation entities", e)
                            }
                            try {
                                yield this.$ecast.mail(1, {
                                    id: e.map((e => e.key)),
                                    status: t
                                })
                            } catch (e) {
                                console.error("[Moderation] unable to notify host by mail", e)
                            }
                            this.$syncEcast()
                        }, new((n = void 0) || (n = Promise))((function(e, t) {
                            function o(e) {
                                try {
                                    c(s.next(e))
                                } catch (e) {
                                    t(e)
                                }
                            }

                            function r(e) {
                                try {
                                    c(s.throw(e))
                                } catch (e) {
                                    t(e)
                                }
                            }

                            function c(t) {
                                var i;
                                t.done ? e(t.value) : (i = t.value, i instanceof n ? i : new n((function(e) {
                                    e(i)
                                }))).then(o, r)
                            }
                            c((s = s.apply(i, a || [])).next())
                        }));
                        var i, a, n, s
                    }
                }
            });
            var Y = (0, m.Z)(W, S, [], !1, null, "7686b6ac", null);
            Y.options.__file = "src/apps/entry/views/moderation/Moderate.vue";
            const j = Y.exports;
            var $ = function(e, t, i, a) {
                return new(i || (i = Promise))((function(n, s) {
                    function o(e) {
                        try {
                            c(a.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(e) {
                        try {
                            c(a.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                            e(t)
                        }))).then(o, r)
                    }
                    c((a = a.apply(e, t || [])).next())
                }))
            };
            const V = s().extend({
                components: {
                    Authenticate: A,
                    Moderate: j
                },
                mixins: [o.e],
                i18n: {
                    messages: _,
                    sharedMessages: r.s
                },
                data: () => ({
                    isConnected: !1
                }),
                computed: {
                    ecastValues() {
                        return this.$data.$ecastValues ? this.$data.$ecastValues : null
                    }
                },
                methods: {
                    onConnectionChange(e) {
                        this.isConnected = e, e && (this.$ecast.on("room/exit", (() => {
                            this.onRoomExit()
                        })), this.$ecast.on("socketClose", (() => {
                            this.onSocketCloseEvent()
                        })))
                    },
                    onRoomExit() {
                        return $(this, void 0, void 0, (function*() {
                            yield this.$showModal("Error", {
                                text: this.$t("ERROR.ROOM_DISCONNECTED"),
                                subtext: this.$t("ERROR.ROOM_DESTROYED"),
                                dismissText: this.$t("ACTION.OK")
                            }), window.location.reload()
                        }))
                    },
                    onSocketCloseEvent() {
                        return $(this, void 0, void 0, (function*() {
                            this.$storage.isSupported && this.$storage.remove("mod-roomCode"), yield this.$showModal("Error", {
                                text: this.$t("ERROR.DISCONNECTED"),
                                dismissText: this.$t("ACTION.OK")
                            }), window.location.reload()
                        }))
                    }
                }
            });
            var z = (0, m.Z)(V, a, [function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("header", {
                    staticClass: "header"
                }, [t("div", {
                    staticClass: "logo"
                })])
            }], !1, null, "05d701e0", null);
            z.options.__file = "src/apps/entry/views/moderation/Main.vue";
            const F = z.exports
        },
        6305: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => c
            });
            var a = function() {
                var e = this,
                    t = e.$createElement;
                return (e._self._c || t)("input", {
                    ref: "input",
                    domProps: {
                        value: e.value
                    },
                    on: {
                        input: e.onInput
                    }
                })
            };
            a._withStripped = !0;
            var n = i(2934),
                s = i.n(n);
            const o = s().extend({
                props: {
                    value: String
                },
                watch: {
                    value(e, t) {
                        e !== t && (this.$refs.input.value = e)
                    }
                },
                methods: {
                    onInput(e) {
                        return t = this, i = void 0, n = function*() {
                            const t = e.target,
                                i = -1 === t.maxLength ? Number.MAX_SAFE_INTEGER : t.maxLength;
                            t.value.length > i ? t.value = t.value.substring(0, i) : (this.$emit("input", t.value), yield s().nextTick(), t.value !== this.value && (t.value = this.value))
                        }, new((a = void 0) || (a = Promise))((function(e, s) {
                            function o(e) {
                                try {
                                    c(n.next(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function r(e) {
                                try {
                                    c(n.throw(e))
                                } catch (e) {
                                    s(e)
                                }
                            }

                            function c(t) {
                                var i;
                                t.done ? e(t.value) : (i = t.value, i instanceof a ? i : new a((function(e) {
                                    e(i)
                                }))).then(o, r)
                            }
                            c((n = n.apply(t, i || [])).next())
                        }));
                        var t, i, a, n
                    }
                }
            });
            var r = (0, i(51900).Z)(o, a, [], !1, null, null, null);
            r.options.__file = "src/apps/vue/components/Input.vue";
            const c = r.exports
        }
    }
]);
//# sourceMappingURL=sourcemaps/2265.c9a4a9a3992091b57e6c.js.map