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
                <div v-if="projects.length === 0">
                    <p><strong>Aucun résultat</strong></p>
                    <p>Modifier ou supprimer certains de vos filtres</p>
                </div>

                <div
                    v-for="(project, key) in projects"
                    :key="key"
                    :class="[getClass(Object.keys(projects).length), 'mb-4']">
                    <router-link
                        :to="{ name: 'details' }"
                        v-if="(categories.length === 0 || categories.includes(project.category.name)) &&
                            (technos.length === 0 || project.technologies.filter(techno => technos.includes(techno.name)).length > 0)"
                        class="text-decoration-none">
                        <CardProjectComponent :project="project" :projects_len="Object.keys(projects).length" />
                    </router-link>
                </div>
            </div>
        </main>
        <TopButtonComponent />
    </div>
</template>

<script>
import { Tooltip } from 'bootstrap';
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import FilterProjectsComponent from '@/components/FilterProjectsComponent.vue';
import TopButtonComponent from '@/components/TopButtonComponent.vue';
import CardProjectComponent from '@/components/CardProjectComponent.vue';

export default {
    name: 'AllProjectsView',

    components: {
        FilterProjectsComponent,
        TopButtonComponent,
        CardProjectComponent
    },

    data: () => ({
        title: "",
        introText: "",
        allProjects: {},
        projects: {},

        categories: [],
        technos: [],

        tooltips: []
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

    mounted() {
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
            const tooltip = new Tooltip(el);
            this.tooltips.push(tooltip);
        });
    },

    beforeRouteLeave(to, from, next) {
        if (this.tooltips && this.tooltips.length > 0) {
            this.tooltips.forEach(tooltip => tooltip.dispose());
            this.tooltips = [];
        }
        next();
    },

    methods: {
        getClass(length) {
            if (length <= 1) {
                return 'col-md-12';
            }
            if (length == 2) {
                return 'col-md-6';
            }
            return 'col-12 col-md-6 col-lg-4 col-xl-4';
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
