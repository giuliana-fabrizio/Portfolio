const carousel_1 = require("../public/images/interests/carousel-1.jpg");
const carousel_2 = require("../public/images/interests/carousel-2.png");
const carousel_3 = require("../public/images/interests/carousel-3.jpg");
const image_sewing = require("../public/images/interests/sewing.png");


/* ***************************************************************** common ***************************************************************** */

const name = "Giuliana GODAIL-FABRIZIO";


/* ***************************************************************** nav bar ***************************************************************** */

const home_btn = "Accueil";
const academic_training_btn = "Formations";
const experiences_btn = "Expériences";
const projects_btn = "Projets";
const interests_btn = "Intérêts";


/* ***************************************************************** home page ***************************************************************** */

const status = "Étudiante en informatique";
const current_situation = "Recherche un stage de 6 mois";
const presentation = "IA 🤖 | Développement full stack ✨ | Désireuse de contribuer au futur 🚀";
const download_cv = "Télécharger mon CV";


/* ***************************************************************** footer ***************************************************************** */

const link_cv = "https://github.com/giuliana-fabrizio/Portfolio/raw/refs/heads/main/portfolio/public/files/Curriculum_vitae_Giuliana_GODAIL-FABRIZIO.pdf";
const mail = "mailto:godailfabriziogiuliana@gmail.com";
const github = "https://github.com/giuliana-fabrizio";
const linkedin = "https://www.linkedin.com/in/giuliana-godail-fabrizio-20639525b/";
const rights = "Tous droits réservés";


/* ***************************************************************** projects page ***************************************************************** */

const projects_page_title = "MES PROJETS";
const projects_page_presentation = "Sur cette page, vous découvrirez l'ensemble des projets sur lesquels j'ai travaillé.";

const filterLabel = "Filtrer";
const categoriesLabel = "Type de projet";
const technosLabel = "Technologies";
const confirmFilters = "Valider";
const resetFilters = "Réinitialiser";

const categories = {
    personal: { name: "Personnel", style: "background-color: var(--blue-0)" },
    professional: { name: "Professionnel", style: "background-color: var(--blue-2)" },
    academic: { name: "Universitaire", style: "background-color: var(--blue-3)" },
};

const technos = {
    // utils
    firebase: { name: "Firebase", logo: "images/technologies/firebase.png" },
    stripe: { name: "Stripe", logo: "images/technologies/stripe.png" },

    // Frontend Development
    vue_js: { name: "Vue.js", logo: "images/technologies/vue-js.png" },
    react_js: { name: "React.js", logo: "images/technologies/react-js.png" },

    // Backend Web Development
    next_js: { name: "Next.js", logo: "images/technologies/next-js.png" },
    node_js: { name: "Node.js", logo: "images/technologies/node-js.png" },
    symfony: { name: "Symfony", logo: "images/technologies/symfony.png" },

    // Collaboration Tools
    github: { name: "GitHub", logo: "images/technologies/github.png" },
    gitlab: { name: "GitLab", logo: "images/technologies/gitlab.png" },
    jira: { name: "Jira", logo: "images/technologies/jira.png" },
    scrum: { name: "SCRUM", logo: "images/technologies/scrum.png" },
    trello: { name: "Trello", logo: "images/technologies/trello.png" },

    // Containerization & Virtualization
    docker: { name: "Docker", logo: "images/technologies/docker.png" },

    // Database & Query Languages
    sql: { name: "SQL", logo: "images/technologies/sql.png" },
    graphql: { name: "GraphQL", logo: "images/technologies/graphql.png" },
    hasura: { name: "Hasura", logo: "images/technologies/hasura.png" },
    minio: { name: "Minio", logo: "images/technologies/minio.png" },
    mongo: { name: "MongoDB", logo: "images/technologies/mongodb.png" },
    postgresql: { name: "PostgreSQL", logo: "images/technologies/postgreesql.png" },
    sequelize: { name: "Sequelize", logo: "images/technologies/sequelize.png" },

    // Programming Languages
    arduino: { name: "Arduino", logo: "images/technologies/arduino.png" },
    cpp: { name: "CPP", logo: "images/technologies/cpp.png" },
    java: { name: "Java", logo: "images/technologies/java.png" },
    js: { name: "JavaScript", logo: "images/technologies/js.png" },
    php: { name: "Php", logo: "images/technologies/php.png" },
    python: { name: "Python", logo: "images/technologies/python.png" },
    ts: { name: "TypeScript", logo: "images/technologies/ts.png" },
    kotlin: { name: "Kotlin", logo: "images/technologies/kotlin.png" },
    // TODO application iOS swift: { name: "Swift", logo: "images/technologies/swift.png" },
};

