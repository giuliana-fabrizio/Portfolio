<template>
    <div>
        <AnimeBackgroundComponent />

        <div class="container">
            <TitleComponent :title="title" />
            <p class="bg-white mx-auto text-gray">{{ introText }}</p>

            <div>
                <FilterProjectsComponent :categories_props="categories" :technos_props="technos"
                    @categories_props="updateCategories" @technos_props="updateTechnos" />


                <div class="row">
                    <div v-if="Object.values(projects).length === 0">
                        <p class="bg-white mb-0 mx-auto"><strong>Aucun résultat</strong></p>
                        <p class="bg-white mx-auto">Modifier ou supprimer certains de vos filtres</p>
                    </div>

                    <div v-else v-for="(project, key) in projects" :key="key"
                        :class="[getClass(Object.keys(projects).length), 'mb-4']">
                        <router-link :to="{ name: 'details' }"
                            v-if="(categories.length === 0 || categories.includes(project.category.name)) &&
                                (technos.length === 0 || project.technologies.filter(techno => technos.includes(techno.name)).length > 0)"
                            class="text-decoration-none">
                            <CardProjectComponent :id_project="key" :project="project"
                                :projects_len="Object.keys(projects).length" />
                        </router-link>
                    </div>
                </div>
            </div>
            <TopButtonComponent />
        </div>
    </div>
</template>

<script>
import { Tooltip } from 'bootstrap';
import variables_fr from '../variables_fr.js';
import variables_en from '../variables_en.js';

import AnimeBackgroundComponent from '@/components/AnimeBackgroundComponent.vue';
import CardProjectComponent from '@/components/CardProjectComponent.vue';
import FilterProjectsComponent from '@/components/FilterProjectsComponent.vue';
import TitleComponent from '../components/TitleComponent.vue';
import TopButtonComponent from '@/components/TopButtonComponent.vue';

export default {
    name: 'AllProjectsView',

    components: {
        AnimeBackgroundComponent,
        CardProjectComponent,
        FilterProjectsComponent,
        TopButtonComponent,
        TitleComponent
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
        this.categories = this.$route.query.categories ?
            JSON.parse(this.$route.query.categories) :
            [];
        this.technos = this.$route.query.technologies ?
            JSON.parse(this.$route.query.technologies) :
            [];

        this.updateContent();
    },

    mounted() {
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
            const tooltip = new Tooltip(el);
            this.tooltips.push(tooltip);
        });
    },

    computed: {
        language() {
            return this.$store.getters.getLanguage;
        }
    },

    watch: {
        language() {
            this.updateContent();
        }
    },

    beforeRouteLeave(to, from, next) {
        if (this.tooltips && this.tooltips.length > 0) {
            this.tooltips.forEach(tooltip => tooltip.dispose());
            this.tooltips = [];
        }
        next();
    },

    methods: {
        updateContent() {
            const isFrench = this.language === 'french';

            this.title = isFrench ? variables_fr.projects_page_title : variables_en.projects_page_title;
            this.introText = isFrench ? variables_fr.projects_page_presentation : variables_en.projects_page_presentation;

            this.allProjects = isFrench ? variables_fr.projects : variables_en.projects;
            this.setProjects();
        },

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
            this.projects = {};
            for (const id in this.allProjects) {
                const project = this.allProjects[id];
                if ((this.categories.length === 0 || this.categories.includes(project.category.name)) &&
                    (this.technos.length === 0 || project.technologies.some(techno => this.technos.includes(techno.name)))) {
                    this.projects[id] = project;
                }
            }
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
