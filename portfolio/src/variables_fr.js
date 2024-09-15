const sae_101_102_partie_de_jeu = require("../files/sae_101_102/partie_de_jeu.png");
const sae_s4_mcd = require("../files/sae_stage_s4/MCD.png");
const sae_s4_principe_selection_apres = require("../files/sae_stage_s4/principe_selection_apres.png");
const archi_sae = require("../files/sae_s5/archi_sae.png");


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

const link_cv = "https://raw.githubusercontent.com/giuliana-fabrizio/Portfolio/253247d87ed0a8fd4a434af54c122fb21aaeedb5/portfolio/files/Curriculum_vitae_Giuliana_GODAIL-FABRIZIO.pdf";
const mail = "mailto:godailfabriziogiuliana@gmail.com";
const github = "https://github.com/giuliana-fabrizio";
const linkedin = "https://www.linkedin.com/in/giuliana-godail-fabrizio-20639525b/";


/* ***************************************************************** projects page ***************************************************************** */

const projects_page_title = "MES PROJETS";
const projects_page_presentation = "Sur cette page, vous découvrirez l'ensemble des projets sur lesquels j'ai travaillé.";


/* ***************************************************************** projects page ***************************************************************** */

const categories = {
    academic: { name: "Universitaire", class: "bg-primary" },
    professional: { name: "Professionnel", class: "bg-info" },
    personal: { name: "Personnel", class: "bg-success" },
};

const technologies = [
    // Frontend Development
    { name: "Boostrap", class: "bg-success" },
    { name: "CSS", class: "bg-success" },
    { name: "HTML", class: "bg-success" },
    { name: "Vue.JS", class: "bg-success" },

    // Backend Web Development
    { name: "React.JS", class: "bg-success" },
    { name: "Node.JS", class: "bg-danger" },
    { name: "Flask", class: "bg-danger" },

    // Collaboration Tools
    { name: "GitHub", class: "bg-warning" },
    { name: "GitLab", class: "bg-warning" },
    { name: "Jira", class: "bg-warning" },
    { name: "SCRUM", class: "bg-warning" },
    { name: "Trello", class: "bg-warning" },

    // Containerization & Virtualization
    { name: "Docker", class: "bg-secondary" },
    { name: "VirtualBox", class: "bg-secondary" },

    // Database & Query Languages
    { name: "GraphQL", class: "bg-info" },
    { name: "Minio", class: "bg-info" },
    { name: "PostgreSQL", class: "bg-info" },
    { name: "SQL", class: "bg-info" },
    { name: "Hasura", class: "bg-info" },

    // Programming Languages
    { name: "Java", class: "bg-dark" },
    { name: "JS", class: "bg-dark" },
    { name: "Python", class: "bg-dark" },
    { name: "TypeScript", class: "bg-dark" },
    { name: "Kotlin", class: "bg-dark" },

    // IoT & Embedded Systems
    { name: "Arduino", class: "bg-primary" },

    // Presentation Tools
    { name: "Word", class: "bg-light text-dark" },
    { name: "Google Slides", class: "bg-light text-dark" },

    // Framework
    { name: "JavaFX", class: "bg-secondary" }
];

