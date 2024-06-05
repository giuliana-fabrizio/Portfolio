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

const experiences = {
    university_experience: {
        title: "Projets réalisés en BUT Informatique",
        years: {
            2022: {
                category: "Projets de première année",
                summary: "Dans le cadre de ma première année, j'ai eu à faire des SAÉ (projets de groupe encadrés par des professeurs). Chaque SAÉ concerne une ou plusieurs compétences au programme de l'année concernée. Au cours de cette année universitaire nous avons eu à faire 10 SAÉ.",
                projects: {
                    sae_S1_05: {
                        title: "SAE S1 05",
                        category: "Universitaire",
                        instructions: `Cette SAÉ est la première que nous avons dû réaliser.\nLe but était de faire une présentation en groupe sur une thématique assez surprenante (car n'ayant pas de rapport particulier avec l'informatique). La problématique que mon groupe devait traiter était "Comment présenteriez-vous votre formation dans votre ancien lycée ?".\nPlus précisément nous devions décrire le scénario (besoins du client, organisation pour répondre aux attentes du client) à l'aide des questions - réponses échangées avec les professeurs (se mettant à la place du client), ainsi que notre travail de groupe pour réaliser cette SAÉ.`,
                        organization_of_group_work: "Pour cette SAÉ nous nous sommes à mon sens assez mal organisé.\nNous ne nous sommes répartis les tâches qu'assez tardivement ce qui ne nous a pas permis de rendre un très bon travail.\nAinsi nous nous sommes répartis la réalisation : \n\t• d'un diagramme de Gantt (diagramme décrivant l'organisation selon laquelle nous avons opéré pour réaliser cette SAÉ) ;\n\t• du diaporama à présenter lors de notre soutenance ;\n\t• du texte.",
                        actions_in_the_group: "Pour ma part je me suis chargée de la réalisation du diagramme de Gant ainsi que d'une partie du texte accompagnant le diaporama le jour de la soutenance.",
                        result: "", // TODO
                        personal_enrichment: "Cette SAÉ m'aura permis de me rapprocher de mes camarades de classe en travaillant avec certains pour ce projet et en passant à l'oral devant les autres.",
                        skills_worked: "Parmi les compétences au programme du premier semestre du BUT, je pense avoir travaillé la compétence 5 qui consiste à gérer un projet.\nEn effet cette SAÉ aura été plus compliquée à réaliser que nous le pensions principalement dû au fait que nous avons négligé la gestion de projet au commencement.",
                        reflective_analysis: "Je pense que pour mieux réussir cette SAÉ il faudrait se motiver davantage bien que le sujet soit peu attractif.\nDe plus, comme dit précédemment il faudrait mieux communiquer les uns avec les autres et s'organiser correctement.\nPour l'aspect esthétique de notre diaporama il aurait été intéressant de prendre un canvas.",
                        technologies: ["Word", "Google Slides"]
                    },
                    sae_S1_06: {
                        title: "SAE S1 06",
                        category: "Universitaire",
                        instructions: "Cette SAÉ, consistait à créer un site web sur une entreprise informatique française. De plus, nous devions faire un rapport analytique de l'entreprise choisie ainsi qu'un diagramme de Gantt ou un réseau Pert pour planifier les tâches que nous devions réaliser.",
                        organization_of_group_work: "Mon groupe comptait 4 personnes.\nConcernant le rapport économique, nous nous sommes divisés les différentes parties à faire (présentation de l'entreprise, aspect économique, aspect environnemental).\nPour ce qui est du site Web, nous nous sommes d'abord mis d'accord au sujet de la charte graphique afin que le style du site soit cohérent pour chaque page. Nous avons ensuite décidé qui fera quelle page.",
                        actions_in_the_group: "Ma partie du rapport (aspect économique) résidait à faire des recherches et une analyse sur :\n\t• les partenariats et les concurrents de Capgemini, l'entreprise que nous avions choisie ;\n\t• le chiffre d'affaires et autres aspects financiers de l'entreprise.\nConcernant le site web, j'ai participé à la création de la charte graphique.\nAu niveau du développement du site, je me suis en partie chargée de faire le menu, la sous-page d'accueil, le formulaire de contact, le bouton de téléchargement, et de rendre le site adaptable selon la taille de l'appareil avec lequel on le consulte (responsive).",
                        result: "Le code ainsi que le rapport de cette SAÉ sont disponibles ci-joints : https://mbeaudru-iut90.github.io/SAE_06_Capgemini/Projet/site_web.html", // TODO
                        personal_enrichment: "Parmi ce que j'aurais appris durant cette SAÉ, il y a principalement le fait de travailler en équipe et de s'organiser en conséquence.\nDe plus, n'ayant que peu de connaissances sur le développement web et le CSS (style d'un site web) à l'époque, j'ai été poussée à faire de nombreuses recherches, ce qui m'a permis d'apprendre beaucoup de choses techniques.\nConcernant le rapport économique, j'ai découvert que l'économie d'une entreprise est beaucoup plus complexe que le chiffre d'affaires (comme je le pensais jusqu'alors).",
                        skills_worked: "Concernant les compétences au programme du BUT Informatique, je pense avoir travaillées :\n\t• la compétence n°1 relative à la réalisation d'une application (implémenter et élaborer des conceptions simples, faire des essais) ;\n\t• la compétence n°5 qui consiste à conduire un projet (appréhender les besoins du client et de l'utilisateur, mettre en place les outils de gestion de projet, ....) ;\n\t• la compétence n°6 correspondant au fait de travailler dans une équipe informatique (découvrir les aptitudes requises selon les différents secteurs, ...).",
                        reflective_analysis: "Dans le but d'être plus productive et moins dépassée par la charge de travail (cette SAÉ se faisait en parallèle d'une autre), il faudrait que je parvienne mieux à cibler les tâches à faire de sorte de pouvoir m'organiser selon la charge de travail.\nJe dois également m'investir davantage dans les tâches qui ne me motivent pas."
                    },
                    sae_S1_03: {
                        title: "SAE S1 03",
                        category: "Universitaire",
                        instructions: "L'objectif de cette SAÉ était d'installer et de configurer une machine virtuelle (V.M) en fonction d'un cahier des charges donné.\nNous devions pour cela rendre 3 livrables :\n\t• un dossier d'étude et de choix des solutions (rapport contenant la demande formulée par le client, description des architectures matérielles proposées, description des architectures logicielles proposées) ;\n\t• un schéma de l'architecture logicielle / notice d'utilisation (rapport contenant les étapes de l'installation de la machine virtuelle + la machine virtuelle complète) ;\n\t• une présentation orale.\nPour ce faire, mon groupe était constitué de 4 personnes.",
                        organization_of_group_work: "Mon groupe (de 4 personnes) et moi nous sommes répartis les différentes parties constituant le premier rapport.\nLa V.M a été réalisée par deux membres du groupe car les deux autres s'occupaient de faire la SAÉ S1.04 faite conjointement à celle-ci et disponible dans ce portfolio. Le rapport contenant les étapes d'installation a donc été rédigé par ces deux membres et relu dans son intégralité par tout le groupe.",
                        actions_in_the_group: "Concernant le premier rapport j'ai fait la partie consistant à déterminer et décrire les différents logiciels à installer. Pour cela je me suis documentée sur plusieurs sites ce qui m'a d'ailleurs permis d'apprendre beaucoup de choses.\nJe n'ai personnellement pas participé à l'installation et à la configuration de la V.M.",
                        result: "", // TODO
                        personal_enrichment: "",
                        skills_worked: "Cette SAÉ m'a permis de travailler les compétences suivantes :\n\t• la compétence n°3 qui consiste à administrer des systèmes informatiques communicants complexes  c'est - à - dire identifier les différents composants logiciels d'un système, installer et configurer un système d'exploitation et des outils de développements) ; \n\t• la compétence n°5 relative au fait de conduire un projet(appréhender les besoins du client et de l'utilisateur) ;\n\t• la compétence n°6 concernant le travail dans une équipe informatique (découvrir les aptitudes requises selon les différents secteurs, ...).",
                        reflective_analysis: "Je pense que nous nous sommes bien organisés pour cette SAÉ et que notre stratégie de se répartir les SAÉ était une bonne idée, cependant je regrette de ne pas avoir participé pour la V.M."
                    },
                    sae_S1_04: {
                        title: "SAE S1 04",
                        category: "Universitaire",
                        instructions: "Pour cette SAÉ nous devions faire un MCD, un rapport et une application destinée aux habitants d'une petite commune.\nLe MCD (ou Modèle Conceptuel de Données) est une sorte de représentation des données utilisées par le système d'information.\nLe rapport devait justifier nos choix fait lors de la réalisation du MCD.\nParallèlement le but de l'application était que les habitants de la commune puissent s'en servir pour réserver ou proposer des trajets entre leur mairie et un autre endroit et inversement.\nNotre  mission était de faire en sorte de pouvoir ajouter, éditer ou supprimer un trajet, un véhicule, une réservation (sauf éditer), et un habitant, pour lequel nous devions aussi faire un profil.",
                        organization_of_group_work: "Il nous était imposé que chaque membre du groupe (constitué de 4 personnes) se charge d'une page (soit habitant, soit véhicule, etc).\nAinsi chacun a choisi la page dont il souhaitait se charger et l'a faite.\nConcernant le rapport, la rédaction s'est faite par ceux qui avaient fait le MCD.",
                        actions_in_the_group: "Je me suis chargée d'une partie du script SQL et de la partie habitant.\nPour cela, j'ai dû faire en sorte de pouvoir ajouter un nouvel habitant, de l'éditer (changer le nom par exemple), de le supprimer, ainsi que de montrer son profil (voir photo ci-dessous).",
                        result: "",
                        personal_enrichment: "Avant de faire cette SAÉ, nous avions déjà dû faire un petit projet personnel similaire.\nBien que nous avions déjà vu comment faire certaines choses, revenir dessus m'a permis de comprendre les notions sur lesquelles j'avais eu du mal la première fois, et de mieux retenir la technique à adopter pour les notions que j'avais déjà comprises.\nDe plus, cette SAÉ m'aura permis de m'adapter au travail en équipe.",
                        skills_worked: "Concernant les compétences relatives à cette SAÉ, je pense avoir développé les suivantes :\n\t• la compétence n°1 qui réfère à la réalisation d'une application (implémenter et élaborer des conceptions simples, faire des essais, développer des interfaces utilisateurs, ....) ;\n\t• la compétence n°4 concernant essentiellement la conception et l’administration des données d’une entreprise et la mise à disposition de ces informations ;\n\t• les compétences n°5 et n°6, l'une consistant à conduire un projet (appréhender les besoins du client et de l'utilisateur, mettre en place les outils de gestion de projet, ....), l'autre à travailler dans une équipe informatique (découvrir les aptitudes requises selon les différents secteurs, ....).",
                        reflective_analysis: "Dans le but d'être plus rapide et plus efficace à l'avenir, il faudrait que je m'exerce davantage à ce type d'exercice, que ce soit la production de MCD ou la réalisation d'un site web.\nConcernant le travail en groupe, il faudrait que je cesse de vouloir tout contrôler et que je m'adapte au rythme des autres."
                    },
                    sae_101_102: {
                        title: "SAE 101-102",
                        category: "Universitaire",
                        instructions: "",
                        organization_of_group_work: "",
                        actions_in_the_group: "",
                        result: "",
                        personal_enrichment: "",
                        skills_worked: "",
                        reflective_analysis: ""
                    },
                    sae_S2_04: {
                        title: "SAE S2 04",
                        category: "Universitaire",
                        instructions: "",
                        organization_of_group_work: "",
                        actions_in_the_group: "",
                        result: "",
                        personal_enrichment: "",
                        skills_worked: "",
                        reflective_analysis: ""
                    },
                    sae_S2_05: {
                        title: "SAE S2 05",
                        category: "Universitaire",
                        instructions: "",
                        organization_of_group_work: "",
                        actions_in_the_group: "",
                        result: "",
                        personal_enrichment: "",
                        skills_worked: "",
                        reflective_analysis: ""
                    },
                    sae_S2_03: {
                        title: "SAE S2 03",
                        category: "Universitaire",
                        instructions: "",
                        organization_of_group_work: "",
                        actions_in_the_group: "",
                        result: "",
                        personal_enrichment: "",
                        skills_worked: "",
                        reflective_analysis: ""
                    },
                    sae_S2_1_2_6: {
                        title: "SAE S2 1-2-6",
                        category: "Universitaire",
                        instructions: "",
                        organization_of_group_work: "",
                        actions_in_the_group: "",
                        result: "",
                        personal_enrichment: "",
                        skills_worked: "",
                        reflective_analysis: ""
                    }
                }
            },
            2023: {
                category: "Projets de deuxième année",
                summary: "Dans le cadre de ma deuxième année, j'ai eu à faire un stage en entreprise et une SAÉ. Celle-ci concerne plusieurs compétences au programme de cette deuxième année de BUT informatique.",
                projects: {

                }
            },
            2024: {
                category: "Projets de troisième année",
                summary: "Dans le cadre de ma troisième année, j'ai effectué un stage en entreprise. J'ai aussi participé à de nombreux projets dont une SAÉ. Ces expériences m'ont permis de travailler sur divers projets et d'acquérir de nombreuses compétences.",
                projects: {

                }
            }
        }
    }
}

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
