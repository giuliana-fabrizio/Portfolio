const sae_101_102_image = require("../public/images/projects/sae_101_102/partie_de_jeu.png");
const sae_s4_mcd = require("../public/images/projects/sae_stage_s4/MCD.png");
const sae_s4_image = require("../public/images/projects/sae_stage_s4/principe_selection_apres.png");
const sae_s5_image1 = require("../public/images/projects/sae_s5/archi_sae.png");
const sae_s5_image2 = require("../public/images/projects/sae_s5/graphs_frontend.png");
// const sae_s5_image3 = require("../public/images/projects/sae_s5/trello.png")
const sae_s6_image1 = require("../public/images/projects/sae_stage_s6/map.png");
const sae_s6_image2 = require("../public/images/projects/sae_stage_s6/dashboard.png");

const engineer_logo = require("../public/images/degrees/engineer.png");
const but_logo = require("../public/images/degrees/but.png");
const bac_logo = require("../public/images/degrees/bac.png");
const mooc_gdp_logo = require("../public/images/degrees/mooc_gdp.png");

const natural_solutions_logo = require("../public/images/experiences/natural_solutions.png");
const u_express_logo = require("../public/images/experiences/u_express.png");

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
const experiences_btn = "Expériences";
const projects_btn = "Projets";
const interests_btn = "Intérêts";

/* ***************************************************************** home page ***************************************************************** */

const status = "Étudiante en informatique";

