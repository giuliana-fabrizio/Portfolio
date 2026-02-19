const carousel_1 = require("../public/images/interests/carousel-1.jpg");
const carousel_2 = require("../public/images/interests/carousel-2.png");
const carousel_3 = require("../public/images/interests/carousel-3.jpg");
// const image_sewing = require("../public/images/interests/sewing.png");


/* ***************************************************************** common ***************************************************************** */

const name = "Giuliana GODAIL-FABRIZIO";


/* ***************************************************************** nav bar ***************************************************************** */

const home_btn = "Home";
const academic_training_btn = "School training";
const experiences_btn = "Professional experiences";
const projects_btn = "Projects";
const interests_btn = "Hobbies";


/* ***************************************************************** home page ***************************************************************** */

const status = "Computer science student";
const current_situation = "Looking for a six-month internship";
const presentation = "AI 🤖 | Full-stack development ✨ | Eager to contribute to the future 🚀";
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
    personal: { name: "Personal", style: "background-color: var(--blue-0)" },
    professional: { name: "Professional", style: "background-color: var(--blue-2)" },
    academic: { name: "Academic", style: "background-color: var(--blue-3)" },
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
        image_bg: "images/projects/UTBM_IA41/card-background.png",
        introduction: `Development of the game Rasende Roboter (Ricochet Robots) incorporating two levels of artificial intelligence allowing to compete against a human player.`,
        implementation: {
            title: `Tasks completed`,
            sections: [
                {
                    title: `Game logic`,
                    list: [
                        `Configurable game settings : game board layout, number of rounds, AI difficulty ;`,
                        `Implementation of robot movement rules (continuous sliding until an obstacle is reached) ;`,
                        `Objective completion verification.`
                    ]
                }, {
                    title: `Artificial intelligence`,
                    list: [
                        // `Comparison of several algorithms (A*, Breath-First-Search, Dijkstra) ;`,
                        `Implementation of the A* algorithm ;`,
                        // `State modeling (robot position) ;`,
                        `Generation of successor states from a specific state and the resulting possible movements ;`,
                        `Creation of two difficulty levels (simple et advanced) via heuristic complexity ;`,
                        `Reconstruction and display of the optimal path found by AI.`
                    ],
                    images_style: `col-lg-6`,
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
        git: {
            link: `https://github.com/giuliana-fabrizio/RasendeRoboter`,
            label: `Github`
        },
        slides: {
            link: `https://docs.google.com/presentation/d/1E3sWxrTmw9e1jOlK5u4ZRtSWdAdViirMot2iRPzkQI8/edit?usp=sharing`,
            label: `Internship defense`
        },
        technologies: [technos.github, technos.python]
    },
    UTBM_AP4B: {
        title: `Trio game`,
        category: categories.academic,
        image_bg: "images/projects/UTBM_AP4B/card-background.png",
        introduction: `Reproduction of the simple individual mode of the Trio card game.`,
        implementation: {
            title: `Tasks completed`,
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
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_AP4B/gameboard.png",
                            legend: `Gameboard`,
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
        git: {
            link: `https://github.com/giuliana-fabrizio/TrioGame`,
            label: `Github`
        },
        technologies: [technos.github, technos.java]
    },
    // UTBM_AP4A: {
    //     title: `BadgeAccess`,
    //     category: categories.academic,
    //     introduction: {
    //         text: `This academic project, carried out in the first year of engeneering studies, aimed to simulate an access control system using badges and readers.`
    //     },
    //     implementation: {
    //         title: `Tasks completed`,
    //         text: ``,
    //         sections: [
    //             {
    //                 title: `Project architecture`,
    //                 list: [
    //                     `UML diagram to model classes and relations ;`,
    //                     `Organization in separate modules (headers / sources).`,
    //                 ],
    //                 images_style: `col-12`,
    //                 images: [
    //                     {
    //                         path: "images/projects/UTBM_AP4A/class-diagram.png",
    //                         style: `max-height: 360px;`,
    //                     }
    //                 ]
    //             }, {
    //                 title: `Object-oriented programming`,
    //                 text: `This project helped me practice several basic concepts of object-oriented programming.`,
    //                 list: [
    //                     `Use of the Coplien canonical form ;`,
    //                     `Inheritance and use of abstract classes ;`,
    //                     `Polymorphism (method overriding and overloading) ;`,
    //                     `Operator overloading (for example, assignment operator).`,
    //                 ]
    //             }, {
    //                 title: `Available features`,
    //                 list: [
    //                     `Access rules based on the type of person ;`,
    //                     `Access simulation with valid or expired badges ;`,
    //                     `Initial configuration loaded from a CSV file ;`,
    //                     `Output redirection (console or log file) ;`,
    //                     `Automatic log timestamping.`,
    //                 ],
    //                 images_style: `col-lg-6`,
    //                 images: [
    //                     {
    //                         path: "images/projects/UTBM_AP4A/csv-config.png",
    //                         legend: `Example of CSV configuration`,
    //                     }
    //                 ]
    //             },
    //         ]
    //     },
    //     result: {
    //         title: `Result`,
    //         text: `The project gave a fully functionnal application, according to the teacher's requirements. The simulator can process access requests while checking different parameters such as the reader's rights or the badge validity.\
    //         You can consult my ${technos.github.name} repository <a href='https://github.com/giuliana-fabrizio/BadgeAccess' target='_blank'>here</a>.`
    //     },
    //     technologies: [technos.cpp, technos.github]
    // },
    UTBM_WE4A: {
        title: `Moodle`,
        category: categories.academic,
        image_bg: "images/projects/UTBM_WE4A/card-background.png",
        introduction: `Development of the Moodle educational platform with authentication and file upload.`,
        implementation: {
            title: `Contributions`,
            text: ``,
            sections: [
                {
                    title: `Database`,
                    list: [
                        `Design of the CDM (Conceptual Data Model) ;`,
                        `Creating Symfony fixtures to create classes and insert test data into them ;`,
                        `Connecting the database to the Symfony application ;`,
                        `Using Doctrine ORM to manage classes and associations.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_WE4A/mcd.png",
                            legend: `Application's CDM`,
                            style: `max-height: 225px;`
                        }
                    ]
                }, {
                    title: `Security`,
                    list: [
                        `Implementation of the connection and disconnection system ;`,
                        `Access and permission management according to user roles.`,
                    ]
                }, {
                    title: `Other features`,
                    list: [
                        `Writing Ajax requests to make the application more dynamic ;`,
                        `Added the possibility to upload and download files ;`,
                        `Implementation of multiple user interfaces with CRUD operations.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/UTBM_WE4A/details-ue.png",
                            legend: `Details of a teaching unit`,
                            style: `max-height: 250px;`
                        }
                    ]
                }
            ]
        },
        technologies: [technos.github, technos.php, technos.postgresql, technos.sql, technos.symfony]
    },
    UTBM_SY43: {
        title: `Imperial Roar`,
        category: categories.academic,
        image_bg: "images/projects/UTBM_SY43/card-background.png",
        introduction: `Mobile e-commerce application for perfumes with ${technos.firebase.name} authentication, ${technos.stripe.name} payment and administrator dashboard.`,
        implementation: {
            title: `Tasks completed`,
            sections: [
                {
                    title: `${technos.firebase.name} authentication`,
                    list: [
                        `Configuring a dedicated ${technos.firebase.name} project ;`,
                        `Integration of the ${technos.firebase.name} library and connection between the application and the project ;`,
                        `Implementation of the authentication system ;`,
                        `Added account creation functionality ;`,
                        `Password reset implementation.`
                    ],
                    images_style: `col-lg-6`,
                    // images: [
                    //     {
                    //         path: "images/projects/UTBM_SY43/login.jpg",
                    //         style: `max-height: 300px;`
                    //     }, {
                    //         path: "images/projects/UTBM_SY43/forgot-password.jpg",
                    //         style: `max-height: 300px;`
                    //     }, {
                    //         path: "images/projects/UTBM_SY43/create-account.jpg",
                    //         style: `max-height: 300px;`
                    //     }
                    // ]
                }, {
                    title: `Dashboard`,
                    list: [
                        `Defining the key data to be represented and the visualization method ;`,
                        `Writing queries to query the database and visualizing the results in the form of graphs ;`,
                        `Added an option to filter the display by year.`,
                    ],
                    images_style: `col-lg-6`,
                    // images: [
                    //     {
                    //         path: "images/projects/UTBM_SY43/dashboard.jpg",
                    //         style: `max-height: 300px;`
                    //     }, {
                    //         path: "images/projects/UTBM_SY43/dashboard_2.jpg",
                    //         style: `max-height: 300px;`
                    //     }
                    // ]
                }, {
                    title: `Payment system`,
                    list: [
                        `Implementation of a ${technos.stripe.name} server ;`,
                        `Transmission of the price to be paid to the server ;`,
                        `Server hosting via ${technos.firebase.name}.`,
                    ],
                    images_style: `col-lg-6`,
                    // images: [
                    //     {
                    //         path: "images/projects/UTBM_SY43/stripe.jpg",
                    //         style: `max-height: 300px;`
                    //     }
                    // ]
                }
            ],
        },
        git: {
            link: `https://github.com/giuliana-fabrizio/Imperial-Roar`,
            label: `Github`
        },
        technologies: [technos.firebase, technos.github, technos.kotlin, technos.sql, technos.stripe]
    },
    BUT_S6: {
        title: `Depollution Map`,
        category: categories.professional,
        image_bg: "images/projects/BUT_S6/card-background.png",
        introduction: `Waste collection application, developed during a three-month internship (January - March 2024) at Natural Solutions.`,
        implementation: {
            title: `Tasks completed`,
            text: `Using the agile methodology ${technos.scrum.name} to meet evolving customer needs. Application deployment performed using ${technos.docker.name}.`,
            sections: [
                {
                    title: `Homepage map`,
                    list: [
                        `Extracting validated collections via a ${technos.graphql.name} query ;`,
                        `Display on a world map using their coordinates ;`,
                        `Implementation of a clustering system based on zoom level ;`,
                        `Added interactive popups displaying the details of each collection.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S6/map.png",
                            legend: `World map showing the localisation of collections`,
                            style: `max-height: 265px;`
                        }
                    ]
                }, {
                    title: `Filters`,
                    list: [
                        `Queries to retrieve filtering options from the database ;`,
                        `Integrating filters into the URL to preserve search state ;`,
                        `Client-side application of filters to data in memory, with dynamic updating of the results displayed on the map.`,
                    ]
                }, {
                    title: `Dashboard`,
                    list: [
                        `Writing and query ${technos.graphql.name} test via ${technos.hasura.name} ;`,
                        `Retrieving completed collections using filters defined in the URL ;`,
                        `Generating statistics from filtered data ;`,
                        `Dashboard integration with dynamic data display.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S6/dashboard.png",
                            legend: `Statistics generated for completed collections`,
                            style: `max-height: 265px;`
                        }
                    ]
                }
            ],
        },
        slides: {
            link: `https://docs.google.com/presentation/d/1LiP-nK3gmnG1EadbeIMfyvVh-VUsXMA4EwR9I6H2e2o/edit?usp=sharing`,
            label: `Internship defense`
        },
        technologies: [technos.graphql, technos.hasura, technos.jira, technos.minio, technos.next_js, technos.react_js, technos.scrum, technos.ts]
    },
    BUT_S5: {
        title: `Reflex tests`,
        category: categories.academic,
        image_bg: "images/projects/BUT_S5/card-background.png",
        introduction: `Multi-architecture application evaluating reaction time through various tests.`,
        context: {
            title: `Contexte`,
            text: `The acrhitecture is based on several complementary components :`,
            list: [
                `a <span style='color: #d4d6ff'><strong>mobile application</strong></span> to take and send images ;`,
                `a <span style='color: #e7dec7'><strong>analysis server</strong></span> to process these images ;`,
                `a <span style='color: #c5dcf1'><strong>central server</strong></span> to store data from the analysis server\
                and <span style='color: #fdd9ff'><strong>microcontrollers</strong></span> in a <span style='color: #fce5cd'><strong>database</strong></span> ;`,
                `a <span style='color: #f8e0e0'><strong>frontend</strong></span> to visualize the results ;`,
                `an <span style='color: #d9ead3'><strong>API</strong></span> to ensure communication between server, database and frontend.`,
            ],
            images_style: `col-lg-6`,
            images: [
                {
                    path: "images/projects/BUT_S5/structure.png",
                    legend: `Overall project architecture`,
                    style: 'max-height: 250px;'
                }
            ]
        },
        implementation: {
            title: `Tasks completed`,
            text: `Tasks planning ensured via ${technos.trello.name}.`,
            sections: [
                {
                    title: `API and frontend`,
                    list: [
                        `Developing an API using ${technos.node_js.name} and connecting to a database ${technos.mongo.name} ;`,
                        `Implementation of Swagger Documentation and unit tests to validate the API methods ;`,
                        `Creation of a frontend connected to the API with display of statistics ;`,
                        `API deployement with ${technos.docker.name}.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S5/frontend.png",
                            legend: `Displaying statistics in dashboard format`,
                            style: `max-height: 300px;`
                        }
                    ]
                }, {
                    title: `Analysis server`,
                    list: [
                        `Looking for a suitable image processing library ;`,
                        `Redesign of the mobile application to adapt to the constraints of the chosen library ;`,
                        `Development and connection of the analysis server with mobile application, accompanied by unit tests.`,
                    ]
                }, {
                    title: `Microcontrollers`,
                    list: [
                        `Configuring the ${technos.arduino.name} board using the provided microcontrollers ;`,
                        `Writing the code ${technos.arduino.name} to make the microcontrollers work ;`,
                        `Performing manual tests ;`,
                        `Sending the results to the central server.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S5/microcontrollers.png",
                            legend: `Diagram of microcontrollers`,
                            style: `max-height: 200px;`
                        }
                    ]
                }
            ],
        },
        git: {
            link: `https://github.com/giuliana-fabrizio/TestsReflexes`,
            label: `Github`
        },
        slides: {
            link: `https://docs.google.com/presentation/d/1ciTwJQT0wF97OlqsJSNzQmrdxO6tPPnuQ1vWaAyG5aA/edit#slide=id.g230ccc5832e_0_0`,
            label: `Internship defense`
        },
        technologies: [technos.arduino, technos.docker, technos.gitlab, technos.java, technos.js, technos.node_js, technos.kotlin, technos.mongo, technos.vue_js]
    },
    BUT_S4: {
        title: `Billing tool`,
        category: categories.professional,
        image_bg: "images/projects/BUT_S4/card-background.png",
        introduction: `Redesign a billing tool as part of a three-month internship (April - June 2023), carried out at Natural Solutions.`,
        implementation: {
            title: `Tasks completed`,
            sections: [
                {
                    title: `Database`,
                    list: [
                        `Design of the CDM (Conceptual Data Model) ;`,
                        `Redesign of the application to integrate the database ;`,
                        `Using ${technos.sequelize.name} ORM to simplify interactions with database ;`,
                        `Development of a script to import JSON data into the database.`,
                    ],
                    images_style: `col-lg-6`,
                    images: [
                        {
                            path: "images/projects/BUT_S4/MCD.png",
                            legend: `MCD de l'application`,
                            style: `max-height: 275px;`
                        }
                    ]
                }, {
                    title: `Document generation`,
                    list: [
                        `Interrogation of the external <strong>Zenddesk</strong> API ;`,
                        `Sorting and formatting the retrieved data ;`,
                        `Development of automatic file generation and downloading ;`,
                        `Creating a Word template to structure and organize report content.`,
                    ]
                }
            ]
        },
        slides: {
            link: `https://docs.google.com/presentation/d/1uueQqS5IAyxeuxPOwv-2YE4rRnxuOs72wY5auPL-VPI/edit?usp=sharing`,
            label: `Internship defense`
        },
        technologies: [technos.gitlab, technos.js, technos.node_js, technos.postgresql, technos.react_js, technos.sequelize, technos.scrum]
    }
};


/* ***************************************************************** degrees page ***************************************************************** */

const degrees_page_title = "MY ACADEMIC TRAINING";

const school_career = `After obtaining a scientific high school diploma, I took a gap year which I discovered computer science whose constantly evolving nature and diversity motivated me to pursue in this field.`;

const degrees_title = `My degrees`;

const degrees = {
    engineer: {
        title: `Computer engineering`,
        img: "images/degrees/bac+5.png",
        description: `Specialization in AI and Big Data`,
        school: `UTBM - University of Technology of Belfort-Montbéliard (UTBM)`,
        place: `Belfort, France`,
        date: `Current`,
        style: `padding-top: 14%;`
    },
    but: {
        title: `Bachelor of Technology in Computer Science`,
        img: "images/degrees/bac+3.png",
        description: `Specialization in full stack developement ~ valedictorian`,
        school: `Belfort-Montbéliard IUT`,
        place: `Belfort, France`,
        date: `2024`,
        style: `padding-top: 20%;`
    },
    bac: {
        title: `High School Diploma`,
        img: "images/degrees/bac.png",
        description: `Focused on the main scientific subjects (mathematics, physics, life and earth sciences)`,
        school: `Lycée Périer`,
        place: `Marseille, France`,
        date: `2020`,
        style: `padding-top: 21%;`
    },
}

const certifications_title = `My certifications`;

const certifications = {
    mooc_management: {
        title: `Project management`,
        logo: "images/degrees/mooc_gdp.png",
        description: `14 certifications obtained`,
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
        date: `2024`,
    }
}


/* ***************************************************************** experiences page ***************************************************************** */

const experiences_page_title = "MY EXPERIENCES";
const experiences = {
    volunteer: {
        title: `Volunteer at Restos du Coeur`,
        description: `Welcoming and orientation of beneficiaries,\
        food distribution adapted to the needs of families,\
        participation in cleaning the premises.`,
        logo: "images/experiences/restos_du_coeur.png",
        date: `Since September 2025`,
        company: `Les Restos du Coeur`,
        place: `Belfort, France`,
    },
    stage_2024: {
        title: `Full-stack developer intern II`,
        label_redirection: "See the topic",
        redirection: "BUT_S6",
        logo: "images/experiences/natural_solutions.png",
        date: `January - April 2024`,
        company: `Natural Solutions`,
        place: `Marseille, France`,
    },
    stage_2023: {
        title: `Full-stack developer intern I`,
        label_redirection: "See the topic",
        redirection: "BUT_S4",
        logo: "images/experiences/natural_solutions.png",
        date: `April - June 2023`,
        company: `Natural Solutions`,
        place: `Marseille, France`,
    },
    cdd_2022: {
        title: `Supermarket employee`,
        description: `Collecting customer payments,\
        stocking shelves and receiving goods,\
        training of new cashiers,\
        baking bread.`,
        logo: "images/experiences/u_express.png",
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
        title: `Sports activities & travels`,
        description: `I have been swimming since 2010 (former club member).\
        I also enjoy discovering new places and landscapes, which is why I regularly go hiking and travelling.`,
        legend: 'Images taken during my hikes and/or trips',
        images: [carousel_1, carousel_2, carousel_3],
        support: `carousel`
    },
    2: {
        title: `Video games`,
        description: `I discovered video games during my Computer Science degree in Belfort. I often play Menicraft, a universe that\
        I appreciate for the diversity of its mods, which allow you to explore new worlds and renew the experience.`,
        legend: `Modélisation 3D de mon skin Minecraft. Utilisez la souris (ou le tactile) pour faire pivoter le modèle.`,
        support: `mc`
    },
    3: {
        title: `Sewing`,
        description: `Introduced to sewing in my childhood by my gandmother, a former seamstress, I developed creativity and meticulousness\
        through personal projects. Today, I design useful everyday items (bags, pouches, protective covers)`,
        legend: `Protective cover for external battery`,
        // image: image_sewing,
        support: `img`
    },
    4: {
        title: `3D modeling`,
        description: `Motivated by a renovation project, I learned 3D modeling with Sweet Home 3D. I designed various interior layouts,\
        including the reconfiguration of a room and the reproduction of a studio, combining technical precision and aesthetic sense.`,
        legend: `3D model of a studio apartment created with Sweet Home 3D. Use your mouse (or touchscreen) to zoom and rotate the model`,
        support: `modelling`
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
    current_situation: current_situation,
    presentation: presentation,
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
