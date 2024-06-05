/* ***************************************************************** home page ************************************************************* */

const name = "Giuliana GODAIL FABRIZIO";
const status = "Étudiante en informatique";

const about_me = "Actuellement en dernière année de BUT Informatique, je souhaite poursuivre mes études en écoles d'ingénieurs. Si j’ai choisi l’informatique c’est parce que j’aime concevoir et optimiser des projets, en trouvant des solutions adaptées aux besoins des utilisateurs.";
const professional_experience = "En 2021 j'ai réalisé un CDD de 2 mois en tant qu’employée de supérette. Dans le cadre de ma formation j’ai aussi effectué 2 stages en entreprise chacun d’une durée de 12 semaines. Ces expériences m'ont permis de découvrir le travail en équipe, où j'ai pu apprendre des autres tout en partageant mes connaissances.";
const hobbies = "Durant mon temps libre, je pratique un peu d’activité physique comme le jogging. Je développe aussi des projets personnels. J’aime aussi beaucoup la couture, par exemple, j’ai réalisé des trousses pour ranger mes stylos et quelques autres gadgets.";

const cv_link = "https://raw.githubusercontent.com/mbeaudru-iut90/SAE_06_Capgemini/main/doc/Fernandes_SAES106_C1_Capgemini.pdf";
const mail = "mailto:godailfabriziogiuliana@gmail.com";
const github = "https://github.com/giuliana-fabrizio";
const linkedin = "https://www.linkedin.com/in/giuliana-godail-fabrizio-20639525b/";


/* ***************************************************************** projects page ************************************************************* */

const technologies = [
    // Frontend Web Development
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
    { name: "Google Slides", class: "bg-light text-dark" }
];

