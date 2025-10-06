const carousel_1 = require("../public/images/interests/carousel-1.jpg");
const carousel_2 = require("../public/images/interests/carousel-2.png");
const carousel_3 = require("../public/images/interests/carousel-3.jpg");
// const image_sewing = require("../public/images/interests/sewing.png");


/* ***************************************************************** common ***************************************************************** */

const birthday = new Date("11-27-2002");

function getAge() {
    const currentDate = new Date();
    var age = currentDate.getFullYear() - birthday.getFullYear();
    if (currentDate.getMonth() < birthday.getMonth()) {
        age -= 1;
    } else if (currentDate.getMonth() == birthday.getMonth() &&
        currentDate.getUTCDate() < birthday.getUTCDate()) {
        age -= 1;
    }
    return age;
}

const name = "Giuliana GODAIL-FABRIZIO";
const age = getAge();


/* ***************************************************************** nav bar ***************************************************************** */

const home_btn = "Accueil";
const academic_training_btn = "Formations";
const experiences_btn = "Expérience";
const projects_btn = "Projets";
const interests_btn = "Intérêts";

/* ***************************************************************** home page ***************************************************************** */

const status = "Étudiante en informatique";

const about_me_title = "À propos de moi";
const about_me = `Âgée de ${age} ans, je suis actuellement étudiante en deuxième année du cycle ingénieur en informatique à l'<a href="https://www.utbm.fr/formations/ingenieur/informatique/" target="_blank">UTBM</a>. Passionnée par cette discipline, je cherche constamment à me perfectionner. Pour cela, je réalise régulièrement des projets personnels en imaginant moi-même un besoin, ce qui me permet d'expérimenter différentes approches et technologies.\n
J'apprécie tout particulièrement concevoir et optimiser des solutions afin de proposer des outils performants et adaptés aux besoins des utilisateurs. Actuellement, j'ambitionne de me spécialiser dans le domaine du traitement des données massives et de l'intelligence artificielle.`;
const download_cv = "Télécharger mon CV";


/* ***************************************************************** footer ***************************************************************** */

const link_cv = "https://github.com/giuliana-fabrizio/Portfolio/raw/refs/heads/main/portfolio/public/files/Curriculum_vitae_Giuliana_GODAIL-FABRIZIO.pdf";
const mail = "mailto:godailfabriziogiuliana@gmail.com";
const github = "https://github.com/giuliana-fabrizio";
const linkedin = "https://www.linkedin.com/in/giuliana-godail-fabrizio-20639525b/";


/* ***************************************************************** projects page ***************************************************************** */

const projects_page_title = "MES PROJETS";
const projects_page_presentation = "Sur cette page, vous découvrirez l'ensemble des projets sur lesquels j'ai travaillé.";

const filterLabel = "Filtrer";
const categoriesLabel = "Type de projet";
const technosLabel = "Technologies";
const confirmFilters = "Valider";
const resetFilters = "Réinitialiser";

const categories = {
    personal: { name: "Personnel", style: "background-color: #b6d3fe" },
    professional: { name: "Professionnel", style: "background-color: #86b6fe" },
    academic: { name: "Universitaire", style: "background-color: #5599fd" },
};

const technos = {
    // utils
    firebase: { name: "Firebase", logo: "images/technologies/firebase.png" },
    stripe: { name: "Stripe", logo: "images/technologies/stripe.png" },

    // Frontend Development
    vue_js: { name: "Vue.js", logo: "images/technologies/vue-js.png" },
    react_js: { name: "React.js", logo: "images/technologies/react-js.png" },

    // Backend Web Development
    flask: { name: "Flask", logo: "images/technologies/flask.png" },
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
    virtualbox: { name: "VirtualBox", logo: "images/technologies/virtualbox.png" },

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
    swift: { name: "Swift", logo: "images/technologies/swift.png" },
};

