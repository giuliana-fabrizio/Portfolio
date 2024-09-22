<template>
    <div class="container">
        <header id="all_projects_header">
            <section id="titre" class="w-100">
                <h1 class="mb-4 mt-3 text-primary">{{ title }}</h1>
                <p class="text-secondary">{{introText}}</p>
            </section>
        </header>

        <main id="all_projects_main" class="pb-5">
            <FilterProjectsComponent
                :categories_props="categories"
                :technos_props="technos"
                @categories_props="updateCategories"
                @technos_props="updateTechnos" />

            <div class="row">
                <div v-for="(project, key) in projects" :key="key" :class="[getClass(Object.keys(projects).length), 'mb-4']">
                    <router-link
                        :to="{ name: 'details' }"
                        v-if="(categories.length === 0 || categories.includes(project.category.name)) &&
                            (technos.length === 0 || project.technologies.filter(techno => technos.includes(techno.name)).length > 0)"
                        class="text-decoration-none">

                        <div
                            class="card bg-light h-100 shadow-sm border-0 rounded"
                            @click="setProject(project)"
                            style="background-color: #f4f4f9; transition: transform 0.3s, box-shadow 0.3s;">

                            <div class="card-body m-3">
                                <div class="d-flex justify-content-between align-items-center mb-3 flex-column flex-lg-row text-center text-md-start">
                                    <h5 style="color:#555"><strong>{{ project.title }}</strong></h5>
                                    <p :class="['badge', project.category.class, 'text-wrap']">{{ project.category.name }}</p>
                                </div>

                                <p
                                    class="text-secondary mb-3 d-xl-block"
                                    v-html="formattedText(project.technologies ?
                                        truncatedInstructions(project.instructions.text) :
                                        project.instructions.text)">
                                </p>

                                <div class="d-flex flex-wrap">
                                    <span
                                        v-for="(technologie, index) in project.technologies"
                                        :key="index"
                                        :class="[technologie.class, 'badge', 'text-wrap', 'me-2', 'mb-2']">
                                        {{ technologie.name }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </main>
        <TopButtonComponent />
    </div>
</template>

<script>
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import FilterProjectsComponent from '../components/FilterProjectsComponent.vue';
import TopButtonComponent from '../components/TopButtonComponent.vue';

export default {
    name: 'AllProjectsView',

    components: {
        FilterProjectsComponent,
        TopButtonComponent
    },

    data: () => ({
        title: "",
        introText: "",
        allProjects: {},
        projects: {},

        categories: [],
        technos: []
    }),

    created() {
        const language = this.$store.getters.getLanguage;
        const isFrench = language === 'french';

        this.title = isFrench ? variables_fr.projects_page_title : variables_en.projects_page_title;
        this.introText = isFrench ? variables_fr.projects_page_presentation : variables_en.projects_page_presentation;

        this.categories = this.$route.query.categories ?
            JSON.parse(this.$route.query.categories) :
            [];
        this.technos = this.$route.query.technologies ?
            JSON.parse(this.$route.query.technologies) :
            [];

        this.allProjects = Object.values(isFrench ? variables_fr.projects : variables_en.projects);
        this.setProjects();
    },

    methods: {
        truncatedInstructions(instructions) {
            const maxLength = Object.keys(this.projects).length <= 2 ? 175 : 100;
            if (instructions.length > maxLength) {
                return instructions.substring(0, maxLength) + '...';
            }
            return instructions;
        },
        formattedText(text) {
            if (!text) return '';
            return text
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        },
        getClass(length) {
            if (length <= 1) {
                return 'col-md-12';
            }
            if (length == 2) {
                return 'col-md-6';
            }
            return 'col-12 col-sm-6 col-md-4';
        },
        setProject(project) {
            this.$store.commit('setProject', project);
        },

        setProjects() {
            this.projects = this.allProjects.filter(project =>
                (this.categories.length === 0 || this.categories.includes(project.category.name)) &&
                (this.technos.length === 0 || project.technologies.some(techno => this.technos.includes(techno.name)))
            );
        },
        updateCategories(categories) {
            this.categories = categories;
            this.setProjects();
        },
        updateTechnos(technos) {
            this.technos = technos;
            this.setProjects();
        },
    },
}
</script>

<style>
.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
