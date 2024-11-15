const sae_101_102_partie_de_jeu = require("../files/sae_101_102/partie_de_jeu.png");
const sae_s4_mcd = require("../files/sae_stage_s4/MCD.png");
const sae_s4_principe_selection_apres = require("../files/sae_stage_s4/principe_selection_apres.png");
const archi_sae = require("../files/sae_s5/archi_sae.png");
const graphs_frontend = require("../files/sae_s5/graphs_frontend.png");


/* ***************************************************************** common ***************************************************************** */

const name = "Giuliana GODAIL-FABRIZIO";
const age = 21;


/* ***************************************************************** nav bar ***************************************************************** */

const home_btn = "Accueil";
const academic_training = "Formations";
const projects_btn = "Projets";

/* ***************************************************************** home page ***************************************************************** */

const status = "Étudiante en informatique";

const about_me_title = "À propos de moi";
const about_me = `Bonjour, je suis ${name}. Agée de ${age} ans, je suis actuellement étudiante en première année à <a href="https://telecomnancy.univ-lorraine.fr/" target="_blank">Télécom Nancy</a>. Passionnée par l'informatique, je cherche constamment à me perfectionner. J'apprécie tout particulièrement la conception et l'optimisation de projets, avec pour objectif de répondre au mieux aux besoins des utilisateurs.`;
const my_projects = "Consulter mes projets";

const hobbies_title = "Loisirs";
const hobbies = "Durant mon temps libre, je fais un peu de sport comme du jogging ou de la natation. Je travaille également sur des projets personnels. Enfin, j’aime beaucoup la couture, par exemple, j’ai réalisé des trousses pour ranger mes stylos et quelques autres gadgets.";
const download_cv = "Télécharger mon CV";


/* ***************************************************************** footer ***************************************************************** */

const link_cv = "https://raw.githubusercontent.com/giuliana-fabrizio/Portfolio/master/portfolio/files/Curriculum_vitae_Giuliana_GODAIL-FABRIZIO.pdf";
const mail = "mailto:godailfabriziogiuliana@gmail.com";
const github = "https://github.com/giuliana-fabrizio";
const linkedin = "https://www.linkedin.com/in/giuliana-godail-fabrizio-20639525b/";


/* ***************************************************************** projects page ***************************************************************** */

const projects_page_title = "MES PROJETS";
const projects_page_presentation = "Sur cette page, vous découvrirez l'ensemble des projets sur lesquels j'ai travaillé.";


/* ***************************************************************** projects page ***************************************************************** */

const filterLabel = "Filtrer";
const categoriesLabel = "Type de projet";
const technosLabel = "Technologies";
const confirmFilters = "Valider";
const resetFilters = "Réinitialiser";

const categories = {
    personal: { name: "Personnel", class: "bg-success" },
    professional: { name: "Professionnel", class: "bg-info" },
    academic: { name: "Universitaire", class: "bg-primary" },
};

const technos = {
    // Frontend Development
    boostrap: { name: "Boostrap", class: "bg-success" },
    css: { name: "CSS", class: "bg-success" },
    html: { name: "HTML", class: "bg-success" },
    javafx: { name: "JavaFX", class: "bg-secondary" },
    vue_js: { name: "Vue.JS", class: "bg-success" },

    // Backend Web Development
    react_js: { name: "React JS", class: "bg-success" },
    node_js: { name: "Node JS", class: "bg-danger" },
    flask: { name: "Flask", class: "bg-danger" },

    // Collaboration Tools
    github: { name: "GitHub", class: "bg-warning" },
    gitlab: { name: "GitLab", class: "bg-warning" },
    jira: { name: "Jira", class: "bg-warning" },
    scrum: { name: "SCRUM", class: "bg-warning" },
    trello: { name: "Trello", class: "bg-warning" },

    // Containerization & Virtualization
    docker: { name: "Docker", class: "bg-secondary" },
    virtualbox: { name: "VirtualBox", class: "bg-secondary" },

    // Database & Query Languages
    graphql: { name: "GraphQL", class: "bg-info" },
    minio: { name: "Minio", class: "bg-info" },
    mongo: { name: "MongoDB", class: "bg-info" },
    postgresql: { name: "PostgreSQL", class: "bg-info" },
    sequelize: { name: "Sequelize", class: "bg-info" },
    sql: { name: "SQL", class: "bg-info" },
    hasura: { name: "Hasura", class: "bg-info" },

    // Programming Languages
    java: { name: "Java", class: "bg-dark" },
    js: { name: "JS", class: "bg-dark" },
    python: { name: "Python", class: "bg-dark" },
    ts: { name: "TypeScript", class: "bg-dark" },
    kotlin: { name: "Kotlin", class: "bg-dark" },

    // IoT & Embedded Systems
    arduino: { name: "Arduino", class: "bg-primary" },

    // Presentation Tools
    word: { name: "Word", class: "bg-light text-dark" },
    slide: { name: "Google Slides", class: "bg-light text-dark" }
};