const projects = {
    UTBM_AP4A: {
        title: `BadgeAccess`,
        category: categories.academic,
        introduction: {
            text: `Ce projet universitaire, réalisé en solitaire en première année de cycle ingénieur, consistait à simuler un système de contrôle d'accès par badges et lecteurs.`
        },
        implementation: {
            title: `Tâches réalisées`,
            text: ``,
            sections: [
                {
                    title: `Architecture du projet`,
                    list: [
                        `Diagramme UML pour modéliser classes et relations ;`,
                        `Organisation en modules séparés (headers / sources).`,
                    ],
                    // images: [
                    //     // TODO
                    // ]
                }, {
                    title: `Programmation orientée objet (POO)`,
                    text: `Ce projet m'a permis de mettre en pratique plusieurs concepts fondamentaux de la programmation orientée objet.`,
                    list: [
                        `L'application de la forme canonique de Coplien ;`,
                        `L'héritage et l'implémentation de classes abstraites ;`,
                        `Le polymorphisme (redéfinition et surcharge de méthodes) ;`,
                        `La surcharge d'opérateurs (ex. opérateur d'affectation).`,
                    ]
                }, {
                    title: `Fonctionnalités disponibles`,
                    list: [
                        `Gestion des règles d'accès selon le type de personne ;`,
                        `Simulation d'accès avec badges valides ou expirés ;`,
                        `Chargement de configuration initiale via un fichier CSV ;`,
                        `Redirection de la sortie (console ou fichier de log) ;`,
                        `Horodatage automatique des logs.`,
                    ],
                    images: [
                        {
                            path: "images/projects/UTBM_AP4A/csv-config.png",
                            legend: `Exemple de configuration CSV`,
                        }
                    ]
                },
            ]
        },
        result: {
            title: `Résultat`,
            text: `Le projet a abouti à une application pleinement fonctionnelle, répondant aux exigences des professeurs. Le simulateur développé est capable de traiter des demandes d'accès en tenant\
            compte de différents paramètres, tels que les droits associés au lecteur ou la validité des badges. Vous pouvez consulter mon dépôt Git <a href='https://github.com/giuliana-fabrizio/BadgeAccess' target='_blank'>ici</a>.`
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
                        `Implémentation du système de connection et de déconnection ;`,
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
                        `Configuration de la carte Arduino à partir du matériel fourni ;`,
                        `Rédaction du code Arduino pour faire fonctionner les microcontrôleurs ;`,
                        `Réalisation de tests manuels ;`,
                        `Envoie des résultats au serveur de centralisation.`,
                    ],
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
            text: `Ce stage de trois mois (avril - juin 2023), réalisé chez Natural Solutions, consistait à reprendre leur outil de facturation pour corriger les problèmes existants, améliorer les fonctionnalités existantes et en développer de nouvelles.`
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
    },
    BUT_S1: {
        title: `Jeu du jeton manquant`,
        category: categories.academic,
        introduction: {
            text: `Ce projet universitaire consistait à développer un mini-jeu en Java sur un plateau triangulaire de 21 cases avec la possibilité de jouer contre deux intelligences artificielles.\
            Pour gagner, chaque joueur doit placer ses 10 jetons numérotés de 1 à 10 afin de minimiser la somme des numéros autour de la case vide à la fin de la partie.`
        },
        implementation: {
            title: `Contributions`,
            list: [
                `Conception et affichage du plateau de jeu dans le terminal ;`,
                `Développement de la logique pour une partie entre deux joueurs ;`,
                `Création des algorithmes des deux IA : une stratégie aléatoire et une stratégie avancée privilégiant certaines positions clés ;`,
                `Séparation du code stable et des versions de test.`
            ]
        },
        result: {
            title: `Résultat`,
            text: `Vous pouvez consulter le dépôt GitHub en cliquant <a href="https://github.com/giuliana-fabrizio/SAE-Jeu-du-jeton-manquant" target="_blank">ici</a>.`,
            images: [
                {
                    path: "images/projects/BUT_S1/game.png",
                    legend: `Simulation d'une partie entre les deux IA : victoire de la stratégie avancée`,
                    style: `max-height: 400px; margin-top: 15px;`
                }
            ],
        },
        technologies: [technos.github, technos.java]
    }
};


/* ***************************************************************** degrees page ***************************************************************** */

const degrees_page_title = "MES FORMATIONS";

const school_career = {
    title: `Mon parcours`,
    content: `Après l'obtention de mon baccalauréat scientifique en 2020, j'ai décidé de prendre une année de césure pour réfléchir à mon avenir professionnel. Durant cette année, je me suis beaucoup documentée et j'ai consulté plusieurs conseillers d'orientation.\n
    C'est un peu par hasard que j'ai découvert l'informatique. Son caractère en constante évolution et l'opportunité de contribuer à des avancées technologiques majeures m'ont motivée à intégrer un BUT Informatique en 2021. Cette discipline rapidement passionnée, me donnant envie d'approfondir mes connaissances et de me perfectionner davantage. C'est pourquoi j'ai choisi de poursuivre mes études en école d'ingénieurs.`
}

const degrees_title = `Mes diplômes`;

const degrees = {
    engineer: {
        title: `Cycle ingénieur`,
        logo: "images/degrees/engineer.png",
        school: `Université de technologie de Belfort-Montbéliard`,
        place: `Belfort, France`,
        date: `Depuis septembre 2024`,
    },
    but: {
        title: `BUT Informatique`,
        logo: "images/degrees/but.png",
        specialization: `Spécialité : réalisation d'applications : conception, développement, validation`,
        mention: `Major de promotion`,
        school: `IUT de Belfort-Montbéliard`,
        place: `Belfort, France`,
        date: `Juin 2024`,
    },
    bac: {
        title: `Baccalauréat général`,
        logo: "images/degrees/bac.png",
        specialization: `Spécialité : scientifique`,
        school: `Lycée Périer`,
        place: `Marseille, France`,
        date: `Juillet 2020`
    }
}

const certifications_title = `Mes certifications`;

const certifications = {
    mooc_management: {
        title: `Gestion de Projet`,
        logo: "images/degrees/mooc_gdp.png",
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
        date: `Novembre 2024`,
    }
}


/* ***************************************************************** experiences page ***************************************************************** */

