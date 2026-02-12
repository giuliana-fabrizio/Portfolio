const carousel_1 = require("../public/images/interests/carousel-1.jpg");
const carousel_2 = require("../public/images/interests/carousel-2.png");
const carousel_3 = require("../public/images/interests/carousel-3.jpg");
// const image_sewing = require("../public/images/interests/sewing.png");


/* ***************************************************************** common ***************************************************************** */

// const birthday = new Date("11-27-2002");

// function getAge() {
//     const currentDate = new Date();
//     var age = currentDate.getFullYear() - birthday.getFullYear();
//     if (currentDate.getMonth() < birthday.getMonth()) {
//         age -= 1;
//     } else if (currentDate.getMonth() == birthday.getMonth() &&
//         currentDate.getUTCDate() < birthday.getUTCDate()) {
//         age -= 1;
//     }
//     return age;
// }

const name = "Giuliana GODAIL-FABRIZIO";
// const age = getAge();


/* ***************************************************************** nav bar ***************************************************************** */

const home_btn = "Home";
const academic_training_btn = "School training";
const experiences_btn = "Professional experiences";
const projects_btn = "Projects";
const interests_btn = "Hobbies";

/* ***************************************************************** home page ***************************************************************** */

const status = "Computer science student";

const about_me_title = "About me";
const about_me = `I am currently a computer science engineering student at the <a href="https://www.utbm.fr/formations/ingenieur/informatique/" target="_blank">UTBM</a>. I am found of this field that is why I am constantly seeking to improve my skills. To achieve this, I often work on personal projects : I sometimes image a problem to solve which allows me to experiment with different approchoaches and technologies.\n
I particularly enjoy designing and optimizing solutions to create efficient tools adapted to user needs. Now, I wish to specialize in big data and artificial intelligence.`;
const download_cv = "Download my resume";


/* ***************************************************************** footer ***************************************************************** */

const link_cv = "https://github.com/giuliana-fabrizio/Portfolio/raw/refs/heads/main/portfolio/public/files/Curriculum_vitae_Giuliana_GODAIL-FABRIZIO.pdf";
const mail = "mailto:godailfabriziogiuliana@gmail.com";
const github = "https://github.com/giuliana-fabrizio";
const linkedin = "https://www.linkedin.com/in/giuliana-godail-fabrizio-20639525b/";
const rights = "All rights reserved";


/* ***************************************************************** projects page ***************************************************************** */

const projects_page_title = "MY PROJECTS";
const projects_page_presentation = "On this page, you will discover all the projects I have worked on.";

const filterLabel = "Filter";
const categoriesLabel = "Projet type";
const technosLabel = "Technologies";
const confirmFilters = "Confirm";
const resetFilters = "Reset";