const projects = {
    sae_101_102: {
        title: `SAE 101-102`,
        category: categories.academic,
        instructions: {
            title: `Consignes`,
            text: `J'ai réalisé ce projet universitaire dans le cadre de ma première année en BUT Informatique. Il consistait à concevoir un <span style='color:red;'><strong>mini-jeu en Java</strong></span>.\n
            Ce jeu se déroule sur un plateau triangulaire de 21 cases, où chaque joueur possède 10 jetons numérotés de 1 à 10. Le but est de placer ses jetons de manière à ce que, à la fin du jeu, la somme des numéros des jetons autour de la case vide soit inférieure à celle de l'adversaire.\n
            Pour rendre le jeu plus intéressant, j'ai dû développer <span style='color:green;'><strong>deux intelligences artificielles</span></strong> (IA) permettant de jouer contre l'ordinateur, selon la réponse à la question "Jouer seul ?" affichée dans le terminal.`
        },
        implementation: {
            title: `Mise en œuvre`,
            text: `Pour mener à bien ce projet, j'ai structuré mon travail en plusieurs étapes. Tout d'abord, j'ai conçu différents <span style='color:red;'><strong>algorithmes</strong></span> (une étape essentielle avant l'implémentation du code).\n
            J'ai ensuite créé un fichier de test dans lequel j'implémentais ces algorithmes pour les évaluer en conditions réelles. Cela me permettait d'avoir une <span style='color:blue;'><strong>version stable</strong></span> du code tout en travaillant sur une version parallèle dédiée à l'ajout de nouvelles fonctionnalités ou à l'amélioration des méthodes existantes.\n
            Pour les IA, j'ai développé et implémenté <span style="color:green"><strong>deux stratégies différentes</strong></span>. La première IA utilise une approche simple et naïve : elle sélectionne aléatoirement une case libre parmi celles disponibles. La seconde IA, plus élaborée, met l'accent sur les extrémités des lignes, puis passe à une méthode aléatoire lorsque sa stratégie initiale est épuisée.`,
        },
        result: {
            title: `Résultat de la SAÉ`,
            text: `Sur la capture d'écran ci-dessous, on observe le résultat d'une partie entre les deux IA. L'IA gagnante (en bleu) est celle dont la stratégie était plus avancée que celle de l'autre IA. Vous pouvez consulter le dépôt GitHub de ce jeu à l'adresse <a href="https://github.com/giuliana-fabrizio/SAE-Jeu-du-jeton-manquant" target="_blank">suivante</a>.\n
            J'ai beaucoup apprécié cette SAÉ en raison de sa <span style='color:red'><strong>complexité</strong></span>, qui m'a poussée à sortir de ma zone de confort. Elle m'a également permis de faire des progrès significatifs en algorithmique.`,
            images: [
                {
                    path: sae_101_102_partie_de_jeu,
                    legend: `Figure 1 : Plateau de jeu`
                }
            ],
        },
        technologies: [technos.github, technos.java]
    },
    stage_s4: {
        title: `Stage (2023)`,
        category: categories.professional,
        instructions: {
            title: `Présentation`,
            text: `Au cours de ma deuxième année en BUT Informatique, j'ai effectué un stage de trois mois (avril - juin 2023) au sein de <span style='color:red;'><strong>Natural Solutions</strong></span>, une entreprise du secteur numérique basée à Marseille.\n
            Chaque mois, l'entreprise doit établir des devis et des factures pour ses clients. Pour simplifier ce processus, un stagiaire avait été recruté en 2021 pour mettre en place l’Outil Facturation, réalisé en <span style='color:blue'><strong>${technos.js.name}</strong></span>, <span style='color:blue'><strong>${technos.node_js.name}</strong></span> et <span style='color:blue'><strong>${technos.react_js.name}</strong></span>.\n
            Ma mission était de corriger les problèmes existants, d'améliorer les fonctionnalités déjà en place et d'en ajouter de nouvelles. Parmi les tâches qui m'ont été confiées, figuraient la mise en place de la base de données (BDD), la modification du principe de sélection des projets et la génération de documents.\n
            Bien que j'ai travaillé seule sur ce projet, j'ai pu solliciter mon maître de stage en cas de besoin.`
        },
        organization_of_work: {
            title: `Organisation du travail`,
            text: `Chez Natural Solutions, j'ai appliqué la <a href="https://chef-de-projet.fr/methodologie-scrum/">méthodologie ${technos.scrum.name}</a>, une méthode agile qui favorise l'amélioration continue et la collaboration pour adapter le développement aux besoins évolutifs des clients.\n
            En parallèle, j'ai également travaillé avec <span style='color:red;'><strong>${technos.gitlab.name}</strong></span> tout au long de mon stage. Pour une gestion efficace, j'ai créé plusieurs branches du projet (pour le développement, la production, les modifications globales, etc.), ce qui m'a permis de suivre les <span style='color:green;'><strong>bonnes pratiques du développement</strong></span>.`
        },
        implementation: {
            title: `Mise en œuvre`,
            section_1: `<h4 style='color:black;'><strong>Base de données</strong></h4>
            Avant mon arrivée, les données de l'Outil Facturation étaient conservées dans un <span style='color:blue'><strong>fichier JSON</strong></span>. Pour les migrer vers une base de données, j'ai réalisé les étapes suivantes :
            <ul><li>création d'un MCD (Modèle Conceptuel de Données) ;</li><li>utilisation du SGBD (Système de Gestion de Bases de Données) <span style='color:red;'><strong>${technos.postgresql.name}</strong></span> ;</li><li>emploi de l'ORM <span style='color:red;'><strong>${technos.sequelize.name}</strong></span> pour simplifier l'interaction avec la base de données ;</li><li>connexion de la base de données avec le backend via des variables d'environnement. Lors de cette étape, j'ai dû adapter l'intégralité du code de l'application ;</li><li>enrichissement de la base de données en développant une fonction pour <span style='color:green;'><strong>insérer les données</strong></span>, élément par élément, à partir du fichier JSON où elles étaient précédemment stockées.</li></ul>`,
            images_1: [
                {
                    path: sae_s4_mcd,
                    legend: `Figure 1 : MCD de l'application`
                }
            ],
            section_2: `\n<h4 style='color:black;'><strong>Modification du principe de sélection des projets</strong></h4>
            Lorsque l'utilisateur souhaitait modifier un projet, il devait connaître son nom exact. Il a été décidé que le nouveau système de recherche de projet utiliserait <span style='color:blue'><strong>deux listes déroulantes</strong></span>, permettant de sélectionner ou désélectionner chaque projet. L'une des listes afficherait tous les projets développés pour RENECO (le principal client de Natural Solutions), tandis que l'autre inclurait tous les autres projets.\n
            Pour accomplir cette tâche, j’ai dû :
            <ul><li><span style='color:red'><strong>interroger une API externe</strong></span> pour obtenir la liste complète des projets ;</li><li>identifier si chaque projet était développé pour RENECO ou non ;</li><li>ajuster l'interface graphique en conséquence.</li></ul>`,
            images_2: [
                {
                    path: sae_s4_principe_selection_apres,
                    legend: `Figure 2 : Principe de sélection des projets`
                }
            ],
            section_3: `\n<h4 style='color:black;'><strong>Génération de documents</strong></h4>
            Cette mission consistait à créer un rapport sur les activités de support réalisées pendant une période donnée. Ces activités concernent les tâches effectuées par l'équipe de développement après la livraison du produit (service après-vente).\n
            Pour gérer ces activités, Natural Solutions utilise <span style='color:blue;'><strong>Zendesk</strong></span>, une plateforme de gestion de la relation client. Il était donc crucial d'interroger l'API de Zendesk pour générer le rapport.\n
            J'ai d'abord établi une connexion avec l'API pour obtenir les données pertinentes, que j'ai ensuite sélectionnées, triées par ordre chronologique et formatées pour le rapport.\n
            Le code permettant le téléchargement du fichier était déjà présent, mais j'ai dû l'adapter pour générer correctement les documents. En complément, j'ai créé un <span style='color:green'><strong>modèle Word</strong></span> afin de structurer et d'organiser automatiquement le contenu du rapport lors de sa génération.`
        },
        result: {
            title: `Résultat de la SAÉ`,
            text: `J'ai beaucoup aimé cette première expérience professionnelle, c'est en grande partie grâce à mes collègues qui se sont montrés très attentifs.\n
            De plus, j'ai pu m'améliorer en <span style='color:red'><strong>gestion de projet</strong></span> grâce à l'utilisation quotidienne de la méthodologie SCRUM. J'ai aussi développé ma capacité à me documenter et à chercher des informations par moi-même ainsi que ma capacité à utiliser des outils tels que GitLab.\n
            Vous pouvez consulter le diaporama de ma soutenance <a href='https://docs.google.com/presentation/d/1uueQqS5IAyxeuxPOwv-2YE4rRnxuOs72wY5auPL-VPI/edit?usp=sharing' target='_blank'>ci-joint</a>.`,
        },
        technologies: [technos.js, technos.node_js, technos.react_js, technos.postgresql, technos.gitlab]
    },
    sae_s5: {
        title: `SAÉ 501-601`,
        category: categories.academic,
        instructions: {
            title: `Objectif`,
            text: `Dans le cadre de ma troisième année de BUT informatique, j'ai travaillé sur ce projet en collaboration avec quatre autres étudiants. Notre mission consistait à concevoir une <span style='color: red'><strong>application multi-architecture</strong></span> intégrant des <span style='color:green'><strong>microcontrôleurs</strong></span> et des <span style='color:green'><strong>objets connectés</strong></span>, afin de collecter, traiter et visualiser des données.\n
            Nous avions la liberté de définir une situation d'application pour mettre en œuvre ces consignes, et notre équipe a opté pour le développement d'une application destinée aux scientifiques, permettant de réaliser des tests de réflexe.`
        },
        architecture: {
            title: `Architecture du projet`,
            text: `L’architecture du projet, imposée par nos professeurs, suivait des consignes précises. Nous devions concevoir une <span style='color: #d4d6ff'><strong>application mobile</strong></span> capable de transmettre des informations (son, vidéos ou images) à un <span style='color: #e7dec7'><strong>serveur d’analyse</strong></span>. Ce dernier avait pour rôle de traiter ces données et de transmettre les résultats à un <span style='color: #c5dcf1'><strong>serveur de centralisation</strong></span>, considéré comme le "noyau" de l’application. Développé impérativement en ${technos.java.name}, ce serveur devait enregistrer les données issues du serveur d’analyse dans une <span style='color: #fce5cd'><strong>base de données</strong></span> ${technos.mongo.name}.\n
            Comme illustré dans le schéma ci-dessous, ce serveur était également chargé de récupérer et de sauvegarder les résultats envoyés par les <span style='color: #fdd9ff'><strong>microcontrôleurs</strong></span>. Par ailleurs, une <span style='color: #d9ead3'><strong>API</strong></span> en ${technos.node_js.name} devait être créée pour assurer les échanges entre le serveur de centralisation, la base de données, et une interface <span style='color: #f8e0e0'><strong>frontend</strong></span> obligatoirement réalisée en ${technos.vue_js.name}, destinée à la visualisation des données.`,
            images: [
                {
                    path: archi_sae,
                    legend: `Figure 1 : architecture de la SAÉ`
                },
            ]
        },
        organization_of_work: {
            title: `Réalisation de la SAÉ`,
            section_1: `Tout au long du cycle de vie du projet, nous avons utilisé <span style='color:green;'><strong>GitLab</strong></span> et <span style='color:green;'><strong>Trello</strong></span> afin de faciliter le versioning et la planification des tâches.\n
                Nous nous sommes rapidement répartis les tâches en tenant compte des préférences de chacun et en veillant à ce que chaque membre puisse contribuer à l'ensemble du projet. C'est ainsi que j'ai entamé mon travail avec le développement de l’API et le frontend.`,
            section_2: `\n<h4 style='color:black;'><strong>Réalisation de l'API et du frontend</strong></h4>
                Le frontend devant afficher les informations de la base de données sous forme de graphiques et de statistiques, j’ai commencé par identifier les données pertinentes à présenter, puis imaginé différentes façons de les visualiser.\n
                J’ai d’abord travaillé sur l’API en utilisant la dépendance "express" de ${technos.node_js.name}, qui simplifie la création d’un serveur. Une fois celui-ci en place, j’ai établi une connexion avec la base de données ${technos.mongo.name}, créée par un camarade, afin d’en extraire les informations nécessaires. Avant de passer au frontend, j’ai réalisé des tests unitaires pour m’assurer que les méthodes de l’API fonctionnaient correctement.\n
                Pour le frontend, j'ai commencé par assurer la connexion avec l’API puis j'ai opté pour la bibliothèque "Vue chartjs" qui permet de faire des graphiques dynamiques.\n
                Avant de passer au développement du serveur d'analyse, j'ai permit le déploiement de l'API avec ${technos.docker.name}.`,
            images: [
                {
                    path: graphs_frontend,
                    legend: `Figure 2 : Graphiques du frontend (données de tests)`
                },
            ],
            section_3: `\n<h4 style='color:black;'><strong>Développement du serveur d'analyse</strong></h4>
                Cette étape a été sans doute l’une des plus complexes, car elle a exigé une longue phase de recherche et de nombreuses reprises de l'application mobile, initialement prévue pour manipuler des vidéos.\n
                La principale difficulté résidait dans la recherche d’une bibliothèque capable de traiter un média. Dans un premier temps, nous avons tenté de travailler avec des vidéos, mais cette approche étant trop compliquée pour le temps imparti, nous avons opté pour l'utilisation de fichiers SVG pour analyser exclusivement des images. Cette décision a entrainé la modification de l'application mobile.\n
                Enfin, nous avons établi la connexion entre l’application mobile et le serveur d’analyse en réalisant, pour chacun, plusieurs corrections au cours du temps. Pour cette partie aussi, il a été essentiel de réaliser des tests unitaires.`
        },
        result: {
            title: `Résultat de la SAÉ`,
            text: `Cette SAÉ s'est révélée extrêmement enrichissante. J'ai pu développer de nombreuses compétences, humaines et professionnelles, ainsi que comprendre l'importance de la communication au sein d'une équipe.\n
            Vous pouvez consulter notre soutenance <a href='https://docs.google.com/presentation/d/1ciTwJQT0wF97OlqsJSNzQmrdxO6tPPnuQ1vWaAyG5aA/edit#slide=id.g230ccc5832e_0_0' target='blank'>ici</a> et notre dépôt Git <a href='#'>ici</a>.`
        },
        technologies: [technos.arduino, technos.java, technos.js, technos.kotlin, technos.docker, technos.gitlab]
    },
    stage_s6: {
        title: `Présentation du Stage`,
        category: categories.professional,
        instructions: {
            title: `Objectif`,
            text: `J'ai réalisé mon stage chez <span style='color:red;'><strong>Natural Solutions</strong></span>, une entreprise basée à Marseille. Cette entreprise se consacre à mettre la technologie au service de la biodiversité en développant des outils pour les acteurs environnementaux et les associations. Ces outils sont principalement des applications Web et mobiles.\n\nL'équipe que j'ai rejoint était composée :\n<ul><li>de deux autres développeurs ;</li><li>d'un chef de projet ;</li><li>d'une designeuse.</li></ul>\nMon équipe et moi avons travaillé sur un projet pour <span style='color:green;'><strong>Wings of Ocean</strong></span>, une association dédiée à la préservation de l'environnement. Notre mission était de développer une plateforme de gestion de ramassage de déchets.\n\nMon objectif pendant ce stage était de <span style='color:blue;'><strong>contribuer au développement de ce projet</strong></span>, appelé DepollutionMap. Les tâches dont j'ai été chargée m'ont été confiées au fur et à mesure du projet.`
        },
        organization_of_work: {
            title: `Processus de développement`,
            text: `Pour développer cette application nous avons utilisé <span style='color:green;'><strong>GitLab</strong></span> et <span style='color:green;'><strong>Jira</strong></span> pour gérer le versioning et la planification des tâches.\nEn ce qui concerne le déploiement, l'application est déployée en conteneurs <span style='color:green;'><strong>Docker</strong></span>.\nLes principaux langages que j'ai pu manipuler sont les suivants :\n<ul><li>GraphQL ;</li><li>SQL ;</li><li>TypeScript ;</li><li>React.js ;</li></ul>`
        },
        result: {
            title: `Résultat de la SAÉ`,
            text: `À la fin de ce stage, j'ai dû réaliser une présentation orale et deux rapports :\n<ul><li>l'un technique (destiné à un informaticien reprenant le travail) ;</li><li>l'autre destiné à expliquer le déroulement de notre stage sans entrer dans les détails techniques.</li></ul>\n<a href='https://docs.google.com/presentation/d/1LiP-nK3gmnG1EadbeIMfyvVh-VUsXMA4EwR9I6h4e2o/edit?usp=sharing' target='_blank'>Lien de la présentation</a>`,
            // files: [
            //     {
            //         path: rapport_general,
            //         alt: `Rapport général"
            //     }, {
            //         path: rapport_technique,
            //         alt: `Rapport technique"
            //     },
            // ]
        },
        technologies: [technos.graphql, technos.hasura, technos.minio, technos.ts, technos.jira, technos.scrum]
    }
};

module.exports = {
    name: name,
    home_btn: home_btn,
    academic_training: academic_training,
    projects_btn: projects_btn,
    status: status,
    about_me_title: about_me_title,
    about_me: about_me,
    my_projects: my_projects,
    hobbies_title: hobbies_title,
    hobbies: hobbies,
    download_cv: download_cv,
    link_cv: link_cv,
    mail: mail,
    github: github,
    linkedin: linkedin,
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
}