const experiences_page_title = "MES EXPÉRIENCES";
const experiences = {
    volunteer: {
        title: `Bénévole aux Restos du Coeur`,
        description: `Principales tâches réalisées :
        <ul>\
        <li>accueil et orientation des bénéficiaires ;</li>\
        <li>distribution alimentaire adaptée aux besoins des familles ;</li>\
        <li>participation au nettoyage des locaux.</li>\
        </ul>`,
        logo: "images/experiences/restos_du_coeur.png",
        type: `Type : bénévolat`,
        date: `Depuis Septembre 2025`,
        company: `Les Restos du Coeur`,
        place: `Belfort, France`,
    },
    stage_2024: {
        title: `Développeuse Fullstack II`,
        description: `Principales tâches réalisées :
        <ul>\
        <li>insertion de données Excel dans une base de données PostgreSQL ;</li>\
        <li>réalisation du tableau de bord principal (ou Dashboard) ;</li>\
        <li>utilisation d'Hasura pour la gestion des permissions utilisateurs.</li>\
        </ul>`,
        label_redirection: `Plus de détails`,
        redirection: "BUT_S6",
        logo: "images/experiences/natural_solutions.png",
        type: `Type : stage`,
        date: `Janvier - Avril 2024`,
        company: `Natural Solutions`,
        place: `Marseille, France`,
    },
    stage_2023: {
        title: `Développeuse Fullstack I`,
        description: `Principales tâches réalisées :
        <ul>\
        <li>ajout d'une base de données PostgreSQL et utilisation de l'ORM Sequelize ;</li>\
        <li>correction d'erreurs de calcul existantes ;</li>\
        <li>modification de l'interface utilisateur : manipulation de ReactJs et interrogation d'une API externe ;</li>\
        <li>réalisation de tests unitaires en JavaScript.</li>\
        </ul>`,
        label_redirection: `Plus de détails`,
        redirection: "BUT_S4",
        logo: "images/experiences/natural_solutions.png",
        type: `Type : stage`,
        date: `Avril - Juin 2023`,
        company: `Natural Solutions`,
        place: `Marseille, France`,
    },
    cdd_2022: {
        title: `Employée de supérette`,
        description: `Principales tâches réalisées :
        <ul>\
        <li>encaissement des clients ;</li>\
        <li>rangement des rayons et réception des marchandises ;</li>\
        <li>formation des nouveaux salariés à la caisse ;</li>\
        <li>cuisson du pain.</li>\
        </ul>`,
        logo: "images/experiences/u_express.png",
        type: `Type : CDD`,
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
        description: `Depuis 2010, je pratique la natation. D'abord membre d'un club durant mon enfance, je continue aujourd'hui à nager de manière occasionnelle. Par ailleurs, j'aime explorer de nouveaux lieux et admirer leurs paysages. Bonne marcheuse, je fais régulièrement des randonnées, une activité qui me permet de relever de nouveaux défis tout en faisant de belles découvertes.`,
        legend: 'Images prises lors de mes randonnées et/ou voyages',
        images: [carousel_1, carousel_2, carousel_3],
        support: `carousel`
    },
    2: {
        title: `Jeux vidéo`,
        description: `C'est durant mon BUT Informatique à Belfort que des amis m'ont initiée aux jeux vidéo. Cependant, n'étant pas une grande joueuse, je me consacre principalement à Minecraft. Ce que j'apprécie particulièrement dans ce jeu, c'est la diversité des mods disponibles, qui permettent de renouveler l'expérience en introduisant de nouveaux mondes, personnages, créatures et matériaux.`,
        legend: `Modélisation 3D de mon skin Minecraft. Utilisez la souris (ou le tactile) pour faire pivoter le modèle.`,
        support: `mc`
    },
    3: {
        title: `Couture`,
        description: `Dès mon plus jeune âge, j'ai découvert la couture grâce à ma grand-mère, ancienne couturière. J'ai commencé par confectionner des vêtements pour mes poupées avant de réaliser aujourd'hui des objets pratiques dans mon quotidien : housses de protection pour batterie, sac à main, trousses à stylos...`,
        legend: `Housse de protection pour batterie externe`,
        // image: image_sewing,
        support: `img`
    },
    4: {
        title: `Modélisation 3D`,
        description: `C'est en discutant avec ma mère d'un projet de réaménagement que j'ai décidé de me lancer dans la modélisation 3D. C'est ainsi que j'ai découvert le logiciel Sweet Home 3D. Avec cet outil, j'ai d'abord imaginé un nouvel agencement pour une pièce de la maison avant de reproduire un studio dans lequel j'ai vécu et que je trouvais particulièrement esthétique.`,
        legend: `Modélisation 3D d'un studio réalisée avec Sweet Home 3D. Utilisez la souris (ou le tactile) pour zoomer et faire pivoter le modèle.`,
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
    about_me_title: about_me_title,
    about_me: about_me,
    download_cv: download_cv,
    link_cv: link_cv,
    mail: mail,
    github: github,
    linkedin: linkedin,
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
