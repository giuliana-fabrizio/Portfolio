/* ***************************************************************** home page ************************************************************* */

const name = "Giuliana GODAIL FABRIZIO";

const about_me = "Actuellement en dernière année de BUT Informatique, je souhaite poursuivre mes études en écoles d'ingénieurs. Si j’ai choisi l’informatique c’est parce que j’aime concevoir et optimiser des projets, en trouvant des solutions adaptées aux besoins des utilisateurs.";
const professional_experience = "En 2021 j'ai réalisé un CDD de 2 mois en tant qu’employée de supérette. Dans le cadre de ma formation j’ai aussi effectué 2 stages en entreprise chacun d’une durée de 12 semaines. Ces expériences m'ont permis de découvrir le travail en équipe, où j'ai pu apprendre des autres tout en partageant mes connaissances.";
const hobbies = "Durant mon temps libre, je pratique un peu d’activité physique comme le jogging. Je développe aussi des projets personnels. J’aime aussi beaucoup la couture, par exemple, j’ai réalisé des trousses pour ranger mes stylos et quelques autres gadgets.";

const cv_link = "https://raw.githubusercontent.com/mbeaudru-iut90/SAE_06_Capgemini/main/doc/Fernandes_SAES106_C1_Capgemini.pdf";
const mail = "mailto:godailfabriziogiuliana@gmail.com";
const github = "https://github.com/giuliana-fabrizio";
const linkedin = "https://www.linkedin.com/in/giuliana-godail-fabrizio-20639525b/";


/* ***************************************************************** projects page ************************************************************* */

const projects = {
    project_1: {
        category: "Projets de première année",
        summary: "Dans le cadre de ma première année de BUT Informatique, j'ai eu à faire des SAÉ (projet en groupe encadré par des professeurs). Chaque SAÉ concerne une ou plusieurs compétences au programme de cette première année de BUT info. Au cours de cette année universitaire nous avons eu à faire 10 SAÉ."
    },
    project_2: {
        category: "Projets de deuxième année",
        summary: "Dans le cadre de ma deuxième année de BUT Informatique, j'ai eu à faire une SAÉ. Celle-ci concerne plusieurs compétences au programme de cette deuxième année de BUT informatique."
    },
    project_3: {
        category: "Projets de troisième année",
        summary: "Dans le cadre de ma troisième année de BUT Informatique, j'ai effectué un stage en entreprise. J'ai aussi participé à de nombreux projets dont une SAÉ. Ces expériences m'ont permis de travailler sur divers projets et d'acquérir de nombreuses compétences."
    }
}

module.exports = {
    name: name,
    about_me: about_me,
    professional_experience: professional_experience,
    hobbies: hobbies,
    cv_link: cv_link,
    mail: mail,
    github: github,
    linkedin: linkedin,
    projects: projects
}