const about_me_title = "À propos de moi";
const about_me = `Âgée de ${age} ans, je suis actuellement étudiante en première année du cycle ingénieur en informatique à l'<a href="https://www.utbm.fr/formations/ingenieur/informatique/" target="_blank">UTBM</a>. Passionnée par cette discipline, je cherche constamment à me perfectionner. Pour cela, je réalise régulièrement des projets personnels en imaginant moi-même un besoin, ce qui me permet d’expérimenter différentes approches et technologies.\n
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
    // Frontend Development
    boostrap: { name: "Boostrap", logo: "images/technologies/bootstrap.png" },
    css: { name: "CSS", logo: "images/technologies/css.png" },
    html: { name: "HTML", logo: "images/technologies/html.png" },
    vue_js: { name: "Vue.js", logo: "images/technologies/vue-js.png" },
    react_js: { name: "React.js", logo: "images/technologies/react-js.png" },

    // Backend Web Development
    flask: { name: "Flask", logo: "images/technologies/flask.png" },
    next_js: { name: "Next.js", logo: "images/technologies/next-js.png" },
    node_js: { name: "Node.js", logo: "images/technologies/node-js.png" },

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
    java: { name: "Java", logo: "images/technologies/java.png" },
    js: { name: "JavaScript", logo: "images/technologies/js.png" },
    python: { name: "Python", logo: "images/technologies/python.png" },
    ts: { name: "TypeScript", logo: "images/technologies/ts.png" },
    kotlin: { name: "Kotlin", logo: "images/technologies/kotlin.png" },
    swift: { name: "Swift", logo: "images/technologies/swift.png" },
};

const projects = {
    stage_s6: {
        title: `Stage (2024)`,
        category: categories.professional,
        instructions: {
            title: `Présentation`,
            text: `En troisième année de BUT Informatique, j'ai effectué un stage de trois mois chez <span style='color:red;'><strong>Natural Solutions</strong></span>, une entreprise basée à Marseille. Cette dernière a pour vocation de mettre la technologie au service de la biodiversité en concevant des outils destinés aux acteurs environnementaux et aux associations. Ces outils prennent principalement la forme d'applications Web et mobiles.\n
            L'équipe que j'ai intégrée était composée :
            <ul><li>de deux autres développeurs ;</li><li>d'un chef de projet ;</li><li>d'une désigneuse.</li></ul>
            Nous avons travaillé sur un projet pour <a href="https://www.wingsoftheocean.com/" target="blank" style='color:green;'><strong>Wings of Ocean</strong></a>, une association dédiée à la préservation de l'environnement. Notre mission consistait à développer une plateforme dédiée à la gestion de ramassage de déchets.\n
            Durant ce stage, mon objectif était de <span style='color:blue;'><strong>contribuer activement au développement de ce projet</strong></span>, nommé DepollutionMap.`
        },
        organization_of_work: {
            title: `Organisation du travail`,
            text: `Les tâches dont j'ai été chargée m'ont été attribuées progressivement, car nous procédions selon la méthodologie agile <span style="color: red;"><strong>${technos.scrum.name}</strong></span>. De plus, pour simplifier le versionning et la planification des tâches tout au long du cycle de vie du projet, nous avons utilisé <span style='color:green;'><strong>${technos.gitlab.name}</strong></span> et <span style='color:green;'><strong>${technos.jira.name}</strong></span>.\n
            Concernant le déploiement de l'application, celui-ci a été effectué avec l'aide de <span style='color:green;'><strong>${technos.docker.name}</strong></span>.`
        },
        implementation: {
            title: `Mise en œuvre`,
            section_1: `<h4 style='color:black;'><strong>Carte de la page d'accueil</strong></h4>
            Chaque ramassage organisé par Wings of Ocean est associé à un formulaire où les participants saisissent des données sur les déchets collectés (nombre, poids, volume). Ces formulaires passent par quatre états : à faire, en cours, en attente de validation, et validé (lequel indique que les données sont correctes et que le ramassage est terminé). Mon rôle a été d'afficher les <span style='color:red'><strong>ramassages terminés</strong></span> sur une carte du monde et de permettre aux utilisateurs de les filtrer selon plusieurs critères (date, localisation, partenaires...).\n
            J'ai d'abord récupéré les ramassages ayant un formulaire validé grâce à une requête <span style='color:blue;'><strong>${technos.graphql.name}</strong></span>. Ensuite, je les ai positionnés sur une carte à l’aide de leurs points de départ. Plutôt que d’utiliser des marqueurs simples, j’ai implémenté une <span style='color:green'><strong>clusterisation</strong></span> pour regrouper les ramassages selon le niveau de zoom. Pour cela, je me suis appuyée sur la bibliothèque <span style='color: blue;'><strong>react-map-gl</strong></span>. Chaque cluster affiche le nombre de collectes qu'il contient, et un clic, dessus, recentre et zoome sur la carte.\n
            Un clic sur un ramassage affiche une popup (réalisée avec <span style='color:red;'><strong>Material UI</strong></span>) contenant son nom, sa localisation, sa date et une photo. Un bouton permet d’accéder à plus d'informations sur une page dédiée.`,
            images_1: [
                {
                    path: sae_s6_image1,
                    legend: `Figure 1 : carte du monde - page d'accueil`
                }
            ],
            section_2: `<h4 style='color:black;'><strong>Mise en place des filtres</strong></h4>
            J'ai ajouté un bouton « Filtres » sur la carte, qui ouvre une popup. Pour rendre cette popup réutilisable sur d'autres pages, j'ai regroupé son code dans un fichier commun.\n
            J'ai d'abord écrit des requêtes pour récupérer les données de filtrages depuis la base de données. Ensuite, j'ai utilisé la bibliothèque <span style='color:green;'><strong>Material UI</strong></span> pour concevoir la popup en suivant les maquettes fournies par la <span style='color:red;'><strong>désigneuse</strong></span>.\n
            Lorsque l’utilisateur valide des filtres, ils sont intégrés à l’URL. Tous les ramassages terminés étant déjà stockés dans un tableau en mémoire, les filtres de l’URL sont appliqués directement à ce tableau <span style='color:blue;'><strong>côté client</strong></span> (dans le navigateur). Les résultats filtrés sont enregistrés dans un second tableau, qui sert à afficher les ramassages correspondants sur la carte. Chaque modification des filtres met à jour ce tableau.\n\n`,
            section_3: `<h4 style='color:black;'><strong>Dashboard</strong></h4>
            Pour générer des statistiques sur les ramassages terminés, j'ai d'abord écrit des requêtes ${technos.graphql.name} que j'ai testées avec l'interface d'${technos.hasura.name}.\n
            J’ai ensuite ajouté une <span style='color:blue'><strong>route</strong></span> spécifique au dashboard dans le backend. Cette route prend en paramètre les identifiants des ramassages souhaités afin de les transmettre aux requêtes GraphQL précédemment écrites.\n
            Côté frontend, au chargement initial de la page, j’ai réutilisé la requête écrite dans la carte afin de récupérer tous les ramassages terminés et je les ai stockés dans un tableau. Ensuite, les <span style='color:green'><strong>filtres définis dans l’URL</strong></span> sont appliqués à ce tableau et le résultat est rangé dans un second tableau. Enfin, j’ai fait appel à la route du backend en lui transmettant les identifiants des ramassages filtrés. Chaque mise à jour des filtres déclenche ce processus.\n
            Pour l'interface utilisateur, j'ai utilisé <span style='color:green;'><strong>Material UI</strong></span> et un template <span style='color:red;'><strong>Materio</strong></span>, que j'ai intégré à DepollutionMap et légèrement adapté pour afficher les résultats dynamiquement.`,
            images_3: [
                {
                    path: sae_s6_image2,
                    legend: `Figure 2 : dashboard`
                }
            ]
        },
        result: {
            title: `Résultat de la SAÉ`,
            text: `J’ai beaucoup apprécié ce stage, en grande partie grâce à mes collègues qui se sont montrés disponibles et pédagogues chaque fois que j'en ai eu besoin.\n
            À l’issue de cette expérience professionnelle, j’ai rédigé deux rapports : un rapport général détaillant les principales tâches que j’ai accomplies et un autre plus technique destiné à permettre à un informaticien de poursuivre le travail.\n
            Vous pouvez consulter le diaporama de ma soutenance <a href='https://docs.google.com/presentation/d/1LiP-nK3gmnG1EadbeIMfyvVh-VUsXMA4EwR9I6H2e2o/edit?usp=sharing' target='_blank'>ici</a>.`,
        },
        technologies: [technos.graphql, technos.hasura, technos.jira, technos.minio, technos.next_js, technos.react_js, technos.scrum, technos.ts]
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
                    path: sae_s5_image1,
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
            Avant de passer au développement du serveur d'analyse, j'ai permis le déploiement de l'API avec ${technos.docker.name}.`,
            images: [
                {
                    path: sae_s5_image2,
                    legend: `Figure 2 : graphiques du frontend (données de tests)`
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
        technologies: [technos.arduino, technos.docker, technos.gitlab, technos.java, technos.js, technos.node_js, technos.kotlin, technos.mongo, technos.vue_js]
    },
    stage_s4: {
        title: `Stage (2023)`,
        category: categories.professional,
        instructions: {
            title: `Présentation`,
            text: `Au cours de ma deuxième année en BUT Informatique, j'ai effectué un stage de trois mois (avril - juin 2023) au sein de <span style='color:red;'><strong>Natural Solutions</strong></span>, une entreprise du secteur numérique basée à Marseille.\n
            Chaque mois, l'entreprise doit établir des devis et des factures pour ses clients. Pour simplifier ce processus, un stagiaire avait été recruté en 2021 pour mettre en place l’Outil Facturation, réalisé en <span style='color:blue'><strong>${technos.js.name}</strong></span>, <span style='color:blue'><strong>${technos.node_js.name}</strong></span> et <span style='color:blue'><strong>${technos.react_js.name}</strong></span>.\n
            Ma mission était de corriger les problèmes existants, d'améliorer les fonctionnalités déjà en place et d'en ajouter de nouvelles. Parmi les tâches qui m'ont été confiées, figurait la mise en place de la base de données (BDD), la modification du principe de sélection des projets et la génération de documents.\n
            Bien que j'ai travaillé seule sur ce projet, j'ai pu solliciter mon maître de stage en cas de besoin.`
        },
        organization_of_work: {
            title: `Organisation du travail`,
            text: `Chez Natural Solutions, j'ai appliqué la <a href="https://chef-de-projet.fr/methodologie-scrum/" target="black">méthodologie ${technos.scrum.name}</a>, une méthode agile qui favorise l'amélioration continue et la collaboration pour adapter le développement aux besoins évolutifs des clients.\n
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
                    path: sae_s4_image,
                    legend: `Figure 2 : principe de sélection des projets`
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
        technologies: [technos.gitlab, technos.js, technos.node_js, technos.postgresql, technos.react_js, technos.sequelize, technos.scrum]
    },
    sae_101_102: {
        title: `SAÉ 101-102`,
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
                    path: sae_101_102_image,
                    legend: `Figure 1 : plateau de jeu`
                }
            ],
        },
        technologies: [technos.github, technos.java]
    }
};


// /* ***************************************************************** degrees page ***************************************************************** */

const degrees_page_title = "MES FORMATIONS";

const school_career = {
    title: `Mon parcours`,
    content: `Après l'obtention de mon baccalauréat scientifique en 2020, j'ai décidé de prendre une année de césure pour réfléchir à mon avenir professionnel. Durant cette année, je me suis beaucoup documentée et j'ai consulté plusieurs conseillers d’orientation.\n
    C’est un peu par hasard que j'ai découvert l'informatique. Son caractère en constante évolution et l’opportunité de contribuer à des avancées technologiques majeures m'ont motivée à intégrer un BUT Informatique en 2021. Cette discipline rapidement passionnée, me donnant envie d'approfondir mes connaissances et de me perfectionner davantage. C'est pourquoi j'ai choisi de poursuivre mes études en école d'ingénieurs.`
}

const degrees_title = `Mes diplômes`;

const degrees = {
    engineer: {
        title: `Cycle ingénieur`,
        logo: engineer_logo,
        school: `Université de technologie de Belfort-Montbéliard`,
        place: `Belfort, France`,
        date: `Depuis février 2025`,
    },
    but: {
        title: `BUT Informatique`,
        logo: but_logo,
        speciality: `Spécialité : réalisation d'applications : conception, développement, validation`,
        mention: `Major de promotion`,
        school: `IUT de Belfort-Montbéliard`,
        place: `Belfort, France`,
        date: `Juin 2024`,
    },
    bac: {
        title: `Baccalauréat général`,
        logo: bac_logo,
        speciality: `Spécialité : scientifique`,
        school: `Lycée Périer`,
        place: `Marseille, France`,
        date: `Juillet 2020`
    }
}

const certifications_title = `Mes certifications`;

const certifications = {
    mooc_management: {
        title: `Gestion de Projet`,
        logo: mooc_gdp_logo,
        speciality: `Spécialités :
        <ul class='text-start'>
            <li>Tronc commun</li>
            <li>Analyse fonctionnelle externe</li>
            <li>Analyse stratégique dans les projets</li>
            <li>Diagnostic de fonctionnement d'un système (technique)</li>
            <li>Évaluation d'impact des projets</li>
            <li>Gestion de projet agile avec Scrum</li>
            <li>Management de la créativité et brainstorming</li>
            <li>Management d'équipe projet</li>
            <li>Outils et méthodologie de résolution de problème</li>
            <li>Management visuel de projet</li>
            <li>OAW - Outils et applications web pour la gestion de projet</li>
            <li>Planification avancée</li>
            <li>Du Projet à l'action entrepreneuriale</li>
            <li>Introduction aux principaux outils de TRIZ</li>
        </ul>`,
        school: `MOOC`,
        date: `Novembre 2024`,
    }
}


/* ***************************************************************** experiences page ***************************************************************** */

const experiences_page_title = "MES EXPÉRIENCES";
const experiences = {
    stage_2024: {
        title: `Développeuse Fullstack II`,
        description: `Principales tâches réalisées :
        <ul><li>insertion de données Excel dans une base de données PostgreSQL ;</li><li>réalisation du tableau de bord principal (ou Dashboard) ;</li><li>utilisation d'Hasura pour la gestion des permissions utilisateurs.</li></ul>`,
        label_redirection: `Plus de détails`,
        redirection: projects.stage_s6,
        logo: natural_solutions_logo,
        type: `Type : stage`,
        date: `Janvier - Avril 2024`,
        company: `Natural Solutions`,
        place: `Marseille, France`,
    },
    stage_2023: {
        title: `Développeuse Fullstack I`,
        description: `Principales tâches réalisées :
        <ul><li>ajout d'une base de données PostgreSQL et utilisation de l'ORM Sequelize ;</li><li>correction d'erreurs de calcul existantes ;</li><li>modification de l'interface utilisateur : manipulation de ReactJs et interrogation d'une API externe ;</li><li>réalisation de tests unitaires en JavaScript.</li></ul>`,
        label_redirection: `Plus de détails`,
        redirection: projects.stage_s4,
        logo: natural_solutions_logo,
        type: `Type : stage`,
        date: `Avril - Juin 2023`,
        company: `Natural Solutions`,
        place: `Marseille, France`,
    },
    cdd_2022: {
        title: `Employée de supérette`,
        description: `Principales tâches réalisées :<ul><li>encaissement des clients ;</li><li>rangement des rayons et réception des marchandises ;</li><li>formation des nouveaux salariés à la caisse ;</li><li>cuisson du pain.</li></ul>`,
        logo: u_express_logo,
        type: `Type : CDD`,
        date: `Juillet - Août 2022`,
        company: `U Express`,
        place: `Marseille, France`,
    }
}


/* ***************************************************************** not found page ***************************************************************** */

const interests_page_title = "MES CENTRES D'INTÉRÊT";

const interests = {
    1: {
        title: `Activité sportive & voyages`,
        description: `Depuis 2010, je pratique la natation. D’abord membre d’un club durant mon enfance, je continue aujourd’hui à nager de manière occasionnelle. Par ailleurs, j’aime explorer de nouveaux lieux et admirer leurs paysages. Bonne marcheuse, je fais régulièrement des randonnées, une activité qui me permet de relever de nouveaux défis tout en faisant de belles découvertes.`,
        legend: 'images prises lors de mes randonnées et/ou voyages',
        images: [carousel_1, carousel_2, carousel_3],
        support: `carousel`
    },
    2: {
        title: `Jeux vidéo`,
        description: `C’est durant mon BUT Informatique à Belfort que des amis m’ont initiée aux jeux vidéo. Cependant, n’étant pas une grande joueuse, je me consacre principalement à Minecraft. Ce que j’apprécie particulièrement dans ce jeu, c’est la diversité des mods disponibles, qui permettent de renouveler l’expérience en introduisant de nouveaux mondes, personnages, créatures et matériaux.`,
        legend: `modélisation 3D de mon skin Minecraft. Utilisez la souris (ou le tactile) pour faire pivoter le modèle.`,
        support: `mc`
    },
    3: {
        title: `Couture`,
        description: `Dès mon plus jeune âge, j’ai découvert la couture grâce à ma grand-mère, ancienne couturière. J’ai commencé par confectionner des vêtements pour mes poupées avant de réaliser aujourd’hui des objets pratiques dans mon quotidien : housses de protection pour batterie, sac à main, trousses à stylos...`,
        legend: `housse de protection pour batterie externe`,
        // image: image_sewing,
        support: `img`
    },
    4: {
        title: `Modélisation 3D`,
        description: `C’est en discutant avec ma mère d’un projet de réaménagement que j’ai décidé de me lancer dans la modélisation 3D. C’est ainsi que j’ai découvert le logiciel Sweet Home 3D. Avec cet outil, j’ai d’abord imaginé un nouvel agencement pour une pièce de la maison avant de reproduire un studio dans lequel j’ai vécu et que je trouvais particulièrement esthétique.`,
        legend: `modélisation 3D d’un studio réalisée avec Sweet Home 3D. Utilisez la souris (ou le tactile) pour zoomer et faire pivoter le modèle.`,
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
