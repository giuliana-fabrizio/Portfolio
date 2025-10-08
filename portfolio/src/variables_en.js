const carousel_1 = require("../public/images/interests/carousel-1.jpg");
const carousel_2 = require("../public/images/interests/carousel-2.png");
const carousel_3 = require("../public/images/interests/carousel-3.jpg");
// const image_sewing = require("../public/images/interests/sewing.png");


/* ***************************************************************** common ***************************************************************** */

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
const about_me = `I am currently a computer science engineering student at the <a href="https://www.utbm.fr/formations/ingenieur/informatique/" target="_blank">UTBM</a>. I really like this field, that is why I am constantly seeking to improve my skills. To achieve this, I regularly work on personal projects : I sometimes image a problem to solve which allows me to experiment with different approaches and technologies.\n
I particularly enjoy designing and optimizing solutions to create efficient tools adapted to user needs. I now aspire to specialize in big data processing and artificial intelligence.`;
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

// TODO PROJECTS
const projects = {
    UTBM_AP4A: {
        title: `BadgeAccess`,
        category: categories.academic,
        introduction: {
            text: `This university project was done alone during my first year in the engineering cycle at UTBM. The goal was to simulate an access control system using badges and badge readers.`
        },
        implementation: {
            title: `Tasks completed`,
            text: ``,
            sections: [
                {
                    title: `Project architecture`,
                    list: [
                        `UML diagram to model classes and relations ;`,
                        `Project organized in separate modules (headers / sources).`,
                    ],
                    // images: [
                    //     // TODO
                    // ]
                }, {
                    title: `Object-Oriented Programming (OOP)`,
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
            text: `The project ended with a fully working application that met the teachers's requirements.\
            The simulator can process access requests while checking different parameters, such as the reader's rights or the badge validity. You can see my GitHub repository <a href='https://github.com/giuliana-fabrizio/BadgeAccess' target='_blank'>here</a>.`
        },
        technologies: [technos.cpp, technos.github]
    },
    UTBM_WE4A: {
        title: "Moodle",
        category: categories.academic,
        introduction: {
            text: "This university project, done during my first year in the engineering cycle with three other students, was about recreating some features of the educational platform Moodle."
        },
        implementation: {
            title: "Contributions",
            text: "",
            sections: [
                {
                    title: "Database",
                    list: [
                        "Design of the Conceptual Data Model (CDM);",
                        "Writing the script to create the tables;",
                        "Creating Symfony fixtures to insert test data into the database;",
                        "Connecting the database to the Symfony application;",
                        "Using Doctrine ORM to manage entities and relationships."
                    ],
                    images: [
                        {
                            path: "images/projects/UTBM_WE4A/mcd.png",
                            legend: "Application CDM",
                            style: "max-height: 225px;"
                        }
                    ]
                },
                {
                    title: "Security",
                    list: [
                        "Implementation of the login and logout system;",
                        "Management of access and permissions depending on user roles."
                    ]
                },
                {
                    title: "Other features",
                    list: [
                        "Writing Ajax requests to make the app more dynamic;",
                        "Adding the ability to upload and download files;",
                        "Implementation of several user interfaces with CRUD operations;",
                        "Specific redirection for 404 and 403 error pages."
                    ],
                    images: [
                        {
                            path: "images/projects/UTBM_WE4A/details-ue.png",
                            style: "max-height: 250px;"
                        }
                    ]
                }
            ]
        },
        result: {
            title: "Result",
            text: "The project ended with a fully functional application, allowing each user to perform specific actions depending on their role (for example, a teacher can upload files). This experience helped me strengthen my web development skills and improve my technical knowledge."
        },
        technologies: [technos.github, technos.php, technos.postgresql, technos.sql, technos.symfony]
    },
    UTBM_SY43: {
        title: "E-commerce application",
        category: categories.academic,
        introduction: {
            text: "This university project, done during my first year in the engineering cycle with three other students, was about creating an e-commerce Android app."
        },
        implementation: {
            title: "Contributions",
            sections: [
                {
                    title: `Authentication with ${technos.firebase.name}`,
                    list: [
                        `Setup of a dedicated ${technos.firebase.name} project;`,
                        `Integration of the ${technos.firebase.name} library and connection of the app to the project;`,
                        `Implementation of the authentication system;`,
                        `Added account creation feature;`,
                        `Implemented password reset system.`
                    ],
                    images: [
                        { path: "images/projects/UTBM_SY43/login.jpg", style: "max-height: 300px;" },
                        { path: "images/projects/UTBM_SY43/forgot-password.jpg", style: "max-height: 300px;" },
                        { path: "images/projects/UTBM_SY43/create-account.jpg", style: "max-height: 300px;" }
                    ]
                },
                {
                    title: "Dashboard",
                    list: [
                        "Definition of key data to show and how to visualize it;",
                        "Writing queries to get data from the database;",
                        "Display of results as text and charts using MPAndroidChart;",
                        "Added a filter option by year."
                    ],
                    images: [
                        { path: "images/projects/UTBM_SY43/dashboard.jpg", style: "max-height: 300px;" },
                        { path: "images/projects/UTBM_SY43/dashboard_2.jpg", style: "max-height: 300px;" }
                    ]
                },
                {
                    title: `Payment System`,
                    list: [
                        `Setup of a ${technos.stripe.name} server and connection to the app;`,
                        `Sending the price to pay to the ${technos.stripe.name} server;`,
                        `Hosting the ${technos.stripe.name} server via ${technos.firebase.name}.`
                    ],
                    images: [
                        { path: "images/projects/UTBM_SY43/stripe.jpg", style: "max-height: 300px;" }
                    ]
                }
            ]
        },
        result: {
            title: "Result",
            text: "The project ended with a functional e-commerce app that allows users to view products, add them to the cart, and complete their purchases. A clear and simple dashboard also shows sales statistics to administrators. This experience helped me improve my Android development, teamwork, and project management skills.\nYou can see our presentation <a href='#' target='_blank'>here</a> and our Git repository <a href='https://github.com/giuliana-fabrizio/Imperial-Roar' target='_blank'>here</a>."
        },
        technologies: [technos.firebase, technos.github, technos.kotlin, technos.sql, technos.stripe]
    },
    BUT_S6: {
        title: "Waste collection platform",
        category: categories.professional,
        introduction: {
            text: "This three-month internship (January - March 2024) at Natural Solutions was about contributing to the development of <strong>DepollutionMap</strong>, an app to manage waste collections done by the association Wings of Ocean."
        },
        implementation: {
            title: "Contributions",
            text: `I worked with the agile method ${technos.scrum.name} to adapt to changing client needs. Versioning and teamwork were managed with ${technos.gitlab.name}. The deployment of the app was done using ${technos.docker.name}.`,
            sections: [
                {
                    title: "Homepage Map",
                    list: [
                        `Fetch of validated collections using a ${technos.graphql.name} query;`,
                        `Display on a world map using their coordinates (react-map-gl);`,
                        `Added clustering system depending on zoom level;`,
                        `Added interactive popups (Material UI) showing details of each collection (name, location, date, photo).`
                    ],
                    images: [{ path: "images/projects/BUT_S6/map.png", style: "max-height: 265px;" }]
                },
                {
                    title: "Filters",
                    list: [
                        `Added a “Filters” button opening a reusable popup (made with Material UI);`,
                        `Queries to get filter options from the database;`,
                        `Integrated filters into the URL to keep search state;`,
                        `Applied filters on client side with dynamic map updates.`
                    ]
                },
                {
                    title: "Dashboard",
                    list: [
                        `Writing and testing ${technos.graphql.name} queries using ${technos.hasura.name};`,
                        `Getting completed collections and applying URL filters on frontend;`,
                        `Sending filtered data to backend to generate stats;`,
                        `Integration of the dashboard using Material UI and a Materio template to show data dynamically.`
                    ],
                    images: [{ path: "images/projects/BUT_S6/dashboard.png", style: "max-height: 265px;" }]
                }
            ]
        },
        result: {
            title: "Result",
            text: "I really enjoyed this internship, mainly thanks to my coworkers who were helpful and patient whenever I needed support.\nYou can see my final presentation <a href='https://docs.google.com/presentation/d/1LiP-nK3gmnG1EadbeIMfyvVh-VUsXMA4EwR9I6H2e2o/edit?usp=sharing' target='_blank'>here</a>."
        },
        technologies: [technos.graphql, technos.hasura, technos.jira, technos.minio, technos.next_js, technos.react_js, technos.scrum, technos.ts]
    },
    BUT_S5: {
        title: "Reflex test application",
        category: categories.academic,
        introduction: {
            text: "This project, done in the third year of my Computer Science degree with four other students, was about creating a multi-architecture app to help scientists run reflex tests."
        },
        context: {
            title: "Context",
            text: "The architecture is based on several connected components:",
            list: [
                "A <strong>mobile app</strong> to capture and send images;",
                "An <strong>analysis server</strong> to process these images;",
                "A <strong>central server</strong> to store data from the analysis server and the <strong>microcontrollers</strong> in a <strong>database</strong>;",
                "A <strong>frontend</strong> to display results;",
                "An <strong>API</strong> to handle communication between the server, database, and frontend."
            ],
            images: [
                {
                    path: "images/projects/BUT_S5/structure.png",
                    legend: "Global project architecture",
                    style: "max-height: 250px;"
                }
            ]
        },
        implementation: {
            title: "Contributions",
            text: `We used ${technos.gitlab.name} and ${technos.trello.name} to manage versioning and plan tasks.`,
            sections: [
                {
                    title: "API and Frontend",
                    list: [
                        `Development of an API using "express" from ${technos.node_js.name} and connection to a ${technos.mongo.name} database;`,
                        `Setup of Swagger documentation and unit tests for API methods;`,
                        `Creation of a frontend connected to the API with dynamic charts using Vue chartjs;`,
                        `Deployment of the API with ${technos.docker.name}.`
                    ],
                    images: [{ path: "images/projects/BUT_S5/frontend.png", style: "max-height: 300px;" }]
                },
                {
                    title: "Analysis Server",
                    list: [
                        "Research of a library for image processing;",
                        "Redesign of the mobile app to match the chosen library;",
                        "Development and connection of the analysis server with the mobile app, including unit tests."
                    ]
                },
                {
                    title: "Microcontrollers",
                    list: [
                        "Configuration of the Arduino board with provided hardware;",
                        "Writing Arduino code for microcontroller behavior;",
                        "Manual testing;",
                        "Sending results to the central server."
                    ],
                    images: [
                        {
                            path: "images/projects/BUT_S5/microcontrollers.png",
                            legend: "Microcontroller diagram",
                            style: "max-height: 200px;"
                        }
                    ]
                }
            ]
        },
        result: {
            title: "Result",
            text: "The project led to a working app that can collect and analyze reflex test data and show results in a clear, interactive interface. This experience helped me improve my full-stack development, teamwork, and project management skills.\nYou can see our presentation <a href='https://docs.google.com/presentation/d/1ciTwJQT0wF97OlqsJSNzQmrdxO6tPPnuQ1vWaAyG5aA/edit#slide=id.g230ccc5832e_0_0' target='blank'>here</a> and our Git repository <a href='https://github.com/giuliana-fabrizio/TestsReflexes' target='blank'>here</a>."
        },
        technologies: [technos.arduino, technos.docker, technos.gitlab, technos.java, technos.js, technos.node_js, technos.kotlin, technos.mongo, technos.vue_js]
    },
    BUT_S4: {
        title: "Facturation tool",
        category: categories.professional,
        introduction: {
            text: "This three-month internship (April - June 2023) at Natural Solutions was about improving their billing tool: fixing bugs, improving existing features, and developing new ones."
        },
        implementation: {
            title: "Implementation",
            text: `I worked using the agile method ${technos.scrum.name} to follow client needs. Versioning and collaboration were done with ${technos.gitlab.name}.`,
            sections: [
                {
                    title: "Database",
                    list: [
                        "Creation of the Conceptual Data Model (CDM);",
                        `Use of the ${technos.postgresql.name} DBMS;`,
                        `Integration of ${technos.sequelize.name} ORM to simplify database interactions;`,
                        "Connection of the database with the API and app code updates;",
                        "Development of a function to import data from a JSON file."
                    ],
                    images: [
                        {
                            path: "images/projects/BUT_S4/MCD.png",
                            legend: "Application CDM",
                            style: "max-height: 275px;"
                        }
                    ]
                },
                {
                    title: "Document Generation",
                    list: [
                        "Requests to external API <strong>Zendesk</strong>;",
                        "Sorting and formatting of fetched data;",
                        "Automatic generation and download of files;",
                        "Creation of a Word template to structure report content."
                    ]
                }
            ]
        },
        result: {
            title: "Result",
            text: `Thanks to my kind and helpful colleagues, I learned a lot during this internship. I improved my project management skills with ${technos.scrum.name} and my ability to research and solve problems independently.\nYou can see my presentation <a href='https://docs.google.com/presentation/d/1uueQqS5IAyxeuxPOwv-2YE4rRnxuOs72wY5auPL-VPI/edit?usp=sharing' target='_blank'>here</a>.`
        },
        technologies: [technos.gitlab, technos.js, technos.node_js, technos.postgresql, technos.react_js, technos.sequelize, technos.scrum]
    },
    BUT_S1: {
        title: "Missing token game",
        category: categories.academic,
        introduction: {
            text: "This university project was about developing a small Java game on a triangular board with 21 squares, where players can compete against two AIs. To win, each player must place their 10 numbered tokens (1 to 10) to minimize the sum around the empty square at the end of the game."
        },
        implementation: {
            title: "Contributions",
            list: [
                "Design and display of the game board in the terminal;",
                "Development of the logic for a two-player match;",
                "Creation of two AI algorithms: a random one and an advanced one with key position strategy;",
                "Separation between stable code and test versions."
            ]
        },
        result: {
            title: "Result",
            text: "You can see the GitHub repository <a href='https://github.com/giuliana-fabrizio/SAE-Jeu-du-jeton-manquant' target='_blank'>here</a>.",
            images: [
                {
                    path: "images/projects/BUT_S1/game.png",
                    legend: "Simulation of a match between two AIs: victory of the advanced strategy",
                    style: "max-height: 400px; margin-top: 15px;"
                }
            ]
        },
        technologies: [technos.github, technos.java]
    }
}


/* ***************************************************************** degrees page ***************************************************************** */

const degrees_page_title = "MY ACADEMIC TRAINING";

const school_career = {
    title: `My background`,
    content: `After obtaining my scientific baccalaureate in 2020, I decided to take a gap year to reflect on my professional future. During this time, I did many researches.\n
    I have been very lucky to discover computer science. Its constantly evolving nature and the opportunity to contribute to major technological advances motivated me to enroll in a Computer Science Bachelor's program (BUT) in 2021. I quickly became passionate about this fiel, which gave me the desire to deepen my knowledge and further improve my skills. That is why I chose to continue my studies in an engineering scholl.`
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
    volunteer: {
        title: `Volunteer at Restos du Coeur`,
        description: `Main responsibilities :
        <ul>\
        <li>welcoming and guiding beneficiaries ;</li>\
        <li>distributing food according to each family's needs ;</li>\
        <li>helping with the cleaning and maintenance of the premises.</li>\
        </ul>`,
        logo: "images/experiences/restos_du_coeur.png",
        type: `Volunteering`,
        date: `Since September 2025`,
        company: `Les Restos du Coeur`,
        place: `Belfort, France`,
    },
    stage_2024: {
        title: `Fullstack Developer II`,
        description: `Main tasks carried out :
        <ul>\
        <li>inserted Excel data in a ${technos.postgresql.name} database ;</li>\
        <li>developed the main dashboard ;</li>\
        <li>use ${technos.hasura.name} to manage user permissions.</li>\
        </ul>`,
        label_redirection: `More details`,
        redirection: "BUT_S6",
        logo: "images/experiences/natural_solutions.png",
        type: `Internship`,
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
        redirection: "BUT_S4",
        logo: "images/experiences/natural_solutions.png",
        type: `Internship`,
        date: `April - June 2023`,
        company: `Natural Solutions`,
        place: `Marseille, France`,
    },
    cdd_2022: {
        title: `Convenience store employee`,
        description: `Main tasks carried out :
        <ul>\
        <li>handled customer checkout ;</li>\
        <li>stocked shelves and received deliveries ;</li>\
        <li>trained new employees at the cash register ;</li>\
        <li>baked bread.</li>\
        </ul>`,
        logo: "images/experiences/u_express.png",
        type: `Fixed-term contract`,
        date: `July - August 2022`,
        company: `U Express`,
        place: `Marseille, France`,
    }
}


/* ***************************************************************** hobbies page ***************************************************************** */

// TODO HOBBIES
const interests_page_title = "MY HOBBIES";

const interests = {
    1: {
        title: "Sports & Travel",
        description: "Since 2010, I have been practicing swimming. I first joined a club when I was a child, and now I swim occasionally. I also love exploring new places and enjoying their landscapes. I like hiking, which allows me to take on new challenges while discovering beautiful scenery.",
        legend: "Pictures taken during my hikes and/or trips",
        images: [carousel_1, carousel_2, carousel_3],
        support: "carousel"
    },
    2: {
        title: "Video games",
        description: "During my computer science degree in Belfort, some friends introduced me to video games. I am not a big gamer, but I mostly play Minecraft. What I like most about this game is the variety of mods, which make the experience new again by adding new worlds, characters, creatures, and materials.",
        legend: "3D model of my Minecraft skin. Use the mouse (or touch) to rotate the model.",
        support: "mc"
    },
    3: {
        title: "Sewing",
        description: "I discovered sewing at a young age thanks to my grandmother, who was a seamstress. I started by making clothes for my dolls and now I create useful everyday objects like protective covers for batteries, handbags, and pencil cases.",
        legend: "Protective cover for an external battery",
        // image: image_sewing,
        support: "img"
    },
    4: {
        title: "3D Modeling",
        description: "After talking with my mother about a home renovation project, I decided to try 3D modeling. That’s how I discovered the software Sweet Home 3D. With this tool, I first redesigned a room in our house, then recreated a studio where I once lived because I found it very aesthetic.",
        legend: "3D model of a studio made with Sweet Home 3D. Use the mouse (or touch) to zoom and rotate the model.",
        support: "modelling"
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