const projects = {
    sae_101_102: {
        title: `SAE 101-102`,
        category: categories.academic,
        instructions: {
            title: `Consignes`,
            text: `Ce projet universitaire consistait à concevoir un <span style='color:red;'><strong>mini-jeu en Java</strong></span>.\n
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
            text: `Sur la capture d'écran ci-dessous, on observe le résultat d'une partie entre les deux IA. L'IA gagnante (en bleu) est celle dont la stratégie était plus avancée que celle de l'autre IA. Vous pouvez consulter le dépôt GitHub de ce jeu à l'adresse suivante : <a href="https://github.com/giuliana-fabrizio/SAE-Jeu-du-jeton-manquant" target="_blank">GitHub</a>.\n
            J'ai beaucoup apprécié cette SAÉ en raison de sa complexité, qui m'a poussée à sortir de ma zone de confort. Elle m'a également permis de faire des progrès significatifs en algorithmique.`,
            images: [
                {
                    path: sae_101_102_partie_de_jeu,
                    legend: `Figure 1 : Plateau de jeu`
                }
            ],
        },
        technologies: [technologies[7], technologies[19]]
    },
    stage_s4: {
        title: `SAÉ S4.Stage`,
        category: categories.professional,
        instructions: {
            title: `Consignes`,
            text: `La SAÉ S4.Stage s'est réalisée en entreprise. Pour ma part, je l'ai réalisée à <span style='color:red;'><strong>Natural Solutions</strong></span>, une entreprise à Marseille.\n\nChaque mois, cette entreprise doit établir des devis et des factures pour ses clients. Pour simplifier ce processus, un stagiaire a été recruté en 2021 pour mettre en place l’Outil Facturation qu’il a réalisé en <strong>JS, Node JS et React JS</strong>.\n\nMa mission consiste à corriger les problèmes existants, améliorer les fonctionnalités déjà en place et en ajouter de nouvelles. Les principales tâches qui m’ont été attribuées sont la mise en place de la <span style='color:green;'><strong>base de données</strong></span>, la <span style='color:green;'><strong>modification du principe de sélection des projets</strong></span>, et la <span style='color:green;'><strong>génération de documents</strong></span>.\n\nPour ce projet j’étais seule dans l’équipe, bien que je pouvais m'orienter vers mon maître de stage si besoin.\n\nÀ la fin de cette SAÉ, nous avons dû réaliser une présentation orale et deux rapports :\n<ul><li>l'un technique (destiné à un informaticien reprenant le travail)</li><li>l'autre destiné à expliquer le déroulement de notre stage sans entrer dans les détails techniques.</li></ul>`
        },
        organization_of_work: {
            title: `Organisation du travail en groupe`,
            text: `Chez Natural Solutions, on applique la <span style='color:red;'><strong>méthodologie Scrum</strong></span>. Il s'agit d'une méthode agile basée sur une approche empirique, dynamique et participative de la conduite du projet.\n\nD’autre part, tout au cours de mon stage, j’ai été amené à utiliser <span style='color:red;'><strong>GitLab</strong></span>. C'est une plateforme de gestion du cycle de vie des applications (ALM) qui fournit des fonctionnalités de développement collaboratif. Pour l’utiliser de façon appropriée mon maître de stage et moi avons créé plusieurs branches du projet (une pour le développement, une pour la production, une pour les modifications globales, etc.). Son utilisation régulière m’a permis de respecter les <span style='color:green;'><strong>bonnes pratiques du développement</strong></span>.`
        },
        implementation: {
            title: `Mise en œuvre`,
            text: `<h4 style='color:black;'><strong>Base de données</strong></h4>\nPour mettre en place la base de données, il a été nécessaire de :\n<ul><li>Réaliser un MCD (Modèle Conceptuel de Données)</li><li>Utiliser le système de gestion de bases de données <span style='color:blue;'><strong>PostgreSQL</strong></span></li><li>Utiliser l'ORM <span style='color:blue;'><strong>Sequelize</strong></span> (destiné à simplifier l'interaction avec la base de données)</li><li>Connecter la base de données avec le backend (à l'aide de variables d'environnement)</li><li>Enrichir la base de données en créant une fonction qui y insérerait les éléments un à un à partir d'un <span style='color:blue;'><strong>fichier JSON</strong></span></li></ul>\n\n<h4 style='color:black;'><strong>Modification du principe de sélection des projets</strong></h4>\nAvant les modifications apportées, l’utilisateur devait connaître le nom exact du projet (majuscules et minuscules comprises) sur lequel il souhaitait effectuer une action. Il a été convenu que le nouveau principe de recherche de projet se présenterait sous la forme de deux listes déroulantes où chaque élément les constituant pourrait être coché ou décoché.\n\nUne des deux listes contiendrait tous les projets développés pour RENECO tandis que l'autre contiendrait tous les autres projets.\n\nPour cette tâche, j’ai dû :\n<ul><li>Récupérer la liste de tous les projets à partir d’une API externe où ils sont stockés</li><li>Trier les résultats précédemment obtenus en fonction de s'ils sont développés pour le client principal ou non</li><li>Lire la documentation de ReactJS pour créer un nouveau composant (élément réutilisable d’une page web qui peut être utilisé par plusieurs autres pages)</li><li>Permettre à mon nouveau composant de transmettre des informations telles que les projets sélectionnés à son composant parent (page HTML qui utilise un autre composant, appelé composant enfant)</li></ul>\n\nLe rapport demandé présente les activités de support réalisées pendant une période spécifiée par l’utilisateur. Les activités de support font référence aux tâches effectuées par l’équipe de développement après la livraison du produit au client et en service après-vente.\n\nPour régler ce type de problèmes, Natural Solutions utilise <span style='color:red;'><strong>Zendesk</strong></span> (une plateforme de service client et de gestion des relations avec la clientèle). Pour générer le rapport, il est donc essentiel d'interroger l'API de Zendesk.\n\nNous avons donc d'abord établi une connexion avec cette API. Ensuite, j'ai dû faire trois requêtes à cette API :\n<ul><li>La première permettait de récupérer tous les tickets mis à jour entre deux dates spécifiées par l'utilisateur.</li><li>La deuxième était utilisée pour obtenir le nom du ticket, qui, dans notre cas, correspondait également au nom de la spécification.</li><li>La troisième récupérait le rôle de la personne sur tous les commentaires associés aux tickets.</li></ul>\n\nEnsuite, j'ai sélectionné les résultats pertinents à afficher et les ai triés par ordre chronologique.\n\nLe code permettant le téléchargement du fichier était déjà présent dans le code initial, mais il a nécessité plusieurs modifications. Par ailleurs, j’ai dû créer un Template Word destiné à fournir une structure prédéfinie à suivre lors de la génération des rapports.`,
            images: [
                {
                    path: sae_s4_mcd,
                    legend: `Légende : MCD de l'application`
                }, {
                    path: sae_s4_principe_selection_apres,
                    legend: `Légende : MCD de l'application`
                }
            ]
        },
        result: {
            title: `Résultat de la SAÉ`,
            text: `<a href='https://docs.google.com/presentation/d/1uueQqS5IAyxeuxPOwv-2YE4rRnxuOs72wY5auPL-VPI/edit?usp=sharing' target='_blank'>Lien de la présentation</a>`,
            files: {
                file_1: {

                },
                file_2: {

                }
            }
        },
        personal_enrichment: {
            title: `Enrichissement personnel`,
            text: `Si j'ai beaucoup aimé cette SAÉ, c'est en grande partie grâce à mes collègues qui se sont montrés très attentifs.\nDe plus, j'ai pu m'améliorer en gestion de projet grâce à l'utilisation quotidienne de la méthodologie SCRUM. J'ai aussi développé ma capacité à me documenter et à chercher des informations par moi-même ainsi que ma capacité à utiliser des outils tels que GitLab.`
        },
        skills_worked: {
            title: `Compétences Développées`,
            text: `Concernant les compétences au programme du BUT Informatique concernées par cette SAÉ, je pense avoir assez bien travaillé :\n<ul><li><span style='color:black;'><strong>Compétence 1 : Réaliser un développement d'application</strong></span><ul><li>Partir des exigences et aller jusqu'à une application complète</li><li>Mettre en place une architecture logicielle appropriée pour assurer la modularité et la maintenabilité de l'application.</li></ul></li><li><span style='color:black;'><strong>Compétence 2 : Optimiser des applications informatiques</strong></span><ul><li>Analyser et optimiser des applications</li><li>Appréhender et construire des algorithmes</li></ul></li><li><span style='color:black;'><strong>Compétence 4 : Gérer des données de l'information</strong></span><ul><li>Concevoir et modéliser une base de données</li></ul></li></ul>`
        },
        analysis: {
            title: `Analyse réflexive`,
            text: `Pour être plus efficace à l'avenir, il faudrait que je cherche des informations de façon plus pertinente et efficace de sorte à moins perdre de temps. De plus, il faudrait que je me familiarise davantage avec GitLab et les bonnes pratiques de développement collaboratif. Enfin, il faudrait que je sous-estime moins les tâches qui m'ont été confiées, car ça m'a parfois conduite à faire des heures supplémentaires.`
        },
        technologies: [technologies[20], technologies[5], technologies[4], technologies[16], technologies[8]]
    },
    sae_s5: {
        title: `Présentation de la SAÉ`,
        category: categories.academic,
        instructions: {
            title: `Objectif`,
            text: `Cette SAÉ, réalisée par <span style='color:red;'><strong>cinq étudiants</strong></span> en troisième année de BUT Informatique, a pour objectif de développer une application multi-architecture en utilisant des micro-contrôleurs et des objets connectés pour collecter des données, les traiter et les visualiser.\nMon groupe et moi avons choisi de créer une application de tests de réflexe destinée à des scientifiques.`
        },
        architecture: {
            title: `Architecture`,
            text: `L'application comprend plusieurs infrastructures complexes que nous devons faire communiquer entre elles.\n\nNous disposons d’une <span style='color:blue;'><strong>application mobile</strong></span> (codée pour les Android dans notre cas) celle-ci a été conçue pour prendre des vidéos et les envoyer à un <span style='color:blue;'><strong>serveur d'analyse</strong></span>. Ce serveur comme son nom l'indique a pour but d’analyser les informations reçues. Une fois le traitement effectué il envoie les résultats à un <span style='color:blue;'><strong>serveur de centralisation</strong></span> des données codé en java. Ce serveur reçoit également des données de la part des microcontrôleurs. Il communique avec une <span style='color:blue;'><strong>API</strong></span> réalisée en Node.js afin de stocker les données reçues dans une <span style='color:blue;'><strong>base de données MongoDB</strong></span>. Le serveur de centralisation est tout de même capable de communiquer lui-même avec la BDD sans passer au travers de l’API. Pour finir les données seront affichées sous forme de statistiques dans une page Web (<span style='color:blue;'><strong>frontend</strong></span>) réalisée en Vue.js.\n\nSur la figure ci-dessous est représentée l'architecture de l'application.`,
            images: [
                {
                    path: archi_sae,
                    legend: `Légende : architecture de la SAÉ`
                },
            ]
        },
        organization_of_work: {
            title: `Processus de développement`,
            text: `Pour développer cette application nous avons utilisé <span style='color:green;'><strong>GitLab</strong></span> et <span style='color:green;'><strong>Trello</strong></span> pour gérer le versioning et la planification des tâches.\n\nEn ce qui concerne le déploiement, une grande partie de l'application est déployée en conteneurs <span style='color:green;'><strong>Docker</strong></span>.\n\nLes principaux langages que j'ai pu manipuler sont les suivants :\n<ul><li>Arduino ;</li><li>Java ;</li><li>JavaScript ;</li><li>Kotlin ;</li><li>YAML ;</li></ul>`
        },
        result: {
            title: `Résultat de la SAÉ`,
            text: `Actuellement, ce projet est en cours de réalisation. Cependant, vous trouverez <a href="https://gitlab.iut-bm.univ-fcomte.fr/ggodailf/sae_s5" target='_blank'>ci-joint</a> le dépôt GitLab du projet.`
        },
        technologies: [technologies[24], technologies[19], technologies[20], technologies[23], technologies[12], technologies[8]]
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
        technologies: [technologies[14], technologies[18], technologies[15], technologies[22], technologies[9], technologies[10]]
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
    projects: projects,
}
