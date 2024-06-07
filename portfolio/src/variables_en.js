// const sae_s1_05_slide_accueil = require("../files/sae_s1_05/slide_accueil.png");
const sae_s1_04_profil_habitant = require("../files/sae_s1_04/profil_habitant.png");
const sae_101_102_partie_de_jeu = require("../files/sae_101_102/partie_de_jeu.png");
const sae_s2_04_visualisation_stock_admin = require("../files/sae_s2_04/visualisation_stock_admin.png");
const sae_s2_04_visualisation_stock_details = require("../files/sae_s2_04/visualisation_stock_details.png");
const sae_s2_1_2_6_plateau_Kamisado = require("../files/sae_s2_1_2_6/img_plateauKamisado.png");
const sae_s3_mcd = require("../files/sae_s3/MCD.png");
const sae_s4_mcd = require("../files/sae_stage_s4/MCD.png");
const sae_s4_principe_selection_apres = require("../files/sae_stage_s4/principe_selection_apres.png");
const archi_sae = require("../files/sae_s5/archi_sae.png");
// const sae_s6_rapport_general = require("../files/sae_s6/Rapport_General_GODAIL-FABRIZIO.pdf");
// const sae_s6_rapport_technique = require("../files/sae_s6/Rapport_Technique_GODAIL-FABRIZIO.pdf");
const competence_1_dashboard = require("../files/competence_1/dashboard.png");
const competence_1_trello = require("../files/competence_1/trello_sae.png");
const competence_6_gitlab = require("../files/competence_6/gitlab.png");


/* ***************************************************************** common ***************************************************************** */

const name = "Giuliana GODAIL FABRIZIO";


/* ***************************************************************** nav bar ***************************************************************** */

const home_btn = "Home";
const projects_btn = "Projects";


/* ***************************************************************** home page ***************************************************************** */

const status = "Computer science student";

const about_me_title = "About me";
const about_me = "Currently in my final year of a Computer Science Technical Degree, I wish to continue my studies at engineering schools. I chose computer science because I enjoy designing and optimizing projects, finding solutions that meet users' needs.";
const my_projects = "View my projects";
const professional_experience_title = "Professional experiences";
const professional_experience = "In 2021, I completed a 2-month fixed-term contract as a convenience store employee. As part of my education, I also completed two 12-week internships. These experiences allowed me to discover teamwork, where I could learn from others while sharing my own knowledge.";
const hobbies_title = "Hobbies";
const hobbies = "In my free time, I engage in some physical activity like jogging. I also develop personal projects. I am very fond of sewing; for example, I have made pouches to store my pens and some other gadgets.";
const download_cv = "Download my CV";


/* ***************************************************************** footer ***************************************************************** */

const link_cv = "https://raw.githubusercontent.com/giuliana-fabrizio/Portfolio/253247d87ed0a8fd4a434af54c122fb21aaeedb5/portfolio/files/Curriculum_vitae_Giuliana_GODAIL-FABRIZIO.pdf";
const mail = "mailto:godailfabriziogiuliana@gmail.com";
const github = "https://github.com/giuliana-fabrizio";
const linkedin = "https://www.linkedin.com/in/giuliana-godail-fabrizio-20639525b/";


/* ***************************************************************** projects page ***************************************************************** */

const projects_page_title = "My projects";

const more_projects = "See projects";

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
    { name: "Google Slides", class: "bg-light text-dark" },

    // Framework
    { name: "JavaFX", class: "bg-secondary" },
];

