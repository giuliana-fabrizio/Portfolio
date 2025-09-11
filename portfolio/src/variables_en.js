const carousel_1 = require("../public/images/interests/carousel-1.jpg");
const carousel_2 = require("../public/images/interests/carousel-2.png");
const carousel_3 = require("../public/images/interests/carousel-3.jpg");
// const image_sewing = require("../public/images/interests/sewing.png");


/* ***************************************************************** common ***************************************************************** */

const birthday = new Date("11-27-2002");

const name = "Giuliana GODAIL-FABRIZIO";


/* ***************************************************************** nav bar ***************************************************************** */

const home_btn = "Home";
const academic_training_btn = "School training";
const experiences_btn = "Experience";
const projects_btn = "Projects";
const interests_btn = "Hobbies";


/* ***************************************************************** home page ***************************************************************** */

const status = "Computer science student";

const about_me_title = "About me";
const about_me = `I am currently a computer science engineering student at the <a href="https://www.utbm.fr/formations/ingenieur/informatique/" target="_blank">UTBM</a>. Passionate about this field, I am constantly seeking to improve my skills. To achieve this, I regularly work on personal projects : I sometimes image myself a problem to solve which allows me to experiment with different approaches and technologies.\n
I particularly enjoy designing and optimizing solutions to create efficient tools tailored to users' needs. At present, I aspire to specialize in big data processing and artificial intelligence.`;
const download_cv = "Download my CV";


/* ***************************************************************** footer ***************************************************************** */

const link_cv = "https://github.com/giuliana-fabrizio/Portfolio/raw/refs/heads/main/portfolio/public/files/Curriculum_vitae_Giuliana_GODAIL-FABRIZIO.pdf";
const mail = "mailto:godailfabriziogiuliana@gmail.com";
const github = "https://github.com/giuliana-fabrizio";
const linkedin = "https://www.linkedin.com/in/giuliana-godail-fabrizio-20639525b/";


/* ***************************************************************** projects page ***************************************************************** */

const projects_page_title = "MY PROJECTS";
const projects_page_presentation = "On this page, you will find all the projects I have worked on.";

const filterLabel = "Filter";
const categoriesLabel = "Type of project";
const technosLabel = "Technologies";
const confirmFilters = "Confirm";
const resetFilters = "Cancel";

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
    flask: { name: "Flask", logo: "images/technologies/flask.png" },
    next_js: { name: "Next.js", logo: "images/technologies/next-js.png" },
    node_js: { name: "Node.js", logo: "images/technologies/node-js.png" },
    symfony: { name: "Symfony", logo: "images/technologies/symfony.png"},

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
    php: { name: "Php", logo: "images/technologies/php.png" },
    python: { name: "Python", logo: "images/technologies/python.png" },
    ts: { name: "TypeScript", logo: "images/technologies/ts.png" },
    kotlin: { name: "Kotlin", logo: "images/technologies/kotlin.png" },
    swift: { name: "Swift", logo: "images/technologies/swift.png" },
};

// TODO PROJECTS


/* ***************************************************************** degrees page ***************************************************************** */

const degrees_page_title = "MY ACADEMIC TRAINING";

const school_career = {
    title: `My background`,
    content: `After obtaining my scientific baccalaureate in 2020, I decided to take up a gap year to reflect on my professional future. During this time, I did many research.
    It was somewhat by chance that I discovered computer science. Its constantly evolving nature and the opportunity to contribute to major technological advances motivated me to enroll in a Computer Science Bachelor's program (BUT) in 2021. I quickly became passionate about this fiel, which gave me the desire to deepen my knowledge and further improve my skills. That is why I chose to continue my studies in an engineering scholl.`
}

const degrees_title = `My degrees`;

const degrees = {
    engineer: {
        title: `Engineering cycle`,
        logo: "images/degrees/engineer.png",
        school: `Belfort-Montbéliard University of Technology (UTBM)`,
        place: `Belfort, France`,
        date: `Since September 2024`,
    },
    but: {
        title: `Bachelor of Technology in Computer Science (BUT)`,
        logo: "images/degrees/but.png",
        specialization: `Specialization : application development : design, development, validation`,
        mention: `Major de promotion`,
        school: `IUT de Belfort-Montbéliard`,
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
            <li>Tronc commun</li>\
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

const experiences_page_title = "MY EXPERIENCES";
const experiences = {
    stage_2024: {
        title: `Fullstack Developer II`,
        description: `Main tasks carried out :
        <ul>\
        <li>inserted Excel data in a ${technos.postgresql.name} database ;</li>\
        <li>developed the main dashboard ;</li>\
        <li>use ${technos.hasura.name} to manage user permissions.</li>\
        </ul>`,
        label_redirection: `More details`,
        redirection: projects.BUT_S6,
        logo: "images/experiences/natural_solutions.png",
        type: `Type : internship`,
        date: `January - April 2024`,
        company: `Natural Solutions`,
        place: `Marseille, France`,
    },
    stage_2023: {
        title: `Fullstack Developer I`,
        description: `Main tasks carried out :
        <ul>\
        <li>added ${technos.postgresql.name} database and used the ${technos.sequelize.name} ORM ;</li>\
        <li>fixed existing calculation errors ;</li>\
        <li>update the user interface : worked with ${technos.react_js.name} and integrate an external API ;</li>\
        <li>wrote unit tests in ${technos.js.name}.</li>\
        </ul>`,
        label_redirection: `More details`,
        redirection: projects.BUT_S4,
        logo: "images/experiences/natural_solutions.png",
        type: `Type : internship`,
        date: `April - June 2023`,
        company: `Natural Solutions`,
        place: `Marseille, France`,
    },
    cdd_2022: {
        title: `Convenience store employee`,
        description: `Main carried out :
        <ul>\
        <li>handled customer checkout ;</li>\
        <li>stocked shelves and received deliveries ;</li>\
        <li>trained new employees at the cash register ;</li>\
        <li>baked bread.</li>\
        </ul>`,
        logo: "images/experiences/u_express.png",
        type: `Type : fixed-term contract`,
        date: `July - August 2022`,
        company: `U Express`,
        place: `Marseille, France`,
    }
}

// TODO HOBBIES


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