const categories = {
    personal: { name: "Personal", style: "background-color: #b6d3fe" },
    professional: { name: "Professional", style: "background-color: #86b6fe" },
    academic: { name: "Academic", style: "background-color: #5599fd" },
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
        introduction: {
            text: `This academic project, carried out in the first year of engeneering studies in collaboration with another student, aimed to develop the game Rasende Roboter, better known as Ricochet Robot. We also had to devise an artificial intelligence able of competing againt a human player at several difficulty levels.`
        },
        implementation: {
            title: `Tasks completed`,
            text: ``,
            sections: [
                {
                    title: `Game logic`,
                    list: [
                        `Configurable game settings : game board layout, number of rounds, AI difficulty ;`,
                        `Implementation of robot movement rules (continuous sliding until an obstacle is reached) ;`,
                        `Collision management between robots and board boundaries ;`,
                        `Move validation and objective completion verification.`
                    ]
                }, {
                    title: `Artificial intelligence`,
                    list: [
                        `Comparison of several algorithms (A*, Breath-First-Search, Dijkstra) ;`,
                        `Implementation of the A* algorithm ;`,
                        `State modeling (robot position) ;`,
                        `Generation of successor states from a specific state and the resulting possible movements ;`,
                        `Creation of two difficulty levels (simple et advanced) via heuristic complexity ;`,
                        `Reconstruction and display of the optimal path found by AI.`
                    ],
                    img_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_IA41/gameboard.png",
                            legend: `Complex situation and path found by AI`,
                            style: `max-height: 270px;`
                        }
                    ]
                },
            ]
        },
        result: {
            title: `Result`,
            text: `The project gave a fully functionnal game, allowing the user to play against our AI. You can consult our presentation <a href='https://docs.google.com/presentation/d/1E3sWxrTmw9e1jOlK5u4ZRtSWdAdViirMot2iRPzkQI8/edit?usp=sharing' target='_blank'>here</a> and our ${technos.github.name} repository <a href='https://github.com/giuliana-fabrizio/RasendeRoboter' target='_blank'>here</a>.`,
        },
        technologies: [technos.github, technos.python]
    },
    UTBM_AP4B: {
        title: `Trio game`,
        category: categories.academic,
        introduction: {
            text: `This academic project, carried out in the first year of engeneering studies in collaboration with two other students, aimed to reproduce the simple individual mode of the Trio card game.`
        },
        implementation: {
            title: `Tasks completed`,
            text: ``,
            sections: [
                {
                    title: `Game logic`,
                    list: [
                        `Configurable game settings : number of players, name entry and verification ;`,
                        `Verification of returned cards, detection of trios, management of victory scenarios (points or Golden Trio).`
                    ]
                }, {
                    title: `Interface design`,
                    list: [
                        `Game setting screen ;`,
                        `Main interface : display players and interactive cards ;`,
                        `Event management : card turnover, display of rules ;`,
                        `Synchronization of the game state between the logic model and the main interface.`
                    ],
                    img_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_AP4B/gameboard.png",
                            style: `max-height: 280px;`
                        }
                    ]
                }, {
                    title: `Architecture and advanced concepts used`,
                    list: [
                        `Object oriented programming ;`,
                        `Use of enumerations for cards modeling ;`,
                        `Code organization according to the MVC (Modèle-Vue-Contrôleur) pattern.`,
                    ],
                },
            ]
        },
        result: {
            title: `Result`,
            text: `The project gave a fully functional game, according to the teacher's requirements. You can consult our ${technos.github.name} repository <a href='https://github.com/giuliana-fabrizio/TrioGame' target='_blank'>here</a>.`,
        },
        technologies: [technos.github, technos.java]
    },
    UTBM_AP4A: {
        title: `BadgeAccess`,
        category: categories.academic,
        introduction: {
            text: `This academic project, carried out in the first year of engeneering studies, aimed to simulate an access control system using badges and readers.`
        },
        implementation: {
            title: `Tasks completed`,
            text: ``,
            sections: [
                {
                    title: `Project architecture`,
                    list: [
                        `UML diagram to model classes and relations ;`,
                        `Organization in separate modules (headers / sources).`,
                    ],
                    img_style: `col-12`,
                    images: [
                        {
                            path: "images/projects/UTBM_AP4A/class-diagram.png",
                            style: `max-height: 360px;`,    
                        }
                    ]
                }, {
                    title: `Object-oriented programming`,
                    text: `This project helped me practice several basic concepts of object-oriented programming.`,
                    list: [
                        `Use of the Coplien canonical form ;`,
                        `Inheritance and use of abstract classes ;`,
                        `Polymorphism (method overriding and overloading) ;`,
                        `Operator overloading (for example, assignment operator).`,
                    ]
                }, {
                    title: `Available features`,
                    list: [
                        `Access rules based on the type of person ;`,
                        `Access simulation with valid or expired badges ;`,
                        `Initial configuration loaded from a CSV file ;`,
                        `Output redirection (console or log file) ;`,
                        `Automatic log timestamping.`,
                    ],
                    img_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_AP4A/csv-config.png",
                            legend: `Example of CSV configuration`,
                        }
                    ]
                },
            ]
        },
        result: {
            title: `Result`,
            text: `The project gave a fully functionnal application, according to the teacher's requirements. The simulator can process access requests while checking different parameters such as the reader's rights or the badge validity.\
            You can consult my ${technos.github.name} repository <a href='https://github.com/giuliana-fabrizio/BadgeAccess' target='_blank'>here</a>.`
        },
        technologies: [technos.cpp, technos.github]
    },
    UTBM_WE4A: {
        title: `Moodle`,
        category: categories.academic,
        introduction: {
            text: `Ce projet universitaire, réalisé en première année de cycle ingénieur en collaboration avec trois autres étudiants, consistait à reproduire une partie des fonctionnalités de l'application éducative Moodle.`
        },
        implementation: {
            title: `Contributions`,
            text: ``,
            sections: [
                {
                    title: `Base de données`,
                    list: [
                        `Conception du Modèle Conceptuel de Données (MCD) ;`,
                        `Rédaction du script de création des tables ;`,
                        `Création de fixtures Symfony pour insérer des données de test dans la base de données ;`,
                        `Connexion de la base de données à l'application Symfony ;`,
                        `Utilisation de l'ORM Doctrine pour la gestion des entités et des relations.`,
                    ],
                    img_style: `col-lg-6`,
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
                        `Implémentation de plusieurs interfaces utilisateur avec opérations CRUD ;`,
                        `Redirection spécifique pour les erreurs de type 404 ou 403.`
                    ],
                    img_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_WE4A/details-ue.png",
                            style: `max-height: 250px;`
                        }
                    ]
                }
            ]
        },
        result: {
            title: `Résultat`,
            text: `Le projet a abouti à une application pleinement fonctionnelle, permettant à chaque utilisateur d'effectuer des actions spécifiques selon son rôle (par exemple, un professeur peut déposer des fichiers). Cette expérience m'a permis de consolider mes bases en développement Web et de renforcer mes compétences techniques.`
        },
        technologies: [technos.github, technos.php, technos.postgresql, technos.sql, technos.symfony]
    },
    UTBM_SY43: {
        title: `Application e-commerce`,
        category: categories.academic,
        introduction: {
            text: `Ce projet universitaire, réalisé en première année de cycle ingénieur en collaboration avec trois autres étudiants, consistait à réaliser une application e-commerce pour Androïd.`
        },
        implementation: {
            title: `Contributions`,
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
                    img_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_SY43/login.jpg",
                            style: `max-height: 300px;`
                        }, {
                            path: "images/projects/UTBM_SY43/forgot-password.jpg",
                            style: `max-height: 300px;`
                        }, {
                            path: "images/projects/UTBM_SY43/create-account.jpg",
                            style: `max-height: 300px;`
                        }
                    ]
                }, {
                    title: `Dashboard`,
                    list: [
                        `Définition des données clés à représenter et du mode de visualisation ;`,
                        `Écriture de requêtes pour interroger la base de données ;`,
                        `Visualisation des résultats sous forme de texte et de graphiques avec <em>MPAndroidChart</em> ;`,
                        `Ajout d'une option pour filtrer l'affichage par année.`,
                    ],
                    img_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_SY43/dashboard.jpg",
                            style: `max-height: 300px;`
                        }, {
                            path: "images/projects/UTBM_SY43/dashboard_2.jpg",
                            style: `max-height: 300px;`
                        }
                    ]
                }, {
                    title: `Système de paiement`,
                    list: [
                        `Implémentation d'un serveur ${technos.stripe.name} et connexion de l'application à celui-ci ;`,
                        `Transmission du prix à payer au serveur ${technos.stripe.name} ;`,
                        `Hébergement du serveur ${technos.stripe.name} via ${technos.firebase.name}`,
                    ],
                    img_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_SY43/stripe.jpg",
                            style: `max-height: 300px;`
                        }
                    ]
                }
            ],
        },
        result: {
            title: `Résultat`,
            text: `Le projet a abouti à une application e-commerce fonctionnelle, permettant aux utilisateurs de consulter des produits, de les ajouter au panier et de finaliser leurs achats. Un Dashboard clair et intuitif présente également des statistiques de vente aux administrateurs. Cette expérience m'a permis de consolider mes compétences en développement Android, en travail collaboratif et en gestion de projet.\n
            Vous pouvez consulter notre soutenance <a href='#' target='_blank'>ici</a> et notre dépôt Git <a href='https://github.com/giuliana-fabrizio/Imperial-Roar' target='_blank'>ici</a>.`
        },
        technologies: [technos.firebase, technos.github, technos.kotlin, technos.sql, technos.stripe]
    },
    BUT_S6: {
        title: `Plateforme de collectes de déchets`,
        category: categories.professional,
        introduction: {
            text: `Ce stage de trois mois (janvier - mars 2024), réalisé chez Natural Solutions, consistait à contribuer au développement de <strong>DepollutionMap</strong>,\
            une application de gestion des collectes de déchets réalisées par l'association Wings of Ocean.`
        },
        implementation: {
            title: `Contributions`,
            text: `J'ai travaillé en suivant la méthodologie agile ${technos.scrum.name} pour m'adapter aux besoins évolutifs des clients. Le versioning et la collaboration ont été assurés via ${technos.gitlab.name}.\
            Concernant le déploiement de l'application, celui-ci a été effectué avec l'aide de ${technos.docker.name}.`,
            sections: [
                {
                    title: `Carte de la page d'accueil`,
                    list: [
                        `Extraction des collectes validées via une requête ${technos.graphql.name} ;`,
                        `Affichage sur une carte mondiale grâce à leurs coordonnées <em>(react-map-gl)</em> ;`,
                        `Mise en place d'un système de clusterisation selon le niveau de zoom ;`,
                        `Ajout de popups interactives (<em>Material UI</em>) présentant les détails de chaque collecte (nom, localisation, date, photo).`,
                    ],
                    img_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S6/map.png",
                            style: `max-height: 265px;`
                        }
                    ]
                }, {
                    title: `Filtres`,
                    list: [
                        `Ajout d'un bouton « Filtres » ouvrant une popup réutilisable (conçue avec <em>Material UI</em>) ;`,
                        `Requêtes pour récupérer les options de filtrage depuis la base ;`,
                        `Intégration des filtres à l'URL pour conserver l'état de recherche ;`,
                        `Application des filtres côté client sur les données en mémoire, avec mise à jour dynamique des résultats affichés sur la carte.`,
                    ]
                }, {
                    title: `Dashboard`,
                    list: [
                        `Écriture et test de requêtes ${technos.graphql.name} via ${technos.hasura.name} ;`,
                        `Récupération des ramassages terminés, puis application des filtres définis dans l'URL côté frontend ;`,
                        `Transmission des résultats filtrés au backend pour générer les statistiques ;`,
                        `Intégration du dashboard avec <em>Material UI</em> et un template <em>Materio</em>, adapté pour afficher les données dynamiquement.`,
                    ],
                    img_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S6/dashboard.png",
                            style: `max-height: 265px;`
                        }
                    ]
                }
            ],
        },
        result: {
            title: `Résultat`,
            text: `J'ai beaucoup apprécié ce stage, en grande partie grâce à mes collègues qui se sont montrés disponibles et pédagogues chaque fois que j'en ai eu besoin.\n
            Vous pouvez consulter le diaporama de ma soutenance <a href='https://docs.google.com/presentation/d/1LiP-nK3gmnG1EadbeIMfyvVh-VUsXMA4EwR9I6H2e2o/edit?usp=sharing' target='_blank'>ici</a>.`,
        },
        technologies: [technos.graphql, technos.hasura, technos.jira, technos.minio, technos.next_js, technos.react_js, technos.scrum, technos.ts]
    },
    BUT_S5: {
        title: `Application de tests de réflexes`,
        category: categories.academic,
        introduction: {
            text: `Ce projet, réalisé en troisième année de BUT Informatique, en collaboration avec quatre autres étudiants, consistait à concevoir une application multi-architecture permettant à des scientifiques de réaliser des tests de réflexes.`
        },
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
            img_style: `col-lg-6`,
            images: [
                {
                    path: "images/projects/BUT_S5/structure.png",
                    legend: `Architecture globale du projet`,
                    style: 'max-height: 250px;'
                }
            ]
        },
        implementation: {
            title: `Contributions`,
            text: `Nous avons travaillé avec ${technos.gitlab.name} et ${technos.trello.name} afin de faciliter le versioning et la planification des tâches.`,
            sections: [
                {
                    title: `API et frontend`,
                    list: [
                        `Développement d'une API avec "express" de ${technos.node_js.name} et connexion à une base de données ${technos.mongo.name} ;`,
                        `Mise en place de la Swagger Documentation et de tests unitaires pour valider les méthodes de l'API ;`,
                        `Création d'un frontend connecté à l'API avec affichage de graphiques dynamiques réalisés grâce à la bibliothèque <em>Vue chartjs</em> ;`,
                        `Déploiement de l'API avec ${technos.docker.name}.`,
                    ],
                    img_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S5/frontend.png",
                            style: `max-height: 300px;`
                        }
                    ]
                }, {
                    title: `Serveur d'analyse`,
                    list: [
                        `Recherche d'une bibliothèque adaptée au traitement d'images ;`,
                        `Refonte de l'application mobile pour s'adapter aux contraintes de la bibliothèque choisie ;`,
                        `Développement et connexion du serveur d'analyse avec l'application mobile, accompagnés de tests unitaires.`,
                    ]
                }, {
                    title: `Microcontrôleurs`,
                    list: [
                        `Configuration de la carte Arduino à partir des microcontrôleurs fournis ;`,
                        `Rédaction du code Arduino pour faire fonctionner les microcontrôleurs ;`,
                        `Réalisation de tests manuels ;`,
                        `Envoi des résultats au serveur de centralisation.`,
                    ],
                    img_style: `col-lg-6`,
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
        result: {
            title: `Résultat`,
            text: `Le projet a permis de développer une application fonctionnelle, capable de collecter et d'analyser des données de tests de réflexes, puis de les présenter via une interface claire et interactive. Cette expérience m'a permis de renforcer mes compétences en développement fullstack, en travail d'équipe et en gestion de projet complexe.\n
            Vous pouvez consulter notre soutenance <a href='https://docs.google.com/presentation/d/1ciTwJQT0wF97OlqsJSNzQmrdxO6tPPnuQ1vWaAyG5aA/edit#slide=id.g230ccc5832e_0_0' target='blank'>ici</a> et notre dépôt Git <a href='https://github.com/giuliana-fabrizio/TestsReflexes' target='blank'>ici</a>.`
        },
        technologies: [technos.arduino, technos.docker, technos.gitlab, technos.java, technos.js, technos.node_js, technos.kotlin, technos.mongo, technos.vue_js]
    },
    BUT_S4: {
        title: `Outil de facturation`,
        category: categories.professional,
        introduction: {
            text: `Ce stage de trois mois (avril - juin 2023), réalisé chez Natural Solutions, consistait à reprendre leur outil de facturation pour corriger les problèmes, améliorer les fonctionnalités existantes et en développer de nouvelles.`
        },
        implementation: {
            title: `Mise en œuvre`,
            text: `J'ai travaillé en suivant la méthodologie agile ${technos.scrum.name} pour m'adapter aux besoins évolutifs des clients. Le versioning et la collaboration ont été assurés via ${technos.gitlab.name}.`,
            sections: [
                {
                    title: `Base de données`,
                    list: [
                        `Création du Modèle Conceptuel de Données (MCD) ;`,
                        `Utilisation du SGBD ${technos.postgresql.name} ;`,
                        `Intégration de l'ORM ${technos.sequelize.name} pour simplifier l'interaction avec la base ;`,
                        `Connexion de la base avec l'API et adaptation du code de l'application ;`,
                        `Développement d'une fonction d'import de données dans la base depuis un fichier JSON.`,
                    ],
                    img_style: `col-lg-6`,
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
        result: {
            title: `Résultat`,
            text: `Grâce à mes collègues, très attentifs et disponibles, cette expérience professionnelle m'a beaucoup appris.\
            J'ai renforcé mes compétences en gestion de projet grâce à l'utilisation quotidienne de ${technos.scrum.name}, ainsi que ma capacité à me documenter et à chercher des solutions de manière autonome.\n
            Vous pouvez consulter le diaporama de ma soutenance <a href='https://docs.google.com/presentation/d/1uueQqS5IAyxeuxPOwv-2YE4rRnxuOs72wY5auPL-VPI/edit?usp=sharing' target='_blank'>ici</a>.`,
        },
        technologies: [technos.gitlab, technos.js, technos.node_js, technos.postgresql, technos.react_js, technos.sequelize, technos.scrum]
    }
};


/* ***************************************************************** degrees page ***************************************************************** */

const degrees_page_title = "MY ACADEMIC TRAINING";

const school_career = {
    title: `My background`,
    content: `After graduating with a scientific baccalaureate, I took a gap year to reflect on my professional future.\
    It was during this time that I discovered computer sciencewhose constantly evolving nature and diversity motivated me to pursue in this field.\n
    Today I am particularly interested in artificial intelligence and big data processing, and I am looking to apply my knowledges to concrete projects.`
}

const degrees_title = `My degrees`;

const degrees = {
    engineer: {
        title: `Engineering cycle`,
        logo: "images/degrees/engineer.png",
        school: `University of Technology of Belfort-Montbéliard (UTBM)`,
        place: `Belfort, France`,
        date: `Since September 2024`,
    },
    but: {
        title: `Bachelor of Technology in Computer Science`,
        logo: "images/degrees/but.png",
        specialization: `Specialization : application development : design, development, validation`,
        mention: `Valedictorian`,
        school: `Belfort-Montbéliard IUT`,
        place: `Belfort, France`,
        date: `June 2024`,
    },
    bac: {
        title: `General baccalaureate`,
        logo: "images/degrees/bac.png",
        specialization: `Specialization : science`,
        school: `Lycée Périer`,
        place: `Marseille, France`,
        date: `July 2020`
    }
}

const certifications_title = `My certifications`;

const certifications = {
    mooc_management: {
        title: `Project Management`,
        logo: "images/degrees/mooc_gdp.png",
        specialization: `Specializations :
        <ul class='text-start'>\
            <li>External functional analysis</li>\
            <li>Strategic project analysis</li>\
            <li>System performance diagnostic (technical)</li>\
            <li>Project impact assessment</li>\
            <li>Agile project management with Scrum</li>\
            <li>Creativity management and brainstorming</li>\
            <li>Project team management</li>\
            <li>Problem-solving tools and methodologies</li>\
            <li>Visual project management</li>\
            <li>OAW - Web tools and applications for project management</li>\
            <li>Advanced planning</li>\
            <li>From project to entrepreneurial action</li>\
            <li>Introduction to the main TRIZ tools</li>\
        </ul>`,
        school: `MOOC`,
        date: `November 2024`,
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
        label_redirection: "Voir le sujet",
        redirection: "BUT_S6",
        logo: "images/experiences/natural_solutions.png",
        date: `Janvier - Avril 2024`,
        company: `Natural Solutions`,
        place: `Marseille, France`,
    },
    stage_2023: {
        title: `Stagiaire développeuse fullstack I`,
        label_redirection: "Voir le sujet",
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

// TODO HOBBIES
const interests_page_title = "MY HOBBIES";

const interests = {
    1: {
        title: `Sporting activity & travels`,
        description: `Since 2010, I have been practicing swimming. I was registered in a club when I was a child, but now I swim occasionally. I also love exploring new places and admire their landscapes. I regularly go hiking that allows me to take on new challenges while making beautiful discoveries.`,
        legend: 'Pictures taken during my trips',
        images: [carousel_1, carousel_2, carousel_3],
        support: `carousel`
    },
    2: {
        title: `Video games`,
        description: `During my computer science bachelor's degree some friends introduced me to video games. However I am not a big gamer so I mostly play Minecraft. What I appreciate most is the variety of mods that constantly renew the experience by adding new worlds, characters, creatures and materials.`,
        legend: `3D modeling of my Minecraft skin. Use the mouse (or touch) to zoom and rotate the model.`,
        support: `mc`
    },
    3: {
        title: `Sewing`,
        description: `I discovered sewing thanks to my grandmother, who was a seamstress. I started by creating clothes for my dolls and now I make useful everyday items such as battery protective covers, handbags and pencil cases.`,
        legend: `External battery protective cover`,
        // image: image_sewing,
        support: `img`
    },
    4: {
        title: `3D modeling`,
        description: `After discussing a renovation project with my mother, I decided to try 3D modeling. That's how I discovered Sweet Home 3D software. Using this tool, I first redesigned a room in our house, then I reproduced a studio where I lived which I found very aesthetically pleasing.`,
        legend: `3D model of a studio made with Sweet Home 3D. Use the mouse (or touch) to zoom and rotate the model.`,
        support: `modeling`
    }
}


/* ***************************************************************** not found page ***************************************************************** */

const not_found_title = "PAGE NOT FOUND";


module.exports = {
    name: name,
    home_btn: home_btn,
    academic_training_btn: academic_training_btn,
    experiences_btn: experiences_btn,
    projects_btn: projects_btn,
    interests_btn: interests_btn,
    status: status,
    about_me_title: about_me_title,
    about_me: about_me,
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