const projects = {
    UTBM_IA41: {
        title: `Rasende Roboter`,
        category: categories.academic,
        image_bg: "images/projects/UTBM_IA41/card-background.png",
        introduction: `Développement du jeu Rasende Roboter (Ricochet Robots) intégrant deux niveaux d'intelligence artificielle permettant d'affronter un joueur humain.`,
        implementation: {
            title: `Tâches réalisées`,
            sections: [
                {
                    title: `Logique du jeu`,
                    list: [
                        `Configuration paramétrable d'une partie : assemblage du plateau de jeu, nombre de manches, difficulté de l'IA ;`,
                        `Implémentation des règles de déplacement des robots (glissement continu jusqu'à rencontrer un obstacle) ;`,
                        `Vérification de l'atteinte de l'objectif.`
                    ]
                }, {
                    title: `Intelligence artificielle`,
                    list: [
                        // `Comparaison de plusieurs algorithmes (A*, Breath-First-Search, Dijkstra) ;`,
                        `Implémentation de l'algorithme A* ;`,
                        // `Modélisation d'un état (position des robots) ;`,
                        `Génération des états successeurs à partir d'un état précis et des mouvements possibles qui en découlent ;`,
                        `Création de deux niveaux de difficulté (simple et avancé) via la complexité de l'heuristique ;`,
                        `Reconstruction et affichage du chemin optimal trouvé par l'IA.`
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_IA41/gameboard.png",
                            legend: `Situation complexe et chemin trouvé par l'IA`,
                            style: `max-height: 270px;`
                        }
                    ]
                },
            ]
        },
        git: {
            link: `https://github.com/giuliana-fabrizio/RasendeRoboter`,
            label: `Github`
        },
        slides: {
            link: `https://docs.google.com/presentation/d/1E3sWxrTmw9e1jOlK5u4ZRtSWdAdViirMot2iRPzkQI8/edit?usp=sharing`,
            label: `Soutenance`
        },
        technologies: [technos.github, technos.python]
    },
    UTBM_AP4B: {
        title: `Jeu du Trio`,
        category: categories.academic,
        image_bg: "images/projects/UTBM_AP4B/card-background.png",
        introduction: `Reproduction du jeu de cartes Trio en mode individuel simple.`,
        implementation: {
            title: `Tâches réalisées`,
            sections: [
                {
                    title: `Mécanique du jeu`,
                    list: [
                        `Initialisation paramétrable d'une partie : nombre de joueurs, saisie et contrôle des noms ;`,
                        `Vérification des cartes retournées, détection des trios, gestion des scénarios de victoire (points ou Trio Doré).`
                    ]
                }, {
                    title: `Conception des interfaces`,
                    list: [
                        `Écran de paramétrage d'une partie ;`,
                        `Interface principale : affichage des joueurs et des cartes interactives ;`,
                        `Gestion des événements : retournement des cartes, affichage des règles ;`,
                        `Synchronisation de l'état du jeu entre le modèle logique et l'interface principale.`
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_AP4B/gameboard.png",
                            legend: `Plateau de jeu`,
                            style: `max-height: 280px;`
                        }
                    ]
                }, {
                    title: `Architecture et concepts avancés utilisés`,
                    list: [
                        `Programmation orientée objet ;`,
                        `Utilisation d'énumérations pour la modélisation des cartes ;`,
                        `Organisation du code selon le pattern MVC (Modèle-Vue-Contrôleur).`,
                    ],
                },
            ]
        },
        git: {
            link: `https://github.com/giuliana-fabrizio/TrioGame`,
            label: `Github`
        },
        technologies: [technos.github, technos.java]
    },
    // UTBM_AP4A: {
    //     title: `Badge Access`,
    //     category: categories.academic,
    // image_bg: "images/projects/UTBM_IA41/card-background.png",
    //     introduction: {
    //         text: `Simulation d'un système de contrôle d'accès par badges et lecteurs d'authentification.`
    //     },
    //     implementation: {
    //         title: `Tâches réalisées`,
    //         text: ``,
    //         sections: [
    //             {
    //                 title: `Architecture du projet`,
    //                 list: [
    //                     `Diagramme UML pour modéliser classes et relations ;`,
    //                     `Organisation en modules séparés (headers / sources).`,
    //                 ],
    //                 images_style: `col-12`,
    //                 images: [
    //                     {
    //                         path: "images/projects/UTBM_AP4A/class-diagram.png",
    //                         style: `max-height: 360px;`,
    //                     }
    //                 ]
    //             }, {
    //                 title: `Programmation orientée objet (POO)`,
    //                 list: [
    //                     `Application de la forme canonique de Coplien ;`,
    //                     `Héritage et implémentation de classes abstraites ;`,
    //                     `Polymorphisme (redéfinition et surcharge de méthodes) ;`,
    //                     `Surcharge d'opérateurs.`,
    //                 ]
    //             }, {
    //                 title: `Fonctionnalités disponibles`,
    //                 list: [
    //                     `Gestion des règles d'accès selon le type de personne ;`,
    //                     `Simulation d'accès avec badges valides ou expirés ;`,
    //                     `Chargement de configuration initiale via un fichier CSV ;`,
    //                     `Redirection de l'affichage (console ou fichier de log) ;`,
    //                     `Horodatage automatique des logs.`,
    //                 ],
    //                 images_style: `col-lg-6`,
    //                 images: [
    //                     {
    //                         path: "images/projects/UTBM_AP4A/csv-config.png",
    //                         legend: `Exemple de configuration CSV`,
    //                     }
    //                 ]
    //             },
    //         ]
    //     },
    //     result: {
    //         title: `Résultat`,
    //         text: `Le projet a abouti à une application pleinement fonctionnelle, répondant aux exigences des professeurs. Le simulateur développé est capable de traiter des demandes d'accès en tenant\
    //         compte de différents paramètres, tels que les droits associés au lecteur ou la validité des badges. Vous pouvez consulter mon dépôt Git <a href='https://github.com/giuliana-fabrizio/BadgeAccess' target='_blank'>ici</a>.`
    //     },
    //     technologies: [technos.cpp, technos.github]
    // },
    UTBM_WE4A: {
        title: `Moodle`,
        category: categories.academic,
        image_bg: "images/projects/UTBM_WE4A/card-background.png",
        introduction: `Développement de la plateforme éducative Moodle avec authentification et téléchargements de fichiers.`,
        implementation: {
            title: `Tâches réalisées`,
            text: ``,
            sections: [
                {
                    title: `Base de données`,
                    list: [
                        `Conception du MCD (Modèle Conceptuel de Données) ;`,
                        `Création de fixtures Symfony pour créer les entités et y insérer des données de test ;`,
                        `Connexion de la base de données à l'application Symfony ;`,
                        `Utilisation de l'ORM Doctrine pour la gestion des entités et des relations.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_WE4A/mcd.png",
                            legend: `MCD de l'application`,
                            style: `max-height: 225px;`
                        }
                    ]
                }, {
                    title: `Sécurité`,
                    list: [
                        `Implémentation du système de connexion et de déconnexion ;`,
                        `Gestion des accès et permissions selon les rôles utilisateurs.`,
                    ]
                }, {
                    title: `Autres fonctionnalités`,
                    list: [
                        `Écriture de requêtes Ajax pour dynamiser l'application ;`,
                        `Ajout de la possibilité d'uploader et de télécharger des fichiers ;`,
                        `Implémentation de plusieurs interfaces utilisateur avec opérations CRUD (Create, Read, Update, Delete).`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_WE4A/details-ue.png",
                            legend: `Détails d'une unité d'enseignement`,
                            style: `max-height: 250px;`
                        }
                    ]
                }
            ]
        },
        technologies: [technos.github, technos.php, technos.postgresql, technos.sql, technos.symfony]
    },
    UTBM_SY43: {
        title: `Imperial Roar`,
        category: categories.academic,
        image_bg: "images/projects/UTBM_SY43/card-background.png",
        introduction: `Application mobile e-commerce de parfums avec authentification ${technos.firebase.name}, paiement ${technos.stripe.name} et dashboard administrateur.`,
        implementation: {
            title: `Tâches réalisées`,
            sections: [
                {
                    title: `Authentification ${technos.firebase.name}`,
                    list: [
                        `Configuration d'un projet ${technos.firebase.name} dédié ;`,
                        `Intégration de la bibliothèque ${technos.firebase.name} et connexion de l'application au projet ;`,
                        `Implémentation du système d'authentification ;`,
                        `Ajout de la fonctionnalité de création de compte ;`,
                        `Mise en place de la réinitialisation du mot de passe.`
                    ],
                    images_style: `col-lg-6`,
                    // images: [
                    //     {
                    //         path: "images/projects/UTBM_SY43/login.jpg",
                    //         style: `max-height: 300px;`
                    //     }, {
                    //         path: "images/projects/UTBM_SY43/forgot-password.jpg",
                    //         style: `max-height: 300px;`
                    //     }, {
                    //         path: "images/projects/UTBM_SY43/create-account.jpg",
                    //         style: `max-height: 300px;`
                    //     }
                    // ]
                }, {
                    title: `Dashboard`,
                    list: [
                        `Définition des données clés à représenter et du mode de visualisation ;`,
                        `Écriture de requêtes pour interroger la base de données et visualisation sous forme de graphiques ;`,
                        `Ajout d'une option pour filtrer l'affichage par année.`,
                    ],
                    images_style: `col-lg-6`,
                    // images: [
                    //     {
                    //         path: "images/projects/UTBM_SY43/dashboard.jpg",
                    //         style: `max-height: 300px;`
                    //     }, {
                    //         path: "images/projects/UTBM_SY43/dashboard_2.jpg",
                    //         style: `max-height: 300px;`
                    //     }
                    // ]
                }, {
                    title: `Système de paiement`,
                    list: [
                        `Implémentation d'un serveur ${technos.stripe.name} ;`,
                        `Transmission du prix à payer au serveur ;`,
                        `Hébergement du serveur via ${technos.firebase.name}.`,
                    ],
                    images_style: `col-lg-6`,
                    // images: [
                    //     {
                    //         path: "images/projects/UTBM_SY43/stripe.jpg",
                    //         style: `max-height: 300px;`
                    //     }
                    // ]
                }
            ],
        },
        git: {
            link: `https://github.com/giuliana-fabrizio/Imperial-Roar`,
            label: `Github`
        },
        technologies: [technos.firebase, technos.github, technos.kotlin, technos.sql, technos.stripe]
    },
    BUT_S6: {
        title: `Depollution Map`,
        category: categories.professional,
        image_bg: "images/projects/BUT_S6/card-background.png",
        introduction: `Plateforme de collectes de déchets développée dans le cadre d'un stage de trois mois (janvier - mars 2024), réalisé chez Natural Solutions.`,
        implementation: {
            title: `Tâches réalisées`,
            text: `Utilisation de la méthodologie agile ${technos.scrum.name} pour répondre aux besoins évolutifs des clients. Déploiement de l'application effectué à l'aide de ${technos.docker.name}.`,
            sections: [
                {
                    title: `Carte de la page d'accueil`,
                    list: [
                        `Extraction des collectes validées via une requête ${technos.graphql.name} ;`,
                        `Affichage sur une carte mondiale grâce à leurs coordonnées ;`,
                        `Mise en place d'un système de clusterisation selon le niveau de zoom ;`,
                        `Ajout de popups interactives présentant les détails de chaque collecte.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S6/map.png",
                            legend: `Carte du monde avec localisation des ramassages`,
                            style: `max-height: 265px;`
                        }
                    ]
                }, {
                    title: `Filtres`,
                    list: [
                        `Requêtes pour récupérer les options de filtrage depuis la base ;`,
                        `Intégration des filtres à l'URL pour conserver l'état de recherche ;`,
                        `Application des filtres côté client sur les données en mémoire, avec mise à jour dynamique des résultats affichés sur la carte.`,
                    ]
                }, {
                    title: `Dashboard`,
                    list: [
                        `Rédaction et test de requêtes ${technos.graphql.name} via ${technos.hasura.name} ;`,
                        `Récupération des ramassages terminés avec application des filtres définis dans l'URL ;`,
                        `Génération des statistiques à partir des données filtrées ;`,
                        `Intégration du dashboard avec affichage dynamique des données.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S6/dashboard.png",
                            legend: `Statistiques générées pour les ramassages terminés`,
                            style: `max-height: 265px;`
                        }
                    ]
                }
            ],
        },
        slides: {
            link: `https://docs.google.com/presentation/d/1LiP-nK3gmnG1EadbeIMfyvVh-VUsXMA4EwR9I6H2e2o/edit?usp=sharing`,
            label: `Soutenance`
        },
        technologies: [technos.graphql, technos.hasura, technos.jira, technos.minio, technos.next_js, technos.react_js, technos.scrum, technos.ts]
    },
    BUT_S5: {
        title: `Tests de réflexes`,
        category: categories.academic,
        image_bg: "images/projects/BUT_S5/card-background.png",
        introduction: `Application multi-architecture évaluant le temps de réaction au travers de divers tests.`,
        context: {
            title: `Contexte`,
            text: `L'architecture repose sur plusieurs composants complémentaires :`,
            list: [
                `une <span style='color: #d4d6ff'><strong>application mobile</strong></span> pour capturer et transmettre des images ;`,
                `un <span style='color: #e7dec7'><strong>serveur d'analyse</strong></span> pour traiter ces images ;`,
                `un <span style='color: #c5dcf1'><strong>serveur de centralisation</strong></span> pour enregistrer les données issues du serveur d'analyse et des <span style='color: #fdd9ff'><strong>microcontrôleurs</strong></span>\
                 dans une <span style='color: #fce5cd'><strong>base de données</strong></span> ;`,
                `un <span style='color: #f8e0e0'><strong>frontend</strong></span> pour visualiser les résultats ;`,
                `une <span style='color: #d9ead3'><strong>API</strong></span> pour assurer les échanges entre serveur, base de données et frontend.`,
            ],
            images_style: `col-lg-6`,
            images: [
                {
                    path: "images/projects/BUT_S5/structure.png",
                    legend: `Architecture globale du projet`,
                    style: 'max-height: 250px;'
                }
            ]
        },
        implementation: {
            title: `Tâches réalisées`,
            text: `Planification des tâches assurée via ${technos.trello.name}.`,
            sections: [
                {
                    title: `API et frontend`,
                    list: [
                        `Développement d'une API via ${technos.node_js.name} et connexion à une base de données ${technos.mongo.name} ;`,
                        `Mise en place de la Swagger Documentation et de tests unitaires pour valider les méthodes de l'API ;`,
                        `Création d'un frontend connecté à l'API avec affichage de statistiques ;`,
                        `Déploiement de l'API avec ${technos.docker.name}.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S5/frontend.png",
                            legend: `Affichage des statistiques sous forme de dashboard`,
                            style: `max-height: 300px;`
                        }
                    ]
                }, {
                    title: `Serveur d'analyse`,
                    list: [
                        `Recherche d'une bibliothèque adaptée au traitement d'images ;`,
                        `Refonte de l'application mobile pour s'adapter aux contraintes de la bibliothèque choisie ;`,
                        `Développement et connexion du serveur d'analyse à l'application mobile, accompagnés de tests unitaires.`,
                    ]
                }, {
                    title: `Microcontrôleurs`,
                    list: [
                        `Configuration de la carte ${technos.arduino.name} à partir des microcontrôleurs fournis ;`,
                        `Rédaction du code ${technos.arduino.name} pour faire fonctionner les microcontrôleurs ;`,
                        `Réalisation de tests manuels ;`,
                        `Envoi des résultats au serveur de centralisation.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S5/microcontrollers.png",
                            legend: `Schématisation des microcontrôleurs`,
                            style: `max-height: 200px;`
                        }
                    ]
                }
            ],
        },
        git: {
            link: `https://github.com/giuliana-fabrizio/TestsReflexes`,
            label: `Github`
        },
        slides: {
            link: `https://docs.google.com/presentation/d/1ciTwJQT0wF97OlqsJSNzQmrdxO6tPPnuQ1vWaAyG5aA/edit#slide=id.g230ccc5832e_0_0`,
            label: `Soutenance`
        },
        technologies: [technos.arduino, technos.docker, technos.gitlab, technos.java, technos.js, technos.node_js, technos.kotlin, technos.mongo, technos.vue_js]
    },
    BUT_S4: {
        title: `Outil de facturation`,
        category: categories.professional,
        image_bg: "images/projects/BUT_S4/card-background.png",
        introduction: `Reprise d'un outil de facturation dans le cadre d'un stage de trois mois (avril - juin 2023), réalisé chez Natural Solutions.`,
        implementation: {
            title: `Tâches réalisées`,
            sections: [
                {
                    title: `Base de données (BDD)`,
                    text: `Les données, initialement stockées dans un fichier JSON, ont été migrées vers une base ${technos.postgresql.name}.`,
                    list: [
                        `Conception du MCD (Modèle Conceptuel de Données) ;`,
                        `Refonte de l'application pour y intégrer la BDD ;`,
                        `Utilisation de l'ORM ${technos.sequelize.name} pour simplifier les interactions avec la BDD ;`,
                        `Développement d'un script d'import des données JSON vers la base.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S4/MCD.png",
                            legend: `MCD de l'application`,
                            style: `max-height: 275px;`
                        }
                    ]
                }, {
                    title: `Génération de documents`,
                    list: [
                        `Interrogation de l'API externe <strong>Zendesk</strong> ;`,
                        `Tri et formatage des données récupérées ;`,
                        `Développement de la génération et du téléchargement automatique de fichiers ;`,
                        `Création d'un modèle Word pour structurer et organiser le contenu des rapports.`,
                    ]
                }
            ]
        },
        slides: {
            link: `https://docs.google.com/presentation/d/1uueQqS5IAyxeuxPOwv-2YE4rRnxuOs72wY5auPL-VPI/edit?usp=sharing`,
            label: `Soutenance`
        },
        technologies: [technos.gitlab, technos.js, technos.node_js, technos.postgresql, technos.react_js, technos.sequelize]
    }
};


/* ***************************************************************** degrees page ***************************************************************** */

const degrees_page_title = "MES FORMATIONS";

const school_career = `Après un baccalauréat scientifique, j'ai pris une année de césure durant laquelle j'ai découvert l'informatique dont le caractère en constante évolution et la diversité m'ont motivée à m'orienter dans ce domaine.`;

const degrees_title = `Mes diplômes`;

const degrees = {
    engineer: {
        title: `Ingénierie informatique`,
        // logo: "images/degrees/utbm.png",
        img: "images/degrees/bac+5.png",
        description: `Spécialisation en intelligence artificielle et big data`,
        school: `UTBM - Université de Technologie de Belfort-Montbéliard`,
        place: `Belfort, France`,
        date: `En cours`,
        style: `padding-top: 20%;`
    },
    but: {
        title: `BUT informatique`,
        // logo: "images/degrees/but.png",
        img: "images/degrees/bac+3.png",
        description: `Axé sur le développement full stack ~ majore de promotion`,
        school: `IUT de Belfort-Montbéliard`,
        place: `Belfort, France`,
        date: `2024`,
        style: `padding-top: 12%;`
    },
    bac: {
        title: `Baccalauréat général`,
        // logo: "images/degrees/bac.png",
        img: "images/degrees/bac.png",
        description: `Axé sur les matières scientifiques principales`,
        school: `Lycée Périer`,
        place: `Marseille, France`,
        date: `2020`,
        style: `padding-top: 12%;`
    }
}

const certifications_title = `Mes certifications`;

const certifications = {
    mooc_management: {
        title: `Gestion de projet`,
        logo: "images/degrees/mooc_gdp.png",
        description: `14 certifications obtenues`,
        specialization: `Spécialités :
        <ul class='text-start'>\
            <li>Tronc commun</li>\
            <li>Analyse fonctionnelle externe</li>\
            <li>Analyse stratégique dans les projets</li>\
            <li>Diagnostic de fonctionnement d'un système (technique)</li>\
            <li>Évaluation d'impact des projets</li>\
            <li>Gestion de projet agile avec Scrum</li>\
            <li>Management de la créativité et brainstorming</li>\
            <li>Management d'équipe projet</li>\
            <li>Outils et méthodologie de résolution de problème</li>\
            <li>Management visuel de projet</li>\
            <li>OAW - Outils et applications web pour la gestion de projet</li>\
            <li>Planification avancée</li>\
            <li>Du Projet à l'action entrepreneuriale</li>\
            <li>Introduction aux principaux outils de TRIZ</li>\
        </ul>`,
        school: `MOOC`,
        date: `2024`,
    }
}


/* ***************************************************************** experiences page ***************************************************************** */

const experiences_page_title = "MES EXPÉRIENCES";
const experiences = {
    volunteer: {
        title: `Bénévole aux Restos du Coeur`,
        description: `Accueil et orientation des bénéficiaires,\
        distribution alimentaire adaptée aux besoins des familles,\
        participation au nettoyage des locaux.`,
        logo: "images/experiences/restos_du_coeur.png",
        date: `Depuis Septembre 2025`,
        company: `Les Restos du Coeur`,
        place: `Belfort, France`,
    },
    stage_2024: {
        title: `Stagiaire développeuse fullstack II`,
        label_redirection: "Plus de détails",
        redirection: "BUT_S6",
        logo: "images/experiences/natural_solutions.png",
        date: `Janvier - Avril 2024`,
        company: `Natural Solutions`,
        place: `Marseille, France`,
    },
    stage_2023: {
        title: `Stagiaire développeuse fullstack I`,
        label_redirection: "Plus de détails",
        redirection: "BUT_S4",
        logo: "images/experiences/natural_solutions.png",
        date: `Avril - Juin 2023`,
        company: `Natural Solutions`,
        place: `Marseille, France`,
    },
    cdd_2022: {
        title: `Employée de supérette`,
        description: `Encaissement des clients,\
        rangement des rayons et réception des marchandises,\
        formation des nouveaux salariés à la caisse,\
        cuisson du pain.`,
        logo: "images/experiences/u_express.png",
        date: `Juillet - Août 2022`,
        company: `U Express`,
        place: `Marseille, France`,
    }
}


/* ***************************************************************** hobbies page ***************************************************************** */

const interests_page_title = "MES CENTRES D'INTÉRÊT";

const interests = {
    1: {
        title: `Activité sportive & voyages`,
        description: `Je pratique la natation depuis 2010 (ancienne membre de club).\
        J'aime également découvrir de nouveaux endroits et paysages c'est pourquoi je fais régulièrement des randonnées et des voyages.`,
        legend: 'Images prises lors de mes randonnées et/ou voyages',
        images: [carousel_1, carousel_2, carousel_3],
        support: `carousel`
    },
    2: {
        title: `Jeux vidéo`,
        description: `Découverte des jeux vidéo durant mon BUT Informatique à Belfort. Je joue principalement à Minecraft, un univers que\
        j'apprécie pour la diversité de ses mods, qui permettent d'explorer de nouveaux mondes et de renouveler l'expérience.`,
        legend: `Modélisation 3D de mon skin Minecraft. Utilisez la souris (ou le tactile) pour faire pivoter le modèle.`,
        support: `mc`
    },
    3: {
        title: `Couture`,
        description: `Initiée à la couture dès l'enfance par ma grand-mère, ancienne couturière, j'ai développé créativité et minutie à travers\
        des projets personnels. Aujourd'hui, je conçois des objets utiles du quotidien (housses de protection, sacs, trousses).`,
        legend: `Objets réalisés`,
        image: image_sewing,
        support: `img`
    },
    4: {
        title: `Modélisation 3D`,
        description: `Motivée par un projet de réaménagement, je me suis initiée à la modélisation 3D avec Sweet Home 3D. J'ai conçu différents\
        aménagements intérieurs, notamment la reconfiguration d'une pièce ainsi que la reproduction d'un studio, alliant précision technique et sens esthétique.`,
        legend: `Modélisation 3D d'un studio réalisée avec Sweet Home 3D. Utilisez la souris (ou le tactile) pour zoomer et faire pivoter le modèle`,
        support: `modelling`
    }
}


/* ***************************************************************** not found page ***************************************************************** */

const not_found_title = "PAGE NON TROUVÉE";


module.exports = {
    name: name,
    home_btn: home_btn,
    academic_training_btn: academic_training_btn,
    experiences_btn: experiences_btn,
    projects_btn: projects_btn,
    interests_btn: interests_btn,
    status: status,
    current_situation: current_situation,
    presentation: presentation,
    download_cv: download_cv,
    link_cv: link_cv,
    mail: mail,
    github: github,
    linkedin: linkedin,
    rights: rights,
    experiences_page_title: experiences_page_title,
    experiences: experiences,
    projects_page_title: projects_page_title,
    projects_page_presentation: projects_page_presentation,
    filterLabel: filterLabel,
    categoriesLabel: categoriesLabel,
    technosLabel: technosLabel,
    confirmFilters: confirmFilters,
    resetFilters: resetFilters,
    categories: categories,
    technos: technos,
    projects: projects,
    degrees_page_title: degrees_page_title,
    school_career: school_career,
    degrees_title: degrees_title,
    degrees: degrees,
    certifications_title: certifications_title,
    certifications: certifications,
    interests_page_title: interests_page_title,
    interests: interests,
    not_found_title: not_found_title
}