const experiences = {
    university_experience: {
        title: "Projects completed in computer science technical degree",
        years: {
            2022: {
                category: "First year projects",
                summary: "During my first year, I worked on group projects supervised by professors (SAÉ). Each SAÉ focuses on one or more skills from the year's curriculum. Over the academic year, we completed 10 SAÉs.",
                projects: {
                    sae_s1_05: {
                        title: "SAE S1 05",
                        category: "University",
                        instructions: {
                            title: "Instructions",
                            text: "This SAÉ was the first we had to complete.\n\nThe goal was to make a <span style='color:green;'><strong>presentation</strong></span> in a group on a surprising topic (not specifically related to computer science). The problem our group had to address was <span style='color:red;'><strong>\"How would you present your course to your former high school?\"</strong></span>.\n\nSpecifically, we had to describe the scenario (client needs, organization to meet client expectations) using the questions and answers exchanged with the professors (acting as the client), and our group work to complete this SAÉ."
                        },
                        organization_of_work: {
                            title: "Group work organization",
                            text: "For this SAÉ, we were not very well organized in my opinion.\nWe divided tasks quite late, which did not allow us to deliver very good work.\n\nThus, we divided the tasks as follows:<ul><li>creating a <span style='color:blue;'><strong>Gantt chart</strong></span> (describing our organization for completing this SAÉ);</li><li>the presentation slideshow;</li><li>the text.</li></ul>"
                        },
                        implementation: {
                            title: "My actions in the group",
                            text: "I was responsible for creating the Gantt chart and part of the text accompanying the slideshow for the presentation."
                        },
                        personal_enrichment: {
                            title: "Personal enrichment",
                            text: "This SAÉ allowed me to get closer to my classmates by working with some of them on this project and presenting it orally in front of the others."
                        },
                        skills_worked: {
                            title: "Skills developed",
                            text: "Among the skills in the first semester curriculum of the technical degree, I believe I worked on skill 5, which involves <span style='color:red;'><strong>project management</strong></span>.\nThis SAÉ was more complicated to complete than we thought, mainly because we neglected project management at the start."
                        },
                        analysis: {
                            title: "Reflective analysis",
                            text: "I think to better succeed in this SAÉ, we need to be more motivated even if the topic is not very appealing. Also, as mentioned earlier, we need to communicate better with each other and organize ourselves properly.\nFor the aesthetic aspect of our slideshow, it would have been interesting to use a canvas."
                        },
                        technologies: [technologies[25], technologies[26]]
                    },
                    sae_s1_06: {
                        title: "SAE S1 06",
                        category: "University",
                        instructions: {
                            title: "Instructions",
                            text: "This SAÉ involved <span style='color:green;'><strong>creating a website</strong></span> about a French IT company.\n\nAdditionally, we had to create an <span style='color:green;'><strong>analytical report</strong></span> on the chosen company and a Gantt chart or Pert network to plan the tasks we needed to complete."
                        },
                        organization_of_work: {
                            title: "Group work organization",
                            text: "My group consisted of <span style='color:blue;'><strong>4 students</strong></span>.\n\nRegarding the economic report, we divided the different parts (company presentation, economic aspect, environmental aspect).\n\nFor the website, we first agreed on the <span style='color:red;'><strong>graphic charter</strong></span> to ensure a consistent style for each page. We then decided who would create which page."
                        },
                        implementation: {
                            title: "My actions in the group",
                            text: "My part of the report (economic aspect) involved researching and analyzing:\n<ul><li>the partnerships and competitors of Capgemini, the company we chose</li><li>the company's revenue and other financial aspects.</li></ul>For the website, I participated in creating the graphic charter.\n\nRegarding the website development, I worked on the menu, the sub-homepage, the contact form, the download button, and making the site responsive."
                        },
                        result: {
                            title: "SAÉ Result",
                            text: `The code and the report for this SAÉ are available <a href="https://mbeaudru-iut90.github.io/SAE_06_Capgemini/Projet/site_web.html" target="_blank">here</a>.`,
                            file: "" // TODO
                        },
                        personal_enrichment: {
                            title: "Personal enrichment",
                            text: "Among the things I learned during this SAÉ were working in a team and organizing accordingly.\n\nAdditionally, having little knowledge of web development and <span style='color:blue;'><strong>CSS</strong></span> (website styling) at the time, I had to do a lot of research, which allowed me to learn many technical things.\n\nRegarding the economic report, I discovered that a company's economy is much more complex than just revenue (as I previously thought)."
                        },
                        skills_worked: {
                            title: "Skills developed",
                            text: "Regarding the skills in the Computer Science Technical Degree curriculum, I believe I worked on:\n<ul><li><span style='color:black;'><strong>skill 1</strong></span> related to creating an application (implementing and designing simple concepts, testing);</li><li><span style='color:black;'><strong>skill 5</strong></span> which involves managing a project (understanding client and user needs, setting up project management tools...);</li><li><span style='color:black;'><strong>skill 6</strong></span> about working in an IT team (discovering the required skills in various sectors...).</li></ul>"
                        },
                        analysis: {
                            title: "Reflective analysis",
                            text: "To be more productive and less overwhelmed by the workload (this SAÉ was done in parallel with another), I need to better identify the tasks to be done to organize according to the workload.\n\nI also need to invest more in tasks that do not motivate me."
                        },
                        technologies: [technologies[2], technologies[1], technologies[0], technologies[7]]
                    },
                    sae_s1_03: {
                        title: "SAE S1 03",
                        category: "University",
                        instructions: {
                            title: "Instructions",
                            text: "The objective of this SAÉ was to install and configure a virtual machine (VM) according to a given specification.\n\nWe had to deliver 3 outputs:\n<ul><li>a <span style='color:blue'><strong>study and solution choice report</strong></span> (containing the client's request, description of proposed hardware architectures, description of proposed software architectures);</li><li>a <span style='color:red'><strong>software architecture diagram / user manual</strong></span> (containing installation steps for the virtual machine + the complete virtual machine);</li><li>a <span style='color:green'><strong>oral presentation</strong></span>.</li></ul>\nFor this, my group consisted of 4 people."
                        },
                        organization_of_work: {
                            title: "Group work organization",
                            text: "My group and I divided the different parts of the first report.\n\nThe VM was created by two group members as the other two worked on SAÉ S1.04, which was done concurrently and is available in this portfolio. The report containing the installation steps was written by those two members and reviewed in its entirety by the whole group."
                        },
                        implementation: {
                            title: "My actions in the group",
                            text: "For the first report, I worked on determining and describing the different software to be installed. I documented myself on several sites, which allowed me to learn a lot.\n\nI did not personally participate in the installation and configuration of the VM."
                        },
                        result: {
                            title: "SAÉ Result",
                            file: "" // TODO
                        },
                        personal_enrichment: {
                            title: "Personal enrichment",
                            text: ""
                        },
                        skills_worked: {
                            title: "Skills developed",
                            text: "This SAÉ allowed me to work on the following skills:\n<ul><li><span style='color:black;'><strong>skill 3</strong></span> which involves managing complex communicating IT systems, i.e., identifying the different software components of a system, installing and configuring an operating system and development tools;</li><li><span style='color:black;'><strong>skill 5</strong></span> related to managing a project (understanding client and user needs);</li><li><span style='color:black;'><strong>skill 6</strong></span> concerning working in an IT team (discovering the required skills in various sectors...).</li></ul>"
                        },
                        analysis: {
                            title: "Reflective analysis",
                            text: "I think we organized ourselves well for this SAÉ, and our strategy to divide the SAÉs was a good idea, but I regret not participating in the VM."
                        },
                        technologies: [technologies[13]]
                    },
                    sae_s1_04: {
                        title: "SAE S1 04",
                        category: "University",
                        instructions: {
                            title: "Instructions",
                            text: "For this SAÉ, we had to create an ERD, a report, and an application for the residents of a small town.\n\nThe <span style='color:red;'><strong>ERD (Entity-Relationship Diagram)</strong></span> is a kind of representation of the data used by the information system.\n\nThe <span style='color:green;'><strong>report</strong></span> had to justify our choices made when creating the ERD.\n\nThe goal of the <span style='color:blue;'><strong>application</strong></span> was for the town residents to use it to book or offer trips between their town hall and another place and vice versa.\n\nOur mission was to allow adding, editing, or deleting a trip, a vehicle, a booking (except editing), and a resident, for whom we also had to create a profile."
                        },
                        organization_of_work: {
                            title: "Group work organization",
                            text: "It was mandatory for each group member (4 people) to be responsible for a page (either resident, vehicle, etc). Each member chose the page they wanted to work on and did it.\n\nRegarding the report, those who created the ERD wrote it."
                        },
                        implementation: {
                            title: "My actions in the group",
                            text: "I was responsible for part of the SQL script and the resident section.\n\nFor this, I had to ensure adding a new resident, editing (changing the name, for example), deleting, and showing the profile (see photo below).",
                            images: [
                                {
                                    path: sae_s1_04_profil_habitant,
                                    legend: "Legend: Resident Profile"
                                }
                            ]
                        },
                        result: {
                            title: "SAÉ Result",
                            file: "" // TODO
                        },
                        personal_enrichment: {
                            title: "Personal enrichment",
                            text: "Before doing this SAÉ, we had already done a similar small personal project. Although we had already seen how to do certain things, going over them again allowed me to <span style='color:blue;'><strong>understand the concepts</strong></span> I had trouble with the first time and better remember the technique for those I had already understood.\n\nAdditionally, this SAÉ helped me adapt to <span style='color:red;'><strong>working in a team</strong></span>."
                        },
                        skills_worked: {
                            title: "Skills developed",
                            text: "Regarding the skills related to this SAÉ, I believe I developed the following:\n<ul><li><span style='color:black;'><strong>skill 1</strong></span> which refers to creating an application (implementing and designing simple concepts, testing, developing user interfaces...);</li><li><span style='color:black;'><strong>skill 4</strong></span> mainly concerning the design and management of company data and making this information available;</li><li><span style='color:black;'><strong>skills 5 and 6</strong></span>, one involves managing a project (understanding client and user needs, setting up project management tools...), the other working in an IT team (discovering the required skills in various sectors...).</li></ul>"
                        },
                        analysis: {
                            title: "Reflective analysis",
                            text: "To be quicker and more efficient in the future, I need to practice more with this type of exercise, whether it's creating ERDs or building a website.\n\nRegarding teamwork, I need to stop wanting to control everything and adapt to the pace of others."
                        },
                        technologies: [technologies[17], technologies[21], technologies[6]]
                    },
                    sae_101_102: {
                        title: "SAE 101-102",
                        category: "University",
                        instructions: {
                            title: "Instructions",
                            text: "SAÉ 101 involved designing a <span style='color:red;'><strong>mini-game in Java</strong></span>.\n\nThe goal was to create a triangular game board with 21 cells in total. In this game, there are 2 players, each with 10 tokens numbered 1 to 10. <em>(see image attached)<em>. At the end of the game, there is naturally one empty cell left, and to win, the sum of the token numbers around this empty cell must be lower than the sum of the opponent's tokens.\n\nSAÉ 102 involved taking the previously designed game and creating <span style='color:blue;'><strong>two Artificial Intelligences</strong></span> (AIs) capable of playing against a player according to the answer to the question \"Play alone?\" provided in the terminal. The strategy of the first AI had to be less advanced than the second.\n\nIn an <span style='color:green;'><strong>English report</strong></span>, we had to compare the two AIs (execution time for a turn, number of loops traversed...)."
                        },
                        organization_of_work: {
                            title: "Group work organization",
                            text: "For this SAÉ, we were divided into pairs. To complete the game and the AIs, we had a little over a month (from December 2 to January 7).\n\nTo be as efficient and quick as possible, we decided to divide the work to address our weaknesses. Thus, I was responsible for the <span style='color:blue;'><strong>coding part</strong></span>, while my partner wrote the report in English."
                        },
                        implementation: {
                            title: "My actions in the group",
                            text: "As I was responsible for the code, I divided my part into several stages.\n\nFirst, I had to create <span style='color:red;'><strong>algorithms</strong></span> (a preliminary step to implementing code). For this, I created a test file where I implemented my algorithms to test them. This allowed me to have a working version of the code and another to either complete missing functions or improve existing methods.\n\nThen, once the implementation was complete, I created <span style='color:green;'><strong>test traces</strong></span> of the code (demonstrating a game and putting the result and the numbers of the played cells in a txt file).\n\nFor the AIs, I <span style='color:green;'><strong>imagined several strategies</strong></span> that I implemented and tested with various people to identify and address their flaws."
                        },
                        result: {
                            title: "SAÉ Result",
                            text: `In this screenshot, you can see the result of a game between the two AIs. The one that wins (blue) had a more advanced strategy than the other AI. <a href="https://github.com/giuliana-fabrizio/SAE-Jeu-du-jeton-manquant" target="_blank">Here</a> is the GitHub repository for this game.`,
                            images: [
                                {
                                    path: sae_101_102_partie_de_jeu,
                                    legend: "Game board"
                                }
                            ]
                        },
                        personal_enrichment: {
                            title: "Personal enrichment",
                            text: "I really enjoyed this SAÉ partly because I found it challenging and it forced me to step out of my comfort zone:\n<ul><li>it significantly improved my algorithmic skills;</li><li>I realized that writing code doesn't just mean typing lines in a text editor, but also thinking about optimizing it to reduce the necessary resources during execution;</li><li>I also learned how to organize in a small team.</li></ul>"
                        },
                        skills_worked: {
                            title: "Skills developed",
                            text: "Regarding the skills in the Computer Science Technical Degree curriculum, I believe I worked well on:<ul><li><span style='color:black;'><strong>skill 1</strong></span> related to <span style='color:black;'><strong>application development</strong></span> (implementing and designing simple concepts, testing, developing user interfaces);</li><li><span style='color:black;'><strong>skill 2</strong></span> involving <span style='color:black;'><strong>optimizing applications</strong></span> (analyzing a problem with a precise method, experimenting with the notion of compilation, formalizing and using mathematical tools);</li><li><span style='color:black;'><strong>skill 5</strong></span> related to <span style='color:black;'><strong>project management</strong></span> (understanding client and user needs, setting up project management tools, identifying different phases of a development cycle).</li></ul>"
                        },
                        analysis: {
                            title: "Reflective analysis",
                            text: "To be more effective in the future, I need to work more on algorithms to develop reflexes and focus more on optimizing my code.\n\nAdditionally, my English is average, so I need to improve it to avoid it becoming a disadvantage."
                        },
                        technologies: [technologies[7], technologies[19]]
                    },
                    sae_s2_04: {
                        title: "SAE S2 04",
                        category: "University",
                        instructions: {
                            title: "Instructions",
                            text: "For this SAÉ, we needed:<ul><li>a <span style='color:blue;'><strong>report</strong></span> containing an ERD (Entity-Relationship Diagram), an RMD (Relational Model Diagram), and justification of our choices regarding SQL table relationships;</li><li>the <span style='color:red;'><strong>creation of a sales website</strong></span> based on a source code with features such as:<ul><li>a wishlist (cart);</li><li>the ability for an employee to view and update customer orders;</li><li>the ability for the customer to filter the items for sale.</li></ul><li>a <span style='color:green;'><strong>oral presentation in English</strong></span> to discuss the project's progress, available features on the site, data visualization, and our personal, professional, and educational experiences.</li></ul>"
                        },
                        organization_of_work: {
                            title: "Group work organization",
                            text: "For the sales website (furniture for our group), we decided to divide the mandatory parts:<ul><li><strong>back office:</strong></li><ul><li>viewing furniture</li><li>viewing furniture types</li><li>viewing and updating orders</li><li>viewing a summary table for each furniture type (total cost, available stock)</li></ul><li><strong>front office:</strong></li><ul><li>viewing and managing the cart (wishlist)</li><li>validating the cart to generate an order</li><li>filters</li><li>viewing orders and their status</li><li>viewing furniture.</li></ul></ul>Regarding the English presentation, we made the slideshow together and divided the slides to present on the day."
                        },
                        implementation: {
                            title: "My actions in the group",
                            text: "For the website, I had to:<ul><li>create a customer account (registration)</li><li>back office<ul><li>update an order's status (validated, shipped...)</li><li>view order details</li><li>add/edit/delete furniture and furniture types</li></ul></li><li>front office<ul><li>view and manage the cart (wishlist)</li><li>validate the cart to generate an order</li><li>filter the items for sale.</li></ul></li></ul>\nMy personal task was the <span style='color:blue;'><strong>stock management</strong></span>, specifically:<ul><li>the admin (back office) can view stock data (see images below)</li><li>the admin can see detailed stock information (color and material)</li><li>the customer (front office) can see the remaining stock for a given piece of furniture, in a specific color, for a specific material</li><li>when the customer adds/removes furniture to/from the cart, the stock updates accordingly</li></ul>\nFor the English presentation, I translated the slideshow. On the presentation day, I presented my part and did a quick demonstration of the website.",
                            images: [
                                {
                                    path: sae_s2_04_visualisation_stock_details,
                                    legend: "Legend: Detailed stock view"
                                }, {
                                    path: sae_s2_04_visualisation_stock_admin,
                                    legend: "Legend: Admin stock view"
                                }
                            ]
                        },
                        result: {
                            title: "SAÉ Result",
                            file: "" // TODO
                        },
                        personal_enrichment: {
                            title: "Personal enrichment",
                            text: "Before this SAÉ, we had already done 3 similar projects, so I didn't learn much new, but reviewing previously covered concepts was beneficial.\n\nAdditionally, I learned to create graphs in JavaScript and forced myself to adapt to teamwork."
                        },
                        skills_worked: {
                            title: "Skills developed",
                            text: "Regarding the skills related to this SAÉ, I believe I developed the following:\n<ul><li><span style='color:black;'><strong>skill 1</strong></span> related to creating an application (implementing and designing simple concepts, testing, developing user interfaces);</li><li><span style='color:black;'><strong>skill 2</strong></span> related to optimizing applications (analyzing a problem with a precise method, comparing algorithms for common problems, experimenting with the notion of compilation, formalizing and using mathematical tools);</li><li><span style='color:black;'><strong>skill 4</strong></span> mainly concerning the design and management of company data and making this information available;</li><li><span style='color:black;'><strong>skills 5 and 6</strong></span>, one involves managing a project (understanding client and user needs, setting up project management tools...), the other working in an IT team (discovering the required skills in various sectors...).</li></ul>"
                        },
                        analysis: {
                            title: "Reflective analysis",
                            text: "The website development went well overall: the schedule we decided to follow went smoothly, and we were able to submit everything on time.\n\nRegarding the oral presentation, it went quite well, but in my opinion, we should start preparing further in advance next time."
                        },
                        technologies: [technologies[0], technologies[2], technologies[6], technologies[17], technologies[20], technologies[21]]
                    },
                    sae_s2_1_2_6: {
                        title: "SAE S2 1.2.6",
                        category: "University",
                        instructions: {
                            title: "Instructions",
                            text: "The goal of this project was to create a <span style='color:blue;'><strong>board game application in Java</strong></span> using the JavaFx library.\n\nThe choice of the game was limited, as was the IDE we had to use (here <span style='color:red;'><strong>IntelliJ IDEA</strong></span>).\n\nAs with every SAÉ, we had a specific specification:\n<ul><li>constraints on the general progress of the game: the possibility of abandoning a game, a summary at the end of the game (with winner, points...);</li><li>constraints on player interactions;</li><li>implementing 2 AIs;</li><li>graphical aspect in English (code, displayed text...).</li></ul>For each function coded, we also had to produce tests to verify its behavior and quality. At the end of this SAÉ, on June 2, we had to do a <span style='color:green;'><strong>presentation</strong></span> to present our project."
                        },
                        organization_of_work: {
                            title: "Group work organization",
                            text: "My group and I chose the <span style='color:red;'><strong>Kamisado game</strong></span> (<a href='http://jeuxstrategie1.free.fr/jeu_kamisado/regle.pdf' target='_blank'>see rules here</a>).\n\nTo be consistent in our work, we had to submit deliverables:\n<ul><li><span style='color:green;'><strong>May 4</strong></span>: source code with unit tests and an English report;</li><li><span style='color:green;'><strong>May 31</strong></span>: a French report containing the application description and an economic study on the issue of publishing a game;</li><li><span style='color:green;'><strong>June 2</strong></span>: final code and a 15-20 minute English presentation to present the application.</li></ul>To submit these deliverables on time, we divided the work (finding strategies for the AIs, coding the game board, writing the reports...)."
                        },
                        implementation: {
                            title: "My actions in the group",
                            text: "For the first deliverable, I was responsible for determining the algorithm for <span style='color:green;'><strong>placing colors on the game board</strong></span> (see attached).\n\nWith another group member, we <span style='color:blue;'><strong>coded the pawns</strong></span> (position, state, color...). Still in pairs, I then worked on designing an <span style='color:red;'><strong>Artificial Intelligence</strong></span> whose strategy was to always move straight and calculate future moves based on where it placed its pawn.\n\nAlthough the AI was not finished, I worked with other members on <span style='color:green;'><strong>unit tests</strong></span>, leaving my partner to finish the AI.\n\nI then created the <span style='color:blue;'><strong>KeyBoard controller</strong></span>, which allows using keyboard keys during a game.",
                            images: [
                                {
                                    path: sae_s2_1_2_6_plateau_Kamisado,
                                    legend: "Legend: Kamisado game board"
                                }
                            ]
                        },
                        result: {
                            title: "SAÉ Result",
                            file: "" // TODO
                        },
                        personal_enrichment: {
                            title: "Personal enrichment",
                            text: "This SAÉ allowed me to learn a lot in a short time:\n<ul><li>I became familiar with the JavaFx library;</li><li>I applied the Quality Development course by participating in creating the tests;</li><li>I realized the complexity of creating a board game.</ul>"
                        },
                        skills_worked: {
                            title: "Skills developed",
                            text: "This project allowed me to familiarize myself with the following skills:\n<ul><li><span style='color:black;'><strong>skill 1</strong></span> which involves creating an application (implementing and designing simple concepts, testing, developing user interfaces);</li><li><span style='color:black;'><strong>skill 2</strong></span> which involves optimizing applications (analyzing a problem with a precise method, experimenting with the notion of compilation, formalizing and using mathematical tools);</li><li><span style='color:black;'><strong>skills 5 and 6</strong></span> related to project management and working in an IT team, i.e., understanding client and user needs, setting up project management tools, discovering the required skills in various sectors...</li></ul>"
                        },
                        analysis: {
                            title: "Reflective analysis",
                            text: "Considering the difficulty of producing a game in such a short time and given our very limited knowledge of the JavaFx library, I think we did quite well on this project.\n\nHowever, we could have been more active during the holidays, which would have allowed us to be more productive and deliver better quality work."
                        },
                        technologies: [technologies[7], technologies[19], technologies[27]]
                    }
                }
            },
            2023: {
                category: "Second year projects",
                summary: "During my second year, I completed an internship and a SAÉ. This one involves several skills from the second year curriculum of the Computer Science Technical Degree.",
                projects: {
                    sae_s3: {
                        title: "SAE S3",
                        category: "University",
                        instructions: {
                            title: "Instructions",
                            text: "This site was created by a team of five developers, including myself, to manage an imaginary event. It should provide users with information about the event through the homepage, allow them to view the schedule of planned events, and access an interactive map of the venue. Users also have the option to create an account on the site to make reservations. At the end of this SAÉ, we had to present and demonstrate the project to our professors."
                        },
                        organization_of_work: {
                            title: "Group work organization",
                            text: "My group and I chose to create the site for a sports event we named <span style='color:black;'><strong>\"LAKESIDE SPORT FESTIVAL\"</strong></span>. This sports event was for a charitable cause in collaboration with the APF France Handicap association.\n\nTo successfully complete this project, we used the <span style='color:red;'><strong>agile SCRUM method</strong></span>, meeting every two weeks to review the developed features and list those to be developed in the following two weeks.\n\nWe also used <span style='color:blue;'><strong>Trello</strong></span> to facilitate coordination and communication within the team.\n\nAdditionally, we used a <span style='color:green;'><strong>GitHub</strong></span> repository to facilitate collaborative development."
                        },
                        implementation: {
                            title: "My actions in the group",
                            text: "<h4 style='color:black;'><strong>Website</strong></h4>\nI was responsible for <span style='color:blue;'><strong>setting up the entire database</strong></span>. To do this, I created several ERDs (Entity-Relationship Diagrams) using Looping, a conceptual data modeling software.\n\nAdditionally, I decided to use PostgreSQL as the database management system due to its flexibility.\n\nRegarding queries to the database, I considered the method to use: pure SQL or using an ORM. I ultimately chose to use pure SQL because it requires less specific knowledge and avoids adding extra dependencies.\n\nI also handled all the SQL queries needed for the application (authentication, deletion, addition, reservation...).\n\nFurthermore, I <span style='color:green;'><strong>created some interactive pages</strong></span> in VueJS, as well as numerous <span style='color:green;'><strong>mockups</strong></span> of the site pages.\n\n<h4 style='color:black;'><strong>Presentation</strong></h4>\nFor the presentation, I conveyed my group's feedback on this project.",
                            images: [
                                {
                                    path: sae_s3_mcd,
                                    legend: "Legend: Application ERD"
                                }
                            ]
                        },
                        result: {
                            title: "SAÉ Result",
                            text: `<a href="https://github.com/mcrayssac/SAE-S3" target="_blank">GitHub Repository</a>\n<a href="https://docs.google.com/presentation/d/1S9f4xpcZSaWmyRGIQ57jWnSQk5dWe2ssHt2VOZI6oEs/edit?usp=sharing" target="_blank">Presentation Slides</a>`
                        },
                        personal_enrichment: {
                            title: "Personal enrichment",
                            text: "This SAÉ allowed me to learn a lot in a short time:\n<ul><li>I became familiar with using <span style='color:green;'><strong>VueJS</strong></span> and the <span style='color:green;'><strong>RCS model</strong></span>;</li><li>I was able to apply the lessons from the 'Project Management' course by practicing the agile <span style='color:green;'><strong>SCRUM</strong></span> method and using tools like Trello;</li><li>I realized the <span style='color:green;'><strong>complexity of creating a website</strong></span> with numerous features.</li></ul>"
                        },
                        skills_worked: {
                            title: "Skills developed",
                            text: "During this project, several skills were developed and associated:\n<ul><li><span style='color:black;'><strong>Skill 1: Developing an Application</strong></span><ul><li>Starting from requirements and progressing to a complete application</li><li>Specializing in a web support with quality tracking</li></ul></li><li><span style='color:black;'><strong>Skill 2: Optimizing Applications</strong></span>\nSelecting appropriate algorithms to solve a given problem<li><span style='color:black;'><strong>Skill 4: Managing Information Data</strong></span><ul><li>Designing and modeling a database</li><li>Interacting with the database to retrieve, insert, update, or delete data.</li><li>Optimizing a database</li></ul></li><li><span style='color:black;'><strong>Skill 5: Managing a Project</strong></span><ul><li>Planning and organizing the various stages of the project: defining objectives, resources, and necessary deadlines</li><li>Applying a project management approach according to the business needs of clients and users</li></ul></li><li><span style='color:black;'><strong>Skill 6: Working in an IT Team</strong></span><ul><li>Collaborating with other developers</li><li>Defining one's role and tasks within an IT team</li><li>Identifying skills to work in a team</li></ul></li></ul>"
                        },
                        analysis: {
                            title: "Reflective analysis",
                            text: "This SAÉ was very interesting, although I encountered several difficulties in setting up the database. Additionally, it would have been interesting if I had done a bit more web development or participated in the interactive map.\n\nRegarding teamwork, we organized ourselves well, but we should have created multiple branches on the GitHub repository to better organize our work."
                        },
                        technologies: [technologies[7], technologies[11], technologies[20], technologies[5], technologies[3], technologies[16]]
                    },
                    stage_s4: {
                        title: "SAÉ S4 Internship",
                        category: "Professional",
                        instructions: {
                            title: "Instructions",
                            text: "The SAÉ S4 Internship was completed in a company. For my part, I did it at <span style='color:red;'><strong>Natural Solutions</strong></span>, a company in Marseille.\n\nEach month, this company needs to generate quotes and invoices for its clients. To simplify this process, an intern was recruited in 2021 to implement the Billing Tool, which they developed in <strong>JS, Node JS, and React JS</strong>.\n\nMy mission was to fix existing problems, improve current features, and add new ones. The main tasks assigned to me were setting up the <span style='color:green;'><strong>database</strong></span>, <span style='color:green;'><strong>modifying the project selection principle</strong></span>, and <span style='color:green;'><strong>generating documents</strong></span>.\n\nFor this project, I was alone in the team, although I could consult my internship supervisor if needed.\n\nAt the end of this SAÉ, we had to make an oral presentation and two reports:\n<ul><li>one technical (intended for an IT professional taking over the work)</li><li>the other explaining the course of our internship without going into technical details.</li></ul>"
                        },
                        organization_of_work: {
                            title: "Group work organization",
                            text: "At Natural Solutions, we apply the <span style='color:red;'><strong>Scrum methodology</strong></span>. It is an agile method based on an empirical, dynamic, and participative approach to project management.\n\nAdditionally, throughout my internship, I used <span style='color:red;'><strong>GitLab</strong></span>. It is an application lifecycle management (ALM) platform that provides collaborative development features. To use it appropriately, my internship supervisor and I created several branches of the project (one for development, one for production, one for global changes, etc.). Using it regularly allowed me to adhere to <span style='color:green;'><strong>best development practices</strong></span>."
                        },
                        implementation: {
                            title: "Implementation",
                            text: "<h4 style='color:black;'><strong>Database</strong></h4>\nTo set up the database, it was necessary to:\n<ul><li>Create an ERD (Entity-Relationship Diagram)</li><li>Use the <span style='color:blue;'><strong>PostgreSQL</strong></span> database management system</li><li>Use the <span style='color:blue;'><strong>Sequelize</strong></span> ORM (to simplify interaction with the database)</li><li>Connect the database with the backend (using environment variables)</li><li>Populate the database by creating a function to insert elements one by one from a <span style='color:blue;'><strong>JSON file</strong></span></li></ul>\n\n<h4 style='color:black;'><strong>Modification of the Project Selection Principle</strong></h4>\nBefore the changes, the user had to know the exact name of the project (including case sensitivity) they wanted to perform an action on. It was decided that the new project search principle would be in the form of two dropdown lists where each item could be checked or unchecked.\n\nOne of the lists contained all the projects developed for RENECO, while the other contained all other projects.\n\nFor this task, I had to:\n<ul><li>Retrieve the list of all projects from an external API where they are stored</li><li>Sort the previously obtained results based on whether they were developed for the main client or not</li><li>Read the ReactJS documentation to create a new component (a reusable web page element that can be used by several other pages)</li><li>Enable my new component to transmit information such as the selected projects to its parent component (HTML page that uses another component, called a child component)</li></ul>\n\nThe requested report presents the support activities performed during a period specified by the user. Support activities refer to tasks performed by the development team after the product is delivered to the client and in after-sales service.\n\nTo address this type of problem, Natural Solutions uses <span style='color:red;'><strong>Zendesk</strong></span> (a customer service and relationship management platform). To generate the report, it is therefore essential to query the Zendesk API.\n\nFirst, we established a connection with this API. Then, I had to make three requests to this API:\n<ul><li>The first retrieved all tickets updated between two dates specified by the user.</li><li>The second was used to obtain the ticket name, which, in our case, also corresponded to the specification name.</li><li>The third retrieved the role of the person on all comments associated with the tickets.</li></ul>\n\nThen, I selected the relevant results to display and sorted them chronologically.\n\nThe code for downloading the file was already present in the initial code but required several modifications. Additionally, I had to create a Word Template to provide a predefined structure to follow when generating the reports.",
                            images: [
                                {
                                    path: sae_s4_mcd,
                                    legend: "Legend: Application ERD"
                                }, {
                                    path: sae_s4_principe_selection_apres,
                                    legend: "Legend: Application ERD"
                                }
                            ]
                        },
                        result: {
                            title: "SAÉ Result",
                            text: "<a href='https://docs.google.com/presentation/d/1uueQqS5IAyxeuxPOwv-2YE4rRnxuOs72wY5auPL-VPI/edit?usp=sharing' target='_blank'>Presentation Link</a>",
                            files: {
                                file_1: {

                                },
                                file_2: {

                                }
                            }
                        },
                        personal_enrichment: {
                            title: "Personal enrichment",
                            text: "I enjoyed this SAÉ greatly, mainly because of my colleagues, who were very attentive.\nAdditionally, I improved my project management skills through the daily use of the SCRUM methodology. I also developed my ability to document and search for information independently and my ability to use tools such as GitLab."
                        },
                        skills_worked: {
                            title: "Skills developed",
                            text: "Regarding the skills in the Computer Science Technical Degree curriculum related to this SAÉ, I believe I worked well on:\n<ul><li><span style='color:black;'><strong>Skill 1: Developing an Application</strong></span><ul><li>Starting from requirements and progressing to a complete application</li><li>Setting up a suitable software architecture to ensure the application's modularity and maintainability.</li></ul></li><li><span style='color:black;'><strong>Skill 2: Optimizing Applications</strong></span><ul><li>Analyzing and optimizing applications</li><li>Understanding and building algorithms</li></ul></li><li><span style='color:black;'><strong>Skill 4: Managing Information Data</strong></span><ul><li>Designing and modeling a database</li></ul></li></ul>"
                        },
                        analysis: {
                            title: "Reflective analysis",
                            text: "To be more efficient in the future, I need to search for information more effectively to avoid wasting time. Additionally, I should familiarize myself more with GitLab and collaborative development best practices. Finally, I should not underestimate the tasks assigned to me, as this sometimes led me to work overtime."
                        },
                        technologies: [technologies[20], technologies[5], technologies[4], technologies[16], technologies[8]]
                    }
                }
            },
            2024: {
                category: "Third year projects",
                summary: "During my third year, I completed an internship and participated in numerous projects, including a SAÉ. These experiences allowed me to work on various projects and acquire many skills.",
                projects: {
                    sae_s5: {
                        title: "SAÉ presentation",
                        category: "University",
                        instructions: {
                            title: "Objective",
                            text: "This SAÉ, completed by <span style='color:red;'><strong>five students</strong></span> in the third year of the Computer Science Technical Degree, aimed to develop a multi-architecture application using microcontrollers and connected objects to collect, process, and visualize data.\nMy group and I chose to create a reflex testing application for scientists."
                        },
                        architecture: {
                            title: "Architecture",
                            text: "The application includes several complex infrastructures that need to communicate with each other.\n\nWe have a <span style='color:blue;'><strong>mobile application</strong></span> (coded for Android in our case) designed to take videos and send them to an <span style='color:blue;'><strong>analysis server</strong></span>. This server, as the name suggests, analyzes the received information. Once the processing is done, it sends the results to a <span style='color:blue;'><strong>centralization server</strong></span> coded in Java. This server also receives data from microcontrollers. It communicates with an <span style='color:blue;'><strong>API</strong></span> made in Node.js to store the received data in a <span style='color:blue;'><strong>MongoDB database</strong></span>. The centralization server can also communicate directly with the database without going through the API. Finally, the data will be displayed as statistics on a web page (<span style='color:blue;'><strong>frontend</strong></span>) created in Vue.js.\n\nThe figure below shows the application's architecture.",
                            images: [
                                {
                                    path: archi_sae,
                                    legend: "Legend: SAÉ architecture"
                                },
                            ]
                        },
                        organization_of_work: {
                            title: "Development process",
                            text: "To develop this application, we used <span style='color:green;'><strong>GitLab</strong></span> and <span style='color:green;'><strong>Trello</strong></span> for version control and task planning.\n\nRegarding deployment, a significant part of the application is deployed in <span style='color:green;'><strong>Docker</strong></span> containers.\n\nThe main languages I worked with were:\n<ul><li>Arduino;</li><li>Java;</li><li>JavaScript;</li><li>Kotlin;</li><li>YAML;</li></ul>"
                        },
                        result: {
                            title: "SAÉ result",
                            text: `Currently, this project is ongoing. However, you can find the project's GitLab repository <a href="https://gitlab.iut-bm.univ-fcomte.fr/ggodailf/sae_s5" target='_blank'>here</a>.`
                        },
                        technologies: [technologies[24], technologies[19], technologies[20], technologies[23], technologies[12], technologies[8]]
                    },
                    stage_s6: {
                        title: "Internship presentation",
                        category: "Professional",
                        instructions: {
                            title: "Objective",
                            text: "I completed my internship at <span style='color:red;'><strong>Natural Solutions</strong></span>, a company based in Marseille. This company is dedicated to using technology to benefit biodiversity by developing tools for environmental actors and associations. These tools are primarily web and mobile applications.\n\nThe team I joined consisted of:\n<ul><li>two other developers;</li><li>a project manager;</li><li>a designer.</li></ul>\nMy team and I worked on a project for <span style='color:green;'><strong>Wings of Ocean</strong></span>, an association dedicated to environmental preservation. Our mission was to develop a waste collection management platform.\n\nMy objective during this internship was to <span style='color:blue;'><strong>contribute to the development of this project</strong></span>, called DepollutionMap. The tasks assigned to me were given progressively throughout the project."
                        },
                        organization_of_work: {
                            title: "Development process",
                            text: "To develop this application, we used <span style='color:green;'><strong>GitLab</strong></span> and <span style='color:green;'><strong>Jira</strong></span> for version control and task planning.\nRegarding deployment, the application is deployed in <span style='color:green;'><strong>Docker</strong></span> containers.\nThe main languages I worked with were:\n<ul><li>GraphQL;</li><li>SQL;</li><li>TypeScript;</li><li>React.js;</li></ul>"
                        },
                        result: {
                            title: "Internship Result",
                            text: "At the end of this internship, I had to make an oral presentation and two reports:\n<ul><li>one technical (intended for an IT professional taking over the work);</li><li>the other explaining the course of our internship without going into technical details.</li></ul>\n<a href='https://docs.google.com/presentation/d/1LiP-nK3gmnG1EadbeIMfyvVh-VUsXMA4EwR9I6h4e2o/edit?usp=sharing' target='_blank'>Presentation Link</a>",
                            // files: [
                            //     {
                            //         path: rapport_general,
                            //         alt: "General Report"
                            //     }, {
                            //         path: rapport_technique,
                            //         alt: "Technical Report"
                            //     },
                            // ]
                        },
                        technologies: [technologies[14], technologies[18], technologies[15], technologies[22], technologies[9], technologies[10]]
                    },
                    competence_1: {
                        title: "Skill 1 – Developing an application",
                        instructions: {
                            text: "Skill 1 involves designing, coding, testing, and integrating a software solution for a client."
                        },
                        skill_1: {
                            title: "Develop simple applications",
                            text: "<h4 style='color:black;'><strong>SAÉ project</strong></h4>\nThroughout this project, I practiced essential skills in developing simple applications.\n\nWorking with a partner, I worked on a <span style='color:blue;'><strong>mobile application</strong></span> that allowed users to take photos and send them to an analysis server we also developed. This experience allowed me to create an intuitive and user-friendly interface while implementing and designing simple concepts.\n\nAdditionally, I actively contributed to the <span style='color:red;'><strong>API and frontend development</strong></span>, where I was responsible for displaying database data as graphs. To ensure the reliability of this part, I conducted several <span style='color:green;'><strong>tests in JavaScript</strong></span> to verify that the results matched expectations.\n\n<h4 style='color:black;'><strong>Professional experience</strong></h4>\nDuring my internship, I was tasked with setting up a <span style='color:blue;'><strong>Dashboard</strong></span> accessible to all users, whether logged in or not. To complete this task, I had to design the interface according to user needs, extract data from the database, manipulate it, and display it as requested by the client.\n\n<em>Below, you will find a screenshot of the application's Dashboard.</em>\n\nFor each of these projects, I took care to <span style='color:red;'><strong>comment my code</strong></span> to make the application scalable and easier for another developer to take over.",
                            images: [
                                {
                                    path: competence_1_dashboard,
                                    legend: "Legend: Application Dashboard"
                                },
                            ]
                        },
                        skill_2: {
                            title: "From requirements to a complete application",
                            text: "<h4 style='color:black;'><strong>SAÉ project</strong></h4>\nFor this project, my group and I started by <span style='color:red;'><strong>analyzing the functional and technical requirements</strong></span> provided by our professors. From these requirements, we created a detailed <span style='color:green;'><strong>specification document</span>. Then, using <span style='color:blue;'><strong>Trello</strong></span>, we organized and distributed the tasks among us, which allowed us to track and structure our work efficiently throughout the project.\n\n<em>The photo on the side shows an excerpt from our Trello board.</em>\n\n<h4 style='color:black;'><strong>Professional experience</strong></h4>\nDuring my internship, we did not have an initial specification document. The client communicated their needs progressively. Therefore, we adopted the <span style='color:red;'><strong>agile Scrum methodology</strong></span>, working in sprints. Before each sprint, we defined user needs and the functionalities to be developed for the following two weeks, which allowed us to continuously refine and <span style='color:blue;'><strong>adjust the application</strong></span> based on feedback and emerging requirements.",
                            images: [
                                {
                                    path: competence_1_trello,
                                    legend: "Legend: Trello used during the SAÉ"
                                },
                            ]
                        },
                        skill_3: {
                            title: "Adapt applications for multiple platforms",
                            text: "For the frontend part of the SAÉ and the application developed during my internship, we ensured that the <span style='color:blue;'><strong>user interface</strong></span> was <span style='color:blue;'><strong>responsive</strong></span>, adapting to different screen sizes, whether on a computer or a phone.\n\nAdditionally, I participated in the <span style='color:green;'><strong>containerization of both projects with Docker</strong></span>. Using this technology made it easier to deploy and install applications on different platforms and operating systems."
                        },
                        analysis: {
                            title: "Conclusion",
                            text: "These experiences allowed me to acquire and strengthen my <span style='color:red;'><strong>knowledge in application development</strong></span>.\n\nIndeed, during my SAÉ and internship, I made sure to meet client needs and ensure code quality through careful documentation, making the applications easier to evolve."
                        }
                    },
                    competence_2: {
                        title: "Skill 2: optimizing applications",
                        instructions: {
                            text: "This skill involves modeling complex situations, relying on reasoning schemes, and justifying choices."
                        },
                        skill_1: {
                            title: "Understanding and building algorithms",
                            text: "<h4 style='color:black;'><strong>SAÉ project</strong></h4>\nIn this project, I participated in developing a reflex testing application for scientists. This project required a thorough analysis of needs and a <span style='color:red;'><strong>decomposition of the problem</strong></span> into simple elements. We designed a complex architecture where microcontrollers and connected objects collect data, transmit it to various servers for analysis, and store it.\n\n<h4 style='color:black;'><strong>Professional experience</strong></h4>\nDuring my internship, I developed a Dashboard that required retrieving, formatting, analyzing, and displaying recorded data. To do this, I wrote <span style='color:blue;'><strong>optimal queries</strong></span> to minimize data processing. Additionally, the Dashboard needed to respond instantly to user-selected filters, so I <span style='color:green;'><strong>optimized calculations</strong></span> and database calls to avoid server overload and provide instant client-side feedback."
                        },
                        skill_2: {
                            title: "Selecting appropriate algorithms for a given problem",
                            text: "<h4 style='color:black;'><strong>SAÉ project</strong></h4>\nThe application we developed required the use of complex data structures. Indeed, the information from the microcontrollers and the mobile application was unstructured, leading us to <span style='color:blue;'><strong>choose MongoDB</strong></span> for its ability to efficiently manage this type of data.\n\n<h4 style='color:black;'><strong>Professional experience</strong></h4>\nDuring my internship, managing and <span style='color:red;'><strong>securing sensitive data</strong></span> was a priority for the DepollutionMap application. We implemented robust security measures to protect the association's data, including selecting the <span style='color:green;'><strong>access rights</strong></span> for each table based on user types (administrators, volunteers, etc.). We also implemented an <span style='color:green;'><strong>authentication system</strong></span> using tokens and updated the user interface based on the logged-in user's rights (e.g., a button to create a resource is only accessible to administrators)."
                        },
                        skill_3: {
                            title: "Analyzing and optimizing applications",
                            text: "In the context of the SAÉ, I developed an analysis server capable of detecting if two faces are looking in the same direction. To do this, I conducted <span style='color:red;'><strong>research and technology watch</strong></span>. I conducted numerous tests that initially failed, but after adapting a file found on GitHub, I was able to accomplish this task.\n\nThis experience allowed me to <span style='color:green;'><strong>select</strong></span> and <span style='color:green;'><strong>use</strong></span> effectively <span style='color:green;'><strong>libraries</strong></span> and methods specific to the application domain, considering various problems and constraints encountered.",
                            images: {
                                image_1: {

                                }
                            }
                        },
                        analysis: {
                            title: "Conclusion",
                            text: "These experiences allowed me to acquire and strengthen my <span style='color:red;'><strong>knowledge in application optimization</strong></span>.\n\nIndeed, during my SAÉ and internship, I learned to design and select appropriate algorithms for encountered problems, as well as analyze and optimize applications effectively."
                        }
                    },
                    competence_6: {
                        title: "Skill 6: Collaborating within a team",
                        instructions: {
                            text: "The goal of this skill is to acquire, develop, and use the aptitudes necessary to work in an IT team."
                        },
                        skill_1: {
                            title: "Identifying skills for teamwork",
                            text: "<h4 style='color:black;'><strong>SAÉ project</strong></h4>\nFor this project, my group and I <span style='color:green;'><strong>distributed tasks</strong></span> based on each other's skills. It was crucial to <span style='color:red;'><strong>identify</strong></span> my <span style='color:red;'><strong>skills</strong></span>, those of other team members, and those required for each task to allocate them optimally.\n\n<h4 style='color:black;'><strong>Professional experience</strong></h4>\nDuring my internship, I was supervised by my internship supervisor and the project manager. Although I did not have to <span style='color:blue;'><strong>directly identify</strong></span> everyone's skills, I learned to recognize each team member's role and status. This allowed me to know who to turn to based on my specific needs.\n\nFor both experiences, I developed <span style='color:green;'><strong>strong interpersonal skills</strong></span>. I learned to adapt quickly to various situations and strengthen my teamwork and communication skills. This greatly facilitated <span style='color:red;'><strong>collaboration</strong></span> and <span style='color:red;'><strong>cohesion</strong></span> within the teams I worked with."
                        },
                        skill_2: {
                            title: "Understanding my role and responsibilities in an IT team",
                            text: "For each project I contributed to, I actively participated in <span style='color:blue;'><strong>team meetings</strong></span> and used various <span style='color:green;'><strong>collaboration tools</strong></span> such as <span style='color:red;'><strong>GitLab</strong></span>, Microsoft Teams, and Discord. These experiences allowed me to integrate quickly and effectively into IT teams, contributing significantly to ongoing projects.\n\nI also developed and refined my interpersonal skills, particularly in collaboration, communication, and listening. These skills helped me <span style='color:blue;'><strong>work effectively</strong></span> in diverse team environments, fostering a cooperative atmosphere.\n\nFinally, to <span style='color:green;'><strong>track my activity</strong></span> and ensure continuous transparency and accountability in my work, I used project management tools such as <span style='color:red;'><strong>Trello</strong></span> and <span style='color:red;'><strong>Jira</strong></span>.",
                            images: [
                                {
                                    path: competence_6_gitlab,
                                    legend: "Legend: SAÉ GitLab repository"
                                }
                            ]
                        },
                        skill_3: {
                            title: "Managing an IT team",
                            text: "During the projects I completed this year, I often took the initiative to <span style='color:blue;'><strong>help</strong></span> and <span style='color:blue;'><strong>assign tasks</strong></span> to my group. In situations where we encountered problems, I was often able to <span style='color:green;'><strong>propose possible solutions</strong></span>. These proposals were then discussed in the group, allowing us to find the best collective approach.\n\nThanks to this dynamic, I contributed to maintaining an efficient workflow and strengthening team cohesion while developing my management and problem-solving skills."
                        },
                        analysis: {
                            title: "Conclusion",
                            text: "These experiences allowed me to acquire and strengthen my <span style='color:red;'><strong>collaboration skills</strong></span> within an IT team.\n\nIndeed, I learned to use essential tools in the IT field, such as GitLab. Additionally, during my SAÉ and internship, I ensured to report on my professional activity, develop my interpersonal skills, and actively support my team."
                        }
                    }
                }
            }
        }
    }
};

module.exports = {
    name: name,
    home_btn: home_btn,
    projects_btn: projects_btn,
    status: status,
    about_me_title: about_me_title,
    about_me: about_me,
    my_projects: my_projects,
    professional_experience_title: professional_experience_title,
    professional_experience: professional_experience,
    hobbies_title: hobbies_title,
    hobbies: hobbies,
    download_cv: download_cv,
    link_cv: link_cv,
    mail: mail,
    github: github,
    linkedin: linkedin,
    projects_page_title: projects_page_title,
    experiences: experiences,
    more_projects: more_projects
}