const experiences = {
    university_experience: {
        title: "Projets réalisés en BUT Informatique",
        years: {
            2022: {
                category: "Projets de première année",
                summary: "Dans le cadre de ma première année, j'ai eu à faire des SAÉ (projets de groupe encadrés par des professeurs). Chaque SAÉ concerne une ou plusieurs compétences au programme de l'année concernée. Au cours de cette année universitaire nous avons eu à faire 10 SAÉ.",
                projects: {
                    sae_s1_05: {
                        title: "SAE S1 05",
                        category: "Universitaire",
                        type: "project",
                        instructions: {
                            title: "Consignes",
                            text: "Cette SAÉ est la première que nous avons dû réaliser.\nLe but était de faire une présentation en groupe sur une thématique assez surprenante (car n'ayant pas de rapport particulier avec l'informatique). La problématique que mon groupe devait traiter était \"Comment présenteriez-vous votre formation dans votre ancien lycée ?\".\nPlus précisément nous devions décrire le scénario (besoins du client, organisation pour répondre aux attentes du client) à l'aide des questions - réponses échangées avec les professeurs (se mettant à la place du client), ainsi que notre travail de groupe pour réaliser cette SAÉ."
                        },
                        organization_of_work: {
                            title: "Organisation du travail en groupe",
                            text: "Pour cette SAÉ nous nous sommes à mon sens assez mal organisés.\nNous ne nous sommes répartis les tâches qu'assez tardivement ce qui ne nous a pas permis de rendre un très bon travail.\nAinsi nous nous sommes répartis la réalisation : \n\t• d'un diagramme de Gantt (diagramme décrivant l'organisation selon laquelle nous avons opéré pour réaliser cette SAÉ) ;\n\t• du diaporama à présenter lors de notre soutenance ;\n\t• du texte."
                        },
                        implementation: {
                            title: "Mes actions dans le groupe",
                            text: "Pour ma part je me suis chargée de la réalisation du diagramme de Gantt ainsi que d'une partie du texte accompagnant le diaporama le jour de la soutenance.",
                        },
                        result: {
                            title: "Résultat de la SAÉ",
                            file: "", // TODO
                            images: {

                            } // TODO
                        },
                        personal_enrichment: {
                            title: "Enrichissement personnel",
                            text: "Cette SAÉ m'aura permis de me rapprocher de mes camarades de classe en travaillant avec certains pour ce projet et en passant à l'oral devant les autres."
                        },
                        skills_worked: {
                            title: "Compétences Développées",
                            text: "Parmi les compétences au programme du premier semestre du BUT, je pense avoir travaillé la compétence 5 qui consiste à gérer un projet.\nEn effet cette SAÉ aura été plus compliquée à réaliser que nous le pensions principalement dû au fait que nous avons négligé la gestion de projet au commencement."
                        },
                        analysis: {
                            title: "Analyse réflexive",
                            text: "Je pense que pour mieux réussir cette SAÉ il faudrait se motiver davantage bien que le sujet soit peu attractif.\nDe plus, comme dit précédemment il faudrait mieux communiquer les uns avec les autres et s'organiser correctement.\nPour l'aspect esthétique de notre diaporama il aurait été intéressant de prendre un canvas."
                        },
                        technologies: [technologies[25], technologies[26]]
                    },
                    sae_s1_06: {
                        title: "SAE S1 06",
                        category: "Universitaire",
                        type: "project",
                        instructions: {
                            title: "Consignes",
                            text: "Cette SAÉ consistait à créer un site web sur une entreprise informatique française. De plus, nous devions faire un rapport analytique de l'entreprise choisie ainsi qu'un diagramme de Gantt ou un réseau Pert pour planifier les tâches que nous devions réaliser."
                        },
                        organization_of_work: {
                            title: "Organisation du travail en groupe",
                            text: "Mon groupe comptait 4 personnes.\nConcernant le rapport économique, nous nous sommes divisés les différentes parties à faire (présentation de l'entreprise, aspect économique, aspect environnemental).\nPour ce qui est du site Web, nous nous sommes d'abord mis d'accord au sujet de la charte graphique afin que le style du site soit cohérent pour chaque page. Nous avons ensuite décidé qui fera quelle page."
                        },
                        implementation: {
                            title: "Mes actions dans le groupe",
                            text: "Ma partie du rapport (aspect économique) résidait à faire des recherches et une analyse sur :\n\t• les partenariats et les concurrents de Capgemini, l'entreprise que nous avions choisie ;\n\t• le chiffre d'affaires et autres aspects financiers de l'entreprise.\nConcernant le site web, j'ai participé à la création de la charte graphique.\nAu niveau du développement du site, je me suis en partie chargée de faire le menu, la sous-page d'accueil, le formulaire de contact, le bouton de téléchargement, et de rendre le site adaptable selon la taille de l'appareil avec lequel on le consulte (responsive).",
                        },
                        result: {
                            title: "Résultat de la SAÉ",
                            text: "Le code ainsi que le rapport de cette SAÉ sont disponibles ci-joints : https://mbeaudru-iut90.github.io/SAE_06_Capgemini/Projet/site_web.html",
                            file: "" // TODO
                        },
                        personal_enrichment: {
                            title: "Enrichissement personnel",
                            text: "Parmi ce que j'aurais appris durant cette SAÉ, il y a principalement le fait de travailler en équipe et de s'organiser en conséquence.\nDe plus, n'ayant que peu de connaissances sur le développement web et le CSS (style d'un site web) à l'époque, j'ai été poussée à faire de nombreuses recherches, ce qui m'a permis d'apprendre beaucoup de choses techniques.\nConcernant le rapport économique, j'ai découvert que l'économie d'une entreprise est beaucoup plus complexe que le chiffre d'affaires (comme je le pensais jusqu'alors)."
                        },
                        skills_worked: {
                            title: "Compétences Développées",
                            text: "Concernant les compétences au programme du BUT Informatique, je pense avoir travaillées :\n\t• la compétence n°1 relative à la réalisation d'une application (implémenter et élaborer des conceptions simples, faire des essais) ;\n\t• la compétence n°5 qui consiste à conduire un projet (appréhender les besoins du client et de l'utilisateur, mettre en place les outils de gestion de projet, ....) ;\n\t• la compétence n°6 correspondant au fait de travailler dans une équipe informatique (découvrir les aptitudes requises selon les différents secteurs, ...)."
                        },
                        analysis: {
                            title: "Analyse réflexive",
                            text: "Dans le but d'être plus productive et moins dépassée par la charge de travail (cette SAÉ se faisait en parallèle d'une autre), il faudrait que je parvienne mieux à cibler les tâches à faire de sorte de pouvoir m'organiser selon la charge de travail.\nJe dois également m'investir davantage dans les tâches qui ne me motivent pas."
                        },
                        technologies: [technologies[2], technologies[1], technologies[0], technologies[7]]
                    },
                    sae_s1_03: {
                        title: "SAE S1 03",
                        category: "Universitaire",
                        type: "project",
                        instructions: {
                            title: "Consignes",
                            text: "L'objectif de cette SAÉ était d'installer et de configurer une machine virtuelle (V.M) en fonction d'un cahier des charges donné.\nNous devions pour cela rendre 3 livrables :\n\t• un dossier d'étude et de choix des solutions (rapport contenant la demande formulée par le client, description des architectures matérielles proposées, description des architectures logicielles proposées) ;\n\t• un schéma de l'architecture logicielle / notice d'utilisation (rapport contenant les étapes de l'installation de la machine virtuelle + la machine virtuelle complète) ;\n\t• une présentation orale.\nPour ce faire, mon groupe était constitué de 4 personnes."
                        },
                        organization_of_work: {
                            title: "Organisation du travail en groupe",
                            text: "Mon groupe (de 4 personnes) et moi nous sommes répartis les différentes parties constituant le premier rapport.\nLa V.M a été réalisée par deux membres du groupe car les deux autres s'occupaient de faire la SAÉ S1.04 faite conjointement à celle-ci et disponible dans ce portfolio. Le rapport contenant les étapes d'installation a donc été rédigé par ces deux membres et relu dans son intégralité par tout le groupe."
                        },
                        implementation: {
                            title: "Mes actions dans le groupe",
                            text: "Concernant le premier rapport, j'ai fait la partie consistant à déterminer et décrire les différents logiciels à installer. Pour cela, je me suis documentée sur plusieurs sites ce qui m'a d'ailleurs permis d'apprendre beaucoup de choses.\nJe n'ai personnellement pas participé à l'installation et à la configuration de la V.M.",
                        },
                        result: {
                            title: "Résultat de la SAÉ",
                            file: "" // TODO
                        },
                        personal_enrichment: {
                            title: "Enrichissement personnel",
                            text: ""
                        },
                        skills_worked: {
                            title: "Compétences Développées",
                            text: "Cette SAÉ m'a permis de travailler les compétences suivantes :\n\t• la compétence n°3 qui consiste à administrer des systèmes informatiques communicants complexes (c'est-à-dire identifier les différents composants logiciels d'un système, installer et configurer un système d'exploitation et des outils de développement) ;\n\t• la compétence n°5 relative au fait de conduire un projet (appréhender les besoins du client et de l'utilisateur) ;\n\t• la compétence n°6 concernant le travail dans une équipe informatique (découvrir les aptitudes requises selon les différents secteurs, ...)."
                        },
                        analysis: {
                            title: "Analyse réflexive",
                            text: "Je pense que nous nous sommes bien organisés pour cette SAÉ et que notre stratégie de se répartir les SAÉ était une bonne idée, cependant je regrette de ne pas avoir participé pour la V.M."
                        },
                        technologies: [technologies[13]]
                    },
                    sae_s1_04: {
                        title: "SAE S1 04",
                        category: "Universitaire",
                        type: "project",
                        instructions: {
                            title: "Consignes",
                            text: "Pour cette SAÉ nous devions faire un MCD, un rapport et une application destinée aux habitants d'une petite commune.\nLe MCD (ou Modèle Conceptuel de Données) est une sorte de représentation des données utilisées par le système d'information.\nLe rapport devait justifier nos choix faits lors de la réalisation du MCD.\nParallèlement, le but de l'application était que les habitants de la commune puissent s'en servir pour réserver ou proposer des trajets entre leur mairie et un autre endroit et inversement.\nNotre mission était de faire en sorte de pouvoir ajouter, éditer ou supprimer un trajet, un véhicule, une réservation (sauf éditer), et un habitant, pour lequel nous devions aussi faire un profil."
                        },
                        organization_of_work: {
                            title: "Organisation du travail en groupe",
                            text: "Il nous était imposé que chaque membre du groupe (constitué de 4 personnes) se charge d'une page (soit habitant, soit véhicule, etc).\nAinsi chacun a choisi la page dont il souhaitait se charger et l'a faite.\nConcernant le rapport, la rédaction s'est faite par ceux qui avaient fait le MCD."
                        },
                        implementation: {
                            title: "Mes actions dans le groupe",
                            text: "Je me suis chargée d'une partie du script SQL et de la partie habitant.\nPour cela, j'ai dû faire en sorte de pouvoir ajouter un nouvel habitant, de l'éditer (changer le nom par exemple), de le supprimer, ainsi que de montrer son profil (voir photo ci-dessous).",
                            images: {

                            } // TODO
                        },
                        result: {
                            title: "Résultat de la SAÉ",
                            file: "" // TODO
                        },
                        personal_enrichment: {
                            title: "Enrichissement personnel",
                            text: "Avant de faire cette SAÉ, nous avions déjà dû faire un petit projet personnel similaire.\nBien que nous avions déjà vu comment faire certaines choses, revenir dessus m'a permis de comprendre les notions sur lesquelles j'avais eu du mal la première fois, et de mieux retenir la technique à adopter pour les notions que j'avais déjà comprises.\nDe plus, cette SAÉ m'aura permis de m'adapter au travail en équipe."
                        },
                        skills_worked: {
                            title: "Compétences Développées",
                            text: "Concernant les compétences relatives à cette SAÉ, je pense avoir développé les suivantes :\n\t• la compétence n°1 qui réfère à la réalisation d'une application (implémenter et élaborer des conceptions simples, faire des essais, développer des interfaces utilisateurs, ....) ;\n\t• la compétence n°4 concernant essentiellement la conception et l’administration des données d’une entreprise et la mise à disposition de ces informations ;\n\t• les compétences n°5 et n°6, l'une consistant à conduire un projet (appréhender les besoins du client et de l'utilisateur, mettre en place les outils de gestion de projet, ....), l'autre à travailler dans une équipe informatique (découvrir les aptitudes requises selon les différents secteurs, ....)."
                        },
                        analysis: {
                            title: "Analyse réflexive",
                            text: "Dans le but d'être plus rapide et plus efficace à l'avenir, il faudrait que je m'exerce davantage à ce type d'exercice, que ce soit la production de MCD ou la réalisation d'un site web.\nConcernant le travail en groupe, il faudrait que je cesse de vouloir tout contrôler et que je m'adapte au rythme des autres."
                        },
                        technologies: [technologies[17], technologies[21], technologies[6]]
                    },
                    sae_101_102: {
                        title: "SAE 101-102",
                        category: "Universitaire",
                        type: "project",
                        instructions: {
                            title: "Consignes",
                            text: "La SAÉ 101 consistait à concevoir un mini-jeu en Java.\nLe but était de faire un plateau de jeu triangulaire avec 21 cases au total.\nDans ce jeu, il y a 2 joueurs, chacun disposant de 10 jetons tous numérotés de 1 à 10. (voir image en annexe).\nÀ la fin de la partie, il reste naturellement une case vide, pour gagner il faut que la somme des numéros des jetons positionnés autour de cette case vide soit inférieure à la somme des numéros des jetons de l’adversaire.\nLa SAÉ 102 avait pour but de reprendre le jeu précédemment conçu et de réaliser deux Intelligences Artificielles (I.A) capables de jouer contre un joueur selon la réponse à la question \"Jouer seul ?\" fournie dans le terminal.\nLa stratégie de la première IA devait être moins poussée que celle de la seconde.\nDans un rapport rédigé en anglais, nous devions comparer les deux IA (temps d'exécution pour un tour, nombre de boucles parcourues, ...)."
                        },
                        organization_of_work: {
                            title: "Organisation du travail en groupe",
                            text: "Dans le cadre de cette SAÉ, nous étions répartis en binôme.\nPour réaliser le jeu ainsi que les intelligences artificielles, nous disposions d'un peu plus d'un mois (du 2 décembre au 7 janvier).\nDans le but d'être un maximum efficace et rapide, nous avons décidé avec mon binôme de nous répartir le travail de sorte à pallier nos points faibles.\nAinsi, je me suis chargée de la partie codage tandis que lui faisait le rapport en anglais."
                        },
                        implementation: {
                            title: "Mes actions dans le groupe",
                            text: "Étant chargée de faire le code, j'ai dû diviser ma partie en plusieurs étapes.\n\nTout d'abord, j'ai dû faire des algorithmes (étape préalable à l'implémentation d'un code).\nPour cela, j'ai créé un fichier test, lequel me servait à implémenter mes algorithmes afin de les tester. Ça me permettait d'avoir une version fonctionnelle du code, et une destinée à soit compléter les fonctions manquantes, soit améliorer les méthodes déjà existantes.\n\nEnsuite, lorsque l'implémentation était terminée, je me suis chargée de faire les traces d'essai du code. (Il s'agissait de faire la démonstration d'une partie et de mettre le résultat et les numéros des cases jouées dans un fichier txt.)\n\nPour ce qui est des IA, j'ai imaginé plusieurs stratégies que j'ai chacune implémentée et fais tester à diverses personnes dans le but de voir et pallier leurs défauts.",
                        },
                        result: {
                            title: "Résultat de la SAÉ",
                            images: {

                            }, // TODO
                            text: "Sur cette capture d'écran, on peut voir le résultat d'une partie entre les deux IA.\nCelle qui gagne (la bleue) était celle dont la stratégie était \"plus poussée\" que celle de l'autre IA.\nCi-joint se trouve également le code de ce jeu : https://github.com/giuliana-fabrizio/SAE-Jeu-du-jeton-manquant"
                        },
                        personal_enrichment: {
                            title: "Enrichissement personnel",
                            text: "Si j'ai beaucoup aimé cette SAÉ, c'est en partie parce que je l'ai trouvée compliquée et que ça m'a obligé à sortir de ma zone de confort.\nElle m'aura considérablement fait progresser en algorithmique.\nJ'ai pu comprendre que faire un code ne signifie pas seulement taper des lignes dans un éditeur de texte, mais également réfléchir à un moyen de l'optimiser notamment pour réduire les ressources nécessaires lors de son exécution.\nJ'ai aussi découvert comment s'organiser dans une équipe réduite."
                        },
                        skills_worked: {
                            title: "Compétences Développées",
                            text: "Concernant les compétences au programme du BUT Informatique concernées par cette SAÉ, je pense avoir assez bien travaillé :\n\t• la compétence n°1 relative à la réalisation d'un développement d'applications (implémenter et élaborer des conceptions simples, faire des essais, développer des interfaces utilisateurs) ;\n\t• la compétence n°2 consistant à optimiser des applications informatiques (analyser un problème avec une méthode précise, expérimenter la notion de compilation, formaliser et mettre en œuvre des outils mathématiques) ;\n\t• la compétence n°5 correspondant au \"pilotage\" d'un projet informatique (appréhender les besoins du client et de l'utilisateur, mettre en place les outils de gestion de projet, identifier les différentes phases d'un cycle de développement)."
                        },
                        analysis: {
                            title: "Analyse réflexive",
                            text: "Pour être plus efficace à l'avenir il faudrait que je travaille davantage l'algorithmique afin de développer des réflexes et de me concentrer davantage sur l'optimisation de mon code.\nDe plus, mon anglais étant moyen, il faudrait que je l'améliore pour éviter que ça ne me pénalise un jour."
                        },
                        technologies: [technologies[7], technologies[19]]
                    },
                    sae_s2_04: {
                        title: "SAE S2 04",
                        category: "Universitaire",
                        type: "project",
                        instructions: {
                            title: "Consignes",
                            text: "Pour cette SAE étaient attendus :\n\t• un rapport contenant un MCD (modèle conceptuel de données), un MRD (modèle relationnel de données) et la justification de nos choix concernant les relations de nos tables SQL ;\n\t• la réalisation d'un site de vente à partir d'un code source avec pour particularités :\n\t\t• une liste de souhait (panier) ;\n\t\t• la possibilité pour un employé de voir et mettre à jour les commandes des clients... ;\n\t\t• la possibilité pour le client de filtrer les articles vendus.\n\t• une présentation orale en anglais pour parler du déroulé du projet, des fonctionnalités disponibles sur le site, de la visualisation des données, et de notre ressenti personnel, professionnel et pédagogique."
                        },
                        organization_of_work: {
                            title: "Organisation du travail en groupe",
                            text: "Pour le site de vente (portant sur les meubles pour notre groupe), nous avons décidé de nous répartir les différentes parties obligatoires :\n- back office :\n\t• visualisation des meubles ;\n\t• visualisation des types de meubles ;\n\t• visualisation des commandes et modification de leur état ;\n\t•  visualisation d'un tableau récapitulatif pour chaque type de meubles (coût total, stock disponible).\n- front office :\n\t• visualisation du panier et modification de celui-ci ;\n\t• filtres ;\n\t• visualisation des commandes et de leur état ;\n\t• visualisation des meubles."
                        },
                        implementation: {
                            title: "Mes actions dans le groupe",
                            text: "Pour ce qui est du site, je devais :\n\t• créer un compte client (inscription) ;\n\t• coté back office ;\n\t\t• modifier l'état d'une commande passée par un client (validées, expédiée, ...) ;\n\t\t• afficher le détail de la commande ;\n\t\t• ajout / édition / suppression d'un meuble et d'un type de meuble.\n\t• coté front office :\n\t\t• visualisation et gestion du panier (ou liste de souhait) ;\n\t\t• validation du panier qui génère une commande ;\n\t\t• filtres des meubles proposés sur le site. Ma partie personnelle portait quant à elle sur la gestion du stock, de manière plus précise :\n\t• l'administrateur (back office) peut visualiser des données concernant le stock (voir images en annexe) ;\n\t• l'administrateur peut voir le détail du stock disponible (couleur et matériel) ;\n\t• l'administrateur peut approvisionner un meuble en fonction de la couleur et du matériel (voir image) ;\n\t• le client (front office) doit pouvoir voir le stock restant pour un meuble donné, dans une couleur donnée, pour un matériel donné ;\n\t• lorsque le client ajoute / supprime un meuble dans son panier, le stock du meuble pour le coloris et le matériel concerné se met à jour.\nConcernant la présentation en anglais, j'ai traduit les éléments du diaporama.\nLe jour de l'oral, j'ai présenté ma partie ainsi que fait une rapide démonstration du site web.",
                            images: {
                                image_1: {
                                    name: "",
                                    alt: ""
                                },
                                image_2: {
                                    name: "",
                                    alt: ""
                                }
                            } // TODO
                        },
                        result: {
                            title: "Résultat de la SAÉ",
                            file: "" // TODO
                        },
                        personal_enrichment: {
                            title: "Enrichissement personnel",
                            text: "Avant cette SAÉ nous avions déjà fait 3 projets similaires, de ce fait je n'aurais pas appris grand-chose, mais le fait de revenir sur des notions déjà abordées a été bénéfique.\nDe plus j'ai appris à faire des graphes en Javascript, ainsi qu'à me forcer à m'adapter au travail en équipe."
                        },
                        skills_worked: {
                            title: "Compétences Développées",
                            text: "Pour ce qui est des compétences relatives à cette SAÉ, je pense avoir développé les suivantes :\n\t• la compétence n°1, qui réfère à la réalisation d'une application (implémenter et élaborer des conceptions simples, faire des essais, développer des interfaces utilisateurs) ;\n\t• la compétence n°2, qui touche l'optimisation des applications informatiques (analyser un problème avec une méthode précise, comparer des algorithmes pour des problèmes classiques, expérimenter la notion de compilation, formaliser et mettre en œuvre des outils mathématiques) ;\n\t• la compétence n°4, concernant essentiellement la conception et l’administration des données d’une entreprise et la mise à disposition de ces informations ;\n\t• les compétences n°5 et n°6, l'une consistant à conduire un projet (appréhender les besoins du client et de l'utilisateur, mettre en place les outils de gestion de projet, ...), l'autre à travailler dans une équipe informatique (découvrir les aptitudes requises selon les différents secteurs, ...)."
                        },
                        analysis: {
                            title: "Analyse réflexive",
                            text: "La réalisation du site web s'est globalement bien déroulée : le planning que nous avions décidé de suivre s'est déroulé sans encombre et nous avons pu tout rendre dans le temps imparti.\nPour ce qui est de la présentation orale, elle s'est assez bien déroulé, mais à mon sens il faudrait s'y prendre davantage à l'avance à l'avenir."
                        },
                        technologies: [technologies[0], technologies[2], technologies[6], technologies[17], technologies[20], technologies[21]]
                    },
                    // sae_s2_05: {},
                    // sae_s2_03: {},
                    // sae_s2_1_2_6: {}
                }
            },
            2023: {
                category: "Projets de deuxième année",
                summary: "Dans le cadre de ma deuxième année, j'ai eu à faire un stage en entreprise et une SAÉ. Celle-ci concerne plusieurs compétences au programme de cette deuxième année de BUT informatique.",
                projects: {
                    sae_s3: {
                        title: "SAE S3",
                        category: "Universitaire",
                        type: "project",
                        instructions: {
                            title: "Consignes",
                            text: "Ce site a été créé par une équipe de cinq développeurs dont je fais moi même partie pour gérer une manifestation imaginaire.\nIl doit offrir aux utilisateurs la possibilité d'accéder aux informations sur la manifestation au travers de la page d'accueil, de consulter le programme des événements prévus et d'accéder à une carte interactive du lieu. Les utilisateurs ont également la possibilité de créer un compte sur le site pour effectuer des réservations.\nÀ la fin de cette SAÉ, nous avons dû effectuer une présentation et une démonstration devant nos professeurs."
                        },
                        organization_of_work: {
                            title: "Organisation du travail en groupe",
                            text: `Mon groupe et moi avions choisi de réaliser le site pour une manifestation sportive que nous avons nommée "LAKESIDE SPORT FESTIVAL". Cette manifestation sportive était destinée à une œuvre caritative en collaboration avec l'association APF France handicap.\n\nPour mener à bien ce projet nous avons utilisés la méthode agile SCRUM en se réunissant une semaine sur deux pour faire le point sur les fonctionnalités développées et lister celle à développer durant les deux semaines suivant la réunion.\nNous avons aussi utilisés Trello pour faciliter la coordination et la communication au sein de l'équipe.\n\nD'autre part, nous avons utilisé un dépôt GitHub afin de faciliter le développement collaboratif.`
                        },
                        implementation: {
                            title: "Mes actions dans le groupe",
                            text: "1. Site Web\n\nJe me suis chargée de mettre en place l'entièreté de la base de données. Pour cela, j'ai réalisé plusieurs MCD (Modèles Conceptuel de Données) à l'aide de Looping, un logiciel de modélisation conceptuelle de données.\nDe plus, j'ai décidé d'utiliser PostgreSQL comme système de gestion de bases de données en raison de sa flexibilité.\nEn ce qui concerne les requêtes vers la base de données, j'ai réfléchi à la méthode à utiliser : SQL pur ou l'utilisation d'un ORM. J'ai finalement choisi d'opter pour du SQL pur, car cela demande moins de connaissances spécifiques et évite l'ajout de dépendances supplémentaires.\nJe me suis également chargée de faire toutes les requêtes SQL nécessaires à l'application (authentification, suppression, ajout, réservation, …).\nD'autre part, j'ai réalisé quelques pages interactives en VueJS, ainsi que de nombreuses maquettes des pages du site.\n\n2. Soutenance\nConcernant la présentation, je me suis chargée de transmettre l'avis de mon groupe concernant ce projet.",
                            images: {
                                image_1: {
                                    name: "",
                                    alt: ""
                                }
                            } // TODO
                        },
                        result: {
                            title: "Résultat de la SAÉ",
                            text: "Dépôt GitHub : https://github.com/mcrayssac/SAE-S3\n\nDiaporama de la soutenance : https://docs.google.com/presentation/d/1S9f4xpcZSaWmyRGIQ57jWnSQk5dWe2ssHt2VOZI6oEs/edit?usp=sharing"
                        },
                        personal_enrichment: {
                            title: "Enrichissement personnel",
                            text: `Cette SAÉ m'a permis d'apprendre beaucoup de choses en un temps recors :\n\t• je me serais familiarisée l'utilisation de VueJS et du modèle RCS ;\n\t• j'aurais pu mettre en pratique les cours de "Gestion de projet" en mettant en pratique la méthode agile SCRUM et en utilisant des outils comme Trello ;\n\t• j'aurais pris conscience de la complexité de réaliser un site Web disposant de nombreuses fonctionnalités.`
                        },
                        skills_worked: {
                            title: "Compétences Développées",
                            text: "Au cours de ce projet, plusieurs compétences sont développées et associées :\n\t• Compétence 1 : Réaliser un développement d'application\n\t\t• Partir des exigences et aller jusqu'à une application complète\n\t\t• Se spécialiser sur un support Web avec un suivi qualitatif\n\t• Compétence 2 : Optimiser des applications informatiques\nSélectionner des algorithmes adéquats pour répondre à un problème donné\n\t• Compétence 4 : Gérer des données de l'information\n\t\t• Concevoir et modéliser une base de données\n\t\t• Interagir avec la base de données pour récupérer, insérer, mettre à jour ou supprimer des données.\n\t\t• Optimiser une base de données\n\t• Compétence 5 : Conduire un projet\n\t\t• Planifier et organiser les différentes étapes du projet : définir les objectifs, les ressources et les délais nécessaires\n\t\t• Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs\n\t• Compétence 6 : Travailler dans une équipe informatique\n\t\t• Collaborer avec d'autres développeurs\n\t\t• Situer son rôle et ses missions au sein d'une équipe informatique\n\t\t• Identifier ses aptitudes pour travailler dans une équipe"
                        },
                        analysis: {
                            title: "Analyse réflexive",
                            text: "Cette SAÉ a été très intéressante bien que j'ai rencontré plusieurs difficultés dans la mise en place de la base de données. En outre, il aurait été intéressant que je fasse un peu plus de développement Web, ou que je participe à la carte interactive.\n\nConcernant le travail en groupe nous nous sommes bien organisés mais nous aurions dû faire plusieurs branches sur le dépôt GitHub afin de mieux organiser notre travail."
                        },
                        technologies: [technologies[7], technologies[11], technologies[20], technologies[5], technologies[3], technologies[16]]
                    },
                    stage_s4: {
                        title: "SAÉ S4.Stage",
                        category: "Professionnel",
                        type: "project",
                        instructions: {
                            title: "Consignes",
                            text: "La SAÉ S4.Stage s'est réalisée en entreprise. Pour ma part, je l'ai réalisée à <span style='color:red;'><strong>Natural Solutions</strong></span>, une entreprise à Marseille.\n\nChaque mois, cette entreprise doit établir des devis et des factures pour ses clients. Pour simplifier ce processus, un stagiaire a été recruté en 2021 pour mettre en place l’Outil Facturation qu’il a réalisé en <strong>JS, Node JS et React JS</strong>.\n\nMa mission consiste à corriger les problèmes existants, améliorer les fonctionnalités déjà en place et en ajouter de nouvelles. Les principales tâches qui m’ont été attribuées sont la mise en place de la <span style='color:green;'><strong>base de données</strong></span>, la <span style='color:green;'><strong>modification du principe de sélection des projets</strong></span>, et la <span style='color:green;'><strong>génération de documents</strong></span>.\n\nPour ce projet j’étais seule dans l’équipe, bien que je pouvais m'orienter vers mon maître de stage si besoin.\n\nÀ la fin de cette SAÉ, nous avons dû réaliser une présentation orale et deux rapports :\n<ul><li>l'un technique (destiné à un informaticien reprenant le travail)</li><li>l'autre destiné à expliquer le déroulement de notre stage sans entrer dans les détails techniques.</li></ul>"
                        },
                        organization_of_work: {
                            title: "Organisation du travail en groupe",
                            text: "Chez Natural Solutions, on applique la <span style='color:red;'><strong>méthodologie Scrum</strong></span>. Il s'agit d'une méthode agile basée sur une approche empirique, dynamique et participative de la conduite du projet.\n\nD’autre part, tout au cours de mon stage, j’ai été amené à utiliser <span style='color:red;'><strong>GitLab</strong></span>. C'est une plateforme de gestion du cycle de vie des applications (ALM) qui fournit des fonctionnalités de développement collaboratif. Pour l’utiliser de façon appropriée mon maître de stage et moi avons créé plusieurs branches du projet (une pour le développement, une pour la production, une pour les modifications globales, etc.). Son utilisation régulière m’a permis de respecter les <span style='color:black;'><strong>bonnes pratiques du développement</strong></span>."
                        },
                        implementation: {
                            title: "Mise en œuvre",
                            text: "<h2>1. Base de données</h2>\n\nPour mettre en place la base de données, il a été nécessaire de :\n<ul><li>Réaliser un MCD (Modèle Conceptuel de Données)</li><li>Utiliser le système de gestion de bases de données <strong>PostgreSQL</strong></li><li>Utiliser l'ORM <strong>Sequelize</strong> (destiné à simplifier l'interaction avec la base de données)</li><li>Connecter la base de données avec le backend (à l'aide de variables d'environnement)</li><li>Enrichir la base de données en créant une fonction qui y insérerait les éléments un à un à partir d'un <strong>fichier JSON</strong></li></ul>\n\n<h2>2. Modification du principe de sélection des projets</h2>\n\nAvant les modifications apportées, l’utilisateur devait connaître le nom exact du projet (majuscules et minuscules comprises) sur lequel il souhaitait effectuer une action. Il a été convenu que le nouveau principe de recherche de projet se présenterait sous la forme de deux listes déroulantes où chaque élément les constituant pourrait être coché ou décoché.\n\nUne des deux listes contiendrait tous les projets développés pour RENECO tandis que l'autre contiendrait tous les autres projets.\n\nPour cette tâche, j’ai dû :\n<ul><li>Récupérer la liste de tous les projets à partir d’une API externe où ils sont stockés</li><li>Trier les résultats précédemment obtenus en fonction de s'ils sont développés pour le client principal ou non</li><li>Lire la documentation de ReactJS pour créer un nouveau composant (élément réutilisable d’une page web qui peut être utilisé par plusieurs autres pages)</li><li>Permettre à mon nouveau composant de transmettre des informations telles que les projets sélectionnés à son composant parent (page HTML qui utilise un autre composant, appelé composant enfant)</li></ul>\n\nLe rapport demandé présente les activités de support réalisées pendant une période spécifiée par l’utilisateur. Les activités de support font référence aux tâches effectuées par l’équipe de développement après la livraison du produit au client et en service après-vente.\n\nPour régler ce type de problèmes, Natural Solutions utilise <strong>Zendesk</strong> (une plateforme de service client et de gestion des relations avec la clientèle). Pour générer le rapport, il est donc essentiel d'interroger l'API de Zendesk.\n\nNous avons donc d'abord établi une connexion avec cette API. Ensuite, j'ai dû faire trois requêtes à cette API :\n<ul><li>La première permettait de récupérer tous les tickets mis à jour entre deux dates spécifiées par l'utilisateur.</li><li>La deuxième était utilisée pour obtenir le nom du ticket, qui, dans notre cas, correspondait également au nom de la spécification.</li><li>La troisième récupérait le rôle de la personne sur tous les commentaires associés aux tickets.</li></ul>\n\nEnsuite, j'ai sélectionné les résultats pertinents à afficher et les ai triés par ordre chronologique.\n\nLe code permettant le téléchargement du fichier était déjà présent dans le code initial, mais il a nécessité plusieurs modifications. Par ailleurs, j’ai dû créer un Template Word destiné à fournir une structure prédéfinie à suivre lors de la génération des rapports.",
                            images: {
                                image_1: {
                                    name: "",
                                    alt: ""
                                },
                                image_2: {
                                    name: "",
                                    alt: ""
                                }
                            } // TODO
                        },
                        result: {
                            title: "Résultat de la SAÉ",
                            text: "<a href='https://docs.google.com/presentation/d/1uueQqS5IAyxeuxPOwv-2YE4rRnxuOs72wY5auPL-VPI/edit?usp=sharing'>Lien de la présentation</a>",
                            files: {
                                file_1: {

                                },
                                file_2: {

                                }
                            }
                        },
                        personal_enrichment: {
                            title: "Enrichissement personnel",
                            text: "Si j'ai beaucoup aimé cette SAÉ, c'est en grande partie grâce à mes collègues qui se sont montrés très attentifs.\nDe plus, j'ai pu m'améliorer en gestion de projet grâce à l'utilisation quotidienne de la méthodologie SCRUM. J'ai aussi développé ma capacité à me documenter et à chercher des informations par moi-même ainsi que ma capacité à utiliser des outils tels que GitLab."
                        },
                        skills_worked: {
                            title: "Compétences Développées",
                            text: "Concernant les compétences au programme du BUT Informatique concernées par cette SAÉ, je pense avoir assez bien travaillé :\n<ul><li><strong>Compétence 1 : Réaliser un développement d'application</strong><ul><li>Partir des exigences et aller jusqu'à une application complète</li><li>Mettre en place une architecture logicielle appropriée pour assurer la modularité et la maintenabilité de l'application.</li></ul></li><li><strong>Compétence 2 : Optimiser des applications informatiques</strong><ul><li>Analyser et optimiser des applications</li><li>Appréhender et construire des algorithmes</li></ul></li><li><strong>Compétence 4 : Gérer des données de l'information</strong><ul><li>Concevoir et modéliser une base de données</li></ul></li></ul>"
                        },
                        analysis: {
                            title: "Analyse réflexive",
                            text: "Pour être plus efficace à l'avenir, il faudrait que je cherche des informations de façon plus pertinente et efficace de sorte à moins perdre de temps. De plus, il faudrait que je me familiarise davantage avec GitLab et les bonnes pratiques de développement collaboratif. Enfin, il faudrait que je sous-estime moins les tâches qui m'ont été confiées, car ça m'a parfois conduite à faire des heures supplémentaires."
                        },
                        technologies: [technologies[20], technologies[5], technologies[4], technologies[16], technologies[8]]
                    }
                }
            },
            2024: {
                category: "Projets de troisième année",
                summary: "Dans le cadre de ma troisième année, j'ai effectué un stage en entreprise. J'ai aussi participé à de nombreux projets dont une SAÉ. Ces expériences m'ont permis de travailler sur divers projets et d'acquérir de nombreuses compétences.",
                projects: {
                    sae_s5: {
                        title: "Présentation de la SAÉ",
                        category: "Universitaire",
                        type: "presentation",
                        instructions: {
                            title: "Objectif",
                            text: "Cette SAÉ, réalisée par <span style='color:red;'><strong>cinq étudiants</strong></span> en troisième année de BUT Informatique, a pour objectif de développer une application multi-architecture en utilisant des micro-contrôleurs et des objets connectés pour collecter des données, les traiter et les visualiser.\nMon groupe et moi avons choisi de créer une application de tests de réflexe destinée à des scientifiques."
                        },
                        architecture: {
                            title: "Architecture",
                            text: "L'application comprend plusieurs infrastructures complexes que nous devons faire communiquer entre elles.\n\nNous disposons d’une <span style='color:blue;'><strong>application mobile</strong></span> (codée pour les Android dans notre cas) celle-ci a été conçue pour prendre des vidéos et les envoyer à un <span style='color:blue;'><strong>serveur d'analyse</strong></span>. Ce serveur comme son nom l'indique a pour but d’analyser les informations reçues. Une fois le traitement effectué il envoie les résultats à un <span style='color:blue;'><strong>serveur de centralisation</strong></span> des données codé en java. Ce serveur reçoit également des données de la part des microcontrôleurs. Il communique avec une <span style='color:blue;'><strong>API</strong></span> réalisée en Node.js afin de stocker les données reçues dans une <span style='color:blue;'><strong>base de données MongoDB</strong></span>. Le serveur de centralisation est tout de même capable de communiquer lui-même avec la BDD sans passer au travers de l’API. Pour finir les données seront affichées sous forme de statistiques dans une page Web (<span style='color:blue;'><strong>frontend</strong></span>) réalisée en Vue.js.\n\nSur la figure ci-dessous est représentée l'architecture de l'application.",
                            images: {
                                image_1: {
                                    name: "",
                                    alt: ""
                                }
                            }
                        },
                        organization_of_work: {
                            title: "Processus de développement",
                            text: "Pour développer cette application nous avons utilisé <span style='color:green;'><strong>GitLab</strong></span> et <span style='color:green;'><strong>Trello</strong></span> pour gérer le versioning et la planification des tâches.\n\nEn ce qui concerne le déploiement, une grande partie de l'application est déployée en conteneurs <span style='color:green;'><strong>Docker</strong></span>.\n\nLes principaux langages que j'ai pu manipuler sont les suivants :\n<ul><li>Arduino ;</li><li>Java ;</li><li>JavaScript ;</li><li>Kotlin ;</li><li>YAML ;</li></ul>"
                        },
                        result: {
                            title: "Résultat de la SAÉ",
                            text: `Actuellement, ce projet est en cours de réalisation. Cependant, vous trouverez <a href="https://gitlab.iut-bm.univ-fcomte.fr/ggodailf/sae_s5">ci-joint</a> le dépôt GitLab du projet.`
                        },
                        technologies: [technologies[24], technologies[19], technologies[20], technologies[23], technologies[12], technologies[8]]
                    },
                    stage_s6: {
                        title: "Présentation du Stage",
                        category: "Professionnel",
                        type: "presentation",
                        instructions: {
                            title: "Objectif",
                            text: "J'ai réalisé mon stage chez <span style='color:red;'><strong>Natural Solutions</strong></span>, une entreprise basée à Marseille. Cette entreprise se consacre à mettre la technologie au service de la biodiversité en développant des outils pour les acteurs environnementaux et les associations. Ces outils sont principalement des applications Web et mobiles.\n\nL'équipe que j'ai rejoint était composée :\n<ul><li>de deux autres développeurs ;</li><li>d'un chef de projet ;</li><li>d'une designeuse.</li></ul>\n\nMon équipe et moi avons travaillé sur un projet pour <span style='color:green;'><strong>Wings of Ocean</strong></span>, une association dédiée à la préservation de l'environnement. Notre mission était de développer une plateforme de gestion de ramassage de déchets.\n\nMon objectif pendant ce stage était de <span style='color:blue;'><strong>contribuer au développement de ce projet</strong></span>, appelé DepollutionMap. Les tâches dont j'ai été chargée m'ont été confiées au fur et à mesure du projet."
                        },
                        organization_of_work: {
                            title: "Processus de développement",
                            text: "Pour développer cette application nous avons utilisé <span style='color:green;'><strong>GitLab</strong></span> et <span style='color:green;'><strong>Jira</strong></span> pour gérer le versioning et la planification des tâches.\n\nEn ce qui concerne le déploiement, l'application est déployée en conteneurs <span style='color:green;'><strong>Docker</strong></span>.\n\nLes principaux langages que j'ai pu manipuler sont les suivants :\n<ul><li>GraphQL ;</li><li>SQL ;</li><li>TypeScript ;</li><li>React.js ;</li></ul>"
                        },
                        result: {
                            title: "Résultat de la SAÉ",
                            text: "À la fin de ce stage, j'ai dû réaliser une présentation orale et deux rapports :\n<ul><li>l'un technique (destiné à un informaticien reprenant le travail) ;</li><li>l'autre destiné à expliquer le déroulement de notre stage sans entrer dans les détails techniques.</li></ul>\n\n<a href='https://docs.google.com/presentation/d/1LiP-nK3gmnG1EadbeIMfyvVh-VUsXMA4EwR9I6H2e2o/edit?usp=sharing'>Lien de la présentation</a>",
                            files: {
                                file_1: {

                                },
                                file_2: {

                                }
                            }
                        },
                        technologies: [technologies[14], technologies[18], technologies[15], technologies[22], technologies[9], technologies[10]]
                    },
                    competence_1: {
                        title: "Compétence 1 – Réaliser un développement d’application",
                        type: "competence",
                        instructions: {
                            text: "La compétence 1 consiste à concevoir, coder, tester et intégrer une solution informatique pour un client."
                        },
                        skill_1: {
                            title: "Développer des applications informatiques simples",
                            text: "<h2>Projet de SAÉ</h2>Tout au long de ce projet, j'ai pu mettre en pratique des compétences essentielles dans le développement d'applications informatiques simples.\n\nEn collaboration avec un binôme, j'ai travaillé sur une <span style='color:blue;'><strong>application mobile</strong></span> permettant aux utilisateurs de prendre des photos et de les envoyer à un serveur d'analyse que nous avons également développé. Cette expérience m'a permis de créer une interface utilisateur intuitive et facile d'utilisation, tout en implémentant et en élaborant des conceptions simples.\n\nDe plus, j'ai activement contribué au <span style='color:red;'><strong>développement de l'API et du frontend</strong></span>, où j'ai été responsable de l'affichage des données de la base sous forme de graphiques. Pour garantir la fiabilité de cette partie, j'ai effectué plusieurs <span style='color:green;'><strong>tests en JavaScript</strong></span> afin de vérifier que les résultats obtenus correspondaient à ceux attendus.\n\n<h2>Expérience professionnelle</h2>\n\nLors de mon stage en entreprise, j'ai été chargé de plusieurs missions, dont la <span style='color:blue;'><strong>mise en place d'un Dashboard</strong></span> accessible à tous les utilisateurs, qu'ils soient connectés ou non. Pour mener à bien cette tâche, j'ai dû penser l'interface selon les besoins des utilisateurs, extraire des données de la base, les manipuler et les afficher comme demandé par le client.\n\n<em>Ci dessous, vous trouverez une capture d'écran du Dashboard de l'application.</em>\n\nPour chacun de ces projets, j'ai pris soin de <span style='color:red;'><strong>commenter mon code</strong></span> pour rendre l'application évolutive et faciliter sa prise en main par un autre développeur.",
                            images: {
                                image_1: {

                                }
                            }
                        },
                        skill_2: {
                            title: "Des exigences à une application complète",
                            text: "<h2>Projet de SAÉ</h2>Dans le cadre de ce projet, mon groupe et moi avons commencé par <span style='color:red;'><strong>analyser les exigences</strong></span> fonctionnelles et techniques fournies par nos professeurs. À partir de ces exigences, nous avons élaboré un <span style='color:green;'><strong>cahier des charges</strong></span> détaillé. Ensuite, en utilisant <span style='color:blue;'><strong>Trello</strong></span>, nous avons organisé et réparti les tâches entre nous, ce qui nous a permis de suivre et de structurer efficacement notre travail tout au long du projet.\n\n<em>Sur la photo ci-contre voici un extrait de notre Trello.</em>\n\n<h2>Expérience professionnelle</h2>\n\nAu cours de mon stage, nous ne disposions pas d'un cahier des charges initial. Le client nous communiquait ses besoins progressivement. Par conséquent, nous avons adopté la <span style='color:red;'><strong>méthodologie agile Scrum</strong></span> en travaillant par sprints. En amont de chaque sprint, nous définissions les besoins des utilisateurs et les fonctionnalités à développer pour les deux semaines suivantes, ce qui nous permettait d'affiner et d'<span style='color:blue;'><strong>ajuster continuellement l'application</strong></span> en fonction des retours et des exigences émergentes.",
                            images: {
                                image_1: {

                                }
                            }
                        },
                        skill_3: {
                            title: "Adapter des applications sur un ensemble de supports",
                            text: "Pour la partie frontend de la SAÉ et de l'application développée lors de mon stage, nous avons veillé à ce que l'<span style='color:blue;'><strong>interface utilisateur</strong></span> soit <span style='color:blue;'><strong>responsive</strong></span>, s'adaptant à différentes tailles d'écran, que ce soit sur ordinateur ou sur téléphone.\n\nEn outre, j'ai participé à la <span style='color:green;'><strong>conteneurisation des deux projets avec Docker</strong></span>. L'utilisation de cette technologie a facilité le déploiement et l'installation des applications sur différentes plateformes et systèmes d'exploitation."
                        },
                        analysis: {
                            title: "Conclusion",
                            text: "Ces expériences m'ont permis d'acquérir et de renforcer mes <span style='color:red;'><strong>connaissances dans le développement d'applications</strong></span>.\n\nEn effet, lors de ma SAÉ et de mon stage, j'ai veillé à respecter les besoins des clients et à assurer la qualité du code par une documentation soignée, facilitant ainsi l'évolution des applications."
                        }
                    },
                    competence_2: {
                        title: "Compétence 2 : Optimiser des applications",
                        type: "competence",
                        instructions: {
                            text: "Cette compétence implique de modéliser des situations complexes, de s'appuyer sur des schémas de raisonnement et de justifier ses choix."
                        },
                        skill_1: {
                            title: "Appréhender et construire des algorithmes",
                            text: "<h2>Projet de SAÉ</h2>Dans ce projet, j'ai participé au développement d'une application de tests de réflexe destinée aux scientifiques. Ce projet a nécessité une analyse approfondie des besoins et une <span style='color:red;'><strong>décomposition du problème</strong></span> en éléments simples. Nous avons conçu une architecture complexe où des microcontrôleurs et des objets connectés collectent des données, les transmettent à divers serveurs pour qu'elles soient analysées et sauvegardées.\n\n<h2>Expérience professionnelle</h2>\n\nPendant mon stage, j'ai développé un Dashboard nécessitant la récupération, le formatage, l'analyse et l'affichage des données enregistrées dans la base. Pour cela, j'ai écrit des <span style='color:blue;'><strong>requêtes optimales</strong></span> afin de minimiser le traitement des données. De plus, le Dashboard devant réagir instantanément aux filtres sélectionnés par l'utilisateur j'ai <span style='color:green;'><strong>optimisé les calculs</strong></span> et les appels à la base de données pour ne pas surcharger le serveur et pour obtenir un côté instantané côté client."
                        },
                        skill_2: {
                            title: "Sélectionner les algorithmes adéquats pour répondre à un problème donné",
                            text: "<h2>Projet de SAÉ</h2>L'application que nous avons développée nécessitait l'utilisation de structures de données complexes. En effet, les informations provenant des microcontrôleurs et de l'application mobile étaient non structurées, ce qui nous a conduits à <span style='color:blue;'><strong>choisir MongoDB</strong></span> pour sa capacité à gérer efficacement ce type de données.\n\n<h2>Expérience professionnelle</h2>\n\nPendant mon stage, la gestion et la <span style='color:red;'><strong>sécurisation des données</strong></span> sensibles ont été des priorités pour le développement de l'application DepollutionMap. Nous avons mis en place des mesures de sécurité robustes pour protéger les données de l'association, notamment en sélectionnant les <span style='color:green;'><strong>droits d'accès</strong></span> associés à chaque table en fonction des types d'utilisateurs (administrateurs, bénévoles, etc.). Nous avons également implémenté un <span style='color:green;'><strong>système d'authentification</strong></span> utilisant des tokens et mis à jour l'interface utilisateur en fonction des droits de l'utilisateur connecté (par exemple, un bouton permettant de créer une ressource n'est accessible qu'aux administrateurs)."
                        },
                        skill_3: {
                            title: "Analyser et optimiser des applications",
                            text: "Dans le cadre de la SAÉ, j'ai développé un serveur d'analyse capable de détecter si deux visages regardent dans la même direction. Pour ce faire, j'ai entrepris un travail de <span style='color:red;'><strong>recherche et de veille informatique</strong></span>. J'ai réalisé de nombreux essais qui ont abouti à des échecs, mais après avoir adapté un fichier trouvé sur GitHub j'ai pu réaliser cette tâche.\n\nCette expérience m'a permis de <span style='color:green;'><strong>sélectionner</strong></span> et d'<span style='color:green;'><strong>exploiter</strong></span> efficacement des <span style='color:green;'><strong>bibliothèques</strong></span> et des méthodes spécifiques au domaine d'application, en tenant compte des divers problèmes et contraintes rencontrés.",
                            images: {
                                image_1: {

                                }
                            }
                        },
                        analysis: {
                            title: "Conclusion",
                            text: "Ces expériences m'ont permis d'acquérir et de renforcer mes <span style='color:red;'><strong>connaissances en optimisation des applications</strong></span>.\n\nEn effet, lors de ma SAÉ et de mon stage, j'ai appris à concevoir et à sélectionner des algorithmes adaptés aux problèmes rencontrés, ainsi qu'à analyser et optimiser les applications de manière efficace."
                        }
                    },
                    competence_6: {
                        title: "Compétence 6 : Collaborer au sein d’une équipe",
                        type: "competence",
                        instructions: {
                            text: "Le but de cette compétence est d'acquérir, de développer et d'exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique."
                        },
                        skill_1: {
                            title: "Identifier ses aptitudes pour travailler dans une équipe",
                            text: "<h2>Projet de SAÉ</h2>Pour ce projet, mon groupe et moi avons <span style='color:green;'><strong>réparti les tâches</strong></span> en fonction des aptitudes de chacun. Il a été crucial d'<span style='color:red;'><strong>identifier</strong></span> mes <span style='color:red;'><strong>compétences</strong></span>, celles des autres membres de l'équipe, ainsi que celles requises pour chaque tâche afin de les attribuer de manière optimale.\n\n<h2>Expérience professionnelle</h2>\n\nDurant mon stage, j'ai été encadrée par mon maître de stage et le chef de projet. Bien que je n'aie pas eu à <span style='color:blue;'><strong>identifier directement les aptitudes</strong></span> de chacun, j'ai appris à reconnaître le rôle et le statut de chaque membre de l'équipe. Cela m'a permis de savoir vers qui me tourner en fonction de mes besoins spécifiques.\n\nPour ces deux expériences, j'ai développé de <span style='color:green;'><strong>solides compétences interpersonnelles</strong></span>. J'ai appris à m'adapter rapidement à diverses situations et à renforcer mon esprit d'équipe et ma communication. Cela a grandement facilité la <span style='color:red;'><strong>collaboration</strong></span> et la <span style='color:red;'><strong>cohésion</strong></span> au sein des équipes avec lesquelles j'ai travaillé."
                        },
                        skill_2: {
                            title: "Situer son rôle et ses missions au sein d’une équipe informatique",
                            text: "Pour chaque projet auquel j'ai contribué, j'ai activement participé aux <span style='color:blue;'><strong>réunions d'équipe</strong></span> et utilisé divers <span style='color:green;'><strong>outils de collaboration</strong></span> tels que <span style='color:red;'><strong>GitLab</strong></span>, Microsoft Teams et Discord. Ces expériences m'ont permis de m'intégrer rapidement et efficacement dans les équipes informatiques, contribuant de manière significative aux projets en cours.\n\nJ'ai également développé et perfectionné mes compétences interpersonnelles, notamment en matière de collaboration, de communication et d'écoute. Ces compétences m'ont aidée à <span style='color:blue;'><strong>travailler efficacement</strong></span> dans des environnements d'équipe diversifiés, en favorisant une atmosphère de coopération.\n\nEnfin, pour <span style='color:green;'><strong>suivre mon activité</strong></span> et garantir une transparence et une responsabilisation continues dans mon travail, j'ai utilisé des outils de gestion de projet comme <span style='color:red;'><strong>Trello</strong></span> et <span style='color:red;'><strong>Jira</strong></span>.",
                            images: {
                                image_1: {

                                }
                            }
                        },
                        skill_3: {
                            title: "Manager une équipe informatique",
                            text: "Au cours des projets que j'ai réalisés cette année, j'ai souvent pris l'initiative d'<span style='color:blue;'><strong>aider</strong></span> et d'<span style='color:blue;'><strong>attribuer des tâches</strong></span> à mon groupe. Dans les situations où nous rencontrions des problèmes, j'étais fréquemment en mesure de <span style='color:green;'><strong>proposer des solutions</strong></span> possibles. Ces propositions étaient ensuite discutées en groupe, permettant de trouver la meilleure approche collective.\n\nGrâce à cette dynamique, j'ai contribué à maintenir un flux de travail efficace et à renforcer la cohésion de l'équipe, tout en développant mes compétences en management et en résolution de problèmes."
                        },
                        analysis: {
                            title: "Conclusion",
                            text: "Ces expériences m'ont permis d'acquérir et de renforcer mes <span style='color:red;'><strong>compétences en collaboration</strong></span> au sein d'une équipe informatique.\n\nEn effet, j'ai appris à utiliser des outils essentiels dans le domaine de l'informatique, tels que GitLab. De plus, au cours de ma SAÉ et de mon stage, j'ai veillé à rendre compte de mon activité professionnelle, à développer mes compétences interpersonnelles et à soutenir activement mon équipe."
                        }
                    },
                }
            }
        }
    }
};

module.exports = {
    name: name,
    status: status,
    about_me: about_me,
    professional_experience: professional_experience,
    hobbies: hobbies,
    cv_link: cv_link,
    mail: mail,
    github: github,
    linkedin: linkedin,
    experiences: experiences
}
